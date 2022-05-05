// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeGuruProfilerClient } from "./CodeGuruProfilerClient";
import {
  AddNotificationChannelsCommand,
  AddNotificationChannelsCommandInput,
  AddNotificationChannelsCommandOutput,
} from "./commands/AddNotificationChannelsCommand";
import {
  BatchGetFrameMetricDataCommand,
  BatchGetFrameMetricDataCommandInput,
  BatchGetFrameMetricDataCommandOutput,
} from "./commands/BatchGetFrameMetricDataCommand";
import {
  ConfigureAgentCommand,
  ConfigureAgentCommandInput,
  ConfigureAgentCommandOutput,
} from "./commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommand,
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput,
} from "./commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommand,
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput,
} from "./commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommand,
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput,
} from "./commands/DescribeProfilingGroupCommand";
import {
  GetFindingsReportAccountSummaryCommand,
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "./commands/GetFindingsReportAccountSummaryCommand";
import {
  GetNotificationConfigurationCommand,
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import {
  GetRecommendationsCommand,
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
} from "./commands/GetRecommendationsCommand";
import {
  ListFindingsReportsCommand,
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
} from "./commands/ListFindingsReportsCommand";
import {
  ListProfileTimesCommand,
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput,
} from "./commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommand,
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "./commands/ListProfilingGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PostAgentProfileCommand,
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput,
} from "./commands/PostAgentProfileCommand";
import {
  PutPermissionCommand,
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
} from "./commands/PutPermissionCommand";
import {
  RemoveNotificationChannelCommand,
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "./commands/RemoveNotificationChannelCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  SubmitFeedbackCommand,
  SubmitFeedbackCommandInput,
  SubmitFeedbackCommandOutput,
} from "./commands/SubmitFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateProfilingGroupCommand,
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
} from "./commands/UpdateProfilingGroupCommand";

/**
 * <p>
 *           This section provides documentation for the Amazon CodeGuru Profiler API operations.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides
 *          recommendations that can help you fine-tune your application performance. Using machine learning
 *          algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can
 *          improve efficiency and remove CPU bottlenecks.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is
 *          running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization.
 *       </p>
 *          <note>
 *             <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM)
 *             languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications
 *             written in Java, it can also generate visualizations and a subset of recommendations for
 *             applications written in other JVM languages and Python.</p>
 *          </note>
 *          <p>
 *          For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in
 *          the <i>Amazon CodeGuru Profiler User Guide</i>.
 *       </p>
 */
export class CodeGuruProfiler extends CodeGuruProfilerClient {
  /**
   * <p>Add up to 2 anomaly notifications channels for a profiling group.</p>
   */
  public addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddNotificationChannelsCommandOutput>;
  public addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    cb: (err: any, data?: AddNotificationChannelsCommandOutput) => void
  ): void;
  public addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddNotificationChannelsCommandOutput) => void
  ): void;
  public addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddNotificationChannelsCommandOutput) => void),
    cb?: (err: any, data?: AddNotificationChannelsCommandOutput) => void
  ): Promise<AddNotificationChannelsCommandOutput> | void {
    const command = new AddNotificationChannelsCommand(args);
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
   *          Returns the time series of values for a requested list
   *          of frame metrics from a time period.</p>
   */
  public batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFrameMetricDataCommandOutput>;
  public batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    cb: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void
  ): void;
  public batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void
  ): void;
  public batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetFrameMetricDataCommandOutput) => void),
    cb?: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void
  ): Promise<BatchGetFrameMetricDataCommandOutput> | void {
    const command = new BatchGetFrameMetricDataCommand(args);
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
   *           Used by profiler agents to report their current state and to receive remote
   *           configuration updates. For example, <code>ConfigureAgent</code> can be used
   *          to tell an agent whether to profile or not and for how long to return profiling data.
   *       </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfigureAgentCommandOutput) => void),
    cb?: (err: any, data?: ConfigureAgentCommandOutput) => void
  ): Promise<ConfigureAgentCommandOutput> | void {
    const command = new ConfigureAgentCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateProfilingGroupCommandOutput) => void
  ): Promise<CreateProfilingGroupCommandOutput> | void {
    const command = new CreateProfilingGroupCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfilingGroupCommandOutput) => void
  ): Promise<DeleteProfilingGroupCommandOutput> | void {
    const command = new DeleteProfilingGroupCommand(args);
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
   *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a>
   *          object that contains information about the requested profiling group.
   *       </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeProfilingGroupCommandOutput) => void
  ): Promise<DescribeProfilingGroupCommandOutput> | void {
    const command = new DescribeProfilingGroupCommand(args);
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
   *             Returns a list of
   *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
   *                <code>FindingsReportSummary</code>
   *             </a>
   *             objects that contain analysis results for all profiling groups in your AWS account.
   *         </p>
   */
  public getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsReportAccountSummaryCommandOutput>;
  public getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    cb: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void
  ): void;
  public getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void
  ): void;
  public getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void
  ): Promise<GetFindingsReportAccountSummaryCommandOutput> | void {
    const command = new GetFindingsReportAccountSummaryCommand(args);
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
   * <p>Get the current configuration for anomaly notifications for a profiling group.</p>
   */
  public getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationConfigurationCommandOutput>;
  public getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;
  public getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;
  public getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): Promise<GetNotificationConfigurationCommandOutput> | void {
    const command = new GetNotificationConfigurationCommand(args);
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
   *             Returns the JSON-formatted resource-based policy on a profiling group.
   *         </p>
   */
  public getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  public getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
   *          Gets the aggregated profile of a profiling group for a specified time range.
   *          Amazon CodeGuru Profiler collects posted agent profiles for a profiling group
   *          into aggregated profiles.
   *      </p>
   *
   *          <note>
   *             <p>
   *             Because aggregated profiles expire over time <code>GetProfile</code> is not idempotent.
   *          </p>
   *          </note>
   *
   *          <p>
   *          Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>startTime</code>,
   *          <code>endTime</code>, <code>period</code>. The maximum time range allowed is 7 days. If you specify all 3 parameters,
   *          an exception is thrown. If you specify only <code>period</code>, the latest aggregated profile is returned.
   *       </p>
   *
   *          <p>
   *          Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to
   *          UTC. The aggregation period of an aggregated profile determines how long it is retained. For more
   *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html">
   *                <code>AggregatedProfileTime</code>
   *             </a>. The aggregated profile's aggregation period determines how long
   *          it is retained by CodeGuru Profiler.
   *       </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
   *             </p>
   *             </li>
   *          </ul>
   *
   *          <p>There are two use cases for calling <code>GetProfile</code>.</p>
   *          <ol>
   *             <li>
   *                <p>
   *                If you want to return an aggregated profile that already exists, use
   *                <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html">
   *                      <code>ListProfileTimes</code>
   *                   </a> to
   *                view the time ranges of existing aggregated profiles. Use them in a <code>GetProfile</code> request to return a specific,
   *                existing aggregated profile.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile,
   *                then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time
   *                range and return them as one aggregated profile.
   *             </p>
   *
   *                <p> If aggregated profiles do not exist for the full time range requested, then
   *                aggregated profiles for a smaller time range are returned. For example, if the
   *                requested time range is from 00:00 to 00:20, and the existing aggregated profiles are
   *                from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. </p>
   *
   *
   *             </li>
   *          </ol>
   */
  public getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
  public getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
  public getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  public getProfile(
    args: GetProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProfileCommandOutput) => void),
    cb?: (err: any, data?: GetProfileCommandOutput) => void
  ): Promise<GetProfileCommandOutput> | void {
    const command = new GetProfileCommand(args);
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
   *             Returns a list of
   *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html">
   *                <code>Recommendation</code>
   *             </a>
   *             objects that contain recommendations for a profiling group for a given time period. A list of
   *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html">
   *                <code>Anomaly</code>
   *             </a>
   *             objects that contains details about anomalies detected in the profiling group for the same time period is also
   *             returned.
   *         </p>
   */
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  public getRecommendations(
    args: GetRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): Promise<GetRecommendationsCommandOutput> | void {
    const command = new GetRecommendationsCommand(args);
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
   * <p>List the available reports for a given profiling group and time range.</p>
   */
  public listFindingsReports(
    args: ListFindingsReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsReportsCommandOutput>;
  public listFindingsReports(
    args: ListFindingsReportsCommandInput,
    cb: (err: any, data?: ListFindingsReportsCommandOutput) => void
  ): void;
  public listFindingsReports(
    args: ListFindingsReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsReportsCommandOutput) => void
  ): void;
  public listFindingsReports(
    args: ListFindingsReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingsReportsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingsReportsCommandOutput) => void
  ): Promise<ListFindingsReportsCommandOutput> | void {
    const command = new ListFindingsReportsCommand(args);
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
   * <p>Lists the start times of the available aggregated profiles of a profiling group
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfileTimesCommandOutput) => void),
    cb?: (err: any, data?: ListProfileTimesCommandOutput) => void
  ): Promise<ListProfileTimesCommandOutput> | void {
    const command = new ListProfileTimesCommand(args);
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
   *          Returns a list of profiling groups. The profiling groups are returned as
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a>
   *          objects.
   *       </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfilingGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListProfilingGroupsCommandOutput) => void
  ): Promise<ListProfilingGroupsCommandOutput> | void {
    const command = new ListProfilingGroupsCommand(args);
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
   *          Returns a list of the tags that are assigned to a specified resource.
   *       </p>
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
   * <p>
   *          Submits profiling data to an aggregated profile of a profiling group. To get an
   *          aggregated profile that is created with this profiling data, use
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
   *                <code>GetProfile</code>
   *             </a>.
   *       </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PostAgentProfileCommandOutput) => void),
    cb?: (err: any, data?: PostAgentProfileCommandOutput) => void
  ): Promise<PostAgentProfileCommandOutput> | void {
    const command = new PostAgentProfileCommand(args);
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
   *             Adds permissions to a profiling group's resource-based policy
   *             that are provided using an action group. If a profiling group doesn't have
   *             a resource-based policy, one is created for it using the permissions in the action group and
   *             the roles and users in the <code>principals</code> parameter.
   *         </p>
   *
   *         <p> The one supported action group that can be added is <code>agentPermission</code>
   *             which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For
   *             more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based
   *                 policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User
   *                 Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
   *                <code>ConfigureAgent</code>
   *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
   *                <code>PostAgentProfile</code>
   *             </a>. </p>
   *
   *         <p>
   *             The first time you call <code>PutPermission</code> on a profiling group, do not specify a <code>revisionId</code> because
   *             it doesn't have a resource-based policy. Subsequent calls must provide a <code>revisionId</code> to specify
   *             which revision of the resource-based policy to add the permissions to.
   *         </p>
   *
   *         <p>
   *             The response contains the profiling group's JSON-formatted resource policy.
   *         </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPermissionCommandOutput) => void),
    cb?: (err: any, data?: PutPermissionCommandOutput) => void
  ): Promise<PutPermissionCommandOutput> | void {
    const command = new PutPermissionCommand(args);
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
   * <p>Remove one anomaly notifications channel for a profiling group.</p>
   */
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveNotificationChannelCommandOutput>;
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): Promise<RemoveNotificationChannelCommandOutput> | void {
    const command = new RemoveNotificationChannelCommand(args);
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
   * <p> Removes permissions from a profiling group's resource-based policy that are provided
   *             using an action group. The one supported action group that can be removed is
   *                 <code>agentPermission</code> which grants <code>ConfigureAgent</code> and
   *                 <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon
   *                 CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
   *                <code>ConfigureAgent</code>
   *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
   *                <code>PostAgentProfile</code>
   *             </a>. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemovePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemovePermissionCommandOutput) => void
  ): Promise<RemovePermissionCommandOutput> | void {
    const command = new RemovePermissionCommand(args);
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
   * <p>Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is
   *             useful or not.</p>
   */
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitFeedbackCommandOutput>;
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubmitFeedbackCommandOutput) => void),
    cb?: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): Promise<SubmitFeedbackCommandOutput> | void {
    const command = new SubmitFeedbackCommand(args);
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
   *          Use to assign one or more tags to a resource.
   *       </p>
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
   * <p>
   *          Use to remove one or more tags from a resource.
   *       </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProfilingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateProfilingGroupCommandOutput) => void
  ): Promise<UpdateProfilingGroupCommandOutput> | void {
    const command = new UpdateProfilingGroupCommand(args);
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
