import { BatchClient } from "./BatchClient";
import { CancelJobInput } from "./types/CancelJobInput";
import { CancelJobOutput } from "./types/CancelJobOutput";
import { ClientException } from "./types/ClientException";
import { CreateComputeEnvironmentInput } from "./types/CreateComputeEnvironmentInput";
import { CreateComputeEnvironmentOutput } from "./types/CreateComputeEnvironmentOutput";
import { CreateJobQueueInput } from "./types/CreateJobQueueInput";
import { CreateJobQueueOutput } from "./types/CreateJobQueueOutput";
import { DeleteComputeEnvironmentInput } from "./types/DeleteComputeEnvironmentInput";
import { DeleteComputeEnvironmentOutput } from "./types/DeleteComputeEnvironmentOutput";
import { DeleteJobQueueInput } from "./types/DeleteJobQueueInput";
import { DeleteJobQueueOutput } from "./types/DeleteJobQueueOutput";
import { DeregisterJobDefinitionInput } from "./types/DeregisterJobDefinitionInput";
import { DeregisterJobDefinitionOutput } from "./types/DeregisterJobDefinitionOutput";
import { DescribeComputeEnvironmentsInput } from "./types/DescribeComputeEnvironmentsInput";
import { DescribeComputeEnvironmentsOutput } from "./types/DescribeComputeEnvironmentsOutput";
import { DescribeJobDefinitionsInput } from "./types/DescribeJobDefinitionsInput";
import { DescribeJobDefinitionsOutput } from "./types/DescribeJobDefinitionsOutput";
import { DescribeJobQueuesInput } from "./types/DescribeJobQueuesInput";
import { DescribeJobQueuesOutput } from "./types/DescribeJobQueuesOutput";
import { DescribeJobsInput } from "./types/DescribeJobsInput";
import { DescribeJobsOutput } from "./types/DescribeJobsOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { RegisterJobDefinitionInput } from "./types/RegisterJobDefinitionInput";
import { RegisterJobDefinitionOutput } from "./types/RegisterJobDefinitionOutput";
import { ServerException } from "./types/ServerException";
import { SubmitJobInput } from "./types/SubmitJobInput";
import { SubmitJobOutput } from "./types/SubmitJobOutput";
import { TerminateJobInput } from "./types/TerminateJobInput";
import { TerminateJobOutput } from "./types/TerminateJobOutput";
import { UpdateComputeEnvironmentInput } from "./types/UpdateComputeEnvironmentInput";
import { UpdateComputeEnvironmentOutput } from "./types/UpdateComputeEnvironmentOutput";
import { UpdateJobQueueInput } from "./types/UpdateJobQueueInput";
import { UpdateJobQueueOutput } from "./types/UpdateJobQueueOutput";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CreateComputeEnvironmentCommand } from "./commands/CreateComputeEnvironmentCommand";
import { CreateJobQueueCommand } from "./commands/CreateJobQueueCommand";
import { DeleteComputeEnvironmentCommand } from "./commands/DeleteComputeEnvironmentCommand";
import { DeleteJobQueueCommand } from "./commands/DeleteJobQueueCommand";
import { DeregisterJobDefinitionCommand } from "./commands/DeregisterJobDefinitionCommand";
import { DescribeComputeEnvironmentsCommand } from "./commands/DescribeComputeEnvironmentsCommand";
import { DescribeJobDefinitionsCommand } from "./commands/DescribeJobDefinitionsCommand";
import { DescribeJobQueuesCommand } from "./commands/DescribeJobQueuesCommand";
import { DescribeJobsCommand } from "./commands/DescribeJobsCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { RegisterJobDefinitionCommand } from "./commands/RegisterJobDefinitionCommand";
import { SubmitJobCommand } from "./commands/SubmitJobCommand";
import { TerminateJobCommand } from "./commands/TerminateJobCommand";
import { UpdateComputeEnvironmentCommand } from "./commands/UpdateComputeEnvironmentCommand";
import { UpdateJobQueueCommand } from "./commands/UpdateJobQueueCommand";

export class Batch extends BatchClient {
  /**
   * <p>Cancels a job in an AWS Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or <code>RUNNABLE</code> state are cancelled. Jobs that have progressed to <code>STARTING</code> or <code>RUNNING</code> are not cancelled (but the API operation still succeeds, even if no job is cancelled); these jobs must be terminated with the <a>TerminateJob</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelJob(args: CancelJobInput): Promise<CancelJobOutput>;
  public cancelJob(
    args: CancelJobInput,
    cb: (err: any, data?: CancelJobOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobInput,
    cb?: (err: any, data?: CancelJobOutput) => void
  ): Promise<CancelJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments.</p> <p>In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. You can choose to use Amazon EC2 On-Demand Instances or Spot Instances in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is below a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs are not supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own compute resources. This provides more compute resource configuration options, such as using a custom AMI, but you must ensure that your AMI meets the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">Container Instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you have created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that is associated with it. Then, manually launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS Container Instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>AWS Batch does not upgrade the AMIs in a compute environment after it is created (for example, when a newer version of the Amazon ECS-optimized AMI is available). You are responsible for the management of the guest operating system (including updates and security patches) and any additional application software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the old compute environment from your job queue.</p> </li> <li> <p>Delete the old compute environment.</p> </li> </ol> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createComputeEnvironment(
    args: CreateComputeEnvironmentInput
  ): Promise<CreateComputeEnvironmentOutput>;
  public createComputeEnvironment(
    args: CreateComputeEnvironmentInput,
    cb: (err: any, data?: CreateComputeEnvironmentOutput) => void
  ): void;
  public createComputeEnvironment(
    args: CreateComputeEnvironmentInput,
    cb?: (err: any, data?: CreateComputeEnvironmentOutput) => void
  ): Promise<CreateComputeEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateComputeEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJobQueue(
    args: CreateJobQueueInput
  ): Promise<CreateJobQueueOutput>;
  public createJobQueue(
    args: CreateJobQueueInput,
    cb: (err: any, data?: CreateJobQueueOutput) => void
  ): void;
  public createJobQueue(
    args: CreateJobQueueInput,
    cb?: (err: any, data?: CreateJobQueueOutput) => void
  ): Promise<CreateJobQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an AWS Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentInput
  ): Promise<DeleteComputeEnvironmentOutput>;
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentInput,
    cb: (err: any, data?: DeleteComputeEnvironmentOutput) => void
  ): void;
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentInput,
    cb?: (err: any, data?: DeleteComputeEnvironmentOutput) => void
  ): Promise<DeleteComputeEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteComputeEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are terminated when you delete a job queue.</p> <p>It is not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteJobQueue(
    args: DeleteJobQueueInput
  ): Promise<DeleteJobQueueOutput>;
  public deleteJobQueue(
    args: DeleteJobQueueInput,
    cb: (err: any, data?: DeleteJobQueueOutput) => void
  ): void;
  public deleteJobQueue(
    args: DeleteJobQueueInput,
    cb?: (err: any, data?: DeleteJobQueueOutput) => void
  ): Promise<DeleteJobQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteJobQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters an AWS Batch job definition.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionInput
  ): Promise<DeregisterJobDefinitionOutput>;
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionInput,
    cb: (err: any, data?: DeregisterJobDefinitionOutput) => void
  ): void;
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionInput,
    cb?: (err: any, data?: DeregisterJobDefinitionOutput) => void
  ): Promise<DeregisterJobDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterJobDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your compute environments.</p> <p>If you are using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances into.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsInput
  ): Promise<DescribeComputeEnvironmentsOutput>;
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsInput,
    cb: (err: any, data?: DescribeComputeEnvironmentsOutput) => void
  ): void;
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsInput,
    cb?: (err: any, data?: DescribeComputeEnvironmentsOutput) => void
  ): Promise<DescribeComputeEnvironmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeComputeEnvironmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJobDefinitions(
    args: DescribeJobDefinitionsInput
  ): Promise<DescribeJobDefinitionsOutput>;
  public describeJobDefinitions(
    args: DescribeJobDefinitionsInput,
    cb: (err: any, data?: DescribeJobDefinitionsOutput) => void
  ): void;
  public describeJobDefinitions(
    args: DescribeJobDefinitionsInput,
    cb?: (err: any, data?: DescribeJobDefinitionsOutput) => void
  ): Promise<DescribeJobDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your job queues.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJobQueues(
    args: DescribeJobQueuesInput
  ): Promise<DescribeJobQueuesOutput>;
  public describeJobQueues(
    args: DescribeJobQueuesInput,
    cb: (err: any, data?: DescribeJobQueuesOutput) => void
  ): void;
  public describeJobQueues(
    args: DescribeJobQueuesInput,
    cb?: (err: any, data?: DescribeJobQueuesOutput) => void
  ): Promise<DescribeJobQueuesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobQueuesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a list of AWS Batch jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJobs(args: DescribeJobsInput): Promise<DescribeJobsOutput>;
  public describeJobs(
    args: DescribeJobsInput,
    cb: (err: any, data?: DescribeJobsOutput) => void
  ): void;
  public describeJobs(
    args: DescribeJobsInput,
    cb?: (err: any, data?: DescribeJobsOutput) => void
  ): Promise<DescribeJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of AWS Batch jobs.</p> <p>You must specify only one of the following:</p> <ul> <li> <p>a job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>a multi-node parallel job ID to return a list of that job's nodes</p> </li> <li> <p>an array job ID to return a list of that job's children</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you do not specify a status, only <code>RUNNING</code> jobs are returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an AWS Batch job definition. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerJobDefinition(
    args: RegisterJobDefinitionInput
  ): Promise<RegisterJobDefinitionOutput>;
  public registerJobDefinition(
    args: RegisterJobDefinitionInput,
    cb: (err: any, data?: RegisterJobDefinitionOutput) => void
  ): void;
  public registerJobDefinition(
    args: RegisterJobDefinitionInput,
    cb?: (err: any, data?: RegisterJobDefinitionOutput) => void
  ): Promise<RegisterJobDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterJobDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Submits an AWS Batch job from a job definition. Parameters specified during <a>SubmitJob</a> override parameters defined in the job definition. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public submitJob(args: SubmitJobInput): Promise<SubmitJobOutput>;
  public submitJob(
    args: SubmitJobInput,
    cb: (err: any, data?: SubmitJobOutput) => void
  ): void;
  public submitJob(
    args: SubmitJobInput,
    cb?: (err: any, data?: SubmitJobOutput) => void
  ): Promise<SubmitJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubmitJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateJob(args: TerminateJobInput): Promise<TerminateJobOutput>;
  public terminateJob(
    args: TerminateJobInput,
    cb: (err: any, data?: TerminateJobOutput) => void
  ): void;
  public terminateJob(
    args: TerminateJobInput,
    cb?: (err: any, data?: TerminateJobOutput) => void
  ): Promise<TerminateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an AWS Batch compute environment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentInput
  ): Promise<UpdateComputeEnvironmentOutput>;
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentInput,
    cb: (err: any, data?: UpdateComputeEnvironmentOutput) => void
  ): void;
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentInput,
    cb?: (err: any, data?: UpdateComputeEnvironmentOutput) => void
  ): Promise<UpdateComputeEnvironmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateComputeEnvironmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a job queue.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. </p>
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJobQueue(
    args: UpdateJobQueueInput
  ): Promise<UpdateJobQueueOutput>;
  public updateJobQueue(
    args: UpdateJobQueueInput,
    cb: (err: any, data?: UpdateJobQueueOutput) => void
  ): void;
  public updateJobQueue(
    args: UpdateJobQueueInput,
    cb?: (err: any, data?: UpdateJobQueueOutput) => void
  ): Promise<UpdateJobQueueOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobQueueCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
