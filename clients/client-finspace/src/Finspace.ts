// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import { FinspaceClient } from "./FinspaceClient";

/**
 * <p>The FinSpace management service provides the APIs for managing FinSpace environments.</p>
 */
export class Finspace extends FinspaceClient {
  /**
   * <p>Create a new FinSpace environment.</p>
   */
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): Promise<CreateEnvironmentCommandOutput> | void {
    const command = new CreateEnvironmentCommand(args);
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
   * <p>Delete an FinSpace environment.</p>
   */
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): Promise<DeleteEnvironmentCommandOutput> | void {
    const command = new DeleteEnvironmentCommand(args);
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
   * <p>Returns the FinSpace environment object.</p>
   */
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): Promise<GetEnvironmentCommandOutput> | void {
    const command = new GetEnvironmentCommand(args);
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
   * <p>A list of all of your FinSpace environments.</p>
   */
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): Promise<ListEnvironmentsCommandOutput> | void {
    const command = new ListEnvironmentsCommand(args);
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
   * <p>A list of all tags for a resource.</p>
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
   * <p>Adds metadata tags to a FinSpace resource.</p>
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
   * <p>Removes metadata tags from a FinSpace resource.</p>
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
   * <p>Update your FinSpace environment.</p>
   */
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): Promise<UpdateEnvironmentCommandOutput> | void {
    const command = new UpdateEnvironmentCommand(args);
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
