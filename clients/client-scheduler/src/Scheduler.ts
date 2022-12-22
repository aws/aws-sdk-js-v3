// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SchedulerClient } from "./SchedulerClient";

/**
 * <p>
 *        Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service.
 *        EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets.
 *        The following reference lists the available API actions, and data types for EventBridge Scheduler.
 *      </p>
 */
export class Scheduler extends SchedulerClient {
  /**
   * <p>Creates the specified schedule.</p>
   */
  public createSchedule(
    args: CreateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduleCommandOutput>;
  public createSchedule(
    args: CreateScheduleCommandInput,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;
  public createSchedule(
    args: CreateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;
  public createSchedule(
    args: CreateScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScheduleCommandOutput) => void),
    cb?: (err: any, data?: CreateScheduleCommandOutput) => void
  ): Promise<CreateScheduleCommandOutput> | void {
    const command = new CreateScheduleCommand(args);
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
   * <p>Creates the specified schedule group.</p>
   */
  public createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduleGroupCommandOutput>;
  public createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    cb: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): void;
  public createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): void;
  public createScheduleGroup(
    args: CreateScheduleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScheduleGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateScheduleGroupCommandOutput) => void
  ): Promise<CreateScheduleGroupCommandOutput> | void {
    const command = new CreateScheduleGroupCommand(args);
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
   * <p>Deletes the specified schedule.</p>
   */
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleCommandOutput>;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): Promise<DeleteScheduleCommandOutput> | void {
    const command = new DeleteScheduleCommand(args);
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
   * <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group.
   *          When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted.
   *          Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets
   *          until the schedule group and its associated schedules are deleted.</p>
   *          <note>
   *             <p>
   *             This operation is eventually consistent.
   *          </p>
   *          </note>
   */
  public deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleGroupCommandOutput>;
  public deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    cb: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): void;
  public deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): void;
  public deleteScheduleGroup(
    args: DeleteScheduleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduleGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduleGroupCommandOutput) => void
  ): Promise<DeleteScheduleGroupCommandOutput> | void {
    const command = new DeleteScheduleGroupCommand(args);
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
   * <p>Retrieves the specified schedule.</p>
   */
  public getSchedule(args: GetScheduleCommandInput, options?: __HttpHandlerOptions): Promise<GetScheduleCommandOutput>;
  public getSchedule(args: GetScheduleCommandInput, cb: (err: any, data?: GetScheduleCommandOutput) => void): void;
  public getSchedule(
    args: GetScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduleCommandOutput) => void
  ): void;
  public getSchedule(
    args: GetScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetScheduleCommandOutput) => void),
    cb?: (err: any, data?: GetScheduleCommandOutput) => void
  ): Promise<GetScheduleCommandOutput> | void {
    const command = new GetScheduleCommand(args);
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
   * <p>Retrieves the specified schedule group.</p>
   */
  public getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScheduleGroupCommandOutput>;
  public getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    cb: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): void;
  public getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): void;
  public getScheduleGroup(
    args: GetScheduleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetScheduleGroupCommandOutput) => void),
    cb?: (err: any, data?: GetScheduleGroupCommandOutput) => void
  ): Promise<GetScheduleGroupCommandOutput> | void {
    const command = new GetScheduleGroupCommand(args);
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
   * <p>Returns a paginated list of your schedule groups.</p>
   */
  public listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduleGroupsCommandOutput>;
  public listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    cb: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): void;
  public listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): void;
  public listScheduleGroups(
    args: ListScheduleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListScheduleGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListScheduleGroupsCommandOutput) => void
  ): Promise<ListScheduleGroupsCommandOutput> | void {
    const command = new ListScheduleGroupsCommand(args);
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
   * <p>Returns a paginated list of your EventBridge Scheduler schedules.</p>
   */
  public listSchedules(
    args: ListSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchedulesCommandOutput>;
  public listSchedules(
    args: ListSchedulesCommandInput,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
  ): void;
  public listSchedules(
    args: ListSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
  ): void;
  public listSchedules(
    args: ListSchedulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchedulesCommandOutput) => void),
    cb?: (err: any, data?: ListSchedulesCommandOutput) => void
  ): Promise<ListSchedulesCommandOutput> | void {
    const command = new ListSchedulesCommand(args);
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
   * <p>Lists the tags associated with the Scheduler resource.</p>
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
   * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.</p>
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
   * <p>Removes one or more tags from the specified EventBridge Scheduler schedule group.</p>
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
   * <p>
   *          Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and
   *          overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to
   *          its system-default value after the update.
   *       </p>
   *          <p>
   *          Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters
   *          for your <code>UpdateSchedule</code> call.
   *       </p>
   */
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduleCommandOutput>;
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): Promise<UpdateScheduleCommandOutput> | void {
    const command = new UpdateScheduleCommand(args);
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
