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
  GetPolicyCommand,
  GetPolicyCommandInput,
  GetPolicyCommandOutput
} from "./commands/GetPolicyCommand";
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
  PutPermissionCommand,
  PutPermissionCommandInput,
  PutPermissionCommandOutput
} from "./commands/PutPermissionCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput
} from "./commands/RemovePermissionCommand";
import {
  RetrieveTimeSeriesCommand,
  RetrieveTimeSeriesCommandInput,
  RetrieveTimeSeriesCommandOutput
} from "./commands/RetrieveTimeSeriesCommand";
import {
  UpdateProfilingGroupCommand,
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput
} from "./commands/UpdateProfilingGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This section provides documentation for the Amazon CodeGuru Profiler API operations.</p>
 */
export class CodeGuruProfiler extends CodeGuruProfilerClient {
  /**
   * <p/>
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
   * <p>Creates a profiling group.</p>
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
   * <p>Deletes a profiling group.</p>
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
   * <p>Describes a profiling group.</p>
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
   * <p>Lists profiling groups.</p>
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
   * <p>Updates a profiling group.</p>
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
   * <p>Gets the profiling group policy.</p>
   */
  public getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyCommandOutput>;
  public getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
   * <p>Provides permission to the principals. This overwrites the existing permissions, and
   *             is not additive.</p>
   */
  public putPermission(
    args: PutPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionCommandOutput>;
  public putPermission(
    args: PutPermissionCommandInput,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  public putPermission(
    args: PutPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  public putPermission(
    args: PutPermissionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutPermissionCommandOutput) => void),
    cb?: (err: any, data?: PutPermissionCommandOutput) => void
  ): Promise<PutPermissionCommandOutput> | void {
    const command = new PutPermissionCommand(args);
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
   * <p>Removes statement for the provided action group from the policy.</p>
   */
  public removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  public removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemovePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemovePermissionCommandOutput) => void
  ): Promise<RemovePermissionCommandOutput> | void {
    const command = new RemovePermissionCommand(args);
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
   * <p>Gets the aggregated profile of a profiling group for the specified time range.
   *         If the requested time range does not align with the available aggregated profiles, it is expanded to
   *         attain alignment. If aggregated profiles are available only for part of the period requested, the
   *         profile is returned from the earliest available to the latest within the requested time range.
   *       </p>
   *          <p>For example, if the requested time range is from 00:00 to 00:20 and the available profiles are
   *         from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20.
   *       </p>
   *          <p>You must specify exactly two of the following parameters:
   *         <code>startTime</code>, <code>period</code>, and <code>endTime</code>.
   *       </p>
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
   * <p>List the start times of the available aggregated profiles of a profiling group
   *         for an aggregation period within the specified time range.</p>
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
   * <p/>
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

  public retrieveTimeSeries(
    args: RetrieveTimeSeriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveTimeSeriesCommandOutput>;
  public retrieveTimeSeries(
    args: RetrieveTimeSeriesCommandInput,
    cb: (err: any, data?: RetrieveTimeSeriesCommandOutput) => void
  ): void;
  public retrieveTimeSeries(
    args: RetrieveTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveTimeSeriesCommandOutput) => void
  ): void;
  public retrieveTimeSeries(
    args: RetrieveTimeSeriesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RetrieveTimeSeriesCommandOutput) => void),
    cb?: (err: any, data?: RetrieveTimeSeriesCommandOutput) => void
  ): Promise<RetrieveTimeSeriesCommandOutput> | void {
    const command = new RetrieveTimeSeriesCommand(args);
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
