import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface ActivateEventSourceRequest {
  __type?: "ActivateEventSourceRequest";
  /**
   * <p>The name of the partner event source to activate.</p>
   */
  Name: string | undefined;
}

export namespace ActivateEventSourceRequest {
  export const filterSensitiveLog = (obj: ActivateEventSourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivateEventSourceRequest =>
    __isa(o, "ActivateEventSourceRequest");
}

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the task and whether
 *             a public IP address is to be used. This structure is relevant only for ECS tasks that
 *             use the <code>awsvpc</code> network mode.</p>
 */
export interface AwsVpcConfiguration {
  __type?: "AwsVpcConfiguration";
  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when
   *         <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp | string;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all
   *             be in the same VPC. You can specify as many as five security groups. If you don't
   *             specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same
   *             VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;
}

export namespace AwsVpcConfiguration {
  export const filterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsVpcConfiguration =>
    __isa(o, "AwsVpcConfiguration");
}

/**
 * <p>The array properties for the submitted job, such as the size of the
 *             array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This
 *             parameter is used only if the target is an AWS Batch job.</p>
 */
export interface BatchArrayProperties {
  __type?: "BatchArrayProperties";
  /**
   * <p>The size of the array, if this is an array batch job. Valid values are
   *             integers between 2 and 10,000.</p>
   */
  Size?: number;
}

export namespace BatchArrayProperties {
  export const filterSensitiveLog = (obj: BatchArrayProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchArrayProperties =>
    __isa(o, "BatchArrayProperties");
}

/**
 * <p>The custom parameters to be used when the target is an AWS Batch job.</p>
 */
export interface BatchParameters {
  __type?: "BatchParameters";
  /**
   * <p>The array properties for the submitted job, such as the size of the
   *             array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This
   *         parameter is used only if the target is an AWS Batch job.</p>
   */
  ArrayProperties?: BatchArrayProperties;

  /**
   * <p>The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.</p>
   */
  JobDefinition: string | undefined;

  /**
   * <p>The name to use for this execution of the job, if the target is an AWS Batch job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The retry strategy to use for failed jobs if the target is an AWS Batch job. The
   *             retry strategy is the number of times to retry the failed job execution. Valid values
   *             are 1–10. When you specify a retry strategy here, it overrides the retry strategy
   *             defined in the job definition.</p>
   */
  RetryStrategy?: BatchRetryStrategy;
}

export namespace BatchParameters {
  export const filterSensitiveLog = (obj: BatchParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchParameters =>
    __isa(o, "BatchParameters");
}

/**
 * <p>The retry strategy to use for failed jobs if the target is an AWS Batch job. If you
 *             specify a retry strategy here, it overrides the retry strategy defined in the job
 *             definition.</p>
 */
export interface BatchRetryStrategy {
  __type?: "BatchRetryStrategy";
  /**
   * <p>The number of times to attempt to retry, if the job fails. Valid values are
   *             1–10.</p>
   */
  Attempts?: number;
}

export namespace BatchRetryStrategy {
  export const filterSensitiveLog = (obj: BatchRetryStrategy): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchRetryStrategy =>
    __isa(o, "BatchRetryStrategy");
}

/**
 * <p>There is concurrent modification on a resource.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (
    obj: ConcurrentModificationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModificationException =>
    __isa(o, "ConcurrentModificationException");
}

/**
 * <p>A JSON string that you can use to limit the event bus permissions that you're granting
 *             to only accounts that fulfill the condition. Currently, the only supported condition is
 *             membership in a certain AWS organization. The string must contain <code>Type</code>,
 *                 <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field
 *             specifies the ID of the AWS organization. The following is an example value for
 *                 <code>Condition</code>:</p>
 *         <p>
 *             <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code>
 *          </p>
 */
export interface Condition {
  __type?: "Condition";
  /**
   * <p>The key for the condition. Currently, the only supported key is
   *                 <code>aws:PrincipalOrgID</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>The type of condition. Currently, the only supported value is
   *                 <code>StringEquals</code>.</p>
   */
  Type: string | undefined;

  /**
   * <p>The value for the key. Currently, this must be the ID of the organization.</p>
   */
  Value: string | undefined;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

export interface CreateEventBusRequest {
  __type?: "CreateEventBusRequest";
  /**
   * <p>If you're creating a partner event bus, this specifies the partner event source that
   *             the new event bus will be matched with.</p>
   */
  EventSourceName?: string;

  /**
   * <p>The name of the new event bus. </p>
   *         <p>The names of custom event buses can't contain the <code>/</code> character. You can't use the name
   *                 <code>default</code> for a custom event bus because this name is already used for
   *             your account's default event bus.</p>
   *         <p>If this is a partner event bus, the name must exactly match the name of the partner event source that this event bus
   *             is matched to. This name will include the <code>/</code> character.</p>
   */
  Name: string | undefined;
}

export namespace CreateEventBusRequest {
  export const filterSensitiveLog = (obj: CreateEventBusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventBusRequest =>
    __isa(o, "CreateEventBusRequest");
}

export interface CreateEventBusResponse {
  __type?: "CreateEventBusResponse";
  /**
   * <p>The ARN of the new event bus.</p>
   */
  EventBusArn?: string;
}

export namespace CreateEventBusResponse {
  export const filterSensitiveLog = (obj: CreateEventBusResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventBusResponse =>
    __isa(o, "CreateEventBusResponse");
}

export interface CreatePartnerEventSourceRequest {
  __type?: "CreatePartnerEventSourceRequest";
  /**
   * <p>The AWS account ID of the customer who is permitted to create a matching partner event bus for this partner event source.</p>
   */
  Account: string | undefined;

  /**
   * <p>The name of the partner event source. This name must be unique and must be in the format
   *             <code>
   *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>.
   *             The AWS account that wants to use this partner event source
   *         must create a partner event bus with a name that matches the name of the partner event source.</p>
   */
  Name: string | undefined;
}

export namespace CreatePartnerEventSourceRequest {
  export const filterSensitiveLog = (
    obj: CreatePartnerEventSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePartnerEventSourceRequest =>
    __isa(o, "CreatePartnerEventSourceRequest");
}

export interface CreatePartnerEventSourceResponse {
  __type?: "CreatePartnerEventSourceResponse";
  /**
   * <p>The ARN of the partner event source.</p>
   */
  EventSourceArn?: string;
}

export namespace CreatePartnerEventSourceResponse {
  export const filterSensitiveLog = (
    obj: CreatePartnerEventSourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePartnerEventSourceResponse =>
    __isa(o, "CreatePartnerEventSourceResponse");
}

export interface DeactivateEventSourceRequest {
  __type?: "DeactivateEventSourceRequest";
  /**
   * <p>The name of the partner event source to deactivate.</p>
   */
  Name: string | undefined;
}

export namespace DeactivateEventSourceRequest {
  export const filterSensitiveLog = (
    obj: DeactivateEventSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeactivateEventSourceRequest =>
    __isa(o, "DeactivateEventSourceRequest");
}

export interface DeleteEventBusRequest {
  __type?: "DeleteEventBusRequest";
  /**
   * <p>The name of the event bus to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteEventBusRequest {
  export const filterSensitiveLog = (obj: DeleteEventBusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEventBusRequest =>
    __isa(o, "DeleteEventBusRequest");
}

export interface DeletePartnerEventSourceRequest {
  __type?: "DeletePartnerEventSourceRequest";
  /**
   * <p>The AWS account ID of the AWS customer that the event source was created for.</p>
   */
  Account: string | undefined;

  /**
   * <p>The name of the event source to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeletePartnerEventSourceRequest {
  export const filterSensitiveLog = (
    obj: DeletePartnerEventSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePartnerEventSourceRequest =>
    __isa(o, "DeletePartnerEventSourceRequest");
}

export interface DeleteRuleRequest {
  __type?: "DeleteRuleRequest";
  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>If this is a managed rule, created by an AWS service on your behalf, you must specify <code>Force</code>
   *         as <code>True</code> to delete the rule. This parameter is ignored for rules that are not managed rules. You can check
   *         whether a rule is a managed rule by using <code>DescribeRule</code> or <code>ListRules</code> and checking the
   *         <code>ManagedBy</code> field of the response.</p>
   */
  Force?: boolean;

  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;
}

export namespace DeleteRuleRequest {
  export const filterSensitiveLog = (obj: DeleteRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleRequest =>
    __isa(o, "DeleteRuleRequest");
}

export interface DescribeEventBusRequest {
  __type?: "DescribeEventBusRequest";
  /**
   * <p>The name of the event bus to show details for. If you omit this, the default event bus is displayed.</p>
   */
  Name?: string;
}

export namespace DescribeEventBusRequest {
  export const filterSensitiveLog = (obj: DescribeEventBusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventBusRequest =>
    __isa(o, "DescribeEventBusRequest");
}

export interface DescribeEventBusResponse {
  __type?: "DescribeEventBusResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the event bus. Currently, this is always <code>default</code>.</p>
   */
  Name?: string;

  /**
   * <p>The policy that enables the external account to send events to your account.</p>
   */
  Policy?: string;
}

export namespace DescribeEventBusResponse {
  export const filterSensitiveLog = (obj: DescribeEventBusResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventBusResponse =>
    __isa(o, "DescribeEventBusResponse");
}

export interface DescribeEventSourceRequest {
  __type?: "DescribeEventSourceRequest";
  /**
   * <p>The name of the partner event source to display the details of.</p>
   */
  Name: string | undefined;
}

export namespace DescribeEventSourceRequest {
  export const filterSensitiveLog = (obj: DescribeEventSourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventSourceRequest =>
    __isa(o, "DescribeEventSourceRequest");
}

export interface DescribeEventSourceResponse {
  __type?: "DescribeEventSourceResponse";
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the SaaS partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire if you don't create a matching
   *             event bus.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it's <code>ACTIVE</code>, you have already created a
   *             matching event bus for this event source, and that event bus is active. If it's
   *                 <code>PENDING</code>, either you haven't yet created a matching event bus, or that
   *             event bus is deactivated. If it's <code>DELETED</code>, you have created a matching
   *             event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState | string;
}

export namespace DescribeEventSourceResponse {
  export const filterSensitiveLog = (
    obj: DescribeEventSourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventSourceResponse =>
    __isa(o, "DescribeEventSourceResponse");
}

export interface DescribePartnerEventSourceRequest {
  __type?: "DescribePartnerEventSourceRequest";
  /**
   * <p>The name of the event source to display.</p>
   */
  Name: string | undefined;
}

export namespace DescribePartnerEventSourceRequest {
  export const filterSensitiveLog = (
    obj: DescribePartnerEventSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePartnerEventSourceRequest =>
    __isa(o, "DescribePartnerEventSourceRequest");
}

export interface DescribePartnerEventSourceResponse {
  __type?: "DescribePartnerEventSourceResponse";
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;
}

export namespace DescribePartnerEventSourceResponse {
  export const filterSensitiveLog = (
    obj: DescribePartnerEventSourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePartnerEventSourceResponse =>
    __isa(o, "DescribePartnerEventSourceResponse");
}

export interface DescribeRuleRequest {
  __type?: "DescribeRuleRequest";
  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;
}

export namespace DescribeRuleRequest {
  export const filterSensitiveLog = (obj: DescribeRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRuleRequest =>
    __isa(o, "DescribeRuleRequest");
}

export interface DescribeRuleResponse {
  __type?: "DescribeRuleResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>If this is a managed rule, created by an AWS service on your behalf, this field
   *             displays the principal name of the AWS service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>The scheduling expression: for example, <code>"cron(0 20 * * ? *)"</code> or
   *                 <code>"rate(5 minutes)"</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>Specifies whether the rule is enabled or disabled.</p>
   */
  State?: RuleState | string;
}

export namespace DescribeRuleResponse {
  export const filterSensitiveLog = (obj: DescribeRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRuleResponse =>
    __isa(o, "DescribeRuleResponse");
}

export interface DisableRuleRequest {
  __type?: "DisableRuleRequest";
  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;
}

export namespace DisableRuleRequest {
  export const filterSensitiveLog = (obj: DisableRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableRuleRequest =>
    __isa(o, "DisableRuleRequest");
}

/**
 * <p>The custom parameters to be used when the target is an Amazon ECS task.</p>
 */
export interface EcsParameters {
  __type?: "EcsParameters";
  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you
   *             specify here must match one of the launch type (compatibilities) of the target task. The <code>FARGATE</code>
   *             value is supported only in the Regions where AWS Fargate with Amazon ECS is supported.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">AWS Fargate on Amazon
   *                 ECS</a> in the <i>Amazon Elastic Container Service Developer
   *                 Guide</i>.</p>
   */
  LaunchType?: LaunchType | string;

  /**
   * <p>Use this structure if the ECS task uses the <code>awsvpc</code> network mode. This
   *             structure specifies the VPC subnets and security groups associated with the task and
   *             whether a public IP address is to be used. This structure is required if
   *                 <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode
   *             is required for Fargate tasks.</p>
   *         <p>If you specify <code>NetworkConfiguration</code> when the target ECS task doesn't use
   *             the <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *             platform version, such as <code>1.1.0</code>.</p>
   *             <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>.
   *             For more information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform
   *                 Versions</a> in the <i>Amazon Elastic Container Service Developer
   *                 Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is
   *             1.</p>
   */
  TaskCount?: number;

  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   */
  TaskDefinitionArn: string | undefined;
}

export namespace EcsParameters {
  export const filterSensitiveLog = (obj: EcsParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is EcsParameters => __isa(o, "EcsParameters");
}

export interface EnableRuleRequest {
  __type?: "EnableRuleRequest";
  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;
}

export namespace EnableRuleRequest {
  export const filterSensitiveLog = (obj: EnableRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableRuleRequest =>
    __isa(o, "EnableRuleRequest");
}

/**
 * <p>An event bus receives events from a source and routes them to rules associated with that event bus. Your
 *             account's default event bus receives rules from AWS services. A custom event bus can receive rules from AWS services
 *             as well as your custom applications and services. A partner event bus receives events from an event source created
 *             by an SaaS partner. These events come from the partners services or applications.</p>
 */
export interface EventBus {
  __type?: "EventBus";
  /**
   * <p>The ARN of the event bus.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the event bus.</p>
   */
  Name?: string;

  /**
   * <p>The permissions policy of the event bus, describing which other AWS accounts can write events to this event bus.</p>
   */
  Policy?: string;
}

export namespace EventBus {
  export const filterSensitiveLog = (obj: EventBus): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventBus => __isa(o, "EventBus");
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source,
 *                 that AWS account can receive events from the partner's applications or services.</p>
 */
export interface EventSource {
  __type?: "EventSource";
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time when the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time when the event source will expire if the AWS account doesn't
   *             create a matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it's <code>ACTIVE</code>, you have already
   *             created a matching event bus for this event source, and that event bus is active. If
   *             it's <code>PENDING</code>, either you haven't yet created a matching event bus, or that
   *             event bus is deactivated. If it's <code>DELETED</code>, you have created a matching
   *             event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState | string;
}

export namespace EventSource {
  export const filterSensitiveLog = (obj: EventSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSource => __isa(o, "EventSource");
}

export enum EventSourceState {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  PENDING = "PENDING"
}

/**
 * <p>Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.</p>
 */
export interface InputTransformer {
  __type?: "InputTransformer";
  /**
   * <p>Map of JSON paths to be extracted from the event. You can then insert these in the
   *             template in <code>InputTemplate</code> to produce the output to be sent to the
   *             target.</p>
   *         <p>
   *             <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid JSON path. You can have
   *             as many as 10 key-value pairs.
   *             You must use JSON dot notation, not bracket notation.</p>
   *         <p>The keys can't start with <code>"AWS"</code>.</p>
   */
  InputPathsMap?: { [key: string]: string };

  /**
   * <p>Input template where you specify placeholders that will be filled with the values
   *             of the keys from <code>InputPathsMap</code> to customize the data sent to the target.
   *             Enclose each <code>InputPathsMaps</code> value in brackets:
   *                 <<i>value</i>>. The InputTemplate must be valid JSON.</p>
   *
   *         <p>If <code>InputTemplate</code> is a JSON object (surrounded by curly braces), the following restrictions apply:</p>
   *         <ul>
   *             <li>
   *                 <p>The placeholder can't be used as an object key</p>
   *             </li>
   *             <li>
   *                 <p>Object values can't include quote marks</p>
   *             </li>
   *          </ul>
   *         <p>The following example shows the syntax for using <code>InputPathsMap</code> and <code>InputTemplate</code>.</p>
   *         <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *          <p>
   *             <code>{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": "<instance> is in state <status>"</code>
   *          </p>
   *          <p>
   *             <code>}</code>
   *          </p>
   *         <p>To have the <code>InputTemplate</code> include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:</p>
   *         <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *         <p>
   *             <code>{</code>
   *          </p>
   *         <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code>
   *          </p>
   *         <p>
   *             <code>"InputTemplate": "<instance> is in state \"<status>\""</code>
   *          </p>
   *         <p>
   *             <code>}</code>
   *          </p>
   */
  InputTemplate: string | undefined;
}

export namespace InputTransformer {
  export const filterSensitiveLog = (obj: InputTransformer): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputTransformer =>
    __isa(o, "InputTransformer");
}

/**
 * <p>This exception occurs due to unexpected causes.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  message?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalException =>
    __isa(o, "InternalException");
}

/**
 * <p>The event pattern isn't valid.</p>
 */
export interface InvalidEventPatternException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEventPatternException";
  $fault: "client";
  message?: string;
}

export namespace InvalidEventPatternException {
  export const filterSensitiveLog = (
    obj: InvalidEventPatternException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidEventPatternException =>
    __isa(o, "InvalidEventPatternException");
}

/**
 * <p>The specified state isn't a valid state for an event source.</p>
 */
export interface InvalidStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidStateException {
  export const filterSensitiveLog = (obj: InvalidStateException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidStateException =>
    __isa(o, "InvalidStateException");
}

/**
 * <p>This object enables you to specify a JSON path to extract from the event and use as
 *             the partition key for the Amazon Kinesis data stream so that you can control the shard
 *             that the event goes to. If you don't include this parameter, the default is to use the
 *                 <code>eventId</code> as the partition key.</p>
 */
export interface KinesisParameters {
  __type?: "KinesisParameters";
  /**
   * <p>The JSON path to be extracted from the event and used as the partition key. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   */
  PartitionKeyPath: string | undefined;
}

export namespace KinesisParameters {
  export const filterSensitiveLog = (obj: KinesisParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisParameters =>
    __isa(o, "KinesisParameters");
}

export enum LaunchType {
  EC2 = "EC2",
  FARGATE = "FARGATE"
}

/**
 * <p>You tried to create more resources than is allowed.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListEventBusesRequest {
  __type?: "ListEventBusesRequest";
  /**
   * <p>Specifying this limits the number of results returned by this operation. The
   *             operation also returns a <code>NextToken</code> that you can use in a subsequent
   *             operation to retrieve the next set of results.</p>
   */
  Limit?: number;

  /**
   * <p>Specifying this limits the results to only those event buses with names that start
   *                 with the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventBusesRequest {
  export const filterSensitiveLog = (obj: ListEventBusesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEventBusesRequest =>
    __isa(o, "ListEventBusesRequest");
}

export interface ListEventBusesResponse {
  __type?: "ListEventBusesResponse";
  /**
   * <p>This list of event buses.</p>
   */
  EventBuses?: EventBus[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventBusesResponse {
  export const filterSensitiveLog = (obj: ListEventBusesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEventBusesResponse =>
    __isa(o, "ListEventBusesResponse");
}

export interface ListEventSourcesRequest {
  __type?: "ListEventSourcesRequest";
  /**
   * <p>Specifying this limits the number of results returned by this operation. The
   *             operation also returns a <code>NextToken</code> that you can use in a subsequent
   *             operation to retrieve the next set of results.</p>
   */
  Limit?: number;

  /**
   * <p>Specifying this limits the results to only those partner event sources with names that start
   *             with the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventSourcesRequest {
  export const filterSensitiveLog = (obj: ListEventSourcesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEventSourcesRequest =>
    __isa(o, "ListEventSourcesRequest");
}

export interface ListEventSourcesResponse {
  __type?: "ListEventSourcesResponse";
  /**
   * <p>The list of event sources.</p>
   */
  EventSources?: EventSource[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventSourcesResponse {
  export const filterSensitiveLog = (obj: ListEventSourcesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEventSourcesResponse =>
    __isa(o, "ListEventSourcesResponse");
}

export interface ListPartnerEventSourceAccountsRequest {
  __type?: "ListPartnerEventSourceAccountsRequest";
  /**
   * <p>The name of the partner event source to display account information about.</p>
   */
  EventSourceName: string | undefined;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The
   *             operation also returns a <code>NextToken</code> that you can use in a subsequent
   *             operation to retrieve the next set of results.</p>
   */
  Limit?: number;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListPartnerEventSourceAccountsRequest {
  export const filterSensitiveLog = (
    obj: ListPartnerEventSourceAccountsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPartnerEventSourceAccountsRequest =>
    __isa(o, "ListPartnerEventSourceAccountsRequest");
}

export interface ListPartnerEventSourceAccountsResponse {
  __type?: "ListPartnerEventSourceAccountsResponse";
  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[];
}

export namespace ListPartnerEventSourceAccountsResponse {
  export const filterSensitiveLog = (
    obj: ListPartnerEventSourceAccountsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPartnerEventSourceAccountsResponse =>
    __isa(o, "ListPartnerEventSourceAccountsResponse");
}

export interface ListPartnerEventSourcesRequest {
  __type?: "ListPartnerEventSourcesRequest";
  /**
   * <p>pecifying this limits the number of results returned by this operation. The
   *             operation also returns a <code>NextToken</code> that you can use in a subsequent
   *             operation to retrieve the next set of results.</p>
   */
  Limit?: number;

  /**
   * <p>If you specify this, the results are limited to only those partner event sources that start with the
   *                 string you specify.</p>
   */
  NamePrefix: string | undefined;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListPartnerEventSourcesRequest {
  export const filterSensitiveLog = (
    obj: ListPartnerEventSourcesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPartnerEventSourcesRequest =>
    __isa(o, "ListPartnerEventSourcesRequest");
}

export interface ListPartnerEventSourcesResponse {
  __type?: "ListPartnerEventSourcesResponse";
  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSources?: PartnerEventSource[];
}

export namespace ListPartnerEventSourcesResponse {
  export const filterSensitiveLog = (
    obj: ListPartnerEventSourcesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPartnerEventSourcesResponse =>
    __isa(o, "ListPartnerEventSourcesResponse");
}

export interface ListRuleNamesByTargetRequest {
  __type?: "ListRuleNamesByTargetRequest";
  /**
   * <p>Limits the results to show only the rules associated with the specified event bus.</p>
   */
  EventBusName?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target resource.</p>
   */
  TargetArn: string | undefined;
}

export namespace ListRuleNamesByTargetRequest {
  export const filterSensitiveLog = (
    obj: ListRuleNamesByTargetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRuleNamesByTargetRequest =>
    __isa(o, "ListRuleNamesByTargetRequest");
}

export interface ListRuleNamesByTargetResponse {
  __type?: "ListRuleNamesByTargetResponse";
  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>The names of the rules that can invoke the given target.</p>
   */
  RuleNames?: string[];
}

export namespace ListRuleNamesByTargetResponse {
  export const filterSensitiveLog = (
    obj: ListRuleNamesByTargetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRuleNamesByTargetResponse =>
    __isa(o, "ListRuleNamesByTargetResponse");
}

export interface ListRulesRequest {
  __type?: "ListRulesRequest";
  /**
   * <p>Limits the results to show only the rules associated with the specified event bus.</p>
   */
  EventBusName?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;

  /**
   * <p>The prefix matching the rule name.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListRulesRequest {
  export const filterSensitiveLog = (obj: ListRulesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRulesRequest =>
    __isa(o, "ListRulesRequest");
}

export interface ListRulesResponse {
  __type?: "ListRulesResponse";
  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>The rules that match the specified criteria.</p>
   */
  Rules?: Rule[];
}

export namespace ListRulesResponse {
  export const filterSensitiveLog = (obj: ListRulesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRulesResponse =>
    __isa(o, "ListRulesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the rule for which you want to view tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tag keys and values associated with the rule that you specified.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface ListTargetsByRuleRequest {
  __type?: "ListTargetsByRuleRequest";
  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;
}

export namespace ListTargetsByRuleRequest {
  export const filterSensitiveLog = (obj: ListTargetsByRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsByRuleRequest =>
    __isa(o, "ListTargetsByRuleRequest");
}

export interface ListTargetsByRuleResponse {
  __type?: "ListTargetsByRuleResponse";
  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results, the value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>The targets assigned to the rule.</p>
   */
  Targets?: Target[];
}

export namespace ListTargetsByRuleResponse {
  export const filterSensitiveLog = (obj: ListTargetsByRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsByRuleResponse =>
    __isa(o, "ListTargetsByRuleResponse");
}

/**
 * <p>An AWS service created this rule on behalf of your account. That service manages it.
 *             If you see this error in response to <code>DeleteRule</code> or
 *                 <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those
 *             calls to delete the rule or remove targets from the rule. You can't modify these managed
 *             rules by using <code>DisableRule</code>, <code>EnableRule</code>,
 *                 <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or
 *                 <code>UntagResource</code>. </p>
 */
export interface ManagedRuleException
  extends __SmithyException,
    $MetadataBearer {
  name: "ManagedRuleException";
  $fault: "client";
  message?: string;
}

export namespace ManagedRuleException {
  export const filterSensitiveLog = (obj: ManagedRuleException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedRuleException =>
    __isa(o, "ManagedRuleException");
}

/**
 * <p>This structure specifies the network configuration for an ECS task.</p>
 */
export interface NetworkConfiguration {
  __type?: "NetworkConfiguration";
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task and
   *             whether a public IP address is to be used. This structure is relevant only for ECS tasks
   *             that use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

export namespace NetworkConfiguration {
  export const filterSensitiveLog = (obj: NetworkConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is NetworkConfiguration =>
    __isa(o, "NetworkConfiguration");
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source,
 *                 that AWS account can receive events from the partner's applications or services.</p>
 */
export interface PartnerEventSource {
  __type?: "PartnerEventSource";
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;
}

export namespace PartnerEventSource {
  export const filterSensitiveLog = (obj: PartnerEventSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is PartnerEventSource =>
    __isa(o, "PartnerEventSource");
}

/**
 * <p>The AWS account that a partner event source has been offered to.</p>
 */
export interface PartnerEventSourceAccount {
  __type?: "PartnerEventSourceAccount";
  /**
   * <p>The AWS account ID that the partner event source was offered to.</p>
   */
  Account?: string;

  /**
   * <p>The date and time when the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time when the event source will expire if the AWS account doesn't
   *             create a matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The state of the event source. If it's <code>ACTIVE</code>, you have already
   *             created a matching event bus for this event source, and that event bus is active. If
   *             it's <code>PENDING</code>, either you haven't yet created a matching event bus, or that
   *             event bus is deactivated. If it's <code>DELETED</code>, you have created a matching
   *             event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState | string;
}

export namespace PartnerEventSourceAccount {
  export const filterSensitiveLog = (obj: PartnerEventSourceAccount): any => ({
    ...obj
  });
  export const isa = (o: any): o is PartnerEventSourceAccount =>
    __isa(o, "PartnerEventSourceAccount");
}

/**
 * <p>The event bus policy is too long. For more information, see the limits.</p>
 */
export interface PolicyLengthExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyLengthExceededException";
  $fault: "client";
  message?: string;
}

export namespace PolicyLengthExceededException {
  export const filterSensitiveLog = (
    obj: PolicyLengthExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyLengthExceededException =>
    __isa(o, "PolicyLengthExceededException");
}

export interface PutEventsRequest {
  __type?: "PutEventsRequest";
  /**
   * <p>The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.</p>
   */
  Entries: PutEventsRequestEntry[] | undefined;
}

export namespace PutEventsRequest {
  export const filterSensitiveLog = (obj: PutEventsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutEventsRequest =>
    __isa(o, "PutEventsRequest");
}

/**
 * <p>Represents an event to be submitted.</p>
 */
export interface PutEventsRequestEntry {
  __type?: "PutEventsRequestEntry";
  /**
   * <p>A valid JSON object. There is no other schema imposed. The JSON object can contain
   *             fields and nested subobjects.</p>
   *         <p>This field is required.</p>
   */
  Detail?: string;

  /**
   * <p>Free-form string used to decide which fields to expect in the event
   *             detail. This field is required.</p>
   */
  DetailType?: string;

  /**
   * <p>The event bus that will receive the event. Only the rules that are associated with
   *             this event bus can match the event.</p>
   */
  EventBusName?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily
   *             concerns. Any number, including zero, can be present.</p>
   */
  Resources?: string[];

  /**
   * <p>The source of the event. This field is required.</p>
   */
  Source?: string;

  /**
   * <p>The timestamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no timestamp is
   *             provided, the timestamp of the <a>PutEvents</a> call is used.</p>
   */
  Time?: Date;
}

export namespace PutEventsRequestEntry {
  export const filterSensitiveLog = (obj: PutEventsRequestEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutEventsRequestEntry =>
    __isa(o, "PutEventsRequestEntry");
}

export interface PutEventsResponse {
  __type?: "PutEventsResponse";
  /**
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was successful,
   *             the entry has the event ID in it. Otherwise, you can use the error code and error message
   *             to identify the problem with the entry.</p>
   */
  Entries?: PutEventsResultEntry[];

  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;
}

export namespace PutEventsResponse {
  export const filterSensitiveLog = (obj: PutEventsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutEventsResponse =>
    __isa(o, "PutEventsResponse");
}

/**
 * <p>Represents an event that failed to be submitted.</p>
 */
export interface PutEventsResultEntry {
  __type?: "PutEventsResultEntry";
  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;
}

export namespace PutEventsResultEntry {
  export const filterSensitiveLog = (obj: PutEventsResultEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutEventsResultEntry =>
    __isa(o, "PutEventsResultEntry");
}

export interface PutPartnerEventsRequest {
  __type?: "PutPartnerEventsRequest";
  /**
   * <p>The list of events to write to the event bus.</p>
   */
  Entries: PutPartnerEventsRequestEntry[] | undefined;
}

export namespace PutPartnerEventsRequest {
  export const filterSensitiveLog = (obj: PutPartnerEventsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPartnerEventsRequest =>
    __isa(o, "PutPartnerEventsRequest");
}

/**
 * <p>The details about an event generated by an SaaS partner.</p>
 */
export interface PutPartnerEventsRequestEntry {
  __type?: "PutPartnerEventsRequestEntry";
  /**
   * <p>A valid JSON object. There is no other schema imposed. The JSON object can contain
   *                 fields and nested subobjects. This field is required.</p>
   */
  Detail?: string;

  /**
   * <p>A free-form string used to decide which fields to expect in the event
   *             detail. This field is required.</p>
   */
  DetailType?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily
   *             concerns. Any number, including zero, can be present.</p>
   */
  Resources?: string[];

  /**
   * <p>The event source that is generating the evntry. This field is required.</p>
   */
  Source?: string;

  /**
   * <p>The date and time of the event.</p>
   */
  Time?: Date;
}

export namespace PutPartnerEventsRequestEntry {
  export const filterSensitiveLog = (
    obj: PutPartnerEventsRequestEntry
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPartnerEventsRequestEntry =>
    __isa(o, "PutPartnerEventsRequestEntry");
}

export interface PutPartnerEventsResponse {
  __type?: "PutPartnerEventsResponse";
  /**
   * <p>The list of events from this operation that were successfully written to the partner event bus.</p>
   */
  Entries?: PutPartnerEventsResultEntry[];

  /**
   * <p>The number of events from this operation that couldn't be written to the partner
   *             event bus.</p>
   */
  FailedEntryCount?: number;
}

export namespace PutPartnerEventsResponse {
  export const filterSensitiveLog = (obj: PutPartnerEventsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPartnerEventsResponse =>
    __isa(o, "PutPartnerEventsResponse");
}

/**
 * <p>Represents an event that a partner tried to generate but failed.</p>
 */
export interface PutPartnerEventsResultEntry {
  __type?: "PutPartnerEventsResultEntry";
  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;
}

export namespace PutPartnerEventsResultEntry {
  export const filterSensitiveLog = (
    obj: PutPartnerEventsResultEntry
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPartnerEventsResultEntry =>
    __isa(o, "PutPartnerEventsResultEntry");
}

export interface PutPermissionRequest {
  __type?: "PutPermissionRequest";
  /**
   * <p>The action that you're enabling the other account to perform. Currently, this must
   *             be <code>events:PutEvents</code>.</p>
   */
  Action: string | undefined;

  /**
   * <p>This parameter enables you to limit the permission to accounts that fulfill a certain
   *             condition, such as being a member of a certain AWS organization. For more information
   *             about AWS Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is AWS
   *                 Organizations?</a> in the <i>AWS Organizations User
   *             Guide</i>.</p>
   *         <p>If you specify <code>Condition</code> with an AWS organization ID and specify "*" as
   *             the value for <code>Principal</code>, you grant permission to all the accounts in the
   *             named organization.</p>
   *
   *         <p>The <code>Condition</code> is a JSON string that must contain <code>Type</code>,
   *                 <code>Key</code>, and <code>Value</code> fields.</p>
   */
  Condition?: Condition;

  /**
   * <p>The event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The 12-digit AWS account ID that you are permitting to put events to your default
   *             event bus. Specify "*" to permit any account to put events to your default event bus.</p>
   *
   *         <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules
   *             that might match undesirable events. To create more secure rules, make sure that the
   *             event pattern for each rule contains an <code>account</code> field with a specific
   *             account ID to receive events from. Rules that have an account field match events sent only
   *             from accounts that are listed in the rule's <code>account</code> field.</p>
   */
  Principal: string | undefined;

  /**
   * <p>An identifier string for the external account that you're granting permissions to.
   *             If you later want to revoke the permission for this external account, specify this
   *                 <code>StatementId</code> when you run <a>RemovePermission</a>.</p>
   */
  StatementId: string | undefined;
}

export namespace PutPermissionRequest {
  export const filterSensitiveLog = (obj: PutPermissionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPermissionRequest =>
    __isa(o, "PutPermissionRequest");
}

export interface PutRuleRequest {
  __type?: "PutRuleRequest";
  /**
   * <p>A description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The event bus to associate with this rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The event pattern. For more information, see
   *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The name of the rule that you're creating or updating.</p>
   *         <p>A rule can't have the same name as another rule in the same Region or on the same event bus.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>The scheduling expression: for example, <code>"cron(0 20 * * ? *)"</code> or
   *                 <code>"rate(5 minutes)"</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State?: RuleState | string;

  /**
   * <p>The list of key-value pairs to associate with the rule.</p>
   */
  Tags?: Tag[];
}

export namespace PutRuleRequest {
  export const filterSensitiveLog = (obj: PutRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRuleRequest =>
    __isa(o, "PutRuleRequest");
}

export interface PutRuleResponse {
  __type?: "PutRuleResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

export namespace PutRuleResponse {
  export const filterSensitiveLog = (obj: PutRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRuleResponse =>
    __isa(o, "PutRuleResponse");
}

export interface PutTargetsRequest {
  __type?: "PutTargetsRequest";
  /**
   * <p>The name of the event bus associated with the rule. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The targets to update or add to the rule.</p>
   */
  Targets: Target[] | undefined;
}

export namespace PutTargetsRequest {
  export const filterSensitiveLog = (obj: PutTargetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTargetsRequest =>
    __isa(o, "PutTargetsRequest");
}

export interface PutTargetsResponse {
  __type?: "PutTargetsResponse";
  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: PutTargetsResultEntry[];

  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;
}

export namespace PutTargetsResponse {
  export const filterSensitiveLog = (obj: PutTargetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTargetsResponse =>
    __isa(o, "PutTargetsResponse");
}

/**
 * <p>Represents a target that failed to be added to a rule.</p>
 */
export interface PutTargetsResultEntry {
  __type?: "PutTargetsResultEntry";
  /**
   * <p>The error code that indicates why the target addition failed. If the value is <code>ConcurrentModificationException</code>, too many
   *         requests were made at the same time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target addition failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;
}

export namespace PutTargetsResultEntry {
  export const filterSensitiveLog = (obj: PutTargetsResultEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTargetsResultEntry =>
    __isa(o, "PutTargetsResultEntry");
}

export interface RemovePermissionRequest {
  __type?: "RemovePermissionRequest";
  /**
   * <p>The name of the event bus to revoke permissions for. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.</p>
   */
  StatementId: string | undefined;
}

export namespace RemovePermissionRequest {
  export const filterSensitiveLog = (obj: RemovePermissionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemovePermissionRequest =>
    __isa(o, "RemovePermissionRequest");
}

export interface RemoveTargetsRequest {
  __type?: "RemoveTargetsRequest";
  /**
   * <p>The name of the event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * <p>If this is a managed rule created by an AWS service on your behalf, you must specify
   *                 <code>Force</code> as <code>True</code> to remove targets. This parameter is ignored
   *             for rules that aren't managed rules. You can check whether a rule is a managed rule by
   *             using <code>DescribeRule</code> or <code>ListRules</code> and checking the
   *                 <code>ManagedBy</code> field of the response.</p>
   */
  Force?: boolean;

  /**
   * <p>The IDs of the targets to remove from the rule.</p>
   */
  Ids: string[] | undefined;

  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;
}

export namespace RemoveTargetsRequest {
  export const filterSensitiveLog = (obj: RemoveTargetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTargetsRequest =>
    __isa(o, "RemoveTargetsRequest");
}

export interface RemoveTargetsResponse {
  __type?: "RemoveTargetsResponse";
  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: RemoveTargetsResultEntry[];

  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;
}

export namespace RemoveTargetsResponse {
  export const filterSensitiveLog = (obj: RemoveTargetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTargetsResponse =>
    __isa(o, "RemoveTargetsResponse");
}

/**
 * <p>Represents a target that failed to be removed from a rule.</p>
 */
export interface RemoveTargetsResultEntry {
  __type?: "RemoveTargetsResultEntry";
  /**
   * <p>The error code that indicates why the target removal failed. If the value is <code>ConcurrentModificationException</code>, too many
   *             requests were made at the same time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target removal failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;
}

export namespace RemoveTargetsResultEntry {
  export const filterSensitiveLog = (obj: RemoveTargetsResultEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTargetsResultEntry =>
    __isa(o, "RemoveTargetsResultEntry");
}

/**
 * <p>The resource that you're trying to create already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException =>
    __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>An entity that you specified doesn't exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Contains information about a rule in Amazon EventBridge.</p>
 */
export interface Rule {
  __type?: "Rule";
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * <p>The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>If an AWS service created the rule on behalf of your account, this field displays the
   *             principal name of the service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p>
   */
  RoleArn?: string;

  /**
   * <p>The scheduling expression: for example, <code>"cron(0 20 * * ? *)"</code> or
   *                 <code>"rate(5 minutes)"</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The state of the rule.</p>
   */
  State?: RuleState | string;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj
  });
  export const isa = (o: any): o is Rule => __isa(o, "Rule");
}

export enum RuleState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>This parameter contains the criteria (either <code>InstanceIds</code> or a tag)
 *             used to specify which EC2 instances are to be sent the command. </p>
 */
export interface RunCommandParameters {
  __type?: "RunCommandParameters";
  /**
   * <p>Currently, we support including only one <code>RunCommandTarget</code> block, which
   *             specifies either an array of <code>InstanceIds</code> or a tag.</p>
   */
  RunCommandTargets: RunCommandTarget[] | undefined;
}

export namespace RunCommandParameters {
  export const filterSensitiveLog = (obj: RunCommandParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is RunCommandParameters =>
    __isa(o, "RunCommandParameters");
}

/**
 * <p>Information about the EC2 instances that are to be sent the command, specified as
 *             key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but
 *             this key can specify multiple values.</p>
 */
export interface RunCommandTarget {
  __type?: "RunCommandTarget";
  /**
   * <p>Can be either <code>tag:</code>
   *             <i>tag-key</i> or <code>InstanceIds</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>If <code>Key</code> is <code>tag:</code>
   *             <i>tag-key</i>, <code>Values</code> is a list of tag values.
   *             If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code> is a list of Amazon EC2 instance IDs.</p>
   */
  Values: string[] | undefined;
}

export namespace RunCommandTarget {
  export const filterSensitiveLog = (obj: RunCommandTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is RunCommandTarget =>
    __isa(o, "RunCommandTarget");
}

/**
 * <p>This structure includes the custom parameter to be used when the target is an SQS FIFO queue.</p>
 */
export interface SqsParameters {
  __type?: "SqsParameters";
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

export namespace SqsParameters {
  export const filterSensitiveLog = (obj: SqsParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqsParameters => __isa(o, "SqsParameters");
}

/**
 * <p>A key-value pair associated with an AWS resource. In EventBridge, rules support tagging.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A string that you can use to assign a value. The combination of tag keys and values
   *             can help you organize and categorize your resources.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the rule that you're adding tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the rule.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be
 *             set as a target, see <a>PutTargets</a>.</p>
 *
 *         <p>If you're setting the event bus of another account as the target and that account
 *             granted permission to your account through an organization instead of directly by the
 *             account ID, you must specify a <code>RoleArn</code> with proper permissions in the
 *                 <code>Target</code> structure. For more information, see
 *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon
 *                 EventBridge User Guide</i>.</p>
 */
export interface Target {
  __type?: "Target";
  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;

  /**
   * <p>If the event target is an AWS Batch job, this contains the job definition, job
   *             name, and other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>AWS Batch User
   *                 Guide</i>.</p>
   */
  BatchParameters?: BatchParameters;

  /**
   * <p>Contains the Amazon ECS task definition and task count to be used if the event
   *             target is an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task
   *                 Definitions </a> in the <i>Amazon EC2 Container Service Developer
   *                 Guide</i>.</p>
   */
  EcsParameters?: EcsParameters;

  /**
   * <p>A name for the target. Use a string that will help you identify the target. Each target associated with a rule must have an <code>Id</code> unique for that rule.</p>
   */
  Id: string | undefined;

  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is passed
   *             to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data Interchange Format</a>.</p>
   */
  Input?: string;

  /**
   * <p>The value of the JSONPath that is used for extracting part of the matched event when
   *             passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON
   *             paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.</p>
   */
  InputPath?: string;

  /**
   * <p>Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs
   *         from the event and then use that data to send customized input to the target.</p>
   */
  InputTransformer?: InputTransformer;

  /**
   * <p>The custom parameter that you can use to control the shard assignment when the
   *             target is a Kinesis data stream. If you don't include this parameter, the default is to
   *             use the <code>eventId</code> as the partition key.</p>
   */
  KinesisParameters?: KinesisParameters;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers
   *         multiple targets, you can use a different IAM role for each target.</p>
   */
  RoleArn?: string;

  /**
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>
   */
  RunCommandParameters?: RunCommandParameters;

  /**
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p>
   *         <p>If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.</p>
   */
  SqsParameters?: SqsParameters;
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj
  });
  export const isa = (o: any): o is Target => __isa(o, "Target");
}

export interface TestEventPatternRequest {
  __type?: "TestEventPatternRequest";
  /**
   * <p>The event, in JSON format, to test against the event pattern.</p>
   */
  Event: string | undefined;

  /**
   * <p>The event pattern. For more information, see
   *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern: string | undefined;
}

export namespace TestEventPatternRequest {
  export const filterSensitiveLog = (obj: TestEventPatternRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestEventPatternRequest =>
    __isa(o, "TestEventPatternRequest");
}

export interface TestEventPatternResponse {
  __type?: "TestEventPatternResponse";
  /**
   * <p>Indicates whether the event matches the event pattern.</p>
   */
  Result?: boolean;
}

export namespace TestEventPatternResponse {
  export const filterSensitiveLog = (obj: TestEventPatternResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestEventPatternResponse =>
    __isa(o, "TestEventPatternResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the rule that you're removing tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}
