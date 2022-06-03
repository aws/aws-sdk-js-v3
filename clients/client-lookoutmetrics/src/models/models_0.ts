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

export namespace LambdaConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaConfiguration): any => ({
    ...obj,
  });
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
   */
  SnsFormat?: SnsFormat | string;
}

export namespace SNSConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSConfiguration): any => ({
    ...obj,
  });
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

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

export interface ActivateAnomalyDetectorRequest {
  /**
   * <p>The ARN of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export namespace ActivateAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateAnomalyDetectorRequest): any => ({
    ...obj,
  });
}

export interface ActivateAnomalyDetectorResponse {}

export namespace ActivateAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateAnomalyDetectorResponse): any => ({
    ...obj,
  });
}

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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
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
}

export namespace Alert {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alert): any => ({
    ...obj,
  });
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

export namespace AlertSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlertSummary): any => ({
    ...obj,
  });
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

export namespace AnomalyDetectorConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyDetectorConfig): any => ({
    ...obj,
  });
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

export namespace AnomalyDetectorConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyDetectorConfigSummary): any => ({
    ...obj,
  });
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

export namespace AnomalyDetectorSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyDetectorSummary): any => ({
    ...obj,
  });
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

export namespace DimensionValueContribution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DimensionValueContribution): any => ({
    ...obj,
  });
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

export namespace DimensionContribution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DimensionContribution): any => ({
    ...obj,
  });
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

export namespace ContributionMatrix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContributionMatrix): any => ({
    ...obj,
  });
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

export namespace MetricLevelImpact {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricLevelImpact): any => ({
    ...obj,
  });
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

export namespace AnomalyGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyGroup): any => ({
    ...obj,
  });
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

export namespace ItemizedMetricStats {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemizedMetricStats): any => ({
    ...obj,
  });
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

export namespace AnomalyGroupStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyGroupStatistics): any => ({
    ...obj,
  });
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

export namespace AnomalyGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyGroupSummary): any => ({
    ...obj,
  });
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

export namespace AnomalyGroupTimeSeries {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyGroupTimeSeries): any => ({
    ...obj,
  });
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

export namespace AnomalyGroupTimeSeriesFeedback {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyGroupTimeSeriesFeedback): any => ({
    ...obj,
  });
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

export namespace AppFlowConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppFlowConfig): any => ({
    ...obj,
  });
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

export namespace BackTestConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackTestConfiguration): any => ({
    ...obj,
  });
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

export namespace AthenaSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AthenaSourceConfig): any => ({
    ...obj,
  });
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

export namespace AttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeValue): any => ({
    ...obj,
  });
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

export namespace AutoDetectionS3SourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoDetectionS3SourceConfig): any => ({
    ...obj,
  });
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

export namespace AutoDetectionMetricSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoDetectionMetricSource): any => ({
    ...obj,
  });
}

export interface BackTestAnomalyDetectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export namespace BackTestAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackTestAnomalyDetectorRequest): any => ({
    ...obj,
  });
}

export interface BackTestAnomalyDetectorResponse {}

export namespace BackTestAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackTestAnomalyDetectorResponse): any => ({
    ...obj,
  });
}

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

export namespace CloudWatchConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchConfig): any => ({
    ...obj,
  });
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
  AlertSensitivityThreshold: number | undefined;

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
}

export namespace CreateAlertRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlertRequest): any => ({
    ...obj,
  });
}

export interface CreateAlertResponse {
  /**
   * <p>The ARN of the alert.</p>
   */
  AlertArn?: string;
}

export namespace CreateAlertResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlertResponse): any => ({
    ...obj,
  });
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

export namespace CreateAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAnomalyDetectorRequest): any => ({
    ...obj,
  });
}

export interface CreateAnomalyDetectorResponse {
  /**
   * <p>The ARN of the detector.</p>
   */
  AnomalyDetectorArn?: string;
}

export namespace CreateAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAnomalyDetectorResponse): any => ({
    ...obj,
  });
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

export namespace Metric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Metric): any => ({
    ...obj,
  });
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

export namespace VpcConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
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

export namespace RDSSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RDSSourceConfig): any => ({
    ...obj,
  });
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

export namespace RedshiftSourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftSourceConfig): any => ({
    ...obj,
  });
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

export namespace CsvFormatDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CsvFormatDescriptor): any => ({
    ...obj,
  });
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

export namespace JsonFormatDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonFormatDescriptor): any => ({
    ...obj,
  });
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

export namespace FileFormatDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileFormatDescriptor): any => ({
    ...obj,
  });
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

export namespace S3SourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3SourceConfig): any => ({
    ...obj,
  });
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

export namespace MetricSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricSource): any => ({
    ...obj,
  });
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

export namespace TimestampColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampColumn): any => ({
    ...obj,
  });
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
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3 and Redshift datasources.</p>
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
}

export namespace CreateMetricSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMetricSetRequest): any => ({
    ...obj,
  });
}

export interface CreateMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;
}

export namespace CreateMetricSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMetricSetResponse): any => ({
    ...obj,
  });
}

export interface DeactivateAnomalyDetectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export namespace DeactivateAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateAnomalyDetectorRequest): any => ({
    ...obj,
  });
}

export interface DeactivateAnomalyDetectorResponse {}

export namespace DeactivateAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateAnomalyDetectorResponse): any => ({
    ...obj,
  });
}

export interface DeleteAlertRequest {
  /**
   * <p>The ARN of the alert to delete.</p>
   */
  AlertArn: string | undefined;
}

export namespace DeleteAlertRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlertRequest): any => ({
    ...obj,
  });
}

export interface DeleteAlertResponse {}

export namespace DeleteAlertResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlertResponse): any => ({
    ...obj,
  });
}

export interface DeleteAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to delete.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export namespace DeleteAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAnomalyDetectorRequest): any => ({
    ...obj,
  });
}

export interface DeleteAnomalyDetectorResponse {}

export namespace DeleteAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAnomalyDetectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeAlertRequest {
  /**
   * <p>The ARN of the alert to describe.</p>
   */
  AlertArn: string | undefined;
}

export namespace DescribeAlertRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlertRequest): any => ({
    ...obj,
  });
}

export interface DescribeAlertResponse {
  /**
   * <p>Contains information about an alert.</p>
   */
  Alert?: Alert;
}

export namespace DescribeAlertResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlertResponse): any => ({
    ...obj,
  });
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

export namespace DescribeAnomalyDetectionExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnomalyDetectionExecutionsRequest): any => ({
    ...obj,
  });
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

export namespace ExecutionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionStatus): any => ({
    ...obj,
  });
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

export namespace DescribeAnomalyDetectionExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnomalyDetectionExecutionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyDetectorRequest {
  /**
   * <p>The ARN of the detector to describe.</p>
   */
  AnomalyDetectorArn: string | undefined;
}

export namespace DescribeAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnomalyDetectorRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnomalyDetectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeMetricSetRequest {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn: string | undefined;
}

export namespace DescribeMetricSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMetricSetRequest): any => ({
    ...obj,
  });
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
   * <p>The offset in seconds. Only supported for S3 and Redshift datasources.</p>
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
}

export namespace DescribeMetricSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMetricSetResponse): any => ({
    ...obj,
  });
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

export namespace DetectedField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedField): any => ({
    ...obj,
  });
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

export namespace DetectedCsvFormatDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedCsvFormatDescriptor): any => ({
    ...obj,
  });
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

export namespace DetectedJsonFormatDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedJsonFormatDescriptor): any => ({
    ...obj,
  });
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

export namespace DetectedFileFormatDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedFileFormatDescriptor): any => ({
    ...obj,
  });
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

export namespace DetectedS3SourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedS3SourceConfig): any => ({
    ...obj,
  });
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

export namespace DetectedMetricSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedMetricSource): any => ({
    ...obj,
  });
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

export namespace DetectedMetricSetConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectedMetricSetConfig): any => ({
    ...obj,
  });
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

export namespace DetectMetricSetConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectMetricSetConfigRequest): any => ({
    ...obj,
  });
}

export interface DetectMetricSetConfigResponse {
  /**
   * <p>The inferred dataset configuration for the datasource.</p>
   */
  DetectedMetricSetConfig?: DetectedMetricSetConfig;
}

export namespace DetectMetricSetConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectMetricSetConfigResponse): any => ({
    ...obj,
  });
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

export namespace DimensionNameValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DimensionNameValue): any => ({
    ...obj,
  });
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

export namespace GetAnomalyGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnomalyGroupRequest): any => ({
    ...obj,
  });
}

export interface GetAnomalyGroupResponse {
  /**
   * <p>Details about the anomaly group.</p>
   */
  AnomalyGroup?: AnomalyGroup;
}

export namespace GetAnomalyGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnomalyGroupResponse): any => ({
    ...obj,
  });
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

export namespace GetFeedbackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFeedbackRequest): any => ({
    ...obj,
  });
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

export namespace TimeSeriesFeedback {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeSeriesFeedback): any => ({
    ...obj,
  });
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

export namespace GetFeedbackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFeedbackResponse): any => ({
    ...obj,
  });
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

export namespace SampleDataS3SourceConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SampleDataS3SourceConfig): any => ({
    ...obj,
  });
}

export interface GetSampleDataRequest {
  /**
   * <p>A datasource bucket in Amazon S3.</p>
   */
  S3SourceConfig?: SampleDataS3SourceConfig;
}

export namespace GetSampleDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSampleDataRequest): any => ({
    ...obj,
  });
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

export namespace GetSampleDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSampleDataResponse): any => ({
    ...obj,
  });
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

export namespace InterMetricImpactDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InterMetricImpactDetails): any => ({
    ...obj,
  });
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

export namespace ListAlertsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlertsRequest): any => ({
    ...obj,
  });
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

export namespace ListAlertsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAlertsResponse): any => ({
    ...obj,
  });
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

export namespace ListAnomalyDetectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyDetectorsRequest): any => ({
    ...obj,
  });
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

export namespace ListAnomalyDetectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyDetectorsResponse): any => ({
    ...obj,
  });
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

export namespace ListAnomalyGroupRelatedMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyGroupRelatedMetricsRequest): any => ({
    ...obj,
  });
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

export namespace ListAnomalyGroupRelatedMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyGroupRelatedMetricsResponse): any => ({
    ...obj,
  });
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

export namespace ListAnomalyGroupSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyGroupSummariesRequest): any => ({
    ...obj,
  });
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

export namespace ListAnomalyGroupSummariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyGroupSummariesResponse): any => ({
    ...obj,
  });
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

export namespace ListAnomalyGroupTimeSeriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyGroupTimeSeriesRequest): any => ({
    ...obj,
  });
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

export namespace TimeSeries {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeSeries): any => ({
    ...obj,
  });
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

export namespace ListAnomalyGroupTimeSeriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomalyGroupTimeSeriesResponse): any => ({
    ...obj,
  });
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

export namespace ListMetricSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMetricSetsRequest): any => ({
    ...obj,
  });
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

export namespace MetricSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricSetSummary): any => ({
    ...obj,
  });
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

export namespace ListMetricSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMetricSetsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The resource's tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PutFeedbackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFeedbackRequest): any => ({
    ...obj,
  });
}

export interface PutFeedbackResponse {}

export namespace PutFeedbackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFeedbackResponse): any => ({
    ...obj,
  });
}

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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAnomalyDetectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAnomalyDetectorRequest): any => ({
    ...obj,
  });
}

export interface UpdateAnomalyDetectorResponse {
  /**
   * <p>The ARN of the updated detector.</p>
   */
  AnomalyDetectorArn?: string;
}

export namespace UpdateAnomalyDetectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAnomalyDetectorResponse): any => ({
    ...obj,
  });
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
   * <p>After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3 and Redshift datasources.</p>
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
}

export namespace UpdateMetricSetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMetricSetRequest): any => ({
    ...obj,
  });
}

export interface UpdateMetricSetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  MetricSetArn?: string;
}

export namespace UpdateMetricSetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMetricSetResponse): any => ({
    ...obj,
  });
}
