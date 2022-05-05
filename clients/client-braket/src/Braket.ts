// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { BraketClient } from "./BraketClient";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CancelQuantumTaskCommand,
  CancelQuantumTaskCommandInput,
  CancelQuantumTaskCommandOutput,
} from "./commands/CancelQuantumTaskCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateQuantumTaskCommand,
  CreateQuantumTaskCommandInput,
  CreateQuantumTaskCommandOutput,
} from "./commands/CreateQuantumTaskCommand";
import { GetDeviceCommand, GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
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
import { SearchJobsCommand, SearchJobsCommandInput, SearchJobsCommandOutput } from "./commands/SearchJobsCommand";
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

/**
 * <p>The Amazon Braket API Reference provides information about the operations and structures
 *          supported in Amazon Braket.</p>
 *          <p>Additional Resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class Braket extends BraketClient {
  /**
   * <p>Cancels an Amazon Braket job.</p>
   */
  public cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  public cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  public cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobCommandOutput) => void),
    cb?: (err: any, data?: CancelJobCommandOutput) => void
  ): Promise<CancelJobCommandOutput> | void {
    const command = new CancelJobCommand(args);
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
   * <p>Creates an Amazon Braket job.</p>
   */
  public createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  public createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
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
   *          <note>
   *             <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM
   *             information is omitted from GetDevice API calls. To get this information the user-agent
   *             needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK
   *             automatically reports this for you. If you do not see OpenQASM results in the GetDevice
   *             response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment
   *             variable to configure user-agent. See the code examples provided below for how to do
   *             this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p>
   *          </note>
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
   * <p>Retrieves the specified Amazon Braket job.</p>
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
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
   * <p>Searches for Amazon Braket jobs that match the specified filter values.</p>
   */
  public searchJobs(args: SearchJobsCommandInput, options?: __HttpHandlerOptions): Promise<SearchJobsCommandOutput>;
  public searchJobs(args: SearchJobsCommandInput, cb: (err: any, data?: SearchJobsCommandOutput) => void): void;
  public searchJobs(
    args: SearchJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;
  public searchJobs(
    args: SearchJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchJobsCommandOutput) => void),
    cb?: (err: any, data?: SearchJobsCommandOutput) => void
  ): Promise<SearchJobsCommandOutput> | void {
    const command = new SearchJobsCommand(args);
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
