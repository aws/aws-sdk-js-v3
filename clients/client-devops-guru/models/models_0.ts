import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p> You don't have permissions to perform the requested operation. The user or role that is making the request must have at
 * 			least one IAM permissions policy attached that grants the required permissions. For more information, see
 * 			<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the <i>IAM User Guide</i>. </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
 *
 * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
 */
export interface SnsChannelConfig {
  /**
   * <p> The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
   */
  TopicArn?: string;
}

export namespace SnsChannelConfig {
  export const filterSensitiveLog = (obj: SnsChannelConfig): any => ({
    ...obj,
  });
}

/**
 * <p> Information about notification channels you have configured with DevOps Guru.
 * 			The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).</p>
 */
export interface NotificationChannelConfig {
  /**
   * <p>
   * 			Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
   * 		</p>
   *
   * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
   * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
   * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
   * 				for cross account Amazon SNS topics</a>.</p>
   * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
   * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
   * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
   */
  Sns: SnsChannelConfig | undefined;
}

export namespace NotificationChannelConfig {
  export const filterSensitiveLog = (obj: NotificationChannelConfig): any => ({
    ...obj,
  });
}

export interface AddNotificationChannelRequest {
  /**
   * <p> A <code>NotificationChannelConfig</code> object that specifies what type of
   *    		notification channel to add. The one
   *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
   */
  Config: NotificationChannelConfig | undefined;
}

export namespace AddNotificationChannelRequest {
  export const filterSensitiveLog = (obj: AddNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface AddNotificationChannelResponse {
  /**
   * <p>
   *    		The ID of the added notification channel.
   *    	</p>
   */
  Id: string | undefined;
}

export namespace AddNotificationChannelResponse {
  export const filterSensitiveLog = (obj: AddNotificationChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			An exception that is thrown when a conflict occurs.
 * 		</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>
   * 			The ID of the AWS resource in which a conflict occurred.
   * 		</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>
   * 			The type of the AWS resource in which a conflict occurred.
   * 		</p>
   */
  ResourceType: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>An internal failure in an Amazon service occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
  /**
   * <p>
   * 			The number of seconds after which the action that caused the internal server
   * 			exception can be retried.
   * 		</p>
   */
  RetryAfterSeconds?: number;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>A requested resource could not be found</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>
   * 			The ID of the AWS resource that could not be found.
   * 		</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>
   * 			The type of the AWS resource that could not be found.
   * 		</p>
   */
  ResourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request contains a value that exceeds a maximum quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to a request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>
   * 			The code of the quota that was exceeded, causing the throttling exception.
   * 		</p>
   */
  QuotaCode?: string;

  /**
   * <p>
   * 			The code of the service that caused the throttling exception.
   * 		</p>
   */
  ServiceCode?: string;

  /**
   * <p>
   * 			The number of seconds after which the action that caused the throttling
   * 			exception can be retried.
   * 		</p>
   */
  RetryAfterSeconds?: number;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			The field associated with the validation exception.
 * 		</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>
   * 			The name of the field.
   * 		</p>
   */
  Name: string | undefined;

  /**
   * <p>
   * 			The message associated with the validation exception with information to help
   * 			determine its cause.
   * 		</p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
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
 * <p>
 * 			Contains information about data passed in to a field during a request that is not valid.
 * 		</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>
   * 			A message that describes the validation exception.
   * 		</p>
   */
  Message: string | undefined;

  /**
   * <p>
   * 			The reason the validation exception was thrown.
   * 		</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>
   * 			An array of fields that are associated with the validation exception.
   * 		</p>
   */
  Fields?: ValidationExceptionField[];
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export enum AnomalySeverity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p> The dimension of a Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your
 * 			account for operational problems and anomalous behavior. A dimension is a name/value pair
 * 			that is part of the identity of a metric. A metric can have up to 10 dimensions. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 */
export interface CloudWatchMetricsDimension {
  /**
   * <p>
   * 			The name of the CloudWatch dimension.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The value of the CloudWatch dimension.
   * 		</p>
   */
  Value?: string;
}

export namespace CloudWatchMetricsDimension {
  export const filterSensitiveLog = (obj: CloudWatchMetricsDimension): any => ({
    ...obj,
  });
}

export enum CloudWatchMetricsStat {
  AVERAGE = "Average",
  MAXIMUM = "Maximum",
  MINIMUM = "Minimum",
  P50 = "p50",
  P90 = "p90",
  P99 = "p99",
  SAMPLE_COUNT = "SampleCount",
  SUM = "Sum",
}

/**
 * <p>
 * 			Information about an Amazon CloudWatch metric.
 * 		</p>
 */
export interface CloudWatchMetricsDetail {
  /**
   * <p>
   * 			The name of the CloudWatch metric.
   * 		</p>
   */
  MetricName?: string;

  /**
   * <p>
   * 			The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
   * 		</p>
   */
  Namespace?: string;

  /**
   * <p>
   * 			An array of CloudWatch dimensions associated with
   * 		</p>
   */
  Dimensions?: CloudWatchMetricsDimension[];

  /**
   * <p>
   * 			The type of statistic associated with the CloudWatch metric. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the
   * 			<i>Amazon CloudWatch User Guide</i>.
   * 		</p>
   */
  Stat?: CloudWatchMetricsStat | string;

  /**
   * <p>
   * 			The unit of measure used for the CloudWatch metric. For example, <code>Bytes</code>, <code>Seconds</code>,
   * 			<code>Count</code>, and <code>Percent</code>.
   * 		</p>
   */
  Unit?: string;

  /**
   * <p>
   * 			The length of time associated with the CloudWatch metric in number of seconds.
   * 		</p>
   */
  Period?: number;
}

export namespace CloudWatchMetricsDetail {
  export const filterSensitiveLog = (obj: CloudWatchMetricsDetail): any => ({
    ...obj,
  });
}

/**
 * <p> Details about the source of the anomalous operational data that triggered the anomaly. The
 * 			one supported source is Amazon CloudWatch metrics. </p>
 */
export interface AnomalySourceDetails {
  /**
   * <p> An array of <code>CloudWatchMetricsDetail</code> object that contains information
   * 			about the analyzed metrics that displayed anomalous behavior. </p>
   */
  CloudWatchMetrics?: CloudWatchMetricsDetail[];
}

export namespace AnomalySourceDetails {
  export const filterSensitiveLog = (obj: AnomalySourceDetails): any => ({
    ...obj,
  });
}

export enum AnomalyStatus {
  CLOSED = "CLOSED",
  ONGOING = "ONGOING",
}

/**
 * <p>
 * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
 * 		</p>
 */
export interface AnomalyTimeRange {
  /**
   * <p>
   * 			The time when the anomalous behavior started.
   * 		</p>
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the anomalous behavior ended. </p>
   */
  EndTime?: Date;
}

export namespace AnomalyTimeRange {
  export const filterSensitiveLog = (obj: AnomalyTimeRange): any => ({
    ...obj,
  });
}

export interface DescribeAccountHealthRequest {}

export namespace DescribeAccountHealthRequest {
  export const filterSensitiveLog = (obj: DescribeAccountHealthRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountHealthResponse {
  /**
   * <p>
   *    		An integer that specifies the number of open reactive insights in your AWS account.
   *    	</p>
   */
  OpenReactiveInsights: number | undefined;

  /**
   * <p>
   *    		An integer that specifies the number of open proactive insights in your AWS account.
   *    	</p>
   */
  OpenProactiveInsights: number | undefined;

  /**
   * <p>
   *    		An integer that specifies the number of metrics that have been analyzed in your AWS account.
   *    	</p>
   */
  MetricsAnalyzed: number | undefined;

  /**
   * <p>The number of Amazon DevOps Guru resource analysis hours billed to the current AWS account in the last hour.
   *  		</p>
   */
  ResourceHours: number | undefined;
}

export namespace DescribeAccountHealthResponse {
  export const filterSensitiveLog = (obj: DescribeAccountHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountOverviewRequest {
  /**
   * <p>
   *    		The start of the time range passed in. The start time granularity is at the
   *    		day level. The floor of the start time is used. Returned information occurred after this day.
   *    	</p>
   */
  FromTime: Date | undefined;

  /**
   * <p>
   *    		The end of the time range passed in. The start time granularity is at the
   *    		day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used.
   *    	</p>
   */
  ToTime?: Date;
}

export namespace DescribeAccountOverviewRequest {
  export const filterSensitiveLog = (obj: DescribeAccountOverviewRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountOverviewResponse {
  /**
   * <p>
   *    		An integer that specifies the number of open reactive insights in your AWS account that were created during the
   *    		time range passed in.
   *    	</p>
   */
  ReactiveInsights: number | undefined;

  /**
   * <p>
   *    		An integer that specifies the number of open proactive insights in your AWS account that were created during the
   *    		time range passed in.
   *    	</p>
   */
  ProactiveInsights: number | undefined;

  /**
   * <p>
   *    		The Mean Time to Recover (MTTR) for all closed insights that were created during the
   *    		time range passed in.
   *    	</p>
   */
  MeanTimeToRecoverInMilliseconds: number | undefined;
}

export namespace DescribeAccountOverviewResponse {
  export const filterSensitiveLog = (obj: DescribeAccountOverviewResponse): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyRequest {
  /**
   * <p>
   *    		The ID of the anomaly.
   *    	</p>
   */
  Id: string | undefined;
}

export namespace DescribeAnomalyRequest {
  export const filterSensitiveLog = (obj: DescribeAnomalyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
 * 		</p>
 */
export interface PredictionTimeRange {
  /**
   * <p>
   * 			The time range during which a metric limit is expected to be exceeded. This applies to proactive insights only.
   * 		</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * 			The time when the behavior in a proactive insight is expected to end.
   * 		</p>
   */
  EndTime?: Date;
}

export namespace PredictionTimeRange {
  export const filterSensitiveLog = (obj: PredictionTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about AWS CloudFormation stacks. You can use stacks to specify which AWS resources in your account to analyze.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
 * 			in the <i>AWS CloudFormation User Guide</i>.
 * 		</p>
 */
export interface CloudFormationCollection {
  /**
   * <p>
   * 			An array of CloudFormation stack names.
   * 		</p>
   */
  StackNames?: string[];
}

export namespace CloudFormationCollection {
  export const filterSensitiveLog = (obj: CloudFormationCollection): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks.
 * 		</p>
 */
export interface ResourceCollection {
  /**
   * <p> An array of the names of AWS CloudFormation stacks. The stacks define AWS resources
   *    		that DevOps Guru analyzes.
   *    	</p>
   */
  CloudFormation?: CloudFormationCollection;
}

export namespace ResourceCollection {
  export const filterSensitiveLog = (obj: ResourceCollection): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an anomaly. This object is returned by <code>ListAnomalies</code>.</p>
 */
export interface ProactiveAnomaly {
  /**
   * <p>
   * 			The ID of a proactive anomaly.
   * 		</p>
   */
  Id?: string;

  /**
   * <p>
   * 			The severity of a proactive anomaly.
   * 		</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p>
   * 			The status of a proactive anomaly.
   * 		</p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p>
   * 			The time of the anomaly's most recent update.
   * 		</p>
   */
  UpdateTime?: Date;

  /**
   * <p>
   * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
   * 		</p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   * 		</p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p>
   * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   * 		</p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p>
   * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   * 		</p>
   */
  AssociatedInsightId?: string;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>
   * 			A threshold that was exceeded by behavior in analyzed resources. Exceeding this
   * 			threshold is related to the anomalous behavior that generated this anomaly.
   * 		</p>
   */
  Limit?: number;
}

export namespace ProactiveAnomaly {
  export const filterSensitiveLog = (obj: ProactiveAnomaly): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a reactive anomaly.  This object is returned by <code>ListAnomalies</code>.</p>
 */
export interface ReactiveAnomaly {
  /**
   * <p>The ID of the reactive anomaly. </p>
   */
  Id?: string;

  /**
   * <p>The severity of the anomaly. </p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p>
   * 			The status of the anomaly.
   * 		</p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p>
   * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
   * 		</p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   * 		</p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p>
   * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   * 		</p>
   */
  AssociatedInsightId?: string;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace ReactiveAnomaly {
  export const filterSensitiveLog = (obj: ReactiveAnomaly): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyResponse {
  /**
   * <p>
   * 			An <code>ReactiveAnomaly</code> object that represents the requested anomaly.
   * 		</p>
   */
  ProactiveAnomaly?: ProactiveAnomaly;

  /**
   * <p>
   * 			An <code>ProactiveAnomaly</code> object that represents the requested anomaly.
   * 		</p>
   */
  ReactiveAnomaly?: ReactiveAnomaly;
}

export namespace DescribeAnomalyResponse {
  export const filterSensitiveLog = (obj: DescribeAnomalyResponse): any => ({
    ...obj,
  });
}

export interface DescribeFeedbackRequest {
  /**
   * <p>
   * 			The ID of the insight for which the feedback was provided.
   * 		</p>
   */
  InsightId?: string;
}

export namespace DescribeFeedbackRequest {
  export const filterSensitiveLog = (obj: DescribeFeedbackRequest): any => ({
    ...obj,
  });
}

export enum InsightFeedbackOption {
  ALERT_TOO_SENSITIVE = "ALERT_TOO_SENSITIVE",
  DATA_INCORRECT = "DATA_INCORRECT",
  DATA_NOISY_ANOMALY = "DATA_NOISY_ANOMALY",
  RECOMMENDATION_USEFUL = "RECOMMENDATION_USEFUL",
  VALID_COLLECTION = "VALID_COLLECTION",
}

/**
 * <p>
 *       	Information about insight feedback received from a customer.
 *       </p>
 */
export interface InsightFeedback {
  /**
   * <p>
   *       	The insight feedback ID.
   *       </p>
   */
  Id?: string;

  /**
   * <p>
   *       	The feedback provided by the customer.
   *       </p>
   */
  Feedback?: InsightFeedbackOption | string;
}

export namespace InsightFeedback {
  export const filterSensitiveLog = (obj: InsightFeedback): any => ({
    ...obj,
  });
}

export interface DescribeFeedbackResponse {
  /**
   * <p>
   *       	Information about insight feedback received from a customer.
   *       </p>
   */
  InsightFeedback?: InsightFeedback;
}

export namespace DescribeFeedbackResponse {
  export const filterSensitiveLog = (obj: DescribeFeedbackResponse): any => ({
    ...obj,
  });
}

export interface DescribeInsightRequest {
  /**
   * <p>
   *    		The ID of the insight.
   *    	</p>
   */
  Id: string | undefined;
}

export namespace DescribeInsightRequest {
  export const filterSensitiveLog = (obj: DescribeInsightRequest): any => ({
    ...obj,
  });
}

/**
 * <p> A time ranged that specifies when the observed behavior in an insight started and
 * 			ended. </p>
 */
export interface InsightTimeRange {
  /**
   * <p>
   * 			The time when the behavior described in an insight started.
   * 		</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * 			The time when the behavior described in an insight ended.
   * 		</p>
   */
  EndTime?: Date;
}

export namespace InsightTimeRange {
  export const filterSensitiveLog = (obj: InsightTimeRange): any => ({
    ...obj,
  });
}

export enum InsightSeverity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum InsightStatus {
  CLOSED = "CLOSED",
  ONGOING = "ONGOING",
}

/**
 * <p>Details about a proactive insight. This object is returned by <code>ListInsights</code>.</p>
 */
export interface ProactiveInsight {
  /**
   * <p>The ID of the proactive insight. </p>
   */
  Id?: string;

  /**
   * <p>The name of the proactive insight. </p>
   */
  Name?: string;

  /**
   * <p>The severity of the proactive insight. </p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p>The status of the proactive insight. </p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p>
   * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   * 		</p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>
   * 			The ID of the AWS System Manager OpsItem created for this insight. You must enable
   * 			the creation of OpstItems insights before they are created for each insight.
   * 		</p>
   */
  SsmOpsItemId?: string;
}

export namespace ProactiveInsight {
  export const filterSensitiveLog = (obj: ProactiveInsight): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about a reactive insight. This object is returned by <code>ListInsights</code>.
 * 		</p>
 */
export interface ReactiveInsight {
  /**
   * <p>
   * 			The ID of a reactive insight.
   * 		</p>
   */
  Id?: string;

  /**
   * <p>
   * 			The name of a reactive insight.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The severity of a reactive insight.
   * 		</p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p>
   * 			The status of a reactive insight.
   * 		</p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>
   * 			The ID of the AWS System Manager OpsItem created for this insight. You must enable
   * 			the creation of OpstItems insights before they are created for each insight.
   * 		</p>
   */
  SsmOpsItemId?: string;
}

export namespace ReactiveInsight {
  export const filterSensitiveLog = (obj: ReactiveInsight): any => ({
    ...obj,
  });
}

export interface DescribeInsightResponse {
  /**
   * <p>
   * 			An <code>ProactiveInsight</code> object that represents the requested insight.
   * 		</p>
   */
  ProactiveInsight?: ProactiveInsight;

  /**
   * <p>
   * 			An <code>ReactiveInsight</code> object that represents the requested insight.
   * 		</p>
   */
  ReactiveInsight?: ReactiveInsight;
}

export namespace DescribeInsightResponse {
  export const filterSensitiveLog = (obj: DescribeInsightResponse): any => ({
    ...obj,
  });
}

export enum ResourceCollectionType {
  AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION",
}

export interface DescribeResourceCollectionHealthRequest {
  /**
   * <p>
   *    		An AWS resource collection type. This type specifies how analyzed AWS resources are defined. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   *    	</p>
   */
  ResourceCollectionType: ResourceCollectionType | string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeResourceCollectionHealthRequest {
  export const filterSensitiveLog = (obj: DescribeResourceCollectionHealthRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       	Information about the number of open reactive and proactive insights that can be
 *       	used to gauge the health of your system.
 *       </p>
 */
export interface InsightHealth {
  /**
   * <p>
   *       	The number of open proactive insights.
   *       </p>
   */
  OpenProactiveInsights?: number;

  /**
   * <p>
   *       	The number of open reactive insights.
   *       </p>
   */
  OpenReactiveInsights?: number;

  /**
   * <p>
   *       	The Meant Time to Recover (MTTR) for the insight.
   *       </p>
   */
  MeanTimeToRecoverInMilliseconds?: number;
}

export namespace InsightHealth {
  export const filterSensitiveLog = (obj: InsightHealth): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    		Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack.
 *    	</p>
 */
export interface CloudFormationHealth {
  /**
   * <p>
   *    		The name of the CloudFormation stack.
   *    	</p>
   */
  StackName?: string;

  /**
   * <p>
   *    		Information about the health of the AWS resources in your account that are specified by an AWS CloudFormation stack, including
   *    		the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
   *    	</p>
   */
  Insight?: InsightHealth;
}

export namespace CloudFormationHealth {
  export const filterSensitiveLog = (obj: CloudFormationHealth): any => ({
    ...obj,
  });
}

export interface DescribeResourceCollectionHealthResponse {
  /**
   * <p>
   *    		The returned <code>CloudFormationHealthOverview</code> object that contains an <code>InsightHealthOverview</code> object with
   *    		the requested system health information.
   *    	</p>
   */
  CloudFormation: CloudFormationHealth[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeResourceCollectionHealthResponse {
  export const filterSensitiveLog = (obj: DescribeResourceCollectionHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeServiceIntegrationRequest {}

export namespace DescribeServiceIntegrationRequest {
  export const filterSensitiveLog = (obj: DescribeServiceIntegrationRequest): any => ({
    ...obj,
  });
}

export enum OptInStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>
 * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
 * 		</p>
 */
export interface OpsCenterIntegration {
  /**
   * <p>
   * 			Specifies if DevOps Guru is enabled to create an AWS Systems Manager OpsItem for each created insight.
   * 		</p>
   */
  OptInStatus?: OptInStatus | string;
}

export namespace OpsCenterIntegration {
  export const filterSensitiveLog = (obj: OpsCenterIntegration): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager.
 * 		</p>
 */
export interface ServiceIntegrationConfig {
  /**
   * <p>
   * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
   * 		</p>
   */
  OpsCenter?: OpsCenterIntegration;
}

export namespace ServiceIntegrationConfig {
  export const filterSensitiveLog = (obj: ServiceIntegrationConfig): any => ({
    ...obj,
  });
}

export interface DescribeServiceIntegrationResponse {
  /**
   * <p>
   * 			Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager.
   * 		</p>
   */
  ServiceIntegration?: ServiceIntegrationConfig;
}

export namespace DescribeServiceIntegrationResponse {
  export const filterSensitiveLog = (obj: DescribeServiceIntegrationResponse): any => ({
    ...obj,
  });
}

export interface GetResourceCollectionRequest {
  /**
   * <p>
   *    		The type of AWS resource collections to return. The one valid value is <code>CLOUD_FORMATION</code> for
   *    		AWS CloudFormation stacks.
   *    	</p>
   */
  ResourceCollectionType: ResourceCollectionType | string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace GetResourceCollectionRequest {
  export const filterSensitiveLog = (obj: GetResourceCollectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about AWS CloudFormation stacks. You can use stacks to specify which AWS resources in your account to analyze.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
 * 			in the <i>AWS CloudFormation User Guide</i>.
 * 		</p>
 */
export interface CloudFormationCollectionFilter {
  /**
   * <p>
   * 			An array of CloudFormation stack names.
   * 		</p>
   */
  StackNames?: string[];
}

export namespace CloudFormationCollectionFilter {
  export const filterSensitiveLog = (obj: CloudFormationCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
 * 		</p>
 */
export interface ResourceCollectionFilter {
  /**
   * <p>
   * 			Information about AWS CloudFormation stacks. You can use stacks to specify which AWS resources in your account to analyze.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
   * 			in the <i>AWS CloudFormation User Guide</i>.
   * 		</p>
   */
  CloudFormation?: CloudFormationCollectionFilter;
}

export namespace ResourceCollectionFilter {
  export const filterSensitiveLog = (obj: ResourceCollectionFilter): any => ({
    ...obj,
  });
}

export interface GetResourceCollectionResponse {
  /**
   * <p>
   *    		The requested list of AWS resource collections. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   *    	</p>
   */
  ResourceCollection?: ResourceCollectionFilter;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace GetResourceCollectionResponse {
  export const filterSensitiveLog = (obj: GetResourceCollectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			A time range used to specify when the behavior of an insight or anomaly started.
 * 		</p>
 */
export interface StartTimeRange {
  /**
   * <p>
   * 			The start time of the time range.
   * 		</p>
   */
  FromTime?: Date;

  /**
   * <p>
   * 			The end time of the time range.
   * 		</p>
   */
  ToTime?: Date;
}

export namespace StartTimeRange {
  export const filterSensitiveLog = (obj: StartTimeRange): any => ({
    ...obj,
  });
}

export interface ListAnomaliesForInsightRequest {
  /**
   * <p>
   * 			The ID of the insight. The returned anomalies belong to this insight.
   * 		</p>
   */
  InsightId: string | undefined;

  /**
   * <p>
   *    		A time range used to specify when the requested anomalies started. All returned anomalies started
   *    		during this time range.
   *    	</p>
   */
  StartTimeRange?: StartTimeRange;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListAnomaliesForInsightRequest {
  export const filterSensitiveLog = (obj: ListAnomaliesForInsightRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a proactive anomaly. This object is returned by
 * 			<code>DescribeAnomaly.</code>
 *          </p>
 */
export interface ProactiveAnomalySummary {
  /**
   * <p>The ID of the anomaly.</p>
   */
  Id?: string;

  /**
   * <p>The severity of the anomaly.</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p>The status of the anomaly.</p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p>
   * 			The time of the anomaly's most recent update.
   * 		</p>
   */
  UpdateTime?: Date;

  /**
   * <p>
   * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
   * 		</p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   * 		</p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p>
   * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   * 		</p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p>
   * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   * 		</p>
   */
  AssociatedInsightId?: string;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>
   * 			A threshold that was exceeded by behavior in analyzed resources. Exceeding this
   * 			threshold is related to the anomalous behavior that generated this anomaly.
   * 		</p>
   */
  Limit?: number;
}

export namespace ProactiveAnomalySummary {
  export const filterSensitiveLog = (obj: ProactiveAnomalySummary): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a reactive anomaly. This object is returned by
 * 			<code>DescribeAnomaly.</code>
 *          </p>
 */
export interface ReactiveAnomalySummary {
  /**
   * <p>
   * 			The ID of the reactive anomaly.
   * 		</p>
   */
  Id?: string;

  /**
   * <p>
   * 			The severity of the reactive anomaly.
   * 		</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p>
   * 			The status of the reactive anomaly.
   * 		</p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p>
   * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
   * 		</p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
   * 		</p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p>
   * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   * 		</p>
   */
  AssociatedInsightId?: string;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace ReactiveAnomalySummary {
  export const filterSensitiveLog = (obj: ReactiveAnomalySummary): any => ({
    ...obj,
  });
}

export interface ListAnomaliesForInsightResponse {
  /**
   * <p>
   * 			An array of <code>ProactiveAnomalySummary</code> objects that represent the requested anomalies
   * 		</p>
   */
  ProactiveAnomalies?: ProactiveAnomalySummary[];

  /**
   * <p>
   * 			An array of <code>ReactiveAnomalySummary</code> objects that represent the requested anomalies
   * 		</p>
   */
  ReactiveAnomalies?: ReactiveAnomalySummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListAnomaliesForInsightResponse {
  export const filterSensitiveLog = (obj: ListAnomaliesForInsightResponse): any => ({
    ...obj,
  });
}

export enum EventDataSource {
  AWS_CLOUD_TRAIL = "AWS_CLOUD_TRAIL",
  AWS_CODE_DEPLOY = "AWS_CODE_DEPLOY",
}

export enum EventClass {
  CONFIG_CHANGE = "CONFIG_CHANGE",
  DEPLOYMENT = "DEPLOYMENT",
  INFRASTRUCTURE = "INFRASTRUCTURE",
  SCHEMA_CHANGE = "SCHEMA_CHANGE",
  SECURITY_CHANGE = "SECURITY_CHANGE",
}

/**
 * <p>
 * 			The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and
 * 			provide recommendations to improve your operational solutions.
 * 		</p>
 */
export interface EventTimeRange {
  /**
   * <p>
   * 			The time when the event started.
   * 		</p>
   */
  FromTime: Date | undefined;

  /**
   * <p>
   * 			The time when the event ended.
   * 		</p>
   */
  ToTime: Date | undefined;
}

export namespace EventTimeRange {
  export const filterSensitiveLog = (obj: EventTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
 * 		</p>
 */
export interface ListEventsFilters {
  /**
   * <p>
   * 			An ID of an insight that is related to the events you want to filter for.
   * 		</p>
   */
  InsightId?: string;

  /**
   * <p> A time range during which you want the filtered events to have occurred. </p>
   */
  EventTimeRange?: EventTimeRange;

  /**
   * <p>
   * 			The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema change.
   * 		</p>
   */
  EventClass?: EventClass | string;

  /**
   * <p>
   * 			The AWS source that emitted the events you want to filter for.
   * 		</p>
   */
  EventSource?: string;

  /**
   * <p>
   * 			The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, of the events you want returned.
   * 		</p>
   */
  DataSource?: EventDataSource | string;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace ListEventsFilters {
  export const filterSensitiveLog = (obj: ListEventsFilters): any => ({
    ...obj,
  });
}

export interface ListEventsRequest {
  /**
   * <p>
   *    		A <code>ListEventsFilters</code> object used to specify which events to return.
   *    	</p>
   */
  Filters: ListEventsFilters | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListEventsRequest {
  export const filterSensitiveLog = (obj: ListEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			The AWS resource that emitted an event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and
 * 			provide recommendations to improve your operational solutions.
 * 		</p>
 */
export interface EventResource {
  /**
   * <p>
   * 			The type of resource that emitted an event.
   * 		</p>
   */
  Type?: string;

  /**
   * <p>
   * 			The name of the resource that emitted an event.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The Amazon Resource Name (ARN) of the resource that emitted an event.
   * 		</p>
   */
  Arn?: string;
}

export namespace EventResource {
  export const filterSensitiveLog = (obj: EventResource): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and
 * 			provide recommendations to improve your operational solutions.
 * 		</p>
 */
export interface Event {
  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>
   * 			The ID of the event.
   * 		</p>
   */
  Id?: string;

  /**
   * <p> A <code>Timestamp</code> that specifies the time the event occurred. </p>
   */
  Time?: Date;

  /**
   * <p>
   * 			The AWS source that emitted the event.
   * 		</p>
   */
  EventSource?: string;

  /**
   * <p>
   * 			The name of the event.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, where DevOps Guru analysis found the event.
   * 		</p>
   */
  DataSource?: EventDataSource | string;

  /**
   * <p>
   * 			The class of the event. The class specifies what the event is related to, such as an infrastructure change, a deployment, or a schema change.
   * 		</p>
   */
  EventClass?: EventClass | string;

  /**
   * <p>
   * 			An <code>EventResource</code> object that contains information about the resource that emitted the event.
   * 		</p>
   */
  Resources?: EventResource[];
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export interface ListEventsResponse {
  /**
   * <p>
   *    		A list of the requested events.
   *    	</p>
   */
  Events: Event[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListEventsResponse {
  export const filterSensitiveLog = (obj: ListEventsResponse): any => ({
    ...obj,
  });
}

export enum InsightType {
  PROACTIVE = "PROACTIVE",
  REACTIVE = "REACTIVE",
}

/**
 * <p>
 *    		Used to filter for insights that have any status.
 *    	</p>
 */
export interface ListInsightsAnyStatusFilter {
  /**
   * <p>
   *    		Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   *    	</p>
   */
  Type: InsightType | string | undefined;

  /**
   * <p>
   *    		A time range used to specify when the behavior of the filtered insights started.
   *    	</p>
   */
  StartTimeRange: StartTimeRange | undefined;
}

export namespace ListInsightsAnyStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsAnyStatusFilter): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       	A range of time that specifies when anomalous behavior in an anomaly or insight ended.
 *       </p>
 */
export interface EndTimeRange {
  /**
   * <p>
   *       	The earliest end time in the time range.
   *       </p>
   */
  FromTime?: Date;

  /**
   * <p>
   *       	The latest end time in the time range.
   *       </p>
   */
  ToTime?: Date;
}

export namespace EndTimeRange {
  export const filterSensitiveLog = (obj: EndTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    		Used to filter for insights that have the status <code>CLOSED</code>.
 *    	</p>
 */
export interface ListInsightsClosedStatusFilter {
  /**
   * <p>
   *       	Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   *       </p>
   */
  Type: InsightType | string | undefined;

  /**
   * <p>
   *    		A time range used to specify when the behavior of the filtered insights ended.
   *    	</p>
   */
  EndTimeRange: EndTimeRange | undefined;
}

export namespace ListInsightsClosedStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsClosedStatusFilter): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       	Used to filter for insights that have the status <code>ONGOING</code>.
 *       </p>
 */
export interface ListInsightsOngoingStatusFilter {
  /**
   * <p>
   *    		Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   *    	</p>
   */
  Type: InsightType | string | undefined;
}

export namespace ListInsightsOngoingStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsOngoingStatusFilter): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       	A filter used by <code>ListInsights</code> to specify which insights to return.
 *       </p>
 */
export interface ListInsightsStatusFilter {
  /**
   * <p>
   *       	A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights
   *       	that are either <code>REACTIVE</code> or <code>PROACTIVE</code>.
   *       </p>
   */
  Ongoing?: ListInsightsOngoingStatusFilter;

  /**
   * <p>
   *    		A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are
   *    		either <code>REACTIVE</code> or <code>PROACTIVE</code>.
   *    	</p>
   */
  Closed?: ListInsightsClosedStatusFilter;

  /**
   * <p>
   *    		A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status
   *    		that are either <code>REACTIVE</code> or <code>PROACTIVE</code>.
   *    	</p>
   */
  Any?: ListInsightsAnyStatusFilter;
}

export namespace ListInsightsStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsStatusFilter): any => ({
    ...obj,
  });
}

export interface ListInsightsRequest {
  /**
   * <p>
   *       	A filter used to filter the returned insights by their status. You can specify one status filter.
   *       </p>
   */
  StatusFilter: ListInsightsStatusFilter | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListInsightsRequest {
  export const filterSensitiveLog = (obj: ListInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a proactive insight. This object is returned by
 * 			<code>DescribeInsight.</code>
 *          </p>
 */
export interface ProactiveInsightSummary {
  /**
   * <p>The ID of the proactive insight. </p>
   */
  Id?: string;

  /**
   * <p>The name of the proactive insight. </p>
   */
  Name?: string;

  /**
   * <p>The severity of the proactive insight. </p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p>The status of the proactive insight. </p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p>
   * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
   * 		</p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace ProactiveInsightSummary {
  export const filterSensitiveLog = (obj: ProactiveInsightSummary): any => ({
    ...obj,
  });
}

/**
 * <p> Information about a reactive insight. This object is returned by
 * 				<code>DescribeInsight.</code>
 *          </p>
 */
export interface ReactiveInsightSummary {
  /**
   * <p>
   * 			The ID of a reactive summary.
   * 		</p>
   */
  Id?: string;

  /**
   * <p>
   * 			The name of a reactive insight.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The severity of a reactive insight.
   * 		</p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p>
   * 			The status of a reactive insight.
   * 		</p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace ReactiveInsightSummary {
  export const filterSensitiveLog = (obj: ReactiveInsightSummary): any => ({
    ...obj,
  });
}

export interface ListInsightsResponse {
  /**
   * <p>
   * 			The returned list of proactive insights.
   * 		</p>
   */
  ProactiveInsights?: ProactiveInsightSummary[];

  /**
   * <p>
   * 			The returned list of reactive insights.
   * 		</p>
   */
  ReactiveInsights?: ReactiveInsightSummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListInsightsResponse {
  export const filterSensitiveLog = (obj: ListInsightsResponse): any => ({
    ...obj,
  });
}

export interface ListNotificationChannelsRequest {
  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListNotificationChannelsRequest {
  export const filterSensitiveLog = (obj: ListNotificationChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight.
 * 			The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 * 		</p>
 *
 * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
 */
export interface NotificationChannel {
  /**
   * <p>
   * 			The ID of a notification channel.
   * 		</p>
   */
  Id?: string;

  /**
   * <p>
   * 			A <code>NotificationChannelConfig</code> object that contains information about configured notification channels.
   * 		</p>
   */
  Config?: NotificationChannelConfig;
}

export namespace NotificationChannel {
  export const filterSensitiveLog = (obj: NotificationChannel): any => ({
    ...obj,
  });
}

export interface ListNotificationChannelsResponse {
  /**
   * <p>
   *    		An array that contains the requested notification channels.
   *    	</p>
   */
  Channels?: NotificationChannel[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListNotificationChannelsResponse {
  export const filterSensitiveLog = (obj: ListNotificationChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListRecommendationsRequest {
  /**
   * <p>
   * 			The ID of the requested insight.
   * 		</p>
   */
  InsightId: string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListRecommendationsRequest {
  export const filterSensitiveLog = (obj: ListRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about a resource in which DevOps Guru detected anomalous behavior.
 * 		</p>
 */
export interface RecommendationRelatedAnomalyResource {
  /**
   * <p>
   * 			The name of the resource.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The type of the resource.
   * 		</p>
   */
  Type?: string;
}

export namespace RecommendationRelatedAnomalyResource {
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomalyResource): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics
 * 			that are used to generate insights.
 * 		</p>
 */
export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
  /**
   * <p>The name of the CloudWatch metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.</p>
   */
  Namespace?: string;
}

export namespace RecommendationRelatedCloudWatchMetricsSourceDetail {
  export const filterSensitiveLog = (obj: RecommendationRelatedCloudWatchMetricsSourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name
 * 			and namespace of an Amazon CloudWatch metric.
 * 		</p>
 */
export interface RecommendationRelatedAnomalySourceDetail {
  /**
   * <p> An array of <code>CloudWatchMetricsDetail</code> objects that contains information
   * 			about the analyzed metrics that displayed anomalous behavior. </p>
   */
  CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}

export namespace RecommendationRelatedAnomalySourceDetail {
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomalySourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about an anomaly that is related to a recommendation.
 * 		</p>
 */
export interface RecommendationRelatedAnomaly {
  /**
   * <p>
   * 			An array of objects that represent resources in which DevOps Guru detected anomalous behavior. Each object contains the name
   * 			and type of the resource.
   * 		</p>
   */
  Resources?: RecommendationRelatedAnomalyResource[];

  /**
   * <p>
   * 			Information about where the anomalous behavior related the recommendation was found. For example, details in Amazon CloudWatch metrics.
   * 		</p>
   */
  SourceDetails?: RecommendationRelatedAnomalySourceDetail[];
}

export namespace RecommendationRelatedAnomaly {
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomaly): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about an AWS resource that emitted and event that is related to a recommendation in an insight.
 * 		</p>
 */
export interface RecommendationRelatedEventResource {
  /**
   * <p>
   * 			The name of the resource that emitted the event. This corresponds to the <code>Name</code> field in an
   * 			<code>EventResource</code> object.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The type of the resource that emitted the event. This corresponds to the <code>Type</code> field in an
   * 			<code>EventResource</code> object.
   * 		</p>
   */
  Type?: string;
}

export namespace RecommendationRelatedEventResource {
  export const filterSensitiveLog = (obj: RecommendationRelatedEventResource): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about an event that is related to a recommendation.
 * 		</p>
 */
export interface RecommendationRelatedEvent {
  /**
   * <p>
   * 			The name of the event. This corresponds to the <code>Name</code> field in an
   * 			<code>Event</code> object.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			A <code>ResourceCollection</code> object that contains arrays of the names of AWS
   * 			CloudFormation stacks.
   * 		</p>
   */
  Resources?: RecommendationRelatedEventResource[];
}

export namespace RecommendationRelatedEvent {
  export const filterSensitiveLog = (obj: RecommendationRelatedEvent): any => ({
    ...obj,
  });
}

/**
 * <p> Recommendation information to help you remediate detected anomalous behavior that
 * 			generated an insight. </p>
 */
export interface Recommendation {
  /**
   * <p>
   * 			A description of the problem.
   * 		</p>
   */
  Description?: string;

  /**
   * <p>
   * 			A hyperlink to information to help you address the problem.
   * 		</p>
   */
  Link?: string;

  /**
   * <p>
   * 			The name of the recommendation.
   * 		</p>
   */
  Name?: string;

  /**
   * <p>
   * 			The reason DevOps Guru flagged the anomalous behavior as a problem.
   * 		</p>
   */
  Reason?: string;

  /**
   * <p>
   * 			Events that are related to the problem. Use these events to learn more about what's happening and to help address the issue.
   * 		</p>
   */
  RelatedEvents?: RecommendationRelatedEvent[];

  /**
   * <p>
   * 			Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help address the issue.
   * 		</p>
   */
  RelatedAnomalies?: RecommendationRelatedAnomaly[];
}

export namespace Recommendation {
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

export interface ListRecommendationsResponse {
  /**
   * <p>
   *    		An array of the requested recommendations.
   *    	</p>
   */
  Recommendations?: Recommendation[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListRecommendationsResponse {
  export const filterSensitiveLog = (obj: ListRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface PutFeedbackRequest {
  /**
   * <p>
   *    		The feedback from customers is about the recommendations in this insight.
   *    	</p>
   */
  InsightFeedback?: InsightFeedback;
}

export namespace PutFeedbackRequest {
  export const filterSensitiveLog = (obj: PutFeedbackRequest): any => ({
    ...obj,
  });
}

export interface PutFeedbackResponse {}

export namespace PutFeedbackResponse {
  export const filterSensitiveLog = (obj: PutFeedbackResponse): any => ({
    ...obj,
  });
}

export interface RemoveNotificationChannelRequest {
  /**
   * <p>
   *    		The ID of the notification channel to be removed.
   *    	</p>
   */
  Id: string | undefined;
}

export namespace RemoveNotificationChannelRequest {
  export const filterSensitiveLog = (obj: RemoveNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface RemoveNotificationChannelResponse {}

export namespace RemoveNotificationChannelResponse {
  export const filterSensitiveLog = (obj: RemoveNotificationChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *    		Specifies one or more severity values and one or more status values that are used to search
 *    		for insights.
 *    	</p>
 */
export interface SearchInsightsFilters {
  /**
   * <p>
   *    		An array of severity values used to search for insights.
   *    	</p>
   */
  Severities?: (InsightSeverity | string)[];

  /**
   * <p>
   *    		An array of status values used to search for insights.
   *    	</p>
   */
  Statuses?: (InsightStatus | string)[];

  /**
   * <p>
   * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   * 		</p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace SearchInsightsFilters {
  export const filterSensitiveLog = (obj: SearchInsightsFilters): any => ({
    ...obj,
  });
}

export interface SearchInsightsRequest {
  /**
   * <p>
   *    		The start of the time range passed in. Returned insights occurred after this time.
   *    	</p>
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * <p>
   *    		A <code>SearchInsightsFilters</code> object that is used to set the severity and status filters on your insight search.
   *    	</p>
   */
  Filters?: SearchInsightsFilters;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>
   *    		The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
   *    	</p>
   */
  Type: InsightType | string | undefined;
}

export namespace SearchInsightsRequest {
  export const filterSensitiveLog = (obj: SearchInsightsRequest): any => ({
    ...obj,
  });
}

export interface SearchInsightsResponse {
  /**
   * <p>
   * 			The returned proactive insights.
   * 		</p>
   */
  ProactiveInsights?: ProactiveInsightSummary[];

  /**
   * <p>
   * 			The returned reactive insights.
   * 		</p>
   */
  ReactiveInsights?: ReactiveInsightSummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace SearchInsightsResponse {
  export const filterSensitiveLog = (obj: SearchInsightsResponse): any => ({
    ...obj,
  });
}

export enum UpdateResourceCollectionAction {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

/**
 * <p> Contains the names of AWS CloudFormation stacks used to update a collection of stacks. </p>
 */
export interface UpdateCloudFormationCollectionFilter {
  /**
   * <p>
   * 			An array of the name of stacks to update.
   * 		</p>
   */
  StackNames?: string[];
}

export namespace UpdateCloudFormationCollectionFilter {
  export const filterSensitiveLog = (obj: UpdateCloudFormationCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Contains information used to update a collection of AWS resources.
 * 		</p>
 */
export interface UpdateResourceCollectionFilter {
  /**
   * <p>
   * 			An collection of AWS CloudFormation stacks.
   * 		</p>
   */
  CloudFormation?: UpdateCloudFormationCollectionFilter;
}

export namespace UpdateResourceCollectionFilter {
  export const filterSensitiveLog = (obj: UpdateResourceCollectionFilter): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionRequest {
  /**
   * <p>
   * 			Specifies if the resource collection in the request is added or deleted to the resource collection.
   * 		</p>
   */
  Action: UpdateResourceCollectionAction | string | undefined;

  /**
   * <p>
   * 			Contains information used to update a collection of AWS resources.
   * 		</p>
   */
  ResourceCollection: UpdateResourceCollectionFilter | undefined;
}

export namespace UpdateResourceCollectionRequest {
  export const filterSensitiveLog = (obj: UpdateResourceCollectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionResponse {}

export namespace UpdateResourceCollectionResponse {
  export const filterSensitiveLog = (obj: UpdateResourceCollectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
 * 		</p>
 */
export interface OpsCenterIntegrationConfig {
  /**
   * <p>
   * 			Specifies if DevOps Guru is enabled to create an AWS Systems Manager OpsItem for each created insight.
   * 		</p>
   */
  OptInStatus?: OptInStatus | string;
}

export namespace OpsCenterIntegrationConfig {
  export const filterSensitiveLog = (obj: OpsCenterIntegrationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>
 * 			Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru.
 * 		</p>
 */
export interface UpdateServiceIntegrationConfig {
  /**
   * <p>
   * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
   * 		</p>
   */
  OpsCenter?: OpsCenterIntegrationConfig;
}

export namespace UpdateServiceIntegrationConfig {
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationConfig): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationRequest {
  /**
   * <p>
   * 			An <code>IntegratedServiceConfig</code> object used to specify the integrated service you want to update, and whether you
   * 			want to update it to enabled or disabled.
   * 		</p>
   */
  ServiceIntegration: UpdateServiceIntegrationConfig | undefined;
}

export namespace UpdateServiceIntegrationRequest {
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationResponse {}

export namespace UpdateServiceIntegrationResponse {
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationResponse): any => ({
    ...obj,
  });
}
