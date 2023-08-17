// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddInstanceFleetCommand,
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput,
} from "./commands/AddInstanceFleetCommand";
import {
  AddInstanceGroupsCommand,
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput,
} from "./commands/AddInstanceGroupsCommand";
import {
  AddJobFlowStepsCommand,
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput,
} from "./commands/AddJobFlowStepsCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelStepsCommand, CancelStepsCommandInput, CancelStepsCommandOutput } from "./commands/CancelStepsCommand";
import {
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import {
  CreateStudioCommand,
  CreateStudioCommandInput,
  CreateStudioCommandOutput,
} from "./commands/CreateStudioCommand";
import {
  CreateStudioSessionMappingCommand,
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
} from "./commands/CreateStudioSessionMappingCommand";
import {
  DeleteSecurityConfigurationCommand,
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import {
  DeleteStudioCommand,
  DeleteStudioCommandInput,
  DeleteStudioCommandOutput,
} from "./commands/DeleteStudioCommand";
import {
  DeleteStudioSessionMappingCommand,
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
} from "./commands/DeleteStudioSessionMappingCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeJobFlowsCommand,
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput,
} from "./commands/DescribeJobFlowsCommand";
import {
  DescribeNotebookExecutionCommand,
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
} from "./commands/DescribeNotebookExecutionCommand";
import {
  DescribeReleaseLabelCommand,
  DescribeReleaseLabelCommandInput,
  DescribeReleaseLabelCommandOutput,
} from "./commands/DescribeReleaseLabelCommand";
import {
  DescribeSecurityConfigurationCommand,
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "./commands/DescribeSecurityConfigurationCommand";
import {
  DescribeStepCommand,
  DescribeStepCommandInput,
  DescribeStepCommandOutput,
} from "./commands/DescribeStepCommand";
import {
  DescribeStudioCommand,
  DescribeStudioCommandInput,
  DescribeStudioCommandOutput,
} from "./commands/DescribeStudioCommand";
import {
  GetAutoTerminationPolicyCommand,
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
} from "./commands/GetAutoTerminationPolicyCommand";
import {
  GetBlockPublicAccessConfigurationCommand,
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "./commands/GetBlockPublicAccessConfigurationCommand";
import {
  GetClusterSessionCredentialsCommand,
  GetClusterSessionCredentialsCommandInput,
  GetClusterSessionCredentialsCommandOutput,
} from "./commands/GetClusterSessionCredentialsCommand";
import {
  GetManagedScalingPolicyCommand,
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
} from "./commands/GetManagedScalingPolicyCommand";
import {
  GetStudioSessionMappingCommand,
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
} from "./commands/GetStudioSessionMappingCommand";
import {
  ListBootstrapActionsCommand,
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "./commands/ListBootstrapActionsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListInstanceFleetsCommand,
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
} from "./commands/ListInstanceFleetsCommand";
import {
  ListInstanceGroupsCommand,
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
} from "./commands/ListInstanceGroupsCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListNotebookExecutionsCommand,
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "./commands/ListNotebookExecutionsCommand";
import {
  ListReleaseLabelsCommand,
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
} from "./commands/ListReleaseLabelsCommand";
import {
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "./commands/ListSecurityConfigurationsCommand";
import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import {
  ListStudioSessionMappingsCommand,
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "./commands/ListStudioSessionMappingsCommand";
import {
  ListSupportedInstanceTypesCommand,
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput,
} from "./commands/ListSupportedInstanceTypesCommand";
import {
  ModifyClusterCommand,
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
} from "./commands/ModifyClusterCommand";
import {
  ModifyInstanceFleetCommand,
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
} from "./commands/ModifyInstanceFleetCommand";
import {
  ModifyInstanceGroupsCommand,
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
} from "./commands/ModifyInstanceGroupsCommand";
import {
  PutAutoScalingPolicyCommand,
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
} from "./commands/PutAutoScalingPolicyCommand";
import {
  PutAutoTerminationPolicyCommand,
  PutAutoTerminationPolicyCommandInput,
  PutAutoTerminationPolicyCommandOutput,
} from "./commands/PutAutoTerminationPolicyCommand";
import {
  PutBlockPublicAccessConfigurationCommand,
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
} from "./commands/PutBlockPublicAccessConfigurationCommand";
import {
  PutManagedScalingPolicyCommand,
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
} from "./commands/PutManagedScalingPolicyCommand";
import {
  RemoveAutoScalingPolicyCommand,
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput,
} from "./commands/RemoveAutoScalingPolicyCommand";
import {
  RemoveAutoTerminationPolicyCommand,
  RemoveAutoTerminationPolicyCommandInput,
  RemoveAutoTerminationPolicyCommandOutput,
} from "./commands/RemoveAutoTerminationPolicyCommand";
import {
  RemoveManagedScalingPolicyCommand,
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
} from "./commands/RemoveManagedScalingPolicyCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { RunJobFlowCommand, RunJobFlowCommandInput, RunJobFlowCommandOutput } from "./commands/RunJobFlowCommand";
import {
  SetTerminationProtectionCommand,
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
} from "./commands/SetTerminationProtectionCommand";
import {
  SetVisibleToAllUsersCommand,
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
} from "./commands/SetVisibleToAllUsersCommand";
import {
  StartNotebookExecutionCommand,
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
} from "./commands/StartNotebookExecutionCommand";
import {
  StopNotebookExecutionCommand,
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
} from "./commands/StopNotebookExecutionCommand";
import {
  TerminateJobFlowsCommand,
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput,
} from "./commands/TerminateJobFlowsCommand";
import {
  UpdateStudioCommand,
  UpdateStudioCommandInput,
  UpdateStudioCommandOutput,
} from "./commands/UpdateStudioCommand";
import {
  UpdateStudioSessionMappingCommand,
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "./commands/UpdateStudioSessionMappingCommand";
import { EMRClient, EMRClientConfig } from "./EMRClient";

const commands = {
  AddInstanceFleetCommand,
  AddInstanceGroupsCommand,
  AddJobFlowStepsCommand,
  AddTagsCommand,
  CancelStepsCommand,
  CreateSecurityConfigurationCommand,
  CreateStudioCommand,
  CreateStudioSessionMappingCommand,
  DeleteSecurityConfigurationCommand,
  DeleteStudioCommand,
  DeleteStudioSessionMappingCommand,
  DescribeClusterCommand,
  DescribeJobFlowsCommand,
  DescribeNotebookExecutionCommand,
  DescribeReleaseLabelCommand,
  DescribeSecurityConfigurationCommand,
  DescribeStepCommand,
  DescribeStudioCommand,
  GetAutoTerminationPolicyCommand,
  GetBlockPublicAccessConfigurationCommand,
  GetClusterSessionCredentialsCommand,
  GetManagedScalingPolicyCommand,
  GetStudioSessionMappingCommand,
  ListBootstrapActionsCommand,
  ListClustersCommand,
  ListInstanceFleetsCommand,
  ListInstanceGroupsCommand,
  ListInstancesCommand,
  ListNotebookExecutionsCommand,
  ListReleaseLabelsCommand,
  ListSecurityConfigurationsCommand,
  ListStepsCommand,
  ListStudiosCommand,
  ListStudioSessionMappingsCommand,
  ListSupportedInstanceTypesCommand,
  ModifyClusterCommand,
  ModifyInstanceFleetCommand,
  ModifyInstanceGroupsCommand,
  PutAutoScalingPolicyCommand,
  PutAutoTerminationPolicyCommand,
  PutBlockPublicAccessConfigurationCommand,
  PutManagedScalingPolicyCommand,
  RemoveAutoScalingPolicyCommand,
  RemoveAutoTerminationPolicyCommand,
  RemoveManagedScalingPolicyCommand,
  RemoveTagsCommand,
  RunJobFlowCommand,
  SetTerminationProtectionCommand,
  SetVisibleToAllUsersCommand,
  StartNotebookExecutionCommand,
  StopNotebookExecutionCommand,
  TerminateJobFlowsCommand,
  UpdateStudioCommand,
  UpdateStudioSessionMappingCommand,
};

export interface EMR {
  /**
   * @see {@link AddInstanceFleetCommand}
   */
  addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddInstanceFleetCommandOutput>;
  addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    cb: (err: any, data?: AddInstanceFleetCommandOutput) => void
  ): void;
  addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddInstanceFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AddInstanceGroupsCommand}
   */
  addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddInstanceGroupsCommandOutput>;
  addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    cb: (err: any, data?: AddInstanceGroupsCommandOutput) => void
  ): void;
  addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddInstanceGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddJobFlowStepsCommand}
   */
  addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddJobFlowStepsCommandOutput>;
  addJobFlowSteps(args: AddJobFlowStepsCommandInput, cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void): void;
  addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelStepsCommand}
   */
  cancelSteps(args: CancelStepsCommandInput, options?: __HttpHandlerOptions): Promise<CancelStepsCommandOutput>;
  cancelSteps(args: CancelStepsCommandInput, cb: (err: any, data?: CancelStepsCommandOutput) => void): void;
  cancelSteps(
    args: CancelStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityConfigurationCommand}
   */
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigurationCommandOutput>;
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStudioCommand}
   */
  createStudio(args: CreateStudioCommandInput, options?: __HttpHandlerOptions): Promise<CreateStudioCommandOutput>;
  createStudio(args: CreateStudioCommandInput, cb: (err: any, data?: CreateStudioCommandOutput) => void): void;
  createStudio(
    args: CreateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStudioSessionMappingCommand}
   */
  createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioSessionMappingCommandOutput>;
  createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    cb: (err: any, data?: CreateStudioSessionMappingCommandOutput) => void
  ): void;
  createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioSessionMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityConfigurationCommand}
   */
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigurationCommandOutput>;
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStudioCommand}
   */
  deleteStudio(args: DeleteStudioCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStudioCommandOutput>;
  deleteStudio(args: DeleteStudioCommandInput, cb: (err: any, data?: DeleteStudioCommandOutput) => void): void;
  deleteStudio(
    args: DeleteStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStudioSessionMappingCommand}
   */
  deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioSessionMappingCommandOutput>;
  deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    cb: (err: any, data?: DeleteStudioSessionMappingCommandOutput) => void
  ): void;
  deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioSessionMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobFlowsCommand}
   */
  describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobFlowsCommandOutput>;
  describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    cb: (err: any, data?: DescribeJobFlowsCommandOutput) => void
  ): void;
  describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotebookExecutionCommand}
   */
  describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotebookExecutionCommandOutput>;
  describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    cb: (err: any, data?: DescribeNotebookExecutionCommandOutput) => void
  ): void;
  describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotebookExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReleaseLabelCommand}
   */
  describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReleaseLabelCommandOutput>;
  describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    cb: (err: any, data?: DescribeReleaseLabelCommandOutput) => void
  ): void;
  describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReleaseLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityConfigurationCommand}
   */
  describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityConfigurationCommandOutput>;
  describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    cb: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void
  ): void;
  describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStepCommand}
   */
  describeStep(args: DescribeStepCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStepCommandOutput>;
  describeStep(args: DescribeStepCommandInput, cb: (err: any, data?: DescribeStepCommandOutput) => void): void;
  describeStep(
    args: DescribeStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStepCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStudioCommand}
   */
  describeStudio(
    args: DescribeStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStudioCommandOutput>;
  describeStudio(args: DescribeStudioCommandInput, cb: (err: any, data?: DescribeStudioCommandOutput) => void): void;
  describeStudio(
    args: DescribeStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoTerminationPolicyCommand}
   */
  getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoTerminationPolicyCommandOutput>;
  getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    cb: (err: any, data?: GetAutoTerminationPolicyCommandOutput) => void
  ): void;
  getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoTerminationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlockPublicAccessConfigurationCommand}
   */
  getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlockPublicAccessConfigurationCommandOutput>;
  getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    cb: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void
  ): void;
  getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterSessionCredentialsCommand}
   */
  getClusterSessionCredentials(
    args: GetClusterSessionCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterSessionCredentialsCommandOutput>;
  getClusterSessionCredentials(
    args: GetClusterSessionCredentialsCommandInput,
    cb: (err: any, data?: GetClusterSessionCredentialsCommandOutput) => void
  ): void;
  getClusterSessionCredentials(
    args: GetClusterSessionCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterSessionCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedScalingPolicyCommand}
   */
  getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedScalingPolicyCommandOutput>;
  getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    cb: (err: any, data?: GetManagedScalingPolicyCommandOutput) => void
  ): void;
  getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStudioSessionMappingCommand}
   */
  getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStudioSessionMappingCommandOutput>;
  getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    cb: (err: any, data?: GetStudioSessionMappingCommandOutput) => void
  ): void;
  getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioSessionMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBootstrapActionsCommand}
   */
  listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBootstrapActionsCommandOutput>;
  listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    cb: (err: any, data?: ListBootstrapActionsCommandOutput) => void
  ): void;
  listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBootstrapActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceFleetsCommand}
   */
  listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceFleetsCommandOutput>;
  listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    cb: (err: any, data?: ListInstanceFleetsCommandOutput) => void
  ): void;
  listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceGroupsCommand}
   */
  listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceGroupsCommandOutput>;
  listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    cb: (err: any, data?: ListInstanceGroupsCommandOutput) => void
  ): void;
  listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotebookExecutionsCommand}
   */
  listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookExecutionsCommandOutput>;
  listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    cb: (err: any, data?: ListNotebookExecutionsCommandOutput) => void
  ): void;
  listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReleaseLabelsCommand}
   */
  listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReleaseLabelsCommandOutput>;
  listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    cb: (err: any, data?: ListReleaseLabelsCommandOutput) => void
  ): void;
  listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReleaseLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityConfigurationsCommand}
   */
  listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityConfigurationsCommandOutput>;
  listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    cb: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void
  ): void;
  listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStepsCommand}
   */
  listSteps(args: ListStepsCommandInput, options?: __HttpHandlerOptions): Promise<ListStepsCommandOutput>;
  listSteps(args: ListStepsCommandInput, cb: (err: any, data?: ListStepsCommandOutput) => void): void;
  listSteps(
    args: ListStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudiosCommand}
   */
  listStudios(args: ListStudiosCommandInput, options?: __HttpHandlerOptions): Promise<ListStudiosCommandOutput>;
  listStudios(args: ListStudiosCommandInput, cb: (err: any, data?: ListStudiosCommandOutput) => void): void;
  listStudios(
    args: ListStudiosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudiosCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudioSessionMappingsCommand}
   */
  listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioSessionMappingsCommandOutput>;
  listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    cb: (err: any, data?: ListStudioSessionMappingsCommandOutput) => void
  ): void;
  listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioSessionMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportedInstanceTypesCommand}
   */
  listSupportedInstanceTypes(
    args: ListSupportedInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedInstanceTypesCommandOutput>;
  listSupportedInstanceTypes(
    args: ListSupportedInstanceTypesCommandInput,
    cb: (err: any, data?: ListSupportedInstanceTypesCommandOutput) => void
  ): void;
  listSupportedInstanceTypes(
    args: ListSupportedInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterCommand}
   */
  modifyCluster(args: ModifyClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterCommandOutput>;
  modifyCluster(args: ModifyClusterCommandInput, cb: (err: any, data?: ModifyClusterCommandOutput) => void): void;
  modifyCluster(
    args: ModifyClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceFleetCommand}
   */
  modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceFleetCommandOutput>;
  modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    cb: (err: any, data?: ModifyInstanceFleetCommandOutput) => void
  ): void;
  modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceGroupsCommand}
   */
  modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceGroupsCommandOutput>;
  modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    cb: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void
  ): void;
  modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAutoScalingPolicyCommand}
   */
  putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAutoScalingPolicyCommandOutput>;
  putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    cb: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void
  ): void;
  putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAutoTerminationPolicyCommand}
   */
  putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAutoTerminationPolicyCommandOutput>;
  putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    cb: (err: any, data?: PutAutoTerminationPolicyCommandOutput) => void
  ): void;
  putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAutoTerminationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBlockPublicAccessConfigurationCommand}
   */
  putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBlockPublicAccessConfigurationCommandOutput>;
  putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    cb: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void
  ): void;
  putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutManagedScalingPolicyCommand}
   */
  putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutManagedScalingPolicyCommandOutput>;
  putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    cb: (err: any, data?: PutManagedScalingPolicyCommandOutput) => void
  ): void;
  putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutManagedScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAutoScalingPolicyCommand}
   */
  removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAutoScalingPolicyCommandOutput>;
  removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    cb: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void
  ): void;
  removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAutoTerminationPolicyCommand}
   */
  removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAutoTerminationPolicyCommandOutput>;
  removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    cb: (err: any, data?: RemoveAutoTerminationPolicyCommandOutput) => void
  ): void;
  removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAutoTerminationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveManagedScalingPolicyCommand}
   */
  removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveManagedScalingPolicyCommandOutput>;
  removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    cb: (err: any, data?: RemoveManagedScalingPolicyCommandOutput) => void
  ): void;
  removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveManagedScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RunJobFlowCommand}
   */
  runJobFlow(args: RunJobFlowCommandInput, options?: __HttpHandlerOptions): Promise<RunJobFlowCommandOutput>;
  runJobFlow(args: RunJobFlowCommandInput, cb: (err: any, data?: RunJobFlowCommandOutput) => void): void;
  runJobFlow(
    args: RunJobFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunJobFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTerminationProtectionCommand}
   */
  setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTerminationProtectionCommandOutput>;
  setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    cb: (err: any, data?: SetTerminationProtectionCommandOutput) => void
  ): void;
  setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTerminationProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link SetVisibleToAllUsersCommand}
   */
  setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVisibleToAllUsersCommandOutput>;
  setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    cb: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void
  ): void;
  setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNotebookExecutionCommand}
   */
  startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNotebookExecutionCommandOutput>;
  startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    cb: (err: any, data?: StartNotebookExecutionCommandOutput) => void
  ): void;
  startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNotebookExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopNotebookExecutionCommand}
   */
  stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopNotebookExecutionCommandOutput>;
  stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    cb: (err: any, data?: StopNotebookExecutionCommandOutput) => void
  ): void;
  stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopNotebookExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateJobFlowsCommand}
   */
  terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateJobFlowsCommandOutput>;
  terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    cb: (err: any, data?: TerminateJobFlowsCommandOutput) => void
  ): void;
  terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateJobFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStudioCommand}
   */
  updateStudio(args: UpdateStudioCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStudioCommandOutput>;
  updateStudio(args: UpdateStudioCommandInput, cb: (err: any, data?: UpdateStudioCommandOutput) => void): void;
  updateStudio(
    args: UpdateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStudioSessionMappingCommand}
   */
  updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioSessionMappingCommandOutput>;
  updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    cb: (err: any, data?: UpdateStudioSessionMappingCommandOutput) => void
  ): void;
  updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioSessionMappingCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of
 *          data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis,
 *          machine learning, scientific simulation, and data warehouse management.</p>
 */
export class EMR extends EMRClient implements EMR {}
createAggregatedClient(commands, EMR);
