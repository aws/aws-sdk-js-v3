// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
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
  GetAnalysisReportResultsCommandInput,
  GetAnalysisReportResultsCommandOutput,
} from "../commands/GetAnalysisReportResultsCommand";
import {
  ListAnalysisReportsCommandInput,
  ListAnalysisReportsCommandOutput,
} from "../commands/ListAnalysisReportsCommand";
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
import {
  StartAnalysisReportCommandInput,
  StartAnalysisReportCommandOutput,
} from "../commands/StartAnalysisReportCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateFirewallAnalysisSettingsCommandInput,
  UpdateFirewallAnalysisSettingsCommandOutput,
} from "../commands/UpdateFirewallAnalysisSettingsCommand";
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
  AnalysisReport,
  AnalysisTypeReportResult,
  AssociateFirewallPolicyRequest,
  AssociateSubnetsRequest,
  CheckCertificateRevocationStatusActions,
  CreateFirewallPolicyRequest,
  CreateFirewallPolicyResponse,
  CreateFirewallRequest,
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CreateTLSInspectionConfigurationRequest,
  CreateTLSInspectionConfigurationResponse,
  CustomAction,
  DeleteFirewallPolicyRequest,
  DeleteFirewallPolicyResponse,
  DeleteFirewallRequest,
  DeleteResourcePolicyRequest,
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteTLSInspectionConfigurationRequest,
  DeleteTLSInspectionConfigurationResponse,
  DescribeFirewallPolicyRequest,
  DescribeFirewallPolicyResponse,
  DescribeFirewallRequest,
  DescribeLoggingConfigurationRequest,
  DescribeResourcePolicyRequest,
  DescribeRuleGroupMetadataRequest,
  DescribeRuleGroupMetadataResponse,
  DescribeRuleGroupRequest,
  DescribeRuleGroupResponse,
  DescribeTLSInspectionConfigurationRequest,
  DescribeTLSInspectionConfigurationResponse,
  Dimension,
  DisassociateSubnetsRequest,
  EnabledAnalysisType,
  EncryptionConfiguration,
  FirewallPolicy,
  FirewallPolicyResponse,
  FlowTimeouts,
  GetAnalysisReportResultsRequest,
  GetAnalysisReportResultsResponse,
  Header,
  InsufficientCapacityException,
  InternalServerError,
  InvalidOperationException,
  InvalidRequestException,
  InvalidResourcePolicyException,
  InvalidTokenException,
  IPSet,
  IPSetReference,
  LimitExceededException,
  ListAnalysisReportsRequest,
  ListAnalysisReportsResponse,
  ListFirewallPoliciesRequest,
  ListFirewallsRequest,
  ListRuleGroupsRequest,
  ListTagsForResourceRequest,
  ListTLSInspectionConfigurationsRequest,
  LogDestinationConfig,
  LogDestinationPermissionException,
  LoggingConfiguration,
  MatchAttributes,
  PolicyVariables,
  PortRange,
  PortSet,
  PublishMetricAction,
  PutResourcePolicyRequest,
  ReferenceSets,
  ResourceNotFoundException,
  ResourceOwnerCheckException,
  RuleDefinition,
  RuleGroup,
  RuleGroupResponse,
  RuleOption,
  RulesSource,
  RulesSourceList,
  RuleVariables,
  ServerCertificate,
  ServerCertificateConfiguration,
  ServerCertificateScope,
  SourceMetadata,
  StartAnalysisReportRequest,
  StatefulEngineOptions,
  StatefulRule,
  StatefulRuleGroupOverride,
  StatefulRuleGroupReference,
  StatefulRuleOptions,
  StatelessRule,
  StatelessRuleGroupReference,
  StatelessRulesAndCustomActions,
  SubnetMapping,
  Tag,
  TagResourceRequest,
  TargetType,
  TCPFlag,
  TCPFlagField,
  ThrottlingException,
  TLSInspectionConfiguration,
  TLSInspectionConfigurationResponse,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateFirewallAnalysisSettingsRequest,
  UpdateFirewallDeleteProtectionRequest,
  UpdateFirewallDescriptionRequest,
  UpdateFirewallEncryptionConfigurationRequest,
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyRequest,
  UpdateFirewallPolicyResponse,
  UpdateLoggingConfigurationRequest,
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateSubnetChangeProtectionRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAnalysisReportResultsCommand
 */
export const se_GetAnalysisReportResultsCommand = async (
  input: GetAnalysisReportResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAnalysisReportResults");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAnalysisReportsCommand
 */
export const se_ListAnalysisReportsCommand = async (
  input: ListAnalysisReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAnalysisReports");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartAnalysisReportCommand
 */
export const se_StartAnalysisReportCommand = async (
  input: StartAnalysisReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAnalysisReport");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateFirewallAnalysisSettingsCommand
 */
export const se_UpdateFirewallAnalysisSettingsCommand = async (
  input: UpdateFirewallAnalysisSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallAnalysisSettings");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0AssociateSubnetsCommand
 */
export const de_AssociateSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateFirewallCommand
 */
export const de_CreateFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateFirewallPolicyCommand
 */
export const de_CreateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFirewallPolicyResponse(data, context);
  const response: CreateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRuleGroupCommand
 */
export const de_CreateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRuleGroupResponse(data, context);
  const response: CreateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateTLSInspectionConfigurationCommand
 */
export const de_CreateTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTLSInspectionConfigurationResponse(data, context);
  const response: CreateTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteFirewallCommand
 */
export const de_DeleteFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteFirewallPolicyCommand
 */
export const de_DeleteFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallPolicyResponse(data, context);
  const response: DeleteFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRuleGroupCommand
 */
export const de_DeleteRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRuleGroupResponse(data, context);
  const response: DeleteRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTLSInspectionConfigurationCommand
 */
export const de_DeleteTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTLSInspectionConfigurationResponse(data, context);
  const response: DeleteTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeFirewallCommand
 */
export const de_DescribeFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeFirewallPolicyCommand
 */
export const de_DescribeFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFirewallPolicyResponse(data, context);
  const response: DescribeFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeLoggingConfigurationCommand
 */
export const de_DescribeLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeResourcePolicyCommand
 */
export const de_DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRuleGroupCommand
 */
export const de_DescribeRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRuleGroupResponse(data, context);
  const response: DescribeRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRuleGroupMetadataCommand
 */
export const de_DescribeRuleGroupMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleGroupMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRuleGroupMetadataResponse(data, context);
  const response: DescribeRuleGroupMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeTLSInspectionConfigurationCommand
 */
export const de_DescribeTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTLSInspectionConfigurationResponse(data, context);
  const response: DescribeTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateSubnetsCommand
 */
export const de_DisassociateSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAnalysisReportResultsCommand
 */
export const de_GetAnalysisReportResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalysisReportResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAnalysisReportResultsResponse(data, context);
  const response: GetAnalysisReportResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAnalysisReportsCommand
 */
export const de_ListAnalysisReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysisReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAnalysisReportsResponse(data, context);
  const response: ListAnalysisReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListFirewallPoliciesCommand
 */
export const de_ListFirewallPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListFirewallsCommand
 */
export const de_ListFirewallsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRuleGroupsCommand
 */
export const de_ListRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0ListTLSInspectionConfigurationsCommand
 */
export const de_ListTLSInspectionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTLSInspectionConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTLSInspectionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartAnalysisReportCommand
 */
export const de_StartAnalysisReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAnalysisReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartAnalysisReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdateFirewallAnalysisSettingsCommand
 */
export const de_UpdateFirewallAnalysisSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallAnalysisSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallAnalysisSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand
 */
export const de_UpdateFirewallDeleteProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDeleteProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallDeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateFirewallDescriptionCommand
 */
export const de_UpdateFirewallDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand
 */
export const de_UpdateFirewallEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallEncryptionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateFirewallPolicyCommand
 */
export const de_UpdateFirewallPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallPolicyResponse(data, context);
  const response: UpdateFirewallPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand
 */
export const de_UpdateFirewallPolicyChangeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallPolicyChangeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateLoggingConfigurationCommand
 */
export const de_UpdateLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoggingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLoggingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateRuleGroupCommand
 */
export const de_UpdateRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRuleGroupResponse(data, context);
  const response: UpdateRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateSubnetChangeProtectionCommand
 */
export const de_UpdateSubnetChangeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetChangeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSubnetChangeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateTLSInspectionConfigurationCommand
 */
export const de_UpdateTLSInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTLSInspectionConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTLSInspectionConfigurationResponse(data, context);
  const response: UpdateTLSInspectionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InsufficientCapacityException":
    case "com.amazonaws.networkfirewall#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.networkfirewall#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.networkfirewall#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.networkfirewall#InvalidResourcePolicyException":
      throw await de_InvalidResourcePolicyExceptionRes(parsedOutput, context);
    case "ResourceOwnerCheckException":
    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
      throw await de_ResourceOwnerCheckExceptionRes(parsedOutput, context);
    case "LogDestinationPermissionException":
    case "com.amazonaws.networkfirewall#LogDestinationPermissionException":
      throw await de_LogDestinationPermissionExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionDefinition omitted.

// se_Address omitted.

// se_Addresses omitted.

// se_AssociateFirewallPolicyRequest omitted.

// se_AssociateSubnetsRequest omitted.

// se_AzSubnets omitted.

// se_CheckCertificateRevocationStatusActions omitted.

// se_CreateFirewallPolicyRequest omitted.

// se_CreateFirewallRequest omitted.

/**
 * serializeAws_json1_0CreateRuleGroupRequest
 */
const se_CreateRuleGroupRequest = (input: CreateRuleGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    AnalyzeRuleGroup: [],
    Capacity: [],
    Description: [],
    DryRun: [],
    EncryptionConfiguration: _json,
    RuleGroup: _json,
    RuleGroupName: [],
    Rules: [],
    SourceMetadata: _json,
    Tags: _json,
    Type: [],
  });
};

// se_CreateTLSInspectionConfigurationRequest omitted.

// se_CustomAction omitted.

// se_CustomActions omitted.

// se_DeleteFirewallPolicyRequest omitted.

// se_DeleteFirewallRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteRuleGroupRequest omitted.

// se_DeleteTLSInspectionConfigurationRequest omitted.

// se_DescribeFirewallPolicyRequest omitted.

// se_DescribeFirewallRequest omitted.

// se_DescribeLoggingConfigurationRequest omitted.

// se_DescribeResourcePolicyRequest omitted.

// se_DescribeRuleGroupMetadataRequest omitted.

// se_DescribeRuleGroupRequest omitted.

// se_DescribeTLSInspectionConfigurationRequest omitted.

// se_Dimension omitted.

// se_Dimensions omitted.

// se_DisassociateSubnetsRequest omitted.

// se_EnabledAnalysisTypes omitted.

// se_EncryptionConfiguration omitted.

// se_FirewallPolicy omitted.

// se_Flags omitted.

// se_FlowTimeouts omitted.

// se_GetAnalysisReportResultsRequest omitted.

// se_Header omitted.

// se_IPSet omitted.

// se_IPSetReference omitted.

// se_IPSetReferenceMap omitted.

// se_IPSets omitted.

// se_ListAnalysisReportsRequest omitted.

// se_ListFirewallPoliciesRequest omitted.

// se_ListFirewallsRequest omitted.

// se_ListRuleGroupsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTLSInspectionConfigurationsRequest omitted.

// se_LogDestinationConfig omitted.

// se_LogDestinationConfigs omitted.

// se_LogDestinationMap omitted.

// se_LoggingConfiguration omitted.

// se_MatchAttributes omitted.

// se_PolicyVariables omitted.

// se_PortRange omitted.

// se_PortRanges omitted.

// se_PortSet omitted.

// se_PortSets omitted.

// se_ProtocolNumbers omitted.

// se_PublishMetricAction omitted.

// se_PutResourcePolicyRequest omitted.

// se_ReferenceSets omitted.

// se_RuleDefinition omitted.

// se_RuleGroup omitted.

// se_RuleOption omitted.

// se_RuleOptions omitted.

// se_RulesSource omitted.

// se_RulesSourceList omitted.

// se_RuleTargets omitted.

// se_RuleVariables omitted.

// se_ServerCertificate omitted.

// se_ServerCertificateConfiguration omitted.

// se_ServerCertificateConfigurations omitted.

// se_ServerCertificates omitted.

// se_ServerCertificateScope omitted.

// se_ServerCertificateScopes omitted.

// se_Settings omitted.

// se_SourceMetadata omitted.

// se_StartAnalysisReportRequest omitted.

// se_StatefulActions omitted.

// se_StatefulEngineOptions omitted.

// se_StatefulRule omitted.

// se_StatefulRuleGroupOverride omitted.

// se_StatefulRuleGroupReference omitted.

// se_StatefulRuleGroupReferences omitted.

// se_StatefulRuleOptions omitted.

// se_StatefulRules omitted.

// se_StatelessActions omitted.

// se_StatelessRule omitted.

// se_StatelessRuleGroupReference omitted.

// se_StatelessRuleGroupReferences omitted.

// se_StatelessRules omitted.

// se_StatelessRulesAndCustomActions omitted.

// se_SubnetMapping omitted.

// se_SubnetMappings omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TargetTypes omitted.

// se_TCPFlagField omitted.

// se_TCPFlags omitted.

// se_TLSInspectionConfiguration omitted.

// se_UntagResourceRequest omitted.

// se_UpdateFirewallAnalysisSettingsRequest omitted.

// se_UpdateFirewallDeleteProtectionRequest omitted.

// se_UpdateFirewallDescriptionRequest omitted.

// se_UpdateFirewallEncryptionConfigurationRequest omitted.

// se_UpdateFirewallPolicyChangeProtectionRequest omitted.

// se_UpdateFirewallPolicyRequest omitted.

// se_UpdateLoggingConfigurationRequest omitted.

/**
 * serializeAws_json1_0UpdateRuleGroupRequest
 */
const se_UpdateRuleGroupRequest = (input: UpdateRuleGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    AnalyzeRuleGroup: [],
    Description: [],
    DryRun: [],
    EncryptionConfiguration: _json,
    RuleGroup: _json,
    RuleGroupArn: [],
    RuleGroupName: [],
    Rules: [],
    SourceMetadata: _json,
    Type: [],
    UpdateToken: [],
  });
};

// se_UpdateSubnetChangeProtectionRequest omitted.

// se_UpdateTLSInspectionConfigurationRequest omitted.

// se_VariableDefinitionList omitted.

// se_VpcIds omitted.

// de_ActionDefinition omitted.

// de_Address omitted.

// de_Addresses omitted.

/**
 * deserializeAws_json1_0AnalysisReport
 */
const de_AnalysisReport = (output: any, context: __SerdeContext): AnalysisReport => {
  return take(output, {
    AnalysisReportId: __expectString,
    AnalysisType: __expectString,
    ReportTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0AnalysisReportResults
 */
const de_AnalysisReportResults = (output: any, context: __SerdeContext): AnalysisTypeReportResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisTypeReportResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AnalysisReports
 */
const de_AnalysisReports = (output: any, context: __SerdeContext): AnalysisReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisReport(entry, context);
    });
  return retVal;
};

// de_AnalysisResult omitted.

// de_AnalysisResultList omitted.

/**
 * deserializeAws_json1_0AnalysisTypeReportResult
 */
const de_AnalysisTypeReportResult = (output: any, context: __SerdeContext): AnalysisTypeReportResult => {
  return take(output, {
    Domain: __expectString,
    FirstAccessed: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Hits: _json,
    LastAccessed: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Protocol: __expectString,
    UniqueSources: _json,
  }) as any;
};

// de_AssociateFirewallPolicyResponse omitted.

// de_AssociateSubnetsResponse omitted.

// de_Attachment omitted.

// de_CapacityUsageSummary omitted.

// de_Certificates omitted.

// de_CheckCertificateRevocationStatusActions omitted.

// de_CIDRSummary omitted.

/**
 * deserializeAws_json1_0CreateFirewallPolicyResponse
 */
const de_CreateFirewallPolicyResponse = (output: any, context: __SerdeContext): CreateFirewallPolicyResponse => {
  return take(output, {
    FirewallPolicyResponse: (_: any) => de_FirewallPolicyResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_CreateFirewallResponse omitted.

/**
 * deserializeAws_json1_0CreateRuleGroupResponse
 */
const de_CreateRuleGroupResponse = (output: any, context: __SerdeContext): CreateRuleGroupResponse => {
  return take(output, {
    RuleGroupResponse: (_: any) => de_RuleGroupResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateTLSInspectionConfigurationResponse
 */
const de_CreateTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateTLSInspectionConfigurationResponse => {
  return take(output, {
    TLSInspectionConfigurationResponse: (_: any) => de_TLSInspectionConfigurationResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_CustomAction omitted.

// de_CustomActions omitted.

/**
 * deserializeAws_json1_0DeleteFirewallPolicyResponse
 */
const de_DeleteFirewallPolicyResponse = (output: any, context: __SerdeContext): DeleteFirewallPolicyResponse => {
  return take(output, {
    FirewallPolicyResponse: (_: any) => de_FirewallPolicyResponse(_, context),
  }) as any;
};

// de_DeleteFirewallResponse omitted.

// de_DeleteResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_0DeleteRuleGroupResponse
 */
const de_DeleteRuleGroupResponse = (output: any, context: __SerdeContext): DeleteRuleGroupResponse => {
  return take(output, {
    RuleGroupResponse: (_: any) => de_RuleGroupResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteTLSInspectionConfigurationResponse
 */
const de_DeleteTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteTLSInspectionConfigurationResponse => {
  return take(output, {
    TLSInspectionConfigurationResponse: (_: any) => de_TLSInspectionConfigurationResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeFirewallPolicyResponse
 */
const de_DescribeFirewallPolicyResponse = (output: any, context: __SerdeContext): DescribeFirewallPolicyResponse => {
  return take(output, {
    FirewallPolicy: _json,
    FirewallPolicyResponse: (_: any) => de_FirewallPolicyResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_DescribeFirewallResponse omitted.

// de_DescribeLoggingConfigurationResponse omitted.

// de_DescribeResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_0DescribeRuleGroupMetadataResponse
 */
const de_DescribeRuleGroupMetadataResponse = (
  output: any,
  context: __SerdeContext
): DescribeRuleGroupMetadataResponse => {
  return take(output, {
    Capacity: __expectInt32,
    Description: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleGroupArn: __expectString,
    RuleGroupName: __expectString,
    StatefulRuleOptions: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeRuleGroupResponse
 */
const de_DescribeRuleGroupResponse = (output: any, context: __SerdeContext): DescribeRuleGroupResponse => {
  return take(output, {
    RuleGroup: _json,
    RuleGroupResponse: (_: any) => de_RuleGroupResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeTLSInspectionConfigurationResponse
 */
const de_DescribeTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeTLSInspectionConfigurationResponse => {
  return take(output, {
    TLSInspectionConfiguration: _json,
    TLSInspectionConfigurationResponse: (_: any) => de_TLSInspectionConfigurationResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_Dimension omitted.

// de_Dimensions omitted.

// de_DisassociateSubnetsResponse omitted.

// de_EnabledAnalysisTypes omitted.

// de_EncryptionConfiguration omitted.

// de_Firewall omitted.

// de_FirewallMetadata omitted.

// de_FirewallPolicies omitted.

// de_FirewallPolicy omitted.

// de_FirewallPolicyMetadata omitted.

/**
 * deserializeAws_json1_0FirewallPolicyResponse
 */
const de_FirewallPolicyResponse = (output: any, context: __SerdeContext): FirewallPolicyResponse => {
  return take(output, {
    ConsumedStatefulRuleCapacity: __expectInt32,
    ConsumedStatelessRuleCapacity: __expectInt32,
    Description: __expectString,
    EncryptionConfiguration: _json,
    FirewallPolicyArn: __expectString,
    FirewallPolicyId: __expectString,
    FirewallPolicyName: __expectString,
    FirewallPolicyStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfAssociations: __expectInt32,
    Tags: _json,
  }) as any;
};

// de_Firewalls omitted.

// de_FirewallStatus omitted.

// de_Flags omitted.

// de_FlowTimeouts omitted.

/**
 * deserializeAws_json1_0GetAnalysisReportResultsResponse
 */
const de_GetAnalysisReportResultsResponse = (
  output: any,
  context: __SerdeContext
): GetAnalysisReportResultsResponse => {
  return take(output, {
    AnalysisReportResults: (_: any) => de_AnalysisReportResults(_, context),
    AnalysisType: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    ReportTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_Header omitted.

// de_Hits omitted.

// de_InsufficientCapacityException omitted.

// de_InternalServerError omitted.

// de_InvalidOperationException omitted.

// de_InvalidRequestException omitted.

// de_InvalidResourcePolicyException omitted.

// de_InvalidTokenException omitted.

// de_IPSet omitted.

// de_IPSetMetadata omitted.

// de_IPSetMetadataMap omitted.

// de_IPSetReference omitted.

// de_IPSetReferenceMap omitted.

// de_IPSets omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_0ListAnalysisReportsResponse
 */
const de_ListAnalysisReportsResponse = (output: any, context: __SerdeContext): ListAnalysisReportsResponse => {
  return take(output, {
    AnalysisReports: (_: any) => de_AnalysisReports(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListFirewallPoliciesResponse omitted.

// de_ListFirewallsResponse omitted.

// de_ListRuleGroupsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTLSInspectionConfigurationsResponse omitted.

// de_LogDestinationConfig omitted.

// de_LogDestinationConfigs omitted.

// de_LogDestinationMap omitted.

// de_LogDestinationPermissionException omitted.

// de_LoggingConfiguration omitted.

// de_MatchAttributes omitted.

// de_PerObjectStatus omitted.

// de_PolicyVariables omitted.

// de_PortRange omitted.

// de_PortRanges omitted.

// de_PortSet omitted.

// de_PortSets omitted.

// de_ProtocolNumbers omitted.

// de_PublishMetricAction omitted.

// de_PutResourcePolicyResponse omitted.

// de_ReferenceSets omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceOwnerCheckException omitted.

// de_RuleDefinition omitted.

// de_RuleGroup omitted.

// de_RuleGroupMetadata omitted.

/**
 * deserializeAws_json1_0RuleGroupResponse
 */
const de_RuleGroupResponse = (output: any, context: __SerdeContext): RuleGroupResponse => {
  return take(output, {
    AnalysisResults: _json,
    Capacity: __expectInt32,
    ConsumedCapacity: __expectInt32,
    Description: __expectString,
    EncryptionConfiguration: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfAssociations: __expectInt32,
    RuleGroupArn: __expectString,
    RuleGroupId: __expectString,
    RuleGroupName: __expectString,
    RuleGroupStatus: __expectString,
    SnsTopic: __expectString,
    SourceMetadata: _json,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

// de_RuleGroups omitted.

// de_RuleIdList omitted.

// de_RuleOption omitted.

// de_RuleOptions omitted.

// de_RulesSource omitted.

// de_RulesSourceList omitted.

// de_RuleTargets omitted.

// de_RuleVariables omitted.

// de_ServerCertificate omitted.

// de_ServerCertificateConfiguration omitted.

// de_ServerCertificateConfigurations omitted.

// de_ServerCertificates omitted.

// de_ServerCertificateScope omitted.

// de_ServerCertificateScopes omitted.

// de_Settings omitted.

// de_SourceMetadata omitted.

// de_StartAnalysisReportResponse omitted.

// de_StatefulActions omitted.

// de_StatefulEngineOptions omitted.

// de_StatefulRule omitted.

// de_StatefulRuleGroupOverride omitted.

// de_StatefulRuleGroupReference omitted.

// de_StatefulRuleGroupReferences omitted.

// de_StatefulRuleOptions omitted.

// de_StatefulRules omitted.

// de_StatelessActions omitted.

// de_StatelessRule omitted.

// de_StatelessRuleGroupReference omitted.

// de_StatelessRuleGroupReferences omitted.

// de_StatelessRules omitted.

// de_StatelessRulesAndCustomActions omitted.

// de_SubnetMapping omitted.

// de_SubnetMappings omitted.

// de_SyncState omitted.

// de_SyncStateConfig omitted.

// de_SyncStates omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetTypes omitted.

// de_TCPFlagField omitted.

// de_TCPFlags omitted.

// de_ThrottlingException omitted.

// de_TlsCertificateData omitted.

// de_TLSInspectionConfiguration omitted.

// de_TLSInspectionConfigurationMetadata omitted.

/**
 * deserializeAws_json1_0TLSInspectionConfigurationResponse
 */
const de_TLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): TLSInspectionConfigurationResponse => {
  return take(output, {
    CertificateAuthority: _json,
    Certificates: _json,
    Description: __expectString,
    EncryptionConfiguration: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfAssociations: __expectInt32,
    TLSInspectionConfigurationArn: __expectString,
    TLSInspectionConfigurationId: __expectString,
    TLSInspectionConfigurationName: __expectString,
    TLSInspectionConfigurationStatus: __expectString,
    Tags: _json,
  }) as any;
};

// de_TLSInspectionConfigurations omitted.

// de_UniqueSources omitted.

// de_UnsupportedOperationException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateFirewallAnalysisSettingsResponse omitted.

// de_UpdateFirewallDeleteProtectionResponse omitted.

// de_UpdateFirewallDescriptionResponse omitted.

// de_UpdateFirewallEncryptionConfigurationResponse omitted.

// de_UpdateFirewallPolicyChangeProtectionResponse omitted.

/**
 * deserializeAws_json1_0UpdateFirewallPolicyResponse
 */
const de_UpdateFirewallPolicyResponse = (output: any, context: __SerdeContext): UpdateFirewallPolicyResponse => {
  return take(output, {
    FirewallPolicyResponse: (_: any) => de_FirewallPolicyResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_UpdateLoggingConfigurationResponse omitted.

/**
 * deserializeAws_json1_0UpdateRuleGroupResponse
 */
const de_UpdateRuleGroupResponse = (output: any, context: __SerdeContext): UpdateRuleGroupResponse => {
  return take(output, {
    RuleGroupResponse: (_: any) => de_RuleGroupResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_UpdateSubnetChangeProtectionResponse omitted.

/**
 * deserializeAws_json1_0UpdateTLSInspectionConfigurationResponse
 */
const de_UpdateTLSInspectionConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateTLSInspectionConfigurationResponse => {
  return take(output, {
    TLSInspectionConfigurationResponse: (_: any) => de_TLSInspectionConfigurationResponse(_, context),
    UpdateToken: __expectString,
  }) as any;
};

// de_VariableDefinitionList omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `NetworkFirewall_20201112.${operation}`,
  };
}
