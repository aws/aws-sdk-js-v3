import { AmpClient } from "./AmpClient";
import {
  CreateWorkspaceCommand,
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
} from "./commands/CreateWorkspaceCommand";
import {
  DeleteWorkspaceCommand,
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
} from "./commands/DeleteWorkspaceCommand";
import {
  DescribeWorkspaceCommand,
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "./commands/ListWorkspacesCommand";
import {
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
} from "./commands/UpdateWorkspaceAliasCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * Amazon Managed Service for Prometheus
 */
export class Amp extends AmpClient {
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
