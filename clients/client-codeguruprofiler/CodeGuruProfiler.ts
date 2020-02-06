import { CodeGuruProfilerClient } from "./CodeGuruProfilerClient";
import {
  ConfigureAgentCommand,
  ConfigureAgentCommandInput,
  ConfigureAgentCommandOutput
} from "./commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommand,
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput
} from "./commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommand,
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput
} from "./commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommand,
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput
} from "./commands/DescribeProfilingGroupCommand";
import {
  GetProfileCommand,
  GetProfileCommandInput,
  GetProfileCommandOutput
} from "./commands/GetProfileCommand";
import {
  ListProfileTimesCommand,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput
} from "./commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommand,
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput
} from "./commands/ListProfilingGroupsCommand";
import {
  PostAgentProfileCommand,
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput
} from "./commands/PostAgentProfileCommand";
import {
  UpdateProfilingGroupCommand,
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput
} from "./commands/UpdateProfilingGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Example service documentation.</p>
 */
export class CodeGuruProfiler extends CodeGuruProfilerClient {
  /**
   * Provides the configuration to use for an agent of the profiling group.
   */
  public configureAgent(
    args: ConfigureAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureAgentCommandOutput>;
  public configureAgent(
    args: ConfigureAgentCommandInput,
    cb: (err: any, data?: ConfigureAgentCommandOutput) => void
  ): void;
  public configureAgent(
    args: ConfigureAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureAgentCommandOutput) => void
  ): void;
  public configureAgent(
    args: ConfigureAgentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ConfigureAgentCommandOutput) => void),
    cb?: (err: any, data?: ConfigureAgentCommandOutput) => void
  ): Promise<ConfigureAgentCommandOutput> | void {
    const command = new ConfigureAgentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Create a profiling group.
   */
  public createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfilingGroupCommandOutput>;
  public createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void
  ): void;
  public createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void
  ): void;
  public createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateProfilingGroupCommandOutput) => void
  ): Promise<CreateProfilingGroupCommandOutput> | void {
    const command = new CreateProfilingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Delete a profiling group.
   */
  public deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfilingGroupCommandOutput>;
  public deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void
  ): void;
  public deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void
  ): void;
  public deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfilingGroupCommandOutput) => void
  ): Promise<DeleteProfilingGroupCommandOutput> | void {
    const command = new DeleteProfilingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Describe a profiling group.
   */
  public describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProfilingGroupCommandOutput>;
  public describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void
  ): void;
  public describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void
  ): void;
  public describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeProfilingGroupCommandOutput) => void
  ): Promise<DescribeProfilingGroupCommandOutput> | void {
    const command = new DescribeProfilingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List profiling groups in the account.
   */
  public listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilingGroupsCommandOutput>;
  public listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void
  ): void;
  public listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void
  ): void;
  public listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProfilingGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListProfilingGroupsCommandOutput) => void
  ): Promise<ListProfilingGroupsCommandOutput> | void {
    const command = new ListProfilingGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Update a profiling group.
   */
  public updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfilingGroupCommandOutput>;
  public updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void
  ): void;
  public updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void
  ): void;
  public updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateProfilingGroupCommandOutput) => void
  ): Promise<UpdateProfilingGroupCommandOutput> | void {
    const command = new UpdateProfilingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Get the aggregated profile of a profiling group for the specified time range.
   *   If the requested time range does not align with the available aggregated profiles, it will be expanded to attain alignment.
   *   If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range.
   *   For instance, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, then the returned profile will be from 00:15 to 00:20.
   */
  public getProfile(
    args: GetProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileCommandOutput>;
  public getProfile(
    args: GetProfileCommandInput,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  public getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  public getProfile(
    args: GetProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetProfileCommandOutput) => void),
    cb?: (err: any, data?: GetProfileCommandOutput) => void
  ): Promise<GetProfileCommandOutput> | void {
    const command = new GetProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
   */
  public listProfileTimes(
    args: ListProfileTimesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileTimesCommandOutput>;
  public listProfileTimes(
    args: ListProfileTimesCommandInput,
    cb: (err: any, data?: ListProfileTimesCommandOutput) => void
  ): void;
  public listProfileTimes(
    args: ListProfileTimesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileTimesCommandOutput) => void
  ): void;
  public listProfileTimes(
    args: ListProfileTimesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProfileTimesCommandOutput) => void),
    cb?: (err: any, data?: ListProfileTimesCommandOutput) => void
  ): Promise<ListProfileTimesCommandOutput> | void {
    const command = new ListProfileTimesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Submit profile collected by an agent belonging to a profiling group for aggregation.
   */
  public postAgentProfile(
    args: PostAgentProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostAgentProfileCommandOutput>;
  public postAgentProfile(
    args: PostAgentProfileCommandInput,
    cb: (err: any, data?: PostAgentProfileCommandOutput) => void
  ): void;
  public postAgentProfile(
    args: PostAgentProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostAgentProfileCommandOutput) => void
  ): void;
  public postAgentProfile(
    args: PostAgentProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PostAgentProfileCommandOutput) => void),
    cb?: (err: any, data?: PostAgentProfileCommandOutput) => void
  ): Promise<PostAgentProfileCommandOutput> | void {
    const command = new PostAgentProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
