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

export async function serializeAws_json1_1AssociateWebACLCommand(
  input: AssociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.AssociateWebACL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CheckCapacityCommand(
  input: CheckCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.CheckCapacity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CheckCapacityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateIPSetCommand(
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.CreateIPSet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateRegexPatternSetCommand(
  input: CreateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.CreateRegexPatternSet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateRuleGroupCommand(
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.CreateRuleGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateWebACLCommand(
  input: CreateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.CreateWebACL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteIPSetCommand(
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteIPSet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteLoggingConfigurationCommand(
  input: DeleteLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteLoggingConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRegexPatternSetCommand(
  input: DeleteRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteRegexPatternSet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRuleGroupCommand(
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteRuleGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteWebACLCommand(
  input: DeleteWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DeleteWebACL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeManagedRuleGroupCommand(
  input: DescribeManagedRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DescribeManagedRuleGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeManagedRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateWebACLCommand(
  input: DisassociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.DisassociateWebACL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetIPSetCommand(
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetIPSet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLoggingConfigurationCommand(
  input: GetLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetLoggingConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLoggingConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRateBasedStatementManagedKeysCommand(
  input: GetRateBasedStatementManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetRateBasedStatementManagedKeys";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRateBasedStatementManagedKeysRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRegexPatternSetCommand(
  input: GetRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetRegexPatternSet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRuleGroupCommand(
  input: GetRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetRuleGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSampledRequestsCommand(
  input: GetSampledRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetSampledRequests";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSampledRequestsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetWebACLCommand(
  input: GetWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetWebACL";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetWebACLForResourceCommand(
  input: GetWebACLForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.GetWebACLForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetWebACLForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAvailableManagedRuleGroupsCommand(
  input: ListAvailableManagedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListAvailableManagedRuleGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAvailableManagedRuleGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListIPSetsCommand(
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListIPSets";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListLoggingConfigurationsCommand(
  input: ListLoggingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListLoggingConfigurations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLoggingConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRegexPatternSetsCommand(
  input: ListRegexPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListRegexPatternSets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRegexPatternSetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResourcesForWebACLCommand(
  input: ListResourcesForWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListResourcesForWebACL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourcesForWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRuleGroupsCommand(
  input: ListRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListRuleGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRuleGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListWebACLsCommand(
  input: ListWebACLsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.ListWebACLs";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutLoggingConfigurationCommand(
  input: PutLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.PutLoggingConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLoggingConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateIPSetCommand(
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateIPSet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateRegexPatternSetCommand(
  input: UpdateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateRegexPatternSet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRegexPatternSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateRuleGroupCommand(
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateRuleGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRuleGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateWebACLCommand(
  input: UpdateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSWAF_20190729.UpdateWebACL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateWebACLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CheckCapacityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> {
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
}

async function deserializeAws_json1_1CheckCapacityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckCapacityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> {
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
}

async function deserializeAws_json1_1CreateIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIPSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateRegexPatternSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> {
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
}

async function deserializeAws_json1_1CreateRegexPatternSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexPatternSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateRuleGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateRuleGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1CreateWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIPSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteLoggingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteLoggingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoggingConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteRegexPatternSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteRegexPatternSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexPatternSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteRuleGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteRuleGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFAssociatedItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFAssociatedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeManagedRuleGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeManagedRuleGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedRuleGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisassociateWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> {
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
}

async function deserializeAws_json1_1GetIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIPSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetLoggingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1GetLoggingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> {
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
}

async function deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedStatementManagedKeysCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetRegexPatternSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> {
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
}

async function deserializeAws_json1_1GetRegexPatternSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexPatternSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetRuleGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> {
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
}

async function deserializeAws_json1_1GetRuleGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetSampledRequestsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> {
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
}

async function deserializeAws_json1_1GetSampledRequestsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampledRequestsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1GetWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetWebACLForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1GetWebACLForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebACLForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagedRuleGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListIPSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> {
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
}

async function deserializeAws_json1_1ListIPSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIPSetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListLoggingConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListLoggingConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLoggingConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListRegexPatternSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> {
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
}

async function deserializeAws_json1_1ListRegexPatternSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexPatternSetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListResourcesForWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1ListResourcesForWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListRuleGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListRuleGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListWebACLsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> {
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
}

async function deserializeAws_json1_1ListWebACLsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebACLsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutLoggingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1PutLoggingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFServiceLinkedRoleErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFServiceLinkedRoleErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFTagOperationInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateIPSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateIPSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIPSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateRegexPatternSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateRegexPatternSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexPatternSetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateRuleGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateRuleGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateWebACLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateWebACLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebACLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WAFDuplicateItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFDuplicateItemException":
      response = {
        ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFInvalidResourceException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFInvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFOptimisticLockException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFOptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.gokucustomerapiv2.v20190729#WAFUnavailableEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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

const serializeAws_json1_1AllQueryArguments = (
  input: AllQueryArguments,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1AllowAction = (
  input: AllowAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1AndStatement = (
  input: AndStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Statements !== undefined) {
    bodyParams["Statements"] = serializeAws_json1_1Statements(
      input.Statements,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AssociateWebACLRequest = (
  input: AssociateWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.WebACLArn !== undefined) {
    bodyParams["WebACLArn"] = input.WebACLArn;
  }
  return bodyParams;
};

const serializeAws_json1_1BlockAction = (
  input: BlockAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1Body = (
  input: Body,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1ByteMatchStatement = (
  input: ByteMatchStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FieldToMatch !== undefined) {
    bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(
      input.FieldToMatch,
      context
    );
  }
  if (input.PositionalConstraint !== undefined) {
    bodyParams["PositionalConstraint"] = input.PositionalConstraint;
  }
  if (input.SearchString !== undefined) {
    bodyParams["SearchString"] = context.base64Encoder(input.SearchString);
  }
  if (input.TextTransformations !== undefined) {
    bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(
      input.TextTransformations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CheckCapacityRequest = (
  input: CheckCapacityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1CountAction = (
  input: CountAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1CountryCodes = (
  input: Array<CountryCode | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CreateIPSetRequest = (
  input: CreateIPSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Addresses !== undefined) {
    bodyParams["Addresses"] = serializeAws_json1_1IPAddresses(
      input.Addresses,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.IPAddressVersion !== undefined) {
    bodyParams["IPAddressVersion"] = input.IPAddressVersion;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRegexPatternSetRequest = (
  input: CreateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RegularExpressionList !== undefined) {
    bodyParams[
      "RegularExpressionList"
    ] = serializeAws_json1_1RegularExpressionList(
      input.RegularExpressionList,
      context
    );
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRuleGroupRequest = (
  input: CreateRuleGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Capacity !== undefined) {
    bodyParams["Capacity"] = input.Capacity;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.VisibilityConfig !== undefined) {
    bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(
      input.VisibilityConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateWebACLRequest = (
  input: CreateWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DefaultAction !== undefined) {
    bodyParams["DefaultAction"] = serializeAws_json1_1DefaultAction(
      input.DefaultAction,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.VisibilityConfig !== undefined) {
    bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(
      input.VisibilityConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DefaultAction = (
  input: DefaultAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Allow !== undefined) {
    bodyParams["Allow"] = serializeAws_json1_1AllowAction(input.Allow, context);
  }
  if (input.Block !== undefined) {
    bodyParams["Block"] = serializeAws_json1_1BlockAction(input.Block, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteIPSetRequest = (
  input: DeleteIPSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLoggingConfigurationRequest = (
  input: DeleteLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRegexPatternSetRequest = (
  input: DeleteRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRuleGroupRequest = (
  input: DeleteRuleGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteWebACLRequest = (
  input: DeleteWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeManagedRuleGroupRequest = (
  input: DescribeManagedRuleGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.VendorName !== undefined) {
    bodyParams["VendorName"] = input.VendorName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateWebACLRequest = (
  input: DisassociateWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ExcludedRule = (
  input: ExcludedRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1ExcludedRules = (
  input: Array<ExcludedRule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ExcludedRule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1FieldToMatch = (
  input: FieldToMatch,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllQueryArguments !== undefined) {
    bodyParams["AllQueryArguments"] = serializeAws_json1_1AllQueryArguments(
      input.AllQueryArguments,
      context
    );
  }
  if (input.Body !== undefined) {
    bodyParams["Body"] = serializeAws_json1_1Body(input.Body, context);
  }
  if (input.Method !== undefined) {
    bodyParams["Method"] = serializeAws_json1_1Method(input.Method, context);
  }
  if (input.QueryString !== undefined) {
    bodyParams["QueryString"] = serializeAws_json1_1QueryString(
      input.QueryString,
      context
    );
  }
  if (input.SingleHeader !== undefined) {
    bodyParams["SingleHeader"] = serializeAws_json1_1SingleHeader(
      input.SingleHeader,
      context
    );
  }
  if (input.SingleQueryArgument !== undefined) {
    bodyParams["SingleQueryArgument"] = serializeAws_json1_1SingleQueryArgument(
      input.SingleQueryArgument,
      context
    );
  }
  if (input.UriPath !== undefined) {
    bodyParams["UriPath"] = serializeAws_json1_1UriPath(input.UriPath, context);
  }
  return bodyParams;
};

const serializeAws_json1_1GeoMatchStatement = (
  input: GeoMatchStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CountryCodes !== undefined) {
    bodyParams["CountryCodes"] = serializeAws_json1_1CountryCodes(
      input.CountryCodes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetIPSetRequest = (
  input: GetIPSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLoggingConfigurationRequest = (
  input: GetLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRateBasedStatementManagedKeysRequest = (
  input: GetRateBasedStatementManagedKeysRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RuleName !== undefined) {
    bodyParams["RuleName"] = input.RuleName;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.WebACLId !== undefined) {
    bodyParams["WebACLId"] = input.WebACLId;
  }
  if (input.WebACLName !== undefined) {
    bodyParams["WebACLName"] = input.WebACLName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRegexPatternSetRequest = (
  input: GetRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRuleGroupRequest = (
  input: GetRuleGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSampledRequestsRequest = (
  input: GetSampledRequestsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxItems !== undefined) {
    bodyParams["MaxItems"] = input.MaxItems;
  }
  if (input.RuleMetricName !== undefined) {
    bodyParams["RuleMetricName"] = input.RuleMetricName;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.TimeWindow !== undefined) {
    bodyParams["TimeWindow"] = serializeAws_json1_1TimeWindow(
      input.TimeWindow,
      context
    );
  }
  if (input.WebAclArn !== undefined) {
    bodyParams["WebAclArn"] = input.WebAclArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetWebACLForResourceRequest = (
  input: GetWebACLForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetWebACLRequest = (
  input: GetWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1IPAddresses = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1IPSetReferenceStatement = (
  input: IPSetReferenceStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ARN !== undefined) {
    bodyParams["ARN"] = input.ARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAvailableManagedRuleGroupsRequest = (
  input: ListAvailableManagedRuleGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1ListIPSetsRequest = (
  input: ListIPSetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1ListLoggingConfigurationsRequest = (
  input: ListLoggingConfigurationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRegexPatternSetsRequest = (
  input: ListRegexPatternSetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourcesForWebACLRequest = (
  input: ListResourcesForWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = input.ResourceType;
  }
  if (input.WebACLArn !== undefined) {
    bodyParams["WebACLArn"] = input.WebACLArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRuleGroupsRequest = (
  input: ListRuleGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListWebACLsRequest = (
  input: ListWebACLsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextMarker !== undefined) {
    bodyParams["NextMarker"] = input.NextMarker;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1LogDestinationConfigs = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1LoggingConfiguration = (
  input: LoggingConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LogDestinationConfigs !== undefined) {
    bodyParams[
      "LogDestinationConfigs"
    ] = serializeAws_json1_1LogDestinationConfigs(
      input.LogDestinationConfigs,
      context
    );
  }
  if (input.RedactedFields !== undefined) {
    bodyParams["RedactedFields"] = serializeAws_json1_1RedactedFields(
      input.RedactedFields,
      context
    );
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ManagedRuleGroupStatement = (
  input: ManagedRuleGroupStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExcludedRules !== undefined) {
    bodyParams["ExcludedRules"] = serializeAws_json1_1ExcludedRules(
      input.ExcludedRules,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.VendorName !== undefined) {
    bodyParams["VendorName"] = input.VendorName;
  }
  return bodyParams;
};

const serializeAws_json1_1Method = (
  input: Method,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1NoneAction = (
  input: NoneAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1NotStatement = (
  input: NotStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Statement !== undefined) {
    bodyParams["Statement"] = serializeAws_json1_1Statement(
      input.Statement,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1OrStatement = (
  input: OrStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Statements !== undefined) {
    bodyParams["Statements"] = serializeAws_json1_1Statements(
      input.Statements,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1OverrideAction = (
  input: OverrideAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Count !== undefined) {
    bodyParams["Count"] = serializeAws_json1_1CountAction(input.Count, context);
  }
  if (input.None !== undefined) {
    bodyParams["None"] = serializeAws_json1_1NoneAction(input.None, context);
  }
  return bodyParams;
};

const serializeAws_json1_1PutLoggingConfigurationRequest = (
  input: PutLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LoggingConfiguration !== undefined) {
    bodyParams[
      "LoggingConfiguration"
    ] = serializeAws_json1_1LoggingConfiguration(
      input.LoggingConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1QueryString = (
  input: QueryString,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1RateBasedStatement = (
  input: RateBasedStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AggregateKeyType !== undefined) {
    bodyParams["AggregateKeyType"] = input.AggregateKeyType;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.ScopeDownStatement !== undefined) {
    bodyParams["ScopeDownStatement"] = serializeAws_json1_1Statement(
      input.ScopeDownStatement,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RedactedFields = (
  input: Array<FieldToMatch>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1FieldToMatch(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Regex = (
  input: Regex,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RegexString !== undefined) {
    bodyParams["RegexString"] = input.RegexString;
  }
  return bodyParams;
};

const serializeAws_json1_1RegexPatternSetReferenceStatement = (
  input: RegexPatternSetReferenceStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ARN !== undefined) {
    bodyParams["ARN"] = input.ARN;
  }
  if (input.FieldToMatch !== undefined) {
    bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(
      input.FieldToMatch,
      context
    );
  }
  if (input.TextTransformations !== undefined) {
    bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(
      input.TextTransformations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegularExpressionList = (
  input: Array<Regex>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Regex(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = serializeAws_json1_1RuleAction(
      input.Action,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OverrideAction !== undefined) {
    bodyParams["OverrideAction"] = serializeAws_json1_1OverrideAction(
      input.OverrideAction,
      context
    );
  }
  if (input.Priority !== undefined) {
    bodyParams["Priority"] = input.Priority;
  }
  if (input.Statement !== undefined) {
    bodyParams["Statement"] = serializeAws_json1_1Statement(
      input.Statement,
      context
    );
  }
  if (input.VisibilityConfig !== undefined) {
    bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(
      input.VisibilityConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RuleAction = (
  input: RuleAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Allow !== undefined) {
    bodyParams["Allow"] = serializeAws_json1_1AllowAction(input.Allow, context);
  }
  if (input.Block !== undefined) {
    bodyParams["Block"] = serializeAws_json1_1BlockAction(input.Block, context);
  }
  if (input.Count !== undefined) {
    bodyParams["Count"] = serializeAws_json1_1CountAction(input.Count, context);
  }
  return bodyParams;
};

const serializeAws_json1_1RuleGroupReferenceStatement = (
  input: RuleGroupReferenceStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ARN !== undefined) {
    bodyParams["ARN"] = input.ARN;
  }
  if (input.ExcludedRules !== undefined) {
    bodyParams["ExcludedRules"] = serializeAws_json1_1ExcludedRules(
      input.ExcludedRules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Rules = (
  input: Array<Rule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Rule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1SingleHeader = (
  input: SingleHeader,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1SingleQueryArgument = (
  input: SingleQueryArgument,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1SizeConstraintStatement = (
  input: SizeConstraintStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.FieldToMatch !== undefined) {
    bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(
      input.FieldToMatch,
      context
    );
  }
  if (input.Size !== undefined) {
    bodyParams["Size"] = input.Size;
  }
  if (input.TextTransformations !== undefined) {
    bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(
      input.TextTransformations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SqliMatchStatement = (
  input: SqliMatchStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FieldToMatch !== undefined) {
    bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(
      input.FieldToMatch,
      context
    );
  }
  if (input.TextTransformations !== undefined) {
    bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(
      input.TextTransformations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Statement = (
  input: Statement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AndStatement !== undefined) {
    bodyParams["AndStatement"] = serializeAws_json1_1AndStatement(
      input.AndStatement,
      context
    );
  }
  if (input.ByteMatchStatement !== undefined) {
    bodyParams["ByteMatchStatement"] = serializeAws_json1_1ByteMatchStatement(
      input.ByteMatchStatement,
      context
    );
  }
  if (input.GeoMatchStatement !== undefined) {
    bodyParams["GeoMatchStatement"] = serializeAws_json1_1GeoMatchStatement(
      input.GeoMatchStatement,
      context
    );
  }
  if (input.IPSetReferenceStatement !== undefined) {
    bodyParams[
      "IPSetReferenceStatement"
    ] = serializeAws_json1_1IPSetReferenceStatement(
      input.IPSetReferenceStatement,
      context
    );
  }
  if (input.ManagedRuleGroupStatement !== undefined) {
    bodyParams[
      "ManagedRuleGroupStatement"
    ] = serializeAws_json1_1ManagedRuleGroupStatement(
      input.ManagedRuleGroupStatement,
      context
    );
  }
  if (input.NotStatement !== undefined) {
    bodyParams["NotStatement"] = serializeAws_json1_1NotStatement(
      input.NotStatement,
      context
    );
  }
  if (input.OrStatement !== undefined) {
    bodyParams["OrStatement"] = serializeAws_json1_1OrStatement(
      input.OrStatement,
      context
    );
  }
  if (input.RateBasedStatement !== undefined) {
    bodyParams["RateBasedStatement"] = serializeAws_json1_1RateBasedStatement(
      input.RateBasedStatement,
      context
    );
  }
  if (input.RegexPatternSetReferenceStatement !== undefined) {
    bodyParams[
      "RegexPatternSetReferenceStatement"
    ] = serializeAws_json1_1RegexPatternSetReferenceStatement(
      input.RegexPatternSetReferenceStatement,
      context
    );
  }
  if (input.RuleGroupReferenceStatement !== undefined) {
    bodyParams[
      "RuleGroupReferenceStatement"
    ] = serializeAws_json1_1RuleGroupReferenceStatement(
      input.RuleGroupReferenceStatement,
      context
    );
  }
  if (input.SizeConstraintStatement !== undefined) {
    bodyParams[
      "SizeConstraintStatement"
    ] = serializeAws_json1_1SizeConstraintStatement(
      input.SizeConstraintStatement,
      context
    );
  }
  if (input.SqliMatchStatement !== undefined) {
    bodyParams["SqliMatchStatement"] = serializeAws_json1_1SqliMatchStatement(
      input.SqliMatchStatement,
      context
    );
  }
  if (input.XssMatchStatement !== undefined) {
    bodyParams["XssMatchStatement"] = serializeAws_json1_1XssMatchStatement(
      input.XssMatchStatement,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Statements = (
  input: Array<Statement>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Statement(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TextTransformation = (
  input: TextTransformation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Priority !== undefined) {
    bodyParams["Priority"] = input.Priority;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1TextTransformations = (
  input: Array<TextTransformation>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TextTransformation(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TimeWindow = (
  input: TimeWindow,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateIPSetRequest = (
  input: UpdateIPSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Addresses !== undefined) {
    bodyParams["Addresses"] = serializeAws_json1_1IPAddresses(
      input.Addresses,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRegexPatternSetRequest = (
  input: UpdateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RegularExpressionList !== undefined) {
    bodyParams[
      "RegularExpressionList"
    ] = serializeAws_json1_1RegularExpressionList(
      input.RegularExpressionList,
      context
    );
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRuleGroupRequest = (
  input: UpdateRuleGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.VisibilityConfig !== undefined) {
    bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(
      input.VisibilityConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateWebACLRequest = (
  input: UpdateWebACLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DefaultAction !== undefined) {
    bodyParams["DefaultAction"] = serializeAws_json1_1DefaultAction(
      input.DefaultAction,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.LockToken !== undefined) {
    bodyParams["LockToken"] = input.LockToken;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1Rules(input.Rules, context);
  }
  if (input.Scope !== undefined) {
    bodyParams["Scope"] = input.Scope;
  }
  if (input.VisibilityConfig !== undefined) {
    bodyParams["VisibilityConfig"] = serializeAws_json1_1VisibilityConfig(
      input.VisibilityConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UriPath = (
  input: UriPath,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1VisibilityConfig = (
  input: VisibilityConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchMetricsEnabled !== undefined) {
    bodyParams["CloudWatchMetricsEnabled"] = input.CloudWatchMetricsEnabled;
  }
  if (input.MetricName !== undefined) {
    bodyParams["MetricName"] = input.MetricName;
  }
  if (input.SampledRequestsEnabled !== undefined) {
    bodyParams["SampledRequestsEnabled"] = input.SampledRequestsEnabled;
  }
  return bodyParams;
};

const serializeAws_json1_1XssMatchStatement = (
  input: XssMatchStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FieldToMatch !== undefined) {
    bodyParams["FieldToMatch"] = serializeAws_json1_1FieldToMatch(
      input.FieldToMatch,
      context
    );
  }
  if (input.TextTransformations !== undefined) {
    bodyParams["TextTransformations"] = serializeAws_json1_1TextTransformations(
      input.TextTransformations,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AllQueryArguments = (
  output: any,
  context: __SerdeContext
): AllQueryArguments => {
  let contents: any = {
    __type: "AllQueryArguments"
  };
  return contents;
};

const deserializeAws_json1_1AllowAction = (
  output: any,
  context: __SerdeContext
): AllowAction => {
  let contents: any = {
    __type: "AllowAction"
  };
  return contents;
};

const deserializeAws_json1_1AndStatement = (
  output: any,
  context: __SerdeContext
): AndStatement => {
  let contents: any = {
    __type: "AndStatement",
    Statements: undefined
  };
  if (output.Statements !== undefined && output.Statements !== null) {
    contents.Statements = deserializeAws_json1_1Statements(
      output.Statements,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AssociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): AssociateWebACLResponse => {
  let contents: any = {
    __type: "AssociateWebACLResponse"
  };
  return contents;
};

const deserializeAws_json1_1BlockAction = (
  output: any,
  context: __SerdeContext
): BlockAction => {
  let contents: any = {
    __type: "BlockAction"
  };
  return contents;
};

const deserializeAws_json1_1Body = (
  output: any,
  context: __SerdeContext
): Body => {
  let contents: any = {
    __type: "Body"
  };
  return contents;
};

const deserializeAws_json1_1ByteMatchStatement = (
  output: any,
  context: __SerdeContext
): ByteMatchStatement => {
  let contents: any = {
    __type: "ByteMatchStatement",
    FieldToMatch: undefined,
    PositionalConstraint: undefined,
    SearchString: undefined,
    TextTransformations: undefined
  };
  if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
    contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(
      output.FieldToMatch,
      context
    );
  }
  if (
    output.PositionalConstraint !== undefined &&
    output.PositionalConstraint !== null
  ) {
    contents.PositionalConstraint = output.PositionalConstraint;
  }
  if (output.SearchString !== undefined && output.SearchString !== null) {
    contents.SearchString = context.base64Decoder(output.SearchString);
  }
  if (
    output.TextTransformations !== undefined &&
    output.TextTransformations !== null
  ) {
    contents.TextTransformations = deserializeAws_json1_1TextTransformations(
      output.TextTransformations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CheckCapacityResponse = (
  output: any,
  context: __SerdeContext
): CheckCapacityResponse => {
  let contents: any = {
    __type: "CheckCapacityResponse",
    Capacity: undefined
  };
  if (output.Capacity !== undefined && output.Capacity !== null) {
    contents.Capacity = output.Capacity;
  }
  return contents;
};

const deserializeAws_json1_1CountAction = (
  output: any,
  context: __SerdeContext
): CountAction => {
  let contents: any = {
    __type: "CountAction"
  };
  return contents;
};

const deserializeAws_json1_1CountryCodes = (
  output: any,
  context: __SerdeContext
): Array<CountryCode | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CreateIPSetResponse = (
  output: any,
  context: __SerdeContext
): CreateIPSetResponse => {
  let contents: any = {
    __type: "CreateIPSetResponse",
    Summary: undefined
  };
  if (output.Summary !== undefined && output.Summary !== null) {
    contents.Summary = deserializeAws_json1_1IPSetSummary(
      output.Summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): CreateRegexPatternSetResponse => {
  let contents: any = {
    __type: "CreateRegexPatternSetResponse",
    Summary: undefined
  };
  if (output.Summary !== undefined && output.Summary !== null) {
    contents.Summary = deserializeAws_json1_1RegexPatternSetSummary(
      output.Summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateRuleGroupResponse => {
  let contents: any = {
    __type: "CreateRuleGroupResponse",
    Summary: undefined
  };
  if (output.Summary !== undefined && output.Summary !== null) {
    contents.Summary = deserializeAws_json1_1RuleGroupSummary(
      output.Summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateWebACLResponse = (
  output: any,
  context: __SerdeContext
): CreateWebACLResponse => {
  let contents: any = {
    __type: "CreateWebACLResponse",
    Summary: undefined
  };
  if (output.Summary !== undefined && output.Summary !== null) {
    contents.Summary = deserializeAws_json1_1WebACLSummary(
      output.Summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DefaultAction = (
  output: any,
  context: __SerdeContext
): DefaultAction => {
  let contents: any = {
    __type: "DefaultAction",
    Allow: undefined,
    Block: undefined
  };
  if (output.Allow !== undefined && output.Allow !== null) {
    contents.Allow = deserializeAws_json1_1AllowAction(output.Allow, context);
  }
  if (output.Block !== undefined && output.Block !== null) {
    contents.Block = deserializeAws_json1_1BlockAction(output.Block, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteIPSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteIPSetResponse => {
  let contents: any = {
    __type: "DeleteIPSetResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteLoggingConfigurationResponse => {
  let contents: any = {
    __type: "DeleteLoggingConfigurationResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteRegexPatternSetResponse => {
  let contents: any = {
    __type: "DeleteRegexPatternSetResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteRuleGroupResponse => {
  let contents: any = {
    __type: "DeleteRuleGroupResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteWebACLResponse = (
  output: any,
  context: __SerdeContext
): DeleteWebACLResponse => {
  let contents: any = {
    __type: "DeleteWebACLResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeManagedRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeManagedRuleGroupResponse => {
  let contents: any = {
    __type: "DescribeManagedRuleGroupResponse",
    Capacity: undefined,
    Rules: undefined
  };
  if (output.Capacity !== undefined && output.Capacity !== null) {
    contents.Capacity = output.Capacity;
  }
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_json1_1RuleSummaries(output.Rules, context);
  }
  return contents;
};

const deserializeAws_json1_1DisassociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): DisassociateWebACLResponse => {
  let contents: any = {
    __type: "DisassociateWebACLResponse"
  };
  return contents;
};

const deserializeAws_json1_1ExcludedRule = (
  output: any,
  context: __SerdeContext
): ExcludedRule => {
  let contents: any = {
    __type: "ExcludedRule",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1ExcludedRules = (
  output: any,
  context: __SerdeContext
): Array<ExcludedRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExcludedRule(entry, context)
  );
};

const deserializeAws_json1_1FieldToMatch = (
  output: any,
  context: __SerdeContext
): FieldToMatch => {
  let contents: any = {
    __type: "FieldToMatch",
    AllQueryArguments: undefined,
    Body: undefined,
    Method: undefined,
    QueryString: undefined,
    SingleHeader: undefined,
    SingleQueryArgument: undefined,
    UriPath: undefined
  };
  if (
    output.AllQueryArguments !== undefined &&
    output.AllQueryArguments !== null
  ) {
    contents.AllQueryArguments = deserializeAws_json1_1AllQueryArguments(
      output.AllQueryArguments,
      context
    );
  }
  if (output.Body !== undefined && output.Body !== null) {
    contents.Body = deserializeAws_json1_1Body(output.Body, context);
  }
  if (output.Method !== undefined && output.Method !== null) {
    contents.Method = deserializeAws_json1_1Method(output.Method, context);
  }
  if (output.QueryString !== undefined && output.QueryString !== null) {
    contents.QueryString = deserializeAws_json1_1QueryString(
      output.QueryString,
      context
    );
  }
  if (output.SingleHeader !== undefined && output.SingleHeader !== null) {
    contents.SingleHeader = deserializeAws_json1_1SingleHeader(
      output.SingleHeader,
      context
    );
  }
  if (
    output.SingleQueryArgument !== undefined &&
    output.SingleQueryArgument !== null
  ) {
    contents.SingleQueryArgument = deserializeAws_json1_1SingleQueryArgument(
      output.SingleQueryArgument,
      context
    );
  }
  if (output.UriPath !== undefined && output.UriPath !== null) {
    contents.UriPath = deserializeAws_json1_1UriPath(output.UriPath, context);
  }
  return contents;
};

const deserializeAws_json1_1GeoMatchStatement = (
  output: any,
  context: __SerdeContext
): GeoMatchStatement => {
  let contents: any = {
    __type: "GeoMatchStatement",
    CountryCodes: undefined
  };
  if (output.CountryCodes !== undefined && output.CountryCodes !== null) {
    contents.CountryCodes = deserializeAws_json1_1CountryCodes(
      output.CountryCodes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetIPSetResponse = (
  output: any,
  context: __SerdeContext
): GetIPSetResponse => {
  let contents: any = {
    __type: "GetIPSetResponse",
    IPSet: undefined,
    LockToken: undefined
  };
  if (output.IPSet !== undefined && output.IPSet !== null) {
    contents.IPSet = deserializeAws_json1_1IPSet(output.IPSet, context);
  }
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  return contents;
};

const deserializeAws_json1_1GetLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetLoggingConfigurationResponse => {
  let contents: any = {
    __type: "GetLoggingConfigurationResponse",
    LoggingConfiguration: undefined
  };
  if (
    output.LoggingConfiguration !== undefined &&
    output.LoggingConfiguration !== null
  ) {
    contents.LoggingConfiguration = deserializeAws_json1_1LoggingConfiguration(
      output.LoggingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedStatementManagedKeysResponse => {
  let contents: any = {
    __type: "GetRateBasedStatementManagedKeysResponse",
    ManagedKeysIPV4: undefined,
    ManagedKeysIPV6: undefined
  };
  if (output.ManagedKeysIPV4 !== undefined && output.ManagedKeysIPV4 !== null) {
    contents.ManagedKeysIPV4 = deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(
      output.ManagedKeysIPV4,
      context
    );
  }
  if (output.ManagedKeysIPV6 !== undefined && output.ManagedKeysIPV6 !== null) {
    contents.ManagedKeysIPV6 = deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(
      output.ManagedKeysIPV6,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): GetRegexPatternSetResponse => {
  let contents: any = {
    __type: "GetRegexPatternSetResponse",
    LockToken: undefined,
    RegexPatternSet: undefined
  };
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.RegexPatternSet !== undefined && output.RegexPatternSet !== null) {
    contents.RegexPatternSet = deserializeAws_json1_1RegexPatternSet(
      output.RegexPatternSet,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): GetRuleGroupResponse => {
  let contents: any = {
    __type: "GetRuleGroupResponse",
    LockToken: undefined,
    RuleGroup: undefined
  };
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.RuleGroup !== undefined && output.RuleGroup !== null) {
    contents.RuleGroup = deserializeAws_json1_1RuleGroup(
      output.RuleGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSampledRequestsResponse = (
  output: any,
  context: __SerdeContext
): GetSampledRequestsResponse => {
  let contents: any = {
    __type: "GetSampledRequestsResponse",
    PopulationSize: undefined,
    SampledRequests: undefined,
    TimeWindow: undefined
  };
  if (output.PopulationSize !== undefined && output.PopulationSize !== null) {
    contents.PopulationSize = output.PopulationSize;
  }
  if (output.SampledRequests !== undefined && output.SampledRequests !== null) {
    contents.SampledRequests = deserializeAws_json1_1SampledHTTPRequests(
      output.SampledRequests,
      context
    );
  }
  if (output.TimeWindow !== undefined && output.TimeWindow !== null) {
    contents.TimeWindow = deserializeAws_json1_1TimeWindow(
      output.TimeWindow,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetWebACLForResourceResponse = (
  output: any,
  context: __SerdeContext
): GetWebACLForResourceResponse => {
  let contents: any = {
    __type: "GetWebACLForResourceResponse",
    WebACL: undefined
  };
  if (output.WebACL !== undefined && output.WebACL !== null) {
    contents.WebACL = deserializeAws_json1_1WebACL(output.WebACL, context);
  }
  return contents;
};

const deserializeAws_json1_1GetWebACLResponse = (
  output: any,
  context: __SerdeContext
): GetWebACLResponse => {
  let contents: any = {
    __type: "GetWebACLResponse",
    LockToken: undefined,
    WebACL: undefined
  };
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.WebACL !== undefined && output.WebACL !== null) {
    contents.WebACL = deserializeAws_json1_1WebACL(output.WebACL, context);
  }
  return contents;
};

const deserializeAws_json1_1HTTPHeader = (
  output: any,
  context: __SerdeContext
): HTTPHeader => {
  let contents: any = {
    __type: "HTTPHeader",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1HTTPHeaders = (
  output: any,
  context: __SerdeContext
): Array<HTTPHeader> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HTTPHeader(entry, context)
  );
};

const deserializeAws_json1_1HTTPRequest = (
  output: any,
  context: __SerdeContext
): HTTPRequest => {
  let contents: any = {
    __type: "HTTPRequest",
    ClientIP: undefined,
    Country: undefined,
    HTTPVersion: undefined,
    Headers: undefined,
    Method: undefined,
    URI: undefined
  };
  if (output.ClientIP !== undefined && output.ClientIP !== null) {
    contents.ClientIP = output.ClientIP;
  }
  if (output.Country !== undefined && output.Country !== null) {
    contents.Country = output.Country;
  }
  if (output.HTTPVersion !== undefined && output.HTTPVersion !== null) {
    contents.HTTPVersion = output.HTTPVersion;
  }
  if (output.Headers !== undefined && output.Headers !== null) {
    contents.Headers = deserializeAws_json1_1HTTPHeaders(
      output.Headers,
      context
    );
  }
  if (output.Method !== undefined && output.Method !== null) {
    contents.Method = output.Method;
  }
  if (output.URI !== undefined && output.URI !== null) {
    contents.URI = output.URI;
  }
  return contents;
};

const deserializeAws_json1_1IPAddresses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IPSet = (
  output: any,
  context: __SerdeContext
): IPSet => {
  let contents: any = {
    __type: "IPSet",
    ARN: undefined,
    Addresses: undefined,
    Description: undefined,
    IPAddressVersion: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Addresses !== undefined && output.Addresses !== null) {
    contents.Addresses = deserializeAws_json1_1IPAddresses(
      output.Addresses,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.IPAddressVersion !== undefined &&
    output.IPAddressVersion !== null
  ) {
    contents.IPAddressVersion = output.IPAddressVersion;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1IPSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): IPSetReferenceStatement => {
  let contents: any = {
    __type: "IPSetReferenceStatement",
    ARN: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  return contents;
};

const deserializeAws_json1_1IPSetSummaries = (
  output: any,
  context: __SerdeContext
): Array<IPSetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IPSetSummary(entry, context)
  );
};

const deserializeAws_json1_1IPSetSummary = (
  output: any,
  context: __SerdeContext
): IPSetSummary => {
  let contents: any = {
    __type: "IPSetSummary",
    ARN: undefined,
    Description: undefined,
    Id: undefined,
    LockToken: undefined,
    Name: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableManagedRuleGroupsResponse => {
  let contents: any = {
    __type: "ListAvailableManagedRuleGroupsResponse",
    ManagedRuleGroups: undefined,
    NextMarker: undefined
  };
  if (
    output.ManagedRuleGroups !== undefined &&
    output.ManagedRuleGroups !== null
  ) {
    contents.ManagedRuleGroups = deserializeAws_json1_1ManagedRuleGroupSummaries(
      output.ManagedRuleGroups,
      context
    );
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  return contents;
};

const deserializeAws_json1_1ListIPSetsResponse = (
  output: any,
  context: __SerdeContext
): ListIPSetsResponse => {
  let contents: any = {
    __type: "ListIPSetsResponse",
    IPSets: undefined,
    NextMarker: undefined
  };
  if (output.IPSets !== undefined && output.IPSets !== null) {
    contents.IPSets = deserializeAws_json1_1IPSetSummaries(
      output.IPSets,
      context
    );
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  return contents;
};

const deserializeAws_json1_1ListLoggingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListLoggingConfigurationsResponse => {
  let contents: any = {
    __type: "ListLoggingConfigurationsResponse",
    LoggingConfigurations: undefined,
    NextMarker: undefined
  };
  if (
    output.LoggingConfigurations !== undefined &&
    output.LoggingConfigurations !== null
  ) {
    contents.LoggingConfigurations = deserializeAws_json1_1LoggingConfigurations(
      output.LoggingConfigurations,
      context
    );
  }
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  return contents;
};

const deserializeAws_json1_1ListRegexPatternSetsResponse = (
  output: any,
  context: __SerdeContext
): ListRegexPatternSetsResponse => {
  let contents: any = {
    __type: "ListRegexPatternSetsResponse",
    NextMarker: undefined,
    RegexPatternSets: undefined
  };
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (
    output.RegexPatternSets !== undefined &&
    output.RegexPatternSets !== null
  ) {
    contents.RegexPatternSets = deserializeAws_json1_1RegexPatternSetSummaries(
      output.RegexPatternSets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListResourcesForWebACLResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesForWebACLResponse => {
  let contents: any = {
    __type: "ListResourcesForWebACLResponse",
    ResourceArns: undefined
  };
  if (output.ResourceArns !== undefined && output.ResourceArns !== null) {
    contents.ResourceArns = deserializeAws_json1_1ResourceArns(
      output.ResourceArns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListRuleGroupsResponse => {
  let contents: any = {
    __type: "ListRuleGroupsResponse",
    NextMarker: undefined,
    RuleGroups: undefined
  };
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.RuleGroups !== undefined && output.RuleGroups !== null) {
    contents.RuleGroups = deserializeAws_json1_1RuleGroupSummaries(
      output.RuleGroups,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    NextMarker: undefined,
    TagInfoForResource: undefined
  };
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (
    output.TagInfoForResource !== undefined &&
    output.TagInfoForResource !== null
  ) {
    contents.TagInfoForResource = deserializeAws_json1_1TagInfoForResource(
      output.TagInfoForResource,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListWebACLsResponse = (
  output: any,
  context: __SerdeContext
): ListWebACLsResponse => {
  let contents: any = {
    __type: "ListWebACLsResponse",
    NextMarker: undefined,
    WebACLs: undefined
  };
  if (output.NextMarker !== undefined && output.NextMarker !== null) {
    contents.NextMarker = output.NextMarker;
  }
  if (output.WebACLs !== undefined && output.WebACLs !== null) {
    contents.WebACLs = deserializeAws_json1_1WebACLSummaries(
      output.WebACLs,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LogDestinationConfigs = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LoggingConfiguration = (
  output: any,
  context: __SerdeContext
): LoggingConfiguration => {
  let contents: any = {
    __type: "LoggingConfiguration",
    LogDestinationConfigs: undefined,
    RedactedFields: undefined,
    ResourceArn: undefined
  };
  if (
    output.LogDestinationConfigs !== undefined &&
    output.LogDestinationConfigs !== null
  ) {
    contents.LogDestinationConfigs = deserializeAws_json1_1LogDestinationConfigs(
      output.LogDestinationConfigs,
      context
    );
  }
  if (output.RedactedFields !== undefined && output.RedactedFields !== null) {
    contents.RedactedFields = deserializeAws_json1_1RedactedFields(
      output.RedactedFields,
      context
    );
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  return contents;
};

const deserializeAws_json1_1LoggingConfigurations = (
  output: any,
  context: __SerdeContext
): Array<LoggingConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoggingConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ManagedRuleGroupStatement = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupStatement => {
  let contents: any = {
    __type: "ManagedRuleGroupStatement",
    ExcludedRules: undefined,
    Name: undefined,
    VendorName: undefined
  };
  if (output.ExcludedRules !== undefined && output.ExcludedRules !== null) {
    contents.ExcludedRules = deserializeAws_json1_1ExcludedRules(
      output.ExcludedRules,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.VendorName !== undefined && output.VendorName !== null) {
    contents.VendorName = output.VendorName;
  }
  return contents;
};

const deserializeAws_json1_1ManagedRuleGroupSummaries = (
  output: any,
  context: __SerdeContext
): Array<ManagedRuleGroupSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ManagedRuleGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1ManagedRuleGroupSummary = (
  output: any,
  context: __SerdeContext
): ManagedRuleGroupSummary => {
  let contents: any = {
    __type: "ManagedRuleGroupSummary",
    Description: undefined,
    Name: undefined,
    VendorName: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.VendorName !== undefined && output.VendorName !== null) {
    contents.VendorName = output.VendorName;
  }
  return contents;
};

const deserializeAws_json1_1Method = (
  output: any,
  context: __SerdeContext
): Method => {
  let contents: any = {
    __type: "Method"
  };
  return contents;
};

const deserializeAws_json1_1NoneAction = (
  output: any,
  context: __SerdeContext
): NoneAction => {
  let contents: any = {
    __type: "NoneAction"
  };
  return contents;
};

const deserializeAws_json1_1NotStatement = (
  output: any,
  context: __SerdeContext
): NotStatement => {
  let contents: any = {
    __type: "NotStatement",
    Statement: undefined
  };
  if (output.Statement !== undefined && output.Statement !== null) {
    contents.Statement = deserializeAws_json1_1Statement(
      output.Statement,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1OrStatement = (
  output: any,
  context: __SerdeContext
): OrStatement => {
  let contents: any = {
    __type: "OrStatement",
    Statements: undefined
  };
  if (output.Statements !== undefined && output.Statements !== null) {
    contents.Statements = deserializeAws_json1_1Statements(
      output.Statements,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1OverrideAction = (
  output: any,
  context: __SerdeContext
): OverrideAction => {
  let contents: any = {
    __type: "OverrideAction",
    Count: undefined,
    None: undefined
  };
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = deserializeAws_json1_1CountAction(output.Count, context);
  }
  if (output.None !== undefined && output.None !== null) {
    contents.None = deserializeAws_json1_1NoneAction(output.None, context);
  }
  return contents;
};

const deserializeAws_json1_1PutLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutLoggingConfigurationResponse => {
  let contents: any = {
    __type: "PutLoggingConfigurationResponse",
    LoggingConfiguration: undefined
  };
  if (
    output.LoggingConfiguration !== undefined &&
    output.LoggingConfiguration !== null
  ) {
    contents.LoggingConfiguration = deserializeAws_json1_1LoggingConfiguration(
      output.LoggingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1QueryString = (
  output: any,
  context: __SerdeContext
): QueryString => {
  let contents: any = {
    __type: "QueryString"
  };
  return contents;
};

const deserializeAws_json1_1RateBasedStatement = (
  output: any,
  context: __SerdeContext
): RateBasedStatement => {
  let contents: any = {
    __type: "RateBasedStatement",
    AggregateKeyType: undefined,
    Limit: undefined,
    ScopeDownStatement: undefined
  };
  if (
    output.AggregateKeyType !== undefined &&
    output.AggregateKeyType !== null
  ) {
    contents.AggregateKeyType = output.AggregateKeyType;
  }
  if (output.Limit !== undefined && output.Limit !== null) {
    contents.Limit = output.Limit;
  }
  if (
    output.ScopeDownStatement !== undefined &&
    output.ScopeDownStatement !== null
  ) {
    contents.ScopeDownStatement = deserializeAws_json1_1Statement(
      output.ScopeDownStatement,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RateBasedStatementManagedKeysIPSet = (
  output: any,
  context: __SerdeContext
): RateBasedStatementManagedKeysIPSet => {
  let contents: any = {
    __type: "RateBasedStatementManagedKeysIPSet",
    Addresses: undefined,
    IPAddressVersion: undefined
  };
  if (output.Addresses !== undefined && output.Addresses !== null) {
    contents.Addresses = deserializeAws_json1_1IPAddresses(
      output.Addresses,
      context
    );
  }
  if (
    output.IPAddressVersion !== undefined &&
    output.IPAddressVersion !== null
  ) {
    contents.IPAddressVersion = output.IPAddressVersion;
  }
  return contents;
};

const deserializeAws_json1_1RedactedFields = (
  output: any,
  context: __SerdeContext
): Array<FieldToMatch> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FieldToMatch(entry, context)
  );
};

const deserializeAws_json1_1Regex = (
  output: any,
  context: __SerdeContext
): Regex => {
  let contents: any = {
    __type: "Regex",
    RegexString: undefined
  };
  if (output.RegexString !== undefined && output.RegexString !== null) {
    contents.RegexString = output.RegexString;
  }
  return contents;
};

const deserializeAws_json1_1RegexPatternSet = (
  output: any,
  context: __SerdeContext
): RegexPatternSet => {
  let contents: any = {
    __type: "RegexPatternSet",
    ARN: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    RegularExpressionList: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.RegularExpressionList !== undefined &&
    output.RegularExpressionList !== null
  ) {
    contents.RegularExpressionList = deserializeAws_json1_1RegularExpressionList(
      output.RegularExpressionList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RegexPatternSetReferenceStatement = (
  output: any,
  context: __SerdeContext
): RegexPatternSetReferenceStatement => {
  let contents: any = {
    __type: "RegexPatternSetReferenceStatement",
    ARN: undefined,
    FieldToMatch: undefined,
    TextTransformations: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
    contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(
      output.FieldToMatch,
      context
    );
  }
  if (
    output.TextTransformations !== undefined &&
    output.TextTransformations !== null
  ) {
    contents.TextTransformations = deserializeAws_json1_1TextTransformations(
      output.TextTransformations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RegexPatternSetSummaries = (
  output: any,
  context: __SerdeContext
): Array<RegexPatternSetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RegexPatternSetSummary(entry, context)
  );
};

const deserializeAws_json1_1RegexPatternSetSummary = (
  output: any,
  context: __SerdeContext
): RegexPatternSetSummary => {
  let contents: any = {
    __type: "RegexPatternSetSummary",
    ARN: undefined,
    Description: undefined,
    Id: undefined,
    LockToken: undefined,
    Name: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1RegularExpressionList = (
  output: any,
  context: __SerdeContext
): Array<Regex> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Regex(entry, context)
  );
};

const deserializeAws_json1_1ResourceArns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  let contents: any = {
    __type: "Rule",
    Action: undefined,
    Name: undefined,
    OverrideAction: undefined,
    Priority: undefined,
    Statement: undefined,
    VisibilityConfig: undefined
  };
  if (output.Action !== undefined && output.Action !== null) {
    contents.Action = deserializeAws_json1_1RuleAction(output.Action, context);
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OverrideAction !== undefined && output.OverrideAction !== null) {
    contents.OverrideAction = deserializeAws_json1_1OverrideAction(
      output.OverrideAction,
      context
    );
  }
  if (output.Priority !== undefined && output.Priority !== null) {
    contents.Priority = output.Priority;
  }
  if (output.Statement !== undefined && output.Statement !== null) {
    contents.Statement = deserializeAws_json1_1Statement(
      output.Statement,
      context
    );
  }
  if (
    output.VisibilityConfig !== undefined &&
    output.VisibilityConfig !== null
  ) {
    contents.VisibilityConfig = deserializeAws_json1_1VisibilityConfig(
      output.VisibilityConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RuleAction = (
  output: any,
  context: __SerdeContext
): RuleAction => {
  let contents: any = {
    __type: "RuleAction",
    Allow: undefined,
    Block: undefined,
    Count: undefined
  };
  if (output.Allow !== undefined && output.Allow !== null) {
    contents.Allow = deserializeAws_json1_1AllowAction(output.Allow, context);
  }
  if (output.Block !== undefined && output.Block !== null) {
    contents.Block = deserializeAws_json1_1BlockAction(output.Block, context);
  }
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = deserializeAws_json1_1CountAction(output.Count, context);
  }
  return contents;
};

const deserializeAws_json1_1RuleGroup = (
  output: any,
  context: __SerdeContext
): RuleGroup => {
  let contents: any = {
    __type: "RuleGroup",
    ARN: undefined,
    Capacity: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Rules: undefined,
    VisibilityConfig: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Capacity !== undefined && output.Capacity !== null) {
    contents.Capacity = output.Capacity;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_json1_1Rules(output.Rules, context);
  }
  if (
    output.VisibilityConfig !== undefined &&
    output.VisibilityConfig !== null
  ) {
    contents.VisibilityConfig = deserializeAws_json1_1VisibilityConfig(
      output.VisibilityConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RuleGroupReferenceStatement = (
  output: any,
  context: __SerdeContext
): RuleGroupReferenceStatement => {
  let contents: any = {
    __type: "RuleGroupReferenceStatement",
    ARN: undefined,
    ExcludedRules: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.ExcludedRules !== undefined && output.ExcludedRules !== null) {
    contents.ExcludedRules = deserializeAws_json1_1ExcludedRules(
      output.ExcludedRules,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RuleGroupSummaries = (
  output: any,
  context: __SerdeContext
): Array<RuleGroupSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RuleGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1RuleGroupSummary = (
  output: any,
  context: __SerdeContext
): RuleGroupSummary => {
  let contents: any = {
    __type: "RuleGroupSummary",
    ARN: undefined,
    Description: undefined,
    Id: undefined,
    LockToken: undefined,
    Name: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1RuleSummaries = (
  output: any,
  context: __SerdeContext
): Array<RuleSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RuleSummary(entry, context)
  );
};

const deserializeAws_json1_1RuleSummary = (
  output: any,
  context: __SerdeContext
): RuleSummary => {
  let contents: any = {
    __type: "RuleSummary",
    Action: undefined,
    Name: undefined
  };
  if (output.Action !== undefined && output.Action !== null) {
    contents.Action = deserializeAws_json1_1RuleAction(output.Action, context);
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1Rules = (
  output: any,
  context: __SerdeContext
): Array<Rule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1SampledHTTPRequest = (
  output: any,
  context: __SerdeContext
): SampledHTTPRequest => {
  let contents: any = {
    __type: "SampledHTTPRequest",
    Action: undefined,
    Request: undefined,
    RuleNameWithinRuleGroup: undefined,
    Timestamp: undefined,
    Weight: undefined
  };
  if (output.Action !== undefined && output.Action !== null) {
    contents.Action = output.Action;
  }
  if (output.Request !== undefined && output.Request !== null) {
    contents.Request = deserializeAws_json1_1HTTPRequest(
      output.Request,
      context
    );
  }
  if (
    output.RuleNameWithinRuleGroup !== undefined &&
    output.RuleNameWithinRuleGroup !== null
  ) {
    contents.RuleNameWithinRuleGroup = output.RuleNameWithinRuleGroup;
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  if (output.Weight !== undefined && output.Weight !== null) {
    contents.Weight = output.Weight;
  }
  return contents;
};

const deserializeAws_json1_1SampledHTTPRequests = (
  output: any,
  context: __SerdeContext
): Array<SampledHTTPRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SampledHTTPRequest(entry, context)
  );
};

const deserializeAws_json1_1SingleHeader = (
  output: any,
  context: __SerdeContext
): SingleHeader => {
  let contents: any = {
    __type: "SingleHeader",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1SingleQueryArgument = (
  output: any,
  context: __SerdeContext
): SingleQueryArgument => {
  let contents: any = {
    __type: "SingleQueryArgument",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1SizeConstraintStatement = (
  output: any,
  context: __SerdeContext
): SizeConstraintStatement => {
  let contents: any = {
    __type: "SizeConstraintStatement",
    ComparisonOperator: undefined,
    FieldToMatch: undefined,
    Size: undefined,
    TextTransformations: undefined
  };
  if (
    output.ComparisonOperator !== undefined &&
    output.ComparisonOperator !== null
  ) {
    contents.ComparisonOperator = output.ComparisonOperator;
  }
  if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
    contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(
      output.FieldToMatch,
      context
    );
  }
  if (output.Size !== undefined && output.Size !== null) {
    contents.Size = output.Size;
  }
  if (
    output.TextTransformations !== undefined &&
    output.TextTransformations !== null
  ) {
    contents.TextTransformations = deserializeAws_json1_1TextTransformations(
      output.TextTransformations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SqliMatchStatement = (
  output: any,
  context: __SerdeContext
): SqliMatchStatement => {
  let contents: any = {
    __type: "SqliMatchStatement",
    FieldToMatch: undefined,
    TextTransformations: undefined
  };
  if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
    contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(
      output.FieldToMatch,
      context
    );
  }
  if (
    output.TextTransformations !== undefined &&
    output.TextTransformations !== null
  ) {
    contents.TextTransformations = deserializeAws_json1_1TextTransformations(
      output.TextTransformations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Statement = (
  output: any,
  context: __SerdeContext
): Statement => {
  let contents: any = {
    __type: "Statement",
    AndStatement: undefined,
    ByteMatchStatement: undefined,
    GeoMatchStatement: undefined,
    IPSetReferenceStatement: undefined,
    ManagedRuleGroupStatement: undefined,
    NotStatement: undefined,
    OrStatement: undefined,
    RateBasedStatement: undefined,
    RegexPatternSetReferenceStatement: undefined,
    RuleGroupReferenceStatement: undefined,
    SizeConstraintStatement: undefined,
    SqliMatchStatement: undefined,
    XssMatchStatement: undefined
  };
  if (output.AndStatement !== undefined && output.AndStatement !== null) {
    contents.AndStatement = deserializeAws_json1_1AndStatement(
      output.AndStatement,
      context
    );
  }
  if (
    output.ByteMatchStatement !== undefined &&
    output.ByteMatchStatement !== null
  ) {
    contents.ByteMatchStatement = deserializeAws_json1_1ByteMatchStatement(
      output.ByteMatchStatement,
      context
    );
  }
  if (
    output.GeoMatchStatement !== undefined &&
    output.GeoMatchStatement !== null
  ) {
    contents.GeoMatchStatement = deserializeAws_json1_1GeoMatchStatement(
      output.GeoMatchStatement,
      context
    );
  }
  if (
    output.IPSetReferenceStatement !== undefined &&
    output.IPSetReferenceStatement !== null
  ) {
    contents.IPSetReferenceStatement = deserializeAws_json1_1IPSetReferenceStatement(
      output.IPSetReferenceStatement,
      context
    );
  }
  if (
    output.ManagedRuleGroupStatement !== undefined &&
    output.ManagedRuleGroupStatement !== null
  ) {
    contents.ManagedRuleGroupStatement = deserializeAws_json1_1ManagedRuleGroupStatement(
      output.ManagedRuleGroupStatement,
      context
    );
  }
  if (output.NotStatement !== undefined && output.NotStatement !== null) {
    contents.NotStatement = deserializeAws_json1_1NotStatement(
      output.NotStatement,
      context
    );
  }
  if (output.OrStatement !== undefined && output.OrStatement !== null) {
    contents.OrStatement = deserializeAws_json1_1OrStatement(
      output.OrStatement,
      context
    );
  }
  if (
    output.RateBasedStatement !== undefined &&
    output.RateBasedStatement !== null
  ) {
    contents.RateBasedStatement = deserializeAws_json1_1RateBasedStatement(
      output.RateBasedStatement,
      context
    );
  }
  if (
    output.RegexPatternSetReferenceStatement !== undefined &&
    output.RegexPatternSetReferenceStatement !== null
  ) {
    contents.RegexPatternSetReferenceStatement = deserializeAws_json1_1RegexPatternSetReferenceStatement(
      output.RegexPatternSetReferenceStatement,
      context
    );
  }
  if (
    output.RuleGroupReferenceStatement !== undefined &&
    output.RuleGroupReferenceStatement !== null
  ) {
    contents.RuleGroupReferenceStatement = deserializeAws_json1_1RuleGroupReferenceStatement(
      output.RuleGroupReferenceStatement,
      context
    );
  }
  if (
    output.SizeConstraintStatement !== undefined &&
    output.SizeConstraintStatement !== null
  ) {
    contents.SizeConstraintStatement = deserializeAws_json1_1SizeConstraintStatement(
      output.SizeConstraintStatement,
      context
    );
  }
  if (
    output.SqliMatchStatement !== undefined &&
    output.SqliMatchStatement !== null
  ) {
    contents.SqliMatchStatement = deserializeAws_json1_1SqliMatchStatement(
      output.SqliMatchStatement,
      context
    );
  }
  if (
    output.XssMatchStatement !== undefined &&
    output.XssMatchStatement !== null
  ) {
    contents.XssMatchStatement = deserializeAws_json1_1XssMatchStatement(
      output.XssMatchStatement,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Statements = (
  output: any,
  context: __SerdeContext
): Array<Statement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Statement(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagInfoForResource = (
  output: any,
  context: __SerdeContext
): TagInfoForResource => {
  let contents: any = {
    __type: "TagInfoForResource",
    ResourceARN: undefined,
    TagList: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.TagList !== undefined && output.TagList !== null) {
    contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1TextTransformation = (
  output: any,
  context: __SerdeContext
): TextTransformation => {
  let contents: any = {
    __type: "TextTransformation",
    Priority: undefined,
    Type: undefined
  };
  if (output.Priority !== undefined && output.Priority !== null) {
    contents.Priority = output.Priority;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1TextTransformations = (
  output: any,
  context: __SerdeContext
): Array<TextTransformation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TextTransformation(entry, context)
  );
};

const deserializeAws_json1_1TimeWindow = (
  output: any,
  context: __SerdeContext
): TimeWindow => {
  let contents: any = {
    __type: "TimeWindow",
    EndTime: undefined,
    StartTime: undefined
  };
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateIPSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateIPSetResponse => {
  let contents: any = {
    __type: "UpdateIPSetResponse",
    NextLockToken: undefined
  };
  if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
    contents.NextLockToken = output.NextLockToken;
  }
  return contents;
};

const deserializeAws_json1_1UpdateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateRegexPatternSetResponse => {
  let contents: any = {
    __type: "UpdateRegexPatternSetResponse",
    NextLockToken: undefined
  };
  if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
    contents.NextLockToken = output.NextLockToken;
  }
  return contents;
};

const deserializeAws_json1_1UpdateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateRuleGroupResponse => {
  let contents: any = {
    __type: "UpdateRuleGroupResponse",
    NextLockToken: undefined
  };
  if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
    contents.NextLockToken = output.NextLockToken;
  }
  return contents;
};

const deserializeAws_json1_1UpdateWebACLResponse = (
  output: any,
  context: __SerdeContext
): UpdateWebACLResponse => {
  let contents: any = {
    __type: "UpdateWebACLResponse",
    NextLockToken: undefined
  };
  if (output.NextLockToken !== undefined && output.NextLockToken !== null) {
    contents.NextLockToken = output.NextLockToken;
  }
  return contents;
};

const deserializeAws_json1_1UriPath = (
  output: any,
  context: __SerdeContext
): UriPath => {
  let contents: any = {
    __type: "UriPath"
  };
  return contents;
};

const deserializeAws_json1_1VisibilityConfig = (
  output: any,
  context: __SerdeContext
): VisibilityConfig => {
  let contents: any = {
    __type: "VisibilityConfig",
    CloudWatchMetricsEnabled: undefined,
    MetricName: undefined,
    SampledRequestsEnabled: undefined
  };
  if (
    output.CloudWatchMetricsEnabled !== undefined &&
    output.CloudWatchMetricsEnabled !== null
  ) {
    contents.CloudWatchMetricsEnabled = output.CloudWatchMetricsEnabled;
  }
  if (output.MetricName !== undefined && output.MetricName !== null) {
    contents.MetricName = output.MetricName;
  }
  if (
    output.SampledRequestsEnabled !== undefined &&
    output.SampledRequestsEnabled !== null
  ) {
    contents.SampledRequestsEnabled = output.SampledRequestsEnabled;
  }
  return contents;
};

const deserializeAws_json1_1WAFAssociatedItemException = (
  output: any,
  context: __SerdeContext
): WAFAssociatedItemException => {
  let contents: any = {
    __type: "WAFAssociatedItemException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFDuplicateItemException = (
  output: any,
  context: __SerdeContext
): WAFDuplicateItemException => {
  let contents: any = {
    __type: "WAFDuplicateItemException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFInternalErrorException => {
  let contents: any = {
    __type: "WAFInternalErrorException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFInvalidParameterException = (
  output: any,
  context: __SerdeContext
): WAFInvalidParameterException => {
  let contents: any = {
    __type: "WAFInvalidParameterException",
    Field: undefined,
    Parameter: undefined,
    Reason: undefined,
    message: undefined
  };
  if (output.Field !== undefined && output.Field !== null) {
    contents.Field = output.Field;
  }
  if (output.Parameter !== undefined && output.Parameter !== null) {
    contents.Parameter = output.Parameter;
  }
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1WAFInvalidResourceException = (
  output: any,
  context: __SerdeContext
): WAFInvalidResourceException => {
  let contents: any = {
    __type: "WAFInvalidResourceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFLimitsExceededException = (
  output: any,
  context: __SerdeContext
): WAFLimitsExceededException => {
  let contents: any = {
    __type: "WAFLimitsExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFNonexistentItemException = (
  output: any,
  context: __SerdeContext
): WAFNonexistentItemException => {
  let contents: any = {
    __type: "WAFNonexistentItemException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFOptimisticLockException = (
  output: any,
  context: __SerdeContext
): WAFOptimisticLockException => {
  let contents: any = {
    __type: "WAFOptimisticLockException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFServiceLinkedRoleErrorException = (
  output: any,
  context: __SerdeContext
): WAFServiceLinkedRoleErrorException => {
  let contents: any = {
    __type: "WAFServiceLinkedRoleErrorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1WAFTagOperationException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationException => {
  let contents: any = {
    __type: "WAFTagOperationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFTagOperationInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationInternalErrorException => {
  let contents: any = {
    __type: "WAFTagOperationInternalErrorException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WAFUnavailableEntityException = (
  output: any,
  context: __SerdeContext
): WAFUnavailableEntityException => {
  let contents: any = {
    __type: "WAFUnavailableEntityException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1WebACL = (
  output: any,
  context: __SerdeContext
): WebACL => {
  let contents: any = {
    __type: "WebACL",
    ARN: undefined,
    Capacity: undefined,
    DefaultAction: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Rules: undefined,
    VisibilityConfig: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Capacity !== undefined && output.Capacity !== null) {
    contents.Capacity = output.Capacity;
  }
  if (output.DefaultAction !== undefined && output.DefaultAction !== null) {
    contents.DefaultAction = deserializeAws_json1_1DefaultAction(
      output.DefaultAction,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_json1_1Rules(output.Rules, context);
  }
  if (
    output.VisibilityConfig !== undefined &&
    output.VisibilityConfig !== null
  ) {
    contents.VisibilityConfig = deserializeAws_json1_1VisibilityConfig(
      output.VisibilityConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WebACLSummaries = (
  output: any,
  context: __SerdeContext
): Array<WebACLSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WebACLSummary(entry, context)
  );
};

const deserializeAws_json1_1WebACLSummary = (
  output: any,
  context: __SerdeContext
): WebACLSummary => {
  let contents: any = {
    __type: "WebACLSummary",
    ARN: undefined,
    Description: undefined,
    Id: undefined,
    LockToken: undefined,
    Name: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LockToken !== undefined && output.LockToken !== null) {
    contents.LockToken = output.LockToken;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1XssMatchStatement = (
  output: any,
  context: __SerdeContext
): XssMatchStatement => {
  let contents: any = {
    __type: "XssMatchStatement",
    FieldToMatch: undefined,
    TextTransformations: undefined
  };
  if (output.FieldToMatch !== undefined && output.FieldToMatch !== null) {
    contents.FieldToMatch = deserializeAws_json1_1FieldToMatch(
      output.FieldToMatch,
      context
    );
  }
  if (
    output.TextTransformations !== undefined &&
    output.TextTransformations !== null
  ) {
    contents.TextTransformations = deserializeAws_json1_1TextTransformations(
      output.TextTransformations,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
