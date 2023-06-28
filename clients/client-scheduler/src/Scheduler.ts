// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateScheduleCommand,
  CreateScheduleCommandInput,
  CreateScheduleCommandOutput,
} from "./commands/CreateScheduleCommand";
import {
  CreateScheduleGroupCommand,
  CreateScheduleGroupCommandInput,
  CreateScheduleGroupCommandOutput,
} from "./commands/CreateScheduleGroupCommand";
import {
  DeleteScheduleCommand,
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput,
} from "./commands/DeleteScheduleCommand";
import {
  DeleteScheduleGroupCommand,
  DeleteScheduleGroupCommandInput,
  DeleteScheduleGroupCommandOutput,
} from "./commands/DeleteScheduleGroupCommand";
import { GetScheduleCommand, GetScheduleCommandInput, GetScheduleCommandOutput } from "./commands/GetScheduleCommand";
import {
  GetScheduleGroupCommand,
  GetScheduleGroupCommandInput,
  GetScheduleGroupCommandOutput,
} from "./commands/GetScheduleGroupCommand";
import {
  ListScheduleGroupsCommand,
  ListScheduleGroupsCommandInput,
  ListScheduleGroupsCommandOutput,
} from "./commands/ListScheduleGroupsCommand";
import {
  ListSchedulesCommand,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput,
} from "./commands/ListSchedulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateScheduleCommand,
  UpdateScheduleCommandInput,
  UpdateScheduleCommandOutput,
} from "./commands/UpdateScheduleCommand";
import { SchedulerClient, SchedulerClientConfig } from "./SchedulerClient";

const commands = {
  CreateScheduleCommand,
  CreateScheduleGroupCommand,
  DeleteScheduleCommand,
  DeleteScheduleGroupCommand,
  GetScheduleCommand,
  GetScheduleGroupCommand,
  ListScheduleGroupsCommand,
  ListSchedulesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateScheduleCommand,
};

export interface Scheduler {
  /**
   * @see {@link CreateScheduleCommand}
   */
  createSchedule(
    args: CreateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduleCommandOutput>;
  createSchedule(args: CreateScheduleCommandInput, cb: (err: any, data?: CreateScheduleCommandOutput) => void): void;
  createSchedule(
    args: CreateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduleGroupCommand}
   */
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduleGroupCommandOutput>;
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    cb: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): void;
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleCommand}
   */
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleCommandOutput>;
  deleteSchedule(args: DeleteScheduleCommandInput, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleGroupCommand}
   */
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleGroupCommandOutput>;
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    cb: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): void;
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduleCommand}
   */
  getSchedule(args: GetScheduleCommandInput, options?: __HttpHandlerOptions): Promise<GetScheduleCommandOutput>;
  getSchedule(args: GetScheduleCommandInput, cb: (err: any, data?: GetScheduleCommandOutput) => void): void;
  getSchedule(
    args: GetScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduleGroupCommand}
   */
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduleGroupCommandOutput>;
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    cb: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): void;
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduleGroupsCommand}
   */
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduleGroupsCommandOutput>;
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    cb: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): void;
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchedulesCommand}
   */
  listSchedules(args: ListSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<ListSchedulesCommandOutput>;
  listSchedules(args: ListSchedulesCommandInput, cb: (err: any, data?: ListSchedulesCommandOutput) => void): void;
  listSchedules(
    args: ListSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
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
   * @see {@link UpdateScheduleCommand}
   */
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduleCommandOutput>;
  updateSchedule(args: UpdateScheduleCommandInput, cb: (err: any, data?: UpdateScheduleCommandOutput) => void): void;
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>
 *        Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service.
 *        EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets.
 *        The following reference lists the available API actions, and data types for EventBridge Scheduler.
 *      </p>
 */
export class Scheduler extends SchedulerClient implements Scheduler {}
createAggregatedClient(commands, Scheduler);
