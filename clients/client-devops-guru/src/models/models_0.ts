// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { DevOpsGuruServiceException as __BaseException } from "./DevOpsGuruServiceException";

/**
 * <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
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
 * <p> Information about the number of open reactive and proactive insights that can be used
 * 			to gauge the health of your system. </p>
 */
export interface AccountInsightHealth {
  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   */
  OpenProactiveInsights?: number;

  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   */
  OpenReactiveInsights?: number;
}

export namespace AccountInsightHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountInsightHealth): any => ({
    ...obj,
  });
}

/**
 * <p> Returns the number of open reactive insights, the number of open proactive insights,
 * 			and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
 * 			health of operations in your Amazon Web Services account. </p>
 */
export interface AccountHealth {
  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountId?: string;

  /**
   * <p> Information about the health of the Amazon Web Services resources in your account, including the
   * 			number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
   * 		</p>
   */
  Insight?: AccountInsightHealth;
}

export namespace AccountHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountHealth): any => ({
    ...obj,
  });
}

/**
 * <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
 *          <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
 */
export interface SnsChannelConfig {
  /**
   * <p> The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
   */
  TopicArn?: string;
}

export namespace SnsChannelConfig {
  /**
   * @internal
   */
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
   * <p> Information about a notification channel configured in DevOps Guru to send notifications
   * 			when insights are created. </p>
   *          <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
   * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
   * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
   * 				for cross account Amazon SNS topics</a>.</p>
   * 				     <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p>
   * 				     <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
   * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
   * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
   */
  Sns: SnsChannelConfig | undefined;
}

export namespace NotificationChannelConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationChannelConfig): any => ({
    ...obj,
  });
}

export interface AddNotificationChannelRequest {
  /**
   * <p> A <code>NotificationChannelConfig</code> object that specifies what type of
   * 			notification channel to add. The one
   *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
   */
  Config: NotificationChannelConfig | undefined;
}

export namespace AddNotificationChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface AddNotificationChannelResponse {
  /**
   * <p> The ID of the added notification channel. </p>
   */
  Id: string | undefined;
}

export namespace AddNotificationChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddNotificationChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p> An exception that is thrown when a conflict occurs. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p> The ID of the Amazon Web Services resource in which a conflict occurred. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p> The type of the Amazon Web Services resource in which a conflict occurred. </p>
   */
  ResourceType: string | undefined;
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
 * <p>An internal failure in an Amazon service occurred.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p> The number of seconds after which the action that caused the internal server
   * 			exception can be retried. </p>
   */
  RetryAfterSeconds?: number;
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
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>A requested resource could not be found</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p> The ID of the Amazon Web Services resource that could not be found. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p> The type of the Amazon Web Services resource that could not be found. </p>
   */
  ResourceType: string | undefined;
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
 * <p>The request contains a value that exceeds a maximum quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The request was denied due to a request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p> The code of the quota that was exceeded, causing the throttling exception. </p>
   */
  QuotaCode?: string;

  /**
   * <p> The code of the service that caused the throttling exception. </p>
   */
  ServiceCode?: string;

  /**
   * <p> The number of seconds after which the action that caused the throttling exception can
   * 			be retried. </p>
   */
  RetryAfterSeconds?: number;
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p> The field associated with the validation exception. </p>
 */
export interface ValidationExceptionField {
  /**
   * <p> The name of the field. </p>
   */
  Name: string | undefined;

  /**
   * <p> The message associated with the validation exception with information to help
   * 			determine its cause. </p>
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
  INVALID_PARAMETER_COMBINATION = "INVALID_PARAMETER_COMBINATION",
  OTHER = "OTHER",
  PARAMETER_INCONSISTENT_WITH_SERVICE_STATE = "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p> A message that describes the validation exception. </p>
   */
  Message: string | undefined;

  /**
   * <p> The reason the validation exception was thrown. </p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p> An array of fields that are associated with the validation exception. </p>
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

export enum EventSourceOptInStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Information about your account's integration with Amazon CodeGuru Profiler. This
 * 			returns whether DevOps Guru is configured to consume recommendations generated from Amazon
 * 			CodeGuru Profiler.</p>
 */
export interface AmazonCodeGuruProfilerIntegration {
  /**
   * <p>The status of the CodeGuru Profiler integration. Specifies if DevOps Guru is enabled to
   * 			consume recommendations that are generated from Amazon CodeGuru Profiler.</p>
   */
  Status?: EventSourceOptInStatus | string;
}

export namespace AmazonCodeGuruProfilerIntegration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmazonCodeGuruProfilerIntegration): any => ({
    ...obj,
  });
}

/**
 * <p> A time range that specifies when DevOps Guru opens and then closes an anomaly. This
 * 			is different from <code>AnomalyTimeRange</code>, which specifies the time range when
 * 			DevOps Guru actually observes the anomalous behavior. </p>
 */
export interface AnomalyReportedTimeRange {
  /**
   * <p> The time when an anomaly is opened. </p>
   */
  OpenTime: Date | undefined;

  /**
   * <p> The time when an anomaly is closed. </p>
   */
  CloseTime?: Date;
}

export namespace AnomalyReportedTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyReportedTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the
 * 			generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and
 * 			insight with details about the anomalous behavior and suggestions about how to correct
 * 			the problem.</p>
 */
export interface AnomalyResource {
  /**
   * <p>The name of the Amazon Web Services resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of the Amazon Web Services resource.</p>
   */
  Type?: string;
}

export namespace AnomalyResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyResource): any => ({
    ...obj,
  });
}

export enum AnomalySeverity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p> The dimension of am Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in
 * 			your account for operational problems and anomalous behavior. A dimension is a
 * 			name/value pair that is part of the identity of a metric. A metric can have up to 10
 * 			dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 */
export interface CloudWatchMetricsDimension {
  /**
   * <p> The name of the CloudWatch dimension. </p>
   */
  Name?: string;

  /**
   * <p> The value of the CloudWatch dimension. </p>
   */
  Value?: string;
}

export namespace CloudWatchMetricsDimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchMetricsDimension): any => ({
    ...obj,
  });
}

export enum CloudWatchMetricDataStatusCode {
  COMPLETE = "Complete",
  INTERNAL_ERROR = "InternalError",
  PARTIAL_DATA = "PartialData",
}

/**
 * <p>A pair that contains metric values at the respective timestamp.</p>
 */
export interface TimestampMetricValuePair {
  /**
   * <p>A <code>Timestamp</code> that specifies the time the event occurred. </p>
   */
  Timestamp?: Date;

  /**
   * <p>Value of the anomalous metric data point at respective Timestamp.</p>
   */
  MetricValue?: number;
}

export namespace TimestampMetricValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampMetricValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the analyzed metrics that displayed anomalous behavior.
 * 		</p>
 */
export interface CloudWatchMetricsDataSummary {
  /**
   * <p>This is a list of Amazon CloudWatch metric values at given timestamp.</p>
   */
  TimestampMetricValuePairList?: TimestampMetricValuePair[];

  /**
   * <p>This is an enum of the status showing whether the metric value pair list has partial
   * 			or complete data, or if there was an error.</p>
   */
  StatusCode?: CloudWatchMetricDataStatusCode | string;
}

export namespace CloudWatchMetricsDataSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchMetricsDataSummary): any => ({
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
 * <p> Information about an Amazon CloudWatch metric. </p>
 */
export interface CloudWatchMetricsDetail {
  /**
   * <p> The name of the CloudWatch metric. </p>
   */
  MetricName?: string;

  /**
   * <p> The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
   * 		</p>
   */
  Namespace?: string;

  /**
   * <p> An array of CloudWatch dimensions associated with </p>
   */
  Dimensions?: CloudWatchMetricsDimension[];

  /**
   * <p> The type of statistic associated with the CloudWatch metric. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
   */
  Stat?: CloudWatchMetricsStat | string;

  /**
   * <p> The unit of measure used for the CloudWatch metric. For example, <code>Bytes</code>,
   * 				<code>Seconds</code>, <code>Count</code>, and <code>Percent</code>. </p>
   */
  Unit?: string;

  /**
   * <p> The length of time associated with the CloudWatch metric in number of seconds. </p>
   */
  Period?: number;

  /**
   * <p>This object returns anomaly metric data.</p>
   */
  MetricDataSummary?: CloudWatchMetricsDataSummary;
}

export namespace CloudWatchMetricsDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchMetricsDetail): any => ({
    ...obj,
  });
}

/**
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the
 * 				<code>db.sql</code> dimension group consists of the following dimensions:
 * 				<code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>,
 * 			and <code>db.sql.tokenized_id</code>.</p>
 * 		       <note>
 * 			         <p>Each response element returns a maximum of 500 bytes. For larger elements, such as
 * 				SQL statements, only the first 500 bytes are returned.</p>
 * 		       </note>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different
 *    		dimensions of database load based on data captured from a running DB instance.
 *    		DB load is measured as average active sessions. Performance Insights provides the
 *    		data to API consumers as a two-dimensional time-series dataset. The time dimension
 *    		provides DB load data for each time point in the queried time range. Each time point
 *    		decomposes overall load in relation to the requested dimensions, measured at that
 *    		time point. Examples include SQL, Wait event, User, and Host. </p>
 *
 *    	     <ul>
 *             <li>
 *    			         <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>.
 *    			</p>
 *    		       </li>
 *             <li>
 *    			         <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>.
 *    			</p>
 *    		       </li>
 *          </ul>
 */
export interface PerformanceInsightsMetricDimensionGroup {
  /**
   * <p>The name of the dimension group. Its valid values are:</p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>db</code> - The name of the database to which the client is connected
   * 					(only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.application</code> - The name of the application that is connected to
   * 					the database (only Aurora PostgreSQL and RDS PostgreSQL)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.host</code> - The host name of the connected client (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.session_type</code> - The type of the current session (only Aurora PostgreSQL
   * 					and RDS PostgreSQL)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql</code> - The SQL that is currently executing (all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql_tokenized</code> - The SQL digest (all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.wait_event</code> - The event for which the database backend is waiting
   * 					(all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.wait_event_type</code> - The type of event for which the database
   * 					backend is waiting (all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.user</code> - The user logged in to the database (all engines)</p>
   * 			         </li>
   *          </ul>
   */
  Group?: string;

  /**
   * <p>A list of specific dimensions from a dimension group. If this parameter is not
   * 			present, then it signifies that all of the dimensions in the group were requested or are
   * 			present in the response.</p>
   * 		       <p>Valid values for elements in the <code>Dimensions</code> array are:</p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>db.application.name</code> - The name of the application that is connected
   * 					to the database (only Aurora PostgreSQL and RDS PostgreSQL)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.host.id</code> - The host ID of the connected client (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.host.name</code> - The host name of the connected client (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.name</code> - The name of the database to which the client is connected
   * 					(only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.session_type.name</code> - The type of the current session (only Aurora
   * 					PostgreSQL and RDS PostgreSQL)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql.id</code> - The SQL ID generated by Performance Insights (all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql.db_id</code> - The SQL ID generated by the database (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql.statement</code> - The SQL text that is being executed (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql.tokenized_id</code>
   * 				           </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql_tokenized.id</code> - The SQL digest ID generated by Performance Insights (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql_tokenized.db_id</code> - SQL digest ID generated by the database
   * 					(all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sql_tokenized.statement</code> - The SQL digest text (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.user.id</code> - The ID of the user logged in to the database (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.user.name</code> - The name of the user logged in to the database (all
   * 					engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.wait_event.name</code> - The event for which the backend is waiting
   * 					(all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.wait_event.type</code> - The type of event for which the backend is
   * 					waiting (all engines)</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.wait_event_type.name</code> - The name of the event type for which the
   * 					backend is waiting (all engines)</p>
   * 			         </li>
   *          </ul>
   */
  Dimensions?: string[];

  /**
   * <p>The maximum number of items to fetch for this dimension group.</p>
   */
  Limit?: number;
}

export namespace PerformanceInsightsMetricDimensionGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsMetricDimensionGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A single query to be processed. Use these parameters to query the Performance Insights
 * 				<code>GetResourceMetrics</code> API to retrieve the metrics for an anomaly. For more
 * 			information, see <code>
 *                <a href="https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html">GetResourceMetrics</a>
 *             </code> in the <i>Amazon RDS Performance Insights API
 * 				Reference</i>.</p>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different
 *    		dimensions of database load based on data captured from a running DB instance.
 *    		DB load is measured as average active sessions. Performance Insights provides the
 *    		data to API consumers as a two-dimensional time-series dataset. The time dimension
 *    		provides DB load data for each time point in the queried time range. Each time point
 *    		decomposes overall load in relation to the requested dimensions, measured at that
 *    		time point. Examples include SQL, Wait event, User, and Host. </p>
 *
 *    	     <ul>
 *             <li>
 *    			         <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>.
 *    			</p>
 *    		       </li>
 *             <li>
 *    			         <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>.
 *    			</p>
 *    		       </li>
 *          </ul>
 */
export interface PerformanceInsightsMetricQuery {
  /**
   * <p>The name of the meteric used used when querying an Performance Insights
   * 				<code>GetResourceMetrics</code> API for anomaly metrics.</p>
   *
   * 		       <p>Valid values for <code>Metric</code> are:</p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>db.load.avg</code> - a scaled representation of the number of active sessions for the
   * 					database engine.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 					             <code>db.sampledload.avg</code> - the raw number of active sessions for the database
   * 					engine.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If the number of active sessions is less than an internal Performance Insights threshold,
   * 				<code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same value. If
   * 			the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with
   * 				<code>db.load.avg</code> showing the scaled values, <code>db.sampledload.avg</code>
   * 			showing the raw values, and <code>db.sampledload.avg</code> less than
   * 				<code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code>
   * 			only. </p>
   */
  Metric?: string;

  /**
   * <p>The specification for how to aggregate the data points from a Performance Insights
   * 				<code>GetResourceMetrics</code> API query. The Performance Insights query returns all of the
   * 			dimensions within that group, unless you provide the names of specific dimensions within
   * 			that group. You can also request that Performance Insights return a limited number of values for a
   * 			dimension.</p>
   */
  GroupBy?: PerformanceInsightsMetricDimensionGroup;

  /**
   * <p>One or more filters to apply to a Performance Insights <code>GetResourceMetrics</code> API query.
   * 			Restrictions:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Any number of filters by the same dimension, as specified in the
   * 						<code>GroupBy</code> parameter.</p>
   * 			         </li>
   *             <li>
   * 				           <p>A single filter for any other dimension in this dimension group.</p>
   * 			         </li>
   *          </ul>
   */
  Filter?: Record<string, string>;
}

export namespace PerformanceInsightsMetricQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsMetricQuery): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reference metric used to evaluate Performance Insights.</p>
 */
export interface PerformanceInsightsReferenceMetric {
  /**
   * <p>A query to be processed on the metric.</p>
   */
  MetricQuery?: PerformanceInsightsMetricQuery;
}

export namespace PerformanceInsightsReferenceMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsReferenceMetric): any => ({
    ...obj,
  });
}

/**
 * <p>A reference value to compare Performance Insights metrics against to determine if the metrics
 * 			demonstrate anomalous behavior.</p>
 */
export interface PerformanceInsightsReferenceScalar {
  /**
   * <p>The reference value.</p>
   */
  Value?: number;
}

export namespace PerformanceInsightsReferenceScalar {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsReferenceScalar): any => ({
    ...obj,
  });
}

/**
 * <p>Reference scalar values and other metrics that DevOps Guru displays on a graph in its
 * 			console along with the actual metrics it analyzed. Compare these reference values to
 * 			your actual metrics to help you understand anomalous behavior that DevOps Guru
 * 			detected.</p>
 */
export interface PerformanceInsightsReferenceComparisonValues {
  /**
   * <p>A scalar value DevOps Guru for a metric that DevOps Guru compares to actual metric values. This
   * 			reference value is used to determine if an actual metric value should be considered
   * 			anomalous.</p>
   */
  ReferenceScalar?: PerformanceInsightsReferenceScalar;

  /**
   * <p>A metric that DevOps Guru compares to actual metric values. This reference metric is used to
   * 			determine if an actual metric should be considered anomalous.</p>
   */
  ReferenceMetric?: PerformanceInsightsReferenceMetric;
}

export namespace PerformanceInsightsReferenceComparisonValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsReferenceComparisonValues): any => ({
    ...obj,
  });
}

/**
 * <p>Reference data used to evaluate Performance Insights to determine if its performance is anomalous or
 * 			not.</p>
 */
export interface PerformanceInsightsReferenceData {
  /**
   * <p>The name of the reference data.</p>
   */
  Name?: string;

  /**
   * <p>The specific reference values used to evaluate the Performance Insights. For more information, see
   * 					<code>
   *                <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsReferenceComparisonValues.html">PerformanceInsightsReferenceComparisonValues</a>
   *             </code>. </p>
   */
  ComparisonValues?: PerformanceInsightsReferenceComparisonValues;
}

export namespace PerformanceInsightsReferenceData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsReferenceData): any => ({
    ...obj,
  });
}

/**
 * <p>A statistic in a Performance Insights collection.</p>
 */
export interface PerformanceInsightsStat {
  /**
   * <p>The statistic type.</p>
   */
  Type?: string;

  /**
   * <p>The value of the statistic.</p>
   */
  Value?: number;
}

export namespace PerformanceInsightsStat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsStat): any => ({
    ...obj,
  });
}

/**
 * <p>Details about Performance Insights metrics.</p>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different
 *    		dimensions of database load based on data captured from a running DB instance.
 *    		DB load is measured as average active sessions. Performance Insights provides the
 *    		data to API consumers as a two-dimensional time-series dataset. The time dimension
 *    		provides DB load data for each time point in the queried time range. Each time point
 *    		decomposes overall load in relation to the requested dimensions, measured at that
 *    		time point. Examples include SQL, Wait event, User, and Host. </p>
 *
 *    	     <ul>
 *             <li>
 *    			         <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>.
 *    			</p>
 *    		       </li>
 *             <li>
 *    			         <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>.
 *    			</p>
 *    		       </li>
 *          </ul>
 */
export interface PerformanceInsightsMetricsDetail {
  /**
   * <p>The name used for a specific Performance Insights metric.</p>
   */
  MetricDisplayName?: string;

  /**
   * <p>The unit of measure for a metric. For example, a session or a process.</p>
   */
  Unit?: string;

  /**
   * <p>A single query to be processed for the metric. For more information, see <code>
   *                <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsMetricQuery.html">PerformanceInsightsMetricQuery</a>
   *             </code>.</p>
   */
  MetricQuery?: PerformanceInsightsMetricQuery;

  /**
   * <p> For more information, see <code>
   *                <a href="https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PerformanceInsightsReferenceData.html">PerformanceInsightsReferenceData</a>
   *             </code>. </p>
   */
  ReferenceData?: PerformanceInsightsReferenceData[];

  /**
   * <p>The metric statistics during the anomalous period detected by DevOps Guru;</p>
   */
  StatsAtAnomaly?: PerformanceInsightsStat[];

  /**
   * <p>Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes
   * 			metrics, it compares them to <code>StatsAtBaseline</code> to help determine if they are
   * 			anomalous.</p>
   */
  StatsAtBaseline?: PerformanceInsightsStat[];
}

export namespace PerformanceInsightsMetricsDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PerformanceInsightsMetricsDetail): any => ({
    ...obj,
  });
}

/**
 * <p> Details about the source of the anomalous operational data that triggered the
 * 			anomaly.</p>
 */
export interface AnomalySourceDetails {
  /**
   * <p>An array of <code>CloudWatchMetricsDetail</code> objects that contain information
   * 			about analyzed CloudWatch metrics that show anomalous behavior. </p>
   */
  CloudWatchMetrics?: CloudWatchMetricsDetail[];

  /**
   * <p>An array of <code>PerformanceInsightsMetricsDetail</code> objects that contain
   * 			information about analyzed Performance Insights metrics that show anomalous behavior.</p>
   */
  PerformanceInsightsMetrics?: PerformanceInsightsMetricsDetail[];
}

export namespace AnomalySourceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalySourceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata about the detection source that generates proactive anomalies. The anomaly is
 * 			detected using analysis of the metric data  over a period of time</p>
 */
export interface AnomalySourceMetadata {
  /**
   * <p>The source of the anomaly.</p>
   */
  Source?: string;

  /**
   * <p>The name of the anomaly's resource.</p>
   */
  SourceResourceName?: string;

  /**
   * <p>The anomaly's resource type.</p>
   */
  SourceResourceType?: string;
}

export namespace AnomalySourceMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalySourceMetadata): any => ({
    ...obj,
  });
}

export enum AnomalyStatus {
  CLOSED = "CLOSED",
  ONGOING = "ONGOING",
}

/**
 * <p> A time range that specifies when the observed unusual behavior in an anomaly started
 * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
 * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
 */
export interface AnomalyTimeRange {
  /**
   * <p> The time when the anomalous behavior started. </p>
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the anomalous behavior ended. </p>
   */
  EndTime?: Date;
}

export namespace AnomalyTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalyTimeRange): any => ({
    ...obj,
  });
}

export enum AnomalyType {
  CAUSAL = "CAUSAL",
  CONTEXTUAL = "CONTEXTUAL",
}

export interface DeleteInsightRequest {
  /**
   * <p>The ID of the insight.</p>
   */
  Id: string | undefined;
}

export namespace DeleteInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightRequest): any => ({
    ...obj,
  });
}

export interface DeleteInsightResponse {}

export namespace DeleteInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountHealthRequest {}

export namespace DescribeAccountHealthRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountHealthRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountHealthResponse {
  /**
   * <p> An integer that specifies the number of open reactive insights in your Amazon Web Services account.
   * 		</p>
   */
  OpenReactiveInsights: number | undefined;

  /**
   * <p> An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account. </p>
   */
  OpenProactiveInsights: number | undefined;

  /**
   * <p> An integer that specifies the number of metrics that have been analyzed in your Amazon Web Services
   * 			account. </p>
   */
  MetricsAnalyzed: number | undefined;

  /**
   * <p>The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in
   * 			the last hour. </p>
   */
  ResourceHours: number | undefined;
}

export namespace DescribeAccountHealthResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountOverviewRequest {
  /**
   * <p> The start of the time range passed in. The start time granularity is at the day
   * 			level. The floor of the start time is used. Returned information occurred after this
   * 			day. </p>
   */
  FromTime: Date | undefined;

  /**
   * <p> The end of the time range passed in. The start time granularity is at the day level.
   * 			The floor of the start time is used. Returned information occurred before this day. If
   * 			this is not specified, then the current day is used. </p>
   */
  ToTime?: Date;
}

export namespace DescribeAccountOverviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountOverviewRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountOverviewResponse {
  /**
   * <p> An integer that specifies the number of open reactive insights in your Amazon Web Services account
   * 			that were created during the time range passed in. </p>
   */
  ReactiveInsights: number | undefined;

  /**
   * <p> An integer that specifies the number of open proactive insights in your Amazon Web Services account
   * 			that were created during the time range passed in. </p>
   */
  ProactiveInsights: number | undefined;

  /**
   * <p> The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in.
   * 		</p>
   */
  MeanTimeToRecoverInMilliseconds: number | undefined;
}

export namespace DescribeAccountOverviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountOverviewResponse): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyRequest {
  /**
   * <p> The ID of the anomaly. </p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the member account.</p>
   */
  AccountId?: string;
}

export namespace DescribeAnomalyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnomalyRequest): any => ({
    ...obj,
  });
}

/**
 * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
 * 			is expected to occur. </p>
 */
export interface PredictionTimeRange {
  /**
   * <p> The time range during which a metric limit is expected to be exceeded. This applies
   * 			to proactive insights only. </p>
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the behavior in a proactive insight is expected to end. </p>
   */
  EndTime?: Date;
}

export namespace PredictionTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictionTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p> Information about Amazon Web Services CloudFormation stacks. You can use up to 500
 * 			stacks to specify which Amazon Web Services resources in your account to analyze. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>. </p>
 */
export interface CloudFormationCollection {
  /**
   * <p> An array of CloudFormation stack names. </p>
   */
  StackNames?: string[];
}

export namespace CloudFormationCollection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFormationCollection): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of Amazon Web Services stags.</p>
 *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
 *    		tagging, so you can assign the same tag to resources from different services to indicate
 *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
 *    		table resource that you assign to an Lambda function. For more information about
 *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
 *    			best practices</a> whitepaper. </p>
 *    	     <p>Each Amazon Web Services tag has two parts. </p>
 *    	     <ul>
 *             <li>
 *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
 *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
 *    				<i>keys</i> are case-sensitive.</p>
 *    		       </li>
 *             <li>
 *    			         <p>An optional field known as a tag <i>value</i> (for example,
 *    				<code>111122223333</code>, <code>Production</code>, or a team
 *    				name). Omitting the tag <i>value</i> is the same as using an empty
 *    				string. Like tag <i>keys</i>, tag <i>values</i> are
 *    				case-sensitive.</p>
 *    		       </li>
 *          </ul>
 *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
 *    	     <important>
 * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
 * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
 * 			<code>Devops-guru-deployment-application</code> or
 * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
 * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
 * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
 * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
 * 			application might be <code>Devops-Guru-production-application/RDS</code> or
 * 			<code>Devops-Guru-production-application/containers</code>.</p>
 * 	        </important>
 */
export interface TagCollection {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   */
  TagValues: string[] | undefined;
}

export namespace TagCollection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagCollection): any => ({
    ...obj,
  });
}

/**
 * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
 * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
 */
export interface ResourceCollection {
  /**
   * <p> An array of the names of Amazon Web Services CloudFormation stacks. The stacks define Amazon Web Services resources that
   * 			DevOps Guru analyzes. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  CloudFormation?: CloudFormationCollection;

  /**
   * <p>The Amazon Web Services tags that are used by resources in the resource collection.</p>
   * 		       <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
   *    			best practices</a> whitepaper. </p>
   *    	     <p>Each Amazon Web Services tag has two parts. </p>
   *    	     <ul>
   *             <li>
   *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *    		       </li>
   *             <li>
   *    			         <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *    	     <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  Tags?: TagCollection[];
}

export namespace ResourceCollection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceCollection): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an anomaly. This object is returned by
 * 			<code>ListAnomalies</code>.</p>
 */
export interface ProactiveAnomaly {
  /**
   * <p> The ID of a proactive anomaly. </p>
   */
  Id?: string;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p> The status of a proactive anomaly. </p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p> The time of the anomaly's most recent update. </p>
   */
  UpdateTime?: Date;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   */
  AssociatedInsightId?: string;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p> A threshold that was exceeded by behavior in analyzed resources. Exceeding this
   * 			threshold is related to the anomalous behavior that generated this anomaly. </p>
   */
  Limit?: number;

  /**
   * <p>The metadata for the anomaly.</p>
   */
  SourceMetadata?: AnomalySourceMetadata;

  /**
   * <p>Information about a resource in which DevOps Guru detected anomalous behavior.</p>
   */
  AnomalyResources?: AnomalyResource[];
}

export namespace ProactiveAnomaly {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProactiveAnomaly): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a reactive anomaly. This object is returned by
 * 				<code>ListAnomalies</code>.</p>
 */
export interface ReactiveAnomaly {
  /**
   * <p>The ID of the reactive anomaly. </p>
   */
  Id?: string;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p> The status of the anomaly. </p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   */
  AssociatedInsightId?: string;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>The type of the reactive anomaly. It can be one of the following types.</p>
   * 	        <ul>
   *             <li>
   * 	   	          <p>
   * 	   		            <code>CAUSAL</code> - the anomaly can cause a new insight.</p>
   * 	           </li>
   *             <li>
   * 	   	          <p>
   * 	   		            <code>CONTEXTUAL</code> - the anomaly contains additional information about an insight or its causal anomaly.</p>
   * 	           </li>
   *          </ul>
   */
  Type?: AnomalyType | string;

  /**
   * <p>The name of the reactive anomaly.</p>
   */
  Name?: string;

  /**
   * <p>A description of the reactive anomaly.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the causal anomaly that is associated with this
   *       reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.</p>
   */
  CausalAnomalyId?: string;

  /**
   * <p>The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.</p>
   */
  AnomalyResources?: AnomalyResource[];
}

export namespace ReactiveAnomaly {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactiveAnomaly): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyResponse {
  /**
   * <p> A <code>ProactiveAnomaly</code> object that represents the requested anomaly. </p>
   */
  ProactiveAnomaly?: ProactiveAnomaly;

  /**
   * <p> A <code>ReactiveAnomaly</code> object that represents the requested anomaly. </p>
   */
  ReactiveAnomaly?: ReactiveAnomaly;
}

export namespace DescribeAnomalyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAnomalyResponse): any => ({
    ...obj,
  });
}

export interface DescribeEventSourcesConfigRequest {}

export namespace DescribeEventSourcesConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventSourcesConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the integration of DevOps Guru as consumer with another AWS service, such
 * 			as AWS CodeGuru Profiler via EventBridge.</p>
 */
export interface EventSourcesConfig {
  /**
   * <p>Information about whether DevOps Guru is configured to consume recommendations which
   * 			are generated from AWS CodeGuru Profiler.</p>
   */
  AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
}

export namespace EventSourcesConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSourcesConfig): any => ({
    ...obj,
  });
}

export interface DescribeEventSourcesConfigResponse {
  /**
   * <p>Lists the event sources in the configuration.</p>
   */
  EventSources?: EventSourcesConfig;
}

export namespace DescribeEventSourcesConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventSourcesConfigResponse): any => ({
    ...obj,
  });
}

export interface DescribeFeedbackRequest {
  /**
   * <p> The ID of the insight for which the feedback was provided. </p>
   */
  InsightId?: string;
}

export namespace DescribeFeedbackRequest {
  /**
   * @internal
   */
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
 * <p> Information about insight feedback received from a customer. </p>
 */
export interface InsightFeedback {
  /**
   * <p> The insight feedback ID. </p>
   */
  Id?: string;

  /**
   * <p> The feedback provided by the customer. </p>
   */
  Feedback?: InsightFeedbackOption | string;
}

export namespace InsightFeedback {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightFeedback): any => ({
    ...obj,
  });
}

export interface DescribeFeedbackResponse {
  /**
   * <p> Information about insight feedback received from a customer. </p>
   */
  InsightFeedback?: InsightFeedback;
}

export namespace DescribeFeedbackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFeedbackResponse): any => ({
    ...obj,
  });
}

export interface DescribeInsightRequest {
  /**
   * <p> The ID of the insight. </p>
   */
  Id: string | undefined;

  /**
   * <p>The ID of the member account in the organization.</p>
   */
  AccountId?: string;
}

export namespace DescribeInsightRequest {
  /**
   * @internal
   */
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
   * <p> The time when the behavior described in an insight started. </p>
   */
  StartTime: Date | undefined;

  /**
   * <p> The time when the behavior described in an insight ended. </p>
   */
  EndTime?: Date;
}

export namespace InsightTimeRange {
  /**
   * @internal
   */
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
 * <p>Details about a proactive insight. This object is returned by
 * 				<code>ListInsights</code>.</p>
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
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
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
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p> The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable
   * 			the creation of OpstItems insights before they are created for each insight. </p>
   */
  SsmOpsItemId?: string;

  /**
   * <p>Describes the proactive insight.</p>
   */
  Description?: string;
}

export namespace ProactiveInsight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProactiveInsight): any => ({
    ...obj,
  });
}

/**
 * <p> Information about a reactive insight. This object is returned by
 * 				<code>ListInsights</code>. </p>
 */
export interface ReactiveInsight {
  /**
   * <p> The ID of a reactive insight. </p>
   */
  Id?: string;

  /**
   * <p> The name of a reactive insight. </p>
   */
  Name?: string;

  /**
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p> The status of a reactive insight. </p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p> The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable
   * 			the creation of OpstItems insights before they are created for each insight. </p>
   */
  SsmOpsItemId?: string;

  /**
   * <p>Describes the reactive insight.</p>
   */
  Description?: string;
}

export namespace ReactiveInsight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactiveInsight): any => ({
    ...obj,
  });
}

export interface DescribeInsightResponse {
  /**
   * <p> A <code>ProactiveInsight</code> object that represents the requested insight. </p>
   */
  ProactiveInsight?: ProactiveInsight;

  /**
   * <p> A <code>ReactiveInsight</code> object that represents the requested insight. </p>
   */
  ReactiveInsight?: ReactiveInsight;
}

export namespace DescribeInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInsightResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationHealthRequest {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The ID of the organizational unit.</p>
   */
  OrganizationalUnitIds?: string[];
}

export namespace DescribeOrganizationHealthRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationHealthRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationHealthResponse {
  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   */
  OpenReactiveInsights: number | undefined;

  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   */
  OpenProactiveInsights: number | undefined;

  /**
   * <p>An integer that specifies the number of metrics that have been analyzed in your
   * 			organization.</p>
   */
  MetricsAnalyzed: number | undefined;

  /**
   * <p>The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in
   * 			the last hour. </p>
   */
  ResourceHours: number | undefined;
}

export namespace DescribeOrganizationHealthResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationOverviewRequest {
  /**
   * <p> The start of the time range passed in. The start time granularity is at the day
   * 			level. The floor of the start time is used. Returned information occurred after this
   * 			day. </p>
   */
  FromTime: Date | undefined;

  /**
   * <p> The end of the time range passed in. The start time granularity is at the day level.
   * 			The floor of the start time is used. Returned information occurred before this day. If
   * 			this is not specified, then the current day is used. </p>
   */
  ToTime?: Date;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The ID of the organizational unit.</p>
   */
  OrganizationalUnitIds?: string[];
}

export namespace DescribeOrganizationOverviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationOverviewRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationOverviewResponse {
  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   */
  ReactiveInsights: number | undefined;

  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   */
  ProactiveInsights: number | undefined;
}

export namespace DescribeOrganizationOverviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationOverviewResponse): any => ({
    ...obj,
  });
}

export enum OrganizationResourceCollectionType {
  AWS_ACCOUNT = "AWS_ACCOUNT",
  AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION",
  AWS_SERVICE = "AWS_SERVICE",
  AWS_TAGS = "AWS_TAGS",
}

export interface DescribeOrganizationResourceCollectionHealthRequest {
  /**
   * <p> An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources
   * 			are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  OrganizationResourceCollectionType: OrganizationResourceCollectionType | string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The ID of the organizational unit.</p>
   */
  OrganizationalUnitIds?: string[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace DescribeOrganizationResourceCollectionHealthRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationResourceCollectionHealthRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Information about the number of open reactive and proactive insights that can be used
 * 			to gauge the health of your system. </p>
 */
export interface InsightHealth {
  /**
   * <p> The number of open proactive insights. </p>
   */
  OpenProactiveInsights?: number;

  /**
   * <p> The number of open reactive insights. </p>
   */
  OpenReactiveInsights?: number;

  /**
   * <p> The Meant Time to Recover (MTTR) for the insight. </p>
   */
  MeanTimeToRecoverInMilliseconds?: number;
}

export namespace InsightHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightHealth): any => ({
    ...obj,
  });
}

/**
 * <p> Information about the health of Amazon Web Services resources in your account that are specified by
 * 			an Amazon Web Services CloudFormation stack. </p>
 */
export interface CloudFormationHealth {
  /**
   * <p> The name of the CloudFormation stack. </p>
   */
  StackName?: string;

  /**
   * <p> Information about the health of the Amazon Web Services resources in your account that are
   * 			specified by an Amazon Web Services CloudFormation stack, including the number of open proactive, open reactive
   * 			insights, and the Mean Time to Recover (MTTR) of closed insights. </p>
   */
  Insight?: InsightHealth;
}

export namespace CloudFormationHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFormationHealth): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services
 * 			service.</p>
 */
export interface ServiceInsightHealth {
  /**
   * <p>The number of open proactive insights in the Amazon Web Services service</p>
   */
  OpenProactiveInsights?: number;

  /**
   * <p>The number of open reactive insights in the Amazon Web Services service</p>
   */
  OpenReactiveInsights?: number;
}

export namespace ServiceInsightHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceInsightHealth): any => ({
    ...obj,
  });
}

export enum ServiceName {
  API_GATEWAY = "API_GATEWAY",
  APPLICATION_ELB = "APPLICATION_ELB",
  AUTO_SCALING_GROUP = "AUTO_SCALING_GROUP",
  CLOUD_FRONT = "CLOUD_FRONT",
  DYNAMO_DB = "DYNAMO_DB",
  EC2 = "EC2",
  ECS = "ECS",
  EKS = "EKS",
  ELASTIC_BEANSTALK = "ELASTIC_BEANSTALK",
  ELASTI_CACHE = "ELASTI_CACHE",
  ELB = "ELB",
  ES = "ES",
  KINESIS = "KINESIS",
  LAMBDA = "LAMBDA",
  NAT_GATEWAY = "NAT_GATEWAY",
  NETWORK_ELB = "NETWORK_ELB",
  RDS = "RDS",
  REDSHIFT = "REDSHIFT",
  ROUTE_53 = "ROUTE_53",
  S3 = "S3",
  SAGE_MAKER = "SAGE_MAKER",
  SNS = "SNS",
  SQS = "SQS",
  STEP_FUNCTIONS = "STEP_FUNCTIONS",
  SWF = "SWF",
}

/**
 * <p>Represents the health of an Amazon Web Services service.</p>
 */
export interface ServiceHealth {
  /**
   * <p>The name of the Amazon Web Services service.</p>
   */
  ServiceName?: ServiceName | string;

  /**
   * <p>Represents the health of an Amazon Web Services service. This is a <code>ServiceInsightHealth</code>
   * 			that contains the number of open proactive and reactive insights for this
   * 			service.</p>
   */
  Insight?: ServiceInsightHealth;
}

export namespace ServiceHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceHealth): any => ({
    ...obj,
  });
}

/**
 * <p> Information about the health of Amazon Web Services resources in your account that are specified by
 * 			an Amazon Web Services tag <i>key</i>. </p>
 */
export interface TagHealth {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  AppBoundaryKey?: string;

  /**
   * <p>The value in an Amazon Web Services tag.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   */
  TagValue?: string;

  /**
   * <p>Information about the health of the Amazon Web Services resources in your account that are specified
   * 			by an Amazon Web Services tag, including the number of open proactive, open reactive insights, and the
   * 			Mean Time to Recover (MTTR) of closed insights. </p>
   */
  Insight?: InsightHealth;
}

export namespace TagHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagHealth): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationResourceCollectionHealthResponse {
  /**
   * <p>The returned <code>CloudFormationHealthOverview</code> object that contains an
   * 				<code>InsightHealthOverview</code> object with the requested system health
   * 			information.</p>
   */
  CloudFormation?: CloudFormationHealth[];

  /**
   * <p>An array of <code>ServiceHealth</code> objects that describes the health of the Amazon Web Services
   * 			services associated with the resources in the collection.</p>
   */
  Service?: ServiceHealth[];

  /**
   * <p>The name of the organization's account.</p>
   */
  Account?: AccountHealth[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
   *    			best practices</a> whitepaper. </p>
   *    	     <p>Each Amazon Web Services tag has two parts. </p>
   *    	     <ul>
   *             <li>
   *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *    		       </li>
   *             <li>
   *    			         <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *    	     <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  Tags?: TagHealth[];
}

export namespace DescribeOrganizationResourceCollectionHealthResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationResourceCollectionHealthResponse): any => ({
    ...obj,
  });
}

export enum ResourceCollectionType {
  AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION",
  AWS_SERVICE = "AWS_SERVICE",
  AWS_TAGS = "AWS_TAGS",
}

export interface DescribeResourceCollectionHealthRequest {
  /**
   * <p> An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources
   * 			are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollectionType: ResourceCollectionType | string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace DescribeResourceCollectionHealthRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceCollectionHealthRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourceCollectionHealthResponse {
  /**
   * <p> The returned <code>CloudFormationHealthOverview</code> object that contains an
   * 				<code>InsightHealthOverview</code> object with the requested system health
   * 			information. </p>
   */
  CloudFormation?: CloudFormationHealth[];

  /**
   * <p>An array of <code>ServiceHealth</code> objects that describes the health of the Amazon Web Services
   * 			services associated with the resources in the collection.</p>
   */
  Service?: ServiceHealth[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services tags that are used by resources in the resource collection.</p>
   * 		       <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
   *    			best practices</a> whitepaper. </p>
   *    	     <p>Each Amazon Web Services tag has two parts. </p>
   *    	     <ul>
   *             <li>
   *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *    		       </li>
   *             <li>
   *    			         <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *    	     <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  Tags?: TagHealth[];
}

export namespace DescribeResourceCollectionHealthResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceCollectionHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeServiceIntegrationRequest {}

export namespace DescribeServiceIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServiceIntegrationRequest): any => ({
    ...obj,
  });
}

export enum OptInStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
 * 			OpsCenter for each created insight. </p>
 */
export interface OpsCenterIntegration {
  /**
   * <p> Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created
   * 			insight. </p>
   */
  OptInStatus?: OptInStatus | string;
}

export namespace OpsCenterIntegration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsCenterIntegration): any => ({
    ...obj,
  });
}

/**
 * <p> Information about the integration of DevOps Guru with another Amazon Web Services service, such as
 * 			Amazon Web Services Systems Manager. </p>
 */
export interface ServiceIntegrationConfig {
  /**
   * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
   * 			OpsCenter for each created insight. </p>
   */
  OpsCenter?: OpsCenterIntegration;
}

export namespace ServiceIntegrationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceIntegrationConfig): any => ({
    ...obj,
  });
}

export interface DescribeServiceIntegrationResponse {
  /**
   * <p> Information about the integration of DevOps Guru with another Amazon Web Services service, such as
   * 			Amazon Web Services Systems Manager. </p>
   */
  ServiceIntegration?: ServiceIntegrationConfig;
}

export namespace DescribeServiceIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServiceIntegrationResponse): any => ({
    ...obj,
  });
}

export interface GetCostEstimationRequest {
  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace GetCostEstimationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCostEstimationRequest): any => ({
    ...obj,
  });
}

export enum CostEstimationServiceResourceState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>An object that contains information about the estimated monthly cost to analyze an
 * 			Amazon Web Services resource. For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 */
export interface ServiceResourceCost {
  /**
   * <p>The type of the Amazon Web Services resource.</p>
   */
  Type?: string;

  /**
   * <p>The state of the resource. The resource is <code>ACTIVE</code> if it produces metrics,
   * 			events, or logs within an hour, otherwise it is <code>INACTIVE</code>. You pay for the
   * 			number of active Amazon Web Services resource hours analyzed for each resource. Inactive resources are
   * 			not charged. </p>
   */
  State?: CostEstimationServiceResourceState | string;

  /**
   * <p>The number of active resources analyzed for this service to create a monthly cost
   * 			estimate.</p>
   */
  Count?: number;

  /**
   * <p>The price per hour to analyze the resources in the service.
   * 			For more information,
   * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
   * 			Amazon DevOps Guru costs</a> and
   * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
   */
  UnitCost?: number;

  /**
   * <p>The total estimated monthly cost to analyze the active resources for this
   * 			resource.</p>
   */
  Cost?: number;
}

export namespace ServiceResourceCost {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceResourceCost): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate
 * 			for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a
 * 			cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services
 * 			resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>.</p>
 */
export interface CloudFormationCostEstimationResourceCollectionFilter {
  /**
   * <p>An array of CloudFormation stack names. Its size is fixed at 1 item.</p>
   */
  StackNames?: string[];
}

export namespace CloudFormationCostEstimationResourceCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFormationCostEstimationResourceCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag.
 * 			This collection of resources is used to create a monthly cost estimate for DevOps Guru to
 * 			analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate
 * 			is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by
 * 			the tag. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>.</p>
 */
export interface TagCostEstimationResourceCollectionFilter {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   */
  TagValues: string[] | undefined;
}

export namespace TagCostEstimationResourceCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagCostEstimationResourceCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a filter used to specify which Amazon Web Services resources are analyzed to
 * 			create a monthly DevOps Guru cost estimate. For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. </p>
 */
export interface CostEstimationResourceCollectionFilter {
  /**
   * <p>An object that specifies the CloudFormation stack that defines the Amazon Web Services resources
   * 			used to create a monthly estimate for DevOps Guru.</p>
   */
  CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;

  /**
   * <p>The Amazon Web Services tags used to filter the resource collection that is used for a cost
   * 			estimate.</p>
   *          <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
   *    			best practices</a> whitepaper. </p>
   *    	     <p>Each Amazon Web Services tag has two parts. </p>
   *    	     <ul>
   *             <li>
   *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *    		       </li>
   *             <li>
   *    			         <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *    	     <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  Tags?: TagCostEstimationResourceCollectionFilter[];
}

export namespace CostEstimationResourceCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CostEstimationResourceCollectionFilter): any => ({
    ...obj,
  });
}

export enum CostEstimationStatus {
  COMPLETED = "COMPLETED",
  ONGOING = "ONGOING",
}

/**
 * <p>The time range of a cost estimation.</p>
 */
export interface CostEstimationTimeRange {
  /**
   * <p>The start time of the cost estimation.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the cost estimation.</p>
   */
  EndTime?: Date;
}

export namespace CostEstimationTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CostEstimationTimeRange): any => ({
    ...obj,
  });
}

export interface GetCostEstimationResponse {
  /**
   * <p>The collection of the Amazon Web Services resources used to create your monthly DevOps Guru cost
   * 			estimate.</p>
   */
  ResourceCollection?: CostEstimationResourceCollectionFilter;

  /**
   * <p>The status of creating this cost estimate. If it's still in progress, the status
   * 				<code>ONGOING</code> is returned. If it is finished, the status
   * 				<code>COMPLETED</code> is returned.</p>
   */
  Status?: CostEstimationStatus | string;

  /**
   * <p>An array of <code>ResourceCost</code> objects that each contains details about the
   * 			monthly cost estimate to analyze one of your Amazon Web Services resources.</p>
   */
  Costs?: ServiceResourceCost[];

  /**
   * <p>The start and end time of the cost estimation.</p>
   */
  TimeRange?: CostEstimationTimeRange;

  /**
   * <p>The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum of
   * 			the estimated costs to analyze each resource in the <code>Costs</code> object in this
   * 			response.</p>
   */
  TotalCost?: number;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace GetCostEstimationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCostEstimationResponse): any => ({
    ...obj,
  });
}

export interface GetResourceCollectionRequest {
  /**
   * <p> The type of Amazon Web Services resource collections to return. The one valid value is
   * 				<code>CLOUD_FORMATION</code> for Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollectionType: ResourceCollectionType | string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace GetResourceCollectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceCollectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Information about Amazon Web Services CloudFormation stacks. You can use up to 500
 * 			stacks to specify which Amazon Web Services resources in your account to analyze. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
 * 				<i>Amazon Web Services CloudFormation User Guide</i>. </p>
 */
export interface CloudFormationCollectionFilter {
  /**
   * <p> An array of CloudFormation stack names. </p>
   */
  StackNames?: string[];
}

export namespace CloudFormationCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudFormationCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of Amazon Web Services tags used to filter insights. This is used to return insights
 * 			generated from only resources that contain the tags in the tag collection.</p>
 */
export interface TagCollectionFilter {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   */
  TagValues: string[] | undefined;
}

export namespace TagCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p> Information about a filter used to specify which Amazon Web Services resources are analyzed for
 * 			anomalous behavior by DevOps Guru. </p>
 */
export interface ResourceCollectionFilter {
  /**
   * <p> Information about Amazon Web Services CloudFormation stacks. You can use up to 500
   * 			stacks to specify which Amazon Web Services resources in your account to analyze. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the
   * 				<i>Amazon Web Services CloudFormation User Guide</i>. </p>
   */
  CloudFormation?: CloudFormationCollectionFilter;

  /**
   * <p>The Amazon Web Services tags used to filter the resources in the resource collection.</p>
   * 		       <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
   *    			best practices</a> whitepaper. </p>
   *    	     <p>Each Amazon Web Services tag has two parts. </p>
   *    	     <ul>
   *             <li>
   *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *    		       </li>
   *             <li>
   *    			         <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *    	     <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  Tags?: TagCollectionFilter[];
}

export namespace ResourceCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceCollectionFilter): any => ({
    ...obj,
  });
}

export interface GetResourceCollectionResponse {
  /**
   * <p> The requested list of Amazon Web Services resource collections.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollectionFilter;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace GetResourceCollectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceCollectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p> A time range used to specify when the behavior of an insight or anomaly started.
 * 		</p>
 */
export interface StartTimeRange {
  /**
   * <p> The start time of the time range. </p>
   */
  FromTime?: Date;

  /**
   * <p> The end time of the time range. </p>
   */
  ToTime?: Date;
}

export namespace StartTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTimeRange): any => ({
    ...obj,
  });
}

export interface ListAnomaliesForInsightRequest {
  /**
   * <p> The ID of the insight. The returned anomalies belong to this insight. </p>
   */
  InsightId: string | undefined;

  /**
   * <p> A time range used to specify when the requested anomalies started. All returned
   * 			anomalies started during this time range. </p>
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

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountId?: string;
}

export namespace ListAnomaliesForInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnomaliesForInsightRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a proactive anomaly. This object is returned by
 * 				<code>DescribeAnomaly.</code>
 *          </p>
 */
export interface ProactiveAnomalySummary {
  /**
   * <p>The ID of the anomaly.</p>
   */
  Id?: string;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p>The status of the anomaly.</p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p> The time of the anomaly's most recent update. </p>
   */
  UpdateTime?: Date;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   */
  AssociatedInsightId?: string;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p> A threshold that was exceeded by behavior in analyzed resources. Exceeding this
   * 			threshold is related to the anomalous behavior that generated this anomaly. </p>
   */
  Limit?: number;

  /**
   * <p>The metadata of the source which detects proactive anomalies.</p>
   */
  SourceMetadata?: AnomalySourceMetadata;

  /**
   * <p>Information about a resource in which DevOps Guru detected anomalous behavior.</p>
   */
  AnomalyResources?: AnomalyResource[];
}

export namespace ProactiveAnomalySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProactiveAnomalySummary): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a reactive anomaly. This object is returned by
 * 				<code>DescribeAnomaly.</code>
 *          </p>
 */
export interface ReactiveAnomalySummary {
  /**
   * <p> The ID of the reactive anomaly. </p>
   */
  Id?: string;

  /**
   * <p>The severity of the anomaly. The severity of anomalies that generate
   * 	an insight determine that insight's severity. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: AnomalySeverity | string;

  /**
   * <p> The status of the reactive anomaly. </p>
   */
  Status?: AnomalyStatus | string;

  /**
   * <p> A time range that specifies when the observed unusual behavior in an anomaly started
   * 			and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies
   * 			the time range when DevOps Guru opens and then closes an anomaly. </p>
   */
  AnomalyTimeRange?: AnomalyTimeRange;

  /**
   * <p>
   * 			An <code>AnomalyReportedTimeRange</code> object that specifies the time range between when the anomaly is opened and the time when it is closed.
   * 		</p>
   */
  AnomalyReportedTimeRange?: AnomalyReportedTimeRange;

  /**
   * <p> Details about the source of the analyzed operational data that triggered the anomaly.
   * 			The one supported source is Amazon CloudWatch metrics. </p>
   */
  SourceDetails?: AnomalySourceDetails;

  /**
   * <p> The ID of the insight that contains this anomaly. An insight is composed of related
   * 			anomalies. </p>
   */
  AssociatedInsightId?: string;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>The type of the reactive anomaly. It can be one of the following types.</p>
   * 	        <ul>
   *             <li>
   * 	   	          <p>
   * 	   		            <code>CAUSAL</code> - the anomaly can cause a new insight.</p>
   * 	           </li>
   *             <li>
   * 	   	          <p>
   * 	   		            <code>CONTEXTUAL</code> - the anomaly contains additional information about an insight or its causal anomaly.</p>
   * 	           </li>
   *          </ul>
   */
  Type?: AnomalyType | string;

  /**
   * <p>The name of the reactive anomaly.</p>
   */
  Name?: string;

  /**
   * <p>A description of the reactive anomaly.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the causal anomaly that is associated with this
   *       reactive anomaly. The ID of a `CAUSAL` anomaly is always `NULL`.</p>
   */
  CausalAnomalyId?: string;

  /**
   * <p>The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru.</p>
   */
  AnomalyResources?: AnomalyResource[];
}

export namespace ReactiveAnomalySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactiveAnomalySummary): any => ({
    ...obj,
  });
}

export interface ListAnomaliesForInsightResponse {
  /**
   * <p> An array of <code>ProactiveAnomalySummary</code> objects that represent the requested
   * 			anomalies </p>
   */
  ProactiveAnomalies?: ProactiveAnomalySummary[];

  /**
   * <p> An array of <code>ReactiveAnomalySummary</code> objects that represent the requested
   * 			anomalies </p>
   */
  ReactiveAnomalies?: ReactiveAnomalySummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListAnomaliesForInsightResponse {
  /**
   * @internal
   */
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
 * <p> The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and
 * 			metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to
 * 			improve your operational solutions. </p>
 */
export interface EventTimeRange {
  /**
   * <p> The time when the event started. </p>
   */
  FromTime: Date | undefined;

  /**
   * <p> The time when the event ended. </p>
   */
  ToTime: Date | undefined;
}

export namespace EventTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p> Filters you can use to specify which events are returned when <code>ListEvents</code>
 * 			is called. </p>
 */
export interface ListEventsFilters {
  /**
   * <p> An ID of an insight that is related to the events you want to filter for. </p>
   */
  InsightId?: string;

  /**
   * <p> A time range during which you want the filtered events to have occurred. </p>
   */
  EventTimeRange?: EventTimeRange;

  /**
   * <p> The class of the events you want to filter for, such as an infrastructure change, a
   * 			deployment, or a schema change. </p>
   */
  EventClass?: EventClass | string;

  /**
   * <p> The Amazon Web Services source that emitted the events you want to filter for. </p>
   */
  EventSource?: string;

  /**
   * <p> The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, of the
   * 			events you want returned. </p>
   */
  DataSource?: EventDataSource | string;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;
}

export namespace ListEventsFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventsFilters): any => ({
    ...obj,
  });
}

export interface ListEventsRequest {
  /**
   * <p> A <code>ListEventsFilters</code> object used to specify which events to return.
   * 		</p>
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

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountId?: string;
}

export namespace ListEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p> The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are
 * 			analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your
 * 			operational solutions. </p>
 */
export interface EventResource {
  /**
   * <p> The type of resource that emitted an event. </p>
   */
  Type?: string;

  /**
   * <p> The name of the resource that emitted an event. </p>
   */
  Name?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the resource that emitted an event. </p>
   */
  Arn?: string;
}

export namespace EventResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventResource): any => ({
    ...obj,
  });
}

/**
 * <p> An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to
 * 			find anomalous behavior and provide recommendations to improve your operational
 * 			solutions. </p>
 */
export interface Event {
  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p> The ID of the event. </p>
   */
  Id?: string;

  /**
   * <p> A <code>Timestamp</code> that specifies the time the event occurred. </p>
   */
  Time?: Date;

  /**
   * <p> The Amazon Web Services source that emitted the event. </p>
   */
  EventSource?: string;

  /**
   * <p> The name of the event. </p>
   */
  Name?: string;

  /**
   * <p> The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, where DevOps Guru
   * 			analysis found the event. </p>
   */
  DataSource?: EventDataSource | string;

  /**
   * <p> The class of the event. The class specifies what the event is related to, such as an
   * 			infrastructure change, a deployment, or a schema change. </p>
   */
  EventClass?: EventClass | string;

  /**
   * <p> An <code>EventResource</code> object that contains information about the resource
   * 			that emitted the event. </p>
   */
  Resources?: EventResource[];
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export interface ListEventsResponse {
  /**
   * <p> A list of the requested events. </p>
   */
  Events: Event[] | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventsResponse): any => ({
    ...obj,
  });
}

export enum InsightType {
  PROACTIVE = "PROACTIVE",
  REACTIVE = "REACTIVE",
}

/**
 * <p> Used to filter for insights that have any status. </p>
 */
export interface ListInsightsAnyStatusFilter {
  /**
   * <p> Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   * 		</p>
   */
  Type: InsightType | string | undefined;

  /**
   * <p> A time range used to specify when the behavior of the filtered insights started.
   * 		</p>
   */
  StartTimeRange: StartTimeRange | undefined;
}

export namespace ListInsightsAnyStatusFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInsightsAnyStatusFilter): any => ({
    ...obj,
  });
}

/**
 * <p> A range of time that specifies when anomalous behavior in an anomaly or insight
 * 			ended. </p>
 */
export interface EndTimeRange {
  /**
   * <p> The earliest end time in the time range. </p>
   */
  FromTime?: Date;

  /**
   * <p> The latest end time in the time range. </p>
   */
  ToTime?: Date;
}

export namespace EndTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p> Used to filter for insights that have the status <code>CLOSED</code>. </p>
 */
export interface ListInsightsClosedStatusFilter {
  /**
   * <p> Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   * 		</p>
   */
  Type: InsightType | string | undefined;

  /**
   * <p> A time range used to specify when the behavior of the filtered insights ended.
   * 		</p>
   */
  EndTimeRange: EndTimeRange | undefined;
}

export namespace ListInsightsClosedStatusFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInsightsClosedStatusFilter): any => ({
    ...obj,
  });
}

/**
 * <p> Used to filter for insights that have the status <code>ONGOING</code>. </p>
 */
export interface ListInsightsOngoingStatusFilter {
  /**
   * <p> Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
   * 		</p>
   */
  Type: InsightType | string | undefined;
}

export namespace ListInsightsOngoingStatusFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInsightsOngoingStatusFilter): any => ({
    ...obj,
  });
}

/**
 * <p> A filter used by <code>ListInsights</code> to specify which insights to return.
 * 		</p>
 */
export interface ListInsightsStatusFilter {
  /**
   * <p> A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights that are
   * 			either <code>REACTIVE</code> or <code>PROACTIVE</code>. </p>
   */
  Ongoing?: ListInsightsOngoingStatusFilter;

  /**
   * <p> A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are
   * 			either <code>REACTIVE</code> or <code>PROACTIVE</code>. </p>
   */
  Closed?: ListInsightsClosedStatusFilter;

  /**
   * <p> A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status that
   * 			are either <code>REACTIVE</code> or <code>PROACTIVE</code>. </p>
   */
  Any?: ListInsightsAnyStatusFilter;
}

export namespace ListInsightsStatusFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInsightsStatusFilter): any => ({
    ...obj,
  });
}

export interface ListInsightsRequest {
  /**
   * <p> A filter used to filter the returned insights by their status. You can specify one
   * 			status filter. </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of the names of Amazon Web Services services.</p>
 */
export interface ServiceCollection {
  /**
   * <p>An array of strings that each specifies the name of an Amazon Web Services service.</p>
   */
  ServiceNames?: (ServiceName | string)[];
}

export namespace ServiceCollection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceCollection): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a proactive insight. This object is returned by
 * 				<code>DescribeInsight.</code>
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
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
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
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   */
  ServiceCollection?: ServiceCollection;

  /**
   * <p>The Amazon Resource Names (ARNs)
   * 	of the Amazon Web Services resources that generated this insight.</p>
   */
  AssociatedResourceArns?: string[];
}

export namespace ProactiveInsightSummary {
  /**
   * @internal
   */
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
   * <p> The ID of a reactive summary. </p>
   */
  Id?: string;

  /**
   * <p> The name of a reactive insight. </p>
   */
  Name?: string;

  /**
   * <p>The severity of the insight. For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p> The status of a reactive insight. </p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   */
  ServiceCollection?: ServiceCollection;

  /**
   * <p>The Amazon Resource Names (ARNs)
   * 	of the Amazon Web Services resources that generated this insight.</p>
   */
  AssociatedResourceArns?: string[];
}

export namespace ReactiveInsightSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactiveInsightSummary): any => ({
    ...obj,
  });
}

export interface ListInsightsResponse {
  /**
   * <p> The returned list of proactive insights. </p>
   */
  ProactiveInsights?: ProactiveInsightSummary[];

  /**
   * <p> The returned list of reactive insights. </p>
   */
  ReactiveInsights?: ReactiveInsightSummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListInsightsResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotificationChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Information about a notification channel. A notification channel is used to notify
 * 			you when DevOps Guru creates an insight. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
 * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
 */
export interface NotificationChannel {
  /**
   * <p> The ID of a notification channel. </p>
   */
  Id?: string;

  /**
   * <p> A <code>NotificationChannelConfig</code> object that contains information about
   * 			configured notification channels. </p>
   */
  Config?: NotificationChannelConfig;
}

export namespace NotificationChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationChannel): any => ({
    ...obj,
  });
}

export interface ListNotificationChannelsResponse {
  /**
   * <p> An array that contains the requested notification channels. </p>
   */
  Channels?: NotificationChannel[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListNotificationChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotificationChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationInsightsRequest {
  /**
   * <p> A filter used by <code>ListInsights</code> to specify which insights to return.
   * 		</p>
   */
  StatusFilter: ListInsightsStatusFilter | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountIds?: string[];

  /**
   * <p>The ID of the organizational unit.</p>
   */
  OrganizationalUnitIds?: string[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a proactive insight. This object is returned by
 * 				<code>DescribeInsight</code>.</p>
 */
export interface ProactiveOrganizationInsightSummary {
  /**
   * <p>The ID of the insight summary.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the organizational unit.</p>
   */
  OrganizationalUnitId?: string;

  /**
   * <p>The name of the insight summary.</p>
   */
  Name?: string;

  /**
   * <p> An array of severity values used to search for insights.
   * 			For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p> An array of status values used to search for insights. </p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p> The time range during which anomalous behavior in a proactive anomaly or an insight
   * 			is expected to occur. </p>
   */
  PredictionTimeRange?: PredictionTimeRange;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   */
  ServiceCollection?: ServiceCollection;
}

export namespace ProactiveOrganizationInsightSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProactiveOrganizationInsightSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reactive insight. This object is returned by
 * 				<code>DescribeInsight</code>.</p>
 */
export interface ReactiveOrganizationInsightSummary {
  /**
   * <p>The ID of the insight summary.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the organizational unit.</p>
   */
  OrganizationalUnitId?: string;

  /**
   * <p>The name of the insight summary.</p>
   */
  Name?: string;

  /**
   * <p> An array of severity values used to search for insights.
   * 			For more information, see
   * 	<a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/working-with-insights.html#understanding-insights-severities">Understanding
   * 	insight severities</a> in the <i>Amazon DevOps Guru User Guide</i>.</p>
   */
  Severity?: InsightSeverity | string;

  /**
   * <p> An array of status values used to search for insights. </p>
   */
  Status?: InsightStatus | string;

  /**
   * <p> A time ranged that specifies when the observed behavior in an insight started and
   * 			ended. </p>
   */
  InsightTimeRange?: InsightTimeRange;

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   */
  ServiceCollection?: ServiceCollection;
}

export namespace ReactiveOrganizationInsightSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactiveOrganizationInsightSummary): any => ({
    ...obj,
  });
}

export interface ListOrganizationInsightsResponse {
  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   */
  ProactiveInsights?: ProactiveOrganizationInsightSummary[];

  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   */
  ReactiveInsights?: ReactiveOrganizationInsightSummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationInsightsResponse): any => ({
    ...obj,
  });
}

export enum Locale {
  DE_DE = "DE_DE",
  EN_GB = "EN_GB",
  EN_US = "EN_US",
  ES_ES = "ES_ES",
  FR_FR = "FR_FR",
  IT_IT = "IT_IT",
  JA_JP = "JA_JP",
  KO_KR = "KO_KR",
  PT_BR = "PT_BR",
  ZH_CN = "ZH_CN",
  ZH_TW = "ZH_TW",
}

export interface ListRecommendationsRequest {
  /**
   * <p> The ID of the requested insight. </p>
   */
  InsightId: string | undefined;

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>A locale that specifies the language to use for recommendations.</p>
   */
  Locale?: Locale | string;

  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountId?: string;
}

export namespace ListRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p> Information about a resource in which DevOps Guru detected anomalous behavior. </p>
 */
export interface RecommendationRelatedAnomalyResource {
  /**
   * <p> The name of the resource. </p>
   */
  Name?: string;

  /**
   * <p> The type of the resource. Resource types take the same form that is used by Amazon Web Services CloudFormation
   * 			resource type identifiers, <code>service-provider::service-name::data-type-name</code>.
   * 			For example, <code>AWS::RDS::DBCluster</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services
   * 				resource and property types reference</a> in the <i>Amazon Web Services CloudFormation User
   * 				Guide</i>.</p>
   */
  Type?: string;
}

export namespace RecommendationRelatedAnomalyResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomalyResource): any => ({
    ...obj,
  });
}

/**
 * <p> Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many
 * 			analyzed metrics that are used to generate insights. </p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationRelatedCloudWatchMetricsSourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p> Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code>
 * 			objects that contain the name and namespace of an Amazon CloudWatch metric. </p>
 */
export interface RecommendationRelatedAnomalySourceDetail {
  /**
   * <p> An array of <code>CloudWatchMetricsDetail</code> objects that contains information
   * 			about the analyzed metrics that displayed anomalous behavior. </p>
   */
  CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}

export namespace RecommendationRelatedAnomalySourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomalySourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p> Information about an anomaly that is related to a recommendation. </p>
 */
export interface RecommendationRelatedAnomaly {
  /**
   * <p> An array of objects that represent resources in which DevOps Guru detected anomalous
   * 			behavior. Each object contains the name and type of the resource. </p>
   */
  Resources?: RecommendationRelatedAnomalyResource[];

  /**
   * <p> Information about where the anomalous behavior related the recommendation was found.
   * 			For example, details in Amazon CloudWatch metrics. </p>
   */
  SourceDetails?: RecommendationRelatedAnomalySourceDetail[];

  /**
   * <p>The ID of an anomaly that generated the insight with this recommendation.</p>
   */
  AnomalyId?: string;
}

export namespace RecommendationRelatedAnomaly {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomaly): any => ({
    ...obj,
  });
}

/**
 * <p> Information about an Amazon Web Services resource that emitted and event that is related to a
 * 			recommendation in an insight. </p>
 */
export interface RecommendationRelatedEventResource {
  /**
   * <p> The name of the resource that emitted the event. This corresponds to the
   * 				<code>Name</code> field in an <code>EventResource</code> object. </p>
   */
  Name?: string;

  /**
   * <p> The type of the resource that emitted the event. This corresponds to the
   * 				<code>Type</code> field in an <code>EventResource</code> object. </p>
   */
  Type?: string;
}

export namespace RecommendationRelatedEventResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationRelatedEventResource): any => ({
    ...obj,
  });
}

/**
 * <p> Information about an event that is related to a recommendation. </p>
 */
export interface RecommendationRelatedEvent {
  /**
   * <p> The name of the event. This corresponds to the <code>Name</code> field in an
   * 				<code>Event</code> object. </p>
   */
  Name?: string;

  /**
   * <p> A <code>ResourceCollection</code> object that contains arrays of the names of Amazon Web Services
   * 			CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  Resources?: RecommendationRelatedEventResource[];
}

export namespace RecommendationRelatedEvent {
  /**
   * @internal
   */
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
   * <p> A description of the problem. </p>
   */
  Description?: string;

  /**
   * <p> A hyperlink to information to help you address the problem. </p>
   */
  Link?: string;

  /**
   * <p> The name of the recommendation. </p>
   */
  Name?: string;

  /**
   * <p> The reason DevOps Guru flagged the anomalous behavior as a problem. </p>
   */
  Reason?: string;

  /**
   * <p> Events that are related to the problem. Use these events to learn more about what's
   * 			happening and to help address the issue. </p>
   */
  RelatedEvents?: RecommendationRelatedEvent[];

  /**
   * <p> Anomalies that are related to the problem. Use these Anomalies to learn more about
   * 			what's happening and to help address the issue. </p>
   */
  RelatedAnomalies?: RecommendationRelatedAnomaly[];

  /**
   * <p>The category type of the recommendation.</p>
   */
  Category?: string;
}

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

export interface ListRecommendationsResponse {
  /**
   * <p> An array of the requested recommendations. </p>
   */
  Recommendations?: Recommendation[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface PutFeedbackRequest {
  /**
   * <p> The feedback from customers is about the recommendations in this insight. </p>
   */
  InsightFeedback?: InsightFeedback;
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

export interface RemoveNotificationChannelRequest {
  /**
   * <p> The ID of the notification channel to be removed. </p>
   */
  Id: string | undefined;
}

export namespace RemoveNotificationChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface RemoveNotificationChannelResponse {}

export namespace RemoveNotificationChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveNotificationChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies one or more severity values and one or more status values that are used to
 * 			search for insights. </p>
 */
export interface SearchInsightsFilters {
  /**
   * <p> An array of severity values used to search for insights. </p>
   */
  Severities?: (InsightSeverity | string)[];

  /**
   * <p> An array of status values used to search for insights. </p>
   */
  Statuses?: (InsightStatus | string)[];

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   */
  ServiceCollection?: ServiceCollection;
}

export namespace SearchInsightsFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchInsightsFilters): any => ({
    ...obj,
  });
}

export interface SearchInsightsRequest {
  /**
   * <p> The start of the time range passed in. Returned insights occurred after this time.
   * 		</p>
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * <p> A <code>SearchInsightsFilters</code> object that is used to set the severity and
   * 			status filters on your insight search. </p>
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
   * <p> The type of insights you are searching for (<code>REACTIVE</code> or
   * 				<code>PROACTIVE</code>). </p>
   */
  Type: InsightType | string | undefined;
}

export namespace SearchInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchInsightsRequest): any => ({
    ...obj,
  });
}

export interface SearchInsightsResponse {
  /**
   * <p> The returned proactive insights. </p>
   */
  ProactiveInsights?: ProactiveInsightSummary[];

  /**
   * <p> The returned reactive insights. </p>
   */
  ReactiveInsights?: ReactiveInsightSummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace SearchInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchInsightsResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Filters you can use to specify which events are returned when <code>ListEvents</code>
 * 			is called. </p>
 */
export interface SearchOrganizationInsightsFilters {
  /**
   * <p> An array of severity values used to search for insights. </p>
   */
  Severities?: (InsightSeverity | string)[];

  /**
   * <p> An array of status values used to search for insights. </p>
   */
  Statuses?: (InsightStatus | string)[];

  /**
   * <p> A collection of Amazon Web Services resources supported by DevOps Guru.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  ResourceCollection?: ResourceCollection;

  /**
   * <p>A collection of the names of Amazon Web Services services.</p>
   */
  ServiceCollection?: ServiceCollection;
}

export namespace SearchOrganizationInsightsFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchOrganizationInsightsFilters): any => ({
    ...obj,
  });
}

export interface SearchOrganizationInsightsRequest {
  /**
   * <p>The ID of the Amazon Web Services account. </p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p> A time range used to specify when the behavior of an insight or anomaly started.
   * 		</p>
   */
  StartTimeRange: StartTimeRange | undefined;

  /**
   * <p> A <code>SearchOrganizationInsightsFilters</code> object that is used to set the
   * 			severity and status filters on your insight search. </p>
   */
  Filters?: SearchOrganizationInsightsFilters;

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
   * <p> The type of insights you are searching for (<code>REACTIVE</code> or
   * 				<code>PROACTIVE</code>). </p>
   */
  Type: InsightType | string | undefined;
}

export namespace SearchOrganizationInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchOrganizationInsightsRequest): any => ({
    ...obj,
  });
}

export interface SearchOrganizationInsightsResponse {
  /**
   * <p>An integer that specifies the number of open proactive insights in your Amazon Web Services
   * 			account.</p>
   */
  ProactiveInsights?: ProactiveInsightSummary[];

  /**
   * <p>An integer that specifies the number of open reactive insights in your Amazon Web Services
   * 			account.</p>
   */
  ReactiveInsights?: ReactiveInsightSummary[];

  /**
   * <p>The pagination token to use to retrieve
   *    the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;
}

export namespace SearchOrganizationInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchOrganizationInsightsResponse): any => ({
    ...obj,
  });
}

export interface StartCostEstimationRequest {
  /**
   * <p>The collection of Amazon Web Services resources used to create a monthly DevOps Guru cost estimate.</p>
   */
  ResourceCollection: CostEstimationResourceCollectionFilter | undefined;

  /**
   * <p>The idempotency token used to identify each cost estimate request.</p>
   */
  ClientToken?: string;
}

export namespace StartCostEstimationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCostEstimationRequest): any => ({
    ...obj,
  });
}

export interface StartCostEstimationResponse {}

export namespace StartCostEstimationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCostEstimationResponse): any => ({
    ...obj,
  });
}

export interface UpdateEventSourcesConfigRequest {
  /**
   * <p>Configuration information about the integration of DevOps Guru as the Consumer via
   * 			EventBridge with another AWS Service.</p>
   */
  EventSources?: EventSourcesConfig;
}

export namespace UpdateEventSourcesConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventSourcesConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventSourcesConfigResponse {}

export namespace UpdateEventSourcesConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventSourcesConfigResponse): any => ({
    ...obj,
  });
}

export enum UpdateResourceCollectionAction {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

/**
 * <p> Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks.
 * 			You can specify up to 500 Amazon Web Services CloudFormation stacks.</p>
 */
export interface UpdateCloudFormationCollectionFilter {
  /**
   * <p> An array of the names of the Amazon Web Services CloudFormation stacks to update. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   * 		</p>
   */
  StackNames?: string[];
}

export namespace UpdateCloudFormationCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCloudFormationCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag
 * 			<i>key</i>/<i>value</i> pair.</p>
 */
export interface UpdateTagCollectionFilter {
  /**
   * <p>An Amazon Web Services tag <i>key</i> that is used to identify the Amazon Web Services resources that
   *       	DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this <i>key</i> make
   *       up your DevOps Guru application and analysis boundary.</p>
   *          <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  AppBoundaryKey: string | undefined;

  /**
   * <p>The values in an Amazon Web Services tag collection.</p>
   *          <p>The tag's <i>value</i> is an optional field used to associate a string with
   * 					the tag <i>key</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team
   *    				name). The <i>key</i> and <i>value</i> are the tag's <i>key</i> pair.
   *    				Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive. You can specify a maximum of 256 characters for a tag value.</p>
   */
  TagValues: string[] | undefined;
}

export namespace UpdateTagCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTagCollectionFilter): any => ({
    ...obj,
  });
}

/**
 * <p> Contains information used to update a collection of Amazon Web Services resources. </p>
 */
export interface UpdateResourceCollectionFilter {
  /**
   * <p> A collection of Amazon Web Services CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  CloudFormation?: UpdateCloudFormationCollectionFilter;

  /**
   * <p>The updated Amazon Web Services tags used to filter the resources in the resource collection.</p>
   * 		       <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support
   *    		tagging, so you can assign the same tag to resources from different services to indicate
   *    		that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB
   *    		table resource that you assign to an Lambda function. For more information about
   *    		using tags, see the <a href="https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf">Tagging
   *    			best practices</a> whitepaper. </p>
   *    	     <p>Each Amazon Web Services tag has two parts. </p>
   *    	     <ul>
   *             <li>
   *    			         <p>A tag <i>key</i> (for example, <code>CostCenter</code>,
   *    				<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
   *    				<i>keys</i> are case-sensitive.</p>
   *    		       </li>
   *             <li>
   *    			         <p>An optional field known as a tag <i>value</i> (for example,
   *    				<code>111122223333</code>, <code>Production</code>, or a team
   *    				name). Omitting the tag <i>value</i> is the same as using an empty
   *    				string. Like tag <i>keys</i>, tag <i>values</i> are
   *    				case-sensitive.</p>
   *    		       </li>
   *          </ul>
   *    	     <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p>
   *    	     <important>
   * 		          <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the
   * 			prefix <code>Devops-guru-</code>. The tag <i>key</i> might be
   * 			<code>Devops-guru-deployment-application</code> or
   * 			<code>Devops-guru-rds-application</code>. While <i>keys</i> are case-sensitive, the
   * 			case of <i>key</i> characters don't matter to DevOps Guru. For example, DevOps Guru works with a
   * 			<i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named
   * 			<code>DevOps-Guru-RDS</code>. Possible <i>key</i>/<i>value</i> pairs in your
   * 			application might be <code>Devops-Guru-production-application/RDS</code> or
   * 			<code>Devops-Guru-production-application/containers</code>.</p>
   * 	        </important>
   */
  Tags?: UpdateTagCollectionFilter[];
}

export namespace UpdateResourceCollectionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceCollectionFilter): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionRequest {
  /**
   * <p> Specifies if the resource collection in the request is added or deleted to the
   * 			resource collection. </p>
   */
  Action: UpdateResourceCollectionAction | string | undefined;

  /**
   * <p> Contains information used to update a collection of Amazon Web Services resources. </p>
   */
  ResourceCollection: UpdateResourceCollectionFilter | undefined;
}

export namespace UpdateResourceCollectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceCollectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionResponse {}

export namespace UpdateResourceCollectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceCollectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
 * 			OpsCenter for each created insight. </p>
 */
export interface OpsCenterIntegrationConfig {
  /**
   * <p> Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created
   * 			insight. </p>
   */
  OptInStatus?: OptInStatus | string;
}

export namespace OpsCenterIntegrationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpsCenterIntegrationConfig): any => ({
    ...obj,
  });
}

/**
 * <p> Information about updating the integration status of an Amazon Web Services service, such as
 * 			Amazon Web Services Systems Manager, with DevOps Guru. </p>
 */
export interface UpdateServiceIntegrationConfig {
  /**
   * <p> Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager
   * 			OpsCenter for each created insight. </p>
   */
  OpsCenter?: OpsCenterIntegrationConfig;
}

export namespace UpdateServiceIntegrationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationConfig): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationRequest {
  /**
   * <p> An <code>IntegratedServiceConfig</code> object used to specify the integrated service
   * 			you want to update, and whether you want to update it to enabled or disabled. </p>
   */
  ServiceIntegration: UpdateServiceIntegrationConfig | undefined;
}

export namespace UpdateServiceIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationResponse {}

export namespace UpdateServiceIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationResponse): any => ({
    ...obj,
  });
}
