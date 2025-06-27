// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BatchClient, BatchClientConfig } from "./BatchClient";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommand,
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "./commands/CreateComputeEnvironmentCommand";
import {
  CreateConsumableResourceCommand,
  CreateConsumableResourceCommandInput,
  CreateConsumableResourceCommandOutput,
} from "./commands/CreateConsumableResourceCommand";
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
  DeleteConsumableResourceCommand,
  DeleteConsumableResourceCommandInput,
  DeleteConsumableResourceCommandOutput,
} from "./commands/DeleteConsumableResourceCommand";
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
  DescribeConsumableResourceCommand,
  DescribeConsumableResourceCommandInput,
  DescribeConsumableResourceCommandOutput,
} from "./commands/DescribeConsumableResourceCommand";
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
import {
  GetJobQueueSnapshotCommand,
  GetJobQueueSnapshotCommandInput,
  GetJobQueueSnapshotCommandOutput,
} from "./commands/GetJobQueueSnapshotCommand";
import {
  ListConsumableResourcesCommand,
  ListConsumableResourcesCommandInput,
  ListConsumableResourcesCommandOutput,
} from "./commands/ListConsumableResourcesCommand";
import {
  ListJobsByConsumableResourceCommand,
  ListJobsByConsumableResourceCommandInput,
  ListJobsByConsumableResourceCommandOutput,
} from "./commands/ListJobsByConsumableResourceCommand";
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
  UpdateConsumableResourceCommand,
  UpdateConsumableResourceCommandInput,
  UpdateConsumableResourceCommandOutput,
} from "./commands/UpdateConsumableResourceCommand";
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

const commands = {
  CancelJobCommand,
  CreateComputeEnvironmentCommand,
  CreateConsumableResourceCommand,
  CreateJobQueueCommand,
  CreateSchedulingPolicyCommand,
  DeleteComputeEnvironmentCommand,
  DeleteConsumableResourceCommand,
  DeleteJobQueueCommand,
  DeleteSchedulingPolicyCommand,
  DeregisterJobDefinitionCommand,
  DescribeComputeEnvironmentsCommand,
  DescribeConsumableResourceCommand,
  DescribeJobDefinitionsCommand,
  DescribeJobQueuesCommand,
  DescribeJobsCommand,
  DescribeSchedulingPoliciesCommand,
  GetJobQueueSnapshotCommand,
  ListConsumableResourcesCommand,
  ListJobsCommand,
  ListJobsByConsumableResourceCommand,
  ListSchedulingPoliciesCommand,
  ListTagsForResourceCommand,
  RegisterJobDefinitionCommand,
  SubmitJobCommand,
  TagResourceCommand,
  TerminateJobCommand,
  UntagResourceCommand,
  UpdateComputeEnvironmentCommand,
  UpdateConsumableResourceCommand,
  UpdateJobQueueCommand,
  UpdateSchedulingPolicyCommand,
};

export interface Batch {
  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComputeEnvironmentCommand}
   */
  createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputeEnvironmentCommandOutput>;
  createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    cb: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): void;
  createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConsumableResourceCommand}
   */
  createConsumableResource(
    args: CreateConsumableResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConsumableResourceCommandOutput>;
  createConsumableResource(
    args: CreateConsumableResourceCommandInput,
    cb: (err: any, data?: CreateConsumableResourceCommandOutput) => void
  ): void;
  createConsumableResource(
    args: CreateConsumableResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConsumableResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobQueueCommand}
   */
  createJobQueue(
    args: CreateJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobQueueCommandOutput>;
  createJobQueue(args: CreateJobQueueCommandInput, cb: (err: any, data?: CreateJobQueueCommandOutput) => void): void;
  createJobQueue(
    args: CreateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchedulingPolicyCommand}
   */
  createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchedulingPolicyCommandOutput>;
  createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    cb: (err: any, data?: CreateSchedulingPolicyCommandOutput) => void
  ): void;
  createSchedulingPolicy(
    args: CreateSchedulingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchedulingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComputeEnvironmentCommand}
   */
  deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComputeEnvironmentCommandOutput>;
  deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    cb: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): void;
  deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConsumableResourceCommand}
   */
  deleteConsumableResource(
    args: DeleteConsumableResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConsumableResourceCommandOutput>;
  deleteConsumableResource(
    args: DeleteConsumableResourceCommandInput,
    cb: (err: any, data?: DeleteConsumableResourceCommandOutput) => void
  ): void;
  deleteConsumableResource(
    args: DeleteConsumableResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConsumableResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobQueueCommand}
   */
  deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobQueueCommandOutput>;
  deleteJobQueue(args: DeleteJobQueueCommandInput, cb: (err: any, data?: DeleteJobQueueCommandOutput) => void): void;
  deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchedulingPolicyCommand}
   */
  deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchedulingPolicyCommandOutput>;
  deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    cb: (err: any, data?: DeleteSchedulingPolicyCommandOutput) => void
  ): void;
  deleteSchedulingPolicy(
    args: DeleteSchedulingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchedulingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterJobDefinitionCommand}
   */
  deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterJobDefinitionCommandOutput>;
  deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    cb: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): void;
  deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComputeEnvironmentsCommand}
   */
  describeComputeEnvironments(): Promise<DescribeComputeEnvironmentsCommandOutput>;
  describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComputeEnvironmentsCommandOutput>;
  describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): void;
  describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConsumableResourceCommand}
   */
  describeConsumableResource(
    args: DescribeConsumableResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConsumableResourceCommandOutput>;
  describeConsumableResource(
    args: DescribeConsumableResourceCommandInput,
    cb: (err: any, data?: DescribeConsumableResourceCommandOutput) => void
  ): void;
  describeConsumableResource(
    args: DescribeConsumableResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConsumableResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobDefinitionsCommand}
   */
  describeJobDefinitions(): Promise<DescribeJobDefinitionsCommandOutput>;
  describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobDefinitionsCommandOutput>;
  describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    cb: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): void;
  describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobQueuesCommand}
   */
  describeJobQueues(): Promise<DescribeJobQueuesCommandOutput>;
  describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobQueuesCommandOutput>;
  describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    cb: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): void;
  describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobsCommand}
   */
  describeJobs(args: DescribeJobsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobsCommandOutput>;
  describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSchedulingPoliciesCommand}
   */
  describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchedulingPoliciesCommandOutput>;
  describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    cb: (err: any, data?: DescribeSchedulingPoliciesCommandOutput) => void
  ): void;
  describeSchedulingPolicies(
    args: DescribeSchedulingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchedulingPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobQueueSnapshotCommand}
   */
  getJobQueueSnapshot(
    args: GetJobQueueSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobQueueSnapshotCommandOutput>;
  getJobQueueSnapshot(
    args: GetJobQueueSnapshotCommandInput,
    cb: (err: any, data?: GetJobQueueSnapshotCommandOutput) => void
  ): void;
  getJobQueueSnapshot(
    args: GetJobQueueSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobQueueSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConsumableResourcesCommand}
   */
  listConsumableResources(): Promise<ListConsumableResourcesCommandOutput>;
  listConsumableResources(
    args: ListConsumableResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConsumableResourcesCommandOutput>;
  listConsumableResources(
    args: ListConsumableResourcesCommandInput,
    cb: (err: any, data?: ListConsumableResourcesCommandOutput) => void
  ): void;
  listConsumableResources(
    args: ListConsumableResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConsumableResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsByConsumableResourceCommand}
   */
  listJobsByConsumableResource(
    args: ListJobsByConsumableResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsByConsumableResourceCommandOutput>;
  listJobsByConsumableResource(
    args: ListJobsByConsumableResourceCommandInput,
    cb: (err: any, data?: ListJobsByConsumableResourceCommandOutput) => void
  ): void;
  listJobsByConsumableResource(
    args: ListJobsByConsumableResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsByConsumableResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchedulingPoliciesCommand}
   */
  listSchedulingPolicies(): Promise<ListSchedulingPoliciesCommandOutput>;
  listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchedulingPoliciesCommandOutput>;
  listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    cb: (err: any, data?: ListSchedulingPoliciesCommandOutput) => void
  ): void;
  listSchedulingPolicies(
    args: ListSchedulingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchedulingPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterJobDefinitionCommand}
   */
  registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterJobDefinitionCommandOutput>;
  registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    cb: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): void;
  registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitJobCommand}
   */
  submitJob(args: SubmitJobCommandInput, options?: __HttpHandlerOptions): Promise<SubmitJobCommandOutput>;
  submitJob(args: SubmitJobCommandInput, cb: (err: any, data?: SubmitJobCommandOutput) => void): void;
  submitJob(
    args: SubmitJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateJobCommand}
   */
  terminateJob(args: TerminateJobCommandInput, options?: __HttpHandlerOptions): Promise<TerminateJobCommandOutput>;
  terminateJob(args: TerminateJobCommandInput, cb: (err: any, data?: TerminateJobCommandOutput) => void): void;
  terminateJob(
    args: TerminateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComputeEnvironmentCommand}
   */
  updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComputeEnvironmentCommandOutput>;
  updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    cb: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): void;
  updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConsumableResourceCommand}
   */
  updateConsumableResource(
    args: UpdateConsumableResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConsumableResourceCommandOutput>;
  updateConsumableResource(
    args: UpdateConsumableResourceCommandInput,
    cb: (err: any, data?: UpdateConsumableResourceCommandOutput) => void
  ): void;
  updateConsumableResource(
    args: UpdateConsumableResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConsumableResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobQueueCommand}
   */
  updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobQueueCommandOutput>;
  updateJobQueue(args: UpdateJobQueueCommandInput, cb: (err: any, data?: UpdateJobQueueCommandOutput) => void): void;
  updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchedulingPolicyCommand}
   */
  updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchedulingPolicyCommandOutput>;
  updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    cb: (err: any, data?: UpdateSchedulingPolicyCommandOutput) => void
  ): void;
  updateSchedulingPolicy(
    args: UpdateSchedulingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchedulingPolicyCommandOutput) => void
  ): void;
}

/**
 * <fullname>Batch</fullname>
 *          <p>Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for
 *    developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of
 *    the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure.
 *    At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently
 *    provision resources, and work toward eliminating capacity constraints, reducing your overall compute costs, and
 *    delivering results more quickly.</p>
 *          <p>As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically
 *    provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific
 *    workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus
 *    on analyzing results and solving your specific problems instead.</p>
 * @public
 */
export class Batch extends BatchClient implements Batch {}
createAggregatedClient(commands, Batch);
