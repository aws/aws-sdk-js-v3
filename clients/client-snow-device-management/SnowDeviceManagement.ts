import { SnowDeviceManagementClient } from "./SnowDeviceManagementClient";
import { CancelTaskCommand, CancelTaskCommandInput, CancelTaskCommandOutput } from "./commands/CancelTaskCommand";
import { CreateTaskCommand, CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import {
  DescribeDeviceCommand,
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
} from "./commands/DescribeDeviceCommand";
import {
  DescribeDeviceEc2InstancesCommand,
  DescribeDeviceEc2InstancesCommandInput,
  DescribeDeviceEc2InstancesCommandOutput,
} from "./commands/DescribeDeviceEc2InstancesCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeTaskCommand,
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput,
} from "./commands/DescribeTaskCommand";
import {
  ListDeviceResourcesCommand,
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput,
} from "./commands/ListDeviceResourcesCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Web Services Snow Device Management documentation.</p>
 */
export class SnowDeviceManagement extends SnowDeviceManagementClient {
  /**
   * <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a
   *         <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p>
   *          <note>
   *             <p>A task might still run if it's processed from the queue before the
   *           <code>CancelTask</code> operation changes the task's state.</p>
   *          </note>
   */
  public cancelTask(args: CancelTaskCommandInput, options?: __HttpHandlerOptions): Promise<CancelTaskCommandOutput>;
  public cancelTask(args: CancelTaskCommandInput, cb: (err: any, data?: CancelTaskCommandOutput) => void): void;
  public cancelTask(
    args: CancelTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTaskCommandOutput) => void
  ): void;
  public cancelTask(
    args: CancelTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelTaskCommandOutput) => void
  ): Promise<CancelTaskCommandOutput> | void {
    const command = new CancelTaskCommand(args);
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
   * <p>Instructs one or more devices to start a task, such as unlocking or rebooting.</p>
   */
  public createTask(args: CreateTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateTaskCommandOutput>;
  public createTask(args: CreateTaskCommandInput, cb: (err: any, data?: CreateTaskCommandOutput) => void): void;
  public createTask(
    args: CreateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;
  public createTask(
    args: CreateTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateTaskCommandOutput) => void
  ): Promise<CreateTaskCommandOutput> | void {
    const command = new CreateTaskCommand(args);
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
   * <p>Checks device-specific information, such as the device type, software version, IP
   *       addresses, and lock status.</p>
   */
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeviceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): Promise<DescribeDeviceCommandOutput> | void {
    const command = new DescribeDeviceCommand(args);
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
   * <p>Checks the current state of the Amazon EC2 instances. The output is similar to
   *         <code>describeDevice</code>, but the results are sourced from the device cache in the
   *       Amazon Web Services Cloud and include a subset of the available fields. </p>
   */
  public describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceEc2InstancesCommandOutput>;
  public describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    cb: (err: any, data?: DescribeDeviceEc2InstancesCommandOutput) => void
  ): void;
  public describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceEc2InstancesCommandOutput) => void
  ): void;
  public describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeviceEc2InstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeviceEc2InstancesCommandOutput) => void
  ): Promise<DescribeDeviceEc2InstancesCommandOutput> | void {
    const command = new DescribeDeviceEc2InstancesCommand(args);
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
   * <p>Checks the status of a remote task running on one or more target devices.</p>
   */
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): Promise<DescribeExecutionCommandOutput> | void {
    const command = new DescribeExecutionCommand(args);
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
   * <p>Checks the metadata for a given task on a device. </p>
   */
  public describeTask(
    args: DescribeTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskCommandOutput>;
  public describeTask(args: DescribeTaskCommandInput, cb: (err: any, data?: DescribeTaskCommandOutput) => void): void;
  public describeTask(
    args: DescribeTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;
  public describeTask(
    args: DescribeTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeTaskCommandOutput) => void
  ): Promise<DescribeTaskCommandOutput> | void {
    const command = new DescribeTaskCommand(args);
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
   * <p>Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.</p>
   */
  public listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceResourcesCommandOutput>;
  public listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    cb: (err: any, data?: ListDeviceResourcesCommandOutput) => void
  ): void;
  public listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceResourcesCommandOutput) => void
  ): void;
  public listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceResourcesCommandOutput) => void
  ): Promise<ListDeviceResourcesCommandOutput> | void {
    const command = new ListDeviceResourcesCommand(args);
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
   * <p>Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management
   *       enabled in the Amazon Web Services Region where the command is run.</p>
   */
  public listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  public listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  public listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesCommandOutput) => void
  ): Promise<ListDevicesCommandOutput> | void {
    const command = new ListDevicesCommand(args);
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
   * <p>Returns the status of tasks for one or more target devices.</p>
   */
  public listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  public listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListExecutionsCommandOutput) => void
  ): Promise<ListExecutionsCommandOutput> | void {
    const command = new ListExecutionsCommand(args);
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
   * <p>Returns a list of tags for a managed device or task.</p>
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
   * <p>Returns a list of tasks that can be filtered by state.</p>
   */
  public listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
  public listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
  public listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  public listTasks(
    args: ListTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTasksCommandOutput) => void),
    cb?: (err: any, data?: ListTasksCommandOutput) => void
  ): Promise<ListTasksCommandOutput> | void {
    const command = new ListTasksCommand(args);
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
   * <p>Adds or replaces tags on a device or task.</p>
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
   * <p>Removes a tag from a device or task.</p>
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
