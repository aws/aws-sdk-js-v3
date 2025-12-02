// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateActCommand, CreateActCommandInput, CreateActCommandOutput } from "./commands/CreateActCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import {
  CreateWorkflowDefinitionCommand,
  CreateWorkflowDefinitionCommandInput,
  CreateWorkflowDefinitionCommandOutput,
} from "./commands/CreateWorkflowDefinitionCommand";
import {
  CreateWorkflowRunCommand,
  CreateWorkflowRunCommandInput,
  CreateWorkflowRunCommandOutput,
} from "./commands/CreateWorkflowRunCommand";
import {
  DeleteWorkflowDefinitionCommand,
  DeleteWorkflowDefinitionCommandInput,
  DeleteWorkflowDefinitionCommandOutput,
} from "./commands/DeleteWorkflowDefinitionCommand";
import {
  DeleteWorkflowRunCommand,
  DeleteWorkflowRunCommandInput,
  DeleteWorkflowRunCommandOutput,
} from "./commands/DeleteWorkflowRunCommand";
import {
  GetWorkflowDefinitionCommand,
  GetWorkflowDefinitionCommandInput,
  GetWorkflowDefinitionCommandOutput,
} from "./commands/GetWorkflowDefinitionCommand";
import {
  GetWorkflowRunCommand,
  GetWorkflowRunCommandInput,
  GetWorkflowRunCommandOutput,
} from "./commands/GetWorkflowRunCommand";
import {
  InvokeActStepCommand,
  InvokeActStepCommandInput,
  InvokeActStepCommandOutput,
} from "./commands/InvokeActStepCommand";
import { ListActsCommand, ListActsCommandInput, ListActsCommandOutput } from "./commands/ListActsCommand";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListWorkflowDefinitionsCommand,
  ListWorkflowDefinitionsCommandInput,
  ListWorkflowDefinitionsCommandOutput,
} from "./commands/ListWorkflowDefinitionsCommand";
import {
  ListWorkflowRunsCommand,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput,
} from "./commands/ListWorkflowRunsCommand";
import { UpdateActCommand, UpdateActCommandInput, UpdateActCommandOutput } from "./commands/UpdateActCommand";
import {
  UpdateWorkflowRunCommand,
  UpdateWorkflowRunCommandInput,
  UpdateWorkflowRunCommandOutput,
} from "./commands/UpdateWorkflowRunCommand";
import { NovaActClient, NovaActClientConfig } from "./NovaActClient";

const commands = {
  CreateActCommand,
  CreateSessionCommand,
  CreateWorkflowDefinitionCommand,
  CreateWorkflowRunCommand,
  DeleteWorkflowDefinitionCommand,
  DeleteWorkflowRunCommand,
  GetWorkflowDefinitionCommand,
  GetWorkflowRunCommand,
  InvokeActStepCommand,
  ListActsCommand,
  ListModelsCommand,
  ListSessionsCommand,
  ListWorkflowDefinitionsCommand,
  ListWorkflowRunsCommand,
  UpdateActCommand,
  UpdateWorkflowRunCommand,
};

export interface NovaAct {
  /**
   * @see {@link CreateActCommand}
   */
  createAct(args: CreateActCommandInput, options?: __HttpHandlerOptions): Promise<CreateActCommandOutput>;
  createAct(args: CreateActCommandInput, cb: (err: any, data?: CreateActCommandOutput) => void): void;
  createAct(
    args: CreateActCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
  createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowDefinitionCommand}
   */
  createWorkflowDefinition(
    args: CreateWorkflowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowDefinitionCommandOutput>;
  createWorkflowDefinition(
    args: CreateWorkflowDefinitionCommandInput,
    cb: (err: any, data?: CreateWorkflowDefinitionCommandOutput) => void
  ): void;
  createWorkflowDefinition(
    args: CreateWorkflowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowRunCommand}
   */
  createWorkflowRun(
    args: CreateWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowRunCommandOutput>;
  createWorkflowRun(
    args: CreateWorkflowRunCommandInput,
    cb: (err: any, data?: CreateWorkflowRunCommandOutput) => void
  ): void;
  createWorkflowRun(
    args: CreateWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowDefinitionCommand}
   */
  deleteWorkflowDefinition(
    args: DeleteWorkflowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowDefinitionCommandOutput>;
  deleteWorkflowDefinition(
    args: DeleteWorkflowDefinitionCommandInput,
    cb: (err: any, data?: DeleteWorkflowDefinitionCommandOutput) => void
  ): void;
  deleteWorkflowDefinition(
    args: DeleteWorkflowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowRunCommand}
   */
  deleteWorkflowRun(
    args: DeleteWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowRunCommandOutput>;
  deleteWorkflowRun(
    args: DeleteWorkflowRunCommandInput,
    cb: (err: any, data?: DeleteWorkflowRunCommandOutput) => void
  ): void;
  deleteWorkflowRun(
    args: DeleteWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowDefinitionCommand}
   */
  getWorkflowDefinition(
    args: GetWorkflowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowDefinitionCommandOutput>;
  getWorkflowDefinition(
    args: GetWorkflowDefinitionCommandInput,
    cb: (err: any, data?: GetWorkflowDefinitionCommandOutput) => void
  ): void;
  getWorkflowDefinition(
    args: GetWorkflowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowDefinitionCommandOutput) => void
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
   * @see {@link InvokeActStepCommand}
   */
  invokeActStep(args: InvokeActStepCommandInput, options?: __HttpHandlerOptions): Promise<InvokeActStepCommandOutput>;
  invokeActStep(args: InvokeActStepCommandInput, cb: (err: any, data?: InvokeActStepCommandOutput) => void): void;
  invokeActStep(
    args: InvokeActStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeActStepCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActsCommand}
   */
  listActs(args: ListActsCommandInput, options?: __HttpHandlerOptions): Promise<ListActsCommandOutput>;
  listActs(args: ListActsCommandInput, cb: (err: any, data?: ListActsCommandOutput) => void): void;
  listActs(
    args: ListActsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelsCommand}
   */
  listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
  listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
  listModels(
    args: ListModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(args: ListSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowDefinitionsCommand}
   */
  listWorkflowDefinitions(): Promise<ListWorkflowDefinitionsCommandOutput>;
  listWorkflowDefinitions(
    args: ListWorkflowDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowDefinitionsCommandOutput>;
  listWorkflowDefinitions(
    args: ListWorkflowDefinitionsCommandInput,
    cb: (err: any, data?: ListWorkflowDefinitionsCommandOutput) => void
  ): void;
  listWorkflowDefinitions(
    args: ListWorkflowDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowDefinitionsCommandOutput) => void
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
   * @see {@link UpdateActCommand}
   */
  updateAct(args: UpdateActCommandInput, options?: __HttpHandlerOptions): Promise<UpdateActCommandOutput>;
  updateAct(args: UpdateActCommandInput, cb: (err: any, data?: UpdateActCommandOutput) => void): void;
  updateAct(
    args: UpdateActCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowRunCommand}
   */
  updateWorkflowRun(
    args: UpdateWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowRunCommandOutput>;
  updateWorkflowRun(
    args: UpdateWorkflowRunCommandInput,
    cb: (err: any, data?: UpdateWorkflowRunCommandOutput) => void
  ): void;
  updateWorkflowRun(
    args: UpdateWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowRunCommandOutput) => void
  ): void;
}

/**
 * <p>The Nova Act service provides a REST API for managing AI-powered workflow automation. It enables users to create workflow definitions, execute workflow runs, manage sessions, and orchestrate acts (individual AI tasks) with tool integrations.</p>
 * @public
 */
export class NovaAct extends NovaActClient implements NovaAct {}
createAggregatedClient(commands, NovaAct);
