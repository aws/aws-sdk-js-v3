// smithy-typescript generated code
import type {
  ActionGroup,
  AgentParameterField,
  AggregationPeriod,
  ComputePlatform,
  EventPublisher,
  FeedbackType,
  MetadataField,
  MetricType,
  OrderBy,
} from "./enums";

/**
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
 *
 * @public
 */
export interface Channel {
  /**
   * Unique identifier for each `Channel` in the notification configuration of a Profiling Group. A random UUID for channelId is used when adding a channel to the notification configuration if not specified in the request.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * List of publishers for different type of events that may be detected in an application from the profile. Anomaly detection is the only event publisher in Profiler.
   *
   * @public
   */
  eventPublishers: EventPublisher[] | undefined;
}

/**
 * The structure representing the AddNotificationChannelsRequest.
 *
 * @public
 */
export interface AddNotificationChannelsRequest {
  /**
   * The name of the profiling group that we are setting up notifications for.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * One or 2 channels to report to when anomalies are detected.
   *
   * @public
   */
  channels: Channel[] | undefined;
}

/**
 * The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * List of up to two channels to be used for sending notifications for events detected from the application profile.
   *
   * @public
   */
  channels?: Channel[] | undefined;
}

/**
 * The structure representing the AddNotificationChannelsResponse.
 *
 * @public
 */
export interface AddNotificationChannelsResponse {
  /**
   * The new notification configuration for this profiling group.
   *
   * @public
   */
  notificationConfiguration?: NotificationConfiguration | undefined;
}

/**
 * The response of [`ConfigureAgent`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html) that specifies if an agent profiles or not and for how long to return profiling data.
 *
 * @public
 */
export interface AgentConfiguration {
  /**
   * A `Boolean` that specifies whether the profiling agent collects profiling data or not. Set to `true` to enable profiling.
   *
   * @public
   */
  shouldProfile: boolean | undefined;

  /**
   * How long a profiling agent should send profiling data using [`ConfigureAgent`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html). For example, if this is set to 300, the profiling agent calls [`ConfigureAgent`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html) every 5 minutes to submit the profiled data collected during that period.
   *
   * @public
   */
  periodInSeconds: number | undefined;

  /**
   * Parameters used by the profiler. The valid parameters are:
   *
   *
   *
   * - `MaxStackDepth` - The maximum depth of the stacks in the code that is represented in the profile. For example, if CodeGuru Profiler finds a method `A`, which calls method `B`, which calls method `C`, which calls method `D`, then the depth is 4. If the `maxDepth` is set to 2, then the profiler evaluates `A` and `B`.
   * - `MemoryUsageLimitPercent` - The percentage of memory that is used by the profiler.
   * - `MinimumTimeForReportingInMilliseconds` - The minimum time in milliseconds between sending reports.
   * - `ReportingIntervalInMilliseconds` - The reporting interval in milliseconds used to report profiles.
   * - `SamplingIntervalInMilliseconds` - The sampling interval in milliseconds that is used to profile samples.
   *
   * @public
   */
  agentParameters?: Partial<Record<AgentParameterField, string>> | undefined;
}

/**
 * Specifies whether profiling is enabled or disabled for a profiling group. It is used by [`ConfigureAgent`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html) to enable or disable profiling for a profiling group.
 *
 * @public
 */
export interface AgentOrchestrationConfig {
  /**
   * A `Boolean` that specifies whether the profiling agent collects profiling data or not. Set to `true` to enable profiling.
   *
   * @public
   */
  profilingEnabled: boolean | undefined;
}

/**
 * Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes).
 *
 * @public
 */
export interface AggregatedProfileTime {
  /**
   * The time that aggregation of posted agent profiles for a profiling group starts. The aggregation profile contains profiles posted by the agent starting at this time for an aggregation period specified by the `period` property of the `AggregatedProfileTime` object.
   *
   * Specify `start` using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  start?: Date | undefined;

  /**
   * The aggregation period. This indicates the period during which an aggregation profile collects posted agent profiles for a profiling group. Use one of three valid durations that are specified using the ISO 8601 format.
   *
   * - `P1D` — 1 day
   * - `PT1H` — 1 hour
   * - `PT5M` — 5 minutes
   *
   * @public
   */
  period?: AggregationPeriod | undefined;
}

/**
 * Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
 *
 * @public
 */
export interface UserFeedback {
  /**
   * Optional `Positive` or `Negative` feedback submitted by the user about whether the recommendation is useful or not.
   *
   * @public
   */
  type: FeedbackType | undefined;
}

/**
 * The specific duration in which the metric is flagged as anomalous.
 *
 * @public
 */
export interface AnomalyInstance {
  /**
   * The universally unique identifier (UUID) of an instance of an anomaly in a metric.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The start time of the period during which the metric is flagged as anomalous. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the period during which the metric is flagged as anomalous. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Feedback type on a specific instance of anomaly submitted by the user.
   *
   * @public
   */
  userFeedback?: UserFeedback | undefined;
}

/**
 * Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame.
 *
 * @public
 */
export interface Metric {
  /**
   * The name of the method that appears as a frame in any stack in a profile.
   *
   * @public
   */
  frameName: string | undefined;

  /**
   * A type that specifies how a metric for a frame is analyzed. The supported value `AggregatedRelativeTotalTime` is an aggregation of the metric value for one frame that is calculated across the occurences of all frames in a profile.
   *
   * @public
   */
  type: MetricType | undefined;

  /**
   * The list of application runtime thread states that is used to calculate the metric value for the frame.
   *
   * @public
   */
  threadStates: string[] | undefined;
}

/**
 * Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time.
 *
 * @public
 */
export interface Anomaly {
  /**
   * Details about the metric that the analysis used when it detected the anomaly. The metric includes the name of the frame that was analyzed with the type and thread states used to derive the metric value for that frame.
   *
   * @public
   */
  metric: Metric | undefined;

  /**
   * The reason for which metric was flagged as anomalous.
   *
   * @public
   */
  reason: string | undefined;

  /**
   * A list of the instances of the detected anomalies during the requested period.
   *
   * @public
   */
  instances: AnomalyInstance[] | undefined;
}

/**
 * The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
 *
 * @public
 */
export interface FrameMetric {
  /**
   * Name of the method common across the multiple occurrences of a frame in an application profile.
   *
   * @public
   */
  frameName: string | undefined;

  /**
   * A type of aggregation that specifies how a metric for a frame is analyzed. The supported value `AggregatedRelativeTotalTime` is an aggregation of the metric value for one frame that is calculated across the occurrences of all frames in a profile.
   *
   * @public
   */
  type: MetricType | undefined;

  /**
   * List of application runtime thread states used to get the counts for a frame a derive a metric value.
   *
   * @public
   */
  threadStates: string[] | undefined;
}

/**
 * The structure representing the BatchGetFrameMetricDataRequest.
 *
 * @public
 */
export interface BatchGetFrameMetricDataRequest {
  /**
   * The name of the profiling group associated with the the frame metrics used to return the time series values.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The start time of the time period for the frame metrics used to return the time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The duration of the frame metrics used to return the time series values. Specify using the ISO 8601 format. The maximum period duration is one day (`PT24H` or `P1D`).
   *
   * @public
   */
  period?: string | undefined;

  /**
   * The requested resolution of time steps for the returned time series of values. If the requested target resolution is not available due to data not being retained we provide a best effort result by falling back to the most granular available resolution after the target resolution. There are 3 valid values.
   *
   * - `P1D` — 1 day
   * - `PT1H` — 1 hour
   * - `PT5M` — 5 minutes
   *
   * @public
   */
  targetResolution?: AggregationPeriod | undefined;

  /**
   * The details of the metrics that are used to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.
   *
   * @public
   */
  frameMetrics?: FrameMetric[] | undefined;
}

/**
 * A data type that contains a `Timestamp` object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
 *
 * @public
 */
export interface TimestampStructure {
  /**
   * A `Timestamp`. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  value: Date | undefined;
}

/**
 * Information about a frame metric and its values.
 *
 * @public
 */
export interface FrameMetricDatum {
  /**
   * The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
   *
   * @public
   */
  frameMetric: FrameMetric | undefined;

  /**
   * A list of values that are associated with a frame metric.
   *
   * @public
   */
  values: number[] | undefined;
}

/**
 * The structure representing the BatchGetFrameMetricDataResponse.
 *
 * @public
 */
export interface BatchGetFrameMetricDataResponse {
  /**
   * The start time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the time period for the returned time series values. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Resolution or granularity of the profile data used to generate the time series. This is the value used to jump through time steps in a time series. There are 3 valid values.
   *
   * - `P1D` — 1 day
   * - `PT1H` — 1 hour
   * - `PT5M` — 5 minutes
   *
   * @public
   */
  resolution: AggregationPeriod | undefined;

  /**
   * List of instances, or time steps, in the time series. For example, if the `period` is one day (`PT24H)`), and the `resolution` is five minutes (`PT5M`), then there are 288 `endTimes` in the list that are each five minutes appart.
   *
   * @public
   */
  endTimes: TimestampStructure[] | undefined;

  /**
   * List of instances which remained unprocessed. This will create a missing time step in the list of end times.
   *
   * @public
   */
  unprocessedEndTimes: Record<string, TimestampStructure[]> | undefined;

  /**
   * Details of the metrics to request a time series of values. The metric includes the name of the frame, the aggregation type to calculate the metric value for the frame, and the thread states to use to get the count for the metric value of the frame.
   *
   * @public
   */
  frameMetricData: FrameMetricDatum[] | undefined;
}

/**
 * The structure representing the GetFindingsReportAccountSummaryRequest.
 *
 * @public
 */
export interface GetFindingsReportAccountSummaryRequest {
  /**
   * The `nextToken` value returned from a previous paginated `GetFindingsReportAccountSummary` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned by `GetFindingsReportAccountSummary` in paginated output. When this parameter is used, `GetFindingsReportAccountSummary` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `GetFindingsReportAccountSummary` request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A `Boolean` value indicating whether to only return reports from daily profiles. If set to `True`, only analysis data from daily profiles is returned. If set to `False`, analysis data is returned from smaller time windows (for example, one hour).
   *
   * @public
   */
  dailyReportsOnly?: boolean | undefined;
}

/**
 * Information about potential recommendations that might be created from the analysis of profiling data.
 *
 * @public
 */
export interface FindingsReportSummary {
  /**
   * The universally unique identifier (UUID) of the recommendation report.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the profiling group that is associated with the analysis data.
   *
   * @public
   */
  profilingGroupName?: string | undefined;

  /**
   * The start time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  profileStartTime?: Date | undefined;

  /**
   * The end time of the period during which the metric is flagged as anomalous. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  profileEndTime?: Date | undefined;

  /**
   * The total number of different recommendations that were found by the analysis.
   *
   * @public
   */
  totalNumberOfFindings?: number | undefined;
}

/**
 * The structure representing the GetFindingsReportAccountSummaryResponse.
 *
 * @public
 */
export interface GetFindingsReportAccountSummaryResponse {
  /**
   * The return list of [`FindingsReportSummary`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html) objects taht contain summaries of analysis results for all profiling groups in your AWS account.
   *
   * @public
   */
  reportSummaries: FindingsReportSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `GetFindingsReportAccountSummary` request. When the results of a `GetFindingsReportAccountSummary` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that contains the tags to return.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags assigned to the specified resource. This is the list of tags returned in the response.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The structure representing the configureAgentRequest.
 *
 * @public
 */
export interface ConfigureAgentRequest {
  /**
   * The name of the profiling group for which the configured agent is collecting profiling data.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * A universally unique identifier (UUID) for a profiling instance. For example, if the profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS Fargate container, it is the container's task ID.
   *
   * @public
   */
  fleetInstanceId?: string | undefined;

  /**
   * Metadata captured about the compute platform the agent is running on. It includes information about sampling and reporting. The valid fields are:
   *
   * - `COMPUTE_PLATFORM` - The compute platform on which the agent is running
   * - `AGENT_ID` - The ID for an agent instance.
   * - `AWS_REQUEST_ID` - The AWS request ID of a Lambda invocation.
   * - `EXECUTION_ENVIRONMENT` - The execution environment a Lambda function is running on.
   * - `LAMBDA_FUNCTION_ARN` - The Amazon Resource Name (ARN) that is used to invoke a Lambda function.
   * - `LAMBDA_MEMORY_LIMIT_IN_MB` - The memory allocated to a Lambda function.
   * - `LAMBDA_REMAINING_TIME_IN_MILLISECONDS` - The time in milliseconds before execution of a Lambda function times out.
   * - `LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS` - The time in milliseconds between two invocations of a Lambda function.
   * - `LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS` - The time in milliseconds for the previous Lambda invocation.
   *
   * @public
   */
  metadata?: Partial<Record<MetadataField, string>> | undefined;
}

/**
 * The structure representing the configureAgentResponse.
 *
 * @public
 */
export interface ConfigureAgentResponse {
  /**
   * An [`AgentConfiguration`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AgentConfiguration.html) object that specifies if an agent profiles or not and for how long to return profiling data.
   *
   * @public
   */
  configuration: AgentConfiguration | undefined;
}

/**
 * The structure representing the createProfiliingGroupRequest.
 *
 * @public
 */
export interface CreateProfilingGroupRequest {
  /**
   * The name of the profiling group to create.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The compute platform of the profiling group. Use `AWSLambda` if your application runs on AWS Lambda. Use `Default` if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, `Default` is used.
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental creation of duplicate profiling groups if there are failures and retries.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies whether profiling is enabled or disabled for the created profiling group.
   *
   * @public
   */
  agentOrchestrationConfig?: AgentOrchestrationConfig | undefined;

  /**
   * A list of tags to add to the created profiling group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.
 *
 * @public
 */
export interface ProfilingStatus {
  /**
   * The date and time when the most recent profile was received. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  latestAgentProfileReportedAt?: Date | undefined;

  /**
   * An [`AggregatedProfileTime`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html) object that contains the aggregation period and start time for an aggregated profile.
   *
   * @public
   */
  latestAggregatedProfile?: AggregatedProfileTime | undefined;

  /**
   * The date and time when the profiling agent most recently pinged back. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  latestAgentOrchestratedAt?: Date | undefined;
}

/**
 * Contains information about a profiling group.
 *
 * @public
 */
export interface ProfilingGroupDescription {
  /**
   * The name of the profiling group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An [`AgentOrchestrationConfig`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AgentOrchestrationConfig.html) object that indicates if the profiling group is enabled for profiled or not.
   *
   * @public
   */
  agentOrchestrationConfig?: AgentOrchestrationConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) identifying the profiling group resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The time when the profiling group was created. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the profiling group was last updated. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A [`ProfilingStatus`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingStatus.html) object that includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.
   *
   * @public
   */
  profilingStatus?: ProfilingStatus | undefined;

  /**
   * The compute platform of the profiling group. If it is set to `AWSLambda`, then the profiled application runs on AWS Lambda. If it is set to `Default`, then the profiled application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. The default is `Default`.
   *
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * A list of the tags that belong to this profiling group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The structure representing the createProfilingGroupResponse.
 *
 * @public
 */
export interface CreateProfilingGroupResponse {
  /**
   * The returned [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) object that contains information about the created profiling group.
   *
   * @public
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

/**
 * The structure representing the deleteProfilingGroupRequest.
 *
 * @public
 */
export interface DeleteProfilingGroupRequest {
  /**
   * The name of the profiling group to delete.
   *
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * The structure representing the deleteProfilingGroupResponse.
 *
 * @public
 */
export interface DeleteProfilingGroupResponse {}

/**
 * The structure representing the describeProfilingGroupRequest.
 *
 * @public
 */
export interface DescribeProfilingGroupRequest {
  /**
   * The name of the profiling group to get information about.
   *
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * The structure representing the describeProfilingGroupResponse.
 *
 * @public
 */
export interface DescribeProfilingGroupResponse {
  /**
   * The returned [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) object that contains information about the requested profiling group.
   *
   * @public
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

/**
 * The structure representing the GetNotificationConfigurationRequest.
 *
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * The name of the profiling group we want to get the notification configuration for.
   *
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * The structure representing the GetNotificationConfigurationResponse.
 *
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * The current notification configuration for this profiling group.
   *
   * @public
   */
  notificationConfiguration: NotificationConfiguration | undefined;
}

/**
 * The structure representing the `getPolicyRequest`.
 *
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The name of the profiling group.
   *
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * The structure representing the `getPolicyResponse`.
 *
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The JSON-formatted resource-based policy attached to the `ProfilingGroup`.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * A unique identifier for the current revision of the returned policy.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * The structure representing the getProfileRequest.
 *
 * @public
 */
export interface GetProfileRequest {
  /**
   * The name of the profiling group to get.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The start time of the profile to get. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   *
   *
   * If you specify `startTime`, then you must also specify `period` or `endTime`, but not both.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Used with `startTime` or `endTime` to specify the time range for the returned aggregated profile. Specify using the ISO 8601 format. For example, `P1DT1H1M1S`.
   *
   *
   *
   * To get the latest aggregated profile, specify only `period`.
   *
   * @public
   */
  period?: string | undefined;

  /**
   * The end time of the requested profile. Specify using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * If you specify `endTime`, then you must also specify `period` or `startTime`, but not both.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The maximum depth of the stacks in the code that is represented in the aggregated profile. For example, if CodeGuru Profiler finds a method `A`, which calls method `B`, which calls method `C`, which calls method `D`, then the depth is 4. If the `maxDepth` is set to 2, then the aggregated profile contains representations of methods `A` and `B`.
   *
   * @public
   */
  maxDepth?: number | undefined;

  /**
   * The format of the returned profiling data. The format maps to the `Accept` and `Content-Type` headers of the HTTP request. You can specify one of the following: or the default .
   *
   *
   *
   * - `application/json` — standard JSON format
   * - `application/x-amzn-ion` — the Amazon Ion data format. For more information, see [Amazon Ion](http://amzn.github.io/ion-docs/).
   *
   * @public
   */
  accept?: string | undefined;
}

/**
 * The structure representing the getProfileResponse.
 *
 * @public
 */
export interface GetProfileResponse {
  /**
   * Information about the profile.
   *
   * @public
   */
  profile: Uint8Array | undefined;

  /**
   * The content type of the profile in the payload. It is either `application/json` or the default `application/x-amzn-ion`.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The content encoding of the profile.
   *
   * @public
   */
  contentEncoding?: string | undefined;
}

/**
 * The structure representing the GetRecommendationsRequest.
 *
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * The name of the profiling group to get analysis data about.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The end time of the profile to get analysis data about. You must specify `startTime` and `endTime`. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The start time of the profile to get analysis data about. You must specify `startTime` and `endTime`. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The language used to provide analysis. Specify using a string that is one of the following `BCP 47` language codes.
   *
   * - `de-DE` - German, Germany
   * - `en-GB` - English, United Kingdom
   * - `en-US` - English, United States
   * - `es-ES` - Spanish, Spain
   * - `fr-FR` - French, France
   * - `it-IT` - Italian, Italy
   * - `ja-JP` - Japanese, Japan
   * - `ko-KR` - Korean, Republic of Korea
   * - `pt-BR` - Portugese, Brazil
   * - `zh-CN` - Chinese, China
   * - `zh-TW` - Chinese, Taiwan
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * A set of rules used to make a recommendation during an analysis.
 *
 * @public
 */
export interface Pattern {
  /**
   * The universally unique identifier (UUID) of this pattern.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name for this pattern.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the recommendation. This explains a potential inefficiency in a profiled application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A string that contains the steps recommended to address the potential inefficiency.
   *
   * @public
   */
  resolutionSteps?: string | undefined;

  /**
   * A list of frame names that were searched during the analysis that generated a recommendation.
   *
   * @public
   */
  targetFrames?: string[][] | undefined;

  /**
   * The percentage of time an application spends in one method that triggers a recommendation. The percentage of time is the same as the percentage of the total gathered sample counts during analysis.
   *
   * @public
   */
  thresholdPercent?: number | undefined;

  /**
   * A list of the different counters used to determine if there is a match.
   *
   * @public
   */
  countersToAggregate?: string[] | undefined;
}

/**
 * The part of a profile that contains a recommendation found during analysis.
 *
 * @public
 */
export interface Match {
  /**
   * The target frame that triggered a match.
   *
   * @public
   */
  targetFramesIndex?: number | undefined;

  /**
   * The location in the profiling graph that contains a recommendation found during analysis.
   *
   * @public
   */
  frameAddress?: string | undefined;

  /**
   * The value in the profile data that exceeded the recommendation threshold.
   *
   * @public
   */
  thresholdBreachValue?: number | undefined;
}

/**
 * A potential improvement that was found from analyzing the profiling data.
 *
 * @public
 */
export interface Recommendation {
  /**
   * How many different places in the profile graph triggered a match.
   *
   * @public
   */
  allMatchesCount: number | undefined;

  /**
   * How much of the total sample count is potentially affected.
   *
   * @public
   */
  allMatchesSum: number | undefined;

  /**
   * The pattern that analysis recognized in the profile to make this recommendation.
   *
   * @public
   */
  pattern: Pattern | undefined;

  /**
   * List of the matches with most impact.
   *
   * @public
   */
  topMatches: Match[] | undefined;

  /**
   * The start time of the profile that was used by this analysis. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * End time of the profile that was used by this analysis. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * The structure representing the GetRecommendationsResponse.
 *
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * The name of the profiling group the analysis data is about.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The start time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  profileStartTime: Date | undefined;

  /**
   * The end time of the profile the analysis data is about. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  profileEndTime: Date | undefined;

  /**
   * The list of recommendations that the analysis found for this profile.
   *
   * @public
   */
  recommendations: Recommendation[] | undefined;

  /**
   * The list of anomalies that the analysis has found for this profile.
   *
   * @public
   */
  anomalies: Anomaly[] | undefined;
}

/**
 * The structure representing the ListFindingsReportsRequest.
 *
 * @public
 */
export interface ListFindingsReportsRequest {
  /**
   * The name of the profiling group from which to search for analysis data.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The start time of the profile to get analysis data about. You must specify `startTime` and `endTime`. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the profile to get analysis data about. You must specify `startTime` and `endTime`. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListFindingsReportsRequest` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of report results returned by `ListFindingsReports` in paginated output. When this parameter is used, `ListFindingsReports` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListFindingsReports` request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A `Boolean` value indicating whether to only return reports from daily profiles. If set to `True`, only analysis data from daily profiles is returned. If set to `False`, analysis data is returned from smaller time windows (for example, one hour).
   *
   * @public
   */
  dailyReportsOnly?: boolean | undefined;
}

/**
 * The structure representing the ListFindingsReportsResponse.
 *
 * @public
 */
export interface ListFindingsReportsResponse {
  /**
   * The list of analysis results summaries.
   *
   * @public
   */
  findingsReportSummaries: FindingsReportSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListFindingsReports` request. When the results of a `ListFindingsReports` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The structure representing the listProfileTimesRequest.
 *
 * @public
 */
export interface ListProfileTimesRequest {
  /**
   * The name of the profiling group.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The start time of the time range from which to list the profiles.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the time range from which to list the profiles.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The aggregation period. This specifies the period during which an aggregation profile collects posted agent profiles for a profiling group. There are 3 valid values.
   *
   * - `P1D` — 1 day
   * - `PT1H` — 1 hour
   * - `PT5M` — 5 minutes
   *
   * @public
   */
  period: AggregationPeriod | undefined;

  /**
   * The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to `TIMESTAMP_DESCENDING`.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * The maximum number of profile time results returned by `ListProfileTimes` in paginated output. When this parameter is used, `ListProfileTimes` only returns `maxResults` results in a single page with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListProfileTimes` request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListProfileTimes` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the start time of a profile.
 *
 * @public
 */
export interface ProfileTime {
  /**
   * The start time of a profile. It is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *
   * @public
   */
  start?: Date | undefined;
}

/**
 * The structure representing the listProfileTimesResponse.
 *
 * @public
 */
export interface ListProfileTimesResponse {
  /**
   * The list of start times of the available profiles for the aggregation period in the specified time range.
   *
   * @public
   */
  profileTimes: ProfileTime[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListProfileTimes` request. When the results of a `ListProfileTimes` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The structure representing the listProfilingGroupsRequest.
 *
 * @public
 */
export interface ListProfilingGroupsRequest {
  /**
   * The `nextToken` value returned from a previous paginated `ListProfilingGroups` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of profiling groups results returned by `ListProfilingGroups` in paginated output. When this parameter is used, `ListProfilingGroups` only returns `maxResults` results in a single page along with a `nextToken` response element. The remaining results of the initial request can be seen by sending another `ListProfilingGroups` request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A `Boolean` value indicating whether to include a description. If `true`, then a list of [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) objects that contain detailed information about profiling groups is returned. If `false`, then a list of profiling group names is returned.
   *
   * @public
   */
  includeDescription?: boolean | undefined;
}

/**
 * The structure representing the listProfilingGroupsResponse.
 *
 * @public
 */
export interface ListProfilingGroupsResponse {
  /**
   * A returned list of profiling group names. A list of the names is returned only if `includeDescription` is `false`, otherwise a list of [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) objects is returned.
   *
   * @public
   */
  profilingGroupNames: string[] | undefined;

  /**
   * A returned list [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) objects. A list of [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) objects is returned only if `includeDescription` is `true`, otherwise a list of profiling group names is returned.
   *
   * @public
   */
  profilingGroups?: ProfilingGroupDescription[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListProfilingGroups` request. When the results of a `ListProfilingGroups` request exceed `maxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The structure representing the postAgentProfileRequest.
 *
 * @public
 */
export interface PostAgentProfileRequest {
  /**
   * The name of the profiling group with the aggregated profile that receives the submitted profiling data.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The submitted profiling data.
   *
   * @public
   */
  agentProfile: Uint8Array | undefined;

  /**
   * Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the accidental submission of duplicate profiling data if there are failures and retries.
   *
   * @public
   */
  profileToken?: string | undefined;

  /**
   * The format of the submitted profiling data. The format maps to the `Accept` and `Content-Type` headers of the HTTP request. You can specify one of the following: or the default .
   *
   *
   *
   * - `application/json` — standard JSON format
   * - `application/x-amzn-ion` — the Amazon Ion data format. For more information, see [Amazon Ion](http://amzn.github.io/ion-docs/).
   *
   * @public
   */
  contentType: string | undefined;
}

/**
 * The structure representing the postAgentProfileResponse.
 *
 * @public
 */
export interface PostAgentProfileResponse {}

/**
 * The structure representing the `putPermissionRequest`.
 *
 * @public
 */
export interface PutPermissionRequest {
  /**
   * The name of the profiling group to grant access to.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * Specifies an action group that contains permissions to add to a profiling group resource. One action group is supported, `agentPermissions`, which grants permission to perform actions required by the profiling agent, `ConfigureAgent` and `PostAgentProfile` permissions.
   *
   * @public
   */
  actionGroup: ActionGroup | undefined;

  /**
   * A list ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not are supported in the ARNs.
   *
   * @public
   */
  principals: string[] | undefined;

  /**
   * A universally unique identifier (UUID) for the revision of the policy you are adding to the profiling group. Do not specify this when you add permissions to a profiling group for the first time. If a policy already exists on the profiling group, you must specify the `revisionId`.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * The structure representing the `putPermissionResponse`.
 *
 * @public
 */
export interface PutPermissionResponse {
  /**
   * The JSON-formatted resource-based policy on the profiling group that includes the added permissions.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * A universally unique identifier (UUID) for the revision of the resource-based policy that includes the added permissions. The JSON-formatted policy is in the `policy` element of the response.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * The structure representing the RemoveNotificationChannelRequest.
 *
 * @public
 */
export interface RemoveNotificationChannelRequest {
  /**
   * The name of the profiling group we want to change notification configuration for.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The id of the channel that we want to stop receiving notifications.
   *
   * @public
   */
  channelId: string | undefined;
}

/**
 * The structure representing the RemoveNotificationChannelResponse.
 *
 * @public
 */
export interface RemoveNotificationChannelResponse {
  /**
   * The new notification configuration for this profiling group.
   *
   * @public
   */
  notificationConfiguration?: NotificationConfiguration | undefined;
}

/**
 * The structure representing the `removePermissionRequest`.
 *
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * The name of the profiling group.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * Specifies an action group that contains the permissions to remove from a profiling group's resource-based policy. One action group is supported, `agentPermissions`, which grants `ConfigureAgent` and `PostAgentProfile` permissions.
   *
   * @public
   */
  actionGroup: ActionGroup | undefined;

  /**
   * A universally unique identifier (UUID) for the revision of the resource-based policy from which you want to remove permissions.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * The structure representing the `removePermissionResponse`.
 *
 * @public
 */
export interface RemovePermissionResponse {
  /**
   * The JSON-formatted resource-based policy on the profiling group after the specified permissions were removed.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * A universally unique identifier (UUID) for the revision of the resource-based policy after the specified permissions were removed. The updated JSON-formatted policy is in the `policy` element of the response.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * The structure representing the SubmitFeedbackRequest.
 *
 * @public
 */
export interface SubmitFeedbackRequest {
  /**
   * The name of the profiling group that is associated with the analysis data.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * The universally unique identifier (UUID) of the [`AnomalyInstance`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AnomalyInstance.html) object that is included in the analysis data.
   *
   * @public
   */
  anomalyInstanceId: string | undefined;

  /**
   * The feedback tpye. Thee are two valid values, `Positive` and `Negative`.
   *
   * @public
   */
  type: FeedbackType | undefined;

  /**
   * Optional feedback about this anomaly.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * The structure representing the SubmitFeedbackResponse.
 *
 * @public
 */
export interface SubmitFeedbackResponse {}

/**
 * The structure representing the updateProfilingGroupRequest.
 *
 * @public
 */
export interface UpdateProfilingGroupRequest {
  /**
   * The name of the profiling group to update.
   *
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * Specifies whether profiling is enabled or disabled for a profiling group.
   *
   * @public
   */
  agentOrchestrationConfig: AgentOrchestrationConfig | undefined;
}

/**
 * The structure representing the updateProfilingGroupResponse.
 *
 * @public
 */
export interface UpdateProfilingGroupResponse {
  /**
   * A [`ProfilingGroupDescription`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html) that contains information about the returned updated profiling group.
   *
   * @public
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that the tags are added to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tags that are added to the specified resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that contains the tags to remove.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag keys. Existing tags of resources with keys in this list are removed from the specified resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
