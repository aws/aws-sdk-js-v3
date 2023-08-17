// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
  ByteMatchSet,
  ByteMatchSetUpdate,
  ByteMatchTuple,
  CreateByteMatchSetRequest,
  CreateByteMatchSetResponse,
  CreateGeoMatchSetRequest,
  CreateIPSetRequest,
  CreateRateBasedRuleRequest,
  CreateRegexMatchSetRequest,
  CreateRegexPatternSetRequest,
  CreateRuleGroupRequest,
  CreateRuleRequest,
  CreateSizeConstraintSetRequest,
  CreateSqlInjectionMatchSetRequest,
  CreateWebACLMigrationStackRequest,
  CreateWebACLRequest,
  CreateXssMatchSetRequest,
  DeleteByteMatchSetRequest,
  DeleteGeoMatchSetRequest,
  DeleteIPSetRequest,
  DeleteLoggingConfigurationRequest,
  DeletePermissionPolicyRequest,
  DeleteRateBasedRuleRequest,
  DeleteRegexMatchSetRequest,
  DeleteRegexPatternSetRequest,
  DeleteRuleGroupRequest,
  DeleteRuleRequest,
  DeleteSizeConstraintSetRequest,
  DeleteSqlInjectionMatchSetRequest,
  DeleteWebACLRequest,
  DeleteXssMatchSetRequest,
  DisassociateWebACLRequest,
  ExcludedRule,
  FieldToMatch,
  GeoMatchConstraint,
  GeoMatchSetUpdate,
  GetByteMatchSetRequest,
  GetByteMatchSetResponse,
  GetChangeTokenRequest,
  GetChangeTokenStatusRequest,
  GetGeoMatchSetRequest,
  GetIPSetRequest,
  GetLoggingConfigurationRequest,
  GetPermissionPolicyRequest,
  GetRateBasedRuleManagedKeysRequest,
  GetRateBasedRuleRequest,
  GetRegexMatchSetRequest,
  GetRegexPatternSetRequest,
  GetRuleGroupRequest,
  GetRuleRequest,
  GetSampledRequestsRequest,
  GetSampledRequestsResponse,
  GetSizeConstraintSetRequest,
  GetSqlInjectionMatchSetRequest,
  GetWebACLForResourceRequest,
  GetWebACLRequest,
  GetXssMatchSetRequest,
  IPSetDescriptor,
  IPSetUpdate,
  ListActivatedRulesInRuleGroupRequest,
  ListByteMatchSetsRequest,
  ListGeoMatchSetsRequest,
  ListIPSetsRequest,
  ListLoggingConfigurationsRequest,
  ListRateBasedRulesRequest,
  ListRegexMatchSetsRequest,
  ListRegexPatternSetsRequest,
  ListResourcesForWebACLRequest,
  ListRuleGroupsRequest,
  ListRulesRequest,
  ListSizeConstraintSetsRequest,
  ListSqlInjectionMatchSetsRequest,
  ListSubscribedRuleGroupsRequest,
  ListTagsForResourceRequest,
  ListWebACLsRequest,
  ListXssMatchSetsRequest,
  LoggingConfiguration,
  Predicate,
  PutLoggingConfigurationRequest,
  PutPermissionPolicyRequest,
  RegexMatchSetUpdate,
  RegexMatchTuple,
  RegexPatternSetUpdate,
  RuleGroupUpdate,
  RuleUpdate,
  SampledHTTPRequest,
  SizeConstraint,
  SizeConstraintSetUpdate,
  SqlInjectionMatchSetUpdate,
  SqlInjectionMatchTuple,
  Tag,
  TagResourceRequest,
  TimeWindow,
  UntagResourceRequest,
  UpdateByteMatchSetRequest,
  UpdateGeoMatchSetRequest,
  UpdateIPSetRequest,
  UpdateRateBasedRuleRequest,
  UpdateRegexMatchSetRequest,
  UpdateRegexPatternSetRequest,
  UpdateRuleGroupRequest,
  UpdateRuleRequest,
  UpdateSizeConstraintSetRequest,
  UpdateSqlInjectionMatchSetRequest,
  UpdateWebACLRequest,
  UpdateXssMatchSetRequest,
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
  WebACLUpdate,
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
  const headers: __HeaderBag = sharedHeaders("AssociateWebACL");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateByteMatchSetCommand
 */
export const se_CreateByteMatchSetCommand = async (
  input: CreateByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateByteMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGeoMatchSetCommand
 */
export const se_CreateGeoMatchSetCommand = async (
  input: CreateGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGeoMatchSet");
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
 * serializeAws_json1_1CreateRateBasedRuleCommand
 */
export const se_CreateRateBasedRuleCommand = async (
  input: CreateRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRateBasedRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRegexMatchSetCommand
 */
export const se_CreateRegexMatchSetCommand = async (
  input: CreateRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegexMatchSet");
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
 * serializeAws_json1_1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRule");
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSizeConstraintSetCommand
 */
export const se_CreateSizeConstraintSetCommand = async (
  input: CreateSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSizeConstraintSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSqlInjectionMatchSetCommand
 */
export const se_CreateSqlInjectionMatchSetCommand = async (
  input: CreateSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSqlInjectionMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebACLMigrationStackCommand
 */
export const se_CreateWebACLMigrationStackCommand = async (
  input: CreateWebACLMigrationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWebACLMigrationStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateXssMatchSetCommand
 */
export const se_CreateXssMatchSetCommand = async (
  input: CreateXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateXssMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteByteMatchSetCommand
 */
export const se_DeleteByteMatchSetCommand = async (
  input: DeleteByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteByteMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGeoMatchSetCommand
 */
export const se_DeleteGeoMatchSetCommand = async (
  input: DeleteGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGeoMatchSet");
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
 * serializeAws_json1_1DeleteRateBasedRuleCommand
 */
export const se_DeleteRateBasedRuleCommand = async (
  input: DeleteRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRateBasedRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRegexMatchSetCommand
 */
export const se_DeleteRegexMatchSetCommand = async (
  input: DeleteRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegexMatchSet");
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
 * serializeAws_json1_1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRule");
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
 * serializeAws_json1_1DeleteSizeConstraintSetCommand
 */
export const se_DeleteSizeConstraintSetCommand = async (
  input: DeleteSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSizeConstraintSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSqlInjectionMatchSetCommand
 */
export const se_DeleteSqlInjectionMatchSetCommand = async (
  input: DeleteSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSqlInjectionMatchSet");
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
 * serializeAws_json1_1DeleteXssMatchSetCommand
 */
export const se_DeleteXssMatchSetCommand = async (
  input: DeleteXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteXssMatchSet");
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
 * serializeAws_json1_1GetByteMatchSetCommand
 */
export const se_GetByteMatchSetCommand = async (
  input: GetByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetByteMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetChangeTokenCommand
 */
export const se_GetChangeTokenCommand = async (
  input: GetChangeTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetChangeToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetChangeTokenStatusCommand
 */
export const se_GetChangeTokenStatusCommand = async (
  input: GetChangeTokenStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetChangeTokenStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGeoMatchSetCommand
 */
export const se_GetGeoMatchSetCommand = async (
  input: GetGeoMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGeoMatchSet");
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
 * serializeAws_json1_1GetRateBasedRuleCommand
 */
export const se_GetRateBasedRuleCommand = async (
  input: GetRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRateBasedRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRateBasedRuleManagedKeysCommand
 */
export const se_GetRateBasedRuleManagedKeysCommand = async (
  input: GetRateBasedRuleManagedKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRateBasedRuleManagedKeys");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegexMatchSetCommand
 */
export const se_GetRegexMatchSetCommand = async (
  input: GetRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegexMatchSet");
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
 * serializeAws_json1_1GetRuleCommand
 */
export const se_GetRuleCommand = async (
  input: GetRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRule");
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
 * serializeAws_json1_1GetSizeConstraintSetCommand
 */
export const se_GetSizeConstraintSetCommand = async (
  input: GetSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSizeConstraintSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSqlInjectionMatchSetCommand
 */
export const se_GetSqlInjectionMatchSetCommand = async (
  input: GetSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSqlInjectionMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1GetXssMatchSetCommand
 */
export const se_GetXssMatchSetCommand = async (
  input: GetXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetXssMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListActivatedRulesInRuleGroupCommand
 */
export const se_ListActivatedRulesInRuleGroupCommand = async (
  input: ListActivatedRulesInRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActivatedRulesInRuleGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListByteMatchSetsCommand
 */
export const se_ListByteMatchSetsCommand = async (
  input: ListByteMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListByteMatchSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGeoMatchSetsCommand
 */
export const se_ListGeoMatchSetsCommand = async (
  input: ListGeoMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGeoMatchSets");
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
 * serializeAws_json1_1ListRateBasedRulesCommand
 */
export const se_ListRateBasedRulesCommand = async (
  input: ListRateBasedRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRateBasedRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRegexMatchSetsCommand
 */
export const se_ListRegexMatchSetsCommand = async (
  input: ListRegexMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRegexMatchSets");
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
 * serializeAws_json1_1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSizeConstraintSetsCommand
 */
export const se_ListSizeConstraintSetsCommand = async (
  input: ListSizeConstraintSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSizeConstraintSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSqlInjectionMatchSetsCommand
 */
export const se_ListSqlInjectionMatchSetsCommand = async (
  input: ListSqlInjectionMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSqlInjectionMatchSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSubscribedRuleGroupsCommand
 */
export const se_ListSubscribedRuleGroupsCommand = async (
  input: ListSubscribedRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSubscribedRuleGroups");
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
 * serializeAws_json1_1ListXssMatchSetsCommand
 */
export const se_ListXssMatchSetsCommand = async (
  input: ListXssMatchSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListXssMatchSets");
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
 * serializeAws_json1_1UpdateByteMatchSetCommand
 */
export const se_UpdateByteMatchSetCommand = async (
  input: UpdateByteMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateByteMatchSet");
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
  const headers: __HeaderBag = sharedHeaders("UpdateGeoMatchSet");
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
 * serializeAws_json1_1UpdateRateBasedRuleCommand
 */
export const se_UpdateRateBasedRuleCommand = async (
  input: UpdateRateBasedRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRateBasedRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRegexMatchSetCommand
 */
export const se_UpdateRegexMatchSetCommand = async (
  input: UpdateRegexMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRegexMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1UpdateRuleCommand
 */
export const se_UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRule");
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSizeConstraintSetCommand
 */
export const se_UpdateSizeConstraintSetCommand = async (
  input: UpdateSizeConstraintSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSizeConstraintSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSqlInjectionMatchSetCommand
 */
export const se_UpdateSqlInjectionMatchSetCommand = async (
  input: UpdateSqlInjectionMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSqlInjectionMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateXssMatchSetCommand
 */
export const se_UpdateXssMatchSetCommand = async (
  input: UpdateXssMatchSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateXssMatchSet");
  let body: any;
  body = JSON.stringify(_json(input));
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWebACLMigrationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetChangeTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetChangeTokenStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
  contents = _json(data);
  const response: GetRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRateBasedRuleManagedKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  contents = _json(data);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFNonexistentItemException":
    case "com.amazonaws.wafregional#WAFNonexistentItemException":
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
  contents = _json(data);
  const response: GetSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  contents = _json(data);
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
  contents = _json(data);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListActivatedRulesInRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListByteMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGeoMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListRateBasedRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListRegexMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListSizeConstraintSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListSqlInjectionMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListSubscribedRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "com.amazonaws.wafregional#WAFInternalErrorException":
      throw await de_WAFInternalErrorExceptionRes(parsedOutput, context);
    case "WAFInvalidAccountException":
    case "com.amazonaws.wafregional#WAFInvalidAccountException":
      throw await de_WAFInvalidAccountExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: ListXssMatchSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateByteMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateGeoMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRateBasedRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRegexMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateSizeConstraintSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateSqlInjectionMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateXssMatchSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
 * deserializeAws_json1_1WAFInvalidRegexPatternExceptionRes
 */
const de_WAFInvalidRegexPatternExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WAFInvalidRegexPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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

// se_ActivatedRule omitted.

// se_AssociateWebACLRequest omitted.

/**
 * serializeAws_json1_1ByteMatchSetUpdate
 */
const se_ByteMatchSetUpdate = (input: ByteMatchSetUpdate, context: __SerdeContext): any => {
  return take(input, {
    Action: [],
    ByteMatchTuple: (_) => se_ByteMatchTuple(_, context),
  });
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
  return take(input, {
    FieldToMatch: _json,
    PositionalConstraint: [],
    TargetString: context.base64Encoder,
    TextTransformation: [],
  });
};

// se_CreateByteMatchSetRequest omitted.

// se_CreateGeoMatchSetRequest omitted.

// se_CreateIPSetRequest omitted.

// se_CreateRateBasedRuleRequest omitted.

// se_CreateRegexMatchSetRequest omitted.

// se_CreateRegexPatternSetRequest omitted.

// se_CreateRuleGroupRequest omitted.

// se_CreateRuleRequest omitted.

// se_CreateSizeConstraintSetRequest omitted.

// se_CreateSqlInjectionMatchSetRequest omitted.

// se_CreateWebACLMigrationStackRequest omitted.

// se_CreateWebACLRequest omitted.

// se_CreateXssMatchSetRequest omitted.

// se_DeleteByteMatchSetRequest omitted.

// se_DeleteGeoMatchSetRequest omitted.

// se_DeleteIPSetRequest omitted.

// se_DeleteLoggingConfigurationRequest omitted.

// se_DeletePermissionPolicyRequest omitted.

// se_DeleteRateBasedRuleRequest omitted.

// se_DeleteRegexMatchSetRequest omitted.

// se_DeleteRegexPatternSetRequest omitted.

// se_DeleteRuleGroupRequest omitted.

// se_DeleteRuleRequest omitted.

// se_DeleteSizeConstraintSetRequest omitted.

// se_DeleteSqlInjectionMatchSetRequest omitted.

// se_DeleteWebACLRequest omitted.

// se_DeleteXssMatchSetRequest omitted.

// se_DisassociateWebACLRequest omitted.

// se_ExcludedRule omitted.

// se_ExcludedRules omitted.

// se_FieldToMatch omitted.

// se_GeoMatchConstraint omitted.

// se_GeoMatchSetUpdate omitted.

// se_GeoMatchSetUpdates omitted.

// se_GetByteMatchSetRequest omitted.

// se_GetChangeTokenRequest omitted.

// se_GetChangeTokenStatusRequest omitted.

// se_GetGeoMatchSetRequest omitted.

// se_GetIPSetRequest omitted.

// se_GetLoggingConfigurationRequest omitted.

// se_GetPermissionPolicyRequest omitted.

// se_GetRateBasedRuleManagedKeysRequest omitted.

// se_GetRateBasedRuleRequest omitted.

// se_GetRegexMatchSetRequest omitted.

// se_GetRegexPatternSetRequest omitted.

// se_GetRuleGroupRequest omitted.

// se_GetRuleRequest omitted.

/**
 * serializeAws_json1_1GetSampledRequestsRequest
 */
const se_GetSampledRequestsRequest = (input: GetSampledRequestsRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxItems: [],
    RuleId: [],
    TimeWindow: (_) => se_TimeWindow(_, context),
    WebAclId: [],
  });
};

// se_GetSizeConstraintSetRequest omitted.

// se_GetSqlInjectionMatchSetRequest omitted.

// se_GetWebACLForResourceRequest omitted.

// se_GetWebACLRequest omitted.

// se_GetXssMatchSetRequest omitted.

// se_IPSetDescriptor omitted.

// se_IPSetUpdate omitted.

// se_IPSetUpdates omitted.

// se_ListActivatedRulesInRuleGroupRequest omitted.

// se_ListByteMatchSetsRequest omitted.

// se_ListGeoMatchSetsRequest omitted.

// se_ListIPSetsRequest omitted.

// se_ListLoggingConfigurationsRequest omitted.

// se_ListRateBasedRulesRequest omitted.

// se_ListRegexMatchSetsRequest omitted.

// se_ListRegexPatternSetsRequest omitted.

// se_ListResourcesForWebACLRequest omitted.

// se_ListRuleGroupsRequest omitted.

// se_ListRulesRequest omitted.

// se_ListSizeConstraintSetsRequest omitted.

// se_ListSqlInjectionMatchSetsRequest omitted.

// se_ListSubscribedRuleGroupsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListWebACLsRequest omitted.

// se_ListXssMatchSetsRequest omitted.

// se_LogDestinationConfigs omitted.

// se_LoggingConfiguration omitted.

// se_Predicate omitted.

// se_PutLoggingConfigurationRequest omitted.

// se_PutPermissionPolicyRequest omitted.

// se_RedactedFields omitted.

// se_RegexMatchSetUpdate omitted.

// se_RegexMatchSetUpdates omitted.

// se_RegexMatchTuple omitted.

// se_RegexPatternSetUpdate omitted.

// se_RegexPatternSetUpdates omitted.

// se_RuleGroupUpdate omitted.

// se_RuleGroupUpdates omitted.

// se_RuleUpdate omitted.

// se_RuleUpdates omitted.

// se_SizeConstraint omitted.

// se_SizeConstraintSetUpdate omitted.

// se_SizeConstraintSetUpdates omitted.

// se_SqlInjectionMatchSetUpdate omitted.

// se_SqlInjectionMatchSetUpdates omitted.

// se_SqlInjectionMatchTuple omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

/**
 * serializeAws_json1_1TimeWindow
 */
const se_TimeWindow = (input: TimeWindow, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_1UpdateByteMatchSetRequest
 */
const se_UpdateByteMatchSetRequest = (input: UpdateByteMatchSetRequest, context: __SerdeContext): any => {
  return take(input, {
    ByteMatchSetId: [],
    ChangeToken: [],
    Updates: (_) => se_ByteMatchSetUpdates(_, context),
  });
};

// se_UpdateGeoMatchSetRequest omitted.

// se_UpdateIPSetRequest omitted.

// se_UpdateRateBasedRuleRequest omitted.

// se_UpdateRegexMatchSetRequest omitted.

// se_UpdateRegexPatternSetRequest omitted.

// se_UpdateRuleGroupRequest omitted.

// se_UpdateRuleRequest omitted.

// se_UpdateSizeConstraintSetRequest omitted.

// se_UpdateSqlInjectionMatchSetRequest omitted.

// se_UpdateWebACLRequest omitted.

// se_UpdateXssMatchSetRequest omitted.

// se_WafAction omitted.

// se_WafOverrideAction omitted.

// se_WebACLUpdate omitted.

// se_WebACLUpdates omitted.

// se_XssMatchSetUpdate omitted.

// se_XssMatchSetUpdates omitted.

// se_XssMatchTuple omitted.

// de_ActivatedRule omitted.

// de_ActivatedRules omitted.

// de_AssociateWebACLResponse omitted.

/**
 * deserializeAws_json1_1ByteMatchSet
 */
const de_ByteMatchSet = (output: any, context: __SerdeContext): ByteMatchSet => {
  return take(output, {
    ByteMatchSetId: __expectString,
    ByteMatchTuples: (_: any) => de_ByteMatchTuples(_, context),
    Name: __expectString,
  }) as any;
};

// de_ByteMatchSetSummaries omitted.

// de_ByteMatchSetSummary omitted.

/**
 * deserializeAws_json1_1ByteMatchTuple
 */
const de_ByteMatchTuple = (output: any, context: __SerdeContext): ByteMatchTuple => {
  return take(output, {
    FieldToMatch: _json,
    PositionalConstraint: __expectString,
    TargetString: context.base64Decoder,
    TextTransformation: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ByteMatchTuples
 */
const de_ByteMatchTuples = (output: any, context: __SerdeContext): ByteMatchTuple[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ByteMatchTuple(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateByteMatchSetResponse
 */
const de_CreateByteMatchSetResponse = (output: any, context: __SerdeContext): CreateByteMatchSetResponse => {
  return take(output, {
    ByteMatchSet: (_: any) => de_ByteMatchSet(_, context),
    ChangeToken: __expectString,
  }) as any;
};

// de_CreateGeoMatchSetResponse omitted.

// de_CreateIPSetResponse omitted.

// de_CreateRateBasedRuleResponse omitted.

// de_CreateRegexMatchSetResponse omitted.

// de_CreateRegexPatternSetResponse omitted.

// de_CreateRuleGroupResponse omitted.

// de_CreateRuleResponse omitted.

// de_CreateSizeConstraintSetResponse omitted.

// de_CreateSqlInjectionMatchSetResponse omitted.

// de_CreateWebACLMigrationStackResponse omitted.

// de_CreateWebACLResponse omitted.

// de_CreateXssMatchSetResponse omitted.

// de_DeleteByteMatchSetResponse omitted.

// de_DeleteGeoMatchSetResponse omitted.

// de_DeleteIPSetResponse omitted.

// de_DeleteLoggingConfigurationResponse omitted.

// de_DeletePermissionPolicyResponse omitted.

// de_DeleteRateBasedRuleResponse omitted.

// de_DeleteRegexMatchSetResponse omitted.

// de_DeleteRegexPatternSetResponse omitted.

// de_DeleteRuleGroupResponse omitted.

// de_DeleteRuleResponse omitted.

// de_DeleteSizeConstraintSetResponse omitted.

// de_DeleteSqlInjectionMatchSetResponse omitted.

// de_DeleteWebACLResponse omitted.

// de_DeleteXssMatchSetResponse omitted.

// de_DisassociateWebACLResponse omitted.

// de_ExcludedRule omitted.

// de_ExcludedRules omitted.

// de_FieldToMatch omitted.

// de_GeoMatchConstraint omitted.

// de_GeoMatchConstraints omitted.

// de_GeoMatchSet omitted.

// de_GeoMatchSetSummaries omitted.

// de_GeoMatchSetSummary omitted.

/**
 * deserializeAws_json1_1GetByteMatchSetResponse
 */
const de_GetByteMatchSetResponse = (output: any, context: __SerdeContext): GetByteMatchSetResponse => {
  return take(output, {
    ByteMatchSet: (_: any) => de_ByteMatchSet(_, context),
  }) as any;
};

// de_GetChangeTokenResponse omitted.

// de_GetChangeTokenStatusResponse omitted.

// de_GetGeoMatchSetResponse omitted.

// de_GetIPSetResponse omitted.

// de_GetLoggingConfigurationResponse omitted.

// de_GetPermissionPolicyResponse omitted.

// de_GetRateBasedRuleManagedKeysResponse omitted.

// de_GetRateBasedRuleResponse omitted.

// de_GetRegexMatchSetResponse omitted.

// de_GetRegexPatternSetResponse omitted.

// de_GetRuleGroupResponse omitted.

// de_GetRuleResponse omitted.

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

// de_GetSizeConstraintSetResponse omitted.

// de_GetSqlInjectionMatchSetResponse omitted.

// de_GetWebACLForResourceResponse omitted.

// de_GetWebACLResponse omitted.

// de_GetXssMatchSetResponse omitted.

// de_HTTPHeader omitted.

// de_HTTPHeaders omitted.

// de_HTTPRequest omitted.

// de_IPSet omitted.

// de_IPSetDescriptor omitted.

// de_IPSetDescriptors omitted.

// de_IPSetSummaries omitted.

// de_IPSetSummary omitted.

// de_ListActivatedRulesInRuleGroupResponse omitted.

// de_ListByteMatchSetsResponse omitted.

// de_ListGeoMatchSetsResponse omitted.

// de_ListIPSetsResponse omitted.

// de_ListLoggingConfigurationsResponse omitted.

// de_ListRateBasedRulesResponse omitted.

// de_ListRegexMatchSetsResponse omitted.

// de_ListRegexPatternSetsResponse omitted.

// de_ListResourcesForWebACLResponse omitted.

// de_ListRuleGroupsResponse omitted.

// de_ListRulesResponse omitted.

// de_ListSizeConstraintSetsResponse omitted.

// de_ListSqlInjectionMatchSetsResponse omitted.

// de_ListSubscribedRuleGroupsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListWebACLsResponse omitted.

// de_ListXssMatchSetsResponse omitted.

// de_LogDestinationConfigs omitted.

// de_LoggingConfiguration omitted.

// de_LoggingConfigurations omitted.

// de_ManagedKeys omitted.

// de_Predicate omitted.

// de_Predicates omitted.

// de_PutLoggingConfigurationResponse omitted.

// de_PutPermissionPolicyResponse omitted.

// de_RateBasedRule omitted.

// de_RedactedFields omitted.

// de_RegexMatchSet omitted.

// de_RegexMatchSetSummaries omitted.

// de_RegexMatchSetSummary omitted.

// de_RegexMatchTuple omitted.

// de_RegexMatchTuples omitted.

// de_RegexPatternSet omitted.

// de_RegexPatternSetSummaries omitted.

// de_RegexPatternSetSummary omitted.

// de_RegexPatternStrings omitted.

// de_ResourceArns omitted.

// de_Rule omitted.

// de_RuleGroup omitted.

// de_RuleGroupSummaries omitted.

// de_RuleGroupSummary omitted.

// de_RuleSummaries omitted.

// de_RuleSummary omitted.

/**
 * deserializeAws_json1_1SampledHTTPRequest
 */
const de_SampledHTTPRequest = (output: any, context: __SerdeContext): SampledHTTPRequest => {
  return take(output, {
    Action: __expectString,
    Request: _json,
    RuleWithinRuleGroup: __expectString,
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

// de_SizeConstraint omitted.

// de_SizeConstraints omitted.

// de_SizeConstraintSet omitted.

// de_SizeConstraintSetSummaries omitted.

// de_SizeConstraintSetSummary omitted.

// de_SqlInjectionMatchSet omitted.

// de_SqlInjectionMatchSetSummaries omitted.

// de_SqlInjectionMatchSetSummary omitted.

// de_SqlInjectionMatchTuple omitted.

// de_SqlInjectionMatchTuples omitted.

// de_SubscribedRuleGroupSummaries omitted.

// de_SubscribedRuleGroupSummary omitted.

// de_Tag omitted.

// de_TagInfoForResource omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1TimeWindow
 */
const de_TimeWindow = (output: any, context: __SerdeContext): TimeWindow => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_UntagResourceResponse omitted.

// de_UpdateByteMatchSetResponse omitted.

// de_UpdateGeoMatchSetResponse omitted.

// de_UpdateIPSetResponse omitted.

// de_UpdateRateBasedRuleResponse omitted.

// de_UpdateRegexMatchSetResponse omitted.

// de_UpdateRegexPatternSetResponse omitted.

// de_UpdateRuleGroupResponse omitted.

// de_UpdateRuleResponse omitted.

// de_UpdateSizeConstraintSetResponse omitted.

// de_UpdateSqlInjectionMatchSetResponse omitted.

// de_UpdateWebACLResponse omitted.

// de_UpdateXssMatchSetResponse omitted.

// de_WafAction omitted.

// de_WAFBadRequestException omitted.

// de_WAFDisallowedNameException omitted.

// de_WAFEntityMigrationException omitted.

// de_WAFInternalErrorException omitted.

// de_WAFInvalidAccountException omitted.

// de_WAFInvalidOperationException omitted.

// de_WAFInvalidParameterException omitted.

// de_WAFInvalidPermissionPolicyException omitted.

// de_WAFInvalidRegexPatternException omitted.

// de_WAFLimitsExceededException omitted.

// de_WAFNonEmptyEntityException omitted.

// de_WAFNonexistentContainerException omitted.

// de_WAFNonexistentItemException omitted.

// de_WafOverrideAction omitted.

// de_WAFReferencedItemException omitted.

// de_WAFServiceLinkedRoleErrorException omitted.

// de_WAFStaleDataException omitted.

// de_WAFSubscriptionNotFoundException omitted.

// de_WAFTagOperationException omitted.

// de_WAFTagOperationInternalErrorException omitted.

// de_WAFUnavailableEntityException omitted.

// de_WebACL omitted.

// de_WebACLSummaries omitted.

// de_WebACLSummary omitted.

// de_XssMatchSet omitted.

// de_XssMatchSetSummaries omitted.

// de_XssMatchSetSummary omitted.

// de_XssMatchTuple omitted.

// de_XssMatchTuples omitted.

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
    "x-amz-target": `AWSWAF_Regional_20161128.${operation}`,
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
