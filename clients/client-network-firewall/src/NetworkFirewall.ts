// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
  AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
  AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput,
} from "./commands/AcceptNetworkFirewallTransitGatewayAttachmentCommand";
import {
  AssociateAvailabilityZonesCommand,
  AssociateAvailabilityZonesCommandInput,
  AssociateAvailabilityZonesCommandOutput,
} from "./commands/AssociateAvailabilityZonesCommand";
import {
  AssociateFirewallPolicyCommand,
  AssociateFirewallPolicyCommandInput,
  AssociateFirewallPolicyCommandOutput,
} from "./commands/AssociateFirewallPolicyCommand";
import {
  AssociateSubnetsCommand,
  AssociateSubnetsCommandInput,
  AssociateSubnetsCommandOutput,
} from "./commands/AssociateSubnetsCommand";
import {
  CreateFirewallCommand,
  CreateFirewallCommandInput,
  CreateFirewallCommandOutput,
} from "./commands/CreateFirewallCommand";
import {
  CreateFirewallPolicyCommand,
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
} from "./commands/CreateFirewallPolicyCommand";
import {
  CreateRuleGroupCommand,
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
} from "./commands/CreateRuleGroupCommand";
import {
  CreateTLSInspectionConfigurationCommand,
  CreateTLSInspectionConfigurationCommandInput,
  CreateTLSInspectionConfigurationCommandOutput,
} from "./commands/CreateTLSInspectionConfigurationCommand";
import {
  CreateVpcEndpointAssociationCommand,
  CreateVpcEndpointAssociationCommandInput,
  CreateVpcEndpointAssociationCommandOutput,
} from "./commands/CreateVpcEndpointAssociationCommand";
import {
  DeleteFirewallCommand,
  DeleteFirewallCommandInput,
  DeleteFirewallCommandOutput,
} from "./commands/DeleteFirewallCommand";
import {
  DeleteFirewallPolicyCommand,
  DeleteFirewallPolicyCommandInput,
  DeleteFirewallPolicyCommandOutput,
} from "./commands/DeleteFirewallPolicyCommand";
import {
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
  DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
  DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput,
} from "./commands/DeleteNetworkFirewallTransitGatewayAttachmentCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRuleGroupCommand,
  DeleteRuleGroupCommandInput,
  DeleteRuleGroupCommandOutput,
} from "./commands/DeleteRuleGroupCommand";
import {
  DeleteTLSInspectionConfigurationCommand,
  DeleteTLSInspectionConfigurationCommandInput,
  DeleteTLSInspectionConfigurationCommandOutput,
} from "./commands/DeleteTLSInspectionConfigurationCommand";
import {
  DeleteVpcEndpointAssociationCommand,
  DeleteVpcEndpointAssociationCommandInput,
  DeleteVpcEndpointAssociationCommandOutput,
} from "./commands/DeleteVpcEndpointAssociationCommand";
import {
  DescribeFirewallCommand,
  DescribeFirewallCommandInput,
  DescribeFirewallCommandOutput,
} from "./commands/DescribeFirewallCommand";
import {
  DescribeFirewallMetadataCommand,
  DescribeFirewallMetadataCommandInput,
  DescribeFirewallMetadataCommandOutput,
} from "./commands/DescribeFirewallMetadataCommand";
import {
  DescribeFirewallPolicyCommand,
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
} from "./commands/DescribeFirewallPolicyCommand";
import {
  DescribeFlowOperationCommand,
  DescribeFlowOperationCommandInput,
  DescribeFlowOperationCommandOutput,
} from "./commands/DescribeFlowOperationCommand";
import {
  DescribeLoggingConfigurationCommand,
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
} from "./commands/DescribeLoggingConfigurationCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeRuleGroupCommand,
  DescribeRuleGroupCommandInput,
  DescribeRuleGroupCommandOutput,
} from "./commands/DescribeRuleGroupCommand";
import {
  DescribeRuleGroupMetadataCommand,
  DescribeRuleGroupMetadataCommandInput,
  DescribeRuleGroupMetadataCommandOutput,
} from "./commands/DescribeRuleGroupMetadataCommand";
import {
  DescribeRuleGroupSummaryCommand,
  DescribeRuleGroupSummaryCommandInput,
  DescribeRuleGroupSummaryCommandOutput,
} from "./commands/DescribeRuleGroupSummaryCommand";
import {
  DescribeTLSInspectionConfigurationCommand,
  DescribeTLSInspectionConfigurationCommandInput,
  DescribeTLSInspectionConfigurationCommandOutput,
} from "./commands/DescribeTLSInspectionConfigurationCommand";
import {
  DescribeVpcEndpointAssociationCommand,
  DescribeVpcEndpointAssociationCommandInput,
  DescribeVpcEndpointAssociationCommandOutput,
} from "./commands/DescribeVpcEndpointAssociationCommand";
import {
  DisassociateAvailabilityZonesCommand,
  DisassociateAvailabilityZonesCommandInput,
  DisassociateAvailabilityZonesCommandOutput,
} from "./commands/DisassociateAvailabilityZonesCommand";
import {
  DisassociateSubnetsCommand,
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
} from "./commands/DisassociateSubnetsCommand";
import {
  GetAnalysisReportResultsCommand,
  GetAnalysisReportResultsCommandInput,
  GetAnalysisReportResultsCommandOutput,
} from "./commands/GetAnalysisReportResultsCommand";
import {
  ListAnalysisReportsCommand,
  ListAnalysisReportsCommandInput,
  ListAnalysisReportsCommandOutput,
} from "./commands/ListAnalysisReportsCommand";
import {
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "./commands/ListFirewallPoliciesCommand";
import {
  ListFirewallsCommand,
  ListFirewallsCommandInput,
  ListFirewallsCommandOutput,
} from "./commands/ListFirewallsCommand";
import {
  ListFlowOperationResultsCommand,
  ListFlowOperationResultsCommandInput,
  ListFlowOperationResultsCommandOutput,
} from "./commands/ListFlowOperationResultsCommand";
import {
  ListFlowOperationsCommand,
  ListFlowOperationsCommandInput,
  ListFlowOperationsCommandOutput,
} from "./commands/ListFlowOperationsCommand";
import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTLSInspectionConfigurationsCommand,
  ListTLSInspectionConfigurationsCommandInput,
  ListTLSInspectionConfigurationsCommandOutput,
} from "./commands/ListTLSInspectionConfigurationsCommand";
import {
  ListVpcEndpointAssociationsCommand,
  ListVpcEndpointAssociationsCommandInput,
  ListVpcEndpointAssociationsCommandOutput,
} from "./commands/ListVpcEndpointAssociationsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RejectNetworkFirewallTransitGatewayAttachmentCommand,
  RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
  RejectNetworkFirewallTransitGatewayAttachmentCommandOutput,
} from "./commands/RejectNetworkFirewallTransitGatewayAttachmentCommand";
import {
  StartAnalysisReportCommand,
  StartAnalysisReportCommandInput,
  StartAnalysisReportCommandOutput,
} from "./commands/StartAnalysisReportCommand";
import {
  StartFlowCaptureCommand,
  StartFlowCaptureCommandInput,
  StartFlowCaptureCommandOutput,
} from "./commands/StartFlowCaptureCommand";
import {
  StartFlowFlushCommand,
  StartFlowFlushCommandInput,
  StartFlowFlushCommandOutput,
} from "./commands/StartFlowFlushCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAvailabilityZoneChangeProtectionCommand,
  UpdateAvailabilityZoneChangeProtectionCommandInput,
  UpdateAvailabilityZoneChangeProtectionCommandOutput,
} from "./commands/UpdateAvailabilityZoneChangeProtectionCommand";
import {
  UpdateFirewallAnalysisSettingsCommand,
  UpdateFirewallAnalysisSettingsCommandInput,
  UpdateFirewallAnalysisSettingsCommandOutput,
} from "./commands/UpdateFirewallAnalysisSettingsCommand";
import {
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDeleteProtectionCommandInput,
  UpdateFirewallDeleteProtectionCommandOutput,
} from "./commands/UpdateFirewallDeleteProtectionCommand";
import {
  UpdateFirewallDescriptionCommand,
  UpdateFirewallDescriptionCommandInput,
  UpdateFirewallDescriptionCommandOutput,
} from "./commands/UpdateFirewallDescriptionCommand";
import {
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallEncryptionConfigurationCommandInput,
  UpdateFirewallEncryptionConfigurationCommandOutput,
} from "./commands/UpdateFirewallEncryptionConfigurationCommand";
import {
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateFirewallPolicyChangeProtectionCommandInput,
  UpdateFirewallPolicyChangeProtectionCommandOutput,
} from "./commands/UpdateFirewallPolicyChangeProtectionCommand";
import {
  UpdateFirewallPolicyCommand,
  UpdateFirewallPolicyCommandInput,
  UpdateFirewallPolicyCommandOutput,
} from "./commands/UpdateFirewallPolicyCommand";
import {
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  UpdateRuleGroupCommand,
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
} from "./commands/UpdateRuleGroupCommand";
import {
  UpdateSubnetChangeProtectionCommand,
  UpdateSubnetChangeProtectionCommandInput,
  UpdateSubnetChangeProtectionCommandOutput,
} from "./commands/UpdateSubnetChangeProtectionCommand";
import {
  UpdateTLSInspectionConfigurationCommand,
  UpdateTLSInspectionConfigurationCommandInput,
  UpdateTLSInspectionConfigurationCommandOutput,
} from "./commands/UpdateTLSInspectionConfigurationCommand";
import { NetworkFirewallClient, NetworkFirewallClientConfig } from "./NetworkFirewallClient";

const commands = {
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
  AssociateAvailabilityZonesCommand,
  AssociateFirewallPolicyCommand,
  AssociateSubnetsCommand,
  CreateFirewallCommand,
  CreateFirewallPolicyCommand,
  CreateRuleGroupCommand,
  CreateTLSInspectionConfigurationCommand,
  CreateVpcEndpointAssociationCommand,
  DeleteFirewallCommand,
  DeleteFirewallPolicyCommand,
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleGroupCommand,
  DeleteTLSInspectionConfigurationCommand,
  DeleteVpcEndpointAssociationCommand,
  DescribeFirewallCommand,
  DescribeFirewallMetadataCommand,
  DescribeFirewallPolicyCommand,
  DescribeFlowOperationCommand,
  DescribeLoggingConfigurationCommand,
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
  ListFirewallPoliciesCommand,
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
  UpdateFirewallAnalysisSettingsCommand,
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDescriptionCommand,
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallPolicyCommand,
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateLoggingConfigurationCommand,
  UpdateRuleGroupCommand,
  UpdateSubnetChangeProtectionCommand,
  UpdateTLSInspectionConfigurationCommand,
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
   * @see {@link CreateFirewallCommand}
   */
  createFirewall(
    args: CreateFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallCommandOutput>;
  createFirewall(args: CreateFirewallCommandInput, cb: (err: any, data?: CreateFirewallCommandOutput) => void): void;
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
   * @see {@link CreateRuleGroupCommand}
   */
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  createRuleGroup(args: CreateRuleGroupCommandInput, cb: (err: any, data?: CreateRuleGroupCommandOutput) => void): void;
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
  deleteFirewall(args: DeleteFirewallCommandInput, cb: (err: any, data?: DeleteFirewallCommandOutput) => void): void;
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
  deleteRuleGroup(args: DeleteRuleGroupCommandInput, cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void): void;
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
  listFirewalls(args: ListFirewallsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallsCommandOutput>;
  listFirewalls(args: ListFirewallsCommandInput, cb: (err: any, data?: ListFirewallsCommandOutput) => void): void;
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
   * @see {@link ListRuleGroupsCommand}
   */
  listRuleGroups(): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(args: ListRuleGroupsCommandInput, cb: (err: any, data?: ListRuleGroupsCommandOutput) => void): void;
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
  startFlowFlush(args: StartFlowFlushCommandInput, cb: (err: any, data?: StartFlowFlushCommandOutput) => void): void;
  startFlowFlush(
    args: StartFlowFlushCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowFlushCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
   * @see {@link UpdateRuleGroupCommand}
   */
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  updateRuleGroup(args: UpdateRuleGroupCommandInput, cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void): void;
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
createAggregatedClient(commands, NetworkFirewall);
