import { BatchClient } from "./BatchClient";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommand,
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "./commands/CreateComputeEnvironmentCommand";
import {
  CreateJobQueueCommand,
  CreateJobQueueCommandInput,
  CreateJobQueueCommandOutput,
} from "./commands/CreateJobQueueCommand";
import {
  DeleteComputeEnvironmentCommand,
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "./commands/DeleteComputeEnvironmentCommand";
import {
  DeleteJobQueueCommand,
  DeleteJobQueueCommandInput,
  DeleteJobQueueCommandOutput,
} from "./commands/DeleteJobQueueCommand";
import {
  DeregisterJobDefinitionCommand,
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
} from "./commands/DeregisterJobDefinitionCommand";
import {
  DescribeComputeEnvironmentsCommand,
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "./commands/DescribeComputeEnvironmentsCommand";
import {
  DescribeJobDefinitionsCommand,
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "./commands/DescribeJobDefinitionsCommand";
import {
  DescribeJobQueuesCommand,
  DescribeJobQueuesCommandInput,
  DescribeJobQueuesCommandOutput,
} from "./commands/DescribeJobQueuesCommand";
import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "./commands/DescribeJobsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  RegisterJobDefinitionCommand,
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "./commands/RegisterJobDefinitionCommand";
import { SubmitJobCommand, SubmitJobCommandInput, SubmitJobCommandOutput } from "./commands/SubmitJobCommand";
import {
  TerminateJobCommand,
  TerminateJobCommandInput,
  TerminateJobCommandOutput,
} from "./commands/TerminateJobCommand";
import {
  UpdateComputeEnvironmentCommand,
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
} from "./commands/UpdateComputeEnvironmentCommand";
import {
  UpdateJobQueueCommand,
  UpdateJobQueueCommandInput,
  UpdateJobQueueCommandOutput,
} from "./commands/UpdateJobQueueCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch computing is a common way for
 *    developers, scientists, and engineers to access large amounts of compute resources, and AWS Batch removes the
 *    undifferentiated heavy lifting of configuring and managing the required infrastructure. AWS Batch will be familiar to
 *    users of traditional batch computing software. This service can efficiently provision resources in response to jobs
 *    submitted in order to eliminate capacity constraints, reduce compute costs, and deliver results quickly.</p>
 *          <p>As a fully managed service, AWS Batch enables developers, scientists, and engineers to run batch computing
 *    workloads of any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution
 *    based on the quantity and scale of the workloads. With AWS Batch, there is no need to install or manage batch computing
 *    software, which allows you to focus on analyzing results and solving problems. AWS Batch reduces operational
 *    complexities, saves time, and reduces costs, which makes it easy for developers, scientists, and engineers to run
 *    their batch jobs in the AWS Cloud.</p>
 */
export class Batch extends BatchClient {
  /**
   * <p>Cancels a job in an AWS Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or
   *     <code>RUNNABLE</code> state are cancelled. Jobs that have progressed to <code>STARTING</code> or
   *     <code>RUNNING</code> are not cancelled (but the API operation still succeeds, even if no job is cancelled); these
   *    jobs must be terminated with the <a>TerminateJob</a> operation.</p>
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
   * <p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute
   *    environments.</p>
   *          <p>In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources
   *    within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
   *    specify when you create the compute environment. You can choose to use Amazon EC2 On-Demand Instances or Spot Instances in
   *    your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the
   *    Spot Instance price is below a specified percentage of the On-Demand price.</p>
   *          <note>
   *             <p>Multi-node parallel jobs are not supported on Spot Instances.</p>
   *          </note>
   *          <p>In an unmanaged compute environment, you can manage your own compute resources. This provides more compute
   *    resource configuration options, such as using a custom AMI, but you must ensure that your AMI meets the Amazon ECS
   *    container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">Container Instance AMIs</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>. After you have created your unmanaged compute environment, you can use the
   *     <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that is associated with it. Then,
   *    manually launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS
   *     Container Instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>AWS Batch does not upgrade the AMIs in a compute environment after it is created (for example, when a newer
   *     version of the Amazon ECS-optimized AMI is available). You are responsible for the management of the guest operating
   *     system (including updates and security patches) and any additional application software or utilities that you
   *     install on the compute resources. To use a new AMI for your AWS Batch jobs:</p>
   *             <ol>
   *                <li>
   *                   <p>Create a new compute environment with the new AMI.</p>
   *                </li>
   *                <li>
   *                   <p>Add the compute environment to an existing job queue.</p>
   *                </li>
   *                <li>
   *                   <p>Remove the old compute environment from your job queue.</p>
   *                </li>
   *                <li>
   *                   <p>Delete the old compute environment.</p>
   *                </li>
   *             </ol>
   *          </note>
   */
  public createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputeEnvironmentCommandOutput>;
  public createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    cb: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): void;
  public createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): void;
  public createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComputeEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): Promise<CreateComputeEnvironmentCommandOutput> | void {
    const command = new CreateComputeEnvironmentCommand(args);
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
   * <p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the
   *    queue and assign an order of preference for the compute environments.</p>
   *          <p>You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs
   *    onto its associated compute environments. For example, if a compute environment is associated with more than one job
   *    queue, the job queue with a higher priority is given preference for scheduling jobs to that compute
   *    environment.</p>
   */
  public createJobQueue(
    args: CreateJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobQueueCommandOutput>;
  public createJobQueue(
    args: CreateJobQueueCommandInput,
    cb: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): void;
  public createJobQueue(
    args: CreateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): void;
  public createJobQueue(
    args: CreateJobQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobQueueCommandOutput) => void),
    cb?: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): Promise<CreateJobQueueCommandOutput> | void {
    const command = new CreateJobQueueCommand(args);
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
   * <p>Deletes an AWS Batch compute environment.</p>
   *          <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation.</p>
   */
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComputeEnvironmentCommandOutput>;
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    cb: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): void;
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): void;
  public deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComputeEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): Promise<DeleteComputeEnvironmentCommandOutput> | void {
    const command = new DeleteComputeEnvironmentCommand(args);
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
   * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are terminated when you delete a job queue.</p>
   *          <p>It is not necessary to disassociate compute environments from a queue before submitting a
   *     <code>DeleteJobQueue</code> request.</p>
   */
  public deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobQueueCommandOutput>;
  public deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    cb: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): void;
  public deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): void;
  public deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobQueueCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): Promise<DeleteJobQueueCommandOutput> | void {
    const command = new DeleteJobQueueCommand(args);
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
   * <p>Deregisters an AWS Batch job definition.
   *       Job definitions will be permanently deleted after 180 days.</p>
   */
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterJobDefinitionCommandOutput>;
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    cb: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): void;
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): void;
  public deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterJobDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): Promise<DeregisterJobDefinitionCommandOutput> | void {
    const command = new DeregisterJobDefinitionCommand(args);
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
   * <p>Describes one or more of your compute environments.</p>
   *          <p>If you are using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
   *    operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances
   *    into.</p>
   */
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComputeEnvironmentsCommandOutput>;
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): void;
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): void;
  public describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): Promise<DescribeComputeEnvironmentsCommandOutput> | void {
    const command = new DescribeComputeEnvironmentsCommand(args);
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
   * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only
   *    return job definitions that match that status.</p>
   */
  public describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobDefinitionsCommandOutput>;
  public describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    cb: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): void;
  public describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): void;
  public describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): Promise<DescribeJobDefinitionsCommandOutput> | void {
    const command = new DescribeJobDefinitionsCommand(args);
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
   * <p>Describes one or more of your job queues.</p>
   */
  public describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobQueuesCommandOutput>;
  public describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    cb: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): void;
  public describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): void;
  public describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobQueuesCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): Promise<DescribeJobQueuesCommandOutput> | void {
    const command = new DescribeJobQueuesCommand(args);
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
   * <p>Describes a list of AWS Batch jobs.</p>
   */
  public describeJobs(
    args: DescribeJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobsCommandOutput>;
  public describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
  public describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;
  public describeJobs(
    args: DescribeJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobsCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobsCommandOutput) => void
  ): Promise<DescribeJobsCommandOutput> | void {
    const command = new DescribeJobsCommand(args);
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
   * <p>Returns a list of AWS Batch jobs.</p>
   *          <p>You must specify only one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>a job queue ID to return a list of jobs in that job queue</p>
   *             </li>
   *             <li>
   *                <p>a multi-node parallel job ID to return a list of that job's nodes</p>
   *             </li>
   *             <li>
   *                <p>an array job ID to return a list of that job's children</p>
   *             </li>
   *          </ul>
   *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you do not specify a
   *    status, only <code>RUNNING</code> jobs are returned.</p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p>Registers an AWS Batch job definition.</p>
   */
  public registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterJobDefinitionCommandOutput>;
  public registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    cb: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): void;
  public registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): void;
  public registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterJobDefinitionCommandOutput) => void),
    cb?: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): Promise<RegisterJobDefinitionCommandOutput> | void {
    const command = new RegisterJobDefinitionCommand(args);
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
   * <p>Submits an AWS Batch job from a job definition. Parameters specified during <a>SubmitJob</a> override
   *    parameters defined in the job definition.</p>
   */
  public submitJob(args: SubmitJobCommandInput, options?: __HttpHandlerOptions): Promise<SubmitJobCommandOutput>;
  public submitJob(args: SubmitJobCommandInput, cb: (err: any, data?: SubmitJobCommandOutput) => void): void;
  public submitJob(
    args: SubmitJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;
  public submitJob(
    args: SubmitJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubmitJobCommandOutput) => void),
    cb?: (err: any, data?: SubmitJobCommandOutput) => void
  ): Promise<SubmitJobCommandOutput> | void {
    const command = new SubmitJobCommand(args);
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
   * <p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are
   *    terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the
   *     <code>STARTING</code> state are cancelled.</p>
   */
  public terminateJob(
    args: TerminateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateJobCommandOutput>;
  public terminateJob(args: TerminateJobCommandInput, cb: (err: any, data?: TerminateJobCommandOutput) => void): void;
  public terminateJob(
    args: TerminateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateJobCommandOutput) => void
  ): void;
  public terminateJob(
    args: TerminateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateJobCommandOutput) => void),
    cb?: (err: any, data?: TerminateJobCommandOutput) => void
  ): Promise<TerminateJobCommandOutput> | void {
    const command = new TerminateJobCommand(args);
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
   * <p>Updates an AWS Batch compute environment.</p>
   */
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComputeEnvironmentCommandOutput>;
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    cb: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): void;
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): void;
  public updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateComputeEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): Promise<UpdateComputeEnvironmentCommandOutput> | void {
    const command = new UpdateComputeEnvironmentCommand(args);
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
   * <p>Updates a job queue.</p>
   */
  public updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobQueueCommandOutput>;
  public updateJobQueue(
    args: UpdateJobQueueCommandInput,
    cb: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): void;
  public updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): void;
  public updateJobQueue(
    args: UpdateJobQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobQueueCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): Promise<UpdateJobQueueCommandOutput> | void {
    const command = new UpdateJobQueueCommand(args);
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
