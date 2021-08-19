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
import {
  ALPNPolicyNotSupportedException,
  Action,
  AddListenerCertificatesInput,
  AddListenerCertificatesOutput,
  AddTagsInput,
  AddTagsOutput,
  AllocationIdNotFoundException,
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
  SSLPolicyNotFoundException,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  strictParseInt as __strictParseInt,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCertificatesException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      response = {
        ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTagKeysException":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ALPNPolicyNotSupportedException":
    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
      response = {
        ...(await deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CertificateNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateListenerException":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      response = {
        ...(await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleProtocolsException":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SSLPolicyNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      response = {
        ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyActionsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCertificatesException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      response = {
        ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyListenersException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      response = {
        ...(await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AllocationIdNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
      response = {
        ...(await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AvailabilityZoneNotSupportedException":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      response = {
        ...(await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateLoadBalancerNameException":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateLoadBalancerNameException":
      response = {
        ...(await deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSchemeException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSchemeException":
      response = {
        ...(await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSecurityGroupException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSubnetException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      response = {
        ...(await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyLoadBalancersException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyLoadBalancersException":
      response = {
        ...(await deserializeAws_queryTooManyLoadBalancersExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleProtocolsException":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorityInUseException":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      response = {
        ...(await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyActionsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRulesException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRulesException":
      response = {
        ...(await deserializeAws_queryTooManyRulesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetGroupsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTargetGroupNameException":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTargetGroupNameException":
      response = {
        ...(await deserializeAws_queryDuplicateTargetGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetGroupsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTargetException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      response = {
        ...(await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SSLPolicyNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      response = {
        ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthUnavailableException":
    case "com.amazonaws.elasticloadbalancingv2#HealthUnavailableException":
      response = {
        ...(await deserializeAws_queryHealthUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      response = {
        ...(await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ALPNPolicyNotSupportedException":
    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
      response = {
        ...(await deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CertificateNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateListenerException":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      response = {
        ...(await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleProtocolsException":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SSLPolicyNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      response = {
        ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyActionsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyCertificatesException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      response = {
        ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyListenersException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      response = {
        ...(await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleProtocolsException":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyActionsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTargetException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      response = {
        ...(await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTargetsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSubnetException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PriorityInUseException":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      response = {
        ...(await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSecurityGroupException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AllocationIdNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
      response = {
        ...(await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AvailabilityZoneNotSupportedException":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      response = {
        ...(await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSubnetException":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SubnetNotFoundException":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      response = {
        ...(await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryAllocationIdNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AllocationIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAllocationIdNotFoundException(body.Error, context);
  const contents: AllocationIdNotFoundException = {
    name: "AllocationIdNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryALPNPolicyNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ALPNPolicyNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryALPNPolicyNotSupportedException(body.Error, context);
  const contents: ALPNPolicyNotSupportedException = {
    name: "ALPNPolicyNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZoneNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAvailabilityZoneNotSupportedException(body.Error, context);
  const contents: AvailabilityZoneNotSupportedException = {
    name: "AvailabilityZoneNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCertificateNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundException(body.Error, context);
  const contents: CertificateNotFoundException = {
    name: "CertificateNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDuplicateListenerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateListenerException(body.Error, context);
  const contents: DuplicateListenerException = {
    name: "DuplicateListenerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateLoadBalancerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateLoadBalancerNameException(body.Error, context);
  const contents: DuplicateLoadBalancerNameException = {
    name: "DuplicateLoadBalancerNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
  const contents: DuplicateTagKeysException = {
    name: "DuplicateTagKeysException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDuplicateTargetGroupNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTargetGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTargetGroupNameException(body.Error, context);
  const contents: DuplicateTargetGroupNameException = {
    name: "DuplicateTargetGroupNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryHealthUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHealthUnavailableException(body.Error, context);
  const contents: HealthUnavailableException = {
    name: "HealthUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryIncompatibleProtocolsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleProtocolsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIncompatibleProtocolsException(body.Error, context);
  const contents: IncompatibleProtocolsException = {
    name: "IncompatibleProtocolsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
  const contents: InvalidConfigurationRequestException = {
    name: "InvalidConfigurationRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidLoadBalancerActionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidLoadBalancerActionException(body.Error, context);
  const contents: InvalidLoadBalancerActionException = {
    name: "InvalidLoadBalancerActionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidSchemeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSchemeException(body.Error, context);
  const contents: InvalidSchemeException = {
    name: "InvalidSchemeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityGroupException(body.Error, context);
  const contents: InvalidSecurityGroupException = {
    name: "InvalidSecurityGroupException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidSubnetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnetException(body.Error, context);
  const contents: InvalidSubnetException = {
    name: "InvalidSubnetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidTargetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTargetException(body.Error, context);
  const contents: InvalidTargetException = {
    name: "InvalidTargetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryListenerNotFoundException(body.Error, context);
  const contents: ListenerNotFoundException = {
    name: "ListenerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLoadBalancerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLoadBalancerNotFoundException(body.Error, context);
  const contents: LoadBalancerNotFoundException = {
    name: "LoadBalancerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryOperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotPermittedException(body.Error, context);
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryPriorityInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorityInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPriorityInUseException(body.Error, context);
  const contents: PriorityInUseException = {
    name: "PriorityInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceInUseException(body.Error, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryRuleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRuleNotFoundException(body.Error, context);
  const contents: RuleNotFoundException = {
    name: "RuleNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_querySSLPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SSLPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySSLPolicyNotFoundException(body.Error, context);
  const contents: SSLPolicyNotFoundException = {
    name: "SSLPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_querySubnetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetNotFoundException(body.Error, context);
  const contents: SubnetNotFoundException = {
    name: "SubnetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTargetGroupAssociationLimitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupAssociationLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTargetGroupAssociationLimitException(body.Error, context);
  const contents: TargetGroupAssociationLimitException = {
    name: "TargetGroupAssociationLimitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTargetGroupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTargetGroupNotFoundException(body.Error, context);
  const contents: TargetGroupNotFoundException = {
    name: "TargetGroupNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyActionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyActionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyActionsException(body.Error, context);
  const contents: TooManyActionsException = {
    name: "TooManyActionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyCertificatesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCertificatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyCertificatesException(body.Error, context);
  const contents: TooManyCertificatesException = {
    name: "TooManyCertificatesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyListenersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyListenersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyListenersException(body.Error, context);
  const contents: TooManyListenersException = {
    name: "TooManyListenersException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyLoadBalancersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLoadBalancersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyLoadBalancersException(body.Error, context);
  const contents: TooManyLoadBalancersException = {
    name: "TooManyLoadBalancersException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRegistrationsForTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyRegistrationsForTargetIdException(body.Error, context);
  const contents: TooManyRegistrationsForTargetIdException = {
    name: "TooManyRegistrationsForTargetIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyRulesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRulesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyRulesException(body.Error, context);
  const contents: TooManyRulesException = {
    name: "TooManyRulesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(body.Error, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyTargetGroupsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetGroupsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTargetGroupsException(body.Error, context);
  const contents: TooManyTargetGroupsException = {
    name: "TooManyTargetGroupsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyTargetsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTargetsException(body.Error, context);
  const contents: TooManyTargetsException = {
    name: "TooManyTargetsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyUniqueTargetGroupsPerLoadBalancerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
  const contents: TooManyUniqueTargetGroupsPerLoadBalancerException = {
    name: "TooManyUniqueTargetGroupsPerLoadBalancerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
  const contents: UnsupportedProtocolException = {
    name: "UnsupportedProtocolException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryAction = (input: Action, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.AuthenticateOidcConfig !== undefined && input.AuthenticateOidcConfig !== null) {
    const memberEntries = serializeAws_queryAuthenticateOidcActionConfig(input.AuthenticateOidcConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateOidcConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AuthenticateCognitoConfig !== undefined && input.AuthenticateCognitoConfig !== null) {
    const memberEntries = serializeAws_queryAuthenticateCognitoActionConfig(input.AuthenticateCognitoConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateCognitoConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Order !== undefined && input.Order !== null) {
    entries["Order"] = input.Order;
  }
  if (input.RedirectConfig !== undefined && input.RedirectConfig !== null) {
    const memberEntries = serializeAws_queryRedirectActionConfig(input.RedirectConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RedirectConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FixedResponseConfig !== undefined && input.FixedResponseConfig !== null) {
    const memberEntries = serializeAws_queryFixedResponseActionConfig(input.FixedResponseConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FixedResponseConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ForwardConfig !== undefined && input.ForwardConfig !== null) {
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
  for (let entry of input) {
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
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Certificates !== undefined && input.Certificates !== null) {
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryAddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
    const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (
  input: { [key: string]: string },
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
  if (input.UserPoolArn !== undefined && input.UserPoolArn !== null) {
    entries["UserPoolArn"] = input.UserPoolArn;
  }
  if (input.UserPoolClientId !== undefined && input.UserPoolClientId !== null) {
    entries["UserPoolClientId"] = input.UserPoolClientId;
  }
  if (input.UserPoolDomain !== undefined && input.UserPoolDomain !== null) {
    entries["UserPoolDomain"] = input.UserPoolDomain;
  }
  if (input.SessionCookieName !== undefined && input.SessionCookieName !== null) {
    entries["SessionCookieName"] = input.SessionCookieName;
  }
  if (input.Scope !== undefined && input.Scope !== null) {
    entries["Scope"] = input.Scope;
  }
  if (input.SessionTimeout !== undefined && input.SessionTimeout !== null) {
    entries["SessionTimeout"] = input.SessionTimeout;
  }
  if (input.AuthenticationRequestExtraParams !== undefined && input.AuthenticationRequestExtraParams !== null) {
    const memberEntries = serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(
      input.AuthenticationRequestExtraParams,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OnUnauthenticatedRequest !== undefined && input.OnUnauthenticatedRequest !== null) {
    entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
  }
  return entries;
};

const serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (
  input: { [key: string]: string },
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
  if (input.Issuer !== undefined && input.Issuer !== null) {
    entries["Issuer"] = input.Issuer;
  }
  if (input.AuthorizationEndpoint !== undefined && input.AuthorizationEndpoint !== null) {
    entries["AuthorizationEndpoint"] = input.AuthorizationEndpoint;
  }
  if (input.TokenEndpoint !== undefined && input.TokenEndpoint !== null) {
    entries["TokenEndpoint"] = input.TokenEndpoint;
  }
  if (input.UserInfoEndpoint !== undefined && input.UserInfoEndpoint !== null) {
    entries["UserInfoEndpoint"] = input.UserInfoEndpoint;
  }
  if (input.ClientId !== undefined && input.ClientId !== null) {
    entries["ClientId"] = input.ClientId;
  }
  if (input.ClientSecret !== undefined && input.ClientSecret !== null) {
    entries["ClientSecret"] = input.ClientSecret;
  }
  if (input.SessionCookieName !== undefined && input.SessionCookieName !== null) {
    entries["SessionCookieName"] = input.SessionCookieName;
  }
  if (input.Scope !== undefined && input.Scope !== null) {
    entries["Scope"] = input.Scope;
  }
  if (input.SessionTimeout !== undefined && input.SessionTimeout !== null) {
    entries["SessionTimeout"] = input.SessionTimeout;
  }
  if (input.AuthenticationRequestExtraParams !== undefined && input.AuthenticationRequestExtraParams !== null) {
    const memberEntries = serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(
      input.AuthenticationRequestExtraParams,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OnUnauthenticatedRequest !== undefined && input.OnUnauthenticatedRequest !== null) {
    entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
  }
  if (input.UseExistingClientSecret !== undefined && input.UseExistingClientSecret !== null) {
    entries["UseExistingClientSecret"] = input.UseExistingClientSecret;
  }
  return entries;
};

const serializeAws_queryCertificate = (input: Certificate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CertificateArn !== undefined && input.CertificateArn !== null) {
    entries["CertificateArn"] = input.CertificateArn;
  }
  if (input.IsDefault !== undefined && input.IsDefault !== null) {
    entries["IsDefault"] = input.IsDefault;
  }
  return entries;
};

const serializeAws_queryCertificateList = (input: Certificate[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Protocol !== undefined && input.Protocol !== null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.Port !== undefined && input.Port !== null) {
    entries["Port"] = input.Port;
  }
  if (input.SslPolicy !== undefined && input.SslPolicy !== null) {
    entries["SslPolicy"] = input.SslPolicy;
  }
  if (input.Certificates !== undefined && input.Certificates !== null) {
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultActions !== undefined && input.DefaultActions !== null) {
    const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlpnPolicy !== undefined && input.AlpnPolicy !== null) {
    const memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlpnPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateLoadBalancerInput = (input: CreateLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Subnets !== undefined && input.Subnets !== null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SubnetMappings !== undefined && input.SubnetMappings !== null) {
    const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Scheme !== undefined && input.Scheme !== null) {
    entries["Scheme"] = input.Scheme;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Type !== undefined && input.Type !== null) {
    entries["Type"] = input.Type;
  }
  if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  if (input.CustomerOwnedIpv4Pool !== undefined && input.CustomerOwnedIpv4Pool !== null) {
    entries["CustomerOwnedIpv4Pool"] = input.CustomerOwnedIpv4Pool;
  }
  return entries;
};

const serializeAws_queryCreateRuleInput = (input: CreateRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Conditions !== undefined && input.Conditions !== null) {
    const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Priority !== undefined && input.Priority !== null) {
    entries["Priority"] = input.Priority;
  }
  if (input.Actions !== undefined && input.Actions !== null) {
    const memberEntries = serializeAws_queryActions(input.Actions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateTargetGroupInput = (input: CreateTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Protocol !== undefined && input.Protocol !== null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.ProtocolVersion !== undefined && input.ProtocolVersion !== null) {
    entries["ProtocolVersion"] = input.ProtocolVersion;
  }
  if (input.Port !== undefined && input.Port !== null) {
    entries["Port"] = input.Port;
  }
  if (input.VpcId !== undefined && input.VpcId !== null) {
    entries["VpcId"] = input.VpcId;
  }
  if (input.HealthCheckProtocol !== undefined && input.HealthCheckProtocol !== null) {
    entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.HealthCheckPort !== undefined && input.HealthCheckPort !== null) {
    entries["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckEnabled !== undefined && input.HealthCheckEnabled !== null) {
    entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
  }
  if (input.HealthCheckPath !== undefined && input.HealthCheckPath !== null) {
    entries["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckIntervalSeconds !== undefined && input.HealthCheckIntervalSeconds !== null) {
    entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckTimeoutSeconds !== undefined && input.HealthCheckTimeoutSeconds !== null) {
    entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
  }
  if (input.HealthyThresholdCount !== undefined && input.HealthyThresholdCount !== null) {
    entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
  }
  if (input.UnhealthyThresholdCount !== undefined && input.UnhealthyThresholdCount !== null) {
    entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
  }
  if (input.Matcher !== undefined && input.Matcher !== null) {
    const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetType !== undefined && input.TargetType !== null) {
    entries["TargetType"] = input.TargetType;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteListenerInput = (input: DeleteListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  return entries;
};

const serializeAws_queryDeleteLoadBalancerInput = (input: DeleteLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryDeleteRuleInput = (input: DeleteRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn !== undefined && input.RuleArn !== null) {
    entries["RuleArn"] = input.RuleArn;
  }
  return entries;
};

const serializeAws_queryDeleteTargetGroupInput = (input: DeleteTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryDeregisterTargetsInput = (input: DeregisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets !== undefined && input.Targets !== null) {
    const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
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
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeListenerCertificatesInput = (
  input: DescribeListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeListenersInput = (input: DescribeListenersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.ListenerArns !== undefined && input.ListenerArns !== null) {
    const memberEntries = serializeAws_queryListenerArns(input.ListenerArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListenerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancersInput = (
  input: DescribeLoadBalancersInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArns !== undefined && input.LoadBalancerArns !== null) {
    const memberEntries = serializeAws_queryLoadBalancerArns(input.LoadBalancerArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Names !== undefined && input.Names !== null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.Names, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeRulesInput = (input: DescribeRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.RuleArns !== undefined && input.RuleArns !== null) {
    const memberEntries = serializeAws_queryRuleArns(input.RuleArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeSSLPoliciesInput = (input: DescribeSSLPoliciesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names !== undefined && input.Names !== null) {
    const memberEntries = serializeAws_querySslPolicyNames(input.Names, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
    const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
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
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryDescribeTargetGroupsInput = (
  input: DescribeTargetGroupsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.TargetGroupArns !== undefined && input.TargetGroupArns !== null) {
    const memberEntries = serializeAws_queryTargetGroupArns(input.TargetGroupArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Names !== undefined && input.Names !== null) {
    const memberEntries = serializeAws_queryTargetGroupNames(input.Names, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined && input.Marker !== null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined && input.PageSize !== null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeTargetHealthInput = (
  input: DescribeTargetHealthInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets !== undefined && input.Targets !== null) {
    const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
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
  if (input.MessageBody !== undefined && input.MessageBody !== null) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.StatusCode !== undefined && input.StatusCode !== null) {
    entries["StatusCode"] = input.StatusCode;
  }
  if (input.ContentType !== undefined && input.ContentType !== null) {
    entries["ContentType"] = input.ContentType;
  }
  return entries;
};

const serializeAws_queryForwardActionConfig = (input: ForwardActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroups !== undefined && input.TargetGroups !== null) {
    const memberEntries = serializeAws_queryTargetGroupList(input.TargetGroups, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupStickinessConfig !== undefined && input.TargetGroupStickinessConfig !== null) {
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
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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
  if (input.HttpHeaderName !== undefined && input.HttpHeaderName !== null) {
    entries["HttpHeaderName"] = input.HttpHeaderName;
  }
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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
  for (let entry of input) {
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
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryLoadBalancerAttributes = (input: LoadBalancerAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.HttpCode !== undefined && input.HttpCode !== null) {
    entries["HttpCode"] = input.HttpCode;
  }
  if (input.GrpcCode !== undefined && input.GrpcCode !== null) {
    entries["GrpcCode"] = input.GrpcCode;
  }
  return entries;
};

const serializeAws_queryModifyListenerInput = (input: ModifyListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Port !== undefined && input.Port !== null) {
    entries["Port"] = input.Port;
  }
  if (input.Protocol !== undefined && input.Protocol !== null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.SslPolicy !== undefined && input.SslPolicy !== null) {
    entries["SslPolicy"] = input.SslPolicy;
  }
  if (input.Certificates !== undefined && input.Certificates !== null) {
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultActions !== undefined && input.DefaultActions !== null) {
    const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlpnPolicy !== undefined && input.AlpnPolicy !== null) {
    const memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
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
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Attributes !== undefined && input.Attributes !== null) {
    const memberEntries = serializeAws_queryLoadBalancerAttributes(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyRuleInput = (input: ModifyRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleArn !== undefined && input.RuleArn !== null) {
    entries["RuleArn"] = input.RuleArn;
  }
  if (input.Conditions !== undefined && input.Conditions !== null) {
    const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Actions !== undefined && input.Actions !== null) {
    const memberEntries = serializeAws_queryActions(input.Actions, context);
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
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Attributes !== undefined && input.Attributes !== null) {
    const memberEntries = serializeAws_queryTargetGroupAttributes(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryModifyTargetGroupInput = (input: ModifyTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.HealthCheckProtocol !== undefined && input.HealthCheckProtocol !== null) {
    entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.HealthCheckPort !== undefined && input.HealthCheckPort !== null) {
    entries["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckPath !== undefined && input.HealthCheckPath !== null) {
    entries["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckEnabled !== undefined && input.HealthCheckEnabled !== null) {
    entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
  }
  if (input.HealthCheckIntervalSeconds !== undefined && input.HealthCheckIntervalSeconds !== null) {
    entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckTimeoutSeconds !== undefined && input.HealthCheckTimeoutSeconds !== null) {
    entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
  }
  if (input.HealthyThresholdCount !== undefined && input.HealthyThresholdCount !== null) {
    entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
  }
  if (input.UnhealthyThresholdCount !== undefined && input.UnhealthyThresholdCount !== null) {
    entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
  }
  if (input.Matcher !== undefined && input.Matcher !== null) {
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
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryQueryStringKeyValuePairList(input.Values, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryQueryStringKeyValuePair = (input: QueryStringKeyValuePair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
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
  for (let entry of input) {
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
  if (input.Protocol !== undefined && input.Protocol !== null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.Port !== undefined && input.Port !== null) {
    entries["Port"] = input.Port;
  }
  if (input.Host !== undefined && input.Host !== null) {
    entries["Host"] = input.Host;
  }
  if (input.Path !== undefined && input.Path !== null) {
    entries["Path"] = input.Path;
  }
  if (input.Query !== undefined && input.Query !== null) {
    entries["Query"] = input.Query;
  }
  if (input.StatusCode !== undefined && input.StatusCode !== null) {
    entries["StatusCode"] = input.StatusCode;
  }
  return entries;
};

const serializeAws_queryRegisterTargetsInput = (input: RegisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets !== undefined && input.Targets !== null) {
    const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
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
  if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Certificates !== undefined && input.Certificates !== null) {
    const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryRemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
    const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TagKeys !== undefined && input.TagKeys !== null) {
    const memberEntries = serializeAws_queryTagKeys(input.TagKeys, context);
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
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.Field !== undefined && input.Field !== null) {
    entries["Field"] = input.Field;
  }
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HostHeaderConfig !== undefined && input.HostHeaderConfig !== null) {
    const memberEntries = serializeAws_queryHostHeaderConditionConfig(input.HostHeaderConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HostHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PathPatternConfig !== undefined && input.PathPatternConfig !== null) {
    const memberEntries = serializeAws_queryPathPatternConditionConfig(input.PathPatternConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PathPatternConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HttpHeaderConfig !== undefined && input.HttpHeaderConfig !== null) {
    const memberEntries = serializeAws_queryHttpHeaderConditionConfig(input.HttpHeaderConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.QueryStringConfig !== undefined && input.QueryStringConfig !== null) {
    const memberEntries = serializeAws_queryQueryStringConditionConfig(input.QueryStringConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `QueryStringConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HttpRequestMethodConfig !== undefined && input.HttpRequestMethodConfig !== null) {
    const memberEntries = serializeAws_queryHttpRequestMethodConditionConfig(input.HttpRequestMethodConfig, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpRequestMethodConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SourceIpConfig !== undefined && input.SourceIpConfig !== null) {
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
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.RuleArn !== undefined && input.RuleArn !== null) {
    entries["RuleArn"] = input.RuleArn;
  }
  if (input.Priority !== undefined && input.Priority !== null) {
    entries["Priority"] = input.Priority;
  }
  return entries;
};

const serializeAws_querySecurityGroups = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  return entries;
};

const serializeAws_querySetRulePrioritiesInput = (input: SetRulePrioritiesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RulePriorities !== undefined && input.RulePriorities !== null) {
    const memberEntries = serializeAws_queryRulePriorityList(input.RulePriorities, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RulePriorities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetSecurityGroupsInput = (input: SetSecurityGroupsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetSubnetsInput = (input: SetSubnetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Subnets !== undefined && input.Subnets !== null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SubnetMappings !== undefined && input.SubnetMappings !== null) {
    const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  return entries;
};

const serializeAws_querySourceIpConditionConfig = (input: SourceIpConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
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
  for (let entry of input) {
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
  if (input.SubnetId !== undefined && input.SubnetId !== null) {
    entries["SubnetId"] = input.SubnetId;
  }
  if (input.AllocationId !== undefined && input.AllocationId !== null) {
    entries["AllocationId"] = input.AllocationId;
  }
  if (input.PrivateIPv4Address !== undefined && input.PrivateIPv4Address !== null) {
    entries["PrivateIPv4Address"] = input.PrivateIPv4Address;
  }
  if (input.IPv6Address !== undefined && input.IPv6Address !== null) {
    entries["IPv6Address"] = input.IPv6Address;
  }
  return entries;
};

const serializeAws_querySubnetMappings = (input: SubnetMapping[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeys = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.Id !== undefined && input.Id !== null) {
    entries["Id"] = input.Id;
  }
  if (input.Port !== undefined && input.Port !== null) {
    entries["Port"] = input.Port;
  }
  if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  return entries;
};

const serializeAws_queryTargetDescriptions = (input: TargetDescription[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTargetGroupAttributes = (input: TargetGroupAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  for (let entry of input) {
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
  for (let entry of input) {
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
  if (input.Enabled !== undefined && input.Enabled !== null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

const serializeAws_queryTargetGroupTuple = (input: TargetGroupTuple, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Weight !== undefined && input.Weight !== null) {
    entries["Weight"] = input.Weight;
  }
  return entries;
};

const deserializeAws_queryAction = (output: any, context: __SerdeContext): Action => {
  let contents: any = {
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
    contents.Order = __strictParseInt(output["Order"]) as number;
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryAction(entry, context);
    });
};

const deserializeAws_queryAddListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): AddListenerCertificatesOutput => {
  let contents: any = {
    Certificates: undefined,
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = deserializeAws_queryCertificateList(
      __getArrayIfSingleItem(output["Certificates"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryAllocationIdNotFoundException = (
  output: any,
  context: __SerdeContext
): AllocationIdNotFoundException => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryALPNPolicyNotSupportedException = (
  output: any,
  context: __SerdeContext
): ALPNPolicyNotSupportedException => {
  let contents: any = {
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
): { [key: string]: string } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __expectString(pair["value"]) as any,
    };
  }, {});
};

const deserializeAws_queryAuthenticateCognitoActionConfig = (
  output: any,
  context: __SerdeContext
): AuthenticateCognitoActionConfig => {
  let contents: any = {
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
    contents.SessionTimeout = __strictParseInt(output["SessionTimeout"]) as number;
  }
  if (output.AuthenticationRequestExtraParams === "") {
    contents.AuthenticationRequestExtraParams = {};
  }
  if (
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
): { [key: string]: string } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __expectString(pair["value"]) as any,
    };
  }, {});
};

const deserializeAws_queryAuthenticateOidcActionConfig = (
  output: any,
  context: __SerdeContext
): AuthenticateOidcActionConfig => {
  let contents: any = {
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
    contents.SessionTimeout = __strictParseInt(output["SessionTimeout"]) as number;
  }
  if (output.AuthenticationRequestExtraParams === "") {
    contents.AuthenticationRequestExtraParams = {};
  }
  if (
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
  let contents: any = {
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
  }
  if (output["LoadBalancerAddresses"] !== undefined && output["LoadBalancerAddresses"]["member"] !== undefined) {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryAvailabilityZone(entry, context);
    });
};

const deserializeAws_queryCertificate = (output: any, context: __SerdeContext): Certificate => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryCertificate(entry, context);
    });
};

const deserializeAws_queryCertificateNotFoundException = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryCipher = (output: any, context: __SerdeContext): Cipher => {
  let contents: any = {
    Name: undefined,
    Priority: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt(output["Priority"]) as number;
  }
  return contents;
};

const deserializeAws_queryCiphers = (output: any, context: __SerdeContext): Cipher[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryCipher(entry, context);
    });
};

const deserializeAws_queryCreateListenerOutput = (output: any, context: __SerdeContext): CreateListenerOutput => {
  let contents: any = {
    Listeners: undefined,
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryCreateLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerOutput => {
  let contents: any = {
    LoadBalancers: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancers(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateRuleOutput = (output: any, context: __SerdeContext): CreateRuleOutput => {
  let contents: any = {
    Rules: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryCreateTargetGroupOutput = (output: any, context: __SerdeContext): CreateTargetGroupOutput => {
  let contents: any = {
    TargetGroups: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      __getArrayIfSingleItem(output["TargetGroups"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteListenerOutput = (output: any, context: __SerdeContext): DeleteListenerOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteRuleOutput = (output: any, context: __SerdeContext): DeleteRuleOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteTargetGroupOutput = (output: any, context: __SerdeContext): DeleteTargetGroupOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeregisterTargetsOutput = (output: any, context: __SerdeContext): DeregisterTargetsOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  let contents: any = {
    Limits: undefined,
    NextMarker: undefined,
  };
  if (output.Limits === "") {
    contents.Limits = [];
  }
  if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
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
  let contents: any = {
    Certificates: undefined,
    NextMarker: undefined,
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
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
  let contents: any = {
    Listeners: undefined,
    NextMarker: undefined,
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
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
  let contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
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
  let contents: any = {
    LoadBalancers: undefined,
    NextMarker: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
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
  let contents: any = {
    Rules: undefined,
    NextMarker: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
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
  let contents: any = {
    SslPolicies: undefined,
    NextMarker: undefined,
  };
  if (output.SslPolicies === "") {
    contents.SslPolicies = [];
  }
  if (output["SslPolicies"] !== undefined && output["SslPolicies"]["member"] !== undefined) {
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
  let contents: any = {
    TagDescriptions: undefined,
  };
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  }
  if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
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
  let contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
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
  let contents: any = {
    TargetGroups: undefined,
    NextMarker: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
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
  let contents: any = {
    TargetHealthDescriptions: undefined,
  };
  if (output.TargetHealthDescriptions === "") {
    contents.TargetHealthDescriptions = [];
  }
  if (output["TargetHealthDescriptions"] !== undefined && output["TargetHealthDescriptions"]["member"] !== undefined) {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
    TargetGroups: undefined,
    TargetGroupStickinessConfig: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
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
  let contents: any = {
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
  let contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryHttpHeaderConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpHeaderConditionConfig => {
  let contents: any = {
    HttpHeaderName: undefined,
    Values: undefined,
  };
  if (output["HttpHeaderName"] !== undefined) {
    contents.HttpHeaderName = __expectString(output["HttpHeaderName"]);
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryHttpRequestMethodConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpRequestMethodConditionConfig => {
  let contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryIncompatibleProtocolsException = (
  output: any,
  context: __SerdeContext
): IncompatibleProtocolsException => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSchemeException = (output: any, context: __SerdeContext): InvalidSchemeException => {
  let contents: any = {
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
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSubnetException = (output: any, context: __SerdeContext): InvalidSubnetException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLimit = (output: any, context: __SerdeContext): Limit => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryLimit(entry, context);
    });
};

const deserializeAws_queryListener = (output: any, context: __SerdeContext): Listener => {
  let contents: any = {
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
    contents.Port = __strictParseInt(output["Port"]) as number;
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
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
  }
  if (output["DefaultActions"] !== undefined && output["DefaultActions"]["member"] !== undefined) {
    contents.DefaultActions = deserializeAws_queryActions(
      __getArrayIfSingleItem(output["DefaultActions"]["member"]),
      context
    );
  }
  if (output.AlpnPolicy === "") {
    contents.AlpnPolicy = [];
  }
  if (output["AlpnPolicy"] !== undefined && output["AlpnPolicy"]["member"] !== undefined) {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryListener(entry, context);
    });
};

const deserializeAws_queryListOfString = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryLoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  let contents: any = {
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
    contents.CreatedTime = new Date(output["CreatedTime"]);
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
  }
  if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryLoadBalancerAddress(entry, context);
    });
};

const deserializeAws_queryLoadBalancerArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryLoadBalancerAttribute = (output: any, context: __SerdeContext): LoadBalancerAttribute => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryLoadBalancerAttribute(entry, context);
    });
};

const deserializeAws_queryLoadBalancerNotFoundException = (
  output: any,
  context: __SerdeContext
): LoadBalancerNotFoundException => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryLoadBalancer(entry, context);
    });
};

const deserializeAws_queryLoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
    Listeners: undefined,
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
    contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  let contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = deserializeAws_queryLoadBalancerAttributes(
      __getArrayIfSingleItem(output["Attributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyRuleOutput = (output: any, context: __SerdeContext): ModifyRuleOutput => {
  let contents: any = {
    Rules: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryModifyTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyTargetGroupAttributesOutput => {
  let contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
    contents.Attributes = deserializeAws_queryTargetGroupAttributes(
      __getArrayIfSingleItem(output["Attributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyTargetGroupOutput = (output: any, context: __SerdeContext): ModifyTargetGroupOutput => {
  let contents: any = {
    TargetGroups: undefined,
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
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
  let contents: any = {
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
  let contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryPriorityInUseException = (output: any, context: __SerdeContext): PriorityInUseException => {
  let contents: any = {
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
  let contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryQueryStringKeyValuePairList(
      __getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryQueryStringKeyValuePair = (output: any, context: __SerdeContext): QueryStringKeyValuePair => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryQueryStringKeyValuePair(entry, context);
    });
};

const deserializeAws_queryRedirectActionConfig = (output: any, context: __SerdeContext): RedirectActionConfig => {
  let contents: any = {
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
  let contents: any = {};
  return contents;
};

const deserializeAws_queryRemoveListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): RemoveListenerCertificatesOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryRemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryRule = (output: any, context: __SerdeContext): Rule => {
  let contents: any = {
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
  }
  if (output["Conditions"] !== undefined && output["Conditions"]["member"] !== undefined) {
    contents.Conditions = deserializeAws_queryRuleConditionList(
      __getArrayIfSingleItem(output["Conditions"]["member"]),
      context
    );
  }
  if (output.Actions === "") {
    contents.Actions = [];
  }
  if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
    contents.Actions = deserializeAws_queryActions(__getArrayIfSingleItem(output["Actions"]["member"]), context);
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = __parseBoolean(output["IsDefault"]);
  }
  return contents;
};

const deserializeAws_queryRuleCondition = (output: any, context: __SerdeContext): RuleCondition => {
  let contents: any = {
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
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryRuleCondition(entry, context);
    });
};

const deserializeAws_queryRuleNotFoundException = (output: any, context: __SerdeContext): RuleNotFoundException => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryRule(entry, context);
    });
};

const deserializeAws_querySecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySetIpAddressTypeOutput = (output: any, context: __SerdeContext): SetIpAddressTypeOutput => {
  let contents: any = {
    IpAddressType: undefined,
  };
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = __expectString(output["IpAddressType"]);
  }
  return contents;
};

const deserializeAws_querySetRulePrioritiesOutput = (output: any, context: __SerdeContext): SetRulePrioritiesOutput => {
  let contents: any = {
    Rules: undefined,
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
    contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
  }
  return contents;
};

const deserializeAws_querySetSecurityGroupsOutput = (output: any, context: __SerdeContext): SetSecurityGroupsOutput => {
  let contents: any = {
    SecurityGroupIds: undefined,
  };
  if (output.SecurityGroupIds === "") {
    contents.SecurityGroupIds = [];
  }
  if (output["SecurityGroupIds"] !== undefined && output["SecurityGroupIds"]["member"] !== undefined) {
    contents.SecurityGroupIds = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroupIds"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySetSubnetsOutput = (output: any, context: __SerdeContext): SetSubnetsOutput => {
  let contents: any = {
    AvailabilityZones: undefined,
    IpAddressType: undefined,
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
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
  let contents: any = {
    Values: undefined,
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_querySslPolicies = (output: any, context: __SerdeContext): SslPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_querySslPolicy(entry, context);
    });
};

const deserializeAws_querySslPolicy = (output: any, context: __SerdeContext): SslPolicy => {
  let contents: any = {
    SslProtocols: undefined,
    Ciphers: undefined,
    Name: undefined,
  };
  if (output.SslProtocols === "") {
    contents.SslProtocols = [];
  }
  if (output["SslProtocols"] !== undefined && output["SslProtocols"]["member"] !== undefined) {
    contents.SslProtocols = deserializeAws_querySslProtocols(
      __getArrayIfSingleItem(output["SslProtocols"]["member"]),
      context
    );
  }
  if (output.Ciphers === "") {
    contents.Ciphers = [];
  }
  if (output["Ciphers"] !== undefined && output["Ciphers"]["member"] !== undefined) {
    contents.Ciphers = deserializeAws_queryCiphers(__getArrayIfSingleItem(output["Ciphers"]["member"]), context);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_querySSLPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): SSLPolicyNotFoundException => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySubnetNotFoundException = (output: any, context: __SerdeContext): SubnetNotFoundException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
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
  let contents: any = {
    ResourceArn: undefined,
    Tags: undefined,
  };
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = __expectString(output["ResourceArn"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryTagDescriptions = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTagDescription(entry, context);
    });
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTargetDescription = (output: any, context: __SerdeContext): TargetDescription => {
  let contents: any = {
    Id: undefined,
    Port: undefined,
    AvailabilityZone: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Port"] !== undefined) {
    contents.Port = __strictParseInt(output["Port"]) as number;
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroup = (output: any, context: __SerdeContext): TargetGroup => {
  let contents: any = {
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
    contents.Port = __strictParseInt(output["Port"]) as number;
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
    contents.HealthCheckIntervalSeconds = __strictParseInt(output["HealthCheckIntervalSeconds"]) as number;
  }
  if (output["HealthCheckTimeoutSeconds"] !== undefined) {
    contents.HealthCheckTimeoutSeconds = __strictParseInt(output["HealthCheckTimeoutSeconds"]) as number;
  }
  if (output["HealthyThresholdCount"] !== undefined) {
    contents.HealthyThresholdCount = __strictParseInt(output["HealthyThresholdCount"]) as number;
  }
  if (output["UnhealthyThresholdCount"] !== undefined) {
    contents.UnhealthyThresholdCount = __strictParseInt(output["UnhealthyThresholdCount"]) as number;
  }
  if (output["HealthCheckPath"] !== undefined) {
    contents.HealthCheckPath = __expectString(output["HealthCheckPath"]);
  }
  if (output["Matcher"] !== undefined) {
    contents.Matcher = deserializeAws_queryMatcher(output["Matcher"], context);
  }
  if (output.LoadBalancerArns === "") {
    contents.LoadBalancerArns = [];
  }
  if (output["LoadBalancerArns"] !== undefined && output["LoadBalancerArns"]["member"] !== undefined) {
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
  return contents;
};

const deserializeAws_queryTargetGroupAssociationLimitException = (
  output: any,
  context: __SerdeContext
): TargetGroupAssociationLimitException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroupAttribute = (output: any, context: __SerdeContext): TargetGroupAttribute => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTargetGroupAttribute(entry, context);
    });
};

const deserializeAws_queryTargetGroupList = (output: any, context: __SerdeContext): TargetGroupTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTargetGroupTuple(entry, context);
    });
};

const deserializeAws_queryTargetGroupNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetGroupNotFoundException => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTargetGroup(entry, context);
    });
};

const deserializeAws_queryTargetGroupStickinessConfig = (
  output: any,
  context: __SerdeContext
): TargetGroupStickinessConfig => {
  let contents: any = {
    Enabled: undefined,
    DurationSeconds: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["DurationSeconds"] !== undefined) {
    contents.DurationSeconds = __strictParseInt(output["DurationSeconds"]) as number;
  }
  return contents;
};

const deserializeAws_queryTargetGroupTuple = (output: any, context: __SerdeContext): TargetGroupTuple => {
  let contents: any = {
    TargetGroupArn: undefined,
    Weight: undefined,
  };
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = __expectString(output["TargetGroupArn"]);
  }
  if (output["Weight"] !== undefined) {
    contents.Weight = __strictParseInt(output["Weight"]) as number;
  }
  return contents;
};

const deserializeAws_queryTargetHealth = (output: any, context: __SerdeContext): TargetHealth => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTargetHealthDescription(entry, context);
    });
};

const deserializeAws_queryTooManyActionsException = (output: any, context: __SerdeContext): TooManyActionsException => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyRulesException = (output: any, context: __SerdeContext): TooManyRulesException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  let contents: any = {
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
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTargetsException = (output: any, context: __SerdeContext): TooManyTargetsException => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
