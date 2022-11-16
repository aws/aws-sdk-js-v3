// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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

export const serializeAws_queryAddListenerCertificatesCommand = async (
  input: AddListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddListenerCertificatesInput(input, context),
    Action: "AddListenerCertificates",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddTagsInput(input, context),
    Action: "AddTags",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateListenerInput(input, context),
    Action: "CreateListener",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLoadBalancerInput(input, context),
    Action: "CreateLoadBalancer",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateRuleInput(input, context),
    Action: "CreateRule",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateTargetGroupCommand = async (
  input: CreateTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateTargetGroupInput(input, context),
    Action: "CreateTargetGroup",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteListenerInput(input, context),
    Action: "DeleteListener",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLoadBalancerInput(input, context),
    Action: "DeleteLoadBalancer",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteRuleInput(input, context),
    Action: "DeleteRule",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTargetGroupCommand = async (
  input: DeleteTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTargetGroupInput(input, context),
    Action: "DeleteTargetGroup",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeregisterTargetsCommand = async (
  input: DeregisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeregisterTargetsInput(input, context),
    Action: "DeregisterTargets",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeListenerCertificatesCommand = async (
  input: DescribeListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeListenerCertificatesInput(input, context),
    Action: "DescribeListenerCertificates",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeListenersCommand = async (
  input: DescribeListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeListenersInput(input, context),
    Action: "DescribeListeners",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancerAttributesCommand = async (
  input: DescribeLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerAttributesInput(input, context),
    Action: "DescribeLoadBalancerAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancersInput(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeRulesCommand = async (
  input: DescribeRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeRulesInput(input, context),
    Action: "DescribeRules",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSSLPoliciesCommand = async (
  input: DescribeSSLPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSSLPoliciesInput(input, context),
    Action: "DescribeSSLPolicies",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTagsInput(input, context),
    Action: "DescribeTags",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTargetGroupAttributesCommand = async (
  input: DescribeTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTargetGroupAttributesInput(input, context),
    Action: "DescribeTargetGroupAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTargetGroupsCommand = async (
  input: DescribeTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTargetGroupsInput(input, context),
    Action: "DescribeTargetGroups",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTargetHealthCommand = async (
  input: DescribeTargetHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTargetHealthInput(input, context),
    Action: "DescribeTargetHealth",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyListenerCommand = async (
  input: ModifyListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyListenerInput(input, context),
    Action: "ModifyListener",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyLoadBalancerAttributesCommand = async (
  input: ModifyLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyLoadBalancerAttributesInput(input, context),
    Action: "ModifyLoadBalancerAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyRuleCommand = async (
  input: ModifyRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyRuleInput(input, context),
    Action: "ModifyRule",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyTargetGroupCommand = async (
  input: ModifyTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyTargetGroupInput(input, context),
    Action: "ModifyTargetGroup",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyTargetGroupAttributesCommand = async (
  input: ModifyTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyTargetGroupAttributesInput(input, context),
    Action: "ModifyTargetGroupAttributes",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRegisterTargetsCommand = async (
  input: RegisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRegisterTargetsInput(input, context),
    Action: "RegisterTargets",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveListenerCertificatesCommand = async (
  input: RemoveListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveListenerCertificatesInput(input, context),
    Action: "RemoveListenerCertificates",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveTagsInput(input, context),
    Action: "RemoveTags",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetIpAddressTypeCommand = async (
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetIpAddressTypeInput(input, context),
    Action: "SetIpAddressType",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetRulePrioritiesCommand = async (
  input: SetRulePrioritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetRulePrioritiesInput(input, context),
    Action: "SetRulePriorities",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSecurityGroupsCommand = async (
  input: SetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSecurityGroupsInput(input, context),
    Action: "SetSecurityGroups",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSubnetsCommand = async (
  input: SetSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSubnetsInput(input, context),
    Action: "SetSubnets",
    Version: "2015-12-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddListenerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddListenerCertificatesOutput(data.AddListenerCertificatesResult, context);
  const response: AddListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddListenerCertificatesCommandError = async (
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
      throw await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddTagsCommandError = async (
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
      throw await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateListenerOutput(data.CreateListenerResult, context);
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateListenerCommandError = async (
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
      throw await deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      throw await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      throw await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context);
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "SSLPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      throw await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context);
    case "TooManyListeners":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      throw await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoadBalancerOutput(data.CreateLoadBalancerResult, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context);
    case "AvailabilityZoneNotSupported":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      throw await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context);
    case "DuplicateLoadBalancerName":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateLoadBalancerNameException":
      throw await deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse(parsedOutput, context);
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
      throw await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidScheme":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSchemeException":
      throw await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      throw await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      throw await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyLoadBalancers":
    case "com.amazonaws.elasticloadbalancingv2#TooManyLoadBalancersException":
      throw await deserializeAws_queryTooManyLoadBalancersExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateRuleOutput(data.CreateRuleResult, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateRuleCommandError = async (
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
      throw await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "PriorityInUse":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      throw await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context);
    case "TooManyRules":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRulesException":
      throw await deserializeAws_queryTooManyRulesExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    case "TooManyTargetGroups":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      throw await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateTargetGroupOutput(data.CreateTargetGroupResult, context);
  const response: CreateTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateTargetGroupCommandError = async (
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
      throw await deserializeAws_queryDuplicateTargetGroupNameExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    case "TooManyTargetGroups":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      throw await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteListenerOutput(data.DeleteListenerResult, context);
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteListenerCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLoadBalancerOutput(data.DeleteLoadBalancerResult, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteRuleOutput(data.DeleteRuleResult, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteRuleCommandError = async (
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
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteTargetGroupOutput(data.DeleteTargetGroupResult, context);
  const response: DeleteTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTargetGroupCommandError = async (
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
      throw await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeregisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeregisterTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterTargetsOutput(data.DeregisterTargetsResult, context);
  const response: DeregisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeregisterTargetsCommandError = async (
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
      throw await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeListenerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeListenerCertificatesOutput(data.DescribeListenerCertificatesResult, context);
  const response: DescribeListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeListenerCertificatesCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeListenersOutput(data.DescribeListenersResult, context);
  const response: DescribeListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeListenersCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(
    data.DescribeLoadBalancerAttributesResult,
    context
  );
  const response: DescribeLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancerAttributesCommandError = async (
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
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancersOutput(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancersCommandError = async (
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
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeRulesOutput(data.DescribeRulesResult, context);
  const response: DescribeRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeRulesCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeSSLPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSSLPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeSSLPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSSLPoliciesOutput(data.DescribeSSLPoliciesResult, context);
  const response: DescribeSSLPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSSLPoliciesCommandError = async (
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
      throw await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTagsOutput(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTagsCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTargetGroupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTargetGroupAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTargetGroupAttributesOutput(data.DescribeTargetGroupAttributesResult, context);
  const response: DescribeTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTargetGroupAttributesCommandError = async (
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
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTargetGroupsOutput(data.DescribeTargetGroupsResult, context);
  const response: DescribeTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTargetGroupsCommandError = async (
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
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTargetHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTargetHealthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTargetHealthOutput(data.DescribeTargetHealthResult, context);
  const response: DescribeTargetHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTargetHealthCommandError = async (
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
      throw await deserializeAws_queryHealthUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      throw await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyListenerOutput(data.ModifyListenerResult, context);
  const response: ModifyListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyListenerCommandError = async (
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
      throw await deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      throw await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      throw await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context);
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "SSLPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      throw await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context);
    case "TooManyListeners":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      throw await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
  const response: ModifyLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyLoadBalancerAttributesCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyRuleOutput(data.ModifyRuleResult, context);
  const response: ModifyRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyRuleCommandError = async (
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
      throw await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyTargetGroupOutput(data.ModifyTargetGroupResult, context);
  const response: ModifyTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyTargetGroupCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyTargetGroupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyTargetGroupAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyTargetGroupAttributesOutput(data.ModifyTargetGroupAttributesResult, context);
  const response: ModifyTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyTargetGroupAttributesCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRegisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRegisterTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterTargetsOutput(data.RegisterTargetsResult, context);
  const response: RegisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRegisterTargetsCommandError = async (
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
      throw await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRemoveListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveListenerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveListenerCertificatesOutput(data.RemoveListenerCertificatesResult, context);
  const response: RemoveListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveListenerCertificatesCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveTagsOutput(data.RemoveTagsResult, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveTagsCommandError = async (
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
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetIpAddressTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetIpAddressTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIpAddressTypeOutput(data.SetIpAddressTypeResult, context);
  const response: SetIpAddressTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetIpAddressTypeCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetRulePrioritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRulePrioritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetRulePrioritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetRulePrioritiesOutput(data.SetRulePrioritiesResult, context);
  const response: SetRulePrioritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetRulePrioritiesCommandError = async (
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
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    case "PriorityInUse":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      throw await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetSecurityGroupsOutput(data.SetSecurityGroupsResult, context);
  const response: SetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSecurityGroupsCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      throw await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetSubnetsOutput(data.SetSubnetsResult, context);
  const response: SetSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSubnetsCommandError = async (
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
      throw await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context);
    case "AvailabilityZoneNotSupported":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      throw await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      throw await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_queryAllocationIdNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AllocationIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAllocationIdNotFoundException(body.Error, context);
  const exception = new AllocationIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryALPNPolicyNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ALPNPolicyNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryALPNPolicyNotSupportedException(body.Error, context);
  const exception = new ALPNPolicyNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZoneNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAvailabilityZoneNotSupportedException(body.Error, context);
  const exception = new AvailabilityZoneNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCertificateNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundException(body.Error, context);
  const exception = new CertificateNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateListenerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateListenerException(body.Error, context);
  const exception = new DuplicateListenerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateLoadBalancerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateLoadBalancerNameException(body.Error, context);
  const exception = new DuplicateLoadBalancerNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
  const exception = new DuplicateTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateTargetGroupNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTargetGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTargetGroupNameException(body.Error, context);
  const exception = new DuplicateTargetGroupNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryHealthUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHealthUnavailableException(body.Error, context);
  const exception = new HealthUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryIncompatibleProtocolsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleProtocolsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIncompatibleProtocolsException(body.Error, context);
  const exception = new IncompatibleProtocolsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
  const exception = new InvalidConfigurationRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidLoadBalancerActionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidLoadBalancerActionException(body.Error, context);
  const exception = new InvalidLoadBalancerActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSchemeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSchemeException(body.Error, context);
  const exception = new InvalidSchemeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityGroupException(body.Error, context);
  const exception = new InvalidSecurityGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSubnetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnetException(body.Error, context);
  const exception = new InvalidSubnetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidTargetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTargetException(body.Error, context);
  const exception = new InvalidTargetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryListenerNotFoundException(body.Error, context);
  const exception = new ListenerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryLoadBalancerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLoadBalancerNotFoundException(body.Error, context);
  const exception = new LoadBalancerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotPermittedException(body.Error, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPriorityInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorityInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPriorityInUseException(body.Error, context);
  const exception = new PriorityInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceInUseException(body.Error, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryRuleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRuleNotFoundException(body.Error, context);
  const exception = new RuleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySSLPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SSLPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySSLPolicyNotFoundException(body.Error, context);
  const exception = new SSLPolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubnetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetNotFoundException(body.Error, context);
  const exception = new SubnetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTargetGroupAssociationLimitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupAssociationLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTargetGroupAssociationLimitException(body.Error, context);
  const exception = new TargetGroupAssociationLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTargetGroupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTargetGroupNotFoundException(body.Error, context);
  const exception = new TargetGroupNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyActionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyActionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyActionsException(body.Error, context);
  const exception = new TooManyActionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyCertificatesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCertificatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyCertificatesException(body.Error, context);
  const exception = new TooManyCertificatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyListenersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyListenersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyListenersException(body.Error, context);
  const exception = new TooManyListenersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyLoadBalancersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLoadBalancersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyLoadBalancersException(body.Error, context);
  const exception = new TooManyLoadBalancersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRegistrationsForTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyRegistrationsForTargetIdException(body.Error, context);
  const exception = new TooManyRegistrationsForTargetIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyRulesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRulesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyRulesException(body.Error, context);
  const exception = new TooManyRulesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(body.Error, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyTargetGroupsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetGroupsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTargetGroupsException(body.Error, context);
  const exception = new TooManyTargetGroupsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyTargetsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTargetsException(body.Error, context);
  const exception = new TooManyTargetsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyUniqueTargetGroupsPerLoadBalancerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
  const exception = new TooManyUniqueTargetGroupsPerLoadBalancerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
  const exception = new UnsupportedProtocolException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAction = (input: Action, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.AuthenticateOidcConfig != null) {
    const memberEntries = serializeAws_queryAuthenticateOidcActionConfig(input.AuthenticateOidcConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateOidcConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AuthenticateCognitoConfig != null) {
    const memberEntries = serializeAws_queryAuthenticateCognitoActionConfig(input.AuthenticateCognitoConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateCognitoConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Order != null) {
    entries["Order"] = input.Order;
  }
  if (input.RedirectConfig != null) {
    const memberEntries = serializeAws_queryRedirectActionConfig(input.RedirectConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RedirectConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FixedResponseConfig != null) {
    const memberEntries = serializeAws_queryFixedResponseActionConfig(input.FixedResponseConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FixedResponseConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ForwardConfig != null) {
    const memberEntries = serializeAws_queryForwardActionConfig(input.ForwardConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ForwardConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryActions = (input: Action[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryAction(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryAddListenerCertificatesInput = (
  input: AddListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Certificates != null) {
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
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

const serializeAws_queryAddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns != null) {
    const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryAlpnPolicyName = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (
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

const serializeAws_queryAuthenticateCognitoActionConfig = (
  input: AuthenticateCognitoActionConfig,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(
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

const serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (
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

const serializeAws_queryAuthenticateOidcActionConfig = (
  input: AuthenticateOidcActionConfig,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(
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

const serializeAws_queryCertificate = (input: Certificate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CertificateArn != null) {
    entries["CertificateArn"] = input.CertificateArn;
  }
  if (input.IsDefault != null) {
    entries["IsDefault"] = input.IsDefault;
  }
  return entries;
};

const serializeAws_queryCertificateList = (input: Certificate[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryCertificate(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCreateListenerInput = (input: CreateListenerInput, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
    if (input.Certificates?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultActions != null) {
    const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
    if (input.DefaultActions?.length === 0) {
      entries.DefaultActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlpnPolicy != null) {
    const memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
    if (input.AlpnPolicy?.length === 0) {
      entries.AlpnPolicy = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlpnPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateLoadBalancerInput = (input: CreateLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Subnets != null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SubnetMappings != null) {
    const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
    if (input.SubnetMappings?.length === 0) {
      entries.SubnetMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroups != null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateRuleInput = (input: CreateRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Conditions != null) {
    const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
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
    const memberEntries = serializeAws_queryActions(input.Actions, context);
    if (input.Actions?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateTargetGroupInput = (input: CreateTargetGroupInput, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetType != null) {
    entries["TargetType"] = input.TargetType;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryDeleteListenerInput = (input: DeleteListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  return entries;
};

const serializeAws_queryDeleteLoadBalancerInput = (input: DeleteLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryDeleteRuleInput = (input: DeleteRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn != null) {
    entries["RuleArn"] = input.RuleArn;
  }
  return entries;
};

const serializeAws_queryDeleteTargetGroupInput = (input: DeleteTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryDeregisterTargetsInput = (input: DeregisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets != null) {
    const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
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

const serializeAws_queryDescribeAccountLimitsInput = (
  input: DescribeAccountLimitsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeListenerCertificatesInput = (
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

const serializeAws_queryDescribeListenersInput = (input: DescribeListenersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.ListenerArns != null) {
    const memberEntries = serializeAws_queryListenerArns(input.ListenerArns, context);
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

const serializeAws_queryDescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancersInput = (
  input: DescribeLoadBalancersInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArns != null) {
    const memberEntries = serializeAws_queryLoadBalancerArns(input.LoadBalancerArns, context);
    if (input.LoadBalancerArns?.length === 0) {
      entries.LoadBalancerArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Names != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.Names, context);
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

const serializeAws_queryDescribeRulesInput = (input: DescribeRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.RuleArns != null) {
    const memberEntries = serializeAws_queryRuleArns(input.RuleArns, context);
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

const serializeAws_queryDescribeSSLPoliciesInput = (input: DescribeSSLPoliciesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names != null) {
    const memberEntries = serializeAws_querySslPolicyNames(input.Names, context);
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

const serializeAws_queryDescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns != null) {
    const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
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

const serializeAws_queryDescribeTargetGroupAttributesInput = (
  input: DescribeTargetGroupAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryDescribeTargetGroupsInput = (
  input: DescribeTargetGroupsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.TargetGroupArns != null) {
    const memberEntries = serializeAws_queryTargetGroupArns(input.TargetGroupArns, context);
    if (input.TargetGroupArns?.length === 0) {
      entries.TargetGroupArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Names != null) {
    const memberEntries = serializeAws_queryTargetGroupNames(input.Names, context);
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

const serializeAws_queryDescribeTargetHealthInput = (
  input: DescribeTargetHealthInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets != null) {
    const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
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

const serializeAws_queryFixedResponseActionConfig = (
  input: FixedResponseActionConfig,
  context: __SerdeContext
): any => {
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

const serializeAws_queryForwardActionConfig = (input: ForwardActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroups != null) {
    const memberEntries = serializeAws_queryTargetGroupList(input.TargetGroups, context);
    if (input.TargetGroups?.length === 0) {
      entries.TargetGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupStickinessConfig != null) {
    const memberEntries = serializeAws_queryTargetGroupStickinessConfig(input.TargetGroupStickinessConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupStickinessConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryHostHeaderConditionConfig = (
  input: HostHeaderConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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

const serializeAws_queryHttpHeaderConditionConfig = (
  input: HttpHeaderConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HttpHeaderName != null) {
    entries["HttpHeaderName"] = input.HttpHeaderName;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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

const serializeAws_queryHttpRequestMethodConditionConfig = (
  input: HttpRequestMethodConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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

const serializeAws_queryListenerArns = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryListOfString = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryLoadBalancerArns = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryLoadBalancerAttribute = (input: LoadBalancerAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryLoadBalancerAttributes = (input: LoadBalancerAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryLoadBalancerAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryMatcher = (input: Matcher, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.HttpCode != null) {
    entries["HttpCode"] = input.HttpCode;
  }
  if (input.GrpcCode != null) {
    entries["GrpcCode"] = input.GrpcCode;
  }
  return entries;
};

const serializeAws_queryModifyListenerInput = (input: ModifyListenerInput, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
    if (input.Certificates?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultActions != null) {
    const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
    if (input.DefaultActions?.length === 0) {
      entries.DefaultActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlpnPolicy != null) {
    const memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
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

const serializeAws_queryModifyLoadBalancerAttributesInput = (
  input: ModifyLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryLoadBalancerAttributes(input.Attributes, context);
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

const serializeAws_queryModifyRuleInput = (input: ModifyRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn != null) {
    entries["RuleArn"] = input.RuleArn;
  }
  if (input.Conditions != null) {
    const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
    if (input.Conditions?.length === 0) {
      entries.Conditions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Actions != null) {
    const memberEntries = serializeAws_queryActions(input.Actions, context);
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

const serializeAws_queryModifyTargetGroupAttributesInput = (
  input: ModifyTargetGroupAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryTargetGroupAttributes(input.Attributes, context);
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

const serializeAws_queryModifyTargetGroupInput = (input: ModifyTargetGroupInput, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPathPatternConditionConfig = (
  input: PathPatternConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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

const serializeAws_queryQueryStringConditionConfig = (
  input: QueryStringConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = serializeAws_queryQueryStringKeyValuePairList(input.Values, context);
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

const serializeAws_queryQueryStringKeyValuePair = (input: QueryStringKeyValuePair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryQueryStringKeyValuePairList = (
  input: QueryStringKeyValuePair[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryQueryStringKeyValuePair(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRedirectActionConfig = (input: RedirectActionConfig, context: __SerdeContext): any => {
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

const serializeAws_queryRegisterTargetsInput = (input: RegisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets != null) {
    const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
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

const serializeAws_queryRemoveListenerCertificatesInput = (
  input: RemoveListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn != null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Certificates != null) {
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
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

const serializeAws_queryRemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns != null) {
    const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeys(input.TagKeys, context);
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

const serializeAws_queryResourceArns = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryRuleArns = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryRuleCondition = (input: RuleCondition, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Field != null) {
    entries["Field"] = input.Field;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HostHeaderConfig != null) {
    const memberEntries = serializeAws_queryHostHeaderConditionConfig(input.HostHeaderConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HostHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PathPatternConfig != null) {
    const memberEntries = serializeAws_queryPathPatternConditionConfig(input.PathPatternConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PathPatternConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HttpHeaderConfig != null) {
    const memberEntries = serializeAws_queryHttpHeaderConditionConfig(input.HttpHeaderConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.QueryStringConfig != null) {
    const memberEntries = serializeAws_queryQueryStringConditionConfig(input.QueryStringConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `QueryStringConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HttpRequestMethodConfig != null) {
    const memberEntries = serializeAws_queryHttpRequestMethodConditionConfig(input.HttpRequestMethodConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpRequestMethodConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceIpConfig != null) {
    const memberEntries = serializeAws_querySourceIpConditionConfig(input.SourceIpConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIpConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryRuleConditionList = (input: RuleCondition[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryRuleCondition(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRulePriorityList = (input: RulePriorityPair[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryRulePriorityPair(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRulePriorityPair = (input: RulePriorityPair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn != null) {
    entries["RuleArn"] = input.RuleArn;
  }
  if (input.Priority != null) {
    entries["Priority"] = input.Priority;
  }
  return entries;
};

const serializeAws_querySecurityGroups = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_querySetIpAddressTypeInput = (input: SetIpAddressTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.IpAddressType != null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  return entries;
};

const serializeAws_querySetRulePrioritiesInput = (input: SetRulePrioritiesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RulePriorities != null) {
    const memberEntries = serializeAws_queryRulePriorityList(input.RulePriorities, context);
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

const serializeAws_querySetSecurityGroupsInput = (input: SetSecurityGroupsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.SecurityGroups != null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetSubnetsInput = (input: SetSubnetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn != null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Subnets != null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SubnetMappings != null) {
    const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
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

const serializeAws_querySourceIpConditionConfig = (input: SourceIpConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values != null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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

const serializeAws_querySslPolicyNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_querySubnetMapping = (input: SubnetMapping, context: __SerdeContext): any => {
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

const serializeAws_querySubnetMappings = (input: SubnetMapping[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_querySubnetMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySubnets = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeys = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetDescription = (input: TargetDescription, context: __SerdeContext): any => {
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

const serializeAws_queryTargetDescriptions = (input: TargetDescription[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTargetDescription(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupArns = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTargetGroupAttribute = (input: TargetGroupAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTargetGroupAttributes = (input: TargetGroupAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTargetGroupAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupList = (input: TargetGroupTuple[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTargetGroupTuple(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTargetGroupStickinessConfig = (
  input: TargetGroupStickinessConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

const serializeAws_queryTargetGroupTuple = (input: TargetGroupTuple, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn != null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Weight != null) {
    entries["Weight"] = input.Weight;
  }
  return entries;
};

const deserializeAws_queryAction = (output: any, context: __SerdeContext): Action => {
  const contents: any = {
    Type: undefined,
    TargetGroupArn: undefined,
    AuthenticateOidcConfig: undefined,
    AuthenticateCognitoConfig: undefined,
    Order: undefined,
    RedirectConfig: undefined,
    FixedResponseConfig: undefined,
    ForwardConfig: undefined,
  };
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["AuthenticateOidcConfig"] !== undefined) {
    contents.AuthenticateOidcConfig = deserializeAws_queryAuthenticateOidcActionConfig(
      output["AuthenticateOidcConfig"],
      context
    );
  }
  if (output["AuthenticateCognitoConfig"] !== undefined) {
    contents.AuthenticateCognitoConfig = deserializeAws_queryAuthenticateCognitoActionConfig(
      output["AuthenticateCognitoConfig"],
      context
    );
  }
  if (output["Order"] !== undefined) {
    contents.Order = __strictParseInt32(output["Order"]) as number;
  }
  if (output["RedirectConfig"] !== undefined) {
    contents.RedirectConfig = deserializeAws_queryRedirectActionConfig(output["RedirectConfig"], context);
  }
  if (output["FixedResponseConfig"] !== undefined) {
    contents.FixedResponseConfig = deserializeAws_queryFixedResponseActionConfig(
      output["FixedResponseConfig"],
      context
    );
  }
  if (output["ForwardConfig"] !== undefined) {
    contents.ForwardConfig = deserializeAws_queryForwardActionConfig(output["ForwardConfig"], context);
  }
  return contents;
};

const deserializeAws_queryActions = (output: any, context: __SerdeContext): Action[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAction(entry, context);
    });
};

const deserializeAws_queryAddListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): AddListenerCertificatesOutput => {
  const contents: any = {
    Certificates: undefined,
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = deserializeAws_queryCertificateList(
      __getArrayIfSingleItem(output["Certificates"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryAllocationIdNotFoundException = (
  output: any,
  context: __SerdeContext
): AllocationIdNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryAlpnPolicyName = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryALPNPolicyNotSupportedException = (
  output: any,
  context: __SerdeContext
): ALPNPolicyNotSupportedException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (
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

const deserializeAws_queryAuthenticateCognitoActionConfig = (
  output: any,
  context: __SerdeContext
): AuthenticateCognitoActionConfig => {
  const contents: any = {
    UserPoolArn: undefined,
    UserPoolClientId: undefined,
    UserPoolDomain: undefined,
    SessionCookieName: undefined,
    Scope: undefined,
    SessionTimeout: undefined,
    AuthenticationRequestExtraParams: undefined,
    OnUnauthenticatedRequest: undefined,
  };
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
    contents.AuthenticationRequestExtraParams =
      deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(
        __getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]),
        context
      );
  }
  if (output["OnUnauthenticatedRequest"] !== undefined) {
    contents.OnUnauthenticatedRequest = __expectString(output["OnUnauthenticatedRequest"]);
  }
  return contents;
};

const deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (
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

const deserializeAws_queryAuthenticateOidcActionConfig = (
  output: any,
  context: __SerdeContext
): AuthenticateOidcActionConfig => {
  const contents: any = {
    Issuer: undefined,
    AuthorizationEndpoint: undefined,
    TokenEndpoint: undefined,
    UserInfoEndpoint: undefined,
    ClientId: undefined,
    ClientSecret: undefined,
    SessionCookieName: undefined,
    Scope: undefined,
    SessionTimeout: undefined,
    AuthenticationRequestExtraParams: undefined,
    OnUnauthenticatedRequest: undefined,
    UseExistingClientSecret: undefined,
  };
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
    contents.AuthenticationRequestExtraParams =
      deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(
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

const deserializeAws_queryAvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {
    ZoneName: undefined,
    SubnetId: undefined,
    OutpostId: undefined,
    LoadBalancerAddresses: undefined,
  };
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
    contents.LoadBalancerAddresses = deserializeAws_queryLoadBalancerAddresses(
      __getArrayIfSingleItem(output["LoadBalancerAddresses"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAvailabilityZoneNotSupportedException = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneNotSupportedException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAvailabilityZone(entry, context);
    });
};

const deserializeAws_queryCertificate = (output: any, context: __SerdeContext): Certificate => {
  const contents: any = {
    CertificateArn: undefined,
    IsDefault: undefined,
  };
  if (output["CertificateArn"] !== undefined) {
    contents.CertificateArn = __expectString(output["CertificateArn"]);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
  }
  return contents;
};

const deserializeAws_queryCertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCertificate(entry, context);
    });
};

const deserializeAws_queryCertificateNotFoundException = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryCipher = (output: any, context: __SerdeContext): Cipher => {
  const contents: any = {
    Name: undefined,
    Priority: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(output["Priority"]) as number;
  }
  return contents;
};

const deserializeAws_queryCiphers = (output: any, context: __SerdeContext): Cipher[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryCipher(entry, context);
    });
};

const deserializeAws_queryCreateListenerOutput = (output: any, context: __SerdeContext): CreateListenerOutput => {
  const contents: any = {
    Listeners: undefined,
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryCreateLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerOutput => {
  const contents: any = {
    LoadBalancers: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancers(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateRuleOutput = (output: any, context: __SerdeContext): CreateRuleOutput => {
  const contents: any = {
    Rules: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryCreateTargetGroupOutput = (output: any, context: __SerdeContext): CreateTargetGroupOutput => {
  const contents: any = {
    TargetGroups: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      __getArrayIfSingleItem(output["TargetGroups"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteListenerOutput = (output: any, context: __SerdeContext): DeleteListenerOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteRuleOutput = (output: any, context: __SerdeContext): DeleteRuleOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteTargetGroupOutput = (output: any, context: __SerdeContext): DeleteTargetGroupOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeregisterTargetsOutput = (output: any, context: __SerdeContext): DeregisterTargetsOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  const contents: any = {
    Limits: undefined,
    NextMarker: undefined,
  };
  if (output.Limits === "") {
    contents.Limits = [];
  } else if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
    contents.Limits = deserializeAws_queryLimits(__getArrayIfSingleItem(output["Limits"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): DescribeListenerCertificatesOutput => {
  const contents: any = {
    Certificates: undefined,
    NextMarker: undefined,
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = deserializeAws_queryCertificateList(
      __getArrayIfSingleItem(output["Certificates"]["member"]),
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeListenersOutput = (output: any, context: __SerdeContext): DescribeListenersOutput => {
  const contents: any = {
    Listeners: undefined,
    NextMarker: undefined,
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerAttributesOutput => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = deserializeAws_queryLoadBalancerAttributes(
      __getArrayIfSingleItem(output["Attributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancersOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancersOutput => {
  const contents: any = {
    LoadBalancers: undefined,
    NextMarker: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancers(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeRulesOutput = (output: any, context: __SerdeContext): DescribeRulesOutput => {
  const contents: any = {
    Rules: undefined,
    NextMarker: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeSSLPoliciesOutput = (
  output: any,
  context: __SerdeContext
): DescribeSSLPoliciesOutput => {
  const contents: any = {
    SslPolicies: undefined,
    NextMarker: undefined,
  };
  if (output.SslPolicies === "") {
    contents.SslPolicies = [];
  } else if (output["SslPolicies"] !== undefined && output["SslPolicies"]["member"] !== undefined) {
    contents.SslPolicies = deserializeAws_querySslPolicies(
      __getArrayIfSingleItem(output["SslPolicies"]["member"]),
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  const contents: any = {
    TagDescriptions: undefined,
  };
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  } else if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
    contents.TagDescriptions = deserializeAws_queryTagDescriptions(
      __getArrayIfSingleItem(output["TagDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTargetGroupAttributesOutput => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = deserializeAws_queryTargetGroupAttributes(
      __getArrayIfSingleItem(output["Attributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTargetGroupsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTargetGroupsOutput => {
  const contents: any = {
    TargetGroups: undefined,
    NextMarker: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      __getArrayIfSingleItem(output["TargetGroups"]["member"]),
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeTargetHealthOutput = (
  output: any,
  context: __SerdeContext
): DescribeTargetHealthOutput => {
  const contents: any = {
    TargetHealthDescriptions: undefined,
  };
  if (output.TargetHealthDescriptions === "") {
    contents.TargetHealthDescriptions = [];
  } else if (
    output["TargetHealthDescriptions"] !== undefined &&
    output["TargetHealthDescriptions"]["member"] !== undefined
  ) {
    contents.TargetHealthDescriptions = deserializeAws_queryTargetHealthDescriptions(
      __getArrayIfSingleItem(output["TargetHealthDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDuplicateListenerException = (
  output: any,
  context: __SerdeContext
): DuplicateListenerException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDuplicateLoadBalancerNameException = (
  output: any,
  context: __SerdeContext
): DuplicateLoadBalancerNameException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDuplicateTagKeysException = (
  output: any,
  context: __SerdeContext
): DuplicateTagKeysException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDuplicateTargetGroupNameException = (
  output: any,
  context: __SerdeContext
): DuplicateTargetGroupNameException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryFixedResponseActionConfig = (
  output: any,
  context: __SerdeContext
): FixedResponseActionConfig => {
  const contents: any = {
    MessageBody: undefined,
    StatusCode: undefined,
    ContentType: undefined,
  };
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

const deserializeAws_queryForwardActionConfig = (output: any, context: __SerdeContext): ForwardActionConfig => {
  const contents: any = {
    TargetGroups: undefined,
    TargetGroupStickinessConfig: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = deserializeAws_queryTargetGroupList(
      __getArrayIfSingleItem(output["TargetGroups"]["member"]),
      context
    );
  }
  if (output["TargetGroupStickinessConfig"] !== undefined) {
    contents.TargetGroupStickinessConfig = deserializeAws_queryTargetGroupStickinessConfig(
      output["TargetGroupStickinessConfig"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryHealthUnavailableException = (
  output: any,
  context: __SerdeContext
): HealthUnavailableException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryHostHeaderConditionConfig = (
  output: any,
  context: __SerdeContext
): HostHeaderConditionConfig => {
  const contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryHttpHeaderConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpHeaderConditionConfig => {
  const contents: any = {
    HttpHeaderName: undefined,
    Values: undefined,
  };
  if (output["HttpHeaderName"] !== undefined) {
    contents.HttpHeaderName = __expectString(output["HttpHeaderName"]);
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryHttpRequestMethodConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpRequestMethodConditionConfig => {
  const contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryIncompatibleProtocolsException = (
  output: any,
  context: __SerdeContext
): IncompatibleProtocolsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidConfigurationRequestException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRequestException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidLoadBalancerActionException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerActionException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSchemeException = (output: any, context: __SerdeContext): InvalidSchemeException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupException = (
  output: any,
  context: __SerdeContext
): InvalidSecurityGroupException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSubnetException = (output: any, context: __SerdeContext): InvalidSubnetException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLimit = (output: any, context: __SerdeContext): Limit => {
  const contents: any = {
    Name: undefined,
    Max: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Max"] !== undefined) {
    contents.Max = __expectString(output["Max"]);
  }
  return contents;
};

const deserializeAws_queryLimits = (output: any, context: __SerdeContext): Limit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLimit(entry, context);
    });
};

const deserializeAws_queryListener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {
    ListenerArn: undefined,
    LoadBalancerArn: undefined,
    Port: undefined,
    Protocol: undefined,
    Certificates: undefined,
    SslPolicy: undefined,
    DefaultActions: undefined,
    AlpnPolicy: undefined,
  };
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
    contents.Certificates = deserializeAws_queryCertificateList(
      __getArrayIfSingleItem(output["Certificates"]["member"]),
      context
    );
  }
  if (output["SslPolicy"] !== undefined) {
    contents.SslPolicy = __expectString(output["SslPolicy"]);
  }
  if (output.DefaultActions === "") {
    contents.DefaultActions = [];
  } else if (output["DefaultActions"] !== undefined && output["DefaultActions"]["member"] !== undefined) {
    contents.DefaultActions = deserializeAws_queryActions(
      __getArrayIfSingleItem(output["DefaultActions"]["member"]),
      context
    );
  }
  if (output.AlpnPolicy === "") {
    contents.AlpnPolicy = [];
  } else if (output["AlpnPolicy"] !== undefined && output["AlpnPolicy"]["member"] !== undefined) {
    contents.AlpnPolicy = deserializeAws_queryAlpnPolicyName(
      __getArrayIfSingleItem(output["AlpnPolicy"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryListeners = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryListener(entry, context);
    });
};

const deserializeAws_queryListOfString = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryLoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  const contents: any = {
    LoadBalancerArn: undefined,
    DNSName: undefined,
    CanonicalHostedZoneId: undefined,
    CreatedTime: undefined,
    LoadBalancerName: undefined,
    Scheme: undefined,
    VpcId: undefined,
    State: undefined,
    Type: undefined,
    AvailabilityZones: undefined,
    SecurityGroups: undefined,
    IpAddressType: undefined,
    CustomerOwnedIpv4Pool: undefined,
  };
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
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
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
    contents.State = deserializeAws_queryLoadBalancerState(output["State"], context);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
  }
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  if (output["CustomerOwnedIpv4Pool"] !== undefined) {
    contents.CustomerOwnedIpv4Pool = __expectString(output["CustomerOwnedIpv4Pool"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAddress = (output: any, context: __SerdeContext): LoadBalancerAddress => {
  const contents: any = {
    IpAddress: undefined,
    AllocationId: undefined,
    PrivateIPv4Address: undefined,
    IPv6Address: undefined,
  };
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

const deserializeAws_queryLoadBalancerAddresses = (output: any, context: __SerdeContext): LoadBalancerAddress[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancerAddress(entry, context);
    });
};

const deserializeAws_queryLoadBalancerArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryLoadBalancerAttribute = (output: any, context: __SerdeContext): LoadBalancerAttribute => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAttributes = (output: any, context: __SerdeContext): LoadBalancerAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancerAttribute(entry, context);
    });
};

const deserializeAws_queryLoadBalancerNotFoundException = (
  output: any,
  context: __SerdeContext
): LoadBalancerNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancers = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancer(entry, context);
    });
};

const deserializeAws_queryLoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  const contents: any = {
    Code: undefined,
    Reason: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = __expectString(output["Reason"]);
  }
  return contents;
};

const deserializeAws_queryMatcher = (output: any, context: __SerdeContext): Matcher => {
  const contents: any = {
    HttpCode: undefined,
    GrpcCode: undefined,
  };
  if (output["HttpCode"] !== undefined) {
    contents.HttpCode = __expectString(output["HttpCode"]);
  }
  if (output["GrpcCode"] !== undefined) {
    contents.GrpcCode = __expectString(output["GrpcCode"]);
  }
  return contents;
};

const deserializeAws_queryModifyListenerOutput = (output: any, context: __SerdeContext): ModifyListenerOutput => {
  const contents: any = {
    Listeners: undefined,
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  } else if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = deserializeAws_queryLoadBalancerAttributes(
      __getArrayIfSingleItem(output["Attributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyRuleOutput = (output: any, context: __SerdeContext): ModifyRuleOutput => {
  const contents: any = {
    Rules: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryModifyTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyTargetGroupAttributesOutput => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  } else if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = deserializeAws_queryTargetGroupAttributes(
      __getArrayIfSingleItem(output["Attributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyTargetGroupOutput = (output: any, context: __SerdeContext): ModifyTargetGroupOutput => {
  const contents: any = {
    TargetGroups: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  } else if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      __getArrayIfSingleItem(output["TargetGroups"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryOperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryPathPatternConditionConfig = (
  output: any,
  context: __SerdeContext
): PathPatternConditionConfig => {
  const contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryPriorityInUseException = (output: any, context: __SerdeContext): PriorityInUseException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryQueryStringConditionConfig = (
  output: any,
  context: __SerdeContext
): QueryStringConditionConfig => {
  const contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryQueryStringKeyValuePairList(
      __getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryQueryStringKeyValuePair = (output: any, context: __SerdeContext): QueryStringKeyValuePair => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryQueryStringKeyValuePairList = (
  output: any,
  context: __SerdeContext
): QueryStringKeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryQueryStringKeyValuePair(entry, context);
    });
};

const deserializeAws_queryRedirectActionConfig = (output: any, context: __SerdeContext): RedirectActionConfig => {
  const contents: any = {
    Protocol: undefined,
    Port: undefined,
    Host: undefined,
    Path: undefined,
    Query: undefined,
    StatusCode: undefined,
  };
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

const deserializeAws_queryRegisterTargetsOutput = (output: any, context: __SerdeContext): RegisterTargetsOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryRemoveListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): RemoveListenerCertificatesOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryRemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryRule = (output: any, context: __SerdeContext): Rule => {
  const contents: any = {
    RuleArn: undefined,
    Priority: undefined,
    Conditions: undefined,
    Actions: undefined,
    IsDefault: undefined,
  };
  if (output["RuleArn"] !== undefined) {
    contents.RuleArn = __expectString(output["RuleArn"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __expectString(output["Priority"]);
  }
  if (output.Conditions === "") {
    contents.Conditions = [];
  } else if (output["Conditions"] !== undefined && output["Conditions"]["member"] !== undefined) {
    contents.Conditions = deserializeAws_queryRuleConditionList(
      __getArrayIfSingleItem(output["Conditions"]["member"]),
      context
    );
  }
  if (output.Actions === "") {
    contents.Actions = [];
  } else if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
    contents.Actions = deserializeAws_queryActions(__getArrayIfSingleItem(output["Actions"]["member"]), context);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
  }
  return contents;
};

const deserializeAws_queryRuleCondition = (output: any, context: __SerdeContext): RuleCondition => {
  const contents: any = {
    Field: undefined,
    Values: undefined,
    HostHeaderConfig: undefined,
    PathPatternConfig: undefined,
    HttpHeaderConfig: undefined,
    QueryStringConfig: undefined,
    HttpRequestMethodConfig: undefined,
    SourceIpConfig: undefined,
  };
  if (output["Field"] !== undefined) {
    contents.Field = __expectString(output["Field"]);
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  if (output["HostHeaderConfig"] !== undefined) {
    contents.HostHeaderConfig = deserializeAws_queryHostHeaderConditionConfig(output["HostHeaderConfig"], context);
  }
  if (output["PathPatternConfig"] !== undefined) {
    contents.PathPatternConfig = deserializeAws_queryPathPatternConditionConfig(output["PathPatternConfig"], context);
  }
  if (output["HttpHeaderConfig"] !== undefined) {
    contents.HttpHeaderConfig = deserializeAws_queryHttpHeaderConditionConfig(output["HttpHeaderConfig"], context);
  }
  if (output["QueryStringConfig"] !== undefined) {
    contents.QueryStringConfig = deserializeAws_queryQueryStringConditionConfig(output["QueryStringConfig"], context);
  }
  if (output["HttpRequestMethodConfig"] !== undefined) {
    contents.HttpRequestMethodConfig = deserializeAws_queryHttpRequestMethodConditionConfig(
      output["HttpRequestMethodConfig"],
      context
    );
  }
  if (output["SourceIpConfig"] !== undefined) {
    contents.SourceIpConfig = deserializeAws_querySourceIpConditionConfig(output["SourceIpConfig"], context);
  }
  return contents;
};

const deserializeAws_queryRuleConditionList = (output: any, context: __SerdeContext): RuleCondition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRuleCondition(entry, context);
    });
};

const deserializeAws_queryRuleNotFoundException = (output: any, context: __SerdeContext): RuleNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryRules = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryRule(entry, context);
    });
};

const deserializeAws_querySecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySetIpAddressTypeOutput = (output: any, context: __SerdeContext): SetIpAddressTypeOutput => {
  const contents: any = {
    IpAddressType: undefined,
  };
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  return contents;
};

const deserializeAws_querySetRulePrioritiesOutput = (output: any, context: __SerdeContext): SetRulePrioritiesOutput => {
  const contents: any = {
    Rules: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_querySetSecurityGroupsOutput = (output: any, context: __SerdeContext): SetSecurityGroupsOutput => {
  const contents: any = {
    SecurityGroupIds: undefined,
  };
  if (output.SecurityGroupIds === "") {
    contents.SecurityGroupIds = [];
  } else if (output["SecurityGroupIds"] !== undefined && output["SecurityGroupIds"]["member"] !== undefined) {
    contents.SecurityGroupIds = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroupIds"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySetSubnetsOutput = (output: any, context: __SerdeContext): SetSubnetsOutput => {
  const contents: any = {
    AvailabilityZones: undefined,
    IpAddressType: undefined,
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  return contents;
};

const deserializeAws_querySourceIpConditionConfig = (output: any, context: __SerdeContext): SourceIpConditionConfig => {
  const contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_querySslPolicies = (output: any, context: __SerdeContext): SslPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySslPolicy(entry, context);
    });
};

const deserializeAws_querySslPolicy = (output: any, context: __SerdeContext): SslPolicy => {
  const contents: any = {
    SslProtocols: undefined,
    Ciphers: undefined,
    Name: undefined,
    SupportedLoadBalancerTypes: undefined,
  };
  if (output.SslProtocols === "") {
    contents.SslProtocols = [];
  } else if (output["SslProtocols"] !== undefined && output["SslProtocols"]["member"] !== undefined) {
    contents.SslProtocols = deserializeAws_querySslProtocols(
      __getArrayIfSingleItem(output["SslProtocols"]["member"]),
      context
    );
  }
  if (output.Ciphers === "") {
    contents.Ciphers = [];
  } else if (output["Ciphers"] !== undefined && output["Ciphers"]["member"] !== undefined) {
    contents.Ciphers = deserializeAws_queryCiphers(__getArrayIfSingleItem(output["Ciphers"]["member"]), context);
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
    contents.SupportedLoadBalancerTypes = deserializeAws_queryListOfString(
      __getArrayIfSingleItem(output["SupportedLoadBalancerTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySSLPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): SSLPolicyNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_querySslProtocols = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySubnetNotFoundException = (output: any, context: __SerdeContext): SubnetNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {
    ResourceArn: undefined,
    Tags: undefined,
  };
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = __expectString(output["ResourceArn"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryTagDescriptions = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTagDescription(entry, context);
    });
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTargetDescription = (output: any, context: __SerdeContext): TargetDescription => {
  const contents: any = {
    Id: undefined,
    Port: undefined,
    AvailabilityZone: undefined,
  };
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

const deserializeAws_queryTargetGroup = (output: any, context: __SerdeContext): TargetGroup => {
  const contents: any = {
    TargetGroupArn: undefined,
    TargetGroupName: undefined,
    Protocol: undefined,
    Port: undefined,
    VpcId: undefined,
    HealthCheckProtocol: undefined,
    HealthCheckPort: undefined,
    HealthCheckEnabled: undefined,
    HealthCheckIntervalSeconds: undefined,
    HealthCheckTimeoutSeconds: undefined,
    HealthyThresholdCount: undefined,
    UnhealthyThresholdCount: undefined,
    HealthCheckPath: undefined,
    Matcher: undefined,
    LoadBalancerArns: undefined,
    TargetType: undefined,
    ProtocolVersion: undefined,
    IpAddressType: undefined,
  };
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
    contents.Matcher = deserializeAws_queryMatcher(output["Matcher"], context);
  }
  if (output.LoadBalancerArns === "") {
    contents.LoadBalancerArns = [];
  } else if (output["LoadBalancerArns"] !== undefined && output["LoadBalancerArns"]["member"] !== undefined) {
    contents.LoadBalancerArns = deserializeAws_queryLoadBalancerArns(
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

const deserializeAws_queryTargetGroupAssociationLimitException = (
  output: any,
  context: __SerdeContext
): TargetGroupAssociationLimitException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroupAttribute = (output: any, context: __SerdeContext): TargetGroupAttribute => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroupAttributes = (output: any, context: __SerdeContext): TargetGroupAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTargetGroupAttribute(entry, context);
    });
};

const deserializeAws_queryTargetGroupList = (output: any, context: __SerdeContext): TargetGroupTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTargetGroupTuple(entry, context);
    });
};

const deserializeAws_queryTargetGroupNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetGroupNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroups = (output: any, context: __SerdeContext): TargetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTargetGroup(entry, context);
    });
};

const deserializeAws_queryTargetGroupStickinessConfig = (
  output: any,
  context: __SerdeContext
): TargetGroupStickinessConfig => {
  const contents: any = {
    Enabled: undefined,
    DurationSeconds: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["DurationSeconds"] !== undefined) {
    contents.DurationSeconds = __strictParseInt32(output["DurationSeconds"]) as number;
  }
  return contents;
};

const deserializeAws_queryTargetGroupTuple = (output: any, context: __SerdeContext): TargetGroupTuple => {
  const contents: any = {
    TargetGroupArn: undefined,
    Weight: undefined,
  };
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["Weight"] !== undefined) {
    contents.Weight = __strictParseInt32(output["Weight"]) as number;
  }
  return contents;
};

const deserializeAws_queryTargetHealth = (output: any, context: __SerdeContext): TargetHealth => {
  const contents: any = {
    State: undefined,
    Reason: undefined,
    Description: undefined,
  };
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

const deserializeAws_queryTargetHealthDescription = (output: any, context: __SerdeContext): TargetHealthDescription => {
  const contents: any = {
    Target: undefined,
    HealthCheckPort: undefined,
    TargetHealth: undefined,
  };
  if (output["Target"] !== undefined) {
    contents.Target = deserializeAws_queryTargetDescription(output["Target"], context);
  }
  if (output["HealthCheckPort"] !== undefined) {
    contents.HealthCheckPort = __expectString(output["HealthCheckPort"]);
  }
  if (output["TargetHealth"] !== undefined) {
    contents.TargetHealth = deserializeAws_queryTargetHealth(output["TargetHealth"], context);
  }
  return contents;
};

const deserializeAws_queryTargetHealthDescriptions = (
  output: any,
  context: __SerdeContext
): TargetHealthDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTargetHealthDescription(entry, context);
    });
};

const deserializeAws_queryTooManyActionsException = (output: any, context: __SerdeContext): TooManyActionsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyCertificatesException = (
  output: any,
  context: __SerdeContext
): TooManyCertificatesException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyListenersException = (
  output: any,
  context: __SerdeContext
): TooManyListenersException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyLoadBalancersException = (
  output: any,
  context: __SerdeContext
): TooManyLoadBalancersException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyRegistrationsForTargetIdException = (
  output: any,
  context: __SerdeContext
): TooManyRegistrationsForTargetIdException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyRulesException = (output: any, context: __SerdeContext): TooManyRulesException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTargetGroupsException = (
  output: any,
  context: __SerdeContext
): TooManyTargetGroupsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTargetsException = (output: any, context: __SerdeContext): TooManyTargetsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException = (
  output: any,
  context: __SerdeContext
): TooManyUniqueTargetGroupsPerLoadBalancerException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryUnsupportedProtocolException = (
  output: any,
  context: __SerdeContext
): UnsupportedProtocolException => {
  const contents: any = {
    Message: undefined,
  };
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
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
