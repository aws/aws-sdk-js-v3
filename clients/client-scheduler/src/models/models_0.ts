// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SchedulerServiceException as __BaseException } from "./SchedulerServiceException";

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Unexpected error encountered while processing the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
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
  }
}

export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the EventBridge Scheduler resource for which you want to view tags.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * <p>Tag to associate with a schedule group.</p>
 */
export interface Tag {
  /**
   * <p>The key for the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the tag.</p>
   */
  Value: string | undefined;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
  }
}

/**
 * <p>Updating or deleting the resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
  }
}

export enum FlexibleTimeWindowMode {
  FLEXIBLE = "FLEXIBLE",
  OFF = "OFF",
}

/**
 * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
 */
export interface FlexibleTimeWindow {
  /**
   * <p>Determines whether the schedule is invoked within a flexible time window.</p>
   */
  Mode: FlexibleTimeWindowMode | string | undefined;

  /**
   * <p>The maximum time window during which a schedule can be invoked.</p>
   */
  MaximumWindowInMinutes?: number;
}

export enum ScheduleState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.</p>
 */
export interface DeadLetterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the SQS queue specified as the destination for the dead-letter queue.</p>
   */
  Arn?: string;
}

/**
 * <p>The details of a capacity provider strategy.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * <p>The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the
   *          base value, if defined, is satisfied.</p>
   */
  weight?: number;

  /**
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *          If no value is specified, the default value of <code>0</code> is used.</p>
   */
  base?: number;
}

export enum LaunchType {
  EC2 = "EC2",
  EXTERNAL = "EXTERNAL",
  FARGATE = "FARGATE",
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups.
   *          If you do not specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp | string;
}

/**
 * <p>Specifies the network configuration for an ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Specifies the Amazon VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

export enum PlacementConstraintType {
  DISTINCT_INSTANCE = "distinctInstance",
  MEMBER_OF = "memberOf",
}

/**
 * <p>An object representing a constraint on task placement.</p>
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use <code>distinctInstance</code> to ensure that each task in a particular group is running on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates.</p>
   */
  type?: PlacementConstraintType | string;

  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>.
   *          For more information, see <a href="https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   */
  expression?: string;
}

export enum PlacementStrategyType {
  BINPACK = "binpack",
  RANDOM = "random",
  SPREAD = "spread",
}

/**
 * <p>The task placement strategy for a task or service.</p>
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates
   *          evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter.
   *          For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).</p>
   */
  type?: PlacementStrategyType | string;

  /**
   * <p>The field to apply the placement strategy against. For the spread placement strategy, valid values are <code>instanceId</code> (or <code>instanceId</code>, which has the same effect),
   *          or any platform or custom attribute that is applied to a container instance, such as <code>attribute:ecs.availability-zone</code>. For the binpack placement strategy, valid values are
   *          <code>cpu</code> and <code>memory</code>. For the random placement strategy, this field is not used.</p>
   */
  field?: string;
}

export enum PropagateTags {
  TASK_DEFINITION = "TASK_DEFINITION",
}

/**
 * <p>The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
 *                <code>RunTask</code>
 *             </a> API operation.</p>
 */
export interface EcsParameters {
  /**
   * <p>The Amazon Resource Name (ARN) of the task definition to use if the event target is an Amazon ECS task.</p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is <code>1</code>.</p>
   */
  TaskCount?: number;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task.
   *          The <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS is supported.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html">AWS Fargate on Amazon ECS</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   */
  LaunchType?: LaunchType | string;

  /**
   * <p>This structure specifies the network configuration for an ECS task.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as <code>1.1.0</code>.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * <p>The capacity provider strategy to use for the task.</p>
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a>
   *          in the <i>Amazon ECS Developer Guide</i>.</p>
   */
  EnableECSManagedTags?: boolean;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).</p>
   */
  PlacementConstraints?: PlacementConstraint[];

  /**
   * <p>The task placement strategy for a task or service.</p>
   */
  PlacementStrategy?: PlacementStrategy[];

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated.
   *          Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use Amazon ECS's <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">
   *                <code>TagResource</code>
   *             </a>
   *          API action.
   *       </p>
   */
  PropagateTags?: PropagateTags | string;

  /**
   * <p>The reference ID to use for the task.</p>
   */
  ReferenceId?: string;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
   *                <code>RunTask</code>
   *             </a> in the <i>Amazon ECS API Reference</i>.</p>
   */
  Tags?: Record<string, string>[];
}

/**
 * <p>The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">
 *                <code>PutEvents</code>
 *             </a> API operation.</p>
 */
export interface EventBridgeParameters {
  /**
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   */
  DetailType: string | undefined;

  /**
   * <p>The source of the event.</p>
   */
  Source: string | undefined;
}

/**
 * <p>The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html">
 *                <code>PutRecord</code>
 *             </a> API operation.</p>
 */
export interface KinesisParameters {
  /**
   * <p>Specifies the shard to which EventBridge Scheduler sends the event. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html">Amazon Kinesis Data Streams terminology and concepts</a> in the
   *          <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   */
  PartitionKey: string | undefined;
}

/**
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.</p>
 */
export interface RetryPolicy {
  /**
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or
   *          until the duration of the <code>MaximumEventAgeInSeconds</code> is reached.</p>
   */
  MaximumRetryAttempts?: number;
}

/**
 * <p>The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline.</p>
 */
export interface SageMakerPipelineParameter {
  /**
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Name: string | undefined;

  /**
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Value: string | undefined;
}

/**
 * <p>The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html">
 *                <code>StartPipelineExecution</code>
 *             </a> API operation.</p>
 */
export interface SageMakerPipelineParameters {
  /**
   * <p>List of parameter names and values to use when executing the SageMaker Model Building Pipeline.</p>
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}

/**
 * <p>The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html">
 *                <code>SendMessage</code>
 *             </a> API operation.
 *          Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the
 *          <i>Amazon SQS Developer Guide</i>.
 *       </p>
 */
export interface SqsParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

/**
 * <p>The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to
 *         invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.</p>
 */
export interface Target {
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.</p>
   */
  RetryPolicy?: RetryPolicy;

  /**
   * <p>The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target,
   *          the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler
   *          delivers a default notification to the target.</p>
   */
  Input?: string;

  /**
   * <p>The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
   *                <code>RunTask</code>
   *             </a> API operation.</p>
   */
  EcsParameters?: EcsParameters;

  /**
   * <p>The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">
   *                <code>PutEvents</code>
   *             </a> API operation.</p>
   */
  EventBridgeParameters?: EventBridgeParameters;

  /**
   * <p>The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html">
   *                <code>PutRecord</code>
   *             </a> API operation.</p>
   */
  KinesisParameters?: KinesisParameters;

  /**
   * <p>The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html">
   *                <code>StartPipelineExecution</code>
   *             </a> API operation.</p>
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters;

  /**
   * <p>The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html">
   *                <code>SendMessage</code>
   *             </a> API operation.
   *          Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the
   *          <i>Amazon SQS Developer Guide</i>.</p>
   */
  SqsParameters?: SqsParameters;
}

export interface CreateScheduleInput {
  /**
   * <p>The name of the schedule that you are creating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.</p>
   */
  GroupName?: string;

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
   *                   <code>rate</code> expression - <code>rate(unit value)</code>
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
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   */
  EndDate?: Date;

  /**
   * <p>The description you specify for the schedule.</p>
   */
  Description?: string;

  /**
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   */
  ScheduleExpressionTimezone?: string;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The schedule's target.</p>
   */
  Target: Target | undefined;

  /**
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
}

export interface CreateScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  ScheduleArn: string | undefined;
}

/**
 * <p>The request exceeds a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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

export interface DeleteScheduleInput {
  /**
   * <p>The name of the schedule to delete.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group associated with this schedule. If you omit this, the default schedule group is used.</p>
   */
  GroupName?: string;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
}

export interface DeleteScheduleOutput {}

export interface GetScheduleInput {
  /**
   * <p>The name of the schedule to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group associated with this schedule. If you omit this, EventBridge Scheduler assumes that the schedule is associated with the default group.</p>
   */
  GroupName?: string;
}

export interface GetScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the schedule group associated with this schedule.</p>
   */
  GroupName?: string;

  /**
   * <p>The name of the schedule.</p>
   */
  Name?: string;

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
   *                   <code>rate</code> expression - <code>rate(unit value)</code>
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
   */
  ScheduleExpression?: string;

  /**
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   */
  EndDate?: Date;

  /**
   * <p>The description of the schedule.</p>
   */
  Description?: string;

  /**
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   */
  ScheduleExpressionTimezone?: string;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState | string;

  /**
   * <p>The time at which the schedule was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The time at which the schedule was last modified.</p>
   */
  LastModificationDate?: Date;

  /**
   * <p>The ARN for a customer managed KMS Key that is be used to encrypt and decrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The schedule target.</p>
   */
  Target?: Target;

  /**
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   */
  FlexibleTimeWindow?: FlexibleTimeWindow;
}

export interface ListSchedulesInput {
  /**
   * <p>If specified, only lists the schedules whose associated schedule group matches the given filter.</p>
   */
  GroupName?: string;

  /**
   * <p>Schedule name prefix to return the filtered list of resources.</p>
   */
  NamePrefix?: string;

  /**
   * <p>If specified, only lists the schedules whose current state matches the given filter.</p>
   */
  State?: ScheduleState | string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The details of a target.</p>
 */
export interface TargetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;
}

/**
 * <p>The details of a schedule.</p>
 */
export interface ScheduleSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * <p>The name of the schedule group associated with this schedule.</p>
   */
  GroupName?: string;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState | string;

  /**
   * <p>The time at which the schedule was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The time at which the schedule was last modified.</p>
   */
  LastModificationDate?: Date;

  /**
   * <p>The schedule's target details.</p>
   */
  Target?: TargetSummary;
}

export interface ListSchedulesOutput {
  /**
   * <p>Indicates whether there are additional results to retrieve. If the value is null, there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The schedules that match the specified criteria.</p>
   */
  Schedules: ScheduleSummary[] | undefined;
}

export interface UpdateScheduleInput {
  /**
   * <p>The name of the schedule that you are updating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update.
   *          If you omit this value, EventBridge Scheduler assumes the group is associated to the default group.</p>
   */
  GroupName?: string;

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
   *                   <code>rate</code> expression - <code>rate(unit value)</code>
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
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   */
  EndDate?: Date;

  /**
   * <p>The description you specify for the schedule.</p>
   */
  Description?: string;

  /**
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   */
  ScheduleExpressionTimezone?: string;

  /**
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState | string;

  /**
   * <p>The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The schedule target. You can use this operation to change the target that your schedule invokes.</p>
   */
  Target: Target | undefined;

  /**
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
}

export interface UpdateScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule that you updated.</p>
   */
  ScheduleArn: string | undefined;
}

export interface CreateScheduleGroupInput {
  /**
   * <p>The name of the schedule group that you are creating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The list of tags to associate with the schedule group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
}

export interface CreateScheduleGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   */
  ScheduleGroupArn: string | undefined;
}

export interface DeleteScheduleGroupInput {
  /**
   * <p>The name of the schedule group to delete.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
}

export interface DeleteScheduleGroupOutput {}

export interface GetScheduleGroupInput {
  /**
   * <p>The name of the schedule group to retrieve.</p>
   */
  Name: string | undefined;
}

export enum ScheduleGroupState {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
}

export interface GetScheduleGroupOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the schedule group.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the state of the schedule group.</p>
   */
  State?: ScheduleGroupState | string;

  /**
   * <p>The time at which the schedule group was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The time at which the schedule group was last modified.</p>
   */
  LastModificationDate?: Date;
}

export interface ListScheduleGroupsInput {
  /**
   * <p>The name prefix that you can use to return a filtered list of your schedule groups.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The details of a schedule group.</p>
 */
export interface ScheduleGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the schedule group.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the state of the schedule group.</p>
   */
  State?: ScheduleGroupState | string;

  /**
   * <p>The time at which the schedule group was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The time at which the schedule group was last modified.</p>
   */
  LastModificationDate?: Date;
}

export interface ListScheduleGroupsOutput {
  /**
   * <p>Indicates whether there are additional results to retrieve. If the value is null, there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The schedule groups that match the specified criteria.</p>
   */
  ScheduleGroups: ScheduleGroupSummary[] | undefined;
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group that you are adding tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tags to associate with the schedule group.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceOutput {}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the schedule group from which you are removing tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceOutput {}

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlexibleTimeWindowFilterSensitiveLog = (obj: FlexibleTimeWindow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeadLetterConfigFilterSensitiveLog = (obj: DeadLetterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityProviderStrategyItemFilterSensitiveLog = (obj: CapacityProviderStrategyItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsVpcConfigurationFilterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConfigurationFilterSensitiveLog = (obj: NetworkConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementConstraintFilterSensitiveLog = (obj: PlacementConstraint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementStrategyFilterSensitiveLog = (obj: PlacementStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsParametersFilterSensitiveLog = (obj: EcsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventBridgeParametersFilterSensitiveLog = (obj: EventBridgeParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisParametersFilterSensitiveLog = (obj: KinesisParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryPolicyFilterSensitiveLog = (obj: RetryPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SageMakerPipelineParameterFilterSensitiveLog = (obj: SageMakerPipelineParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SageMakerPipelineParametersFilterSensitiveLog = (obj: SageMakerPipelineParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqsParametersFilterSensitiveLog = (obj: SqsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduleInputFilterSensitiveLog = (obj: CreateScheduleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduleOutputFilterSensitiveLog = (obj: CreateScheduleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduleInputFilterSensitiveLog = (obj: DeleteScheduleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduleOutputFilterSensitiveLog = (obj: DeleteScheduleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetScheduleInputFilterSensitiveLog = (obj: GetScheduleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetScheduleOutputFilterSensitiveLog = (obj: GetScheduleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchedulesInputFilterSensitiveLog = (obj: ListSchedulesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetSummaryFilterSensitiveLog = (obj: TargetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleSummaryFilterSensitiveLog = (obj: ScheduleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchedulesOutputFilterSensitiveLog = (obj: ListSchedulesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduleInputFilterSensitiveLog = (obj: UpdateScheduleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduleOutputFilterSensitiveLog = (obj: UpdateScheduleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduleGroupInputFilterSensitiveLog = (obj: CreateScheduleGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduleGroupOutputFilterSensitiveLog = (obj: CreateScheduleGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduleGroupInputFilterSensitiveLog = (obj: DeleteScheduleGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduleGroupOutputFilterSensitiveLog = (obj: DeleteScheduleGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetScheduleGroupInputFilterSensitiveLog = (obj: GetScheduleGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetScheduleGroupOutputFilterSensitiveLog = (obj: GetScheduleGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListScheduleGroupsInputFilterSensitiveLog = (obj: ListScheduleGroupsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleGroupSummaryFilterSensitiveLog = (obj: ScheduleGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListScheduleGroupsOutputFilterSensitiveLog = (obj: ListScheduleGroupsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});
