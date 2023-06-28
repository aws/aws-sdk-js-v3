// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  CreateWorkflowStepCommand,
  CreateWorkflowStepCommandInput,
  CreateWorkflowStepCommandOutput,
} from "./commands/CreateWorkflowStepCommand";
import {
  CreateWorkflowStepGroupCommand,
  CreateWorkflowStepGroupCommandInput,
  CreateWorkflowStepGroupCommandOutput,
} from "./commands/CreateWorkflowStepGroupCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  DeleteWorkflowStepCommand,
  DeleteWorkflowStepCommandInput,
  DeleteWorkflowStepCommandOutput,
} from "./commands/DeleteWorkflowStepCommand";
import {
  DeleteWorkflowStepGroupCommand,
  DeleteWorkflowStepGroupCommandInput,
  DeleteWorkflowStepGroupCommandOutput,
} from "./commands/DeleteWorkflowStepGroupCommand";
import { GetTemplateCommand, GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  GetTemplateStepCommand,
  GetTemplateStepCommandInput,
  GetTemplateStepCommandOutput,
} from "./commands/GetTemplateStepCommand";
import {
  GetTemplateStepGroupCommand,
  GetTemplateStepGroupCommandInput,
  GetTemplateStepGroupCommandOutput,
} from "./commands/GetTemplateStepGroupCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowStepCommand,
  GetWorkflowStepCommandInput,
  GetWorkflowStepCommandOutput,
} from "./commands/GetWorkflowStepCommand";
import {
  GetWorkflowStepGroupCommand,
  GetWorkflowStepGroupCommandInput,
  GetWorkflowStepGroupCommandOutput,
} from "./commands/GetWorkflowStepGroupCommand";
import { ListPluginsCommand, ListPluginsCommandInput, ListPluginsCommandOutput } from "./commands/ListPluginsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import {
  ListTemplateStepGroupsCommand,
  ListTemplateStepGroupsCommandInput,
  ListTemplateStepGroupsCommandOutput,
} from "./commands/ListTemplateStepGroupsCommand";
import {
  ListTemplateStepsCommand,
  ListTemplateStepsCommandInput,
  ListTemplateStepsCommandOutput,
} from "./commands/ListTemplateStepsCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowStepGroupsCommand,
  ListWorkflowStepGroupsCommandInput,
  ListWorkflowStepGroupsCommandOutput,
} from "./commands/ListWorkflowStepGroupsCommand";
import {
  ListWorkflowStepsCommand,
  ListWorkflowStepsCommandInput,
  ListWorkflowStepsCommandOutput,
} from "./commands/ListWorkflowStepsCommand";
import {
  RetryWorkflowStepCommand,
  RetryWorkflowStepCommandInput,
  RetryWorkflowStepCommandOutput,
} from "./commands/RetryWorkflowStepCommand";
import {
  StartWorkflowCommand,
  StartWorkflowCommandInput,
  StartWorkflowCommandOutput,
} from "./commands/StartWorkflowCommand";
import {
  StopWorkflowCommand,
  StopWorkflowCommandInput,
  StopWorkflowCommandOutput,
} from "./commands/StopWorkflowCommand";
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
import {
  UpdateWorkflowStepCommand,
  UpdateWorkflowStepCommandInput,
  UpdateWorkflowStepCommandOutput,
} from "./commands/UpdateWorkflowStepCommand";
import {
  UpdateWorkflowStepGroupCommand,
  UpdateWorkflowStepGroupCommandInput,
  UpdateWorkflowStepGroupCommandOutput,
} from "./commands/UpdateWorkflowStepGroupCommand";
import { MigrationHubOrchestratorClient, MigrationHubOrchestratorClientConfig } from "./MigrationHubOrchestratorClient";

const commands = {
  CreateWorkflowCommand,
  CreateWorkflowStepCommand,
  CreateWorkflowStepGroupCommand,
  DeleteWorkflowCommand,
  DeleteWorkflowStepCommand,
  DeleteWorkflowStepGroupCommand,
  GetTemplateCommand,
  GetTemplateStepCommand,
  GetTemplateStepGroupCommand,
  GetWorkflowCommand,
  GetWorkflowStepCommand,
  GetWorkflowStepGroupCommand,
  ListPluginsCommand,
  ListTagsForResourceCommand,
  ListTemplatesCommand,
  ListTemplateStepGroupsCommand,
  ListTemplateStepsCommand,
  ListWorkflowsCommand,
  ListWorkflowStepGroupsCommand,
  ListWorkflowStepsCommand,
  RetryWorkflowStepCommand,
  StartWorkflowCommand,
  StopWorkflowCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateWorkflowCommand,
  UpdateWorkflowStepCommand,
  UpdateWorkflowStepGroupCommand,
};

export interface MigrationHubOrchestrator {
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
   * @see {@link CreateWorkflowStepCommand}
   */
  createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowStepCommandOutput>;
  createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    cb: (err: any, data?: CreateWorkflowStepCommandOutput) => void
  ): void;
  createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowStepCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowStepGroupCommand}
   */
  createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowStepGroupCommandOutput>;
  createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    cb: (err: any, data?: CreateWorkflowStepGroupCommandOutput) => void
  ): void;
  createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowStepGroupCommandOutput) => void
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
   * @see {@link DeleteWorkflowStepCommand}
   */
  deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowStepCommandOutput>;
  deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    cb: (err: any, data?: DeleteWorkflowStepCommandOutput) => void
  ): void;
  deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowStepCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowStepGroupCommand}
   */
  deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowStepGroupCommandOutput>;
  deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    cb: (err: any, data?: DeleteWorkflowStepGroupCommandOutput) => void
  ): void;
  deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowStepGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateStepCommand}
   */
  getTemplateStep(
    args: GetTemplateStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateStepCommandOutput>;
  getTemplateStep(args: GetTemplateStepCommandInput, cb: (err: any, data?: GetTemplateStepCommandOutput) => void): void;
  getTemplateStep(
    args: GetTemplateStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateStepGroupCommand}
   */
  getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateStepGroupCommandOutput>;
  getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    cb: (err: any, data?: GetTemplateStepGroupCommandOutput) => void
  ): void;
  getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateStepGroupCommandOutput) => void
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
   * @see {@link GetWorkflowStepCommand}
   */
  getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepCommandOutput>;
  getWorkflowStep(args: GetWorkflowStepCommandInput, cb: (err: any, data?: GetWorkflowStepCommandOutput) => void): void;
  getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowStepGroupCommand}
   */
  getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepGroupCommandOutput>;
  getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    cb: (err: any, data?: GetWorkflowStepGroupCommandOutput) => void
  ): void;
  getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPluginsCommand}
   */
  listPlugins(args: ListPluginsCommandInput, options?: __HttpHandlerOptions): Promise<ListPluginsCommandOutput>;
  listPlugins(args: ListPluginsCommandInput, cb: (err: any, data?: ListPluginsCommandOutput) => void): void;
  listPlugins(
    args: ListPluginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginsCommandOutput) => void
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
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
  listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateStepGroupsCommand}
   */
  listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateStepGroupsCommandOutput>;
  listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    cb: (err: any, data?: ListTemplateStepGroupsCommandOutput) => void
  ): void;
  listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateStepGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateStepsCommand}
   */
  listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateStepsCommandOutput>;
  listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    cb: (err: any, data?: ListTemplateStepsCommandOutput) => void
  ): void;
  listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowStepGroupsCommand}
   */
  listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowStepGroupsCommandOutput>;
  listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    cb: (err: any, data?: ListWorkflowStepGroupsCommandOutput) => void
  ): void;
  listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowStepGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowStepsCommand}
   */
  listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowStepsCommandOutput>;
  listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    cb: (err: any, data?: ListWorkflowStepsCommandOutput) => void
  ): void;
  listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryWorkflowStepCommand}
   */
  retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryWorkflowStepCommandOutput>;
  retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    cb: (err: any, data?: RetryWorkflowStepCommandOutput) => void
  ): void;
  retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryWorkflowStepCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkflowCommand}
   */
  startWorkflow(args: StartWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<StartWorkflowCommandOutput>;
  startWorkflow(args: StartWorkflowCommandInput, cb: (err: any, data?: StartWorkflowCommandOutput) => void): void;
  startWorkflow(
    args: StartWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkflowCommand}
   */
  stopWorkflow(args: StopWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<StopWorkflowCommandOutput>;
  stopWorkflow(args: StopWorkflowCommandInput, cb: (err: any, data?: StopWorkflowCommandOutput) => void): void;
  stopWorkflow(
    args: StopWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkflowCommandOutput) => void
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

  /**
   * @see {@link UpdateWorkflowStepCommand}
   */
  updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowStepCommandOutput>;
  updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    cb: (err: any, data?: UpdateWorkflowStepCommandOutput) => void
  ): void;
  updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowStepCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowStepGroupCommand}
   */
  updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowStepGroupCommandOutput>;
  updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    cb: (err: any, data?: UpdateWorkflowStepGroupCommandOutput) => void
  ): void;
  updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowStepGroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This API reference provides descriptions, syntax, and other details about each of the
 *             actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API
 *             request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *             access an API that is tailored to the programming language or platform that you're
 *             using.</p>
 */
export class MigrationHubOrchestrator extends MigrationHubOrchestratorClient implements MigrationHubOrchestrator {}
createAggregatedClient(commands, MigrationHubOrchestrator);
