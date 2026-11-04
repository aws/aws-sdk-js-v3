// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { BraketClient } from "./BraketClient";
import { type CancelJobCommandInput, type CancelJobCommandOutput, CancelJobCommand } from "./commands/CancelJobCommand";
import {
  type CancelQuantumTaskCommandInput,
  type CancelQuantumTaskCommandOutput,
  CancelQuantumTaskCommand,
} from "./commands/CancelQuantumTaskCommand";
import { type CreateJobCommandInput, type CreateJobCommandOutput, CreateJobCommand } from "./commands/CreateJobCommand";
import {
  type CreateQuantumTaskCommandInput,
  type CreateQuantumTaskCommandOutput,
  CreateQuantumTaskCommand,
} from "./commands/CreateQuantumTaskCommand";
import {
  type CreateSpendingLimitCommandInput,
  type CreateSpendingLimitCommandOutput,
  CreateSpendingLimitCommand,
} from "./commands/CreateSpendingLimitCommand";
import {
  type DeleteSpendingLimitCommandInput,
  type DeleteSpendingLimitCommandOutput,
  DeleteSpendingLimitCommand,
} from "./commands/DeleteSpendingLimitCommand";
import { type GetDeviceCommandInput, type GetDeviceCommandOutput, GetDeviceCommand } from "./commands/GetDeviceCommand";
import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "./commands/GetJobCommand";
import {
  type GetQuantumTaskCommandInput,
  type GetQuantumTaskCommandOutput,
  GetQuantumTaskCommand,
} from "./commands/GetQuantumTaskCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SearchDevicesCommandInput,
  type SearchDevicesCommandOutput,
  SearchDevicesCommand,
} from "./commands/SearchDevicesCommand";
import {
  type SearchJobsCommandInput,
  type SearchJobsCommandOutput,
  SearchJobsCommand,
} from "./commands/SearchJobsCommand";
import {
  type SearchQuantumTasksCommandInput,
  type SearchQuantumTasksCommandOutput,
  SearchQuantumTasksCommand,
} from "./commands/SearchQuantumTasksCommand";
import {
  type SearchSpendingLimitsCommandInput,
  type SearchSpendingLimitsCommandOutput,
  SearchSpendingLimitsCommand,
} from "./commands/SearchSpendingLimitsCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateSpendingLimitCommandInput,
  type UpdateSpendingLimitCommandOutput,
  UpdateSpendingLimitCommand,
} from "./commands/UpdateSpendingLimitCommand";
import { paginateSearchDevices } from "./pagination/SearchDevicesPaginator";
import { paginateSearchJobs } from "./pagination/SearchJobsPaginator";
import { paginateSearchQuantumTasks } from "./pagination/SearchQuantumTasksPaginator";
import { paginateSearchSpendingLimits } from "./pagination/SearchSpendingLimitsPaginator";

const commands = {
  CancelJobCommand,
  CancelQuantumTaskCommand,
  CreateJobCommand,
  CreateQuantumTaskCommand,
  CreateSpendingLimitCommand,
  DeleteSpendingLimitCommand,
  GetDeviceCommand,
  GetJobCommand,
  GetQuantumTaskCommand,
  ListTagsForResourceCommand,
  SearchDevicesCommand,
  SearchJobsCommand,
  SearchQuantumTasksCommand,
  SearchSpendingLimitsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateSpendingLimitCommand,
};
const paginators = {
  paginateSearchDevices,
  paginateSearchJobs,
  paginateSearchQuantumTasks,
  paginateSearchSpendingLimits,
};

/**
 * @public
 */
export interface BraketRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Braket {
  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(
    args: CancelJobCommandInput,
    options?: BraketRequestOptions
  ): Promise<CancelJobCommandOutput>;
  cancelJob(
    args: CancelJobCommandInput,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelQuantumTaskCommand}
   */
  cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    options?: BraketRequestOptions
  ): Promise<CancelQuantumTaskCommandOutput>;
  cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    cb: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): void;
  cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: BraketRequestOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuantumTaskCommand}
   */
  createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    options?: BraketRequestOptions
  ): Promise<CreateQuantumTaskCommandOutput>;
  createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    cb: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): void;
  createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpendingLimitCommand}
   */
  createSpendingLimit(
    args: CreateSpendingLimitCommandInput,
    options?: BraketRequestOptions
  ): Promise<CreateSpendingLimitCommandOutput>;
  createSpendingLimit(
    args: CreateSpendingLimitCommandInput,
    cb: (err: any, data?: CreateSpendingLimitCommandOutput) => void
  ): void;
  createSpendingLimit(
    args: CreateSpendingLimitCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: CreateSpendingLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpendingLimitCommand}
   */
  deleteSpendingLimit(
    args: DeleteSpendingLimitCommandInput,
    options?: BraketRequestOptions
  ): Promise<DeleteSpendingLimitCommandOutput>;
  deleteSpendingLimit(
    args: DeleteSpendingLimitCommandInput,
    cb: (err: any, data?: DeleteSpendingLimitCommandOutput) => void
  ): void;
  deleteSpendingLimit(
    args: DeleteSpendingLimitCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: DeleteSpendingLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(
    args: GetDeviceCommandInput,
    options?: BraketRequestOptions
  ): Promise<GetDeviceCommandOutput>;
  getDevice(
    args: GetDeviceCommandInput,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: BraketRequestOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQuantumTaskCommand}
   */
  getQuantumTask(
    args: GetQuantumTaskCommandInput,
    options?: BraketRequestOptions
  ): Promise<GetQuantumTaskCommandOutput>;
  getQuantumTask(
    args: GetQuantumTaskCommandInput,
    cb: (err: any, data?: GetQuantumTaskCommandOutput) => void
  ): void;
  getQuantumTask(
    args: GetQuantumTaskCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: GetQuantumTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: BraketRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDevicesCommand}
   */
  searchDevices(
    args: SearchDevicesCommandInput,
    options?: BraketRequestOptions
  ): Promise<SearchDevicesCommandOutput>;
  searchDevices(
    args: SearchDevicesCommandInput,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;
  searchDevices(
    args: SearchDevicesCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchJobsCommand}
   */
  searchJobs(
    args: SearchJobsCommandInput,
    options?: BraketRequestOptions
  ): Promise<SearchJobsCommandOutput>;
  searchJobs(
    args: SearchJobsCommandInput,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;
  searchJobs(
    args: SearchJobsCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQuantumTasksCommand}
   */
  searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    options?: BraketRequestOptions
  ): Promise<SearchQuantumTasksCommandOutput>;
  searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    cb: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): void;
  searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSpendingLimitsCommand}
   */
  searchSpendingLimits(): Promise<SearchSpendingLimitsCommandOutput>;
  searchSpendingLimits(
    args: SearchSpendingLimitsCommandInput,
    options?: BraketRequestOptions
  ): Promise<SearchSpendingLimitsCommandOutput>;
  searchSpendingLimits(
    args: SearchSpendingLimitsCommandInput,
    cb: (err: any, data?: SearchSpendingLimitsCommandOutput) => void
  ): void;
  searchSpendingLimits(
    args: SearchSpendingLimitsCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: SearchSpendingLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: BraketRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: BraketRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpendingLimitCommand}
   */
  updateSpendingLimit(
    args: UpdateSpendingLimitCommandInput,
    options?: BraketRequestOptions
  ): Promise<UpdateSpendingLimitCommandOutput>;
  updateSpendingLimit(
    args: UpdateSpendingLimitCommandInput,
    cb: (err: any, data?: UpdateSpendingLimitCommandOutput) => void
  ): void;
  updateSpendingLimit(
    args: UpdateSpendingLimitCommandInput,
    options: BraketRequestOptions,
    cb: (err: any, data?: UpdateSpendingLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchDevicesCommandOutput}.
   */
  paginateSearchDevices(
    args: SearchDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchDevicesCommandOutput>;

  /**
   * @see {@link SearchJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchJobsCommandOutput}.
   */
  paginateSearchJobs(
    args: SearchJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchJobsCommandOutput>;

  /**
   * @see {@link SearchQuantumTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchQuantumTasksCommandOutput}.
   */
  paginateSearchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchQuantumTasksCommandOutput>;

  /**
   * @see {@link SearchSpendingLimitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchSpendingLimitsCommandOutput}.
   */
  paginateSearchSpendingLimits(
    args?: SearchSpendingLimitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchSpendingLimitsCommandOutput>;
}

/**
 * The Amazon Braket API Reference provides information about the operations and structures supported by Amazon Braket.
 *
 * To learn about the permissions required to call an Amazon Braket API action, see [Actions, resources, and condition keys for Amazon Braket](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html). [Amazon Braket Python SDK](https://amazon-braket-sdk-python.readthedocs.io/en/latest/#) and the [AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/reference/braket/) can be used to make discovery and creation of API calls easier. For more information about Amazon Braket features, see [What is Amazon Braket?](https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html) and important [terms and concepts](https://docs.aws.amazon.com/braket/latest/developerguide/braket-terms.html) in the *Amazon Braket Developer Guide*.
 *
 * **In this guide:**
 *
 * - CommonParameters
 * - CommonErrors
 *
 * **Available languages for AWS SDK:**
 *
 * - [.NET](https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/Braket/NBraket.html)
 * - [C++](https://sdk.amazonaws.com/cpp/api/LATEST/root/html/index.html)
 * - [Go API reference](https://docs.aws.amazon.com/sdk-for-go/api/service/braket/)
 * - [Java](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/braket/package-summary.html)
 * - [JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Braket.html)
 * - [PHP](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.Braket.BraketClient.html)
 * - [Python (Boto)](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/braket.html)
 * - [Ruby](https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/Braket.html)
 *
 * **Code examples from the Amazon Braket Tutorials GitHub repository:**
 *
 * - [Amazon Braket Examples](https://github.com/amazon-braket/amazon-braket-examples)
 *
 * @public
 */
export class Braket extends BraketClient implements Braket {}
createAggregatedClient(commands, Braket, { paginators });
