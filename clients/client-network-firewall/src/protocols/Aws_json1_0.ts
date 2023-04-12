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
import {
  CreateTLSInspectionConfigurationCommandInput,
  CreateTLSInspectionConfigurationCommandOutput,
} from "../commands/CreateTLSInspectionConfigurationCommand";
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
import {
  DeleteTLSInspectionConfigurationCommandInput,
  DeleteTLSInspectionConfigurationCommandOutput,
} from "../commands/DeleteTLSInspectionConfigurationCommand";
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
  DescribeTLSInspectionConfigurationCommandInput,
  DescribeTLSInspectionConfigurationCommandOutput,
} from "../commands/DescribeTLSInspectionConfigurationCommand";
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
import {
  ListTLSInspectionConfigurationsCommandInput,
  ListTLSInspectionConfigurationsCommandOutput,
} from "../commands/ListTLSInspectionConfigurationsCommand";
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
  UpdateTLSInspectionConfigurationCommandInput,
  UpdateTLSInspectionConfigurationCommandOutput,
} from "../commands/UpdateTLSInspectionConfigurationCommand";
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
  CreateTLSInspectionConfigurationRequest,
  CreateTLSInspectionConfigurationResponse,
  CustomAction,
  DeleteFirewallPolicyRequest,
  DeleteFirewallPolicyResponse,
  DeleteFirewallRequest,
  DeleteFirewallResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteTLSInspectionConfigurationRequest,
  DeleteTLSInspectionConfigurationResponse,
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
  DescribeTLSInspectionConfigurationRequest,
  DescribeTLSInspectionConfigurationResponse,
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
  ListTLSInspectionConfigurationsRequest,
  ListTLSInspectionConfigurationsResponse,
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
  ServerCertificate,
  ServerCertificateConfiguration,
  ServerCertificateScope,
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
  TlsCertificateData,
  TLSInspectionConfiguration,
  TLSInspectionConfigurationMetadata,
  TLSInspectionConfigurationResponse,
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
  UpdateTLSInspectionConfigurationRequest,
  UpdateTLSInspectionConfigurationResponse,
} from "../models/models_0";
import { NetworkFirewallServiceException as __BaseException } from "../models/NetworkFirewallServiceException";

/**
 * serializeAws_json1_0AssociateFirewallPolicyCommand
 */
export const se_AssociateFirewallPolicyCommand = async (
  input: AssociateFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFirewallPolicy");
  let body: any;
  body = JSON.stringify(se_AssociateFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0AssociateSubnetsCommand
 */
export const se_AssociateSubnetsCommand = async (
  input: AssociateSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateSubnets");
  let body: any;
  body = JSON.stringify(se_AssociateSubnetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateFirewallCommand
 */
export const se_CreateFirewallCommand = async (
  input: CreateFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFirewall");
  let body: any;
  body = JSON.stringify(se_CreateFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateFirewallPolicyCommand
 */
export const se_CreateFirewallPolicyCommand = async (
  input: CreateFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFirewallPolicy");
  let body: any;
  body = JSON.stringify(se_CreateFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRuleGroupCommand
 */
export const se_CreateRuleGroupCommand = async (
  input: CreateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRuleGroup");
  let body: any;
  body = JSON.stringify(se_CreateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTLSInspectionConfigurationCommand
 */
export const se_CreateTLSInspectionConfigurationCommand = async (
  input: CreateTLSInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTLSInspectionConfiguration");
  let body: any;
  body = JSON.stringify(se_CreateTLSInspectionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFirewallCommand
 */
export const se_DeleteFirewallCommand = async (
  input: DeleteFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFirewall");
  let body: any;
  body = JSON.stringify(se_DeleteFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFirewallPolicyCommand
 */
export const se_DeleteFirewallPolicyCommand = async (
  input: DeleteFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFirewallPolicy");
  let body: any;
  body = JSON.stringify(se_DeleteFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRuleGroupCommand
 */
export const se_DeleteRuleGroupCommand = async (
  input: DeleteRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRuleGroup");
  let body: any;
  body = JSON.stringify(se_DeleteRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTLSInspectionConfigurationCommand
 */
export const se_DeleteTLSInspectionConfigurationCommand = async (
  input: DeleteTLSInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTLSInspectionConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteTLSInspectionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFirewallCommand
 */
export const se_DescribeFirewallCommand = async (
  input: DescribeFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFirewall");
  let body: any;
  body = JSON.stringify(se_DescribeFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFirewallPolicyCommand
 */
export const se_DescribeFirewallPolicyCommand = async (
  input: DescribeFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFirewallPolicy");
  let body: any;
  body = JSON.stringify(se_DescribeFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeLoggingConfigurationCommand
 */
export const se_DescribeLoggingConfigurationCommand = async (
  input: DescribeLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLoggingConfiguration");
  let body: any;
  body = JSON.stringify(se_DescribeLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeResourcePolicyCommand
 */
export const se_DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResourcePolicy");
  let body: any;
  body = JSON.stringify(se_DescribeResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRuleGroupCommand
 */
export const se_DescribeRuleGroupCommand = async (
  input: DescribeRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRuleGroup");
  let body: any;
  body = JSON.stringify(se_DescribeRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRuleGroupMetadataCommand
 */
export const se_DescribeRuleGroupMetadataCommand = async (
  input: DescribeRuleGroupMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRuleGroupMetadata");
  let body: any;
  body = JSON.stringify(se_DescribeRuleGroupMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeTLSInspectionConfigurationCommand
 */
export const se_DescribeTLSInspectionConfigurationCommand = async (
  input: DescribeTLSInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTLSInspectionConfiguration");
  let body: any;
  body = JSON.stringify(se_DescribeTLSInspectionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateSubnetsCommand
 */
export const se_DisassociateSubnetsCommand = async (
  input: DisassociateSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateSubnets");
  let body: any;
  body = JSON.stringify(se_DisassociateSubnetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFirewallPoliciesCommand
 */
export const se_ListFirewallPoliciesCommand = async (
  input: ListFirewallPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallPolicies");
  let body: any;
  body = JSON.stringify(se_ListFirewallPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFirewallsCommand
 */
export const se_ListFirewallsCommand = async (
  input: ListFirewallsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewalls");
  let body: any;
  body = JSON.stringify(se_ListFirewallsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRuleGroupsCommand
 */
export const se_ListRuleGroupsCommand = async (
  input: ListRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRuleGroups");
  let body: any;
  body = JSON.stringify(se_ListRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTLSInspectionConfigurationsCommand
 */
export const se_ListTLSInspectionConfigurationsCommand = async (
  input: ListTLSInspectionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTLSInspectionConfigurations");
  let body: any;
  body = JSON.stringify(se_ListTLSInspectionConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFirewallDeleteProtectionCommand
 */
export const se_UpdateFirewallDeleteProtectionCommand = async (
  input: UpdateFirewallDeleteProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallDeleteProtection");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallDeleteProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFirewallDescriptionCommand
 */
export const se_UpdateFirewallDescriptionCommand = async (
  input: UpdateFirewallDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallDescription");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallDescriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand
 */
export const se_UpdateFirewallEncryptionConfigurationCommand = async (
  input: UpdateFirewallEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallEncryptionConfiguration");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallEncryptionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFirewallPolicyCommand
 */
export const se_UpdateFirewallPolicyCommand = async (
  input: UpdateFirewallPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallPolicy");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand
 */
export const se_UpdateFirewallPolicyChangeProtectionCommand = async (
  input: UpdateFirewallPolicyChangeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallPolicyChangeProtection");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallPolicyChangeProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateLoggingConfigurationCommand
 */
export const se_UpdateLoggingConfigurationCommand = async (
  input: UpdateLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLoggingConfiguration");
  let body: any;
  body = JSON.stringify(se_UpdateLoggingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRuleGroupCommand
 */
export const se_UpdateRuleGroupCommand = async (
  input: UpdateRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleGroup");
  let body: any;
  body = JSON.stringify(se_UpdateRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSubnetChangeProtectionCommand
 */
export const se_UpdateSubnetChangeProtectionCommand = async (
  input: UpdateSubnetChangeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSubnetChangeProtection");
  let body: any;
  body = JSON.stringify(se_UpdateSubnetChangeProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTLSInspectionConfigurationCommand
 */
export const se_UpdateTLSInspectionConfigurationCommand = async (
  input: UpdateTLSInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTLSInspectionConfiguration");
  let body: any;
  body = JSON.stringify(se_UpdateTLSInspectionConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssociateFirewallPolicyCommand
 */
export const de_AssociateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateFirewallPolicyResponse(data, context);
  const response: AssociateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0AssociateFirewallPolicyCommandError
 */
const de_AssociateFirewallPolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AssociateSubnetsCommand
 */
export const de_AssociateSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateSubnetsResponse(data, context);
  const response: AssociateSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0AssociateSubnetsCommandError
 */
const de_AssociateSubnetsCommandError = async (
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
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateFirewallCommand
 */
export const de_CreateFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFirewallResponse(data, context);
  const response: CreateFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateFirewallCommandError
 */
const de_CreateFirewallCommandError = async (
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
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateFirewallPolicyCommand
 */
export const de_CreateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFirewallPolicyResponse(data, context);
  const response: CreateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateFirewallPolicyCommandError
 */
const de_CreateFirewallPolicyCommandError = async (
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
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateRuleGroupCommand
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
 * deserializeAws_json1_0CreateRuleGroupCommandError
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
    case "InsufficientCapacityException":
    case "com.amazonaws.networkfirewall#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateTLSInspectionConfigurationCommand
 */
export const de_CreateTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTLSInspectionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTLSInspectionConfigurationResponse(data, context);
  const response: CreateTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateTLSInspectionConfigurationCommandError
 */
const de_CreateTLSInspectionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTLSInspectionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteFirewallCommand
 */
export const de_DeleteFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallResponse(data, context);
  const response: DeleteFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteFirewallCommandError
 */
const de_DeleteFirewallCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteFirewallPolicyCommand
 */
export const de_DeleteFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallPolicyResponse(data, context);
  const response: DeleteFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteFirewallPolicyCommandError
 */
const de_DeleteFirewallPolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.networkfirewall#InvalidResourcePolicyException":
      throw await de_InvalidResourcePolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteRuleGroupCommand
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
 * deserializeAws_json1_0DeleteRuleGroupCommandError
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
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteTLSInspectionConfigurationCommand
 */
export const de_DeleteTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTLSInspectionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTLSInspectionConfigurationResponse(data, context);
  const response: DeleteTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteTLSInspectionConfigurationCommandError
 */
const de_DeleteTLSInspectionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTLSInspectionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeFirewallCommand
 */
export const de_DescribeFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFirewallResponse(data, context);
  const response: DescribeFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeFirewallCommandError
 */
const de_DescribeFirewallCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeFirewallPolicyCommand
 */
export const de_DescribeFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFirewallPolicyResponse(data, context);
  const response: DescribeFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeFirewallPolicyCommandError
 */
const de_DescribeFirewallPolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeLoggingConfigurationCommand
 */
export const de_DescribeLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoggingConfigurationResponse(data, context);
  const response: DescribeLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeLoggingConfigurationCommandError
 */
const de_DescribeLoggingConfigurationCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeResourcePolicyCommand
 */
export const de_DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourcePolicyResponse(data, context);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeResourcePolicyCommandError
 */
const de_DescribeResourcePolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeRuleGroupCommand
 */
export const de_DescribeRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRuleGroupResponse(data, context);
  const response: DescribeRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeRuleGroupCommandError
 */
const de_DescribeRuleGroupCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeRuleGroupMetadataCommand
 */
export const de_DescribeRuleGroupMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRuleGroupMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRuleGroupMetadataResponse(data, context);
  const response: DescribeRuleGroupMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeRuleGroupMetadataCommandError
 */
const de_DescribeRuleGroupMetadataCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeTLSInspectionConfigurationCommand
 */
export const de_DescribeTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTLSInspectionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTLSInspectionConfigurationResponse(data, context);
  const response: DescribeTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeTLSInspectionConfigurationCommandError
 */
const de_DescribeTLSInspectionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTLSInspectionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DisassociateSubnetsCommand
 */
export const de_DisassociateSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateSubnetsResponse(data, context);
  const response: DisassociateSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DisassociateSubnetsCommandError
 */
const de_DisassociateSubnetsCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.networkfirewall#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListFirewallPoliciesCommand
 */
export const de_ListFirewallPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallPoliciesResponse(data, context);
  const response: ListFirewallPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFirewallPoliciesCommandError
 */
const de_ListFirewallPoliciesCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListFirewallsCommand
 */
export const de_ListFirewallsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallsResponse(data, context);
  const response: ListFirewallsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListFirewallsCommandError
 */
const de_ListFirewallsCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListRuleGroupsCommand
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
 * deserializeAws_json1_0ListRuleGroupsCommandError
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
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTLSInspectionConfigurationsCommand
 */
export const de_ListTLSInspectionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTLSInspectionConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTLSInspectionConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTLSInspectionConfigurationsResponse(data, context);
  const response: ListTLSInspectionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTLSInspectionConfigurationsCommandError
 */
const de_ListTLSInspectionConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTLSInspectionConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.networkfirewall#InvalidResourcePolicyException":
      throw await de_InvalidResourcePolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0TagResourceCommandError
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
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand
 */
export const de_UpdateFirewallDeleteProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDeleteProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallDeleteProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallDeleteProtectionResponse(data, context);
  const response: UpdateFirewallDeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError
 */
const de_UpdateFirewallDeleteProtectionCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await de_ResourceOwnerCheckExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateFirewallDescriptionCommand
 */
export const de_UpdateFirewallDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallDescriptionResponse(data, context);
  const response: UpdateFirewallDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateFirewallDescriptionCommandError
 */
const de_UpdateFirewallDescriptionCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand
 */
export const de_UpdateFirewallEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallEncryptionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallEncryptionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallEncryptionConfigurationResponse(data, context);
  const response: UpdateFirewallEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommandError
 */
const de_UpdateFirewallEncryptionConfigurationCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await de_ResourceOwnerCheckExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateFirewallPolicyCommand
 */
export const de_UpdateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallPolicyResponse(data, context);
  const response: UpdateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateFirewallPolicyCommandError
 */
const de_UpdateFirewallPolicyCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand
 */
export const de_UpdateFirewallPolicyChangeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallPolicyChangeProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallPolicyChangeProtectionResponse(data, context);
  const response: UpdateFirewallPolicyChangeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError
 */
const de_UpdateFirewallPolicyChangeProtectionCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await de_ResourceOwnerCheckExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateLoggingConfigurationCommand
 */
export const de_UpdateLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLoggingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLoggingConfigurationResponse(data, context);
  const response: UpdateLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateLoggingConfigurationCommandError
 */
const de_UpdateLoggingConfigurationCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "LogDestinationPermissionException":
    case "com.amazonaws.networkfirewall#LogDestinationPermissionException":
      throw await de_LogDestinationPermissionExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateRuleGroupCommand
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
 * deserializeAws_json1_0UpdateRuleGroupCommandError
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
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateSubnetChangeProtectionCommand
 */
export const de_UpdateSubnetChangeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetChangeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSubnetChangeProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSubnetChangeProtectionResponse(data, context);
  const response: UpdateSubnetChangeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError
 */
const de_UpdateSubnetChangeProtectionCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await de_ResourceOwnerCheckExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateTLSInspectionConfigurationCommand
 */
export const de_UpdateTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTLSInspectionConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTLSInspectionConfigurationResponse(data, context);
  const response: UpdateTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateTLSInspectionConfigurationCommandError
 */
const de_UpdateTLSInspectionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTLSInspectionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.networkfirewall#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.networkfirewall#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.networkfirewall#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkfirewall#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkfirewall#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0InsufficientCapacityExceptionRes
 */
const de_InsufficientCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientCapacityException(body, context);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOperationException(body, context);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidResourcePolicyExceptionRes
 */
const de_InvalidResourcePolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourcePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourcePolicyException(body, context);
  const exception = new InvalidResourcePolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidTokenExceptionRes
 */
const de_InvalidTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTokenException(body, context);
  const exception = new InvalidTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LogDestinationPermissionExceptionRes
 */
const de_LogDestinationPermissionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LogDestinationPermissionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LogDestinationPermissionException(body, context);
  const exception = new LogDestinationPermissionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceOwnerCheckExceptionRes
 */
const de_ResourceOwnerCheckExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceOwnerCheckException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceOwnerCheckException(body, context);
  const exception = new ResourceOwnerCheckException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0ActionDefinition
 */
const se_ActionDefinition = (input: ActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.PublishMetricAction != null && {
      PublishMetricAction: se_PublishMetricAction(input.PublishMetricAction, context),
    }),
  };
};

/**
 * serializeAws_json1_0Address
 */
const se_Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.AddressDefinition != null && { AddressDefinition: input.AddressDefinition }),
  };
};

/**
 * serializeAws_json1_0Addresses
 */
const se_Addresses = (input: Address[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Address(entry, context);
    });
};

/**
 * serializeAws_json1_0AssociateFirewallPolicyRequest
 */
const se_AssociateFirewallPolicyRequest = (input: AssociateFirewallPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0AssociateSubnetsRequest
 */
const se_AssociateSubnetsRequest = (input: AssociateSubnetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.SubnetMappings != null && { SubnetMappings: se_SubnetMappings(input.SubnetMappings, context) }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0AzSubnets
 */
const se_AzSubnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0CreateFirewallPolicyRequest
 */
const se_CreateFirewallPolicyRequest = (input: CreateFirewallPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallPolicy != null && { FirewallPolicy: se_FirewallPolicy(input.FirewallPolicy, context) }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateFirewallRequest
 */
const se_CreateFirewallRequest = (input: CreateFirewallRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteProtection != null && { DeleteProtection: input.DeleteProtection }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyChangeProtection != null && {
      FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
    }),
    ...(input.SubnetChangeProtection != null && { SubnetChangeProtection: input.SubnetChangeProtection }),
    ...(input.SubnetMappings != null && { SubnetMappings: se_SubnetMappings(input.SubnetMappings, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_0CreateRuleGroupRequest
 */
const se_CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.RuleGroup != null && { RuleGroup: se_RuleGroup(input.RuleGroup, context) }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Rules != null && { Rules: input.Rules }),
    ...(input.SourceMetadata != null && { SourceMetadata: se_SourceMetadata(input.SourceMetadata, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_0CreateTLSInspectionConfigurationRequest
 */
const se_CreateTLSInspectionConfigurationRequest = (
  input: CreateTLSInspectionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.TLSInspectionConfiguration != null && {
      TLSInspectionConfiguration: se_TLSInspectionConfiguration(input.TLSInspectionConfiguration, context),
    }),
    ...(input.TLSInspectionConfigurationName != null && {
      TLSInspectionConfigurationName: input.TLSInspectionConfigurationName,
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CustomAction
 */
const se_CustomAction = (input: CustomAction, context: __SerdeContext): any => {
  return {
    ...(input.ActionDefinition != null && { ActionDefinition: se_ActionDefinition(input.ActionDefinition, context) }),
    ...(input.ActionName != null && { ActionName: input.ActionName }),
  };
};

/**
 * serializeAws_json1_0CustomActions
 */
const se_CustomActions = (input: CustomAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomAction(entry, context);
    });
};

/**
 * serializeAws_json1_0DeleteFirewallPolicyRequest
 */
const se_DeleteFirewallPolicyRequest = (input: DeleteFirewallPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
  };
};

/**
 * serializeAws_json1_0DeleteFirewallRequest
 */
const se_DeleteFirewallRequest = (input: DeleteFirewallRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
  };
};

/**
 * serializeAws_json1_0DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0DeleteRuleGroupRequest
 */
const se_DeleteRuleGroupRequest = (input: DeleteRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_0DeleteTLSInspectionConfigurationRequest
 */
const se_DeleteTLSInspectionConfigurationRequest = (
  input: DeleteTLSInspectionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TLSInspectionConfigurationArn != null && {
      TLSInspectionConfigurationArn: input.TLSInspectionConfigurationArn,
    }),
    ...(input.TLSInspectionConfigurationName != null && {
      TLSInspectionConfigurationName: input.TLSInspectionConfigurationName,
    }),
  };
};

/**
 * serializeAws_json1_0DescribeFirewallPolicyRequest
 */
const se_DescribeFirewallPolicyRequest = (input: DescribeFirewallPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
  };
};

/**
 * serializeAws_json1_0DescribeFirewallRequest
 */
const se_DescribeFirewallRequest = (input: DescribeFirewallRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
  };
};

/**
 * serializeAws_json1_0DescribeLoggingConfigurationRequest
 */
const se_DescribeLoggingConfigurationRequest = (
  input: DescribeLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
  };
};

/**
 * serializeAws_json1_0DescribeResourcePolicyRequest
 */
const se_DescribeResourcePolicyRequest = (input: DescribeResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0DescribeRuleGroupMetadataRequest
 */
const se_DescribeRuleGroupMetadataRequest = (input: DescribeRuleGroupMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_0DescribeRuleGroupRequest
 */
const se_DescribeRuleGroupRequest = (input: DescribeRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_0DescribeTLSInspectionConfigurationRequest
 */
const se_DescribeTLSInspectionConfigurationRequest = (
  input: DescribeTLSInspectionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TLSInspectionConfigurationArn != null && {
      TLSInspectionConfigurationArn: input.TLSInspectionConfigurationArn,
    }),
    ...(input.TLSInspectionConfigurationName != null && {
      TLSInspectionConfigurationName: input.TLSInspectionConfigurationName,
    }),
  };
};

/**
 * serializeAws_json1_0Dimension
 */
const se_Dimension = (input: Dimension, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0Dimensions
 */
const se_Dimensions = (input: Dimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Dimension(entry, context);
    });
};

/**
 * serializeAws_json1_0DisassociateSubnetsRequest
 */
const se_DisassociateSubnetsRequest = (input: DisassociateSubnetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.SubnetIds != null && { SubnetIds: se_AzSubnets(input.SubnetIds, context) }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0EncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_0FirewallPolicy
 */
const se_FirewallPolicy = (input: FirewallPolicy, context: __SerdeContext): any => {
  return {
    ...(input.StatefulDefaultActions != null && {
      StatefulDefaultActions: se_StatefulActions(input.StatefulDefaultActions, context),
    }),
    ...(input.StatefulEngineOptions != null && {
      StatefulEngineOptions: se_StatefulEngineOptions(input.StatefulEngineOptions, context),
    }),
    ...(input.StatefulRuleGroupReferences != null && {
      StatefulRuleGroupReferences: se_StatefulRuleGroupReferences(input.StatefulRuleGroupReferences, context),
    }),
    ...(input.StatelessCustomActions != null && {
      StatelessCustomActions: se_CustomActions(input.StatelessCustomActions, context),
    }),
    ...(input.StatelessDefaultActions != null && {
      StatelessDefaultActions: se_StatelessActions(input.StatelessDefaultActions, context),
    }),
    ...(input.StatelessFragmentDefaultActions != null && {
      StatelessFragmentDefaultActions: se_StatelessActions(input.StatelessFragmentDefaultActions, context),
    }),
    ...(input.StatelessRuleGroupReferences != null && {
      StatelessRuleGroupReferences: se_StatelessRuleGroupReferences(input.StatelessRuleGroupReferences, context),
    }),
    ...(input.TLSInspectionConfigurationArn != null && {
      TLSInspectionConfigurationArn: input.TLSInspectionConfigurationArn,
    }),
  };
};

/**
 * serializeAws_json1_0Flags
 */
const se_Flags = (input: (TCPFlag | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0Header
 */
const se_Header = (input: Header, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.DestinationPort != null && { DestinationPort: input.DestinationPort }),
    ...(input.Direction != null && { Direction: input.Direction }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.SourcePort != null && { SourcePort: input.SourcePort }),
  };
};

/**
 * serializeAws_json1_0IPSet
 */
const se_IPSet = (input: IPSet, context: __SerdeContext): any => {
  return {
    ...(input.Definition != null && { Definition: se_VariableDefinitionList(input.Definition, context) }),
  };
};

/**
 * serializeAws_json1_0IPSetReference
 */
const se_IPSetReference = (input: IPSetReference, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceArn != null && { ReferenceArn: input.ReferenceArn }),
  };
};

/**
 * serializeAws_json1_0IPSetReferenceMap
 */
const se_IPSetReferenceMap = (input: Record<string, IPSetReference>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_IPSetReference(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0IPSets
 */
const se_IPSets = (input: Record<string, IPSet>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_IPSet(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0ListFirewallPoliciesRequest
 */
const se_ListFirewallPoliciesRequest = (input: ListFirewallPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListFirewallsRequest
 */
const se_ListFirewallsRequest = (input: ListFirewallsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.VpcIds != null && { VpcIds: se_VpcIds(input.VpcIds, context) }),
  };
};

/**
 * serializeAws_json1_0ListRuleGroupsRequest
 */
const se_ListRuleGroupsRequest = (input: ListRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ManagedType != null && { ManagedType: input.ManagedType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Scope != null && { Scope: input.Scope }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ListTLSInspectionConfigurationsRequest
 */
const se_ListTLSInspectionConfigurationsRequest = (
  input: ListTLSInspectionConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0LogDestinationConfig
 */
const se_LogDestinationConfig = (input: LogDestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.LogDestination != null && { LogDestination: se_LogDestinationMap(input.LogDestination, context) }),
    ...(input.LogDestinationType != null && { LogDestinationType: input.LogDestinationType }),
    ...(input.LogType != null && { LogType: input.LogType }),
  };
};

/**
 * serializeAws_json1_0LogDestinationConfigs
 */
const se_LogDestinationConfigs = (input: LogDestinationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LogDestinationConfig(entry, context);
    });
};

/**
 * serializeAws_json1_0LogDestinationMap
 */
const se_LogDestinationMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0LoggingConfiguration
 */
const se_LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LogDestinationConfigs != null && {
      LogDestinationConfigs: se_LogDestinationConfigs(input.LogDestinationConfigs, context),
    }),
  };
};

/**
 * serializeAws_json1_0MatchAttributes
 */
const se_MatchAttributes = (input: MatchAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DestinationPorts != null && { DestinationPorts: se_PortRanges(input.DestinationPorts, context) }),
    ...(input.Destinations != null && { Destinations: se_Addresses(input.Destinations, context) }),
    ...(input.Protocols != null && { Protocols: se_ProtocolNumbers(input.Protocols, context) }),
    ...(input.SourcePorts != null && { SourcePorts: se_PortRanges(input.SourcePorts, context) }),
    ...(input.Sources != null && { Sources: se_Addresses(input.Sources, context) }),
    ...(input.TCPFlags != null && { TCPFlags: se_TCPFlags(input.TCPFlags, context) }),
  };
};

/**
 * serializeAws_json1_0PortRange
 */
const se_PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

/**
 * serializeAws_json1_0PortRanges
 */
const se_PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortRange(entry, context);
    });
};

/**
 * serializeAws_json1_0PortSet
 */
const se_PortSet = (input: PortSet, context: __SerdeContext): any => {
  return {
    ...(input.Definition != null && { Definition: se_VariableDefinitionList(input.Definition, context) }),
  };
};

/**
 * serializeAws_json1_0PortSets
 */
const se_PortSets = (input: Record<string, PortSet>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_PortSet(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0ProtocolNumbers
 */
const se_ProtocolNumbers = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0PublishMetricAction
 */
const se_PublishMetricAction = (input: PublishMetricAction, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_Dimensions(input.Dimensions, context) }),
  };
};

/**
 * serializeAws_json1_0PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ReferenceSets
 */
const se_ReferenceSets = (input: ReferenceSets, context: __SerdeContext): any => {
  return {
    ...(input.IPSetReferences != null && { IPSetReferences: se_IPSetReferenceMap(input.IPSetReferences, context) }),
  };
};

/**
 * serializeAws_json1_0RuleDefinition
 */
const se_RuleDefinition = (input: RuleDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: se_StatelessActions(input.Actions, context) }),
    ...(input.MatchAttributes != null && { MatchAttributes: se_MatchAttributes(input.MatchAttributes, context) }),
  };
};

/**
 * serializeAws_json1_0RuleGroup
 */
const se_RuleGroup = (input: RuleGroup, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceSets != null && { ReferenceSets: se_ReferenceSets(input.ReferenceSets, context) }),
    ...(input.RuleVariables != null && { RuleVariables: se_RuleVariables(input.RuleVariables, context) }),
    ...(input.RulesSource != null && { RulesSource: se_RulesSource(input.RulesSource, context) }),
    ...(input.StatefulRuleOptions != null && {
      StatefulRuleOptions: se_StatefulRuleOptions(input.StatefulRuleOptions, context),
    }),
  };
};

/**
 * serializeAws_json1_0RuleOption
 */
const se_RuleOption = (input: RuleOption, context: __SerdeContext): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.Settings != null && { Settings: se_Settings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_0RuleOptions
 */
const se_RuleOptions = (input: RuleOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuleOption(entry, context);
    });
};

/**
 * serializeAws_json1_0RulesSource
 */
const se_RulesSource = (input: RulesSource, context: __SerdeContext): any => {
  return {
    ...(input.RulesSourceList != null && { RulesSourceList: se_RulesSourceList(input.RulesSourceList, context) }),
    ...(input.RulesString != null && { RulesString: input.RulesString }),
    ...(input.StatefulRules != null && { StatefulRules: se_StatefulRules(input.StatefulRules, context) }),
    ...(input.StatelessRulesAndCustomActions != null && {
      StatelessRulesAndCustomActions: se_StatelessRulesAndCustomActions(input.StatelessRulesAndCustomActions, context),
    }),
  };
};

/**
 * serializeAws_json1_0RulesSourceList
 */
const se_RulesSourceList = (input: RulesSourceList, context: __SerdeContext): any => {
  return {
    ...(input.GeneratedRulesType != null && { GeneratedRulesType: input.GeneratedRulesType }),
    ...(input.TargetTypes != null && { TargetTypes: se_TargetTypes(input.TargetTypes, context) }),
    ...(input.Targets != null && { Targets: se_RuleTargets(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_0RuleTargets
 */
const se_RuleTargets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0RuleVariables
 */
const se_RuleVariables = (input: RuleVariables, context: __SerdeContext): any => {
  return {
    ...(input.IPSets != null && { IPSets: se_IPSets(input.IPSets, context) }),
    ...(input.PortSets != null && { PortSets: se_PortSets(input.PortSets, context) }),
  };
};

/**
 * serializeAws_json1_0ServerCertificate
 */
const se_ServerCertificate = (input: ServerCertificate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ServerCertificateConfiguration
 */
const se_ServerCertificateConfiguration = (input: ServerCertificateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Scopes != null && { Scopes: se_ServerCertificateScopes(input.Scopes, context) }),
    ...(input.ServerCertificates != null && {
      ServerCertificates: se_ServerCertificates(input.ServerCertificates, context),
    }),
  };
};

/**
 * serializeAws_json1_0ServerCertificateConfigurations
 */
const se_ServerCertificateConfigurations = (input: ServerCertificateConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerCertificateConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_0ServerCertificates
 */
const se_ServerCertificates = (input: ServerCertificate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerCertificate(entry, context);
    });
};

/**
 * serializeAws_json1_0ServerCertificateScope
 */
const se_ServerCertificateScope = (input: ServerCertificateScope, context: __SerdeContext): any => {
  return {
    ...(input.DestinationPorts != null && { DestinationPorts: se_PortRanges(input.DestinationPorts, context) }),
    ...(input.Destinations != null && { Destinations: se_Addresses(input.Destinations, context) }),
    ...(input.Protocols != null && { Protocols: se_ProtocolNumbers(input.Protocols, context) }),
    ...(input.SourcePorts != null && { SourcePorts: se_PortRanges(input.SourcePorts, context) }),
    ...(input.Sources != null && { Sources: se_Addresses(input.Sources, context) }),
  };
};

/**
 * serializeAws_json1_0ServerCertificateScopes
 */
const se_ServerCertificateScopes = (input: ServerCertificateScope[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerCertificateScope(entry, context);
    });
};

/**
 * serializeAws_json1_0Settings
 */
const se_Settings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0SourceMetadata
 */
const se_SourceMetadata = (input: SourceMetadata, context: __SerdeContext): any => {
  return {
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.SourceUpdateToken != null && { SourceUpdateToken: input.SourceUpdateToken }),
  };
};

/**
 * serializeAws_json1_0StatefulActions
 */
const se_StatefulActions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0StatefulEngineOptions
 */
const se_StatefulEngineOptions = (input: StatefulEngineOptions, context: __SerdeContext): any => {
  return {
    ...(input.RuleOrder != null && { RuleOrder: input.RuleOrder }),
    ...(input.StreamExceptionPolicy != null && { StreamExceptionPolicy: input.StreamExceptionPolicy }),
  };
};

/**
 * serializeAws_json1_0StatefulRule
 */
const se_StatefulRule = (input: StatefulRule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Header != null && { Header: se_Header(input.Header, context) }),
    ...(input.RuleOptions != null && { RuleOptions: se_RuleOptions(input.RuleOptions, context) }),
  };
};

/**
 * serializeAws_json1_0StatefulRuleGroupOverride
 */
const se_StatefulRuleGroupOverride = (input: StatefulRuleGroupOverride, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
  };
};

/**
 * serializeAws_json1_0StatefulRuleGroupReference
 */
const se_StatefulRuleGroupReference = (input: StatefulRuleGroupReference, context: __SerdeContext): any => {
  return {
    ...(input.Override != null && { Override: se_StatefulRuleGroupOverride(input.Override, context) }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0StatefulRuleGroupReferences
 */
const se_StatefulRuleGroupReferences = (input: StatefulRuleGroupReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StatefulRuleGroupReference(entry, context);
    });
};

/**
 * serializeAws_json1_0StatefulRuleOptions
 */
const se_StatefulRuleOptions = (input: StatefulRuleOptions, context: __SerdeContext): any => {
  return {
    ...(input.RuleOrder != null && { RuleOrder: input.RuleOrder }),
  };
};

/**
 * serializeAws_json1_0StatefulRules
 */
const se_StatefulRules = (input: StatefulRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StatefulRule(entry, context);
    });
};

/**
 * serializeAws_json1_0StatelessActions
 */
const se_StatelessActions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0StatelessRule
 */
const se_StatelessRule = (input: StatelessRule, context: __SerdeContext): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleDefinition != null && { RuleDefinition: se_RuleDefinition(input.RuleDefinition, context) }),
  };
};

/**
 * serializeAws_json1_0StatelessRuleGroupReference
 */
const se_StatelessRuleGroupReference = (input: StatelessRuleGroupReference, context: __SerdeContext): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0StatelessRuleGroupReferences
 */
const se_StatelessRuleGroupReferences = (input: StatelessRuleGroupReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StatelessRuleGroupReference(entry, context);
    });
};

/**
 * serializeAws_json1_0StatelessRules
 */
const se_StatelessRules = (input: StatelessRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StatelessRule(entry, context);
    });
};

/**
 * serializeAws_json1_0StatelessRulesAndCustomActions
 */
const se_StatelessRulesAndCustomActions = (input: StatelessRulesAndCustomActions, context: __SerdeContext): any => {
  return {
    ...(input.CustomActions != null && { CustomActions: se_CustomActions(input.CustomActions, context) }),
    ...(input.StatelessRules != null && { StatelessRules: se_StatelessRules(input.StatelessRules, context) }),
  };
};

/**
 * serializeAws_json1_0SubnetMapping
 */
const se_SubnetMapping = (input: SubnetMapping, context: __SerdeContext): any => {
  return {
    ...(input.IPAddressType != null && { IPAddressType: input.IPAddressType }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

/**
 * serializeAws_json1_0SubnetMappings
 */
const se_SubnetMappings = (input: SubnetMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SubnetMapping(entry, context);
    });
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0TargetTypes
 */
const se_TargetTypes = (input: (TargetType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TCPFlagField
 */
const se_TCPFlagField = (input: TCPFlagField, context: __SerdeContext): any => {
  return {
    ...(input.Flags != null && { Flags: se_Flags(input.Flags, context) }),
    ...(input.Masks != null && { Masks: se_Flags(input.Masks, context) }),
  };
};

/**
 * serializeAws_json1_0TCPFlags
 */
const se_TCPFlags = (input: TCPFlagField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TCPFlagField(entry, context);
    });
};

/**
 * serializeAws_json1_0TLSInspectionConfiguration
 */
const se_TLSInspectionConfiguration = (input: TLSInspectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ServerCertificateConfigurations != null && {
      ServerCertificateConfigurations: se_ServerCertificateConfigurations(
        input.ServerCertificateConfigurations,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateFirewallDeleteProtectionRequest
 */
const se_UpdateFirewallDeleteProtectionRequest = (
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

/**
 * serializeAws_json1_0UpdateFirewallDescriptionRequest
 */
const se_UpdateFirewallDescriptionRequest = (input: UpdateFirewallDescriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0UpdateFirewallEncryptionConfigurationRequest
 */
const se_UpdateFirewallEncryptionConfigurationRequest = (
  input: UpdateFirewallEncryptionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest
 */
const se_UpdateFirewallPolicyChangeProtectionRequest = (
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

/**
 * serializeAws_json1_0UpdateFirewallPolicyRequest
 */
const se_UpdateFirewallPolicyRequest = (input: UpdateFirewallPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.FirewallPolicy != null && { FirewallPolicy: se_FirewallPolicy(input.FirewallPolicy, context) }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0UpdateLoggingConfigurationRequest
 */
const se_UpdateLoggingConfigurationRequest = (
  input: UpdateLoggingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.LoggingConfiguration != null && {
      LoggingConfiguration: se_LoggingConfiguration(input.LoggingConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateRuleGroupRequest
 */
const se_UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.RuleGroup != null && { RuleGroup: se_RuleGroup(input.RuleGroup, context) }),
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Rules != null && { Rules: input.Rules }),
    ...(input.SourceMetadata != null && { SourceMetadata: se_SourceMetadata(input.SourceMetadata, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0UpdateSubnetChangeProtectionRequest
 */
const se_UpdateSubnetChangeProtectionRequest = (
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

/**
 * serializeAws_json1_0UpdateTLSInspectionConfigurationRequest
 */
const se_UpdateTLSInspectionConfigurationRequest = (
  input: UpdateTLSInspectionConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.TLSInspectionConfiguration != null && {
      TLSInspectionConfiguration: se_TLSInspectionConfiguration(input.TLSInspectionConfiguration, context),
    }),
    ...(input.TLSInspectionConfigurationArn != null && {
      TLSInspectionConfigurationArn: input.TLSInspectionConfigurationArn,
    }),
    ...(input.TLSInspectionConfigurationName != null && {
      TLSInspectionConfigurationName: input.TLSInspectionConfigurationName,
    }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_0VariableDefinitionList
 */
const se_VariableDefinitionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0VpcIds
 */
const se_VpcIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_0ActionDefinition
 */
const de_ActionDefinition = (output: any, context: __SerdeContext): ActionDefinition => {
  return {
    PublishMetricAction:
      output.PublishMetricAction != null ? de_PublishMetricAction(output.PublishMetricAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Address
 */
const de_Address = (output: any, context: __SerdeContext): Address => {
  return {
    AddressDefinition: __expectString(output.AddressDefinition),
  } as any;
};

/**
 * deserializeAws_json1_0Addresses
 */
const de_Addresses = (output: any, context: __SerdeContext): Address[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Address(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AssociateFirewallPolicyResponse
 */
const de_AssociateFirewallPolicyResponse = (output: any, context: __SerdeContext): AssociateFirewallPolicyResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0AssociateSubnetsResponse
 */
const de_AssociateSubnetsResponse = (output: any, context: __SerdeContext): AssociateSubnetsResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    SubnetMappings: output.SubnetMappings != null ? de_SubnetMappings(output.SubnetMappings, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    EndpointId: __expectString(output.EndpointId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

/**
 * deserializeAws_json1_0CapacityUsageSummary
 */
const de_CapacityUsageSummary = (output: any, context: __SerdeContext): CapacityUsageSummary => {
  return {
    CIDRs: output.CIDRs != null ? de_CIDRSummary(output.CIDRs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Certificates
 */
const de_Certificates = (output: any, context: __SerdeContext): TlsCertificateData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TlsCertificateData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CIDRSummary
 */
const de_CIDRSummary = (output: any, context: __SerdeContext): CIDRSummary => {
  return {
    AvailableCIDRCount: __expectInt32(output.AvailableCIDRCount),
    IPSetReferences: output.IPSetReferences != null ? de_IPSetMetadataMap(output.IPSetReferences, context) : undefined,
    UtilizedCIDRCount: __expectInt32(output.UtilizedCIDRCount),
  } as any;
};

/**
 * deserializeAws_json1_0CreateFirewallPolicyResponse
 */
const de_CreateFirewallPolicyResponse = (output: any, context: __SerdeContext): CreateFirewallPolicyResponse => {
  return {
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? de_FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0CreateFirewallResponse
 */
const de_CreateFirewallResponse = (output: any, context: __SerdeContext): CreateFirewallResponse => {
  return {
    Firewall: output.Firewall != null ? de_Firewall(output.Firewall, context) : undefined,
    FirewallStatus: output.FirewallStatus != null ? de_FirewallStatus(output.FirewallStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateRuleGroupResponse
 */
const de_CreateRuleGroupResponse = (output: any, context: __SerdeContext): CreateRuleGroupResponse => {
  return {
    RuleGroupResponse:
      output.RuleGroupResponse != null ? de_RuleGroupResponse(output.RuleGroupResponse, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0CreateTLSInspectionConfigurationResponse
 */
const de_CreateTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateTLSInspectionConfigurationResponse => {
  return {
    TLSInspectionConfigurationResponse:
      output.TLSInspectionConfigurationResponse != null
        ? de_TLSInspectionConfigurationResponse(output.TLSInspectionConfigurationResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0CustomAction
 */
const de_CustomAction = (output: any, context: __SerdeContext): CustomAction => {
  return {
    ActionDefinition:
      output.ActionDefinition != null ? de_ActionDefinition(output.ActionDefinition, context) : undefined,
    ActionName: __expectString(output.ActionName),
  } as any;
};

/**
 * deserializeAws_json1_0CustomActions
 */
const de_CustomActions = (output: any, context: __SerdeContext): CustomAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DeleteFirewallPolicyResponse
 */
const de_DeleteFirewallPolicyResponse = (output: any, context: __SerdeContext): DeleteFirewallPolicyResponse => {
  return {
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? de_FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteFirewallResponse
 */
const de_DeleteFirewallResponse = (output: any, context: __SerdeContext): DeleteFirewallResponse => {
  return {
    Firewall: output.Firewall != null ? de_Firewall(output.Firewall, context) : undefined,
    FirewallStatus: output.FirewallStatus != null ? de_FirewallStatus(output.FirewallStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteResourcePolicyResponse
 */
const de_DeleteResourcePolicyResponse = (output: any, context: __SerdeContext): DeleteResourcePolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteRuleGroupResponse
 */
const de_DeleteRuleGroupResponse = (output: any, context: __SerdeContext): DeleteRuleGroupResponse => {
  return {
    RuleGroupResponse:
      output.RuleGroupResponse != null ? de_RuleGroupResponse(output.RuleGroupResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteTLSInspectionConfigurationResponse
 */
const de_DeleteTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteTLSInspectionConfigurationResponse => {
  return {
    TLSInspectionConfigurationResponse:
      output.TLSInspectionConfigurationResponse != null
        ? de_TLSInspectionConfigurationResponse(output.TLSInspectionConfigurationResponse, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFirewallPolicyResponse
 */
const de_DescribeFirewallPolicyResponse = (output: any, context: __SerdeContext): DescribeFirewallPolicyResponse => {
  return {
    FirewallPolicy: output.FirewallPolicy != null ? de_FirewallPolicy(output.FirewallPolicy, context) : undefined,
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? de_FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFirewallResponse
 */
const de_DescribeFirewallResponse = (output: any, context: __SerdeContext): DescribeFirewallResponse => {
  return {
    Firewall: output.Firewall != null ? de_Firewall(output.Firewall, context) : undefined,
    FirewallStatus: output.FirewallStatus != null ? de_FirewallStatus(output.FirewallStatus, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeLoggingConfigurationResponse
 */
const de_DescribeLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeLoggingConfigurationResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    LoggingConfiguration:
      output.LoggingConfiguration != null ? de_LoggingConfiguration(output.LoggingConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeResourcePolicyResponse
 */
const de_DescribeResourcePolicyResponse = (output: any, context: __SerdeContext): DescribeResourcePolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeRuleGroupMetadataResponse
 */
const de_DescribeRuleGroupMetadataResponse = (
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
      output.StatefulRuleOptions != null ? de_StatefulRuleOptions(output.StatefulRuleOptions, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeRuleGroupResponse
 */
const de_DescribeRuleGroupResponse = (output: any, context: __SerdeContext): DescribeRuleGroupResponse => {
  return {
    RuleGroup: output.RuleGroup != null ? de_RuleGroup(output.RuleGroup, context) : undefined,
    RuleGroupResponse:
      output.RuleGroupResponse != null ? de_RuleGroupResponse(output.RuleGroupResponse, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeTLSInspectionConfigurationResponse
 */
const de_DescribeTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeTLSInspectionConfigurationResponse => {
  return {
    TLSInspectionConfiguration:
      output.TLSInspectionConfiguration != null
        ? de_TLSInspectionConfiguration(output.TLSInspectionConfiguration, context)
        : undefined,
    TLSInspectionConfigurationResponse:
      output.TLSInspectionConfigurationResponse != null
        ? de_TLSInspectionConfigurationResponse(output.TLSInspectionConfigurationResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0Dimension
 */
const de_Dimension = (output: any, context: __SerdeContext): Dimension => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0Dimensions
 */
const de_Dimensions = (output: any, context: __SerdeContext): Dimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Dimension(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DisassociateSubnetsResponse
 */
const de_DisassociateSubnetsResponse = (output: any, context: __SerdeContext): DisassociateSubnetsResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    SubnetMappings: output.SubnetMappings != null ? de_SubnetMappings(output.SubnetMappings, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0EncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  return {
    KeyId: __expectString(output.KeyId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_0Firewall
 */
const de_Firewall = (output: any, context: __SerdeContext): Firewall => {
  return {
    DeleteProtection: __expectBoolean(output.DeleteProtection),
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    FirewallArn: __expectString(output.FirewallArn),
    FirewallId: __expectString(output.FirewallId),
    FirewallName: __expectString(output.FirewallName),
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    FirewallPolicyChangeProtection: __expectBoolean(output.FirewallPolicyChangeProtection),
    SubnetChangeProtection: __expectBoolean(output.SubnetChangeProtection),
    SubnetMappings: output.SubnetMappings != null ? de_SubnetMappings(output.SubnetMappings, context) : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_0FirewallMetadata
 */
const de_FirewallMetadata = (output: any, context: __SerdeContext): FirewallMetadata => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
  } as any;
};

/**
 * deserializeAws_json1_0FirewallPolicies
 */
const de_FirewallPolicies = (output: any, context: __SerdeContext): FirewallPolicyMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallPolicyMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FirewallPolicy
 */
const de_FirewallPolicy = (output: any, context: __SerdeContext): FirewallPolicy => {
  return {
    StatefulDefaultActions:
      output.StatefulDefaultActions != null ? de_StatefulActions(output.StatefulDefaultActions, context) : undefined,
    StatefulEngineOptions:
      output.StatefulEngineOptions != null
        ? de_StatefulEngineOptions(output.StatefulEngineOptions, context)
        : undefined,
    StatefulRuleGroupReferences:
      output.StatefulRuleGroupReferences != null
        ? de_StatefulRuleGroupReferences(output.StatefulRuleGroupReferences, context)
        : undefined,
    StatelessCustomActions:
      output.StatelessCustomActions != null ? de_CustomActions(output.StatelessCustomActions, context) : undefined,
    StatelessDefaultActions:
      output.StatelessDefaultActions != null ? de_StatelessActions(output.StatelessDefaultActions, context) : undefined,
    StatelessFragmentDefaultActions:
      output.StatelessFragmentDefaultActions != null
        ? de_StatelessActions(output.StatelessFragmentDefaultActions, context)
        : undefined,
    StatelessRuleGroupReferences:
      output.StatelessRuleGroupReferences != null
        ? de_StatelessRuleGroupReferences(output.StatelessRuleGroupReferences, context)
        : undefined,
    TLSInspectionConfigurationArn: __expectString(output.TLSInspectionConfigurationArn),
  } as any;
};

/**
 * deserializeAws_json1_0FirewallPolicyMetadata
 */
const de_FirewallPolicyMetadata = (output: any, context: __SerdeContext): FirewallPolicyMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_0FirewallPolicyResponse
 */
const de_FirewallPolicyResponse = (output: any, context: __SerdeContext): FirewallPolicyResponse => {
  return {
    ConsumedStatefulRuleCapacity: __expectInt32(output.ConsumedStatefulRuleCapacity),
    ConsumedStatelessRuleCapacity: __expectInt32(output.ConsumedStatelessRuleCapacity),
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
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
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Firewalls
 */
const de_Firewalls = (output: any, context: __SerdeContext): FirewallMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FirewallStatus
 */
const de_FirewallStatus = (output: any, context: __SerdeContext): FirewallStatus => {
  return {
    CapacityUsageSummary:
      output.CapacityUsageSummary != null ? de_CapacityUsageSummary(output.CapacityUsageSummary, context) : undefined,
    ConfigurationSyncStateSummary: __expectString(output.ConfigurationSyncStateSummary),
    Status: __expectString(output.Status),
    SyncStates: output.SyncStates != null ? de_SyncStates(output.SyncStates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Flags
 */
const de_Flags = (output: any, context: __SerdeContext): (TCPFlag | string)[] => {
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
 * deserializeAws_json1_0Header
 */
const de_Header = (output: any, context: __SerdeContext): Header => {
  return {
    Destination: __expectString(output.Destination),
    DestinationPort: __expectString(output.DestinationPort),
    Direction: __expectString(output.Direction),
    Protocol: __expectString(output.Protocol),
    Source: __expectString(output.Source),
    SourcePort: __expectString(output.SourcePort),
  } as any;
};

/**
 * deserializeAws_json1_0InsufficientCapacityException
 */
const de_InsufficientCapacityException = (output: any, context: __SerdeContext): InsufficientCapacityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidResourcePolicyException
 */
const de_InvalidResourcePolicyException = (output: any, context: __SerdeContext): InvalidResourcePolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidTokenException
 */
const de_InvalidTokenException = (output: any, context: __SerdeContext): InvalidTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0IPSet
 */
const de_IPSet = (output: any, context: __SerdeContext): IPSet => {
  return {
    Definition: output.Definition != null ? de_VariableDefinitionList(output.Definition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0IPSetMetadata
 */
const de_IPSetMetadata = (output: any, context: __SerdeContext): IPSetMetadata => {
  return {
    ResolvedCIDRCount: __expectInt32(output.ResolvedCIDRCount),
  } as any;
};

/**
 * deserializeAws_json1_0IPSetMetadataMap
 */
const de_IPSetMetadataMap = (output: any, context: __SerdeContext): Record<string, IPSetMetadata> => {
  return Object.entries(output).reduce((acc: Record<string, IPSetMetadata>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_IPSetMetadata(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0IPSetReference
 */
const de_IPSetReference = (output: any, context: __SerdeContext): IPSetReference => {
  return {
    ReferenceArn: __expectString(output.ReferenceArn),
  } as any;
};

/**
 * deserializeAws_json1_0IPSetReferenceMap
 */
const de_IPSetReferenceMap = (output: any, context: __SerdeContext): Record<string, IPSetReference> => {
  return Object.entries(output).reduce((acc: Record<string, IPSetReference>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_IPSetReference(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0IPSets
 */
const de_IPSets = (output: any, context: __SerdeContext): Record<string, IPSet> => {
  return Object.entries(output).reduce((acc: Record<string, IPSet>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_IPSet(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListFirewallPoliciesResponse
 */
const de_ListFirewallPoliciesResponse = (output: any, context: __SerdeContext): ListFirewallPoliciesResponse => {
  return {
    FirewallPolicies:
      output.FirewallPolicies != null ? de_FirewallPolicies(output.FirewallPolicies, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListFirewallsResponse
 */
const de_ListFirewallsResponse = (output: any, context: __SerdeContext): ListFirewallsResponse => {
  return {
    Firewalls: output.Firewalls != null ? de_Firewalls(output.Firewalls, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListRuleGroupsResponse
 */
const de_ListRuleGroupsResponse = (output: any, context: __SerdeContext): ListRuleGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleGroups: output.RuleGroups != null ? de_RuleGroups(output.RuleGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTLSInspectionConfigurationsResponse
 */
const de_ListTLSInspectionConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListTLSInspectionConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TLSInspectionConfigurations:
      output.TLSInspectionConfigurations != null
        ? de_TLSInspectionConfigurations(output.TLSInspectionConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LogDestinationConfig
 */
const de_LogDestinationConfig = (output: any, context: __SerdeContext): LogDestinationConfig => {
  return {
    LogDestination: output.LogDestination != null ? de_LogDestinationMap(output.LogDestination, context) : undefined,
    LogDestinationType: __expectString(output.LogDestinationType),
    LogType: __expectString(output.LogType),
  } as any;
};

/**
 * deserializeAws_json1_0LogDestinationConfigs
 */
const de_LogDestinationConfigs = (output: any, context: __SerdeContext): LogDestinationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogDestinationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LogDestinationMap
 */
const de_LogDestinationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0LogDestinationPermissionException
 */
const de_LogDestinationPermissionException = (
  output: any,
  context: __SerdeContext
): LogDestinationPermissionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0LoggingConfiguration
 */
const de_LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogDestinationConfigs:
      output.LogDestinationConfigs != null
        ? de_LogDestinationConfigs(output.LogDestinationConfigs, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MatchAttributes
 */
const de_MatchAttributes = (output: any, context: __SerdeContext): MatchAttributes => {
  return {
    DestinationPorts: output.DestinationPorts != null ? de_PortRanges(output.DestinationPorts, context) : undefined,
    Destinations: output.Destinations != null ? de_Addresses(output.Destinations, context) : undefined,
    Protocols: output.Protocols != null ? de_ProtocolNumbers(output.Protocols, context) : undefined,
    SourcePorts: output.SourcePorts != null ? de_PortRanges(output.SourcePorts, context) : undefined,
    Sources: output.Sources != null ? de_Addresses(output.Sources, context) : undefined,
    TCPFlags: output.TCPFlags != null ? de_TCPFlags(output.TCPFlags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0PerObjectStatus
 */
const de_PerObjectStatus = (output: any, context: __SerdeContext): PerObjectStatus => {
  return {
    SyncStatus: __expectString(output.SyncStatus),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0PortRange
 */
const de_PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    FromPort: __expectInt32(output.FromPort),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

/**
 * deserializeAws_json1_0PortRanges
 */
const de_PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PortSet
 */
const de_PortSet = (output: any, context: __SerdeContext): PortSet => {
  return {
    Definition: output.Definition != null ? de_VariableDefinitionList(output.Definition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0PortSets
 */
const de_PortSets = (output: any, context: __SerdeContext): Record<string, PortSet> => {
  return Object.entries(output).reduce((acc: Record<string, PortSet>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PortSet(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0ProtocolNumbers
 */
const de_ProtocolNumbers = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_json1_0PublishMetricAction
 */
const de_PublishMetricAction = (output: any, context: __SerdeContext): PublishMetricAction => {
  return {
    Dimensions: output.Dimensions != null ? de_Dimensions(output.Dimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ReferenceSets
 */
const de_ReferenceSets = (output: any, context: __SerdeContext): ReferenceSets => {
  return {
    IPSetReferences: output.IPSetReferences != null ? de_IPSetReferenceMap(output.IPSetReferences, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceOwnerCheckException
 */
const de_ResourceOwnerCheckException = (output: any, context: __SerdeContext): ResourceOwnerCheckException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0RuleDefinition
 */
const de_RuleDefinition = (output: any, context: __SerdeContext): RuleDefinition => {
  return {
    Actions: output.Actions != null ? de_StatelessActions(output.Actions, context) : undefined,
    MatchAttributes: output.MatchAttributes != null ? de_MatchAttributes(output.MatchAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RuleGroup
 */
const de_RuleGroup = (output: any, context: __SerdeContext): RuleGroup => {
  return {
    ReferenceSets: output.ReferenceSets != null ? de_ReferenceSets(output.ReferenceSets, context) : undefined,
    RuleVariables: output.RuleVariables != null ? de_RuleVariables(output.RuleVariables, context) : undefined,
    RulesSource: output.RulesSource != null ? de_RulesSource(output.RulesSource, context) : undefined,
    StatefulRuleOptions:
      output.StatefulRuleOptions != null ? de_StatefulRuleOptions(output.StatefulRuleOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RuleGroupMetadata
 */
const de_RuleGroupMetadata = (output: any, context: __SerdeContext): RuleGroupMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_0RuleGroupResponse
 */
const de_RuleGroupResponse = (output: any, context: __SerdeContext): RuleGroupResponse => {
  return {
    Capacity: __expectInt32(output.Capacity),
    ConsumedCapacity: __expectInt32(output.ConsumedCapacity),
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
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
    SourceMetadata: output.SourceMetadata != null ? de_SourceMetadata(output.SourceMetadata, context) : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_0RuleGroups
 */
const de_RuleGroups = (output: any, context: __SerdeContext): RuleGroupMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleGroupMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RuleOption
 */
const de_RuleOption = (output: any, context: __SerdeContext): RuleOption => {
  return {
    Keyword: __expectString(output.Keyword),
    Settings: output.Settings != null ? de_Settings(output.Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RuleOptions
 */
const de_RuleOptions = (output: any, context: __SerdeContext): RuleOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RuleOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RulesSource
 */
const de_RulesSource = (output: any, context: __SerdeContext): RulesSource => {
  return {
    RulesSourceList: output.RulesSourceList != null ? de_RulesSourceList(output.RulesSourceList, context) : undefined,
    RulesString: __expectString(output.RulesString),
    StatefulRules: output.StatefulRules != null ? de_StatefulRules(output.StatefulRules, context) : undefined,
    StatelessRulesAndCustomActions:
      output.StatelessRulesAndCustomActions != null
        ? de_StatelessRulesAndCustomActions(output.StatelessRulesAndCustomActions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RulesSourceList
 */
const de_RulesSourceList = (output: any, context: __SerdeContext): RulesSourceList => {
  return {
    GeneratedRulesType: __expectString(output.GeneratedRulesType),
    TargetTypes: output.TargetTypes != null ? de_TargetTypes(output.TargetTypes, context) : undefined,
    Targets: output.Targets != null ? de_RuleTargets(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RuleTargets
 */
const de_RuleTargets = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0RuleVariables
 */
const de_RuleVariables = (output: any, context: __SerdeContext): RuleVariables => {
  return {
    IPSets: output.IPSets != null ? de_IPSets(output.IPSets, context) : undefined,
    PortSets: output.PortSets != null ? de_PortSets(output.PortSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ServerCertificate
 */
const de_ServerCertificate = (output: any, context: __SerdeContext): ServerCertificate => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0ServerCertificateConfiguration
 */
const de_ServerCertificateConfiguration = (output: any, context: __SerdeContext): ServerCertificateConfiguration => {
  return {
    Scopes: output.Scopes != null ? de_ServerCertificateScopes(output.Scopes, context) : undefined,
    ServerCertificates:
      output.ServerCertificates != null ? de_ServerCertificates(output.ServerCertificates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ServerCertificateConfigurations
 */
const de_ServerCertificateConfigurations = (output: any, context: __SerdeContext): ServerCertificateConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerCertificateConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServerCertificates
 */
const de_ServerCertificates = (output: any, context: __SerdeContext): ServerCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerCertificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServerCertificateScope
 */
const de_ServerCertificateScope = (output: any, context: __SerdeContext): ServerCertificateScope => {
  return {
    DestinationPorts: output.DestinationPorts != null ? de_PortRanges(output.DestinationPorts, context) : undefined,
    Destinations: output.Destinations != null ? de_Addresses(output.Destinations, context) : undefined,
    Protocols: output.Protocols != null ? de_ProtocolNumbers(output.Protocols, context) : undefined,
    SourcePorts: output.SourcePorts != null ? de_PortRanges(output.SourcePorts, context) : undefined,
    Sources: output.Sources != null ? de_Addresses(output.Sources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ServerCertificateScopes
 */
const de_ServerCertificateScopes = (output: any, context: __SerdeContext): ServerCertificateScope[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerCertificateScope(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Settings
 */
const de_Settings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0SourceMetadata
 */
const de_SourceMetadata = (output: any, context: __SerdeContext): SourceMetadata => {
  return {
    SourceArn: __expectString(output.SourceArn),
    SourceUpdateToken: __expectString(output.SourceUpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0StatefulActions
 */
const de_StatefulActions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0StatefulEngineOptions
 */
const de_StatefulEngineOptions = (output: any, context: __SerdeContext): StatefulEngineOptions => {
  return {
    RuleOrder: __expectString(output.RuleOrder),
    StreamExceptionPolicy: __expectString(output.StreamExceptionPolicy),
  } as any;
};

/**
 * deserializeAws_json1_0StatefulRule
 */
const de_StatefulRule = (output: any, context: __SerdeContext): StatefulRule => {
  return {
    Action: __expectString(output.Action),
    Header: output.Header != null ? de_Header(output.Header, context) : undefined,
    RuleOptions: output.RuleOptions != null ? de_RuleOptions(output.RuleOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StatefulRuleGroupOverride
 */
const de_StatefulRuleGroupOverride = (output: any, context: __SerdeContext): StatefulRuleGroupOverride => {
  return {
    Action: __expectString(output.Action),
  } as any;
};

/**
 * deserializeAws_json1_0StatefulRuleGroupReference
 */
const de_StatefulRuleGroupReference = (output: any, context: __SerdeContext): StatefulRuleGroupReference => {
  return {
    Override: output.Override != null ? de_StatefulRuleGroupOverride(output.Override, context) : undefined,
    Priority: __expectInt32(output.Priority),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0StatefulRuleGroupReferences
 */
const de_StatefulRuleGroupReferences = (output: any, context: __SerdeContext): StatefulRuleGroupReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatefulRuleGroupReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StatefulRuleOptions
 */
const de_StatefulRuleOptions = (output: any, context: __SerdeContext): StatefulRuleOptions => {
  return {
    RuleOrder: __expectString(output.RuleOrder),
  } as any;
};

/**
 * deserializeAws_json1_0StatefulRules
 */
const de_StatefulRules = (output: any, context: __SerdeContext): StatefulRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatefulRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StatelessActions
 */
const de_StatelessActions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0StatelessRule
 */
const de_StatelessRule = (output: any, context: __SerdeContext): StatelessRule => {
  return {
    Priority: __expectInt32(output.Priority),
    RuleDefinition: output.RuleDefinition != null ? de_RuleDefinition(output.RuleDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StatelessRuleGroupReference
 */
const de_StatelessRuleGroupReference = (output: any, context: __SerdeContext): StatelessRuleGroupReference => {
  return {
    Priority: __expectInt32(output.Priority),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0StatelessRuleGroupReferences
 */
const de_StatelessRuleGroupReferences = (output: any, context: __SerdeContext): StatelessRuleGroupReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatelessRuleGroupReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StatelessRules
 */
const de_StatelessRules = (output: any, context: __SerdeContext): StatelessRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatelessRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StatelessRulesAndCustomActions
 */
const de_StatelessRulesAndCustomActions = (output: any, context: __SerdeContext): StatelessRulesAndCustomActions => {
  return {
    CustomActions: output.CustomActions != null ? de_CustomActions(output.CustomActions, context) : undefined,
    StatelessRules: output.StatelessRules != null ? de_StatelessRules(output.StatelessRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0SubnetMapping
 */
const de_SubnetMapping = (output: any, context: __SerdeContext): SubnetMapping => {
  return {
    IPAddressType: __expectString(output.IPAddressType),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

/**
 * deserializeAws_json1_0SubnetMappings
 */
const de_SubnetMappings = (output: any, context: __SerdeContext): SubnetMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubnetMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SyncState
 */
const de_SyncState = (output: any, context: __SerdeContext): SyncState => {
  return {
    Attachment: output.Attachment != null ? de_Attachment(output.Attachment, context) : undefined,
    Config: output.Config != null ? de_SyncStateConfig(output.Config, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0SyncStateConfig
 */
const de_SyncStateConfig = (output: any, context: __SerdeContext): Record<string, PerObjectStatus> => {
  return Object.entries(output).reduce((acc: Record<string, PerObjectStatus>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PerObjectStatus(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0SyncStates
 */
const de_SyncStates = (output: any, context: __SerdeContext): Record<string, SyncState> => {
  return Object.entries(output).reduce((acc: Record<string, SyncState>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SyncState(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0TargetTypes
 */
const de_TargetTypes = (output: any, context: __SerdeContext): (TargetType | string)[] => {
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
 * deserializeAws_json1_0TCPFlagField
 */
const de_TCPFlagField = (output: any, context: __SerdeContext): TCPFlagField => {
  return {
    Flags: output.Flags != null ? de_Flags(output.Flags, context) : undefined,
    Masks: output.Masks != null ? de_Flags(output.Masks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0TCPFlags
 */
const de_TCPFlags = (output: any, context: __SerdeContext): TCPFlagField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TCPFlagField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0TlsCertificateData
 */
const de_TlsCertificateData = (output: any, context: __SerdeContext): TlsCertificateData => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CertificateSerial: __expectString(output.CertificateSerial),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_0TLSInspectionConfiguration
 */
const de_TLSInspectionConfiguration = (output: any, context: __SerdeContext): TLSInspectionConfiguration => {
  return {
    ServerCertificateConfigurations:
      output.ServerCertificateConfigurations != null
        ? de_ServerCertificateConfigurations(output.ServerCertificateConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0TLSInspectionConfigurationMetadata
 */
const de_TLSInspectionConfigurationMetadata = (
  output: any,
  context: __SerdeContext
): TLSInspectionConfigurationMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_0TLSInspectionConfigurationResponse
 */
const de_TLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): TLSInspectionConfigurationResponse => {
  return {
    Certificates: output.Certificates != null ? de_Certificates(output.Certificates, context) : undefined,
    Description: __expectString(output.Description),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    NumberOfAssociations: __expectInt32(output.NumberOfAssociations),
    TLSInspectionConfigurationArn: __expectString(output.TLSInspectionConfigurationArn),
    TLSInspectionConfigurationId: __expectString(output.TLSInspectionConfigurationId),
    TLSInspectionConfigurationName: __expectString(output.TLSInspectionConfigurationName),
    TLSInspectionConfigurationStatus: __expectString(output.TLSInspectionConfigurationStatus),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0TLSInspectionConfigurations
 */
const de_TLSInspectionConfigurations = (output: any, context: __SerdeContext): TLSInspectionConfigurationMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TLSInspectionConfigurationMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse
 */
const de_UpdateFirewallDeleteProtectionResponse = (
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

/**
 * deserializeAws_json1_0UpdateFirewallDescriptionResponse
 */
const de_UpdateFirewallDescriptionResponse = (
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

/**
 * deserializeAws_json1_0UpdateFirewallEncryptionConfigurationResponse
 */
const de_UpdateFirewallEncryptionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallEncryptionConfigurationResponse => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse
 */
const de_UpdateFirewallPolicyChangeProtectionResponse = (
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

/**
 * deserializeAws_json1_0UpdateFirewallPolicyResponse
 */
const de_UpdateFirewallPolicyResponse = (output: any, context: __SerdeContext): UpdateFirewallPolicyResponse => {
  return {
    FirewallPolicyResponse:
      output.FirewallPolicyResponse != null
        ? de_FirewallPolicyResponse(output.FirewallPolicyResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateLoggingConfigurationResponse
 */
const de_UpdateLoggingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateLoggingConfigurationResponse => {
  return {
    FirewallArn: __expectString(output.FirewallArn),
    FirewallName: __expectString(output.FirewallName),
    LoggingConfiguration:
      output.LoggingConfiguration != null ? de_LoggingConfiguration(output.LoggingConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateRuleGroupResponse
 */
const de_UpdateRuleGroupResponse = (output: any, context: __SerdeContext): UpdateRuleGroupResponse => {
  return {
    RuleGroupResponse:
      output.RuleGroupResponse != null ? de_RuleGroupResponse(output.RuleGroupResponse, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateSubnetChangeProtectionResponse
 */
const de_UpdateSubnetChangeProtectionResponse = (
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

/**
 * deserializeAws_json1_0UpdateTLSInspectionConfigurationResponse
 */
const de_UpdateTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateTLSInspectionConfigurationResponse => {
  return {
    TLSInspectionConfigurationResponse:
      output.TLSInspectionConfigurationResponse != null
        ? de_TLSInspectionConfigurationResponse(output.TLSInspectionConfigurationResponse, context)
        : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_0VariableDefinitionList
 */
const de_VariableDefinitionList = (output: any, context: __SerdeContext): string[] => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `NetworkFirewall_20201112.${operation}`,
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
