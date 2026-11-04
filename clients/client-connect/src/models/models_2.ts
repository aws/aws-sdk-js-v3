// smithy-typescript generated code
import type {
  AgentStatusType,
  AnalyticsMode,
  ArtifactStatus,
  AttachmentScope,
  AutoEvaluationStatus,
  Channel,
  Comparison,
  ContactFlowModuleState,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ContactInteractionType,
  ContactMetricName,
  ContactState,
  ContentDisposition,
  CurrentMetricName,
  DataTableAttributeValueType,
  DirectoryType,
  EntityType,
  EvaluationFormAIVersionStatus,
  EvaluationFormValidationFindingSeverity,
  EvaluationFormValidationStatus,
  EvaluationFormVersionStatus,
  EvaluationStatus,
  EvaluationType,
  EventSourceName,
  ExecutionRecordStatus,
  FileStatusType,
  FileUseCaseType,
  FilterV2StringConditionComparisonOperator,
  FlowAssociationResourceType,
  Grouping,
  HistoricalMetricName,
  InstanceStatus,
  InstanceStorageResourceType,
  IntegrationType,
  IntervalPeriod,
  LexVersion,
  ListFlowAssociationResourceType,
  LocaleCode,
  MediaType,
  MetricStatus,
  MetricType,
  NotificationPriority,
  NotificationSource,
  NotificationStatus,
  OperationalStatus,
  ParticipantRole,
  PhoneNumberCountryCode,
  PhoneNumberType,
  QueueType,
  QuickConnectType,
  RealTimeContactAnalysisExtractedInformationFailureCode,
  RealTimeContactAnalysisOutputType,
  RealTimeContactAnalysisPostContactSummaryFailureCode,
  RealTimeContactAnalysisPostContactSummaryStatus,
  RealTimeContactAnalysisSegmentType,
  RealTimeContactAnalysisSentimentLabel,
  RealTimeContactAnalysisStatus,
  RealTimeContactAnalysisSupportedChannel,
  ReferenceStatus,
  ReferenceType,
  RuleCapabilityTier,
  RulePublishStatus,
  SecurityProfileType,
  SortOrder,
  SourceType,
  Statistic,
  TaskTemplateStatus,
  TestCaseExecutionStatus,
  TestCaseStatus,
  TrafficDistributionGroupStatus,
  Unit,
  UseCaseType,
  VocabularyLanguageCode,
} from "./enums";
import type {
  ActionSummary,
  AgentConfig,
  AgentContactReference,
  AgentStatusIdentifier,
  AgentStatusReference,
  AgentStatusSummary,
  AIAgent,
  AnalyticsDataAssociationResult,
  Application,
  CreatedByInfo,
  DataTableLockVersion,
  Distribution,
  FlowAssociationSummary,
  FlowModule,
  InstanceStorageConfig,
  LexBot,
  LexV2Bot,
  OverrideTimeSlice,
  PrimaryValue,
  PrimaryValueResponse,
  QueueReference,
  SecurityProfileItem,
  TagCondition,
  UserProficiency,
} from "./models_0";
import type {
  Attribute,
  DataTableAttribute,
  EvaluationContactParticipant,
  EvaluationScore,
  ExtensionConfiguration,
  HierarchyGroupSummary,
  HoursOfOperationOverride,
  HoursOfOperationsIdentifier,
  Notification,
  TaskTemplateConstraints,
  TaskTemplateContactHooks,
  TaskTemplateDefaults,
  TaskTemplateField,
} from "./models_1";

/**
 * A data table evaluated value.
 *
 * @public
 */
export interface DataTableEvaluatedValue {
  /**
   * The value's record ID.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * The value's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The value's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value's value type.
   *
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * The value's found.
   *
   * @public
   */
  Found: boolean | undefined;

  /**
   * The value's error.
   *
   * @public
   */
  Error: boolean | undefined;

  /**
   * The value's evaluated value.
   *
   * @public
   */
  EvaluatedValue: string | undefined;
}

/**
 * @public
 */
export interface EvaluateDataTableValuesResponse {
  /**
   * A list of evaluated values with their computed results, error information, and metadata.
   *
   * @public
   */
  Values: DataTableEvaluatedValue[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Request to GetAttachedFile API.
 * @public
 */
export interface GetAttachedFileRequest {
  /**
   * The unique identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier of the attached file resource.
   *
   * @public
   */
  FileId: string | undefined;

  /**
   * Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is 300.
   *
   * @public
   */
  UrlExpiryInSeconds?: number | undefined;

  /**
   * The resource to which the attached file is (being) uploaded to. The supported resources are [Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html), [Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), and [Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
   *
   * > **Note:** This value must be a valid ARN.
   *
   * @public
   */
  AssociatedResourceArn: string | undefined;

  /**
   * Specifies how a browser handles the file at the pre-signed URL. The valid values are the following:
   *
   * - **INLINE**
   *
   *   Displays the file in the browser.
   *
   * - **ATTACHMENT**
   *
   *   Downloads the file. This is the default.
   *
   * @public
   */
  UrlContentDisposition?: ContentDisposition | undefined;
}

/**
 * Metadata used to download the attached file.
 *
 * @public
 */
export interface DownloadUrlMetadata {
  /**
   * A pre-signed URL that should be used to download the attached file.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  UrlExpiry?: string | undefined;
}

/**
 * Response from GetAttachedFile API.
 * @public
 */
export interface GetAttachedFileResponse {
  /**
   * The unique identifier of the attached file resource (ARN).
   *
   * @public
   */
  FileArn?: string | undefined;

  /**
   * The unique identifier of the attached file resource.
   *
   * @public
   */
  FileId?: string | undefined;

  /**
   * The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601 format: `yyyy-MM-ddThh:mm:ss.SSSZ`. For example, `2024-05-03T02:41:28.172Z`.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The current status of the attached file.
   *
   * @public
   */
  FileStatus?: FileStatusType | undefined;

  /**
   * A case-sensitive name of the attached file being uploaded.
   *
   * @public
   */
  FileName?: string | undefined;

  /**
   * The size of the attached file in bytes.
   *
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * The resource to which the attached file is (being) uploaded to. The supported resources are [Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html), [Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), and [Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
   *
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * The use case for the file.
   *
   * @public
   */
  FileUseCaseType?: FileUseCaseType | undefined;

  /**
   * Represents the identity that created the file.
   *
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * URL and expiry to be used when downloading the attached file.
   *
   * @public
   */
  DownloadUrlMetadata?: DownloadUrlMetadata | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, `\{ "Tags": \{"key1":"value1", "key2":"value2"\} \}`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetContactAttributesRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the initial contact.
   *
   * @public
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface GetContactAttributesResponse {
  /**
   * Information about the attributes.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Contains the details of a metric to be retrieved for a contact. Use this object to specify which contact level metrics you want to include in your GetContactMetrics request.
 *
 * @public
 */
export interface ContactMetricInfo {
  /**
   * The name of the metric to retrieve. Supported values are POSITION_IN_QUEUE (returns the contact's current position in the queue) and ESTIMATED_WAIT_TIME (returns the predicted wait time in seconds).
   *
   * @public
   */
  Name: ContactMetricName | undefined;
}

/**
 * @public
 */
export interface GetContactMetricsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * A list of contact level metrics to retrieve.Supported metrics include POSITION_IN_QUEUE (the contact's current position in the queue) and ESTIMATED_WAIT_TIME (the predicted time in seconds until the contact is connected to an agent)
   *
   * @public
   */
  Metrics: ContactMetricInfo[] | undefined;
}

/**
 * Contains the numeric value of a contact metric result.
 *
 * @public
 */
export type ContactMetricValue =
  | ContactMetricValue.NumberMember
  | ContactMetricValue.$UnknownMember;

/**
 * @public
 */
export namespace ContactMetricValue {
  /**
   * The numeric value of the metric result. For POSITION_IN_QUEUE, this represents the contact's current position in the queue (e.g., 3.00 means third in line). For ESTIMATED_WAIT_TIME, this represents the predicted wait time in seconds (e.g., 120.00 means approximately 2 minutes).
   *
   * @public
   */
  export interface NumberMember {
    Number: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Number?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Number: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the result of a requested metric for the contact. This object is returned as part of the GetContactMetrics response and includes both the metric name and its calculated value.
 *
 * @public
 */
export interface ContactMetricResult {
  /**
   * The name of the metric that was retrieved. This corresponds to the metric name specified in the request, such as POSITION_IN_QUEUE or ESTIMATED_WAIT_TIME.
   *
   * @public
   */
  Name: ContactMetricName | undefined;

  /**
   * The calculated value for the requested metric. This object contains the numeric result based on the contact's current state in the queue.
   *
   * @public
   */
  Value: ContactMetricValue | undefined;
}

/**
 * @public
 */
export interface GetContactMetricsResponse {
  /**
   * A list of metric results containing the calculated values for each requested metric. Each result includes the metric name and its corresponding value. For example, POSITION_IN_QUEUE returns a numeric value representing the contact's position in queue, and ESTIMATED_WAIT_TIME returns the predicted wait time in seconds.
   *
   * @public
   */
  MetricResults?: ContactMetricResult[] | undefined;

  /**
   * The unique identifier of the contact for which metrics were retrieved. This matches the ContactId provided in the request.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the contact for which metrics were retrieved.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetCrossRegionRoutingRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetCrossRegionRoutingResponse {
  /**
   * The list of Regions for which cross-region routing is currently disabled (isolated). When a Region appears in this list, contacts originating in that Region will not be routed to agents in other Regions, and agents in that Region will not receive contacts from other Regions.
   *
   * @public
   */
  IsolatedRegions?: string[] | undefined;
}

/**
 * Contains information about a real-time metric. For a description of each metric, see [Metrics definitions](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html) in the *Connect Customer Administrator Guide*.
 *
 * > **Important:** Only one of either the Name or MetricId is required.
 *
 * @public
 */
export interface CurrentMetric {
  /**
   * The name of the metric.
   *
   * @public
   */
  Name?: CurrentMetricName | undefined;

  /**
   * Out of the box current metrics or custom metrics can be referenced via this field. This field is a valid AWS Connect Arn or a UUID.
   *
   * @public
   */
  MetricId?: string | undefined;

  /**
   * > **Note:** The Unit parameter is not supported for custom metrics.
   *
   * The unit for the metric.
   *
   * @public
   */
  Unit?: Unit | undefined;
}

/**
 * Contains the filter to apply when retrieving metrics.
 *
 * @public
 */
export interface Filters {
  /**
   * The queues to use to filter the metrics. You should specify at least one queue, and can specify up to 100 queues per request. The `GetCurrentMetricsData` API in particular requires a queue when you include a `Filter` in your request.
   *
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * The channel to use to filter the metrics.
   *
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * A list of up to 100 routing profile IDs or ARNs.
   *
   * @public
   */
  RoutingProfiles?: string[] | undefined;

  /**
   * A list of expressions as a filter, in which an expression is an object of a step in a routing criteria. Accepts filter values up to 3,000 characters in length. Filter values are case-sensitive. JSON object key order and whitespace may be arbitrary; array order and tree structure must be preserved.
   *
   * @public
   */
  RoutingStepExpressions?: string[] | undefined;

  /**
   * A list of up to 50 agent status IDs or ARNs.
   *
   * @public
   */
  AgentStatuses?: string[] | undefined;

  /**
   * A list of up to 10 subtypes can be provided.
   *
   * @public
   */
  Subtypes?: string[] | undefined;

  /**
   * A list of up to 10 validationTestTypes can be provided.
   *
   * @public
   */
  ValidationTestTypes?: string[] | undefined;
}

/**
 * The way to sort the resulting response based on metrics. By default resources are sorted based on `AGENTS_ONLINE`, `DESCENDING`. The metric collection is sorted based on the input metrics.
 *
 * @public
 */
export interface CurrentMetricSortCriteria {
  /**
   * The current metric names.
   *
   * @public
   */
  SortByMetric?: CurrentMetricName | undefined;

  /**
   * The way to sort.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface GetCurrentMetricDataRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The filters to apply to returned metrics. You can filter up to the following limits:
   *
   * - Queues: 100
   * - Routing profiles: 100
   * - Channels: 3 (VOICE, CHAT, and TASK channels are supported.)
   * - RoutingStepExpressions: 50
   * - AgentStatuses: 50
   * - Subtypes: 10
   * - ValidationTestTypes: 10
   *
   * Metric data is retrieved only for the resources associated with the queues or routing profiles, and by any channels included in the filter. (You cannot filter by both queue AND routing profile.) You can include both resource IDs and resource ARNs in the same request.
   *
   * When using `AgentStatuses` as filter make sure Queues is added as primary filter.
   *
   * When using `Subtypes` as filter make sure Queues is added as primary filter.
   *
   * When using `ValidationTestTypes` as filter make sure Queues is added as primary filter.
   *
   * When using the `RoutingStepExpression` filter, you need to pass exactly one `QueueId`. The filter is also case sensitive so when using the `RoutingStepExpression` filter, grouping by `ROUTING_STEP_EXPRESSION` is required.
   *
   * Currently tagging is only supported on the resources that are passed in the filter.
   *
   * @public
   */
  Filters: Filters | undefined;

  /**
   * Defines the level of aggregation for metrics data by a dimension(s). Its similar to sorting items into buckets based on a common characteristic, then counting or calculating something for each bucket. For example, when grouped by `QUEUE`, the metrics returned apply to each queue rather than aggregated for all queues.
   *
   * The grouping list is an ordered list, with the first item in the list defined as the primary grouping. If no grouping is included in the request, the aggregation happens at the instance-level.
   *
   * - If you group by `CHANNEL`, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported.
   * - If you group by `AGENT_STATUS`, you must include the `QUEUE` as the primary grouping and use queue filter. When you group by `AGENT_STATUS`, the only metric available is the `AGENTS_ONLINE` metric.
   * - If you group by `SUBTYPE` or `VALIDATION_TEST_TYPE` as secondary grouping then you must include `QUEUE` as primary grouping and use Queue as filter
   * - If you group by `ROUTING_PROFILE`, you must include either a queue or routing profile filter. In addition, a routing profile filter is required for metrics `CONTACTS_SCHEDULED`, `CONTACTS_IN_QUEUE`, and `OLDEST_CONTACT_AGE`.
   * - When using the `RoutingStepExpression` filter, group by `ROUTING_STEP_EXPRESSION` is required.
   *
   * @public
   */
  Groupings?: Grouping[] | undefined;

  /**
   * The metrics to retrieve. Specify the name or metricId, and unit for each metric. The following metrics are available. For a description of all the metrics, see [Metrics definitions](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html) in the *Connect Customer Administrator Guide*.
   *
   * > **Note:** MetricId should be used to reference custom metrics or out of the box metrics as Arn. If using MetricId, the limit is 10 MetricId per request.
   *
   * - **AGENTS_AFTER_CONTACT_WORK**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [ACW](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aftercallwork-real-time)
   *
   * - **AGENTS_AVAILABLE**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Available](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#available-real-time)
   *
   * - **AGENTS_ERROR**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Error](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#error-real-time)
   *
   * - **AGENTS_NON_PRODUCTIVE**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [NPT (Non-Productive Time)](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-productive-time-real-time)
   *
   * - **AGENTS_ON_CALL**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [On contact](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#on-call-real-time)
   *
   * - **AGENTS_ON_CONTACT**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [On contact](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#on-call-real-time)
   *
   * - **AGENTS_ONLINE**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Online](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#online-real-time)
   *
   * - **AGENTS_STAFFED**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Staffed](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#staffed-real-time)
   *
   * - **CONTACTS_IN_QUEUE**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [In queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#in-queue-real-time)
   *
   * - **CONTACTS_SCHEDULED**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Scheduled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#scheduled-real-time)
   *
   * - **ESTIMATED_WAIT_TIME**
   *
   *   Unit: SECONDS
   *
   *   This metric supports filter and grouping combination only used for core routing purpose. Valid filter and grouping use cases:
   *
   *   - Filter by a list of [Queues] and a list of [Channels], group by [“QUEUE”, “CHANNEL”]
   *   - Filter by a singleton list of [Queue], a singleton list of [Channel], a list of [RoutingStepExpression], group by [“ROUTING_STEP_EXPRESSION”].
   *
   * - **OLDEST_CONTACT_AGE**
   *
   *   Unit: SECONDS
   *
   *   When you use groupings, Unit says SECONDS and the Value is returned in SECONDS.
   *
   *   When you do not use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:
   *
   *   `\{ "Metric": \{ "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" \}, "Value": 24113.0`\}
   *
   *   The actual OLDEST_CONTACT_AGE is 24 seconds.
   *
   *   When the filter `RoutingStepExpression` is used, this metric is still calculated from enqueue time. For example, if a contact that has been queued under `<Expression 1>` for 10 seconds has expired and `<Expression 2>` becomes active, then `OLDEST_CONTACT_AGE` for this queue will be counted starting from 10, not 0.
   *
   *   Name in real-time metrics report: [Oldest](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#oldest-real-time)
   *
   * - **SLOTS_ACTIVE**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Active](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#active-real-time)
   *
   * - **SLOTS_AVAILABLE**
   *
   *   Unit: COUNT
   *
   *   Name in real-time metrics report: [Availability](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#availability-real-time)
   *
   * @public
   */
  CurrentMetrics: CurrentMetric[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The way to sort the resulting response based on metrics. You can enter one sort criteria. By default resources are sorted based on `AGENTS_ONLINE`, `DESCENDING`. The metric collection is sorted based on the input metrics.
   *
   * Note the following:
   *
   * - Sorting on `SLOTS_ACTIVE` and `SLOTS_AVAILABLE` is not supported.
   *
   * @public
   */
  SortCriteria?: CurrentMetricSortCriteria[] | undefined;
}

/**
 * Contains the data for a real-time metric.
 *
 * @public
 */
export interface CurrentMetricData {
  /**
   * Information about the metric.
   *
   * @public
   */
  Metric?: CurrentMetric | undefined;

  /**
   * The value of the metric.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Information about the routing profile assigned to the user.
 *
 * @public
 */
export interface RoutingProfileReference {
  /**
   * The identifier of the routing profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the routing profile.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Contains information about the dimensions for a set of metrics.
 *
 * @public
 */
export interface Dimensions {
  /**
   * Information about the queue for which metrics are returned.
   *
   * @public
   */
  Queue?: QueueReference | undefined;

  /**
   * The channel used for grouping and filters.
   *
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * Information about the routing profile assigned to the user.
   *
   * @public
   */
  RoutingProfile?: RoutingProfileReference | undefined;

  /**
   * The expression of a step in a routing criteria.
   *
   * @public
   */
  RoutingStepExpression?: string | undefined;

  /**
   * Information about the agent status assigned to the user.
   *
   * @public
   */
  AgentStatus?: AgentStatusIdentifier | undefined;

  /**
   * The subtype of the channel used for the contact.
   *
   * @public
   */
  Subtype?: string | undefined;

  /**
   * The testing and simulation type
   *
   * @public
   */
  ValidationTestType?: string | undefined;
}

/**
 * Contains information about a set of real-time metrics.
 *
 * @public
 */
export interface CurrentMetricResult {
  /**
   * The dimensions for the metrics.
   *
   * @public
   */
  Dimensions?: Dimensions | undefined;

  /**
   * The set of metrics.
   *
   * @public
   */
  Collections?: CurrentMetricData[] | undefined;
}

/**
 * @public
 */
export interface GetCurrentMetricDataResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the real-time metrics.
   *
   * @public
   */
  MetricResults?: CurrentMetricResult[] | undefined;

  /**
   * The time at which the metrics were retrieved and cached for pagination.
   *
   * @public
   */
  DataSnapshotTime?: Date | undefined;

  /**
   * The total count of the result, regardless of the current page size.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters user data based on the contact information that is associated to the users. It contains a list of [contact states](https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html).
 *
 * @public
 */
export interface ContactFilter {
  /**
   * A list of up to 9 [contact states](https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html).
   *
   * @public
   */
  ContactStates?: ContactState[] | undefined;
}

/**
 * A filter for the user data.
 *
 * @public
 */
export interface UserDataFilters {
  /**
   * A list of up to 100 queues or ARNs.
   *
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * A filter for the user data based on the contact information that is associated to the user. It contains a list of contact states.
   *
   * @public
   */
  ContactFilter?: ContactFilter | undefined;

  /**
   * A list of up to 100 routing profile IDs or ARNs.
   *
   * @public
   */
  RoutingProfiles?: string[] | undefined;

  /**
   * A list of up to 100 agent IDs or ARNs.
   *
   * @public
   */
  Agents?: string[] | undefined;

  /**
   * A UserHierarchyGroup ID or ARN.
   *
   * @public
   */
  UserHierarchyGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserDataRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The filters to apply to returned user data. You can filter up to the following limits:
   *
   * - Queues: 100
   * - Routing profiles: 100
   * - Agents: 100
   * - Contact states: 9
   * - User hierarchy groups: 1
   *
   * The user data is retrieved for only the specified values/resources in the filter. A maximum of one filter can be passed from queues, routing profiles, agents, and user hierarchy groups.
   *
   * Currently tagging is only supported on the resources that are passed in the filter.
   *
   * @public
   */
  Filters: UserDataFilters | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about the hierarchy group.
 *
 * @public
 */
export interface HierarchyGroupSummaryReference {
  /**
   * The unique identifier for the hierarchy group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the hierarchy group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about the levels in the hierarchy group.
 *
 * @public
 */
export interface HierarchyPathReference {
  /**
   * Information about level one.
   *
   * @public
   */
  LevelOne?: HierarchyGroupSummaryReference | undefined;

  /**
   * Information about level two.
   *
   * @public
   */
  LevelTwo?: HierarchyGroupSummaryReference | undefined;

  /**
   * Information about level three.
   *
   * @public
   */
  LevelThree?: HierarchyGroupSummaryReference | undefined;

  /**
   * Information about level four.
   *
   * @public
   */
  LevelFour?: HierarchyGroupSummaryReference | undefined;

  /**
   * Information about level five.
   *
   * @public
   */
  LevelFive?: HierarchyGroupSummaryReference | undefined;
}

/**
 * Information about the user.
 *
 * @public
 */
export interface UserReference {
  /**
   * The unique identifier for the user.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the user.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Data for a user.
 *
 * @public
 */
export interface UserData {
  /**
   * Information about the user for the data that is returned. It contains the `resourceId` and ARN of the user.
   *
   * @public
   */
  User?: UserReference | undefined;

  /**
   * Information about the routing profile that is assigned to the user.
   *
   * @public
   */
  RoutingProfile?: RoutingProfileReference | undefined;

  /**
   * Contains information about the levels of a hierarchy group assigned to a user.
   *
   * @public
   */
  HierarchyPath?: HierarchyPathReference | undefined;

  /**
   * The status of the agent that they manually set in their Contact Control Panel (CCP), or that the supervisor manually changes in the real-time metrics report.
   *
   * @public
   */
  Status?: AgentStatusReference | undefined;

  /**
   * A map of available slots by channel. The key is a channel name. The value is an integer: the available number of slots.
   *
   * @public
   */
  AvailableSlotsByChannel?: Partial<Record<Channel, number>> | undefined;

  /**
   * A map of maximum slots by channel. The key is a channel name. The value is an integer: the maximum number of slots. This is calculated from [MediaConcurrency](https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html) of the `RoutingProfile` assigned to the agent.
   *
   * @public
   */
  MaxSlotsByChannel?: Partial<Record<Channel, number>> | undefined;

  /**
   * A map of active slots by channel. The key is a channel name. The value is an integer: the number of active slots.
   *
   * @public
   */
  ActiveSlotsByChannel?: Partial<Record<Channel, number>> | undefined;

  /**
   * A list of contact reference information.
   *
   * @public
   */
  Contacts?: AgentContactReference[] | undefined;

  /**
   * The Next status of the agent.
   *
   * @public
   */
  NextStatus?: string | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserDataResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the user data that is returned.
   *
   * @public
   */
  UserDataList?: UserData[] | undefined;

  /**
   * The total count of the result, regardless of the current page size.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface GetEffectiveHoursOfOperationsRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The date from when the hours of operation are listed.
   *
   * @public
   */
  FromDate: string | undefined;

  /**
   * The date until when the hours of operation are listed.
   *
   * @public
   */
  ToDate: string | undefined;
}

/**
 * Information about the hours of operations with the effective override applied.
 *
 * @public
 */
export interface OperationalHour {
  /**
   * The start time that your contact center opens.
   *
   * @public
   */
  Start?: OverrideTimeSlice | undefined;

  /**
   * The end time that your contact center closes.
   *
   * @public
   */
  End?: OverrideTimeSlice | undefined;
}

/**
 * Information about the hours of operations with the effective override applied.
 *
 * @public
 */
export interface EffectiveHoursOfOperations {
  /**
   * The date that the hours of operation or overrides applies to.
   *
   * @public
   */
  Date?: string | undefined;

  /**
   * Information about the hours of operations with the effective override applied.
   *
   * @public
   */
  OperationalHours?: OperationalHour[] | undefined;
}

/**
 * Information about hours of operation override
 *
 * @public
 */
export interface OverrideHour {
  /**
   * The start time or end time for an hours of operation override.
   *
   * @public
   */
  Start?: OverrideTimeSlice | undefined;

  /**
   * The start time or end time for an hours of operation override.
   *
   * @public
   */
  End?: OverrideTimeSlice | undefined;

  /**
   * Unique identifier name for the override.
   *
   * @public
   */
  OverrideName?: string | undefined;

  /**
   * Indicates whether the status is open or closed during the override period. This status determines how the override modifies the base hours of operation schedule.
   *
   * @public
   */
  OperationalStatus?: OperationalStatus | undefined;
}

/**
 * Information about the hours of operation overrides which contribute to effective hours of operations.
 *
 * @public
 */
export interface EffectiveOverrideHours {
  /**
   * The date that the hours of operation override applies to.
   *
   * @public
   */
  Date?: string | undefined;

  /**
   * Information about the hours of operation overrides that apply to a specific date.
   *
   * @public
   */
  OverrideHours?: OverrideHour[] | undefined;
}

/**
 * @public
 */
export interface GetEffectiveHoursOfOperationsResponse {
  /**
   * Information about the effective hours of operations.
   *
   * @public
   */
  EffectiveHoursOfOperationList?: EffectiveHoursOfOperations[] | undefined;

  /**
   * Information about override configurations applied to the base hours of operation to calculate the effective hours.
   *
   * For more information about how override types are applied, see [Build your list of overrides](https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html) in the *Administrator Guide*.
   *
   * @public
   */
  EffectiveOverrideHoursList?: EffectiveOverrideHours[] | undefined;

  /**
   * The time zone for the hours of operation.
   *
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * @public
 */
export interface GetEvaluationFormValidationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The version of the evaluation form to retrieve validation results for.
   *
   * @public
   */
  EvaluationFormVersion?: number | undefined;
}

/**
 * Information about an evaluation form item affected by a validation finding.
 *
 * @public
 */
export interface EvaluationFormValidationFindingItem {
  /**
   * The identifier of the evaluation form item (question or section) affected by the finding.
   *
   * @public
   */
  RefId?: string | undefined;

  /**
   * The specific property of the evaluation form item that the finding relates to.
   *
   * @public
   */
  Property?: string | undefined;
}

/**
 * Information about a finding from the evaluation form validation process. Each finding identifies a structural issue or quality improvement opportunity for the evaluation form.
 *
 * @public
 */
export interface EvaluationFormValidationFinding {
  /**
   * A code that identifies the type of validation issue found.
   *
   * @public
   */
  IssueCode: string | undefined;

  /**
   * A list of evaluation form items affected by this finding.
   *
   * @public
   */
  Items?: EvaluationFormValidationFindingItem[] | undefined;

  /**
   * A description of the validation issue.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A suggested fix for the validation issue.
   *
   * @public
   */
  Suggestion?: string | undefined;

  /**
   * The severity of the finding. Valid values: `WARNING`, `ERROR`.
   *
   * @public
   */
  Severity: EvaluationFormValidationFindingSeverity | undefined;
}

/**
 * @public
 */
export interface GetEvaluationFormValidationResponse {
  /**
   * The current status of the validation process. Valid values: `IN_PROGRESS`, `COMPLETED`, `FAILED`.
   *
   * @public
   */
  Status: EvaluationFormValidationStatus | undefined;

  /**
   * The reason the validation failed. This field is populated only when the status is `FAILED`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * The timestamp when the validation process was started.
   *
   * @public
   */
  StartedTime: Date | undefined;

  /**
   * A list of findings from the validation process. Each finding identifies a structural issue or quality improvement for the evaluation form, and may include a suggested fix. This field is populated when the status is `COMPLETED`.
   *
   * @public
   */
  Findings?: EvaluationFormValidationFinding[] | undefined;
}

/**
 * @public
 */
export interface GetFederationTokenRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * Contains credentials to use for federation.
 *
 * @public
 */
export interface Credentials {
  /**
   * An access token generated for a federated user to access Connect Customer.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * A token generated with an expiration time for the session a user is logged in to Connect Customer.
   *
   * @public
   */
  AccessTokenExpiration?: Date | undefined;

  /**
   * Renews a token generated for a user to access the Connect Customer instance.
   *
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * Renews the expiration timer for a generated token.
   *
   * @public
   */
  RefreshTokenExpiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetFederationTokenResponse {
  /**
   * The identifier for the user. This can be the ID or the ARN of the user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * @public
   */
  UserArn?: string | undefined;

  /**
   * The credentials to use for federation.
   *
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * The URL to sign into the user's instance.
   *
   * @public
   */
  SignInUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetFlowAssociationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the resource.
   *
   * - Amazon Web Services End User Messaging SMS phone number ARN when using `SMS_PHONE_NUMBER`
   * - Amazon Web Services End User Messaging Social phone number ARN when using `WHATSAPP_MESSAGING_PHONE_NUMBER`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface GetFlowAssociationResponse {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  FlowId?: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType?: FlowAssociationResourceType | undefined;
}

/**
 * Contains information about the threshold for service level metrics.
 *
 * @public
 */
export interface Threshold {
  /**
   * The type of comparison. Only "less than" (LT) comparisons are supported.
   *
   * @public
   */
  Comparison?: Comparison | undefined;

  /**
   * The threshold value to compare.
   *
   * @public
   */
  ThresholdValue?: number | undefined;
}

/**
 * Contains information about a historical metric.
 *
 * @public
 */
export interface HistoricalMetric {
  /**
   * The name of the metric. Following is a list of each supported metric mapped to the UI name, linked to a detailed description in the *Connect Customer Administrator Guide*.
   *
   * - **ABANDON_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average queue abandon time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time)
   *
   * - **AFTER_CONTACT_WORK_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [After contact work time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time)
   *
   * - **API_CONTACTS_HANDLED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [API contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#api-contacts-handled)
   *
   * - **AVG_HOLD_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time)
   *
   * - **CALLBACK_CONTACTS_HANDLED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Callback contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-contacts-handled)
   *
   * - **CONTACTS_ABANDONED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts abandoned](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned)
   *
   * - **CONTACTS_AGENT_HUNG_UP_FIRST**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts agent hung up first](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-agent-hung-up-first)
   *
   * - **CONTACTS_CONSULTED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts consulted](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-consulted)
   *
   * - **CONTACTS_HANDLED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled)
   *
   * - **CONTACTS_HANDLED_INCOMING**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts handled incoming](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-incoming)
   *
   * - **CONTACTS_HANDLED_OUTBOUND**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts handled outbound](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-outbound)
   *
   * - **CONTACTS_HOLD_ABANDONS**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts hold disconnect](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect)
   *
   * - **CONTACTS_MISSED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [AGENT_NON_RESPONSE](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response)
   *
   * - **CONTACTS_QUEUED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts queued](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued)
   *
   * - **CONTACTS_TRANSFERRED_IN**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred in](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-in)
   *
   * - **CONTACTS_TRANSFERRED_IN_FROM_QUEUE**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred out queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue)
   *
   * - **CONTACTS_TRANSFERRED_OUT**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred out](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out)
   *
   * - **CONTACTS_TRANSFERRED_OUT_FROM_QUEUE**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred out queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue)
   *
   * - **HANDLE_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average handle time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time)
   *
   * - **INTERACTION_AND_HOLD_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average agent interaction and customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time)
   *
   * - **INTERACTION_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average agent interaction time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aaverage-agent-interaction-time)
   *
   * - **OCCUPANCY**
   *
   *   Unit: PERCENT
   *
   *   Statistic: AVG
   *
   *   UI name: [Occupancy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy)
   *
   * - **QUEUE_ANSWER_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average queue answer time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html##average-queue-answer-time)
   *
   * - **QUEUED_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: MAX
   *
   *   UI name: [Minimum flow time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time)
   *
   * - **SERVICE_LEVEL**
   *
   *   You can include up to 20 SERVICE_LEVEL metrics in a request.
   *
   *   Unit: PERCENT
   *
   *   Statistic: AVG
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you must enter `LT` (for "Less than").
   *
   *   UI name: [Service level X](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#service-level)
   *
   * @public
   */
  Name?: HistoricalMetricName | undefined;

  /**
   * The threshold for the metric, used with service level metrics.
   *
   * @public
   */
  Threshold?: Threshold | undefined;

  /**
   * The statistic for the metric.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The unit for the metric.
   *
   * @public
   */
  Unit?: Unit | undefined;
}

/**
 * @public
 */
export interface GetMetricDataRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.
   *
   * The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.
   *
   * The time range between the start and end time must be less than 24 hours.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.
   *
   * RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to GetMetricDataV2 for more up-to-date features.
   *
   * > **Note:** To filter by `Queues`, enter the queue ID/ARN, not the name of the queue.
   *
   * @public
   */
  Filters: Filters | undefined;

  /**
   * The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues.
   *
   * If no grouping is specified, a summary of metrics for all queues is returned.
   *
   * RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to GetMetricDataV2 for more up-to-date features.
   *
   * @public
   */
  Groupings?: Grouping[] | undefined;

  /**
   * The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see [Metrics definition](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html) in the *Connect Customer Administrator Guide*.
   *
   * > **Note:** This API does not support a contacts incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list).
   *
   * - **ABANDON_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average queue abandon time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time)
   *
   * - **AFTER_CONTACT_WORK_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [After contact work time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time)
   *
   * - **API_CONTACTS_HANDLED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [API contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#api-contacts-handled)
   *
   * - **AVG_HOLD_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time)
   *
   * - **CALLBACK_CONTACTS_HANDLED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Callback contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-contacts-handled)
   *
   * - **CONTACTS_ABANDONED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts abandoned](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned)
   *
   * - **CONTACTS_AGENT_HUNG_UP_FIRST**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts agent hung up first](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-agent-hung-up-first)
   *
   * - **CONTACTS_CONSULTED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts consulted](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-consulted)
   *
   * - **CONTACTS_HANDLED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled)
   *
   * - **CONTACTS_HANDLED_INCOMING**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts handled incoming](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-incoming)
   *
   * - **CONTACTS_HANDLED_OUTBOUND**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts handled outbound](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-outbound)
   *
   * - **CONTACTS_HOLD_ABANDONS**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts hold disconnect](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect)
   *
   * - **CONTACTS_MISSED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [AGENT_NON_RESPONSE](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response)
   *
   * - **CONTACTS_QUEUED**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts queued](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued)
   *
   * - **CONTACTS_TRANSFERRED_IN**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred in](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-in)
   *
   * - **CONTACTS_TRANSFERRED_IN_FROM_QUEUE**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred out queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue)
   *
   * - **CONTACTS_TRANSFERRED_OUT**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred out](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out)
   *
   * - **CONTACTS_TRANSFERRED_OUT_FROM_QUEUE**
   *
   *   Unit: COUNT
   *
   *   Statistic: SUM
   *
   *   UI name: [Contacts transferred out queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue)
   *
   * - **HANDLE_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average handle time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time)
   *
   * - **INTERACTION_AND_HOLD_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average agent interaction and customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time)
   *
   * - **INTERACTION_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average agent interaction time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aaverage-agent-interaction-time)
   *
   * - **OCCUPANCY**
   *
   *   Unit: PERCENT
   *
   *   Statistic: AVG
   *
   *   UI name: [Occupancy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy)
   *
   * - **QUEUE_ANSWER_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: AVG
   *
   *   UI name: [Average queue answer time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html##average-queue-answer-time)
   *
   * - **QUEUED_TIME**
   *
   *   Unit: SECONDS
   *
   *   Statistic: MAX
   *
   *   UI name: [Minimum flow time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time)
   *
   * - **SERVICE_LEVEL**
   *
   *   You can include up to 20 SERVICE_LEVEL metrics in a request.
   *
   *   Unit: PERCENT
   *
   *   Statistic: AVG
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you must enter `LT` (for "Less than").
   *
   *   UI name: [Average queue abandon time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time)
   *
   * @public
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the data for a historical metric.
 *
 * @public
 */
export interface HistoricalMetricData {
  /**
   * Information about the metric.
   *
   * @public
   */
  Metric?: HistoricalMetric | undefined;

  /**
   * The value of the metric.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Contains information about the historical metrics retrieved.
 *
 * @public
 */
export interface HistoricalMetricResult {
  /**
   * The dimension for the metrics.
   *
   * @public
   */
  Dimensions?: Dimensions | undefined;

  /**
   * The set of metrics.
   *
   * @public
   */
  Collections?: HistoricalMetricData[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the historical metrics.
   *
   * If no grouping is specified, a summary of metric data is returned.
   *
   * @public
   */
  MetricResults?: HistoricalMetricResult[] | undefined;
}

/**
 * System defined filtering condition. For example, the NOT_EXISTS StringCondition returns documents where the field specified by FilterKey does not exist in the document.
 *
 * When the NOT_EXISTS StringCondition is added to a FilterV2 object, FilterValues must be null or empty.
 *
 * @public
 */
export interface FilterV2StringCondition {
  /**
   * The string condition.
   *
   * @public
   */
  Comparison?: FilterV2StringConditionComparisonOperator | undefined;
}

/**
 * Contains the filter to apply when retrieving metrics with the [GetMetricDataV2](https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html) API.
 *
 * @public
 */
export interface FilterV2 {
  /**
   * The key to use for filtering data. For example, `QUEUE`, `ROUTING_PROFILE, AGENT`, `CHANNEL`, `AGENT_HIERARCHY_LEVEL_ONE`, `AGENT_HIERARCHY_LEVEL_TWO`, `AGENT_HIERARCHY_LEVEL_THREE`, `AGENT_HIERARCHY_LEVEL_FOUR`, `AGENT_HIERARCHY_LEVEL_FIVE`. There must be at least 1 key and a maximum 5 keys.
   *
   * @public
   */
  FilterKey?: string | undefined;

  /**
   * The identifiers to use for filtering data. For example, if you have a filter key of `QUEUE`, you would add queue IDs or ARNs in `FilterValues`.
   *
   * @public
   */
  FilterValues?: string[] | undefined;

  /**
   * System defined filtering condition. For example, the NOT_EXISTS StringCondition returns documents where the field specified by FilterKey does not exist in the document.
   *
   * When the NOT_EXISTS StringCondition is added to a FilterV2 object, FilterValues must be null or empty.
   *
   * @public
   */
  StringCondition?: FilterV2StringCondition | undefined;
}

/**
 * Information about the interval period to use for returning results.
 *
 * @public
 */
export interface IntervalDetails {
  /**
   * The timezone applied to requested metrics.
   *
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * `IntervalPeriod`: An aggregated grouping applied to request metrics. Valid `IntervalPeriod` values are: `FIFTEEN_MIN` | `THIRTY_MIN` | `HOUR` | `DAY` | `WEEK` | `TOTAL`.
   *
   * For example, if `IntervalPeriod` is selected `THIRTY_MIN`, `StartTime` and `EndTime` differs by 1 day, then Connect Customer returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By default Connect Customer aggregates results based on the `TOTAL` interval period.
   *
   * The following list describes restrictions on `StartTime` and `EndTime` based on what `IntervalPeriod` is requested.
   *
   * - `FIFTEEN_MIN`: The difference between `StartTime` and `EndTime` must be less than 3 days.
   * - `THIRTY_MIN`: The difference between `StartTime` and `EndTime` must be less than 3 days.
   * - `HOUR`: The difference between `StartTime` and `EndTime` must be less than 3 days.
   * - `DAY`: The difference between `StartTime` and `EndTime` must be less than 35 days.
   * - `WEEK`: The difference between `StartTime` and `EndTime` must be less than 35 days.
   * - `TOTAL`: The difference between `StartTime` and `EndTime` must be less than 35 days.
   *
   * @public
   */
  IntervalPeriod?: IntervalPeriod | undefined;
}

/**
 * Contains information about the filter used when retrieving metrics. `MetricFiltersV2` can be used on the following metrics: `AVG_AGENT_CONNECTING_TIME`, `CONTACTS_CREATED`, `CONTACTS_HANDLED`, `SUM_CONTACTS_DISCONNECTED`.
 *
 * @public
 */
export interface MetricFilterV2 {
  /**
   * The key to use for filtering data.
   *
   * Valid metric filter keys:
   *
   * - ANSWERING_MACHINE_DETECTION_STATUS
   * - CASE_STATUS
   * - DISCONNECT_REASON
   * - FLOWS_ACTION_IDENTIFIER
   * - FLOWS_NEXT_ACTION_IDENTIFIER
   * - FLOWS_OUTCOME_TYPE
   * - FLOWS_RESOURCE_TYPE
   * - INITIATION_METHOD
   *
   * @public
   */
  MetricFilterKey?: string | undefined;

  /**
   * The values to use for filtering data. Values for metric-level filters can be either a fixed set of values or a customized list, depending on the use case.
   *
   * For valid values of metric-level filters `INITIATION_METHOD`, `DISCONNECT_REASON`, and `ANSWERING_MACHINE_DETECTION_STATUS`, see [ContactTraceRecord](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord) in the *Connect Customer Administrator Guide*.
   *
   * For valid values of the metric-level filter `FLOWS_OUTCOME_TYPE`, see the description for the [Flow outcome](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome) metric in the *Connect Customer Administrator Guide*.
   *
   * For valid values of the metric-level filter `BOT_CONVERSATION_OUTCOME_TYPE`, see the description for the [Bot conversations completed](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-conversations-completed-metric) in the *Connect Customer Administrator Guide*.
   *
   * For valid values of the metric-level filter `BOT_INTENT_OUTCOME_TYPE`, see the description for the [Bot intents completed](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-intents-completed-metric) metric in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  MetricFilterValues?: string[] | undefined;

  /**
   * If set to `true`, the API response contains results that filter out the results matched by the metric-level filters condition. By default, `Negate` is set to `false`.
   *
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * Contains information about the threshold for service level metrics.
 *
 * @public
 */
export interface ThresholdV2 {
  /**
   * The type of comparison. Currently, "less than" (LT), "less than equal" (LTE), and "greater than" (GT) comparisons are supported.
   *
   * @public
   */
  Comparison?: string | undefined;

  /**
   * The threshold value to compare.
   *
   * @public
   */
  ThresholdValue?: number | undefined;
}

/**
 * Contains information about the metric.
 *
 * > **Important:** Only one of either the Name or MetricId is required.
 *
 * @public
 */
export interface MetricV2 {
  /**
   * The name of the metric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Contains information about the threshold for service level metrics.
   *
   * @public
   */
  Threshold?: ThresholdV2[] | undefined;

  /**
   * Historical metrics or custom metrics can be referenced via this field. This field is a valid Connect Customer Arn or a UUID
   *
   * @public
   */
  MetricId?: string | undefined;

  /**
   * Contains the filters to be used when returning data.
   *
   * @public
   */
  MetricFilters?: MetricFilterV2[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataV2Request {
  /**
   * The Amazon Resource Name (ARN) of the resource. This includes the `instanceId` an Connect Customer instance.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be before the end time timestamp. The start and end time depends on the `IntervalPeriod` selected. By default the time range between start and end time is 35 days. Historical metrics are available for 3 months.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be later than the start time timestamp. It cannot be later than the current timestamp.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The interval period and timezone to apply to returned metrics.
   *
   * - `IntervalPeriod`: An aggregated grouping applied to request metrics. Valid `IntervalPeriod` values are: `FIFTEEN_MIN` | `THIRTY_MIN` | `HOUR` | `DAY` | `WEEK` | `TOTAL`.
   *
   *   For example, if `IntervalPeriod` is selected `THIRTY_MIN`, `StartTime` and `EndTime` differs by 1 day, then Connect Customer returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By default Connect Customer aggregates results based on the `TOTAL` interval period.
   *
   *   The following list describes restrictions on `StartTime` and `EndTime` based on which `IntervalPeriod` is requested.
   *
   *   - `FIFTEEN_MIN`: The difference between `StartTime` and `EndTime` must be less than 3 days.
   *   - `THIRTY_MIN`: The difference between `StartTime` and `EndTime` must be less than 3 days.
   *   - `HOUR`: The difference between `StartTime` and `EndTime` must be less than 3 days.
   *   - `DAY`: The difference between `StartTime` and `EndTime` must be less than 35 days.
   *   - `WEEK`: The difference between `StartTime` and `EndTime` must be less than 35 days.
   *   - `TOTAL`: The difference between `StartTime` and `EndTime` must be less than 35 days.
   * - `TimeZone`: The timezone applied to requested metrics.
   *
   * @public
   */
  Interval?: IntervalDetails | undefined;

  /**
   * Filtering is an operation that selects records that match a set of specified criteria. By narrowing the dataset before aggregation, filters ensure that only relevant records are included in the computation.
   *
   * **Filter keys**
   *
   * The following are valid filter keys for a `GetMetricDataV2` request:
   *
   * `AGENT` | `AI_AGENT` | `AI_AGENT_ID` | `AI_AGENT_NAME` | `AI_AGENT_NAME_VERSION` | `AI_AGENT_TYPE` | `AI_PROMPT` | `AI_PROMPT_ID` | `AI_PROMPT_NAME` | `AI_PROMPT_TYPE` | `AI_TOOL_ID` | `AI_TOOL_NAME` | `AI_TOOL_TYPE` | `AI_USE_CASE` | `AGENT_HIERARCHY_LEVEL_ONE` | `AGENT_HIERARCHY_LEVEL_TWO` | `AGENT_HIERARCHY_LEVEL_THREE` | `AGENT_HIERARCHY_LEVEL_FOUR` | `AGENT_HIERARCHY_LEVEL_FIVE` | `ANSWERING_MACHINE_DETECTION_STATUS` | `BOT_ALIAS` | `BOT_ID` | `BOT_INTENT_NAME` | `BOT_LOCALE` | `BOT_VERSION` | `BROWSER_NAME` | `CAMPAIGN` | `CAMPAIGN_DELIVERY_EVENT_TYPE` | `CAMPAIGN_EXCLUDED_EVENT_TYPE` | `CASE_STATUS` | `CASE_TEMPLATE_ARN` | `CHANNEL` | `contact/segmentAttributes/connect:Subtype` | `contact/segmentAttributes/connect:ValidationTestType` | `DEVICE_MODEL` | `DEVICE_TYPE` | `DISCONNECT_REASON` | `EVALUATION_FORM` | `EVALUATION_QUESTION` | `EVALUATION_SECTION` | `EVALUATION_SOURCE` | `EVALUATOR_ID` | `FEATURE` | `FLOW_ACTION_ID` | `FLOW_TYPE` | `FLOWS_MODULE_RESOURCE_ID` | `FLOWS_NEXT_RESOURCE_ID` | `FLOWS_NEXT_RESOURCE_QUEUE_ID` | `FLOWS_OUTCOME_TYPE` | `FLOWS_RESOURCE_ID` | `FORM_VERSION` | `INITIATING_FLOW` | `INITIATION_METHOD` | `INVOKING_RESOURCE_PUBLISHED_TIMESTAMP` | `INVOKING_RESOURCE_TYPE` | `KNOWLEDGE_BASE_NAME` | `LIFETIME_VALUE` | `PARENT_FLOWS_RESOURCE_ID` | `Q_CONNECT_ENABLED` | `QUEUE` | `REPEAT_CALLER` | `RESOURCE_PUBLISHED_TIMESTAMP` | `ROUTING_PROFILE` | `ROUTING_STEP_EXPRESSION` | `SESSION_ID` | `TEST_CASE` | `TEST_CASE_EXECUTION_FAILURE_REASON` | `TEST_CASE_EXECUTION_RESULT` | `TEST_CASE_EXECUTION_STATE` | `WEB_NOTIFICATION_TYPE`
   *
   * > **Note:**
   * >
   * > The following filter keys correspond to Connect Customer resources and are used for authorizing requests. A `GetMetricDataV2` request requires at least one of these filters:
   * >
   * > `QUEUE`, `ROUTING_PROFILE`, `AGENT`, `AGENT_HIERARCHY_LEVEL_ONE`, `AGENT_HIERARCHY_LEVEL_TWO`, `AGENT_HIERARCHY_LEVEL_THREE`, `AGENT_HIERARCHY_LEVEL_FOUR`, `AGENT_HIERARCHY_LEVEL_FIVE`, `CAMPAIGN`, `EVALUATION_FORM`, `EVALUATOR_ID`
   * >
   * > You can use up to 5 filter keys in a single request, and up to 100 filter values across all filter keys.
   *
   * **Filter values**
   *
   * - VOICE, CHAT, TASK, and EMAIL are valid filter values for the `CHANNEL` filter key. They do not count towards the limit of 100 filter values. For example, a `GetMetricDataV2` request can filter by 50 queues, 35 agents, and 15 routing profiles for a total of 100 filter values, along with 4 channel filters.
   * - `contact_lens_conversational_analytics` is a valid filter value for the `FEATURE` filter key. It is available only for contacts analyzed by Contact Lens conversational analytics.
   * - `connect:Chat`, `connect:SMS`, `connect:Telephony`, and `connect:WebRTC` are valid filter value examples (not exhaustive) for the `contact/segmentAttributes/connect:Subtype` filter key.
   * - `ROUTING_STEP_EXPRESSION` accepts a filter value up to 3,000 characters in length. Filter values are case-sensitive. JSON object key order and whitespace may be arbitrary; array order and tree structure must be preserved.
   * - TRUE and FALSE are the only valid filter values for the `Q_CONNECT_ENABLED` filter key.
   *
   *   - TRUE includes all contacts that had Connect AI Agents enabled as part of the flow.
   *   - FALSE includes all contacts that did not have Connect AI Agents enabled as part of the flow.
   * - `EXPERIENCE_VALIDATION` and `FLOW_VALIDATION` are the only valid filter values for the `contact/segmentAttributes/connect:ValidationTestType` filter key. This filter is available only for contact record-driven metrics.
   * - [Campaign](https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-outbound-campaigns_Campaign.html) ARNs are valid filter values for the `CAMPAIGN` filter key.
   * - To filter by phone number, see [Create a historical metrics report](https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html) in the *Connect Customer Administrator Guide*.
   * - `LIFETIME_VALUE` filters and groups by customer lifetime value segment (High lifetime value, Medium lifetime value, Low lifetime value). For more information about the calculated attributes that drive these segments, see [Default calculated attributes](https://docs.aws.amazon.com/connect/latest/adminguide/customerprofiles-default-calculated-attributes.html) in the *Connect Customer Administrator Guide*.
   * - `REPEAT_CALLER` filters and groups by repeat caller status.
   * - The `LIFETIME_VALUE` and `REPEAT_CALLER` filters and groupings use customer segment data from Customer Profiles. For more information, see [Default segments](https://docs.aws.amazon.com/connect/latest/adminguide/customerprofiles-default-segments.html) in the *Connect Customer Administrator Guide*.
   *
   * > **Note:** To use the `LIFETIME_VALUE` and `REPEAT_CALLER` filters and groupings, users must have the **Customer segments - View** permission enabled in their security profile. For more information, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html#customerprofiles-permissions-list) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Filters: FilterV2[] | undefined;

  /**
   * The grouping applied to the metrics that are returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values that are returned apply to the metrics for each queue. They are not aggregated for all queues.
   *
   * If no grouping is specified, a summary of all metrics is returned.
   *
   * Valid grouping keys: `AGENT` | `AI_AGENT` | `AI_AGENT_ID` | `AI_AGENT_NAME` | `AI_AGENT_NAME_VERSION` | `AI_AGENT_TYPE` | `AI_PROMPT` | `AI_PROMPT_ID` | `AI_PROMPT_NAME` | `AI_PROMPT_NAME_VERSION` | `AI_PROMPT_TYPE` | `AI_TOOL_ID` | `AI_TOOL_NAME` | `AI_TOOL_TYPE` | `AI_USE_CASE` | `AGENT_HIERARCHY_LEVEL_ONE` | `AGENT_HIERARCHY_LEVEL_TWO` | `AGENT_HIERARCHY_LEVEL_THREE` | `AGENT_HIERARCHY_LEVEL_FOUR` | `AGENT_HIERARCHY_LEVEL_FIVE` | `ANSWERING_MACHINE_DETECTION_STATUS` | `BOT_ID` | `BOT_ALIAS` | `BOT_VERSION` | `BOT_LOCALE` | `BOT_INTENT_NAME` | `BROWSER_NAME` | `CAMPAIGN` | `CAMPAIGN_DELIVERY_EVENT_TYPE` | `CAMPAIGN_EXCLUDED_EVENT_TYPE` | `CAMPAIGN_EXECUTION_TIMESTAMP` | `CASE_TEMPLATE_ARN` | `CASE_STATUS` | `CHANNEL` | `contact/segmentAttributes/connect:Subtype` | `DEVICE_MODEL` | `DEVICE_TYPE` | `DISCONNECT_REASON` | `EVALUATION_FORM` | `EVALUATION_SECTION` | `EVALUATION_QUESTION` | `EVALUATION_SOURCE` | `EVALUATOR_ID` | `FLOWS_RESOURCE_ID` | `FLOWS_MODULE_RESOURCE_ID` | `FLOW_ACTION_ID` | `FLOW_TYPE` | `FLOWS_OUTCOME_TYPE` | `FORM_VERSION` | `INITIATION_METHOD` | `INVOKING_RESOURCE_PUBLISHED_TIMESTAMP` | `INVOKING_RESOURCE_TYPE` | `KNOWLEDGE_ARTICLE_NAME` | `KNOWLEDGE_BASE_NAME` | `LIFETIME_VALUE` | `PARENT_FLOWS_RESOURCE_ID` | `Q_CONNECT_ENABLED` | `QUEUE` | `REPEAT_CALLER` | `RESOURCE_PUBLISHED_TIMESTAMP` | `ROUTING_PROFILE` | `ROUTING_STEP_EXPRESSION` | `SESSION_ID` | `TEST_CASE` | `TEST_CASE_EXECUTION_FAILURE_REASON` | `TEST_CASE_INVOCATION_METHOD` | `WEB_NOTIFICATION_TYPE`
   *
   * > **Note:** `AI_PROMPT_NAME_VERSION` and `KNOWLEDGE_ARTICLE_NAME` are valid groupings but not valid filters.
   *
   * API, SCHEDULE, and EVENT are the only valid filterValues for TEST_CASE_INVOCATION_METHOD.
   *
   * OBSERVE_EVENT, SEND_INSTRUCTION, ASSERT_DATA, and OVERRIDE_SYSTEM_BEHAVIOR are the only valid filterValues for TEST_CASE_EXECUTION_FAILURE_REASON
   *
   * Type: Array of strings
   *
   * Array Members: Maximum number of 4 items
   *
   * Required: No
   *
   * @public
   */
  Groupings?: string[] | undefined;

  /**
   * The metrics to retrieve. Specify the name or metricId, groupings, and filters for each metric. The following historical metrics are available. For a description of each metric, see [Metrics definition](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html) in the *Connect Customer Administrator Guide*.
   *
   * > **Note:** MetricId should be used to reference custom metrics or out of the box metrics as Arn. If using MetricId, the limit is 20 MetricId per request.
   *
   * - **ABANDONMENT_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Abandonment rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#abandonment-rate)
   *
   * - **AGENT_ADHERENT_TIME**
   *
   *   This metric is available only in Amazon Web Services Regions where [Forecasting, capacity planning, and scheduling](https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region) is available.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Adherent time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#adherent-time)
   *
   * - **AGENT_ANSWER_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent answer rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-answer-rate)
   *
   * - **AGENT_NON_ADHERENT_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Non-adherent time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-adherent-time)
   *
   * - **AGENT_NON_RESPONSE**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent non-response](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response)
   *
   * - **AGENT_NON_RESPONSE_WITHOUT_CUSTOMER_ABANDONS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   Data for this metric is available starting from October 1, 2023 0:00:00 GMT.
   *
   *   UI name: [Agent non-response without customer abandons](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response-without-customer-abandons)
   *
   * - **AGENT_OCCUPANCY**
   *
   *   Unit: Percentage
   *
   *   Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Occupancy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy)
   *
   * - **AGENT_SCHEDULE_ADHERENCE**
   *
   *   This metric is available only in Amazon Web Services Regions where [Forecasting, capacity planning, and scheduling](https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region) is available.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Adherence](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#adherence)
   *
   * - **AGENT_SCHEDULED_TIME**
   *
   *   This metric is available only in Amazon Web Services Regions where [Forecasting, capacity planning, and scheduling](https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region) is available.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Scheduled time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#scheduled-time)
   *
   * - **AVG_ABANDON_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   Valid metric filter key: `INITIATION_METHOD`
   *
   *   UI name: [Average queue abandon time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time)
   *
   * - **AVG_ACTIVE_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Average active time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-active-time)
   *
   * - **AVG_AFTER_CONTACT_WORK_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid metric filter key: `INITIATION_METHOD`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average after contact work time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **AVG_AGENT_CONCURRENCY**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Average agent concurrency](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-concurrency)
   *
   * - **AVG_AGENT_CONNECTING_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid metric filter key: `INITIATION_METHOD`. For now, this metric only supports the following as `INITIATION_METHOD`: `INBOUND` | `OUTBOUND` | `CALLBACK` | `API`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Average agent API connecting time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-api-connecting-time)
   *
   *   > **Note:** The `Negate` key in metric-level filters is not applicable for this metric.
   *
   * - **AVG_AGENT_PAUSE_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Average agent pause time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-pause-time)
   *
   * - **AVG_BOT_CONVERSATION_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID
   *
   *   UI name: [Average bot conversation time](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#average-bot-conversation-time)
   *
   * - **AVG_BOT_CONVERSATION_TURNS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID
   *
   *   UI name: [Average bot conversation turns](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#average-bot-conversation-turns)
   *
   * - **AVG_CASE_RELATED_CONTACTS**
   *
   *   Unit: Count
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Average contacts per case](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-contacts-per-case)
   *
   * - **AVG_CASE_RESOLUTION_TIME**
   *
   *   Unit: Seconds
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Average case resolution time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-case-resolution-time)
   *
   * - **AVG_CONTACT_DURATION**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average contact duration](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-contact-duration)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **AVG_CONTACT_FIRST_RESPONSE_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Agent average contact first response wait time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-average-contact-first-response-wait-time)
   *
   * - **AVG_CONVERSATION_CLOSE_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average conversation close time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-conversation-close-time)
   *
   * - **AVG_CONVERSATION_DURATION**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average conversation duration](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-conversation-duration)
   *
   * - **AVG_DIALS_PER_MINUTE**
   *
   *   This metric is available only for outbound campaigns that use the agent assisted voice and automated voice delivery modes.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Campaign, Queue, Routing Profile
   *
   *   UI name: [Average dials per minute](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-dials-per-minute)
   *
   * - **AVG_EVALUATION_SCORE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Section ID, Evaluation Question ID, Evaluation Source, Form Version, Queue, Routing Profile
   *
   *   UI name: [Average evaluation score](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-evaluation-score)
   *
   * - **AVG_EVALUATION_SCORE_BY_SUBMIT_TIME**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form Version, Queue, Routing Profile
   *
   *   UI name: [Average evaluation score (Submit time)](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-evaluation-score-by-submit-time)
   *
   * - **AVG_FIRST_RESPONSE_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average agent first response time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-first-response-time)
   *
   * - **AVG_FLOW_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp
   *
   *   UI name: [Average flow time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-flow-time)
   *
   * - **AVG_GREETING_TIME_AGENT**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average agent greeting time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-greeting-time)
   *
   * - **AVG_HANDLE_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, AI Use Case, Feature, contact/segmentAttributes/connect:Subtype, RoutingStepExpression
   *
   *   UI name: [Average handle time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **ACTIVE_AI_AGENTS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Active AI Agents](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#active-ai-agents)
   *
   * - **AI_HANDOFF_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Handoff Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-handoff-rate)
   *
   * - **AI_HANDOFFS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Handoff Count](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-handoffs)
   *
   * - **AI_AGENT_INVOCATION_SUCCESS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Invocation Success](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-invocation-success)
   *
   * - **AI_AGENT_INVOCATION_SUCCESS_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Invocation Success Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-invocation-success-rate)
   *
   * - **AI_AGENT_INVOCATIONS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Invocation Count](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-invocations)
   *
   * - **AI_AGENT_RESPONSE_HELPFUL**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Response Helpful](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-response-helpful)
   *
   * - **AI_AGENT_RESPONSE_NOT_HELPFUL**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Response Not Helpful](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-response-not-helpful)
   *
   * - **AI_RESPONSE_COMPLETION_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Response Completion Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-response-completion-rate)
   *
   * - **AI_INVOLVED_CONTACTS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Involved Contacts](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-involved-contacts)
   *
   * - **AI_PROMPT_INVOCATION_SUCCESS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Prompt Invocation Success](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-prompt-invocation-success)
   *
   * - **AI_PROMPT_INVOCATION_SUCCESS_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Prompt Invocation Success Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-prompt-invocation-success-rate)
   *
   * - **AI_PROMPT_INVOCATIONS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Prompt Invocations](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-prompt-invocations)
   *
   * - **AI_TOOL_INVOCATION_SUCCESS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Tool Invocation Success](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-invocation-success)
   *
   * - **AI_TOOL_INVOCATION_SUCCESS_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Tool Invocation Success Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-invocation-success-rate)
   *
   * - **AI_TOOL_INVOCATIONS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Tool Invocations](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-invocations)
   *
   * - **AVG_AI_AGENT_CONVERSATION_TURNS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Average AI Agent Conversation Turns](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-agent-conversation-turns)
   *
   * - **AVG_AI_CONVERSATION_TURNS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Average AI Conversation Turns](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-conversation-turns)
   *
   * - **AVG_AI_PROMPT_INVOCATION_LATENCY**
   *
   *   Unit: Milliseconds
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Average AI Prompt Invocation Latency](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-prompt-invocation-latency)
   *
   * - **AVG_AI_TOOL_INVOCATION_LATENCY**
   *
   *   Unit: Milliseconds
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Average AI Tool Invocation Latency](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-tool-invocation-latency)
   *
   * - **AI_TOOL_PARAMETER_ACCURACY**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Tool Parameter Accuracy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-parameter-accuracy)
   *
   * - **AI_TOOL_SELECTION_ACCURACY**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Tool Selection Accuracy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-selection-accuracy)
   *
   * - **AI_TOOL_UTILIZATION_ACCURACY**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Tool Utilization Accuracy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-utilization-accuracy)
   *
   * - **COMPLETENESS_SCORE**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Completeness Score](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#completeness-score)
   *
   * - **FAITHFULNESS_SCORE**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Faithfulness Score](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#faithfulness-score)
   *
   * - **GOAL_SUCCESS_RATE**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Goal Success Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#goal-success-rate)
   *
   * - **KNOWLEDGE_CONTENT_REFERENCES**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Knowledge Base Name, Queue, Routing Profile, Session ID
   *
   *   UI name: [Knowledge Content References](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#knowledge-content-references)
   *
   * - **PROACTIVE_INTENT_ENGAGEMENT_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Proactive Intent Engagement Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-engagement-rate)
   *
   * - **PROACTIVE_INTENT_RESPONSE_RATE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Proactive Intent Response Rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-response-rate)
   *
   * - **PROACTIVE_INTENTS_ANSWERED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Proactive Intents Answered](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-answered)
   *
   * - **PROACTIVE_INTENTS_DETECTED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Proactive Intents Detected](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-detected)
   *
   * - **PROACTIVE_INTENTS_ENGAGED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Proactive Intents Engaged](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-engaged)
   *
   * - **AVG_HOLD_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **AVG_HOLD_TIME_ALL_CONTACTS**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average customer hold time all contacts](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time-all-contacts)
   *
   * - **AVG_HOLDS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average holds](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-holds)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **AVG_INTERACTION_AND_HOLD_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average agent interaction and customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time)
   *
   * - **AVG_INTERACTION_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid metric filter key: `INITIATION_METHOD`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average agent interaction time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-time)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **AVG_INTERRUPTIONS_AGENT**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average agent interruptions](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interruptions)
   *
   * - **AVG_INTERRUPTION_TIME_AGENT**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average agent interruption time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interruption-time)
   *
   * - **AVG_MESSAGE_LENGTH_AGENT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average agent message length](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-message-length)
   *
   * - **AVG_MESSAGE_LENGTH_CUSTOMER**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average customer message length](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-message-length)
   *
   * - **AVG_MESSAGES**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average messages](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-messages)
   *
   * - **AVG_MESSAGES_AGENT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average agent messages](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-messages)
   *
   * - **AVG_MESSAGES_BOT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average bot messages](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-bot-messages)
   *
   * - **AVG_MESSAGES_CUSTOMER**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average customer messages](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-messages)
   *
   * - **AVG_NON_TALK_TIME**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average non-talk time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-non-talk-time)
   *
   * - **AVG_QUEUE_ANSWER_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average queue answer time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-answer-time)
   *
   *   Valid metric level filters: `INITIATION_METHOD`, `FEATURE`, `DISCONNECT_REASON`
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **AVG_QUEUE_ANSWER_TIME_CUSTOMER_FIRST_CALLBACK**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect, Agent Hierarchy
   *
   *   UI name: [Avg. queue answer time - customer first callback](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-answer-time-customer-first-callback)
   *
   * - **AVG_RESPONSE_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average agent response time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-response-time-agent)
   *
   * - **AVG_RESPONSE_TIME_CUSTOMER**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Average customer response time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-time-agent)
   *
   * - **AVG_RESOLUTION_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average resolution time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-resolution-time)
   *
   * - **AVG_TALK_TIME**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average talk time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-talk-time)
   *
   * - **AVG_TALK_TIME_AGENT**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average agent talk time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-talk-time)
   *
   * - **AVG_TALK_TIME_CUSTOMER**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Average customer talk time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-talk-time)
   *
   * - **AVG_WAIT_TIME_AFTER_CUSTOMER_CONNECTION**
   *
   *   This metric is available only for outbound campaigns that use the agent assisted voice and automated voice delivery modes.
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Campaign
   *
   *   UI name: [Average wait time after customer connection](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-wait-time-after-customer-connection)
   *
   * - **AVG_WAIT_TIME_AFTER_CUSTOMER_FIRST_CALLBACK_CONNECTION**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect, Agent Hierarchy
   *
   *   UI name: [Avg. wait time after customer connection - customer first callback](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-wait-time-after-customer-connection-customer-first-callback)
   *
   * - **AVG_WEIGHTED_EVALUATION_SCORE**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form Id, Evaluation Section ID, Evaluation Question ID, Evaluation Source, Form Version, Queue, Routing Profile
   *
   *   UI name: [Average weighted evaluation score](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-weighted-evaluation-score)
   *
   * - **BOT_CONVERSATIONS_COMPLETED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID
   *
   *   UI name: [Bot conversations completed](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-conversations-completed)
   *
   * - **BOT_INTENTS_COMPLETED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Bot intent name, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID
   *
   *   UI name: [Bot intents completed](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-intents-completed)
   *
   * - **CAMPAIGN_CONTACTS_ABANDONED_AFTER_X**
   *
   *   This metric is available only for outbound campaigns using the agent assisted voice and automated voice delivery modes.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Campaign
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you must enter `GT` (for *Greater than*).
   *
   *   UI name: [Campaign contacts abandoned after X](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-contacts-abandoned-after-x)
   *
   * - **CAMPAIGN_CONTACTS_ABANDONED_AFTER_X_RATE**
   *
   *   This metric is available only for outbound campaigns using the agent assisted voice and automated voice delivery modes.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Campaign
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you must enter `GT` (for *Greater than*).
   *
   *   UI name: [Campaign contacts abandoned after X rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-contacts-abandoned-after-x-rate)
   *
   * - **CAMPAIGN_INTERACTIONS**
   *
   *   This metric is available only for outbound campaigns using the email, WhatsApp, and web notification delivery modes.
   *
   *   Unit: Count
   *
   *   Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE
   *
   *   Valid groupings and filters: Browser Name, Campaign, Channel, contact/segmentAttributes/connect:Subtype, Device Model, Device Type, Web Notification Type
   *
   *   UI name: [Campaign interactions](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-interactions)
   *
   * - **CAMPAIGN_PROGRESS_RATE**
   *
   *   This metric is only available for outbound campaigns initiated using a customer segment. It is not available for event triggered campaigns.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Campaign, Campaign Execution Timestamp
   *
   *   UI name: [Campaign progress rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-progress-rate)
   *
   * - **CAMPAIGN_SEND_ATTEMPTS**
   *
   *   This metric is available only for outbound campaigns.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Campaign, Channel, contact/segmentAttributes/connect:Subtype
   *
   *   UI name: [Campaign send attempts](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-send-attempts)
   *
   * - **CAMPAIGN_SEND_EXCLUSIONS**
   *
   *   This metric is available only for outbound campaigns.
   *
   *   Valid metric filter key: CAMPAIGN_EXCLUDED_EVENT_TYPE
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Campaign, Campaign Excluded Event Type, Campaign Execution Timestamp
   *
   *   UI name: [Campaign send exclusions](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-send-exclusions)
   *
   * - **CASES_CREATED**
   *
   *   Unit: Count
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Cases created](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-created)
   *
   * - **CONTACTS_CREATED**
   *
   *   Unit: Count
   *
   *   Valid metric filter key: `INITIATION_METHOD`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts created](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-created)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **CONTACTS_HANDLED**
   *
   *   Unit: Count
   *
   *   Valid metric filter key: `INITIATION_METHOD`, `DISCONNECT_REASON`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect
   *
   *   UI name: [Contacts handled](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **CONTACTS_HANDLED_BY_CONNECTED_TO_AGENT**
   *
   *   Unit: Count
   *
   *   Valid metric filter key: `INITIATION_METHOD`
   *
   *   Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts handled (connected to agent timestamp)](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-by-connected-to-agent-timestamp)
   *
   * - **CONTACTS_HOLD_ABANDONS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts hold disconnect](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect)
   *
   * - **CONTACTS_ON_HOLD_AGENT_DISCONNECT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contacts hold agent disconnect](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-agent-disconnect)
   *
   * - **CONTACTS_ON_HOLD_CUSTOMER_DISCONNECT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contacts hold customer disconnect](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-customer-disconnect)
   *
   * - **CONTACTS_PUT_ON_HOLD**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contacts put on hold](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-put-on-hold)
   *
   * - **CONTACTS_TRANSFERRED_OUT_EXTERNAL**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contacts transferred out external](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-external)
   *
   * - **CONTACTS_TRANSFERRED_OUT_INTERNAL**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contacts transferred out internal](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-internal)
   *
   * - **CONTACTS_QUEUED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts queued](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued)
   *
   * - **CONTACTS_QUEUED_BY_ENQUEUE**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype
   *
   *   UI name: [Contacts queued (enqueue timestamp)](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued-by-enqueue)
   *
   * - **CONTACTS_REMOVED_FROM_QUEUE_IN_X**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you can use `LT` (for "Less than") or `LTE` (for "Less than equal").
   *
   *   UI name: [Contacts removed from queue in X seconds](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-removed-from-queue)
   *
   * - **CONTACTS_RESOLVED_IN_X**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you can use `LT` (for "Less than") or `LTE` (for "Less than equal").
   *
   *   UI name: [Contacts resolved in X](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-resolved)
   *
   * - **CONTACTS_TRANSFERRED_OUT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts transferred out](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out)
   *
   *   > **Note:** Feature is a valid filter but not a valid grouping.
   *
   * - **CONTACTS_TRANSFERRED_OUT_BY_AGENT**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts transferred out by agent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-by-agent)
   *
   * - **CONTACTS_TRANSFERRED_OUT_FROM_QUEUE**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contacts transferred out queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue)
   *
   * - **CURRENT_CASES**
   *
   *   Unit: Count
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Current cases](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#current-cases)
   *
   * - **CONVERSATIONS_ABANDONED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect
   *
   *   UI name: [Conversations abandoned](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#conversations-abandoned)
   *
   * - **DELIVERY_ATTEMPTS**
   *
   *   This metric is available only for outbound campaigns.
   *
   *   Unit: Count
   *
   *   Valid metric filter key: `ANSWERING_MACHINE_DETECTION_STATUS`, `CAMPAIGN_DELIVERY_EVENT_TYPE`, `DISCONNECT_REASON`
   *
   *   Valid groupings and filters: Agent, Answering Machine Detection Status, Browser Name, Campaign, Campaign Delivery EventType, Channel, contact/segmentAttributes/connect:Subtype, Device Model, Device Type, Disconnect Reason, Queue, Routing Profile, Web Notification Type
   *
   *   UI name: [Delivery attempts](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#delivery-attempts)
   *
   *   > **Note:** Campaign Delivery EventType filter and grouping are only available for SMS, Email, WhatsApp, and web notification campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status and Disconnect Reason are only available for agent assisted voice and automated voice delivery modes.
   *
   * - **DELIVERY_ATTEMPT_DISPOSITION_RATE**
   *
   *   This metric is available only for outbound campaigns. Dispositions for the agent assisted voice and automated voice delivery modes are only available with answering machine detection enabled.
   *
   *   Unit: Percent
   *
   *   Valid metric filter key: `ANSWERING_MACHINE_DETECTION_STATUS`, `CAMPAIGN_DELIVERY_EVENT_TYPE`, `DISCONNECT_REASON`
   *
   *   Valid groupings and filters: Agent, Answering Machine Detection Status, Browser Name, Campaign, Channel, contact/segmentAttributes/connect:Subtype, Device Model, Device Type, Disconnect Reason, Queue, Routing Profile, Web Notification Type
   *
   *   UI name: [Delivery attempt disposition rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#delivery-attempt-disposition-rate)
   *
   *   > **Note:** Campaign Delivery Event Type filter and grouping are only available for SMS, Email, WhatsApp, and web notification campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status and Disconnect Reason are only available for agent assisted voice and automated voice delivery modes.
   *
   * - **EVALUATED_CHURN_PROPENSITY_RATE**
   *
   *   This metric requires an evaluation form with business outcome questions. For more information, see [Create an evaluation form](https://docs.aws.amazon.com/connect/latest/adminguide/create-evaluation-forms.html) in the *Connect Customer Administrator Guide*.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy Level One, Agent Hierarchy Level Two, Agent Hierarchy Level Three, Agent Hierarchy Level Four, Agent Hierarchy Level Five, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Bot ID, Bot Intent Name, Bot Locale, Campaign, Campaign Delivery Event Type, Channel, Contact Category, Disconnect Reason, Email Address, Evaluation Form, Evaluation Question, Evaluation Section, Evaluation Source, Evaluator, Feature, Flow Type, Flows Module Resource ID, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Alias, Flows Resource ID, Flows Resource Type, Flows Resource Version, Initiation Method, **Lifetime Value**, Proficiency, Q Connect Enabled, Queue, Queue Agent Group Name, Queue Agent Group Type, Queue Type, **Repeat Caller**, Resource Published Timestamp, Routing Profile, Routing Step Expression, Session ID, Subtype, Telephone Number
   *
   *   UI name: [Evaluated churn propensity rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluated-churn-propensity-rate)
   *
   *   > **Note:**
   *   >
   *   > Feature, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Type, Proficiency, Resource Published Timestamp, and Session ID are valid filters but not valid groupings. AI Agent Name Version, Campaign Delivery Event Type, and Queue Agent Group Name are valid groupings but not valid filters.
   *   >
   *   > When requesting business outcome metrics, the filters and groupings used in a single request must belong to the same metric scope. Filters and groupings from different metric scopes cannot be combined in one request.
   *
   * - **EVALUATED_CSAT_PERCENT**
   *
   *   This metric requires an evaluation form with business outcome questions. For more information, see [Create an evaluation form](https://docs.aws.amazon.com/connect/latest/adminguide/create-evaluation-forms.html) in the *Connect Customer Administrator Guide*.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy Level One, Agent Hierarchy Level Two, Agent Hierarchy Level Three, Agent Hierarchy Level Four, Agent Hierarchy Level Five, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Bot ID, Bot Intent Name, Bot Locale, Campaign, Campaign Delivery Event Type, Channel, Contact Category, Disconnect Reason, Email Address, Evaluation Form, Evaluation Question, Evaluation Section, Evaluation Source, Evaluator, Feature, Flow Type, Flows Module Resource ID, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Alias, Flows Resource ID, Flows Resource Type, Flows Resource Version, Initiation Method, **Lifetime Value**, Proficiency, Q Connect Enabled, Queue, Queue Agent Group Name, Queue Agent Group Type, Queue Type, **Repeat Caller**, Resource Published Timestamp, Routing Profile, Routing Step Expression, Session ID, Subtype, Telephone Number
   *
   *   UI name: [Evaluated CSAT percent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluated-csat-percent)
   *
   *   > **Note:**
   *   >
   *   > Feature, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Type, Proficiency, Resource Published Timestamp, and Session ID are valid filters but not valid groupings. AI Agent Name Version, Campaign Delivery Event Type, and Queue Agent Group Name are valid groupings but not valid filters.
   *   >
   *   > When requesting business outcome metrics, the filters and groupings used in a single request must belong to the same metric scope. Filters and groupings from different metric scopes cannot be combined in one request.
   *
   * - **EVALUATED_PARTIAL_SELF_SERVICE_SUCCESS_RATE**
   *
   *   This metric requires an evaluation form with business outcome questions. For more information, see [Create an evaluation form](https://docs.aws.amazon.com/connect/latest/adminguide/create-evaluation-forms.html) in the *Connect Customer Administrator Guide*.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy Level One, Agent Hierarchy Level Two, Agent Hierarchy Level Three, Agent Hierarchy Level Four, Agent Hierarchy Level Five, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Bot ID, Bot Intent Name, Bot Locale, Campaign, Campaign Delivery Event Type, Channel, Contact Category, Disconnect Reason, Email Address, Evaluation Form, Evaluation Question, Evaluation Section, Evaluation Source, Evaluator, Feature, Flow Type, Flows Module Resource ID, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Alias, Flows Resource ID, Flows Resource Type, Flows Resource Version, Initiation Method, **Lifetime Value**, Proficiency, Q Connect Enabled, Queue, Queue Agent Group Name, Queue Agent Group Type, Queue Type, **Repeat Caller**, Resource Published Timestamp, Routing Profile, Routing Step Expression, Session ID, Subtype, Telephone Number
   *
   *   UI name: [Evaluated partial self-service resolution rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluated-partial-self-service-resolution-rate)
   *
   *   > **Note:**
   *   >
   *   > Feature, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Type, Proficiency, Resource Published Timestamp, and Session ID are valid filters but not valid groupings. AI Agent Name Version, Campaign Delivery Event Type, and Queue Agent Group Name are valid groupings but not valid filters.
   *   >
   *   > When requesting business outcome metrics, the filters and groupings used in a single request must belong to the same metric scope. Filters and groupings from different metric scopes cannot be combined in one request.
   *
   * - **EVALUATED_SELF_SERVICE_SUCCESS_RATE**
   *
   *   This metric requires an evaluation form with business outcome questions. For more information, see [Create an evaluation form](https://docs.aws.amazon.com/connect/latest/adminguide/create-evaluation-forms.html) in the *Connect Customer Administrator Guide*.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy Level One, Agent Hierarchy Level Two, Agent Hierarchy Level Three, Agent Hierarchy Level Four, Agent Hierarchy Level Five, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Bot ID, Bot Intent Name, Bot Locale, Campaign, Campaign Delivery Event Type, Channel, Contact Category, Disconnect Reason, Email Address, Evaluation Form, Evaluation Question, Evaluation Section, Evaluation Source, Evaluator, Feature, Flow Type, Flows Module Resource ID, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Alias, Flows Resource ID, Flows Resource Type, Flows Resource Version, Initiation Method, **Lifetime Value**, Proficiency, Q Connect Enabled, Queue, Queue Agent Group Name, Queue Agent Group Type, Queue Type, **Repeat Caller**, Resource Published Timestamp, Routing Profile, Routing Step Expression, Session ID, Subtype, Telephone Number
   *
   *   UI name: [Evaluated self-service resolution rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluated-self-service-resolution-rate)
   *
   *   > **Note:**
   *   >
   *   > Feature, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Type, Proficiency, Resource Published Timestamp, and Session ID are valid filters but not valid groupings. AI Agent Name Version, Campaign Delivery Event Type, and Queue Agent Group Name are valid groupings but not valid filters.
   *   >
   *   > When requesting business outcome metrics, the filters and groupings used in a single request must belong to the same metric scope. Filters and groupings from different metric scopes cannot be combined in one request.
   *
   * - **EVALUATED_SUCCESSFUL_SALE_RATE**
   *
   *   This metric requires an evaluation form with business outcome questions. For more information, see [Create an evaluation form](https://docs.aws.amazon.com/connect/latest/adminguide/create-evaluation-forms.html) in the *Connect Customer Administrator Guide*.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy Level One, Agent Hierarchy Level Two, Agent Hierarchy Level Three, Agent Hierarchy Level Four, Agent Hierarchy Level Five, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Bot ID, Bot Intent Name, Bot Locale, Campaign, Campaign Delivery Event Type, Channel, Contact Category, Disconnect Reason, Email Address, Evaluation Form, Evaluation Question, Evaluation Section, Evaluation Source, Evaluator, Feature, Flow Type, Flows Module Resource ID, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Alias, Flows Resource ID, Flows Resource Type, Flows Resource Version, Initiation Method, **Lifetime Value**, Proficiency, Q Connect Enabled, Queue, Queue Agent Group Name, Queue Agent Group Type, Queue Type, **Repeat Caller**, Resource Published Timestamp, Routing Profile, Routing Step Expression, Session ID, Subtype, Telephone Number
   *
   *   UI name: [Evaluated successful sale rate](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluated-successful-sale-rate)
   *
   *   > **Note:**
   *   >
   *   > Feature, Flows Next Resource ID, Flows Next Resource Queue ID, Flows Next Resource Type, Flows Outcome Type, Flows Resource Type, Proficiency, Resource Published Timestamp, and Session ID are valid filters but not valid groupings. AI Agent Name Version, Campaign Delivery Event Type, and Queue Agent Group Name are valid groupings but not valid filters.
   *   >
   *   > When requesting business outcome metrics, the filters and groupings used in a single request must belong to the same metric scope. Filters and groupings from different metric scopes cannot be combined in one request.
   *
   * - **EVALUATIONS_PERFORMED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form Version, Queue, Routing Profile
   *
   *   UI name: [Evaluations performed](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluations-performed)
   *
   * - **EVALUATIONS_PERFORMED_BY_SUBMIT_TIME**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form Version, Queue, Routing Profile
   *
   *   UI name: [Evaluations performed (Submit time)](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluations-performed-by-submit-time)
   *
   * - **FLOWS_OUTCOME**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp
   *
   *   UI name: [Flows outcome](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome)
   *
   * - **FLOWS_STARTED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows resource ID, Initiation method, Resource published timestamp
   *
   *   UI name: [Flows started](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-started)
   *
   * - **HUMAN_ANSWERED_CALLS**
   *
   *   This metric is available only for outbound campaigns. Dispositions for the agent assisted voice and automated voice delivery modes are only available with answering machine detection enabled.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Agent, Campaign
   *
   *   UI name: [Human answered](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#human-answered)
   *
   * - **MAX_FLOW_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp
   *
   *   UI name: [Maximum flow time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#maximum-flow-time)
   *
   * - **MAX_QUEUED_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Maximum queued time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#maximum-queued-time)
   *
   * - **MIN_FLOW_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp
   *
   *   UI name: [Minimum flow time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time)
   *
   * - **PERCENT_AUTOMATIC_FAILS**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form Version, Queue, Routing Profile
   *
   *   UI name: [Automatic fails percent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#automatic-fails-percent)
   *
   * - **PERCENT_BOT_CONVERSATIONS_OUTCOME**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID
   *
   *   UI name: [Percent bot conversations outcome](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#percent-bot-conversations-outcome)
   *
   * - **PERCENT_BOT_INTENTS_OUTCOME**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Bot intent name, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID
   *
   *   UI name: [Percent bot intents outcome](https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#percent-bot-intents-outcome)
   *
   * - **PERCENT_CASES_FIRST_CONTACT_RESOLVED**
   *
   *   Unit: Percent
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Cases resolved on first contact](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-resolved-on-first-contact)
   *
   * - **PERCENT_CONTACTS_STEP_EXPIRED**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, RoutingStepExpression
   *
   *   UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.
   *
   * - **PERCENT_CONTACTS_STEP_JOINED**
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, RoutingStepExpression
   *
   *   UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.
   *
   * - **PERCENT_FLOWS_OUTCOME**
   *
   *   Unit: Percent
   *
   *   Valid metric filter key: `FLOWS_OUTCOME_TYPE`
   *
   *   Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp
   *
   *   UI name: [Flows outcome percentage](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome-percentage).
   *
   *   > **Note:** The `FLOWS_OUTCOME_TYPE` is not a valid grouping.
   *
   * - **PERCENT_NON_TALK_TIME**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Percentage
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Non-talk time percent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-talk-time-percent)
   *
   * - **PERCENT_TALK_TIME**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Percentage
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Talk time percent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#talk-time-percent)
   *
   * - **PERCENT_TALK_TIME_AGENT**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Percentage
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Agent talk time percent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-talk-time-percent)
   *
   * - **PERCENT_TALK_TIME_CUSTOMER**
   *
   *   This metric is available only for contacts analyzed by Contact Lens conversational analytics.
   *
   *   Unit: Percentage
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Customer talk time percent](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#customer-talk-time-percent)
   *
   * - **RECIPIENTS_ATTEMPTED**
   *
   *   This metric is only available for outbound campaigns initiated using a customer segment. It is not available for event triggered campaigns.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Campaign, Campaign Execution Timestamp
   *
   *   UI name: [Recipients attempted](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-attempted)
   *
   * - **RECIPIENTS_INTERACTED**
   *
   *   This metric is only available for outbound campaigns initiated using a customer segment. It is not available for event triggered campaigns.
   *
   *   Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Campaign, Channel, contact/segmentAttributes/connect:Subtype, Campaign Execution Timestamp
   *
   *   UI name: [Recipients interacted](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-interacted)
   *
   * - **AI_AGENT_COLLABORATORS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Collaborators](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-collaborators)
   *
   * - **AI_AGENT_COLLABORATION_INVOCATIONS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Collaboration Invocations](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-collaboration-invocations)
   *
   * - **AI_AGENT_SELECTION_ACCURACY**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [AI Agent Selection Accuracy](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-selection-accuracy)
   *
   *   > **Note:** This metric is available as part of Connect Customer AI.
   *
   * - **AVG_AI_AGENT_INVOCATION_LATENCY**
   *
   *   Unit: Milliseconds
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Average AI Agent Invocation Latency](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-agent-invocation-latency)
   *
   * - **CONTEXT_FIDELITY_SCORE**
   *
   *   Unit: Double
   *
   *   Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile, Session ID
   *
   *   UI name: [Context Fidelity Score](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#context-fidelity-score)
   *
   *   > **Note:** This metric is available as part of Connect Customer AI.
   *
   * - **RECIPIENTS_TARGETED**
   *
   *   This metric is only available for outbound campaigns initiated using a customer segment. It is not available for event triggered campaigns.
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Campaign, Campaign Execution Timestamp
   *
   *   UI name: [Recipients targeted](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-targeted)
   *
   * - **REOPENED_CASE_ACTIONS**
   *
   *   Unit: Count
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Cases reopened](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-reopened)
   *
   * - **RESOLVED_CASE_ACTIONS**
   *
   *   Unit: Count
   *
   *   Required filter key: CASE_TEMPLATE_ARN
   *
   *   Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS
   *
   *   UI name: [Cases resolved](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-resolved)
   *
   * - **SERVICE_LEVEL**
   *
   *   You can include up to 20 SERVICE_LEVEL metrics in a request.
   *
   *   Unit: Percent
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you can use `LT` (for "Less than") or `LTE` (for "Less than equal").
   *
   *   UI name: [Service level X](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#service-level)
   *
   * - **STEP_CONTACTS_QUEUED**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, RoutingStepExpression
   *
   *   UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.
   *
   * - **SUM_AFTER_CONTACT_WORK_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [After contact work time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time)
   *
   * - **SUM_CONNECTING_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid metric filter key: `INITIATION_METHOD`. This metric only supports the following filter keys as `INITIATION_METHOD`: `INBOUND` | `OUTBOUND` | `CALLBACK` | `API` | `CALLBACK_CUSTOMER_FIRST_DIALED`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent API connecting time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-api-connecting-time)
   *
   *   > **Note:** The `Negate` key in metric-level filters is not applicable for this metric.
   *
   * - **CONTACTS_ABANDONED**
   *
   *   Unit: Count
   *
   *   Metric filter:
   *
   *   - Valid values: `API`| `INCOMING` | `OUTBOUND` | `TRANSFER` | `CALLBACK` | `QUEUE_TRANSFER`| `Disconnect` | `CALLBACK_CUSTOMER_FIRST_DIALED`
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect
   *
   *   UI name: [Contact abandoned](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned)
   *
   * - **SUM_CONTACTS_ABANDONED_IN_X**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you can use `LT` (for "Less than") or `LTE` (for "Less than equal").
   *
   *   UI name: [Contacts abandoned in X seconds](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned-in-x-seconds)
   *
   * - **SUM_CONTACTS_ANSWERED_IN_X**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   Threshold: For `ThresholdValue`, enter any whole number from 1 to 604800 (inclusive), in seconds. For `Comparison`, you can use `LT` (for "Less than") or `LTE` (for "Less than equal").
   *
   *   UI name: [Contacts answered in X seconds](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-answered-in-x-seconds)
   *
   * - **SUM_CONTACT_FLOW_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contact flow time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-flow-time)
   *
   * - **SUM_CONTACT_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent on contact time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-on-contact-time)
   *
   * - **SUM_CONTACTS_DISCONNECTED**
   *
   *   Valid metric filter key: `DISCONNECT_REASON`
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Contact disconnected](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-disconnected)
   *
   * - **SUM_ERROR_STATUS_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Error status time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#error-status-time)
   *
   * - **SUM_HANDLE_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Contact handle time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-handle-time)
   *
   * - **SUM_HOLD_TIME**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Customer hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#customer-hold-time)
   *
   * - **SUM_IDLE_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent idle time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-idle-time)
   *
   * - **SUM_INTERACTION_AND_HOLD_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect
   *
   *   UI name: [Agent interaction and hold time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-interaction-and-hold-time)
   *
   * - **SUM_INTERACTION_TIME**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent interaction time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-interaction-time)
   *
   * - **SUM_NON_PRODUCTIVE_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Agent non-productive time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-productive-time)
   *
   * - **SUM_ONLINE_TIME_AGENT**
   *
   *   Unit: Seconds
   *
   *   Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy
   *
   *   UI name: [Online time](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#online-time)
   *
   * - **SUM_RETRY_CALLBACK_ATTEMPTS**
   *
   *   Unit: Count
   *
   *   Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect
   *
   *   UI name: [Callback attempts](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-attempts)
   *
   * @public
   */
  Metrics: MetricV2[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the name, thresholds, and metric filters.
 *
 * @public
 */
export interface MetricDataV2 {
  /**
   * The metric name or metricId, thresholds, and metric filters of the returned metric.
   *
   * @public
   */
  Metric?: MetricV2 | undefined;

  /**
   * The corresponding value of the metric returned in the response.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The interval period with the start and end time for the metrics.
 *
 * @public
 */
export interface MetricInterval {
  /**
   * The interval period provided in the API request.
   *
   * @public
   */
  Interval?: IntervalPeriod | undefined;

  /**
   * The timestamp, in UNIX Epoch time format. Start time is based on the interval period selected.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp, in UNIX Epoch time format. End time is based on the interval period selected. For example, If `IntervalPeriod` is selected `THIRTY_MIN`, `StartTime` and `EndTime` in the API request differs by 1 day, then 48 results are returned in the response. Each result is aggregated by the 30 minutes period, with each `StartTime` and `EndTime` differing by 30 minutes.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * Contains information about the metric results.
 *
 * @public
 */
export interface MetricResultV2 {
  /**
   * The dimension for the metrics.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * The interval period with the start and end time for the metrics.
   *
   * @public
   */
  MetricInterval?: MetricInterval | undefined;

  /**
   * The set of metrics.
   *
   * @public
   */
  Collections?: MetricDataV2[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataV2Response {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the metrics requested in the API request If no grouping is specified, a summary of metric data is returned.
   *
   * @public
   */
  MetricResults?: MetricResultV2[] | undefined;
}

/**
 * @public
 */
export interface GetPromptFileRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the prompt.
   *
   * @public
   */
  PromptId: string | undefined;
}

/**
 * @public
 */
export interface GetPromptFileResponse {
  /**
   * A generated URL to the prompt that can be given to an unauthorized user so they can access the prompt in S3.
   *
   * @public
   */
  PromptPresignedUrl?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskTemplateRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the task template.
   *
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * The system generated version of a task template that is associated with a task, when the task is created.
   *
   * @public
   */
  SnapshotVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskTemplateResponse {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * A unique identifier for the task template.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN).
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the task template.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the task template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow that runs by default when a task is created by referencing this template.
   *
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task.
   *
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * The event hooks that are set on tasks created by using this template.
   *
   * @public
   */
  ContactHooks?: TaskTemplateContactHooks | undefined;

  /**
   * Constraints that are applicable to the fields listed. Although this parameter is marked as optional in the API model, the service requires it when calling `CreateTaskTemplate` or `UpdateTaskTemplate`. The `RequiredFields` array must contain at least one element, and the field of type `NAME` must be included in `RequiredFields`.
   *
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * The default values for fields when a task is created by referencing this template.
   *
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * Fields that are part of the template.
   *
   * @public
   */
  Fields?: TaskTemplateField[] | undefined;

  /**
   * Marks a template as `ACTIVE` or `INACTIVE` for a task to refer to it. Tasks can only be created from `ACTIVE` templates. If a template is marked as `INACTIVE`, then a task that refers to this template cannot be created.
   *
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * The timestamp when the task template was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The timestamp when the task template was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTestCaseExecutionSummaryRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case.
   *
   * @public
   */
  TestCaseId: string | undefined;

  /**
   * The identifier of the test case execution.
   *
   * @public
   */
  TestCaseExecutionId: string | undefined;
}

/**
 * Contains summary statistics about a test case execution.
 *
 * @public
 */
export interface ObservationSummary {
  /**
   * The total number of observations in the test case.
   *
   * @public
   */
  TotalObservations?: number | undefined;

  /**
   * The number of observations that passed during execution.
   *
   * @public
   */
  ObservationsPassed?: number | undefined;

  /**
   * The number of observations that failed during execution.
   *
   * @public
   */
  ObservationsFailed?: number | undefined;
}

/**
 * @public
 */
export interface GetTestCaseExecutionSummaryResponse {
  /**
   * The timestamp when the test case execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp when the test case execution ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the test case execution.
   *
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;

  /**
   * Summary statistics for the test case execution.
   *
   * @public
   */
  ObservationSummary?: ObservationSummary | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The distribution of sign in traffic between the instance and its replica(s).
 *
 * @public
 */
export interface SignInDistribution {
  /**
   * The Amazon Web Services Region of the sign in distribution.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * Whether sign in distribution is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both the instance and its replica(s).
 *
 * @public
 */
export interface SignInConfig {
  /**
   * Information about traffic distributions.
   *
   * @public
   */
  Distributions: SignInDistribution[] | undefined;
}

/**
 * The distribution of traffic between the instance and its replicas.
 *
 * @public
 */
export interface TelephonyConfig {
  /**
   * Information about traffic distributions.
   *
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionResponse {
  /**
   * The distribution of traffic between the instance and its replicas.
   *
   * @public
   */
  TelephonyConfig?: TelephonyConfig | undefined;

  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the traffic distribution group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both the instance and its replica(s).
   *
   * @public
   */
  SignInConfig?: SignInConfig | undefined;

  /**
   * The distribution of agents between the instance and its replica(s).
   *
   * @public
   */
  AgentConfig?: AgentConfig | undefined;

  /**
   * The timestamp of the most recent failover for the traffic distribution group. This value is updated each time `UpdateTrafficDistribution` is called to change the traffic distribution.
   *
   * @public
   */
  LastFailoverTime?: Date | undefined;
}

/**
 * @public
 */
export interface ImportPhoneNumberRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The claimed phone number ARN being imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number to import from Amazon Web Services End User Messaging.
   *
   * @public
   */
  SourcePhoneNumberArn: string | undefined;

  /**
   * The description of the phone number.
   *
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportPhoneNumberResponse {
  /**
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the phone number.
   *
   * @public
   */
  PhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportWorkspaceMediaRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the workspace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The type of media. Valid values are: `IMAGE_LOGO_FAVICON` and `IMAGE_LOGO_HORIZONTAL`.
   *
   * @public
   */
  MediaType: MediaType | undefined;

  /**
   * The media source. Can be an S3 presigned URL or a base64-encoded string.
   *
   * @public
   */
  MediaSource: string | undefined;
}

/**
 * @public
 */
export interface ImportWorkspaceMediaResponse {}

/**
 * @public
 */
export interface ListAgentStatusRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Available agent status types.
   *
   * @public
   */
  AgentStatusTypes?: AgentStatusType[] | undefined;
}

/**
 * @public
 */
export interface ListAgentStatusResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A summary of agent statuses.
   *
   * @public
   */
  AgentStatusSummaryList?: AgentStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the dataset to get the association status.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsResponse {
  /**
   * An array of successful results: `DataSetId`, `TargetAccountId`, `ResourceShareId`, `ResourceShareArn`. This is a paginated API, so `nextToken` is given if there are more results to be returned.
   *
   * @public
   */
  Results?: AnalyticsDataAssociationResult[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataLakeDataSetsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about datasets that are available to associate with: `DataSetId`, `DataSetName`.
 *
 * @public
 */
export interface AnalyticsDataSetsResult {
  /**
   * The identifier of the dataset.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DataSetName?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataLakeDataSetsResponse {
  /**
   * An array of successful results: `DataSetId`, `DataSetName`. This is a paginated API, so `nextToken` is given if there are more results to be returned.
   *
   * @public
   */
  Results?: AnalyticsDataSetsResult[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApprovedOriginsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApprovedOriginsResponse {
  /**
   * The approved origins.
   *
   * @public
   */
  Origins?: string[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedContactsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contact summary of a contact in contact tree associated with unique identifier.
 *
 * @public
 */
export interface AssociatedContactSummary {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the contact
   *
   * @public
   */
  ContactArn?: string | undefined;

  /**
   * The date and time this contact was initiated, in UTC time.
   *
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * The date and time that the customer endpoint disconnected from the current contact, in UTC time. In transfer scenarios, the DisconnectTimestamp of the previous contact indicates the date and time when that contact ended.
   *
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * If this contact is related to other contacts, this is the ID of the initial contact.
   *
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * If this contact is not the first contact, this is the ID of the previous contact.
   *
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * The contactId that is related to this contact.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * Indicates how the contact was initiated.
   *
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * How the contact reached your contact center.
   *
   * @public
   */
  Channel?: Channel | undefined;
}

/**
 * @public
 */
export interface ListAssociatedContactsResponse {
  /**
   * List of the contact summary for all the contacts in contact tree associated with unique identifier.
   *
   * @public
   */
  ContactSummaryList?: AssociatedContactSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedFilesConfigurationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of the attached files configuration.
 *
 * @public
 */
export interface AttachedFilesConfigurationSummary {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The scope of the attachment. Valid values are `EMAIL`, `CHAT`, `CASE`, and `TASK`.
   *
   * @public
   */
  AttachmentScope: AttachmentScope | undefined;

  /**
   * The maximum size limit for attached files in bytes. The minimum value is 1 and the maximum value is 104857600 (100 MB).
   *
   * @public
   */
  MaximumSizeLimitInBytes?: number | undefined;

  /**
   * The configuration for allowed file extensions.
   *
   * @public
   */
  ExtensionConfiguration?: ExtensionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAttachedFilesConfigurationsResponse {
  /**
   * Information about the attached files configurations.
   *
   * @public
   */
  AttachedFilesConfigurations?: AttachedFilesConfigurationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This API is in preview release for Connect Customer and is subject to change. To request access to this API, contact Amazon Web Services Support.
 *
 * A summary of a given authentication profile.
 *
 * @public
 */
export interface AuthenticationProfileSummary {
  /**
   * The unique identifier of the authentication profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the authentication profile summary.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the authentication profile summary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Shows whether the authentication profile is the default authentication profile for the Connect Customer instance. The default authentication profile applies to all agents in an Connect Customer instance, unless overridden by another authentication profile.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The timestamp when the authentication profile summary was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region when the authentication profile summary was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesResponse {
  /**
   * A summary of a given authentication profile.
   *
   * @public
   */
  AuthenticationProfileSummaryList?: AuthenticationProfileSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The version of Amazon Lex or Amazon Lex V2.
   *
   * @public
   */
  LexVersion: LexVersion | undefined;
}

/**
 * Configuration information of an Amazon Lex or Amazon Lex V2 bot.
 *
 * @public
 */
export interface LexBotConfig {
  /**
   * Configuration information of an Amazon Lex bot.
   *
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * Configuration information of an Amazon Lex V2 bot.
   *
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots associated with the specified instance.
   *
   * @public
   */
  LexBots?: LexBotConfig[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChildHoursOfOperationsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the parent hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListChildHoursOfOperationsResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the hours of operation.
   *
   * @public
   */
  ChildHoursOfOperationsSummaryList?: HoursOfOperationsIdentifier[] | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListContactEvaluationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * > **Important:** This is not expected to be set because the value returned in the previous response is always null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an evaluation acknowledgement.
 *
 * @public
 */
export interface EvaluationAcknowledgementSummary {
  /**
   * The time when an agent acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgedTime?: Date | undefined;

  /**
   * The agent who acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgedBy?: string | undefined;

  /**
   * A comment from the agent when they confirmed they acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgerComment?: string | undefined;
}

/**
 * Summary information about a contact evaluation.
 *
 * @public
 */
export interface EvaluationSummary {
  /**
   * A unique identifier for the contact evaluation.
   *
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the contact evaluation resource.
   *
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * A title of the evaluation form.
   *
   * @public
   */
  EvaluationFormTitle: string | undefined;

  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The calibration session ID that this evaluation belongs to.
   *
   * @public
   */
  CalibrationSessionId?: string | undefined;

  /**
   * The status of the contact evaluation.
   *
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * Whether automated evaluation is enabled.
   *
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * The status of the contact auto evaluation.
   *
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the evaluation.
   *
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * The overall score of the contact evaluation.
   *
   * @public
   */
  Score?: EvaluationScore | undefined;

  /**
   * Information related to evaluation acknowledgement.
   *
   * @public
   */
  Acknowledgement?: EvaluationAcknowledgementSummary | undefined;

  /**
   * Type of the evaluation.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * The timestamp for when the evaluation was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The timestamp for when the evaluation was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Information about a contact participant in the evaluation.
   *
   * @public
   */
  ContactParticipant?: EvaluationContactParticipant | undefined;
}

/**
 * @public
 */
export interface ListContactEvaluationsResponse {
  /**
   * Provides details about a list of contact evaluations belonging to an instance.
   *
   * @public
   */
  EvaluationSummaryList: EvaluationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * > **Important:** This is always returned as null in the response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowAliasesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a flow alias.
 *
 * @public
 */
export interface ContactFlowAliasSummary {
  /**
   * The Amazon Resource Name (ARN) of the flow alias.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the alias.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * The version of the flow.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  AliasDescription?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowAliasesResponse {
  /**
   * Information about the flow aliases.
   *
   * @public
   */
  ContactFlowAliasSummaryList?: ContactFlowAliasSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleAliasesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about an alias.
 *
 * @public
 */
export interface ContactFlowModuleAliasSummary {
  /**
   * The Amazon Resource Name (ARN) of the flow module alias.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the alias.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * The version of the flow module.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  AliasDescription?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleAliasesResponse {
  /**
   * Information about the flow module aliases.
   *
   * @public
   */
  ContactFlowModuleAliasSummaryList?: ContactFlowModuleAliasSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModulesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The state of the flow module.
   *
   * @public
   */
  ContactFlowModuleState?: ContactFlowModuleState | undefined;
}

/**
 * Contains summary information about a flow.
 *
 * @public
 */
export interface ContactFlowModuleSummary {
  /**
   * The identifier of the flow module.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow module.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the flow module.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of flow module.
   *
   * @public
   */
  State?: ContactFlowModuleState | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModulesResponse {
  /**
   * Information about the flow module.
   *
   * @public
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleVersionsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a version.
 *
 * @public
 */
export interface ContactFlowModuleVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the flow module version.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the flow module version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The version of the flow module.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleVersionsResponse {
  /**
   * Information about the flow module versions.
   *
   * @public
   */
  ContactFlowModuleVersionSummaryList?: ContactFlowModuleVersionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of flow.
   *
   * @public
   */
  ContactFlowTypes?: ContactFlowType[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a flow.
 *
 * You can also create and update flows using the [Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html).
 *
 * @public
 */
export interface ContactFlowSummary {
  /**
   * The identifier of the flow.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of flow.
   *
   * @public
   */
  ContactFlowType?: ContactFlowType | undefined;

  /**
   * The type of flow.
   *
   * @public
   */
  ContactFlowState?: ContactFlowState | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  ContactFlowStatus?: ContactFlowStatus | undefined;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * Information about the flows.
   *
   * @public
   */
  ContactFlowSummaryList?: ContactFlowSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowVersionsRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of a flow version's metadata.
 *
 * @public
 */
export interface ContactFlowVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the flow version.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the flow version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The identifier of the flow version.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowVersionsResponse {
  /**
   * A list of flow version summaries.
   *
   * @public
   */
  ContactFlowVersionSummaryList?: ContactFlowVersionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the initial contact.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The type of reference.
   *
   * @public
   */
  ReferenceTypes: ReferenceType[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * > **Important:** This is not expected to be set, because the value returned in the previous response is always null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a reference when the `referenceType` is `ATTACHMENT`. Otherwise, null.
 *
 * @public
 */
export interface AttachmentReference {
  /**
   * Identifier of the attachment reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The location path of the attachment reference.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Status of the attachment reference type.
   *
   * @public
   */
  Status?: ReferenceStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the attachment reference.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about a reference when the `referenceType` is `CONTACT_ANALYSIS`. Otherwise, null.
 *
 * @public
 */
export interface ContactAnalysisReference {
  /**
   * Identifier of the contact analysis reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The location path of the contact analysis reference.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Status of the contact analysis reference type.
   *
   * @public
   */
  Status?: ReferenceStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the contact analysis reference.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The analytics mode of the contact analysis.
   *
   * @public
   */
  AnalyticsMode?: AnalyticsMode | undefined;

  /**
   * Indicates whether sensitive data has been redacted from the contact analysis.
   *
   * @public
   */
  IsRedacted?: boolean | undefined;
}

/**
 * Information about a reference when the `referenceType` is `DATE`. Otherwise, null.
 *
 * @public
 */
export interface DateReference {
  /**
   * Identifier of the date reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A valid date.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about a reference when the `referenceType` is `EMAIL`. Otherwise, null.
 *
 * @public
 */
export interface EmailReference {
  /**
   * Identifier of the email reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A valid email address.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about the reference when the referenceType is `EMAIL_MESSAGE`. Otherwise, null.
 *
 * @public
 */
export interface EmailMessageReference {
  /**
   * The name of the email message reference
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the email message reference
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about a reference when the `referenceType` is `NUMBER`. Otherwise, null.
 *
 * @public
 */
export interface NumberReference {
  /**
   * Identifier of the number reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A valid number.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about a reference when the `referenceType` is `STRING`. Otherwise, null.
 *
 * @public
 */
export interface StringReference {
  /**
   * Identifier of the string reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A valid string.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The URL reference.
 *
 * @public
 */
export interface UrlReference {
  /**
   * Identifier of the URL reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A valid URL.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains summary information about a reference. `ReferenceSummary` contains only one non null field between the URL and attachment based on the reference type.
 *
 * @public
 */
export type ReferenceSummary =
  | ReferenceSummary.AttachmentMember
  | ReferenceSummary.ContactAnalysisMember
  | ReferenceSummary.DateMember
  | ReferenceSummary.EmailMember
  | ReferenceSummary.EmailMessageMember
  | ReferenceSummary.EmailMessagePlainTextMember
  | ReferenceSummary.EmailMessagePlainTextRedactedMember
  | ReferenceSummary.EmailMessageRedactedMember
  | ReferenceSummary.NumberMember
  | ReferenceSummary.StringMember
  | ReferenceSummary.UrlMember
  | ReferenceSummary.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceSummary {
  /**
   * Information about the reference when the `referenceType` is `URL`. Otherwise, null.
   *
   * @public
   */
  export interface UrlMember {
    Url: UrlReference;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about the reference when the `referenceType` is `ATTACHMENT`. Otherwise, null.
   *
   * @public
   */
  export interface AttachmentMember {
    Url?: never;
    Attachment: AttachmentReference;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about the reference when the referenceType is `EMAIL_MESSAGE`. Otherwise, null.
   *
   * @public
   */
  export interface EmailMessageMember {
    Url?: never;
    Attachment?: never;
    EmailMessage: EmailMessageReference;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about the reference when the referenceType is `EMAIL_MESSAGE`. Otherwise, null.
   *
   * @public
   */
  export interface EmailMessageRedactedMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted: EmailMessageReference;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about the reference when the referenceType is `EMAIL_MESSAGE`. Otherwise, null.
   *
   * @public
   */
  export interface EmailMessagePlainTextMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText: EmailMessageReference;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about the reference when the referenceType is `EMAIL_MESSAGE`. Otherwise, null.
   *
   * @public
   */
  export interface EmailMessagePlainTextRedactedMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted: EmailMessageReference;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about a reference when the `referenceType` is `STRING`. Otherwise, null.
   *
   * @public
   */
  export interface StringMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String: StringReference;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about a reference when the `referenceType` is `NUMBER`. Otherwise, null.
   *
   * @public
   */
  export interface NumberMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number: NumberReference;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about a reference when the `referenceType` is `DATE`. Otherwise, null.
   *
   * @public
   */
  export interface DateMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date: DateReference;
    Email?: never;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about a reference when the `referenceType` is `EMAIL`. Otherwise, null.
   *
   * @public
   */
  export interface EmailMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email: EmailReference;
    ContactAnalysis?: never;
    $unknown?: never;
  }

  /**
   * Information about a reference when the `referenceType` is `CONTACT_ANALYSIS`. Otherwise, null.
   *
   * @public
   */
  export interface ContactAnalysisMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis: ContactAnalysisReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Url?: never;
    Attachment?: never;
    EmailMessage?: never;
    EmailMessageRedacted?: never;
    EmailMessagePlainText?: never;
    EmailMessagePlainTextRedacted?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    ContactAnalysis?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Url: (value: UrlReference) => T;
    Attachment: (value: AttachmentReference) => T;
    EmailMessage: (value: EmailMessageReference) => T;
    EmailMessageRedacted: (value: EmailMessageReference) => T;
    EmailMessagePlainText: (value: EmailMessageReference) => T;
    EmailMessagePlainTextRedacted: (value: EmailMessageReference) => T;
    String: (value: StringReference) => T;
    Number: (value: NumberReference) => T;
    Date: (value: DateReference) => T;
    Email: (value: EmailReference) => T;
    ContactAnalysis: (value: ContactAnalysisReference) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListContactReferencesResponse {
  /**
   * Information about the flows.
   *
   * @public
   */
  ReferenceSummaryList?: ReferenceSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * > **Important:** This is always returned as null in the response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTableAttributesRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table whose attributes should be listed.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * Optional list of specific attribute IDs to retrieve. Used for CloudFormation to effectively describe attributes by ID. If NextToken is provided, this parameter is ignored.
   *
   * @public
   */
  AttributeIds?: string[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data table attributes to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataTableAttributesResponse {
  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of data table attributes with their complete configuration and metadata.
   *
   * @public
   */
  Attributes: DataTableAttribute[] | undefined;
}

/**
 * A primary attribute value filter.
 *
 * @public
 */
export interface PrimaryAttributeValueFilter {
  /**
   * The filter's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The filter's values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListDataTablePrimaryValuesRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table whose primary values should be listed.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * Optional list of specific record IDs to retrieve. Used for CloudFormation to effectively describe records by ID. If NextToken is provided, this parameter is ignored.
   *
   * @public
   */
  RecordIds?: string[] | undefined;

  /**
   * Optional filter to retrieve primary values matching specific criteria.
   *
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValueFilter[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data table primary values to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A record primary value.
 *
 * @public
 */
export interface RecordPrimaryValue {
  /**
   * The value's record ID.
   *
   * @public
   */
  RecordId?: string | undefined;

  /**
   * The value's primary values.
   *
   * @public
   */
  PrimaryValues?: PrimaryValueResponse[] | undefined;

  /**
   * The value's last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The value's last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTablePrimaryValuesResponse {
  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of primary value combinations with their record IDs and modification metadata.
   *
   * @public
   */
  PrimaryValuesList: RecordPrimaryValue[] | undefined;
}

/**
 * @public
 */
export interface ListDataTablesRequest {
  /**
   * The unique identifier for the Amazon Connect instance whose data tables should be listed.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data tables to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A data table summary.
 *
 * @public
 */
export interface DataTableSummary {
  /**
   * The summary's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The summary's ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The summary's ARN.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The summary's last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The summary's last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTablesResponse {
  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of data table summaries containing basic information about each table including ID, ARN, name, and modification details.
   *
   * @public
   */
  DataTableSummaryList: DataTableSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDataTableValuesRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table whose values should be listed.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * Optional list of specific record IDs to retrieve values for.
   *
   * @public
   */
  RecordIds?: string[] | undefined;

  /**
   * Optional filter to retrieve values for records matching specific primary attribute criteria.
   *
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValueFilter[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data table values to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A data table value summary.
 *
 * @public
 */
export interface DataTableValueSummary {
  /**
   * The summary's record ID.
   *
   * @public
   */
  RecordId?: string | undefined;

  /**
   * The summary's attribute ID.
   *
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * The summary's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValueResponse[] | undefined;

  /**
   * The summary's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The summary's value type.
   *
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * The summary's value.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The summary's lock version.
   *
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * The summary's last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The summary's last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTableValuesResponse {
  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of data table values with their associated metadata, lock versions, and modification details.
   *
   * @public
   */
  Values: DataTableValueSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html)
   *
   * @public
   */
  LanguageCode?: VocabularyLanguageCode | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about a default vocabulary.
 *
 * @public
 */
export interface DefaultVocabulary {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html)
   *
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * The identifier of the custom vocabulary.
   *
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * A unique name of the custom vocabulary.
   *
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * A list of default vocabularies.
   *
   * @public
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitySecurityProfilesRequest {
  /**
   * The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Only supported type is AI_AGENT.
   *
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * ARN of a Q in Connect AI Agent.
   *
   * @public
   */
  EntityArn: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitySecurityProfilesResponse {
  /**
   * List of Security Profile Object.
   *
   * @public
   */
  SecurityProfiles?: SecurityProfileItem[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormAIVersionsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The contact interaction type for the evaluation form.
   *
   * @public
   */
  ContactInteractionType: ContactInteractionType | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the status and availability dates for an AI version, indicating when the version became active and when it reaches end of life.
 *
 * @public
 */
export interface EvaluationFormAIVersionLifecycle {
  /**
   * The status of the AI version. Valid values:
   *
   * - `Latest` - The most recent AI version.
   * - `Preview` - An AI version available for preview.
   * - `Active` - An AI version that is currently available.
   * - `Deprecated` - An AI version that is no longer recommended for use.
   * - `Removed` - An AI version that is no longer available.
   *
   * @public
   */
  Status: EvaluationFormAIVersionStatus | undefined;

  /**
   * The timestamp for when this AI version became available.
   *
   * @public
   */
  StartOfLifeTime: Date | undefined;

  /**
   * The timestamp when this AI version reaches or reached end of life.
   *
   * @public
   */
  EndOfLifeTime?: Date | undefined;
}

/**
 * Contains the name and lifecycle information for an AI version that you can use when creating or updating an evaluation form.
 *
 * @public
 */
export interface EvaluationFormAIVersionSummary {
  /**
   * The name of the AI version.
   *
   * @public
   */
  AIVersionName: string | undefined;

  /**
   * The lifecycle information for this AI version, including its status and availability dates.
   *
   * @public
   */
  AIVersionLifecycle: EvaluationFormAIVersionLifecycle | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormAIVersionsResponse {
  /**
   * The list of AI version summaries.
   *
   * @public
   */
  AIVersionSummaries: EvaluationFormAIVersionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an evaluation form.
 *
 * @public
 */
export interface EvaluationFormSummary {
  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the evaluation form resource.
   *
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * A title of the evaluation form.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The timestamp for when the evaluation form was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the evaluation form.
   *
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * The timestamp for when the evaluation form was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the evaluation form.
   *
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * The timestamp for when the evaluation form was last activated.
   *
   * @public
   */
  LastActivatedTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last activated the evaluation form.
   *
   * @public
   */
  LastActivatedBy?: string | undefined;

  /**
   * The version number of the latest evaluation form version.
   *
   * @public
   */
  LatestVersion: number | undefined;

  /**
   * The version of the active evaluation form version.
   *
   * @public
   */
  ActiveVersion?: number | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormsResponse {
  /**
   * Provides details about a list of evaluation forms belonging to an instance.
   *
   * @public
   */
  EvaluationFormSummaryList: EvaluationFormSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an evaluation form.
 *
 * @public
 */
export interface EvaluationFormVersionSummary {
  /**
   * The Amazon Resource Name (ARN) for the evaluation form resource.
   *
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * The flag indicating whether the evaluation form is locked for changes.
   *
   * @public
   */
  Locked: boolean | undefined;

  /**
   * The status of the evaluation form.
   *
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * The timestamp for when the evaluation form was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the evaluation form.
   *
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * The timestamp for when the evaluation form was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the evaluation form.
   *
   * @public
   */
  LastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsResponse {
  /**
   * Provides details about a list of evaluation forms belonging to an instance.
   *
   * @public
   */
  EvaluationFormVersionSummaryList: EvaluationFormVersionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExtractionDefinitionsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an extraction definition.
 *
 * @public
 */
export interface ExtractionDefinitionSummary {
  /**
   * The name of the extraction definition.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier of the extraction definition.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extraction definition.
   *
   * @public
   */
  ExtractionDefinitionArn: string | undefined;

  /**
   * The timestamp when the extraction definition was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The timestamp when the extraction definition was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the extraction definition.
   *
   * @public
   */
  LastUpdatedBy: string | undefined;
}

/**
 * @public
 */
export interface ListExtractionDefinitionsResponse {
  /**
   * Information about the extraction definitions.
   *
   * @public
   */
  ExtractionDefinitionSummaryList: ExtractionDefinitionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowAssociationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowAssociationsResponse {
  /**
   * Summary of flow associations.
   *
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationOverridesRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationOverridesResponse {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the hours of operation override.
   *
   * @public
   */
  HoursOfOperationOverrideList?: HoursOfOperationOverride[] | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about hours of operation for a contact center.
 *
 * @public
 */
export interface HoursOfOperationSummary {
  /**
   * The identifier of the hours of operation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hours of operation.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the hours of operation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * Information about the hours of operation.
   *
   * @public
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * The attribute types.
   *
   * @public
   */
  Attributes?: Attribute[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about the instance.
 *
 * @public
 */
export interface InstanceSummary {
  /**
   * The identifier of the instance.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identity management type of the instance.
   *
   * @public
   */
  IdentityManagementType?: DirectoryType | undefined;

  /**
   * The alias of the instance.
   *
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * When the instance was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The service role of the instance.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * The state of the instance.
   *
   * @public
   */
  InstanceStatus?: InstanceStatus | undefined;

  /**
   * Whether inbound calls are enabled.
   *
   * @public
   */
  InboundCallsEnabled?: boolean | undefined;

  /**
   * Whether outbound calls are enabled.
   *
   * @public
   */
  OutboundCallsEnabled?: boolean | undefined;

  /**
   * This URL allows contact center users to access the Connect Customer admin website.
   *
   * @public
   */
  InstanceAccessUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * Information about the instances.
   *
   * @public
   */
  InstanceSummaryList?: InstanceSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * A valid storage type.
   *
   * @public
   */
  StorageConfigs?: InstanceStorageConfig[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The integration type.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;
}

/**
 * Contains summary information about the associated AppIntegrations.
 *
 * @public
 */
export interface IntegrationAssociationSummary {
  /**
   * The identifier for the AppIntegration association.
   *
   * @public
   */
  IntegrationAssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the AppIntegration association.
   *
   * @public
   */
  IntegrationAssociationArn?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The integration type.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * The Amazon Resource Name (ARN) for the AppIntegration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * The URL for the external application.
   *
   * @public
   */
  SourceApplicationUrl?: string | undefined;

  /**
   * The user-provided, friendly name for the external application.
   *
   * @public
   */
  SourceApplicationName?: string | undefined;

  /**
   * The name of the source.
   *
   * @public
   */
  SourceType?: SourceType | undefined;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * The associations.
   *
   * @public
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * The Lambdafunction ARNs associated with the specified instance.
   *
   * @public
   */
  LambdaFunctions?: string[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. If no value is specified, the default is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * The names and Amazon Web Services Regions of the Amazon Lex bots associated with the specified instance.
   *
   * @public
   */
  LexBots?: LexBot[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of metrics to list. Valid values: `AWS_MANAGED` | `CUSTOMER_MANAGED`.
   *
   * @public
   */
  Type?: MetricType | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about a metric.
 *
 * @public
 */
export interface MetricSummary {
  /**
   * The Amazon Resource Name (ARN) of the metric.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the metric.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The publish status of the metric.
   *
   * @public
   */
  Status: MetricStatus | undefined;

  /**
   * The type of the metric.
   *
   * @public
   */
  Type: MetricType | undefined;

  /**
   * The region where the metric was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The timestamp of when the metric was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListMetricsResponse {
  /**
   * The list of metric summaries.
   *
   * @public
   */
  MetricSummaryList: MetricSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. Valid range is 1-100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNotificationsResponse {
  /**
   * The token for the next set of results. If present, there are more results available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of notification summaries.
   *
   * @public
   */
  NotificationSummaryList: Notification[] | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of phone number.
   *
   * > **Note:** We recommend using [ListPhoneNumbersV2](https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html) to return phone number types. While ListPhoneNumbers returns number types `UIFN`, `SHARED`, `THIRD_PARTY_TF`, and `THIRD_PARTY_DID`, it incorrectly lists them as `TOLL_FREE` or `DID`.
   *
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[] | undefined;

  /**
   * The ISO country code.
   *
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a phone number for a contact center.
 *
 * @public
 */
export interface PhoneNumberSummary {
  /**
   * The identifier of the phone number.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the phone number.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The phone number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The type of phone number.
   *
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * The ISO country code.
   *
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * Information about the phone numbers.
   *
   * @public
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through. If both `TargetArn` and `InstanceId` input are not provided, this API lists numbers claimed to all the Connect Customer instances belonging to your account in the same Amazon Web Services Region as the request.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The identifier of the Connect Customer instance that phone numbers are claimed to. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance. If both `TargetArn` and `InstanceId` are not provided, this API lists numbers claimed to all the Connect Customer instances belonging to your account in the same Amazon Web Services Region as the request.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ISO country code.
   *
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[] | undefined;

  /**
   * The type of phone number.
   *
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[] | undefined;

  /**
   * The prefix of the phone number. If provided, it must contain `+` as part of the country code.
   *
   * @public
   */
  PhoneNumberPrefix?: string | undefined;
}

/**
 * Information about phone numbers that have been claimed to your Connect Customer instance or traffic distribution group.
 *
 * @public
 */
export interface ListPhoneNumbersSummary {
  /**
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the phone number.
   *
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * The phone number. Phone numbers are formatted `[+] [country code] [subscriber number including area code]`.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The ISO country code.
   *
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * The type of phone number.
   *
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The identifier of the Connect Customer instance that phone numbers are claimed to. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The description of the phone number.
   *
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * The claimed phone number ARN that was previously imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number that was imported from Amazon Web Services End User Messaging.
   *
   * @public
   */
  SourcePhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about phone numbers that have been claimed to your Connect Customer instances or traffic distribution groups.
   *
   * @public
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of a predefined attribute.
 *
 * @public
 */
export interface PredefinedAttributeSummary {
  /**
   * The name of the predefined attribute.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Summary of the predefined attributes.
   *
   * @public
   */
  PredefinedAttributeSummaryList?: PredefinedAttributeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about the prompt.
 *
 * @public
 */
export interface PromptSummary {
  /**
   * The identifier of the prompt.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the prompt.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the prompt.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * Information about the prompts.
   *
   * @public
   */
  PromptSummaryList?: PromptSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueEmailAddressesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about an email address associated with a queue. Contains the essential details needed to identify and manage the email address routing configuration.
 *
 * @public
 */
export interface EmailAddressSummary {
  /**
   * The unique identifier of the email address associated with the queue.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the email address associated with the queue.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Indicates whether this email address is configured as the default outbound email address for the queue. When set to true, this email address is used as the default sender for outbound email contacts from this queue.
   *
   * @public
   */
  IsDefaultOutboundEmail?: boolean | undefined;
}

/**
 * @public
 */
export interface ListQueueEmailAddressesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of email address summary information for all email addresses associated with the queue. Each item contains the email address identifier, ARN, and configuration details.
   *
   * @public
   */
  EmailAddressMetadataList?: EmailAddressSummary[] | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a quick connect.
 *
 * @public
 */
export interface QuickConnectSummary {
  /**
   * The identifier for the quick connect.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quick connect.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the quick connect.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of quick connect. In the Connect Customer admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
   *
   * @public
   */
  QuickConnectType?: QuickConnectType | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the quick connects.
   *
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[] | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of queue.
   *
   * @public
   */
  QueueTypes?: QueueType[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a queue.
 *
 * @public
 */
export interface QueueSummary {
  /**
   * The identifier of the queue.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the queue.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of queue.
   *
   * @public
   */
  QueueType?: QueueType | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * Information about the queues.
   *
   * @public
   */
  QueueSummaryList?: QueueSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance. Both Instance ID and Instance ARN are supported input formats.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The type of quick connect. In the Connect Customer admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
   *
   * @public
   */
  QuickConnectTypes?: QuickConnectType[] | undefined;
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * Information about the quick connects.
   *
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A list of tag conditions that the filter evaluates together using AND logic. A category segment matches only when the tags on its rule satisfy every tag condition in the list.
 *
 * @public
 */
export interface CategoriesAttributeAndCondition {
  /**
   * A list of tag conditions. All of the tag conditions must be met for the condition to match.
   *
   * @public
   */
  TagConditions?: TagCondition[] | undefined;
}

/**
 * A filter that matches category segments based on the tags assigned to the rules that create the categories. Provide exactly one of `OrConditions`, `AndCondition`, or `TagCondition`.
 *
 * @public
 */
export interface CategoriesAttributeFilter {
  /**
   * A list of conditions that the filter evaluates using OR logic. A category segment matches when at least one of the conditions in the list is met.
   *
   * @public
   */
  OrConditions?: CategoriesAttributeAndCondition[] | undefined;

  /**
   * A condition that the filter evaluates using AND logic. A category segment matches only when all of the tag conditions in the condition are met.
   *
   * @public
   */
  AndCondition?: CategoriesAttributeAndCondition | undefined;

  /**
   * A single tag condition that a category segment must match. The category's rule must have the specified tag key and value.
   *
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * A filter that restricts the segments returned by `ListRealtimeContactAnalysisSegmentsV2`. It currently supports filtering category segments by the tags on the rules that create them, which enforces tag-based access control on the categories a caller can view.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentsFilter {
  /**
   * A filter applied to category segments based on the tags of the rules that create the matched categories. This filter applies only when `SegmentTypes` includes `Categories`.
   *
   * @public
   */
  CategoriesAttributeFilter?: CategoriesAttributeFilter | undefined;
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Request {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Contact Lens output type to be returned.
   *
   * @public
   */
  OutputType: RealTimeContactAnalysisOutputType | undefined;

  /**
   * Enum with segment types . Each value corresponds to a segment type returned in the segments list of the API. Each segment type has its own structure. Different channels may have different sets of supported segment types.
   *
   * @public
   */
  SegmentTypes: RealTimeContactAnalysisSegmentType[] | undefined;

  /**
   * A filter that restricts the segments returned by the API. When `SegmentTypes` includes `Categories`, use `CategoriesAttributeFilter` to return only the category segments whose rules have tags that match the filter. This enforces tag-based access control on the categories a caller can view.
   *
   * @public
   */
  ListFilter?: RealTimeContactAnalysisSegmentsFilter | undefined;
}

/**
 * Object that describes attached file.
 *
 * @public
 */
export interface RealTimeContactAnalysisAttachment {
  /**
   * A case-sensitive name of the attachment being uploaded. Can be redacted.
   *
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * Describes the MIME file type of the attachment. For a list of supported file types, see [Feature specifications](https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * A unique identifier for the attachment.
   *
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * Status of the attachment.
   *
   * @public
   */
  Status?: ArtifactStatus | undefined;
}

/**
 * Object describing time with which the segment is associated. It can have different representations of time. Currently supported: absoluteTime
 *
 * @public
 */
export type RealTimeContactAnalysisTimeData =
  | RealTimeContactAnalysisTimeData.AbsoluteTimeMember
  | RealTimeContactAnalysisTimeData.$UnknownMember;

/**
 * @public
 */
export namespace RealTimeContactAnalysisTimeData {
  /**
   * Time represented in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  export interface AbsoluteTimeMember {
    AbsoluteTime: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AbsoluteTime?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AbsoluteTime: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Segment containing list of attachments.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentAttachments {
  /**
   * The identifier of the segment.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the participant.
   *
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * The role of the participant. For example, is it a customer, agent, or system.
   *
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * The display name of the participant. Can be redacted.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * List of objects describing an individual attachment.
   *
   * @public
   */
  Attachments: RealTimeContactAnalysisAttachment[] | undefined;

  /**
   * Field describing the time of the event. It can have different representations of time.
   *
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * Begin and end offsets for a part of text.
 *
 * @public
 */
export interface RealTimeContactAnalysisCharacterInterval {
  /**
   * The beginning of the character interval.
   *
   * @public
   */
  BeginOffsetChar: number | undefined;

  /**
   * The end of the character interval.
   *
   * @public
   */
  EndOffsetChar: number | undefined;
}

/**
 * Transcript representation containing Id and list of character intervals that are associated with analysis data. For example, this object within a `RealTimeContactAnalysisPointOfInterest` in `Category.MatchedDetails` would have character interval describing part of the text that matched category.
 *
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
  /**
   * Transcript identifier. Matches the identifier from one of the TranscriptSegments.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * List of character intervals within transcript content/text.
   *
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval | undefined;
}

/**
 * The section of the contact transcript segment that category rule was detected.
 *
 * @public
 */
export interface RealTimeContactAnalysisPointOfInterest {
  /**
   * List of the transcript items (segments) that are associated with a given point of interest.
   *
   * @public
   */
  TranscriptItems?: RealTimeContactAnalysisTranscriptItemWithCharacterOffsets[] | undefined;
}

/**
 * Provides information about the category rule that was matched.
 *
 * @public
 */
export interface RealTimeContactAnalysisCategoryDetails {
  /**
   * The unique identifier of the rule that created the matched category.
   *
   * @public
   */
  RuleId?: string | undefined;

  /**
   * List of PointOfInterest - objects describing a single match of a rule.
   *
   * @public
   */
  PointsOfInterest: RealTimeContactAnalysisPointOfInterest[] | undefined;
}

/**
 * The matched category rules.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentCategories {
  /**
   * Map between the name of the matched rule and RealTimeContactAnalysisCategoryDetails.
   *
   * @public
   */
  MatchedDetails: Record<string, RealTimeContactAnalysisCategoryDetails> | undefined;
}

/**
 * Segment type describing a contact event.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentEvent {
  /**
   * The identifier of the contact event.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the participant.
   *
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * The role of the participant. For example, is it a customer, agent, or system.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * The display name of the participant. Can be redacted.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Type of the event. For example, `application/vnd.amazonaws.connect.event.participant.left`.
   *
   * @public
   */
  EventType: string | undefined;

  /**
   * Field describing the time of the event. It can have different representations of time.
   *
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * An individual value extracted from the conversation, including its content and the locations where it was found.
 *
 * @public
 */
export interface RealTimeContactAnalysisExtractedInformationValue {
  /**
   * The text content of the extracted value.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The sections in the conversation that indicate where the extracted value was found.
   *
   * @public
   */
  PointsOfInterest: RealTimeContactAnalysisTranscriptItemWithCharacterOffsets[] | undefined;
}

/**
 * Segment containing information extracted from the conversation. Each segment represents the results for a single extraction definition.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentExtractedInformation {
  /**
   * The identifier of the extraction definition that produced this result.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;

  /**
   * The name of the extraction definition that produced this result.
   *
   * @public
   */
  ExtractionDefinitionName: string | undefined;

  /**
   * The display label of the extraction definition that produced this result.
   *
   * @public
   */
  ExtractionDefinitionDisplayLabel?: string | undefined;

  /**
   * The list of values extracted from the conversation for this extraction definition. This field is empty when a `FailureCode` is present.
   *
   * @public
   */
  ExtractedValues?: RealTimeContactAnalysisExtractedInformationValue[] | undefined;

  /**
   * If the information failed to be extracted, one of the following failure codes occurs:
   *
   * - `QUOTA_EXCEEDED`: The number of concurrent analytics jobs reached your service quota.
   * - `INSUFFICIENT_CONVERSATION_CONTENT`: Information extraction requires a conversation with at least one turn from each participant.
   * - `FAILED_SAFETY_GUIDELINES`: The extracted information cannot be provided because it failed to meet system safety guidelines.
   * - `INTERNAL_ERROR`: Internal system error.
   * - `MAX_PACKAGE_FEATURE_ONLY`: Information extraction is only available in Amazon Connect Customer instances.
   *
   * @public
   */
  FailureCode?: RealTimeContactAnalysisExtractedInformationFailureCode | undefined;
}

/**
 * Transcript representation containing Id, Content and list of character intervals that are associated with analysis data. For example, this object within an issue detected would describe both content that contains identified issue and intervals where that content is taken from.
 *
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithContent {
  /**
   * Part of the transcript content that contains identified issue. Can be redacted
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Transcript identifier. Matches the identifier from one of the TranscriptSegments.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Begin and end offsets for a part of text.
   *
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval | undefined;
}

/**
 * Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
 *
 * @public
 */
export interface RealTimeContactAnalysisIssueDetected {
  /**
   * List of the transcript items (segments) that are associated with a given issue.
   *
   * @public
   */
  TranscriptItems: RealTimeContactAnalysisTranscriptItemWithContent[] | undefined;
}

/**
 * Segment type containing a list of detected issues.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentIssues {
  /**
   * List of the issues detected.
   *
   * @public
   */
  IssuesDetected: RealTimeContactAnalysisIssueDetected[] | undefined;
}

/**
 * Information about the post-contact summary for a real-time contact segment.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentPostContactSummary {
  /**
   * The content of the summary.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Whether the summary was successfully COMPLETED or FAILED to be generated.
   *
   * @public
   */
  Status: RealTimeContactAnalysisPostContactSummaryStatus | undefined;

  /**
   * If the summary failed to be generated, one of the following failure codes occurs:
   *
   * - `QUOTA_EXCEEDED`: The number of concurrent analytics jobs reached your service quota.
   * - `INSUFFICIENT_CONVERSATION_CONTENT`: The conversation needs to have at least one turn from both the participants in order to generate the summary.
   * - `FAILED_SAFETY_GUIDELINES`: The generated summary cannot be provided because it failed to meet system safety guidelines.
   * - `INVALID_ANALYSIS_CONFIGURATION`: This code occurs when, for example, you're using a [language](https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens) that isn't supported by generative AI-powered post-contact summaries.
   * - `INTERNAL_ERROR`: Internal system error.
   *
   * @public
   */
  FailureCode?: RealTimeContactAnalysisPostContactSummaryFailureCode | undefined;
}

/**
 * Object describing redaction applied to the segment.
 *
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemRedaction {
  /**
   * List of character intervals each describing a part of the text that was redacted. For `OutputType.Raw`, part of the original text that contains data that can be redacted. For `OutputType.Redacted`, part of the string with redaction tag.
   *
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval[] | undefined;
}

/**
 * The analyzed transcript segment.
 *
 * @public
 */
export interface RealTimeContactAnalysisSegmentTranscript {
  /**
   * The identifier of the transcript.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the participant.
   *
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * The role of the participant. For example, is it a customer, agent, or system.
   *
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * The display name of the participant.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The content of the transcript. Can be redacted.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The type of content of the item. For example, `text/plain`.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Field describing the time of the event. It can have different representations of time.
   *
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;

  /**
   * Object describing redaction that was applied to the transcript. If transcript has the field it means part of the transcript was redacted.
   *
   * @public
   */
  Redaction?: RealTimeContactAnalysisTranscriptItemRedaction | undefined;

  /**
   * The sentiment detected for this piece of transcript.
   *
   * @public
   */
  Sentiment?: RealTimeContactAnalysisSentimentLabel | undefined;
}

/**
 * An analyzed segment for a real-time analysis session.
 *
 * @public
 */
export type RealtimeContactAnalysisSegment =
  | RealtimeContactAnalysisSegment.AttachmentsMember
  | RealtimeContactAnalysisSegment.CategoriesMember
  | RealtimeContactAnalysisSegment.EventMember
  | RealtimeContactAnalysisSegment.ExtractedInformationMember
  | RealtimeContactAnalysisSegment.IssuesMember
  | RealtimeContactAnalysisSegment.PostContactSummaryMember
  | RealtimeContactAnalysisSegment.TranscriptMember
  | RealtimeContactAnalysisSegment.$UnknownMember;

/**
 * @public
 */
export namespace RealtimeContactAnalysisSegment {
  /**
   * The analyzed transcript segment.
   *
   * @public
   */
  export interface TranscriptMember {
    Transcript: RealTimeContactAnalysisSegmentTranscript;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    ExtractedInformation?: never;
    $unknown?: never;
  }

  /**
   * The matched category rules.
   *
   * @public
   */
  export interface CategoriesMember {
    Transcript?: never;
    Categories: RealTimeContactAnalysisSegmentCategories;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    ExtractedInformation?: never;
    $unknown?: never;
  }

  /**
   * Segment type containing a list of detected issues.
   *
   * @public
   */
  export interface IssuesMember {
    Transcript?: never;
    Categories?: never;
    Issues: RealTimeContactAnalysisSegmentIssues;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    ExtractedInformation?: never;
    $unknown?: never;
  }

  /**
   * Segment type describing a contact event.
   *
   * @public
   */
  export interface EventMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event: RealTimeContactAnalysisSegmentEvent;
    Attachments?: never;
    PostContactSummary?: never;
    ExtractedInformation?: never;
    $unknown?: never;
  }

  /**
   * The analyzed attachments.
   *
   * @public
   */
  export interface AttachmentsMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments: RealTimeContactAnalysisSegmentAttachments;
    PostContactSummary?: never;
    ExtractedInformation?: never;
    $unknown?: never;
  }

  /**
   * Information about the post-contact summary.
   *
   * @public
   */
  export interface PostContactSummaryMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary: RealTimeContactAnalysisSegmentPostContactSummary;
    ExtractedInformation?: never;
    $unknown?: never;
  }

  /**
   * The extracted information from the conversation.
   *
   * @public
   */
  export interface ExtractedInformationMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    ExtractedInformation: RealTimeContactAnalysisSegmentExtractedInformation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    ExtractedInformation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Transcript: (value: RealTimeContactAnalysisSegmentTranscript) => T;
    Categories: (value: RealTimeContactAnalysisSegmentCategories) => T;
    Issues: (value: RealTimeContactAnalysisSegmentIssues) => T;
    Event: (value: RealTimeContactAnalysisSegmentEvent) => T;
    Attachments: (value: RealTimeContactAnalysisSegmentAttachments) => T;
    PostContactSummary: (value: RealTimeContactAnalysisSegmentPostContactSummary) => T;
    ExtractedInformation: (value: RealTimeContactAnalysisSegmentExtractedInformation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Response {
  /**
   * The channel of the contact.
   *
   * > **Important:** Only `CHAT` is supported. This API does not support `VOICE`. If you attempt to use it for the VOICE channel, an `InvalidRequestException` error occurs.
   *
   * @public
   */
  Channel: RealTimeContactAnalysisSupportedChannel | undefined;

  /**
   * Status of real-time contact analysis.
   *
   * @public
   */
  Status: RealTimeContactAnalysisStatus | undefined;

  /**
   * An analyzed transcript or category.
   *
   * @public
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationFindingsRequest {
  /**
   * The identifier of the Connect Customer instance. You can provide either the instance ID or the full instance ARN. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of resource to list replication findings for. The following values are currently supported: `AGENT`, `AGENT_GROUP`, `AGENT_GROUP_LEVEL`, `AGENT_STATE`, `ATTRIBUTE`, `CONTACT_FLOW`, `DATA_TABLE`, `DATA_TABLE_ATTRIBUTE`, `DATA_TABLE_RECORD`, `DATA_TABLE_VALUE`, `FLOW_MODULE`, `FLOW_MODULE_ALIAS`, `FLOW_MODULE_VERSION`, `METRIC`, `NOTIFICATION`, `OPERATING_HOURS`, `PHONE_NUMBER`, `PROMPT`, `QUEUE`, `REPORT`, `ROUTING_PROFILE`, `SECURITY_PROFILE`, `TASK_TEMPLATE`, `TEST_CASE`, `TRANSFER_DESTINATION`, `VIEW`, and `WORKSPACE`. Additional resource types can be supported over time. Specifying a value that is not currently supported returns an `InvalidRequestException`.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains an approximate count of the resources of a given type that are not yet in sync in a Region, along with the time the count was last calculated.
 *
 * @public
 */
export interface ApproximateDriftedResourceCount {
  /**
   * The Amazon Web Services Region that the count applies to.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The approximate number of resources of the requested type that are not yet in sync in the Region. A value of zero means the resources are in sync.
   *
   * @public
   */
  Count: number | undefined;

  /**
   * The time, in Unix epoch time, when the count was last calculated.
   *
   * @public
   */
  Timestamp: Date | undefined;
}

/**
 * Contains information about a resource that could not be replicated across the Regions of a Global Resiliency deployment, including the reason and any action required to resolve it.
 *
 * @public
 */
export interface ReplicationFinding {
  /**
   * The Amazon Resource Name (ARN) of the resource that the finding is for.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the resource that the finding is for.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Web Services Region that the finding was detected in.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The type of resource that the finding is for, such as `QUEUE` or `ROUTING_PROFILE`.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The name of the resource that the finding is for.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The replication operation that produced the finding, such as a create, update, or delete of the resource.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * A stable code that identifies the class of the finding. Use this code to look up the recommended steps to resolve the finding.
   *
   * @public
   */
  ReferenceCode?: string | undefined;

  /**
   * A human-readable description of the finding and the action, if any, required to resolve it.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Indicates whether a resource type is being replicated and kept in sync in a specific Amazon Web Services Region of a Global Resiliency deployment.
 *
 * @public
 */
export interface ResourceReplicationStatus {
  /**
   * The Amazon Web Services Region that the replication status applies to.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The replication status of the resource type in the Region, such as `ENABLED`, `BLOCKED`, or `DISABLED`.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationFindingsResponse {
  /**
   * A list of replication findings for the requested resource type. Only findings that require your action are returned, so this list can be empty even when a drift count is nonzero. Results are paginated.
   *
   * @public
   */
  ReplicationFindingsList: ReplicationFinding[] | undefined;

  /**
   * The approximate number of resources of the requested type that are not yet in sync, reported per Amazon Web Services Region. This count is independent of `ReplicationFindingsList` and can be higher than the number of findings returned. It is eventually consistent and can lag the current state of the instance. Each entry is the `ApproximateDriftedResourceCount` for one Region; a Region appears only when its count has been computed.
   *
   * @public
   */
  ApproximateDriftedResourceCounts?: ApproximateDriftedResourceCount[] | undefined;

  /**
   * If there are additional results, this is the token for retrieving the next page of `ReplicationFindingsList`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The replication status of the requested resource type in each Amazon Web Services Region across which the Connect Customer instance is deployed for Global Resiliency, with one entry per Region. This set describes the overall replication state for the request and is returned in full on every page of results, so it does not change as you paginate.
   *
   * @public
   */
  ResourceReplicationStatuses?: ResourceReplicationStatus[] | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileManualAssignmentQueuesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the routing profile.
   *
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a routing profile manual assignment queue.
 *
 * @public
 */
export interface RoutingProfileManualAssignmentQueueConfigSummary {
  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  QueueArn: string | undefined;

  /**
   * The name of the queue.
   *
   * @public
   */
  QueueName: string | undefined;

  /**
   * The channels this queue supports. Valid Values: CHAT | TASK | EMAIL
   *
   * > **Important:** VOICE is not supported. The information shown below is incorrect. We're working to correct it.
   *
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileManualAssignmentQueuesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the manual assignment queues associated with the routing profile.
   *
   * @public
   */
  RoutingProfileManualAssignmentQueueConfigSummaryList?: RoutingProfileManualAssignmentQueueConfigSummary[] | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the routing profile.
   *
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a routing profile queue.
 *
 * @public
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  QueueArn: string | undefined;

  /**
   * The name of the queue.
   *
   * @public
   */
  QueueName: string | undefined;

  /**
   * The order in which contacts are to be handled for the queue. For more information, see [Queues: priority and delay](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html).
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The delay, in seconds, that a contact should be in the queue before they are routed to an available agent. For more information, see [Queues: priority and delay](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Delay: number | undefined;

  /**
   * The channels this queue supports.
   *
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the routing profiles.
   *
   * @public
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[] | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a routing profile.
 *
 * @public
 */
export interface RoutingProfileSummary {
  /**
   * The identifier of the routing profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the routing profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the routing profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * Information about the routing profiles.
   *
   * @public
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The publish status of the rule.
   *
   * @public
   */
  PublishStatus?: RulePublishStatus | undefined;

  /**
   * The name of the event source.
   *
   * @public
   */
  EventSourceName?: EventSourceName | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A list of `ActionTypes` associated with a rule.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn: string | undefined;

  /**
   * The name of the event source.
   *
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * The publish status of the rule.
   *
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * The list of capability tiers associated with the rule. Used for categorizing rules by capability (for example, `GenerativeAI`).
   *
   * @public
   */
  RuleCapabilityTiers?: RuleCapabilityTier[] | undefined;

  /**
   * A list of ActionTypes associated with a rule.
   *
   * @public
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * The timestamp for when the rule was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The timestamp for when the rule was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * Summary information about a rule.
   *
   * @public
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Configuration information of the security key.
 *
 * @public
 */
export interface SecurityKey {
  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * The key of the security key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * When the security key was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * The security keys.
   *
   * @public
   */
  SecurityKeys?: SecurityKey[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileAIAgentsRequest {
  /**
   * The identifier for the security profle.
   *
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileAIAgentsResponse {
  /**
   * A list of the allowed AI agents and their types.
   *
   * @public
   */
  AllowedAIAgents?: AIAgent[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsRequest {
  /**
   * The identifier for the security profle.
   *
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsResponse {
  /**
   * A list of the third-party application's metadata.
   *
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileFlowModulesRequest {
  /**
   * The identifier for the security profile.
   *
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileFlowModulesResponse {
  /**
   * A list of Flow Modules an AI Agent can invoke as a tool.
   *
   * @public
   */
  AllowedFlowModules?: FlowModule[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The time the flow module was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Region that flow module was last modified in.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
  /**
   * The identifier for the security profle.
   *
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * The permissions granted to the security profile. For a complete list of valid permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html).
   *
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a security profile.
 *
 * @public
 */
export interface SecurityProfileSummary {
  /**
   * The identifier of the security profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the security profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the security profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The type of the security profile: `AWS_MANAGED` or `CUSTOMER_MANAGED`.
   *
   * @public
   */
  Type?: SecurityProfileType | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * Information about the security profiles.
   *
   * @public
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. All Connect Customer resources (instances, queues, flows, routing profiles, etc) have an ARN. To locate the ARN for an instance, for example, see [Find your Connect Customer instance ID/ARN](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html).
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
   * Information about the tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * > **Important:** It is not expected that you set this because the value returned in the previous response is always null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * > **Important:** It is not expected that you set this.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Marks a template as `ACTIVE` or `INACTIVE` for a task to refer to it. Tasks can only be created from `ACTIVE` templates. If a template is marked as `INACTIVE`, then a task that refers to this template cannot be created.
   *
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * The name of the task template.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains summary information about the task template.
 *
 * @public
 */
export interface TaskTemplateMetadata {
  /**
   * A unique identifier for the task template.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task template.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the task template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the task template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Marks a template as `ACTIVE` or `INACTIVE` for a task to refer to it. Tasks can only be created from `ACTIVE` templates. If a template is marked as `INACTIVE`, then a task that refers to this template cannot be created.
   *
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * The timestamp when the task template was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The timestamp when the task template was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTaskTemplatesResponse {
  /**
   * Provides details about a list of task templates belonging to an instance.
   *
   * @public
   */
  TaskTemplates?: TaskTemplateMetadata[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * > **Important:** This is always returned as a null in the response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionRecordsRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case.
   *
   * @public
   */
  TestCaseId: string | undefined;

  /**
   * The identifier of the test case execution.
   *
   * @public
   */
  TestCaseExecutionId: string | undefined;

  /**
   * Filter execution records by status.
   *
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a test case execution record.
 *
 * @public
 */
export interface ExecutionRecord {
  /**
   * The identifier of the execution record.
   *
   * @public
   */
  ObservationId?: string | undefined;

  /**
   * The status of the action execution.
   *
   * @public
   */
  Status?: ExecutionRecordStatus | undefined;

  /**
   * The timestamp when the action was executed.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The details of the executed record.
   *
   * @public
   */
  Record?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionRecordsResponse {
  /**
   * An array of test case execution record objects.
   *
   * @public
   */
  ExecutionRecords?: ExecutionRecord[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionsRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Filter executions by test case identifier.
   *
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * Filter executions by test case name.
   *
   * @public
   */
  TestCaseName?: string | undefined;

  /**
   * Filter executions that started after this time.
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * Filter executions that started before this time.
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * Filter executions by status.
   *
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a test case execution.
 *
 * @public
 */
export interface TestCaseExecution {
  /**
   * The timestamp when the test case execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp when the test case execution ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The identifier of the test case execution.
   *
   * @public
   */
  TestCaseExecutionId?: string | undefined;

  /**
   * The identifier of the test case.
   *
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * The status of the test case execution.
   *
   * @public
   */
  TestCaseExecutionStatus?: TestCaseExecutionStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionsResponse {
  /**
   * An array of test case execution summary objects.
   *
   * @public
   */
  TestCaseExecutions?: TestCaseExecution[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCasesRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a test case.
 *
 * @public
 */
export interface TestCaseSummary {
  /**
   * The identifier of the test case.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the test case.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the test case.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the test case.
   *
   * @public
   */
  Status?: TestCaseStatus | undefined;

  /**
   * The time at which the test case was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The region in which the test case was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCasesResponse {
  /**
   * Information about the tests.
   *
   * @public
   */
  TestCaseSummaryList?: TestCaseSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Information about traffic distribution groups.
 *
 * @public
 */
export interface TrafficDistributionGroupSummary {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the traffic distribution group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the traffic distribution group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The status of the traffic distribution group.
   *
   * - `CREATION_IN_PROGRESS` means the previous [CreateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html) operation is still in progress and has not yet completed.
   * - `ACTIVE` means the previous [CreateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html) operation has succeeded.
   * - `CREATION_FAILED` indicates that the previous [CreateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html) operation has failed.
   * - `PENDING_DELETION` means the previous [DeleteTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html) operation is still in progress and has not yet completed.
   * - `DELETION_FAILED` means the previous [DeleteTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html) operation has failed.
   * - `UPDATE_IN_PROGRESS` means the previous [UpdateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistributionGroup.html) operation is still in progress and has not yet completed.
   *
   * @public
   */
  Status?: TrafficDistributionGroupStatus | undefined;

  /**
   * Whether this is the default traffic distribution group created during instance replication. The default traffic distribution group cannot be deleted by the `DeleteTrafficDistributionGroup` API. The default traffic distribution group is deleted as part of the process for deleting a replica.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of traffic distribution groups.
   *
   * @public
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a traffic distribution group user.
 *
 * @public
 */
export interface TrafficDistributionGroupUserSummary {
  /**
   * The identifier for the user. This can be the ID or the ARN of the user.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of traffic distribution group users.
   *
   * @public
   */
  TrafficDistributionGroupUserSummaryList?: TrafficDistributionGroupUserSummary[] | undefined;
}

/**
 * Provides summary information about the use cases for the specified integration association.
 *
 * @public
 */
export interface ListUseCasesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the integration association.
   *
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the use case.
 *
 * @public
 */
export interface UseCase {
  /**
   * The identifier for the use case.
   *
   * @public
   */
  UseCaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the use case.
   *
   * @public
   */
  UseCaseArn?: string | undefined;

  /**
   * The type of use case to associate to the integration association. Each integration association can have only one of each use case type.
   *
   * @public
   */
  UseCaseType?: UseCaseType | undefined;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * The use cases.
   *
   * @public
   */
  UseCaseSummaryList?: UseCase[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * Information about the hierarchy groups.
   *
   * @public
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserNotificationsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. Valid range is 1-1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The identifier of the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * Summary information about a notification for a specific user, including the user's read status.
 *
 * @public
 */
export interface UserNotificationSummary {
  /**
   * The unique identifier for the notification.
   *
   * @public
   */
  NotificationId?: string | undefined;

  /**
   * The status of the notification for this user. Valid values are READ, UNREAD, and HIDDEN.
   *
   * @public
   */
  NotificationStatus?: NotificationStatus | undefined;

  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The identifier of the recipient user.
   *
   * @public
   */
  RecipientId?: string | undefined;

  /**
   * The localized content of the notification.
   *
   * @public
   */
  Content?: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * The priority level of the notification.
   *
   * @public
   */
  Priority?: NotificationPriority | undefined;

  /**
   * The source that created the notification. Valid values are CUSTOMER, RULES, and SYSTEM.
   *
   * @public
   */
  Source?: NotificationSource | undefined;

  /**
   * The timestamp when the notification was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the notification expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListUserNotificationsResponse {
  /**
   * A list of notifications sent to the specified user.
   *
   * @public
   */
  UserNotifications?: UserNotificationSummary[] | undefined;

  /**
   * The token for the next set of results. If present, there are more results available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserProficienciesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the user account.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUserProficienciesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the user proficiencies.
   *
   * @public
   */
  UserProficiencyList?: UserProficiency[] | undefined;

  /**
   * The last time that the user's proficiencies are were modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The region in which a user's proficiencies were last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains summary information about a user.
 *
 * @public
 */
export interface UserSummary {
  /**
   * The identifier of the user account.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Connect Customer user name of the user account.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}
