// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateSourceNetworkStackCommandInput,
  type AssociateSourceNetworkStackCommandOutput,
  AssociateSourceNetworkStackCommand,
} from "./commands/AssociateSourceNetworkStackCommand";
import {
  type CancelRecoveryPlanExecutionCommandInput,
  type CancelRecoveryPlanExecutionCommandOutput,
  CancelRecoveryPlanExecutionCommand,
} from "./commands/CancelRecoveryPlanExecutionCommand";
import {
  type CreateExtendedSourceServerCommandInput,
  type CreateExtendedSourceServerCommandOutput,
  CreateExtendedSourceServerCommand,
} from "./commands/CreateExtendedSourceServerCommand";
import {
  type CreateLaunchConfigurationTemplateCommandInput,
  type CreateLaunchConfigurationTemplateCommandOutput,
  CreateLaunchConfigurationTemplateCommand,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  type CreateRecoveryPlanCommandInput,
  type CreateRecoveryPlanCommandOutput,
  CreateRecoveryPlanCommand,
} from "./commands/CreateRecoveryPlanCommand";
import {
  type CreateRecoveryPlanStepCommandInput,
  type CreateRecoveryPlanStepCommandOutput,
  CreateRecoveryPlanStepCommand,
} from "./commands/CreateRecoveryPlanStepCommand";
import {
  type CreateReplicationConfigurationTemplateCommandInput,
  type CreateReplicationConfigurationTemplateCommandOutput,
  CreateReplicationConfigurationTemplateCommand,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import {
  type CreateSourceNetworkCommandInput,
  type CreateSourceNetworkCommandOutput,
  CreateSourceNetworkCommand,
} from "./commands/CreateSourceNetworkCommand";
import { type DeleteJobCommandInput, type DeleteJobCommandOutput, DeleteJobCommand } from "./commands/DeleteJobCommand";
import {
  type DeleteLaunchActionCommandInput,
  type DeleteLaunchActionCommandOutput,
  DeleteLaunchActionCommand,
} from "./commands/DeleteLaunchActionCommand";
import {
  type DeleteLaunchConfigurationTemplateCommandInput,
  type DeleteLaunchConfigurationTemplateCommandOutput,
  DeleteLaunchConfigurationTemplateCommand,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import {
  type DeleteRecoveryInstanceCommandInput,
  type DeleteRecoveryInstanceCommandOutput,
  DeleteRecoveryInstanceCommand,
} from "./commands/DeleteRecoveryInstanceCommand";
import {
  type DeleteRecoveryPlanCommandInput,
  type DeleteRecoveryPlanCommandOutput,
  DeleteRecoveryPlanCommand,
} from "./commands/DeleteRecoveryPlanCommand";
import {
  type DeleteRecoveryPlanExecutionCommandInput,
  type DeleteRecoveryPlanExecutionCommandOutput,
  DeleteRecoveryPlanExecutionCommand,
} from "./commands/DeleteRecoveryPlanExecutionCommand";
import {
  type DeleteRecoveryPlanStepCommandInput,
  type DeleteRecoveryPlanStepCommandOutput,
  DeleteRecoveryPlanStepCommand,
} from "./commands/DeleteRecoveryPlanStepCommand";
import {
  type DeleteReplicationConfigurationTemplateCommandInput,
  type DeleteReplicationConfigurationTemplateCommandOutput,
  DeleteReplicationConfigurationTemplateCommand,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import {
  type DeleteSourceNetworkCommandInput,
  type DeleteSourceNetworkCommandOutput,
  DeleteSourceNetworkCommand,
} from "./commands/DeleteSourceNetworkCommand";
import {
  type DeleteSourceServerCommandInput,
  type DeleteSourceServerCommandOutput,
  DeleteSourceServerCommand,
} from "./commands/DeleteSourceServerCommand";
import {
  type DescribeJobLogItemsCommandInput,
  type DescribeJobLogItemsCommandOutput,
  DescribeJobLogItemsCommand,
} from "./commands/DescribeJobLogItemsCommand";
import {
  type DescribeJobsCommandInput,
  type DescribeJobsCommandOutput,
  DescribeJobsCommand,
} from "./commands/DescribeJobsCommand";
import {
  type DescribeLaunchConfigurationTemplatesCommandInput,
  type DescribeLaunchConfigurationTemplatesCommandOutput,
  DescribeLaunchConfigurationTemplatesCommand,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  type DescribeRecoveryInstancesCommandInput,
  type DescribeRecoveryInstancesCommandOutput,
  DescribeRecoveryInstancesCommand,
} from "./commands/DescribeRecoveryInstancesCommand";
import {
  type DescribeRecoverySnapshotsCommandInput,
  type DescribeRecoverySnapshotsCommandOutput,
  DescribeRecoverySnapshotsCommand,
} from "./commands/DescribeRecoverySnapshotsCommand";
import {
  type DescribeReplicationConfigurationTemplatesCommandInput,
  type DescribeReplicationConfigurationTemplatesCommandOutput,
  DescribeReplicationConfigurationTemplatesCommand,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  type DescribeSourceNetworksCommandInput,
  type DescribeSourceNetworksCommandOutput,
  DescribeSourceNetworksCommand,
} from "./commands/DescribeSourceNetworksCommand";
import {
  type DescribeSourceServersCommandInput,
  type DescribeSourceServersCommandOutput,
  DescribeSourceServersCommand,
} from "./commands/DescribeSourceServersCommand";
import {
  type DisconnectRecoveryInstanceCommandInput,
  type DisconnectRecoveryInstanceCommandOutput,
  DisconnectRecoveryInstanceCommand,
} from "./commands/DisconnectRecoveryInstanceCommand";
import {
  type DisconnectSourceServerCommandInput,
  type DisconnectSourceServerCommandOutput,
  DisconnectSourceServerCommand,
} from "./commands/DisconnectSourceServerCommand";
import {
  type ExportSourceNetworkCfnTemplateCommandInput,
  type ExportSourceNetworkCfnTemplateCommandOutput,
  ExportSourceNetworkCfnTemplateCommand,
} from "./commands/ExportSourceNetworkCfnTemplateCommand";
import {
  type GetFailbackReplicationConfigurationCommandInput,
  type GetFailbackReplicationConfigurationCommandOutput,
  GetFailbackReplicationConfigurationCommand,
} from "./commands/GetFailbackReplicationConfigurationCommand";
import {
  type GetLaunchConfigurationCommandInput,
  type GetLaunchConfigurationCommandOutput,
  GetLaunchConfigurationCommand,
} from "./commands/GetLaunchConfigurationCommand";
import {
  type GetRecoveryPlanCommandInput,
  type GetRecoveryPlanCommandOutput,
  GetRecoveryPlanCommand,
} from "./commands/GetRecoveryPlanCommand";
import {
  type GetRecoveryPlanExecutionCommandInput,
  type GetRecoveryPlanExecutionCommandOutput,
  GetRecoveryPlanExecutionCommand,
} from "./commands/GetRecoveryPlanExecutionCommand";
import {
  type GetRecoveryPlanExecutionStepCommandInput,
  type GetRecoveryPlanExecutionStepCommandOutput,
  GetRecoveryPlanExecutionStepCommand,
} from "./commands/GetRecoveryPlanExecutionStepCommand";
import {
  type GetRecoveryPlanStepCommandInput,
  type GetRecoveryPlanStepCommandOutput,
  GetRecoveryPlanStepCommand,
} from "./commands/GetRecoveryPlanStepCommand";
import {
  type GetReplicationConfigurationCommandInput,
  type GetReplicationConfigurationCommandOutput,
  GetReplicationConfigurationCommand,
} from "./commands/GetReplicationConfigurationCommand";
import {
  type InitializeServiceCommandInput,
  type InitializeServiceCommandOutput,
  InitializeServiceCommand,
} from "./commands/InitializeServiceCommand";
import {
  type ListExtensibleSourceServersCommandInput,
  type ListExtensibleSourceServersCommandOutput,
  ListExtensibleSourceServersCommand,
} from "./commands/ListExtensibleSourceServersCommand";
import {
  type ListLaunchActionsCommandInput,
  type ListLaunchActionsCommandOutput,
  ListLaunchActionsCommand,
} from "./commands/ListLaunchActionsCommand";
import {
  type ListRecoveryPlanExecutionsCommandInput,
  type ListRecoveryPlanExecutionsCommandOutput,
  ListRecoveryPlanExecutionsCommand,
} from "./commands/ListRecoveryPlanExecutionsCommand";
import {
  type ListRecoveryPlanExecutionStepsCommandInput,
  type ListRecoveryPlanExecutionStepsCommandOutput,
  ListRecoveryPlanExecutionStepsCommand,
} from "./commands/ListRecoveryPlanExecutionStepsCommand";
import {
  type ListRecoveryPlansCommandInput,
  type ListRecoveryPlansCommandOutput,
  ListRecoveryPlansCommand,
} from "./commands/ListRecoveryPlansCommand";
import {
  type ListRecoveryPlanStepsCommandInput,
  type ListRecoveryPlanStepsCommandOutput,
  ListRecoveryPlanStepsCommand,
} from "./commands/ListRecoveryPlanStepsCommand";
import {
  type ListStagingAccountsCommandInput,
  type ListStagingAccountsCommandOutput,
  ListStagingAccountsCommand,
} from "./commands/ListStagingAccountsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutLaunchActionCommandInput,
  type PutLaunchActionCommandOutput,
  PutLaunchActionCommand,
} from "./commands/PutLaunchActionCommand";
import {
  type ReorderRecoveryPlanStepsCommandInput,
  type ReorderRecoveryPlanStepsCommandOutput,
  ReorderRecoveryPlanStepsCommand,
} from "./commands/ReorderRecoveryPlanStepsCommand";
import {
  type RetryDataReplicationCommandInput,
  type RetryDataReplicationCommandOutput,
  RetryDataReplicationCommand,
} from "./commands/RetryDataReplicationCommand";
import {
  type RetryRecoveryPlanExecutionStepCommandInput,
  type RetryRecoveryPlanExecutionStepCommandOutput,
  RetryRecoveryPlanExecutionStepCommand,
} from "./commands/RetryRecoveryPlanExecutionStepCommand";
import {
  type ReverseReplicationCommandInput,
  type ReverseReplicationCommandOutput,
  ReverseReplicationCommand,
} from "./commands/ReverseReplicationCommand";
import {
  type StartFailbackLaunchCommandInput,
  type StartFailbackLaunchCommandOutput,
  StartFailbackLaunchCommand,
} from "./commands/StartFailbackLaunchCommand";
import {
  type StartRecoveryCommandInput,
  type StartRecoveryCommandOutput,
  StartRecoveryCommand,
} from "./commands/StartRecoveryCommand";
import {
  type StartRecoveryPlanExecutionCommandInput,
  type StartRecoveryPlanExecutionCommandOutput,
  StartRecoveryPlanExecutionCommand,
} from "./commands/StartRecoveryPlanExecutionCommand";
import {
  type StartReplicationCommandInput,
  type StartReplicationCommandOutput,
  StartReplicationCommand,
} from "./commands/StartReplicationCommand";
import {
  type StartSourceNetworkRecoveryCommandInput,
  type StartSourceNetworkRecoveryCommandOutput,
  StartSourceNetworkRecoveryCommand,
} from "./commands/StartSourceNetworkRecoveryCommand";
import {
  type StartSourceNetworkReplicationCommandInput,
  type StartSourceNetworkReplicationCommandOutput,
  StartSourceNetworkReplicationCommand,
} from "./commands/StartSourceNetworkReplicationCommand";
import {
  type StopFailbackCommandInput,
  type StopFailbackCommandOutput,
  StopFailbackCommand,
} from "./commands/StopFailbackCommand";
import {
  type StopReplicationCommandInput,
  type StopReplicationCommandOutput,
  StopReplicationCommand,
} from "./commands/StopReplicationCommand";
import {
  type StopSourceNetworkReplicationCommandInput,
  type StopSourceNetworkReplicationCommandOutput,
  StopSourceNetworkReplicationCommand,
} from "./commands/StopSourceNetworkReplicationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateRecoveryInstancesCommandInput,
  type TerminateRecoveryInstancesCommandOutput,
  TerminateRecoveryInstancesCommand,
} from "./commands/TerminateRecoveryInstancesCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateFailbackReplicationConfigurationCommandInput,
  type UpdateFailbackReplicationConfigurationCommandOutput,
  UpdateFailbackReplicationConfigurationCommand,
} from "./commands/UpdateFailbackReplicationConfigurationCommand";
import {
  type UpdateLaunchConfigurationCommandInput,
  type UpdateLaunchConfigurationCommandOutput,
  UpdateLaunchConfigurationCommand,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  type UpdateLaunchConfigurationTemplateCommandInput,
  type UpdateLaunchConfigurationTemplateCommandOutput,
  UpdateLaunchConfigurationTemplateCommand,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import {
  type UpdateRecoveryPlanCommandInput,
  type UpdateRecoveryPlanCommandOutput,
  UpdateRecoveryPlanCommand,
} from "./commands/UpdateRecoveryPlanCommand";
import {
  type UpdateRecoveryPlanExecutionStepCommandInput,
  type UpdateRecoveryPlanExecutionStepCommandOutput,
  UpdateRecoveryPlanExecutionStepCommand,
} from "./commands/UpdateRecoveryPlanExecutionStepCommand";
import {
  type UpdateRecoveryPlanStepCommandInput,
  type UpdateRecoveryPlanStepCommandOutput,
  UpdateRecoveryPlanStepCommand,
} from "./commands/UpdateRecoveryPlanStepCommand";
import {
  type UpdateReplicationConfigurationCommandInput,
  type UpdateReplicationConfigurationCommandOutput,
  UpdateReplicationConfigurationCommand,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  type UpdateReplicationConfigurationTemplateCommandInput,
  type UpdateReplicationConfigurationTemplateCommandOutput,
  UpdateReplicationConfigurationTemplateCommand,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import { DrsClient } from "./DrsClient";
import { paginateDescribeJobLogItems } from "./pagination/DescribeJobLogItemsPaginator";
import { paginateDescribeJobs } from "./pagination/DescribeJobsPaginator";
import {
  paginateDescribeLaunchConfigurationTemplates,
} from "./pagination/DescribeLaunchConfigurationTemplatesPaginator";
import { paginateDescribeRecoveryInstances } from "./pagination/DescribeRecoveryInstancesPaginator";
import { paginateDescribeRecoverySnapshots } from "./pagination/DescribeRecoverySnapshotsPaginator";
import {
  paginateDescribeReplicationConfigurationTemplates,
} from "./pagination/DescribeReplicationConfigurationTemplatesPaginator";
import { paginateDescribeSourceNetworks } from "./pagination/DescribeSourceNetworksPaginator";
import { paginateDescribeSourceServers } from "./pagination/DescribeSourceServersPaginator";
import { paginateListExtensibleSourceServers } from "./pagination/ListExtensibleSourceServersPaginator";
import { paginateListLaunchActions } from "./pagination/ListLaunchActionsPaginator";
import { paginateListRecoveryPlanExecutions } from "./pagination/ListRecoveryPlanExecutionsPaginator";
import { paginateListRecoveryPlanExecutionSteps } from "./pagination/ListRecoveryPlanExecutionStepsPaginator";
import { paginateListRecoveryPlans } from "./pagination/ListRecoveryPlansPaginator";
import { paginateListRecoveryPlanSteps } from "./pagination/ListRecoveryPlanStepsPaginator";
import { paginateListStagingAccounts } from "./pagination/ListStagingAccountsPaginator";

const commands = {
  AssociateSourceNetworkStackCommand,
  CancelRecoveryPlanExecutionCommand,
  CreateExtendedSourceServerCommand,
  CreateLaunchConfigurationTemplateCommand,
  CreateRecoveryPlanCommand,
  CreateRecoveryPlanStepCommand,
  CreateReplicationConfigurationTemplateCommand,
  CreateSourceNetworkCommand,
  DeleteJobCommand,
  DeleteLaunchActionCommand,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteRecoveryInstanceCommand,
  DeleteRecoveryPlanCommand,
  DeleteRecoveryPlanExecutionCommand,
  DeleteRecoveryPlanStepCommand,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteSourceNetworkCommand,
  DeleteSourceServerCommand,
  DescribeJobLogItemsCommand,
  DescribeJobsCommand,
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeRecoveryInstancesCommand,
  DescribeRecoverySnapshotsCommand,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeSourceNetworksCommand,
  DescribeSourceServersCommand,
  DisconnectRecoveryInstanceCommand,
  DisconnectSourceServerCommand,
  ExportSourceNetworkCfnTemplateCommand,
  GetFailbackReplicationConfigurationCommand,
  GetLaunchConfigurationCommand,
  GetRecoveryPlanCommand,
  GetRecoveryPlanExecutionCommand,
  GetRecoveryPlanExecutionStepCommand,
  GetRecoveryPlanStepCommand,
  GetReplicationConfigurationCommand,
  InitializeServiceCommand,
  ListExtensibleSourceServersCommand,
  ListLaunchActionsCommand,
  ListRecoveryPlanExecutionsCommand,
  ListRecoveryPlanExecutionStepsCommand,
  ListRecoveryPlansCommand,
  ListRecoveryPlanStepsCommand,
  ListStagingAccountsCommand,
  ListTagsForResourceCommand,
  PutLaunchActionCommand,
  ReorderRecoveryPlanStepsCommand,
  RetryDataReplicationCommand,
  RetryRecoveryPlanExecutionStepCommand,
  ReverseReplicationCommand,
  StartFailbackLaunchCommand,
  StartRecoveryCommand,
  StartRecoveryPlanExecutionCommand,
  StartReplicationCommand,
  StartSourceNetworkRecoveryCommand,
  StartSourceNetworkReplicationCommand,
  StopFailbackCommand,
  StopReplicationCommand,
  StopSourceNetworkReplicationCommand,
  TagResourceCommand,
  TerminateRecoveryInstancesCommand,
  UntagResourceCommand,
  UpdateFailbackReplicationConfigurationCommand,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateRecoveryPlanCommand,
  UpdateRecoveryPlanExecutionStepCommand,
  UpdateRecoveryPlanStepCommand,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationTemplateCommand,
};
const paginators = {
  paginateDescribeJobLogItems,
  paginateDescribeJobs,
  paginateDescribeLaunchConfigurationTemplates,
  paginateDescribeRecoveryInstances,
  paginateDescribeRecoverySnapshots,
  paginateDescribeReplicationConfigurationTemplates,
  paginateDescribeSourceNetworks,
  paginateDescribeSourceServers,
  paginateListExtensibleSourceServers,
  paginateListLaunchActions,
  paginateListRecoveryPlanExecutions,
  paginateListRecoveryPlanExecutionSteps,
  paginateListRecoveryPlans,
  paginateListRecoveryPlanSteps,
  paginateListStagingAccounts,
};

/**
 * @public
 */
export interface DrsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Drs {
  /**
   * @see {@link AssociateSourceNetworkStackCommand}
   */
  associateSourceNetworkStack(
    args: AssociateSourceNetworkStackCommandInput,
    options?: DrsRequestOptions
  ): Promise<AssociateSourceNetworkStackCommandOutput>;
  associateSourceNetworkStack(
    args: AssociateSourceNetworkStackCommandInput,
    cb: (err: any, data?: AssociateSourceNetworkStackCommandOutput) => void
  ): void;
  associateSourceNetworkStack(
    args: AssociateSourceNetworkStackCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: AssociateSourceNetworkStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelRecoveryPlanExecutionCommand}
   */
  cancelRecoveryPlanExecution(
    args: CancelRecoveryPlanExecutionCommandInput,
    options?: DrsRequestOptions
  ): Promise<CancelRecoveryPlanExecutionCommandOutput>;
  cancelRecoveryPlanExecution(
    args: CancelRecoveryPlanExecutionCommandInput,
    cb: (err: any, data?: CancelRecoveryPlanExecutionCommandOutput) => void
  ): void;
  cancelRecoveryPlanExecution(
    args: CancelRecoveryPlanExecutionCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CancelRecoveryPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExtendedSourceServerCommand}
   */
  createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    options?: DrsRequestOptions
  ): Promise<CreateExtendedSourceServerCommandOutput>;
  createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    cb: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): void;
  createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchConfigurationTemplateCommand}
   */
  createLaunchConfigurationTemplate(): Promise<CreateLaunchConfigurationTemplateCommandOutput>;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput>;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecoveryPlanCommand}
   */
  createRecoveryPlan(
    args: CreateRecoveryPlanCommandInput,
    options?: DrsRequestOptions
  ): Promise<CreateRecoveryPlanCommandOutput>;
  createRecoveryPlan(
    args: CreateRecoveryPlanCommandInput,
    cb: (err: any, data?: CreateRecoveryPlanCommandOutput) => void
  ): void;
  createRecoveryPlan(
    args: CreateRecoveryPlanCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CreateRecoveryPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecoveryPlanStepCommand}
   */
  createRecoveryPlanStep(
    args: CreateRecoveryPlanStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<CreateRecoveryPlanStepCommandOutput>;
  createRecoveryPlanStep(
    args: CreateRecoveryPlanStepCommandInput,
    cb: (err: any, data?: CreateRecoveryPlanStepCommandOutput) => void
  ): void;
  createRecoveryPlanStep(
    args: CreateRecoveryPlanStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CreateRecoveryPlanStepCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationConfigurationTemplateCommand}
   */
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput>;
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceNetworkCommand}
   */
  createSourceNetwork(
    args: CreateSourceNetworkCommandInput,
    options?: DrsRequestOptions
  ): Promise<CreateSourceNetworkCommandOutput>;
  createSourceNetwork(
    args: CreateSourceNetworkCommandInput,
    cb: (err: any, data?: CreateSourceNetworkCommandOutput) => void
  ): void;
  createSourceNetwork(
    args: CreateSourceNetworkCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: CreateSourceNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(
    args: DeleteJobCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteJobCommandOutput>;
  deleteJob(
    args: DeleteJobCommandInput,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchActionCommand}
   */
  deleteLaunchAction(
    args: DeleteLaunchActionCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteLaunchActionCommandOutput>;
  deleteLaunchAction(
    args: DeleteLaunchActionCommandInput,
    cb: (err: any, data?: DeleteLaunchActionCommandOutput) => void
  ): void;
  deleteLaunchAction(
    args: DeleteLaunchActionCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteLaunchActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchConfigurationTemplateCommand}
   */
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteLaunchConfigurationTemplateCommandOutput>;
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryInstanceCommand}
   */
  deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteRecoveryInstanceCommandOutput>;
  deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    cb: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): void;
  deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryPlanCommand}
   */
  deleteRecoveryPlan(
    args: DeleteRecoveryPlanCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteRecoveryPlanCommandOutput>;
  deleteRecoveryPlan(
    args: DeleteRecoveryPlanCommandInput,
    cb: (err: any, data?: DeleteRecoveryPlanCommandOutput) => void
  ): void;
  deleteRecoveryPlan(
    args: DeleteRecoveryPlanCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteRecoveryPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryPlanExecutionCommand}
   */
  deleteRecoveryPlanExecution(
    args: DeleteRecoveryPlanExecutionCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteRecoveryPlanExecutionCommandOutput>;
  deleteRecoveryPlanExecution(
    args: DeleteRecoveryPlanExecutionCommandInput,
    cb: (err: any, data?: DeleteRecoveryPlanExecutionCommandOutput) => void
  ): void;
  deleteRecoveryPlanExecution(
    args: DeleteRecoveryPlanExecutionCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteRecoveryPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryPlanStepCommand}
   */
  deleteRecoveryPlanStep(
    args: DeleteRecoveryPlanStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteRecoveryPlanStepCommandOutput>;
  deleteRecoveryPlanStep(
    args: DeleteRecoveryPlanStepCommandInput,
    cb: (err: any, data?: DeleteRecoveryPlanStepCommandOutput) => void
  ): void;
  deleteRecoveryPlanStep(
    args: DeleteRecoveryPlanStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteRecoveryPlanStepCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationConfigurationTemplateCommand}
   */
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteReplicationConfigurationTemplateCommandOutput>;
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceNetworkCommand}
   */
  deleteSourceNetwork(
    args: DeleteSourceNetworkCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteSourceNetworkCommandOutput>;
  deleteSourceNetwork(
    args: DeleteSourceNetworkCommandInput,
    cb: (err: any, data?: DeleteSourceNetworkCommandOutput) => void
  ): void;
  deleteSourceNetwork(
    args: DeleteSourceNetworkCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteSourceNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceServerCommand}
   */
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options?: DrsRequestOptions
  ): Promise<DeleteSourceServerCommandOutput>;
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobLogItemsCommand}
   */
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeJobLogItemsCommandOutput>;
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobsCommand}
   */
  describeJobs(): Promise<DescribeJobsCommandOutput>;
  describeJobs(
    args: DescribeJobsCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeJobsCommandOutput>;
  describeJobs(
    args: DescribeJobsCommandInput,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchConfigurationTemplatesCommand}
   */
  describeLaunchConfigurationTemplates(): Promise<DescribeLaunchConfigurationTemplatesCommandOutput>;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeLaunchConfigurationTemplatesCommandOutput>;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecoveryInstancesCommand}
   */
  describeRecoveryInstances(): Promise<DescribeRecoveryInstancesCommandOutput>;
  describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeRecoveryInstancesCommandOutput>;
  describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    cb: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): void;
  describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecoverySnapshotsCommand}
   */
  describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeRecoverySnapshotsCommandOutput>;
  describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    cb: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): void;
  describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationConfigurationTemplatesCommand}
   */
  describeReplicationConfigurationTemplates(): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceNetworksCommand}
   */
  describeSourceNetworks(): Promise<DescribeSourceNetworksCommandOutput>;
  describeSourceNetworks(
    args: DescribeSourceNetworksCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeSourceNetworksCommandOutput>;
  describeSourceNetworks(
    args: DescribeSourceNetworksCommandInput,
    cb: (err: any, data?: DescribeSourceNetworksCommandOutput) => void
  ): void;
  describeSourceNetworks(
    args: DescribeSourceNetworksCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeSourceNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceServersCommand}
   */
  describeSourceServers(): Promise<DescribeSourceServersCommandOutput>;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options?: DrsRequestOptions
  ): Promise<DescribeSourceServersCommandOutput>;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectRecoveryInstanceCommand}
   */
  disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    options?: DrsRequestOptions
  ): Promise<DisconnectRecoveryInstanceCommandOutput>;
  disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    cb: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): void;
  disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectSourceServerCommand}
   */
  disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    options?: DrsRequestOptions
  ): Promise<DisconnectSourceServerCommandOutput>;
  disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    cb: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): void;
  disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportSourceNetworkCfnTemplateCommand}
   */
  exportSourceNetworkCfnTemplate(
    args: ExportSourceNetworkCfnTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<ExportSourceNetworkCfnTemplateCommandOutput>;
  exportSourceNetworkCfnTemplate(
    args: ExportSourceNetworkCfnTemplateCommandInput,
    cb: (err: any, data?: ExportSourceNetworkCfnTemplateCommandOutput) => void
  ): void;
  exportSourceNetworkCfnTemplate(
    args: ExportSourceNetworkCfnTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ExportSourceNetworkCfnTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFailbackReplicationConfigurationCommand}
   */
  getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetFailbackReplicationConfigurationCommandOutput>;
  getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchConfigurationCommand}
   */
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetLaunchConfigurationCommandOutput>;
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPlanCommand}
   */
  getRecoveryPlan(
    args: GetRecoveryPlanCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetRecoveryPlanCommandOutput>;
  getRecoveryPlan(
    args: GetRecoveryPlanCommandInput,
    cb: (err: any, data?: GetRecoveryPlanCommandOutput) => void
  ): void;
  getRecoveryPlan(
    args: GetRecoveryPlanCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetRecoveryPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPlanExecutionCommand}
   */
  getRecoveryPlanExecution(
    args: GetRecoveryPlanExecutionCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetRecoveryPlanExecutionCommandOutput>;
  getRecoveryPlanExecution(
    args: GetRecoveryPlanExecutionCommandInput,
    cb: (err: any, data?: GetRecoveryPlanExecutionCommandOutput) => void
  ): void;
  getRecoveryPlanExecution(
    args: GetRecoveryPlanExecutionCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetRecoveryPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPlanExecutionStepCommand}
   */
  getRecoveryPlanExecutionStep(
    args: GetRecoveryPlanExecutionStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetRecoveryPlanExecutionStepCommandOutput>;
  getRecoveryPlanExecutionStep(
    args: GetRecoveryPlanExecutionStepCommandInput,
    cb: (err: any, data?: GetRecoveryPlanExecutionStepCommandOutput) => void
  ): void;
  getRecoveryPlanExecutionStep(
    args: GetRecoveryPlanExecutionStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetRecoveryPlanExecutionStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPlanStepCommand}
   */
  getRecoveryPlanStep(
    args: GetRecoveryPlanStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetRecoveryPlanStepCommandOutput>;
  getRecoveryPlanStep(
    args: GetRecoveryPlanStepCommandInput,
    cb: (err: any, data?: GetRecoveryPlanStepCommandOutput) => void
  ): void;
  getRecoveryPlanStep(
    args: GetRecoveryPlanStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetRecoveryPlanStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationConfigurationCommand}
   */
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options?: DrsRequestOptions
  ): Promise<GetReplicationConfigurationCommandOutput>;
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link InitializeServiceCommand}
   */
  initializeService(): Promise<InitializeServiceCommandOutput>;
  initializeService(
    args: InitializeServiceCommandInput,
    options?: DrsRequestOptions
  ): Promise<InitializeServiceCommandOutput>;
  initializeService(
    args: InitializeServiceCommandInput,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;
  initializeService(
    args: InitializeServiceCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExtensibleSourceServersCommand}
   */
  listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListExtensibleSourceServersCommandOutput>;
  listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    cb: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): void;
  listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLaunchActionsCommand}
   */
  listLaunchActions(
    args: ListLaunchActionsCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListLaunchActionsCommandOutput>;
  listLaunchActions(
    args: ListLaunchActionsCommandInput,
    cb: (err: any, data?: ListLaunchActionsCommandOutput) => void
  ): void;
  listLaunchActions(
    args: ListLaunchActionsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListLaunchActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPlanExecutionsCommand}
   */
  listRecoveryPlanExecutions(): Promise<ListRecoveryPlanExecutionsCommandOutput>;
  listRecoveryPlanExecutions(
    args: ListRecoveryPlanExecutionsCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListRecoveryPlanExecutionsCommandOutput>;
  listRecoveryPlanExecutions(
    args: ListRecoveryPlanExecutionsCommandInput,
    cb: (err: any, data?: ListRecoveryPlanExecutionsCommandOutput) => void
  ): void;
  listRecoveryPlanExecutions(
    args: ListRecoveryPlanExecutionsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListRecoveryPlanExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPlanExecutionStepsCommand}
   */
  listRecoveryPlanExecutionSteps(
    args: ListRecoveryPlanExecutionStepsCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListRecoveryPlanExecutionStepsCommandOutput>;
  listRecoveryPlanExecutionSteps(
    args: ListRecoveryPlanExecutionStepsCommandInput,
    cb: (err: any, data?: ListRecoveryPlanExecutionStepsCommandOutput) => void
  ): void;
  listRecoveryPlanExecutionSteps(
    args: ListRecoveryPlanExecutionStepsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListRecoveryPlanExecutionStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPlansCommand}
   */
  listRecoveryPlans(): Promise<ListRecoveryPlansCommandOutput>;
  listRecoveryPlans(
    args: ListRecoveryPlansCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListRecoveryPlansCommandOutput>;
  listRecoveryPlans(
    args: ListRecoveryPlansCommandInput,
    cb: (err: any, data?: ListRecoveryPlansCommandOutput) => void
  ): void;
  listRecoveryPlans(
    args: ListRecoveryPlansCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListRecoveryPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPlanStepsCommand}
   */
  listRecoveryPlanSteps(
    args: ListRecoveryPlanStepsCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListRecoveryPlanStepsCommandOutput>;
  listRecoveryPlanSteps(
    args: ListRecoveryPlanStepsCommandInput,
    cb: (err: any, data?: ListRecoveryPlanStepsCommandOutput) => void
  ): void;
  listRecoveryPlanSteps(
    args: ListRecoveryPlanStepsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListRecoveryPlanStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStagingAccountsCommand}
   */
  listStagingAccounts(): Promise<ListStagingAccountsCommandOutput>;
  listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListStagingAccountsCommandOutput>;
  listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    cb: (err: any, data?: ListStagingAccountsCommandOutput) => void
  ): void;
  listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListStagingAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: DrsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLaunchActionCommand}
   */
  putLaunchAction(
    args: PutLaunchActionCommandInput,
    options?: DrsRequestOptions
  ): Promise<PutLaunchActionCommandOutput>;
  putLaunchAction(
    args: PutLaunchActionCommandInput,
    cb: (err: any, data?: PutLaunchActionCommandOutput) => void
  ): void;
  putLaunchAction(
    args: PutLaunchActionCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: PutLaunchActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ReorderRecoveryPlanStepsCommand}
   */
  reorderRecoveryPlanSteps(
    args: ReorderRecoveryPlanStepsCommandInput,
    options?: DrsRequestOptions
  ): Promise<ReorderRecoveryPlanStepsCommandOutput>;
  reorderRecoveryPlanSteps(
    args: ReorderRecoveryPlanStepsCommandInput,
    cb: (err: any, data?: ReorderRecoveryPlanStepsCommandOutput) => void
  ): void;
  reorderRecoveryPlanSteps(
    args: ReorderRecoveryPlanStepsCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ReorderRecoveryPlanStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryDataReplicationCommand}
   */
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options?: DrsRequestOptions
  ): Promise<RetryDataReplicationCommandOutput>;
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryRecoveryPlanExecutionStepCommand}
   */
  retryRecoveryPlanExecutionStep(
    args: RetryRecoveryPlanExecutionStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<RetryRecoveryPlanExecutionStepCommandOutput>;
  retryRecoveryPlanExecutionStep(
    args: RetryRecoveryPlanExecutionStepCommandInput,
    cb: (err: any, data?: RetryRecoveryPlanExecutionStepCommandOutput) => void
  ): void;
  retryRecoveryPlanExecutionStep(
    args: RetryRecoveryPlanExecutionStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: RetryRecoveryPlanExecutionStepCommandOutput) => void
  ): void;

  /**
   * @see {@link ReverseReplicationCommand}
   */
  reverseReplication(
    args: ReverseReplicationCommandInput,
    options?: DrsRequestOptions
  ): Promise<ReverseReplicationCommandOutput>;
  reverseReplication(
    args: ReverseReplicationCommandInput,
    cb: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): void;
  reverseReplication(
    args: ReverseReplicationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFailbackLaunchCommand}
   */
  startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    options?: DrsRequestOptions
  ): Promise<StartFailbackLaunchCommandOutput>;
  startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    cb: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): void;
  startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRecoveryCommand}
   */
  startRecovery(
    args: StartRecoveryCommandInput,
    options?: DrsRequestOptions
  ): Promise<StartRecoveryCommandOutput>;
  startRecovery(
    args: StartRecoveryCommandInput,
    cb: (err: any, data?: StartRecoveryCommandOutput) => void
  ): void;
  startRecovery(
    args: StartRecoveryCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StartRecoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRecoveryPlanExecutionCommand}
   */
  startRecoveryPlanExecution(
    args: StartRecoveryPlanExecutionCommandInput,
    options?: DrsRequestOptions
  ): Promise<StartRecoveryPlanExecutionCommandOutput>;
  startRecoveryPlanExecution(
    args: StartRecoveryPlanExecutionCommandInput,
    cb: (err: any, data?: StartRecoveryPlanExecutionCommandOutput) => void
  ): void;
  startRecoveryPlanExecution(
    args: StartRecoveryPlanExecutionCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StartRecoveryPlanExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationCommand}
   */
  startReplication(
    args: StartReplicationCommandInput,
    options?: DrsRequestOptions
  ): Promise<StartReplicationCommandOutput>;
  startReplication(
    args: StartReplicationCommandInput,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;
  startReplication(
    args: StartReplicationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSourceNetworkRecoveryCommand}
   */
  startSourceNetworkRecovery(
    args: StartSourceNetworkRecoveryCommandInput,
    options?: DrsRequestOptions
  ): Promise<StartSourceNetworkRecoveryCommandOutput>;
  startSourceNetworkRecovery(
    args: StartSourceNetworkRecoveryCommandInput,
    cb: (err: any, data?: StartSourceNetworkRecoveryCommandOutput) => void
  ): void;
  startSourceNetworkRecovery(
    args: StartSourceNetworkRecoveryCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StartSourceNetworkRecoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSourceNetworkReplicationCommand}
   */
  startSourceNetworkReplication(
    args: StartSourceNetworkReplicationCommandInput,
    options?: DrsRequestOptions
  ): Promise<StartSourceNetworkReplicationCommandOutput>;
  startSourceNetworkReplication(
    args: StartSourceNetworkReplicationCommandInput,
    cb: (err: any, data?: StartSourceNetworkReplicationCommandOutput) => void
  ): void;
  startSourceNetworkReplication(
    args: StartSourceNetworkReplicationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StartSourceNetworkReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFailbackCommand}
   */
  stopFailback(
    args: StopFailbackCommandInput,
    options?: DrsRequestOptions
  ): Promise<StopFailbackCommandOutput>;
  stopFailback(
    args: StopFailbackCommandInput,
    cb: (err: any, data?: StopFailbackCommandOutput) => void
  ): void;
  stopFailback(
    args: StopFailbackCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StopFailbackCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationCommand}
   */
  stopReplication(
    args: StopReplicationCommandInput,
    options?: DrsRequestOptions
  ): Promise<StopReplicationCommandOutput>;
  stopReplication(
    args: StopReplicationCommandInput,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;
  stopReplication(
    args: StopReplicationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSourceNetworkReplicationCommand}
   */
  stopSourceNetworkReplication(
    args: StopSourceNetworkReplicationCommandInput,
    options?: DrsRequestOptions
  ): Promise<StopSourceNetworkReplicationCommandOutput>;
  stopSourceNetworkReplication(
    args: StopSourceNetworkReplicationCommandInput,
    cb: (err: any, data?: StopSourceNetworkReplicationCommandOutput) => void
  ): void;
  stopSourceNetworkReplication(
    args: StopSourceNetworkReplicationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: StopSourceNetworkReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: DrsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateRecoveryInstancesCommand}
   */
  terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    options?: DrsRequestOptions
  ): Promise<TerminateRecoveryInstancesCommandOutput>;
  terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    cb: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
  ): void;
  terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: DrsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFailbackReplicationConfigurationCommand}
   */
  updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateFailbackReplicationConfigurationCommandOutput>;
  updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchConfigurationCommand}
   */
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateLaunchConfigurationCommandOutput>;
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchConfigurationTemplateCommand}
   */
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateLaunchConfigurationTemplateCommandOutput>;
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecoveryPlanCommand}
   */
  updateRecoveryPlan(
    args: UpdateRecoveryPlanCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateRecoveryPlanCommandOutput>;
  updateRecoveryPlan(
    args: UpdateRecoveryPlanCommandInput,
    cb: (err: any, data?: UpdateRecoveryPlanCommandOutput) => void
  ): void;
  updateRecoveryPlan(
    args: UpdateRecoveryPlanCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateRecoveryPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecoveryPlanExecutionStepCommand}
   */
  updateRecoveryPlanExecutionStep(
    args: UpdateRecoveryPlanExecutionStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateRecoveryPlanExecutionStepCommandOutput>;
  updateRecoveryPlanExecutionStep(
    args: UpdateRecoveryPlanExecutionStepCommandInput,
    cb: (err: any, data?: UpdateRecoveryPlanExecutionStepCommandOutput) => void
  ): void;
  updateRecoveryPlanExecutionStep(
    args: UpdateRecoveryPlanExecutionStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateRecoveryPlanExecutionStepCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecoveryPlanStepCommand}
   */
  updateRecoveryPlanStep(
    args: UpdateRecoveryPlanStepCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateRecoveryPlanStepCommandOutput>;
  updateRecoveryPlanStep(
    args: UpdateRecoveryPlanStepCommandInput,
    cb: (err: any, data?: UpdateRecoveryPlanStepCommandOutput) => void
  ): void;
  updateRecoveryPlanStep(
    args: UpdateRecoveryPlanStepCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateRecoveryPlanStepCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationConfigurationCommand}
   */
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateReplicationConfigurationCommandOutput>;
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationConfigurationTemplateCommand}
   */
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options?: DrsRequestOptions
  ): Promise<UpdateReplicationConfigurationTemplateCommandOutput>;
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options: DrsRequestOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobLogItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeJobLogItemsCommandOutput}.
   */
  paginateDescribeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeJobLogItemsCommandOutput>;

  /**
   * @see {@link DescribeJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeJobsCommandOutput}.
   */
  paginateDescribeJobs(
    args?: DescribeJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeJobsCommandOutput>;

  /**
   * @see {@link DescribeLaunchConfigurationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLaunchConfigurationTemplatesCommandOutput}.
   */
  paginateDescribeLaunchConfigurationTemplates(
    args?: DescribeLaunchConfigurationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLaunchConfigurationTemplatesCommandOutput>;

  /**
   * @see {@link DescribeRecoveryInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRecoveryInstancesCommandOutput}.
   */
  paginateDescribeRecoveryInstances(
    args?: DescribeRecoveryInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRecoveryInstancesCommandOutput>;

  /**
   * @see {@link DescribeRecoverySnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRecoverySnapshotsCommandOutput}.
   */
  paginateDescribeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRecoverySnapshotsCommandOutput>;

  /**
   * @see {@link DescribeReplicationConfigurationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReplicationConfigurationTemplatesCommandOutput}.
   */
  paginateDescribeReplicationConfigurationTemplates(
    args?: DescribeReplicationConfigurationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReplicationConfigurationTemplatesCommandOutput>;

  /**
   * @see {@link DescribeSourceNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSourceNetworksCommandOutput}.
   */
  paginateDescribeSourceNetworks(
    args?: DescribeSourceNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSourceNetworksCommandOutput>;

  /**
   * @see {@link DescribeSourceServersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSourceServersCommandOutput}.
   */
  paginateDescribeSourceServers(
    args?: DescribeSourceServersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSourceServersCommandOutput>;

  /**
   * @see {@link ListExtensibleSourceServersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExtensibleSourceServersCommandOutput}.
   */
  paginateListExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExtensibleSourceServersCommandOutput>;

  /**
   * @see {@link ListLaunchActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLaunchActionsCommandOutput}.
   */
  paginateListLaunchActions(
    args: ListLaunchActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLaunchActionsCommandOutput>;

  /**
   * @see {@link ListRecoveryPlanExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPlanExecutionsCommandOutput}.
   */
  paginateListRecoveryPlanExecutions(
    args?: ListRecoveryPlanExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPlanExecutionsCommandOutput>;

  /**
   * @see {@link ListRecoveryPlanExecutionStepsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPlanExecutionStepsCommandOutput}.
   */
  paginateListRecoveryPlanExecutionSteps(
    args: ListRecoveryPlanExecutionStepsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPlanExecutionStepsCommandOutput>;

  /**
   * @see {@link ListRecoveryPlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPlansCommandOutput}.
   */
  paginateListRecoveryPlans(
    args?: ListRecoveryPlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPlansCommandOutput>;

  /**
   * @see {@link ListRecoveryPlanStepsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPlanStepsCommandOutput}.
   */
  paginateListRecoveryPlanSteps(
    args: ListRecoveryPlanStepsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPlanStepsCommandOutput>;

  /**
   * @see {@link ListStagingAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStagingAccountsCommandOutput}.
   */
  paginateListStagingAccounts(
    args?: ListStagingAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStagingAccountsCommandOutput>;
}

/**
 * <p>AWS Elastic Disaster Recovery Service.</p>
 * @public
 */
export class Drs extends DrsClient implements Drs {}
createAggregatedClient(commands, Drs, { paginators });
