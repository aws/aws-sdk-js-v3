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

import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "../commands/AssociateWebACLCommand";
import { CheckCapacityCommandInput, CheckCapacityCommandOutput } from "../commands/CheckCapacityCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "../commands/CreateIPSetCommand";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "../commands/CreateRegexPatternSetCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "../commands/CreateRuleGroupCommand";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "../commands/CreateWebACLCommand";
import {
  DeleteFirewallManagerRuleGroupsCommandInput,
  DeleteFirewallManagerRuleGroupsCommandOutput,
} from "../commands/DeleteFirewallManagerRuleGroupsCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "../commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "../commands/DeleteLoggingConfigurationCommand";
import {
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "../commands/DeletePermissionPolicyCommand";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "../commands/DeleteRegexPatternSetCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "../commands/DeleteRuleGroupCommand";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "../commands/DeleteWebACLCommand";
import {
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
} from "../commands/DescribeManagedRuleGroupCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "../commands/DisassociateWebACLCommand";
import {
  GenerateMobileSdkReleaseUrlCommandInput,
  GenerateMobileSdkReleaseUrlCommandOutput,
} from "../commands/GenerateMobileSdkReleaseUrlCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "../commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "../commands/GetLoggingConfigurationCommand";
import { GetManagedRuleSetCommandInput, GetManagedRuleSetCommandOutput } from "../commands/GetManagedRuleSetCommand";
import {
  GetMobileSdkReleaseCommandInput,
  GetMobileSdkReleaseCommandOutput,
} from "../commands/GetMobileSdkReleaseCommand";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "../commands/GetPermissionPolicyCommand";
import {
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
} from "../commands/GetRateBasedStatementManagedKeysCommand";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "../commands/GetRegexPatternSetCommand";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "../commands/GetRuleGroupCommand";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "../commands/GetSampledRequestsCommand";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "../commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "../commands/GetWebACLForResourceCommand";
import {
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
} from "../commands/ListAvailableManagedRuleGroupsCommand";
import {
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
} from "../commands/ListAvailableManagedRuleGroupVersionsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "../commands/ListLoggingConfigurationsCommand";
import {
  ListManagedRuleSetsCommandInput,
  ListManagedRuleSetsCommandOutput,
} from "../commands/ListManagedRuleSetsCommand";
import {
  ListMobileSdkReleasesCommandInput,
  ListMobileSdkReleasesCommandOutput,
} from "../commands/ListMobileSdkReleasesCommand";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "../commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "../commands/ListResourcesForWebACLCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "../commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "../commands/ListWebACLsCommand";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "../commands/PutLoggingConfigurationCommand";
import {
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
} from "../commands/PutManagedRuleSetVersionsCommand";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "../commands/PutPermissionPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "../commands/UpdateIPSetCommand";
import {
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
} from "../commands/UpdateManagedRuleSetVersionExpiryDateCommand";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "../commands/UpdateRegexPatternSetCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "../commands/UpdateRuleGroupCommand";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "../commands/UpdateWebACLCommand";
import {
  ActionCondition,
  All,
  AllowAction,
  AllQueryArguments,
  AndStatement,
  AssociatedResourceType,
  AssociateWebACLRequest,
  AssociateWebACLResponse,
  AssociationConfig,
  AWSManagedRulesATPRuleSet,
  AWSManagedRulesBotControlRuleSet,
  BlockAction,
  Body,
  ByteMatchStatement,
  CaptchaAction,
  CaptchaConfig,
  CaptchaResponse,
  ChallengeAction,
  ChallengeConfig,
  ChallengeResponse,
  CheckCapacityRequest,
  CheckCapacityResponse,
  Condition,
  CookieMatchPattern,
  Cookies,
  CountAction,
  CountryCode,
  CreateIPSetRequest,
  CreateIPSetResponse,
  CreateRegexPatternSetRequest,
  CreateRegexPatternSetResponse,
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CreateWebACLRequest,
  CreateWebACLResponse,
  CustomHTTPHeader,
  CustomRequestHandling,
  CustomResponse,
  CustomResponseBody,
  DefaultAction,
  DeleteFirewallManagerRuleGroupsRequest,
  DeleteFirewallManagerRuleGroupsResponse,
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
  DeletePermissionPolicyRequest,
  DeletePermissionPolicyResponse,
  DeleteRegexPatternSetRequest,
  DeleteRegexPatternSetResponse,
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteWebACLRequest,
  DeleteWebACLResponse,
  DescribeManagedRuleGroupRequest,
  DescribeManagedRuleGroupResponse,
  DisassociateWebACLRequest,
  DisassociateWebACLResponse,
  ExcludedRule,
  FieldToMatch,
  Filter,
  FirewallManagerRuleGroup,
  FirewallManagerStatement,
  ForwardedIPConfig,
  GenerateMobileSdkReleaseUrlRequest,
  GenerateMobileSdkReleaseUrlResponse,
  GeoMatchStatement,
  GetIPSetRequest,
  GetIPSetResponse,
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
  GetManagedRuleSetRequest,
  GetManagedRuleSetResponse,
  GetMobileSdkReleaseRequest,
  GetMobileSdkReleaseResponse,
  GetPermissionPolicyRequest,
  GetPermissionPolicyResponse,
  GetRateBasedStatementManagedKeysRequest,
  GetRateBasedStatementManagedKeysResponse,
  GetRegexPatternSetRequest,
  GetRegexPatternSetResponse,
  GetRuleGroupRequest,
  GetRuleGroupResponse,
  GetSampledRequestsRequest,
  GetSampledRequestsResponse,
  GetWebACLForResourceRequest,
  GetWebACLForResourceResponse,
  GetWebACLRequest,
  GetWebACLResponse,
  HeaderMatchPattern,
  Headers,
  HTTPHeader,
  HTTPRequest,
  ImmunityTimeProperty,
  IPSet,
  IPSetForwardedIPConfig,
  IPSetReferenceStatement,
  IPSetSummary,
  JsonBody,
  JsonMatchPattern,
  Label,
  LabelMatchStatement,
  LabelNameCondition,
  LabelSummary,
  ListAvailableManagedRuleGroupsRequest,
  ListAvailableManagedRuleGroupsResponse,
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsResponse,
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
  ListManagedRuleSetsRequest,
  ListManagedRuleSetsResponse,
  ListMobileSdkReleasesRequest,
  ListMobileSdkReleasesResponse,
  ListRegexPatternSetsRequest,
  ListRegexPatternSetsResponse,
  ListResourcesForWebACLRequest,
  ListResourcesForWebACLResponse,
  ListRuleGroupsRequest,
  ListRuleGroupsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListWebACLsRequest,
  ListWebACLsResponse,
  LoggingConfiguration,
  LoggingFilter,
  ManagedRuleGroupConfig,
  ManagedRuleGroupStatement,
  ManagedRuleGroupSummary,
  ManagedRuleGroupVersion,
  ManagedRuleSet,
  ManagedRuleSetSummary,
  ManagedRuleSetVersion,
  Method,
  MobileSdkRelease,
  NoneAction,
  NotStatement,
  OrStatement,
  OverrideAction,
  PasswordField,
  PutLoggingConfigurationRequest,
  PutLoggingConfigurationResponse,
  PutManagedRuleSetVersionsRequest,
  PutManagedRuleSetVersionsResponse,
  PutPermissionPolicyRequest,
  PutPermissionPolicyResponse,
  QueryString,
  RateBasedStatement,
  RateBasedStatementManagedKeysIPSet,
  Regex,
  RegexMatchStatement,
  RegexPatternSet,
  RegexPatternSetReferenceStatement,
  RegexPatternSetSummary,
  ReleaseSummary,
  RequestBodyAssociatedResourceTypeConfig,
  RequestInspection,
  ResponseInspection,
  ResponseInspectionBodyContains,
  ResponseInspectionHeader,
  ResponseInspectionJson,
  ResponseInspectionStatusCode,
  Rule,
  RuleAction,
  RuleActionOverride,
  RuleGroup,
  RuleGroupReferenceStatement,
  RuleGroupSummary,
  RuleSummary,
  SampledHTTPRequest,
  SingleHeader,
  SingleQueryArgument,
  SizeConstraintStatement,
  SqliMatchStatement,
  Statement,
  Tag,
  TagInfoForResource,
  TagResourceRequest,
  TagResourceResponse,
  TextTransformation,
  TimeWindow,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateIPSetRequest,
  UpdateIPSetResponse,
  UpdateManagedRuleSetVersionExpiryDateRequest,
  UpdateManagedRuleSetVersionExpiryDateResponse,
  UpdateRegexPatternSetRequest,
  UpdateRegexPatternSetResponse,
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateWebACLRequest,
  UpdateWebACLResponse,
  UriPath,
  UsernameField,
  VersionToPublish,
  VisibilityConfig,
  WAFAssociatedItemException,
  WAFConfigurationWarningException,
  WAFDuplicateItemException,
  WAFExpiredManagedRuleGroupVersionException,
  WAFInternalErrorException,
  WAFInvalidOperationException,
  WAFInvalidParameterException,
  WAFInvalidPermissionPolicyException,
  WAFInvalidResourceException,
  WAFLimitsExceededException,
  WAFLogDestinationPermissionIssueException,
  WAFNonexistentItemException,
  WAFOptimisticLockException,
  WAFServiceLinkedRoleErrorException,
  WAFSubscriptionNotFoundException,
  WAFTagOperationException,
  WAFTagOperationInternalErrorException,
  WAFUnavailableEntityException,
  WebACL,
  WebACLSummary,
  XssMatchStatement,
} from "../models/models_0";
import { WAFV2ServiceException as __BaseException } from "../models/WAFV2ServiceException";

/**
 * serializeAws_json1_1AssociateWebACLCommand
 */
export const se_AssociateWebACLCommand = async (
  input: AssociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateWebACL");
  let body: any;
  body = JSON.stringify(se_AssociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckCapacityCommand
 */
export const se_CheckCapacityCommand = async (
  input: CheckCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CheckCapacity");
  let body: any;
  body = JSON.stringify(se_CheckCapacityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIPSetCommand
 */
export const se_CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIPSet");
  let body: any;
  body = JSON.stringify(se_CreateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRegexPatternSetCommand
 */
export const se_CreateRegexPatternSetCommand = async (
  input: CreateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegexPatternSet");
  let body: any;
  body = JSON.stringify(se_CreateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRuleGroupCommand
 */
export const se_CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRuleGroup");
  let body: any;
  body = JSON.stringify(se_CreateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebACLCommand
 */
export const se_CreateWebACLCommand = async (
  input: CreateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWebACL");
  let body: any;
  body = JSON.stringify(se_CreateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand
 */
export const se_DeleteFirewallManagerRuleGroupsCommand = async (
  input: DeleteFirewallManagerRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFirewallManagerRuleGroups");
  let body: any;
  body = JSON.stringify(se_DeleteFirewallManagerRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIPSetCommand
 */
export const se_DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIPSet");
  let body: any;
  body = JSON.stringify(se_DeleteIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLoggingConfigurationCommand
 */
export const se_DeleteLoggingConfigurationCommand = async (
  input: DeleteLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLoggingConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePermissionPolicyCommand
 */
export const se_DeletePermissionPolicyCommand = async (
  input: DeletePermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePermissionPolicy");
  let body: any;
  body = JSON.stringify(se_DeletePermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRegexPatternSetCommand
 */
export const se_DeleteRegexPatternSetCommand = async (
  input: DeleteRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegexPatternSet");
  let body: any;
  body = JSON.stringify(se_DeleteRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleGroupCommand
 */
export const se_DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRuleGroup");
  let body: any;
  body = JSON.stringify(se_DeleteRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebACLCommand
 */
export const se_DeleteWebACLCommand = async (
  input: DeleteWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWebACL");
  let body: any;
  body = JSON.stringify(se_DeleteWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeManagedRuleGroupCommand
 */
export const se_DescribeManagedRuleGroupCommand = async (
  input: DescribeManagedRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeManagedRuleGroup");
  let body: any;
  body = JSON.stringify(se_DescribeManagedRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateWebACLCommand
 */
export const se_DisassociateWebACLCommand = async (
  input: DisassociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateWebACL");
  let body: any;
  body = JSON.stringify(se_DisassociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateMobileSdkReleaseUrlCommand
 */
export const se_GenerateMobileSdkReleaseUrlCommand = async (
  input: GenerateMobileSdkReleaseUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateMobileSdkReleaseUrl");
  let body: any;
  body = JSON.stringify(se_GenerateMobileSdkReleaseUrlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIPSetCommand
 */
export const se_GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetIPSet");
  let body: any;
  body = JSON.stringify(se_GetIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoggingConfigurationCommand
 */
export const se_GetLoggingConfigurationCommand = async (
  input: GetLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLoggingConfiguration");
  let body: any;
  body = JSON.stringify(se_GetLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetManagedRuleSetCommand
 */
export const se_GetManagedRuleSetCommand = async (
  input: GetManagedRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetManagedRuleSet");
  let body: any;
  body = JSON.stringify(se_GetManagedRuleSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMobileSdkReleaseCommand
 */
export const se_GetMobileSdkReleaseCommand = async (
  input: GetMobileSdkReleaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMobileSdkRelease");
  let body: any;
  body = JSON.stringify(se_GetMobileSdkReleaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPermissionPolicyCommand
 */
export const se_GetPermissionPolicyCommand = async (
  input: GetPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPermissionPolicy");
  let body: any;
  body = JSON.stringify(se_GetPermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRateBasedStatementManagedKeysCommand
 */
export const se_GetRateBasedStatementManagedKeysCommand = async (
  input: GetRateBasedStatementManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRateBasedStatementManagedKeys");
  let body: any;
  body = JSON.stringify(se_GetRateBasedStatementManagedKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegexPatternSetCommand
 */
export const se_GetRegexPatternSetCommand = async (
  input: GetRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegexPatternSet");
  let body: any;
  body = JSON.stringify(se_GetRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRuleGroupCommand
 */
export const se_GetRuleGroupCommand = async (
  input: GetRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRuleGroup");
  let body: any;
  body = JSON.stringify(se_GetRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSampledRequestsCommand
 */
export const se_GetSampledRequestsCommand = async (
  input: GetSampledRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSampledRequests");
  let body: any;
  body = JSON.stringify(se_GetSampledRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWebACLCommand
 */
export const se_GetWebACLCommand = async (
  input: GetWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWebACL");
  let body: any;
  body = JSON.stringify(se_GetWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWebACLForResourceCommand
 */
export const se_GetWebACLForResourceCommand = async (
  input: GetWebACLForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWebACLForResource");
  let body: any;
  body = JSON.stringify(se_GetWebACLForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableManagedRuleGroupsCommand
 */
export const se_ListAvailableManagedRuleGroupsCommand = async (
  input: ListAvailableManagedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailableManagedRuleGroups");
  let body: any;
  body = JSON.stringify(se_ListAvailableManagedRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand
 */
export const se_ListAvailableManagedRuleGroupVersionsCommand = async (
  input: ListAvailableManagedRuleGroupVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailableManagedRuleGroupVersions");
  let body: any;
  body = JSON.stringify(se_ListAvailableManagedRuleGroupVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIPSetsCommand
 */
export const se_ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIPSets");
  let body: any;
  body = JSON.stringify(se_ListIPSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLoggingConfigurationsCommand
 */
export const se_ListLoggingConfigurationsCommand = async (
  input: ListLoggingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLoggingConfigurations");
  let body: any;
  body = JSON.stringify(se_ListLoggingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListManagedRuleSetsCommand
 */
export const se_ListManagedRuleSetsCommand = async (
  input: ListManagedRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListManagedRuleSets");
  let body: any;
  body = JSON.stringify(se_ListManagedRuleSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMobileSdkReleasesCommand
 */
export const se_ListMobileSdkReleasesCommand = async (
  input: ListMobileSdkReleasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMobileSdkReleases");
  let body: any;
  body = JSON.stringify(se_ListMobileSdkReleasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRegexPatternSetsCommand
 */
export const se_ListRegexPatternSetsCommand = async (
  input: ListRegexPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRegexPatternSets");
  let body: any;
  body = JSON.stringify(se_ListRegexPatternSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourcesForWebACLCommand
 */
export const se_ListResourcesForWebACLCommand = async (
  input: ListResourcesForWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourcesForWebACL");
  let body: any;
  body = JSON.stringify(se_ListResourcesForWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRuleGroupsCommand
 */
export const se_ListRuleGroupsCommand = async (
  input: ListRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRuleGroups");
  let body: any;
  body = JSON.stringify(se_ListRuleGroupsRequest(input, context));
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
 * serializeAws_json1_1ListWebACLsCommand
 */
export const se_ListWebACLsCommand = async (
  input: ListWebACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWebACLs");
  let body: any;
  body = JSON.stringify(se_ListWebACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLoggingConfigurationCommand
 */
export const se_PutLoggingConfigurationCommand = async (
  input: PutLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLoggingConfiguration");
  let body: any;
  body = JSON.stringify(se_PutLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutManagedRuleSetVersionsCommand
 */
export const se_PutManagedRuleSetVersionsCommand = async (
  input: PutManagedRuleSetVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutManagedRuleSetVersions");
  let body: any;
  body = JSON.stringify(se_PutManagedRuleSetVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPermissionPolicyCommand
 */
export const se_PutPermissionPolicyCommand = async (
  input: PutPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPermissionPolicy");
  let body: any;
  body = JSON.stringify(se_PutPermissionPolicyRequest(input, context));
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
 * serializeAws_json1_1UpdateIPSetCommand
 */
export const se_UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIPSet");
  let body: any;
  body = JSON.stringify(se_UpdateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand
 */
export const se_UpdateManagedRuleSetVersionExpiryDateCommand = async (
  input: UpdateManagedRuleSetVersionExpiryDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateManagedRuleSetVersionExpiryDate");
  let body: any;
  body = JSON.stringify(se_UpdateManagedRuleSetVersionExpiryDateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRegexPatternSetCommand
 */
export const se_UpdateRegexPatternSetCommand = async (
  input: UpdateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRegexPatternSet");
  let body: any;
  body = JSON.stringify(se_UpdateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleGroupCommand
 */
export const se_UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleGroup");
  let body: any;
  body = JSON.stringify(se_UpdateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWebACLCommand
 */
export const se_UpdateWebACLCommand = async (
  input: UpdateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWebACL");
  let body: any;
  body = JSON.stringify(se_UpdateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateWebACLCommand
 */
export const de_AssociateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateWebACLResponse(data, context);
  const response: AssociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateWebACLCommandError
 */
const de_AssociateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CheckCapacityCommand
 */
export const de_CheckCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckCapacityResponse(data, context);
  const response: CheckCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CheckCapacityCommandError
 */
const de_CheckCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      throw await de_WAFExpiredManagedRuleGroupVersionExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      throw await de_WAFInvalidResourceExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      throw await de_WAFSubscriptionNotFoundExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateIPSetCommand
 */
export const de_CreateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateIPSetResponse(data, context);
  const response: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateIPSetCommandError
 */
const de_CreateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRegexPatternSetCommand
 */
export const de_CreateRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRegexPatternSetResponse(data, context);
  const response: CreateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRegexPatternSetCommandError
 */
const de_CreateRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRuleGroupCommand
 */
export const de_CreateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRuleGroupResponse(data, context);
  const response: CreateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRuleGroupCommandError
 */
const de_CreateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      throw await de_WAFSubscriptionNotFoundExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateWebACLCommand
 */
export const de_CreateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWebACLResponse(data, context);
  const response: CreateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWebACLCommandError
 */
const de_CreateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFConfigurationWarningException":
    case "com.amazonaws.wafv2#WAFConfigurationWarningException":
      throw await de_WAFConfigurationWarningExceptionRes(parsedOutput, context);
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      throw await de_WAFExpiredManagedRuleGroupVersionExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      throw await de_WAFInvalidResourceExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      throw await de_WAFSubscriptionNotFoundExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand
 */
export const de_DeleteFirewallManagerRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallManagerRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFirewallManagerRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallManagerRuleGroupsResponse(data, context);
  const response: DeleteFirewallManagerRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError
 */
const de_DeleteFirewallManagerRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallManagerRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteIPSetCommand
 */
export const de_DeleteIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteIPSetResponse(data, context);
  const response: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteIPSetCommandError
 */
const de_DeleteIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      throw await de_WAFAssociatedItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLoggingConfigurationCommand
 */
export const de_DeleteLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLoggingConfigurationResponse(data, context);
  const response: DeleteLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLoggingConfigurationCommandError
 */
const de_DeleteLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePermissionPolicyCommand
 */
export const de_DeletePermissionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePermissionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePermissionPolicyResponse(data, context);
  const response: DeletePermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePermissionPolicyCommandError
 */
const de_DeletePermissionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRegexPatternSetCommand
 */
export const de_DeleteRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRegexPatternSetResponse(data, context);
  const response: DeleteRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRegexPatternSetCommandError
 */
const de_DeleteRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      throw await de_WAFAssociatedItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRuleGroupCommand
 */
export const de_DeleteRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRuleGroupResponse(data, context);
  const response: DeleteRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRuleGroupCommandError
 */
const de_DeleteRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      throw await de_WAFAssociatedItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteWebACLCommand
 */
export const de_DeleteWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWebACLResponse(data, context);
  const response: DeleteWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWebACLCommandError
 */
const de_DeleteWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      throw await de_WAFAssociatedItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeManagedRuleGroupCommand
 */
export const de_DescribeManagedRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeManagedRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeManagedRuleGroupResponse(data, context);
  const response: DescribeManagedRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeManagedRuleGroupCommandError
 */
const de_DescribeManagedRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      throw await de_WAFExpiredManagedRuleGroupVersionExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      throw await de_WAFInvalidResourceExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateWebACLCommand
 */
export const de_DisassociateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateWebACLResponse(data, context);
  const response: DisassociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateWebACLCommandError
 */
const de_DisassociateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GenerateMobileSdkReleaseUrlCommand
 */
export const de_GenerateMobileSdkReleaseUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMobileSdkReleaseUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateMobileSdkReleaseUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateMobileSdkReleaseUrlResponse(data, context);
  const response: GenerateMobileSdkReleaseUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GenerateMobileSdkReleaseUrlCommandError
 */
const de_GenerateMobileSdkReleaseUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMobileSdkReleaseUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetIPSetCommand
 */
export const de_GetIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIPSetResponse(data, context);
  const response: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetIPSetCommandError
 */
const de_GetIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLoggingConfigurationCommand
 */
export const de_GetLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoggingConfigurationResponse(data, context);
  const response: GetLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLoggingConfigurationCommandError
 */
const de_GetLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetManagedRuleSetCommand
 */
export const de_GetManagedRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetManagedRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetManagedRuleSetResponse(data, context);
  const response: GetManagedRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetManagedRuleSetCommandError
 */
const de_GetManagedRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetMobileSdkReleaseCommand
 */
export const de_GetMobileSdkReleaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileSdkReleaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMobileSdkReleaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMobileSdkReleaseResponse(data, context);
  const response: GetMobileSdkReleaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMobileSdkReleaseCommandError
 */
const de_GetMobileSdkReleaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileSdkReleaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetPermissionPolicyCommand
 */
export const de_GetPermissionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPermissionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPermissionPolicyResponse(data, context);
  const response: GetPermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPermissionPolicyCommandError
 */
const de_GetPermissionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand
 */
export const de_GetRateBasedStatementManagedKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRateBasedStatementManagedKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRateBasedStatementManagedKeysResponse(data, context);
  const response: GetRateBasedStatementManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError
 */
const de_GetRateBasedStatementManagedKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRegexPatternSetCommand
 */
export const de_GetRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegexPatternSetResponse(data, context);
  const response: GetRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRegexPatternSetCommandError
 */
const de_GetRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRuleGroupCommand
 */
export const de_GetRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRuleGroupResponse(data, context);
  const response: GetRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRuleGroupCommandError
 */
const de_GetRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSampledRequestsCommand
 */
export const de_GetSampledRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSampledRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSampledRequestsResponse(data, context);
  const response: GetSampledRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSampledRequestsCommandError
 */
const de_GetSampledRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetWebACLCommand
 */
export const de_GetWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWebACLResponse(data, context);
  const response: GetWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetWebACLCommandError
 */
const de_GetWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetWebACLForResourceCommand
 */
export const de_GetWebACLForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWebACLForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWebACLForResourceResponse(data, context);
  const response: GetWebACLForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetWebACLForResourceCommandError
 */
const de_GetWebACLForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand
 */
export const de_ListAvailableManagedRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableManagedRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableManagedRuleGroupsResponse(data, context);
  const response: ListAvailableManagedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError
 */
const de_ListAvailableManagedRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand
 */
export const de_ListAvailableManagedRuleGroupVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableManagedRuleGroupVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableManagedRuleGroupVersionsResponse(data, context);
  const response: ListAvailableManagedRuleGroupVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommandError
 */
const de_ListAvailableManagedRuleGroupVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListIPSetsCommand
 */
export const de_ListIPSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIPSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIPSetsResponse(data, context);
  const response: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListIPSetsCommandError
 */
const de_ListIPSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLoggingConfigurationsCommand
 */
export const de_ListLoggingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLoggingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLoggingConfigurationsResponse(data, context);
  const response: ListLoggingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLoggingConfigurationsCommandError
 */
const de_ListLoggingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListManagedRuleSetsCommand
 */
export const de_ListManagedRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListManagedRuleSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListManagedRuleSetsResponse(data, context);
  const response: ListManagedRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListManagedRuleSetsCommandError
 */
const de_ListManagedRuleSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedRuleSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListMobileSdkReleasesCommand
 */
export const de_ListMobileSdkReleasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileSdkReleasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMobileSdkReleasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMobileSdkReleasesResponse(data, context);
  const response: ListMobileSdkReleasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMobileSdkReleasesCommandError
 */
const de_ListMobileSdkReleasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileSdkReleasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRegexPatternSetsCommand
 */
export const de_ListRegexPatternSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRegexPatternSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRegexPatternSetsResponse(data, context);
  const response: ListRegexPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRegexPatternSetsCommandError
 */
const de_ListRegexPatternSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListResourcesForWebACLCommand
 */
export const de_ListResourcesForWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourcesForWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourcesForWebACLResponse(data, context);
  const response: ListResourcesForWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourcesForWebACLCommandError
 */
const de_ListResourcesForWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRuleGroupsCommand
 */
export const de_ListRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRuleGroupsResponse(data, context);
  const response: ListRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRuleGroupsCommandError
 */
const de_ListRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListWebACLsCommand
 */
export const de_ListWebACLsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWebACLsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWebACLsResponse(data, context);
  const response: ListWebACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWebACLsCommandError
 */
const de_ListWebACLsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutLoggingConfigurationCommand
 */
export const de_PutLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLoggingConfigurationResponse(data, context);
  const response: PutLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutLoggingConfigurationCommandError
 */
const de_PutLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFLogDestinationPermissionIssueException":
    case "com.amazonaws.wafv2#WAFLogDestinationPermissionIssueException":
      throw await de_WAFLogDestinationPermissionIssueExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFServiceLinkedRoleErrorException":
    case "com.amazonaws.wafv2#WAFServiceLinkedRoleErrorException":
      throw await de_WAFServiceLinkedRoleErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutManagedRuleSetVersionsCommand
 */
export const de_PutManagedRuleSetVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedRuleSetVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutManagedRuleSetVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutManagedRuleSetVersionsResponse(data, context);
  const response: PutManagedRuleSetVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutManagedRuleSetVersionsCommandError
 */
const de_PutManagedRuleSetVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedRuleSetVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutPermissionPolicyCommand
 */
export const de_PutPermissionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPermissionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutPermissionPolicyResponse(data, context);
  const response: PutPermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutPermissionPolicyCommandError
 */
const de_PutPermissionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFInvalidPermissionPolicyException":
    case "com.amazonaws.wafv2#WAFInvalidPermissionPolicyException":
      throw await de_WAFInvalidPermissionPolicyExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      throw await de_WAFTagOperationInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateIPSetCommand
 */
export const de_UpdateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateIPSetResponse(data, context);
  const response: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateIPSetCommandError
 */
const de_UpdateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand
 */
export const de_UpdateManagedRuleSetVersionExpiryDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateManagedRuleSetVersionExpiryDateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateManagedRuleSetVersionExpiryDateResponse(data, context);
  const response: UpdateManagedRuleSetVersionExpiryDateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommandError
 */
const de_UpdateManagedRuleSetVersionExpiryDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRegexPatternSetCommand
 */
export const de_UpdateRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRegexPatternSetResponse(data, context);
  const response: UpdateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRegexPatternSetCommandError
 */
const de_UpdateRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRuleGroupCommand
 */
export const de_UpdateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRuleGroupResponse(data, context);
  const response: UpdateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRuleGroupCommandError
 */
const de_UpdateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFConfigurationWarningException":
    case "com.amazonaws.wafv2#WAFConfigurationWarningException":
      throw await de_WAFConfigurationWarningExceptionRes(parsedOutput, context);
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      throw await de_WAFSubscriptionNotFoundExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateWebACLCommand
 */
export const de_UpdateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWebACLResponse(data, context);
  const response: UpdateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateWebACLCommandError
 */
const de_UpdateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFConfigurationWarningException":
    case "com.amazonaws.wafv2#WAFConfigurationWarningException":
      throw await de_WAFConfigurationWarningExceptionRes(parsedOutput, context);
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      throw await de_WAFDuplicateItemExceptionRes(parsedOutput, context);
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      throw await de_WAFExpiredManagedRuleGroupVersionExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      throw await de_WAFInvalidResourceExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      throw await de_WAFOptimisticLockExceptionRes(parsedOutput, context);
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      throw await de_WAFSubscriptionNotFoundExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      throw await de_WAFUnavailableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1WAFAssociatedItemExceptionRes
 */
const de_WAFAssociatedItemExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFAssociatedItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFAssociatedItemException(body, context);
  const exception = new WAFAssociatedItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFConfigurationWarningExceptionRes
 */
const de_WAFConfigurationWarningExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFConfigurationWarningException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFConfigurationWarningException(body, context);
  const exception = new WAFConfigurationWarningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFDuplicateItemExceptionRes
 */
const de_WAFDuplicateItemExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFDuplicateItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFDuplicateItemException(body, context);
  const exception = new WAFDuplicateItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionExceptionRes
 */
const de_WAFExpiredManagedRuleGroupVersionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFExpiredManagedRuleGroupVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFExpiredManagedRuleGroupVersionException(body, context);
  const exception = new WAFExpiredManagedRuleGroupVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFInternalErrorExceptionRes
 */
const de_WAFInternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInternalErrorException(body, context);
  const exception = new WAFInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFInvalidOperationExceptionRes
 */
const de_WAFInvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInvalidOperationException(body, context);
  const exception = new WAFInvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFInvalidParameterExceptionRes
 */
const de_WAFInvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInvalidParameterException(body, context);
  const exception = new WAFInvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionRes
 */
const de_WAFInvalidPermissionPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidPermissionPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInvalidPermissionPolicyException(body, context);
  const exception = new WAFInvalidPermissionPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFInvalidResourceExceptionRes
 */
const de_WAFInvalidResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInvalidResourceException(body, context);
  const exception = new WAFInvalidResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFLimitsExceededExceptionRes
 */
const de_WAFLimitsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFLimitsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFLimitsExceededException(body, context);
  const exception = new WAFLimitsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFLogDestinationPermissionIssueExceptionRes
 */
const de_WAFLogDestinationPermissionIssueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFLogDestinationPermissionIssueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFLogDestinationPermissionIssueException(body, context);
  const exception = new WAFLogDestinationPermissionIssueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFNonexistentItemExceptionRes
 */
const de_WAFNonexistentItemExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonexistentItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFNonexistentItemException(body, context);
  const exception = new WAFNonexistentItemException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFOptimisticLockExceptionRes
 */
const de_WAFOptimisticLockExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFOptimisticLockException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFOptimisticLockException(body, context);
  const exception = new WAFOptimisticLockException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionRes
 */
const de_WAFServiceLinkedRoleErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFServiceLinkedRoleErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFServiceLinkedRoleErrorException(body, context);
  const exception = new WAFServiceLinkedRoleErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFSubscriptionNotFoundExceptionRes
 */
const de_WAFSubscriptionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFSubscriptionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFSubscriptionNotFoundException(body, context);
  const exception = new WAFSubscriptionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFTagOperationExceptionRes
 */
const de_WAFTagOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFTagOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFTagOperationException(body, context);
  const exception = new WAFTagOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFTagOperationInternalErrorExceptionRes
 */
const de_WAFTagOperationInternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFTagOperationInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFTagOperationInternalErrorException(body, context);
  const exception = new WAFTagOperationInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFUnavailableEntityExceptionRes
 */
const de_WAFUnavailableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFUnavailableEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFUnavailableEntityException(body, context);
  const exception = new WAFUnavailableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ActionCondition
 */
const se_ActionCondition = (input: ActionCondition, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
  };
};

/**
 * serializeAws_json1_1All
 */
const se_All = (input: All, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1AllowAction
 */
const se_AllowAction = (input: AllowAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomRequestHandling != null && {
      CustomRequestHandling: se_CustomRequestHandling(input.CustomRequestHandling, context),
    }),
  };
};

/**
 * serializeAws_json1_1AllQueryArguments
 */
const se_AllQueryArguments = (input: AllQueryArguments, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1AndStatement
 */
const se_AndStatement = (input: AndStatement, context: __SerdeContext): any => {
  return {
    ...(input.Statements != null && { Statements: se_Statements(input.Statements, context) }),
  };
};

/**
 * serializeAws_json1_1AssociateWebACLRequest
 */
const se_AssociateWebACLRequest = (input: AssociateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.WebACLArn != null && { WebACLArn: input.WebACLArn }),
  };
};

/**
 * serializeAws_json1_1AssociationConfig
 */
const se_AssociationConfig = (input: AssociationConfig, context: __SerdeContext): any => {
  return {
    ...(input.RequestBody != null && { RequestBody: se_RequestBody(input.RequestBody, context) }),
  };
};

/**
 * serializeAws_json1_1AWSManagedRulesATPRuleSet
 */
const se_AWSManagedRulesATPRuleSet = (input: AWSManagedRulesATPRuleSet, context: __SerdeContext): any => {
  return {
    ...(input.LoginPath != null && { LoginPath: input.LoginPath }),
    ...(input.RequestInspection != null && {
      RequestInspection: se_RequestInspection(input.RequestInspection, context),
    }),
    ...(input.ResponseInspection != null && {
      ResponseInspection: se_ResponseInspection(input.ResponseInspection, context),
    }),
  };
};

/**
 * serializeAws_json1_1AWSManagedRulesBotControlRuleSet
 */
const se_AWSManagedRulesBotControlRuleSet = (input: AWSManagedRulesBotControlRuleSet, context: __SerdeContext): any => {
  return {
    ...(input.InspectionLevel != null && { InspectionLevel: input.InspectionLevel }),
  };
};

/**
 * serializeAws_json1_1BlockAction
 */
const se_BlockAction = (input: BlockAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponse != null && { CustomResponse: se_CustomResponse(input.CustomResponse, context) }),
  };
};

/**
 * serializeAws_json1_1Body
 */
const se_Body = (input: Body, context: __SerdeContext): any => {
  return {
    ...(input.OversizeHandling != null && { OversizeHandling: input.OversizeHandling }),
  };
};

/**
 * serializeAws_json1_1ByteMatchStatement
 */
const se_ByteMatchStatement = (input: ByteMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.PositionalConstraint != null && { PositionalConstraint: input.PositionalConstraint }),
    ...(input.SearchString != null && { SearchString: context.base64Encoder(input.SearchString) }),
    ...(input.TextTransformations != null && {
      TextTransformations: se_TextTransformations(input.TextTransformations, context),
    }),
  };
};

/**
 * serializeAws_json1_1CaptchaAction
 */
const se_CaptchaAction = (input: CaptchaAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomRequestHandling != null && {
      CustomRequestHandling: se_CustomRequestHandling(input.CustomRequestHandling, context),
    }),
  };
};

/**
 * serializeAws_json1_1CaptchaConfig
 */
const se_CaptchaConfig = (input: CaptchaConfig, context: __SerdeContext): any => {
  return {
    ...(input.ImmunityTimeProperty != null && {
      ImmunityTimeProperty: se_ImmunityTimeProperty(input.ImmunityTimeProperty, context),
    }),
  };
};

/**
 * serializeAws_json1_1ChallengeAction
 */
const se_ChallengeAction = (input: ChallengeAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomRequestHandling != null && {
      CustomRequestHandling: se_CustomRequestHandling(input.CustomRequestHandling, context),
    }),
  };
};

/**
 * serializeAws_json1_1ChallengeConfig
 */
const se_ChallengeConfig = (input: ChallengeConfig, context: __SerdeContext): any => {
  return {
    ...(input.ImmunityTimeProperty != null && {
      ImmunityTimeProperty: se_ImmunityTimeProperty(input.ImmunityTimeProperty, context),
    }),
  };
};

/**
 * serializeAws_json1_1CheckCapacityRequest
 */
const se_CheckCapacityRequest = (input: CheckCapacityRequest, context: __SerdeContext): any => {
  return {
    ...(input.Rules != null && { Rules: se_Rules(input.Rules, context) }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.ActionCondition != null && { ActionCondition: se_ActionCondition(input.ActionCondition, context) }),
    ...(input.LabelNameCondition != null && {
      LabelNameCondition: se_LabelNameCondition(input.LabelNameCondition, context),
    }),
  };
};

/**
 * serializeAws_json1_1Conditions
 */
const se_Conditions = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Condition(entry, context);
    });
};

/**
 * serializeAws_json1_1CookieMatchPattern
 */
const se_CookieMatchPattern = (input: CookieMatchPattern, context: __SerdeContext): any => {
  return {
    ...(input.All != null && { All: se_All(input.All, context) }),
    ...(input.ExcludedCookies != null && { ExcludedCookies: se_CookieNames(input.ExcludedCookies, context) }),
    ...(input.IncludedCookies != null && { IncludedCookies: se_CookieNames(input.IncludedCookies, context) }),
  };
};

/**
 * serializeAws_json1_1CookieNames
 */
const se_CookieNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Cookies
 */
const se_Cookies = (input: Cookies, context: __SerdeContext): any => {
  return {
    ...(input.MatchPattern != null && { MatchPattern: se_CookieMatchPattern(input.MatchPattern, context) }),
    ...(input.MatchScope != null && { MatchScope: input.MatchScope }),
    ...(input.OversizeHandling != null && { OversizeHandling: input.OversizeHandling }),
  };
};

/**
 * serializeAws_json1_1CountAction
 */
const se_CountAction = (input: CountAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomRequestHandling != null && {
      CustomRequestHandling: se_CustomRequestHandling(input.CustomRequestHandling, context),
    }),
  };
};

/**
 * serializeAws_json1_1CountryCodes
 */
const se_CountryCodes = (input: (CountryCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateIPSetRequest
 */
const se_CreateIPSetRequest = (input: CreateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses != null && { Addresses: se_IPAddresses(input.Addresses, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IPAddressVersion != null && { IPAddressVersion: input.IPAddressVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRegexPatternSetRequest
 */
const se_CreateRegexPatternSetRequest = (input: CreateRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RegularExpressionList != null && {
      RegularExpressionList: se_RegularExpressionList(input.RegularExpressionList, context),
    }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRuleGroupRequest
 */
const se_CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
    ...(input.CustomResponseBodies != null && {
      CustomResponseBodies: se_CustomResponseBodies(input.CustomResponseBodies, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Rules != null && { Rules: se_Rules(input.Rules, context) }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VisibilityConfig != null && { VisibilityConfig: se_VisibilityConfig(input.VisibilityConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateWebACLRequest
 */
const se_CreateWebACLRequest = (input: CreateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationConfig != null && {
      AssociationConfig: se_AssociationConfig(input.AssociationConfig, context),
    }),
    ...(input.CaptchaConfig != null && { CaptchaConfig: se_CaptchaConfig(input.CaptchaConfig, context) }),
    ...(input.ChallengeConfig != null && { ChallengeConfig: se_ChallengeConfig(input.ChallengeConfig, context) }),
    ...(input.CustomResponseBodies != null && {
      CustomResponseBodies: se_CustomResponseBodies(input.CustomResponseBodies, context),
    }),
    ...(input.DefaultAction != null && { DefaultAction: se_DefaultAction(input.DefaultAction, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Rules != null && { Rules: se_Rules(input.Rules, context) }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TokenDomains != null && { TokenDomains: se_TokenDomains(input.TokenDomains, context) }),
    ...(input.VisibilityConfig != null && { VisibilityConfig: se_VisibilityConfig(input.VisibilityConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CustomHTTPHeader
 */
const se_CustomHTTPHeader = (input: CustomHTTPHeader, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1CustomHTTPHeaders
 */
const se_CustomHTTPHeaders = (input: CustomHTTPHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomHTTPHeader(entry, context);
    });
};

/**
 * serializeAws_json1_1CustomRequestHandling
 */
const se_CustomRequestHandling = (input: CustomRequestHandling, context: __SerdeContext): any => {
  return {
    ...(input.InsertHeaders != null && { InsertHeaders: se_CustomHTTPHeaders(input.InsertHeaders, context) }),
  };
};

/**
 * serializeAws_json1_1CustomResponse
 */
const se_CustomResponse = (input: CustomResponse, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponseBodyKey != null && { CustomResponseBodyKey: input.CustomResponseBodyKey }),
    ...(input.ResponseCode != null && { ResponseCode: input.ResponseCode }),
    ...(input.ResponseHeaders != null && { ResponseHeaders: se_CustomHTTPHeaders(input.ResponseHeaders, context) }),
  };
};

/**
 * serializeAws_json1_1CustomResponseBodies
 */
const se_CustomResponseBodies = (input: Record<string, CustomResponseBody>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CustomResponseBody(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1CustomResponseBody
 */
const se_CustomResponseBody = (input: CustomResponseBody, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
  };
};

/**
 * serializeAws_json1_1DefaultAction
 */
const se_DefaultAction = (input: DefaultAction, context: __SerdeContext): any => {
  return {
    ...(input.Allow != null && { Allow: se_AllowAction(input.Allow, context) }),
    ...(input.Block != null && { Block: se_BlockAction(input.Block, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest
 */
const se_DeleteFirewallManagerRuleGroupsRequest = (
  input: DeleteFirewallManagerRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WebACLArn != null && { WebACLArn: input.WebACLArn }),
    ...(input.WebACLLockToken != null && { WebACLLockToken: input.WebACLLockToken }),
  };
};

/**
 * serializeAws_json1_1DeleteIPSetRequest
 */
const se_DeleteIPSetRequest = (input: DeleteIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1DeleteLoggingConfigurationRequest
 */
const se_DeleteLoggingConfigurationRequest = (
  input: DeleteLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DeletePermissionPolicyRequest
 */
const se_DeletePermissionPolicyRequest = (input: DeletePermissionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteRegexPatternSetRequest
 */
const se_DeleteRegexPatternSetRequest = (input: DeleteRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1DeleteRuleGroupRequest
 */
const se_DeleteRuleGroupRequest = (input: DeleteRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1DeleteWebACLRequest
 */
const se_DeleteWebACLRequest = (input: DeleteWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1DescribeManagedRuleGroupRequest
 */
const se_DescribeManagedRuleGroupRequest = (input: DescribeManagedRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.VendorName != null && { VendorName: input.VendorName }),
    ...(input.VersionName != null && { VersionName: input.VersionName }),
  };
};

/**
 * serializeAws_json1_1DisassociateWebACLRequest
 */
const se_DisassociateWebACLRequest = (input: DisassociateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ExcludedRule
 */
const se_ExcludedRule = (input: ExcludedRule, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1ExcludedRules
 */
const se_ExcludedRules = (input: ExcludedRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExcludedRule(entry, context);
    });
};

/**
 * serializeAws_json1_1FieldToMatch
 */
const se_FieldToMatch = (input: FieldToMatch, context: __SerdeContext): any => {
  return {
    ...(input.AllQueryArguments != null && {
      AllQueryArguments: se_AllQueryArguments(input.AllQueryArguments, context),
    }),
    ...(input.Body != null && { Body: se_Body(input.Body, context) }),
    ...(input.Cookies != null && { Cookies: se_Cookies(input.Cookies, context) }),
    ...(input.Headers != null && { Headers: se_Headers(input.Headers, context) }),
    ...(input.JsonBody != null && { JsonBody: se_JsonBody(input.JsonBody, context) }),
    ...(input.Method != null && { Method: se_Method(input.Method, context) }),
    ...(input.QueryString != null && { QueryString: se_QueryString(input.QueryString, context) }),
    ...(input.SingleHeader != null && { SingleHeader: se_SingleHeader(input.SingleHeader, context) }),
    ...(input.SingleQueryArgument != null && {
      SingleQueryArgument: se_SingleQueryArgument(input.SingleQueryArgument, context),
    }),
    ...(input.UriPath != null && { UriPath: se_UriPath(input.UriPath, context) }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Behavior != null && { Behavior: input.Behavior }),
    ...(input.Conditions != null && { Conditions: se_Conditions(input.Conditions, context) }),
    ...(input.Requirement != null && { Requirement: input.Requirement }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1ForwardedIPConfig
 */
const se_ForwardedIPConfig = (input: ForwardedIPConfig, context: __SerdeContext): any => {
  return {
    ...(input.FallbackBehavior != null && { FallbackBehavior: input.FallbackBehavior }),
    ...(input.HeaderName != null && { HeaderName: input.HeaderName }),
  };
};

/**
 * serializeAws_json1_1GenerateMobileSdkReleaseUrlRequest
 */
const se_GenerateMobileSdkReleaseUrlRequest = (
  input: GenerateMobileSdkReleaseUrlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Platform != null && { Platform: input.Platform }),
    ...(input.ReleaseVersion != null && { ReleaseVersion: input.ReleaseVersion }),
  };
};

/**
 * serializeAws_json1_1GeoMatchStatement
 */
const se_GeoMatchStatement = (input: GeoMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.CountryCodes != null && { CountryCodes: se_CountryCodes(input.CountryCodes, context) }),
    ...(input.ForwardedIPConfig != null && {
      ForwardedIPConfig: se_ForwardedIPConfig(input.ForwardedIPConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1GetIPSetRequest
 */
const se_GetIPSetRequest = (input: GetIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1GetLoggingConfigurationRequest
 */
const se_GetLoggingConfigurationRequest = (input: GetLoggingConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1GetManagedRuleSetRequest
 */
const se_GetManagedRuleSetRequest = (input: GetManagedRuleSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1GetMobileSdkReleaseRequest
 */
const se_GetMobileSdkReleaseRequest = (input: GetMobileSdkReleaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Platform != null && { Platform: input.Platform }),
    ...(input.ReleaseVersion != null && { ReleaseVersion: input.ReleaseVersion }),
  };
};

/**
 * serializeAws_json1_1GetPermissionPolicyRequest
 */
const se_GetPermissionPolicyRequest = (input: GetPermissionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1GetRateBasedStatementManagedKeysRequest
 */
const se_GetRateBasedStatementManagedKeysRequest = (
  input: GetRateBasedStatementManagedKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleGroupRuleName != null && { RuleGroupRuleName: input.RuleGroupRuleName }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
    ...(input.WebACLName != null && { WebACLName: input.WebACLName }),
  };
};

/**
 * serializeAws_json1_1GetRegexPatternSetRequest
 */
const se_GetRegexPatternSetRequest = (input: GetRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1GetRuleGroupRequest
 */
const se_GetRuleGroupRequest = (input: GetRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1GetSampledRequestsRequest
 */
const se_GetSampledRequestsRequest = (input: GetSampledRequestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.RuleMetricName != null && { RuleMetricName: input.RuleMetricName }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.TimeWindow != null && { TimeWindow: se_TimeWindow(input.TimeWindow, context) }),
    ...(input.WebAclArn != null && { WebAclArn: input.WebAclArn }),
  };
};

/**
 * serializeAws_json1_1GetWebACLForResourceRequest
 */
const se_GetWebACLForResourceRequest = (input: GetWebACLForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1GetWebACLRequest
 */
const se_GetWebACLRequest = (input: GetWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1HeaderMatchPattern
 */
const se_HeaderMatchPattern = (input: HeaderMatchPattern, context: __SerdeContext): any => {
  return {
    ...(input.All != null && { All: se_All(input.All, context) }),
    ...(input.ExcludedHeaders != null && { ExcludedHeaders: se_HeaderNames(input.ExcludedHeaders, context) }),
    ...(input.IncludedHeaders != null && { IncludedHeaders: se_HeaderNames(input.IncludedHeaders, context) }),
  };
};

/**
 * serializeAws_json1_1HeaderNames
 */
const se_HeaderNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Headers
 */
const se_Headers = (input: Headers, context: __SerdeContext): any => {
  return {
    ...(input.MatchPattern != null && { MatchPattern: se_HeaderMatchPattern(input.MatchPattern, context) }),
    ...(input.MatchScope != null && { MatchScope: input.MatchScope }),
    ...(input.OversizeHandling != null && { OversizeHandling: input.OversizeHandling }),
  };
};

/**
 * serializeAws_json1_1ImmunityTimeProperty
 */
const se_ImmunityTimeProperty = (input: ImmunityTimeProperty, context: __SerdeContext): any => {
  return {
    ...(input.ImmunityTime != null && { ImmunityTime: input.ImmunityTime }),
  };
};

/**
 * serializeAws_json1_1IPAddresses
 */
const se_IPAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IPSetForwardedIPConfig
 */
const se_IPSetForwardedIPConfig = (input: IPSetForwardedIPConfig, context: __SerdeContext): any => {
  return {
    ...(input.FallbackBehavior != null && { FallbackBehavior: input.FallbackBehavior }),
    ...(input.HeaderName != null && { HeaderName: input.HeaderName }),
    ...(input.Position != null && { Position: input.Position }),
  };
};

/**
 * serializeAws_json1_1IPSetReferenceStatement
 */
const se_IPSetReferenceStatement = (input: IPSetReferenceStatement, context: __SerdeContext): any => {
  return {
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.IPSetForwardedIPConfig != null && {
      IPSetForwardedIPConfig: se_IPSetForwardedIPConfig(input.IPSetForwardedIPConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1JsonBody
 */
const se_JsonBody = (input: JsonBody, context: __SerdeContext): any => {
  return {
    ...(input.InvalidFallbackBehavior != null && { InvalidFallbackBehavior: input.InvalidFallbackBehavior }),
    ...(input.MatchPattern != null && { MatchPattern: se_JsonMatchPattern(input.MatchPattern, context) }),
    ...(input.MatchScope != null && { MatchScope: input.MatchScope }),
    ...(input.OversizeHandling != null && { OversizeHandling: input.OversizeHandling }),
  };
};

/**
 * serializeAws_json1_1JsonMatchPattern
 */
const se_JsonMatchPattern = (input: JsonMatchPattern, context: __SerdeContext): any => {
  return {
    ...(input.All != null && { All: se_All(input.All, context) }),
    ...(input.IncludedPaths != null && { IncludedPaths: se_JsonPointerPaths(input.IncludedPaths, context) }),
  };
};

/**
 * serializeAws_json1_1JsonPointerPaths
 */
const se_JsonPointerPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Label
 */
const se_Label = (input: Label, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1LabelMatchStatement
 */
const se_LabelMatchStatement = (input: LabelMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1LabelNameCondition
 */
const se_LabelNameCondition = (input: LabelNameCondition, context: __SerdeContext): any => {
  return {
    ...(input.LabelName != null && { LabelName: input.LabelName }),
  };
};

/**
 * serializeAws_json1_1Labels
 */
const se_Labels = (input: Label[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Label(entry, context);
    });
};

/**
 * serializeAws_json1_1ListAvailableManagedRuleGroupsRequest
 */
const se_ListAvailableManagedRuleGroupsRequest = (
  input: ListAvailableManagedRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1ListAvailableManagedRuleGroupVersionsRequest
 */
const se_ListAvailableManagedRuleGroupVersionsRequest = (
  input: ListAvailableManagedRuleGroupVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.VendorName != null && { VendorName: input.VendorName }),
  };
};

/**
 * serializeAws_json1_1ListIPSetsRequest
 */
const se_ListIPSetsRequest = (input: ListIPSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1ListLoggingConfigurationsRequest
 */
const se_ListLoggingConfigurationsRequest = (input: ListLoggingConfigurationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1ListManagedRuleSetsRequest
 */
const se_ListManagedRuleSetsRequest = (input: ListManagedRuleSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1ListMobileSdkReleasesRequest
 */
const se_ListMobileSdkReleasesRequest = (input: ListMobileSdkReleasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Platform != null && { Platform: input.Platform }),
  };
};

/**
 * serializeAws_json1_1ListRegexPatternSetsRequest
 */
const se_ListRegexPatternSetsRequest = (input: ListRegexPatternSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1ListResourcesForWebACLRequest
 */
const se_ListResourcesForWebACLRequest = (input: ListResourcesForWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.WebACLArn != null && { WebACLArn: input.WebACLArn }),
  };
};

/**
 * serializeAws_json1_1ListRuleGroupsRequest
 */
const se_ListRuleGroupsRequest = (input: ListRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListWebACLsRequest
 */
const se_ListWebACLsRequest = (input: ListWebACLsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1LogDestinationConfigs
 */
const se_LogDestinationConfigs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LoggingConfiguration
 */
const se_LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LogDestinationConfigs != null && {
      LogDestinationConfigs: se_LogDestinationConfigs(input.LogDestinationConfigs, context),
    }),
    ...(input.LoggingFilter != null && { LoggingFilter: se_LoggingFilter(input.LoggingFilter, context) }),
    ...(input.ManagedByFirewallManager != null && { ManagedByFirewallManager: input.ManagedByFirewallManager }),
    ...(input.RedactedFields != null && { RedactedFields: se_RedactedFields(input.RedactedFields, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1LoggingFilter
 */
const se_LoggingFilter = (input: LoggingFilter, context: __SerdeContext): any => {
  return {
    ...(input.DefaultBehavior != null && { DefaultBehavior: input.DefaultBehavior }),
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
  };
};

/**
 * serializeAws_json1_1ManagedRuleGroupConfig
 */
const se_ManagedRuleGroupConfig = (input: ManagedRuleGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.AWSManagedRulesATPRuleSet != null && {
      AWSManagedRulesATPRuleSet: se_AWSManagedRulesATPRuleSet(input.AWSManagedRulesATPRuleSet, context),
    }),
    ...(input.AWSManagedRulesBotControlRuleSet != null && {
      AWSManagedRulesBotControlRuleSet: se_AWSManagedRulesBotControlRuleSet(
        input.AWSManagedRulesBotControlRuleSet,
        context
      ),
    }),
    ...(input.LoginPath != null && { LoginPath: input.LoginPath }),
    ...(input.PasswordField != null && { PasswordField: se_PasswordField(input.PasswordField, context) }),
    ...(input.PayloadType != null && { PayloadType: input.PayloadType }),
    ...(input.UsernameField != null && { UsernameField: se_UsernameField(input.UsernameField, context) }),
  };
};

/**
 * serializeAws_json1_1ManagedRuleGroupConfigs
 */
const se_ManagedRuleGroupConfigs = (input: ManagedRuleGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ManagedRuleGroupConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1ManagedRuleGroupStatement
 */
const se_ManagedRuleGroupStatement = (input: ManagedRuleGroupStatement, context: __SerdeContext): any => {
  return {
    ...(input.ExcludedRules != null && { ExcludedRules: se_ExcludedRules(input.ExcludedRules, context) }),
    ...(input.ManagedRuleGroupConfigs != null && {
      ManagedRuleGroupConfigs: se_ManagedRuleGroupConfigs(input.ManagedRuleGroupConfigs, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuleActionOverrides != null && {
      RuleActionOverrides: se_RuleActionOverrides(input.RuleActionOverrides, context),
    }),
    ...(input.ScopeDownStatement != null && { ScopeDownStatement: se_Statement(input.ScopeDownStatement, context) }),
    ...(input.VendorName != null && { VendorName: input.VendorName }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1Method
 */
const se_Method = (input: Method, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1NoneAction
 */
const se_NoneAction = (input: NoneAction, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1NotStatement
 */
const se_NotStatement = (input: NotStatement, context: __SerdeContext): any => {
  return {
    ...(input.Statement != null && { Statement: se_Statement(input.Statement, context) }),
  };
};

/**
 * serializeAws_json1_1OrStatement
 */
const se_OrStatement = (input: OrStatement, context: __SerdeContext): any => {
  return {
    ...(input.Statements != null && { Statements: se_Statements(input.Statements, context) }),
  };
};

/**
 * serializeAws_json1_1OverrideAction
 */
const se_OverrideAction = (input: OverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: se_CountAction(input.Count, context) }),
    ...(input.None != null && { None: se_NoneAction(input.None, context) }),
  };
};

/**
 * serializeAws_json1_1PasswordField
 */
const se_PasswordField = (input: PasswordField, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
  };
};

/**
 * serializeAws_json1_1PutLoggingConfigurationRequest
 */
const se_PutLoggingConfigurationRequest = (input: PutLoggingConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.LoggingConfiguration != null && {
      LoggingConfiguration: se_LoggingConfiguration(input.LoggingConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutManagedRuleSetVersionsRequest
 */
const se_PutManagedRuleSetVersionsRequest = (input: PutManagedRuleSetVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecommendedVersion != null && { RecommendedVersion: input.RecommendedVersion }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.VersionsToPublish != null && {
      VersionsToPublish: se_VersionsToPublish(input.VersionsToPublish, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutPermissionPolicyRequest
 */
const se_PutPermissionPolicyRequest = (input: PutPermissionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1QueryString
 */
const se_QueryString = (input: QueryString, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1RateBasedStatement
 */
const se_RateBasedStatement = (input: RateBasedStatement, context: __SerdeContext): any => {
  return {
    ...(input.AggregateKeyType != null && { AggregateKeyType: input.AggregateKeyType }),
    ...(input.ForwardedIPConfig != null && {
      ForwardedIPConfig: se_ForwardedIPConfig(input.ForwardedIPConfig, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ScopeDownStatement != null && { ScopeDownStatement: se_Statement(input.ScopeDownStatement, context) }),
  };
};

/**
 * serializeAws_json1_1RedactedFields
 */
const se_RedactedFields = (input: FieldToMatch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldToMatch(entry, context);
    });
};

/**
 * serializeAws_json1_1Regex
 */
const se_Regex = (input: Regex, context: __SerdeContext): any => {
  return {
    ...(input.RegexString != null && { RegexString: input.RegexString }),
  };
};

/**
 * serializeAws_json1_1RegexMatchStatement
 */
const se_RegexMatchStatement = (input: RegexMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.RegexString != null && { RegexString: input.RegexString }),
    ...(input.TextTransformations != null && {
      TextTransformations: se_TextTransformations(input.TextTransformations, context),
    }),
  };
};

/**
 * serializeAws_json1_1RegexPatternSetReferenceStatement
 */
const se_RegexPatternSetReferenceStatement = (
  input: RegexPatternSetReferenceStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformations != null && {
      TextTransformations: se_TextTransformations(input.TextTransformations, context),
    }),
  };
};

/**
 * serializeAws_json1_1RegularExpressionList
 */
const se_RegularExpressionList = (input: Regex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Regex(entry, context);
    });
};

/**
 * serializeAws_json1_1RequestBody
 */
const se_RequestBody = (
  input: Record<string, RequestBodyAssociatedResourceTypeConfig>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [AssociatedResourceType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_RequestBodyAssociatedResourceTypeConfig(value, context);
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_1RequestBodyAssociatedResourceTypeConfig
 */
const se_RequestBodyAssociatedResourceTypeConfig = (
  input: RequestBodyAssociatedResourceTypeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultSizeInspectionLimit != null && { DefaultSizeInspectionLimit: input.DefaultSizeInspectionLimit }),
  };
};

/**
 * serializeAws_json1_1RequestInspection
 */
const se_RequestInspection = (input: RequestInspection, context: __SerdeContext): any => {
  return {
    ...(input.PasswordField != null && { PasswordField: se_PasswordField(input.PasswordField, context) }),
    ...(input.PayloadType != null && { PayloadType: input.PayloadType }),
    ...(input.UsernameField != null && { UsernameField: se_UsernameField(input.UsernameField, context) }),
  };
};

/**
 * serializeAws_json1_1ResponseInspection
 */
const se_ResponseInspection = (input: ResponseInspection, context: __SerdeContext): any => {
  return {
    ...(input.BodyContains != null && { BodyContains: se_ResponseInspectionBodyContains(input.BodyContains, context) }),
    ...(input.Header != null && { Header: se_ResponseInspectionHeader(input.Header, context) }),
    ...(input.Json != null && { Json: se_ResponseInspectionJson(input.Json, context) }),
    ...(input.StatusCode != null && { StatusCode: se_ResponseInspectionStatusCode(input.StatusCode, context) }),
  };
};

/**
 * serializeAws_json1_1ResponseInspectionBodyContains
 */
const se_ResponseInspectionBodyContains = (input: ResponseInspectionBodyContains, context: __SerdeContext): any => {
  return {
    ...(input.FailureStrings != null && {
      FailureStrings: se_ResponseInspectionBodyContainsFailureStrings(input.FailureStrings, context),
    }),
    ...(input.SuccessStrings != null && {
      SuccessStrings: se_ResponseInspectionBodyContainsSuccessStrings(input.SuccessStrings, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResponseInspectionBodyContainsFailureStrings
 */
const se_ResponseInspectionBodyContainsFailureStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionBodyContainsSuccessStrings
 */
const se_ResponseInspectionBodyContainsSuccessStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionHeader
 */
const se_ResponseInspectionHeader = (input: ResponseInspectionHeader, context: __SerdeContext): any => {
  return {
    ...(input.FailureValues != null && {
      FailureValues: se_ResponseInspectionHeaderFailureValues(input.FailureValues, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SuccessValues != null && {
      SuccessValues: se_ResponseInspectionHeaderSuccessValues(input.SuccessValues, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResponseInspectionHeaderFailureValues
 */
const se_ResponseInspectionHeaderFailureValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionHeaderSuccessValues
 */
const se_ResponseInspectionHeaderSuccessValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionJson
 */
const se_ResponseInspectionJson = (input: ResponseInspectionJson, context: __SerdeContext): any => {
  return {
    ...(input.FailureValues != null && {
      FailureValues: se_ResponseInspectionJsonFailureValues(input.FailureValues, context),
    }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.SuccessValues != null && {
      SuccessValues: se_ResponseInspectionJsonSuccessValues(input.SuccessValues, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResponseInspectionJsonFailureValues
 */
const se_ResponseInspectionJsonFailureValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionJsonSuccessValues
 */
const se_ResponseInspectionJsonSuccessValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionStatusCode
 */
const se_ResponseInspectionStatusCode = (input: ResponseInspectionStatusCode, context: __SerdeContext): any => {
  return {
    ...(input.FailureCodes != null && {
      FailureCodes: se_ResponseInspectionStatusCodeFailureCodes(input.FailureCodes, context),
    }),
    ...(input.SuccessCodes != null && {
      SuccessCodes: se_ResponseInspectionStatusCodeSuccessCodes(input.SuccessCodes, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResponseInspectionStatusCodeFailureCodes
 */
const se_ResponseInspectionStatusCodeFailureCodes = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseInspectionStatusCodeSuccessCodes
 */
const se_ResponseInspectionStatusCodeSuccessCodes = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: se_RuleAction(input.Action, context) }),
    ...(input.CaptchaConfig != null && { CaptchaConfig: se_CaptchaConfig(input.CaptchaConfig, context) }),
    ...(input.ChallengeConfig != null && { ChallengeConfig: se_ChallengeConfig(input.ChallengeConfig, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OverrideAction != null && { OverrideAction: se_OverrideAction(input.OverrideAction, context) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleLabels != null && { RuleLabels: se_Labels(input.RuleLabels, context) }),
    ...(input.Statement != null && { Statement: se_Statement(input.Statement, context) }),
    ...(input.VisibilityConfig != null && { VisibilityConfig: se_VisibilityConfig(input.VisibilityConfig, context) }),
  };
};

/**
 * serializeAws_json1_1RuleAction
 */
const se_RuleAction = (input: RuleAction, context: __SerdeContext): any => {
  return {
    ...(input.Allow != null && { Allow: se_AllowAction(input.Allow, context) }),
    ...(input.Block != null && { Block: se_BlockAction(input.Block, context) }),
    ...(input.Captcha != null && { Captcha: se_CaptchaAction(input.Captcha, context) }),
    ...(input.Challenge != null && { Challenge: se_ChallengeAction(input.Challenge, context) }),
    ...(input.Count != null && { Count: se_CountAction(input.Count, context) }),
  };
};

/**
 * serializeAws_json1_1RuleActionOverride
 */
const se_RuleActionOverride = (input: RuleActionOverride, context: __SerdeContext): any => {
  return {
    ...(input.ActionToUse != null && { ActionToUse: se_RuleAction(input.ActionToUse, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1RuleActionOverrides
 */
const se_RuleActionOverrides = (input: RuleActionOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuleActionOverride(entry, context);
    });
};

/**
 * serializeAws_json1_1RuleGroupReferenceStatement
 */
const se_RuleGroupReferenceStatement = (input: RuleGroupReferenceStatement, context: __SerdeContext): any => {
  return {
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.ExcludedRules != null && { ExcludedRules: se_ExcludedRules(input.ExcludedRules, context) }),
    ...(input.RuleActionOverrides != null && {
      RuleActionOverrides: se_RuleActionOverrides(input.RuleActionOverrides, context),
    }),
  };
};

/**
 * serializeAws_json1_1Rules
 */
const se_Rules = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Rule(entry, context);
    });
};

/**
 * serializeAws_json1_1SingleHeader
 */
const se_SingleHeader = (input: SingleHeader, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1SingleQueryArgument
 */
const se_SingleQueryArgument = (input: SingleQueryArgument, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1SizeConstraintStatement
 */
const se_SizeConstraintStatement = (input: SizeConstraintStatement, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.TextTransformations != null && {
      TextTransformations: se_TextTransformations(input.TextTransformations, context),
    }),
  };
};

/**
 * serializeAws_json1_1SqliMatchStatement
 */
const se_SqliMatchStatement = (input: SqliMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.SensitivityLevel != null && { SensitivityLevel: input.SensitivityLevel }),
    ...(input.TextTransformations != null && {
      TextTransformations: se_TextTransformations(input.TextTransformations, context),
    }),
  };
};

/**
 * serializeAws_json1_1Statement
 */
const se_Statement = (input: Statement, context: __SerdeContext): any => {
  return {
    ...(input.AndStatement != null && { AndStatement: se_AndStatement(input.AndStatement, context) }),
    ...(input.ByteMatchStatement != null && {
      ByteMatchStatement: se_ByteMatchStatement(input.ByteMatchStatement, context),
    }),
    ...(input.GeoMatchStatement != null && {
      GeoMatchStatement: se_GeoMatchStatement(input.GeoMatchStatement, context),
    }),
    ...(input.IPSetReferenceStatement != null && {
      IPSetReferenceStatement: se_IPSetReferenceStatement(input.IPSetReferenceStatement, context),
    }),
    ...(input.LabelMatchStatement != null && {
      LabelMatchStatement: se_LabelMatchStatement(input.LabelMatchStatement, context),
    }),
    ...(input.ManagedRuleGroupStatement != null && {
      ManagedRuleGroupStatement: se_ManagedRuleGroupStatement(input.ManagedRuleGroupStatement, context),
    }),
    ...(input.NotStatement != null && { NotStatement: se_NotStatement(input.NotStatement, context) }),
    ...(input.OrStatement != null && { OrStatement: se_OrStatement(input.OrStatement, context) }),
    ...(input.RateBasedStatement != null && {
      RateBasedStatement: se_RateBasedStatement(input.RateBasedStatement, context),
    }),
    ...(input.RegexMatchStatement != null && {
      RegexMatchStatement: se_RegexMatchStatement(input.RegexMatchStatement, context),
    }),
    ...(input.RegexPatternSetReferenceStatement != null && {
      RegexPatternSetReferenceStatement: se_RegexPatternSetReferenceStatement(
        input.RegexPatternSetReferenceStatement,
        context
      ),
    }),
    ...(input.RuleGroupReferenceStatement != null && {
      RuleGroupReferenceStatement: se_RuleGroupReferenceStatement(input.RuleGroupReferenceStatement, context),
    }),
    ...(input.SizeConstraintStatement != null && {
      SizeConstraintStatement: se_SizeConstraintStatement(input.SizeConstraintStatement, context),
    }),
    ...(input.SqliMatchStatement != null && {
      SqliMatchStatement: se_SqliMatchStatement(input.SqliMatchStatement, context),
    }),
    ...(input.XssMatchStatement != null && {
      XssMatchStatement: se_XssMatchStatement(input.XssMatchStatement, context),
    }),
  };
};

/**
 * serializeAws_json1_1Statements
 */
const se_Statements = (input: Statement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Statement(entry, context);
    });
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
 * serializeAws_json1_1TextTransformation
 */
const se_TextTransformation = (input: TextTransformation, context: __SerdeContext): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1TextTransformations
 */
const se_TextTransformations = (input: TextTransformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TextTransformation(entry, context);
    });
};

/**
 * serializeAws_json1_1TimeWindow
 */
const se_TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1TokenDomains
 */
const se_TokenDomains = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_json1_1UpdateIPSetRequest
 */
const se_UpdateIPSetRequest = (input: UpdateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses != null && { Addresses: se_IPAddresses(input.Addresses, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateRequest
 */
const se_UpdateManagedRuleSetVersionExpiryDateRequest = (
  input: UpdateManagedRuleSetVersionExpiryDateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExpiryTimestamp != null && { ExpiryTimestamp: Math.round(input.ExpiryTimestamp.getTime() / 1000) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.VersionToExpire != null && { VersionToExpire: input.VersionToExpire }),
  };
};

/**
 * serializeAws_json1_1UpdateRegexPatternSetRequest
 */
const se_UpdateRegexPatternSetRequest = (input: UpdateRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RegularExpressionList != null && {
      RegularExpressionList: se_RegularExpressionList(input.RegularExpressionList, context),
    }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1UpdateRuleGroupRequest
 */
const se_UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponseBodies != null && {
      CustomResponseBodies: se_CustomResponseBodies(input.CustomResponseBodies, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Rules != null && { Rules: se_Rules(input.Rules, context) }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.VisibilityConfig != null && { VisibilityConfig: se_VisibilityConfig(input.VisibilityConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateWebACLRequest
 */
const se_UpdateWebACLRequest = (input: UpdateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociationConfig != null && {
      AssociationConfig: se_AssociationConfig(input.AssociationConfig, context),
    }),
    ...(input.CaptchaConfig != null && { CaptchaConfig: se_CaptchaConfig(input.CaptchaConfig, context) }),
    ...(input.ChallengeConfig != null && { ChallengeConfig: se_ChallengeConfig(input.ChallengeConfig, context) }),
    ...(input.CustomResponseBodies != null && {
      CustomResponseBodies: se_CustomResponseBodies(input.CustomResponseBodies, context),
    }),
    ...(input.DefaultAction != null && { DefaultAction: se_DefaultAction(input.DefaultAction, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LockToken != null && { LockToken: input.LockToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Rules != null && { Rules: se_Rules(input.Rules, context) }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.TokenDomains != null && { TokenDomains: se_TokenDomains(input.TokenDomains, context) }),
    ...(input.VisibilityConfig != null && { VisibilityConfig: se_VisibilityConfig(input.VisibilityConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UriPath
 */
const se_UriPath = (input: UriPath, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1UsernameField
 */
const se_UsernameField = (input: UsernameField, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
  };
};

/**
 * serializeAws_json1_1VersionsToPublish
 */
const se_VersionsToPublish = (input: Record<string, VersionToPublish>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_VersionToPublish(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1VersionToPublish
 */
const se_VersionToPublish = (input: VersionToPublish, context: __SerdeContext): any => {
  return {
    ...(input.AssociatedRuleGroupArn != null && { AssociatedRuleGroupArn: input.AssociatedRuleGroupArn }),
    ...(input.ForecastedLifetime != null && { ForecastedLifetime: input.ForecastedLifetime }),
  };
};

/**
 * serializeAws_json1_1VisibilityConfig
 */
const se_VisibilityConfig = (input: VisibilityConfig, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchMetricsEnabled != null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.SampledRequestsEnabled != null && { SampledRequestsEnabled: input.SampledRequestsEnabled }),
  };
};

/**
 * serializeAws_json1_1XssMatchStatement
 */
const se_XssMatchStatement = (input: XssMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformations != null && {
      TextTransformations: se_TextTransformations(input.TextTransformations, context),
    }),
  };
};

/**
 * deserializeAws_json1_1ActionCondition
 */
const de_ActionCondition = (output: any, context: __SerdeContext): ActionCondition => {
  return {
    Action: __expectString(output.Action),
  } as any;
};

/**
 * deserializeAws_json1_1All
 */
const de_All = (output: any, context: __SerdeContext): All => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AllowAction
 */
const de_AllowAction = (output: any, context: __SerdeContext): AllowAction => {
  return {
    CustomRequestHandling:
      output.CustomRequestHandling != null
        ? de_CustomRequestHandling(output.CustomRequestHandling, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AllQueryArguments
 */
const de_AllQueryArguments = (output: any, context: __SerdeContext): AllQueryArguments => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AndStatement
 */
const de_AndStatement = (output: any, context: __SerdeContext): AndStatement => {
  return {
    Statements: output.Statements != null ? de_Statements(output.Statements, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociateWebACLResponse
 */
const de_AssociateWebACLResponse = (output: any, context: __SerdeContext): AssociateWebACLResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociationConfig
 */
const de_AssociationConfig = (output: any, context: __SerdeContext): AssociationConfig => {
  return {
    RequestBody: output.RequestBody != null ? de_RequestBody(output.RequestBody, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AWSManagedRulesATPRuleSet
 */
const de_AWSManagedRulesATPRuleSet = (output: any, context: __SerdeContext): AWSManagedRulesATPRuleSet => {
  return {
    LoginPath: __expectString(output.LoginPath),
    RequestInspection:
      output.RequestInspection != null ? de_RequestInspection(output.RequestInspection, context) : undefined,
    ResponseInspection:
      output.ResponseInspection != null ? de_ResponseInspection(output.ResponseInspection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AWSManagedRulesBotControlRuleSet
 */
const de_AWSManagedRulesBotControlRuleSet = (
  output: any,
  context: __SerdeContext
): AWSManagedRulesBotControlRuleSet => {
  return {
    InspectionLevel: __expectString(output.InspectionLevel),
  } as any;
};

/**
 * deserializeAws_json1_1BlockAction
 */
const de_BlockAction = (output: any, context: __SerdeContext): BlockAction => {
  return {
    CustomResponse: output.CustomResponse != null ? de_CustomResponse(output.CustomResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Body
 */
const de_Body = (output: any, context: __SerdeContext): Body => {
  return {
    OversizeHandling: __expectString(output.OversizeHandling),
  } as any;
};

/**
 * deserializeAws_json1_1ByteMatchStatement
 */
const de_ByteMatchStatement = (output: any, context: __SerdeContext): ByteMatchStatement => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    PositionalConstraint: __expectString(output.PositionalConstraint),
    SearchString: output.SearchString != null ? context.base64Decoder(output.SearchString) : undefined,
    TextTransformations:
      output.TextTransformations != null ? de_TextTransformations(output.TextTransformations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CaptchaAction
 */
const de_CaptchaAction = (output: any, context: __SerdeContext): CaptchaAction => {
  return {
    CustomRequestHandling:
      output.CustomRequestHandling != null
        ? de_CustomRequestHandling(output.CustomRequestHandling, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CaptchaConfig
 */
const de_CaptchaConfig = (output: any, context: __SerdeContext): CaptchaConfig => {
  return {
    ImmunityTimeProperty:
      output.ImmunityTimeProperty != null ? de_ImmunityTimeProperty(output.ImmunityTimeProperty, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CaptchaResponse
 */
const de_CaptchaResponse = (output: any, context: __SerdeContext): CaptchaResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    ResponseCode: __expectInt32(output.ResponseCode),
    SolveTimestamp: __expectLong(output.SolveTimestamp),
  } as any;
};

/**
 * deserializeAws_json1_1ChallengeAction
 */
const de_ChallengeAction = (output: any, context: __SerdeContext): ChallengeAction => {
  return {
    CustomRequestHandling:
      output.CustomRequestHandling != null
        ? de_CustomRequestHandling(output.CustomRequestHandling, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ChallengeConfig
 */
const de_ChallengeConfig = (output: any, context: __SerdeContext): ChallengeConfig => {
  return {
    ImmunityTimeProperty:
      output.ImmunityTimeProperty != null ? de_ImmunityTimeProperty(output.ImmunityTimeProperty, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ChallengeResponse
 */
const de_ChallengeResponse = (output: any, context: __SerdeContext): ChallengeResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    ResponseCode: __expectInt32(output.ResponseCode),
    SolveTimestamp: __expectLong(output.SolveTimestamp),
  } as any;
};

/**
 * deserializeAws_json1_1CheckCapacityResponse
 */
const de_CheckCapacityResponse = (output: any, context: __SerdeContext): CheckCapacityResponse => {
  return {
    Capacity: __expectLong(output.Capacity),
  } as any;
};

/**
 * deserializeAws_json1_1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    ActionCondition: output.ActionCondition != null ? de_ActionCondition(output.ActionCondition, context) : undefined,
    LabelNameCondition:
      output.LabelNameCondition != null ? de_LabelNameCondition(output.LabelNameCondition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Conditions
 */
const de_Conditions = (output: any, context: __SerdeContext): Condition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Condition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CookieMatchPattern
 */
const de_CookieMatchPattern = (output: any, context: __SerdeContext): CookieMatchPattern => {
  return {
    All: output.All != null ? de_All(output.All, context) : undefined,
    ExcludedCookies: output.ExcludedCookies != null ? de_CookieNames(output.ExcludedCookies, context) : undefined,
    IncludedCookies: output.IncludedCookies != null ? de_CookieNames(output.IncludedCookies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CookieNames
 */
const de_CookieNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Cookies
 */
const de_Cookies = (output: any, context: __SerdeContext): Cookies => {
  return {
    MatchPattern: output.MatchPattern != null ? de_CookieMatchPattern(output.MatchPattern, context) : undefined,
    MatchScope: __expectString(output.MatchScope),
    OversizeHandling: __expectString(output.OversizeHandling),
  } as any;
};

/**
 * deserializeAws_json1_1CountAction
 */
const de_CountAction = (output: any, context: __SerdeContext): CountAction => {
  return {
    CustomRequestHandling:
      output.CustomRequestHandling != null
        ? de_CustomRequestHandling(output.CustomRequestHandling, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CountryCodes
 */
const de_CountryCodes = (output: any, context: __SerdeContext): (CountryCode | string)[] => {
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
 * deserializeAws_json1_1CreateIPSetResponse
 */
const de_CreateIPSetResponse = (output: any, context: __SerdeContext): CreateIPSetResponse => {
  return {
    Summary: output.Summary != null ? de_IPSetSummary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRegexPatternSetResponse
 */
const de_CreateRegexPatternSetResponse = (output: any, context: __SerdeContext): CreateRegexPatternSetResponse => {
  return {
    Summary: output.Summary != null ? de_RegexPatternSetSummary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRuleGroupResponse
 */
const de_CreateRuleGroupResponse = (output: any, context: __SerdeContext): CreateRuleGroupResponse => {
  return {
    Summary: output.Summary != null ? de_RuleGroupSummary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateWebACLResponse
 */
const de_CreateWebACLResponse = (output: any, context: __SerdeContext): CreateWebACLResponse => {
  return {
    Summary: output.Summary != null ? de_WebACLSummary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomHTTPHeader
 */
const de_CustomHTTPHeader = (output: any, context: __SerdeContext): CustomHTTPHeader => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1CustomHTTPHeaders
 */
const de_CustomHTTPHeaders = (output: any, context: __SerdeContext): CustomHTTPHeader[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomHTTPHeader(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomRequestHandling
 */
const de_CustomRequestHandling = (output: any, context: __SerdeContext): CustomRequestHandling => {
  return {
    InsertHeaders: output.InsertHeaders != null ? de_CustomHTTPHeaders(output.InsertHeaders, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomResponse
 */
const de_CustomResponse = (output: any, context: __SerdeContext): CustomResponse => {
  return {
    CustomResponseBodyKey: __expectString(output.CustomResponseBodyKey),
    ResponseCode: __expectInt32(output.ResponseCode),
    ResponseHeaders: output.ResponseHeaders != null ? de_CustomHTTPHeaders(output.ResponseHeaders, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomResponseBodies
 */
const de_CustomResponseBodies = (output: any, context: __SerdeContext): Record<string, CustomResponseBody> => {
  return Object.entries(output).reduce((acc: Record<string, CustomResponseBody>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_CustomResponseBody(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1CustomResponseBody
 */
const de_CustomResponseBody = (output: any, context: __SerdeContext): CustomResponseBody => {
  return {
    Content: __expectString(output.Content),
    ContentType: __expectString(output.ContentType),
  } as any;
};

/**
 * deserializeAws_json1_1DefaultAction
 */
const de_DefaultAction = (output: any, context: __SerdeContext): DefaultAction => {
  return {
    Allow: output.Allow != null ? de_AllowAction(output.Allow, context) : undefined,
    Block: output.Block != null ? de_BlockAction(output.Block, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse
 */
const de_DeleteFirewallManagerRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): DeleteFirewallManagerRuleGroupsResponse => {
  return {
    NextWebACLLockToken: __expectString(output.NextWebACLLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteIPSetResponse
 */
const de_DeleteIPSetResponse = (output: any, context: __SerdeContext): DeleteIPSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLoggingConfigurationResponse
 */
const de_DeleteLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLoggingConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeletePermissionPolicyResponse
 */
const de_DeletePermissionPolicyResponse = (output: any, context: __SerdeContext): DeletePermissionPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRegexPatternSetResponse
 */
const de_DeleteRegexPatternSetResponse = (output: any, context: __SerdeContext): DeleteRegexPatternSetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRuleGroupResponse
 */
const de_DeleteRuleGroupResponse = (output: any, context: __SerdeContext): DeleteRuleGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteWebACLResponse
 */
const de_DeleteWebACLResponse = (output: any, context: __SerdeContext): DeleteWebACLResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeManagedRuleGroupResponse
 */
const de_DescribeManagedRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeManagedRuleGroupResponse => {
  return {
    AvailableLabels: output.AvailableLabels != null ? de_LabelSummaries(output.AvailableLabels, context) : undefined,
    Capacity: __expectLong(output.Capacity),
    ConsumedLabels: output.ConsumedLabels != null ? de_LabelSummaries(output.ConsumedLabels, context) : undefined,
    LabelNamespace: __expectString(output.LabelNamespace),
    Rules: output.Rules != null ? de_RuleSummaries(output.Rules, context) : undefined,
    SnsTopicArn: __expectString(output.SnsTopicArn),
    VersionName: __expectString(output.VersionName),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateWebACLResponse
 */
const de_DisassociateWebACLResponse = (output: any, context: __SerdeContext): DisassociateWebACLResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ExcludedRule
 */
const de_ExcludedRule = (output: any, context: __SerdeContext): ExcludedRule => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ExcludedRules
 */
const de_ExcludedRules = (output: any, context: __SerdeContext): ExcludedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExcludedRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FieldToMatch
 */
const de_FieldToMatch = (output: any, context: __SerdeContext): FieldToMatch => {
  return {
    AllQueryArguments:
      output.AllQueryArguments != null ? de_AllQueryArguments(output.AllQueryArguments, context) : undefined,
    Body: output.Body != null ? de_Body(output.Body, context) : undefined,
    Cookies: output.Cookies != null ? de_Cookies(output.Cookies, context) : undefined,
    Headers: output.Headers != null ? de_Headers(output.Headers, context) : undefined,
    JsonBody: output.JsonBody != null ? de_JsonBody(output.JsonBody, context) : undefined,
    Method: output.Method != null ? de_Method(output.Method, context) : undefined,
    QueryString: output.QueryString != null ? de_QueryString(output.QueryString, context) : undefined,
    SingleHeader: output.SingleHeader != null ? de_SingleHeader(output.SingleHeader, context) : undefined,
    SingleQueryArgument:
      output.SingleQueryArgument != null ? de_SingleQueryArgument(output.SingleQueryArgument, context) : undefined,
    UriPath: output.UriPath != null ? de_UriPath(output.UriPath, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Behavior: __expectString(output.Behavior),
    Conditions: output.Conditions != null ? de_Conditions(output.Conditions, context) : undefined,
    Requirement: __expectString(output.Requirement),
  } as any;
};

/**
 * deserializeAws_json1_1Filters
 */
const de_Filters = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallManagerRuleGroup
 */
const de_FirewallManagerRuleGroup = (output: any, context: __SerdeContext): FirewallManagerRuleGroup => {
  return {
    FirewallManagerStatement:
      output.FirewallManagerStatement != null
        ? de_FirewallManagerStatement(output.FirewallManagerStatement, context)
        : undefined,
    Name: __expectString(output.Name),
    OverrideAction: output.OverrideAction != null ? de_OverrideAction(output.OverrideAction, context) : undefined,
    Priority: __expectInt32(output.Priority),
    VisibilityConfig:
      output.VisibilityConfig != null ? de_VisibilityConfig(output.VisibilityConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FirewallManagerRuleGroups
 */
const de_FirewallManagerRuleGroups = (output: any, context: __SerdeContext): FirewallManagerRuleGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallManagerRuleGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallManagerStatement
 */
const de_FirewallManagerStatement = (output: any, context: __SerdeContext): FirewallManagerStatement => {
  return {
    ManagedRuleGroupStatement:
      output.ManagedRuleGroupStatement != null
        ? de_ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
        : undefined,
    RuleGroupReferenceStatement:
      output.RuleGroupReferenceStatement != null
        ? de_RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ForwardedIPConfig
 */
const de_ForwardedIPConfig = (output: any, context: __SerdeContext): ForwardedIPConfig => {
  return {
    FallbackBehavior: __expectString(output.FallbackBehavior),
    HeaderName: __expectString(output.HeaderName),
  } as any;
};

/**
 * deserializeAws_json1_1GenerateMobileSdkReleaseUrlResponse
 */
const de_GenerateMobileSdkReleaseUrlResponse = (
  output: any,
  context: __SerdeContext
): GenerateMobileSdkReleaseUrlResponse => {
  return {
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1GeoMatchStatement
 */
const de_GeoMatchStatement = (output: any, context: __SerdeContext): GeoMatchStatement => {
  return {
    CountryCodes: output.CountryCodes != null ? de_CountryCodes(output.CountryCodes, context) : undefined,
    ForwardedIPConfig:
      output.ForwardedIPConfig != null ? de_ForwardedIPConfig(output.ForwardedIPConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetIPSetResponse
 */
const de_GetIPSetResponse = (output: any, context: __SerdeContext): GetIPSetResponse => {
  return {
    IPSet: output.IPSet != null ? de_IPSet(output.IPSet, context) : undefined,
    LockToken: __expectString(output.LockToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetLoggingConfigurationResponse
 */
const de_GetLoggingConfigurationResponse = (output: any, context: __SerdeContext): GetLoggingConfigurationResponse => {
  return {
    LoggingConfiguration:
      output.LoggingConfiguration != null ? de_LoggingConfiguration(output.LoggingConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetManagedRuleSetResponse
 */
const de_GetManagedRuleSetResponse = (output: any, context: __SerdeContext): GetManagedRuleSetResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    ManagedRuleSet: output.ManagedRuleSet != null ? de_ManagedRuleSet(output.ManagedRuleSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetMobileSdkReleaseResponse
 */
const de_GetMobileSdkReleaseResponse = (output: any, context: __SerdeContext): GetMobileSdkReleaseResponse => {
  return {
    MobileSdkRelease:
      output.MobileSdkRelease != null ? de_MobileSdkRelease(output.MobileSdkRelease, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPermissionPolicyResponse
 */
const de_GetPermissionPolicyResponse = (output: any, context: __SerdeContext): GetPermissionPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse
 */
const de_GetRateBasedStatementManagedKeysResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedStatementManagedKeysResponse => {
  return {
    ManagedKeysIPV4:
      output.ManagedKeysIPV4 != null
        ? de_RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV4, context)
        : undefined,
    ManagedKeysIPV6:
      output.ManagedKeysIPV6 != null
        ? de_RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV6, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRegexPatternSetResponse
 */
const de_GetRegexPatternSetResponse = (output: any, context: __SerdeContext): GetRegexPatternSetResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    RegexPatternSet: output.RegexPatternSet != null ? de_RegexPatternSet(output.RegexPatternSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRuleGroupResponse
 */
const de_GetRuleGroupResponse = (output: any, context: __SerdeContext): GetRuleGroupResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    RuleGroup: output.RuleGroup != null ? de_RuleGroup(output.RuleGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSampledRequestsResponse
 */
const de_GetSampledRequestsResponse = (output: any, context: __SerdeContext): GetSampledRequestsResponse => {
  return {
    PopulationSize: __expectLong(output.PopulationSize),
    SampledRequests:
      output.SampledRequests != null ? de_SampledHTTPRequests(output.SampledRequests, context) : undefined,
    TimeWindow: output.TimeWindow != null ? de_TimeWindow(output.TimeWindow, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetWebACLForResourceResponse
 */
const de_GetWebACLForResourceResponse = (output: any, context: __SerdeContext): GetWebACLForResourceResponse => {
  return {
    WebACL: output.WebACL != null ? de_WebACL(output.WebACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetWebACLResponse
 */
const de_GetWebACLResponse = (output: any, context: __SerdeContext): GetWebACLResponse => {
  return {
    ApplicationIntegrationURL: __expectString(output.ApplicationIntegrationURL),
    LockToken: __expectString(output.LockToken),
    WebACL: output.WebACL != null ? de_WebACL(output.WebACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HeaderMatchPattern
 */
const de_HeaderMatchPattern = (output: any, context: __SerdeContext): HeaderMatchPattern => {
  return {
    All: output.All != null ? de_All(output.All, context) : undefined,
    ExcludedHeaders: output.ExcludedHeaders != null ? de_HeaderNames(output.ExcludedHeaders, context) : undefined,
    IncludedHeaders: output.IncludedHeaders != null ? de_HeaderNames(output.IncludedHeaders, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HeaderNames
 */
const de_HeaderNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Headers
 */
const de_Headers = (output: any, context: __SerdeContext): Headers => {
  return {
    MatchPattern: output.MatchPattern != null ? de_HeaderMatchPattern(output.MatchPattern, context) : undefined,
    MatchScope: __expectString(output.MatchScope),
    OversizeHandling: __expectString(output.OversizeHandling),
  } as any;
};

/**
 * deserializeAws_json1_1HTTPHeader
 */
const de_HTTPHeader = (output: any, context: __SerdeContext): HTTPHeader => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1HTTPHeaders
 */
const de_HTTPHeaders = (output: any, context: __SerdeContext): HTTPHeader[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HTTPHeader(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HTTPRequest
 */
const de_HTTPRequest = (output: any, context: __SerdeContext): HTTPRequest => {
  return {
    ClientIP: __expectString(output.ClientIP),
    Country: __expectString(output.Country),
    HTTPVersion: __expectString(output.HTTPVersion),
    Headers: output.Headers != null ? de_HTTPHeaders(output.Headers, context) : undefined,
    Method: __expectString(output.Method),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_json1_1ImmunityTimeProperty
 */
const de_ImmunityTimeProperty = (output: any, context: __SerdeContext): ImmunityTimeProperty => {
  return {
    ImmunityTime: __expectLong(output.ImmunityTime),
  } as any;
};

/**
 * deserializeAws_json1_1IPAddresses
 */
const de_IPAddresses = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1IPSet
 */
const de_IPSet = (output: any, context: __SerdeContext): IPSet => {
  return {
    ARN: __expectString(output.ARN),
    Addresses: output.Addresses != null ? de_IPAddresses(output.Addresses, context) : undefined,
    Description: __expectString(output.Description),
    IPAddressVersion: __expectString(output.IPAddressVersion),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1IPSetForwardedIPConfig
 */
const de_IPSetForwardedIPConfig = (output: any, context: __SerdeContext): IPSetForwardedIPConfig => {
  return {
    FallbackBehavior: __expectString(output.FallbackBehavior),
    HeaderName: __expectString(output.HeaderName),
    Position: __expectString(output.Position),
  } as any;
};

/**
 * deserializeAws_json1_1IPSetReferenceStatement
 */
const de_IPSetReferenceStatement = (output: any, context: __SerdeContext): IPSetReferenceStatement => {
  return {
    ARN: __expectString(output.ARN),
    IPSetForwardedIPConfig:
      output.IPSetForwardedIPConfig != null
        ? de_IPSetForwardedIPConfig(output.IPSetForwardedIPConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IPSetSummaries
 */
const de_IPSetSummaries = (output: any, context: __SerdeContext): IPSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IPSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IPSetSummary
 */
const de_IPSetSummary = (output: any, context: __SerdeContext): IPSetSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1JsonBody
 */
const de_JsonBody = (output: any, context: __SerdeContext): JsonBody => {
  return {
    InvalidFallbackBehavior: __expectString(output.InvalidFallbackBehavior),
    MatchPattern: output.MatchPattern != null ? de_JsonMatchPattern(output.MatchPattern, context) : undefined,
    MatchScope: __expectString(output.MatchScope),
    OversizeHandling: __expectString(output.OversizeHandling),
  } as any;
};

/**
 * deserializeAws_json1_1JsonMatchPattern
 */
const de_JsonMatchPattern = (output: any, context: __SerdeContext): JsonMatchPattern => {
  return {
    All: output.All != null ? de_All(output.All, context) : undefined,
    IncludedPaths: output.IncludedPaths != null ? de_JsonPointerPaths(output.IncludedPaths, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1JsonPointerPaths
 */
const de_JsonPointerPaths = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Label
 */
const de_Label = (output: any, context: __SerdeContext): Label => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1LabelMatchStatement
 */
const de_LabelMatchStatement = (output: any, context: __SerdeContext): LabelMatchStatement => {
  return {
    Key: __expectString(output.Key),
    Scope: __expectString(output.Scope),
  } as any;
};

/**
 * deserializeAws_json1_1LabelNameCondition
 */
const de_LabelNameCondition = (output: any, context: __SerdeContext): LabelNameCondition => {
  return {
    LabelName: __expectString(output.LabelName),
  } as any;
};

/**
 * deserializeAws_json1_1Labels
 */
const de_Labels = (output: any, context: __SerdeContext): Label[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Label(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LabelSummaries
 */
const de_LabelSummaries = (output: any, context: __SerdeContext): LabelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LabelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LabelSummary
 */
const de_LabelSummary = (output: any, context: __SerdeContext): LabelSummary => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse
 */
const de_ListAvailableManagedRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupsResponse => {
  return {
    ManagedRuleGroups:
      output.ManagedRuleGroups != null ? de_ManagedRuleGroupSummaries(output.ManagedRuleGroups, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsResponse
 */
const de_ListAvailableManagedRuleGroupVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupVersionsResponse => {
  return {
    CurrentDefaultVersion: __expectString(output.CurrentDefaultVersion),
    NextMarker: __expectString(output.NextMarker),
    Versions: output.Versions != null ? de_ManagedRuleGroupVersions(output.Versions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListIPSetsResponse
 */
const de_ListIPSetsResponse = (output: any, context: __SerdeContext): ListIPSetsResponse => {
  return {
    IPSets: output.IPSets != null ? de_IPSetSummaries(output.IPSets, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListLoggingConfigurationsResponse
 */
const de_ListLoggingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLoggingConfigurationsResponse => {
  return {
    LoggingConfigurations:
      output.LoggingConfigurations != null
        ? de_LoggingConfigurations(output.LoggingConfigurations, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListManagedRuleSetsResponse
 */
const de_ListManagedRuleSetsResponse = (output: any, context: __SerdeContext): ListManagedRuleSetsResponse => {
  return {
    ManagedRuleSets:
      output.ManagedRuleSets != null ? de_ManagedRuleSetSummaries(output.ManagedRuleSets, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListMobileSdkReleasesResponse
 */
const de_ListMobileSdkReleasesResponse = (output: any, context: __SerdeContext): ListMobileSdkReleasesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    ReleaseSummaries:
      output.ReleaseSummaries != null ? de_ReleaseSummaries(output.ReleaseSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRegexPatternSetsResponse
 */
const de_ListRegexPatternSetsResponse = (output: any, context: __SerdeContext): ListRegexPatternSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RegexPatternSets:
      output.RegexPatternSets != null ? de_RegexPatternSetSummaries(output.RegexPatternSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourcesForWebACLResponse
 */
const de_ListResourcesForWebACLResponse = (output: any, context: __SerdeContext): ListResourcesForWebACLResponse => {
  return {
    ResourceArns: output.ResourceArns != null ? de_ResourceArns(output.ResourceArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRuleGroupsResponse
 */
const de_ListRuleGroupsResponse = (output: any, context: __SerdeContext): ListRuleGroupsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RuleGroups: output.RuleGroups != null ? de_RuleGroupSummaries(output.RuleGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    TagInfoForResource:
      output.TagInfoForResource != null ? de_TagInfoForResource(output.TagInfoForResource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWebACLsResponse
 */
const de_ListWebACLsResponse = (output: any, context: __SerdeContext): ListWebACLsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    WebACLs: output.WebACLs != null ? de_WebACLSummaries(output.WebACLs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogDestinationConfigs
 */
const de_LogDestinationConfigs = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LoggingConfiguration
 */
const de_LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogDestinationConfigs:
      output.LogDestinationConfigs != null
        ? de_LogDestinationConfigs(output.LogDestinationConfigs, context)
        : undefined,
    LoggingFilter: output.LoggingFilter != null ? de_LoggingFilter(output.LoggingFilter, context) : undefined,
    ManagedByFirewallManager: __expectBoolean(output.ManagedByFirewallManager),
    RedactedFields: output.RedactedFields != null ? de_RedactedFields(output.RedactedFields, context) : undefined,
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1LoggingConfigurations
 */
const de_LoggingConfigurations = (output: any, context: __SerdeContext): LoggingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoggingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoggingFilter
 */
const de_LoggingFilter = (output: any, context: __SerdeContext): LoggingFilter => {
  return {
    DefaultBehavior: __expectString(output.DefaultBehavior),
    Filters: output.Filters != null ? de_Filters(output.Filters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupConfig
 */
const de_ManagedRuleGroupConfig = (output: any, context: __SerdeContext): ManagedRuleGroupConfig => {
  return {
    AWSManagedRulesATPRuleSet:
      output.AWSManagedRulesATPRuleSet != null
        ? de_AWSManagedRulesATPRuleSet(output.AWSManagedRulesATPRuleSet, context)
        : undefined,
    AWSManagedRulesBotControlRuleSet:
      output.AWSManagedRulesBotControlRuleSet != null
        ? de_AWSManagedRulesBotControlRuleSet(output.AWSManagedRulesBotControlRuleSet, context)
        : undefined,
    LoginPath: __expectString(output.LoginPath),
    PasswordField: output.PasswordField != null ? de_PasswordField(output.PasswordField, context) : undefined,
    PayloadType: __expectString(output.PayloadType),
    UsernameField: output.UsernameField != null ? de_UsernameField(output.UsernameField, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupConfigs
 */
const de_ManagedRuleGroupConfigs = (output: any, context: __SerdeContext): ManagedRuleGroupConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedRuleGroupConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupStatement
 */
const de_ManagedRuleGroupStatement = (output: any, context: __SerdeContext): ManagedRuleGroupStatement => {
  return {
    ExcludedRules: output.ExcludedRules != null ? de_ExcludedRules(output.ExcludedRules, context) : undefined,
    ManagedRuleGroupConfigs:
      output.ManagedRuleGroupConfigs != null
        ? de_ManagedRuleGroupConfigs(output.ManagedRuleGroupConfigs, context)
        : undefined,
    Name: __expectString(output.Name),
    RuleActionOverrides:
      output.RuleActionOverrides != null ? de_RuleActionOverrides(output.RuleActionOverrides, context) : undefined,
    ScopeDownStatement:
      output.ScopeDownStatement != null ? de_Statement(output.ScopeDownStatement, context) : undefined,
    VendorName: __expectString(output.VendorName),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupSummaries
 */
const de_ManagedRuleGroupSummaries = (output: any, context: __SerdeContext): ManagedRuleGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedRuleGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupSummary
 */
const de_ManagedRuleGroupSummary = (output: any, context: __SerdeContext): ManagedRuleGroupSummary => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    VendorName: __expectString(output.VendorName),
    VersioningSupported: __expectBoolean(output.VersioningSupported),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupVersion
 */
const de_ManagedRuleGroupVersion = (output: any, context: __SerdeContext): ManagedRuleGroupVersion => {
  return {
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupVersions
 */
const de_ManagedRuleGroupVersions = (output: any, context: __SerdeContext): ManagedRuleGroupVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedRuleGroupVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ManagedRuleSet
 */
const de_ManagedRuleSet = (output: any, context: __SerdeContext): ManagedRuleSet => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    Name: __expectString(output.Name),
    PublishedVersions:
      output.PublishedVersions != null ? de_PublishedVersions(output.PublishedVersions, context) : undefined,
    RecommendedVersion: __expectString(output.RecommendedVersion),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleSetSummaries
 */
const de_ManagedRuleSetSummaries = (output: any, context: __SerdeContext): ManagedRuleSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedRuleSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ManagedRuleSetSummary
 */
const de_ManagedRuleSetSummary = (output: any, context: __SerdeContext): ManagedRuleSetSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleSetVersion
 */
const de_ManagedRuleSetVersion = (output: any, context: __SerdeContext): ManagedRuleSetVersion => {
  return {
    AssociatedRuleGroupArn: __expectString(output.AssociatedRuleGroupArn),
    Capacity: __expectLong(output.Capacity),
    ExpiryTimestamp:
      output.ExpiryTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiryTimestamp)))
        : undefined,
    ForecastedLifetime: __expectInt32(output.ForecastedLifetime),
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    PublishTimestamp:
      output.PublishTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PublishTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Method
 */
const de_Method = (output: any, context: __SerdeContext): Method => {
  return {} as any;
};

/**
 * deserializeAws_json1_1MobileSdkRelease
 */
const de_MobileSdkRelease = (output: any, context: __SerdeContext): MobileSdkRelease => {
  return {
    ReleaseNotes: __expectString(output.ReleaseNotes),
    ReleaseVersion: __expectString(output.ReleaseVersion),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NoneAction
 */
const de_NoneAction = (output: any, context: __SerdeContext): NoneAction => {
  return {} as any;
};

/**
 * deserializeAws_json1_1NotStatement
 */
const de_NotStatement = (output: any, context: __SerdeContext): NotStatement => {
  return {
    Statement: output.Statement != null ? de_Statement(output.Statement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OrStatement
 */
const de_OrStatement = (output: any, context: __SerdeContext): OrStatement => {
  return {
    Statements: output.Statements != null ? de_Statements(output.Statements, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OverrideAction
 */
const de_OverrideAction = (output: any, context: __SerdeContext): OverrideAction => {
  return {
    Count: output.Count != null ? de_CountAction(output.Count, context) : undefined,
    None: output.None != null ? de_NoneAction(output.None, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PasswordField
 */
const de_PasswordField = (output: any, context: __SerdeContext): PasswordField => {
  return {
    Identifier: __expectString(output.Identifier),
  } as any;
};

/**
 * deserializeAws_json1_1PublishedVersions
 */
const de_PublishedVersions = (output: any, context: __SerdeContext): Record<string, ManagedRuleSetVersion> => {
  return Object.entries(output).reduce((acc: Record<string, ManagedRuleSetVersion>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ManagedRuleSetVersion(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PutLoggingConfigurationResponse
 */
const de_PutLoggingConfigurationResponse = (output: any, context: __SerdeContext): PutLoggingConfigurationResponse => {
  return {
    LoggingConfiguration:
      output.LoggingConfiguration != null ? de_LoggingConfiguration(output.LoggingConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutManagedRuleSetVersionsResponse
 */
const de_PutManagedRuleSetVersionsResponse = (
  output: any,
  context: __SerdeContext
): PutManagedRuleSetVersionsResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1PutPermissionPolicyResponse
 */
const de_PutPermissionPolicyResponse = (output: any, context: __SerdeContext): PutPermissionPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1QueryString
 */
const de_QueryString = (output: any, context: __SerdeContext): QueryString => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RateBasedStatement
 */
const de_RateBasedStatement = (output: any, context: __SerdeContext): RateBasedStatement => {
  return {
    AggregateKeyType: __expectString(output.AggregateKeyType),
    ForwardedIPConfig:
      output.ForwardedIPConfig != null ? de_ForwardedIPConfig(output.ForwardedIPConfig, context) : undefined,
    Limit: __expectLong(output.Limit),
    ScopeDownStatement:
      output.ScopeDownStatement != null ? de_Statement(output.ScopeDownStatement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RateBasedStatementManagedKeysIPSet
 */
const de_RateBasedStatementManagedKeysIPSet = (
  output: any,
  context: __SerdeContext
): RateBasedStatementManagedKeysIPSet => {
  return {
    Addresses: output.Addresses != null ? de_IPAddresses(output.Addresses, context) : undefined,
    IPAddressVersion: __expectString(output.IPAddressVersion),
  } as any;
};

/**
 * deserializeAws_json1_1RedactedFields
 */
const de_RedactedFields = (output: any, context: __SerdeContext): FieldToMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldToMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Regex
 */
const de_Regex = (output: any, context: __SerdeContext): Regex => {
  return {
    RegexString: __expectString(output.RegexString),
  } as any;
};

/**
 * deserializeAws_json1_1RegexMatchStatement
 */
const de_RegexMatchStatement = (output: any, context: __SerdeContext): RegexMatchStatement => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    RegexString: __expectString(output.RegexString),
    TextTransformations:
      output.TextTransformations != null ? de_TextTransformations(output.TextTransformations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegexPatternSet
 */
const de_RegexPatternSet = (output: any, context: __SerdeContext): RegexPatternSet => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    RegularExpressionList:
      output.RegularExpressionList != null
        ? de_RegularExpressionList(output.RegularExpressionList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegexPatternSetReferenceStatement
 */
const de_RegexPatternSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): RegexPatternSetReferenceStatement => {
  return {
    ARN: __expectString(output.ARN),
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    TextTransformations:
      output.TextTransformations != null ? de_TextTransformations(output.TextTransformations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegexPatternSetSummaries
 */
const de_RegexPatternSetSummaries = (output: any, context: __SerdeContext): RegexPatternSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegexPatternSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegexPatternSetSummary
 */
const de_RegexPatternSetSummary = (output: any, context: __SerdeContext): RegexPatternSetSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1RegularExpressionList
 */
const de_RegularExpressionList = (output: any, context: __SerdeContext): Regex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Regex(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReleaseSummaries
 */
const de_ReleaseSummaries = (output: any, context: __SerdeContext): ReleaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReleaseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReleaseSummary
 */
const de_ReleaseSummary = (output: any, context: __SerdeContext): ReleaseSummary => {
  return {
    ReleaseVersion: __expectString(output.ReleaseVersion),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RequestBody
 */
const de_RequestBody = (
  output: any,
  context: __SerdeContext
): Record<string, RequestBodyAssociatedResourceTypeConfig> => {
  return Object.entries(output).reduce(
    (
      acc: Record<string, RequestBodyAssociatedResourceTypeConfig>,
      [key, value]: [AssociatedResourceType | string, any]
    ) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_RequestBodyAssociatedResourceTypeConfig(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1RequestBodyAssociatedResourceTypeConfig
 */
const de_RequestBodyAssociatedResourceTypeConfig = (
  output: any,
  context: __SerdeContext
): RequestBodyAssociatedResourceTypeConfig => {
  return {
    DefaultSizeInspectionLimit: __expectString(output.DefaultSizeInspectionLimit),
  } as any;
};

/**
 * deserializeAws_json1_1RequestInspection
 */
const de_RequestInspection = (output: any, context: __SerdeContext): RequestInspection => {
  return {
    PasswordField: output.PasswordField != null ? de_PasswordField(output.PasswordField, context) : undefined,
    PayloadType: __expectString(output.PayloadType),
    UsernameField: output.UsernameField != null ? de_UsernameField(output.UsernameField, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceArns
 */
const de_ResourceArns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspection
 */
const de_ResponseInspection = (output: any, context: __SerdeContext): ResponseInspection => {
  return {
    BodyContains:
      output.BodyContains != null ? de_ResponseInspectionBodyContains(output.BodyContains, context) : undefined,
    Header: output.Header != null ? de_ResponseInspectionHeader(output.Header, context) : undefined,
    Json: output.Json != null ? de_ResponseInspectionJson(output.Json, context) : undefined,
    StatusCode: output.StatusCode != null ? de_ResponseInspectionStatusCode(output.StatusCode, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResponseInspectionBodyContains
 */
const de_ResponseInspectionBodyContains = (output: any, context: __SerdeContext): ResponseInspectionBodyContains => {
  return {
    FailureStrings:
      output.FailureStrings != null
        ? de_ResponseInspectionBodyContainsFailureStrings(output.FailureStrings, context)
        : undefined,
    SuccessStrings:
      output.SuccessStrings != null
        ? de_ResponseInspectionBodyContainsSuccessStrings(output.SuccessStrings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResponseInspectionBodyContainsFailureStrings
 */
const de_ResponseInspectionBodyContainsFailureStrings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspectionBodyContainsSuccessStrings
 */
const de_ResponseInspectionBodyContainsSuccessStrings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspectionHeader
 */
const de_ResponseInspectionHeader = (output: any, context: __SerdeContext): ResponseInspectionHeader => {
  return {
    FailureValues:
      output.FailureValues != null
        ? de_ResponseInspectionHeaderFailureValues(output.FailureValues, context)
        : undefined,
    Name: __expectString(output.Name),
    SuccessValues:
      output.SuccessValues != null
        ? de_ResponseInspectionHeaderSuccessValues(output.SuccessValues, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResponseInspectionHeaderFailureValues
 */
const de_ResponseInspectionHeaderFailureValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspectionHeaderSuccessValues
 */
const de_ResponseInspectionHeaderSuccessValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspectionJson
 */
const de_ResponseInspectionJson = (output: any, context: __SerdeContext): ResponseInspectionJson => {
  return {
    FailureValues:
      output.FailureValues != null ? de_ResponseInspectionJsonFailureValues(output.FailureValues, context) : undefined,
    Identifier: __expectString(output.Identifier),
    SuccessValues:
      output.SuccessValues != null ? de_ResponseInspectionJsonSuccessValues(output.SuccessValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResponseInspectionJsonFailureValues
 */
const de_ResponseInspectionJsonFailureValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspectionJsonSuccessValues
 */
const de_ResponseInspectionJsonSuccessValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResponseInspectionStatusCode
 */
const de_ResponseInspectionStatusCode = (output: any, context: __SerdeContext): ResponseInspectionStatusCode => {
  return {
    FailureCodes:
      output.FailureCodes != null
        ? de_ResponseInspectionStatusCodeFailureCodes(output.FailureCodes, context)
        : undefined,
    SuccessCodes:
      output.SuccessCodes != null
        ? de_ResponseInspectionStatusCodeSuccessCodes(output.SuccessCodes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResponseInspectionStatusCodeFailureCodes
 */
const de_ResponseInspectionStatusCodeFailureCodes = (output: any, context: __SerdeContext): number[] => {
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
 * deserializeAws_json1_1ResponseInspectionStatusCodeSuccessCodes
 */
const de_ResponseInspectionStatusCodeSuccessCodes = (output: any, context: __SerdeContext): number[] => {
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
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Action: output.Action != null ? de_RuleAction(output.Action, context) : undefined,
    CaptchaConfig: output.CaptchaConfig != null ? de_CaptchaConfig(output.CaptchaConfig, context) : undefined,
    ChallengeConfig: output.ChallengeConfig != null ? de_ChallengeConfig(output.ChallengeConfig, context) : undefined,
    Name: __expectString(output.Name),
    OverrideAction: output.OverrideAction != null ? de_OverrideAction(output.OverrideAction, context) : undefined,
    Priority: __expectInt32(output.Priority),
    RuleLabels: output.RuleLabels != null ? de_Labels(output.RuleLabels, context) : undefined,
    Statement: output.Statement != null ? de_Statement(output.Statement, context) : undefined,
    VisibilityConfig:
      output.VisibilityConfig != null ? de_VisibilityConfig(output.VisibilityConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RuleAction
 */
const de_RuleAction = (output: any, context: __SerdeContext): RuleAction => {
  return {
    Allow: output.Allow != null ? de_AllowAction(output.Allow, context) : undefined,
    Block: output.Block != null ? de_BlockAction(output.Block, context) : undefined,
    Captcha: output.Captcha != null ? de_CaptchaAction(output.Captcha, context) : undefined,
    Challenge: output.Challenge != null ? de_ChallengeAction(output.Challenge, context) : undefined,
    Count: output.Count != null ? de_CountAction(output.Count, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RuleActionOverride
 */
const de_RuleActionOverride = (output: any, context: __SerdeContext): RuleActionOverride => {
  return {
    ActionToUse: output.ActionToUse != null ? de_RuleAction(output.ActionToUse, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1RuleActionOverrides
 */
const de_RuleActionOverrides = (output: any, context: __SerdeContext): RuleActionOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleActionOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RuleGroup
 */
const de_RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return {
    ARN: __expectString(output.ARN),
    AvailableLabels: output.AvailableLabels != null ? de_LabelSummaries(output.AvailableLabels, context) : undefined,
    Capacity: __expectLong(output.Capacity),
    ConsumedLabels: output.ConsumedLabels != null ? de_LabelSummaries(output.ConsumedLabels, context) : undefined,
    CustomResponseBodies:
      output.CustomResponseBodies != null ? de_CustomResponseBodies(output.CustomResponseBodies, context) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    Name: __expectString(output.Name),
    Rules: output.Rules != null ? de_Rules(output.Rules, context) : undefined,
    VisibilityConfig:
      output.VisibilityConfig != null ? de_VisibilityConfig(output.VisibilityConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RuleGroupReferenceStatement
 */
const de_RuleGroupReferenceStatement = (output: any, context: __SerdeContext): RuleGroupReferenceStatement => {
  return {
    ARN: __expectString(output.ARN),
    ExcludedRules: output.ExcludedRules != null ? de_ExcludedRules(output.ExcludedRules, context) : undefined,
    RuleActionOverrides:
      output.RuleActionOverrides != null ? de_RuleActionOverrides(output.RuleActionOverrides, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RuleGroupSummaries
 */
const de_RuleGroupSummaries = (output: any, context: __SerdeContext): RuleGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RuleGroupSummary
 */
const de_RuleGroupSummary = (output: any, context: __SerdeContext): RuleGroupSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1Rules
 */
const de_Rules = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Rule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RuleSummaries
 */
const de_RuleSummaries = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RuleSummary
 */
const de_RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return {
    Action: output.Action != null ? de_RuleAction(output.Action, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1SampledHTTPRequest
 */
const de_SampledHTTPRequest = (output: any, context: __SerdeContext): SampledHTTPRequest => {
  return {
    Action: __expectString(output.Action),
    CaptchaResponse: output.CaptchaResponse != null ? de_CaptchaResponse(output.CaptchaResponse, context) : undefined,
    ChallengeResponse:
      output.ChallengeResponse != null ? de_ChallengeResponse(output.ChallengeResponse, context) : undefined,
    Labels: output.Labels != null ? de_Labels(output.Labels, context) : undefined,
    OverriddenAction: __expectString(output.OverriddenAction),
    Request: output.Request != null ? de_HTTPRequest(output.Request, context) : undefined,
    RequestHeadersInserted:
      output.RequestHeadersInserted != null ? de_HTTPHeaders(output.RequestHeadersInserted, context) : undefined,
    ResponseCodeSent: __expectInt32(output.ResponseCodeSent),
    RuleNameWithinRuleGroup: __expectString(output.RuleNameWithinRuleGroup),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Weight: __expectLong(output.Weight),
  } as any;
};

/**
 * deserializeAws_json1_1SampledHTTPRequests
 */
const de_SampledHTTPRequests = (output: any, context: __SerdeContext): SampledHTTPRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SampledHTTPRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SingleHeader
 */
const de_SingleHeader = (output: any, context: __SerdeContext): SingleHeader => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1SingleQueryArgument
 */
const de_SingleQueryArgument = (output: any, context: __SerdeContext): SingleQueryArgument => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1SizeConstraintStatement
 */
const de_SizeConstraintStatement = (output: any, context: __SerdeContext): SizeConstraintStatement => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    Size: __expectLong(output.Size),
    TextTransformations:
      output.TextTransformations != null ? de_TextTransformations(output.TextTransformations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SqliMatchStatement
 */
const de_SqliMatchStatement = (output: any, context: __SerdeContext): SqliMatchStatement => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    SensitivityLevel: __expectString(output.SensitivityLevel),
    TextTransformations:
      output.TextTransformations != null ? de_TextTransformations(output.TextTransformations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Statement
 */
const de_Statement = (output: any, context: __SerdeContext): Statement => {
  return {
    AndStatement: output.AndStatement != null ? de_AndStatement(output.AndStatement, context) : undefined,
    ByteMatchStatement:
      output.ByteMatchStatement != null ? de_ByteMatchStatement(output.ByteMatchStatement, context) : undefined,
    GeoMatchStatement:
      output.GeoMatchStatement != null ? de_GeoMatchStatement(output.GeoMatchStatement, context) : undefined,
    IPSetReferenceStatement:
      output.IPSetReferenceStatement != null
        ? de_IPSetReferenceStatement(output.IPSetReferenceStatement, context)
        : undefined,
    LabelMatchStatement:
      output.LabelMatchStatement != null ? de_LabelMatchStatement(output.LabelMatchStatement, context) : undefined,
    ManagedRuleGroupStatement:
      output.ManagedRuleGroupStatement != null
        ? de_ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
        : undefined,
    NotStatement: output.NotStatement != null ? de_NotStatement(output.NotStatement, context) : undefined,
    OrStatement: output.OrStatement != null ? de_OrStatement(output.OrStatement, context) : undefined,
    RateBasedStatement:
      output.RateBasedStatement != null ? de_RateBasedStatement(output.RateBasedStatement, context) : undefined,
    RegexMatchStatement:
      output.RegexMatchStatement != null ? de_RegexMatchStatement(output.RegexMatchStatement, context) : undefined,
    RegexPatternSetReferenceStatement:
      output.RegexPatternSetReferenceStatement != null
        ? de_RegexPatternSetReferenceStatement(output.RegexPatternSetReferenceStatement, context)
        : undefined,
    RuleGroupReferenceStatement:
      output.RuleGroupReferenceStatement != null
        ? de_RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
        : undefined,
    SizeConstraintStatement:
      output.SizeConstraintStatement != null
        ? de_SizeConstraintStatement(output.SizeConstraintStatement, context)
        : undefined,
    SqliMatchStatement:
      output.SqliMatchStatement != null ? de_SqliMatchStatement(output.SqliMatchStatement, context) : undefined,
    XssMatchStatement:
      output.XssMatchStatement != null ? de_XssMatchStatement(output.XssMatchStatement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Statements
 */
const de_Statements = (output: any, context: __SerdeContext): Statement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Statement(entry, context);
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
 * deserializeAws_json1_1TagInfoForResource
 */
const de_TagInfoForResource = (output: any, context: __SerdeContext): TagInfoForResource => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
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
 * deserializeAws_json1_1TextTransformation
 */
const de_TextTransformation = (output: any, context: __SerdeContext): TextTransformation => {
  return {
    Priority: __expectInt32(output.Priority),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1TextTransformations
 */
const de_TextTransformations = (output: any, context: __SerdeContext): TextTransformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TextTransformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TimeWindow
 */
const de_TimeWindow = (output: any, context: __SerdeContext): TimeWindow => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TokenDomains
 */
const de_TokenDomains = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateIPSetResponse
 */
const de_UpdateIPSetResponse = (output: any, context: __SerdeContext): UpdateIPSetResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateResponse
 */
const de_UpdateManagedRuleSetVersionExpiryDateResponse = (
  output: any,
  context: __SerdeContext
): UpdateManagedRuleSetVersionExpiryDateResponse => {
  return {
    ExpiringVersion: __expectString(output.ExpiringVersion),
    ExpiryTimestamp:
      output.ExpiryTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiryTimestamp)))
        : undefined,
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRegexPatternSetResponse
 */
const de_UpdateRegexPatternSetResponse = (output: any, context: __SerdeContext): UpdateRegexPatternSetResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRuleGroupResponse
 */
const de_UpdateRuleGroupResponse = (output: any, context: __SerdeContext): UpdateRuleGroupResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateWebACLResponse
 */
const de_UpdateWebACLResponse = (output: any, context: __SerdeContext): UpdateWebACLResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

/**
 * deserializeAws_json1_1UriPath
 */
const de_UriPath = (output: any, context: __SerdeContext): UriPath => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UsernameField
 */
const de_UsernameField = (output: any, context: __SerdeContext): UsernameField => {
  return {
    Identifier: __expectString(output.Identifier),
  } as any;
};

/**
 * deserializeAws_json1_1VisibilityConfig
 */
const de_VisibilityConfig = (output: any, context: __SerdeContext): VisibilityConfig => {
  return {
    CloudWatchMetricsEnabled: __expectBoolean(output.CloudWatchMetricsEnabled),
    MetricName: __expectString(output.MetricName),
    SampledRequestsEnabled: __expectBoolean(output.SampledRequestsEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1WAFAssociatedItemException
 */
const de_WAFAssociatedItemException = (output: any, context: __SerdeContext): WAFAssociatedItemException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFConfigurationWarningException
 */
const de_WAFConfigurationWarningException = (
  output: any,
  context: __SerdeContext
): WAFConfigurationWarningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFDuplicateItemException
 */
const de_WAFDuplicateItemException = (output: any, context: __SerdeContext): WAFDuplicateItemException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionException
 */
const de_WAFExpiredManagedRuleGroupVersionException = (
  output: any,
  context: __SerdeContext
): WAFExpiredManagedRuleGroupVersionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInternalErrorException
 */
const de_WAFInternalErrorException = (output: any, context: __SerdeContext): WAFInternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidOperationException
 */
const de_WAFInvalidOperationException = (output: any, context: __SerdeContext): WAFInvalidOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidParameterException
 */
const de_WAFInvalidParameterException = (output: any, context: __SerdeContext): WAFInvalidParameterException => {
  return {
    Field: __expectString(output.Field),
    Parameter: __expectString(output.Parameter),
    Reason: __expectString(output.Reason),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidPermissionPolicyException
 */
const de_WAFInvalidPermissionPolicyException = (
  output: any,
  context: __SerdeContext
): WAFInvalidPermissionPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidResourceException
 */
const de_WAFInvalidResourceException = (output: any, context: __SerdeContext): WAFInvalidResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFLimitsExceededException
 */
const de_WAFLimitsExceededException = (output: any, context: __SerdeContext): WAFLimitsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFLogDestinationPermissionIssueException
 */
const de_WAFLogDestinationPermissionIssueException = (
  output: any,
  context: __SerdeContext
): WAFLogDestinationPermissionIssueException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFNonexistentItemException
 */
const de_WAFNonexistentItemException = (output: any, context: __SerdeContext): WAFNonexistentItemException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFOptimisticLockException
 */
const de_WAFOptimisticLockException = (output: any, context: __SerdeContext): WAFOptimisticLockException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFServiceLinkedRoleErrorException
 */
const de_WAFServiceLinkedRoleErrorException = (
  output: any,
  context: __SerdeContext
): WAFServiceLinkedRoleErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFSubscriptionNotFoundException
 */
const de_WAFSubscriptionNotFoundException = (
  output: any,
  context: __SerdeContext
): WAFSubscriptionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFTagOperationException
 */
const de_WAFTagOperationException = (output: any, context: __SerdeContext): WAFTagOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFTagOperationInternalErrorException
 */
const de_WAFTagOperationInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationInternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFUnavailableEntityException
 */
const de_WAFUnavailableEntityException = (output: any, context: __SerdeContext): WAFUnavailableEntityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WebACL
 */
const de_WebACL = (output: any, context: __SerdeContext): WebACL => {
  return {
    ARN: __expectString(output.ARN),
    AssociationConfig:
      output.AssociationConfig != null ? de_AssociationConfig(output.AssociationConfig, context) : undefined,
    Capacity: __expectLong(output.Capacity),
    CaptchaConfig: output.CaptchaConfig != null ? de_CaptchaConfig(output.CaptchaConfig, context) : undefined,
    ChallengeConfig: output.ChallengeConfig != null ? de_ChallengeConfig(output.ChallengeConfig, context) : undefined,
    CustomResponseBodies:
      output.CustomResponseBodies != null ? de_CustomResponseBodies(output.CustomResponseBodies, context) : undefined,
    DefaultAction: output.DefaultAction != null ? de_DefaultAction(output.DefaultAction, context) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    ManagedByFirewallManager: __expectBoolean(output.ManagedByFirewallManager),
    Name: __expectString(output.Name),
    PostProcessFirewallManagerRuleGroups:
      output.PostProcessFirewallManagerRuleGroups != null
        ? de_FirewallManagerRuleGroups(output.PostProcessFirewallManagerRuleGroups, context)
        : undefined,
    PreProcessFirewallManagerRuleGroups:
      output.PreProcessFirewallManagerRuleGroups != null
        ? de_FirewallManagerRuleGroups(output.PreProcessFirewallManagerRuleGroups, context)
        : undefined,
    Rules: output.Rules != null ? de_Rules(output.Rules, context) : undefined,
    TokenDomains: output.TokenDomains != null ? de_TokenDomains(output.TokenDomains, context) : undefined,
    VisibilityConfig:
      output.VisibilityConfig != null ? de_VisibilityConfig(output.VisibilityConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WebACLSummaries
 */
const de_WebACLSummaries = (output: any, context: __SerdeContext): WebACLSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WebACLSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WebACLSummary
 */
const de_WebACLSummary = (output: any, context: __SerdeContext): WebACLSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1XssMatchStatement
 */
const de_XssMatchStatement = (output: any, context: __SerdeContext): XssMatchStatement => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    TextTransformations:
      output.TextTransformations != null ? de_TextTransformations(output.TextTransformations, context) : undefined,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSWAF_20190729.${operation}`,
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
