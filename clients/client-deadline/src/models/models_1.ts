// smithy-typescript generated code
import {
  ComparisonOperator,
  JobLifecycleStatus,
  JobTargetTaskRunStatus,
  LogicalOperator,
  Period,
  QueueFleetAssociationStatus,
  QueueLimitAssociationStatus,
  SearchTermMatchingType,
  SortOrder,
  StepLifecycleStatus,
  StepTargetTaskRunStatus,
  TaskRunStatus,
  TaskTargetRunStatus,
  UpdateQueueFleetAssociationStatus,
  UpdateQueueLimitAssociationStatus,
  UsageGroupByField,
  UsageStatistic,
  WorkerStatus,
} from "./enums";
import {
  type HostPropertiesResponse,
  type ParameterSpace,
  DateTimeFilterExpression,
  JobParameter,
  TaskParameterValue,
} from "./models_0";

/**
 * <p>The details of a metered product.</p>
 * @public
 */
export interface MeteredProductSummary {
  /**
   * <p>The product ID.</p>
   * @public
   */
  productId: string | undefined;

  /**
   * <p>The family to which the metered product belongs.</p>
   * @public
   */
  family: string | undefined;

  /**
   * <p>The vendor.</p>
   * @public
   */
  vendor: string | undefined;

  /**
   * <p>The port on which the metered product should run.</p>
   * @public
   */
  port: number | undefined;
}

/**
 * @public
 */
export interface ListMeteredProductsResponse {
  /**
   * <p>The metered products to list.</p>
   * @public
   */
  meteredProducts: MeteredProductSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutMeteredProductRequest {
  /**
   * <p>The license endpoint ID to add to the metered product.</p>
   * @public
   */
  licenseEndpointId: string | undefined;

  /**
   * <p>The product ID to add to the metered product.</p>
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface PutMeteredProductResponse {}

/**
 * @public
 */
export interface ListAvailableMeteredProductsRequest {
  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAvailableMeteredProductsResponse {
  /**
   * <p>The metered products.</p>
   * @public
   */
  meteredProducts: MeteredProductSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueFleetAssociationsRequest {
  /**
   * <p>The farm ID for the queue-fleet association list.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID for the queue-fleet association list.</p>
   * @public
   */
  queueId?: string | undefined;

  /**
   * <p>The fleet ID for the queue-fleet association list.</p>
   * @public
   */
  fleetId?: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a queue-fleet association.</p>
 * @public
 */
export interface QueueFleetAssociationSummary {
  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The status of task scheduling in the queue-fleet association.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>–Association is active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_SCHEDULING_AND_COMPLETE_TASKS</code>–Association has stopped
   *                scheduling new tasks and is completing current tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_SCHEDULING_AND_CANCEL_TASKS</code>–Association has stopped
   *                scheduling new tasks and is canceling current tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>–Association has been stopped.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: QueueFleetAssociationStatus | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueFleetAssociationsResponse {
  /**
   * <p>The queue-fleet associations on the list.</p>
   * @public
   */
  queueFleetAssociations: QueueFleetAssociationSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueLimitAssociationsRequest {
  /**
   * <p>The unique identifier of the farm that contains the limits and associations.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>Specifies that the operation should return only the queue limit associations for the
   *          specified queue. If you specify both the <code>queueId</code> and the <code>limitId</code>,
   *          only the specified limit is returned if it exists.</p>
   * @public
   */
  queueId?: string | undefined;

  /**
   * <p>Specifies that the operation should return only the queue limit associations for the
   *          specified limit. If you specify both the <code>queueId</code> and the <code>limitId</code>,
   *          only the specified limit is returned if it exists.</p>
   * @public
   */
  limitId?: string | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of associations to return in each page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides information about the association between a queue and a limit.</p>
 * @public
 */
export interface QueueLimitAssociationSummary {
  /**
   * <p>The Unix timestamp of the date and time that the association was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user identifier of the person that created the association.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Unix timestamp of the date and time that the association was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user identifier of the person that updated the association.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The unique identifier of the queue in the association.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The unique identifier of the limit in the association.</p>
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>The status of task scheduling in the queue-limit association.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - Association is active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_LIMIT_USAGE_AND_COMPLETE_TASKS</code> - Association has stopped
   *                scheduling new tasks and is completing current tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_LIMIT_USAGE_AND_CANCEL_TASKS</code> - Association has stopped
   *                scheduling new tasks and is canceling current tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> - Association has been stopped.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: QueueLimitAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListQueueLimitAssociationsResponse {
  /**
   * <p>A list of associations between limits and queues in the farm specified in the
   *          request.</p>
   * @public
   */
  queueLimitAssociations: QueueLimitAssociationSummary[] | undefined;

  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorRequest {
  /**
   * <p>The unique identifier of the monitor to delete. This ID is returned by the
   *             <code>CreateMonitor</code> operation, and is included in the response to the
   *             <code>GetMonitor</code> operation.</p>
   * @public
   */
  monitorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorResponse {}

/**
 * @public
 */
export interface GetMonitorRequest {
  /**
   * <p>The unique identifier for the monitor. This ID is returned by the
   *             <code>CreateMonitor</code> operation.</p>
   * @public
   */
  monitorId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorResponse {
  /**
   * <p>The unique identifier for the monitor.</p>
   * @public
   */
  monitorId: string | undefined;

  /**
   * <p>The name used to identify the monitor on the Deadline Cloud console.</p>
   *          <important>
   *             <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p>
   *          </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The subdomain used for the monitor URL. The full URL of the monitor is
   *          subdomain.Region.deadlinecloud.amazonaws.com.</p>
   * @public
   */
  subdomain: string | undefined;

  /**
   * <p>The complete URL of the monitor. The full URL of the monitor is
   *          subdomain.Region.deadlinecloud.amazonaws.com.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the monitor. Users of the monitor use this role to
   *          access Deadline Cloud resources.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center instance responsible for authenticating monitor users.</p>
   * @public
   */
  identityCenterInstanceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that the IAM Identity Center assigned to the monitor when it was created.</p>
   * @public
   */
  identityCenterApplicationArn: string | undefined;

  /**
   * <p>The UNIX timestamp of the date and time that the monitor was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user name of the person that created the monitor.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The UNIX timestamp of the last date and time that the monitor was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user name of the person that last updated the monitor.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorsRequest {
  /**
   * <p>The token for the next set of results, or <code>null</code> to start from the beginning.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides information about a monitor in Deadline Cloud.</p>
 * @public
 */
export interface MonitorSummary {
  /**
   * <p>The unique identifier for the monitor.</p>
   * @public
   */
  monitorId: string | undefined;

  /**
   * <p>The name of the monitor that displays on the Deadline Cloud console.</p>
   *          <important>
   *             <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p>
   *          </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The subdomain used for the monitor URL. The full URL of the monitor is
   *          subdomain.Region.deadlinecloud.amazonaws.com.</p>
   * @public
   */
  subdomain: string | undefined;

  /**
   * <p>The complete URL of the monitor. The full URL of the monitor is
   *          subdomain.Region.deadlinecloud.amazonaws.com.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the monitor. Users of the monitor use this role to
   *          access Deadline Cloud resources.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center instance responsible for authenticating monitor users.</p>
   * @public
   */
  identityCenterInstanceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that the IAM Identity Center assigned to the monitor when it was created.</p>
   * @public
   */
  identityCenterApplicationArn: string | undefined;

  /**
   * <p>The UNIX timestamp of the date and time that the monitor was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user name of the person that created the monitor.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The UNIX timestamp of the date and time that the monitor was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user name of the person that last updated the monitor.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorsResponse {
  /**
   * <p>If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of <code>MonitorSummary</code> objects that describe your monitors in the
   *          Deadline Cloud.</p>
   * @public
   */
  monitors: MonitorSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorRequest {
  /**
   * <p>The unique identifier of the monitor to update.</p>
   * @public
   */
  monitorId: string | undefined;

  /**
   * <p>The new value of the subdomain to use when forming the monitor URL.</p>
   * @public
   */
  subdomain?: string | undefined;

  /**
   * <p>The new value to use for the monitor's display name.</p>
   *          <important>
   *             <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p>
   *          </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new IAM role to use with the monitor.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorResponse {}

/**
 * <p>The details of a filtered search for parameters.</p>
 * @public
 */
export interface ParameterFilterExpression {
  /**
   * <p>The name of the parameter to filter on.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of comparison to use to filter results.</p>
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * <p>The parameter's value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Searches for a particular search term.</p>
 * @public
 */
export interface SearchTermFilterExpression {
  /**
   * <p>The term to search for.</p>
   * @public
   */
  searchTerm: string | undefined;

  /**
   * <p>Specifies how Deadline Cloud matches your search term in the results. If you don't
   *          specify a <code>matchType</code> the default is <code>FUZZY_MATCH</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FUZZY_MATCH</code> - Matches if a portion of the search term is found in the
   *                result.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTAINS</code> - Matches if the exact search term is contained in the
   *                result.</p>
   *             </li>
   *          </ul>
   * @public
   */
  matchType?: SearchTermMatchingType | undefined;
}

/**
 * <p>Searches for a particular string.</p>
 * @public
 */
export interface StringFilterExpression {
  /**
   * <p>The field name to search.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of comparison to use for this search.</p>
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * <p>The string to search for.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The field sorting order and name of the field.</p>
 * @public
 */
export interface FieldSortExpression {
  /**
   * <p>The sort order for the field.</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Organizes parameters according to your specifications.</p>
 * @public
 */
export interface ParameterSortExpression {
  /**
   * <p>The sort order for the parameter.</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The parameter name to sort by.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Allows setting a specific user's job to run first.</p>
 * @public
 */
export interface UserJobsFirst {
  /**
   * <p>The user's ID.</p>
   * @public
   */
  userIdentityId: string | undefined;
}

/**
 * <p>The resources to search.</p>
 * @public
 */
export type SearchSortExpression =
  | SearchSortExpression.FieldSortMember
  | SearchSortExpression.ParameterSortMember
  | SearchSortExpression.UserJobsFirstMember
  | SearchSortExpression.$UnknownMember;

/**
 * @public
 */
export namespace SearchSortExpression {
  /**
   * <p>Options for sorting a particular user's jobs first.</p>
   * @public
   */
  export interface UserJobsFirstMember {
    userJobsFirst: UserJobsFirst;
    fieldSort?: never;
    parameterSort?: never;
    $unknown?: never;
  }

  /**
   * <p>Options for sorting by a field.</p>
   * @public
   */
  export interface FieldSortMember {
    userJobsFirst?: never;
    fieldSort: FieldSortExpression;
    parameterSort?: never;
    $unknown?: never;
  }

  /**
   * <p>Options for sorting by a parameter.</p>
   * @public
   */
  export interface ParameterSortMember {
    userJobsFirst?: never;
    fieldSort?: never;
    parameterSort: ParameterSortExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userJobsFirst?: never;
    fieldSort?: never;
    parameterSort?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userJobsFirst: (value: UserJobsFirst) => T;
    fieldSort: (value: FieldSortExpression) => T;
    parameterSort: (value: ParameterSortExpression) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The details of a job search.</p>
 * @public
 */
export interface JobSearchSummary {
  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId?: string | undefined;

  /**
   * <p>The job name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The life cycle status.</p>
   * @public
   */
  lifecycleStatus?: JobLifecycleStatus | undefined;

  /**
   * <p>The life cycle status message.</p>
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>–pending and waiting for resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code>–ready to be processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASSIGNED</code>–assigned and will run next on a worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCHEDULED</code>–scheduled to be run on a worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERRUPTING</code>–being interrupted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>–running on a worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code>–the task is suspended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code>–the task has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>–the task has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>–the task has succeeded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * <p>The task status to start with on the job.</p>
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * <p>The number of tasks running on the job.</p>
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The total number of times tasks from the job failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The job priority.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The number of task failures before the job stops running and is marked as <code>FAILED</code>.</p>
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * <p>The maximum number of retries for a job.</p>
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The job parameters.</p>
   * @public
   */
  jobParameters?: Record<string, JobParameter> | undefined;

  /**
   * <p>The maximum number of worker hosts that can concurrently process a job. When the
   *             <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the
   *          job, even if the fleets assigned to the job's queue has available workers.</p>
   *          <p>You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no
   *          maximum number of workers.</p>
   *          <p>If you don't specify the <code>maxWorkerCount</code>, the default is -1.</p>
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * <p>The job ID for the source job.</p>
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * <p>The jobs in the search.</p>
   * @public
   */
  jobs: JobSearchSummary[] | undefined;

  /**
   * <p>The next incremental starting point after the defined <code>itemOffset</code>.</p>
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * <p>The total number of results in the search.</p>
   * @public
   */
  totalResults: number | undefined;
}

/**
 * <p>The details of a step search.</p>
 * @public
 */
export interface StepSearchSummary {
  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId?: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId?: string | undefined;

  /**
   * <p>The step name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The life cycle status.</p>
   * @public
   */
  lifecycleStatus?: StepLifecycleStatus | undefined;

  /**
   * <p>The life cycle status message.</p>
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>–pending and waiting for resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code>–ready to be processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASSIGNED</code>–assigned and will run next on a worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCHEDULED</code>–scheduled to be run on a worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERRUPTING</code>–being interrupted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>–running on a worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code>–the task is suspended.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code>–the task has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>–the task has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>–the task has succeeded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * <p>The task status to start with on the job.</p>
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * <p>The number of tasks running on the job.</p>
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * <p>The total number of times tasks from the step failed and were retried.</p>
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The parameters and combination expressions for the search.</p>
   * @public
   */
  parameterSpace?: ParameterSpace | undefined;
}

/**
 * @public
 */
export interface SearchStepsResponse {
  /**
   * <p>The steps in the search.</p>
   * @public
   */
  steps: StepSearchSummary[] | undefined;

  /**
   * <p>The next incremental starting point after the defined <code>itemOffset</code>.</p>
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * <p>The total number of results in the search.</p>
   * @public
   */
  totalResults: number | undefined;
}

/**
 * <p>The details of a task search.</p>
 * @public
 */
export interface TaskSearchSummary {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The step ID.</p>
   * @public
   */
  stepId?: string | undefined;

  /**
   * <p>The job ID.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The queue ID.</p>
   * @public
   */
  queueId?: string | undefined;

  /**
   * <p>The run status of the task.</p>
   * @public
   */
  runStatus?: TaskRunStatus | undefined;

  /**
   * <p>The run status that the task is being updated to.</p>
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * <p>The parameters to search for.</p>
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;

  /**
   * <p>The number of times that the task failed and was retried.</p>
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * <p>The date and time the resource started running.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time the resource ended running.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface SearchTasksResponse {
  /**
   * <p>Tasks in the search.</p>
   * @public
   */
  tasks: TaskSearchSummary[] | undefined;

  /**
   * <p>The next incremental starting point after the defined <code>itemOffset</code>.</p>
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * <p>The total number of results in the search.</p>
   * @public
   */
  totalResults: number | undefined;
}

/**
 * <p>The details of a worker search.</p>
 * @public
 */
export interface WorkerSearchSummary {
  /**
   * <p>The fleet ID.</p>
   * @public
   */
  fleetId?: string | undefined;

  /**
   * <p>The worker ID.</p>
   * @public
   */
  workerId?: string | undefined;

  /**
   * <p>The status of the worker search.</p>
   * @public
   */
  status?: WorkerStatus | undefined;

  /**
   * <p>Provides the Amazon EC2 instance properties of the worker host.</p>
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * <p>The user or system that created this resource.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user or system that updated this resource.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The date and time the resource was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SearchWorkersResponse {
  /**
   * <p>The workers for the search.</p>
   * @public
   */
  workers: WorkerSearchSummary[] | undefined;

  /**
   * <p>The next incremental starting point after the defined <code>itemOffset</code>.</p>
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * <p>The total number of results in the search.</p>
   * @public
   */
  totalResults: number | undefined;
}

/**
 * <p>Specifies the fleet IDs or queue IDs to return statistics. You can specify only fleet
 *          IDs or queue IDS, not both.</p>
 * @public
 */
export type SessionsStatisticsResources =
  | SessionsStatisticsResources.FleetIdsMember
  | SessionsStatisticsResources.QueueIdsMember
  | SessionsStatisticsResources.$UnknownMember;

/**
 * @public
 */
export namespace SessionsStatisticsResources {
  /**
   * <p>One to 10 queue IDs that specify the queues to return statistics for. If you specify the
   *             <code>queueIds</code> field, you can't specify the <code>fleetIds</code> field.</p>
   * @public
   */
  export interface QueueIdsMember {
    queueIds: string[];
    fleetIds?: never;
    $unknown?: never;
  }

  /**
   * <p>One to 10 fleet IDs that specify the fleets to return statistics for. If you specify the
   *             <code>fleetIds</code> field, you can't specify the <code>queueIds</code> field.</p>
   * @public
   */
  export interface FleetIdsMember {
    queueIds?: never;
    fleetIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    queueIds?: never;
    fleetIds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    queueIds: (value: string[]) => T;
    fleetIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartSessionsStatisticsAggregationRequest {
  /**
   * <p>The identifier of the farm that contains queues or fleets to return statistics
   *          for.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>A list of fleet IDs or queue IDs to gather statistics for.</p>
   * @public
   */
  resourceIds: SessionsStatisticsResources | undefined;

  /**
   * <p>The Linux timestamp of the date and time that the statistics start.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The Linux timestamp of the date and time that the statistics end.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The timezone to use for the statistics. Use UTC notation such as "UTC+8."</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p>The period to aggregate the statistics.</p>
   * @public
   */
  period?: Period | undefined;

  /**
   * <p>The field to use to group the statistics.</p>
   * @public
   */
  groupBy: UsageGroupByField[] | undefined;

  /**
   * <p>One to four statistics to return.</p>
   * @public
   */
  statistics: UsageStatistic[] | undefined;
}

/**
 * @public
 */
export interface StartSessionsStatisticsAggregationResponse {
  /**
   * <p>A unique identifier for the aggregated statistics. Use this identifier with the
   *             <code>GetAggregatedStatisticsForSessions</code> operation to return the
   *          statistics.</p>
   * @public
   */
  aggregationId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
   * <p>The ARN of the resource to remove the tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>They keys of the tag.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateQueueFleetAssociationRequest {
  /**
   * <p>The farm ID to update.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to update.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The fleet ID to update.</p>
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The status to update.</p>
   * @public
   */
  status: UpdateQueueFleetAssociationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQueueFleetAssociationResponse {}

/**
 * @public
 */
export interface UpdateQueueLimitAssociationRequest {
  /**
   * <p>The unique identifier of the farm that contains the associated queues and limits.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The unique identifier of the queue associated to the limit.</p>
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The unique identifier of the limit associated to the queue.</p>
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>Sets the status of the limit. You can mark the limit active, or you can stop usage of
   *          the limit and either complete existing tasks or cancel any existing tasks immediately.
   *       </p>
   * @public
   */
  status: UpdateQueueLimitAssociationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQueueLimitAssociationResponse {}

/**
 * <p>The type of search filter to apply.</p>
 * @public
 */
export type SearchFilterExpression =
  | SearchFilterExpression.DateTimeFilterMember
  | SearchFilterExpression.GroupFilterMember
  | SearchFilterExpression.ParameterFilterMember
  | SearchFilterExpression.SearchTermFilterMember
  | SearchFilterExpression.StringFilterMember
  | SearchFilterExpression.$UnknownMember;

/**
 * @public
 */
export namespace SearchFilterExpression {
  /**
   * <p>Filters based on date and time.</p>
   * @public
   */
  export interface DateTimeFilterMember {
    dateTimeFilter: DateTimeFilterExpression;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters by parameter.</p>
   * @public
   */
  export interface ParameterFilterMember {
    dateTimeFilter?: never;
    parameterFilter: ParameterFilterExpression;
    searchTermFilter?: never;
    stringFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters by a specified search term.</p>
   * @public
   */
  export interface SearchTermFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter: SearchTermFilterExpression;
    stringFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters by a string.</p>
   * @public
   */
  export interface StringFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter: StringFilterExpression;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters by group.</p>
   * @public
   */
  export interface GroupFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter?: never;
    groupFilter: SearchGroupedFilterExpressions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter?: never;
    groupFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dateTimeFilter: (value: DateTimeFilterExpression) => T;
    parameterFilter: (value: ParameterFilterExpression) => T;
    searchTermFilter: (value: SearchTermFilterExpression) => T;
    stringFilter: (value: StringFilterExpression) => T;
    groupFilter: (value: SearchGroupedFilterExpressions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The filter expression, <code>AND</code> or <code>OR</code>, to use
 * when searching among a group of search strings in a resource.
 *
 * You can use two groupings per search each within parenthesis <code>()</code>.</p>
 * @public
 */
export interface SearchGroupedFilterExpressions {
  /**
   * <p>The filters to use for the search.</p>
   * @public
   */
  filters: SearchFilterExpression[] | undefined;

  /**
   * <p>The operators to include in the search.</p>
   * @public
   */
  operator: LogicalOperator | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * <p>The farm ID of the job.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue ID to use in the job search.</p>
   * @public
   */
  queueIds: string[] | undefined;

  /**
   * <p>The filter expression, <code>AND</code> or <code>OR</code>, to use
   * when searching among a group of search strings in a resource.
   *
   * You can use two groupings per search each within parenthesis <code>()</code>.</p>
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * <p>The search terms for a resource.</p>
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * <p>Defines how far into the scrollable list to start the return of results.</p>
   * @public
   */
  itemOffset: number | undefined;

  /**
   * <p>Specifies the number of items per page for the resource.</p>
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface SearchStepsRequest {
  /**
   * <p>The farm ID to use for the step search.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue IDs in the step search.</p>
   * @public
   */
  queueIds: string[] | undefined;

  /**
   * <p>The job ID to use in the step search.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The filter expression, <code>AND</code> or <code>OR</code>, to use
   * when searching among a group of search strings in a resource.
   *
   * You can use two groupings per search each within parenthesis <code>()</code>.</p>
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * <p>The search terms for a resource.</p>
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * <p>Defines how far into the scrollable list to start the return of results.</p>
   * @public
   */
  itemOffset: number | undefined;

  /**
   * <p>Specifies the number of items per page for the resource.</p>
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface SearchTasksRequest {
  /**
   * <p>The farm ID of the task.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The queue IDs to include in the search.</p>
   * @public
   */
  queueIds: string[] | undefined;

  /**
   * <p>The job ID for the task search.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The filter expression, <code>AND</code> or <code>OR</code>, to use
   * when searching among a group of search strings in a resource.
   *
   * You can use two groupings per search each within parenthesis <code>()</code>.</p>
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * <p>The search terms for a resource.</p>
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * <p>Defines how far into the scrollable list to start the return of results.</p>
   * @public
   */
  itemOffset: number | undefined;

  /**
   * <p>Specifies the number of items per page for the resource.</p>
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface SearchWorkersRequest {
  /**
   * <p>The farm ID in the workers search.</p>
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The fleet ID of the workers to search for.</p>
   * @public
   */
  fleetIds: string[] | undefined;

  /**
   * <p>The filter expression, <code>AND</code> or <code>OR</code>, to use
   * when searching among a group of search strings in a resource.
   *
   * You can use two groupings per search each within parenthesis <code>()</code>.</p>
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * <p>The search terms for a resource.</p>
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * <p>Defines how far into the scrollable list to start the return of results.</p>
   * @public
   */
  itemOffset: number | undefined;

  /**
   * <p>Specifies the number of items per page for the resource.</p>
   * @public
   */
  pageSize?: number | undefined;
}
