// smithy-typescript generated code
import type {
  ActionsSuppressedBy,
  AlarmMuteRuleStatus,
  AlarmType,
  AnomalyDetectorAdaptationSpeed,
  AnomalyDetectorOutlierFilteringStrength,
  AnomalyDetectorStateValue,
  AnomalyDetectorType,
  ComparisonOperator,
  EvaluationState,
  HistoryItemType,
  MetricStreamOutputFormat,
  OTelEnrichmentStatus,
  RecentlyActive,
  ScanBy,
  StandardUnit,
  StateValue,
  Statistic,
  StatusCode,
} from "./enums";

/**
 * Includes the alarm's tags in the notifications that the alarm sends to Amazon SNS topics and Lambda functions. The tags are also included in the alarm's state-change events in Amazon EventBridge. Other types of alarm actions don't receive the tags.
 *
 * By default, the alarm's tags aren't included.
 *
 * Use this to route or filter notifications and events by tag, such as by team or environment. You can also use it to read the alarm's tags without looking them up separately.
 *
 * To limit which tags are included, specify either `IncludedTagKeys` or `ExcludedTagKeys`. You can't specify both. If you specify neither, all of the alarm's tags are included. This includes tags that you add to the alarm later.
 *
 * @public
 */
export interface AlarmTagsPropagation {
  /**
   * Set to `true` to include the alarm's tags. Set to `false` to stop including them.
   *
   * When this is `true`, you must have the `cloudwatch:ListTagsForResource` permission on the alarm to create or update it.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The tag keys to include. Only the alarm's tags with these keys are included.
   *
   * You can specify 1 to 50 tag keys. Each tag key must be 1 to 128 characters long.
   *
   * You can't specify both `IncludedTagKeys` and `ExcludedTagKeys`.
   *
   * @public
   */
  IncludedTagKeys?: string[] | undefined;

  /**
   * The tag keys to exclude. All of the alarm's tags except those with these keys are included.
   *
   * You can specify 1 to 50 tag keys. Each tag key must be 1 to 128 characters long.
   *
   * You can't specify both `IncludedTagKeys` and `ExcludedTagKeys`.
   *
   * @public
   */
  ExcludedTagKeys?: string[] | undefined;
}

/**
 * Settings that change the content of the notifications and events that an alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
 *
 * @public
 */
export interface ActionConfiguration {
  /**
   * Settings for including the alarm's tags in its action notifications and state-change events.
   *
   * @public
   */
  AlarmTagsPropagation?: AlarmTagsPropagation | undefined;
}

/**
 * Represents an individual contributor to a multi-timeseries alarm, containing information about a specific time series and its contribution to the alarm's state.
 *
 * @public
 */
export interface AlarmContributor {
  /**
   * The unique identifier for this alarm contributor.
   *
   * @public
   */
  ContributorId: string | undefined;

  /**
   * A map of attributes that describe the contributor, such as metric dimensions and other identifying characteristics.
   *
   * @public
   */
  ContributorAttributes: Record<string, string> | undefined;

  /**
   * An explanation for the contributor's current state, providing context about why it is in its current condition.
   *
   * @public
   */
  StateReason: string | undefined;

  /**
   * The timestamp when the contributor last transitioned to its current state.
   *
   * @public
   */
  StateTransitionedTimestamp?: Date | undefined;
}

/**
 * Represents the history of a specific alarm.
 *
 * @public
 */
export interface AlarmHistoryItem {
  /**
   * The descriptive name for the alarm.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The unique identifier of the alarm contributor associated with this history item, if applicable.
   *
   * @public
   */
  AlarmContributorId?: string | undefined;

  /**
   * The type of alarm, either metric alarm or composite alarm.
   *
   * @public
   */
  AlarmType?: AlarmType | undefined;

  /**
   * The time stamp for the alarm history item.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The type of alarm history item.
   *
   * @public
   */
  HistoryItemType?: HistoryItemType | undefined;

  /**
   * A summary of the alarm history, in text format.
   *
   * @public
   */
  HistorySummary?: string | undefined;

  /**
   * Data about the alarm, in JSON format.
   *
   * @public
   */
  HistoryData?: string | undefined;

  /**
   * A map of attributes that describe the alarm contributor associated with this history item, providing context about the contributor's characteristics at the time of the event.
   *
   * @public
   */
  AlarmContributorAttributes?: Record<string, string> | undefined;
}

/**
 * Summary information about an alarm mute rule, including its name, status, and configuration details.
 *
 * @public
 */
export interface AlarmMuteRuleSummary {
  /**
   * The Amazon Resource Name (ARN) of the alarm mute rule.
   *
   * @public
   */
  AlarmMuteRuleArn?: string | undefined;

  /**
   * The date and time when the mute rule expires and is no longer evaluated. This field is only present if an expiration date was configured.
   *
   * @public
   */
  ExpireDate?: Date | undefined;

  /**
   * The current status of the alarm mute rule. Valid values are `SCHEDULED`, `ACTIVE`, or `EXPIRED`.
   *
   * @public
   */
  Status?: AlarmMuteRuleStatus | undefined;

  /**
   * Indicates whether the mute rule is one-time or recurring. Valid values are `ONE_TIME` or `RECURRING`.
   *
   * @public
   */
  MuteType?: string | undefined;

  /**
   * The date and time when the mute rule was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * Contains the configuration that determines how a PromQL alarm evaluates its contributors, including the query to run and the durations that define when contributors transition between states.
 *
 * @public
 */
export interface AlarmPromQLCriteria {
  /**
   * The PromQL query that the alarm evaluates. The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.
   *
   * @public
   */
  Query: string | undefined;

  /**
   * The duration, in seconds, that a contributor must be continuously breaching before it transitions to the `ALARM` state.
   *
   * @public
   */
  PendingPeriod?: number | undefined;

  /**
   * The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the `OK` state.
   *
   * @public
   */
  RecoveryPeriod?: number | undefined;
}

/**
 * Specifies one range of days or times to exclude from use for training an anomaly detection model.
 *
 * @public
 */
export interface Range {
  /**
   * The start time of the range to exclude. The format is `yyyy-MM-dd'T'HH:mm:ss`. For example, `2019-07-01T23:59:59`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the range to exclude. The format is `yyyy-MM-dd'T'HH:mm:ss`. For example, `2019-07-01T23:59:59`.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
 *
 * @public
 */
export interface AnomalyDetectorConfiguration {
  /**
   * An array of time ranges to exclude from use when the anomaly detection model is trained. Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates the model.
   *
   * @public
   */
  ExcludedTimeRanges?: Range[] | undefined;

  /**
   * The time zone to use for the metric. This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes.
   *
   * To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see [tz database](https://en.wikipedia.org/wiki/Tz_database).
   *
   * @public
   */
  MetricTimezone?: string | undefined;

  /**
   * The speed at which the anomaly detection model adapts to sustained changes in the metric's baseline. Faster adaptation lets the model track shifting workloads sooner, but increases the chance that the model treats a real, lasting change as normal.
   *
   * Valid values:
   *
   * - `FAST` - The model adapts quickly to sustained changes in the baseline.
   * - `NORMAL` - The model adapts at a moderate pace. This is the default value.
   * - `SLOW` - The model adapts slowly, reducing the risk of treating a real change as normal.
   *
   * @public
   */
  AdaptationSpeed?: AnomalyDetectorAdaptationSpeed | undefined;

  /**
   * The aggressiveness with which CloudWatch filters outliers from the metric data that the anomaly detection model uses. Stronger filtering excludes more extreme values, which can produce a tighter band of expected values but may also suppress legitimate spikes.
   *
   * Valid values:
   *
   * - `MINIMAL` - Excludes only the most extreme outliers.
   * - `MODERATE` - Excludes a moderate range of outliers. This is the default value.
   * - `STRICT` - Excludes a wider range of outliers, which can suppress legitimate spikes.
   *
   * @public
   */
  OutlierFilteringStrength?: AnomalyDetectorOutlierFilteringStrength | undefined;
}

/**
 * A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish `InstanceId` as a dimension name, and the actual instance ID as the value for that dimension.
 *
 * You can assign up to 30 dimensions to a metric.
 *
 * @public
 */
export interface Dimension {
  /**
   * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (`:`). ASCII control characters are not supported as part of dimension names.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * This object includes parameters that you can use to provide information to CloudWatch to help it build more accurate anomaly detection models.
 *
 * @public
 */
export interface MetricCharacteristics {
  /**
   * Set this parameter to `true` if values for this metric consistently include spikes that should not be considered to be anomalies. With this set to `true`, CloudWatch will expect to see spikes that occurred consistently during the model training period, and won't flag future similar spikes as anomalies.
   *
   * @public
   */
  PeriodicSpikes?: boolean | undefined;
}

/**
 * Represents a specific metric.
 *
 * @public
 */
export interface Metric {
  /**
   * The namespace of the metric.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the metric. This is a required field.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The dimensions for the metric.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;
}

/**
 * This structure defines the metric to be returned, along with the statistics, period, and units.
 *
 * @public
 */
export interface MetricStat {
  /**
   * The metric to return, including the metric name, namespace, and dimensions.
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
   *
   * If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
   *
   * - Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
   * - Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
   * - Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
   *
   * @public
   */
  Period: number | undefined;

  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic.
   *
   * @public
   */
  Stat: string | undefined;

  /**
   * When you are using a `Put` operation, this defines what unit you want to use when storing the metric.
   *
   * In a `Get` operation, if you omit `Unit` then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;
}

/**
 * This structure is used in both `GetMetricData` and `PutMetricAlarm`. The supported use of this structure is different for those two operations.
 *
 * When used in `GetMetricData`, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single `GetMetricData` call can include up to 500 `MetricDataQuery` structures.
 *
 * When used in `PutMetricAlarm`, it enables you to create an alarm based on a metric math expression. Each `MetricDataQuery` in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single `PutMetricAlarm` call can include up to 20 `MetricDataQuery` structures in the array. The 20 structures can include as many as 10 structures that contain a `MetricStat` parameter to retrieve a metric, and as many as 10 structures that contain the `Expression` parameter to perform a math expression. Of those `Expression` structures, one must have `true` as the value for `ReturnData`. The result of this expression is the value the alarm watches.
 *
 * Any expression used in a `PutMetricAlarm` operation must return a single time series. For more information, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide*.
 *
 * Some of the parameters of this structure also have different uses whether you are using this structure in a `GetMetricData` operation or a `PutMetricAlarm` operation. These differences are explained in the following parameter list.
 *
 * @public
 */
export interface MetricDataQuery {
  /**
   * A short name used to tie this object to the results in the response. This name must be unique within a single call to `GetMetricData`. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
   *
   * Within one MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.
   *
   * @public
   */
  MetricStat?: MetricStat | undefined;

  /**
   * This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data. For more information about Metrics Insights queries, see [Metrics Insights query components and syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage) in the *Amazon CloudWatch User Guide*.
   *
   * A math expression can use the `Id` of the other metrics or queries to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide*.
   *
   * Within each MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.
   *
   * You can put dynamic expressions into a label, so that it is more descriptive. For more information, see [Using Dynamic Labels](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html).
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * When used in `GetMetricData`, this option indicates whether to return the timestamps and raw data values of this metric. If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify `false`. If you omit this, the default of `true` is used.
   *
   * When used in `PutMetricAlarm`, specify `true` for the one expression result to use as the alarm. For all other metrics and expressions in the same `PutMetricAlarm` operation, specify `ReturnData` as False.
   *
   * @public
   */
  ReturnData?: boolean | undefined;

  /**
   * The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` operation that includes a `StorageResolution of 1 second`.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The ID of the account where the metrics are located.
   *
   * If you are performing a `GetMetricData` operation in a monitoring account, use this to specify which account to retrieve this metric from.
   *
   * If you are performing a `PutMetricAlarm` operation, use this to specify which account contains the metric that the alarm is watching.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.
 *
 * @public
 */
export interface MetricMathAnomalyDetector {
  /**
   * An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression. Each item in `MetricDataQueries` gets a metric or performs a math expression. One item in `MetricDataQueries` is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting `ReturnData` to `true` for this object in the array. For all other expressions and metrics, set `ReturnData` to `false`. The designated expression must return a single time series.
   *
   * @public
   */
  MetricDataQueries?: MetricDataQuery[] | undefined;
}

/**
 * Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input. If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account.
 *
 * @public
 */
export interface SingleMetricAnomalyDetector {
  /**
   * If the CloudWatch metric that provides the time series that the anomaly detector uses as input is in another account, specify that account ID here. If you omit this parameter, the current account is used.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The namespace of the metric to create the anomaly detection model for.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the metric to create the anomaly detection model for.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The metric dimensions to create the anomaly detection model for.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The statistic to use for the metric and anomaly detection model.
   *
   * @public
   */
  Stat?: string | undefined;
}

/**
 * An anomaly detection model associated with a particular CloudWatch metric, statistic, or metric math expression. You can use the model to display a band of expected, normal values when the metric is graphed.
 *
 * If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account.
 *
 * @public
 */
export interface AnomalyDetector {
  /**
   * The unique identifier of the anomaly detector.
   *
   * > **Note:** The identifier does not restrict access to a specific anomaly detector in an IAM policy. Permissions for anomaly detector operations apply to all anomaly detectors in the account.
   *
   * @public
   */
  AnomalyDetectorId?: string | undefined;

  /**
   * The namespace of the metric associated with the anomaly detection model.
   *
   * @deprecated Use SingleMetricAnomalyDetector.Namespace property.
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the metric associated with the anomaly detection model.
   *
   * @deprecated Use SingleMetricAnomalyDetector.MetricName property.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The metric dimensions associated with the anomaly detection model.
   *
   * @deprecated Use SingleMetricAnomalyDetector.Dimensions property.
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The statistic associated with the anomaly detection model.
   *
   * @deprecated Use SingleMetricAnomalyDetector.Stat property.
   * @public
   */
  Stat?: string | undefined;

  /**
   * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model, and the time zone to use for the metric.
   *
   * @public
   */
  Configuration?: AnomalyDetectorConfiguration | undefined;

  /**
   * The current status of the anomaly detector's training.
   *
   * @public
   */
  StateValue?: AnomalyDetectorStateValue | undefined;

  /**
   * This object includes parameters that you can use to provide information about your metric to CloudWatch to help it build more accurate anomaly detection models. Currently, it includes the `PeriodicSpikes` parameter.
   *
   * @public
   */
  MetricCharacteristics?: MetricCharacteristics | undefined;

  /**
   * The CloudWatch metric and statistic for this anomaly detector.
   *
   * @public
   */
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector | undefined;

  /**
   * The CloudWatch metric math expression for this anomaly detector.
   *
   * @public
   */
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector | undefined;
}

/**
 * @public
 */
export interface AssociateDatasetKmsKeyInput {
  /**
   * Specifies the identifier of the dataset that you want to associate the KMS key with. For the `default` dataset, you can specify either `default` or the full dataset Amazon Resource Name (ARN) in the format `arn:aws:cloudwatch:Region:account-id:dataset/default`.
   *
   * @public
   */
  DatasetIdentifier: string | undefined;

  /**
   * Specifies the Amazon Resource Name (ARN) of the customer managed KMS key to associate with the dataset. The key must be a symmetric encryption KMS key (`SYMMETRIC_DEFAULT`) in the same Amazon Web Services Region as the dataset.
   *
   * The ARN must be in the format `arn:aws:kms:Region:account-id:key/key-id`. Key IDs, aliases, and alias ARNs are not accepted.
   *
   * For more information about KMS key ARNs, see [Key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDatasetKmsKeyOutput {}

/**
 * This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.
 *
 * @public
 */
export interface PartialFailure {
  /**
   * The specified rule that could not be deleted.
   *
   * @public
   */
  FailureResource?: string | undefined;

  /**
   * The type of error.
   *
   * @public
   */
  ExceptionType?: string | undefined;

  /**
   * The code of the error.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * A description of the error.
   *
   * @public
   */
  FailureDescription?: string | undefined;
}

/**
 * The details about a composite alarm.
 *
 * @public
 */
export interface CompositeAlarm {
  /**
   * Indicates whether actions should be executed during any changes to the alarm state.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm.
   *
   * @public
   */
  AlarmArn?: string | undefined;

  /**
   * The time stamp of the last update to the alarm configuration.
   *
   * @public
   */
  AlarmConfigurationUpdatedTimestamp?: Date | undefined;

  /**
   * The description of the alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The rule that this alarm uses to evaluate its alarm state.
   *
   * @public
   */
  AlarmRule?: string | undefined;

  /**
   * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  OKActions?: string[] | undefined;

  /**
   * An explanation for the alarm state, in text format.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * An explanation for the alarm state, in JSON format.
   *
   * @public
   */
  StateReasonData?: string | undefined;

  /**
   * Tracks the timestamp of any state update, even if `StateValue` doesn't change.
   *
   * @public
   */
  StateUpdatedTimestamp?: Date | undefined;

  /**
   * The state value for the alarm.
   *
   * @public
   */
  StateValue?: StateValue | undefined;

  /**
   * The timestamp of the last change to the alarm's `StateValue`.
   *
   * @public
   */
  StateTransitionedTimestamp?: Date | undefined;

  /**
   * When the value is `ALARM`, it means that the actions are suppressed because the suppressor alarm is in `ALARM` When the value is `WaitPeriod`, it means that the actions are suppressed because the composite alarm is waiting for the suppressor alarm to go into into the `ALARM` state. The maximum waiting time is as specified in `ActionsSuppressorWaitPeriod`. After this time, the composite alarm performs its actions. When the value is `ExtensionPeriod`, it means that the actions are suppressed because the composite alarm is waiting after the suppressor alarm went out of the `ALARM` state. The maximum waiting time is as specified in `ActionsSuppressorExtensionPeriod`. After this time, the composite alarm performs its actions.
   *
   * @public
   */
  ActionsSuppressedBy?: ActionsSuppressedBy | undefined;

  /**
   * Captures the reason for action suppression.
   *
   * @public
   */
  ActionsSuppressedReason?: string | undefined;

  /**
   * Actions will be suppressed if the suppressor alarm is in the `ALARM` state. `ActionsSuppressor` can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
   *
   * @public
   */
  ActionsSuppressor?: string | undefined;

  /**
   * The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state. After this time, the composite alarm performs its actions.
   *
   * > **Important:** `WaitPeriod` is required only when `ActionsSuppressor` is specified.
   *
   * @public
   */
  ActionsSuppressorWaitPeriod?: number | undefined;

  /**
   * The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state. After this time, the composite alarm performs its actions.
   *
   * > **Important:** `ExtensionPeriod` is required only when `ActionsSuppressor` is specified.
   *
   * @public
   */
  ActionsSuppressorExtensionPeriod?: number | undefined;

  /**
   * Settings that change the content of the notifications and events that the alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
   *
   * @public
   */
  ActionConfiguration?: ActionConfiguration | undefined;
}

/**
 * Specifies which metrics Amazon CloudWatch collects for a resource metrics configuration. Include this in a [CreateResourceMetricsConfiguration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_CreateResourceMetricsConfiguration.html) or [UpdateResourceMetricsConfiguration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UpdateResourceMetricsConfiguration.html) request to limit collection to a specific set of metrics. If you omit metric selections, Amazon CloudWatch collects all available detailed metrics for the resource.
 *
 * @public
 */
export interface ResourceMetricSelection {
  /**
   * The names of the metrics to collect for the resource. Amazon CloudWatch collects only the metrics that you list here.
   *
   * @public
   */
  IncludeMetrics: string[] | undefined;
}

/**
 * Specifies the resource ARN and optional metric selections for a `CreateResourceMetricsConfiguration` request.
 *
 * @public
 */
export interface CreateResourceMetricsConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource to enable detailed monitoring for.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies which metrics Amazon CloudWatch collects for the resource. If you omit this parameter, Amazon CloudWatch collects all available detailed metrics for the resource.
   *
   * @public
   */
  MetricSelections?: ResourceMetricSelection[] | undefined;
}

/**
 * Represents a resource metrics configuration for an Amazon Web Services resource. A resource metrics configuration enables detailed metric collection for the resource that is identified by its Amazon Resource Name (ARN). Each Amazon Web Services resource can have only one resource metrics configuration.
 *
 * This structure is returned by the [CreateResourceMetricsConfiguration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_CreateResourceMetricsConfiguration.html), [UpdateResourceMetricsConfiguration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UpdateResourceMetricsConfiguration.html), and [GetResourceMetricsConfiguration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetResourceMetricsConfiguration.html) operations.
 *
 * @public
 */
export interface ResourceMetricsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource that this configuration applies to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The date and time that the resource metrics configuration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the resource metrics configuration was last updated. When the configuration is first created, this value is the same as `CreatedAt`.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The metrics that Amazon CloudWatch collects for the resource. If this field is not present, Amazon CloudWatch collects all available detailed metrics for the resource.
   *
   * @public
   */
  MetricSelections?: ResourceMetricSelection[] | undefined;
}

/**
 * Returns the newly created resource metrics configuration.
 *
 * @public
 */
export interface CreateResourceMetricsConfigurationOutput {
  /**
   * The resource metrics configuration that was created by this operation.
   *
   * @public
   */
  ResourceMetricsConfiguration: ResourceMetricsConfiguration | undefined;
}

/**
 * Represents a specific dashboard.
 *
 * @public
 */
export interface DashboardEntry {
  /**
   * The name of the dashboard.
   *
   * @public
   */
  DashboardName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The time stamp of when the dashboard was last modified, either by an API call or through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The size of the dashboard, in bytes.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * An error or warning for the operation.
 *
 * @public
 */
export interface DashboardValidationMessage {
  /**
   * The data path related to the message.
   *
   * @public
   */
  DataPath?: string | undefined;

  /**
   * A message describing the error or warning.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Encapsulates the statistical data that CloudWatch computes from metric data.
 *
 * @public
 */
export interface Datapoint {
  /**
   * The time stamp used for the data point.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The number of metric values that contributed to the aggregate value of this data point.
   *
   * @public
   */
  SampleCount?: number | undefined;

  /**
   * The average of the metric values that correspond to the data point.
   *
   * @public
   */
  Average?: number | undefined;

  /**
   * The sum of the metric values for the data point.
   *
   * @public
   */
  Sum?: number | undefined;

  /**
   * The minimum metric value for the data point.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * The maximum metric value for the data point.
   *
   * @public
   */
  Maximum?: number | undefined;

  /**
   * The standard unit for the data point.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;

  /**
   * The percentile statistic for the data point.
   *
   * @public
   */
  ExtendedStatistics?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmMuteRuleInput {
  /**
   * The name of the alarm mute rule to delete.
   *
   * @public
   */
  AlarmMuteRuleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlarmsInput {
  /**
   * The alarms to be deleted. Do not enclose the alarm names in quote marks.
   *
   * @public
   */
  AlarmNames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorInput {
  /**
   * Specifies the unique identifier of the anomaly detector to delete. If you specify this parameter, you do not need to specify a metric to identify the detector.
   *
   * @public
   */
  AnomalyDetectorId?: string | undefined;

  /**
   * The namespace associated with the anomaly detection model to delete.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The metric name associated with the anomaly detection model to delete.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The metric dimensions associated with the anomaly detection model to delete.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The statistic associated with the anomaly detection model to delete.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  Stat?: string | undefined;

  /**
   * A single metric anomaly detector to be deleted.
   *
   * When using `SingleMetricAnomalyDetector`, you cannot include the following parameters in the same operation:
   *
   * - `Dimensions`,
   * - `MetricName`
   * - `Namespace`
   * - `Stat`
   * - the `MetricMathAnomalyDetector` parameters of `DeleteAnomalyDetectorInput`
   *
   * Instead, specify the single metric anomaly detector attributes as part of the `SingleMetricAnomalyDetector` property.
   *
   * @public
   */
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector | undefined;

  /**
   * The metric math anomaly detector to be deleted.
   *
   * When using `MetricMathAnomalyDetector`, you cannot include following parameters in the same operation:
   *
   * - `Dimensions`,
   * - `MetricName`
   * - `Namespace`
   * - `Stat`
   * - the `SingleMetricAnomalyDetector` parameters of `DeleteAnomalyDetectorInput`
   *
   * Instead, specify the metric math anomaly detector attributes as part of the `MetricMathAnomalyDetector` property.
   *
   * @public
   */
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorOutput {}

/**
 * @public
 */
export interface DeleteDashboardsInput {
  /**
   * The dashboards to be deleted. This parameter is required.
   *
   * @public
   */
  DashboardNames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardsOutput {}

/**
 * @public
 */
export interface DeleteInsightRulesInput {
  /**
   * An array of the rule names to delete. If you need to find out the names of your rules, use [DescribeInsightRules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html).
   *
   * @public
   */
  RuleNames: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInsightRulesOutput {
  /**
   * An array listing the rules that could not be deleted. You cannot delete built-in rules.
   *
   * @public
   */
  Failures?: PartialFailure[] | undefined;
}

/**
 * @public
 */
export interface DeleteMetricStreamInput {
  /**
   * The name of the metric stream to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricStreamOutput {}

/**
 * Specifies the resource ARN for a `DeleteResourceMetricsConfiguration` request.
 *
 * @public
 */
export interface DeleteResourceMetricsConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource to delete the resource metrics configuration for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * No data is returned.
 *
 * @public
 */
export interface DeleteResourceMetricsConfigurationOutput {}

/**
 * @public
 */
export interface DescribeAlarmContributorsInput {
  /**
   * The name of the alarm for which to retrieve contributor information.
   *
   * @public
   */
  AlarmName: string | undefined;

  /**
   * The token returned by a previous call to indicate that there is more data available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmContributorsOutput {
  /**
   * A list of alarm contributors that provide details about the individual time series contributing to the alarm's state.
   *
   * @public
   */
  AlarmContributors: AlarmContributor[] | undefined;

  /**
   * The token that marks the start of the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmHistoryInput {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The unique identifier of a specific alarm contributor to filter the alarm history results.
   *
   * @public
   */
  AlarmContributorId?: string | undefined;

  /**
   * Use this parameter to specify whether you want the operation to return metric alarms, composite alarms, or log alarms. If you omit this parameter, only metric alarms are returned.
   *
   * @public
   */
  AlarmTypes?: AlarmType[] | undefined;

  /**
   * The type of alarm histories to retrieve.
   *
   * @public
   */
  HistoryItemType?: HistoryItemType | undefined;

  /**
   * The starting date to retrieve alarm history.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The ending date to retrieve alarm history.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The maximum number of alarm history records to retrieve.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The token returned by a previous call to indicate that there is more data available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specified whether to return the newest or oldest alarm history first. Specify `TimestampDescending` to have the newest event history returned first, and specify `TimestampAscending` to have the oldest history returned first.
   *
   * @public
   */
  ScanBy?: ScanBy | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmHistoryOutput {
  /**
   * The alarm histories, in JSON format.
   *
   * @public
   */
  AlarmHistoryItems?: AlarmHistoryItem[] | undefined;

  /**
   * The token that marks the start of the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmsInput {
  /**
   * The names of the alarms to retrieve information about.
   *
   * @public
   */
  AlarmNames?: string[] | undefined;

  /**
   * An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix.
   *
   * If this parameter is specified, you cannot specify `AlarmNames`.
   *
   * @public
   */
  AlarmNamePrefix?: string | undefined;

  /**
   * Use this parameter to specify whether you want the operation to return metric alarms, composite alarms, or log alarms. If you omit this parameter, only metric alarms are returned, even if composite alarms or log alarms exist in the account.
   *
   * For example, if you omit this parameter or specify `MetricAlarms`, the operation returns only a list of metric alarms. It does not return any composite alarms or log alarms, even if they exist in the account.
   *
   * If you specify `CompositeAlarms`, the operation returns only a list of composite alarms, and does not return any metric alarms or log alarms.
   *
   * If you specify `LogAlarms`, the operation returns only a list of log alarms, and does not return any metric alarms or composite alarms.
   *
   * @public
   */
  AlarmTypes?: AlarmType[] | undefined;

  /**
   * If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the `AlarmRule` field of the composite alarm that you specify in `ChildrenOfAlarmName`. Information about the composite alarm that you name in `ChildrenOfAlarmName` is not returned.
   *
   * If you specify `ChildrenOfAlarmName`, you cannot specify any other parameters in the request except for `MaxRecords` and `NextToken`. If you do so, you receive a validation error.
   *
   * > **Note:** Only the `Alarm Name`, `ARN`, `StateValue` (OK/ALARM/INSUFFICIENT_DATA), and `StateUpdatedTimestamp` information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another `DescribeAlarms` operation and specify the parent alarm names in the `AlarmNames` parameter.
   *
   * @public
   */
  ChildrenOfAlarmName?: string | undefined;

  /**
   * If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have `AlarmRule` parameters that reference the alarm named in `ParentsOfAlarmName`. Information about the alarm that you specify in `ParentsOfAlarmName` is not returned.
   *
   * If you specify `ParentsOfAlarmName`, you cannot specify any other parameters in the request except for `MaxRecords` and `NextToken`. If you do so, you receive a validation error.
   *
   * > **Note:** Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another `DescribeAlarms` operation and specify the parent alarm names in the `AlarmNames` parameter.
   *
   * @public
   */
  ParentsOfAlarmName?: string | undefined;

  /**
   * Specify this parameter to receive information only about alarms that are currently in the state that you specify.
   *
   * @public
   */
  StateValue?: StateValue | undefined;

  /**
   * Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic.
   *
   * @public
   */
  ActionPrefix?: string | undefined;

  /**
   * The maximum number of alarm descriptions to retrieve.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The token returned by a previous call to indicate that there is more data available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the schedule expression and time-range offsets that define when a scheduled query runs and what time range each execution covers.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * The schedule expression that defines how often the underlying CloudWatch Logs scheduled query runs. Specify a `rate()` expression, for example `rate(5 minutes)`.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * The offset, in seconds, before the scheduled execution time at which the query time range begins. For example, an offset of 360 (6 minutes) on a query running at 12:05:00 starts the query time range at 11:59:00.
   *
   * @public
   */
  StartTimeOffset: number | undefined;

  /**
   * The offset, in seconds, before the scheduled execution time at which the query time range ends. Must be non-negative and less than `StartTimeOffset`. The default is 0.
   *
   * @public
   */
  EndTimeOffset?: number | undefined;
}

/**
 * A key-value pair associated with a CloudWatch resource.
 *
 * @public
 */
export interface Tag {
  /**
   * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the specified tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The configuration of the CloudWatch Logs scheduled query that backs a log alarm.
 *
 * @public
 */
export interface ScheduledQueryConfiguration {
  /**
   * The CloudWatch Logs query to execute on each scheduled run. Length constraints: maximum of 10,000 characters.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * The log groups to query. Each entry can be a log group name or ARN. Use the ARN form when querying log groups in a different account (for example, when running cross-account queries from a monitoring account). The list must contain between 1 and 50 entries.
   *
   * @public
   */
  LogGroupIdentifiers?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs scheduled query that the alarm uses. This field is populated in `DescribeAlarms` responses.
   *
   * @public
   */
  QueryARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that CloudWatch assumes when executing the scheduled query against the configured log groups.
   *
   * @public
   */
  ScheduledQueryRoleARN: string | undefined;

  /**
   * The schedule and time-range offset configuration for the underlying scheduled query.
   *
   * @public
   */
  ScheduleConfiguration: ScheduleConfiguration | undefined;

  /**
   * The expression that defines how to aggregate query results into one or more scalar values for alarm evaluation. For example, `count(*)` or `avg(latency) by host | sort desc`. Length constraints: minimum 1 character, maximum 2048 characters.
   *
   * @public
   */
  AggregationExpression: string | undefined;

  /**
   * A list of key-value pairs to associate with the underlying scheduled query resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The configuration settings that define the warm-up behavior for an alarm. Use these settings to delay alarm evaluation after you create or update the alarm, which reduces alarm noise while a new resource or service starts publishing data.
 *
 * During the warm-up period, the alarm stays in `INSUFFICIENT_DATA` and does not perform alarm actions.
 *
 * @public
 */
export interface WarmUpConfiguration {
  /**
   * The length of the warm-up period, in minutes. After you create or update the alarm, the alarm stays in `INSUFFICIENT_DATA` for this duration. During this time, the alarm does not perform alarm actions.
   *
   * You can change this value at any time, including after the warm-up period ends. If you change it after the warm-up period ends, the new value does not restart the warm-up period.
   *
   * @public
   */
  WarmUpPeriodDurationInMinutes: number | undefined;

  /**
   * Specifies whether the alarm waits for the full warm-up period before it starts to evaluate. The default is `false`. If `true`, the alarm waits the entire `WarmUpPeriodDurationInMinutes` before it starts to evaluate, even if metric data arrives earlier. If `false`, the alarm ends the warm-up period early. Evaluation begins as soon as the alarm has enough metric data to fill its evaluation window.
   *
   * @public
   */
  OnlyStartEvaluatingAfterWarmUpPeriodEnds?: boolean | undefined;
}

/**
 * The details about a log alarm.
 *
 * @public
 */
export interface LogAlarm {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm.
   *
   * @public
   */
  AlarmArn?: string | undefined;

  /**
   * The description of the alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * The time stamp of the last update to the alarm configuration.
   *
   * @public
   */
  AlarmConfigurationUpdatedTimestamp?: Date | undefined;

  /**
   * Indicates whether actions should be executed during any changes to the alarm state.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The actions to execute when this alarm transitions to the `OK` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  OKActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The state value for the alarm.
   *
   * @public
   */
  StateValue?: StateValue | undefined;

  /**
   * An explanation for the alarm state, in text format.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * An explanation for the alarm state, in JSON format.
   *
   * @public
   */
  StateReasonData?: string | undefined;

  /**
   * The time stamp of the last update to the value of either the `StateValue` or `EvaluationState` parameters.
   *
   * @public
   */
  StateUpdatedTimestamp?: Date | undefined;

  /**
   * The configuration of the underlying CloudWatch Logs scheduled query, including the query string, log groups, schedule, aggregation expression, and the ARN of the managed scheduled query.
   *
   * @public
   */
  ScheduledQueryConfiguration?: ScheduledQueryConfiguration | undefined;

  /**
   * The number of most recent scheduled query results that the alarm evaluates against the threshold (the N in M-of-N evaluation).
   *
   * @public
   */
  QueryResultsToEvaluate?: number | undefined;

  /**
   * The number of query results, out of the most recent `QueryResultsToEvaluate` results, that must breach the threshold to trigger the alarm to transition to `ALARM` (the M in M-of-N evaluation).
   *
   * @public
   */
  QueryResultsToAlarm?: number | undefined;

  /**
   * The value to compare with the aggregated query result.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * The arithmetic operation to use when comparing the aggregated query result and the threshold. The aggregated query result is used as the first operand.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * How this alarm handles missing data points. Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`.
   *
   * @public
   */
  TreatMissingData?: string | undefined;

  /**
   * The date and time that the alarm's `StateValue` most recently changed.
   *
   * @public
   */
  StateTransitionedTimestamp?: Date | undefined;

  /**
   * If the value of this field is `EVALUATION_ERROR`, it indicates configuration errors in the alarm setup that require review and correction. Refer to the `StateReason` field of the alarm for more details.
   *
   * If the value of this field is `EVALUATION_FAILURE`, it indicates temporary CloudWatch issues. We recommend manual monitoring until the issue is resolved.
   *
   * If the value of this field is `PARTIAL_DATA`, it indicates that the query returned the maximum 500 contributor groups but more matched. The alarm evaluates the available contributors, but results might be incomplete.
   *
   * @public
   */
  EvaluationState?: EvaluationState | undefined;

  /**
   * The number of log lines from the most recent scheduled query execution that are included in alarm action notifications. Valid range is 0 through 50. A value of 0 means no log lines are included.
   *
   * @public
   */
  ActionLogLineCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that CloudWatch assumes to retrieve log events for inclusion in alarm action notifications. Set when `ActionLogLineCount` is greater than 0.
   *
   * @public
   */
  ActionLogLineRoleArn?: string | undefined;

  /**
   * The warm-up configuration for the alarm. A warm-up period delays alarm evaluation after you create or update the alarm. During the warm-up period, the alarm stays in `INSUFFICIENT_DATA` and does not perform alarm actions.
   *
   * For more information, see [Alarm warm-up periods](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-warm-up.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  WarmUpConfiguration?: WarmUpConfiguration | undefined;

  /**
   * Settings that change the content of the notifications and events that the alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
   *
   * @public
   */
  ActionConfiguration?: ActionConfiguration | undefined;
}

/**
 * The evaluation criteria for an alarm. This is a union type that currently supports `PromQLCriteria`.
 *
 * @public
 */
export type EvaluationCriteria =
  | EvaluationCriteria.PromQLCriteriaMember
  | EvaluationCriteria.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationCriteria {
  /**
   * The PromQL criteria for the alarm evaluation.
   *
   * @public
   */
  export interface PromQLCriteriaMember {
    PromQLCriteria: AlarmPromQLCriteria;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PromQLCriteria?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PromQLCriteria: (value: AlarmPromQLCriteria) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An evaluation window that advances each time the alarm is evaluated, forming a rolling time window. This is the default evaluation window. A sliding window has no additional configuration options.
 *
 * Choose a sliding window when you need the fastest detection and the calendar boundaries of the data don't matter, such as for continuous performance, latency, or resource-exhaustion monitoring.
 *
 * @public
 */
export interface SlidingWindow {}

/**
 * An evaluation window that aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week, optionally in a specific time zone.
 *
 * When you use a wall clock window, the alarm's period must be 1 minute (60 seconds), 5 minutes (300 seconds), 1 hour (3,600 seconds), 1 day (86,400 seconds), or 1 week (604,800 seconds). Other period values aren't supported with a wall clock window.
 *
 * Choose a wall clock window when your monitoring is tied to a business or calendar period, such as daily reports, batch jobs, or backups, or when you want alarm evaluations to match the periods shown on a metric dashboard.
 *
 * @public
 */
export interface WallClockWindow {
  /**
   * The time zone to use when the alarm aligns the evaluation window to clock boundaries. You can specify an IANA time zone name (for example, `America/New_York`), a fixed UTC offset (for example, `+05:30`), or an offset-prefixed identifier (for example, `UTC+05:30`). The offset must be aligned to a multiple of 5 minutes. If you don't specify a time zone, CloudWatch uses `UTC`.
   *
   * The time zone affects window alignment for all periods, including periods of one hour or shorter.
   *
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * The evaluation window that an alarm uses to select the range of metric data that it evaluates each time it runs. This is a union type. Set exactly one of its members, `SlidingWindow` or `WallClockWindow`. If you don't set `EvaluationWindow`, the alarm uses a `SlidingWindow` by default.
 *
 * For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.
 *
 * @public
 */
export type EvaluationWindow =
  | EvaluationWindow.SlidingWindowMember
  | EvaluationWindow.WallClockWindowMember
  | EvaluationWindow.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationWindow {
  /**
   * A wall clock window, which aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week.
   *
   * @public
   */
  export interface WallClockWindowMember {
    WallClockWindow: WallClockWindow;
    SlidingWindow?: never;
    $unknown?: never;
  }

  /**
   * A sliding window, which advances each time the alarm is evaluated, forming a rolling time window. This is the default evaluation window.
   *
   * @public
   */
  export interface SlidingWindowMember {
    WallClockWindow?: never;
    SlidingWindow: SlidingWindow;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    WallClockWindow?: never;
    SlidingWindow?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    WallClockWindow: (value: WallClockWindow) => T;
    SlidingWindow: (value: SlidingWindow) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details about a metric alarm.
 *
 * @public
 */
export interface MetricAlarm {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm.
   *
   * @public
   */
  AlarmArn?: string | undefined;

  /**
   * The description of the alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * The time stamp of the last update to the alarm configuration.
   *
   * @public
   */
  AlarmConfigurationUpdatedTimestamp?: Date | undefined;

  /**
   * Indicates whether actions should be executed during any changes to the alarm state.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The actions to execute when this alarm transitions to the `OK` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  OKActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The state value for the alarm.
   *
   * @public
   */
  StateValue?: StateValue | undefined;

  /**
   * An explanation for the alarm state, in text format.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * An explanation for the alarm state, in JSON format.
   *
   * @public
   */
  StateReasonData?: string | undefined;

  /**
   * The time stamp of the last update to the value of either the `StateValue` or `EvaluationState` parameters.
   *
   * @public
   */
  StateUpdatedTimestamp?: Date | undefined;

  /**
   * The name of the metric associated with the alarm, if this is an alarm based on a single metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the metric associated with the alarm.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use `ExtendedStatistic`.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
   *
   * @public
   */
  ExtendedStatistic?: string | undefined;

  /**
   * The dimensions for the metric associated with the alarm.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The period, in seconds, over which the statistic is applied.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The unit of the metric associated with the alarm.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   *
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * The number of data points that must be breaching to trigger the alarm.
   *
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * The value to compare with the specified statistic.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * Sets how this alarm is to handle missing data points. The valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. For more information, see [Configuring how CloudWatch alarms treat missing data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data).
   *
   * If this parameter is omitted, the default behavior of `missing` is used.
   *
   * > **Note:** This parameter is not applicable to PromQL alarms.
   *
   * @public
   */
  TreatMissingData?: string | undefined;

  /**
   * Used only for alarms based on percentiles. If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
   *
   * @public
   */
  EvaluateLowSampleCountPercentile?: string | undefined;

  /**
   * An array of MetricDataQuery structures, used in an alarm based on a metric math expression. Each structure either retrieves a metric or performs a math expression. One item in the Metrics array is the math expression that the alarm watches. This expression by designated by having `ReturnData` set to true.
   *
   * @public
   */
  Metrics?: MetricDataQuery[] | undefined;

  /**
   * In an alarm based on an anomaly detection model, this is the ID of the `ANOMALY_DETECTION_BAND` function used as the threshold for the alarm.
   *
   * @public
   */
  ThresholdMetricId?: string | undefined;

  /**
   * If the value of this field is `PARTIAL_DATA`, it indicates that not all the available data was able to be retrieved due to quota limitations. For more information, see [Create alarms on Metrics Insights queries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html).
   *
   * If the value of this field is `EVALUATION_ERROR`, it indicates configuration errors in alarm setup that require review and correction. Refer to StateReason field of the alarm for more details.
   *
   * If the value of this field is `EVALUATION_FAILURE`, it indicates temporary CloudWatch issues. We recommend manual monitoring until the issue is resolved
   *
   * @public
   */
  EvaluationState?: EvaluationState | undefined;

  /**
   * The date and time that the alarm's `StateValue` most recently changed.
   *
   * @public
   */
  StateTransitionedTimestamp?: Date | undefined;

  /**
   * The evaluation window that the alarm uses to select the range of metric data that it evaluates. This is either a sliding window or a wall clock window. For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.
   *
   * @public
   */
  EvaluationWindow?: EvaluationWindow | undefined;

  /**
   * The warm-up configuration for the alarm. A warm-up period delays alarm evaluation after you create or update the alarm. During the warm-up period, the alarm stays in `INSUFFICIENT_DATA` and does not perform alarm actions.
   *
   * For more information, see [Alarm warm-up periods](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-warm-up.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  WarmUpConfiguration?: WarmUpConfiguration | undefined;

  /**
   * The evaluation criteria for the alarm.
   *
   * @public
   */
  EvaluationCriteria?: EvaluationCriteria | undefined;

  /**
   * The frequency, in seconds, at which the alarm is evaluated.
   *
   * @public
   */
  EvaluationInterval?: number | undefined;

  /**
   * Settings that change the content of the notifications and events that the alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
   *
   * @public
   */
  ActionConfiguration?: ActionConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmsOutput {
  /**
   * The information about any composite alarms returned by the operation.
   *
   * @public
   */
  CompositeAlarms?: CompositeAlarm[] | undefined;

  /**
   * The information about any metric alarms returned by the operation.
   *
   * @public
   */
  MetricAlarms?: MetricAlarm[] | undefined;

  /**
   * The information about any log alarms returned by the operation.
   *
   * @public
   */
  LogAlarms?: LogAlarm[] | undefined;

  /**
   * The token that marks the start of the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmsForMetricInput {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The namespace of the metric.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The statistic for the metric, other than percentiles. For percentile statistics, use `ExtendedStatistics`.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The percentile statistic for the metric. Specify a value between p0.0 and p100.
   *
   * @public
   */
  ExtendedStatistic?: string | undefined;

  /**
   * The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The period, in seconds, over which the statistic is applied.
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The unit for the metric.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;
}

/**
 * @public
 */
export interface DescribeAlarmsForMetricOutput {
  /**
   * The information for each alarm with the specified metric.
   *
   * @public
   */
  MetricAlarms?: MetricAlarm[] | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorsInput {
  /**
   * Specifies the unique identifiers of the anomaly detectors to describe. You can specify up to 50 identifiers. If you specify this parameter, you cannot also specify the `Namespace`, `MetricName`, `Dimensions`, or `AnomalyDetectorTypes` metric filters.
   *
   * @public
   */
  AnomalyDetectorIds?: string[] | undefined;

  /**
   * Use the token returned by the previous operation to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in one operation. The maximum value that you can specify is 100.
   *
   * To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limits the results to only the anomaly detection models that are associated with the specified namespace.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The anomaly detector types to request when using `DescribeAnomalyDetectorsInput`. If empty, defaults to `SINGLE_METRIC`.
   *
   * @public
   */
  AnomalyDetectorTypes?: AnomalyDetectorType[] | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorsOutput {
  /**
   * The list of anomaly detection models returned by the operation.
   *
   * @public
   */
  AnomalyDetectors?: AnomalyDetector[] | undefined;

  /**
   * A token that you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInsightRulesInput {
  /**
   * Include this value, if it was returned by the previous operation, to get the next set of rules.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 500 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This structure contains the definition for a Contributor Insights rule. For more information about this rule, see[Using Constributor Insights to analyze high-cardinality data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface InsightRule {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Indicates whether the rule is enabled or disabled.
   *
   * @public
   */
  State: string | undefined;

  /**
   * For rules that you create, this is always `\{"Name": "CloudWatchLogRule", "Version": 1\}`. For managed rules, this is `\{"Name": "ServiceLogRule", "Version": 1\}`
   *
   * @public
   */
  Schema: string | undefined;

  /**
   * The definition of the rule, as a JSON object. The definition contains the keywords used to define contributors, the value to aggregate on if this rule returns a sum instead of a count, and the filters. For details on the valid syntax, see [Contributor Insights Rule Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html).
   *
   * @public
   */
  Definition: string | undefined;

  /**
   * An optional built-in rule that Amazon Web Services manages.
   *
   * @public
   */
  ManagedRule?: boolean | undefined;

  /**
   * Displays whether the rule is evaluated on the transformed versions of logs, for log groups that have [Log transformation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html) enabled. If this is `false`, log events are evaluated before they are transformed.
   *
   * @public
   */
  ApplyOnTransformedLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeInsightRulesOutput {
  /**
   * If this parameter is present, it is a token that marks the start of the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The rules returned by the operation.
   *
   * @public
   */
  InsightRules?: InsightRule[] | undefined;
}

/**
 * Represents filters for a dimension.
 *
 * @public
 */
export interface DimensionFilter {
  /**
   * The dimension name to be matched.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension to be matched.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DisableAlarmActionsInput {
  /**
   * The names of the alarms.
   *
   * @public
   */
  AlarmNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisableInsightRulesInput {
  /**
   * An array of the rule names to disable. If you need to find out the names of your rules, use [DescribeInsightRules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html).
   *
   * @public
   */
  RuleNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisableInsightRulesOutput {
  /**
   * An array listing the rules that could not be disabled. You cannot disable built-in rules.
   *
   * @public
   */
  Failures?: PartialFailure[] | undefined;
}

/**
 * @public
 */
export interface DisassociateDatasetKmsKeyInput {
  /**
   * Specifies the identifier of the dataset from which to remove the KMS key association. For the `default` dataset, you can specify either `default` or the full dataset Amazon Resource Name (ARN) in the format `arn:aws:cloudwatch:Region:account-id:dataset/default`.
   *
   * @public
   */
  DatasetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDatasetKmsKeyOutput {}

/**
 * @public
 */
export interface EnableAlarmActionsInput {
  /**
   * The names of the alarms.
   *
   * @public
   */
  AlarmNames: string[] | undefined;
}

/**
 * @public
 */
export interface EnableInsightRulesInput {
  /**
   * An array of the rule names to enable. If you need to find out the names of your rules, use [DescribeInsightRules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html).
   *
   * @public
   */
  RuleNames: string[] | undefined;
}

/**
 * @public
 */
export interface EnableInsightRulesOutput {
  /**
   * An array listing the rules that could not be enabled. You cannot disable or enable built-in rules.
   *
   * @public
   */
  Failures?: PartialFailure[] | undefined;
}

/**
 * An entity associated with metrics, to allow for finding related telemetry. An entity is typically a resource or service within your system. For example, metrics from an Amazon EC2 instance could be associated with that instance as the entity. Similarly, metrics from a service that you own could be associated with that service as the entity.
 *
 * @public
 */
export interface Entity {
  /**
   * The attributes of the entity which identify the specific entity, as a list of key-value pairs. Entities with the same `KeyAttributes` are considered to be the same entity. For an entity to be valid, the `KeyAttributes` must exist and be formatted correctly.
   *
   * There are five allowed attributes (key names): `Type`, `ResourceType`, `Identifier`, `Name`, and `Environment`.
   *
   * For details about how to use the key attributes to specify an entity, see [How to add related information to telemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html) in the *CloudWatch User Guide*.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * Additional attributes of the entity that are not used to specify the identity of the entity. A list of key-value pairs.
   *
   * For details about how to use the attributes, see [How to add related information to telemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html) in the *CloudWatch User Guide*.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * Represents a set of statistics that describes a specific metric.
 *
 * @public
 */
export interface StatisticSet {
  /**
   * The number of samples used for the statistic set.
   *
   * @public
   */
  SampleCount: number | undefined;

  /**
   * The sum of values for the sample set.
   *
   * @public
   */
  Sum: number | undefined;

  /**
   * The minimum value of the sample set.
   *
   * @public
   */
  Minimum: number | undefined;

  /**
   * The maximum value of the sample set.
   *
   * @public
   */
  Maximum: number | undefined;
}

/**
 * Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.
 *
 * @public
 */
export interface MetricDatum {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The dimensions associated with the metric.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The value for the metric.
   *
   * Although the parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The statistical values for the metric.
   *
   * @public
   */
  StatisticValues?: StatisticSet | undefined;

  /**
   * Array of numbers representing the values for the metric during the period. Each unique value is listed just once in this array, and the corresponding number in the `Counts` array specifies the number of times that value occurred during the period. You can include up to 150 unique values in each `PutMetricData` action that specifies a `Values` array.
   *
   * Although the `Values` array accepts numbers of type `Double`, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.
   *
   * @public
   */
  Values?: number[] | undefined;

  /**
   * Array of numbers that is used along with the `Values` array. Each number in the `Count` array is the number of times the corresponding value in the `Values` array occurred during the period.
   *
   * If you omit the `Counts` array, the default of 1 is used as the value for each count. If you include a `Counts` array, it must include the same amount of values as the `Values` array.
   *
   * @public
   */
  Counts?: number[] | undefined;

  /**
   * When you are using a `Put` operation, this defines what unit you want to use when storing the metric.
   *
   * In a `Get` operation, this displays the unit that is used for the metric.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;

  /**
   * Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see [High-Resolution Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics) in the *Amazon CloudWatch User Guide*.
   *
   * This field is optional, if you do not specify it the default of 60 is used.
   *
   * @public
   */
  StorageResolution?: number | undefined;
}

/**
 * A set of metrics that are associated with an entity, such as a specific service or resource. Contains the entity and the list of metric data associated with it.
 *
 * @public
 */
export interface EntityMetricData {
  /**
   * The entity associated with the metrics.
   *
   * @public
   */
  Entity?: Entity | undefined;

  /**
   * The metric data.
   *
   * @public
   */
  MetricData?: MetricDatum[] | undefined;
}

/**
 * @public
 */
export interface GetAlarmMuteRuleInput {
  /**
   * The name of the alarm mute rule to retrieve.
   *
   * @public
   */
  AlarmMuteRuleName: string | undefined;
}

/**
 * Specifies which alarms an alarm mute rule applies to.
 *
 * You can target up to 100 specific alarms by name. When a mute rule is active, the targeted alarms continue to evaluate metrics and transition between states, but their configured actions are muted.
 *
 * @public
 */
export interface MuteTargets {
  /**
   * The list of alarm names that this mute rule targets. You can specify up to 100 alarm names.
   *
   * Each alarm name must be between 1 and 255 characters in length. The alarm names must match existing alarms in your Amazon Web Services account and region.
   *
   * @public
   */
  AlarmNames: string[] | undefined;
}

/**
 * Specifies when and how long an alarm mute rule is active.
 *
 * The schedule uses either a cron expression for recurring mute windows or an at expression for one-time mute windows. When the schedule activates, the mute rule mutes alarm actions for the specified duration.
 *
 * @public
 */
export interface Schedule {
  /**
   * The schedule expression that defines when the mute rule activates. The expression must be between 1 and 256 characters in length.
   *
   * You can use one of two expression formats:
   *
   * - **Cron expressions** - For recurring mute windows. Format: `cron(Minutes Hours Day-of-month Month Day-of-week)`
   *
   *   Examples:
   *
   *   - `cron(0 2 * * *)` - Activates daily at 2:00 AM
   *   - `cron(0 2 * * SUN)` - Activates every Sunday at 2:00 AM for weekly system maintenance
   *   - `cron(0 1 1 * *)` - Activates on the first day of each month at 1:00 AM for monthly database maintenance
   *   - `cron(0 18 * * FRI)` - Activates every Friday at 6:00 PM
   *   - `cron(0 23 * * *)` - Activates every day at 11:00 PM during nightly backup operations
   *
   *   The characters `*`, `-`, and `,` are supported in all fields. English names can be used for the month (JAN-DEC) and day of week (SUN-SAT) fields.
   * - **At expressions** - For one-time mute windows. Format: `at(yyyy-MM-ddThh:mm)`
   *
   *   Examples:
   *
   *   - `at(2024-05-10T14:00)` - Activates once on May 10, 2024 at 2:00 PM during an active incident response session
   *   - `at(2024-12-23T00:00)` - Activates once on December 23, 2024 at midnight during annual company shutdown
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The length of time that alarms remain muted when the schedule activates. The duration must be between 1 and 50 characters in length.
   *
   * Specify the duration using ISO 8601 duration format with a minimum of 1 minute (`PT1M`) and maximum of 15 days (`P15D`).
   *
   * Examples:
   *
   * - `PT4H` - 4 hours for weekly system maintenance
   * - `P2DT12H` - 2 days and 12 hours for weekend muting from Friday 6:00 PM to Monday 6:00 AM
   * - `PT6H` - 6 hours for monthly database maintenance
   * - `PT2H` - 2 hours for nightly backup operations
   * - `P7D` - 7 days for annual company shutdown
   *
   * The duration begins when the schedule expression time is reached. For recurring schedules, the duration applies to each occurrence.
   *
   * @public
   */
  Duration: string | undefined;

  /**
   * The time zone to use when evaluating the schedule expression. The time zone must be between 1 and 50 characters in length.
   *
   * Specify the time zone using standard timezone identifiers (for example, `America/New_York`, `Europe/London`, or `Asia/Tokyo`).
   *
   * If you don't specify a time zone, UTC is used by default. The time zone affects how cron and at expressions are interpreted, as well as start and expire dates you specify
   *
   * Examples:
   *
   * - `America/New_York` - Eastern Time (US)
   * - `America/Los_Angeles` - Pacific Time (US)
   * - `Europe/London` - British Time
   * - `Asia/Tokyo` - Japan Standard Time
   * - `UTC` - Coordinated Universal Time
   *
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * Defines the schedule configuration for an alarm mute rule.
 *
 * The rule contains a schedule that specifies when and how long alarms should be muted. The schedule can be a recurring pattern using cron expressions or a one-time mute window using at expressions.
 *
 * @public
 */
export interface Rule {
  /**
   * The schedule configuration that defines when the mute rule activates and how long it remains active.
   *
   * @public
   */
  Schedule: Schedule | undefined;
}

/**
 * @public
 */
export interface GetAlarmMuteRuleOutput {
  /**
   * The name of the alarm mute rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm mute rule.
   *
   * @public
   */
  AlarmMuteRuleArn?: string | undefined;

  /**
   * The description of the alarm mute rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration that defines when and how long alarms are muted.
   *
   * @public
   */
  Rule?: Rule | undefined;

  /**
   * Specifies which alarms this rule applies to.
   *
   * @public
   */
  MuteTargets?: MuteTargets | undefined;

  /**
   * The date and time when the mute rule becomes active. If not set, the rule is active immediately.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date and time when the mute rule expires and is no longer evaluated.
   *
   * @public
   */
  ExpireDate?: Date | undefined;

  /**
   * The current status of the alarm mute rule. Valid values are `SCHEDULED`, `ACTIVE`, or `EXPIRED`.
   *
   * @public
   */
  Status?: AlarmMuteRuleStatus | undefined;

  /**
   * The date and time when the mute rule was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * Indicates whether the mute rule is one-time or recurring. Valid values are `ONE_TIME` or `RECURRING`.
   *
   * @public
   */
  MuteType?: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardInput {
  /**
   * The name of the dashboard to be described.
   *
   * @public
   */
  DashboardName: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardOutput {
  /**
   * The Amazon Resource Name (ARN) of the dashboard.
   *
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * The detailed information about the dashboard, including what widgets are included and their location on the dashboard. For more information about the `DashboardBody` syntax, see [Dashboard Body Structure and Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Dashboard-Body-Structure.html).
   *
   * @public
   */
  DashboardBody?: string | undefined;

  /**
   * The name of the dashboard.
   *
   * @public
   */
  DashboardName?: string | undefined;
}

/**
 * @public
 */
export interface GetDatasetInput {
  /**
   * Specifies the identifier of the dataset to retrieve. For the `default` dataset, you can specify either `default` or the full dataset Amazon Resource Name (ARN) in the format `arn:aws:cloudwatch:Region:account-id:dataset/default`.
   *
   * @public
   */
  DatasetIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDatasetOutput {
  /**
   * Returns the identifier of the dataset.
   *
   * @public
   */
  DatasetId: string | undefined;

  /**
   * Returns the Amazon Resource Name (ARN) of the dataset, in the format `arn:aws:cloudwatch:Region:account-id:dataset/dataset-id`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Returns the Amazon Resource Name (ARN) of the customer managed Amazon Web Services KMS key that is currently associated with the dataset, if any. If the dataset is not associated with a customer managed KMS key, this field is not included in the response and the dataset is encrypted at rest using an Amazon Web Services owned key.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightRuleReportInput {
  /**
   * The name of the rule that you want to see data from.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as `yyyy-MM-dd'T'HH:mm:ss`. For example, `2019-07-01T23:59:59`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as `yyyy-MM-dd'T'HH:mm:ss`. For example, `2019-07-01T23:59:59`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The period, in seconds, to use for the statistics in the `InsightRuleMetricDatapoint` results.
   *
   * @public
   */
  Period: number | undefined;

  /**
   * The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.
   *
   * @public
   */
  MaxContributorCount?: number | undefined;

  /**
   * Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more of the following metrics:
   *
   * - `UniqueContributors` -- the number of unique contributors for each data point.
   * - `MaxContributorValue` -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.
   *
   *   If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's `Value`, during that period.
   * - `SampleCount` -- the number of data points matched by the rule.
   * - `Sum` -- the sum of the values from all contributors during the time period represented by that data point.
   * - `Minimum` -- the minimum value from a single observation during the time period represented by that data point.
   * - `Maximum` -- the maximum value from a single observation during the time period represented by that data point.
   * - `Average` -- the average value from all contributors during the time period represented by that data point.
   *
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * Determines what statistic to use to rank the contributors. Valid values are `Sum` and `Maximum`.
   *
   * @public
   */
  OrderBy?: string | undefined;
}

/**
 * One data point related to one contributor.
 *
 * For more information, see [GetInsightRuleReport](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html) and [InsightRuleContributor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html).
 *
 * @public
 */
export interface InsightRuleContributorDatapoint {
  /**
   * The timestamp of the data point.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The approximate value that this contributor added during this timestamp.
   *
   * @public
   */
  ApproximateValue: number | undefined;
}

/**
 * One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.
 *
 * If the rule contains a single key, then each unique contributor is each unique value for this key.
 *
 * For more information, see [GetInsightRuleReport](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html).
 *
 * @public
 */
export interface InsightRuleContributor {
  /**
   * One of the log entry field keywords that is used to define contributors for this rule.
   *
   * @public
   */
  Keys: string[] | undefined;

  /**
   * An approximation of the aggregate value that comes from this contributor.
   *
   * @public
   */
  ApproximateAggregateValue: number | undefined;

  /**
   * An array of the data points where this contributor is present. Only the data points when this contributor appeared are included in the array.
   *
   * @public
   */
  Datapoints: InsightRuleContributorDatapoint[] | undefined;
}

/**
 * One data point from the metric time series returned in a Contributor Insights rule report.
 *
 * For more information, see [GetInsightRuleReport](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html).
 *
 * @public
 */
export interface InsightRuleMetricDatapoint {
  /**
   * The timestamp of the data point.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The number of unique contributors who published data during this timestamp.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  UniqueContributors?: number | undefined;

  /**
   * The maximum value provided by one contributor during this timestamp. Each timestamp is evaluated separately, so the identity of the max contributor could be different for each timestamp.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  MaxContributorValue?: number | undefined;

  /**
   * The number of occurrences that matched the rule during this data point.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  SampleCount?: number | undefined;

  /**
   * The average value from all contributors during the time period represented by that data point.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  Average?: number | undefined;

  /**
   * The sum of the values from all contributors during the time period represented by that data point.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  Sum?: number | undefined;

  /**
   * The minimum value from a single contributor during the time period represented by that data point.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * The maximum value from a single occurence from a single contributor during the time period represented by that data point.
   *
   * This statistic is returned only if you included it in the `Metrics` array in your request.
   *
   * @public
   */
  Maximum?: number | undefined;
}

/**
 * @public
 */
export interface GetInsightRuleReportOutput {
  /**
   * An array of the strings used as the keys for this rule. The keys are the dimensions used to classify contributors. If the rule contains more than one key, then each unique combination of values for the keys is counted as a unique contributor.
   *
   * @public
   */
  KeyLabels?: string[] | undefined;

  /**
   * Specifies whether this rule aggregates contributor data by COUNT or SUM.
   *
   * @public
   */
  AggregationStatistic?: string | undefined;

  /**
   * The sum of the values from all individual contributors that match the rule.
   *
   * @public
   */
  AggregateValue?: number | undefined;

  /**
   * An approximate count of the unique contributors found by this rule in this time period.
   *
   * @public
   */
  ApproximateUniqueCount?: number | undefined;

  /**
   * An array of the unique contributors found by this rule in this time period. If the rule contains multiple keys, each combination of values for the keys counts as a unique contributor.
   *
   * @public
   */
  Contributors?: InsightRuleContributor[] | undefined;

  /**
   * A time series of metric data points that matches the time period in the rule request.
   *
   * @public
   */
  MetricDatapoints?: InsightRuleMetricDatapoint[] | undefined;
}

/**
 * This structure includes the `Timezone` parameter, which you can use to specify your time zone so that the labels that are associated with returned metrics display the correct time for your time zone.
 *
 * The `Timezone` value affects a label only if you have a time-based dynamic expression in the label. For more information about dynamic expressions in labels, see [Using Dynamic Labels](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html).
 *
 * @public
 */
export interface LabelOptions {
  /**
   * The time zone to use for metric data return in this operation. The format is `+` or `-` followed by four digits. The first two digits indicate the number of hours ahead or behind of UTC, and the final two digits are the number of minutes. For example, +0130 indicates a time zone that is 1 hour and 30 minutes ahead of UTC. The default is +0000.
   *
   * @public
   */
  Timezone?: string | undefined;
}

/**
 * @public
 */
export interface GetMetricDataInput {
  /**
   * The metric queries to be returned. A single `GetMetricData` call can include as many as 500 `MetricDataQuery` structures. Each of these structures can specify either a metric to retrieve, a Metrics Insights query, or a math expression to perform on retrieved data.
   *
   * @public
   */
  MetricDataQueries: MetricDataQuery[] | undefined;

  /**
   * The time stamp indicating the earliest data to be returned.
   *
   * The value specified is inclusive; results include data points with the specified time stamp.
   *
   * CloudWatch rounds the specified time stamp as follows:
   *
   * - Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.
   * - Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.
   * - Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.
   *
   * If you set `Period` to 5, 10, 20, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, 20-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15.
   *
   * For better performance, specify `StartTime` and `EndTime` values that align with the value of the metric's `Period` and sync up with the beginning and end of an hour. For example, if the `Period` of a metric is 5 minutes, specifying 12:05 or 12:30 as `StartTime` can get a faster response from CloudWatch than setting 12:07 or 12:29 as the `StartTime`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time stamp indicating the latest data to be returned.
   *
   * The value specified is exclusive; results include data points up to the specified time stamp.
   *
   * For better performance, specify `StartTime` and `EndTime` values that align with the value of the metric's `Period` and sync up with the beginning and end of an hour. For example, if the `Period` of a metric is 5 minutes, specifying 12:05 or 12:30 as `EndTime` can get a faster response from CloudWatch than setting 12:07 or 12:29 as the `EndTime`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Include this value, if it was returned by the previous `GetMetricData` operation, to get the next set of data points.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The order in which data points should be returned. `TimestampDescending` returns the newest data first and paginates when the `MaxDatapoints` limit is reached. `TimestampAscending` returns the oldest data first and paginates when the `MaxDatapoints` limit is reached.
   *
   * If you omit this parameter, the default of `TimestampDescending` is used.
   *
   * @public
   */
  ScanBy?: ScanBy | undefined;

  /**
   * The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.
   *
   * @public
   */
  MaxDatapoints?: number | undefined;

  /**
   * This structure includes the `Timezone` parameter, which you can use to specify your time zone so that the labels of returned data display the correct time for your time zone.
   *
   * @public
   */
  LabelOptions?: LabelOptions | undefined;
}

/**
 * A message returned by the `GetMetricData`API, including a code and a description.
 *
 * If a cross-Region `GetMetricData` operation fails with a code of `Forbidden` and a value of `Authentication too complex to retrieve cross region data`, you can correct the problem by running the `GetMetricData` operation in the same Region where the metric data is.
 *
 * @public
 */
export interface MessageData {
  /**
   * The error code or status code associated with the message.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The message text.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A `GetMetricData` call returns an array of `MetricDataResult` structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
 *
 * @public
 */
export interface MetricDataResult {
  /**
   * The short name you specified to represent this metric.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The human-readable label associated with the data.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The timestamps for the data points, formatted in Unix timestamp format. The number of timestamps always matches the number of values and the value for Timestamps[x] is Values[x].
   *
   * @public
   */
  Timestamps?: Date[] | undefined;

  /**
   * The data points for the metric corresponding to `Timestamps`. The number of values always matches the number of timestamps and the timestamp for Values[x] is Timestamps[x].
   *
   * @public
   */
  Values?: number[] | undefined;

  /**
   * The status of the returned data. `Complete` indicates that all data points in the requested time range were returned. `PartialData` means that an incomplete set of data points were returned. You can use the `NextToken` value that was returned and repeat your request to get more data points. `NextToken` is not returned if you are performing a math expression. `InternalError` indicates that an error occurred. Retry your request using `NextToken`, if present.
   *
   * @public
   */
  StatusCode?: StatusCode | undefined;

  /**
   * A list of messages with additional information about the data returned.
   *
   * @public
   */
  Messages?: MessageData[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataOutput {
  /**
   * The metrics that are returned, including the metric name, namespace, and dimensions.
   *
   * @public
   */
  MetricDataResults?: MetricDataResult[] | undefined;

  /**
   * A token that marks the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Contains a message about this `GetMetricData` operation, if the operation results in such a message. An example of a message that might be returned is `Maximum number of allowed metrics exceeded`. If there is a message, as much of the operation as possible is still executed.
   *
   * A message appears here only if it is related to the global `GetMetricData` operation. Any message about a specific metric returned by the operation appears in the `MetricDataResult` object returned for that metric.
   *
   * @public
   */
  Messages?: MessageData[] | undefined;
}

/**
 * @public
 */
export interface GetMetricStatisticsInput {
  /**
   * The namespace of the metric, with or without spaces.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The name of the metric, with or without spaces.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can't retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see [Dimension Combinations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations) in the *Amazon CloudWatch User Guide*. For more information about specifying dimensions, see [Publishing Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request.
   *
   * The value specified is inclusive; results include data points with the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).
   *
   * CloudWatch rounds the specified time stamp as follows:
   *
   * - Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.
   * - Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.
   * - Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.
   *
   * If you set `Period` to 5, 10, 20, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, 20-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time stamp that determines the last data point to return.
   *
   * The value specified is exclusive; results include data points up to the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
   *
   * If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
   *
   * - Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
   * - Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
   * - Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
   *
   * @public
   */
  Period: number | undefined;

  /**
   * The metric statistics, other than percentile. For percentile statistics, use `ExtendedStatistics`. When calling `GetMetricStatistics`, you must specify either `Statistics` or `ExtendedStatistics`, but not both.
   *
   * @public
   */
  Statistics?: Statistic[] | undefined;

  /**
   * The percentile statistics. Specify values between p0.0 and p100. When calling `GetMetricStatistics`, you must specify either `Statistics` or `ExtendedStatistics`, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers.
   *
   * @public
   */
  ExtendedStatistics?: string[] | undefined;

  /**
   * The unit for a given metric. If you omit `Unit`, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;
}

/**
 * @public
 */
export interface GetMetricStatisticsOutput {
  /**
   * A label for the specified metric.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The data points for the specified metric.
   *
   * @public
   */
  Datapoints?: Datapoint[] | undefined;
}

/**
 * @public
 */
export interface GetMetricStreamInput {
  /**
   * The name of the metric stream to retrieve information about.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * This structure contains a metric namespace and optionally, a list of metric names, to either include in a metric stream or exclude from a metric stream.
 *
 * A metric stream's filters can include up to 1000 total names. This limit applies to the sum of namespace names and metric names in the filters. For example, this could include 10 metric namespace filters with 99 metrics each, or 20 namespace filters with 49 metrics specified in each filter.
 *
 * @public
 */
export interface MetricStreamFilter {
  /**
   * The name of the metric namespace for this filter.
   *
   * The namespace can contain only ASCII printable characters (ASCII range 32 through 126). It must contain at least one non-whitespace character.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The names of the metrics to either include or exclude from the metric stream.
   *
   * If you omit this parameter, all metrics in the namespace are included or excluded, depending on whether this filter is specified as an exclude filter or an include filter.
   *
   * Each metric name can contain only ASCII printable characters (ASCII range 32 through 126). Each metric name must contain at least one non-whitespace character.
   *
   * @public
   */
  MetricNames?: string[] | undefined;
}

/**
 * This object contains the information for one metric that is to be streamed with additional statistics.
 *
 * @public
 */
export interface MetricStreamStatisticsMetric {
  /**
   * The namespace of the metric.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;
}

/**
 * By default, a metric stream always sends the `MAX`, `MIN`, `SUM`, and `SAMPLECOUNT` statistics for each metric that is streamed. This structure contains information for one metric that includes additional statistics in the stream. For more information about statistics, see CloudWatch, listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
 *
 * @public
 */
export interface MetricStreamStatisticsConfiguration {
  /**
   * An array of metric name and namespace pairs that stream the additional statistics listed in the value of the `AdditionalStatistics` parameter. There can be as many as 100 pairs in the array.
   *
   * All metrics that match the combination of metric name and namespace will be streamed with the additional statistics, no matter their dimensions.
   *
   * @public
   */
  IncludeMetrics: MetricStreamStatisticsMetric[] | undefined;

  /**
   * The list of additional statistics that are to be streamed for the metrics listed in the `IncludeMetrics` array in this structure. This list can include as many as 20 statistics.
   *
   * If the `OutputFormat` for the stream is `opentelemetry1.0` or `opentelemetry0.7`, the only valid values are `p??` percentile statistics such as `p90`, `p99` and so on.
   *
   * If the `OutputFormat` for the stream is `json`, the valid values include the abbreviations for all of the statistics listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html). For example, this includes `tm98,` `wm90`, `PR(:300)`, and so on.
   *
   * @public
   */
  AdditionalStatistics: string[] | undefined;
}

/**
 * @public
 */
export interface GetMetricStreamOutput {
  /**
   * The ARN of the metric stream.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the metric stream.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If this array of metric namespaces is present, then these namespaces are the only metric namespaces that are streamed by this metric stream.
   *
   * @public
   */
  IncludeFilters?: MetricStreamFilter[] | undefined;

  /**
   * If this array of metric namespaces is present, then these namespaces are the only metric namespaces that are not streamed by this metric stream. In this case, all other metric namespaces in the account are streamed by this metric stream.
   *
   * @public
   */
  ExcludeFilters?: MetricStreamFilter[] | undefined;

  /**
   * The ARN of the Amazon Kinesis Data Firehose delivery stream that is used by this metric stream.
   *
   * @public
   */
  FirehoseArn?: string | undefined;

  /**
   * The ARN of the IAM role that is used by this metric stream.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The state of the metric stream. The possible values are `running` and `stopped`.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The date that the metric stream was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date of the most recent update to the metric stream's configuration.
   *
   * @public
   */
  LastUpdateDate?: Date | undefined;

  /**
   * The output format for the stream. Valid values are `json`, `opentelemetry1.0`, and `opentelemetry0.7`. For more information about metric stream output formats, see [Metric streams output formats](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html).
   *
   * @public
   */
  OutputFormat?: MetricStreamOutputFormat | undefined;

  /**
   * Each entry in this array displays information about one or more metrics that include additional statistics in the metric stream. For more information about the additional statistics, see [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
   *
   * @public
   */
  StatisticsConfigurations?: MetricStreamStatisticsConfiguration[] | undefined;

  /**
   * If this is `true` and this metric stream is in a monitoring account, then the stream includes metrics from source accounts that the monitoring account is linked to.
   *
   * @public
   */
  IncludeLinkedAccountsMetrics?: boolean | undefined;
}

/**
 * @public
 */
export interface GetMetricWidgetImageInput {
  /**
   * A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one `MetricWidget` parameter in each `GetMetricWidgetImage` call.
   *
   * For more information about the syntax of `MetricWidget` see [GetMetricWidgetImage: Metric Widget Structure and Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Widget-Structure.html).
   *
   * If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend.
   *
   * @public
   */
  MetricWidget: string | undefined;

  /**
   * The format of the resulting image. Only PNG images are supported.
   *
   * The default is `png`. If you specify `png`, the API returns an HTTP response with the content-type set to `text/xml`. The image data is in a `MetricWidgetImage` field. For example:
   *
   * `<GetMetricWidgetImageResponse xmlns=<URLstring>>`
   *
   * `<GetMetricWidgetImageResult>`
   *
   * `<MetricWidgetImage>`
   *
   * `iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...`
   *
   * `</MetricWidgetImage>`
   *
   * `</GetMetricWidgetImageResult>`
   *
   * `<ResponseMetadata>`
   *
   * `<RequestId>6f0d4192-4d42-11e8-82c1-f539a07e0e3b</RequestId>`
   *
   * `</ResponseMetadata>`
   *
   * `</GetMetricWidgetImageResponse>`
   *
   * The `image/png` setting is intended only for custom HTTP requests. For most use cases, and all actions using an Amazon Web Services SDK, you should use `png`. If you specify `image/png`, the HTTP response has a content-type set to `image/png`, and the body of the response is a PNG image.
   *
   * @public
   */
  OutputFormat?: string | undefined;
}

/**
 * @public
 */
export interface GetMetricWidgetImageOutput {
  /**
   * The image of the graph, in the output format specified. The output is base64-encoded.
   *
   * @public
   */
  MetricWidgetImage?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetOTelEnrichmentInput {}

/**
 * Selects the metrics in one namespace, for use in the `IncludeFilters` or `ExcludeFilters` parameter of [StartOTelEnrichment](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StartOTelEnrichment.html) or [UpdateOTelEnrichment](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UpdateOTelEnrichment.html).
 *
 * A maximum of 100 selectors is allowed across `IncludeFilters` and `ExcludeFilters` combined.
 *
 * @public
 */
export interface OTelEnrichmentMetricSelector {
  /**
   * The namespace of the metrics to select. Namespaces are matched exactly and are case-sensitive.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The names of the metrics to select within the namespace. Metric names are matched exactly and are case-sensitive. If this parameter is omitted, every metric in the namespace is selected.
   *
   * A maximum of 100 metric names is allowed for each selector.
   *
   * @public
   */
  MetricNames?: string[] | undefined;
}

/**
 * @public
 */
export interface GetOTelEnrichmentOutput {
  /**
   * The status of OTel enrichment for the account. Valid values are `Running` (enrichment is enabled) and `Stopped` (enrichment is disabled).
   *
   * @public
   */
  Status: OTelEnrichmentStatus | undefined;

  /**
   * The metric namespaces, and the metric names, that are enriched. This parameter is omitted when enrichment is stopped, and when enrichment is running with no include filters, which means that every supported namespace is in scope.
   *
   * @public
   */
  IncludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The metric namespaces, and the metric names, that are left unenriched. This parameter is omitted when enrichment is stopped, and when enrichment is running with no exclude filters, which means that nothing is excluded.
   *
   * @public
   */
  ExcludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The date and time that enrichment started for the account. This parameter is omitted when enrichment is stopped.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the enrichment configuration for the account was last stored.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Specifies the resource ARN for a `GetResourceMetricsConfiguration` request.
 *
 * @public
 */
export interface GetResourceMetricsConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource to retrieve the resource metrics configuration for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Returns the current resource metrics configuration for the specified resource.
 *
 * @public
 */
export interface GetResourceMetricsConfigurationOutput {
  /**
   * The resource metrics configuration for the specified resource.
   *
   * @public
   */
  ResourceMetricsConfiguration: ResourceMetricsConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAlarmMuteRulesInput {
  /**
   * Filter results to show only mute rules that target the specified alarm name.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * Filter results to show only mute rules with the specified statuses. Valid values are `SCHEDULED`, `ACTIVE`, or `EXPIRED`.
   *
   * @public
   */
  Statuses?: AlarmMuteRuleStatus[] | undefined;

  /**
   * The maximum number of mute rules to return in one call. The default is 50.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The token returned from a previous call to indicate where to continue retrieving results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAlarmMuteRulesOutput {
  /**
   * A list of alarm mute rule summaries.
   *
   * @public
   */
  AlarmMuteRuleSummaries?: AlarmMuteRuleSummary[] | undefined;

  /**
   * The token to use when requesting the next set of results. If this field is absent, there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsInput {
  /**
   * If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_".
   *
   * @public
   */
  DashboardNamePrefix?: string | undefined;

  /**
   * The token returned by a previous call to indicate that there is more data available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsOutput {
  /**
   * The list of matching dashboards.
   *
   * @public
   */
  DashboardEntries?: DashboardEntry[] | undefined;

  /**
   * The token that marks the start of the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedInsightRulesInput {
  /**
   * The ARN of an Amazon Web Services resource that has managed Contributor Insights rules.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Include this value to get the next set of rules if the value was returned by the previous operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default number is used. The default number is `100`.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The status of a managed Contributor Insights rule.
 *
 * @public
 */
export interface ManagedRuleState {
  /**
   * The name of the Contributor Insights rule that contains data for the specified Amazon Web Services resource.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * Indicates whether the rule is enabled or disabled.
   *
   * @public
   */
  State: string | undefined;
}

/**
 * Contains information about managed Contributor Insights rules, as returned by `ListManagedInsightRules`.
 *
 * @public
 */
export interface ManagedRuleDescription {
  /**
   * The template name for the managed rule. Used to enable managed rules using `PutManagedInsightRules`.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * If a managed rule is enabled, this is the ARN for the related Amazon Web Services resource.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * Describes the state of a managed rule. If present, it contains information about the Contributor Insights rule that contains information about the related Amazon Web Services resource.
   *
   * @public
   */
  RuleState?: ManagedRuleState | undefined;
}

/**
 * @public
 */
export interface ListManagedInsightRulesOutput {
  /**
   * The managed rules that are available for the specified Amazon Web Services resource.
   *
   * @public
   */
  ManagedRules?: ManagedRuleDescription[] | undefined;

  /**
   * Include this value to get the next set of rules if the value was returned by the previous operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricsInput {
  /**
   * The metric namespace to filter against. Only the namespace that matches exactly will be returned.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the metric to filter against. Only the metrics with names that match exactly will be returned.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The dimensions to filter against. Only the dimension with names that match exactly will be returned. If you specify one dimension name and a metric has that dimension and also other dimensions, it will be returned.
   *
   * @public
   */
  Dimensions?: DimensionFilter[] | undefined;

  /**
   * The token returned by a previous call to indicate that there is more data available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * To filter the results to show only metrics that have had data points published in the past three hours, specify this parameter with a value of `PT3H`. This is the only valid value for this parameter.
   *
   * The results that are returned are an approximation of the value you specify. There is a low probability that the returned results include metrics with last published data as much as 50 minutes more than the specified time interval.
   *
   * @public
   */
  RecentlyActive?: RecentlyActive | undefined;

  /**
   * If you are using this operation in a monitoring account, specify `true` to include metrics from source accounts in the returned data.
   *
   * The default is `false`.
   *
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;

  /**
   * When you use this operation in a monitoring account, use this field to return metrics only from one source account. To do so, specify that source account ID in this field, and also specify `true` for `IncludeLinkedAccounts`.
   *
   * @public
   */
  OwningAccount?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricsOutput {
  /**
   * The metrics that match your request.
   *
   * @public
   */
  Metrics?: Metric[] | undefined;

  /**
   * The token that marks the start of the next batch of returned results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If you are using this operation in a monitoring account, this array contains the account IDs of the source accounts where the metrics in the returned data are from.
   *
   * This field is a 1:1 mapping between each metric that is returned and the ID of the owning account.
   *
   * @public
   */
  OwningAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface ListMetricStreamsInput {
  /**
   * Include this value, if it was returned by the previous call, to get the next set of metric streams.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in one operation.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This structure contains the configuration information about one metric stream.
 *
 * @public
 */
export interface MetricStreamEntry {
  /**
   * The ARN of the metric stream.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date that the metric stream was originally created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date that the configuration of this metric stream was most recently updated.
   *
   * @public
   */
  LastUpdateDate?: Date | undefined;

  /**
   * The name of the metric stream.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the Kinesis Firehose devlivery stream that is used for this metric stream.
   *
   * @public
   */
  FirehoseArn?: string | undefined;

  /**
   * The current state of this stream. Valid values are `running` and `stopped`.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The output format of this metric stream. Valid values are `json`, `opentelemetry1.0`, and `opentelemetry0.7`.
   *
   * @public
   */
  OutputFormat?: MetricStreamOutputFormat | undefined;
}

/**
 * @public
 */
export interface ListMetricStreamsOutput {
  /**
   * The token that marks the start of the next batch of returned results. You can use this token in a subsequent operation to get the next batch of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The array of metric stream information.
   *
   * @public
   */
  Entries?: MetricStreamEntry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the CloudWatch resource that you want to view tags for.
   *
   * The ARN format of an alarm is `arn:aws:cloudwatch:Region:account-id:alarm:alarm-name`
   *
   * The ARN format of a Contributor Insights rule is `arn:aws:cloudwatch:Region:account-id:insight-rule/insight-rule-name`
   *
   * The ARN format of a dashboard is `arn:aws:cloudwatch::account-id:dashboard/dashboard-name`
   *
   * The ARN format of a metric stream is `arn:aws:cloudwatch:Region:account-id:metric-stream/metric-stream-name`
   *
   * For more information about ARN format, see [Resource Types Defined by Amazon CloudWatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tag keys and values associated with the resource you specified.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAlarmMuteRuleInput {
  /**
   * The name of the alarm mute rule. This name must be unique within your Amazon Web Services account and region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the alarm mute rule that helps you identify its purpose.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration that defines when and how long alarms should be muted.
   *
   * @public
   */
  Rule: Rule | undefined;

  /**
   * Specifies which alarms this rule applies to.
   *
   * @public
   */
  MuteTargets?: MuteTargets | undefined;

  /**
   * A list of key-value pairs to associate with the alarm mute rule. You can use tags to categorize and manage your mute rules.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The date and time after which the mute rule takes effect, specified as a timestamp in ISO 8601 format (for example, `2026-04-15T08:00:00Z`). If not specified, the mute rule takes effect immediately upon creation and the mutes are applied as per the schedule expression.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date and time when the mute rule expires and is no longer evaluated, specified as a timestamp in ISO 8601 format (for example, `2026-12-31T23:59:59Z`). After this time, the rule status becomes EXPIRED and will no longer mute the targeted alarms.
   *
   * @public
   */
  ExpireDate?: Date | undefined;
}

/**
 * @public
 */
export interface PutAnomalyDetectorInput {
  /**
   * The namespace of the metric to create the anomaly detection model for.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the metric to create the anomaly detection model for.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The metric dimensions to create the anomaly detection model for.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The statistic to use for the metric and the anomaly detection model.
   *
   * @deprecated Use SingleMetricAnomalyDetector.
   * @public
   */
  Stat?: string | undefined;

  /**
   * The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges.
   *
   * The configuration can also include the time zone to use for the metric.
   *
   * @public
   */
  Configuration?: AnomalyDetectorConfiguration | undefined;

  /**
   * Use this object to include parameters to provide information about your metric to CloudWatch to help it build more accurate anomaly detection models. Currently, it includes the `PeriodicSpikes` parameter.
   *
   * @public
   */
  MetricCharacteristics?: MetricCharacteristics | undefined;

  /**
   * A single metric anomaly detector to be created.
   *
   * When using `SingleMetricAnomalyDetector`, you cannot include the following parameters in the same operation:
   *
   * - `Dimensions`
   * - `MetricName`
   * - `Namespace`
   * - `Stat`
   * - the `MetricMathAnomalyDetector` parameters of `PutAnomalyDetectorInput`
   *
   * Instead, specify the single metric anomaly detector attributes as part of the property `SingleMetricAnomalyDetector`.
   *
   * @public
   */
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector | undefined;

  /**
   * The metric math anomaly detector to be created.
   *
   * When using `MetricMathAnomalyDetector`, you cannot include the following parameters in the same operation:
   *
   * - `Dimensions`
   * - `MetricName`
   * - `Namespace`
   * - `Stat`
   * - the `SingleMetricAnomalyDetector` parameters of `PutAnomalyDetectorInput`
   *
   * Instead, specify the metric math anomaly detector attributes as part of the property `MetricMathAnomalyDetector`.
   *
   * @public
   */
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector | undefined;
}

/**
 * @public
 */
export interface PutAnomalyDetectorOutput {
  /**
   * The unique identifier of the anomaly detector that you created or updated.
   *
   * @public
   */
  AnomalyDetectorId?: string | undefined;
}

/**
 * @public
 */
export interface PutCompositeAlarmInput {
  /**
   * Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is `TRUE`.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * Valid Values: ]
   *
   * **Amazon SNS actions:**
   *
   * `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * **Systems Manager actions:**
   *
   * `arn:aws:ssm:region:account-id:opsitem:severity`
   *
   * **Start a Amazon Q Developer operational investigation**
   *
   * `arn:aws:aiops:region:account-id:investigation-group:investigation-group-id`
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The description for the composite alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * The name for the composite alarm. This name must be unique within the Region.
   *
   * @public
   */
  AlarmName: string | undefined;

  /**
   * An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression.
   *
   * You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.
   *
   * Functions can include the following:
   *
   * - `ALARM("alarm-name or alarm-ARN")` is TRUE if the named alarm is in ALARM state.
   * - `OK("alarm-name or alarm-ARN")` is TRUE if the named alarm is in OK state.
   * - `INSUFFICIENT_DATA("alarm-name or alarm-ARN")` is TRUE if the named alarm is in INSUFFICIENT_DATA state.
   * - `TRUE` always evaluates to TRUE.
   * - `FALSE` always evaluates to FALSE.
   *
   * TRUE and FALSE are useful for testing a complex `AlarmRule` structure, and for testing your alarm actions.
   *
   * Alarm names specified in `AlarmRule` can be surrounded with double-quotes ("), but do not have to be.
   *
   * The following are some examples of `AlarmRule`:
   *
   * - `ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)` specifies that the composite alarm goes into ALARM state only if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.
   * - `ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)` specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state and DeploymentInProgress is not in ALARM state. This example reduces alarm noise during a known deployment window.
   * - `(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)` goes into ALARM state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state. This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an alarm action on high CPU or disk usage if a known network problem is also occurring.
   *
   * The `AlarmRule` can specify as many as 100 "children" alarms. The `AlarmRule` expression can have as many as 500 elements. Elements are child alarms, TRUE or FALSE statements, and parentheses.
   *
   * @public
   */
  AlarmRule: string | undefined;

  /**
   * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * Valid Values: ]
   *
   * **Amazon SNS actions:**
   *
   * `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to an `OK` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * Valid Values: ]
   *
   * **Amazon SNS actions:**
   *
   * `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * @public
   */
  OKActions?: string[] | undefined;

  /**
   * A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html) or [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Actions will be suppressed if the suppressor alarm is in the `ALARM` state. `ActionsSuppressor` can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
   *
   * @public
   */
  ActionsSuppressor?: string | undefined;

  /**
   * The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state. After this time, the composite alarm performs its actions.
   *
   * > **Important:** `WaitPeriod` is required only when `ActionsSuppressor` is specified.
   *
   * @public
   */
  ActionsSuppressorWaitPeriod?: number | undefined;

  /**
   * The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state. After this time, the composite alarm performs its actions.
   *
   * > **Important:** `ExtensionPeriod` is required only when `ActionsSuppressor` is specified.
   *
   * @public
   */
  ActionsSuppressorExtensionPeriod?: number | undefined;

  /**
   * Settings that change the content of the notifications and events that the alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
   *
   * @public
   */
  ActionConfiguration?: ActionConfiguration | undefined;
}

/**
 * @public
 */
export interface PutDashboardInput {
  /**
   * The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required.
   *
   * @public
   */
  DashboardName: string | undefined;

  /**
   * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.
   *
   * For more information about the syntax, see [Dashboard Body Structure and Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Dashboard-Body-Structure.html).
   *
   * @public
   */
  DashboardBody: string | undefined;

  /**
   * A list of key-value pairs to associate with the dashboard. You can associate as many as 50 tags with a dashboard.
   *
   * Tags can help you organize and categorize your dashboards. You can also use them to scope user permissions by granting a user permission to access or change only dashboards with certain tag values.
   *
   * You can use this parameter only when creating a new dashboard. If you specify `Tags` when updating an existing dashboard, the tag updates are ignored. To add or update tags on an existing dashboard, use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html). To remove tags, use [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutDashboardOutput {
  /**
   * If the input for `PutDashboard` was correct and the dashboard was successfully created or modified, this result is empty.
   *
   * If this result includes only warning messages, then the input was valid enough for the dashboard to be created or modified, but some elements of the dashboard might not render.
   *
   * If this result includes error messages, the input was not valid and the operation failed.
   *
   * @public
   */
  DashboardValidationMessages?: DashboardValidationMessage[] | undefined;
}

/**
 * @public
 */
export interface PutInsightRuleInput {
  /**
   * A unique name for the rule.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The state of the rule. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  RuleState?: string | undefined;

  /**
   * The definition of the rule, as a JSON object. For details on the valid syntax, see [Contributor Insights Rule Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html).
   *
   * @public
   */
  RuleDefinition: string | undefined;

  /**
   * A list of key-value pairs to associate with the Contributor Insights rule. You can associate as many as 50 tags with a rule.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.
   *
   * To be able to associate tags with a rule, you must have the `cloudwatch:TagResource` permission in addition to the `cloudwatch:PutInsightRule` permission.
   *
   * If you are using this operation to update an existing Contributor Insights rule, any tags you specify in this parameter are ignored. To change the tags of an existing rule, use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specify `true` to have this rule evaluate log events after they have been transformed by [Log transformation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html). If you specify `true`, then the log events in log groups that have transformers will be evaluated by Contributor Insights after being transformed. Log groups that don't have transformers will still have their original log events evaluated by Contributor Insights.
   *
   * The default is `false`
   *
   * > **Note:** If a log group has a transformer, and transformation fails for some log events, those log events won't be evaluated by Contributor Insights. For information about investigating log transformation failures, see [Transformation metrics and errors](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Transformation-Errors-Metrics.html).
   *
   * @public
   */
  ApplyOnTransformedLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface PutInsightRuleOutput {}

/**
 * @public
 */
export interface PutLogAlarmInput {
  /**
   * The name for the alarm. This name must be unique within the Amazon Web Services account and Region.
   *
   * @public
   */
  AlarmName: string | undefined;

  /**
   * The description for the alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * The configuration of the underlying CloudWatch Logs scheduled query that this alarm evaluates, including the query string, log groups, schedule, and aggregation expression.
   *
   * @public
   */
  ScheduledQueryConfiguration: ScheduledQueryConfiguration | undefined;

  /**
   * The number of log lines from the most recent scheduled query execution to include in alarm action notifications. Valid range is 0 through 50. The default is 0, which means no log lines are included.
   *
   * @public
   */
  ActionLogLineCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudWatch assumes to retrieve log events for inclusion in alarm action notifications. Required when `ActionLogLineCount` is greater than 0.
   *
   * @public
   */
  ActionLogLineRoleArn?: string | undefined;

  /**
   * Indicates whether actions should be executed during any changes to the alarm state. The default is `true`.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The actions to execute when this alarm transitions to the `OK` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * Valid Values:
   *
   * **Amazon SNS actions:**
   *
   * `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * @public
   */
  OKActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * Valid Values:
   *
   * **Amazon SNS actions:**
   *
   * `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * **Systems Manager actions:**
   *
   * `arn:aws:ssm:region:account-id:opsitem:severity`
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   *
   * Valid Values:
   *
   * **Amazon SNS actions:**
   *
   * `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The number of most recent scheduled query results to evaluate against the threshold (the N in M-of-N evaluation). Valid range is 1 through 100.
   *
   * @public
   */
  QueryResultsToEvaluate: number | undefined;

  /**
   * The number of query results, out of the most recent `QueryResultsToEvaluate` results, that must breach the threshold to trigger the alarm to transition to `ALARM` (the M in M-of-N evaluation). Must be less than or equal to `QueryResultsToEvaluate`.
   *
   * @public
   */
  QueryResultsToAlarm: number | undefined;

  /**
   * The value to compare with the aggregated query result.
   *
   * @public
   */
  Threshold: number | undefined;

  /**
   * The arithmetic operation to use when comparing the aggregated query result and the threshold. The aggregated query result is used as the first operand. Valid values are `GreaterThanThreshold`, `GreaterThanOrEqualToThreshold`, `LessThanThreshold`, and `LessThanOrEqualToThreshold`.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * Sets how this alarm is to handle missing data points. Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. If this parameter is omitted, the default behavior of `missing` is used.
   *
   * @public
   */
  TreatMissingData?: string | undefined;

  /**
   * A list of key-value pairs to associate with the alarm. You can use tags to categorize and manage your alarms.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The warm-up configuration for the alarm. A warm-up period delays alarm evaluation after you create or update the alarm. The warm-up period reduces alarm noise from missing data while a new resource or service starts publishing data.
   *
   * For more information, see [Alarm warm-up periods](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-warm-up.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  WarmUpConfiguration?: WarmUpConfiguration | undefined;

  /**
   * Settings that change the content of the notifications and events that the alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
   *
   * @public
   */
  ActionConfiguration?: ActionConfiguration | undefined;
}

/**
 * Contains the information that's required to enable a managed Contributor Insights rule for an Amazon Web Services resource.
 *
 * @public
 */
export interface ManagedRule {
  /**
   * The template name for the managed Contributor Insights rule, as returned by `ListManagedInsightRules`.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The ARN of an Amazon Web Services resource that has managed Contributor Insights rules.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of key-value pairs that you can associate with a managed Contributor Insights rule. You can associate as many as 50 tags with a rule. Tags can help you organize and categorize your resources. You also can use them to scope user permissions by granting a user permission to access or change only the resources that have certain tag values. To associate tags with a rule, you must have the `cloudwatch:TagResource` permission in addition to the `cloudwatch:PutInsightRule` permission. If you are using this operation to update an existing Contributor Insights rule, any tags that you specify in this parameter are ignored. To change the tags of an existing rule, use `TagResource`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutManagedInsightRulesInput {
  /**
   * A list of `ManagedRules` to enable.
   *
   * @public
   */
  ManagedRules: ManagedRule[] | undefined;
}

/**
 * @public
 */
export interface PutManagedInsightRulesOutput {
  /**
   * An array that lists the rules that could not be enabled.
   *
   * @public
   */
  Failures?: PartialFailure[] | undefined;
}

/**
 * @public
 */
export interface PutMetricAlarmInput {
  /**
   * The name for the alarm. This name must be unique within the Region.
   *
   * The name must contain only UTF-8 characters, and can't contain ASCII control characters
   *
   * @public
   */
  AlarmName: string | undefined;

  /**
   * The description for the alarm.
   *
   * @public
   */
  AlarmDescription?: string | undefined;

  /**
   * Indicates whether actions should be executed during any changes to the alarm state. The default is `TRUE`.
   *
   * @public
   */
  ActionsEnabled?: boolean | undefined;

  /**
   * The actions to execute when this alarm transitions to an `OK` state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:
   *
   * **EC2 actions:**
   *
   * - `arn:aws:automate:region:ec2:stop`
   * - `arn:aws:automate:region:ec2:terminate`
   * - `arn:aws:automate:region:ec2:reboot`
   * - `arn:aws:automate:region:ec2:recover`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0`
   *
   * **Autoscaling action:**
   *
   * - `arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * **SNS notification action:**
   *
   * - `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **SSM integration actions:**
   *
   * - `arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name`
   * - `arn:aws:ssm-incidents::account-id:responseplan/response-plan-name`
   *
   * @public
   */
  OKActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:
   *
   * **EC2 actions:**
   *
   * - `arn:aws:automate:region:ec2:stop`
   * - `arn:aws:automate:region:ec2:terminate`
   * - `arn:aws:automate:region:ec2:reboot`
   * - `arn:aws:automate:region:ec2:recover`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0`
   *
   * **Autoscaling action:**
   *
   * - `arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * **SNS notification action:**
   *
   * - `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **SSM integration actions:**
   *
   * - `arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name`
   * - `arn:aws:ssm-incidents::account-id:responseplan/response-plan-name`
   *
   * **Start a Amazon Q Developer operational investigation**
   *
   * `arn:aws:aiops:region:account-id:investigation-group:investigation-group-id`
   *
   * @public
   */
  AlarmActions?: string[] | undefined;

  /**
   * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:
   *
   * **EC2 actions:**
   *
   * - `arn:aws:automate:region:ec2:stop`
   * - `arn:aws:automate:region:ec2:terminate`
   * - `arn:aws:automate:region:ec2:reboot`
   * - `arn:aws:automate:region:ec2:recover`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0`
   * - `arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0`
   *
   * **Autoscaling action:**
   *
   * - `arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name`
   *
   * **Lambda actions:**
   *
   * - Invoke the latest version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name`
   * - Invoke a specific version of a Lambda function: `arn:aws:lambda:region:account-id:function:function-name:version-number`
   * - Invoke a function by using an alias Lambda function: `arn:aws:lambda:region:account-id:function:function-name:alias-name`
   *
   * **SNS notification action:**
   *
   * - `arn:aws:sns:region:account-id:sns-topic-name`
   *
   * **SSM integration actions:**
   *
   * - `arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name`
   * - `arn:aws:ssm-incidents::account-id:responseplan/response-plan-name`
   *
   * @public
   */
  InsufficientDataActions?: string[] | undefined;

  /**
   * The name for the metric associated with the alarm. For each `PutMetricAlarm` operation, you must specify either `MetricName`, a `Metrics` array, or an `EvaluationCriteria`.
   *
   * If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the `Namespace`, `Dimensions`, `Period`, `Unit`, `Statistic`, or `ExtendedStatistic` parameters. Instead, you specify all this information in the `Metrics` array.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace for the metric associated specified in `MetricName`.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The statistic for the metric specified in `MetricName`, other than percentile. For percentile statistics, use `ExtendedStatistic`. When you call `PutMetricAlarm` and specify a `MetricName`, you must specify either `Statistic` or `ExtendedStatistic,` but not both.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The extended statistic for the metric specified in `MetricName`. When you call `PutMetricAlarm` and specify a `MetricName`, you must specify either `Statistic` or `ExtendedStatistic` but not both.
   *
   * If you specify `ExtendedStatistic`, the following are valid values:
   *
   * - `p90`
   * - `tm90`
   * - `tc90`
   * - `ts90`
   * - `wm90`
   * - `IQM`
   * - `PR(n:m)` where n and m are values of the metric
   * - `TC(X%:X%)` where X is between 10 and 90 inclusive.
   * - `TM(X%:X%)` where X is between 10 and 90 inclusive.
   * - `TS(X%:X%)` where X is between 10 and 90 inclusive.
   * - `WM(X%:X%)` where X is between 10 and 90 inclusive.
   *
   * For more information about these extended statistics, see [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
   *
   * @public
   */
  ExtendedStatistic?: string | undefined;

  /**
   * The dimensions for the metric specified in `MetricName`.
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The length, in seconds, used each time the metric specified in `MetricName` is evaluated. Valid values are 10, 20, 30, and any multiple of 60.
   *
   * `Period` is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the `Metrics` array.
   *
   * Be sure to specify 10, 20, or 30 only for metrics that are stored by a `PutMetricData` call with a `StorageResolution` of 1. If you specify a period of 10, 20, or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm might often lapse into INSUFFICENT_DATA status. Specifying 10, 20, or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see [Amazon CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/).
   *
   * An alarm's total current evaluation period can be no longer than seven days, so `Period` multiplied by `EvaluationPeriods` can't be more than 604,800 seconds. For alarms with a period of less than one hour (3,600 seconds), the total evaluation period can't be longer than one day (86,400 seconds).
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately. If you are creating an alarm based on a metric math expression, you can specify the unit for each metric (if needed) within the objects in the `Metrics` array.
   *
   * If you don't specify `Unit`, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually, metrics are published with only one unit, so the alarm works as intended.
   *
   * However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and it behaves unpredictably.
   *
   * We recommend omitting `Unit` so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the `INSUFFICIENT DATA` state.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N.
   *
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * The value against which the specified statistic is compared.
   *
   * This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
   *
   * The values `LessThanLowerOrGreaterThanUpperThreshold`, `LessThanLowerThreshold`, and `GreaterThanUpperThreshold` are used only for alarms based on anomaly detection models.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * Sets how this alarm is to handle missing data points. If `TreatMissingData` is omitted, the default behavior of `missing` is used. For more information, see [Configuring How CloudWatch Alarms Treats Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data).
   *
   * Valid Values: `breaching | notBreaching | ignore | missing`
   *
   * > **Note:** Alarms that evaluate metrics in the `AWS/DynamoDB` namespace always `ignore` missing data even if you choose a different option for `TreatMissingData`. When an `AWS/DynamoDB` metric has missing data, alarms that evaluate that metric remain in their current state.
   *
   * > **Note:** This parameter is not applicable to PromQL alarms.
   *
   * @public
   */
  TreatMissingData?: string | undefined;

  /**
   * Used only for alarms based on percentiles. If you specify `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If you specify `evaluate` or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see [Percentile-Based CloudWatch Alarms and Low Data Samples](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples).
   *
   * Valid Values: `evaluate | ignore`
   *
   * @public
   */
  EvaluateLowSampleCountPercentile?: string | undefined;

  /**
   * An array of `MetricDataQuery` structures that enable you to create an alarm based on the result of a metric math expression. For each `PutMetricAlarm` operation, you must specify either `MetricName`, a `Metrics` array, or an `EvaluationCriteria`.
   *
   * Each item in the `Metrics` array either retrieves a metric or performs a math expression.
   *
   * One item in the `Metrics` array is the expression that the alarm watches. You designate this expression by setting `ReturnData` to true for this object in the array. For more information, see [MetricDataQuery](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html).
   *
   * If you use the `Metrics` parameter, you cannot include the `Namespace`, `MetricName`, `Dimensions`, `Period`, `Unit`, `Statistic`, or `ExtendedStatistic` parameters of `PutMetricAlarm` in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the `Metrics` array.
   *
   * @public
   */
  Metrics?: MetricDataQuery[] | undefined;

  /**
   * A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html) or [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html).
   *
   * To use this field to set tags for an alarm when you create it, you must be signed on with both the `cloudwatch:PutMetricAlarm` and `cloudwatch:TagResource` permissions.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If this is an alarm based on an anomaly detection model, make this value match the ID of the `ANOMALY_DETECTION_BAND` function.
   *
   * For an example of how to use this parameter, see the **Anomaly Detection Model Alarm** example on this page.
   *
   * If your alarm uses this parameter, it cannot have Auto Scaling actions.
   *
   * @public
   */
  ThresholdMetricId?: string | undefined;

  /**
   * The evaluation window that the alarm uses to select the range of metric data that it evaluates. Specify either a sliding window or a wall clock window. If you omit this parameter, the alarm uses a sliding window.
   *
   * A sliding window advances each time the alarm is evaluated, forming a rolling time window. A wall clock window aligns the evaluated range to fixed clock boundaries, such as the top of the hour or the start of the day.
   *
   * You can use `EvaluationWindow` with any type of metric alarm except alarms that are based on a PromQL query.
   *
   * For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.
   *
   * @public
   */
  EvaluationWindow?: EvaluationWindow | undefined;

  /**
   * The warm-up configuration for the alarm. A warm-up period delays alarm evaluation after you create or update the alarm. The warm-up period reduces alarm noise from missing data while a new resource or service starts publishing metrics.
   *
   * For more information, see [Alarm warm-up periods](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-warm-up.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  WarmUpConfiguration?: WarmUpConfiguration | undefined;

  /**
   * The evaluation criteria for the alarm. For each `PutMetricAlarm` operation, you must specify either `MetricName`, a `Metrics` array, or an `EvaluationCriteria`.
   *
   * If you use the `EvaluationCriteria` parameter, you cannot include the `Namespace`, `MetricName`, `Dimensions`, `Period`, `Unit`, `Statistic`, `ExtendedStatistic`, `Metrics`, `Threshold`, `ComparisonOperator`, `ThresholdMetricId`, `EvaluationPeriods`, or `DatapointsToAlarm` parameters of `PutMetricAlarm` in the same operation. Instead, all evaluation parameters are defined within this structure.
   *
   * For an example of how to use this parameter, see the **PromQL alarm** example on this page.
   *
   * @public
   */
  EvaluationCriteria?: EvaluationCriteria | undefined;

  /**
   * The frequency, in seconds, at which the alarm is evaluated. Valid values are 10, 20, 30, and any multiple of 60.
   *
   * This parameter is required for alarms that use `EvaluationCriteria`, and cannot be specified for alarms configured with `MetricName` or `Metrics`.
   *
   * @public
   */
  EvaluationInterval?: number | undefined;

  /**
   * Settings that change the content of the notifications and events that the alarm sends when its state changes. These settings apply to the alarm's actions, whichever state triggers them.
   *
   * @public
   */
  ActionConfiguration?: ActionConfiguration | undefined;
}

/**
 * @public
 */
export interface PutMetricDataInput {
  /**
   * The namespace for the metric data. You can use ASCII characters for the namespace, except for control characters which are not supported.
   *
   * To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with `AWS/`
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The data for the metrics. Use this parameter if your metrics do not contain associated entities. The array can include no more than 1000 metrics per call.
   *
   * The limit of metrics allowed, 1000, is the sum of both `EntityMetricData` and `MetricData` metrics.
   *
   * @public
   */
  MetricData?: MetricDatum[] | undefined;

  /**
   * Data for metrics that contain associated entity information. You can include up to two `EntityMetricData` objects, each of which can contain a single `Entity` and associated metrics.
   *
   * The limit of metrics allowed, 1000, is the sum of both `EntityMetricData` and `MetricData` metrics.
   *
   * @public
   */
  EntityMetricData?: EntityMetricData[] | undefined;

  /**
   * Whether to accept valid metric data when an invalid entity is sent.
   *
   * - When set to `true`: Any validation error (for entity or metric data) will fail the entire request, and no data will be ingested. The failed operation will return a 400 result with the error.
   * - When set to `false`: Validation errors in the entity will not associate the metric with the entity, but the metric data will still be accepted and ingested. Validation errors in the metric data will fail the entire request, and no data will be ingested.
   *
   *   In the case of an invalid entity, the operation will return a `200` status, but an additional response header will contain information about the validation errors. The new header, `X-Amzn-Failure-Message` is an enumeration of the following values:
   *
   *   - `InvalidEntity` - The provided entity is invalid.
   *   - `InvalidKeyAttributes` - The provided `KeyAttributes` of an entity is invalid.
   *   - `InvalidAttributes` - The provided `Attributes` of an entity is invalid.
   *   - `InvalidTypeValue` - The provided `Type` in the `KeyAttributes` of an entity is invalid.
   *   - `EntitySizeTooLarge` - The number of `EntityMetricData` objects allowed is 2.
   *   - `MissingRequiredFields` - There are missing required fields in the `KeyAttributes` for the provided `Type`.
   *
   *   For details of the requirements for specifying an entity, see [How to add related information to telemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html) in the *CloudWatch User Guide*.
   *
   * This parameter is *required* when `EntityMetricData` is included.
   *
   * @public
   */
  StrictEntityValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface PutMetricStreamInput {
  /**
   * If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region.
   *
   * If you are updating a metric stream, specify the name of that stream here.
   *
   * Valid characters are A-Z, a-z, 0-9, "-" and "_".
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here.
   *
   * You cannot include `IncludeFilters` and `ExcludeFilters` in the same operation.
   *
   * @public
   */
  IncludeFilters?: MetricStreamFilter[] | undefined;

  /**
   * If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here.
   *
   * You cannot include `ExcludeFilters` and `IncludeFilters` in the same operation.
   *
   * @public
   */
  ExcludeFilters?: MetricStreamFilter[] | undefined;

  /**
   * The ARN of the Amazon Kinesis Data Firehose delivery stream to use for this metric stream. This Amazon Kinesis Data Firehose delivery stream must already exist and must be in the same account as the metric stream.
   *
   * @public
   */
  FirehoseArn: string | undefined;

  /**
   * The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Data Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the following permissions:
   *
   * - firehose:PutRecord
   * - firehose:PutRecordBatch
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The output format for the stream. Valid values are `json`, `opentelemetry1.0`, and `opentelemetry0.7`. For more information about metric stream output formats, see [Metric streams output formats](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html).
   *
   * @public
   */
  OutputFormat: MetricStreamOutputFormat | undefined;

  /**
   * A list of key-value pairs to associate with the metric stream. You can associate as many as 50 tags with a metric stream.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * You can use this parameter only when you are creating a new metric stream. If you are using this operation to update an existing metric stream, any tags you specify in this parameter are ignored. To change the tags of an existing metric stream, use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html) or [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * By default, a metric stream always sends the `MAX`, `MIN`, `SUM`, and `SAMPLECOUNT` statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
   *
   * For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's `OutputFormat`. If the `OutputFormat` is `json`, you can stream any additional statistic that is supported by CloudWatch, listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html). If the `OutputFormat` is `opentelemetry1.0` or `opentelemetry0.7`, you can stream percentile statistics such as p95, p99.9, and so on.
   *
   * @public
   */
  StatisticsConfigurations?: MetricStreamStatisticsConfiguration[] | undefined;

  /**
   * If you are creating a metric stream in a monitoring account, specify `true` to include metrics from source accounts in the metric stream.
   *
   * @public
   */
  IncludeLinkedAccountsMetrics?: boolean | undefined;
}

/**
 * @public
 */
export interface PutMetricStreamOutput {
  /**
   * The ARN of the metric stream.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface SetAlarmStateInput {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName: string | undefined;

  /**
   * The value of the state.
   *
   * @public
   */
  StateValue: StateValue | undefined;

  /**
   * The reason that this alarm is set to this specific state, in text format.
   *
   * @public
   */
  StateReason: string | undefined;

  /**
   * The reason that this alarm is set to this specific state, in JSON format.
   *
   * For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.
   *
   * @public
   */
  StateReasonData?: string | undefined;
}

/**
 * @public
 */
export interface StartMetricStreamsInput {
  /**
   * The array of the names of metric streams to start streaming.
   *
   * This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will start streaming.
   *
   * @public
   */
  Names: string[] | undefined;
}

/**
 * @public
 */
export interface StartMetricStreamsOutput {}

/**
 * @public
 */
export interface StartOTelEnrichmentInput {
  /**
   * The metric namespaces, and the metric names, to enrich. If this parameter is omitted, every namespace that Amazon CloudWatch supports for enrichment is in scope.
   *
   * A maximum of 100 filters is allowed across `IncludeFilters` and `ExcludeFilters` combined.
   *
   * @public
   */
  IncludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The metric namespaces, and the metric names, to leave unenriched. If this parameter is omitted, nothing is excluded.
   *
   * Amazon CloudWatch applies `ExcludeFilters` after `IncludeFilters`, so a metric that both parameters match is not enriched.
   *
   * A maximum of 100 filters is allowed across `IncludeFilters` and `ExcludeFilters` combined.
   *
   * @public
   */
  ExcludeFilters?: OTelEnrichmentMetricSelector[] | undefined;
}

/**
 * @public
 */
export interface StartOTelEnrichmentOutput {
  /**
   * The include filters that are stored for the account.
   *
   * @public
   */
  IncludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The exclude filters that are stored for the account.
   *
   * @public
   */
  ExcludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The date and time that enrichment started for the account.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the enrichment configuration for the account was last stored.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StopMetricStreamsInput {
  /**
   * The array of the names of metric streams to stop streaming.
   *
   * This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will stop streaming.
   *
   * @public
   */
  Names: string[] | undefined;
}

/**
 * @public
 */
export interface StopMetricStreamsOutput {}

/**
 * @public
 */
export interface StopOTelEnrichmentInput {}

/**
 * @public
 */
export interface StopOTelEnrichmentOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the CloudWatch resource that you're adding tags to.
   *
   * The ARN format of an alarm is `arn:aws:cloudwatch:Region:account-id:alarm:alarm-name`
   *
   * The ARN format of a Contributor Insights rule is `arn:aws:cloudwatch:Region:account-id:insight-rule/insight-rule-name`
   *
   * The ARN format of a dashboard is `arn:aws:cloudwatch::account-id:dashboard/dashboard-name`
   *
   * The ARN format of a metric stream is `arn:aws:cloudwatch:Region:account-id:metric-stream/metric-stream-name`
   *
   * For more information about ARN format, see [Resource Types Defined by Amazon CloudWatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of key-value pairs to associate with the alarm.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the CloudWatch resource that you're removing tags from.
   *
   * The ARN format of an alarm is `arn:aws:cloudwatch:Region:account-id:alarm:alarm-name`
   *
   * The ARN format of a Contributor Insights rule is `arn:aws:cloudwatch:Region:account-id:insight-rule/insight-rule-name`
   *
   * The ARN format of a dashboard is `arn:aws:cloudwatch::account-id:dashboard/dashboard-name`
   *
   * The ARN format of a metric stream is `arn:aws:cloudwatch:Region:account-id:metric-stream/metric-stream-name`
   *
   * For more information about ARN format, see [Resource Types Defined by Amazon CloudWatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateOTelEnrichmentInput {
  /**
   * The metric namespaces, and the metric names, to enrich. If this parameter is omitted, every namespace that Amazon CloudWatch supports for enrichment is in scope.
   *
   * A maximum of 100 filters is allowed across `IncludeFilters` and `ExcludeFilters` combined.
   *
   * @public
   */
  IncludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The metric namespaces, and the metric names, to leave unenriched. If this parameter is omitted, nothing is excluded.
   *
   * Amazon CloudWatch applies `ExcludeFilters` after `IncludeFilters`, so a metric that both parameters match is not enriched.
   *
   * A maximum of 100 filters is allowed across `IncludeFilters` and `ExcludeFilters` combined.
   *
   * @public
   */
  ExcludeFilters?: OTelEnrichmentMetricSelector[] | undefined;
}

/**
 * @public
 */
export interface UpdateOTelEnrichmentOutput {
  /**
   * The include filters that are stored for the account after the replacement. This parameter is omitted when the request cleared the include filters, which means that every supported namespace is in scope.
   *
   * @public
   */
  IncludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The exclude filters that are stored for the account after the replacement. This parameter is omitted when the request cleared the exclude filters, which means that nothing is excluded.
   *
   * @public
   */
  ExcludeFilters?: OTelEnrichmentMetricSelector[] | undefined;

  /**
   * The date and time that enrichment started for the account.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the enrichment configuration for the account was last stored.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Specifies the resource ARN and optional replacement metric selections for an `UpdateResourceMetricsConfiguration` request.
 *
 * @public
 */
export interface UpdateResourceMetricsConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource to update the resource metrics configuration for.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies which metrics Amazon CloudWatch collects for the resource. The selections that you provide completely replace any existing metric selections.
   *
   * If you omit this parameter, Amazon CloudWatch removes any existing metric selection filter and collects all available detailed metrics for the resource.
   *
   * @public
   */
  MetricSelections?: ResourceMetricSelection[] | undefined;
}

/**
 * Returns the updated resource metrics configuration.
 *
 * @public
 */
export interface UpdateResourceMetricsConfigurationOutput {
  /**
   * The resource metrics configuration after the update was applied.
   *
   * @public
   */
  ResourceMetricsConfiguration: ResourceMetricsConfiguration | undefined;
}
