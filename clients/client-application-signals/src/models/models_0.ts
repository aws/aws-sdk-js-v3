// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ApplicationSignalsServiceException as __BaseException } from "./ApplicationSignalsServiceException";

/**
 * <p>You don't have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface BatchGetServiceLevelObjectiveBudgetReportInput {
  /**
   * <p>The date and time that you want the report to be for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>An array containing the IDs of the service level objectives that you want to include in the report.</p>
   * @public
   */
  SloIds: string[] | undefined;
}

/**
 * <p>A structure containing information about one error that occurred during a
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_BatchGetServiceLevelObjectiveBudgetReport.html">BatchGetServiceLevelObjectiveBudgetReport</a>
 *          operation.</p>
 * @public
 */
export interface ServiceLevelObjectiveBudgetReportError {
  /**
   * <p>The name of the SLO that this error is related to.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ARN of the SLO that this error is related to.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The error code for this error.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message for this error.</p>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceLevelObjectiveBudgetStatus = {
  BREACHED: "BREACHED",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type ServiceLevelObjectiveBudgetStatus =
  (typeof ServiceLevelObjectiveBudgetStatus)[keyof typeof ServiceLevelObjectiveBudgetStatus];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  PERIOD_BASED: "PeriodBased",
  REQUEST_BASED: "RequestBased",
} as const;

/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const DurationUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
} as const;

/**
 * @public
 */
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit];

/**
 * <p>If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.</p>
 * @public
 */
export interface CalendarInterval {
  /**
   * <p>The date and time when you want the first interval to start. Be sure to choose a time that configures the
   *          intervals the way that you want. For example, if you want weekly intervals
   *          starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.</p>
   *          <p>When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>As soon as one calendar interval ends, another automatically begins.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>Specifies the calendar interval unit.</p>
   * @public
   */
  DurationUnit: DurationUnit | undefined;

  /**
   * <p>Specifies the duration of each calendar interval. For example, if <code>Duration</code> is <code>1</code> and
   *          <code>DurationUnit</code> is <code>MONTH</code>, each interval is one month, aligned with the calendar.</p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>If the interval for this SLO is a rolling interval, this structure contains the interval specifications.</p>
 * @public
 */
export interface RollingInterval {
  /**
   * <p>Specifies the rolling interval unit.</p>
   * @public
   */
  DurationUnit: DurationUnit | undefined;

  /**
   * <p>Specifies the duration of each rolling interval. For example, if <code>Duration</code> is <code>7</code> and
   *          <code>DurationUnit</code> is <code>DAY</code>, each rolling interval is seven days.</p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.</p>
 * @public
 */
export type Interval = Interval.CalendarIntervalMember | Interval.RollingIntervalMember | Interval.$UnknownMember;

/**
 * @public
 */
export namespace Interval {
  /**
   * <p>If the interval is a rolling interval, this structure contains the interval specifications.</p>
   * @public
   */
  export interface RollingIntervalMember {
    RollingInterval: RollingInterval;
    CalendarInterval?: never;
    $unknown?: never;
  }

  /**
   * <p>If the interval is a calendar interval, this structure contains the interval specifications.</p>
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

  export interface Visitor<T> {
    RollingInterval: (value: RollingInterval) => T;
    CalendarInterval: (value: CalendarInterval) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Interval, visitor: Visitor<T>): T => {
    if (value.RollingInterval !== undefined) return visitor.RollingInterval(value.RollingInterval);
    if (value.CalendarInterval !== undefined) return visitor.CalendarInterval(value.CalendarInterval);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>This structure contains the attributes that determine the goal of an SLO. This includes
 *          the time period for evaluation and the attainment threshold.</p>
 * @public
 */
export interface Goal {
  /**
   * <p>The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.</p>
   *          <p>If you omit this parameter, a rolling interval of 7 days is used.</p>
   * @public
   */
  Interval?: Interval | undefined;

  /**
   * <p>The threshold that determines if the goal is being met.</p>
   *          <p>If this is a period-based SLO, the attainment goal is the
   *          percentage of good periods that meet the threshold requirements to the total periods within the interval.
   *          For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the
   *          periods to be in healthy state.</p>
   *          <p>If this is a request-based SLO, the attainment goal is the percentage of requests that must be
   *       successful to meet the attainment goal.</p>
   *          <p>If you omit this parameter, 99 is used
   *          to represent 99% as the attainment goal.</p>
   * @public
   */
  AttainmentGoal?: number | undefined;

  /**
   * <p>The percentage of remaining budget over total budget that you want to get warnings for.
   *          If you omit this parameter, the default of 50.0 is used. </p>
   * @public
   */
  WarningThreshold?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceLevelIndicatorComparisonOperator = {
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL_TO: "LessThanOrEqualTo",
} as const;

/**
 * @public
 */
export type ServiceLevelIndicatorComparisonOperator =
  (typeof ServiceLevelIndicatorComparisonOperator)[keyof typeof ServiceLevelIndicatorComparisonOperator];

/**
 * @public
 * @enum
 */
export const ServiceLevelIndicatorMetricType = {
  AVAILABILITY: "AVAILABILITY",
  LATENCY: "LATENCY",
} as const;

/**
 * @public
 */
export type ServiceLevelIndicatorMetricType =
  (typeof ServiceLevelIndicatorMetricType)[keyof typeof ServiceLevelIndicatorMetricType];

/**
 * <p>A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique
 *          identifier for a metric, whenever you add a unique name/value pair to one of
 *          your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish
 *          <code>InstanceId</code> as a dimension name, and the actual instance ID as the value for that dimension.</p>
 *          <p>You
 *          can assign up to 30 dimensions to a metric.</p>
 * @public
 */
export interface Dimension {
  /**
   * <p>The name of the dimension. Dimension names must contain only ASCII characters, must include
   *          at least one non-whitespace character, and cannot start with a colon (<code>:</code>).
   *          ASCII
   *          control characters are not supported as part of dimension names.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension. Dimension values must contain only ASCII characters and must include
   *          at least one non-whitespace character. ASCII
   *          control characters are not supported as part of dimension values.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions</p>
 * @public
 */
export interface Metric {
  /**
   * <p>The namespace of the metric. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace">Namespaces</a>.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The name of the metric to use.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>An array of one or more dimensions to use to define the metric that you want to use.
   *          For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a>.</p>
   * @public
   */
  Dimensions?: Dimension[] | undefined;
}

/**
 * @public
 * @enum
 */
export const StandardUnit = {
  BITS: "Bits",
  BITS_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_SECOND: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];

/**
 * <p>This structure defines the metric to be used as the service level indicator, along with the statistics, period, and unit.</p>
 * @public
 */
export interface MetricStat {
  /**
   * <p>The metric to use as the service level indicator, including the metric name, namespace, and dimensions.</p>
   * @public
   */
  Metric: Metric | undefined;

  /**
   * <p>The granularity, in seconds, to be used for the metric. For metrics with regular resolution, a period can
   *          be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected
   *          at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics
   *          are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p>
   * @public
   */
  Period: number | undefined;

  /**
   * <p>The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic. For more information about statistics,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html">CloudWatch statistics definitions</a>.</p>
   * @public
   */
  Stat: string | undefined;

  /**
   * <p>If you omit <code>Unit</code> then all data that was collected with any unit is returned, along with the corresponding units that were specified
   *          when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
   *          If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
   * @public
   */
  Unit?: StandardUnit | undefined;
}

/**
 * <p>Use this structure to define a metric or metric math expression that you want to use as for a service level objective. </p>
 *          <p>Each <code>MetricDataQuery</code> in the <code>MetricDataQueries</code> array specifies either a metric to retrieve, or a metric math expression
 *          to be performed on retrieved metrics. A single <code>MetricDataQueries</code> array can include as many as 20 <code>MetricDataQuery</code> structures in the array.
 *          The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that
 *          contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures,
 *          exactly one must have true as the value for <code>ReturnData</code>. The result of this expression used for the SLO.</p>
 *          <p>For more information about metric math expressions, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html">CloudWatchUse metric math</a>.</p>
 *          <p>Within each <code>MetricDataQuery</code> object, you must specify either
 *          <code>Expression</code> or <code>MetricStat</code> but not both.</p>
 * @public
 */
export interface MetricDataQuery {
  /**
   * <p>A short name used to tie this object to the results in the response. This <code>Id</code> must be unique
   *          within a <code>MetricDataQueries</code> array. If you are performing math expressions on this set of data,
   *          this name represents that data and can serve as a variable in the metric math expression. The valid characters
   *          are letters, numbers, and underscore. The first character must be a lowercase letter.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO.</p>
   *          <p>Within one <code>MetricDataQuery</code> object, you must specify either
   *          <code>Expression</code> or <code>MetricStat</code> but not both.</p>
   * @public
   */
  MetricStat?: MetricStat | undefined;

  /**
   * <p>This field can contain a metric math expression to be performed on the other metrics that
   *          you are retrieving within this <code>MetricDataQueries</code> structure. </p>
   *          <p>A math expression
   *          can use the <code>Id</code> of the other metrics or queries to refer to those metrics, and can also use
   *          the <code>Id</code> of other
   *          expressions to use the result of those expressions. For more information about metric math expressions, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the
   *          <i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>Within each <code>MetricDataQuery</code> object, you must specify either
   *          <code>Expression</code> or <code>MetricStat</code> but not both.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A human-readable label for this metric or expression. This is especially useful
   *          if this is an expression, so that you know
   *          what the value represents. If the metric or expression is shown in a
   *          CloudWatch dashboard widget, the label is shown. If <code>Label</code> is omitted, CloudWatch
   *          generates a default.</p>
   *          <p>You can put dynamic expressions into a label, so that it is more descriptive.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>Use this only if you are using a metric math expression for the SLO.
   *          Specify <code>true</code> for <code>ReturnData</code> for only the one expression result to use as the alarm. For all
   *          other metrics and expressions in the same <code>CreateServiceLevelObjective</code> operation, specify <code>ReturnData</code> as <code>false</code>.</p>
   * @public
   */
  ReturnData?: boolean | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points for this metric. For metrics with regular resolution, a period can
   *          be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected
   *          at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics
   *          are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p>
   *          <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than
   *          3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p>
   *          <ul>
   *             <li>
   *                <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p>
   *             </li>
   *             <li>
   *                <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p>
   *             </li>
   *             <li>
   *                <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p>
   *             </li>
   *          </ul>
   * @public
   */
  Period?: number | undefined;

  /**
   * <p>The ID of the account where this metric is located.  If you are performing this operation in a monitoring account,
   *          use this to specify which source account to retrieve this metric from.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>This structure defines the metric that is used as the "good request" or "bad request"
 *          value for a request-based SLO.
 *          This value observed for the metric defined in
 *          <code>TotalRequestCountMetric</code> is divided by the number found for
 *          <code>MonitoredRequestCountMetric</code> to determine the percentage of successful requests that
 *          this SLO tracks.</p>
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
   * <p>If you want to count "good requests" to determine the percentage of successful requests for this
   *       request-based SLO, specify the metric to use as "good requests" in this structure.</p>
   * @public
   */
  export interface GoodCountMetricMember {
    GoodCountMetric: MetricDataQuery[];
    BadCountMetric?: never;
    $unknown?: never;
  }

  /**
   * <p>If you want to count "bad requests" to determine the percentage of successful requests for this
   *          request-based SLO, specify the metric to use as "bad requests" in this structure.</p>
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

  export interface Visitor<T> {
    GoodCountMetric: (value: MetricDataQuery[]) => T;
    BadCountMetric: (value: MetricDataQuery[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MonitoredRequestCountMetricDataQueries, visitor: Visitor<T>): T => {
    if (value.GoodCountMetric !== undefined) return visitor.GoodCountMetric(value.GoodCountMetric);
    if (value.BadCountMetric !== undefined) return visitor.BadCountMetric(value.BadCountMetric);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>This structure contains the information about the metric that is used for a request-based SLO.</p>
 * @public
 */
export interface RequestBasedServiceLevelIndicatorMetric {
  /**
   * <p>This is a string-to-string map that contains information about the type of object that this SLO is related to. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object that this SLO is related to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * <p>If the SLO monitors a specific operation of the service, this field displays that operation name.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>If the SLO monitors either the <code>LATENCY</code> or <code>AVAILABILITY</code> metric that Application Signals
   *          collects, this field displays which of those metrics is used.</p>
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * <p>This structure defines the metric that is used as the "total requests" number for a request-based SLO.
   *          The number observed for this metric is divided by the number of "good requests" or "bad requests" that is
   *          observed for the metric defined in
   *          <code>MonitoredRequestCountMetric</code>.</p>
   * @public
   */
  TotalRequestCountMetric: MetricDataQuery[] | undefined;

  /**
   * <p>This structure defines the metric that is used as the "good request" or "bad request"
   *          value for a request-based SLO.
   *          This value observed for the metric defined in
   *          <code>TotalRequestCountMetric</code> is divided by the number found for
   *          <code>MonitoredRequestCountMetric</code> to determine the percentage of successful requests that
   *          this SLO tracks.</p>
   * @public
   */
  MonitoredRequestCountMetric: MonitoredRequestCountMetricDataQueries | undefined;
}

/**
 * <p>This structure contains information about the performance metric that a request-based SLO monitors.</p>
 * @public
 */
export interface RequestBasedServiceLevelIndicator {
  /**
   * <p>A structure that contains information about the metric that the SLO monitors. </p>
   * @public
   */
  RequestBasedSliMetric: RequestBasedServiceLevelIndicatorMetric | undefined;

  /**
   * <p>This value is the threshold that
   *          the observed metric values of the SLI metric are compared to.</p>
   * @public
   */
  MetricThreshold?: number | undefined;

  /**
   * <p>The arithmetic operation used when comparing the specified metric to the
   *          threshold.</p>
   * @public
   */
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * <p>This structure contains the information about the metric that is used for a period-based SLO.</p>
 * @public
 */
export interface ServiceLevelIndicatorMetric {
  /**
   * <p>This is a string-to-string map that contains information about the type of object that this SLO is related to. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object that this SLO is related to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * <p>If the SLO monitors a specific operation of the service, this field displays that operation name.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>If the SLO monitors either the <code>LATENCY</code> or <code>AVAILABILITY</code> metric that Application Signals
   *          collects, this field displays which of those metrics is used.</p>
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * <p>If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression,
   *          this structure includes the information about that metric or expression. </p>
   * @public
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

/**
 * <p>This structure contains information about the performance metric that a period-based SLO monitors.</p>
 * @public
 */
export interface ServiceLevelIndicator {
  /**
   * <p>A structure that contains information about the metric that the SLO monitors. </p>
   * @public
   */
  SliMetric: ServiceLevelIndicatorMetric | undefined;

  /**
   * <p>The value that the SLI metric is compared to.</p>
   * @public
   */
  MetricThreshold: number | undefined;

  /**
   * <p>The arithmetic operation used when comparing the specified metric to the
   *          threshold.</p>
   * @public
   */
  ComparisonOperator: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * <p>A structure containing an SLO budget report that you have requested.</p>
 * @public
 */
export interface ServiceLevelObjectiveBudgetReport {
  /**
   * <p>The ARN of the SLO that this report is for.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the SLO that this report is for.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Displays whether this budget report is for a period-based SLO or a request-based SLO.</p>
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>The status of this SLO, as it relates to the error budget for the entire time interval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OK</code> means that the SLO had remaining budget above the warning threshold,
   *             as of the time that you specified in <code>TimeStamp</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARNING</code> means that the SLO's remaining budget was below the warning threshold,
   *             as of the time that you specified in <code>TimeStamp</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BREACHED</code> means that the SLO's budget was exhausted,
   *             as of the time that you specified in <code>TimeStamp</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA</code> means that the specified start and end times were before the
   *             SLO was created, or that attainment data is missing.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BudgetStatus: ServiceLevelObjectiveBudgetStatus | undefined;

  /**
   * <p>A number between 0 and 100 that represents the success percentage of your application compared
   *          to the goal set by the SLO.</p>
   *          <p>If this is a period-based SLO, the number is the percentage of time periods that the service has
   *          attained the SLO's attainment goal, as of the time of the request.</p>
   *          <p>If this is a request-based SLO, the number is the number of successful requests divided
   *          by the number of total requests, multiplied by 100, during the time range that you specified in your request.</p>
   * @public
   */
  Attainment?: number | undefined;

  /**
   * <p>The total number of seconds in the error budget for the interval. This field is included only
   *       if the SLO is a period-based SLO.</p>
   * @public
   */
  TotalBudgetSeconds?: number | undefined;

  /**
   * <p>The budget amount remaining before the SLO status becomes <code>BREACHING</code>, at the time specified in
   *          the
   *          <code>Timestemp</code> parameter of the request. If this value is negative, then the SLO is already in <code>BREACHING</code>
   *          status.</p>
   *          <p> This field is included only
   *          if the SLO is a period-based SLO.</p>
   * @public
   */
  BudgetSecondsRemaining?: number | undefined;

  /**
   * <p>This field is displayed only for request-based SLOs. It displays the total number of failed requests that can be tolerated during the time range between the start of the
   *          interval and the time stamp supplied in the budget report request. It is based on the total number of requests that occurred,
   *       and the percentage specified in the attainment goal. If the number of failed requests matches this number or is higher, then
   *       this SLO is currently breaching.</p>
   *          <p>This number can go up and down between reports with different time stamps, based on both how many total requests occur.</p>
   * @public
   */
  TotalBudgetRequests?: number | undefined;

  /**
   * <p>This field is displayed only for request-based SLOs. It displays the number of failed requests that can be tolerated before any more successful requests occur,
   *          and still have the application meet its SLO goal.</p>
   *          <p>This number can go up and down between different reports, based on both how many successful requests and how many failed
   *          requests occur in that time.</p>
   * @public
   */
  BudgetRequestsRemaining?: number | undefined;

  /**
   * <p>A structure that contains information about the performance metric that this SLO monitors.</p>
   * @public
   */
  Sli?: ServiceLevelIndicator | undefined;

  /**
   * <p>This structure contains information about the performance metric that a request-based SLO monitors.</p>
   * @public
   */
  RequestBasedSli?: RequestBasedServiceLevelIndicator | undefined;

  /**
   * <p>This structure contains the attributes that determine the goal of an SLO. This includes
   *          the time period for evaluation and the attainment threshold.</p>
   * @public
   */
  Goal?: Goal | undefined;
}

/**
 * @public
 */
export interface BatchGetServiceLevelObjectiveBudgetReportOutput {
  /**
   * <p>The date and time that the report is for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>An array of structures, where each structure is one budget report.</p>
   * @public
   */
  Reports: ServiceLevelObjectiveBudgetReport[] | undefined;

  /**
   * <p>An array of structures, where each structure includes an error indicating that one
   *          of the requests in the array was not valid.</p>
   * @public
   */
  Errors: ServiceLevelObjectiveBudgetReportError[] | undefined;
}

/**
 * <p>The request was throttled because of quota limits.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface GetServiceInput {
  /**
   * <p>The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>Use this field to specify which service you want to retrieve information for. You must specify at least the <code>Type</code>,
   *          <code>Name</code>, and <code>Environment</code> attributes.</p>
   *          <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;
}

/**
 * <p>This structure contains information about one CloudWatch metric associated with this entity discovered
 *          by Application Signals.</p>
 * @public
 */
export interface MetricReference {
  /**
   * <p>The namespace of the metric. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace">CloudWatchNamespaces</a>.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>Used to display the appropriate statistics in the CloudWatch console.</p>
   * @public
   */
  MetricType: string | undefined;

  /**
   * <p>An array of one or more dimensions that further define the metric.
   *          For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">CloudWatchDimensions</a>.</p>
   * @public
   */
  Dimensions?: Dimension[] | undefined;

  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>This structure contains information about one of your services that was discovered by Application Signals.
 *       </p>
 * @public
 */
export interface Service {
  /**
   * <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * <p>This structure contains one or more string-to-string maps that help identify this service. It can include <i>platform attributes</i>, <i>application attributes</i>, and <i>telemetry attributes</i>.</p>
   *          <p>Platform attributes contain information the service's platform.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlatformType</code> defines the hosted-in platform.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS.Cluster</code> is the name of the Amazon EKS cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Cluster</code> is the name of the self-hosted Kubernetes cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Namespace</code> is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Workload</code> is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Node</code> is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Pod</code> is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2.AutoScalingGroup</code> is the name of the Amazon EC2 Auto Scaling group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2.InstanceId</code> is the ID of the Amazon EC2 instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Host</code> is the name of the host, for all platform types.</p>
   *             </li>
   *          </ul>
   *          <p>Application attributes contain information about the application.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS.Application</code> is the application's name in Amazon Web Services Service Catalog AppRegistry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS.Application.ARN</code> is the application's ARN in Amazon Web Services Service Catalog AppRegistry.</p>
   *             </li>
   *          </ul>
   *          <p>Telemetry attributes contain telemetry information.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Telemetry.SDK</code> is the fingerprint of the OpenTelemetry SDK version for instrumented services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telemetry.Agent</code> is the fingerprint of the agent used to collect and send telemetry data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telemetry.Source</code> Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeMaps?: Record<string, string>[] | undefined;

  /**
   * <p>An array of structures that each contain information about one metric associated with this service.</p>
   * @public
   */
  MetricReferences: MetricReference[] | undefined;

  /**
   * <p>An array of string-to-string maps that each contain information about one log group associated with this service. Each
   *          string-to-string map includes the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"Type": "AWS::Resource"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"ResourceType": "AWS::Logs::LogGroup"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Identifier": "<i>name-of-log-group</i>"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogGroupReferences?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface GetServiceOutput {
  /**
   * <p>A structure containing information about the service.</p>
   * @public
   */
  Service: Service | undefined;

  /**
   * <p>The start time of the data included in the response. In a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>.</p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the data included in the response. In a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>.</p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>An array of string-to-string maps that each contain information about one log group associated with this service. Each
   *          string-to-string map includes the following fields:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"Type": "AWS::Resource"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"ResourceType": "AWS::Logs::LogGroup"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Identifier": "<i>name-of-log-group</i>"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LogGroupReferences?: Record<string, string>[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDependenciesInput {
  /**
   * <p>The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested end time will be rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>Use this field to specify which service you want to retrieve information for. You must specify at least the <code>Type</code>,
   *          <code>Name</code>, and <code>Environment</code> attributes.</p>
   *          <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * <p>The maximum number of results to return in one operation. If you omit this
   *          parameter, the default of 50 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of service dependencies.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This structure contains information about one dependency
 *          of this service.</p>
 * @public
 */
export interface ServiceDependency {
  /**
   * <p>The name of the operation in this service that calls the dependency.</p>
   * @public
   */
  OperationName: string | undefined;

  /**
   * <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DependencyKeyAttributes: Record<string, string> | undefined;

  /**
   * <p>The name of the called operation in the dependency.</p>
   * @public
   */
  DependencyOperationName: string | undefined;

  /**
   * <p>An array of structures that each contain information about one metric associated with this service dependency
   *          that was discovered by
   *          Application Signals.</p>
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDependenciesOutput {
  /**
   * <p>The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>An array, where each object in the array contains information about one of the dependencies of this service.</p>
   * @public
   */
  ServiceDependencies: ServiceDependency[] | undefined;

  /**
   * <p>Include this value in your next use of this API to get next set
   *          of service dependencies.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceDependentsInput {
  /**
   * <p>The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>Use this field to specify which service you want to retrieve information for. You must specify at least the <code>Type</code>,
   *          <code>Name</code>, and <code>Environment</code> attributes.</p>
   *          <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * <p>The maximum number of results to return in one operation. If you omit this
   *          parameter, the default of 50 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of service dependents.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This structure contains information about a service dependent that was discovered by Application Signals. A
 *          dependent is an entity that invoked the specified service during the provided time range. Dependents include
 *          other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.</p>
 * @public
 */
export interface ServiceDependent {
  /**
   * <p>If the invoked entity is an operation on an entity, the name of that dependent operation is displayed here.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DependentKeyAttributes: Record<string, string> | undefined;

  /**
   * <p>If the dependent invoker was a service that invoked it from an operation, the name of that dependent operation
   *          is displayed here.</p>
   * @public
   */
  DependentOperationName?: string | undefined;

  /**
   * <p>An array of structures that each contain information about one metric associated with this service dependent
   *          that was discovered by
   *          Application Signals.</p>
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServiceDependentsOutput {
  /**
   * <p>The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>An array, where each object in the array contains information about one of the dependents of this service.</p>
   * @public
   */
  ServiceDependents: ServiceDependent[] | undefined;

  /**
   * <p>Include this value in your next use of this API to get next set
   *          of service dependents.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceOperationsInput {
  /**
   * <p>The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested end time will be rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>Use this field to specify which service you want to retrieve information for. You must specify at least the <code>Type</code>,
   *          <code>Name</code>, and <code>Environment</code> attributes.</p>
   *          <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * <p>The maximum number of results to return in one operation. If you omit this
   *          parameter, the default of 50 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of service operations.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This structure contains information about an operation discovered by Application Signals. An operation
 *          is a specific function performed by a service that was discovered by Application Signals, and is often an API
 *          that is called by an upstream dependent.
 *       </p>
 * @public
 */
export interface ServiceOperation {
  /**
   * <p>The name of the operation, discovered by Application Signals.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An array of structures that each contain information about one metric associated with this service operation
   *          that was discovered by
   *          Application Signals.</p>
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServiceOperationsOutput {
  /**
   * <p>The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>An array of structures that each contain information about one operation of this service.</p>
   * @public
   */
  ServiceOperations: ServiceOperation[] | undefined;

  /**
   * <p>Include this value in your next use of this API to get next set
   *          of service operations.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesInput {
  /**
   * <p>The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>Your requested start time will be rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>
   *          The maximum number
   *          of results
   *          to return
   *          in one operation.
   *          If you omit this parameter,
   *          the default of 50 is used.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of services.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If you are using this operation in a monitoring account, specify <code>true</code> to include services from source accounts in the returned data.
   *
   *       </p>
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;

  /**
   * <p>Amazon Web Services Account ID.</p>
   * @public
   */
  AwsAccountId?: string | undefined;
}

/**
 * <p>This structure contains information about one of your services that
 *       was discovered by Application Signals</p>
 * @public
 */
export interface ServiceSummary {
  /**
   * <p>This is a string-to-string map that help identify the objects discovered by Application Signals. It can
   *       include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *          when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes: Record<string, string> | undefined;

  /**
   * <p>This structure contains one or more string-to-string maps that help identify this service. It can include <i>platform attributes</i>, <i>application attributes</i>, and <i>telemetry attributes</i>.</p>
   *          <p>Platform attributes contain information the service's platform.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlatformType</code> defines the hosted-in platform.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EKS.Cluster</code> is the name of the Amazon EKS cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Cluster</code> is the name of the self-hosted Kubernetes cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Namespace</code> is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Workload</code> is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Node</code> is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>K8s.Pod</code> is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2.AutoScalingGroup</code> is the name of the Amazon EC2 Auto Scaling group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EC2.InstanceId</code> is the ID of the Amazon EC2 instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Host</code> is the name of the host, for all platform types.</p>
   *             </li>
   *          </ul>
   *          <p>Application attributes contain information about the application.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS.Application</code> is the application's name in Amazon Web Services Service Catalog AppRegistry.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS.Application.ARN</code> is the application's ARN in Amazon Web Services Service Catalog AppRegistry.</p>
   *             </li>
   *          </ul>
   *          <p>Telemetry attributes contain telemetry information.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Telemetry.SDK</code> is the fingerprint of the OpenTelemetry SDK version for instrumented services.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telemetry.Agent</code> is the fingerprint of the agent used to collect and send telemetry data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telemetry.Source</code> Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeMaps?: Record<string, string>[] | undefined;

  /**
   * <p>An array of structures that each contain information about one metric associated with this service.</p>
   * @public
   */
  MetricReferences: MetricReference[] | undefined;
}

/**
 * @public
 */
export interface ListServicesOutput {
  /**
   * <p>The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as
   *          be epoch time in seconds. For example: <code>1698778057</code>
   *          </p>
   *          <p>This displays the time that Application Signals used for the request. It might not match your request exactly, because
   *          it was rounded to the nearest hour.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>An array of structures, where each structure contains some information about a service. To
   *          get complete information about a service, use
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetService.html">GetService</a>.</p>
   * @public
   */
  ServiceSummaries: ServiceSummary[] | undefined;

  /**
   * <p>Include this value in your next use of this API to get next set
   *          of services.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch resource that you want to view tags for.</p>
   *          <p>The ARN format of an Application Signals SLO is
   *          <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:slo:<i>slo-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   *          Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   *             Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>A key-value pair associated with a resource. Tags can help you organize and categorize your resources.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your
   *          resources.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Resource not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource type is not valid.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Can't find the resource id.</p>
   * @public
   */
  ResourceId: string | undefined;

  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation attempted to create a resource that already exists.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This object defines the length of the look-back window used to calculate one burn rate metric
 *          for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO. A burn rate of
 *       exactly 1 indicates that the SLO goal will be met exactly.</p>
 *          <p>For example, if you specify 60 as the number of minutes in the look-back window, the burn rate is calculated as the following:</p>
 *          <p>
 *             <i>burn rate = error rate over the look-back window / (100% - attainment goal percentage)</i>
 *          </p>
 *          <p>For more information about burn rates, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html#CloudWatch-ServiceLevelObjectives-burn">Calculate burn rates</a>.</p>
 * @public
 */
export interface BurnRateConfiguration {
  /**
   * <p>The number of minutes to use as the look-back window.</p>
   * @public
   */
  LookBackWindowMinutes: number | undefined;
}

/**
 * <p>Use this structure to specify the information for the metric that a period-based SLO will monitor.</p>
 * @public
 */
export interface RequestBasedServiceLevelIndicatorMetricConfig {
  /**
   * <p>If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service
   *          the SLO metric is related to. To do so, you must specify at least the <code>Type</code>,
   *          <code>Name</code>, and <code>Environment</code> attributes.</p>
   *          <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * <p>If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>If the SLO is to monitor either the <code>LATENCY</code> or <code>AVAILABILITY</code> metric that Application Signals
   *          collects, use this field to specify which of those metrics is used.</p>
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * <p>Use this structure to define the metric that you want to use as the "total requests" number for a request-based SLO.
   *       This result will be divided by the "good request" or "bad request" value defined in
   *       <code>MonitoredRequestCountMetric</code>.</p>
   * @public
   */
  TotalRequestCountMetric?: MetricDataQuery[] | undefined;

  /**
   * <p>Use this structure to define the metric that you want to use as the "good request" or "bad request"
   *          value for a request-based SLO.
   *          This value observed for the metric defined in
   *          <code>TotalRequestCountMetric</code> will be divided by the number found for
   *          <code>MonitoredRequestCountMetric</code> to determine the percentage of successful requests that
   *          this SLO tracks.</p>
   * @public
   */
  MonitoredRequestCountMetric?: MonitoredRequestCountMetricDataQueries | undefined;
}

/**
 * <p>This structure specifies the information about the service and the performance metric that a request-based SLO is to monitor.</p>
 * @public
 */
export interface RequestBasedServiceLevelIndicatorConfig {
  /**
   * <p>Use this structure to specify the metric to be used for the SLO.</p>
   * @public
   */
  RequestBasedSliMetricConfig: RequestBasedServiceLevelIndicatorMetricConfig | undefined;

  /**
   * <p>The value that the SLI metric is compared to. This parameter is required if this SLO is tracking the <code>Latency</code> metric.</p>
   * @public
   */
  MetricThreshold?: number | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified metric to the
   *          threshold. This parameter is required if this SLO is tracking the <code>Latency</code> metric.</p>
   * @public
   */
  ComparisonOperator?: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * <p>Use this structure to specify the information for the metric that a period-based SLO will monitor.</p>
 * @public
 */
export interface ServiceLevelIndicatorMetricConfig {
  /**
   * <p>If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service
   *          the SLO metric is related to. To do so, you must specify at least the <code>Type</code>,
   *          <code>Name</code>, and <code>Environment</code> attributes.</p>
   *          <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * <p>If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>If the SLO is to monitor either the <code>LATENCY</code> or <code>AVAILABILITY</code> metric that Application Signals
   *       collects, use this field to specify which of those metrics is used.</p>
   * @public
   */
  MetricType?: ServiceLevelIndicatorMetricType | undefined;

  /**
   * <p>The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic. For more information about statistics,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html">CloudWatch statistics definitions</a>.</p>
   * @public
   */
  Statistic?: string | undefined;

  /**
   * <p>The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the
   *          SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.</p>
   * @public
   */
  PeriodSeconds?: number | undefined;

  /**
   * <p>If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression,
   *      use this structure to specify that metric or expression. </p>
   * @public
   */
  MetricDataQueries?: MetricDataQuery[] | undefined;
}

/**
 * <p>This structure specifies the information about the service and the performance metric that a period-based SLO is to monitor.</p>
 * @public
 */
export interface ServiceLevelIndicatorConfig {
  /**
   * <p>Use this structure to specify the metric to be used for the SLO.</p>
   * @public
   */
  SliMetricConfig: ServiceLevelIndicatorMetricConfig | undefined;

  /**
   * <p>This parameter is used only when a request-based SLO tracks the <code>Latency</code> metric. Specify the threshold value that the
   *          observed <code>Latency</code> metric values are to be compared to.</p>
   * @public
   */
  MetricThreshold: number | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified metric to the
   *          threshold.</p>
   * @public
   */
  ComparisonOperator: ServiceLevelIndicatorComparisonOperator | undefined;
}

/**
 * @public
 */
export interface CreateServiceLevelObjectiveInput {
  /**
   * <p>A name for this SLO.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description for this SLO.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor.</p>
   *          <p>You can't specify both <code>RequestBasedSliConfig</code> and <code>SliConfig</code> in the same operation.</p>
   * @public
   */
  SliConfig?: ServiceLevelIndicatorConfig | undefined;

  /**
   * <p>If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor.</p>
   *          <p>You can't specify both <code>RequestBasedSliConfig</code> and <code>SliConfig</code> in the same operation.</p>
   * @public
   */
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig | undefined;

  /**
   * <p>This structure contains the attributes that determine the goal of the SLO.</p>
   * @public
   */
  Goal?: Goal | undefined;

  /**
   * <p>A list of key-value pairs to associate with the SLO. You can associate as many as 50 tags with an SLO.
   *       To be able to associate tags with the SLO when you create the SLO, you must
   *       have the <code>cloudwatch:TagResource</code> permission.</p>
   *          <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *       permissions by granting a user
   *       permission to access or change only resources with certain tag values.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Use this array to create <i>burn rates</i> for this SLO. Each
   *          burn rate is a metric that indicates how fast the service is consuming the error budget, relative to the attainment goal of the SLO.</p>
   * @public
   */
  BurnRateConfigurations?: BurnRateConfiguration[] | undefined;
}

/**
 * <p>A structure containing information about one service level objective (SLO) that has been created in Application Signals.
 *          Creating SLOs can help you ensure your services are
 *          performing to the level that you expect. SLOs help you set and track a specific target level for the
 *          reliability and availability of your applications and services. Each SLO uses a service level indicator (SLI), which is
 *          a key performance metric, to
 *          calculate how much underperformance can be tolerated before the goal that you set for the SLO is not achieved.</p>
 * @public
 */
export interface ServiceLevelObjective {
  /**
   * <p>The ARN of this SLO.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of this SLO.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description that you created for this SLO.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time that this SLO was created. When used in a raw HTTP Query API, it is formatted as
   *          <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   *          <code>2019-07-01T23:59:59</code>.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The time that this SLO was most recently updated. When used in a raw HTTP Query API, it is formatted as
   *          <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example,
   *          <code>2019-07-01T23:59:59</code>.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>A structure containing information about the performance metric that this SLO monitors, if this is a period-based SLO.</p>
   * @public
   */
  Sli?: ServiceLevelIndicator | undefined;

  /**
   * <p>A structure containing information about the performance metric that this SLO monitors, if this is a request-based SLO.</p>
   * @public
   */
  RequestBasedSli?: RequestBasedServiceLevelIndicator | undefined;

  /**
   * <p>Displays whether this is a period-based SLO or a request-based SLO.</p>
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>This structure contains the attributes that determine the goal of an SLO. This includes
   *          the time period for evaluation and the attainment threshold.</p>
   * @public
   */
  Goal: Goal | undefined;

  /**
   * <p>Each object in this array defines the length of the look-back window used to calculate one burn rate metric
   *          for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.</p>
   * @public
   */
  BurnRateConfigurations?: BurnRateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceLevelObjectiveOutput {
  /**
   * <p>A structure that contains information about the SLO that you just created.</p>
   * @public
   */
  Slo: ServiceLevelObjective | undefined;
}

/**
 * <p>This request exceeds a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteServiceLevelObjectiveInput {
  /**
   * <p>The ARN or name of the service level objective to delete.</p>
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
   * <p>The ARN or name of the SLO that you want to retrieve information about. You can find the ARNs
   *          of SLOs by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListServiceLevelObjectives.html">ListServiceLevelObjectives</a>
   *          operation.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetServiceLevelObjectiveOutput {
  /**
   * <p>A structure containing the information about the SLO.</p>
   * @public
   */
  Slo: ServiceLevelObjective | undefined;
}

/**
 * @public
 */
export interface ListServiceLevelObjectivesInput {
  /**
   * <p>You can use this optional field to specify which services you want to retrieve SLO information for.</p>
   *          <p>This is a string-to-string map. It can
   *             include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this is.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *                when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *                is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *                This is used only if the value of the <code>Type</code> field
   *                is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * <p>The name of the operation that this SLO is associated with.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The maximum number of results to return in one operation. If you omit this
   *          parameter, the default of 50 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of service level objectives.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If you are using this operation in a monitoring account, specify <code>true</code> to include SLO from source accounts in the returned data.
   *
   *       </p>
   *          <p>When you are monitoring an account, you can use Amazon Web Services account ID in <code>KeyAttribute</code> filter for service source account and <code>SloOwnerawsaccountID</code> for SLO source account with <code>IncludeLinkedAccounts</code> to filter the returned data to only a single source account.
   *
   *       </p>
   * @public
   */
  IncludeLinkedAccounts?: boolean | undefined;

  /**
   * <p>SLO's Amazon Web Services account ID.</p>
   * @public
   */
  SloOwnerAwsAccountId?: string | undefined;
}

/**
 * <p>A structure that contains information about one service level objective (SLO) created in Application Signals.</p>
 * @public
 */
export interface ServiceLevelObjectiveSummary {
  /**
   * <p>The ARN of this service level objective.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the service level objective.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>This is a string-to-string map. It can
   *          include the following fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code> designates the type of object this service level objective is for.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> specifies the type of the resource. This field is used only
   *             when the value of the <code>Type</code> field is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> specifies the name of the object. This is used only if the value of the <code>Type</code> field
   *             is <code>Service</code>, <code>RemoteService</code>, or <code>AWS::Service</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Identifier</code> identifies the resource objects of this resource.
   *             This is used only if the value of the <code>Type</code> field
   *             is <code>Resource</code> or <code>AWS::Resource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environment</code> specifies the location where this object is hosted, or what it belongs to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyAttributes?: Record<string, string> | undefined;

  /**
   * <p>If this service level objective is specific to a single operation, this
   *       field displays the name of that operation.</p>
   * @public
   */
  OperationName?: string | undefined;

  /**
   * <p>The date and time that this service level objective was created. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListServiceLevelObjectivesOutput {
  /**
   * <p>An array of structures, where each structure contains information about one SLO.</p>
   * @public
   */
  SloSummaries?: ServiceLevelObjectiveSummary[] | undefined;

  /**
   * <p>Include this value in your next use of this API to get next set
   *          of service level objectives.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceLevelObjectiveInput {
  /**
   * <p>The Amazon Resource Name (ARN) or name of the service level objective that you want to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>An optional description for the SLO.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor.</p>
   * @public
   */
  SliConfig?: ServiceLevelIndicatorConfig | undefined;

  /**
   * <p>If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor.</p>
   *          <p>You can't specify both <code>SliConfig</code> and <code>RequestBasedSliConfig</code> in the same operation.</p>
   * @public
   */
  RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig | undefined;

  /**
   * <p>A structure that contains the attributes that determine the goal of the SLO. This includes
   *          the time period for evaluation and the attainment threshold.</p>
   * @public
   */
  Goal?: Goal | undefined;

  /**
   * <p>Use this array to create <i>burn rates</i> for this SLO. Each
   *          burn rate is a metric that indicates how fast the service is consuming the error budget, relative to the attainment goal of the SLO.</p>
   * @public
   */
  BurnRateConfigurations?: BurnRateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateServiceLevelObjectiveOutput {
  /**
   * <p>A structure that contains information about the SLO that you just updated.</p>
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
   * <p>The Amazon Resource Name (ARN) of the CloudWatch resource that you want to set tags for.</p>
   *          <p>The ARN format of an Application Signals SLO is
   *          <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:slo:<i>slo-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   *          Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   *             Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the alarm.</p>
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
   * <p>The Amazon Resource Name (ARN) of the CloudWatch resource that you want to delete tags from.</p>
   *          <p>The ARN format of an Application Signals SLO is
   *          <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:slo:<i>slo-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource
   *          Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General
   *             Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
