import { DataSyncClient } from "./DataSyncClient";
import { CancelTaskExecutionInput } from "./types/CancelTaskExecutionInput";
import { CancelTaskExecutionOutput } from "./types/CancelTaskExecutionOutput";
import { CreateAgentInput } from "./types/CreateAgentInput";
import { CreateAgentOutput } from "./types/CreateAgentOutput";
import { CreateLocationEfsInput } from "./types/CreateLocationEfsInput";
import { CreateLocationEfsOutput } from "./types/CreateLocationEfsOutput";
import { CreateLocationNfsInput } from "./types/CreateLocationNfsInput";
import { CreateLocationNfsOutput } from "./types/CreateLocationNfsOutput";
import { CreateLocationS3Input } from "./types/CreateLocationS3Input";
import { CreateLocationS3Output } from "./types/CreateLocationS3Output";
import { CreateTaskInput } from "./types/CreateTaskInput";
import { CreateTaskOutput } from "./types/CreateTaskOutput";
import { DeleteAgentInput } from "./types/DeleteAgentInput";
import { DeleteAgentOutput } from "./types/DeleteAgentOutput";
import { DeleteLocationInput } from "./types/DeleteLocationInput";
import { DeleteLocationOutput } from "./types/DeleteLocationOutput";
import { DeleteTaskInput } from "./types/DeleteTaskInput";
import { DeleteTaskOutput } from "./types/DeleteTaskOutput";
import { DescribeAgentInput } from "./types/DescribeAgentInput";
import { DescribeAgentOutput } from "./types/DescribeAgentOutput";
import { DescribeLocationEfsInput } from "./types/DescribeLocationEfsInput";
import { DescribeLocationEfsOutput } from "./types/DescribeLocationEfsOutput";
import { DescribeLocationNfsInput } from "./types/DescribeLocationNfsInput";
import { DescribeLocationNfsOutput } from "./types/DescribeLocationNfsOutput";
import { DescribeLocationS3Input } from "./types/DescribeLocationS3Input";
import { DescribeLocationS3Output } from "./types/DescribeLocationS3Output";
import { DescribeTaskExecutionInput } from "./types/DescribeTaskExecutionInput";
import { DescribeTaskExecutionOutput } from "./types/DescribeTaskExecutionOutput";
import { DescribeTaskInput } from "./types/DescribeTaskInput";
import { DescribeTaskOutput } from "./types/DescribeTaskOutput";
import { InternalException } from "./types/InternalException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListAgentsInput } from "./types/ListAgentsInput";
import { ListAgentsOutput } from "./types/ListAgentsOutput";
import { ListLocationsInput } from "./types/ListLocationsInput";
import { ListLocationsOutput } from "./types/ListLocationsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTaskExecutionsInput } from "./types/ListTaskExecutionsInput";
import { ListTaskExecutionsOutput } from "./types/ListTaskExecutionsOutput";
import { ListTasksInput } from "./types/ListTasksInput";
import { ListTasksOutput } from "./types/ListTasksOutput";
import { StartTaskExecutionInput } from "./types/StartTaskExecutionInput";
import { StartTaskExecutionOutput } from "./types/StartTaskExecutionOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAgentInput } from "./types/UpdateAgentInput";
import { UpdateAgentOutput } from "./types/UpdateAgentOutput";
import { UpdateTaskInput } from "./types/UpdateTaskInput";
import { UpdateTaskOutput } from "./types/UpdateTaskOutput";
import { CancelTaskExecutionCommand } from "./commands/CancelTaskExecutionCommand";
import { CreateAgentCommand } from "./commands/CreateAgentCommand";
import { CreateLocationEfsCommand } from "./commands/CreateLocationEfsCommand";
import { CreateLocationNfsCommand } from "./commands/CreateLocationNfsCommand";
import { CreateLocationS3Command } from "./commands/CreateLocationS3Command";
import { CreateTaskCommand } from "./commands/CreateTaskCommand";
import { DeleteAgentCommand } from "./commands/DeleteAgentCommand";
import { DeleteLocationCommand } from "./commands/DeleteLocationCommand";
import { DeleteTaskCommand } from "./commands/DeleteTaskCommand";
import { DescribeAgentCommand } from "./commands/DescribeAgentCommand";
import { DescribeLocationEfsCommand } from "./commands/DescribeLocationEfsCommand";
import { DescribeLocationNfsCommand } from "./commands/DescribeLocationNfsCommand";
import { DescribeLocationS3Command } from "./commands/DescribeLocationS3Command";
import { DescribeTaskCommand } from "./commands/DescribeTaskCommand";
import { DescribeTaskExecutionCommand } from "./commands/DescribeTaskExecutionCommand";
import { ListAgentsCommand } from "./commands/ListAgentsCommand";
import { ListLocationsCommand } from "./commands/ListLocationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTaskExecutionsCommand } from "./commands/ListTaskExecutionsCommand";
import { ListTasksCommand } from "./commands/ListTasksCommand";
import { StartTaskExecutionCommand } from "./commands/StartTaskExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAgentCommand } from "./commands/UpdateAgentCommand";
import { UpdateTaskCommand } from "./commands/UpdateTaskCommand";

export class DataSync extends DataSyncClient {
  /**
   * <p>Cancels execution of a task. </p> <p>When you cancel a task execution, the transfer of some files are abruptly interrupted. The contents of files that are transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution on the same task and you allow the task execution to complete, file content on the destination is complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, AWS DataSync successfully complete the transfer when you start the next task execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelTaskExecution(
    args: CancelTaskExecutionInput
  ): Promise<CancelTaskExecutionOutput>;
  public cancelTaskExecution(
    args: CancelTaskExecutionInput,
    cb: (err: any, data?: CancelTaskExecutionOutput) => void
  ): void;
  public cancelTaskExecution(
    args: CancelTaskExecutionInput,
    cb?: (err: any, data?: CancelTaskExecutionOutput) => void
  ): Promise<CancelTaskExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelTaskExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Activates an AWS DataSync agent that you have deployed on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the AWS Region that you want to activate the agent in. You activate the agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this AWS Region.</p> <p>You can activate the agent in a VPC (Virtual private Cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public Internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by AWS on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAgent(args: CreateAgentInput): Promise<CreateAgentOutput>;
  public createAgent(
    args: CreateAgentInput,
    cb: (err: any, data?: CreateAgentOutput) => void
  ): void;
  public createAgent(
    args: CreateAgentInput,
    cb?: (err: any, data?: CreateAgentOutput) => void
  ): Promise<CreateAgentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAgentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint for an Amazon EFS file system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLocationEfs(
    args: CreateLocationEfsInput
  ): Promise<CreateLocationEfsOutput>;
  public createLocationEfs(
    args: CreateLocationEfsInput,
    cb: (err: any, data?: CreateLocationEfsOutput) => void
  ): void;
  public createLocationEfs(
    args: CreateLocationEfsInput,
    cb?: (err: any, data?: CreateLocationEfsOutput) => void
  ): Promise<CreateLocationEfsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLocationEfsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint for a Network File System (NFS) file system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLocationNfs(
    args: CreateLocationNfsInput
  ): Promise<CreateLocationNfsOutput>;
  public createLocationNfs(
    args: CreateLocationNfsInput,
    cb: (err: any, data?: CreateLocationNfsOutput) => void
  ): void;
  public createLocationNfs(
    args: CreateLocationNfsInput,
    cb?: (err: any, data?: CreateLocationNfsOutput) => void
  ): Promise<CreateLocationNfsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLocationNfsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint for an Amazon S3 bucket.</p> <p>For AWS DataSync to access a destination S3 bucket, it needs an AWS Identity and Access Management (IAM) role that has the required permissions. You can set up the required permissions by creating an IAM policy that grants the required permissions and attaching the policy to the role. An example of such a policy is shown in the examples section.</p> <p>For more information, see Configuring Amazon S3 Location Settings in the <i>AWS DataSync User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLocationS3(
    args: CreateLocationS3Input
  ): Promise<CreateLocationS3Output>;
  public createLocationS3(
    args: CreateLocationS3Input,
    cb: (err: any, data?: CreateLocationS3Output) => void
  ): void;
  public createLocationS3(
    args: CreateLocationS3Input,
    cb?: (err: any, data?: CreateLocationS3Output) => void
  ): Promise<CreateLocationS3Output> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLocationS3Command(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a task. A task is a set of two locations (source and destination) and a set of Options that you use to control the behavior of a task. If you don't specify Options when you create a task, AWS DataSync populates them with service defaults.</p> <p>When you create a task, it first enters the CREATING state. During CREATING AWS DataSync attempts to mount the on-premises Network File System (NFS) location. The task transitions to the AVAILABLE state without waiting for the AWS location to become mounted. If required, AWS DataSync mounts the AWS location before each task execution.</p> <p>If an agent that is associated with a source (NFS) location goes offline, the task transitions to the UNAVAILABLE status. If the status of the task remains in the CREATING status for more than a few minutes, it means that your agent might be having trouble mounting the source NFS file system. Check the task's ErrorCode and ErrorDetail. Mount issues are often caused by either a misconfigured firewall or a mistyped NFS server host name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTask(args: CreateTaskInput): Promise<CreateTaskOutput>;
  public createTask(
    args: CreateTaskInput,
    cb: (err: any, data?: CreateTaskOutput) => void
  ): void;
  public createTask(
    args: CreateTaskInput,
    cb?: (err: any, data?: CreateTaskOutput) => void
  ): Promise<CreateTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your AWS account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAgent(args: DeleteAgentInput): Promise<DeleteAgentOutput>;
  public deleteAgent(
    args: DeleteAgentInput,
    cb: (err: any, data?: DeleteAgentOutput) => void
  ): void;
  public deleteAgent(
    args: DeleteAgentInput,
    cb?: (err: any, data?: DeleteAgentOutput) => void
  ): Promise<DeleteAgentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAgentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the configuration of a location used by AWS DataSync. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLocation(
    args: DeleteLocationInput
  ): Promise<DeleteLocationOutput>;
  public deleteLocation(
    args: DeleteLocationInput,
    cb: (err: any, data?: DeleteLocationOutput) => void
  ): void;
  public deleteLocation(
    args: DeleteLocationInput,
    cb?: (err: any, data?: DeleteLocationOutput) => void
  ): Promise<DeleteLocationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLocationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTask(args: DeleteTaskInput): Promise<DeleteTaskOutput>;
  public deleteTask(
    args: DeleteTaskInput,
    cb: (err: any, data?: DeleteTaskOutput) => void
  ): void;
  public deleteTask(
    args: DeleteTaskInput,
    cb?: (err: any, data?: DeleteTaskOutput) => void
  ): Promise<DeleteTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata such as the name, the network interfaces, and the status (that is, whether the agent is running or not) for an agent. To specify which agent to describe, use the Amazon Resource Name (ARN) of the agent in your request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAgent(args: DescribeAgentInput): Promise<DescribeAgentOutput>;
  public describeAgent(
    args: DescribeAgentInput,
    cb: (err: any, data?: DescribeAgentOutput) => void
  ): void;
  public describeAgent(
    args: DescribeAgentInput,
    cb?: (err: any, data?: DescribeAgentOutput) => void
  ): Promise<DescribeAgentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAgentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata, such as the path information about an Amazon EFS location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLocationEfs(
    args: DescribeLocationEfsInput
  ): Promise<DescribeLocationEfsOutput>;
  public describeLocationEfs(
    args: DescribeLocationEfsInput,
    cb: (err: any, data?: DescribeLocationEfsOutput) => void
  ): void;
  public describeLocationEfs(
    args: DescribeLocationEfsInput,
    cb?: (err: any, data?: DescribeLocationEfsOutput) => void
  ): Promise<DescribeLocationEfsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLocationEfsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata, such as the path information, about a NFS location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLocationNfs(
    args: DescribeLocationNfsInput
  ): Promise<DescribeLocationNfsOutput>;
  public describeLocationNfs(
    args: DescribeLocationNfsInput,
    cb: (err: any, data?: DescribeLocationNfsOutput) => void
  ): void;
  public describeLocationNfs(
    args: DescribeLocationNfsInput,
    cb?: (err: any, data?: DescribeLocationNfsOutput) => void
  ): Promise<DescribeLocationNfsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLocationNfsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata, such as bucket name, about an Amazon S3 bucket location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLocationS3(
    args: DescribeLocationS3Input
  ): Promise<DescribeLocationS3Output>;
  public describeLocationS3(
    args: DescribeLocationS3Input,
    cb: (err: any, data?: DescribeLocationS3Output) => void
  ): void;
  public describeLocationS3(
    args: DescribeLocationS3Input,
    cb?: (err: any, data?: DescribeLocationS3Output) => void
  ): Promise<DescribeLocationS3Output> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLocationS3Command(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata about a task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTask(args: DescribeTaskInput): Promise<DescribeTaskOutput>;
  public describeTask(
    args: DescribeTaskInput,
    cb: (err: any, data?: DescribeTaskOutput) => void
  ): void;
  public describeTask(
    args: DescribeTaskInput,
    cb?: (err: any, data?: DescribeTaskOutput) => void
  ): Promise<DescribeTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed metadata about a task that is being executed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTaskExecution(
    args: DescribeTaskExecutionInput
  ): Promise<DescribeTaskExecutionOutput>;
  public describeTaskExecution(
    args: DescribeTaskExecutionInput,
    cb: (err: any, data?: DescribeTaskExecutionOutput) => void
  ): void;
  public describeTaskExecution(
    args: DescribeTaskExecutionInput,
    cb?: (err: any, data?: DescribeTaskExecutionOutput) => void
  ): Promise<DescribeTaskExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTaskExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the request. The returned list is ordered by agent Amazon Resource Name (ARN).</p> <p>By default, this operation returns a maximum of 100 agents. This operation supports pagination that enables you to optionally reduce the number of agents returned in a response.</p> <p>If you have more agents than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a marker that you can specify in your next request to fetch the next page of agents.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAgents(args: ListAgentsInput): Promise<ListAgentsOutput>;
  public listAgents(
    args: ListAgentsInput,
    cb: (err: any, data?: ListAgentsOutput) => void
  ): void;
  public listAgents(
    args: ListAgentsInput,
    cb?: (err: any, data?: ListAgentsOutput) => void
  ): Promise<ListAgentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAgentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a lists of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLocations(args: ListLocationsInput): Promise<ListLocationsOutput>;
  public listLocations(
    args: ListLocationsInput,
    cb: (err: any, data?: ListLocationsOutput) => void
  ): void;
  public listLocations(
    args: ListLocationsInput,
    cb?: (err: any, data?: ListLocationsOutput) => void
  ): Promise<ListLocationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLocationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all the tags associated with a specified resources. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of executed tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTaskExecutions(
    args: ListTaskExecutionsInput
  ): Promise<ListTaskExecutionsOutput>;
  public listTaskExecutions(
    args: ListTaskExecutionsInput,
    cb: (err: any, data?: ListTaskExecutionsOutput) => void
  ): void;
  public listTaskExecutions(
    args: ListTaskExecutionsInput,
    cb?: (err: any, data?: ListTaskExecutionsOutput) => void
  ): Promise<ListTaskExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTaskExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all the tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTasks(args: ListTasksInput): Promise<ListTasksOutput>;
  public listTasks(
    args: ListTasksInput,
    cb: (err: any, data?: ListTasksOutput) => void
  ): void;
  public listTasks(
    args: ListTasksInput,
    cb?: (err: any, data?: ListTasksOutput) => void
  ): Promise<ListTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a time.</p> <p> <code>TaskExecution</code> has the following transition phases: INITIALIZING | PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p> <p>For detailed information, see the Task Execution section in the Components and Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startTaskExecution(
    args: StartTaskExecutionInput
  ): Promise<StartTaskExecutionOutput>;
  public startTaskExecution(
    args: StartTaskExecutionInput,
    cb: (err: any, data?: StartTaskExecutionOutput) => void
  ): void;
  public startTaskExecution(
    args: StartTaskExecutionInput,
    cb?: (err: any, data?: StartTaskExecutionOutput) => void
  ): Promise<StartTaskExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartTaskExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a key-value pair to an AWS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a tag from an AWS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the name of an agent.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAgent(args: UpdateAgentInput): Promise<UpdateAgentOutput>;
  public updateAgent(
    args: UpdateAgentInput,
    cb: (err: any, data?: UpdateAgentOutput) => void
  ): void;
  public updateAgent(
    args: UpdateAgentInput,
    cb?: (err: any, data?: UpdateAgentOutput) => void
  ): Promise<UpdateAgentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAgentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the metadata associated with a task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {InternalException} <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTask(args: UpdateTaskInput): Promise<UpdateTaskOutput>;
  public updateTask(
    args: UpdateTaskInput,
    cb: (err: any, data?: UpdateTaskOutput) => void
  ): void;
  public updateTask(
    args: UpdateTaskInput,
    cb?: (err: any, data?: UpdateTaskOutput) => void
  ): Promise<UpdateTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
