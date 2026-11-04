// smithy-typescript generated code
import type {
  ActionAfterCompletion,
  AssignPublicIp,
  FlexibleTimeWindowMode,
  LaunchType,
  PlacementConstraintType,
  PlacementStrategyType,
  PropagateTags,
  ScheduleGroupState,
  ScheduleState,
} from "./enums";

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the EventBridge Scheduler resource for which you want to view tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Tag to associate with a schedule group.
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tags associated with the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
 *
 * @public
 */
export interface FlexibleTimeWindow {
  /**
   * Determines whether the schedule is invoked within a flexible time window.
   *
   * @public
   */
  Mode: FlexibleTimeWindowMode | undefined;

  /**
   * The maximum time window during which a schedule can be invoked.
   *
   * @public
   */
  MaximumWindowInMinutes?: number | undefined;
}

/**
 * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
 *
 * @public
 */
export interface DeadLetterConfig {
  /**
   * The Amazon Resource Name (ARN) of the SQS queue specified as the destination for the dead-letter queue.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The details of a capacity provider strategy.
 *
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   *
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   *
   * @public
   */
  weight?: number | undefined;

  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of `0` is used.
   *
   * @public
   */
  base?: number | undefined;
}

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
 *
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   *
   * @public
   */
  AssignPublicIp?: AssignPublicIp | undefined;
}

/**
 * Specifies the network configuration for an ECS task.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * Specifies the Amazon VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
   *
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * An object representing a constraint on task placement.
 *
 * @public
 */
export interface PlacementConstraint {
  /**
   * The type of constraint. Use `distinctInstance` to ensure that each task in a particular group is running on a different container instance. Use `memberOf` to restrict the selection to a group of valid candidates.
   *
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. For more information, see [Cluster query language](https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * The task placement strategy for a task or service.
 *
 * @public
 */
export interface PlacementStrategy {
  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   *
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are `instanceId` (or `instanceId`, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as `attribute:ecs.availability-zone`. For the binpack placement strategy, valid values are `cpu` and `memory`. For the random placement strategy, this field is not used.
   *
   * @public
   */
  field?: string | undefined;
}

/**
 * The templated target type for the Amazon ECS [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation.
 *
 * @public
 */
export interface EcsParameters {
  /**
   * The Amazon Resource Name (ARN) of the task definition to use if the event target is an Amazon ECS task.
   *
   * @public
   */
  TaskDefinitionArn: string | undefined;

  /**
   * The number of tasks to create based on `TaskDefinition`. The default is `1`.
   *
   * @public
   */
  TaskCount?: number | undefined;

  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  LaunchType?: LaunchType | undefined;

  /**
   * This structure specifies the network configuration for an ECS task.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * Specifies an ECS task group for the task. The maximum length is 255 characters.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The capacity provider strategy to use for the task.
   *
   * @public
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon ECS Developer Guide*.
   *
   * @public
   */
  EnableECSManagedTags?: boolean | undefined;

  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   *
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
   * @public
   */
  PlacementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The task placement strategy for a task or service.
   *
   * @public
   */
  PlacementStrategy?: PlacementStrategy[] | undefined;

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use Amazon ECS's [`TagResource`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
   *
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * The reference ID to use for the task.
   *
   * @public
   */
  ReferenceId?: string | undefined;

  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information, see [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) in the *Amazon ECS API Reference*.
   *
   * @public
   */
  Tags?: Record<string, string>[] | undefined;
}

/**
 * The templated target type for the EventBridge [`PutEvents`](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation.
 *
 * @public
 */
export interface EventBridgeParameters {
  /**
   * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   *
   * @public
   */
  DetailType: string | undefined;

  /**
   * The source of the event.
   *
   * @public
   */
  Source: string | undefined;
}

/**
 * The templated target type for the Amazon Kinesis [`PutRecord`](kinesis/latest/APIReference/API_PutRecord.html) API operation.
 *
 * @public
 */
export interface KinesisParameters {
  /**
   * Specifies the shard to which EventBridge Scheduler sends the event. For more information, see [Amazon Kinesis Data Streams terminology and concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html) in the *Amazon Kinesis Streams Developer Guide*.
   *
   * @public
   */
  PartitionKey: string | undefined;
}

/**
 * A `RetryPolicy` object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
 *
 * @public
 */
export interface RetryPolicy {
  /**
   * The maximum amount of time, in seconds, to continue to make retry attempts.
   *
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is reached.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;
}

/**
 * The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline.
 *
 * @public
 */
export interface SageMakerPipelineParameter {
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The templated target type for the Amazon SageMaker [`StartPipelineExecution`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation.
 *
 * @public
 */
export interface SageMakerPipelineParameters {
  /**
   * List of parameter names and values to use when executing the SageMaker Model Building Pipeline.
   *
   * @public
   */
  PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}

/**
 * The templated target type for the Amazon SQS [`SendMessage`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see [Using the Amazon SQS message deduplication ID](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the *Amazon SQS Developer Guide*.
 *
 * @public
 */
export interface SqsParameters {
  /**
   * The FIFO message group ID to use as the target.
   *
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
 *
 * @public
 */
export interface Target {
  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * A `RetryPolicy` object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
   *
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.
   *
   * @public
   */
  Input?: string | undefined;

  /**
   * The templated target type for the Amazon ECS [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation.
   *
   * @public
   */
  EcsParameters?: EcsParameters | undefined;

  /**
   * The templated target type for the EventBridge [`PutEvents`](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation.
   *
   * @public
   */
  EventBridgeParameters?: EventBridgeParameters | undefined;

  /**
   * The templated target type for the Amazon Kinesis [`PutRecord`](kinesis/latest/APIReference/API_PutRecord.html) API operation.
   *
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * The templated target type for the Amazon SageMaker [`StartPipelineExecution`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation.
   *
   * @public
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters | undefined;

  /**
   * The templated target type for the Amazon SQS [`SendMessage`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see [Using the Amazon SQS message deduplication ID](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the *Amazon SQS Developer Guide*.
   *
   * @public
   */
  SqsParameters?: SqsParameters | undefined;
}

/**
 * @public
 */
export interface CreateScheduleInput {
  /**
   * The name of the schedule that you are creating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The expression that defines when the schedule runs. The following formats are supported.
   *
   * - `at` expression - `at(yyyy-mm-ddThh:mm:ss)`
   * - `rate` expression - `rate(value unit)`
   * - `cron` expression - `cron(fields)`
   *
   * You can use `at` expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use `rate` and `cron` expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month.
   *
   * A `cron` expression consists of six fields separated by white spaces: `(minutes hours day_of_month month day_of_week year)`.
   *
   * A `rate` expression consists of a *value* as a positive integer, and a *unit* with the following options: `minute` | `minutes` | `hour` | `hours` | `day` | `days`
   *
   * For more information and examples, see [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html) in the *EventBridge Scheduler User Guide*.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the `StartDate` you specify. EventBridge Scheduler ignores `StartDate` for one-time schedules.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the `EndDate` you specify. EventBridge Scheduler ignores `EndDate` for one-time schedules.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The description you specify for the schedule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timezone in which the scheduling expression is evaluated.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Specifies whether the schedule is enabled or disabled.
   *
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The schedule's target.
   *
   * @public
   */
  Target: Target | undefined;

  /**
   * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
   *
   * @public
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.
   *
   * @public
   */
  ActionAfterCompletion?: ActionAfterCompletion | undefined;
}

/**
 * @public
 */
export interface CreateScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the schedule.
   *
   * @public
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleInput {
  /**
   * The name of the schedule to delete.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the schedule group associated with this schedule. If you omit this, the default schedule group is used.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleOutput {}

/**
 * @public
 */
export interface GetScheduleInput {
  /**
   * The name of the schedule to retrieve.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the schedule group associated with this schedule. If you omit this, EventBridge Scheduler assumes that the schedule is associated with the default group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * @public
 */
export interface GetScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the schedule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the schedule group associated with this schedule.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The name of the schedule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The expression that defines when the schedule runs. The following formats are supported.
   *
   * - `at` expression - `at(yyyy-mm-ddThh:mm:ss)`
   * - `rate` expression - `rate(value unit)`
   * - `cron` expression - `cron(fields)`
   *
   * You can use `at` expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use `rate` and `cron` expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month.
   *
   * A `cron` expression consists of six fields separated by white spaces: `(minutes hours day_of_month month day_of_week year)`.
   *
   * A `rate` expression consists of a *value* as a positive integer, and a *unit* with the following options: `minute` | `minutes` | `hour` | `hours` | `day` | `days`
   *
   * For more information and examples, see [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html) in the *EventBridge Scheduler User Guide*.
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the `StartDate` you specify. EventBridge Scheduler ignores `StartDate` for one-time schedules.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the `EndDate` you specify. EventBridge Scheduler ignores `EndDate` for one-time schedules.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The description of the schedule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timezone in which the scheduling expression is evaluated.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Specifies whether the schedule is enabled or disabled.
   *
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * The time at which the schedule was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The time at which the schedule was last modified.
   *
   * @public
   */
  LastModificationDate?: Date | undefined;

  /**
   * The ARN for a customer managed KMS Key that is be used to encrypt and decrypt your data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The schedule target.
   *
   * @public
   */
  Target?: Target | undefined;

  /**
   * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
   *
   * @public
   */
  FlexibleTimeWindow?: FlexibleTimeWindow | undefined;

  /**
   * Indicates the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.
   *
   * @public
   */
  ActionAfterCompletion?: ActionAfterCompletion | undefined;
}

/**
 * @public
 */
export interface ListSchedulesInput {
  /**
   * If specified, only lists the schedules whose associated schedule group matches the given filter.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Schedule name prefix to return the filtered list of resources.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * If specified, only lists the schedules whose current state matches the given filter.
   *
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If specified, limits the number of results returned by this operation. The operation also returns a `NextToken` which you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The details of a target.
 *
 * @public
 */
export interface TargetSummary {
  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The details of a schedule.
 *
 * @public
 */
export interface ScheduleSummary {
  /**
   * The Amazon Resource Name (ARN) of the schedule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the schedule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the schedule group associated with this schedule.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Specifies whether the schedule is enabled or disabled.
   *
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * The time at which the schedule was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The time at which the schedule was last modified.
   *
   * @public
   */
  LastModificationDate?: Date | undefined;

  /**
   * The schedule's target details.
   *
   * @public
   */
  Target?: TargetSummary | undefined;
}

/**
 * @public
 */
export interface ListSchedulesOutput {
  /**
   * Indicates whether there are additional results to retrieve. If the value is null, there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The schedules that match the specified criteria.
   *
   * @public
   */
  Schedules: ScheduleSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleInput {
  /**
   * The name of the schedule that you are updating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update. If you omit this value, EventBridge Scheduler assumes the group is associated to the default group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The expression that defines when the schedule runs. The following formats are supported.
   *
   * - `at` expression - `at(yyyy-mm-ddThh:mm:ss)`
   * - `rate` expression - `rate(value unit)`
   * - `cron` expression - `cron(fields)`
   *
   * You can use `at` expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use `rate` and `cron` expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month.
   *
   * A `cron` expression consists of six fields separated by white spaces: `(minutes hours day_of_month month day_of_week year)`.
   *
   * A `rate` expression consists of a *value* as a positive integer, and a *unit* with the following options: `minute` | `minutes` | `hour` | `hours` | `day` | `days`
   *
   * For more information and examples, see [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html) in the *EventBridge Scheduler User Guide*.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the `StartDate` you specify. EventBridge Scheduler ignores `StartDate` for one-time schedules.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the `EndDate` you specify. EventBridge Scheduler ignores `EndDate` for one-time schedules.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The description you specify for the schedule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timezone in which the scheduling expression is evaluated.
   *
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * Specifies whether the schedule is enabled or disabled.
   *
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The schedule target. You can use this operation to change the target that your schedule invokes.
   *
   * @public
   */
  Target: Target | undefined;

  /**
   * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
   *
   * @public
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.
   *
   * @public
   */
  ActionAfterCompletion?: ActionAfterCompletion | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the schedule that you updated.
   *
   * @public
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleGroupInput {
  /**
   * The name of the schedule group that you are creating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of tags to associate with the schedule group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleGroupOutput {
  /**
   * The Amazon Resource Name (ARN) of the schedule group.
   *
   * @public
   */
  ScheduleGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleGroupInput {
  /**
   * The name of the schedule group to delete.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleGroupOutput {}

/**
 * @public
 */
export interface GetScheduleGroupInput {
  /**
   * The name of the schedule group to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetScheduleGroupOutput {
  /**
   * The Amazon Resource Name (ARN) of the schedule group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the schedule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the state of the schedule group.
   *
   * @public
   */
  State?: ScheduleGroupState | undefined;

  /**
   * The time at which the schedule group was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The time at which the schedule group was last modified.
   *
   * @public
   */
  LastModificationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListScheduleGroupsInput {
  /**
   * The name prefix that you can use to return a filtered list of your schedule groups.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If specified, limits the number of results returned by this operation. The operation also returns a `NextToken` which you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The details of a schedule group.
 *
 * @public
 */
export interface ScheduleGroupSummary {
  /**
   * The Amazon Resource Name (ARN) of the schedule group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the schedule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the state of the schedule group.
   *
   * @public
   */
  State?: ScheduleGroupState | undefined;

  /**
   * The time at which the schedule group was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The time at which the schedule group was last modified.
   *
   * @public
   */
  LastModificationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListScheduleGroupsOutput {
  /**
   * Indicates whether there are additional results to retrieve. If the value is null, there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The schedule groups that match the specified criteria.
   *
   * @public
   */
  ScheduleGroups: ScheduleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the schedule group that you are adding tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tags to associate with the schedule group.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the schedule group from which you are removing tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
