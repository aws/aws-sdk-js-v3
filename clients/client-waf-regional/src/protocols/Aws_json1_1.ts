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
  WafAction,
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
  WafOverrideAction,
  WAFReferencedItemException,
  WAFServiceLinkedRoleErrorException,
  WAFStaleDataException,
  WAFSubscriptionNotFoundException,
  WAFTagOperationException,
  WAFTagOperationInternalErrorException,
  WAFUnavailableEntityException,
  WebACL,
  WebACLSummary,
  WebACLUpdate,
  XssMatchSet,
  XssMatchSetSummary,
  XssMatchSetUpdate,
  XssMatchTuple,
} from "../models/models_0";
import { WAFRegionalServiceException as __BaseException } from "../models/WAFRegionalServiceException";

/**
 * serializeAws_json1_1AssociateWebACLCommand
 */
export const se_AssociateWebACLCommand = async (
  input: AssociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.AssociateWebACL",
  };
  let body: any;
  body = JSON.stringify(se_AssociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateByteMatchSetCommand
 */
export const se_CreateByteMatchSetCommand = async (
  input: CreateByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGeoMatchSetCommand
 */
export const se_CreateGeoMatchSetCommand = async (
  input: CreateGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIPSetCommand
 */
export const se_CreateIPSetCommand = async (
  input: CreateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateIPSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRateBasedRuleCommand
 */
export const se_CreateRateBasedRuleCommand = async (
  input: CreateRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(se_CreateRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRegexMatchSetCommand
 */
export const se_CreateRegexMatchSetCommand = async (
  input: CreateRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRegexPatternSetCommand
 */
export const se_CreateRegexPatternSetCommand = async (
  input: CreateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRule",
  };
  let body: any;
  body = JSON.stringify(se_CreateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRuleGroupCommand
 */
export const se_CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSizeConstraintSetCommand
 */
export const se_CreateSizeConstraintSetCommand = async (
  input: CreateSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSqlInjectionMatchSetCommand
 */
export const se_CreateSqlInjectionMatchSetCommand = async (
  input: CreateSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebACLCommand
 */
export const se_CreateWebACLCommand = async (
  input: CreateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateWebACL",
  };
  let body: any;
  body = JSON.stringify(se_CreateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebACLMigrationStackCommand
 */
export const se_CreateWebACLMigrationStackCommand = async (
  input: CreateWebACLMigrationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateWebACLMigrationStack",
  };
  let body: any;
  body = JSON.stringify(se_CreateWebACLMigrationStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateXssMatchSetCommand
 */
export const se_CreateXssMatchSetCommand = async (
  input: CreateXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.CreateXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateXssMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteByteMatchSetCommand
 */
export const se_DeleteByteMatchSetCommand = async (
  input: DeleteByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGeoMatchSetCommand
 */
export const se_DeleteGeoMatchSetCommand = async (
  input: DeleteGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIPSetCommand
 */
export const se_DeleteIPSetCommand = async (
  input: DeleteIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteIPSet",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteLoggingConfiguration",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeletePermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeletePermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRateBasedRuleCommand
 */
export const se_DeleteRateBasedRuleCommand = async (
  input: DeleteRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRegexMatchSetCommand
 */
export const se_DeleteRegexMatchSetCommand = async (
  input: DeleteRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRegexPatternSetCommand
 */
export const se_DeleteRegexPatternSetCommand = async (
  input: DeleteRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRule",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleGroupCommand
 */
export const se_DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteRuleGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSizeConstraintSetCommand
 */
export const se_DeleteSizeConstraintSetCommand = async (
  input: DeleteSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSqlInjectionMatchSetCommand
 */
export const se_DeleteSqlInjectionMatchSetCommand = async (
  input: DeleteSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebACLCommand
 */
export const se_DeleteWebACLCommand = async (
  input: DeleteWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteWebACL",
  };
  let body: any;
  body = JSON.stringify(se_DeleteWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteXssMatchSetCommand
 */
export const se_DeleteXssMatchSetCommand = async (
  input: DeleteXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DeleteXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteXssMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateWebACLCommand
 */
export const se_DisassociateWebACLCommand = async (
  input: DisassociateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.DisassociateWebACL",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetByteMatchSetCommand
 */
export const se_GetByteMatchSetCommand = async (
  input: GetByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_GetByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetChangeTokenCommand
 */
export const se_GetChangeTokenCommand = async (
  input: GetChangeTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetChangeToken",
  };
  let body: any;
  body = JSON.stringify(se_GetChangeTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetChangeTokenStatusCommand
 */
export const se_GetChangeTokenStatusCommand = async (
  input: GetChangeTokenStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetChangeTokenStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetChangeTokenStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGeoMatchSetCommand
 */
export const se_GetGeoMatchSetCommand = async (
  input: GetGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_GetGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIPSetCommand
 */
export const se_GetIPSetCommand = async (
  input: GetIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetIPSet",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_GetLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPermissionPolicyCommand
 */
export const se_GetPermissionPolicyCommand = async (
  input: GetPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetPermissionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetPermissionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRateBasedRuleCommand
 */
export const se_GetRateBasedRuleCommand = async (
  input: GetRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(se_GetRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRateBasedRuleManagedKeysCommand
 */
export const se_GetRateBasedRuleManagedKeysCommand = async (
  input: GetRateBasedRuleManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys",
  };
  let body: any;
  body = JSON.stringify(se_GetRateBasedRuleManagedKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegexMatchSetCommand
 */
export const se_GetRegexMatchSetCommand = async (
  input: GetRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_GetRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegexPatternSetCommand
 */
export const se_GetRegexPatternSetCommand = async (
  input: GetRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(se_GetRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRuleCommand
 */
export const se_GetRuleCommand = async (
  input: GetRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRule",
  };
  let body: any;
  body = JSON.stringify(se_GetRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRuleGroupCommand
 */
export const se_GetRuleGroupCommand = async (
  input: GetRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetRuleGroup",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetSampledRequests",
  };
  let body: any;
  body = JSON.stringify(se_GetSampledRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSizeConstraintSetCommand
 */
export const se_GetSizeConstraintSetCommand = async (
  input: GetSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(se_GetSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSqlInjectionMatchSetCommand
 */
export const se_GetSqlInjectionMatchSetCommand = async (
  input: GetSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_GetSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWebACLCommand
 */
export const se_GetWebACLCommand = async (
  input: GetWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetWebACL",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetWebACLForResource",
  };
  let body: any;
  body = JSON.stringify(se_GetWebACLForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetXssMatchSetCommand
 */
export const se_GetXssMatchSetCommand = async (
  input: GetXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.GetXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_GetXssMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListActivatedRulesInRuleGroupCommand
 */
export const se_ListActivatedRulesInRuleGroupCommand = async (
  input: ListActivatedRulesInRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup",
  };
  let body: any;
  body = JSON.stringify(se_ListActivatedRulesInRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListByteMatchSetsCommand
 */
export const se_ListByteMatchSetsCommand = async (
  input: ListByteMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListByteMatchSets",
  };
  let body: any;
  body = JSON.stringify(se_ListByteMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGeoMatchSetsCommand
 */
export const se_ListGeoMatchSetsCommand = async (
  input: ListGeoMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListGeoMatchSets",
  };
  let body: any;
  body = JSON.stringify(se_ListGeoMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIPSetsCommand
 */
export const se_ListIPSetsCommand = async (
  input: ListIPSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListIPSets",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListLoggingConfigurations",
  };
  let body: any;
  body = JSON.stringify(se_ListLoggingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRateBasedRulesCommand
 */
export const se_ListRateBasedRulesCommand = async (
  input: ListRateBasedRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRateBasedRules",
  };
  let body: any;
  body = JSON.stringify(se_ListRateBasedRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRegexMatchSetsCommand
 */
export const se_ListRegexMatchSetsCommand = async (
  input: ListRegexMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRegexMatchSets",
  };
  let body: any;
  body = JSON.stringify(se_ListRegexMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRegexPatternSetsCommand
 */
export const se_ListRegexPatternSetsCommand = async (
  input: ListRegexPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRegexPatternSets",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListResourcesForWebACL",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRuleGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListRules",
  };
  let body: any;
  body = JSON.stringify(se_ListRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSizeConstraintSetsCommand
 */
export const se_ListSizeConstraintSetsCommand = async (
  input: ListSizeConstraintSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListSizeConstraintSets",
  };
  let body: any;
  body = JSON.stringify(se_ListSizeConstraintSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSqlInjectionMatchSetsCommand
 */
export const se_ListSqlInjectionMatchSetsCommand = async (
  input: ListSqlInjectionMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListSqlInjectionMatchSets",
  };
  let body: any;
  body = JSON.stringify(se_ListSqlInjectionMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSubscribedRuleGroupsCommand
 */
export const se_ListSubscribedRuleGroupsCommand = async (
  input: ListSubscribedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListSubscribedRuleGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListSubscribedRuleGroupsRequest(input, context));
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
    "x-amz-target": "AWSWAF_Regional_20161128.ListTagsForResource",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListWebACLs",
  };
  let body: any;
  body = JSON.stringify(se_ListWebACLsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListXssMatchSetsCommand
 */
export const se_ListXssMatchSetsCommand = async (
  input: ListXssMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.ListXssMatchSets",
  };
  let body: any;
  body = JSON.stringify(se_ListXssMatchSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLoggingConfigurationCommand
 */
export const se_PutLoggingConfigurationCommand = async (
  input: PutLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.PutLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_PutLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPermissionPolicyCommand
 */
export const se_PutPermissionPolicyCommand = async (
  input: PutPermissionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.PutPermissionPolicy",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.TagResource",
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
    "x-amz-target": "AWSWAF_Regional_20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateByteMatchSetCommand
 */
export const se_UpdateByteMatchSetCommand = async (
  input: UpdateByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateByteMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateByteMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGeoMatchSetCommand
 */
export const se_UpdateGeoMatchSetCommand = async (
  input: UpdateGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateGeoMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateGeoMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateIPSetCommand
 */
export const se_UpdateIPSetCommand = async (
  input: UpdateIPSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateIPSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateIPSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRateBasedRuleCommand
 */
export const se_UpdateRateBasedRuleCommand = async (
  input: UpdateRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRateBasedRule",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRateBasedRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRegexMatchSetCommand
 */
export const se_UpdateRegexMatchSetCommand = async (
  input: UpdateRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRegexMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRegexMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRegexPatternSetCommand
 */
export const se_UpdateRegexPatternSetCommand = async (
  input: UpdateRegexPatternSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRegexPatternSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRegexPatternSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleCommand
 */
export const se_UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRule",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleGroupCommand
 */
export const se_UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSizeConstraintSetCommand
 */
export const se_UpdateSizeConstraintSetCommand = async (
  input: UpdateSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateSizeConstraintSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSizeConstraintSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSqlInjectionMatchSetCommand
 */
export const se_UpdateSqlInjectionMatchSetCommand = async (
  input: UpdateSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSqlInjectionMatchSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWebACLCommand
 */
export const se_UpdateWebACLCommand = async (
  input: UpdateWebACLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateWebACL",
  };
  let body: any;
  body = JSON.stringify(se_UpdateWebACLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateXssMatchSetCommand
 */
export const se_UpdateXssMatchSetCommand = async (
  input: UpdateXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSWAF_Regional_20161128.UpdateXssMatchSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateXssMatchSetRequest(input, context));
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafregional#WAFUnavailableEntityException":
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
 * deserializeAws_json1_1CreateByteMatchSetCommand
 */
export const de_CreateByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateByteMatchSetResponse(data, context);
  const response: CreateByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateByteMatchSetCommandError
 */
const de_CreateByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateGeoMatchSetCommand
 */
export const de_CreateGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGeoMatchSetResponse(data, context);
  const response: CreateGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGeoMatchSetCommandError
 */
const de_CreateGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRateBasedRuleCommand
 */
export const de_CreateRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRateBasedRuleResponse(data, context);
  const response: CreateRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRateBasedRuleCommandError
 */
const de_CreateRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1CreateRegexMatchSetCommand
 */
export const de_CreateRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRegexMatchSetResponse(data, context);
  const response: CreateRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRegexMatchSetCommandError
 */
const de_CreateRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRuleResponse(data, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRuleCommandError
 */
const de_CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1CreateSizeConstraintSetCommand
 */
export const de_CreateSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSizeConstraintSetResponse(data, context);
  const response: CreateSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSizeConstraintSetCommandError
 */
const de_CreateSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSqlInjectionMatchSetCommand
 */
export const de_CreateSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSqlInjectionMatchSetResponse(data, context);
  const response: CreateSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError
 */
const de_CreateSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1CreateWebACLMigrationStackCommand
 */
export const de_CreateWebACLMigrationStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLMigrationStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWebACLMigrationStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWebACLMigrationStackResponse(data, context);
  const response: CreateWebACLMigrationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWebACLMigrationStackCommandError
 */
const de_CreateWebACLMigrationStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebACLMigrationStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFEntityMigrationException":
    case "com.amazonaws.wafregional#WAFEntityMigrationException":
      throw await de_WAFEntityMigrationExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1CreateXssMatchSetCommand
 */
export const de_CreateXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateXssMatchSetResponse(data, context);
  const response: CreateXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateXssMatchSetCommandError
 */
const de_CreateXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteByteMatchSetCommand
 */
export const de_DeleteByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteByteMatchSetResponse(data, context);
  const response: DeleteByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteByteMatchSetCommandError
 */
const de_DeleteByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteGeoMatchSetCommand
 */
export const de_DeleteGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGeoMatchSetResponse(data, context);
  const response: DeleteGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGeoMatchSetCommandError
 */
const de_DeleteGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRateBasedRuleCommand
 */
export const de_DeleteRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRateBasedRuleResponse(data, context);
  const response: DeleteRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRateBasedRuleCommandError
 */
const de_DeleteRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1DeleteRegexMatchSetCommand
 */
export const de_DeleteRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRegexMatchSetResponse(data, context);
  const response: DeleteRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRegexMatchSetCommandError
 */
const de_DeleteRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRuleResponse(data, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRuleCommandError
 */
const de_DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1DeleteSizeConstraintSetCommand
 */
export const de_DeleteSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSizeConstraintSetResponse(data, context);
  const response: DeleteSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSizeConstraintSetCommandError
 */
const de_DeleteSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand
 */
export const de_DeleteSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSqlInjectionMatchSetResponse(data, context);
  const response: DeleteSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError
 */
const de_DeleteSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1DeleteXssMatchSetCommand
 */
export const de_DeleteXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteXssMatchSetResponse(data, context);
  const response: DeleteXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteXssMatchSetCommandError
 */
const de_DeleteXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonEmptyEntityException":
    case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
      throw await de_WAFNonEmptyEntityExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetByteMatchSetCommand
 */
export const de_GetByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetByteMatchSetResponse(data, context);
  const response: GetByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetByteMatchSetCommandError
 */
const de_GetByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetChangeTokenCommand
 */
export const de_GetChangeTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetChangeTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetChangeTokenResponse(data, context);
  const response: GetChangeTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetChangeTokenCommandError
 */
const de_GetChangeTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetChangeTokenStatusCommand
 */
export const de_GetChangeTokenStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetChangeTokenStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetChangeTokenStatusResponse(data, context);
  const response: GetChangeTokenStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetChangeTokenStatusCommandError
 */
const de_GetChangeTokenStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeTokenStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetGeoMatchSetCommand
 */
export const de_GetGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGeoMatchSetResponse(data, context);
  const response: GetGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGeoMatchSetCommandError
 */
const de_GetGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetRateBasedRuleCommand
 */
export const de_GetRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRateBasedRuleResponse(data, context);
  const response: GetRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRateBasedRuleCommandError
 */
const de_GetRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand
 */
export const de_GetRateBasedRuleManagedKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleManagedKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRateBasedRuleManagedKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRateBasedRuleManagedKeysResponse(data, context);
  const response: GetRateBasedRuleManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError
 */
const de_GetRateBasedRuleManagedKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRateBasedRuleManagedKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetRegexMatchSetCommand
 */
export const de_GetRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegexMatchSetResponse(data, context);
  const response: GetRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRegexMatchSetCommandError
 */
const de_GetRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetRuleCommand
 */
export const de_GetRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRuleResponse(data, context);
  const response: GetRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRuleCommandError
 */
const de_GetRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetSizeConstraintSetCommand
 */
export const de_GetSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSizeConstraintSetResponse(data, context);
  const response: GetSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSizeConstraintSetCommandError
 */
const de_GetSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1GetSqlInjectionMatchSetCommand
 */
export const de_GetSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSqlInjectionMatchSetResponse(data, context);
  const response: GetSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSqlInjectionMatchSetCommandError
 */
const de_GetSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFUnavailableEntityException":
    case "com.amazonaws.wafregional#WAFUnavailableEntityException":
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
 * deserializeAws_json1_1GetXssMatchSetCommand
 */
export const de_GetXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetXssMatchSetResponse(data, context);
  const response: GetXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetXssMatchSetCommandError
 */
const de_GetXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand
 */
export const de_ListActivatedRulesInRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivatedRulesInRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListActivatedRulesInRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListActivatedRulesInRuleGroupResponse(data, context);
  const response: ListActivatedRulesInRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError
 */
const de_ListActivatedRulesInRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivatedRulesInRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1ListByteMatchSetsCommand
 */
export const de_ListByteMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByteMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListByteMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListByteMatchSetsResponse(data, context);
  const response: ListByteMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListByteMatchSetsCommandError
 */
const de_ListByteMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByteMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListGeoMatchSetsCommand
 */
export const de_ListGeoMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGeoMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGeoMatchSetsResponse(data, context);
  const response: ListGeoMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGeoMatchSetsCommandError
 */
const de_ListGeoMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeoMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
 * deserializeAws_json1_1ListRateBasedRulesCommand
 */
export const de_ListRateBasedRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRateBasedRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRateBasedRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRateBasedRulesResponse(data, context);
  const response: ListRateBasedRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRateBasedRulesCommandError
 */
const de_ListRateBasedRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRateBasedRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRegexMatchSetsCommand
 */
export const de_ListRegexMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRegexMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRegexMatchSetsResponse(data, context);
  const response: ListRegexMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRegexMatchSetsCommandError
 */
const de_ListRegexMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegexMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRulesCommandError
 */
const de_ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSizeConstraintSetsCommand
 */
export const de_ListSizeConstraintSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSizeConstraintSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSizeConstraintSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSizeConstraintSetsResponse(data, context);
  const response: ListSizeConstraintSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSizeConstraintSetsCommandError
 */
const de_ListSizeConstraintSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSizeConstraintSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSqlInjectionMatchSetsCommand
 */
export const de_ListSqlInjectionMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSqlInjectionMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSqlInjectionMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSqlInjectionMatchSetsResponse(data, context);
  const response: ListSqlInjectionMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError
 */
const de_ListSqlInjectionMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSqlInjectionMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSubscribedRuleGroupsCommand
 */
export const de_ListSubscribedRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSubscribedRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSubscribedRuleGroupsResponse(data, context);
  const response: ListSubscribedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSubscribedRuleGroupsCommandError
 */
const de_ListSubscribedRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListXssMatchSetsCommand
 */
export const de_ListXssMatchSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListXssMatchSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListXssMatchSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListXssMatchSetsResponse(data, context);
  const response: ListXssMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListXssMatchSetsCommandError
 */
const de_ListXssMatchSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListXssMatchSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFServiceLinkedRoleErrorException":
    case "com.amazonaws.wafregional#WAFServiceLinkedRoleErrorException":
      throw await de_WAFServiceLinkedRoleErrorExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidPermissionPolicyException":
    case "com.amazonaws.wafregional#WAFInvalidPermissionPolicyException":
      throw await de_WAFInvalidPermissionPolicyExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
    case "WAFBadRequestException":
    case "com.amazonaws.wafregional#WAFBadRequestException":
      throw await de_WAFBadRequestExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFTagOperationException":
    case "com.amazonaws.wafregional#WAFTagOperationException":
      throw await de_WAFTagOperationExceptionRes(parsedOutput, context);
    case "WAFTagOperationInternalErrorException":
    case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
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
 * deserializeAws_json1_1UpdateByteMatchSetCommand
 */
export const de_UpdateByteMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateByteMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateByteMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateByteMatchSetResponse(data, context);
  const response: UpdateByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateByteMatchSetCommandError
 */
const de_UpdateByteMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateByteMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateGeoMatchSetCommand
 */
export const de_UpdateGeoMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeoMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGeoMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGeoMatchSetResponse(data, context);
  const response: UpdateGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGeoMatchSetCommandError
 */
const de_UpdateGeoMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeoMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRateBasedRuleCommand
 */
export const de_UpdateRateBasedRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRateBasedRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRateBasedRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRateBasedRuleResponse(data, context);
  const response: UpdateRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRateBasedRuleCommandError
 */
const de_UpdateRateBasedRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRateBasedRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRegexMatchSetCommand
 */
export const de_UpdateRegexMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRegexMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRegexMatchSetResponse(data, context);
  const response: UpdateRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRegexMatchSetCommandError
 */
const de_UpdateRegexMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegexMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFDisallowedNameException":
    case "com.amazonaws.wafregional#WAFDisallowedNameException":
      throw await de_WAFDisallowedNameExceptionRes(parsedOutput, context);
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidRegexPatternException":
    case "com.amazonaws.wafregional#WAFInvalidRegexPatternException":
      throw await de_WAFInvalidRegexPatternExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRuleCommand
 */
export const de_UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRuleResponse(data, context);
  const response: UpdateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRuleCommandError
 */
const de_UpdateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSizeConstraintSetCommand
 */
export const de_UpdateSizeConstraintSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSizeConstraintSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSizeConstraintSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSizeConstraintSetResponse(data, context);
  const response: UpdateSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSizeConstraintSetCommandError
 */
const de_UpdateSizeConstraintSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSizeConstraintSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand
 */
export const de_UpdateSqlInjectionMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSqlInjectionMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSqlInjectionMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSqlInjectionMatchSetResponse(data, context);
  const response: UpdateSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError
 */
const de_UpdateSqlInjectionMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSqlInjectionMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFReferencedItemException":
    case "com.amazonaws.wafregional#WAFReferencedItemException":
      throw await de_WAFReferencedItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
    case "WAFSubscriptionNotFoundException":
    case "com.amazonaws.wafregional#WAFSubscriptionNotFoundException":
      throw await de_WAFSubscriptionNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateXssMatchSetCommand
 */
export const de_UpdateXssMatchSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateXssMatchSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateXssMatchSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateXssMatchSetResponse(data, context);
  const response: UpdateXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateXssMatchSetCommandError
 */
const de_UpdateXssMatchSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateXssMatchSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "WAFInternalErrorException":
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
    case "WAFInvalidOperationException":
    case "com.amazonaws.wafregional#WAFInvalidOperationException":
      throw await de_WAFInvalidOperationExceptionRes(parsedOutput, context);
    case "WAFInvalidParameterException":
    case "com.amazonaws.wafregional#WAFInvalidParameterException":
      throw await de_WAFInvalidParameterExceptionRes(parsedOutput, context);
    case "WAFLimitsExceededException":
    case "com.amazonaws.wafregional#WAFLimitsExceededException":
      throw await de_WAFLimitsExceededExceptionRes(parsedOutput, context);
    case "WAFNonexistentContainerException":
    case "com.amazonaws.wafregional#WAFNonexistentContainerException":
      throw await de_WAFNonexistentContainerExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
      throw await de_WAFNonexistentItemExceptionRes(parsedOutput, context);
    case "WAFStaleDataException":
    case "com.amazonaws.wafregional#WAFStaleDataException":
      throw await de_WAFStaleDataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1WAFBadRequestExceptionRes
 */
const de_WAFBadRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFBadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFBadRequestException(body, context);
  const exception = new WAFBadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFDisallowedNameExceptionRes
 */
const de_WAFDisallowedNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFDisallowedNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFDisallowedNameException(body, context);
  const exception = new WAFDisallowedNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFEntityMigrationExceptionRes
 */
const de_WAFEntityMigrationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFEntityMigrationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFEntityMigrationException(body, context);
  const exception = new WAFEntityMigrationException({
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
 * deserializeAws_json1_1WAFInvalidAccountExceptionRes
 */
const de_WAFInvalidAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInvalidAccountException(body, context);
  const exception = new WAFInvalidAccountException({
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
 * deserializeAws_json1_1WAFInvalidRegexPatternExceptionRes
 */
const de_WAFInvalidRegexPatternExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidRegexPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFInvalidRegexPatternException(body, context);
  const exception = new WAFInvalidRegexPatternException({
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
 * deserializeAws_json1_1WAFNonEmptyEntityExceptionRes
 */
const de_WAFNonEmptyEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonEmptyEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFNonEmptyEntityException(body, context);
  const exception = new WAFNonEmptyEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WAFNonexistentContainerExceptionRes
 */
const de_WAFNonexistentContainerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFNonexistentContainerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFNonexistentContainerException(body, context);
  const exception = new WAFNonexistentContainerException({
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
 * deserializeAws_json1_1WAFReferencedItemExceptionRes
 */
const de_WAFReferencedItemExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFReferencedItemException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFReferencedItemException(body, context);
  const exception = new WAFReferencedItemException({
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
 * deserializeAws_json1_1WAFStaleDataExceptionRes
 */
const de_WAFStaleDataExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFStaleDataException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WAFStaleDataException(body, context);
  const exception = new WAFStaleDataException({
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
 * serializeAws_json1_1ActivatedRule
 */
const se_ActivatedRule = (input: ActivatedRule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: se_WafAction(input.Action, context) }),
    ...(input.ExcludedRules != null && { ExcludedRules: se_ExcludedRules(input.ExcludedRules, context) }),
    ...(input.OverrideAction != null && { OverrideAction: se_WafOverrideAction(input.OverrideAction, context) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1AssociateWebACLRequest
 */
const se_AssociateWebACLRequest = (input: AssociateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
  };
};

/**
 * serializeAws_json1_1ByteMatchSetUpdate
 */
const se_ByteMatchSetUpdate = (input: ByteMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.ByteMatchTuple != null && { ByteMatchTuple: se_ByteMatchTuple(input.ByteMatchTuple, context) }),
  };
};

/**
 * serializeAws_json1_1ByteMatchSetUpdates
 */
const se_ByteMatchSetUpdates = (input: ByteMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ByteMatchSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1ByteMatchTuple
 */
const se_ByteMatchTuple = (input: ByteMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.PositionalConstraint != null && { PositionalConstraint: input.PositionalConstraint }),
    ...(input.TargetString != null && { TargetString: context.base64Encoder(input.TargetString) }),
    ...(input.TextTransformation != null && { TextTransformation: input.TextTransformation }),
  };
};

/**
 * serializeAws_json1_1CreateByteMatchSetRequest
 */
const se_CreateByteMatchSetRequest = (input: CreateByteMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateGeoMatchSetRequest
 */
const se_CreateGeoMatchSetRequest = (input: CreateGeoMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateIPSetRequest
 */
const se_CreateIPSetRequest = (input: CreateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateRateBasedRuleRequest
 */
const se_CreateRateBasedRuleRequest = (input: CreateRateBasedRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RateKey != null && { RateKey: input.RateKey }),
    ...(input.RateLimit != null && { RateLimit: input.RateLimit }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRegexMatchSetRequest
 */
const se_CreateRegexMatchSetRequest = (input: CreateRegexMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateRegexPatternSetRequest
 */
const se_CreateRegexPatternSetRequest = (input: CreateRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateRuleGroupRequest
 */
const se_CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRuleRequest
 */
const se_CreateRuleRequest = (input: CreateRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSizeConstraintSetRequest
 */
const se_CreateSizeConstraintSetRequest = (input: CreateSizeConstraintSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateSqlInjectionMatchSetRequest
 */
const se_CreateSqlInjectionMatchSetRequest = (
  input: CreateSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateWebACLMigrationStackRequest
 */
const se_CreateWebACLMigrationStackRequest = (
  input: CreateWebACLMigrationStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IgnoreUnsupportedType != null && { IgnoreUnsupportedType: input.IgnoreUnsupportedType }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
  };
};

/**
 * serializeAws_json1_1CreateWebACLRequest
 */
const se_CreateWebACLRequest = (input: CreateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.DefaultAction != null && { DefaultAction: se_WafAction(input.DefaultAction, context) }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateXssMatchSetRequest
 */
const se_CreateXssMatchSetRequest = (input: CreateXssMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteByteMatchSetRequest
 */
const se_DeleteByteMatchSetRequest = (input: DeleteByteMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ByteMatchSetId != null && { ByteMatchSetId: input.ByteMatchSetId }),
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
  };
};

/**
 * serializeAws_json1_1DeleteGeoMatchSetRequest
 */
const se_DeleteGeoMatchSetRequest = (input: DeleteGeoMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.GeoMatchSetId != null && { GeoMatchSetId: input.GeoMatchSetId }),
  };
};

/**
 * serializeAws_json1_1DeleteIPSetRequest
 */
const se_DeleteIPSetRequest = (input: DeleteIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.IPSetId != null && { IPSetId: input.IPSetId }),
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
 * serializeAws_json1_1DeleteRateBasedRuleRequest
 */
const se_DeleteRateBasedRuleRequest = (input: DeleteRateBasedRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

/**
 * serializeAws_json1_1DeleteRegexMatchSetRequest
 */
const se_DeleteRegexMatchSetRequest = (input: DeleteRegexMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexMatchSetId != null && { RegexMatchSetId: input.RegexMatchSetId }),
  };
};

/**
 * serializeAws_json1_1DeleteRegexPatternSetRequest
 */
const se_DeleteRegexPatternSetRequest = (input: DeleteRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexPatternSetId != null && { RegexPatternSetId: input.RegexPatternSetId }),
  };
};

/**
 * serializeAws_json1_1DeleteRuleGroupRequest
 */
const se_DeleteRuleGroupRequest = (input: DeleteRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
  };
};

/**
 * serializeAws_json1_1DeleteRuleRequest
 */
const se_DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

/**
 * serializeAws_json1_1DeleteSizeConstraintSetRequest
 */
const se_DeleteSizeConstraintSetRequest = (input: DeleteSizeConstraintSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.SizeConstraintSetId != null && { SizeConstraintSetId: input.SizeConstraintSetId }),
  };
};

/**
 * serializeAws_json1_1DeleteSqlInjectionMatchSetRequest
 */
const se_DeleteSqlInjectionMatchSetRequest = (
  input: DeleteSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.SqlInjectionMatchSetId != null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
  };
};

/**
 * serializeAws_json1_1DeleteWebACLRequest
 */
const se_DeleteWebACLRequest = (input: DeleteWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
  };
};

/**
 * serializeAws_json1_1DeleteXssMatchSetRequest
 */
const se_DeleteXssMatchSetRequest = (input: DeleteXssMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.XssMatchSetId != null && { XssMatchSetId: input.XssMatchSetId }),
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
    ...(input.RuleId != null && { RuleId: input.RuleId }),
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
    ...(input.Data != null && { Data: input.Data }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1GeoMatchConstraint
 */
const se_GeoMatchConstraint = (input: GeoMatchConstraint, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1GeoMatchSetUpdate
 */
const se_GeoMatchSetUpdate = (input: GeoMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.GeoMatchConstraint != null && {
      GeoMatchConstraint: se_GeoMatchConstraint(input.GeoMatchConstraint, context),
    }),
  };
};

/**
 * serializeAws_json1_1GeoMatchSetUpdates
 */
const se_GeoMatchSetUpdates = (input: GeoMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GeoMatchSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1GetByteMatchSetRequest
 */
const se_GetByteMatchSetRequest = (input: GetByteMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ByteMatchSetId != null && { ByteMatchSetId: input.ByteMatchSetId }),
  };
};

/**
 * serializeAws_json1_1GetChangeTokenRequest
 */
const se_GetChangeTokenRequest = (input: GetChangeTokenRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetChangeTokenStatusRequest
 */
const se_GetChangeTokenStatusRequest = (input: GetChangeTokenStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
  };
};

/**
 * serializeAws_json1_1GetGeoMatchSetRequest
 */
const se_GetGeoMatchSetRequest = (input: GetGeoMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.GeoMatchSetId != null && { GeoMatchSetId: input.GeoMatchSetId }),
  };
};

/**
 * serializeAws_json1_1GetIPSetRequest
 */
const se_GetIPSetRequest = (input: GetIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.IPSetId != null && { IPSetId: input.IPSetId }),
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
 * serializeAws_json1_1GetPermissionPolicyRequest
 */
const se_GetPermissionPolicyRequest = (input: GetPermissionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1GetRateBasedRuleManagedKeysRequest
 */
const se_GetRateBasedRuleManagedKeysRequest = (
  input: GetRateBasedRuleManagedKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

/**
 * serializeAws_json1_1GetRateBasedRuleRequest
 */
const se_GetRateBasedRuleRequest = (input: GetRateBasedRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

/**
 * serializeAws_json1_1GetRegexMatchSetRequest
 */
const se_GetRegexMatchSetRequest = (input: GetRegexMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.RegexMatchSetId != null && { RegexMatchSetId: input.RegexMatchSetId }),
  };
};

/**
 * serializeAws_json1_1GetRegexPatternSetRequest
 */
const se_GetRegexPatternSetRequest = (input: GetRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.RegexPatternSetId != null && { RegexPatternSetId: input.RegexPatternSetId }),
  };
};

/**
 * serializeAws_json1_1GetRuleGroupRequest
 */
const se_GetRuleGroupRequest = (input: GetRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
  };
};

/**
 * serializeAws_json1_1GetRuleRequest
 */
const se_GetRuleRequest = (input: GetRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

/**
 * serializeAws_json1_1GetSampledRequestsRequest
 */
const se_GetSampledRequestsRequest = (input: GetSampledRequestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.TimeWindow != null && { TimeWindow: se_TimeWindow(input.TimeWindow, context) }),
    ...(input.WebAclId != null && { WebAclId: input.WebAclId }),
  };
};

/**
 * serializeAws_json1_1GetSizeConstraintSetRequest
 */
const se_GetSizeConstraintSetRequest = (input: GetSizeConstraintSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.SizeConstraintSetId != null && { SizeConstraintSetId: input.SizeConstraintSetId }),
  };
};

/**
 * serializeAws_json1_1GetSqlInjectionMatchSetRequest
 */
const se_GetSqlInjectionMatchSetRequest = (input: GetSqlInjectionMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.SqlInjectionMatchSetId != null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
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
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
  };
};

/**
 * serializeAws_json1_1GetXssMatchSetRequest
 */
const se_GetXssMatchSetRequest = (input: GetXssMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.XssMatchSetId != null && { XssMatchSetId: input.XssMatchSetId }),
  };
};

/**
 * serializeAws_json1_1IPSetDescriptor
 */
const se_IPSetDescriptor = (input: IPSetDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1IPSetUpdate
 */
const se_IPSetUpdate = (input: IPSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.IPSetDescriptor != null && { IPSetDescriptor: se_IPSetDescriptor(input.IPSetDescriptor, context) }),
  };
};

/**
 * serializeAws_json1_1IPSetUpdates
 */
const se_IPSetUpdates = (input: IPSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IPSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1ListActivatedRulesInRuleGroupRequest
 */
const se_ListActivatedRulesInRuleGroupRequest = (
  input: ListActivatedRulesInRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
  };
};

/**
 * serializeAws_json1_1ListByteMatchSetsRequest
 */
const se_ListByteMatchSetsRequest = (input: ListByteMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListGeoMatchSetsRequest
 */
const se_ListGeoMatchSetsRequest = (input: ListGeoMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListIPSetsRequest
 */
const se_ListIPSetsRequest = (input: ListIPSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListLoggingConfigurationsRequest
 */
const se_ListLoggingConfigurationsRequest = (input: ListLoggingConfigurationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListRateBasedRulesRequest
 */
const se_ListRateBasedRulesRequest = (input: ListRateBasedRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListRegexMatchSetsRequest
 */
const se_ListRegexMatchSetsRequest = (input: ListRegexMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListRegexPatternSetsRequest
 */
const se_ListRegexPatternSetsRequest = (input: ListRegexPatternSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListResourcesForWebACLRequest
 */
const se_ListResourcesForWebACLRequest = (input: ListResourcesForWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
  };
};

/**
 * serializeAws_json1_1ListRuleGroupsRequest
 */
const se_ListRuleGroupsRequest = (input: ListRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListRulesRequest
 */
const se_ListRulesRequest = (input: ListRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListSizeConstraintSetsRequest
 */
const se_ListSizeConstraintSetsRequest = (input: ListSizeConstraintSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListSqlInjectionMatchSetsRequest
 */
const se_ListSqlInjectionMatchSetsRequest = (input: ListSqlInjectionMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
  };
};

/**
 * serializeAws_json1_1ListSubscribedRuleGroupsRequest
 */
const se_ListSubscribedRuleGroupsRequest = (input: ListSubscribedRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
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
  };
};

/**
 * serializeAws_json1_1ListXssMatchSetsRequest
 */
const se_ListXssMatchSetsRequest = (input: ListXssMatchSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextMarker != null && { NextMarker: input.NextMarker }),
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
    ...(input.RedactedFields != null && { RedactedFields: se_RedactedFields(input.RedactedFields, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1Predicate
 */
const se_Predicate = (input: Predicate, context: __SerdeContext): any => {
  return {
    ...(input.DataId != null && { DataId: input.DataId }),
    ...(input.Negated != null && { Negated: input.Negated }),
    ...(input.Type != null && { Type: input.Type }),
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
 * serializeAws_json1_1PutPermissionPolicyRequest
 */
const se_PutPermissionPolicyRequest = (input: PutPermissionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
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
 * serializeAws_json1_1RegexMatchSetUpdate
 */
const se_RegexMatchSetUpdate = (input: RegexMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.RegexMatchTuple != null && { RegexMatchTuple: se_RegexMatchTuple(input.RegexMatchTuple, context) }),
  };
};

/**
 * serializeAws_json1_1RegexMatchSetUpdates
 */
const se_RegexMatchSetUpdates = (input: RegexMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RegexMatchSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1RegexMatchTuple
 */
const se_RegexMatchTuple = (input: RegexMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.RegexPatternSetId != null && { RegexPatternSetId: input.RegexPatternSetId }),
    ...(input.TextTransformation != null && { TextTransformation: input.TextTransformation }),
  };
};

/**
 * serializeAws_json1_1RegexPatternSetUpdate
 */
const se_RegexPatternSetUpdate = (input: RegexPatternSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.RegexPatternString != null && { RegexPatternString: input.RegexPatternString }),
  };
};

/**
 * serializeAws_json1_1RegexPatternSetUpdates
 */
const se_RegexPatternSetUpdates = (input: RegexPatternSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RegexPatternSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1RuleGroupUpdate
 */
const se_RuleGroupUpdate = (input: RuleGroupUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.ActivatedRule != null && { ActivatedRule: se_ActivatedRule(input.ActivatedRule, context) }),
  };
};

/**
 * serializeAws_json1_1RuleGroupUpdates
 */
const se_RuleGroupUpdates = (input: RuleGroupUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuleGroupUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1RuleUpdate
 */
const se_RuleUpdate = (input: RuleUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Predicate != null && { Predicate: se_Predicate(input.Predicate, context) }),
  };
};

/**
 * serializeAws_json1_1RuleUpdates
 */
const se_RuleUpdates = (input: RuleUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuleUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1SizeConstraint
 */
const se_SizeConstraint = (input: SizeConstraint, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.TextTransformation != null && { TextTransformation: input.TextTransformation }),
  };
};

/**
 * serializeAws_json1_1SizeConstraintSetUpdate
 */
const se_SizeConstraintSetUpdate = (input: SizeConstraintSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.SizeConstraint != null && { SizeConstraint: se_SizeConstraint(input.SizeConstraint, context) }),
  };
};

/**
 * serializeAws_json1_1SizeConstraintSetUpdates
 */
const se_SizeConstraintSetUpdates = (input: SizeConstraintSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SizeConstraintSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1SqlInjectionMatchSetUpdate
 */
const se_SqlInjectionMatchSetUpdate = (input: SqlInjectionMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.SqlInjectionMatchTuple != null && {
      SqlInjectionMatchTuple: se_SqlInjectionMatchTuple(input.SqlInjectionMatchTuple, context),
    }),
  };
};

/**
 * serializeAws_json1_1SqlInjectionMatchSetUpdates
 */
const se_SqlInjectionMatchSetUpdates = (input: SqlInjectionMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SqlInjectionMatchSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1SqlInjectionMatchTuple
 */
const se_SqlInjectionMatchTuple = (input: SqlInjectionMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformation != null && { TextTransformation: input.TextTransformation }),
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
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
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
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateByteMatchSetRequest
 */
const se_UpdateByteMatchSetRequest = (input: UpdateByteMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ByteMatchSetId != null && { ByteMatchSetId: input.ByteMatchSetId }),
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Updates != null && { Updates: se_ByteMatchSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateGeoMatchSetRequest
 */
const se_UpdateGeoMatchSetRequest = (input: UpdateGeoMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.GeoMatchSetId != null && { GeoMatchSetId: input.GeoMatchSetId }),
    ...(input.Updates != null && { Updates: se_GeoMatchSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateIPSetRequest
 */
const se_UpdateIPSetRequest = (input: UpdateIPSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.IPSetId != null && { IPSetId: input.IPSetId }),
    ...(input.Updates != null && { Updates: se_IPSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRateBasedRuleRequest
 */
const se_UpdateRateBasedRuleRequest = (input: UpdateRateBasedRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RateLimit != null && { RateLimit: input.RateLimit }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Updates != null && { Updates: se_RuleUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRegexMatchSetRequest
 */
const se_UpdateRegexMatchSetRequest = (input: UpdateRegexMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexMatchSetId != null && { RegexMatchSetId: input.RegexMatchSetId }),
    ...(input.Updates != null && { Updates: se_RegexMatchSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRegexPatternSetRequest
 */
const se_UpdateRegexPatternSetRequest = (input: UpdateRegexPatternSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RegexPatternSetId != null && { RegexPatternSetId: input.RegexPatternSetId }),
    ...(input.Updates != null && { Updates: se_RegexPatternSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRuleGroupRequest
 */
const se_UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
    ...(input.Updates != null && { Updates: se_RuleGroupUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRuleRequest
 */
const se_UpdateRuleRequest = (input: UpdateRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Updates != null && { Updates: se_RuleUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSizeConstraintSetRequest
 */
const se_UpdateSizeConstraintSetRequest = (input: UpdateSizeConstraintSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.SizeConstraintSetId != null && { SizeConstraintSetId: input.SizeConstraintSetId }),
    ...(input.Updates != null && { Updates: se_SizeConstraintSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSqlInjectionMatchSetRequest
 */
const se_UpdateSqlInjectionMatchSetRequest = (
  input: UpdateSqlInjectionMatchSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.SqlInjectionMatchSetId != null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
    ...(input.Updates != null && { Updates: se_SqlInjectionMatchSetUpdates(input.Updates, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateWebACLRequest
 */
const se_UpdateWebACLRequest = (input: UpdateWebACLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.DefaultAction != null && { DefaultAction: se_WafAction(input.DefaultAction, context) }),
    ...(input.Updates != null && { Updates: se_WebACLUpdates(input.Updates, context) }),
    ...(input.WebACLId != null && { WebACLId: input.WebACLId }),
  };
};

/**
 * serializeAws_json1_1UpdateXssMatchSetRequest
 */
const se_UpdateXssMatchSetRequest = (input: UpdateXssMatchSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChangeToken != null && { ChangeToken: input.ChangeToken }),
    ...(input.Updates != null && { Updates: se_XssMatchSetUpdates(input.Updates, context) }),
    ...(input.XssMatchSetId != null && { XssMatchSetId: input.XssMatchSetId }),
  };
};

/**
 * serializeAws_json1_1WafAction
 */
const se_WafAction = (input: WafAction, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1WafOverrideAction
 */
const se_WafOverrideAction = (input: WafOverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1WebACLUpdate
 */
const se_WebACLUpdate = (input: WebACLUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.ActivatedRule != null && { ActivatedRule: se_ActivatedRule(input.ActivatedRule, context) }),
  };
};

/**
 * serializeAws_json1_1WebACLUpdates
 */
const se_WebACLUpdates = (input: WebACLUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WebACLUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1XssMatchSetUpdate
 */
const se_XssMatchSetUpdate = (input: XssMatchSetUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.XssMatchTuple != null && { XssMatchTuple: se_XssMatchTuple(input.XssMatchTuple, context) }),
  };
};

/**
 * serializeAws_json1_1XssMatchSetUpdates
 */
const se_XssMatchSetUpdates = (input: XssMatchSetUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_XssMatchSetUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1XssMatchTuple
 */
const se_XssMatchTuple = (input: XssMatchTuple, context: __SerdeContext): any => {
  return {
    ...(input.FieldToMatch != null && { FieldToMatch: se_FieldToMatch(input.FieldToMatch, context) }),
    ...(input.TextTransformation != null && { TextTransformation: input.TextTransformation }),
  };
};

/**
 * deserializeAws_json1_1ActivatedRule
 */
const de_ActivatedRule = (output: any, context: __SerdeContext): ActivatedRule => {
  return {
    Action: output.Action != null ? de_WafAction(output.Action, context) : undefined,
    ExcludedRules: output.ExcludedRules != null ? de_ExcludedRules(output.ExcludedRules, context) : undefined,
    OverrideAction: output.OverrideAction != null ? de_WafOverrideAction(output.OverrideAction, context) : undefined,
    Priority: __expectInt32(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ActivatedRules
 */
const de_ActivatedRules = (output: any, context: __SerdeContext): ActivatedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActivatedRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateWebACLResponse
 */
const de_AssociateWebACLResponse = (output: any, context: __SerdeContext): AssociateWebACLResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ByteMatchSet
 */
const de_ByteMatchSet = (output: any, context: __SerdeContext): ByteMatchSet => {
  return {
    ByteMatchSetId: __expectString(output.ByteMatchSetId),
    ByteMatchTuples: output.ByteMatchTuples != null ? de_ByteMatchTuples(output.ByteMatchTuples, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ByteMatchSetSummaries
 */
const de_ByteMatchSetSummaries = (output: any, context: __SerdeContext): ByteMatchSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ByteMatchSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ByteMatchSetSummary
 */
const de_ByteMatchSetSummary = (output: any, context: __SerdeContext): ByteMatchSetSummary => {
  return {
    ByteMatchSetId: __expectString(output.ByteMatchSetId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ByteMatchTuple
 */
const de_ByteMatchTuple = (output: any, context: __SerdeContext): ByteMatchTuple => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    PositionalConstraint: __expectString(output.PositionalConstraint),
    TargetString: output.TargetString != null ? context.base64Decoder(output.TargetString) : undefined,
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

/**
 * deserializeAws_json1_1ByteMatchTuples
 */
const de_ByteMatchTuples = (output: any, context: __SerdeContext): ByteMatchTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ByteMatchTuple(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateByteMatchSetResponse
 */
const de_CreateByteMatchSetResponse = (output: any, context: __SerdeContext): CreateByteMatchSetResponse => {
  return {
    ByteMatchSet: output.ByteMatchSet != null ? de_ByteMatchSet(output.ByteMatchSet, context) : undefined,
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGeoMatchSetResponse
 */
const de_CreateGeoMatchSetResponse = (output: any, context: __SerdeContext): CreateGeoMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    GeoMatchSet: output.GeoMatchSet != null ? de_GeoMatchSet(output.GeoMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateIPSetResponse
 */
const de_CreateIPSetResponse = (output: any, context: __SerdeContext): CreateIPSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    IPSet: output.IPSet != null ? de_IPSet(output.IPSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRateBasedRuleResponse
 */
const de_CreateRateBasedRuleResponse = (output: any, context: __SerdeContext): CreateRateBasedRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    Rule: output.Rule != null ? de_RateBasedRule(output.Rule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRegexMatchSetResponse
 */
const de_CreateRegexMatchSetResponse = (output: any, context: __SerdeContext): CreateRegexMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    RegexMatchSet: output.RegexMatchSet != null ? de_RegexMatchSet(output.RegexMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRegexPatternSetResponse
 */
const de_CreateRegexPatternSetResponse = (output: any, context: __SerdeContext): CreateRegexPatternSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    RegexPatternSet: output.RegexPatternSet != null ? de_RegexPatternSet(output.RegexPatternSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRuleGroupResponse
 */
const de_CreateRuleGroupResponse = (output: any, context: __SerdeContext): CreateRuleGroupResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    RuleGroup: output.RuleGroup != null ? de_RuleGroup(output.RuleGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRuleResponse
 */
const de_CreateRuleResponse = (output: any, context: __SerdeContext): CreateRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    Rule: output.Rule != null ? de_Rule(output.Rule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSizeConstraintSetResponse
 */
const de_CreateSizeConstraintSetResponse = (output: any, context: __SerdeContext): CreateSizeConstraintSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    SizeConstraintSet:
      output.SizeConstraintSet != null ? de_SizeConstraintSet(output.SizeConstraintSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSqlInjectionMatchSetResponse
 */
const de_CreateSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): CreateSqlInjectionMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    SqlInjectionMatchSet:
      output.SqlInjectionMatchSet != null ? de_SqlInjectionMatchSet(output.SqlInjectionMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateWebACLMigrationStackResponse
 */
const de_CreateWebACLMigrationStackResponse = (
  output: any,
  context: __SerdeContext
): CreateWebACLMigrationStackResponse => {
  return {
    S3ObjectUrl: __expectString(output.S3ObjectUrl),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWebACLResponse
 */
const de_CreateWebACLResponse = (output: any, context: __SerdeContext): CreateWebACLResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    WebACL: output.WebACL != null ? de_WebACL(output.WebACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateXssMatchSetResponse
 */
const de_CreateXssMatchSetResponse = (output: any, context: __SerdeContext): CreateXssMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
    XssMatchSet: output.XssMatchSet != null ? de_XssMatchSet(output.XssMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteByteMatchSetResponse
 */
const de_DeleteByteMatchSetResponse = (output: any, context: __SerdeContext): DeleteByteMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGeoMatchSetResponse
 */
const de_DeleteGeoMatchSetResponse = (output: any, context: __SerdeContext): DeleteGeoMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteIPSetResponse
 */
const de_DeleteIPSetResponse = (output: any, context: __SerdeContext): DeleteIPSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
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
 * deserializeAws_json1_1DeleteRateBasedRuleResponse
 */
const de_DeleteRateBasedRuleResponse = (output: any, context: __SerdeContext): DeleteRateBasedRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRegexMatchSetResponse
 */
const de_DeleteRegexMatchSetResponse = (output: any, context: __SerdeContext): DeleteRegexMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRegexPatternSetResponse
 */
const de_DeleteRegexPatternSetResponse = (output: any, context: __SerdeContext): DeleteRegexPatternSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRuleGroupResponse
 */
const de_DeleteRuleGroupResponse = (output: any, context: __SerdeContext): DeleteRuleGroupResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRuleResponse
 */
const de_DeleteRuleResponse = (output: any, context: __SerdeContext): DeleteRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSizeConstraintSetResponse
 */
const de_DeleteSizeConstraintSetResponse = (output: any, context: __SerdeContext): DeleteSizeConstraintSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse
 */
const de_DeleteSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteSqlInjectionMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteWebACLResponse
 */
const de_DeleteWebACLResponse = (output: any, context: __SerdeContext): DeleteWebACLResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteXssMatchSetResponse
 */
const de_DeleteXssMatchSetResponse = (output: any, context: __SerdeContext): DeleteXssMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
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
    RuleId: __expectString(output.RuleId),
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
    Data: __expectString(output.Data),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GeoMatchConstraint
 */
const de_GeoMatchConstraint = (output: any, context: __SerdeContext): GeoMatchConstraint => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1GeoMatchConstraints
 */
const de_GeoMatchConstraints = (output: any, context: __SerdeContext): GeoMatchConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GeoMatchConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GeoMatchSet
 */
const de_GeoMatchSet = (output: any, context: __SerdeContext): GeoMatchSet => {
  return {
    GeoMatchConstraints:
      output.GeoMatchConstraints != null ? de_GeoMatchConstraints(output.GeoMatchConstraints, context) : undefined,
    GeoMatchSetId: __expectString(output.GeoMatchSetId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1GeoMatchSetSummaries
 */
const de_GeoMatchSetSummaries = (output: any, context: __SerdeContext): GeoMatchSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GeoMatchSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GeoMatchSetSummary
 */
const de_GeoMatchSetSummary = (output: any, context: __SerdeContext): GeoMatchSetSummary => {
  return {
    GeoMatchSetId: __expectString(output.GeoMatchSetId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1GetByteMatchSetResponse
 */
const de_GetByteMatchSetResponse = (output: any, context: __SerdeContext): GetByteMatchSetResponse => {
  return {
    ByteMatchSet: output.ByteMatchSet != null ? de_ByteMatchSet(output.ByteMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetChangeTokenResponse
 */
const de_GetChangeTokenResponse = (output: any, context: __SerdeContext): GetChangeTokenResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetChangeTokenStatusResponse
 */
const de_GetChangeTokenStatusResponse = (output: any, context: __SerdeContext): GetChangeTokenStatusResponse => {
  return {
    ChangeTokenStatus: __expectString(output.ChangeTokenStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetGeoMatchSetResponse
 */
const de_GetGeoMatchSetResponse = (output: any, context: __SerdeContext): GetGeoMatchSetResponse => {
  return {
    GeoMatchSet: output.GeoMatchSet != null ? de_GeoMatchSet(output.GeoMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetIPSetResponse
 */
const de_GetIPSetResponse = (output: any, context: __SerdeContext): GetIPSetResponse => {
  return {
    IPSet: output.IPSet != null ? de_IPSet(output.IPSet, context) : undefined,
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
 * deserializeAws_json1_1GetPermissionPolicyResponse
 */
const de_GetPermissionPolicyResponse = (output: any, context: __SerdeContext): GetPermissionPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse
 */
const de_GetRateBasedRuleManagedKeysResponse = (
  output: any,
  context: __SerdeContext
): GetRateBasedRuleManagedKeysResponse => {
  return {
    ManagedKeys: output.ManagedKeys != null ? de_ManagedKeys(output.ManagedKeys, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1GetRateBasedRuleResponse
 */
const de_GetRateBasedRuleResponse = (output: any, context: __SerdeContext): GetRateBasedRuleResponse => {
  return {
    Rule: output.Rule != null ? de_RateBasedRule(output.Rule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRegexMatchSetResponse
 */
const de_GetRegexMatchSetResponse = (output: any, context: __SerdeContext): GetRegexMatchSetResponse => {
  return {
    RegexMatchSet: output.RegexMatchSet != null ? de_RegexMatchSet(output.RegexMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRegexPatternSetResponse
 */
const de_GetRegexPatternSetResponse = (output: any, context: __SerdeContext): GetRegexPatternSetResponse => {
  return {
    RegexPatternSet: output.RegexPatternSet != null ? de_RegexPatternSet(output.RegexPatternSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRuleGroupResponse
 */
const de_GetRuleGroupResponse = (output: any, context: __SerdeContext): GetRuleGroupResponse => {
  return {
    RuleGroup: output.RuleGroup != null ? de_RuleGroup(output.RuleGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRuleResponse
 */
const de_GetRuleResponse = (output: any, context: __SerdeContext): GetRuleResponse => {
  return {
    Rule: output.Rule != null ? de_Rule(output.Rule, context) : undefined,
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
 * deserializeAws_json1_1GetSizeConstraintSetResponse
 */
const de_GetSizeConstraintSetResponse = (output: any, context: __SerdeContext): GetSizeConstraintSetResponse => {
  return {
    SizeConstraintSet:
      output.SizeConstraintSet != null ? de_SizeConstraintSet(output.SizeConstraintSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSqlInjectionMatchSetResponse
 */
const de_GetSqlInjectionMatchSetResponse = (output: any, context: __SerdeContext): GetSqlInjectionMatchSetResponse => {
  return {
    SqlInjectionMatchSet:
      output.SqlInjectionMatchSet != null ? de_SqlInjectionMatchSet(output.SqlInjectionMatchSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetWebACLForResourceResponse
 */
const de_GetWebACLForResourceResponse = (output: any, context: __SerdeContext): GetWebACLForResourceResponse => {
  return {
    WebACLSummary: output.WebACLSummary != null ? de_WebACLSummary(output.WebACLSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetWebACLResponse
 */
const de_GetWebACLResponse = (output: any, context: __SerdeContext): GetWebACLResponse => {
  return {
    WebACL: output.WebACL != null ? de_WebACL(output.WebACL, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetXssMatchSetResponse
 */
const de_GetXssMatchSetResponse = (output: any, context: __SerdeContext): GetXssMatchSetResponse => {
  return {
    XssMatchSet: output.XssMatchSet != null ? de_XssMatchSet(output.XssMatchSet, context) : undefined,
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
 * deserializeAws_json1_1IPSet
 */
const de_IPSet = (output: any, context: __SerdeContext): IPSet => {
  return {
    IPSetDescriptors:
      output.IPSetDescriptors != null ? de_IPSetDescriptors(output.IPSetDescriptors, context) : undefined,
    IPSetId: __expectString(output.IPSetId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1IPSetDescriptor
 */
const de_IPSetDescriptor = (output: any, context: __SerdeContext): IPSetDescriptor => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1IPSetDescriptors
 */
const de_IPSetDescriptors = (output: any, context: __SerdeContext): IPSetDescriptor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IPSetDescriptor(entry, context);
    });
  return retVal;
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
    IPSetId: __expectString(output.IPSetId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse
 */
const de_ListActivatedRulesInRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): ListActivatedRulesInRuleGroupResponse => {
  return {
    ActivatedRules: output.ActivatedRules != null ? de_ActivatedRules(output.ActivatedRules, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListByteMatchSetsResponse
 */
const de_ListByteMatchSetsResponse = (output: any, context: __SerdeContext): ListByteMatchSetsResponse => {
  return {
    ByteMatchSets: output.ByteMatchSets != null ? de_ByteMatchSetSummaries(output.ByteMatchSets, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListGeoMatchSetsResponse
 */
const de_ListGeoMatchSetsResponse = (output: any, context: __SerdeContext): ListGeoMatchSetsResponse => {
  return {
    GeoMatchSets: output.GeoMatchSets != null ? de_GeoMatchSetSummaries(output.GeoMatchSets, context) : undefined,
    NextMarker: __expectString(output.NextMarker),
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
 * deserializeAws_json1_1ListRateBasedRulesResponse
 */
const de_ListRateBasedRulesResponse = (output: any, context: __SerdeContext): ListRateBasedRulesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Rules: output.Rules != null ? de_RuleSummaries(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRegexMatchSetsResponse
 */
const de_ListRegexMatchSetsResponse = (output: any, context: __SerdeContext): ListRegexMatchSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RegexMatchSets:
      output.RegexMatchSets != null ? de_RegexMatchSetSummaries(output.RegexMatchSets, context) : undefined,
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
 * deserializeAws_json1_1ListRulesResponse
 */
const de_ListRulesResponse = (output: any, context: __SerdeContext): ListRulesResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    Rules: output.Rules != null ? de_RuleSummaries(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSizeConstraintSetsResponse
 */
const de_ListSizeConstraintSetsResponse = (output: any, context: __SerdeContext): ListSizeConstraintSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    SizeConstraintSets:
      output.SizeConstraintSets != null ? de_SizeConstraintSetSummaries(output.SizeConstraintSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSqlInjectionMatchSetsResponse
 */
const de_ListSqlInjectionMatchSetsResponse = (
  output: any,
  context: __SerdeContext
): ListSqlInjectionMatchSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    SqlInjectionMatchSets:
      output.SqlInjectionMatchSets != null
        ? de_SqlInjectionMatchSetSummaries(output.SqlInjectionMatchSets, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSubscribedRuleGroupsResponse
 */
const de_ListSubscribedRuleGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListSubscribedRuleGroupsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    RuleGroups: output.RuleGroups != null ? de_SubscribedRuleGroupSummaries(output.RuleGroups, context) : undefined,
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
 * deserializeAws_json1_1ListXssMatchSetsResponse
 */
const de_ListXssMatchSetsResponse = (output: any, context: __SerdeContext): ListXssMatchSetsResponse => {
  return {
    NextMarker: __expectString(output.NextMarker),
    XssMatchSets: output.XssMatchSets != null ? de_XssMatchSetSummaries(output.XssMatchSets, context) : undefined,
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
 * deserializeAws_json1_1ManagedKeys
 */
const de_ManagedKeys = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Predicate
 */
const de_Predicate = (output: any, context: __SerdeContext): Predicate => {
  return {
    DataId: __expectString(output.DataId),
    Negated: __expectBoolean(output.Negated),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Predicates
 */
const de_Predicates = (output: any, context: __SerdeContext): Predicate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Predicate(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_1PutPermissionPolicyResponse
 */
const de_PutPermissionPolicyResponse = (output: any, context: __SerdeContext): PutPermissionPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RateBasedRule
 */
const de_RateBasedRule = (output: any, context: __SerdeContext): RateBasedRule => {
  return {
    MatchPredicates: output.MatchPredicates != null ? de_Predicates(output.MatchPredicates, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RateKey: __expectString(output.RateKey),
    RateLimit: __expectLong(output.RateLimit),
    RuleId: __expectString(output.RuleId),
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
 * deserializeAws_json1_1RegexMatchSet
 */
const de_RegexMatchSet = (output: any, context: __SerdeContext): RegexMatchSet => {
  return {
    Name: __expectString(output.Name),
    RegexMatchSetId: __expectString(output.RegexMatchSetId),
    RegexMatchTuples:
      output.RegexMatchTuples != null ? de_RegexMatchTuples(output.RegexMatchTuples, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegexMatchSetSummaries
 */
const de_RegexMatchSetSummaries = (output: any, context: __SerdeContext): RegexMatchSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegexMatchSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegexMatchSetSummary
 */
const de_RegexMatchSetSummary = (output: any, context: __SerdeContext): RegexMatchSetSummary => {
  return {
    Name: __expectString(output.Name),
    RegexMatchSetId: __expectString(output.RegexMatchSetId),
  } as any;
};

/**
 * deserializeAws_json1_1RegexMatchTuple
 */
const de_RegexMatchTuple = (output: any, context: __SerdeContext): RegexMatchTuple => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    RegexPatternSetId: __expectString(output.RegexPatternSetId),
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

/**
 * deserializeAws_json1_1RegexMatchTuples
 */
const de_RegexMatchTuples = (output: any, context: __SerdeContext): RegexMatchTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegexMatchTuple(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegexPatternSet
 */
const de_RegexPatternSet = (output: any, context: __SerdeContext): RegexPatternSet => {
  return {
    Name: __expectString(output.Name),
    RegexPatternSetId: __expectString(output.RegexPatternSetId),
    RegexPatternStrings:
      output.RegexPatternStrings != null ? de_RegexPatternStrings(output.RegexPatternStrings, context) : undefined,
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
    Name: __expectString(output.Name),
    RegexPatternSetId: __expectString(output.RegexPatternSetId),
  } as any;
};

/**
 * deserializeAws_json1_1RegexPatternStrings
 */
const de_RegexPatternStrings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    Predicates: output.Predicates != null ? de_Predicates(output.Predicates, context) : undefined,
    RuleId: __expectString(output.RuleId),
  } as any;
};

/**
 * deserializeAws_json1_1RuleGroup
 */
const de_RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
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
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
  } as any;
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
    Name: __expectString(output.Name),
    RuleId: __expectString(output.RuleId),
  } as any;
};

/**
 * deserializeAws_json1_1SampledHTTPRequest
 */
const de_SampledHTTPRequest = (output: any, context: __SerdeContext): SampledHTTPRequest => {
  return {
    Action: __expectString(output.Action),
    Request: output.Request != null ? de_HTTPRequest(output.Request, context) : undefined,
    RuleWithinRuleGroup: __expectString(output.RuleWithinRuleGroup),
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
 * deserializeAws_json1_1SizeConstraint
 */
const de_SizeConstraint = (output: any, context: __SerdeContext): SizeConstraint => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    Size: __expectLong(output.Size),
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

/**
 * deserializeAws_json1_1SizeConstraints
 */
const de_SizeConstraints = (output: any, context: __SerdeContext): SizeConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SizeConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SizeConstraintSet
 */
const de_SizeConstraintSet = (output: any, context: __SerdeContext): SizeConstraintSet => {
  return {
    Name: __expectString(output.Name),
    SizeConstraintSetId: __expectString(output.SizeConstraintSetId),
    SizeConstraints: output.SizeConstraints != null ? de_SizeConstraints(output.SizeConstraints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SizeConstraintSetSummaries
 */
const de_SizeConstraintSetSummaries = (output: any, context: __SerdeContext): SizeConstraintSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SizeConstraintSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SizeConstraintSetSummary
 */
const de_SizeConstraintSetSummary = (output: any, context: __SerdeContext): SizeConstraintSetSummary => {
  return {
    Name: __expectString(output.Name),
    SizeConstraintSetId: __expectString(output.SizeConstraintSetId),
  } as any;
};

/**
 * deserializeAws_json1_1SqlInjectionMatchSet
 */
const de_SqlInjectionMatchSet = (output: any, context: __SerdeContext): SqlInjectionMatchSet => {
  return {
    Name: __expectString(output.Name),
    SqlInjectionMatchSetId: __expectString(output.SqlInjectionMatchSetId),
    SqlInjectionMatchTuples:
      output.SqlInjectionMatchTuples != null
        ? de_SqlInjectionMatchTuples(output.SqlInjectionMatchTuples, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SqlInjectionMatchSetSummaries
 */
const de_SqlInjectionMatchSetSummaries = (output: any, context: __SerdeContext): SqlInjectionMatchSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SqlInjectionMatchSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SqlInjectionMatchSetSummary
 */
const de_SqlInjectionMatchSetSummary = (output: any, context: __SerdeContext): SqlInjectionMatchSetSummary => {
  return {
    Name: __expectString(output.Name),
    SqlInjectionMatchSetId: __expectString(output.SqlInjectionMatchSetId),
  } as any;
};

/**
 * deserializeAws_json1_1SqlInjectionMatchTuple
 */
const de_SqlInjectionMatchTuple = (output: any, context: __SerdeContext): SqlInjectionMatchTuple => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

/**
 * deserializeAws_json1_1SqlInjectionMatchTuples
 */
const de_SqlInjectionMatchTuples = (output: any, context: __SerdeContext): SqlInjectionMatchTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SqlInjectionMatchTuple(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubscribedRuleGroupSummaries
 */
const de_SubscribedRuleGroupSummaries = (output: any, context: __SerdeContext): SubscribedRuleGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubscribedRuleGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubscribedRuleGroupSummary
 */
const de_SubscribedRuleGroupSummary = (output: any, context: __SerdeContext): SubscribedRuleGroupSummary => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
  } as any;
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
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateByteMatchSetResponse
 */
const de_UpdateByteMatchSetResponse = (output: any, context: __SerdeContext): UpdateByteMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGeoMatchSetResponse
 */
const de_UpdateGeoMatchSetResponse = (output: any, context: __SerdeContext): UpdateGeoMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateIPSetResponse
 */
const de_UpdateIPSetResponse = (output: any, context: __SerdeContext): UpdateIPSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRateBasedRuleResponse
 */
const de_UpdateRateBasedRuleResponse = (output: any, context: __SerdeContext): UpdateRateBasedRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRegexMatchSetResponse
 */
const de_UpdateRegexMatchSetResponse = (output: any, context: __SerdeContext): UpdateRegexMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRegexPatternSetResponse
 */
const de_UpdateRegexPatternSetResponse = (output: any, context: __SerdeContext): UpdateRegexPatternSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRuleGroupResponse
 */
const de_UpdateRuleGroupResponse = (output: any, context: __SerdeContext): UpdateRuleGroupResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRuleResponse
 */
const de_UpdateRuleResponse = (output: any, context: __SerdeContext): UpdateRuleResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSizeConstraintSetResponse
 */
const de_UpdateSizeConstraintSetResponse = (output: any, context: __SerdeContext): UpdateSizeConstraintSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse
 */
const de_UpdateSqlInjectionMatchSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateSqlInjectionMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateWebACLResponse
 */
const de_UpdateWebACLResponse = (output: any, context: __SerdeContext): UpdateWebACLResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateXssMatchSetResponse
 */
const de_UpdateXssMatchSetResponse = (output: any, context: __SerdeContext): UpdateXssMatchSetResponse => {
  return {
    ChangeToken: __expectString(output.ChangeToken),
  } as any;
};

/**
 * deserializeAws_json1_1WafAction
 */
const de_WafAction = (output: any, context: __SerdeContext): WafAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1WAFBadRequestException
 */
const de_WAFBadRequestException = (output: any, context: __SerdeContext): WAFBadRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFDisallowedNameException
 */
const de_WAFDisallowedNameException = (output: any, context: __SerdeContext): WAFDisallowedNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFEntityMigrationException
 */
const de_WAFEntityMigrationException = (output: any, context: __SerdeContext): WAFEntityMigrationException => {
  return {
    MigrationErrorReason: __expectString(output.MigrationErrorReason),
    MigrationErrorType: __expectString(output.MigrationErrorType),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInternalErrorException
 */
const de_WAFInternalErrorException = (output: any, context: __SerdeContext): WAFInternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidAccountException
 */
const de_WAFInvalidAccountException = (output: any, context: __SerdeContext): WAFInvalidAccountException => {
  return {} as any;
};

/**
 * deserializeAws_json1_1WAFInvalidOperationException
 */
const de_WAFInvalidOperationException = (output: any, context: __SerdeContext): WAFInvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidParameterException
 */
const de_WAFInvalidParameterException = (output: any, context: __SerdeContext): WAFInvalidParameterException => {
  return {
    field: __expectString(output.field),
    parameter: __expectString(output.parameter),
    reason: __expectString(output.reason),
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
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFInvalidRegexPatternException
 */
const de_WAFInvalidRegexPatternException = (output: any, context: __SerdeContext): WAFInvalidRegexPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFLimitsExceededException
 */
const de_WAFLimitsExceededException = (output: any, context: __SerdeContext): WAFLimitsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFNonEmptyEntityException
 */
const de_WAFNonEmptyEntityException = (output: any, context: __SerdeContext): WAFNonEmptyEntityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFNonexistentContainerException
 */
const de_WAFNonexistentContainerException = (
  output: any,
  context: __SerdeContext
): WAFNonexistentContainerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFNonexistentItemException
 */
const de_WAFNonexistentItemException = (output: any, context: __SerdeContext): WAFNonexistentItemException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WafOverrideAction
 */
const de_WafOverrideAction = (output: any, context: __SerdeContext): WafOverrideAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1WAFReferencedItemException
 */
const de_WAFReferencedItemException = (output: any, context: __SerdeContext): WAFReferencedItemException => {
  return {
    message: __expectString(output.message),
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
 * deserializeAws_json1_1WAFStaleDataException
 */
const de_WAFStaleDataException = (output: any, context: __SerdeContext): WAFStaleDataException => {
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
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFTagOperationException
 */
const de_WAFTagOperationException = (output: any, context: __SerdeContext): WAFTagOperationException => {
  return {
    message: __expectString(output.message),
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
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WAFUnavailableEntityException
 */
const de_WAFUnavailableEntityException = (output: any, context: __SerdeContext): WAFUnavailableEntityException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WebACL
 */
const de_WebACL = (output: any, context: __SerdeContext): WebACL => {
  return {
    DefaultAction: output.DefaultAction != null ? de_WafAction(output.DefaultAction, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    Rules: output.Rules != null ? de_ActivatedRules(output.Rules, context) : undefined,
    WebACLArn: __expectString(output.WebACLArn),
    WebACLId: __expectString(output.WebACLId),
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
    Name: __expectString(output.Name),
    WebACLId: __expectString(output.WebACLId),
  } as any;
};

/**
 * deserializeAws_json1_1XssMatchSet
 */
const de_XssMatchSet = (output: any, context: __SerdeContext): XssMatchSet => {
  return {
    Name: __expectString(output.Name),
    XssMatchSetId: __expectString(output.XssMatchSetId),
    XssMatchTuples: output.XssMatchTuples != null ? de_XssMatchTuples(output.XssMatchTuples, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1XssMatchSetSummaries
 */
const de_XssMatchSetSummaries = (output: any, context: __SerdeContext): XssMatchSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_XssMatchSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1XssMatchSetSummary
 */
const de_XssMatchSetSummary = (output: any, context: __SerdeContext): XssMatchSetSummary => {
  return {
    Name: __expectString(output.Name),
    XssMatchSetId: __expectString(output.XssMatchSetId),
  } as any;
};

/**
 * deserializeAws_json1_1XssMatchTuple
 */
const de_XssMatchTuple = (output: any, context: __SerdeContext): XssMatchTuple => {
  return {
    FieldToMatch: output.FieldToMatch != null ? de_FieldToMatch(output.FieldToMatch, context) : undefined,
    TextTransformation: __expectString(output.TextTransformation),
  } as any;
};

/**
 * deserializeAws_json1_1XssMatchTuples
 */
const de_XssMatchTuples = (output: any, context: __SerdeContext): XssMatchTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_XssMatchTuple(entry, context);
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
