// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";

/**
 * <p>You don't have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const PolicyType = {
  DATA_PROTECTION_POLICY: "DATA_PROTECTION_POLICY",
  FIELD_INDEX_POLICY: "FIELD_INDEX_POLICY",
  METRIC_EXTRACTION_POLICY: "METRIC_EXTRACTION_POLICY",
  SUBSCRIPTION_FILTER_POLICY: "SUBSCRIPTION_FILTER_POLICY",
  TRANSFORMER_POLICY: "TRANSFORMER_POLICY",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const Scope = {
  ALL: "ALL",
} as const;

/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * <p>A structure that contains information about one CloudWatch Logs account policy.</p>
 * @public
 */
export interface AccountPolicy {
  /**
   * <p>The name of the account policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The policy document for this account policy.</p>
   *          <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The date and time that this policy was most recently updated.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * <p>The type of policy for this account policy.</p>
   * @public
   */
  policyType?: PolicyType | undefined;

  /**
   * <p>The scope of the account policy.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The log group selection criteria that is used for this policy.</p>
   * @public
   */
  selectionCriteria?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the policy applies to.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>This object defines one key that will be added with the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKey"> addKeys</a> processor.</p>
 * @public
 */
export interface AddKeyEntry {
  /**
   * <p>The key of the new entry to be added to the log event</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the new entry to be added to the log event</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>Specifies whether to overwrite the value if the key already exists in the log event. If
   *       you omit this, the default is <code>false</code>.</p>
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * <p>This processor adds new key-value pairs to the log event. </p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKeys"> addKeys</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface AddKeys {
  /**
   * <p>An array of objects, where each object contains the information about one key to add to
   *       the log event. </p>
   * @public
   */
  entries: AddKeyEntry[] | undefined;
}

/**
 * <p>A structure that represents a valid record field header and whether it is
 *       mandatory.</p>
 * @public
 */
export interface RecordField {
  /**
   * <p>The name to use when specifying this record field in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html">UpdateDeliveryConfiguration</a> operation. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>If this is <code>true</code>, the record field must be present in the
   *         <code>recordFields</code> parameter provided to a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html">UpdateDeliveryConfiguration</a> operation.</p>
   * @public
   */
  mandatory?: boolean | undefined;
}

/**
 * <p>This structure contains the information for one sample log event that is associated with
 *       an anomaly found by a log anomaly detector.</p>
 * @public
 */
export interface LogEvent {
  /**
   * <p>The time stamp of the log event.</p>
   * @public
   */
  timestamp?: number | undefined;

  /**
   * <p>The message content of the log event.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>A structure that contains information about one pattern token related to an
 *       anomaly.</p>
 *          <p>For more information about patterns and tokens, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html">CreateLogAnomalyDetector</a>. </p>
 * @public
 */
export interface PatternToken {
  /**
   * <p>For a dynamic token, this indicates where in the pattern that this token appears, related
   *       to other dynamic tokens. The dynamic token that appears first has a value of <code>1</code>,
   *       the one that appears second is <code>2</code>, and so on.</p>
   * @public
   */
  dynamicTokenPosition?: number | undefined;

  /**
   * <p>Specifies whether this is a dynamic token.</p>
   * @public
   */
  isDynamic?: boolean | undefined;

  /**
   * <p>The string represented by this token. If this is a dynamic token, the value will be
   *         <code><*></code>
   *          </p>
   * @public
   */
  tokenString?: string | undefined;

  /**
   * <p>Contains the values found for a dynamic token, and the number of times each value was
   *       found.</p>
   * @public
   */
  enumerations?: Record<string, number> | undefined;

  /**
   * <p>A name that CloudWatch Logs assigned to this dynamic token to make the pattern more
   *       readable. The string part of the <code>inferredTokenName</code> gives you a clearer idea of
   *       the content of this token. The number part of the <code>inferredTokenName</code> shows where
   *       in the pattern this token appears, compared to other dynamic tokens. CloudWatch Logs
   *       assigns the string part of the name based on analyzing the content of the log events that
   *       contain it.</p>
   *          <p>For example, an inferred token name of <code>IPAddress-3</code> means that the token
   *       represents an IP address, and this token is the third dynamic token in the pattern.</p>
   * @public
   */
  inferredTokenName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const State = {
  Active: "Active",
  Baseline: "Baseline",
  Suppressed: "Suppressed",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * <p>This structure represents one anomaly that has been found by a logs anomaly
 *       detector.</p>
 *          <p>For more information about patterns and anomalies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html">CreateLogAnomalyDetector</a>. </p>
 * @public
 */
export interface Anomaly {
  /**
   * <p>The unique ID that CloudWatch Logs assigned to this anomaly.</p>
   * @public
   */
  anomalyId: string | undefined;

  /**
   * <p>The ID of the pattern used to help identify this anomaly.</p>
   * @public
   */
  patternId: string | undefined;

  /**
   * <p>The ARN of the anomaly detector that identified this anomaly.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * <p>The pattern used to help identify this anomaly, in string format.</p>
   * @public
   */
  patternString: string | undefined;

  /**
   * <p>The pattern used to help identify this anomaly, in regular expression format.</p>
   * @public
   */
  patternRegex?: string | undefined;

  /**
   * <p>The priority level of this anomaly, as determined by CloudWatch Logs. Priority is
   *       computed based on log severity labels such as <code>FATAL</code> and <code>ERROR</code> and
   *       the amount of deviation from the baseline. Possible values are <code>HIGH</code>,
   *         <code>MEDIUM</code>, and <code>LOW</code>.</p>
   * @public
   */
  priority?: string | undefined;

  /**
   * <p>The date and time when the anomaly detector first saw this anomaly. It is specified as
   *       epoch time, which is the number of seconds since <code>January 1, 1970, 00:00:00
   *       UTC</code>.</p>
   * @public
   */
  firstSeen: number | undefined;

  /**
   * <p>The date and time when the anomaly detector most recently saw this anomaly. It is
   *       specified as epoch time, which is the number of seconds since <code>January 1, 1970, 00:00:00
   *         UTC</code>.</p>
   * @public
   */
  lastSeen: number | undefined;

  /**
   * <p>A human-readable description of the anomaly. This description is generated by CloudWatch Logs.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>Specifies whether this anomaly is still ongoing.</p>
   * @public
   */
  active: boolean | undefined;

  /**
   * <p>Indicates the current state of this anomaly. If it is still being treated as an anomaly,
   *       the value is <code>Active</code>. If you have suppressed this anomaly by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html">UpdateAnomaly</a> operation, the value is <code>Suppressed</code>. If this behavior is
   *       now considered to be normal, the value is <code>Baseline</code>.</p>
   * @public
   */
  state: State | undefined;

  /**
   * <p>A map showing times when the anomaly detector ran, and the number of occurrences of this
   *       anomaly that were detected at each of those runs. The times are specified in epoch time, which
   *       is the number of seconds since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   * @public
   */
  histogram: Record<string, number> | undefined;

  /**
   * <p>An array of sample log event messages that are considered to be part of this
   *       anomaly.</p>
   * @public
   */
  logSamples: LogEvent[] | undefined;

  /**
   * <p>An array of structures where each structure contains information about one token that
   *       makes up the pattern.</p>
   * @public
   */
  patternTokens: PatternToken[] | undefined;

  /**
   * <p>An array of ARNS of the log groups that contained log events considered to be part of this
   *       anomaly.</p>
   * @public
   */
  logGroupArnList: string[] | undefined;

  /**
   * <p>Indicates whether this anomaly is currently suppressed. To suppress an anomaly, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html">UpdateAnomaly</a>.</p>
   * @public
   */
  suppressed?: boolean | undefined;

  /**
   * <p>If the anomaly is suppressed, this indicates when it was suppressed.</p>
   * @public
   */
  suppressedDate?: number | undefined;

  /**
   * <p>If the anomaly is suppressed, this indicates when the suppression will end. If this value
   *       is <code>0</code>, the anomaly was suppressed with no expiration, with the
   *         <code>INFINITE</code> value.</p>
   * @public
   */
  suppressedUntil?: number | undefined;

  /**
   * <p>If this anomaly is suppressed, this field is <code>true</code> if the suppression is
   *       because the pattern is suppressed. If <code>false</code>, then only this particular anomaly is
   *       suppressed.</p>
   * @public
   */
  isPatternLevelSuppression?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const AnomalyDetectorStatus = {
  ANALYZING: "ANALYZING",
  DELETED: "DELETED",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  PAUSED: "PAUSED",
  TRAINING: "TRAINING",
} as const;

/**
 * @public
 */
export type AnomalyDetectorStatus = (typeof AnomalyDetectorStatus)[keyof typeof AnomalyDetectorStatus];

/**
 * @public
 * @enum
 */
export const EvaluationFrequency = {
  FIFTEEN_MIN: "FIFTEEN_MIN",
  FIVE_MIN: "FIVE_MIN",
  ONE_HOUR: "ONE_HOUR",
  ONE_MIN: "ONE_MIN",
  TEN_MIN: "TEN_MIN",
  THIRTY_MIN: "THIRTY_MIN",
} as const;

/**
 * @public
 */
export type EvaluationFrequency = (typeof EvaluationFrequency)[keyof typeof EvaluationFrequency];

/**
 * <p>Contains information about one anomaly detector in the account.</p>
 * @public
 */
export interface AnomalyDetector {
  /**
   * <p>The ARN of the anomaly detector.</p>
   * @public
   */
  anomalyDetectorArn?: string | undefined;

  /**
   * <p>The name of the anomaly detector.</p>
   * @public
   */
  detectorName?: string | undefined;

  /**
   * <p>A list of the ARNs of the log groups that this anomaly detector watches.</p>
   * @public
   */
  logGroupArnList?: string[] | undefined;

  /**
   * <p>Specifies how often the anomaly detector runs and look for anomalies.</p>
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>Specifies the current status of the anomaly detector. To pause an anomaly detector, use
   *       the <code>enabled</code> parameter in the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html">UpdateLogAnomalyDetector</a> operation.</p>
   * @public
   */
  anomalyDetectorStatus?: AnomalyDetectorStatus | undefined;

  /**
   * <p>The ARN of the KMS key assigned to this anomaly detector, if any.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The date and time when this anomaly detector was created.</p>
   * @public
   */
  creationTimeStamp?: number | undefined;

  /**
   * <p>The date and time when this anomaly detector was most recently modified.</p>
   * @public
   */
  lastModifiedTimeStamp?: number | undefined;

  /**
   * <p>The number of days used as the life cycle of anomalies. After this time, anomalies are
   *       automatically baselined and the anomaly detector model will treat new occurrences of similar
   *       event as normal. </p>
   * @public
   */
  anomalyVisibilityTime?: number | undefined;
}

/**
 * @public
 */
export interface AssociateKmsKeyRequest {
  /**
   * <p>The name of the log group.</p>
   *          <p>In your <code>AssociateKmsKey</code> operation, you must specify either the
   *         <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you
   *       can't specify both.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log
   *       data. This must be a symmetric KMS key. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric
   *         Keys</a>.</p>
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * <p>Specifies the target for this operation. You must specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Specify the following ARN to have future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> operations in this account encrypt the results with the
   *           specified KMS key. Replace <i>REGION</i> and
   *             <i>ACCOUNT_ID</i> with your Region and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:query-result:*</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the ARN of a log group to have CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log
   *           group. The log group ARN must be in the following format. Replace
   *             <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and
   *           account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:log-group:<i>LOG_GROUP_NAME</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In your <code>AssociateKmsKey</code> operation, you must specify either the
   *         <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you
   *       can't specify both.</p>
   * @public
   */
  resourceIdentifier?: string | undefined;
}

/**
 * <p>A parameter is specified incorrectly.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 * @public
 */
export class OperationAbortedException extends __BaseException {
  readonly name: "OperationAbortedException" = "OperationAbortedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationAbortedException, __BaseException>) {
    super({
      name: "OperationAbortedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationAbortedException.prototype);
  }
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The service cannot complete the request.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface CancelExportTaskRequest {
  /**
   * <p>The ID of the export task.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * <p>The operation is not valid on the specified resource.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  JSON: "json",
  PARQUET: "parquet",
  PLAIN: "plain",
  RAW: "raw",
  W3C: "w3c",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * <p>This structure contains delivery configurations that apply only when the delivery
 *       destination resource is an S3 bucket.</p>
 * @public
 */
export interface S3DeliveryConfiguration {
  /**
   * <p>This string allows re-configuring the S3 object prefix to contain either static or
   *       variable sections. The valid variables to use in the suffix path will vary by each log source.
   *       To find the values supported for the suffix path for each log source, use the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeConfigurationTemplates.html">DescribeConfigurationTemplates</a> operation and check the
   *         <code>allowedSuffixPathFields</code> field in the response.</p>
   * @public
   */
  suffixPath?: string | undefined;

  /**
   * <p>This parameter causes the S3 objects that contain delivered logs to use a prefix structure
   *       that allows for integration with Apache Hive.</p>
   * @public
   */
  enableHiveCompatiblePath?: boolean | undefined;
}

/**
 * <p>This structure contains the default values that are used for each configuration parameter
 *       when you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> to create a deliver under the current service type, resource type,
 *       and log type.</p>
 * @public
 */
export interface ConfigurationTemplateDeliveryConfigValues {
  /**
   * <p>The default record fields that will be delivered when a list of record fields is not
   *       provided in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> operation.</p>
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * <p>The default field delimiter that is used in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> operation when the field delimiter is not specified in that
   *       operation. The field delimiter is used only when the final output delivery is in
   *         <code>Plain</code>, <code>W3C</code>, or <code>Raw</code> format.</p>
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * <p>The delivery parameters that are used when you create a delivery to a delivery destination
   *       that is an S3 Bucket.</p>
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const DeliveryDestinationType = {
  CWL: "CWL",
  FH: "FH",
  S3: "S3",
  XRAY: "XRAY",
} as const;

/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];

/**
 * <p>A structure containing information about the deafult settings and available settings that
 *       you can use to configure a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Delivery.html">delivery</a> or a
 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeliveryDestination.html">delivery
 *         destination</a>.</p>
 * @public
 */
export interface ConfigurationTemplate {
  /**
   * <p>A string specifying which service this configuration template applies to. For more
   *       information about supported services see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enable logging from
   *           Amazon Web Services services.</a>.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>A string specifying which log type this configuration template applies to.</p>
   * @public
   */
  logType?: string | undefined;

  /**
   * <p>A string specifying which resource type this configuration template applies to.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>A string specifying which destination type this configuration template applies to.</p>
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>A mapping that displays the default value of each property within a delivery's
   *       configuration, if it is not specified in the request.</p>
   * @public
   */
  defaultDeliveryConfigValues?: ConfigurationTemplateDeliveryConfigValues | undefined;

  /**
   * <p>The allowed fields that a caller can use in the <code>recordFields</code> parameter of a
   *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html">UpdateDeliveryConfiguration</a> operation.</p>
   * @public
   */
  allowedFields?: RecordField[] | undefined;

  /**
   * <p>The list of delivery destination output formats that are supported by this log
   *       source.</p>
   * @public
   */
  allowedOutputFormats?: OutputFormat[] | undefined;

  /**
   * <p>The action permissions that a caller needs to have to be able to successfully create a
   *       delivery source on the desired resource type when calling <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
   * @public
   */
  allowedActionForAllowVendedLogsDeliveryForResource?: string | undefined;

  /**
   * <p>The valid values that a caller can use as field delimiters when calling <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html">UpdateDeliveryConfiguration</a> on a delivery that delivers in <code>Plain</code>,
   *         <code>W3C</code>, or <code>Raw</code> format.</p>
   * @public
   */
  allowedFieldDelimiters?: string[] | undefined;

  /**
   * <p>The list of variable fields that can be used in the suffix path of a delivery that
   *       delivers to an S3 bucket.</p>
   * @public
   */
  allowedSuffixPathFields?: string[] | undefined;
}

/**
 * <p>This operation attempted to create a resource that already exists.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>This object defines one value to be copied with the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-copoyValue"> copyValue</a> processor.</p>
 * @public
 */
export interface CopyValueEntry {
  /**
   * <p>The key to copy.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The key of the field to copy the value to.</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>Specifies whether to overwrite the value if the destination key already exists. If you
   *       omit this, the default is <code>false</code>.</p>
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * <p>This processor copies values within a log event. You can also use this processor to add
 *       metadata to log events by copying the values of the following metadata keys into the log
 *       events: <code>@logGroupName</code>, <code>@logGroupStream</code>, <code>@accountId</code>,
 *         <code>@regionName</code>. </p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-copyValue"> copyValue</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface CopyValue {
  /**
   * <p>An array of <code>CopyValueEntry</code> objects, where each object contains the
   *       information about one field value to copy. </p>
   * @public
   */
  entries: CopyValueEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryRequest {
  /**
   * <p>The name of the delivery source to use for this delivery.</p>
   * @public
   */
  deliverySourceName: string | undefined;

  /**
   * <p>The ARN of the delivery destination to use for this delivery.</p>
   * @public
   */
  deliveryDestinationArn: string | undefined;

  /**
   * <p>The list of record fields to be delivered to the destination, in order. If the delivery's
   *       log source has mandatory fields, they must be included in this list.</p>
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * <p>The field delimiter to use between record fields when the final output format of a
   *       delivery is in <code>Plain</code>, <code>W3C</code>, or <code>Raw</code> format.</p>
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * <p>This structure contains parameters that are valid only when the delivery's delivery
   *       destination is an S3 bucket.</p>
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;

  /**
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This structure contains information about one <i>delivery</i> in your
 *       account. </p>
 *          <p>A delivery is a connection between a logical <i>delivery source</i> and a
 *       logical <i>delivery destination</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *          <p>To update an existing delivery configuration, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html">UpdateDeliveryConfiguration</a>.</p>
 * @public
 */
export interface Delivery {
  /**
   * <p>The unique ID that identifies this delivery in your account.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this delivery.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the delivery source that is associated with this delivery.</p>
   * @public
   */
  deliverySourceName?: string | undefined;

  /**
   * <p>The ARN of the delivery destination that is associated with this delivery.</p>
   * @public
   */
  deliveryDestinationArn?: string | undefined;

  /**
   * <p>Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, Firehose, or X-Ray.</p>
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The record fields used in this delivery.</p>
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * <p>The field delimiter that is used between record fields when the final output format of a
   *       delivery is in <code>Plain</code>, <code>W3C</code>, or <code>Raw</code> format.</p>
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * <p>This structure contains delivery configurations that apply only when the delivery
   *       destination resource is an S3 bucket.</p>
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;

  /**
   * <p>The tags that have been assigned to this delivery.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryResponse {
  /**
   * <p>A structure that contains information about the delivery that you just created.</p>
   * @public
   */
  delivery?: Delivery | undefined;
}

/**
 * <p>This request exceeds a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request was throttled because of quota limits.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>One of the parameters for the request is not valid.</p>
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
export interface CreateExportTaskRequest {
  /**
   * <p>The name of the export task.</p>
   * @public
   */
  taskName?: string | undefined;

  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>Export only log streams that match the provided prefix. If you don't specify a value,
   *       no prefix filter is applied.</p>
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * <p>The start time of the range for the request, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp earlier than this time
   *       are not exported.</p>
   * @public
   */
  from: number | undefined;

  /**
   * <p>The end time of the range for the request, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp later than this time are
   *       not exported.</p>
   *          <p>You must specify a time that is not earlier than when this log group was created.</p>
   * @public
   */
  to: number | undefined;

  /**
   * <p>The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The prefix used as the start of the key for every object exported. If you don't specify
   *       a value, the default is <code>exportedlogs</code>.</p>
   *          <p>The length of this parameter must comply with the S3 object key name length limits. The
   *       object key name is a sequence of Unicode characters with UTF-8 encoding, and can be up to
   *       1,024 bytes.</p>
   * @public
   */
  destinationPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateExportTaskResponse {
  /**
   * <p>The ID of the export task.</p>
   * @public
   */
  taskId?: string | undefined;
}

/**
 * <p>You have reached the maximum number of resources that can be created.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The specified resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface CreateLogAnomalyDetectorRequest {
  /**
   * <p>An array containing the ARN of the log group that this anomaly detector will watch. You
   *       can specify only one log group ARN.</p>
   * @public
   */
  logGroupArnList: string[] | undefined;

  /**
   * <p>A name for this anomaly detector.</p>
   * @public
   */
  detectorName?: string | undefined;

  /**
   * <p>Specifies how often the anomaly detector is to run and look for anomalies. Set this value
   *       according to the frequency that the log group receives new logs. For example, if the log group
   *       receives new log events every 10 minutes, then 15 minutes might be a good setting for
   *         <code>evaluationFrequency</code> .</p>
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * <p>You can use this parameter to limit the anomaly detection model to examine only log events
   *       that match the pattern you specify here. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern
   *         Syntax</a>.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>Optionally assigns a KMS key to secure this anomaly detector and its
   *       findings. If a key is assigned, the anomalies found and the model used by this detector are
   *       encrypted at rest with the key. If a key is assigned to an anomaly detector, a user must have
   *       permissions for both this key and for the anomaly detector to retrieve information about the
   *       anomalies that it finds.</p>
   *          <p> Make sure the value provided is a valid KMS key ARN. For more information
   *       about using a KMS key and to see the required IAM policy, see
   *         <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection-KMS.html">Use a KMS key with an anomaly detector</a>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The number of days to have visibility on an anomaly. After this time period has elapsed
   *       for an anomaly, it will be automatically baselined and the anomaly detector will treat new
   *       occurrences of a similar anomaly as normal. Therefore, if you do not correct the cause of an
   *       anomaly during the time period specified in <code>anomalyVisibilityTime</code>, it will be
   *       considered normal going forward and will not be detected as an anomaly.</p>
   * @public
   */
  anomalyVisibilityTime?: number | undefined;

  /**
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLogAnomalyDetectorResponse {
  /**
   * <p>The ARN of the log anomaly detector that you just created.</p>
   * @public
   */
  anomalyDetectorArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogGroupClass = {
  DELIVERY: "DELIVERY",
  INFREQUENT_ACCESS: "INFREQUENT_ACCESS",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type LogGroupClass = (typeof LogGroupClass)[keyof typeof LogGroupClass];

/**
 * @public
 */
export interface CreateLogGroupRequest {
  /**
   * <p>A name for the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log
   *       data. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource
   *         Names</a>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The key-value pairs to use for the tags.</p>
   *          <p>You can grant users access to certain log groups while preventing them from accessing
   *       other log groups. To do so, tag your groups and use IAM policies that refer to
   *       those tags. To assign tags when you create a log group, you must have either the
   *         <code>logs:TagResource</code> or <code>logs:TagLogGroup</code> permission. For more
   *       information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>. For
   *       more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services
   *         resources using tags</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Use this parameter to specify the log group class for this log group. There are three
   *       classes:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs
   *           features and incurs lower costs.</p>
   *             </li>
   *             <li>
   *                <p>Use the <code>Delivery</code> log class only for delivering Lambda
   *           logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in
   *           the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't
   *           offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights
   *           queries.</p>
   *             </li>
   *          </ul>
   *          <p>If you omit this parameter, the default of <code>STANDARD</code> is used.</p>
   *          <important>
   *             <p>The value of <code>logGroupClass</code> can't be changed after a log group is
   *         created.</p>
   *          </important>
   *          <p>For details about the features supported by each class, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;
}

/**
 * @public
 */
export interface CreateLogStreamRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  logStreamName: string | undefined;
}

/**
 * <p>The <code>CSV</code> processor parses comma-separated values (CSV) from the log events
 *       into columns.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-csv"> csv</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface CSV {
  /**
   * <p>The character used used as a text qualifier for a single column of data. If you omit this,
   *       the double quotation mark <code>"</code> character is used.</p>
   * @public
   */
  quoteCharacter?: string | undefined;

  /**
   * <p>The character used to separate each column in the original comma-separated value log
   *       event. If you omit this, the processor looks for the comma <code>,</code> character as the
   *       delimiter.</p>
   * @public
   */
  delimiter?: string | undefined;

  /**
   * <p>An array of names to use for the columns in the transformed log event.</p>
   *          <p>If you omit this, default column names (<code>[column_1, column_2 ...]</code>) are
   *       used.</p>
   * @public
   */
  columns?: string[] | undefined;

  /**
   * <p>The path to the field in the log event that has the comma separated values to be parsed.
   *       If you omit this value, the whole log message is processed.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>The event was already logged.</p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code> actions are now always accepted and never return
 *           <code>DataAlreadyAcceptedException</code> regardless of whether a given batch of log
 *         events has already been accepted. </p>
 *          </important>
 * @public
 */
export class DataAlreadyAcceptedException extends __BaseException {
  readonly name: "DataAlreadyAcceptedException" = "DataAlreadyAcceptedException";
  readonly $fault: "client" = "client";
  expectedSequenceToken?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataAlreadyAcceptedException, __BaseException>) {
    super({
      name: "DataAlreadyAcceptedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataAlreadyAcceptedException.prototype);
    this.expectedSequenceToken = opts.expectedSequenceToken;
  }
}

/**
 * @public
 * @enum
 */
export const DataProtectionStatus = {
  ACTIVATED: "ACTIVATED",
  ARCHIVED: "ARCHIVED",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type DataProtectionStatus = (typeof DataProtectionStatus)[keyof typeof DataProtectionStatus];

/**
 * <p>This processor converts a datetime string into a format that you specify. </p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-datetimeConverter"> datetimeConverter</a> in the <i>CloudWatch Logs User
 *       Guide</i>.</p>
 * @public
 */
export interface DateTimeConverter {
  /**
   * <p>The key to apply the date conversion to.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The JSON field to store the result in.</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>The datetime format to use for the converted data in the target field.</p>
   *          <p>If you omit this, the default of <code> yyyy-MM-dd'T'HH:mm:ss.SSS'Z</code> is used.</p>
   * @public
   */
  targetFormat?: string | undefined;

  /**
   * <p>A list of patterns to match against the <code>source</code> field.</p>
   * @public
   */
  matchPatterns: string[] | undefined;

  /**
   * <p>The time zone of the source field. If you omit this, the default used is the UTC
   *       zone.</p>
   * @public
   */
  sourceTimezone?: string | undefined;

  /**
   * <p>The time zone of the target field. If you omit this, the default used is the UTC
   *       zone.</p>
   * @public
   */
  targetTimezone?: string | undefined;

  /**
   * <p>The locale of the source field. If you omit this, the default of <code>locale.ROOT</code>
   *       is used.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountPolicyRequest {
  /**
   * <p>The name of the policy to delete.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The type of policy to delete.</p>
   * @public
   */
  policyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface DeleteDataProtectionPolicyRequest {
  /**
   * <p>The name or ARN of the log group that you want to delete the data protection policy
   *       for.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryRequest {
  /**
   * <p>The unique ID of the delivery to delete. You can find the ID of a delivery with the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html">DescribeDeliveries</a> operation.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryDestinationRequest {
  /**
   * <p>The name of the delivery destination that you want to delete. You can find a list of
   *       delivery destination names by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html">DescribeDeliveryDestinations</a> operation.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryDestinationPolicyRequest {
  /**
   * <p>The name of the delivery destination that you want to delete the policy for.</p>
   * @public
   */
  deliveryDestinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliverySourceRequest {
  /**
   * <p>The name of the delivery source that you want to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * <p>The name of the destination.</p>
   * @public
   */
  destinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexPolicyRequest {
  /**
   * <p>The log group to delete the index policy for. You can specify either the name or the ARN
   *       of the log group.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexPolicyResponse {}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * <p>The name of the integration to delete. To find the name of your integration, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListIntegrations.html">ListIntegrations</a>.</p>
   * @public
   */
  integrationName: string | undefined;

  /**
   * <p>Specify <code>true</code> to force the deletion of the integration even if vended logs
   *       dashboards currently exist.</p>
   *          <p>The default is <code>false</code>.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponse {}

/**
 * <p>This processor deletes entries from a log event. These entries are key-value pairs. </p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-deleteKeys"> deleteKeys</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface DeleteKeys {
  /**
   * <p>The list of keys to delete.</p>
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteLogAnomalyDetectorRequest {
  /**
   * <p>The ARN of the anomaly detector to delete. You can find the ARNs of log anomaly detectors
   *       in your account by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html">ListLogAnomalyDetectors</a> operation.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogStreamRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  logStreamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricFilterRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the metric filter.</p>
   * @public
   */
  filterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueryDefinitionRequest {
  /**
   * <p>The ID of the query definition that you want to delete. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the IDs of your saved query
   *       definitions.</p>
   * @public
   */
  queryDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueryDefinitionResponse {
  /**
   * <p>A value of TRUE indicates that the operation succeeded. FALSE indicates that the operation
   *       failed.</p>
   * @public
   */
  success?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The name of the policy to be revoked. This parameter is required.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs resource for which the resource policy needs to be
   *       deleted</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The expected revision ID of the resource policy. Required when deleting a resource-scoped
   *       policy to prevent concurrent modifications.</p>
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetentionPolicyRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionFilterRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the subscription filter.</p>
   * @public
   */
  filterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTransformerRequest {
  /**
   * <p>Specify either the name or ARN of the log group to delete the transformer for. If the log
   *       group is in a source account and you are using a monitoring account, you must use the log
   *       group ARN.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * <p>A structure that contains information about one logs delivery destination.</p>
 * @public
 */
export interface DeliveryDestinationConfiguration {
  /**
   * <p>The ARN of the Amazon Web Services destination that this delivery destination represents.
   *       That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.</p>
   * @public
   */
  destinationResourceArn: string | undefined;
}

/**
 * <p>This structure contains information about one <i>delivery destination</i> in
 *       your account. A delivery destination is an Amazon Web Services resource that represents an
 *         Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3,
 *         Firehose, and X-Ray are supported as delivery destinations.</p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a
 *       destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that
 *           is actually sending the logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery destination</i>, which is a logical object that
 *           represents the actual delivery destination. </p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a> in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *         </p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery</i> by pairing exactly one delivery source and one
 *           delivery destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by
 *       creating multiple deliveries. You can also create multiple deliveries to configure multiple
 *       delivery sources to send logs to the same delivery destination.</p>
 * @public
 */
export interface DeliveryDestination {
  /**
   * <p>The name of this delivery destination.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Displays whether this delivery destination is CloudWatch Logs, Amazon S3,
   *         Firehose, or X-Ray.</p>
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The format of the logs that are sent to this delivery destination. </p>
   * @public
   */
  outputFormat?: OutputFormat | undefined;

  /**
   * <p>A structure that contains the ARN of the Amazon Web Services resource that will receive the
   *       logs.</p>
   * @public
   */
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration | undefined;

  /**
   * <p>The tags that have been assigned to this delivery destination.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This structure contains information about one <i>delivery source</i> in your
 *       account. A delivery source is an Amazon Web Services resource that sends logs to an Amazon Web Services destination. The destination can be CloudWatch Logs, Amazon S3, or
 *         Firehose.</p>
 *          <p>Only some Amazon Web Services services support being configured as a delivery source. These
 *       services are listed as <b>Supported [V2 Permissions]</b> in the
 *       table at <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enabling logging from
 *           Amazon Web Services services.</a>
 *          </p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a
 *       destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that
 *           is actually sending the logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery destination</i>, which is a logical object that
 *           represents the actual delivery destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html">PutDeliveryDestination</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a> in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *         </p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery</i> by pairing exactly one delivery source and one
 *           delivery destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by
 *       creating multiple deliveries. You can also create multiple deliveries to configure multiple
 *       delivery sources to send logs to the same delivery destination.</p>
 * @public
 */
export interface DeliverySource {
  /**
   * <p>The unique name of the delivery source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this delivery source.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>This array contains the ARN of the Amazon Web Services resource that sends logs and is
   *       represented by this delivery source. Currently, only one ARN can be in the array.</p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>The Amazon Web Services service that is sending logs.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The type of log that the source is sending. For valid values for this parameter, see the
   *       documentation for the source service.</p>
   * @public
   */
  logType?: string | undefined;

  /**
   * <p>The tags that have been assigned to this delivery source.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPoliciesRequest {
  /**
   * <p>Use this parameter to limit the returned policies to only the policies that match the
   *       policy type that you specify.</p>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>Use this parameter to limit the returned policies to only the policy with the name that
   *       you specify.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>If you are using an account that is set up as a monitoring account for CloudWatch
   *       unified cross-account observability, you can use this to specify the account ID of a source
   *       account. If you do, the operation returns the account policy for the specified account.
   *       Currently, you can specify only one account ID in this parameter.</p>
   *          <p>If you omit this parameter, only the policy in the current account is returned.</p>
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPoliciesResponse {
  /**
   * <p>An array of structures that contain information about the CloudWatch Logs account
   *       policies that match the specified filters.</p>
   * @public
   */
  accountPolicies?: AccountPolicy[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationTemplatesRequest {
  /**
   * <p>Use this parameter to filter the response to include only the configuration templates that
   *       apply to the Amazon Web Services service that you specify here.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>Use this parameter to filter the response to include only the configuration templates that
   *       apply to the log types that you specify here.</p>
   * @public
   */
  logTypes?: string[] | undefined;

  /**
   * <p>Use this parameter to filter the response to include only the configuration templates that
   *       apply to the resource types that you specify here.</p>
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * <p>Use this parameter to filter the response to include only the configuration templates that
   *       apply to the delivery destination types that you specify here.</p>
   * @public
   */
  deliveryDestinationTypes?: DeliveryDestinationType[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Use this parameter to limit the number of configuration templates that are returned in the
   *       response.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationTemplatesResponse {
  /**
   * <p>An array of objects, where each object describes one configuration template that matches
   *       the filters that you specified in the request.</p>
   * @public
   */
  configurationTemplates?: ConfigurationTemplate[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveriesRequest {
  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optionally specify the maximum number of deliveries to return in the response.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveriesResponse {
  /**
   * <p>An array of structures. Each structure contains information about one delivery in the
   *       account.</p>
   * @public
   */
  deliveries?: Delivery[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryDestinationsRequest {
  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optionally specify the maximum number of delivery destinations to return in the
   *       response.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryDestinationsResponse {
  /**
   * <p>An array of structures. Each structure contains information about one delivery destination
   *       in the account.</p>
   * @public
   */
  deliveryDestinations?: DeliveryDestination[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliverySourcesRequest {
  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optionally specify the maximum number of delivery sources to return in the
   *       response.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDeliverySourcesResponse {
  /**
   * <p>An array of structures. Each structure contains information about one delivery source in
   *       the account.</p>
   * @public
   */
  deliverySources?: DeliverySource[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDestinationsRequest {
  /**
   * <p>The prefix to match. If you don't specify a value, no prefix filter is
   *       applied.</p>
   * @public
   */
  DestinationNamePrefix?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default maximum
   *       value of 50 items is used.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents a cross-account destination that receives subscription log events.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The name of the destination.</p>
   * @public
   */
  destinationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the physical target where the log events are
   *       delivered (for example, a Kinesis stream).</p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>A role for impersonation, used when delivering log events to the target.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>An IAM policy document that governs which Amazon Web Services accounts can create
   *       subscription filters against this destination.</p>
   * @public
   */
  accessPolicy?: string | undefined;

  /**
   * <p>The ARN of this destination.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The creation time of the destination, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   * @public
   */
  creationTime?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDestinationsResponse {
  /**
   * <p>The destinations.</p>
   * @public
   */
  destinations?: Destination[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportTaskStatusCode = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PENDING_CANCEL: "PENDING_CANCEL",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ExportTaskStatusCode = (typeof ExportTaskStatusCode)[keyof typeof ExportTaskStatusCode];

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * <p>The ID of the export task. Specifying a task ID filters the results to one or zero
   *       export tasks.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The status code of the export task. Specifying a status code filters the results to
   *       zero or more export tasks.</p>
   * @public
   */
  statusCode?: ExportTaskStatusCode | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up
   *       to 50 items.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents the status of an export task.</p>
 * @public
 */
export interface ExportTaskExecutionInfo {
  /**
   * <p>The creation time of the export task, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The completion time of the export task, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  completionTime?: number | undefined;
}

/**
 * <p>Represents the status of an export task.</p>
 * @public
 */
export interface ExportTaskStatus {
  /**
   * <p>The status code of the export task.</p>
   * @public
   */
  code?: ExportTaskStatusCode | undefined;

  /**
   * <p>The status message related to the status code.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Represents an export task.</p>
 * @public
 */
export interface ExportTask {
  /**
   * <p>The ID of the export task.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The name of the export task.</p>
   * @public
   */
  taskName?: string | undefined;

  /**
   * <p>The name of the log group from which logs data was exported.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The start time, expressed as the number of milliseconds after <code>Jan 1, 1970
   *         00:00:00 UTC</code>. Events with a timestamp before this time are not exported.</p>
   * @public
   */
  from?: number | undefined;

  /**
   * <p>The end time, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00
   *         UTC</code>. Events with a timestamp later than this time are not exported.</p>
   * @public
   */
  to?: number | undefined;

  /**
   * <p>The name of the S3 bucket to which the log data was exported.</p>
   * @public
   */
  destination?: string | undefined;

  /**
   * <p>The prefix that was used as the start of Amazon S3 key for every object
   *       exported.</p>
   * @public
   */
  destinationPrefix?: string | undefined;

  /**
   * <p>The status of the export task.</p>
   * @public
   */
  status?: ExportTaskStatus | undefined;

  /**
   * <p>Execution information about the export task.</p>
   * @public
   */
  executionInfo?: ExportTaskExecutionInfo | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksResponse {
  /**
   * <p>The export tasks.</p>
   * @public
   */
  exportTasks?: ExportTask[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFieldIndexesRequest {
  /**
   * <p>An array containing the names or ARNs of the log groups that you want to retrieve field
   *       indexes for.</p>
   * @public
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>This structure describes one log event field that is used as an index in at least one
 *       index policy in this account.</p>
 * @public
 */
export interface FieldIndex {
  /**
   * <p>If this field index appears in an index policy that applies only to a single log group,
   *       the ARN of that log group is displayed here.</p>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The string that this field index matches.</p>
   * @public
   */
  fieldIndexName?: string | undefined;

  /**
   * <p>The most recent time that CloudWatch Logs scanned ingested log events to search for
   *       this field index to improve the speed of future CloudWatch Logs Insights queries that
   *       search for this field index.</p>
   * @public
   */
  lastScanTime?: number | undefined;

  /**
   * <p>The time and date of the earliest log event that matches this field index, after the index
   *       policy that contains it was created. </p>
   * @public
   */
  firstEventTime?: number | undefined;

  /**
   * <p>The time and date of the most recent log event that matches this field index. </p>
   * @public
   */
  lastEventTime?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFieldIndexesResponse {
  /**
   * <p>An array containing the field index information.</p>
   * @public
   */
  fieldIndexes?: FieldIndex[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIndexPoliciesRequest {
  /**
   * <p>An array containing the name or ARN of the log group that you want to retrieve field index
   *       policies for.</p>
   * @public
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexSource = {
  ACCOUNT: "ACCOUNT",
  LOG_GROUP: "LOG_GROUP",
} as const;

/**
 * @public
 */
export type IndexSource = (typeof IndexSource)[keyof typeof IndexSource];

/**
 * <p>This structure contains information about one field index policy in this account.</p>
 * @public
 */
export interface IndexPolicy {
  /**
   * <p>The ARN of the log group that this index policy applies to.</p>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The date and time that this index policy was most recently updated.</p>
   * @public
   */
  lastUpdateTime?: number | undefined;

  /**
   * <p>The policy document for this index policy, in JSON format.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The name of this policy. Responses about log group-level field index policies don't have
   *       this field, because those policies don't have names.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>This field indicates whether this is an account-level index policy or an index policy that
   *       applies only to a single log group.</p>
   * @public
   */
  source?: IndexSource | undefined;
}

/**
 * @public
 */
export interface DescribeIndexPoliciesResponse {
  /**
   * <p>An array containing the field index policies.</p>
   * @public
   */
  indexPolicies?: IndexPolicy[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogGroupsRequest {
  /**
   * <p>When <code>includeLinkedAccounts</code> is set to <code>true</code>, use this parameter to
   *       specify the list of accounts to search. You can specify as many as 20 account IDs in the
   *       array. </p>
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * <p>The prefix to match.</p>
   *          <note>
   *             <p>
   *                <code>logGroupNamePrefix</code> and <code>logGroupNamePattern</code> are mutually exclusive.
   *         Only one of these parameters can be passed. </p>
   *          </note>
   * @public
   */
  logGroupNamePrefix?: string | undefined;

  /**
   * <p>If you specify a string for this parameter, the operation returns only log groups that
   *       have names that match the string based on a case-sensitive substring search. For example, if
   *       you specify <code>DataLogs</code>, log groups named <code>DataLogs</code>,
   *         <code>aws/DataLogs</code>, and <code>GroupDataLogs</code> would match, but
   *         <code>datalogs</code>, <code>Data/log/s</code> and <code>Groupdata</code> would not
   *       match.</p>
   *          <p>If you specify <code>logGroupNamePattern</code> in your request, then only
   *         <code>arn</code>, <code>creationTime</code>, and <code>logGroupName</code> are included in
   *       the response. </p>
   *          <note>
   *             <p>
   *                <code>logGroupNamePattern</code> and <code>logGroupNamePrefix</code> are mutually exclusive.
   *         Only one of these parameters can be passed. </p>
   *          </note>
   * @public
   */
  logGroupNamePattern?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up
   *       to 50 items.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>If you are using a monitoring account, set this to <code>true</code> to have the operation
   *       return log groups in the accounts listed in <code>accountIdentifiers</code>.</p>
   *          <p>If this parameter is set to <code>true</code> and <code>accountIdentifiers</code> contains
   *       a null value, the operation returns all log groups in the monitoring account and all log
   *       groups in all source accounts that are linked to the monitoring account. </p>
   *          <p>The default for this parameter is <code>false</code>.</p>
   * @public
   */
  includeLinkedAccounts?: boolean | undefined;

  /**
   * <p>Use this parameter to limit the results to only those log groups in the specified log
   *       group class. If you omit this parameter, log groups of all classes can be returned.</p>
   *          <p>Specifies the log group class for this log group. There are three classes:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs
   *           features and incurs lower costs.</p>
   *             </li>
   *             <li>
   *                <p>Use the <code>Delivery</code> log class only for delivering Lambda
   *           logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in
   *           the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't
   *           offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights
   *           queries.</p>
   *             </li>
   *          </ul>
   *          <p>For details about the features supported by each class, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * <p>Use this array to filter the list of log groups returned. If you specify this parameter,
   *       the only other filter that you can choose to specify is
   *       <code>includeLinkedAccounts</code>.</p>
   *          <p>If you are using this operation in a monitoring account, you can specify the ARNs of log
   *       groups in source accounts and in the monitoring account itself. If you are using this
   *       operation in an account that is not a cross-account monitoring account, you can specify only
   *       log group names in the same account as the operation.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InheritedProperty = {
  ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION",
} as const;

/**
 * @public
 */
export type InheritedProperty = (typeof InheritedProperty)[keyof typeof InheritedProperty];

/**
 * <p>Represents a log group.</p>
 * @public
 */
export interface LogGroup {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The creation time of the log group, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The number of days to retain the log events in the specified log group. Possible values
   *       are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557,
   *       2922, 3288, and 3653.</p>
   *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * <p>The number of metric filters.</p>
   * @public
   */
  metricFilterCount?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log group. This version of the ARN includes a
   *       trailing <code>:*</code> after the log group name. </p>
   *          <p>Use this version to refer to the ARN in IAM policies when specifying
   *       permissions for most API actions. The exception is when specifying permissions for <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>,
   *       and <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. The permissions for those three actions require the ARN
   *       version that doesn't include a trailing <code>:*</code>.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of bytes stored.</p>
   * @public
   */
  storedBytes?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when
   *       encrypting log data.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Displays whether this log group has a protection policy, or whether it had one in the
   *       past. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
   * @public
   */
  dataProtectionStatus?: DataProtectionStatus | undefined;

  /**
   * <p>Displays all the properties that this log group has inherited from account-level
   *       settings.</p>
   * @public
   */
  inheritedProperties?: InheritedProperty[] | undefined;

  /**
   * <p>This specifies the log group class for this log group. There are three classes:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs
   *           features and incurs lower costs.</p>
   *             </li>
   *             <li>
   *                <p>Use the <code>Delivery</code> log class only for delivering Lambda
   *           logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in
   *           the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't
   *           offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights
   *           queries.</p>
   *             </li>
   *          </ul>
   *          <p>For details about the features supported by the Standard and Infrequent Access classes,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log group. This version of the ARN doesn't
   *       include a trailing <code>:*</code> after the log group name. </p>
   *          <p>Use this version to refer to the ARN in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>In the <code>logGroupIdentifier</code> input field in many CloudWatch Logs
   *           APIs.</p>
   *             </li>
   *             <li>
   *                <p>In the <code>resourceArn</code> field in tagging APIs</p>
   *             </li>
   *             <li>
   *                <p>In IAM policies, when specifying permissions for <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>, <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>, and <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  logGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogGroupsResponse {
  /**
   * <p>An array of structures, where each structure contains the information about one log
   *       group.</p>
   * @public
   */
  logGroups?: LogGroup[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderBy = {
  LastEventTime: "LastEventTime",
  LogStreamName: "LogStreamName",
} as const;

/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];

/**
 * @public
 */
export interface DescribeLogStreamsRequest {
  /**
   * <p>The name of the log group.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Specify either the name or ARN of the log group to view. If the log group is in a source
   *       account and you are using a monitoring account, you must use the log group ARN.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The prefix to match.</p>
   *          <p>If <code>orderBy</code> is <code>LastEventTime</code>, you cannot specify this
   *       parameter.</p>
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * <p>If the value is <code>LogStreamName</code>, the results are ordered by log stream name.
   *       If the value is <code>LastEventTime</code>, the results are ordered by the event time. The
   *       default value is <code>LogStreamName</code>.</p>
   *          <p>If you order the results by event time, you cannot specify the
   *         <code>logStreamNamePrefix</code> parameter.</p>
   *          <p>
   *             <code>lastEventTimestamp</code> represents the time of the most recent log event in the
   *       log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>. <code>lastEventTimestamp</code> updates on an
   *       eventual consistency basis. It typically updates in less than an hour from ingestion, but in
   *       rare situations might take longer.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * <p>If the value is true, results are returned in descending order. If the value is to
   *       false, results are returned in ascending order. The default value is false.</p>
   * @public
   */
  descending?: boolean | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up
   *       to 50 items.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Represents a log stream, which is a sequence of log events from a single emitter of
 *       logs.</p>
 * @public
 */
export interface LogStream {
  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The creation time of the stream, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The time of the first event, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   * @public
   */
  firstEventTimestamp?: number | undefined;

  /**
   * <p>The time of the most recent log event in the log stream in CloudWatch Logs. This number
   *       is expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. The
   *         <code>lastEventTime</code> value updates on an eventual consistency basis. It typically
   *       updates in less than an hour from ingestion, but in rare situations might take
   *       longer.</p>
   * @public
   */
  lastEventTimestamp?: number | undefined;

  /**
   * <p>The ingestion time, expressed as the number of milliseconds after <code>Jan 1, 1970
   *         00:00:00 UTC</code> The <code>lastIngestionTime</code> value updates on an eventual
   *       consistency basis. It typically updates in less than an hour after ingestion, but in rare
   *       situations might take longer.</p>
   * @public
   */
  lastIngestionTime?: number | undefined;

  /**
   * <p>The sequence token.</p>
   *          <important>
   *             <p>The sequence token is now ignored in <code>PutLogEvents</code> actions.
   *           <code>PutLogEvents</code> actions are always accepted regardless of receiving an invalid
   *         sequence token. You don't need to obtain <code>uploadSequenceToken</code> to use a
   *           <code>PutLogEvents</code> action.</p>
   *          </important>
   * @public
   */
  uploadSequenceToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log stream.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of bytes stored.</p>
   *          <p>
   *             <b>Important:</b> As of June 17, 2019, this parameter is no
   *       longer supported for log streams, and is always reported as zero. This change applies only to
   *       log streams. The <code>storedBytes</code> parameter for log groups is not affected.</p>
   *
   * @deprecated
   * @public
   */
  storedBytes?: number | undefined;
}

/**
 * @public
 */
export interface DescribeLogStreamsResponse {
  /**
   * <p>The log streams.</p>
   * @public
   */
  logStreams?: LogStream[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricFiltersRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The prefix to match. CloudWatch Logs uses the value that you set here only if you also
   *       include the <code>logGroupName</code> parameter in your request.</p>
   * @public
   */
  filterNamePrefix?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up
   *       to 50 items.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Filters results to include only those with the specified metric name. If you include
   *       this parameter in your request, you must also include the <code>metricNamespace</code>
   *       parameter.</p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>Filters results to include only those in the specified namespace. If you include this
   *       parameter in your request, you must also include the <code>metricName</code>
   *       parameter.</p>
   * @public
   */
  metricNamespace?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StandardUnit = {
  Bits: "Bits",
  BitsSecond: "Bits/Second",
  Bytes: "Bytes",
  BytesSecond: "Bytes/Second",
  Count: "Count",
  CountSecond: "Count/Second",
  Gigabits: "Gigabits",
  GigabitsSecond: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  GigabytesSecond: "Gigabytes/Second",
  Kilobits: "Kilobits",
  KilobitsSecond: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  KilobytesSecond: "Kilobytes/Second",
  Megabits: "Megabits",
  MegabitsSecond: "Megabits/Second",
  Megabytes: "Megabytes",
  MegabytesSecond: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  TerabitsSecond: "Terabits/Second",
  Terabytes: "Terabytes",
  TerabytesSecond: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];

/**
 * <p>Indicates how to transform ingested log events to metric data in a CloudWatch
 *       metric.</p>
 * @public
 */
export interface MetricTransformation {
  /**
   * <p>The name of the CloudWatch metric.</p>
   * @public
   */
  metricName: string | undefined;

  /**
   * <p>A custom namespace to contain your metric in CloudWatch. Use namespaces to group
   *       together metrics that are similar. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace">Namespaces</a>.</p>
   * @public
   */
  metricNamespace: string | undefined;

  /**
   * <p>The value to publish to the CloudWatch metric when a filter pattern matches a log
   *       event.</p>
   * @public
   */
  metricValue: string | undefined;

  /**
   * <p>(Optional) The value to emit when a filter pattern does not match a log event. This
   *       value can be null.</p>
   * @public
   */
  defaultValue?: number | undefined;

  /**
   * <p>The fields to use as dimensions for the metric. One metric filter can include as many as
   *       three dimensions.</p>
   *          <important>
   *             <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected
   *         high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or
   *           <code>requestID</code> as dimensions. Each different value found for a dimension is
   *         treated as a separate metric and accrues charges as a separate custom metric. </p>
   *             <p>CloudWatch Logs disables a metric filter if it generates 1000 different name/value
   *         pairs for your specified dimensions within a certain amount of time. This helps to prevent
   *         accidental high charges.</p>
   *             <p>You can also set up a billing alarm to alert you if your charges are higher than
   *         expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">
   *           Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>.
   *       </p>
   *          </important>
   * @public
   */
  dimensions?: Record<string, string> | undefined;

  /**
   * <p>The unit to assign to the metric. If you omit this, the unit is set as
   *       <code>None</code>.</p>
   * @public
   */
  unit?: StandardUnit | undefined;
}

/**
 * <p>Metric filters express how CloudWatch Logs would extract metric observations from
 *       ingested log events and transform them into metric data in a CloudWatch metric.</p>
 * @public
 */
export interface MetricFilter {
  /**
   * <p>The name of the metric filter.</p>
   * @public
   */
  filterName?: string | undefined;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>The metric transformations.</p>
   * @public
   */
  metricTransformations?: MetricTransformation[] | undefined;

  /**
   * <p>The creation time of the metric filter, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>This parameter is valid only for log groups that have an active log transformer. For more
   *       information about log transformers, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html">PutTransformer</a>.</p>
   *          <p>If this value is <code>true</code>, the metric filter is applied on the transformed
   *       version of the log events instead of the original ingested log events.</p>
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * <p>The filter expression that specifies which log events are processed by this metric filter based on system fields. Returns the <code>fieldSelectionCriteria</code> value if it was specified when the metric filter was created.</p>
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * <p>The list of system fields that are emitted as additional dimensions in the generated metrics. Returns the <code>emitSystemFieldDimensions</code> value if it was specified when the metric filter was created.</p>
   * @public
   */
  emitSystemFieldDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetricFiltersResponse {
  /**
   * <p>The metric filters.</p>
   * @public
   */
  metricFilters?: MetricFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryLanguage = {
  CWLI: "CWLI",
  PPL: "PPL",
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  Cancelled: "Cancelled",
  Complete: "Complete",
  Failed: "Failed",
  Running: "Running",
  Scheduled: "Scheduled",
  Timeout: "Timeout",
  Unknown: "Unknown",
} as const;

/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 */
export interface DescribeQueriesRequest {
  /**
   * <p>Limits the returned queries to only those for the specified log group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Limits the returned queries to only those that have the specified status. Valid values are
   *         <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>,
   *       and <code>Scheduled</code>.</p>
   * @public
   */
  status?: QueryStatus | undefined;

  /**
   * <p>Limits the number of returned queries to the specified number.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Limits the returned queries to only the queries that use the specified query
   *       language.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;
}

/**
 * <p>Information about one CloudWatch Logs Insights query that matches the request in a
 *         <code>DescribeQueries</code> operation. </p>
 * @public
 */
export interface QueryInfo {
  /**
   * <p>The query language used for this query. For more information about the query languages
   *       that CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
   *         languages</a>.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>The unique ID number of this query.</p>
   * @public
   */
  queryId?: string | undefined;

  /**
   * <p>The query string used in this query.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The status of this query. Possible values are <code>Cancelled</code>,
   *         <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>,
   *       and <code>Unknown</code>.</p>
   * @public
   */
  status?: QueryStatus | undefined;

  /**
   * <p>The date and time that this query was created.</p>
   * @public
   */
  createTime?: number | undefined;

  /**
   * <p>The name of the log group scanned by this query.</p>
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueriesResponse {
  /**
   * <p>The list of queries that match the request.</p>
   * @public
   */
  queries?: QueryInfo[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueryDefinitionsRequest {
  /**
   * <p>The query language used for this query. For more information about the query languages
   *       that CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
   *         languages</a>.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>Use this parameter to filter your results to only the query definitions that have names
   *       that start with the prefix you specify.</p>
   * @public
   */
  queryDefinitionNamePrefix?: string | undefined;

  /**
   * <p>Limits the number of returned query definitions to the specified number.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>This structure contains details about a saved CloudWatch Logs Insights query
 *       definition.</p>
 * @public
 */
export interface QueryDefinition {
  /**
   * <p>The query language used for this query. For more information about the query languages
   *       that CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
   *         languages</a>.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>The unique ID of the query definition.</p>
   * @public
   */
  queryDefinitionId?: string | undefined;

  /**
   * <p>The name of the query definition.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The query string to use for this definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs
   *         Insights Query Syntax</a>.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The date that the query definition was most recently modified.</p>
   * @public
   */
  lastModified?: number | undefined;

  /**
   * <p>If this query definition contains a list of log groups that it is limited to, that list
   *       appears here.</p>
   * @public
   */
  logGroupNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeQueryDefinitionsResponse {
  /**
   * <p>The list of query definitions that match your request.</p>
   * @public
   */
  queryDefinitions?: QueryDefinition[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyScope = {
  ACCOUNT: "ACCOUNT",
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type PolicyScope = (typeof PolicyScope)[keyof typeof PolicyScope];

/**
 * @public
 */
export interface DescribeResourcePoliciesRequest {
  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of resource policies to be displayed with one call of this
   *       API.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs resource for which to query the resource policy.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>Specifies the scope of the resource policy. Valid values are <code>ACCOUNT</code> or
   *         <code>RESOURCE</code>. When not specified, defaults to <code>ACCOUNT</code>.</p>
   * @public
   */
  policyScope?: PolicyScope | undefined;
}

/**
 * <p>A policy enabling one or more entities to put logs to a log group in this
 *       account.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>The name of the resource policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The details of the policy.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>Timestamp showing when this policy was last updated, expressed as the number of
   *       milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * <p>Specifies scope of the resource policy. Valid values are ACCOUNT or RESOURCE.</p>
   * @public
   */
  policyScope?: PolicyScope | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs resource to which the resource policy is attached. Only
   *       populated for resource-scoped policies.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The revision ID of the resource policy. Only populated for resource-scoped
   *       policies.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePoliciesResponse {
  /**
   * <p>The resource policies that exist in this account.</p>
   * @public
   */
  resourcePolicies?: ResourcePolicy[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionFiltersRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The prefix to match. If you don't specify a value, no prefix filter is
   *       applied.</p>
   * @public
   */
  filterNamePrefix?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up
   *       to 50 items.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Distribution = {
  ByLogStream: "ByLogStream",
  Random: "Random",
} as const;

/**
 * @public
 */
export type Distribution = (typeof Distribution)[keyof typeof Distribution];

/**
 * <p>Represents a subscription filter.</p>
 * @public
 */
export interface SubscriptionFilter {
  /**
   * <p>The name of the subscription filter.</p>
   * @public
   */
  filterName?: string | undefined;

  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  destinationArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The method used to distribute log data to the destination, which can be either random
   *       or grouped by log stream.</p>
   * @public
   */
  distribution?: Distribution | undefined;

  /**
   * <p>This parameter is valid only for log groups that have an active log transformer. For more
   *       information about log transformers, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html">PutTransformer</a>.</p>
   *          <p>If this value is <code>true</code>, the subscription filter is applied on the transformed
   *       version of the log events instead of the original ingested log events.</p>
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * <p>The creation time of the subscription filter, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The filter expression that specifies which log events are processed by this subscription filter based on system fields. Returns the <code>fieldSelectionCriteria</code> value if it was specified when the subscription filter was created.</p>
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * <p>The list of system fields that are included in the log events sent to the subscription destination. Returns the <code>emitSystemFields</code> value if it was specified when the subscription filter was created.</p>
   * @public
   */
  emitSystemFields?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionFiltersResponse {
  /**
   * <p>The subscription filters.</p>
   * @public
   */
  subscriptionFilters?: SubscriptionFilter[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateKmsKeyRequest {
  /**
   * <p>The name of the log group.</p>
   *          <p>In your <code>DisassociateKmsKey</code> operation, you must specify either the
   *         <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you
   *       can't specify both.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Specifies the target for this operation. You must specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Specify the ARN of a log group to stop having CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log
   *           group. After you run this operation, CloudWatch Logs encrypts ingested log events with
   *           the default CloudWatch Logs method. The log group ARN must be in the following format.
   *           Replace <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region
   *           and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:log-group:<i>LOG_GROUP_NAME</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the following ARN to stop using this key to encrypt the results of future
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>
   *           operations in this account. Replace <i>REGION</i> and
   *             <i>ACCOUNT_ID</i> with your Region and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:query-result:*</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In your <code>DisssociateKmsKey</code> operation, you must specify either the
   *         <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter, but you
   *       can't specify both.</p>
   * @public
   */
  resourceIdentifier?: string | undefined;
}

/**
 * <p>The entity associated with the log events in a <code>PutLogEvents</code> call.</p>
 * @public
 */
export interface Entity {
  /**
   * <p>The attributes of the entity which identify the specific entity, as a list of key-value
   *       pairs. Entities with the same <code>keyAttributes</code> are considered to be the same
   *       entity.</p>
   *          <p>There are five allowed attributes (key names): <code>Type</code>,
   *         <code>ResourceType</code>, <code>Identifier</code>
   *             <code>Name</code>, and <code>Environment</code>.</p>
   *          <p>For details about how to use the key attributes, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html">How to add
   *         related information to telemetry</a> in the <i>CloudWatch User
   *         Guide</i>.</p>
   * @public
   */
  keyAttributes?: Record<string, string> | undefined;

  /**
   * <p>Additional attributes of the entity that are not used to specify the identity of the
   *       entity. A list of key-value pairs.</p>
   *          <p>For details about how to use the attributes, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html">How to add
   *         related information to telemetry</a> in the <i>CloudWatch User
   *         Guide</i>.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityRejectionErrorType = {
  ENTITY_SIZE_TOO_LARGE: "EntitySizeTooLarge",
  INVALID_ATTRIBUTES: "InvalidAttributes",
  INVALID_ENTITY: "InvalidEntity",
  INVALID_KEY_ATTRIBUTE: "InvalidKeyAttributes",
  INVALID_TYPE_VALUE: "InvalidTypeValue",
  MISSING_REQUIRED_FIELDS: "MissingRequiredFields",
  UNSUPPORTED_LOG_GROUP_TYPE: "UnsupportedLogGroupType",
} as const;

/**
 * @public
 */
export type EntityRejectionErrorType = (typeof EntityRejectionErrorType)[keyof typeof EntityRejectionErrorType];

/**
 * @public
 * @enum
 */
export const EventSource = {
  AWSWAF: "AWSWAF",
  CLOUD_TRAIL: "CloudTrail",
  EKS_AUDIT: "EKSAudit",
  ROUTE53_RESOLVER: "Route53Resolver",
  VPC_FLOW: "VPCFlow",
} as const;

/**
 * @public
 */
export type EventSource = (typeof EventSource)[keyof typeof EventSource];

/**
 * <p>A structure containing the extracted fields from a log event. These fields are extracted
 *       based on the log format and can be used for structured querying and analysis.</p>
 * @public
 */
export interface FieldsData {
  /**
   * <p>The actual log data content returned in the streaming response. This contains the fields
   *       and values of the log event in a structured format that can be parsed and processed by the
   *       client.</p>
   * @public
   */
  data?: Uint8Array | undefined;
}

/**
 * <p>Represents a matched event.</p>
 * @public
 */
export interface FilteredLogEvent {
  /**
   * <p>The name of the log stream to which this event belongs.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   * @public
   */
  timestamp?: number | undefined;

  /**
   * <p>The data contained in the log event.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  ingestionTime?: number | undefined;

  /**
   * <p>The ID of the event.</p>
   * @public
   */
  eventId?: string | undefined;
}

/**
 * @public
 */
export interface FilterLogEventsRequest {
  /**
   * <p>The name of the log group to search.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Specify either the name or ARN of the log group to view log events from. If the log group
   *       is in a source account and you are using a monitoring account, you must use the log group
   *       ARN.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>Filters the results to only logs from the log streams in this list.</p>
   *          <p>If you specify a value for both <code>logStreamNames</code> and
   *         <code>logStreamNamePrefix</code>, the action returns an
   *         <code>InvalidParameterException</code> error.</p>
   * @public
   */
  logStreamNames?: string[] | undefined;

  /**
   * <p>Filters the results to include only events from log streams that have names starting with
   *       this prefix.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and
   *         <code>logStreamNames</code>, the action returns an <code>InvalidParameterException</code>
   *       error.</p>
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp before this time are not
   *       returned.</p>
   * @public
   */
  startTime?: number | undefined;

  /**
   * <p>The end of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp later than this time are not
   *       returned.</p>
   * @public
   */
  endTime?: number | undefined;

  /**
   * <p>The filter pattern to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern
   *         Syntax</a>.</p>
   *          <p>If not provided, all the events are matched.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>The token for the next set of events to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of events to return. The default is 10,000 events.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>If the value is true, the operation attempts to provide responses that contain events
   *       from multiple log streams within the log group, interleaved in a single response. If the value
   *       is false, all the matched log events in the first log stream are searched first, then those in
   *       the next log stream, and so on.</p>
   *          <p>
   *             <b>Important</b> As of June 17, 2019, this parameter is
   *       ignored and the value is assumed to be true. The response from this operation always
   *       interleaves events from multiple log streams within a log group.</p>
   *
   * @deprecated
   * @public
   */
  interleaved?: boolean | undefined;

  /**
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked
   *       and visible. The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the
   *         <code>logs:Unmask</code> permission.</p>
   * @public
   */
  unmask?: boolean | undefined;
}

/**
 * <p>Represents the search status of a log stream.</p>
 * @public
 */
export interface SearchedLogStream {
  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>Indicates whether all the events in this log stream were searched.</p>
   * @public
   */
  searchedCompletely?: boolean | undefined;
}

/**
 * @public
 */
export interface FilterLogEventsResponse {
  /**
   * <p>The matched events.</p>
   * @public
   */
  events?: FilteredLogEvent[] | undefined;

  /**
   * <p>
   *             <b>Important</b> As of May 15, 2020, this parameter is no longer
   *       supported. This parameter returns an empty list.</p>
   *          <p>Indicates which log streams have been searched and whether each has been searched
   *       completely.</p>
   * @public
   */
  searchedLogStreams?: SearchedLogStream[] | undefined;

  /**
   * <p>The token to use when requesting the next set of items. The token expires after 24
   *       hours.</p>
   *          <p>If the results don't include a <code>nextToken</code>, then pagination is finished.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlattenedElement = {
  FIRST: "first",
  LAST: "last",
} as const;

/**
 * @public
 */
export type FlattenedElement = (typeof FlattenedElement)[keyof typeof FlattenedElement];

/**
 * @public
 */
export interface GetDataProtectionPolicyRequest {
  /**
   * <p>The name or ARN of the log group that contains the data protection policy that you want to
   *       see.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyResponse {
  /**
   * <p>The log group name or ARN that you specified in your request.</p>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The data protection policy document for this log group.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The date and time that this policy was most recently updated.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface GetDeliveryRequest {
  /**
   * <p>The ID of the delivery that you want to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryResponse {
  /**
   * <p>A structure that contains information about the delivery.</p>
   * @public
   */
  delivery?: Delivery | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationRequest {
  /**
   * <p>The name of the delivery destination that you want to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationResponse {
  /**
   * <p>A structure containing information about the delivery destination.</p>
   * @public
   */
  deliveryDestination?: DeliveryDestination | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationPolicyRequest {
  /**
   * <p>The name of the delivery destination that you want to retrieve the policy of.</p>
   * @public
   */
  deliveryDestinationName: string | undefined;
}

/**
 * <p>A structure that contains information about one delivery destination policy.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>The contents of the delivery destination policy.</p>
   * @public
   */
  deliveryDestinationPolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationPolicyResponse {
  /**
   * <p>The IAM policy for this delivery destination.</p>
   * @public
   */
  policy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetDeliverySourceRequest {
  /**
   * <p>The name of the delivery source that you want to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDeliverySourceResponse {
  /**
   * <p>A structure containing information about the delivery source.</p>
   * @public
   */
  deliverySource?: DeliverySource | undefined;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * <p>The name of the integration that you want to find information about. To find the name of
   *       your integration, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListIntegrations.html">ListIntegrations</a>
   *          </p>
   * @public
   */
  integrationName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpenSearchResourceStatusType = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type OpenSearchResourceStatusType =
  (typeof OpenSearchResourceStatusType)[keyof typeof OpenSearchResourceStatusType];

/**
 * <p>This structure contains information about the status of an OpenSearch Service
 *       resource.</p>
 * @public
 */
export interface OpenSearchResourceStatus {
  /**
   * <p>The current status of this resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatusType | undefined;

  /**
   * <p>A message with additional information about the status of this resource.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service data access policy used
 *       for this integration. The access policy defines the access controls for the collection. This
 *       data access policy was automatically created as part of the integration setup. For more
 *       information about OpenSearch Service data access policies, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access
 *         control for Amazon OpenSearch Serverless</a> in the OpenSearch Service Developer
 *       Guide.</p>
 * @public
 */
export interface OpenSearchDataAccessPolicy {
  /**
   * <p>The name of the data access policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service application used for this
 *       integration. An OpenSearch Service application is the web application created by the
 *       integration with CloudWatch Logs. It hosts the vended logs dashboards.</p>
 * @public
 */
export interface OpenSearchApplication {
  /**
   * <p>The endpoint of the application.</p>
   * @public
   */
  applicationEndpoint?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service collection used for this
 *       integration. An OpenSearch Service collection is a logical grouping of one or more indexes
 *       that represent an analytics workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-collections.html">Creating and
 *         managing OpenSearch Service Serverless collections</a>.</p>
 * @public
 */
export interface OpenSearchCollection {
  /**
   * <p>The endpoint of the collection.</p>
   * @public
   */
  collectionEndpoint?: string | undefined;

  /**
   * <p>The ARN of the collection.</p>
   * @public
   */
  collectionArn?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service data source used for this
 *       integration. This data source was created as part of the integration setup. An OpenSearch Service data source defines the source and destination for OpenSearch Service queries. It
 *       includes the role required to execute queries and write to collections.</p>
 *          <p>For more information about OpenSearch Service data sources , see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3-creating.html">Creating
 *           OpenSearch Service data source integrations with Amazon S3.</a>
 *          </p>
 * @public
 */
export interface OpenSearchDataSource {
  /**
   * <p>The name of the OpenSearch Service data source.</p>
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service encryption policy used
 *       for this integration. The encryption policy was created automatically when you created the
 *       integration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html#serverless-encryption-policies">Encryption policies</a> in the OpenSearch Service Developer Guide. </p>
 * @public
 */
export interface OpenSearchEncryptionPolicy {
  /**
   * <p>The name of the encryption policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service data lifecycle policy
 *       used for this integration. The lifecycle policy determines the lifespan of the data in the
 *       collection. It was automatically created as part of the integration setup.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html">Using data
 *         lifecycle policies with OpenSearch Service Serverless</a> in the OpenSearch Service
 *       Developer Guide.</p>
 * @public
 */
export interface OpenSearchLifecyclePolicy {
  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service network policy used for
 *       this integration. The network policy assigns network access settings to collections. For more
 *       information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html#serverless-network-policies">Network policies</a> in the OpenSearch Service Developer Guide.</p>
 * @public
 */
export interface OpenSearchNetworkPolicy {
  /**
   * <p>The name of the network policy.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>This structure contains information about the status of this OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains information about the OpenSearch Service workspace used for this
 *       integration. An OpenSearch Service workspace is the collection of dashboards along with other
 *         OpenSearch Service tools. This workspace was created automatically as part of the
 *       integration setup. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html">Centralized OpenSearch user
 *         interface (Dashboards) with OpenSearch Service</a>.</p>
 * @public
 */
export interface OpenSearchWorkspace {
  /**
   * <p>The ID of this workspace.</p>
   * @public
   */
  workspaceId?: string | undefined;

  /**
   * <p>This structure contains information about the status of an OpenSearch Service
   *       resource.</p>
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * <p>This structure contains complete information about one CloudWatch Logs integration.
 *       This structure is returned by a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetIntegration.html">GetIntegration</a> operation.</p>
 * @public
 */
export interface OpenSearchIntegrationDetails {
  /**
   * <p>This structure contains information about the OpenSearch Service data source used for this
   *       integration. This data source was created as part of the integration setup. An OpenSearch Service data source defines the source and destination for OpenSearch Service queries. It
   *       includes the role required to execute queries and write to collections.</p>
   *          <p>For more information about OpenSearch Service data sources , see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3-creating.html">Creating
   *           OpenSearch Service data source integrations with Amazon S3.</a>
   *          </p>
   * @public
   */
  dataSource?: OpenSearchDataSource | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service application used for this
   *       integration. An OpenSearch Service application is the web application that was created by the
   *       integration with CloudWatch Logs. It hosts the vended logs dashboards.</p>
   * @public
   */
  application?: OpenSearchApplication | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service collection used for this
   *       integration. This collection was created as part of the integration setup. An OpenSearch Service collection is a logical grouping of one or more indexes that represent an analytics
   *       workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-collections.html">Creating and
   *         managing OpenSearch Service Serverless collections</a>.</p>
   * @public
   */
  collection?: OpenSearchCollection | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service workspace used for this
   *       integration. An OpenSearch Service workspace is the collection of dashboards along with other
   *         OpenSearch Service tools. This workspace was created automatically as part of the
   *       integration setup. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html">Centralized OpenSearch user
   *         interface (Dashboards) with OpenSearch Service</a>.</p>
   * @public
   */
  workspace?: OpenSearchWorkspace | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service encryption policy used
   *       for this integration. The encryption policy was created automatically when you created the
   *       integration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html#serverless-encryption-policies">Encryption policies</a> in the OpenSearch Service Developer Guide. </p>
   * @public
   */
  encryptionPolicy?: OpenSearchEncryptionPolicy | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service network policy used for
   *       this integration. The network policy assigns network access settings to collections. For more
   *       information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html#serverless-network-policies">Network policies</a> in the OpenSearch Service Developer Guide.</p>
   * @public
   */
  networkPolicy?: OpenSearchNetworkPolicy | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service data access policy used
   *       for this integration. The access policy defines the access controls for the collection. This
   *       data access policy was automatically created as part of the integration setup. For more
   *       information about OpenSearch Service data access policies, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access
   *         control for Amazon OpenSearch Serverless</a> in the OpenSearch Service Developer
   *       Guide.</p>
   * @public
   */
  accessPolicy?: OpenSearchDataAccessPolicy | undefined;

  /**
   * <p>This structure contains information about the OpenSearch Service data lifecycle policy
   *       used for this integration. The lifecycle policy determines the lifespan of the data in the
   *       collection. It was automatically created as part of the integration setup.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html">Using data
   *         lifecycle policies with OpenSearch Service Serverless</a> in the OpenSearch Service
   *       Developer Guide.</p>
   * @public
   */
  lifecyclePolicy?: OpenSearchLifecyclePolicy | undefined;
}

/**
 * <p>This structure contains information about the integration configuration. For an
 *       integration with OpenSearch Service, this includes information about OpenSearch Service
 *       resources such as the collection, the workspace, and policies.</p>
 *          <p>This structure is returned by a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetIntegration.html">GetIntegration</a> operation.</p>
 * @public
 */
export type IntegrationDetails =
  | IntegrationDetails.OpenSearchIntegrationDetailsMember
  | IntegrationDetails.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationDetails {
  /**
   * <p>This structure contains complete information about one integration between CloudWatch Logs and OpenSearch Service.</p>
   * @public
   */
  export interface OpenSearchIntegrationDetailsMember {
    openSearchIntegrationDetails: OpenSearchIntegrationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openSearchIntegrationDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    openSearchIntegrationDetails: (value: OpenSearchIntegrationDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IntegrationDetails, visitor: Visitor<T>): T => {
    if (value.openSearchIntegrationDetails !== undefined)
      return visitor.openSearchIntegrationDetails(value.openSearchIntegrationDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
} as const;

/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  OPENSEARCH: "OPENSEARCH",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 */
export interface GetIntegrationResponse {
  /**
   * <p>The name of the integration.</p>
   * @public
   */
  integrationName?: string | undefined;

  /**
   * <p>The type of integration. Integrations with OpenSearch Service have the type
   *         <code>OPENSEARCH</code>.</p>
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * <p>The current status of this integration.</p>
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;

  /**
   * <p>A structure that contains information about the integration configuration. For an
   *       integration with OpenSearch Service, this includes information about OpenSearch Service
   *       resources such as the collection, the workspace, and policies.</p>
   * @public
   */
  integrationDetails?: IntegrationDetails | undefined;
}

/**
 * @public
 */
export interface GetLogAnomalyDetectorRequest {
  /**
   * <p>The ARN of the anomaly detector to retrieve information about. You can find the ARNs of
   *       log anomaly detectors in your account by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html">ListLogAnomalyDetectors</a> operation.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetLogAnomalyDetectorResponse {
  /**
   * <p>The name of the log anomaly detector</p>
   * @public
   */
  detectorName?: string | undefined;

  /**
   * <p>An array of structures, where each structure contains the ARN of a log group associated
   *       with this anomaly detector.</p>
   * @public
   */
  logGroupArnList?: string[] | undefined;

  /**
   * <p>Specifies how often the anomaly detector runs and look for anomalies. Set this value
   *       according to the frequency that the log group receives new logs. For example, if the log group
   *       receives new log events every 10 minutes, then setting <code>evaluationFrequency</code> to
   *         <code>FIFTEEN_MIN</code> might be appropriate.</p>
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>Specifies whether the anomaly detector is currently active. To change its status, use the
   *         <code>enabled</code> parameter in the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html">UpdateLogAnomalyDetector</a> operation.</p>
   * @public
   */
  anomalyDetectorStatus?: AnomalyDetectorStatus | undefined;

  /**
   * <p>The ARN of the KMS key assigned to this anomaly detector, if any.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The date and time when this anomaly detector was created.</p>
   * @public
   */
  creationTimeStamp?: number | undefined;

  /**
   * <p>The date and time when this anomaly detector was most recently modified.</p>
   * @public
   */
  lastModifiedTimeStamp?: number | undefined;

  /**
   * <p>The number of days used as the life cycle of anomalies. After this time, anomalies are
   *       automatically baselined and the anomaly detector model will treat new occurrences of similar
   *       event as normal. </p>
   * @public
   */
  anomalyVisibilityTime?: number | undefined;
}

/**
 * @public
 */
export interface GetLogEventsRequest {
  /**
   * <p>The name of the log group.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>Specify either the name or ARN of the log group to view events from. If the log group is
   *       in a source account and you are using a monitoring account, you must use the log group
   *       ARN.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  logStreamName: string | undefined;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp equal to this time or later than this time
   *       are included. Events with a timestamp earlier than this time are not included.</p>
   * @public
   */
  startTime?: number | undefined;

  /**
   * <p>The end of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp equal to or later than this time are not
   *       included.</p>
   * @public
   */
  endTime?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of log events returned. If you don't specify a limit, the default is
   *       as many log events as can fit in a response size of 1 MB (up to 10,000 log events).</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>If the value is true, the earliest log events are returned first. If the value is
   *       false, the latest log events are returned first. The default value is false.</p>
   *          <p>If you are using a previous <code>nextForwardToken</code> value as the
   *         <code>nextToken</code> in this operation, you must specify <code>true</code> for
   *         <code>startFromHead</code>.</p>
   * @public
   */
  startFromHead?: boolean | undefined;

  /**
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked
   *       and visible. The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the
   *         <code>logs:Unmask</code> permission.</p>
   * @public
   */
  unmask?: boolean | undefined;
}

/**
 * <p>Represents a log event.</p>
 * @public
 */
export interface OutputLogEvent {
  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   * @public
   */
  timestamp?: number | undefined;

  /**
   * <p>The data contained in the log event.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   * @public
   */
  ingestionTime?: number | undefined;
}

/**
 * @public
 */
export interface GetLogEventsResponse {
  /**
   * <p>The events.</p>
   * @public
   */
  events?: OutputLogEvent[] | undefined;

  /**
   * <p>The token for the next set of items in the forward direction. The token expires after
   *       24 hours. If you have reached the end of the stream, it returns the same token you passed
   *       in.</p>
   * @public
   */
  nextForwardToken?: string | undefined;

  /**
   * <p>The token for the next set of items in the backward direction. The token expires after
   *       24 hours. This token is not null. If you have reached the end of the stream, it returns the
   *       same token you passed in.</p>
   * @public
   */
  nextBackwardToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLogGroupFieldsRequest {
  /**
   * <p>The name of the log group to search.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The time to set as the center of the query. If you specify <code>time</code>, the 8
   *       minutes before and 8 minutes after this time are searched. If you omit <code>time</code>, the
   *       most recent 15 minutes up to the current time are searched.</p>
   *          <p>The <code>time</code> value is specified as epoch time, which is the number of seconds
   *       since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   * @public
   */
  time?: number | undefined;

  /**
   * <p>Specify either the name or ARN of the log group to view. If the log group is in a source
   *       account and you are using a monitoring account, you must specify the ARN.</p>
   *          <note>
   *             <p> You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>,
   *         but not both. </p>
   *          </note>
   * @public
   */
  logGroupIdentifier?: string | undefined;
}

/**
 * <p>The fields contained in log events found by a <code>GetLogGroupFields</code> operation,
 *       along with the percentage of queried log events in which each field appears.</p>
 * @public
 */
export interface LogGroupField {
  /**
   * <p>The name of a log field.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The percentage of log events queried that contained the field.</p>
   * @public
   */
  percent?: number | undefined;
}

/**
 * @public
 */
export interface GetLogGroupFieldsResponse {
  /**
   * <p>The array of fields found in the query. Each object in the array contains the name of the
   *       field, along with the percentage of time it appeared in the log events that were
   *       queried.</p>
   * @public
   */
  logGroupFields?: LogGroupField[] | undefined;
}

/**
 * <p>The parameters for the GetLogObject operation.</p>
 * @public
 */
export interface GetLogObjectRequest {
  /**
   * <p>A boolean flag that indicates whether to unmask sensitive log data. When set to true, any
   *       masked or redacted data in the log object will be displayed in its original form. Default is
   *       false.</p>
   * @public
   */
  unmask?: boolean | undefined;

  /**
   * <p>A pointer to the specific log object to retrieve. This is a required parameter that
   *       uniquely identifies the log object within CloudWatch Logs. The pointer is typically obtained
   *       from a previous query or filter operation.</p>
   * @public
   */
  logObjectPointer: string | undefined;
}

/**
 * <p>An internal error occurred during the streaming of log data. This exception is thrown when
 *       there's an issue with the internal streaming mechanism used by the GetLogObject
 *       operation.</p>
 * @public
 */
export class InternalStreamingException extends __BaseException {
  readonly name: "InternalStreamingException" = "InternalStreamingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalStreamingException, __BaseException>) {
    super({
      name: "InternalStreamingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalStreamingException.prototype);
  }
}

/**
 * <p>A stream of structured log data returned by the GetLogObject operation. This stream
 *       contains log events with their associated metadata and extracted fields.</p>
 * @public
 */
export type GetLogObjectResponseStream =
  | GetLogObjectResponseStream.InternalStreamingExceptionMember
  | GetLogObjectResponseStream.FieldsMember
  | GetLogObjectResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace GetLogObjectResponseStream {
  /**
   * <p>A structure containing the extracted fields from a log event. These fields are extracted
   *       based on the log format and can be used for structured querying and analysis.</p>
   * @public
   */
  export interface FieldsMember {
    fields: FieldsData;
    InternalStreamingException?: never;
    $unknown?: never;
  }

  /**
   * <p>An internal error occurred during the streaming of log data. This exception is thrown when
   *       there's an issue with the internal streaming mechanism used by the GetLogObject
   *       operation.</p>
   * @public
   */
  export interface InternalStreamingExceptionMember {
    fields?: never;
    InternalStreamingException: InternalStreamingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fields?: never;
    InternalStreamingException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    fields: (value: FieldsData) => T;
    InternalStreamingException: (value: InternalStreamingException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GetLogObjectResponseStream, visitor: Visitor<T>): T => {
    if (value.fields !== undefined) return visitor.fields(value.fields);
    if (value.InternalStreamingException !== undefined)
      return visitor.InternalStreamingException(value.InternalStreamingException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The response from the GetLogObject operation.</p>
 * @public
 */
export interface GetLogObjectResponse {
  /**
   * <p>A stream of structured log data returned by the GetLogObject operation. This stream
   *       contains log events with their associated metadata and extracted fields.</p>
   * @public
   */
  fieldStream?: AsyncIterable<GetLogObjectResponseStream> | undefined;
}

/**
 * @public
 */
export interface GetLogRecordRequest {
  /**
   * <p>The pointer corresponding to the log event record you want to retrieve. You get this from
   *       the response of a <code>GetQueryResults</code> operation. In that response, the value of the
   *         <code>@ptr</code> field for a log event is the value to use as <code>logRecordPointer</code>
   *       to retrieve that complete log event record.</p>
   * @public
   */
  logRecordPointer: string | undefined;

  /**
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked
   *       and visible. The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the
   *         <code>logs:Unmask</code> permission.</p>
   * @public
   */
  unmask?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLogRecordResponse {
  /**
   * <p>The requested log event, as a JSON string.</p>
   * @public
   */
  logRecord?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * <p>The ID number of the query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along
 *       with the value of that field.</p>
 *          <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported
 *         Logs and Discovered Fields</a>.</p>
 * @public
 */
export interface ResultField {
  /**
   * <p>The log event field.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>The value of this field.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the number of log events scanned by the query, the number of log events that
 *       matched the query criteria, and the total number of bytes in the log events that were
 *       scanned.</p>
 *          <p>If the query involved log groups that have field index policies, the estimated number of
 *       skipped log events and the total bytes of those skipped log events are included. Using field
 *       indexes to skip log events in queries reduces scan volume and improves performance. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html">Create field indexes
 *         to improve query performance and reduce scan volume</a>.</p>
 * @public
 */
export interface QueryStatistics {
  /**
   * <p>The number of log events that matched the query string.</p>
   * @public
   */
  recordsMatched?: number | undefined;

  /**
   * <p>The total number of log events scanned during the query.</p>
   * @public
   */
  recordsScanned?: number | undefined;

  /**
   * <p>An estimate of the number of log events that were skipped when processing this query,
   *       because the query contained an indexed field. Skipping these entries lowers query costs and
   *       improves the query performance time. For more information about field indexes, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a>.</p>
   * @public
   */
  estimatedRecordsSkipped?: number | undefined;

  /**
   * <p>The total number of bytes in the log events scanned during the query.</p>
   * @public
   */
  bytesScanned?: number | undefined;

  /**
   * <p>An estimate of the number of bytes in the log events that were skipped when processing
   *       this query, because the query contained an indexed field. Skipping these entries lowers query
   *       costs and improves the query performance time. For more information about field indexes, see
   *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a>.</p>
   * @public
   */
  estimatedBytesSkipped?: number | undefined;

  /**
   * <p>The number of log groups that were scanned by this query.</p>
   * @public
   */
  logGroupsScanned?: number | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * <p>The query language used for this query. For more information about the query languages
   *       that CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
   *         languages</a>.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>The log events that matched the query criteria during the most recent time it ran.</p>
   *          <p>The <code>results</code> value is an array of arrays. Each log event is one object in the
   *       top-level array. Each of these log event objects is an array of
   *         <code>field</code>/<code>value</code> pairs.</p>
   * @public
   */
  results?: ResultField[][] | undefined;

  /**
   * <p>Includes the number of log events scanned by the query, the number of log events that
   *       matched the query criteria, and the total number of bytes in the scanned log events. These
   *       values reflect the full raw results of the query.</p>
   * @public
   */
  statistics?: QueryStatistics | undefined;

  /**
   * <p>The status of the most recent running of the query. Possible values are
   *         <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>,
   *         <code>Scheduled</code>, <code>Timeout</code>, and <code>Unknown</code>.</p>
   *          <p>Queries time out after 60 minutes of runtime. To avoid having your queries time out,
   *       reduce the time range being searched or partition your query into a number of queries.</p>
   * @public
   */
  status?: QueryStatus | undefined;

  /**
   * <p>If you associated an KMS key with the CloudWatch Logs Insights
   *       query results in this account, this field displays the ARN of the key that's used to encrypt
   *       the query results when <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> stores
   *       them.</p>
   * @public
   */
  encryptionKey?: string | undefined;
}

/**
 * @public
 */
export interface GetTransformerRequest {
  /**
   * <p>Specify either the name or ARN of the log group to return transformer information for. If
   *       the log group is in a source account and you are using a monitoring account, you must use the
   *       log group ARN.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * <p>This processor uses pattern matching to parse and structure unstructured data. This
 *       processor can also extract fields from log messages.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-Grok">grok</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface Grok {
  /**
   * <p>The path to the field in the log event that you want to parse. If you omit this value, the
   *       whole log message is parsed.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>The grok pattern to match against the log event. For a list of supported grok patterns,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#Grok-Patterns">Supported grok patterns</a>.</p>
   * @public
   */
  match: string | undefined;
}

/**
 * <p>This processor takes a list of objects that contain key fields, and converts them into a
 *       map of target keys.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-listToMap"> listToMap</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface ListToMap {
  /**
   * <p>The key in the log event that has a list of objects that will be converted to a
   *       map.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The key of the field to be extracted as keys in the generated map</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>If this is specified, the values that you specify in this parameter will be extracted from
   *       the <code>source</code> objects and put into the values of the generated map. Otherwise,
   *       original objects in the source list will be put into the values of the generated map.</p>
   * @public
   */
  valueKey?: string | undefined;

  /**
   * <p>The key of the field that will hold the generated map </p>
   * @public
   */
  target?: string | undefined;

  /**
   * <p>A Boolean value to indicate whether the list will be flattened into single items. Specify
   *         <code>true</code> to flatten the list. The default is <code>false</code>
   *          </p>
   * @public
   */
  flatten?: boolean | undefined;

  /**
   * <p>If you set <code>flatten</code> to <code>true</code>, use <code>flattenedElement</code> to
   *       specify which element, <code>first</code> or <code>last</code>, to keep. </p>
   *          <p>You must specify this parameter if <code>flatten</code> is <code>true</code>
   *          </p>
   * @public
   */
  flattenedElement?: FlattenedElement | undefined;
}

/**
 * <p>This processor converts a string to lowercase.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-lowerCaseString"> lowerCaseString</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface LowerCaseString {
  /**
   * <p>The array caontaining the keys of the fields to convert to lowercase.</p>
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * <p>This object defines one key that will be moved with the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKey"> moveKey</a> processor.</p>
 * @public
 */
export interface MoveKeyEntry {
  /**
   * <p>The key to move.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The key to move to.</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>Specifies whether to overwrite the value if the destination key already exists. If you
   *       omit this, the default is <code>false</code>.</p>
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * <p>This processor moves a key from one field to another. The original key is deleted.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKeys"> moveKeys</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface MoveKeys {
  /**
   * <p>An array of objects, where each object contains the information about one key to move.
   *     </p>
   * @public
   */
  entries: MoveKeyEntry[] | undefined;
}

/**
 * <p>This processor parses CloudFront vended logs, extract fields, and convert them into
 *       JSON format. Encoded field values are decoded. Values that are integers and doubles are
 *       treated as such. For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseCloudfront"> parseCloudfront</a>
 *          </p>
 *          <p>For more information about CloudFront log format, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html"> Configure and use standard
 *         logs (access logs)</a>.</p>
 *          <p>If you use this processor, it must be the first processor in your transformer.</p>
 * @public
 */
export interface ParseCloudfront {
  /**
   * <p>Omit this parameter and the whole log message will be processed by this processor. No
   *       other value than <code>@message</code> is allowed for <code>source</code>.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>This processor parses log events that are in JSON format. It can extract JSON key-value
 *       pairs and place them under a destination that you specify.</p>
 *          <p>Additionally, because you must have at least one parse-type processor in a transformer,
 *       you can use <code>ParseJSON</code> as that processor for JSON-format logs, so that you can
 *       also apply other processors, such as mutate processors, to these logs.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseJSON"> parseJSON</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface ParseJSON {
  /**
   * <p>Path to the field in the log event that will be parsed. Use dot notation to access child
   *       fields. For example, <code>store.book</code>
   *          </p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>The location to put the parsed key value pair into. If you omit this parameter, it is
   *       placed under the root node.</p>
   * @public
   */
  destination?: string | undefined;
}

/**
 * <p>This processor parses a specified field in the original log event into key-value pairs. </p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseKeyValue"> parseKeyValue</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface ParseKeyValue {
  /**
   * <p>Path to the field in the log event that will be parsed. Use dot notation to access child
   *       fields. For example, <code>store.book</code>
   *          </p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>The destination field to put the extracted key-value pairs into</p>
   * @public
   */
  destination?: string | undefined;

  /**
   * <p>The field delimiter string that is used between key-value pairs in the original log
   *       events. If you omit this, the ampersand <code>&</code> character is used.</p>
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * <p>The delimiter string to use between the key and value in each pair in the transformed log
   *       event.</p>
   *          <p> If you omit this, the equal <code>=</code> character is used.</p>
   * @public
   */
  keyValueDelimiter?: string | undefined;

  /**
   * <p>If you want to add a prefix to all transformed keys, specify it here.</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>A value to insert into the value field in the result, when a key-value pair is not
   *       successfully split.</p>
   * @public
   */
  nonMatchValue?: string | undefined;

  /**
   * <p>Specifies whether to overwrite the value if the destination key already exists. If you
   *       omit this, the default is <code>false</code>.</p>
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * <p>Use this processor to parse RDS for PostgreSQL vended logs, extract fields, and
 *       and convert them into a JSON format. This processor always processes the entire log event
 *       message. For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres"> parsePostGres</a>.</p>
 *          <p>For more information about RDS for PostgreSQL log format, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.Concepts.PostgreSQL.Log_Format.log-line-prefix">
 *         RDS for PostgreSQL database log filesTCP flag sequence</a>.</p>
 *          <important>
 *             <p>If you use this processor, it must be the first processor in your transformer.</p>
 *          </important>
 * @public
 */
export interface ParsePostgres {
  /**
   * <p>Omit this parameter and the whole log message will be processed by this processor. No
   *       other value than <code>@message</code> is allowed for <code>source</code>.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>Use this processor to parse Route 53 vended logs, extract fields, and and
 *       convert them into a JSON format. This processor always processes the entire log event message.
 *       For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseRoute53"> parseRoute53</a>.</p>
 *          <important>
 *             <p>If you use this processor, it must be the first processor in your transformer.</p>
 *          </important>
 * @public
 */
export interface ParseRoute53 {
  /**
   * <p>Omit this parameter and the whole log message will be processed by this processor. No
   *       other value than <code>@message</code> is allowed for <code>source</code>.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OCSFVersion = {
  V1_1: "V1.1",
} as const;

/**
 * @public
 */
export type OCSFVersion = (typeof OCSFVersion)[keyof typeof OCSFVersion];

/**
 * <p>This processor converts logs into <a href="https://ocsf.io">Open Cybersecurity Schema
 *         Framework (OCSF)</a> events.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseToOCSF"> parseToOSCF</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface ParseToOCSF {
  /**
   * <p>The path to the field in the log event that you want to parse. If you omit this value, the
   *       whole log message is parsed.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>Specify the service or process that produces the log events that will be converted with
   *       this processor.</p>
   * @public
   */
  eventSource: EventSource | undefined;

  /**
   * <p>Specify which version of the OCSF schema to use for the transformed log events.</p>
   * @public
   */
  ocsfVersion: OCSFVersion | undefined;
}

/**
 * <p>Use this processor to parse Amazon VPC vended logs, extract fields, and and
 *       convert them into a JSON format. This processor always processes the entire log event
 *       message.</p>
 *          <p>This processor doesn't support custom log formats, such as NAT gateway logs. For more
 *       information about custom log formats in Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-tcp-flag">
 *         parseVPC</a> For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseVPC"> parseVPC</a>.</p>
 *          <important>
 *             <p>If you use this processor, it must be the first processor in your transformer.</p>
 *          </important>
 * @public
 */
export interface ParseVPC {
  /**
   * <p>Omit this parameter and the whole log message will be processed by this processor. No
   *       other value than <code>@message</code> is allowed for <code>source</code>.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>Use this processor to parse WAF vended logs, extract fields, and and
 *       convert them into a JSON format. This processor always processes the entire log event message.
 *       For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres"> parseWAF</a>.</p>
 *          <p>For more information about WAF log format, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging-examples.html"> Log examples for web ACL
 *         traffic</a>.</p>
 *          <important>
 *             <p>If you use this processor, it must be the first processor in your transformer.</p>
 *          </important>
 * @public
 */
export interface ParseWAF {
  /**
   * <p>Omit this parameter and the whole log message will be processed by this processor. No
   *       other value than <code>@message</code> is allowed for <code>source</code>.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>This object defines one key that will be renamed with the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKey"> renameKey</a> processor.</p>
 * @public
 */
export interface RenameKeyEntry {
  /**
   * <p>The key to rename</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The string to use for the new key name</p>
   * @public
   */
  renameTo: string | undefined;

  /**
   * <p>Specifies whether to overwrite the existing value if the destination key already exists.
   *       The default is <code>false</code>
   *          </p>
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * <p>Use this processor to rename keys in a log event.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKeys"> renameKeys</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface RenameKeys {
  /**
   * <p>An array of <code>RenameKeyEntry</code> objects, where each object contains the
   *       information about a single key to rename. </p>
   * @public
   */
  entries: RenameKeyEntry[] | undefined;
}

/**
 * <p>This object defines one log field that will be split with the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-splitString"> splitString</a> processor.</p>
 * @public
 */
export interface SplitStringEntry {
  /**
   * <p>The key of the field to split.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The separator characters to split the string entry on.</p>
   * @public
   */
  delimiter: string | undefined;
}

/**
 * <p>Use this processor to split a field into an array of strings using a delimiting
 *       character.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-splitString"> splitString</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface SplitString {
  /**
   * <p>An array of <code>SplitStringEntry</code> objects, where each object contains the
   *       information about one field to split. </p>
   * @public
   */
  entries: SplitStringEntry[] | undefined;
}

/**
 * <p>This object defines one log field key that will be replaced using the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-substituteString"> substituteString</a> processor.</p>
 * @public
 */
export interface SubstituteStringEntry {
  /**
   * <p>The key to modify</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The regular expression string to be replaced. Special regex characters such as [ and ]
   *       must be escaped using \\ when using double quotes and with \ when using single quotes. For
   *       more information, see <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/regex/Pattern.html"> Class Pattern</a> on the Oracle web site.</p>
   * @public
   */
  from: string | undefined;

  /**
   * <p>The string to be substituted for each match of <code>from</code>
   *          </p>
   * @public
   */
  to: string | undefined;
}

/**
 * <p>This processor matches a key’s value against a regular expression and replaces all matches
 *       with a replacement string.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-substituteString"> substituteString</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface SubstituteString {
  /**
   * <p>An array of objects, where each object contains the information about one key to match and
   *       replace. </p>
   * @public
   */
  entries: SubstituteStringEntry[] | undefined;
}

/**
 * <p>Use this processor to remove leading and trailing whitespace.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-trimString"> trimString</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface TrimString {
  /**
   * <p>The array containing the keys of the fields to trim.</p>
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  BOOLEAN: "boolean",
  DOUBLE: "double",
  INTEGER: "integer",
  STRING: "string",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>This object defines one value type that will be converted using the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-typeConverter"> typeConverter</a> processor.</p>
 * @public
 */
export interface TypeConverterEntry {
  /**
   * <p>The key with the value that is to be converted to a different type.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The type to convert the field value to. Valid values are <code>integer</code>,
   *         <code>double</code>, <code>string</code> and <code>boolean</code>.</p>
   * @public
   */
  type: Type | undefined;
}

/**
 * <p>Use this processor to convert a value type associated with the specified key to the
 *       specified type. It's a casting processor that changes the types of the specified fields.
 *       Values can be converted into one of the following datatypes: <code>integer</code>,
 *         <code>double</code>, <code>string</code> and <code>boolean</code>. </p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-trimString"> trimString</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface TypeConverter {
  /**
   * <p>An array of <code>TypeConverterEntry</code> objects, where each object contains the
   *       information about one field to change the type of. </p>
   * @public
   */
  entries: TypeConverterEntry[] | undefined;
}

/**
 * <p>This processor converts a string field to uppercase.</p>
 *          <p>For more information about this processor including examples, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-upperCaseString"> upperCaseString</a> in the <i>CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface UpperCaseString {
  /**
   * <p>The array of containing the keys of the field to convert to uppercase.</p>
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * <p>This structure contains the information about one processor in a log transformer.</p>
 * @public
 */
export interface Processor {
  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKeys"> addKeys</a> processor in your transformer.</p>
   * @public
   */
  addKeys?: AddKeys | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-copyValue"> copyValue</a> processor in your transformer.</p>
   * @public
   */
  copyValue?: CopyValue | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-CSV"> CSV</a> processor in your transformer.</p>
   * @public
   */
  csv?: CSV | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-datetimeConverter"> datetimeConverter</a> processor in your transformer.</p>
   * @public
   */
  dateTimeConverter?: DateTimeConverter | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-deleteKeys"> deleteKeys</a> processor in your transformer.</p>
   * @public
   */
  deleteKeys?: DeleteKeys | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-grok"> grok</a> processor in your transformer.</p>
   * @public
   */
  grok?: Grok | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-listToMap"> listToMap</a> processor in your transformer.</p>
   * @public
   */
  listToMap?: ListToMap | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-lowerCaseString"> lowerCaseString</a> processor in your transformer.</p>
   * @public
   */
  lowerCaseString?: LowerCaseString | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKeys"> moveKeys</a> processor in your transformer.</p>
   * @public
   */
  moveKeys?: MoveKeys | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseCloudfront"> parseCloudfront</a> processor in your transformer.</p>
   *          <p>If you use this processor, it must be the first processor in your transformer.</p>
   * @public
   */
  parseCloudfront?: ParseCloudfront | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseJSON"> parseJSON</a> processor in your transformer.</p>
   * @public
   */
  parseJSON?: ParseJSON | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseKeyValue"> parseKeyValue</a> processor in your transformer.</p>
   * @public
   */
  parseKeyValue?: ParseKeyValue | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseRoute53"> parseRoute53</a> processor in your transformer.</p>
   *          <p>If you use this processor, it must be the first processor in your transformer.</p>
   * @public
   */
  parseRoute53?: ParseRoute53 | undefined;

  /**
   * <p>Use this parameter to convert logs into Open Cybersecurity Schema (OCSF) format.</p>
   * @public
   */
  parseToOCSF?: ParseToOCSF | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres"> parsePostGres</a> processor in your transformer.</p>
   *          <p>If you use this processor, it must be the first processor in your transformer.</p>
   * @public
   */
  parsePostgres?: ParsePostgres | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseVPC"> parseVPC</a> processor in your transformer.</p>
   *          <p>If you use this processor, it must be the first processor in your transformer.</p>
   * @public
   */
  parseVPC?: ParseVPC | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseWAF"> parseWAF</a> processor in your transformer.</p>
   *          <p>If you use this processor, it must be the first processor in your transformer.</p>
   * @public
   */
  parseWAF?: ParseWAF | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKeys"> renameKeys</a> processor in your transformer.</p>
   * @public
   */
  renameKeys?: RenameKeys | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-splitString"> splitString</a> processor in your transformer.</p>
   * @public
   */
  splitString?: SplitString | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-substituteString"> substituteString</a> processor in your transformer.</p>
   * @public
   */
  substituteString?: SubstituteString | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-trimString"> trimString</a> processor in your transformer.</p>
   * @public
   */
  trimString?: TrimString | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-typeConverter"> typeConverter</a> processor in your transformer.</p>
   * @public
   */
  typeConverter?: TypeConverter | undefined;

  /**
   * <p>Use this parameter to include the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-upperCaseString"> upperCaseString</a> processor in your transformer.</p>
   * @public
   */
  upperCaseString?: UpperCaseString | undefined;
}

/**
 * @public
 */
export interface GetTransformerResponse {
  /**
   * <p>The ARN of the log group that you specified in your request.</p>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The creation time of the transformer, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   * @public
   */
  creationTime?: number | undefined;

  /**
   * <p>The date and time when this transformer was most recently modified, expressed as the
   *       number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   * @public
   */
  lastModifiedTime?: number | undefined;

  /**
   * <p>This sructure contains the configuration of the requested transformer.</p>
   * @public
   */
  transformerConfig?: Processor[] | undefined;
}

/**
 * <p>Represents a log event, which is a record of activity that was recorded by the
 *       application or resource being monitored.</p>
 * @public
 */
export interface InputLogEvent {
  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   * @public
   */
  timestamp: number | undefined;

  /**
   * <p>The raw event message. Each log event can be no larger than 1 MB.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>This structure contains information about one CloudWatch Logs integration. This
 *       structure is returned by a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListIntegrations.html">ListIntegrations</a> operation.</p>
 * @public
 */
export interface IntegrationSummary {
  /**
   * <p>The name of this integration.</p>
   * @public
   */
  integrationName?: string | undefined;

  /**
   * <p>The type of integration. Integrations with OpenSearch Service have the type
   *         <code>OPENSEARCH</code>.</p>
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * <p>The current status of this integration.</p>
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;
}

/**
 * <p>The sequence token is not valid. You can get the correct sequence token in the
 *         <code>expectedSequenceToken</code> field in the <code>InvalidSequenceTokenException</code>
 *       message. </p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code> actions are now always accepted and never return
 *           <code>InvalidSequenceTokenException</code> regardless of receiving an invalid sequence
 *         token. </p>
 *          </important>
 * @public
 */
export class InvalidSequenceTokenException extends __BaseException {
  readonly name: "InvalidSequenceTokenException" = "InvalidSequenceTokenException";
  readonly $fault: "client" = "client";
  expectedSequenceToken?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSequenceTokenException, __BaseException>) {
    super({
      name: "InvalidSequenceTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSequenceTokenException.prototype);
    this.expectedSequenceToken = opts.expectedSequenceToken;
  }
}

/**
 * @public
 * @enum
 */
export const SuppressionState = {
  SUPPRESSED: "SUPPRESSED",
  UNSUPPRESSED: "UNSUPPRESSED",
} as const;

/**
 * @public
 */
export type SuppressionState = (typeof SuppressionState)[keyof typeof SuppressionState];

/**
 * @public
 */
export interface ListAnomaliesRequest {
  /**
   * <p>Use this to optionally limit the results to only the anomalies found by a certain anomaly
   *       detector.</p>
   * @public
   */
  anomalyDetectorArn?: string | undefined;

  /**
   * <p>You can specify this parameter if you want to the operation to return only anomalies that
   *       are currently either suppressed or unsuppressed.</p>
   * @public
   */
  suppressionState?: SuppressionState | undefined;

  /**
   * <p>The maximum number of items to return. If you don't specify a value, the default
   *       maximum value of 50 items is used.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesResponse {
  /**
   * <p>An array of structures, where each structure contains information about one anomaly that a
   *       log anomaly detector has found.</p>
   * @public
   */
  anomalies?: Anomaly[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsRequest {
  /**
   * <p>To limit the results to integrations that start with a certain name prefix, specify that
   *       name prefix here.</p>
   * @public
   */
  integrationNamePrefix?: string | undefined;

  /**
   * <p>To limit the results to integrations of a certain type, specify that type here.</p>
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * <p>To limit the results to integrations with a certain status, specify that status
   *       here.</p>
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsResponse {
  /**
   * <p>An array, where each object in the array contains information about one CloudWatch Logs
   *       integration in this account. </p>
   * @public
   */
  integrationSummaries?: IntegrationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLogAnomalyDetectorsRequest {
  /**
   * <p>Use this to optionally filter the results to only include anomaly detectors that are
   *       associated with the specified log group.</p>
   * @public
   */
  filterLogGroupArn?: string | undefined;

  /**
   * <p>The maximum number of items to return. If you don't specify a value, the default
   *       maximum value of 50 items is used.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogAnomalyDetectorsResponse {
  /**
   * <p>An array of structures, where each structure in the array contains information about one
   *       anomaly detector.</p>
   * @public
   */
  anomalyDetectors?: AnomalyDetector[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsRequest {
  /**
   * <p>Use this parameter to limit the returned log groups to only those with names that match
   *       the pattern that you specify. This parameter is a regular expression that can match prefixes
   *       and substrings, and supports wildcard matching and matching multiple patterns, as in the
   *       following examples. </p>
   *          <ul>
   *             <li>
   *                <p>Use <code>^</code> to match log group names by prefix.</p>
   *             </li>
   *             <li>
   *                <p>For a substring match, specify the string to match. All matches are case
   *           sensitive</p>
   *             </li>
   *             <li>
   *                <p>To match multiple patterns, separate them with a <code>|</code> as in the example
   *             <code>^/aws/lambda|discovery</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can specify as many as five different regular expression patterns in this field, each
   *       of which must be between 3 and 24 characters. You can include the <code>^</code> symbol as
   *       many as five times, and include the <code>|</code> symbol as many as four times.</p>
   * @public
   */
  logGroupNamePattern?: string | undefined;

  /**
   * <p>Use this parameter to limit the results to only those log groups in the specified log
   *       group class. If you omit this parameter, log groups of all classes can be returned.</p>
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * <p>If you are using a monitoring account, set this to <code>true</code> to have the operation
   *       return log groups in the accounts listed in <code>accountIdentifiers</code>.</p>
   *          <p>If this parameter is set to <code>true</code> and <code>accountIdentifiers</code> contains
   *       a null value, the operation returns all log groups in the monitoring account and all log
   *       groups in all source accounts that are linked to the monitoring account. </p>
   *          <p>The default for this parameter is <code>false</code>.</p>
   * @public
   */
  includeLinkedAccounts?: boolean | undefined;

  /**
   * <p>When <code>includeLinkedAccounts</code> is set to <code>true</code>, use this parameter to
   *       specify the list of accounts to search. You can specify as many as 20 account IDs in the
   *       array.</p>
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of log groups to return. If you omit this parameter, the default is
   *       up to 50 log groups.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>This structure contains information about one log group in your account.</p>
 * @public
 */
export interface LogGroupSummary {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the log group.</p>
   * @public
   */
  logGroupArn?: string | undefined;

  /**
   * <p>The log group class for this log group. For details about the features supported by each
   *       log group class, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsResponse {
  /**
   * <p>An array of structures, where each structure contains the information about one log
   *       group.</p>
   * @public
   */
  logGroups?: LogGroupSummary[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsForQueryRequest {
  /**
   * <p>The ID of the query to use. This query ID is from the response to your <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operation.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Limits the number of returned log groups to the specified number.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsForQueryResponse {
  /**
   * <p>An array of the names and ARNs of the log groups that were processed in the query.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>The token for the next set of items to return. The token expires after 24
   *       hours.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that you want to view tags for.</p>
   *          <p>The ARN format of a log group is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *         resources and operations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags associated with the requested resource.></p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface ListTagsLogGroupResponse {
  /**
   * <p>The tags for the log group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This object contains the information for one log event returned in a Live Tail
 *       stream.</p>
 * @public
 */
export interface LiveTailSessionLogEvent {
  /**
   * <p>The name of the log stream that ingested this log event.</p>
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * <p>The name or ARN of the log group that ingested this log event.</p>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The log event message text.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The timestamp specifying when this log event was created.</p>
   * @public
   */
  timestamp?: number | undefined;

  /**
   * <p>The timestamp specifying when this log event was ingested into the log group.</p>
   * @public
   */
  ingestionTime?: number | undefined;
}

/**
 * <p>This object contains the metadata for one <code>LiveTailSessionUpdate</code> structure. It
 *       indicates whether that update includes only a sample of 500 log events out of a larger number
 *       of ingested log events, or if it contains all of the matching log events ingested during that
 *       second of time.</p>
 * @public
 */
export interface LiveTailSessionMetadata {
  /**
   * <p>If this is <code>true</code>, then more than 500 log events matched the request for this
   *       update, and the <code>sessionResults</code> includes a sample of 500 of those events.</p>
   *          <p>If this is <code>false</code>, then 500 or fewer log events matched the request for this
   *       update, so no sampling was necessary. In this case, the <code>sessionResults</code> array
   *       includes all log events that matched your request during this time.</p>
   * @public
   */
  sampled?: boolean | undefined;
}

/**
 * <p>This object contains information about this Live Tail session, including the log groups
 *       included and the log stream filters, if any.</p>
 * @public
 */
export interface LiveTailSessionStart {
  /**
   * <p>The unique ID generated by CloudWatch Logs to identify this Live Tail session
   *       request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The unique ID generated by CloudWatch Logs to identify this Live Tail session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>An array of the names and ARNs of the log groups included in this Live Tail
   *       session.</p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>If your StartLiveTail operation request included a <code>logStreamNames</code> parameter
   *       that filtered the session to only include certain log streams, these streams are listed
   *       here.</p>
   * @public
   */
  logStreamNames?: string[] | undefined;

  /**
   * <p>If your StartLiveTail operation request included a <code>logStreamNamePrefixes</code>
   *       parameter that filtered the session to only include log streams that have names that start
   *       with certain prefixes, these prefixes are listed here.</p>
   * @public
   */
  logStreamNamePrefixes?: string[] | undefined;

  /**
   * <p>An optional pattern to filter the results to include only log events that match the
   *       pattern. For example, a filter pattern of <code>error 404</code> displays only log events that
   *       include both <code>error</code> and <code>404</code>.</p>
   *          <p>For more information about filter pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern
   *         Syntax</a>.</p>
   * @public
   */
  logEventFilterPattern?: string | undefined;
}

/**
 * <p>This object contains the log events and metadata for a Live Tail session.</p>
 * @public
 */
export interface LiveTailSessionUpdate {
  /**
   * <p>This object contains the session metadata for a Live Tail session.</p>
   * @public
   */
  sessionMetadata?: LiveTailSessionMetadata | undefined;

  /**
   * <p>An array, where each member of the array includes the information for one log event in the
   *       Live Tail session.</p>
   *          <p>A <code>sessionResults</code> array can include as many as 500 log events. If the number
   *       of log events matching the request exceeds 500 per second, the log events are sampled down to
   *       500 log events to be included in each <code>sessionUpdate</code> structure.</p>
   * @public
   */
  sessionResults?: LiveTailSessionLogEvent[] | undefined;
}

/**
 * @public
 */
export interface PutAccountPolicyRequest {
  /**
   * <p>A name for the policy. This must be unique within the account.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>Specify the policy, in JSON.</p>
   *          <p>
   *             <b>Data protection policy</b>
   *          </p>
   *          <p>A data protection policy must include two JSON blocks:</p>
   *          <ul>
   *             <li>
   *                <p>The first block must include both a <code>DataIdentifer</code> array and an
   *             <code>Operation</code> property with an <code>Audit</code> action. The
   *             <code>DataIdentifer</code> array lists the types of sensitive data that you want to
   *           mask. For more information about the available options, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html">Types of data that
   *             you can mask</a>.</p>
   *                <p>The <code>Operation</code> property with an <code>Audit</code> action is required to
   *           find the sensitive data terms. This <code>Audit</code> action must contain a
   *             <code>FindingsDestination</code> object. You can optionally use that
   *             <code>FindingsDestination</code> object to list one or more destinations to send audit
   *           findings to. If you specify destinations such as log groups, Firehose streams,
   *           and S3 buckets, they must already exist.</p>
   *             </li>
   *             <li>
   *                <p>The second block must include both a <code>DataIdentifer</code> array and an
   *             <code>Operation</code> property with an <code>Deidentify</code> action. The
   *             <code>DataIdentifer</code> array must exactly match the <code>DataIdentifer</code> array
   *           in the first block of the policy.</p>
   *                <p>The <code>Operation</code> property with the <code>Deidentify</code> action is what
   *           actually masks the data, and it must contain the <code> "MaskConfig": \{\}</code> object.
   *           The <code> "MaskConfig": \{\}</code> object must be empty.</p>
   *             </li>
   *          </ul>
   *          <p>For an example data protection policy, see the <b>Examples</b>
   *       section on this page.</p>
   *          <important>
   *             <p>The contents of the two <code>DataIdentifer</code> arrays must match exactly.</p>
   *          </important>
   *          <p>In addition to the two JSON blocks, the <code>policyDocument</code> can also include
   *         <code>Name</code>, <code>Description</code>, and <code>Version</code> fields. The
   *         <code>Name</code> is different than the operation's <code>policyName</code> parameter, and
   *       is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.</p>
   *          <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters
   *       long.</p>
   *          <p>
   *             <b>Subscription filter policy</b>
   *          </p>
   *          <p>A subscription filter policy can include the following attributes in a JSON block:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>DestinationArn</b> The ARN of the destination to deliver
   *           log events to. Supported destinations are:</p>
   *                <ul>
   *                   <li>
   *                      <p>An Kinesis Data Streams data stream in the same account as the subscription policy,
   *               for same-account delivery.</p>
   *                   </li>
   *                   <li>
   *                      <p>An Firehose data stream in the same account as the subscription policy,
   *               for same-account delivery.</p>
   *                   </li>
   *                   <li>
   *                      <p>A Lambda function in the same account as the subscription policy, for
   *               same-account delivery.</p>
   *                   </li>
   *                   <li>
   *                      <p>A logical destination in a different account created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a>, for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>RoleArn</b> The ARN of an IAM role that grants CloudWatch
   *           Logs permissions to deliver ingested log events to the destination stream. You don't need
   *           to provide the ARN when you are working with a logical destination for cross-account
   *           delivery.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FilterPattern</b> A filter pattern for subscribing to
   *           a filtered stream of log events.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Distribution</b> The method used to distribute log data
   *           to the destination. By default, log data is grouped by log stream, but the grouping can be
   *           set to <code>Random</code> for a more even distribution. This property is only applicable
   *           when the destination is an Kinesis Data Streams data stream.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Transformer policy</b>
   *          </p>
   *          <p>A transformer policy must include one JSON block with the array of processors and their
   *       configurations. For more information about available processors, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-Processors"> Processors that you can use</a>. </p>
   *          <p>
   *             <b>Field index policy</b>
   *          </p>
   *          <p>A field index filter policy can include the following attribute in a JSON block:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Fields</b> The array of field indexes to create.</p>
   *             </li>
   *          </ul>
   *          <p>It must contain at least one field index.</p>
   *          <p>The following is an example of an index policy document that creates two indexes,
   *         <code>RequestId</code> and <code>TransactionId</code>.</p>
   *          <p>
   *             <code>"policyDocument": "\{ \"Fields\": [ \"RequestId\", \"TransactionId\" ]
   *       \}"</code>
   *          </p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>The type of policy that you're creating or updating.</p>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>Currently the only valid value for this parameter is <code>ALL</code>, which specifies
   *       that the data protection policy applies to all log groups in the account. If you omit this
   *       parameter, the default of <code>ALL</code> is used.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>Use this parameter to apply the new policy to a subset of log groups in the
   *       account.</p>
   *          <p>Specifying <code>selectionCriteria</code> is valid only when you specify
   *         <code>SUBSCRIPTION_FILTER_POLICY</code>, <code>FIELD_INDEX_POLICY</code> or
   *         <code>TRANSFORMER_POLICY</code>for <code>policyType</code>.</p>
   *          <p>If <code>policyType</code> is <code>SUBSCRIPTION_FILTER_POLICY</code>, the only supported
   *         <code>selectionCriteria</code> filter is <code>LogGroupName NOT IN []</code>
   *          </p>
   *          <p>If <code>policyType</code> is <code>FIELD_INDEX_POLICY</code> or
   *         <code>TRANSFORMER_POLICY</code>, the only supported <code>selectionCriteria</code> filter is
   *         <code>LogGroupNamePrefix</code>
   *          </p>
   *          <p>The <code>selectionCriteria</code> string can be up to 25KB in length. The length is
   *       determined by using its UTF-8 bytes.</p>
   *          <p>Using the <code>selectionCriteria</code> parameter with
   *         <code>SUBSCRIPTION_FILTER_POLICY</code> is useful to help prevent infinite loops. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions-recursion-prevention.html">Log recursion
   *         prevention</a>.</p>
   * @public
   */
  selectionCriteria?: string | undefined;
}

/**
 * @public
 */
export interface PutAccountPolicyResponse {
  /**
   * <p>The account policy that you created.</p>
   * @public
   */
  accountPolicy?: AccountPolicy | undefined;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyRequest {
  /**
   * <p>Specify either the log group name or log group ARN.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * <p>Specify the data protection policy, in JSON.</p>
   *          <p>This policy must include two JSON blocks:</p>
   *          <ul>
   *             <li>
   *                <p>The first block must include both a <code>DataIdentifer</code> array and an
   *             <code>Operation</code> property with an <code>Audit</code> action. The
   *             <code>DataIdentifer</code> array lists the types of sensitive data that you want to
   *           mask. For more information about the available options, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html">Types of data that
   *             you can mask</a>.</p>
   *                <p>The <code>Operation</code> property with an <code>Audit</code> action is required to
   *           find the sensitive data terms. This <code>Audit</code> action must contain a
   *             <code>FindingsDestination</code> object. You can optionally use that
   *             <code>FindingsDestination</code> object to list one or more destinations to send audit
   *           findings to. If you specify destinations such as log groups, Firehose streams,
   *           and S3 buckets, they must already exist.</p>
   *             </li>
   *             <li>
   *                <p>The second block must include both a <code>DataIdentifer</code> array and an
   *             <code>Operation</code> property with an <code>Deidentify</code> action. The
   *             <code>DataIdentifer</code> array must exactly match the <code>DataIdentifer</code> array
   *           in the first block of the policy.</p>
   *                <p>The <code>Operation</code> property with the <code>Deidentify</code> action is what
   *           actually masks the data, and it must contain the <code> "MaskConfig": \{\}</code> object.
   *           The <code> "MaskConfig": \{\}</code> object must be empty.</p>
   *             </li>
   *          </ul>
   *          <p>For an example data protection policy, see the <b>Examples</b>
   *       section on this page.</p>
   *          <important>
   *             <p>The contents of the two <code>DataIdentifer</code> arrays must match exactly.</p>
   *          </important>
   *          <p>In addition to the two JSON blocks, the <code>policyDocument</code> can also include
   *         <code>Name</code>, <code>Description</code>, and <code>Version</code> fields. The
   *         <code>Name</code> is used as a dimension when CloudWatch Logs reports audit findings
   *       metrics to CloudWatch.</p>
   *          <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyResponse {
  /**
   * <p>The log group name or ARN that you specified in your request.</p>
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * <p>The data protection policy used for this log group.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The date and time that this policy was most recently updated.</p>
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationRequest {
  /**
   * <p>A name for this delivery destination. This name must be unique for all delivery
   *       destinations in your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The format for the logs that this delivery destination will receive.</p>
   * @public
   */
  outputFormat?: OutputFormat | undefined;

  /**
   * <p>A structure that contains the ARN of the Amazon Web Services resource that will receive the
   *       logs.</p>
   *          <note>
   *             <p>
   *                <code>deliveryDestinationConfiguration</code> is required for CloudWatch Logs,
   *           Amazon S3, Firehose log delivery destinations and not required for
   *           X-Ray trace delivery destinations. <code>deliveryDestinationType</code> is
   *         needed for X-Ray trace delivery destinations but not required for other logs
   *         delivery destinations.</p>
   *          </note>
   * @public
   */
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration | undefined;

  /**
   * <p>The type of delivery destination. This parameter specifies the target service where log
   *       data will be delivered. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>S3</code> - Amazon S3 for long-term storage and analytics</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CWL</code> - CloudWatch Logs for centralized log management</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FH</code> - Amazon Kinesis Data Firehose for real-time data streaming</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XRAY</code> - Amazon Web Services
   *           X-Ray for distributed tracing and application monitoring</p>
   *             </li>
   *          </ul>
   *          <p>The delivery destination type determines the format and configuration options available
   *       for log delivery.</p>
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationResponse {
  /**
   * <p>A structure containing information about the delivery destination that you just created or
   *       updated.</p>
   * @public
   */
  deliveryDestination?: DeliveryDestination | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationPolicyRequest {
  /**
   * <p>The name of the delivery destination to assign this policy to.</p>
   * @public
   */
  deliveryDestinationName: string | undefined;

  /**
   * <p>The contents of the policy.</p>
   * @public
   */
  deliveryDestinationPolicy: string | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationPolicyResponse {
  /**
   * <p>The contents of the policy that you just created.</p>
   * @public
   */
  policy?: Policy | undefined;
}

/**
 * @public
 */
export interface PutDeliverySourceRequest {
  /**
   * <p>A name for this delivery source. This name must be unique for all delivery sources in your
   *       account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services resource that is generating and sending logs. For
   *       example,
   *         <code>arn:aws:workmail:us-east-1:123456789012:organization/m-1234EXAMPLEabcd1234abcd1234abcd1234</code>
   *          </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Defines the type of log that the source is sending.</p>
   *          <ul>
   *             <li>
   *                <p>For Amazon Bedrock, the valid value is <code>APPLICATION_LOGS</code> and
   *             <code>TRACES</code>.</p>
   *             </li>
   *             <li>
   *                <p>For CloudFront, the valid value is <code>ACCESS_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon CodeWhisperer, the valid value is <code>EVENT_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Elemental MediaPackage, the valid values are <code>EGRESS_ACCESS_LOGS</code> and
   *             <code>INGRESS_ACCESS_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Elemental MediaTailor, the valid values are <code>AD_DECISION_SERVER_LOGS</code>,
   *             <code>MANIFEST_SERVICE_LOGS</code>, and <code>TRANSCODE_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Entity Resolution, the valid value is <code>WORKFLOW_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For IAM Identity Center, the valid value is
   *           <code>ERROR_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For PCS, the valid values are <code>PCS_SCHEDULER_LOGS</code> and
   *             <code>PCS_JOBCOMP_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon Q, the valid value is <code>EVENT_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon SES mail manager, the valid values are <code>APPLICATION_LOG</code>
   *           and <code>TRAFFIC_POLICY_DEBUG_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon WorkMail, the valid values are <code>ACCESS_CONTROL_LOGS</code>,
   *             <code>AUTHENTICATION_LOGS</code>, <code>WORKMAIL_AVAILABILITY_PROVIDER_LOGS</code>,
   *             <code>WORKMAIL_MAILBOX_ACCESS_LOGS</code>, and
   *             <code>WORKMAIL_PERSONAL_ACCESS_TOKEN_LOGS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon VPC Route Server, the valid value is
   *           <code>EVENT_LOGS</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  logType: string | undefined;

  /**
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDeliverySourceResponse {
  /**
   * <p>A structure containing information about the delivery source that was just created or
   *       updated.</p>
   * @public
   */
  deliverySource?: DeliverySource | undefined;
}

/**
 * @public
 */
export interface PutDestinationRequest {
  /**
   * <p>A name for the destination.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>The ARN of an Amazon Kinesis stream to which to deliver matching log events.</p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon
   *       Kinesis <code>PutRecord</code> operation on the destination stream.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDestinationResponse {
  /**
   * <p>The destination.</p>
   * @public
   */
  destination?: Destination | undefined;
}

/**
 * @public
 */
export interface PutDestinationPolicyRequest {
  /**
   * <p>A name for an existing destination.</p>
   * @public
   */
  destinationName: string | undefined;

  /**
   * <p>An IAM policy document that authorizes cross-account users to deliver their log events
   *       to the associated destination. This can be up to 5120 bytes.</p>
   * @public
   */
  accessPolicy: string | undefined;

  /**
   * <p>Specify true if you are updating an existing destination policy to grant permission to an
   *       organization ID instead of granting permission to individual Amazon Web Services accounts.
   *       Before you update a destination policy this way, you must first update the subscription
   *       filters in the accounts that send logs to this destination. If you do not, the subscription
   *       filters might stop working. By specifying <code>true</code> for <code>forceUpdate</code>, you
   *       are affirming that you have already updated the subscription filters. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Cross-Account-Log_Subscription-Update.html"> Updating an
   *         existing cross-account subscription</a>
   *          </p>
   *          <p>If you omit this parameter, the default of <code>false</code> is used.</p>
   * @public
   */
  forceUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface PutIndexPolicyRequest {
  /**
   * <p>Specify either the log group name or log group ARN to apply this field index policy to. If
   *       you specify an ARN, use the format
   *         arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i>
   *       Don't include an * at the end.</p>
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * <p>The index policy document, in JSON format. The following is an example of an index policy
   *       document that creates two indexes, <code>RequestId</code> and
   *       <code>TransactionId</code>.</p>
   *          <p>
   *             <code>"policyDocument": "\{ "Fields": [ "RequestId", "TransactionId" ] \}"</code>
   *          </p>
   *          <p>The policy document must include at least one field index. For more information about the
   *       fields that can be included and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing-Syntax.html">Field index
   *         syntax and quotas</a>.</p>
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutIndexPolicyResponse {
  /**
   * <p>The index policy that you just created or updated.</p>
   * @public
   */
  indexPolicy?: IndexPolicy | undefined;
}

/**
 * <p>This structure contains configuration details about an integration between CloudWatch Logs and OpenSearch Service.</p>
 * @public
 */
export interface OpenSearchResourceConfig {
  /**
   * <p>To have the vended dashboard data encrypted with KMS instead of the CloudWatch Logs default encryption method, specify the ARN of the KMS key that you
   *       want to use.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Specify the ARN of an IAM role that CloudWatch Logs will use to create
   *       the integration. This role must have the permissions necessary to access the OpenSearch Service collection to be able to create the dashboards. For more information about the permissions
   *       needed, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/OpenSearch-Dashboards-CreateRole.html">Permissions that
   *         the integration needs</a> in the CloudWatch Logs User Guide.</p>
   * @public
   */
  dataSourceRoleArn: string | undefined;

  /**
   * <p>Specify the ARNs of IAM roles and IAM users who you want to
   *       grant permission to for viewing the dashboards.</p>
   *          <important>
   *             <p>In addition to specifying these users here, you must also grant them the <b>CloudWatchOpenSearchDashboardAccess</b>
   *         IAM policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/OpenSearch-Dashboards-UserRoles.html">IAM policies for
   *           users</a>.</p>
   *          </important>
   * @public
   */
  dashboardViewerPrincipals: string[] | undefined;

  /**
   * <p>If you want to use an existing OpenSearch Service application for your integration with
   *         OpenSearch Service, specify it here. If you omit this, a new application will be
   *       created.</p>
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * <p>Specify how many days that you want the data derived by OpenSearch Service to be retained
   *       in the index that the dashboard refers to. This also sets the maximum time period that you can
   *       choose when viewing data in the dashboard. Choosing a longer time frame will incur additional
   *       costs. </p>
   * @public
   */
  retentionDays: number | undefined;
}

/**
 * <p>This structure contains configuration details about an integration between CloudWatch Logs and another entity.</p>
 * @public
 */
export type ResourceConfig = ResourceConfig.OpenSearchResourceConfigMember | ResourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace ResourceConfig {
  /**
   * <p>This structure contains configuration details about an integration between CloudWatch Logs and OpenSearch Service.</p>
   * @public
   */
  export interface OpenSearchResourceConfigMember {
    openSearchResourceConfig: OpenSearchResourceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openSearchResourceConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    openSearchResourceConfig: (value: OpenSearchResourceConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceConfig, visitor: Visitor<T>): T => {
    if (value.openSearchResourceConfig !== undefined)
      return visitor.openSearchResourceConfig(value.openSearchResourceConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * <p>A name for the integration.</p>
   * @public
   */
  integrationName: string | undefined;

  /**
   * <p>A structure that contains configuration information for the integration that you are
   *       creating.</p>
   * @public
   */
  resourceConfig: ResourceConfig | undefined;

  /**
   * <p>The type of integration. Currently, the only supported type is
   *       <code>OPENSEARCH</code>.</p>
   * @public
   */
  integrationType: IntegrationType | undefined;
}

/**
 * @public
 */
export interface PutIntegrationResponse {
  /**
   * <p>The name of the integration that you just created.</p>
   * @public
   */
  integrationName?: string | undefined;

  /**
   * <p>The status of the integration that you just created.</p>
   *          <p>After you create an integration, it takes a few minutes to complete. During this time,
   *       you'll see the status as <code>PROVISIONING</code>.</p>
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface PutLogEventsRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  logStreamName: string | undefined;

  /**
   * <p>The log events.</p>
   * @public
   */
  logEvents: InputLogEvent[] | undefined;

  /**
   * <p>The sequence token obtained from the response of the previous <code>PutLogEvents</code>
   *       call.</p>
   *          <important>
   *             <p>The <code>sequenceToken</code> parameter is now ignored in <code>PutLogEvents</code>
   *         actions. <code>PutLogEvents</code> actions are now accepted and never return
   *           <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code>
   *         even if the sequence token is not valid.</p>
   *          </important>
   * @public
   */
  sequenceToken?: string | undefined;

  /**
   * <p>The entity associated with the log events.</p>
   * @public
   */
  entity?: Entity | undefined;
}

/**
 * <p>If an entity is rejected when a <code>PutLogEvents</code> request was made, this includes
 *       details about the reason for the rejection.</p>
 * @public
 */
export interface RejectedEntityInfo {
  /**
   * <p>The type of error that caused the rejection of the entity when calling
   *         <code>PutLogEvents</code>.</p>
   * @public
   */
  errorType: EntityRejectionErrorType | undefined;
}

/**
 * <p>Represents the rejected events.</p>
 * @public
 */
export interface RejectedLogEventsInfo {
  /**
   * <p>The index of the first log event that is too new. This field is inclusive.</p>
   * @public
   */
  tooNewLogEventStartIndex?: number | undefined;

  /**
   * <p>The index of the last log event that is too old. This field is exclusive.</p>
   * @public
   */
  tooOldLogEventEndIndex?: number | undefined;

  /**
   * <p>The expired log events.</p>
   * @public
   */
  expiredLogEventEndIndex?: number | undefined;
}

/**
 * @public
 */
export interface PutLogEventsResponse {
  /**
   * <p>The next sequence token.</p>
   *          <important>
   *             <p>This field has been deprecated.</p>
   *             <p>The sequence token is now ignored in <code>PutLogEvents</code> actions.
   *           <code>PutLogEvents</code> actions are always accepted even if the sequence token is not
   *         valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream and you
   *         do not need to wait for the response of a previous <code>PutLogEvents</code> action to
   *         obtain the <code>nextSequenceToken</code> value.</p>
   *          </important>
   * @public
   */
  nextSequenceToken?: string | undefined;

  /**
   * <p>The rejected events.</p>
   * @public
   */
  rejectedLogEventsInfo?: RejectedLogEventsInfo | undefined;

  /**
   * <p>Information about why the entity is rejected when calling <code>PutLogEvents</code>. Only
   *       returned when the entity is rejected.</p>
   *          <note>
   *             <p>When the entity is rejected, the events may still be accepted.</p>
   *          </note>
   * @public
   */
  rejectedEntityInfo?: RejectedEntityInfo | undefined;
}

/**
 * <p>The most likely cause is an Amazon Web Services access key ID or secret key that's not
 *       valid.</p>
 * @public
 */
export class UnrecognizedClientException extends __BaseException {
  readonly name: "UnrecognizedClientException" = "UnrecognizedClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnrecognizedClientException, __BaseException>) {
    super({
      name: "UnrecognizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnrecognizedClientException.prototype);
  }
}

/**
 * @public
 */
export interface PutMetricFilterRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>A name for the metric filter.</p>
   * @public
   */
  filterName: string | undefined;

  /**
   * <p>A filter pattern for extracting metric data out of ingested log events.</p>
   * @public
   */
  filterPattern: string | undefined;

  /**
   * <p>A collection of information that defines how metric data gets emitted.</p>
   * @public
   */
  metricTransformations: MetricTransformation[] | undefined;

  /**
   * <p>This parameter is valid only for log groups that have an active log transformer. For more
   *       information about log transformers, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html">PutTransformer</a>.</p>
   *          <p>If the log group uses either a log-group level or account-level transformer, and you
   *       specify <code>true</code>, the metric filter will be applied on the transformed version of the
   *       log events instead of the original ingested log events.</p>
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * <p>A filter expression that specifies which log events should be processed by this metric filter based on system fields such as source account and source region. Uses selection criteria syntax with operators like <code>=</code>, <code>!=</code>, <code>AND</code>, <code>OR</code>, <code>IN</code>, <code>NOT IN</code>. Example: <code>@aws.region = "us-east-1"</code> or <code>@aws.account IN ["123456789012", "987654321098"]</code>. Maximum length: 2000 characters.</p>
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * <p>A list of system fields to emit as additional dimensions in the generated metrics. Valid values are <code>@aws.account</code> and <code>@aws.region</code>. These dimensions help identify the source of centralized log data and count toward the total dimension limit for metric filters.</p>
   * @public
   */
  emitSystemFieldDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface PutQueryDefinitionRequest {
  /**
   * <p>Specify the query language to use for this query. The options are Logs Insights QL,
   *       OpenSearch PPL, and OpenSearch SQL. For more information about the query languages that
   *         CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
   *         languages</a>.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>A name for the query definition. If you are saving numerous query definitions, we
   *       recommend that you name them. This way, you can find the ones you want by using the first part
   *       of the name as a filter in the <code>queryDefinitionNamePrefix</code> parameter of <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>If you are updating a query definition, use this parameter to specify the ID of the query
   *       definition that you want to update. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the IDs of your saved query
   *       definitions.</p>
   *          <p>If you are creating a query definition, do not specify this parameter. CloudWatch
   *       generates a unique ID for the new query definition and include it in the response to this
   *       operation.</p>
   * @public
   */
  queryDefinitionId?: string | undefined;

  /**
   * <p>Use this parameter to include specific log groups as part of your query definition. If
   *       your query uses the OpenSearch Service query language, you specify the log group names inside
   *       the <code>querystring</code> instead of here.</p>
   *          <p>If you are updating an existing query definition for the Logs Insights QL or OpenSearch Service PPL and you omit this parameter, then the updated definition will contain no log
   *       groups.</p>
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * <p>The query string to use for this definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs
   *         Insights Query Syntax</a>.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>Used as an idempotency token, to avoid returning an exception if the service receives the
   *       same request twice because of a network error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutQueryDefinitionResponse {
  /**
   * <p>The ID of the query definition.</p>
   * @public
   */
  queryDefinitionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>Name of the new policy. This parameter is required.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>Details of the new policy, including the identity of the principal that is enabled to
   *       put logs to this account. This is formatted as a JSON string. This parameter is
   *       required.</p>
   *          <p>The following example creates a resource policy enabling the Route 53 service to put
   *       DNS query logs in to the specified log group. Replace <code>"logArn"</code> with the ARN of
   *       your CloudWatch Logs resource, such as a log group or log stream.</p>
   *          <p>CloudWatch Logs also supports <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn">aws:SourceArn</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount">aws:SourceAccount</a> condition context keys.</p>
   *          <p>In the example resource policy, you would replace the value of <code>SourceArn</code> with
   *       the resource making the call from Route 53 to CloudWatch Logs. You would also
   *       replace the value of <code>SourceAccount</code> with the Amazon Web Services account ID making
   *       that call.</p>
   *          <p></p>
   *          <p>
   *             <code>\{ "Version": "2012-10-17", "Statement": [ \{ "Sid": "Route53LogsToCloudWatchLogs",
   *         "Effect": "Allow", "Principal": \{ "Service": [ "route53.amazonaws.com" ] \}, "Action":
   *         "logs:PutLogEvents", "Resource": "logArn", "Condition": \{ "ArnLike": \{ "aws:SourceArn":
   *         "myRoute53ResourceArn" \}, "StringEquals": \{ "aws:SourceAccount": "myAwsAccountId" \} \} \} ]
   *         \}</code>
   *          </p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs resource to which the resource policy needs to be added
   *       or attached. Currently only supports LogGroup ARN.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The expected revision ID of the resource policy. Required when <code>resourceArn</code> is
   *       provided to prevent concurrent modifications. Use <code>null</code> when creating a resource
   *       policy for the first time.</p>
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The new policy.</p>
   * @public
   */
  resourcePolicy?: ResourcePolicy | undefined;

  /**
   * <p>The revision ID of the created or updated resource policy. Only returned for
   *       resource-scoped policies.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutRetentionPolicyRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The number of days to retain the log events in the specified log group. Possible values
   *       are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557,
   *       2922, 3288, and 3653.</p>
   *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
   * @public
   */
  retentionInDays: number | undefined;
}

/**
 * @public
 */
export interface PutSubscriptionFilterRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>A name for the subscription filter. If you are updating an existing filter, you must
   *       specify the correct name in <code>filterName</code>. To find the name of the filter currently
   *       associated with a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html">DescribeSubscriptionFilters</a>.</p>
   * @public
   */
  filterName: string | undefined;

  /**
   * <p>A filter pattern for subscribing to a filtered stream of log events.</p>
   * @public
   */
  filterPattern: string | undefined;

  /**
   * <p>The ARN of the destination to deliver matching log events to. Currently, the supported
   *       destinations are:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Kinesis stream belonging to the same account as the subscription filter,
   *           for same-account delivery.</p>
   *             </li>
   *             <li>
   *                <p>A logical destination (specified using an ARN) belonging to a different account,
   *           for cross-account delivery.</p>
   *                <p>If you're setting up a cross-account subscription, the destination must have an IAM
   *           policy associated with it. The IAM policy must allow the sender to send logs to the
   *           destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>A Kinesis Data Firehose delivery stream belonging to the same account as the
   *           subscription filter, for same-account delivery.</p>
   *             </li>
   *             <li>
   *                <p>A Lambda function belonging to the same account as the subscription
   *           filter, for same-account delivery.</p>
   *             </li>
   *          </ul>
   * @public
   */
  destinationArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log
   *       events to the destination stream. You don't need to provide the ARN when you are working with
   *       a logical destination for cross-account delivery.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The method used to distribute log data to the destination. By default, log data is
   *       grouped by log stream, but the grouping can be set to random for a more even distribution.
   *       This property is only applicable when the destination is an Amazon Kinesis data stream.
   *     </p>
   * @public
   */
  distribution?: Distribution | undefined;

  /**
   * <p>This parameter is valid only for log groups that have an active log transformer. For more
   *       information about log transformers, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html">PutTransformer</a>.</p>
   *          <p>If the log group uses either a log-group level or account-level transformer, and you
   *       specify <code>true</code>, the subscription filter will be applied on the transformed version
   *       of the log events instead of the original ingested log events.</p>
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * <p>A filter expression that specifies which log events should be processed by this subscription filter based on system fields such as source account and source region. Uses selection criteria syntax with operators like <code>=</code>, <code>!=</code>, <code>AND</code>, <code>OR</code>, <code>IN</code>, <code>NOT IN</code>. Example: <code>@aws.region NOT IN ["cn-north-1"]</code> or <code>@aws.account = "123456789012" AND @aws.region = "us-east-1"</code>. Maximum length: 2000 characters.</p>
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * <p>A list of system fields to include in the log events sent to the subscription destination. Valid values are <code>@aws.account</code> and <code>@aws.region</code>. These fields provide source information for centralized log data in the forwarded payload.</p>
   * @public
   */
  emitSystemFields?: string[] | undefined;
}

/**
 * @public
 */
export interface PutTransformerRequest {
  /**
   * <p>Specify either the name or ARN of the log group to create the transformer for. </p>
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * <p>This structure contains the configuration of this log transformer. A log transformer is an
   *       array of processors, where each processor applies one type of transformation to the log events
   *       that are ingested.</p>
   * @public
   */
  transformerConfig: Processor[] | undefined;
}

/**
 * @public
 */
export interface StartLiveTailRequest {
  /**
   * <p>An array where each item in the array is a log group to include in the Live Tail
   *       session.</p>
   *          <p>Specify each log group by its ARN. </p>
   *          <p>If you specify an ARN, the ARN can't end with an asterisk (*).</p>
   *          <note>
   *             <p> You can include up to 10 log groups.</p>
   *          </note>
   * @public
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * <p>If you specify this parameter, then only log events in the log streams that you specify
   *       here are included in the Live Tail session.</p>
   *          <p>If you specify this field, you can't also specify the <code>logStreamNamePrefixes</code>
   *       field.</p>
   *          <note>
   *             <p>You can specify this parameter only if you specify only one log group in
   *           <code>logGroupIdentifiers</code>.</p>
   *          </note>
   * @public
   */
  logStreamNames?: string[] | undefined;

  /**
   * <p>If you specify this parameter, then only log events in the log streams that have names
   *       that start with the prefixes that you specify here are included in the Live Tail
   *       session.</p>
   *          <p>If you specify this field, you can't also specify the <code>logStreamNames</code>
   *       field.</p>
   *          <note>
   *             <p>You can specify this parameter only if you specify only one log group in
   *           <code>logGroupIdentifiers</code>.</p>
   *          </note>
   * @public
   */
  logStreamNamePrefixes?: string[] | undefined;

  /**
   * <p>An optional pattern to use to filter the results to include only log events that match the
   *       pattern. For example, a filter pattern of <code>error 404</code> causes only log events that
   *       include both <code>error</code> and <code>404</code> to be included in the Live Tail
   *       stream.</p>
   *          <p>Regular expression filter patterns are supported.</p>
   *          <p>For more information about filter pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern
   *         Syntax</a>.</p>
   * @public
   */
  logEventFilterPattern?: string | undefined;
}

/**
 * <p>This exception is returned if an unknown error occurs during a Live Tail session.</p>
 * @public
 */
export class SessionStreamingException extends __BaseException {
  readonly name: "SessionStreamingException" = "SessionStreamingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionStreamingException, __BaseException>) {
    super({
      name: "SessionStreamingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionStreamingException.prototype);
  }
}

/**
 * <p>This exception is returned in a Live Tail stream when the Live Tail session times out.
 *       Live Tail sessions time out after three hours.</p>
 * @public
 */
export class SessionTimeoutException extends __BaseException {
  readonly name: "SessionTimeoutException" = "SessionTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionTimeoutException, __BaseException>) {
    super({
      name: "SessionTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionTimeoutException.prototype);
  }
}

/**
 * <p>This object includes the stream returned by your <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html">StartLiveTail</a>
 *       request.</p>
 * @public
 */
export type StartLiveTailResponseStream =
  | StartLiveTailResponseStream.SessionStreamingExceptionMember
  | StartLiveTailResponseStream.SessionTimeoutExceptionMember
  | StartLiveTailResponseStream.SessionStartMember
  | StartLiveTailResponseStream.SessionUpdateMember
  | StartLiveTailResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace StartLiveTailResponseStream {
  /**
   * <p>This object contains information about this Live Tail session, including the log groups
   *       included and the log stream filters, if any.</p>
   * @public
   */
  export interface SessionStartMember {
    sessionStart: LiveTailSessionStart;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * <p>This object contains the log events and session metadata.</p>
   * @public
   */
  export interface SessionUpdateMember {
    sessionStart?: never;
    sessionUpdate: LiveTailSessionUpdate;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * <p>This exception is returned in the stream when the Live Tail session times out. Live Tail
   *       sessions time out after three hours.</p>
   * @public
   */
  export interface SessionTimeoutExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException: SessionTimeoutException;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * <p>This exception is returned if an unknown error occurs.</p>
   * @public
   */
  export interface SessionStreamingExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException: SessionStreamingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sessionStart: (value: LiveTailSessionStart) => T;
    sessionUpdate: (value: LiveTailSessionUpdate) => T;
    SessionTimeoutException: (value: SessionTimeoutException) => T;
    SessionStreamingException: (value: SessionStreamingException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StartLiveTailResponseStream, visitor: Visitor<T>): T => {
    if (value.sessionStart !== undefined) return visitor.sessionStart(value.sessionStart);
    if (value.sessionUpdate !== undefined) return visitor.sessionUpdate(value.sessionUpdate);
    if (value.SessionTimeoutException !== undefined)
      return visitor.SessionTimeoutException(value.SessionTimeoutException);
    if (value.SessionStreamingException !== undefined)
      return visitor.SessionStreamingException(value.SessionStreamingException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface StartLiveTailResponse {
  /**
   * <p>An object that includes the stream returned by your request. It can include both log
   *       events and exceptions.</p>
   * @public
   */
  responseStream?: AsyncIterable<StartLiveTailResponseStream> | undefined;
}

/**
 * <p>Reserved.</p>
 * @public
 */
export interface QueryCompileErrorLocation {
  /**
   * <p>Reserved.</p>
   * @public
   */
  startCharOffset?: number | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  endCharOffset?: number | undefined;
}

/**
 * <p>Reserved.</p>
 * @public
 */
export interface QueryCompileError {
  /**
   * <p>Reserved.</p>
   * @public
   */
  location?: QueryCompileErrorLocation | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The query string is not valid. Details about this error are displayed in a
 *         <code>QueryCompileError</code> object. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_QueryCompileError.html">QueryCompileError</a>.</p>
 *          <p>For more information about valid query syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query
 *         Syntax</a>.</p>
 * @public
 */
export class MalformedQueryException extends __BaseException {
  readonly name: "MalformedQueryException" = "MalformedQueryException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reserved.</p>
   * @public
   */
  queryCompileError?: QueryCompileError | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedQueryException, __BaseException>) {
    super({
      name: "MalformedQueryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedQueryException.prototype);
    this.queryCompileError = opts.queryCompileError;
  }
}

/**
 * @public
 */
export interface StartQueryRequest {
  /**
   * <p>Specify the query language to use for this query. The options are Logs Insights QL,
   *       OpenSearch PPL, and OpenSearch SQL. For more information about the query languages that
   *         CloudWatch Logs supports, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html">Supported query
   *         languages</a>.</p>
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * <p>The log group on which to perform the query.</p>
   *          <note>
   *             <p>A <code>StartQuery</code> operation must include exactly one of the following
   *         parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or
   *           <code>logGroupIdentifiers</code>. The exception is queries using the OpenSearch Service
   *         SQL query language, where you specify the log group names inside the
   *           <code>querystring</code> instead of here.</p>
   *          </note>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p>The list of log groups to be queried. You can include up to 50 log groups.</p>
   *          <note>
   *             <p>A <code>StartQuery</code> operation must include exactly one of the following
   *         parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or
   *           <code>logGroupIdentifiers</code>. The exception is queries using the OpenSearch Service
   *         SQL query language, where you specify the log group names inside the
   *           <code>querystring</code> instead of here.</p>
   *          </note>
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * <p>The list of log groups to query. You can include up to 50 log groups.</p>
   *          <p>You can specify them by the log group name or ARN. If a log group that you're querying is
   *       in a source account and you're using a monitoring account, you must specify the ARN of the log
   *       group here. The query definition must also be defined in the monitoring account.</p>
   *          <p>If you specify an ARN, use the format
   *         arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i>
   *       Don't include an * at the end.</p>
   *          <p>A <code>StartQuery</code> operation must include exactly one of the following parameters:
   *         <code>logGroupName</code>, <code>logGroupNames</code>, or <code>logGroupIdentifiers</code>.
   *       The exception is queries using the OpenSearch Service SQL query language, where you specify
   *       the log group names inside the <code>querystring</code> instead of here. </p>
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * <p>The beginning of the time range to query. The range is inclusive, so the specified start
   *       time is included in the query. Specified as epoch time, the number of seconds since
   *         <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   * @public
   */
  startTime: number | undefined;

  /**
   * <p>The end of the time range to query. The range is inclusive, so the specified end time is
   *       included in the query. Specified as epoch time, the number of seconds since <code>January 1,
   *         1970, 00:00:00 UTC</code>.</p>
   * @public
   */
  endTime: number | undefined;

  /**
   * <p>The query string to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query
   *         Syntax</a>.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The maximum number of log events to return in the query. If the query string uses the
   *         <code>fields</code> command, only the specified fields and their values are returned. The
   *       default is 10,000.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface StartQueryResponse {
  /**
   * <p>The unique ID of the query. </p>
   * @public
   */
  queryId?: string | undefined;
}

/**
 * @public
 */
export interface StopQueryRequest {
  /**
   * <p>The ID number of the query to stop. To find this ID number, use
   *         <code>DescribeQueries</code>.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryResponse {
  /**
   * <p>This is true if the query was stopped by the <code>StopQuery</code> operation.</p>
   * @public
   */
  success?: boolean | undefined;
}

/**
 * @public
 */
export interface TagLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The key-value pairs to use for the tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource that you're adding tags to.</p>
   *          <p>The ARN format of a log group is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *         resources and operations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>A resource can have no more than 50 tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface TestMetricFilterRequest {
  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern: string | undefined;

  /**
   * <p>The log event messages to test.</p>
   * @public
   */
  logEventMessages: string[] | undefined;
}

/**
 * <p>Represents a matched event.</p>
 * @public
 */
export interface MetricFilterMatchRecord {
  /**
   * <p>The event number.</p>
   * @public
   */
  eventNumber?: number | undefined;

  /**
   * <p>The raw event data.</p>
   * @public
   */
  eventMessage?: string | undefined;

  /**
   * <p>The values extracted from the event data by the filter.</p>
   * @public
   */
  extractedValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TestMetricFilterResponse {
  /**
   * <p>The matched events.</p>
   * @public
   */
  matches?: MetricFilterMatchRecord[] | undefined;
}

/**
 * @public
 */
export interface TestTransformerRequest {
  /**
   * <p>This structure contains the configuration of this log transformer that you want to test. A
   *       log transformer is an array of processors, where each processor applies one type of
   *       transformation to the log events that are ingested.</p>
   * @public
   */
  transformerConfig: Processor[] | undefined;

  /**
   * <p>An array of the raw log events that you want to use to test this transformer.</p>
   * @public
   */
  logEventMessages: string[] | undefined;
}

/**
 * <p>This structure contains information for one log event that has been processed by a log
 *       transformer.</p>
 * @public
 */
export interface TransformedLogRecord {
  /**
   * <p>The event number.</p>
   * @public
   */
  eventNumber?: number | undefined;

  /**
   * <p>The original log event message before it was transformed.</p>
   * @public
   */
  eventMessage?: string | undefined;

  /**
   * <p>The log event message after being transformed.</p>
   * @public
   */
  transformedEventMessage?: string | undefined;
}

/**
 * @public
 */
export interface TestTransformerResponse {
  /**
   * <p>An array where each member of the array includes both the original version and the
   *       transformed version of one of the log events that you input.</p>
   * @public
   */
  transformedLogs?: TransformedLogRecord[] | undefined;
}

/**
 * @public
 */
export interface UntagLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The tag keys. The corresponding tags are removed from the log group.</p>
   * @public
   */
  tags: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the CloudWatch Logs resource that you're removing tags from.</p>
   *          <p>The ARN format of a log group is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *           <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *         resources and operations</a>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SuppressionUnit = {
  HOURS: "HOURS",
  MINUTES: "MINUTES",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type SuppressionUnit = (typeof SuppressionUnit)[keyof typeof SuppressionUnit];

/**
 * <p>If you are suppressing an anomaly temporariliy, this structure defines how long the
 *       suppression period is to be.</p>
 * @public
 */
export interface SuppressionPeriod {
  /**
   * <p>Specifies the number of seconds, minutes or hours to suppress this anomaly. There is no
   *       maximum.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>Specifies whether the value of <code>value</code> is in seconds, minutes, or hours.</p>
   * @public
   */
  suppressionUnit?: SuppressionUnit | undefined;
}

/**
 * @public
 * @enum
 */
export const SuppressionType = {
  INFINITE: "INFINITE",
  LIMITED: "LIMITED",
} as const;

/**
 * @public
 */
export type SuppressionType = (typeof SuppressionType)[keyof typeof SuppressionType];

/**
 * @public
 */
export interface UpdateAnomalyRequest {
  /**
   * <p>If you are suppressing or unsuppressing an anomaly, specify its unique ID here. You can
   *       find anomaly IDs by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html">ListAnomalies</a>
   *       operation.</p>
   * @public
   */
  anomalyId?: string | undefined;

  /**
   * <p>If you are suppressing or unsuppressing an pattern, specify its unique ID here. You can
   *       find pattern IDs by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html">ListAnomalies</a>
   *       operation.</p>
   * @public
   */
  patternId?: string | undefined;

  /**
   * <p>The ARN of the anomaly detector that this operation is to act on.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * <p>Use this to specify whether the suppression to be temporary or infinite. If you specify
   *         <code>LIMITED</code>, you must also specify a <code>suppressionPeriod</code>. If you specify
   *         <code>INFINITE</code>, any value for <code>suppressionPeriod</code> is ignored. </p>
   * @public
   */
  suppressionType?: SuppressionType | undefined;

  /**
   * <p>If you are temporarily suppressing an anomaly or pattern, use this structure to specify
   *       how long the suppression is to last.</p>
   * @public
   */
  suppressionPeriod?: SuppressionPeriod | undefined;

  /**
   * <p>Set this to <code>true</code> to prevent CloudWatch Logs from displaying this behavior
   *       as an anomaly in the future. The behavior is then treated as baseline behavior. However, if
   *       similar but more severe occurrences of this behavior occur in the future, those will still be
   *       reported as anomalies. </p>
   *          <p>The default is <code>false</code>
   *          </p>
   * @public
   */
  baseline?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDeliveryConfigurationRequest {
  /**
   * <p>The ID of the delivery to be updated by this request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The list of record fields to be delivered to the destination, in order. If the delivery's
   *       log source has mandatory fields, they must be included in this list.</p>
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * <p>The field delimiter to use between record fields when the final output format of a
   *       delivery is in <code>Plain</code>, <code>W3C</code>, or <code>Raw</code> format.</p>
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * <p>This structure contains parameters that are valid only when the delivery's delivery
   *       destination is an S3 bucket.</p>
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDeliveryConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLogAnomalyDetectorRequest {
  /**
   * <p>The ARN of the anomaly detector that you want to update.</p>
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * <p>Specifies how often the anomaly detector runs and look for anomalies. Set this value
   *       according to the frequency that the log group receives new logs. For example, if the log group
   *       receives new log events every 10 minutes, then setting <code>evaluationFrequency</code> to
   *         <code>FIFTEEN_MIN</code> might be appropriate.</p>
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * <p>The number of days to use as the life cycle of anomalies. After this time, anomalies are
   *       automatically baselined and the anomaly detector model will treat new occurrences of similar
   *       event as normal. Therefore, if you do not correct the cause of an anomaly during this time, it
   *       will be considered normal going forward and will not be detected.</p>
   * @public
   */
  anomalyVisibilityTime?: number | undefined;

  /**
   * <p>Use this parameter to pause or restart the anomaly detector. </p>
   * @public
   */
  enabled: boolean | undefined;
}
