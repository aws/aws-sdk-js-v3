// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

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
  type CreateContainerAssociationCommandInput,
  type CreateContainerAssociationCommandOutput,
  CreateContainerAssociationCommand,
} from "./commands/CreateContainerAssociationCommand";
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
  type CreateFirewallPolicyV2CommandInput,
  type CreateFirewallPolicyV2CommandOutput,
  CreateFirewallPolicyV2Command,
} from "./commands/CreateFirewallPolicyV2Command";
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
  type DeleteContainerAssociationCommandInput,
  type DeleteContainerAssociationCommandOutput,
  DeleteContainerAssociationCommand,
} from "./commands/DeleteContainerAssociationCommand";
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
  type DeleteFirewallPolicyV2CommandInput,
  type DeleteFirewallPolicyV2CommandOutput,
  DeleteFirewallPolicyV2Command,
} from "./commands/DeleteFirewallPolicyV2Command";
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
  type DescribeContainerAssociationCommandInput,
  type DescribeContainerAssociationCommandOutput,
  DescribeContainerAssociationCommand,
} from "./commands/DescribeContainerAssociationCommand";
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
  type DescribeFirewallPolicyV2CommandInput,
  type DescribeFirewallPolicyV2CommandOutput,
  DescribeFirewallPolicyV2Command,
} from "./commands/DescribeFirewallPolicyV2Command";
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
  type ListContainerAssociationsCommandInput,
  type ListContainerAssociationsCommandOutput,
  ListContainerAssociationsCommand,
} from "./commands/ListContainerAssociationsCommand";
import {
  type ListFirewallPoliciesCommandInput,
  type ListFirewallPoliciesCommandOutput,
  ListFirewallPoliciesCommand,
} from "./commands/ListFirewallPoliciesCommand";
import {
  type ListFirewallPoliciesV2CommandInput,
  type ListFirewallPoliciesV2CommandOutput,
  ListFirewallPoliciesV2Command,
} from "./commands/ListFirewallPoliciesV2Command";
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
  type UpdateContainerAssociationCommandInput,
  type UpdateContainerAssociationCommandOutput,
  UpdateContainerAssociationCommand,
} from "./commands/UpdateContainerAssociationCommand";
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
  type UpdateFirewallPolicyV2CommandInput,
  type UpdateFirewallPolicyV2CommandOutput,
  UpdateFirewallPolicyV2Command,
} from "./commands/UpdateFirewallPolicyV2Command";
import {
  type UpdateLoggingConfigurationCommandInput,
  type UpdateLoggingConfigurationCommandOutput,
  UpdateLoggingConfigurationCommand,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  type UpdateProxySettingsCommandInput,
  type UpdateProxySettingsCommandOutput,
  UpdateProxySettingsCommand,
} from "./commands/UpdateProxySettingsCommand";
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
import type { NetworkFirewallServiceException } from "./models/NetworkFirewallServiceException";
import { NetworkFirewallClient } from "./NetworkFirewallClient";
import { paginateGetAnalysisReportResults } from "./pagination/GetAnalysisReportResultsPaginator";
import { paginateListAnalysisReports } from "./pagination/ListAnalysisReportsPaginator";
import { paginateListContainerAssociations } from "./pagination/ListContainerAssociationsPaginator";
import { paginateListFirewallPolicies } from "./pagination/ListFirewallPoliciesPaginator";
import { paginateListFirewallPoliciesV2 } from "./pagination/ListFirewallPoliciesV2Paginator";
import { paginateListFirewalls } from "./pagination/ListFirewallsPaginator";
import { paginateListFlowOperationResults } from "./pagination/ListFlowOperationResultsPaginator";
import { paginateListFlowOperations } from "./pagination/ListFlowOperationsPaginator";
import { paginateListRuleGroups } from "./pagination/ListRuleGroupsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListTLSInspectionConfigurations } from "./pagination/ListTLSInspectionConfigurationsPaginator";
import { paginateListVpcEndpointAssociations } from "./pagination/ListVpcEndpointAssociationsPaginator";
import { waitUntilFirewallPolicyActive } from "./waiters/waitForFirewallPolicyActive";

const commands = {
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
  AssociateAvailabilityZonesCommand,
  AssociateFirewallPolicyCommand,
  AssociateSubnetsCommand,
  CreateContainerAssociationCommand,
  CreateFirewallCommand,
  CreateFirewallPolicyCommand,
  CreateFirewallPolicyV2Command,
  CreateRuleGroupCommand,
  CreateTLSInspectionConfigurationCommand,
  CreateVpcEndpointAssociationCommand,
  DeleteContainerAssociationCommand,
  DeleteFirewallCommand,
  DeleteFirewallPolicyCommand,
  DeleteFirewallPolicyV2Command,
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
  DeleteProxyCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleGroupCommand,
  DeleteTLSInspectionConfigurationCommand,
  DeleteVpcEndpointAssociationCommand,
  DescribeContainerAssociationCommand,
  DescribeFirewallCommand,
  DescribeFirewallMetadataCommand,
  DescribeFirewallPolicyCommand,
  DescribeFirewallPolicyV2Command,
  DescribeFlowOperationCommand,
  DescribeLoggingConfigurationCommand,
  DescribeProxyCommand,
  DescribeResourcePolicyCommand,
  DescribeRuleGroupCommand,
  DescribeRuleGroupMetadataCommand,
  DescribeRuleGroupSummaryCommand,
  DescribeTLSInspectionConfigurationCommand,
  DescribeVpcEndpointAssociationCommand,
  DisassociateAvailabilityZonesCommand,
  DisassociateSubnetsCommand,
  GetAnalysisReportResultsCommand,
  ListAnalysisReportsCommand,
  ListContainerAssociationsCommand,
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesV2Command,
  ListFirewallsCommand,
  ListFlowOperationResultsCommand,
  ListFlowOperationsCommand,
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
  UpdateContainerAssociationCommand,
  UpdateFirewallAnalysisSettingsCommand,
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDescriptionCommand,
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallPolicyCommand,
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateFirewallPolicyV2Command,
  UpdateLoggingConfigurationCommand,
  UpdateProxySettingsCommand,
  UpdateRuleGroupCommand,
  UpdateSubnetChangeProtectionCommand,
  UpdateTLSInspectionConfigurationCommand,
};
const paginators = {
  paginateGetAnalysisReportResults,
  paginateListAnalysisReports,
  paginateListContainerAssociations,
  paginateListFirewallPolicies,
  paginateListFirewallPoliciesV2,
  paginateListFirewalls,
  paginateListFlowOperationResults,
  paginateListFlowOperations,
  paginateListRuleGroups,
  paginateListTagsForResource,
  paginateListTLSInspectionConfigurations,
  paginateListVpcEndpointAssociations,
};
const waiters = {
  waitUntilFirewallPolicyActive,
};

/**
 * @public
 */
export interface NetworkFirewallRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface NetworkFirewall {
  /**
   * @see {@link AcceptNetworkFirewallTransitGatewayAttachmentCommand}
   */
  acceptNetworkFirewallTransitGatewayAttachment(
    args: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput>;
  acceptNetworkFirewallTransitGatewayAttachment(
    args: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    cb: (err: any, data?: AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;
  acceptNetworkFirewallTransitGatewayAttachment(
    args: AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateAvailabilityZonesCommand}
   */
  associateAvailabilityZones(
    args: AssociateAvailabilityZonesCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<AssociateAvailabilityZonesCommandOutput>;
  associateAvailabilityZones(
    args: AssociateAvailabilityZonesCommandInput,
    cb: (err: any, data?: AssociateAvailabilityZonesCommandOutput) => void
  ): void;
  associateAvailabilityZones(
    args: AssociateAvailabilityZonesCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: AssociateAvailabilityZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateFirewallPolicyCommand}
   */
  associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<AssociateFirewallPolicyCommandOutput>;
  associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): void;
  associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSubnetsCommand}
   */
  associateSubnets(
    args: AssociateSubnetsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<AssociateSubnetsCommandOutput>;
  associateSubnets(
    args: AssociateSubnetsCommandInput,
    cb: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): void;
  associateSubnets(
    args: AssociateSubnetsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContainerAssociationCommand}
   */
  createContainerAssociation(
    args: CreateContainerAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateContainerAssociationCommandOutput>;
  createContainerAssociation(
    args: CreateContainerAssociationCommandInput,
    cb: (err: any, data?: CreateContainerAssociationCommandOutput) => void
  ): void;
  createContainerAssociation(
    args: CreateContainerAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateContainerAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallCommand}
   */
  createFirewall(
    args: CreateFirewallCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateFirewallCommandOutput>;
  createFirewall(
    args: CreateFirewallCommandInput,
    cb: (err: any, data?: CreateFirewallCommandOutput) => void
  ): void;
  createFirewall(
    args: CreateFirewallCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallPolicyCommand}
   */
  createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateFirewallPolicyCommandOutput>;
  createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): void;
  createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFirewallPolicyV2Command}
   */
  createFirewallPolicyV2(
    args: CreateFirewallPolicyV2CommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateFirewallPolicyV2CommandOutput>;
  createFirewallPolicyV2(
    args: CreateFirewallPolicyV2CommandInput,
    cb: (err: any, data?: CreateFirewallPolicyV2CommandOutput) => void
  ): void;
  createFirewallPolicyV2(
    args: CreateFirewallPolicyV2CommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateFirewallPolicyV2CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleGroupCommand}
   */
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTLSInspectionConfigurationCommand}
   */
  createTLSInspectionConfiguration(
    args: CreateTLSInspectionConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateTLSInspectionConfigurationCommandOutput>;
  createTLSInspectionConfiguration(
    args: CreateTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: CreateTLSInspectionConfigurationCommandOutput) => void
  ): void;
  createTLSInspectionConfiguration(
    args: CreateTLSInspectionConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointAssociationCommand}
   */
  createVpcEndpointAssociation(
    args: CreateVpcEndpointAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<CreateVpcEndpointAssociationCommandOutput>;
  createVpcEndpointAssociation(
    args: CreateVpcEndpointAssociationCommandInput,
    cb: (err: any, data?: CreateVpcEndpointAssociationCommandOutput) => void
  ): void;
  createVpcEndpointAssociation(
    args: CreateVpcEndpointAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: CreateVpcEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContainerAssociationCommand}
   */
  deleteContainerAssociation(): Promise<DeleteContainerAssociationCommandOutput>;
  deleteContainerAssociation(
    args: DeleteContainerAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteContainerAssociationCommandOutput>;
  deleteContainerAssociation(
    args: DeleteContainerAssociationCommandInput,
    cb: (err: any, data?: DeleteContainerAssociationCommandOutput) => void
  ): void;
  deleteContainerAssociation(
    args: DeleteContainerAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteContainerAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallCommand}
   */
  deleteFirewall(): Promise<DeleteFirewallCommandOutput>;
  deleteFirewall(
    args: DeleteFirewallCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteFirewallCommandOutput>;
  deleteFirewall(
    args: DeleteFirewallCommandInput,
    cb: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): void;
  deleteFirewall(
    args: DeleteFirewallCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallPolicyCommand}
   */
  deleteFirewallPolicy(): Promise<DeleteFirewallPolicyCommandOutput>;
  deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteFirewallPolicyCommandOutput>;
  deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): void;
  deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallPolicyV2Command}
   */
  deleteFirewallPolicyV2(): Promise<DeleteFirewallPolicyV2CommandOutput>;
  deleteFirewallPolicyV2(
    args: DeleteFirewallPolicyV2CommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteFirewallPolicyV2CommandOutput>;
  deleteFirewallPolicyV2(
    args: DeleteFirewallPolicyV2CommandInput,
    cb: (err: any, data?: DeleteFirewallPolicyV2CommandOutput) => void
  ): void;
  deleteFirewallPolicyV2(
    args: DeleteFirewallPolicyV2CommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteFirewallPolicyV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkFirewallTransitGatewayAttachmentCommand}
   */
  deleteNetworkFirewallTransitGatewayAttachment(
    args: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput>;
  deleteNetworkFirewallTransitGatewayAttachment(
    args: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    cb: (err: any, data?: DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;
  deleteNetworkFirewallTransitGatewayAttachment(
    args: DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxyCommand}
   */
  deleteProxy(
    args: DeleteProxyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteProxyCommandOutput>;
  deleteProxy(
    args: DeleteProxyCommandInput,
    cb: (err: any, data?: DeleteProxyCommandOutput) => void
  ): void;
  deleteProxy(
    args: DeleteProxyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleGroupCommand}
   */
  deleteRuleGroup(): Promise<DeleteRuleGroupCommandOutput>;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteRuleGroupCommandOutput>;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTLSInspectionConfigurationCommand}
   */
  deleteTLSInspectionConfiguration(): Promise<DeleteTLSInspectionConfigurationCommandOutput>;
  deleteTLSInspectionConfiguration(
    args: DeleteTLSInspectionConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteTLSInspectionConfigurationCommandOutput>;
  deleteTLSInspectionConfiguration(
    args: DeleteTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: DeleteTLSInspectionConfigurationCommandOutput) => void
  ): void;
  deleteTLSInspectionConfiguration(
    args: DeleteTLSInspectionConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointAssociationCommand}
   */
  deleteVpcEndpointAssociation(
    args: DeleteVpcEndpointAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DeleteVpcEndpointAssociationCommandOutput>;
  deleteVpcEndpointAssociation(
    args: DeleteVpcEndpointAssociationCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointAssociationCommandOutput) => void
  ): void;
  deleteVpcEndpointAssociation(
    args: DeleteVpcEndpointAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DeleteVpcEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContainerAssociationCommand}
   */
  describeContainerAssociation(): Promise<DescribeContainerAssociationCommandOutput>;
  describeContainerAssociation(
    args: DescribeContainerAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeContainerAssociationCommandOutput>;
  describeContainerAssociation(
    args: DescribeContainerAssociationCommandInput,
    cb: (err: any, data?: DescribeContainerAssociationCommandOutput) => void
  ): void;
  describeContainerAssociation(
    args: DescribeContainerAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeContainerAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallCommand}
   */
  describeFirewall(): Promise<DescribeFirewallCommandOutput>;
  describeFirewall(
    args: DescribeFirewallCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeFirewallCommandOutput>;
  describeFirewall(
    args: DescribeFirewallCommandInput,
    cb: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): void;
  describeFirewall(
    args: DescribeFirewallCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallMetadataCommand}
   */
  describeFirewallMetadata(): Promise<DescribeFirewallMetadataCommandOutput>;
  describeFirewallMetadata(
    args: DescribeFirewallMetadataCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeFirewallMetadataCommandOutput>;
  describeFirewallMetadata(
    args: DescribeFirewallMetadataCommandInput,
    cb: (err: any, data?: DescribeFirewallMetadataCommandOutput) => void
  ): void;
  describeFirewallMetadata(
    args: DescribeFirewallMetadataCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeFirewallMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallPolicyCommand}
   */
  describeFirewallPolicy(): Promise<DescribeFirewallPolicyCommandOutput>;
  describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeFirewallPolicyCommandOutput>;
  describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): void;
  describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFirewallPolicyV2Command}
   */
  describeFirewallPolicyV2(): Promise<DescribeFirewallPolicyV2CommandOutput>;
  describeFirewallPolicyV2(
    args: DescribeFirewallPolicyV2CommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeFirewallPolicyV2CommandOutput>;
  describeFirewallPolicyV2(
    args: DescribeFirewallPolicyV2CommandInput,
    cb: (err: any, data?: DescribeFirewallPolicyV2CommandOutput) => void
  ): void;
  describeFirewallPolicyV2(
    args: DescribeFirewallPolicyV2CommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeFirewallPolicyV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowOperationCommand}
   */
  describeFlowOperation(
    args: DescribeFlowOperationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeFlowOperationCommandOutput>;
  describeFlowOperation(
    args: DescribeFlowOperationCommandInput,
    cb: (err: any, data?: DescribeFlowOperationCommandOutput) => void
  ): void;
  describeFlowOperation(
    args: DescribeFlowOperationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeFlowOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingConfigurationCommand}
   */
  describeLoggingConfiguration(): Promise<DescribeLoggingConfigurationCommandOutput>;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeLoggingConfigurationCommandOutput>;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProxyCommand}
   */
  describeProxy(): Promise<DescribeProxyCommandOutput>;
  describeProxy(
    args: DescribeProxyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeProxyCommandOutput>;
  describeProxy(
    args: DescribeProxyCommandInput,
    cb: (err: any, data?: DescribeProxyCommandOutput) => void
  ): void;
  describeProxy(
    args: DescribeProxyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupCommand}
   */
  describeRuleGroup(): Promise<DescribeRuleGroupCommandOutput>;
  describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeRuleGroupCommandOutput>;
  describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): void;
  describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupMetadataCommand}
   */
  describeRuleGroupMetadata(): Promise<DescribeRuleGroupMetadataCommandOutput>;
  describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeRuleGroupMetadataCommandOutput>;
  describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    cb: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): void;
  describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupSummaryCommand}
   */
  describeRuleGroupSummary(): Promise<DescribeRuleGroupSummaryCommandOutput>;
  describeRuleGroupSummary(
    args: DescribeRuleGroupSummaryCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeRuleGroupSummaryCommandOutput>;
  describeRuleGroupSummary(
    args: DescribeRuleGroupSummaryCommandInput,
    cb: (err: any, data?: DescribeRuleGroupSummaryCommandOutput) => void
  ): void;
  describeRuleGroupSummary(
    args: DescribeRuleGroupSummaryCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeRuleGroupSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTLSInspectionConfigurationCommand}
   */
  describeTLSInspectionConfiguration(): Promise<DescribeTLSInspectionConfigurationCommandOutput>;
  describeTLSInspectionConfiguration(
    args: DescribeTLSInspectionConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeTLSInspectionConfigurationCommandOutput>;
  describeTLSInspectionConfiguration(
    args: DescribeTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: DescribeTLSInspectionConfigurationCommandOutput) => void
  ): void;
  describeTLSInspectionConfiguration(
    args: DescribeTLSInspectionConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeTLSInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointAssociationCommand}
   */
  describeVpcEndpointAssociation(
    args: DescribeVpcEndpointAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DescribeVpcEndpointAssociationCommandOutput>;
  describeVpcEndpointAssociation(
    args: DescribeVpcEndpointAssociationCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointAssociationCommandOutput) => void
  ): void;
  describeVpcEndpointAssociation(
    args: DescribeVpcEndpointAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DescribeVpcEndpointAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAvailabilityZonesCommand}
   */
  disassociateAvailabilityZones(
    args: DisassociateAvailabilityZonesCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DisassociateAvailabilityZonesCommandOutput>;
  disassociateAvailabilityZones(
    args: DisassociateAvailabilityZonesCommandInput,
    cb: (err: any, data?: DisassociateAvailabilityZonesCommandOutput) => void
  ): void;
  disassociateAvailabilityZones(
    args: DisassociateAvailabilityZonesCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DisassociateAvailabilityZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSubnetsCommand}
   */
  disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<DisassociateSubnetsCommandOutput>;
  disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): void;
  disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalysisReportResultsCommand}
   */
  getAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<GetAnalysisReportResultsCommandOutput>;
  getAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    cb: (err: any, data?: GetAnalysisReportResultsCommandOutput) => void
  ): void;
  getAnalysisReportResults(
    args: GetAnalysisReportResultsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: GetAnalysisReportResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysisReportsCommand}
   */
  listAnalysisReports(): Promise<ListAnalysisReportsCommandOutput>;
  listAnalysisReports(
    args: ListAnalysisReportsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListAnalysisReportsCommandOutput>;
  listAnalysisReports(
    args: ListAnalysisReportsCommandInput,
    cb: (err: any, data?: ListAnalysisReportsCommandOutput) => void
  ): void;
  listAnalysisReports(
    args: ListAnalysisReportsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListAnalysisReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContainerAssociationsCommand}
   */
  listContainerAssociations(): Promise<ListContainerAssociationsCommandOutput>;
  listContainerAssociations(
    args: ListContainerAssociationsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListContainerAssociationsCommandOutput>;
  listContainerAssociations(
    args: ListContainerAssociationsCommandInput,
    cb: (err: any, data?: ListContainerAssociationsCommandOutput) => void
  ): void;
  listContainerAssociations(
    args: ListContainerAssociationsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListContainerAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallPoliciesCommand}
   */
  listFirewallPolicies(): Promise<ListFirewallPoliciesCommandOutput>;
  listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListFirewallPoliciesCommandOutput>;
  listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): void;
  listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallPoliciesV2Command}
   */
  listFirewallPoliciesV2(): Promise<ListFirewallPoliciesV2CommandOutput>;
  listFirewallPoliciesV2(
    args: ListFirewallPoliciesV2CommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListFirewallPoliciesV2CommandOutput>;
  listFirewallPoliciesV2(
    args: ListFirewallPoliciesV2CommandInput,
    cb: (err: any, data?: ListFirewallPoliciesV2CommandOutput) => void
  ): void;
  listFirewallPoliciesV2(
    args: ListFirewallPoliciesV2CommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListFirewallPoliciesV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListFirewallsCommand}
   */
  listFirewalls(): Promise<ListFirewallsCommandOutput>;
  listFirewalls(
    args: ListFirewallsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListFirewallsCommandOutput>;
  listFirewalls(
    args: ListFirewallsCommandInput,
    cb: (err: any, data?: ListFirewallsCommandOutput) => void
  ): void;
  listFirewalls(
    args: ListFirewallsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListFirewallsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowOperationResultsCommand}
   */
  listFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListFlowOperationResultsCommandOutput>;
  listFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    cb: (err: any, data?: ListFlowOperationResultsCommandOutput) => void
  ): void;
  listFlowOperationResults(
    args: ListFlowOperationResultsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListFlowOperationResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowOperationsCommand}
   */
  listFlowOperations(
    args: ListFlowOperationsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListFlowOperationsCommandOutput>;
  listFlowOperations(
    args: ListFlowOperationsCommandInput,
    cb: (err: any, data?: ListFlowOperationsCommandOutput) => void
  ): void;
  listFlowOperations(
    args: ListFlowOperationsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListFlowOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleGroupsCommand}
   */
  listRuleGroups(): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTLSInspectionConfigurationsCommand}
   */
  listTLSInspectionConfigurations(): Promise<ListTLSInspectionConfigurationsCommandOutput>;
  listTLSInspectionConfigurations(
    args: ListTLSInspectionConfigurationsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListTLSInspectionConfigurationsCommandOutput>;
  listTLSInspectionConfigurations(
    args: ListTLSInspectionConfigurationsCommandInput,
    cb: (err: any, data?: ListTLSInspectionConfigurationsCommandOutput) => void
  ): void;
  listTLSInspectionConfigurations(
    args: ListTLSInspectionConfigurationsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListTLSInspectionConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointAssociationsCommand}
   */
  listVpcEndpointAssociations(): Promise<ListVpcEndpointAssociationsCommandOutput>;
  listVpcEndpointAssociations(
    args: ListVpcEndpointAssociationsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<ListVpcEndpointAssociationsCommandOutput>;
  listVpcEndpointAssociations(
    args: ListVpcEndpointAssociationsCommandInput,
    cb: (err: any, data?: ListVpcEndpointAssociationsCommandOutput) => void
  ): void;
  listVpcEndpointAssociations(
    args: ListVpcEndpointAssociationsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: ListVpcEndpointAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectNetworkFirewallTransitGatewayAttachmentCommand}
   */
  rejectNetworkFirewallTransitGatewayAttachment(
    args: RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<RejectNetworkFirewallTransitGatewayAttachmentCommandOutput>;
  rejectNetworkFirewallTransitGatewayAttachment(
    args: RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    cb: (err: any, data?: RejectNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;
  rejectNetworkFirewallTransitGatewayAttachment(
    args: RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: RejectNetworkFirewallTransitGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAnalysisReportCommand}
   */
  startAnalysisReport(
    args: StartAnalysisReportCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<StartAnalysisReportCommandOutput>;
  startAnalysisReport(
    args: StartAnalysisReportCommandInput,
    cb: (err: any, data?: StartAnalysisReportCommandOutput) => void
  ): void;
  startAnalysisReport(
    args: StartAnalysisReportCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: StartAnalysisReportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowCaptureCommand}
   */
  startFlowCapture(
    args: StartFlowCaptureCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<StartFlowCaptureCommandOutput>;
  startFlowCapture(
    args: StartFlowCaptureCommandInput,
    cb: (err: any, data?: StartFlowCaptureCommandOutput) => void
  ): void;
  startFlowCapture(
    args: StartFlowCaptureCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: StartFlowCaptureCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlowFlushCommand}
   */
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<StartFlowFlushCommandOutput>;
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    cb: (err: any, data?: StartFlowFlushCommandOutput) => void
  ): void;
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: StartFlowFlushCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAvailabilityZoneChangeProtectionCommand}
   */
  updateAvailabilityZoneChangeProtection(
    args: UpdateAvailabilityZoneChangeProtectionCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateAvailabilityZoneChangeProtectionCommandOutput>;
  updateAvailabilityZoneChangeProtection(
    args: UpdateAvailabilityZoneChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateAvailabilityZoneChangeProtectionCommandOutput) => void
  ): void;
  updateAvailabilityZoneChangeProtection(
    args: UpdateAvailabilityZoneChangeProtectionCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateAvailabilityZoneChangeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContainerAssociationCommand}
   */
  updateContainerAssociation(
    args: UpdateContainerAssociationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateContainerAssociationCommandOutput>;
  updateContainerAssociation(
    args: UpdateContainerAssociationCommandInput,
    cb: (err: any, data?: UpdateContainerAssociationCommandOutput) => void
  ): void;
  updateContainerAssociation(
    args: UpdateContainerAssociationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateContainerAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallAnalysisSettingsCommand}
   */
  updateFirewallAnalysisSettings(): Promise<UpdateFirewallAnalysisSettingsCommandOutput>;
  updateFirewallAnalysisSettings(
    args: UpdateFirewallAnalysisSettingsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallAnalysisSettingsCommandOutput>;
  updateFirewallAnalysisSettings(
    args: UpdateFirewallAnalysisSettingsCommandInput,
    cb: (err: any, data?: UpdateFirewallAnalysisSettingsCommandOutput) => void
  ): void;
  updateFirewallAnalysisSettings(
    args: UpdateFirewallAnalysisSettingsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallAnalysisSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallDeleteProtectionCommand}
   */
  updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallDeleteProtectionCommandOutput>;
  updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): void;
  updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallDescriptionCommand}
   */
  updateFirewallDescription(): Promise<UpdateFirewallDescriptionCommandOutput>;
  updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallDescriptionCommandOutput>;
  updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): void;
  updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallEncryptionConfigurationCommand}
   */
  updateFirewallEncryptionConfiguration(): Promise<UpdateFirewallEncryptionConfigurationCommandOutput>;
  updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallEncryptionConfigurationCommandOutput>;
  updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    cb: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): void;
  updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallPolicyCommand}
   */
  updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallPolicyCommandOutput>;
  updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): void;
  updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallPolicyChangeProtectionCommand}
   */
  updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput>;
  updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): void;
  updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFirewallPolicyV2Command}
   */
  updateFirewallPolicyV2(
    args: UpdateFirewallPolicyV2CommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateFirewallPolicyV2CommandOutput>;
  updateFirewallPolicyV2(
    args: UpdateFirewallPolicyV2CommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyV2CommandOutput) => void
  ): void;
  updateFirewallPolicyV2(
    args: UpdateFirewallPolicyV2CommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateFirewallPolicyV2CommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLoggingConfigurationCommand}
   */
  updateLoggingConfiguration(): Promise<UpdateLoggingConfigurationCommandOutput>;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateLoggingConfigurationCommandOutput>;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxySettingsCommand}
   */
  updateProxySettings(): Promise<UpdateProxySettingsCommandOutput>;
  updateProxySettings(
    args: UpdateProxySettingsCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateProxySettingsCommandOutput>;
  updateProxySettings(
    args: UpdateProxySettingsCommandInput,
    cb: (err: any, data?: UpdateProxySettingsCommandOutput) => void
  ): void;
  updateProxySettings(
    args: UpdateProxySettingsCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateProxySettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleGroupCommand}
   */
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubnetChangeProtectionCommand}
   */
  updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateSubnetChangeProtectionCommandOutput>;
  updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): void;
  updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    options: NetworkFirewallRequestOptions,
    cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTLSInspectionConfigurationCommand}
   */
  updateTLSInspectionConfiguration(
    args: UpdateTLSInspectionConfigurationCommandInput,
    options?: NetworkFirewallRequestOptions
  ): Promise<UpdateTLSInspectionConfigurationCommandOutput>;
  updateTLSInspectionConfiguration(
    args: UpdateTLSInspectionConfigurationCommandInput,
    cb: (err: any, data?: UpdateTLSInspectionConfigurationCommandOutput) => void
  ): void;
  updateTLSInspectionConfiguration(
    args: UpdateTLSInspectionConfigurationCommandInput,
    options: NetworkFirewallRequestOptions,
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
   * @see {@link ListContainerAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContainerAssociationsCommandOutput}.
   */
  paginateListContainerAssociations(
    args?: ListContainerAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContainerAssociationsCommandOutput>;

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
   * @see {@link ListFirewallPoliciesV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFirewallPoliciesV2CommandOutput}.
   */
  paginateListFirewallPoliciesV2(
    args?: ListFirewallPoliciesV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFirewallPoliciesV2CommandOutput>;

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

  /**
   * @see {@link DescribeFirewallPolicyCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFirewallPolicyActive(
    args: DescribeFirewallPolicyCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<NetworkFirewall>, "client">
  ): Promise<WaiterResult<DescribeFirewallPolicyCommandOutput>>;
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
 *       Network Firewall supports Suricata version 8.0.3. For information about Suricata,
 *           see the <a href="https://suricata.io/">Suricata website</a> and the
 *           <a href="https://suricata.readthedocs.io/en/suricata-8.0.3/">Suricata User Guide</a>. </p>
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
createAggregatedClient(commands, NetworkFirewall, { paginators, waiters });
