// smithy-typescript generated code
import type {
  ComparisonOperator,
  DeadlinePrincipalType,
  DefaultQueueBudgetAction,
  DependencyConsumerResolutionStatus,
  EnvironmentTemplateType,
  JobLifecycleStatus,
  JobTargetTaskRunStatus,
  LicenseEndpointStatus,
  LogicalOperator,
  MembershipLevel,
  MembershipResourceType,
  Period,
  QueueBlockedReason,
  QueueFleetAssociationStatus,
  QueueLimitAssociationStatus,
  QueueStatus,
  SearchTermMatchingType,
  SessionLifecycleTargetStatus,
  SessionsStatisticsAggregationStatus,
  SortOrder,
  StepLifecycleStatus,
  StepTargetTaskRunStatus,
  StorageProfileOperatingSystemFamily,
  TaskRunStatus,
  TaskTargetRunStatus,
  UpdateJobLifecycleStatus,
  UpdateQueueFleetAssociationStatus,
  UpdateQueueLimitAssociationStatus,
  UsageGroupByField,
  UsageStatistic,
  UsageType,
  WorkerStatus,
} from "./enums";
import type {
  DateTimeFilterExpression,
  DependencyCounts,
  FarmMember,
  FileSystemLocation,
  FleetMember,
  HostPropertiesResponse,
  JobAttachmentSettings,
  JobMember,
  JobParameter,
  JobRunAsUser,
  ParameterSpace,
  SchedulingConfiguration,
  StorageProfileSummary,
  TaskParameterValue,
} from "./models_0";

/**
 * @public
 */
export interface ListStepConsumersRequest {
  /**
   * The farm ID for the list of step consumers.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the step consumer.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the step consumer.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID to include on the list.
   * @public
   */
  stepId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a step consumer.
 * @public
 */
export interface StepConsumer {
  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The step consumer status.
   * @public
   */
  status: DependencyConsumerResolutionStatus | undefined;
}

/**
 * @public
 */
export interface ListStepConsumersResponse {
  /**
   * The consumers on the list.
   * @public
   */
  consumers: StepConsumer[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStepDependenciesRequest {
  /**
   * The farm ID for the step dependencies list.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the step dependencies list.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the step dependencies list.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID to include on the list.
   * @public
   */
  stepId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of step dependency.
 * @public
 */
export interface StepDependency {
  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The step dependency status.
   * @public
   */
  status: DependencyConsumerResolutionStatus | undefined;
}

/**
 * @public
 */
export interface ListStepDependenciesResponse {
  /**
   * The dependencies on the list.
   * @public
   */
  dependencies: StepDependency[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStepsRequest {
  /**
   * The farm ID to include on the list of steps.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to include on the list of steps.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to include on the list of steps.
   * @public
   */
  jobId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details for a step.
 * @public
 */
export interface StepSummary {
  /**
   * The step ID.
   * @public
   */
  stepId: string | undefined;

  /**
   * The name of the step.
   * @public
   */
  name: string | undefined;

  /**
   * The life cycle status.
   * @public
   */
  lifecycleStatus: StepLifecycleStatus | undefined;

  /**
   * A message that describes the lifecycle of the step.
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the job.</p> <ul> <li> <p> <code>PENDING</code>–pending and waiting for resources.</p> </li> <li> <p> <code>READY</code>–ready to process.</p> </li> <li> <p> <code>ASSIGNED</code>–assigned and will run next on a worker.</p> </li> <li> <p> <code>SCHEDULED</code>–scheduled to run on a worker.</p> </li> <li> <p> <code>INTERRUPTING</code>–being interrupted.</p> </li> <li> <p> <code>RUNNING</code>–running on a worker.</p> </li> <li> <p> <code>SUSPENDED</code>–the task is suspended.</p> </li> <li> <p> <code>CANCELED</code>–the task has been canceled.</p> </li> <li> <p> <code>FAILED</code>–the task has failed.</p> </li> <li> <p> <code>SUCCEEDED</code>–the task has succeeded.</p> </li> </ul>
   * @public
   */
  taskRunStatus: TaskRunStatus | undefined;

  /**
   * The number of tasks running on the job.
   * @public
   */
  taskRunStatusCounts: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The total number of times tasks from the step failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The task status to update the job's tasks to.
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The number of dependencies for the step.
   * @public
   */
  dependencyCounts?: DependencyCounts | undefined;
}

/**
 * @public
 */
export interface ListStepsResponse {
  /**
   * The steps on the list.
   * @public
   */
  steps: StepSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTasksRequest {
  /**
   * The farm ID connected to the tasks.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID connected to the tasks.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID for the tasks.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID for the tasks.
   * @public
   */
  stepId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a task.
 * @public
 */
export interface TaskSummary {
  /**
   * The task ID.
   * @public
   */
  taskId: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The run status of the task.
   * @public
   */
  runStatus: TaskRunStatus | undefined;

  /**
   * The run status on which the started.
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * The number of times that the task failed and was retried.
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The latest session action ID for the task.
   * @public
   */
  latestSessionActionId?: string | undefined;

  /**
   * The task parameters.
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;
}

/**
 * @public
 */
export interface ListTasksResponse {
  /**
   * Tasks for the job.
   * @public
   */
  tasks: TaskSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * The farm ID of the job to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the job to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to update.
   * @public
   */
  jobId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The task status to update the job's tasks to.
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * The updated job priority.
   * @public
   */
  priority?: number | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries for a job.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * <p>The status of a job in its lifecycle. When you change the status of the job to <code>ARCHIVED</code>, the job can't be scheduled or archived.</p> <important> <p>An archived jobs and its steps and tasks are deleted after 120 days. The job can't be recovered.</p> </important>
   * @public
   */
  lifecycleStatus?: UpdateJobLifecycleStatus | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.
   *
   * You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no maximum number of workers.
   *
   * If you don't specify the <code>maxWorkerCount</code>, the default is -1.
   *
   * The maximum number of workers that can process tasks in the job.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The updated job name.
   * @public
   */
  name?: string | undefined;

  /**
   * The updated job description.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobResponse {}

/**
 * @public
 */
export interface UpdateSessionRequest {
  /**
   * The farm ID to update in the session.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to update in the session.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to update in the session.
   * @public
   */
  jobId: string | undefined;

  /**
   * The session ID to update.
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The life cycle status to update in the session.
   * @public
   */
  targetLifecycleStatus: SessionLifecycleTargetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSessionResponse {}

/**
 * @public
 */
export interface UpdateStepRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to update.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID to update.
   * @public
   */
  stepId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The task status to update the step's tasks to.
   * @public
   */
  targetTaskRunStatus: StepTargetTaskRunStatus | undefined;
}

/**
 * @public
 */
export interface UpdateStepResponse {}

/**
 * @public
 */
export interface UpdateTaskRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The job ID to update.
   * @public
   */
  jobId: string | undefined;

  /**
   * The step ID to update.
   * @public
   */
  stepId: string | undefined;

  /**
   * The task ID to update.
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The run status with which to start the task.
   * @public
   */
  targetRunStatus: TaskTargetRunStatus | undefined;
}

/**
 * @public
 */
export interface UpdateTaskResponse {}

/**
 * @public
 */
export interface ListQueueEnvironmentsRequest {
  /**
   * The farm ID for the queue environment list.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the queue environment list.
   * @public
   */
  queueId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of a queue environment.
 * @public
 */
export interface QueueEnvironmentSummary {
  /**
   * The queue environment ID.
   * @public
   */
  queueEnvironmentId: string | undefined;

  /**
   * The name of the queue environment.
   * @public
   */
  name: string | undefined;

  /**
   * The queue environment's priority.
   * @public
   */
  priority: number | undefined;
}

/**
 * @public
 */
export interface ListQueueEnvironmentsResponse {
  /**
   * The environments to include in the queue environments list.
   * @public
   */
  environments: QueueEnvironmentSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueMembersRequest {
  /**
   * The farm ID for the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to include on the list.
   * @public
   */
  queueId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a queue member.
 * @public
 */
export interface QueueMember {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;

  /**
   * The principal ID of the queue member.
   * @public
   */
  principalId: string | undefined;

  /**
   * The principal type of the queue member.
   * @public
   */
  principalType: DeadlinePrincipalType | undefined;

  /**
   * The identity store ID.
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * The queue member's membership level.
   * @public
   */
  membershipLevel: MembershipLevel | undefined;
}

/**
 * @public
 */
export interface ListQueueMembersResponse {
  /**
   * The members on the list.
   * @public
   */
  members: QueueMember[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * The farm ID of the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The principal IDs to include in the list of queues.
   * @public
   */
  principalId?: string | undefined;

  /**
   * <p>The status of the queues listed.</p> <ul> <li> <p> <code>ACTIVE</code>–The queues are active.</p> </li> <li> <p> <code>SCHEDULING</code>–The queues are scheduling.</p> </li> <li> <p> <code>SCHEDULING_BLOCKED</code>–The queue scheduling is blocked for these queues.</p> </li> </ul>
   * @public
   */
  status?: QueueStatus | undefined;
}

/**
 * The details of a queue summary.
 * @public
 */
export interface QueueSummary {
  /**
   * The farm ID.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;

  /**
   * <p>The display name of the queue summary to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * That status of the queue.
   * @public
   */
  status: QueueStatus | undefined;

  /**
   * The default action taken on a queue summary if a budget wasn't configured.
   * @public
   */
  defaultBudgetAction: DefaultQueueBudgetAction | undefined;

  /**
   * The reason the queue is blocked, if applicable.
   * @public
   */
  blockedReason?: QueueBlockedReason | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * The queues on the list.
   * @public
   */
  queues: QueueSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStorageProfilesForQueueRequest {
  /**
   * The farm ID of the queue's storage profile.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the storage profile.
   * @public
   */
  queueId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListStorageProfilesForQueueResponse {
  /**
   * The storage profiles in the queue.
   * @public
   */
  storageProfiles: StorageProfileSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueRequest {
  /**
   * The farm ID to update in the queue.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The idempotency token to update in the queue.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the queue to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the queue to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The default action to take for a queue update if a budget isn't configured.
   * @public
   */
  defaultBudgetAction?: DefaultQueueBudgetAction | undefined;

  /**
   * The job attachment settings to update for the queue.
   * @public
   */
  jobAttachmentSettings?: JobAttachmentSettings | undefined;

  /**
   * The IAM role ARN that's used to run jobs from this queue.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Update the jobs in the queue to run as a specified POSIX user.
   * @public
   */
  jobRunAsUser?: JobRunAsUser | undefined;

  /**
   * The required file system location names to add to the queue.
   * @public
   */
  requiredFileSystemLocationNamesToAdd?: string[] | undefined;

  /**
   * The required file system location names to remove from the queue.
   * @public
   */
  requiredFileSystemLocationNamesToRemove?: string[] | undefined;

  /**
   * The storage profile IDs to add.
   * @public
   */
  allowedStorageProfileIdsToAdd?: string[] | undefined;

  /**
   * The storage profile ID to remove.
   * @public
   */
  allowedStorageProfileIdsToRemove?: string[] | undefined;

  /**
   * The scheduling configuration for the queue. This configuration determines how workers are assigned to jobs in the queue.
   *
   * When updating the scheduling configuration, the entire configuration is replaced.
   *
   * In-progress tasks run to completion before the new scheduling configuration takes effect.
   *
   * @public
   */
  schedulingConfiguration?: SchedulingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateQueueResponse {}

/**
 * @public
 */
export interface UpdateQueueEnvironmentRequest {
  /**
   * The farm ID of the queue environment to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID of the queue environment to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The queue environment ID to update.
   * @public
   */
  queueEnvironmentId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The priority to update.
   * @public
   */
  priority?: number | undefined;

  /**
   * The template type to update.
   * @public
   */
  templateType?: EnvironmentTemplateType | undefined;

  /**
   * The template to update.
   * @public
   */
  template?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueEnvironmentResponse {}

/**
 * @public
 */
export interface UpdateFarmRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * <p>The display name of the farm to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the farm to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * A multiplier applied to the farm's calculated costs for usage data and budget tracking. A value less than 1 represents a discount, a value greater than 1 represents a premium, and a value of 1 represents no adjustment.
   * @public
   */
  costScaleFactor?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFarmResponse {}

/**
 * @public
 */
export interface UpdateLimitRequest {
  /**
   * The unique identifier of the farm that contains the limit.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the limit to update.
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>The new display name of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The new description of the limit.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  description?: string | undefined;

  /**
   * The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.
   *
   * If more than the new maximum number is currently in use, running jobs finish but no new jobs are started until the number of resources in use is below the new maximum number.
   *
   * The <code>maxCount</code> must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.
   *
   * @public
   */
  maxCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateLimitResponse {}

/**
 * @public
 */
export interface UpdateStorageProfileRequest {
  /**
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The storage profile ID to update.
   * @public
   */
  storageProfileId: string | undefined;

  /**
   * The unique token which the server uses to recognize retries of the same request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The display name of the storage profile to update.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * The OS system to update.
   * @public
   */
  osFamily?: StorageProfileOperatingSystemFamily | undefined;

  /**
   * The file system location names to add.
   * @public
   */
  fileSystemLocationsToAdd?: FileSystemLocation[] | undefined;

  /**
   * The file system location names to remove.
   * @public
   */
  fileSystemLocationsToRemove?: FileSystemLocation[] | undefined;
}

/**
 * @public
 */
export interface UpdateStorageProfileResponse {}

/**
 * @public
 */
export interface GetQueueFleetAssociationRequest {
  /**
   * The farm ID of the farm that contains the queue-fleet association.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID for the queue-fleet association.
   * @public
   */
  queueId: string | undefined;

  /**
   * The fleet ID for the queue-fleet association.
   * @public
   */
  fleetId: string | undefined;
}

/**
 * @public
 */
export interface GetQueueFleetAssociationResponse {
  /**
   * The queue ID for the queue-fleet association.
   * @public
   */
  queueId: string | undefined;

  /**
   * The fleet ID for the queue-fleet association.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The status of the queue-fleet association.
   * @public
   */
  status: QueueFleetAssociationStatus | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetQueueLimitAssociationRequest {
  /**
   * The unique identifier of the farm that contains the associated queue and limit.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the queue associated with the limit.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique identifier of the limit associated with the queue.
   * @public
   */
  limitId: string | undefined;
}

/**
 * @public
 */
export interface GetQueueLimitAssociationResponse {
  /**
   * The unique identifier of the queue associated with the limit.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique identifier of the limit associated with the queue.
   * @public
   */
  limitId: string | undefined;

  /**
   * The current status of the limit.
   * @public
   */
  status: QueueLimitAssociationStatus | undefined;

  /**
   * The Unix timestamp of the date and time that the association was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user identifier of the person that created the association.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Unix timestamp of the date and time that the association was last updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user identifier of the person that last updated the association.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionsStatisticsAggregationRequest {
  /**
   * The identifier of the farm to include in the statistics. This should be the same as the farm ID used in the call to the <code>StartSessionsStatisticsAggregation</code> operation.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier returned by the <code>StartSessionsStatisticsAggregation</code> operation that identifies the aggregated statistics.
   * @public
   */
  aggregationId: string | undefined;
}

/**
 * The minimum, maximum, average, and sum.
 * @public
 */
export interface Stats {
  /**
   * The minimum of the usage statistics.
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum among the usage statistics.
   * @public
   */
  max?: number | undefined;

  /**
   * The average of the usage statistics.
   * @public
   */
  avg?: number | undefined;

  /**
   * The sum of the usage statistics.
   * @public
   */
  sum?: number | undefined;
}

/**
 * A list of statistics for a session.
 * @public
 */
export interface Statistics {
  /**
   * The queue ID.
   * @public
   */
  queueId?: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId?: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId?: string | undefined;

  /**
   * The job name.
   * @public
   */
  jobName?: string | undefined;

  /**
   * The user ID.
   * @public
   */
  userId?: string | undefined;

  /**
   * The type of usage for the statistics.
   * @public
   */
  usageType?: UsageType | undefined;

  /**
   * The licensed product.
   * @public
   */
  licenseProduct?: string | undefined;

  /**
   * The type of instance.
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The number of instances in a list of statistics.
   * @public
   */
  count: number | undefined;

  /**
   * How the statistics should appear in USD. Options include: minimum, maximum, average or sum.
   * @public
   */
  costInUsd: Stats | undefined;

  /**
   * The total aggregated runtime.
   * @public
   */
  runtimeInSeconds: Stats | undefined;

  /**
   * The start time for the aggregation.
   * @public
   */
  aggregationStartTime?: Date | undefined;

  /**
   * The end time for the aggregation.
   * @public
   */
  aggregationEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionsStatisticsAggregationResponse {
  /**
   * The statistics for the specified fleets or queues.
   * @public
   */
  statistics?: Statistics[] | undefined;

  /**
   * The status of the aggregated results. An aggregation may fail or time out if the results are too large. If this happens, you can call the <code>StartSessionsStatisticsAggregation</code> operation after you reduce the aggregation time frame, reduce the number of queues or fleets in the aggregation, or increase the period length.
   *
   * If you call the <code>StartSessionsStatisticsAggregation </code> operation when the status is <code>IN_PROGRESS</code>, you will receive a <code>ThrottlingException</code>.
   *
   * @public
   */
  status: SessionsStatisticsAggregationStatus | undefined;

  /**
   * A message that describes the status.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseEndpointRequest {
  /**
   * The license endpoint ID of the license endpoint to delete.
   * @public
   */
  licenseEndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseEndpointResponse {}

/**
 * @public
 */
export interface DeleteMeteredProductRequest {
  /**
   * The ID of the license endpoint from which to remove the metered product.
   * @public
   */
  licenseEndpointId: string | undefined;

  /**
   * The product ID to remove from the license endpoint.
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMeteredProductResponse {}

/**
 * @public
 */
export interface GetLicenseEndpointRequest {
  /**
   * The license endpoint ID.
   * @public
   */
  licenseEndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetLicenseEndpointResponse {
  /**
   * The license endpoint ID.
   * @public
   */
  licenseEndpointId: string | undefined;

  /**
   * The status of the license endpoint.
   * @public
   */
  status: LicenseEndpointStatus | undefined;

  /**
   * The status message of the license endpoint.
   * @public
   */
  statusMessage: string | undefined;

  /**
   * The VPC (virtual private cloud) ID associated with the license endpoint.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The DNS name.
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The subnet IDs.
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security group IDs for the license endpoint.
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLicenseEndpointsRequest {
  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details for a license endpoint.
 * @public
 */
export interface LicenseEndpointSummary {
  /**
   * The license endpoint ID.
   * @public
   */
  licenseEndpointId?: string | undefined;

  /**
   * The status of the license endpoint.
   * @public
   */
  status?: LicenseEndpointStatus | undefined;

  /**
   * The status message of the license endpoint.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The VPC (virtual private cloud) ID associated with the license endpoint.
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseEndpointsResponse {
  /**
   * The license endpoints.
   * @public
   */
  licenseEndpoints: LicenseEndpointSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMeteredProductsRequest {
  /**
   * The license endpoint ID to include on the list of metered products.
   * @public
   */
  licenseEndpointId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The details of a metered product.
 * @public
 */
export interface MeteredProductSummary {
  /**
   * The product ID.
   * @public
   */
  productId: string | undefined;

  /**
   * The family to which the metered product belongs.
   * @public
   */
  family: string | undefined;

  /**
   * The vendor.
   * @public
   */
  vendor: string | undefined;

  /**
   * The port on which the metered product should run.
   * @public
   */
  port: number | undefined;
}

/**
 * @public
 */
export interface ListMeteredProductsResponse {
  /**
   * The metered products to list.
   * @public
   */
  meteredProducts: MeteredProductSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutMeteredProductRequest {
  /**
   * The license endpoint ID to add to the metered product.
   * @public
   */
  licenseEndpointId: string | undefined;

  /**
   * The product ID to add to the metered product.
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
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAvailableMeteredProductsResponse {
  /**
   * The metered products.
   * @public
   */
  meteredProducts: MeteredProductSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembershipsRequest {
  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ID of the IAM Identity Center principal whose Deadline Cloud resource memberships you want to list.
   * @public
   */
  principalId: string | undefined;

  /**
   * The identity store ID that contains the principal. This parameter is required for callers that do not use a monitor session.
   * @public
   */
  identityStoreId?: string | undefined;

  /**
   * The Region of the IAM Identity Center instance. If not provided, the service defaults to the Amazon Web Services Region in which you make the request.
   * @public
   */
  identityCenterRegion?: string | undefined;

  /**
   * The resource types to include when listing the principal's memberships. If not specified, memberships for all supported resource types are returned.
   * @public
   */
  resourceTypes?: MembershipResourceType[] | undefined;
}

/**
 * A membership record for a principal on a single Deadline Cloud resource. The summary identifies the resource that the principal is a member of and the principal's membership level for that resource.
 * @public
 */
export type MembershipSummary =
  | MembershipSummary._FarmMember
  | MembershipSummary._FleetMember
  | MembershipSummary._JobMember
  | MembershipSummary._QueueMember
  | MembershipSummary.$UnknownMember;

/**
 * @public
 */
export namespace MembershipSummary {
  /**
   * A membership on a farm.
   * @public
   */
  export interface _FarmMember {
    farm: FarmMember;
    queue?: never;
    fleet?: never;
    job?: never;
    $unknown?: never;
  }

  /**
   * A membership on a queue.
   * @public
   */
  export interface _QueueMember {
    farm?: never;
    queue: QueueMember;
    fleet?: never;
    job?: never;
    $unknown?: never;
  }

  /**
   * A membership on a fleet.
   * @public
   */
  export interface _FleetMember {
    farm?: never;
    queue?: never;
    fleet: FleetMember;
    job?: never;
    $unknown?: never;
  }

  /**
   * A membership on a job.
   * @public
   */
  export interface _JobMember {
    farm?: never;
    queue?: never;
    fleet?: never;
    job: JobMember;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    farm?: never;
    queue?: never;
    fleet?: never;
    job?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    farm: (value: FarmMember) => T;
    queue: (value: QueueMember) => T;
    fleet: (value: FleetMember) => T;
    job: (value: JobMember) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListMembershipsResponse {
  /**
   * The memberships associated with the specified principal.
   * @public
   */
  memberships: MembershipSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueFleetAssociationsRequest {
  /**
   * The farm ID for the queue-fleet association list.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The queue ID for the queue-fleet association list.
   * @public
   */
  queueId?: string | undefined;

  /**
   * The fleet ID for the queue-fleet association list.
   * @public
   */
  fleetId?: string | undefined;
}

/**
 * The details of a queue-fleet association.
 * @public
 */
export interface QueueFleetAssociationSummary {
  /**
   * The queue ID.
   * @public
   */
  queueId: string | undefined;

  /**
   * The fleet ID.
   * @public
   */
  fleetId: string | undefined;

  /**
   * <p>The status of task scheduling in the queue-fleet association.</p> <ul> <li> <p> <code>ACTIVE</code>–Association is active.</p> </li> <li> <p> <code>STOP_SCHEDULING_AND_COMPLETE_TASKS</code>–Association has stopped scheduling new tasks and is completing current tasks.</p> </li> <li> <p> <code>STOP_SCHEDULING_AND_CANCEL_TASKS</code>–Association has stopped scheduling new tasks and is canceling current tasks.</p> </li> <li> <p> <code>STOPPED</code>–Association has been stopped.</p> </li> </ul>
   * @public
   */
  status: QueueFleetAssociationStatus | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueFleetAssociationsResponse {
  /**
   * The queue-fleet associations on the list.
   * @public
   */
  queueFleetAssociations: QueueFleetAssociationSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueLimitAssociationsRequest {
  /**
   * The unique identifier of the farm that contains the limits and associations.
   * @public
   */
  farmId: string | undefined;

  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of associations to return in each page of results.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies that the operation should return only the queue limit associations for the specified queue. If you specify both the <code>queueId</code> and the <code>limitId</code>, only the specified limit is returned if it exists.
   * @public
   */
  queueId?: string | undefined;

  /**
   * Specifies that the operation should return only the queue limit associations for the specified limit. If you specify both the <code>queueId</code> and the <code>limitId</code>, only the specified limit is returned if it exists.
   * @public
   */
  limitId?: string | undefined;
}

/**
 * Provides information about the association between a queue and a limit.
 * @public
 */
export interface QueueLimitAssociationSummary {
  /**
   * The unique identifier of the queue in the association.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique identifier of the limit in the association.
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>The status of task scheduling in the queue-limit association.</p> <ul> <li> <p> <code>ACTIVE</code> - Association is active.</p> </li> <li> <p> <code>STOP_LIMIT_USAGE_AND_COMPLETE_TASKS</code> - Association has stopped scheduling new tasks and is completing current tasks.</p> </li> <li> <p> <code>STOP_LIMIT_USAGE_AND_CANCEL_TASKS</code> - Association has stopped scheduling new tasks and is canceling current tasks.</p> </li> <li> <p> <code>STOPPED</code> - Association has been stopped.</p> </li> </ul>
   * @public
   */
  status: QueueLimitAssociationStatus | undefined;

  /**
   * The Unix timestamp of the date and time that the association was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user identifier of the person that created the association.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The Unix timestamp of the date and time that the association was last updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user identifier of the person that updated the association.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListQueueLimitAssociationsResponse {
  /**
   * A list of associations between limits and queues in the farm specified in the request.
   * @public
   */
  queueLimitAssociations: QueueLimitAssociationSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN to list tags for.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorRequest {
  /**
   * The unique identifier of the monitor to delete. This ID is returned by the <code>CreateMonitor</code> operation, and is included in the response to the <code>GetMonitor</code> operation.
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
   * The unique identifier for the monitor. This ID is returned by the <code>CreateMonitor</code> operation.
   * @public
   */
  monitorId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorResponse {
  /**
   * The unique identifier for the monitor.
   * @public
   */
  monitorId: string | undefined;

  /**
   * <p>The name used to identify the monitor on the Deadline Cloud console.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The subdomain used for the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
   * @public
   */
  subdomain: string | undefined;

  /**
   * The complete URL of the monitor. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
   * @public
   */
  url: string | undefined;

  /**
   * The Amazon Resource Name of the IAM role for the monitor. Users of the monitor use this role to access Deadline Cloud resources.
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon Resource Name of the IAM Identity Center instance responsible for authenticating monitor users.
   * @public
   */
  identityCenterInstanceArn: string | undefined;

  /**
   * The Region where IAM Identity Center is enabled.
   * @public
   */
  identityCenterRegion?: string | undefined;

  /**
   * The Amazon Resource Name that the IAM Identity Center assigned to the monitor when it was created.
   * @public
   */
  identityCenterApplicationArn: string | undefined;

  /**
   * The UNIX timestamp of the date and time that the monitor was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user name of the person that created the monitor.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The UNIX timestamp of the last date and time that the monitor was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user name of the person that last updated the monitor.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorSettingsRequest {
  /**
   * The unique identifier of the monitor. This ID is returned by the <code>CreateMonitor</code> operation, and is included in the response to the <code>ListMonitors</code> operation.
   * @public
   */
  monitorId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorSettingsResponse {
  /**
   * The monitor settings as key-value pairs.
   * @public
   */
  settings: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsRequest {
  /**
   * The token for the next set of results, or <code>null</code> to start from the beginning.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides information about a monitor in Deadline Cloud.
 * @public
 */
export interface MonitorSummary {
  /**
   * The unique identifier for the monitor.
   * @public
   */
  monitorId: string | undefined;

  /**
   * <p>The name of the monitor that displays on the Deadline Cloud console.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName: string | undefined;

  /**
   * The subdomain used for the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
   * @public
   */
  subdomain: string | undefined;

  /**
   * The complete URL of the monitor. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
   * @public
   */
  url: string | undefined;

  /**
   * The Amazon Resource Name of the IAM role for the monitor. Users of the monitor use this role to access Deadline Cloud resources.
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon Resource Name of the IAM Identity Center instance responsible for authenticating monitor users.
   * @public
   */
  identityCenterInstanceArn: string | undefined;

  /**
   * The Region where IAM Identity Center is enabled.
   * @public
   */
  identityCenterRegion?: string | undefined;

  /**
   * The Amazon Resource Name that the IAM Identity Center assigned to the monitor when it was created.
   * @public
   */
  identityCenterApplicationArn: string | undefined;

  /**
   * The UNIX timestamp of the date and time that the monitor was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user name of the person that created the monitor.
   * @public
   */
  createdBy: string | undefined;

  /**
   * The UNIX timestamp of the date and time that the monitor was last updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user name of the person that last updated the monitor.
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorsResponse {
  /**
   * A list of <code>MonitorSummary</code> objects that describe your monitors in the Deadline Cloud.
   * @public
   */
  monitors: MonitorSummary[] | undefined;

  /**
   * If Deadline Cloud returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 <code>ValidationException</code> error.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorRequest {
  /**
   * The unique identifier of the monitor to update.
   * @public
   */
  monitorId: string | undefined;

  /**
   * The new value of the subdomain to use when forming the monitor URL.
   * @public
   */
  subdomain?: string | undefined;

  /**
   * <p>The new value to use for the monitor's display name.</p> <important> <p>This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</p> </important>
   * @public
   */
  displayName?: string | undefined;

  /**
   * The Amazon Resource Name of the new IAM role to use with the monitor.
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorResponse {}

/**
 * @public
 */
export interface UpdateMonitorSettingsRequest {
  /**
   * The unique identifier of the monitor to update settings for.
   * @public
   */
  monitorId: string | undefined;

  /**
   * The monitor settings to update as key-value pairs. Keys present in the request are upserted; keys absent are left unchanged. Send an empty string value to delete a key.
   * @public
   */
  settings: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorSettingsResponse {}

/**
 * The details of a filtered search for parameters.
 * @public
 */
export interface ParameterFilterExpression {
  /**
   * The name of the parameter to filter on.
   * @public
   */
  name: string | undefined;

  /**
   * The type of comparison to use to filter results.
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * The parameter's value.
   * @public
   */
  value: string | undefined;
}

/**
 * Searches for a particular search term.
 * @public
 */
export interface SearchTermFilterExpression {
  /**
   * The term to search for.
   * @public
   */
  searchTerm: string | undefined;

  /**
   * <p>Specifies how Deadline Cloud matches your search term in the results. If you don't specify a <code>matchType</code> the default is <code>FUZZY_MATCH</code>.</p> <ul> <li> <p> <code>FUZZY_MATCH</code> - Matches if a portion of the search term is found in the result.</p> </li> <li> <p> <code>CONTAINS</code> - Matches if the exact search term is contained in the result.</p> </li> </ul>
   * @public
   */
  matchType?: SearchTermMatchingType | undefined;
}

/**
 * Searches for a particular string.
 * @public
 */
export interface StringFilterExpression {
  /**
   * The field name to search.
   * @public
   */
  name: string | undefined;

  /**
   * The type of comparison to use for this search.
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * The string to search for.
   * @public
   */
  value: string | undefined;
}

/**
 * Searches for a particular list of strings.
 * @public
 */
export interface StringListFilterExpression {
  /**
   * The field name to search.
   * @public
   */
  name: string | undefined;

  /**
   * The type of comparison to use for this search.
   * @public
   */
  operator: ComparisonOperator | undefined;

  /**
   * The list of string values to search for.
   * @public
   */
  values: string[] | undefined;
}

/**
 * The field sorting order and name of the field.
 * @public
 */
export interface FieldSortExpression {
  /**
   * The sort order for the field.
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The name of the field.
   * @public
   */
  name: string | undefined;
}

/**
 * Organizes parameters according to your specifications.
 * @public
 */
export interface ParameterSortExpression {
  /**
   * The sort order for the parameter.
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The parameter name to sort by.
   * @public
   */
  name: string | undefined;
}

/**
 * Allows setting a specific user's job to run first.
 * @public
 */
export interface UserJobsFirst {
  /**
   * The user's ID.
   * @public
   */
  userIdentityId: string | undefined;
}

/**
 * The resources to search.
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
   * Options for sorting a particular user's jobs first.
   * @public
   */
  export interface UserJobsFirstMember {
    userJobsFirst: UserJobsFirst;
    fieldSort?: never;
    parameterSort?: never;
    $unknown?: never;
  }

  /**
   * Options for sorting by a field.
   * @public
   */
  export interface FieldSortMember {
    userJobsFirst?: never;
    fieldSort: FieldSortExpression;
    parameterSort?: never;
    $unknown?: never;
  }

  /**
   * Options for sorting by a parameter.
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
 * The details of a job search.
 * @public
 */
export interface JobSearchSummary {
  /**
   * The job ID.
   * @public
   */
  jobId?: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId?: string | undefined;

  /**
   * The job name.
   * @public
   */
  name?: string | undefined;

  /**
   * The life cycle status.
   * @public
   */
  lifecycleStatus?: JobLifecycleStatus | undefined;

  /**
   * The life cycle status message.
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the job.</p> <ul> <li> <p> <code>PENDING</code>–pending and waiting for resources.</p> </li> <li> <p> <code>READY</code>–ready to be processed.</p> </li> <li> <p> <code>ASSIGNED</code>–assigned and will run next on a worker.</p> </li> <li> <p> <code>SCHEDULED</code>–scheduled to be run on a worker.</p> </li> <li> <p> <code>INTERRUPTING</code>–being interrupted.</p> </li> <li> <p> <code>RUNNING</code>–running on a worker.</p> </li> <li> <p> <code>SUSPENDED</code>–the task is suspended.</p> </li> <li> <p> <code>CANCELED</code>–the task has been canceled.</p> </li> <li> <p> <code>FAILED</code>–the task has failed.</p> </li> <li> <p> <code>SUCCEEDED</code>–the task has succeeded.</p> </li> </ul>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * The task status to update the job's tasks to.
   * @public
   */
  targetTaskRunStatus?: JobTargetTaskRunStatus | undefined;

  /**
   * The number of tasks running on the job.
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The total number of times tasks from the job failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The job priority.
   * @public
   */
  priority?: number | undefined;

  /**
   * The number of task failures before the job stops running and is marked as <code>FAILED</code>.
   * @public
   */
  maxFailedTasksCount?: number | undefined;

  /**
   * The maximum number of retries for a job.
   * @public
   */
  maxRetriesPerTask?: number | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The job parameters.
   * @public
   */
  jobParameters?: Record<string, JobParameter> | undefined;

  /**
   * The maximum number of worker hosts that can concurrently process a job. When the <code>maxWorkerCount</code> is reached, no more workers will be assigned to process the job, even if the fleets assigned to the job's queue has available workers.
   *
   * You can't set the <code>maxWorkerCount</code> to 0. If you set it to -1, there is no maximum number of workers.
   *
   * If you don't specify the <code>maxWorkerCount</code>, the default is -1.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The job ID for the source job.
   * @public
   */
  sourceJobId?: string | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * The jobs in the search.
   * @public
   */
  jobs: JobSearchSummary[] | undefined;

  /**
   * The next item offset for the search results.
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * The total number of results in the search.
   * @public
   */
  totalResults: number | undefined;
}

/**
 * The details of a step search.
 * @public
 */
export interface StepSearchSummary {
  /**
   * The step ID.
   * @public
   */
  stepId?: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId?: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId?: string | undefined;

  /**
   * The step name.
   * @public
   */
  name?: string | undefined;

  /**
   * The life cycle status.
   * @public
   */
  lifecycleStatus?: StepLifecycleStatus | undefined;

  /**
   * The life cycle status message.
   * @public
   */
  lifecycleStatusMessage?: string | undefined;

  /**
   * <p>The task run status for the job.</p> <ul> <li> <p> <code>PENDING</code>–pending and waiting for resources.</p> </li> <li> <p> <code>READY</code>–ready to be processed.</p> </li> <li> <p> <code>ASSIGNED</code>–assigned and will run next on a worker.</p> </li> <li> <p> <code>SCHEDULED</code>–scheduled to be run on a worker.</p> </li> <li> <p> <code>INTERRUPTING</code>–being interrupted.</p> </li> <li> <p> <code>RUNNING</code>–running on a worker.</p> </li> <li> <p> <code>SUSPENDED</code>–the task is suspended.</p> </li> <li> <p> <code>CANCELED</code>–the task has been canceled.</p> </li> <li> <p> <code>FAILED</code>–the task has failed.</p> </li> <li> <p> <code>SUCCEEDED</code>–the task has succeeded.</p> </li> </ul>
   * @public
   */
  taskRunStatus?: TaskRunStatus | undefined;

  /**
   * The task status to update the job's tasks to.
   * @public
   */
  targetTaskRunStatus?: StepTargetTaskRunStatus | undefined;

  /**
   * The number of tasks running on the job.
   * @public
   */
  taskRunStatusCounts?: Partial<Record<TaskRunStatus, number>> | undefined;

  /**
   * The total number of times tasks from the step failed and were retried.
   * @public
   */
  taskFailureRetryCount?: number | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The parameters and combination expressions for the search.
   * @public
   */
  parameterSpace?: ParameterSpace | undefined;
}

/**
 * @public
 */
export interface SearchStepsResponse {
  /**
   * The steps in the search.
   * @public
   */
  steps: StepSearchSummary[] | undefined;

  /**
   * The next item offset for the search results.
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * The total number of results in the search.
   * @public
   */
  totalResults: number | undefined;
}

/**
 * The details of a task search.
 * @public
 */
export interface TaskSearchSummary {
  /**
   * The task ID.
   * @public
   */
  taskId?: string | undefined;

  /**
   * The step ID.
   * @public
   */
  stepId?: string | undefined;

  /**
   * The job ID.
   * @public
   */
  jobId?: string | undefined;

  /**
   * The queue ID.
   * @public
   */
  queueId?: string | undefined;

  /**
   * The run status of the task.
   * @public
   */
  runStatus?: TaskRunStatus | undefined;

  /**
   * The run status that the task is being updated to.
   * @public
   */
  targetRunStatus?: TaskTargetRunStatus | undefined;

  /**
   * The parameters to search for.
   * @public
   */
  parameters?: Record<string, TaskParameterValue> | undefined;

  /**
   * The number of times that the task failed and was retried.
   * @public
   */
  failureRetryCount?: number | undefined;

  /**
   * The date and time the resource started running.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time the resource ended running.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The latest session action ID for the task.
   * @public
   */
  latestSessionActionId?: string | undefined;
}

/**
 * @public
 */
export interface SearchTasksResponse {
  /**
   * Tasks in the search.
   * @public
   */
  tasks: TaskSearchSummary[] | undefined;

  /**
   * The next item offset for the search results.
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * The total number of results in the search.
   * @public
   */
  totalResults: number | undefined;
}

/**
 * The details of a worker search.
 * @public
 */
export interface WorkerSearchSummary {
  /**
   * The fleet ID.
   * @public
   */
  fleetId?: string | undefined;

  /**
   * The worker ID.
   * @public
   */
  workerId?: string | undefined;

  /**
   * The status of the worker search.
   * @public
   */
  status?: WorkerStatus | undefined;

  /**
   * Provides the Amazon EC2 instance properties of the worker host.
   * @public
   */
  hostProperties?: HostPropertiesResponse | undefined;

  /**
   * The user or system that created this resource.
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time the resource was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user or system that updated this resource.
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The date and time the resource was updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SearchWorkersResponse {
  /**
   * The workers for the search.
   * @public
   */
  workers: WorkerSearchSummary[] | undefined;

  /**
   * The next item offset for the search results.
   * @public
   */
  nextItemOffset?: number | undefined;

  /**
   * The total number of results in the search.
   * @public
   */
  totalResults: number | undefined;
}

/**
 * Specifies the fleet IDs or queue IDs to return statistics. You can specify only fleet IDs or queue IDS, not both.
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
   * One to 10 queue IDs that specify the queues to return statistics for. If you specify the <code>queueIds</code> field, you can't specify the <code>fleetIds</code> field.
   * @public
   */
  export interface QueueIdsMember {
    queueIds: string[];
    fleetIds?: never;
    $unknown?: never;
  }

  /**
   * One to 10 fleet IDs that specify the fleets to return statistics for. If you specify the <code>fleetIds</code> field, you can't specify the <code>queueIds</code> field.
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
   * The identifier of the farm that contains queues or fleets to return statistics for.
   * @public
   */
  farmId: string | undefined;

  /**
   * A list of fleet IDs or queue IDs to gather statistics for.
   * @public
   */
  resourceIds: SessionsStatisticsResources | undefined;

  /**
   * The Linux timestamp of the date and time that the statistics start.
   * @public
   */
  startTime: Date | undefined;

  /**
   * The Linux timestamp of the date and time that the statistics end.
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The time zone to use for the statistics. Use UTC notation such as "UTC+8."</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * The period to aggregate the statistics.
   * @public
   */
  period?: Period | undefined;

  /**
   * The field to use to group the statistics.
   * @public
   */
  groupBy: UsageGroupByField[] | undefined;

  /**
   * One to four statistics to return.
   * @public
   */
  statistics: UsageStatistic[] | undefined;
}

/**
 * @public
 */
export interface StartSessionsStatisticsAggregationResponse {
  /**
   * A unique identifier for the aggregated statistics. Use this identifier with the <code>GetAggregatedStatisticsForSessions</code> operation to return the statistics.
   * @public
   */
  aggregationId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to apply tags to.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
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
   * The ARN of the resource to remove the tag from.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * They keys of the tag.
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
   * The farm ID to update.
   * @public
   */
  farmId: string | undefined;

  /**
   * The queue ID to update.
   * @public
   */
  queueId: string | undefined;

  /**
   * The fleet ID to update.
   * @public
   */
  fleetId: string | undefined;

  /**
   * The status to update.
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
   * The unique identifier of the farm that contains the associated queues and limits.
   * @public
   */
  farmId: string | undefined;

  /**
   * The unique identifier of the queue associated to the limit.
   * @public
   */
  queueId: string | undefined;

  /**
   * The unique identifier of the limit associated to the queue.
   * @public
   */
  limitId: string | undefined;

  /**
   * <p>Sets the status of the limit. You can mark the limit active, or you can stop usage of the limit and either complete existing tasks or cancel any existing tasks immediately. </p>
   * @public
   */
  status: UpdateQueueLimitAssociationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQueueLimitAssociationResponse {}

/**
 * The type of search filter to apply.
 * @public
 */
export type SearchFilterExpression =
  | SearchFilterExpression.DateTimeFilterMember
  | SearchFilterExpression.GroupFilterMember
  | SearchFilterExpression.ParameterFilterMember
  | SearchFilterExpression.SearchTermFilterMember
  | SearchFilterExpression.StringFilterMember
  | SearchFilterExpression.StringListFilterMember
  | SearchFilterExpression.$UnknownMember;

/**
 * @public
 */
export namespace SearchFilterExpression {
  /**
   * Filters based on date and time.
   * @public
   */
  export interface DateTimeFilterMember {
    dateTimeFilter: DateTimeFilterExpression;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter?: never;
    stringListFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * Filters by parameter.
   * @public
   */
  export interface ParameterFilterMember {
    dateTimeFilter?: never;
    parameterFilter: ParameterFilterExpression;
    searchTermFilter?: never;
    stringFilter?: never;
    stringListFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * Filters by a specified search term.
   * @public
   */
  export interface SearchTermFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter: SearchTermFilterExpression;
    stringFilter?: never;
    stringListFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * Filters by a string.
   * @public
   */
  export interface StringFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter: StringFilterExpression;
    stringListFilter?: never;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * Filters by a list of strings.
   * @public
   */
  export interface StringListFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter?: never;
    stringListFilter: StringListFilterExpression;
    groupFilter?: never;
    $unknown?: never;
  }

  /**
   * Filters by group.
   * @public
   */
  export interface GroupFilterMember {
    dateTimeFilter?: never;
    parameterFilter?: never;
    searchTermFilter?: never;
    stringFilter?: never;
    stringListFilter?: never;
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
    stringListFilter?: never;
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
    stringListFilter: (value: StringListFilterExpression) => T;
    groupFilter: (value: SearchGroupedFilterExpressions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The search terms for a resource.
 * @public
 */
export interface SearchGroupedFilterExpressions {
  /**
   * The filters to use for the search.
   * @public
   */
  filters: SearchFilterExpression[] | undefined;

  /**
   * The operators to include in the search.
   * @public
   */
  operator: LogicalOperator | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * The farm ID of the job.
   * @public
   */
  farmId: string | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * The offset for the search results.
   * @public
   */
  itemOffset: number | undefined;

  /**
   * Specifies the number of results to return.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The queue ID to use in the job search.
   * @public
   */
  queueIds: string[] | undefined;
}

/**
 * @public
 */
export interface SearchStepsRequest {
  /**
   * The farm ID to use for the step search.
   * @public
   */
  farmId: string | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * The offset for the search results.
   * @public
   */
  itemOffset: number | undefined;

  /**
   * Specifies the number of results to return.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The queue IDs in the step search.
   * @public
   */
  queueIds: string[] | undefined;

  /**
   * The job ID to use in the step search.
   * @public
   */
  jobId?: string | undefined;
}

/**
 * @public
 */
export interface SearchTasksRequest {
  /**
   * The farm ID of the task.
   * @public
   */
  farmId: string | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * The offset for the search results.
   * @public
   */
  itemOffset: number | undefined;

  /**
   * Specifies the number of results to return.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The queue IDs to include in the search.
   * @public
   */
  queueIds: string[] | undefined;

  /**
   * The job ID for the task search.
   * @public
   */
  jobId?: string | undefined;
}

/**
 * @public
 */
export interface SearchWorkersRequest {
  /**
   * The farm ID in the workers search.
   * @public
   */
  farmId: string | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  filterExpressions?: SearchGroupedFilterExpressions | undefined;

  /**
   * The search terms for a resource.
   * @public
   */
  sortExpressions?: SearchSortExpression[] | undefined;

  /**
   * The offset for the search results.
   * @public
   */
  itemOffset: number | undefined;

  /**
   * Specifies the number of results to return.
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The fleet ID of the workers to search for.
   * @public
   */
  fleetIds: string[] | undefined;
}
