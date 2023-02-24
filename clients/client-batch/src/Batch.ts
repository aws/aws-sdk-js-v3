// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  CreateSchedulingPolicyCommand,
  CreateSchedulingPolicyCommandInput,
  CreateSchedulingPolicyCommandOutput,
} from "./commands/CreateSchedulingPolicyCommand";
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
  DeleteSchedulingPolicyCommand,
  DeleteSchedulingPolicyCommandInput,
  DeleteSchedulingPolicyCommandOutput,
} from "./commands/DeleteSchedulingPolicyCommand";
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
import {
  DescribeSchedulingPoliciesCommand,
  DescribeSchedulingPoliciesCommandInput,
  DescribeSchedulingPoliciesCommandOutput,
} from "./commands/DescribeSchedulingPoliciesCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListSchedulingPoliciesCommand,
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput,
} from "./commands/ListSchedulingPoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterJobDefinitionCommand,
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "./commands/RegisterJobDefinitionCommand";
import { SubmitJobCommand, SubmitJobCommandInput, SubmitJobCommandOutput } from "./commands/SubmitJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateJobCommand,
  TerminateJobCommandInput,
  TerminateJobCommandOutput,
} from "./commands/TerminateJobCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
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
import {
  UpdateSchedulingPolicyCommand,
  UpdateSchedulingPolicyCommandInput,
  UpdateSchedulingPolicyCommandOutput,
} from "./commands/UpdateSchedulingPolicyCommand";

/**
 * <fullname>Batch</fullname>
 *          <p>Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for
 *    developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of
 *    the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure.
 *    At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently
 *    provision resources d, and work toward eliminating capacity constraints, reducing your overall compute costs, and
 *    delivering results more quickly.</p>
 *          <p>As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically
 *    provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific
 *    workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus
 *    on analyzing results and solving your specific problems instead.</p>
 */
export class Batch extends BatchClient {
  /**
   * <p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or
   *    <code>RUNNABLE</code> state are canceled. Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code>
   *    state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be
   *    terminated with the <a>TerminateJob</a> operation.</p>
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
   * <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute
   *    environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources.
   *     <code>UNMANAGED</code> compute environments can only use EC2 resources.</p>
   *          <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources
   *    within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
   *    specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot
   *    Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can
   *    optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a
   *    specified percentage of the On-Demand price.</p>
   *          <note>
   *             <p>Multi-node parallel jobs aren't supported on Spot Instances.</p>
   *          </note>
   *          <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how
   *    you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of
   *    your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the
   *    <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch
   *    your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the
   *    <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>To create a compute environment that uses EKS resources, the caller must have permissions to call
   *     <code>eks:DescribeCluster</code>.</p>
   *          </note>
   *          <note>
   *             <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it
   *     also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is
   *     available. You're responsible for the management of the guest operating system. This includes any updates and
   *     security patches. You're also responsible for any additional application software or utilities that you install on
   *     the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete
   *     these steps:</p>
   *             <ol>
   *                <li>
   *                   <p>Create a new compute environment with the new AMI.</p>
   *                </li>
   *                <li>
   *                   <p>Add the compute environment to an existing job queue.</p>
   *                </li>
   *                <li>
   *                   <p>Remove the earlier compute environment from your job queue.</p>
   *                </li>
   *                <li>
   *                   <p>Delete the earlier compute environment.</p>
   *                </li>
   *             </ol>
   *             <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see
   *      <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute
   *      environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these
   *     rules:</p>
   *             <ul>
   *                <li>
   *                   <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p>
   *                </li>
   *                <li>
   *                   <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code>
   *       or <code>SPOT_CAPACITY_OPTIMIZED</code>.</p>
   *                </li>
   *                <li>
   *                   <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to
   *        <code>true</code>.</p>
   *                </li>
   *                <li>
   *                   <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html">
   *                         <code>ec2Configuration</code>
   *                      </a>), or in the launch
   *       template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's
   *       supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID
   *       in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the
   *       <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the
   *       AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the
   *       <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different
   *       launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by
   *       setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version
   *       to the launch template (if <code>$Latest</code>).</p>
   *                </li>
   *             </ul>
   *             <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be
   *     re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to
   *     <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up
   *     at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p>
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
   * <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the
   *    queue and assign an order of preference for the compute environments.</p>
   *          <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto
   *    its associated compute environments. For example, if a compute environment is associated with more than one job
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
   * <p>Creates an Batch scheduling policy.</p>
   */
  public createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchedulingPolicyCommandOutput>;
  public createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    cb: (err: any, data?: CreateSchedulingPolicyCommandOutput) => void
  ): void;
  public createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchedulingPolicyCommandOutput) => void
  ): void;
  public createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSchedulingPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateSchedulingPolicyCommandOutput) => void
  ): Promise<CreateSchedulingPolicyCommandOutput> | void {
    const command = new CreateSchedulingPolicyCommand(args);
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
   * <p>Deletes an Batch compute environment.</p>
   *          <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all
   *    active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute
   *    environment enters an invalid state.</p>
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
   * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue.
   *    The jobs are terminated at a rate of about 16 jobs each second.</p>
   *          <p>It's not necessary to disassociate compute environments from a queue before submitting a
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
   * <p>Deletes the specified scheduling policy.</p>
   *          <p>You can't delete a scheduling policy that's used in any job queues.</p>
   */
  public deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchedulingPolicyCommandOutput>;
  public deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    cb: (err: any, data?: DeleteSchedulingPolicyCommandOutput) => void
  ): void;
  public deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchedulingPolicyCommandOutput) => void
  ): void;
  public deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchedulingPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchedulingPolicyCommandOutput) => void
  ): Promise<DeleteSchedulingPolicyCommandOutput> | void {
    const command = new DeleteSchedulingPolicyCommand(args);
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
   * <p>Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.</p>
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
   *          <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
   *    operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances
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
   * <p>Describes a list of Batch jobs.</p>
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
   * <p>Describes one or more of your scheduling policies.</p>
   */
  public describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchedulingPoliciesCommandOutput>;
  public describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    cb: (err: any, data?: DescribeSchedulingPoliciesCommandOutput) => void
  ): void;
  public describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchedulingPoliciesCommandOutput) => void
  ): void;
  public describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSchedulingPoliciesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSchedulingPoliciesCommandOutput) => void
  ): Promise<DescribeSchedulingPoliciesCommandOutput> | void {
    const command = new DescribeSchedulingPoliciesCommand(args);
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
   * <p>Returns a list of Batch jobs.</p>
   *          <p>You must specify only one of the following items:</p>
   *          <ul>
   *             <li>
   *                <p>A job queue ID to return a list of jobs in that job queue</p>
   *             </li>
   *             <li>
   *                <p>A multi-node parallel job ID to return a list of nodes for that job</p>
   *             </li>
   *             <li>
   *                <p>An array job ID to return a list of the children for that job</p>
   *             </li>
   *          </ul>
   *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a
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
   * <p>Returns a list of Batch scheduling policies.</p>
   */
  public listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchedulingPoliciesCommandOutput>;
  public listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    cb: (err: any, data?: ListSchedulingPoliciesCommandOutput) => void
  ): void;
  public listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchedulingPoliciesCommandOutput) => void
  ): void;
  public listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchedulingPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListSchedulingPoliciesCommandOutput) => void
  ): Promise<ListSchedulingPoliciesCommandOutput> | void {
    const command = new ListSchedulingPoliciesCommand(args);
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
   * <p>Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
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
   * <p>Registers an Batch job definition.</p>
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
   * <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a>
   *    override parameters defined in the job definition. vCPU and memory requirements that are specified in the
   *     <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way
   *    using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
   *    parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code>
   *    parameter.</p>
   *          <note>
   *             <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p>
   *          </note>
   *          <important>
   *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14
   *     days, Fargate resources might become unavailable and job might be terminated.</p>
   *          </important>
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
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a
   *    resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that
   *    are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues,
   *  and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.</p>
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
   * <p>Deletes specified tags from an Batch resource.</p>
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
   * <p>Updates an Batch compute environment.</p>
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

  /**
   * <p>Updates a scheduling policy.</p>
   */
  public updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchedulingPolicyCommandOutput>;
  public updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    cb: (err: any, data?: UpdateSchedulingPolicyCommandOutput) => void
  ): void;
  public updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchedulingPolicyCommandOutput) => void
  ): void;
  public updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSchedulingPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateSchedulingPolicyCommandOutput) => void
  ): Promise<UpdateSchedulingPolicyCommandOutput> | void {
    const command = new UpdateSchedulingPolicyCommand(args);
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
