// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";

export interface AssociateKmsKeyRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log
   *       data. This must be a symmetric KMS key. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric
   *         Keys</a>.</p>
   */
  kmsKeyId: string | undefined;
}

/**
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

export interface CancelExportTaskRequest {
  /**
   * <p>The ID of the export task.</p>
   */
  taskId: string | undefined;
}

/**
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

export interface CreateExportTaskRequest {
  /**
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>Export only log streams that match the provided prefix. If you don't
   *       specify a value, no prefix filter is applied.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * <p>The start time of the range for the request, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp earlier than this time
   *       are not exported.</p>
   */
  from: number | undefined;

  /**
   * <p>The end time of the range for the request, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>. Events with a timestamp later than this time are
   *       not exported.</p>
   *          <p>You must specify a time that is not earlier than when this log group was created.</p>
   */
  to: number | undefined;

  /**
   * <p>The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region.</p>
   */
  destination: string | undefined;

  /**
   * <p>The prefix used as the start of the key for every object exported. If you don't
   *       specify a value, the default is <code>exportedlogs</code>.</p>
   */
  destinationPrefix?: string;
}

export interface CreateExportTaskResponse {
  /**
   * <p>The ID of the export task.</p>
   */
  taskId?: string;
}

/**
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

export interface CreateLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log
   *       data. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource
   *         Names</a>.</p>
   */
  kmsKeyId?: string;

  /**
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
}

export interface CreateLogStreamRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;
}

/**
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

export enum DataProtectionStatus {
  ACTIVATED = "ACTIVATED",
  ARCHIVED = "ARCHIVED",
  DELETED = "DELETED",
  DISABLED = "DISABLED",
}

export interface DeleteDataProtectionPolicyRequest {
  /**
   * <p>The name or ARN of the log group that you want to delete the data protection policy for.</p>
   */
  logGroupIdentifier: string | undefined;
}

export interface DeleteDestinationRequest {
  /**
   * <p>The name of the destination.</p>
   */
  destinationName: string | undefined;
}

export interface DeleteLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export interface DeleteLogStreamRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;
}

export interface DeleteMetricFilterRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the metric filter.</p>
   */
  filterName: string | undefined;
}

export interface DeleteQueryDefinitionRequest {
  /**
   * <p>The ID of the query definition that you want to delete. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the
   *       IDs of your saved query definitions.</p>
   */
  queryDefinitionId: string | undefined;
}

export interface DeleteQueryDefinitionResponse {
  /**
   * <p>A value of TRUE indicates that the operation succeeded. FALSE indicates that the operation
   *       failed.</p>
   */
  success?: boolean;
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The name of the policy to be revoked. This parameter is required.</p>
   */
  policyName?: string;
}

export interface DeleteRetentionPolicyRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export interface DeleteSubscriptionFilterRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the subscription filter.</p>
   */
  filterName: string | undefined;
}

export interface DescribeDestinationsRequest {
  /**
   * <p>The prefix to match. If you don't specify a value, no prefix filter is applied.</p>
   */
  DestinationNamePrefix?: string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default maximum value of
   *       50 items is used.</p>
   */
  limit?: number;
}

/**
 * <p>Represents a cross-account destination that receives subscription log events.</p>
 */
export interface Destination {
  /**
   * <p>The name of the destination.</p>
   */
  destinationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the physical target where the log events are
   *       delivered (for example, a Kinesis stream).</p>
   */
  targetArn?: string;

  /**
   * <p>A role for impersonation, used when delivering log events to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>An IAM policy document that governs which Amazon Web Services accounts can create subscription filters
   *       against this destination.</p>
   */
  accessPolicy?: string;

  /**
   * <p>The ARN of this destination.</p>
   */
  arn?: string;

  /**
   * <p>The creation time of the destination, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;
}

export interface DescribeDestinationsResponse {
  /**
   * <p>The destinations.</p>
   */
  destinations?: Destination[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export enum ExportTaskStatusCode {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PENDING_CANCEL = "PENDING_CANCEL",
  RUNNING = "RUNNING",
}

export interface DescribeExportTasksRequest {
  /**
   * <p>The ID of the export task. Specifying a task ID filters the results to one or zero
   *       export tasks.</p>
   */
  taskId?: string;

  /**
   * <p>The status code of the export task. Specifying a status code filters the results to zero or more export tasks.</p>
   */
  statusCode?: ExportTaskStatusCode | string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;
}

/**
 * <p>Represents the status of an export task.</p>
 */
export interface ExportTaskExecutionInfo {
  /**
   * <p>The creation time of the export task, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;

  /**
   * <p>The completion time of the export task, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  completionTime?: number;
}

/**
 * <p>Represents the status of an export task.</p>
 */
export interface ExportTaskStatus {
  /**
   * <p>The status code of the export task.</p>
   */
  code?: ExportTaskStatusCode | string;

  /**
   * <p>The status message related to the status code.</p>
   */
  message?: string;
}

/**
 * <p>Represents an export task.</p>
 */
export interface ExportTask {
  /**
   * <p>The ID of the export task.</p>
   */
  taskId?: string;

  /**
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * <p>The name of the log group from which logs data was exported.</p>
   */
  logGroupName?: string;

  /**
   * <p>The start time, expressed as the number of milliseconds after <code>Jan 1, 1970
   *         00:00:00 UTC</code>. Events with a timestamp before this time are not exported.</p>
   */
  from?: number;

  /**
   * <p>The end time, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00
   *         UTC</code>. Events with a timestamp later than this time are not exported.</p>
   */
  to?: number;

  /**
   * <p>The name of the S3 bucket to which the log data was exported.</p>
   */
  destination?: string;

  /**
   * <p>The prefix that was used as the start of Amazon S3 key for every object exported.</p>
   */
  destinationPrefix?: string;

  /**
   * <p>The status of the export task.</p>
   */
  status?: ExportTaskStatus;

  /**
   * <p>Execution information about the export task.</p>
   */
  executionInfo?: ExportTaskExecutionInfo;
}

export interface DescribeExportTasksResponse {
  /**
   * <p>The export tasks.</p>
   */
  exportTasks?: ExportTask[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface DescribeLogGroupsRequest {
  /**
   * <p>When <code>includeLinkedAccounts</code> is set to <code>True</code>, use this parameter to
   *       specify the list of accounts to search. You can specify as many as 20 account IDs in the array.  </p>
   */
  accountIdentifiers?: string[];

  /**
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
   * <p>If you specify a string for this parameter, the operation returns only log groups that have names
   * that match the string based on a case-sensitive substring search. For example, if you specify <code>Foo</code>, log groups
   * named <code>FooBar</code>, <code>aws/Foo</code>, and <code>GroupFoo</code> would match, but <code>foo</code>,
   * <code>F/o/o</code> and <code>Froo</code> would not match.</p>
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
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>If you are using a monitoring account, set this to <code>True</code> to have the operation
   *       return log groups in
   *       the accounts listed in <code>accountIdentifiers</code>.</p>
   *          <p>If this parameter is set to <code>true</code> and <code>accountIdentifiers</code>
   *
   *       contains a null value, the operation returns all log groups in the monitoring account
   *       and all log groups in all source accounts that are linked to the monitoring account. </p>
   *          <note>
   *             <p> If you specify <code>includeLinkedAccounts</code> in your request, then
   *         <code>metricFilterCount</code>, <code>retentionInDays</code>, and <code>storedBytes</code>
   *         are not included in the response. </p>
   *          </note>
   */
  includeLinkedAccounts?: boolean;
}

/**
 * <p>Represents a log group.</p>
 */
export interface LogGroup {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>The creation time of the log group, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The number of days to retain the log events in the specified log group.
   *       Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 2192, 2557, 2922, 3288, and 3653.</p>
   *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
   */
  retentionInDays?: number;

  /**
   * <p>The number of metric filters.</p>
   */
  metricFilterCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the log group.</p>
   */
  arn?: string;

  /**
   * <p>The number of bytes stored.</p>
   */
  storedBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use when
   *       encrypting log data.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>Displays whether this log group has a protection policy, or whether it had one in the past. For more information, see
   *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
   */
  dataProtectionStatus?: DataProtectionStatus | string;
}

export interface DescribeLogGroupsResponse {
  /**
   * <p>The log groups.</p>
   *          <p>If the <code>retentionInDays</code> value is not included for a log group, then that log
   *       group's events do not expire.</p>
   */
  logGroups?: LogGroup[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export enum OrderBy {
  LastEventTime = "LastEventTime",
  LogStreamName = "LogStreamName",
}

export interface DescribeLogStreamsRequest {
  /**
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
   * <p>The prefix to match.</p>
   *          <p>If <code>orderBy</code> is <code>LastEventTime</code>, you cannot specify this
   *       parameter.</p>
   */
  logStreamNamePrefix?: string;

  /**
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
  orderBy?: OrderBy | string;

  /**
   * <p>If the value is true, results are returned in descending order.
   *       If the value is to false, results are returned in ascending order.
   *       The default value is false.</p>
   */
  descending?: boolean;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;
}

/**
 * <p>Represents a log stream, which is a sequence of log events from
 *       a single emitter of logs.</p>
 */
export interface LogStream {
  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * <p>The creation time of the stream, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;

  /**
   * <p>The time of the first event, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  firstEventTimestamp?: number;

  /**
   * <p>The time of the most recent log event in the log stream in CloudWatch Logs. This number
   *       is expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. The
   *         <code>lastEventTime</code> value updates on an eventual consistency basis. It typically
   *       updates in less than an hour from ingestion, but in rare situations might take
   *       longer.</p>
   */
  lastEventTimestamp?: number;

  /**
   * <p>The ingestion time, expressed as the number of milliseconds after <code>Jan 1, 1970
   *       00:00:00 UTC</code> The <code>lastIngestionTime</code> value updates on an eventual consistency basis. It
   *       typically updates in less than an hour after ingestion, but in rare situations might take longer.</p>
   */
  lastIngestionTime?: number;

  /**
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
   * <p>The Amazon Resource Name (ARN) of the log stream.</p>
   */
  arn?: string;

  /**
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

export interface DescribeLogStreamsResponse {
  /**
   * <p>The log streams.</p>
   */
  logStreams?: LogStream[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface DescribeMetricFiltersRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>The prefix to match. CloudWatch Logs uses the value that you set here only if you also
   *       include the <code>logGroupName</code> parameter in your request.</p>
   */
  filterNamePrefix?: string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>Filters results to include only those with the specified metric name. If you include this parameter in your request, you
   *     must also include the <code>metricNamespace</code> parameter.</p>
   */
  metricName?: string;

  /**
   * <p>Filters results to include only those in the specified namespace. If you include this parameter in your request, you
   *     must also include the <code>metricName</code> parameter.</p>
   */
  metricNamespace?: string;
}

export enum StandardUnit {
  Bits = "Bits",
  BitsSecond = "Bits/Second",
  Bytes = "Bytes",
  BytesSecond = "Bytes/Second",
  Count = "Count",
  CountSecond = "Count/Second",
  Gigabits = "Gigabits",
  GigabitsSecond = "Gigabits/Second",
  Gigabytes = "Gigabytes",
  GigabytesSecond = "Gigabytes/Second",
  Kilobits = "Kilobits",
  KilobitsSecond = "Kilobits/Second",
  Kilobytes = "Kilobytes",
  KilobytesSecond = "Kilobytes/Second",
  Megabits = "Megabits",
  MegabitsSecond = "Megabits/Second",
  Megabytes = "Megabytes",
  MegabytesSecond = "Megabytes/Second",
  Microseconds = "Microseconds",
  Milliseconds = "Milliseconds",
  None = "None",
  Percent = "Percent",
  Seconds = "Seconds",
  Terabits = "Terabits",
  TerabitsSecond = "Terabits/Second",
  Terabytes = "Terabytes",
  TerabytesSecond = "Terabytes/Second",
}

/**
 * <p>Indicates how to transform ingested log events to metric data in a CloudWatch
 *       metric.</p>
 */
export interface MetricTransformation {
  /**
   * <p>The name of the CloudWatch metric.</p>
   */
  metricName: string | undefined;

  /**
   * <p>A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics
   *       that are similar. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace">Namespaces</a>.</p>
   */
  metricNamespace: string | undefined;

  /**
   * <p>The value to publish to the CloudWatch metric when a filter pattern matches a log event.</p>
   */
  metricValue: string | undefined;

  /**
   * <p>(Optional) The value to emit when a filter pattern does not match a log event.
   *       This value can be null.</p>
   */
  defaultValue?: number;

  /**
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
   * <p>The unit to assign to the metric. If you omit this, the unit is set as <code>None</code>.</p>
   */
  unit?: StandardUnit | string;
}

/**
 * <p>Metric filters express how CloudWatch Logs would extract metric observations
 *       from ingested log events and transform them into metric data in a CloudWatch metric.</p>
 */
export interface MetricFilter {
  /**
   * <p>The name of the metric filter.</p>
   */
  filterName?: string;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * <p>The metric transformations.</p>
   */
  metricTransformations?: MetricTransformation[];

  /**
   * <p>The creation time of the metric filter, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;
}

export interface DescribeMetricFiltersResponse {
  /**
   * <p>The metric filters.</p>
   */
  metricFilters?: MetricFilter[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export enum QueryStatus {
  Cancelled = "Cancelled",
  Complete = "Complete",
  Failed = "Failed",
  Running = "Running",
  Scheduled = "Scheduled",
  Timeout = "Timeout",
  Unknown = "Unknown",
}

export interface DescribeQueriesRequest {
  /**
   * <p>Limits the returned queries to only those for the specified log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>Limits the returned queries to only those that have the specified status. Valid values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, and <code>Scheduled</code>.</p>
   */
  status?: QueryStatus | string;

  /**
   * <p>Limits the number of returned queries to the specified number.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * <p>Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. </p>
 */
export interface QueryInfo {
  /**
   * <p>The unique ID number of this query.</p>
   */
  queryId?: string;

  /**
   * <p>The query string used in this query.</p>
   */
  queryString?: string;

  /**
   * <p>The status of this query. Possible values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>, and <code>Unknown</code>.</p>
   */
  status?: QueryStatus | string;

  /**
   * <p>The date and time that this query was created.</p>
   */
  createTime?: number;

  /**
   * <p>The name of the log group scanned by this query.</p>
   */
  logGroupName?: string;
}

export interface DescribeQueriesResponse {
  /**
   * <p>The list of queries that match the request.</p>
   */
  queries?: QueryInfo[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface DescribeQueryDefinitionsRequest {
  /**
   * <p>Use this parameter to filter your results to only the query definitions that have names that start with the prefix you specify.</p>
   */
  queryDefinitionNamePrefix?: string;

  /**
   * <p>Limits the number of returned query definitions to the specified number.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

/**
 * <p>This structure contains details about a saved CloudWatch Logs Insights query definition.</p>
 */
export interface QueryDefinition {
  /**
   * <p>The unique ID of the query definition.</p>
   */
  queryDefinitionId?: string;

  /**
   * <p>The name of the query definition.</p>
   */
  name?: string;

  /**
   * <p>The query string to use for this definition.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString?: string;

  /**
   * <p>The date that the query definition was most recently modified.</p>
   */
  lastModified?: number;

  /**
   * <p>If this query definition contains a list of log groups that it is limited to, that list appears here.</p>
   */
  logGroupNames?: string[];
}

export interface DescribeQueryDefinitionsResponse {
  /**
   * <p>The list of query definitions that match your request.</p>
   */
  queryDefinitions?: QueryDefinition[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface DescribeResourcePoliciesRequest {
  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of resource policies to be displayed with one call of this API.</p>
   */
  limit?: number;
}

/**
 * <p>A policy enabling one or more entities to put logs to a log group in this account.</p>
 */
export interface ResourcePolicy {
  /**
   * <p>The name of the resource policy.</p>
   */
  policyName?: string;

  /**
   * <p>The details of the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>Timestamp showing when this policy was last updated, expressed as the number of
   *       milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  lastUpdatedTime?: number;
}

export interface DescribeResourcePoliciesResponse {
  /**
   * <p>The resource policies that exist in this account.</p>
   */
  resourcePolicies?: ResourcePolicy[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface DescribeSubscriptionFiltersRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The prefix to match. If you don't specify a value, no prefix filter is applied.</p>
   */
  filterNamePrefix?: string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;
}

export enum Distribution {
  ByLogStream = "ByLogStream",
  Random = "Random",
}

/**
 * <p>Represents a subscription filter.</p>
 */
export interface SubscriptionFilter {
  /**
   * <p>The name of the subscription filter.</p>
   */
  filterName?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  destinationArn?: string;

  /**
   * <p></p>
   */
  roleArn?: string;

  /**
   * <p>The method used to distribute log data to the destination, which can be either
   *       random or grouped by log stream.</p>
   */
  distribution?: Distribution | string;

  /**
   * <p>The creation time of the subscription filter, expressed as the number of milliseconds
   *       after <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  creationTime?: number;
}

export interface DescribeSubscriptionFiltersResponse {
  /**
   * <p>The subscription filters.</p>
   */
  subscriptionFilters?: SubscriptionFilter[];

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface DisassociateKmsKeyRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

/**
 * <p>Represents a matched event.</p>
 */
export interface FilteredLogEvent {
  /**
   * <p>The name of the log stream to which this event belongs.</p>
   */
  logStreamName?: string;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  timestamp?: number;

  /**
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  ingestionTime?: number;

  /**
   * <p>The ID of the event.</p>
   */
  eventId?: string;
}

export interface FilterLogEventsRequest {
  /**
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
   * <p>Filters the results to only logs from the log streams in this list.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, the action
   *       returns an <code>InvalidParameterException</code> error.</p>
   */
  logStreamNames?: string[];

  /**
   * <p>Filters the results to include only events from log streams that have names starting with this prefix.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, but the value for
   *       <code>logStreamNamePrefix</code> does not match any log stream names specified in <code>logStreamNames</code>, the action
   *     returns an <code>InvalidParameterException</code> error.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp before this time are not
   *       returned.</p>
   */
  startTime?: number;

  /**
   * <p>The end of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp later than this time are not
   *       returned.</p>
   */
  endTime?: number;

  /**
   * <p>The filter pattern to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p>
   *          <p>If not provided, all the events are matched.</p>
   */
  filterPattern?: string;

  /**
   * <p>The token for the next set of events to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of events to return. The default is 10,000 events.</p>
   */
  limit?: number;

  /**
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
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible.
   *       The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code>
   *       permission.</p>
   */
  unmask?: boolean;
}

/**
 * <p>Represents the search status of a log stream.</p>
 */
export interface SearchedLogStream {
  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * <p>Indicates whether all the events in this log stream were searched.</p>
   */
  searchedCompletely?: boolean;
}

export interface FilterLogEventsResponse {
  /**
   * <p>The matched events.</p>
   */
  events?: FilteredLogEvent[];

  /**
   * <p>
   *             <b>Important</b> As of May 15, 2020, this parameter is no longer
   *       supported. This parameter returns an empty list.</p>
   *          <p>Indicates which log streams have been searched and whether each has been searched completely.</p>
   */
  searchedLogStreams?: SearchedLogStream[];

  /**
   * <p>The token to use when requesting the next set of items. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export interface GetDataProtectionPolicyRequest {
  /**
   * <p>The name or ARN of the log group that contains the data protection policy that you want to see.</p>
   */
  logGroupIdentifier: string | undefined;
}

export interface GetDataProtectionPolicyResponse {
  /**
   * <p>The log group name or ARN that you specified in your request.</p>
   */
  logGroupIdentifier?: string;

  /**
   * <p>The data protection policy document for this log group.</p>
   */
  policyDocument?: string;

  /**
   * <p>The date and time that this policy was most recently updated.</p>
   */
  lastUpdatedTime?: number;
}

export interface GetLogEventsRequest {
  /**
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
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp equal to this time or later than this time
   *       are included. Events with a timestamp earlier than this time are not included.</p>
   */
  startTime?: number;

  /**
   * <p>The end of the time range, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>. Events with a timestamp equal to or later than this time are not
   *       included.</p>
   */
  endTime?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of log events returned. If you don't specify a limit, the default is
   *       as many log events as can fit in a response size of 1 MB (up to 10,000 log events).</p>
   */
  limit?: number;

  /**
   * <p>If the value is true, the earliest log events are returned first.
   *       If the value is false, the latest log events are returned first.
   *       The default value is false.</p>
   *          <p>If you are using a previous <code>nextForwardToken</code> value as the <code>nextToken</code> in this operation,
   *       you must specify <code>true</code> for <code>startFromHead</code>.</p>
   */
  startFromHead?: boolean;

  /**
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible.
   *       The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code>
   *       permission.</p>
   */
  unmask?: boolean;
}

/**
 * <p>Represents a log event.</p>
 */
export interface OutputLogEvent {
  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  timestamp?: number;

  /**
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after
   *         <code>Jan 1, 1970 00:00:00 UTC</code>.</p>
   */
  ingestionTime?: number;
}

export interface GetLogEventsResponse {
  /**
   * <p>The events.</p>
   */
  events?: OutputLogEvent[];

  /**
   * <p>The token for the next set of items in the forward direction. The token expires after
   *       24 hours. If you have reached the end of the stream, it returns the same token you passed
   *       in.</p>
   */
  nextForwardToken?: string;

  /**
   * <p>The token for the next set of items in the backward direction. The token expires after
   *       24 hours. This token is not null. If you have reached the end of the stream, it returns the
   *       same token you passed in.</p>
   */
  nextBackwardToken?: string;
}

export interface GetLogGroupFieldsRequest {
  /**
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
   * <p>The time to set as the center of the query. If you specify <code>time</code>, the 15
   *       minutes before this time are queries. If you omit <code>time</code>, the 8 minutes before and
   *       8 minutes after this time are searched.</p>
   *          <p>The <code>time</code> value is specified as epoch time, which is the number of seconds
   *       since <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  time?: number;

  /**
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
 * <p>The fields contained in log events found by a <code>GetLogGroupFields</code> operation,
 *       along with the percentage of queried log events in which each field appears.</p>
 */
export interface LogGroupField {
  /**
   * <p>The name of a log field.</p>
   */
  name?: string;

  /**
   * <p>The percentage of log events queried that contained the field.</p>
   */
  percent?: number;
}

export interface GetLogGroupFieldsResponse {
  /**
   * <p>The array of fields found in the query. Each object in the array contains the name of the
   *       field, along with the percentage of time it appeared in the log events that were
   *       queried.</p>
   */
  logGroupFields?: LogGroupField[];
}

export interface GetLogRecordRequest {
  /**
   * <p>The pointer corresponding to the log event record you want to retrieve. You get this from
   *       the response of a <code>GetQueryResults</code> operation. In that response, the value of the
   *         <code>@ptr</code> field for a log event is the value to use as <code>logRecordPointer</code>
   *       to retrieve that complete log event record.</p>
   */
  logRecordPointer: string | undefined;

  /**
   * <p>Specify <code>true</code> to display the log event fields with all sensitive data unmasked and visible.
   *       The default is <code>false</code>.</p>
   *          <p>To use this operation with this parameter, you must be signed into an account with the <code>logs:Unmask</code>
   *       permission.</p>
   */
  unmask?: boolean;
}

export interface GetLogRecordResponse {
  /**
   * <p>The requested log event, as a JSON string.</p>
   */
  logRecord?: Record<string, string>;
}

export interface GetQueryResultsRequest {
  /**
   * <p>The ID number of the query.</p>
   */
  queryId: string | undefined;
}

/**
 * <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p>
 *          <p>For more information about the fields that are
 *       generated by CloudWatch logs, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p>
 */
export interface ResultField {
  /**
   * <p>The log event field.</p>
   */
  field?: string;

  /**
   * <p>The value of this field.</p>
   */
  value?: string;
}

/**
 * <p>Contains the number of log events scanned by the query, the number of log events that matched the
 *       query criteria, and the total number of bytes in the log events that were scanned.</p>
 */
export interface QueryStatistics {
  /**
   * <p>The number of log events that matched the query string.</p>
   */
  recordsMatched?: number;

  /**
   * <p>The total number of log events scanned during the query.</p>
   */
  recordsScanned?: number;

  /**
   * <p>The total number of bytes in the log events scanned during the query.</p>
   */
  bytesScanned?: number;
}

export interface GetQueryResultsResponse {
  /**
   * <p>The log events that matched the query criteria during the most recent time it ran.</p>
   *          <p>The <code>results</code> value is an array of arrays. Each log event is one object in the
   *       top-level array. Each of these log event objects is an array of
   *         <code>field</code>/<code>value</code> pairs.</p>
   */
  results?: ResultField[][];

  /**
   * <p>Includes the number of log events scanned by the query, the number of log events that matched the
   *     query criteria, and the total number of bytes in the log events that were scanned. These values
   *     reflect the full raw results of the query.</p>
   */
  statistics?: QueryStatistics;

  /**
   * <p>The status of the most recent running of the query. Possible values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>,
   *       <code>Timeout</code>, and <code>Unknown</code>.</p>
   *          <p>Queries time out after 15 minutes of runtime. To avoid having your queries time out,
   *       reduce the time range being searched or partition your query into a number of queries.</p>
   */
  status?: QueryStatus | string;
}

/**
 * <p>Represents a log event, which is a record of activity that was recorded
 *       by the application or resource being monitored.</p>
 */
export interface InputLogEvent {
  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after <code>Jan 1,
   *         1970 00:00:00 UTC</code>.</p>
   */
  timestamp: number | undefined;

  /**
   * <p>The raw event message.</p>
   */
  message: string | undefined;
}

/**
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

export interface ListTagsForResourceRequest {
  /**
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

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags associated with the requested resource.></p>
   */
  tags?: Record<string, string>;
}

export interface ListTagsLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export interface ListTagsLogGroupResponse {
  /**
   * <p>The tags for the log group.</p>
   */
  tags?: Record<string, string>;
}

export interface PutDataProtectionPolicyRequest {
  /**
   * <p>Specify either the log group name or log group ARN.</p>
   */
  logGroupIdentifier: string | undefined;

  /**
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
   *           "MaskConfig": {}</code> object. The <code>
   *             "MaskConfig": {}</code> object must be empty.</p>
   *             </li>
   *          </ul>
   *          <p>For an example data protection policy, see the <b>Examples</b> section on this page.</p>
   *          <important>
   *             <p>The contents of two <code>DataIdentifer</code> arrays must match exactly.</p>
   *          </important>
   */
  policyDocument: string | undefined;
}

export interface PutDataProtectionPolicyResponse {
  /**
   * <p>The log group name or ARN that you specified in your request.</p>
   */
  logGroupIdentifier?: string;

  /**
   * <p>The data protection policy used for this log group.</p>
   */
  policyDocument?: string;

  /**
   * <p>The date and time that this policy was most recently updated.</p>
   */
  lastUpdatedTime?: number;
}

export interface PutDestinationRequest {
  /**
   * <p>A name for the destination.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>The ARN of an Amazon Kinesis stream to which to deliver matching log events.</p>
   */
  targetArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon
   *       Kinesis <code>PutRecord</code> operation on the destination stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>An optional list of key-value pairs to associate with the resource.</p>
   *          <p>For more information about tagging, see
   *       <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *          </p>
   */
  tags?: Record<string, string>;
}

export interface PutDestinationResponse {
  /**
   * <p>The destination.</p>
   */
  destination?: Destination;
}

export interface PutDestinationPolicyRequest {
  /**
   * <p>A name for an existing destination.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>An IAM policy document that authorizes cross-account users to deliver their log events
   *       to the associated destination. This can be up to 5120 bytes.</p>
   */
  accessPolicy: string | undefined;

  /**
   * <p>Specify true if you are updating an existing destination policy to grant permission to
   *     an organization ID instead of granting permission to individual AWS accounts. Before
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

export interface PutLogEventsRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;

  /**
   * <p>The log events.</p>
   */
  logEvents: InputLogEvent[] | undefined;

  /**
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
 * <p>Represents the rejected events.</p>
 */
export interface RejectedLogEventsInfo {
  /**
   * <p>The log events that are too new.</p>
   */
  tooNewLogEventStartIndex?: number;

  /**
   * <p>The log events that are dated too far in the past.</p>
   */
  tooOldLogEventEndIndex?: number;

  /**
   * <p>The expired log events.</p>
   */
  expiredLogEventEndIndex?: number;
}

export interface PutLogEventsResponse {
  /**
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
   * <p>The rejected events.</p>
   */
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
}

/**
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

export interface PutMetricFilterRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>A name for the metric filter.</p>
   */
  filterName: string | undefined;

  /**
   * <p>A filter pattern for extracting metric data out of ingested log events.</p>
   */
  filterPattern: string | undefined;

  /**
   * <p>A collection of information that defines how metric data gets emitted.</p>
   */
  metricTransformations: MetricTransformation[] | undefined;
}

export interface PutQueryDefinitionRequest {
  /**
   * <p>A name for the query definition. If you are saving numerous query definitions, we
   *       recommend that you name them. This way, you can find the ones you want by using the first part
   *       of the name as a filter in the <code>queryDefinitionNamePrefix</code> parameter of <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a>.</p>
   */
  name: string | undefined;

  /**
   * <p>If you are updating a query definition, use this parameter to specify the ID of the query
   *       definition that you want to update. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html">DescribeQueryDefinitions</a> to retrieve the IDs of your saved query
   *       definitions.</p>
   *          <p>If you are creating a query definition, do not specify this parameter. CloudWatch
   *       generates a unique ID for the new query definition and include it in the response to this
   *       operation.</p>
   */
  queryDefinitionId?: string;

  /**
   * <p>Use this parameter to include specific log groups as part of your query definition.</p>
   *          <p>If you are updating a query definition and you omit this parameter, then the updated
   *       definition will contain no log groups.</p>
   */
  logGroupNames?: string[];

  /**
   * <p>The query string to use for this definition.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString: string | undefined;
}

export interface PutQueryDefinitionResponse {
  /**
   * <p>The ID of the query definition.</p>
   */
  queryDefinitionId?: string;
}

export interface PutResourcePolicyRequest {
  /**
   * <p>Name of the new policy. This parameter is required.</p>
   */
  policyName?: string;

  /**
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
   *             <code>{
   *     "Version": "2012-10-17",
   *     "Statement": [
   *         {
   *            "Sid": "Route53LogsToCloudWatchLogs",
   *            "Effect": "Allow",
   *            "Principal": {
   *                "Service": [
   *                    "route53.amazonaws.com"
   *                 ]
   *             },
   *            "Action": "logs:PutLogEvents",
   *            "Resource": "logArn",
   *            "Condition": {
   *                "ArnLike": {
   *                    "aws:SourceArn": "myRoute53ResourceArn"
   *                 },
   *                "StringEquals": {
   *                    "aws:SourceAccount": "myAwsAccountId"
   *                }
   *             }
   *         }
   *       ]
   * }</code>
   *          </p>
   */
  policyDocument?: string;
}

export interface PutResourcePolicyResponse {
  /**
   * <p>The new policy.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

export interface PutRetentionPolicyRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The number of days to retain the log events in the specified log group.
   *       Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 2192, 2557, 2922, 3288, and 3653.</p>
   *          <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
   */
  retentionInDays: number | undefined;
}

export interface PutSubscriptionFilterRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>A name for the subscription filter. If you are updating an existing filter, you must
   *       specify the correct name in <code>filterName</code>. To find the name of the filter currently
   *       associated with a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html">DescribeSubscriptionFilters</a>.</p>
   */
  filterName: string | undefined;

  /**
   * <p>A filter pattern for subscribing to a filtered stream of log events.</p>
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
   *                <p>A Lambda function belonging to the same account as the subscription filter,
   *           for same-account delivery.</p>
   *             </li>
   *          </ul>
   */
  destinationArn: string | undefined;

  /**
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log
   *       events to the destination stream. You don't need to provide the ARN when you are working with
   *       a logical destination for cross-account delivery.</p>
   */
  roleArn?: string;

  /**
   * <p>The method used to distribute log data to the destination. By default, log data is
   *       grouped by log stream, but the grouping can be set to random for a more even distribution.
   *       This property is only applicable when the destination is an Amazon Kinesis data stream. </p>
   */
  distribution?: Distribution | string;
}

/**
 * <p>Reserved.</p>
 */
export interface QueryCompileErrorLocation {
  /**
   * <p>Reserved.</p>
   */
  startCharOffset?: number;

  /**
   * <p>Reserved.</p>
   */
  endCharOffset?: number;
}

/**
 * <p>Reserved.</p>
 */
export interface QueryCompileError {
  /**
   * <p>Reserved.</p>
   */
  location?: QueryCompileErrorLocation;

  /**
   * <p>Reserved.</p>
   */
  message?: string;
}

/**
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

export interface StartQueryRequest {
  /**
   * <p>The log group on which to perform the query.</p>
   *          <note>
   *             <p>A <code>StartQuery</code> operation must include exactly one
   *           of the following parameters:
   *           <code>logGroupName</code>, <code>logGroupNames</code> or <code>logGroupIdentifiers</code>.
   *         </p>
   *          </note>
   */
  logGroupName?: string;

  /**
   * <p>The list of log groups to be queried. You can include up to 50 log groups.</p>
   *          <note>
   *             <p>A <code>StartQuery</code> operation must include exactly one
   *         of the following parameters:
   *         <code>logGroupName</code>, <code>logGroupNames</code> or <code>logGroupIdentifiers</code>.
   *       </p>
   *          </note>
   */
  logGroupNames?: string[];

  /**
   * <p>The list of log groups to query. You can include up to 50 log groups.</p>
   *          <p>You can specify them by the log group name or ARN. If a log group that you're querying is
   *       in a source account and you're using a monitoring account, you must specify the ARN of the log
   *       group here. The query definition must also be defined in the monitoring account.</p>
   *          <p>If you specify an ARN, the ARN can't end with an asterisk (*).</p>
   *          <p>A <code>StartQuery</code> operation must include exactly one
   *       of the following parameters:
   *       <code>logGroupName</code>, <code>logGroupNames</code> or <code>logGroupIdentifiers</code>.
   *     </p>
   */
  logGroupIdentifiers?: string[];

  /**
   * <p>The beginning of the time range to query. The range is inclusive, so the specified start
   *       time is included in the query. Specified as epoch time, the number of seconds since
   *         <code>January 1, 1970, 00:00:00 UTC</code>.</p>
   */
  startTime: number | undefined;

  /**
   * <p>The end of the time range to query. The range is inclusive, so the specified end time is
   *       included in the query. Specified as epoch time, the number of seconds since <code>January 1,
   *         1970, 00:00:00 UTC</code>.</p>
   */
  endTime: number | undefined;

  /**
   * <p>The query string to use.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The maximum number of log events to return in the query. If the query string uses the <code>fields</code> command,
   *     only the specified fields and their values are returned. The default is 1000.</p>
   */
  limit?: number;
}

export interface StartQueryResponse {
  /**
   * <p>The unique ID of the query. </p>
   */
  queryId?: string;
}

export interface StopQueryRequest {
  /**
   * <p>The ID number of the query to stop. To find this ID number, use
   *         <code>DescribeQueries</code>.</p>
   */
  queryId: string | undefined;
}

export interface StopQueryResponse {
  /**
   * <p>This is true if the query was stopped by the <code>StopQuery</code> operation.</p>
   */
  success?: boolean;
}

export interface TagLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The key-value pairs to use for the tags.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceRequest {
  /**
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
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>A resource can have no more than 50 tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
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

export interface TestMetricFilterRequest {
  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern: string | undefined;

  /**
   * <p>The log event messages to test.</p>
   */
  logEventMessages: string[] | undefined;
}

/**
 * <p>Represents a matched event.</p>
 */
export interface MetricFilterMatchRecord {
  /**
   * <p>The event number.</p>
   */
  eventNumber?: number;

  /**
   * <p>The raw event data.</p>
   */
  eventMessage?: string;

  /**
   * <p>The values extracted from the event data by the filter.</p>
   */
  extractedValues?: Record<string, string>;
}

export interface TestMetricFilterResponse {
  /**
   * <p>The matched events.</p>
   */
  matches?: MetricFilterMatchRecord[];
}

export interface UntagLogGroupRequest {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The tag keys. The corresponding tags are removed from the log group.</p>
   */
  tags: string[] | undefined;
}

export interface UntagResourceRequest {
  /**
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
   * <p>The list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const AssociateKmsKeyRequestFilterSensitiveLog = (obj: AssociateKmsKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelExportTaskRequestFilterSensitiveLog = (obj: CancelExportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExportTaskRequestFilterSensitiveLog = (obj: CreateExportTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExportTaskResponseFilterSensitiveLog = (obj: CreateExportTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLogGroupRequestFilterSensitiveLog = (obj: CreateLogGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLogStreamRequestFilterSensitiveLog = (obj: CreateLogStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataProtectionPolicyRequestFilterSensitiveLog = (obj: DeleteDataProtectionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDestinationRequestFilterSensitiveLog = (obj: DeleteDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLogGroupRequestFilterSensitiveLog = (obj: DeleteLogGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLogStreamRequestFilterSensitiveLog = (obj: DeleteLogStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMetricFilterRequestFilterSensitiveLog = (obj: DeleteMetricFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueryDefinitionRequestFilterSensitiveLog = (obj: DeleteQueryDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueryDefinitionResponseFilterSensitiveLog = (obj: DeleteQueryDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRetentionPolicyRequestFilterSensitiveLog = (obj: DeleteRetentionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionFilterRequestFilterSensitiveLog = (obj: DeleteSubscriptionFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDestinationsRequestFilterSensitiveLog = (obj: DescribeDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFilterSensitiveLog = (obj: Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDestinationsResponseFilterSensitiveLog = (obj: DescribeDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportTasksRequestFilterSensitiveLog = (obj: DescribeExportTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTaskExecutionInfoFilterSensitiveLog = (obj: ExportTaskExecutionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTaskStatusFilterSensitiveLog = (obj: ExportTaskStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportTaskFilterSensitiveLog = (obj: ExportTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportTasksResponseFilterSensitiveLog = (obj: DescribeExportTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLogGroupsRequestFilterSensitiveLog = (obj: DescribeLogGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogGroupFilterSensitiveLog = (obj: LogGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLogGroupsResponseFilterSensitiveLog = (obj: DescribeLogGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLogStreamsRequestFilterSensitiveLog = (obj: DescribeLogStreamsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogStreamFilterSensitiveLog = (obj: LogStream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLogStreamsResponseFilterSensitiveLog = (obj: DescribeLogStreamsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMetricFiltersRequestFilterSensitiveLog = (obj: DescribeMetricFiltersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricTransformationFilterSensitiveLog = (obj: MetricTransformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricFilterFilterSensitiveLog = (obj: MetricFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMetricFiltersResponseFilterSensitiveLog = (obj: DescribeMetricFiltersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQueriesRequestFilterSensitiveLog = (obj: DescribeQueriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryInfoFilterSensitiveLog = (obj: QueryInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQueriesResponseFilterSensitiveLog = (obj: DescribeQueriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQueryDefinitionsRequestFilterSensitiveLog = (obj: DescribeQueryDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryDefinitionFilterSensitiveLog = (obj: QueryDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQueryDefinitionsResponseFilterSensitiveLog = (obj: DescribeQueryDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePoliciesRequestFilterSensitiveLog = (obj: DescribeResourcePoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourcePolicyFilterSensitiveLog = (obj: ResourcePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePoliciesResponseFilterSensitiveLog = (obj: DescribeResourcePoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscriptionFiltersRequestFilterSensitiveLog = (obj: DescribeSubscriptionFiltersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionFilterFilterSensitiveLog = (obj: SubscriptionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscriptionFiltersResponseFilterSensitiveLog = (
  obj: DescribeSubscriptionFiltersResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateKmsKeyRequestFilterSensitiveLog = (obj: DisassociateKmsKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilteredLogEventFilterSensitiveLog = (obj: FilteredLogEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterLogEventsRequestFilterSensitiveLog = (obj: FilterLogEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchedLogStreamFilterSensitiveLog = (obj: SearchedLogStream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterLogEventsResponseFilterSensitiveLog = (obj: FilterLogEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataProtectionPolicyRequestFilterSensitiveLog = (obj: GetDataProtectionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataProtectionPolicyResponseFilterSensitiveLog = (obj: GetDataProtectionPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogEventsRequestFilterSensitiveLog = (obj: GetLogEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputLogEventFilterSensitiveLog = (obj: OutputLogEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogEventsResponseFilterSensitiveLog = (obj: GetLogEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogGroupFieldsRequestFilterSensitiveLog = (obj: GetLogGroupFieldsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogGroupFieldFilterSensitiveLog = (obj: LogGroupField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogGroupFieldsResponseFilterSensitiveLog = (obj: GetLogGroupFieldsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogRecordRequestFilterSensitiveLog = (obj: GetLogRecordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLogRecordResponseFilterSensitiveLog = (obj: GetLogRecordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryResultsRequestFilterSensitiveLog = (obj: GetQueryResultsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultFieldFilterSensitiveLog = (obj: ResultField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStatisticsFilterSensitiveLog = (obj: QueryStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryResultsResponseFilterSensitiveLog = (obj: GetQueryResultsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputLogEventFilterSensitiveLog = (obj: InputLogEvent): any => ({
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
export const ListTagsLogGroupRequestFilterSensitiveLog = (obj: ListTagsLogGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsLogGroupResponseFilterSensitiveLog = (obj: ListTagsLogGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDataProtectionPolicyRequestFilterSensitiveLog = (obj: PutDataProtectionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDataProtectionPolicyResponseFilterSensitiveLog = (obj: PutDataProtectionPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDestinationRequestFilterSensitiveLog = (obj: PutDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDestinationResponseFilterSensitiveLog = (obj: PutDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDestinationPolicyRequestFilterSensitiveLog = (obj: PutDestinationPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLogEventsRequestFilterSensitiveLog = (obj: PutLogEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectedLogEventsInfoFilterSensitiveLog = (obj: RejectedLogEventsInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLogEventsResponseFilterSensitiveLog = (obj: PutLogEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMetricFilterRequestFilterSensitiveLog = (obj: PutMetricFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutQueryDefinitionRequestFilterSensitiveLog = (obj: PutQueryDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutQueryDefinitionResponseFilterSensitiveLog = (obj: PutQueryDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResponseFilterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRetentionPolicyRequestFilterSensitiveLog = (obj: PutRetentionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSubscriptionFilterRequestFilterSensitiveLog = (obj: PutSubscriptionFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryCompileErrorLocationFilterSensitiveLog = (obj: QueryCompileErrorLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryCompileErrorFilterSensitiveLog = (obj: QueryCompileError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartQueryRequestFilterSensitiveLog = (obj: StartQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartQueryResponseFilterSensitiveLog = (obj: StartQueryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopQueryRequestFilterSensitiveLog = (obj: StopQueryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopQueryResponseFilterSensitiveLog = (obj: StopQueryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagLogGroupRequestFilterSensitiveLog = (obj: TagLogGroupRequest): any => ({
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
export const TestMetricFilterRequestFilterSensitiveLog = (obj: TestMetricFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricFilterMatchRecordFilterSensitiveLog = (obj: MetricFilterMatchRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestMetricFilterResponseFilterSensitiveLog = (obj: TestMetricFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagLogGroupRequestFilterSensitiveLog = (obj: UntagLogGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});
