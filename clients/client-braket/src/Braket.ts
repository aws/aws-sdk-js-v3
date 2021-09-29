import { BraketClient } from "./BraketClient";
import {
  CancelQuantumTaskCommand,
  CancelQuantumTaskCommandInput,
  CancelQuantumTaskCommandOutput,
} from "./commands/CancelQuantumTaskCommand";
import {
  CreateQuantumTaskCommand,
  CreateQuantumTaskCommandInput,
  CreateQuantumTaskCommandOutput,
} from "./commands/CreateQuantumTaskCommand";
import { GetDeviceCommand, GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import {
  GetQuantumTaskCommand,
  GetQuantumTaskCommandInput,
  GetQuantumTaskCommandOutput,
} from "./commands/GetQuantumTaskCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "./commands/SearchDevicesCommand";
import {
  SearchQuantumTasksCommand,
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput,
} from "./commands/SearchQuantumTasksCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.</p>
 */
export class Braket extends BraketClient {
  /**
   * <p>Cancels the specified task.</p>
   */
  public cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelQuantumTaskCommandOutput>;
  public cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    cb: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): void;
  public cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): void;
  public cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelQuantumTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): Promise<CancelQuantumTaskCommandOutput> | void {
    const command = new CancelQuantumTaskCommand(args);
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
   * <p>Creates a quantum task.</p>
   */
  public createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuantumTaskCommandOutput>;
  public createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    cb: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): void;
  public createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): void;
  public createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQuantumTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): Promise<CreateQuantumTaskCommandOutput> | void {
    const command = new CreateQuantumTaskCommand(args);
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
   * <p>Retrieves the devices available in Amazon Braket.</p>
   */
  public getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  public getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  public getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceCommandOutput) => void
  ): Promise<GetDeviceCommandOutput> | void {
    const command = new GetDeviceCommand(args);
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
   * <p>Retrieves the specified quantum task.</p>
   */
  public getQuantumTask(
    args: GetQuantumTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuantumTaskCommandOutput>;
  public getQuantumTask(
    args: GetQuantumTaskCommandInput,
    cb: (err: any, data?: GetQuantumTaskCommandOutput) => void
  ): void;
  public getQuantumTask(
    args: GetQuantumTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuantumTaskCommandOutput) => void
  ): void;
  public getQuantumTask(
    args: GetQuantumTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQuantumTaskCommandOutput) => void),
    cb?: (err: any, data?: GetQuantumTaskCommandOutput) => void
  ): Promise<GetQuantumTaskCommandOutput> | void {
    const command = new GetQuantumTaskCommand(args);
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
   * <p>Shows the tags associated with this resource.</p>
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
   * <p>Searches for devices using the specified filters.</p>
   */
  public searchDevices(
    args: SearchDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDevicesCommandOutput>;
  public searchDevices(
    args: SearchDevicesCommandInput,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;
  public searchDevices(
    args: SearchDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;
  public searchDevices(
    args: SearchDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchDevicesCommandOutput) => void),
    cb?: (err: any, data?: SearchDevicesCommandOutput) => void
  ): Promise<SearchDevicesCommandOutput> | void {
    const command = new SearchDevicesCommand(args);
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
   * <p>Searches for tasks that match the specified filter values.</p>
   */
  public searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchQuantumTasksCommandOutput>;
  public searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    cb: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): void;
  public searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): void;
  public searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchQuantumTasksCommandOutput) => void),
    cb?: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): Promise<SearchQuantumTasksCommandOutput> | void {
    const command = new SearchQuantumTasksCommand(args);
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
   * <p>Add a tag to the specified resource.</p>
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
   * <p>Remove tags from a resource.</p>
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
}
