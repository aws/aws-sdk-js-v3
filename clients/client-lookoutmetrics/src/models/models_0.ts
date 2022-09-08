// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { LookoutMetricsServiceException as __BaseException } from "./LookoutMetricsServiceException";

/**
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
 * <p>Contains information about a Lambda configuration.</p>
 */
export interface LambdaConfiguration {
  /**
   * <p>The ARN of an IAM role that has permission to invoke the Lambda function.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The ARN of the Lambda function.</p>
   */
  LambdaArn: string | undefined;
}

export enum SnsFormat {
  JSON = "JSON",
  LONG_TEXT = "LONG_TEXT",
  SHORT_TEXT = "SHORT_TEXT",
}

/**
 * <p>Contains information about the SNS topic to which you want to send your alerts and the IAM role that has
 *       access to that topic.</p>
 */
export interface SNSConfiguration {
  /**
   * <p>The ARN of the IAM role that has access to the target SNS topic.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The ARN of the target SNS topic.</p>
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
   */
  SnsFormat?: SnsFormat | string;
}

/**
 * <p>A configuration that specifies the action to perform when anomalies are detected.</p>
 */
export interface Action {
  /**
   * <p>A configuration for an Amazon SNS channel.</p>
   */
  SNSConfiguration?: SNSConfiguration;

  /**
   * <p>A configuration for an AWS Lambda channel.</p>
   */
  LambdaConfiguration?: LambdaConfiguration;
}

export interface ActivateAnomalyDetectorRequest {
  /**
   * <p>The ARN of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export interface ActivateAnomalyDetectorResponse {}

/**
 * <p>There was a conflict processing the request. Try your request again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
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
 * <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
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
 * <p>Contains information about a a field in a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;

  /**
   * <p>The message with more information about the validation exception.</p>
   */
  Message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason that validation failed.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
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

export enum AggregationFunction {
  AVG = "AVG",
  SUM = "SUM",
}

/**
 * <p>The dimension filter, containing DimensionName and DimensionValueList.</p>
 */
export interface DimensionFilter {
  /**
   * <p>The name of the dimension to filter on.</p>
   */
  DimensionName?: string;

  /**
   * <p>The list of values for the dimension specified in DimensionName that you want to filter on.</p>
   */
  DimensionValueList?: string[];
}

/**
 * <p>The configuration of the alert filters.</p>
 */
export interface AlertFilters {
  /**
   * <p>The list of measures that you want to get alerts for.</p>
   */
  MetricList?: string[];

  /**
   * <p>The list of DimensionFilter objects that are used for dimension-based filtering.</p>
   */
  DimensionFilterList?: DimensionFilter[];
}

export enum AlertStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum AlertType {
  LAMBDA = "LAMBDA",
  SNS = "SNS",
}

/**
 * <p>A configuration for Amazon SNS-integrated notifications.</p>
 */
export interface Alert {
  /**
   * <p>Action that will be triggered when there is an alert.</p>
   */
  Action?: Action;

  /**
   * <p>A description of the alert.</p>
   */
  AlertDescription?: string;

  /**
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;

  /**
   * <p>The ARN of the detector to which the alert is attached.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The name of the alert.</p>
   */
  AlertName?: string;

  /**
   * <p>The minimum severity for an anomaly to trigger the alert.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * <p>The type of the alert.</p>
   */
  AlertType?: AlertType | string;

  /**
   * <p>The status of the alert.</p>
   */
  AlertStatus?: AlertStatus | string;

  /**
   * <p>The time at which the alert was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>The time at which the alert was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilter.</p>
   */
  AlertFilters?: AlertFilters;
}

/**
 * <p>Provides a summary of an alert's configuration.</p>
 */
export interface AlertSummary {
  /**
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;

  /**
   * <p>The ARN of the detector to which the alert is attached.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The name of the alert.</p>
   */
  AlertName?: string;

  /**
   * <p>The minimum severity for an anomaly to trigger the alert.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * <p>The type of the alert.</p>
   */
  AlertType?: AlertType | string;

  /**
   * <p>The status of the alert.</p>
   */
  AlertStatus?: AlertStatus | string;

  /**
   * <p>The time at which the alert was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>The time at which the alert was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The alert's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

export enum AnomalyDetectionTaskStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  FAILED_TO_SCHEDULE = "FAILED_TO_SCHEDULE",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
}

export enum Frequency {
  P1D = "P1D",
  PT10M = "PT10M",
  PT1H = "PT1H",
  PT5M = "PT5M",
}

/**
 * <p>Contains information about a detector's configuration.</p>
 */
export interface AnomalyDetectorConfig {
  /**
   * <p>The frequency at which the detector analyzes its source data.</p>
   */
  AnomalyDetectorFrequency?: Frequency | string;
}

/**
 * <p>Contains information about a detector's configuration.</p>
 */
export interface AnomalyDetectorConfigSummary {
  /**
   * <p>The interval at which the detector analyzes its source data.</p>
   */
  AnomalyDetectorFrequency?: Frequency | string;
}

export enum DataQualityMetricType {
  BACKTEST_INFERENCE_DATA_END_TIME_STAMP = "BACKTEST_INFERENCE_DATA_END_TIME_STAMP",
  BACKTEST_INFERENCE_DATA_START_TIME_STAMP = "BACKTEST_INFERENCE_DATA_START_TIME_STAMP",
  BACKTEST_TRAINING_DATA_END_TIME_STAMP = "BACKTEST_TRAINING_DATA_END_TIME_STAMP",
  BACKTEST_TRAINING_DATA_START_TIME_STAMP = "BACKTEST_TRAINING_DATA_START_TIME_STAMP",
  COLUMN_COMPLETENESS = "COLUMN_COMPLETENESS",
  DIMENSION_UNIQUENESS = "DIMENSION_UNIQUENESS",
  INVALID_ROWS_COMPLIANCE = "INVALID_ROWS_COMPLIANCE",
  ROWS_PARTIAL_COMPLIANCE = "ROWS_PARTIAL_COMPLIANCE",
  ROWS_PROCESSED = "ROWS_PROCESSED",
  TIME_SERIES_COUNT = "TIME_SERIES_COUNT",
}

/**
 * <p>An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column.</p>
 */
export interface DataQualityMetric {
  /**
   * <p>The name of the data quality metric.</p>
   */
  MetricType?: DataQualityMetricType | string;

  /**
   * <p>A description of the data quality metric.</p>
   */
  MetricDescription?: string;

  /**
   * <p>The column that is being monitored.</p>
   */
  RelatedColumnName?: string;

  /**
   * <p>The value of the data quality metric.</p>
   */
  MetricValue?: number;
}

/**
 * <p>An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics.</p>
 */
export interface MetricSetDataQualityMetric {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality metric array.</p>
   */
  MetricSetArn?: string;

  /**
   * <p>The array of data quality metrics contained in the data quality metric set.</p>
   */
  DataQualityMetricList?: DataQualityMetric[];
}

/**
 * <p>Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object.</p>
 */
export interface AnomalyDetectorDataQualityMetric {
  /**
   * <p>The start time for the data quality metrics collection.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p>An array of <code>DataQualityMetricList</code> objects. Each object in the array contains information about a data quality metric.</p>
   */
  MetricSetDataQualityMetricList?: MetricSetDataQualityMetric[];
}

export enum AnomalyDetectorFailureType {
  ACTIVATION_FAILURE = "ACTIVATION_FAILURE",
  BACK_TEST_ACTIVATION_FAILURE = "BACK_TEST_ACTIVATION_FAILURE",
  DEACTIVATION_FAILURE = "DEACTIVATION_FAILURE",
  DELETION_FAILURE = "DELETION_FAILURE",
}

export enum AnomalyDetectorStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  BACK_TEST_ACTIVATING = "BACK_TEST_ACTIVATING",
  BACK_TEST_ACTIVE = "BACK_TEST_ACTIVE",
  BACK_TEST_COMPLETE = "BACK_TEST_COMPLETE",
  DEACTIVATED = "DEACTIVATED",
  DEACTIVATING = "DEACTIVATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
  LEARNING = "LEARNING",
}

/**
 * <p>Contains information about an an anomaly detector.</p>
 */
export interface AnomalyDetectorSummary {
  /**
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The name of the detector.</p>
   */
  AnomalyDetectorName?: string;

  /**
   * <p>A description of the detector.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * <p>The time at which the detector was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the detector was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>The status of detector.</p>
   */
  Status?: AnomalyDetectorStatus | string;

  /**
   * <p>The detector's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>The severity of a value of a dimension that contributed to an anomaly.</p>
 */
export interface DimensionValueContribution {
  /**
   * <p>The value of the dimension.</p>
   */
  DimensionValue?: string;

  /**
   * <p>The severity score of the value.</p>
   */
  ContributionScore?: number;
}

/**
 * <p>Details about a dimension that contributed to an anomaly.</p>
 */
export interface DimensionContribution {
  /**
   * <p>The name of the dimension.</p>
   */
  DimensionName?: string;

  /**
   * <p>A list of dimension values that contributed to the anomaly.</p>
   */
  DimensionValueContributionList?: DimensionValueContribution[];
}

/**
 * <p>Details about dimensions that contributed to an anomaly.</p>
 */
export interface ContributionMatrix {
  /**
   * <p>A list of contributing dimensions.</p>
   */
  DimensionContributionList?: DimensionContribution[];
}

/**
 * <p>Details about a measure affected by an anomaly.</p>
 */
export interface MetricLevelImpact {
  /**
   * <p>The name of the measure.</p>
   */
  MetricName?: string;

  /**
   * <p>The number of anomalous metrics for the measure.</p>
   */
  NumTimeSeries?: number;

  /**
   * <p>Details about the dimensions that contributed to the anomaly.</p>
   */
  ContributionMatrix?: ContributionMatrix;
}

/**
 * <p>A group of anomalous metrics</p>
 */
export interface AnomalyGroup {
  /**
   * <p>The start time for the group.</p>
   */
  StartTime?: string;

  /**
   * <p>The end time for the group.</p>
   */
  EndTime?: string;

  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * <p>The severity score of the group.</p>
   */
  AnomalyGroupScore?: number;

  /**
   * <p>The name of the primary affected measure for the group.</p>
   */
  PrimaryMetricName?: string;

  /**
   * <p>A list of measures affected by the anomaly.</p>
   */
  MetricLevelImpactList?: MetricLevelImpact[];
}

/**
 * <p>Aggregated statistics about a measure affected by an anomaly.</p>
 */
export interface ItemizedMetricStats {
  /**
   * <p>The name of the measure.</p>
   */
  MetricName?: string;

  /**
   * <p>The number of times that the measure appears.</p>
   */
  OccurrenceCount?: number;
}

/**
 * <p>Aggregated statistics for a group of anomalous metrics.</p>
 */
export interface AnomalyGroupStatistics {
  /**
   * <p>The start of the time range that was searched.</p>
   */
  EvaluationStartDate?: string;

  /**
   * <p>The number of groups found.</p>
   */
  TotalCount?: number;

  /**
   * <p>Statistics for individual metrics within the group.</p>
   */
  ItemizedMetricStatsList?: ItemizedMetricStats[];
}

/**
 * <p>Details about a group of anomalous metrics.</p>
 */
export interface AnomalyGroupSummary {
  /**
   * <p>The start time for the group.</p>
   */
  StartTime?: string;

  /**
   * <p>The end time for the group.</p>
   */
  EndTime?: string;

  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * <p>The severity score of the group.</p>
   */
  AnomalyGroupScore?: number;

  /**
   * <p>The name of the primary affected measure for the group.</p>
   */
  PrimaryMetricName?: string;
}

/**
 * <p>An anomalous metric in an anomaly group.</p>
 */
export interface AnomalyGroupTimeSeries {
  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId?: string;
}

/**
 * <p>Feedback for an anomalous metric.</p>
 */
export interface AnomalyGroupTimeSeriesFeedback {
  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId: string | undefined;

  /**
   * <p>Feedback on whether the metric is a legitimate anomaly.</p>
   */
  IsAnomaly: boolean | undefined;
}

/**
 * <p>Details about an Amazon AppFlow flow datasource.</p>
 */
export interface AppFlowConfig {
  /**
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access the flow.</p>
   */
  RoleArn?: string;

  /**
   * <p> name of the flow.</p>
   */
  FlowName?: string;
}

/**
 * <p>Settings for backtest mode.</p>
 */
export interface BackTestConfiguration {
  /**
   * <p>Run a backtest instead of monitoring new data.</p>
   */
  RunBackTestMode: boolean | undefined;
}

/**
 * <p>Details about an Amazon Athena datasource.</p>
 */
export interface AthenaSourceConfig {
  /**
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access the data.</p>
   */
  RoleArn?: string;

  /**
   * <p>The database's name.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The database's data catalog.</p>
   */
  DataCatalog?: string;

  /**
   * <p>The database's table name.</p>
   */
  TableName?: string;

  /**
   * <p>The database's work group name.</p>
   */
  WorkGroupName?: string;

  /**
   * <p>The database's results path.</p>
   */
  S3ResultsPath?: string;

  /**
   * <p>Settings for backtest mode.</p>
   */
  BackTestConfiguration?: BackTestConfiguration;
}

/**
 * <p>An attribute value.</p>
 */
export interface AttributeValue {
  /**
   * <p>A string.</p>
   */
  S?: string;

  /**
   * <p>A number.</p>
   */
  N?: string;

  /**
   * <p>A binary value.</p>
   */
  B?: string;

  /**
   * <p>A list of strings.</p>
   */
  SS?: string[];

  /**
   * <p>A list of numbers.</p>
   */
  NS?: string[];

  /**
   * <p>A list of binary values.</p>
   */
  BS?: string[];
}

/**
 * <p>An auto detection source config.</p>
 */
export interface AutoDetectionS3SourceConfig {
  /**
   * <p>The config's templated path list.</p>
   */
  TemplatedPathList?: string[];

  /**
   * <p>The config's historical data path list.</p>
   */
  HistoricalDataPathList?: string[];
}

/**
 * <p>An auto detection metric source.</p>
 */
export interface AutoDetectionMetricSource {
  /**
   * <p>The source's source config.</p>
   */
  S3SourceConfig?: AutoDetectionS3SourceConfig;
}

export interface BackTestAnomalyDetectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export interface BackTestAnomalyDetectorResponse {}

/**
 * <p>Details about an Amazon CloudWatch datasource.</p>
 */
export interface CloudWatchConfig {
  /**
   * <p>An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.</p>
   */
  RoleArn?: string;

  /**
   * <p>Settings for backtest mode.</p>
   */
  BackTestConfiguration?: BackTestConfiguration;
}

export enum Confidence {
  HIGH = "HIGH",
  LOW = "LOW",
  NONE = "NONE",
}

export interface CreateAlertRequest {
  /**
   * <p>The name of the alert.</p>
   */
  AlertName: string | undefined;

  /**
   * <p>An integer from 0 to 100 specifying the alert sensitivity threshold.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * <p>A description of the alert.</p>
   */
  AlertDescription?: string;

  /**
   * <p>The ARN of the detector to which the alert is attached.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>Action that will be triggered when there is an alert.</p>
   */
  Action: Action | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilterList.</p>
   */
  AlertFilters?: AlertFilters;
}

export interface CreateAlertResponse {
  /**
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;
}

/**
 * <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>The quota code.</p>
   */
  QuotaCode?: string;

  /**
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

export interface CreateAnomalyDetectorRequest {
  /**
   * <p>The name of the detector.</p>
   */
  AnomalyDetectorName: string | undefined;

  /**
   * <p>A description of the detector.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * <p>Contains information about the configuration of the anomaly detector.</p>
   */
  AnomalyDetectorConfig: AnomalyDetectorConfig | undefined;

  /**
   * <p>The ARN of the KMS key to use to encrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateAnomalyDetectorResponse {
  /**
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;
}

export enum FilterOperation {
  EQUALS = "EQUALS",
}

/**
 * <p>Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object.</p>
 */
export interface Filter {
  /**
   * <p>The value that you want to include in the filter.</p>
   */
  DimensionValue?: string;

  /**
   * <p>The condition to apply.</p>
   */
  FilterOperation?: FilterOperation | string;
}

/**
 * <p>Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation. </p>
 */
export interface MetricSetDimensionFilter {
  /**
   * <p>The dimension that you want to filter on.</p>
   */
  Name?: string;

  /**
   * <p>The list of filters that you are applying.</p>
   */
  FilterList?: Filter[];
}

/**
 * <p>A calculation made by contrasting a measure and a dimension from your source data.</p>
 */
export interface Metric {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The function with which the metric is calculated.</p>
   */
  AggregationFunction: AggregationFunction | string | undefined;

  /**
   * <p>The namespace for the metric.</p>
   */
  Namespace?: string;
}

/**
 * <p>Contains configuration information about the Amazon Virtual Private Cloud (VPC).</p>
 */
export interface VpcConfiguration {
  /**
   * <p>An array of strings containing the Amazon VPC subnet IDs (e.g., <code>subnet-0bb1c79de3EXAMPLE</code>.</p>
   */
  SubnetIdList: string[] | undefined;

  /**
   * <p>An array of strings containing the list of security groups.</p>
   */
  SecurityGroupIdList: string[] | undefined;
}

/**
 * <p>Contains information about the Amazon Relational Database Service (RDS) configuration.</p>
 */
export interface RDSSourceConfig {
  /**
   * <p>A string identifying the database instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The host name of the database.</p>
   */
  DatabaseHost?: string;

  /**
   * <p>The port number where the database can be accessed.</p>
   */
  DatabasePort?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager role.</p>
   */
  SecretManagerArn?: string;

  /**
   * <p>The name of the RDS database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table in the database.</p>
   */
  TableName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   */
  RoleArn?: string;

  /**
   * <p>An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * <p>Provides information about the Amazon Redshift database configuration.</p>
 */
export interface RedshiftSourceConfig {
  /**
   * <p>A string identifying the Redshift cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The name of the database host.</p>
   */
  DatabaseHost?: string;

  /**
   * <p>The port number where the database can be accessed.</p>
   */
  DatabasePort?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager role.</p>
   */
  SecretManagerArn?: string;

  /**
   * <p>The Redshift database name.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The table name of the Redshift database.</p>
   */
  TableName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role providing access to the database.</p>
   */
  RoleArn?: string;

  /**
   * <p>Contains information about the Amazon Virtual Private Cloud (VPC) configuration.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

export enum CSVFileCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

/**
 * <p>Contains information about how a source CSV data file should be analyzed.</p>
 */
export interface CsvFormatDescriptor {
  /**
   * <p>The level of compression of the source CSV file.</p>
   */
  FileCompression?: CSVFileCompression | string;

  /**
   * <p>The character set in which the source CSV file is written.</p>
   */
  Charset?: string;

  /**
   * <p>Whether or not the source CSV file contains a header.</p>
   */
  ContainsHeader?: boolean;

  /**
   * <p>The character used to delimit the source CSV file.</p>
   */
  Delimiter?: string;

  /**
   * <p>A list of the source CSV file's headers, if any.</p>
   */
  HeaderList?: string[];

  /**
   * <p>The character used as a quote character.</p>
   */
  QuoteSymbol?: string;
}

export enum JsonFileCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

/**
 * <p>Contains information about how a source JSON data file should be analyzed.</p>
 */
export interface JsonFormatDescriptor {
  /**
   * <p>The level of compression of the source CSV file.</p>
   */
  FileCompression?: JsonFileCompression | string;

  /**
   * <p>The character set in which the source JSON file is written.</p>
   */
  Charset?: string;
}

/**
 * <p>Contains information about a source file's formatting.</p>
 */
export interface FileFormatDescriptor {
  /**
   * <p>Contains information about how a source CSV data file should be analyzed.</p>
   */
  CsvFormatDescriptor?: CsvFormatDescriptor;

  /**
   * <p>Contains information about how a source JSON data file should be analyzed.</p>
   */
  JsonFormatDescriptor?: JsonFormatDescriptor;
}

/**
 * <p>Contains information about the configuration of the S3 bucket that contains source files.</p>
 */
export interface S3SourceConfig {
  /**
   * <p>The ARN of an IAM role that has read and write access permissions to the source S3 bucket.</p>
   */
  RoleArn?: string;

  /**
   * <p>A list of templated paths to the source files.</p>
   */
  TemplatedPathList?: string[];

  /**
   * <p>A list of paths to the historical data files.</p>
   */
  HistoricalDataPathList?: string[];

  /**
   * <p>Contains information about a source file's formatting.</p>
   */
  FileFormatDescriptor?: FileFormatDescriptor;
}

/**
 * <p>Contains information about source data used to generate metrics.</p>
 */
export interface MetricSource {
  /**
   * <p>Contains information about the configuration of the S3 bucket that contains source files.</p>
   */
  S3SourceConfig?: S3SourceConfig;

  /**
   * <p>Details about an AppFlow datasource.</p>
   */
  AppFlowConfig?: AppFlowConfig;

  /**
   * <p>Details about an Amazon CloudWatch monitoring datasource.</p>
   */
  CloudWatchConfig?: CloudWatchConfig;

  /**
   * <p>Details about an Amazon Relational Database Service (RDS) datasource.</p>
   */
  RDSSourceConfig?: RDSSourceConfig;

  /**
   * <p>Details about an Amazon Redshift database datasource.</p>
   */
  RedshiftSourceConfig?: RedshiftSourceConfig;

  /**
   * <p>Details about an Amazon Athena datasource.</p>
   */
  AthenaSourceConfig?: AthenaSourceConfig;
}

/**
 * <p>Contains information about the column used to track time in a source data file.</p>
 */
export interface TimestampColumn {
  /**
   * <p>The name of the timestamp column.</p>
   */
  ColumnName?: string;

  /**
   * <p>The format of the timestamp column.</p>
   */
  ColumnFormat?: string;
}

export interface CreateMetricSetRequest {
  /**
   * <p>The ARN of the anomaly detector that will use the dataset.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   */
  MetricSetName: string | undefined;

  /**
   * <p>A description of the dataset you are creating.</p>
   */
  MetricSetDescription?: string;

  /**
   * <p>A list of metrics that the dataset will contain.</p>
   */
  MetricList: Metric[] | undefined;

  /**
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   */
  Offset?: number;

  /**
   * <p>Contains information about the column used for tracking time in your source data.</p>
   */
  TimestampColumn?: TimestampColumn;

  /**
   * <p>A list of the fields you want to treat as dimensions.</p>
   */
  DimensionList?: string[];

  /**
   * <p>The frequency with which the source data will be analyzed for anomalies.</p>
   */
  MetricSetFrequency?: Frequency | string;

  /**
   * <p>Contains information about how the source data should be interpreted.</p>
   */
  MetricSource: MetricSource | undefined;

  /**
   * <p>The time zone in which your source data was recorded.</p>
   */
  Timezone?: string;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A list of filters that specify which data is kept for anomaly detection.</p>
   */
  DimensionFilterList?: MetricSetDimensionFilter[];
}

export interface CreateMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;
}

export interface DeactivateAnomalyDetectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export interface DeactivateAnomalyDetectorResponse {}

export interface DeleteAlertRequest {
  /**
   * <p>The ARN of the alert to delete.</p>
   */
  AlertArn: string | undefined;
}

export interface DeleteAlertResponse {}

export interface DeleteAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to delete.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export interface DeleteAnomalyDetectorResponse {}

export interface DescribeAlertRequest {
  /**
   * <p>The ARN of the alert to describe.</p>
   */
  AlertArn: string | undefined;
}

export interface DescribeAlertResponse {
  /**
   * <p>Contains information about an alert.</p>
   */
  Alert?: Alert;
}

export interface DescribeAnomalyDetectionExecutionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The timestamp of the anomaly detection job.</p>
   */
  Timestamp?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The status of an anomaly detector run.</p>
 */
export interface ExecutionStatus {
  /**
   * <p>The run's timestamp.</p>
   */
  Timestamp?: string;

  /**
   * <p>The run's status.</p>
   */
  Status?: AnomalyDetectionTaskStatus | string;

  /**
   * <p>The reason that the run failed, if applicable.</p>
   */
  FailureReason?: string;
}

export interface DescribeAnomalyDetectionExecutionsResponse {
  /**
   * <p>A list of detection jobs.</p>
   */
  ExecutionList?: ExecutionStatus[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

export interface DescribeAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to describe.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export interface DescribeAnomalyDetectorResponse {
  /**
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The name of the detector.</p>
   */
  AnomalyDetectorName?: string;

  /**
   * <p>A description of the detector.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * <p>Contains information about the detector's configuration.</p>
   */
  AnomalyDetectorConfig?: AnomalyDetectorConfigSummary;

  /**
   * <p>The time at which the detector was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the detector was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>The status of the detector.</p>
   */
  Status?: AnomalyDetectorStatus | string;

  /**
   * <p>The reason that the detector failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the KMS key to use to encrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The process that caused the detector to fail.</p>
   */
  FailureType?: AnomalyDetectorFailureType | string;
}

export interface DescribeMetricSetRequest {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn: string | undefined;
}

export interface DescribeMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;

  /**
   * <p>The ARN of the detector that contains the dataset.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The name of the dataset.</p>
   */
  MetricSetName?: string;

  /**
   * <p>The dataset's description.</p>
   */
  MetricSetDescription?: string;

  /**
   * <p>The time at which the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the dataset was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   */
  Offset?: number;

  /**
   * <p>A list of the metrics defined by the dataset.</p>
   */
  MetricList?: Metric[];

  /**
   * <p>Contains information about the column used for tracking time in your source data.</p>
   */
  TimestampColumn?: TimestampColumn;

  /**
   * <p>A list of the dimensions chosen for analysis.</p>
   */
  DimensionList?: string[];

  /**
   * <p>The interval at which the data will be analyzed for anomalies.</p>
   */
  MetricSetFrequency?: Frequency | string;

  /**
   * <p>The time zone in which the dataset's data was recorded.</p>
   */
  Timezone?: string;

  /**
   * <p>Contains information about the dataset's source data.</p>
   */
  MetricSource?: MetricSource;

  /**
   * <p>The dimensions and their values that were used to filter the dataset.</p>
   */
  DimensionFilterList?: MetricSetDimensionFilter[];
}

/**
 * <p>An inferred field.</p>
 */
export interface DetectedField {
  /**
   * <p>The field's value.</p>
   */
  Value?: AttributeValue;

  /**
   * <p>The field's confidence.</p>
   */
  Confidence?: Confidence | string;

  /**
   * <p>The field's message.</p>
   */
  Message?: string;
}

/**
 * <p>Properties of an inferred CSV format.</p>
 */
export interface DetectedCsvFormatDescriptor {
  /**
   * <p>The format's file compression.</p>
   */
  FileCompression?: DetectedField;

  /**
   * <p>The format's charset.</p>
   */
  Charset?: DetectedField;

  /**
   * <p>Whether the format includes a header.</p>
   */
  ContainsHeader?: DetectedField;

  /**
   * <p>The format's delimiter.</p>
   */
  Delimiter?: DetectedField;

  /**
   * <p>The format's header list.</p>
   */
  HeaderList?: DetectedField;

  /**
   * <p>The format's quote symbol.</p>
   */
  QuoteSymbol?: DetectedField;
}

/**
 * <p>A detected JSON format descriptor.</p>
 */
export interface DetectedJsonFormatDescriptor {
  /**
   * <p>The format's file compression.</p>
   */
  FileCompression?: DetectedField;

  /**
   * <p>The format's character set.</p>
   */
  Charset?: DetectedField;
}

/**
 * <p>Properties of an inferred data format.</p>
 */
export interface DetectedFileFormatDescriptor {
  /**
   * <p>Details about a CSV format.</p>
   */
  CsvFormatDescriptor?: DetectedCsvFormatDescriptor;

  /**
   * <p>Details about a JSON format.</p>
   */
  JsonFormatDescriptor?: DetectedJsonFormatDescriptor;
}

/**
 * <p>An inferred source configuration.</p>
 */
export interface DetectedS3SourceConfig {
  /**
   * <p>The source's file format descriptor.</p>
   */
  FileFormatDescriptor?: DetectedFileFormatDescriptor;
}

/**
 * <p>An inferred data source.</p>
 */
export interface DetectedMetricSource {
  /**
   * <p>The data source's source configuration.</p>
   */
  S3SourceConfig?: DetectedS3SourceConfig;
}

/**
 * <p>An inferred dataset configuration.</p>
 */
export interface DetectedMetricSetConfig {
  /**
   * <p>The dataset's offset.</p>
   */
  Offset?: DetectedField;

  /**
   * <p>The dataset's interval.</p>
   */
  MetricSetFrequency?: DetectedField;

  /**
   * <p>The dataset's data source.</p>
   */
  MetricSource?: DetectedMetricSource;
}

export interface DetectMetricSetConfigRequest {
  /**
   * <p>An anomaly detector ARN.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>A data source.</p>
   */
  AutoDetectionMetricSource: AutoDetectionMetricSource | undefined;
}

export interface DetectMetricSetConfigResponse {
  /**
   * <p>The inferred dataset configuration for the datasource.</p>
   */
  DetectedMetricSetConfig?: DetectedMetricSetConfig;
}

/**
 * <p>A dimension name and value.</p>
 */
export interface DimensionNameValue {
  /**
   * <p>The name of the dimension.</p>
   */
  DimensionName: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   */
  DimensionValue: string | undefined;
}

export interface GetAnomalyGroupRequest {
  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export interface GetAnomalyGroupResponse {
  /**
   * <p>Details about the anomaly group.</p>
   */
  AnomalyGroup?: AnomalyGroup;
}

export interface GetDataQualityMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a specific data quality metric set.</p>
   */
  MetricSetArn?: string;
}

export interface GetDataQualityMetricsResponse {
  /**
   * <p>A list of the data quality metrics for the <code>AnomalyDetectorArn</code> that you requested.</p>
   */
  AnomalyDetectorDataQualityMetricList?: AnomalyDetectorDataQualityMetric[];
}

export interface GetFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The anomalous metric and group ID.</p>
   */
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeries | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details about feedback submitted for an anomalous metric.</p>
 */
export interface TimeSeriesFeedback {
  /**
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId?: string;

  /**
   * <p>Feedback on whether the metric is a legitimate anomaly.</p>
   */
  IsAnomaly?: boolean;
}

export interface GetFeedbackResponse {
  /**
   * <p>Feedback for an anomalous metric.</p>
   */
  AnomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains information about the source configuration in Amazon S3.</p>
 */
export interface SampleDataS3SourceConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of strings containing the list of templated paths.</p>
   */
  TemplatedPathList?: string[];

  /**
   * <p>An array of strings containing the historical set of data paths.</p>
   */
  HistoricalDataPathList?: string[];

  /**
   * <p>Contains information about a source file's formatting.</p>
   */
  FileFormatDescriptor: FileFormatDescriptor | undefined;
}

export interface GetSampleDataRequest {
  /**
   * <p>A datasource bucket in Amazon S3.</p>
   */
  S3SourceConfig?: SampleDataS3SourceConfig;
}

export interface GetSampleDataResponse {
  /**
   * <p>A list of header labels for the records.</p>
   */
  HeaderValues?: string[];

  /**
   * <p>A list of records.</p>
   */
  SampleRows?: string[][];
}

export enum RelationshipType {
  CAUSE_OF_INPUT_ANOMALY_GROUP = "CAUSE_OF_INPUT_ANOMALY_GROUP",
  EFFECT_OF_INPUT_ANOMALY_GROUP = "EFFECT_OF_INPUT_ANOMALY_GROUP",
}

/**
 * <p>Aggregated details about the measures contributing to the anomaly group, and the measures
 *             potentially impacted by the anomaly group.</p>
 *         <p></p>
 */
export interface InterMetricImpactDetails {
  /**
   * <p>The name of the measure.</p>
   */
  MetricName?: string;

  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * <p>Whether a measure is a potential cause of the anomaly group
   *             (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), or whether the measure is impacted by the
   *             anomaly group (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>).</p>
   */
  RelationshipType?: RelationshipType | string;

  /**
   * <p>For potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>), the percentage
   *             contribution the measure has in causing the anomalies.</p>
   */
  ContributionPercentage?: number;
}

export interface ListAlertsRequest {
  /**
   * <p>The ARN of the alert's detector.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To
   *       retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results that will be displayed by the request.</p>
   */
  MaxResults?: number;
}

export interface ListAlertsResponse {
  /**
   * <p>Contains information about an alert.</p>
   */
  AlertSummaryList?: AlertSummary[];

  /**
   * <p>If the response is truncated, the service returns this token. To retrieve the next set of results, use this
   *       token in the next request.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyDetectorsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To
   *       retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyDetectorsResponse {
  /**
   * <p>A list of anomaly detectors in the account in the current region.</p>
   */
  AnomalyDetectorSummaryList?: AnomalyDetectorSummary[];

  /**
   * <p>If the response is truncated, the service returns this token. To retrieve the next set of results, use the
   *       token in the next request.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyGroupRelatedMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or
   *             downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.</p>
   */
  RelationshipTypeFilter?: RelationshipType | string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next
   *             page of results.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyGroupRelatedMetricsResponse {
  /**
   * <p>Aggregated details about the measures contributing to the anomaly group, and the measures
   *             potentially impacted by the anomaly group.</p>
   */
  InterMetricImpactList?: InterMetricImpactDetails[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyGroupSummariesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The minimum severity score for inclusion in the output.</p>
   */
  SensitivityThreshold: number | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyGroupSummariesResponse {
  /**
   * <p>A list of anomaly group summaries.</p>
   */
  AnomalyGroupSummaryList?: AnomalyGroupSummary[];

  /**
   * <p>Aggregated details about the anomaly groups.</p>
   */
  AnomalyGroupStatistics?: AnomalyGroupStatistics;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;
}

export interface ListAnomalyGroupTimeSeriesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId: string | undefined;

  /**
   * <p>The name of the measure field.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as
 *         <i>availability</i> in the <i>us-east-1</i> Region.</p>
 */
export interface TimeSeries {
  /**
   * <p>The ID of the metric.</p>
   */
  TimeSeriesId: string | undefined;

  /**
   * <p>The dimensions of the metric.</p>
   */
  DimensionList: DimensionNameValue[] | undefined;

  /**
   * <p>The values for the metric.</p>
   */
  MetricValueList: number[] | undefined;
}

export interface ListAnomalyGroupTimeSeriesResponse {
  /**
   * <p>The ID of the anomaly group.</p>
   */
  AnomalyGroupId?: string;

  /**
   * <p>The name of the measure field.</p>
   */
  MetricName?: string;

  /**
   * <p>Timestamps for the anomalous metrics.</p>
   */
  TimestampList?: string[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of anomalous metrics.</p>
   */
  TimeSeriesList?: TimeSeries[];
}

export interface ListMetricSetsRequest {
  /**
   * <p>The ARN of the anomaly detector containing the metrics sets to list.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains information about a dataset.</p>
 */
export interface MetricSetSummary {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;

  /**
   * <p>The ARN of the detector to which the dataset belongs.</p>
   */
  AnomalyDetectorArn?: string;

  /**
   * <p>The description of the dataset.</p>
   */
  MetricSetDescription?: string;

  /**
   * <p>The name of the dataset.</p>
   */
  MetricSetName?: string;

  /**
   * <p>The time at which the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the dataset was last modified.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>The dataset's <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a>.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListMetricSetsResponse {
  /**
   * <p>A list of the datasets in the AWS Region, with configuration details for each.</p>
   */
  MetricSetSummaryList?: MetricSetSummary[];

  /**
   * <p>If the response is truncated, the list call returns this token. To retrieve the next set
   *       of results, use the token in the next list request. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The resource's tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface PutFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>Feedback for an anomalous metric.</p>
   */
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesFeedback | undefined;
}

export interface PutFeedbackResponse {}

export interface TagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following
   *       symbols: <code>_.:/=+@-</code>
   *          </p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys to remove from the resource's tags.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAlertRequest {
  /**
   * <p>The ARN of the alert to update.</p>
   */
  AlertArn: string | undefined;

  /**
   * <p>A description of the alert.</p>
   */
  AlertDescription?: string;

  /**
   * <p>An integer from 0 to 100 specifying the alert sensitivity threshold.</p>
   */
  AlertSensitivityThreshold?: number;

  /**
   * <p>Action that will be triggered when there is an alert.</p>
   */
  Action?: Action;

  /**
   * <p>The configuration of the alert filters, containing MetricList and DimensionFilterList.</p>
   */
  AlertFilters?: AlertFilters;
}

export interface UpdateAlertResponse {
  /**
   * <p>The ARN of the updated alert.</p>
   */
  AlertArn?: string;
}

export interface UpdateAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to update.</p>
   */
  AnomalyDetectorArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS KMS encryption key.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The updated detector description.</p>
   */
  AnomalyDetectorDescription?: string;

  /**
   * <p>Contains information about the configuration to which the detector will be updated.</p>
   */
  AnomalyDetectorConfig?: AnomalyDetectorConfig;
}

export interface UpdateAnomalyDetectorResponse {
  /**
   * <p>The ARN of the updated detector.</p>
   */
  AnomalyDetectorArn?: string;
}

export interface UpdateMetricSetRequest {
  /**
   * <p>The ARN of the dataset to update.</p>
   */
  MetricSetArn: string | undefined;

  /**
   * <p>The dataset's description.</p>
   */
  MetricSetDescription?: string;

  /**
   * <p>The metric list.</p>
   */
  MetricList?: Metric[];

  /**
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.</p>
   */
  Offset?: number;

  /**
   * <p>The timestamp column.</p>
   */
  TimestampColumn?: TimestampColumn;

  /**
   * <p>The dimension list.</p>
   */
  DimensionList?: string[];

  /**
   * <p>The dataset's interval.</p>
   */
  MetricSetFrequency?: Frequency | string;

  /**
   * <p>Contains information about source data used to generate metrics.</p>
   */
  MetricSource?: MetricSource;

  /**
   * <p>Describes a list of filters for choosing specific dimensions and specific values. Each
   *       filter consists of the dimension and one of its values that you want to include. When
   *       multiple dimensions or values are specified, the dimensions are joined with an AND operation
   *       and the values are joined with an OR operation.</p>
   */
  DimensionFilterList?: MetricSetDimensionFilter[];
}

export interface UpdateMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;
}

/**
 * @internal
 */
export const LambdaConfigurationFilterSensitiveLog = (obj: LambdaConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SNSConfigurationFilterSensitiveLog = (obj: SNSConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateAnomalyDetectorRequestFilterSensitiveLog = (obj: ActivateAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateAnomalyDetectorResponseFilterSensitiveLog = (obj: ActivateAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionFilterFilterSensitiveLog = (obj: DimensionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlertFiltersFilterSensitiveLog = (obj: AlertFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlertFilterSensitiveLog = (obj: Alert): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlertSummaryFilterSensitiveLog = (obj: AlertSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyDetectorConfigFilterSensitiveLog = (obj: AnomalyDetectorConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyDetectorConfigSummaryFilterSensitiveLog = (obj: AnomalyDetectorConfigSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityMetricFilterSensitiveLog = (obj: DataQualityMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricSetDataQualityMetricFilterSensitiveLog = (obj: MetricSetDataQualityMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyDetectorDataQualityMetricFilterSensitiveLog = (obj: AnomalyDetectorDataQualityMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyDetectorSummaryFilterSensitiveLog = (obj: AnomalyDetectorSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionValueContributionFilterSensitiveLog = (obj: DimensionValueContribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionContributionFilterSensitiveLog = (obj: DimensionContribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContributionMatrixFilterSensitiveLog = (obj: ContributionMatrix): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricLevelImpactFilterSensitiveLog = (obj: MetricLevelImpact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyGroupFilterSensitiveLog = (obj: AnomalyGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ItemizedMetricStatsFilterSensitiveLog = (obj: ItemizedMetricStats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyGroupStatisticsFilterSensitiveLog = (obj: AnomalyGroupStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyGroupSummaryFilterSensitiveLog = (obj: AnomalyGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyGroupTimeSeriesFilterSensitiveLog = (obj: AnomalyGroupTimeSeries): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyGroupTimeSeriesFeedbackFilterSensitiveLog = (obj: AnomalyGroupTimeSeriesFeedback): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppFlowConfigFilterSensitiveLog = (obj: AppFlowConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackTestConfigurationFilterSensitiveLog = (obj: BackTestConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AthenaSourceConfigFilterSensitiveLog = (obj: AthenaSourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeValueFilterSensitiveLog = (obj: AttributeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoDetectionS3SourceConfigFilterSensitiveLog = (obj: AutoDetectionS3SourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoDetectionMetricSourceFilterSensitiveLog = (obj: AutoDetectionMetricSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackTestAnomalyDetectorRequestFilterSensitiveLog = (obj: BackTestAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackTestAnomalyDetectorResponseFilterSensitiveLog = (obj: BackTestAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchConfigFilterSensitiveLog = (obj: CloudWatchConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAlertRequestFilterSensitiveLog = (obj: CreateAlertRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAlertResponseFilterSensitiveLog = (obj: CreateAlertResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAnomalyDetectorRequestFilterSensitiveLog = (obj: CreateAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAnomalyDetectorResponseFilterSensitiveLog = (obj: CreateAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricSetDimensionFilterFilterSensitiveLog = (obj: MetricSetDimensionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricFilterSensitiveLog = (obj: Metric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigurationFilterSensitiveLog = (obj: VpcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RDSSourceConfigFilterSensitiveLog = (obj: RDSSourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftSourceConfigFilterSensitiveLog = (obj: RedshiftSourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CsvFormatDescriptorFilterSensitiveLog = (obj: CsvFormatDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JsonFormatDescriptorFilterSensitiveLog = (obj: JsonFormatDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileFormatDescriptorFilterSensitiveLog = (obj: FileFormatDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SourceConfigFilterSensitiveLog = (obj: S3SourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricSourceFilterSensitiveLog = (obj: MetricSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestampColumnFilterSensitiveLog = (obj: TimestampColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMetricSetRequestFilterSensitiveLog = (obj: CreateMetricSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMetricSetResponseFilterSensitiveLog = (obj: CreateMetricSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeactivateAnomalyDetectorRequestFilterSensitiveLog = (obj: DeactivateAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeactivateAnomalyDetectorResponseFilterSensitiveLog = (obj: DeactivateAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAlertRequestFilterSensitiveLog = (obj: DeleteAlertRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAlertResponseFilterSensitiveLog = (obj: DeleteAlertResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnomalyDetectorRequestFilterSensitiveLog = (obj: DeleteAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnomalyDetectorResponseFilterSensitiveLog = (obj: DeleteAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlertRequestFilterSensitiveLog = (obj: DescribeAlertRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlertResponseFilterSensitiveLog = (obj: DescribeAlertResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnomalyDetectionExecutionsRequestFilterSensitiveLog = (
  obj: DescribeAnomalyDetectionExecutionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionStatusFilterSensitiveLog = (obj: ExecutionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnomalyDetectionExecutionsResponseFilterSensitiveLog = (
  obj: DescribeAnomalyDetectionExecutionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnomalyDetectorRequestFilterSensitiveLog = (obj: DescribeAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnomalyDetectorResponseFilterSensitiveLog = (obj: DescribeAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMetricSetRequestFilterSensitiveLog = (obj: DescribeMetricSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMetricSetResponseFilterSensitiveLog = (obj: DescribeMetricSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedFieldFilterSensitiveLog = (obj: DetectedField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedCsvFormatDescriptorFilterSensitiveLog = (obj: DetectedCsvFormatDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedJsonFormatDescriptorFilterSensitiveLog = (obj: DetectedJsonFormatDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedFileFormatDescriptorFilterSensitiveLog = (obj: DetectedFileFormatDescriptor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedS3SourceConfigFilterSensitiveLog = (obj: DetectedS3SourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedMetricSourceFilterSensitiveLog = (obj: DetectedMetricSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectedMetricSetConfigFilterSensitiveLog = (obj: DetectedMetricSetConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectMetricSetConfigRequestFilterSensitiveLog = (obj: DetectMetricSetConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectMetricSetConfigResponseFilterSensitiveLog = (obj: DetectMetricSetConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionNameValueFilterSensitiveLog = (obj: DimensionNameValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnomalyGroupRequestFilterSensitiveLog = (obj: GetAnomalyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnomalyGroupResponseFilterSensitiveLog = (obj: GetAnomalyGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataQualityMetricsRequestFilterSensitiveLog = (obj: GetDataQualityMetricsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataQualityMetricsResponseFilterSensitiveLog = (obj: GetDataQualityMetricsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFeedbackRequestFilterSensitiveLog = (obj: GetFeedbackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSeriesFeedbackFilterSensitiveLog = (obj: TimeSeriesFeedback): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFeedbackResponseFilterSensitiveLog = (obj: GetFeedbackResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SampleDataS3SourceConfigFilterSensitiveLog = (obj: SampleDataS3SourceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSampleDataRequestFilterSensitiveLog = (obj: GetSampleDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSampleDataResponseFilterSensitiveLog = (obj: GetSampleDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InterMetricImpactDetailsFilterSensitiveLog = (obj: InterMetricImpactDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlertsRequestFilterSensitiveLog = (obj: ListAlertsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlertsResponseFilterSensitiveLog = (obj: ListAlertsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyDetectorsRequestFilterSensitiveLog = (obj: ListAnomalyDetectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyDetectorsResponseFilterSensitiveLog = (obj: ListAnomalyDetectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyGroupRelatedMetricsRequestFilterSensitiveLog = (
  obj: ListAnomalyGroupRelatedMetricsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyGroupRelatedMetricsResponseFilterSensitiveLog = (
  obj: ListAnomalyGroupRelatedMetricsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyGroupSummariesRequestFilterSensitiveLog = (obj: ListAnomalyGroupSummariesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyGroupSummariesResponseFilterSensitiveLog = (obj: ListAnomalyGroupSummariesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyGroupTimeSeriesRequestFilterSensitiveLog = (obj: ListAnomalyGroupTimeSeriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSeriesFilterSensitiveLog = (obj: TimeSeries): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnomalyGroupTimeSeriesResponseFilterSensitiveLog = (obj: ListAnomalyGroupTimeSeriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMetricSetsRequestFilterSensitiveLog = (obj: ListMetricSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricSetSummaryFilterSensitiveLog = (obj: MetricSetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMetricSetsResponseFilterSensitiveLog = (obj: ListMetricSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutFeedbackRequestFilterSensitiveLog = (obj: PutFeedbackRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutFeedbackResponseFilterSensitiveLog = (obj: PutFeedbackResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAlertRequestFilterSensitiveLog = (obj: UpdateAlertRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAlertResponseFilterSensitiveLog = (obj: UpdateAlertResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAnomalyDetectorRequestFilterSensitiveLog = (obj: UpdateAnomalyDetectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAnomalyDetectorResponseFilterSensitiveLog = (obj: UpdateAnomalyDetectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMetricSetRequestFilterSensitiveLog = (obj: UpdateMetricSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMetricSetResponseFilterSensitiveLog = (obj: UpdateMetricSetResponse): any => ({
  ...obj,
});
