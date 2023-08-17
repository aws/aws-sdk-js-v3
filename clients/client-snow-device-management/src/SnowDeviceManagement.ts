// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CancelTaskCommand, CancelTaskCommandInput, CancelTaskCommandOutput } from "./commands/CancelTaskCommand";
import { CreateTaskCommand, CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import {
  DescribeDeviceCommand,
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
} from "./commands/DescribeDeviceCommand";
import {
  DescribeDeviceEc2InstancesCommand,
  DescribeDeviceEc2InstancesCommandInput,
  DescribeDeviceEc2InstancesCommandOutput,
} from "./commands/DescribeDeviceEc2InstancesCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeTaskCommand,
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput,
} from "./commands/DescribeTaskCommand";
import {
  ListDeviceResourcesCommand,
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput,
} from "./commands/ListDeviceResourcesCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { SnowDeviceManagementClient, SnowDeviceManagementClientConfig } from "./SnowDeviceManagementClient";

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

export interface SnowDeviceManagement {
  /**
   * @see {@link CancelTaskCommand}
   */
  cancelTask(args: CancelTaskCommandInput, options?: __HttpHandlerOptions): Promise<CancelTaskCommandOutput>;
  cancelTask(args: CancelTaskCommandInput, cb: (err: any, data?: CancelTaskCommandOutput) => void): void;
  cancelTask(
    args: CancelTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTaskCommand}
   */
  createTask(args: CreateTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateTaskCommandOutput>;
  createTask(args: CreateTaskCommandInput, cb: (err: any, data?: CreateTaskCommandOutput) => void): void;
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
  describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
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
  describeTask(args: DescribeTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTaskCommandOutput>;
  describeTask(args: DescribeTaskCommandInput, cb: (err: any, data?: DescribeTaskCommandOutput) => void): void;
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
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
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
  listExecutions(args: ListExecutionsCommandInput, cb: (err: any, data?: ListExecutionsCommandOutput) => void): void;
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
  listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
  listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
  listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
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
 * <p>Amazon Web Services Snow Device Management documentation.</p>
 */
export class SnowDeviceManagement extends SnowDeviceManagementClient implements SnowDeviceManagement {}
createAggregatedClient(commands, SnowDeviceManagement);
