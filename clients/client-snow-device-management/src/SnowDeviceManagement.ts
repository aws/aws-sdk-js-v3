// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CancelTaskCommandInput,
  type CancelTaskCommandOutput,
  CancelTaskCommand,
} from "./commands/CancelTaskCommand";
import {
  type CreateTaskCommandInput,
  type CreateTaskCommandOutput,
  CreateTaskCommand,
} from "./commands/CreateTaskCommand";
import {
  type DescribeDeviceCommandInput,
  type DescribeDeviceCommandOutput,
  DescribeDeviceCommand,
} from "./commands/DescribeDeviceCommand";
import {
  type DescribeDeviceEc2InstancesCommandInput,
  type DescribeDeviceEc2InstancesCommandOutput,
  DescribeDeviceEc2InstancesCommand,
} from "./commands/DescribeDeviceEc2InstancesCommand";
import {
  type DescribeExecutionCommandInput,
  type DescribeExecutionCommandOutput,
  DescribeExecutionCommand,
} from "./commands/DescribeExecutionCommand";
import {
  type DescribeTaskCommandInput,
  type DescribeTaskCommandOutput,
  DescribeTaskCommand,
} from "./commands/DescribeTaskCommand";
import {
  type ListDeviceResourcesCommandInput,
  type ListDeviceResourcesCommandOutput,
  ListDeviceResourcesCommand,
} from "./commands/ListDeviceResourcesCommand";
import {
  type ListDevicesCommandInput,
  type ListDevicesCommandOutput,
  ListDevicesCommand,
} from "./commands/ListDevicesCommand";
import {
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListExecutionsCommand,
} from "./commands/ListExecutionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type ListTasksCommandInput, type ListTasksCommandOutput, ListTasksCommand } from "./commands/ListTasksCommand";
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
import { paginateListDeviceResources } from "./pagination/ListDeviceResourcesPaginator";
import { paginateListDevices } from "./pagination/ListDevicesPaginator";
import { paginateListExecutions } from "./pagination/ListExecutionsPaginator";
import { paginateListTasks } from "./pagination/ListTasksPaginator";
import { SnowDeviceManagementClient } from "./SnowDeviceManagementClient";

const commands = {
  CancelTaskCommand,
  CreateTaskCommand,
  DescribeDeviceCommand,
  DescribeDeviceEc2InstancesCommand,
  DescribeExecutionCommand,
  DescribeTaskCommand,
  ListDeviceResourcesCommand,
  ListDevicesCommand,
  ListExecutionsCommand,
  ListTagsForResourceCommand,
  ListTasksCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListDeviceResources,
  paginateListDevices,
  paginateListExecutions,
  paginateListTasks,
};

export interface SnowDeviceManagement {
  /**
   * @see {@link CancelTaskCommand}
   */
  cancelTask(
    args: CancelTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTaskCommandOutput>;
  cancelTask(
    args: CancelTaskCommandInput,
    cb: (err: any, data?: CancelTaskCommandOutput) => void
  ): void;
  cancelTask(
    args: CancelTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTaskCommand}
   */
  createTask(
    args: CreateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTaskCommandOutput>;
  createTask(
    args: CreateTaskCommandInput,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;
  createTask(
    args: CreateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceCommand}
   */
  describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  describeDevice(
    args: DescribeDeviceCommandInput,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceEc2InstancesCommand}
   */
  describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceEc2InstancesCommandOutput>;
  describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    cb: (err: any, data?: DescribeDeviceEc2InstancesCommandOutput) => void
  ): void;
  describeDeviceEc2Instances(
    args: DescribeDeviceEc2InstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceEc2InstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTaskCommand}
   */
  describeTask(
    args: DescribeTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskCommandOutput>;
  describeTask(
    args: DescribeTaskCommandInput,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;
  describeTask(
    args: DescribeTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceResourcesCommand}
   */
  listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceResourcesCommandOutput>;
  listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    cb: (err: any, data?: ListDeviceResourcesCommandOutput) => void
  ): void;
  listDeviceResources(
    args: ListDeviceResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
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
   * @see {@link ListTasksCommand}
   */
  listTasks(): Promise<ListTasksCommandOutput>;
  listTasks(
    args: ListTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTasksCommandOutput>;
  listTasks(
    args: ListTasksCommandInput,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
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
   * @see {@link ListDeviceResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeviceResourcesCommandOutput}.
   */
  paginateListDeviceResources(
    args: ListDeviceResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeviceResourcesCommandOutput>;

  /**
   * @see {@link ListDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevicesCommandOutput}.
   */
  paginateListDevices(
    args?: ListDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevicesCommandOutput>;

  /**
   * @see {@link ListExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExecutionsCommandOutput}.
   */
  paginateListExecutions(
    args: ListExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExecutionsCommandOutput>;

  /**
   * @see {@link ListTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTasksCommandOutput}.
   */
  paginateListTasks(
    args?: ListTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTasksCommandOutput>;
}

/**
 * <p>Amazon Web Services Snow Device Management documentation.</p>
 * @public
 */
export class SnowDeviceManagement extends SnowDeviceManagementClient implements SnowDeviceManagement {}
createAggregatedClient(commands, SnowDeviceManagement, { paginators });
