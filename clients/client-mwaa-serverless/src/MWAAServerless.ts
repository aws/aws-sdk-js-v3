// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  GetTaskInstanceCommand,
  GetTaskInstanceCommandInput,
  GetTaskInstanceCommandOutput,
} from "./commands/GetTaskInstanceCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowRunCommand,
  GetWorkflowRunCommandInput,
  GetWorkflowRunCommandOutput,
} from "./commands/GetWorkflowRunCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskInstancesCommand,
  ListTaskInstancesCommandInput,
  ListTaskInstancesCommandOutput,
} from "./commands/ListTaskInstancesCommand";
import {
  ListWorkflowRunsCommand,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput,
} from "./commands/ListWorkflowRunsCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "./commands/ListWorkflowVersionsCommand";
import {
  StartWorkflowRunCommand,
  StartWorkflowRunCommandInput,
  StartWorkflowRunCommandOutput,
} from "./commands/StartWorkflowRunCommand";
import {
  StopWorkflowRunCommand,
  StopWorkflowRunCommandInput,
  StopWorkflowRunCommandOutput,
} from "./commands/StopWorkflowRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateWorkflowCommand,
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
} from "./commands/UpdateWorkflowCommand";
import { MWAAServerlessClient } from "./MWAAServerlessClient";

const commands = {
  CreateWorkflowCommand,
  DeleteWorkflowCommand,
  GetTaskInstanceCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  ListTagsForResourceCommand,
  ListTaskInstancesCommand,
  ListWorkflowRunsCommand,
  ListWorkflowsCommand,
  ListWorkflowVersionsCommand,
  StartWorkflowRunCommand,
  StopWorkflowRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateWorkflowCommand,
};

export interface MWAAServerless {
  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaskInstanceCommand}
   */
  getTaskInstance(
    args: GetTaskInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaskInstanceCommandOutput>;
  getTaskInstance(args: GetTaskInstanceCommandInput, cb: (err: any, data?: GetTaskInstanceCommandOutput) => void): void;
  getTaskInstance(
    args: GetTaskInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaskInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunCommand}
   */
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunCommandOutput>;
  getWorkflowRun(args: GetWorkflowRunCommandInput, cb: (err: any, data?: GetWorkflowRunCommandOutput) => void): void;
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
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
   * @see {@link ListTaskInstancesCommand}
   */
  listTaskInstances(
    args: ListTaskInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskInstancesCommandOutput>;
  listTaskInstances(
    args: ListTaskInstancesCommandInput,
    cb: (err: any, data?: ListTaskInstancesCommandOutput) => void
  ): void;
  listTaskInstances(
    args: ListTaskInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowRunsCommand}
   */
  listWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowRunsCommandOutput>;
  listWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    cb: (err: any, data?: ListWorkflowRunsCommandOutput) => void
  ): void;
  listWorkflowRuns(
    args: ListWorkflowRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowVersionsCommand}
   */
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowVersionsCommandOutput>;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;
  listWorkflowVersions(
    args: ListWorkflowVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkflowRunCommand}
   */
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowRunCommandOutput>;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkflowRunCommand}
   */
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkflowRunCommandOutput>;
  stopWorkflowRun(args: StopWorkflowRunCommandInput, cb: (err: any, data?: StopWorkflowRunCommandOutput) => void): void;
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkflowRunCommandOutput) => void
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
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(args: UpdateWorkflowCommandInput, cb: (err: any, data?: UpdateWorkflowCommandOutput) => void): void;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Managed Workflows for Apache Airflow Serverless provides a managed workflow orchestration platform for running Apache Airflow workflows in a serverless environment. You can use Amazon Managed Workflows for Apache Airflow Serverless to create, manage, and run data processing workflows without managing the underlying infrastructure, Airflow clusters, metadata databases, or scheduling overhead. The service provides secure multi-tenant run environments with automatic scaling, comprehensive logging, and integration with multiple Amazon Web Services services for orchestrating complex analytics workloads.</p>
 * @public
 */
export class MWAAServerless extends MWAAServerlessClient implements MWAAServerless {}
createAggregatedClient(commands, MWAAServerless);
