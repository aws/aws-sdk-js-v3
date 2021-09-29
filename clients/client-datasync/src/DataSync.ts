import { DataSyncClient } from "./DataSyncClient";
import {
  CancelTaskExecutionCommand,
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
} from "./commands/CancelTaskExecutionCommand";
import { CreateAgentCommand, CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import {
  CreateLocationEfsCommand,
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput,
} from "./commands/CreateLocationEfsCommand";
import {
  CreateLocationFsxWindowsCommand,
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
} from "./commands/CreateLocationFsxWindowsCommand";
import {
  CreateLocationNfsCommand,
  CreateLocationNfsCommandInput,
  CreateLocationNfsCommandOutput,
} from "./commands/CreateLocationNfsCommand";
import {
  CreateLocationObjectStorageCommand,
  CreateLocationObjectStorageCommandInput,
  CreateLocationObjectStorageCommandOutput,
} from "./commands/CreateLocationObjectStorageCommand";
import {
  CreateLocationS3Command,
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput,
} from "./commands/CreateLocationS3Command";
import {
  CreateLocationSmbCommand,
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput,
} from "./commands/CreateLocationSmbCommand";
import { CreateTaskCommand, CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import { DeleteAgentCommand, DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import {
  DeleteLocationCommand,
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput,
} from "./commands/DeleteLocationCommand";
import { DeleteTaskCommand, DeleteTaskCommandInput, DeleteTaskCommandOutput } from "./commands/DeleteTaskCommand";
import {
  DescribeAgentCommand,
  DescribeAgentCommandInput,
  DescribeAgentCommandOutput,
} from "./commands/DescribeAgentCommand";
import {
  DescribeLocationEfsCommand,
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput,
} from "./commands/DescribeLocationEfsCommand";
import {
  DescribeLocationFsxWindowsCommand,
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
} from "./commands/DescribeLocationFsxWindowsCommand";
import {
  DescribeLocationNfsCommand,
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput,
} from "./commands/DescribeLocationNfsCommand";
import {
  DescribeLocationObjectStorageCommand,
  DescribeLocationObjectStorageCommandInput,
  DescribeLocationObjectStorageCommandOutput,
} from "./commands/DescribeLocationObjectStorageCommand";
import {
  DescribeLocationS3Command,
  DescribeLocationS3CommandInput,
  DescribeLocationS3CommandOutput,
} from "./commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommand,
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput,
} from "./commands/DescribeLocationSmbCommand";
import {
  DescribeTaskCommand,
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput,
} from "./commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommand,
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
} from "./commands/DescribeTaskExecutionCommand";
import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
} from "./commands/ListLocationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskExecutionsCommand,
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput,
} from "./commands/ListTaskExecutionsCommand";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import {
  StartTaskExecutionCommand,
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput,
} from "./commands/StartTaskExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAgentCommand, UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import {
  UpdateLocationNfsCommand,
  UpdateLocationNfsCommandInput,
  UpdateLocationNfsCommandOutput,
} from "./commands/UpdateLocationNfsCommand";
import {
  UpdateLocationObjectStorageCommand,
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "./commands/UpdateLocationObjectStorageCommand";
import {
  UpdateLocationSmbCommand,
  UpdateLocationSmbCommandInput,
  UpdateLocationSmbCommandOutput,
} from "./commands/UpdateLocationSmbCommand";
import { UpdateTaskCommand, UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import {
  UpdateTaskExecutionCommand,
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "./commands/UpdateTaskExecutionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>DataSync</fullname>
 *
 *          <p>DataSync is a managed data transfer service that makes it simpler for you to
 *       automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3)
 *       or Amazon Elastic File System (Amazon EFS). </p>
 *          <p>This API interface reference for DataSync contains documentation for a
 *       programming interface that you can use to manage DataSync.</p>
 */
export class DataSync extends DataSyncClient {
  /**
   * <p>Cancels execution of a task. </p>
   *          <p>When you cancel a task execution, the transfer of some files is abruptly interrupted.
   *       The contents of files that are transferred to the destination might be incomplete or
   *       inconsistent with the source files. However, if you start a new task execution on the same
   *       task and you allow the task execution to complete, file content on the destination is complete
   *       and consistent. This applies to other unexpected failures that interrupt a task execution. In
   *       all of these cases, DataSync successfully complete the transfer when you start the next
   *       task execution.</p>
   */
  public cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTaskExecutionCommandOutput>;
  public cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    cb: (err: any, data?: CancelTaskExecutionCommandOutput) => void
  ): void;
  public cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTaskExecutionCommandOutput) => void
  ): void;
  public cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: CancelTaskExecutionCommandOutput) => void
  ): Promise<CancelTaskExecutionCommandOutput> | void {
    const command = new CancelTaskExecutionCommand(args);
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
   * <p>Activates an DataSync agent that you have deployed on your host. The activation
   *       process associates your agent with your account. In the activation process, you specify
   *       information such as the Amazon Web Services Region that you want to activate the agent in. You activate the
   *       agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your
   *       tasks are created in this Amazon Web Services Region.</p>
   *          <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to
   *       a VPC endpoint so you can run tasks without going over the public internet.</p>
   *          <p>You can use an agent for more than one location. If a task uses multiple agents, all of
   *       them need to have status AVAILABLE for the task to run. If you use multiple agents for a
   *       source location, the status of all the agents must be AVAILABLE for the task to run. </p>
   *
   *
   *          <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that
   *       ensures minimal interruption to your tasks.</p>
   *          <p></p>
   */
  public createAgent(args: CreateAgentCommandInput, options?: __HttpHandlerOptions): Promise<CreateAgentCommandOutput>;
  public createAgent(args: CreateAgentCommandInput, cb: (err: any, data?: CreateAgentCommandOutput) => void): void;
  public createAgent(
    args: CreateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;
  public createAgent(
    args: CreateAgentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAgentCommandOutput) => void),
    cb?: (err: any, data?: CreateAgentCommandOutput) => void
  ): Promise<CreateAgentCommandOutput> | void {
    const command = new CreateAgentCommand(args);
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
   * <p>Creates an endpoint for an Amazon EFS file system.</p>
   */
  public createLocationEfs(
    args: CreateLocationEfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationEfsCommandOutput>;
  public createLocationEfs(
    args: CreateLocationEfsCommandInput,
    cb: (err: any, data?: CreateLocationEfsCommandOutput) => void
  ): void;
  public createLocationEfs(
    args: CreateLocationEfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationEfsCommandOutput) => void
  ): void;
  public createLocationEfs(
    args: CreateLocationEfsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocationEfsCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationEfsCommandOutput) => void
  ): Promise<CreateLocationEfsCommandOutput> | void {
    const command = new CreateLocationEfsCommand(args);
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
   * <p>Creates an endpoint for an Amazon FSx for Windows File Server file system.</p>
   */
  public createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationFsxWindowsCommandOutput>;
  public createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    cb: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void
  ): void;
  public createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void
  ): void;
  public createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocationFsxWindowsCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void
  ): Promise<CreateLocationFsxWindowsCommandOutput> | void {
    const command = new CreateLocationFsxWindowsCommand(args);
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
   * <p>Defines a file system on a Network File System (NFS) server that can be read from or
   *       written to.</p>
   */
  public createLocationNfs(
    args: CreateLocationNfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationNfsCommandOutput>;
  public createLocationNfs(
    args: CreateLocationNfsCommandInput,
    cb: (err: any, data?: CreateLocationNfsCommandOutput) => void
  ): void;
  public createLocationNfs(
    args: CreateLocationNfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationNfsCommandOutput) => void
  ): void;
  public createLocationNfs(
    args: CreateLocationNfsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocationNfsCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationNfsCommandOutput) => void
  ): Promise<CreateLocationNfsCommandOutput> | void {
    const command = new CreateLocationNfsCommand(args);
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
   * <p>Creates an endpoint for a self-managed object storage bucket. For more information
   *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
   */
  public createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationObjectStorageCommandOutput>;
  public createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    cb: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void
  ): void;
  public createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void
  ): void;
  public createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocationObjectStorageCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void
  ): Promise<CreateLocationObjectStorageCommandOutput> | void {
    const command = new CreateLocationObjectStorageCommand(args);
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
   * <p>Creates an endpoint for an Amazon S3 bucket.</p>
   *
   *
   *          <p>For
   *       more information, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Create an Amazon S3 location</a>
   *       in the <i>DataSync User Guide</i>.</p>
   */
  public createLocationS3(
    args: CreateLocationS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationS3CommandOutput>;
  public createLocationS3(
    args: CreateLocationS3CommandInput,
    cb: (err: any, data?: CreateLocationS3CommandOutput) => void
  ): void;
  public createLocationS3(
    args: CreateLocationS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationS3CommandOutput) => void
  ): void;
  public createLocationS3(
    args: CreateLocationS3CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocationS3CommandOutput) => void),
    cb?: (err: any, data?: CreateLocationS3CommandOutput) => void
  ): Promise<CreateLocationS3CommandOutput> | void {
    const command = new CreateLocationS3Command(args);
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
   * <p>Defines a file system on a Server Message Block (SMB) server that can be read from or
   *       written to.</p>
   */
  public createLocationSmb(
    args: CreateLocationSmbCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationSmbCommandOutput>;
  public createLocationSmb(
    args: CreateLocationSmbCommandInput,
    cb: (err: any, data?: CreateLocationSmbCommandOutput) => void
  ): void;
  public createLocationSmb(
    args: CreateLocationSmbCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationSmbCommandOutput) => void
  ): void;
  public createLocationSmb(
    args: CreateLocationSmbCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocationSmbCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationSmbCommandOutput) => void
  ): Promise<CreateLocationSmbCommandOutput> | void {
    const command = new CreateLocationSmbCommand(args);
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
   * <p>Creates a task.</p>
   *          <p>A task includes a source location and a destination location, and a configuration
   *       that specifies how data is transferred. A task always transfers data from the source
   *       location to the destination location. The configuration specifies options such as
   *       task scheduling, bandwidth limits, etc. A task is the complete definition of a data
   *       transfer.</p>
   *          <p>When you create a task that transfers data between Amazon Web Services services in different Amazon Web Services Regions,
   *       one of the two locations that you specify must reside in the Region where DataSync is being
   *       used. The other location must be specified in a different Region.</p>
   *          <p>You can transfer data between commercial Amazon Web Services Regions except for China, or between
   *       Amazon Web Services GovCloud (US) Regions.</p>
   *
   *          <important>
   *             <p>When you use DataSync to copy files or objects between Amazon Web Services Regions,
   *       you pay for data transfer between Regions. This is billed as data transfer OUT
   *       from your source Region to your destination Region. For more information,
   *       see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>.
   *     </p>
   *          </important>
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
   * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN)
   *       of the agent in your request. The operation disassociates the agent from your Amazon Web Services account.
   *       However, it doesn't delete the agent virtual machine (VM) from your on-premises
   *       environment.</p>
   */
  public deleteAgent(args: DeleteAgentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAgentCommandOutput>;
  public deleteAgent(args: DeleteAgentCommandInput, cb: (err: any, data?: DeleteAgentCommandOutput) => void): void;
  public deleteAgent(
    args: DeleteAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;
  public deleteAgent(
    args: DeleteAgentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAgentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAgentCommandOutput) => void
  ): Promise<DeleteAgentCommandOutput> | void {
    const command = new DeleteAgentCommand(args);
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
   * <p>Deletes the configuration of a location used by DataSync. </p>
   */
  public deleteLocation(
    args: DeleteLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocationCommandOutput>;
  public deleteLocation(
    args: DeleteLocationCommandInput,
    cb: (err: any, data?: DeleteLocationCommandOutput) => void
  ): void;
  public deleteLocation(
    args: DeleteLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocationCommandOutput) => void
  ): void;
  public deleteLocation(
    args: DeleteLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLocationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLocationCommandOutput) => void
  ): Promise<DeleteLocationCommandOutput> | void {
    const command = new DeleteLocationCommand(args);
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
   * <p>Deletes a task.</p>
   */
  public deleteTask(args: DeleteTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTaskCommandOutput>;
  public deleteTask(args: DeleteTaskCommandInput, cb: (err: any, data?: DeleteTaskCommandOutput) => void): void;
  public deleteTask(
    args: DeleteTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskCommandOutput) => void
  ): void;
  public deleteTask(
    args: DeleteTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteTaskCommandOutput) => void
  ): Promise<DeleteTaskCommandOutput> | void {
    const command = new DeleteTaskCommand(args);
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
   * <p>Returns metadata such as the name, the network interfaces, and the status (that is,
   *       whether the agent is running or not) for an agent. To specify which agent to describe, use the
   *       Amazon Resource Name (ARN) of the agent in your request. </p>
   */
  public describeAgent(
    args: DescribeAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentCommandOutput>;
  public describeAgent(
    args: DescribeAgentCommandInput,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
  ): void;
  public describeAgent(
    args: DescribeAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
  ): void;
  public describeAgent(
    args: DescribeAgentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAgentCommandOutput) => void),
    cb?: (err: any, data?: DescribeAgentCommandOutput) => void
  ): Promise<DescribeAgentCommandOutput> | void {
    const command = new DescribeAgentCommand(args);
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
   * <p>Returns metadata, such as the path information about an Amazon EFS location.</p>
   */
  public describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationEfsCommandOutput>;
  public describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    cb: (err: any, data?: DescribeLocationEfsCommandOutput) => void
  ): void;
  public describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationEfsCommandOutput) => void
  ): void;
  public describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationEfsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationEfsCommandOutput) => void
  ): Promise<DescribeLocationEfsCommandOutput> | void {
    const command = new DescribeLocationEfsCommand(args);
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
   * <p>Returns metadata, such as the path information about an Amazon FSx for Windows File Server
   *       location.</p>
   */
  public describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationFsxWindowsCommandOutput>;
  public describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    cb: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void
  ): void;
  public describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void
  ): void;
  public describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void
  ): Promise<DescribeLocationFsxWindowsCommandOutput> | void {
    const command = new DescribeLocationFsxWindowsCommand(args);
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
   * <p>Returns metadata, such as the path information, about an NFS location.</p>
   */
  public describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationNfsCommandOutput>;
  public describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    cb: (err: any, data?: DescribeLocationNfsCommandOutput) => void
  ): void;
  public describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationNfsCommandOutput) => void
  ): void;
  public describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationNfsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationNfsCommandOutput) => void
  ): Promise<DescribeLocationNfsCommandOutput> | void {
    const command = new DescribeLocationNfsCommand(args);
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
   * <p>Returns metadata about a self-managed object storage server location. For more information
   *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
   */
  public describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationObjectStorageCommandOutput>;
  public describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    cb: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void
  ): void;
  public describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void
  ): void;
  public describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationObjectStorageCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void
  ): Promise<DescribeLocationObjectStorageCommandOutput> | void {
    const command = new DescribeLocationObjectStorageCommand(args);
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
   * <p>Returns metadata, such as bucket name, about an Amazon S3 bucket location.</p>
   */
  public describeLocationS3(
    args: DescribeLocationS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationS3CommandOutput>;
  public describeLocationS3(
    args: DescribeLocationS3CommandInput,
    cb: (err: any, data?: DescribeLocationS3CommandOutput) => void
  ): void;
  public describeLocationS3(
    args: DescribeLocationS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationS3CommandOutput) => void
  ): void;
  public describeLocationS3(
    args: DescribeLocationS3CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationS3CommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationS3CommandOutput) => void
  ): Promise<DescribeLocationS3CommandOutput> | void {
    const command = new DescribeLocationS3Command(args);
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
   * <p>Returns metadata, such as the path and user information about an SMB location.</p>
   */
  public describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationSmbCommandOutput>;
  public describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    cb: (err: any, data?: DescribeLocationSmbCommandOutput) => void
  ): void;
  public describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationSmbCommandOutput) => void
  ): void;
  public describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationSmbCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationSmbCommandOutput) => void
  ): Promise<DescribeLocationSmbCommandOutput> | void {
    const command = new DescribeLocationSmbCommand(args);
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
   * <p>Returns metadata about a task.</p>
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
   * <p>Returns detailed metadata about a task that is being executed.</p>
   */
  public describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskExecutionCommandOutput>;
  public describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    cb: (err: any, data?: DescribeTaskExecutionCommandOutput) => void
  ): void;
  public describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskExecutionCommandOutput) => void
  ): void;
  public describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeTaskExecutionCommandOutput) => void
  ): Promise<DescribeTaskExecutionCommandOutput> | void {
    const command = new DescribeTaskExecutionCommand(args);
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
   * <p>Returns a list of agents owned by an Amazon Web Services account in the Amazon Web Services Region specified in the
   *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
   *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
   *       pagination that enables you to optionally reduce the number of agents returned in a
   *       response.</p>
   *          <p>If you have more agents than are returned in a response (that is, the response returns
   *       only a truncated list of your agents), the response contains a marker that you can specify in
   *       your next request to fetch the next page of agents.</p>
   */
  public listAgents(args: ListAgentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAgentsCommandOutput>;
  public listAgents(args: ListAgentsCommandInput, cb: (err: any, data?: ListAgentsCommandOutput) => void): void;
  public listAgents(
    args: ListAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;
  public listAgents(
    args: ListAgentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAgentsCommandOutput) => void),
    cb?: (err: any, data?: ListAgentsCommandOutput) => void
  ): Promise<ListAgentsCommandOutput> | void {
    const command = new ListAgentsCommand(args);
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
   * <p>Returns a list of source and destination locations.</p>
   *          <p>If you have more locations than are returned in a response (that is, the response
   *       returns only a truncated list of your agents), the response contains a token that you can
   *       specify in your next request to fetch the next page of locations.</p>
   */
  public listLocations(
    args: ListLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLocationsCommandOutput>;
  public listLocations(
    args: ListLocationsCommandInput,
    cb: (err: any, data?: ListLocationsCommandOutput) => void
  ): void;
  public listLocations(
    args: ListLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLocationsCommandOutput) => void
  ): void;
  public listLocations(
    args: ListLocationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLocationsCommandOutput) => void),
    cb?: (err: any, data?: ListLocationsCommandOutput) => void
  ): Promise<ListLocationsCommandOutput> | void {
    const command = new ListLocationsCommand(args);
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
   * <p>Returns all the tags associated with a specified resource. </p>
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
   * <p>Returns a list of executed tasks.</p>
   */
  public listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskExecutionsCommandOutput>;
  public listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    cb: (err: any, data?: ListTaskExecutionsCommandOutput) => void
  ): void;
  public listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskExecutionsCommandOutput) => void
  ): void;
  public listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTaskExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListTaskExecutionsCommandOutput) => void
  ): Promise<ListTaskExecutionsCommandOutput> | void {
    const command = new ListTaskExecutionsCommand(args);
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
   * <p>Returns a list of all the tasks.</p>
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
   * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents
   *       an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a
   *       time.</p>
   *          <p>
   *             <code>TaskExecution</code> has the following transition phases: INITIALIZING |
   *       PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p>
   *
   *          <p>For detailed information, see the Task Execution section in the Components and
   *       Terminology topic in the <i>DataSync User Guide</i>.</p>
   */
  public startTaskExecution(
    args: StartTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTaskExecutionCommandOutput>;
  public startTaskExecution(
    args: StartTaskExecutionCommandInput,
    cb: (err: any, data?: StartTaskExecutionCommandOutput) => void
  ): void;
  public startTaskExecution(
    args: StartTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTaskExecutionCommandOutput) => void
  ): void;
  public startTaskExecution(
    args: StartTaskExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartTaskExecutionCommandOutput) => void
  ): Promise<StartTaskExecutionCommandOutput> | void {
    const command = new StartTaskExecutionCommand(args);
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
   * <p>Applies a key-value pair to an Amazon Web Services resource.</p>
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
   * <p>Removes a tag from an Amazon Web Services resource.</p>
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
   * <p>Updates the name of an agent.</p>
   */
  public updateAgent(args: UpdateAgentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAgentCommandOutput>;
  public updateAgent(args: UpdateAgentCommandInput, cb: (err: any, data?: UpdateAgentCommandOutput) => void): void;
  public updateAgent(
    args: UpdateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;
  public updateAgent(
    args: UpdateAgentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAgentCommandOutput) => void),
    cb?: (err: any, data?: UpdateAgentCommandOutput) => void
  ): Promise<UpdateAgentCommandOutput> | void {
    const command = new UpdateAgentCommand(args);
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
   * <p>Updates some of the parameters of a previously created location for Network File System (NFS) access.
   *       For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.</p>
   */
  public updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationNfsCommandOutput>;
  public updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    cb: (err: any, data?: UpdateLocationNfsCommandOutput) => void
  ): void;
  public updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationNfsCommandOutput) => void
  ): void;
  public updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLocationNfsCommandOutput) => void),
    cb?: (err: any, data?: UpdateLocationNfsCommandOutput) => void
  ): Promise<UpdateLocationNfsCommandOutput> | void {
    const command = new UpdateLocationNfsCommand(args);
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
   * <p>Updates some of the parameters of a previously created location for self-managed object
   *       storage server access. For information about creating a self-managed object storage location,
   *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
   */
  public updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationObjectStorageCommandOutput>;
  public updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    cb: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void
  ): void;
  public updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void
  ): void;
  public updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLocationObjectStorageCommandOutput) => void),
    cb?: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void
  ): Promise<UpdateLocationObjectStorageCommandOutput> | void {
    const command = new UpdateLocationObjectStorageCommand(args);
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
   * <p>Updates some of the parameters of a previously created location for Server Message Block
   *       (SMB) file system access. For information about creating an SMB location, see
   *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.</p>
   */
  public updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationSmbCommandOutput>;
  public updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    cb: (err: any, data?: UpdateLocationSmbCommandOutput) => void
  ): void;
  public updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationSmbCommandOutput) => void
  ): void;
  public updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLocationSmbCommandOutput) => void),
    cb?: (err: any, data?: UpdateLocationSmbCommandOutput) => void
  ): Promise<UpdateLocationSmbCommandOutput> | void {
    const command = new UpdateLocationSmbCommand(args);
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
   * <p>Updates the metadata associated with a task.</p>
   */
  public updateTask(args: UpdateTaskCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTaskCommandOutput>;
  public updateTask(args: UpdateTaskCommandInput, cb: (err: any, data?: UpdateTaskCommandOutput) => void): void;
  public updateTask(
    args: UpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;
  public updateTask(
    args: UpdateTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTaskCommandOutput) => void),
    cb?: (err: any, data?: UpdateTaskCommandOutput) => void
  ): Promise<UpdateTaskCommandOutput> | void {
    const command = new UpdateTaskCommand(args);
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
   * <p>Updates execution of a task.</p>
   *          <p>You can modify bandwidth throttling for a task execution that is running or queued.
   *       For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p>
   *
   *          <note>
   *             <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code>
   *         is <code>
   *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a>
   *                </code>.</p>
   *          </note>
   */
  public updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskExecutionCommandOutput>;
  public updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    cb: (err: any, data?: UpdateTaskExecutionCommandOutput) => void
  ): void;
  public updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskExecutionCommandOutput) => void
  ): void;
  public updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: UpdateTaskExecutionCommandOutput) => void
  ): Promise<UpdateTaskExecutionCommandOutput> | void {
    const command = new UpdateTaskExecutionCommand(args);
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
