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
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "./commands/SearchDevicesCommand";
import {
  SearchQuantumTasksCommand,
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput,
} from "./commands/SearchQuantumTasksCommand";
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
}
