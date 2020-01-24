import { DataSyncClient } from "./DataSyncClient";
import {
  CancelTaskExecutionCommand,
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput
} from "./commands/CancelTaskExecutionCommand";
import {
  CreateAgentCommand,
  CreateAgentCommandInput,
  CreateAgentCommandOutput
} from "./commands/CreateAgentCommand";
import {
  CreateLocationEfsCommand,
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput
} from "./commands/CreateLocationEfsCommand";
import {
  CreateLocationNfsCommand,
  CreateLocationNfsCommandInput,
  CreateLocationNfsCommandOutput
} from "./commands/CreateLocationNfsCommand";
import {
  CreateLocationS3Command,
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput
} from "./commands/CreateLocationS3Command";
import {
  CreateLocationSmbCommand,
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput
} from "./commands/CreateLocationSmbCommand";
import {
  CreateTaskCommand,
  CreateTaskCommandInput,
  CreateTaskCommandOutput
} from "./commands/CreateTaskCommand";
import {
  DeleteAgentCommand,
  DeleteAgentCommandInput,
  DeleteAgentCommandOutput
} from "./commands/DeleteAgentCommand";
import {
  DeleteLocationCommand,
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput
} from "./commands/DeleteLocationCommand";
import {
  DeleteTaskCommand,
  DeleteTaskCommandInput,
  DeleteTaskCommandOutput
} from "./commands/DeleteTaskCommand";
import {
  DescribeAgentCommand,
  DescribeAgentCommandInput,
  DescribeAgentCommandOutput
} from "./commands/DescribeAgentCommand";
import {
  DescribeLocationEfsCommand,
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput
} from "./commands/DescribeLocationEfsCommand";
import {
  DescribeLocationNfsCommand,
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput
} from "./commands/DescribeLocationNfsCommand";
import {
  DescribeLocationS3Command,
  DescribeLocationS3CommandInput,
  DescribeLocationS3CommandOutput
} from "./commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommand,
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput
} from "./commands/DescribeLocationSmbCommand";
import {
  DescribeTaskCommand,
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput
} from "./commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommand,
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput
} from "./commands/DescribeTaskExecutionCommand";
import {
  ListAgentsCommand,
  ListAgentsCommandInput,
  ListAgentsCommandOutput
} from "./commands/ListAgentsCommand";
import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput
} from "./commands/ListLocationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskExecutionsCommand,
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput
} from "./commands/ListTaskExecutionsCommand";
import {
  ListTasksCommand,
  ListTasksCommandInput,
  ListTasksCommandOutput
} from "./commands/ListTasksCommand";
import {
  StartTaskExecutionCommand,
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput
} from "./commands/StartTaskExecutionCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateAgentCommand,
  UpdateAgentCommandInput,
  UpdateAgentCommandOutput
} from "./commands/UpdateAgentCommand";
import {
  UpdateTaskCommand,
  UpdateTaskCommandInput,
  UpdateTaskCommandOutput
} from "./commands/UpdateTaskCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS DataSync</fullname>
 *
 *          <p>AWS DataSync is a managed data transfer service that makes it simpler for you to
 *       automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3)
 *       or Amazon Elastic File System (Amazon EFS). </p>
 *          <p>This API interface reference for AWS DataSync contains documentation for a
 *       programming interface that you can use to manage AWS DataSync.</p>
 */
export class DataSync extends DataSyncClient {
  /**
   * <p>Cancels execution of a task. </p>
   *          <p>When you cancel a task execution, the transfer of some files are abruptly interrupted.
   *       The contents of files that are transferred to the destination might be incomplete or
   *       inconsistent with the source files. However, if you start a new task execution on the same
   *       task and you allow the task execution to complete, file content on the destination is complete
   *       and consistent. This applies to other unexpected failures that interrupt a task execution. In
   *       all of these cases, AWS DataSync successfully complete the transfer when you start the next
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: CancelTaskExecutionCommandOutput) => void
  ): Promise<CancelTaskExecutionCommandOutput> | void {
    const command = new CancelTaskExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Activates an AWS DataSync agent that you have deployed on your host. The activation
   *       process associates your agent with your account. In the activation process, you specify
   *       information such as the AWS Region that you want to activate the agent in. You activate the
   *       agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your
   *       tasks are created in this AWS Region.</p>
   *          <p>You can activate the agent in a VPC (Virtual private Cloud) or provide the agent access to
   *       a VPC endpoint so you can run tasks without going over the public Internet.</p>
   *          <p>You can use an agent for more than one location. If a task uses multiple agents, all of
   *       them need to have status AVAILABLE for the task to run. If you use multiple agents for a
   *       source location, the status of all the agents must be AVAILABLE for the task to run. </p>
   *
   *
   *          <p>Agents are automatically updated by AWS on a regular basis, using a mechanism that
   *       ensures minimal interruption to your tasks.</p>
   *          <p></p>
   */
  public createAgent(
    args: CreateAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentCommandOutput>;
  public createAgent(
    args: CreateAgentCommandInput,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;
  public createAgent(
    args: CreateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;
  public createAgent(
    args: CreateAgentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAgentCommandOutput) => void),
    cb?: (err: any, data?: CreateAgentCommandOutput) => void
  ): Promise<CreateAgentCommandOutput> | void {
    const command = new CreateAgentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLocationEfsCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationEfsCommandOutput) => void
  ): Promise<CreateLocationEfsCommandOutput> | void {
    const command = new CreateLocationEfsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines a file system on a  Network File System (NFS) server that can be read from or
   *       written to</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLocationNfsCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationNfsCommandOutput) => void
  ): Promise<CreateLocationNfsCommandOutput> | void {
    const command = new CreateLocationNfsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an endpoint for an Amazon S3 bucket.</p>
   *          <p>For AWS DataSync to access a destination S3 bucket, it needs an AWS Identity and Access
   *       Management (IAM) role that has the required permissions. You can set up the required
   *       permissions by creating an IAM policy that grants the required permissions and attaching the
   *       policy to the role. An example of such a policy is shown in the examples section.</p>
   *
   *
   *          <p>For more information, see https://docs.aws.amazon.com/datasync/latest/userguide/working-with-locations.html#create-s3-location in the
   *         <i>AWS DataSync User Guide.</i>
   *          </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLocationS3CommandOutput) => void),
    cb?: (err: any, data?: CreateLocationS3CommandOutput) => void
  ): Promise<CreateLocationS3CommandOutput> | void {
    const command = new CreateLocationS3Command(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines a file system on an Server Message Block (SMB) server that can be read from or
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLocationSmbCommandOutput) => void),
    cb?: (err: any, data?: CreateLocationSmbCommandOutput) => void
  ): Promise<CreateLocationSmbCommandOutput> | void {
    const command = new CreateLocationSmbCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a task. A task is a set of two locations (source and destination) and a set of
   *       Options that you use to control the behavior of a task. If you don't specify Options when you
   *       create a task, AWS DataSync populates them with service defaults.</p>
   *          <p>When you create a task, it first enters the CREATING state. During CREATING
   *       AWS DataSync attempts to mount the on-premises Network File System (NFS) location. The task
   *       transitions to the AVAILABLE state without waiting for the AWS location to become mounted. If
   *       required, AWS DataSync mounts the AWS location before each task execution.</p>
   *          <p>If an agent that is associated with a source (NFS) location goes offline, the task
   *       transitions to the UNAVAILABLE status. If the status of the task remains in the CREATING
   *       status for more than a few minutes, it means that your agent might be having trouble mounting
   *       the source NFS file system. Check the task's ErrorCode and ErrorDetail. Mount issues are often
   *       caused by either a misconfigured firewall or a mistyped NFS server host name.</p>
   */
  public createTask(
    args: CreateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTaskCommandOutput>;
  public createTask(
    args: CreateTaskCommandInput,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;
  public createTask(
    args: CreateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;
  public createTask(
    args: CreateTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateTaskCommandOutput) => void
  ): Promise<CreateTaskCommandOutput> | void {
    const command = new CreateTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN)
   *       of the agent in your request. The operation disassociates the agent from your AWS account.
   *       However, it doesn't delete the agent virtual machine (VM) from your on-premises
   *       environment.</p>
   */
  public deleteAgent(
    args: DeleteAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentCommandOutput>;
  public deleteAgent(
    args: DeleteAgentCommandInput,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;
  public deleteAgent(
    args: DeleteAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;
  public deleteAgent(
    args: DeleteAgentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAgentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAgentCommandOutput) => void
  ): Promise<DeleteAgentCommandOutput> | void {
    const command = new DeleteAgentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the configuration of a location used by AWS DataSync. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteLocationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLocationCommandOutput) => void
  ): Promise<DeleteLocationCommandOutput> | void {
    const command = new DeleteLocationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a task.</p>
   */
  public deleteTask(
    args: DeleteTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTaskCommandOutput>;
  public deleteTask(
    args: DeleteTaskCommandInput,
    cb: (err: any, data?: DeleteTaskCommandOutput) => void
  ): void;
  public deleteTask(
    args: DeleteTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskCommandOutput) => void
  ): void;
  public deleteTask(
    args: DeleteTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteTaskCommandOutput) => void
  ): Promise<DeleteTaskCommandOutput> | void {
    const command = new DeleteTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAgentCommandOutput) => void),
    cb?: (err: any, data?: DescribeAgentCommandOutput) => void
  ): Promise<DescribeAgentCommandOutput> | void {
    const command = new DescribeAgentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocationEfsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationEfsCommandOutput) => void
  ): Promise<DescribeLocationEfsCommandOutput> | void {
    const command = new DescribeLocationEfsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata, such as the path information, about a NFS location.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocationNfsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationNfsCommandOutput) => void
  ): Promise<DescribeLocationNfsCommandOutput> | void {
    const command = new DescribeLocationNfsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocationS3CommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationS3CommandOutput) => void
  ): Promise<DescribeLocationS3CommandOutput> | void {
    const command = new DescribeLocationS3Command(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata, such as the path and user information about a SMB location.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocationSmbCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationSmbCommandOutput) => void
  ): Promise<DescribeLocationSmbCommandOutput> | void {
    const command = new DescribeLocationSmbCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
  public describeTask(
    args: DescribeTaskCommandInput,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;
  public describeTask(
    args: DescribeTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;
  public describeTask(
    args: DescribeTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeTaskCommandOutput) => void
  ): Promise<DescribeTaskCommandOutput> | void {
    const command = new DescribeTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeTaskExecutionCommandOutput) => void
  ): Promise<DescribeTaskExecutionCommandOutput> | void {
    const command = new DescribeTaskExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the
   *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
   *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
   *       pagination that enables you to optionally reduce the number of agents returned in a
   *       response.</p>
   *          <p>If you have more agents than are returned in a response (that is, the response returns
   *       only a truncated list of your agents), the response contains a marker that you can specify in
   *       your next request to fetch the next page of agents.</p>
   */
  public listAgents(
    args: ListAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentsCommandOutput>;
  public listAgents(
    args: ListAgentsCommandInput,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;
  public listAgents(
    args: ListAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;
  public listAgents(
    args: ListAgentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAgentsCommandOutput) => void),
    cb?: (err: any, data?: ListAgentsCommandOutput) => void
  ): Promise<ListAgentsCommandOutput> | void {
    const command = new ListAgentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a lists of source and destination locations.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListLocationsCommandOutput) => void),
    cb?: (err: any, data?: ListLocationsCommandOutput) => void
  ): Promise<ListLocationsCommandOutput> | void {
    const command = new ListLocationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all the tags associated with a specified resources. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTaskExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListTaskExecutionsCommandOutput) => void
  ): Promise<ListTaskExecutionsCommandOutput> | void {
    const command = new ListTaskExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all the tasks.</p>
   */
  public listTasks(
    args: ListTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTasksCommandOutput>;
  public listTasks(
    args: ListTasksCommandInput,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  public listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  public listTasks(
    args: ListTasksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTasksCommandOutput) => void),
    cb?: (err: any, data?: ListTasksCommandOutput) => void
  ): Promise<ListTasksCommandOutput> | void {
    const command = new ListTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *          <p>For detailed information, see the Task Execution section in the Components
   *       and Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartTaskExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartTaskExecutionCommandOutput) => void
  ): Promise<StartTaskExecutionCommandOutput> | void {
    const command = new StartTaskExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a key-value pair to an AWS resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag from an AWS resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the name of an agent.</p>
   */
  public updateAgent(
    args: UpdateAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentCommandOutput>;
  public updateAgent(
    args: UpdateAgentCommandInput,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;
  public updateAgent(
    args: UpdateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;
  public updateAgent(
    args: UpdateAgentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateAgentCommandOutput) => void),
    cb?: (err: any, data?: UpdateAgentCommandOutput) => void
  ): Promise<UpdateAgentCommandOutput> | void {
    const command = new UpdateAgentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the metadata associated with a task.</p>
   */
  public updateTask(
    args: UpdateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskCommandOutput>;
  public updateTask(
    args: UpdateTaskCommandInput,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;
  public updateTask(
    args: UpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;
  public updateTask(
    args: UpdateTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTaskCommandOutput) => void),
    cb?: (err: any, data?: UpdateTaskCommandOutput) => void
  ): Promise<UpdateTaskCommandOutput> | void {
    const command = new UpdateTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
