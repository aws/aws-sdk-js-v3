// smithy-typescript generated code
import type {
  EncryptionStatus,
  EncryptionType,
  InsightCategory,
  InsightState,
  RetrievalStatus,
  SamplingStrategyName,
  TimeRangeType,
  TraceFormatType,
  TraceSegmentDestination,
  TraceSegmentDestinationStatus,
} from "./enums";

/**
 * An alias for an edge.
 *
 * @public
 */
export interface Alias {
  /**
   * The canonical name of the alias.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of names for the alias, including the canonical name.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The type of the alias.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
 *
 * @public
 */
export type AnnotationValue =
  | AnnotationValue.BooleanValueMember
  | AnnotationValue.NumberValueMember
  | AnnotationValue.StringValueMember
  | AnnotationValue.$UnknownMember;

/**
 * @public
 */
export namespace AnnotationValue {
  /**
   * Value for a Number annotation.
   *
   * @public
   */
  export interface NumberValueMember {
    NumberValue: number;
    BooleanValue?: never;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * Value for a Boolean annotation.
   *
   * @public
   */
  export interface BooleanValueMember {
    NumberValue?: never;
    BooleanValue: boolean;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * Value for a String annotation.
   *
   * @public
   */
  export interface StringValueMember {
    NumberValue?: never;
    BooleanValue?: never;
    StringValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    NumberValue?: never;
    BooleanValue?: never;
    StringValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    NumberValue: (value: number) => T;
    BooleanValue: (value: boolean) => T;
    StringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ServiceId {
  /**
   * @public
   */
  Name?: string | undefined;

  /**
   * @public
   */
  Names?: string[] | undefined;

  /**
   * @public
   */
  AccountId?: string | undefined;

  /**
   * @public
   */
  Type?: string | undefined;
}

/**
 * Information about a segment annotation.
 *
 * @public
 */
export interface ValueWithServiceIds {
  /**
   * Values of the annotation.
   *
   * @public
   */
  AnnotationValue?: AnnotationValue | undefined;

  /**
   * Services to which the annotation applies.
   *
   * @public
   */
  ServiceIds?: ServiceId[] | undefined;
}

/**
 * The service within the service graph that has anomalously high fault rates.
 *
 * @public
 */
export interface AnomalousService {
  /**
   * @public
   */
  ServiceId?: ServiceId | undefined;
}

/**
 * A list of Availability Zones corresponding to the segments in a trace.
 *
 * @public
 */
export interface AvailabilityZoneDetail {
  /**
   * The name of a corresponding Availability Zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTracesRequest {
  /**
   * Specify the trace IDs of requests for which to retrieve segments.
   *
   * @public
   */
  TraceIds: string[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with [PutTraceSegments](https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html), or an `inferred` segment for a downstream service, generated from a subsegment sent by the service that called it.
 *
 * For the full segment document schema, see [Amazon Web Services X-Ray segment documents](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray-interface-api.html#xray-api-segmentdocuments) in the *Amazon Web Services X-Ray Developer Guide*.
 *
 * @public
 */
export interface Segment {
  /**
   * The segment's ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The segment document.
   *
   * @public
   */
  Document?: string | undefined;
}

/**
 * A collection of segment documents with matching trace IDs.
 *
 * @public
 */
export interface Trace {
  /**
   * The unique identifier for the request that generated the trace's segments and subsegments.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * LimitExceeded is set to true when the trace has exceeded the `Trace document size` limit. For more information about this limit and other X-Ray limits and quotas, see [Amazon Web Services X-Ray endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/xray.html).
   *
   * @public
   */
  LimitExceeded?: boolean | undefined;

  /**
   * Segment documents for the segments and subsegments that comprise the trace.
   *
   * @public
   */
  Segments?: Segment[] | undefined;
}

/**
 * @public
 */
export interface BatchGetTracesResult {
  /**
   * Full traces for the specified requests.
   *
   * @public
   */
  Traces?: Trace[] | undefined;

  /**
   * Trace IDs of requests that haven't been processed.
   *
   * @public
   */
  UnprocessedTraceIds?: string[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelTraceRetrievalRequest {
  /**
   * Retrieval token.
   *
   * @public
   */
  RetrievalToken: string | undefined;
}

/**
 * @public
 */
export interface CancelTraceRetrievalResult {}

/**
 * The structure containing configurations related to insights.
 *
 * @public
 */
export interface InsightsConfiguration {
  /**
   * Set the InsightsEnabled value to true to enable insights or false to disable insights.
   *
   * @public
   */
  InsightsEnabled?: boolean | undefined;

  /**
   * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
   *
   * @public
   */
  NotificationsEnabled?: boolean | undefined;
}

/**
 * A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling rule. For more information about ways to use tags, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
 *
 * The following restrictions apply to tags:
 *
 * - Maximum number of user-applied tags per resource: 50
 * - Tag keys and values are case sensitive.
 * - Don't use `aws:` as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.
 *
 * @public
 */
export interface Tag {
  /**
   * A tag key, such as `Stage` or `Name`. A tag key cannot be empty. The key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : /`
   *
   * @public
   */
  Key: string | undefined;

  /**
   * An optional tag value, such as `Production` or `test-only`. The value can be a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : /`
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The filter expression defining criteria by which to group traces.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * The structure containing configurations related to insights.
   *
   * - The InsightsEnabled boolean can be set to true to enable insights for the new group or false to disable insights for the new group.
   * - The NotificationsEnabled boolean can be set to true to enable insights notifications for the new group. Notifications may only be enabled on a group with InsightsEnabled set to true.
   *
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;

  /**
   * A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * The following restrictions apply to tags:
   *
   * - Maximum number of user-applied tags per resource: 50
   * - Maximum tag key length: 128 Unicode characters
   * - Maximum tag value length: 256 Unicode characters
   * - Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @
   * - Tag keys and values are case sensitive.
   * - Don't use `aws:` as a prefix for keys; it's reserved for Amazon Web Services use.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Details and metadata for a group.
 *
 * @public
 */
export interface Group {
  /**
   * The unique case-sensitive name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group generated based on the GroupName.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * The filter expression defining the parameters to include traces.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * The structure containing configurations related to insights.
   *
   * - The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.
   * - The NotificationsEnabled boolean can be set to true to enable insights notifications through Amazon EventBridge for the group.
   *
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateGroupResult {
  /**
   * The group that was created. Contains the name of the group that was created, the Amazon Resource Name (ARN) of the group that was generated based on the group name, the filter expression, and the insight configuration that was assigned to the group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * Enable temporary sampling rate increases when you detect anomalies to improve visibility.
 *
 * @public
 */
export interface SamplingRateBoost {
  /**
   * Defines max temporary sampling rate to apply when a boost is triggered. Calculated boost rate by X-Ray will be less than or equal to this max rate.
   *
   * @public
   */
  MaxRate: number | undefined;

  /**
   * Sets the time window (in minutes) in which only one sampling rate boost can be triggered. After a boost occurs, no further boosts are allowed until the next window.
   *
   * @public
   */
  CooldownWindowMinutes: number | undefined;
}

/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
 *
 * @public
 */
export interface SamplingRule {
  /**
   * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   *
   * @public
   */
  RuleARN?: string | undefined;

  /**
   * Matches the ARN of the Amazon Web Services resource on which the service runs.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The priority of the sampling rule.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   *
   * @public
   */
  FixedRate: number | undefined;

  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
   *
   * @public
   */
  ReservoirSize: number | undefined;

  /**
   * Matches the `name` that the service uses to identify itself in segments.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * Matches the `origin` that the service uses to identify its type in segments.
   *
   * @public
   */
  ServiceType: string | undefined;

  /**
   * Matches the hostname from a request URL.
   *
   * @public
   */
  Host: string | undefined;

  /**
   * Matches the HTTP method of a request.
   *
   * @public
   */
  HTTPMethod: string | undefined;

  /**
   * Matches the path from a request URL.
   *
   * @public
   */
  URLPath: string | undefined;

  /**
   * The version of the sampling rule format (`1`).
   *
   * @public
   */
  Version: number | undefined;

  /**
   * Matches attributes derived from the request.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * Specifies the multiplier applied to the base sampling rate. This boost allows you to temporarily increase sampling without changing the rule's configuration.
   *
   * @public
   */
  SamplingRateBoost?: SamplingRateBoost | undefined;
}

/**
 * @public
 */
export interface CreateSamplingRuleRequest {
  /**
   * The rule definition.
   *
   * @public
   */
  SamplingRule: SamplingRule | undefined;

  /**
   * A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * The following restrictions apply to tags:
   *
   * - Maximum number of user-applied tags per resource: 50
   * - Maximum tag key length: 128 Unicode characters
   * - Maximum tag value length: 256 Unicode characters
   * - Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @
   * - Tag keys and values are case sensitive.
   * - Don't use `aws:` as a prefix for keys; it's reserved for Amazon Web Services use.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A [SamplingRule](https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html) and its metadata.
 *
 * @public
 */
export interface SamplingRuleRecord {
  /**
   * The sampling rule.
   *
   * @public
   */
  SamplingRule?: SamplingRule | undefined;

  /**
   * When the rule was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * When the rule was last modified.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSamplingRuleResult {
  /**
   * The saved rule definition and metadata.
   *
   * @public
   */
  SamplingRuleRecord?: SamplingRuleRecord | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The case-sensitive name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ARN of the group that was generated on creation.
   *
   * @public
   */
  GroupARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResult {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The name of the resource policy to delete.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Specifies a specific policy revision to delete. Provide a `PolicyRevisionId` to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an `InvalidPolicyRevisionIdException` exception is returned.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResult {}

/**
 * @public
 */
export interface DeleteSamplingRuleRequest {
  /**
   * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   *
   * @public
   */
  RuleARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSamplingRuleResult {
  /**
   * The deleted rule definition and metadata.
   *
   * @public
   */
  SamplingRuleRecord?: SamplingRuleRecord | undefined;
}

/**
 * @public
 */
export interface GetEncryptionConfigRequest {}

/**
 * A configuration document that specifies encryption configuration settings.
 *
 * @public
 */
export interface EncryptionConfig {
  /**
   * The ID of the KMS key used for encryption, if applicable.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The encryption status. While the status is `UPDATING`, X-Ray may encrypt data with a combination of the new and old settings.
   *
   * @public
   */
  Status?: EncryptionStatus | undefined;

  /**
   * The type of encryption. Set to `KMS` for encryption with KMS keys. Set to `NONE` for default encryption.
   *
   * @public
   */
  Type?: EncryptionType | undefined;
}

/**
 * @public
 */
export interface GetEncryptionConfigResult {
  /**
   * The encryption configuration document.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * The case-sensitive name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ARN of the group that was generated on creation.
   *
   * @public
   */
  GroupARN?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResult {
  /**
   * The group that was requested. Contains the name of the group, the ARN of the group, the filter expression, and the insight configuration assigned to the group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface GetGroupsRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details for a group without metadata.
 *
 * @public
 */
export interface GroupSummary {
  /**
   * The unique case-sensitive name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ARN of the group generated based on the GroupName.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * The filter expression defining the parameters to include traces.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * The structure containing configurations related to insights.
   *
   * - The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.
   * - The NotificationsEnabled boolean can be set to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
   *
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetGroupsResult {
  /**
   * The collection of all active groups.
   *
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIndexingRulesRequest {
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The indexing rule configuration for probabilistic sampling.
 *
 * @public
 */
export interface ProbabilisticRuleValue {
  /**
   * Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of data.
   *
   * @public
   */
  DesiredSamplingPercentage: number | undefined;

  /**
   * Applied sampling percentage of traceIds.
   *
   * @public
   */
  ActualSamplingPercentage?: number | undefined;
}

/**
 * The indexing rule configuration.
 *
 * @public
 */
export type IndexingRuleValue =
  | IndexingRuleValue.ProbabilisticMember
  | IndexingRuleValue.$UnknownMember;

/**
 * @public
 */
export namespace IndexingRuleValue {
  /**
   * Indexing rule configuration that is used to probabilistically sample traceIds.
   *
   * @public
   */
  export interface ProbabilisticMember {
    Probabilistic: ProbabilisticRuleValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Probabilistic?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Probabilistic: (value: ProbabilisticRuleValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Rule used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray.
 *
 * @public
 */
export interface IndexingRule {
  /**
   * The name of the indexing rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Displays when the rule was last modified, in Unix time seconds.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The indexing rule.
   *
   * @public
   */
  Rule?: IndexingRuleValue | undefined;
}

/**
 * @public
 */
export interface GetIndexingRulesResult {
  /**
   * Retrieves all indexing rules.
   *
   * @public
   */
  IndexingRules?: IndexingRule[] | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightRequest {
  /**
   * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
   *
   * @public
   */
  InsightId: string | undefined;
}

/**
 * Statistics that describe how the incident has impacted a service.
 *
 * @public
 */
export interface RequestImpactStatistics {
  /**
   * The number of requests that have resulted in a fault,
   *
   * @public
   */
  FaultCount?: number | undefined;

  /**
   * The number of successful requests.
   *
   * @public
   */
  OkCount?: number | undefined;

  /**
   * The total number of requests to the service.
   *
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.
 *
 * @public
 */
export interface Insight {
  /**
   * The insights unique identifier.
   *
   * @public
   */
  InsightId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group that the insight belongs to.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * The name of the group that the insight belongs to.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * @public
   */
  RootCauseServiceId?: ServiceId | undefined;

  /**
   * The categories that label and describe the type of insight.
   *
   * @public
   */
  Categories?: InsightCategory[] | undefined;

  /**
   * The current state of the insight.
   *
   * @public
   */
  State?: InsightState | undefined;

  /**
   * The time, in Unix seconds, at which the insight began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time, in Unix seconds, at which the insight ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A brief description of the insight.
   *
   * @public
   */
  Summary?: string | undefined;

  /**
   * The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay.
   *
   * @public
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay.
   *
   * @public
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * The service within the insight that is most impacted by the incident.
   *
   * @public
   */
  TopAnomalousServices?: AnomalousService[] | undefined;
}

/**
 * @public
 */
export interface GetInsightResult {
  /**
   * The summary information of an insight.
   *
   * @public
   */
  Insight?: Insight | undefined;
}

/**
 * @public
 */
export interface GetInsightEventsRequest {
  /**
   * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * Used to retrieve at most the specified value of events.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
 *
 * @public
 */
export interface InsightEvent {
  /**
   * A brief description of the event.
   *
   * @public
   */
  Summary?: string | undefined;

  /**
   * The time, in Unix seconds, at which the event was recorded.
   *
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay.
   *
   * @public
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay.
   *
   * @public
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * The service during the event that is most impacted by the incident.
   *
   * @public
   */
  TopAnomalousServices?: AnomalousService[] | undefined;
}

/**
 * @public
 */
export interface GetInsightEventsResult {
  /**
   * A detailed description of the event. This includes the time of the event, client and root cause impact statistics, and the top anomalous service at the time of the event.
   *
   * @public
   */
  InsightEvents?: InsightEvent[] | undefined;

  /**
   * Use this token to retrieve the next page of insight events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightImpactGraphRequest {
  /**
   * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The connection between two service in an insight impact graph.
 *
 * @public
 */
export interface InsightImpactGraphEdge {
  /**
   * Identifier of the edge. Unique within a service map.
   *
   * @public
   */
  ReferenceId?: number | undefined;
}

/**
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
 *
 * @public
 */
export interface InsightImpactGraphService {
  /**
   * Identifier for the service. Unique within the service map.
   *
   * @public
   */
  ReferenceId?: number | undefined;

  /**
   * Identifier for the service. Unique within the service map.
   *
   * - Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, AWS::EC2::Instance for an application running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used.
   * - Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table.
   * - Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table.
   * - remote - A downstream service of indeterminate type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The canonical name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of names for the service, including the canonical name.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * Identifier of the Amazon Web Services account in which the service runs.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Connections to downstream services.
   *
   * @public
   */
  Edges?: InsightImpactGraphEdge[] | undefined;
}

/**
 * @public
 */
export interface GetInsightImpactGraphResult {
  /**
   * The insight's unique identifier.
   *
   * @public
   */
  InsightId?: string | undefined;

  /**
   * The provided start time.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The provided end time.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The time, in Unix seconds, at which the service graph started.
   *
   * @public
   */
  ServiceGraphStartTime?: Date | undefined;

  /**
   * The time, in Unix seconds, at which the service graph ended.
   *
   * @public
   */
  ServiceGraphEndTime?: Date | undefined;

  /**
   * The Amazon Web Services instrumented services related to the insight.
   *
   * @public
   */
  Services?: InsightImpactGraphService[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightSummariesRequest {
  /**
   * The list of insight states.
   *
   * @public
   */
  States?: InsightState[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * The name of the group. Required if the GroupARN isn't provided.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time frame in which the insights ended. The end time can't be more than 30 days old.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The maximum number of results to display.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information that describes an insight.
 *
 * @public
 */
export interface InsightSummary {
  /**
   * The insights unique identifier.
   *
   * @public
   */
  InsightId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group that the insight belongs to.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * The name of the group that the insight belongs to.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * @public
   */
  RootCauseServiceId?: ServiceId | undefined;

  /**
   * Categories The categories that label and describe the type of insight.
   *
   * @public
   */
  Categories?: InsightCategory[] | undefined;

  /**
   * The current state of the insight.
   *
   * @public
   */
  State?: InsightState | undefined;

  /**
   * The time, in Unix seconds, at which the insight began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time, in Unix seconds, at which the insight ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A brief description of the insight.
   *
   * @public
   */
  Summary?: string | undefined;

  /**
   * The impact statistics of the client side service. This includes the number of requests to the client service and whether the requests were faults or okay.
   *
   * @public
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * The impact statistics of the root cause service. This includes the number of requests to the client service and whether the requests were faults or okay.
   *
   * @public
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * The service within the insight that is most impacted by the incident.
   *
   * @public
   */
  TopAnomalousServices?: AnomalousService[] | undefined;

  /**
   * The time, in Unix seconds, that the insight was last updated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetInsightSummariesResult {
  /**
   * The summary of each insight within the group matching the provided filters. The summary contains the InsightID, start and end time, the root cause service, the root cause and client impact statistics, the top anomalous services, and the status of the insight.
   *
   * @public
   */
  InsightSummaries?: InsightSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRetrievedTracesGraphRequest {
  /**
   * Retrieval token.
   *
   * @public
   */
  RetrievalToken: string | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The relation between two services.
 *
 * @public
 */
export interface GraphLink {
  /**
   * Relationship of a trace to the corresponding service.
   *
   * @public
   */
  ReferenceType?: string | undefined;

  /**
   * Source trace of a link relationship.
   *
   * @public
   */
  SourceTraceId?: string | undefined;

  /**
   * Destination traces of a link relationship.
   *
   * @public
   */
  DestinationTraceIds?: string[] | undefined;
}

/**
 * An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis.
 *
 * @public
 */
export interface HistogramEntry {
  /**
   * The value of the entry.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The prevalence of the entry.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Information about requests that failed with a 4xx Client Error status code.
 *
 * @public
 */
export interface ErrorStatistics {
  /**
   * The number of requests that failed with a 429 throttling status code.
   *
   * @public
   */
  ThrottleCount?: number | undefined;

  /**
   * The number of requests that failed with untracked 4xx Client Error status codes.
   *
   * @public
   */
  OtherCount?: number | undefined;

  /**
   * The total number of requests that failed with a 4xx Client Error status code.
   *
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * Information about requests that failed with a 5xx Server Error status code.
 *
 * @public
 */
export interface FaultStatistics {
  /**
   * The number of requests that failed with untracked 5xx Server Error status codes.
   *
   * @public
   */
  OtherCount?: number | undefined;

  /**
   * The total number of requests that failed with a 5xx Server Error status code.
   *
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * Response statistics for an edge.
 *
 * @public
 */
export interface EdgeStatistics {
  /**
   * The number of requests that completed with a 2xx Success status code.
   *
   * @public
   */
  OkCount?: number | undefined;

  /**
   * Information about requests that failed with a 4xx Client Error status code.
   *
   * @public
   */
  ErrorStatistics?: ErrorStatistics | undefined;

  /**
   * Information about requests that failed with a 5xx Server Error status code.
   *
   * @public
   */
  FaultStatistics?: FaultStatistics | undefined;

  /**
   * The total number of completed requests.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * The aggregate response time of completed requests.
   *
   * @public
   */
  TotalResponseTime?: number | undefined;
}

/**
 * Information about a connection between two services. An edge can be a synchronous connection, such as typical call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an SNS queue.
 *
 * @public
 */
export interface Edge {
  /**
   * Identifier of the edge. Unique within a service map.
   *
   * @public
   */
  ReferenceId?: number | undefined;

  /**
   * The start time of the first segment on the edge.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the last segment on the edge.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Response statistics for segments on the edge.
   *
   * @public
   */
  SummaryStatistics?: EdgeStatistics | undefined;

  /**
   * A histogram that maps the spread of client response times on an edge. Only populated for synchronous edges.
   *
   * @public
   */
  ResponseTimeHistogram?: HistogramEntry[] | undefined;

  /**
   * Aliases for the edge.
   *
   * @public
   */
  Aliases?: Alias[] | undefined;

  /**
   * Describes an asynchronous connection, with a value of `link`.
   *
   * @public
   */
  EdgeType?: string | undefined;

  /**
   * A histogram that maps the spread of event age when received by consumers. Age is calculated each time an event is received. Only populated when *EdgeType* is `link`.
   *
   * @public
   */
  ReceivedEventAgeHistogram?: HistogramEntry[] | undefined;
}

/**
 * Response statistics for a service.
 *
 * @public
 */
export interface ServiceStatistics {
  /**
   * The number of requests that completed with a 2xx Success status code.
   *
   * @public
   */
  OkCount?: number | undefined;

  /**
   * Information about requests that failed with a 4xx Client Error status code.
   *
   * @public
   */
  ErrorStatistics?: ErrorStatistics | undefined;

  /**
   * Information about requests that failed with a 5xx Server Error status code.
   *
   * @public
   */
  FaultStatistics?: FaultStatistics | undefined;

  /**
   * The total number of completed requests.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * The aggregate response time of completed requests.
   *
   * @public
   */
  TotalResponseTime?: number | undefined;
}

/**
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
 *
 * @public
 */
export interface Service {
  /**
   * Identifier for the service. Unique within the service map.
   *
   * @public
   */
  ReferenceId?: number | undefined;

  /**
   * The canonical name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of names for the service, including the canonical name.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * Indicates that the service was the first service to process a request.
   *
   * @public
   */
  Root?: boolean | undefined;

  /**
   * Identifier of the Amazon Web Services account in which the service runs.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The type of service.
   *
   * - Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, `AWS::EC2::Instance` for an application running on Amazon EC2 or `AWS::DynamoDB::Table` for an Amazon DynamoDB table that the application used.
   * - Amazon Web Services Service - The type of an Amazon Web Services service. For example, `AWS::DynamoDB` for downstream calls to Amazon DynamoDB that didn't target a specific table.
   * - `client` - Represents the clients that sent requests to a root service.
   * - `remote` - A downstream service of indeterminate type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The service's state.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The start time of the first segment that the service generated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the last segment that the service generated.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Connections to downstream services.
   *
   * @public
   */
  Edges?: Edge[] | undefined;

  /**
   * Aggregated statistics for the service.
   *
   * @public
   */
  SummaryStatistics?: ServiceStatistics | undefined;

  /**
   * A histogram that maps the spread of service durations.
   *
   * @public
   */
  DurationHistogram?: HistogramEntry[] | undefined;

  /**
   * A histogram that maps the spread of service response times.
   *
   * @public
   */
  ResponseTimeHistogram?: HistogramEntry[] | undefined;
}

/**
 * Retrieved information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
 *
 * @public
 */
export interface RetrievedService {
  /**
   * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
   *
   * @public
   */
  Service?: Service | undefined;

  /**
   * Relation between two 2 services.
   *
   * @public
   */
  Links?: GraphLink[] | undefined;
}

/**
 * @public
 */
export interface GetRetrievedTracesGraphResult {
  /**
   * Status of the retrieval.
   *
   * @public
   */
  RetrievalStatus?: RetrievalStatus | undefined;

  /**
   * Retrieved services.
   *
   * @public
   */
  Services?: RetrievedService[] | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingRulesRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingRulesResult {
  /**
   * Rule definitions and metadata.
   *
   * @public
   */
  SamplingRuleRecords?: SamplingRuleRecord[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingStatisticSummariesRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Aggregated request sampling data for a sampling rule across all services for a 10-second window.
 *
 * @public
 */
export interface SamplingStatisticSummary {
  /**
   * The name of the sampling rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The start time of the reporting window.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The number of requests that matched the rule.
   *
   * @public
   */
  RequestCount?: number | undefined;

  /**
   * The number of requests recorded with borrowed reservoir quota.
   *
   * @public
   */
  BorrowCount?: number | undefined;

  /**
   * The number of requests recorded.
   *
   * @public
   */
  SampledCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSamplingStatisticSummariesResult {
  /**
   * Information about the number of requests instrumented for each sampling rule.
   *
   * @public
   */
  SamplingStatisticSummaries?: SamplingStatisticSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Request anomaly stats for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to [GetSamplingTargets](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html).
 *
 * @public
 */
export interface SamplingBoostStatisticsDocument {
  /**
   * The name of the sampling rule.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * Matches the `name` that the service uses to identify itself in segments.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The current time.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The number of requests with anomaly.
   *
   * @public
   */
  AnomalyCount: number | undefined;

  /**
   * The number of requests that associated to the rule.
   *
   * @public
   */
  TotalCount: number | undefined;

  /**
   * The number of requests with anomaly recorded.
   *
   * @public
   */
  SampledAnomalyCount: number | undefined;
}

/**
 * Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to [GetSamplingTargets](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html).
 *
 * @public
 */
export interface SamplingStatisticsDocument {
  /**
   * The name of the sampling rule.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * A unique identifier for the service in hexadecimal.
   *
   * @public
   */
  ClientID: string | undefined;

  /**
   * The current time.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The number of requests that matched the rule.
   *
   * @public
   */
  RequestCount: number | undefined;

  /**
   * The number of requests recorded.
   *
   * @public
   */
  SampledCount: number | undefined;

  /**
   * The number of requests recorded with borrowed reservoir quota.
   *
   * @public
   */
  BorrowCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSamplingTargetsRequest {
  /**
   * Information about rules that the service is using to sample requests.
   *
   * @public
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;

  /**
   * Information about rules that the service is using to boost sampling rate.
   *
   * @public
   */
  SamplingBoostStatisticsDocuments?: SamplingBoostStatisticsDocument[] | undefined;
}

/**
 * Temporary boost sampling rate. X-Ray calculates sampling boost for each service based on the recent sampling boost stats of all services that called [GetSamplingTargets](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html).
 *
 * @public
 */
export interface SamplingBoost {
  /**
   * The calculated sampling boost rate for this service
   *
   * @public
   */
  BoostRate: number | undefined;

  /**
   * When the sampling boost expires.
   *
   * @public
   */
  BoostRateTTL: Date | undefined;
}

/**
 * Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called [GetSamplingTargets](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html).
 *
 * @public
 */
export interface SamplingTargetDocument {
  /**
   * The name of the sampling rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   *
   * @public
   */
  FixedRate?: number | undefined;

  /**
   * The number of requests per second that X-Ray allocated for this service.
   *
   * @public
   */
  ReservoirQuota?: number | undefined;

  /**
   * When the reservoir quota expires.
   *
   * @public
   */
  ReservoirQuotaTTL?: Date | undefined;

  /**
   * The number of seconds for the service to wait before getting sampling targets again.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The sampling boost that X-Ray allocated for this service.
   *
   * @public
   */
  SamplingBoost?: SamplingBoost | undefined;
}

/**
 * Sampling statistics from a call to [GetSamplingTargets](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html) that X-Ray could not process.
 *
 * @public
 */
export interface UnprocessedStatistics {
  /**
   * The name of the sampling rule.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingTargetsResult {
  /**
   * Updated rules that the service should use to sample requests.
   *
   * @public
   */
  SamplingTargetDocuments?: SamplingTargetDocument[] | undefined;

  /**
   * The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since the service last retrieved it, the service should call [GetSamplingRules](https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html) to get the latest version.
   *
   * @public
   */
  LastRuleModification?: Date | undefined;

  /**
   * Information about [SamplingStatisticsDocument](https://docs.aws.amazon.com/xray/latest/api/API_SamplingStatisticsDocument.html) that X-Ray could not process.
   *
   * @public
   */
  UnprocessedStatistics?: UnprocessedStatistics[] | undefined;

  /**
   * Information about [SamplingBoostStatisticsDocument](https://docs.aws.amazon.com/xray/latest/api/API_SamplingBoostStatisticsDocument.html) that X-Ray could not process.
   *
   * @public
   */
  UnprocessedBoostStatistics?: UnprocessedStatistics[] | undefined;
}

/**
 * @public
 */
export interface GetServiceGraphRequest {
  /**
   * The start of the time frame for which to generate a graph.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the timeframe for which to generate a graph.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The name of a group based on which you want to generate a graph.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceGraphResult {
  /**
   * The start of the time frame for which the graph was generated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time frame for which the graph was generated.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The services that have processed a traced request during the specified time frame.
   *
   * @public
   */
  Services?: Service[] | undefined;

  /**
   * A flag indicating whether the group's filter expression has been consistent, or if the returned service graph may show traces from an older version of the group's filter expression.
   *
   * @public
   */
  ContainsOldGroupVersions?: boolean | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesServiceStatisticsRequest {
  /**
   * The start of the time frame for which to aggregate statistics.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time frame for which to aggregate statistics.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The case-sensitive name of the group for which to pull statistics from.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group for which to pull statistics from.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned.
   *
   * @public
   */
  EntitySelectorExpression?: string | undefined;

  /**
   * Aggregation period in seconds.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.
   *
   * @public
   */
  ForecastStatistics?: boolean | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
 *
 * @public
 */
export interface ForecastStatistics {
  /**
   * The upper limit of fault counts for a service.
   *
   * @public
   */
  FaultCountHigh?: number | undefined;

  /**
   * The lower limit of fault counts for a service.
   *
   * @public
   */
  FaultCountLow?: number | undefined;
}

/**
 * A list of TimeSeriesStatistic structures.
 *
 * @public
 */
export interface TimeSeriesServiceStatistics {
  /**
   * Timestamp of the window for which statistics are aggregated.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * Response statistics for an edge.
   *
   * @public
   */
  EdgeSummaryStatistics?: EdgeStatistics | undefined;

  /**
   * Response statistics for a service.
   *
   * @public
   */
  ServiceSummaryStatistics?: ServiceStatistics | undefined;

  /**
   * The forecasted high and low fault count values.
   *
   * @public
   */
  ServiceForecastStatistics?: ForecastStatistics | undefined;

  /**
   * The response time histogram for the selected entities.
   *
   * @public
   */
  ResponseTimeHistogram?: HistogramEntry[] | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesServiceStatisticsResult {
  /**
   * The collection of statistics.
   *
   * @public
   */
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[] | undefined;

  /**
   * A flag indicating whether or not a group's filter expression has been consistent, or if a returned aggregation might show statistics from an older version of the group's filter expression.
   *
   * @public
   */
  ContainsOldGroupVersions?: boolean | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTraceGraphRequest {
  /**
   * Trace IDs of requests for which to generate a service graph.
   *
   * @public
   */
  TraceIds: string[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTraceGraphResult {
  /**
   * The services that have processed one of the specified requests.
   *
   * @public
   */
  Services?: Service[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTraceSegmentDestinationRequest {}

/**
 * @public
 */
export interface GetTraceSegmentDestinationResult {
  /**
   * Retrieves the current destination.
   *
   * @public
   */
  Destination?: TraceSegmentDestination | undefined;

  /**
   * Status of the retrieval.
   *
   * @public
   */
  Status?: TraceSegmentDestinationStatus | undefined;
}

/**
 * The name and value of a sampling rule to apply to a trace summary.
 *
 * @public
 */
export interface SamplingStrategy {
  /**
   * The name of a sampling rule.
   *
   * @public
   */
  Name?: SamplingStrategyName | undefined;

  /**
   * The value of a sampling rule.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * @public
 */
export interface GetTraceSummariesRequest {
  /**
   * The start of the time frame for which to retrieve traces.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time frame for which to retrieve traces.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace segment end time).
   *
   * @public
   */
  TimeRangeType?: TimeRangeType | undefined;

  /**
   * Set to `true` to get summaries for only a subset of available traces.
   *
   * @public
   */
  Sampling?: boolean | undefined;

  /**
   * A parameter to indicate whether to enable sampling on trace summaries. Input parameters are Name and Value.
   *
   * @public
   */
  SamplingStrategy?: SamplingStrategy | undefined;

  /**
   * Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The exception associated with a root cause.
 *
 * @public
 */
export interface RootCauseException {
  /**
   * The name of the exception.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The message of the exception.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A collection of segments and corresponding subsegments associated to a trace summary error.
 *
 * @public
 */
export interface ErrorRootCauseEntity {
  /**
   * The name of the entity.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The types and messages of the exceptions.
   *
   * @public
   */
  Exceptions?: RootCauseException[] | undefined;

  /**
   * A flag that denotes a remote subsegment.
   *
   * @public
   */
  Remote?: boolean | undefined;
}

/**
 * A collection of fields identifying the services in a trace summary error.
 *
 * @public
 */
export interface ErrorRootCauseService {
  /**
   * The service name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A collection of associated service names.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The type associated to the service.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The account ID associated to the service.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The path of root cause entities found on the service.
   *
   * @public
   */
  EntityPath?: ErrorRootCauseEntity[] | undefined;

  /**
   * A Boolean value indicating if the service is inferred from the trace.
   *
   * @public
   */
  Inferred?: boolean | undefined;
}

/**
 * The root cause of a trace summary error.
 *
 * @public
 */
export interface ErrorRootCause {
  /**
   * A list of services corresponding to an error. A service identifies a segment and it contains a name, account ID, type, and inferred flag.
   *
   * @public
   */
  Services?: ErrorRootCauseService[] | undefined;

  /**
   * A flag that denotes that the root cause impacts the trace client.
   *
   * @public
   */
  ClientImpacting?: boolean | undefined;
}

/**
 * A collection of segments and corresponding subsegments associated to a trace summary fault error.
 *
 * @public
 */
export interface FaultRootCauseEntity {
  /**
   * The name of the entity.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The types and messages of the exceptions.
   *
   * @public
   */
  Exceptions?: RootCauseException[] | undefined;

  /**
   * A flag that denotes a remote subsegment.
   *
   * @public
   */
  Remote?: boolean | undefined;
}

/**
 * A collection of fields identifying the services in a trace summary fault.
 *
 * @public
 */
export interface FaultRootCauseService {
  /**
   * The service name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A collection of associated service names.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The type associated to the service.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The account ID associated to the service.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The path of root cause entities found on the service.
   *
   * @public
   */
  EntityPath?: FaultRootCauseEntity[] | undefined;

  /**
   * A Boolean value indicating if the service is inferred from the trace.
   *
   * @public
   */
  Inferred?: boolean | undefined;
}

/**
 * The root cause information for a trace summary fault.
 *
 * @public
 */
export interface FaultRootCause {
  /**
   * A list of corresponding services. A service identifies a segment and it contains a name, account ID, type, and inferred flag.
   *
   * @public
   */
  Services?: FaultRootCauseService[] | undefined;

  /**
   * A flag that denotes that the root cause impacts the trace client.
   *
   * @public
   */
  ClientImpacting?: boolean | undefined;
}

/**
 * Information about an HTTP request.
 *
 * @public
 */
export interface Http {
  /**
   * The request URL.
   *
   * @public
   */
  HttpURL?: string | undefined;

  /**
   * The response status.
   *
   * @public
   */
  HttpStatus?: number | undefined;

  /**
   * The request method.
   *
   * @public
   */
  HttpMethod?: string | undefined;

  /**
   * The request's user agent string.
   *
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * The IP address of the requestor.
   *
   * @public
   */
  ClientIp?: string | undefined;
}

/**
 * A list of EC2 instance IDs corresponding to the segments in a trace.
 *
 * @public
 */
export interface InstanceIdDetail {
  /**
   * The ID of a corresponding EC2 instance.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * A list of resources ARNs corresponding to the segments in a trace.
 *
 * @public
 */
export interface ResourceARNDetail {
  /**
   * The ARN of a corresponding resource.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * A collection of segments and corresponding subsegments associated to a response time warning.
 *
 * @public
 */
export interface ResponseTimeRootCauseEntity {
  /**
   * The name of the entity.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type and messages of the exceptions.
   *
   * @public
   */
  Coverage?: number | undefined;

  /**
   * A flag that denotes a remote subsegment.
   *
   * @public
   */
  Remote?: boolean | undefined;
}

/**
 * A collection of fields identifying the service in a response time warning.
 *
 * @public
 */
export interface ResponseTimeRootCauseService {
  /**
   * The service name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A collection of associated service names.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The type associated to the service.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The account ID associated to the service.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The path of root cause entities found on the service.
   *
   * @public
   */
  EntityPath?: ResponseTimeRootCauseEntity[] | undefined;

  /**
   * A Boolean value indicating if the service is inferred from the trace.
   *
   * @public
   */
  Inferred?: boolean | undefined;
}

/**
 * The root cause information for a response time warning.
 *
 * @public
 */
export interface ResponseTimeRootCause {
  /**
   * A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and inferred flag.
   *
   * @public
   */
  Services?: ResponseTimeRootCauseService[] | undefined;

  /**
   * A flag that denotes that the root cause impacts the trace client.
   *
   * @public
   */
  ClientImpacting?: boolean | undefined;
}

/**
 * Information about a user recorded in segment documents.
 *
 * @public
 */
export interface TraceUser {
  /**
   * The user's name.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Services that the user's request hit.
   *
   * @public
   */
  ServiceIds?: ServiceId[] | undefined;
}

/**
 * Metadata generated from the segment documents in a trace.
 *
 * @public
 */
export interface TraceSummary {
  /**
   * The unique identifier for the request that generated the trace's segments and subsegments.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The start time of a trace, based on the earliest trace segment start time.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.
   *
   * @public
   */
  ResponseTime?: number | undefined;

  /**
   * The root segment document has a 500 series error.
   *
   * @public
   */
  HasFault?: boolean | undefined;

  /**
   * The root segment document has a 400 series error.
   *
   * @public
   */
  HasError?: boolean | undefined;

  /**
   * One or more of the segment documents has a 429 throttling error.
   *
   * @public
   */
  HasThrottle?: boolean | undefined;

  /**
   * One or more of the segment documents is in progress.
   *
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * Information about the HTTP request served by the trace.
   *
   * @public
   */
  Http?: Http | undefined;

  /**
   * Annotations from the trace's segment documents.
   *
   * @public
   */
  Annotations?: Record<string, ValueWithServiceIds[]> | undefined;

  /**
   * Users from the trace's segment documents.
   *
   * @public
   */
  Users?: TraceUser[] | undefined;

  /**
   * Service IDs from the trace's segment documents.
   *
   * @public
   */
  ServiceIds?: ServiceId[] | undefined;

  /**
   * A list of resource ARNs for any resource corresponding to the trace segments.
   *
   * @public
   */
  ResourceARNs?: ResourceARNDetail[] | undefined;

  /**
   * A list of EC2 instance IDs for any instance corresponding to the trace segments.
   *
   * @public
   */
  InstanceIds?: InstanceIdDetail[] | undefined;

  /**
   * A list of Availability Zones for any zone corresponding to the trace segments.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZoneDetail[] | undefined;

  /**
   * The root of a trace.
   *
   * @public
   */
  EntryPoint?: ServiceId | undefined;

  /**
   * A collection of FaultRootCause structures corresponding to the trace segments.
   *
   * @public
   */
  FaultRootCauses?: FaultRootCause[] | undefined;

  /**
   * A collection of ErrorRootCause structures corresponding to the trace segments.
   *
   * @public
   */
  ErrorRootCauses?: ErrorRootCause[] | undefined;

  /**
   * A collection of ResponseTimeRootCause structures corresponding to the trace segments.
   *
   * @public
   */
  ResponseTimeRootCauses?: ResponseTimeRootCause[] | undefined;

  /**
   * The revision number of a trace.
   *
   * @public
   */
  Revision?: number | undefined;

  /**
   * The matched time stamp of a defined event.
   *
   * @public
   */
  MatchedEventTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetTraceSummariesResult {
  /**
   * Trace IDs and annotations for traces that were found in the specified time frame.
   *
   * @public
   */
  TraceSummaries?: TraceSummary[] | undefined;

  /**
   * The start time of this page of results.
   *
   * @public
   */
  ApproximateTime?: Date | undefined;

  /**
   * The total number of traces processed, including traces that did not match the specified filter expression.
   *
   * @public
   */
  TracesProcessedCount?: number | undefined;

  /**
   * If the requested time frame contained more than one page of results, you can use this token to retrieve the next page. The first page contains the most recent results, closest to the end of the time frame.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * Not currently supported.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A resource policy grants one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy is associated with a specific Amazon Web Services account.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The resource policy document, which can be up to 5kb in size.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * Returns the current policy revision id for this policy name.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * When the policy was last updated, in Unix time seconds.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesResult {
  /**
   * The list of resource policies in the target Amazon Web Services account.
   *
   * @public
   */
  ResourcePolicies?: ResourcePolicy[] | undefined;

  /**
   * Pagination token. Not currently supported.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrievedTracesRequest {
  /**
   * Retrieval token.
   *
   * @public
   */
  RetrievalToken: string | undefined;

  /**
   * Format of the requested traces.
   *
   * @public
   */
  TraceFormat?: TraceFormatType | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A span from a trace that has been ingested by the X-Ray service. A span represents a unit of work or an operation performed by a service.
 *
 * @public
 */
export interface Span {
  /**
   * The span ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The span document.
   *
   * @public
   */
  Document?: string | undefined;
}

/**
 * Retrieved collection of spans with matching trace IDs.
 *
 * @public
 */
export interface RetrievedTrace {
  /**
   * The unique identifier for the span.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The length of time in seconds between the start time of the root span and the end time of the last span that completed.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Spans that comprise the trace.
   *
   * @public
   */
  Spans?: Span[] | undefined;
}

/**
 * @public
 */
export interface ListRetrievedTracesResult {
  /**
   * Status of the retrieval.
   *
   * @public
   */
  RetrievalStatus?: RetrievalStatus | undefined;

  /**
   * Format of the requested traces.
   *
   * @public
   */
  TraceFormat?: TraceFormatType | undefined;

  /**
   * Full traces for the specified requests.
   *
   * @public
   */
  Traces?: RetrievedTrace[] | undefined;

  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
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
   * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A pagination token. If multiple pages of results are returned, use the `NextToken` value returned with the current page of results as the value of this parameter to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A pagination token. If multiple pages of results are returned, use the `NextToken` value returned with the current page of results to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigRequest {
  /**
   * An Amazon Web Services KMS key in one of the following formats:
   *
   * - **Alias** - The name of the key. For example, `alias/MyKey`.
   * - **Key ID** - The KMS key ID of the key. For example, `ae4aa6d49-a4d8-9df9-a475-4ff6d7898456`. Amazon Web Services X-Ray does not support asymmetric KMS keys.
   * - **ARN** - The full Amazon Resource Name of the key ID or alias. For example, `arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456`. Use this format to specify a key in a different account.
   *
   * Omit this key if you set `Type` to `NONE`.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption.
   *
   * @public
   */
  Type: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigResult {
  /**
   * The new encryption configuration.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The resource policy document, which can be up to 5kb in size.
   *
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.
   *
   * If the policy revision id does not match the latest revision id, the operation will fail with an `InvalidPolicyRevisionIdException` exception. You can also provide a `PolicyRevisionId` of 0. In this case, the operation will fail with an `InvalidPolicyRevisionIdException` exception if a resource policy with the same name already exists.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * A flag to indicate whether to bypass the resource policy lockout safety check.
   *
   * > **Important:** Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.
   *
   * Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent `PutResourcePolicy` request.
   *
   * The default value is false.
   *
   * @public
   */
  BypassPolicyLockoutCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * The resource policy document, as provided in the `PutResourcePolicyRequest`.
   *
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface BackendConnectionErrors {
  /**
   * @public
   */
  TimeoutCount?: number | undefined;

  /**
   * @public
   */
  ConnectionRefusedCount?: number | undefined;

  /**
   * @public
   */
  HTTPCode4XXCount?: number | undefined;

  /**
   * @public
   */
  HTTPCode5XXCount?: number | undefined;

  /**
   * @public
   */
  UnknownHostCount?: number | undefined;

  /**
   * @public
   */
  OtherCount?: number | undefined;
}

/**
 * @public
 */
export interface TelemetryRecord {
  /**
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * @public
   */
  SegmentsReceivedCount?: number | undefined;

  /**
   * @public
   */
  SegmentsSentCount?: number | undefined;

  /**
   * @public
   */
  SegmentsSpilloverCount?: number | undefined;

  /**
   * @public
   */
  SegmentsRejectedCount?: number | undefined;

  /**
   * @public
   */
  BackendConnectionErrors?: BackendConnectionErrors | undefined;
}

/**
 * @public
 */
export interface PutTelemetryRecordsRequest {
  /**
   * @public
   */
  TelemetryRecords: TelemetryRecord[] | undefined;

  /**
   * @public
   */
  EC2InstanceId?: string | undefined;

  /**
   * @public
   */
  Hostname?: string | undefined;

  /**
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface PutTelemetryRecordsResult {}

/**
 * @public
 */
export interface PutTraceSegmentsRequest {
  /**
   * A string containing a JSON document defining one or more segments or subsegments.
   *
   * @public
   */
  TraceSegmentDocuments: string[] | undefined;
}

/**
 * Information about a segment that failed processing.
 *
 * @public
 */
export interface UnprocessedTraceSegment {
  /**
   * The segment's ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The error that caused processing to fail.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface PutTraceSegmentsResult {
  /**
   * Segments that failed processing.
   *
   * @public
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[] | undefined;
}

/**
 * @public
 */
export interface StartTraceRetrievalRequest {
  /**
   * Specify the trace IDs of the traces to be retrieved.
   *
   * @public
   */
  TraceIds: string[] | undefined;

  /**
   * The start of the time range to retrieve traces. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time range to retrieve traces. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface StartTraceRetrievalResult {
  /**
   * Retrieval token.
   *
   * @public
   */
  RetrievalToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * The following restrictions apply to tags:
   *
   * - Maximum number of user-applied tags per resource: 50
   * - Maximum tag key length: 128 Unicode characters
   * - Maximum tag value length: 256 Unicode characters
   * - Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @
   * - Tag keys and values are case sensitive.
   * - Don't use `aws:` as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
   * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * The case-sensitive name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ARN that was generated upon creation.
   *
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * The updated filter expression defining criteria by which to group traces.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * The structure containing configurations related to insights.
   *
   * - The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.
   * - The NotificationsEnabled boolean can be set to true to enable insights notifications for the group. Notifications can only be enabled on a group with InsightsEnabled set to true.
   *
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResult {
  /**
   * The group that was updated. Contains the name of the group that was updated, the ARN of the group that was updated, the updated filter expression, and the updated insight configuration assigned to the group.
   *
   * @public
   */
  Group?: Group | undefined;
}

/**
 * Update to the indexing rule configuration for probabilistic sampling.
 *
 * @public
 */
export interface ProbabilisticRuleValueUpdate {
  /**
   * Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of data.
   *
   * @public
   */
  DesiredSamplingPercentage: number | undefined;
}

/**
 * Update to an indexing rule.
 *
 * @public
 */
export type IndexingRuleValueUpdate =
  | IndexingRuleValueUpdate.ProbabilisticMember
  | IndexingRuleValueUpdate.$UnknownMember;

/**
 * @public
 */
export namespace IndexingRuleValueUpdate {
  /**
   * Indexing rule configuration that is used to probabilistically sample traceIds.
   *
   * @public
   */
  export interface ProbabilisticMember {
    Probabilistic: ProbabilisticRuleValueUpdate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Probabilistic?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Probabilistic: (value: ProbabilisticRuleValueUpdate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateIndexingRuleRequest {
  /**
   * Name of the indexing rule to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Rule configuration to be updated.
   *
   * @public
   */
  Rule: IndexingRuleValueUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateIndexingRuleResult {
  /**
   * Updated indexing rule.
   *
   * @public
   */
  IndexingRule?: IndexingRule | undefined;
}

/**
 * A document specifying changes to a sampling rule's configuration.
 *
 * @public
 */
export interface SamplingRuleUpdate {
  /**
   * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
   *
   * @public
   */
  RuleName?: string | undefined;

  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   *
   * @public
   */
  RuleARN?: string | undefined;

  /**
   * Matches the ARN of the Amazon Web Services resource on which the service runs.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The priority of the sampling rule.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The percentage of matching requests to instrument, after the reservoir is exhausted.
   *
   * @public
   */
  FixedRate?: number | undefined;

  /**
   * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
   *
   * @public
   */
  ReservoirSize?: number | undefined;

  /**
   * Matches the hostname from a request URL.
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * Matches the `name` that the service uses to identify itself in segments.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Matches the `origin` that the service uses to identify its type in segments.
   *
   * @public
   */
  ServiceType?: string | undefined;

  /**
   * Matches the HTTP method of a request.
   *
   * @public
   */
  HTTPMethod?: string | undefined;

  /**
   * Matches the path from a request URL.
   *
   * @public
   */
  URLPath?: string | undefined;

  /**
   * Matches attributes derived from the request.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * Specifies the multiplier applied to the base sampling rate. This boost allows you to temporarily increase sampling without changing the rule's configuration.
   *
   * @public
   */
  SamplingRateBoost?: SamplingRateBoost | undefined;
}

/**
 * @public
 */
export interface UpdateSamplingRuleRequest {
  /**
   * The rule and fields to change.
   *
   * @public
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateSamplingRuleResult {
  /**
   * The updated rule definition and metadata.
   *
   * @public
   */
  SamplingRuleRecord?: SamplingRuleRecord | undefined;
}

/**
 * Contains the settings for the CloudWatch Logs log groups that X-Ray creates for Transaction Search.
 *
 * @public
 */
export interface CloudWatchLogsConfiguration {
  /**
   * The ARN of an AWS Key Management Service (AWS KMS) key that you create and manage, in the same account and Region, used to encrypt the `aws/spans` log group. Key IDs and alias ARNs are not supported.
   *
   * X-Ray applies the key only when it creates `aws/spans`. If the account already has an `aws/spans` log group, X-Ray fails the request with an `InvalidRequestException` and does not change the log group. To enable Transaction Search with the existing log group as it is, call `UpdateTraceSegmentDestination` again without `SpansLogGroupKmsKeyId`. To set or change the key of the existing log group, use the CloudWatch Logs `AssociateKmsKey` operation.
   *
   * You need `kms:DescribeKey` permission on the key, and the key policy must allow CloudWatch Logs to use the key. For more information, see [Encrypt log data in CloudWatch Logs using AWS Key Management Service](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html).
   *
   * @public
   */
  SpansLogGroupKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTraceSegmentDestinationRequest {
  /**
   * The configured destination of trace segments.
   *
   * @public
   */
  Destination?: TraceSegmentDestination | undefined;

  /**
   * Specifies settings for the CloudWatch Logs log groups that X-Ray creates for Transaction Search. Specify this only when `Destination` is `CloudWatchLogs`.
   *
   * @public
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTraceSegmentDestinationResult {
  /**
   * The destination of the trace segments.
   *
   * @public
   */
  Destination?: TraceSegmentDestination | undefined;

  /**
   * The status of the update.
   *
   * @public
   */
  Status?: TraceSegmentDestinationStatus | undefined;
}
