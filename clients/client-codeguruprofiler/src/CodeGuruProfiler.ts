// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeGuruProfilerClient, CodeGuruProfilerClientConfig } from "./CodeGuruProfilerClient";
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

const commands = {
  AddNotificationChannelsCommand,
  BatchGetFrameMetricDataCommand,
  ConfigureAgentCommand,
  CreateProfilingGroupCommand,
  DeleteProfilingGroupCommand,
  DescribeProfilingGroupCommand,
  GetFindingsReportAccountSummaryCommand,
  GetNotificationConfigurationCommand,
  GetPolicyCommand,
  GetProfileCommand,
  GetRecommendationsCommand,
  ListFindingsReportsCommand,
  ListProfileTimesCommand,
  ListProfilingGroupsCommand,
  ListTagsForResourceCommand,
  PostAgentProfileCommand,
  PutPermissionCommand,
  RemoveNotificationChannelCommand,
  RemovePermissionCommand,
  SubmitFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateProfilingGroupCommand,
};

export interface CodeGuruProfiler {
  /**
   * @see {@link AddNotificationChannelsCommand}
   */
  addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddNotificationChannelsCommandOutput>;
  addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    cb: (err: any, data?: AddNotificationChannelsCommandOutput) => void
  ): void;
  addNotificationChannels(
    args: AddNotificationChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddNotificationChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFrameMetricDataCommand}
   */
  batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFrameMetricDataCommandOutput>;
  batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    cb: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void
  ): void;
  batchGetFrameMetricData(
    args: BatchGetFrameMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureAgentCommand}
   */
  configureAgent(
    args: ConfigureAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureAgentCommandOutput>;
  configureAgent(args: ConfigureAgentCommandInput, cb: (err: any, data?: ConfigureAgentCommandOutput) => void): void;
  configureAgent(
    args: ConfigureAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfilingGroupCommand}
   */
  createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfilingGroupCommandOutput>;
  createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void
  ): void;
  createProfilingGroup(
    args: CreateProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfilingGroupCommand}
   */
  deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfilingGroupCommandOutput>;
  deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void
  ): void;
  deleteProfilingGroup(
    args: DeleteProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProfilingGroupCommand}
   */
  describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProfilingGroupCommandOutput>;
  describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void
  ): void;
  describeProfilingGroup(
    args: DescribeProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsReportAccountSummaryCommand}
   */
  getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsReportAccountSummaryCommandOutput>;
  getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    cb: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void
  ): void;
  getFindingsReportAccountSummary(
    args: GetFindingsReportAccountSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotificationConfigurationCommand}
   */
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationConfigurationCommandOutput>;
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
  getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
  getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationsCommand}
   */
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsReportsCommand}
   */
  listFindingsReports(
    args: ListFindingsReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsReportsCommandOutput>;
  listFindingsReports(
    args: ListFindingsReportsCommandInput,
    cb: (err: any, data?: ListFindingsReportsCommandOutput) => void
  ): void;
  listFindingsReports(
    args: ListFindingsReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileTimesCommand}
   */
  listProfileTimes(
    args: ListProfileTimesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileTimesCommandOutput>;
  listProfileTimes(
    args: ListProfileTimesCommandInput,
    cb: (err: any, data?: ListProfileTimesCommandOutput) => void
  ): void;
  listProfileTimes(
    args: ListProfileTimesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileTimesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfilingGroupsCommand}
   */
  listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilingGroupsCommandOutput>;
  listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void
  ): void;
  listProfilingGroups(
    args: ListProfilingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void
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
   * @see {@link PostAgentProfileCommand}
   */
  postAgentProfile(
    args: PostAgentProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostAgentProfileCommandOutput>;
  postAgentProfile(
    args: PostAgentProfileCommandInput,
    cb: (err: any, data?: PostAgentProfileCommandOutput) => void
  ): void;
  postAgentProfile(
    args: PostAgentProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostAgentProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(args: PutPermissionCommandInput, options?: __HttpHandlerOptions): Promise<PutPermissionCommandOutput>;
  putPermission(args: PutPermissionCommandInput, cb: (err: any, data?: PutPermissionCommandOutput) => void): void;
  putPermission(
    args: PutPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveNotificationChannelCommand}
   */
  removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveNotificationChannelCommandOutput>;
  removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;
  removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitFeedbackCommand}
   */
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitFeedbackCommandOutput>;
  submitFeedback(args: SubmitFeedbackCommandInput, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
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
   * @see {@link UpdateProfilingGroupCommand}
   */
  updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfilingGroupCommandOutput>;
  updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void
  ): void;
  updateProfilingGroup(
    args: UpdateProfilingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class CodeGuruProfiler extends CodeGuruProfilerClient implements CodeGuruProfiler {}
createAggregatedClient(commands, CodeGuruProfiler);
