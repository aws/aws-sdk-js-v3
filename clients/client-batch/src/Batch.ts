// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BatchClient } from "./BatchClient";
import { type CancelJobCommandInput, type CancelJobCommandOutput, CancelJobCommand } from "./commands/CancelJobCommand";
import {
  type CreateComputeEnvironmentCommandInput,
  type CreateComputeEnvironmentCommandOutput,
  CreateComputeEnvironmentCommand,
} from "./commands/CreateComputeEnvironmentCommand";
import {
  type CreateConsumableResourceCommandInput,
  type CreateConsumableResourceCommandOutput,
  CreateConsumableResourceCommand,
} from "./commands/CreateConsumableResourceCommand";
import {
  type CreateJobQueueCommandInput,
  type CreateJobQueueCommandOutput,
  CreateJobQueueCommand,
} from "./commands/CreateJobQueueCommand";
import {
  type CreateQuotaShareCommandInput,
  type CreateQuotaShareCommandOutput,
  CreateQuotaShareCommand,
} from "./commands/CreateQuotaShareCommand";
import {
  type CreateSchedulingPolicyCommandInput,
  type CreateSchedulingPolicyCommandOutput,
  CreateSchedulingPolicyCommand,
} from "./commands/CreateSchedulingPolicyCommand";
import {
  type CreateServiceEnvironmentCommandInput,
  type CreateServiceEnvironmentCommandOutput,
  CreateServiceEnvironmentCommand,
} from "./commands/CreateServiceEnvironmentCommand";
import {
  type DeleteComputeEnvironmentCommandInput,
  type DeleteComputeEnvironmentCommandOutput,
  DeleteComputeEnvironmentCommand,
} from "./commands/DeleteComputeEnvironmentCommand";
import {
  type DeleteConsumableResourceCommandInput,
  type DeleteConsumableResourceCommandOutput,
  DeleteConsumableResourceCommand,
} from "./commands/DeleteConsumableResourceCommand";
import {
  type DeleteJobQueueCommandInput,
  type DeleteJobQueueCommandOutput,
  DeleteJobQueueCommand,
} from "./commands/DeleteJobQueueCommand";
import {
  type DeleteQuotaShareCommandInput,
  type DeleteQuotaShareCommandOutput,
  DeleteQuotaShareCommand,
} from "./commands/DeleteQuotaShareCommand";
import {
  type DeleteSchedulingPolicyCommandInput,
  type DeleteSchedulingPolicyCommandOutput,
  DeleteSchedulingPolicyCommand,
} from "./commands/DeleteSchedulingPolicyCommand";
import {
  type DeleteServiceEnvironmentCommandInput,
  type DeleteServiceEnvironmentCommandOutput,
  DeleteServiceEnvironmentCommand,
} from "./commands/DeleteServiceEnvironmentCommand";
import {
  type DeregisterJobDefinitionCommandInput,
  type DeregisterJobDefinitionCommandOutput,
  DeregisterJobDefinitionCommand,
} from "./commands/DeregisterJobDefinitionCommand";
import {
  type DescribeComputeEnvironmentsCommandInput,
  type DescribeComputeEnvironmentsCommandOutput,
  DescribeComputeEnvironmentsCommand,
} from "./commands/DescribeComputeEnvironmentsCommand";
import {
  type DescribeConsumableResourceCommandInput,
  type DescribeConsumableResourceCommandOutput,
  DescribeConsumableResourceCommand,
} from "./commands/DescribeConsumableResourceCommand";
import {
  type DescribeJobDefinitionsCommandInput,
  type DescribeJobDefinitionsCommandOutput,
  DescribeJobDefinitionsCommand,
} from "./commands/DescribeJobDefinitionsCommand";
import {
  type DescribeJobQueuesCommandInput,
  type DescribeJobQueuesCommandOutput,
  DescribeJobQueuesCommand,
} from "./commands/DescribeJobQueuesCommand";
import {
  type DescribeJobsCommandInput,
  type DescribeJobsCommandOutput,
  DescribeJobsCommand,
} from "./commands/DescribeJobsCommand";
import {
  type DescribeQuotaShareCommandInput,
  type DescribeQuotaShareCommandOutput,
  DescribeQuotaShareCommand,
} from "./commands/DescribeQuotaShareCommand";
import {
  type DescribeSchedulingPoliciesCommandInput,
  type DescribeSchedulingPoliciesCommandOutput,
  DescribeSchedulingPoliciesCommand,
} from "./commands/DescribeSchedulingPoliciesCommand";
import {
  type DescribeServiceEnvironmentsCommandInput,
  type DescribeServiceEnvironmentsCommandOutput,
  DescribeServiceEnvironmentsCommand,
} from "./commands/DescribeServiceEnvironmentsCommand";
import {
  type DescribeServiceJobCommandInput,
  type DescribeServiceJobCommandOutput,
  DescribeServiceJobCommand,
} from "./commands/DescribeServiceJobCommand";
import {
  type GetJobQueueSnapshotCommandInput,
  type GetJobQueueSnapshotCommandOutput,
  GetJobQueueSnapshotCommand,
} from "./commands/GetJobQueueSnapshotCommand";
import {
  type ListConsumableResourcesCommandInput,
  type ListConsumableResourcesCommandOutput,
  ListConsumableResourcesCommand,
} from "./commands/ListConsumableResourcesCommand";
import {
  type ListJobsByConsumableResourceCommandInput,
  type ListJobsByConsumableResourceCommandOutput,
  ListJobsByConsumableResourceCommand,
} from "./commands/ListJobsByConsumableResourceCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListQuotaSharesCommandInput,
  type ListQuotaSharesCommandOutput,
  ListQuotaSharesCommand,
} from "./commands/ListQuotaSharesCommand";
import {
  type ListSchedulingPoliciesCommandInput,
  type ListSchedulingPoliciesCommandOutput,
  ListSchedulingPoliciesCommand,
} from "./commands/ListSchedulingPoliciesCommand";
import {
  type ListServiceJobsCommandInput,
  type ListServiceJobsCommandOutput,
  ListServiceJobsCommand,
} from "./commands/ListServiceJobsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RegisterJobDefinitionCommandInput,
  type RegisterJobDefinitionCommandOutput,
  RegisterJobDefinitionCommand,
} from "./commands/RegisterJobDefinitionCommand";
import { type SubmitJobCommandInput, type SubmitJobCommandOutput, SubmitJobCommand } from "./commands/SubmitJobCommand";
import {
  type SubmitServiceJobCommandInput,
  type SubmitServiceJobCommandOutput,
  SubmitServiceJobCommand,
} from "./commands/SubmitServiceJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateJobCommandInput,
  type TerminateJobCommandOutput,
  TerminateJobCommand,
} from "./commands/TerminateJobCommand";
import {
  type TerminateServiceJobCommandInput,
  type TerminateServiceJobCommandOutput,
  TerminateServiceJobCommand,
} from "./commands/TerminateServiceJobCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateComputeEnvironmentCommandInput,
  type UpdateComputeEnvironmentCommandOutput,
  UpdateComputeEnvironmentCommand,
} from "./commands/UpdateComputeEnvironmentCommand";
import {
  type UpdateConsumableResourceCommandInput,
  type UpdateConsumableResourceCommandOutput,
  UpdateConsumableResourceCommand,
} from "./commands/UpdateConsumableResourceCommand";
import {
  type UpdateJobQueueCommandInput,
  type UpdateJobQueueCommandOutput,
  UpdateJobQueueCommand,
} from "./commands/UpdateJobQueueCommand";
import {
  type UpdateQuotaShareCommandInput,
  type UpdateQuotaShareCommandOutput,
  UpdateQuotaShareCommand,
} from "./commands/UpdateQuotaShareCommand";
import {
  type UpdateSchedulingPolicyCommandInput,
  type UpdateSchedulingPolicyCommandOutput,
  UpdateSchedulingPolicyCommand,
} from "./commands/UpdateSchedulingPolicyCommand";
import {
  type UpdateServiceEnvironmentCommandInput,
  type UpdateServiceEnvironmentCommandOutput,
  UpdateServiceEnvironmentCommand,
} from "./commands/UpdateServiceEnvironmentCommand";
import {
  type UpdateServiceJobCommandInput,
  type UpdateServiceJobCommandOutput,
  UpdateServiceJobCommand,
} from "./commands/UpdateServiceJobCommand";
import { paginateDescribeComputeEnvironments } from "./pagination/DescribeComputeEnvironmentsPaginator";
import { paginateDescribeJobDefinitions } from "./pagination/DescribeJobDefinitionsPaginator";
import { paginateDescribeJobQueues } from "./pagination/DescribeJobQueuesPaginator";
import { paginateDescribeServiceEnvironments } from "./pagination/DescribeServiceEnvironmentsPaginator";
import { paginateListConsumableResources } from "./pagination/ListConsumableResourcesPaginator";
import { paginateListJobsByConsumableResource } from "./pagination/ListJobsByConsumableResourcePaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListQuotaShares } from "./pagination/ListQuotaSharesPaginator";
import { paginateListSchedulingPolicies } from "./pagination/ListSchedulingPoliciesPaginator";
import { paginateListServiceJobs } from "./pagination/ListServiceJobsPaginator";

const commands = {
  CancelJobCommand,
  CreateComputeEnvironmentCommand,
  CreateConsumableResourceCommand,
  CreateJobQueueCommand,
  CreateQuotaShareCommand,
  CreateSchedulingPolicyCommand,
  CreateServiceEnvironmentCommand,
  DeleteComputeEnvironmentCommand,
  DeleteConsumableResourceCommand,
  DeleteJobQueueCommand,
  DeleteQuotaShareCommand,
  DeleteSchedulingPolicyCommand,
  DeleteServiceEnvironmentCommand,
  DeregisterJobDefinitionCommand,
  DescribeComputeEnvironmentsCommand,
  DescribeConsumableResourceCommand,
  DescribeJobDefinitionsCommand,
  DescribeJobQueuesCommand,
  DescribeJobsCommand,
  DescribeQuotaShareCommand,
  DescribeSchedulingPoliciesCommand,
  DescribeServiceEnvironmentsCommand,
  DescribeServiceJobCommand,
  GetJobQueueSnapshotCommand,
  ListConsumableResourcesCommand,
  ListJobsCommand,
  ListJobsByConsumableResourceCommand,
  ListQuotaSharesCommand,
  ListSchedulingPoliciesCommand,
  ListServiceJobsCommand,
  ListTagsForResourceCommand,
  RegisterJobDefinitionCommand,
  SubmitJobCommand,
  SubmitServiceJobCommand,
  TagResourceCommand,
  TerminateJobCommand,
  TerminateServiceJobCommand,
  UntagResourceCommand,
  UpdateComputeEnvironmentCommand,
  UpdateConsumableResourceCommand,
  UpdateJobQueueCommand,
  UpdateQuotaShareCommand,
  UpdateSchedulingPolicyCommand,
  UpdateServiceEnvironmentCommand,
  UpdateServiceJobCommand,
};
const paginators = {
  paginateDescribeComputeEnvironments,
  paginateDescribeJobDefinitions,
  paginateDescribeJobQueues,
  paginateDescribeServiceEnvironments,
  paginateListConsumableResources,
  paginateListJobs,
  paginateListJobsByConsumableResource,
  paginateListQuotaShares,
  paginateListSchedulingPolicies,
  paginateListServiceJobs,
};

export interface Batch {
  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(
    args: CancelJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobCommandOutput>;
  cancelJob(
    args: CancelJobCommandInput,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
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
  createJobQueue(
    args: CreateJobQueueCommandInput,
    cb: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): void;
  createJobQueue(
    args: CreateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuotaShareCommand}
   */
  createQuotaShare(
    args: CreateQuotaShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuotaShareCommandOutput>;
  createQuotaShare(
    args: CreateQuotaShareCommandInput,
    cb: (err: any, data?: CreateQuotaShareCommandOutput) => void
  ): void;
  createQuotaShare(
    args: CreateQuotaShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuotaShareCommandOutput) => void
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
   * @see {@link CreateServiceEnvironmentCommand}
   */
  createServiceEnvironment(
    args: CreateServiceEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceEnvironmentCommandOutput>;
  createServiceEnvironment(
    args: CreateServiceEnvironmentCommandInput,
    cb: (err: any, data?: CreateServiceEnvironmentCommandOutput) => void
  ): void;
  createServiceEnvironment(
    args: CreateServiceEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceEnvironmentCommandOutput) => void
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
  deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    cb: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): void;
  deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQuotaShareCommand}
   */
  deleteQuotaShare(
    args: DeleteQuotaShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuotaShareCommandOutput>;
  deleteQuotaShare(
    args: DeleteQuotaShareCommandInput,
    cb: (err: any, data?: DeleteQuotaShareCommandOutput) => void
  ): void;
  deleteQuotaShare(
    args: DeleteQuotaShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuotaShareCommandOutput) => void
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
   * @see {@link DeleteServiceEnvironmentCommand}
   */
  deleteServiceEnvironment(
    args: DeleteServiceEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceEnvironmentCommandOutput>;
  deleteServiceEnvironment(
    args: DeleteServiceEnvironmentCommandInput,
    cb: (err: any, data?: DeleteServiceEnvironmentCommandOutput) => void
  ): void;
  deleteServiceEnvironment(
    args: DeleteServiceEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceEnvironmentCommandOutput) => void
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
  describeJobs(
    args: DescribeJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobsCommandOutput>;
  describeJobs(
    args: DescribeJobsCommandInput,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuotaShareCommand}
   */
  describeQuotaShare(
    args: DescribeQuotaShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuotaShareCommandOutput>;
  describeQuotaShare(
    args: DescribeQuotaShareCommandInput,
    cb: (err: any, data?: DescribeQuotaShareCommandOutput) => void
  ): void;
  describeQuotaShare(
    args: DescribeQuotaShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuotaShareCommandOutput) => void
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
   * @see {@link DescribeServiceEnvironmentsCommand}
   */
  describeServiceEnvironments(): Promise<DescribeServiceEnvironmentsCommandOutput>;
  describeServiceEnvironments(
    args: DescribeServiceEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceEnvironmentsCommandOutput>;
  describeServiceEnvironments(
    args: DescribeServiceEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeServiceEnvironmentsCommandOutput) => void
  ): void;
  describeServiceEnvironments(
    args: DescribeServiceEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceJobCommand}
   */
  describeServiceJob(
    args: DescribeServiceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceJobCommandOutput>;
  describeServiceJob(
    args: DescribeServiceJobCommandInput,
    cb: (err: any, data?: DescribeServiceJobCommandOutput) => void
  ): void;
  describeServiceJob(
    args: DescribeServiceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceJobCommandOutput) => void
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
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
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
   * @see {@link ListQuotaSharesCommand}
   */
  listQuotaShares(
    args: ListQuotaSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuotaSharesCommandOutput>;
  listQuotaShares(
    args: ListQuotaSharesCommandInput,
    cb: (err: any, data?: ListQuotaSharesCommandOutput) => void
  ): void;
  listQuotaShares(
    args: ListQuotaSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuotaSharesCommandOutput) => void
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
   * @see {@link ListServiceJobsCommand}
   */
  listServiceJobs(): Promise<ListServiceJobsCommandOutput>;
  listServiceJobs(
    args: ListServiceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceJobsCommandOutput>;
  listServiceJobs(
    args: ListServiceJobsCommandInput,
    cb: (err: any, data?: ListServiceJobsCommandOutput) => void
  ): void;
  listServiceJobs(
    args: ListServiceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceJobsCommandOutput) => void
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
  submitJob(
    args: SubmitJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitJobCommandOutput>;
  submitJob(
    args: SubmitJobCommandInput,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;
  submitJob(
    args: SubmitJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitServiceJobCommand}
   */
  submitServiceJob(
    args: SubmitServiceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitServiceJobCommandOutput>;
  submitServiceJob(
    args: SubmitServiceJobCommandInput,
    cb: (err: any, data?: SubmitServiceJobCommandOutput) => void
  ): void;
  submitServiceJob(
    args: SubmitServiceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitServiceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateJobCommand}
   */
  terminateJob(
    args: TerminateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateJobCommandOutput>;
  terminateJob(
    args: TerminateJobCommandInput,
    cb: (err: any, data?: TerminateJobCommandOutput) => void
  ): void;
  terminateJob(
    args: TerminateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateServiceJobCommand}
   */
  terminateServiceJob(
    args: TerminateServiceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateServiceJobCommandOutput>;
  terminateServiceJob(
    args: TerminateServiceJobCommandInput,
    cb: (err: any, data?: TerminateServiceJobCommandOutput) => void
  ): void;
  terminateServiceJob(
    args: TerminateServiceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateServiceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
  updateJobQueue(
    args: UpdateJobQueueCommandInput,
    cb: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): void;
  updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuotaShareCommand}
   */
  updateQuotaShare(
    args: UpdateQuotaShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuotaShareCommandOutput>;
  updateQuotaShare(
    args: UpdateQuotaShareCommandInput,
    cb: (err: any, data?: UpdateQuotaShareCommandOutput) => void
  ): void;
  updateQuotaShare(
    args: UpdateQuotaShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuotaShareCommandOutput) => void
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

  /**
   * @see {@link UpdateServiceEnvironmentCommand}
   */
  updateServiceEnvironment(
    args: UpdateServiceEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceEnvironmentCommandOutput>;
  updateServiceEnvironment(
    args: UpdateServiceEnvironmentCommandInput,
    cb: (err: any, data?: UpdateServiceEnvironmentCommandOutput) => void
  ): void;
  updateServiceEnvironment(
    args: UpdateServiceEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceJobCommand}
   */
  updateServiceJob(
    args: UpdateServiceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceJobCommandOutput>;
  updateServiceJob(
    args: UpdateServiceJobCommandInput,
    cb: (err: any, data?: UpdateServiceJobCommandOutput) => void
  ): void;
  updateServiceJob(
    args: UpdateServiceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComputeEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeComputeEnvironmentsCommandOutput}.
   */
  paginateDescribeComputeEnvironments(
    args?: DescribeComputeEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeComputeEnvironmentsCommandOutput>;

  /**
   * @see {@link DescribeJobDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeJobDefinitionsCommandOutput}.
   */
  paginateDescribeJobDefinitions(
    args?: DescribeJobDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeJobDefinitionsCommandOutput>;

  /**
   * @see {@link DescribeJobQueuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeJobQueuesCommandOutput}.
   */
  paginateDescribeJobQueues(
    args?: DescribeJobQueuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeJobQueuesCommandOutput>;

  /**
   * @see {@link DescribeServiceEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeServiceEnvironmentsCommandOutput}.
   */
  paginateDescribeServiceEnvironments(
    args?: DescribeServiceEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeServiceEnvironmentsCommandOutput>;

  /**
   * @see {@link ListConsumableResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConsumableResourcesCommandOutput}.
   */
  paginateListConsumableResources(
    args?: ListConsumableResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConsumableResourcesCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args?: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListJobsByConsumableResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsByConsumableResourceCommandOutput}.
   */
  paginateListJobsByConsumableResource(
    args: ListJobsByConsumableResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsByConsumableResourceCommandOutput>;

  /**
   * @see {@link ListQuotaSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQuotaSharesCommandOutput}.
   */
  paginateListQuotaShares(
    args: ListQuotaSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQuotaSharesCommandOutput>;

  /**
   * @see {@link ListSchedulingPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchedulingPoliciesCommandOutput}.
   */
  paginateListSchedulingPolicies(
    args?: ListSchedulingPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchedulingPoliciesCommandOutput>;

  /**
   * @see {@link ListServiceJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceJobsCommandOutput}.
   */
  paginateListServiceJobs(
    args?: ListServiceJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceJobsCommandOutput>;
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
createAggregatedClient(commands, Batch, { paginators });
