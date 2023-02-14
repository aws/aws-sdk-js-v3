// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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

import {
  AssociateFirewallPolicyCommandInput,
  AssociateFirewallPolicyCommandOutput,
} from "../commands/AssociateFirewallPolicyCommand";
import { AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput } from "../commands/AssociateSubnetsCommand";
import { CreateFirewallCommandInput, CreateFirewallCommandOutput } from "../commands/CreateFirewallCommand";
import {
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
} from "../commands/CreateFirewallPolicyCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "../commands/CreateRuleGroupCommand";
import { DeleteFirewallCommandInput, DeleteFirewallCommandOutput } from "../commands/DeleteFirewallCommand";
import {
  DeleteFirewallPolicyCommandInput,
  DeleteFirewallPolicyCommandOutput,
} from "../commands/DeleteFirewallPolicyCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "../commands/DeleteRuleGroupCommand";
import { DescribeFirewallCommandInput, DescribeFirewallCommandOutput } from "../commands/DescribeFirewallCommand";
import {
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
} from "../commands/DescribeFirewallPolicyCommand";
import {
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
} from "../commands/DescribeLoggingConfigurationCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "../commands/DescribeResourcePolicyCommand";
import { DescribeRuleGroupCommandInput, DescribeRuleGroupCommandOutput } from "../commands/DescribeRuleGroupCommand";
import {
  DescribeRuleGroupMetadataCommandInput,
  DescribeRuleGroupMetadataCommandOutput,
} from "../commands/DescribeRuleGroupMetadataCommand";
import {
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
} from "../commands/DisassociateSubnetsCommand";
import {
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "../commands/ListFirewallPoliciesCommand";
import { ListFirewallsCommandInput, ListFirewallsCommandOutput } from "../commands/ListFirewallsCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "../commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateFirewallDeleteProtectionCommandInput,
  UpdateFirewallDeleteProtectionCommandOutput,
} from "../commands/UpdateFirewallDeleteProtectionCommand";
import {
  UpdateFirewallDescriptionCommandInput,
  UpdateFirewallDescriptionCommandOutput,
} from "../commands/UpdateFirewallDescriptionCommand";
import {
  UpdateFirewallEncryptionConfigurationCommandInput,
  UpdateFirewallEncryptionConfigurationCommandOutput,
} from "../commands/UpdateFirewallEncryptionConfigurationCommand";
import {
  UpdateFirewallPolicyChangeProtectionCommandInput,
  UpdateFirewallPolicyChangeProtectionCommandOutput,
} from "../commands/UpdateFirewallPolicyChangeProtectionCommand";
import {
  UpdateFirewallPolicyCommandInput,
  UpdateFirewallPolicyCommandOutput,
} from "../commands/UpdateFirewallPolicyCommand";
import {
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "../commands/UpdateLoggingConfigurationCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "../commands/UpdateRuleGroupCommand";
import {
  UpdateSubnetChangeProtectionCommandInput,
  UpdateSubnetChangeProtectionCommandOutput,
} from "../commands/UpdateSubnetChangeProtectionCommand";
import {
  ActionDefinition,
  Address,
  AssociateFirewallPolicyRequest,
  AssociateFirewallPolicyResponse,
  AssociateSubnetsRequest,
  AssociateSubnetsResponse,
  Attachment,
  CapacityUsageSummary,
  CIDRSummary,
  CreateFirewallPolicyRequest,
  CreateFirewallPolicyResponse,
  CreateFirewallRequest,
  CreateFirewallResponse,
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CustomAction,
  DeleteFirewallPolicyRequest,
  DeleteFirewallPolicyResponse,
  DeleteFirewallRequest,
  DeleteFirewallResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DescribeFirewallPolicyRequest,
  DescribeFirewallPolicyResponse,
  DescribeFirewallRequest,
  DescribeFirewallResponse,
  DescribeLoggingConfigurationRequest,
  DescribeLoggingConfigurationResponse,
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeRuleGroupMetadataRequest,
  DescribeRuleGroupMetadataResponse,
  DescribeRuleGroupRequest,
  DescribeRuleGroupResponse,
  Dimension,
  DisassociateSubnetsRequest,
  DisassociateSubnetsResponse,
  EncryptionConfiguration,
  Firewall,
  FirewallMetadata,
  FirewallPolicy,
  FirewallPolicyMetadata,
  FirewallPolicyResponse,
  FirewallStatus,
  Header,
  InsufficientCapacityException,
  InternalServerError,
  InvalidOperationException,
  InvalidRequestException,
  InvalidResourcePolicyException,
  InvalidTokenException,
  IPSet,
  IPSetMetadata,
  IPSetReference,
  LimitExceededException,
  ListFirewallPoliciesRequest,
  ListFirewallPoliciesResponse,
  ListFirewallsRequest,
  ListFirewallsResponse,
  ListRuleGroupsRequest,
  ListRuleGroupsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LogDestinationConfig,
  LogDestinationPermissionException,
  LoggingConfiguration,
  MatchAttributes,
  PerObjectStatus,
  PortRange,
  PortSet,
  PublishMetricAction,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  ReferenceSets,
  ResourceNotFoundException,
  ResourceOwnerCheckException,
  RuleDefinition,
  RuleGroup,
  RuleGroupMetadata,
  RuleGroupResponse,
  RuleOption,
  RulesSource,
  RulesSourceList,
  RuleVariables,
  SourceMetadata,
  StatefulEngineOptions,
  StatefulRule,
  StatefulRuleGroupOverride,
  StatefulRuleGroupReference,
  StatefulRuleOptions,
  StatelessRule,
  StatelessRuleGroupReference,
  StatelessRulesAndCustomActions,
  SubnetMapping,
  SyncState,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TargetType,
  TCPFlag,
  TCPFlagField,
  ThrottlingException,
  UnsupportedOperationException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFirewallDeleteProtectionRequest,
  UpdateFirewallDeleteProtectionResponse,
  UpdateFirewallDescriptionRequest,
  UpdateFirewallDescriptionResponse,
  UpdateFirewallEncryptionConfigurationRequest,
  UpdateFirewallEncryptionConfigurationResponse,
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyChangeProtectionResponse,
  UpdateFirewallPolicyRequest,
  UpdateFirewallPolicyResponse,
  UpdateLoggingConfigurationRequest,
  UpdateLoggingConfigurationResponse,
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateSubnetChangeProtectionRequest,
  UpdateSubnetChangeProtectionResponse,
} from "../models/models_0";
import { NetworkFirewallServiceException as __BaseException } from "../models/NetworkFirewallServiceException";

export const serializeAws_json1_0AssociateFirewallPolicyCommand = async (
  input: AssociateFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.AssociateFirewallPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0AssociateSubnetsCommand = async (
  input: AssociateSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.AssociateSubnets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateSubnetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateFirewallCommand = async (
  input: CreateFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.CreateFirewall",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateFirewallPolicyCommand = async (
  input: CreateFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.CreateFirewallPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.CreateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteFirewallCommand = async (
  input: DeleteFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DeleteFirewall",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteFirewallPolicyCommand = async (
  input: DeleteFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DeleteFirewallPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DeleteRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFirewallCommand = async (
  input: DescribeFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DescribeFirewall",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFirewallPolicyCommand = async (
  input: DescribeFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DescribeFirewallPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeLoggingConfigurationCommand = async (
  input: DescribeLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DescribeLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DescribeResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeRuleGroupCommand = async (
  input: DescribeRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DescribeRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeRuleGroupMetadataCommand = async (
  input: DescribeRuleGroupMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DescribeRuleGroupMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeRuleGroupMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisassociateSubnetsCommand = async (
  input: DisassociateSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.DisassociateSubnets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DisassociateSubnetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFirewallPoliciesCommand = async (
  input: ListFirewallPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.ListFirewallPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFirewallPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFirewallsCommand = async (
  input: ListFirewallsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.ListFirewalls",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFirewallsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListRuleGroupsCommand = async (
  input: ListRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.ListRuleGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateFirewallDeleteProtectionCommand = async (
  input: UpdateFirewallDeleteProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallDeleteProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateFirewallDeleteProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateFirewallDescriptionCommand = async (
  input: UpdateFirewallDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallDescription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateFirewallDescriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand = async (
  input: UpdateFirewallEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateFirewallEncryptionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateFirewallPolicyCommand = async (
  input: UpdateFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = async (
  input: UpdateFirewallPolicyChangeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateLoggingConfigurationCommand = async (
  input: UpdateLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateLoggingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateRuleGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateSubnetChangeProtectionCommand = async (
  input: UpdateSubnetChangeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "NetworkFirewall_20201112.UpdateSubnetChangeProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateSubnetChangeProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AssociateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateFirewallPolicyResponse(data, context);
  const response: AssociateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateFirewallPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFirewallPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0AssociateSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateSubnetsResponse(data, context);
  const response: AssociateSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateSubnetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSubnetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.networkfirewall#InsufficientCapacityException":
      throw await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateFirewallResponse(data, context);
  const response: CreateFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateFirewallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.networkfirewall#InsufficientCapacityException":
      throw await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateFirewallPolicyResponse(data, context);
  const response: CreateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateFirewallPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.networkfirewall#InsufficientCapacityException":
      throw await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateRuleGroupResponse(data, context);
  const response: CreateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.networkfirewall#InsufficientCapacityException":
      throw await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteFirewallResponse(data, context);
  const response: DeleteFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteFirewallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteFirewallPolicyResponse(data, context);
  const response: DeleteFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteFirewallPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.networkfirewall#InvalidResourcePolicyException":
      throw await deserializeAws_json1_0InvalidResourcePolicyExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteRuleGroupResponse(data, context);
  const response: DeleteRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFirewallResponse(data, context);
  const response: DescribeFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFirewallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFirewallPolicyResponse(data, context);
  const response: DescribeFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFirewallPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeLoggingConfigurationResponse(data, context);
  const response: DescribeLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeResourcePolicyResponse(data, context);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeRuleGroupResponse(data, context);
  const response: DescribeRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeRuleGroupMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeRuleGroupMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeRuleGroupMetadataResponse(data, context);
  const response: DescribeRuleGroupMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeRuleGroupMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DisassociateSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DisassociateSubnetsResponse(data, context);
  const response: DisassociateSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisassociateSubnetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSubnetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFirewallPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFirewallPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFirewallPoliciesResponse(data, context);
  const response: ListFirewallPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFirewallPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListFirewallsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFirewallsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFirewallsResponse(data, context);
  const response: ListFirewallsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFirewallsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListRuleGroupsResponse(data, context);
  const response: ListRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.networkfirewall#InvalidResourcePolicyException":
      throw await deserializeAws_json1_0InvalidResourcePolicyExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDeleteProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse(data, context);
  const response: UpdateFirewallDeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDeleteProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateFirewallDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateFirewallDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateFirewallDescriptionResponse(data, context);
  const response: UpdateFirewallDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateFirewallDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallEncryptionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateFirewallEncryptionConfigurationResponse(data, context);
  const response: UpdateFirewallEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallEncryptionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateFirewallPolicyResponse(data, context);
  const response: UpdateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateFirewallPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse(data, context);
  const response: UpdateFirewallPolicyChangeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateLoggingConfigurationResponse(data, context);
  const response: UpdateLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "LogDestinationPermissionException":
    case "com.amazonaws.networkfirewall#LogDestinationPermissionException":
      throw await deserializeAws_json1_0LogDestinationPermissionExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateRuleGroupResponse(data, context);
  const response: UpdateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateSubnetChangeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetChangeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateSubnetChangeProtectionResponse(data, context);
  const response: UpdateSubnetChangeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetChangeProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0InsufficientCapacityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InsufficientCapacityException(body, context);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidOperationException(body, context);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidResourcePolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourcePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidResourcePolicyException(body, context);
  const exception = new InvalidResourcePolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidTokenException(body, context);
  const exception = new InvalidTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LogDestinationPermissionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LogDestinationPermissionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LogDestinationPermissionException(body, context);
  const exception = new LogDestinationPermissionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceOwnerCheckExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceOwnerCheckException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceOwnerCheckException(body, context);
  const exception = new ResourceOwnerCheckException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0ActionDefinition = (input: ActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.PublishMetricAction != null && {
      PublishMetricAction: serializeAws_json1_0PublishMetricAction(input.PublishMetricAction, context),
    }),
  };
};

const serializeAws_json1_0Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.AddressDefinition != null && { AddressDefinition: input.AddressDefinition }),
  };
};

const serializeAws_json1_0Addresses = (input: Address[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Address(entry, context);
    });
};

const serializeAws_json1_0AssociateFirewallPolicyRequest = (
  input: AssociateFirewallPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0AssociateSubnetsRequest = (input: AssociateSubnetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.SubnetMappings != null && {
      SubnetMappings: serializeAws_json1_0SubnetMappings(input.SubnetMappings, context),
    }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0AzSubnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0CreateFirewallPolicyRequest = (
  input: CreateFirewallPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallPolicy != null && {
      FirewallPolicy: serializeAws_json1_0FirewallPolicy(input.FirewallPolicy, context),
    }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateFirewallRequest = (input: CreateFirewallRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteProtection != null && { DeleteProtection: input.DeleteProtection }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyChangeProtection != null && {
      FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
    }),
    ...(input.SubnetChangeProtection != null && { SubnetChangeProtection: input.SubnetChangeProtection }),
    ...(input.SubnetMappings != null && {
      SubnetMappings: serializeAws_json1_0SubnetMappings(input.SubnetMappings, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_0CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.RuleGroup != null && { RuleGroup: serializeAws_json1_0RuleGroup(input.RuleGroup, context) }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Rules != null && { Rules: input.Rules }),
    ...(input.SourceMetadata != null && {
      SourceMetadata: serializeAws_json1_0SourceMetadata(input.SourceMetadata, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_0CustomAction = (input: CustomAction, context: __SerdeContext): any => {
  return {
    ...(input.ActionDefinition != null && {
      ActionDefinition: serializeAws_json1_0ActionDefinition(input.ActionDefinition, context),
    }),
    ...(input.ActionName != null && { ActionName: input.ActionName }),
  };
};

const serializeAws_json1_0CustomActions = (input: CustomAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0CustomAction(entry, context);
    });
};

const serializeAws_json1_0DeleteFirewallPolicyRequest = (
  input: DeleteFirewallPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
  };
};

const serializeAws_json1_0DeleteFirewallRequest = (input: DeleteFirewallRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
  };
};

const serializeAws_json1_0DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0DeleteRuleGroupRequest = (input: DeleteRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_0DescribeFirewallPolicyRequest = (
  input: DescribeFirewallPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
  };
};

const serializeAws_json1_0DescribeFirewallRequest = (input: DescribeFirewallRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
  };
};

const serializeAws_json1_0DescribeLoggingConfigurationRequest = (
  input: DescribeLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
  };
};

const serializeAws_json1_0DescribeResourcePolicyRequest = (
  input: DescribeResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0DescribeRuleGroupMetadataRequest = (
  input: DescribeRuleGroupMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_0DescribeRuleGroupRequest = (
  input: DescribeRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_0Dimension = (input: Dimension, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0Dimensions = (input: Dimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Dimension(entry, context);
    });
};

const serializeAws_json1_0DisassociateSubnetsRequest = (
  input: DisassociateSubnetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_0AzSubnets(input.SubnetIds, context) }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_0FirewallPolicy = (input: FirewallPolicy, context: __SerdeContext): any => {
  return {
    ...(input.StatefulDefaultActions != null && {
      StatefulDefaultActions: serializeAws_json1_0StatefulActions(input.StatefulDefaultActions, context),
    }),
    ...(input.StatefulEngineOptions != null && {
      StatefulEngineOptions: serializeAws_json1_0StatefulEngineOptions(input.StatefulEngineOptions, context),
    }),
    ...(input.StatefulRuleGroupReferences != null && {
      StatefulRuleGroupReferences: serializeAws_json1_0StatefulRuleGroupReferences(
        input.StatefulRuleGroupReferences,
        context
      ),
    }),
    ...(input.StatelessCustomActions != null && {
      StatelessCustomActions: serializeAws_json1_0CustomActions(input.StatelessCustomActions, context),
    }),
    ...(input.StatelessDefaultActions != null && {
      StatelessDefaultActions: serializeAws_json1_0StatelessActions(input.StatelessDefaultActions, context),
    }),
    ...(input.StatelessFragmentDefaultActions != null && {
      StatelessFragmentDefaultActions: serializeAws_json1_0StatelessActions(
        input.StatelessFragmentDefaultActions,
        context
      ),
    }),
    ...(input.StatelessRuleGroupReferences != null && {
      StatelessRuleGroupReferences: serializeAws_json1_0StatelessRuleGroupReferences(
        input.StatelessRuleGroupReferences,
        context
      ),
    }),
  };
};

const serializeAws_json1_0Flags = (input: (TCPFlag | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0Header = (input: Header, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.DestinationPort != null && { DestinationPort: input.DestinationPort }),
    ...(input.Direction != null && { Direction: input.Direction }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.SourcePort != null && { SourcePort: input.SourcePort }),
  };
};

const serializeAws_json1_0IPSet = (input: IPSet, context: __SerdeContext): any => {
  return {
    ...(input.Definition != null && {
      Definition: serializeAws_json1_0VariableDefinitionList(input.Definition, context),
    }),
  };
};

const serializeAws_json1_0IPSetReference = (input: IPSetReference, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceArn != null && { ReferenceArn: input.ReferenceArn }),
  };
};

const serializeAws_json1_0IPSetReferenceMap = (input: Record<string, IPSetReference>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0IPSetReference(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0IPSets = (input: Record<string, IPSet>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0IPSet(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0ListFirewallPoliciesRequest = (
  input: ListFirewallPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListFirewallsRequest = (input: ListFirewallsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.VpcIds != null && { VpcIds: serializeAws_json1_0VpcIds(input.VpcIds, context) }),
  };
};

const serializeAws_json1_0ListRuleGroupsRequest = (input: ListRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ManagedType != null && { ManagedType: input.ManagedType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0LogDestinationConfig = (input: LogDestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.LogDestination != null && {
      LogDestination: serializeAws_json1_0LogDestinationMap(input.LogDestination, context),
    }),
    ...(input.LogDestinationType != null && { LogDestinationType: input.LogDestinationType }),
    ...(input.LogType != null && { LogType: input.LogType }),
  };
};

const serializeAws_json1_0LogDestinationConfigs = (input: LogDestinationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0LogDestinationConfig(entry, context);
    });
};

const serializeAws_json1_0LogDestinationMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_0LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LogDestinationConfigs != null && {
      LogDestinationConfigs: serializeAws_json1_0LogDestinationConfigs(input.LogDestinationConfigs, context),
    }),
  };
};

const serializeAws_json1_0MatchAttributes = (input: MatchAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DestinationPorts != null && {
      DestinationPorts: serializeAws_json1_0PortRanges(input.DestinationPorts, context),
    }),
    ...(input.Destinations != null && { Destinations: serializeAws_json1_0Addresses(input.Destinations, context) }),
    ...(input.Protocols != null && { Protocols: serializeAws_json1_0ProtocolNumbers(input.Protocols, context) }),
    ...(input.SourcePorts != null && { SourcePorts: serializeAws_json1_0PortRanges(input.SourcePorts, context) }),
    ...(input.Sources != null && { Sources: serializeAws_json1_0Addresses(input.Sources, context) }),
    ...(input.TCPFlags != null && { TCPFlags: serializeAws_json1_0TCPFlags(input.TCPFlags, context) }),
  };
};

const serializeAws_json1_0PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

const serializeAws_json1_0PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0PortRange(entry, context);
    });
};

const serializeAws_json1_0PortSet = (input: PortSet, context: __SerdeContext): any => {
  return {
    ...(input.Definition != null && {
      Definition: serializeAws_json1_0VariableDefinitionList(input.Definition, context),
    }),
  };
};

const serializeAws_json1_0PortSets = (input: Record<string, PortSet>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_0PortSet(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_0ProtocolNumbers = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0PublishMetricAction = (input: PublishMetricAction, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_json1_0Dimensions(input.Dimensions, context) }),
  };
};

const serializeAws_json1_0PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0ReferenceSets = (input: ReferenceSets, context: __SerdeContext): any => {
  return {
    ...(input.IPSetReferences != null && {
      IPSetReferences: serializeAws_json1_0IPSetReferenceMap(input.IPSetReferences, context),
    }),
  };
};

const serializeAws_json1_0RuleDefinition = (input: RuleDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_0StatelessActions(input.Actions, context) }),
    ...(input.MatchAttributes != null && {
      MatchAttributes: serializeAws_json1_0MatchAttributes(input.MatchAttributes, context),
    }),
  };
};

const serializeAws_json1_0RuleGroup = (input: RuleGroup, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceSets != null && {
      ReferenceSets: serializeAws_json1_0ReferenceSets(input.ReferenceSets, context),
    }),
    ...(input.RuleVariables != null && {
      RuleVariables: serializeAws_json1_0RuleVariables(input.RuleVariables, context),
    }),
    ...(input.RulesSource != null && { RulesSource: serializeAws_json1_0RulesSource(input.RulesSource, context) }),
    ...(input.StatefulRuleOptions != null && {
      StatefulRuleOptions: serializeAws_json1_0StatefulRuleOptions(input.StatefulRuleOptions, context),
    }),
  };
};

const serializeAws_json1_0RuleOption = (input: RuleOption, context: __SerdeContext): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.Settings != null && { Settings: serializeAws_json1_0Settings(input.Settings, context) }),
  };
};

const serializeAws_json1_0RuleOptions = (input: RuleOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0RuleOption(entry, context);
    });
};

const serializeAws_json1_0RulesSource = (input: RulesSource, context: __SerdeContext): any => {
  return {
    ...(input.RulesSourceList != null && {
      RulesSourceList: serializeAws_json1_0RulesSourceList(input.RulesSourceList, context),
    }),
    ...(input.RulesString != null && { RulesString: input.RulesString }),
    ...(input.StatefulRules != null && {
      StatefulRules: serializeAws_json1_0StatefulRules(input.StatefulRules, context),
    }),
    ...(input.StatelessRulesAndCustomActions != null && {
      StatelessRulesAndCustomActions: serializeAws_json1_0StatelessRulesAndCustomActions(
        input.StatelessRulesAndCustomActions,
        context
      ),
    }),
  };
};

const serializeAws_json1_0RulesSourceList = (input: RulesSourceList, context: __SerdeContext): any => {
  return {
    ...(input.GeneratedRulesType != null && { GeneratedRulesType: input.GeneratedRulesType }),
    ...(input.TargetTypes != null && { TargetTypes: serializeAws_json1_0TargetTypes(input.TargetTypes, context) }),
    ...(input.Targets != null && { Targets: serializeAws_json1_0RuleTargets(input.Targets, context) }),
  };
};

const serializeAws_json1_0RuleTargets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0RuleVariables = (input: RuleVariables, context: __SerdeContext): any => {
  return {
    ...(input.IPSets != null && { IPSets: serializeAws_json1_0IPSets(input.IPSets, context) }),
    ...(input.PortSets != null && { PortSets: serializeAws_json1_0PortSets(input.PortSets, context) }),
  };
};

const serializeAws_json1_0Settings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0SourceMetadata = (input: SourceMetadata, context: __SerdeContext): any => {
  return {
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.SourceUpdateToken != null && { SourceUpdateToken: input.SourceUpdateToken }),
  };
};

const serializeAws_json1_0StatefulActions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0StatefulEngineOptions = (input: StatefulEngineOptions, context: __SerdeContext): any => {
  return {
    ...(input.RuleOrder != null && { RuleOrder: input.RuleOrder }),
    ...(input.StreamExceptionPolicy != null && { StreamExceptionPolicy: input.StreamExceptionPolicy }),
  };
};

const serializeAws_json1_0StatefulRule = (input: StatefulRule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Header != null && { Header: serializeAws_json1_0Header(input.Header, context) }),
    ...(input.RuleOptions != null && { RuleOptions: serializeAws_json1_0RuleOptions(input.RuleOptions, context) }),
  };
};

const serializeAws_json1_0StatefulRuleGroupOverride = (
  input: StatefulRuleGroupOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
  };
};

const serializeAws_json1_0StatefulRuleGroupReference = (
  input: StatefulRuleGroupReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.Override != null && { Override: serializeAws_json1_0StatefulRuleGroupOverride(input.Override, context) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0StatefulRuleGroupReferences = (
  input: StatefulRuleGroupReference[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0StatefulRuleGroupReference(entry, context);
    });
};

const serializeAws_json1_0StatefulRuleOptions = (input: StatefulRuleOptions, context: __SerdeContext): any => {
  return {
    ...(input.RuleOrder != null && { RuleOrder: input.RuleOrder }),
  };
};

const serializeAws_json1_0StatefulRules = (input: StatefulRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0StatefulRule(entry, context);
    });
};

const serializeAws_json1_0StatelessActions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0StatelessRule = (input: StatelessRule, context: __SerdeContext): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleDefinition != null && {
      RuleDefinition: serializeAws_json1_0RuleDefinition(input.RuleDefinition, context),
    }),
  };
};

const serializeAws_json1_0StatelessRuleGroupReference = (
  input: StatelessRuleGroupReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0StatelessRuleGroupReferences = (
  input: StatelessRuleGroupReference[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0StatelessRuleGroupReference(entry, context);
    });
};

const serializeAws_json1_0StatelessRules = (input: StatelessRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0StatelessRule(entry, context);
    });
};

const serializeAws_json1_0StatelessRulesAndCustomActions = (
  input: StatelessRulesAndCustomActions,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomActions != null && {
      CustomActions: serializeAws_json1_0CustomActions(input.CustomActions, context),
    }),
    ...(input.StatelessRules != null && {
      StatelessRules: serializeAws_json1_0StatelessRules(input.StatelessRules, context),
    }),
  };
};

const serializeAws_json1_0SubnetMapping = (input: SubnetMapping, context: __SerdeContext): any => {
  return {
    ...(input.IPAddressType != null && { IPAddressType: input.IPAddressType }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_json1_0SubnetMappings = (input: SubnetMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0SubnetMapping(entry, context);
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0TargetTypes = (input: (TargetType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TCPFlagField = (input: TCPFlagField, context: __SerdeContext): any => {
  return {
    ...(input.Flags != null && { Flags: serializeAws_json1_0Flags(input.Flags, context) }),
    ...(input.Masks != null && { Masks: serializeAws_json1_0Flags(input.Masks, context) }),
  };
};

const serializeAws_json1_0TCPFlags = (input: TCPFlagField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0TCPFlagField(entry, context);
    });
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateFirewallDeleteProtectionRequest = (
  input: UpdateFirewallDeleteProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteProtection != null && { DeleteProtection: input.DeleteProtection }),
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0UpdateFirewallDescriptionRequest = (
  input: UpdateFirewallDescriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0UpdateFirewallEncryptionConfigurationRequest = (
  input: UpdateFirewallEncryptionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest = (
  input: UpdateFirewallPolicyChangeProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.FirewallPolicyChangeProtection != null && {
      FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
    }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0UpdateFirewallPolicyRequest = (
  input: UpdateFirewallPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallPolicy != null && {
      FirewallPolicy: serializeAws_json1_0FirewallPolicy(input.FirewallPolicy, context),
    }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0UpdateLoggingConfigurationRequest = (
  input: UpdateLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.LoggingConfiguration != null && {
      LoggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.LoggingConfiguration, context),
    }),
  };
};

const serializeAws_json1_0UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.RuleGroup != null && { RuleGroup: serializeAws_json1_0RuleGroup(input.RuleGroup, context) }),
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Rules != null && { Rules: input.Rules }),
    ...(input.SourceMetadata != null && {
      SourceMetadata: serializeAws_json1_0SourceMetadata(input.SourceMetadata, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0UpdateSubnetChangeProtectionRequest = (
  input: UpdateSubnetChangeProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.SubnetChangeProtection != null && { SubnetChangeProtection: input.SubnetChangeProtection }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

const serializeAws_json1_0VariableDefinitionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0VpcIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_0ActionDefinition = (output: any, context: __SerdeContext): ActionDefinition => {
  return {
    PublishMetricAction:
      output.PublishMetricAction != null
        ? deserializeAws_json1_0PublishMetricAction(output.PublishMetricAction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Address = (output: any, context: __SerdeContext): Address => {
  return {
    AddressDefinition: __expectString(output.AddressDefinition),
  } as any;
};

const deserializeAws_json1_0Addresses = (output: any, context: __SerdeContext): Address[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Address(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0AssociateFirewallPolicyResponse = (
  output: any,
  context: __SerdeContext
): AssociateFirewallPolicyResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0AssociateSubnetsResponse = (
  output: any,
  context: __SerdeContext
): AssociateSubnetsResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    SubnetMappings:
      output.SubnetMappings != null ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    EndpointId: __expectString(output.EndpointId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_json1_0CapacityUsageSummary = (output: any, context: __SerdeContext): CapacityUsageSummary => {
  return {
    CIDRs: output.CIDRs != null ? deserializeAws_json1_0CIDRSummary(output.CIDRs, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CIDRSummary = (output: any, context: __SerdeContext): CIDRSummary => {
  return {
    AvailableCIDRCount: __expectInt32(output.AvailableCIDRCount),
    IPSetReferences:
      output.IPSetReferences != null
        ? deserializeAws_json1_0IPSetMetadataMap(output.IPSetReferences, context)
        : undefined,
    UtilizedCIDRCount: __expectInt32(output.UtilizedCIDRCount),
  } as any;
};

const deserializeAws_json1_0CreateFirewallPolicyResponse = (
  output: any,
  context: __SerdeContext
): CreateFirewallPolicyResponse => {
  return {
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0CreateFirewallResponse = (output: any, context: __SerdeContext): CreateFirewallResponse => {
  return {
    Firewall: output.Firewall != null ? deserializeAws_json1_0Firewall(output.Firewall, context) : undefined,
    FirewallStatus:
      output.FirewallStatus != null ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateRuleGroupResponse => {
  return {
    RuleGroupResponse:
      output.RuleGroupResponse != null
        ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0CustomAction = (output: any, context: __SerdeContext): CustomAction => {
  return {
    ActionDefinition:
      output.ActionDefinition != null
        ? deserializeAws_json1_0ActionDefinition(output.ActionDefinition, context)
        : undefined,
    ActionName: __expectString(output.ActionName),
  } as any;
};

const deserializeAws_json1_0CustomActions = (output: any, context: __SerdeContext): CustomAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CustomAction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DeleteFirewallPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteFirewallPolicyResponse => {
  return {
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteFirewallResponse = (output: any, context: __SerdeContext): DeleteFirewallResponse => {
  return {
    Firewall: output.Firewall != null ? deserializeAws_json1_0Firewall(output.Firewall, context) : undefined,
    FirewallStatus:
      output.FirewallStatus != null ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_0DeleteRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteRuleGroupResponse => {
  return {
    RuleGroupResponse:
      output.RuleGroupResponse != null
        ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFirewallPolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeFirewallPolicyResponse => {
  return {
    FirewallPolicy:
      output.FirewallPolicy != null ? deserializeAws_json1_0FirewallPolicy(output.FirewallPolicy, context) : undefined,
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0DescribeFirewallResponse = (
  output: any,
  context: __SerdeContext
): DescribeFirewallResponse => {
  return {
    Firewall: output.Firewall != null ? deserializeAws_json1_0Firewall(output.Firewall, context) : undefined,
    FirewallStatus:
      output.FirewallStatus != null ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0DescribeLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeLoggingConfigurationResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    LoggingConfiguration:
      output.LoggingConfiguration != null
        ? deserializeAws_json1_0LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_0DescribeRuleGroupMetadataResponse = (
  output: any,
  context: __SerdeContext
): DescribeRuleGroupMetadataResponse => {
  return {
    Capacity: __expectInt32(output.Capacity),
    Description: __expectString(output.Description),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    RuleGroupArn: __expectString(output.RuleGroupArn),
    RuleGroupName: __expectString(output.RuleGroupName),
    StatefulRuleOptions:
      output.StatefulRuleOptions != null
        ? deserializeAws_json1_0StatefulRuleOptions(output.StatefulRuleOptions, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_0DescribeRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeRuleGroupResponse => {
  return {
    RuleGroup: output.RuleGroup != null ? deserializeAws_json1_0RuleGroup(output.RuleGroup, context) : undefined,
    RuleGroupResponse:
      output.RuleGroupResponse != null
        ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0Dimension = (output: any, context: __SerdeContext): Dimension => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0Dimensions = (output: any, context: __SerdeContext): Dimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Dimension(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DisassociateSubnetsResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSubnetsResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    SubnetMappings:
      output.SubnetMappings != null ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    KeyId: __expectString(output.KeyId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_0Firewall = (output: any, context: __SerdeContext): Firewall => {
  return {
    DeleteProtection: __expectBoolean(output.DeleteProtection),
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    FirewallArn: __expectString(output.FirewallArn),
    FirewallId: __expectString(output.FirewallId),
    FirewallName: __expectString(output.FirewallName),
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    FirewallPolicyChangeProtection: __expectBoolean(output.FirewallPolicyChangeProtection),
    SubnetChangeProtection: __expectBoolean(output.SubnetChangeProtection),
    SubnetMappings:
      output.SubnetMappings != null ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_0FirewallMetadata = (output: any, context: __SerdeContext): FirewallMetadata => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
  } as any;
};

const deserializeAws_json1_0FirewallPolicies = (output: any, context: __SerdeContext): FirewallPolicyMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0FirewallPolicyMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0FirewallPolicy = (output: any, context: __SerdeContext): FirewallPolicy => {
  return {
    StatefulDefaultActions:
      output.StatefulDefaultActions != null
        ? deserializeAws_json1_0StatefulActions(output.StatefulDefaultActions, context)
        : undefined,
    StatefulEngineOptions:
      output.StatefulEngineOptions != null
        ? deserializeAws_json1_0StatefulEngineOptions(output.StatefulEngineOptions, context)
        : undefined,
    StatefulRuleGroupReferences:
      output.StatefulRuleGroupReferences != null
        ? deserializeAws_json1_0StatefulRuleGroupReferences(output.StatefulRuleGroupReferences, context)
        : undefined,
    StatelessCustomActions:
      output.StatelessCustomActions != null
        ? deserializeAws_json1_0CustomActions(output.StatelessCustomActions, context)
        : undefined,
    StatelessDefaultActions:
      output.StatelessDefaultActions != null
        ? deserializeAws_json1_0StatelessActions(output.StatelessDefaultActions, context)
        : undefined,
    StatelessFragmentDefaultActions:
      output.StatelessFragmentDefaultActions != null
        ? deserializeAws_json1_0StatelessActions(output.StatelessFragmentDefaultActions, context)
        : undefined,
    StatelessRuleGroupReferences:
      output.StatelessRuleGroupReferences != null
        ? deserializeAws_json1_0StatelessRuleGroupReferences(output.StatelessRuleGroupReferences, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0FirewallPolicyMetadata = (output: any, context: __SerdeContext): FirewallPolicyMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_0FirewallPolicyResponse = (output: any, context: __SerdeContext): FirewallPolicyResponse => {
  return {
    ConsumedStatefulRuleCapacity: __expectInt32(output.ConsumedStatefulRuleCapacity),
    ConsumedStatelessRuleCapacity: __expectInt32(output.ConsumedStatelessRuleCapacity),
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    FirewallPolicyId: __expectString(output.FirewallPolicyId),
    FirewallPolicyName: __expectString(output.FirewallPolicyName),
    FirewallPolicyStatus: __expectString(output.FirewallPolicyStatus),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    NumberOfAssociations: __expectInt32(output.NumberOfAssociations),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0Firewalls = (output: any, context: __SerdeContext): FirewallMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0FirewallMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0FirewallStatus = (output: any, context: __SerdeContext): FirewallStatus => {
  return {
    CapacityUsageSummary:
      output.CapacityUsageSummary != null
        ? deserializeAws_json1_0CapacityUsageSummary(output.CapacityUsageSummary, context)
        : undefined,
    ConfigurationSyncStateSummary: __expectString(output.ConfigurationSyncStateSummary),
    Status: __expectString(output.Status),
    SyncStates: output.SyncStates != null ? deserializeAws_json1_0SyncStates(output.SyncStates, context) : undefined,
  } as any;
};

const deserializeAws_json1_0Flags = (output: any, context: __SerdeContext): (TCPFlag | string)[] => {
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

const deserializeAws_json1_0Header = (output: any, context: __SerdeContext): Header => {
  return {
    Destination: __expectString(output.Destination),
    DestinationPort: __expectString(output.DestinationPort),
    Direction: __expectString(output.Direction),
    Protocol: __expectString(output.Protocol),
    Source: __expectString(output.Source),
    SourcePort: __expectString(output.SourcePort),
  } as any;
};

const deserializeAws_json1_0InsufficientCapacityException = (
  output: any,
  context: __SerdeContext
): InsufficientCapacityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidResourcePolicyException = (
  output: any,
  context: __SerdeContext
): InvalidResourcePolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidTokenException = (output: any, context: __SerdeContext): InvalidTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0IPSet = (output: any, context: __SerdeContext): IPSet => {
  return {
    Definition:
      output.Definition != null ? deserializeAws_json1_0VariableDefinitionList(output.Definition, context) : undefined,
  } as any;
};

const deserializeAws_json1_0IPSetMetadata = (output: any, context: __SerdeContext): IPSetMetadata => {
  return {
    ResolvedCIDRCount: __expectInt32(output.ResolvedCIDRCount),
  } as any;
};

const deserializeAws_json1_0IPSetMetadataMap = (
  output: any,
  context: __SerdeContext
): Record<string, IPSetMetadata> => {
  return Object.entries(output).reduce((acc: Record<string, IPSetMetadata>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0IPSetMetadata(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0IPSetReference = (output: any, context: __SerdeContext): IPSetReference => {
  return {
    ReferenceArn: __expectString(output.ReferenceArn),
  } as any;
};

const deserializeAws_json1_0IPSetReferenceMap = (
  output: any,
  context: __SerdeContext
): Record<string, IPSetReference> => {
  return Object.entries(output).reduce((acc: Record<string, IPSetReference>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0IPSetReference(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0IPSets = (output: any, context: __SerdeContext): Record<string, IPSet> => {
  return Object.entries(output).reduce((acc: Record<string, IPSet>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0IPSet(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListFirewallPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListFirewallPoliciesResponse => {
  return {
    FirewallPolicies:
      output.FirewallPolicies != null
        ? deserializeAws_json1_0FirewallPolicies(output.FirewallPolicies, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListFirewallsResponse = (output: any, context: __SerdeContext): ListFirewallsResponse => {
  return {
    Firewalls: output.Firewalls != null ? deserializeAws_json1_0Firewalls(output.Firewalls, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListRuleGroupsResponse = (output: any, context: __SerdeContext): ListRuleGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleGroups: output.RuleGroups != null ? deserializeAws_json1_0RuleGroups(output.RuleGroups, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0LogDestinationConfig = (output: any, context: __SerdeContext): LogDestinationConfig => {
  return {
    LogDestination:
      output.LogDestination != null
        ? deserializeAws_json1_0LogDestinationMap(output.LogDestination, context)
        : undefined,
    LogDestinationType: __expectString(output.LogDestinationType),
    LogType: __expectString(output.LogType),
  } as any;
};

const deserializeAws_json1_0LogDestinationConfigs = (output: any, context: __SerdeContext): LogDestinationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LogDestinationConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0LogDestinationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_0LogDestinationPermissionException = (
  output: any,
  context: __SerdeContext
): LogDestinationPermissionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogDestinationConfigs:
      output.LogDestinationConfigs != null
        ? deserializeAws_json1_0LogDestinationConfigs(output.LogDestinationConfigs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0MatchAttributes = (output: any, context: __SerdeContext): MatchAttributes => {
  return {
    DestinationPorts:
      output.DestinationPorts != null ? deserializeAws_json1_0PortRanges(output.DestinationPorts, context) : undefined,
    Destinations:
      output.Destinations != null ? deserializeAws_json1_0Addresses(output.Destinations, context) : undefined,
    Protocols: output.Protocols != null ? deserializeAws_json1_0ProtocolNumbers(output.Protocols, context) : undefined,
    SourcePorts: output.SourcePorts != null ? deserializeAws_json1_0PortRanges(output.SourcePorts, context) : undefined,
    Sources: output.Sources != null ? deserializeAws_json1_0Addresses(output.Sources, context) : undefined,
    TCPFlags: output.TCPFlags != null ? deserializeAws_json1_0TCPFlags(output.TCPFlags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0PerObjectStatus = (output: any, context: __SerdeContext): PerObjectStatus => {
  return {
    SyncStatus: __expectString(output.SyncStatus),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    FromPort: __expectInt32(output.FromPort),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

const deserializeAws_json1_0PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0PortRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PortSet = (output: any, context: __SerdeContext): PortSet => {
  return {
    Definition:
      output.Definition != null ? deserializeAws_json1_0VariableDefinitionList(output.Definition, context) : undefined,
  } as any;
};

const deserializeAws_json1_0PortSets = (output: any, context: __SerdeContext): Record<string, PortSet> => {
  return Object.entries(output).reduce((acc: Record<string, PortSet>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0PortSet(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0ProtocolNumbers = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_0PublishMetricAction = (output: any, context: __SerdeContext): PublishMetricAction => {
  return {
    Dimensions: output.Dimensions != null ? deserializeAws_json1_0Dimensions(output.Dimensions, context) : undefined,
  } as any;
};

const deserializeAws_json1_0PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_0ReferenceSets = (output: any, context: __SerdeContext): ReferenceSets => {
  return {
    IPSetReferences:
      output.IPSetReferences != null
        ? deserializeAws_json1_0IPSetReferenceMap(output.IPSetReferences, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResourceOwnerCheckException = (
  output: any,
  context: __SerdeContext
): ResourceOwnerCheckException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0RuleDefinition = (output: any, context: __SerdeContext): RuleDefinition => {
  return {
    Actions: output.Actions != null ? deserializeAws_json1_0StatelessActions(output.Actions, context) : undefined,
    MatchAttributes:
      output.MatchAttributes != null
        ? deserializeAws_json1_0MatchAttributes(output.MatchAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return {
    ReferenceSets:
      output.ReferenceSets != null ? deserializeAws_json1_0ReferenceSets(output.ReferenceSets, context) : undefined,
    RuleVariables:
      output.RuleVariables != null ? deserializeAws_json1_0RuleVariables(output.RuleVariables, context) : undefined,
    RulesSource:
      output.RulesSource != null ? deserializeAws_json1_0RulesSource(output.RulesSource, context) : undefined,
    StatefulRuleOptions:
      output.StatefulRuleOptions != null
        ? deserializeAws_json1_0StatefulRuleOptions(output.StatefulRuleOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RuleGroupMetadata = (output: any, context: __SerdeContext): RuleGroupMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_0RuleGroupResponse = (output: any, context: __SerdeContext): RuleGroupResponse => {
  return {
    Capacity: __expectInt32(output.Capacity),
    ConsumedCapacity: __expectInt32(output.ConsumedCapacity),
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    NumberOfAssociations: __expectInt32(output.NumberOfAssociations),
    RuleGroupArn: __expectString(output.RuleGroupArn),
    RuleGroupId: __expectString(output.RuleGroupId),
    RuleGroupName: __expectString(output.RuleGroupName),
    RuleGroupStatus: __expectString(output.RuleGroupStatus),
    SnsTopic: __expectString(output.SnsTopic),
    SourceMetadata:
      output.SourceMetadata != null ? deserializeAws_json1_0SourceMetadata(output.SourceMetadata, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_0RuleGroups = (output: any, context: __SerdeContext): RuleGroupMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RuleGroupMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0RuleOption = (output: any, context: __SerdeContext): RuleOption => {
  return {
    Keyword: __expectString(output.Keyword),
    Settings: output.Settings != null ? deserializeAws_json1_0Settings(output.Settings, context) : undefined,
  } as any;
};

const deserializeAws_json1_0RuleOptions = (output: any, context: __SerdeContext): RuleOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RuleOption(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0RulesSource = (output: any, context: __SerdeContext): RulesSource => {
  return {
    RulesSourceList:
      output.RulesSourceList != null
        ? deserializeAws_json1_0RulesSourceList(output.RulesSourceList, context)
        : undefined,
    RulesString: __expectString(output.RulesString),
    StatefulRules:
      output.StatefulRules != null ? deserializeAws_json1_0StatefulRules(output.StatefulRules, context) : undefined,
    StatelessRulesAndCustomActions:
      output.StatelessRulesAndCustomActions != null
        ? deserializeAws_json1_0StatelessRulesAndCustomActions(output.StatelessRulesAndCustomActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RulesSourceList = (output: any, context: __SerdeContext): RulesSourceList => {
  return {
    GeneratedRulesType: __expectString(output.GeneratedRulesType),
    TargetTypes:
      output.TargetTypes != null ? deserializeAws_json1_0TargetTypes(output.TargetTypes, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_json1_0RuleTargets(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_0RuleTargets = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0RuleVariables = (output: any, context: __SerdeContext): RuleVariables => {
  return {
    IPSets: output.IPSets != null ? deserializeAws_json1_0IPSets(output.IPSets, context) : undefined,
    PortSets: output.PortSets != null ? deserializeAws_json1_0PortSets(output.PortSets, context) : undefined,
  } as any;
};

const deserializeAws_json1_0Settings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0SourceMetadata = (output: any, context: __SerdeContext): SourceMetadata => {
  return {
    SourceArn: __expectString(output.SourceArn),
    SourceUpdateToken: __expectString(output.SourceUpdateToken),
  } as any;
};

const deserializeAws_json1_0StatefulActions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0StatefulEngineOptions = (output: any, context: __SerdeContext): StatefulEngineOptions => {
  return {
    RuleOrder: __expectString(output.RuleOrder),
    StreamExceptionPolicy: __expectString(output.StreamExceptionPolicy),
  } as any;
};

const deserializeAws_json1_0StatefulRule = (output: any, context: __SerdeContext): StatefulRule => {
  return {
    Action: __expectString(output.Action),
    Header: output.Header != null ? deserializeAws_json1_0Header(output.Header, context) : undefined,
    RuleOptions:
      output.RuleOptions != null ? deserializeAws_json1_0RuleOptions(output.RuleOptions, context) : undefined,
  } as any;
};

const deserializeAws_json1_0StatefulRuleGroupOverride = (
  output: any,
  context: __SerdeContext
): StatefulRuleGroupOverride => {
  return {
    Action: __expectString(output.Action),
  } as any;
};

const deserializeAws_json1_0StatefulRuleGroupReference = (
  output: any,
  context: __SerdeContext
): StatefulRuleGroupReference => {
  return {
    Override:
      output.Override != null ? deserializeAws_json1_0StatefulRuleGroupOverride(output.Override, context) : undefined,
    Priority: __expectInt32(output.Priority),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_json1_0StatefulRuleGroupReferences = (
  output: any,
  context: __SerdeContext
): StatefulRuleGroupReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0StatefulRuleGroupReference(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0StatefulRuleOptions = (output: any, context: __SerdeContext): StatefulRuleOptions => {
  return {
    RuleOrder: __expectString(output.RuleOrder),
  } as any;
};

const deserializeAws_json1_0StatefulRules = (output: any, context: __SerdeContext): StatefulRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0StatefulRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0StatelessActions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0StatelessRule = (output: any, context: __SerdeContext): StatelessRule => {
  return {
    Priority: __expectInt32(output.Priority),
    RuleDefinition:
      output.RuleDefinition != null ? deserializeAws_json1_0RuleDefinition(output.RuleDefinition, context) : undefined,
  } as any;
};

const deserializeAws_json1_0StatelessRuleGroupReference = (
  output: any,
  context: __SerdeContext
): StatelessRuleGroupReference => {
  return {
    Priority: __expectInt32(output.Priority),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_json1_0StatelessRuleGroupReferences = (
  output: any,
  context: __SerdeContext
): StatelessRuleGroupReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0StatelessRuleGroupReference(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0StatelessRules = (output: any, context: __SerdeContext): StatelessRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0StatelessRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0StatelessRulesAndCustomActions = (
  output: any,
  context: __SerdeContext
): StatelessRulesAndCustomActions => {
  return {
    CustomActions:
      output.CustomActions != null ? deserializeAws_json1_0CustomActions(output.CustomActions, context) : undefined,
    StatelessRules:
      output.StatelessRules != null ? deserializeAws_json1_0StatelessRules(output.StatelessRules, context) : undefined,
  } as any;
};

const deserializeAws_json1_0SubnetMapping = (output: any, context: __SerdeContext): SubnetMapping => {
  return {
    IPAddressType: __expectString(output.IPAddressType),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_json1_0SubnetMappings = (output: any, context: __SerdeContext): SubnetMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SubnetMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SyncState = (output: any, context: __SerdeContext): SyncState => {
  return {
    Attachment: output.Attachment != null ? deserializeAws_json1_0Attachment(output.Attachment, context) : undefined,
    Config: output.Config != null ? deserializeAws_json1_0SyncStateConfig(output.Config, context) : undefined,
  } as any;
};

const deserializeAws_json1_0SyncStateConfig = (
  output: any,
  context: __SerdeContext
): Record<string, PerObjectStatus> => {
  return Object.entries(output).reduce((acc: Record<string, PerObjectStatus>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0PerObjectStatus(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0SyncStates = (output: any, context: __SerdeContext): Record<string, SyncState> => {
  return Object.entries(output).reduce((acc: Record<string, SyncState>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0SyncState(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0TargetTypes = (output: any, context: __SerdeContext): (TargetType | string)[] => {
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

const deserializeAws_json1_0TCPFlagField = (output: any, context: __SerdeContext): TCPFlagField => {
  return {
    Flags: output.Flags != null ? deserializeAws_json1_0Flags(output.Flags, context) : undefined,
    Masks: output.Masks != null ? deserializeAws_json1_0Flags(output.Masks, context) : undefined,
  } as any;
};

const deserializeAws_json1_0TCPFlags = (output: any, context: __SerdeContext): TCPFlagField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0TCPFlagField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallDeleteProtectionResponse => {
  return {
    DeleteProtection: __expectBoolean(output.DeleteProtection),
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0UpdateFirewallDescriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallDescriptionResponse => {
  return {
    Description: __expectString(output.Description),
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0UpdateFirewallEncryptionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallEncryptionConfigurationResponse => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallPolicyChangeProtectionResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    FirewallPolicyChangeProtection: __expectBoolean(output.FirewallPolicyChangeProtection),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0UpdateFirewallPolicyResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallPolicyResponse => {
  return {
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0UpdateLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateLoggingConfigurationResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    LoggingConfiguration:
      output.LoggingConfiguration != null
        ? deserializeAws_json1_0LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateRuleGroupResponse => {
  return {
    RuleGroupResponse:
      output.RuleGroupResponse != null
        ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0UpdateSubnetChangeProtectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubnetChangeProtectionResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    SubnetChangeProtection: __expectBoolean(output.SubnetChangeProtection),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

const deserializeAws_json1_0VariableDefinitionList = (output: any, context: __SerdeContext): string[] => {
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
