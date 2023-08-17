// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BraketClient, BraketClientConfig } from "./BraketClient";
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
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

const commands = {
  CancelJobCommand,
  CancelQuantumTaskCommand,
  CreateJobCommand,
  CreateQuantumTaskCommand,
  GetDeviceCommand,
  GetJobCommand,
  GetQuantumTaskCommand,
  ListTagsForResourceCommand,
  SearchDevicesCommand,
  SearchJobsCommand,
  SearchQuantumTasksCommand,
  TagResourceCommand,
  UntagResourceCommand,
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
}

/**
 * @public
 * <p>The Amazon Braket API Reference provides information about the operations and structures
 *          supported in Amazon Braket.</p>
 *          <p>Additional Resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class Braket extends BraketClient implements Braket {}
createAggregatedClient(commands, Braket);
