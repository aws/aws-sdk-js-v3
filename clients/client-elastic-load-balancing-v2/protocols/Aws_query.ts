import {
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput
} from "../commands/AddListenerCertificatesCommand";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  CreateListenerCommandInput,
  CreateListenerCommandOutput
} from "../commands/CreateListenerCommand";
import {
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput
} from "../commands/CreateLoadBalancerCommand";
import {
  CreateRuleCommandInput,
  CreateRuleCommandOutput
} from "../commands/CreateRuleCommand";
import {
  CreateTargetGroupCommandInput,
  CreateTargetGroupCommandOutput
} from "../commands/CreateTargetGroupCommand";
import {
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput
} from "../commands/DeleteListenerCommand";
import {
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput
} from "../commands/DeleteLoadBalancerCommand";
import {
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput
} from "../commands/DeleteRuleCommand";
import {
  DeleteTargetGroupCommandInput,
  DeleteTargetGroupCommandOutput
} from "../commands/DeleteTargetGroupCommand";
import {
  DeregisterTargetsCommandInput,
  DeregisterTargetsCommandOutput
} from "../commands/DeregisterTargetsCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput
} from "../commands/DescribeListenerCertificatesCommand";
import {
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput
} from "../commands/DescribeListenersCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput
} from "../commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
} from "../commands/DescribeLoadBalancersCommand";
import {
  DescribeRulesCommandInput,
  DescribeRulesCommandOutput
} from "../commands/DescribeRulesCommand";
import {
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput
} from "../commands/DescribeSSLPoliciesCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput
} from "../commands/DescribeTargetGroupAttributesCommand";
import {
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput
} from "../commands/DescribeTargetGroupsCommand";
import {
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput
} from "../commands/DescribeTargetHealthCommand";
import {
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput
} from "../commands/ModifyListenerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput
} from "../commands/ModifyLoadBalancerAttributesCommand";
import {
  ModifyRuleCommandInput,
  ModifyRuleCommandOutput
} from "../commands/ModifyRuleCommand";
import {
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput
} from "../commands/ModifyTargetGroupAttributesCommand";
import {
  ModifyTargetGroupCommandInput,
  ModifyTargetGroupCommandOutput
} from "../commands/ModifyTargetGroupCommand";
import {
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput
} from "../commands/RegisterTargetsCommand";
import {
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput
} from "../commands/RemoveListenerCertificatesCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "../commands/RemoveTagsCommand";
import {
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput
} from "../commands/SetIpAddressTypeCommand";
import {
  SetRulePrioritiesCommandInput,
  SetRulePrioritiesCommandOutput
} from "../commands/SetRulePrioritiesCommand";
import {
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput
} from "../commands/SetSecurityGroupsCommand";
import {
  SetSubnetsCommandInput,
  SetSubnetsCommandOutput
} from "../commands/SetSubnetsCommand";
import {
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
  UnsupportedProtocolException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export async function serializeAws_queryAddListenerCertificatesCommand(
  input: AddListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAddListenerCertificatesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AddListenerCertificates",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryAddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryAddTagsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AddTags",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateListenerCommand(
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateListenerInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateListener",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateLoadBalancerCommand(
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateLoadBalancerInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateLoadBalancer",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateRuleCommand(
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateRuleInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateRule",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryCreateTargetGroupCommand(
  input: CreateTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryCreateTargetGroupInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "CreateTargetGroup",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteListenerCommand(
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteListenerInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteListener",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteLoadBalancerCommand(
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteLoadBalancerInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteLoadBalancer",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteRuleCommand(
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteRuleInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteRule",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeleteTargetGroupCommand(
  input: DeleteTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeleteTargetGroupInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeleteTargetGroup",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDeregisterTargetsCommand(
  input: DeregisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDeregisterTargetsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DeregisterTargets",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeAccountLimitsCommand(
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeAccountLimitsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeAccountLimits",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeListenerCertificatesCommand(
  input: DescribeListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeListenerCertificatesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeListenerCertificates",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeListenersCommand(
  input: DescribeListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeListenersInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeListeners",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeLoadBalancerAttributesCommand(
  input: DescribeLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeLoadBalancerAttributesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeLoadBalancerAttributes",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeLoadBalancersCommand(
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeLoadBalancersInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeLoadBalancers",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeRulesCommand(
  input: DescribeRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeRulesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeRules",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeSSLPoliciesCommand(
  input: DescribeSSLPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeSSLPoliciesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeSSLPolicies",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTagsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeTags",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTargetGroupAttributesCommand(
  input: DescribeTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTargetGroupAttributesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeTargetGroupAttributes",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTargetGroupsCommand(
  input: DescribeTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTargetGroupsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeTargetGroups",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryDescribeTargetHealthCommand(
  input: DescribeTargetHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryDescribeTargetHealthInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DescribeTargetHealth",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyListenerCommand(
  input: ModifyListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyListenerInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyListener",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyLoadBalancerAttributesCommand(
  input: ModifyLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyLoadBalancerAttributesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyLoadBalancerAttributes",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyRuleCommand(
  input: ModifyRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyRuleInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyRule",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyTargetGroupCommand(
  input: ModifyTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyTargetGroupInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyTargetGroup",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryModifyTargetGroupAttributesCommand(
  input: ModifyTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryModifyTargetGroupAttributesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "ModifyTargetGroupAttributes",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRegisterTargetsCommand(
  input: RegisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRegisterTargetsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RegisterTargets",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRemoveListenerCertificatesCommand(
  input: RemoveListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRemoveListenerCertificatesInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RemoveListenerCertificates",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryRemoveTagsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "RemoveTags",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetIpAddressTypeCommand(
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetIpAddressTypeInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetIpAddressType",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetRulePrioritiesCommand(
  input: SetRulePrioritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetRulePrioritiesInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetRulePriorities",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetSecurityGroupsCommand(
  input: SetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetSecurityGroupsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetSecurityGroups",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySetSubnetsCommand(
  input: SetSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySetSubnetsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SetSubnets",
    Version: "2015-12-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_queryAddListenerCertificatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddListenerCertificatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddListenerCertificatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddListenerCertificatesOutput(
    data.AddListenerCertificatesResult,
    context
  );
  const response: AddListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddListenerCertificatesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAddListenerCertificatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddListenerCertificatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFoundException":
    case "com.amazon.elb.version_2015_12_01#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyCertificatesException":
    case "com.amazon.elb.version_2015_12_01#TooManyCertificatesException":
      response = {
        ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryAddTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTagKeysException":
    case "com.amazon.elb.version_2015_12_01#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateListenerOutput(
    data.CreateListenerResult,
    context
  );
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateListenerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFoundException":
    case "com.amazon.elb.version_2015_12_01#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateListenerException":
    case "com.amazon.elb.version_2015_12_01#DuplicateListenerException":
      response = {
        ...(await deserializeAws_queryDuplicateListenerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleProtocolsException":
    case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SSLPolicyNotFoundException":
    case "com.amazon.elb.version_2015_12_01#SSLPolicyNotFoundException":
      response = {
        ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyActionsException":
    case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyCertificatesException":
    case "com.amazon.elb.version_2015_12_01#TooManyCertificatesException":
      response = {
        ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyListenersException":
    case "com.amazon.elb.version_2015_12_01#TooManyListenersException":
      response = {
        ...(await deserializeAws_queryTooManyListenersExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoadBalancerOutput(
    data.CreateLoadBalancerResult,
    context
  );
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AllocationIdNotFoundException":
    case "com.amazon.elb.version_2015_12_01#AllocationIdNotFoundException":
      response = {
        ...(await deserializeAws_queryAllocationIdNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AvailabilityZoneNotSupportedException":
    case "com.amazon.elb.version_2015_12_01#AvailabilityZoneNotSupportedException":
      response = {
        ...(await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateLoadBalancerNameException":
    case "com.amazon.elb.version_2015_12_01#DuplicateLoadBalancerNameException":
      response = {
        ...(await deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazon.elb.version_2015_12_01#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSchemeException":
    case "com.amazon.elb.version_2015_12_01#InvalidSchemeException":
      response = {
        ...(await deserializeAws_queryInvalidSchemeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityGroupException":
    case "com.amazon.elb.version_2015_12_01#InvalidSecurityGroupException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetException":
    case "com.amazon.elb.version_2015_12_01#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.elb.version_2015_12_01#ResourceInUseException":
      response = {
        ...(await deserializeAws_queryResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetNotFoundException":
    case "com.amazon.elb.version_2015_12_01#SubnetNotFoundException":
      response = {
        ...(await deserializeAws_querySubnetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyLoadBalancersException":
    case "com.amazon.elb.version_2015_12_01#TooManyLoadBalancersException":
      response = {
        ...(await deserializeAws_queryTooManyLoadBalancersExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateRuleOutput(
    data.CreateRuleResult,
    context
  );
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRuleOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleProtocolsException":
    case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PriorityInUseException":
    case "com.amazon.elb.version_2015_12_01#PriorityInUseException":
      response = {
        ...(await deserializeAws_queryPriorityInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyActionsException":
    case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRulesException":
    case "com.amazon.elb.version_2015_12_01#TooManyRulesException":
      response = {
        ...(await deserializeAws_queryTooManyRulesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetGroupsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetGroupsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetGroupsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryCreateTargetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateTargetGroupOutput(
    data.CreateTargetGroupResult,
    context
  );
  const response: CreateTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTargetGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryCreateTargetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTargetGroupNameException":
    case "com.amazon.elb.version_2015_12_01#DuplicateTargetGroupNameException":
      response = {
        ...(await deserializeAws_queryDuplicateTargetGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetGroupsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetGroupsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetGroupsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteListenerOutput(
    data.DeleteListenerResult,
    context
  );
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteListenerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLoadBalancerOutput(
    data.DeleteLoadBalancerResult,
    context
  );
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.elb.version_2015_12_01#ResourceInUseException":
      response = {
        ...(await deserializeAws_queryResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteRuleOutput(
    data.DeleteRuleResult,
    context
  );
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRuleOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleNotFoundException":
    case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeleteTargetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteTargetGroupOutput(
    data.DeleteTargetGroupResult,
    context
  );
  const response: DeleteTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTargetGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeleteTargetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazon.elb.version_2015_12_01#ResourceInUseException":
      response = {
        ...(await deserializeAws_queryResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDeregisterTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeregisterTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterTargetsOutput(
    data.DeregisterTargetsResult,
    context
  );
  const response: DeregisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterTargetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDeregisterTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTargetException":
    case "com.amazon.elb.version_2015_12_01#InvalidTargetException":
      response = {
        ...(await deserializeAws_queryInvalidTargetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeAccountLimitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(
    data.DescribeAccountLimitsResult,
    context
  );
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountLimitsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeAccountLimitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeListenerCertificatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCertificatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeListenerCertificatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeListenerCertificatesOutput(
    data.DescribeListenerCertificatesResult,
    context
  );
  const response: DescribeListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeListenerCertificatesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeListenerCertificatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCertificatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeListenersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeListenersOutput(
    data.DescribeListenersResult,
    context
  );
  const response: DescribeListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeListenersOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeListenersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeLoadBalancerAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancerAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(
    data.DescribeLoadBalancerAttributesResult,
    context
  );
  const response: DescribeLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancerAttributesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeLoadBalancerAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeLoadBalancersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancersOutput(
    data.DescribeLoadBalancersResult,
    context
  );
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancersOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeLoadBalancersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeRulesOutput(
    data.DescribeRulesResult,
    context
  );
  const response: DescribeRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRulesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleNotFoundException":
    case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeSSLPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSSLPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeSSLPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSSLPoliciesOutput(
    data.DescribeSSLPoliciesResult,
    context
  );
  const response: DescribeSSLPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSSLPoliciesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeSSLPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSSLPoliciesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SSLPolicyNotFoundException":
    case "com.amazon.elb.version_2015_12_01#SSLPolicyNotFoundException":
      response = {
        ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTagsOutput(
    data.DescribeTagsResult,
    context
  );
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleNotFoundException":
    case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTargetGroupAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTargetGroupAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTargetGroupAttributesOutput(
    data.DescribeTargetGroupAttributesResult,
    context
  );
  const response: DescribeTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTargetGroupAttributesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTargetGroupAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTargetGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTargetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTargetGroupsOutput(
    data.DescribeTargetGroupsResult,
    context
  );
  const response: DescribeTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTargetGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTargetGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryDescribeTargetHealthCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetHealthCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTargetHealthCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTargetHealthOutput(
    data.DescribeTargetHealthResult,
    context
  );
  const response: DescribeTargetHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTargetHealthOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDescribeTargetHealthCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetHealthCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "HealthUnavailableException":
    case "com.amazon.elb.version_2015_12_01#HealthUnavailableException":
      response = {
        ...(await deserializeAws_queryHealthUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTargetException":
    case "com.amazon.elb.version_2015_12_01#InvalidTargetException":
      response = {
        ...(await deserializeAws_queryInvalidTargetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyListenerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyListenerOutput(
    data.ModifyListenerResult,
    context
  );
  const response: ModifyListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyListenerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyListenerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFoundException":
    case "com.amazon.elb.version_2015_12_01#CertificateNotFoundException":
      response = {
        ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateListenerException":
    case "com.amazon.elb.version_2015_12_01#DuplicateListenerException":
      response = {
        ...(await deserializeAws_queryDuplicateListenerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleProtocolsException":
    case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SSLPolicyNotFoundException":
    case "com.amazon.elb.version_2015_12_01#SSLPolicyNotFoundException":
      response = {
        ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyActionsException":
    case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyCertificatesException":
    case "com.amazon.elb.version_2015_12_01#TooManyCertificatesException":
      response = {
        ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyListenersException":
    case "com.amazon.elb.version_2015_12_01#TooManyListenersException":
      response = {
        ...(await deserializeAws_queryTooManyListenersExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyLoadBalancerAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyLoadBalancerAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(
    data.ModifyLoadBalancerAttributesResult,
    context
  );
  const response: ModifyLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyLoadBalancerAttributesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyLoadBalancerAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyRuleOutput(
    data.ModifyRuleResult,
    context
  );
  const response: ModifyRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyRuleOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRuleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleProtocolsException":
    case "com.amazon.elb.version_2015_12_01#IncompatibleProtocolsException":
      response = {
        ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerActionException":
    case "com.amazon.elb.version_2015_12_01#InvalidLoadBalancerActionException":
      response = {
        ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleNotFoundException":
    case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupAssociationLimitException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupAssociationLimitException":
      response = {
        ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyActionsException":
    case "com.amazon.elb.version_2015_12_01#TooManyActionsException":
      response = {
        ...(await deserializeAws_queryTooManyActionsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyUniqueTargetGroupsPerLoadBalancerException":
    case "com.amazon.elb.version_2015_12_01#TooManyUniqueTargetGroupsPerLoadBalancerException":
      response = {
        ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedProtocolException":
    case "com.amazon.elb.version_2015_12_01#UnsupportedProtocolException":
      response = {
        ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyTargetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyTargetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyTargetGroupOutput(
    data.ModifyTargetGroupResult,
    context
  );
  const response: ModifyTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyTargetGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyTargetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryModifyTargetGroupAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryModifyTargetGroupAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyTargetGroupAttributesOutput(
    data.ModifyTargetGroupAttributesResult,
    context
  );
  const response: ModifyTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyTargetGroupAttributesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryModifyTargetGroupAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRegisterTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRegisterTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterTargetsOutput(
    data.RegisterTargetsResult,
    context
  );
  const response: RegisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterTargetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRegisterTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTargetException":
    case "com.amazon.elb.version_2015_12_01#InvalidTargetException":
      response = {
        ...(await deserializeAws_queryInvalidTargetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRegistrationsForTargetIdException":
    case "com.amazon.elb.version_2015_12_01#TooManyRegistrationsForTargetIdException":
      response = {
        ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTargetsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTargetsException":
      response = {
        ...(await deserializeAws_queryTooManyTargetsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRemoveListenerCertificatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveListenerCertificatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveListenerCertificatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveListenerCertificatesOutput(
    data.RemoveListenerCertificatesResult,
    context
  );
  const response: RemoveListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveListenerCertificatesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRemoveListenerCertificatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveListenerCertificatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRemoveTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveTagsOutput(
    data.RemoveTagsResult,
    context
  );
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRemoveTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ListenerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_queryListenerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleNotFoundException":
    case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TargetGroupNotFoundException":
    case "com.amazon.elb.version_2015_12_01#TargetGroupNotFoundException":
      response = {
        ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.elb.version_2015_12_01#TooManyTagsException":
      response = {
        ...(await deserializeAws_queryTooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetIpAddressTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetIpAddressTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetIpAddressTypeOutput(
    data.SetIpAddressTypeResult,
    context
  );
  const response: SetIpAddressTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetIpAddressTypeOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetIpAddressTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetException":
    case "com.amazon.elb.version_2015_12_01#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetRulePrioritiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRulePrioritiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetRulePrioritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetRulePrioritiesOutput(
    data.SetRulePrioritiesResult,
    context
  );
  const response: SetRulePrioritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetRulePrioritiesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetRulePrioritiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRulePrioritiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazon.elb.version_2015_12_01#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PriorityInUseException":
    case "com.amazon.elb.version_2015_12_01#PriorityInUseException":
      response = {
        ...(await deserializeAws_queryPriorityInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleNotFoundException":
    case "com.amazon.elb.version_2015_12_01#RuleNotFoundException":
      response = {
        ...(await deserializeAws_queryRuleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetSecurityGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetSecurityGroupsOutput(
    data.SetSecurityGroupsResult,
    context
  );
  const response: SetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetSecurityGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityGroupException":
    case "com.amazon.elb.version_2015_12_01#InvalidSecurityGroupException":
      response = {
        ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySetSubnetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubnetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetSubnetsOutput(
    data.SetSubnetsResult,
    context
  );
  const response: SetSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetSubnetsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySetSubnetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubnetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AllocationIdNotFoundException":
    case "com.amazon.elb.version_2015_12_01#AllocationIdNotFoundException":
      response = {
        ...(await deserializeAws_queryAllocationIdNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AvailabilityZoneNotSupportedException":
    case "com.amazon.elb.version_2015_12_01#AvailabilityZoneNotSupportedException":
      response = {
        ...(await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationRequestException":
    case "com.amazon.elb.version_2015_12_01#InvalidConfigurationRequestException":
      response = {
        ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetException":
    case "com.amazon.elb.version_2015_12_01#InvalidSubnetException":
      response = {
        ...(await deserializeAws_queryInvalidSubnetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoadBalancerNotFoundException":
    case "com.amazon.elb.version_2015_12_01#LoadBalancerNotFoundException":
      response = {
        ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetNotFoundException":
    case "com.amazon.elb.version_2015_12_01#SubnetNotFoundException":
      response = {
        ...(await deserializeAws_querySubnetNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_queryAllocationIdNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AllocationIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAllocationIdNotFoundException(
    body.Error,
    context
  );
  const contents: AllocationIdNotFoundException = {
    name: "AllocationIdNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZoneNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAvailabilityZoneNotSupportedException(
    body.Error,
    context
  );
  const contents: AvailabilityZoneNotSupportedException = {
    name: "AvailabilityZoneNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryCertificateNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundException(
    body.Error,
    context
  );
  const contents: CertificateNotFoundException = {
    name: "CertificateNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateListenerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateListenerException(
    body.Error,
    context
  );
  const contents: DuplicateListenerException = {
    name: "DuplicateListenerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateLoadBalancerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateLoadBalancerNameException(
    body.Error,
    context
  );
  const contents: DuplicateLoadBalancerNameException = {
    name: "DuplicateLoadBalancerNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTagKeysException(
    body.Error,
    context
  );
  const contents: DuplicateTagKeysException = {
    name: "DuplicateTagKeysException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDuplicateTargetGroupNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTargetGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTargetGroupNameException(
    body.Error,
    context
  );
  const contents: DuplicateTargetGroupNameException = {
    name: "DuplicateTargetGroupNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryHealthUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryHealthUnavailableException(
    body.Error,
    context
  );
  const contents: HealthUnavailableException = {
    name: "HealthUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryIncompatibleProtocolsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleProtocolsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIncompatibleProtocolsException(
    body.Error,
    context
  );
  const contents: IncompatibleProtocolsException = {
    name: "IncompatibleProtocolsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidConfigurationRequestException(
    body.Error,
    context
  );
  const contents: InvalidConfigurationRequestException = {
    name: "InvalidConfigurationRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidLoadBalancerActionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidLoadBalancerActionException(
    body.Error,
    context
  );
  const contents: InvalidLoadBalancerActionException = {
    name: "InvalidLoadBalancerActionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSchemeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSchemeException(
    body.Error,
    context
  );
  const contents: InvalidSchemeException = {
    name: "InvalidSchemeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityGroupException(
    body.Error,
    context
  );
  const contents: InvalidSecurityGroupException = {
    name: "InvalidSecurityGroupException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidSubnetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnetException(
    body.Error,
    context
  );
  const contents: InvalidSubnetException = {
    name: "InvalidSubnetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidTargetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTargetException(
    body.Error,
    context
  );
  const contents: InvalidTargetException = {
    name: "InvalidTargetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryListenerNotFoundException(
    body.Error,
    context
  );
  const contents: ListenerNotFoundException = {
    name: "ListenerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLoadBalancerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLoadBalancerNotFoundException(
    body.Error,
    context
  );
  const contents: LoadBalancerNotFoundException = {
    name: "LoadBalancerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryOperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotPermittedException(
    body.Error,
    context
  );
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryPriorityInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorityInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPriorityInUseException(
    body.Error,
    context
  );
  const contents: PriorityInUseException = {
    name: "PriorityInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceInUseException(
    body.Error,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryRuleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRuleNotFoundException(
    body.Error,
    context
  );
  const contents: RuleNotFoundException = {
    name: "RuleNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySSLPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SSLPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySSLPolicyNotFoundException(
    body.Error,
    context
  );
  const contents: SSLPolicyNotFoundException = {
    name: "SSLPolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_querySubnetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetNotFoundException(
    body.Error,
    context
  );
  const contents: SubnetNotFoundException = {
    name: "SubnetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTargetGroupAssociationLimitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupAssociationLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTargetGroupAssociationLimitException(
    body.Error,
    context
  );
  const contents: TargetGroupAssociationLimitException = {
    name: "TargetGroupAssociationLimitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTargetGroupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTargetGroupNotFoundException(
    body.Error,
    context
  );
  const contents: TargetGroupNotFoundException = {
    name: "TargetGroupNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyActionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyActionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyActionsException(
    body.Error,
    context
  );
  const contents: TooManyActionsException = {
    name: "TooManyActionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyCertificatesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCertificatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyCertificatesException(
    body.Error,
    context
  );
  const contents: TooManyCertificatesException = {
    name: "TooManyCertificatesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyListenersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyListenersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyListenersException(
    body.Error,
    context
  );
  const contents: TooManyListenersException = {
    name: "TooManyListenersException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyLoadBalancersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLoadBalancersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyLoadBalancersException(
    body.Error,
    context
  );
  const contents: TooManyLoadBalancersException = {
    name: "TooManyLoadBalancersException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRegistrationsForTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyRegistrationsForTargetIdException(
    body.Error,
    context
  );
  const contents: TooManyRegistrationsForTargetIdException = {
    name: "TooManyRegistrationsForTargetIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyRulesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRulesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyRulesException(
    body.Error,
    context
  );
  const contents: TooManyRulesException = {
    name: "TooManyRulesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(
    body.Error,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyTargetGroupsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetGroupsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTargetGroupsException(
    body.Error,
    context
  );
  const contents: TooManyTargetGroupsException = {
    name: "TooManyTargetGroupsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyTargetsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTargetsException(
    body.Error,
    context
  );
  const contents: TooManyTargetsException = {
    name: "TooManyTargetsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyUniqueTargetGroupsPerLoadBalancerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException(
    body.Error,
    context
  );
  const contents: TooManyUniqueTargetGroupsPerLoadBalancerException = {
    name: "TooManyUniqueTargetGroupsPerLoadBalancerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedProtocolException(
    body.Error,
    context
  );
  const contents: UnsupportedProtocolException = {
    name: "UnsupportedProtocolException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAction = (
  input: Action,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticateCognitoConfig !== undefined) {
    const memberEntries = serializeAws_queryAuthenticateCognitoActionConfig(
      input.AuthenticateCognitoConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AuthenticateCognitoConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.AuthenticateOidcConfig !== undefined) {
    const memberEntries = serializeAws_queryAuthenticateOidcActionConfig(
      input.AuthenticateOidcConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AuthenticateOidcConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.FixedResponseConfig !== undefined) {
    const memberEntries = serializeAws_queryFixedResponseActionConfig(
      input.FixedResponseConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `FixedResponseConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ForwardConfig !== undefined) {
    const memberEntries = serializeAws_queryForwardActionConfig(
      input.ForwardConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ForwardConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Order !== undefined) {
    entries["Order"] = input.Order;
  }
  if (input.RedirectConfig !== undefined) {
    const memberEntries = serializeAws_queryRedirectActionConfig(
      input.RedirectConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RedirectConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  return entries;
};

const serializeAws_queryActions = (
  input: Array<Action>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryAction(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
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
  if (input.Certificates !== undefined) {
    const memberEntries = serializeAws_queryCertificateList(
      input.Certificates,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Certificates.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  return entries;
};

const serializeAws_queryAddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArns !== undefined) {
    const memberEntries = serializeAws_queryResourceArns(
      input.ResourceArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.key.${counter}`] = key;
    entries[`entry.value.${counter}`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryAuthenticateCognitoActionConfig = (
  input: AuthenticateCognitoActionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationRequestExtraParams !== undefined) {
    const memberEntries = serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(
      input.AuthenticationRequestExtraParams,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.OnUnauthenticatedRequest !== undefined) {
    entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
  }
  if (input.Scope !== undefined) {
    entries["Scope"] = input.Scope;
  }
  if (input.SessionCookieName !== undefined) {
    entries["SessionCookieName"] = input.SessionCookieName;
  }
  if (input.SessionTimeout !== undefined) {
    entries["SessionTimeout"] = input.SessionTimeout;
  }
  if (input.UserPoolArn !== undefined) {
    entries["UserPoolArn"] = input.UserPoolArn;
  }
  if (input.UserPoolClientId !== undefined) {
    entries["UserPoolClientId"] = input.UserPoolClientId;
  }
  if (input.UserPoolDomain !== undefined) {
    entries["UserPoolDomain"] = input.UserPoolDomain;
  }
  return entries;
};

const serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.key.${counter}`] = key;
    entries[`entry.value.${counter}`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryAuthenticateOidcActionConfig = (
  input: AuthenticateOidcActionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AuthenticationRequestExtraParams !== undefined) {
    const memberEntries = serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(
      input.AuthenticationRequestExtraParams,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.AuthorizationEndpoint !== undefined) {
    entries["AuthorizationEndpoint"] = input.AuthorizationEndpoint;
  }
  if (input.ClientId !== undefined) {
    entries["ClientId"] = input.ClientId;
  }
  if (input.ClientSecret !== undefined) {
    entries["ClientSecret"] = input.ClientSecret;
  }
  if (input.Issuer !== undefined) {
    entries["Issuer"] = input.Issuer;
  }
  if (input.OnUnauthenticatedRequest !== undefined) {
    entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
  }
  if (input.Scope !== undefined) {
    entries["Scope"] = input.Scope;
  }
  if (input.SessionCookieName !== undefined) {
    entries["SessionCookieName"] = input.SessionCookieName;
  }
  if (input.SessionTimeout !== undefined) {
    entries["SessionTimeout"] = input.SessionTimeout;
  }
  if (input.TokenEndpoint !== undefined) {
    entries["TokenEndpoint"] = input.TokenEndpoint;
  }
  if (input.UseExistingClientSecret !== undefined) {
    entries["UseExistingClientSecret"] = input.UseExistingClientSecret;
  }
  if (input.UserInfoEndpoint !== undefined) {
    entries["UserInfoEndpoint"] = input.UserInfoEndpoint;
  }
  return entries;
};

const serializeAws_queryCertificate = (
  input: Certificate,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateArn !== undefined) {
    entries["CertificateArn"] = input.CertificateArn;
  }
  if (input.IsDefault !== undefined) {
    entries["IsDefault"] = input.IsDefault;
  }
  return entries;
};

const serializeAws_queryCertificateList = (
  input: Array<Certificate>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryCertificate(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCreateListenerInput = (
  input: CreateListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Certificates !== undefined) {
    const memberEntries = serializeAws_queryCertificateList(
      input.Certificates,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Certificates.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.DefaultActions !== undefined) {
    const memberEntries = serializeAws_queryActions(
      input.DefaultActions,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.Protocol !== undefined) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.SslPolicy !== undefined) {
    entries["SslPolicy"] = input.SslPolicy;
  }
  return entries;
};

const serializeAws_queryCreateLoadBalancerInput = (
  input: CreateLoadBalancerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.IpAddressType !== undefined) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Scheme !== undefined) {
    entries["Scheme"] = input.Scheme;
  }
  if (input.SecurityGroups !== undefined) {
    const memberEntries = serializeAws_querySecurityGroups(
      input.SecurityGroups,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SubnetMappings !== undefined) {
    const memberEntries = serializeAws_querySubnetMappings(
      input.SubnetMappings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Subnets !== undefined) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Subnets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Type !== undefined) {
    entries["Type"] = input.Type;
  }
  return entries;
};

const serializeAws_queryCreateRuleInput = (
  input: CreateRuleInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Actions !== undefined) {
    const memberEntries = serializeAws_queryActions(input.Actions, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Actions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Conditions !== undefined) {
    const memberEntries = serializeAws_queryRuleConditionList(
      input.Conditions,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Conditions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Priority !== undefined) {
    entries["Priority"] = input.Priority;
  }
  return entries;
};

const serializeAws_queryCreateTargetGroupInput = (
  input: CreateTargetGroupInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HealthCheckEnabled !== undefined) {
    entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
  }
  if (input.HealthCheckIntervalSeconds !== undefined) {
    entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckPath !== undefined) {
    entries["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckPort !== undefined) {
    entries["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckProtocol !== undefined) {
    entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.HealthCheckTimeoutSeconds !== undefined) {
    entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
  }
  if (input.HealthyThresholdCount !== undefined) {
    entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
  }
  if (input.Matcher !== undefined) {
    const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Matcher.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.Protocol !== undefined) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.TargetType !== undefined) {
    entries["TargetType"] = input.TargetType;
  }
  if (input.UnhealthyThresholdCount !== undefined) {
    entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
  }
  if (input.VpcId !== undefined) {
    entries["VpcId"] = input.VpcId;
  }
  return entries;
};

const serializeAws_queryDeleteListenerInput = (
  input: DeleteListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  return entries;
};

const serializeAws_queryDeleteLoadBalancerInput = (
  input: DeleteLoadBalancerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryDeleteRuleInput = (
  input: DeleteRuleInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleArn !== undefined) {
    entries["RuleArn"] = input.RuleArn;
  }
  return entries;
};

const serializeAws_queryDeleteTargetGroupInput = (
  input: DeleteTargetGroupInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryDeregisterTargetsInput = (
  input: DeregisterTargetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets !== undefined) {
    const memberEntries = serializeAws_queryTargetDescriptions(
      input.Targets,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Targets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeAccountLimitsInput = (
  input: DescribeAccountLimitsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeListenerCertificatesInput = (
  input: DescribeListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeListenersInput = (
  input: DescribeListenersInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArns !== undefined) {
    const memberEntries = serializeAws_queryListenerArns(
      input.ListenerArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ListenerArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancersInput = (
  input: DescribeLoadBalancersInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArns !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerArns(
      input.LoadBalancerArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `LoadBalancerArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.Names !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.Names,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Names.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeRulesInput = (
  input: DescribeRulesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  if (input.RuleArns !== undefined) {
    const memberEntries = serializeAws_queryRuleArns(input.RuleArns, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `RuleArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeSSLPoliciesInput = (
  input: DescribeSSLPoliciesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.Names !== undefined) {
    const memberEntries = serializeAws_querySslPolicyNames(
      input.Names,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Names.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeTagsInput = (
  input: DescribeTagsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArns !== undefined) {
    const memberEntries = serializeAws_queryResourceArns(
      input.ResourceArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeTargetGroupAttributesInput = (
  input: DescribeTargetGroupAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryDescribeTargetGroupsInput = (
  input: DescribeTargetGroupsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.Names !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupNames(
      input.Names,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Names.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PageSize !== undefined) {
    entries["PageSize"] = input.PageSize;
  }
  if (input.TargetGroupArns !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupArns(
      input.TargetGroupArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `TargetGroupArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryDescribeTargetHealthInput = (
  input: DescribeTargetHealthInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets !== undefined) {
    const memberEntries = serializeAws_queryTargetDescriptions(
      input.Targets,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Targets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryFixedResponseActionConfig = (
  input: FixedResponseActionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ContentType !== undefined) {
    entries["ContentType"] = input.ContentType;
  }
  if (input.MessageBody !== undefined) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.StatusCode !== undefined) {
    entries["StatusCode"] = input.StatusCode;
  }
  return entries;
};

const serializeAws_queryForwardActionConfig = (
  input: ForwardActionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupStickinessConfig !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupStickinessConfig(
      input.TargetGroupStickinessConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `TargetGroupStickinessConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TargetGroups !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupList(
      input.TargetGroups,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `TargetGroups.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryHostHeaderConditionConfig = (
  input: HostHeaderConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryHttpHeaderConditionConfig = (
  input: HttpHeaderConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HttpHeaderName !== undefined) {
    entries["HttpHeaderName"] = input.HttpHeaderName;
  }
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryHttpRequestMethodConditionConfig = (
  input: HttpRequestMethodConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryListOfString = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryListenerArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerAttribute = (
  input: LoadBalancerAttribute,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryLoadBalancerAttributes = (
  input: Array<LoadBalancerAttribute>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryLoadBalancerAttribute(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryMatcher = (
  input: Matcher,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HttpCode !== undefined) {
    entries["HttpCode"] = input.HttpCode;
  }
  return entries;
};

const serializeAws_queryModifyListenerInput = (
  input: ModifyListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Certificates !== undefined) {
    const memberEntries = serializeAws_queryCertificateList(
      input.Certificates,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Certificates.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.DefaultActions !== undefined) {
    const memberEntries = serializeAws_queryActions(
      input.DefaultActions,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.Protocol !== undefined) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.SslPolicy !== undefined) {
    entries["SslPolicy"] = input.SslPolicy;
  }
  return entries;
};

const serializeAws_queryModifyLoadBalancerAttributesInput = (
  input: ModifyLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerAttributes(
      input.Attributes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Attributes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_queryModifyRuleInput = (
  input: ModifyRuleInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Actions !== undefined) {
    const memberEntries = serializeAws_queryActions(input.Actions, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Actions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Conditions !== undefined) {
    const memberEntries = serializeAws_queryRuleConditionList(
      input.Conditions,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Conditions.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RuleArn !== undefined) {
    entries["RuleArn"] = input.RuleArn;
  }
  return entries;
};

const serializeAws_queryModifyTargetGroupAttributesInput = (
  input: ModifyTargetGroupAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupAttributes(
      input.Attributes,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Attributes.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  return entries;
};

const serializeAws_queryModifyTargetGroupInput = (
  input: ModifyTargetGroupInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HealthCheckEnabled !== undefined) {
    entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
  }
  if (input.HealthCheckIntervalSeconds !== undefined) {
    entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
  }
  if (input.HealthCheckPath !== undefined) {
    entries["HealthCheckPath"] = input.HealthCheckPath;
  }
  if (input.HealthCheckPort !== undefined) {
    entries["HealthCheckPort"] = input.HealthCheckPort;
  }
  if (input.HealthCheckProtocol !== undefined) {
    entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
  }
  if (input.HealthCheckTimeoutSeconds !== undefined) {
    entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
  }
  if (input.HealthyThresholdCount !== undefined) {
    entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
  }
  if (input.Matcher !== undefined) {
    const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Matcher.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.UnhealthyThresholdCount !== undefined) {
    entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
  }
  return entries;
};

const serializeAws_queryPathPatternConditionConfig = (
  input: PathPatternConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryQueryStringConditionConfig = (
  input: QueryStringConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryQueryStringKeyValuePairList(
      input.Values,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryQueryStringKeyValuePair = (
  input: QueryStringKeyValuePair,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryQueryStringKeyValuePairList = (
  input: Array<QueryStringKeyValuePair>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryQueryStringKeyValuePair(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRedirectActionConfig = (
  input: RedirectActionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Host !== undefined) {
    entries["Host"] = input.Host;
  }
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  if (input.Protocol !== undefined) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.Query !== undefined) {
    entries["Query"] = input.Query;
  }
  if (input.StatusCode !== undefined) {
    entries["StatusCode"] = input.StatusCode;
  }
  return entries;
};

const serializeAws_queryRegisterTargetsInput = (
  input: RegisterTargetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Targets !== undefined) {
    const memberEntries = serializeAws_queryTargetDescriptions(
      input.Targets,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Targets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryRemoveListenerCertificatesInput = (
  input: RemoveListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Certificates !== undefined) {
    const memberEntries = serializeAws_queryCertificateList(
      input.Certificates,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Certificates.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListenerArn !== undefined) {
    entries["ListenerArn"] = input.ListenerArn;
  }
  return entries;
};

const serializeAws_queryRemoveTagsInput = (
  input: RemoveTagsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArns !== undefined) {
    const memberEntries = serializeAws_queryResourceArns(
      input.ResourceArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_queryTagKeys(input.TagKeys, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `TagKeys.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryResourceArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRuleArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryRuleCondition = (
  input: RuleCondition,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Field !== undefined) {
    entries["Field"] = input.Field;
  }
  if (input.HostHeaderConfig !== undefined) {
    const memberEntries = serializeAws_queryHostHeaderConditionConfig(
      input.HostHeaderConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `HostHeaderConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.HttpHeaderConfig !== undefined) {
    const memberEntries = serializeAws_queryHttpHeaderConditionConfig(
      input.HttpHeaderConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `HttpHeaderConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.HttpRequestMethodConfig !== undefined) {
    const memberEntries = serializeAws_queryHttpRequestMethodConditionConfig(
      input.HttpRequestMethodConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `HttpRequestMethodConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PathPatternConfig !== undefined) {
    const memberEntries = serializeAws_queryPathPatternConditionConfig(
      input.PathPatternConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PathPatternConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.QueryStringConfig !== undefined) {
    const memberEntries = serializeAws_queryQueryStringConditionConfig(
      input.QueryStringConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `QueryStringConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.SourceIpConfig !== undefined) {
    const memberEntries = serializeAws_querySourceIpConditionConfig(
      input.SourceIpConfig,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SourceIpConfig.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryRuleConditionList = (
  input: Array<RuleCondition>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryRuleCondition(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRulePriorityList = (
  input: Array<RulePriorityPair>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryRulePriorityPair(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryRulePriorityPair = (
  input: RulePriorityPair,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Priority !== undefined) {
    entries["Priority"] = input.Priority;
  }
  if (input.RuleArn !== undefined) {
    entries["RuleArn"] = input.RuleArn;
  }
  return entries;
};

const serializeAws_querySecurityGroups = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySetIpAddressTypeInput = (
  input: SetIpAddressTypeInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.IpAddressType !== undefined) {
    entries["IpAddressType"] = input.IpAddressType;
  }
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  return entries;
};

const serializeAws_querySetRulePrioritiesInput = (
  input: SetRulePrioritiesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RulePriorities !== undefined) {
    const memberEntries = serializeAws_queryRulePriorityList(
      input.RulePriorities,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RulePriorities.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySetSecurityGroupsInput = (
  input: SetSecurityGroupsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.SecurityGroups !== undefined) {
    const memberEntries = serializeAws_querySecurityGroups(
      input.SecurityGroups,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySetSubnetsInput = (
  input: SetSubnetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerArn !== undefined) {
    entries["LoadBalancerArn"] = input.LoadBalancerArn;
  }
  if (input.SubnetMappings !== undefined) {
    const memberEntries = serializeAws_querySubnetMappings(
      input.SubnetMappings,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Subnets !== undefined) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Subnets.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySourceIpConditionConfig = (
  input: SourceIpConditionConfig,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryListOfString(input.Values, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Values.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_querySslPolicyNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySubnetMapping = (
  input: SubnetMapping,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AllocationId !== undefined) {
    entries["AllocationId"] = input.AllocationId;
  }
  if (input.PrivateIPv4Address !== undefined) {
    entries["PrivateIPv4Address"] = input.PrivateIPv4Address;
  }
  if (input.SubnetId !== undefined) {
    entries["SubnetId"] = input.SubnetId;
  }
  return entries;
};

const serializeAws_querySubnetMappings = (
  input: Array<SubnetMapping>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_querySubnetMapping(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySubnets = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetDescription = (
  input: TargetDescription,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AvailabilityZone !== undefined) {
    entries["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.Id !== undefined) {
    entries["Id"] = input.Id;
  }
  if (input.Port !== undefined) {
    entries["Port"] = input.Port;
  }
  return entries;
};

const serializeAws_queryTargetDescriptions = (
  input: Array<TargetDescription>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTargetDescription(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupAttribute = (
  input: TargetGroupAttribute,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTargetGroupAttributes = (
  input: Array<TargetGroupAttribute>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTargetGroupAttribute(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupList = (
  input: Array<TargetGroupTuple>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTargetGroupTuple(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.DurationSeconds !== undefined) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryTargetGroupTuple = (
  input: TargetGroupTuple,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetGroupArn !== undefined) {
    entries["TargetGroupArn"] = input.TargetGroupArn;
  }
  if (input.Weight !== undefined) {
    entries["Weight"] = input.Weight;
  }
  return entries;
};

const deserializeAws_queryAction = (
  output: any,
  context: __SerdeContext
): Action => {
  let contents: any = {
    __type: "Action",
    AuthenticateCognitoConfig: undefined,
    AuthenticateOidcConfig: undefined,
    FixedResponseConfig: undefined,
    ForwardConfig: undefined,
    Order: undefined,
    RedirectConfig: undefined,
    TargetGroupArn: undefined,
    Type: undefined
  };
  if (output["AuthenticateCognitoConfig"] !== undefined) {
    contents.AuthenticateCognitoConfig = deserializeAws_queryAuthenticateCognitoActionConfig(
      output["AuthenticateCognitoConfig"],
      context
    );
  }
  if (output["AuthenticateOidcConfig"] !== undefined) {
    contents.AuthenticateOidcConfig = deserializeAws_queryAuthenticateOidcActionConfig(
      output["AuthenticateOidcConfig"],
      context
    );
  }
  if (output["FixedResponseConfig"] !== undefined) {
    contents.FixedResponseConfig = deserializeAws_queryFixedResponseActionConfig(
      output["FixedResponseConfig"],
      context
    );
  }
  if (output["ForwardConfig"] !== undefined) {
    contents.ForwardConfig = deserializeAws_queryForwardActionConfig(
      output["ForwardConfig"],
      context
    );
  }
  if (output["Order"] !== undefined) {
    contents.Order = parseInt(output["Order"]);
  }
  if (output["RedirectConfig"] !== undefined) {
    contents.RedirectConfig = deserializeAws_queryRedirectActionConfig(
      output["RedirectConfig"],
      context
    );
  }
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = output["TargetGroupArn"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  return contents;
};

const deserializeAws_queryActions = (
  output: any,
  context: __SerdeContext
): Array<Action> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAction(entry, context)
  );
};

const deserializeAws_queryAddListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): AddListenerCertificatesOutput => {
  let contents: any = {
    __type: "AddListenerCertificatesOutput",
    Certificates: undefined
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (
    output["Certificates"] !== undefined &&
    output["Certificates"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Certificates"]["member"] instanceof Array
        ? output["Certificates"]["member"]
        : [output["Certificates"]["member"]];
    contents.Certificates = deserializeAws_queryCertificateList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryAddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  let contents: any = {
    __type: "AddTagsOutput"
  };
  return contents;
};

const deserializeAws_queryAllocationIdNotFoundException = (
  output: any,
  context: __SerdeContext
): AllocationIdNotFoundException => {
  let contents: any = {
    __type: "AllocationIdNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = pair["value"];
  });
  return mapParams;
};

const deserializeAws_queryAuthenticateCognitoActionConfig = (
  output: any,
  context: __SerdeContext
): AuthenticateCognitoActionConfig => {
  let contents: any = {
    __type: "AuthenticateCognitoActionConfig",
    AuthenticationRequestExtraParams: undefined,
    OnUnauthenticatedRequest: undefined,
    Scope: undefined,
    SessionCookieName: undefined,
    SessionTimeout: undefined,
    UserPoolArn: undefined,
    UserPoolClientId: undefined,
    UserPoolDomain: undefined
  };
  if (output.AuthenticationRequestExtraParams === "") {
    contents.AuthenticationRequestExtraParams = {};
  }
  if (
    output["AuthenticationRequestExtraParams"] !== undefined &&
    output["AuthenticationRequestExtraParams"]["entry"] !== undefined
  ) {
    const wrappedItem =
      output["AuthenticationRequestExtraParams"]["entry"] instanceof Array
        ? output["AuthenticationRequestExtraParams"]["entry"]
        : [output["AuthenticationRequestExtraParams"]["entry"]];
    contents.AuthenticationRequestExtraParams = deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(
      wrappedItem,
      context
    );
  }
  if (output["OnUnauthenticatedRequest"] !== undefined) {
    contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
  }
  if (output["Scope"] !== undefined) {
    contents.Scope = output["Scope"];
  }
  if (output["SessionCookieName"] !== undefined) {
    contents.SessionCookieName = output["SessionCookieName"];
  }
  if (output["SessionTimeout"] !== undefined) {
    contents.SessionTimeout = parseInt(output["SessionTimeout"]);
  }
  if (output["UserPoolArn"] !== undefined) {
    contents.UserPoolArn = output["UserPoolArn"];
  }
  if (output["UserPoolClientId"] !== undefined) {
    contents.UserPoolClientId = output["UserPoolClientId"];
  }
  if (output["UserPoolDomain"] !== undefined) {
    contents.UserPoolDomain = output["UserPoolDomain"];
  }
  return contents;
};

const deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = pair["value"];
  });
  return mapParams;
};

const deserializeAws_queryAuthenticateOidcActionConfig = (
  output: any,
  context: __SerdeContext
): AuthenticateOidcActionConfig => {
  let contents: any = {
    __type: "AuthenticateOidcActionConfig",
    AuthenticationRequestExtraParams: undefined,
    AuthorizationEndpoint: undefined,
    ClientId: undefined,
    ClientSecret: undefined,
    Issuer: undefined,
    OnUnauthenticatedRequest: undefined,
    Scope: undefined,
    SessionCookieName: undefined,
    SessionTimeout: undefined,
    TokenEndpoint: undefined,
    UseExistingClientSecret: undefined,
    UserInfoEndpoint: undefined
  };
  if (output.AuthenticationRequestExtraParams === "") {
    contents.AuthenticationRequestExtraParams = {};
  }
  if (
    output["AuthenticationRequestExtraParams"] !== undefined &&
    output["AuthenticationRequestExtraParams"]["entry"] !== undefined
  ) {
    const wrappedItem =
      output["AuthenticationRequestExtraParams"]["entry"] instanceof Array
        ? output["AuthenticationRequestExtraParams"]["entry"]
        : [output["AuthenticationRequestExtraParams"]["entry"]];
    contents.AuthenticationRequestExtraParams = deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(
      wrappedItem,
      context
    );
  }
  if (output["AuthorizationEndpoint"] !== undefined) {
    contents.AuthorizationEndpoint = output["AuthorizationEndpoint"];
  }
  if (output["ClientId"] !== undefined) {
    contents.ClientId = output["ClientId"];
  }
  if (output["ClientSecret"] !== undefined) {
    contents.ClientSecret = output["ClientSecret"];
  }
  if (output["Issuer"] !== undefined) {
    contents.Issuer = output["Issuer"];
  }
  if (output["OnUnauthenticatedRequest"] !== undefined) {
    contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
  }
  if (output["Scope"] !== undefined) {
    contents.Scope = output["Scope"];
  }
  if (output["SessionCookieName"] !== undefined) {
    contents.SessionCookieName = output["SessionCookieName"];
  }
  if (output["SessionTimeout"] !== undefined) {
    contents.SessionTimeout = parseInt(output["SessionTimeout"]);
  }
  if (output["TokenEndpoint"] !== undefined) {
    contents.TokenEndpoint = output["TokenEndpoint"];
  }
  if (output["UseExistingClientSecret"] !== undefined) {
    contents.UseExistingClientSecret =
      output["UseExistingClientSecret"] == "true";
  }
  if (output["UserInfoEndpoint"] !== undefined) {
    contents.UserInfoEndpoint = output["UserInfoEndpoint"];
  }
  return contents;
};

const deserializeAws_queryAvailabilityZone = (
  output: any,
  context: __SerdeContext
): AvailabilityZone => {
  let contents: any = {
    __type: "AvailabilityZone",
    LoadBalancerAddresses: undefined,
    SubnetId: undefined,
    ZoneName: undefined
  };
  if (output.LoadBalancerAddresses === "") {
    contents.LoadBalancerAddresses = [];
  }
  if (
    output["LoadBalancerAddresses"] !== undefined &&
    output["LoadBalancerAddresses"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadBalancerAddresses"]["member"] instanceof Array
        ? output["LoadBalancerAddresses"]["member"]
        : [output["LoadBalancerAddresses"]["member"]];
    contents.LoadBalancerAddresses = deserializeAws_queryLoadBalancerAddresses(
      wrappedItem,
      context
    );
  }
  if (output["SubnetId"] !== undefined) {
    contents.SubnetId = output["SubnetId"];
  }
  if (output["ZoneName"] !== undefined) {
    contents.ZoneName = output["ZoneName"];
  }
  return contents;
};

const deserializeAws_queryAvailabilityZoneNotSupportedException = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneNotSupportedException => {
  let contents: any = {
    __type: "AvailabilityZoneNotSupportedException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryAvailabilityZones = (
  output: any,
  context: __SerdeContext
): Array<AvailabilityZone> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAvailabilityZone(entry, context)
  );
};

const deserializeAws_queryCertificate = (
  output: any,
  context: __SerdeContext
): Certificate => {
  let contents: any = {
    __type: "Certificate",
    CertificateArn: undefined,
    IsDefault: undefined
  };
  if (output["CertificateArn"] !== undefined) {
    contents.CertificateArn = output["CertificateArn"];
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = output["IsDefault"] == "true";
  }
  return contents;
};

const deserializeAws_queryCertificateList = (
  output: any,
  context: __SerdeContext
): Array<Certificate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCertificate(entry, context)
  );
};

const deserializeAws_queryCertificateNotFoundException = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundException => {
  let contents: any = {
    __type: "CertificateNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryCipher = (
  output: any,
  context: __SerdeContext
): Cipher => {
  let contents: any = {
    __type: "Cipher",
    Name: undefined,
    Priority: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  return contents;
};

const deserializeAws_queryCiphers = (
  output: any,
  context: __SerdeContext
): Array<Cipher> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryCipher(entry, context)
  );
};

const deserializeAws_queryCreateListenerOutput = (
  output: any,
  context: __SerdeContext
): CreateListenerOutput => {
  let contents: any = {
    __type: "CreateListenerOutput",
    Listeners: undefined
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (
    output["Listeners"] !== undefined &&
    output["Listeners"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Listeners"]["member"] instanceof Array
        ? output["Listeners"]["member"]
        : [output["Listeners"]["member"]];
    contents.Listeners = deserializeAws_queryListeners(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryCreateLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerOutput => {
  let contents: any = {
    __type: "CreateLoadBalancerOutput",
    LoadBalancers: undefined
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (
    output["LoadBalancers"] !== undefined &&
    output["LoadBalancers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadBalancers"]["member"] instanceof Array
        ? output["LoadBalancers"]["member"]
        : [output["LoadBalancers"]["member"]];
    contents.LoadBalancers = deserializeAws_queryLoadBalancers(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateRuleOutput = (
  output: any,
  context: __SerdeContext
): CreateRuleOutput => {
  let contents: any = {
    __type: "CreateRuleOutput",
    Rules: undefined
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (
    output["Rules"] !== undefined &&
    output["Rules"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Rules"]["member"] instanceof Array
        ? output["Rules"]["member"]
        : [output["Rules"]["member"]];
    contents.Rules = deserializeAws_queryRules(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryCreateTargetGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateTargetGroupOutput => {
  let contents: any = {
    __type: "CreateTargetGroupOutput",
    TargetGroups: undefined
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (
    output["TargetGroups"] !== undefined &&
    output["TargetGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TargetGroups"]["member"] instanceof Array
        ? output["TargetGroups"]["member"]
        : [output["TargetGroups"]["member"]];
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteListenerOutput = (
  output: any,
  context: __SerdeContext
): DeleteListenerOutput => {
  let contents: any = {
    __type: "DeleteListenerOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerOutput => {
  let contents: any = {
    __type: "DeleteLoadBalancerOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteRuleOutput = (
  output: any,
  context: __SerdeContext
): DeleteRuleOutput => {
  let contents: any = {
    __type: "DeleteRuleOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteTargetGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteTargetGroupOutput => {
  let contents: any = {
    __type: "DeleteTargetGroupOutput"
  };
  return contents;
};

const deserializeAws_queryDeregisterTargetsOutput = (
  output: any,
  context: __SerdeContext
): DeregisterTargetsOutput => {
  let contents: any = {
    __type: "DeregisterTargetsOutput"
  };
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  let contents: any = {
    __type: "DescribeAccountLimitsOutput",
    Limits: undefined,
    NextMarker: undefined
  };
  if (output.Limits === "") {
    contents.Limits = [];
  }
  if (
    output["Limits"] !== undefined &&
    output["Limits"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Limits"]["member"] instanceof Array
        ? output["Limits"]["member"]
        : [output["Limits"]["member"]];
    contents.Limits = deserializeAws_queryLimits(wrappedItem, context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  return contents;
};

const deserializeAws_queryDescribeListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): DescribeListenerCertificatesOutput => {
  let contents: any = {
    __type: "DescribeListenerCertificatesOutput",
    Certificates: undefined,
    NextMarker: undefined
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (
    output["Certificates"] !== undefined &&
    output["Certificates"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Certificates"]["member"] instanceof Array
        ? output["Certificates"]["member"]
        : [output["Certificates"]["member"]];
    contents.Certificates = deserializeAws_queryCertificateList(
      wrappedItem,
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  return contents;
};

const deserializeAws_queryDescribeListenersOutput = (
  output: any,
  context: __SerdeContext
): DescribeListenersOutput => {
  let contents: any = {
    __type: "DescribeListenersOutput",
    Listeners: undefined,
    NextMarker: undefined
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (
    output["Listeners"] !== undefined &&
    output["Listeners"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Listeners"]["member"] instanceof Array
        ? output["Listeners"]["member"]
        : [output["Listeners"]["member"]];
    contents.Listeners = deserializeAws_queryListeners(wrappedItem, context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerAttributesOutput => {
  let contents: any = {
    __type: "DescribeLoadBalancerAttributesOutput",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Attributes"]["member"] instanceof Array
        ? output["Attributes"]["member"]
        : [output["Attributes"]["member"]];
    contents.Attributes = deserializeAws_queryLoadBalancerAttributes(
      wrappedItem,
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
    __type: "DescribeLoadBalancersOutput",
    LoadBalancers: undefined,
    NextMarker: undefined
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (
    output["LoadBalancers"] !== undefined &&
    output["LoadBalancers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadBalancers"]["member"] instanceof Array
        ? output["LoadBalancers"]["member"]
        : [output["LoadBalancers"]["member"]];
    contents.LoadBalancers = deserializeAws_queryLoadBalancers(
      wrappedItem,
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  return contents;
};

const deserializeAws_queryDescribeRulesOutput = (
  output: any,
  context: __SerdeContext
): DescribeRulesOutput => {
  let contents: any = {
    __type: "DescribeRulesOutput",
    NextMarker: undefined,
    Rules: undefined
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (
    output["Rules"] !== undefined &&
    output["Rules"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Rules"]["member"] instanceof Array
        ? output["Rules"]["member"]
        : [output["Rules"]["member"]];
    contents.Rules = deserializeAws_queryRules(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryDescribeSSLPoliciesOutput = (
  output: any,
  context: __SerdeContext
): DescribeSSLPoliciesOutput => {
  let contents: any = {
    __type: "DescribeSSLPoliciesOutput",
    NextMarker: undefined,
    SslPolicies: undefined
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output.SslPolicies === "") {
    contents.SslPolicies = [];
  }
  if (
    output["SslPolicies"] !== undefined &&
    output["SslPolicies"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SslPolicies"]["member"] instanceof Array
        ? output["SslPolicies"]["member"]
        : [output["SslPolicies"]["member"]];
    contents.SslPolicies = deserializeAws_querySslPolicies(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTagsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTagsOutput => {
  let contents: any = {
    __type: "DescribeTagsOutput",
    TagDescriptions: undefined
  };
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  }
  if (
    output["TagDescriptions"] !== undefined &&
    output["TagDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TagDescriptions"]["member"] instanceof Array
        ? output["TagDescriptions"]["member"]
        : [output["TagDescriptions"]["member"]];
    contents.TagDescriptions = deserializeAws_queryTagDescriptions(
      wrappedItem,
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
    __type: "DescribeTargetGroupAttributesOutput",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Attributes"]["member"] instanceof Array
        ? output["Attributes"]["member"]
        : [output["Attributes"]["member"]];
    contents.Attributes = deserializeAws_queryTargetGroupAttributes(
      wrappedItem,
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
    __type: "DescribeTargetGroupsOutput",
    NextMarker: undefined,
    TargetGroups: undefined
  };
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = output["NextMarker"];
  }
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (
    output["TargetGroups"] !== undefined &&
    output["TargetGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TargetGroups"]["member"] instanceof Array
        ? output["TargetGroups"]["member"]
        : [output["TargetGroups"]["member"]];
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTargetHealthOutput = (
  output: any,
  context: __SerdeContext
): DescribeTargetHealthOutput => {
  let contents: any = {
    __type: "DescribeTargetHealthOutput",
    TargetHealthDescriptions: undefined
  };
  if (output.TargetHealthDescriptions === "") {
    contents.TargetHealthDescriptions = [];
  }
  if (
    output["TargetHealthDescriptions"] !== undefined &&
    output["TargetHealthDescriptions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TargetHealthDescriptions"]["member"] instanceof Array
        ? output["TargetHealthDescriptions"]["member"]
        : [output["TargetHealthDescriptions"]["member"]];
    contents.TargetHealthDescriptions = deserializeAws_queryTargetHealthDescriptions(
      wrappedItem,
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
    __type: "DuplicateListenerException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryDuplicateLoadBalancerNameException = (
  output: any,
  context: __SerdeContext
): DuplicateLoadBalancerNameException => {
  let contents: any = {
    __type: "DuplicateLoadBalancerNameException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryDuplicateTagKeysException = (
  output: any,
  context: __SerdeContext
): DuplicateTagKeysException => {
  let contents: any = {
    __type: "DuplicateTagKeysException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryDuplicateTargetGroupNameException = (
  output: any,
  context: __SerdeContext
): DuplicateTargetGroupNameException => {
  let contents: any = {
    __type: "DuplicateTargetGroupNameException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryFixedResponseActionConfig = (
  output: any,
  context: __SerdeContext
): FixedResponseActionConfig => {
  let contents: any = {
    __type: "FixedResponseActionConfig",
    ContentType: undefined,
    MessageBody: undefined,
    StatusCode: undefined
  };
  if (output["ContentType"] !== undefined) {
    contents.ContentType = output["ContentType"];
  }
  if (output["MessageBody"] !== undefined) {
    contents.MessageBody = output["MessageBody"];
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = output["StatusCode"];
  }
  return contents;
};

const deserializeAws_queryForwardActionConfig = (
  output: any,
  context: __SerdeContext
): ForwardActionConfig => {
  let contents: any = {
    __type: "ForwardActionConfig",
    TargetGroupStickinessConfig: undefined,
    TargetGroups: undefined
  };
  if (output["TargetGroupStickinessConfig"] !== undefined) {
    contents.TargetGroupStickinessConfig = deserializeAws_queryTargetGroupStickinessConfig(
      output["TargetGroupStickinessConfig"],
      context
    );
  }
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (
    output["TargetGroups"] !== undefined &&
    output["TargetGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TargetGroups"]["member"] instanceof Array
        ? output["TargetGroups"]["member"]
        : [output["TargetGroups"]["member"]];
    contents.TargetGroups = deserializeAws_queryTargetGroupList(
      wrappedItem,
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
    __type: "HealthUnavailableException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryHostHeaderConditionConfig = (
  output: any,
  context: __SerdeContext
): HostHeaderConditionConfig => {
  let contents: any = {
    __type: "HostHeaderConditionConfig",
    Values: undefined
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryHttpHeaderConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpHeaderConditionConfig => {
  let contents: any = {
    __type: "HttpHeaderConditionConfig",
    HttpHeaderName: undefined,
    Values: undefined
  };
  if (output["HttpHeaderName"] !== undefined) {
    contents.HttpHeaderName = output["HttpHeaderName"];
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryHttpRequestMethodConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpRequestMethodConditionConfig => {
  let contents: any = {
    __type: "HttpRequestMethodConditionConfig",
    Values: undefined
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryIncompatibleProtocolsException = (
  output: any,
  context: __SerdeContext
): IncompatibleProtocolsException => {
  let contents: any = {
    __type: "IncompatibleProtocolsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidConfigurationRequestException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRequestException => {
  let contents: any = {
    __type: "InvalidConfigurationRequestException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidLoadBalancerActionException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerActionException => {
  let contents: any = {
    __type: "InvalidLoadBalancerActionException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSchemeException = (
  output: any,
  context: __SerdeContext
): InvalidSchemeException => {
  let contents: any = {
    __type: "InvalidSchemeException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupException = (
  output: any,
  context: __SerdeContext
): InvalidSecurityGroupException => {
  let contents: any = {
    __type: "InvalidSecurityGroupException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidSubnetException = (
  output: any,
  context: __SerdeContext
): InvalidSubnetException => {
  let contents: any = {
    __type: "InvalidSubnetException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidTargetException = (
  output: any,
  context: __SerdeContext
): InvalidTargetException => {
  let contents: any = {
    __type: "InvalidTargetException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryLimit = (
  output: any,
  context: __SerdeContext
): Limit => {
  let contents: any = {
    __type: "Limit",
    Max: undefined,
    Name: undefined
  };
  if (output["Max"] !== undefined) {
    contents.Max = output["Max"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_queryLimits = (
  output: any,
  context: __SerdeContext
): Array<Limit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLimit(entry, context)
  );
};

const deserializeAws_queryListOfString = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryListener = (
  output: any,
  context: __SerdeContext
): Listener => {
  let contents: any = {
    __type: "Listener",
    Certificates: undefined,
    DefaultActions: undefined,
    ListenerArn: undefined,
    LoadBalancerArn: undefined,
    Port: undefined,
    Protocol: undefined,
    SslPolicy: undefined
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (
    output["Certificates"] !== undefined &&
    output["Certificates"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Certificates"]["member"] instanceof Array
        ? output["Certificates"]["member"]
        : [output["Certificates"]["member"]];
    contents.Certificates = deserializeAws_queryCertificateList(
      wrappedItem,
      context
    );
  }
  if (output.DefaultActions === "") {
    contents.DefaultActions = [];
  }
  if (
    output["DefaultActions"] !== undefined &&
    output["DefaultActions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["DefaultActions"]["member"] instanceof Array
        ? output["DefaultActions"]["member"]
        : [output["DefaultActions"]["member"]];
    contents.DefaultActions = deserializeAws_queryActions(wrappedItem, context);
  }
  if (output["ListenerArn"] !== undefined) {
    contents.ListenerArn = output["ListenerArn"];
  }
  if (output["LoadBalancerArn"] !== undefined) {
    contents.LoadBalancerArn = output["LoadBalancerArn"];
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["SslPolicy"] !== undefined) {
    contents.SslPolicy = output["SslPolicy"];
  }
  return contents;
};

const deserializeAws_queryListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  let contents: any = {
    __type: "ListenerNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryListeners = (
  output: any,
  context: __SerdeContext
): Array<Listener> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryListener(entry, context)
  );
};

const deserializeAws_queryLoadBalancer = (
  output: any,
  context: __SerdeContext
): LoadBalancer => {
  let contents: any = {
    __type: "LoadBalancer",
    AvailabilityZones: undefined,
    CanonicalHostedZoneId: undefined,
    CreatedTime: undefined,
    DNSName: undefined,
    IpAddressType: undefined,
    LoadBalancerArn: undefined,
    LoadBalancerName: undefined,
    Scheme: undefined,
    SecurityGroups: undefined,
    State: undefined,
    Type: undefined,
    VpcId: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AvailabilityZones"]["member"] instanceof Array
        ? output["AvailabilityZones"]["member"]
        : [output["AvailabilityZones"]["member"]];
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      wrappedItem,
      context
    );
  }
  if (output["CanonicalHostedZoneId"] !== undefined) {
    contents.CanonicalHostedZoneId = output["CanonicalHostedZoneId"];
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["DNSName"] !== undefined) {
    contents.DNSName = output["DNSName"];
  }
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = output["IpAddressType"];
  }
  if (output["LoadBalancerArn"] !== undefined) {
    contents.LoadBalancerArn = output["LoadBalancerArn"];
  }
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = output["LoadBalancerName"];
  }
  if (output["Scheme"] !== undefined) {
    contents.Scheme = output["Scheme"];
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (
    output["SecurityGroups"] !== undefined &&
    output["SecurityGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SecurityGroups"]["member"] instanceof Array
        ? output["SecurityGroups"]["member"]
        : [output["SecurityGroups"]["member"]];
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      wrappedItem,
      context
    );
  }
  if (output["State"] !== undefined) {
    contents.State = deserializeAws_queryLoadBalancerState(
      output["State"],
      context
    );
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAddress = (
  output: any,
  context: __SerdeContext
): LoadBalancerAddress => {
  let contents: any = {
    __type: "LoadBalancerAddress",
    AllocationId: undefined,
    IpAddress: undefined,
    PrivateIPv4Address: undefined
  };
  if (output["AllocationId"] !== undefined) {
    contents.AllocationId = output["AllocationId"];
  }
  if (output["IpAddress"] !== undefined) {
    contents.IpAddress = output["IpAddress"];
  }
  if (output["PrivateIPv4Address"] !== undefined) {
    contents.PrivateIPv4Address = output["PrivateIPv4Address"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAddresses = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerAddress> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLoadBalancerAddress(entry, context)
  );
};

const deserializeAws_queryLoadBalancerArns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryLoadBalancerAttribute = (
  output: any,
  context: __SerdeContext
): LoadBalancerAttribute => {
  let contents: any = {
    __type: "LoadBalancerAttribute",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAttributes = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLoadBalancerAttribute(entry, context)
  );
};

const deserializeAws_queryLoadBalancerNotFoundException = (
  output: any,
  context: __SerdeContext
): LoadBalancerNotFoundException => {
  let contents: any = {
    __type: "LoadBalancerNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerState = (
  output: any,
  context: __SerdeContext
): LoadBalancerState => {
  let contents: any = {
    __type: "LoadBalancerState",
    Code: undefined,
    Reason: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = output["Reason"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancers = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLoadBalancer(entry, context)
  );
};

const deserializeAws_queryMatcher = (
  output: any,
  context: __SerdeContext
): Matcher => {
  let contents: any = {
    __type: "Matcher",
    HttpCode: undefined
  };
  if (output["HttpCode"] !== undefined) {
    contents.HttpCode = output["HttpCode"];
  }
  return contents;
};

const deserializeAws_queryModifyListenerOutput = (
  output: any,
  context: __SerdeContext
): ModifyListenerOutput => {
  let contents: any = {
    __type: "ModifyListenerOutput",
    Listeners: undefined
  };
  if (output.Listeners === "") {
    contents.Listeners = [];
  }
  if (
    output["Listeners"] !== undefined &&
    output["Listeners"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Listeners"]["member"] instanceof Array
        ? output["Listeners"]["member"]
        : [output["Listeners"]["member"]];
    contents.Listeners = deserializeAws_queryListeners(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  let contents: any = {
    __type: "ModifyLoadBalancerAttributesOutput",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Attributes"]["member"] instanceof Array
        ? output["Attributes"]["member"]
        : [output["Attributes"]["member"]];
    contents.Attributes = deserializeAws_queryLoadBalancerAttributes(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyRuleOutput = (
  output: any,
  context: __SerdeContext
): ModifyRuleOutput => {
  let contents: any = {
    __type: "ModifyRuleOutput",
    Rules: undefined
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (
    output["Rules"] !== undefined &&
    output["Rules"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Rules"]["member"] instanceof Array
        ? output["Rules"]["member"]
        : [output["Rules"]["member"]];
    contents.Rules = deserializeAws_queryRules(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryModifyTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyTargetGroupAttributesOutput => {
  let contents: any = {
    __type: "ModifyTargetGroupAttributesOutput",
    Attributes: undefined
  };
  if (output.Attributes === "") {
    contents.Attributes = [];
  }
  if (
    output["Attributes"] !== undefined &&
    output["Attributes"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Attributes"]["member"] instanceof Array
        ? output["Attributes"]["member"]
        : [output["Attributes"]["member"]];
    contents.Attributes = deserializeAws_queryTargetGroupAttributes(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryModifyTargetGroupOutput = (
  output: any,
  context: __SerdeContext
): ModifyTargetGroupOutput => {
  let contents: any = {
    __type: "ModifyTargetGroupOutput",
    TargetGroups: undefined
  };
  if (output.TargetGroups === "") {
    contents.TargetGroups = [];
  }
  if (
    output["TargetGroups"] !== undefined &&
    output["TargetGroups"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TargetGroups"]["member"] instanceof Array
        ? output["TargetGroups"]["member"]
        : [output["TargetGroups"]["member"]];
    contents.TargetGroups = deserializeAws_queryTargetGroups(
      wrappedItem,
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
    __type: "OperationNotPermittedException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryPathPatternConditionConfig = (
  output: any,
  context: __SerdeContext
): PathPatternConditionConfig => {
  let contents: any = {
    __type: "PathPatternConditionConfig",
    Values: undefined
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryPriorityInUseException = (
  output: any,
  context: __SerdeContext
): PriorityInUseException => {
  let contents: any = {
    __type: "PriorityInUseException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryQueryStringConditionConfig = (
  output: any,
  context: __SerdeContext
): QueryStringConditionConfig => {
  let contents: any = {
    __type: "QueryStringConditionConfig",
    Values: undefined
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryQueryStringKeyValuePairList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_queryQueryStringKeyValuePair = (
  output: any,
  context: __SerdeContext
): QueryStringKeyValuePair => {
  let contents: any = {
    __type: "QueryStringKeyValuePair",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryQueryStringKeyValuePairList = (
  output: any,
  context: __SerdeContext
): Array<QueryStringKeyValuePair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryQueryStringKeyValuePair(entry, context)
  );
};

const deserializeAws_queryRedirectActionConfig = (
  output: any,
  context: __SerdeContext
): RedirectActionConfig => {
  let contents: any = {
    __type: "RedirectActionConfig",
    Host: undefined,
    Path: undefined,
    Port: undefined,
    Protocol: undefined,
    Query: undefined,
    StatusCode: undefined
  };
  if (output["Host"] !== undefined) {
    contents.Host = output["Host"];
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["Port"] !== undefined) {
    contents.Port = output["Port"];
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["Query"] !== undefined) {
    contents.Query = output["Query"];
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = output["StatusCode"];
  }
  return contents;
};

const deserializeAws_queryRegisterTargetsOutput = (
  output: any,
  context: __SerdeContext
): RegisterTargetsOutput => {
  let contents: any = {
    __type: "RegisterTargetsOutput"
  };
  return contents;
};

const deserializeAws_queryRemoveListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): RemoveListenerCertificatesOutput => {
  let contents: any = {
    __type: "RemoveListenerCertificatesOutput"
  };
  return contents;
};

const deserializeAws_queryRemoveTagsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsOutput => {
  let contents: any = {
    __type: "RemoveTagsOutput"
  };
  return contents;
};

const deserializeAws_queryResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryRule = (
  output: any,
  context: __SerdeContext
): Rule => {
  let contents: any = {
    __type: "Rule",
    Actions: undefined,
    Conditions: undefined,
    IsDefault: undefined,
    Priority: undefined,
    RuleArn: undefined
  };
  if (output.Actions === "") {
    contents.Actions = [];
  }
  if (
    output["Actions"] !== undefined &&
    output["Actions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Actions"]["member"] instanceof Array
        ? output["Actions"]["member"]
        : [output["Actions"]["member"]];
    contents.Actions = deserializeAws_queryActions(wrappedItem, context);
  }
  if (output.Conditions === "") {
    contents.Conditions = [];
  }
  if (
    output["Conditions"] !== undefined &&
    output["Conditions"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Conditions"]["member"] instanceof Array
        ? output["Conditions"]["member"]
        : [output["Conditions"]["member"]];
    contents.Conditions = deserializeAws_queryRuleConditionList(
      wrappedItem,
      context
    );
  }
  if (output["IsDefault"] !== undefined) {
    contents.IsDefault = output["IsDefault"] == "true";
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = output["Priority"];
  }
  if (output["RuleArn"] !== undefined) {
    contents.RuleArn = output["RuleArn"];
  }
  return contents;
};

const deserializeAws_queryRuleCondition = (
  output: any,
  context: __SerdeContext
): RuleCondition => {
  let contents: any = {
    __type: "RuleCondition",
    Field: undefined,
    HostHeaderConfig: undefined,
    HttpHeaderConfig: undefined,
    HttpRequestMethodConfig: undefined,
    PathPatternConfig: undefined,
    QueryStringConfig: undefined,
    SourceIpConfig: undefined,
    Values: undefined
  };
  if (output["Field"] !== undefined) {
    contents.Field = output["Field"];
  }
  if (output["HostHeaderConfig"] !== undefined) {
    contents.HostHeaderConfig = deserializeAws_queryHostHeaderConditionConfig(
      output["HostHeaderConfig"],
      context
    );
  }
  if (output["HttpHeaderConfig"] !== undefined) {
    contents.HttpHeaderConfig = deserializeAws_queryHttpHeaderConditionConfig(
      output["HttpHeaderConfig"],
      context
    );
  }
  if (output["HttpRequestMethodConfig"] !== undefined) {
    contents.HttpRequestMethodConfig = deserializeAws_queryHttpRequestMethodConditionConfig(
      output["HttpRequestMethodConfig"],
      context
    );
  }
  if (output["PathPatternConfig"] !== undefined) {
    contents.PathPatternConfig = deserializeAws_queryPathPatternConditionConfig(
      output["PathPatternConfig"],
      context
    );
  }
  if (output["QueryStringConfig"] !== undefined) {
    contents.QueryStringConfig = deserializeAws_queryQueryStringConditionConfig(
      output["QueryStringConfig"],
      context
    );
  }
  if (output["SourceIpConfig"] !== undefined) {
    contents.SourceIpConfig = deserializeAws_querySourceIpConditionConfig(
      output["SourceIpConfig"],
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryRuleConditionList = (
  output: any,
  context: __SerdeContext
): Array<RuleCondition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryRuleCondition(entry, context)
  );
};

const deserializeAws_queryRuleNotFoundException = (
  output: any,
  context: __SerdeContext
): RuleNotFoundException => {
  let contents: any = {
    __type: "RuleNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryRules = (
  output: any,
  context: __SerdeContext
): Array<Rule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryRule(entry, context)
  );
};

const deserializeAws_querySSLPolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): SSLPolicyNotFoundException => {
  let contents: any = {
    __type: "SSLPolicyNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_querySecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_querySetIpAddressTypeOutput = (
  output: any,
  context: __SerdeContext
): SetIpAddressTypeOutput => {
  let contents: any = {
    __type: "SetIpAddressTypeOutput",
    IpAddressType: undefined
  };
  if (output["IpAddressType"] !== undefined) {
    contents.IpAddressType = output["IpAddressType"];
  }
  return contents;
};

const deserializeAws_querySetRulePrioritiesOutput = (
  output: any,
  context: __SerdeContext
): SetRulePrioritiesOutput => {
  let contents: any = {
    __type: "SetRulePrioritiesOutput",
    Rules: undefined
  };
  if (output.Rules === "") {
    contents.Rules = [];
  }
  if (
    output["Rules"] !== undefined &&
    output["Rules"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Rules"]["member"] instanceof Array
        ? output["Rules"]["member"]
        : [output["Rules"]["member"]];
    contents.Rules = deserializeAws_queryRules(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_querySetSecurityGroupsOutput = (
  output: any,
  context: __SerdeContext
): SetSecurityGroupsOutput => {
  let contents: any = {
    __type: "SetSecurityGroupsOutput",
    SecurityGroupIds: undefined
  };
  if (output.SecurityGroupIds === "") {
    contents.SecurityGroupIds = [];
  }
  if (
    output["SecurityGroupIds"] !== undefined &&
    output["SecurityGroupIds"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SecurityGroupIds"]["member"] instanceof Array
        ? output["SecurityGroupIds"]["member"]
        : [output["SecurityGroupIds"]["member"]];
    contents.SecurityGroupIds = deserializeAws_querySecurityGroups(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_querySetSubnetsOutput = (
  output: any,
  context: __SerdeContext
): SetSubnetsOutput => {
  let contents: any = {
    __type: "SetSubnetsOutput",
    AvailabilityZones: undefined
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AvailabilityZones"]["member"] instanceof Array
        ? output["AvailabilityZones"]["member"]
        : [output["AvailabilityZones"]["member"]];
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_querySourceIpConditionConfig = (
  output: any,
  context: __SerdeContext
): SourceIpConditionConfig => {
  let contents: any = {
    __type: "SourceIpConditionConfig",
    Values: undefined
  };
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Values"]["member"] instanceof Array
        ? output["Values"]["member"]
        : [output["Values"]["member"]];
    contents.Values = deserializeAws_queryListOfString(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_querySslPolicies = (
  output: any,
  context: __SerdeContext
): Array<SslPolicy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySslPolicy(entry, context)
  );
};

const deserializeAws_querySslPolicy = (
  output: any,
  context: __SerdeContext
): SslPolicy => {
  let contents: any = {
    __type: "SslPolicy",
    Ciphers: undefined,
    Name: undefined,
    SslProtocols: undefined
  };
  if (output.Ciphers === "") {
    contents.Ciphers = [];
  }
  if (
    output["Ciphers"] !== undefined &&
    output["Ciphers"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Ciphers"]["member"] instanceof Array
        ? output["Ciphers"]["member"]
        : [output["Ciphers"]["member"]];
    contents.Ciphers = deserializeAws_queryCiphers(wrappedItem, context);
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output.SslProtocols === "") {
    contents.SslProtocols = [];
  }
  if (
    output["SslProtocols"] !== undefined &&
    output["SslProtocols"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["SslProtocols"]["member"] instanceof Array
        ? output["SslProtocols"]["member"]
        : [output["SslProtocols"]["member"]];
    contents.SslProtocols = deserializeAws_querySslProtocols(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_querySslProtocols = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_querySubnetNotFoundException = (
  output: any,
  context: __SerdeContext
): SubnetNotFoundException => {
  let contents: any = {
    __type: "SubnetNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagDescription = (
  output: any,
  context: __SerdeContext
): TagDescription => {
  let contents: any = {
    __type: "TagDescription",
    ResourceArn: undefined,
    Tags: undefined
  };
  if (output["ResourceArn"] !== undefined) {
    contents.ResourceArn = output["ResourceArn"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    const wrappedItem =
      output["Tags"]["member"] instanceof Array
        ? output["Tags"]["member"]
        : [output["Tags"]["member"]];
    contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_queryTagDescriptions = (
  output: any,
  context: __SerdeContext
): Array<TagDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTagDescription(entry, context)
  );
};

const deserializeAws_queryTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTag(entry, context)
  );
};

const deserializeAws_queryTargetDescription = (
  output: any,
  context: __SerdeContext
): TargetDescription => {
  let contents: any = {
    __type: "TargetDescription",
    AvailabilityZone: undefined,
    Id: undefined,
    Port: undefined
  };
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroup = (
  output: any,
  context: __SerdeContext
): TargetGroup => {
  let contents: any = {
    __type: "TargetGroup",
    HealthCheckEnabled: undefined,
    HealthCheckIntervalSeconds: undefined,
    HealthCheckPath: undefined,
    HealthCheckPort: undefined,
    HealthCheckProtocol: undefined,
    HealthCheckTimeoutSeconds: undefined,
    HealthyThresholdCount: undefined,
    LoadBalancerArns: undefined,
    Matcher: undefined,
    Port: undefined,
    Protocol: undefined,
    TargetGroupArn: undefined,
    TargetGroupName: undefined,
    TargetType: undefined,
    UnhealthyThresholdCount: undefined,
    VpcId: undefined
  };
  if (output["HealthCheckEnabled"] !== undefined) {
    contents.HealthCheckEnabled = output["HealthCheckEnabled"] == "true";
  }
  if (output["HealthCheckIntervalSeconds"] !== undefined) {
    contents.HealthCheckIntervalSeconds = parseInt(
      output["HealthCheckIntervalSeconds"]
    );
  }
  if (output["HealthCheckPath"] !== undefined) {
    contents.HealthCheckPath = output["HealthCheckPath"];
  }
  if (output["HealthCheckPort"] !== undefined) {
    contents.HealthCheckPort = output["HealthCheckPort"];
  }
  if (output["HealthCheckProtocol"] !== undefined) {
    contents.HealthCheckProtocol = output["HealthCheckProtocol"];
  }
  if (output["HealthCheckTimeoutSeconds"] !== undefined) {
    contents.HealthCheckTimeoutSeconds = parseInt(
      output["HealthCheckTimeoutSeconds"]
    );
  }
  if (output["HealthyThresholdCount"] !== undefined) {
    contents.HealthyThresholdCount = parseInt(output["HealthyThresholdCount"]);
  }
  if (output.LoadBalancerArns === "") {
    contents.LoadBalancerArns = [];
  }
  if (
    output["LoadBalancerArns"] !== undefined &&
    output["LoadBalancerArns"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["LoadBalancerArns"]["member"] instanceof Array
        ? output["LoadBalancerArns"]["member"]
        : [output["LoadBalancerArns"]["member"]];
    contents.LoadBalancerArns = deserializeAws_queryLoadBalancerArns(
      wrappedItem,
      context
    );
  }
  if (output["Matcher"] !== undefined) {
    contents.Matcher = deserializeAws_queryMatcher(output["Matcher"], context);
  }
  if (output["Port"] !== undefined) {
    contents.Port = parseInt(output["Port"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = output["TargetGroupArn"];
  }
  if (output["TargetGroupName"] !== undefined) {
    contents.TargetGroupName = output["TargetGroupName"];
  }
  if (output["TargetType"] !== undefined) {
    contents.TargetType = output["TargetType"];
  }
  if (output["UnhealthyThresholdCount"] !== undefined) {
    contents.UnhealthyThresholdCount = parseInt(
      output["UnhealthyThresholdCount"]
    );
  }
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeAws_queryTargetGroupAssociationLimitException = (
  output: any,
  context: __SerdeContext
): TargetGroupAssociationLimitException => {
  let contents: any = {
    __type: "TargetGroupAssociationLimitException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTargetGroupAttribute = (
  output: any,
  context: __SerdeContext
): TargetGroupAttribute => {
  let contents: any = {
    __type: "TargetGroupAttribute",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTargetGroupAttributes = (
  output: any,
  context: __SerdeContext
): Array<TargetGroupAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTargetGroupAttribute(entry, context)
  );
};

const deserializeAws_queryTargetGroupList = (
  output: any,
  context: __SerdeContext
): Array<TargetGroupTuple> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTargetGroupTuple(entry, context)
  );
};

const deserializeAws_queryTargetGroupNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetGroupNotFoundException => {
  let contents: any = {
    __type: "TargetGroupNotFoundException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTargetGroupStickinessConfig = (
  output: any,
  context: __SerdeContext
): TargetGroupStickinessConfig => {
  let contents: any = {
    __type: "TargetGroupStickinessConfig",
    DurationSeconds: undefined,
    Enabled: undefined
  };
  if (output["DurationSeconds"] !== undefined) {
    contents.DurationSeconds = parseInt(output["DurationSeconds"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  return contents;
};

const deserializeAws_queryTargetGroupTuple = (
  output: any,
  context: __SerdeContext
): TargetGroupTuple => {
  let contents: any = {
    __type: "TargetGroupTuple",
    TargetGroupArn: undefined,
    Weight: undefined
  };
  if (output["TargetGroupArn"] !== undefined) {
    contents.TargetGroupArn = output["TargetGroupArn"];
  }
  if (output["Weight"] !== undefined) {
    contents.Weight = parseInt(output["Weight"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroups = (
  output: any,
  context: __SerdeContext
): Array<TargetGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTargetGroup(entry, context)
  );
};

const deserializeAws_queryTargetHealth = (
  output: any,
  context: __SerdeContext
): TargetHealth => {
  let contents: any = {
    __type: "TargetHealth",
    Description: undefined,
    Reason: undefined,
    State: undefined
  };
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = output["Reason"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};

const deserializeAws_queryTargetHealthDescription = (
  output: any,
  context: __SerdeContext
): TargetHealthDescription => {
  let contents: any = {
    __type: "TargetHealthDescription",
    HealthCheckPort: undefined,
    Target: undefined,
    TargetHealth: undefined
  };
  if (output["HealthCheckPort"] !== undefined) {
    contents.HealthCheckPort = output["HealthCheckPort"];
  }
  if (output["Target"] !== undefined) {
    contents.Target = deserializeAws_queryTargetDescription(
      output["Target"],
      context
    );
  }
  if (output["TargetHealth"] !== undefined) {
    contents.TargetHealth = deserializeAws_queryTargetHealth(
      output["TargetHealth"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryTargetHealthDescriptions = (
  output: any,
  context: __SerdeContext
): Array<TargetHealthDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTargetHealthDescription(entry, context)
  );
};

const deserializeAws_queryTooManyActionsException = (
  output: any,
  context: __SerdeContext
): TooManyActionsException => {
  let contents: any = {
    __type: "TooManyActionsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyCertificatesException = (
  output: any,
  context: __SerdeContext
): TooManyCertificatesException => {
  let contents: any = {
    __type: "TooManyCertificatesException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyListenersException = (
  output: any,
  context: __SerdeContext
): TooManyListenersException => {
  let contents: any = {
    __type: "TooManyListenersException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyLoadBalancersException = (
  output: any,
  context: __SerdeContext
): TooManyLoadBalancersException => {
  let contents: any = {
    __type: "TooManyLoadBalancersException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyRegistrationsForTargetIdException = (
  output: any,
  context: __SerdeContext
): TooManyRegistrationsForTargetIdException => {
  let contents: any = {
    __type: "TooManyRegistrationsForTargetIdException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyRulesException = (
  output: any,
  context: __SerdeContext
): TooManyRulesException => {
  let contents: any = {
    __type: "TooManyRulesException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyTargetGroupsException = (
  output: any,
  context: __SerdeContext
): TooManyTargetGroupsException => {
  let contents: any = {
    __type: "TooManyTargetGroupsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyTargetsException = (
  output: any,
  context: __SerdeContext
): TooManyTargetsException => {
  let contents: any = {
    __type: "TooManyTargetsException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException = (
  output: any,
  context: __SerdeContext
): TooManyUniqueTargetGroupsPerLoadBalancerException => {
  let contents: any = {
    __type: "TooManyUniqueTargetGroupsPerLoadBalancerException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryUnsupportedProtocolException = (
  output: any,
  context: __SerdeContext
): UnsupportedProtocolException => {
  let contents: any = {
    __type: "UnsupportedProtocolException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
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

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries)
    .map(
      key =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(entries[key])
    )
    .join("&");
};

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
