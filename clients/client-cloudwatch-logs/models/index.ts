import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateKmsKeyRequest {
  __type?: "AssociateKmsKeyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. This must be a symmetric CMK.
   *       For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names - AWS Key Management Service (AWS KMS)</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p>
   */
  kmsKeyId: string | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace AssociateKmsKeyRequest {
  export function isa(o: any): o is AssociateKmsKeyRequest {
    return __isa(o, "AssociateKmsKeyRequest");
  }
}

export interface CancelExportTaskRequest {
  __type?: "CancelExportTaskRequest";
  /**
   * <p>The ID of the export task.</p>
   */
  taskId: string | undefined;
}

export namespace CancelExportTaskRequest {
  export function isa(o: any): o is CancelExportTaskRequest {
    return __isa(o, "CancelExportTaskRequest");
  }
}

export interface CreateExportTaskRequest {
  __type?: "CreateExportTaskRequest";
  /**
   * <p>The name of S3 bucket for the exported log data. The bucket must be in the same AWS region.</p>
   */
  destination: string | undefined;

  /**
   * <p>The prefix used as the start of the key for every object exported. If you don't
   *       specify a value, the default is <code>exportedlogs</code>.</p>
   */
  destinationPrefix?: string;

  /**
   * <p>The start time of the range for the request, expressed as the number of milliseconds
   *       after Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not
   *       exported.</p>
   */
  from: number | undefined;

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
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * <p>The end time of the range for the request, expressed as the number of milliseconds
   *       after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not
   *       exported.</p>
   */
  to: number | undefined;
}

export namespace CreateExportTaskRequest {
  export function isa(o: any): o is CreateExportTaskRequest {
    return __isa(o, "CreateExportTaskRequest");
  }
}

export interface CreateExportTaskResponse {
  __type?: "CreateExportTaskResponse";
  /**
   * <p>The ID of the export task.</p>
   */
  taskId?: string;
}

export namespace CreateExportTaskResponse {
  export function isa(o: any): o is CreateExportTaskResponse {
    return __isa(o, "CreateExportTaskResponse");
  }
}

export interface CreateLogGroupRequest {
  __type?: "CreateLogGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
   *       For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Amazon Resource Names - AWS Key Management Service (AWS KMS)</a>.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The key-value pairs to use for the tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateLogGroupRequest {
  export function isa(o: any): o is CreateLogGroupRequest {
    return __isa(o, "CreateLogGroupRequest");
  }
}

export interface CreateLogStreamRequest {
  __type?: "CreateLogStreamRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;
}

export namespace CreateLogStreamRequest {
  export function isa(o: any): o is CreateLogStreamRequest {
    return __isa(o, "CreateLogStreamRequest");
  }
}

/**
 * <p>The event was already logged.</p>
 */
export interface DataAlreadyAcceptedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DataAlreadyAcceptedException";
  $fault: "client";
  expectedSequenceToken?: string;
  message?: string;
}

export namespace DataAlreadyAcceptedException {
  export function isa(o: any): o is DataAlreadyAcceptedException {
    return __isa(o, "DataAlreadyAcceptedException");
  }
}

export interface DeleteDestinationRequest {
  __type?: "DeleteDestinationRequest";
  /**
   * <p>The name of the destination.</p>
   */
  destinationName: string | undefined;
}

export namespace DeleteDestinationRequest {
  export function isa(o: any): o is DeleteDestinationRequest {
    return __isa(o, "DeleteDestinationRequest");
  }
}

export interface DeleteLogGroupRequest {
  __type?: "DeleteLogGroupRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace DeleteLogGroupRequest {
  export function isa(o: any): o is DeleteLogGroupRequest {
    return __isa(o, "DeleteLogGroupRequest");
  }
}

export interface DeleteLogStreamRequest {
  __type?: "DeleteLogStreamRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;
}

export namespace DeleteLogStreamRequest {
  export function isa(o: any): o is DeleteLogStreamRequest {
    return __isa(o, "DeleteLogStreamRequest");
  }
}

export interface DeleteMetricFilterRequest {
  __type?: "DeleteMetricFilterRequest";
  /**
   * <p>The name of the metric filter.</p>
   */
  filterName: string | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace DeleteMetricFilterRequest {
  export function isa(o: any): o is DeleteMetricFilterRequest {
    return __isa(o, "DeleteMetricFilterRequest");
  }
}

export interface DeleteResourcePolicyRequest {
  __type?: "DeleteResourcePolicyRequest";
  /**
   * <p>The name of the policy to be revoked. This parameter is required.</p>
   */
  policyName?: string;
}

export namespace DeleteResourcePolicyRequest {
  export function isa(o: any): o is DeleteResourcePolicyRequest {
    return __isa(o, "DeleteResourcePolicyRequest");
  }
}

export interface DeleteRetentionPolicyRequest {
  __type?: "DeleteRetentionPolicyRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace DeleteRetentionPolicyRequest {
  export function isa(o: any): o is DeleteRetentionPolicyRequest {
    return __isa(o, "DeleteRetentionPolicyRequest");
  }
}

export interface DeleteSubscriptionFilterRequest {
  __type?: "DeleteSubscriptionFilterRequest";
  /**
   * <p>The name of the subscription filter.</p>
   */
  filterName: string | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace DeleteSubscriptionFilterRequest {
  export function isa(o: any): o is DeleteSubscriptionFilterRequest {
    return __isa(o, "DeleteSubscriptionFilterRequest");
  }
}

export interface DescribeDestinationsRequest {
  __type?: "DescribeDestinationsRequest";
  /**
   * <p>The prefix to match. If you don't specify a value, no prefix filter is applied.</p>
   */
  DestinationNamePrefix?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;
}

export namespace DescribeDestinationsRequest {
  export function isa(o: any): o is DescribeDestinationsRequest {
    return __isa(o, "DescribeDestinationsRequest");
  }
}

export interface DescribeDestinationsResponse {
  __type?: "DescribeDestinationsResponse";
  /**
   * <p>The destinations.</p>
   */
  destinations?: Array<Destination>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export namespace DescribeDestinationsResponse {
  export function isa(o: any): o is DescribeDestinationsResponse {
    return __isa(o, "DescribeDestinationsResponse");
  }
}

export interface DescribeExportTasksRequest {
  __type?: "DescribeExportTasksRequest";
  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The status code of the export task. Specifying a status code filters the results to zero or more export tasks.</p>
   */
  statusCode?: ExportTaskStatusCode | string;

  /**
   * <p>The ID of the export task. Specifying a task ID filters the results to zero or one export tasks.</p>
   */
  taskId?: string;
}

export namespace DescribeExportTasksRequest {
  export function isa(o: any): o is DescribeExportTasksRequest {
    return __isa(o, "DescribeExportTasksRequest");
  }
}

export interface DescribeExportTasksResponse {
  __type?: "DescribeExportTasksResponse";
  /**
   * <p>The export tasks.</p>
   */
  exportTasks?: Array<ExportTask>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export namespace DescribeExportTasksResponse {
  export function isa(o: any): o is DescribeExportTasksResponse {
    return __isa(o, "DescribeExportTasksResponse");
  }
}

export interface DescribeLogGroupsRequest {
  __type?: "DescribeLogGroupsRequest";
  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>The prefix to match.</p>
   */
  logGroupNamePrefix?: string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;
}

export namespace DescribeLogGroupsRequest {
  export function isa(o: any): o is DescribeLogGroupsRequest {
    return __isa(o, "DescribeLogGroupsRequest");
  }
}

export interface DescribeLogGroupsResponse {
  __type?: "DescribeLogGroupsResponse";
  /**
   * <p>The log groups.</p>
   */
  logGroups?: Array<LogGroup>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export namespace DescribeLogGroupsResponse {
  export function isa(o: any): o is DescribeLogGroupsResponse {
    return __isa(o, "DescribeLogGroupsResponse");
  }
}

export interface DescribeLogStreamsRequest {
  __type?: "DescribeLogStreamsRequest";
  /**
   * <p>If the value is true, results are returned in descending order.
   *       If the value is to false, results are returned in ascending order.
   *       The default value is false.</p>
   */
  descending?: boolean;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The prefix to match.</p>
   *          <p>If <code>orderBy</code> is <code>LastEventTime</code>,you cannot specify this
   *       parameter.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>If the value is <code>LogStreamName</code>, the results are ordered by log stream name.
   *       If the value is <code>LastEventTime</code>, the results are ordered by the event time.
   *       The default value is <code>LogStreamName</code>.</p>
   *          <p>If you order the results by event time, you cannot specify the <code>logStreamNamePrefix</code> parameter.</p>
   *          <p>lastEventTimestamp represents the time of the most recent log event in the log stream
   *       in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC. lastEventTimeStamp updates on an eventual consistency basis. It typically
   *       updates in less than an hour from ingestion, but may take longer in some rare
   *       situations.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace DescribeLogStreamsRequest {
  export function isa(o: any): o is DescribeLogStreamsRequest {
    return __isa(o, "DescribeLogStreamsRequest");
  }
}

export interface DescribeLogStreamsResponse {
  __type?: "DescribeLogStreamsResponse";
  /**
   * <p>The log streams.</p>
   */
  logStreams?: Array<LogStream>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export namespace DescribeLogStreamsResponse {
  export function isa(o: any): o is DescribeLogStreamsResponse {
    return __isa(o, "DescribeLogStreamsResponse");
  }
}

export interface DescribeMetricFiltersRequest {
  __type?: "DescribeMetricFiltersRequest";
  /**
   * <p>The prefix to match.</p>
   */
  filterNamePrefix?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

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

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;
}

export namespace DescribeMetricFiltersRequest {
  export function isa(o: any): o is DescribeMetricFiltersRequest {
    return __isa(o, "DescribeMetricFiltersRequest");
  }
}

export interface DescribeMetricFiltersResponse {
  __type?: "DescribeMetricFiltersResponse";
  /**
   * <p>The metric filters.</p>
   */
  metricFilters?: Array<MetricFilter>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export namespace DescribeMetricFiltersResponse {
  export function isa(o: any): o is DescribeMetricFiltersResponse {
    return __isa(o, "DescribeMetricFiltersResponse");
  }
}

export interface DescribeQueriesRequest {
  __type?: "DescribeQueriesRequest";
  /**
   * <p>Limits the returned queries to only those for the specified log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>Limits the number of returned queries to the specified number.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * <p>Limits the returned queries to only those that have the specified status. Valid values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, and <code>Scheduled</code>.</p>
   */
  status?: QueryStatus | string;
}

export namespace DescribeQueriesRequest {
  export function isa(o: any): o is DescribeQueriesRequest {
    return __isa(o, "DescribeQueriesRequest");
  }
}

export interface DescribeQueriesResponse {
  __type?: "DescribeQueriesResponse";
  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of queries that match the request.</p>
   */
  queries?: Array<QueryInfo>;
}

export namespace DescribeQueriesResponse {
  export function isa(o: any): o is DescribeQueriesResponse {
    return __isa(o, "DescribeQueriesResponse");
  }
}

export interface DescribeResourcePoliciesRequest {
  __type?: "DescribeResourcePoliciesRequest";
  /**
   * <p>The maximum number of resource policies to be displayed with one call of this API.</p>
   */
  limit?: number;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;
}

export namespace DescribeResourcePoliciesRequest {
  export function isa(o: any): o is DescribeResourcePoliciesRequest {
    return __isa(o, "DescribeResourcePoliciesRequest");
  }
}

export interface DescribeResourcePoliciesResponse {
  __type?: "DescribeResourcePoliciesResponse";
  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * <p>The resource policies that exist in this account.</p>
   */
  resourcePolicies?: Array<ResourcePolicy>;
}

export namespace DescribeResourcePoliciesResponse {
  export function isa(o: any): o is DescribeResourcePoliciesResponse {
    return __isa(o, "DescribeResourcePoliciesResponse");
  }
}

export interface DescribeSubscriptionFiltersRequest {
  __type?: "DescribeSubscriptionFiltersRequest";
  /**
   * <p>The prefix to match. If you don't specify a value, no prefix filter is applied.</p>
   */
  filterNamePrefix?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;
}

export namespace DescribeSubscriptionFiltersRequest {
  export function isa(o: any): o is DescribeSubscriptionFiltersRequest {
    return __isa(o, "DescribeSubscriptionFiltersRequest");
  }
}

export interface DescribeSubscriptionFiltersResponse {
  __type?: "DescribeSubscriptionFiltersResponse";
  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * <p>The subscription filters.</p>
   */
  subscriptionFilters?: Array<SubscriptionFilter>;
}

export namespace DescribeSubscriptionFiltersResponse {
  export function isa(o: any): o is DescribeSubscriptionFiltersResponse {
    return __isa(o, "DescribeSubscriptionFiltersResponse");
  }
}

/**
 * <p>Represents a cross-account destination that receives subscription log events.</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>An IAM policy document that governs which AWS accounts can create subscription filters
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

  /**
   * <p>The name of the destination.</p>
   */
  destinationName?: string;

  /**
   * <p>A role for impersonation, used when delivering log events to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the physical target to where the log events are
   *       delivered (for example, a Kinesis stream).</p>
   */
  targetArn?: string;
}

export namespace Destination {
  export function isa(o: any): o is Destination {
    return __isa(o, "Destination");
  }
}

export interface DisassociateKmsKeyRequest {
  __type?: "DisassociateKmsKeyRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace DisassociateKmsKeyRequest {
  export function isa(o: any): o is DisassociateKmsKeyRequest {
    return __isa(o, "DisassociateKmsKeyRequest");
  }
}

export enum Distribution {
  ByLogStream = "ByLogStream",
  Random = "Random"
}

/**
 * <p>Represents an export task.</p>
 */
export interface ExportTask {
  __type?: "ExportTask";
  /**
   * <p>The name of Amazon S3 bucket to which the log data was exported.</p>
   */
  destination?: string;

  /**
   * <p>The prefix that was used as the start of Amazon S3 key for every object exported.</p>
   */
  destinationPrefix?: string;

  /**
   * <p>Execution info about the export task.</p>
   */
  executionInfo?: ExportTaskExecutionInfo;

  /**
   * <p>The start time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *       Events with a timestamp before this time are not exported.</p>
   */
  from?: number;

  /**
   * <p>The name of the log group from which logs data was exported.</p>
   */
  logGroupName?: string;

  /**
   * <p>The status of the export task.</p>
   */
  status?: ExportTaskStatus;

  /**
   * <p>The ID of the export task.</p>
   */
  taskId?: string;

  /**
   * <p>The name of the export task.</p>
   */
  taskName?: string;

  /**
   * <p>The end time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *       Events with a timestamp later than this time are not exported.</p>
   */
  to?: number;
}

export namespace ExportTask {
  export function isa(o: any): o is ExportTask {
    return __isa(o, "ExportTask");
  }
}

/**
 * <p>Represents the status of an export task.</p>
 */
export interface ExportTaskExecutionInfo {
  __type?: "ExportTaskExecutionInfo";
  /**
   * <p>The completion time of the export task, expressed as the number of milliseconds after
   *       Jan 1, 1970 00:00:00 UTC.</p>
   */
  completionTime?: number;

  /**
   * <p>The creation time of the export task, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;
}

export namespace ExportTaskExecutionInfo {
  export function isa(o: any): o is ExportTaskExecutionInfo {
    return __isa(o, "ExportTaskExecutionInfo");
  }
}

/**
 * <p>Represents the status of an export task.</p>
 */
export interface ExportTaskStatus {
  __type?: "ExportTaskStatus";
  /**
   * <p>The status code of the export task.</p>
   */
  code?: ExportTaskStatusCode | string;

  /**
   * <p>The status message related to the status code.</p>
   */
  message?: string;
}

export namespace ExportTaskStatus {
  export function isa(o: any): o is ExportTaskStatus {
    return __isa(o, "ExportTaskStatus");
  }
}

export enum ExportTaskStatusCode {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PENDING_CANCEL = "PENDING_CANCEL",
  RUNNING = "RUNNING"
}

export interface FilterLogEventsRequest {
  __type?: "FilterLogEventsRequest";
  /**
   * <p>The end of the time range, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC. Events with a timestamp later than this time are not returned.</p>
   */
  endTime?: number;

  /**
   * <p>The filter pattern to use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html">Filter and Pattern Syntax</a>.</p>
   *          <p>If not provided, all the events are matched.</p>
   */
  filterPattern?: string;

  /**
   * <p>If the value is true, the operation makes a best effort to provide responses that
   *       contain events from multiple log streams within the log group, interleaved in a single
   *       response. If the value is false, all the matched log events in the first log stream are
   *       searched first, then those in the next log stream, and so on. The default is false.</p>
   *          <p>
   *             <b>IMPORTANT:</b> Starting on June 17, 2019, this parameter will be ignored and the value will be assumed to be
   *     true. The response from this operation will always interleave events from multiple log streams within
   *     a log group.</p>
   */
  interleaved?: boolean;

  /**
   * <p>The maximum number of events to return. The default is 10,000 events.</p>
   */
  limit?: number;

  /**
   * <p>The name of the log group to search.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>Filters the results to include only events from log streams that have names starting with this prefix.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, but the value for
   *       <code>logStreamNamePrefix</code> does not match any log stream names specified in <code>logStreamNames</code>, the action
   *     returns an <code>InvalidParameterException</code> error.</p>
   */
  logStreamNamePrefix?: string;

  /**
   * <p>Filters the results to only logs from the log streams in this list.</p>
   *          <p>If you specify a value for both <code>logStreamNamePrefix</code> and <code>logStreamNames</code>, the action
   *       returns an <code>InvalidParameterException</code> error.</p>
   */
  logStreamNames?: Array<string>;

  /**
   * <p>The token for the next set of events to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC. Events with a timestamp before this time are not returned.</p>
   */
  startTime?: number;
}

export namespace FilterLogEventsRequest {
  export function isa(o: any): o is FilterLogEventsRequest {
    return __isa(o, "FilterLogEventsRequest");
  }
}

export interface FilterLogEventsResponse {
  __type?: "FilterLogEventsResponse";
  /**
   * <p>The matched events.</p>
   */
  events?: Array<FilteredLogEvent>;

  /**
   * <p>The token to use when requesting the next set of items. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * <p>Indicates which log streams have been searched and whether each has been searched completely.</p>
   */
  searchedLogStreams?: Array<SearchedLogStream>;
}

export namespace FilterLogEventsResponse {
  export function isa(o: any): o is FilterLogEventsResponse {
    return __isa(o, "FilterLogEventsResponse");
  }
}

/**
 * <p>Represents a matched event.</p>
 */
export interface FilteredLogEvent {
  __type?: "FilteredLogEvent";
  /**
   * <p>The ID of the event.</p>
   */
  eventId?: string;

  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after Jan 1,
   *       1970 00:00:00 UTC.</p>
   */
  ingestionTime?: number;

  /**
   * <p>The name of the log stream to which this event belongs.</p>
   */
  logStreamName?: string;

  /**
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC.</p>
   */
  timestamp?: number;
}

export namespace FilteredLogEvent {
  export function isa(o: any): o is FilteredLogEvent {
    return __isa(o, "FilteredLogEvent");
  }
}

export interface GetLogEventsRequest {
  __type?: "GetLogEventsRequest";
  /**
   * <p>The end of the time range, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC. Events with a timestamp equal to or later than this time are not
   *       included.</p>
   */
  endTime?: number;

  /**
   * <p>The maximum number of log events returned. If you don't specify a value, the maximum is
   *       as many log events as can fit in a response size of 1 MB, up to 10,000 log events.</p>
   */
  limit?: number;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   *          <p>Using this token works only when you specify <code>true</code> for <code>startFromHead</code>.</p>
   */
  nextToken?: string;

  /**
   * <p>If the value is true, the earliest log events are returned first.
   *       If the value is false, the latest log events are returned first.
   *       The default value is false.</p>
   *          <p>If you are using <code>nextToken</code> in this operation, you must specify <code>true</code> for <code>startFromHead</code>.</p>
   */
  startFromHead?: boolean;

  /**
   * <p>The start of the time range, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC. Events with a timestamp equal to this time or later than this time are included.
   *       Events with a timestamp earlier than this time are not included.</p>
   */
  startTime?: number;
}

export namespace GetLogEventsRequest {
  export function isa(o: any): o is GetLogEventsRequest {
    return __isa(o, "GetLogEventsRequest");
  }
}

export interface GetLogEventsResponse {
  __type?: "GetLogEventsResponse";
  /**
   * <p>The events.</p>
   */
  events?: Array<OutputLogEvent>;

  /**
   * <p>The token for the next set of items in the backward direction. The token expires after 24 hours. This token will never be null. If you
   *     have reached the end of the stream, it will return the same token you passed in.</p>
   */
  nextBackwardToken?: string;

  /**
   * <p>The token for the next set of items in the forward direction. The token expires after 24 hours. If you
   *       have reached the end of the stream, it will return the same token you passed in.</p>
   */
  nextForwardToken?: string;
}

export namespace GetLogEventsResponse {
  export function isa(o: any): o is GetLogEventsResponse {
    return __isa(o, "GetLogEventsResponse");
  }
}

export interface GetLogGroupFieldsRequest {
  __type?: "GetLogGroupFieldsRequest";
  /**
   * <p>The name of the log group to search.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The time to set as the center of the query. If you specify <code>time</code>, the 8
   *       minutes before and 8 minutes after this time are searched. If you omit <code>time</code>, the
   *       past 15 minutes are queried.</p>
   *          <p>The <code>time</code> value is specified as epoch time, the number of seconds since
   *       January 1, 1970, 00:00:00 UTC.</p>
   */
  time?: number;
}

export namespace GetLogGroupFieldsRequest {
  export function isa(o: any): o is GetLogGroupFieldsRequest {
    return __isa(o, "GetLogGroupFieldsRequest");
  }
}

export interface GetLogGroupFieldsResponse {
  __type?: "GetLogGroupFieldsResponse";
  /**
   * <p>The array of fields found in the query. Each object in the array contains the name of the field, along with the
   *     percentage of time it appeared in the log events that were queried.</p>
   */
  logGroupFields?: Array<LogGroupField>;
}

export namespace GetLogGroupFieldsResponse {
  export function isa(o: any): o is GetLogGroupFieldsResponse {
    return __isa(o, "GetLogGroupFieldsResponse");
  }
}

export interface GetLogRecordRequest {
  __type?: "GetLogRecordRequest";
  /**
   * <p>The pointer corresponding to the log event record you want to retrieve. You get this from
   *       the response of a <code>GetQueryResults</code> operation. In that response, the value of the
   *         <code>@ptr</code> field for a log event is the value to use as <code>logRecordPointer</code>
   *       to retrieve that complete log event record.</p>
   */
  logRecordPointer: string | undefined;
}

export namespace GetLogRecordRequest {
  export function isa(o: any): o is GetLogRecordRequest {
    return __isa(o, "GetLogRecordRequest");
  }
}

export interface GetLogRecordResponse {
  __type?: "GetLogRecordResponse";
  /**
   * <p>The requested log event, as a JSON string.</p>
   */
  logRecord?: { [key: string]: string };
}

export namespace GetLogRecordResponse {
  export function isa(o: any): o is GetLogRecordResponse {
    return __isa(o, "GetLogRecordResponse");
  }
}

export interface GetQueryResultsRequest {
  __type?: "GetQueryResultsRequest";
  /**
   * <p>The ID number of the query.</p>
   */
  queryId: string | undefined;
}

export namespace GetQueryResultsRequest {
  export function isa(o: any): o is GetQueryResultsRequest {
    return __isa(o, "GetQueryResultsRequest");
  }
}

export interface GetQueryResultsResponse {
  __type?: "GetQueryResultsResponse";
  /**
   * <p>The log events that matched the query criteria during the most recent time it ran.</p>
   *          <p>The <code>results</code> value is an array of arrays. Each log event is one object in the
   *       top-level array. Each of these log event objects is an array of
   *         <code>field</code>/<code>value</code> pairs.</p>
   */
  results?: Array<Array<ResultField>>;

  /**
   * <p>Includes the number of log events scanned by the query, the number of log events that matched the
   *     query criteria, and the total number of bytes in the log events that were scanned.</p>
   */
  statistics?: QueryStatistics;

  /**
   * <p>The status of the most recent running of the query. Possible values are <code>Cancelled</code>,
   *       <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>,
   *       <code>Timeout</code>, and <code>Unknown</code>.</p>
   *          <p>Queries time out after 15 minutes of execution. To avoid having your
   *       queries time out, reduce the time range being searched, or partition your
   *       query into a number of queries.</p>
   */
  status?: QueryStatus | string;
}

export namespace GetQueryResultsResponse {
  export function isa(o: any): o is GetQueryResultsResponse {
    return __isa(o, "GetQueryResultsResponse");
  }
}

/**
 * <p>Represents a log event, which is a record of activity that was recorded
 *       by the application or resource being monitored.</p>
 */
export interface InputLogEvent {
  __type?: "InputLogEvent";
  /**
   * <p>The raw event message.</p>
   */
  message: string | undefined;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC.</p>
   */
  timestamp: number | undefined;
}

export namespace InputLogEvent {
  export function isa(o: any): o is InputLogEvent {
    return __isa(o, "InputLogEvent");
  }
}

/**
 * <p>The operation is not valid on the specified resource.</p>
 */
export interface InvalidOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidOperationException {
  export function isa(o: any): o is InvalidOperationException {
    return __isa(o, "InvalidOperationException");
  }
}

/**
 * <p>A parameter is specified incorrectly.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The sequence token is not valid. You can get the correct sequence token in
 *       the <code>expectedSequenceToken</code> field in the <code>InvalidSequenceTokenException</code>
 *     message. </p>
 */
export interface InvalidSequenceTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSequenceTokenException";
  $fault: "client";
  expectedSequenceToken?: string;
  message?: string;
}

export namespace InvalidSequenceTokenException {
  export function isa(o: any): o is InvalidSequenceTokenException {
    return __isa(o, "InvalidSequenceTokenException");
  }
}

/**
 * <p>You have reached the maximum number of resources that can be created.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListTagsLogGroupRequest {
  __type?: "ListTagsLogGroupRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;
}

export namespace ListTagsLogGroupRequest {
  export function isa(o: any): o is ListTagsLogGroupRequest {
    return __isa(o, "ListTagsLogGroupRequest");
  }
}

export interface ListTagsLogGroupResponse {
  __type?: "ListTagsLogGroupResponse";
  /**
   * <p>The tags for the log group.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsLogGroupResponse {
  export function isa(o: any): o is ListTagsLogGroupResponse {
    return __isa(o, "ListTagsLogGroupResponse");
  }
}

/**
 * <p>Represents a log group.</p>
 */
export interface LogGroup {
  __type?: "LogGroup";
  /**
   * <p>The Amazon Resource Name (ARN) of the log group.</p>
   */
  arn?: string;

  /**
   * <p>The creation time of the log group, expressed as the number of milliseconds after Jan
   *       1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>The number of metric filters.</p>
   */
  metricFilterCount?: number;

  /**
   * <p>The number of days to retain the log events in the specified log group.
   *       Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.</p>
   */
  retentionInDays?: number;

  /**
   * <p>The number of bytes stored.</p>
   */
  storedBytes?: number;
}

export namespace LogGroup {
  export function isa(o: any): o is LogGroup {
    return __isa(o, "LogGroup");
  }
}

/**
 * <p>The fields contained in log events found by a <code>GetLogGroupFields</code> operation,
 *       along with the percentage of queried log events in which each field appears.</p>
 */
export interface LogGroupField {
  __type?: "LogGroupField";
  /**
   * <p>The name of a log field.</p>
   */
  name?: string;

  /**
   * <p>The percentage of log events queried that contained the field.</p>
   */
  percent?: number;
}

export namespace LogGroupField {
  export function isa(o: any): o is LogGroupField {
    return __isa(o, "LogGroupField");
  }
}

/**
 * <p>Represents a log stream, which is a sequence of log events from
 *       a single emitter of logs.</p>
 */
export interface LogStream {
  __type?: "LogStream";
  /**
   * <p>The Amazon Resource Name (ARN) of the log stream.</p>
   */
  arn?: string;

  /**
   * <p>The creation time of the stream, expressed as the number of milliseconds after Jan 1,
   *       1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The time of the first event, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC.</p>
   */
  firstEventTimestamp?: number;

  /**
   * <p>The time of the most recent log event in the log stream in CloudWatch Logs. This number
   *       is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. The
   *         <code>lastEventTime</code> value updates on an eventual consistency basis. It typically
   *       updates in less than an hour from ingestion, but may take longer in some rare
   *       situations.</p>
   */
  lastEventTimestamp?: number;

  /**
   * <p>The ingestion time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00
   *       UTC.</p>
   */
  lastIngestionTime?: number;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * <p>The number of bytes stored.</p>
   *          <p>
   *             <b>IMPORTANT:</b>On June 17, 2019, this parameter was deprecated for log streams, and is always
   *       reported as zero. This change applies only to log streams. The <code>storedBytes</code> parameter for log
   *       groups is not affected.</p>
   */
  storedBytes?: number;

  /**
   * <p>The sequence token.</p>
   */
  uploadSequenceToken?: string;
}

export namespace LogStream {
  export function isa(o: any): o is LogStream {
    return __isa(o, "LogStream");
  }
}

/**
 * <p>The query string is not valid. Details about this error are displayed in a
 *       <code>QueryCompileError</code> object. For more information, see
 *       .</p>
 *          <p>For more information about valid query syntax, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
 */
export interface MalformedQueryException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedQueryException";
  $fault: "client";
  message?: string;
  /**
   * <p>Reserved.</p>
   */
  queryCompileError?: QueryCompileError;
}

export namespace MalformedQueryException {
  export function isa(o: any): o is MalformedQueryException {
    return __isa(o, "MalformedQueryException");
  }
}

/**
 * <p>Metric filters express how CloudWatch Logs would extract metric observations
 *       from ingested log events and transform them into metric data in a CloudWatch metric.</p>
 */
export interface MetricFilter {
  __type?: "MetricFilter";
  /**
   * <p>The creation time of the metric filter, expressed as the number of milliseconds after
   *       Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The name of the metric filter.</p>
   */
  filterName?: string;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>The metric transformations.</p>
   */
  metricTransformations?: Array<MetricTransformation>;
}

export namespace MetricFilter {
  export function isa(o: any): o is MetricFilter {
    return __isa(o, "MetricFilter");
  }
}

/**
 * <p>Represents a matched event.</p>
 */
export interface MetricFilterMatchRecord {
  __type?: "MetricFilterMatchRecord";
  /**
   * <p>The raw event data.</p>
   */
  eventMessage?: string;

  /**
   * <p>The event number.</p>
   */
  eventNumber?: number;

  /**
   * <p>The values extracted from the event data by the filter.</p>
   */
  extractedValues?: { [key: string]: string };
}

export namespace MetricFilterMatchRecord {
  export function isa(o: any): o is MetricFilterMatchRecord {
    return __isa(o, "MetricFilterMatchRecord");
  }
}

/**
 * <p>Indicates how to transform ingested log events to metric data in a CloudWatch
 *       metric.</p>
 */
export interface MetricTransformation {
  __type?: "MetricTransformation";
  /**
   * <p>(Optional) The value to emit when a filter pattern does not match a log event.
   *       This value can be null.</p>
   */
  defaultValue?: number;

  /**
   * <p>The name of the CloudWatch metric.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The namespace of the CloudWatch metric.</p>
   */
  metricNamespace: string | undefined;

  /**
   * <p>The value to publish to the CloudWatch metric when a filter pattern matches a log event.</p>
   */
  metricValue: string | undefined;
}

export namespace MetricTransformation {
  export function isa(o: any): o is MetricTransformation {
    return __isa(o, "MetricTransformation");
  }
}

/**
 * <p>Multiple requests to update the same resource were in conflict.</p>
 */
export interface OperationAbortedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationAbortedException";
  $fault: "client";
  message?: string;
}

export namespace OperationAbortedException {
  export function isa(o: any): o is OperationAbortedException {
    return __isa(o, "OperationAbortedException");
  }
}

export enum OrderBy {
  LastEventTime = "LastEventTime",
  LogStreamName = "LogStreamName"
}

/**
 * <p>Represents a log event.</p>
 */
export interface OutputLogEvent {
  __type?: "OutputLogEvent";
  /**
   * <p>The time the event was ingested, expressed as the number of milliseconds after Jan 1,
   *       1970 00:00:00 UTC.</p>
   */
  ingestionTime?: number;

  /**
   * <p>The data contained in the log event.</p>
   */
  message?: string;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970
   *       00:00:00 UTC.</p>
   */
  timestamp?: number;
}

export namespace OutputLogEvent {
  export function isa(o: any): o is OutputLogEvent {
    return __isa(o, "OutputLogEvent");
  }
}

export interface PutDestinationPolicyRequest {
  __type?: "PutDestinationPolicyRequest";
  /**
   * <p>An IAM policy document that authorizes cross-account users to deliver their log events
   *       to the associated destination.</p>
   */
  accessPolicy: string | undefined;

  /**
   * <p>A name for an existing destination.</p>
   */
  destinationName: string | undefined;
}

export namespace PutDestinationPolicyRequest {
  export function isa(o: any): o is PutDestinationPolicyRequest {
    return __isa(o, "PutDestinationPolicyRequest");
  }
}

export interface PutDestinationRequest {
  __type?: "PutDestinationRequest";
  /**
   * <p>A name for the destination.</p>
   */
  destinationName: string | undefined;

  /**
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon
   *       Kinesis PutRecord operation on the destination stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The ARN of an Amazon Kinesis stream to which to deliver matching log events.</p>
   */
  targetArn: string | undefined;
}

export namespace PutDestinationRequest {
  export function isa(o: any): o is PutDestinationRequest {
    return __isa(o, "PutDestinationRequest");
  }
}

export interface PutDestinationResponse {
  __type?: "PutDestinationResponse";
  /**
   * <p>The destination.</p>
   */
  destination?: Destination;
}

export namespace PutDestinationResponse {
  export function isa(o: any): o is PutDestinationResponse {
    return __isa(o, "PutDestinationResponse");
  }
}

export interface PutLogEventsRequest {
  __type?: "PutLogEventsRequest";
  /**
   * <p>The log events.</p>
   */
  logEvents: Array<InputLogEvent> | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName: string | undefined;

  /**
   * <p>The sequence token obtained from the response of the previous <code>PutLogEvents</code>
   *       call. An upload in a newly created log stream does not require a sequence token. You can also
   *       get the sequence token using <a>DescribeLogStreams</a>. If you call
   *         <code>PutLogEvents</code> twice within a narrow time period using the same value for
   *         <code>sequenceToken</code>, both calls may be successful, or one may be rejected.</p>
   */
  sequenceToken?: string;
}

export namespace PutLogEventsRequest {
  export function isa(o: any): o is PutLogEventsRequest {
    return __isa(o, "PutLogEventsRequest");
  }
}

export interface PutLogEventsResponse {
  __type?: "PutLogEventsResponse";
  /**
   * <p>The next sequence token.</p>
   */
  nextSequenceToken?: string;

  /**
   * <p>The rejected events.</p>
   */
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
}

export namespace PutLogEventsResponse {
  export function isa(o: any): o is PutLogEventsResponse {
    return __isa(o, "PutLogEventsResponse");
  }
}

export interface PutMetricFilterRequest {
  __type?: "PutMetricFilterRequest";
  /**
   * <p>A name for the metric filter.</p>
   */
  filterName: string | undefined;

  /**
   * <p>A filter pattern for extracting metric data out of ingested log events.</p>
   */
  filterPattern: string | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>A collection of information that defines how metric data gets emitted.</p>
   */
  metricTransformations: Array<MetricTransformation> | undefined;
}

export namespace PutMetricFilterRequest {
  export function isa(o: any): o is PutMetricFilterRequest {
    return __isa(o, "PutMetricFilterRequest");
  }
}

export interface PutResourcePolicyRequest {
  __type?: "PutResourcePolicyRequest";
  /**
   * <p>Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string.
   *     This parameter is required.</p>
   *          <p>The following example creates a resource policy enabling the Route 53 service to put
   *       DNS query logs in to the specified log group. Replace "logArn" with the ARN of your CloudWatch Logs resource, such as a log group or log stream.</p>
   *          <p>
   *             <code>{
   *    "Version": "2012-10-17",
   *    "Statement": [
   *      {
   *        "Sid": "Route53LogsToCloudWatchLogs",
   *        "Effect": "Allow",
   *        "Principal": {
   *         "Service": [
   *                 "route53.amazonaws.com"
   *                ]
   *             },
   *          "Action":"logs:PutLogEvents",
   *          "Resource": "logArn"
   *       }
   *     ]
   * } </code>
   *
   *          </p>
   */
  policyDocument?: string;

  /**
   * <p>Name of the new policy. This parameter is required.</p>
   */
  policyName?: string;
}

export namespace PutResourcePolicyRequest {
  export function isa(o: any): o is PutResourcePolicyRequest {
    return __isa(o, "PutResourcePolicyRequest");
  }
}

export interface PutResourcePolicyResponse {
  __type?: "PutResourcePolicyResponse";
  /**
   * <p>The new policy.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

export namespace PutResourcePolicyResponse {
  export function isa(o: any): o is PutResourcePolicyResponse {
    return __isa(o, "PutResourcePolicyResponse");
  }
}

export interface PutRetentionPolicyRequest {
  __type?: "PutRetentionPolicyRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The number of days to retain the log events in the specified log group.
   *       Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.</p>
   */
  retentionInDays: number | undefined;
}

export namespace PutRetentionPolicyRequest {
  export function isa(o: any): o is PutRetentionPolicyRequest {
    return __isa(o, "PutRetentionPolicyRequest");
  }
}

export interface PutSubscriptionFilterRequest {
  __type?: "PutSubscriptionFilterRequest";
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
   *             </li>
   *             <li>
   *                <p>An Amazon Kinesis Firehose delivery stream belonging to the same account as the
   *           subscription filter, for same-account delivery.</p>
   *             </li>
   *             <li>
   *                <p>An AWS Lambda function belonging to the same account as the subscription filter,
   *           for same-account delivery.</p>
   *             </li>
   *          </ul>
   */
  destinationArn: string | undefined;

  /**
   * <p>The method used to distribute log data to the destination. By default log data is
   *       grouped by log stream, but the grouping can be set to random for a more even distribution.
   *       This property is only applicable when the destination is an Amazon Kinesis stream.
   *     </p>
   */
  distribution?: Distribution | string;

  /**
   * <p>A name for the subscription filter. If you are updating an existing filter, you must
   *       specify the correct name in <code>filterName</code>. Otherwise, the call fails because you
   *       cannot associate a second filter with a log group. To find the name of the filter currently
   *       associated with a log group, use <a>DescribeSubscriptionFilters</a>.</p>
   */
  filterName: string | undefined;

  /**
   * <p>A filter pattern for subscribing to a filtered stream of log events.</p>
   */
  filterPattern: string | undefined;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log
   *       events to the destination stream. You don't need to provide the ARN when you are working with
   *       a logical destination for cross-account delivery.</p>
   */
  roleArn?: string;
}

export namespace PutSubscriptionFilterRequest {
  export function isa(o: any): o is PutSubscriptionFilterRequest {
    return __isa(o, "PutSubscriptionFilterRequest");
  }
}

/**
 * <p>Reserved.</p>
 */
export interface QueryCompileError {
  __type?: "QueryCompileError";
  /**
   * <p>Reserved.</p>
   */
  location?: QueryCompileErrorLocation;

  /**
   * <p>Reserved.</p>
   */
  message?: string;
}

export namespace QueryCompileError {
  export function isa(o: any): o is QueryCompileError {
    return __isa(o, "QueryCompileError");
  }
}

/**
 * <p>Reserved.</p>
 */
export interface QueryCompileErrorLocation {
  __type?: "QueryCompileErrorLocation";
  /**
   * <p>Reserved.</p>
   */
  endCharOffset?: number;

  /**
   * <p>Reserved.</p>
   */
  startCharOffset?: number;
}

export namespace QueryCompileErrorLocation {
  export function isa(o: any): o is QueryCompileErrorLocation {
    return __isa(o, "QueryCompileErrorLocation");
  }
}

/**
 * <p>Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. </p>
 */
export interface QueryInfo {
  __type?: "QueryInfo";
  /**
   * <p>The date and time that this query was created.</p>
   */
  createTime?: number;

  /**
   * <p>The name of the log group scanned by this query.</p>
   */
  logGroupName?: string;

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
}

export namespace QueryInfo {
  export function isa(o: any): o is QueryInfo {
    return __isa(o, "QueryInfo");
  }
}

/**
 * <p>Contains the number of log events scanned by the query, the number of log events that matched the
 *       query criteria, and the total number of bytes in the log events that were scanned.</p>
 */
export interface QueryStatistics {
  __type?: "QueryStatistics";
  /**
   * <p>The total number of bytes in the log events scanned during the query.</p>
   */
  bytesScanned?: number;

  /**
   * <p>The number of log events that matched the query string.</p>
   */
  recordsMatched?: number;

  /**
   * <p>The total number of log events scanned during the query.</p>
   */
  recordsScanned?: number;
}

export namespace QueryStatistics {
  export function isa(o: any): o is QueryStatistics {
    return __isa(o, "QueryStatistics");
  }
}

export enum QueryStatus {
  Cancelled = "Cancelled",
  Complete = "Complete",
  Failed = "Failed",
  Running = "Running",
  Scheduled = "Scheduled"
}

/**
 * <p>Represents the rejected events.</p>
 */
export interface RejectedLogEventsInfo {
  __type?: "RejectedLogEventsInfo";
  /**
   * <p>The expired log events.</p>
   */
  expiredLogEventEndIndex?: number;

  /**
   * <p>The log events that are too new.</p>
   */
  tooNewLogEventStartIndex?: number;

  /**
   * <p>The log events that are too old.</p>
   */
  tooOldLogEventEndIndex?: number;
}

export namespace RejectedLogEventsInfo {
  export function isa(o: any): o is RejectedLogEventsInfo {
    return __isa(o, "RejectedLogEventsInfo");
  }
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>A policy enabling one or more entities to put logs to a log group in this account.</p>
 */
export interface ResourcePolicy {
  __type?: "ResourcePolicy";
  /**
   * <p>Timestamp showing when this policy was last updated, expressed as the number of
   *       milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  lastUpdatedTime?: number;

  /**
   * <p>The details of the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The name of the resource policy.</p>
   */
  policyName?: string;
}

export namespace ResourcePolicy {
  export function isa(o: any): o is ResourcePolicy {
    return __isa(o, "ResourcePolicy");
  }
}

/**
 * <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p>
 */
export interface ResultField {
  __type?: "ResultField";
  /**
   * <p>The log event field.</p>
   */
  field?: string;

  /**
   * <p>The value of this field.</p>
   */
  value?: string;
}

export namespace ResultField {
  export function isa(o: any): o is ResultField {
    return __isa(o, "ResultField");
  }
}

/**
 * <p>Represents the search status of a log stream.</p>
 */
export interface SearchedLogStream {
  __type?: "SearchedLogStream";
  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * <p>Indicates whether all the events in this log stream were searched.</p>
   */
  searchedCompletely?: boolean;
}

export namespace SearchedLogStream {
  export function isa(o: any): o is SearchedLogStream {
    return __isa(o, "SearchedLogStream");
  }
}

/**
 * <p>The service cannot complete the request.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

export interface StartQueryRequest {
  __type?: "StartQueryRequest";
  /**
   * <p>The end of the time range to query. The range is inclusive, so the specified
   *       end time is included in the query. Specified as epoch
   *       time, the number of seconds since January 1, 1970, 00:00:00 UTC.</p>
   */
  endTime: number | undefined;

  /**
   * <p>The maximum number of log events to return in the query. If the query string uses the <code>fields</code> command,
   *     only the specified fields and their values are returned. The default is 1000.</p>
   */
  limit?: number;

  /**
   * <p>The log group on which to perform the query.</p>
   *          <p>A <code>StartQuery</code> operation must include a <code>logGroupNames</code> or a <code>logGroupName</code> parameter, but
   *       not both.</p>
   */
  logGroupName?: string;

  /**
   * <p>The list of log groups to be queried. You can include up to 20 log groups.</p>
   *          <p>A <code>StartQuery</code> operation must include a <code>logGroupNames</code> or a <code>logGroupName</code> parameter, but
   *     not both.</p>
   */
  logGroupNames?: Array<string>;

  /**
   * <p>The query string to use.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The beginning of the time range to query. The range is inclusive, so the specified
   *       start time is included in the query. Specified as epoch time, the
   *       number of seconds since January 1, 1970, 00:00:00 UTC.</p>
   */
  startTime: number | undefined;
}

export namespace StartQueryRequest {
  export function isa(o: any): o is StartQueryRequest {
    return __isa(o, "StartQueryRequest");
  }
}

export interface StartQueryResponse {
  __type?: "StartQueryResponse";
  /**
   * <p>The unique ID of the query. </p>
   */
  queryId?: string;
}

export namespace StartQueryResponse {
  export function isa(o: any): o is StartQueryResponse {
    return __isa(o, "StartQueryResponse");
  }
}

export interface StopQueryRequest {
  __type?: "StopQueryRequest";
  /**
   * <p>The ID number of the query to stop. If necessary, you can use <code>DescribeQueries</code>
   *       to find this ID number.</p>
   */
  queryId: string | undefined;
}

export namespace StopQueryRequest {
  export function isa(o: any): o is StopQueryRequest {
    return __isa(o, "StopQueryRequest");
  }
}

export interface StopQueryResponse {
  __type?: "StopQueryResponse";
  /**
   * <p>This is true if the query was stopped by the <code>StopQuery</code> operation.</p>
   */
  success?: boolean;
}

export namespace StopQueryResponse {
  export function isa(o: any): o is StopQueryResponse {
    return __isa(o, "StopQueryResponse");
  }
}

/**
 * <p>Represents a subscription filter.</p>
 */
export interface SubscriptionFilter {
  __type?: "SubscriptionFilter";
  /**
   * <p>The creation time of the subscription filter, expressed as the number of milliseconds
   *       after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   */
  destinationArn?: string;

  /**
   * <p>The method used to distribute log data to the destination, which can be either
   *       random or grouped by log stream.</p>
   */
  distribution?: Distribution | string;

  /**
   * <p>The name of the subscription filter.</p>
   */
  filterName?: string;

  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern?: string;

  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p></p>
   */
  roleArn?: string;
}

export namespace SubscriptionFilter {
  export function isa(o: any): o is SubscriptionFilter {
    return __isa(o, "SubscriptionFilter");
  }
}

export interface TagLogGroupRequest {
  __type?: "TagLogGroupRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The key-value pairs to use for the tags.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagLogGroupRequest {
  export function isa(o: any): o is TagLogGroupRequest {
    return __isa(o, "TagLogGroupRequest");
  }
}

export interface TestMetricFilterRequest {
  __type?: "TestMetricFilterRequest";
  /**
   * <p>A symbolic description of how CloudWatch Logs should interpret the data in each log
   *       event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You
   *       use the filter pattern to specify what to look for in the log event message.</p>
   */
  filterPattern: string | undefined;

  /**
   * <p>The log event messages to test.</p>
   */
  logEventMessages: Array<string> | undefined;
}

export namespace TestMetricFilterRequest {
  export function isa(o: any): o is TestMetricFilterRequest {
    return __isa(o, "TestMetricFilterRequest");
  }
}

export interface TestMetricFilterResponse {
  __type?: "TestMetricFilterResponse";
  /**
   * <p>The matched events.</p>
   */
  matches?: Array<MetricFilterMatchRecord>;
}

export namespace TestMetricFilterResponse {
  export function isa(o: any): o is TestMetricFilterResponse {
    return __isa(o, "TestMetricFilterResponse");
  }
}

/**
 * <p>The most likely cause is an invalid AWS access key ID or secret key.</p>
 */
export interface UnrecognizedClientException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnrecognizedClientException";
  $fault: "client";
  message?: string;
}

export namespace UnrecognizedClientException {
  export function isa(o: any): o is UnrecognizedClientException {
    return __isa(o, "UnrecognizedClientException");
  }
}

export interface UntagLogGroupRequest {
  __type?: "UntagLogGroupRequest";
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The tag keys. The corresponding tags are removed from the log group.</p>
   */
  tags: Array<string> | undefined;
}

export namespace UntagLogGroupRequest {
  export function isa(o: any): o is UntagLogGroupRequest {
    return __isa(o, "UntagLogGroupRequest");
  }
}
