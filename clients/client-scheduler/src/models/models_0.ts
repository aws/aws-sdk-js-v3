// smithy-typescript generated code
import {
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
   * <p>The ARN of the EventBridge Scheduler resource for which you want to view tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>Tag to associate with a schedule group.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
 * @public
 */
export interface FlexibleTimeWindow {
  /**
   * <p>Determines whether the schedule is invoked within a flexible time window.</p>
   * @public
   */
  Mode: FlexibleTimeWindowMode | undefined;

  /**
   * <p>The maximum time window during which a schedule can be invoked.</p>
   * @public
   */
  MaximumWindowInMinutes?: number | undefined;
}

/**
 * <p>An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.</p>
 * @public
 */
export interface DeadLetterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the SQS queue specified as the destination for the dead-letter queue.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The details of a capacity provider strategy.</p>
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * <p>The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the
   *          base value, if defined, is satisfied.</p>
   * @public
   */
  weight?: number | undefined;

  /**
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *          If no value is specified, the default value of <code>0</code> is used.</p>
   * @public
   */
  base?: number | undefined;
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.</p>
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups.
   *          If you do not specify a security group, the default security group for the VPC is used.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   * @public
   */
  AssignPublicIp?: AssignPublicIp | undefined;
}

/**
 * <p>Specifies the network configuration for an ECS task.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>Specifies the Amazon VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.</p>
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * <p>An object representing a constraint on task placement.</p>
 * @public
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use <code>distinctInstance</code> to ensure that each task in a particular group is running on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates.</p>
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>.
   *          For more information, see <a href="https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * <p>The task placement strategy for a task or service.</p>
 * @public
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates
   *          evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter.
   *          For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).</p>
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * <p>The field to apply the placement strategy against. For the spread placement strategy, valid values are <code>instanceId</code> (or <code>instanceId</code>, which has the same effect),
   *          or any platform or custom attribute that is applied to a container instance, such as <code>attribute:ecs.availability-zone</code>. For the binpack placement strategy, valid values are
   *          <code>cpu</code> and <code>memory</code>. For the random placement strategy, this field is not used.</p>
   * @public
   */
  field?: string | undefined;
}

/**
 * <p>The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
 *                <code>RunTask</code>
 *             </a> API operation.</p>
 * @public
 */
export interface EcsParameters {
  /**
   * <p>The Amazon Resource Name (ARN) of the task definition to use if the event target is an Amazon ECS task.</p>
   * @public
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is <code>1</code>.</p>
   * @public
   */
  TaskCount?: number | undefined;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task.
   *          The <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS is supported.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html">AWS Fargate on Amazon ECS</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  LaunchType?: LaunchType | undefined;

  /**
   * <p>This structure specifies the network configuration for an ECS task.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as <code>1.1.0</code>.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>The capacity provider strategy to use for the task.</p>
   * @public
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a>
   *          in the <i>Amazon ECS Developer Guide</i>.</p>
   * @public
   */
  EnableECSManagedTags?: boolean | undefined;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.</p>
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).</p>
   * @public
   */
  PlacementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The task placement strategy for a task or service.</p>
   * @public
   */
  PlacementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated.
   *          Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use Amazon ECS's <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">
   *                <code>TagResource</code>
   *             </a>
   *          API action.
   *       </p>
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * <p>The reference ID to use for the task.</p>
   * @public
   */
  ReferenceId?: string | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
   *                <code>RunTask</code>
   *             </a> in the <i>Amazon ECS API Reference</i>.</p>
   * @public
   */
  Tags?: Record<string, string>[] | undefined;
}

/**
 * <p>The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">
 *                <code>PutEvents</code>
 *             </a> API operation.</p>
 * @public
 */
export interface EventBridgeParameters {
  /**
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   * @public
   */
  DetailType: string | undefined;

  /**
   * <p>The source of the event.</p>
   * @public
   */
  Source: string | undefined;
}

/**
 * <p>The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html">
 *                <code>PutRecord</code>
 *             </a> API operation.</p>
 * @public
 */
export interface KinesisParameters {
  /**
   * <p>Specifies the shard to which EventBridge Scheduler sends the event. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html">Amazon Kinesis Data Streams terminology and concepts</a> in the
   *          <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   * @public
   */
  PartitionKey: string | undefined;
}

/**
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.</p>
 * @public
 */
export interface RetryPolicy {
  /**
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or
   *          until the duration of the <code>MaximumEventAgeInSeconds</code> is reached.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;
}

/**
 * <p>The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline.</p>
 * @public
 */
export interface SageMakerPipelineParameter {
  /**
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html">
 *                <code>StartPipelineExecution</code>
 *             </a> API operation.</p>
 * @public
 */
export interface SageMakerPipelineParameters {
  /**
   * <p>List of parameter names and values to use when executing the SageMaker Model Building Pipeline.</p>
   * @public
   */
  PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}

/**
 * <p>The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html">
 *                <code>SendMessage</code>
 *             </a> API operation.
 *          Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the
 *          <i>Amazon SQS Developer Guide</i>.
 *       </p>
 * @public
 */
export interface SqsParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * <p>The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to
 *         invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.</p>
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * <p>The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target,
   *          the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler
   *          delivers a default notification to the target.</p>
   * @public
   */
  Input?: string | undefined;

  /**
   * <p>The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
   *                <code>RunTask</code>
   *             </a> API operation.</p>
   * @public
   */
  EcsParameters?: EcsParameters | undefined;

  /**
   * <p>The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">
   *                <code>PutEvents</code>
   *             </a> API operation.</p>
   * @public
   */
  EventBridgeParameters?: EventBridgeParameters | undefined;

  /**
   * <p>The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html">
   *                <code>PutRecord</code>
   *             </a> API operation.</p>
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * <p>The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html">
   *                <code>StartPipelineExecution</code>
   *             </a> API operation.</p>
   * @public
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters | undefined;

  /**
   * <p>The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html">
   *                <code>SendMessage</code>
   *             </a> API operation.
   *          Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the
   *          <i>Amazon SQS Developer Guide</i>.</p>
   * @public
   */
  SqsParameters?: SqsParameters | undefined;
}

/**
 * @public
 */
export interface CreateScheduleInput {
  /**
   * <p>The name of the schedule that you are creating.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>
   *   The expression that defines when the schedule runs. The following formats are supported.
   * </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rate</code> expression - <code>rate(value unit)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cron</code> expression - <code>cron(fields)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *   You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify.
   *   You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target
   *   at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time,
   *   such as at 8:00 am (UTC+0) every 1st day of the month.
   * </p>
   *          <p>
   *   A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>.
   * </p>
   *          <p>
   *   A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options:
   *   <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>
   *          </p>
   *          <p>
   *   For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>.
   * </p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The description you specify for the schedule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The schedule's target.</p>
   * @public
   */
  Target: Target | undefined;

  /**
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   * @public
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.</p>
   * @public
   */
  ActionAfterCompletion?: ActionAfterCompletion | undefined;
}

/**
 * @public
 */
export interface CreateScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   * @public
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleInput {
  /**
   * <p>The name of the schedule to delete.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group associated with this schedule. If you omit this, the default schedule group is used.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
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
   * <p>The name of the schedule to retrieve.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group associated with this schedule. If you omit this, EventBridge Scheduler assumes that the schedule is associated with the default group.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * @public
 */
export interface GetScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the schedule group associated with this schedule.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The name of the schedule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *   The expression that defines when the schedule runs. The following formats are supported.
   * </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rate</code> expression - <code>rate(value unit)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cron</code> expression - <code>cron(fields)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *   You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify.
   *   You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target
   *   at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time,
   *   such as at 8:00 am (UTC+0) every 1st day of the month.
   * </p>
   *          <p>
   *   A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>.
   * </p>
   *          <p>
   *   A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options:
   *   <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>
   *          </p>
   *          <p>
   *   For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>.
   * </p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The description of the schedule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * <p>The time at which the schedule was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The time at which the schedule was last modified.</p>
   * @public
   */
  LastModificationDate?: Date | undefined;

  /**
   * <p>The ARN for a customer managed KMS Key that is be used to encrypt and decrypt your data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The schedule target.</p>
   * @public
   */
  Target?: Target | undefined;

  /**
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   * @public
   */
  FlexibleTimeWindow?: FlexibleTimeWindow | undefined;

  /**
   * <p>Indicates the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.</p>
   * @public
   */
  ActionAfterCompletion?: ActionAfterCompletion | undefined;
}

/**
 * @public
 */
export interface ListSchedulesInput {
  /**
   * <p>If specified, only lists the schedules whose associated schedule group matches the given filter.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>Schedule name prefix to return the filtered list of resources.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>If specified, only lists the schedules whose current state matches the given filter.</p>
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The details of a target.</p>
 * @public
 */
export interface TargetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The details of a schedule.</p>
 * @public
 */
export interface ScheduleSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the schedule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the schedule group associated with this schedule.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * <p>The time at which the schedule was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The time at which the schedule was last modified.</p>
   * @public
   */
  LastModificationDate?: Date | undefined;

  /**
   * <p>The schedule's target details.</p>
   * @public
   */
  Target?: TargetSummary | undefined;
}

/**
 * @public
 */
export interface ListSchedulesOutput {
  /**
   * <p>Indicates whether there are additional results to retrieve. If the value is null, there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The schedules that match the specified criteria.</p>
   * @public
   */
  Schedules: ScheduleSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleInput {
  /**
   * <p>The name of the schedule that you are updating.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update.
   *          If you omit this value, EventBridge Scheduler assumes the group is associated to the default group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>
   *   The expression that defines when the schedule runs. The following formats are supported.
   * </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rate</code> expression - <code>rate(value unit)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cron</code> expression - <code>cron(fields)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *   You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify.
   *   You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target
   *   at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time,
   *   such as at 8:00 am (UTC+0) every 1st day of the month.
   * </p>
   *          <p>
   *   A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>.
   * </p>
   *          <p>
   *   A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options:
   *   <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>
   *          </p>
   *          <p>
   *   For more information and examples, see <a href="https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>.
   * </p>
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * <p>The description you specify for the schedule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   * @public
   */
  ScheduleExpressionTimezone?: string | undefined;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   * @public
   */
  State?: ScheduleState | undefined;

  /**
   * <p>The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The schedule target. You can use this operation to change the target that your schedule invokes.</p>
   * @public
   */
  Target: Target | undefined;

  /**
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   * @public
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.</p>
   * @public
   */
  ActionAfterCompletion?: ActionAfterCompletion | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule that you updated.</p>
   * @public
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleGroupInput {
  /**
   * <p>The name of the schedule group that you are creating.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The list of tags to associate with the schedule group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   * @public
   */
  ScheduleGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleGroupInput {
  /**
   * <p>The name of the schedule group to delete.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
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
   * <p>The name of the schedule group to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetScheduleGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the schedule group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the state of the schedule group.</p>
   * @public
   */
  State?: ScheduleGroupState | undefined;

  /**
   * <p>The time at which the schedule group was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The time at which the schedule group was last modified.</p>
   * @public
   */
  LastModificationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListScheduleGroupsInput {
  /**
   * <p>The name prefix that you can use to return a filtered list of your schedule groups.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The details of a schedule group.</p>
 * @public
 */
export interface ScheduleGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the schedule group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the state of the schedule group.</p>
   * @public
   */
  State?: ScheduleGroupState | undefined;

  /**
   * <p>The time at which the schedule group was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The time at which the schedule group was last modified.</p>
   * @public
   */
  LastModificationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListScheduleGroupsOutput {
  /**
   * <p>Indicates whether there are additional results to retrieve. If the value is null, there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The schedule groups that match the specified criteria.</p>
   * @public
   */
  ScheduleGroups: ScheduleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group that you are adding tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tags to associate with the schedule group.</p>
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
   * <p>The Amazon Resource Name (ARN) of the schedule group from which you are removing tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
