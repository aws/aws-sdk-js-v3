// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateTemplateCommandInput,
  type CreateTemplateCommandOutput,
  CreateTemplateCommand,
} from "./commands/CreateTemplateCommand";
import {
  type CreateWorkflowCommandInput,
  type CreateWorkflowCommandOutput,
  CreateWorkflowCommand,
} from "./commands/CreateWorkflowCommand";
import {
  type CreateWorkflowStepCommandInput,
  type CreateWorkflowStepCommandOutput,
  CreateWorkflowStepCommand,
} from "./commands/CreateWorkflowStepCommand";
import {
  type CreateWorkflowStepGroupCommandInput,
  type CreateWorkflowStepGroupCommandOutput,
  CreateWorkflowStepGroupCommand,
} from "./commands/CreateWorkflowStepGroupCommand";
import {
  type DeleteTemplateCommandInput,
  type DeleteTemplateCommandOutput,
  DeleteTemplateCommand,
} from "./commands/DeleteTemplateCommand";
import {
  type DeleteWorkflowCommandInput,
  type DeleteWorkflowCommandOutput,
  DeleteWorkflowCommand,
} from "./commands/DeleteWorkflowCommand";
import {
  type DeleteWorkflowStepCommandInput,
  type DeleteWorkflowStepCommandOutput,
  DeleteWorkflowStepCommand,
} from "./commands/DeleteWorkflowStepCommand";
import {
  type DeleteWorkflowStepGroupCommandInput,
  type DeleteWorkflowStepGroupCommandOutput,
  DeleteWorkflowStepGroupCommand,
} from "./commands/DeleteWorkflowStepGroupCommand";
import {
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  GetTemplateCommand,
} from "./commands/GetTemplateCommand";
import {
  type GetTemplateStepCommandInput,
  type GetTemplateStepCommandOutput,
  GetTemplateStepCommand,
} from "./commands/GetTemplateStepCommand";
import {
  type GetTemplateStepGroupCommandInput,
  type GetTemplateStepGroupCommandOutput,
  GetTemplateStepGroupCommand,
} from "./commands/GetTemplateStepGroupCommand";
import {
  type GetWorkflowCommandInput,
  type GetWorkflowCommandOutput,
  GetWorkflowCommand,
} from "./commands/GetWorkflowCommand";
import {
  type GetWorkflowStepCommandInput,
  type GetWorkflowStepCommandOutput,
  GetWorkflowStepCommand,
} from "./commands/GetWorkflowStepCommand";
import {
  type GetWorkflowStepGroupCommandInput,
  type GetWorkflowStepGroupCommandOutput,
  GetWorkflowStepGroupCommand,
} from "./commands/GetWorkflowStepGroupCommand";
import {
  type ListPluginsCommandInput,
  type ListPluginsCommandOutput,
  ListPluginsCommand,
} from "./commands/ListPluginsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListTemplatesCommand,
} from "./commands/ListTemplatesCommand";
import {
  type ListTemplateStepGroupsCommandInput,
  type ListTemplateStepGroupsCommandOutput,
  ListTemplateStepGroupsCommand,
} from "./commands/ListTemplateStepGroupsCommand";
import {
  type ListTemplateStepsCommandInput,
  type ListTemplateStepsCommandOutput,
  ListTemplateStepsCommand,
} from "./commands/ListTemplateStepsCommand";
import {
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ListWorkflowsCommand,
} from "./commands/ListWorkflowsCommand";
import {
  type ListWorkflowStepGroupsCommandInput,
  type ListWorkflowStepGroupsCommandOutput,
  ListWorkflowStepGroupsCommand,
} from "./commands/ListWorkflowStepGroupsCommand";
import {
  type ListWorkflowStepsCommandInput,
  type ListWorkflowStepsCommandOutput,
  ListWorkflowStepsCommand,
} from "./commands/ListWorkflowStepsCommand";
import {
  type RetryWorkflowStepCommandInput,
  type RetryWorkflowStepCommandOutput,
  RetryWorkflowStepCommand,
} from "./commands/RetryWorkflowStepCommand";
import {
  type StartWorkflowCommandInput,
  type StartWorkflowCommandOutput,
  StartWorkflowCommand,
} from "./commands/StartWorkflowCommand";
import {
  type StopWorkflowCommandInput,
  type StopWorkflowCommandOutput,
  StopWorkflowCommand,
} from "./commands/StopWorkflowCommand";
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
  type UpdateTemplateCommandInput,
  type UpdateTemplateCommandOutput,
  UpdateTemplateCommand,
} from "./commands/UpdateTemplateCommand";
import {
  type UpdateWorkflowCommandInput,
  type UpdateWorkflowCommandOutput,
  UpdateWorkflowCommand,
} from "./commands/UpdateWorkflowCommand";
import {
  type UpdateWorkflowStepCommandInput,
  type UpdateWorkflowStepCommandOutput,
  UpdateWorkflowStepCommand,
} from "./commands/UpdateWorkflowStepCommand";
import {
  type UpdateWorkflowStepGroupCommandInput,
  type UpdateWorkflowStepGroupCommandOutput,
  UpdateWorkflowStepGroupCommand,
} from "./commands/UpdateWorkflowStepGroupCommand";
import { MigrationHubOrchestratorClient } from "./MigrationHubOrchestratorClient";
import { paginateListPlugins } from "./pagination/ListPluginsPaginator";
import { paginateListTemplates } from "./pagination/ListTemplatesPaginator";
import { paginateListTemplateStepGroups } from "./pagination/ListTemplateStepGroupsPaginator";
import { paginateListTemplateSteps } from "./pagination/ListTemplateStepsPaginator";
import { paginateListWorkflows } from "./pagination/ListWorkflowsPaginator";
import { paginateListWorkflowStepGroups } from "./pagination/ListWorkflowStepGroupsPaginator";
import { paginateListWorkflowSteps } from "./pagination/ListWorkflowStepsPaginator";

const commands = {
  CreateTemplateCommand,
  CreateWorkflowCommand,
  CreateWorkflowStepCommand,
  CreateWorkflowStepGroupCommand,
  DeleteTemplateCommand,
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
  UpdateTemplateCommand,
  UpdateWorkflowCommand,
  UpdateWorkflowStepCommand,
  UpdateWorkflowStepGroupCommand,
};
const paginators = {
  paginateListPlugins,
  paginateListTemplates,
  paginateListTemplateStepGroups,
  paginateListTemplateSteps,
  paginateListWorkflows,
  paginateListWorkflowStepGroups,
  paginateListWorkflowSteps,
};

export interface MigrationHubOrchestrator {
  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
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
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
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
  getTemplate(
    args: GetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateCommandOutput>;
  getTemplate(
    args: GetTemplateCommandInput,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
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
  getTemplateStep(
    args: GetTemplateStepCommandInput,
    cb: (err: any, data?: GetTemplateStepCommandOutput) => void
  ): void;
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
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowCommandOutput>;
  getWorkflow(
    args: GetWorkflowCommandInput,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
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
  getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    cb: (err: any, data?: GetWorkflowStepCommandOutput) => void
  ): void;
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
  listPlugins(): Promise<ListPluginsCommandOutput>;
  listPlugins(
    args: ListPluginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPluginsCommandOutput>;
  listPlugins(
    args: ListPluginsCommandInput,
    cb: (err: any, data?: ListPluginsCommandOutput) => void
  ): void;
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
  listTemplates(): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
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
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
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
  startWorkflow(
    args: StartWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowCommandOutput>;
  startWorkflow(
    args: StartWorkflowCommandInput,
    cb: (err: any, data?: StartWorkflowCommandOutput) => void
  ): void;
  startWorkflow(
    args: StartWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkflowCommand}
   */
  stopWorkflow(
    args: StopWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkflowCommandOutput>;
  stopWorkflow(
    args: StopWorkflowCommandInput,
    cb: (err: any, data?: StopWorkflowCommandOutput) => void
  ): void;
  stopWorkflow(
    args: StopWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkflowCommandOutput) => void
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
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListPluginsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPluginsCommandOutput}.
   */
  paginateListPlugins(
    args?: ListPluginsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPluginsCommandOutput>;

  /**
   * @see {@link ListTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplatesCommandOutput}.
   */
  paginateListTemplates(
    args?: ListTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplatesCommandOutput>;

  /**
   * @see {@link ListTemplateStepGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateStepGroupsCommandOutput}.
   */
  paginateListTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateStepGroupsCommandOutput>;

  /**
   * @see {@link ListTemplateStepsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateStepsCommandOutput}.
   */
  paginateListTemplateSteps(
    args: ListTemplateStepsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateStepsCommandOutput>;

  /**
   * @see {@link ListWorkflowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowsCommandOutput}.
   */
  paginateListWorkflows(
    args?: ListWorkflowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowsCommandOutput>;

  /**
   * @see {@link ListWorkflowStepGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowStepGroupsCommandOutput}.
   */
  paginateListWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowStepGroupsCommandOutput>;

  /**
   * @see {@link ListWorkflowStepsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowStepsCommandOutput}.
   */
  paginateListWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowStepsCommandOutput>;
}

/**
 * <p>This API reference provides descriptions, syntax, and other details about each of the
 *             actions and data types for AWS Migration Hub Orchestrator. The topic for each action shows the API
 *             request parameters and responses. Alternatively, you can use one of the AWS SDKs to
 *             access an API that is tailored to the programming language or platform that you're
 *             using.</p>
 * @public
 */
export class MigrationHubOrchestrator extends MigrationHubOrchestratorClient implements MigrationHubOrchestrator {}
createAggregatedClient(commands, MigrationHubOrchestrator, { paginators });
