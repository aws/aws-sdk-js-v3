// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AmpClient } from "./AmpClient";
import {
  CreateAlertManagerDefinitionCommand,
  CreateAlertManagerDefinitionCommandInput,
  CreateAlertManagerDefinitionCommandOutput,
} from "./commands/CreateAlertManagerDefinitionCommand";
import {
  CreateLoggingConfigurationCommand,
  CreateLoggingConfigurationCommandInput,
  CreateLoggingConfigurationCommandOutput,
} from "./commands/CreateLoggingConfigurationCommand";
import {
  CreateRuleGroupsNamespaceCommand,
  CreateRuleGroupsNamespaceCommandInput,
  CreateRuleGroupsNamespaceCommandOutput,
} from "./commands/CreateRuleGroupsNamespaceCommand";
import {
  CreateWorkspaceCommand,
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
} from "./commands/CreateWorkspaceCommand";
import {
  DeleteAlertManagerDefinitionCommand,
  DeleteAlertManagerDefinitionCommandInput,
  DeleteAlertManagerDefinitionCommandOutput,
} from "./commands/DeleteAlertManagerDefinitionCommand";
import {
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeleteRuleGroupsNamespaceCommand,
  DeleteRuleGroupsNamespaceCommandInput,
  DeleteRuleGroupsNamespaceCommandOutput,
} from "./commands/DeleteRuleGroupsNamespaceCommand";
import {
  DeleteWorkspaceCommand,
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
} from "./commands/DeleteWorkspaceCommand";
import {
  DescribeAlertManagerDefinitionCommand,
  DescribeAlertManagerDefinitionCommandInput,
  DescribeAlertManagerDefinitionCommandOutput,
} from "./commands/DescribeAlertManagerDefinitionCommand";
import {
  DescribeLoggingConfigurationCommand,
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
} from "./commands/DescribeLoggingConfigurationCommand";
import {
  DescribeRuleGroupsNamespaceCommand,
  DescribeRuleGroupsNamespaceCommandInput,
  DescribeRuleGroupsNamespaceCommandOutput,
} from "./commands/DescribeRuleGroupsNamespaceCommand";
import {
  DescribeWorkspaceCommand,
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import {
  ListRuleGroupsNamespacesCommand,
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
} from "./commands/ListRuleGroupsNamespacesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "./commands/ListWorkspacesCommand";
import {
  PutAlertManagerDefinitionCommand,
  PutAlertManagerDefinitionCommandInput,
  PutAlertManagerDefinitionCommandOutput,
} from "./commands/PutAlertManagerDefinitionCommand";
import {
  PutRuleGroupsNamespaceCommand,
  PutRuleGroupsNamespaceCommandInput,
  PutRuleGroupsNamespaceCommandOutput,
} from "./commands/PutRuleGroupsNamespaceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
} from "./commands/UpdateWorkspaceAliasCommand";

/**
 * Amazon Managed Service for Prometheus
 */
export class Amp extends AmpClient {
  /**
   * Create an alert manager definition.
   */
  public createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAlertManagerDefinitionCommandOutput>;
  public createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: CreateAlertManagerDefinitionCommandOutput) => void
  ): void;
  public createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlertManagerDefinitionCommandOutput) => void
  ): void;
  public createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAlertManagerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateAlertManagerDefinitionCommandOutput) => void
  ): Promise<CreateAlertManagerDefinitionCommandOutput> | void {
    const command = new CreateAlertManagerDefinitionCommand(args);
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
   * Create logging configuration.
   */
  public createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoggingConfigurationCommandOutput>;
  public createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    cb: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): void;
  public createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): void;
  public createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): Promise<CreateLoggingConfigurationCommandOutput> | void {
    const command = new CreateLoggingConfigurationCommand(args);
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
   * Create a rule group namespace.
   */
  public createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupsNamespaceCommandOutput>;
  public createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: CreateRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleGroupsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleGroupsNamespaceCommandOutput) => void
  ): Promise<CreateRuleGroupsNamespaceCommandOutput> | void {
    const command = new CreateRuleGroupsNamespaceCommand(args);
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
   * Creates a new AMP workspace.
   */
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): Promise<CreateWorkspaceCommandOutput> | void {
    const command = new CreateWorkspaceCommand(args);
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
   * Deletes an alert manager definition.
   */
  public deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlertManagerDefinitionCommandOutput>;
  public deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: DeleteAlertManagerDefinitionCommandOutput) => void
  ): void;
  public deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlertManagerDefinitionCommandOutput) => void
  ): void;
  public deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAlertManagerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteAlertManagerDefinitionCommandOutput) => void
  ): Promise<DeleteAlertManagerDefinitionCommandOutput> | void {
    const command = new DeleteAlertManagerDefinitionCommand(args);
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
   * Delete logging configuration.
   */
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoggingConfigurationCommandOutput>;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): Promise<DeleteLoggingConfigurationCommandOutput> | void {
    const command = new DeleteLoggingConfigurationCommand(args);
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
   * Delete a rule groups namespace.
   */
  public deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupsNamespaceCommandOutput>;
  public deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: DeleteRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleGroupsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleGroupsNamespaceCommandOutput) => void
  ): Promise<DeleteRuleGroupsNamespaceCommandOutput> | void {
    const command = new DeleteRuleGroupsNamespaceCommand(args);
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
   * Deletes an AMP workspace.
   */
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): Promise<DeleteWorkspaceCommandOutput> | void {
    const command = new DeleteWorkspaceCommand(args);
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
   * Describes an alert manager definition.
   */
  public describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlertManagerDefinitionCommandOutput>;
  public describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: DescribeAlertManagerDefinitionCommandOutput) => void
  ): void;
  public describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlertManagerDefinitionCommandOutput) => void
  ): void;
  public describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlertManagerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlertManagerDefinitionCommandOutput) => void
  ): Promise<DescribeAlertManagerDefinitionCommandOutput> | void {
    const command = new DescribeAlertManagerDefinitionCommand(args);
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
   * Describes logging configuration.
   */
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingConfigurationCommandOutput>;
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): Promise<DescribeLoggingConfigurationCommandOutput> | void {
    const command = new DescribeLoggingConfigurationCommand(args);
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
   * Describe a rule groups namespace.
   */
  public describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupsNamespaceCommandOutput>;
  public describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: DescribeRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRuleGroupsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuleGroupsNamespaceCommandOutput) => void
  ): Promise<DescribeRuleGroupsNamespaceCommandOutput> | void {
    const command = new DescribeRuleGroupsNamespaceCommand(args);
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
   * Describes an existing AMP workspace.
   */
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): Promise<DescribeWorkspaceCommandOutput> | void {
    const command = new DescribeWorkspaceCommand(args);
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
   * Lists rule groups namespaces.
   */
  public listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsNamespacesCommandOutput>;
  public listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    cb: (err: any, data?: ListRuleGroupsNamespacesCommandOutput) => void
  ): void;
  public listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsNamespacesCommandOutput) => void
  ): void;
  public listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRuleGroupsNamespacesCommandOutput) => void),
    cb?: (err: any, data?: ListRuleGroupsNamespacesCommandOutput) => void
  ): Promise<ListRuleGroupsNamespacesCommandOutput> | void {
    const command = new ListRuleGroupsNamespacesCommand(args);
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
   * Lists the tags you have assigned to the resource.
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
   * Lists all AMP workspaces, including workspaces being created or deleted.
   */
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): Promise<ListWorkspacesCommandOutput> | void {
    const command = new ListWorkspacesCommand(args);
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
   * Update an alert manager definition.
   */
  public putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAlertManagerDefinitionCommandOutput>;
  public putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: PutAlertManagerDefinitionCommandOutput) => void
  ): void;
  public putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAlertManagerDefinitionCommandOutput) => void
  ): void;
  public putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAlertManagerDefinitionCommandOutput) => void),
    cb?: (err: any, data?: PutAlertManagerDefinitionCommandOutput) => void
  ): Promise<PutAlertManagerDefinitionCommandOutput> | void {
    const command = new PutAlertManagerDefinitionCommand(args);
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
   * Update a rule groups namespace.
   */
  public putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuleGroupsNamespaceCommandOutput>;
  public putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: PutRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuleGroupsNamespaceCommandOutput) => void
  ): void;
  public putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRuleGroupsNamespaceCommandOutput) => void),
    cb?: (err: any, data?: PutRuleGroupsNamespaceCommandOutput) => void
  ): Promise<PutRuleGroupsNamespaceCommandOutput> | void {
    const command = new PutRuleGroupsNamespaceCommand(args);
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
   * Creates tags for the specified resource.
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
   * Deletes tags from the specified resource.
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
   * Update logging configuration.
   */
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoggingConfigurationCommandOutput>;
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): Promise<UpdateLoggingConfigurationCommandOutput> | void {
    const command = new UpdateLoggingConfigurationCommand(args);
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
   * Updates an AMP workspace alias.
   */
  public updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceAliasCommandOutput>;
  public updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    cb: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): void;
  public updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): void;
  public updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): Promise<UpdateWorkspaceAliasCommandOutput> | void {
    const command = new UpdateWorkspaceAliasCommand(args);
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
