// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";

/**
 * @public
 * <p>You don't have sufficient permissions to perform this action.</p>
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
 * @public
 * <p>A structure that contains information about one CloudWatch Logs account policy.</p>
 */
export interface AccountPolicy {
  /**
   * @public
   * <p>The name of the account policy.</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>The policy document for this account policy.</p>
   *          <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>
   */
  policyDocument?: string;

  /**
   * @public
   * <p>The date and time that this policy was most recently updated.</p>
   */
  lastUpdatedTime?: number;

  /**
   * @public
   * <p>The type of policy for this account policy.</p>
   */
  policyType?: PolicyType;

  /**
   * @public
   * <p>The scope of the account policy.</p>
   */
  scope?: Scope;

  /**
   * @public
   * <p>The Amazon Web Services account ID that the policy applies to.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>A tructures that contains information about one pattern token related to
 *        an anomaly.</p>
 *          <p>For more information about patterns and tokens, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html">CreateLogAnomalyDetector</a>.
 *      </p>
 */
export interface PatternToken {
  /**
   * @public
   * <p>For a dynamic token, this indicates where in the pattern that this token appears, related
   *       to other dynamic tokens. The dynamic token that appears first has a value of <code>1</code>, the
   *       one that appears second is <code>2</code>, and so on.</p>
   */
  dynamicTokenPosition?: number;

  /**
   * @public
   * <p>Specifies whether this is a dynamic token.</p>
   */
  isDynamic?: boolean;

  /**
   * @public
   * <p>The string represented by this token. If this is a dynamic token, the
   *       value will be <code><*></code>
   *          </p>
   */
  tokenString?: string;

  /**
   * @public
   * <p>Contains the values found for a dynamic token, and the number of times each value was found.</p>
   */
  enumerations?: Record<string, number>;
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
 * @public
 * <p>This structure represents one anomaly that has been found by a logs anomaly detector.</p>
 *          <p>For more information about patterns and anomalies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html">CreateLogAnomalyDetector</a>.
 *      </p>
 */
export interface Anomaly {
  /**
   * @public
   * <p>The unique ID that CloudWatch Logs assigned to this anomaly.</p>
   */
  anomalyId: string | undefined;

  /**
   * @public
   * <p>The ID of the pattern used to help identify this anomaly.</p>
   */
  patternId: string | undefined;

  /**
   * @public
   * <p>The ARN of the anomaly detector that identified this anomaly.</p>
   */
  anomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>The pattern used to help identify this anomaly, in string format.</p>
   */
  patternString: string | undefined;

  /**
   * @public
   * <p>The pattern used to help identify this anomaly, in regular expression format.</p>
   */
  patternRegex?: string;

  /**
   * @public
   * <p>The priority level of this anomaly, as determined by CloudWatch Logs. Priority is computed based on log
   *         severity labels such as <code>FATAL</code> and <code>ERROR</code> and the amount of deviation from the baseline.
   *         Possible values are
   *         <code>HIGH</code>, <code>MEDIUM</code>, and <code>LOW</code>.</p>
   */
  priority?: string;

  /**
   * @public
   * <p>The date and time when the anomaly detector first saw this anomaly.
   *         It is specified as epoch time, which is the number of seconds
   *           since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  firstSeen: number | undefined;

  /**
   * @public
   * <p>The date and time when the anomaly detector most recently saw this anomaly.
   *        It is specified as epoch time, which is the number of seconds
   *        since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  lastSeen: number | undefined;

  /**
   * @public
   * <p>A human-readable description of the anomaly. This description is generated by
   *         CloudWatch Logs.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>Specifies whether this anomaly is still ongoing.</p>
   */
  active: boolean | undefined;

  /**
   * @public
   * <p>Indicates the current state of this anomaly. If it is still being treated as an anomaly, the value
   *         is <code>Active</code>. If you have suppressed this anomaly by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html">UpdateAnomaly</a> operation,
   *        the value is <code>Suppressed</code>. If this behavior is now considered to be normal, the value
   *       is <code>Baseline</code>.</p>
   */
  state: State | undefined;

  /**
   * @public
   * <p>A map showing times when the anomaly detector ran, and the number of occurrences of this anomaly that
   *         were detected at each of those runs. The times are specified in epoch time, which is the number of seconds
   *         since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  histogram: Record<string, number> | undefined;

  /**
   * @public
   * <p>An array of sample log event messages that are considered to be part of this anomaly.</p>
   */
  logSamples: string[] | undefined;

  /**
   * @public
   * <p>An array of structures where each structure contains information about one token that makes up the pattern.</p>
   */
  patternTokens: PatternToken[] | undefined;

  /**
   * @public
   * <p>An array of ARNS of the log groups that contained log events considered to be part of this anomaly.</p>
   */
  logGroupArnList: string[] | undefined;

  /**
   * @public
   * <p>Indicates whether this anomaly is currently suppressed. To suppress an anomaly,
   *         use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html">UpdateAnomaly</a>.</p>
   */
  suppressed?: boolean;

  /**
   * @public
   * <p>If the anomaly is suppressed, this indicates when it was suppressed.</p>
   */
  suppressedDate?: number;

  /**
   * @public
   * <p>If the anomaly is suppressed, this indicates when the suppression will end. If this value is <code>0</code>,
   *      the anomaly was suppressed with no expiration, with the <code>INFINITE</code> value.</p>
   */
  suppressedUntil?: number;

  /**
   * @public
   * <p>If this anomaly is suppressed, this field is <code>true</code> if the suppression is because the
   *       pattern is suppressed. If <code>false</code>, then only this particular anomaly is suppressed.</p>
   */
  isPatternLevelSuppression?: boolean;
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
 * @public
 * <p>Contains information about one anomaly detector in the account.</p>
 */
export interface AnomalyDetector {
  /**
   * @public
   * <p>The ARN of the anomaly detector.</p>
   */
  anomalyDetectorArn?: string;

  /**
   * @public
   * <p>The name of the anomaly detector.</p>
   */
  detectorName?: string;

  /**
   * @public
   * <p>A list of the ARNs of the log groups that this anomaly detector watches.</p>
   */
  logGroupArnList?: string[];

  /**
   * @public
   * <p>Specifies how often the anomaly detector runs and look for anomalies.</p>
   */
  evaluationFrequency?: EvaluationFrequency;

  /**
   * @public
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>Specifies the current status of the anomaly detector. To pause an anomaly detector, use
   *        the <code>enabled</code> parameter in the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html">UpdateLogAnomalyDetector</a>
   *        operation.</p>
   */
  anomalyDetectorStatus?: AnomalyDetectorStatus;

  /**
   * @public
   * <p>The ID of the KMS key assigned to this anomaly detector, if any.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The date and time when this anomaly detector was created.</p>
   */
  creationTimeStamp?: number;

  /**
   * @public
   * <p>The date and time when this anomaly detector was most recently modified.</p>
   */
  lastModifiedTimeStamp?: number;

  /**
   * @public
   * <p>The number of days used as the life cycle of anomalies. After this time, anomalies are automatically baselined
   *        and the anomaly detector model will treat new occurrences of similar event as normal. </p>
   */
  anomalyVisibilityTime?: number;
}

/**
 * @public
 */
export interface AssociateKmsKeyRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   *          <p>In your <code>AssociateKmsKey</code> operation,
   *       you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter,
   *       but you can't specify both.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log
   *       data. This must be a symmetric KMS key. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric
   *         Keys</a>.</p>
   */
  kmsKeyId: string | undefined;

  /**
   * @public
   * <p>Specifies the target for this operation. You must specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Specify the following ARN to have future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a>
   *         operations in this account encrypt the results
   *         with the specified KMS key. Replace
   *         <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:query-result:*</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the ARN of a log group to have CloudWatch Logs use the KMS key
   *         to encrypt log events that are ingested and stored by that log group. The log group ARN must be in
   *         the following format. Replace
   *         <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:log-group:<i>LOG_GROUP_NAME</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In your <code>AssociateKmsKey</code> operation,
   *         you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter,
   *         but you can't specify both.</p>
   */
  resourceIdentifier?: string;
}

/**
 * @public
 * <p>A parameter is specified incorrectly.</p>
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
 * @public
 * <p>Multiple concurrent requests to update the same resource were in conflict.</p>
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
 * @public
 * <p>The specified resource does not exist.</p>
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
 * @public
 * <p>The service cannot complete the request.</p>
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
   * @public
   * <p>The ID of the export task.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * <p>The operation is not valid on the specified resource.</p>
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
 * <p>This operation attempted to create a resource that already exists.</p>
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
 * @public
 */
export interface CreateDeliveryRequest {
  /**
   * @public
   * <p>The name of the delivery source to use for this delivery.</p>
   */
  deliverySourceName: string | undefined;

  /**
   * @public
   * <p>The ARN of the delivery destination to use for this delivery.</p>
   */
  deliveryDestinationArn: string | undefined;

  /**
   * @public
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see
   *        <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const DeliveryDestinationType = {
  CWL: "CWL",
  FH: "FH",
  S3: "S3",
} as const;

/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];

/**
 * @public
 * <p>This structure contains information about one <i>delivery</i> in your account. </p>
 *          <p>A delivery is a connection between a logical <i>delivery source</i> and a logical
 *      <i>delivery destination</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *          <p>You can't update an existing delivery. You can only create and delete deliveries.</p>
 */
export interface Delivery {
  /**
   * @public
   * <p>The unique ID that identifies this delivery in your account.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this delivery.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the delivery source that is associated with this delivery.</p>
   */
  deliverySourceName?: string;

  /**
   * @public
   * <p>The ARN of the delivery destination that is associated with this delivery.</p>
   */
  deliveryDestinationArn?: string;

  /**
   * @public
   * <p>Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.</p>
   */
  deliveryDestinationType?: DeliveryDestinationType;

  /**
   * @public
   * <p>The tags that have been assigned to this delivery.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDeliveryResponse {
  /**
   * @public
   * <p>A structure that contains information about the delivery that you just created.</p>
   */
  delivery?: Delivery;
}

/**
 * @public
 * <p>This request exceeds a service quota.</p>
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
 * @public
 * <p>The request was throttled because of quota limits.</p>
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
 * @public
 * <p>One of the parameters for the request is not valid.</p>
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
   * @public
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>Export only log streams that match the provided prefix. If you don't
   *       specify a value, no prefix filter is applied.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * @public
   * <p>The start time of the range for the request, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp earlier than this time
   *       are not exported.</p>
   */
  from: number | undefined;

  /**
   * @public
   * <p>The end time of the range for the request, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp later than this time are
   *       not exported.</p>
   *          <p>You must specify a time that is not earlier than when this log group was created.</p>
   */
  to: number | undefined;

  /**
   * @public
   * <p>The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The prefix used as the start of the key for every object exported. If you don't
   *       specify a value, the default is <code>exportedlogs</code>.</p>
   */
  destinationPrefix?: string;
}

/**
 * @public
 */
export interface CreateExportTaskResponse {
  /**
   * @public
   * <p>The ID of the export task.</p>
   */
  taskId?: string;
}

/**
 * @public
 * <p>You have reached the maximum number of resources that can be created.</p>
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
 * @public
 * <p>The specified resource already exists.</p>
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
   * @public
   * <p>An array containing the ARN of the log group that this anomaly detector will watch. You can specify only one
   *         log group ARN.</p>
   */
  logGroupArnList: string[] | undefined;

  /**
   * @public
   * <p>A name for this anomaly detector.</p>
   */
  detectorName?: string;

  /**
   * @public
   * <p>Specifies how often the anomaly detector is to run and look for anomalies. Set this value
   *       according to the frequency that the log group receives new logs. For example, if the log group
   *       receives new log events every 10 minutes, then 15 minutes might be a good setting for
   *         <code>evaluationFrequency</code> .</p>
   */
  evaluationFrequency?: EvaluationFrequency;

  /**
   * @public
   * <p>You can use this parameter to limit the anomaly detection model to examine only log events
   *       that match the pattern you specify here. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>Optionally assigns a KMS key to secure this anomaly detector and its findings. If a key is
   *        assigned, the anomalies found and the model used by this detector are encrypted at rest with the key. If
   *        a key is assigned to an anomaly detector, a user must have permissions for both this key and for the
   *        anomaly detector to retrieve information about the anomalies that it finds.</p>
   *          <p>For more information about using a KMS key and to see the required IAM
   *        policy, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection-KMS.html">Use a KMS key with an anomaly detector</a>.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The number of days to have visibility on an anomaly. After this time period has elapsed for an anomaly,
   *        it will be automatically baselined and the anomaly detector will treat new occurrences of a similar anomaly as
   *        normal. Therefore,
   *        if you do not correct the cause of an
   *        anomaly during the time period specified in <code>anomalyVisibilityTime</code>, it will be considered normal
   *        going forward and will not be detected as an anomaly.</p>
   */
  anomalyVisibilityTime?: number;

  /**
   * @public
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see
   *        <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateLogAnomalyDetectorResponse {
  /**
   * @public
   * <p>The ARN of the log anomaly detector that you just created.</p>
   */
  anomalyDetectorArn?: string;
}

/**
 * @public
 * @enum
 */
export const LogGroupClass = {
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
   * @public
   * <p>A name for the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log
   *       data. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource
   *         Names</a>.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The key-value pairs to use for the tags.</p>
   *          <p>You can grant users access to certain log groups while preventing them from accessing other log groups.
   *       To do so, tag your groups and use IAM policies that refer to those tags. To assign tags when
   *       you create a log group, you must have either the <code>logs:TagResource</code> or <code>logs:TagLogGroup</code>
   *       permission. For more information about tagging, see
   *       <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.
   *       For more information about using tags to control access, see
   *       <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Use this parameter to specify the log group class for this log group. There are two classes:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs features
   *         and incurs lower costs.</p>
   *             </li>
   *          </ul>
   *          <p>If you omit this parameter, the default of <code>STANDARD</code> is used.</p>
   *          <important>
   *             <p>After a log group is created, its class can't be changed.</p>
   *          </important>
   *          <p>For details about the features supported by each class, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   */
  logGroupClass?: LogGroupClass;
}

/**
 * @public
 */
export interface CreateLogStreamRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;
}

/**
 * @public
 * <p>The event was already logged.</p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code>
 *       actions are now always accepted and never return
 *       <code>DataAlreadyAcceptedException</code> regardless of whether a given batch of log events
 *       has already been accepted. </p>
 *          </important>
 */
export class DataAlreadyAcceptedException extends __BaseException {
  readonly name: "DataAlreadyAcceptedException" = "DataAlreadyAcceptedException";
  readonly $fault: "client" = "client";
  expectedSequenceToken?: string;
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
 * @public
 */
export interface DeleteAccountPolicyRequest {
  /**
   * @public
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;

  /**
   * @public
   * <p>The type of policy to delete. Currently, the only valid value is <code>DATA_PROTECTION_POLICY</code>.</p>
   */
  policyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface DeleteDataProtectionPolicyRequest {
  /**
   * @public
   * <p>The name or ARN of the log group that you want to delete the data protection policy for.</p>
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryRequest {
  /**
   * @public
   * <p>The unique ID of the delivery to delete. You can find the ID of a delivery with the
   *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html">DescribeDeliveries</a> operation.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryDestinationRequest {
  /**
   * @public
   * <p>The name of the delivery destination that you want to delete. You can find a list of delivery destionation names
   *         by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html">DescribeDeliveryDestinations</a>
   *       operation.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryDestinationPolicyRequest {
  /**
   * @public
   * <p>The name of the delivery destination that you want to delete the policy for.</p>
   */
  deliveryDestinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliverySourceRequest {
  /**
   * @public
   * <p>The name of the delivery source that you want to delete.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * @public
   * <p>The name of the destination.</p>
   */
  destinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogAnomalyDetectorRequest {
  /**
   * @public
   * <p>The ARN of the anomaly detector to delete. You can find the ARNs of log anomaly detectors
   *         in your account by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html">ListLogAnomalyDetectors</a>
   *       operation.</p>
   */
  anomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogGroupRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogStreamRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricFilterRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the metric filter.</p>
   */
  filterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueryDefinitionRequest {
  /**
   * @public
   * <p>The ID of the query definition that you want to delete. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the
   *       IDs of your saved query definitions.</p>
   */
  queryDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueryDefinitionResponse {
  /**
   * @public
   * <p>A value of TRUE indicates that the operation succeeded. FALSE indicates that the operation
   *       failed.</p>
   */
  success?: boolean;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The name of the policy to be revoked. This parameter is required.</p>
   */
  policyName?: string;
}

/**
 * @public
 */
export interface DeleteRetentionPolicyRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionFilterRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the subscription filter.</p>
   */
  filterName: string | undefined;
}

/**
 * @public
 * <p>A structure that contains information about one logs delivery destination.</p>
 */
export interface DeliveryDestinationConfiguration {
  /**
   * @public
   * <p>The ARN of the Amazon Web Services destination that this delivery destination represents. That Amazon Web Services destination
   *        can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Kinesis Data Firehose.</p>
   */
  destinationResourceArn: string | undefined;
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
 * @public
 * <p>This structure contains information about one <i>delivery destination</i> in your account.
 *      A delivery destination is an Amazon Web Services resource that represents an
 *      Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.</p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that is actually
 *          sending the logs. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery destination</i>, which is a logical object that represents the actual
 *          delivery destination. </p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a>
 *          in the destination account to assign an IAM policy to the
 *          destination. This policy allows delivery to that destination.
 *        </p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery</i> by pairing exactly one delivery source and one delivery destination.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You
 *      can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.</p>
 */
export interface DeliveryDestination {
  /**
   * @public
   * <p>The name of this delivery destination.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.</p>
   */
  deliveryDestinationType?: DeliveryDestinationType;

  /**
   * @public
   * <p>The format of the logs that are sent to this delivery destination. </p>
   */
  outputFormat?: OutputFormat;

  /**
   * @public
   * <p>A structure that contains the ARN of the Amazon Web Services resource that will receive the logs.</p>
   */
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration;

  /**
   * @public
   * <p>The tags that have been assigned to this delivery destination.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>This structure contains information about one <i>delivery source</i> in your account.
 *        A delivery source is an Amazon Web Services resource that sends logs to an
 *        Amazon Web Services destination. The destination can be CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.</p>
 *          <p>Only some Amazon Web Services services support being configured as a delivery source. These services are listed
 *        as <b>Supported [V2 Permissions]</b> in the table at
 *        <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enabling
 *          logging from Amazon Web Services services.</a>
 *          </p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that is actually
 *          sending the logs. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery destination</i>, which is a logical object that represents the actual
 *          delivery destination.  For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html">PutDeliveryDestination</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a>
 *          in the destination account to assign an IAM policy to the
 *          destination. This policy allows delivery to that destination.
 *        </p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery</i> by pairing exactly one delivery source and one delivery destination.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You
 *        can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.</p>
 */
export interface DeliverySource {
  /**
   * @public
   * <p>The unique name of the delivery source.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this delivery source.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>This array contains the ARN of the Amazon Web Services resource that sends logs and is represented by
   *       this delivery source. Currently, only one ARN can be in the array.</p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>The Amazon Web Services service that is sending logs.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The type of log that the source is sending. For valid values for this parameter, see the documentation for
   *        the source service.</p>
   */
  logType?: string;

  /**
   * @public
   * <p>The tags that have been assigned to this delivery source.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeAccountPoliciesRequest {
  /**
   * @public
   * <p>Use this parameter to limit the returned policies to only the policies that match the policy type that you
   *       specify. Currently, the only valid value is <code>DATA_PROTECTION_POLICY</code>.</p>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>Use this parameter to limit the returned policies to only the policy with the name that you specify.</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>If you are using an account that is set up as a monitoring account for CloudWatch unified cross-account
   *       observability, you can use this to specify the account ID of a source account. If you do,
   *       the operation returns the account policy for the specified account. Currently, you can specify only
   *     one account ID in this parameter.</p>
   *          <p>If you
   *     omit this parameter, only the policy in the current account is returned.</p>
   */
  accountIdentifiers?: string[];
}

/**
 * @public
 */
export interface DescribeAccountPoliciesResponse {
  /**
   * @public
   * <p>An array of structures that contain information about the CloudWatch Logs account policies that match
   *     the specified filters.</p>
   */
  accountPolicies?: AccountPolicy[];
}

/**
 * @public
 */
export interface DescribeDeliveriesRequest {
  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Optionally specify the maximum number of deliveries to return in the response.</p>
   */
  limit?: number;
}

/**
 * @public
 */
export interface DescribeDeliveriesResponse {
  /**
   * @public
   * <p>An array of structures. Each structure contains information about one delivery in the account.</p>
   */
  deliveries?: Delivery[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDeliveryDestinationsRequest {
  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Optionally specify the maximum number of delivery destinations to return in the response.</p>
   */
  limit?: number;
}

/**
 * @public
 */
export interface DescribeDeliveryDestinationsResponse {
  /**
   * @public
   * <p>An array of structures. Each structure contains information about one delivery destination in the account.</p>
   */
  deliveryDestinations?: DeliveryDestination[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDeliverySourcesRequest {
  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Optionally specify the maximum number of delivery sources to return in the response.</p>
   */
  limit?: number;
}

/**
 * @public
 */
export interface DescribeDeliverySourcesResponse {
  /**
   * @public
   * <p>An array of structures. Each structure contains information about one delivery source in the account.</p>
   */
  deliverySources?: DeliverySource[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeDestinationsRequest {
  /**
   * @public
   * <p>The prefix to match. If you don't specify a value, no prefix filter is applied.</p>
   */
  DestinationNamePrefix?: string;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned. If you don't specify a value, the default maximum value of
   *       50 items is used.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>Represents a cross-account destination that receives subscription log events.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>The name of the destination.</p>
   */
  destinationName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the physical target where the log events are
   *       delivered (for example, a Kinesis stream).</p>
   */
  targetArn?: string;

  /**
   * @public
   * <p>A role for impersonation, used when delivering log events to the target.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>An IAM policy document that governs which Amazon Web Services accounts can create subscription filters
   *       against this destination.</p>
   */
  accessPolicy?: string;

  /**
   * @public
   * <p>The ARN of this destination.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The creation time of the destination, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;
}

/**
 * @public
 */
export interface DescribeDestinationsResponse {
  /**
   * @public
   * <p>The destinations.</p>
   */
  destinations?: Destination[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
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
   * @public
   * <p>The ID of the export task. Specifying a task ID filters the results to one or zero
   *       export tasks.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The status code of the export task. Specifying a status code filters the results to zero or more export tasks.</p>
   */
  statusCode?: ExportTaskStatusCode;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>Represents the status of an export task.</p>
 */
export interface ExportTaskExecutionInfo {
  /**
   * @public
   * <p>The creation time of the export task, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;

  /**
   * @public
   * <p>The completion time of the export task, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  completionTime?: number;
}

/**
 * @public
 * <p>Represents the status of an export task.</p>
 */
export interface ExportTaskStatus {
  /**
   * @public
   * <p>The status code of the export task.</p>
   */
  code?: ExportTaskStatusCode;

  /**
   * @public
   * <p>The status message related to the status code.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Represents an export task.</p>
 */
export interface ExportTask {
  /**
   * @public
   * <p>The ID of the export task.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * @public
   * <p>The name of the log group from which logs data was exported.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>The start time, expressed as the number of milliseconds after <code>Jan 1, 1970
   *         00:00:00 UTC</code>. Events with a timestamp before this time are not exported.</p>
   */
  from?: number;

  /**
   * @public
   * <p>The end time, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00
   *         UTC</code>. Events with a timestamp later than this time are not exported.</p>
   */
  to?: number;

  /**
   * @public
   * <p>The name of the S3 bucket to which the log data was exported.</p>
   */
  destination?: string;

  /**
   * @public
   * <p>The prefix that was used as the start of Amazon S3 key for every object exported.</p>
   */
  destinationPrefix?: string;

  /**
   * @public
   * <p>The status of the export task.</p>
   */
  status?: ExportTaskStatus;

  /**
   * @public
   * <p>Execution information about the export task.</p>
   */
  executionInfo?: ExportTaskExecutionInfo;
}

/**
 * @public
 */
export interface DescribeExportTasksResponse {
  /**
   * @public
   * <p>The export tasks.</p>
   */
  exportTasks?: ExportTask[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLogGroupsRequest {
  /**
   * @public
   * <p>When <code>includeLinkedAccounts</code> is set to <code>True</code>, use this parameter to
   *       specify the list of accounts to search. You can specify as many as 20 account IDs in the array.  </p>
   */
  accountIdentifiers?: string[];

  /**
   * @public
   * <p>The prefix to match.</p>
   *          <note>
   *             <p>
   *                <code>logGroupNamePrefix</code> and <code>logGroupNamePattern</code> are mutually exclusive.
   *         Only one
   *         of these parameters can be passed.
   *       </p>
   *          </note>
   */
  logGroupNamePrefix?: string;

  /**
   * @public
   * <p>If you specify a string for this parameter, the operation returns only log groups that have names
   * that match the string based on a case-sensitive substring search. For example, if you specify <code>Foo</code>, log groups
   * named <code>FooBar</code>, <code>aws/Foo</code>, and <code>GroupFoo</code> would match, but <code>foo</code>,
   * <code>F/o/o</code> and <code>Froo</code> would not match.</p>
   *          <p>If you specify <code>logGroupNamePattern</code> in your request, then only
   *         <code>arn</code>, <code>creationTime</code>, and <code>logGroupName</code>
   *         are included in the response. </p>
   *          <note>
   *             <p>
   *                <code>logGroupNamePattern</code> and <code>logGroupNamePrefix</code> are mutually exclusive.
   *         Only one
   *         of these parameters can be passed.
   *       </p>
   *          </note>
   */
  logGroupNamePattern?: string;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>If you are using a monitoring account, set this to <code>True</code> to have the operation
   *       return log groups in
   *       the accounts listed in <code>accountIdentifiers</code>.</p>
   *          <p>If this parameter is set to <code>true</code> and <code>accountIdentifiers</code>
   *
   *       contains a null value, the operation returns all log groups in the monitoring account
   *       and all log groups in all source accounts that are linked to the monitoring account. </p>
   */
  includeLinkedAccounts?: boolean;

  /**
   * @public
   * <p>Specifies the log group class for this log group. There are two classes:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs features
   *         and incurs lower costs.</p>
   *             </li>
   *          </ul>
   *          <p>For details about the features supported by each class, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   */
  logGroupClass?: LogGroupClass;
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
 * @public
 * <p>Represents a log group.</p>
 */
export interface LogGroup {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>The creation time of the log group, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * @public
   * <p>The number of days to retain the log events in the specified log group.
   *       Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p>
   *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
   */
  retentionInDays?: number;

  /**
   * @public
   * <p>The number of metric filters.</p>
   */
  metricFilterCount?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the log group.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The number of bytes stored.</p>
   */
  storedBytes?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when
   *       encrypting log data.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>Displays whether this log group has a protection policy, or whether it had one in the past. For more information, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
   */
  dataProtectionStatus?: DataProtectionStatus;

  /**
   * @public
   * <p>Displays all the properties that this log group has inherited from account-level
   *     settings.</p>
   */
  inheritedProperties?: InheritedProperty[];

  /**
   * @public
   * <p>This specifies the log group class for this log group. There are two classes:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>Standard</code> log class supports all CloudWatch Logs features.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Infrequent Access</code> log class supports a subset of CloudWatch Logs features
   *         and incurs lower costs.</p>
   *             </li>
   *          </ul>
   *          <p>For details about the features supported by each class, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html">Log classes</a>
   *          </p>
   */
  logGroupClass?: LogGroupClass;
}

/**
 * @public
 */
export interface DescribeLogGroupsResponse {
  /**
   * @public
   * <p>The log groups.</p>
   *          <p>If the <code>retentionInDays</code> value is not included for a log group, then that log
   *       group's events do not expire.</p>
   */
  logGroups?: LogGroup[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
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
   * @public
   * <p>The name of the log group.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Specify either the name or ARN of the log group to view. If the log group is in a source account
   *     and you are using a monitoring account, you must use the log group ARN.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupIdentifier?: string;

  /**
   * @public
   * <p>The prefix to match.</p>
   *          <p>If <code>orderBy</code> is <code>LastEventTime</code>, you cannot specify this
   *       parameter.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * @public
   * <p>If the value is <code>LogStreamName</code>, the results are ordered by log stream name.
   *       If the value is <code>LastEventTime</code>, the results are ordered by the event time.
   *       The default value is <code>LogStreamName</code>.</p>
   *          <p>If you order the results by event time, you cannot specify the <code>logStreamNamePrefix</code> parameter.</p>
   *          <p>
   *             <code>lastEventTimestamp</code> represents the time of the most recent log event in the
   *       log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>. <code>lastEventTimestamp</code> updates on an
   *       eventual consistency basis. It typically updates in less than an hour from ingestion, but in
   *       rare situations might take longer.</p>
   */
  orderBy?: OrderBy;

  /**
   * @public
   * <p>If the value is true, results are returned in descending order.
   *       If the value is to false, results are returned in ascending order.
   *       The default value is false.</p>
   */
  descending?: boolean;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>Represents a log stream, which is a sequence of log events from
 *       a single emitter of logs.</p>
 */
export interface LogStream {
  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * @public
   * <p>The creation time of the stream, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;

  /**
   * @public
   * <p>The time of the first event, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  firstEventTimestamp?: number;

  /**
   * @public
   * <p>The time of the most recent log event in the log stream in CloudWatch Logs. This number
   *       is expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. The
   *         <code>lastEventTime</code> value updates on an eventual consistency basis. It typically
   *       updates in less than an hour from ingestion, but in rare situations might take
   *       longer.</p>
   */
  lastEventTimestamp?: number;

  /**
   * @public
   * <p>The ingestion time, expressed as the number of milliseconds after <code>Jan 1, 1970
   *       00:00:00 UTC</code> The <code>lastIngestionTime</code> value updates on an eventual consistency basis. It
   *       typically updates in less than an hour after ingestion, but in rare situations might take longer.</p>
   */
  lastIngestionTime?: number;

  /**
   * @public
   * <p>The sequence token.</p>
   *          <important>
   *             <p>The sequence token is now ignored in
   *       <code>PutLogEvents</code>
   *       actions. <code>PutLogEvents</code> actions are always accepted regardless of receiving an invalid sequence token.
   *     You don't need to obtain <code>uploadSequenceToken</code> to use a <code>PutLogEvents</code> action.</p>
   *          </important>
   */
  uploadSequenceToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the log stream.</p>
   */
  arn?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The number of bytes stored.</p>
   *          <p>
   *             <b>Important:</b> As of June 17, 2019, this parameter is no
   *       longer supported for log streams, and is always reported as zero. This change applies only to
   *       log streams. The <code>storedBytes</code> parameter for log groups is not affected.</p>
   */
  storedBytes?: number;
}

/**
 * @public
 */
export interface DescribeLogStreamsResponse {
  /**
   * @public
   * <p>The log streams.</p>
   */
  logStreams?: LogStream[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeMetricFiltersRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>The prefix to match. CloudWatch Logs uses the value that you set here only if you also
   *       include the <code>logGroupName</code> parameter in your request.</p>
   */
  filterNamePrefix?: string;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>Filters results to include only those with the specified metric name. If you include this parameter in your request, you
   *     must also include the <code>metricNamespace</code> parameter.</p>
   */
  metricName?: string;

  /**
   * @public
   * <p>Filters results to include only those in the specified namespace. If you include this parameter in your request, you
   *     must also include the <code>metricName</code> parameter.</p>
   */
  metricNamespace?: string;
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
 * @public
 * <p>Indicates how to transform ingested log events to metric data in a CloudWatch
 *       metric.</p>
 */
export interface MetricTransformation {
  /**
   * @public
   * <p>The name of the CloudWatch metric.</p>
   */
  metricName: string | undefined;

  /**
   * @public
   * <p>A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics
   *       that are similar. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace">Namespaces</a>.</p>
   */
  metricNamespace: string | undefined;

  /**
   * @public
   * <p>The value to publish to the CloudWatch metric when a filter pattern matches a log event.</p>
   */
  metricValue: string | undefined;

  /**
   * @public
   * <p>(Optional) The value to emit when a filter pattern does not match a log event.
   *       This value can be null.</p>
   */
  defaultValue?: number;

  /**
   * @public
   * <p>The fields to use as dimensions for the metric. One metric filter can include
   *     as many as three dimensions.</p>
   *          <important>
   *             <p>Metrics extracted from log events are charged as custom metrics.
   *       To prevent unexpected high charges, do not specify high-cardinality fields such as
   *       <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value
   *       found for
   *       a dimension is treated as a separate metric and accrues charges as a separate custom metric.
   *     </p>
   *             <p>CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your
   *         specified dimensions within a certain amount of time. This helps to prevent accidental high
   *         charges.</p>
   *             <p>You can also set up a billing alarm to alert you if your charges are higher than
   *         expected. For more information,
   *         see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">
   *           Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>.
   *        </p>
   *          </important>
   */
  dimensions?: Record<string, string>;

  /**
   * @public
   * <p>The unit to assign to the metric. If you omit this, the unit is set as <code>None</code>.</p>
   */
  unit?: StandardUnit;
}

/**
 * @public
 * <p>Metric filters express how CloudWatch Logs would extract metric observations
 *       from ingested log events and transform them into metric data in a CloudWatch metric.</p>
 */
export interface MetricFilter {
  /**
   * @public
   * <p>The name of the metric filter.</p>
   */
  filterName?: string;

  /**
   * @public
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>The metric transformations.</p>
   */
  metricTransformations?: MetricTransformation[];

  /**
   * @public
   * <p>The creation time of the metric filter, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;

  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;
}

/**
 * @public
 */
export interface DescribeMetricFiltersResponse {
  /**
   * @public
   * <p>The metric filters.</p>
   */
  metricFilters?: MetricFilter[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

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
   * @public
   * <p>Limits the returned queries to only those for the specified log group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Limits the returned queries to only those that have the specified status. Valid values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, and <code>Scheduled</code>.</p>
   */
  status?: QueryStatus;

  /**
   * @public
   * <p>Limits the number of returned queries to the specified number.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. </p>
 */
export interface QueryInfo {
  /**
   * @public
   * <p>The unique ID number of this query.</p>
   */
  queryId?: string;

  /**
   * @public
   * <p>The query string used in this query.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The status of this query. Possible values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>, and <code>Unknown</code>.</p>
   */
  status?: QueryStatus;

  /**
   * @public
   * <p>The date and time that this query was created.</p>
   */
  createTime?: number;

  /**
   * @public
   * <p>The name of the log group scanned by this query.</p>
   */
  logGroupName?: string;
}

/**
 * @public
 */
export interface DescribeQueriesResponse {
  /**
   * @public
   * <p>The list of queries that match the request.</p>
   */
  queries?: QueryInfo[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeQueryDefinitionsRequest {
  /**
   * @public
   * <p>Use this parameter to filter your results to only the query definitions that have names that start with the prefix you specify.</p>
   */
  queryDefinitionNamePrefix?: string;

  /**
   * @public
   * <p>Limits the number of returned query definitions to the specified number.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>This structure contains details about a saved CloudWatch Logs Insights query definition.</p>
 */
export interface QueryDefinition {
  /**
   * @public
   * <p>The unique ID of the query definition.</p>
   */
  queryDefinitionId?: string;

  /**
   * @public
   * <p>The name of the query definition.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The query string to use for this definition.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The date that the query definition was most recently modified.</p>
   */
  lastModified?: number;

  /**
   * @public
   * <p>If this query definition contains a list of log groups that it is limited to, that list appears here.</p>
   */
  logGroupNames?: string[];
}

/**
 * @public
 */
export interface DescribeQueryDefinitionsResponse {
  /**
   * @public
   * <p>The list of query definitions that match your request.</p>
   */
  queryDefinitions?: QueryDefinition[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeResourcePoliciesRequest {
  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of resource policies to be displayed with one call of this API.</p>
   */
  limit?: number;
}

/**
 * @public
 * <p>A policy enabling one or more entities to put logs to a log group in this account.</p>
 */
export interface ResourcePolicy {
  /**
   * @public
   * <p>The name of the resource policy.</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>The details of the policy.</p>
   */
  policyDocument?: string;

  /**
   * @public
   * <p>Timestamp showing when this policy was last updated, expressed as the number of
   *       milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  lastUpdatedTime?: number;
}

/**
 * @public
 */
export interface DescribeResourcePoliciesResponse {
  /**
   * @public
   * <p>The resource policies that exist in this account.</p>
   */
  resourcePolicies?: ResourcePolicy[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeSubscriptionFiltersRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The prefix to match. If you don't specify a value, no prefix filter is applied.</p>
   */
  filterNamePrefix?: string;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;
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
 * @public
 * <p>Represents a subscription filter.</p>
 */
export interface SubscriptionFilter {
  /**
   * @public
   * <p>The name of the subscription filter.</p>
   */
  filterName?: string;

  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  destinationArn?: string;

  /**
   * @public
   * <p></p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The method used to distribute log data to the destination, which can be either
   *       random or grouped by log stream.</p>
   */
  distribution?: Distribution;

  /**
   * @public
   * <p>The creation time of the subscription filter, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;
}

/**
 * @public
 */
export interface DescribeSubscriptionFiltersResponse {
  /**
   * @public
   * <p>The subscription filters.</p>
   */
  subscriptionFilters?: SubscriptionFilter[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DisassociateKmsKeyRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   *          <p>In your <code>DisassociateKmsKey</code> operation,
   *       you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter,
   *       but you can't specify both.</p>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Specifies the target for this operation. You must specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Specify the ARN of a log group to stop having CloudWatch Logs use the KMS key
   *         to encrypt log events that are ingested and stored by that log group. After you run this operation, CloudWatch Logs
   *         encrypts ingested log events with the default CloudWatch Logs method. The log group ARN must be in
   *         the following format. Replace
   *         <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:log-group:<i>LOG_GROUP_NAME</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specify the following ARN to stop using this key to encrypt the results of future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>
   *         operations in this account. Replace
   *         <i>REGION</i> and <i>ACCOUNT_ID</i> with your Region and account ID.</p>
   *                <p>
   *                   <code>arn:aws:logs:<i>REGION</i>:<i>ACCOUNT_ID</i>:query-result:*</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>In your <code>DisssociateKmsKey</code> operation,
   *       you must specify either the <code>resourceIdentifier</code> parameter or the <code>logGroup</code> parameter,
   *       but you can't specify both.</p>
   */
  resourceIdentifier?: string;
}

/**
 * @public
 * <p>Represents a matched event.</p>
 */
export interface FilteredLogEvent {
  /**
   * @public
   * <p>The name of the log stream to which this event belongs.</p>
   */
  logStreamName?: string;

  /**
   * @public
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  timestamp?: number;

  /**
   * @public
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The time the event was ingested, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  ingestionTime?: number;

  /**
   * @public
   * <p>The ID of the event.</p>
   */
  eventId?: string;
}

/**
 * @public
 */
export interface FilterLogEventsRequest {
  /**
   * @public
   * <p>The name of the log group to search.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Specify either the name or ARN of the log group to view log events from. If the log group is in a source account
   *       and you are using a monitoring account, you must use the log group ARN.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupIdentifier?: string;

  /**
   * @public
   * <p>Filters the results to only logs from the log streams in this list.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, the action
   *       returns an <code>InvalidParameterException</code> error.</p>
   */
  logStreamNames?: string[];

  /**
   * @public
   * <p>Filters the results to include only events from log streams that have names starting with this prefix.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, but the value for
   *       <code>logStreamNamePrefix</code> does not match any log stream names specified in <code>logStreamNames</code>, the action
   *     returns an <code>InvalidParameterException</code> error.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * @public
   * <p>The start of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp before this time are not
   *       returned.</p>
   */
  startTime?: number;

  /**
   * @public
   * <p>The end of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp later than this time are not
   *       returned.</p>
   */
  endTime?: number;

  /**
   * @public
   * <p>The filter pattern to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p>
   *          <p>If not provided, all the events are matched.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>The token for the next set of events to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of events to return. The default is 10,000 events.</p>
   */
  limit?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>If the value is true, the operation attempts to provide responses that contain events
   *       from multiple log streams within the log group, interleaved in a single response. If the value
   *       is false, all the matched log events in the first log stream are searched first, then those in
   *       the next log stream, and so on.</p>
   *          <p>
   *             <b>Important</b> As of June 17, 2019, this parameter is
   *       ignored and the value is assumed to be true. The response from this operation always
   *       interleaves events from multiple log streams within a log group.</p>
   */
  interleaved?: boolean;

  /**
   * @public
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible.
   *       The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code>
   *       permission.</p>
   */
  unmask?: boolean;
}

/**
 * @public
 * <p>Represents the search status of a log stream.</p>
 */
export interface SearchedLogStream {
  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * @public
   * <p>Indicates whether all the events in this log stream were searched.</p>
   */
  searchedCompletely?: boolean;
}

/**
 * @public
 */
export interface FilterLogEventsResponse {
  /**
   * @public
   * <p>The matched events.</p>
   */
  events?: FilteredLogEvent[];

  /**
   * @public
   * <p>
   *             <b>Important</b> As of May 15, 2020, this parameter is no longer
   *       supported. This parameter returns an empty list.</p>
   *          <p>Indicates which log streams have been searched and whether each has been searched completely.</p>
   */
  searchedLogStreams?: SearchedLogStream[];

  /**
   * @public
   * <p>The token to use when requesting the next set of items. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyRequest {
  /**
   * @public
   * <p>The name or ARN of the log group that contains the data protection policy that you want to see.</p>
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyResponse {
  /**
   * @public
   * <p>The log group name or ARN that you specified in your request.</p>
   */
  logGroupIdentifier?: string;

  /**
   * @public
   * <p>The data protection policy document for this log group.</p>
   */
  policyDocument?: string;

  /**
   * @public
   * <p>The date and time that this policy was most recently updated.</p>
   */
  lastUpdatedTime?: number;
}

/**
 * @public
 */
export interface GetDeliveryRequest {
  /**
   * @public
   * <p>The ID of the delivery that you want to retrieve.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryResponse {
  /**
   * @public
   * <p>A structure that contains information about the delivery.</p>
   */
  delivery?: Delivery;
}

/**
 * @public
 */
export interface GetDeliveryDestinationRequest {
  /**
   * @public
   * <p>The name of the delivery destination that you want to retrieve.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationResponse {
  /**
   * @public
   * <p>A structure containing information about the delivery destination.</p>
   */
  deliveryDestination?: DeliveryDestination;
}

/**
 * @public
 */
export interface GetDeliveryDestinationPolicyRequest {
  /**
   * @public
   * <p>The name of the delivery destination that you want to retrieve the policy of.</p>
   */
  deliveryDestinationName: string | undefined;
}

/**
 * @public
 * <p>A structure that contains information about one delivery destination policy.</p>
 */
export interface Policy {
  /**
   * @public
   * <p>The contents of the delivery destination policy.</p>
   */
  deliveryDestinationPolicy?: string;
}

/**
 * @public
 */
export interface GetDeliveryDestinationPolicyResponse {
  /**
   * @public
   * <p>The IAM policy for this delivery destination.</p>
   */
  policy?: Policy;
}

/**
 * @public
 */
export interface GetDeliverySourceRequest {
  /**
   * @public
   * <p>The name of the delivery source that you want to retrieve.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDeliverySourceResponse {
  /**
   * @public
   * <p>A structure containing information about the delivery source.</p>
   */
  deliverySource?: DeliverySource;
}

/**
 * @public
 */
export interface GetLogAnomalyDetectorRequest {
  /**
   * @public
   * <p>The ARN of the anomaly detector to retrieve information about. You can find the ARNs of log anomaly detectors
   *        in your account by using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html">ListLogAnomalyDetectors</a>
   *        operation.</p>
   */
  anomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetLogAnomalyDetectorResponse {
  /**
   * @public
   * <p>The name of the log anomaly detector</p>
   */
  detectorName?: string;

  /**
   * @public
   * <p>An array of structures, where each structure contains the ARN of a log group
   *       associated with this anomaly detector.</p>
   */
  logGroupArnList?: string[];

  /**
   * @public
   * <p>Specifies how often the anomaly detector runs and look for anomalies. Set this value
   *        according to the frequency that the log group receives new logs. For example, if the log group
   *        receives new log events every 10 minutes, then setting <code>evaluationFrequency</code> to
   *        <code>FIFTEEN_MIN</code> might be appropriate.</p>
   */
  evaluationFrequency?: EvaluationFrequency;

  /**
   * @public
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>Specifies whether the anomaly detector is currently active. To change its status, use
   *         the <code>enabled</code> parameter in the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html">UpdateLogAnomalyDetector</a>
   *       operation.</p>
   */
  anomalyDetectorStatus?: AnomalyDetectorStatus;

  /**
   * @public
   * <p>The ID of the KMS key assigned to this anomaly detector, if any.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The date and time when this anomaly detector was created.</p>
   */
  creationTimeStamp?: number;

  /**
   * @public
   * <p>The date and time when this anomaly detector was most recently modified.</p>
   */
  lastModifiedTimeStamp?: number;

  /**
   * @public
   * <p>The number of days used as the life cycle of anomalies. After this time, anomalies are automatically baselined
   *        and the anomaly detector model will treat new occurrences of similar event as normal. </p>
   */
  anomalyVisibilityTime?: number;
}

/**
 * @public
 */
export interface GetLogEventsRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>Specify either the name or ARN of the log group to view events from. If the log group is in a source account
   *       and you are using a monitoring account, you must use the log group ARN.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupIdentifier?: string;

  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;

  /**
   * @public
   * <p>The start of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp equal to this time or later than this time
   *       are included. Events with a timestamp earlier than this time are not included.</p>
   */
  startTime?: number;

  /**
   * @public
   * <p>The end of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp equal to or later than this time are not
   *       included.</p>
   */
  endTime?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of log events returned. If you don't specify a limit, the default is
   *       as many log events as can fit in a response size of 1 MB (up to 10,000 log events).</p>
   */
  limit?: number;

  /**
   * @public
   * <p>If the value is true, the earliest log events are returned first.
   *       If the value is false, the latest log events are returned first.
   *       The default value is false.</p>
   *          <p>If you are using a previous <code>nextForwardToken</code> value as the <code>nextToken</code> in this operation,
   *       you must specify <code>true</code> for <code>startFromHead</code>.</p>
   */
  startFromHead?: boolean;

  /**
   * @public
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible.
   *       The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code>
   *       permission.</p>
   */
  unmask?: boolean;
}

/**
 * @public
 * <p>Represents a log event.</p>
 */
export interface OutputLogEvent {
  /**
   * @public
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  timestamp?: number;

  /**
   * @public
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The time the event was ingested, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  ingestionTime?: number;
}

/**
 * @public
 */
export interface GetLogEventsResponse {
  /**
   * @public
   * <p>The events.</p>
   */
  events?: OutputLogEvent[];

  /**
   * @public
   * <p>The token for the next set of items in the forward direction. The token expires after
   *       24 hours. If you have reached the end of the stream, it returns the same token you passed
   *       in.</p>
   */
  nextForwardToken?: string;

  /**
   * @public
   * <p>The token for the next set of items in the backward direction. The token expires after
   *       24 hours. This token is not null. If you have reached the end of the stream, it returns the
   *       same token you passed in.</p>
   */
  nextBackwardToken?: string;
}

/**
 * @public
 */
export interface GetLogGroupFieldsRequest {
  /**
   * @public
   * <p>The name of the log group to search.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>The time to set as the center of the query. If you specify <code>time</code>, the 8 minutes before and
   *       8 minutes after this time are searched. If you omit <code>time</code>, the most recent 15 minutes
   *       up to the current time are searched.</p>
   *          <p>The <code>time</code> value is specified as epoch time, which is the number of seconds
   *       since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  time?: number;

  /**
   * @public
   * <p>Specify either the name or ARN of the log group to view. If the log group is in a source account and
   *     you are using a monitoring account, you must specify the ARN.</p>
   *          <note>
   *             <p>
   *         You must include either <code>logGroupIdentifier</code> or <code>logGroupName</code>, but not
   *         both.
   *       </p>
   *          </note>
   */
  logGroupIdentifier?: string;
}

/**
 * @public
 * <p>The fields contained in log events found by a <code>GetLogGroupFields</code> operation,
 *       along with the percentage of queried log events in which each field appears.</p>
 */
export interface LogGroupField {
  /**
   * @public
   * <p>The name of a log field.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The percentage of log events queried that contained the field.</p>
   */
  percent?: number;
}

/**
 * @public
 */
export interface GetLogGroupFieldsResponse {
  /**
   * @public
   * <p>The array of fields found in the query. Each object in the array contains the name of the
   *       field, along with the percentage of time it appeared in the log events that were
   *       queried.</p>
   */
  logGroupFields?: LogGroupField[];
}

/**
 * @public
 */
export interface GetLogRecordRequest {
  /**
   * @public
   * <p>The pointer corresponding to the log event record you want to retrieve. You get this from
   *       the response of a <code>GetQueryResults</code> operation. In that response, the value of the
   *         <code>@ptr</code> field for a log event is the value to use as <code>logRecordPointer</code>
   *       to retrieve that complete log event record.</p>
   */
  logRecordPointer: string | undefined;

  /**
   * @public
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible.
   *       The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code>
   *       permission.</p>
   */
  unmask?: boolean;
}

/**
 * @public
 */
export interface GetLogRecordResponse {
  /**
   * @public
   * <p>The requested log event, as a JSON string.</p>
   */
  logRecord?: Record<string, string>;
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * @public
   * <p>The ID number of the query.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 * <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p>
 *          <p>For more information about the fields that are
 *       generated by CloudWatch logs, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p>
 */
export interface ResultField {
  /**
   * @public
   * <p>The log event field.</p>
   */
  field?: string;

  /**
   * @public
   * <p>The value of this field.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Contains the number of log events scanned by the query, the number of log events that matched the
 *       query criteria, and the total number of bytes in the log events that were scanned.</p>
 */
export interface QueryStatistics {
  /**
   * @public
   * <p>The number of log events that matched the query string.</p>
   */
  recordsMatched?: number;

  /**
   * @public
   * <p>The total number of log events scanned during the query.</p>
   */
  recordsScanned?: number;

  /**
   * @public
   * <p>The total number of bytes in the log events scanned during the query.</p>
   */
  bytesScanned?: number;
}

/**
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * @public
   * <p>The log events that matched the query criteria during the most recent time it ran.</p>
   *          <p>The <code>results</code> value is an array of arrays. Each log event is one object in the
   *       top-level array. Each of these log event objects is an array of
   *         <code>field</code>/<code>value</code> pairs.</p>
   */
  results?: ResultField[][];

  /**
   * @public
   * <p>Includes the number of log events scanned by the query, the number of log events that
   *       matched the query criteria, and the total number of bytes in the scanned log events. These
   *       values reflect the full raw results of the query.</p>
   */
  statistics?: QueryStatistics;

  /**
   * @public
   * <p>The status of the most recent running of the query. Possible values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>,
   *       <code>Timeout</code>, and <code>Unknown</code>.</p>
   *          <p>Queries time out after 60 minutes of runtime. To avoid having your queries time out,
   *       reduce the time range being searched or partition your query into a number of queries.</p>
   */
  status?: QueryStatus;

  /**
   * @public
   * <p>If you associated an KMS key with the CloudWatch Logs Insights
   *       query results in this account, this field displays the ARN of the key that's used to encrypt
   *       the query results when <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> stores
   *       them.</p>
   */
  encryptionKey?: string;
}

/**
 * @public
 * <p>Represents a log event, which is a record of activity that was recorded
 *       by the application or resource being monitored.</p>
 */
export interface InputLogEvent {
  /**
   * @public
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  timestamp: number | undefined;

  /**
   * @public
   * <p>The raw event message. Each log event can be no larger than 256 KB.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>The sequence token is not valid. You can get the correct sequence token in
 *       the <code>expectedSequenceToken</code> field in the <code>InvalidSequenceTokenException</code>
 *     message. </p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code>
 *       actions are now always accepted and never return
 *       <code>InvalidSequenceTokenException</code> regardless of receiving an invalid sequence token. </p>
 *          </important>
 */
export class InvalidSequenceTokenException extends __BaseException {
  readonly name: "InvalidSequenceTokenException" = "InvalidSequenceTokenException";
  readonly $fault: "client" = "client";
  expectedSequenceToken?: string;
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
   * @public
   * <p>Use this to optionally limit the results to only the anomalies found by a certain
   *       anomaly detector.</p>
   */
  anomalyDetectorArn?: string;

  /**
   * @public
   * <p>You can specify this parameter if you want to the operation to return only anomalies that
   *       are currently either suppressed or unsuppressed.</p>
   */
  suppressionState?: SuppressionState;

  /**
   * @public
   * <p>The maximum number of items to return. If you don't specify a value, the default maximum value of
   *        50 items is used.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAnomaliesResponse {
  /**
   * @public
   * <p>An array of structures, where each structure contains information about one anomaly that a log
   *       anomaly detector has found.</p>
   */
  anomalies?: Anomaly[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListLogAnomalyDetectorsRequest {
  /**
   * @public
   * <p>Use this to optionally filter the results to only include anomaly detectors that are associated with the
   *       specified log group.</p>
   */
  filterLogGroupArn?: string;

  /**
   * @public
   * <p>The maximum number of items to return. If you don't specify a value, the default maximum value of
   *        50 items is used.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListLogAnomalyDetectorsResponse {
  /**
   * @public
   * <p>An array of structures, where each structure in the array contains information about one anomaly detector.</p>
   */
  anomalyDetectors?: AnomalyDetector[];

  /**
   * @public
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the  resource that you want to view tags for.</p>
   *          <p>The ARN format of a log group is
   *       <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *       <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *       resources and operations</a>.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags associated with the requested resource.></p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTagsLogGroupRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface ListTagsLogGroupResponse {
  /**
   * @public
   * <p>The tags for the log group.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>This object contains the information for one log event returned in a Live Tail stream.</p>
 */
export interface LiveTailSessionLogEvent {
  /**
   * @public
   * <p>The name of the log stream that ingested this log event.</p>
   */
  logStreamName?: string;

  /**
   * @public
   * <p>The name or ARN of the log group that ingested this log event.</p>
   */
  logGroupIdentifier?: string;

  /**
   * @public
   * <p>The log event message text.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The timestamp specifying when this log event was created.</p>
   */
  timestamp?: number;

  /**
   * @public
   * <p>The timestamp specifying when this log event was ingested into the log group.</p>
   */
  ingestionTime?: number;
}

/**
 * @public
 * <p>This object contains the metadata for one <code>LiveTailSessionUpdate</code> structure. It indicates whether
 *     that update includes only a sample of 500 log events out of a larger number of ingested log events, or if it contains
 *     all of the matching log events ingested during that second of time.</p>
 */
export interface LiveTailSessionMetadata {
  /**
   * @public
   * <p>If this is <code>true</code>, then more than 500 log events matched the request for this update, and the
   *     <code>sessionResults</code> includes a sample of 500 of those events.</p>
   *          <p>If this is <code>false</code>, then 500 or fewer log events matched the request for this update, so no sampling
   *       was necessary. In this case, the
   *       <code>sessionResults</code> array includes all log events that matched your request during this time.</p>
   */
  sampled?: boolean;
}

/**
 * @public
 * <p>This object contains information about this Live Tail session, including the log groups included and the
 *       log stream filters, if any.</p>
 */
export interface LiveTailSessionStart {
  /**
   * @public
   * <p>The unique ID generated by CloudWatch Logs to identify this Live Tail session request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The unique ID generated by CloudWatch Logs to identify this Live Tail session.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>An array of the names and ARNs of the log groups included in this Live Tail session.</p>
   */
  logGroupIdentifiers?: string[];

  /**
   * @public
   * <p>If your StartLiveTail operation request included a <code>logStreamNames</code> parameter that filtered the session
   *     to only include certain log streams, these streams are listed here.</p>
   */
  logStreamNames?: string[];

  /**
   * @public
   * <p>If your StartLiveTail operation request included a <code>logStreamNamePrefixes</code> parameter that filtered the session
   *       to only include log streams that have names that start with certain prefixes, these prefixes are listed here.</p>
   */
  logStreamNamePrefixes?: string[];

  /**
   * @public
   * <p>An optional pattern to filter the results to include only log events that match the pattern.
   *     For example, a filter pattern of <code>error 404</code> displays only log events that include both <code>error</code>
   *     and <code>404</code>.</p>
   *          <p>For more information about filter pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p>
   */
  logEventFilterPattern?: string;
}

/**
 * @public
 * <p>This object contains the log events and metadata for a Live Tail session.</p>
 */
export interface LiveTailSessionUpdate {
  /**
   * @public
   * <p>This object contains the session metadata for a Live Tail session.</p>
   */
  sessionMetadata?: LiveTailSessionMetadata;

  /**
   * @public
   * <p>An array, where each member of the array includes the information for one log event in the Live Tail session.</p>
   *          <p>A <code>sessionResults</code> array can include as many as 500 log events. If the number of
   *       log events matching the request exceeds 500 per second, the
   *       log events are sampled down to 500 log events to be included in each <code>sessionUpdate</code> structure.</p>
   */
  sessionResults?: LiveTailSessionLogEvent[];
}

/**
 * @public
 */
export interface PutAccountPolicyRequest {
  /**
   * @public
   * <p>A name for the policy. This must be unique within the account.</p>
   */
  policyName: string | undefined;

  /**
   * @public
   * <p>Specify the data protection policy, in JSON.</p>
   *          <p>This policy must include two JSON blocks:</p>
   *          <ul>
   *             <li>
   *                <p>The first block must include both a <code>DataIdentifer</code> array and an
   *         <code>Operation</code> property with an <code>Audit</code> action. The <code>DataIdentifer</code> array lists the types of sensitive data that
   *         you want to mask. For more information about the available options, see
   *         <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html">Types of data that you can mask</a>.</p>
   *                <p>The <code>Operation</code> property with an <code>Audit</code> action is required to find the
   *           sensitive data terms. This <code>Audit</code> action must contain a <code>FindingsDestination</code>
   *           object. You can optionally use that <code>FindingsDestination</code> object to list one or more
   *           destinations to send audit findings to. If you specify destinations such as log groups,
   *           Kinesis Data Firehose streams, and S3 buckets, they must already exist.</p>
   *             </li>
   *             <li>
   *                <p>The second block must include both a <code>DataIdentifer</code> array and an
   *         <code>Operation</code> property with an <code>Deidentify</code> action. The
   *         <code>DataIdentifer</code> array must exactly match the <code>DataIdentifer</code> array
   *         in the first block of the policy.</p>
   *                <p>The <code>Operation</code> property with the <code>Deidentify</code> action is what actually masks the
   *           data, and it must
   *           contain the <code>
   *             "MaskConfig": \{\}</code> object. The <code>
   *               "MaskConfig": \{\}</code> object must be empty.</p>
   *             </li>
   *          </ul>
   *          <p>For an example data protection policy, see the <b>Examples</b> section on this page.</p>
   *          <important>
   *             <p>The contents of the two <code>DataIdentifer</code> arrays must match exactly.</p>
   *          </important>
   *          <p>In addition to the two JSON blocks, the <code>policyDocument</code> can also include <code>Name</code>,
   *     <code>Description</code>, and <code>Version</code> fields. The <code>Name</code> is different than the
   *       operation's <code>policyName</code> parameter, and is used as a dimension when
   *     CloudWatch Logs reports audit findings metrics to CloudWatch.</p>
   *          <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>
   */
  policyDocument: string | undefined;

  /**
   * @public
   * <p>Currently the only valid value for this parameter is <code>DATA_PROTECTION_POLICY</code>.</p>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>Currently the only valid value for this parameter is <code>ALL</code>, which specifies that the data
   *       protection policy applies to all log groups in the account. If you omit this parameter, the default
   *     of <code>ALL</code> is used.</p>
   */
  scope?: Scope;
}

/**
 * @public
 */
export interface PutAccountPolicyResponse {
  /**
   * @public
   * <p>The account policy that you created.</p>
   */
  accountPolicy?: AccountPolicy;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyRequest {
  /**
   * @public
   * <p>Specify either the log group name or log group ARN.</p>
   */
  logGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>Specify the data protection policy, in JSON.</p>
   *          <p>This policy must include two JSON blocks:</p>
   *          <ul>
   *             <li>
   *                <p>The first block must include both a <code>DataIdentifer</code> array and an
   *         <code>Operation</code> property with an <code>Audit</code> action. The <code>DataIdentifer</code> array lists the types of sensitive data that
   *         you want to mask. For more information about the available options, see
   *         <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html">Types of data that you can mask</a>.</p>
   *                <p>The <code>Operation</code> property with an <code>Audit</code> action is required to find the
   *           sensitive data terms. This <code>Audit</code> action must contain a <code>FindingsDestination</code>
   *           object. You can optionally use that <code>FindingsDestination</code> object to list one or more
   *           destinations to send audit findings to. If you specify destinations such as log groups,
   *           Kinesis Data Firehose streams, and S3 buckets, they must already exist.</p>
   *             </li>
   *             <li>
   *                <p>The second block must include both a <code>DataIdentifer</code> array and an
   *             <code>Operation</code> property with an <code>Deidentify</code> action. The
   *             <code>DataIdentifer</code> array must exactly match the <code>DataIdentifer</code> array
   *           in the first block of the policy.</p>
   *                <p>The <code>Operation</code> property with the <code>Deidentify</code> action is what actually masks the
   *         data, and it must
   *         contain the <code>
   *           "MaskConfig": \{\}</code> object. The <code>
   *             "MaskConfig": \{\}</code> object must be empty.</p>
   *             </li>
   *          </ul>
   *          <p>For an example data protection policy, see the <b>Examples</b> section on this page.</p>
   *          <important>
   *             <p>The contents of the two <code>DataIdentifer</code> arrays must match exactly.</p>
   *          </important>
   *          <p>In addition to the two JSON blocks, the <code>policyDocument</code> can also include <code>Name</code>,
   *       <code>Description</code>, and <code>Version</code> fields. The <code>Name</code> is used as a dimension when
   *       CloudWatch Logs reports audit findings metrics to CloudWatch.</p>
   *          <p>The JSON specified in <code>policyDocument</code> can be up to 30,720 characters.</p>
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyResponse {
  /**
   * @public
   * <p>The log group name or ARN that you specified in your request.</p>
   */
  logGroupIdentifier?: string;

  /**
   * @public
   * <p>The data protection policy used for this log group.</p>
   */
  policyDocument?: string;

  /**
   * @public
   * <p>The date and time that this policy was most recently updated.</p>
   */
  lastUpdatedTime?: number;
}

/**
 * @public
 */
export interface PutDeliveryDestinationRequest {
  /**
   * @public
   * <p>A name for this delivery destination. This name must be unique for all delivery destinations in your account.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The format for the logs that this delivery destination will receive.</p>
   */
  outputFormat?: OutputFormat;

  /**
   * @public
   * <p>A structure that contains the ARN of the Amazon Web Services resource that will receive the logs.</p>
   */
  deliveryDestinationConfiguration: DeliveryDestinationConfiguration | undefined;

  /**
   * @public
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see
   *        <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutDeliveryDestinationResponse {
  /**
   * @public
   * <p>A structure containing information about the delivery destination that you just created or updated.</p>
   */
  deliveryDestination?: DeliveryDestination;
}

/**
 * @public
 */
export interface PutDeliveryDestinationPolicyRequest {
  /**
   * @public
   * <p>The name of the delivery destination to assign this policy to.</p>
   */
  deliveryDestinationName: string | undefined;

  /**
   * @public
   * <p>The contents of the policy.</p>
   */
  deliveryDestinationPolicy: string | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationPolicyResponse {
  /**
   * @public
   * <p>The contents of the policy that you just created.</p>
   */
  policy?: Policy;
}

/**
 * @public
 */
export interface PutDeliverySourceRequest {
  /**
   * @public
   * <p>A name for this delivery source. This name must be unique for all delivery sources in your account.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the Amazon Web Services resource that is generating and sending logs.
   *        For example, <code>arn:aws:workmail:us-east-1:123456789012:organization/m-1234EXAMPLEabcd1234abcd1234abcd1234</code>
   *          </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Defines the type of log that the source is sending. For valid values for this parameter, see the documentation for
   *       the source service.</p>
   */
  logType: string | undefined;

  /**
   * @public
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see
   *        <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutDeliverySourceResponse {
  /**
   * @public
   * <p>A structure containing information about the delivery source that was just created or updated.</p>
   */
  deliverySource?: DeliverySource;
}

/**
 * @public
 */
export interface PutDestinationRequest {
  /**
   * @public
   * <p>A name for the destination.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>The ARN of an Amazon Kinesis stream to which to deliver matching log events.</p>
   */
  targetArn: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon
   *       Kinesis <code>PutRecord</code> operation on the destination stream.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see
   *       <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutDestinationResponse {
  /**
   * @public
   * <p>The destination.</p>
   */
  destination?: Destination;
}

/**
 * @public
 */
export interface PutDestinationPolicyRequest {
  /**
   * @public
   * <p>A name for an existing destination.</p>
   */
  destinationName: string | undefined;

  /**
   * @public
   * <p>An IAM policy document that authorizes cross-account users to deliver their log events
   *       to the associated destination. This can be up to 5120 bytes.</p>
   */
  accessPolicy: string | undefined;

  /**
   * @public
   * <p>Specify true if you are updating an existing destination policy to grant permission to
   *       an organization ID instead of granting permission to individual Amazon Web Services accounts. Before
   *     you update a destination policy this way, you must first update the subscription
   *     filters in the accounts that send logs to this destination. If you do not, the subscription
   *     filters might stop working. By specifying <code>true</code>
   *       for <code>forceUpdate</code>, you are affirming that you have already updated the subscription
   *       filters.
   *     For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Cross-Account-Log_Subscription-Update.html">
   *       Updating an existing cross-account subscription</a>
   *          </p>
   *          <p>If you omit this parameter, the default of <code>false</code> is used.</p>
   */
  forceUpdate?: boolean;
}

/**
 * @public
 */
export interface PutLogEventsRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;

  /**
   * @public
   * <p>The log events.</p>
   */
  logEvents: InputLogEvent[] | undefined;

  /**
   * @public
   * <p>The sequence token obtained from the response of the previous <code>PutLogEvents</code>
   *       call.</p>
   *          <important>
   *             <p>The <code>sequenceToken</code> parameter is now ignored in <code>PutLogEvents</code>
   *       actions. <code>PutLogEvents</code>
   *       actions are now accepted and never return <code>InvalidSequenceTokenException</code> or
   *       <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid.</p>
   *          </important>
   */
  sequenceToken?: string;
}

/**
 * @public
 * <p>Represents the rejected events.</p>
 */
export interface RejectedLogEventsInfo {
  /**
   * @public
   * <p>The log events that are too new.</p>
   */
  tooNewLogEventStartIndex?: number;

  /**
   * @public
   * <p>The log events that are dated too far in the past.</p>
   */
  tooOldLogEventEndIndex?: number;

  /**
   * @public
   * <p>The expired log events.</p>
   */
  expiredLogEventEndIndex?: number;
}

/**
 * @public
 */
export interface PutLogEventsResponse {
  /**
   * @public
   * <p>The next sequence token.</p>
   *          <important>
   *             <p>This field has been deprecated.</p>
   *             <p>The sequence token is now ignored in <code>PutLogEvents</code>
   *         actions. <code>PutLogEvents</code>
   *         actions are always accepted even if the sequence token is not valid. You can use
   *         parallel <code>PutLogEvents</code> actions on the same log stream and you do not need
   *       to wait for the response of a previous <code>PutLogEvents</code> action to obtain
   *       the <code>nextSequenceToken</code> value.</p>
   *          </important>
   */
  nextSequenceToken?: string;

  /**
   * @public
   * <p>The rejected events.</p>
   */
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
}

/**
 * @public
 * <p>The most likely cause is an Amazon Web Services access key ID or secret key that's not
 *       valid.</p>
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
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>A name for the metric filter.</p>
   */
  filterName: string | undefined;

  /**
   * @public
   * <p>A filter pattern for extracting metric data out of ingested log events.</p>
   */
  filterPattern: string | undefined;

  /**
   * @public
   * <p>A collection of information that defines how metric data gets emitted.</p>
   */
  metricTransformations: MetricTransformation[] | undefined;
}

/**
 * @public
 */
export interface PutQueryDefinitionRequest {
  /**
   * @public
   * <p>A name for the query definition. If you are saving numerous query definitions, we
   *       recommend that you name them. This way, you can find the ones you want by using the first part
   *       of the name as a filter in the <code>queryDefinitionNamePrefix</code> parameter of <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a>.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>If you are updating a query definition, use this parameter to specify the ID of the query
   *       definition that you want to update. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the IDs of your saved query
   *       definitions.</p>
   *          <p>If you are creating a query definition, do not specify this parameter. CloudWatch
   *       generates a unique ID for the new query definition and include it in the response to this
   *       operation.</p>
   */
  queryDefinitionId?: string;

  /**
   * @public
   * <p>Use this parameter to include specific log groups as part of your query definition.</p>
   *          <p>If you are updating a query definition and you omit this parameter, then the updated
   *       definition will contain no log groups.</p>
   */
  logGroupNames?: string[];

  /**
   * @public
   * <p>The query string to use for this definition.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString: string | undefined;

  /**
   * @public
   * <p>Used as an idempotency token, to avoid returning an exception if the service receives the same
   *       request twice because of a network
   *
   *     error.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface PutQueryDefinitionResponse {
  /**
   * @public
   * <p>The ID of the query definition.</p>
   */
  queryDefinitionId?: string;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>Name of the new policy. This parameter is required.</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string.
   *     This parameter is required.</p>
   *          <p>The following example creates a resource policy enabling the Route 53 service to put
   *       DNS query logs in to the specified log group. Replace <code>"logArn"</code> with the ARN of
   *       your CloudWatch Logs resource, such as a log group or log stream.</p>
   *          <p>CloudWatch Logs also supports <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn">aws:SourceArn</a>
   *       and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount">aws:SourceAccount</a>
   * condition context keys.</p>
   *          <p>In the example resource policy, you would replace the value of <code>SourceArn</code> with
   *       the resource making the call from Route 53 to CloudWatch Logs. You would also
   *       replace the value of <code>SourceAccount</code> with the Amazon Web Services account ID making
   *       that call.</p>
   *          <p></p>
   *          <p>
   *             <code>\{
   *     "Version": "2012-10-17",
   *     "Statement": [
   *         \{
   *            "Sid": "Route53LogsToCloudWatchLogs",
   *            "Effect": "Allow",
   *            "Principal": \{
   *                "Service": [
   *                    "route53.amazonaws.com"
   *                 ]
   *             \},
   *            "Action": "logs:PutLogEvents",
   *            "Resource": "logArn",
   *            "Condition": \{
   *                "ArnLike": \{
   *                    "aws:SourceArn": "myRoute53ResourceArn"
   *                 \},
   *                "StringEquals": \{
   *                    "aws:SourceAccount": "myAwsAccountId"
   *                \}
   *             \}
   *         \}
   *       ]
   * \}</code>
   *          </p>
   */
  policyDocument?: string;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * @public
   * <p>The new policy.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

/**
 * @public
 */
export interface PutRetentionPolicyRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The number of days to retain the log events in the specified log group.
   *       Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p>
   *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
   */
  retentionInDays: number | undefined;
}

/**
 * @public
 */
export interface PutSubscriptionFilterRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>A name for the subscription filter. If you are updating an existing filter, you must
   *       specify the correct name in <code>filterName</code>. To find the name of the filter currently
   *       associated with a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html">DescribeSubscriptionFilters</a>.</p>
   */
  filterName: string | undefined;

  /**
   * @public
   * <p>A filter pattern for subscribing to a filtered stream of log events.</p>
   */
  filterPattern: string | undefined;

  /**
   * @public
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
   *                <p>A Lambda function belonging to the same account as the subscription filter,
   *           for same-account delivery.</p>
   *             </li>
   *          </ul>
   */
  destinationArn: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log
   *       events to the destination stream. You don't need to provide the ARN when you are working with
   *       a logical destination for cross-account delivery.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The method used to distribute log data to the destination. By default, log data is
   *       grouped by log stream, but the grouping can be set to random for a more even distribution.
   *       This property is only applicable when the destination is an Amazon Kinesis data stream. </p>
   */
  distribution?: Distribution;
}

/**
 * @public
 */
export interface StartLiveTailRequest {
  /**
   * @public
   * <p>An array where each item in the array is a log group to include in the Live Tail session.</p>
   *          <p>Specify each log group by its ARN. </p>
   *          <p>If you specify an ARN, the ARN can't end with an asterisk (*).</p>
   *          <note>
   *             <p> You can include up to 10 log groups.</p>
   *          </note>
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * @public
   * <p>If you specify this parameter, then only log events in the log streams that you specify here are
   *     included in the Live Tail session.</p>
   *          <note>
   *             <p>You can specify this parameter only if you specify only one log group in <code>logGroupIdentifiers</code>.</p>
   *          </note>
   */
  logStreamNames?: string[];

  /**
   * @public
   * <p>If you specify this parameter, then only log events in the log streams that have names that start with the
   *       prefixes that you specify here are
   *       included in the Live Tail session.</p>
   *          <note>
   *             <p>You can specify this parameter only if you specify only one log group in <code>logGroupIdentifiers</code>.</p>
   *          </note>
   */
  logStreamNamePrefixes?: string[];

  /**
   * @public
   * <p>An optional pattern to use to filter the results to include only log events that match the pattern.
   *       For example, a filter pattern of <code>error 404</code> causes only log events that include both <code>error</code>
   *       and <code>404</code> to be included in the Live Tail stream.</p>
   *          <p>Regular expression filter patterns are supported.</p>
   *          <p>For more information about filter pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p>
   */
  logEventFilterPattern?: string;
}

/**
 * @public
 * <p>his exception is returned if an unknown error occurs during a Live Tail session.</p>
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
 * @public
 * <p>This exception is returned in a Live Tail stream when the Live Tail session times out. Live Tail sessions time
 *       out after three hours.</p>
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
 * @public
 * <p>This object includes the stream returned by your
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html">StartLiveTail</a>
 *       request.</p>
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
   * @public
   * <p>This object contains information about this Live Tail session, including the log groups included and the
   *     log stream filters, if any.</p>
   */
  export interface SessionStartMember {
    sessionStart: LiveTailSessionStart;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>This object contains the log events and session metadata.</p>
   */
  export interface SessionUpdateMember {
    sessionStart?: never;
    sessionUpdate: LiveTailSessionUpdate;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>This exception is returned in the stream when the Live Tail session times out. Live Tail sessions time
   *     out after three hours.</p>
   */
  export interface SessionTimeoutExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException: SessionTimeoutException;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>This exception is returned if an unknown error occurs.</p>
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
   * @public
   * <p>An object that includes the stream returned by your request. It can include both log events and exceptions.</p>
   */
  responseStream?: AsyncIterable<StartLiveTailResponseStream>;
}

/**
 * @public
 * <p>Reserved.</p>
 */
export interface QueryCompileErrorLocation {
  /**
   * @public
   * <p>Reserved.</p>
   */
  startCharOffset?: number;

  /**
   * @public
   * <p>Reserved.</p>
   */
  endCharOffset?: number;
}

/**
 * @public
 * <p>Reserved.</p>
 */
export interface QueryCompileError {
  /**
   * @public
   * <p>Reserved.</p>
   */
  location?: QueryCompileErrorLocation;

  /**
   * @public
   * <p>Reserved.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>The query string is not valid. Details about this error are displayed in a
 *       <code>QueryCompileError</code> object. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_QueryCompileError.html">QueryCompileError</a>.</p>
 *          <p>For more information about valid query syntax, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
 */
export class MalformedQueryException extends __BaseException {
  readonly name: "MalformedQueryException" = "MalformedQueryException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Reserved.</p>
   */
  queryCompileError?: QueryCompileError;

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
   * @public
   * <p>The log group on which to perform the query.</p>
   *          <note>
   *             <p>A <code>StartQuery</code> operation must include exactly one of the following
   *         parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or
   *           <code>logGroupIdentifiers</code>. </p>
   *          </note>
   */
  logGroupName?: string;

  /**
   * @public
   * <p>The list of log groups to be queried. You can include up to 50 log groups.</p>
   *          <note>
   *             <p>A <code>StartQuery</code> operation must include exactly one of the following
   *         parameters: <code>logGroupName</code>, <code>logGroupNames</code>, or
   *           <code>logGroupIdentifiers</code>. </p>
   *          </note>
   */
  logGroupNames?: string[];

  /**
   * @public
   * <p>The list of log groups to query. You can include up to 50 log groups.</p>
   *          <p>You can specify them by the log group name or ARN. If a log group that you're querying is
   *       in a source account and you're using a monitoring account, you must specify the ARN of the log
   *       group here. The query definition must also be defined in the monitoring account.</p>
   *          <p>If you specify an ARN, the ARN can't end with an asterisk (*).</p>
   *          <p>A <code>StartQuery</code> operation must include exactly one of the following parameters:
   *         <code>logGroupName</code>, <code>logGroupNames</code>, or <code>logGroupIdentifiers</code>. </p>
   */
  logGroupIdentifiers?: string[];

  /**
   * @public
   * <p>The beginning of the time range to query. The range is inclusive, so the specified start
   *       time is included in the query. Specified as epoch time, the number of seconds since
   *         <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  startTime: number | undefined;

  /**
   * @public
   * <p>The end of the time range to query. The range is inclusive, so the specified end time is
   *       included in the query. Specified as epoch time, the number of seconds since <code>January 1,
   *         1970, 00:00:00 UTC</code>.</p>
   */
  endTime: number | undefined;

  /**
   * @public
   * <p>The query string to use.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString: string | undefined;

  /**
   * @public
   * <p>The maximum number of log events to return in the query. If the query string uses the <code>fields</code> command,
   *     only the specified fields and their values are returned. The default is 1000.</p>
   */
  limit?: number;
}

/**
 * @public
 */
export interface StartQueryResponse {
  /**
   * @public
   * <p>The unique ID of the query. </p>
   */
  queryId?: string;
}

/**
 * @public
 */
export interface StopQueryRequest {
  /**
   * @public
   * <p>The ID number of the query to stop. To find this ID number, use
   *         <code>DescribeQueries</code>.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryResponse {
  /**
   * @public
   * <p>This is true if the query was stopped by the <code>StopQuery</code> operation.</p>
   */
  success?: boolean;
}

/**
 * @public
 */
export interface TagLogGroupRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The key-value pairs to use for the tags.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the  resource that you're adding tags to.</p>
   *          <p>The ARN format of a log group is
   *       <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *       <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *       resources and operations</a>.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p>A resource can have no more than 50 tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

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
   * @public
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern: string | undefined;

  /**
   * @public
   * <p>The log event messages to test.</p>
   */
  logEventMessages: string[] | undefined;
}

/**
 * @public
 * <p>Represents a matched event.</p>
 */
export interface MetricFilterMatchRecord {
  /**
   * @public
   * <p>The event number.</p>
   */
  eventNumber?: number;

  /**
   * @public
   * <p>The raw event data.</p>
   */
  eventMessage?: string;

  /**
   * @public
   * <p>The values extracted from the event data by the filter.</p>
   */
  extractedValues?: Record<string, string>;
}

/**
 * @public
 */
export interface TestMetricFilterResponse {
  /**
   * @public
   * <p>The matched events.</p>
   */
  matches?: MetricFilterMatchRecord[];
}

/**
 * @public
 */
export interface UntagLogGroupRequest {
  /**
   * @public
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The tag keys. The corresponding tags are removed from the log group.</p>
   */
  tags: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the CloudWatch Logs resource that you're removing tags from.</p>
   *          <p>The ARN format of a log group is
   *       <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:log-group:<i>log-group-name</i>
   *             </code>
   *          </p>
   *          <p>The ARN format of a destination is
   *       <code>arn:aws:logs:<i>Region</i>:<i>account-id</i>:destination:<i>destination-name</i>
   *             </code>
   *          </p>
   *          <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs
   *       resources and operations</a>.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
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
 * @public
 * <p>If you are suppressing an anomaly temporariliy, this structure defines how long the suppression period
 *       is to be.</p>
 */
export interface SuppressionPeriod {
  /**
   * @public
   * <p>Specifies the number of seconds, minutes or hours to suppress this anomaly. There is no maximum.</p>
   */
  value?: number;

  /**
   * @public
   * <p>Specifies whether the value of <code>value</code> is in seconds, minutes, or hours.</p>
   */
  suppressionUnit?: SuppressionUnit;
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
   * @public
   * <p>If you are suppressing or unsuppressing an anomaly, specify its unique ID here. You can find anomaly IDs by
   *         using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html">ListAnomalies</a> operation.</p>
   */
  anomalyId?: string;

  /**
   * @public
   * <p>If you are suppressing or unsuppressing an pattern, specify its unique ID here. You can find pattern IDs by
   *        using the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListAnomalies.html">ListAnomalies</a> operation.</p>
   */
  patternId?: string;

  /**
   * @public
   * <p>The ARN of the anomaly detector that this operation is to act on.</p>
   */
  anomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>Use this to specify whether the suppression to be temporary or infinite. If you specify <code>LIMITED</code>,
   *         you must also specify a <code>suppressionPeriod</code>. If you specify <code>INFINITE</code>,
   *         any value for <code>suppressionPeriod</code> is ignored. </p>
   */
  suppressionType?: SuppressionType;

  /**
   * @public
   * <p>If you are temporarily suppressing an anomaly or pattern, use this structure to specify
   *       how long the suppression is to last.</p>
   */
  suppressionPeriod?: SuppressionPeriod;
}

/**
 * @public
 */
export interface UpdateLogAnomalyDetectorRequest {
  /**
   * @public
   * <p>The ARN of the anomaly detector that you want to update.</p>
   */
  anomalyDetectorArn: string | undefined;

  /**
   * @public
   * <p>Specifies how often the anomaly detector runs and look for anomalies. Set this value
   *        according to the frequency that the log group receives new logs. For example, if the log group
   *        receives new log events every 10 minutes, then setting <code>evaluationFrequency</code> to
   *        <code>FIFTEEN_MIN</code> might be appropriate.</p>
   */
  evaluationFrequency?: EvaluationFrequency;

  /**
   * @public
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * @public
   * <p>The number of days to use as the life cycle of anomalies. After this time, anomalies are automatically baselined
   *        and the anomaly detector model will treat new occurrences of similar event as normal. Therefore, if you do not correct the cause of an
   *        anomaly during this time, it will be considered normal going forward and will not be detected.</p>
   */
  anomalyVisibilityTime?: number;

  /**
   * @public
   * <p>Use this parameter to pause or restart the anomaly detector. </p>
   */
  enabled: boolean | undefined;
}

/**
 * @internal
 */
export const StartLiveTailResponseStreamFilterSensitiveLog = (obj: StartLiveTailResponseStream): any => {
  if (obj.sessionStart !== undefined) return { sessionStart: obj.sessionStart };
  if (obj.sessionUpdate !== undefined) return { sessionUpdate: obj.sessionUpdate };
  if (obj.SessionTimeoutException !== undefined) return { SessionTimeoutException: obj.SessionTimeoutException };
  if (obj.SessionStreamingException !== undefined) return { SessionStreamingException: obj.SessionStreamingException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StartLiveTailResponseFilterSensitiveLog = (obj: StartLiveTailResponse): any => ({
  ...obj,
  ...(obj.responseStream && { responseStream: "STREAMING_CONTENT" }),
});
