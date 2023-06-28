// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "../commands/AssociateWebACLCommand";
import { CheckCapacityCommandInput, CheckCapacityCommandOutput } from "../commands/CheckCapacityCommand";
import { CreateAPIKeyCommandInput, CreateAPIKeyCommandOutput } from "../commands/CreateAPIKeyCommand";
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
  DescribeAllManagedProductsCommandInput,
  DescribeAllManagedProductsCommandOutput,
} from "../commands/DescribeAllManagedProductsCommand";
import {
  DescribeManagedProductsByVendorCommandInput,
  DescribeManagedProductsByVendorCommandOutput,
} from "../commands/DescribeManagedProductsByVendorCommand";
import {
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
} from "../commands/DescribeManagedRuleGroupCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "../commands/DisassociateWebACLCommand";
import {
  GenerateMobileSdkReleaseUrlCommandInput,
  GenerateMobileSdkReleaseUrlCommandOutput,
} from "../commands/GenerateMobileSdkReleaseUrlCommand";
import { GetDecryptedAPIKeyCommandInput, GetDecryptedAPIKeyCommandOutput } from "../commands/GetDecryptedAPIKeyCommand";
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
import { ListAPIKeysCommandInput, ListAPIKeysCommandOutput } from "../commands/ListAPIKeysCommand";
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
  AddressField,
  All,
  AllowAction,
  AllQueryArguments,
  AndStatement,
  APIKeySummary,
  AssociateWebACLRequest,
  AssociationConfig,
  AWSManagedRulesACFPRuleSet,
  AWSManagedRulesATPRuleSet,
  AWSManagedRulesBotControlRuleSet,
  BlockAction,
  Body,
  ByteMatchStatement,
  CaptchaAction,
  CaptchaConfig,
  ChallengeAction,
  ChallengeConfig,
  CheckCapacityRequest,
  Condition,
  CookieMatchPattern,
  Cookies,
  CountAction,
  CountryCode,
  CreateAPIKeyRequest,
  CreateIPSetRequest,
  CreateRegexPatternSetRequest,
  CreateRuleGroupRequest,
  CreateWebACLRequest,
  CustomHTTPHeader,
  CustomRequestHandling,
  CustomResponse,
  CustomResponseBody,
  DefaultAction,
  DeleteFirewallManagerRuleGroupsRequest,
  DeleteIPSetRequest,
  DeleteLoggingConfigurationRequest,
  DeletePermissionPolicyRequest,
  DeleteRegexPatternSetRequest,
  DeleteRuleGroupRequest,
  DeleteWebACLRequest,
  DescribeAllManagedProductsRequest,
  DescribeManagedProductsByVendorRequest,
  DescribeManagedRuleGroupRequest,
  DisassociateWebACLRequest,
  EmailField,
  ExcludedRule,
  FieldToMatch,
  Filter,
  FirewallManagerRuleGroup,
  FirewallManagerStatement,
  ForwardedIPConfig,
  GenerateMobileSdkReleaseUrlRequest,
  GeoMatchStatement,
  GetDecryptedAPIKeyRequest,
  GetDecryptedAPIKeyResponse,
  GetIPSetRequest,
  GetLoggingConfigurationRequest,
  GetManagedRuleSetRequest,
  GetManagedRuleSetResponse,
  GetMobileSdkReleaseRequest,
  GetMobileSdkReleaseResponse,
  GetPermissionPolicyRequest,
  GetRateBasedStatementManagedKeysRequest,
  GetRegexPatternSetRequest,
  GetRuleGroupRequest,
  GetRuleGroupResponse,
  GetSampledRequestsRequest,
  GetSampledRequestsResponse,
  GetWebACLForResourceRequest,
  GetWebACLForResourceResponse,
  GetWebACLRequest,
  GetWebACLResponse,
  HeaderMatchPattern,
  HeaderOrder,
  Headers,
  ImmunityTimeProperty,
  IPSetForwardedIPConfig,
  IPSetReferenceStatement,
  JsonBody,
  JsonMatchPattern,
  Label,
  LabelMatchStatement,
  LabelNameCondition,
  ListAPIKeysRequest,
  ListAPIKeysResponse,
  ListAvailableManagedRuleGroupsRequest,
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsResponse,
  ListIPSetsRequest,
  ListLoggingConfigurationsRequest,
  ListManagedRuleSetsRequest,
  ListMobileSdkReleasesRequest,
  ListMobileSdkReleasesResponse,
  ListRegexPatternSetsRequest,
  ListResourcesForWebACLRequest,
  ListRuleGroupsRequest,
  ListTagsForResourceRequest,
  ListWebACLsRequest,
  LoggingConfiguration,
  LoggingFilter,
  ManagedRuleGroupConfig,
  ManagedRuleGroupStatement,
  ManagedRuleGroupVersion,
  ManagedRuleSet,
  ManagedRuleSetVersion,
  Method,
  MobileSdkRelease,
  NoneAction,
  NotStatement,
  OrStatement,
  OverrideAction,
  PasswordField,
  PhoneNumberField,
  PutLoggingConfigurationRequest,
  PutManagedRuleSetVersionsRequest,
  PutPermissionPolicyRequest,
  QueryString,
  RateBasedStatement,
  RateBasedStatementCustomKey,
  RateLimitCookie,
  RateLimitForwardedIP,
  RateLimitHeader,
  RateLimitHTTPMethod,
  RateLimitIP,
  RateLimitLabelNamespace,
  RateLimitQueryArgument,
  RateLimitQueryString,
  Regex,
  RegexMatchStatement,
  RegexPatternSetReferenceStatement,
  ReleaseSummary,
  RequestBodyAssociatedResourceTypeConfig,
  RequestInspection,
  RequestInspectionACFP,
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
  SampledHTTPRequest,
  SingleHeader,
  SingleQueryArgument,
  SizeConstraintStatement,
  SqliMatchStatement,
  Statement,
  Tag,
  TagResourceRequest,
  TextTransformation,
  TimeWindow,
  UntagResourceRequest,
  UpdateIPSetRequest,
  UpdateManagedRuleSetVersionExpiryDateRequest,
  UpdateManagedRuleSetVersionExpiryDateResponse,
  UpdateRegexPatternSetRequest,
  UpdateRuleGroupRequest,
  UpdateWebACLRequest,
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
  WAFUnsupportedAggregateKeyTypeException,
  WebACL,
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1CreateAPIKeyCommand
 */
export const se_CreateAPIKeyCommand = async (
  input: CreateAPIKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAPIKey");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAllManagedProductsCommand
 */
export const se_DescribeAllManagedProductsCommand = async (
  input: DescribeAllManagedProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAllManagedProducts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeManagedProductsByVendorCommand
 */
export const se_DescribeManagedProductsByVendorCommand = async (
  input: DescribeManagedProductsByVendorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeManagedProductsByVendor");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDecryptedAPIKeyCommand
 */
export const se_GetDecryptedAPIKeyCommand = async (
  input: GetDecryptedAPIKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDecryptedAPIKey");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAPIKeysCommand
 */
export const se_ListAPIKeysCommand = async (
  input: ListAPIKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAPIKeys");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1ListWebACLsCommand
 */
export const se_ListWebACLsCommand = async (
  input: ListWebACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWebACLs");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1UpdateIPSetCommand
 */
export const se_UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIPSet");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AssociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CheckCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAPIKeyCommand
 */
export const de_CreateAPIKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAPIKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAPIKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAPIKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAPIKeyCommandError
 */
const de_CreateAPIKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAPIKeyCommandOutput> => {
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
  contents = _json(data);
  const response: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteFirewallManagerRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeletePermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAllManagedProductsCommand
 */
export const de_DescribeAllManagedProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAllManagedProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAllManagedProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAllManagedProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAllManagedProductsCommandError
 */
const de_DescribeAllManagedProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAllManagedProductsCommandOutput> => {
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
 * deserializeAws_json1_1DescribeManagedProductsByVendorCommand
 */
export const de_DescribeManagedProductsByVendorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedProductsByVendorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeManagedProductsByVendorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeManagedProductsByVendorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeManagedProductsByVendorCommandError
 */
const de_DescribeManagedProductsByVendorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedProductsByVendorCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeManagedRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GenerateMobileSdkReleaseUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDecryptedAPIKeyCommand
 */
export const de_GetDecryptedAPIKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDecryptedAPIKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDecryptedAPIKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDecryptedAPIKeyResponse(data, context);
  const response: GetDecryptedAPIKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDecryptedAPIKeyCommandError
 */
const de_GetDecryptedAPIKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDecryptedAPIKeyCommandOutput> => {
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
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      throw await de_WAFInvalidResourceExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetPermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRateBasedStatementManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "WAFUnsupportedAggregateKeyTypeException":
    case "com.amazonaws.wafv2#WAFUnsupportedAggregateKeyTypeException":
      throw await de_WAFUnsupportedAggregateKeyTypeExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: GetRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAPIKeysCommand
 */
export const de_ListAPIKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAPIKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAPIKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAPIKeysResponse(data, context);
  const response: ListAPIKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAPIKeysCommandError
 */
const de_ListAPIKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAPIKeysCommandOutput> => {
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
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      throw await de_WAFInvalidResourceExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: ListAvailableManagedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListLoggingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListManagedRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListRegexPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListResourcesForWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListWebACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutManagedRuleSetVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutPermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new WAFUnavailableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFUnsupportedAggregateKeyTypeExceptionRes
 */
const de_WAFUnsupportedAggregateKeyTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFUnsupportedAggregateKeyTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WAFUnsupportedAggregateKeyTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionCondition omitted.

// se_AddressField omitted.

// se_AddressFields omitted.

// se_All omitted.

// se_AllowAction omitted.

// se_AllQueryArguments omitted.

/**
 * serializeAws_json1_1AndStatement
 */
const se_AndStatement = (input: AndStatement, context: __SerdeContext): any => {
  return take(input, {
    Statements: (_) => se_Statements(_, context),
  });
};

// se_APIKeyTokenDomains omitted.

// se_AssociateWebACLRequest omitted.

// se_AssociationConfig omitted.

// se_AWSManagedRulesACFPRuleSet omitted.

// se_AWSManagedRulesATPRuleSet omitted.

// se_AWSManagedRulesBotControlRuleSet omitted.

// se_BlockAction omitted.

// se_Body omitted.

/**
 * serializeAws_json1_1ByteMatchStatement
 */
const se_ByteMatchStatement = (input: ByteMatchStatement, context: __SerdeContext): any => {
  return take(input, {
    FieldToMatch: _json,
    PositionalConstraint: [],
    SearchString: context.base64Encoder,
    TextTransformations: _json,
  });
};

// se_CaptchaAction omitted.

// se_CaptchaConfig omitted.

// se_ChallengeAction omitted.

// se_ChallengeConfig omitted.

/**
 * serializeAws_json1_1CheckCapacityRequest
 */
const se_CheckCapacityRequest = (input: CheckCapacityRequest, context: __SerdeContext): any => {
  return take(input, {
    Rules: (_) => se_Rules(_, context),
    Scope: [],
  });
};

// se_Condition omitted.

// se_Conditions omitted.

// se_CookieMatchPattern omitted.

// se_CookieNames omitted.

// se_Cookies omitted.

// se_CountAction omitted.

// se_CountryCodes omitted.

// se_CreateAPIKeyRequest omitted.

// se_CreateIPSetRequest omitted.

// se_CreateRegexPatternSetRequest omitted.

/**
 * serializeAws_json1_1CreateRuleGroupRequest
 */
const se_CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    Capacity: [],
    CustomResponseBodies: _json,
    Description: [],
    Name: [],
    Rules: (_) => se_Rules(_, context),
    Scope: [],
    Tags: _json,
    VisibilityConfig: _json,
  });
};

/**
 * serializeAws_json1_1CreateWebACLRequest
 */
const se_CreateWebACLRequest = (input: CreateWebACLRequest, context: __SerdeContext): any => {
  return take(input, {
    AssociationConfig: _json,
    CaptchaConfig: _json,
    ChallengeConfig: _json,
    CustomResponseBodies: _json,
    DefaultAction: _json,
    Description: [],
    Name: [],
    Rules: (_) => se_Rules(_, context),
    Scope: [],
    Tags: _json,
    TokenDomains: _json,
    VisibilityConfig: _json,
  });
};

// se_CustomHTTPHeader omitted.

// se_CustomHTTPHeaders omitted.

// se_CustomRequestHandling omitted.

// se_CustomResponse omitted.

// se_CustomResponseBodies omitted.

// se_CustomResponseBody omitted.

// se_DefaultAction omitted.

// se_DeleteFirewallManagerRuleGroupsRequest omitted.

// se_DeleteIPSetRequest omitted.

// se_DeleteLoggingConfigurationRequest omitted.

// se_DeletePermissionPolicyRequest omitted.

// se_DeleteRegexPatternSetRequest omitted.

// se_DeleteRuleGroupRequest omitted.

// se_DeleteWebACLRequest omitted.

// se_DescribeAllManagedProductsRequest omitted.

// se_DescribeManagedProductsByVendorRequest omitted.

// se_DescribeManagedRuleGroupRequest omitted.

// se_DisassociateWebACLRequest omitted.

// se_EmailField omitted.

// se_ExcludedRule omitted.

// se_ExcludedRules omitted.

// se_FieldToMatch omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_ForwardedIPConfig omitted.

// se_GenerateMobileSdkReleaseUrlRequest omitted.

// se_GeoMatchStatement omitted.

// se_GetDecryptedAPIKeyRequest omitted.

// se_GetIPSetRequest omitted.

// se_GetLoggingConfigurationRequest omitted.

// se_GetManagedRuleSetRequest omitted.

// se_GetMobileSdkReleaseRequest omitted.

// se_GetPermissionPolicyRequest omitted.

// se_GetRateBasedStatementManagedKeysRequest omitted.

// se_GetRegexPatternSetRequest omitted.

// se_GetRuleGroupRequest omitted.

/**
 * serializeAws_json1_1GetSampledRequestsRequest
 */
const se_GetSampledRequestsRequest = (input: GetSampledRequestsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxItems: [],
    RuleMetricName: [],
    Scope: [],
    TimeWindow: (_) => se_TimeWindow(_, context),
    WebAclArn: [],
  });
};

// se_GetWebACLForResourceRequest omitted.

// se_GetWebACLRequest omitted.

// se_HeaderMatchPattern omitted.

// se_HeaderNames omitted.

// se_HeaderOrder omitted.

// se_Headers omitted.

// se_ImmunityTimeProperty omitted.

// se_IPAddresses omitted.

// se_IPSetForwardedIPConfig omitted.

// se_IPSetReferenceStatement omitted.

// se_JsonBody omitted.

// se_JsonMatchPattern omitted.

// se_JsonPointerPaths omitted.

// se_Label omitted.

// se_LabelMatchStatement omitted.

// se_LabelNameCondition omitted.

// se_Labels omitted.

// se_ListAPIKeysRequest omitted.

// se_ListAvailableManagedRuleGroupsRequest omitted.

// se_ListAvailableManagedRuleGroupVersionsRequest omitted.

// se_ListIPSetsRequest omitted.

// se_ListLoggingConfigurationsRequest omitted.

// se_ListManagedRuleSetsRequest omitted.

// se_ListMobileSdkReleasesRequest omitted.

// se_ListRegexPatternSetsRequest omitted.

// se_ListResourcesForWebACLRequest omitted.

// se_ListRuleGroupsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListWebACLsRequest omitted.

// se_LogDestinationConfigs omitted.

// se_LoggingConfiguration omitted.

// se_LoggingFilter omitted.

// se_ManagedRuleGroupConfig omitted.

// se_ManagedRuleGroupConfigs omitted.

/**
 * serializeAws_json1_1ManagedRuleGroupStatement
 */
const se_ManagedRuleGroupStatement = (input: ManagedRuleGroupStatement, context: __SerdeContext): any => {
  return take(input, {
    ExcludedRules: _json,
    ManagedRuleGroupConfigs: _json,
    Name: [],
    RuleActionOverrides: _json,
    ScopeDownStatement: (_) => se_Statement(_, context),
    VendorName: [],
    Version: [],
  });
};

// se_Method omitted.

// se_NoneAction omitted.

/**
 * serializeAws_json1_1NotStatement
 */
const se_NotStatement = (input: NotStatement, context: __SerdeContext): any => {
  return take(input, {
    Statement: (_) => se_Statement(_, context),
  });
};

/**
 * serializeAws_json1_1OrStatement
 */
const se_OrStatement = (input: OrStatement, context: __SerdeContext): any => {
  return take(input, {
    Statements: (_) => se_Statements(_, context),
  });
};

// se_OverrideAction omitted.

// se_PasswordField omitted.

// se_PhoneNumberField omitted.

// se_PhoneNumberFields omitted.

// se_PutLoggingConfigurationRequest omitted.

// se_PutManagedRuleSetVersionsRequest omitted.

// se_PutPermissionPolicyRequest omitted.

// se_QueryString omitted.

/**
 * serializeAws_json1_1RateBasedStatement
 */
const se_RateBasedStatement = (input: RateBasedStatement, context: __SerdeContext): any => {
  return take(input, {
    AggregateKeyType: [],
    CustomKeys: _json,
    ForwardedIPConfig: _json,
    Limit: [],
    ScopeDownStatement: (_) => se_Statement(_, context),
  });
};

// se_RateBasedStatementCustomKey omitted.

// se_RateBasedStatementCustomKeys omitted.

// se_RateLimitCookie omitted.

// se_RateLimitForwardedIP omitted.

// se_RateLimitHeader omitted.

// se_RateLimitHTTPMethod omitted.

// se_RateLimitIP omitted.

// se_RateLimitLabelNamespace omitted.

// se_RateLimitQueryArgument omitted.

// se_RateLimitQueryString omitted.

// se_RedactedFields omitted.

// se_Regex omitted.

// se_RegexMatchStatement omitted.

// se_RegexPatternSetReferenceStatement omitted.

// se_RegularExpressionList omitted.

// se_RequestBody omitted.

// se_RequestBodyAssociatedResourceTypeConfig omitted.

// se_RequestInspection omitted.

// se_RequestInspectionACFP omitted.

// se_ResponseInspection omitted.

// se_ResponseInspectionBodyContains omitted.

// se_ResponseInspectionBodyContainsFailureStrings omitted.

// se_ResponseInspectionBodyContainsSuccessStrings omitted.

// se_ResponseInspectionHeader omitted.

// se_ResponseInspectionHeaderFailureValues omitted.

// se_ResponseInspectionHeaderSuccessValues omitted.

// se_ResponseInspectionJson omitted.

// se_ResponseInspectionJsonFailureValues omitted.

// se_ResponseInspectionJsonSuccessValues omitted.

// se_ResponseInspectionStatusCode omitted.

// se_ResponseInspectionStatusCodeFailureCodes omitted.

// se_ResponseInspectionStatusCodeSuccessCodes omitted.

/**
 * serializeAws_json1_1Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return take(input, {
    Action: _json,
    CaptchaConfig: _json,
    ChallengeConfig: _json,
    Name: [],
    OverrideAction: _json,
    Priority: [],
    RuleLabels: _json,
    Statement: (_) => se_Statement(_, context),
    VisibilityConfig: _json,
  });
};

// se_RuleAction omitted.

// se_RuleActionOverride omitted.

// se_RuleActionOverrides omitted.

// se_RuleGroupReferenceStatement omitted.

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

// se_SingleHeader omitted.

// se_SingleQueryArgument omitted.

// se_SizeConstraintStatement omitted.

// se_SqliMatchStatement omitted.

/**
 * serializeAws_json1_1Statement
 */
const se_Statement = (input: Statement, context: __SerdeContext): any => {
  return take(input, {
    AndStatement: (_) => se_AndStatement(_, context),
    ByteMatchStatement: (_) => se_ByteMatchStatement(_, context),
    GeoMatchStatement: _json,
    IPSetReferenceStatement: _json,
    LabelMatchStatement: _json,
    ManagedRuleGroupStatement: (_) => se_ManagedRuleGroupStatement(_, context),
    NotStatement: (_) => se_NotStatement(_, context),
    OrStatement: (_) => se_OrStatement(_, context),
    RateBasedStatement: (_) => se_RateBasedStatement(_, context),
    RegexMatchStatement: _json,
    RegexPatternSetReferenceStatement: _json,
    RuleGroupReferenceStatement: _json,
    SizeConstraintStatement: _json,
    SqliMatchStatement: _json,
    XssMatchStatement: _json,
  });
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

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TextTransformation omitted.

// se_TextTransformations omitted.

/**
 * serializeAws_json1_1TimeWindow
 */
const se_TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_TokenDomains omitted.

// se_UntagResourceRequest omitted.

// se_UpdateIPSetRequest omitted.

/**
 * serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateRequest
 */
const se_UpdateManagedRuleSetVersionExpiryDateRequest = (
  input: UpdateManagedRuleSetVersionExpiryDateRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ExpiryTimestamp: (_) => Math.round(_.getTime() / 1000),
    Id: [],
    LockToken: [],
    Name: [],
    Scope: [],
    VersionToExpire: [],
  });
};

// se_UpdateRegexPatternSetRequest omitted.

/**
 * serializeAws_json1_1UpdateRuleGroupRequest
 */
const se_UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    CustomResponseBodies: _json,
    Description: [],
    Id: [],
    LockToken: [],
    Name: [],
    Rules: (_) => se_Rules(_, context),
    Scope: [],
    VisibilityConfig: _json,
  });
};

/**
 * serializeAws_json1_1UpdateWebACLRequest
 */
const se_UpdateWebACLRequest = (input: UpdateWebACLRequest, context: __SerdeContext): any => {
  return take(input, {
    AssociationConfig: _json,
    CaptchaConfig: _json,
    ChallengeConfig: _json,
    CustomResponseBodies: _json,
    DefaultAction: _json,
    Description: [],
    Id: [],
    LockToken: [],
    Name: [],
    Rules: (_) => se_Rules(_, context),
    Scope: [],
    TokenDomains: _json,
    VisibilityConfig: _json,
  });
};

// se_UriPath omitted.

// se_UsernameField omitted.

// se_VersionsToPublish omitted.

// se_VersionToPublish omitted.

// se_VisibilityConfig omitted.

// se_XssMatchStatement omitted.

// de_ActionCondition omitted.

// de_AddressField omitted.

// de_AddressFields omitted.

// de_All omitted.

// de_AllowAction omitted.

// de_AllQueryArguments omitted.

/**
 * deserializeAws_json1_1AndStatement
 */
const de_AndStatement = (output: any, context: __SerdeContext): AndStatement => {
  return take(output, {
    Statements: (_: any) => de_Statements(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1APIKeySummaries
 */
const de_APIKeySummaries = (output: any, context: __SerdeContext): APIKeySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_APIKeySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1APIKeySummary
 */
const de_APIKeySummary = (output: any, context: __SerdeContext): APIKeySummary => {
  return take(output, {
    APIKey: __expectString,
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TokenDomains: _json,
    Version: __expectInt32,
  }) as any;
};

// de_AssociateWebACLResponse omitted.

// de_AssociationConfig omitted.

// de_AWSManagedRulesACFPRuleSet omitted.

// de_AWSManagedRulesATPRuleSet omitted.

// de_AWSManagedRulesBotControlRuleSet omitted.

// de_BlockAction omitted.

// de_Body omitted.

/**
 * deserializeAws_json1_1ByteMatchStatement
 */
const de_ByteMatchStatement = (output: any, context: __SerdeContext): ByteMatchStatement => {
  return take(output, {
    FieldToMatch: _json,
    PositionalConstraint: __expectString,
    SearchString: context.base64Decoder,
    TextTransformations: _json,
  }) as any;
};

// de_CaptchaAction omitted.

// de_CaptchaConfig omitted.

// de_CaptchaResponse omitted.

// de_ChallengeAction omitted.

// de_ChallengeConfig omitted.

// de_ChallengeResponse omitted.

// de_CheckCapacityResponse omitted.

// de_Condition omitted.

// de_Conditions omitted.

// de_CookieMatchPattern omitted.

// de_CookieNames omitted.

// de_Cookies omitted.

// de_CountAction omitted.

// de_CountryCodes omitted.

// de_CreateAPIKeyResponse omitted.

// de_CreateIPSetResponse omitted.

// de_CreateRegexPatternSetResponse omitted.

// de_CreateRuleGroupResponse omitted.

// de_CreateWebACLResponse omitted.

// de_CustomHTTPHeader omitted.

// de_CustomHTTPHeaders omitted.

// de_CustomRequestHandling omitted.

// de_CustomResponse omitted.

// de_CustomResponseBodies omitted.

// de_CustomResponseBody omitted.

// de_DefaultAction omitted.

// de_DeleteFirewallManagerRuleGroupsResponse omitted.

// de_DeleteIPSetResponse omitted.

// de_DeleteLoggingConfigurationResponse omitted.

// de_DeletePermissionPolicyResponse omitted.

// de_DeleteRegexPatternSetResponse omitted.

// de_DeleteRuleGroupResponse omitted.

// de_DeleteWebACLResponse omitted.

// de_DescribeAllManagedProductsResponse omitted.

// de_DescribeManagedProductsByVendorResponse omitted.

// de_DescribeManagedRuleGroupResponse omitted.

// de_DisassociateWebACLResponse omitted.

// de_EmailField omitted.

// de_ExcludedRule omitted.

// de_ExcludedRules omitted.

// de_FieldToMatch omitted.

// de_Filter omitted.

// de_Filters omitted.

/**
 * deserializeAws_json1_1FirewallManagerRuleGroup
 */
const de_FirewallManagerRuleGroup = (output: any, context: __SerdeContext): FirewallManagerRuleGroup => {
  return take(output, {
    FirewallManagerStatement: (_: any) => de_FirewallManagerStatement(_, context),
    Name: __expectString,
    OverrideAction: _json,
    Priority: __expectInt32,
    VisibilityConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1FirewallManagerRuleGroups
 */
const de_FirewallManagerRuleGroups = (output: any, context: __SerdeContext): FirewallManagerRuleGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FirewallManagerRuleGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallManagerStatement
 */
const de_FirewallManagerStatement = (output: any, context: __SerdeContext): FirewallManagerStatement => {
  return take(output, {
    ManagedRuleGroupStatement: (_: any) => de_ManagedRuleGroupStatement(_, context),
    RuleGroupReferenceStatement: _json,
  }) as any;
};

// de_ForwardedIPConfig omitted.

// de_GenerateMobileSdkReleaseUrlResponse omitted.

// de_GeoMatchStatement omitted.

/**
 * deserializeAws_json1_1GetDecryptedAPIKeyResponse
 */
const de_GetDecryptedAPIKeyResponse = (output: any, context: __SerdeContext): GetDecryptedAPIKeyResponse => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TokenDomains: _json,
  }) as any;
};

// de_GetIPSetResponse omitted.

// de_GetLoggingConfigurationResponse omitted.

/**
 * deserializeAws_json1_1GetManagedRuleSetResponse
 */
const de_GetManagedRuleSetResponse = (output: any, context: __SerdeContext): GetManagedRuleSetResponse => {
  return take(output, {
    LockToken: __expectString,
    ManagedRuleSet: (_: any) => de_ManagedRuleSet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetMobileSdkReleaseResponse
 */
const de_GetMobileSdkReleaseResponse = (output: any, context: __SerdeContext): GetMobileSdkReleaseResponse => {
  return take(output, {
    MobileSdkRelease: (_: any) => de_MobileSdkRelease(_, context),
  }) as any;
};

// de_GetPermissionPolicyResponse omitted.

// de_GetRateBasedStatementManagedKeysResponse omitted.

// de_GetRegexPatternSetResponse omitted.

/**
 * deserializeAws_json1_1GetRuleGroupResponse
 */
const de_GetRuleGroupResponse = (output: any, context: __SerdeContext): GetRuleGroupResponse => {
  return take(output, {
    LockToken: __expectString,
    RuleGroup: (_: any) => de_RuleGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSampledRequestsResponse
 */
const de_GetSampledRequestsResponse = (output: any, context: __SerdeContext): GetSampledRequestsResponse => {
  return take(output, {
    PopulationSize: __expectLong,
    SampledRequests: (_: any) => de_SampledHTTPRequests(_, context),
    TimeWindow: (_: any) => de_TimeWindow(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetWebACLForResourceResponse
 */
const de_GetWebACLForResourceResponse = (output: any, context: __SerdeContext): GetWebACLForResourceResponse => {
  return take(output, {
    WebACL: (_: any) => de_WebACL(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetWebACLResponse
 */
const de_GetWebACLResponse = (output: any, context: __SerdeContext): GetWebACLResponse => {
  return take(output, {
    ApplicationIntegrationURL: __expectString,
    LockToken: __expectString,
    WebACL: (_: any) => de_WebACL(_, context),
  }) as any;
};

// de_HeaderMatchPattern omitted.

// de_HeaderNames omitted.

// de_HeaderOrder omitted.

// de_Headers omitted.

// de_HTTPHeader omitted.

// de_HTTPHeaders omitted.

// de_HTTPRequest omitted.

// de_ImmunityTimeProperty omitted.

// de_IPAddresses omitted.

// de_IPSet omitted.

// de_IPSetForwardedIPConfig omitted.

// de_IPSetReferenceStatement omitted.

// de_IPSetSummaries omitted.

// de_IPSetSummary omitted.

// de_JsonBody omitted.

// de_JsonMatchPattern omitted.

// de_JsonPointerPaths omitted.

// de_Label omitted.

// de_LabelMatchStatement omitted.

// de_LabelNameCondition omitted.

// de_Labels omitted.

// de_LabelSummaries omitted.

// de_LabelSummary omitted.

/**
 * deserializeAws_json1_1ListAPIKeysResponse
 */
const de_ListAPIKeysResponse = (output: any, context: __SerdeContext): ListAPIKeysResponse => {
  return take(output, {
    APIKeySummaries: (_: any) => de_APIKeySummaries(_, context),
    ApplicationIntegrationURL: __expectString,
    NextMarker: __expectString,
  }) as any;
};

// de_ListAvailableManagedRuleGroupsResponse omitted.

/**
 * deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsResponse
 */
const de_ListAvailableManagedRuleGroupVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupVersionsResponse => {
  return take(output, {
    CurrentDefaultVersion: __expectString,
    NextMarker: __expectString,
    Versions: (_: any) => de_ManagedRuleGroupVersions(_, context),
  }) as any;
};

// de_ListIPSetsResponse omitted.

// de_ListLoggingConfigurationsResponse omitted.

// de_ListManagedRuleSetsResponse omitted.

/**
 * deserializeAws_json1_1ListMobileSdkReleasesResponse
 */
const de_ListMobileSdkReleasesResponse = (output: any, context: __SerdeContext): ListMobileSdkReleasesResponse => {
  return take(output, {
    NextMarker: __expectString,
    ReleaseSummaries: (_: any) => de_ReleaseSummaries(_, context),
  }) as any;
};

// de_ListRegexPatternSetsResponse omitted.

// de_ListResourcesForWebACLResponse omitted.

// de_ListRuleGroupsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListWebACLsResponse omitted.

// de_LogDestinationConfigs omitted.

// de_LoggingConfiguration omitted.

// de_LoggingConfigurations omitted.

// de_LoggingFilter omitted.

// de_ManagedProductDescriptor omitted.

// de_ManagedProductDescriptors omitted.

// de_ManagedRuleGroupConfig omitted.

// de_ManagedRuleGroupConfigs omitted.

/**
 * deserializeAws_json1_1ManagedRuleGroupStatement
 */
const de_ManagedRuleGroupStatement = (output: any, context: __SerdeContext): ManagedRuleGroupStatement => {
  return take(output, {
    ExcludedRules: _json,
    ManagedRuleGroupConfigs: _json,
    Name: __expectString,
    RuleActionOverrides: _json,
    ScopeDownStatement: (_: any) => de_Statement(_, context),
    VendorName: __expectString,
    Version: __expectString,
  }) as any;
};

// de_ManagedRuleGroupSummaries omitted.

// de_ManagedRuleGroupSummary omitted.

/**
 * deserializeAws_json1_1ManagedRuleGroupVersion
 */
const de_ManagedRuleGroupVersion = (output: any, context: __SerdeContext): ManagedRuleGroupVersion => {
  return take(output, {
    LastUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ManagedRuleGroupVersions
 */
const de_ManagedRuleGroupVersions = (output: any, context: __SerdeContext): ManagedRuleGroupVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedRuleGroupVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ManagedRuleSet
 */
const de_ManagedRuleSet = (output: any, context: __SerdeContext): ManagedRuleSet => {
  return take(output, {
    ARN: __expectString,
    Description: __expectString,
    Id: __expectString,
    LabelNamespace: __expectString,
    Name: __expectString,
    PublishedVersions: (_: any) => de_PublishedVersions(_, context),
    RecommendedVersion: __expectString,
  }) as any;
};

// de_ManagedRuleSetSummaries omitted.

// de_ManagedRuleSetSummary omitted.

/**
 * deserializeAws_json1_1ManagedRuleSetVersion
 */
const de_ManagedRuleSetVersion = (output: any, context: __SerdeContext): ManagedRuleSetVersion => {
  return take(output, {
    AssociatedRuleGroupArn: __expectString,
    Capacity: __expectLong,
    ExpiryTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ForecastedLifetime: __expectInt32,
    LastUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PublishTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Method omitted.

/**
 * deserializeAws_json1_1MobileSdkRelease
 */
const de_MobileSdkRelease = (output: any, context: __SerdeContext): MobileSdkRelease => {
  return take(output, {
    ReleaseNotes: __expectString,
    ReleaseVersion: __expectString,
    Tags: _json,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_NoneAction omitted.

/**
 * deserializeAws_json1_1NotStatement
 */
const de_NotStatement = (output: any, context: __SerdeContext): NotStatement => {
  return take(output, {
    Statement: (_: any) => de_Statement(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1OrStatement
 */
const de_OrStatement = (output: any, context: __SerdeContext): OrStatement => {
  return take(output, {
    Statements: (_: any) => de_Statements(_, context),
  }) as any;
};

// de_OverrideAction omitted.

// de_PasswordField omitted.

// de_PhoneNumberField omitted.

// de_PhoneNumberFields omitted.

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

// de_PutLoggingConfigurationResponse omitted.

// de_PutManagedRuleSetVersionsResponse omitted.

// de_PutPermissionPolicyResponse omitted.

// de_QueryString omitted.

/**
 * deserializeAws_json1_1RateBasedStatement
 */
const de_RateBasedStatement = (output: any, context: __SerdeContext): RateBasedStatement => {
  return take(output, {
    AggregateKeyType: __expectString,
    CustomKeys: _json,
    ForwardedIPConfig: _json,
    Limit: __expectLong,
    ScopeDownStatement: (_: any) => de_Statement(_, context),
  }) as any;
};

// de_RateBasedStatementCustomKey omitted.

// de_RateBasedStatementCustomKeys omitted.

// de_RateBasedStatementManagedKeysIPSet omitted.

// de_RateLimitCookie omitted.

// de_RateLimitForwardedIP omitted.

// de_RateLimitHeader omitted.

// de_RateLimitHTTPMethod omitted.

// de_RateLimitIP omitted.

// de_RateLimitLabelNamespace omitted.

// de_RateLimitQueryArgument omitted.

// de_RateLimitQueryString omitted.

// de_RedactedFields omitted.

// de_Regex omitted.

// de_RegexMatchStatement omitted.

// de_RegexPatternSet omitted.

// de_RegexPatternSetReferenceStatement omitted.

// de_RegexPatternSetSummaries omitted.

// de_RegexPatternSetSummary omitted.

// de_RegularExpressionList omitted.

/**
 * deserializeAws_json1_1ReleaseSummaries
 */
const de_ReleaseSummaries = (output: any, context: __SerdeContext): ReleaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReleaseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReleaseSummary
 */
const de_ReleaseSummary = (output: any, context: __SerdeContext): ReleaseSummary => {
  return take(output, {
    ReleaseVersion: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_RequestBody omitted.

// de_RequestBodyAssociatedResourceTypeConfig omitted.

// de_RequestInspection omitted.

// de_RequestInspectionACFP omitted.

// de_ResourceArns omitted.

// de_ResponseInspection omitted.

// de_ResponseInspectionBodyContains omitted.

// de_ResponseInspectionBodyContainsFailureStrings omitted.

// de_ResponseInspectionBodyContainsSuccessStrings omitted.

// de_ResponseInspectionHeader omitted.

// de_ResponseInspectionHeaderFailureValues omitted.

// de_ResponseInspectionHeaderSuccessValues omitted.

// de_ResponseInspectionJson omitted.

// de_ResponseInspectionJsonFailureValues omitted.

// de_ResponseInspectionJsonSuccessValues omitted.

// de_ResponseInspectionStatusCode omitted.

// de_ResponseInspectionStatusCodeFailureCodes omitted.

// de_ResponseInspectionStatusCodeSuccessCodes omitted.

/**
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return take(output, {
    Action: _json,
    CaptchaConfig: _json,
    ChallengeConfig: _json,
    Name: __expectString,
    OverrideAction: _json,
    Priority: __expectInt32,
    RuleLabels: _json,
    Statement: (_: any) => de_Statement(_, context),
    VisibilityConfig: _json,
  }) as any;
};

// de_RuleAction omitted.

// de_RuleActionOverride omitted.

// de_RuleActionOverrides omitted.

/**
 * deserializeAws_json1_1RuleGroup
 */
const de_RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return take(output, {
    ARN: __expectString,
    AvailableLabels: _json,
    Capacity: __expectLong,
    ConsumedLabels: _json,
    CustomResponseBodies: _json,
    Description: __expectString,
    Id: __expectString,
    LabelNamespace: __expectString,
    Name: __expectString,
    Rules: (_: any) => de_Rules(_, context),
    VisibilityConfig: _json,
  }) as any;
};

// de_RuleGroupReferenceStatement omitted.

// de_RuleGroupSummaries omitted.

// de_RuleGroupSummary omitted.

/**
 * deserializeAws_json1_1Rules
 */
const de_Rules = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Rule(entry, context);
    });
  return retVal;
};

// de_RuleSummaries omitted.

// de_RuleSummary omitted.

/**
 * deserializeAws_json1_1SampledHTTPRequest
 */
const de_SampledHTTPRequest = (output: any, context: __SerdeContext): SampledHTTPRequest => {
  return take(output, {
    Action: __expectString,
    CaptchaResponse: _json,
    ChallengeResponse: _json,
    Labels: _json,
    OverriddenAction: __expectString,
    Request: _json,
    RequestHeadersInserted: _json,
    ResponseCodeSent: __expectInt32,
    RuleNameWithinRuleGroup: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Weight: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1SampledHTTPRequests
 */
const de_SampledHTTPRequests = (output: any, context: __SerdeContext): SampledHTTPRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SampledHTTPRequest(entry, context);
    });
  return retVal;
};

// de_SingleHeader omitted.

// de_SingleQueryArgument omitted.

// de_SizeConstraintStatement omitted.

// de_SqliMatchStatement omitted.

/**
 * deserializeAws_json1_1Statement
 */
const de_Statement = (output: any, context: __SerdeContext): Statement => {
  return take(output, {
    AndStatement: (_: any) => de_AndStatement(_, context),
    ByteMatchStatement: (_: any) => de_ByteMatchStatement(_, context),
    GeoMatchStatement: _json,
    IPSetReferenceStatement: _json,
    LabelMatchStatement: _json,
    ManagedRuleGroupStatement: (_: any) => de_ManagedRuleGroupStatement(_, context),
    NotStatement: (_: any) => de_NotStatement(_, context),
    OrStatement: (_: any) => de_OrStatement(_, context),
    RateBasedStatement: (_: any) => de_RateBasedStatement(_, context),
    RegexMatchStatement: _json,
    RegexPatternSetReferenceStatement: _json,
    RuleGroupReferenceStatement: _json,
    SizeConstraintStatement: _json,
    SqliMatchStatement: _json,
    XssMatchStatement: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Statements
 */
const de_Statements = (output: any, context: __SerdeContext): Statement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Statement(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagInfoForResource omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TextTransformation omitted.

// de_TextTransformations omitted.

/**
 * deserializeAws_json1_1TimeWindow
 */
const de_TimeWindow = (output: any, context: __SerdeContext): TimeWindow => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TokenDomains omitted.

// de_UntagResourceResponse omitted.

// de_UpdateIPSetResponse omitted.

/**
 * deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateResponse
 */
const de_UpdateManagedRuleSetVersionExpiryDateResponse = (
  output: any,
  context: __SerdeContext
): UpdateManagedRuleSetVersionExpiryDateResponse => {
  return take(output, {
    ExpiringVersion: __expectString,
    ExpiryTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextLockToken: __expectString,
  }) as any;
};

// de_UpdateRegexPatternSetResponse omitted.

// de_UpdateRuleGroupResponse omitted.

// de_UpdateWebACLResponse omitted.

// de_UriPath omitted.

// de_UsernameField omitted.

// de_VisibilityConfig omitted.

// de_WAFAssociatedItemException omitted.

// de_WAFConfigurationWarningException omitted.

// de_WAFDuplicateItemException omitted.

// de_WAFExpiredManagedRuleGroupVersionException omitted.

// de_WAFInternalErrorException omitted.

// de_WAFInvalidOperationException omitted.

// de_WAFInvalidParameterException omitted.

// de_WAFInvalidPermissionPolicyException omitted.

// de_WAFInvalidResourceException omitted.

// de_WAFLimitsExceededException omitted.

// de_WAFLogDestinationPermissionIssueException omitted.

// de_WAFNonexistentItemException omitted.

// de_WAFOptimisticLockException omitted.

// de_WAFServiceLinkedRoleErrorException omitted.

// de_WAFSubscriptionNotFoundException omitted.

// de_WAFTagOperationException omitted.

// de_WAFTagOperationInternalErrorException omitted.

// de_WAFUnavailableEntityException omitted.

// de_WAFUnsupportedAggregateKeyTypeException omitted.

/**
 * deserializeAws_json1_1WebACL
 */
const de_WebACL = (output: any, context: __SerdeContext): WebACL => {
  return take(output, {
    ARN: __expectString,
    AssociationConfig: _json,
    Capacity: __expectLong,
    CaptchaConfig: _json,
    ChallengeConfig: _json,
    CustomResponseBodies: _json,
    DefaultAction: _json,
    Description: __expectString,
    Id: __expectString,
    LabelNamespace: __expectString,
    ManagedByFirewallManager: __expectBoolean,
    Name: __expectString,
    PostProcessFirewallManagerRuleGroups: (_: any) => de_FirewallManagerRuleGroups(_, context),
    PreProcessFirewallManagerRuleGroups: (_: any) => de_FirewallManagerRuleGroups(_, context),
    Rules: (_: any) => de_Rules(_, context),
    TokenDomains: _json,
    VisibilityConfig: _json,
  }) as any;
};

// de_WebACLSummaries omitted.

// de_WebACLSummary omitted.

// de_XssMatchStatement omitted.

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
