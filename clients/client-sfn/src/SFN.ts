// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateActivityCommandInput,
  type CreateActivityCommandOutput,
  CreateActivityCommand,
} from "./commands/CreateActivityCommand";
import {
  type CreateStateMachineAliasCommandInput,
  type CreateStateMachineAliasCommandOutput,
  CreateStateMachineAliasCommand,
} from "./commands/CreateStateMachineAliasCommand";
import {
  type CreateStateMachineCommandInput,
  type CreateStateMachineCommandOutput,
  CreateStateMachineCommand,
} from "./commands/CreateStateMachineCommand";
import {
  type DeleteActivityCommandInput,
  type DeleteActivityCommandOutput,
  DeleteActivityCommand,
} from "./commands/DeleteActivityCommand";
import {
  type DeleteStateMachineAliasCommandInput,
  type DeleteStateMachineAliasCommandOutput,
  DeleteStateMachineAliasCommand,
} from "./commands/DeleteStateMachineAliasCommand";
import {
  type DeleteStateMachineCommandInput,
  type DeleteStateMachineCommandOutput,
  DeleteStateMachineCommand,
} from "./commands/DeleteStateMachineCommand";
import {
  type DeleteStateMachineVersionCommandInput,
  type DeleteStateMachineVersionCommandOutput,
  DeleteStateMachineVersionCommand,
} from "./commands/DeleteStateMachineVersionCommand";
import {
  type DescribeActivityCommandInput,
  type DescribeActivityCommandOutput,
  DescribeActivityCommand,
} from "./commands/DescribeActivityCommand";
import {
  type DescribeExecutionCommandInput,
  type DescribeExecutionCommandOutput,
  DescribeExecutionCommand,
} from "./commands/DescribeExecutionCommand";
import {
  type DescribeMapRunCommandInput,
  type DescribeMapRunCommandOutput,
  DescribeMapRunCommand,
} from "./commands/DescribeMapRunCommand";
import {
  type DescribeStateMachineAliasCommandInput,
  type DescribeStateMachineAliasCommandOutput,
  DescribeStateMachineAliasCommand,
} from "./commands/DescribeStateMachineAliasCommand";
import {
  type DescribeStateMachineCommandInput,
  type DescribeStateMachineCommandOutput,
  DescribeStateMachineCommand,
} from "./commands/DescribeStateMachineCommand";
import {
  type DescribeStateMachineForExecutionCommandInput,
  type DescribeStateMachineForExecutionCommandOutput,
  DescribeStateMachineForExecutionCommand,
} from "./commands/DescribeStateMachineForExecutionCommand";
import {
  type GetActivityTaskCommandInput,
  type GetActivityTaskCommandOutput,
  GetActivityTaskCommand,
} from "./commands/GetActivityTaskCommand";
import {
  type GetExecutionHistoryCommandInput,
  type GetExecutionHistoryCommandOutput,
  GetExecutionHistoryCommand,
} from "./commands/GetExecutionHistoryCommand";
import {
  type ListActivitiesCommandInput,
  type ListActivitiesCommandOutput,
  ListActivitiesCommand,
} from "./commands/ListActivitiesCommand";
import {
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListExecutionsCommand,
} from "./commands/ListExecutionsCommand";
import {
  type ListMapRunsCommandInput,
  type ListMapRunsCommandOutput,
  ListMapRunsCommand,
} from "./commands/ListMapRunsCommand";
import {
  type ListStateMachineAliasesCommandInput,
  type ListStateMachineAliasesCommandOutput,
  ListStateMachineAliasesCommand,
} from "./commands/ListStateMachineAliasesCommand";
import {
  type ListStateMachinesCommandInput,
  type ListStateMachinesCommandOutput,
  ListStateMachinesCommand,
} from "./commands/ListStateMachinesCommand";
import {
  type ListStateMachineVersionsCommandInput,
  type ListStateMachineVersionsCommandOutput,
  ListStateMachineVersionsCommand,
} from "./commands/ListStateMachineVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PublishStateMachineVersionCommandInput,
  type PublishStateMachineVersionCommandOutput,
  PublishStateMachineVersionCommand,
} from "./commands/PublishStateMachineVersionCommand";
import {
  type RedriveExecutionCommandInput,
  type RedriveExecutionCommandOutput,
  RedriveExecutionCommand,
} from "./commands/RedriveExecutionCommand";
import {
  type SendTaskFailureCommandInput,
  type SendTaskFailureCommandOutput,
  SendTaskFailureCommand,
} from "./commands/SendTaskFailureCommand";
import {
  type SendTaskHeartbeatCommandInput,
  type SendTaskHeartbeatCommandOutput,
  SendTaskHeartbeatCommand,
} from "./commands/SendTaskHeartbeatCommand";
import {
  type SendTaskSuccessCommandInput,
  type SendTaskSuccessCommandOutput,
  SendTaskSuccessCommand,
} from "./commands/SendTaskSuccessCommand";
import {
  type StartExecutionCommandInput,
  type StartExecutionCommandOutput,
  StartExecutionCommand,
} from "./commands/StartExecutionCommand";
import {
  type StartSyncExecutionCommandInput,
  type StartSyncExecutionCommandOutput,
  StartSyncExecutionCommand,
} from "./commands/StartSyncExecutionCommand";
import {
  type StopExecutionCommandInput,
  type StopExecutionCommandOutput,
  StopExecutionCommand,
} from "./commands/StopExecutionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import { type TestStateCommandInput, type TestStateCommandOutput, TestStateCommand } from "./commands/TestStateCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateMapRunCommandInput,
  type UpdateMapRunCommandOutput,
  UpdateMapRunCommand,
} from "./commands/UpdateMapRunCommand";
import {
  type UpdateStateMachineAliasCommandInput,
  type UpdateStateMachineAliasCommandOutput,
  UpdateStateMachineAliasCommand,
} from "./commands/UpdateStateMachineAliasCommand";
import {
  type UpdateStateMachineCommandInput,
  type UpdateStateMachineCommandOutput,
  UpdateStateMachineCommand,
} from "./commands/UpdateStateMachineCommand";
import {
  type ValidateStateMachineDefinitionCommandInput,
  type ValidateStateMachineDefinitionCommandOutput,
  ValidateStateMachineDefinitionCommand,
} from "./commands/ValidateStateMachineDefinitionCommand";
import { paginateGetExecutionHistory } from "./pagination/GetExecutionHistoryPaginator";
import { paginateListActivities } from "./pagination/ListActivitiesPaginator";
import { paginateListExecutions } from "./pagination/ListExecutionsPaginator";
import { paginateListMapRuns } from "./pagination/ListMapRunsPaginator";
import { paginateListStateMachines } from "./pagination/ListStateMachinesPaginator";
import { SFNClient } from "./SFNClient";

const commands = {
  CreateActivityCommand,
  CreateStateMachineCommand,
  CreateStateMachineAliasCommand,
  DeleteActivityCommand,
  DeleteStateMachineCommand,
  DeleteStateMachineAliasCommand,
  DeleteStateMachineVersionCommand,
  DescribeActivityCommand,
  DescribeExecutionCommand,
  DescribeMapRunCommand,
  DescribeStateMachineCommand,
  DescribeStateMachineAliasCommand,
  DescribeStateMachineForExecutionCommand,
  GetActivityTaskCommand,
  GetExecutionHistoryCommand,
  ListActivitiesCommand,
  ListExecutionsCommand,
  ListMapRunsCommand,
  ListStateMachineAliasesCommand,
  ListStateMachinesCommand,
  ListStateMachineVersionsCommand,
  ListTagsForResourceCommand,
  PublishStateMachineVersionCommand,
  RedriveExecutionCommand,
  SendTaskFailureCommand,
  SendTaskHeartbeatCommand,
  SendTaskSuccessCommand,
  StartExecutionCommand,
  StartSyncExecutionCommand,
  StopExecutionCommand,
  TagResourceCommand,
  TestStateCommand,
  UntagResourceCommand,
  UpdateMapRunCommand,
  UpdateStateMachineCommand,
  UpdateStateMachineAliasCommand,
  ValidateStateMachineDefinitionCommand,
};
const paginators = {
  paginateGetExecutionHistory,
  paginateListActivities,
  paginateListExecutions,
  paginateListMapRuns,
  paginateListStateMachines,
};

/**
 * @public
 */
export interface SFNRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SFN {
  /**
   * @see {@link CreateActivityCommand}
   */
  createActivity(
    args: CreateActivityCommandInput,
    options?: SFNRequestOptions
  ): Promise<CreateActivityCommandOutput>;
  createActivity(
    args: CreateActivityCommandInput,
    cb: (err: any, data?: CreateActivityCommandOutput) => void
  ): void;
  createActivity(
    args: CreateActivityCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: CreateActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: SFNRequestOptions
  ): Promise<CreateStateMachineCommandOutput>;
  createStateMachine(
    args: CreateStateMachineCommandInput,
    cb: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): void;
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStateMachineAliasCommand}
   */
  createStateMachineAlias(
    args: CreateStateMachineAliasCommandInput,
    options?: SFNRequestOptions
  ): Promise<CreateStateMachineAliasCommandOutput>;
  createStateMachineAlias(
    args: CreateStateMachineAliasCommandInput,
    cb: (err: any, data?: CreateStateMachineAliasCommandOutput) => void
  ): void;
  createStateMachineAlias(
    args: CreateStateMachineAliasCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: CreateStateMachineAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActivityCommand}
   */
  deleteActivity(
    args: DeleteActivityCommandInput,
    options?: SFNRequestOptions
  ): Promise<DeleteActivityCommandOutput>;
  deleteActivity(
    args: DeleteActivityCommandInput,
    cb: (err: any, data?: DeleteActivityCommandOutput) => void
  ): void;
  deleteActivity(
    args: DeleteActivityCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DeleteActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: SFNRequestOptions
  ): Promise<DeleteStateMachineCommandOutput>;
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    cb: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): void;
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStateMachineAliasCommand}
   */
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    options?: SFNRequestOptions
  ): Promise<DeleteStateMachineAliasCommandOutput>;
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    cb: (err: any, data?: DeleteStateMachineAliasCommandOutput) => void
  ): void;
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DeleteStateMachineAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStateMachineVersionCommand}
   */
  deleteStateMachineVersion(
    args: DeleteStateMachineVersionCommandInput,
    options?: SFNRequestOptions
  ): Promise<DeleteStateMachineVersionCommandOutput>;
  deleteStateMachineVersion(
    args: DeleteStateMachineVersionCommandInput,
    cb: (err: any, data?: DeleteStateMachineVersionCommandOutput) => void
  ): void;
  deleteStateMachineVersion(
    args: DeleteStateMachineVersionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DeleteStateMachineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivityCommand}
   */
  describeActivity(
    args: DescribeActivityCommandInput,
    options?: SFNRequestOptions
  ): Promise<DescribeActivityCommandOutput>;
  describeActivity(
    args: DescribeActivityCommandInput,
    cb: (err: any, data?: DescribeActivityCommandOutput) => void
  ): void;
  describeActivity(
    args: DescribeActivityCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DescribeActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: SFNRequestOptions
  ): Promise<DescribeExecutionCommandOutput>;
  describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  describeExecution(
    args: DescribeExecutionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: SFNRequestOptions
  ): Promise<DescribeMapRunCommandOutput>;
  describeMapRun(
    args: DescribeMapRunCommandInput,
    cb: (err: any, data?: DescribeMapRunCommandOutput) => void
  ): void;
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DescribeMapRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: SFNRequestOptions
  ): Promise<DescribeStateMachineCommandOutput>;
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    cb: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): void;
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStateMachineAliasCommand}
   */
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    options?: SFNRequestOptions
  ): Promise<DescribeStateMachineAliasCommandOutput>;
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    cb: (err: any, data?: DescribeStateMachineAliasCommandOutput) => void
  ): void;
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DescribeStateMachineAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStateMachineForExecutionCommand}
   */
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: SFNRequestOptions
  ): Promise<DescribeStateMachineForExecutionCommandOutput>;
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): void;
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: SFNRequestOptions
  ): Promise<GetActivityTaskCommandOutput>;
  getActivityTask(
    args: GetActivityTaskCommandInput,
    cb: (err: any, data?: GetActivityTaskCommandOutput) => void
  ): void;
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: GetActivityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: SFNRequestOptions
  ): Promise<GetExecutionHistoryCommandOutput>;
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): void;
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(): Promise<ListActivitiesCommandOutput>;
  listActivities(
    args: ListActivitiesCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListActivitiesCommandOutput>;
  listActivities(
    args: ListActivitiesCommandInput,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;
  listActivities(
    args: ListActivitiesCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMapRunsCommand}
   */
  listMapRuns(
    args: ListMapRunsCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListMapRunsCommandOutput>;
  listMapRuns(
    args: ListMapRunsCommandInput,
    cb: (err: any, data?: ListMapRunsCommandOutput) => void
  ): void;
  listMapRuns(
    args: ListMapRunsCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListMapRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStateMachineAliasesCommand}
   */
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListStateMachineAliasesCommandOutput>;
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    cb: (err: any, data?: ListStateMachineAliasesCommandOutput) => void
  ): void;
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListStateMachineAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStateMachinesCommand}
   */
  listStateMachines(): Promise<ListStateMachinesCommandOutput>;
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListStateMachinesCommandOutput>;
  listStateMachines(
    args: ListStateMachinesCommandInput,
    cb: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): void;
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStateMachineVersionsCommand}
   */
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListStateMachineVersionsCommandOutput>;
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    cb: (err: any, data?: ListStateMachineVersionsCommandOutput) => void
  ): void;
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListStateMachineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SFNRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishStateMachineVersionCommand}
   */
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    options?: SFNRequestOptions
  ): Promise<PublishStateMachineVersionCommandOutput>;
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    cb: (err: any, data?: PublishStateMachineVersionCommandOutput) => void
  ): void;
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: PublishStateMachineVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link RedriveExecutionCommand}
   */
  redriveExecution(
    args: RedriveExecutionCommandInput,
    options?: SFNRequestOptions
  ): Promise<RedriveExecutionCommandOutput>;
  redriveExecution(
    args: RedriveExecutionCommandInput,
    cb: (err: any, data?: RedriveExecutionCommandOutput) => void
  ): void;
  redriveExecution(
    args: RedriveExecutionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: RedriveExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: SFNRequestOptions
  ): Promise<SendTaskFailureCommandOutput>;
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    cb: (err: any, data?: SendTaskFailureCommandOutput) => void
  ): void;
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: SendTaskFailureCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: SFNRequestOptions
  ): Promise<SendTaskHeartbeatCommandOutput>;
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): void;
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: SFNRequestOptions
  ): Promise<SendTaskSuccessCommandOutput>;
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    cb: (err: any, data?: SendTaskSuccessCommandOutput) => void
  ): void;
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: SendTaskSuccessCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: SFNRequestOptions
  ): Promise<StartExecutionCommandOutput>;
  startExecution(
    args: StartExecutionCommandInput,
    cb: (err: any, data?: StartExecutionCommandOutput) => void
  ): void;
  startExecution(
    args: StartExecutionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: StartExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: SFNRequestOptions
  ): Promise<StartSyncExecutionCommandOutput>;
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    cb: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): void;
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(
    args: StopExecutionCommandInput,
    options?: SFNRequestOptions
  ): Promise<StopExecutionCommandOutput>;
  stopExecution(
    args: StopExecutionCommandInput,
    cb: (err: any, data?: StopExecutionCommandOutput) => void
  ): void;
  stopExecution(
    args: StopExecutionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: StopExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SFNRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestStateCommand}
   */
  testState(
    args: TestStateCommandInput,
    options?: SFNRequestOptions
  ): Promise<TestStateCommandOutput>;
  testState(
    args: TestStateCommandInput,
    cb: (err: any, data?: TestStateCommandOutput) => void
  ): void;
  testState(
    args: TestStateCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: TestStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SFNRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: SFNRequestOptions
  ): Promise<UpdateMapRunCommandOutput>;
  updateMapRun(
    args: UpdateMapRunCommandInput,
    cb: (err: any, data?: UpdateMapRunCommandOutput) => void
  ): void;
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: UpdateMapRunCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: SFNRequestOptions
  ): Promise<UpdateStateMachineCommandOutput>;
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    cb: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): void;
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStateMachineAliasCommand}
   */
  updateStateMachineAlias(
    args: UpdateStateMachineAliasCommandInput,
    options?: SFNRequestOptions
  ): Promise<UpdateStateMachineAliasCommandOutput>;
  updateStateMachineAlias(
    args: UpdateStateMachineAliasCommandInput,
    cb: (err: any, data?: UpdateStateMachineAliasCommandOutput) => void
  ): void;
  updateStateMachineAlias(
    args: UpdateStateMachineAliasCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: UpdateStateMachineAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateStateMachineDefinitionCommand}
   */
  validateStateMachineDefinition(
    args: ValidateStateMachineDefinitionCommandInput,
    options?: SFNRequestOptions
  ): Promise<ValidateStateMachineDefinitionCommandOutput>;
  validateStateMachineDefinition(
    args: ValidateStateMachineDefinitionCommandInput,
    cb: (err: any, data?: ValidateStateMachineDefinitionCommandOutput) => void
  ): void;
  validateStateMachineDefinition(
    args: ValidateStateMachineDefinitionCommandInput,
    options: SFNRequestOptions,
    cb: (err: any, data?: ValidateStateMachineDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExecutionHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetExecutionHistoryCommandOutput}.
   */
  paginateGetExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetExecutionHistoryCommandOutput>;

  /**
   * @see {@link ListActivitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListActivitiesCommandOutput}.
   */
  paginateListActivities(
    args?: ListActivitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListActivitiesCommandOutput>;

  /**
   * @see {@link ListExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExecutionsCommandOutput}.
   */
  paginateListExecutions(
    args?: ListExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExecutionsCommandOutput>;

  /**
   * @see {@link ListMapRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMapRunsCommandOutput}.
   */
  paginateListMapRuns(
    args: ListMapRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMapRunsCommandOutput>;

  /**
   * @see {@link ListStateMachinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStateMachinesCommandOutput}.
   */
  paginateListStateMachines(
    args?: ListStateMachinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStateMachinesCommandOutput>;
}

/**
 * <fullname>Step Functions</fullname>
 *          <p>With Step Functions, you can create workflows, also called <i>state machines</i>, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines.</p>
 *          <p>Through the Step Functions API, you can create, list, update, and delete state machines, activities, and other data types. You can start, stop, and redrive your state machines. Your activity workers can send task success, heartbeat, and failure responses.</p>
 *          <p>With API calls, you can also manage other aspects of your workflow, such as tags, versions, and aliases.</p>
 *          <p>For more information about developing solutions with Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 *          <important>
 *             <p>If you use the Step Functions API actions using Amazon Web Services SDK integrations, make sure the API actions are in camel case and parameter names are in Pascal case. For example, you might use Step Functions API action <code>startSyncExecution</code> and specify its parameter as <code>StateMachineArn</code>.</p>
 *          </important>
 * @public
 */
export class SFN extends SFNClient implements SFN {}
createAggregatedClient(commands, SFN, { paginators });
