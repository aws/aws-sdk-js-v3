// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LookoutMetricsServiceException as __BaseException } from "./LookoutMetricsServiceException";

/**
 * @public
 * <p>You do not have sufficient permissions to perform this action.</p>
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
 * @public
 * <p>Contains information about a Lambda configuration.</p>
 */
export interface LambdaConfiguration {
  /**
   * @public
   * <p>The ARN of an IAM role that has permission to invoke the Lambda function.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the Lambda function.</p>
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
 * @public
 * <p>Contains information about the SNS topic to which you want to send your alerts and the IAM role that has
 *       access to that topic.</p>
 */
export interface SNSConfiguration {
  /**
   * @public
   * <p>The ARN of the IAM role that has access to the target SNS topic.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the target SNS topic.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * @public
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
   */
  SnsFormat?: SnsFormat;
}

/**
 * @public
 * <p>A configuration that specifies the action to perform when anomalies are detected.</p>
 */
export interface Action {
  /**
   * @public
   * <p>A configuration for an Amazon SNS channel.</p>
   */
  SNSConfiguration?: SNSConfiguration;

  /**
   * @public
   * <p>A configuration for an AWS Lambda channel.</p>
   */
  LambdaConfiguration?: LambdaConfiguration;
}

/**
 * @public
 */
export interface ActivateAnomalyDetectorRequest {
  /**
   * @public
   * <p>The ARN of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface ActivateAnomalyDetectorResponse {}

/**
 * @public
 * <p>There was a conflict processing the request. Try your request again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  ResourceType?: string;
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
 * @public
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p>
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
 * @public
 * <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  ResourceType?: string;
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
 * @public
 * <p>The request was denied due to too many requests being submitted at the same time.</p>
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
 * @public
 * <p>Contains information about a a field in a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The message with more information about the validation exception.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The reason that validation failed.</p>
   */
  Reason?: ValidationExceptionReason;

  /**
   * @public
   * <p>Fields that failed validation.</p>
   */
  Fields?: ValidationExceptionField[];
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
 * @public
 * <p>The dimension filter, containing DimensionName and DimensionValueList.</p>
 */
export interface DimensionFilter {
  /**
   * @public
   * <p>The name of the dimension to filter on.</p>
   */
  DimensionName?: string;

  /**
   * @public
   * <p>The list of values for the dimension specified in DimensionName that you want to filter on.</p>
   */
  DimensionValueList?: string[];
}

/**
 * @public
 * <p>The configuration of the alert filters.</p>
 */
export interface AlertFilters {
  /**
   * @public
   * <p>The list of measures that you want to get alerts for.</p>
   */
  MetricList?: string[];

  /**
   * @public
   * <p>The list of DimensionFilter objects that are used for dimension-based filtering.</p>
   */
  DimensionFilterList?: DimensionFilter[];
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
 * @public
 * <p>A configuration for Amazon SNS-integrated notifications.</p>
 */
export interface Alert {
  /**
   * @public
   * <p>Action that will be triggered when there is an alert.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>A description of the alert.</p>
   */
  AlertDescription?: string;

  /**
   * @public
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;

  /**
   * @public
   * <p>The ARN of the detector to which the alert is attached.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The name of the alert.</p>
   */
  AlertName?: string;

  /**
   * @public
   * <p>The minimum severity for an anomaly to trigger the alert.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * @public
   * <p>The type of the alert.</p>
   */
  AlertType?: AlertType;

  /**
   * @public
   * <p>The status of the alert.</p>
   */
  AlertStatus?: AlertStatus;

  /**
   * @public
   * <p>The time at which the alert was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The time at which the alert was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilter.</p>
   */
  AlertFilters?: AlertFilters;
}

/**
 * @public
 * <p>Provides a summary of an alert's configuration.</p>
 */
export interface AlertSummary {
  /**
   * @public
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;

  /**
   * @public
   * <p>The ARN of the detector to which the alert is attached.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The name of the alert.</p>
   */
  AlertName?: string;

  /**
   * @public
   * <p>The minimum severity for an anomaly to trigger the alert.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * @public
   * <p>The type of the alert.</p>
   */
  AlertType?: AlertType;

  /**
   * @public
   * <p>The status of the alert.</p>
   */
  AlertStatus?: AlertStatus;

  /**
   * @public
   * <p>The time at which the alert was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The time at which the alert was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The alert's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   */
  Tags?: Record<string, string>;
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
 * @public
 * <p>Contains information about a detector's configuration.</p>
 */
export interface AnomalyDetectorConfig {
  /**
   * @public
   * <p>The frequency at which the detector analyzes its source data.</p>
   */
  AnomalyDetectorFrequency?: Frequency;
}

/**
 * @public
 * <p>Contains information about a detector's configuration.</p>
 */
export interface AnomalyDetectorConfigSummary {
  /**
   * @public
   * <p>The interval at which the detector analyzes its source data.</p>
   */
  AnomalyDetectorFrequency?: Frequency;
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
 * @public
 * <p>An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column.</p>
 */
export interface DataQualityMetric {
  /**
   * @public
   * <p>The name of the data quality metric.</p>
   */
  MetricType?: DataQualityMetricType;

  /**
   * @public
   * <p>A description of the data quality metric.</p>
   */
  MetricDescription?: string;

  /**
   * @public
   * <p>The column that is being monitored.</p>
   */
  RelatedColumnName?: string;

  /**
   * @public
   * <p>The value of the data quality metric.</p>
   */
  MetricValue?: number;
}

/**
 * @public
 * <p>An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics.</p>
 */
export interface MetricSetDataQualityMetric {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data quality metric array.</p>
   */
  MetricSetArn?: string;

  /**
   * @public
   * <p>The array of data quality metrics contained in the data quality metric set.</p>
   */
  DataQualityMetricList?: DataQualityMetric[];
}

/**
 * @public
 * <p>Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object.</p>
 */
export interface AnomalyDetectorDataQualityMetric {
  /**
   * @public
   * <p>The start time for the data quality metrics collection.</p>
   */
  StartTimestamp?: Date;

  /**
   * @public
   * <p>An array of <code>DataQualityMetricList</code> objects. Each object in the array contains information about a data quality metric.</p>
   */
  MetricSetDataQualityMetricList?: MetricSetDataQualityMetric[];
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
 * @public
 * <p>Contains information about an an anomaly detector.</p>
 */
export interface AnomalyDetectorSummary {
  /**
   * @public
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The name of the detector.</p>
   */
  AnomalyDetectorName?: string;

  /**
   * @public
   * <p>A description of the detector.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * @public
   * <p>The time at which the detector was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time at which the detector was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The status of detector.</p>
   */
  Status?: AnomalyDetectorStatus;

  /**
   * @public
   * <p>The detector's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The severity of a value of a dimension that contributed to an anomaly.</p>
 */
export interface DimensionValueContribution {
  /**
   * @public
   * <p>The value of the dimension.</p>
   */
  DimensionValue?: string;

  /**
   * @public
   * <p>The severity score of the value.</p>
   */
  ContributionScore?: number;
}

/**
 * @public
 * <p>Details about a dimension that contributed to an anomaly.</p>
 */
export interface DimensionContribution {
  /**
   * @public
   * <p>The name of the dimension.</p>
   */
  DimensionName?: string;

  /**
   * @public
   * <p>A list of dimension values that contributed to the anomaly.</p>
   */
  DimensionValueContributionList?: DimensionValueContribution[];
}

/**
 * @public
 * <p>Details about dimensions that contributed to an anomaly.</p>
 */
export interface ContributionMatrix {
  /**
   * @public
   * <p>A list of contributing dimensions.</p>
   */
  DimensionContributionList?: DimensionContribution[];
}

/**
 * @public
 * <p>Details about a measure affected by an anomaly.</p>
 */
export interface MetricLevelImpact {
  /**
   * @public
   * <p>The name of the measure.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The number of anomalous metrics for the measure.</p>
   */
  NumTimeSeries?: number;

  /**
   * @public
   * <p>Details about the dimensions that contributed to the anomaly.</p>
   */
  ContributionMatrix?: ContributionMatrix;
}

/**
 * @public
 * <p>A group of anomalous metrics</p>
 */
export interface AnomalyGroup {
  /**
   * @public
   * <p>The start time for the group.</p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The end time for the group.</p>
   */
  EndTime?: string;

  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * @public
   * <p>The severity score of the group.</p>
   */
  AnomalyGroupScore?: number;

  /**
   * @public
   * <p>The name of the primary affected measure for the group.</p>
   */
  PrimaryMetricName?: string;

  /**
   * @public
   * <p>A list of measures affected by the anomaly.</p>
   */
  MetricLevelImpactList?: MetricLevelImpact[];
}

/**
 * @public
 * <p>Aggregated statistics about a measure affected by an anomaly.</p>
 */
export interface ItemizedMetricStats {
  /**
   * @public
   * <p>The name of the measure.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The number of times that the measure appears.</p>
   */
  OccurrenceCount?: number;
}

/**
 * @public
 * <p>Aggregated statistics for a group of anomalous metrics.</p>
 */
export interface AnomalyGroupStatistics {
  /**
   * @public
   * <p>The start of the time range that was searched.</p>
   */
  EvaluationStartDate?: string;

  /**
   * @public
   * <p>The number of groups found.</p>
   */
  TotalCount?: number;

  /**
   * @public
   * <p>Statistics for individual metrics within the group.</p>
   */
  ItemizedMetricStatsList?: ItemizedMetricStats[];
}

/**
 * @public
 * <p>Details about a group of anomalous metrics.</p>
 */
export interface AnomalyGroupSummary {
  /**
   * @public
   * <p>The start time for the group.</p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The end time for the group.</p>
   */
  EndTime?: string;

  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * @public
   * <p>The severity score of the group.</p>
   */
  AnomalyGroupScore?: number;

  /**
   * @public
   * <p>The name of the primary affected measure for the group.</p>
   */
  PrimaryMetricName?: string;
}

/**
 * @public
 * <p>An anomalous metric in an anomaly group.</p>
 */
export interface AnomalyGroupTimeSeries {
  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId?: string;
}

/**
 * @public
 * <p>Feedback for an anomalous metric.</p>
 */
export interface AnomalyGroupTimeSeriesFeedback {
  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId: string | undefined;

  /**
   * @public
   * <p>Feedback on whether the metric is a legitimate anomaly.</p>
   */
  IsAnomaly: boolean | undefined;
}

/**
 * @public
 * <p>Details about an Amazon AppFlow flow datasource.</p>
 */
export interface AppFlowConfig {
  /**
   * @public
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access the flow.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p> name of the flow.</p>
   */
  FlowName?: string;
}

/**
 * @public
 * <p>Settings for backtest mode.</p>
 */
export interface BackTestConfiguration {
  /**
   * @public
   * <p>Run a backtest instead of monitoring new data.</p>
   */
  RunBackTestMode: boolean | undefined;
}

/**
 * @public
 * <p>Details about an Amazon Athena datasource.</p>
 */
export interface AthenaSourceConfig {
  /**
   * @public
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access the data.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The database's name.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The database's data catalog.</p>
   */
  DataCatalog?: string;

  /**
   * @public
   * <p>The database's table name.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The database's work group name.</p>
   */
  WorkGroupName?: string;

  /**
   * @public
   * <p>The database's results path.</p>
   */
  S3ResultsPath?: string;

  /**
   * @public
   * <p>Settings for backtest mode.</p>
   */
  BackTestConfiguration?: BackTestConfiguration;
}

/**
 * @public
 * <p>An attribute value.</p>
 */
export interface AttributeValue {
  /**
   * @public
   * <p>A string.</p>
   */
  S?: string;

  /**
   * @public
   * <p>A number.</p>
   */
  N?: string;

  /**
   * @public
   * <p>A binary value.</p>
   */
  B?: string;

  /**
   * @public
   * <p>A list of strings.</p>
   */
  SS?: string[];

  /**
   * @public
   * <p>A list of numbers.</p>
   */
  NS?: string[];

  /**
   * @public
   * <p>A list of binary values.</p>
   */
  BS?: string[];
}

/**
 * @public
 * <p>An auto detection source config.</p>
 */
export interface AutoDetectionS3SourceConfig {
  /**
   * @public
   * <p>The config's templated path list.</p>
   */
  TemplatedPathList?: string[];

  /**
   * @public
   * <p>The config's historical data path list.</p>
   */
  HistoricalDataPathList?: string[];
}

/**
 * @public
 * <p>An auto detection metric source.</p>
 */
export interface AutoDetectionMetricSource {
  /**
   * @public
   * <p>The source's source config.</p>
   */
  S3SourceConfig?: AutoDetectionS3SourceConfig;
}

/**
 * @public
 */
export interface BackTestAnomalyDetectorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface BackTestAnomalyDetectorResponse {}

/**
 * @public
 * <p>Details about an Amazon CloudWatch datasource.</p>
 */
export interface CloudWatchConfig {
  /**
   * @public
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Settings for backtest mode.</p>
   */
  BackTestConfiguration?: BackTestConfiguration;
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
   * @public
   * <p>The name of the alert.</p>
   */
  AlertName: string | undefined;

  /**
   * @public
   * <p>An integer from 0 to 100 specifying the alert sensitivity threshold.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * @public
   * <p>A description of the alert.</p>
   */
  AlertDescription?: string;

  /**
   * @public
   * <p>The ARN of the detector to which the alert is attached.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>Action that will be triggered when there is an alert.</p>
   */
  Action: Action | undefined;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilterList.</p>
   */
  AlertFilters?: AlertFilters;
}

/**
 * @public
 */
export interface CreateAlertResponse {
  /**
   * @public
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;
}

/**
 * @public
 * <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The quota code.</p>
   */
  QuotaCode?: string;

  /**
   * @public
   * <p>The service code.</p>
   */
  ServiceCode?: string;
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
   * @public
   * <p>The name of the detector.</p>
   */
  AnomalyDetectorName: string | undefined;

  /**
   * @public
   * <p>A description of the detector.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * @public
   * <p>Contains information about the configuration of the anomaly detector.</p>
   */
  AnomalyDetectorConfig: AnomalyDetectorConfig | undefined;

  /**
   * @public
   * <p>The ARN of the KMS key to use to encrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAnomalyDetectorResponse {
  /**
   * @public
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;
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
 * @public
 * <p>Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The value that you want to include in the filter.</p>
   */
  DimensionValue?: string;

  /**
   * @public
   * <p>The condition to apply.</p>
   */
  FilterOperation?: FilterOperation;
}

/**
 * @public
 * <p>Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation. </p>
 */
export interface MetricSetDimensionFilter {
  /**
   * @public
   * <p>The dimension that you want to filter on.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The list of filters that you are applying.</p>
   */
  FilterList?: Filter[];
}

/**
 * @public
 * <p>A calculation made by contrasting a measure and a dimension from your source data.</p>
 */
export interface Metric {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The function with which the metric is calculated.</p>
   */
  AggregationFunction: AggregationFunction | undefined;

  /**
   * @public
   * <p>The namespace for the metric.</p>
   */
  Namespace?: string;
}

/**
 * @public
 * <p>Contains configuration information about the Amazon Virtual Private Cloud (VPC).</p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>An array of strings containing the Amazon VPC subnet IDs (e.g., <code>subnet-0bb1c79de3EXAMPLE</code>.</p>
   */
  SubnetIdList: string[] | undefined;

  /**
   * @public
   * <p>An array of strings containing the list of security groups.</p>
   */
  SecurityGroupIdList: string[] | undefined;
}

/**
 * @public
 * <p>Contains information about the Amazon Relational Database Service (RDS) configuration.</p>
 */
export interface RDSSourceConfig {
  /**
   * @public
   * <p>A string identifying the database instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>The host name of the database.</p>
   */
  DatabaseHost?: string;

  /**
   * @public
   * <p>The port number where the database can be accessed.</p>
   */
  DatabasePort?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager role.</p>
   */
  SecretManagerArn?: string;

  /**
   * @public
   * <p>The name of the RDS database.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The name of the table in the database.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * @public
 * <p>Provides information about the Amazon Redshift database configuration.</p>
 */
export interface RedshiftSourceConfig {
  /**
   * @public
   * <p>A string identifying the Redshift cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * @public
   * <p>The name of the database host.</p>
   */
  DatabaseHost?: string;

  /**
   * @public
   * <p>The port number where the database can be accessed.</p>
   */
  DatabasePort?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager role.</p>
   */
  SecretManagerArn?: string;

  /**
   * @public
   * <p>The Redshift database name.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The table name of the Redshift database.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role providing access to the database.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Contains information about the Amazon Virtual Private Cloud (VPC) configuration.</p>
   */
  VpcConfiguration?: VpcConfiguration;
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
 * @public
 * <p>Contains information about how a source CSV data file should be analyzed.</p>
 */
export interface CsvFormatDescriptor {
  /**
   * @public
   * <p>The level of compression of the source CSV file.</p>
   */
  FileCompression?: CSVFileCompression;

  /**
   * @public
   * <p>The character set in which the source CSV file is written.</p>
   */
  Charset?: string;

  /**
   * @public
   * <p>Whether or not the source CSV file contains a header.</p>
   */
  ContainsHeader?: boolean;

  /**
   * @public
   * <p>The character used to delimit the source CSV file.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>A list of the source CSV file's headers, if any.</p>
   */
  HeaderList?: string[];

  /**
   * @public
   * <p>The character used as a quote character.</p>
   */
  QuoteSymbol?: string;
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
 * @public
 * <p>Contains information about how a source JSON data file should be analyzed.</p>
 */
export interface JsonFormatDescriptor {
  /**
   * @public
   * <p>The level of compression of the source CSV file.</p>
   */
  FileCompression?: JsonFileCompression;

  /**
   * @public
   * <p>The character set in which the source JSON file is written.</p>
   */
  Charset?: string;
}

/**
 * @public
 * <p>Contains information about a source file's formatting.</p>
 */
export interface FileFormatDescriptor {
  /**
   * @public
   * <p>Contains information about how a source CSV data file should be analyzed.</p>
   */
  CsvFormatDescriptor?: CsvFormatDescriptor;

  /**
   * @public
   * <p>Contains information about how a source JSON data file should be analyzed.</p>
   */
  JsonFormatDescriptor?: JsonFormatDescriptor;
}

/**
 * @public
 * <p>Contains information about the configuration of the S3 bucket that contains source files.</p>
 */
export interface S3SourceConfig {
  /**
   * @public
   * <p>The ARN of an IAM role that has read and write access permissions to the source S3 bucket.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A list of templated paths to the source files.</p>
   */
  TemplatedPathList?: string[];

  /**
   * @public
   * <p>A list of paths to the historical data files.</p>
   */
  HistoricalDataPathList?: string[];

  /**
   * @public
   * <p>Contains information about a source file's formatting.</p>
   */
  FileFormatDescriptor?: FileFormatDescriptor;
}

/**
 * @public
 * <p>Contains information about source data used to generate metrics.</p>
 */
export interface MetricSource {
  /**
   * @public
   * <p>Contains information about the configuration of the S3 bucket that contains source files.</p>
   */
  S3SourceConfig?: S3SourceConfig;

  /**
   * @public
   * <p>Details about an AppFlow datasource.</p>
   */
  AppFlowConfig?: AppFlowConfig;

  /**
   * @public
   * <p>Details about an Amazon CloudWatch monitoring datasource.</p>
   */
  CloudWatchConfig?: CloudWatchConfig;

  /**
   * @public
   * <p>Details about an Amazon Relational Database Service (RDS) datasource.</p>
   */
  RDSSourceConfig?: RDSSourceConfig;

  /**
   * @public
   * <p>Details about an Amazon Redshift database datasource.</p>
   */
  RedshiftSourceConfig?: RedshiftSourceConfig;

  /**
   * @public
   * <p>Details about an Amazon Athena datasource.</p>
   */
  AthenaSourceConfig?: AthenaSourceConfig;
}

/**
 * @public
 * <p>Contains information about the column used to track time in a source data file.</p>
 */
export interface TimestampColumn {
  /**
   * @public
   * <p>The name of the timestamp column.</p>
   */
  ColumnName?: string;

  /**
   * @public
   * <p>The format of the timestamp column.</p>
   */
  ColumnFormat?: string;
}

/**
 * @public
 */
export interface CreateMetricSetRequest {
  /**
   * @public
   * <p>The ARN of the anomaly detector that will use the dataset.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  MetricSetName: string | undefined;

  /**
   * @public
   * <p>A description of the dataset you are creating.</p>
   */
  MetricSetDescription?: string;

  /**
   * @public
   * <p>A list of metrics that the dataset will contain.</p>
   */
  MetricList: Metric[] | undefined;

  /**
   * @public
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   */
  Offset?: number;

  /**
   * @public
   * <p>Contains information about the column used for tracking time in your source data.</p>
   */
  TimestampColumn?: TimestampColumn;

  /**
   * @public
   * <p>A list of the fields you want to treat as dimensions.</p>
   */
  DimensionList?: string[];

  /**
   * @public
   * <p>The frequency with which the source data will be analyzed for anomalies.</p>
   */
  MetricSetFrequency?: Frequency;

  /**
   * @public
   * <p>Contains information about how the source data should be interpreted.</p>
   */
  MetricSource: MetricSource | undefined;

  /**
   * @public
   * <p>The time zone in which your source data was recorded.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A list of filters that specify which data is kept for anomaly detection.</p>
   */
  DimensionFilterList?: MetricSetDimensionFilter[];
}

/**
 * @public
 */
export interface CreateMetricSetResponse {
  /**
   * @public
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;
}

/**
 * @public
 */
export interface DeactivateAnomalyDetectorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
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
   * @public
   * <p>The ARN of the alert to delete.</p>
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
   * @public
   * <p>The ARN of the detector to delete.</p>
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
   * @public
   * <p>The ARN of the alert to describe.</p>
   */
  AlertArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlertResponse {
  /**
   * @public
   * <p>Contains information about an alert.</p>
   */
  Alert?: Alert;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectionExecutionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The timestamp of the anomaly detection job.</p>
   */
  Timestamp?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The status of an anomaly detector run.</p>
 */
export interface ExecutionStatus {
  /**
   * @public
   * <p>The run's timestamp.</p>
   */
  Timestamp?: string;

  /**
   * @public
   * <p>The run's status.</p>
   */
  Status?: AnomalyDetectionTaskStatus;

  /**
   * @public
   * <p>The reason that the run failed, if applicable.</p>
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectionExecutionsResponse {
  /**
   * @public
   * <p>A list of detection jobs.</p>
   */
  ExecutionList?: ExecutionStatus[];

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorRequest {
  /**
   * @public
   * <p>The ARN of the detector to describe.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorResponse {
  /**
   * @public
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The name of the detector.</p>
   */
  AnomalyDetectorName?: string;

  /**
   * @public
   * <p>A description of the detector.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * @public
   * <p>Contains information about the detector's configuration.</p>
   */
  AnomalyDetectorConfig?: AnomalyDetectorConfigSummary;

  /**
   * @public
   * <p>The time at which the detector was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time at which the detector was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The status of the detector.</p>
   */
  Status?: AnomalyDetectorStatus;

  /**
   * @public
   * <p>The reason that the detector failed.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The ARN of the KMS key to use to encrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The process that caused the detector to fail.</p>
   */
  FailureType?: AnomalyDetectorFailureType;
}

/**
 * @public
 */
export interface DescribeMetricSetRequest {
  /**
   * @public
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricSetResponse {
  /**
   * @public
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;

  /**
   * @public
   * <p>The ARN of the detector that contains the dataset.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  MetricSetName?: string;

  /**
   * @public
   * <p>The dataset's description.</p>
   */
  MetricSetDescription?: string;

  /**
   * @public
   * <p>The time at which the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time at which the dataset was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   */
  Offset?: number;

  /**
   * @public
   * <p>A list of the metrics defined by the dataset.</p>
   */
  MetricList?: Metric[];

  /**
   * @public
   * <p>Contains information about the column used for tracking time in your source data.</p>
   */
  TimestampColumn?: TimestampColumn;

  /**
   * @public
   * <p>A list of the dimensions chosen for analysis.</p>
   */
  DimensionList?: string[];

  /**
   * @public
   * <p>The interval at which the data will be analyzed for anomalies.</p>
   */
  MetricSetFrequency?: Frequency;

  /**
   * @public
   * <p>The time zone in which the dataset's data was recorded.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>Contains information about the dataset's source data.</p>
   */
  MetricSource?: MetricSource;

  /**
   * @public
   * <p>The dimensions and their values that were used to filter the dataset.</p>
   */
  DimensionFilterList?: MetricSetDimensionFilter[];
}

/**
 * @public
 * <p>An inferred field.</p>
 */
export interface DetectedField {
  /**
   * @public
   * <p>The field's value.</p>
   */
  Value?: AttributeValue;

  /**
   * @public
   * <p>The field's confidence.</p>
   */
  Confidence?: Confidence;

  /**
   * @public
   * <p>The field's message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Properties of an inferred CSV format.</p>
 */
export interface DetectedCsvFormatDescriptor {
  /**
   * @public
   * <p>The format's file compression.</p>
   */
  FileCompression?: DetectedField;

  /**
   * @public
   * <p>The format's charset.</p>
   */
  Charset?: DetectedField;

  /**
   * @public
   * <p>Whether the format includes a header.</p>
   */
  ContainsHeader?: DetectedField;

  /**
   * @public
   * <p>The format's delimiter.</p>
   */
  Delimiter?: DetectedField;

  /**
   * @public
   * <p>The format's header list.</p>
   */
  HeaderList?: DetectedField;

  /**
   * @public
   * <p>The format's quote symbol.</p>
   */
  QuoteSymbol?: DetectedField;
}

/**
 * @public
 * <p>A detected JSON format descriptor.</p>
 */
export interface DetectedJsonFormatDescriptor {
  /**
   * @public
   * <p>The format's file compression.</p>
   */
  FileCompression?: DetectedField;

  /**
   * @public
   * <p>The format's character set.</p>
   */
  Charset?: DetectedField;
}

/**
 * @public
 * <p>Properties of an inferred data format.</p>
 */
export interface DetectedFileFormatDescriptor {
  /**
   * @public
   * <p>Details about a CSV format.</p>
   */
  CsvFormatDescriptor?: DetectedCsvFormatDescriptor;

  /**
   * @public
   * <p>Details about a JSON format.</p>
   */
  JsonFormatDescriptor?: DetectedJsonFormatDescriptor;
}

/**
 * @public
 * <p>An inferred source configuration.</p>
 */
export interface DetectedS3SourceConfig {
  /**
   * @public
   * <p>The source's file format descriptor.</p>
   */
  FileFormatDescriptor?: DetectedFileFormatDescriptor;
}

/**
 * @public
 * <p>An inferred data source.</p>
 */
export interface DetectedMetricSource {
  /**
   * @public
   * <p>The data source's source configuration.</p>
   */
  S3SourceConfig?: DetectedS3SourceConfig;
}

/**
 * @public
 * <p>An inferred dataset configuration.</p>
 */
export interface DetectedMetricSetConfig {
  /**
   * @public
   * <p>The dataset's offset.</p>
   */
  Offset?: DetectedField;

  /**
   * @public
   * <p>The dataset's interval.</p>
   */
  MetricSetFrequency?: DetectedField;

  /**
   * @public
   * <p>The dataset's data source.</p>
   */
  MetricSource?: DetectedMetricSource;
}

/**
 * @public
 */
export interface DetectMetricSetConfigRequest {
  /**
   * @public
   * <p>An anomaly detector ARN.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>A data source.</p>
   */
  AutoDetectionMetricSource: AutoDetectionMetricSource | undefined;
}

/**
 * @public
 */
export interface DetectMetricSetConfigResponse {
  /**
   * @public
   * <p>The inferred dataset configuration for the datasource.</p>
   */
  DetectedMetricSetConfig?: DetectedMetricSetConfig;
}

/**
 * @public
 * <p>A dimension name and value.</p>
 */
export interface DimensionNameValue {
  /**
   * @public
   * <p>The name of the dimension.</p>
   */
  DimensionName: string | undefined;

  /**
   * @public
   * <p>The value of the dimension.</p>
   */
  DimensionValue: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalyGroupRequest {
  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalyGroupResponse {
  /**
   * @public
   * <p>Details about the anomaly group.</p>
   */
  AnomalyGroup?: AnomalyGroup;
}

/**
 * @public
 */
export interface GetDataQualityMetricsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a specific data quality metric set.</p>
   */
  MetricSetArn?: string;
}

/**
 * @public
 */
export interface GetDataQualityMetricsResponse {
  /**
   * @public
   * <p>A list of the data quality metrics for the <code>AnomalyDetectorArn</code> that you requested.</p>
   */
  AnomalyDetectorDataQualityMetricList?: AnomalyDetectorDataQualityMetric[];
}

/**
 * @public
 */
export interface GetFeedbackRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The anomalous metric and group ID.</p>
   */
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeries | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details about feedback submitted for an anomalous metric.</p>
 */
export interface TimeSeriesFeedback {
  /**
   * @public
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId?: string;

  /**
   * @public
   * <p>Feedback on whether the metric is a legitimate anomaly.</p>
   */
  IsAnomaly?: boolean;
}

/**
 * @public
 */
export interface GetFeedbackResponse {
  /**
   * @public
   * <p>Feedback for an anomalous metric.</p>
   */
  AnomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[];

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about the source configuration in Amazon S3.</p>
 */
export interface SampleDataS3SourceConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>An array of strings containing the list of templated paths.</p>
   */
  TemplatedPathList?: string[];

  /**
   * @public
   * <p>An array of strings containing the historical set of data paths.</p>
   */
  HistoricalDataPathList?: string[];

  /**
   * @public
   * <p>Contains information about a source file's formatting.</p>
   */
  FileFormatDescriptor: FileFormatDescriptor | undefined;
}

/**
 * @public
 */
export interface GetSampleDataRequest {
  /**
   * @public
   * <p>A datasource bucket in Amazon S3.</p>
   */
  S3SourceConfig?: SampleDataS3SourceConfig;
}

/**
 * @public
 */
export interface GetSampleDataResponse {
  /**
   * @public
   * <p>A list of header labels for the records.</p>
   */
  HeaderValues?: string[];

  /**
   * @public
   * <p>A list of records.</p>
   */
  SampleRows?: string[][];
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
 * @public
 * <p>Aggregated details about the measures contributing to the anomaly group, and the measures
 *             potentially impacted by the anomaly group.</p>
 *          <p></p>
 */
export interface InterMetricImpactDetails {
  /**
   * @public
   * <p>The name of the measure.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * @public
   * <p>Whether a measure is a potential cause of the anomaly group
   *             (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), or whether the measure is impacted by the
   *             anomaly group (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>).</p>
   */
  RelationshipType?: RelationshipType;

  /**
   * @public
   * <p>For potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), the percentage
   *             contribution the measure has in causing the anomalies.</p>
   */
  ContributionPercentage?: number;
}

/**
 * @public
 */
export interface ListAlertsRequest {
  /**
   * @public
   * <p>The ARN of the alert's detector.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To
   *       retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that will be displayed by the request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAlertsResponse {
  /**
   * @public
   * <p>Contains information about an alert.</p>
   */
  AlertSummaryList?: AlertSummary[];

  /**
   * @public
   * <p>If the response is truncated, the service returns this token. To retrieve the next set of results, use this
   *       token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To
   *       retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsResponse {
  /**
   * @public
   * <p>A list of anomaly detectors in the account in the current region.</p>
   */
  AnomalyDetectorSummaryList?: AnomalyDetectorSummary[];

  /**
   * @public
   * <p>If the response is truncated, the service returns this token. To retrieve the next set of results, use the
   *       token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyGroupRelatedMetricsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * @public
   * <p>Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or
   *             downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.</p>
   */
  RelationshipTypeFilter?: RelationshipType;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next
   *             page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyGroupRelatedMetricsResponse {
  /**
   * @public
   * <p>Aggregated details about the measures contributing to the anomaly group, and the measures
   *             potentially impacted by the anomaly group.</p>
   */
  InterMetricImpactList?: InterMetricImpactDetails[];

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyGroupSummariesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The minimum severity score for inclusion in the output.</p>
   */
  SensitivityThreshold: number | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyGroupSummariesResponse {
  /**
   * @public
   * <p>A list of anomaly group summaries.</p>
   */
  AnomalyGroupSummaryList?: AnomalyGroupSummary[];

  /**
   * @public
   * <p>Aggregated details about the anomaly groups.</p>
   */
  AnomalyGroupStatistics?: AnomalyGroupStatistics;

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAnomalyGroupTimeSeriesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * @public
   * <p>The name of the measure field.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as
 *         <i>availability</i> in the <i>us-east-1</i> Region.</p>
 */
export interface TimeSeries {
  /**
   * @public
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId: string | undefined;

  /**
   * @public
   * <p>The dimensions of the metric.</p>
   */
  DimensionList: DimensionNameValue[] | undefined;

  /**
   * @public
   * <p>The values for the metric.</p>
   */
  MetricValueList: number[] | undefined;
}

/**
 * @public
 */
export interface ListAnomalyGroupTimeSeriesResponse {
  /**
   * @public
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * @public
   * <p>The name of the measure field.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>Timestamps for the anomalous metrics.</p>
   */
  TimestampList?: string[];

  /**
   * @public
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of anomalous metrics.</p>
   */
  TimeSeriesList?: TimeSeries[];
}

/**
 * @public
 */
export interface ListMetricSetsRequest {
  /**
   * @public
   * <p>The ARN of the anomaly detector containing the metrics sets to list.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about a dataset.</p>
 */
export interface MetricSetSummary {
  /**
   * @public
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;

  /**
   * @public
   * <p>The ARN of the detector to which the dataset belongs.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * @public
   * <p>The description of the dataset.</p>
   */
  MetricSetDescription?: string;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  MetricSetName?: string;

  /**
   * @public
   * <p>The time at which the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time at which the dataset was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The dataset's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMetricSetsResponse {
  /**
   * @public
   * <p>A list of the datasets in the AWS Region, with configuration details for each.</p>
   */
  MetricSetSummaryList?: MetricSetSummary[];

  /**
   * @public
   * <p>If the response is truncated, the list call returns this token. To retrieve the next set
   *       of results, use the token in the next list request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The resource's tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>Feedback for an anomalous metric.</p>
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
   * @public
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following
   *       symbols: <code>_.:/=+@-</code>
   *          </p>
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
   * @public
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Keys to remove from the resource's tags.</p>
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
   * @public
   * <p>The ARN of the alert to update.</p>
   */
  AlertArn: string | undefined;

  /**
   * @public
   * <p>A description of the alert.</p>
   */
  AlertDescription?: string;

  /**
   * @public
   * <p>An integer from 0 to 100 specifying the alert sensitivity threshold.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * @public
   * <p>Action that will be triggered when there is an alert.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilterList.</p>
   */
  AlertFilters?: AlertFilters;
}

/**
 * @public
 */
export interface UpdateAlertResponse {
  /**
   * @public
   * <p>The ARN of the updated alert.</p>
   */
  AlertArn?: string;
}

/**
 * @public
 */
export interface UpdateAnomalyDetectorRequest {
  /**
   * @public
   * <p>The ARN of the detector to update.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an AWS KMS encryption key.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The updated detector description.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * @public
   * <p>Contains information about the configuration to which the detector will be updated.</p>
   */
  AnomalyDetectorConfig?: AnomalyDetectorConfig;
}

/**
 * @public
 */
export interface UpdateAnomalyDetectorResponse {
  /**
   * @public
   * <p>The ARN of the updated detector.</p>
   */
  AnomalyDetectorArn?: string;
}

/**
 * @public
 */
export interface UpdateMetricSetRequest {
  /**
   * @public
   * <p>The ARN of the dataset to update.</p>
   */
  MetricSetArn: string | undefined;

  /**
   * @public
   * <p>The dataset's description.</p>
   */
  MetricSetDescription?: string;

  /**
   * @public
   * <p>The metric list.</p>
   */
  MetricList?: Metric[];

  /**
   * @public
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   */
  Offset?: number;

  /**
   * @public
   * <p>The timestamp column.</p>
   */
  TimestampColumn?: TimestampColumn;

  /**
   * @public
   * <p>The dimension list.</p>
   */
  DimensionList?: string[];

  /**
   * @public
   * <p>The dataset's interval.</p>
   */
  MetricSetFrequency?: Frequency;

  /**
   * @public
   * <p>Contains information about source data used to generate metrics.</p>
   */
  MetricSource?: MetricSource;

  /**
   * @public
   * <p>Describes a list of filters for choosing specific dimensions and specific values. Each
   *       filter consists of the dimension and one of its values that you want to include. When
   *       multiple dimensions or values are specified, the dimensions are joined with an AND operation
   *       and the values are joined with an OR operation.</p>
   */
  DimensionFilterList?: MetricSetDimensionFilter[];
}

/**
 * @public
 */
export interface UpdateMetricSetResponse {
  /**
   * @public
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;
}
