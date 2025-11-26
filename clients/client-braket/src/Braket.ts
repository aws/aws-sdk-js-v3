// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  CreateSpendingLimitCommand,
  CreateSpendingLimitCommandInput,
  CreateSpendingLimitCommandOutput,
} from "./commands/CreateSpendingLimitCommand";
import {
  DeleteSpendingLimitCommand,
  DeleteSpendingLimitCommandInput,
  DeleteSpendingLimitCommandOutput,
} from "./commands/DeleteSpendingLimitCommand";
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
import {
  SearchSpendingLimitsCommand,
  SearchSpendingLimitsCommandInput,
  SearchSpendingLimitsCommandOutput,
} from "./commands/SearchSpendingLimitsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateSpendingLimitCommand,
  UpdateSpendingLimitCommandInput,
  UpdateSpendingLimitCommandOutput,
} from "./commands/UpdateSpendingLimitCommand";

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

export interface Braket {
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
   * @see {@link CancelQuantumTaskCommand}
   */
  cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelQuantumTaskCommandOutput>;
  cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    cb: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): void;
  cancelQuantumTask(
    args: CancelQuantumTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQuantumTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuantumTaskCommand}
   */
  createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuantumTaskCommandOutput>;
  createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    cb: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): void;
  createQuantumTask(
    args: CreateQuantumTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuantumTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpendingLimitCommand}
   */
  createSpendingLimit(
    args: CreateSpendingLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSpendingLimitCommandOutput>;
  createSpendingLimit(
    args: CreateSpendingLimitCommandInput,
    cb: (err: any, data?: CreateSpendingLimitCommandOutput) => void
  ): void;
  createSpendingLimit(
    args: CreateSpendingLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSpendingLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpendingLimitCommand}
   */
  deleteSpendingLimit(
    args: DeleteSpendingLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSpendingLimitCommandOutput>;
  deleteSpendingLimit(
    args: DeleteSpendingLimitCommandInput,
    cb: (err: any, data?: DeleteSpendingLimitCommandOutput) => void
  ): void;
  deleteSpendingLimit(
    args: DeleteSpendingLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpendingLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQuantumTaskCommand}
   */
  getQuantumTask(
    args: GetQuantumTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuantumTaskCommandOutput>;
  getQuantumTask(args: GetQuantumTaskCommandInput, cb: (err: any, data?: GetQuantumTaskCommandOutput) => void): void;
  getQuantumTask(
    args: GetQuantumTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuantumTaskCommandOutput) => void
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
   * @see {@link SearchDevicesCommand}
   */
  searchDevices(args: SearchDevicesCommandInput, options?: __HttpHandlerOptions): Promise<SearchDevicesCommandOutput>;
  searchDevices(args: SearchDevicesCommandInput, cb: (err: any, data?: SearchDevicesCommandOutput) => void): void;
  searchDevices(
    args: SearchDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchJobsCommand}
   */
  searchJobs(args: SearchJobsCommandInput, options?: __HttpHandlerOptions): Promise<SearchJobsCommandOutput>;
  searchJobs(args: SearchJobsCommandInput, cb: (err: any, data?: SearchJobsCommandOutput) => void): void;
  searchJobs(
    args: SearchJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQuantumTasksCommand}
   */
  searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchQuantumTasksCommandOutput>;
  searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    cb: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): void;
  searchQuantumTasks(
    args: SearchQuantumTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchQuantumTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSpendingLimitsCommand}
   */
  searchSpendingLimits(): Promise<SearchSpendingLimitsCommandOutput>;
  searchSpendingLimits(
    args: SearchSpendingLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSpendingLimitsCommandOutput>;
  searchSpendingLimits(
    args: SearchSpendingLimitsCommandInput,
    cb: (err: any, data?: SearchSpendingLimitsCommandOutput) => void
  ): void;
  searchSpendingLimits(
    args: SearchSpendingLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSpendingLimitsCommandOutput) => void
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
   * @see {@link UpdateSpendingLimitCommand}
   */
  updateSpendingLimit(
    args: UpdateSpendingLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSpendingLimitCommandOutput>;
  updateSpendingLimit(
    args: UpdateSpendingLimitCommandInput,
    cb: (err: any, data?: UpdateSpendingLimitCommandOutput) => void
  ): void;
  updateSpendingLimit(
    args: UpdateSpendingLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSpendingLimitCommandOutput) => void
  ): void;
}

/**
 * <p>The Amazon Braket API Reference provides information about the operations and structures supported by Amazon Braket.</p> <p>To learn about the permissions required to call an Amazon Braket API action, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html">Actions, resources, and condition keys for Amazon Braket</a>. <a href="https://amazon-braket-sdk-python.readthedocs.io/en/latest/#">Amazon Braket Python SDK</a> and the <a href="https://docs.aws.amazon.com/cli/latest/reference/braket/">AWS Command Line Interface</a> can be used to make discovery and creation of API calls easier. For more information about Amazon Braket features, see <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">What is Amazon Braket?</a> and important <a href="https://docs.aws.amazon.com/braket/latest/developerguide/braket-terms.html">terms and concepts</a> in the <i>Amazon Braket Developer Guide</i>.</p> <p> <b>In this guide:</b> </p> <ul> <li> <p/> </li> <li> <p/> </li> <li> <p> <a>CommonParameters</a> </p> </li> <li> <p> <a>CommonErrors</a> </p> </li> </ul> <p> <b>Available languages for AWS SDK:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/Braket/NBraket.html">.NET</a> </p> </li> <li> <p> <a href="https://sdk.amazonaws.com/cpp/api/LATEST/root/html/index.html">C++</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdk-for-go/api/service/braket/">Go API reference</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/braket/package-summary.html">Java</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Braket.html">JavaScript</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.Braket.BraketClient.html">PHP</a> </p> </li> <li> <p> <a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/braket.html">Python (Boto)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/Braket.html">Ruby</a> </p> </li> </ul> <p> <b>Code examples from the Amazon Braket Tutorials GitHub repository:</b> </p> <ul> <li> <p> <a href="https://github.com/amazon-braket/amazon-braket-examples">Amazon Braket Examples</a> </p> </li> </ul>
 * @public
 */
export class Braket extends BraketClient implements Braket {}
createAggregatedClient(commands, Braket);
