// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { MigrationHubOrchestratorClient } from "./MigrationHubOrchestratorClient";

/**
 * <p>This API reference provides descriptions, syntax, and other details about each of the
 *             actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API
 *             request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *             access an API that is tailored to the programming language or platform that you're
 *             using.</p>
 */
export class MigrationHubOrchestrator extends MigrationHubOrchestratorClient {
  /**
   * <p>Create a workflow to orchestrate your migrations.</p>
   */
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): Promise<CreateWorkflowCommandOutput> | void {
    const command = new CreateWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a step in the migration workflow.</p>
   */
  public createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowStepCommandOutput>;
  public createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    cb: (err: any, data?: CreateWorkflowStepCommandOutput) => void
  ): void;
  public createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowStepCommandOutput) => void
  ): void;
  public createWorkflowStep(
    args: CreateWorkflowStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowStepCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowStepCommandOutput) => void
  ): Promise<CreateWorkflowStepCommandOutput> | void {
    const command = new CreateWorkflowStepCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a step group in a migration workflow.</p>
   */
  public createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowStepGroupCommandOutput>;
  public createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    cb: (err: any, data?: CreateWorkflowStepGroupCommandOutput) => void
  ): void;
  public createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowStepGroupCommandOutput) => void
  ): void;
  public createWorkflowStepGroup(
    args: CreateWorkflowStepGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowStepGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowStepGroupCommandOutput) => void
  ): Promise<CreateWorkflowStepGroupCommandOutput> | void {
    const command = new CreateWorkflowStepGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to
   *             delete it.</p>
   */
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): Promise<DeleteWorkflowCommandOutput> | void {
    const command = new DeleteWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a step in a migration workflow. Pause the workflow to delete a running
   *             step.</p>
   */
  public deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowStepCommandOutput>;
  public deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    cb: (err: any, data?: DeleteWorkflowStepCommandOutput) => void
  ): void;
  public deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowStepCommandOutput) => void
  ): void;
  public deleteWorkflowStep(
    args: DeleteWorkflowStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowStepCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowStepCommandOutput) => void
  ): Promise<DeleteWorkflowStepCommandOutput> | void {
    const command = new DeleteWorkflowStepCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a step group in a migration workflow.</p>
   */
  public deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowStepGroupCommandOutput>;
  public deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    cb: (err: any, data?: DeleteWorkflowStepGroupCommandOutput) => void
  ): void;
  public deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowStepGroupCommandOutput) => void
  ): void;
  public deleteWorkflowStepGroup(
    args: DeleteWorkflowStepGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowStepGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowStepGroupCommandOutput) => void
  ): Promise<DeleteWorkflowStepGroupCommandOutput> | void {
    const command = new DeleteWorkflowStepGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the template you want to use for creating a migration workflow.</p>
   */
  public getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  public getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateCommandOutput) => void
  ): Promise<GetTemplateCommandOutput> | void {
    const command = new GetTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a specific step in a template.</p>
   */
  public getTemplateStep(
    args: GetTemplateStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateStepCommandOutput>;
  public getTemplateStep(
    args: GetTemplateStepCommandInput,
    cb: (err: any, data?: GetTemplateStepCommandOutput) => void
  ): void;
  public getTemplateStep(
    args: GetTemplateStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateStepCommandOutput) => void
  ): void;
  public getTemplateStep(
    args: GetTemplateStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateStepCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateStepCommandOutput) => void
  ): Promise<GetTemplateStepCommandOutput> | void {
    const command = new GetTemplateStepCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a step group in a template.</p>
   */
  public getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateStepGroupCommandOutput>;
  public getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    cb: (err: any, data?: GetTemplateStepGroupCommandOutput) => void
  ): void;
  public getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateStepGroupCommandOutput) => void
  ): void;
  public getTemplateStepGroup(
    args: GetTemplateStepGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateStepGroupCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateStepGroupCommandOutput) => void
  ): Promise<GetTemplateStepGroupCommandOutput> | void {
    const command = new GetTemplateStepGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get migration workflow.</p>
   */
  public getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  public getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowCommandOutput) => void
  ): Promise<GetWorkflowCommandOutput> | void {
    const command = new GetWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a step in the migration workflow.</p>
   */
  public getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepCommandOutput>;
  public getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    cb: (err: any, data?: GetWorkflowStepCommandOutput) => void
  ): void;
  public getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepCommandOutput) => void
  ): void;
  public getWorkflowStep(
    args: GetWorkflowStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowStepCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowStepCommandOutput) => void
  ): Promise<GetWorkflowStepCommandOutput> | void {
    const command = new GetWorkflowStepCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the step group of a migration workflow.</p>
   */
  public getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepGroupCommandOutput>;
  public getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    cb: (err: any, data?: GetWorkflowStepGroupCommandOutput) => void
  ): void;
  public getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepGroupCommandOutput) => void
  ): void;
  public getWorkflowStepGroup(
    args: GetWorkflowStepGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowStepGroupCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowStepGroupCommandOutput) => void
  ): Promise<GetWorkflowStepGroupCommandOutput> | void {
    const command = new GetWorkflowStepGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List AWS Migration Hub Orchestrator plugins.</p>
   */
  public listPlugins(args: ListPluginsCommandInput, options?: __HttpHandlerOptions): Promise<ListPluginsCommandOutput>;
  public listPlugins(args: ListPluginsCommandInput, cb: (err: any, data?: ListPluginsCommandOutput) => void): void;
  public listPlugins(
    args: ListPluginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginsCommandOutput) => void
  ): void;
  public listPlugins(
    args: ListPluginsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPluginsCommandOutput) => void),
    cb?: (err: any, data?: ListPluginsCommandOutput) => void
  ): Promise<ListPluginsCommandOutput> | void {
    const command = new ListPluginsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the tags added to a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the templates available in Migration Hub Orchestrator to create a migration workflow.</p>
   */
  public listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  public listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplatesCommandOutput) => void
  ): Promise<ListTemplatesCommandOutput> | void {
    const command = new ListTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the step groups in a template.</p>
   */
  public listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateStepGroupsCommandOutput>;
  public listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    cb: (err: any, data?: ListTemplateStepGroupsCommandOutput) => void
  ): void;
  public listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateStepGroupsCommandOutput) => void
  ): void;
  public listTemplateStepGroups(
    args: ListTemplateStepGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplateStepGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateStepGroupsCommandOutput) => void
  ): Promise<ListTemplateStepGroupsCommandOutput> | void {
    const command = new ListTemplateStepGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the steps in a template.</p>
   */
  public listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateStepsCommandOutput>;
  public listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    cb: (err: any, data?: ListTemplateStepsCommandOutput) => void
  ): void;
  public listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateStepsCommandOutput) => void
  ): void;
  public listTemplateSteps(
    args: ListTemplateStepsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplateStepsCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateStepsCommandOutput) => void
  ): Promise<ListTemplateStepsCommandOutput> | void {
    const command = new ListTemplateStepsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the migration workflows.</p>
   */
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): Promise<ListWorkflowsCommandOutput> | void {
    const command = new ListWorkflowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the step groups in a migration workflow.</p>
   */
  public listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowStepGroupsCommandOutput>;
  public listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    cb: (err: any, data?: ListWorkflowStepGroupsCommandOutput) => void
  ): void;
  public listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowStepGroupsCommandOutput) => void
  ): void;
  public listWorkflowStepGroups(
    args: ListWorkflowStepGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowStepGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowStepGroupsCommandOutput) => void
  ): Promise<ListWorkflowStepGroupsCommandOutput> | void {
    const command = new ListWorkflowStepGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the steps in a workflow.</p>
   */
  public listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowStepsCommandOutput>;
  public listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    cb: (err: any, data?: ListWorkflowStepsCommandOutput) => void
  ): void;
  public listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowStepsCommandOutput) => void
  ): void;
  public listWorkflowSteps(
    args: ListWorkflowStepsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowStepsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowStepsCommandOutput) => void
  ): Promise<ListWorkflowStepsCommandOutput> | void {
    const command = new ListWorkflowStepsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retry a failed step in a migration workflow.</p>
   */
  public retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryWorkflowStepCommandOutput>;
  public retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    cb: (err: any, data?: RetryWorkflowStepCommandOutput) => void
  ): void;
  public retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryWorkflowStepCommandOutput) => void
  ): void;
  public retryWorkflowStep(
    args: RetryWorkflowStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetryWorkflowStepCommandOutput) => void),
    cb?: (err: any, data?: RetryWorkflowStepCommandOutput) => void
  ): Promise<RetryWorkflowStepCommandOutput> | void {
    const command = new RetryWorkflowStepCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Start a migration workflow.</p>
   */
  public startWorkflow(
    args: StartWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowCommandOutput>;
  public startWorkflow(
    args: StartWorkflowCommandInput,
    cb: (err: any, data?: StartWorkflowCommandOutput) => void
  ): void;
  public startWorkflow(
    args: StartWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowCommandOutput) => void
  ): void;
  public startWorkflow(
    args: StartWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartWorkflowCommandOutput) => void),
    cb?: (err: any, data?: StartWorkflowCommandOutput) => void
  ): Promise<StartWorkflowCommandOutput> | void {
    const command = new StartWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stop an ongoing migration workflow.</p>
   */
  public stopWorkflow(
    args: StopWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkflowCommandOutput>;
  public stopWorkflow(args: StopWorkflowCommandInput, cb: (err: any, data?: StopWorkflowCommandOutput) => void): void;
  public stopWorkflow(
    args: StopWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkflowCommandOutput) => void
  ): void;
  public stopWorkflow(
    args: StopWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopWorkflowCommandOutput) => void),
    cb?: (err: any, data?: StopWorkflowCommandOutput) => void
  ): Promise<StopWorkflowCommandOutput> | void {
    const command = new StopWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tag a resource by specifying its Amazon Resource Name (ARN).</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the tags for a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a migration workflow.</p>
   */
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): Promise<UpdateWorkflowCommandOutput> | void {
    const command = new UpdateWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a step in a migration workflow.</p>
   */
  public updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowStepCommandOutput>;
  public updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    cb: (err: any, data?: UpdateWorkflowStepCommandOutput) => void
  ): void;
  public updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowStepCommandOutput) => void
  ): void;
  public updateWorkflowStep(
    args: UpdateWorkflowStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkflowStepCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkflowStepCommandOutput) => void
  ): Promise<UpdateWorkflowStepCommandOutput> | void {
    const command = new UpdateWorkflowStepCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the step group in a migration workflow.</p>
   */
  public updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowStepGroupCommandOutput>;
  public updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    cb: (err: any, data?: UpdateWorkflowStepGroupCommandOutput) => void
  ): void;
  public updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowStepGroupCommandOutput) => void
  ): void;
  public updateWorkflowStepGroup(
    args: UpdateWorkflowStepGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkflowStepGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkflowStepGroupCommandOutput) => void
  ): Promise<UpdateWorkflowStepGroupCommandOutput> | void {
    const command = new UpdateWorkflowStepGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
