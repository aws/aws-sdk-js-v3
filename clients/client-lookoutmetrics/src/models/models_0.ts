// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LookoutMetricsServiceException as __BaseException } from "./LookoutMetricsServiceException";

/**
 * <p>You do not have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
 * <p>Contains information about a Lambda configuration.</p>
 * @public
 */
export interface LambdaConfiguration {
  /**
   * <p>The ARN of an IAM role that has permission to invoke the Lambda function.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The ARN of the Lambda function.</p>
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SnsFormat = {
  JSON: "JSON",
  LONG_TEXT: "LONG_TEXT",
  SHORT_TEXT: "SHORT_TEXT",
} as const;

/**
 * @public
 */
export type SnsFormat = (typeof SnsFormat)[keyof typeof SnsFormat];

/**
 * <p>Contains information about the SNS topic to which you want to send your alerts and the IAM role that has
 *       access to that topic.</p>
 * @public
 */
export interface SNSConfiguration {
  /**
   * <p>The ARN of the IAM role that has access to the target SNS topic.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The ARN of the target SNS topic.</p>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The format of the SNS topic.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>JSON</code> – Send JSON alerts with an anomaly ID and a link to the anomaly detail page. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LONG_TEXT</code> – Send human-readable alerts with information about the impacted timeseries and a link to the anomaly detail page. We recommend this for email.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHORT_TEXT</code> – Send human-readable alerts with a link to the anomaly detail page. We recommend this for SMS.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SnsFormat?: SnsFormat | undefined;
}

/**
 * <p>A configuration that specifies the action to perform when anomalies are detected.</p>
 * @public
 */
export interface Action {
  /**
   * <p>A configuration for an Amazon SNS channel.</p>
   * @public
   */
  SNSConfiguration?: SNSConfiguration | undefined;

  /**
   * <p>A configuration for an AWS Lambda channel.</p>
   * @public
   */
  LambdaConfiguration?: LambdaConfiguration | undefined;
}

/**
 * @public
 */
export interface ActivateAnomalyDetectorRequest {
  /**
   * <p>The ARN of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface ActivateAnomalyDetectorResponse {}

/**
 * <p>There was a conflict processing the request. Try your request again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request was denied due to too many requests being submitted at the same time.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains information about a a field in a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The message with more information about the validation exception.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason that validation failed.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * <p>Fields that failed validation.</p>
   * @public
   */
  Fields?: ValidationExceptionField[] | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * @public
 * @enum
 */
export const AggregationFunction = {
  AVG: "AVG",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type AggregationFunction = (typeof AggregationFunction)[keyof typeof AggregationFunction];

/**
 * <p>The dimension filter, containing DimensionName and DimensionValueList.</p>
 * @public
 */
export interface DimensionFilter {
  /**
   * <p>The name of the dimension to filter on.</p>
   * @public
   */
  DimensionName?: string | undefined;

  /**
   * <p>The list of values for the dimension specified in DimensionName that you want to filter on.</p>
   * @public
   */
  DimensionValueList?: string[] | undefined;
}

/**
 * <p>The configuration of the alert filters.</p>
 * @public
 */
export interface AlertFilters {
  /**
   * <p>The list of measures that you want to get alerts for.</p>
   * @public
   */
  MetricList?: string[] | undefined;

  /**
   * <p>The list of DimensionFilter objects that are used for dimension-based filtering.</p>
   * @public
   */
  DimensionFilterList?: DimensionFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AlertStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus];

/**
 * @public
 * @enum
 */
export const AlertType = {
  LAMBDA: "LAMBDA",
  SNS: "SNS",
} as const;

/**
 * @public
 */
export type AlertType = (typeof AlertType)[keyof typeof AlertType];

/**
 * <p>A configuration for Amazon SNS-integrated notifications.</p>
 * @public
 */
export interface Alert {
  /**
   * <p>Action that will be triggered when there is an alert.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>A description of the alert.</p>
   * @public
   */
  AlertDescription?: string | undefined;

  /**
   * <p>The ARN of the alert.</p>
   * @public
   */
  AlertArn?: string | undefined;

  /**
   * <p>The ARN of the detector to which the alert is attached.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The name of the alert.</p>
   * @public
   */
  AlertName?: string | undefined;

  /**
   * <p>The minimum severity for an anomaly to trigger the alert.</p>
   * @public
   */
  AlertSensitivityThreshold?: number | undefined;

  /**
   * <p>The type of the alert.</p>
   * @public
   */
  AlertType?: AlertType | undefined;

  /**
   * <p>The status of the alert.</p>
   * @public
   */
  AlertStatus?: AlertStatus | undefined;

  /**
   * <p>The time at which the alert was last modified.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The time at which the alert was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilter.</p>
   * @public
   */
  AlertFilters?: AlertFilters | undefined;
}

/**
 * <p>Provides a summary of an alert's configuration.</p>
 * @public
 */
export interface AlertSummary {
  /**
   * <p>The ARN of the alert.</p>
   * @public
   */
  AlertArn?: string | undefined;

  /**
   * <p>The ARN of the detector to which the alert is attached.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The name of the alert.</p>
   * @public
   */
  AlertName?: string | undefined;

  /**
   * <p>The minimum severity for an anomaly to trigger the alert.</p>
   * @public
   */
  AlertSensitivityThreshold?: number | undefined;

  /**
   * <p>The type of the alert.</p>
   * @public
   */
  AlertType?: AlertType | undefined;

  /**
   * <p>The status of the alert.</p>
   * @public
   */
  AlertStatus?: AlertStatus | undefined;

  /**
   * <p>The time at which the alert was last modified.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The time at which the alert was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The alert's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const AnomalyDetectionTaskStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  FAILED_TO_SCHEDULE: "FAILED_TO_SCHEDULE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type AnomalyDetectionTaskStatus = (typeof AnomalyDetectionTaskStatus)[keyof typeof AnomalyDetectionTaskStatus];

/**
 * @public
 * @enum
 */
export const Frequency = {
  P1D: "P1D",
  PT10M: "PT10M",
  PT1H: "PT1H",
  PT5M: "PT5M",
} as const;

/**
 * @public
 */
export type Frequency = (typeof Frequency)[keyof typeof Frequency];

/**
 * <p>Contains information about a detector's configuration.</p>
 * @public
 */
export interface AnomalyDetectorConfig {
  /**
   * <p>The frequency at which the detector analyzes its source data.</p>
   * @public
   */
  AnomalyDetectorFrequency?: Frequency | undefined;
}

/**
 * <p>Contains information about a detector's configuration.</p>
 * @public
 */
export interface AnomalyDetectorConfigSummary {
  /**
   * <p>The interval at which the detector analyzes its source data.</p>
   * @public
   */
  AnomalyDetectorFrequency?: Frequency | undefined;
}

/**
 * @public
 * @enum
 */
export const DataQualityMetricType = {
  BACKTEST_INFERENCE_DATA_END_TIME_STAMP: "BACKTEST_INFERENCE_DATA_END_TIME_STAMP",
  BACKTEST_INFERENCE_DATA_START_TIME_STAMP: "BACKTEST_INFERENCE_DATA_START_TIME_STAMP",
  BACKTEST_TRAINING_DATA_END_TIME_STAMP: "BACKTEST_TRAINING_DATA_END_TIME_STAMP",
  BACKTEST_TRAINING_DATA_START_TIME_STAMP: "BACKTEST_TRAINING_DATA_START_TIME_STAMP",
  COLUMN_COMPLETENESS: "COLUMN_COMPLETENESS",
  DIMENSION_UNIQUENESS: "DIMENSION_UNIQUENESS",
  INVALID_ROWS_COMPLIANCE: "INVALID_ROWS_COMPLIANCE",
  ROWS_PARTIAL_COMPLIANCE: "ROWS_PARTIAL_COMPLIANCE",
  ROWS_PROCESSED: "ROWS_PROCESSED",
  TIME_SERIES_COUNT: "TIME_SERIES_COUNT",
} as const;

/**
 * @public
 */
export type DataQualityMetricType = (typeof DataQualityMetricType)[keyof typeof DataQualityMetricType];

/**
 * <p>An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column.</p>
 * @public
 */
export interface DataQualityMetric {
  /**
   * <p>The name of the data quality metric.</p>
   * @public
   */
  MetricType?: DataQualityMetricType | undefined;

  /**
   * <p>A description of the data quality metric.</p>
   * @public
   */
  MetricDescription?: string | undefined;

  /**
   * <p>The column that is being monitored.</p>
   * @public
   */
  RelatedColumnName?: string | undefined;

  /**
   * <p>The value of the data quality metric.</p>
   * @public
   */
  MetricValue?: number | undefined;
}

/**
 * <p>An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics.</p>
 * @public
 */
export interface MetricSetDataQualityMetric {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality metric array.</p>
   * @public
   */
  MetricSetArn?: string | undefined;

  /**
   * <p>The array of data quality metrics contained in the data quality metric set.</p>
   * @public
   */
  DataQualityMetricList?: DataQualityMetric[] | undefined;
}

/**
 * <p>Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object.</p>
 * @public
 */
export interface AnomalyDetectorDataQualityMetric {
  /**
   * <p>The start time for the data quality metrics collection.</p>
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * <p>An array of <code>DataQualityMetricList</code> objects. Each object in the array contains information about a data quality metric.</p>
   * @public
   */
  MetricSetDataQualityMetricList?: MetricSetDataQualityMetric[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnomalyDetectorFailureType = {
  ACTIVATION_FAILURE: "ACTIVATION_FAILURE",
  BACK_TEST_ACTIVATION_FAILURE: "BACK_TEST_ACTIVATION_FAILURE",
  DEACTIVATION_FAILURE: "DEACTIVATION_FAILURE",
  DELETION_FAILURE: "DELETION_FAILURE",
} as const;

/**
 * @public
 */
export type AnomalyDetectorFailureType = (typeof AnomalyDetectorFailureType)[keyof typeof AnomalyDetectorFailureType];

/**
 * @public
 * @enum
 */
export const AnomalyDetectorStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  BACK_TEST_ACTIVATING: "BACK_TEST_ACTIVATING",
  BACK_TEST_ACTIVE: "BACK_TEST_ACTIVE",
  BACK_TEST_COMPLETE: "BACK_TEST_COMPLETE",
  DEACTIVATED: "DEACTIVATED",
  DEACTIVATING: "DEACTIVATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  LEARNING: "LEARNING",
} as const;

/**
 * @public
 */
export type AnomalyDetectorStatus = (typeof AnomalyDetectorStatus)[keyof typeof AnomalyDetectorStatus];

/**
 * <p>Contains information about an an anomaly detector.</p>
 * @public
 */
export interface AnomalyDetectorSummary {
  /**
   * <p>The ARN of the detector.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The name of the detector.</p>
   * @public
   */
  AnomalyDetectorName?: string | undefined;

  /**
   * <p>A description of the detector.</p>
   * @public
   */
  AnomalyDetectorDescription?: string | undefined;

  /**
   * <p>The time at which the detector was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time at which the detector was last modified.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The status of detector.</p>
   * @public
   */
  Status?: AnomalyDetectorStatus | undefined;

  /**
   * <p>The detector's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The severity of a value of a dimension that contributed to an anomaly.</p>
 * @public
 */
export interface DimensionValueContribution {
  /**
   * <p>The value of the dimension.</p>
   * @public
   */
  DimensionValue?: string | undefined;

  /**
   * <p>The severity score of the value.</p>
   * @public
   */
  ContributionScore?: number | undefined;
}

/**
 * <p>Details about a dimension that contributed to an anomaly.</p>
 * @public
 */
export interface DimensionContribution {
  /**
   * <p>The name of the dimension.</p>
   * @public
   */
  DimensionName?: string | undefined;

  /**
   * <p>A list of dimension values that contributed to the anomaly.</p>
   * @public
   */
  DimensionValueContributionList?: DimensionValueContribution[] | undefined;
}

/**
 * <p>Details about dimensions that contributed to an anomaly.</p>
 * @public
 */
export interface ContributionMatrix {
  /**
   * <p>A list of contributing dimensions.</p>
   * @public
   */
  DimensionContributionList?: DimensionContribution[] | undefined;
}

/**
 * <p>Details about a measure affected by an anomaly.</p>
 * @public
 */
export interface MetricLevelImpact {
  /**
   * <p>The name of the measure.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The number of anomalous metrics for the measure.</p>
   * @public
   */
  NumTimeSeries?: number | undefined;

  /**
   * <p>Details about the dimensions that contributed to the anomaly.</p>
   * @public
   */
  ContributionMatrix?: ContributionMatrix | undefined;
}

/**
 * <p>A group of anomalous metrics</p>
 * @public
 */
export interface AnomalyGroup {
  /**
   * <p>The start time for the group.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The end time for the group.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId?: string | undefined;

  /**
   * <p>The severity score of the group.</p>
   * @public
   */
  AnomalyGroupScore?: number | undefined;

  /**
   * <p>The name of the primary affected measure for the group.</p>
   * @public
   */
  PrimaryMetricName?: string | undefined;

  /**
   * <p>A list of measures affected by the anomaly.</p>
   * @public
   */
  MetricLevelImpactList?: MetricLevelImpact[] | undefined;
}

/**
 * <p>Aggregated statistics about a measure affected by an anomaly.</p>
 * @public
 */
export interface ItemizedMetricStats {
  /**
   * <p>The name of the measure.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The number of times that the measure appears.</p>
   * @public
   */
  OccurrenceCount?: number | undefined;
}

/**
 * <p>Aggregated statistics for a group of anomalous metrics.</p>
 * @public
 */
export interface AnomalyGroupStatistics {
  /**
   * <p>The start of the time range that was searched.</p>
   * @public
   */
  EvaluationStartDate?: string | undefined;

  /**
   * <p>The number of groups found.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>Statistics for individual metrics within the group.</p>
   * @public
   */
  ItemizedMetricStatsList?: ItemizedMetricStats[] | undefined;
}

/**
 * <p>Details about a group of anomalous metrics.</p>
 * @public
 */
export interface AnomalyGroupSummary {
  /**
   * <p>The start time for the group.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The end time for the group.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId?: string | undefined;

  /**
   * <p>The severity score of the group.</p>
   * @public
   */
  AnomalyGroupScore?: number | undefined;

  /**
   * <p>The name of the primary affected measure for the group.</p>
   * @public
   */
  PrimaryMetricName?: string | undefined;
}

/**
 * <p>An anomalous metric in an anomaly group.</p>
 * @public
 */
export interface AnomalyGroupTimeSeries {
  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The ID of the metric.</p>
   * @public
   */
  TimeSeriesId?: string | undefined;
}

/**
 * <p>Feedback for an anomalous metric.</p>
 * @public
 */
export interface AnomalyGroupTimeSeriesFeedback {
  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The ID of the metric.</p>
   * @public
   */
  TimeSeriesId: string | undefined;

  /**
   * <p>Feedback on whether the metric is a legitimate anomaly.</p>
   * @public
   */
  IsAnomaly: boolean | undefined;
}

/**
 * <p>Details about an Amazon AppFlow flow datasource.</p>
 * @public
 */
export interface AppFlowConfig {
  /**
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access the flow.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p> name of the flow.</p>
   * @public
   */
  FlowName?: string | undefined;
}

/**
 * <p>Settings for backtest mode.</p>
 * @public
 */
export interface BackTestConfiguration {
  /**
   * <p>Run a backtest instead of monitoring new data.</p>
   * @public
   */
  RunBackTestMode: boolean | undefined;
}

/**
 * <p>Details about an Amazon Athena datasource.</p>
 * @public
 */
export interface AthenaSourceConfig {
  /**
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access the data.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The database's name.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The database's data catalog.</p>
   * @public
   */
  DataCatalog?: string | undefined;

  /**
   * <p>The database's table name.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The database's work group name.</p>
   * @public
   */
  WorkGroupName?: string | undefined;

  /**
   * <p>The database's results path.</p>
   * @public
   */
  S3ResultsPath?: string | undefined;

  /**
   * <p>Settings for backtest mode.</p>
   * @public
   */
  BackTestConfiguration?: BackTestConfiguration | undefined;
}

/**
 * <p>An attribute value.</p>
 * @public
 */
export interface AttributeValue {
  /**
   * <p>A string.</p>
   * @public
   */
  S?: string | undefined;

  /**
   * <p>A number.</p>
   * @public
   */
  N?: string | undefined;

  /**
   * <p>A binary value.</p>
   * @public
   */
  B?: string | undefined;

  /**
   * <p>A list of strings.</p>
   * @public
   */
  SS?: string[] | undefined;

  /**
   * <p>A list of numbers.</p>
   * @public
   */
  NS?: string[] | undefined;

  /**
   * <p>A list of binary values.</p>
   * @public
   */
  BS?: string[] | undefined;
}

/**
 * <p>An auto detection source config.</p>
 * @public
 */
export interface AutoDetectionS3SourceConfig {
  /**
   * <p>The config's templated path list.</p>
   * @public
   */
  TemplatedPathList?: string[] | undefined;

  /**
   * <p>The config's historical data path list.</p>
   * @public
   */
  HistoricalDataPathList?: string[] | undefined;
}

/**
 * <p>An auto detection metric source.</p>
 * @public
 */
export interface AutoDetectionMetricSource {
  /**
   * <p>The source's source config.</p>
   * @public
   */
  S3SourceConfig?: AutoDetectionS3SourceConfig | undefined;
}

/**
 * @public
 */
export interface BackTestAnomalyDetectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface BackTestAnomalyDetectorResponse {}

/**
 * <p>Details about an Amazon CloudWatch datasource.</p>
 * @public
 */
export interface CloudWatchConfig {
  /**
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Settings for backtest mode.</p>
   * @public
   */
  BackTestConfiguration?: BackTestConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const Confidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Confidence = (typeof Confidence)[keyof typeof Confidence];

/**
 * @public
 */
export interface CreateAlertRequest {
  /**
   * <p>The name of the alert.</p>
   * @public
   */
  AlertName: string | undefined;

  /**
   * <p>An integer from 0 to 100 specifying the alert sensitivity threshold.</p>
   * @public
   */
  AlertSensitivityThreshold?: number | undefined;

  /**
   * <p>A description of the alert.</p>
   * @public
   */
  AlertDescription?: string | undefined;

  /**
   * <p>The ARN of the detector to which the alert is attached.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>Action that will be triggered when there is an alert.</p>
   * @public
   */
  Action: Action | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilterList.</p>
   * @public
   */
  AlertFilters?: AlertFilters | undefined;
}

/**
 * @public
 */
export interface CreateAlertResponse {
  /**
   * <p>The ARN of the alert.</p>
   * @public
   */
  AlertArn?: string | undefined;
}

/**
 * <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The service code.</p>
   * @public
   */
  ServiceCode?: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * @public
 */
export interface CreateAnomalyDetectorRequest {
  /**
   * <p>The name of the detector.</p>
   * @public
   */
  AnomalyDetectorName: string | undefined;

  /**
   * <p>A description of the detector.</p>
   * @public
   */
  AnomalyDetectorDescription?: string | undefined;

  /**
   * <p>Contains information about the configuration of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorConfig: AnomalyDetectorConfig | undefined;

  /**
   * <p>The ARN of the KMS key to use to encrypt your data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyDetectorResponse {
  /**
   * <p>The ARN of the detector.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterOperation = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type FilterOperation = (typeof FilterOperation)[keyof typeof FilterOperation];

/**
 * <p>Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The value that you want to include in the filter.</p>
   * @public
   */
  DimensionValue?: string | undefined;

  /**
   * <p>The condition to apply.</p>
   * @public
   */
  FilterOperation?: FilterOperation | undefined;
}

/**
 * <p>Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation. </p>
 * @public
 */
export interface MetricSetDimensionFilter {
  /**
   * <p>The dimension that you want to filter on.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of filters that you are applying.</p>
   * @public
   */
  FilterList?: Filter[] | undefined;
}

/**
 * <p>A calculation made by contrasting a measure and a dimension from your source data.</p>
 * @public
 */
export interface Metric {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>The function with which the metric is calculated.</p>
   * @public
   */
  AggregationFunction: AggregationFunction | undefined;

  /**
   * <p>The namespace for the metric.</p>
   * @public
   */
  Namespace?: string | undefined;
}

/**
 * <p>Contains configuration information about the Amazon Virtual Private Cloud (VPC).</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>An array of strings containing the Amazon VPC subnet IDs (e.g., <code>subnet-0bb1c79de3EXAMPLE</code>.</p>
   * @public
   */
  SubnetIdList: string[] | undefined;

  /**
   * <p>An array of strings containing the list of security groups.</p>
   * @public
   */
  SecurityGroupIdList: string[] | undefined;
}

/**
 * <p>Contains information about the Amazon Relational Database Service (RDS) configuration.</p>
 * @public
 */
export interface RDSSourceConfig {
  /**
   * <p>A string identifying the database instance.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>The host name of the database.</p>
   * @public
   */
  DatabaseHost?: string | undefined;

  /**
   * <p>The port number where the database can be accessed.</p>
   * @public
   */
  DatabasePort?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager role.</p>
   * @public
   */
  SecretManagerArn?: string | undefined;

  /**
   * <p>The name of the RDS database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table in the database.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * <p>Provides information about the Amazon Redshift database configuration.</p>
 * @public
 */
export interface RedshiftSourceConfig {
  /**
   * <p>A string identifying the Redshift cluster.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the database host.</p>
   * @public
   */
  DatabaseHost?: string | undefined;

  /**
   * <p>The port number where the database can be accessed.</p>
   * @public
   */
  DatabasePort?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager role.</p>
   * @public
   */
  SecretManagerArn?: string | undefined;

  /**
   * <p>The Redshift database name.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The table name of the Redshift database.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role providing access to the database.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Contains information about the Amazon Virtual Private Cloud (VPC) configuration.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const CSVFileCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CSVFileCompression = (typeof CSVFileCompression)[keyof typeof CSVFileCompression];

/**
 * <p>Contains information about how a source CSV data file should be analyzed.</p>
 * @public
 */
export interface CsvFormatDescriptor {
  /**
   * <p>The level of compression of the source CSV file.</p>
   * @public
   */
  FileCompression?: CSVFileCompression | undefined;

  /**
   * <p>The character set in which the source CSV file is written.</p>
   * @public
   */
  Charset?: string | undefined;

  /**
   * <p>Whether or not the source CSV file contains a header.</p>
   * @public
   */
  ContainsHeader?: boolean | undefined;

  /**
   * <p>The character used to delimit the source CSV file.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>A list of the source CSV file's headers, if any.</p>
   * @public
   */
  HeaderList?: string[] | undefined;

  /**
   * <p>The character used as a quote character.</p>
   * @public
   */
  QuoteSymbol?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JsonFileCompression = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type JsonFileCompression = (typeof JsonFileCompression)[keyof typeof JsonFileCompression];

/**
 * <p>Contains information about how a source JSON data file should be analyzed.</p>
 * @public
 */
export interface JsonFormatDescriptor {
  /**
   * <p>The level of compression of the source CSV file.</p>
   * @public
   */
  FileCompression?: JsonFileCompression | undefined;

  /**
   * <p>The character set in which the source JSON file is written.</p>
   * @public
   */
  Charset?: string | undefined;
}

/**
 * <p>Contains information about a source file's formatting.</p>
 * @public
 */
export interface FileFormatDescriptor {
  /**
   * <p>Contains information about how a source CSV data file should be analyzed.</p>
   * @public
   */
  CsvFormatDescriptor?: CsvFormatDescriptor | undefined;

  /**
   * <p>Contains information about how a source JSON data file should be analyzed.</p>
   * @public
   */
  JsonFormatDescriptor?: JsonFormatDescriptor | undefined;
}

/**
 * <p>Contains information about the configuration of the S3 bucket that contains source files.</p>
 * @public
 */
export interface S3SourceConfig {
  /**
   * <p>The ARN of an IAM role that has read and write access permissions to the source S3 bucket.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A list of templated paths to the source files.</p>
   * @public
   */
  TemplatedPathList?: string[] | undefined;

  /**
   * <p>A list of paths to the historical data files.</p>
   * @public
   */
  HistoricalDataPathList?: string[] | undefined;

  /**
   * <p>Contains information about a source file's formatting.</p>
   * @public
   */
  FileFormatDescriptor?: FileFormatDescriptor | undefined;
}

/**
 * <p>Contains information about source data used to generate metrics.</p>
 * @public
 */
export interface MetricSource {
  /**
   * <p>Contains information about the configuration of the S3 bucket that contains source files.</p>
   * @public
   */
  S3SourceConfig?: S3SourceConfig | undefined;

  /**
   * <p>Details about an AppFlow datasource.</p>
   * @public
   */
  AppFlowConfig?: AppFlowConfig | undefined;

  /**
   * <p>Details about an Amazon CloudWatch monitoring datasource.</p>
   * @public
   */
  CloudWatchConfig?: CloudWatchConfig | undefined;

  /**
   * <p>Details about an Amazon Relational Database Service (RDS) datasource.</p>
   * @public
   */
  RDSSourceConfig?: RDSSourceConfig | undefined;

  /**
   * <p>Details about an Amazon Redshift database datasource.</p>
   * @public
   */
  RedshiftSourceConfig?: RedshiftSourceConfig | undefined;

  /**
   * <p>Details about an Amazon Athena datasource.</p>
   * @public
   */
  AthenaSourceConfig?: AthenaSourceConfig | undefined;
}

/**
 * <p>Contains information about the column used to track time in a source data file.</p>
 * @public
 */
export interface TimestampColumn {
  /**
   * <p>The name of the timestamp column.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>The format of the timestamp column.</p>
   * @public
   */
  ColumnFormat?: string | undefined;
}

/**
 * @public
 */
export interface CreateMetricSetRequest {
  /**
   * <p>The ARN of the anomaly detector that will use the dataset.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  MetricSetName: string | undefined;

  /**
   * <p>A description of the dataset you are creating.</p>
   * @public
   */
  MetricSetDescription?: string | undefined;

  /**
   * <p>A list of metrics that the dataset will contain.</p>
   * @public
   */
  MetricList: Metric[] | undefined;

  /**
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   * @public
   */
  Offset?: number | undefined;

  /**
   * <p>Contains information about the column used for tracking time in your source data.</p>
   * @public
   */
  TimestampColumn?: TimestampColumn | undefined;

  /**
   * <p>A list of the fields you want to treat as dimensions.</p>
   * @public
   */
  DimensionList?: string[] | undefined;

  /**
   * <p>The frequency with which the source data will be analyzed for anomalies.</p>
   * @public
   */
  MetricSetFrequency?: Frequency | undefined;

  /**
   * <p>Contains information about how the source data should be interpreted.</p>
   * @public
   */
  MetricSource: MetricSource | undefined;

  /**
   * <p>The time zone in which your source data was recorded.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A list of filters that specify which data is kept for anomaly detection.</p>
   * @public
   */
  DimensionFilterList?: MetricSetDimensionFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  MetricSetArn?: string | undefined;
}

/**
 * @public
 */
export interface DeactivateAnomalyDetectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeactivateAnomalyDetectorResponse {}

/**
 * @public
 */
export interface DeleteAlertRequest {
  /**
   * <p>The ARN of the alert to delete.</p>
   * @public
   */
  AlertArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlertResponse {}

/**
 * @public
 */
export interface DeleteAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to delete.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorResponse {}

/**
 * @public
 */
export interface DescribeAlertRequest {
  /**
   * <p>The ARN of the alert to describe.</p>
   * @public
   */
  AlertArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlertResponse {
  /**
   * <p>Contains information about an alert.</p>
   * @public
   */
  Alert?: Alert | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectionExecutionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The timestamp of the anomaly detection job.</p>
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The status of an anomaly detector run.</p>
 * @public
 */
export interface ExecutionStatus {
  /**
   * <p>The run's timestamp.</p>
   * @public
   */
  Timestamp?: string | undefined;

  /**
   * <p>The run's status.</p>
   * @public
   */
  Status?: AnomalyDetectionTaskStatus | undefined;

  /**
   * <p>The reason that the run failed, if applicable.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectionExecutionsResponse {
  /**
   * <p>A list of detection jobs.</p>
   * @public
   */
  ExecutionList?: ExecutionStatus[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to describe.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorResponse {
  /**
   * <p>The ARN of the detector.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The name of the detector.</p>
   * @public
   */
  AnomalyDetectorName?: string | undefined;

  /**
   * <p>A description of the detector.</p>
   * @public
   */
  AnomalyDetectorDescription?: string | undefined;

  /**
   * <p>Contains information about the detector's configuration.</p>
   * @public
   */
  AnomalyDetectorConfig?: AnomalyDetectorConfigSummary | undefined;

  /**
   * <p>The time at which the detector was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time at which the detector was last modified.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The status of the detector.</p>
   * @public
   */
  Status?: AnomalyDetectorStatus | undefined;

  /**
   * <p>The reason that the detector failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ARN of the KMS key to use to encrypt your data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The process that caused the detector to fail.</p>
   * @public
   */
  FailureType?: AnomalyDetectorFailureType | undefined;
}

/**
 * @public
 */
export interface DescribeMetricSetRequest {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  MetricSetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  MetricSetArn?: string | undefined;

  /**
   * <p>The ARN of the detector that contains the dataset.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  MetricSetName?: string | undefined;

  /**
   * <p>The dataset's description.</p>
   * @public
   */
  MetricSetDescription?: string | undefined;

  /**
   * <p>The time at which the dataset was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time at which the dataset was last modified.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   * @public
   */
  Offset?: number | undefined;

  /**
   * <p>A list of the metrics defined by the dataset.</p>
   * @public
   */
  MetricList?: Metric[] | undefined;

  /**
   * <p>Contains information about the column used for tracking time in your source data.</p>
   * @public
   */
  TimestampColumn?: TimestampColumn | undefined;

  /**
   * <p>A list of the dimensions chosen for analysis.</p>
   * @public
   */
  DimensionList?: string[] | undefined;

  /**
   * <p>The interval at which the data will be analyzed for anomalies.</p>
   * @public
   */
  MetricSetFrequency?: Frequency | undefined;

  /**
   * <p>The time zone in which the dataset's data was recorded.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Contains information about the dataset's source data.</p>
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * <p>The dimensions and their values that were used to filter the dataset.</p>
   * @public
   */
  DimensionFilterList?: MetricSetDimensionFilter[] | undefined;
}

/**
 * <p>An inferred field.</p>
 * @public
 */
export interface DetectedField {
  /**
   * <p>The field's value.</p>
   * @public
   */
  Value?: AttributeValue | undefined;

  /**
   * <p>The field's confidence.</p>
   * @public
   */
  Confidence?: Confidence | undefined;

  /**
   * <p>The field's message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Properties of an inferred CSV format.</p>
 * @public
 */
export interface DetectedCsvFormatDescriptor {
  /**
   * <p>The format's file compression.</p>
   * @public
   */
  FileCompression?: DetectedField | undefined;

  /**
   * <p>The format's charset.</p>
   * @public
   */
  Charset?: DetectedField | undefined;

  /**
   * <p>Whether the format includes a header.</p>
   * @public
   */
  ContainsHeader?: DetectedField | undefined;

  /**
   * <p>The format's delimiter.</p>
   * @public
   */
  Delimiter?: DetectedField | undefined;

  /**
   * <p>The format's header list.</p>
   * @public
   */
  HeaderList?: DetectedField | undefined;

  /**
   * <p>The format's quote symbol.</p>
   * @public
   */
  QuoteSymbol?: DetectedField | undefined;
}

/**
 * <p>A detected JSON format descriptor.</p>
 * @public
 */
export interface DetectedJsonFormatDescriptor {
  /**
   * <p>The format's file compression.</p>
   * @public
   */
  FileCompression?: DetectedField | undefined;

  /**
   * <p>The format's character set.</p>
   * @public
   */
  Charset?: DetectedField | undefined;
}

/**
 * <p>Properties of an inferred data format.</p>
 * @public
 */
export interface DetectedFileFormatDescriptor {
  /**
   * <p>Details about a CSV format.</p>
   * @public
   */
  CsvFormatDescriptor?: DetectedCsvFormatDescriptor | undefined;

  /**
   * <p>Details about a JSON format.</p>
   * @public
   */
  JsonFormatDescriptor?: DetectedJsonFormatDescriptor | undefined;
}

/**
 * <p>An inferred source configuration.</p>
 * @public
 */
export interface DetectedS3SourceConfig {
  /**
   * <p>The source's file format descriptor.</p>
   * @public
   */
  FileFormatDescriptor?: DetectedFileFormatDescriptor | undefined;
}

/**
 * <p>An inferred data source.</p>
 * @public
 */
export interface DetectedMetricSource {
  /**
   * <p>The data source's source configuration.</p>
   * @public
   */
  S3SourceConfig?: DetectedS3SourceConfig | undefined;
}

/**
 * <p>An inferred dataset configuration.</p>
 * @public
 */
export interface DetectedMetricSetConfig {
  /**
   * <p>The dataset's offset.</p>
   * @public
   */
  Offset?: DetectedField | undefined;

  /**
   * <p>The dataset's interval.</p>
   * @public
   */
  MetricSetFrequency?: DetectedField | undefined;

  /**
   * <p>The dataset's data source.</p>
   * @public
   */
  MetricSource?: DetectedMetricSource | undefined;
}

/**
 * @public
 */
export interface DetectMetricSetConfigRequest {
  /**
   * <p>An anomaly detector ARN.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>A data source.</p>
   * @public
   */
  AutoDetectionMetricSource: AutoDetectionMetricSource | undefined;
}

/**
 * @public
 */
export interface DetectMetricSetConfigResponse {
  /**
   * <p>The inferred dataset configuration for the datasource.</p>
   * @public
   */
  DetectedMetricSetConfig?: DetectedMetricSetConfig | undefined;
}

/**
 * <p>A dimension name and value.</p>
 * @public
 */
export interface DimensionNameValue {
  /**
   * <p>The name of the dimension.</p>
   * @public
   */
  DimensionName: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   * @public
   */
  DimensionValue: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalyGroupRequest {
  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalyGroupResponse {
  /**
   * <p>Details about the anomaly group.</p>
   * @public
   */
  AnomalyGroup?: AnomalyGroup | undefined;
}

/**
 * @public
 */
export interface GetDataQualityMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a specific data quality metric set.</p>
   * @public
   */
  MetricSetArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityMetricsResponse {
  /**
   * <p>A list of the data quality metrics for the <code>AnomalyDetectorArn</code> that you requested.</p>
   * @public
   */
  AnomalyDetectorDataQualityMetricList?: AnomalyDetectorDataQualityMetric[] | undefined;
}

/**
 * @public
 */
export interface GetFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The anomalous metric and group ID.</p>
   * @public
   */
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeries | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about feedback submitted for an anomalous metric.</p>
 * @public
 */
export interface TimeSeriesFeedback {
  /**
   * <p>The ID of the metric.</p>
   * @public
   */
  TimeSeriesId?: string | undefined;

  /**
   * <p>Feedback on whether the metric is a legitimate anomaly.</p>
   * @public
   */
  IsAnomaly?: boolean | undefined;
}

/**
 * @public
 */
export interface GetFeedbackResponse {
  /**
   * <p>Feedback for an anomalous metric.</p>
   * @public
   */
  AnomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about the source configuration in Amazon S3.</p>
 * @public
 */
export interface SampleDataS3SourceConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of strings containing the list of templated paths.</p>
   * @public
   */
  TemplatedPathList?: string[] | undefined;

  /**
   * <p>An array of strings containing the historical set of data paths.</p>
   * @public
   */
  HistoricalDataPathList?: string[] | undefined;

  /**
   * <p>Contains information about a source file's formatting.</p>
   * @public
   */
  FileFormatDescriptor: FileFormatDescriptor | undefined;
}

/**
 * @public
 */
export interface GetSampleDataRequest {
  /**
   * <p>A datasource bucket in Amazon S3.</p>
   * @public
   */
  S3SourceConfig?: SampleDataS3SourceConfig | undefined;
}

/**
 * @public
 */
export interface GetSampleDataResponse {
  /**
   * <p>A list of header labels for the records.</p>
   * @public
   */
  HeaderValues?: string[] | undefined;

  /**
   * <p>A list of records.</p>
   * @public
   */
  SampleRows?: string[][] | undefined;
}

/**
 * @public
 * @enum
 */
export const RelationshipType = {
  CAUSE_OF_INPUT_ANOMALY_GROUP: "CAUSE_OF_INPUT_ANOMALY_GROUP",
  EFFECT_OF_INPUT_ANOMALY_GROUP: "EFFECT_OF_INPUT_ANOMALY_GROUP",
} as const;

/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * <p>Aggregated details about the measures contributing to the anomaly group, and the measures
 *             potentially impacted by the anomaly group.</p>
 *          <p></p>
 * @public
 */
export interface InterMetricImpactDetails {
  /**
   * <p>The name of the measure.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId?: string | undefined;

  /**
   * <p>Whether a measure is a potential cause of the anomaly group
   *             (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), or whether the measure is impacted by the
   *             anomaly group (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>).</p>
   * @public
   */
  RelationshipType?: RelationshipType | undefined;

  /**
   * <p>For potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), the percentage
   *             contribution the measure has in causing the anomalies.</p>
   * @public
   */
  ContributionPercentage?: number | undefined;
}

/**
 * @public
 */
export interface ListAlertsRequest {
  /**
   * <p>The ARN of the alert's detector.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To
   *       retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results that will be displayed by the request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAlertsResponse {
  /**
   * <p>Contains information about an alert.</p>
   * @public
   */
  AlertSummaryList?: AlertSummary[] | undefined;

  /**
   * <p>If the response is truncated, the service returns this token. To retrieve the next set of results, use this
   *       token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To
   *       retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsResponse {
  /**
   * <p>A list of anomaly detectors in the account in the current region.</p>
   * @public
   */
  AnomalyDetectorSummaryList?: AnomalyDetectorSummary[] | undefined;

  /**
   * <p>If the response is truncated, the service returns this token. To retrieve the next set of results, use the
   *       token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupRelatedMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or
   *             downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.</p>
   * @public
   */
  RelationshipTypeFilter?: RelationshipType | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next
   *             page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupRelatedMetricsResponse {
  /**
   * <p>Aggregated details about the measures contributing to the anomaly group, and the measures
   *             potentially impacted by the anomaly group.</p>
   * @public
   */
  InterMetricImpactList?: InterMetricImpactDetails[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupSummariesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The minimum severity score for inclusion in the output.</p>
   * @public
   */
  SensitivityThreshold: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupSummariesResponse {
  /**
   * <p>A list of anomaly group summaries.</p>
   * @public
   */
  AnomalyGroupSummaryList?: AnomalyGroupSummary[] | undefined;

  /**
   * <p>Aggregated details about the anomaly groups.</p>
   * @public
   */
  AnomalyGroupStatistics?: AnomalyGroupStatistics | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupTimeSeriesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The name of the measure field.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as
 *         <i>availability</i> in the <i>us-east-1</i> Region.</p>
 * @public
 */
export interface TimeSeries {
  /**
   * <p>The ID of the metric.</p>
   * @public
   */
  TimeSeriesId: string | undefined;

  /**
   * <p>The dimensions of the metric.</p>
   * @public
   */
  DimensionList: DimensionNameValue[] | undefined;

  /**
   * <p>The values for the metric.</p>
   * @public
   */
  MetricValueList: number[] | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupTimeSeriesResponse {
  /**
   * <p>The ID of the anomaly group.</p>
   * @public
   */
  AnomalyGroupId?: string | undefined;

  /**
   * <p>The name of the measure field.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>Timestamps for the anomalous metrics.</p>
   * @public
   */
  TimestampList?: string[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of anomalous metrics.</p>
   * @public
   */
  TimeSeriesList?: TimeSeries[] | undefined;
}

/**
 * @public
 */
export interface ListMetricSetsRequest {
  /**
   * <p>The ARN of the anomaly detector containing the metrics sets to list.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about a dataset.</p>
 * @public
 */
export interface MetricSetSummary {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  MetricSetArn?: string | undefined;

  /**
   * <p>The ARN of the detector to which the dataset belongs.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;

  /**
   * <p>The description of the dataset.</p>
   * @public
   */
  MetricSetDescription?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  MetricSetName?: string | undefined;

  /**
   * <p>The time at which the dataset was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time at which the dataset was last modified.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The dataset's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMetricSetsResponse {
  /**
   * <p>A list of the datasets in the AWS Region, with configuration details for each.</p>
   * @public
   */
  MetricSetSummaryList?: MetricSetSummary[] | undefined;

  /**
   * <p>If the response is truncated, the list call returns this token. To retrieve the next set
   *       of results, use the token in the next list request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The resource's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>Feedback for an anomalous metric.</p>
   * @public
   */
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesFeedback | undefined;
}

/**
 * @public
 */
export interface PutFeedbackResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following
   *       symbols: <code>_.:/=+@-</code>
   *          </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys to remove from the resource's tags.</p>
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
export interface UpdateAlertRequest {
  /**
   * <p>The ARN of the alert to update.</p>
   * @public
   */
  AlertArn: string | undefined;

  /**
   * <p>A description of the alert.</p>
   * @public
   */
  AlertDescription?: string | undefined;

  /**
   * <p>An integer from 0 to 100 specifying the alert sensitivity threshold.</p>
   * @public
   */
  AlertSensitivityThreshold?: number | undefined;

  /**
   * <p>Action that will be triggered when there is an alert.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilterList.</p>
   * @public
   */
  AlertFilters?: AlertFilters | undefined;
}

/**
 * @public
 */
export interface UpdateAlertResponse {
  /**
   * <p>The ARN of the updated alert.</p>
   * @public
   */
  AlertArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to update.</p>
   * @public
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS KMS encryption key.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The updated detector description.</p>
   * @public
   */
  AnomalyDetectorDescription?: string | undefined;

  /**
   * <p>Contains information about the configuration to which the detector will be updated.</p>
   * @public
   */
  AnomalyDetectorConfig?: AnomalyDetectorConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalyDetectorResponse {
  /**
   * <p>The ARN of the updated detector.</p>
   * @public
   */
  AnomalyDetectorArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMetricSetRequest {
  /**
   * <p>The ARN of the dataset to update.</p>
   * @public
   */
  MetricSetArn: string | undefined;

  /**
   * <p>The dataset's description.</p>
   * @public
   */
  MetricSetDescription?: string | undefined;

  /**
   * <p>The metric list.</p>
   * @public
   */
  MetricList?: Metric[] | undefined;

  /**
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   * @public
   */
  Offset?: number | undefined;

  /**
   * <p>The timestamp column.</p>
   * @public
   */
  TimestampColumn?: TimestampColumn | undefined;

  /**
   * <p>The dimension list.</p>
   * @public
   */
  DimensionList?: string[] | undefined;

  /**
   * <p>The dataset's interval.</p>
   * @public
   */
  MetricSetFrequency?: Frequency | undefined;

  /**
   * <p>Contains information about source data used to generate metrics.</p>
   * @public
   */
  MetricSource?: MetricSource | undefined;

  /**
   * <p>Describes a list of filters for choosing specific dimensions and specific values. Each
   *       filter consists of the dimension and one of its values that you want to include. When
   *       multiple dimensions or values are specified, the dimensions are joined with an AND operation
   *       and the values are joined with an OR operation.</p>
   * @public
   */
  DimensionFilterList?: MetricSetDimensionFilter[] | undefined;
}

/**
 * @public
 */
export interface UpdateMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  MetricSetArn?: string | undefined;
}
