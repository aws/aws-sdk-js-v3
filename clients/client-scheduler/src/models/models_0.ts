// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SchedulerServiceException as __BaseException } from "./SchedulerServiceException";

/**
 * @public
 * @enum
 */
export const ActionAfterCompletion = {
  DELETE: "DELETE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ActionAfterCompletion = (typeof ActionAfterCompletion)[keyof typeof ActionAfterCompletion];

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * @public
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

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The ARN of the EventBridge Scheduler resource for which you want to view tags.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>Tag to associate with a schedule group.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key for the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of tags associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const FlexibleTimeWindowMode = {
  FLEXIBLE: "FLEXIBLE",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type FlexibleTimeWindowMode = (typeof FlexibleTimeWindowMode)[keyof typeof FlexibleTimeWindowMode];

/**
 * @public
 * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
 */
export interface FlexibleTimeWindow {
  /**
   * @public
   * <p>Determines whether the schedule is invoked within a flexible time window.</p>
   */
  Mode: FlexibleTimeWindowMode | undefined;

  /**
   * @public
   * <p>The maximum time window during which a schedule can be invoked.</p>
   */
  MaximumWindowInMinutes?: number;
}

/**
 * @public
 * @enum
 */
export const ScheduleState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

/**
 * @public
 * <p>An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.</p>
 */
export interface DeadLetterConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SQS queue specified as the destination for the dead-letter queue.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>The details of a capacity provider strategy.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * @public
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * @public
   * <p>The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the
   *          base value, if defined, is satisfied.</p>
   */
  weight?: number;

  /**
   * @public
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *          If no value is specified, the default value of <code>0</code> is used.</p>
   */
  base?: number;
}

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;

/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * @public
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * @public
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * @public
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups.
   *          If you do not specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp;
}

/**
 * @public
 * <p>Specifies the network configuration for an ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * @public
   * <p>Specifies the Amazon VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

/**
 * @public
 * @enum
 */
export const PlacementConstraintType = {
  DISTINCT_INSTANCE: "distinctInstance",
  MEMBER_OF: "memberOf",
} as const;

/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

/**
 * @public
 * <p>An object representing a constraint on task placement.</p>
 */
export interface PlacementConstraint {
  /**
   * @public
   * <p>The type of constraint. Use <code>distinctInstance</code> to ensure that each task in a particular group is running on a different container instance. Use <code>memberOf</code> to restrict the selection to a group of valid candidates.</p>
   */
  type?: PlacementConstraintType;

  /**
   * @public
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is <code>distinctInstance</code>.
   *          For more information, see <a href="https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html">Cluster query language</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   */
  expression?: string;
}

/**
 * @public
 * @enum
 */
export const PlacementStrategyType = {
  BINPACK: "binpack",
  RANDOM: "random",
  SPREAD: "spread",
} as const;

/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

/**
 * @public
 * <p>The task placement strategy for a task or service.</p>
 */
export interface PlacementStrategy {
  /**
   * @public
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates
   *          evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter.
   *          For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).</p>
   */
  type?: PlacementStrategyType;

  /**
   * @public
   * <p>The field to apply the placement strategy against. For the spread placement strategy, valid values are <code>instanceId</code> (or <code>instanceId</code>, which has the same effect),
   *          or any platform or custom attribute that is applied to a container instance, such as <code>attribute:ecs.availability-zone</code>. For the binpack placement strategy, valid values are
   *          <code>cpu</code> and <code>memory</code>. For the random placement strategy, this field is not used.</p>
   */
  field?: string;
}

/**
 * @public
 * @enum
 */
export const PropagateTags = {
  TASK_DEFINITION: "TASK_DEFINITION",
} as const;

/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];

/**
 * @public
 * <p>The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
 *                <code>RunTask</code>
 *             </a> API operation.</p>
 */
export interface EcsParameters {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task definition to use if the event target is an Amazon ECS task.</p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is <code>1</code>.</p>
   */
  TaskCount?: number;

  /**
   * @public
   * <p>Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task.
   *          The <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS is supported.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html">AWS Fargate on Amazon ECS</a> in the <i>Amazon ECS Developer Guide</i>.</p>
   */
  LaunchType?: LaunchType;

  /**
   * @public
   * <p>This structure specifies the network configuration for an ECS task.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * @public
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as <code>1.1.0</code>.</p>
   */
  PlatformVersion?: string;

  /**
   * @public
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * @public
   * <p>The capacity provider strategy to use for the task.</p>
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @public
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a>
   *          in the <i>Amazon ECS Developer Guide</i>.</p>
   */
  EnableECSManagedTags?: boolean;

  /**
   * @public
   * <p>Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * @public
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).</p>
   */
  PlacementConstraints?: PlacementConstraint[];

  /**
   * @public
   * <p>The task placement strategy for a task or service.</p>
   */
  PlacementStrategy?: PlacementStrategy[];

  /**
   * @public
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated.
   *          Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use Amazon ECS's <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html">
   *                <code>TagResource</code>
   *             </a>
   *          API action.
   *       </p>
   */
  PropagateTags?: PropagateTags;

  /**
   * @public
   * <p>The reference ID to use for the task.</p>
   */
  ReferenceId?: string;

  /**
   * @public
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
   *                <code>RunTask</code>
   *             </a> in the <i>Amazon ECS API Reference</i>.</p>
   */
  Tags?: Record<string, string>[];
}

/**
 * @public
 * <p>The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">
 *                <code>PutEvents</code>
 *             </a> API operation.</p>
 */
export interface EventBridgeParameters {
  /**
   * @public
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   */
  DetailType: string | undefined;

  /**
   * @public
   * <p>The source of the event.</p>
   */
  Source: string | undefined;
}

/**
 * @public
 * <p>The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html">
 *                <code>PutRecord</code>
 *             </a> API operation.</p>
 */
export interface KinesisParameters {
  /**
   * @public
   * <p>Specifies the shard to which EventBridge Scheduler sends the event. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html">Amazon Kinesis Data Streams terminology and concepts</a> in the
   *          <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   */
  PartitionKey: string | undefined;
}

/**
 * @public
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.</p>
 */
export interface RetryPolicy {
  /**
   * @public
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * @public
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or
   *          until the duration of the <code>MaximumEventAgeInSeconds</code> is reached.</p>
   */
  MaximumRetryAttempts?: number;
}

/**
 * @public
 * <p>The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline.</p>
 */
export interface SageMakerPipelineParameter {
  /**
   * @public
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html">
 *                <code>StartPipelineExecution</code>
 *             </a> API operation.</p>
 */
export interface SageMakerPipelineParameters {
  /**
   * @public
   * <p>List of parameter names and values to use when executing the SageMaker Model Building Pipeline.</p>
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}

/**
 * @public
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
   * @public
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

/**
 * @public
 * <p>The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to
 *         invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.</p>
 */
export interface Target {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * @public
   * <p>A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.</p>
   */
  RetryPolicy?: RetryPolicy;

  /**
   * @public
   * <p>The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target,
   *          the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler
   *          delivers a default notification to the target.</p>
   */
  Input?: string;

  /**
   * @public
   * <p>The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html">
   *                <code>RunTask</code>
   *             </a> API operation.</p>
   */
  EcsParameters?: EcsParameters;

  /**
   * @public
   * <p>The templated target type for the EventBridge <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">
   *                <code>PutEvents</code>
   *             </a> API operation.</p>
   */
  EventBridgeParameters?: EventBridgeParameters;

  /**
   * @public
   * <p>The templated target type for the Amazon Kinesis <a href="kinesis/latest/APIReference/API_PutRecord.html">
   *                <code>PutRecord</code>
   *             </a> API operation.</p>
   */
  KinesisParameters?: KinesisParameters;

  /**
   * @public
   * <p>The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html">
   *                <code>StartPipelineExecution</code>
   *             </a> API operation.</p>
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters;

  /**
   * @public
   * <p>The templated target type for the Amazon SQS <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html">
   *                <code>SendMessage</code>
   *             </a> API operation.
   *          Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the Amazon SQS message deduplication ID</a> in the
   *          <i>Amazon SQS Developer Guide</i>.</p>
   */
  SqsParameters?: SqsParameters;
}

/**
 * @public
 */
export interface CreateScheduleInput {
  /**
   * @public
   * <p>The name of the schedule that you are creating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.</p>
   */
  GroupName?: string;

  /**
   * @public
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
   */
  ScheduleExpression: string | undefined;

  /**
   * @public
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>The description you specify for the schedule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   */
  ScheduleExpressionTimezone?: string;

  /**
   * @public
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The schedule's target.</p>
   */
  Target: Target | undefined;

  /**
   * @public
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * @public
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.</p>
   */
  ActionAfterCompletion?: ActionAfterCompletion;
}

/**
 * @public
 */
export interface CreateScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteScheduleInput {
  /**
   * @public
   * <p>The name of the schedule to delete.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the schedule group associated with this schedule. If you omit this, the default schedule group is used.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
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
   * @public
   * <p>The name of the schedule to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the schedule group associated with this schedule. If you omit this, EventBridge Scheduler assumes that the schedule is associated with the default group.</p>
   */
  GroupName?: string;
}

/**
 * @public
 */
export interface GetScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the schedule group associated with this schedule.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * @public
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
   */
  ScheduleExpression?: string;

  /**
   * @public
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>The description of the schedule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   */
  ScheduleExpressionTimezone?: string;

  /**
   * @public
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState;

  /**
   * @public
   * <p>The time at which the schedule was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The time at which the schedule was last modified.</p>
   */
  LastModificationDate?: Date;

  /**
   * @public
   * <p>The ARN for a customer managed KMS Key that is be used to encrypt and decrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The schedule target.</p>
   */
  Target?: Target;

  /**
   * @public
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   */
  FlexibleTimeWindow?: FlexibleTimeWindow;

  /**
   * @public
   * <p>Indicates the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.</p>
   */
  ActionAfterCompletion?: ActionAfterCompletion;
}

/**
 * @public
 */
export interface ListSchedulesInput {
  /**
   * @public
   * <p>If specified, only lists the schedules whose associated schedule group matches the given filter.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>Schedule name prefix to return the filtered list of resources.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>If specified, only lists the schedules whose current state matches the given filter.</p>
   */
  State?: ScheduleState;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The details of a target.</p>
 */
export interface TargetSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>The details of a schedule.</p>
 */
export interface ScheduleSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the schedule group associated with this schedule.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState;

  /**
   * @public
   * <p>The time at which the schedule was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The time at which the schedule was last modified.</p>
   */
  LastModificationDate?: Date;

  /**
   * @public
   * <p>The schedule's target details.</p>
   */
  Target?: TargetSummary;
}

/**
 * @public
 */
export interface ListSchedulesOutput {
  /**
   * @public
   * <p>Indicates whether there are additional results to retrieve. If the value is null, there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The schedules that match the specified criteria.</p>
   */
  Schedules: ScheduleSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleInput {
  /**
   * @public
   * <p>The name of the schedule that you are updating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update.
   *          If you omit this value, EventBridge Scheduler assumes the group is associated to the default group.</p>
   */
  GroupName?: string;

  /**
   * @public
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
   */
  ScheduleExpression: string | undefined;

  /**
   * @public
   * <p>The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify.
   * EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify.
   * EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>The description you specify for the schedule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timezone in which the scheduling expression is evaluated.</p>
   */
  ScheduleExpressionTimezone?: string;

  /**
   * @public
   * <p>Specifies whether the schedule is enabled or disabled.</p>
   */
  State?: ScheduleState;

  /**
   * @public
   * <p>The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The schedule target. You can use this operation to change the target that your schedule invokes.</p>
   */
  Target: Target | undefined;

  /**
   * @public
   * <p>Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.</p>
   */
  FlexibleTimeWindow: FlexibleTimeWindow | undefined;

  /**
   * @public
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Specifies the action that EventBridge Scheduler applies to the schedule after the schedule completes invoking the target.</p>
   */
  ActionAfterCompletion?: ActionAfterCompletion;
}

/**
 * @public
 */
export interface UpdateScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule that you updated.</p>
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleGroupInput {
  /**
   * @public
   * <p>The name of the schedule group that you are creating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The list of tags to associate with the schedule group.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateScheduleGroupOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   */
  ScheduleGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleGroupInput {
  /**
   * @public
   * <p>The name of the schedule group to delete.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   *   Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token,
   *   EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.
   * </p>
   */
  ClientToken?: string;
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
   * @public
   * <p>The name of the schedule group to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScheduleGroupState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ScheduleGroupState = (typeof ScheduleGroupState)[keyof typeof ScheduleGroupState];

/**
 * @public
 */
export interface GetScheduleGroupOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the schedule group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the state of the schedule group.</p>
   */
  State?: ScheduleGroupState;

  /**
   * @public
   * <p>The time at which the schedule group was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The time at which the schedule group was last modified.</p>
   */
  LastModificationDate?: Date;
}

/**
 * @public
 */
export interface ListScheduleGroupsInput {
  /**
   * @public
   * <p>The name prefix that you can use to return a filtered list of your schedule groups.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>If specified, limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> which you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The details of a schedule group.</p>
 */
export interface ScheduleGroupSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the schedule group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the state of the schedule group.</p>
   */
  State?: ScheduleGroupState;

  /**
   * @public
   * <p>The time at which the schedule group was created.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The time at which the schedule group was last modified.</p>
   */
  LastModificationDate?: Date;
}

/**
 * @public
 */
export interface ListScheduleGroupsOutput {
  /**
   * @public
   * <p>Indicates whether there are additional results to retrieve. If the value is null, there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The schedule groups that match the specified criteria.</p>
   */
  ScheduleGroups: ScheduleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule group that you are adding tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tags to associate with the schedule group.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule group from which you are removing tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
