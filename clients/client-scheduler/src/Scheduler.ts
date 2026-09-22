// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateScheduleCommandInput,
  type CreateScheduleCommandOutput,
  CreateScheduleCommand,
} from "./commands/CreateScheduleCommand";
import {
  type CreateScheduleGroupCommandInput,
  type CreateScheduleGroupCommandOutput,
  CreateScheduleGroupCommand,
} from "./commands/CreateScheduleGroupCommand";
import {
  type DeleteScheduleCommandInput,
  type DeleteScheduleCommandOutput,
  DeleteScheduleCommand,
} from "./commands/DeleteScheduleCommand";
import {
  type DeleteScheduleGroupCommandInput,
  type DeleteScheduleGroupCommandOutput,
  DeleteScheduleGroupCommand,
} from "./commands/DeleteScheduleGroupCommand";
import {
  type GetScheduleCommandInput,
  type GetScheduleCommandOutput,
  GetScheduleCommand,
} from "./commands/GetScheduleCommand";
import {
  type GetScheduleGroupCommandInput,
  type GetScheduleGroupCommandOutput,
  GetScheduleGroupCommand,
} from "./commands/GetScheduleGroupCommand";
import {
  type ListScheduleGroupsCommandInput,
  type ListScheduleGroupsCommandOutput,
  ListScheduleGroupsCommand,
} from "./commands/ListScheduleGroupsCommand";
import {
  type ListSchedulesCommandInput,
  type ListSchedulesCommandOutput,
  ListSchedulesCommand,
} from "./commands/ListSchedulesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
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
  type UpdateScheduleCommandInput,
  type UpdateScheduleCommandOutput,
  UpdateScheduleCommand,
} from "./commands/UpdateScheduleCommand";
import { paginateListScheduleGroups } from "./pagination/ListScheduleGroupsPaginator";
import { paginateListSchedules } from "./pagination/ListSchedulesPaginator";
import { SchedulerClient } from "./SchedulerClient";

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
const paginators = {
  paginateListScheduleGroups,
  paginateListSchedules,
};

/**
 * @public
 */
export interface SchedulerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Scheduler {
  /**
   * @see {@link CreateScheduleCommand}
   */
  createSchedule(
    args: CreateScheduleCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<CreateScheduleCommandOutput>;
  createSchedule(
    args: CreateScheduleCommandInput,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;
  createSchedule(
    args: CreateScheduleCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduleGroupCommand}
   */
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<CreateScheduleGroupCommandOutput>;
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    cb: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): void;
  createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleCommand}
   */
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<DeleteScheduleCommandOutput>;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleGroupCommand}
   */
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<DeleteScheduleGroupCommandOutput>;
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    cb: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): void;
  deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduleCommand}
   */
  getSchedule(
    args: GetScheduleCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<GetScheduleCommandOutput>;
  getSchedule(
    args: GetScheduleCommandInput,
    cb: (err: any, data?: GetScheduleCommandOutput) => void
  ): void;
  getSchedule(
    args: GetScheduleCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: GetScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScheduleGroupCommand}
   */
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<GetScheduleGroupCommandOutput>;
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    cb: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): void;
  getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduleGroupsCommand}
   */
  listScheduleGroups(): Promise<ListScheduleGroupsCommandOutput>;
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<ListScheduleGroupsCommandOutput>;
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    cb: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): void;
  listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchedulesCommand}
   */
  listSchedules(): Promise<ListSchedulesCommandOutput>;
  listSchedules(
    args: ListSchedulesCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<ListSchedulesCommandOutput>;
  listSchedules(
    args: ListSchedulesCommandInput,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
  ): void;
  listSchedules(
    args: ListSchedulesCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduleCommand}
   */
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options?: SchedulerRequestOptions
  ): Promise<UpdateScheduleCommandOutput>;
  updateSchedule(
    args: UpdateScheduleCommandInput,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options: SchedulerRequestOptions,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduleGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScheduleGroupsCommandOutput}.
   */
  paginateListScheduleGroups(
    args?: ListScheduleGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScheduleGroupsCommandOutput>;

  /**
   * @see {@link ListSchedulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchedulesCommandOutput}.
   */
  paginateListSchedules(
    args?: ListSchedulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchedulesCommandOutput>;
}

/**
 * <p>
 *        Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service.
 *        EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets.
 *        The following reference lists the available API actions, and data types for EventBridge Scheduler.
 *      </p>
 * @public
 */
export class Scheduler extends SchedulerClient implements Scheduler {}
createAggregatedClient(commands, Scheduler, { paginators });
