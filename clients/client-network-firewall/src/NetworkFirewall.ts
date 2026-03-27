// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
  type AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput,
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
} from "./commands/AcceptNetworkFirewallTransitGatewayAttachmentCommand";
import {
  type AssociateAvailabilityZonesCommandInput,
  type AssociateAvailabilityZonesCommandOutput,
  AssociateAvailabilityZonesCommand,
} from "./commands/AssociateAvailabilityZonesCommand";
import {
  type AssociateFirewallPolicyCommandInput,
  type AssociateFirewallPolicyCommandOutput,
  AssociateFirewallPolicyCommand,
} from "./commands/AssociateFirewallPolicyCommand";
import {
  type AssociateSubnetsCommandInput,
  type AssociateSubnetsCommandOutput,
  AssociateSubnetsCommand,
} from "./commands/AssociateSubnetsCommand";
import {
  type AttachRuleGroupsToProxyConfigurationCommandInput,
  type AttachRuleGroupsToProxyConfigurationCommandOutput,
  AttachRuleGroupsToProxyConfigurationCommand,
} from "./commands/AttachRuleGroupsToProxyConfigurationCommand";
import {
  type CreateFirewallCommandInput,
  type CreateFirewallCommandOutput,
  CreateFirewallCommand,
} from "./commands/CreateFirewallCommand";
import {
  type CreateFirewallPolicyCommandInput,
  type CreateFirewallPolicyCommandOutput,
  CreateFirewallPolicyCommand,
} from "./commands/CreateFirewallPolicyCommand";
import {
  type CreateProxyCommandInput,
  type CreateProxyCommandOutput,
  CreateProxyCommand,
} from "./commands/CreateProxyCommand";
import {
  type CreateProxyConfigurationCommandInput,
  type CreateProxyConfigurationCommandOutput,
  CreateProxyConfigurationCommand,
} from "./commands/CreateProxyConfigurationCommand";
import {
  type CreateProxyRuleGroupCommandInput,
  type CreateProxyRuleGroupCommandOutput,
  CreateProxyRuleGroupCommand,
} from "./commands/CreateProxyRuleGroupCommand";
import {
  type CreateProxyRulesCommandInput,
  type CreateProxyRulesCommandOutput,
  CreateProxyRulesCommand,
} from "./commands/CreateProxyRulesCommand";
import {
  type CreateRuleGroupCommandInput,
  type CreateRuleGroupCommandOutput,
  CreateRuleGroupCommand,
} from "./commands/CreateRuleGroupCommand";
import {
  type CreateTLSInspectionConfigurationCommandInput,
  type CreateTLSInspectionConfigurationCommandOutput,
  CreateTLSInspectionConfigurationCommand,
} from "./commands/CreateTLSInspectionConfigurationCommand";
import {
  type CreateVpcEndpointAssociationCommandInput,
  type CreateVpcEndpointAssociationCommandOutput,
  CreateVpcEndpointAssociationCommand,
} from "./commands/CreateVpcEndpointAssociationCommand";
import {
  type DeleteFirewallCommandInput,
  type DeleteFirewallCommandOutput,
  DeleteFirewallCommand,
} from "./commands/DeleteFirewallCommand";
import {
  type DeleteFirewallPolicyCommandInput,
  type DeleteFirewallPolicyCommandOutput,
  DeleteFirewallPolicyCommand,
} from "./commands/DeleteFirewallPolicyCommand";
import {
  type DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
  type DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput,
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
} from "./commands/DeleteNetworkFirewallTransitGatewayAttachmentCommand";
import {
  type DeleteProxyCommandInput,
  type DeleteProxyCommandOutput,
  DeleteProxyCommand,
} from "./commands/DeleteProxyCommand";
import {
  type DeleteProxyConfigurationCommandInput,
  type DeleteProxyConfigurationCommandOutput,
  DeleteProxyConfigurationCommand,
} from "./commands/DeleteProxyConfigurationCommand";
import {
  type DeleteProxyRuleGroupCommandInput,
  type DeleteProxyRuleGroupCommandOutput,
  DeleteProxyRuleGroupCommand,
} from "./commands/DeleteProxyRuleGroupCommand";
import {
  type DeleteProxyRulesCommandInput,
  type DeleteProxyRulesCommandOutput,
  DeleteProxyRulesCommand,
} from "./commands/DeleteProxyRulesCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteRuleGroupCommandInput,
  type DeleteRuleGroupCommandOutput,
  DeleteRuleGroupCommand,
} from "./commands/DeleteRuleGroupCommand";
import {
  type DeleteTLSInspectionConfigurationCommandInput,
  type DeleteTLSInspectionConfigurationCommandOutput,
  DeleteTLSInspectionConfigurationCommand,
} from "./commands/DeleteTLSInspectionConfigurationCommand";
import {
  type DeleteVpcEndpointAssociationCommandInput,
  type DeleteVpcEndpointAssociationCommandOutput,
  DeleteVpcEndpointAssociationCommand,
} from "./commands/DeleteVpcEndpointAssociationCommand";
import {
  type DescribeFirewallCommandInput,
  type DescribeFirewallCommandOutput,
  DescribeFirewallCommand,
} from "./commands/DescribeFirewallCommand";
import {
  type DescribeFirewallMetadataCommandInput,
  type DescribeFirewallMetadataCommandOutput,
  DescribeFirewallMetadataCommand,
} from "./commands/DescribeFirewallMetadataCommand";
import {
  type DescribeFirewallPolicyCommandInput,
  type DescribeFirewallPolicyCommandOutput,
  DescribeFirewallPolicyCommand,
} from "./commands/DescribeFirewallPolicyCommand";
import {
  type DescribeFlowOperationCommandInput,
  type DescribeFlowOperationCommandOutput,
  DescribeFlowOperationCommand,
} from "./commands/DescribeFlowOperationCommand";
import {
  type DescribeLoggingConfigurationCommandInput,
  type DescribeLoggingConfigurationCommandOutput,
  DescribeLoggingConfigurationCommand,
} from "./commands/DescribeLoggingConfigurationCommand";
import {
  type DescribeProxyCommandInput,
  type DescribeProxyCommandOutput,
  DescribeProxyCommand,
} from "./commands/DescribeProxyCommand";
import {
  type DescribeProxyConfigurationCommandInput,
  type DescribeProxyConfigurationCommandOutput,
  DescribeProxyConfigurationCommand,
} from "./commands/DescribeProxyConfigurationCommand";
import {
  type DescribeProxyRuleCommandInput,
  type DescribeProxyRuleCommandOutput,
  DescribeProxyRuleCommand,
} from "./commands/DescribeProxyRuleCommand";
import {
  type DescribeProxyRuleGroupCommandInput,
  type DescribeProxyRuleGroupCommandOutput,
  DescribeProxyRuleGroupCommand,
} from "./commands/DescribeProxyRuleGroupCommand";
import {
  type DescribeResourcePolicyCommandInput,
  type DescribeResourcePolicyCommandOutput,
  DescribeResourcePolicyCommand,
} from "./commands/DescribeResourcePolicyCommand";
import {
  type DescribeRuleGroupCommandInput,
  type DescribeRuleGroupCommandOutput,
  DescribeRuleGroupCommand,
} from "./commands/DescribeRuleGroupCommand";
import {
  type DescribeRuleGroupMetadataCommandInput,
  type DescribeRuleGroupMetadataCommandOutput,
  DescribeRuleGroupMetadataCommand,
} from "./commands/DescribeRuleGroupMetadataCommand";
import {
  type DescribeRuleGroupSummaryCommandInput,
  type DescribeRuleGroupSummaryCommandOutput,
  DescribeRuleGroupSummaryCommand,
} from "./commands/DescribeRuleGroupSummaryCommand";
import {
  type DescribeTLSInspectionConfigurationCommandInput,
  type DescribeTLSInspectionConfigurationCommandOutput,
  DescribeTLSInspectionConfigurationCommand,
} from "./commands/DescribeTLSInspectionConfigurationCommand";
import {
  type DescribeVpcEndpointAssociationCommandInput,
  type DescribeVpcEndpointAssociationCommandOutput,
  DescribeVpcEndpointAssociationCommand,
} from "./commands/DescribeVpcEndpointAssociationCommand";
import {
  type DetachRuleGroupsFromProxyConfigurationCommandInput,
  type DetachRuleGroupsFromProxyConfigurationCommandOutput,
  DetachRuleGroupsFromProxyConfigurationCommand,
} from "./commands/DetachRuleGroupsFromProxyConfigurationCommand";
import {
  type DisassociateAvailabilityZonesCommandInput,
  type DisassociateAvailabilityZonesCommandOutput,
  DisassociateAvailabilityZonesCommand,
} from "./commands/DisassociateAvailabilityZonesCommand";
import {
  type DisassociateSubnetsCommandInput,
  type DisassociateSubnetsCommandOutput,
  DisassociateSubnetsCommand,
} from "./commands/DisassociateSubnetsCommand";
import {
  type GetAnalysisReportResultsCommandInput,
  type GetAnalysisReportResultsCommandOutput,
  GetAnalysisReportResultsCommand,
} from "./commands/GetAnalysisReportResultsCommand";
import {
  type ListAnalysisReportsCommandInput,
  type ListAnalysisReportsCommandOutput,
  ListAnalysisReportsCommand,
} from "./commands/ListAnalysisReportsCommand";
import {
  type ListFirewallPoliciesCommandInput,
  type ListFirewallPoliciesCommandOutput,
  ListFirewallPoliciesCommand,
} from "./commands/ListFirewallPoliciesCommand";
import {
  type ListFirewallsCommandInput,
  type ListFirewallsCommandOutput,
  ListFirewallsCommand,
} from "./commands/ListFirewallsCommand";
import {
  type ListFlowOperationResultsCommandInput,
  type ListFlowOperationResultsCommandOutput,
  ListFlowOperationResultsCommand,
} from "./commands/ListFlowOperationResultsCommand";
import {
  type ListFlowOperationsCommandInput,
  type ListFlowOperationsCommandOutput,
  ListFlowOperationsCommand,
} from "./commands/ListFlowOperationsCommand";
import {
  type ListProxiesCommandInput,
  type ListProxiesCommandOutput,
  ListProxiesCommand,
} from "./commands/ListProxiesCommand";
import {
  type ListProxyConfigurationsCommandInput,
  type ListProxyConfigurationsCommandOutput,
  ListProxyConfigurationsCommand,
} from "./commands/ListProxyConfigurationsCommand";
import {
  type ListProxyRuleGroupsCommandInput,
  type ListProxyRuleGroupsCommandOutput,
  ListProxyRuleGroupsCommand,
} from "./commands/ListProxyRuleGroupsCommand";
import {
  type ListRuleGroupsCommandInput,
  type ListRuleGroupsCommandOutput,
  ListRuleGroupsCommand,
} from "./commands/ListRuleGroupsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTLSInspectionConfigurationsCommandInput,
  type ListTLSInspectionConfigurationsCommandOutput,
  ListTLSInspectionConfigurationsCommand,
} from "./commands/ListTLSInspectionConfigurationsCommand";
import {
  type ListVpcEndpointAssociationsCommandInput,
  type ListVpcEndpointAssociationsCommandOutput,
  ListVpcEndpointAssociationsCommand,
} from "./commands/ListVpcEndpointAssociationsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
  type RejectNetworkFirewallTransitGatewayAttachmentCommandOutput,
  RejectNetworkFirewallTransitGatewayAttachmentCommand,
} from "./commands/RejectNetworkFirewallTransitGatewayAttachmentCommand";
import {
  type StartAnalysisReportCommandInput,
  type StartAnalysisReportCommandOutput,
  StartAnalysisReportCommand,
} from "./commands/StartAnalysisReportCommand";
import {
  type StartFlowCaptureCommandInput,
  type StartFlowCaptureCommandOutput,
  StartFlowCaptureCommand,
} from "./commands/StartFlowCaptureCommand";
import {
  type StartFlowFlushCommandInput,
  type StartFlowFlushCommandOutput,
  StartFlowFlushCommand,
} from "./commands/StartFlowFlushCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAvailabilityZoneChangeProtectionCommandInput,
  type UpdateAvailabilityZoneChangeProtectionCommandOutput,
  UpdateAvailabilityZoneChangeProtectionCommand,
} from "./commands/UpdateAvailabilityZoneChangeProtectionCommand";
import {
  type UpdateFirewallAnalysisSettingsCommandInput,
  type UpdateFirewallAnalysisSettingsCommandOutput,
  UpdateFirewallAnalysisSettingsCommand,
} from "./commands/UpdateFirewallAnalysisSettingsCommand";
import {
  type UpdateFirewallDeleteProtectionCommandInput,
  type UpdateFirewallDeleteProtectionCommandOutput,
  UpdateFirewallDeleteProtectionCommand,
} from "./commands/UpdateFirewallDeleteProtectionCommand";
import {
  type UpdateFirewallDescriptionCommandInput,
  type UpdateFirewallDescriptionCommandOutput,
  UpdateFirewallDescriptionCommand,
} from "./commands/UpdateFirewallDescriptionCommand";
import {
  type UpdateFirewallEncryptionConfigurationCommandInput,
  type UpdateFirewallEncryptionConfigurationCommandOutput,
  UpdateFirewallEncryptionConfigurationCommand,
} from "./commands/UpdateFirewallEncryptionConfigurationCommand";
import {
  type UpdateFirewallPolicyChangeProtectionCommandInput,
  type UpdateFirewallPolicyChangeProtectionCommandOutput,
  UpdateFirewallPolicyChangeProtectionCommand,
} from "./commands/UpdateFirewallPolicyChangeProtectionCommand";
import {
  type UpdateFirewallPolicyCommandInput,
  type UpdateFirewallPolicyCommandOutput,
  UpdateFirewallPolicyCommand,
} from "./commands/UpdateFirewallPolicyCommand";
import {
  type UpdateLoggingConfigurationCommandInput,
  type UpdateLoggingConfigurationCommandOutput,
  UpdateLoggingConfigurationCommand,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  type UpdateProxyCommandInput,
  type UpdateProxyCommandOutput,
  UpdateProxyCommand,
} from "./commands/UpdateProxyCommand";
import {
  type UpdateProxyConfigurationCommandInput,
  type UpdateProxyConfigurationCommandOutput,
  UpdateProxyConfigurationCommand,
} from "./commands/UpdateProxyConfigurationCommand";
import {
  type UpdateProxyRuleCommandInput,
  type UpdateProxyRuleCommandOutput,
  UpdateProxyRuleCommand,
} from "./commands/UpdateProxyRuleCommand";
import {
  type UpdateProxyRuleGroupPrioritiesCommandInput,
  type UpdateProxyRuleGroupPrioritiesCommandOutput,
  UpdateProxyRuleGroupPrioritiesCommand,
} from "./commands/UpdateProxyRuleGroupPrioritiesCommand";
import {
  type UpdateProxyRulePrioritiesCommandInput,
  type UpdateProxyRulePrioritiesCommandOutput,
  UpdateProxyRulePrioritiesCommand,
} from "./commands/UpdateProxyRulePrioritiesCommand";
import {
  type UpdateRuleGroupCommandInput,
  type UpdateRuleGroupCommandOutput,
  UpdateRuleGroupCommand,
} from "./commands/UpdateRuleGroupCommand";
import {
  type UpdateSubnetChangeProtectionCommandInput,
  type UpdateSubnetChangeProtectionCommandOutput,
  UpdateSubnetChangeProtectionCommand,
} from "./commands/UpdateSubnetChangeProtectionCommand";
import {
  type UpdateTLSInspectionConfigurationCommandInput,
  type UpdateTLSInspectionConfigurationCommandOutput,
  UpdateTLSInspectionConfigurationCommand,
} from "./commands/UpdateTLSInspectionConfigurationCommand";
import { NetworkFirewallClient } from "./NetworkFirewallClient";
import { paginateGetAnalysisReportResults } from "./pagination/GetAnalysisReportResultsPaginator";
import { paginateListAnalysisReports } from "./pagination/ListAnalysisReportsPaginator";
import { paginateListFirewallPolicies } from "./pagination/ListFirewallPoliciesPaginator";
import { paginateListFirewalls } from "./pagination/ListFirewallsPaginator";
import { paginateListFlowOperationResults } from "./pagination/ListFlowOperationResultsPaginator";
import { paginateListFlowOperations } from "./pagination/ListFlowOperationsPaginator";
import { paginateListProxies } from "./pagination/ListProxiesPaginator";
import { paginateListProxyConfigurations } from "./pagination/ListProxyConfigurationsPaginator";
import { paginateListProxyRuleGroups } from "./pagination/ListProxyRuleGroupsPaginator";
import { paginateListRuleGroups } from "./pagination/ListRuleGroupsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListTLSInspectionConfigurations } from "./pagination/ListTLSInspectionConfigurationsPaginator";
import { paginateListVpcEndpointAssociations } from "./pagination/ListVpcEndpointAssociationsPaginator";

const commands = {
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
  AssociateAvailabilityZonesCommand,
  AssociateFirewallPolicyCommand,
  AssociateSubnetsCommand,
  AttachRuleGroupsToProxyConfigurationCommand,
  CreateFirewallCommand,
  CreateFirewallPolicyCommand,
  CreateProxyCommand,
  CreateProxyConfigurationCommand,
  CreateProxyRuleGroupCommand,
  CreateProxyRulesCommand,
  CreateRuleGroupCommand,
  CreateTLSInspectionConfigurationCommand,
  CreateVpcEndpointAssociationCommand,
  DeleteFirewallCommand,
  DeleteFirewallPolicyCommand,
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
  DeleteProxyCommand,
  DeleteProxyConfigurationCommand,
  DeleteProxyRuleGroupCommand,
  DeleteProxyRulesCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleGroupCommand,
  DeleteTLSInspectionConfigurationCommand,
  DeleteVpcEndpointAssociationCommand,
  DescribeFirewallCommand,
  DescribeFirewallMetadataCommand,
  DescribeFirewallPolicyCommand,
  DescribeFlowOperationCommand,
  DescribeLoggingConfigurationCommand,
  DescribeProxyCommand,
  DescribeProxyConfigurationCommand,
  DescribeProxyRuleCommand,
  DescribeProxyRuleGroupCommand,
  DescribeResourcePolicyCommand,
  DescribeRuleGroupCommand,
  DescribeRuleGroupMetadataCommand,
  DescribeRuleGroupSummaryCommand,
  DescribeTLSInspectionConfigurationCommand,
  DescribeVpcEndpointAssociationCommand,
  DetachRuleGroupsFromProxyConfigurationCommand,
  DisassociateAvailabilityZonesCommand,
  DisassociateSubnetsCommand,
  GetAnalysisReportResultsCommand,
  ListAnalysisReportsCommand,
  ListFirewallPoliciesCommand,
  ListFirewallsCommand,
  ListFlowOperationResultsCommand,
  ListFlowOperationsCommand,
  ListProxiesCommand,
  ListProxyConfigurationsCommand,
  ListProxyRuleGroupsCommand,
  ListRuleGroupsCommand,
  ListTagsForResourceCommand,
  ListTLSInspectionConfigurationsCommand,
  ListVpcEndpointAssociationsCommand,
  PutResourcePolicyCommand,
  RejectNetworkFirewallTransitGatewayAttachmentCommand,
  StartAnalysisReportCommand,
  StartFlowCaptureCommand,
  StartFlowFlushCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAvailabilityZoneChangeProtectionCommand,
  UpdateFirewallAnalysisSettingsCommand,
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDescriptionCommand,
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallPolicyCommand,
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateLoggingConfigurationCommand,
  UpdateProxyCommand,
  UpdateProxyConfigurationCommand,
  UpdateProxyRuleCommand,
  UpdateProxyRuleGroupPrioritiesCommand,
  UpdateProxyRulePrioritiesCommand,
  UpdateRuleGroupCommand,
  UpdateSubnetChangeProtectionCommand,
  UpdateTLSInspectionConfigurationCommand,
};
const paginators = {
  paginateGetAnalysisReportResults,
  paginateListAnalysisReports,
  paginateListFirewallPolicies,
  paginateListFirewalls,
  paginateListFlowOperationResults,
  paginateListFlowOperations,
  paginateListProxies,
  paginateListProxyConfigurations,
  paginateListProxyRuleGroups,
  paginateListRuleGroups,
  paginateListTagsForResource,
  paginateListTLSInspectionConfigurations,
  paginateListVpcEndpointAssociations,
};

export interface NetworkFirewall {
  /**
   * @see {@link AcceptNetworkFirewallTransitGatewayAttachmentCommand}
   */
  acceptNetworkFirewallTransitGatewayAttachment(
    args: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput>;
  acceptNetworkFirewallTransitGatewayAttachment(
    args: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    cb: (err: any, data?: AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;
  acceptNetworkFirewallTransitGatewayAttachment(
    args: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateAvailabilityZonesCommand}
   */
  associateAvailabilityZones(
    args: AssociateAvailabilityZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAvailabilityZonesCommandOutput>;
  associateAvailabilityZones(
    args: AssociateAvailabilityZonesCommandInput,
    cb: (err: any, data?: AssociateAvailabilityZonesCommandOutput) => void
  ): void;
  associateAvailabilityZones(
    args: AssociateAvailabilityZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAvailabilityZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateFirewallPolicyCommand}
   */
  associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFirewallPolicyCommandOutput>;
  associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): void;
  associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSubnetsCommand}
   */
  associateSubnets(
    args: AssociateSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSubnetsCommandOutput>;
  associateSubnets(
    args: AssociateSubnetsCommandInput,
    cb: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): void;
  associateSubnets(
    args: AssociateSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachRuleGroupsToProxyConfigurationCommand}
   */
  attachRuleGroupsToProxyConfiguration(
    args: AttachRuleGroupsToProxyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachRuleGroupsToProxyConfigurationCommandOutput>;
  attachRuleGroupsToProxyConfiguration(
    args: AttachRuleGroupsToProxyConfigurationCommandInput,
    cb: (err: any, data?: AttachRuleGroupsToProxyConfigurationCommandOutput) => void
  ): void;
  attachRuleGroupsToProxyConfiguration(
    args: AttachRuleGroupsToProxyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachRuleGroupsToProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallCommand}
   */
  createFirewall(
    args: CreateFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallCommandOutput>;
  createFirewall(
    args: CreateFirewallCommandInput,
    cb: (err: any, data?: CreateFirewallCommandOutput) => void
  ): void;
  createFirewall(
    args: CreateFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallPolicyCommand}
   */
  createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallPolicyCommandOutput>;
  createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): void;
  createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProxyCommand}
   */
  createProxy(
    args: CreateProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxyCommandOutput>;
  createProxy(
    args: CreateProxyCommandInput,
    cb: (err: any, data?: CreateProxyCommandOutput) => void
  ): void;
  createProxy(
    args: CreateProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProxyConfigurationCommand}
   */
  createProxyConfiguration(
    args: CreateProxyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxyConfigurationCommandOutput>;
  createProxyConfiguration(
    args: CreateProxyConfigurationCommandInput,
    cb: (err: any, data?: CreateProxyConfigurationCommandOutput) => void
  ): void;
  createProxyConfiguration(
    args: CreateProxyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProxyRuleGroupCommand}
   */
  createProxyRuleGroup(
    args: CreateProxyRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxyRuleGroupCommandOutput>;
  createProxyRuleGroup(
    args: CreateProxyRuleGroupCommandInput,
    cb: (err: any, data?: CreateProxyRuleGroupCommandOutput) => void
  ): void;
  createProxyRuleGroup(
    args: CreateProxyRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxyRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProxyRulesCommand}
   */
  createProxyRules(
    args: CreateProxyRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxyRulesCommandOutput>;
  createProxyRules(
    args: CreateProxyRulesCommandInput,
    cb: (err: any, data?: CreateProxyRulesCommandOutput) => void
  ): void;
  createProxyRules(
    args: CreateProxyRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxyRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleGroupCommand}
   */
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTLSInspectionConfigurationCommand}
   */
  createTLSInspectionConfiguration(
    args: CreateTLSInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTLSInspectionConfigurationCommandOutput>;
  createTLSInspectionConfiguration(
    args: CreateTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: CreateTLSInspectionConfigurationCommandOutput) => void
  ): void;
  createTLSInspectionConfiguration(
    args: CreateTLSInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointAssociationCommand}
   */
  createVpcEndpointAssociation(
    args: CreateVpcEndpointAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointAssociationCommandOutput>;
  createVpcEndpointAssociation(
    args: CreateVpcEndpointAssociationCommandInput,
    cb: (err: any, data?: CreateVpcEndpointAssociationCommandOutput) => void
  ): void;
  createVpcEndpointAssociation(
    args: CreateVpcEndpointAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallCommand}
   */
  deleteFirewall(): Promise<DeleteFirewallCommandOutput>;
  deleteFirewall(
    args: DeleteFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallCommandOutput>;
  deleteFirewall(
    args: DeleteFirewallCommandInput,
    cb: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): void;
  deleteFirewall(
    args: DeleteFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallPolicyCommand}
   */
  deleteFirewallPolicy(): Promise<DeleteFirewallPolicyCommandOutput>;
  deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallPolicyCommandOutput>;
  deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): void;
  deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkFirewallTransitGatewayAttachmentCommand}
   */
  deleteNetworkFirewallTransitGatewayAttachment(
    args: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput>;
  deleteNetworkFirewallTransitGatewayAttachment(
    args: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    cb: (err: any, data?: DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;
  deleteNetworkFirewallTransitGatewayAttachment(
    args: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxyCommand}
   */
  deleteProxy(
    args: DeleteProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxyCommandOutput>;
  deleteProxy(
    args: DeleteProxyCommandInput,
    cb: (err: any, data?: DeleteProxyCommandOutput) => void
  ): void;
  deleteProxy(
    args: DeleteProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxyConfigurationCommand}
   */
  deleteProxyConfiguration(): Promise<DeleteProxyConfigurationCommandOutput>;
  deleteProxyConfiguration(
    args: DeleteProxyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxyConfigurationCommandOutput>;
  deleteProxyConfiguration(
    args: DeleteProxyConfigurationCommandInput,
    cb: (err: any, data?: DeleteProxyConfigurationCommandOutput) => void
  ): void;
  deleteProxyConfiguration(
    args: DeleteProxyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxyRuleGroupCommand}
   */
  deleteProxyRuleGroup(): Promise<DeleteProxyRuleGroupCommandOutput>;
  deleteProxyRuleGroup(
    args: DeleteProxyRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxyRuleGroupCommandOutput>;
  deleteProxyRuleGroup(
    args: DeleteProxyRuleGroupCommandInput,
    cb: (err: any, data?: DeleteProxyRuleGroupCommandOutput) => void
  ): void;
  deleteProxyRuleGroup(
    args: DeleteProxyRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxyRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxyRulesCommand}
   */
  deleteProxyRules(
    args: DeleteProxyRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxyRulesCommandOutput>;
  deleteProxyRules(
    args: DeleteProxyRulesCommandInput,
    cb: (err: any, data?: DeleteProxyRulesCommandOutput) => void
  ): void;
  deleteProxyRules(
    args: DeleteProxyRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxyRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleGroupCommand}
   */
  deleteRuleGroup(): Promise<DeleteRuleGroupCommandOutput>;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupCommandOutput>;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTLSInspectionConfigurationCommand}
   */
  deleteTLSInspectionConfiguration(): Promise<DeleteTLSInspectionConfigurationCommandOutput>;
  deleteTLSInspectionConfiguration(
    args: DeleteTLSInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTLSInspectionConfigurationCommandOutput>;
  deleteTLSInspectionConfiguration(
    args: DeleteTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: DeleteTLSInspectionConfigurationCommandOutput) => void
  ): void;
  deleteTLSInspectionConfiguration(
    args: DeleteTLSInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointAssociationCommand}
   */
  deleteVpcEndpointAssociation(
    args: DeleteVpcEndpointAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointAssociationCommandOutput>;
  deleteVpcEndpointAssociation(
    args: DeleteVpcEndpointAssociationCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointAssociationCommandOutput) => void
  ): void;
  deleteVpcEndpointAssociation(
    args: DeleteVpcEndpointAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallCommand}
   */
  describeFirewall(): Promise<DescribeFirewallCommandOutput>;
  describeFirewall(
    args: DescribeFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFirewallCommandOutput>;
  describeFirewall(
    args: DescribeFirewallCommandInput,
    cb: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): void;
  describeFirewall(
    args: DescribeFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallMetadataCommand}
   */
  describeFirewallMetadata(): Promise<DescribeFirewallMetadataCommandOutput>;
  describeFirewallMetadata(
    args: DescribeFirewallMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFirewallMetadataCommandOutput>;
  describeFirewallMetadata(
    args: DescribeFirewallMetadataCommandInput,
    cb: (err: any, data?: DescribeFirewallMetadataCommandOutput) => void
  ): void;
  describeFirewallMetadata(
    args: DescribeFirewallMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFirewallMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallPolicyCommand}
   */
  describeFirewallPolicy(): Promise<DescribeFirewallPolicyCommandOutput>;
  describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFirewallPolicyCommandOutput>;
  describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): void;
  describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowOperationCommand}
   */
  describeFlowOperation(
    args: DescribeFlowOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowOperationCommandOutput>;
  describeFlowOperation(
    args: DescribeFlowOperationCommandInput,
    cb: (err: any, data?: DescribeFlowOperationCommandOutput) => void
  ): void;
  describeFlowOperation(
    args: DescribeFlowOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingConfigurationCommand}
   */
  describeLoggingConfiguration(): Promise<DescribeLoggingConfigurationCommandOutput>;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingConfigurationCommandOutput>;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProxyCommand}
   */
  describeProxy(): Promise<DescribeProxyCommandOutput>;
  describeProxy(
    args: DescribeProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProxyCommandOutput>;
  describeProxy(
    args: DescribeProxyCommandInput,
    cb: (err: any, data?: DescribeProxyCommandOutput) => void
  ): void;
  describeProxy(
    args: DescribeProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProxyConfigurationCommand}
   */
  describeProxyConfiguration(): Promise<DescribeProxyConfigurationCommandOutput>;
  describeProxyConfiguration(
    args: DescribeProxyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProxyConfigurationCommandOutput>;
  describeProxyConfiguration(
    args: DescribeProxyConfigurationCommandInput,
    cb: (err: any, data?: DescribeProxyConfigurationCommandOutput) => void
  ): void;
  describeProxyConfiguration(
    args: DescribeProxyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProxyRuleCommand}
   */
  describeProxyRule(
    args: DescribeProxyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProxyRuleCommandOutput>;
  describeProxyRule(
    args: DescribeProxyRuleCommandInput,
    cb: (err: any, data?: DescribeProxyRuleCommandOutput) => void
  ): void;
  describeProxyRule(
    args: DescribeProxyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProxyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProxyRuleGroupCommand}
   */
  describeProxyRuleGroup(): Promise<DescribeProxyRuleGroupCommandOutput>;
  describeProxyRuleGroup(
    args: DescribeProxyRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProxyRuleGroupCommandOutput>;
  describeProxyRuleGroup(
    args: DescribeProxyRuleGroupCommandInput,
    cb: (err: any, data?: DescribeProxyRuleGroupCommandOutput) => void
  ): void;
  describeProxyRuleGroup(
    args: DescribeProxyRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProxyRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupCommand}
   */
  describeRuleGroup(): Promise<DescribeRuleGroupCommandOutput>;
  describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupCommandOutput>;
  describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): void;
  describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupMetadataCommand}
   */
  describeRuleGroupMetadata(): Promise<DescribeRuleGroupMetadataCommandOutput>;
  describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupMetadataCommandOutput>;
  describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    cb: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): void;
  describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupSummaryCommand}
   */
  describeRuleGroupSummary(): Promise<DescribeRuleGroupSummaryCommandOutput>;
  describeRuleGroupSummary(
    args: DescribeRuleGroupSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupSummaryCommandOutput>;
  describeRuleGroupSummary(
    args: DescribeRuleGroupSummaryCommandInput,
    cb: (err: any, data?: DescribeRuleGroupSummaryCommandOutput) => void
  ): void;
  describeRuleGroupSummary(
    args: DescribeRuleGroupSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTLSInspectionConfigurationCommand}
   */
  describeTLSInspectionConfiguration(): Promise<DescribeTLSInspectionConfigurationCommandOutput>;
  describeTLSInspectionConfiguration(
    args: DescribeTLSInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTLSInspectionConfigurationCommandOutput>;
  describeTLSInspectionConfiguration(
    args: DescribeTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: DescribeTLSInspectionConfigurationCommandOutput) => void
  ): void;
  describeTLSInspectionConfiguration(
    args: DescribeTLSInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointAssociationCommand}
   */
  describeVpcEndpointAssociation(
    args: DescribeVpcEndpointAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointAssociationCommandOutput>;
  describeVpcEndpointAssociation(
    args: DescribeVpcEndpointAssociationCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointAssociationCommandOutput) => void
  ): void;
  describeVpcEndpointAssociation(
    args: DescribeVpcEndpointAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachRuleGroupsFromProxyConfigurationCommand}
   */
  detachRuleGroupsFromProxyConfiguration(
    args: DetachRuleGroupsFromProxyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachRuleGroupsFromProxyConfigurationCommandOutput>;
  detachRuleGroupsFromProxyConfiguration(
    args: DetachRuleGroupsFromProxyConfigurationCommandInput,
    cb: (err: any, data?: DetachRuleGroupsFromProxyConfigurationCommandOutput) => void
  ): void;
  detachRuleGroupsFromProxyConfiguration(
    args: DetachRuleGroupsFromProxyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachRuleGroupsFromProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAvailabilityZonesCommand}
   */
  disassociateAvailabilityZones(
    args: DisassociateAvailabilityZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAvailabilityZonesCommandOutput>;
  disassociateAvailabilityZones(
    args: DisassociateAvailabilityZonesCommandInput,
    cb: (err: any, data?: DisassociateAvailabilityZonesCommandOutput) => void
  ): void;
  disassociateAvailabilityZones(
    args: DisassociateAvailabilityZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAvailabilityZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSubnetsCommand}
   */
  disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSubnetsCommandOutput>;
  disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): void;
  disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalysisReportResultsCommand}
   */
  getAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnalysisReportResultsCommandOutput>;
  getAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    cb: (err: any, data?: GetAnalysisReportResultsCommandOutput) => void
  ): void;
  getAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalysisReportResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysisReportsCommand}
   */
  listAnalysisReports(): Promise<ListAnalysisReportsCommandOutput>;
  listAnalysisReports(
    args: ListAnalysisReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalysisReportsCommandOutput>;
  listAnalysisReports(
    args: ListAnalysisReportsCommandInput,
    cb: (err: any, data?: ListAnalysisReportsCommandOutput) => void
  ): void;
  listAnalysisReports(
    args: ListAnalysisReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalysisReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallPoliciesCommand}
   */
  listFirewallPolicies(): Promise<ListFirewallPoliciesCommandOutput>;
  listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallPoliciesCommandOutput>;
  listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): void;
  listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallsCommand}
   */
  listFirewalls(): Promise<ListFirewallsCommandOutput>;
  listFirewalls(
    args: ListFirewallsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallsCommandOutput>;
  listFirewalls(
    args: ListFirewallsCommandInput,
    cb: (err: any, data?: ListFirewallsCommandOutput) => void
  ): void;
  listFirewalls(
    args: ListFirewallsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowOperationResultsCommand}
   */
  listFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowOperationResultsCommandOutput>;
  listFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    cb: (err: any, data?: ListFlowOperationResultsCommandOutput) => void
  ): void;
  listFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowOperationResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowOperationsCommand}
   */
  listFlowOperations(
    args: ListFlowOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowOperationsCommandOutput>;
  listFlowOperations(
    args: ListFlowOperationsCommandInput,
    cb: (err: any, data?: ListFlowOperationsCommandOutput) => void
  ): void;
  listFlowOperations(
    args: ListFlowOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxiesCommand}
   */
  listProxies(): Promise<ListProxiesCommandOutput>;
  listProxies(
    args: ListProxiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxiesCommandOutput>;
  listProxies(
    args: ListProxiesCommandInput,
    cb: (err: any, data?: ListProxiesCommandOutput) => void
  ): void;
  listProxies(
    args: ListProxiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxyConfigurationsCommand}
   */
  listProxyConfigurations(): Promise<ListProxyConfigurationsCommandOutput>;
  listProxyConfigurations(
    args: ListProxyConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxyConfigurationsCommandOutput>;
  listProxyConfigurations(
    args: ListProxyConfigurationsCommandInput,
    cb: (err: any, data?: ListProxyConfigurationsCommandOutput) => void
  ): void;
  listProxyConfigurations(
    args: ListProxyConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxyConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxyRuleGroupsCommand}
   */
  listProxyRuleGroups(): Promise<ListProxyRuleGroupsCommandOutput>;
  listProxyRuleGroups(
    args: ListProxyRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxyRuleGroupsCommandOutput>;
  listProxyRuleGroups(
    args: ListProxyRuleGroupsCommandInput,
    cb: (err: any, data?: ListProxyRuleGroupsCommandOutput) => void
  ): void;
  listProxyRuleGroups(
    args: ListProxyRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxyRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleGroupsCommand}
   */
  listRuleGroups(): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTLSInspectionConfigurationsCommand}
   */
  listTLSInspectionConfigurations(): Promise<ListTLSInspectionConfigurationsCommandOutput>;
  listTLSInspectionConfigurations(
    args: ListTLSInspectionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTLSInspectionConfigurationsCommandOutput>;
  listTLSInspectionConfigurations(
    args: ListTLSInspectionConfigurationsCommandInput,
    cb: (err: any, data?: ListTLSInspectionConfigurationsCommandOutput) => void
  ): void;
  listTLSInspectionConfigurations(
    args: ListTLSInspectionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTLSInspectionConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointAssociationsCommand}
   */
  listVpcEndpointAssociations(): Promise<ListVpcEndpointAssociationsCommandOutput>;
  listVpcEndpointAssociations(
    args: ListVpcEndpointAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointAssociationsCommandOutput>;
  listVpcEndpointAssociations(
    args: ListVpcEndpointAssociationsCommandInput,
    cb: (err: any, data?: ListVpcEndpointAssociationsCommandOutput) => void
  ): void;
  listVpcEndpointAssociations(
    args: ListVpcEndpointAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectNetworkFirewallTransitGatewayAttachmentCommand}
   */
  rejectNetworkFirewallTransitGatewayAttachment(
    args: RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectNetworkFirewallTransitGatewayAttachmentCommandOutput>;
  rejectNetworkFirewallTransitGatewayAttachment(
    args: RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    cb: (err: any, data?: RejectNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;
  rejectNetworkFirewallTransitGatewayAttachment(
    args: RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAnalysisReportCommand}
   */
  startAnalysisReport(
    args: StartAnalysisReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAnalysisReportCommandOutput>;
  startAnalysisReport(
    args: StartAnalysisReportCommandInput,
    cb: (err: any, data?: StartAnalysisReportCommandOutput) => void
  ): void;
  startAnalysisReport(
    args: StartAnalysisReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAnalysisReportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowCaptureCommand}
   */
  startFlowCapture(
    args: StartFlowCaptureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFlowCaptureCommandOutput>;
  startFlowCapture(
    args: StartFlowCaptureCommandInput,
    cb: (err: any, data?: StartFlowCaptureCommandOutput) => void
  ): void;
  startFlowCapture(
    args: StartFlowCaptureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCaptureCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowFlushCommand}
   */
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFlowFlushCommandOutput>;
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    cb: (err: any, data?: StartFlowFlushCommandOutput) => void
  ): void;
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowFlushCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAvailabilityZoneChangeProtectionCommand}
   */
  updateAvailabilityZoneChangeProtection(
    args: UpdateAvailabilityZoneChangeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAvailabilityZoneChangeProtectionCommandOutput>;
  updateAvailabilityZoneChangeProtection(
    args: UpdateAvailabilityZoneChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateAvailabilityZoneChangeProtectionCommandOutput) => void
  ): void;
  updateAvailabilityZoneChangeProtection(
    args: UpdateAvailabilityZoneChangeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAvailabilityZoneChangeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallAnalysisSettingsCommand}
   */
  updateFirewallAnalysisSettings(): Promise<UpdateFirewallAnalysisSettingsCommandOutput>;
  updateFirewallAnalysisSettings(
    args: UpdateFirewallAnalysisSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallAnalysisSettingsCommandOutput>;
  updateFirewallAnalysisSettings(
    args: UpdateFirewallAnalysisSettingsCommandInput,
    cb: (err: any, data?: UpdateFirewallAnalysisSettingsCommandOutput) => void
  ): void;
  updateFirewallAnalysisSettings(
    args: UpdateFirewallAnalysisSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallAnalysisSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallDeleteProtectionCommand}
   */
  updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallDeleteProtectionCommandOutput>;
  updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): void;
  updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallDescriptionCommand}
   */
  updateFirewallDescription(): Promise<UpdateFirewallDescriptionCommandOutput>;
  updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallDescriptionCommandOutput>;
  updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): void;
  updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallEncryptionConfigurationCommand}
   */
  updateFirewallEncryptionConfiguration(): Promise<UpdateFirewallEncryptionConfigurationCommandOutput>;
  updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallEncryptionConfigurationCommandOutput>;
  updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    cb: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): void;
  updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallPolicyCommand}
   */
  updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallPolicyCommandOutput>;
  updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): void;
  updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallPolicyChangeProtectionCommand}
   */
  updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput>;
  updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): void;
  updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLoggingConfigurationCommand}
   */
  updateLoggingConfiguration(): Promise<UpdateLoggingConfigurationCommandOutput>;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoggingConfigurationCommandOutput>;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyCommand}
   */
  updateProxy(
    args: UpdateProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxyCommandOutput>;
  updateProxy(
    args: UpdateProxyCommandInput,
    cb: (err: any, data?: UpdateProxyCommandOutput) => void
  ): void;
  updateProxy(
    args: UpdateProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyConfigurationCommand}
   */
  updateProxyConfiguration(
    args: UpdateProxyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxyConfigurationCommandOutput>;
  updateProxyConfiguration(
    args: UpdateProxyConfigurationCommandInput,
    cb: (err: any, data?: UpdateProxyConfigurationCommandOutput) => void
  ): void;
  updateProxyConfiguration(
    args: UpdateProxyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyRuleCommand}
   */
  updateProxyRule(
    args: UpdateProxyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxyRuleCommandOutput>;
  updateProxyRule(
    args: UpdateProxyRuleCommandInput,
    cb: (err: any, data?: UpdateProxyRuleCommandOutput) => void
  ): void;
  updateProxyRule(
    args: UpdateProxyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyRuleGroupPrioritiesCommand}
   */
  updateProxyRuleGroupPriorities(
    args: UpdateProxyRuleGroupPrioritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxyRuleGroupPrioritiesCommandOutput>;
  updateProxyRuleGroupPriorities(
    args: UpdateProxyRuleGroupPrioritiesCommandInput,
    cb: (err: any, data?: UpdateProxyRuleGroupPrioritiesCommandOutput) => void
  ): void;
  updateProxyRuleGroupPriorities(
    args: UpdateProxyRuleGroupPrioritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxyRuleGroupPrioritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyRulePrioritiesCommand}
   */
  updateProxyRulePriorities(
    args: UpdateProxyRulePrioritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxyRulePrioritiesCommandOutput>;
  updateProxyRulePriorities(
    args: UpdateProxyRulePrioritiesCommandInput,
    cb: (err: any, data?: UpdateProxyRulePrioritiesCommandOutput) => void
  ): void;
  updateProxyRulePriorities(
    args: UpdateProxyRulePrioritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxyRulePrioritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleGroupCommand}
   */
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubnetChangeProtectionCommand}
   */
  updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubnetChangeProtectionCommandOutput>;
  updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): void;
  updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTLSInspectionConfigurationCommand}
   */
  updateTLSInspectionConfiguration(
    args: UpdateTLSInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTLSInspectionConfigurationCommandOutput>;
  updateTLSInspectionConfiguration(
    args: UpdateTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: UpdateTLSInspectionConfigurationCommandOutput) => void
  ): void;
  updateTLSInspectionConfiguration(
    args: UpdateTLSInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalysisReportResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAnalysisReportResultsCommandOutput}.
   */
  paginateGetAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAnalysisReportResultsCommandOutput>;

  /**
   * @see {@link ListAnalysisReportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnalysisReportsCommandOutput}.
   */
  paginateListAnalysisReports(
    args?: ListAnalysisReportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnalysisReportsCommandOutput>;

  /**
   * @see {@link ListFirewallPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallPoliciesCommandOutput}.
   */
  paginateListFirewallPolicies(
    args?: ListFirewallPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallPoliciesCommandOutput>;

  /**
   * @see {@link ListFirewallsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallsCommandOutput}.
   */
  paginateListFirewalls(
    args?: ListFirewallsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallsCommandOutput>;

  /**
   * @see {@link ListFlowOperationResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowOperationResultsCommandOutput}.
   */
  paginateListFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowOperationResultsCommandOutput>;

  /**
   * @see {@link ListFlowOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowOperationsCommandOutput}.
   */
  paginateListFlowOperations(
    args: ListFlowOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowOperationsCommandOutput>;

  /**
   * @see {@link ListProxiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxiesCommandOutput}.
   */
  paginateListProxies(
    args?: ListProxiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxiesCommandOutput>;

  /**
   * @see {@link ListProxyConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxyConfigurationsCommandOutput}.
   */
  paginateListProxyConfigurations(
    args?: ListProxyConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxyConfigurationsCommandOutput>;

  /**
   * @see {@link ListProxyRuleGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxyRuleGroupsCommandOutput}.
   */
  paginateListProxyRuleGroups(
    args?: ListProxyRuleGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxyRuleGroupsCommandOutput>;

  /**
   * @see {@link ListRuleGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRuleGroupsCommandOutput}.
   */
  paginateListRuleGroups(
    args?: ListRuleGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRuleGroupsCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListTLSInspectionConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTLSInspectionConfigurationsCommandOutput}.
   */
  paginateListTLSInspectionConfigurations(
    args?: ListTLSInspectionConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTLSInspectionConfigurationsCommandOutput>;

  /**
   * @see {@link ListVpcEndpointAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVpcEndpointAssociationsCommandOutput}.
   */
  paginateListVpcEndpointAssociations(
    args?: ListVpcEndpointAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVpcEndpointAssociationsCommandOutput>;
}

/**
 * <p>This is the API Reference for Network Firewall. This guide is for developers who need
 *          detailed information about the Network Firewall API actions, data types, and errors. </p>
 *          <p>The REST API requires you to handle connection details, such as calculating
 *                signatures, handling request retries, and error handling. For general information
 *                about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p>
 *          <p>To view the complete list of Amazon Web Services Regions where Network Firewall is available, see
 *          <a href="https://docs.aws.amazon.com/general/latest/gr/network-firewall.html">Service
 *             endpoints and quotas</a> in the <i>Amazon Web Services General
 *                Reference</i>.
 *       </p>
 *          <p>To access Network Firewall using the IPv4 REST API endpoint:
 *                   <code>https://network-firewall.<region>.amazonaws.com </code>
 *          </p>
 *          <p>To access Network Firewall using the Dualstack (IPv4 and IPv6) REST API endpoint:
 *                <code>https://network-firewall.<region>.aws.api </code>
 *          </p>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to
 *                the programming language or platform that you're using. For more information, see
 *                <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>For descriptions of Network Firewall features, including and step-by-step
 *                instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
 *                   Guide</a>.</p>
 *          <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
 *          prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
 *          perimeter of your VPC. This includes filtering traffic going to and coming from an internet
 *          gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible
 *       with Suricata, a free, open source network analysis and threat detection engine.
 *       Network Firewall supports Suricata version 7.0.3. For information about Suricata,
 *           see the <a href="https://suricata.io/">Suricata website</a> and the
 *           <a href="https://suricata.readthedocs.io/en/suricata-7.0.3/">Suricata User Guide</a>. </p>
 *          <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
 *          The following are just a few examples: </p>
 *          <ul>
 *             <li>
 *                <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and
 *                block all other forms of traffic.</p>
 *             </li>
 *             <li>
 *                <p>Use custom lists of known bad domains to limit the types of domain names that your
 *                applications can access.</p>
 *             </li>
 *             <li>
 *                <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p>
 *             </li>
 *             <li>
 *                <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the
 *                port used.</p>
 *             </li>
 *          </ul>
 *          <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in
 *          Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p>
 *          <p>To start using Network Firewall, do the following: </p>
 *          <ol>
 *             <li>
 *                <p>(Optional) If you don't already have a VPC that you want to protect, create it in
 *                Amazon VPC. </p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a
 *                subnet for the sole use of Network Firewall. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, define the firewall behavior as follows: </p>
 *                <ol>
 *                   <li>
 *                      <p>Create stateless and stateful rule groups,
 *                  to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
 *                   </li>
 *                   <li>
 *                      <p>Create a firewall policy that uses your rule groups and
 *                      specifies additional default traffic filtering behavior. </p>
 *                   </li>
 *                </ol>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create a firewall and specify your new firewall policy and
 *                  VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you
 *                specify, with the behavior that's defined in the firewall policy.</p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall
 *                endpoints.</p>
 *             </li>
 *          </ol>
 *          <p>After your firewall is established, you can add firewall endpoints for new Availability Zones by following the prior steps for the Amazon VPC setup and
 *       firewall subnet definitions. You can also add endpoints to Availability Zones that you're using in the firewall, either for the same VPC
 *           or for another VPC, by following the prior steps for the Amazon VPC setup, and defining the new VPC subnets as VPC endpoint associations. </p>
 * @public
 */
export class NetworkFirewall extends NetworkFirewallClient implements NetworkFirewall {}
createAggregatedClient(commands, NetworkFirewall, { paginators });
