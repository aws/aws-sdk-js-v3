// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateExtendedSourceServerCommand,
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
} from "./commands/CreateExtendedSourceServerCommand";
import {
  CreateLaunchConfigurationTemplateCommand,
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteLaunchConfigurationTemplateCommand,
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteRecoveryInstanceCommand,
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "./commands/DeleteRecoveryInstanceCommand";
import {
  DeleteReplicationConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import {
  DeleteSourceServerCommand,
  DeleteSourceServerCommandInput,
  DeleteSourceServerCommandOutput,
} from "./commands/DeleteSourceServerCommand";
import {
  DescribeJobLogItemsCommand,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "./commands/DescribeJobsCommand";
import {
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  DescribeRecoveryInstancesCommand,
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "./commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommand,
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "./commands/DescribeRecoverySnapshotsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommand,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DisconnectRecoveryInstanceCommand,
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "./commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommand,
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "./commands/DisconnectSourceServerCommand";
import {
  GetFailbackReplicationConfigurationCommand,
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "./commands/GetFailbackReplicationConfigurationCommand";
import {
  GetLaunchConfigurationCommand,
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommand,
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import {
  InitializeServiceCommand,
  InitializeServiceCommandInput,
  InitializeServiceCommandOutput,
} from "./commands/InitializeServiceCommand";
import {
  ListExtensibleSourceServersCommand,
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "./commands/ListExtensibleSourceServersCommand";
import {
  ListStagingAccountsCommand,
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "./commands/ListStagingAccountsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RetryDataReplicationCommand,
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import {
  ReverseReplicationCommand,
  ReverseReplicationCommandInput,
  ReverseReplicationCommandOutput,
} from "./commands/ReverseReplicationCommand";
import {
  StartFailbackLaunchCommand,
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "./commands/StartFailbackLaunchCommand";
import {
  StartRecoveryCommand,
  StartRecoveryCommandInput,
  StartRecoveryCommandOutput,
} from "./commands/StartRecoveryCommand";
import {
  StartReplicationCommand,
  StartReplicationCommandInput,
  StartReplicationCommandOutput,
} from "./commands/StartReplicationCommand";
import {
  StopFailbackCommand,
  StopFailbackCommandInput,
  StopFailbackCommandOutput,
} from "./commands/StopFailbackCommand";
import {
  StopReplicationCommand,
  StopReplicationCommandInput,
  StopReplicationCommandOutput,
} from "./commands/StopReplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommand,
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "./commands/TerminateRecoveryInstancesCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommand,
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "./commands/UpdateFailbackReplicationConfigurationCommand";
import {
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommand,
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import {
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommand,
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import { DrsClient, DrsClientConfig } from "./DrsClient";

const commands = {
  CreateExtendedSourceServerCommand,
  CreateLaunchConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommand,
  DeleteJobCommand,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteRecoveryInstanceCommand,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteSourceServerCommand,
  DescribeJobLogItemsCommand,
  DescribeJobsCommand,
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeRecoveryInstancesCommand,
  DescribeRecoverySnapshotsCommand,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeSourceServersCommand,
  DisconnectRecoveryInstanceCommand,
  DisconnectSourceServerCommand,
  GetFailbackReplicationConfigurationCommand,
  GetLaunchConfigurationCommand,
  GetReplicationConfigurationCommand,
  InitializeServiceCommand,
  ListExtensibleSourceServersCommand,
  ListStagingAccountsCommand,
  ListTagsForResourceCommand,
  RetryDataReplicationCommand,
  ReverseReplicationCommand,
  StartFailbackLaunchCommand,
  StartRecoveryCommand,
  StartReplicationCommand,
  StopFailbackCommand,
  StopReplicationCommand,
  TagResourceCommand,
  TerminateRecoveryInstancesCommand,
  UntagResourceCommand,
  UpdateFailbackReplicationConfigurationCommand,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationTemplateCommand,
};

export interface Drs {
  /**
   * @see {@link CreateExtendedSourceServerCommand}
   */
  createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtendedSourceServerCommandOutput>;
  createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    cb: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): void;
  createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchConfigurationTemplateCommand}
   */
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput>;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationConfigurationTemplateCommand}
   */
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput>;
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchConfigurationTemplateCommand}
   */
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchConfigurationTemplateCommandOutput>;
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryInstanceCommand}
   */
  deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecoveryInstanceCommandOutput>;
  deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    cb: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): void;
  deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationConfigurationTemplateCommand}
   */
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationConfigurationTemplateCommandOutput>;
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceServerCommand}
   */
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceServerCommandOutput>;
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobLogItemsCommand}
   */
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobLogItemsCommandOutput>;
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobsCommand}
   */
  describeJobs(args: DescribeJobsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobsCommandOutput>;
  describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchConfigurationTemplatesCommand}
   */
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchConfigurationTemplatesCommandOutput>;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecoveryInstancesCommand}
   */
  describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecoveryInstancesCommandOutput>;
  describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    cb: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): void;
  describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecoverySnapshotsCommand}
   */
  describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecoverySnapshotsCommandOutput>;
  describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    cb: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): void;
  describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationConfigurationTemplatesCommand}
   */
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceServersCommand}
   */
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceServersCommandOutput>;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectRecoveryInstanceCommand}
   */
  disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectRecoveryInstanceCommandOutput>;
  disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    cb: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): void;
  disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectSourceServerCommand}
   */
  disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectSourceServerCommandOutput>;
  disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    cb: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): void;
  disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFailbackReplicationConfigurationCommand}
   */
  getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFailbackReplicationConfigurationCommandOutput>;
  getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchConfigurationCommand}
   */
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchConfigurationCommandOutput>;
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationConfigurationCommand}
   */
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationConfigurationCommandOutput>;
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link InitializeServiceCommand}
   */
  initializeService(
    args: InitializeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitializeServiceCommandOutput>;
  initializeService(
    args: InitializeServiceCommandInput,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;
  initializeService(
    args: InitializeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExtensibleSourceServersCommand}
   */
  listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensibleSourceServersCommandOutput>;
  listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    cb: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): void;
  listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStagingAccountsCommand}
   */
  listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStagingAccountsCommandOutput>;
  listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    cb: (err: any, data?: ListStagingAccountsCommandOutput) => void
  ): void;
  listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagingAccountsCommandOutput) => void
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
   * @see {@link RetryDataReplicationCommand}
   */
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryDataReplicationCommandOutput>;
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReverseReplicationCommand}
   */
  reverseReplication(
    args: ReverseReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReverseReplicationCommandOutput>;
  reverseReplication(
    args: ReverseReplicationCommandInput,
    cb: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): void;
  reverseReplication(
    args: ReverseReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFailbackLaunchCommand}
   */
  startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFailbackLaunchCommandOutput>;
  startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    cb: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): void;
  startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRecoveryCommand}
   */
  startRecovery(args: StartRecoveryCommandInput, options?: __HttpHandlerOptions): Promise<StartRecoveryCommandOutput>;
  startRecovery(args: StartRecoveryCommandInput, cb: (err: any, data?: StartRecoveryCommandOutput) => void): void;
  startRecovery(
    args: StartRecoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationCommand}
   */
  startReplication(
    args: StartReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationCommandOutput>;
  startReplication(
    args: StartReplicationCommandInput,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;
  startReplication(
    args: StartReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFailbackCommand}
   */
  stopFailback(args: StopFailbackCommandInput, options?: __HttpHandlerOptions): Promise<StopFailbackCommandOutput>;
  stopFailback(args: StopFailbackCommandInput, cb: (err: any, data?: StopFailbackCommandOutput) => void): void;
  stopFailback(
    args: StopFailbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFailbackCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationCommand}
   */
  stopReplication(
    args: StopReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationCommandOutput>;
  stopReplication(args: StopReplicationCommandInput, cb: (err: any, data?: StopReplicationCommandOutput) => void): void;
  stopReplication(
    args: StopReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
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
   * @see {@link TerminateRecoveryInstancesCommand}
   */
  terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateRecoveryInstancesCommandOutput>;
  terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    cb: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
  ): void;
  terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
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
   * @see {@link UpdateFailbackReplicationConfigurationCommand}
   */
  updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFailbackReplicationConfigurationCommandOutput>;
  updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchConfigurationCommand}
   */
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchConfigurationCommandOutput>;
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchConfigurationTemplateCommand}
   */
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchConfigurationTemplateCommandOutput>;
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationConfigurationCommand}
   */
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationConfigurationCommandOutput>;
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationConfigurationTemplateCommand}
   */
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationConfigurationTemplateCommandOutput>;
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AWS Elastic Disaster Recovery Service.</p>
 */
export class Drs extends DrsClient implements Drs {}
createAggregatedClient(commands, Drs);
