// smithy-typescript generated code
import {
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
 * <p>An alias for an edge.</p>
 * @public
 */
export interface Alias {
  /**
   * <p>The canonical name of the alias.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of names for the alias, including the canonical name.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The type of the alias.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Value of a segment annotation. Has one of three value types: Number, Boolean, or String.</p>
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
   * <p>Value for a Number annotation.</p>
   * @public
   */
  export interface NumberValueMember {
    NumberValue: number;
    BooleanValue?: never;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Value for a Boolean annotation.</p>
   * @public
   */
  export interface BooleanValueMember {
    NumberValue?: never;
    BooleanValue: boolean;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Value for a String annotation.</p>
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
 * <p></p>
 * @public
 */
export interface ServiceId {
  /**
   * <p></p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p></p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Information about a segment annotation.</p>
 * @public
 */
export interface ValueWithServiceIds {
  /**
   * <p>Values of the annotation.</p>
   * @public
   */
  AnnotationValue?: AnnotationValue | undefined;

  /**
   * <p>Services to which the annotation applies.</p>
   * @public
   */
  ServiceIds?: ServiceId[] | undefined;
}

/**
 * <p>The service within the service graph that has anomalously high fault rates. </p>
 * @public
 */
export interface AnomalousService {
  /**
   * <p></p>
   * @public
   */
  ServiceId?: ServiceId | undefined;
}

/**
 * <p>A list of Availability Zones corresponding to the segments in a trace.</p>
 * @public
 */
export interface AvailabilityZoneDetail {
  /**
   * <p>The name of a corresponding Availability Zone.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTracesRequest {
  /**
   * <p>Specify the trace IDs of requests for which to retrieve segments.</p>
   * @public
   */
  TraceIds: string[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be
 *       compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an
 *         <code>inferred</code> segment for a downstream service, generated from a subsegment sent by
 *       the service that called it.</p>
 *          <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/aws-xray-interface-api.html#xray-api-segmentdocuments">Amazon Web Services X-Ray segment
 *       documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
 * @public
 */
export interface Segment {
  /**
   * <p>The segment's ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The segment document.</p>
   * @public
   */
  Document?: string | undefined;
}

/**
 * <p>A collection of segment documents with matching trace IDs.</p>
 * @public
 */
export interface Trace {
  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>LimitExceeded is set to true when the trace has exceeded the <code>Trace document size</code> limit. For
   *       more information about this limit and other X-Ray limits and quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/xray.html">Amazon Web Services X-Ray endpoints and quotas</a>.</p>
   * @public
   */
  LimitExceeded?: boolean | undefined;

  /**
   * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
   * @public
   */
  Segments?: Segment[] | undefined;
}

/**
 * @public
 */
export interface BatchGetTracesResult {
  /**
   * <p>Full traces for the specified requests.</p>
   * @public
   */
  Traces?: Trace[] | undefined;

  /**
   * <p>Trace IDs of requests that haven't been processed.</p>
   * @public
   */
  UnprocessedTraceIds?: string[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelTraceRetrievalRequest {
  /**
   * <p>
   * Retrieval token.
   * </p>
   * @public
   */
  RetrievalToken: string | undefined;
}

/**
 * @public
 */
export interface CancelTraceRetrievalResult {}

/**
 * <p>The structure containing configurations related to insights.</p>
 * @public
 */
export interface InsightsConfiguration {
  /**
   * <p>Set the InsightsEnabled value to true to enable insights or false to disable
   *             insights.</p>
   * @public
   */
  InsightsEnabled?: boolean | undefined;

  /**
   * <p>Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be
   *             enabled on a group with InsightsEnabled set to true.</p>
   * @public
   */
  NotificationsEnabled?: boolean | undefined;
}

/**
 * <p>A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling
 *       rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
 *       in the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>The following restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum number of user-applied tags per resource: 50</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You
 *           cannot edit or delete system tags.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Tag {
  /**
   * <p>A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The
   *       key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators,
   *       or the following special characters: <code>+ - = . _ : /</code>
   *          </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>An optional tag value, such as <code>Production</code> or <code>test-only</code>. The value can be
   *       a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following
   *       special characters: <code>+ - = . _ : /</code>
   *          </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>The case-sensitive name of the new group. Default is a reserved name and names must
   *             be unique.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The filter expression defining criteria by which to group traces.</p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     new group or false to disable insights for the new group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights
   *                     notifications for the new group. Notifications may only be enabled on a group
   *                     with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group.
   *             For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *                     / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services
   *                     use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Details and metadata for a group.</p>
 * @public
 */
export interface Group {
  /**
   * <p>The unique case-sensitive name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group generated based on the GroupName.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights
   *                     notifications through Amazon EventBridge for the group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateGroupResult {
  /**
   * <p>The group that was created. Contains the name of the group that was created, the Amazon Resource Name
   *             (ARN) of the group that was generated based on the group name, the filter expression, and the insight
   *             configuration that was assigned to the group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * <p>Enable temporary sampling rate increases when you detect anomalies to improve visibility.</p>
 * @public
 */
export interface SamplingRateBoost {
  /**
   * <p>Defines max temporary sampling rate to apply when a boost is triggered.
   *       Calculated boost rate by X-Ray will be less than or equal to this max rate.</p>
   * @public
   */
  MaxRate: number | undefined;

  /**
   * <p>Sets the time window (in minutes) in which only one sampling rate boost can be triggered.
   *       After a boost occurs, no further boosts are allowed until the next window.</p>
   * @public
   */
  CooldownWindowMinutes: number | undefined;
}

/**
 * <p>A sampling rule that services use to decide whether to instrument a request. Rule
 *       fields can match properties of the service, or properties of a request. The service can ignore
 *       rules that don't match its properties.</p>
 * @public
 */
export interface SamplingRule {
  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   * @public
   */
  RuleARN?: string | undefined;

  /**
   * <p>Matches the ARN of the Amazon Web Services resource on which the service runs.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The priority of the sampling rule.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   * @public
   */
  FixedRate: number | undefined;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   * @public
   */
  ReservoirSize: number | undefined;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   * @public
   */
  ServiceType: string | undefined;

  /**
   * <p>Matches the hostname from a request URL.</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>Matches the HTTP method of a request.</p>
   * @public
   */
  HTTPMethod: string | undefined;

  /**
   * <p>Matches the path from a request URL.</p>
   * @public
   */
  URLPath: string | undefined;

  /**
   * <p>The version of the sampling rule format (<code>1</code>).</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>Matches attributes derived from the request.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>Specifies the multiplier applied to the base sampling rate.
   *       This boost allows you to temporarily increase sampling without changing the rule's configuration.</p>
   * @public
   */
  SamplingRateBoost?: SamplingRateBoost | undefined;
}

/**
 * @public
 */
export interface CreateSamplingRuleRequest {
  /**
   * <p>The rule definition.</p>
   * @public
   */
  SamplingRule: SamplingRule | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling
   *          rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *                / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services
   *                use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.</p>
 * @public
 */
export interface SamplingRuleRecord {
  /**
   * <p>The sampling rule.</p>
   * @public
   */
  SamplingRule?: SamplingRule | undefined;

  /**
   * <p>When the rule was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>When the rule was last modified.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSamplingRuleResult {
  /**
   * <p>The saved rule definition and metadata.</p>
   * @public
   */
  SamplingRuleRecord?: SamplingRuleRecord | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The case-sensitive name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ARN of the group that was generated on creation.</p>
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
   * <p>The name of the resource policy to delete.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does
   *             not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned.
   *         </p>
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
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   * @public
   */
  RuleARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSamplingRuleResult {
  /**
   * <p>The deleted rule definition and metadata.</p>
   * @public
   */
  SamplingRuleRecord?: SamplingRuleRecord | undefined;
}

/**
 * @public
 */
export interface GetEncryptionConfigRequest {}

/**
 * <p>A configuration document that specifies encryption configuration settings.</p>
 * @public
 */
export interface EncryptionConfig {
  /**
   * <p>The ID of the KMS key used for encryption, if applicable.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.</p>
   * @public
   */
  Status?: EncryptionStatus | undefined;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> for encryption with KMS keys. Set to <code>NONE</code> for
   *       default encryption.</p>
   * @public
   */
  Type?: EncryptionType | undefined;
}

/**
 * @public
 */
export interface GetEncryptionConfigResult {
  /**
   * <p>The encryption configuration document.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>The case-sensitive name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ARN of the group that was generated on creation.</p>
   * @public
   */
  GroupARN?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResult {
  /**
   * <p>The group that was requested. Contains the name of the group, the ARN of the group,
   *             the filter expression, and the insight configuration assigned to the group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * @public
 */
export interface GetGroupsRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details for a group without metadata.</p>
 * @public
 */
export interface GroupSummary {
  /**
   * <p>The unique case-sensitive name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ARN of the group generated based on the GroupName.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights notifications.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetGroupsResult {
  /**
   * <p>The collection of all active groups.</p>
   * @public
   */
  Groups?: GroupSummary[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIndexingRulesRequest {
  /**
   * <p>
   * Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   *
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *   The indexing rule configuration for probabilistic sampling.
 * </p>
 * @public
 */
export interface ProbabilisticRuleValue {
  /**
   * <p>
   *   Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of data.
   * </p>
   * @public
   */
  DesiredSamplingPercentage: number | undefined;

  /**
   * <p>
   *   Applied sampling percentage of traceIds.
   * </p>
   * @public
   */
  ActualSamplingPercentage?: number | undefined;
}

/**
 * <p>
 *   The indexing rule configuration.
 * </p>
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
   * <p>
   *   Indexing rule configuration that is used to probabilistically  sample traceIds.
   * </p>
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
 * <p>
 * Rule used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray.
 * </p>
 * @public
 */
export interface IndexingRule {
  /**
   * <p>
   *   The name of the indexing rule.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   * Displays when the rule was last modified, in Unix time seconds.
   * </p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>
   *   The indexing rule.
   * </p>
   * @public
   */
  Rule?: IndexingRuleValue | undefined;
}

/**
 * @public
 */
export interface GetIndexingRulesResult {
  /**
   * <p>
   *     Retrieves all indexing rules.</p>
   * @public
   */
  IndexingRules?: IndexingRule[] | undefined;

  /**
   * <p>
   *       Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   * @public
   */
  InsightId: string | undefined;
}

/**
 * <p>Statistics that describe how the incident has impacted a service.</p>
 * @public
 */
export interface RequestImpactStatistics {
  /**
   * <p>The number of requests that have resulted in a fault,</p>
   * @public
   */
  FaultCount?: number | undefined;

  /**
   * <p>The number of successful requests.</p>
   * @public
   */
  OkCount?: number | undefined;

  /**
   * <p>The total number of requests to the service.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * <p>When fault rates go outside of the expected range, X-Ray creates an insight. Insights
 *          tracks emergent issues within your applications.</p>
 * @public
 */
export interface Insight {
  /**
   * <p>The insights unique identifier. </p>
   * @public
   */
  InsightId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group that the insight belongs to.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>The name of the group  that the insight belongs to.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  RootCauseServiceId?: ServiceId | undefined;

  /**
   * <p>The categories that label and describe the type of insight.</p>
   * @public
   */
  Categories?: InsightCategory[] | undefined;

  /**
   * <p>The current state of the insight.</p>
   * @public
   */
  State?: InsightState | undefined;

  /**
   * <p>The time, in Unix seconds, at which the insight began.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time, in Unix seconds, at which the insight ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A brief description of the insight.</p>
   * @public
   */
  Summary?: string | undefined;

  /**
   * <p>The impact statistics of the client side service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   * @public
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * <p>The impact statistics of the root cause service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   * @public
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * <p>The service within the insight that is most impacted by the incident.</p>
   * @public
   */
  TopAnomalousServices?: AnomalousService[] | undefined;
}

/**
 * @public
 */
export interface GetInsightResult {
  /**
   * <p>The summary information of an insight.</p>
   * @public
   */
  Insight?: Insight | undefined;
}

/**
 * @public
 */
export interface GetInsightEventsRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   * @public
   */
  InsightId: string | undefined;

  /**
   * <p>Used to retrieve at most the specified value of events.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of events. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an
 *          event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.</p>
 * @public
 */
export interface InsightEvent {
  /**
   * <p>A brief description of the event.</p>
   * @public
   */
  Summary?: string | undefined;

  /**
   * <p>The time, in Unix seconds, at which the event was recorded.</p>
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * <p>The impact statistics of the client side service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   * @public
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * <p>The impact statistics of the root cause service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   * @public
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * <p>The service during the event that is most impacted by the incident.</p>
   * @public
   */
  TopAnomalousServices?: AnomalousService[] | undefined;
}

/**
 * @public
 */
export interface GetInsightEventsResult {
  /**
   * <p>A detailed description of the event. This includes the time of the event, client and
   *          root cause impact statistics, and the top anomalous service at the time of the
   *          event.</p>
   * @public
   */
  InsightEvents?: InsightEvent[] | undefined;

  /**
   * <p>Use this token to retrieve the next page of insight events.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightImpactGraphRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   * @public
   */
  InsightId: string | undefined;

  /**
   * <p>The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value
   *          provided and can't be more than 30 days old.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided.
   *          The time range between the start time and end time can't be more than six hours. </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The connection between two service in an insight impact graph.</p>
 * @public
 */
export interface InsightImpactGraphEdge {
  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   * @public
   */
  ReferenceId?: number | undefined;
}

/**
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *          resources, and applications that an application used. </p>
 * @public
 */
export interface InsightImpactGraphService {
  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   * @public
   */
  ReferenceId?: number | undefined;

  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, AWS::EC2::Instance for an application running
   *                on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used. </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon
   *                DynamoDB that didn't target a specific table. </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon
   *                DynamoDB that didn't target a specific table. </p>
   *             </li>
   *             <li>
   *                <p>remote - A downstream service of indeterminate type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The canonical name of the service.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of names for the service, including the canonical name.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>Identifier of the Amazon Web Services account in which the service runs.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Connections to downstream services.</p>
   * @public
   */
  Edges?: InsightImpactGraphEdge[] | undefined;
}

/**
 * @public
 */
export interface GetInsightImpactGraphResult {
  /**
   * <p>The insight's unique identifier.</p>
   * @public
   */
  InsightId?: string | undefined;

  /**
   * <p>The provided start time.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The provided end time. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The time, in Unix seconds, at which the service graph started.</p>
   * @public
   */
  ServiceGraphStartTime?: Date | undefined;

  /**
   * <p>The time, in Unix seconds, at which the service graph ended.</p>
   * @public
   */
  ServiceGraphEndTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services instrumented services related to the insight.</p>
   * @public
   */
  Services?: InsightImpactGraphService[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightSummariesRequest {
  /**
   * <p>The list of insight states. </p>
   * @public
   */
  States?: InsightState[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>The name of the group. Required if the GroupARN isn't provided.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The beginning of the time frame in which the insights started. The start time can't be more than 30 days
   *          old.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time frame in which the insights ended. The end time can't be more than 30 days old.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The maximum number of results to display.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information that describes an insight.</p>
 * @public
 */
export interface InsightSummary {
  /**
   * <p>The insights unique identifier. </p>
   * @public
   */
  InsightId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group that the insight belongs to.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>The name of the group  that the insight belongs to.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  RootCauseServiceId?: ServiceId | undefined;

  /**
   * <p> Categories The categories that label and describe the type of insight.</p>
   * @public
   */
  Categories?: InsightCategory[] | undefined;

  /**
   * <p>The current state of the insight.</p>
   * @public
   */
  State?: InsightState | undefined;

  /**
   * <p>The time, in Unix seconds, at which the insight began.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time, in Unix seconds, at which the insight ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A brief description of the insight.</p>
   * @public
   */
  Summary?: string | undefined;

  /**
   * <p>The impact statistics of the client side service. This includes the number of requests
   *          to the client service and whether the requests were faults or okay. </p>
   * @public
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * <p>The impact statistics of the root cause service. This includes the number of requests to
   *          the client service and whether the requests were faults or okay. </p>
   * @public
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics | undefined;

  /**
   * <p>The service within the insight that is most impacted by the incident.</p>
   * @public
   */
  TopAnomalousServices?: AnomalousService[] | undefined;

  /**
   * <p>The time, in Unix seconds, that the insight was last updated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetInsightSummariesResult {
  /**
   * <p>The summary of each insight within the group matching the provided filters. The summary
   *          contains the InsightID, start and end time, the root cause service, the root cause and
   *          client impact statistics, the top anomalous services, and the status of the insight.</p>
   * @public
   */
  InsightSummaries?: InsightSummary[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRetrievedTracesGraphRequest {
  /**
   * <p>
   *     Retrieval token.
   *   </p>
   * @public
   */
  RetrievalToken: string | undefined;

  /**
   * <p>
   *     Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   *
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 * The relation between two services.
 * </p>
 * @public
 */
export interface GraphLink {
  /**
   * <p>
   * Relationship of a trace to the corresponding service.
   * </p>
   * @public
   */
  ReferenceType?: string | undefined;

  /**
   * <p>
   * Source trace of a link relationship.
   * </p>
   * @public
   */
  SourceTraceId?: string | undefined;

  /**
   * <p>
   * Destination traces of a link relationship.
   * </p>
   * @public
   */
  DestinationTraceIds?: string[] | undefined;
}

/**
 * <p>An entry in a histogram for a statistic. A histogram maps the range of observed values
 *       on the X axis, and the prevalence of each value on the Y axis.</p>
 * @public
 */
export interface HistogramEntry {
  /**
   * <p>The value of the entry.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>The prevalence of the entry.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Information about requests that failed with a 4xx Client Error status code.</p>
 * @public
 */
export interface ErrorStatistics {
  /**
   * <p>The number of requests that failed with a 429 throttling status code.</p>
   * @public
   */
  ThrottleCount?: number | undefined;

  /**
   * <p>The number of requests that failed with untracked 4xx Client Error status
   *       codes.</p>
   * @public
   */
  OtherCount?: number | undefined;

  /**
   * <p>The total number of requests that failed with a 4xx Client Error status code.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * <p>Information about requests that failed with a 5xx Server Error status code.</p>
 * @public
 */
export interface FaultStatistics {
  /**
   * <p>The number of requests that failed with untracked 5xx Server Error status
   *       codes.</p>
   * @public
   */
  OtherCount?: number | undefined;

  /**
   * <p>The total number of requests that failed with a 5xx Server Error status code.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * <p>Response statistics for an edge.</p>
 * @public
 */
export interface EdgeStatistics {
  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   * @public
   */
  OkCount?: number | undefined;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   * @public
   */
  ErrorStatistics?: ErrorStatistics | undefined;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   * @public
   */
  FaultStatistics?: FaultStatistics | undefined;

  /**
   * <p>The total number of completed requests.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>The aggregate response time of completed requests.</p>
   * @public
   */
  TotalResponseTime?: number | undefined;
}

/**
 * <p>Information about a connection between two services. An edge can be a synchronous connection, such as typical
 *     call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an
 *     SNS queue.</p>
 * @public
 */
export interface Edge {
  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   * @public
   */
  ReferenceId?: number | undefined;

  /**
   * <p>The start time of the first segment on the edge.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the last segment on the edge.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Response statistics for segments on the edge.</p>
   * @public
   */
  SummaryStatistics?: EdgeStatistics | undefined;

  /**
   * <p>A histogram that maps the spread of client response times on an edge. Only populated
   *              for synchronous edges.</p>
   * @public
   */
  ResponseTimeHistogram?: HistogramEntry[] | undefined;

  /**
   * <p>Aliases for the edge.</p>
   * @public
   */
  Aliases?: Alias[] | undefined;

  /**
   * <p>Describes an asynchronous connection, with a value of <code>link</code>.</p>
   * @public
   */
  EdgeType?: string | undefined;

  /**
   * <p>A histogram that maps the spread of event age when received by consumers.
   *       Age is calculated each time an event is received. Only populated when <i>EdgeType</i> is
   *       <code>link</code>.</p>
   * @public
   */
  ReceivedEventAgeHistogram?: HistogramEntry[] | undefined;
}

/**
 * <p>Response statistics for a service.</p>
 * @public
 */
export interface ServiceStatistics {
  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   * @public
   */
  OkCount?: number | undefined;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   * @public
   */
  ErrorStatistics?: ErrorStatistics | undefined;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   * @public
   */
  FaultStatistics?: FaultStatistics | undefined;

  /**
   * <p>The total number of completed requests.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>The aggregate response time of completed requests.</p>
   * @public
   */
  TotalResponseTime?: number | undefined;
}

/**
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *       resources, and applications that an application used.</p>
 * @public
 */
export interface Service {
  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   * @public
   */
  ReferenceId?: number | undefined;

  /**
   * <p>The canonical name of the service.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of names for the service, including the canonical name.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>Indicates that the service was the first service to process a request.</p>
   * @public
   */
  Root?: boolean | undefined;

  /**
   * <p>Identifier of the Amazon Web Services account in which the service runs.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The type of service.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, <code>AWS::EC2::Instance</code> for an
   *           application running on Amazon EC2 or <code>AWS::DynamoDB::Table</code> for an Amazon DynamoDB table that the
   *           application used.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, <code>AWS::DynamoDB</code>
   *           for downstream calls to Amazon DynamoDB that didn't target a specific table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client</code> - Represents the clients that sent requests to a root
   *           service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>remote</code> - A downstream service of indeterminate type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The service's state.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The start time of the first segment that the service generated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the last segment that the service generated.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Connections to downstream services.</p>
   * @public
   */
  Edges?: Edge[] | undefined;

  /**
   * <p>Aggregated statistics for the service.</p>
   * @public
   */
  SummaryStatistics?: ServiceStatistics | undefined;

  /**
   * <p>A histogram that maps the spread of service durations.</p>
   * @public
   */
  DurationHistogram?: HistogramEntry[] | undefined;

  /**
   * <p>A histogram that maps the spread of service response times.</p>
   * @public
   */
  ResponseTimeHistogram?: HistogramEntry[] | undefined;
}

/**
 * <p>
 *   Retrieved information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
 * </p>
 * @public
 */
export interface RetrievedService {
  /**
   * <p>Information about an application that processed requests, users that made requests, or downstream services,
   *       resources, and applications that an application used.</p>
   * @public
   */
  Service?: Service | undefined;

  /**
   * <p>
   *  Relation between two 2 services.
   * </p>
   * @public
   */
  Links?: GraphLink[] | undefined;
}

/**
 * @public
 */
export interface GetRetrievedTracesGraphResult {
  /**
   * <p>
   * Status of the retrieval.
   * </p>
   * @public
   */
  RetrievalStatus?: RetrievalStatus | undefined;

  /**
   * <p>
   * Retrieved services.
   * </p>
   * @public
   */
  Services?: RetrievedService[] | undefined;

  /**
   * <p>
   *     Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   *
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingRulesRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingRulesResult {
  /**
   * <p>Rule definitions and metadata.</p>
   * @public
   */
  SamplingRuleRecords?: SamplingRuleRecord[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingStatisticSummariesRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Aggregated request sampling data for a sampling rule across all services for a 10-second window.</p>
 * @public
 */
export interface SamplingStatisticSummary {
  /**
   * <p>The name of the sampling rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The start time of the reporting window.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The number of requests that matched the rule.</p>
   * @public
   */
  RequestCount?: number | undefined;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   * @public
   */
  BorrowCount?: number | undefined;

  /**
   * <p>The number of requests recorded.</p>
   * @public
   */
  SampledCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSamplingStatisticSummariesResult {
  /**
   * <p>Information about the number of requests instrumented for each sampling
   *          rule.</p>
   * @public
   */
  SamplingStatisticSummaries?: SamplingStatisticSummary[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Request anomaly stats for a single rule from a service. Results are for the last 10
 *       seconds unless the service has been assigned a longer reporting interval after a previous call
 *       to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 * @public
 */
export interface SamplingBoostStatisticsDocument {
  /**
   * <p>The name of the sampling rule.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>The current time.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>The number of requests with anomaly.</p>
   * @public
   */
  AnomalyCount: number | undefined;

  /**
   * <p>The number of requests that associated to the rule.</p>
   * @public
   */
  TotalCount: number | undefined;

  /**
   * <p>The number of requests with anomaly recorded.</p>
   * @public
   */
  SampledAnomalyCount: number | undefined;
}

/**
 * <p>Request sampling results for a single rule from a service. Results are for the last 10
 *       seconds unless the service has been assigned a longer reporting interval after a previous call
 *       to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 * @public
 */
export interface SamplingStatisticsDocument {
  /**
   * <p>The name of the sampling rule.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>A unique identifier for the service in hexadecimal.</p>
   * @public
   */
  ClientID: string | undefined;

  /**
   * <p>The current time.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>The number of requests that matched the rule.</p>
   * @public
   */
  RequestCount: number | undefined;

  /**
   * <p>The number of requests recorded.</p>
   * @public
   */
  SampledCount: number | undefined;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   * @public
   */
  BorrowCount?: number | undefined;
}

/**
 * @public
 */
export interface GetSamplingTargetsRequest {
  /**
   * <p>Information about rules that the service is using to sample requests.</p>
   * @public
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;

  /**
   * <p>Information about rules that the service is using to boost sampling rate.</p>
   * @public
   */
  SamplingBoostStatisticsDocuments?: SamplingBoostStatisticsDocument[] | undefined;
}

/**
 * <p>Temporary boost sampling rate. X-Ray calculates sampling boost for each service based on the recent sampling boost stats of all services that called
 *       <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 * @public
 */
export interface SamplingBoost {
  /**
   * <p>The calculated sampling boost rate for this service </p>
   * @public
   */
  BoostRate: number | undefined;

  /**
   * <p>When the sampling boost expires.</p>
   * @public
   */
  BoostRateTTL: Date | undefined;
}

/**
 * <p>Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray
 *       calculates a new reservoir for each service based on the recent sampling results of all services that called
 *       <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 * @public
 */
export interface SamplingTargetDocument {
  /**
   * <p>The name of the sampling rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   * @public
   */
  FixedRate?: number | undefined;

  /**
   * <p>The number of requests per second that X-Ray allocated for this service.</p>
   * @public
   */
  ReservoirQuota?: number | undefined;

  /**
   * <p>When the reservoir quota expires.</p>
   * @public
   */
  ReservoirQuotaTTL?: Date | undefined;

  /**
   * <p>The number of seconds for the service to wait before getting sampling targets
   *       again.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The sampling boost that X-Ray allocated for this service.</p>
   * @public
   */
  SamplingBoost?: SamplingBoost | undefined;
}

/**
 * <p>Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray
 *       could not process.</p>
 * @public
 */
export interface UnprocessedStatistics {
  /**
   * <p>The name of the sampling rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetSamplingTargetsResult {
  /**
   * <p>Updated rules that the service should use to sample requests.</p>
   * @public
   */
  SamplingTargetDocuments?: SamplingTargetDocument[] | undefined;

  /**
   * <p>The last time a user changed the sampling rule configuration. If
   *          the sampling rule configuration changed since the service last retrieved it, the service
   *          should call <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a> to get the latest version.</p>
   * @public
   */
  LastRuleModification?: Date | undefined;

  /**
   * <p>Information about <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingStatisticsDocument.html">SamplingStatisticsDocument</a> that X-Ray could not
   *          process.</p>
   * @public
   */
  UnprocessedStatistics?: UnprocessedStatistics[] | undefined;

  /**
   * <p>Information about <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingBoostStatisticsDocument.html">SamplingBoostStatisticsDocument</a> that X-Ray could not
   *          process.</p>
   * @public
   */
  UnprocessedBoostStatistics?: UnprocessedStatistics[] | undefined;
}

/**
 * @public
 */
export interface GetServiceGraphRequest {
  /**
   * <p>The start of the time frame for which to generate a graph.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the timeframe for which to generate a graph.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of a group based on which you want to generate a graph.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceGraphResult {
  /**
   * <p>The start of the time frame for which the graph was generated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time frame for which the graph was generated.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The services that have processed a traced request during the specified time
   *       frame.</p>
   * @public
   */
  Services?: Service[] | undefined;

  /**
   * <p>A flag indicating whether the group's filter expression has been consistent, or
   *       if the returned service graph may show traces from an older version of the group's filter
   *       expression.</p>
   * @public
   */
  ContainsOldGroupVersions?: boolean | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesServiceStatisticsRequest {
  /**
   * <p>The start of the time frame for which to aggregate statistics.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time frame for which to aggregate statistics.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The case-sensitive name of the group for which to pull statistics from.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group for which to pull statistics from.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>A filter expression defining entities that will be aggregated for statistics.
   *             Supports ID, service, and edge functions. If no selector expression is specified, edge
   *             statistics are returned. </p>
   * @public
   */
  EntitySelectorExpression?: string | undefined;

  /**
   * <p>Aggregation period in seconds.</p>
   * @public
   */
  Period?: number | undefined;

  /**
   * <p>The forecasted high and low fault count values. Forecast enabled requests require the
   *             EntitySelectorExpression ID be provided.</p>
   * @public
   */
  ForecastStatistics?: boolean | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The predicted high and low fault count. This is used to determine if a service has
 *          become anomalous and if an insight should be created.</p>
 * @public
 */
export interface ForecastStatistics {
  /**
   * <p>The upper limit of fault counts for a service.</p>
   * @public
   */
  FaultCountHigh?: number | undefined;

  /**
   * <p>The lower limit of fault counts for a service.</p>
   * @public
   */
  FaultCountLow?: number | undefined;
}

/**
 * <p>A list of TimeSeriesStatistic structures.</p>
 * @public
 */
export interface TimeSeriesServiceStatistics {
  /**
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>Response statistics for an edge.</p>
   * @public
   */
  EdgeSummaryStatistics?: EdgeStatistics | undefined;

  /**
   * <p>Response statistics for a service.</p>
   * @public
   */
  ServiceSummaryStatistics?: ServiceStatistics | undefined;

  /**
   * <p>The forecasted high and low fault count values.</p>
   * @public
   */
  ServiceForecastStatistics?: ForecastStatistics | undefined;

  /**
   * <p>The response time histogram for the selected entities.</p>
   * @public
   */
  ResponseTimeHistogram?: HistogramEntry[] | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesServiceStatisticsResult {
  /**
   * <p>The collection of statistics.</p>
   * @public
   */
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[] | undefined;

  /**
   * <p>A flag indicating whether or not a group's filter expression has been consistent, or if a returned
   *             aggregation might show statistics from an older version of the group's filter expression.</p>
   * @public
   */
  ContainsOldGroupVersions?: boolean | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTraceGraphRequest {
  /**
   * <p>Trace IDs of requests for which to generate a service graph.</p>
   * @public
   */
  TraceIds: string[] | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTraceGraphResult {
  /**
   * <p>The services that have processed one of the specified requests.</p>
   * @public
   */
  Services?: Service[] | undefined;

  /**
   * <p>Pagination token.</p>
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
   * <p>
   * Retrieves the current destination.
   * </p>
   * @public
   */
  Destination?: TraceSegmentDestination | undefined;

  /**
   * <p>
   *     Status of the retrieval.
   *   </p>
   * @public
   */
  Status?: TraceSegmentDestinationStatus | undefined;
}

/**
 * <p>The name and value of a sampling rule to apply to a trace summary.</p>
 * @public
 */
export interface SamplingStrategy {
  /**
   * <p>The name of a sampling rule.</p>
   * @public
   */
  Name?: SamplingStrategyName | undefined;

  /**
   * <p>The value of a sampling rule.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * @public
 */
export interface GetTraceSummariesRequest {
  /**
   * <p>The start of the time frame for which to retrieve traces.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time frame for which to retrieve traces.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace segment end time).</p>
   * @public
   */
  TimeRangeType?: TimeRangeType | undefined;

  /**
   * <p>Set to <code>true</code> to get summaries for only a subset of available
   *       traces.</p>
   * @public
   */
  Sampling?: boolean | undefined;

  /**
   * <p>A parameter to indicate whether to enable sampling on trace summaries. Input parameters are Name and
   *             Value.</p>
   * @public
   */
  SamplingStrategy?: SamplingStrategy | undefined;

  /**
   * <p>Specify a filter expression to retrieve trace summaries for services or requests that
   *       meet certain requirements.</p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page
   *       of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The exception associated with a root cause.</p>
 * @public
 */
export interface RootCauseException {
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The message of the exception.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       error.</p>
 * @public
 */
export interface ErrorRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The types and messages of the exceptions.</p>
   * @public
   */
  Exceptions?: RootCauseException[] | undefined;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   * @public
   */
  Remote?: boolean | undefined;
}

/**
 * <p>A collection of fields identifying the services in a trace summary error.</p>
 * @public
 */
export interface ErrorRootCauseService {
  /**
   * <p>The service name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A collection of associated service names.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The type associated to the service.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The account ID associated to the service.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The path of root cause entities found on the service. </p>
   * @public
   */
  EntityPath?: ErrorRootCauseEntity[] | undefined;

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   * @public
   */
  Inferred?: boolean | undefined;
}

/**
 * <p>The root cause of a trace summary error.</p>
 * @public
 */
export interface ErrorRootCause {
  /**
   * <p>A list of services corresponding to an error. A service identifies a segment and it
   *       contains a name, account ID, type, and inferred flag.</p>
   * @public
   */
  Services?: ErrorRootCauseService[] | undefined;

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   * @public
   */
  ClientImpacting?: boolean | undefined;
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       fault error.</p>
 * @public
 */
export interface FaultRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The types and messages of the exceptions.</p>
   * @public
   */
  Exceptions?: RootCauseException[] | undefined;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   * @public
   */
  Remote?: boolean | undefined;
}

/**
 * <p>A collection of fields identifying the services in a trace summary fault.</p>
 * @public
 */
export interface FaultRootCauseService {
  /**
   * <p>The service name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A collection of associated service names.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The type associated to the service.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The account ID associated to the service.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The path of root cause entities found on the service. </p>
   * @public
   */
  EntityPath?: FaultRootCauseEntity[] | undefined;

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   * @public
   */
  Inferred?: boolean | undefined;
}

/**
 * <p>The root cause information for a trace summary fault.</p>
 * @public
 */
export interface FaultRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and it contains a
   *       name, account ID, type, and inferred flag.</p>
   * @public
   */
  Services?: FaultRootCauseService[] | undefined;

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   * @public
   */
  ClientImpacting?: boolean | undefined;
}

/**
 * <p>Information about an HTTP request.</p>
 * @public
 */
export interface Http {
  /**
   * <p>The request URL.</p>
   * @public
   */
  HttpURL?: string | undefined;

  /**
   * <p>The response status.</p>
   * @public
   */
  HttpStatus?: number | undefined;

  /**
   * <p>The request method.</p>
   * @public
   */
  HttpMethod?: string | undefined;

  /**
   * <p>The request's user agent string.</p>
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * <p>The IP address of the requestor.</p>
   * @public
   */
  ClientIp?: string | undefined;
}

/**
 * <p>A list of EC2 instance IDs corresponding to the segments in a trace. </p>
 * @public
 */
export interface InstanceIdDetail {
  /**
   * <p>The ID of a corresponding EC2 instance.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>A list of resources ARNs corresponding to the segments in a trace.</p>
 * @public
 */
export interface ResourceARNDetail {
  /**
   * <p>The ARN of a corresponding resource.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a response time
 *       warning.</p>
 * @public
 */
export interface ResponseTimeRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type and messages of the exceptions.</p>
   * @public
   */
  Coverage?: number | undefined;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   * @public
   */
  Remote?: boolean | undefined;
}

/**
 * <p>A collection of fields identifying the service in a response time warning.</p>
 * @public
 */
export interface ResponseTimeRootCauseService {
  /**
   * <p>The service name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A collection of associated service names.</p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>The type associated to the service.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The account ID associated to the service.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The path of root cause entities found on the service. </p>
   * @public
   */
  EntityPath?: ResponseTimeRootCauseEntity[] | undefined;

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   * @public
   */
  Inferred?: boolean | undefined;
}

/**
 * <p>The root cause information for a response time warning.</p>
 * @public
 */
export interface ResponseTimeRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and contains a name,
   *       account ID, type, and inferred flag.</p>
   * @public
   */
  Services?: ResponseTimeRootCauseService[] | undefined;

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   * @public
   */
  ClientImpacting?: boolean | undefined;
}

/**
 * <p>Information about a user recorded in segment documents.</p>
 * @public
 */
export interface TraceUser {
  /**
   * <p>The user's name.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Services that the user's request hit.</p>
   * @public
   */
  ServiceIds?: ServiceId[] | undefined;
}

/**
 * <p>Metadata generated from the segment documents in a trace.</p>
 * @public
 */
export interface TraceSummary {
  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The start time of a trace, based on the earliest trace segment start time.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The length of time in seconds between the start and end times of the root segment. If
   *       the service performs work asynchronously, the response time measures the time before the
   *       response is sent to the user, while the duration measures the amount of time before the last
   *       traced activity completes.</p>
   * @public
   */
  ResponseTime?: number | undefined;

  /**
   * <p>The root segment document has a 500 series error.</p>
   * @public
   */
  HasFault?: boolean | undefined;

  /**
   * <p>The root segment document has a 400 series error.</p>
   * @public
   */
  HasError?: boolean | undefined;

  /**
   * <p>One or more of the segment documents has a 429 throttling error.</p>
   * @public
   */
  HasThrottle?: boolean | undefined;

  /**
   * <p>One or more of the segment documents is in progress.</p>
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * <p>Information about the HTTP request served by the trace.</p>
   * @public
   */
  Http?: Http | undefined;

  /**
   * <p>Annotations from the trace's segment documents.</p>
   * @public
   */
  Annotations?: Record<string, ValueWithServiceIds[]> | undefined;

  /**
   * <p>Users from the trace's segment documents.</p>
   * @public
   */
  Users?: TraceUser[] | undefined;

  /**
   * <p>Service IDs from the trace's segment documents.</p>
   * @public
   */
  ServiceIds?: ServiceId[] | undefined;

  /**
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   * @public
   */
  ResourceARNs?: ResourceARNDetail[] | undefined;

  /**
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace
   *       segments.</p>
   * @public
   */
  InstanceIds?: InstanceIdDetail[] | undefined;

  /**
   * <p>A list of Availability Zones for any zone corresponding to the trace segments.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZoneDetail[] | undefined;

  /**
   * <p>The root of a trace.</p>
   * @public
   */
  EntryPoint?: ServiceId | undefined;

  /**
   * <p>A collection of FaultRootCause structures corresponding to the trace segments.</p>
   * @public
   */
  FaultRootCauses?: FaultRootCause[] | undefined;

  /**
   * <p>A collection of ErrorRootCause structures corresponding to the trace
   *       segments.</p>
   * @public
   */
  ErrorRootCauses?: ErrorRootCause[] | undefined;

  /**
   * <p>A collection of ResponseTimeRootCause structures corresponding to the trace
   *       segments.</p>
   * @public
   */
  ResponseTimeRootCauses?: ResponseTimeRootCause[] | undefined;

  /**
   * <p>The revision number of a trace.</p>
   * @public
   */
  Revision?: number | undefined;

  /**
   * <p>The matched time stamp of a defined event.</p>
   * @public
   */
  MatchedEventTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetTraceSummariesResult {
  /**
   * <p>Trace IDs and annotations for traces that were found in the specified time
   *       frame.</p>
   * @public
   */
  TraceSummaries?: TraceSummary[] | undefined;

  /**
   * <p>The start time of this page of results.</p>
   * @public
   */
  ApproximateTime?: Date | undefined;

  /**
   * <p>The total number of traces processed, including traces that did not match the specified
   *       filter expression.</p>
   * @public
   */
  TracesProcessedCount?: number | undefined;

  /**
   * <p>If the requested time frame contained more than one page of results, you can use this token to retrieve the
   *       next page. The first page contains the most recent results, closest to the end of the time frame.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * <p>Not currently supported.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A resource policy grants one or more Amazon Web Services services and accounts permissions
 *             to access X-Ray. Each resource policy is associated with a
 *             specific Amazon Web Services account.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>The name of the resource policy. Must be unique within a specific Amazon Web Services account.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The resource policy document, which can be up to 5kb in size.</p>
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * <p>Returns the current policy revision id for this policy name.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * <p>When the policy was last updated, in Unix time seconds.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesResult {
  /**
   * <p>The list of resource policies in the target Amazon Web Services account.</p>
   * @public
   */
  ResourcePolicies?: ResourcePolicy[] | undefined;

  /**
   * <p>Pagination token. Not currently supported.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrievedTracesRequest {
  /**
   * <p>
   * Retrieval token.
   * </p>
   * @public
   */
  RetrievalToken: string | undefined;

  /**
   * <p>
   * Format of the requested traces.
   * </p>
   * @public
   */
  TraceFormat?: TraceFormatType | undefined;

  /**
   * <p>
   *     Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   *
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *   A span from a trace that has been ingested by the X-Ray service. A span represents a unit of work or an operation performed by a service.
 * </p>
 * @public
 */
export interface Span {
  /**
   * <p>The span ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   * The span document.</p>
   * @public
   */
  Document?: string | undefined;
}

/**
 * <p>
 *   Retrieved collection of spans with matching trace IDs.
 * </p>
 * @public
 */
export interface RetrievedTrace {
  /**
   * <p>
   *   The unique identifier for the span.
   * </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *   The length of time in seconds between the start time of the root span and the end time of the last span that completed.
   * </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>
   *   Spans that comprise the trace.
   * </p>
   * @public
   */
  Spans?: Span[] | undefined;
}

/**
 * @public
 */
export interface ListRetrievedTracesResult {
  /**
   * <p>
   *     Status of the retrieval.
   *   </p>
   * @public
   */
  RetrievalStatus?: RetrievalStatus | undefined;

  /**
   * <p>
   *     Format of the requested traces.
   *   </p>
   * @public
   */
  TraceFormat?: TraceFormatType | undefined;

  /**
   * <p>
   * Full traces for the specified requests.
   * </p>
   * @public
   */
  Traces?: RetrievedTrace[] | undefined;

  /**
   * <p>
   *     Specify the pagination token returned by a previous request to retrieve the next page of indexes.
   *
   *
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *     the current page of results as the value of this parameter to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *       the current page of results to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigRequest {
  /**
   * <p>An Amazon Web Services KMS key in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Alias</b> - The name of the key. For example,
   *             <code>alias/MyKey</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Key ID</b> - The KMS key ID of the key. For example,
   *           <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ARN</b> - The full Amazon Resource Name of the key ID or alias.
   *           For example,
   *             <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>.
   *           Use this format to specify a key in a different account.</p>
   *             </li>
   *          </ul>
   *          <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set
   *       to <code>NONE</code> for default encryption.</p>
   * @public
   */
  Type: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigResult {
  /**
   * <p>The new encryption configuration.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The name of the resource policy. Must be unique within a specific Amazon Web Services account.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The resource policy document, which can be up to 5kb in size.</p>
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id.
   *             The revision id is unique to each policy in the account.</p>
   *          <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a
   *             <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists.
   *         </p>
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * <p>A flag to indicate whether to bypass the resource policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p>
   *          </important>
   *          <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p>
   *          <p>The default value is false.</p>
   * @public
   */
  BypassPolicyLockoutCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * <p>The resource policy document, as provided in the <code>PutResourcePolicyRequest</code>.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface BackendConnectionErrors {
  /**
   * <p></p>
   * @public
   */
  TimeoutCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  ConnectionRefusedCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  HTTPCode4XXCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  HTTPCode5XXCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  UnknownHostCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  OtherCount?: number | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TelemetryRecord {
  /**
   * <p></p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p></p>
   * @public
   */
  SegmentsReceivedCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  SegmentsSentCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  SegmentsSpilloverCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  SegmentsRejectedCount?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  BackendConnectionErrors?: BackendConnectionErrors | undefined;
}

/**
 * @public
 */
export interface PutTelemetryRecordsRequest {
  /**
   * <p></p>
   * @public
   */
  TelemetryRecords: TelemetryRecord[] | undefined;

  /**
   * <p></p>
   * @public
   */
  EC2InstanceId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p></p>
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
   * <p>A string containing a JSON document defining one or more segments or
   *       subsegments.</p>
   * @public
   */
  TraceSegmentDocuments: string[] | undefined;
}

/**
 * <p>Information about a segment that failed processing.</p>
 * @public
 */
export interface UnprocessedTraceSegment {
  /**
   * <p>The segment's ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The error that caused processing to fail.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface PutTraceSegmentsResult {
  /**
   * <p>Segments that failed processing.</p>
   * @public
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[] | undefined;
}

/**
 * @public
 */
export interface StartTraceRetrievalRequest {
  /**
   * <p>
   *   Specify the trace IDs of the traces to be retrieved.
   * </p>
   * @public
   */
  TraceIds: string[] | undefined;

  /**
   * <p>
   *   The start of the time range to retrieve traces. The range is inclusive, so the specified start time is included in the query.
   *   Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.
   * </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>
   *   The end of the time range to retrieve traces. The range is inclusive, so the specified end time is included in the query. Specified as epoch time,
   *   the number of seconds since January 1, 1970, 00:00:00 UTC.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface StartTraceRetrievalResult {
  /**
   * <p>
   * Retrieval token.
   * </p>
   * @public
   */
  RetrievalToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or
   *       sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *       in the <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *           / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You
   *           cannot edit or delete system tags.</p>
   *             </li>
   *          </ul>
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
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.</p>
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
   * <p>The case-sensitive name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ARN that was generated upon creation.</p>
   * @public
   */
  GroupARN?: string | undefined;

  /**
   * <p>The updated filter expression defining criteria by which to group traces.</p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights notifications for the group.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InsightsConfiguration?: InsightsConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResult {
  /**
   * <p>The group that was updated. Contains the name of the group that was updated, the
   *             ARN of the group that was updated, the updated filter expression, and the updated insight
   *             configuration assigned to the group.</p>
   * @public
   */
  Group?: Group | undefined;
}

/**
 * <p>
 *   Update to the indexing rule configuration for probabilistic sampling.
 * </p>
 * @public
 */
export interface ProbabilisticRuleValueUpdate {
  /**
   * <p>
   *   Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of data.
   * </p>
   * @public
   */
  DesiredSamplingPercentage: number | undefined;
}

/**
 * <p>
 *   Update to an indexing rule.
 * </p>
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
   * <p>
   *     Indexing rule configuration that is used to probabilistically  sample traceIds.
   *   </p>
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
   * <p>
   *   Name of the indexing rule to be updated.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *     Rule configuration to be updated.
   *   </p>
   * @public
   */
  Rule: IndexingRuleValueUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateIndexingRuleResult {
  /**
   * <p>
   *     Updated indexing rule.
   *   </p>
   * @public
   */
  IndexingRule?: IndexingRule | undefined;
}

/**
 * <p>A document specifying changes to a sampling rule's configuration.</p>
 * @public
 */
export interface SamplingRuleUpdate {
  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   * @public
   */
  RuleARN?: string | undefined;

  /**
   * <p>Matches the ARN of the Amazon Web Services resource on which the service runs.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>The priority of the sampling rule.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   * @public
   */
  FixedRate?: number | undefined;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   * @public
   */
  ReservoirSize?: number | undefined;

  /**
   * <p>Matches the hostname from a request URL.</p>
   * @public
   */
  Host?: string | undefined;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   * @public
   */
  ServiceType?: string | undefined;

  /**
   * <p>Matches the HTTP method of a request.</p>
   * @public
   */
  HTTPMethod?: string | undefined;

  /**
   * <p>Matches the path from a request URL.</p>
   * @public
   */
  URLPath?: string | undefined;

  /**
   * <p>Matches attributes derived from the request.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>Specifies the multiplier applied to the base sampling rate.
   *       This boost allows you to temporarily increase sampling without changing the rule's configuration.</p>
   * @public
   */
  SamplingRateBoost?: SamplingRateBoost | undefined;
}

/**
 * @public
 */
export interface UpdateSamplingRuleRequest {
  /**
   * <p>The rule and fields to change.</p>
   * @public
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateSamplingRuleResult {
  /**
   * <p>The updated rule definition and metadata.</p>
   * @public
   */
  SamplingRuleRecord?: SamplingRuleRecord | undefined;
}

/**
 * @public
 */
export interface UpdateTraceSegmentDestinationRequest {
  /**
   * <p>
   * The configured destination of trace segments.
   * </p>
   * @public
   */
  Destination?: TraceSegmentDestination | undefined;
}

/**
 * @public
 */
export interface UpdateTraceSegmentDestinationResult {
  /**
   * <p>
   *     The destination of the trace segments.
   *   </p>
   * @public
   */
  Destination?: TraceSegmentDestination | undefined;

  /**
   * <p>
   * The status of the update.
   * </p>
   * @public
   */
  Status?: TraceSegmentDestinationStatus | undefined;
}
