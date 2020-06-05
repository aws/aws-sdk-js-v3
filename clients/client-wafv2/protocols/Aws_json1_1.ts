import {
  AssociateWebACLCommandInput,
  AssociateWebACLCommandOutput
} from "../commands/AssociateWebACLCommand";
import {
  CheckCapacityCommandInput,
  CheckCapacityCommandOutput
} from "../commands/CheckCapacityCommand";
import {
  CreateIPSetCommandInput,
  CreateIPSetCommandOutput
} from "../commands/CreateIPSetCommand";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput
} from "../commands/CreateRegexPatternSetCommand";
import {
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput
} from "../commands/CreateRuleGroupCommand";
import {
  CreateWebACLCommandInput,
  CreateWebACLCommandOutput
} from "../commands/CreateWebACLCommand";
import {
  DeleteIPSetCommandInput,
  DeleteIPSetCommandOutput
} from "../commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput
} from "../commands/DeleteLoggingConfigurationCommand";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput
} from "../commands/DeleteRegexPatternSetCommand";
import {
  DeleteRuleGroupCommandInput,
  DeleteRuleGroupCommandOutput
} from "../commands/DeleteRuleGroupCommand";
import {
  DeleteWebACLCommandInput,
  DeleteWebACLCommandOutput
} from "../commands/DeleteWebACLCommand";
import {
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput
} from "../commands/DescribeManagedRuleGroupCommand";
import {
  DisassociateWebACLCommandInput,
  DisassociateWebACLCommandOutput
} from "../commands/DisassociateWebACLCommand";
import {
  GetIPSetCommandInput,
  GetIPSetCommandOutput
} from "../commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput
} from "../commands/GetLoggingConfigurationCommand";
import {
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput
} from "../commands/GetRateBasedStatementManagedKeysCommand";
import {
  GetRegexPatternSetCommandInput,
  GetRegexPatternSetCommandOutput
} from "../commands/GetRegexPatternSetCommand";
import {
  GetRuleGroupCommandInput,
  GetRuleGroupCommandOutput
} from "../commands/GetRuleGroupCommand";
import {
  GetSampledRequestsCommandInput,
  GetSampledRequestsCommandOutput
} from "../commands/GetSampledRequestsCommand";
import {
  GetWebACLCommandInput,
  GetWebACLCommandOutput
} from "../commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput
} from "../commands/GetWebACLForResourceCommand";
import {
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput
} from "../commands/ListAvailableManagedRuleGroupsCommand";
import {
  ListIPSetsCommandInput,
  ListIPSetsCommandOutput
} from "../commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput
} from "../commands/ListLoggingConfigurationsCommand";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput
} from "../commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput
} from "../commands/ListResourcesForWebACLCommand";
import {
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput
} from "../commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListWebACLsCommandInput,
  ListWebACLsCommandOutput
} from "../commands/ListWebACLsCommand";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput
} from "../commands/PutLoggingConfigurationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput
} from "../commands/UpdateIPSetCommand";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput
} from "../commands/UpdateRegexPatternSetCommand";
import {
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput
} from "../commands/UpdateRuleGroupCommand";
import {
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput
} from "../commands/UpdateWebACLCommand";
import {
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
  DefaultAction,
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
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
  GeoMatchStatement,
  GetIPSetRequest,
  GetIPSetResponse,
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
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
  IPSetReferenceStatement,
  IPSetSummary,
  ListAvailableManagedRuleGroupsRequest,
  ListAvailableManagedRuleGroupsResponse,
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
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
  ManagedRuleGroupStatement,
  ManagedRuleGroupSummary,
  Method,
  NoneAction,
  NotStatement,
  OrStatement,
  OverrideAction,
  PutLoggingConfigurationRequest,
  PutLoggingConfigurationResponse,
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
  UpdateRegexPatternSetRequest,
  UpdateRegexPatternSetResponse,
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateWebACLRequest,
  UpdateWebACLResponse,
  UriPath,
  VisibilityConfig,
  WAFAssociatedItemException,
  WAFDuplicateItemException,
  WAFInternalErrorException,
  WAFInvalidParameterException,
  WAFInvalidResourceException,
  WAFLimitsExceededException,
  WAFNonexistentItemException,
  WAFOptimisticLockException,
  WAFServiceLinkedRoleErrorException,
  WAFTagOperationException,
  WAFTagOperationInternalErrorException,
  WAFUnavailableEntityException,
  WebACL,
  WebACLSummary,
  XssMatchStatement
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateWebACLCommand = async (
  input: AssociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.AssociateWebACL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckCapacityCommand = async (
  input: CheckCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.CheckCapacity"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CheckCapacityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.CreateIPSet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.CreateRegexPatternSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.CreateRuleGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWebACLCommand = async (
  input: CreateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.CreateWebACL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DeleteIPSet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DeleteLoggingConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegexPatternSetCommand = async (
  input: DeleteRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DeleteRegexPatternSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DeleteRuleGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebACLCommand = async (
  input: DeleteWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DeleteWebACL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeManagedRuleGroupCommand = async (
  input: DescribeManagedRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DescribeManagedRuleGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeManagedRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateWebACLCommand = async (
  input: DisassociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.DisassociateWebACL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetIPSet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetLoggingConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLoggingConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = async (
  input: GetRateBasedStatementManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetRateBasedStatementManagedKeys"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRateBasedStatementManagedKeysRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegexPatternSetCommand = async (
  input: GetRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetRegexPatternSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRuleGroupCommand = async (
  input: GetRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetRuleGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSampledRequestsCommand = async (
  input: GetSampledRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetSampledRequests"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSampledRequestsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWebACLCommand = async (
  input: GetWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetWebACL"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.GetWebACLForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetWebACLForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = async (
  input: ListAvailableManagedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListAvailableManagedRuleGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAvailableManagedRuleGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListIPSets"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListLoggingConfigurations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLoggingConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRegexPatternSetsCommand = async (
  input: ListRegexPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListRegexPatternSets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRegexPatternSetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesForWebACLCommand = async (
  input: ListResourcesForWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListResourcesForWebACL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourcesForWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRuleGroupsCommand = async (
  input: ListRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListRuleGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRuleGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWebACLsCommand = async (
  input: ListWebACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.ListWebACLs"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.PutLoggingConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLoggingConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.TagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.UpdateIPSet"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRegexPatternSetCommand = async (
  input: UpdateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.UpdateRegexPatternSet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.UpdateRuleGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWebACLCommand = async (
  input: UpdateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSWAF_20190729.UpdateWebACL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateWebACLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateWebACLResponse(data, context);
  const response: AssociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CheckCapacityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckCapacityResponse(data, context);
  const response: CheckCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CheckCapacityResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIPSetResponse(data, context);
  const response: CreateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIPSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRegexPatternSetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRegexPatternSetResponse(data, context);
  const response: CreateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRegexPatternSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRuleGroupResponse(data, context);
  const response: CreateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRuleGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWebACLResponse(data, context);
  const response: CreateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIPSetResponse(data, context);
  const response: DeleteIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIPSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLoggingConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoggingConfigurationResponse(
    data,
    context
  );
  const response: DeleteLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoggingConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRegexPatternSetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRegexPatternSetResponse(data, context);
  const response: DeleteRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRegexPatternSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRuleGroupResponse(data, context);
  const response: DeleteRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRuleGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWebACLResponse(data, context);
  const response: DeleteWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.wafv2#WAFAssociatedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeManagedRuleGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeManagedRuleGroupResponse(
    data,
    context
  );
  const response: DescribeManagedRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeManagedRuleGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeManagedRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateWebACLCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateWebACLResponse(data, context);
  const response: DisassociateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetIPSetResponse(data, context);
  const response: GetIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIPSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoggingConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoggingConfigurationResponse(
    data,
    context
  );
  const response: GetLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoggingConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse(
    data,
    context
  );
  const response: GetRateBasedStatementManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRateBasedStatementManagedKeysResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRegexPatternSetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegexPatternSetResponse(data, context);
  const response: GetRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRegexPatternSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRuleGroupResponse(data, context);
  const response: GetRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRuleGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSampledRequestsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSampledRequestsResponse(data, context);
  const response: GetSampledRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSampledRequestsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSampledRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWebACLResponse(data, context);
  const response: GetWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetWebACLForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWebACLForResourceResponse(data, context);
  const response: GetWebACLForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetWebACLForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWebACLForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse(
    data,
    context
  );
  const response: ListAvailableManagedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAvailableManagedRuleGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIPSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIPSetsResponse(data, context);
  const response: ListIPSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIPSetsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListIPSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLoggingConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLoggingConfigurationsResponse(
    data,
    context
  );
  const response: ListLoggingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLoggingConfigurationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLoggingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRegexPatternSetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRegexPatternSetsResponse(data, context);
  const response: ListRegexPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRegexPatternSetsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRegexPatternSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourcesForWebACLCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesForWebACLResponse(
    data,
    context
  );
  const response: ListResourcesForWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourcesForWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesForWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRuleGroupsResponse(data, context);
  const response: ListRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRuleGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListWebACLsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWebACLsResponse(data, context);
  const response: ListWebACLsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWebACLsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWebACLsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutLoggingConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLoggingConfigurationResponse(
    data,
    context
  );
  const response: PutLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLoggingConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFServiceLinkedRoleErrorException":
    case "com.amazonaws.wafv2#WAFServiceLinkedRoleErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafv2#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateIPSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateIPSetResponse(data, context);
  const response: UpdateIPSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateIPSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateIPSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRegexPatternSetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRegexPatternSetResponse(data, context);
  const response: UpdateRegexPatternSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRegexPatternSetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRegexPatternSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleGroupResponse(data, context);
  const response: UpdateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRuleGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateWebACLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWebACLResponse(data, context);
  const response: UpdateWebACLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateWebACLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWebACLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.wafv2#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafv2#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafv2#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.wafv2#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafv2#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafv2#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.wafv2#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafv2#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1WAFAssociatedItemException(
    body,
    context
  );
  const contents: WAFAssociatedItemException = {
    name: "WAFAssociatedItemException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFDuplicateItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFDuplicateItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFDuplicateItemException(
    body,
    context
  );
  const contents: WAFDuplicateItemException = {
    name: "WAFDuplicateItemException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInternalErrorException(
    body,
    context
  );
  const contents: WAFInternalErrorException = {
    name: "WAFInternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFInvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidParameterException(
    body,
    context
  );
  const contents: WAFInvalidParameterException = {
    name: "WAFInvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFInvalidResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidResourceException(
    body,
    context
  );
  const contents: WAFInvalidResourceException = {
    name: "WAFInvalidResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFLimitsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFLimitsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFLimitsExceededException(
    body,
    context
  );
  const contents: WAFLimitsExceededException = {
    name: "WAFLimitsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFNonexistentItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonexistentItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFNonexistentItemException(
    body,
    context
  );
  const contents: WAFNonexistentItemException = {
    name: "WAFNonexistentItemException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFOptimisticLockExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFOptimisticLockException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFOptimisticLockException(
    body,
    context
  );
  const contents: WAFOptimisticLockException = {
    name: "WAFOptimisticLockException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFServiceLinkedRoleErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFServiceLinkedRoleErrorException(
    body,
    context
  );
  const contents: WAFServiceLinkedRoleErrorException = {
    name: "WAFServiceLinkedRoleErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFTagOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFTagOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFTagOperationException(
    body,
    context
  );
  const contents: WAFTagOperationException = {
    name: "WAFTagOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFTagOperationInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFTagOperationInternalErrorException(
    body,
    context
  );
  const contents: WAFTagOperationInternalErrorException = {
    name: "WAFTagOperationInternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WAFUnavailableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFUnavailableEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFUnavailableEntityException(
    body,
    context
  );
  const contents: WAFUnavailableEntityException = {
    name: "WAFUnavailableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AllowAction = (
  input: AllowAction,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1AllQueryArguments = (
  input: AllQueryArguments,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1AndStatement = (
  input: AndStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Statements !== undefined && {
      Statements: serializeAws_json1_1Statements(input.Statements, context)
    })
  };
};

const serializeAws_json1_1AssociateWebACLRequest = (
  input: AssociateWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.WebACLArn !== undefined && { WebACLArn: input.WebACLArn })
  };
};

const serializeAws_json1_1BlockAction = (
  input: BlockAction,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1Body = (
  input: Body,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ByteMatchStatement = (
  input: ByteMatchStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.FieldToMatch !== undefined && {
      FieldToMatch: serializeAws_json1_1FieldToMatch(
        input.FieldToMatch,
        context
      )
    }),
    ...(input.PositionalConstraint !== undefined && {
      PositionalConstraint: input.PositionalConstraint
    }),
    ...(input.SearchString !== undefined && {
      SearchString: context.base64Encoder(input.SearchString)
    }),
    ...(input.TextTransformations !== undefined && {
      TextTransformations: serializeAws_json1_1TextTransformations(
        input.TextTransformations,
        context
      )
    })
  };
};

const serializeAws_json1_1CheckCapacityRequest = (
  input: CheckCapacityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1Rules(input.Rules, context)
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1CountAction = (
  input: CountAction,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1CountryCodes = (
  input: (CountryCode | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CreateIPSetRequest = (
  input: CreateIPSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Addresses !== undefined && {
      Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context)
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.IPAddressVersion !== undefined && {
      IPAddressVersion: input.IPAddressVersion
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateRegexPatternSetRequest = (
  input: CreateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RegularExpressionList !== undefined && {
      RegularExpressionList: serializeAws_json1_1RegularExpressionList(
        input.RegularExpressionList,
        context
      )
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateRuleGroupRequest = (
  input: CreateRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Capacity !== undefined && { Capacity: input.Capacity }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1Rules(input.Rules, context)
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.VisibilityConfig !== undefined && {
      VisibilityConfig: serializeAws_json1_1VisibilityConfig(
        input.VisibilityConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateWebACLRequest = (
  input: CreateWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultAction !== undefined && {
      DefaultAction: serializeAws_json1_1DefaultAction(
        input.DefaultAction,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1Rules(input.Rules, context)
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.VisibilityConfig !== undefined && {
      VisibilityConfig: serializeAws_json1_1VisibilityConfig(
        input.VisibilityConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1DefaultAction = (
  input: DefaultAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Allow !== undefined && {
      Allow: serializeAws_json1_1AllowAction(input.Allow, context)
    }),
    ...(input.Block !== undefined && {
      Block: serializeAws_json1_1BlockAction(input.Block, context)
    })
  };
};

const serializeAws_json1_1DeleteIPSetRequest = (
  input: DeleteIPSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1DeleteLoggingConfigurationRequest = (
  input: DeleteLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1DeleteRegexPatternSetRequest = (
  input: DeleteRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1DeleteRuleGroupRequest = (
  input: DeleteRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1DeleteWebACLRequest = (
  input: DeleteWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1DescribeManagedRuleGroupRequest = (
  input: DescribeManagedRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.VendorName !== undefined && { VendorName: input.VendorName })
  };
};

const serializeAws_json1_1DisassociateWebACLRequest = (
  input: DisassociateWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1ExcludedRule = (
  input: ExcludedRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1ExcludedRules = (
  input: ExcludedRule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ExcludedRule(entry, context));
};

const serializeAws_json1_1FieldToMatch = (
  input: FieldToMatch,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllQueryArguments !== undefined && {
      AllQueryArguments: serializeAws_json1_1AllQueryArguments(
        input.AllQueryArguments,
        context
      )
    }),
    ...(input.Body !== undefined && {
      Body: serializeAws_json1_1Body(input.Body, context)
    }),
    ...(input.Method !== undefined && {
      Method: serializeAws_json1_1Method(input.Method, context)
    }),
    ...(input.QueryString !== undefined && {
      QueryString: serializeAws_json1_1QueryString(input.QueryString, context)
    }),
    ...(input.SingleHeader !== undefined && {
      SingleHeader: serializeAws_json1_1SingleHeader(
        input.SingleHeader,
        context
      )
    }),
    ...(input.SingleQueryArgument !== undefined && {
      SingleQueryArgument: serializeAws_json1_1SingleQueryArgument(
        input.SingleQueryArgument,
        context
      )
    }),
    ...(input.UriPath !== undefined && {
      UriPath: serializeAws_json1_1UriPath(input.UriPath, context)
    })
  };
};

const serializeAws_json1_1GeoMatchStatement = (
  input: GeoMatchStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.CountryCodes !== undefined && {
      CountryCodes: serializeAws_json1_1CountryCodes(
        input.CountryCodes,
        context
      )
    })
  };
};

const serializeAws_json1_1GetIPSetRequest = (
  input: GetIPSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1GetLoggingConfigurationRequest = (
  input: GetLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1GetRateBasedStatementManagedKeysRequest = (
  input: GetRateBasedStatementManagedKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleName !== undefined && { RuleName: input.RuleName }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.WebACLId !== undefined && { WebACLId: input.WebACLId }),
    ...(input.WebACLName !== undefined && { WebACLName: input.WebACLName })
  };
};

const serializeAws_json1_1GetRegexPatternSetRequest = (
  input: GetRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1GetRuleGroupRequest = (
  input: GetRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1GetSampledRequestsRequest = (
  input: GetSampledRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems }),
    ...(input.RuleMetricName !== undefined && {
      RuleMetricName: input.RuleMetricName
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.TimeWindow !== undefined && {
      TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context)
    }),
    ...(input.WebAclArn !== undefined && { WebAclArn: input.WebAclArn })
  };
};

const serializeAws_json1_1GetWebACLForResourceRequest = (
  input: GetWebACLForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1GetWebACLRequest = (
  input: GetWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1IPAddresses = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1IPSetReferenceStatement = (
  input: IPSetReferenceStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN !== undefined && { ARN: input.ARN })
  };
};

const serializeAws_json1_1ListAvailableManagedRuleGroupsRequest = (
  input: ListAvailableManagedRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1ListIPSetsRequest = (
  input: ListIPSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1ListLoggingConfigurationsRequest = (
  input: ListLoggingConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1ListRegexPatternSetsRequest = (
  input: ListRegexPatternSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1ListResourcesForWebACLRequest = (
  input: ListResourcesForWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceType !== undefined && {
      ResourceType: input.ResourceType
    }),
    ...(input.WebACLArn !== undefined && { WebACLArn: input.WebACLArn })
  };
};

const serializeAws_json1_1ListRuleGroupsRequest = (
  input: ListRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1ListWebACLsRequest = (
  input: ListWebACLsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && { NextMarker: input.NextMarker }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1LogDestinationConfigs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1LoggingConfiguration = (
  input: LoggingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogDestinationConfigs !== undefined && {
      LogDestinationConfigs: serializeAws_json1_1LogDestinationConfigs(
        input.LogDestinationConfigs,
        context
      )
    }),
    ...(input.RedactedFields !== undefined && {
      RedactedFields: serializeAws_json1_1RedactedFields(
        input.RedactedFields,
        context
      )
    }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1ManagedRuleGroupStatement = (
  input: ManagedRuleGroupStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludedRules !== undefined && {
      ExcludedRules: serializeAws_json1_1ExcludedRules(
        input.ExcludedRules,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.VendorName !== undefined && { VendorName: input.VendorName })
  };
};

const serializeAws_json1_1Method = (
  input: Method,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1NoneAction = (
  input: NoneAction,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1NotStatement = (
  input: NotStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Statement !== undefined && {
      Statement: serializeAws_json1_1Statement(input.Statement, context)
    })
  };
};

const serializeAws_json1_1OrStatement = (
  input: OrStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Statements !== undefined && {
      Statements: serializeAws_json1_1Statements(input.Statements, context)
    })
  };
};

const serializeAws_json1_1OverrideAction = (
  input: OverrideAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Count !== undefined && {
      Count: serializeAws_json1_1CountAction(input.Count, context)
    }),
    ...(input.None !== undefined && {
      None: serializeAws_json1_1NoneAction(input.None, context)
    })
  };
};

const serializeAws_json1_1PutLoggingConfigurationRequest = (
  input: PutLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoggingConfiguration !== undefined && {
      LoggingConfiguration: serializeAws_json1_1LoggingConfiguration(
        input.LoggingConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1QueryString = (
  input: QueryString,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1RateBasedStatement = (
  input: RateBasedStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.AggregateKeyType !== undefined && {
      AggregateKeyType: input.AggregateKeyType
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.ScopeDownStatement !== undefined && {
      ScopeDownStatement: serializeAws_json1_1Statement(
        input.ScopeDownStatement,
        context
      )
    })
  };
};

const serializeAws_json1_1RedactedFields = (
  input: FieldToMatch[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1FieldToMatch(entry, context));
};

const serializeAws_json1_1Regex = (
  input: Regex,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegexString !== undefined && { RegexString: input.RegexString })
  };
};

const serializeAws_json1_1RegexPatternSetReferenceStatement = (
  input: RegexPatternSetReferenceStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN !== undefined && { ARN: input.ARN }),
    ...(input.FieldToMatch !== undefined && {
      FieldToMatch: serializeAws_json1_1FieldToMatch(
        input.FieldToMatch,
        context
      )
    }),
    ...(input.TextTransformations !== undefined && {
      TextTransformations: serializeAws_json1_1TextTransformations(
        input.TextTransformations,
        context
      )
    })
  };
};

const serializeAws_json1_1RegularExpressionList = (
  input: Regex[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Regex(entry, context));
};

const serializeAws_json1_1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && {
      Action: serializeAws_json1_1RuleAction(input.Action, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.OverrideAction !== undefined && {
      OverrideAction: serializeAws_json1_1OverrideAction(
        input.OverrideAction,
        context
      )
    }),
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.Statement !== undefined && {
      Statement: serializeAws_json1_1Statement(input.Statement, context)
    }),
    ...(input.VisibilityConfig !== undefined && {
      VisibilityConfig: serializeAws_json1_1VisibilityConfig(
        input.VisibilityConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1RuleAction = (
  input: RuleAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Allow !== undefined && {
      Allow: serializeAws_json1_1AllowAction(input.Allow, context)
    }),
    ...(input.Block !== undefined && {
      Block: serializeAws_json1_1BlockAction(input.Block, context)
    }),
    ...(input.Count !== undefined && {
      Count: serializeAws_json1_1CountAction(input.Count, context)
    })
  };
};

const serializeAws_json1_1RuleGroupReferenceStatement = (
  input: RuleGroupReferenceStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ARN !== undefined && { ARN: input.ARN }),
    ...(input.ExcludedRules !== undefined && {
      ExcludedRules: serializeAws_json1_1ExcludedRules(
        input.ExcludedRules,
        context
      )
    })
  };
};

const serializeAws_json1_1Rules = (
  input: Rule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Rule(entry, context));
};

const serializeAws_json1_1SingleHeader = (
  input: SingleHeader,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1SingleQueryArgument = (
  input: SingleQueryArgument,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1SizeConstraintStatement = (
  input: SizeConstraintStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    }),
    ...(input.FieldToMatch !== undefined && {
      FieldToMatch: serializeAws_json1_1FieldToMatch(
        input.FieldToMatch,
        context
      )
    }),
    ...(input.Size !== undefined && { Size: input.Size }),
    ...(input.TextTransformations !== undefined && {
      TextTransformations: serializeAws_json1_1TextTransformations(
        input.TextTransformations,
        context
      )
    })
  };
};

const serializeAws_json1_1SqliMatchStatement = (
  input: SqliMatchStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.FieldToMatch !== undefined && {
      FieldToMatch: serializeAws_json1_1FieldToMatch(
        input.FieldToMatch,
        context
      )
    }),
    ...(input.TextTransformations !== undefined && {
      TextTransformations: serializeAws_json1_1TextTransformations(
        input.TextTransformations,
        context
      )
    })
  };
};

const serializeAws_json1_1Statement = (
  input: Statement,
  context: __SerdeContext
): any => {
  return {
    ...(input.AndStatement !== undefined && {
      AndStatement: serializeAws_json1_1AndStatement(
        input.AndStatement,
        context
      )
    }),
    ...(input.ByteMatchStatement !== undefined && {
      ByteMatchStatement: serializeAws_json1_1ByteMatchStatement(
        input.ByteMatchStatement,
        context
      )
    }),
    ...(input.GeoMatchStatement !== undefined && {
      GeoMatchStatement: serializeAws_json1_1GeoMatchStatement(
        input.GeoMatchStatement,
        context
      )
    }),
    ...(input.IPSetReferenceStatement !== undefined && {
      IPSetReferenceStatement: serializeAws_json1_1IPSetReferenceStatement(
        input.IPSetReferenceStatement,
        context
      )
    }),
    ...(input.ManagedRuleGroupStatement !== undefined && {
      ManagedRuleGroupStatement: serializeAws_json1_1ManagedRuleGroupStatement(
        input.ManagedRuleGroupStatement,
        context
      )
    }),
    ...(input.NotStatement !== undefined && {
      NotStatement: serializeAws_json1_1NotStatement(
        input.NotStatement,
        context
      )
    }),
    ...(input.OrStatement !== undefined && {
      OrStatement: serializeAws_json1_1OrStatement(input.OrStatement, context)
    }),
    ...(input.RateBasedStatement !== undefined && {
      RateBasedStatement: serializeAws_json1_1RateBasedStatement(
        input.RateBasedStatement,
        context
      )
    }),
    ...(input.RegexPatternSetReferenceStatement !== undefined && {
      RegexPatternSetReferenceStatement: serializeAws_json1_1RegexPatternSetReferenceStatement(
        input.RegexPatternSetReferenceStatement,
        context
      )
    }),
    ...(input.RuleGroupReferenceStatement !== undefined && {
      RuleGroupReferenceStatement: serializeAws_json1_1RuleGroupReferenceStatement(
        input.RuleGroupReferenceStatement,
        context
      )
    }),
    ...(input.SizeConstraintStatement !== undefined && {
      SizeConstraintStatement: serializeAws_json1_1SizeConstraintStatement(
        input.SizeConstraintStatement,
        context
      )
    }),
    ...(input.SqliMatchStatement !== undefined && {
      SqliMatchStatement: serializeAws_json1_1SqliMatchStatement(
        input.SqliMatchStatement,
        context
      )
    }),
    ...(input.XssMatchStatement !== undefined && {
      XssMatchStatement: serializeAws_json1_1XssMatchStatement(
        input.XssMatchStatement,
        context
      )
    })
  };
};

const serializeAws_json1_1Statements = (
  input: Statement[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Statement(entry, context));
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1TextTransformation = (
  input: TextTransformation,
  context: __SerdeContext
): any => {
  return {
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_json1_1TextTransformations = (
  input: TextTransformation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1TextTransformation(entry, context)
  );
};

const serializeAws_json1_1TimeWindow = (
  input: TimeWindow,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateIPSetRequest = (
  input: UpdateIPSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Addresses !== undefined && {
      Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context)
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1UpdateRegexPatternSetRequest = (
  input: UpdateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RegularExpressionList !== undefined && {
      RegularExpressionList: serializeAws_json1_1RegularExpressionList(
        input.RegularExpressionList,
        context
      )
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope })
  };
};

const serializeAws_json1_1UpdateRuleGroupRequest = (
  input: UpdateRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1Rules(input.Rules, context)
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.VisibilityConfig !== undefined && {
      VisibilityConfig: serializeAws_json1_1VisibilityConfig(
        input.VisibilityConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateWebACLRequest = (
  input: UpdateWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultAction !== undefined && {
      DefaultAction: serializeAws_json1_1DefaultAction(
        input.DefaultAction,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.LockToken !== undefined && { LockToken: input.LockToken }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1Rules(input.Rules, context)
    }),
    ...(input.Scope !== undefined && { Scope: input.Scope }),
    ...(input.VisibilityConfig !== undefined && {
      VisibilityConfig: serializeAws_json1_1VisibilityConfig(
        input.VisibilityConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1UriPath = (
  input: UriPath,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1VisibilityConfig = (
  input: VisibilityConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchMetricsEnabled !== undefined && {
      CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled
    }),
    ...(input.MetricName !== undefined && { MetricName: input.MetricName }),
    ...(input.SampledRequestsEnabled !== undefined && {
      SampledRequestsEnabled: input.SampledRequestsEnabled
    })
  };
};

const serializeAws_json1_1XssMatchStatement = (
  input: XssMatchStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.FieldToMatch !== undefined && {
      FieldToMatch: serializeAws_json1_1FieldToMatch(
        input.FieldToMatch,
        context
      )
    }),
    ...(input.TextTransformations !== undefined && {
      TextTransformations: serializeAws_json1_1TextTransformations(
        input.TextTransformations,
        context
      )
    })
  };
};

const deserializeAws_json1_1AllowAction = (
  output: any,
  context: __SerdeContext
): AllowAction => {
  return {
    __type: "AllowAction"
  } as any;
};

const deserializeAws_json1_1AllQueryArguments = (
  output: any,
  context: __SerdeContext
): AllQueryArguments => {
  return {
    __type: "AllQueryArguments"
  } as any;
};

const deserializeAws_json1_1AndStatement = (
  output: any,
  context: __SerdeContext
): AndStatement => {
  return {
    __type: "AndStatement",
    Statements:
      output.Statements !== undefined && output.Statements !== null
        ? deserializeAws_json1_1Statements(output.Statements, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1AssociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): AssociateWebACLResponse => {
  return {
    __type: "AssociateWebACLResponse"
  } as any;
};

const deserializeAws_json1_1BlockAction = (
  output: any,
  context: __SerdeContext
): BlockAction => {
  return {
    __type: "BlockAction"
  } as any;
};

const deserializeAws_json1_1Body = (
  output: any,
  context: __SerdeContext
): Body => {
  return {
    __type: "Body"
  } as any;
};

const deserializeAws_json1_1ByteMatchStatement = (
  output: any,
  context: __SerdeContext
): ByteMatchStatement => {
  return {
    __type: "ByteMatchStatement",
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    PositionalConstraint:
      output.PositionalConstraint !== undefined &&
      output.PositionalConstraint !== null
        ? output.PositionalConstraint
        : undefined,
    SearchString:
      output.SearchString !== undefined && output.SearchString !== null
        ? context.base64Decoder(output.SearchString)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined &&
      output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(
            output.TextTransformations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CheckCapacityResponse = (
  output: any,
  context: __SerdeContext
): CheckCapacityResponse => {
  return {
    __type: "CheckCapacityResponse",
    Capacity:
      output.Capacity !== undefined && output.Capacity !== null
        ? output.Capacity
        : undefined
  } as any;
};

const deserializeAws_json1_1CountAction = (
  output: any,
  context: __SerdeContext
): CountAction => {
  return {
    __type: "CountAction"
  } as any;
};

const deserializeAws_json1_1CountryCodes = (
  output: any,
  context: __SerdeContext
): (CountryCode | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CreateIPSetResponse = (
  output: any,
  context: __SerdeContext
): CreateIPSetResponse => {
  return {
    __type: "CreateIPSetResponse",
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1IPSetSummary(output.Summary, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): CreateRegexPatternSetResponse => {
  return {
    __type: "CreateRegexPatternSetResponse",
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1RegexPatternSetSummary(output.Summary, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateRuleGroupResponse => {
  return {
    __type: "CreateRuleGroupResponse",
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1RuleGroupSummary(output.Summary, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateWebACLResponse = (
  output: any,
  context: __SerdeContext
): CreateWebACLResponse => {
  return {
    __type: "CreateWebACLResponse",
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1WebACLSummary(output.Summary, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DefaultAction = (
  output: any,
  context: __SerdeContext
): DefaultAction => {
  return {
    __type: "DefaultAction",
    Allow:
      output.Allow !== undefined && output.Allow !== null
        ? deserializeAws_json1_1AllowAction(output.Allow, context)
        : undefined,
    Block:
      output.Block !== undefined && output.Block !== null
        ? deserializeAws_json1_1BlockAction(output.Block, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteIPSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteIPSetResponse => {
  return {
    __type: "DeleteIPSetResponse"
  } as any;
};

const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLoggingConfigurationResponse => {
  return {
    __type: "DeleteLoggingConfigurationResponse"
  } as any;
};

const deserializeAws_json1_1DeleteRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteRegexPatternSetResponse => {
  return {
    __type: "DeleteRegexPatternSetResponse"
  } as any;
};

const deserializeAws_json1_1DeleteRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteRuleGroupResponse => {
  return {
    __type: "DeleteRuleGroupResponse"
  } as any;
};

const deserializeAws_json1_1DeleteWebACLResponse = (
  output: any,
  context: __SerdeContext
): DeleteWebACLResponse => {
  return {
    __type: "DeleteWebACLResponse"
  } as any;
};

const deserializeAws_json1_1DescribeManagedRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeManagedRuleGroupResponse => {
  return {
    __type: "DescribeManagedRuleGroupResponse",
    Capacity:
      output.Capacity !== undefined && output.Capacity !== null
        ? output.Capacity
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): DisassociateWebACLResponse => {
  return {
    __type: "DisassociateWebACLResponse"
  } as any;
};

const deserializeAws_json1_1ExcludedRule = (
  output: any,
  context: __SerdeContext
): ExcludedRule => {
  return {
    __type: "ExcludedRule",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1ExcludedRules = (
  output: any,
  context: __SerdeContext
): ExcludedRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExcludedRule(entry, context)
  );
};

const deserializeAws_json1_1FieldToMatch = (
  output: any,
  context: __SerdeContext
): FieldToMatch => {
  return {
    __type: "FieldToMatch",
    AllQueryArguments:
      output.AllQueryArguments !== undefined &&
      output.AllQueryArguments !== null
        ? deserializeAws_json1_1AllQueryArguments(
            output.AllQueryArguments,
            context
          )
        : undefined,
    Body:
      output.Body !== undefined && output.Body !== null
        ? deserializeAws_json1_1Body(output.Body, context)
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
      output.SingleQueryArgument !== undefined &&
      output.SingleQueryArgument !== null
        ? deserializeAws_json1_1SingleQueryArgument(
            output.SingleQueryArgument,
            context
          )
        : undefined,
    UriPath:
      output.UriPath !== undefined && output.UriPath !== null
        ? deserializeAws_json1_1UriPath(output.UriPath, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GeoMatchStatement = (
  output: any,
  context: __SerdeContext
): GeoMatchStatement => {
  return {
    __type: "GeoMatchStatement",
    CountryCodes:
      output.CountryCodes !== undefined && output.CountryCodes !== null
        ? deserializeAws_json1_1CountryCodes(output.CountryCodes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetIPSetResponse = (
  output: any,
  context: __SerdeContext
): GetIPSetResponse => {
  return {
    __type: "GetIPSetResponse",
    IPSet:
      output.IPSet !== undefined && output.IPSet !== null
        ? deserializeAws_json1_1IPSet(output.IPSet, context)
        : undefined,
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined
  } as any;
};

const deserializeAws_json1_1GetLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLoggingConfigurationResponse => {
  return {
    __type: "GetLoggingConfigurationResponse",
    LoggingConfiguration:
      output.LoggingConfiguration !== undefined &&
      output.LoggingConfiguration !== null
        ? deserializeAws_json1_1LoggingConfiguration(
            output.LoggingConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedStatementManagedKeysResponse => {
  return {
    __type: "GetRateBasedStatementManagedKeysResponse",
    ManagedKeysIPV4:
      output.ManagedKeysIPV4 !== undefined && output.ManagedKeysIPV4 !== null
        ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(
            output.ManagedKeysIPV4,
            context
          )
        : undefined,
    ManagedKeysIPV6:
      output.ManagedKeysIPV6 !== undefined && output.ManagedKeysIPV6 !== null
        ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(
            output.ManagedKeysIPV6,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): GetRegexPatternSetResponse => {
  return {
    __type: "GetRegexPatternSetResponse",
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    RegexPatternSet:
      output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
        ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): GetRuleGroupResponse => {
  return {
    __type: "GetRuleGroupResponse",
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    RuleGroup:
      output.RuleGroup !== undefined && output.RuleGroup !== null
        ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSampledRequestsResponse = (
  output: any,
  context: __SerdeContext
): GetSampledRequestsResponse => {
  return {
    __type: "GetSampledRequestsResponse",
    PopulationSize:
      output.PopulationSize !== undefined && output.PopulationSize !== null
        ? output.PopulationSize
        : undefined,
    SampledRequests:
      output.SampledRequests !== undefined && output.SampledRequests !== null
        ? deserializeAws_json1_1SampledHTTPRequests(
            output.SampledRequests,
            context
          )
        : undefined,
    TimeWindow:
      output.TimeWindow !== undefined && output.TimeWindow !== null
        ? deserializeAws_json1_1TimeWindow(output.TimeWindow, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetWebACLForResourceResponse = (
  output: any,
  context: __SerdeContext
): GetWebACLForResourceResponse => {
  return {
    __type: "GetWebACLForResourceResponse",
    WebACL:
      output.WebACL !== undefined && output.WebACL !== null
        ? deserializeAws_json1_1WebACL(output.WebACL, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetWebACLResponse = (
  output: any,
  context: __SerdeContext
): GetWebACLResponse => {
  return {
    __type: "GetWebACLResponse",
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    WebACL:
      output.WebACL !== undefined && output.WebACL !== null
        ? deserializeAws_json1_1WebACL(output.WebACL, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1HTTPHeader = (
  output: any,
  context: __SerdeContext
): HTTPHeader => {
  return {
    __type: "HTTPHeader",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1HTTPHeaders = (
  output: any,
  context: __SerdeContext
): HTTPHeader[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HTTPHeader(entry, context)
  );
};

const deserializeAws_json1_1HTTPRequest = (
  output: any,
  context: __SerdeContext
): HTTPRequest => {
  return {
    __type: "HTTPRequest",
    ClientIP:
      output.ClientIP !== undefined && output.ClientIP !== null
        ? output.ClientIP
        : undefined,
    Country:
      output.Country !== undefined && output.Country !== null
        ? output.Country
        : undefined,
    HTTPVersion:
      output.HTTPVersion !== undefined && output.HTTPVersion !== null
        ? output.HTTPVersion
        : undefined,
    Headers:
      output.Headers !== undefined && output.Headers !== null
        ? deserializeAws_json1_1HTTPHeaders(output.Headers, context)
        : undefined,
    Method:
      output.Method !== undefined && output.Method !== null
        ? output.Method
        : undefined,
    URI:
      output.URI !== undefined && output.URI !== null ? output.URI : undefined
  } as any;
};

const deserializeAws_json1_1IPAddresses = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IPSet = (
  output: any,
  context: __SerdeContext
): IPSet => {
  return {
    __type: "IPSet",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Addresses:
      output.Addresses !== undefined && output.Addresses !== null
        ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    IPAddressVersion:
      output.IPAddressVersion !== undefined && output.IPAddressVersion !== null
        ? output.IPAddressVersion
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1IPSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): IPSetReferenceStatement => {
  return {
    __type: "IPSetReferenceStatement",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined
  } as any;
};

const deserializeAws_json1_1IPSetSummaries = (
  output: any,
  context: __SerdeContext
): IPSetSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IPSetSummary(entry, context)
  );
};

const deserializeAws_json1_1IPSetSummary = (
  output: any,
  context: __SerdeContext
): IPSetSummary => {
  return {
    __type: "IPSetSummary",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupsResponse => {
  return {
    __type: "ListAvailableManagedRuleGroupsResponse",
    ManagedRuleGroups:
      output.ManagedRuleGroups !== undefined &&
      output.ManagedRuleGroups !== null
        ? deserializeAws_json1_1ManagedRuleGroupSummaries(
            output.ManagedRuleGroups,
            context
          )
        : undefined,
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListIPSetsResponse = (
  output: any,
  context: __SerdeContext
): ListIPSetsResponse => {
  return {
    __type: "ListIPSetsResponse",
    IPSets:
      output.IPSets !== undefined && output.IPSets !== null
        ? deserializeAws_json1_1IPSetSummaries(output.IPSets, context)
        : undefined,
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListLoggingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLoggingConfigurationsResponse => {
  return {
    __type: "ListLoggingConfigurationsResponse",
    LoggingConfigurations:
      output.LoggingConfigurations !== undefined &&
      output.LoggingConfigurations !== null
        ? deserializeAws_json1_1LoggingConfigurations(
            output.LoggingConfigurations,
            context
          )
        : undefined,
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRegexPatternSetsResponse = (
  output: any,
  context: __SerdeContext
): ListRegexPatternSetsResponse => {
  return {
    __type: "ListRegexPatternSetsResponse",
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined,
    RegexPatternSets:
      output.RegexPatternSets !== undefined && output.RegexPatternSets !== null
        ? deserializeAws_json1_1RegexPatternSetSummaries(
            output.RegexPatternSets,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResourcesForWebACLResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesForWebACLResponse => {
  return {
    __type: "ListResourcesForWebACLResponse",
    ResourceArns:
      output.ResourceArns !== undefined && output.ResourceArns !== null
        ? deserializeAws_json1_1ResourceArns(output.ResourceArns, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListRuleGroupsResponse => {
  return {
    __type: "ListRuleGroupsResponse",
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined,
    RuleGroups:
      output.RuleGroups !== undefined && output.RuleGroups !== null
        ? deserializeAws_json1_1RuleGroupSummaries(output.RuleGroups, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined,
    TagInfoForResource:
      output.TagInfoForResource !== undefined &&
      output.TagInfoForResource !== null
        ? deserializeAws_json1_1TagInfoForResource(
            output.TagInfoForResource,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListWebACLsResponse = (
  output: any,
  context: __SerdeContext
): ListWebACLsResponse => {
  return {
    __type: "ListWebACLsResponse",
    NextMarker:
      output.NextMarker !== undefined && output.NextMarker !== null
        ? output.NextMarker
        : undefined,
    WebACLs:
      output.WebACLs !== undefined && output.WebACLs !== null
        ? deserializeAws_json1_1WebACLSummaries(output.WebACLs, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LogDestinationConfigs = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LoggingConfiguration = (
  output: any,
  context: __SerdeContext
): LoggingConfiguration => {
  return {
    __type: "LoggingConfiguration",
    LogDestinationConfigs:
      output.LogDestinationConfigs !== undefined &&
      output.LogDestinationConfigs !== null
        ? deserializeAws_json1_1LogDestinationConfigs(
            output.LogDestinationConfigs,
            context
          )
        : undefined,
    RedactedFields:
      output.RedactedFields !== undefined && output.RedactedFields !== null
        ? deserializeAws_json1_1RedactedFields(output.RedactedFields, context)
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined
  } as any;
};

const deserializeAws_json1_1LoggingConfigurations = (
  output: any,
  context: __SerdeContext
): LoggingConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoggingConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ManagedRuleGroupStatement = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupStatement => {
  return {
    __type: "ManagedRuleGroupStatement",
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VendorName:
      output.VendorName !== undefined && output.VendorName !== null
        ? output.VendorName
        : undefined
  } as any;
};

const deserializeAws_json1_1ManagedRuleGroupSummaries = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ManagedRuleGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1ManagedRuleGroupSummary = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupSummary => {
  return {
    __type: "ManagedRuleGroupSummary",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VendorName:
      output.VendorName !== undefined && output.VendorName !== null
        ? output.VendorName
        : undefined
  } as any;
};

const deserializeAws_json1_1Method = (
  output: any,
  context: __SerdeContext
): Method => {
  return {
    __type: "Method"
  } as any;
};

const deserializeAws_json1_1NoneAction = (
  output: any,
  context: __SerdeContext
): NoneAction => {
  return {
    __type: "NoneAction"
  } as any;
};

const deserializeAws_json1_1NotStatement = (
  output: any,
  context: __SerdeContext
): NotStatement => {
  return {
    __type: "NotStatement",
    Statement:
      output.Statement !== undefined && output.Statement !== null
        ? deserializeAws_json1_1Statement(output.Statement, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1OrStatement = (
  output: any,
  context: __SerdeContext
): OrStatement => {
  return {
    __type: "OrStatement",
    Statements:
      output.Statements !== undefined && output.Statements !== null
        ? deserializeAws_json1_1Statements(output.Statements, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1OverrideAction = (
  output: any,
  context: __SerdeContext
): OverrideAction => {
  return {
    __type: "OverrideAction",
    Count:
      output.Count !== undefined && output.Count !== null
        ? deserializeAws_json1_1CountAction(output.Count, context)
        : undefined,
    None:
      output.None !== undefined && output.None !== null
        ? deserializeAws_json1_1NoneAction(output.None, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutLoggingConfigurationResponse => {
  return {
    __type: "PutLoggingConfigurationResponse",
    LoggingConfiguration:
      output.LoggingConfiguration !== undefined &&
      output.LoggingConfiguration !== null
        ? deserializeAws_json1_1LoggingConfiguration(
            output.LoggingConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryString = (
  output: any,
  context: __SerdeContext
): QueryString => {
  return {
    __type: "QueryString"
  } as any;
};

const deserializeAws_json1_1RateBasedStatement = (
  output: any,
  context: __SerdeContext
): RateBasedStatement => {
  return {
    __type: "RateBasedStatement",
    AggregateKeyType:
      output.AggregateKeyType !== undefined && output.AggregateKeyType !== null
        ? output.AggregateKeyType
        : undefined,
    Limit:
      output.Limit !== undefined && output.Limit !== null
        ? output.Limit
        : undefined,
    ScopeDownStatement:
      output.ScopeDownStatement !== undefined &&
      output.ScopeDownStatement !== null
        ? deserializeAws_json1_1Statement(output.ScopeDownStatement, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RateBasedStatementManagedKeysIPSet = (
  output: any,
  context: __SerdeContext
): RateBasedStatementManagedKeysIPSet => {
  return {
    __type: "RateBasedStatementManagedKeysIPSet",
    Addresses:
      output.Addresses !== undefined && output.Addresses !== null
        ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
        : undefined,
    IPAddressVersion:
      output.IPAddressVersion !== undefined && output.IPAddressVersion !== null
        ? output.IPAddressVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1RedactedFields = (
  output: any,
  context: __SerdeContext
): FieldToMatch[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FieldToMatch(entry, context)
  );
};

const deserializeAws_json1_1Regex = (
  output: any,
  context: __SerdeContext
): Regex => {
  return {
    __type: "Regex",
    RegexString:
      output.RegexString !== undefined && output.RegexString !== null
        ? output.RegexString
        : undefined
  } as any;
};

const deserializeAws_json1_1RegexPatternSet = (
  output: any,
  context: __SerdeContext
): RegexPatternSet => {
  return {
    __type: "RegexPatternSet",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RegularExpressionList:
      output.RegularExpressionList !== undefined &&
      output.RegularExpressionList !== null
        ? deserializeAws_json1_1RegularExpressionList(
            output.RegularExpressionList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RegexPatternSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): RegexPatternSetReferenceStatement => {
  return {
    __type: "RegexPatternSetReferenceStatement",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined &&
      output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(
            output.TextTransformations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RegexPatternSetSummaries = (
  output: any,
  context: __SerdeContext
): RegexPatternSetSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RegexPatternSetSummary(entry, context)
  );
};

const deserializeAws_json1_1RegexPatternSetSummary = (
  output: any,
  context: __SerdeContext
): RegexPatternSetSummary => {
  return {
    __type: "RegexPatternSetSummary",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1RegularExpressionList = (
  output: any,
  context: __SerdeContext
): Regex[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Regex(entry, context)
  );
};

const deserializeAws_json1_1ResourceArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  return {
    __type: "Rule",
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1RuleAction(output.Action, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OverrideAction:
      output.OverrideAction !== undefined && output.OverrideAction !== null
        ? deserializeAws_json1_1OverrideAction(output.OverrideAction, context)
        : undefined,
    Priority:
      output.Priority !== undefined && output.Priority !== null
        ? output.Priority
        : undefined,
    Statement:
      output.Statement !== undefined && output.Statement !== null
        ? deserializeAws_json1_1Statement(output.Statement, context)
        : undefined,
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(
            output.VisibilityConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleAction = (
  output: any,
  context: __SerdeContext
): RuleAction => {
  return {
    __type: "RuleAction",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleGroup = (
  output: any,
  context: __SerdeContext
): RuleGroup => {
  return {
    __type: "RuleGroup",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Capacity:
      output.Capacity !== undefined && output.Capacity !== null
        ? output.Capacity
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1Rules(output.Rules, context)
        : undefined,
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(
            output.VisibilityConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleGroupReferenceStatement = (
  output: any,
  context: __SerdeContext
): RuleGroupReferenceStatement => {
  return {
    __type: "RuleGroupReferenceStatement",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleGroupSummaries = (
  output: any,
  context: __SerdeContext
): RuleGroupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RuleGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1RuleGroupSummary = (
  output: any,
  context: __SerdeContext
): RuleGroupSummary => {
  return {
    __type: "RuleGroupSummary",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1Rules = (
  output: any,
  context: __SerdeContext
): Rule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1RuleSummaries = (
  output: any,
  context: __SerdeContext
): RuleSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RuleSummary(entry, context)
  );
};

const deserializeAws_json1_1RuleSummary = (
  output: any,
  context: __SerdeContext
): RuleSummary => {
  return {
    __type: "RuleSummary",
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1RuleAction(output.Action, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1SampledHTTPRequest = (
  output: any,
  context: __SerdeContext
): SampledHTTPRequest => {
  return {
    __type: "SampledHTTPRequest",
    Action:
      output.Action !== undefined && output.Action !== null
        ? output.Action
        : undefined,
    Request:
      output.Request !== undefined && output.Request !== null
        ? deserializeAws_json1_1HTTPRequest(output.Request, context)
        : undefined,
    RuleNameWithinRuleGroup:
      output.RuleNameWithinRuleGroup !== undefined &&
      output.RuleNameWithinRuleGroup !== null
        ? output.RuleNameWithinRuleGroup
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Weight:
      output.Weight !== undefined && output.Weight !== null
        ? output.Weight
        : undefined
  } as any;
};

const deserializeAws_json1_1SampledHTTPRequests = (
  output: any,
  context: __SerdeContext
): SampledHTTPRequest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SampledHTTPRequest(entry, context)
  );
};

const deserializeAws_json1_1SingleHeader = (
  output: any,
  context: __SerdeContext
): SingleHeader => {
  return {
    __type: "SingleHeader",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1SingleQueryArgument = (
  output: any,
  context: __SerdeContext
): SingleQueryArgument => {
  return {
    __type: "SingleQueryArgument",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1SizeConstraintStatement = (
  output: any,
  context: __SerdeContext
): SizeConstraintStatement => {
  return {
    __type: "SizeConstraintStatement",
    ComparisonOperator:
      output.ComparisonOperator !== undefined &&
      output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    Size:
      output.Size !== undefined && output.Size !== null
        ? output.Size
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined &&
      output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(
            output.TextTransformations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1SqliMatchStatement = (
  output: any,
  context: __SerdeContext
): SqliMatchStatement => {
  return {
    __type: "SqliMatchStatement",
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined &&
      output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(
            output.TextTransformations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Statement = (
  output: any,
  context: __SerdeContext
): Statement => {
  return {
    __type: "Statement",
    AndStatement:
      output.AndStatement !== undefined && output.AndStatement !== null
        ? deserializeAws_json1_1AndStatement(output.AndStatement, context)
        : undefined,
    ByteMatchStatement:
      output.ByteMatchStatement !== undefined &&
      output.ByteMatchStatement !== null
        ? deserializeAws_json1_1ByteMatchStatement(
            output.ByteMatchStatement,
            context
          )
        : undefined,
    GeoMatchStatement:
      output.GeoMatchStatement !== undefined &&
      output.GeoMatchStatement !== null
        ? deserializeAws_json1_1GeoMatchStatement(
            output.GeoMatchStatement,
            context
          )
        : undefined,
    IPSetReferenceStatement:
      output.IPSetReferenceStatement !== undefined &&
      output.IPSetReferenceStatement !== null
        ? deserializeAws_json1_1IPSetReferenceStatement(
            output.IPSetReferenceStatement,
            context
          )
        : undefined,
    ManagedRuleGroupStatement:
      output.ManagedRuleGroupStatement !== undefined &&
      output.ManagedRuleGroupStatement !== null
        ? deserializeAws_json1_1ManagedRuleGroupStatement(
            output.ManagedRuleGroupStatement,
            context
          )
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
      output.RateBasedStatement !== undefined &&
      output.RateBasedStatement !== null
        ? deserializeAws_json1_1RateBasedStatement(
            output.RateBasedStatement,
            context
          )
        : undefined,
    RegexPatternSetReferenceStatement:
      output.RegexPatternSetReferenceStatement !== undefined &&
      output.RegexPatternSetReferenceStatement !== null
        ? deserializeAws_json1_1RegexPatternSetReferenceStatement(
            output.RegexPatternSetReferenceStatement,
            context
          )
        : undefined,
    RuleGroupReferenceStatement:
      output.RuleGroupReferenceStatement !== undefined &&
      output.RuleGroupReferenceStatement !== null
        ? deserializeAws_json1_1RuleGroupReferenceStatement(
            output.RuleGroupReferenceStatement,
            context
          )
        : undefined,
    SizeConstraintStatement:
      output.SizeConstraintStatement !== undefined &&
      output.SizeConstraintStatement !== null
        ? deserializeAws_json1_1SizeConstraintStatement(
            output.SizeConstraintStatement,
            context
          )
        : undefined,
    SqliMatchStatement:
      output.SqliMatchStatement !== undefined &&
      output.SqliMatchStatement !== null
        ? deserializeAws_json1_1SqliMatchStatement(
            output.SqliMatchStatement,
            context
          )
        : undefined,
    XssMatchStatement:
      output.XssMatchStatement !== undefined &&
      output.XssMatchStatement !== null
        ? deserializeAws_json1_1XssMatchStatement(
            output.XssMatchStatement,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Statements = (
  output: any,
  context: __SerdeContext
): Statement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Statement(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagInfoForResource = (
  output: any,
  context: __SerdeContext
): TagInfoForResource => {
  return {
    __type: "TagInfoForResource",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1TextTransformation = (
  output: any,
  context: __SerdeContext
): TextTransformation => {
  return {
    __type: "TextTransformation",
    Priority:
      output.Priority !== undefined && output.Priority !== null
        ? output.Priority
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1TextTransformations = (
  output: any,
  context: __SerdeContext
): TextTransformation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TextTransformation(entry, context)
  );
};

const deserializeAws_json1_1TimeWindow = (
  output: any,
  context: __SerdeContext
): TimeWindow => {
  return {
    __type: "TimeWindow",
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateIPSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateIPSetResponse => {
  return {
    __type: "UpdateIPSetResponse",
    NextLockToken:
      output.NextLockToken !== undefined && output.NextLockToken !== null
        ? output.NextLockToken
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateRegexPatternSetResponse => {
  return {
    __type: "UpdateRegexPatternSetResponse",
    NextLockToken:
      output.NextLockToken !== undefined && output.NextLockToken !== null
        ? output.NextLockToken
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateRuleGroupResponse => {
  return {
    __type: "UpdateRuleGroupResponse",
    NextLockToken:
      output.NextLockToken !== undefined && output.NextLockToken !== null
        ? output.NextLockToken
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateWebACLResponse = (
  output: any,
  context: __SerdeContext
): UpdateWebACLResponse => {
  return {
    __type: "UpdateWebACLResponse",
    NextLockToken:
      output.NextLockToken !== undefined && output.NextLockToken !== null
        ? output.NextLockToken
        : undefined
  } as any;
};

const deserializeAws_json1_1UriPath = (
  output: any,
  context: __SerdeContext
): UriPath => {
  return {
    __type: "UriPath"
  } as any;
};

const deserializeAws_json1_1VisibilityConfig = (
  output: any,
  context: __SerdeContext
): VisibilityConfig => {
  return {
    __type: "VisibilityConfig",
    CloudWatchMetricsEnabled:
      output.CloudWatchMetricsEnabled !== undefined &&
      output.CloudWatchMetricsEnabled !== null
        ? output.CloudWatchMetricsEnabled
        : undefined,
    MetricName:
      output.MetricName !== undefined && output.MetricName !== null
        ? output.MetricName
        : undefined,
    SampledRequestsEnabled:
      output.SampledRequestsEnabled !== undefined &&
      output.SampledRequestsEnabled !== null
        ? output.SampledRequestsEnabled
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFAssociatedItemException = (
  output: any,
  context: __SerdeContext
): WAFAssociatedItemException => {
  return {
    __type: "WAFAssociatedItemException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFDuplicateItemException = (
  output: any,
  context: __SerdeContext
): WAFDuplicateItemException => {
  return {
    __type: "WAFDuplicateItemException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFInternalErrorException => {
  return {
    __type: "WAFInternalErrorException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFInvalidParameterException = (
  output: any,
  context: __SerdeContext
): WAFInvalidParameterException => {
  return {
    __type: "WAFInvalidParameterException",
    Field:
      output.Field !== undefined && output.Field !== null
        ? output.Field
        : undefined,
    Parameter:
      output.Parameter !== undefined && output.Parameter !== null
        ? output.Parameter
        : undefined,
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFInvalidResourceException = (
  output: any,
  context: __SerdeContext
): WAFInvalidResourceException => {
  return {
    __type: "WAFInvalidResourceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFLimitsExceededException = (
  output: any,
  context: __SerdeContext
): WAFLimitsExceededException => {
  return {
    __type: "WAFLimitsExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFNonexistentItemException = (
  output: any,
  context: __SerdeContext
): WAFNonexistentItemException => {
  return {
    __type: "WAFNonexistentItemException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFOptimisticLockException = (
  output: any,
  context: __SerdeContext
): WAFOptimisticLockException => {
  return {
    __type: "WAFOptimisticLockException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFServiceLinkedRoleErrorException = (
  output: any,
  context: __SerdeContext
): WAFServiceLinkedRoleErrorException => {
  return {
    __type: "WAFServiceLinkedRoleErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFTagOperationException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationException => {
  return {
    __type: "WAFTagOperationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFTagOperationInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationInternalErrorException => {
  return {
    __type: "WAFTagOperationInternalErrorException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WAFUnavailableEntityException = (
  output: any,
  context: __SerdeContext
): WAFUnavailableEntityException => {
  return {
    __type: "WAFUnavailableEntityException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1WebACL = (
  output: any,
  context: __SerdeContext
): WebACL => {
  return {
    __type: "WebACL",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Capacity:
      output.Capacity !== undefined && output.Capacity !== null
        ? output.Capacity
        : undefined,
    DefaultAction:
      output.DefaultAction !== undefined && output.DefaultAction !== null
        ? deserializeAws_json1_1DefaultAction(output.DefaultAction, context)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1Rules(output.Rules, context)
        : undefined,
    VisibilityConfig:
      output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
        ? deserializeAws_json1_1VisibilityConfig(
            output.VisibilityConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1WebACLSummaries = (
  output: any,
  context: __SerdeContext
): WebACLSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WebACLSummary(entry, context)
  );
};

const deserializeAws_json1_1WebACLSummary = (
  output: any,
  context: __SerdeContext
): WebACLSummary => {
  return {
    __type: "WebACLSummary",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LockToken:
      output.LockToken !== undefined && output.LockToken !== null
        ? output.LockToken
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1XssMatchStatement = (
  output: any,
  context: __SerdeContext
): XssMatchStatement => {
  return {
    __type: "XssMatchStatement",
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformations:
      output.TextTransformations !== undefined &&
      output.TextTransformations !== null
        ? deserializeAws_json1_1TextTransformations(
            output.TextTransformations,
            context
          )
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
