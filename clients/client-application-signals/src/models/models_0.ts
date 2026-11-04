// smithy-typescript generated code
import type {
  BatchDeleteErrorCode,
  ChangeEventType,
  ConnectionType,
  DetailLevel,
  DurationUnit,
  DynamicInstrumentationDeletionStatus,
  DynamicInstrumentationSignalType,
  EvaluationType,
  InstrumentationConfigurationStatus,
  InstrumentationErrorCause,
  InstrumentationType,
  MetricSourceType,
  ProgrammingLanguage,
  SelectionType,
  ServiceLevelIndicatorComparisonOperator,
  ServiceLevelIndicatorMetricType,
  ServiceLevelObjectiveBudgetStatus,
  Severity,
  StandardUnit,
  UnprocessedStatusEventFailureReason,
} from "./enums";

/**
 * Parameters for targeted delete by ARN list.
 * @public
 */
export interface BatchDeleteByResourceArns {
  /**
   * List of resource ARNs to delete.
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * Instrumentation type: BREAKPOINT or PROBE.
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;
}

/**
 * Scope parameters for bulk delete by scope.
 * @public
 */
export interface BatchDeleteScope {
  /**
   * Service name for the instrumentation configurations.
   * @public
   */
  Service: string | undefined;

  /**
   * Environment identifier for the instrumentation configurations.
   * @public
   */
  Environment: string | undefined;

  /**
   * Instrumentation type: BREAKPOINT or PROBE.
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;
}

/**
 * Union type for batch delete target selection.
 * Exactly one of the two modes must be specified.
 * @public
 */
export type BatchDeleteDeletionTarget =
  | BatchDeleteDeletionTarget.ResourceArnsMember
  | BatchDeleteDeletionTarget.ScopeMember
  | BatchDeleteDeletionTarget.$UnknownMember;

/**
 * @public
 */
export namespace BatchDeleteDeletionTarget {
  /**
   * Delete all configurations matching the specified scope.
   * @public
   */
  export interface ScopeMember {
    Scope: BatchDeleteScope;
    ResourceArns?: never;
    $unknown?: never;
  }

  /**
   * Delete specific configurations by ARN list.
   * @public
   */
  export interface ResourceArnsMember {
    Scope?: never;
    ResourceArns: BatchDeleteByResourceArns;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Scope?: never;
    ResourceArns?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Scope: (value: BatchDeleteScope) => T;
    ResourceArns: (value: BatchDeleteByResourceArns) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface BatchDeleteInstrumentationConfigurationsRequest {
  /**
   * The deletion target - either bulk by scope or targeted by ARN list.
   * @public
   */
  DeletionTarget: BatchDeleteDeletionTarget | undefined;
}

/**
 * Represents an error that occurred when attempting to delete a configuration.
 * @public
 */
export interface BatchDeleteError {
  /**
   * ARN of the configuration that failed to delete.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Error code indicating the type of failure.
   * @public
   */
  Code: BatchDeleteErrorCode | undefined;

  /**
   * Descriptive error message.
   * @public
   */
  Message: string | undefined;
}

/**
 * Represents a successfully deleted instrumentation configuration.
 * @public
 */
export interface BatchDeleteSuccessfulDeletion {
  /**
   * ARN of the deleted configuration (populated only when deleting by ARN list).
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Signal type of the deleted configuration (populated only when deleting by scope).
   * @public
   */
  SignalType?: string | undefined;

  /**
   * Location hash of the deleted configuration (populated only when deleting by scope).
   * @public
   */
  LocationHash?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteInstrumentationConfigurationsResponse {
  /**
   * Number of configurations successfully deleted.
   * When deleting by scope, this is the total count of deleted items.
   * When deleting by ARN list, this equals the length of SuccessfulDeletions.
   * @public
   */
  DeletedCount: number | undefined;

  /**
   * List of successfully deleted configurations.
   * Deleting by scope populates SignalType and LocationHash per item.
   * Deleting by ARN list populates ResourceArn per item.
   * @public
   */
  SuccessfulDeletions: BatchDeleteSuccessfulDeletion[] | undefined;

  /**
   * List of configurations that failed to delete.
   * @public
   */
  Errors: BatchDeleteError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetServiceLevelObjectiveBudgetReportInput {
  /**
   * The date and time that you want the report to be for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * An array containing the IDs of the service level objectives that you want to include in the report.
   *
   * @public
   */
  SloIds: string[] | undefined;
}

/**
 * A structure containing information about one error that occurred during a [BatchGetServiceLevelObjectiveBudgetReport](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_BatchGetServiceLevelObjectiveBudgetReport.html) operation.
 *
 * @public
 */
export interface ServiceLevelObjectiveBudgetReportError {
  /**
   * The name of the SLO that this error is related to.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the SLO that this error is related to.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The error code for this error.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The message for this error.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
 *
 * @public
 */
export interface CalendarInterval {
  /**
   * The date and time when you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
   *
   * When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * As soon as one calendar interval ends, another automatically begins.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * Specifies the calendar interval unit.
   *
   * @public
   */
  DurationUnit: DurationUnit | undefined;

  /**
   * Specifies the duration of each calendar interval. For example, if `Duration` is `1` and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * If the interval for this SLO is a rolling interval, this structure contains the interval specifications.
 *
 * @public
 */
export interface RollingInterval {
  /**
   * Specifies the rolling interval unit.
   *
   * @public
   */
  DurationUnit: DurationUnit | undefined;

  /**
   * Specifies the duration of each rolling interval. For example, if `Duration` is `7` and `DurationUnit` is `DAY`, each rolling interval is seven days.
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
 *
 * @public
 */
export type Interval =
  | Interval.CalendarIntervalMember
  | Interval.RollingIntervalMember
  | Interval.$UnknownMember;

/**
 * @public
 */
export namespace Interval {
  /**
   * If the interval is a rolling interval, this structure contains the interval specifications.
   *
   * @public
   */
  export interface RollingIntervalMember {
    RollingInterval: RollingInterval;
    CalendarInterval?: never;
    $unknown?: never;
  }

  /**
   * If the interval is a calendar interval, this structure contains the interval specifications.
   *
   * @public
   */
  export interface CalendarIntervalMember {
    RollingInterval?: never;
    CalendarInterval: CalendarInterval;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RollingInterval?: never;
    CalendarInterval?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RollingInterval: (value: RollingInterval) => T;
    CalendarInterval: (value: CalendarInterval) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * This structure contains the attributes that determine the goal of an SLO. This includes the time period for evaluation and the attainment threshold.
 *
 * @public
 */
export interface Goal {
  /**
   * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
   *
   * If you omit this parameter, a rolling interval of 7 days is used.
   *
   * @public
   */
  Interval?: Interval | undefined;

  /**
   * The threshold that determines if the goal is being met.
   *
   * If this is a period-based SLO, the attainment goal is the percentage of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
   *
   * If this is a request-based SLO, the attainment goal is the percentage of requests that must be successful to meet the attainment goal.
   *
   * If you omit this parameter, 99 is used to represent 99% as the attainment goal.
   *
   * @public
   */
  AttainmentGoal?: number | undefined;

  /**
   * The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.
   *
   * @public
   */
  WarningThreshold?: number | undefined;
}

/**
 * Identifies a single operation to include in a composite SLI for a service-level SLO. Used as an element of the `Components` list in `CompositeSliConfig`.
 *
 * @public
 */
export type CompositeSliComponent =
  | CompositeSliComponent.OperationNameMember
  | CompositeSliComponent.$UnknownMember;

/**
 * @public
 */
export namespace CompositeSliComponent {
  /**
   * The name of the operation to include in the composite SLI.
   *
   * @public
   */
  export interface OperationNameMember {
    OperationName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OperationName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    OperationName: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines how operations are selected for a service-level SLO.
 *
 * @public
 */
export interface SelectionConfig {
  /**
   * The strategy for selecting operations to include in a service-level SLO.
   *
   * - `EXPLICIT` — You provide a specific list of operations in the `Components` field of `CompositeSliConfig`.
   * - `PREFIX` — You provide a prefix string in the `Pattern` field of `SelectionConfig`, and all operations whose names start with the prefix are included.
   * - `REGEX` — You provide a regular expression in the `Pattern` field of `SelectionConfig`, and all operations whose names match the pattern are included.
   *
   * @public
   */
  Type: SelectionType | undefined;

  /**
   * A prefix string or regular expression that specifies which operations to include in a service-level SLO. When `SelectionType` is `PREFIX`, this value is a prefix string that matches the beginning of operation names. When `SelectionType` is `REGEX`, this value is a regular expression that matches operation names.
   *
   * @public
   */
  Pattern?: string | undefined;
}

/**
 * This structure contains the configuration for a composite service level indicator (SLI) that aggregates metrics across multiple operations of a service for service-level SLOs.
 *
 * @public
 */
export interface CompositeSliConfig {
  /**
   * Specifies how operations are selected for this service-level SLO. Operations can be selected explicitly by listing them, by specifying a prefix to match operation names, or by providing a regular expression pattern.
   *
   * @public
   */
  SelectionConfig: SelectionConfig | undefined;

  /**
   * The list of operations included in this composite SLI. You must specify between 2 and 20 components. Each component is a `CompositeSliComponent` that identifies a single operation by its `OperationName`.
   *
   * @public
   */
  Components?: CompositeSliComponent[] | undefined;
}

/**
 * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
 *
 * When creating a service dependency SLO, you must specify the `KeyAttributes` of the service, and the `DependencyConfig` for the dependency. You can specify the `OperationName` of the service, from which it calls the dependency. Alternatively, you can exclude `OperationName` and the SLO will monitor all of the service's operations that call the dependency.
 *
 * @public
 */
export interface DependencyConfig {
  /**
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  DependencyKeyAttributes: Record<string, string> | undefined;

  /**
   * The name of the called operation in the dependency.
   *
   * @public
   */
  DependencyOperationName: string | undefined;
}

/**
 * Identifies the metric source for SLOs on resources other than Application Signals services.
 *
 * @public
 */
export interface MetricSource {
  /**
   * Key attributes that identify the metric source.
   *
   * @public
   */
  MetricSourceKeyAttributes: Record<string, string> | undefined;

  /**
   * Additional attributes for the metric source.
   *
   * @public
   */
  MetricSourceAttributes?: Record<string, string> | undefined;
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
 * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions
 *
 * @public
 */
export interface Metric {
  /**
   * The namespace of the metric. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the metric to use.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * An array of one or more dimensions to use to define the metric that you want to use. For more information, see [Dimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension).
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;
}

/**
 * This structure defines the metric to be used as the service level indicator, along with the statistics, period, and unit.
 *
 * @public
 */
export interface MetricStat {
  /**
   * The metric to use as the service level indicator, including the metric name, namespace, and dimensions.
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * The granularity, in seconds, to be used for the metric. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
   *
   * @public
   */
  Period: number | undefined;

  /**
   * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic. For more information about statistics, see [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
   *
   * @public
   */
  Stat: string | undefined;

  /**
   * If you omit `Unit` then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
   *
   * @public
   */
  Unit?: StandardUnit | undefined;
}

/**
 * Use this structure to define a metric or metric math expression that you want to use as for a service level objective.
 *
 * Each `MetricDataQuery` in the `MetricDataQueries` array specifies either a metric to retrieve, or a metric math expression to be performed on retrieved metrics. A single `MetricDataQueries` array can include as many as 20 `MetricDataQuery` structures in the array. The 20 structures can include as many as 10 structures that contain a `MetricStat` parameter to retrieve a metric, and as many as 10 structures that contain the `Expression` parameter to perform a math expression. Of those `Expression` structures, exactly one must have true as the value for `ReturnData`. The result of this expression used for the SLO.
 *
 * For more information about metric math expressions, see [CloudWatchUse metric math](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html).
 *
 * Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` but not both.
 *
 * @public
 */
export interface MetricDataQuery {
  /**
   * A short name used to tie this object to the results in the response. This `Id` must be unique within a `MetricDataQueries` array. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the metric math expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO.
   *
   * Within one `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` but not both.
   *
   * @public
   */
  MetricStat?: MetricStat | undefined;

  /**
   * This field can contain a metric math expression to be performed on the other metrics that you are retrieving within this `MetricDataQueries` structure.
   *
   * A math expression can use the `Id` of the other metrics or queries to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide*.
   *
   * Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` but not both.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If `Label` is omitted, CloudWatch generates a default.
   *
   * You can put dynamic expressions into a label, so that it is more descriptive. For more information, see [Using Dynamic Labels](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html).
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Use this only if you are using a metric math expression for the SLO. Specify `true` for `ReturnData` for only the one expression result to use as the alarm. For all other metrics and expressions in the same `CreateServiceLevelObjective` operation, specify `ReturnData` as `false`.
   *
   * @public
   */
  ReturnData?: boolean | undefined;

  /**
   * The granularity, in seconds, of the returned data points for this metric. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
   *
   * If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
   *
   * - Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
   * - Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
   * - Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The ID of the account where this metric is located. If you are performing this operation in a monitoring account, use this to specify which source account to retrieve this metric from.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in `TotalRequestCountMetric` is divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
 *
 * @public
 */
export type MonitoredRequestCountMetricDataQueries =
  | MonitoredRequestCountMetricDataQueries.BadCountMetricMember
  | MonitoredRequestCountMetricDataQueries.GoodCountMetricMember
  | MonitoredRequestCountMetricDataQueries.$UnknownMember;

/**
 * @public
 */
export namespace MonitoredRequestCountMetricDataQueries {
  /**
   * If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.
   *
   * @public
   */
  export interface GoodCountMetricMember {
    GoodCountMetric: MetricDataQuery[];
    BadCountMetric?: never;
    $unknown?: never;
  }

  /**
   * If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
   *
   * @public
   */
  export interface BadCountMetricMember {
    GoodCountMetric?: never;
    BadCountMetric: MetricDataQuery[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    GoodCountMetric?: never;
    BadCountMetric?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    GoodCountMetric: (value: MetricDataQuery[]) => T;
    BadCountMetric: (value: MetricDataQuery[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * This structure contains the information about the metric that is used for a request-based SLO.
 *
 * @public
 */
export interface RequestBasedServiceLevelIndicatorMetric {
  /**
   * This is a string-to-string map that contains information about the type of object that this SLO is related to. It can include the following fields.
   *
   * - `Type` designates the type of object that this SLO is related to.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * If the SLO monitors a specific operation of the service, this field displays that operation name.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * If the SLO monitors either the `LATENCY` or `AVAILABILITY` metric that Application Signals collects, this field displays which of those metrics is used.
   *
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric`.
   *
   * @public
   */
  TotalRequestCountMetric: MetricDataQuery[] | undefined;

  /**
   * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in `TotalRequestCountMetric` is divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
   *
   * @public
   */
  MonitoredRequestCountMetric: MonitoredRequestCountMetricDataQueries | undefined;

  /**
   * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
   *
   * @public
   */
  DependencyConfig?: DependencyConfig | undefined;

  /**
   * Identifies the metric source for SLOs on resources other than Application Signals services.
   *
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * The composite SLI configuration for service-level SLOs that monitor multiple operations of a service.
   *
   * @public
   */
  CompositeSliConfig?: CompositeSliConfig | undefined;
}

/**
 * This structure contains information about the performance metric that a request-based SLO monitors.
 *
 * @public
 */
export interface RequestBasedServiceLevelIndicator {
  /**
   * A structure that contains information about the metric that the SLO monitors.
   *
   * @public
   */
  RequestBasedSliMetric: RequestBasedServiceLevelIndicatorMetric | undefined;

  /**
   * This value is the threshold that the observed metric values of the SLI metric are compared to.
   *
   * @public
   */
  MetricThreshold?: number | undefined;

  /**
   * The arithmetic operation used when comparing the specified metric to the threshold.
   *
   * @public
   */
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * This structure contains the information about the metric that is used for a period-based SLO.
 *
 * @public
 */
export interface ServiceLevelIndicatorMetric {
  /**
   * This is a string-to-string map that contains information about the type of object that this SLO is related to. It can include the following fields.
   *
   * - `Type` designates the type of object that this SLO is related to.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * If the SLO monitors a specific operation of the service, this field displays that operation name.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * If the SLO monitors either the `LATENCY` or `AVAILABILITY` metric that Application Signals collects, this field displays which of those metrics is used.
   *
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression.
   *
   * @public
   */
  MetricDataQueries: MetricDataQuery[] | undefined;

  /**
   * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
   *
   * @public
   */
  DependencyConfig?: DependencyConfig | undefined;

  /**
   * Identifies the metric source for SLOs on resources other than Application Signals services.
   *
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * The composite SLI configuration for service-level SLOs that monitor multiple operations of a service.
   *
   * @public
   */
  CompositeSliConfig?: CompositeSliConfig | undefined;
}

/**
 * This structure contains information about the performance metric that a period-based SLO monitors.
 *
 * @public
 */
export interface ServiceLevelIndicator {
  /**
   * A structure that contains information about the metric that the SLO monitors.
   *
   * @public
   */
  SliMetric: ServiceLevelIndicatorMetric | undefined;

  /**
   * The value that the SLI metric is compared to.
   *
   * @public
   */
  MetricThreshold: number | undefined;

  /**
   * The arithmetic operation used when comparing the specified metric to the threshold.
   *
   * @public
   */
  ComparisonOperator: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * A structure containing an SLO budget report that you have requested.
 *
 * @public
 */
export interface ServiceLevelObjectiveBudgetReport {
  /**
   * The ARN of the SLO that this report is for.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the SLO that this report is for.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Displays whether this budget report is for a period-based SLO or a request-based SLO.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * The status of this SLO, as it relates to the error budget for the entire time interval.
   *
   * - `OK` means that the SLO had remaining budget above the warning threshold, as of the time that you specified in `TimeStamp`.
   * - `WARNING` means that the SLO's remaining budget was below the warning threshold, as of the time that you specified in `TimeStamp`.
   * - `BREACHED` means that the SLO's budget was exhausted, as of the time that you specified in `TimeStamp`.
   * - `INSUFFICIENT_DATA` means that the specified start and end times were before the SLO was created, or that attainment data is missing.
   *
   * @public
   */
  BudgetStatus: ServiceLevelObjectiveBudgetStatus | undefined;

  /**
   * A number between 0 and 100 that represents the success percentage of your application compared to the goal set by the SLO.
   *
   * If this is a period-based SLO, the number is the percentage of time periods that the service has attained the SLO's attainment goal, as of the time of the request.
   *
   * If this is a request-based SLO, the number is the number of successful requests divided by the number of total requests, multiplied by 100, during the time range that you specified in your request.
   *
   * @public
   */
  Attainment?: number | undefined;

  /**
   * The total number of seconds in the error budget for the interval. This field is included only if the SLO is a period-based SLO.
   *
   * @public
   */
  TotalBudgetSeconds?: number | undefined;

  /**
   * The budget amount remaining before the SLO status becomes `BREACHING`, at the time specified in the `Timestemp` parameter of the request. If this value is negative, then the SLO is already in `BREACHING` status.
   *
   * This field is included only if the SLO is a period-based SLO.
   *
   * @public
   */
  BudgetSecondsRemaining?: number | undefined;

  /**
   * This field is displayed only for request-based SLOs. It displays the total number of failed requests that can be tolerated during the time range between the start of the interval and the time stamp supplied in the budget report request. It is based on the total number of requests that occurred, and the percentage specified in the attainment goal. If the number of failed requests matches this number or is higher, then this SLO is currently breaching.
   *
   * This number can go up and down between reports with different time stamps, based on both how many total requests occur.
   *
   * @public
   */
  TotalBudgetRequests?: number | undefined;

  /**
   * This field is displayed only for request-based SLOs. It displays the number of failed requests that can be tolerated before any more successful requests occur, and still have the application meet its SLO goal.
   *
   * This number can go up and down between different reports, based on both how many successful requests and how many failed requests occur in that time.
   *
   * @public
   */
  BudgetRequestsRemaining?: number | undefined;

  /**
   * A structure that contains information about the performance metric that this SLO monitors.
   *
   * @public
   */
  Sli?: ServiceLevelIndicator | undefined;

  /**
   * This structure contains information about the performance metric that a request-based SLO monitors.
   *
   * @public
   */
  RequestBasedSli?: RequestBasedServiceLevelIndicator | undefined;

  /**
   * This structure contains the attributes that determine the goal of an SLO. This includes the time period for evaluation and the attainment threshold.
   *
   * @public
   */
  Goal?: Goal | undefined;
}

/**
 * @public
 */
export interface BatchGetServiceLevelObjectiveBudgetReportOutput {
  /**
   * The date and time that the report is for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * An array of structures, where each structure is one budget report.
   *
   * @public
   */
  Reports: ServiceLevelObjectiveBudgetReport[] | undefined;

  /**
   * An array of structures, where each structure includes an error indicating that one of the requests in the array was not valid.
   *
   * @public
   */
  Errors: ServiceLevelObjectiveBudgetReportError[] | undefined;
}

/**
 * The recurrence rule for the SLO time window exclusion .
 *
 * @public
 */
export interface RecurrenceRule {
  /**
   * A cron or rate expression that specifies the schedule for the exclusion window.
   *
   * @public
   */
  Expression: string | undefined;
}

/**
 * The object that defines the time length of an exclusion window.
 *
 * @public
 */
export interface Window {
  /**
   * The unit of time for the exclusion window duration. Valid values: MINUTE, HOUR, DAY, MONTH.
   *
   * @public
   */
  DurationUnit: DurationUnit | undefined;

  /**
   * The number of time units for the exclusion window length.
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * The core SLO time window exclusion object that includes Window, StartTime, RecurrenceRule, and Reason.
 *
 * @public
 */
export interface ExclusionWindow {
  /**
   * The SLO time window exclusion .
   *
   * @public
   */
  Window: Window | undefined;

  /**
   * The start of the SLO time window exclusion. Defaults to current time if not specified.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The recurrence rule for the SLO time window exclusion. Supports both cron and rate expressions.
   *
   * @public
   */
  RecurrenceRule?: RecurrenceRule | undefined;

  /**
   * A description explaining why this time period should be excluded from SLO calculations.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateExclusionWindowsInput {
  /**
   * The list of SLO IDs to add or remove exclusion windows from.
   *
   * @public
   */
  SloIds: string[] | undefined;

  /**
   * A list of exclusion windows to add to the specified SLOs. You can add up to 10 exclusion windows per SLO.
   *
   * @public
   */
  AddExclusionWindows?: ExclusionWindow[] | undefined;

  /**
   * A list of exclusion windows to remove from the specified SLOs. The window configuration must match an existing exclusion window.
   *
   * @public
   */
  RemoveExclusionWindows?: ExclusionWindow[] | undefined;
}

/**
 * An array of structures, where each structure includes an error indicating that one of the requests in the array was not valid.
 *
 * @public
 */
export interface BatchUpdateExclusionWindowsError {
  /**
   * The SLO ID in the error.
   *
   * @public
   */
  SloId: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateExclusionWindowsOutput {
  /**
   * The list of SLO IDs that were successfully processed.
   *
   * @public
   */
  SloIds: string[] | undefined;

  /**
   * A list of errors that occurred while processing the request.
   *
   * @public
   */
  Errors: BatchUpdateExclusionWindowsError[] | undefined;
}

/**
 * Guardrails that prevent instrumentation from impacting application performance by limiting how much data is captured.
 *
 * @public
 */
export interface CaptureLimitsConfig {
  /**
   * The maximum number of times the instrumentation point can be hit before it is automatically disabled. Defaults to 100.
   *
   * @public
   */
  MaxHits?: number | undefined;

  /**
   * The maximum length of captured string values in characters. Strings longer than this are truncated. Defaults to 128.
   *
   * @public
   */
  MaxStringLength?: number | undefined;

  /**
   * The maximum number of items to capture from any collection to prevent large payloads. Defaults to 10.
   *
   * @public
   */
  MaxCollectionWidth?: number | undefined;

  /**
   * The maximum nesting depth to traverse inside collections. Defaults to 3.
   *
   * @public
   */
  MaxCollectionDepth?: number | undefined;

  /**
   * The maximum number of stack frames to capture in stack traces. Defaults to 2.
   *
   * @public
   */
  MaxStackFrames?: number | undefined;

  /**
   * The maximum total size, in bytes, of a captured stack trace. Defaults to 1000.
   *
   * @public
   */
  MaxStackTraceSize?: number | undefined;

  /**
   * The maximum depth for nested object traversal when capturing structured data. Defaults to 3.
   *
   * @public
   */
  MaxObjectDepth?: number | undefined;

  /**
   * The maximum number of fields to capture for any object. Defaults to 10.
   *
   * @public
   */
  MaxFieldsPerObject?: number | undefined;
}

/**
 * Defines what data to capture for code-level instrumentation, including arguments, return values, stack traces, local variables, and safety limits.
 *
 * @public
 */
export interface CodeCaptureConfiguration {
  /**
   * The function arguments to capture. Omit to capture defaults, use an empty list to capture none, use `["*"]` to capture all arguments, or specify argument names to capture selectively (up to 10 entries).
   *
   * @public
   */
  CaptureArguments?: string[] | undefined;

  /**
   * Whether to capture the return value. Defaults to false.
   *
   * @public
   */
  CaptureReturn?: boolean | undefined;

  /**
   * Whether to capture a stack trace when the instrumentation point is hit. Defaults to true.
   *
   * @public
   */
  CaptureStackTrace?: boolean | undefined;

  /**
   * The local variables to capture by name. Omit or pass an empty list to capture none. You can specify up to 20 names.
   *
   * @public
   */
  CaptureLocals?: string[] | undefined;

  /**
   * Safety limits that bound what is captured, including hit counts, string length, collection depth, and stack trace size.
   *
   * @public
   */
  CaptureLimits: CaptureLimitsConfig | undefined;
}

/**
 * A union that defines what data to capture when the instrumentation point is hit. Specify `CodeCapture` for code-level capture settings.
 *
 * @public
 */
export type CaptureConfiguration =
  | CaptureConfiguration.CodeCaptureMember
  | CaptureConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CaptureConfiguration {
  /**
   * Capture settings for code-level instrumentation, including arguments, return values, stack traces, local variables, and safety limits.
   *
   * @public
   */
  export interface CodeCaptureMember {
    CodeCapture: CodeCaptureConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CodeCapture?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CodeCapture: (value: CodeCaptureConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Identifies a code location to instrument, including the programming language, code unit, class, method, file path, and optional line number.
 *
 * @public
 */
export interface CodeLocation {
  /**
   * The programming language for this instrumentation point, such as Java, Python, or JavaScript.
   *
   * @public
   */
  Language: ProgrammingLanguage | undefined;

  /**
   * The package, module, or namespace that contains the target code, for example `com.amazon.payment` or `payment_service`.
   *
   * @public
   */
  CodeUnit?: string | undefined;

  /**
   * The class or type name that contains the method. This is required for Java and optional for Python module-level functions.
   *
   * @public
   */
  ClassName?: string | undefined;

  /**
   * The method or function name to instrument, such as `validateCreditCard` or `__init__`.
   *
   * @public
   */
  MethodName?: string | undefined;

  /**
   * The source file path relative to the project or source root, such as `src/payment/PaymentProcessor.java` or `src/payment/PaymentProcessor.py`.
   *
   * @public
   */
  FilePath: string | undefined;

  /**
   * The line number to instrument. Provide this to disambiguate overloaded methods and to target a specific line when needed.
   *
   * @public
   */
  LineNumber?: number | undefined;
}

/**
 * A union that identifies the location to instrument. Specify a `CodeLocation` for code-level instrumentation.
 *
 * @public
 */
export type Location =
  | Location.CodeLocationMember
  | Location.$UnknownMember;

/**
 * @public
 */
export namespace Location {
  /**
   * A code location for code-level instrumentation, including language, code unit, class, method, file path, and optional line number.
   *
   * @public
   */
  export interface CodeLocationMember {
    CodeLocation: CodeLocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CodeLocation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CodeLocation: (value: CodeLocation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A key-value pair associated with a resource. Tags can help you organize and categorize your resources.
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
 * @public
 */
export interface CreateInstrumentationConfigurationRequest {
  /**
   * Type of instrumentation: BREAKPOINT (temporary) or PROBE (permanent)
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The name of the service to instrument. This should match the `service.name` resource attribute reported by the application.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment that the service is running in, such as `eks:cluster-prod/namespace` or `ec2:production`.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * The telemetry signal type to emit for this instrumentation. The supported value is `SNAPSHOT`.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The location where instrumentation should be applied. Specify a `CodeLocation` for code-level instrumentation.
   *
   * @public
   */
  Location: Location | undefined;

  /**
   * An optional short description (up to 50 characters) that explains the purpose of this instrumentation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * For BREAKPOINT: optional, defaults to 24 hours, must be between 5 min and 24 hours.
   * For PROBE: not supported. PROBE configurations are permanent and persist until explicitly deleted.
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * Client-side filters that target specific instances. Each object in the array is AND-matched on its keys, and multiple objects are OR-matched to decide where to apply the instrumentation.
   *
   * @public
   */
  AttributeFilters?: Record<string, string>[] | undefined;

  /**
   * Specifies what to capture when the instrumentation point is hit. Specify `CodeCapture` for code-level capture settings.
   *
   * @public
   */
  CaptureConfiguration: CaptureConfiguration | undefined;

  /**
   * An optional list of key-value pairs to associate with the instrumentation configuration. Tags can help you organize and categorize your resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInstrumentationConfigurationResponse {
  /**
   * The type of instrumentation that was created, echoed from the request.
   *
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The service name for the instrumentation configuration, echoed from the request.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment for the instrumentation configuration, echoed from the request.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * The telemetry signal type for the instrumentation configuration, echoed from the request.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The location where instrumentation is applied, echoed from the request.
   *
   * @public
   */
  Location: Location | undefined;

  /**
   * A stable hash computed from the location that uniquely identifies this instrumentation point within the service, environment, and signal type.
   *
   * @public
   */
  LocationHash: string | undefined;

  /**
   * The optional description that was stored with the instrumentation configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp after which this configuration is no longer served to clients. Present only for `BREAKPOINT` configurations; `PROBE` configurations do not expire.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The attribute filters returned with the configuration so SDKs can perform client-side targeting.
   *
   * @public
   */
  AttributeFilters?: Record<string, string>[] | undefined;

  /**
   * The capture settings that were stored for this instrumentation configuration.
   *
   * @public
   */
  CaptureConfiguration: CaptureConfiguration | undefined;

  /**
   * The server-generated creation timestamp for this instrumentation configuration.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * ARN for the created instrumentation configuration
   * @public
   */
  ARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupingConfigurationOutput {}

/**
 * Union type for identifying an instrumentation configuration by code location or locationHash.
 * Used in Get/Delete/GetStatus operations to allow flexible identification.
 * @public
 */
export type LocationIdentifier =
  | LocationIdentifier.CodeLocationMember
  | LocationIdentifier.LocationHashMember
  | LocationIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace LocationIdentifier {
  /**
   * The full code location specification (will be hashed internally)
   * @public
   */
  export interface CodeLocationMember {
    CodeLocation: CodeLocation;
    LocationHash?: never;
    $unknown?: never;
  }

  /**
   * The pre-computed location hash (16-character hex string)
   * @public
   */
  export interface LocationHashMember {
    CodeLocation?: never;
    LocationHash: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CodeLocation?: never;
    LocationHash?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CodeLocation: (value: CodeLocation) => T;
    LocationHash: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DeleteInstrumentationConfigurationRequest {
  /**
   * Type of instrumentation configuration (BREAKPOINT or PROBE).
   * Required to identify the configuration to delete.
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * Service name for the instrumentation configuration.
   * @public
   */
  Service: string | undefined;

  /**
   * Environment name for the instrumentation configuration.
   * @public
   */
  Environment: string | undefined;

  /**
   * Signal type for the instrumentation configuration.
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * Location identifier - either full code location or a pre-computed hash.
   * @public
   */
  LocationIdentifier: LocationIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteInstrumentationConfigurationResponse {
  /**
   * The result of the delete request. The value is `DELETED` when the configuration has been removed.
   *
   * @public
   */
  DeletionStatus: DynamicInstrumentationDeletionStatus | undefined;
}

/**
 * @public
 */
export interface GetInstrumentationConfigurationRequest {
  /**
   * Type of instrumentation configuration (BREAKPOINT or PROBE).
   * Required to identify the configuration to retrieve.
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * Service name for the instrumentation configuration.
   * @public
   */
  Service: string | undefined;

  /**
   * Environment name for the instrumentation configuration.
   * @public
   */
  Environment: string | undefined;

  /**
   * Signal type for the instrumentation configuration.
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * Location identifier - either full code location or a pre-computed hash.
   * @public
   */
  LocationIdentifier: LocationIdentifier | undefined;
}

/**
 * The full instrumentation configuration, including the instrumentation type, service, environment, signal type, location details, stable location hash, capture settings, filters, expiration, creation time, and ARN.
 *
 * @public
 */
export interface InstrumentationConfiguration {
  /**
   * The type of instrumentation for this configuration.
   *
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The service that this instrumentation configuration targets.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment where the service is running.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * The telemetry signal type for this instrumentation configuration.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The location where this instrumentation is applied.
   *
   * @public
   */
  Location: Location | undefined;

  /**
   * The stable hash derived from the location that uniquely identifies this instrumentation point within the service and environment.
   *
   * @public
   */
  LocationHash: string | undefined;

  /**
   * An optional short description of the instrumentation configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when this configuration expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * Client-side filters that determine which instances apply this instrumentation.
   *
   * @public
   */
  AttributeFilters?: Record<string, string>[] | undefined;

  /**
   * The capture settings for this instrumentation configuration.
   *
   * @public
   */
  CaptureConfiguration: CaptureConfiguration | undefined;

  /**
   * The timestamp when this instrumentation configuration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * ARN for the instrumentation configuration
   * @public
   */
  ARN: string | undefined;
}

/**
 * @public
 */
export interface GetInstrumentationConfigurationResponse {
  /**
   * The complete instrumentation configuration, including its location hash, capture settings, filters, expiration, and creation time.
   *
   * @public
   */
  Configuration: InstrumentationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetInstrumentationConfigurationStatusRequest {
  /**
   * Type of instrumentation configuration (BREAKPOINT or PROBE).
   * Required to identify the configuration to retrieve.
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * Service name for the instrumentation configuration.
   * @public
   */
  Service: string | undefined;

  /**
   * Environment name for the instrumentation configuration.
   * @public
   */
  Environment: string | undefined;

  /**
   * Signal type for the instrumentation configuration.
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * Location identifier - either full code location or a pre-computed hash.
   * @public
   */
  LocationIdentifier: LocationIdentifier | undefined;

  /**
   * The single status to query for. If omitted, only `ACTIVE` status events are returned.
   *
   * @public
   */
  Status?: InstrumentationConfigurationStatus | undefined;

  /**
   * The start of the time range to retrieve status events for. `StartTime` and `EndTime` must both be provided together or both be omitted. When both are omitted, the time range defaults to the last hour.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time range to retrieve status events for. `StartTime` and `EndTime` must both be provided together or both be omitted. When both are omitted, the time range defaults to the last hour.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The maximum number of status events to return in one call. The default is 60.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use the token returned by a previous call to retrieve the next page of status events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A status event for an instrumentation configuration returned by `GetInstrumentationConfigurationStatus`. Events include the timestamp and, for errors, an error cause.
 *
 * @public
 */
export interface InstrumentationStatusEvent {
  /**
   * The time when the status was reported, rounded to the nearest minute.
   *
   * @public
   */
  Time: Date | undefined;

  /**
   * The error cause when the status is `ERROR`.
   *
   * @public
   */
  ErrorCause?: InstrumentationErrorCause | undefined;
}

/**
 * @public
 */
export interface GetInstrumentationConfigurationStatusResponse {
  /**
   * The service name echoed from the request.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment echoed from the request.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * The telemetry signal type echoed from the request.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The code location echoed from the request.
   *
   * @public
   */
  Location: Location | undefined;

  /**
   * The status that was queried. If not specified in the request, this is `ACTIVE`.
   *
   * @public
   */
  Status: InstrumentationConfigurationStatus | undefined;

  /**
   * The list of status events within the requested time window, sorted with the most recent first. Error events include an error cause.
   *
   * @public
   */
  Events: InstrumentationStatusEvent[] | undefined;

  /**
   * Pagination token to continue retrieving status events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceInput {
  /**
   * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Use this field to specify which service you want to retrieve information for. You must specify at least the `Type`, `Name`, and `Environment` attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;
}

/**
 * This structure contains information about one CloudWatch metric associated with this entity discovered by Application Signals.
 *
 * @public
 */
export interface MetricReference {
  /**
   * The namespace of the metric. For more information, see [CloudWatchNamespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * Used to display the appropriate statistics in the CloudWatch console.
   *
   * @public
   */
  MetricType: string | undefined;

  /**
   * An array of one or more dimensions that further define the metric. For more information, see [CloudWatchDimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension).
   *
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * A structure that represents a logical grouping of services based on shared attributes such as business unit, environment, or entry point.
 *
 * @public
 */
export interface ServiceGroup {
  /**
   * The name of the grouping attribute, such as `BusinessUnit` or `Environment`.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The value of the grouping attribute for this service, such as `Payments` or `Production`.
   *
   * @public
   */
  GroupValue: string | undefined;

  /**
   * The source of the grouping attribute, such as `TAG`, `OTEL`, or `DEFAULT`.
   *
   * @public
   */
  GroupSource: string | undefined;

  /**
   * A unique identifier for this grouping attribute value, used for filtering and API operations.
   *
   * @public
   */
  GroupIdentifier: string | undefined;
}

/**
 * This structure contains information about one of your services that was discovered by Application Signals.
 *
 * @public
 */
export interface Service {
  /**
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * This structure contains one or more string-to-string maps that help identify this service. It can include *platform attributes*, *application attributes*, and *telemetry attributes*.
   *
   * Platform attributes contain information the service's platform.
   *
   * - `PlatformType` defines the hosted-in platform.
   * - `EKS.Cluster` is the name of the Amazon EKS cluster.
   * - `K8s.Cluster` is the name of the self-hosted Kubernetes cluster.
   * - `K8s.Namespace` is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters.
   * - `K8s.Workload` is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters.
   * - `K8s.Node` is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters.
   * - `K8s.Pod` is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters.
   * - `EC2.AutoScalingGroup` is the name of the Amazon EC2 Auto Scaling group.
   * - `EC2.InstanceId` is the ID of the Amazon EC2 instance.
   * - `Host` is the name of the host, for all platform types.
   *
   * Application attributes contain information about the application.
   *
   * - `AWS.Application` is the application's name in Amazon Web Services Service Catalog AppRegistry.
   * - `AWS.Application.ARN` is the application's ARN in Amazon Web Services Service Catalog AppRegistry.
   *
   * Telemetry attributes contain telemetry information.
   *
   * - `Telemetry.SDK` is the fingerprint of the OpenTelemetry SDK version for instrumented services.
   * - `Telemetry.Agent` is the fingerprint of the agent used to collect and send telemetry data.
   * - `Telemetry.Source` Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.
   *
   * @public
   */
  AttributeMaps?: Record<string, string>[] | undefined;

  /**
   * An array of service groups that this service belongs to, based on the configured grouping attributes.
   *
   * @public
   */
  ServiceGroups?: ServiceGroup[] | undefined;

  /**
   * An array of structures that each contain information about one metric associated with this service.
   *
   * @public
   */
  MetricReferences: MetricReference[] | undefined;

  /**
   * An array of string-to-string maps that each contain information about one log group associated with this service. Each string-to-string map includes the following fields:
   *
   * - `"Type": "AWS::Resource"`
   * - `"ResourceType": "AWS::Logs::LogGroup"`
   * - `"Identifier": "name-of-log-group"`
   *
   * @public
   */
  LogGroupReferences?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface GetServiceOutput {
  /**
   * A structure containing information about the service.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * The start time of the data included in the response. In a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`.
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the data included in the response. In a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`.
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array of string-to-string maps that each contain information about one log group associated with this service. Each string-to-string map includes the following fields:
   *
   * - `"Type": "AWS::Resource"`
   * - `"ResourceType": "AWS::Logs::LogGroup"`
   * - `"Identifier": "name-of-log-group"`
   *
   * @public
   */
  LogGroupReferences?: Record<string, string>[] | undefined;
}

/**
 * A structure that contains identifying information for a CloudWatch Synthetics canary entity used in audit targeting.
 *
 * @public
 */
export interface CanaryEntity {
  /**
   * The name of the CloudWatch Synthetics canary.
   *
   * @public
   */
  CanaryName: string | undefined;
}

/**
 * A structure that contains identifying information for a service entity.
 *
 * @public
 */
export interface ServiceEntity {
  /**
   * The type of the service entity.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The environment where the service is deployed.
   *
   * @public
   */
  Environment?: string | undefined;

  /**
   * The Amazon Web Services account ID where the service is located. Provide this value only for cross-account access.
   *
   * @public
   */
  AwsAccountId?: string | undefined;
}

/**
 * A structure that contains identifying information for a service operation entity.
 *
 * @public
 */
export interface ServiceOperationEntity {
  /**
   * The service entity that contains this operation.
   *
   * @public
   */
  Service?: ServiceEntity | undefined;

  /**
   * The name of the operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The type of metric associated with this service operation.
   *
   * @public
   */
  MetricType?: string | undefined;
}

/**
 * A structure that contains identifying information for a service level objective entity.
 *
 * @public
 */
export interface ServiceLevelObjectiveEntity {
  /**
   * The name of the service level objective.
   *
   * @public
   */
  SloName?: string | undefined;

  /**
   * The ARN of the service level objective. The SLO must be provided with ARN for cross-account access.
   *
   * @public
   */
  SloArn?: string | undefined;
}

/**
 * A union structure that contains the specific entity information for different types of audit targets.
 *
 * @public
 */
export type AuditTargetEntity =
  | AuditTargetEntity.CanaryMember
  | AuditTargetEntity.ServiceMember
  | AuditTargetEntity.ServiceOperationMember
  | AuditTargetEntity.SloMember
  | AuditTargetEntity.$UnknownMember;

/**
 * @public
 */
export namespace AuditTargetEntity {
  /**
   * Service entity information when the audit target is a service.
   *
   * @public
   */
  export interface ServiceMember {
    Service: ServiceEntity;
    Slo?: never;
    ServiceOperation?: never;
    Canary?: never;
    $unknown?: never;
  }

  /**
   * SLO entity information when the audit target is a service level objective.
   *
   * @public
   */
  export interface SloMember {
    Service?: never;
    Slo: ServiceLevelObjectiveEntity;
    ServiceOperation?: never;
    Canary?: never;
    $unknown?: never;
  }

  /**
   * Service operation entity information when the audit target is a specific service operation.
   *
   * @public
   */
  export interface ServiceOperationMember {
    Service?: never;
    Slo?: never;
    ServiceOperation: ServiceOperationEntity;
    Canary?: never;
    $unknown?: never;
  }

  /**
   * Canary entity information when the audit target is a CloudWatch Synthetics canary.
   *
   * @public
   */
  export interface CanaryMember {
    Service?: never;
    Slo?: never;
    ServiceOperation?: never;
    Canary: CanaryEntity;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Service?: never;
    Slo?: never;
    ServiceOperation?: never;
    Canary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Service: (value: ServiceEntity) => T;
    Slo: (value: ServiceLevelObjectiveEntity) => T;
    ServiceOperation: (value: ServiceOperationEntity) => T;
    Canary: (value: CanaryEntity) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that specifies the target entity for audit analysis, such as a `service`, `SLO`, `service_operation`, or `canary`.
 *
 * @public
 */
export interface AuditTarget {
  /**
   * The type of entity being audited, such as `service`, `SLO`, `service_operation`, or `canary`.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The specific data identifying the audit target entity.
   *
   * @public
   */
  Data: AuditTargetEntity | undefined;
}

/**
 * @public
 */
export interface ListAuditFindingsInput {
  /**
   * The start of the time period to retrieve audit findings for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve audit findings for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * A list of auditor names to filter the findings by. Only findings generated by the specified auditors will be returned.
   *
   * The following auditors are available for configuration:
   *
   * - `slo` - SloAuditor: Identifies SLO violations and detects breached thresholds during the Assessment phase.
   * - `operation_metric` - OperationMetricAuditor: Detects anomalies in service operation metrics from Application Signals RED metrics during the Assessment phase
   *
   *   > **Note:** Anomaly detection is not supported for sparse metrics (those missing more than 80% of datapoints within the given time period).
   * - `service_quota` - ServiceQuotaAuditor: Monitors resource utilization against service quotas during the Assessment phase
   * - `trace` - TraceAuditor: Performs deep-dive analysis of distributed traces, correlating traces with breached SLOs or abnormal RED metrics during the Analysis phase
   * - `dependency_metric` - CriticalPathAuditor: Analyzes service dependency impacts and maps dependency relationships from Application Signals RED metrics during the Analysis phase
   * - `top_contributor` - TopContributorAuditor: Identifies infrastructure-level contributors to issues by analyzing EMF logs of Application Signals RED metrics during the Analysis phase
   * - `log` - LogAuditor: Extracts insights from application logs, categorizing error types and ranking severity by frequency during the Analysis phase
   * - `change_indicator` - ChangeIndicatorAuditor: Detects change events (deployments, configuration changes) that occurred within 10 minutes before and during a detected anomaly, and surfaces them as findings with deployment timestamps in the Analysis phase. When changes are detected, the `top_contributor` auditor skips its analysis to avoid redundancy.
   *
   * > **Note:** `InitAuditor` and `Summarizer` auditors are not configurable as they are automatically triggered during the audit process.
   *
   * @public
   */
  Auditors?: string[] | undefined;

  /**
   * A list of audit targets to filter the findings by. You can specify services, SLOs, or service operations to limit the audit findings to specific entities.
   *
   * @public
   */
  AuditTargets: AuditTarget[] | undefined;

  /**
   * The level of details of the audit findings. Supported values: `BRIEF`, `DETAILED`.
   *
   * @public
   */
  DetailLevel?: DetailLevel | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of audit findings.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of audit findings to return in one operation. If you omit this parameter, the default of 10 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure that contains the result of an automated audit analysis, including the auditor name, description of findings, additional data, and severity level.
 *
 * @public
 */
export interface AuditorResult {
  /**
   * The name of the auditor algorithm that generated this result.
   *
   * @public
   */
  Auditor?: string | undefined;

  /**
   * A detailed description of the audit finding, explaining what was observed and potential implications.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * This is a string-to-string map. It contains additional data about the result of an automated audit analysis.
   *
   * @public
   */
  Data?: Record<string, string> | undefined;

  /**
   * The severity level of this audit finding, indicating the importance and potential impact of the issue.
   *
   * @public
   */
  Severity?: Severity | undefined;
}

/**
 * A structure that represents a connection between two nodes in a dependency graph, showing the relationship and characteristics of the connection.
 *
 * @public
 */
export interface Edge {
  /**
   * The identifier of the source node in this edge connection.
   *
   * @public
   */
  SourceNodeId?: string | undefined;

  /**
   * The identifier of the destination node in this edge connection.
   *
   * @public
   */
  DestinationNodeId?: string | undefined;

  /**
   * The duration or latency associated with this connection, if applicable.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The type of connection between the nodes, indicating the nature of the relationship.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;
}

/**
 * A structure that represents a node in a dependency graph, containing information about a service, resource, or other entity and its characteristics.
 *
 * @public
 */
export interface Node {
  /**
   * The key attributes that identify this node, including Type, Name, and Environment information.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * The name of the entity represented by this node.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for this node within the dependency graph.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The operation associated with this node, if applicable.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The type of entity represented by this node, such as `Service` or `Resource`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The duration or processing time associated with this node, if applicable.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The status of the entity represented by this node.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * A structure that represents the dependency relationships relevant to an audit finding, containing nodes and edges that show how services and resources are connected.
 *
 * @public
 */
export interface DependencyGraph {
  /**
   * An array of nodes representing the services, resources, or other entities in the dependency graph.
   *
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * An array of edges representing the connections and relationships between the nodes in the dependency graph.
   *
   * @public
   */
  Edges?: Edge[] | undefined;
}

/**
 * A structure that contains metric data queries and time range information that provides context for audit findings through relevant performance metrics.
 *
 * @public
 */
export interface MetricGraph {
  /**
   * An array of metric data queries that define the metrics to be retrieved and analyzed as part of the audit finding context.
   *
   * @public
   */
  MetricDataQueries?: MetricDataQuery[] | undefined;

  /**
   * The start time for the metric data included in this graph. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time for the metric data included in this graph. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * A structure that contains information about an audit finding, which represents an automated analysis result about service behavior, performance issues, or potential problems identified through heuristic algorithms.
 *
 * @public
 */
export interface AuditFinding {
  /**
   * The key attributes that identify the service or entity this audit finding relates to. This is a string-to-string map that includes fields like Type, Name, and Environment.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * An array of auditor results that contain the specific findings, descriptions, and severity levels identified by different auditing algorithms.
   *
   * @public
   */
  AuditorResults?: AuditorResult[] | undefined;

  /**
   * The name of the operation associated with this audit finding, if the finding is specific to a particular service operation.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * A structure containing metric data queries and time range information that provides context for the audit finding through relevant performance metrics.
   *
   * @public
   */
  MetricGraph?: MetricGraph | undefined;

  /**
   * A structure containing nodes and edges that represent the dependency relationships relevant to this audit finding, helping to understand the context and potential impact.
   *
   * @public
   */
  DependencyGraph?: DependencyGraph | undefined;

  /**
   * The type of audit finding.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditFindingsOutput {
  /**
   * The start of the time period that the returned audit findings apply to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time period that the returned audit findings apply to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * An array of structures, where each structure contains information about one audit finding, including the auditor results, severity, and associated metric and dependency graphs.
   *
   * @public
   */
  AuditFindings: AuditFinding[] | undefined;

  /**
   * Include this value in your next use of this API to get the next set of audit findings.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntityEventsInput {
  /**
   * The entity for which to retrieve change events. This specifies the service, resource, or other entity whose event history you want to examine.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   * - `AwsAccountId` specifies the account where this object is in.
   *
   * Below is an example of a service.
   *
   * `\{ "Type": "Service", "Name": "visits-service", "Environment": "petclinic-test" \}`
   *
   * Below is an example of a resource.
   *
   * `\{ "Type": "AWS::Resource", "ResourceType": "AWS::DynamoDB::Table", "Identifier": "Customers" \}`
   *
   * @public
   */
  Entity: Record<string, string> | undefined;

  /**
   * The start of the time period to retrieve change events for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example: `1698778057`
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve change events for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example: `1698778057`
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The maximum number of change events to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of change events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains information about a change event that occurred for a service, such as a deployment or configuration change.
 *
 * @public
 */
export interface ChangeEvent {
  /**
   * The timestamp when this change event occurred. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The Amazon Web Services account ID where this change event occurred.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The Amazon Web Services region where this change event occurred.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The entity (service or resource) that was affected by this change event, including its key attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   * - `AwsAccountId` specifies the account where this object is in.
   *
   * Below is an example of a service.
   *
   * `\{ "Type": "Service", "Name": "visits-service", "Environment": "petclinic-test" \}`
   *
   * Below is an example of a resource.
   *
   * `\{ "Type": "AWS::Resource", "ResourceType": "AWS::DynamoDB::Table", "Identifier": "Customers" \}`
   *
   * @public
   */
  Entity: Record<string, string> | undefined;

  /**
   * The type of change event that occurred, such as `DEPLOYMENT`.
   *
   * @public
   */
  ChangeEventType: ChangeEventType | undefined;

  /**
   * A unique identifier for this change event. For CloudTrail-based events, this is the CloudTrail event id. For other events, this will be `Unknown`.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The name of the user who initiated this change event, if available.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The name or description of this change event.
   *
   * @public
   */
  EventName?: string | undefined;
}

/**
 * @public
 */
export interface ListEntityEventsOutput {
  /**
   * The start of the time period that the returned change events apply to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example: `1698778057`
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period that the returned change events apply to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example: `1698778057`
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array of structures, where each structure contains information about one change event that occurred for the specified entity during the requested time period.
   *
   * @public
   */
  ChangeEvents: ChangeEvent[] | undefined;

  /**
   * Include this value in your next use of this API to get the next set of change events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupingAttributeDefinitionsInput {
  /**
   * Include this value, if it was returned by the previous operation, to get the next set of grouping attribute definitions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID to retrieve grouping attribute definitions for. Use this when accessing grouping configurations from a different account in cross-account monitoring scenarios.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * If you are using this operation in a monitoring account, specify `true` to include grouping attributes from source accounts in the returned data.
   *
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;
}

/**
 * A structure that defines how services should be grouped based on specific attributes. This includes the friendly name for the grouping, the source keys to derive values from, and an optional default value.
 *
 * @public
 */
export interface GroupingAttributeDefinition {
  /**
   * The friendly name for this grouping attribute, such as `BusinessUnit` or `Environment`. This name is used to identify the grouping in the console and APIs.
   *
   * @public
   */
  GroupingName: string | undefined;

  /**
   * An array of source keys used to derive the grouping attribute value from telemetry data, Amazon Web Services tags, or other sources. For example, ["business_unit", "team"] would look for values in those fields.
   *
   * @public
   */
  GroupingSourceKeys?: string[] | undefined;

  /**
   * The default value to use for this grouping attribute when no value can be derived from the source keys. This ensures all services have a grouping value even if the source data is missing.
   *
   * @public
   */
  DefaultGroupingValue?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupingAttributeDefinitionsOutput {
  /**
   * An array of structures, where each structure contains information about one grouping attribute definition, including the grouping name, source keys, and default values.
   *
   * @public
   */
  GroupingAttributeDefinitions: GroupingAttributeDefinition[] | undefined;

  /**
   * The timestamp when the grouping configuration was last updated. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Include this value in your next use of this API to get the next set of grouping attribute definitions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An instrumentation configuration that omits service and environment because they are provided at a higher level, such as in a list response.
 *
 * @public
 */
export interface InstrumentationConfigurationWithoutServiceEnv {
  /**
   * The type of instrumentation for this configuration.
   *
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The telemetry signal type for this instrumentation configuration.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The location where this instrumentation is applied.
   *
   * @public
   */
  Location: Location | undefined;

  /**
   * The stable hash derived from the location that identifies this instrumentation point.
   *
   * @public
   */
  LocationHash: string | undefined;

  /**
   * An optional short description of the instrumentation configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when this configuration expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * Client-side filters that determine which instances apply this instrumentation.
   *
   * @public
   */
  AttributeFilters?: Record<string, string>[] | undefined;

  /**
   * The capture settings for this instrumentation configuration.
   *
   * @public
   */
  CaptureConfiguration: CaptureConfiguration | undefined;

  /**
   * The timestamp when this instrumentation configuration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * ARN for the instrumentation configuration
   * @public
   */
  ARN: string | undefined;
}

/**
 * @public
 */
export interface InstrumentationConfigurationsPage {
  /**
   * The service name associated with the returned configurations.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment associated with the returned configurations.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * Indicates whether there are configuration changes since the provided `SyncedAt` timestamp.
   *
   * @public
   */
  Changed: boolean | undefined;

  /**
   * The current set of active instrumentation configurations for the service and environment. Items omit service and environment because they are provided in the request.
   *
   * @public
   */
  LatestConfigurations?: InstrumentationConfigurationWithoutServiceEnv[] | undefined;

  /**
   * The server timestamp to supply on the next sync call.
   *
   * @public
   */
  SyncedAt: Date | undefined;

  /**
   * The suggested number of seconds to wait before the next sync request. This is at least 60 seconds to prevent excessive polling.
   *
   * @public
   */
  SyncInterval: number | undefined;

  /**
   * Pagination token to continue listing configurations when more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstrumentationConfigurationsRequest {
  /**
   * The name of the service to retrieve instrumentation configurations for.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment that the service is running in.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * Type of instrumentation configuration (BREAKPOINT or PROBE).
   * Required to determine which backing store to query.
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The timestamp from the last successful sync. When provided, the response returns `Changed` as `false` if nothing is new since this time, or returns the latest configurations when changes exist.
   *
   * @public
   */
  SyncedAt?: Date | undefined;

  /**
   * The maximum number of configurations to return in one call. The default is 50 and the maximum is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use the token returned by a previous call to retrieve the next page of configurations.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceDependenciesInput {
  /**
   * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested end time will be rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Use this field to specify which service you want to retrieve information for. You must specify at least the `Type`, `Name`, and `Environment` attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service dependencies.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This structure contains information about one dependency of this service.
 *
 * @public
 */
export interface ServiceDependency {
  /**
   * The name of the operation in this service that calls the dependency.
   *
   * @public
   */
  OperationName: string | undefined;

  /**
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  DependencyKeyAttributes: Record<string, string> | undefined;

  /**
   * The name of the called operation in the dependency.
   *
   * @public
   */
  DependencyOperationName: string | undefined;

  /**
   * An array of structures that each contain information about one metric associated with this service dependency that was discovered by Application Signals.
   *
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDependenciesOutput {
  /**
   * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array, where each object in the array contains information about one of the dependencies of this service.
   *
   * @public
   */
  ServiceDependencies: ServiceDependency[] | undefined;

  /**
   * Include this value in your next use of this API to get next set of service dependencies.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceDependentsInput {
  /**
   * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Use this field to specify which service you want to retrieve information for. You must specify at least the `Type`, `Name`, and `Environment` attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service dependents.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This structure contains information about a service dependent that was discovered by Application Signals. A dependent is an entity that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.
 *
 * @public
 */
export interface ServiceDependent {
  /**
   * If the invoked entity is an operation on an entity, the name of that dependent operation is displayed here.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  DependentKeyAttributes: Record<string, string> | undefined;

  /**
   * If the dependent invoker was a service that invoked it from an operation, the name of that dependent operation is displayed here.
   *
   * @public
   */
  DependentOperationName?: string | undefined;

  /**
   * An array of structures that each contain information about one metric associated with this service dependent that was discovered by Application Signals.
   *
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDependentsOutput {
  /**
   * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array, where each object in the array contains information about one of the dependents of this service.
   *
   * @public
   */
  ServiceDependents: ServiceDependent[] | undefined;

  /**
   * Include this value in your next use of this API to get next set of service dependents.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceLevelObjectiveExclusionWindowsInput {
  /**
   * The ID of the SLO to list exclusion windows for.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service level objectives.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceLevelObjectiveExclusionWindowsOutput {
  /**
   * A list of exclusion windows configured for the SLO.
   *
   * @public
   */
  ExclusionWindows: ExclusionWindow[] | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service level objectives.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceOperationsInput {
  /**
   * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested end time will be rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Use this field to specify which service you want to retrieve information for. You must specify at least the `Type`, `Name`, and `Environment` attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service operations.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This structure contains information about an operation discovered by Application Signals. An operation is a specific function performed by a service that was discovered by Application Signals, and is often an API that is called by an upstream dependent.
 *
 * @public
 */
export interface ServiceOperation {
  /**
   * The name of the operation, discovered by Application Signals.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An array of structures that each contain information about one metric associated with this service operation that was discovered by Application Signals.
   *
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServiceOperationsOutput {
  /**
   * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array of structures that each contain information about one operation of this service.
   *
   * @public
   */
  ServiceOperations: ServiceOperation[] | undefined;

  /**
   * Include this value in your next use of this API to get next set of service operations.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * Your requested start time will be rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of services.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If you are using this operation in a monitoring account, specify `true` to include services from source accounts in the returned data.
   *
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;

  /**
   * Amazon Web Services Account ID.
   *
   * @public
   */
  AwsAccountId?: string | undefined;
}

/**
 * This structure contains information about one of your services that was discovered by Application Signals
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * This is a string-to-string map that help identify the objects discovered by Application Signals. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * This structure contains one or more string-to-string maps that help identify this service. It can include *platform attributes*, *application attributes*, and *telemetry attributes*.
   *
   * Platform attributes contain information the service's platform.
   *
   * - `PlatformType` defines the hosted-in platform.
   * - `EKS.Cluster` is the name of the Amazon EKS cluster.
   * - `K8s.Cluster` is the name of the self-hosted Kubernetes cluster.
   * - `K8s.Namespace` is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters.
   * - `K8s.Workload` is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters.
   * - `K8s.Node` is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters.
   * - `K8s.Pod` is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters.
   * - `EC2.AutoScalingGroup` is the name of the Amazon EC2 Auto Scaling group.
   * - `EC2.InstanceId` is the ID of the Amazon EC2 instance.
   * - `Host` is the name of the host, for all platform types.
   *
   * Application attributes contain information about the application.
   *
   * - `AWS.Application` is the application's name in Amazon Web Services Service Catalog AppRegistry.
   * - `AWS.Application.ARN` is the application's ARN in Amazon Web Services Service Catalog AppRegistry.
   *
   * Telemetry attributes contain telemetry information.
   *
   * - `Telemetry.SDK` is the fingerprint of the OpenTelemetry SDK version for instrumented services.
   * - `Telemetry.Agent` is the fingerprint of the agent used to collect and send telemetry data.
   * - `Telemetry.Source` Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.
   *
   * @public
   */
  AttributeMaps?: Record<string, string>[] | undefined;

  /**
   * An array of structures that each contain information about one metric associated with this service.
   *
   * @public
   */
  MetricReferences: MetricReference[] | undefined;

  /**
   * An array of service groups that this service belongs to, based on the configured grouping attributes.
   *
   * @public
   */
  ServiceGroups?: ServiceGroup[] | undefined;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
   *
   * This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array of structures, where each structure contains some information about a service. To get complete information about a service, use [GetService](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetService.html).
   *
   * @public
   */
  ServiceSummaries: ServiceSummary[] | undefined;

  /**
   * Include this value in your next use of this API to get next set of services.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that defines a filter for narrowing down results based on specific attribute values. This can be used to filter services by platform, environment, or other service characteristics.
 *
 * @public
 */
export interface AttributeFilter {
  /**
   * The name of the attribute to filter by, such as `Platform`, `Environment`, or `BusinessUnit`.
   *
   * @public
   */
  AttributeFilterName: string | undefined;

  /**
   * An array of values to match for the specified attribute. Services that have any of these values for the attribute will be included in the results.
   *
   * @public
   */
  AttributeFilterValues: string[] | undefined;
}

/**
 * @public
 */
export interface ListServiceStatesInput {
  /**
   * The start of the time period to retrieve service state information for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period to retrieve service state information for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The maximum number of service states to return in one operation. If you omit this parameter, the default of 20 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service states.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If you are using this operation in a monitoring account, specify `true` to include service states from source accounts in the returned data.
   *
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;

  /**
   * The Amazon Web Services account ID to filter service states by. Use this to limit results to services from a specific account.
   *
   * @public
   */
  AwsAccountId?: string | undefined;

  /**
   * A list of attribute filters to narrow down the services. You can filter by platform, environment, or other service attributes.
   *
   * @public
   */
  AttributeFilters?: AttributeFilter[] | undefined;
}

/**
 * A structure that contains information about the current state of a service, including its latest change events such as deployments and other state-changing activities.
 *
 * @public
 */
export interface ServiceState {
  /**
   * The attribute filters that were applied when retrieving this service state information.
   *
   * @public
   */
  AttributeFilters?: AttributeFilter[] | undefined;

  /**
   * The key attributes that identify this service, including Type, Name, and Environment information.
   *
   * @public
   */
  Service: Record<string, string> | undefined;

  /**
   * An array containing the most recent change events for this service, such as deployments, with information about when they occurred and who initiated them.
   *
   * @public
   */
  LatestChangeEvents: ChangeEvent[] | undefined;
}

/**
 * @public
 */
export interface ListServiceStatesOutput {
  /**
   * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, `1698778057`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * An array of structures, where each structure contains information about the state of one service, including its latest change events such as deployments.
   *
   * @public
   */
  ServiceStates: ServiceState[] | undefined;

  /**
   * Include this value in your next use of this API to get the next set of service states.
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
   * The Amazon Resource Name (ARN) of the CloudWatch resource that you want to view tags for.
   *
   * The ARN format of an Application Signals SLO is `arn:aws:cloudwatch:Region:account-id:slo:slo-name`
   *
   * For more information about ARN format, see [Resource Types Defined by Amazon CloudWatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
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
export interface PutGroupingConfigurationInput {
  /**
   * An array of grouping attribute definitions that specify how services should be grouped. Each definition includes a friendly name, source keys to derive the grouping value from, and an optional default value.
   *
   * @public
   */
  GroupingAttributeDefinitions: GroupingAttributeDefinition[] | undefined;
}

/**
 * A structure that contains the complete grouping configuration for an account, including all defined grouping attributes and metadata about when it was last updated.
 *
 * @public
 */
export interface GroupingConfiguration {
  /**
   * An array of grouping attribute definitions that specify how services should be grouped based on various attributes and source keys.
   *
   * @public
   */
  GroupingAttributeDefinitions: GroupingAttributeDefinition[] | undefined;

  /**
   * The timestamp when this grouping configuration was last updated. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface PutGroupingConfigurationOutput {
  /**
   * A structure containing the updated grouping configuration, including all grouping attribute definitions and the timestamp when it was last updated.
   *
   * @public
   */
  GroupingConfiguration: GroupingConfiguration | undefined;
}

/**
 * The status of a single instrumentation configuration reported by an SDK instance.
 *
 * @public
 */
export interface InstrumentationConfigurationStatusReport {
  /**
   * The type of instrumentation configuration being reported.
   *
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The telemetry signal type for this instrumentation configuration.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The stable hash of the instrumentation location that identifies the configuration being reported.
   *
   * @public
   */
  LocationHash: string | undefined;

  /**
   * The status of the instrumentation configuration: `READY`, `ERROR`, `ACTIVE`, or `DISABLED`.
   *
   * @public
   */
  Status: InstrumentationConfigurationStatus | undefined;

  /**
   * The timestamp when the status event occurred.
   *
   * @public
   */
  Time: Date | undefined;

  /**
   * The error cause when the status is `ERROR`, such as the file or method not being found.
   *
   * @public
   */
  ErrorCause?: InstrumentationErrorCause | undefined;
}

/**
 * @public
 */
export interface ReportInstrumentationConfigurationStatusRequest {
  /**
   * The service that the reported configurations belong to.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment that the service is running in.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * An array of configuration status reports (up to 100) that include the instrumentation type, signal type, location hash, status, timestamp, and optional error cause.
   *
   * @public
   */
  Configurations: InstrumentationConfigurationStatusReport[] | undefined;
}

/**
 * A status event that could not be processed by the service.
 *
 * @public
 */
export interface UnprocessedStatusEvent {
  /**
   * The type of instrumentation configuration for the unprocessed status event.
   *
   * @public
   */
  InstrumentationType: InstrumentationType | undefined;

  /**
   * The telemetry signal type for the unprocessed status event.
   *
   * @public
   */
  SignalType: DynamicInstrumentationSignalType | undefined;

  /**
   * The stable hash of the instrumentation location for the unprocessed event.
   *
   * @public
   */
  LocationHash: string | undefined;

  /**
   * The status that failed to be processed.
   *
   * @public
   */
  Status: InstrumentationConfigurationStatus | undefined;

  /**
   * The timestamp of the status event that failed to be processed.
   *
   * @public
   */
  Time: Date | undefined;

  /**
   * The reason why this status event could not be processed, such as throttling or validation errors.
   *
   * @public
   */
  FailedReason: UnprocessedStatusEventFailureReason | undefined;
}

/**
 * @public
 */
export interface ReportInstrumentationConfigurationStatusResponse {
  /**
   * The service name echoed from the request.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The environment echoed from the request.
   *
   * @public
   */
  Environment: string | undefined;

  /**
   * Status events that failed to be processed. Each entry includes the configuration identifiers, status, timestamp, and a reason for the failure.
   *
   * @public
   */
  UnprocessedStatusEvents: UnprocessedStatusEvent[] | undefined;
}

/**
 * This object defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO. A burn rate of exactly 1 indicates that the SLO goal will be met exactly.
 *
 * For example, if you specify 60 as the number of minutes in the look-back window, the burn rate is calculated as the following:
 *
 * *burn rate = error rate over the look-back window / (100% - attainment goal percentage)*
 *
 * For more information about burn rates, see [Calculate burn rates](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html#CloudWatch-ServiceLevelObjectives-burn).
 *
 * @public
 */
export interface BurnRateConfiguration {
  /**
   * The number of minutes to use as the look-back window.
   *
   * @public
   */
  LookBackWindowMinutes: number | undefined;
}

/**
 * Use this structure to specify the information for the metric that a period-based SLO will monitor.
 *
 * @public
 */
export interface RequestBasedServiceLevelIndicatorMetricConfig {
  /**
   * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service the SLO metric is related to. To do so, you must specify at least the `Type`, `Name`, and `Environment` attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * If the SLO is to monitor either the `LATENCY` or `AVAILABILITY` metric that Application Signals collects, use this field to specify which of those metrics is used.
   *
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * Use this structure to define the metric that you want to use as the "total requests" number for a request-based SLO. This result will be divided by the "good request" or "bad request" value defined in `MonitoredRequestCountMetric`.
   *
   * @public
   */
  TotalRequestCountMetric?: MetricDataQuery[] | undefined;

  /**
   * Use this structure to define the metric that you want to use as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in `TotalRequestCountMetric` will be divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
   *
   * @public
   */
  MonitoredRequestCountMetric?: MonitoredRequestCountMetricDataQueries | undefined;

  /**
   * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
   *
   * @public
   */
  DependencyConfig?: DependencyConfig | undefined;

  /**
   * Identifies the metric source for SLOs on resources other than Application Signals services.
   *
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * The name of the metric for SLOs on resources other than Application Signals services.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The composite SLI configuration for service-level SLOs that monitor multiple operations of a service.
   *
   * @public
   */
  CompositeSliConfig?: CompositeSliConfig | undefined;
}

/**
 * This structure specifies the information about the service and the performance metric that a request-based SLO is to monitor.
 *
 * @public
 */
export interface RequestBasedServiceLevelIndicatorConfig {
  /**
   * Use this structure to specify the metric to be used for the SLO.
   *
   * @public
   */
  RequestBasedSliMetricConfig: RequestBasedServiceLevelIndicatorMetricConfig | undefined;

  /**
   * The value that the SLI metric is compared to. This parameter is required if this SLO is tracking the `Latency` metric.
   *
   * @public
   */
  MetricThreshold?: number | undefined;

  /**
   * The arithmetic operation to use when comparing the specified metric to the threshold. This parameter is required if this SLO is tracking the `Latency` metric.
   *
   * @public
   */
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * Use this structure to specify the information for the metric that a period-based SLO will monitor.
 *
 * @public
 */
export interface ServiceLevelIndicatorMetricConfig {
  /**
   * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service the SLO metric is related to. To do so, you must specify at least the `Type`, `Name`, and `Environment` attributes.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * If the SLO is to monitor either the `LATENCY` or `AVAILABILITY` metric that Application Signals collects, use this field to specify which of those metrics is used.
   *
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * The name of the CloudWatch metric to use for the SLO, when using a custom metric rather than Application Signals standard metrics.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic. For more information about statistics, see [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
   *
   * @public
   */
  Statistic?: string | undefined;

  /**
   * The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
   *
   * @public
   */
  PeriodSeconds?: number | undefined;

  /**
   * Identifies the metric source for SLOs on resources other than Application Signals services.
   *
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, use this structure to specify that metric or expression.
   *
   * @public
   */
  MetricDataQueries?: MetricDataQuery[] | undefined;

  /**
   * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
   *
   * @public
   */
  DependencyConfig?: DependencyConfig | undefined;

  /**
   * The composite SLI configuration for service-level SLOs that monitor multiple operations of a service.
   *
   * @public
   */
  CompositeSliConfig?: CompositeSliConfig | undefined;
}

/**
 * This structure specifies the information about the service and the performance metric that a period-based SLO is to monitor.
 *
 * @public
 */
export interface ServiceLevelIndicatorConfig {
  /**
   * Use this structure to specify the metric to be used for the SLO.
   *
   * @public
   */
  SliMetricConfig: ServiceLevelIndicatorMetricConfig | undefined;

  /**
   * This parameter is used only when a request-based SLO tracks the `Latency` metric. Specify the threshold value that the observed `Latency` metric values are to be compared to.
   *
   * This is not required if `CreateRecommendedSlo` is set to `true`.
   *
   * @public
   */
  MetricThreshold?: number | undefined;

  /**
   * The arithmetic operation to use when comparing the specified metric to the threshold.
   *
   * This is not required if `CreateRecommendedSlo` is set to `true`.
   *
   * @public
   */
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * @public
 */
export interface CreateServiceLevelObjectiveInput {
  /**
   * A name for this SLO.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description for this SLO.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor.
   *
   * You can't specify both `RequestBasedSliConfig` and `SliConfig` in the same operation.
   *
   * @public
   */
  SliConfig?: ServiceLevelIndicatorConfig | undefined;

  /**
   * If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor.
   *
   * You can't specify both `RequestBasedSliConfig` and `SliConfig` in the same operation.
   *
   * @public
   */
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig | undefined;

  /**
   * This structure contains the attributes that determine the goal of the SLO.
   *
   * @public
   */
  Goal?: Goal | undefined;

  /**
   * A list of key-value pairs to associate with the SLO. You can associate as many as 50 tags with an SLO. To be able to associate tags with the SLO when you create the SLO, you must have the `cloudwatch:TagResource` permission.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Use this array to create *burn rates* for this SLO. Each burn rate is a metric that indicates how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
   *
   * @public
   */
  BurnRateConfigurations?: BurnRateConfiguration[] | undefined;

  /**
   * Set this to `true` to create a recommended SLO out of the box. When set to `true`, you don't need to specify the `MetricThreshold` or `ComparisonOperator` in the `SliConfig` or `RequestBasedSliConfig`. The default value is `false`.
   *
   * This is supported for SLOs on a service, service operation, or a dependency.
   *
   * @public
   */
  CreateRecommendedSlo?: boolean | undefined;

  /**
   * Indicates whether DevOps Agent will automatically investigate this SLO when it is breached
   * @public
   */
  AutoInvestigationEnabled?: boolean | undefined;
}

/**
 * A structure containing information about one service level objective (SLO) that has been created in Application Signals. Creating SLOs can help you ensure your services are performing to the level that you expect. SLOs help you set and track a specific target level for the reliability and availability of your applications and services. Each SLO uses a service level indicator (SLI), which is a key performance metric, to calculate how much underperformance can be tolerated before the goal that you set for the SLO is not achieved.
 *
 * @public
 */
export interface ServiceLevelObjective {
  /**
   * The ARN of this SLO.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of this SLO.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description that you created for this SLO.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time that this SLO was created. When used in a raw HTTP Query API, it is formatted as `yyyy-MM-dd'T'HH:mm:ss`. For example, `2019-07-01T23:59:59`.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The time that this SLO was most recently updated. When used in a raw HTTP Query API, it is formatted as `yyyy-MM-dd'T'HH:mm:ss`. For example, `2019-07-01T23:59:59`.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * A structure containing information about the performance metric that this SLO monitors, if this is a period-based SLO.
   *
   * @public
   */
  Sli?: ServiceLevelIndicator | undefined;

  /**
   * A structure containing information about the performance metric that this SLO monitors, if this is a request-based SLO.
   *
   * @public
   */
  RequestBasedSli?: RequestBasedServiceLevelIndicator | undefined;

  /**
   * Displays whether this is a period-based SLO or a request-based SLO.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * This structure contains the attributes that determine the goal of an SLO. This includes the time period for evaluation and the attainment threshold.
   *
   * @public
   */
  Goal: Goal | undefined;

  /**
   * Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
   *
   * @public
   */
  BurnRateConfigurations?: BurnRateConfiguration[] | undefined;

  /**
   * Displays the SLI metric source type for this SLO. Supported types are:
   *
   * - Service operation
   * - Service dependency
   * - Service
   * - CloudWatch metric
   * - AppMonitor
   * - Canary
   *
   * @public
   */
  MetricSourceType?: MetricSourceType | undefined;

  /**
   * Indicates whether DevOps Agent will automatically investigate this SLO when it is breached
   * @public
   */
  AutoInvestigationEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateServiceLevelObjectiveOutput {
  /**
   * A structure that contains information about the SLO that you just created.
   *
   * @public
   */
  Slo: ServiceLevelObjective | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLevelObjectiveInput {
  /**
   * The ARN or name of the service level objective to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLevelObjectiveOutput {}

/**
 * @public
 */
export interface GetServiceLevelObjectiveInput {
  /**
   * The ARN or name of the SLO that you want to retrieve information about. You can find the ARNs of SLOs by using the [ListServiceLevelObjectives](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListServiceLevelObjectives.html) operation.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetServiceLevelObjectiveOutput {
  /**
   * A structure containing the information about the SLO.
   *
   * @public
   */
  Slo: ServiceLevelObjective | undefined;
}

/**
 * @public
 */
export interface ListServiceLevelObjectivesInput {
  /**
   * You can use this optional field to specify which services you want to retrieve SLO information for.
   *
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this is.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * The name of the operation that this SLO is associated with.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
   *
   * @public
   */
  DependencyConfig?: DependencyConfig | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service level objectives.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Use this optional field to only include SLOs with the specified metric source types in the output. Supported types are:
   *
   * - Service operation
   * - Service dependency
   * - Service
   * - CloudWatch metric
   * - AppMonitor
   * - Canary
   *
   * @public
   */
  MetricSourceTypes?: MetricSourceType[] | undefined;

  /**
   * If you are using this operation in a monitoring account, specify `true` to include SLO from source accounts in the returned data.
   *
   * When you are monitoring an account, you can use Amazon Web Services account ID in `KeyAttribute` filter for service source account and `SloOwnerawsaccountID` for SLO source account with `IncludeLinkedAccounts` to filter the returned data to only a single source account.
   *
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;

  /**
   * SLO's Amazon Web Services account ID.
   *
   * @public
   */
  SloOwnerAwsAccountId?: string | undefined;

  /**
   * Identifies the metric source to filter SLOs by.
   *
   * @public
   */
  MetricSource?: MetricSource | undefined;
}

/**
 * A structure that contains information about one service level objective (SLO) created in Application Signals.
 *
 * @public
 */
export interface ServiceLevelObjectiveSummary {
  /**
   * The ARN of this service level objective.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the service level objective.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * This is a string-to-string map. It can include the following fields.
   *
   * - `Type` designates the type of object this service level objective is for.
   * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service`, `RemoteService`, or `AWS::Service`.
   * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource`.
   * - `Environment` specifies the location where this object is hosted, or what it belongs to.
   *
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * If this service level objective is specific to a single operation, this field displays the name of that operation.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * Identifies the dependency using the `DependencyKeyAttributes` and `DependencyOperationName`.
   *
   * @public
   */
  DependencyConfig?: DependencyConfig | undefined;

  /**
   * The date and time that this service level objective was created. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Displays whether this is a period-based SLO or a request-based SLO.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * Displays the SLI metric source type for this SLO. Supported types are:
   *
   * - Service operation
   * - Service dependency
   * - Service
   * - CloudWatch metric
   * - AppMonitor
   * - Canary
   *
   * @public
   */
  MetricSourceType?: MetricSourceType | undefined;

  /**
   * Identifies the metric source for SLOs on resources other than Application Signals services.
   *
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * The composite SLI configuration for service-level SLOs that monitor multiple operations of a service.
   *
   * @public
   */
  CompositeSliConfig?: CompositeSliConfig | undefined;
}

/**
 * @public
 */
export interface ListServiceLevelObjectivesOutput {
  /**
   * An array of structures, where each structure contains information about one SLO.
   *
   * @public
   */
  SloSummaries?: ServiceLevelObjectiveSummary[] | undefined;

  /**
   * Include this value in your next use of this API to get next set of service level objectives.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceLevelObjectiveInput {
  /**
   * The Amazon Resource Name (ARN) or name of the service level objective that you want to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * An optional description for the SLO.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor.
   *
   * @public
   */
  SliConfig?: ServiceLevelIndicatorConfig | undefined;

  /**
   * If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor.
   *
   * You can't specify both `SliConfig` and `RequestBasedSliConfig` in the same operation.
   *
   * @public
   */
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig | undefined;

  /**
   * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
   *
   * @public
   */
  Goal?: Goal | undefined;

  /**
   * Use this array to create *burn rates* for this SLO. Each burn rate is a metric that indicates how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
   *
   * @public
   */
  BurnRateConfigurations?: BurnRateConfiguration[] | undefined;

  /**
   * Indicates whether DevOps Agent will automatically investigate this SLO when it is breached
   * @public
   */
  AutoInvestigationEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateServiceLevelObjectiveOutput {
  /**
   * A structure that contains information about the SLO that you just updated.
   *
   * @public
   */
  Slo: ServiceLevelObjective | undefined;
}

/**
 * @public
 */
export interface StartDiscoveryInput {}

/**
 * @public
 */
export interface StartDiscoveryOutput {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch resource that you want to set tags for.
   *
   * The ARN format of an Application Signals SLO is `arn:aws:cloudwatch:Region:account-id:slo:slo-name`
   *
   * For more information about ARN format, see [Resource Types Defined by Amazon CloudWatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceArn: string | undefined;

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
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch resource that you want to delete tags from.
   *
   * The ARN format of an Application Signals SLO is `arn:aws:cloudwatch:Region:account-id:slo:slo-name`
   *
   * For more information about ARN format, see [Resource Types Defined by Amazon CloudWatch](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceArn: string | undefined;

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
export interface UntagResourceResponse {}
