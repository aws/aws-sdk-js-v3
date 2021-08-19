import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "../commands/AssociateWebACLCommand";
import { CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput } from "../commands/CreateByteMatchSetCommand";
import { CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput } from "../commands/CreateGeoMatchSetCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "../commands/CreateIPSetCommand";
import {
  CreateRateBasedRuleCommandInput,
  CreateRateBasedRuleCommandOutput,
} from "../commands/CreateRateBasedRuleCommand";
import {
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
} from "../commands/CreateRegexMatchSetCommand";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "../commands/CreateRegexPatternSetCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "../commands/CreateRuleGroupCommand";
import {
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
} from "../commands/CreateSizeConstraintSetCommand";
import {
  CreateSqlInjectionMatchSetCommandInput,
  CreateSqlInjectionMatchSetCommandOutput,
} from "../commands/CreateSqlInjectionMatchSetCommand";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "../commands/CreateWebACLCommand";
import {
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
} from "../commands/CreateWebACLMigrationStackCommand";
import { CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput } from "../commands/CreateXssMatchSetCommand";
import { DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput } from "../commands/DeleteByteMatchSetCommand";
import { DeleteGeoMatchSetCommandInput, DeleteGeoMatchSetCommandOutput } from "../commands/DeleteGeoMatchSetCommand";
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
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
} from "../commands/DeleteRateBasedRuleCommand";
import {
  DeleteRegexMatchSetCommandInput,
  DeleteRegexMatchSetCommandOutput,
} from "../commands/DeleteRegexMatchSetCommand";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "../commands/DeleteRegexPatternSetCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "../commands/DeleteRuleGroupCommand";
import {
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
} from "../commands/DeleteSizeConstraintSetCommand";
import {
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
} from "../commands/DeleteSqlInjectionMatchSetCommand";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "../commands/DeleteWebACLCommand";
import { DeleteXssMatchSetCommandInput, DeleteXssMatchSetCommandOutput } from "../commands/DeleteXssMatchSetCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "../commands/DisassociateWebACLCommand";
import { GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput } from "../commands/GetByteMatchSetCommand";
import { GetChangeTokenCommandInput, GetChangeTokenCommandOutput } from "../commands/GetChangeTokenCommand";
import {
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
} from "../commands/GetChangeTokenStatusCommand";
import { GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput } from "../commands/GetGeoMatchSetCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "../commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "../commands/GetLoggingConfigurationCommand";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "../commands/GetPermissionPolicyCommand";
import { GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput } from "../commands/GetRateBasedRuleCommand";
import {
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
} from "../commands/GetRateBasedRuleManagedKeysCommand";
import { GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput } from "../commands/GetRegexMatchSetCommand";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "../commands/GetRegexPatternSetCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "../commands/GetRuleCommand";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "../commands/GetRuleGroupCommand";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "../commands/GetSampledRequestsCommand";
import {
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
} from "../commands/GetSizeConstraintSetCommand";
import {
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
} from "../commands/GetSqlInjectionMatchSetCommand";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "../commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "../commands/GetWebACLForResourceCommand";
import { GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput } from "../commands/GetXssMatchSetCommand";
import {
  ListActivatedRulesInRuleGroupCommandInput,
  ListActivatedRulesInRuleGroupCommandOutput,
} from "../commands/ListActivatedRulesInRuleGroupCommand";
import { ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput } from "../commands/ListByteMatchSetsCommand";
import { ListGeoMatchSetsCommandInput, ListGeoMatchSetsCommandOutput } from "../commands/ListGeoMatchSetsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "../commands/ListLoggingConfigurationsCommand";
import { ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput } from "../commands/ListRateBasedRulesCommand";
import { ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput } from "../commands/ListRegexMatchSetsCommand";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "../commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "../commands/ListResourcesForWebACLCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "../commands/ListRuleGroupsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
} from "../commands/ListSizeConstraintSetsCommand";
import {
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
} from "../commands/ListSqlInjectionMatchSetsCommand";
import {
  ListSubscribedRuleGroupsCommandInput,
  ListSubscribedRuleGroupsCommandOutput,
} from "../commands/ListSubscribedRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "../commands/ListWebACLsCommand";
import { ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput } from "../commands/ListXssMatchSetsCommand";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "../commands/PutLoggingConfigurationCommand";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "../commands/PutPermissionPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput } from "../commands/UpdateByteMatchSetCommand";
import { UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput } from "../commands/UpdateGeoMatchSetCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "../commands/UpdateIPSetCommand";
import {
  UpdateRateBasedRuleCommandInput,
  UpdateRateBasedRuleCommandOutput,
} from "../commands/UpdateRateBasedRuleCommand";
import {
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
} from "../commands/UpdateRegexMatchSetCommand";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "../commands/UpdateRegexPatternSetCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "../commands/UpdateRuleCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "../commands/UpdateRuleGroupCommand";
import {
  UpdateSizeConstraintSetCommandInput,
  UpdateSizeConstraintSetCommandOutput,
} from "../commands/UpdateSizeConstraintSetCommand";
import {
  UpdateSqlInjectionMatchSetCommandInput,
  UpdateSqlInjectionMatchSetCommandOutput,
} from "../commands/UpdateSqlInjectionMatchSetCommand";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "../commands/UpdateWebACLCommand";
import { UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput } from "../commands/UpdateXssMatchSetCommand";
import {
  ActivatedRule,
  AssociateWebACLRequest,
  AssociateWebACLResponse,
  ByteMatchSet,
  ByteMatchSetSummary,
  ByteMatchSetUpdate,
  ByteMatchTuple,
  CreateByteMatchSetRequest,
  CreateByteMatchSetResponse,
  CreateGeoMatchSetRequest,
  CreateGeoMatchSetResponse,
  CreateIPSetRequest,
  CreateIPSetResponse,
  CreateRateBasedRuleRequest,
  CreateRateBasedRuleResponse,
  CreateRegexMatchSetRequest,
  CreateRegexMatchSetResponse,
  CreateRegexPatternSetRequest,
  CreateRegexPatternSetResponse,
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CreateRuleRequest,
  CreateRuleResponse,
  CreateSizeConstraintSetRequest,
  CreateSizeConstraintSetResponse,
  CreateSqlInjectionMatchSetRequest,
  CreateSqlInjectionMatchSetResponse,
  CreateWebACLMigrationStackRequest,
  CreateWebACLMigrationStackResponse,
  CreateWebACLRequest,
  CreateWebACLResponse,
  CreateXssMatchSetRequest,
  CreateXssMatchSetResponse,
  DeleteByteMatchSetRequest,
  DeleteByteMatchSetResponse,
  DeleteGeoMatchSetRequest,
  DeleteGeoMatchSetResponse,
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
  DeletePermissionPolicyRequest,
  DeletePermissionPolicyResponse,
  DeleteRateBasedRuleRequest,
  DeleteRateBasedRuleResponse,
  DeleteRegexMatchSetRequest,
  DeleteRegexMatchSetResponse,
  DeleteRegexPatternSetRequest,
  DeleteRegexPatternSetResponse,
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteSizeConstraintSetRequest,
  DeleteSizeConstraintSetResponse,
  DeleteSqlInjectionMatchSetRequest,
  DeleteSqlInjectionMatchSetResponse,
  DeleteWebACLRequest,
  DeleteWebACLResponse,
  DeleteXssMatchSetRequest,
  DeleteXssMatchSetResponse,
  DisassociateWebACLRequest,
  DisassociateWebACLResponse,
  ExcludedRule,
  FieldToMatch,
  GeoMatchConstraint,
  GeoMatchSet,
  GeoMatchSetSummary,
  GeoMatchSetUpdate,
  GetByteMatchSetRequest,
  GetByteMatchSetResponse,
  GetChangeTokenRequest,
  GetChangeTokenResponse,
  GetChangeTokenStatusRequest,
  GetChangeTokenStatusResponse,
  GetGeoMatchSetRequest,
  GetGeoMatchSetResponse,
  GetIPSetRequest,
  GetIPSetResponse,
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
  GetPermissionPolicyRequest,
  GetPermissionPolicyResponse,
  GetRateBasedRuleManagedKeysRequest,
  GetRateBasedRuleManagedKeysResponse,
  GetRateBasedRuleRequest,
  GetRateBasedRuleResponse,
  GetRegexMatchSetRequest,
  GetRegexMatchSetResponse,
  GetRegexPatternSetRequest,
  GetRegexPatternSetResponse,
  GetRuleGroupRequest,
  GetRuleGroupResponse,
  GetRuleRequest,
  GetRuleResponse,
  GetSampledRequestsRequest,
  GetSampledRequestsResponse,
  GetSizeConstraintSetRequest,
  GetSizeConstraintSetResponse,
  GetSqlInjectionMatchSetRequest,
  GetSqlInjectionMatchSetResponse,
  GetWebACLForResourceRequest,
  GetWebACLForResourceResponse,
  GetWebACLRequest,
  GetWebACLResponse,
  GetXssMatchSetRequest,
  GetXssMatchSetResponse,
  HTTPHeader,
  HTTPRequest,
  IPSet,
  IPSetDescriptor,
  IPSetSummary,
  IPSetUpdate,
  ListActivatedRulesInRuleGroupRequest,
  ListActivatedRulesInRuleGroupResponse,
  ListByteMatchSetsRequest,
  ListByteMatchSetsResponse,
  ListGeoMatchSetsRequest,
  ListGeoMatchSetsResponse,
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
  ListRateBasedRulesRequest,
  ListRateBasedRulesResponse,
  ListRegexMatchSetsRequest,
  ListRegexMatchSetsResponse,
  ListRegexPatternSetsRequest,
  ListRegexPatternSetsResponse,
  ListResourcesForWebACLRequest,
  ListResourcesForWebACLResponse,
  ListRuleGroupsRequest,
  ListRuleGroupsResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListSizeConstraintSetsRequest,
  ListSizeConstraintSetsResponse,
  ListSqlInjectionMatchSetsRequest,
  ListSqlInjectionMatchSetsResponse,
  ListSubscribedRuleGroupsRequest,
  ListSubscribedRuleGroupsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListWebACLsRequest,
  ListWebACLsResponse,
  ListXssMatchSetsRequest,
  ListXssMatchSetsResponse,
  LoggingConfiguration,
  Predicate,
  PutLoggingConfigurationRequest,
  PutLoggingConfigurationResponse,
  PutPermissionPolicyRequest,
  PutPermissionPolicyResponse,
  RateBasedRule,
  RegexMatchSet,
  RegexMatchSetSummary,
  RegexMatchSetUpdate,
  RegexMatchTuple,
  RegexPatternSet,
  RegexPatternSetSummary,
  RegexPatternSetUpdate,
  Rule,
  RuleGroup,
  RuleGroupSummary,
  RuleGroupUpdate,
  RuleSummary,
  RuleUpdate,
  SampledHTTPRequest,
  SizeConstraint,
  SizeConstraintSet,
  SizeConstraintSetSummary,
  SizeConstraintSetUpdate,
  SqlInjectionMatchSet,
  SqlInjectionMatchSetSummary,
  SqlInjectionMatchSetUpdate,
  SqlInjectionMatchTuple,
  SubscribedRuleGroupSummary,
  Tag,
  TagInfoForResource,
  TagResourceRequest,
  TagResourceResponse,
  TimeWindow,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateByteMatchSetRequest,
  UpdateByteMatchSetResponse,
  UpdateGeoMatchSetRequest,
  UpdateGeoMatchSetResponse,
  UpdateIPSetRequest,
  UpdateIPSetResponse,
  UpdateRateBasedRuleRequest,
  UpdateRateBasedRuleResponse,
  UpdateRegexMatchSetRequest,
  UpdateRegexMatchSetResponse,
  UpdateRegexPatternSetRequest,
  UpdateRegexPatternSetResponse,
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateRuleRequest,
  UpdateRuleResponse,
  UpdateSizeConstraintSetRequest,
  UpdateSizeConstraintSetResponse,
  UpdateSqlInjectionMatchSetRequest,
  UpdateSqlInjectionMatchSetResponse,
  UpdateWebACLRequest,
  UpdateWebACLResponse,
  UpdateXssMatchSetRequest,
  UpdateXssMatchSetResponse,
  WAFBadRequestException,
  WAFDisallowedNameException,
  WAFEntityMigrationException,
  WAFInternalErrorException,
  WAFInvalidAccountException,
  WAFInvalidOperationException,
  WAFInvalidParameterException,
  WAFInvalidPermissionPolicyException,
  WAFInvalidRegexPatternException,
  WAFLimitsExceededException,
  WAFNonEmptyEntityException,
  WAFNonexistentContainerException,
  WAFNonexistentItemException,
  WAFReferencedItemException,
  WAFServiceLinkedRoleErrorException,
  WAFStaleDataException,
  WAFSubscriptionNotFoundException,
  WAFTagOperationException,
  WAFTagOperationInternalErrorException,
  WAFUnavailableEntityException,
  WafAction,
  WafOverrideAction,
  WebACL,
  WebACLSummary,
  WebACLUpdate,
  XssMatchSet,
  XssMatchSetSummary,
  XssMatchSetUpdate,
  XssMatchTuple,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
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
    "x-amz-target": "AWSWAF_Regional_20161128.AssociateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateByteMatchSetCommand = async (
  input: CreateByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGeoMatchSetCommand = async (
  input: CreateGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateIPSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRateBasedRuleCommand = async (
  input: CreateRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRegexMatchSetCommand = async (
  input: CreateRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRegexPatternSetCommand = async (
  input: CreateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSizeConstraintSetCommand = async (
  input: CreateSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSqlInjectionMatchSetCommand = async (
  input: CreateSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWebACLCommand = async (
  input: CreateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWebACLMigrationStackCommand = async (
  input: CreateWebACLMigrationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateWebACLMigrationStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWebACLMigrationStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateXssMatchSetCommand = async (
  input: CreateXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateXssMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteByteMatchSetCommand = async (
  input: DeleteByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGeoMatchSetCommand = async (
  input: DeleteGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteIPSet",
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
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteLoggingConfiguration",
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
    "x-amz-target": "AWSWAF_Regional_20161128.DeletePermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRateBasedRuleCommand = async (
  input: DeleteRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegexMatchSetCommand = async (
  input: DeleteRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegexPatternSetCommand = async (
  input: DeleteRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSizeConstraintSetCommand = async (
  input: DeleteSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSqlInjectionMatchSetCommand = async (
  input: DeleteSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebACLCommand = async (
  input: DeleteWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteXssMatchSetCommand = async (
  input: DeleteXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteXssMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateWebACLCommand = async (
  input: DisassociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DisassociateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetByteMatchSetCommand = async (
  input: GetByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetChangeTokenCommand = async (
  input: GetChangeTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetChangeToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetChangeTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetChangeTokenStatusCommand = async (
  input: GetChangeTokenStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetChangeTokenStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetChangeTokenStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGeoMatchSetCommand = async (
  input: GetGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetIPSet",
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
    "x-amz-target": "AWSWAF_Regional_20161128.GetLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPermissionPolicyCommand = async (
  input: GetPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetPermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRateBasedRuleCommand = async (
  input: GetRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRateBasedRuleManagedKeysCommand = async (
  input: GetRateBasedRuleManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRateBasedRuleManagedKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegexMatchSetCommand = async (
  input: GetRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegexPatternSetCommand = async (
  input: GetRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRuleCommand = async (
  input: GetRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRuleGroupCommand = async (
  input: GetRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRuleGroup",
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
    "x-amz-target": "AWSWAF_Regional_20161128.GetSampledRequests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSizeConstraintSetCommand = async (
  input: GetSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSqlInjectionMatchSetCommand = async (
  input: GetSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWebACLCommand = async (
  input: GetWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetWebACL",
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
    "x-amz-target": "AWSWAF_Regional_20161128.GetWebACLForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetXssMatchSetCommand = async (
  input: GetXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetXssMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListActivatedRulesInRuleGroupCommand = async (
  input: ListActivatedRulesInRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListActivatedRulesInRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListByteMatchSetsCommand = async (
  input: ListByteMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListByteMatchSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListByteMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGeoMatchSetsCommand = async (
  input: ListGeoMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListGeoMatchSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGeoMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListIPSets",
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
    "x-amz-target": "AWSWAF_Regional_20161128.ListLoggingConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRateBasedRulesCommand = async (
  input: ListRateBasedRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRateBasedRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRateBasedRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRegexMatchSetsCommand = async (
  input: ListRegexMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRegexMatchSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRegexMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRegexPatternSetsCommand = async (
  input: ListRegexPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRegexPatternSets",
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
    "x-amz-target": "AWSWAF_Regional_20161128.ListResourcesForWebACL",
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
    "x-amz-target": "AWSWAF_Regional_20161128.ListRuleGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSizeConstraintSetsCommand = async (
  input: ListSizeConstraintSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListSizeConstraintSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSizeConstraintSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSqlInjectionMatchSetsCommand = async (
  input: ListSqlInjectionMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListSqlInjectionMatchSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSqlInjectionMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSubscribedRuleGroupsCommand = async (
  input: ListSubscribedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListSubscribedRuleGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSubscribedRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListTagsForResource",
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
    "x-amz-target": "AWSWAF_Regional_20161128.ListWebACLs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListXssMatchSetsCommand = async (
  input: ListXssMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListXssMatchSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListXssMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLoggingConfigurationCommand = async (
  input: PutLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.PutLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPermissionPolicyCommand = async (
  input: PutPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.PutPermissionPolicy",
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
    "x-amz-target": "AWSWAF_Regional_20161128.TagResource",
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
    "x-amz-target": "AWSWAF_Regional_20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateByteMatchSetCommand = async (
  input: UpdateByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGeoMatchSetCommand = async (
  input: UpdateGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateIPSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRateBasedRuleCommand = async (
  input: UpdateRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRegexMatchSetCommand = async (
  input: UpdateRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRegexPatternSetCommand = async (
  input: UpdateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSizeConstraintSetCommand = async (
  input: UpdateSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSqlInjectionMatchSetCommand = async (
  input: UpdateSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWebACLCommand = async (
  input: UpdateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateWebACL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateXssMatchSetCommand = async (
  input: UpdateXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateXssMatchSetRequest(input, context));
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafregional#WAFUnavailableEntityException":
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

export const deserializeAws_json1_1CreateByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateByteMatchSetResponse(data, context);
  const response: CreateByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGeoMatchSetResponse(data, context);
  const response: CreateGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRateBasedRuleResponse(data, context);
  const response: CreateRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1CreateRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRegexMatchSetResponse(data, context);
  const response: CreateRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRuleResponse(data, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1CreateSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSizeConstraintSetResponse(data, context);
  const response: CreateSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSqlInjectionMatchSetResponse(data, context);
  const response: CreateSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1CreateWebACLMigrationStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLMigrationStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWebACLMigrationStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWebACLMigrationStackResponse(data, context);
  const response: CreateWebACLMigrationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWebACLMigrationStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLMigrationStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFEntityMigrationException":
    case "com.amazonaws.wafregional#WAFEntityMigrationException":
      response = {
        ...(await deserializeAws_json1_1WAFEntityMigrationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1CreateXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateXssMatchSetResponse(data, context);
  const response: CreateXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteByteMatchSetResponse(data, context);
  const response: DeleteByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGeoMatchSetResponse(data, context);
  const response: DeleteGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRateBasedRuleResponse(data, context);
  const response: DeleteRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1DeleteRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRegexMatchSetResponse(data, context);
  const response: DeleteRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRuleResponse(data, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1DeleteSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSizeConstraintSetResponse(data, context);
  const response: DeleteSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse(data, context);
  const response: DeleteSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1DeleteXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteXssMatchSetResponse(data, context);
  const response: DeleteXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      response = {
        ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetByteMatchSetResponse(data, context);
  const response: GetByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetChangeTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetChangeTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetChangeTokenResponse(data, context);
  const response: GetChangeTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetChangeTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetChangeTokenStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetChangeTokenStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetChangeTokenStatusResponse(data, context);
  const response: GetChangeTokenStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetChangeTokenStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGeoMatchSetResponse(data, context);
  const response: GetGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRateBasedRuleResponse(data, context);
  const response: GetRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleManagedKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse(data, context);
  const response: GetRateBasedRuleManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleManagedKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegexMatchSetResponse(data, context);
  const response: GetRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRuleResponse(data, context);
  const response: GetRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSizeConstraintSetResponse(data, context);
  const response: GetSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1GetSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSqlInjectionMatchSetResponse(data, context);
  const response: GetSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafregional#WAFUnavailableEntityException":
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

export const deserializeAws_json1_1GetXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetXssMatchSetResponse(data, context);
  const response: GetXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivatedRulesInRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse(data, context);
  const response: ListActivatedRulesInRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivatedRulesInRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1ListByteMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByteMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListByteMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListByteMatchSetsResponse(data, context);
  const response: ListByteMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListByteMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByteMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListGeoMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGeoMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGeoMatchSetsResponse(data, context);
  const response: ListGeoMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGeoMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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

export const deserializeAws_json1_1ListRateBasedRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRateBasedRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRateBasedRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRateBasedRulesResponse(data, context);
  const response: ListRateBasedRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRateBasedRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRateBasedRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListRegexMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRegexMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRegexMatchSetsResponse(data, context);
  const response: ListRegexMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRegexMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSizeConstraintSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSizeConstraintSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSizeConstraintSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSizeConstraintSetsResponse(data, context);
  const response: ListSizeConstraintSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSizeConstraintSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSizeConstraintSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSqlInjectionMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSqlInjectionMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSqlInjectionMatchSetsResponse(data, context);
  const response: ListSqlInjectionMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSqlInjectionMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSubscribedRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSubscribedRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSubscribedRuleGroupsResponse(data, context);
  const response: ListSubscribedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSubscribedRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListXssMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListXssMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListXssMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListXssMatchSetsResponse(data, context);
  const response: ListXssMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListXssMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListXssMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFServiceLinkedRoleErrorException":
    case "com.amazonaws.wafregional#WAFServiceLinkedRoleErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidPermissionPolicyException":
    case "com.amazonaws.wafregional#WAFInvalidPermissionPolicyException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      response = {
        ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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

export const deserializeAws_json1_1UpdateByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateByteMatchSetResponse(data, context);
  const response: UpdateByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGeoMatchSetResponse(data, context);
  const response: UpdateGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRateBasedRuleResponse(data, context);
  const response: UpdateRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRegexMatchSetResponse(data, context);
  const response: UpdateRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      response = {
        ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidRegexPatternException":
    case "com.amazonaws.wafregional#WAFInvalidRegexPatternException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidRegexPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRuleResponse(data, context);
  const response: UpdateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSizeConstraintSetResponse(data, context);
  const response: UpdateSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse(data, context);
  const response: UpdateSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      response = {
        ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafregional#WAFSubscriptionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateXssMatchSetResponse(data, context);
  const response: UpdateXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      response = {
        ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      response = {
        ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1WAFBadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFBadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFBadRequestException(body, context);
  const contents: WAFBadRequestException = {
    name: "WAFBadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFDisallowedNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFDisallowedNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFDisallowedNameException(body, context);
  const contents: WAFDisallowedNameException = {
    name: "WAFDisallowedNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFEntityMigrationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFEntityMigrationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFEntityMigrationException(body, context);
  const contents: WAFEntityMigrationException = {
    name: "WAFEntityMigrationException",
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

const deserializeAws_json1_1WAFInvalidAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidAccountException(body, context);
  const contents: WAFInvalidAccountException = {
    name: "WAFInvalidAccountException",
    $fault: "client",
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

const deserializeAws_json1_1WAFInvalidRegexPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidRegexPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFInvalidRegexPatternException(body, context);
  const contents: WAFInvalidRegexPatternException = {
    name: "WAFInvalidRegexPatternException",
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

const deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonEmptyEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFNonEmptyEntityException(body, context);
  const contents: WAFNonEmptyEntityException = {
    name: "WAFNonEmptyEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WAFNonexistentContainerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonexistentContainerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFNonexistentContainerException(body, context);
  const contents: WAFNonexistentContainerException = {
    name: "WAFNonexistentContainerException",
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

const deserializeAws_json1_1WAFReferencedItemExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFReferencedItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFReferencedItemException(body, context);
  const contents: WAFReferencedItemException = {
    name: "WAFReferencedItemException",
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

const deserializeAws_json1_1WAFStaleDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFStaleDataException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WAFStaleDataException(body, context);
  const contents: WAFStaleDataException = {
    name: "WAFStaleDataException",
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

const serializeAws_json1_1ActivatedRule = (input: ActivatedRule, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_json1_1WafAction(input.Action, context) }),
    ...(input.ExcludedRules !== undefined &&
      input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
      }),
    ...(input.OverrideAction !== undefined &&
      input.OverrideAction !== null && {
        OverrideAction: serializeAws_json1_1WafOverrideAction(input.OverrideAction, context),
      }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1AssociateWebACLRequest = (input: AssociateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
  };
};

const serializeAws_json1_1ByteMatchSetUpdate = (input: ByteMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.ByteMatchTuple !== undefined &&
      input.ByteMatchTuple !== null && {
        ByteMatchTuple: serializeAws_json1_1ByteMatchTuple(input.ByteMatchTuple, context),
      }),
  };
};

const serializeAws_json1_1ByteMatchSetUpdates = (input: ByteMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ByteMatchSetUpdate(entry, context);
    });
};

const serializeAws_json1_1ByteMatchTuple = (input: ByteMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.PositionalConstraint !== undefined &&
      input.PositionalConstraint !== null && { PositionalConstraint: input.PositionalConstraint }),
    ...(input.TargetString !== undefined &&
      input.TargetString !== null && { TargetString: context.base64Encoder(input.TargetString) }),
    ...(input.TextTransformation !== undefined &&
      input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
  };
};

const serializeAws_json1_1CreateByteMatchSetRequest = (
  input: CreateByteMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateGeoMatchSetRequest = (
  input: CreateGeoMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateIPSetRequest = (input: CreateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateRateBasedRuleRequest = (
  input: CreateRateBasedRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RateKey !== undefined && input.RateKey !== null && { RateKey: input.RateKey }),
    ...(input.RateLimit !== undefined && input.RateLimit !== null && { RateLimit: input.RateLimit }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateRegexMatchSetRequest = (
  input: CreateRegexMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateRegexPatternSetRequest = (
  input: CreateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateRuleRequest = (input: CreateRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSizeConstraintSetRequest = (
  input: CreateSizeConstraintSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateSqlInjectionMatchSetRequest = (
  input: CreateSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateWebACLMigrationStackRequest = (
  input: CreateWebACLMigrationStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IgnoreUnsupportedType !== undefined &&
      input.IgnoreUnsupportedType !== null && { IgnoreUnsupportedType: input.IgnoreUnsupportedType }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
  };
};

const serializeAws_json1_1CreateWebACLRequest = (input: CreateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.DefaultAction !== undefined &&
      input.DefaultAction !== null && { DefaultAction: serializeAws_json1_1WafAction(input.DefaultAction, context) }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateXssMatchSetRequest = (
  input: CreateXssMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteByteMatchSetRequest = (
  input: DeleteByteMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ByteMatchSetId !== undefined &&
      input.ByteMatchSetId !== null && { ByteMatchSetId: input.ByteMatchSetId }),
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
  };
};

const serializeAws_json1_1DeleteGeoMatchSetRequest = (
  input: DeleteGeoMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.GeoMatchSetId !== undefined && input.GeoMatchSetId !== null && { GeoMatchSetId: input.GeoMatchSetId }),
  };
};

const serializeAws_json1_1DeleteIPSetRequest = (input: DeleteIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.IPSetId !== undefined && input.IPSetId !== null && { IPSetId: input.IPSetId }),
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

const serializeAws_json1_1DeleteRateBasedRuleRequest = (
  input: DeleteRateBasedRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
  };
};

const serializeAws_json1_1DeleteRegexMatchSetRequest = (
  input: DeleteRegexMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexMatchSetId !== undefined &&
      input.RegexMatchSetId !== null && { RegexMatchSetId: input.RegexMatchSetId }),
  };
};

const serializeAws_json1_1DeleteRegexPatternSetRequest = (
  input: DeleteRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexPatternSetId !== undefined &&
      input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
  };
};

const serializeAws_json1_1DeleteRuleGroupRequest = (input: DeleteRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
  };
};

const serializeAws_json1_1DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
  };
};

const serializeAws_json1_1DeleteSizeConstraintSetRequest = (
  input: DeleteSizeConstraintSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.SizeConstraintSetId !== undefined &&
      input.SizeConstraintSetId !== null && { SizeConstraintSetId: input.SizeConstraintSetId }),
  };
};

const serializeAws_json1_1DeleteSqlInjectionMatchSetRequest = (
  input: DeleteSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.SqlInjectionMatchSetId !== undefined &&
      input.SqlInjectionMatchSetId !== null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
  };
};

const serializeAws_json1_1DeleteWebACLRequest = (input: DeleteWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
  };
};

const serializeAws_json1_1DeleteXssMatchSetRequest = (
  input: DeleteXssMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.XssMatchSetId !== undefined && input.XssMatchSetId !== null && { XssMatchSetId: input.XssMatchSetId }),
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
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
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
    ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GeoMatchConstraint = (input: GeoMatchConstraint, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1GeoMatchSetUpdate = (input: GeoMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.GeoMatchConstraint !== undefined &&
      input.GeoMatchConstraint !== null && {
        GeoMatchConstraint: serializeAws_json1_1GeoMatchConstraint(input.GeoMatchConstraint, context),
      }),
  };
};

const serializeAws_json1_1GeoMatchSetUpdates = (input: GeoMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GeoMatchSetUpdate(entry, context);
    });
};

const serializeAws_json1_1GetByteMatchSetRequest = (input: GetByteMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ByteMatchSetId !== undefined &&
      input.ByteMatchSetId !== null && { ByteMatchSetId: input.ByteMatchSetId }),
  };
};

const serializeAws_json1_1GetChangeTokenRequest = (input: GetChangeTokenRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1GetChangeTokenStatusRequest = (
  input: GetChangeTokenStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
  };
};

const serializeAws_json1_1GetGeoMatchSetRequest = (input: GetGeoMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.GeoMatchSetId !== undefined && input.GeoMatchSetId !== null && { GeoMatchSetId: input.GeoMatchSetId }),
  };
};

const serializeAws_json1_1GetIPSetRequest = (input: GetIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.IPSetId !== undefined && input.IPSetId !== null && { IPSetId: input.IPSetId }),
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

const serializeAws_json1_1GetPermissionPolicyRequest = (
  input: GetPermissionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetRateBasedRuleManagedKeysRequest = (
  input: GetRateBasedRuleManagedKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
  };
};

const serializeAws_json1_1GetRateBasedRuleRequest = (input: GetRateBasedRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
  };
};

const serializeAws_json1_1GetRegexMatchSetRequest = (input: GetRegexMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.RegexMatchSetId !== undefined &&
      input.RegexMatchSetId !== null && { RegexMatchSetId: input.RegexMatchSetId }),
  };
};

const serializeAws_json1_1GetRegexPatternSetRequest = (
  input: GetRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegexPatternSetId !== undefined &&
      input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
  };
};

const serializeAws_json1_1GetRuleGroupRequest = (input: GetRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
  };
};

const serializeAws_json1_1GetRuleRequest = (input: GetRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
  };
};

const serializeAws_json1_1GetSampledRequestsRequest = (
  input: GetSampledRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    ...(input.TimeWindow !== undefined &&
      input.TimeWindow !== null && { TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context) }),
    ...(input.WebAclId !== undefined && input.WebAclId !== null && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_json1_1GetSizeConstraintSetRequest = (
  input: GetSizeConstraintSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SizeConstraintSetId !== undefined &&
      input.SizeConstraintSetId !== null && { SizeConstraintSetId: input.SizeConstraintSetId }),
  };
};

const serializeAws_json1_1GetSqlInjectionMatchSetRequest = (
  input: GetSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SqlInjectionMatchSetId !== undefined &&
      input.SqlInjectionMatchSetId !== null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
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
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
  };
};

const serializeAws_json1_1GetXssMatchSetRequest = (input: GetXssMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.XssMatchSetId !== undefined && input.XssMatchSetId !== null && { XssMatchSetId: input.XssMatchSetId }),
  };
};

const serializeAws_json1_1IPSetDescriptor = (input: IPSetDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1IPSetUpdate = (input: IPSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.IPSetDescriptor !== undefined &&
      input.IPSetDescriptor !== null && {
        IPSetDescriptor: serializeAws_json1_1IPSetDescriptor(input.IPSetDescriptor, context),
      }),
  };
};

const serializeAws_json1_1IPSetUpdates = (input: IPSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1IPSetUpdate(entry, context);
    });
};

const serializeAws_json1_1ListActivatedRulesInRuleGroupRequest = (
  input: ListActivatedRulesInRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
  };
};

const serializeAws_json1_1ListByteMatchSetsRequest = (
  input: ListByteMatchSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListGeoMatchSetsRequest = (input: ListGeoMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListIPSetsRequest = (input: ListIPSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListLoggingConfigurationsRequest = (
  input: ListLoggingConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListRateBasedRulesRequest = (
  input: ListRateBasedRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListRegexMatchSetsRequest = (
  input: ListRegexMatchSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListRegexPatternSetsRequest = (
  input: ListRegexPatternSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListResourcesForWebACLRequest = (
  input: ListResourcesForWebACLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
  };
};

const serializeAws_json1_1ListRuleGroupsRequest = (input: ListRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListRulesRequest = (input: ListRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListSizeConstraintSetsRequest = (
  input: ListSizeConstraintSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListSqlInjectionMatchSetsRequest = (
  input: ListSqlInjectionMatchSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
  };
};

const serializeAws_json1_1ListSubscribedRuleGroupsRequest = (
  input: ListSubscribedRuleGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
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
  };
};

const serializeAws_json1_1ListXssMatchSetsRequest = (input: ListXssMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
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
    ...(input.RedactedFields !== undefined &&
      input.RedactedFields !== null && {
        RedactedFields: serializeAws_json1_1RedactedFields(input.RedactedFields, context),
      }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1Predicate = (input: Predicate, context: __SerdeContext): any => {
  return {
    ...(input.DataId !== undefined && input.DataId !== null && { DataId: input.DataId }),
    ...(input.Negated !== undefined && input.Negated !== null && { Negated: input.Negated }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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

const serializeAws_json1_1PutPermissionPolicyRequest = (
  input: PutPermissionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
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

const serializeAws_json1_1RegexMatchSetUpdate = (input: RegexMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.RegexMatchTuple !== undefined &&
      input.RegexMatchTuple !== null && {
        RegexMatchTuple: serializeAws_json1_1RegexMatchTuple(input.RegexMatchTuple, context),
      }),
  };
};

const serializeAws_json1_1RegexMatchSetUpdates = (input: RegexMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RegexMatchSetUpdate(entry, context);
    });
};

const serializeAws_json1_1RegexMatchTuple = (input: RegexMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.RegexPatternSetId !== undefined &&
      input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
    ...(input.TextTransformation !== undefined &&
      input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
  };
};

const serializeAws_json1_1RegexPatternSetUpdate = (input: RegexPatternSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.RegexPatternString !== undefined &&
      input.RegexPatternString !== null && { RegexPatternString: input.RegexPatternString }),
  };
};

const serializeAws_json1_1RegexPatternSetUpdates = (input: RegexPatternSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RegexPatternSetUpdate(entry, context);
    });
};

const serializeAws_json1_1RuleGroupUpdate = (input: RuleGroupUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.ActivatedRule !== undefined &&
      input.ActivatedRule !== null && {
        ActivatedRule: serializeAws_json1_1ActivatedRule(input.ActivatedRule, context),
      }),
  };
};

const serializeAws_json1_1RuleGroupUpdates = (input: RuleGroupUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RuleGroupUpdate(entry, context);
    });
};

const serializeAws_json1_1RuleUpdate = (input: RuleUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Predicate !== undefined &&
      input.Predicate !== null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
  };
};

const serializeAws_json1_1RuleUpdates = (input: RuleUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RuleUpdate(entry, context);
    });
};

const serializeAws_json1_1SizeConstraint = (input: SizeConstraint, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.TextTransformation !== undefined &&
      input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
  };
};

const serializeAws_json1_1SizeConstraintSetUpdate = (input: SizeConstraintSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.SizeConstraint !== undefined &&
      input.SizeConstraint !== null && {
        SizeConstraint: serializeAws_json1_1SizeConstraint(input.SizeConstraint, context),
      }),
  };
};

const serializeAws_json1_1SizeConstraintSetUpdates = (
  input: SizeConstraintSetUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SizeConstraintSetUpdate(entry, context);
    });
};

const serializeAws_json1_1SqlInjectionMatchSetUpdate = (
  input: SqlInjectionMatchSetUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.SqlInjectionMatchTuple !== undefined &&
      input.SqlInjectionMatchTuple !== null && {
        SqlInjectionMatchTuple: serializeAws_json1_1SqlInjectionMatchTuple(input.SqlInjectionMatchTuple, context),
      }),
  };
};

const serializeAws_json1_1SqlInjectionMatchSetUpdates = (
  input: SqlInjectionMatchSetUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SqlInjectionMatchSetUpdate(entry, context);
    });
};

const serializeAws_json1_1SqlInjectionMatchTuple = (input: SqlInjectionMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformation !== undefined &&
      input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
  };
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

const serializeAws_json1_1UpdateByteMatchSetRequest = (
  input: UpdateByteMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ByteMatchSetId !== undefined &&
      input.ByteMatchSetId !== null && { ByteMatchSetId: input.ByteMatchSetId }),
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1ByteMatchSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateGeoMatchSetRequest = (
  input: UpdateGeoMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.GeoMatchSetId !== undefined && input.GeoMatchSetId !== null && { GeoMatchSetId: input.GeoMatchSetId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1GeoMatchSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateIPSetRequest = (input: UpdateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.IPSetId !== undefined && input.IPSetId !== null && { IPSetId: input.IPSetId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1IPSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateRateBasedRuleRequest = (
  input: UpdateRateBasedRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RateLimit !== undefined && input.RateLimit !== null && { RateLimit: input.RateLimit }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1RuleUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateRegexMatchSetRequest = (
  input: UpdateRegexMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexMatchSetId !== undefined &&
      input.RegexMatchSetId !== null && { RegexMatchSetId: input.RegexMatchSetId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1RegexMatchSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateRegexPatternSetRequest = (
  input: UpdateRegexPatternSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexPatternSetId !== undefined &&
      input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1RegexPatternSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1RuleGroupUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateRuleRequest = (input: UpdateRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1RuleUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateSizeConstraintSetRequest = (
  input: UpdateSizeConstraintSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.SizeConstraintSetId !== undefined &&
      input.SizeConstraintSetId !== null && { SizeConstraintSetId: input.SizeConstraintSetId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1SizeConstraintSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateSqlInjectionMatchSetRequest = (
  input: UpdateSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.SqlInjectionMatchSetId !== undefined &&
      input.SqlInjectionMatchSetId !== null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1SqlInjectionMatchSetUpdates(input.Updates, context) }),
  };
};

const serializeAws_json1_1UpdateWebACLRequest = (input: UpdateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.DefaultAction !== undefined &&
      input.DefaultAction !== null && { DefaultAction: serializeAws_json1_1WafAction(input.DefaultAction, context) }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1WebACLUpdates(input.Updates, context) }),
    ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
  };
};

const serializeAws_json1_1UpdateXssMatchSetRequest = (
  input: UpdateXssMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_json1_1XssMatchSetUpdates(input.Updates, context) }),
    ...(input.XssMatchSetId !== undefined && input.XssMatchSetId !== null && { XssMatchSetId: input.XssMatchSetId }),
  };
};

const serializeAws_json1_1WafAction = (input: WafAction, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1WafOverrideAction = (input: WafOverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1WebACLUpdate = (input: WebACLUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.ActivatedRule !== undefined &&
      input.ActivatedRule !== null && {
        ActivatedRule: serializeAws_json1_1ActivatedRule(input.ActivatedRule, context),
      }),
  };
};

const serializeAws_json1_1WebACLUpdates = (input: WebACLUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1WebACLUpdate(entry, context);
    });
};

const serializeAws_json1_1XssMatchSetUpdate = (input: XssMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.XssMatchTuple !== undefined &&
      input.XssMatchTuple !== null && {
        XssMatchTuple: serializeAws_json1_1XssMatchTuple(input.XssMatchTuple, context),
      }),
  };
};

const serializeAws_json1_1XssMatchSetUpdates = (input: XssMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1XssMatchSetUpdate(entry, context);
    });
};

const serializeAws_json1_1XssMatchTuple = (input: XssMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch !== undefined &&
      input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformation !== undefined &&
      input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
  };
};

const deserializeAws_json1_1ActivatedRule = (output: any, context: __SerdeContext): ActivatedRule => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1WafAction(output.Action, context)
        : undefined,
    ExcludedRules:
      output.ExcludedRules !== undefined && output.ExcludedRules !== null
        ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
        : undefined,
    OverrideAction:
      output.OverrideAction !== undefined && output.OverrideAction !== null
        ? deserializeAws_json1_1WafOverrideAction(output.OverrideAction, context)
        : undefined,
    Priority: __expectInt(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ActivatedRules = (output: any, context: __SerdeContext): ActivatedRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActivatedRule(entry, context);
    });
};

const deserializeAws_json1_1AssociateWebACLResponse = (
  output: any,
  context: __SerdeContext
): AssociateWebACLResponse => {
  return {} as any;
};

const deserializeAws_json1_1ByteMatchSet = (output: any, context: __SerdeContext): ByteMatchSet => {
  return {
    ByteMatchSetId: __expectString(output.ByteMatchSetId),
    ByteMatchTuples:
      output.ByteMatchTuples !== undefined && output.ByteMatchTuples !== null
        ? deserializeAws_json1_1ByteMatchTuples(output.ByteMatchTuples, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ByteMatchSetSummaries = (output: any, context: __SerdeContext): ByteMatchSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ByteMatchSetSummary(entry, context);
    });
};

const deserializeAws_json1_1ByteMatchSetSummary = (output: any, context: __SerdeContext): ByteMatchSetSummary => {
  return {
    ByteMatchSetId: __expectString(output.ByteMatchSetId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ByteMatchTuple = (output: any, context: __SerdeContext): ByteMatchTuple => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    PositionalConstraint: __expectString(output.PositionalConstraint),
    TargetString:
      output.TargetString !== undefined && output.TargetString !== null
        ? context.base64Decoder(output.TargetString)
        : undefined,
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

const deserializeAws_json1_1ByteMatchTuples = (output: any, context: __SerdeContext): ByteMatchTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ByteMatchTuple(entry, context);
    });
};

const deserializeAws_json1_1CreateByteMatchSetResponse = (
  output: any,
  context: __SerdeContext
): CreateByteMatchSetResponse => {
  return {
    ByteMatchSet:
      output.ByteMatchSet !== undefined && output.ByteMatchSet !== null
        ? deserializeAws_json1_1ByteMatchSet(output.ByteMatchSet, context)
        : undefined,
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1CreateGeoMatchSetResponse = (
  output: any,
  context: __SerdeContext
): CreateGeoMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    GeoMatchSet:
      output.GeoMatchSet !== undefined && output.GeoMatchSet !== null
        ? deserializeAws_json1_1GeoMatchSet(output.GeoMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateIPSetResponse = (output: any, context: __SerdeContext): CreateIPSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    IPSet:
      output.IPSet !== undefined && output.IPSet !== null
        ? deserializeAws_json1_1IPSet(output.IPSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRateBasedRuleResponse = (
  output: any,
  context: __SerdeContext
): CreateRateBasedRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    Rule:
      output.Rule !== undefined && output.Rule !== null
        ? deserializeAws_json1_1RateBasedRule(output.Rule, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRegexMatchSetResponse = (
  output: any,
  context: __SerdeContext
): CreateRegexMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    RegexMatchSet:
      output.RegexMatchSet !== undefined && output.RegexMatchSet !== null
        ? deserializeAws_json1_1RegexMatchSet(output.RegexMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): CreateRegexPatternSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    RegexPatternSet:
      output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
        ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateRuleGroupResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    RuleGroup:
      output.RuleGroup !== undefined && output.RuleGroup !== null
        ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRuleResponse = (output: any, context: __SerdeContext): CreateRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    Rule:
      output.Rule !== undefined && output.Rule !== null ? deserializeAws_json1_1Rule(output.Rule, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSizeConstraintSetResponse = (
  output: any,
  context: __SerdeContext
): CreateSizeConstraintSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    SizeConstraintSet:
      output.SizeConstraintSet !== undefined && output.SizeConstraintSet !== null
        ? deserializeAws_json1_1SizeConstraintSet(output.SizeConstraintSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): CreateSqlInjectionMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    SqlInjectionMatchSet:
      output.SqlInjectionMatchSet !== undefined && output.SqlInjectionMatchSet !== null
        ? deserializeAws_json1_1SqlInjectionMatchSet(output.SqlInjectionMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateWebACLMigrationStackResponse = (
  output: any,
  context: __SerdeContext
): CreateWebACLMigrationStackResponse => {
  return {
    S3ObjectUrl: __expectString(output.S3ObjectUrl),
  } as any;
};

const deserializeAws_json1_1CreateWebACLResponse = (output: any, context: __SerdeContext): CreateWebACLResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    WebACL:
      output.WebACL !== undefined && output.WebACL !== null
        ? deserializeAws_json1_1WebACL(output.WebACL, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateXssMatchSetResponse = (
  output: any,
  context: __SerdeContext
): CreateXssMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    XssMatchSet:
      output.XssMatchSet !== undefined && output.XssMatchSet !== null
        ? deserializeAws_json1_1XssMatchSet(output.XssMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteByteMatchSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteByteMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteGeoMatchSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteGeoMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteIPSetResponse = (output: any, context: __SerdeContext): DeleteIPSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
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

const deserializeAws_json1_1DeleteRateBasedRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteRateBasedRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteRegexMatchSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteRegexMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteRegexPatternSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteRuleGroupResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteRuleResponse = (output: any, context: __SerdeContext): DeleteRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteSizeConstraintSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteSizeConstraintSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteSqlInjectionMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteWebACLResponse = (output: any, context: __SerdeContext): DeleteWebACLResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1DeleteXssMatchSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteXssMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
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
    RuleId: __expectString(output.RuleId),
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
    Data: __expectString(output.Data),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GeoMatchConstraint = (output: any, context: __SerdeContext): GeoMatchConstraint => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1GeoMatchConstraints = (output: any, context: __SerdeContext): GeoMatchConstraint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GeoMatchConstraint(entry, context);
    });
};

const deserializeAws_json1_1GeoMatchSet = (output: any, context: __SerdeContext): GeoMatchSet => {
  return {
    GeoMatchConstraints:
      output.GeoMatchConstraints !== undefined && output.GeoMatchConstraints !== null
        ? deserializeAws_json1_1GeoMatchConstraints(output.GeoMatchConstraints, context)
        : undefined,
    GeoMatchSetId: __expectString(output.GeoMatchSetId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1GeoMatchSetSummaries = (output: any, context: __SerdeContext): GeoMatchSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GeoMatchSetSummary(entry, context);
    });
};

const deserializeAws_json1_1GeoMatchSetSummary = (output: any, context: __SerdeContext): GeoMatchSetSummary => {
  return {
    GeoMatchSetId: __expectString(output.GeoMatchSetId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1GetByteMatchSetResponse = (
  output: any,
  context: __SerdeContext
): GetByteMatchSetResponse => {
  return {
    ByteMatchSet:
      output.ByteMatchSet !== undefined && output.ByteMatchSet !== null
        ? deserializeAws_json1_1ByteMatchSet(output.ByteMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetChangeTokenResponse = (output: any, context: __SerdeContext): GetChangeTokenResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1GetChangeTokenStatusResponse = (
  output: any,
  context: __SerdeContext
): GetChangeTokenStatusResponse => {
  return {
    ChangeTokenStatus: __expectString(output.ChangeTokenStatus),
  } as any;
};

const deserializeAws_json1_1GetGeoMatchSetResponse = (output: any, context: __SerdeContext): GetGeoMatchSetResponse => {
  return {
    GeoMatchSet:
      output.GeoMatchSet !== undefined && output.GeoMatchSet !== null
        ? deserializeAws_json1_1GeoMatchSet(output.GeoMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetIPSetResponse = (output: any, context: __SerdeContext): GetIPSetResponse => {
  return {
    IPSet:
      output.IPSet !== undefined && output.IPSet !== null
        ? deserializeAws_json1_1IPSet(output.IPSet, context)
        : undefined,
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

const deserializeAws_json1_1GetPermissionPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetPermissionPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedRuleManagedKeysResponse => {
  return {
    ManagedKeys:
      output.ManagedKeys !== undefined && output.ManagedKeys !== null
        ? deserializeAws_json1_1ManagedKeys(output.ManagedKeys, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1GetRateBasedRuleResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedRuleResponse => {
  return {
    Rule:
      output.Rule !== undefined && output.Rule !== null
        ? deserializeAws_json1_1RateBasedRule(output.Rule, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRegexMatchSetResponse = (
  output: any,
  context: __SerdeContext
): GetRegexMatchSetResponse => {
  return {
    RegexMatchSet:
      output.RegexMatchSet !== undefined && output.RegexMatchSet !== null
        ? deserializeAws_json1_1RegexMatchSet(output.RegexMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): GetRegexPatternSetResponse => {
  return {
    RegexPatternSet:
      output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
        ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRuleGroupResponse = (output: any, context: __SerdeContext): GetRuleGroupResponse => {
  return {
    RuleGroup:
      output.RuleGroup !== undefined && output.RuleGroup !== null
        ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRuleResponse = (output: any, context: __SerdeContext): GetRuleResponse => {
  return {
    Rule:
      output.Rule !== undefined && output.Rule !== null ? deserializeAws_json1_1Rule(output.Rule, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSampledRequestsResponse = (
  output: any,
  context: __SerdeContext
): GetSampledRequestsResponse => {
  return {
    PopulationSize: __expectInt(output.PopulationSize),
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

const deserializeAws_json1_1GetSizeConstraintSetResponse = (
  output: any,
  context: __SerdeContext
): GetSizeConstraintSetResponse => {
  return {
    SizeConstraintSet:
      output.SizeConstraintSet !== undefined && output.SizeConstraintSet !== null
        ? deserializeAws_json1_1SizeConstraintSet(output.SizeConstraintSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): GetSqlInjectionMatchSetResponse => {
  return {
    SqlInjectionMatchSet:
      output.SqlInjectionMatchSet !== undefined && output.SqlInjectionMatchSet !== null
        ? deserializeAws_json1_1SqlInjectionMatchSet(output.SqlInjectionMatchSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWebACLForResourceResponse = (
  output: any,
  context: __SerdeContext
): GetWebACLForResourceResponse => {
  return {
    WebACLSummary:
      output.WebACLSummary !== undefined && output.WebACLSummary !== null
        ? deserializeAws_json1_1WebACLSummary(output.WebACLSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWebACLResponse = (output: any, context: __SerdeContext): GetWebACLResponse => {
  return {
    WebACL:
      output.WebACL !== undefined && output.WebACL !== null
        ? deserializeAws_json1_1WebACL(output.WebACL, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetXssMatchSetResponse = (output: any, context: __SerdeContext): GetXssMatchSetResponse => {
  return {
    XssMatchSet:
      output.XssMatchSet !== undefined && output.XssMatchSet !== null
        ? deserializeAws_json1_1XssMatchSet(output.XssMatchSet, context)
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

const deserializeAws_json1_1IPSet = (output: any, context: __SerdeContext): IPSet => {
  return {
    IPSetDescriptors:
      output.IPSetDescriptors !== undefined && output.IPSetDescriptors !== null
        ? deserializeAws_json1_1IPSetDescriptors(output.IPSetDescriptors, context)
        : undefined,
    IPSetId: __expectString(output.IPSetId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1IPSetDescriptor = (output: any, context: __SerdeContext): IPSetDescriptor => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1IPSetDescriptors = (output: any, context: __SerdeContext): IPSetDescriptor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IPSetDescriptor(entry, context);
    });
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
    IPSetId: __expectString(output.IPSetId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): ListActivatedRulesInRuleGroupResponse => {
  return {
    ActivatedRules:
      output.ActivatedRules !== undefined && output.ActivatedRules !== null
        ? deserializeAws_json1_1ActivatedRules(output.ActivatedRules, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListByteMatchSetsResponse = (
  output: any,
  context: __SerdeContext
): ListByteMatchSetsResponse => {
  return {
    ByteMatchSets:
      output.ByteMatchSets !== undefined && output.ByteMatchSets !== null
        ? deserializeAws_json1_1ByteMatchSetSummaries(output.ByteMatchSets, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

const deserializeAws_json1_1ListGeoMatchSetsResponse = (
  output: any,
  context: __SerdeContext
): ListGeoMatchSetsResponse => {
  return {
    GeoMatchSets:
      output.GeoMatchSets !== undefined && output.GeoMatchSets !== null
        ? deserializeAws_json1_1GeoMatchSetSummaries(output.GeoMatchSets, context)
        : undefined,
    NextMarker: __expectString(output.NextMarker),
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

const deserializeAws_json1_1ListRateBasedRulesResponse = (
  output: any,
  context: __SerdeContext
): ListRateBasedRulesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRegexMatchSetsResponse = (
  output: any,
  context: __SerdeContext
): ListRegexMatchSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RegexMatchSets:
      output.RegexMatchSets !== undefined && output.RegexMatchSets !== null
        ? deserializeAws_json1_1RegexMatchSetSummaries(output.RegexMatchSets, context)
        : undefined,
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

const deserializeAws_json1_1ListRulesResponse = (output: any, context: __SerdeContext): ListRulesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSizeConstraintSetsResponse = (
  output: any,
  context: __SerdeContext
): ListSizeConstraintSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    SizeConstraintSets:
      output.SizeConstraintSets !== undefined && output.SizeConstraintSets !== null
        ? deserializeAws_json1_1SizeConstraintSetSummaries(output.SizeConstraintSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSqlInjectionMatchSetsResponse = (
  output: any,
  context: __SerdeContext
): ListSqlInjectionMatchSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    SqlInjectionMatchSets:
      output.SqlInjectionMatchSets !== undefined && output.SqlInjectionMatchSets !== null
        ? deserializeAws_json1_1SqlInjectionMatchSetSummaries(output.SqlInjectionMatchSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSubscribedRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListSubscribedRuleGroupsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RuleGroups:
      output.RuleGroups !== undefined && output.RuleGroups !== null
        ? deserializeAws_json1_1SubscribedRuleGroupSummaries(output.RuleGroups, context)
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

const deserializeAws_json1_1ListXssMatchSetsResponse = (
  output: any,
  context: __SerdeContext
): ListXssMatchSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    XssMatchSets:
      output.XssMatchSets !== undefined && output.XssMatchSets !== null
        ? deserializeAws_json1_1XssMatchSetSummaries(output.XssMatchSets, context)
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

const deserializeAws_json1_1ManagedKeys = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Predicate = (output: any, context: __SerdeContext): Predicate => {
  return {
    DataId: __expectString(output.DataId),
    Negated: __expectBoolean(output.Negated),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Predicates = (output: any, context: __SerdeContext): Predicate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Predicate(entry, context);
    });
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

const deserializeAws_json1_1PutPermissionPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutPermissionPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1RateBasedRule = (output: any, context: __SerdeContext): RateBasedRule => {
  return {
    MatchPredicates:
      output.MatchPredicates !== undefined && output.MatchPredicates !== null
        ? deserializeAws_json1_1Predicates(output.MatchPredicates, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RateKey: __expectString(output.RateKey),
    RateLimit: __expectInt(output.RateLimit),
    RuleId: __expectString(output.RuleId),
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

const deserializeAws_json1_1RegexMatchSet = (output: any, context: __SerdeContext): RegexMatchSet => {
  return {
    Name: __expectString(output.Name),
    RegexMatchSetId: __expectString(output.RegexMatchSetId),
    RegexMatchTuples:
      output.RegexMatchTuples !== undefined && output.RegexMatchTuples !== null
        ? deserializeAws_json1_1RegexMatchTuples(output.RegexMatchTuples, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegexMatchSetSummaries = (output: any, context: __SerdeContext): RegexMatchSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegexMatchSetSummary(entry, context);
    });
};

const deserializeAws_json1_1RegexMatchSetSummary = (output: any, context: __SerdeContext): RegexMatchSetSummary => {
  return {
    Name: __expectString(output.Name),
    RegexMatchSetId: __expectString(output.RegexMatchSetId),
  } as any;
};

const deserializeAws_json1_1RegexMatchTuple = (output: any, context: __SerdeContext): RegexMatchTuple => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    RegexPatternSetId: __expectString(output.RegexPatternSetId),
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

const deserializeAws_json1_1RegexMatchTuples = (output: any, context: __SerdeContext): RegexMatchTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegexMatchTuple(entry, context);
    });
};

const deserializeAws_json1_1RegexPatternSet = (output: any, context: __SerdeContext): RegexPatternSet => {
  return {
    Name: __expectString(output.Name),
    RegexPatternSetId: __expectString(output.RegexPatternSetId),
    RegexPatternStrings:
      output.RegexPatternStrings !== undefined && output.RegexPatternStrings !== null
        ? deserializeAws_json1_1RegexPatternStrings(output.RegexPatternStrings, context)
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
    Name: __expectString(output.Name),
    RegexPatternSetId: __expectString(output.RegexPatternSetId),
  } as any;
};

const deserializeAws_json1_1RegexPatternStrings = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
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
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    Predicates:
      output.Predicates !== undefined && output.Predicates !== null
        ? deserializeAws_json1_1Predicates(output.Predicates, context)
        : undefined,
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_json1_1RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
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
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
  } as any;
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
    Name: __expectString(output.Name),
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_json1_1SampledHTTPRequest = (output: any, context: __SerdeContext): SampledHTTPRequest => {
  return {
    Action: __expectString(output.Action),
    Request:
      output.Request !== undefined && output.Request !== null
        ? deserializeAws_json1_1HTTPRequest(output.Request, context)
        : undefined,
    RuleWithinRuleGroup: __expectString(output.RuleWithinRuleGroup),
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Weight: __expectInt(output.Weight),
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

const deserializeAws_json1_1SizeConstraint = (output: any, context: __SerdeContext): SizeConstraint => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    Size: __expectInt(output.Size),
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

const deserializeAws_json1_1SizeConstraints = (output: any, context: __SerdeContext): SizeConstraint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SizeConstraint(entry, context);
    });
};

const deserializeAws_json1_1SizeConstraintSet = (output: any, context: __SerdeContext): SizeConstraintSet => {
  return {
    Name: __expectString(output.Name),
    SizeConstraintSetId: __expectString(output.SizeConstraintSetId),
    SizeConstraints:
      output.SizeConstraints !== undefined && output.SizeConstraints !== null
        ? deserializeAws_json1_1SizeConstraints(output.SizeConstraints, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SizeConstraintSetSummaries = (
  output: any,
  context: __SerdeContext
): SizeConstraintSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SizeConstraintSetSummary(entry, context);
    });
};

const deserializeAws_json1_1SizeConstraintSetSummary = (
  output: any,
  context: __SerdeContext
): SizeConstraintSetSummary => {
  return {
    Name: __expectString(output.Name),
    SizeConstraintSetId: __expectString(output.SizeConstraintSetId),
  } as any;
};

const deserializeAws_json1_1SqlInjectionMatchSet = (output: any, context: __SerdeContext): SqlInjectionMatchSet => {
  return {
    Name: __expectString(output.Name),
    SqlInjectionMatchSetId: __expectString(output.SqlInjectionMatchSetId),
    SqlInjectionMatchTuples:
      output.SqlInjectionMatchTuples !== undefined && output.SqlInjectionMatchTuples !== null
        ? deserializeAws_json1_1SqlInjectionMatchTuples(output.SqlInjectionMatchTuples, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SqlInjectionMatchSetSummaries = (
  output: any,
  context: __SerdeContext
): SqlInjectionMatchSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SqlInjectionMatchSetSummary(entry, context);
    });
};

const deserializeAws_json1_1SqlInjectionMatchSetSummary = (
  output: any,
  context: __SerdeContext
): SqlInjectionMatchSetSummary => {
  return {
    Name: __expectString(output.Name),
    SqlInjectionMatchSetId: __expectString(output.SqlInjectionMatchSetId),
  } as any;
};

const deserializeAws_json1_1SqlInjectionMatchTuple = (output: any, context: __SerdeContext): SqlInjectionMatchTuple => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

const deserializeAws_json1_1SqlInjectionMatchTuples = (
  output: any,
  context: __SerdeContext
): SqlInjectionMatchTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SqlInjectionMatchTuple(entry, context);
    });
};

const deserializeAws_json1_1SubscribedRuleGroupSummaries = (
  output: any,
  context: __SerdeContext
): SubscribedRuleGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubscribedRuleGroupSummary(entry, context);
    });
};

const deserializeAws_json1_1SubscribedRuleGroupSummary = (
  output: any,
  context: __SerdeContext
): SubscribedRuleGroupSummary => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
  } as any;
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

const deserializeAws_json1_1UpdateByteMatchSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateByteMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateGeoMatchSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateGeoMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateIPSetResponse = (output: any, context: __SerdeContext): UpdateIPSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateRateBasedRuleResponse = (
  output: any,
  context: __SerdeContext
): UpdateRateBasedRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateRegexMatchSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateRegexMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateRegexPatternSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateRegexPatternSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateRuleGroupResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateRuleResponse = (output: any, context: __SerdeContext): UpdateRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateSizeConstraintSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateSizeConstraintSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateSqlInjectionMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateWebACLResponse = (output: any, context: __SerdeContext): UpdateWebACLResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1UpdateXssMatchSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateXssMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

const deserializeAws_json1_1WafAction = (output: any, context: __SerdeContext): WafAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1WAFBadRequestException = (output: any, context: __SerdeContext): WAFBadRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFDisallowedNameException = (
  output: any,
  context: __SerdeContext
): WAFDisallowedNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFEntityMigrationException = (
  output: any,
  context: __SerdeContext
): WAFEntityMigrationException => {
  return {
    MigrationErrorReason: __expectString(output.MigrationErrorReason),
    MigrationErrorType: __expectString(output.MigrationErrorType),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFInternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidAccountException = (
  output: any,
  context: __SerdeContext
): WAFInvalidAccountException => {
  return {} as any;
};

const deserializeAws_json1_1WAFInvalidOperationException = (
  output: any,
  context: __SerdeContext
): WAFInvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidParameterException = (
  output: any,
  context: __SerdeContext
): WAFInvalidParameterException => {
  return {
    field: __expectString(output.field),
    parameter: __expectString(output.parameter),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_1WAFInvalidPermissionPolicyException = (
  output: any,
  context: __SerdeContext
): WAFInvalidPermissionPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFInvalidRegexPatternException = (
  output: any,
  context: __SerdeContext
): WAFInvalidRegexPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFLimitsExceededException = (
  output: any,
  context: __SerdeContext
): WAFLimitsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFNonEmptyEntityException = (
  output: any,
  context: __SerdeContext
): WAFNonEmptyEntityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFNonexistentContainerException = (
  output: any,
  context: __SerdeContext
): WAFNonexistentContainerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFNonexistentItemException = (
  output: any,
  context: __SerdeContext
): WAFNonexistentItemException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WafOverrideAction = (output: any, context: __SerdeContext): WafOverrideAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1WAFReferencedItemException = (
  output: any,
  context: __SerdeContext
): WAFReferencedItemException => {
  return {
    message: __expectString(output.message),
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

const deserializeAws_json1_1WAFStaleDataException = (output: any, context: __SerdeContext): WAFStaleDataException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFSubscriptionNotFoundException = (
  output: any,
  context: __SerdeContext
): WAFSubscriptionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFTagOperationException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFTagOperationInternalErrorException = (
  output: any,
  context: __SerdeContext
): WAFTagOperationInternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WAFUnavailableEntityException = (
  output: any,
  context: __SerdeContext
): WAFUnavailableEntityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WebACL = (output: any, context: __SerdeContext): WebACL => {
  return {
    DefaultAction:
      output.DefaultAction !== undefined && output.DefaultAction !== null
        ? deserializeAws_json1_1WafAction(output.DefaultAction, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1ActivatedRules(output.Rules, context)
        : undefined,
    WebACLArn: __expectString(output.WebACLArn),
    WebACLId: __expectString(output.WebACLId),
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
    Name: __expectString(output.Name),
    WebACLId: __expectString(output.WebACLId),
  } as any;
};

const deserializeAws_json1_1XssMatchSet = (output: any, context: __SerdeContext): XssMatchSet => {
  return {
    Name: __expectString(output.Name),
    XssMatchSetId: __expectString(output.XssMatchSetId),
    XssMatchTuples:
      output.XssMatchTuples !== undefined && output.XssMatchTuples !== null
        ? deserializeAws_json1_1XssMatchTuples(output.XssMatchTuples, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1XssMatchSetSummaries = (output: any, context: __SerdeContext): XssMatchSetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1XssMatchSetSummary(entry, context);
    });
};

const deserializeAws_json1_1XssMatchSetSummary = (output: any, context: __SerdeContext): XssMatchSetSummary => {
  return {
    Name: __expectString(output.Name),
    XssMatchSetId: __expectString(output.XssMatchSetId),
  } as any;
};

const deserializeAws_json1_1XssMatchTuple = (output: any, context: __SerdeContext): XssMatchTuple => {
  return {
    FieldToMatch:
      output.FieldToMatch !== undefined && output.FieldToMatch !== null
        ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
        : undefined,
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

const deserializeAws_json1_1XssMatchTuples = (output: any, context: __SerdeContext): XssMatchTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1XssMatchTuple(entry, context);
    });
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
