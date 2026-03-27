// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AddInstanceFleetCommandInput,
  type AddInstanceFleetCommandOutput,
  AddInstanceFleetCommand,
} from "./commands/AddInstanceFleetCommand";
import {
  type AddInstanceGroupsCommandInput,
  type AddInstanceGroupsCommandOutput,
  AddInstanceGroupsCommand,
} from "./commands/AddInstanceGroupsCommand";
import {
  type AddJobFlowStepsCommandInput,
  type AddJobFlowStepsCommandOutput,
  AddJobFlowStepsCommand,
} from "./commands/AddJobFlowStepsCommand";
import { type AddTagsCommandInput, type AddTagsCommandOutput, AddTagsCommand } from "./commands/AddTagsCommand";
import {
  type CancelStepsCommandInput,
  type CancelStepsCommandOutput,
  CancelStepsCommand,
} from "./commands/CancelStepsCommand";
import {
  type CreatePersistentAppUICommandInput,
  type CreatePersistentAppUICommandOutput,
  CreatePersistentAppUICommand,
} from "./commands/CreatePersistentAppUICommand";
import {
  type CreateSecurityConfigurationCommandInput,
  type CreateSecurityConfigurationCommandOutput,
  CreateSecurityConfigurationCommand,
} from "./commands/CreateSecurityConfigurationCommand";
import {
  type CreateStudioCommandInput,
  type CreateStudioCommandOutput,
  CreateStudioCommand,
} from "./commands/CreateStudioCommand";
import {
  type CreateStudioSessionMappingCommandInput,
  type CreateStudioSessionMappingCommandOutput,
  CreateStudioSessionMappingCommand,
} from "./commands/CreateStudioSessionMappingCommand";
import {
  type DeleteSecurityConfigurationCommandInput,
  type DeleteSecurityConfigurationCommandOutput,
  DeleteSecurityConfigurationCommand,
} from "./commands/DeleteSecurityConfigurationCommand";
import {
  type DeleteStudioCommandInput,
  type DeleteStudioCommandOutput,
  DeleteStudioCommand,
} from "./commands/DeleteStudioCommand";
import {
  type DeleteStudioSessionMappingCommandInput,
  type DeleteStudioSessionMappingCommandOutput,
  DeleteStudioSessionMappingCommand,
} from "./commands/DeleteStudioSessionMappingCommand";
import {
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterCommand,
} from "./commands/DescribeClusterCommand";
import {
  type DescribeJobFlowsCommandInput,
  type DescribeJobFlowsCommandOutput,
  DescribeJobFlowsCommand,
} from "./commands/DescribeJobFlowsCommand";
import {
  type DescribeNotebookExecutionCommandInput,
  type DescribeNotebookExecutionCommandOutput,
  DescribeNotebookExecutionCommand,
} from "./commands/DescribeNotebookExecutionCommand";
import {
  type DescribePersistentAppUICommandInput,
  type DescribePersistentAppUICommandOutput,
  DescribePersistentAppUICommand,
} from "./commands/DescribePersistentAppUICommand";
import {
  type DescribeReleaseLabelCommandInput,
  type DescribeReleaseLabelCommandOutput,
  DescribeReleaseLabelCommand,
} from "./commands/DescribeReleaseLabelCommand";
import {
  type DescribeSecurityConfigurationCommandInput,
  type DescribeSecurityConfigurationCommandOutput,
  DescribeSecurityConfigurationCommand,
} from "./commands/DescribeSecurityConfigurationCommand";
import {
  type DescribeStepCommandInput,
  type DescribeStepCommandOutput,
  DescribeStepCommand,
} from "./commands/DescribeStepCommand";
import {
  type DescribeStudioCommandInput,
  type DescribeStudioCommandOutput,
  DescribeStudioCommand,
} from "./commands/DescribeStudioCommand";
import {
  type GetAutoTerminationPolicyCommandInput,
  type GetAutoTerminationPolicyCommandOutput,
  GetAutoTerminationPolicyCommand,
} from "./commands/GetAutoTerminationPolicyCommand";
import {
  type GetBlockPublicAccessConfigurationCommandInput,
  type GetBlockPublicAccessConfigurationCommandOutput,
  GetBlockPublicAccessConfigurationCommand,
} from "./commands/GetBlockPublicAccessConfigurationCommand";
import {
  type GetClusterSessionCredentialsCommandInput,
  type GetClusterSessionCredentialsCommandOutput,
  GetClusterSessionCredentialsCommand,
} from "./commands/GetClusterSessionCredentialsCommand";
import {
  type GetManagedScalingPolicyCommandInput,
  type GetManagedScalingPolicyCommandOutput,
  GetManagedScalingPolicyCommand,
} from "./commands/GetManagedScalingPolicyCommand";
import {
  type GetOnClusterAppUIPresignedURLCommandInput,
  type GetOnClusterAppUIPresignedURLCommandOutput,
  GetOnClusterAppUIPresignedURLCommand,
} from "./commands/GetOnClusterAppUIPresignedURLCommand";
import {
  type GetPersistentAppUIPresignedURLCommandInput,
  type GetPersistentAppUIPresignedURLCommandOutput,
  GetPersistentAppUIPresignedURLCommand,
} from "./commands/GetPersistentAppUIPresignedURLCommand";
import {
  type GetStudioSessionMappingCommandInput,
  type GetStudioSessionMappingCommandOutput,
  GetStudioSessionMappingCommand,
} from "./commands/GetStudioSessionMappingCommand";
import {
  type ListBootstrapActionsCommandInput,
  type ListBootstrapActionsCommandOutput,
  ListBootstrapActionsCommand,
} from "./commands/ListBootstrapActionsCommand";
import {
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListClustersCommand,
} from "./commands/ListClustersCommand";
import {
  type ListInstanceFleetsCommandInput,
  type ListInstanceFleetsCommandOutput,
  ListInstanceFleetsCommand,
} from "./commands/ListInstanceFleetsCommand";
import {
  type ListInstanceGroupsCommandInput,
  type ListInstanceGroupsCommandOutput,
  ListInstanceGroupsCommand,
} from "./commands/ListInstanceGroupsCommand";
import {
  type ListInstancesCommandInput,
  type ListInstancesCommandOutput,
  ListInstancesCommand,
} from "./commands/ListInstancesCommand";
import {
  type ListNotebookExecutionsCommandInput,
  type ListNotebookExecutionsCommandOutput,
  ListNotebookExecutionsCommand,
} from "./commands/ListNotebookExecutionsCommand";
import {
  type ListReleaseLabelsCommandInput,
  type ListReleaseLabelsCommandOutput,
  ListReleaseLabelsCommand,
} from "./commands/ListReleaseLabelsCommand";
import {
  type ListSecurityConfigurationsCommandInput,
  type ListSecurityConfigurationsCommandOutput,
  ListSecurityConfigurationsCommand,
} from "./commands/ListSecurityConfigurationsCommand";
import { type ListStepsCommandInput, type ListStepsCommandOutput, ListStepsCommand } from "./commands/ListStepsCommand";
import {
  type ListStudiosCommandInput,
  type ListStudiosCommandOutput,
  ListStudiosCommand,
} from "./commands/ListStudiosCommand";
import {
  type ListStudioSessionMappingsCommandInput,
  type ListStudioSessionMappingsCommandOutput,
  ListStudioSessionMappingsCommand,
} from "./commands/ListStudioSessionMappingsCommand";
import {
  type ListSupportedInstanceTypesCommandInput,
  type ListSupportedInstanceTypesCommandOutput,
  ListSupportedInstanceTypesCommand,
} from "./commands/ListSupportedInstanceTypesCommand";
import {
  type ModifyClusterCommandInput,
  type ModifyClusterCommandOutput,
  ModifyClusterCommand,
} from "./commands/ModifyClusterCommand";
import {
  type ModifyInstanceFleetCommandInput,
  type ModifyInstanceFleetCommandOutput,
  ModifyInstanceFleetCommand,
} from "./commands/ModifyInstanceFleetCommand";
import {
  type ModifyInstanceGroupsCommandInput,
  type ModifyInstanceGroupsCommandOutput,
  ModifyInstanceGroupsCommand,
} from "./commands/ModifyInstanceGroupsCommand";
import {
  type PutAutoScalingPolicyCommandInput,
  type PutAutoScalingPolicyCommandOutput,
  PutAutoScalingPolicyCommand,
} from "./commands/PutAutoScalingPolicyCommand";
import {
  type PutAutoTerminationPolicyCommandInput,
  type PutAutoTerminationPolicyCommandOutput,
  PutAutoTerminationPolicyCommand,
} from "./commands/PutAutoTerminationPolicyCommand";
import {
  type PutBlockPublicAccessConfigurationCommandInput,
  type PutBlockPublicAccessConfigurationCommandOutput,
  PutBlockPublicAccessConfigurationCommand,
} from "./commands/PutBlockPublicAccessConfigurationCommand";
import {
  type PutManagedScalingPolicyCommandInput,
  type PutManagedScalingPolicyCommandOutput,
  PutManagedScalingPolicyCommand,
} from "./commands/PutManagedScalingPolicyCommand";
import {
  type RemoveAutoScalingPolicyCommandInput,
  type RemoveAutoScalingPolicyCommandOutput,
  RemoveAutoScalingPolicyCommand,
} from "./commands/RemoveAutoScalingPolicyCommand";
import {
  type RemoveAutoTerminationPolicyCommandInput,
  type RemoveAutoTerminationPolicyCommandOutput,
  RemoveAutoTerminationPolicyCommand,
} from "./commands/RemoveAutoTerminationPolicyCommand";
import {
  type RemoveManagedScalingPolicyCommandInput,
  type RemoveManagedScalingPolicyCommandOutput,
  RemoveManagedScalingPolicyCommand,
} from "./commands/RemoveManagedScalingPolicyCommand";
import {
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RemoveTagsCommand,
} from "./commands/RemoveTagsCommand";
import {
  type RunJobFlowCommandInput,
  type RunJobFlowCommandOutput,
  RunJobFlowCommand,
} from "./commands/RunJobFlowCommand";
import {
  type SetKeepJobFlowAliveWhenNoStepsCommandInput,
  type SetKeepJobFlowAliveWhenNoStepsCommandOutput,
  SetKeepJobFlowAliveWhenNoStepsCommand,
} from "./commands/SetKeepJobFlowAliveWhenNoStepsCommand";
import {
  type SetTerminationProtectionCommandInput,
  type SetTerminationProtectionCommandOutput,
  SetTerminationProtectionCommand,
} from "./commands/SetTerminationProtectionCommand";
import {
  type SetUnhealthyNodeReplacementCommandInput,
  type SetUnhealthyNodeReplacementCommandOutput,
  SetUnhealthyNodeReplacementCommand,
} from "./commands/SetUnhealthyNodeReplacementCommand";
import {
  type SetVisibleToAllUsersCommandInput,
  type SetVisibleToAllUsersCommandOutput,
  SetVisibleToAllUsersCommand,
} from "./commands/SetVisibleToAllUsersCommand";
import {
  type StartNotebookExecutionCommandInput,
  type StartNotebookExecutionCommandOutput,
  StartNotebookExecutionCommand,
} from "./commands/StartNotebookExecutionCommand";
import {
  type StopNotebookExecutionCommandInput,
  type StopNotebookExecutionCommandOutput,
  StopNotebookExecutionCommand,
} from "./commands/StopNotebookExecutionCommand";
import {
  type TerminateJobFlowsCommandInput,
  type TerminateJobFlowsCommandOutput,
  TerminateJobFlowsCommand,
} from "./commands/TerminateJobFlowsCommand";
import {
  type UpdateStudioCommandInput,
  type UpdateStudioCommandOutput,
  UpdateStudioCommand,
} from "./commands/UpdateStudioCommand";
import {
  type UpdateStudioSessionMappingCommandInput,
  type UpdateStudioSessionMappingCommandOutput,
  UpdateStudioSessionMappingCommand,
} from "./commands/UpdateStudioSessionMappingCommand";
import { EMRClient } from "./EMRClient";
import { paginateListBootstrapActions } from "./pagination/ListBootstrapActionsPaginator";
import { paginateListClusters } from "./pagination/ListClustersPaginator";
import { paginateListInstanceFleets } from "./pagination/ListInstanceFleetsPaginator";
import { paginateListInstanceGroups } from "./pagination/ListInstanceGroupsPaginator";
import { paginateListInstances } from "./pagination/ListInstancesPaginator";
import { paginateListNotebookExecutions } from "./pagination/ListNotebookExecutionsPaginator";
import { paginateListReleaseLabels } from "./pagination/ListReleaseLabelsPaginator";
import { paginateListSecurityConfigurations } from "./pagination/ListSecurityConfigurationsPaginator";
import { paginateListSteps } from "./pagination/ListStepsPaginator";
import { paginateListStudioSessionMappings } from "./pagination/ListStudioSessionMappingsPaginator";
import { paginateListStudios } from "./pagination/ListStudiosPaginator";
import { paginateListSupportedInstanceTypes } from "./pagination/ListSupportedInstanceTypesPaginator";
import { waitUntilClusterRunning } from "./waiters/waitForClusterRunning";
import { waitUntilClusterTerminated } from "./waiters/waitForClusterTerminated";
import { waitUntilStepComplete } from "./waiters/waitForStepComplete";

const commands = {
  AddInstanceFleetCommand,
  AddInstanceGroupsCommand,
  AddJobFlowStepsCommand,
  AddTagsCommand,
  CancelStepsCommand,
  CreatePersistentAppUICommand,
  CreateSecurityConfigurationCommand,
  CreateStudioCommand,
  CreateStudioSessionMappingCommand,
  DeleteSecurityConfigurationCommand,
  DeleteStudioCommand,
  DeleteStudioSessionMappingCommand,
  DescribeClusterCommand,
  DescribeJobFlowsCommand,
  DescribeNotebookExecutionCommand,
  DescribePersistentAppUICommand,
  DescribeReleaseLabelCommand,
  DescribeSecurityConfigurationCommand,
  DescribeStepCommand,
  DescribeStudioCommand,
  GetAutoTerminationPolicyCommand,
  GetBlockPublicAccessConfigurationCommand,
  GetClusterSessionCredentialsCommand,
  GetManagedScalingPolicyCommand,
  GetOnClusterAppUIPresignedURLCommand,
  GetPersistentAppUIPresignedURLCommand,
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
  SetKeepJobFlowAliveWhenNoStepsCommand,
  SetTerminationProtectionCommand,
  SetUnhealthyNodeReplacementCommand,
  SetVisibleToAllUsersCommand,
  StartNotebookExecutionCommand,
  StopNotebookExecutionCommand,
  TerminateJobFlowsCommand,
  UpdateStudioCommand,
  UpdateStudioSessionMappingCommand,
};
const paginators = {
  paginateListBootstrapActions,
  paginateListClusters,
  paginateListInstanceFleets,
  paginateListInstanceGroups,
  paginateListInstances,
  paginateListNotebookExecutions,
  paginateListReleaseLabels,
  paginateListSecurityConfigurations,
  paginateListSteps,
  paginateListStudios,
  paginateListStudioSessionMappings,
  paginateListSupportedInstanceTypes,
};
const waiters = {
  waitUntilClusterRunning,
  waitUntilClusterTerminated,
  waitUntilStepComplete,
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
  addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void
  ): void;
  addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsCommandOutput>;
  addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelStepsCommand}
   */
  cancelSteps(
    args: CancelStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelStepsCommandOutput>;
  cancelSteps(
    args: CancelStepsCommandInput,
    cb: (err: any, data?: CancelStepsCommandOutput) => void
  ): void;
  cancelSteps(
    args: CancelStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePersistentAppUICommand}
   */
  createPersistentAppUI(
    args: CreatePersistentAppUICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePersistentAppUICommandOutput>;
  createPersistentAppUI(
    args: CreatePersistentAppUICommandInput,
    cb: (err: any, data?: CreatePersistentAppUICommandOutput) => void
  ): void;
  createPersistentAppUI(
    args: CreatePersistentAppUICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePersistentAppUICommandOutput) => void
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
  createStudio(
    args: CreateStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioCommandOutput>;
  createStudio(
    args: CreateStudioCommandInput,
    cb: (err: any, data?: CreateStudioCommandOutput) => void
  ): void;
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
  deleteStudio(
    args: DeleteStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioCommandOutput>;
  deleteStudio(
    args: DeleteStudioCommandInput,
    cb: (err: any, data?: DeleteStudioCommandOutput) => void
  ): void;
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
  describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobFlowsCommand}
   */
  describeJobFlows(): Promise<DescribeJobFlowsCommandOutput>;
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
   * @see {@link DescribePersistentAppUICommand}
   */
  describePersistentAppUI(
    args: DescribePersistentAppUICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePersistentAppUICommandOutput>;
  describePersistentAppUI(
    args: DescribePersistentAppUICommandInput,
    cb: (err: any, data?: DescribePersistentAppUICommandOutput) => void
  ): void;
  describePersistentAppUI(
    args: DescribePersistentAppUICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePersistentAppUICommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReleaseLabelCommand}
   */
  describeReleaseLabel(): Promise<DescribeReleaseLabelCommandOutput>;
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
  describeStep(
    args: DescribeStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStepCommandOutput>;
  describeStep(
    args: DescribeStepCommandInput,
    cb: (err: any, data?: DescribeStepCommandOutput) => void
  ): void;
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
  describeStudio(
    args: DescribeStudioCommandInput,
    cb: (err: any, data?: DescribeStudioCommandOutput) => void
  ): void;
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
  getBlockPublicAccessConfiguration(): Promise<GetBlockPublicAccessConfigurationCommandOutput>;
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
   * @see {@link GetOnClusterAppUIPresignedURLCommand}
   */
  getOnClusterAppUIPresignedURL(
    args: GetOnClusterAppUIPresignedURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOnClusterAppUIPresignedURLCommandOutput>;
  getOnClusterAppUIPresignedURL(
    args: GetOnClusterAppUIPresignedURLCommandInput,
    cb: (err: any, data?: GetOnClusterAppUIPresignedURLCommandOutput) => void
  ): void;
  getOnClusterAppUIPresignedURL(
    args: GetOnClusterAppUIPresignedURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOnClusterAppUIPresignedURLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPersistentAppUIPresignedURLCommand}
   */
  getPersistentAppUIPresignedURL(
    args: GetPersistentAppUIPresignedURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPersistentAppUIPresignedURLCommandOutput>;
  getPersistentAppUIPresignedURL(
    args: GetPersistentAppUIPresignedURLCommandInput,
    cb: (err: any, data?: GetPersistentAppUIPresignedURLCommandOutput) => void
  ): void;
  getPersistentAppUIPresignedURL(
    args: GetPersistentAppUIPresignedURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPersistentAppUIPresignedURLCommandOutput) => void
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
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
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
  listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotebookExecutionsCommand}
   */
  listNotebookExecutions(): Promise<ListNotebookExecutionsCommandOutput>;
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
  listReleaseLabels(): Promise<ListReleaseLabelsCommandOutput>;
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
  listSecurityConfigurations(): Promise<ListSecurityConfigurationsCommandOutput>;
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
  listSteps(
    args: ListStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStepsCommandOutput>;
  listSteps(
    args: ListStepsCommandInput,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;
  listSteps(
    args: ListStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudiosCommand}
   */
  listStudios(): Promise<ListStudiosCommandOutput>;
  listStudios(
    args: ListStudiosCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudiosCommandOutput>;
  listStudios(
    args: ListStudiosCommandInput,
    cb: (err: any, data?: ListStudiosCommandOutput) => void
  ): void;
  listStudios(
    args: ListStudiosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudiosCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudioSessionMappingsCommand}
   */
  listStudioSessionMappings(): Promise<ListStudioSessionMappingsCommandOutput>;
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
  modifyCluster(
    args: ModifyClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterCommandOutput>;
  modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
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
  modifyInstanceGroups(): Promise<ModifyInstanceGroupsCommandOutput>;
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
  removeTags(
    args: RemoveTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsCommandOutput>;
  removeTags(
    args: RemoveTagsCommandInput,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RunJobFlowCommand}
   */
  runJobFlow(
    args: RunJobFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunJobFlowCommandOutput>;
  runJobFlow(
    args: RunJobFlowCommandInput,
    cb: (err: any, data?: RunJobFlowCommandOutput) => void
  ): void;
  runJobFlow(
    args: RunJobFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunJobFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link SetKeepJobFlowAliveWhenNoStepsCommand}
   */
  setKeepJobFlowAliveWhenNoSteps(
    args: SetKeepJobFlowAliveWhenNoStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetKeepJobFlowAliveWhenNoStepsCommandOutput>;
  setKeepJobFlowAliveWhenNoSteps(
    args: SetKeepJobFlowAliveWhenNoStepsCommandInput,
    cb: (err: any, data?: SetKeepJobFlowAliveWhenNoStepsCommandOutput) => void
  ): void;
  setKeepJobFlowAliveWhenNoSteps(
    args: SetKeepJobFlowAliveWhenNoStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetKeepJobFlowAliveWhenNoStepsCommandOutput) => void
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
   * @see {@link SetUnhealthyNodeReplacementCommand}
   */
  setUnhealthyNodeReplacement(
    args: SetUnhealthyNodeReplacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetUnhealthyNodeReplacementCommandOutput>;
  setUnhealthyNodeReplacement(
    args: SetUnhealthyNodeReplacementCommandInput,
    cb: (err: any, data?: SetUnhealthyNodeReplacementCommandOutput) => void
  ): void;
  setUnhealthyNodeReplacement(
    args: SetUnhealthyNodeReplacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetUnhealthyNodeReplacementCommandOutput) => void
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
  updateStudio(
    args: UpdateStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioCommandOutput>;
  updateStudio(
    args: UpdateStudioCommandInput,
    cb: (err: any, data?: UpdateStudioCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListBootstrapActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBootstrapActionsCommandOutput}.
   */
  paginateListBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBootstrapActionsCommandOutput>;

  /**
   * @see {@link ListClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClustersCommandOutput}.
   */
  paginateListClusters(
    args?: ListClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClustersCommandOutput>;

  /**
   * @see {@link ListInstanceFleetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstanceFleetsCommandOutput}.
   */
  paginateListInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstanceFleetsCommandOutput>;

  /**
   * @see {@link ListInstanceGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstanceGroupsCommandOutput}.
   */
  paginateListInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstanceGroupsCommandOutput>;

  /**
   * @see {@link ListInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstancesCommandOutput}.
   */
  paginateListInstances(
    args: ListInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstancesCommandOutput>;

  /**
   * @see {@link ListNotebookExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotebookExecutionsCommandOutput}.
   */
  paginateListNotebookExecutions(
    args?: ListNotebookExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotebookExecutionsCommandOutput>;

  /**
   * @see {@link ListReleaseLabelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReleaseLabelsCommandOutput}.
   */
  paginateListReleaseLabels(
    args?: ListReleaseLabelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReleaseLabelsCommandOutput>;

  /**
   * @see {@link ListSecurityConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityConfigurationsCommandOutput}.
   */
  paginateListSecurityConfigurations(
    args?: ListSecurityConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityConfigurationsCommandOutput>;

  /**
   * @see {@link ListStepsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStepsCommandOutput}.
   */
  paginateListSteps(
    args: ListStepsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStepsCommandOutput>;

  /**
   * @see {@link ListStudiosCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStudiosCommandOutput}.
   */
  paginateListStudios(
    args?: ListStudiosCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStudiosCommandOutput>;

  /**
   * @see {@link ListStudioSessionMappingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStudioSessionMappingsCommandOutput}.
   */
  paginateListStudioSessionMappings(
    args?: ListStudioSessionMappingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStudioSessionMappingsCommandOutput>;

  /**
   * @see {@link ListSupportedInstanceTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSupportedInstanceTypesCommandOutput}.
   */
  paginateListSupportedInstanceTypes(
    args: ListSupportedInstanceTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSupportedInstanceTypesCommandOutput>;

  /**
   * @see {@link DescribeClusterCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterRunning(
    args: DescribeClusterCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EMR>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeClusterCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterTerminated(
    args: DescribeClusterCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EMR>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeStepCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStepComplete(
    args: DescribeStepCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EMR>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of
 *          data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis,
 *          machine learning, scientific simulation, and data warehouse management.</p>
 * @public
 */
export class EMR extends EMRClient implements EMR {}
createAggregatedClient(commands, EMR, { paginators, waiters });
