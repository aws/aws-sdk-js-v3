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
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "../commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "../commands/GetLoggingConfigurationCommand";
import { GetManagedRuleSetCommandInput, GetManagedRuleSetCommandOutput } from "../commands/GetManagedRuleSetCommand";
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
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
} from "../commands/ListAvailableManagedRuleGroupVersionsCommand";
import {
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
} from "../commands/ListAvailableManagedRuleGroupsCommand";
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
  AllQueryArguments,
  AllowAction,
  AndStatement,
  AssociateWebACLRequest,
  AssociateWebACLResponse,
  BlockAction,
  Body,
  ByteMatchStatement,
  CheckCapacityRequest,
  CheckCapacityResponse,
  Condition,
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
  GeoMatchStatement,
  GetIPSetRequest,
  GetIPSetResponse,
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
  GetManagedRuleSetRequest,
  GetManagedRuleSetResponse,
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
  HTTPHeader,
  HTTPRequest,
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
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsResponse,
  ListAvailableManagedRuleGroupsRequest,
  ListAvailableManagedRuleGroupsResponse,
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
  ListManagedRuleSetsRequest,
  ListManagedRuleSetsResponse,
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
  ManagedRuleGroupStatement,
  ManagedRuleGroupSummary,
  ManagedRuleGroupVersion,
  ManagedRuleSet,
  ManagedRuleSetSummary,
  ManagedRuleSetVersion,
  Method,
  NoneAction,
  NotStatement,
  OrStatement,
  OverrideAction,
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
  RegexPatternSet,
  RegexPatternSetReferenceStatement,
  RegexPatternSetSummary,
  Rule,
  RuleAction,
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
  VersionToPublish,
  VisibilityConfig,
  WAFAssociatedItemException,
  WAFDuplicateItemException,
  WAFExpiredManagedRuleGroupVersionException,
  WAFInternalErrorException,
  WAFInvalidOperationException,
  WAFInvalidParameterException,
  WAFInvalidPermissionPolicyException,
  WAFInvalidResourceException,
  WAFLimitsExceededException,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNumber as __expectNumber,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateWebACLCommand = async (
  input: AssociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.AssociateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckCapacityCommand = async (
  input: CheckCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.CheckCapacity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckCapacityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.CreateIPSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRegexPatternSetCommand = async (
  input: CreateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.CreateRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.CreateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWebACLCommand = async (
  input: CreateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.CreateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = async (
  input: DeleteFirewallManagerRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeleteFirewallManagerRuleGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeleteIPSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLoggingConfigurationCommand = async (
  input: DeleteLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeleteLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePermissionPolicyCommand = async (
  input: DeletePermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeletePermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegexPatternSetCommand = async (
  input: DeleteRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeleteRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeleteRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebACLCommand = async (
  input: DeleteWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DeleteWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeManagedRuleGroupCommand = async (
  input: DescribeManagedRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DescribeManagedRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeManagedRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateWebACLCommand = async (
  input: DisassociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.DisassociateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetIPSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoggingConfigurationCommand = async (
  input: GetLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetManagedRuleSetCommand = async (
  input: GetManagedRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetManagedRuleSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetManagedRuleSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPermissionPolicyCommand = async (
  input: GetPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetPermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = async (
  input: GetRateBasedStatementManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetRateBasedStatementManagedKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRateBasedStatementManagedKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegexPatternSetCommand = async (
  input: GetRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRuleGroupCommand = async (
  input: GetRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSampledRequestsCommand = async (
  input: GetSampledRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetSampledRequests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWebACLCommand = async (
  input: GetWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWebACLForResourceCommand = async (
  input: GetWebACLForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.GetWebACLForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = async (
  input: ListAvailableManagedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListAvailableManagedRuleGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailableManagedRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand = async (
  input: ListAvailableManagedRuleGroupVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListAvailableManagedRuleGroupVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailableManagedRuleGroupVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListIPSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLoggingConfigurationsCommand = async (
  input: ListLoggingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListLoggingConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListManagedRuleSetsCommand = async (
  input: ListManagedRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListManagedRuleSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListManagedRuleSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRegexPatternSetsCommand = async (
  input: ListRegexPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListRegexPatternSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRegexPatternSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesForWebACLCommand = async (
  input: ListResourcesForWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListResourcesForWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourcesForWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRuleGroupsCommand = async (
  input: ListRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListRuleGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWebACLsCommand = async (
  input: ListWebACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.ListWebACLs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLoggingConfigurationCommand = async (
  input: PutLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.PutLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutManagedRuleSetVersionsCommand = async (
  input: PutManagedRuleSetVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.PutManagedRuleSetVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutManagedRuleSetVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPermissionPolicyCommand = async (
  input: PutPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.PutPermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.UpdateIPSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand = async (
  input: UpdateManagedRuleSetVersionExpiryDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRegexPatternSetCommand = async (
  input: UpdateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.UpdateRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.UpdateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWebACLCommand = async (
  input: UpdateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_20190729.UpdateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateWebACLResponse(data, context);
  const response: AssociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CheckCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckCapacityResponse(data, context);
  const response: CheckCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      response = {
        ...(await deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIPSetResponse(data, context);
  const response: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRegexPatternSetResponse(data, context);
  const response: CreateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRuleGroupResponse(data, context);
  const response: CreateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWebACLResponse(data, context);
  const response: CreateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallManagerRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse(data, context);
  const response: DeleteFirewallManagerRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallManagerRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIPSetResponse(data, context);
  const response: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoggingConfigurationResponse(data, context);
  const response: DeleteLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeletePermissionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePermissionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePermissionPolicyResponse(data, context);
  const response: DeletePermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePermissionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRegexPatternSetResponse(data, context);
  const response: DeleteRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRuleGroupResponse(data, context);
  const response: DeleteRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWebACLResponse(data, context);
  const response: DeleteWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeManagedRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeManagedRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeManagedRuleGroupResponse(data, context);
  const response: DescribeManagedRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeManagedRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      response = {
        ...(await deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateWebACLResponse(data, context);
  const response: DisassociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetIPSetResponse(data, context);
  const response: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoggingConfigurationResponse(data, context);
  const response: GetLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetManagedRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetManagedRuleSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetManagedRuleSetResponse(data, context);
  const response: GetManagedRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetManagedRuleSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedRuleSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetPermissionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPermissionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPermissionPolicyResponse(data, context);
  const response: GetPermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPermissionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse(data, context);
  const response: GetRateBasedStatementManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegexPatternSetResponse(data, context);
  const response: GetRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRuleGroupResponse(data, context);
  const response: GetRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetSampledRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSampledRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSampledRequestsResponse(data, context);
  const response: GetSampledRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSampledRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWebACLResponse(data, context);
  const response: GetWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetWebACLForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWebACLForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWebACLForResourceResponse(data, context);
  const response: GetWebACLForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWebACLForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse(data, context);
  const response: ListAvailableManagedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsResponse(data, context);
  const response: ListAvailableManagedRuleGroupVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListIPSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListIPSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIPSetsResponse(data, context);
  const response: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListIPSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListLoggingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLoggingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLoggingConfigurationsResponse(data, context);
  const response: ListLoggingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLoggingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListManagedRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListManagedRuleSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListManagedRuleSetsResponse(data, context);
  const response: ListManagedRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListManagedRuleSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedRuleSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRegexPatternSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRegexPatternSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRegexPatternSetsResponse(data, context);
  const response: ListRegexPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRegexPatternSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListResourcesForWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourcesForWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesForWebACLResponse(data, context);
  const response: ListResourcesForWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesForWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRuleGroupsResponse(data, context);
  const response: ListRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListWebACLsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWebACLsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWebACLsResponse(data, context);
  const response: ListWebACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWebACLsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLoggingConfigurationResponse(data, context);
  const response: PutLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFServiceLinkedRoleErrorException":
    case "com.amazonaws.wafv2#WAFServiceLinkedRoleErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutManagedRuleSetVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedRuleSetVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutManagedRuleSetVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutManagedRuleSetVersionsResponse(data, context);
  const response: PutManagedRuleSetVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutManagedRuleSetVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedRuleSetVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutPermissionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPermissionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPermissionPolicyResponse(data, context);
  const response: PutPermissionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPermissionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidPermissionPolicyException":
    case "com.amazonaws.wafv2#WAFInvalidPermissionPolicyException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateIPSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateIPSetResponse(data, context);
  const response: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateResponse(data, context);
  const response: UpdateManagedRuleSetVersionExpiryDateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateRegexPatternSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRegexPatternSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRegexPatternSetResponse(data, context);
  const response: UpdateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleGroupResponse(data, context);
  const response: UpdateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWebACLResponse(data, context);
  const response: UpdateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFExpiredManagedRuleGroupVersionException":
    case "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException":
      response = {
        ...(await deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafv2#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1WAFAssociatedItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFAssociatedItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFAssociatedItemException(body, context);
  const contents: WAFAssociatedItemException = {
    name: "WAFAssociatedItemException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFDuplicateItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFDuplicateItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFDuplicateItemException(body, context);
  const contents: WAFDuplicateItemException = {
    name: "WAFDuplicateItemException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFExpiredManagedRuleGroupVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionException(body, context);
  const contents: WAFExpiredManagedRuleGroupVersionException = {
    name: "WAFExpiredManagedRuleGroupVersionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInternalErrorException(body, context);
  const contents: WAFInternalErrorException = {
    name: "WAFInternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFInvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidOperationException(body, context);
  const contents: WAFInvalidOperationException = {
    name: "WAFInvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFInvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidParameterException(body, context);
  const contents: WAFInvalidParameterException = {
    name: "WAFInvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidPermissionPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidPermissionPolicyException(body, context);
  const contents: WAFInvalidPermissionPolicyException = {
    name: "WAFInvalidPermissionPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFInvalidResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidResourceException(body, context);
  const contents: WAFInvalidResourceException = {
    name: "WAFInvalidResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFLimitsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFLimitsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFLimitsExceededException(body, context);
  const contents: WAFLimitsExceededException = {
    name: "WAFLimitsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFNonexistentItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonexistentItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFNonexistentItemException(body, context);
  const contents: WAFNonexistentItemException = {
    name: "WAFNonexistentItemException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFOptimisticLockExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFOptimisticLockException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFOptimisticLockException(body, context);
  const contents: WAFOptimisticLockException = {
    name: "WAFOptimisticLockException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFServiceLinkedRoleErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFServiceLinkedRoleErrorException(body, context);
  const contents: WAFServiceLinkedRoleErrorException = {
    name: "WAFServiceLinkedRoleErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFSubscriptionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFSubscriptionNotFoundException(body, context);
  const contents: WAFSubscriptionNotFoundException = {
    name: "WAFSubscriptionNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFTagOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFTagOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFTagOperationException(body, context);
  const contents: WAFTagOperationException = {
    name: "WAFTagOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFTagOperationInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFTagOperationInternalErrorException(body, context);
  const contents: WAFTagOperationInternalErrorException = {
    name: "WAFTagOperationInternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFUnavailableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFUnavailableEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFUnavailableEntityException(body, context);
  const contents: WAFUnavailableEntityException = {
    name: "WAFUnavailableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ActionCondition = (input: ActionCondition, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
  };
};

const serializeAws_json1_1All = (input: All, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1AllowAction = (input: AllowAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomRequestHandling !== undefined &&
      input.CustomRequestHandling !== null && {
        CustomRequestHandling: serializeAws_json1_1CustomRequestHandling(input.CustomRequestHandling, context),
      }),
  };
};

const serializeAws_json1_1AllQueryArguments = (input: AllQueryArguments, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1AndStatement = (input: AndStatement, context: __SerdeContext): any => {
  return {
    ...(input.Statements !== undefined &&
      input.Statements !== null && { Statements: serializeAws_json1_1Statements(input.Statements, context) }),
  };
};

const serializeAws_json1_1AssociateWebACLRequest = (input: AssociateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }),
  };
};

const serializeAws_json1_1BlockAction = (input: BlockAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponse !== undefined &&
      input.CustomResponse !== null && {
        CustomResponse: serializeAws_json1_1CustomResponse(input.CustomResponse, context),
      }),
  };
};

const serializeAws_json1_1Body = (input: Body, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1ByteMatchStatement = (input: ByteMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.PositionalConstraint !== undefined &&
      input.PositionalConstraint !== null && { PositionalConstraint: input.PositionalConstraint }),
    ...(input.SearchString !== undefined &&
      input.SearchString !== null && { SearchString: context.base64Encoder(input.SearchString) }),
    ...(input.TextTransformations !== undefined &&
      input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
      }),
  };
};

const serializeAws_json1_1CheckCapacityRequest = (input: CheckCapacityRequest, context: __SerdeContext): any => {
  return {
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.ActionCondition !== undefined &&
      input.ActionCondition !== null && {
        ActionCondition: serializeAws_json1_1ActionCondition(input.ActionCondition, context),
      }),
    ...(input.LabelNameCondition !== undefined &&
      input.LabelNameCondition !== null && {
        LabelNameCondition: serializeAws_json1_1LabelNameCondition(input.LabelNameCondition, context),
      }),
  };
};

const serializeAws_json1_1Conditions = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Condition(entry, context);
    });
};

const serializeAws_json1_1CountAction = (input: CountAction, context: __SerdeContext): any => {
  return {
    ...(input.CustomRequestHandling !== undefined &&
      input.CustomRequestHandling !== null && {
        CustomRequestHandling: serializeAws_json1_1CustomRequestHandling(input.CustomRequestHandling, context),
      }),
  };
};

const serializeAws_json1_1CountryCodes = (input: (CountryCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CreateIPSetRequest = (input: CreateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses !== undefined &&
      input.Addresses !== null && { Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.IPAddressVersion !== undefined &&
      input.IPAddressVersion !== null && { IPAddressVersion: input.IPAddressVersion }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateRegexPatternSetRequest = (
  input: CreateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RegularExpressionList !== undefined &&
      input.RegularExpressionList !== null && {
        RegularExpressionList: serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context),
      }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity }),
    ...(input.CustomResponseBodies !== undefined &&
      input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VisibilityConfig !== undefined &&
      input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
      }),
  };
};

const serializeAws_json1_1CreateWebACLRequest = (input: CreateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponseBodies !== undefined &&
      input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
      }),
    ...(input.DefaultAction !== undefined &&
      input.DefaultAction !== null && {
        DefaultAction: serializeAws_json1_1DefaultAction(input.DefaultAction, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VisibilityConfig !== undefined &&
      input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
      }),
  };
};

const serializeAws_json1_1CustomHTTPHeader = (input: CustomHTTPHeader, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CustomHTTPHeaders = (input: CustomHTTPHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CustomHTTPHeader(entry, context);
    });
};

const serializeAws_json1_1CustomRequestHandling = (input: CustomRequestHandling, context: __SerdeContext): any => {
  return {
    ...(input.InsertHeaders !== undefined &&
      input.InsertHeaders !== null && {
        InsertHeaders: serializeAws_json1_1CustomHTTPHeaders(input.InsertHeaders, context),
      }),
  };
};

const serializeAws_json1_1CustomResponse = (input: CustomResponse, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponseBodyKey !== undefined &&
      input.CustomResponseBodyKey !== null && { CustomResponseBodyKey: input.CustomResponseBodyKey }),
    ...(input.ResponseCode !== undefined && input.ResponseCode !== null && { ResponseCode: input.ResponseCode }),
    ...(input.ResponseHeaders !== undefined &&
      input.ResponseHeaders !== null && {
        ResponseHeaders: serializeAws_json1_1CustomHTTPHeaders(input.ResponseHeaders, context),
      }),
  };
};

const serializeAws_json1_1CustomResponseBodies = (
  input: { [key: string]: CustomResponseBody },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1CustomResponseBody(value, context),
    };
  }, {});
};

const serializeAws_json1_1CustomResponseBody = (input: CustomResponseBody, context: __SerdeContext): any => {
  return {
    ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
    ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
  };
};

const serializeAws_json1_1DefaultAction = (input: DefaultAction, context: __SerdeContext): any => {
  return {
    ...(input.Allow !== undefined &&
      input.Allow !== null && { Allow: serializeAws_json1_1AllowAction(input.Allow, context) }),
    ...(input.Block !== undefined &&
      input.Block !== null && { Block: serializeAws_json1_1BlockAction(input.Block, context) }),
  };
};

const serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest = (
  input: DeleteFirewallManagerRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }),
    ...(input.WebACLLockToken !== undefined &&
      input.WebACLLockToken !== null && { WebACLLockToken: input.WebACLLockToken }),
  };
};

const serializeAws_json1_1DeleteIPSetRequest = (input: DeleteIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1DeleteLoggingConfigurationRequest = (
  input: DeleteLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DeletePermissionPolicyRequest = (
  input: DeletePermissionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DeleteRegexPatternSetRequest = (
  input: DeleteRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1DeleteRuleGroupRequest = (input: DeleteRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1DeleteWebACLRequest = (input: DeleteWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1DescribeManagedRuleGroupRequest = (
  input: DescribeManagedRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }),
    ...(input.VersionName !== undefined && input.VersionName !== null && { VersionName: input.VersionName }),
  };
};

const serializeAws_json1_1DisassociateWebACLRequest = (
  input: DisassociateWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ExcludedRule = (input: ExcludedRule, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1ExcludedRules = (input: ExcludedRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ExcludedRule(entry, context);
    });
};

const serializeAws_json1_1FieldToMatch = (input: FieldToMatch, context: __SerdeContext): any => {
  return {
    ...(input.AllQueryArguments !== undefined &&
      input.AllQueryArguments !== null && {
        AllQueryArguments: serializeAws_json1_1AllQueryArguments(input.AllQueryArguments, context),
      }),
    ...(input.Body !== undefined && input.Body !== null && { Body: serializeAws_json1_1Body(input.Body, context) }),
    ...(input.JsonBody !== undefined &&
      input.JsonBody !== null && { JsonBody: serializeAws_json1_1JsonBody(input.JsonBody, context) }),
    ...(input.Method !== undefined &&
      input.Method !== null && { Method: serializeAws_json1_1Method(input.Method, context) }),
    ...(input.QueryString !== undefined &&
      input.QueryString !== null && { QueryString: serializeAws_json1_1QueryString(input.QueryString, context) }),
    ...(input.SingleHeader !== undefined &&
      input.SingleHeader !== null && { SingleHeader: serializeAws_json1_1SingleHeader(input.SingleHeader, context) }),
    ...(input.SingleQueryArgument !== undefined &&
      input.SingleQueryArgument !== null && {
        SingleQueryArgument: serializeAws_json1_1SingleQueryArgument(input.SingleQueryArgument, context),
      }),
    ...(input.UriPath !== undefined &&
      input.UriPath !== null && { UriPath: serializeAws_json1_1UriPath(input.UriPath, context) }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Behavior !== undefined && input.Behavior !== null && { Behavior: input.Behavior }),
    ...(input.Conditions !== undefined &&
      input.Conditions !== null && { Conditions: serializeAws_json1_1Conditions(input.Conditions, context) }),
    ...(input.Requirement !== undefined && input.Requirement !== null && { Requirement: input.Requirement }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1ForwardedIPConfig = (input: ForwardedIPConfig, context: __SerdeContext): any => {
  return {
    ...(input.FallbackBehavior !== undefined &&
      input.FallbackBehavior !== null && { FallbackBehavior: input.FallbackBehavior }),
    ...(input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName }),
  };
};

const serializeAws_json1_1GeoMatchStatement = (input: GeoMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.CountryCodes !== undefined &&
      input.CountryCodes !== null && { CountryCodes: serializeAws_json1_1CountryCodes(input.CountryCodes, context) }),
    ...(input.ForwardedIPConfig !== undefined &&
      input.ForwardedIPConfig !== null && {
        ForwardedIPConfig: serializeAws_json1_1ForwardedIPConfig(input.ForwardedIPConfig, context),
      }),
  };
};

const serializeAws_json1_1GetIPSetRequest = (input: GetIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1GetLoggingConfigurationRequest = (
  input: GetLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetManagedRuleSetRequest = (
  input: GetManagedRuleSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1GetPermissionPolicyRequest = (
  input: GetPermissionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetRateBasedStatementManagedKeysRequest = (
  input: GetRateBasedStatementManagedKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    ...(input.WebACLName !== undefined && input.WebACLName !== null && { WebACLName: input.WebACLName }),
  };
};

const serializeAws_json1_1GetRegexPatternSetRequest = (
  input: GetRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1GetRuleGroupRequest = (input: GetRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1GetSampledRequestsRequest = (
  input: GetSampledRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
    ...(input.RuleMetricName !== undefined &&
      input.RuleMetricName !== null && { RuleMetricName: input.RuleMetricName }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.TimeWindow !== undefined &&
      input.TimeWindow !== null && { TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context) }),
    ...(input.WebAclArn !== undefined && input.WebAclArn !== null && { WebAclArn: input.WebAclArn }),
  };
};

const serializeAws_json1_1GetWebACLForResourceRequest = (
  input: GetWebACLForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetWebACLRequest = (input: GetWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1IPAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IPSetForwardedIPConfig = (input: IPSetForwardedIPConfig, context: __SerdeContext): any => {
  return {
    ...(input.FallbackBehavior !== undefined &&
      input.FallbackBehavior !== null && { FallbackBehavior: input.FallbackBehavior }),
    ...(input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName }),
    ...(input.Position !== undefined && input.Position !== null && { Position: input.Position }),
  };
};

const serializeAws_json1_1IPSetReferenceStatement = (input: IPSetReferenceStatement, context: __SerdeContext): any => {
  return {
    ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
    ...(input.IPSetForwardedIPConfig !== undefined &&
      input.IPSetForwardedIPConfig !== null && {
        IPSetForwardedIPConfig: serializeAws_json1_1IPSetForwardedIPConfig(input.IPSetForwardedIPConfig, context),
      }),
  };
};

const serializeAws_json1_1JsonBody = (input: JsonBody, context: __SerdeContext): any => {
  return {
    ...(input.InvalidFallbackBehavior !== undefined &&
      input.InvalidFallbackBehavior !== null && { InvalidFallbackBehavior: input.InvalidFallbackBehavior }),
    ...(input.MatchPattern !== undefined &&
      input.MatchPattern !== null && {
        MatchPattern: serializeAws_json1_1JsonMatchPattern(input.MatchPattern, context),
      }),
    ...(input.MatchScope !== undefined && input.MatchScope !== null && { MatchScope: input.MatchScope }),
  };
};

const serializeAws_json1_1JsonMatchPattern = (input: JsonMatchPattern, context: __SerdeContext): any => {
  return {
    ...(input.All !== undefined && input.All !== null && { All: serializeAws_json1_1All(input.All, context) }),
    ...(input.IncludedPaths !== undefined &&
      input.IncludedPaths !== null && {
        IncludedPaths: serializeAws_json1_1JsonPointerPaths(input.IncludedPaths, context),
      }),
  };
};

const serializeAws_json1_1JsonPointerPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Label = (input: Label, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1LabelMatchStatement = (input: LabelMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1LabelNameCondition = (input: LabelNameCondition, context: __SerdeContext): any => {
  return {
    ...(input.LabelName !== undefined && input.LabelName !== null && { LabelName: input.LabelName }),
  };
};

const serializeAws_json1_1Labels = (input: Label[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Label(entry, context);
    });
};

const serializeAws_json1_1ListAvailableManagedRuleGroupsRequest = (
  input: ListAvailableManagedRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1ListAvailableManagedRuleGroupVersionsRequest = (
  input: ListAvailableManagedRuleGroupVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }),
  };
};

const serializeAws_json1_1ListIPSetsRequest = (input: ListIPSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1ListLoggingConfigurationsRequest = (
  input: ListLoggingConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1ListManagedRuleSetsRequest = (
  input: ListManagedRuleSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1ListRegexPatternSetsRequest = (
  input: ListRegexPatternSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1ListResourcesForWebACLRequest = (
  input: ListResourcesForWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    ...(input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }),
  };
};

const serializeAws_json1_1ListRuleGroupsRequest = (input: ListRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListWebACLsRequest = (input: ListWebACLsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1LogDestinationConfigs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LogDestinationConfigs !== undefined &&
      input.LogDestinationConfigs !== null && {
        LogDestinationConfigs: serializeAws_json1_1LogDestinationConfigs(input.LogDestinationConfigs, context),
      }),
    ...(input.LoggingFilter !== undefined &&
      input.LoggingFilter !== null && {
        LoggingFilter: serializeAws_json1_1LoggingFilter(input.LoggingFilter, context),
      }),
    ...(input.ManagedByFirewallManager !== undefined &&
      input.ManagedByFirewallManager !== null && { ManagedByFirewallManager: input.ManagedByFirewallManager }),
    ...(input.RedactedFields !== undefined &&
      input.RedactedFields !== null && {
        RedactedFields: serializeAws_json1_1RedactedFields(input.RedactedFields, context),
      }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1LoggingFilter = (input: LoggingFilter, context: __SerdeContext): any => {
  return {
    ...(input.DefaultBehavior !== undefined &&
      input.DefaultBehavior !== null && { DefaultBehavior: input.DefaultBehavior }),
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
  };
};

const serializeAws_json1_1ManagedRuleGroupStatement = (
  input: ManagedRuleGroupStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludedRules !== undefined &&
      input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ScopeDownStatement !== undefined &&
      input.ScopeDownStatement !== null && {
        ScopeDownStatement: serializeAws_json1_1Statement(input.ScopeDownStatement, context),
      }),
    ...(input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1Method = (input: Method, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1NoneAction = (input: NoneAction, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1NotStatement = (input: NotStatement, context: __SerdeContext): any => {
  return {
    ...(input.Statement !== undefined &&
      input.Statement !== null && { Statement: serializeAws_json1_1Statement(input.Statement, context) }),
  };
};

const serializeAws_json1_1OrStatement = (input: OrStatement, context: __SerdeContext): any => {
  return {
    ...(input.Statements !== undefined &&
      input.Statements !== null && { Statements: serializeAws_json1_1Statements(input.Statements, context) }),
  };
};

const serializeAws_json1_1OverrideAction = (input: OverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Count !== undefined &&
      input.Count !== null && { Count: serializeAws_json1_1CountAction(input.Count, context) }),
    ...(input.None !== undefined &&
      input.None !== null && { None: serializeAws_json1_1NoneAction(input.None, context) }),
  };
};

const serializeAws_json1_1PutLoggingConfigurationRequest = (
  input: PutLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoggingConfiguration !== undefined &&
      input.LoggingConfiguration !== null && {
        LoggingConfiguration: serializeAws_json1_1LoggingConfiguration(input.LoggingConfiguration, context),
      }),
  };
};

const serializeAws_json1_1PutManagedRuleSetVersionsRequest = (
  input: PutManagedRuleSetVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecommendedVersion !== undefined &&
      input.RecommendedVersion !== null && { RecommendedVersion: input.RecommendedVersion }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.VersionsToPublish !== undefined &&
      input.VersionsToPublish !== null && {
        VersionsToPublish: serializeAws_json1_1VersionsToPublish(input.VersionsToPublish, context),
      }),
  };
};

const serializeAws_json1_1PutPermissionPolicyRequest = (
  input: PutPermissionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1QueryString = (input: QueryString, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1RateBasedStatement = (input: RateBasedStatement, context: __SerdeContext): any => {
  return {
    ...(input.AggregateKeyType !== undefined &&
      input.AggregateKeyType !== null && { AggregateKeyType: input.AggregateKeyType }),
    ...(input.ForwardedIPConfig !== undefined &&
      input.ForwardedIPConfig !== null && {
        ForwardedIPConfig: serializeAws_json1_1ForwardedIPConfig(input.ForwardedIPConfig, context),
      }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.ScopeDownStatement !== undefined &&
      input.ScopeDownStatement !== null && {
        ScopeDownStatement: serializeAws_json1_1Statement(input.ScopeDownStatement, context),
      }),
  };
};

const serializeAws_json1_1RedactedFields = (input: FieldToMatch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1FieldToMatch(entry, context);
    });
};

const serializeAws_json1_1Regex = (input: Regex, context: __SerdeContext): any => {
  return {
    ...(input.RegexString !== undefined && input.RegexString !== null && { RegexString: input.RegexString }),
  };
};

const serializeAws_json1_1RegexPatternSetReferenceStatement = (
  input: RegexPatternSetReferenceStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformations !== undefined &&
      input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
      }),
  };
};

const serializeAws_json1_1RegularExpressionList = (input: Regex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Regex(entry, context);
    });
};

const serializeAws_json1_1Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_json1_1RuleAction(input.Action, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OverrideAction !== undefined &&
      input.OverrideAction !== null && {
        OverrideAction: serializeAws_json1_1OverrideAction(input.OverrideAction, context),
      }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.RuleLabels !== undefined &&
      input.RuleLabels !== null && { RuleLabels: serializeAws_json1_1Labels(input.RuleLabels, context) }),
    ...(input.Statement !== undefined &&
      input.Statement !== null && { Statement: serializeAws_json1_1Statement(input.Statement, context) }),
    ...(input.VisibilityConfig !== undefined &&
      input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
      }),
  };
};

const serializeAws_json1_1RuleAction = (input: RuleAction, context: __SerdeContext): any => {
  return {
    ...(input.Allow !== undefined &&
      input.Allow !== null && { Allow: serializeAws_json1_1AllowAction(input.Allow, context) }),
    ...(input.Block !== undefined &&
      input.Block !== null && { Block: serializeAws_json1_1BlockAction(input.Block, context) }),
    ...(input.Count !== undefined &&
      input.Count !== null && { Count: serializeAws_json1_1CountAction(input.Count, context) }),
  };
};

const serializeAws_json1_1RuleGroupReferenceStatement = (
  input: RuleGroupReferenceStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
    ...(input.ExcludedRules !== undefined &&
      input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
      }),
  };
};

const serializeAws_json1_1Rules = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Rule(entry, context);
    });
};

const serializeAws_json1_1SingleHeader = (input: SingleHeader, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SingleQueryArgument = (input: SingleQueryArgument, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SizeConstraintStatement = (input: SizeConstraintStatement, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.TextTransformations !== undefined &&
      input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
      }),
  };
};

const serializeAws_json1_1SqliMatchStatement = (input: SqliMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformations !== undefined &&
      input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
      }),
  };
};

const serializeAws_json1_1Statement = (input: Statement, context: __SerdeContext): any => {
  return {
    ...(input.AndStatement !== undefined &&
      input.AndStatement !== null && { AndStatement: serializeAws_json1_1AndStatement(input.AndStatement, context) }),
    ...(input.ByteMatchStatement !== undefined &&
      input.ByteMatchStatement !== null && {
        ByteMatchStatement: serializeAws_json1_1ByteMatchStatement(input.ByteMatchStatement, context),
      }),
    ...(input.GeoMatchStatement !== undefined &&
      input.GeoMatchStatement !== null && {
        GeoMatchStatement: serializeAws_json1_1GeoMatchStatement(input.GeoMatchStatement, context),
      }),
    ...(input.IPSetReferenceStatement !== undefined &&
      input.IPSetReferenceStatement !== null && {
        IPSetReferenceStatement: serializeAws_json1_1IPSetReferenceStatement(input.IPSetReferenceStatement, context),
      }),
    ...(input.LabelMatchStatement !== undefined &&
      input.LabelMatchStatement !== null && {
        LabelMatchStatement: serializeAws_json1_1LabelMatchStatement(input.LabelMatchStatement, context),
      }),
    ...(input.ManagedRuleGroupStatement !== undefined &&
      input.ManagedRuleGroupStatement !== null && {
        ManagedRuleGroupStatement: serializeAws_json1_1ManagedRuleGroupStatement(
          input.ManagedRuleGroupStatement,
          context
        ),
      }),
    ...(input.NotStatement !== undefined &&
      input.NotStatement !== null && { NotStatement: serializeAws_json1_1NotStatement(input.NotStatement, context) }),
    ...(input.OrStatement !== undefined &&
      input.OrStatement !== null && { OrStatement: serializeAws_json1_1OrStatement(input.OrStatement, context) }),
    ...(input.RateBasedStatement !== undefined &&
      input.RateBasedStatement !== null && {
        RateBasedStatement: serializeAws_json1_1RateBasedStatement(input.RateBasedStatement, context),
      }),
    ...(input.RegexPatternSetReferenceStatement !== undefined &&
      input.RegexPatternSetReferenceStatement !== null && {
        RegexPatternSetReferenceStatement: serializeAws_json1_1RegexPatternSetReferenceStatement(
          input.RegexPatternSetReferenceStatement,
          context
        ),
      }),
    ...(input.RuleGroupReferenceStatement !== undefined &&
      input.RuleGroupReferenceStatement !== null && {
        RuleGroupReferenceStatement: serializeAws_json1_1RuleGroupReferenceStatement(
          input.RuleGroupReferenceStatement,
          context
        ),
      }),
    ...(input.SizeConstraintStatement !== undefined &&
      input.SizeConstraintStatement !== null && {
        SizeConstraintStatement: serializeAws_json1_1SizeConstraintStatement(input.SizeConstraintStatement, context),
      }),
    ...(input.SqliMatchStatement !== undefined &&
      input.SqliMatchStatement !== null && {
        SqliMatchStatement: serializeAws_json1_1SqliMatchStatement(input.SqliMatchStatement, context),
      }),
    ...(input.XssMatchStatement !== undefined &&
      input.XssMatchStatement !== null && {
        XssMatchStatement: serializeAws_json1_1XssMatchStatement(input.XssMatchStatement, context),
      }),
  };
};

const serializeAws_json1_1Statements = (input: Statement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Statement(entry, context);
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TextTransformation = (input: TextTransformation, context: __SerdeContext): any => {
  return {
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1TextTransformations = (input: TextTransformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TextTransformation(entry, context);
    });
};

const serializeAws_json1_1TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateIPSetRequest = (input: UpdateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses !== undefined &&
      input.Addresses !== null && { Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateRequest = (
  input: UpdateManagedRuleSetVersionExpiryDateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExpiryTimestamp !== undefined &&
      input.ExpiryTimestamp !== null && { ExpiryTimestamp: Math.round(input.ExpiryTimestamp.getTime() / 1000) }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.VersionToExpire !== undefined &&
      input.VersionToExpire !== null && { VersionToExpire: input.VersionToExpire }),
  };
};

const serializeAws_json1_1UpdateRegexPatternSetRequest = (
  input: UpdateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RegularExpressionList !== undefined &&
      input.RegularExpressionList !== null && {
        RegularExpressionList: serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context),
      }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponseBodies !== undefined &&
      input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.VisibilityConfig !== undefined &&
      input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
      }),
  };
};

const serializeAws_json1_1UpdateWebACLRequest = (input: UpdateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomResponseBodies !== undefined &&
      input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
      }),
    ...(input.DefaultAction !== undefined &&
      input.DefaultAction !== null && {
        DefaultAction: serializeAws_json1_1DefaultAction(input.DefaultAction, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
    ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    ...(input.VisibilityConfig !== undefined &&
      input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
      }),
  };
};

const serializeAws_json1_1UriPath = (input: UriPath, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1VersionsToPublish = (
  input: { [key: string]: VersionToPublish },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1VersionToPublish(value, context),
    };
  }, {});
};

const serializeAws_json1_1VersionToPublish = (input: VersionToPublish, context: __SerdeContext): any => {
  return {
    ...(input.AssociatedRuleGroupArn !== undefined &&
      input.AssociatedRuleGroupArn !== null && { AssociatedRuleGroupArn: input.AssociatedRuleGroupArn }),
    ...(input.ForecastedLifetime !== undefined &&
      input.ForecastedLifetime !== null && { ForecastedLifetime: input.ForecastedLifetime }),
  };
};

const serializeAws_json1_1VisibilityConfig = (input: VisibilityConfig, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchMetricsEnabled !== undefined &&
      input.CloudWatchMetricsEnabled !== null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.SampledRequestsEnabled !== undefined &&
      input.SampledRequestsEnabled !== null && { SampledRequestsEnabled: input.SampledRequestsEnabled }),
  };
};

const serializeAws_json1_1XssMatchStatement = (input: XssMatchStatement, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformations !== undefined &&
      input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
      }),
  };
};

const deserializeAws_json1_1ActionCondition = (output: any, context: __SerdeContext): ActionCondition => {
  return {
    Action: __expectString(output.Action),
  } as any;
};

const deserializeAws_json1_1All = (output: any, context: __SerdeContext): All => {
  return {} as any;
};

const deserializeAws_json1_1AllowAction = (output: any, context: __SerdeContext): AllowAction => {
  return {
    CustomRequestHandling:
      output.CustomRequestHandling !== undefined && output.CustomRequestHandling !== null
        ? deserializeAws_json1_1CustomRequestHandling(output.CustomRequestHandling, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AllQueryArguments = (output: any, context: __SerdeContext): AllQueryArguments => {
  return {} as any;
};

const deserializeAws_json1_1AndStatement = (output: any, context: __SerdeContext): AndStatement => {
  return {
    Statements:
      output.Statements !== undefined && output.Statements !== null
        ? deserializeAws_json1_1Statements(output.Statements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): AssociateWebACLResponse => {
  return {} as any;
};

const deserializeAws_json1_1BlockAction = (output: any, context: __SerdeContext): BlockAction => {
  return {
    CustomResponse:
      output.CustomResponse !== undefined && output.CustomResponse !== null
        ? deserializeAws_json1_1CustomResponse(output.CustomResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Body = (output: any, context: __SerdeContext): Body => {
  return {} as any;
};

const deserializeAws_json1_1ByteMatchStatement = (output: any, context: __SerdeContext): ByteMatchStatement => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    PositionalConstraint: __expectString(output.PositionalConstraint),
    SearchString:
      output.SearchString !== undefined && output.SearchString !== null
        ? context.base64Decoder(output.SearchString)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined && output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CheckCapacityResponse = (output: any, context: __SerdeContext): CheckCapacityResponse => {
  return {
    Capacity: __expectNumber(output.Capacity),
  } as any;
};

const deserializeAws_json1_1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    ActionCondition:
      output.ActionCondition !== undefined && output.ActionCondition !== null
        ? deserializeAws_json1_1ActionCondition(output.ActionCondition, context)
        : undefined,
    LabelNameCondition:
      output.LabelNameCondition !== undefined && output.LabelNameCondition !== null
        ? deserializeAws_json1_1LabelNameCondition(output.LabelNameCondition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Conditions = (output: any, context: __SerdeContext): Condition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Condition(entry, context);
    });
};

const deserializeAws_json1_1CountAction = (output: any, context: __SerdeContext): CountAction => {
  return {
    CustomRequestHandling:
      output.CustomRequestHandling !== undefined && output.CustomRequestHandling !== null
        ? deserializeAws_json1_1CustomRequestHandling(output.CustomRequestHandling, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CountryCodes = (output: any, context: __SerdeContext): (CountryCode | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CreateIPSetResponse = (output: any, context: __SerdeContext): CreateIPSetResponse => {
  return {
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1IPSetSummary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): CreateRegexPatternSetResponse => {
  return {
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1RegexPatternSetSummary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateRuleGroupResponse => {
  return {
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1RuleGroupSummary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateWebACLResponse = (output: any, context: __SerdeContext): CreateWebACLResponse => {
  return {
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1WebACLSummary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomHTTPHeader = (output: any, context: __SerdeContext): CustomHTTPHeader => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1CustomHTTPHeaders = (output: any, context: __SerdeContext): CustomHTTPHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomHTTPHeader(entry, context);
    });
};

const deserializeAws_json1_1CustomRequestHandling = (output: any, context: __SerdeContext): CustomRequestHandling => {
  return {
    InsertHeaders:
      output.InsertHeaders !== undefined && output.InsertHeaders !== null
        ? deserializeAws_json1_1CustomHTTPHeaders(output.InsertHeaders, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomResponse = (output: any, context: __SerdeContext): CustomResponse => {
  return {
    CustomResponseBodyKey: __expectString(output.CustomResponseBodyKey),
    ResponseCode: __expectNumber(output.ResponseCode),
    ResponseHeaders:
      output.ResponseHeaders !== undefined && output.ResponseHeaders !== null
        ? deserializeAws_json1_1CustomHTTPHeaders(output.ResponseHeaders, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomResponseBodies = (
  output: any,
  context: __SerdeContext
): { [key: string]: CustomResponseBody } => {
  return Object.entries(output).reduce((acc: { [key: string]: CustomResponseBody }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1CustomResponseBody(value, context),
    };
  }, {});
};

const deserializeAws_json1_1CustomResponseBody = (output: any, context: __SerdeContext): CustomResponseBody => {
  return {
    Content: __expectString(output.Content),
    ContentType: __expectString(output.ContentType),
  } as any;
};

const deserializeAws_json1_1DefaultAction = (output: any, context: __SerdeContext): DefaultAction => {
  return {
    Allow:
      output.Allow !== undefined && output.Allow !== null
        ? deserializeAws_json1_1AllowAction(output.Allow, context)
        : undefined,
    Block:
      output.Block !== undefined && output.Block !== null
        ? deserializeAws_json1_1BlockAction(output.Block, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): DeleteFirewallManagerRuleGroupsResponse => {
  return {
    NextWebACLLockToken: __expectString(output.NextWebACLLockToken),
  } as any;
};

const deserializeAws_json1_1DeleteIPSetResponse = (output: any, context: __SerdeContext): DeleteIPSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLoggingConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeletePermissionPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeletePermissionPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteRegexPatternSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteRuleGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWebACLResponse = (output: any, context: __SerdeContext): DeleteWebACLResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeManagedRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeManagedRuleGroupResponse => {
  return {
    AvailableLabels:
      output.AvailableLabels !== undefined && output.AvailableLabels !== null
        ? deserializeAws_json1_1LabelSummaries(output.AvailableLabels, context)
        : undefined,
    Capacity: __expectNumber(output.Capacity),
    ConsumedLabels:
      output.ConsumedLabels !== undefined && output.ConsumedLabels !== null
        ? deserializeAws_json1_1LabelSummaries(output.ConsumedLabels, context)
        : undefined,
    LabelNamespace: __expectString(output.LabelNamespace),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
        : undefined,
    SnsTopicArn: __expectString(output.SnsTopicArn),
    VersionName: __expectString(output.VersionName),
  } as any;
};

const deserializeAws_json1_1DisassociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): DisassociateWebACLResponse => {
  return {} as any;
};

const deserializeAws_json1_1ExcludedRule = (output: any, context: __SerdeContext): ExcludedRule => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ExcludedRules = (output: any, context: __SerdeContext): ExcludedRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExcludedRule(entry, context);
    });
};

const deserializeAws_json1_1FieldToMatch = (output: any, context: __SerdeContext): FieldToMatch => {
  return {
    AllQueryArguments:
      output.AllQueryArguments !== undefined && output.AllQueryArguments !== null
        ? deserializeAws_json1_1AllQueryArguments(output.AllQueryArguments, context)
        : undefined,
    Body:
      output.Body !== undefined && output.Body !== null ? deserializeAws_json1_1Body(output.Body, context) : undefined,
    JsonBody:
      output.JsonBody !== undefined && output.JsonBody !== null
        ? deserializeAws_json1_1JsonBody(output.JsonBody, context)
        : undefined,
    Method:
      output.Method !== undefined && output.Method !== null
        ? deserializeAws_json1_1Method(output.Method, context)
        : undefined,
    QueryString:
      output.QueryString !== undefined && output.QueryString !== null
        ? deserializeAws_json1_1QueryString(output.QueryString, context)
        : undefined,
    SingleHeader:
      output.SingleHeader !== undefined && output.SingleHeader !== null
        ? deserializeAws_json1_1SingleHeader(output.SingleHeader, context)
        : undefined,
    SingleQueryArgument:
      output.SingleQueryArgument !== undefined && output.SingleQueryArgument !== null
        ? deserializeAws_json1_1SingleQueryArgument(output.SingleQueryArgument, context)
        : undefined,
    UriPath:
      output.UriPath !== undefined && output.UriPath !== null
        ? deserializeAws_json1_1UriPath(output.UriPath, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Behavior: __expectString(output.Behavior),
    Conditions:
      output.Conditions !== undefined && output.Conditions !== null
        ? deserializeAws_json1_1Conditions(output.Conditions, context)
        : undefined,
    Requirement: __expectString(output.Requirement),
  } as any;
};

const deserializeAws_json1_1Filters = (output: any, context: __SerdeContext): Filter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Filter(entry, context);
    });
};

const deserializeAws_json1_1FirewallManagerRuleGroup = (
  output: any,
  context: __SerdeContext
): FirewallManagerRuleGroup => {
  return {
    FirewallManagerStatement:
      output.FirewallManagerStatement !== undefined && output.FirewallManagerStatement !== null
        ? deserializeAws_json1_1FirewallManagerStatement(output.FirewallManagerStatement, context)
        : undefined,
    Name: __expectString(output.Name),
    OverrideAction:
      output.OverrideAction !== undefined && output.OverrideAction !== null
        ? deserializeAws_json1_1OverrideAction(output.OverrideAction, context)
        : undefined,
    Priority: __expectNumber(output.Priority),
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FirewallManagerRuleGroups = (
  output: any,
  context: __SerdeContext
): FirewallManagerRuleGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FirewallManagerRuleGroup(entry, context);
    });
};

const deserializeAws_json1_1FirewallManagerStatement = (
  output: any,
  context: __SerdeContext
): FirewallManagerStatement => {
  return {
    ManagedRuleGroupStatement:
      output.ManagedRuleGroupStatement !== undefined && output.ManagedRuleGroupStatement !== null
        ? deserializeAws_json1_1ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
        : undefined,
    RuleGroupReferenceStatement:
      output.RuleGroupReferenceStatement !== undefined && output.RuleGroupReferenceStatement !== null
        ? deserializeAws_json1_1RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ForwardedIPConfig = (output: any, context: __SerdeContext): ForwardedIPConfig => {
  return {
    FallbackBehavior: __expectString(output.FallbackBehavior),
    HeaderName: __expectString(output.HeaderName),
  } as any;
};

const deserializeAws_json1_1GeoMatchStatement = (output: any, context: __SerdeContext): GeoMatchStatement => {
  return {
    CountryCodes:
      output.CountryCodes !== undefined && output.CountryCodes !== null
        ? deserializeAws_json1_1CountryCodes(output.CountryCodes, context)
        : undefined,
    ForwardedIPConfig:
      output.ForwardedIPConfig !== undefined && output.ForwardedIPConfig !== null
        ? deserializeAws_json1_1ForwardedIPConfig(output.ForwardedIPConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetIPSetResponse = (output: any, context: __SerdeContext): GetIPSetResponse => {
  return {
    IPSet:
      output.IPSet !== undefined && output.IPSet !== null
        ? deserializeAws_json1_1IPSet(output.IPSet, context)
        : undefined,
    LockToken: __expectString(output.LockToken),
  } as any;
};

const deserializeAws_json1_1GetLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLoggingConfigurationResponse => {
  return {
    LoggingConfiguration:
      output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
        ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetManagedRuleSetResponse = (
  output: any,
  context: __SerdeContext
): GetManagedRuleSetResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    ManagedRuleSet:
      output.ManagedRuleSet !== undefined && output.ManagedRuleSet !== null
        ? deserializeAws_json1_1ManagedRuleSet(output.ManagedRuleSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPermissionPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetPermissionPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedStatementManagedKeysResponse => {
  return {
    ManagedKeysIPV4:
      output.ManagedKeysIPV4 !== undefined && output.ManagedKeysIPV4 !== null
        ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV4, context)
        : undefined,
    ManagedKeysIPV6:
      output.ManagedKeysIPV6 !== undefined && output.ManagedKeysIPV6 !== null
        ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV6, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): GetRegexPatternSetResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    RegexPatternSet:
      output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
        ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRuleGroupResponse = (output: any, context: __SerdeContext): GetRuleGroupResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    RuleGroup:
      output.RuleGroup !== undefined && output.RuleGroup !== null
        ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSampledRequestsResponse = (
  output: any,
  context: __SerdeContext
): GetSampledRequestsResponse => {
  return {
    PopulationSize: __expectNumber(output.PopulationSize),
    SampledRequests:
      output.SampledRequests !== undefined && output.SampledRequests !== null
        ? deserializeAws_json1_1SampledHTTPRequests(output.SampledRequests, context)
        : undefined,
    TimeWindow:
      output.TimeWindow !== undefined && output.TimeWindow !== null
        ? deserializeAws_json1_1TimeWindow(output.TimeWindow, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWebACLForResourceResponse = (
  output: any,
  context: __SerdeContext
): GetWebACLForResourceResponse => {
  return {
    WebACL:
      output.WebACL !== undefined && output.WebACL !== null
        ? deserializeAws_json1_1WebACL(output.WebACL, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWebACLResponse = (output: any, context: __SerdeContext): GetWebACLResponse => {
  return {
    LockToken: __expectString(output.LockToken),
    WebACL:
      output.WebACL !== undefined && output.WebACL !== null
        ? deserializeAws_json1_1WebACL(output.WebACL, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HTTPHeader = (output: any, context: __SerdeContext): HTTPHeader => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1HTTPHeaders = (output: any, context: __SerdeContext): HTTPHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HTTPHeader(entry, context);
    });
};

const deserializeAws_json1_1HTTPRequest = (output: any, context: __SerdeContext): HTTPRequest => {
  return {
    ClientIP: __expectString(output.ClientIP),
    Country: __expectString(output.Country),
    HTTPVersion: __expectString(output.HTTPVersion),
    Headers:
      output.Headers !== undefined && output.Headers !== null
        ? deserializeAws_json1_1HTTPHeaders(output.Headers, context)
        : undefined,
    Method: __expectString(output.Method),
    URI: __expectString(output.URI),
  } as any;
};

const deserializeAws_json1_1IPAddresses = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1IPSet = (output: any, context: __SerdeContext): IPSet => {
  return {
    ARN: __expectString(output.ARN),
    Addresses:
      output.Addresses !== undefined && output.Addresses !== null
        ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
        : undefined,
    Description: __expectString(output.Description),
    IPAddressVersion: __expectString(output.IPAddressVersion),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1IPSetForwardedIPConfig = (output: any, context: __SerdeContext): IPSetForwardedIPConfig => {
  return {
    FallbackBehavior: __expectString(output.FallbackBehavior),
    HeaderName: __expectString(output.HeaderName),
    Position: __expectString(output.Position),
  } as any;
};

const deserializeAws_json1_1IPSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): IPSetReferenceStatement => {
  return {
    ARN: __expectString(output.ARN),
    IPSetForwardedIPConfig:
      output.IPSetForwardedIPConfig !== undefined && output.IPSetForwardedIPConfig !== null
        ? deserializeAws_json1_1IPSetForwardedIPConfig(output.IPSetForwardedIPConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IPSetSummaries = (output: any, context: __SerdeContext): IPSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IPSetSummary(entry, context);
    });
};

const deserializeAws_json1_1IPSetSummary = (output: any, context: __SerdeContext): IPSetSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1JsonBody = (output: any, context: __SerdeContext): JsonBody => {
  return {
    InvalidFallbackBehavior: __expectString(output.InvalidFallbackBehavior),
    MatchPattern:
      output.MatchPattern !== undefined && output.MatchPattern !== null
        ? deserializeAws_json1_1JsonMatchPattern(output.MatchPattern, context)
        : undefined,
    MatchScope: __expectString(output.MatchScope),
  } as any;
};

const deserializeAws_json1_1JsonMatchPattern = (output: any, context: __SerdeContext): JsonMatchPattern => {
  return {
    All: output.All !== undefined && output.All !== null ? deserializeAws_json1_1All(output.All, context) : undefined,
    IncludedPaths:
      output.IncludedPaths !== undefined && output.IncludedPaths !== null
        ? deserializeAws_json1_1JsonPointerPaths(output.IncludedPaths, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1JsonPointerPaths = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Label = (output: any, context: __SerdeContext): Label => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1LabelMatchStatement = (output: any, context: __SerdeContext): LabelMatchStatement => {
  return {
    Key: __expectString(output.Key),
    Scope: __expectString(output.Scope),
  } as any;
};

const deserializeAws_json1_1LabelNameCondition = (output: any, context: __SerdeContext): LabelNameCondition => {
  return {
    LabelName: __expectString(output.LabelName),
  } as any;
};

const deserializeAws_json1_1Labels = (output: any, context: __SerdeContext): Label[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Label(entry, context);
    });
};

const deserializeAws_json1_1LabelSummaries = (output: any, context: __SerdeContext): LabelSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LabelSummary(entry, context);
    });
};

const deserializeAws_json1_1LabelSummary = (output: any, context: __SerdeContext): LabelSummary => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupsResponse => {
  return {
    ManagedRuleGroups:
      output.ManagedRuleGroups !== undefined && output.ManagedRuleGroups !== null
        ? deserializeAws_json1_1ManagedRuleGroupSummaries(output.ManagedRuleGroups, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupVersionsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Versions:
      output.Versions !== undefined && output.Versions !== null
        ? deserializeAws_json1_1ManagedRuleGroupVersions(output.Versions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListIPSetsResponse = (output: any, context: __SerdeContext): ListIPSetsResponse => {
  return {
    IPSets:
      output.IPSets !== undefined && output.IPSets !== null
        ? deserializeAws_json1_1IPSetSummaries(output.IPSets, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListLoggingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLoggingConfigurationsResponse => {
  return {
    LoggingConfigurations:
      output.LoggingConfigurations !== undefined && output.LoggingConfigurations !== null
        ? deserializeAws_json1_1LoggingConfigurations(output.LoggingConfigurations, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListManagedRuleSetsResponse = (
  output: any,
  context: __SerdeContext
): ListManagedRuleSetsResponse => {
  return {
    ManagedRuleSets:
      output.ManagedRuleSets !== undefined && output.ManagedRuleSets !== null
        ? deserializeAws_json1_1ManagedRuleSetSummaries(output.ManagedRuleSets, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListRegexPatternSetsResponse = (
  output: any,
  context: __SerdeContext
): ListRegexPatternSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RegexPatternSets:
      output.RegexPatternSets !== undefined && output.RegexPatternSets !== null
        ? deserializeAws_json1_1RegexPatternSetSummaries(output.RegexPatternSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourcesForWebACLResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesForWebACLResponse => {
  return {
    ResourceArns:
      output.ResourceArns !== undefined && output.ResourceArns !== null
        ? deserializeAws_json1_1ResourceArns(output.ResourceArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRuleGroupsResponse = (output: any, context: __SerdeContext): ListRuleGroupsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RuleGroups:
      output.RuleGroups !== undefined && output.RuleGroups !== null
        ? deserializeAws_json1_1RuleGroupSummaries(output.RuleGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    TagInfoForResource:
      output.TagInfoForResource !== undefined && output.TagInfoForResource !== null
        ? deserializeAws_json1_1TagInfoForResource(output.TagInfoForResource, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListWebACLsResponse = (output: any, context: __SerdeContext): ListWebACLsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    WebACLs:
      output.WebACLs !== undefined && output.WebACLs !== null
        ? deserializeAws_json1_1WebACLSummaries(output.WebACLs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LogDestinationConfigs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogDestinationConfigs:
      output.LogDestinationConfigs !== undefined && output.LogDestinationConfigs !== null
        ? deserializeAws_json1_1LogDestinationConfigs(output.LogDestinationConfigs, context)
        : undefined,
    LoggingFilter:
      output.LoggingFilter !== undefined && output.LoggingFilter !== null
        ? deserializeAws_json1_1LoggingFilter(output.LoggingFilter, context)
        : undefined,
    ManagedByFirewallManager: __expectBoolean(output.ManagedByFirewallManager),
    RedactedFields:
      output.RedactedFields !== undefined && output.RedactedFields !== null
        ? deserializeAws_json1_1RedactedFields(output.RedactedFields, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_json1_1LoggingConfigurations = (output: any, context: __SerdeContext): LoggingConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoggingConfiguration(entry, context);
    });
};

const deserializeAws_json1_1LoggingFilter = (output: any, context: __SerdeContext): LoggingFilter => {
  return {
    DefaultBehavior: __expectString(output.DefaultBehavior),
    Filters:
      output.Filters !== undefined && output.Filters !== null
        ? deserializeAws_json1_1Filters(output.Filters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedRuleGroupStatement = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupStatement => {
  return {
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
        : undefined,
    Name: __expectString(output.Name),
    ScopeDownStatement:
      output.ScopeDownStatement !== undefined && output.ScopeDownStatement !== null
        ? deserializeAws_json1_1Statement(output.ScopeDownStatement, context)
        : undefined,
    VendorName: __expectString(output.VendorName),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1ManagedRuleGroupSummaries = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ManagedRuleGroupSummary(entry, context);
    });
};

const deserializeAws_json1_1ManagedRuleGroupSummary = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupSummary => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    VendorName: __expectString(output.VendorName),
  } as any;
};

const deserializeAws_json1_1ManagedRuleGroupVersion = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupVersion => {
  return {
    LastUpdateTimestamp:
      output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
        ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ManagedRuleGroupVersions = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ManagedRuleGroupVersion(entry, context);
    });
};

const deserializeAws_json1_1ManagedRuleSet = (output: any, context: __SerdeContext): ManagedRuleSet => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    Name: __expectString(output.Name),
    PublishedVersions:
      output.PublishedVersions !== undefined && output.PublishedVersions !== null
        ? deserializeAws_json1_1PublishedVersions(output.PublishedVersions, context)
        : undefined,
    RecommendedVersion: __expectString(output.RecommendedVersion),
  } as any;
};

const deserializeAws_json1_1ManagedRuleSetSummaries = (
  output: any,
  context: __SerdeContext
): ManagedRuleSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ManagedRuleSetSummary(entry, context);
    });
};

const deserializeAws_json1_1ManagedRuleSetSummary = (output: any, context: __SerdeContext): ManagedRuleSetSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ManagedRuleSetVersion = (output: any, context: __SerdeContext): ManagedRuleSetVersion => {
  return {
    AssociatedRuleGroupArn: __expectString(output.AssociatedRuleGroupArn),
    Capacity: __expectNumber(output.Capacity),
    ExpiryTimestamp:
      output.ExpiryTimestamp !== undefined && output.ExpiryTimestamp !== null
        ? new Date(Math.round(output.ExpiryTimestamp * 1000))
        : undefined,
    ForecastedLifetime: __expectNumber(output.ForecastedLifetime),
    LastUpdateTimestamp:
      output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
        ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
        : undefined,
    PublishTimestamp:
      output.PublishTimestamp !== undefined && output.PublishTimestamp !== null
        ? new Date(Math.round(output.PublishTimestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1Method = (output: any, context: __SerdeContext): Method => {
  return {} as any;
};

const deserializeAws_json1_1NoneAction = (output: any, context: __SerdeContext): NoneAction => {
  return {} as any;
};

const deserializeAws_json1_1NotStatement = (output: any, context: __SerdeContext): NotStatement => {
  return {
    Statement:
      output.Statement !== undefined && output.Statement !== null
        ? deserializeAws_json1_1Statement(output.Statement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OrStatement = (output: any, context: __SerdeContext): OrStatement => {
  return {
    Statements:
      output.Statements !== undefined && output.Statements !== null
        ? deserializeAws_json1_1Statements(output.Statements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OverrideAction = (output: any, context: __SerdeContext): OverrideAction => {
  return {
    Count:
      output.Count !== undefined && output.Count !== null
        ? deserializeAws_json1_1CountAction(output.Count, context)
        : undefined,
    None:
      output.None !== undefined && output.None !== null
        ? deserializeAws_json1_1NoneAction(output.None, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PublishedVersions = (
  output: any,
  context: __SerdeContext
): { [key: string]: ManagedRuleSetVersion } => {
  return Object.entries(output).reduce((acc: { [key: string]: ManagedRuleSetVersion }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1ManagedRuleSetVersion(value, context),
    };
  }, {});
};

const deserializeAws_json1_1PutLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutLoggingConfigurationResponse => {
  return {
    LoggingConfiguration:
      output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
        ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutManagedRuleSetVersionsResponse = (
  output: any,
  context: __SerdeContext
): PutManagedRuleSetVersionsResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

const deserializeAws_json1_1PutPermissionPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutPermissionPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1QueryString = (output: any, context: __SerdeContext): QueryString => {
  return {} as any;
};

const deserializeAws_json1_1RateBasedStatement = (output: any, context: __SerdeContext): RateBasedStatement => {
  return {
    AggregateKeyType: __expectString(output.AggregateKeyType),
    ForwardedIPConfig:
      output.ForwardedIPConfig !== undefined && output.ForwardedIPConfig !== null
        ? deserializeAws_json1_1ForwardedIPConfig(output.ForwardedIPConfig, context)
        : undefined,
    Limit: __expectNumber(output.Limit),
    ScopeDownStatement:
      output.ScopeDownStatement !== undefined && output.ScopeDownStatement !== null
        ? deserializeAws_json1_1Statement(output.ScopeDownStatement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RateBasedStatementManagedKeysIPSet = (
  output: any,
  context: __SerdeContext
): RateBasedStatementManagedKeysIPSet => {
  return {
    Addresses:
      output.Addresses !== undefined && output.Addresses !== null
        ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
        : undefined,
    IPAddressVersion: __expectString(output.IPAddressVersion),
  } as any;
};

const deserializeAws_json1_1RedactedFields = (output: any, context: __SerdeContext): FieldToMatch[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FieldToMatch(entry, context);
    });
};

const deserializeAws_json1_1Regex = (output: any, context: __SerdeContext): Regex => {
  return {
    RegexString: __expectString(output.RegexString),
  } as any;
};

const deserializeAws_json1_1RegexPatternSet = (output: any, context: __SerdeContext): RegexPatternSet => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    RegularExpressionList:
      output.RegularExpressionList !== undefined && output.RegularExpressionList !== null
        ? deserializeAws_json1_1RegularExpressionList(output.RegularExpressionList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegexPatternSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): RegexPatternSetReferenceStatement => {
  return {
    ARN: __expectString(output.ARN),
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined && output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegexPatternSetSummaries = (
  output: any,
  context: __SerdeContext
): RegexPatternSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegexPatternSetSummary(entry, context);
    });
};

const deserializeAws_json1_1RegexPatternSetSummary = (output: any, context: __SerdeContext): RegexPatternSetSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1RegularExpressionList = (output: any, context: __SerdeContext): Regex[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Regex(entry, context);
    });
};

const deserializeAws_json1_1ResourceArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1RuleAction(output.Action, context)
        : undefined,
    Name: __expectString(output.Name),
    OverrideAction:
      output.OverrideAction !== undefined && output.OverrideAction !== null
        ? deserializeAws_json1_1OverrideAction(output.OverrideAction, context)
        : undefined,
    Priority: __expectNumber(output.Priority),
    RuleLabels:
      output.RuleLabels !== undefined && output.RuleLabels !== null
        ? deserializeAws_json1_1Labels(output.RuleLabels, context)
        : undefined,
    Statement:
      output.Statement !== undefined && output.Statement !== null
        ? deserializeAws_json1_1Statement(output.Statement, context)
        : undefined,
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RuleAction = (output: any, context: __SerdeContext): RuleAction => {
  return {
    Allow:
      output.Allow !== undefined && output.Allow !== null
        ? deserializeAws_json1_1AllowAction(output.Allow, context)
        : undefined,
    Block:
      output.Block !== undefined && output.Block !== null
        ? deserializeAws_json1_1BlockAction(output.Block, context)
        : undefined,
    Count:
      output.Count !== undefined && output.Count !== null
        ? deserializeAws_json1_1CountAction(output.Count, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return {
    ARN: __expectString(output.ARN),
    AvailableLabels:
      output.AvailableLabels !== undefined && output.AvailableLabels !== null
        ? deserializeAws_json1_1LabelSummaries(output.AvailableLabels, context)
        : undefined,
    Capacity: __expectNumber(output.Capacity),
    ConsumedLabels:
      output.ConsumedLabels !== undefined && output.ConsumedLabels !== null
        ? deserializeAws_json1_1LabelSummaries(output.ConsumedLabels, context)
        : undefined,
    CustomResponseBodies:
      output.CustomResponseBodies !== undefined && output.CustomResponseBodies !== null
        ? deserializeAws_json1_1CustomResponseBodies(output.CustomResponseBodies, context)
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    Name: __expectString(output.Name),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1Rules(output.Rules, context)
        : undefined,
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RuleGroupReferenceStatement = (
  output: any,
  context: __SerdeContext
): RuleGroupReferenceStatement => {
  return {
    ARN: __expectString(output.ARN),
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RuleGroupSummaries = (output: any, context: __SerdeContext): RuleGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RuleGroupSummary(entry, context);
    });
};

const deserializeAws_json1_1RuleGroupSummary = (output: any, context: __SerdeContext): RuleGroupSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1Rules = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Rule(entry, context);
    });
};

const deserializeAws_json1_1RuleSummaries = (output: any, context: __SerdeContext): RuleSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RuleSummary(entry, context);
    });
};

const deserializeAws_json1_1RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1RuleAction(output.Action, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SampledHTTPRequest = (output: any, context: __SerdeContext): SampledHTTPRequest => {
  return {
    Action: __expectString(output.Action),
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_json1_1Labels(output.Labels, context)
        : undefined,
    Request:
      output.Request !== undefined && output.Request !== null
        ? deserializeAws_json1_1HTTPRequest(output.Request, context)
        : undefined,
    RequestHeadersInserted:
      output.RequestHeadersInserted !== undefined && output.RequestHeadersInserted !== null
        ? deserializeAws_json1_1HTTPHeaders(output.RequestHeadersInserted, context)
        : undefined,
    ResponseCodeSent: __expectNumber(output.ResponseCodeSent),
    RuleNameWithinRuleGroup: __expectString(output.RuleNameWithinRuleGroup),
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Weight: __expectNumber(output.Weight),
  } as any;
};

const deserializeAws_json1_1SampledHTTPRequests = (output: any, context: __SerdeContext): SampledHTTPRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SampledHTTPRequest(entry, context);
    });
};

const deserializeAws_json1_1SingleHeader = (output: any, context: __SerdeContext): SingleHeader => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SingleQueryArgument = (output: any, context: __SerdeContext): SingleQueryArgument => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SizeConstraintStatement = (
  output: any,
  context: __SerdeContext
): SizeConstraintStatement => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    Size: __expectNumber(output.Size),
    TextTransformations:
      output.TextTransformations !== undefined && output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SqliMatchStatement = (output: any, context: __SerdeContext): SqliMatchStatement => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined && output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Statement = (output: any, context: __SerdeContext): Statement => {
  return {
    AndStatement:
      output.AndStatement !== undefined && output.AndStatement !== null
        ? deserializeAws_json1_1AndStatement(output.AndStatement, context)
        : undefined,
    ByteMatchStatement:
      output.ByteMatchStatement !== undefined && output.ByteMatchStatement !== null
        ? deserializeAws_json1_1ByteMatchStatement(output.ByteMatchStatement, context)
        : undefined,
    GeoMatchStatement:
      output.GeoMatchStatement !== undefined && output.GeoMatchStatement !== null
        ? deserializeAws_json1_1GeoMatchStatement(output.GeoMatchStatement, context)
        : undefined,
    IPSetReferenceStatement:
      output.IPSetReferenceStatement !== undefined && output.IPSetReferenceStatement !== null
        ? deserializeAws_json1_1IPSetReferenceStatement(output.IPSetReferenceStatement, context)
        : undefined,
    LabelMatchStatement:
      output.LabelMatchStatement !== undefined && output.LabelMatchStatement !== null
        ? deserializeAws_json1_1LabelMatchStatement(output.LabelMatchStatement, context)
        : undefined,
    ManagedRuleGroupStatement:
      output.ManagedRuleGroupStatement !== undefined && output.ManagedRuleGroupStatement !== null
        ? deserializeAws_json1_1ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
        : undefined,
    NotStatement:
      output.NotStatement !== undefined && output.NotStatement !== null
        ? deserializeAws_json1_1NotStatement(output.NotStatement, context)
        : undefined,
    OrStatement:
      output.OrStatement !== undefined && output.OrStatement !== null
        ? deserializeAws_json1_1OrStatement(output.OrStatement, context)
        : undefined,
    RateBasedStatement:
      output.RateBasedStatement !== undefined && output.RateBasedStatement !== null
        ? deserializeAws_json1_1RateBasedStatement(output.RateBasedStatement, context)
        : undefined,
    RegexPatternSetReferenceStatement:
      output.RegexPatternSetReferenceStatement !== undefined && output.RegexPatternSetReferenceStatement !== null
        ? deserializeAws_json1_1RegexPatternSetReferenceStatement(output.RegexPatternSetReferenceStatement, context)
        : undefined,
    RuleGroupReferenceStatement:
      output.RuleGroupReferenceStatement !== undefined && output.RuleGroupReferenceStatement !== null
        ? deserializeAws_json1_1RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
        : undefined,
    SizeConstraintStatement:
      output.SizeConstraintStatement !== undefined && output.SizeConstraintStatement !== null
        ? deserializeAws_json1_1SizeConstraintStatement(output.SizeConstraintStatement, context)
        : undefined,
    SqliMatchStatement:
      output.SqliMatchStatement !== undefined && output.SqliMatchStatement !== null
        ? deserializeAws_json1_1SqliMatchStatement(output.SqliMatchStatement, context)
        : undefined,
    XssMatchStatement:
      output.XssMatchStatement !== undefined && output.XssMatchStatement !== null
        ? deserializeAws_json1_1XssMatchStatement(output.XssMatchStatement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Statements = (output: any, context: __SerdeContext): Statement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Statement(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagInfoForResource = (output: any, context: __SerdeContext): TagInfoForResource => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TextTransformation = (output: any, context: __SerdeContext): TextTransformation => {
  return {
    Priority: __expectNumber(output.Priority),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1TextTransformations = (output: any, context: __SerdeContext): TextTransformation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TextTransformation(entry, context);
    });
};

const deserializeAws_json1_1TimeWindow = (output: any, context: __SerdeContext): TimeWindow => {
  return {
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateIPSetResponse = (output: any, context: __SerdeContext): UpdateIPSetResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

const deserializeAws_json1_1UpdateManagedRuleSetVersionExpiryDateResponse = (
  output: any,
  context: __SerdeContext
): UpdateManagedRuleSetVersionExpiryDateResponse => {
  return {
    ExpiringVersion: __expectString(output.ExpiringVersion),
    ExpiryTimestamp:
      output.ExpiryTimestamp !== undefined && output.ExpiryTimestamp !== null
        ? new Date(Math.round(output.ExpiryTimestamp * 1000))
        : undefined,
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

const deserializeAws_json1_1UpdateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateRegexPatternSetResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

const deserializeAws_json1_1UpdateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateRuleGroupResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

const deserializeAws_json1_1UpdateWebACLResponse = (output: any, context: __SerdeContext): UpdateWebACLResponse => {
  return {
    NextLockToken: __expectString(output.NextLockToken),
  } as any;
};

const deserializeAws_json1_1UriPath = (output: any, context: __SerdeContext): UriPath => {
  return {} as any;
};

const deserializeAws_json1_1VisibilityConfig = (output: any, context: __SerdeContext): VisibilityConfig => {
  return {
    CloudWatchMetricsEnabled: __expectBoolean(output.CloudWatchMetricsEnabled),
    MetricName: __expectString(output.MetricName),
    SampledRequestsEnabled: __expectBoolean(output.SampledRequestsEnabled),
  } as any;
};

const deserializeAws_json1_1WAFAssociatedItemException = (
  output: any,
  context: __SerdeContext
): WAFAssociatedItemException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFDuplicateItemException = (
  output: any,
  context: __SerdeContext
): WAFDuplicateItemException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFExpiredManagedRuleGroupVersionException = (
  output: any,
  context: __SerdeContext
): WAFExpiredManagedRuleGroupVersionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFInternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidOperationException = (
  output: any,
  context: __SerdeContext
): WAFInvalidOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidParameterException = (
  output: any,
  context: __SerdeContext
): WAFInvalidParameterException => {
  return {
    Field: __expectString(output.Field),
    Parameter: __expectString(output.Parameter),
    Reason: __expectString(output.Reason),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidPermissionPolicyException = (
  output: any,
  context: __SerdeContext
): WAFInvalidPermissionPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidResourceException = (
  output: any,
  context: __SerdeContext
): WAFInvalidResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFLimitsExceededException = (
  output: any,
  context: __SerdeContext
): WAFLimitsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFNonexistentItemException = (
  output: any,
  context: __SerdeContext
): WAFNonexistentItemException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFOptimisticLockException = (
  output: any,
  context: __SerdeContext
): WAFOptimisticLockException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFServiceLinkedRoleErrorException = (
  output: any,
  context: __SerdeContext
): WAFServiceLinkedRoleErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFSubscriptionNotFoundException = (
  output: any,
  context: __SerdeContext
): WAFSubscriptionNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFTagOperationException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFTagOperationInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationInternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WAFUnavailableEntityException = (
  output: any,
  context: __SerdeContext
): WAFUnavailableEntityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WebACL = (output: any, context: __SerdeContext): WebACL => {
  return {
    ARN: __expectString(output.ARN),
    Capacity: __expectNumber(output.Capacity),
    CustomResponseBodies:
      output.CustomResponseBodies !== undefined && output.CustomResponseBodies !== null
        ? deserializeAws_json1_1CustomResponseBodies(output.CustomResponseBodies, context)
        : undefined,
    DefaultAction:
      output.DefaultAction !== undefined && output.DefaultAction !== null
        ? deserializeAws_json1_1DefaultAction(output.DefaultAction, context)
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LabelNamespace: __expectString(output.LabelNamespace),
    ManagedByFirewallManager: __expectBoolean(output.ManagedByFirewallManager),
    Name: __expectString(output.Name),
    PostProcessFirewallManagerRuleGroups:
      output.PostProcessFirewallManagerRuleGroups !== undefined && output.PostProcessFirewallManagerRuleGroups !== null
        ? deserializeAws_json1_1FirewallManagerRuleGroups(output.PostProcessFirewallManagerRuleGroups, context)
        : undefined,
    PreProcessFirewallManagerRuleGroups:
      output.PreProcessFirewallManagerRuleGroups !== undefined && output.PreProcessFirewallManagerRuleGroups !== null
        ? deserializeAws_json1_1FirewallManagerRuleGroups(output.PreProcessFirewallManagerRuleGroups, context)
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1Rules(output.Rules, context)
        : undefined,
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WebACLSummaries = (output: any, context: __SerdeContext): WebACLSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WebACLSummary(entry, context);
    });
};

const deserializeAws_json1_1WebACLSummary = (output: any, context: __SerdeContext): WebACLSummary => {
  return {
    ARN: __expectString(output.ARN),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LockToken: __expectString(output.LockToken),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1XssMatchStatement = (output: any, context: __SerdeContext): XssMatchStatement => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined && output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
