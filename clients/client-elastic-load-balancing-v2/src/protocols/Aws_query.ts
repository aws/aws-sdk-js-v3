// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

import {
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
} from "../commands/AddListenerCertificatesCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "../commands/CreateListenerCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "../commands/CreateLoadBalancerCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "../commands/CreateTargetGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "../commands/DeleteListenerCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "../commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "../commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "../commands/DeregisterTargetsCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
} from "../commands/DescribeListenerCertificatesCommand";
import { DescribeListenersCommandInput, DescribeListenersCommandOutput } from "../commands/DescribeListenersCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "../commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { DescribeRulesCommandInput, DescribeRulesCommandOutput } from "../commands/DescribeRulesCommand";
import {
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput,
} from "../commands/DescribeSSLPoliciesCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput,
} from "../commands/DescribeTargetGroupAttributesCommand";
import {
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "../commands/DescribeTargetGroupsCommand";
import {
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput,
} from "../commands/DescribeTargetHealthCommand";
import { ModifyListenerCommandInput, ModifyListenerCommandOutput } from "../commands/ModifyListenerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "../commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommandInput, ModifyRuleCommandOutput } from "../commands/ModifyRuleCommand";
import {
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
} from "../commands/ModifyTargetGroupAttributesCommand";
import { ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput } from "../commands/ModifyTargetGroupCommand";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "../commands/RegisterTargetsCommand";
import {
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
} from "../commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "../commands/SetIpAddressTypeCommand";
import { SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput } from "../commands/SetRulePrioritiesCommand";
import { SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput } from "../commands/SetSecurityGroupsCommand";
import { SetSubnetsCommandInput, SetSubnetsCommandOutput } from "../commands/SetSubnetsCommand";
import { ElasticLoadBalancingV2ServiceException as __BaseException } from "../models/ElasticLoadBalancingV2ServiceException";
import {
  Action,
  AddListenerCertificatesInput,
  AddListenerCertificatesOutput,
  AddTagsInput,
  AddTagsOutput,
  AllocationIdNotFoundException,
  ALPNPolicyNotSupportedException,
  AuthenticateCognitoActionConfig,
  AuthenticateOidcActionConfig,
  AvailabilityZone,
  AvailabilityZoneNotSupportedException,
  Certificate,
  CertificateNotFoundException,
  Cipher,
  CreateListenerInput,
  CreateListenerOutput,
  CreateLoadBalancerInput,
  CreateLoadBalancerOutput,
  CreateRuleInput,
  CreateRuleOutput,
  CreateTargetGroupInput,
  CreateTargetGroupOutput,
  DeleteListenerInput,
  DeleteListenerOutput,
  DeleteLoadBalancerInput,
  DeleteLoadBalancerOutput,
  DeleteRuleInput,
  DeleteRuleOutput,
  DeleteTargetGroupInput,
  DeleteTargetGroupOutput,
  DeregisterTargetsInput,
  DeregisterTargetsOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeListenerCertificatesInput,
  DescribeListenerCertificatesOutput,
  DescribeListenersInput,
  DescribeListenersOutput,
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancersInput,
  DescribeLoadBalancersOutput,
  DescribeRulesInput,
  DescribeRulesOutput,
  DescribeSSLPoliciesInput,
  DescribeSSLPoliciesOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DescribeTargetGroupAttributesInput,
  DescribeTargetGroupAttributesOutput,
  DescribeTargetGroupsInput,
  DescribeTargetGroupsOutput,
  DescribeTargetHealthInput,
  DescribeTargetHealthOutput,
  DuplicateListenerException,
  DuplicateLoadBalancerNameException,
  DuplicateTagKeysException,
  DuplicateTargetGroupNameException,
  FixedResponseActionConfig,
  ForwardActionConfig,
  HealthUnavailableException,
  HostHeaderConditionConfig,
  HttpHeaderConditionConfig,
  HttpRequestMethodConditionConfig,
  IncompatibleProtocolsException,
  InvalidConfigurationRequestException,
  InvalidLoadBalancerActionException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  InvalidTargetException,
  Limit,
  Listener,
  ListenerNotFoundException,
  LoadBalancer,
  LoadBalancerAddress,
  LoadBalancerAttribute,
  LoadBalancerNotFoundException,
  LoadBalancerState,
  Matcher,
  ModifyListenerInput,
  ModifyListenerOutput,
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  ModifyRuleInput,
  ModifyRuleOutput,
  ModifyTargetGroupAttributesInput,
  ModifyTargetGroupAttributesOutput,
  ModifyTargetGroupInput,
  ModifyTargetGroupOutput,
  OperationNotPermittedException,
  PathPatternConditionConfig,
  PriorityInUseException,
  QueryStringConditionConfig,
  QueryStringKeyValuePair,
  RedirectActionConfig,
  RegisterTargetsInput,
  RegisterTargetsOutput,
  RemoveListenerCertificatesInput,
  RemoveListenerCertificatesOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  ResourceInUseException,
  Rule,
  RuleCondition,
  RuleNotFoundException,
  RulePriorityPair,
  SetIpAddressTypeInput,
  SetIpAddressTypeOutput,
  SetRulePrioritiesInput,
  SetRulePrioritiesOutput,
  SetSecurityGroupsInput,
  SetSecurityGroupsOutput,
  SetSubnetsInput,
  SetSubnetsOutput,
  SourceIpConditionConfig,
  SslPolicy,
  SSLPolicyNotFoundException,
  SubnetMapping,
  SubnetNotFoundException,
  Tag,
  TagDescription,
  TargetDescription,
  TargetGroup,
  TargetGroupAssociationLimitException,
  TargetGroupAttribute,
  TargetGroupNotFoundException,
  TargetGroupStickinessConfig,
  TargetGroupTuple,
  TargetHealth,
  TargetHealthDescription,
  TooManyActionsException,
  TooManyCertificatesException,
  TooManyListenersException,
  TooManyLoadBalancersException,
  TooManyRegistrationsForTargetIdException,
  TooManyRulesException,
  TooManyTagsException,
  TooManyTargetGroupsException,
  TooManyTargetsException,
  TooManyUniqueTargetGroupsPerLoadBalancerException,
  UnsupportedProtocolException,
} from "../models/models_0";

/**
 * serializeAws_queryAddListenerCertificatesCommand
 */
export const se_AddListenerCertificatesCommand = async (
  input: AddListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddListenerCertificatesInput(input, context),
    Action: "AddListenerCertificates",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddTagsInput(input, context),
    Action: "AddTags",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateListenerCommand
 */
export const se_CreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateListenerInput(input, context),
    Action: "CreateListener",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLoadBalancerCommand
 */
export const se_CreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateLoadBalancerInput(input, context),
    Action: "CreateLoadBalancer",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateRuleInput(input, context),
    Action: "CreateRule",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTargetGroupCommand
 */
export const se_CreateTargetGroupCommand = async (
  input: CreateTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTargetGroupInput(input, context),
    Action: "CreateTargetGroup",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteListenerCommand
 */
export const se_DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteListenerInput(input, context),
    Action: "DeleteListener",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLoadBalancerCommand
 */
export const se_DeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteLoadBalancerInput(input, context),
    Action: "DeleteLoadBalancer",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteRuleInput(input, context),
    Action: "DeleteRule",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTargetGroupCommand
 */
export const se_DeleteTargetGroupCommand = async (
  input: DeleteTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTargetGroupInput(input, context),
    Action: "DeleteTargetGroup",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeregisterTargetsCommand
 */
export const se_DeregisterTargetsCommand = async (
  input: DeregisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeregisterTargetsInput(input, context),
    Action: "DeregisterTargets",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountLimitsCommand
 */
export const se_DescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeListenerCertificatesCommand
 */
export const se_DescribeListenerCertificatesCommand = async (
  input: DescribeListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeListenerCertificatesInput(input, context),
    Action: "DescribeListenerCertificates",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeListenersCommand
 */
export const se_DescribeListenersCommand = async (
  input: DescribeListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeListenersInput(input, context),
    Action: "DescribeListeners",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancerAttributesCommand
 */
export const se_DescribeLoadBalancerAttributesCommand = async (
  input: DescribeLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancerAttributesInput(input, context),
    Action: "DescribeLoadBalancerAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancersCommand
 */
export const se_DescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancersInput(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeRulesCommand
 */
export const se_DescribeRulesCommand = async (
  input: DescribeRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeRulesInput(input, context),
    Action: "DescribeRules",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSSLPoliciesCommand
 */
export const se_DescribeSSLPoliciesCommand = async (
  input: DescribeSSLPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSSLPoliciesInput(input, context),
    Action: "DescribeSSLPolicies",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTagsInput(input, context),
    Action: "DescribeTags",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTargetGroupAttributesCommand
 */
export const se_DescribeTargetGroupAttributesCommand = async (
  input: DescribeTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTargetGroupAttributesInput(input, context),
    Action: "DescribeTargetGroupAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTargetGroupsCommand
 */
export const se_DescribeTargetGroupsCommand = async (
  input: DescribeTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTargetGroupsInput(input, context),
    Action: "DescribeTargetGroups",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTargetHealthCommand
 */
export const se_DescribeTargetHealthCommand = async (
  input: DescribeTargetHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTargetHealthInput(input, context),
    Action: "DescribeTargetHealth",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyListenerCommand
 */
export const se_ModifyListenerCommand = async (
  input: ModifyListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyListenerInput(input, context),
    Action: "ModifyListener",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyLoadBalancerAttributesCommand
 */
export const se_ModifyLoadBalancerAttributesCommand = async (
  input: ModifyLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyLoadBalancerAttributesInput(input, context),
    Action: "ModifyLoadBalancerAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyRuleCommand
 */
export const se_ModifyRuleCommand = async (
  input: ModifyRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyRuleInput(input, context),
    Action: "ModifyRule",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyTargetGroupCommand
 */
export const se_ModifyTargetGroupCommand = async (
  input: ModifyTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyTargetGroupInput(input, context),
    Action: "ModifyTargetGroup",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyTargetGroupAttributesCommand
 */
export const se_ModifyTargetGroupAttributesCommand = async (
  input: ModifyTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyTargetGroupAttributesInput(input, context),
    Action: "ModifyTargetGroupAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterTargetsCommand
 */
export const se_RegisterTargetsCommand = async (
  input: RegisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterTargetsInput(input, context),
    Action: "RegisterTargets",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveListenerCertificatesCommand
 */
export const se_RemoveListenerCertificatesCommand = async (
  input: RemoveListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveListenerCertificatesInput(input, context),
    Action: "RemoveListenerCertificates",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveTagsInput(input, context),
    Action: "RemoveTags",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIpAddressTypeCommand
 */
export const se_SetIpAddressTypeCommand = async (
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIpAddressTypeInput(input, context),
    Action: "SetIpAddressType",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetRulePrioritiesCommand
 */
export const se_SetRulePrioritiesCommand = async (
  input: SetRulePrioritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetRulePrioritiesInput(input, context),
    Action: "SetRulePriorities",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSecurityGroupsCommand
 */
export const se_SetSecurityGroupsCommand = async (
  input: SetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSecurityGroupsInput(input, context),
    Action: "SetSecurityGroups",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSubnetsCommand
 */
export const se_SetSubnetsCommand = async (
  input: SetSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSubnetsInput(input, context),
    Action: "SetSubnets",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddListenerCertificatesCommand
 */
export const de_AddListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddListenerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddListenerCertificatesOutput(data.AddListenerCertificatesResult, context);
  const response: AddListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAddListenerCertificatesCommandError
 */
const de_AddListenerCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddListenerCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await de_TooManyCertificatesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsOutput(data.AddTagsResult, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAddTagsCommandError
 */
const de_AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateListenerCommand
 */
export const de_CreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateListenerOutput(data.CreateListenerResult, context);
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateListenerCommandError
 */
const de_CreateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ALPNPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
      throw await de_ALPNPolicyNotSupportedExceptionRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      throw await de_DuplicateListenerExceptionRes(parsedOutput, context);
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await de_IncompatibleProtocolsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await de_InvalidLoadBalancerActionExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "SSLPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      throw await de_SSLPolicyNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await de_TargetGroupAssociationLimitExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await de_TooManyActionsExceptionRes(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await de_TooManyCertificatesExceptionRes(parsedOutput, context);
    case "TooManyListeners":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      throw await de_TooManyListenersExceptionRes(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await de_TooManyRegistrationsForTargetIdExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await de_TooManyTargetsExceptionRes(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLoadBalancerCommand
 */
export const de_CreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLoadBalancerOutput(data.CreateLoadBalancerResult, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateLoadBalancerCommandError
 */
const de_CreateLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AllocationIdNotFound":
    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
      throw await de_AllocationIdNotFoundExceptionRes(parsedOutput, context);
    case "AvailabilityZoneNotSupported":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      throw await de_AvailabilityZoneNotSupportedExceptionRes(parsedOutput, context);
    case "DuplicateLoadBalancerName":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateLoadBalancerNameException":
      throw await de_DuplicateLoadBalancerNameExceptionRes(parsedOutput, context);
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidScheme":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSchemeException":
      throw await de_InvalidSchemeExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      throw await de_InvalidSecurityGroupExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      throw await de_SubnetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyLoadBalancers":
    case "com.amazonaws.elasticloadbalancingv2#TooManyLoadBalancersException":
      throw await de_TooManyLoadBalancersExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateRuleCommand
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
  contents = de_CreateRuleOutput(data.CreateRuleResult, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateRuleCommandError
 */
const de_CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await de_IncompatibleProtocolsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await de_InvalidLoadBalancerActionExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "PriorityInUse":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      throw await de_PriorityInUseExceptionRes(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await de_TargetGroupAssociationLimitExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await de_TooManyActionsExceptionRes(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await de_TooManyRegistrationsForTargetIdExceptionRes(parsedOutput, context);
    case "TooManyRules":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRulesException":
      throw await de_TooManyRulesExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "TooManyTargetGroups":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      throw await de_TooManyTargetGroupsExceptionRes(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await de_TooManyTargetsExceptionRes(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateTargetGroupCommand
 */
export const de_CreateTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTargetGroupOutput(data.CreateTargetGroupResult, context);
  const response: CreateTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateTargetGroupCommandError
 */
const de_CreateTargetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTargetGroupName":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTargetGroupNameException":
      throw await de_DuplicateTargetGroupNameExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "TooManyTargetGroups":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      throw await de_TooManyTargetGroupsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteListenerCommand
 */
export const de_DeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteListenerOutput(data.DeleteListenerResult, context);
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteListenerCommandError
 */
const de_DeleteListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteLoadBalancerCommand
 */
export const de_DeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLoadBalancerOutput(data.DeleteLoadBalancerResult, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLoadBalancerCommandError
 */
const de_DeleteLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteRuleCommand
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
  contents = de_DeleteRuleOutput(data.DeleteRuleResult, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRuleCommandError
 */
const de_DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteTargetGroupCommand
 */
export const de_DeleteTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTargetGroupOutput(data.DeleteTargetGroupResult, context);
  const response: DeleteTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTargetGroupCommandError
 */
const de_DeleteTargetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeregisterTargetsCommand
 */
export const de_DeregisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTargetsOutput(data.DeregisterTargetsResult, context);
  const response: DeregisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeregisterTargetsCommandError
 */
const de_DeregisterTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTarget":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommandError
 */
const de_DescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeListenerCertificatesCommand
 */
export const de_DescribeListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeListenerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeListenerCertificatesOutput(data.DescribeListenerCertificatesResult, context);
  const response: DescribeListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeListenerCertificatesCommandError
 */
const de_DescribeListenerCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeListenersCommand
 */
export const de_DescribeListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeListenersOutput(data.DescribeListenersResult, context);
  const response: DescribeListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeListenersCommandError
 */
const de_DescribeListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancerAttributesCommand
 */
export const de_DescribeLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancerAttributesOutput(data.DescribeLoadBalancerAttributesResult, context);
  const response: DescribeLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancerAttributesCommandError
 */
const de_DescribeLoadBalancerAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancersCommand
 */
export const de_DescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancersOutput(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancersCommandError
 */
const de_DescribeLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeRulesCommand
 */
export const de_DescribeRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRulesOutput(data.DescribeRulesResult, context);
  const response: DescribeRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeRulesCommandError
 */
const de_DescribeRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeSSLPoliciesCommand
 */
export const de_DescribeSSLPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSSLPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSSLPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSSLPoliciesOutput(data.DescribeSSLPoliciesResult, context);
  const response: DescribeSSLPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSSLPoliciesCommandError
 */
const de_DescribeSSLPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSSLPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SSLPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      throw await de_SSLPolicyNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsOutput(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTargetGroupAttributesCommand
 */
export const de_DescribeTargetGroupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTargetGroupAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetGroupAttributesOutput(data.DescribeTargetGroupAttributesResult, context);
  const response: DescribeTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTargetGroupAttributesCommandError
 */
const de_DescribeTargetGroupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTargetGroupsCommand
 */
export const de_DescribeTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetGroupsOutput(data.DescribeTargetGroupsResult, context);
  const response: DescribeTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTargetGroupsCommandError
 */
const de_DescribeTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTargetHealthCommand
 */
export const de_DescribeTargetHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTargetHealthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetHealthOutput(data.DescribeTargetHealthResult, context);
  const response: DescribeTargetHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTargetHealthCommandError
 */
const de_DescribeTargetHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthUnavailable":
    case "com.amazonaws.elasticloadbalancingv2#HealthUnavailableException":
      throw await de_HealthUnavailableExceptionRes(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyListenerCommand
 */
export const de_ModifyListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyListenerOutput(data.ModifyListenerResult, context);
  const response: ModifyListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyListenerCommandError
 */
const de_ModifyListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ALPNPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
      throw await de_ALPNPolicyNotSupportedExceptionRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      throw await de_DuplicateListenerExceptionRes(parsedOutput, context);
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await de_IncompatibleProtocolsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await de_InvalidLoadBalancerActionExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "SSLPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      throw await de_SSLPolicyNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await de_TargetGroupAssociationLimitExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await de_TooManyActionsExceptionRes(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await de_TooManyCertificatesExceptionRes(parsedOutput, context);
    case "TooManyListeners":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      throw await de_TooManyListenersExceptionRes(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await de_TooManyRegistrationsForTargetIdExceptionRes(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await de_TooManyTargetsExceptionRes(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesCommand
 */
export const de_ModifyLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
  const response: ModifyLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesCommandError
 */
const de_ModifyLoadBalancerAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyRuleCommand
 */
export const de_ModifyRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyRuleOutput(data.ModifyRuleResult, context);
  const response: ModifyRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyRuleCommandError
 */
const de_ModifyRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await de_IncompatibleProtocolsExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await de_InvalidLoadBalancerActionExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await de_TargetGroupAssociationLimitExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await de_TooManyActionsExceptionRes(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await de_TooManyRegistrationsForTargetIdExceptionRes(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await de_TooManyTargetsExceptionRes(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyTargetGroupCommand
 */
export const de_ModifyTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyTargetGroupOutput(data.ModifyTargetGroupResult, context);
  const response: ModifyTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyTargetGroupCommandError
 */
const de_ModifyTargetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyTargetGroupAttributesCommand
 */
export const de_ModifyTargetGroupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyTargetGroupAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyTargetGroupAttributesOutput(data.ModifyTargetGroupAttributesResult, context);
  const response: ModifyTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyTargetGroupAttributesCommandError
 */
const de_ModifyTargetGroupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRegisterTargetsCommand
 */
export const de_RegisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTargetsOutput(data.RegisterTargetsResult, context);
  const response: RegisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRegisterTargetsCommandError
 */
const de_RegisterTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTarget":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await de_TooManyRegistrationsForTargetIdExceptionRes(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await de_TooManyTargetsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveListenerCertificatesCommand
 */
export const de_RemoveListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveListenerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveListenerCertificatesOutput(data.RemoveListenerCertificatesResult, context);
  const response: RemoveListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveListenerCertificatesCommandError
 */
const de_RemoveListenerCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveListenerCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsOutput(data.RemoveTagsResult, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveTagsCommandError
 */
const de_RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetIpAddressTypeCommand
 */
export const de_SetIpAddressTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIpAddressTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIpAddressTypeOutput(data.SetIpAddressTypeResult, context);
  const response: SetIpAddressTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIpAddressTypeCommandError
 */
const de_SetIpAddressTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetRulePrioritiesCommand
 */
export const de_SetRulePrioritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRulePrioritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetRulePrioritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetRulePrioritiesOutput(data.SetRulePrioritiesResult, context);
  const response: SetRulePrioritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetRulePrioritiesCommandError
 */
const de_SetRulePrioritiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRulePrioritiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "PriorityInUse":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      throw await de_PriorityInUseExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetSecurityGroupsCommand
 */
export const de_SetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetSecurityGroupsOutput(data.SetSecurityGroupsResult, context);
  const response: SetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetSecurityGroupsCommandError
 */
const de_SetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      throw await de_InvalidSecurityGroupExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetSubnetsCommand
 */
export const de_SetSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetSubnetsOutput(data.SetSubnetsResult, context);
  const response: SetSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetSubnetsCommandError
 */
const de_SetSubnetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubnetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AllocationIdNotFound":
    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
      throw await de_AllocationIdNotFoundExceptionRes(parsedOutput, context);
    case "AvailabilityZoneNotSupported":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      throw await de_AvailabilityZoneNotSupportedExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      throw await de_SubnetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAllocationIdNotFoundExceptionRes
 */
const de_AllocationIdNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AllocationIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AllocationIdNotFoundException(body.Error, context);
  const exception = new AllocationIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryALPNPolicyNotSupportedExceptionRes
 */
const de_ALPNPolicyNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ALPNPolicyNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ALPNPolicyNotSupportedException(body.Error, context);
  const exception = new ALPNPolicyNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAvailabilityZoneNotSupportedExceptionRes
 */
const de_AvailabilityZoneNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZoneNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AvailabilityZoneNotSupportedException(body.Error, context);
  const exception = new AvailabilityZoneNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCertificateNotFoundExceptionRes
 */
const de_CertificateNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateNotFoundException(body.Error, context);
  const exception = new CertificateNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateListenerExceptionRes
 */
const de_DuplicateListenerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateListenerException(body.Error, context);
  const exception = new DuplicateListenerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateLoadBalancerNameExceptionRes
 */
const de_DuplicateLoadBalancerNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateLoadBalancerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateLoadBalancerNameException(body.Error, context);
  const exception = new DuplicateLoadBalancerNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateTagKeysExceptionRes
 */
const de_DuplicateTagKeysExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateTagKeysException(body.Error, context);
  const exception = new DuplicateTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateTargetGroupNameExceptionRes
 */
const de_DuplicateTargetGroupNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTargetGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateTargetGroupNameException(body.Error, context);
  const exception = new DuplicateTargetGroupNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHealthUnavailableExceptionRes
 */
const de_HealthUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HealthUnavailableException(body.Error, context);
  const exception = new HealthUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIncompatibleProtocolsExceptionRes
 */
const de_IncompatibleProtocolsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleProtocolsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncompatibleProtocolsException(body.Error, context);
  const exception = new IncompatibleProtocolsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidConfigurationRequestExceptionRes
 */
const de_InvalidConfigurationRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidConfigurationRequestException(body.Error, context);
  const exception = new InvalidConfigurationRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidLoadBalancerActionExceptionRes
 */
const de_InvalidLoadBalancerActionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLoadBalancerActionException(body.Error, context);
  const exception = new InvalidLoadBalancerActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSchemeExceptionRes
 */
const de_InvalidSchemeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSchemeException(body.Error, context);
  const exception = new InvalidSchemeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSecurityGroupExceptionRes
 */
const de_InvalidSecurityGroupExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSecurityGroupException(body.Error, context);
  const exception = new InvalidSecurityGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSubnetExceptionRes
 */
const de_InvalidSubnetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubnetException(body.Error, context);
  const exception = new InvalidSubnetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidTargetExceptionRes
 */
const de_InvalidTargetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetException(body.Error, context);
  const exception = new InvalidTargetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryListenerNotFoundExceptionRes
 */
const de_ListenerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ListenerNotFoundException(body.Error, context);
  const exception = new ListenerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLoadBalancerNotFoundExceptionRes
 */
const de_LoadBalancerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LoadBalancerNotFoundException(body.Error, context);
  const exception = new LoadBalancerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotPermittedException(body.Error, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPriorityInUseExceptionRes
 */
const de_PriorityInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorityInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PriorityInUseException(body.Error, context);
  const exception = new PriorityInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body.Error, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRuleNotFoundExceptionRes
 */
const de_RuleNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RuleNotFoundException(body.Error, context);
  const exception = new RuleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySSLPolicyNotFoundExceptionRes
 */
const de_SSLPolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SSLPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SSLPolicyNotFoundException(body.Error, context);
  const exception = new SSLPolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubnetNotFoundExceptionRes
 */
const de_SubnetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetNotFoundException(body.Error, context);
  const exception = new SubnetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTargetGroupAssociationLimitExceptionRes
 */
const de_TargetGroupAssociationLimitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupAssociationLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetGroupAssociationLimitException(body.Error, context);
  const exception = new TargetGroupAssociationLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTargetGroupNotFoundExceptionRes
 */
const de_TargetGroupNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetGroupNotFoundException(body.Error, context);
  const exception = new TargetGroupNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyActionsExceptionRes
 */
const de_TooManyActionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyActionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyActionsException(body.Error, context);
  const exception = new TooManyActionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyCertificatesExceptionRes
 */
const de_TooManyCertificatesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCertificatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyCertificatesException(body.Error, context);
  const exception = new TooManyCertificatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyListenersExceptionRes
 */
const de_TooManyListenersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyListenersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyListenersException(body.Error, context);
  const exception = new TooManyListenersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyLoadBalancersExceptionRes
 */
const de_TooManyLoadBalancersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLoadBalancersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyLoadBalancersException(body.Error, context);
  const exception = new TooManyLoadBalancersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyRegistrationsForTargetIdExceptionRes
 */
const de_TooManyRegistrationsForTargetIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRegistrationsForTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRegistrationsForTargetIdException(body.Error, context);
  const exception = new TooManyRegistrationsForTargetIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyRulesExceptionRes
 */
const de_TooManyRulesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRulesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRulesException(body.Error, context);
  const exception = new TooManyRulesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body.Error, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTargetGroupsExceptionRes
 */
const de_TooManyTargetGroupsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetGroupsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTargetGroupsException(body.Error, context);
  const exception = new TooManyTargetGroupsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTargetsExceptionRes
 */
const de_TooManyTargetsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTargetsException(body.Error, context);
  const exception = new TooManyTargetsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionRes
 */
const de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyUniqueTargetGroupsPerLoadBalancerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
  const exception = new TooManyUniqueTargetGroupsPerLoadBalancerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnsupportedProtocolExceptionRes
 */
const de_UnsupportedProtocolExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedProtocolException(body.Error, context);
  const exception = new UnsupportedProtocolException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAction
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.AuthenticateOidcConfig != null) {
    const memberEntries = se_AuthenticateOidcActionConfig(input.AuthenticateOidcConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateOidcConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AuthenticateCognitoConfig != null) {
    const memberEntries = se_AuthenticateCognitoActionConfig(input.AuthenticateCognitoConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateCognitoConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Order != null) {
    entries["Order"] = input.Order;
  }
  if (input.RedirectConfig != null) {
    const memberEntries = se_RedirectActionConfig(input.RedirectConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RedirectConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FixedResponseConfig != null) {
    const memberEntries = se_FixedResponseActionConfig(input.FixedResponseConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FixedResponseConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ForwardConfig != null) {
    const memberEntries = se_ForwardActionConfig(input.ForwardConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ForwardConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryActions
 */
const se_Actions = (input: Action[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Action(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAddListenerCertificatesInput
 */
const se_AddListenerCertificatesInput = (input: AddListenerCertificatesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Certificates != null) {
    const memberEntries = se_CertificateList(input.Certificates, context);
    if (input.Certificates?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAddTagsInput
 */
const se_AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns != null) {
    const memberEntries = se_ResourceArns(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAlpnPolicyName
 */
const se_AlpnPolicyName = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams
 */
const se_AuthenticateCognitoActionAuthenticationRequestExtraParams = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryAuthenticateCognitoActionConfig
 */
const se_AuthenticateCognitoActionConfig = (input: AuthenticateCognitoActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserPoolArn != null) {
    entries["UserPoolArn"] = input.UserPoolArn;
  }
  if (input.UserPoolClientId != null) {
    entries["UserPoolClientId"] = input.UserPoolClientId;
  }
  if (input.UserPoolDomain != null) {
    entries["UserPoolDomain"] = input.UserPoolDomain;
  }
  if (input.SessionCookieName != null) {
    entries["SessionCookieName"] = input.SessionCookieName;
  }
  if (input.Scope != null) {
    entries["Scope"] = input.Scope;
  }
  if (input.SessionTimeout != null) {
    entries["SessionTimeout"] = input.SessionTimeout;
  }
  if (input.AuthenticationRequestExtraParams != null) {
    const memberEntries = se_AuthenticateCognitoActionAuthenticationRequestExtraParams(
      input.AuthenticationRequestExtraParams,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OnUnauthenticatedRequest != null) {
    entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
  }
  return entries;
};

/**
 * serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams
 */
const se_AuthenticateOidcActionAuthenticationRequestExtraParams = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryAuthenticateOidcActionConfig
 */
const se_AuthenticateOidcActionConfig = (input: AuthenticateOidcActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Issuer != null) {
    entries["Issuer"] = input.Issuer;
  }
  if (input.AuthorizationEndpoint != null) {
    entries["AuthorizationEndpoint"] = input.AuthorizationEndpoint;
  }
  if (input.TokenEndpoint != null) {
    entries["TokenEndpoint"] = input.TokenEndpoint;
  }
  if (input.UserInfoEndpoint != null) {
    entries["UserInfoEndpoint"] = input.UserInfoEndpoint;
  }
  if (input.ClientId != null) {
    entries["ClientId"] = input.ClientId;
  }
  if (input.ClientSecret != null) {
    entries["ClientSecret"] = input.ClientSecret;
  }
  if (input.SessionCookieName != null) {
    entries["SessionCookieName"] = input.SessionCookieName;
  }
  if (input.Scope != null) {
    entries["Scope"] = input.Scope;
  }
  if (input.SessionTimeout != null) {
    entries["SessionTimeout"] = input.SessionTimeout;
  }
  if (input.AuthenticationRequestExtraParams != null) {
    const memberEntries = se_AuthenticateOidcActionAuthenticationRequestExtraParams(
      input.AuthenticationRequestExtraParams,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OnUnauthenticatedRequest != null) {
    entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
  }
  if (input.UseExistingClientSecret != null) {
    entries["UseExistingClientSecret"] = input.UseExistingClientSecret;
  }
  return entries;
};

/**
 * serializeAws_queryCertificate
 */
const se_Certificate = (input: Certificate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CertificateArn != null) {
    entries["CertificateArn"] = input.CertificateArn;
  }
  if (input.IsDefault != null) {
    entries["IsDefault"] = input.IsDefault;
  }
  return entries;
};

/**
 * serializeAws_queryCertificateList
 */
const se_CertificateList = (input: Certificate[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Certificate(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCreateListenerInput
 */
const se_CreateListenerInput = (input: CreateListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Protocol != null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.SslPolicy != null) {
    entries["SslPolicy"] = input.SslPolicy;
  }
  if (input.Certificates != null) {
    const memberEntries = se_CertificateList(input.Certificates, context);
    if (input.Certificates?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultActions != null) {
    const memberEntries = se_Actions(input.DefaultActions, context);
    if (input.DefaultActions?.length === 0) {
      entries.DefaultActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlpnPolicy != null) {
    const memberEntries = se_AlpnPolicyName(input.AlpnPolicy, context);
    if (input.AlpnPolicy?.length === 0) {
      entries.AlpnPolicy = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlpnPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateLoadBalancerInput
 */
const se_CreateLoadBalancerInput = (input: CreateLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Subnets != null) {
    const memberEntries = se_Subnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SubnetMappings != null) {
    const memberEntries = se_SubnetMappings(input.SubnetMappings, context);
    if (input.SubnetMappings?.length === 0) {
      entries.SubnetMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroups != null) {
    const memberEntries = se_SecurityGroups(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Scheme != null) {
    entries["Scheme"] = input.Scheme;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.IpAddressType != null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  if (input.CustomerOwnedIpv4Pool != null) {
    entries["CustomerOwnedIpv4Pool"] = input.CustomerOwnedIpv4Pool;
  }
  return entries;
};

/**
 * serializeAws_queryCreateRuleInput
 */
const se_CreateRuleInput = (input: CreateRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Conditions != null) {
    const memberEntries = se_RuleConditionList(input.Conditions, context);
    if (input.Conditions?.length === 0) {
      entries.Conditions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Priority != null) {
    entries["Priority"] = input.Priority;
  }
  if (input.Actions != null) {
    const memberEntries = se_Actions(input.Actions, context);
    if (input.Actions?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateTargetGroupInput
 */
const se_CreateTargetGroupInput = (input: CreateTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Protocol != null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.ProtocolVersion != null) {
    entries["ProtocolVersion"] = input.ProtocolVersion;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.VpcId != null) {
    entries["VpcId"] = input.VpcId;
  }
  if (input.HealthCheckProtocol != null) {
    entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.HealthCheckPort != null) {
    entries["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckEnabled != null) {
    entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
  }
  if (input.HealthCheckPath != null) {
    entries["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckIntervalSeconds != null) {
    entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckTimeoutSeconds != null) {
    entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
  }
  if (input.HealthyThresholdCount != null) {
    entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
  }
  if (input.UnhealthyThresholdCount != null) {
    entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
  }
  if (input.Matcher != null) {
    const memberEntries = se_Matcher(input.Matcher, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetType != null) {
    entries["TargetType"] = input.TargetType;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IpAddressType != null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteListenerInput
 */
const se_DeleteListenerInput = (input: DeleteListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoadBalancerInput
 */
const se_DeleteLoadBalancerInput = (input: DeleteLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRuleInput
 */
const se_DeleteRuleInput = (input: DeleteRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn != null) {
    entries["RuleArn"] = input.RuleArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTargetGroupInput
 */
const se_DeleteTargetGroupInput = (input: DeleteTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterTargetsInput
 */
const se_DeregisterTargetsInput = (input: DeregisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets != null) {
    const memberEntries = se_TargetDescriptions(input.Targets, context);
    if (input.Targets?.length === 0) {
      entries.Targets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Targets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountLimitsInput
 */
const se_DescribeAccountLimitsInput = (input: DescribeAccountLimitsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeListenerCertificatesInput
 */
const se_DescribeListenerCertificatesInput = (
  input: DescribeListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeListenersInput
 */
const se_DescribeListenersInput = (input: DescribeListenersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.ListenerArns != null) {
    const memberEntries = se_ListenerArns(input.ListenerArns, context);
    if (input.ListenerArns?.length === 0) {
      entries.ListenerArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListenerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancerAttributesInput
 */
const se_DescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancersInput
 */
const se_DescribeLoadBalancersInput = (input: DescribeLoadBalancersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArns != null) {
    const memberEntries = se_LoadBalancerArns(input.LoadBalancerArns, context);
    if (input.LoadBalancerArns?.length === 0) {
      entries.LoadBalancerArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Names != null) {
    const memberEntries = se_LoadBalancerNames(input.Names, context);
    if (input.Names?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeRulesInput
 */
const se_DescribeRulesInput = (input: DescribeRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.RuleArns != null) {
    const memberEntries = se_RuleArns(input.RuleArns, context);
    if (input.RuleArns?.length === 0) {
      entries.RuleArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeSSLPoliciesInput
 */
const se_DescribeSSLPoliciesInput = (input: DescribeSSLPoliciesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names != null) {
    const memberEntries = se_SslPolicyNames(input.Names, context);
    if (input.Names?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  if (input.LoadBalancerType != null) {
    entries["LoadBalancerType"] = input.LoadBalancerType;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTagsInput
 */
const se_DescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns != null) {
    const memberEntries = se_ResourceArns(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTargetGroupAttributesInput
 */
const se_DescribeTargetGroupAttributesInput = (
  input: DescribeTargetGroupAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTargetGroupsInput
 */
const se_DescribeTargetGroupsInput = (input: DescribeTargetGroupsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.TargetGroupArns != null) {
    const memberEntries = se_TargetGroupArns(input.TargetGroupArns, context);
    if (input.TargetGroupArns?.length === 0) {
      entries.TargetGroupArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Names != null) {
    const memberEntries = se_TargetGroupNames(input.Names, context);
    if (input.Names?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTargetHealthInput
 */
const se_DescribeTargetHealthInput = (input: DescribeTargetHealthInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets != null) {
    const memberEntries = se_TargetDescriptions(input.Targets, context);
    if (input.Targets?.length === 0) {
      entries.Targets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Targets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryFixedResponseActionConfig
 */
const se_FixedResponseActionConfig = (input: FixedResponseActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MessageBody != null) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.StatusCode != null) {
    entries["StatusCode"] = input.StatusCode;
  }
  if (input.ContentType != null) {
    entries["ContentType"] = input.ContentType;
  }
  return entries;
};

/**
 * serializeAws_queryForwardActionConfig
 */
const se_ForwardActionConfig = (input: ForwardActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroups != null) {
    const memberEntries = se_TargetGroupList(input.TargetGroups, context);
    if (input.TargetGroups?.length === 0) {
      entries.TargetGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupStickinessConfig != null) {
    const memberEntries = se_TargetGroupStickinessConfig(input.TargetGroupStickinessConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupStickinessConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryHostHeaderConditionConfig
 */
const se_HostHeaderConditionConfig = (input: HostHeaderConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = se_ListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryHttpHeaderConditionConfig
 */
const se_HttpHeaderConditionConfig = (input: HttpHeaderConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.HttpHeaderName != null) {
    entries["HttpHeaderName"] = input.HttpHeaderName;
  }
  if (input.Values != null) {
    const memberEntries = se_ListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryHttpRequestMethodConditionConfig
 */
const se_HttpRequestMethodConditionConfig = (input: HttpRequestMethodConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = se_ListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryListenerArns
 */
const se_ListenerArns = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryListOfString
 */
const se_ListOfString = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerArns
 */
const se_LoadBalancerArns = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerAttribute
 */
const se_LoadBalancerAttribute = (input: LoadBalancerAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerAttributes
 */
const se_LoadBalancerAttributes = (input: LoadBalancerAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_LoadBalancerAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerNames
 */
const se_LoadBalancerNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMatcher
 */
const se_Matcher = (input: Matcher, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.HttpCode != null) {
    entries["HttpCode"] = input.HttpCode;
  }
  if (input.GrpcCode != null) {
    entries["GrpcCode"] = input.GrpcCode;
  }
  return entries;
};

/**
 * serializeAws_queryModifyListenerInput
 */
const se_ModifyListenerInput = (input: ModifyListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.Protocol != null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.SslPolicy != null) {
    entries["SslPolicy"] = input.SslPolicy;
  }
  if (input.Certificates != null) {
    const memberEntries = se_CertificateList(input.Certificates, context);
    if (input.Certificates?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultActions != null) {
    const memberEntries = se_Actions(input.DefaultActions, context);
    if (input.DefaultActions?.length === 0) {
      entries.DefaultActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlpnPolicy != null) {
    const memberEntries = se_AlpnPolicyName(input.AlpnPolicy, context);
    if (input.AlpnPolicy?.length === 0) {
      entries.AlpnPolicy = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlpnPolicy.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyLoadBalancerAttributesInput
 */
const se_ModifyLoadBalancerAttributesInput = (
  input: ModifyLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Attributes != null) {
    const memberEntries = se_LoadBalancerAttributes(input.Attributes, context);
    if (input.Attributes?.length === 0) {
      entries.Attributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyRuleInput
 */
const se_ModifyRuleInput = (input: ModifyRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn != null) {
    entries["RuleArn"] = input.RuleArn;
  }
  if (input.Conditions != null) {
    const memberEntries = se_RuleConditionList(input.Conditions, context);
    if (input.Conditions?.length === 0) {
      entries.Conditions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Actions != null) {
    const memberEntries = se_Actions(input.Actions, context);
    if (input.Actions?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyTargetGroupAttributesInput
 */
const se_ModifyTargetGroupAttributesInput = (input: ModifyTargetGroupAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Attributes != null) {
    const memberEntries = se_TargetGroupAttributes(input.Attributes, context);
    if (input.Attributes?.length === 0) {
      entries.Attributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyTargetGroupInput
 */
const se_ModifyTargetGroupInput = (input: ModifyTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.HealthCheckProtocol != null) {
    entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.HealthCheckPort != null) {
    entries["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckPath != null) {
    entries["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckEnabled != null) {
    entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
  }
  if (input.HealthCheckIntervalSeconds != null) {
    entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckTimeoutSeconds != null) {
    entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
  }
  if (input.HealthyThresholdCount != null) {
    entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
  }
  if (input.UnhealthyThresholdCount != null) {
    entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
  }
  if (input.Matcher != null) {
    const memberEntries = se_Matcher(input.Matcher, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPathPatternConditionConfig
 */
const se_PathPatternConditionConfig = (input: PathPatternConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = se_ListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryQueryStringConditionConfig
 */
const se_QueryStringConditionConfig = (input: QueryStringConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = se_QueryStringKeyValuePairList(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryQueryStringKeyValuePair
 */
const se_QueryStringKeyValuePair = (input: QueryStringKeyValuePair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryQueryStringKeyValuePairList
 */
const se_QueryStringKeyValuePairList = (input: QueryStringKeyValuePair[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_QueryStringKeyValuePair(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRedirectActionConfig
 */
const se_RedirectActionConfig = (input: RedirectActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Protocol != null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.Host != null) {
    entries["Host"] = input.Host;
  }
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.Query != null) {
    entries["Query"] = input.Query;
  }
  if (input.StatusCode != null) {
    entries["StatusCode"] = input.StatusCode;
  }
  return entries;
};

/**
 * serializeAws_queryRegisterTargetsInput
 */
const se_RegisterTargetsInput = (input: RegisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets != null) {
    const memberEntries = se_TargetDescriptions(input.Targets, context);
    if (input.Targets?.length === 0) {
      entries.Targets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Targets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRemoveListenerCertificatesInput
 */
const se_RemoveListenerCertificatesInput = (input: RemoveListenerCertificatesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Certificates != null) {
    const memberEntries = se_CertificateList(input.Certificates, context);
    if (input.Certificates?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRemoveTagsInput
 */
const se_RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns != null) {
    const memberEntries = se_ResourceArns(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagKeys != null) {
    const memberEntries = se_TagKeys(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryResourceArns
 */
const se_ResourceArns = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRuleArns
 */
const se_RuleArns = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRuleCondition
 */
const se_RuleCondition = (input: RuleCondition, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Field != null) {
    entries["Field"] = input.Field;
  }
  if (input.Values != null) {
    const memberEntries = se_ListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HostHeaderConfig != null) {
    const memberEntries = se_HostHeaderConditionConfig(input.HostHeaderConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HostHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PathPatternConfig != null) {
    const memberEntries = se_PathPatternConditionConfig(input.PathPatternConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PathPatternConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HttpHeaderConfig != null) {
    const memberEntries = se_HttpHeaderConditionConfig(input.HttpHeaderConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.QueryStringConfig != null) {
    const memberEntries = se_QueryStringConditionConfig(input.QueryStringConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `QueryStringConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HttpRequestMethodConfig != null) {
    const memberEntries = se_HttpRequestMethodConditionConfig(input.HttpRequestMethodConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpRequestMethodConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceIpConfig != null) {
    const memberEntries = se_SourceIpConditionConfig(input.SourceIpConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIpConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRuleConditionList
 */
const se_RuleConditionList = (input: RuleCondition[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RuleCondition(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRulePriorityList
 */
const se_RulePriorityList = (input: RulePriorityPair[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RulePriorityPair(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRulePriorityPair
 */
const se_RulePriorityPair = (input: RulePriorityPair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn != null) {
    entries["RuleArn"] = input.RuleArn;
  }
  if (input.Priority != null) {
    entries["Priority"] = input.Priority;
  }
  return entries;
};

/**
 * serializeAws_querySecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySetIpAddressTypeInput
 */
const se_SetIpAddressTypeInput = (input: SetIpAddressTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.IpAddressType != null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  return entries;
};

/**
 * serializeAws_querySetRulePrioritiesInput
 */
const se_SetRulePrioritiesInput = (input: SetRulePrioritiesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RulePriorities != null) {
    const memberEntries = se_RulePriorityList(input.RulePriorities, context);
    if (input.RulePriorities?.length === 0) {
      entries.RulePriorities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RulePriorities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySetSecurityGroupsInput
 */
const se_SetSecurityGroupsInput = (input: SetSecurityGroupsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.SecurityGroups != null) {
    const memberEntries = se_SecurityGroups(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic != null) {
    entries["EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"] =
      input.EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic;
  }
  return entries;
};

/**
 * serializeAws_querySetSubnetsInput
 */
const se_SetSubnetsInput = (input: SetSubnetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Subnets != null) {
    const memberEntries = se_Subnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SubnetMappings != null) {
    const memberEntries = se_SubnetMappings(input.SubnetMappings, context);
    if (input.SubnetMappings?.length === 0) {
      entries.SubnetMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IpAddressType != null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  return entries;
};

/**
 * serializeAws_querySourceIpConditionConfig
 */
const se_SourceIpConditionConfig = (input: SourceIpConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = se_ListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySslPolicyNames
 */
const se_SslPolicyNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySubnetMapping
 */
const se_SubnetMapping = (input: SubnetMapping, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubnetId != null) {
    entries["SubnetId"] = input.SubnetId;
  }
  if (input.AllocationId != null) {
    entries["AllocationId"] = input.AllocationId;
  }
  if (input.PrivateIPv4Address != null) {
    entries["PrivateIPv4Address"] = input.PrivateIPv4Address;
  }
  if (input.IPv6Address != null) {
    entries["IPv6Address"] = input.IPv6Address;
  }
  return entries;
};

/**
 * serializeAws_querySubnetMappings
 */
const se_SubnetMappings = (input: SubnetMapping[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_SubnetMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySubnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryTagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetDescription
 */
const se_TargetDescription = (input: TargetDescription, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.Port != null) {
    entries["Port"] = input.Port;
  }
  if (input.AvailabilityZone != null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  return entries;
};

/**
 * serializeAws_queryTargetDescriptions
 */
const se_TargetDescriptions = (input: TargetDescription[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetDescription(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupArns
 */
const se_TargetGroupArns = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupAttribute
 */
const se_TargetGroupAttribute = (input: TargetGroupAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupAttributes
 */
const se_TargetGroupAttributes = (input: TargetGroupAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetGroupAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupList
 */
const se_TargetGroupList = (input: TargetGroupTuple[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetGroupTuple(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupNames
 */
const se_TargetGroupNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupStickinessConfig
 */
const se_TargetGroupStickinessConfig = (input: TargetGroupStickinessConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupTuple
 */
const se_TargetGroupTuple = (input: TargetGroupTuple, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Weight != null) {
    entries["Weight"] = input.Weight;
  }
  return entries;
};

/**
 * deserializeAws_queryAction
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  const contents: any = {};
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["AuthenticateOidcConfig"] !== undefined) {
    contents.AuthenticateOidcConfig = de_AuthenticateOidcActionConfig(output["AuthenticateOidcConfig"], context);
  }
  if (output["AuthenticateCognitoConfig"] !== undefined) {
    contents.AuthenticateCognitoConfig = de_AuthenticateCognitoActionConfig(
      output["AuthenticateCognitoConfig"],
      context
    );
  }
  if (output["Order"] !== undefined) {
    contents.Order = __strictParseInt32(output["Order"]) as number;
  }
  if (output["RedirectConfig"] !== undefined) {
    contents.RedirectConfig = de_RedirectActionConfig(output["RedirectConfig"], context);
  }
  if (output["FixedResponseConfig"] !== undefined) {
    contents.FixedResponseConfig = de_FixedResponseActionConfig(output["FixedResponseConfig"], context);
  }
  if (output["ForwardConfig"] !== undefined) {
    contents.ForwardConfig = de_ForwardActionConfig(output["ForwardConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryActions
 */
const de_Actions = (output: any, context: __SerdeContext): Action[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Action(entry, context);
    });
};

/**
 * deserializeAws_queryAddListenerCertificatesOutput
 */
const de_AddListenerCertificatesOutput = (output: any, context: __SerdeContext): AddListenerCertificatesOutput => {
  const contents: any = {};
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = de_CertificateList(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryAllocationIdNotFoundException
 */
const de_AllocationIdNotFoundException = (output: any, context: __SerdeContext): AllocationIdNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAlpnPolicyName
 */
const de_AlpnPolicyName = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryALPNPolicyNotSupportedException
 */
const de_ALPNPolicyNotSupportedException = (output: any, context: __SerdeContext): ALPNPolicyNotSupportedException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams
 */
const de_AuthenticateCognitoActionAuthenticationRequestExtraParams = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryAuthenticateCognitoActionConfig
 */
const de_AuthenticateCognitoActionConfig = (output: any, context: __SerdeContext): AuthenticateCognitoActionConfig => {
  const contents: any = {};
  if (output["UserPoolArn"] !== undefined) {
    contents.UserPoolArn = __expectString(output["UserPoolArn"]);
  }
  if (output["UserPoolClientId"] !== undefined) {
    contents.UserPoolClientId = __expectString(output["UserPoolClientId"]);
  }
  if (output["UserPoolDomain"] !== undefined) {
    contents.UserPoolDomain = __expectString(output["UserPoolDomain"]);
  }
  if (output["SessionCookieName"] !== undefined) {
    contents.SessionCookieName = __expectString(output["SessionCookieName"]);
  }
  if (output["Scope"] !== undefined) {
    contents.Scope = __expectString(output["Scope"]);
  }
  if (output["SessionTimeout"] !== undefined) {
    contents.SessionTimeout = __strictParseLong(output["SessionTimeout"]) as number;
  }
  if (output.AuthenticationRequestExtraParams === "") {
    contents.AuthenticationRequestExtraParams = {};
  } else if (
    output["AuthenticationRequestExtraParams"] !== undefined &&
    output["AuthenticationRequestExtraParams"]["entry"] !== undefined
  ) {
    contents.AuthenticationRequestExtraParams = de_AuthenticateCognitoActionAuthenticationRequestExtraParams(
      __getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]),
      context
    );
  }
  if (output["OnUnauthenticatedRequest"] !== undefined) {
    contents.OnUnauthenticatedRequest = __expectString(output["OnUnauthenticatedRequest"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams
 */
const de_AuthenticateOidcActionAuthenticationRequestExtraParams = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryAuthenticateOidcActionConfig
 */
const de_AuthenticateOidcActionConfig = (output: any, context: __SerdeContext): AuthenticateOidcActionConfig => {
  const contents: any = {};
  if (output["Issuer"] !== undefined) {
    contents.Issuer = __expectString(output["Issuer"]);
  }
  if (output["AuthorizationEndpoint"] !== undefined) {
    contents.AuthorizationEndpoint = __expectString(output["AuthorizationEndpoint"]);
  }
  if (output["TokenEndpoint"] !== undefined) {
    contents.TokenEndpoint = __expectString(output["TokenEndpoint"]);
  }
  if (output["UserInfoEndpoint"] !== undefined) {
    contents.UserInfoEndpoint = __expectString(output["UserInfoEndpoint"]);
  }
  if (output["ClientId"] !== undefined) {
    contents.ClientId = __expectString(output["ClientId"]);
  }
  if (output["ClientSecret"] !== undefined) {
    contents.ClientSecret = __expectString(output["ClientSecret"]);
  }
  if (output["SessionCookieName"] !== undefined) {
    contents.SessionCookieName = __expectString(output["SessionCookieName"]);
  }
  if (output["Scope"] !== undefined) {
    contents.Scope = __expectString(output["Scope"]);
  }
  if (output["SessionTimeout"] !== undefined) {
    contents.SessionTimeout = __strictParseLong(output["SessionTimeout"]) as number;
  }
  if (output.AuthenticationRequestExtraParams === "") {
    contents.AuthenticationRequestExtraParams = {};
  } else if (
    output["AuthenticationRequestExtraParams"] !== undefined &&
    output["AuthenticationRequestExtraParams"]["entry"] !== undefined
  ) {
    contents.AuthenticationRequestExtraParams = de_AuthenticateOidcActionAuthenticationRequestExtraParams(
      __getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]),
      context
    );
  }
  if (output["OnUnauthenticatedRequest"] !== undefined) {
    contents.OnUnauthenticatedRequest = __expectString(output["OnUnauthenticatedRequest"]);
  }
  if (output["UseExistingClientSecret"] !== undefined) {
    contents.UseExistingClientSecret = __parseBoolean(output["UseExistingClientSecret"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {};
  if (output["ZoneName"] !== undefined) {
    contents.ZoneName = __expectString(output["ZoneName"]);
  }
  if (output["SubnetId"] !== undefined) {
    contents.SubnetId = __expectString(output["SubnetId"]);
  }
  if (output["OutpostId"] !== undefined) {
    contents.OutpostId = __expectString(output["OutpostId"]);
  }
  if (output.LoadBalancerAddresses === "") {
    contents.LoadBalancerAddresses = [];
  } else if (output["LoadBalancerAddresses"] !== undefined && output["LoadBalancerAddresses"]["member"] !== undefined) {
    contents.LoadBalancerAddresses = de_LoadBalancerAddresses(
      __getArrayIfSingleItem(output["LoadBalancerAddresses"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZoneNotSupportedException
 */
const de_AvailabilityZoneNotSupportedException = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneNotSupportedException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AvailabilityZone(entry, context);
    });
};

/**
 * deserializeAws_queryCertificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  const contents: any = {};
  if (output["CertificateArn"] !== undefined) {
    contents.CertificateArn = __expectString(output["CertificateArn"]);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateList
 */
const de_CertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Certificate(entry, context);
    });
};

/**
 * deserializeAws_queryCertificateNotFoundException
 */
const de_CertificateNotFoundException = (output: any, context: __SerdeContext): CertificateNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCipher
 */
const de_Cipher = (output: any, context: __SerdeContext): Cipher => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(output["Priority"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCiphers
 */
const de_Ciphers = (output: any, context: __SerdeContext): Cipher[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cipher(entry, context);
    });
};

/**
 * deserializeAws_queryCreateListenerOutput
 */
const de_CreateListenerOutput = (output: any, context: __SerdeContext): CreateListenerOutput => {
  const contents: any = {};
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = de_Listeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateLoadBalancerOutput
 */
const de_CreateLoadBalancerOutput = (output: any, context: __SerdeContext): CreateLoadBalancerOutput => {
  const contents: any = {};
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = de_LoadBalancers(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateRuleOutput
 */
const de_CreateRuleOutput = (output: any, context: __SerdeContext): CreateRuleOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = de_Rules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateTargetGroupOutput
 */
const de_CreateTargetGroupOutput = (output: any, context: __SerdeContext): CreateTargetGroupOutput => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = de_TargetGroups(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteListenerOutput
 */
const de_DeleteListenerOutput = (output: any, context: __SerdeContext): DeleteListenerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteLoadBalancerOutput
 */
const de_DeleteLoadBalancerOutput = (output: any, context: __SerdeContext): DeleteLoadBalancerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteRuleOutput
 */
const de_DeleteRuleOutput = (output: any, context: __SerdeContext): DeleteRuleOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteTargetGroupOutput
 */
const de_DeleteTargetGroupOutput = (output: any, context: __SerdeContext): DeleteTargetGroupOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeregisterTargetsOutput
 */
const de_DeregisterTargetsOutput = (output: any, context: __SerdeContext): DeregisterTargetsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountLimitsOutput
 */
const de_DescribeAccountLimitsOutput = (output: any, context: __SerdeContext): DescribeAccountLimitsOutput => {
  const contents: any = {};
  if (output.Limits === "") {
    contents.Limits = [];
  } else if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
    contents.Limits = de_Limits(__getArrayIfSingleItem(output["Limits"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeListenerCertificatesOutput
 */
const de_DescribeListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): DescribeListenerCertificatesOutput => {
  const contents: any = {};
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = de_CertificateList(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeListenersOutput
 */
const de_DescribeListenersOutput = (output: any, context: __SerdeContext): DescribeListenersOutput => {
  const contents: any = {};
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = de_Listeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancerAttributesOutput
 */
const de_DescribeLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = de_LoadBalancerAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancersOutput
 */
const de_DescribeLoadBalancersOutput = (output: any, context: __SerdeContext): DescribeLoadBalancersOutput => {
  const contents: any = {};
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = de_LoadBalancers(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeRulesOutput
 */
const de_DescribeRulesOutput = (output: any, context: __SerdeContext): DescribeRulesOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = de_Rules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSSLPoliciesOutput
 */
const de_DescribeSSLPoliciesOutput = (output: any, context: __SerdeContext): DescribeSSLPoliciesOutput => {
  const contents: any = {};
  if (output.SslPolicies === "") {
    contents.SslPolicies = [];
  } else if (output["SslPolicies"] !== undefined && output["SslPolicies"]["member"] !== undefined) {
    contents.SslPolicies = de_SslPolicies(__getArrayIfSingleItem(output["SslPolicies"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTagsOutput
 */
const de_DescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  const contents: any = {};
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  } else if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
    contents.TagDescriptions = de_TagDescriptions(__getArrayIfSingleItem(output["TagDescriptions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTargetGroupAttributesOutput
 */
const de_DescribeTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTargetGroupAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = de_TargetGroupAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTargetGroupsOutput
 */
const de_DescribeTargetGroupsOutput = (output: any, context: __SerdeContext): DescribeTargetGroupsOutput => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = de_TargetGroups(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTargetHealthOutput
 */
const de_DescribeTargetHealthOutput = (output: any, context: __SerdeContext): DescribeTargetHealthOutput => {
  const contents: any = {};
  if (output.TargetHealthDescriptions === "") {
    contents.TargetHealthDescriptions = [];
  } else if (
    output["TargetHealthDescriptions"] !== undefined &&
    output["TargetHealthDescriptions"]["member"] !== undefined
  ) {
    contents.TargetHealthDescriptions = de_TargetHealthDescriptions(
      __getArrayIfSingleItem(output["TargetHealthDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateListenerException
 */
const de_DuplicateListenerException = (output: any, context: __SerdeContext): DuplicateListenerException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateLoadBalancerNameException
 */
const de_DuplicateLoadBalancerNameException = (
  output: any,
  context: __SerdeContext
): DuplicateLoadBalancerNameException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateTagKeysException
 */
const de_DuplicateTagKeysException = (output: any, context: __SerdeContext): DuplicateTagKeysException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateTargetGroupNameException
 */
const de_DuplicateTargetGroupNameException = (
  output: any,
  context: __SerdeContext
): DuplicateTargetGroupNameException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryFixedResponseActionConfig
 */
const de_FixedResponseActionConfig = (output: any, context: __SerdeContext): FixedResponseActionConfig => {
  const contents: any = {};
  if (output["MessageBody"] !== undefined) {
    contents.MessageBody = __expectString(output["MessageBody"]);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = __expectString(output["StatusCode"]);
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = __expectString(output["ContentType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryForwardActionConfig
 */
const de_ForwardActionConfig = (output: any, context: __SerdeContext): ForwardActionConfig => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = de_TargetGroupList(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
  }
  if (output["TargetGroupStickinessConfig"] !== undefined) {
    contents.TargetGroupStickinessConfig = de_TargetGroupStickinessConfig(
      output["TargetGroupStickinessConfig"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryHealthUnavailableException
 */
const de_HealthUnavailableException = (output: any, context: __SerdeContext): HealthUnavailableException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHostHeaderConditionConfig
 */
const de_HostHeaderConditionConfig = (output: any, context: __SerdeContext): HostHeaderConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_ListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHttpHeaderConditionConfig
 */
const de_HttpHeaderConditionConfig = (output: any, context: __SerdeContext): HttpHeaderConditionConfig => {
  const contents: any = {};
  if (output["HttpHeaderName"] !== undefined) {
    contents.HttpHeaderName = __expectString(output["HttpHeaderName"]);
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_ListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHttpRequestMethodConditionConfig
 */
const de_HttpRequestMethodConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpRequestMethodConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_ListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIncompatibleProtocolsException
 */
const de_IncompatibleProtocolsException = (output: any, context: __SerdeContext): IncompatibleProtocolsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidConfigurationRequestException
 */
const de_InvalidConfigurationRequestException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRequestException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidLoadBalancerActionException
 */
const de_InvalidLoadBalancerActionException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerActionException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSchemeException
 */
const de_InvalidSchemeException = (output: any, context: __SerdeContext): InvalidSchemeException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSecurityGroupException
 */
const de_InvalidSecurityGroupException = (output: any, context: __SerdeContext): InvalidSecurityGroupException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnetException
 */
const de_InvalidSubnetException = (output: any, context: __SerdeContext): InvalidSubnetException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTargetException
 */
const de_InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimit
 */
const de_Limit = (output: any, context: __SerdeContext): Limit => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Max"] !== undefined) {
    contents.Max = __expectString(output["Max"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimits
 */
const de_Limits = (output: any, context: __SerdeContext): Limit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Limit(entry, context);
    });
};

/**
 * deserializeAws_queryListener
 */
const de_Listener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {};
  if (output["ListenerArn"] !== undefined) {
    contents.ListenerArn = __expectString(output["ListenerArn"]);
  }
  if (output["LoadBalancerArn"] !== undefined) {
    contents.LoadBalancerArn = __expectString(output["LoadBalancerArn"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = de_CertificateList(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
  }
  if (output["SslPolicy"] !== undefined) {
    contents.SslPolicy = __expectString(output["SslPolicy"]);
  }
  if (output.DefaultActions === "") {
    contents.DefaultActions = [];
  } else if (output["DefaultActions"] !== undefined && output["DefaultActions"]["member"] !== undefined) {
    contents.DefaultActions = de_Actions(__getArrayIfSingleItem(output["DefaultActions"]["member"]), context);
  }
  if (output.AlpnPolicy === "") {
    contents.AlpnPolicy = [];
  } else if (output["AlpnPolicy"] !== undefined && output["AlpnPolicy"]["member"] !== undefined) {
    contents.AlpnPolicy = de_AlpnPolicyName(__getArrayIfSingleItem(output["AlpnPolicy"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListenerNotFoundException
 */
const de_ListenerNotFoundException = (output: any, context: __SerdeContext): ListenerNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListeners
 */
const de_Listeners = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Listener(entry, context);
    });
};

/**
 * deserializeAws_queryListOfString
 */
const de_ListOfString = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryLoadBalancer
 */
const de_LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  const contents: any = {};
  if (output["LoadBalancerArn"] !== undefined) {
    contents.LoadBalancerArn = __expectString(output["LoadBalancerArn"]);
  }
  if (output["DNSName"] !== undefined) {
    contents.DNSName = __expectString(output["DNSName"]);
  }
  if (output["CanonicalHostedZoneId"] !== undefined) {
    contents.CanonicalHostedZoneId = __expectString(output["CanonicalHostedZoneId"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["Scheme"] !== undefined) {
    contents.Scheme = __expectString(output["Scheme"]);
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["State"] !== undefined) {
    contents.State = de_LoadBalancerState(output["State"], context);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = de_SecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
  }
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  if (output["CustomerOwnedIpv4Pool"] !== undefined) {
    contents.CustomerOwnedIpv4Pool = __expectString(output["CustomerOwnedIpv4Pool"]);
  }
  if (output["EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"] !== undefined) {
    contents.EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic = __expectString(
      output["EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"]
    );
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAddress
 */
const de_LoadBalancerAddress = (output: any, context: __SerdeContext): LoadBalancerAddress => {
  const contents: any = {};
  if (output["IpAddress"] !== undefined) {
    contents.IpAddress = __expectString(output["IpAddress"]);
  }
  if (output["AllocationId"] !== undefined) {
    contents.AllocationId = __expectString(output["AllocationId"]);
  }
  if (output["PrivateIPv4Address"] !== undefined) {
    contents.PrivateIPv4Address = __expectString(output["PrivateIPv4Address"]);
  }
  if (output["IPv6Address"] !== undefined) {
    contents.IPv6Address = __expectString(output["IPv6Address"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAddresses
 */
const de_LoadBalancerAddresses = (output: any, context: __SerdeContext): LoadBalancerAddress[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerAddress(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerArns
 */
const de_LoadBalancerArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryLoadBalancerAttribute
 */
const de_LoadBalancerAttribute = (output: any, context: __SerdeContext): LoadBalancerAttribute => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAttributes
 */
const de_LoadBalancerAttributes = (output: any, context: __SerdeContext): LoadBalancerAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerNotFoundException
 */
const de_LoadBalancerNotFoundException = (output: any, context: __SerdeContext): LoadBalancerNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancers
 */
const de_LoadBalancers = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancer(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerState
 */
const de_LoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = __expectString(output["Reason"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMatcher
 */
const de_Matcher = (output: any, context: __SerdeContext): Matcher => {
  const contents: any = {};
  if (output["HttpCode"] !== undefined) {
    contents.HttpCode = __expectString(output["HttpCode"]);
  }
  if (output["GrpcCode"] !== undefined) {
    contents.GrpcCode = __expectString(output["GrpcCode"]);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyListenerOutput
 */
const de_ModifyListenerOutput = (output: any, context: __SerdeContext): ModifyListenerOutput => {
  const contents: any = {};
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = de_Listeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesOutput
 */
const de_ModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = de_LoadBalancerAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyRuleOutput
 */
const de_ModifyRuleOutput = (output: any, context: __SerdeContext): ModifyRuleOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = de_Rules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyTargetGroupAttributesOutput
 */
const de_ModifyTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyTargetGroupAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = de_TargetGroupAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyTargetGroupOutput
 */
const de_ModifyTargetGroupOutput = (output: any, context: __SerdeContext): ModifyTargetGroupOutput => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = de_TargetGroups(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPathPatternConditionConfig
 */
const de_PathPatternConditionConfig = (output: any, context: __SerdeContext): PathPatternConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_ListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPriorityInUseException
 */
const de_PriorityInUseException = (output: any, context: __SerdeContext): PriorityInUseException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueryStringConditionConfig
 */
const de_QueryStringConditionConfig = (output: any, context: __SerdeContext): QueryStringConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_QueryStringKeyValuePairList(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryQueryStringKeyValuePair
 */
const de_QueryStringKeyValuePair = (output: any, context: __SerdeContext): QueryStringKeyValuePair => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueryStringKeyValuePairList
 */
const de_QueryStringKeyValuePairList = (output: any, context: __SerdeContext): QueryStringKeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryStringKeyValuePair(entry, context);
    });
};

/**
 * deserializeAws_queryRedirectActionConfig
 */
const de_RedirectActionConfig = (output: any, context: __SerdeContext): RedirectActionConfig => {
  const contents: any = {};
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __expectString(output["Port"]);
  }
  if (output["Host"] !== undefined) {
    contents.Host = __expectString(output["Host"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["Query"] !== undefined) {
    contents.Query = __expectString(output["Query"]);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = __expectString(output["StatusCode"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterTargetsOutput
 */
const de_RegisterTargetsOutput = (output: any, context: __SerdeContext): RegisterTargetsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRemoveListenerCertificatesOutput
 */
const de_RemoveListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): RemoveListenerCertificatesOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRemoveTagsOutput
 */
const de_RemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  const contents: any = {};
  if (output["RuleArn"] !== undefined) {
    contents.RuleArn = __expectString(output["RuleArn"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __expectString(output["Priority"]);
  }
  if (output.Conditions === "") {
    contents.Conditions = [];
  } else if (output["Conditions"] !== undefined && output["Conditions"]["member"] !== undefined) {
    contents.Conditions = de_RuleConditionList(__getArrayIfSingleItem(output["Conditions"]["member"]), context);
  }
  if (output.Actions === "") {
    contents.Actions = [];
  } else if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
    contents.Actions = de_Actions(__getArrayIfSingleItem(output["Actions"]["member"]), context);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRuleCondition
 */
const de_RuleCondition = (output: any, context: __SerdeContext): RuleCondition => {
  const contents: any = {};
  if (output["Field"] !== undefined) {
    contents.Field = __expectString(output["Field"]);
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_ListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  if (output["HostHeaderConfig"] !== undefined) {
    contents.HostHeaderConfig = de_HostHeaderConditionConfig(output["HostHeaderConfig"], context);
  }
  if (output["PathPatternConfig"] !== undefined) {
    contents.PathPatternConfig = de_PathPatternConditionConfig(output["PathPatternConfig"], context);
  }
  if (output["HttpHeaderConfig"] !== undefined) {
    contents.HttpHeaderConfig = de_HttpHeaderConditionConfig(output["HttpHeaderConfig"], context);
  }
  if (output["QueryStringConfig"] !== undefined) {
    contents.QueryStringConfig = de_QueryStringConditionConfig(output["QueryStringConfig"], context);
  }
  if (output["HttpRequestMethodConfig"] !== undefined) {
    contents.HttpRequestMethodConfig = de_HttpRequestMethodConditionConfig(output["HttpRequestMethodConfig"], context);
  }
  if (output["SourceIpConfig"] !== undefined) {
    contents.SourceIpConfig = de_SourceIpConditionConfig(output["SourceIpConfig"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRuleConditionList
 */
const de_RuleConditionList = (output: any, context: __SerdeContext): RuleCondition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleCondition(entry, context);
    });
};

/**
 * deserializeAws_queryRuleNotFoundException
 */
const de_RuleNotFoundException = (output: any, context: __SerdeContext): RuleNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRules
 */
const de_Rules = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Rule(entry, context);
    });
};

/**
 * deserializeAws_querySecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySetIpAddressTypeOutput
 */
const de_SetIpAddressTypeOutput = (output: any, context: __SerdeContext): SetIpAddressTypeOutput => {
  const contents: any = {};
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  return contents;
};

/**
 * deserializeAws_querySetRulePrioritiesOutput
 */
const de_SetRulePrioritiesOutput = (output: any, context: __SerdeContext): SetRulePrioritiesOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = de_Rules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySetSecurityGroupsOutput
 */
const de_SetSecurityGroupsOutput = (output: any, context: __SerdeContext): SetSecurityGroupsOutput => {
  const contents: any = {};
  if (output.SecurityGroupIds === "") {
    contents.SecurityGroupIds = [];
  } else if (output["SecurityGroupIds"] !== undefined && output["SecurityGroupIds"]["member"] !== undefined) {
    contents.SecurityGroupIds = de_SecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroupIds"]["member"]),
      context
    );
  }
  if (output["EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"] !== undefined) {
    contents.EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic = __expectString(
      output["EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"]
    );
  }
  return contents;
};

/**
 * deserializeAws_querySetSubnetsOutput
 */
const de_SetSubnetsOutput = (output: any, context: __SerdeContext): SetSubnetsOutput => {
  const contents: any = {};
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceIpConditionConfig
 */
const de_SourceIpConditionConfig = (output: any, context: __SerdeContext): SourceIpConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_ListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySslPolicies
 */
const de_SslPolicies = (output: any, context: __SerdeContext): SslPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SslPolicy(entry, context);
    });
};

/**
 * deserializeAws_querySslPolicy
 */
const de_SslPolicy = (output: any, context: __SerdeContext): SslPolicy => {
  const contents: any = {};
  if (output.SslProtocols === "") {
    contents.SslProtocols = [];
  } else if (output["SslProtocols"] !== undefined && output["SslProtocols"]["member"] !== undefined) {
    contents.SslProtocols = de_SslProtocols(__getArrayIfSingleItem(output["SslProtocols"]["member"]), context);
  }
  if (output.Ciphers === "") {
    contents.Ciphers = [];
  } else if (output["Ciphers"] !== undefined && output["Ciphers"]["member"] !== undefined) {
    contents.Ciphers = de_Ciphers(__getArrayIfSingleItem(output["Ciphers"]["member"]), context);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.SupportedLoadBalancerTypes === "") {
    contents.SupportedLoadBalancerTypes = [];
  } else if (
    output["SupportedLoadBalancerTypes"] !== undefined &&
    output["SupportedLoadBalancerTypes"]["member"] !== undefined
  ) {
    contents.SupportedLoadBalancerTypes = de_ListOfString(
      __getArrayIfSingleItem(output["SupportedLoadBalancerTypes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_querySSLPolicyNotFoundException
 */
const de_SSLPolicyNotFoundException = (output: any, context: __SerdeContext): SSLPolicyNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySslProtocols
 */
const de_SslProtocols = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySubnetNotFoundException
 */
const de_SubnetNotFoundException = (output: any, context: __SerdeContext): SubnetNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescription
 */
const de_TagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {};
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = __expectString(output["ResourceArn"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescriptions
 */
const de_TagDescriptions = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TagDescription(entry, context);
    });
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTargetDescription
 */
const de_TargetDescription = (output: any, context: __SerdeContext): TargetDescription => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroup
 */
const de_TargetGroup = (output: any, context: __SerdeContext): TargetGroup => {
  const contents: any = {};
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["TargetGroupName"] !== undefined) {
    contents.TargetGroupName = __expectString(output["TargetGroupName"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt32(output["Port"]) as number;
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  if (output["HealthCheckProtocol"] !== undefined) {
    contents.HealthCheckProtocol = __expectString(output["HealthCheckProtocol"]);
  }
  if (output["HealthCheckPort"] !== undefined) {
    contents.HealthCheckPort = __expectString(output["HealthCheckPort"]);
  }
  if (output["HealthCheckEnabled"] !== undefined) {
    contents.HealthCheckEnabled = __parseBoolean(output["HealthCheckEnabled"]);
  }
  if (output["HealthCheckIntervalSeconds"] !== undefined) {
    contents.HealthCheckIntervalSeconds = __strictParseInt32(output["HealthCheckIntervalSeconds"]) as number;
  }
  if (output["HealthCheckTimeoutSeconds"] !== undefined) {
    contents.HealthCheckTimeoutSeconds = __strictParseInt32(output["HealthCheckTimeoutSeconds"]) as number;
  }
  if (output["HealthyThresholdCount"] !== undefined) {
    contents.HealthyThresholdCount = __strictParseInt32(output["HealthyThresholdCount"]) as number;
  }
  if (output["UnhealthyThresholdCount"] !== undefined) {
    contents.UnhealthyThresholdCount = __strictParseInt32(output["UnhealthyThresholdCount"]) as number;
  }
  if (output["HealthCheckPath"] !== undefined) {
    contents.HealthCheckPath = __expectString(output["HealthCheckPath"]);
  }
  if (output["Matcher"] !== undefined) {
    contents.Matcher = de_Matcher(output["Matcher"], context);
  }
  if (output.LoadBalancerArns === "") {
    contents.LoadBalancerArns = [];
  } else if (output["LoadBalancerArns"] !== undefined && output["LoadBalancerArns"]["member"] !== undefined) {
    contents.LoadBalancerArns = de_LoadBalancerArns(
      __getArrayIfSingleItem(output["LoadBalancerArns"]["member"]),
      context
    );
  }
  if (output["TargetType"] !== undefined) {
    contents.TargetType = __expectString(output["TargetType"]);
  }
  if (output["ProtocolVersion"] !== undefined) {
    contents.ProtocolVersion = __expectString(output["ProtocolVersion"]);
  }
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupAssociationLimitException
 */
const de_TargetGroupAssociationLimitException = (
  output: any,
  context: __SerdeContext
): TargetGroupAssociationLimitException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupAttribute
 */
const de_TargetGroupAttribute = (output: any, context: __SerdeContext): TargetGroupAttribute => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupAttributes
 */
const de_TargetGroupAttributes = (output: any, context: __SerdeContext): TargetGroupAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroupAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryTargetGroupList
 */
const de_TargetGroupList = (output: any, context: __SerdeContext): TargetGroupTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroupTuple(entry, context);
    });
};

/**
 * deserializeAws_queryTargetGroupNotFoundException
 */
const de_TargetGroupNotFoundException = (output: any, context: __SerdeContext): TargetGroupNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroups
 */
const de_TargetGroups = (output: any, context: __SerdeContext): TargetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroup(entry, context);
    });
};

/**
 * deserializeAws_queryTargetGroupStickinessConfig
 */
const de_TargetGroupStickinessConfig = (output: any, context: __SerdeContext): TargetGroupStickinessConfig => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["DurationSeconds"] !== undefined) {
    contents.DurationSeconds = __strictParseInt32(output["DurationSeconds"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupTuple
 */
const de_TargetGroupTuple = (output: any, context: __SerdeContext): TargetGroupTuple => {
  const contents: any = {};
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["Weight"] !== undefined) {
    contents.Weight = __strictParseInt32(output["Weight"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTargetHealth
 */
const de_TargetHealth = (output: any, context: __SerdeContext): TargetHealth => {
  const contents: any = {};
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = __expectString(output["Reason"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetHealthDescription
 */
const de_TargetHealthDescription = (output: any, context: __SerdeContext): TargetHealthDescription => {
  const contents: any = {};
  if (output["Target"] !== undefined) {
    contents.Target = de_TargetDescription(output["Target"], context);
  }
  if (output["HealthCheckPort"] !== undefined) {
    contents.HealthCheckPort = __expectString(output["HealthCheckPort"]);
  }
  if (output["TargetHealth"] !== undefined) {
    contents.TargetHealth = de_TargetHealth(output["TargetHealth"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetHealthDescriptions
 */
const de_TargetHealthDescriptions = (output: any, context: __SerdeContext): TargetHealthDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetHealthDescription(entry, context);
    });
};

/**
 * deserializeAws_queryTooManyActionsException
 */
const de_TooManyActionsException = (output: any, context: __SerdeContext): TooManyActionsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyCertificatesException
 */
const de_TooManyCertificatesException = (output: any, context: __SerdeContext): TooManyCertificatesException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyListenersException
 */
const de_TooManyListenersException = (output: any, context: __SerdeContext): TooManyListenersException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyLoadBalancersException
 */
const de_TooManyLoadBalancersException = (output: any, context: __SerdeContext): TooManyLoadBalancersException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyRegistrationsForTargetIdException
 */
const de_TooManyRegistrationsForTargetIdException = (
  output: any,
  context: __SerdeContext
): TooManyRegistrationsForTargetIdException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyRulesException
 */
const de_TooManyRulesException = (output: any, context: __SerdeContext): TooManyRulesException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTargetGroupsException
 */
const de_TooManyTargetGroupsException = (output: any, context: __SerdeContext): TooManyTargetGroupsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTargetsException
 */
const de_TooManyTargetsException = (output: any, context: __SerdeContext): TooManyTargetsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException
 */
const de_TooManyUniqueTargetGroupsPerLoadBalancerException = (
  output: any,
  context: __SerdeContext
): TooManyUniqueTargetGroupsPerLoadBalancerException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedProtocolException
 */
const de_UnsupportedProtocolException = (output: any, context: __SerdeContext): UnsupportedProtocolException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
