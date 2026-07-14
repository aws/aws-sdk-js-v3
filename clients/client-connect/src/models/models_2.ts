// smithy-typescript generated code
import type {
  AgentStatusType,
  ArtifactStatus,
  AttachmentScope,
  AutoEvaluationStatus,
  BooleanComparisonType,
  Channel,
  Comparison,
  ContactEvaluationAttributeComparisonType,
  ContactEvaluationAttributeKey,
  ContactFlowModuleState,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ContactParticipantRole,
  ContactRecordingType,
  DataTableAttributeValueType,
  DateTimeComparisonType,
  DecimalComparisonType,
  DirectoryType,
  EntityType,
  EvaluationFormVersionStatus,
  EvaluationStatus,
  EvaluationType,
  EventSourceName,
  ExecutionRecordStatus,
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
  MonitorCapability,
  NotificationPriority,
  NotificationSource,
  NotificationStatus,
  NumberComparisonType,
  ParticipantRole,
  PerformanceCategoryName,
  PhoneNumberCountryCode,
  PhoneNumberType,
  QueueType,
  QuickConnectType,
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
  SearchContactsMatchType,
  SearchContactsTimeRangeConditionType,
  SearchContactsTimeRangeType,
  SortableFieldName,
  SortOrder,
  SourceType,
  Statistic,
  TaskTemplateStatus,
  TestCaseExecutionStatus,
  TestCaseStatus,
  TrafficDistributionGroupStatus,
  Unit,
  UseCaseType,
  ViewStatus,
  ViewType,
  VocabularyLanguageCode,
} from "./enums";
import type {
  ActionSummary,
  AgentConfig,
  AgentHierarchyGroups,
  AgentStatus,
  AgentStatusSummary,
  AiAgentsCriteria,
  AnalyticsDataAssociationResult,
  Application,
  ControlPlaneAttributeFilter,
  DataTableLockVersion,
  Distribution,
  FlowAssociationSummary,
  FlowModule,
  InstanceStorageConfig,
  LexBot,
  LexV2Bot,
  PrimaryValueResponse,
  SecurityProfileItem,
  TagCondition,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  UserProficiency,
} from "./models_0";
import type {
  Attribute,
  ContactFlow,
  ContactFlowModule,
  DataTableAttribute,
  Dimensions,
  EvaluationContactParticipant,
  EvaluationScore,
  ExtensionConfiguration,
  Filters,
  HierarchyGroupSummary,
  HoursOfOperationOverride,
  HoursOfOperationsIdentifier,
  Notification,
} from "./models_1";

/**
 * @public
 */
export interface GetFlowAssociationRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services End User Messaging SMS phone number ARN when using <code>SMS_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services End User Messaging Social phone number ARN when using
   *       <code>WHATSAPP_MESSAGING_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface GetFlowAssociationResponse {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId?: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType?: FlowAssociationResourceType | undefined;
}

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 * @public
 */
export interface Threshold {
  /**
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   * @public
   */
  Comparison?: Comparison | undefined;

  /**
   * <p>The threshold value to compare.</p>
   * @public
   */
  ThresholdValue?: number | undefined;
}

/**
 * <p>Contains information about a historical metric. </p>
 * @public
 */
export interface HistoricalMetric {
  /**
   * <p>The name of the metric. Following is a list of each supported metric mapped to the UI name, linked to a detailed
   *    description in the <i>Connect Customer Administrator Guide</i>. </p>
   *          <dl>
   *             <dt>ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average queue abandon
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">After contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>API_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#api-contacts-handled">API contacts handled</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time">Average customer hold
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-contacts-handled">Callback contacts
   *        handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned">Contacts abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-agent-hung-up-first">Contacts agent hung up
   *        first</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CONSULTED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-consulted">Contacts consulted</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled">Contacts handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_INCOMING</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-incoming">Contacts handled
   *        incoming</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-outbound">Contacts handled
   *        outbound</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect">Contacts hold
   *        disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_MISSED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response">AGENT_NON_RESPONSE</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued">Contacts queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-in">Contacts transferred in</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out">Contacts transferred
   *        out</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time">Average handle time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time">Average
   *        agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aaverage-agent-interaction-time">Average agent
   *        interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html##average-queue-answer-time">Average queue answer
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: MAX</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time">Minimum flow time</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#service-level">Service level X</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  Name?: HistoricalMetricName | undefined;

  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   * @public
   */
  Threshold?: Threshold | undefined;

  /**
   * <p>The statistic for the metric.</p>
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * <p>The unit for the metric.</p>
   * @public
   */
  Unit?: Unit | undefined;
}

/**
 * @public
 */
export interface GetMetricDataRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of
   *    historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10,
   *    10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available
   *    only for 24 hours.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical
   *    metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be
   *    later than the start time timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the
   *    resources associated with the queues or channels included in the filter. You can include both queue IDs and queue
   *    ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to GetMetricDataV2 for
   *    more up-to-date features.</p>
   *          <note>
   *             <p>To filter by <code>Queues</code>, enter the queue ID/ARN, not the name of
   *     the queue.</p>
   *          </note>
   * @public
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics
   *    returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all
   *    queues.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to GetMetricDataV2 for
   *    more up-to-date features.</p>
   * @public
   */
  Groupings?: Grouping[] | undefined;

  /**
   * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics
   *    are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics definition</a> in the <i>Connect Customer Administrator Guide</i>.</p>
   *          <note>
   *             <p>This API does not support a contacts incoming metric (there's
   *     no CONTACTS_INCOMING metric missing from the documented list). </p>
   *          </note>
   *          <dl>
   *             <dt>ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average queue abandon
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">After contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>API_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#api-contacts-handled">API contacts handled</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time">Average customer hold
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-contacts-handled">Callback contacts
   *        handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned">Contacts abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-agent-hung-up-first">Contacts agent hung up
   *        first</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CONSULTED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-consulted">Contacts consulted</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled">Contacts handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_INCOMING</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-incoming">Contacts handled
   *        incoming</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-outbound">Contacts handled
   *        outbound</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect">Contacts hold
   *        disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_MISSED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response">AGENT_NON_RESPONSE</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued">Contacts queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-in">Contacts transferred in</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out">Contacts transferred
   *        out</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time">Average handle time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time">Average
   *        agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aaverage-agent-interaction-time">Average agent
   *        interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html##average-queue-answer-time">Average queue answer
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: MAX</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time">Minimum flow time</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you must enter <code>LT</code> (for "Less than"). </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average queue abandon
   *        time</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the data for a historical metric.</p>
 * @public
 */
export interface HistoricalMetricData {
  /**
   * <p>Information about the metric.</p>
   * @public
   */
  Metric?: HistoricalMetric | undefined;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Contains information about the historical metrics retrieved.</p>
 * @public
 */
export interface HistoricalMetricResult {
  /**
   * <p>The dimension for the metrics.</p>
   * @public
   */
  Dimensions?: Dimensions | undefined;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: HistoricalMetricData[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   * @public
   */
  MetricResults?: HistoricalMetricResult[] | undefined;
}

/**
 * <p> System defined filtering condition. For example, the NOT_EXISTS StringCondition returns documents where the
 *    field specified by FilterKey does not exist in the document.</p>
 *          <p>When the NOT_EXISTS StringCondition is added to a FilterV2 object, FilterValues must be null or empty. </p>
 * @public
 */
export interface FilterV2StringCondition {
  /**
   * <p> The string condition. </p>
   * @public
   */
  Comparison?: FilterV2StringConditionComparisonOperator | undefined;
}

/**
 * <p>Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API.</p>
 * @public
 */
export interface FilterV2 {
  /**
   * <p>The key to use for filtering data. For example, <code>QUEUE</code>, <code>ROUTING_PROFILE, AGENT</code>,
   *     <code>CHANNEL</code>, <code>AGENT_HIERARCHY_LEVEL_ONE</code>, <code>AGENT_HIERARCHY_LEVEL_TWO</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_THREE</code>, <code>AGENT_HIERARCHY_LEVEL_FOUR</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_FIVE</code>. There must be at least 1 key and a maximum 5 keys. </p>
   * @public
   */
  FilterKey?: string | undefined;

  /**
   * <p>The identifiers to use for filtering data. For example, if you have a filter key of <code>QUEUE</code>, you
   *    would add queue IDs or ARNs in <code>FilterValues</code>. </p>
   * @public
   */
  FilterValues?: string[] | undefined;

  /**
   * <p> System defined filtering condition. For example, the NOT_EXISTS StringCondition returns documents where the
   *    field specified by FilterKey does not exist in the document.</p>
   *          <p>When the NOT_EXISTS StringCondition is added to a FilterV2 object, FilterValues must be null or empty. </p>
   * @public
   */
  StringCondition?: FilterV2StringCondition | undefined;
}

/**
 * <p>Information about the interval period to use for returning results.</p>
 * @public
 */
export interface IntervalDetails {
  /**
   * <p>The timezone applied to requested metrics.</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>
   *             <code>IntervalPeriod</code>: An aggregated grouping applied to request metrics. Valid
   *     <code>IntervalPeriod</code> values are: <code>FIFTEEN_MIN</code> | <code>THIRTY_MIN</code> | <code>HOUR</code> |
   *     <code>DAY</code> | <code>WEEK</code> | <code>TOTAL</code>. </p>
   *          <p>For example, if <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>, <code>StartTime</code> and
   *     <code>EndTime</code> differs by 1 day, then Connect Customer returns 48 results in the response. Each result is
   *    aggregated by the THIRTY_MIN period. By default Connect Customer aggregates results based on the <code>TOTAL</code>
   *    interval period. </p>
   *          <p>The following list describes restrictions on <code>StartTime</code> and <code>EndTime</code> based on what
   *     <code>IntervalPeriod</code> is requested. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FIFTEEN_MIN</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less
   *      than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIRTY_MIN</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less
   *      than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOUR</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than 3
   *      days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAY</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than 35
   *      days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEK</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than 35
   *      days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than
   *      35 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IntervalPeriod?: IntervalPeriod | undefined;
}

/**
 * <p>Contains information about the filter used when retrieving metrics. <code>MetricFiltersV2</code> can be used on
 *    the following metrics: <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>,
 *     <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>.</p>
 * @public
 */
export interface MetricFilterV2 {
  /**
   * <p>The key to use for filtering data. </p>
   *          <p>Valid metric filter keys: </p>
   *          <ul>
   *             <li>
   *                <p>ANSWERING_MACHINE_DETECTION_STATUS</p>
   *             </li>
   *             <li>
   *                <p>CASE_STATUS</p>
   *             </li>
   *             <li>
   *                <p>DISCONNECT_REASON</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_ACTION_IDENTIFIER</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_NEXT_ACTION_IDENTIFIER</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_OUTCOME_TYPE</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_RESOURCE_TYPE</p>
   *             </li>
   *             <li>
   *                <p>INITIATION_METHOD</p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricFilterKey?: string | undefined;

  /**
   * <p>The values to use for filtering data. Values for metric-level filters can be either a fixed set of values or a
   *    customized list, depending on the use case.</p>
   *          <p>For valid values of metric-level filters <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code>, and
   *     <code>ANSWERING_MACHINE_DETECTION_STATUS</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord">ContactTraceRecord</a> in the
   *      <i>Connect Customer Administrator Guide</i>. </p>
   *          <p>For valid values of the metric-level filter <code>FLOWS_OUTCOME_TYPE</code>, see the description for the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome">Flow outcome</a>
   *    metric in the <i>Connect Customer Administrator Guide</i>.</p>
   *          <p>For valid values of the metric-level filter <code>BOT_CONVERSATION_OUTCOME_TYPE</code>, see the description for
   *    the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-conversations-completed-metric">Bot conversations completed</a> in the <i>Connect Customer Administrator Guide</i>.</p>
   *          <p>For valid values of the metric-level filter <code>BOT_INTENT_OUTCOME_TYPE</code>, see the description for the
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-intents-completed-metric">Bot
   *     intents completed</a> metric in the <i>Connect Customer Administrator Guide</i>.</p>
   * @public
   */
  MetricFilterValues?: string[] | undefined;

  /**
   * <p>If set to <code>true</code>, the API response contains results that filter out the results matched by the
   *    metric-level filters condition. By default, <code>Negate</code> is set to <code>false</code>. </p>
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 * @public
 */
export interface ThresholdV2 {
  /**
   * <p>The type of comparison. Currently, "less than" (LT), "less than equal" (LTE), and "greater than" (GT)
   *    comparisons are supported.</p>
   * @public
   */
  Comparison?: string | undefined;

  /**
   * <p>The threshold value to compare.</p>
   * @public
   */
  ThresholdValue?: number | undefined;
}

/**
 * <p>Contains information about the metric.</p>
 *          <important>
 *             <p>Only one of either the Name or MetricId is required.</p>
 *          </important>
 * @public
 */
export interface MetricV2 {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Contains information about the threshold for service level metrics.</p>
   * @public
   */
  Threshold?: ThresholdV2[] | undefined;

  /**
   * <p>Historical metrics or custom metrics can be referenced via this field. This field is a valid Connect Customer
   *    Arn or a UUID</p>
   * @public
   */
  MetricId?: string | undefined;

  /**
   * <p>Contains the filters to be used when returning data.</p>
   * @public
   */
  MetricFilters?: MetricFilterV2[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Connect Customer instance.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of
   *    historical metrics data. The time must be before the end time timestamp. The start and end time depends on the
   *     <code>IntervalPeriod</code> selected. By default the time range between start and end time is 35 days. Historical
   *    metrics are available for 3 months.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical
   *    metrics data. The time must be later than the start time timestamp. It cannot be later than the current
   *    timestamp.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The interval period and timezone to apply to returned metrics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IntervalPeriod</code>: An aggregated grouping applied to request metrics. Valid
   *       <code>IntervalPeriod</code> values are: <code>FIFTEEN_MIN</code> | <code>THIRTY_MIN</code> | <code>HOUR</code> |
   *       <code>DAY</code> | <code>WEEK</code> | <code>TOTAL</code>. </p>
   *                <p>For example, if <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>, <code>StartTime</code> and
   *       <code>EndTime</code> differs by 1 day, then Connect Customer returns 48 results in the response. Each result is
   *      aggregated by the THIRTY_MIN period. By default Connect Customer aggregates results based on the
   *       <code>TOTAL</code> interval period. </p>
   *                <p>The following list describes restrictions on <code>StartTime</code> and <code>EndTime</code> based on which
   *       <code>IntervalPeriod</code> is requested. </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>FIFTEEN_MIN</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be
   *        less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>THIRTY_MIN</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less
   *        than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>HOUR</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than
   *        3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DAY</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than
   *        35 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WEEK</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than
   *        35 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TOTAL</code>: The difference between <code>StartTime</code> and <code>EndTime</code> must be less than
   *        35 days.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TimeZone</code>: The timezone applied to requested metrics.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Interval?: IntervalDetails | undefined;

  /**
   * <p>Filtering is an operation that selects records that match a set of specified criteria. By narrowing the dataset
   *    before aggregation, filters ensure that only relevant records are included in the computation.</p>
   *          <p>
   *             <b>Filter keys</b>
   *          </p>
   *          <p>The following are valid filter keys for a <code>GetMetricDataV2</code> request:</p>
   *          <p>
   *             <code>AGENT</code> | <code>AI_AGENT</code> | <code>AI_AGENT_ID</code> | <code>AI_AGENT_NAME</code> |
   *    <code>AI_AGENT_TYPE</code> | <code>AI_PROMPT</code> | <code>AI_PROMPT_ID</code> |
   *    <code>AI_PROMPT_NAME</code> | <code>AI_PROMPT_TYPE</code> | <code>AI_TOOL_ID</code> |
   *    <code>AI_TOOL_NAME</code> | <code>AI_TOOL_TYPE</code> | <code>AI_USE_CASE</code> |
   *    <code>AGENT_HIERARCHY_LEVEL_ONE</code> | <code>AGENT_HIERARCHY_LEVEL_TWO</code> |
   *    <code>AGENT_HIERARCHY_LEVEL_THREE</code> | <code>AGENT_HIERARCHY_LEVEL_FOUR</code> |
   *    <code>AGENT_HIERARCHY_LEVEL_FIVE</code> | <code>ANSWERING_MACHINE_DETECTION_STATUS</code> |
   *    <code>BOT_ALIAS</code> | <code>BOT_ID</code> | <code>BOT_INTENT_NAME</code> | <code>BOT_LOCALE</code> |
   *    <code>BOT_VERSION</code> | <code>BROWSER_NAME</code> | <code>CAMPAIGN</code> |
   *    <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code> |
   *    <code>CAMPAIGN_EXCLUDED_EVENT_TYPE</code> | <code>CASE_STATUS</code> | <code>CASE_TEMPLATE_ARN</code> |
   *    <code>CHANNEL</code> | <code>contact/segmentAttributes/connect:Subtype</code> |
   *    <code>contact/segmentAttributes/connect:ValidationTestType</code> | <code>DEVICE_MODEL</code> |
   *    <code>DEVICE_TYPE</code> | <code>DISCONNECT_REASON</code> |
   *    <code>EVALUATION_FORM</code> | <code>EVALUATION_QUESTION</code> | <code>EVALUATION_SECTION</code> |
   *    <code>EVALUATION_SOURCE</code> | <code>EVALUATOR_ID</code> | <code>FEATURE</code> |
   *    <code>FLOW_ACTION_ID</code> | <code>FLOW_TYPE</code> | <code>FLOWS_MODULE_RESOURCE_ID</code> |
   *    <code>FLOWS_NEXT_RESOURCE_ID</code> | <code>FLOWS_NEXT_RESOURCE_QUEUE_ID</code> |
   *    <code>FLOWS_OUTCOME_TYPE</code> | <code>FLOWS_RESOURCE_ID</code> | <code>FORM_VERSION</code> |
   *    <code>INITIATING_FLOW</code> | <code>INITIATION_METHOD</code> |
   *    <code>INVOKING_RESOURCE_PUBLISHED_TIMESTAMP</code> | <code>INVOKING_RESOURCE_TYPE</code> |
   *    <code>KNOWLEDGE_BASE_NAME</code> | <code>PARENT_FLOWS_RESOURCE_ID</code> |
   *    <code>Q_CONNECT_ENABLED</code> | <code>QUEUE</code> | <code>RESOURCE_PUBLISHED_TIMESTAMP</code> |
   *    <code>ROUTING_PROFILE</code> | <code>ROUTING_STEP_EXPRESSION</code> | <code>SESSION_ID</code> |
   *    <code>TEST_CASE</code> | <code>TEST_CASE_EXECUTION_FAILURE_REASON</code> |
   *    <code>TEST_CASE_EXECUTION_RESULT</code> | <code>TEST_CASE_EXECUTION_STATE</code> |
   *    <code>WEB_NOTIFICATION_TYPE</code>
   *          </p>
   *          <note>
   *             <p>The following filter keys correspond to Connect Customer resources and are used for authorizing requests.
   *     A <code>GetMetricDataV2</code> request requires at least one of these filters:</p>
   *             <p>
   *                <code>QUEUE</code>, <code>ROUTING_PROFILE</code>, <code>AGENT</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_ONE</code>, <code>AGENT_HIERARCHY_LEVEL_TWO</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_THREE</code>, <code>AGENT_HIERARCHY_LEVEL_FOUR</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_FIVE</code>, <code>CAMPAIGN</code>, <code>EVALUATION_FORM</code>,
   *     <code>EVALUATOR_ID</code>
   *             </p>
   *             <p>You can use up to 5 filter keys in a single request, and up to 100 filter values across all filter keys.</p>
   *          </note>
   *          <p>
   *             <b>Filter values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>VOICE, CHAT, TASK, and EMAIL are valid filter values for the <code>CHANNEL</code> filter key. They do not
   *      count towards the limit of 100 filter values. For example, a <code>GetMetricDataV2</code> request can filter by
   *      50 queues, 35 agents, and 15 routing profiles for a total of 100 filter values, along with 4 channel
   *      filters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>contact_lens_conversational_analytics</code> is a valid filter value for the <code>FEATURE</code>
   *      filter key. It is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>connect:Chat</code>, <code>connect:SMS</code>, <code>connect:Telephony</code>, and
   *      <code>connect:WebRTC</code> are valid filter value examples (not exhaustive) for the
   *      <code>contact/segmentAttributes/connect:Subtype</code> filter key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROUTING_STEP_EXPRESSION</code> accepts a filter value up to 3,000 characters in length. Filter values
   *      are case-sensitive. JSON object key order and whitespace may be arbitrary; array order and tree structure must be
   *      preserved.</p>
   *             </li>
   *             <li>
   *                <p>TRUE and FALSE are the only valid filter values for the <code>Q_CONNECT_ENABLED</code> filter key.</p>
   *                <ul>
   *                   <li>
   *                      <p>TRUE includes all contacts that had Connect AI Agents enabled as part of the flow.</p>
   *                   </li>
   *                   <li>
   *                      <p>FALSE includes all contacts that did not have Connect AI Agents enabled as part of the flow.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPERIENCE_VALIDATION</code> and <code>FLOW_VALIDATION</code> are the only valid filter values for the
   *      <code>contact/segmentAttributes/connect:ValidationTestType</code> filter key. This filter is available only for
   *      contact record-driven metrics.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-outbound-campaigns_Campaign.html">Campaign</a> ARNs are valid filter values for the <code>CAMPAIGN</code> filter key.</p>
   *             </li>
   *             <li>
   *                <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical metrics report</a> in
   *      the <i>Connect Customer Administrator Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters: FilterV2[] | undefined;

  /**
   * <p>The grouping applied to the metrics that are returned. For example, when results are grouped by queue, the
   *    metrics returned are grouped by queue. The values that are returned apply to the metrics for each queue. They are not
   *    aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of all metrics is returned.</p>
   *          <p>Valid grouping keys: <code>AGENT</code> | <code>AI_AGENT</code> | <code>AI_AGENT_ID</code> |
   *     <code>AI_AGENT_NAME</code> | <code>AI_AGENT_NAME_VERSION</code> | <code>AI_AGENT_TYPE</code> |
   *     <code>AI_PROMPT</code> | <code>AI_PROMPT_ID</code> | <code>AI_PROMPT_NAME</code> |
   *     <code>AI_PROMPT_NAME_VERSION</code> | <code>AI_PROMPT_TYPE</code> | <code>AI_TOOL_ID</code> |
   *     <code>AI_TOOL_NAME</code> | <code>AI_TOOL_TYPE</code> | <code>AI_USE_CASE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> |
   *     <code>ANSWERING_MACHINE_DETECTION_STATUS</code> | <code>BOT_ID</code> | <code>BOT_ALIAS</code> |
   *     <code>BOT_VERSION</code> | <code>BOT_LOCALE</code> | <code>BOT_INTENT_NAME</code> | <code>BROWSER_NAME</code> |
   *     <code>CAMPAIGN</code> | <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code> | <code>CAMPAIGN_EXCLUDED_EVENT_TYPE</code> |
   *     <code>CAMPAIGN_EXECUTION_TIMESTAMP</code> | <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> |
   *     <code>CHANNEL</code> | <code>contact/segmentAttributes/connect:Subtype</code> | <code>DEVICE_MODEL</code> |
   *     <code>DEVICE_TYPE</code> | <code>DISCONNECT_REASON</code> |
   *     <code>EVALUATION_FORM</code> | <code>EVALUATION_SECTION</code> | <code>EVALUATION_QUESTION</code> |
   *     <code>EVALUATION_SOURCE</code> | <code>EVALUATOR_ID</code> | <code>FLOWS_RESOURCE_ID</code> |
   *     <code>FLOWS_MODULE_RESOURCE_ID</code> | <code>FLOW_ACTION_ID</code> | <code>FLOW_TYPE</code> |
   *     <code>FLOWS_OUTCOME_TYPE</code> | <code>FORM_VERSION</code> | <code>INITIATION_METHOD</code> |
   *     <code>INVOKING_RESOURCE_PUBLISHED_TIMESTAMP</code> | <code>INVOKING_RESOURCE_TYPE</code> |
   *     <code>KNOWLEDGE_ARTICLE_NAME</code> | <code>KNOWLEDGE_BASE_NAME</code> |
   *     <code>PARENT_FLOWS_RESOURCE_ID</code> | <code>Q_CONNECT_ENABLED</code> | <code>QUEUE</code> |
   *     <code>RESOURCE_PUBLISHED_TIMESTAMP</code> | <code>ROUTING_PROFILE</code> | <code>ROUTING_STEP_EXPRESSION</code> |
   *     <code>SESSION_ID</code> | <code>TEST_CASE</code> | <code>TEST_CASE_EXECUTION_FAILURE_REASON</code> |
   *     <code>TEST_CASE_INVOCATION_METHOD</code> | <code>WEB_NOTIFICATION_TYPE</code>
   *          </p>
   *          <note>
   *             <p>
   *                <code>AI_AGENT_NAME_VERSION</code>, <code>AI_PROMPT_NAME_VERSION</code>, and <code>KNOWLEDGE_ARTICLE_NAME</code> are valid groupings but not valid filters.</p>
   *          </note>
   *          <p>API, SCHEDULE, and EVENT are the only valid filterValues for TEST_CASE_INVOCATION_METHOD.</p>
   *          <p>OBSERVE_EVENT, SEND_INSTRUCTION, ASSERT_DATA, and OVERRIDE_SYSTEM_BEHAVIOR are the only valid filterValues for
   *    TEST_CASE_EXECUTION_FAILURE_REASON</p>
   *          <p>Type: Array of strings</p>
   *          <p>Array Members: Maximum number of 4 items</p>
   *          <p>Required: No</p>
   * @public
   */
  Groupings?: string[] | undefined;

  /**
   * <p>The metrics to retrieve. Specify the name or metricId, groupings, and filters for each metric. The following
   *    historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics definition</a> in the <i>Connect Customer Administrator Guide</i>.</p>
   *          <note>
   *             <p>MetricId should be used to reference custom metrics or out of the box metrics as Arn. If using MetricId, the
   *     limit is 20 MetricId per request.</p>
   *          </note>
   *          <dl>
   *             <dt>ABANDONMENT_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#abandonment-rate">Abandonment rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#adherent-time">Adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ANSWER_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-answer-rate">Agent answer rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-adherent-time">Non-adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response">Agent non-response</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE_WITHOUT_CUSTOMER_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>Data for this metric is available starting from October 1, 2023 0:00:00 GMT.</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response-without-customer-abandons">Agent
   *        non-response without customer abandons</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULE_ADHERENCE</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#adherence">Adherence</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULED_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#scheduled-time">Scheduled time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average queue abandon
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ACTIVE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-active-time">Average active time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">Average after contact work
   *        time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_CONCURRENCY</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-concurrency">Average agent
   *        concurrency</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_AGENT_CONNECTING_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only supports the following as
   *        <code>INITIATION_METHOD</code>: <code>INBOUND</code> | <code>OUTBOUND</code> | <code>CALLBACK</code> |
   *        <code>API</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-api-connecting-time">Average agent API
   *        connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in metric-level filters is not applicable for this metric.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_PAUSE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-pause-time">Average agent pause
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_BOT_CONVERSATION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale,
   *       Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp,
   *       Initiation method, Invoking resource type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#average-bot-conversation-time">Average bot conversation
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_BOT_CONVERSATION_TURNS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale,
   *       Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp,
   *       Initiation method, Invoking resource type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#average-bot-conversation-turns">Average bot conversation
   *        turns</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RELATED_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-contacts-per-case">Average contacts per
   *        case</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-case-resolution-time">Average case resolution
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONTACT_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-contact-duration">Average contact
   *        duration</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_CONTACT_FIRST_RESPONSE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-average-contact-first-response-wait-time">Agent
   *        average contact first response wait time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONVERSATION_CLOSE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-conversation-close-time">Average conversation
   *        close time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONVERSATION_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-conversation-duration">Average conversation
   *        duration</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_DIALS_PER_MINUTE</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns that use the agent assisted voice and automated voice
   *       delivery modes.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Campaign, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-dials-per-minute">Average dials per
   *        minute</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_EVALUATION_SCORE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Section ID, Evaluation Question
   *       ID, Evaluation Source, Form Version, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-evaluation-score">Average evaluation
   *        score</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_FIRST_RESPONSE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-first-response-time">Average agent first
   *        response time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows
   *       next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource
   *       published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-flow-time">Average flow time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_GREETING_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-greeting-time">Average agent greeting
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, AI Use Case, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time">Average handle time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>ACTIVE_AI_AGENTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing
   *       Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#active-ai-agents">Active AI Agents</a>
   *                </p>
   *             </dd>
   *             <dt>AI_HANDOFF_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-handoff-rate">AI Handoff Rate</a>
   *                </p>
   *             </dd>
   *             <dt>AI_HANDOFFS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-handoffs">AI Handoff Count</a>
   *                </p>
   *             </dd>
   *             <dt>AI_AGENT_INVOCATION_SUCCESS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case,
   *       Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-invocation-success">AI Agent Invocation Success</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_AGENT_INVOCATION_SUCCESS_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case,
   *       Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-invocation-success-rate">AI Agent Invocation Success Rate</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_AGENT_INVOCATIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Type, AI Agent Name Version, AI Use Case,
   *       Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-invocations">AI Agent Invocation Count</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_AGENT_RESPONSE_HELPFUL</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel,
   *       Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-response-helpful">AI Agent Response Helpful</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_AGENT_RESPONSE_NOT_HELPFUL</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case, Channel,
   *       Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-agent-response-not-helpful">AI Agent Response Not Helpful</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_RESPONSE_COMPLETION_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-response-completion-rate">AI Response Completion Rate</a>
   *                </p>
   *             </dd>
   *             <dt>AI_INVOLVED_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-involved-contacts">AI Involved Contacts</a>
   *                </p>
   *             </dd>
   *             <dt>AI_PROMPT_INVOCATION_SUCCESS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI
   *       Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-prompt-invocation-success">AI Prompt Invocation Success</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_PROMPT_INVOCATION_SUCCESS_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI
   *       Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-prompt-invocation-success-rate">AI Prompt Invocation Success Rate</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_PROMPT_INVOCATIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI
   *       Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-prompt-invocations">AI Prompt Invocations</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_TOOL_INVOCATION_SUCCESS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI
   *       Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-invocation-success">AI Tool Invocation Success</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_TOOL_INVOCATION_SUCCESS_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI
   *       Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-invocation-success-rate">AI Tool Invocation Success Rate</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_TOOL_INVOCATIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI
   *       Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-invocations">AI Tool Invocations</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AI_AGENT_CONVERSATION_TURNS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Use Case,
   *       Channel, Queue, Routing Profile </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-agent-conversation-turns">Average AI Agent Conversation Turns</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AI_CONVERSATION_TURNS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-conversation-turns">Average AI Conversation Turns</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_AI_PROMPT_INVOCATION_LATENCY</dt>
   *             <dd>
   *                <p>Unit: Milliseconds</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Prompt, AI
   *       Prompt ID, AI Prompt Name, AI Prompt Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-prompt-invocation-latency">Average AI Prompt Invocation Latency</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AI_TOOL_INVOCATION_LATENCY</dt>
   *             <dd>
   *                <p>Unit: Milliseconds</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Name Version, AI Agent Type, AI Tool ID, AI
   *       Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-ai-tool-invocation-latency">Average AI Tool Invocation Latency</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_TOOL_PARAMETER_ACCURACY</dt>
   *             <dd>
   *                <p>Unit: Double</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type,
   *       AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-parameter-accuracy">AI Tool Parameter Accuracy</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_TOOL_SELECTION_ACCURACY</dt>
   *             <dd>
   *                <p>Unit: Double</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type,
   *       AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-selection-accuracy">AI Tool Selection Accuracy</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AI_TOOL_UTILIZATION_ACCURACY</dt>
   *             <dd>
   *                <p>Unit: Double</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent ID, AI Agent Name, AI Agent Name Version, AI Agent Type,
   *       AI Tool ID, AI Tool Name, AI Tool Type, AI Use Case, Channel, Queue, Routing Profile, Session ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#ai-tool-utilization-accuracy">AI Tool Utilization Accuracy</a>
   *                </p>
   *                <note>
   *                   <p>AI Agent Name Version is not a valid filter but a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>COMPLETENESS_SCORE</dt>
   *             <dd>
   *                <p>Unit: Double</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue,
   *       Routing Profile, Session ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#completeness-score">Completeness Score</a>
   *                </p>
   *             </dd>
   *             <dt>FAITHFULNESS_SCORE</dt>
   *             <dd>
   *                <p>Unit: Double</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue,
   *       Routing Profile, Session ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#faithfulness-score">Faithfulness Score</a>
   *                </p>
   *             </dd>
   *             <dt>GOAL_SUCCESS_RATE</dt>
   *             <dd>
   *                <p>Unit: Double</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue,
   *       Routing Profile, Session ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#goal-success-rate">Goal Success Rate</a>
   *                </p>
   *             </dd>
   *             <dt>KNOWLEDGE_CONTENT_REFERENCES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent, AI Agent Name, AI Agent Type, AI Use Case, Channel, Knowledge Base
   *       Name, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#knowledge-content-references">Knowledge Content References</a>
   *                </p>
   *             </dd>
   *             <dt>PROACTIVE_INTENT_ENGAGEMENT_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-engagement-rate">Proactive Intent Engagement Rate</a>
   *                </p>
   *             </dd>
   *             <dt>PROACTIVE_INTENT_RESPONSE_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-response-rate">Proactive Intent Response Rate</a>
   *                </p>
   *             </dd>
   *             <dt>PROACTIVE_INTENTS_ANSWERED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-answered">Proactive Intents Answered</a>
   *                </p>
   *             </dd>
   *             <dt>PROACTIVE_INTENTS_DETECTED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-detected">Proactive Intents Detected</a>
   *                </p>
   *             </dd>
   *             <dt>PROACTIVE_INTENTS_ENGAGED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: AI Agent ID, AI Agent Name, AI Agent Type, AI Use Case, Channel, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#proactive-intents-engaged">Proactive Intents Engaged</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time">Average customer hold
   *        time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME_ALL_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time-all-contacts">Average customer
   *        hold time all contacts</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLDS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-holds">Average holds</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time">Average
   *        agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-time">Average agent interaction
   *        time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERRUPTIONS_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interruptions">Average agent
   *        interruptions</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERRUPTION_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interruption-time">Average agent
   *        interruption time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGE_LENGTH_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-message-length">Average agent message
   *        length</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGE_LENGTH_CUSTOMER</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-message-length">Average customer message
   *        length</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-messages">Average messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-messages">Average agent
   *       messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES_BOT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-bot-messages">Average bot messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES_CUSTOMER</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-messages">Average customer
   *        messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-non-talk-time">Average non-talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-answer-time">Average queue answer
   *        time</a>
   *                </p>
   *                <p>Valid metric level filters: <code>INITIATION_METHOD</code>, <code>FEATURE</code>,
   *        <code>DISCONNECT_REASON</code>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME_CUSTOMER_FIRST_CALLBACK</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Feature, contact/segmentAttributes/connect:Subtype, Q in
   *       Connect, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-answer-time-customer-first-callback">Avg.
   *        queue answer time - customer first callback</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_RESPONSE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-response-time-agent">Average agent response
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_RESPONSE_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-time-agent">Average customer response
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-resolution-time">Average resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-talk-time">Average talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-talk-time">Average agent talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-talk-time">Average customer talk
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WAIT_TIME_AFTER_CUSTOMER_CONNECTION</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns that use the agent assisted voice and automated voice
   *       delivery modes.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Campaign</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-wait-time-after-customer-connection">Average wait
   *        time after customer connection</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WAIT_TIME_AFTER_CUSTOMER_FIRST_CALLBACK_CONNECTION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Feature, contact/segmentAttributes/connect:Subtype, Q in
   *       Connect, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-wait-time-after-customer-connection-customer-first-callback">Avg. wait time after customer connection - customer first callback</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WEIGHTED_EVALUATION_SCORE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form Id, Evaluation Section ID, Evaluation Question
   *       ID, Evaluation Source, Form Version, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-weighted-evaluation-score">Average weighted
   *        evaluation score</a>
   *                </p>
   *             </dd>
   *             <dt>BOT_CONVERSATIONS_COMPLETED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale,
   *       Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp,
   *       Initiation method, Invoking resource type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-conversations-completed">Bot conversations completed</a>
   *                </p>
   *             </dd>
   *             <dt>BOT_INTENTS_COMPLETED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale,
   *       Bot intent name, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource
   *       published timestamp, Initiation method, Invoking resource type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-intents-completed">Bot intents completed</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_CONTACTS_ABANDONED_AFTER_X</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns using the agent assisted voice and automated voice
   *       delivery modes.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Campaign</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you must enter <code>GT</code> (for <i>Greater than</i>).</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-contacts-abandoned-after-x">Campaign contacts
   *        abandoned after X</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_CONTACTS_ABANDONED_AFTER_X_RATE</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns using the agent assisted voice and automated voice
   *       delivery modes.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Campaign</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you must enter <code>GT</code> (for <i>Greater than</i>).</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-contacts-abandoned-after-x-rate">Campaign
   *        contacts abandoned after X rate</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_INTERACTIONS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns using the email, WhatsApp, and web notification
   *       delivery modes. </p>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE</p>
   *                <p>Valid groupings and filters: Browser Name, Campaign, Channel, contact/segmentAttributes/connect:Subtype,
   *       Device Model, Device Type, Web Notification Type</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-interactions">Campaign interactions</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_PROGRESS_RATE</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment. It is not available
   *       for event triggered campaigns.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-progress-rate">Campaign progress rate</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_SEND_ATTEMPTS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Channel, contact/segmentAttributes/connect:Subtype </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-send-attempts">Campaign send attempts</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_SEND_EXCLUSIONS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns.</p>
   *                <p>Valid metric filter key: CAMPAIGN_EXCLUDED_EVENT_TYPE</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Excluded Event Type, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-send-exclusions">Campaign send
   *        exclusions</a>
   *                </p>
   *             </dd>
   *             <dt>CASES_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-created">Cases created</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-created">Contacts created</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled">Contacts handled</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_BY_CONNECTED_TO_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-by-connected-to-agent-timestamp">Contacts handled (connected to agent timestamp)</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect">Contacts hold
   *        disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_AGENT_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-agent-disconnect">Contacts hold agent
   *        disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_CUSTOMER_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-customer-disconnect">Contacts hold customer
   *        disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_PUT_ON_HOLD</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-put-on-hold">Contacts put on hold</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_EXTERNAL</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-external">Contacts transferred
   *        out external</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_INTERNAL</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-internal">Contacts transferred
   *        out internal</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued">Contacts queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED_BY_ENQUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued-by-enqueue">Contacts queued (enqueue
   *        timestamp)</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_REMOVED_FROM_QUEUE_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you can use <code>LT</code> (for "Less than") or <code>LTE</code> (for "Less than
   *       equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-removed-from-queue">Contacts removed from queue
   *        in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_RESOLVED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you can use <code>LT</code> (for "Less than") or <code>LTE</code> (for "Less than
   *       equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-resolved">Contacts resolved in X</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out">Contacts transferred
   *        out</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-by-agent">Contacts transferred
   *        out by agent</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>CURRENT_CASES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#current-cases">Current cases</a>
   *                </p>
   *             </dd>
   *             <dt>CONVERSATIONS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason,
   *       Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#conversations-abandoned">Conversations
   *       abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>DELIVERY_ATTEMPTS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>ANSWERING_MACHINE_DETECTION_STATUS</code>,
   *        <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code>, <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Agent, Answering Machine Detection Status, Browser Name, Campaign, Campaign Delivery EventType,
   *       Channel, contact/segmentAttributes/connect:Subtype, Device Model, Device Type, Disconnect Reason, Queue, Routing
   *       Profile, Web Notification Type</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#delivery-attempts">Delivery attempts</a>
   *                </p>
   *                <note>
   *                   <p>Campaign Delivery EventType filter and grouping are only available for SMS, Email, WhatsApp, and web
   *        notification campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status and
   *        Disconnect Reason are only available for agent assisted voice and automated voice delivery modes. </p>
   *                </note>
   *             </dd>
   *             <dt>DELIVERY_ATTEMPT_DISPOSITION_RATE</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns. Dispositions for the agent assisted voice and automated
   *       voice delivery modes are only available with answering machine detection enabled.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid metric filter key: <code>ANSWERING_MACHINE_DETECTION_STATUS</code>,
   *        <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code>, <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Agent, Answering Machine Detection Status, Browser Name, Campaign, Channel,
   *       contact/segmentAttributes/connect:Subtype, Device Model, Device Type, Disconnect Reason, Queue, Routing Profile,
   *       Web Notification Type</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#delivery-attempt-disposition-rate">Delivery attempt
   *        disposition rate</a>
   *                </p>
   *                <note>
   *                   <p>Campaign Delivery Event Type filter and grouping are only available for SMS, Email, WhatsApp, and web
   *        notification campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status and
   *        Disconnect Reason are only available for agent assisted voice and automated voice delivery modes. </p>
   *                </note>
   *             </dd>
   *             <dt>EVALUATIONS_PERFORMED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form Version, Queue,
   *       Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluations-performed">Evaluations
   *       performed</a>
   *                </p>
   *             </dd>
   *             <dt>FLOWS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows
   *       next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource
   *       published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome">Flows outcome</a>
   *                </p>
   *             </dd>
   *             <dt>FLOWS_STARTED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-started">Flows started</a>
   *                </p>
   *             </dd>
   *             <dt>HUMAN_ANSWERED_CALLS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns. Dispositions for the agent assisted voice and automated
   *       voice delivery modes are only available with answering machine detection enabled. </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Campaign</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#human-answered">Human answered</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows
   *       next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource
   *       published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#maximum-flow-time">Maximum flow time</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#maximum-queued-time">Maximum queued time</a>
   *                </p>
   *             </dd>
   *             <dt>MIN_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows
   *       next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource
   *       published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time">Minimum flow time</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_AUTOMATIC_FAILS</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form Version, Queue,
   *       Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#automatic-fails-percent">Automatic fails percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_BOT_CONVERSATIONS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale,
   *       Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp,
   *       Initiation method, Invoking resource type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#percent-bot-conversations-outcome">Percent bot conversations
   *        outcome</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_BOT_INTENTS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale,
   *       Bot intent name, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource
   *       published timestamp, Initiation method, Invoking resource type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#percent-bot-intents-outcome">Percent bot intents outcome</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CASES_FIRST_CONTACT_RESOLVED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-resolved-on-first-contact">Cases resolved on first
   *        contact</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_EXPIRED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.</p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_JOINED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.</p>
   *             </dd>
   *             <dt>PERCENT_FLOWS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid metric filter key: <code>FLOWS_OUTCOME_TYPE</code>
   *                </p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows
   *       next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource
   *       published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome-percentage">Flows outcome
   *        percentage</a>.</p>
   *                <note>
   *                   <p>The <code>FLOWS_OUTCOME_TYPE</code> is not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>PERCENT_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-talk-time-percent">Non-talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#talk-time-percent">Talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-talk-time-percent">Agent talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#customer-talk-time-percent">Customer talk time
   *        percent</a>
   *                </p>
   *             </dd>
   *             <dt>RECIPIENTS_ATTEMPTED</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment. It is not available
   *       for event triggered campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-attempted">Recipients attempted</a>
   *                </p>
   *             </dd>
   *             <dt>RECIPIENTS_INTERACTED</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment. It is not available
   *       for event triggered campaigns.</p>
   *                <p>Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Channel, contact/segmentAttributes/connect:Subtype, Campaign Execution
   *       Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-interacted">Recipients interacted</a>
   *                </p>
   *             </dd>
   *             <dt>RECIPIENTS_TARGETED</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment. It is not available
   *       for event triggered campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-targeted">Recipients targeted</a>
   *                </p>
   *             </dd>
   *             <dt>REOPENED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-reopened">Cases reopened</a>
   *                </p>
   *             </dd>
   *             <dt>RESOLVED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-resolved">Cases resolved</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you can use <code>LT</code> (for "Less than") or <code>LTE</code> (for "Less than
   *       equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#service-level">Service level X</a>
   *                </p>
   *             </dd>
   *             <dt>STEP_CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.</p>
   *             </dd>
   *             <dt>SUM_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">After contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONNECTING_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. This metric only supports the following filter keys
   *       as <code>INITIATION_METHOD</code>: <code>INBOUND</code> | <code>OUTBOUND</code> | <code>CALLBACK</code> |
   *        <code>API</code> | <code>CALLBACK_CUSTOMER_FIRST_DIALED</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-api-connecting-time">Agent API connecting
   *        time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in metric-level filters is not applicable for this metric.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Metric filter: </p>
   *                <ul>
   *                   <li>
   *                      <p>Valid values: <code>API</code>| <code>INCOMING</code> | <code>OUTBOUND</code> | <code>TRANSFER</code> |
   *          <code>CALLBACK</code> | <code>QUEUE_TRANSFER</code>| <code>Disconnect</code> |
   *          <code>CALLBACK_CUSTOMER_FIRST_DIALED</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned">Contact abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ABANDONED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you can use <code>LT</code> (for "Less than") or <code>LTE</code> (for "Less than
   *       equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned-in-x-seconds">Contacts abandoned in X
   *        seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ANSWERED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800 (inclusive), in seconds.
   *       For <code>Comparison</code>, you can use <code>LT</code> (for "Less than") or <code>LTE</code> (for "Less than
   *       equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-answered-in-x-seconds">Contacts answered in X
   *        seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-flow-time">Contact flow time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-on-contact-time">Agent on contact time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_DISCONNECTED </dt>
   *             <dd>
   *                <p>Valid metric filter key: <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-disconnected">Contact disconnected</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ERROR_STATUS_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#error-status-time">Error status time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-handle-time">Contact handle time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#customer-hold-time">Customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_IDLE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-idle-time">Agent idle time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-interaction-and-hold-time">Agent interaction and
   *        hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-interaction-time">Agent interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_NON_PRODUCTIVE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-productive-time">Agent non-productive
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ONLINE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#online-time">Online time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-attempts">Callback attempts</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  Metrics: MetricV2[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the name, thresholds, and metric filters.</p>
 * @public
 */
export interface MetricDataV2 {
  /**
   * <p>The metric name or metricId, thresholds, and metric filters of the returned metric.</p>
   * @public
   */
  Metric?: MetricV2 | undefined;

  /**
   * <p>The corresponding value of the metric returned in the response.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>The interval period with the start and end time for the metrics.</p>
 * @public
 */
export interface MetricInterval {
  /**
   * <p>The interval period provided in the API request. </p>
   * @public
   */
  Interval?: IntervalPeriod | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format. Start time is based on the interval period selected. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format. End time is based on the interval period selected. For example, If
   *     <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>, <code>StartTime</code> and <code>EndTime</code> in
   *    the API request differs by 1 day, then 48 results are returned in the response. Each result is aggregated by the 30
   *    minutes period, with each <code>StartTime</code> and <code>EndTime</code> differing by 30 minutes. </p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>Contains information about the metric results.</p>
 * @public
 */
export interface MetricResultV2 {
  /**
   * <p>The dimension for the metrics.</p>
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * <p>The interval period with the start and end time for the metrics.</p>
   * @public
   */
  MetricInterval?: MetricInterval | undefined;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: MetricDataV2[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the metrics requested in the API request If no grouping is specified, a summary of metric data
   *    is returned. </p>
   * @public
   */
  MetricResults?: MetricResultV2[] | undefined;
}

/**
 * @public
 */
export interface GetPromptFileRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId: string | undefined;
}

/**
 * @public
 */
export interface GetPromptFileResponse {
  /**
   * <p>A generated URL to the prompt that can be given to an unauthorized user so they can access the prompt in
   *    S3.</p>
   * @public
   */
  PromptPresignedUrl?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskTemplateRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The system generated version of a task template that is associated with a task, when the task is created.</p>
   * @public
   */
  SnapshotVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskTemplateResponse {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task.</p>
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields?: TaskTemplateField[] | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTestCaseExecutionSummaryRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the test case.</p>
   * @public
   */
  TestCaseId: string | undefined;

  /**
   * <p>The identifier of the test case execution.</p>
   * @public
   */
  TestCaseExecutionId: string | undefined;
}

/**
 * <p>Contains summary statistics about a test case execution.</p>
 * @public
 */
export interface ObservationSummary {
  /**
   * <p>The total number of observations in the test case.</p>
   * @public
   */
  TotalObservations?: number | undefined;

  /**
   * <p>The number of observations that passed during execution.</p>
   * @public
   */
  ObservationsPassed?: number | undefined;

  /**
   * <p>The number of observations that failed during execution.</p>
   * @public
   */
  ObservationsFailed?: number | undefined;
}

/**
 * @public
 */
export interface GetTestCaseExecutionSummaryResponse {
  /**
   * <p>The timestamp when the test case execution started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp when the test case execution ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The status of the test case execution.</p>
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;

  /**
   * <p>Summary statistics for the test case execution.</p>
   * @public
   */
  ObservationSummary?: ObservationSummary | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The distribution of sign in traffic between the instance and its replica(s).</p>
 * @public
 */
export interface SignInDistribution {
  /**
   * <p>The Amazon Web Services Region of the sign in distribution.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>Whether sign in distribution is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both
 *    the instance and its replica(s).</p>
 * @public
 */
export interface SignInConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: SignInDistribution[] | undefined;
}

/**
 * <p>The distribution of traffic between the instance and its replicas.</p>
 * @public
 */
export interface TelephonyConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionResponse {
  /**
   * <p>The distribution of traffic between the instance and its replicas.</p>
   * @public
   */
  TelephonyConfig?: TelephonyConfig | undefined;

  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both
   *    the instance and its replica(s).</p>
   * @public
   */
  SignInConfig?: SignInConfig | undefined;

  /**
   * <p>The distribution of agents between the instance and its replica(s).</p>
   * @public
   */
  AgentConfig?: AgentConfig | undefined;
}

/**
 * @public
 */
export interface ImportPhoneNumberRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The claimed phone number ARN being imported from the external service, such as Amazon Web Services End User
   *    Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number to import
   *    from Amazon Web Services End User Messaging.</p>
   * @public
   */
  SourcePhoneNumberArn: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportPhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportWorkspaceMediaRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The type of media. Valid values are: <code>IMAGE_LOGO_FAVICON</code> and
   *    <code>IMAGE_LOGO_HORIZONTAL</code>.</p>
   * @public
   */
  MediaType: MediaType | undefined;

  /**
   * <p>The media source. Can be an S3 presigned URL or a base64-encoded string.</p>
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
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Available agent status types.</p>
   * @public
   */
  AgentStatusTypes?: AgentStatusType[] | undefined;
}

/**
 * @public
 */
export interface ListAgentStatusResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A summary of agent statuses.</p>
   * @public
   */
  AgentStatusSummaryList?: AgentStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to get the association status.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsResponse {
  /**
   * <p>An array of successful results: <code>DataSetId</code>, <code>TargetAccountId</code>,
   *     <code>ResourceShareId</code>, <code>ResourceShareArn</code>. This is a paginated API, so <code>nextToken</code> is
   *    given if there are more results to be returned.</p>
   * @public
   */
  Results?: AnalyticsDataAssociationResult[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataLakeDataSetsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about datasets that are available to associate with: <code>DataSetId</code>,
 *     <code>DataSetName</code>.</p>
 * @public
 */
export interface AnalyticsDataSetsResult {
  /**
   * <p>The identifier of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DataSetName?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataLakeDataSetsResponse {
  /**
   * <p>An array of successful results: <code>DataSetId</code>, <code>DataSetName</code>. This is a paginated API, so
   *     <code>nextToken</code> is given if there are more results to be returned.</p>
   * @public
   */
  Results?: AnalyticsDataSetsResult[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApprovedOriginsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApprovedOriginsResponse {
  /**
   * <p>The approved origins.</p>
   * @public
   */
  Origins?: string[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedContactsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Connect Customer. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The maximum number of results to return per page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contact summary of a contact in contact tree associated with unique identifier.</p>
 * @public
 */
export interface AssociatedContactSummary {
  /**
   * <p>The identifier of the contact in this instance of Connect Customer. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact</p>
   * @public
   */
  ContactArn?: string | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the customer endpoint disconnected from the current contact, in UTC time. In transfer
   *    scenarios, the DisconnectTimestamp of the previous contact indicates the date and time when that contact
   *    ended.</p>
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * <p>The contactId that is related to this contact.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel | undefined;
}

/**
 * @public
 */
export interface ListAssociatedContactsResponse {
  /**
   * <p>List of the contact summary for all the contacts in contact tree associated with unique identifier.</p>
   * @public
   */
  ContactSummaryList?: AssociatedContactSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedFilesConfigurationsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of the attached files configuration.</p>
 * @public
 */
export interface AttachedFilesConfigurationSummary {
  /**
   * <p>The identifier of the Connect Customer instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The scope of the attachment. Valid values are <code>EMAIL</code>, <code>CHAT</code>, <code>CASE</code>, and <code>TASK</code>.</p>
   * @public
   */
  AttachmentScope: AttachmentScope | undefined;

  /**
   * <p>The maximum size limit for attached files in bytes. The minimum value is 1 and the maximum value is 104857600 (100 MB).</p>
   * @public
   */
  MaximumSizeLimitInBytes?: number | undefined;

  /**
   * <p>The configuration for allowed file extensions.</p>
   * @public
   */
  ExtensionConfiguration?: ExtensionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAttachedFilesConfigurationsResponse {
  /**
   * <p>Information about the attached files configurations.</p>
   * @public
   */
  AttachedFilesConfigurations?: AttachedFilesConfigurationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This API is in preview release for Connect Customer and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>A summary of a given authentication profile.</p>
 * @public
 */
export interface AuthenticationProfileSummary {
  /**
   * <p>The unique identifier of the authentication profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the authentication profile summary.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the authentication profile summary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Shows whether the authentication profile is the default authentication profile for the Connect Customer
   *    instance. The default authentication profile applies to all agents in an Connect Customer instance, unless
   *    overridden by another authentication profile.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The timestamp when the authentication profile summary was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region when the authentication profile summary was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesResponse {
  /**
   * <p>A summary of a given authentication profile.</p>
   * @public
   */
  AuthenticationProfileSummaryList?: AuthenticationProfileSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The version of Amazon Lex or Amazon Lex V2.</p>
   * @public
   */
  LexVersion: LexVersion | undefined;
}

/**
 * <p>Configuration information of an Amazon Lex or Amazon Lex V2 bot.</p>
 * @public
 */
export interface LexBotConfig {
  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * <p>Configuration information of an Amazon Lex V2 bot.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots associated with the specified
   *    instance.</p>
   * @public
   */
  LexBots?: LexBotConfig[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChildHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the parent hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListChildHoursOfOperationsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the hours of operation.</p>
   * @public
   */
  ChildHoursOfOperationsSummaryList?: HoursOfOperationsIdentifier[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListContactEvaluationsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Connect Customer. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set because the value returned in the previous response is always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about an evaluation acknowledgement.</p>
 * @public
 */
export interface EvaluationAcknowledgementSummary {
  /**
   * <p>The time when an agent acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgedTime?: Date | undefined;

  /**
   * <p>The agent who acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgedBy?: string | undefined;

  /**
   * <p>A comment from the agent when they confirmed they acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgerComment?: string | undefined;
}

/**
 * <p>Summary information about a contact evaluation.</p>
 * @public
 */
export interface EvaluationSummary {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  EvaluationFormTitle: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The calibration session ID that this evaluation belongs to.</p>
   * @public
   */
  CalibrationSessionId?: string | undefined;

  /**
   * <p>The status of the contact evaluation.</p>
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * <p>Whether automated evaluation is enabled.</p>
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * <p>The status of the contact auto evaluation. </p>
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * <p>The overall score of the contact evaluation.</p>
   * @public
   */
  Score?: EvaluationScore | undefined;

  /**
   * <p>Information related to evaluation acknowledgement.</p>
   * @public
   */
  Acknowledgement?: EvaluationAcknowledgementSummary | undefined;

  /**
   * <p>Type of the evaluation. </p>
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>The timestamp for when the evaluation was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the evaluation was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Information about a contact participant in the evaluation.</p>
   * @public
   */
  ContactParticipant?: EvaluationContactParticipant | undefined;
}

/**
 * @public
 */
export interface ListContactEvaluationsResponse {
  /**
   * <p>Provides details about a list of contact evaluations belonging to an instance.</p>
   * @public
   */
  EvaluationSummaryList: EvaluationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleAliasesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about an alias.</p>
 * @public
 */
export interface ContactFlowModuleAliasSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow module alias.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the alias.</p>
   * @public
   */
  AliasId?: string | undefined;

  /**
   * <p>The version of the flow module.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>The description of the alias.</p>
   * @public
   */
  AliasDescription?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleAliasesResponse {
  /**
   * <p>Information about the flow module aliases.</p>
   * @public
   */
  ContactFlowModuleAliasSummaryList?: ContactFlowModuleAliasSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModulesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The state of the flow module.</p>
   * @public
   */
  ContactFlowModuleState?: ContactFlowModuleState | undefined;
}

/**
 * <p>Contains summary information about a flow.</p>
 * @public
 */
export interface ContactFlowModuleSummary {
  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of flow module.</p>
   * @public
   */
  State?: ContactFlowModuleState | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModulesResponse {
  /**
   * <p>Information about the flow module.</p>
   * @public
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleVersionsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a version.</p>
 * @public
 */
export interface ContactFlowModuleVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow module version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the flow module version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The version of the flow module.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface ListContactFlowModuleVersionsResponse {
  /**
   * <p>Information about the flow module versions.</p>
   * @public
   */
  ContactFlowModuleVersionSummaryList?: ContactFlowModuleVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowTypes?: ContactFlowType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Connect Customer
 *    Flow language</a>.</p>
 * @public
 */
export interface ContactFlowSummary {
  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowType?: ContactFlowType | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowState?: ContactFlowState | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  ContactFlowStatus?: ContactFlowStatus | undefined;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ContactFlowSummaryList?: ContactFlowSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactFlowVersionsRequest {
  /**
   * <p>The identifier of the Connect Customer instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a flow version's metadata.</p>
 * @public
 */
export interface ContactFlowVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the view version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the flow version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface ListContactFlowVersionsResponse {
  /**
   * <p>A list of flow version summaries.</p>
   * @public
   */
  ContactFlowVersionSummaryList?: ContactFlowVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The type of reference.</p>
   * @public
   */
  ReferenceTypes: ReferenceType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise,
 *    null.</p>
 * @public
 */
export interface AttachmentReference {
  /**
   * <p>Identifier of the attachment reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The location path of the attachment reference.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Status of the attachment reference type.</p>
   * @public
   */
  Status?: ReferenceStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the attachment reference.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null.</p>
 * @public
 */
export interface DateReference {
  /**
   * <p>Identifier of the date reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid date.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null.</p>
 * @public
 */
export interface EmailReference {
  /**
   * <p>Identifier of the email reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid email address.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
 * @public
 */
export interface EmailMessageReference {
  /**
   * <p>The name of the email message reference</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email message reference</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise,
 *    null.</p>
 * @public
 */
export interface NumberReference {
  /**
   * <p>Identifier of the number reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid number.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise,
 *    null.</p>
 * @public
 */
export interface StringReference {
  /**
   * <p>Identifier of the string reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid string.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The URL reference.</p>
 * @public
 */
export interface UrlReference {
  /**
   * <p>Identifier of the URL reference.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A valid URL.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains summary information about a reference. <code>ReferenceSummary</code> contains only one non null field
 *    between the URL and attachment based on the reference type.</p>
 * @public
 */
export type ReferenceSummary =
  | ReferenceSummary.AttachmentMember
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
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>. Otherwise, null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>ATTACHMENT</code>. Otherwise,
   *    null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the referenceType is <code>EMAIL_MESSAGE</code>. Otherwise, null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>. Otherwise,
   *    null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>. Otherwise,
   *    null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>. Otherwise, null.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>. Otherwise, null.</p>
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
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListContactReferencesResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ReferenceSummaryList?: ReferenceSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTableAttributesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table whose attributes should be listed.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>Optional list of specific attribute IDs to retrieve. Used for CloudFormation to effectively describe attributes
   *    by ID. If NextToken is provided, this parameter is ignored.</p>
   * @public
   */
  AttributeIds?: string[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data table attributes to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataTableAttributesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of data table attributes with their complete configuration and metadata.</p>
   * @public
   */
  Attributes: DataTableAttribute[] | undefined;
}

/**
 * <p>A primary attribute value filter.</p>
 * @public
 */
export interface PrimaryAttributeValueFilter {
  /**
   * <p>The filter's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The filter's values.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface ListDataTablePrimaryValuesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table whose primary values should be listed.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>Optional list of specific record IDs to retrieve. Used for CloudFormation to effectively describe records by ID.
   *    If NextToken is provided, this parameter is ignored.</p>
   * @public
   */
  RecordIds?: string[] | undefined;

  /**
   * <p>Optional filter to retrieve primary values matching specific criteria.</p>
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValueFilter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data table primary values to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A record primary value.</p>
 * @public
 */
export interface RecordPrimaryValue {
  /**
   * <p>The value's record ID.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The value's primary values.</p>
   * @public
   */
  PrimaryValues?: PrimaryValueResponse[] | undefined;

  /**
   * <p>The value's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The value's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTablePrimaryValuesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of primary value combinations with their record IDs and modification metadata.</p>
   * @public
   */
  PrimaryValuesList: RecordPrimaryValue[] | undefined;
}

/**
 * @public
 */
export interface ListDataTablesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance whose data tables should be listed.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data tables to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A data table summary.</p>
 * @public
 */
export interface DataTableSummary {
  /**
   * <p>The summary's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The summary's ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The summary's ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The summary's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The summary's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTablesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of data table summaries containing basic information about each table including ID, ARN, name, and
   *    modification details.</p>
   * @public
   */
  DataTableSummaryList: DataTableSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDataTableValuesRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table whose values should be listed.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>Optional list of specific record IDs to retrieve values for.</p>
   * @public
   */
  RecordIds?: string[] | undefined;

  /**
   * <p>Optional filter to retrieve values for records matching specific primary attribute criteria.</p>
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValueFilter[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data table values to return in one page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A data table value summary.</p>
 * @public
 */
export interface DataTableValueSummary {
  /**
   * <p>The summary's record ID.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The summary's attribute ID.</p>
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * <p>The summary's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValueResponse[] | undefined;

  /**
   * <p>The summary's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The summary's value type.</p>
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * <p>The summary's value.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The summary's lock version.</p>
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * <p>The summary's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The summary's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListDataTableValuesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of data table values with their associated metadata, lock versions, and modification details.</p>
   * @public
   */
  Values: DataTableValueSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode?: VocabularyLanguageCode | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about a default vocabulary.</p>
 * @public
 */
export interface DefaultVocabulary {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * <p>A list of default vocabularies.</p>
   * @public
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitySecurityProfilesRequest {
  /**
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN)
   *    of the instance. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> Only supported type is AI_AGENT. </p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p> ARN of a Q in Connect AI Agent. </p>
   * @public
   */
  EntityArn: string | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return per page. The default MaxResult size is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEntitySecurityProfilesResponse {
  /**
   * <p> List of Security Profile Object. </p>
   * @public
   */
  SecurityProfiles?: SecurityProfileItem[] | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about an evaluation form.</p>
 * @public
 */
export interface EvaluationFormSummary {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last activated.</p>
   * @public
   */
  LastActivatedTime?: Date | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the user who last activated the evaluation form.</p>
   * @public
   */
  LastActivatedBy?: string | undefined;

  /**
   * <p>The version number of the latest evaluation form version.</p>
   * @public
   */
  LatestVersion: number | undefined;

  /**
   * <p>The version of the active evaluation form version.</p>
   * @public
   */
  ActiveVersion?: number | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormsResponse {
  /**
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   * @public
   */
  EvaluationFormSummaryList: EvaluationFormSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about an evaluation form.</p>
 * @public
 */
export interface EvaluationFormVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   * @public
   */
  Locked: boolean | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsResponse {
  /**
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   * @public
   */
  EvaluationFormVersionSummaryList: EvaluationFormVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowAssociationsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowAssociationsResponse {
  /**
   * <p>Summary of flow associations.</p>
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationOverridesRequest {
  /**
   * <p>The identifier of the Connect Customer instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationOverridesResponse {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the hours of operation override.</p>
   * @public
   */
  HoursOfOperationOverrideList?: HoursOfOperationOverride[] | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about hours of operation for a contact center.</p>
 * @public
 */
export interface HoursOfOperationSummary {
  /**
   * <p>The identifier of the hours of operation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operation.</p>
   * @public
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * <p>The attribute types.</p>
   * @public
   */
  Attributes?: Attribute[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about the instance.</p>
 * @public
 */
export interface InstanceSummary {
  /**
   * <p>The identifier of the instance.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identity management type of the instance.</p>
   * @public
   */
  IdentityManagementType?: DirectoryType | undefined;

  /**
   * <p>The alias of the instance.</p>
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * <p>When the instance was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The service role of the instance.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  InstanceStatus?: InstanceStatus | undefined;

  /**
   * <p>Whether inbound calls are enabled.</p>
   * @public
   */
  InboundCallsEnabled?: boolean | undefined;

  /**
   * <p>Whether outbound calls are enabled.</p>
   * @public
   */
  OutboundCallsEnabled?: boolean | undefined;

  /**
   * <p>This URL allows contact center users to access the Connect Customer admin website.</p>
   * @public
   */
  InstanceAccessUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>Information about the instances.</p>
   * @public
   */
  InstanceSummaryList?: InstanceSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfigs?: InstanceStorageConfig[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The integration type.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;
}

/**
 * <p>Contains summary information about the associated AppIntegrations.</p>
 * @public
 */
export interface IntegrationAssociationSummary {
  /**
   * <p>The identifier for the AppIntegration association.</p>
   * @public
   */
  IntegrationAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   * @public
   */
  IntegrationAssociationArn?: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The integration type.</p>
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The URL for the external application.</p>
   * @public
   */
  SourceApplicationUrl?: string | undefined;

  /**
   * <p>The user-provided, friendly name for the external application.</p>
   * @public
   */
  SourceApplicationName?: string | undefined;

  /**
   * <p>The name of the source.</p>
   * @public
   */
  SourceType?: SourceType | undefined;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * <p>The associations.</p>
   * @public
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   * @public
   */
  LambdaFunctions?: string[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the specified
   *    instance.</p>
   * @public
   */
  LexBots?: LexBot[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. Valid range is 1-100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNotificationsResponse {
  /**
   * <p>The token for the next set of results. If present, there are more results available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of notification summaries.</p>
   * @public
   */
  NotificationSummaryList: Notification[] | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of phone number.</p>
   *          <note>
   *             <p>We recommend using <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> to return phone number types. While ListPhoneNumbers returns number types
   *      <code>UIFN</code>, <code>SHARED</code>, <code>THIRD_PARTY_TF</code>, and <code>THIRD_PARTY_DID</code>, it
   *     incorrectly lists them as <code>TOLL_FREE</code> or <code>DID</code>. </p>
   *          </note>
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[] | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a phone number for a contact center.</p>
 * @public
 */
export interface PhoneNumberSummary {
  /**
   * <p>The identifier of the phone number.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The phone number.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * <p>Information about the phone numbers.</p>
   * @public
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through. If both <code>TargetArn</code> and <code>InstanceId</code> input are not provided, this API lists
   *    numbers claimed to all the Connect Customer instances belonging to your account in the same Amazon Web Services Region as the request.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. If both <code>TargetArn</code> and <code>InstanceId</code> are not provided, this API lists
   *    numbers claimed to all the Connect Customer instances belonging to your account in the same Amazon Web Services Region as the request.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[] | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[] | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   * @public
   */
  PhoneNumberPrefix?: string | undefined;
}

/**
 * <p>Information about phone numbers that have been claimed to your Connect Customer instance or traffic distribution group.</p>
 * @public
 */
export interface ListPhoneNumbersSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The claimed phone number ARN that was previously imported from the external service, such as Amazon Web Services
   *    End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number
   *    that was imported from Amazon Web Services End User Messaging.</p>
   * @public
   */
  SourcePhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about phone numbers that have been claimed to your Connect Customer instances or traffic distribution groups.</p>
   * @public
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of a predefined attribute.</p>
 * @public
 */
export interface PredefinedAttributeSummary {
  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListPredefinedAttributesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Summary of the predefined attributes.</p>
   * @public
   */
  PredefinedAttributeSummaryList?: PredefinedAttributeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The identifier of the Connect Customer instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about the prompt.</p>
 * @public
 */
export interface PromptSummary {
  /**
   * <p>The identifier of the prompt.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   * @public
   */
  PromptSummaryList?: PromptSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueEmailAddressesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information about an email address associated with a queue. Contains the essential details needed to identify and manage the email address routing configuration.</p>
 * @public
 */
export interface EmailAddressSummary {
  /**
   * <p>The unique identifier of the email address associated with the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email address associated with the queue.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Indicates whether this email address is configured as the default outbound email address for the queue. When set to true, this email address is used as the default sender for outbound email contacts from this queue.</p>
   * @public
   */
  IsDefaultOutboundEmail?: boolean | undefined;
}

/**
 * @public
 */
export interface ListQueueEmailAddressesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of email address summary information for all email addresses associated with the queue. Each item contains the email address identifier, ARN, and configuration details.</p>
   * @public
   */
  EmailAddressMetadataList?: EmailAddressSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a quick connect.</p>
 * @public
 */
export interface QuickConnectSummary {
  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of quick connect. In the Connect Customer admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   * @public
   */
  QuickConnectType?: QuickConnectType | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueTypes?: QueueType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a queue.</p>
 * @public
 */
export interface QueueSummary {
  /**
   * <p>The identifier of the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueType?: QueueType | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   * @public
   */
  QueueSummaryList?: QueueSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. Both Instance ID and Instance ARN are supported input formats. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The type of quick connect. In the Connect Customer admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   * @public
   */
  QuickConnectTypes?: QuickConnectType[] | undefined;
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Request {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Connect Customer. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Contact Lens output type to be returned.</p>
   * @public
   */
  OutputType: RealTimeContactAnalysisOutputType | undefined;

  /**
   * <p>Enum with segment types . Each value corresponds to a segment type returned in the segments list of the API.
   *    Each segment type has its own structure. Different channels may have different sets of supported segment
   *    types.</p>
   * @public
   */
  SegmentTypes: RealTimeContactAnalysisSegmentType[] | undefined;
}

/**
 * <p>Object that describes attached file. </p>
 * @public
 */
export interface RealTimeContactAnalysisAttachment {
  /**
   * <p>A case-sensitive name of the attachment being uploaded. Can be redacted.</p>
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the
   *      <i>Connect Customer Administrator Guide</i>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Status of the attachment.</p>
   * @public
   */
  Status?: ArtifactStatus | undefined;
}

/**
 * <p>Object describing time with which the segment is associated. It can have different representations of time.
 *    Currently supported: absoluteTime</p>
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
   * <p>Time represented in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
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
 * <p>Segment containing list of attachments.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentAttachments {
  /**
   * <p>The identifier of the segment.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant. Can be redacted. </p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>List of objects describing an individual attachment.</p>
   * @public
   */
  Attachments: RealTimeContactAnalysisAttachment[] | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * <p>Begin and end offsets for a part of text.</p>
 * @public
 */
export interface RealTimeContactAnalysisCharacterInterval {
  /**
   * <p>The beginning of the character interval.</p>
   * @public
   */
  BeginOffsetChar: number | undefined;

  /**
   * <p>The end of the character interval.</p>
   * @public
   */
  EndOffsetChar: number | undefined;
}

/**
 * <p>Transcript representation containing Id and list of character intervals that are associated with analysis data.
 *    For example, this object within a <code>RealTimeContactAnalysisPointOfInterest</code> in
 *     <code>Category.MatchedDetails</code> would have character interval describing part of the text that matched
 *    category.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
  /**
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>List of character intervals within transcript content/text.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval | undefined;
}

/**
 * <p>The section of the contact transcript segment that category rule was detected.</p>
 * @public
 */
export interface RealTimeContactAnalysisPointOfInterest {
  /**
   * <p>List of the transcript items (segments) that are associated with a given point of interest. </p>
   * @public
   */
  TranscriptItems?: RealTimeContactAnalysisTranscriptItemWithCharacterOffsets[] | undefined;
}

/**
 * <p>Provides information about the category rule that was matched.</p>
 * @public
 */
export interface RealTimeContactAnalysisCategoryDetails {
  /**
   * <p>List of PointOfInterest - objects describing a single match of a rule.</p>
   * @public
   */
  PointsOfInterest: RealTimeContactAnalysisPointOfInterest[] | undefined;
}

/**
 * <p>The matched category rules.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentCategories {
  /**
   * <p>Map between the name of the matched rule and RealTimeContactAnalysisCategoryDetails.</p>
   * @public
   */
  MatchedDetails: Record<string, RealTimeContactAnalysisCategoryDetails> | undefined;
}

/**
 * <p>Segment type describing a contact event.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentEvent {
  /**
   * <p>The identifier of the contact event.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant. Can be redacted.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Type of the event. For example, <code>application/vnd.amazonaws.connect.event.participant.left</code>.</p>
   * @public
   */
  EventType: string | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * <p>Transcript representation containing Id, Content and list of character intervals that are associated with
 *    analysis data. For example, this object within an issue detected would describe both content that contains identified
 *    issue and intervals where that content is taken from.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithContent {
  /**
   * <p>Part of the transcript content that contains identified issue. Can be redacted</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Begin and end offsets for a part of text.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval | undefined;
}

/**
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each turn in the
 *    conversation.</p>
 * @public
 */
export interface RealTimeContactAnalysisIssueDetected {
  /**
   * <p>List of the transcript items (segments) that are associated with a given issue.</p>
   * @public
   */
  TranscriptItems: RealTimeContactAnalysisTranscriptItemWithContent[] | undefined;
}

/**
 * <p>Segment type containing a list of detected issues.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentIssues {
  /**
   * <p>List of the issues detected.</p>
   * @public
   */
  IssuesDetected: RealTimeContactAnalysisIssueDetected[] | undefined;
}

/**
 * <p>Information about the post-contact summary for a real-time contact segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentPostContactSummary {
  /**
   * <p>The content of the summary.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Whether the summary was successfully COMPLETED or FAILED to be generated.</p>
   * @public
   */
  Status: RealTimeContactAnalysisPostContactSummaryStatus | undefined;

  /**
   * <p>If the summary failed to be generated, one of the following failure codes occurs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUOTA_EXCEEDED</code>: The number of concurrent analytics jobs reached your service quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CONVERSATION_CONTENT</code>: The conversation needs to have at least one turn from both the
   *      participants in order to generate the summary.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_SAFETY_GUIDELINES</code>: The generated summary cannot be provided because it failed to meet
   *      system safety guidelines.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_ANALYSIS_CONFIGURATION</code>: This code occurs when, for example, you're using a <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens">language</a> that isn't supported by generative AI-powered post-contact summaries. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code>: Internal system error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureCode?: RealTimeContactAnalysisPostContactSummaryFailureCode | undefined;
}

/**
 * <p>Object describing redaction applied to the segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemRedaction {
  /**
   * <p>List of character intervals each describing a part of the text that was redacted. For
   *     <code>OutputType.Raw</code>, part of the original text that contains data that can be redacted. For <code>
   *     OutputType.Redacted</code>, part of the string with redaction tag.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval[] | undefined;
}

/**
 * <p>The analyzed transcript segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentTranscript {
  /**
   * <p>The identifier of the transcript.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The content of the transcript. Can be redacted.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The type of content of the item. For example, <code>text/plain</code>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;

  /**
   * <p>Object describing redaction that was applied to the transcript. If transcript has the field it means part of the
   *    transcript was redacted.</p>
   * @public
   */
  Redaction?: RealTimeContactAnalysisTranscriptItemRedaction | undefined;

  /**
   * <p>The sentiment detected for this piece of transcript.</p>
   * @public
   */
  Sentiment?: RealTimeContactAnalysisSentimentLabel | undefined;
}

/**
 * <p>An analyzed segment for a real-time analysis session.</p>
 * @public
 */
export type RealtimeContactAnalysisSegment =
  | RealtimeContactAnalysisSegment.AttachmentsMember
  | RealtimeContactAnalysisSegment.CategoriesMember
  | RealtimeContactAnalysisSegment.EventMember
  | RealtimeContactAnalysisSegment.IssuesMember
  | RealtimeContactAnalysisSegment.PostContactSummaryMember
  | RealtimeContactAnalysisSegment.TranscriptMember
  | RealtimeContactAnalysisSegment.$UnknownMember;

/**
 * @public
 */
export namespace RealtimeContactAnalysisSegment {
  /**
   * <p>The analyzed transcript segment.</p>
   * @public
   */
  export interface TranscriptMember {
    Transcript: RealTimeContactAnalysisSegmentTranscript;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>The matched category rules.</p>
   * @public
   */
  export interface CategoriesMember {
    Transcript?: never;
    Categories: RealTimeContactAnalysisSegmentCategories;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Segment type containing a list of detected issues.</p>
   * @public
   */
  export interface IssuesMember {
    Transcript?: never;
    Categories?: never;
    Issues: RealTimeContactAnalysisSegmentIssues;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Segment type describing a contact event.</p>
   * @public
   */
  export interface EventMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event: RealTimeContactAnalysisSegmentEvent;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>The analyzed attachments.</p>
   * @public
   */
  export interface AttachmentsMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments: RealTimeContactAnalysisSegmentAttachments;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the post-contact summary.</p>
   * @public
   */
  export interface PostContactSummaryMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary: RealTimeContactAnalysisSegmentPostContactSummary;
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
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Response {
  /**
   * <p>The channel of the contact. </p>
   *          <important>
   *             <p>Only <code>CHAT</code> is supported. This API does not support <code>VOICE</code>. If you attempt to use it for
   *     the VOICE channel, an <code>InvalidRequestException</code> error occurs.</p>
   *          </important>
   * @public
   */
  Channel: RealTimeContactAnalysisSupportedChannel | undefined;

  /**
   * <p>Status of real-time contact analysis.</p>
   * @public
   */
  Status: RealTimeContactAnalysisStatus | undefined;

  /**
   * <p>An analyzed transcript or category.</p>
   * @public
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileManualAssignmentQueuesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a routing profile manual assignment queue.</p>
 * @public
 */
export interface RoutingProfileManualAssignmentQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The channels this queue supports. Valid Values: CHAT | TASK | EMAIL </p>
   *          <important>
   *             <p>VOICE is not supported. The information shown below is incorrect. We're working to correct it. </p>
   *          </important>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileManualAssignmentQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the manual assignment queues associated with the routing profile.</p>
   * @public
   */
  RoutingProfileManualAssignmentQueueConfigSummaryList?: RoutingProfileManualAssignmentQueueConfigSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a routing profile queue.</p>
 * @public
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an available agent. For
   *    more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and delay</a> in the
   *      <i>Connect Customer Administrator Guide</i>.</p>
   * @public
   */
  Delay: number | undefined;

  /**
   * <p>The channels this queue supports.</p>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[] | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a routing profile.</p>
 * @public
 */
export interface RoutingProfileSummary {
  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the routing profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus?: RulePublishStatus | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName?: EventSourceName | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A list of <code>ActionTypes</code> associated with a rule. </p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * <p>The list of capability tiers associated with the rule. Used for categorizing rules by capability (for example,
   *     <code>GenerativeAI</code>).</p>
   * @public
   */
  RuleCapabilityTiers?: RuleCapabilityTier[] | undefined;

  /**
   * <p>A list of ActionTypes associated with a rule. </p>
   * @public
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The timestamp for when the rule was created. </p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the rule was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>Summary information about a rule.</p>
   * @public
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Configuration information of the security key.</p>
 * @public
 */
export interface SecurityKey {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>The key of the security key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>When the security key was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * <p>The security keys.</p>
   * @public
   */
  SecurityKeys?: SecurityKey[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsResponse {
  /**
   * <p>A list of the third-party application's metadata.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileFlowModulesRequest {
  /**
   * <p> The identifier for the security profile. </p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p> The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return per page. The default MaxResult size is 100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfileFlowModulesResponse {
  /**
   * <p> A list of Flow Modules an AI Agent can invoke as a tool. </p>
   * @public
   */
  AllowedFlowModules?: FlowModule[] | undefined;

  /**
   * <p> The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The time the flow module was last modified. </p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p> The Region that flow module was last modified in. </p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * <p>The permissions granted to the security profile. For a complete list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile
   *     permissions</a>.</p>
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a security profile.</p>
 * @public
 */
export interface SecurityProfileSummary {
  /**
   * <p>The identifier of the security profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   * @public
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. All Connect Customer resources (instances, queues, flows, routing profiles, etc) have
   *    an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Connect Customer instance ID/ARN</a>. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Contains summary information about the task template.</p>
 * @public
 */
export interface TaskTemplateMetadata {
  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTaskTemplatesResponse {
  /**
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   * @public
   */
  TaskTemplates?: TaskTemplateMetadata[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionRecordsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the test case.</p>
   * @public
   */
  TestCaseId: string | undefined;

  /**
   * <p>The identifier of the test case execution.</p>
   * @public
   */
  TestCaseExecutionId: string | undefined;

  /**
   * <p>Filter execution records by status.</p>
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a test case execution record.</p>
 * @public
 */
export interface ExecutionRecord {
  /**
   * <p>The identifier of the execution record.</p>
   * @public
   */
  ObservationId?: string | undefined;

  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  Status?: ExecutionRecordStatus | undefined;

  /**
   * <p>The timestamp when the action was executed.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The details of the executed record.</p>
   * @public
   */
  Record?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionRecordsResponse {
  /**
   * <p>An array of test case execution record objects.</p>
   * @public
   */
  ExecutionRecords?: ExecutionRecord[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Filter executions by test case identifier.</p>
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * <p>Filter executions by test case name.</p>
   * @public
   */
  TestCaseName?: string | undefined;

  /**
   * <p>Filter executions that started after this time.</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>Filter executions that started before this time.</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>Filter executions by status.</p>
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a test case execution.</p>
 * @public
 */
export interface TestCaseExecution {
  /**
   * <p>The timestamp when the test case execution started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp when the test case execution ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The identifier of the test case execution.</p>
   * @public
   */
  TestCaseExecutionId?: string | undefined;

  /**
   * <p>The identifier of the test case.</p>
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * <p>The status of the test case execution.</p>
   * @public
   */
  TestCaseExecutionStatus?: TestCaseExecutionStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestCaseExecutionsResponse {
  /**
   * <p>An array of test case execution summary objects.</p>
   * @public
   */
  TestCaseExecutions?: TestCaseExecution[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCasesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a test case.</p>
 * @public
 */
export interface TestCaseSummary {
  /**
   * <p>The identifier of the test case.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the test case.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the test case.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the test case.</p>
   * @public
   */
  Status?: TestCaseStatus | undefined;

  /**
   * <p>The time at which the test case was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The region in which the test case was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListTestCasesResponse {
  /**
   * <p>Information about the tests.</p>
   * @public
   */
  TestCaseSummaryList?: TestCaseSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * <p>Information about traffic distribution groups.</p>
 * @public
 */
export interface TrafficDistributionGroupSummary {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the traffic distribution group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The status of the traffic distribution group. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a>
   *      operation is still in progress and has not yet completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a>
   *      operation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a>
   *      operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a>
   *      operation is still in progress and has not yet completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETION_FAILED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a>
   *      operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistributionGroup.html">UpdateTrafficDistributionGroup</a>
   *      operation is still in progress and has not yet completed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: TrafficDistributionGroupStatus | undefined;

  /**
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of traffic distribution groups.</p>
   * @public
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a traffic distribution group user.</p>
 * @public
 */
export interface TrafficDistributionGroupUserSummary {
  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of traffic distribution group users.</p>
   * @public
   */
  TrafficDistributionGroupUserSummaryList?: TrafficDistributionGroupUserSummary[] | undefined;
}

/**
 * <p>Provides summary information about the use cases for the specified integration association.</p>
 * @public
 */
export interface ListUseCasesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the
 *    use
 *    case.</p>
 * @public
 */
export interface UseCase {
  /**
   * <p>The identifier for the use case.</p>
   * @public
   */
  UseCaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   * @public
   */
  UseCaseArn?: string | undefined;

  /**
   * <p>The type of use case to associate to the integration association. Each integration association can have only one
   *    of each use case type.</p>
   * @public
   */
  UseCaseType?: UseCaseType | undefined;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * <p>The use cases.</p>
   * @public
   */
  UseCaseSummaryList?: UseCase[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * <p>Information about the hierarchy groups.</p>
   * @public
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserNotificationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. Valid range is 1-1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * <p>Summary information about a notification for a specific user, including the user's read status.</p>
 * @public
 */
export interface UserNotificationSummary {
  /**
   * <p>The unique identifier for the notification.</p>
   * @public
   */
  NotificationId?: string | undefined;

  /**
   * <p>The status of the notification for this user. Valid values are READ, UNREAD, and HIDDEN.</p>
   * @public
   */
  NotificationStatus?: NotificationStatus | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The identifier of the recipient user.</p>
   * @public
   */
  RecipientId?: string | undefined;

  /**
   * <p>The localized content of the notification.</p>
   * @public
   */
  Content?: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * <p>The priority level of the notification.</p>
   * @public
   */
  Priority?: NotificationPriority | undefined;

  /**
   * <p>The source that created the notification. Valid values are CUSTOMER, RULES, and SYSTEM.</p>
   * @public
   */
  Source?: NotificationSource | undefined;

  /**
   * <p>The timestamp when the notification was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the notification expires.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListUserNotificationsResponse {
  /**
   * <p>A list of notifications sent to the specified user.</p>
   * @public
   */
  UserNotifications?: UserNotificationSummary[] | undefined;

  /**
   * <p>The token for the next set of results. If present, there are more results available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserProficienciesRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUserProficienciesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the user proficiencies.</p>
   * @public
   */
  UserProficiencyList?: UserProficiency[] | undefined;

  /**
   * <p>The last time that the user's proficiencies are were modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The region in which a user's proficiencies were last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a user.</p>
 * @public
 */
export interface UserSummary {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Connect Customer user name of the user account.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>Information about the users.</p>
   * @public
   */
  UserSummaryList?: UserSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a view's metadata.</p>
 * @public
 */
export interface ViewSummary {
  /**
   * <p>The identifier of the view.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The <code>PUBLISHED</code>
   *    status will initiate validation on the content.</p>
   * @public
   */
  Status?: ViewStatus | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListViewsResponse {
  /**
   * <p>A list of view summaries.</p>
   * @public
   */
  ViewsSummaryList?: ViewSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a view version's metadata.</p>
 * @public
 */
export interface ViewVersionSummary {
  /**
   * <p>The identifier of the view version.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the view version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the view version.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the view version.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The sequentially incremented version of the view version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The description of the view version.</p>
   * @public
   */
  VersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsResponse {
  /**
   * <p>A list of view version summaries.</p>
   * @public
   */
  ViewVersionSummaryList?: ViewVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceMediaRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * <p>Contains information about a media asset used in a workspace.</p>
 * @public
 */
export interface MediaItem {
  /**
   * <p>The type of media. Valid values are: <code>IMAGE_LOGO_FAVICON</code> and
   *    <code>IMAGE_LOGO_HORIZONTAL</code>.</p>
   * @public
   */
  Type?: MediaType | undefined;

  /**
   * <p>The source URL or data for the media asset.</p>
   * @public
   */
  Source?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceMediaResponse {
  /**
   * <p>A list of media assets for the workspace.</p>
   * @public
   */
  Media?: MediaItem[] | undefined;
}

/**
 * @public
 */
export interface ListWorkspacePagesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a page configuration in a workspace, including the view assigned to the page.</p>
 * @public
 */
export interface WorkspacePage {
  /**
   * <p>The Amazon Resource Name (ARN) of the view associated with this page.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The page identifier. System pages include <code>HOME</code> and <code>AGENT_EXPERIENCE</code>.</p>
   * @public
   */
  Page?: string | undefined;

  /**
   * <p>The URL-friendly identifier for the page.</p>
   * @public
   */
  Slug?: string | undefined;

  /**
   * <p>A JSON string containing input parameters passed to the view when the page is rendered.</p>
   * @public
   */
  InputData?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacePagesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of page configurations in the workspace.</p>
   * @public
   */
  WorkspacePageList: WorkspacePage[] | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to
   *    retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a workspace.</p>
 * @public
 */
export interface WorkspaceSummary {
  /**
   * <p>The unique identifier of the workspace.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workspace.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp when the workspace was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where the workspace was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A summary list of workspaces.</p>
   * @public
   */
  WorkspaceSummaryList: WorkspaceSummary[] | undefined;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to
   *    escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if barge is enabled.</p>
   * @public
   */
  AllowedMonitorCapabilities?: MonitorCapability[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface MonitorContactResponse {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The ARN of the contact.</p>
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface PauseContactRequest {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can find the <code>instanceId</code> in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string | undefined;
}

/**
 * @public
 */
export interface PauseContactResponse {}

/**
 * @public
 */
export interface PutUserStatusRequest {
  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface PutUserStatusResponse {}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Web Services Region where to replicate the Connect Customer instance.</p>
   * @public
   */
  ReplicaRegion: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.</p>
   * @public
   */
  ReplicaAlias: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the ARN of the instance.
   *    The replicated instance has the same identifier as the instance it was replicated from.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated instance.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactRequest {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance. You can find the <code>instanceId</code> in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactResponse {}

/**
 * @public
 */
export interface ResumeContactRecordingRequest {
  /**
   * <p>The identifier of the Connect Customer instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the first interaction with
   *    the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The type of recording being operated on.</p>
   * @public
   */
  ContactRecordingType?: ContactRecordingType | undefined;
}

/**
 * @public
 */
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAgentStatusesResponse {
  /**
   * <p>The search criteria to be used to return agent statuses.</p>
   * @public
   */
  AgentStatuses?: AgentStatus[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of agent statuses which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Connect Customer instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType: PhoneNumberType | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   * @public
   */
  PhoneNumberPrefix?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about available phone numbers.</p>
 * @public
 */
export interface AvailableNumberSummary {
  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of available phone numbers that you can claim to your Connect Customer instance or traffic distribution group.</p>
   * @public
   */
  AvailableNumbersList?: AvailableNumberSummary[] | undefined;
}

/**
 * <p>A boolean search condition for Search APIs.</p>
 * @public
 */
export interface BooleanCondition {
  /**
   * <p>A name of the property to be searched.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>Boolean property comparison type.</p>
   * @public
   */
  ComparisonType?: BooleanComparisonType | undefined;
}

/**
 * <p>A datetime search condition for Search APIs.</p>
 * @public
 */
export interface DateTimeCondition {
  /**
   * <p>A name of the datetime property to be searched</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>A minimum value of the property.</p>
   * @public
   */
  MinValue?: string | undefined;

  /**
   * <p>A maximum value of the property.</p>
   * @public
   */
  MaxValue?: string | undefined;

  /**
   * <p>Datetime property comparison type.</p>
   * @public
   */
  ComparisonType?: DateTimeComparisonType | undefined;
}

/**
 * <p>A decimal search condition for Search APIs.</p>
 * @public
 */
export interface DecimalCondition {
  /**
   * <p>A name of the decimal property to be searched.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>A minimum value of the decimal property.</p>
   * @public
   */
  MinValue?: number | undefined;

  /**
   * <p>A maximum value of the decimal property.</p>
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the decimal condition.</p>
   * @public
   */
  ComparisonType?: DecimalComparisonType | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a numeric condition.</p>
 *          <note>
 *             <p>The currently supported value for <code>FieldName</code> is <code>limit</code>.</p>
 *          </note>
 * @public
 */
export interface NumberCondition {
  /**
   * <p>The name of the field in the number condition.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The minValue to be used while evaluating the number condition.</p>
   * @public
   */
  MinValue?: number | undefined;

  /**
   * <p>The maxValue to be used while evaluating the number condition.</p>
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the number condition.</p>
   * @public
   */
  ComparisonType?: NumberComparisonType | undefined;
}

/**
 * <p>The value of a contact evaluation attribute condition.</p>
 * @public
 */
export interface ContactEvaluationAttributeValue {
  /**
   * <p>A string value for the attribute.</p>
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * <p>An attribute condition for contact evaluation filtering.</p>
 * @public
 */
export interface ContactEvaluationAttributeCondition {
  /**
   * <p>The key of the attribute.</p>
   * @public
   */
  AttributeKey?: ContactEvaluationAttributeKey | undefined;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  AttributeValue?: ContactEvaluationAttributeValue | undefined;

  /**
   * <p>The comparison type for the condition.</p>
   * @public
   */
  ComparisonType?: ContactEvaluationAttributeComparisonType | undefined;
}

/**
 * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
 * @public
 */
export interface ContactEvaluationAttributeAndCondition {
  /**
   * <p>A list of tag conditions to apply.</p>
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * <p>A list of attribute conditions to apply.</p>
   * @public
   */
  AttributeConditions?: ContactEvaluationAttributeCondition[] | undefined;
}

/**
 * <p>An object that can be used to specify tag conditions and attribute conditions inside the
 *     <code>SearchFilter</code> for contact evaluations. This accepts an <code>OR</code> or <code>AND</code>
 *    (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
 *             </li>
 *             <li>
 *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ContactEvaluationAttributeFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
   * @public
   */
  OrConditions?: ContactEvaluationAttributeAndCondition[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
   * @public
   */
  AndCondition?: ContactEvaluationAttributeAndCondition | undefined;

  /**
   * <p>A tag condition to apply.</p>
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * <p>An attribute condition to apply.</p>
   * @public
   */
  ContactEvaluationAttributeCondition?: ContactEvaluationAttributeCondition | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface EvaluationSearchFilter {
  /**
   * <p>An object that can be used to specify tag conditions.</p>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;

  /**
   * <p>An object that can be used to specify tag conditions and attribute conditions for contact evaluations.</p>
   * @public
   */
  ContactEvaluationAttributeFilter?: ContactEvaluationAttributeFilter | undefined;
}

/**
 * <p>Metadata information about an evaluation search.</p>
 * @public
 */
export interface EvaluationSearchMetadata {
  /**
   * <p>The identifier of the contact in this instance of Connect Customer. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the person who evaluated the contact.</p>
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * <p>The unique ID of the agent who handled the contact.</p>
   * @public
   */
  ContactAgentId?: string | undefined;

  /**
   * <p>The calibration session ID that this evaluation belongs to.</p>
   * @public
   */
  CalibrationSessionId?: string | undefined;

  /**
   * <p>The total evaluation score expressed as a percentage.</p>
   * @public
   */
  ScorePercentage?: number | undefined;

  /**
   * <p>The flag that marks the item as automatic fail. If the item or a child item gets an automatic fail answer, this
   *    flag is true.</p>
   * @public
   */
  ScoreAutomaticFail?: boolean | undefined;

  /**
   * <p>The flag to mark the item as not applicable for scoring.</p>
   * @public
   */
  ScoreNotApplicable?: boolean | undefined;

  /**
   * <p>Whether auto-evaluation is enabled.</p>
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * <p>The status of the contact auto evaluation. </p>
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;

  /**
   * <p>When the evaluation was acknowledged by the agent.</p>
   * @public
   */
  AcknowledgedTime?: Date | undefined;

  /**
   * <p>The agent who acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgedBy?: string | undefined;

  /**
   * <p>The comment from the agent when they acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgerComment?: string | undefined;

  /**
   * <p>Identifier of the sampling job.</p>
   * @public
   */
  SamplingJobId?: string | undefined;

  /**
   * <p>Identifier for the review.</p>
   * @public
   */
  ReviewId?: string | undefined;

  /**
   * <p>Role of a contact participant in the evaluation.</p>
   * @public
   */
  ContactParticipantRole?: ContactParticipantRole | undefined;

  /**
   * <p>Identifier for a contact participant in the evaluation.</p>
   * @public
   */
  ContactParticipantId?: string | undefined;

  /**
   * <p>The points earned for the evaluation.</p>
   * @public
   */
  EarnedPoints?: number | undefined;

  /**
   * <p>The maximum base points possible for the evaluation.</p>
   * @public
   */
  MaxBasePoint?: number | undefined;

  /**
   * <p>The performance category for the evaluation score.</p>
   * @public
   */
  PerformanceCategory?: PerformanceCategoryName | undefined;
}

/**
 * <p>Summary of evaluation obtained from the search operation.</p>
 * @public
 */
export interface EvaluationSearchSummary {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId?: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>Title of the evaluation form.</p>
   * @public
   */
  EvaluationFormTitle?: string | undefined;

  /**
   * <p>Summary information about the evaluation search.</p>
   * @public
   */
  Metadata: EvaluationSearchMetadata | undefined;

  /**
   * <p>The status of the evaluation. </p>
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * <p>Type of the evaluation. </p>
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>The date and time when the evaluation was created, in UTC time.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The date and time when the evaluation was modified last time, in UTC time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchContactEvaluationsResponse {
  /**
   * <p>Contains information about contact evaluations.</p>
   * @public
   */
  EvaluationSearchSummaryList?: EvaluationSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of contact evaluations that matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
 *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
 *             </li>
 *             <li>
 *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ControlPlaneTagFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
   * @public
   */
  OrConditions?: TagCondition[][] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
   * @public
   */
  AndConditions?: TagCondition[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * <p>The search criteria to be used to return flow modules.</p>
 * @public
 */
export interface ContactFlowModuleSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowModulesResponse {
  /**
   * <p>The search criteria to be used to return flow modules.</p>
   * @public
   */
  ContactFlowModules?: ContactFlowModule[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of flows which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p> The contact flow type condition.</p>
 * @public
 */
export interface ContactFlowTypeCondition {
  /**
   * <p> Contact flow type of the contact flow type condition.</p>
   * @public
   */
  ContactFlowType?: ContactFlowType | undefined;
}

/**
 * <p> A list of conditions which would be applied together with an AND condition.</p>
 * @public
 */
export interface ContactFlowAttributeAndCondition {
  /**
   * <p> Tag-based conditions for contact flow filtering.</p>
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * <p> Contact flow type condition.</p>
   * @public
   */
  ContactFlowTypeCondition?: ContactFlowTypeCondition | undefined;
}

/**
 * <p> Filter for contact flow attributes with multiple condition types.</p>
 * @public
 */
export interface ContactFlowAttributeFilter {
  /**
   * <p> A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: ContactFlowAttributeAndCondition[] | undefined;

  /**
   * <p> A list of conditions which would be applied together with a AND condition.</p>
   * @public
   */
  AndCondition?: ContactFlowAttributeAndCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.
   *   </p>
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * <p> Contact flow type condition within attribute filter.</p>
   * @public
   */
  ContactFlowTypeCondition?: ContactFlowTypeCondition | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface ContactFlowSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;

  /**
   * <p> Flow attribute filter for contact flow search operations. </p>
   * @public
   */
  FlowAttributeFilter?: ContactFlowAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ContactFlows?: ContactFlow[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of flows which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>A structure of time range that you want to search results.</p>
 * @public
 */
export interface SearchContactsTimeRange {
  /**
   * <p>The type of timestamp to search.</p>
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * <p>The start time of the time range.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the time range.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * <p>The timestamp condition indicating which contact timestamp should be used and how it should be filtered. It is
 *    not an actual timestamp value. </p>
 * @public
 */
export interface SearchContactsTimestampCondition {
  /**
   * <p>Type of the timestamps to use for the filter.</p>
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * <p>Condition of the timestamp on the contact.</p>
   * @public
   */
  ConditionType: SearchContactsTimeRangeConditionType | undefined;
}

/**
 * <p>The criteria of the time range to additionally filter on.</p>
 * @public
 */
export interface SearchContactsAdditionalTimeRangeCriteria {
  /**
   * <p>A structure of time range that you want to search results.</p>
   * @public
   */
  TimeRange?: SearchContactsTimeRange | undefined;

  /**
   * <p>List of the timestamp conditions.</p>
   * @public
   */
  TimestampCondition?: SearchContactsTimestampCondition | undefined;
}

/**
 * <p>Time range that you <b>additionally</b> want to filter on.</p>
 *          <note>
 *             <p>This is different from the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchContactsTimeRange.html">SearchContactsTimeRange</a> data
 *     type.</p>
 *          </note>
 * @public
 */
export interface SearchContactsAdditionalTimeRange {
  /**
   * <p>List of criteria of the time range to additionally filter on.</p>
   * @public
   */
  Criteria: SearchContactsAdditionalTimeRangeCriteria[] | undefined;

  /**
   * <p>The match type combining multiple time range filters.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria base on words or phrases, participants in the Contact Lens
 *    conversational analytics transcript.</p>
 * @public
 */
export interface TranscriptCriteria {
  /**
   * <p>The participant role in a transcript</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The words or phrases used to search within a transcript.</p>
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple search texts in a transcript criteria.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria and matching logic to search for contacts by matching text with
 *    transcripts analyzed by Connect Customer Contact Lens.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>The list of search criteria based on Contact Lens conversational analytics transcript.</p>
   * @public
   */
  Criteria: TranscriptCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple transcript criteria.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria for contacts using analysis outputs from Connect Customer Contact
 *    Lens.</p>
 * @public
 */
export interface ContactAnalysis {
  /**
   * <p>Search criteria based on transcript analyzed by Connect Customer Contact Lens.</p>
   * @public
   */
  Transcript?: Transcript | undefined;
}

/**
 * <p>The search criteria based on the contact name</p>
 * @public
 */
export interface NameCriteria {
  /**
   * <p>The words or phrases used to match the contact name.</p>
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * <p>The match type combining name search criteria using multiple search texts in a name criteria.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>The agent criteria to search for preferred agents on the routing criteria.</p>
 * @public
 */
export interface SearchableAgentCriteriaStep {
  /**
   * <p>The identifiers of agents used in preferred agents matching.</p>
   * @public
   */
  AgentIds?: string[] | undefined;

  /**
   * <p>The match type combining multiple agent criteria steps.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>Routing criteria of the contact to match on.</p>
 * @public
 */
export interface SearchableRoutingCriteriaStep {
  /**
   * <p>Agent matching the routing step of the routing criteria</p>
   * @public
   */
  AgentCriteria?: SearchableAgentCriteriaStep | undefined;
}

/**
 * <p>Routing criteria of the contact to match on.</p>
 * @public
 */
export interface SearchableRoutingCriteria {
  /**
   * <p>The list of Routing criteria steps of the contact routing.</p>
   * @public
   */
  Steps?: SearchableRoutingCriteriaStep[] | undefined;
}

/**
 * <p>The search criteria based on user-defined contact attribute key and values to search on.</p>
 * @public
 */
export interface SearchableContactAttributesCriteria {
  /**
   * <p>The key containing a searchable user-defined contact attribute.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The list of values to search for within a user-defined contact attribute.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A structure that defines search criteria based on user-defined contact attributes that are configured for
 *    contact search.</p>
 * @public
 */
export interface SearchableContactAttributes {
  /**
   * <p>The list of criteria based on user-defined contact attributes that are configured for contact search.</p>
   * @public
   */
  Criteria: SearchableContactAttributesCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple searchable contact attributes.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>The search criteria based on searchable segment attribute key and values to search on.</p>
 * @public
 */
export interface SearchableSegmentAttributesCriteria {
  /**
   * <p>The key containing a searchable segment attribute.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The list of values to search for within a searchable segment attribute.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>The search criteria based on searchable segment attributes of a contact</p>
 * @public
 */
export interface SearchableSegmentAttributes {
  /**
   * <p>The list of criteria based on searchable segment attributes.</p>
   * @public
   */
  Criteria: SearchableSegmentAttributesCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple searchable segment attributes.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure of search criteria to be used to return contacts.</p>
 * @public
 */
export interface SearchCriteria {
  /**
   * <p>Name of the contact.</p>
   * @public
   */
  Name?: NameCriteria | undefined;

  /**
   * <p>The identifiers of agents who handled the contacts.</p>
   * @public
   */
  AgentIds?: string[] | undefined;

  /**
   * <p>The agent hierarchy groups of the agent at the time of handling the contact.</p>
   * @public
   */
  AgentHierarchyGroups?: AgentHierarchyGroups | undefined;

  /**
   * <p>The list of channels associated with contacts.</p>
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * <p>Search criteria based on analysis outputs from Connect Customer Contact Lens.</p>
   * @public
   */
  ContactAnalysis?: ContactAnalysis | undefined;

  /**
   * <p>The list of initiation methods associated with contacts.</p>
   * @public
   */
  InitiationMethods?: ContactInitiationMethod[] | undefined;

  /**
   * <p>The list of queue IDs associated with contacts.</p>
   * @public
   */
  QueueIds?: string[] | undefined;

  /**
   * <p>Routing criteria for the contact.</p>
   * @public
   */
  RoutingCriteria?: SearchableRoutingCriteria | undefined;

  /**
   * <p>Additional TimeRange used to filter contacts.</p>
   * @public
   */
  AdditionalTimeRange?: SearchContactsAdditionalTimeRange | undefined;

  /**
   * <p>The search criteria based on user-defined contact attributes that have been configured for contact search. For
   *    more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/search-custom-attributes.html">Search by custom contact attributes</a> in the <i>Connect Customer Administrator
   *    Guide</i>.</p>
   *          <important>
   *             <p>To use <code>SearchableContactAttributes</code> in a search request, the <code>GetContactAttributes</code>
   *     action is required to perform an API request. For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions">https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions</a>Actions
   *     defined by Connect Customer.</p>
   *          </important>
   * @public
   */
  SearchableContactAttributes?: SearchableContactAttributes | undefined;

  /**
   * <p>The search criteria based on searchable segment attributes of a contact.</p>
   * @public
   */
  SearchableSegmentAttributes?: SearchableSegmentAttributes | undefined;

  /**
   * <p>The list of active regions for contacts in ACGR instances.</p>
   * @public
   */
  ActiveRegions?: string[] | undefined;

  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>Top level list specifies conditions that need to be applied with <code>OR</code> operator</p>
   *             </li>
   *             <li>
   *                <p>Inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ContactTags?: ControlPlaneTagFilter | undefined;

  /**
   * <p>AI Agent search criteria definitions.</p>
   * @public
   */
  AiAgents?: AiAgentsCriteria | undefined;
}

/**
 * <p>A structure that defines the field name to sort by and a sort order.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>The name of the field on which to sort.</p>
   * @public
   */
  FieldName: SortableFieldName | undefined;

  /**
   * <p>An ascending or descending sort.</p>
   * @public
   */
  Order: SortOrder | undefined;
}
