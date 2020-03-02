import {
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
  export function isa(o: any): o is ActivateEventSourceRequest {
    return __isa(o, "ActivateEventSourceRequest");
  }
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
  SecurityGroups?: Array<string>;

  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same
   *             VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: Array<string> | undefined;
}

export namespace AwsVpcConfiguration {
  export function isa(o: any): o is AwsVpcConfiguration {
    return __isa(o, "AwsVpcConfiguration");
  }
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
  export function isa(o: any): o is BatchArrayProperties {
    return __isa(o, "BatchArrayProperties");
  }
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
  export function isa(o: any): o is BatchParameters {
    return __isa(o, "BatchParameters");
  }
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
  export function isa(o: any): o is BatchRetryStrategy {
    return __isa(o, "BatchRetryStrategy");
  }
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
  export function isa(o: any): o is Condition {
    return __isa(o, "Condition");
  }
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
  export function isa(o: any): o is CreateEventBusRequest {
    return __isa(o, "CreateEventBusRequest");
  }
}

export interface CreateEventBusResponse {
  __type?: "CreateEventBusResponse";
  /**
   * <p>The ARN of the new event bus.</p>
   */
  EventBusArn?: string;
}

export namespace CreateEventBusResponse {
  export function isa(o: any): o is CreateEventBusResponse {
    return __isa(o, "CreateEventBusResponse");
  }
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
  export function isa(o: any): o is CreatePartnerEventSourceRequest {
    return __isa(o, "CreatePartnerEventSourceRequest");
  }
}

export interface CreatePartnerEventSourceResponse {
  __type?: "CreatePartnerEventSourceResponse";
  /**
   * <p>The ARN of the partner event source.</p>
   */
  EventSourceArn?: string;
}

export namespace CreatePartnerEventSourceResponse {
  export function isa(o: any): o is CreatePartnerEventSourceResponse {
    return __isa(o, "CreatePartnerEventSourceResponse");
  }
}

export interface DeactivateEventSourceRequest {
  __type?: "DeactivateEventSourceRequest";
  /**
   * <p>The name of the partner event source to deactivate.</p>
   */
  Name: string | undefined;
}

export namespace DeactivateEventSourceRequest {
  export function isa(o: any): o is DeactivateEventSourceRequest {
    return __isa(o, "DeactivateEventSourceRequest");
  }
}

export interface DeleteEventBusRequest {
  __type?: "DeleteEventBusRequest";
  /**
   * <p>The name of the event bus to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteEventBusRequest {
  export function isa(o: any): o is DeleteEventBusRequest {
    return __isa(o, "DeleteEventBusRequest");
  }
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
  export function isa(o: any): o is DeletePartnerEventSourceRequest {
    return __isa(o, "DeletePartnerEventSourceRequest");
  }
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
  export function isa(o: any): o is DeleteRuleRequest {
    return __isa(o, "DeleteRuleRequest");
  }
}

export interface DescribeEventBusRequest {
  __type?: "DescribeEventBusRequest";
  /**
   * <p>The name of the event bus to show details for. If you omit this, the default event bus is displayed.</p>
   */
  Name?: string;
}

export namespace DescribeEventBusRequest {
  export function isa(o: any): o is DescribeEventBusRequest {
    return __isa(o, "DescribeEventBusRequest");
  }
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
  export function isa(o: any): o is DescribeEventBusResponse {
    return __isa(o, "DescribeEventBusResponse");
  }
}

export interface DescribeEventSourceRequest {
  __type?: "DescribeEventSourceRequest";
  /**
   * <p>The name of the partner event source to display the details of.</p>
   */
  Name: string | undefined;
}

export namespace DescribeEventSourceRequest {
  export function isa(o: any): o is DescribeEventSourceRequest {
    return __isa(o, "DescribeEventSourceRequest");
  }
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
  export function isa(o: any): o is DescribeEventSourceResponse {
    return __isa(o, "DescribeEventSourceResponse");
  }
}

export interface DescribePartnerEventSourceRequest {
  __type?: "DescribePartnerEventSourceRequest";
  /**
   * <p>The name of the event source to display.</p>
   */
  Name: string | undefined;
}

export namespace DescribePartnerEventSourceRequest {
  export function isa(o: any): o is DescribePartnerEventSourceRequest {
    return __isa(o, "DescribePartnerEventSourceRequest");
  }
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
  export function isa(o: any): o is DescribePartnerEventSourceResponse {
    return __isa(o, "DescribePartnerEventSourceResponse");
  }
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
  export function isa(o: any): o is DescribeRuleRequest {
    return __isa(o, "DescribeRuleRequest");
  }
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
  export function isa(o: any): o is DescribeRuleResponse {
    return __isa(o, "DescribeRuleResponse");
  }
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
  export function isa(o: any): o is DisableRuleRequest {
    return __isa(o, "DisableRuleRequest");
  }
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
  export function isa(o: any): o is EcsParameters {
    return __isa(o, "EcsParameters");
  }
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
  export function isa(o: any): o is EnableRuleRequest {
    return __isa(o, "EnableRuleRequest");
  }
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
  export function isa(o: any): o is EventBus {
    return __isa(o, "EventBus");
  }
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
  export function isa(o: any): o is EventSource {
    return __isa(o, "EventSource");
  }
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
  export function isa(o: any): o is InputTransformer {
    return __isa(o, "InputTransformer");
  }
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
  export function isa(o: any): o is KinesisParameters {
    return __isa(o, "KinesisParameters");
  }
}

export enum LaunchType {
  EC2 = "EC2",
  FARGATE = "FARGATE"
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
  export function isa(o: any): o is ListEventBusesRequest {
    return __isa(o, "ListEventBusesRequest");
  }
}

export interface ListEventBusesResponse {
  __type?: "ListEventBusesResponse";
  /**
   * <p>This list of event buses.</p>
   */
  EventBuses?: Array<EventBus>;

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventBusesResponse {
  export function isa(o: any): o is ListEventBusesResponse {
    return __isa(o, "ListEventBusesResponse");
  }
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
  export function isa(o: any): o is ListEventSourcesRequest {
    return __isa(o, "ListEventSourcesRequest");
  }
}

export interface ListEventSourcesResponse {
  __type?: "ListEventSourcesResponse";
  /**
   * <p>The list of event sources.</p>
   */
  EventSources?: Array<EventSource>;

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListEventSourcesResponse {
  export function isa(o: any): o is ListEventSourcesResponse {
    return __isa(o, "ListEventSourcesResponse");
  }
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
  export function isa(o: any): o is ListPartnerEventSourceAccountsRequest {
    return __isa(o, "ListPartnerEventSourceAccountsRequest");
  }
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
  PartnerEventSourceAccounts?: Array<PartnerEventSourceAccount>;
}

export namespace ListPartnerEventSourceAccountsResponse {
  export function isa(o: any): o is ListPartnerEventSourceAccountsResponse {
    return __isa(o, "ListPartnerEventSourceAccountsResponse");
  }
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
  export function isa(o: any): o is ListPartnerEventSourcesRequest {
    return __isa(o, "ListPartnerEventSourcesRequest");
  }
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
  PartnerEventSources?: Array<PartnerEventSource>;
}

export namespace ListPartnerEventSourcesResponse {
  export function isa(o: any): o is ListPartnerEventSourcesResponse {
    return __isa(o, "ListPartnerEventSourcesResponse");
  }
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
  export function isa(o: any): o is ListRuleNamesByTargetRequest {
    return __isa(o, "ListRuleNamesByTargetRequest");
  }
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
  RuleNames?: Array<string>;
}

export namespace ListRuleNamesByTargetResponse {
  export function isa(o: any): o is ListRuleNamesByTargetResponse {
    return __isa(o, "ListRuleNamesByTargetResponse");
  }
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
  export function isa(o: any): o is ListRulesRequest {
    return __isa(o, "ListRulesRequest");
  }
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
  Rules?: Array<Rule>;
}

export namespace ListRulesResponse {
  export function isa(o: any): o is ListRulesResponse {
    return __isa(o, "ListRulesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the rule for which you want to view tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of tag keys and values associated with the rule that you specified.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
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
  export function isa(o: any): o is ListTargetsByRuleRequest {
    return __isa(o, "ListTargetsByRuleRequest");
  }
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
  Targets?: Array<Target>;
}

export namespace ListTargetsByRuleResponse {
  export function isa(o: any): o is ListTargetsByRuleResponse {
    return __isa(o, "ListTargetsByRuleResponse");
  }
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
  export function isa(o: any): o is NetworkConfiguration {
    return __isa(o, "NetworkConfiguration");
  }
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
  export function isa(o: any): o is PartnerEventSource {
    return __isa(o, "PartnerEventSource");
  }
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
  export function isa(o: any): o is PartnerEventSourceAccount {
    return __isa(o, "PartnerEventSourceAccount");
  }
}

export interface PutEventsRequest {
  __type?: "PutEventsRequest";
  /**
   * <p>The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.</p>
   */
  Entries: Array<PutEventsRequestEntry> | undefined;
}

export namespace PutEventsRequest {
  export function isa(o: any): o is PutEventsRequest {
    return __isa(o, "PutEventsRequest");
  }
}

/**
 * <p>Represents an event to be submitted.</p>
 */
export interface PutEventsRequestEntry {
  __type?: "PutEventsRequestEntry";
  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string can contain
   *             fields and nested subobjects.</p>
   */
  Detail?: string;

  /**
   * <p>Free-form string used to decide which fields to expect in the event
   *             detail.</p>
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
  Resources?: Array<string>;

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
  export function isa(o: any): o is PutEventsRequestEntry {
    return __isa(o, "PutEventsRequestEntry");
  }
}

export interface PutEventsResponse {
  __type?: "PutEventsResponse";
  /**
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was successful,
   *             the entry has the event ID in it. Otherwise, you can use the error code and error message
   *             to identify the problem with the entry.</p>
   */
  Entries?: Array<PutEventsResultEntry>;

  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;
}

export namespace PutEventsResponse {
  export function isa(o: any): o is PutEventsResponse {
    return __isa(o, "PutEventsResponse");
  }
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
  export function isa(o: any): o is PutEventsResultEntry {
    return __isa(o, "PutEventsResultEntry");
  }
}

export interface PutPartnerEventsRequest {
  __type?: "PutPartnerEventsRequest";
  /**
   * <p>The list of events to write to the event bus.</p>
   */
  Entries: Array<PutPartnerEventsRequestEntry> | undefined;
}

export namespace PutPartnerEventsRequest {
  export function isa(o: any): o is PutPartnerEventsRequest {
    return __isa(o, "PutPartnerEventsRequest");
  }
}

/**
 * <p>The details about an event generated by an SaaS partner.</p>
 */
export interface PutPartnerEventsRequestEntry {
  __type?: "PutPartnerEventsRequestEntry";
  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string can contain
   *             fields and nested subobjects.</p>
   */
  Detail?: string;

  /**
   * <p>A free-form string used to decide which fields to expect in the event
   *             detail.</p>
   */
  DetailType?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily
   *             concerns. Any number, including zero, can be present.</p>
   */
  Resources?: Array<string>;

  /**
   * <p>The event source that is generating the evntry.</p>
   */
  Source?: string;

  /**
   * <p>The date and time of the event.</p>
   */
  Time?: Date;
}

export namespace PutPartnerEventsRequestEntry {
  export function isa(o: any): o is PutPartnerEventsRequestEntry {
    return __isa(o, "PutPartnerEventsRequestEntry");
  }
}

export interface PutPartnerEventsResponse {
  __type?: "PutPartnerEventsResponse";
  /**
   * <p>The list of events from this operation that were successfully written to the partner event bus.</p>
   */
  Entries?: Array<PutPartnerEventsResultEntry>;

  /**
   * <p>The number of events from this operation that couldn't be written to the partner
   *             event bus.</p>
   */
  FailedEntryCount?: number;
}

export namespace PutPartnerEventsResponse {
  export function isa(o: any): o is PutPartnerEventsResponse {
    return __isa(o, "PutPartnerEventsResponse");
  }
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
  export function isa(o: any): o is PutPartnerEventsResultEntry {
    return __isa(o, "PutPartnerEventsResultEntry");
  }
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
   *             account ID to receive events from. Rules with an account field don't match any events
   *             sent from other accounts.</p>
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
  export function isa(o: any): o is PutPermissionRequest {
    return __isa(o, "PutPermissionRequest");
  }
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
  Tags?: Array<Tag>;
}

export namespace PutRuleRequest {
  export function isa(o: any): o is PutRuleRequest {
    return __isa(o, "PutRuleRequest");
  }
}

export interface PutRuleResponse {
  __type?: "PutRuleResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

export namespace PutRuleResponse {
  export function isa(o: any): o is PutRuleResponse {
    return __isa(o, "PutRuleResponse");
  }
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
  Targets: Array<Target> | undefined;
}

export namespace PutTargetsRequest {
  export function isa(o: any): o is PutTargetsRequest {
    return __isa(o, "PutTargetsRequest");
  }
}

export interface PutTargetsResponse {
  __type?: "PutTargetsResponse";
  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: Array<PutTargetsResultEntry>;

  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;
}

export namespace PutTargetsResponse {
  export function isa(o: any): o is PutTargetsResponse {
    return __isa(o, "PutTargetsResponse");
  }
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
  export function isa(o: any): o is PutTargetsResultEntry {
    return __isa(o, "PutTargetsResultEntry");
  }
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
  export function isa(o: any): o is RemovePermissionRequest {
    return __isa(o, "RemovePermissionRequest");
  }
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
  Ids: Array<string> | undefined;

  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;
}

export namespace RemoveTargetsRequest {
  export function isa(o: any): o is RemoveTargetsRequest {
    return __isa(o, "RemoveTargetsRequest");
  }
}

export interface RemoveTargetsResponse {
  __type?: "RemoveTargetsResponse";
  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: Array<RemoveTargetsResultEntry>;

  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;
}

export namespace RemoveTargetsResponse {
  export function isa(o: any): o is RemoveTargetsResponse {
    return __isa(o, "RemoveTargetsResponse");
  }
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
  export function isa(o: any): o is RemoveTargetsResultEntry {
    return __isa(o, "RemoveTargetsResultEntry");
  }
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
  export function isa(o: any): o is Rule {
    return __isa(o, "Rule");
  }
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
  RunCommandTargets: Array<RunCommandTarget> | undefined;
}

export namespace RunCommandParameters {
  export function isa(o: any): o is RunCommandParameters {
    return __isa(o, "RunCommandParameters");
  }
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
  Values: Array<string> | undefined;
}

export namespace RunCommandTarget {
  export function isa(o: any): o is RunCommandTarget {
    return __isa(o, "RunCommandTarget");
  }
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
  export function isa(o: any): o is SqsParameters {
    return __isa(o, "SqsParameters");
  }
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
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
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
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
   * <p>The ID of the target.</p>
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
  export function isa(o: any): o is Target {
    return __isa(o, "Target");
  }
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
  export function isa(o: any): o is TestEventPatternRequest {
    return __isa(o, "TestEventPatternRequest");
  }
}

export interface TestEventPatternResponse {
  __type?: "TestEventPatternResponse";
  /**
   * <p>Indicates whether the event matches the event pattern.</p>
   */
  Result?: boolean;
}

export namespace TestEventPatternResponse {
  export function isa(o: any): o is TestEventPatternResponse {
    return __isa(o, "TestEventPatternResponse");
  }
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
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
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
  export function isa(o: any): o is ConcurrentModificationException {
    return __isa(o, "ConcurrentModificationException");
  }
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
  export function isa(o: any): o is InternalException {
    return __isa(o, "InternalException");
  }
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
  export function isa(o: any): o is InvalidEventPatternException {
    return __isa(o, "InvalidEventPatternException");
  }
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
  export function isa(o: any): o is InvalidStateException {
    return __isa(o, "InvalidStateException");
  }
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
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
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
  export function isa(o: any): o is ManagedRuleException {
    return __isa(o, "ManagedRuleException");
  }
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
  export function isa(o: any): o is PolicyLengthExceededException {
    return __isa(o, "PolicyLengthExceededException");
  }
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
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
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
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}
