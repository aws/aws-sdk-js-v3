import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>
 *             User does not have permissions to perform this action.
 *          </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export type Tier =
  | "CUSTOM"
  | "DEFAULT"
  | "DOT_NET_CORE"
  | "DOT_NET_WEB"
  | "DOT_NET_WEB_TIER"
  | "DOT_NET_WORKER"
  | "JAVA_JMX"
  | "MYSQL"
  | "ORACLE"
  | "POSTGRESQL"
  | "SQL_SERVER"
  | "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP";

export type OsType = "LINUX" | "WINDOWS";

/**
 * <p>Describes a standalone resource or similarly grouped resources that the application is made
 *          up of.</p>
 */
export interface ApplicationComponent {
  /**
   * <p>The name of the component.</p>
   */
  ComponentName?: string;

  /**
   * <p>
   *          If logging is supported for the resource type, indicates whether the component has configured logs to be monitored.
   *       </p>
   */
  ComponentRemarks?: string;

  /**
   * <p>The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.</p>
   */
  ResourceType?: string;

  /**
   * <p>
   *          The operating system of the component.
   *       </p>
   */
  OsType?: OsType | string;

  /**
   * <p>The stack tier of the application component.</p>
   */
  Tier?: Tier | string;

  /**
   * <p>Indicates whether the application component is monitored. </p>
   */
  Monitor?: boolean;

  /**
   * <p>
   *          Workloads detected in the application component.
   *       </p>
   */
  DetectedWorkload?: { [key: string]: { [key: string]: string } };
}

export namespace ApplicationComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of the application.</p>
 */
export interface ApplicationInfo {
  /**
   * <p>The name of the resource group used for the application.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The lifecycle of the application. </p>
   */
  LifeCycle?: string;

  /**
   * <p>
   *          The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications
   *          for opsItem updates.
   *       </p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>
   *          Indicates whether Application Insights will create opsItems for any problem detected by Application
   *          Insights for an application.
   *       </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p>
   *          Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
   *       </p>
   */
  CWEMonitorEnabled?: boolean;

  /**
   * <p>The issues on the user side that block Application Insights from successfully monitoring
   *          an application. Example remarks include:</p>
   *          <ul>
   *             <li>
   *                <p>“Configuring application, detected 1 Errors, 3 Warnings”</p>
   *             </li>
   *             <li>
   *                <p>“Configuring application, detected 1 Unconfigured Components”</p>
   *             </li>
   *          </ul>
   */
  Remarks?: string;
}

export namespace ApplicationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not understood by the server.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

export type CloudWatchEventSource = "CODE_DEPLOY" | "EC2" | "HEALTH" | "RDS";

export type ConfigurationEventResourceType =
  | "CLOUDFORMATION"
  | "CLOUDWATCH_ALARM"
  | "CLOUDWATCH_LOG"
  | "SSM_ASSOCIATION";

export type ConfigurationEventStatus = "ERROR" | "INFO" | "WARN";

/**
 * <p>
 *          The event information.
 *       </p>
 */
export interface ConfigurationEvent {
  /**
   * <p>
   *          The resource monitored by Application Insights.
   *       </p>
   */
  MonitoredResourceARN?: string;

  /**
   * <p>
   *          The status of the configuration update event. Possible values include INFO, WARN, and ERROR.
   *       </p>
   */
  EventStatus?: ConfigurationEventStatus | string;

  /**
   * <p>
   *          The resource type that Application Insights attempted to configure, for example, CLOUDWATCH_ALARM.
   *       </p>
   */
  EventResourceType?: ConfigurationEventResourceType | string;

  /**
   * <p>
   *          The timestamp of the event.
   *       </p>
   */
  EventTime?: Date;

  /**
   * <p>
   *          The details of the event in plain text.
   *       </p>
   */
  EventDetail?: string;

  /**
   * <p>
   *          The name of the resource Application Insights attempted to configure.
   *       </p>
   */
  EventResourceName?: string;
}

export namespace ConfigurationEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationEvent): any => ({
    ...obj,
  });
}

/**
 * <p>An object that defines the tags associated with an application.
 *          A <i>tag</i> is a label that you optionally define and associate with
 *          an application. Tags can help you categorize and manage resources in different ways, such as
 *          by purpose, owner, environment, or other criteria.</p>
 *          <p>Each tag consists of a required <i>tag key</i> and an
 *          associated <i>tag value</i>, both of which you define. A tag key is a
 *          general label that acts as a category for a more specific tag value. A tag value acts as
 *          a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag
 *          value can contain as many as 256 characters. The characters can be Unicode letters,
 *          digits, white space, or one of the following symbols: _ . : / = + -. The following
 *          additional restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>For each associated resource, each tag key must be unique and it can have only
 *                one value.</p>
 *             </li>
 *             <li>
 *                <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in
 *                any tag keys or values that you define. In addition, you can't edit or remove
 *                tag keys or values that use this prefix. </p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is
   *          128 characters. The minimum length is 1 character.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *          value is 256 characters. The minimum length is 0 characters. If you don't want an
   *          application to have a specific tag value, don't specify a value for this parameter.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateApplicationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>
   *          When set to <code>true</code>, creates opsItems for any problems detected on an application.
   *       </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p>
   *          Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
   *       </p>
   */
  CWEMonitorEnabled?: boolean;

  /**
   * <p>
   *          The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to
   *          receive notifications for updates to the opsItem.
   *       </p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>List of tags to add to the application.
   *          tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *          length of a tag key is 128 characters. The maximum length of a tag value is 256
   *          characters.</p>
   */
  Tags?: Tag[];
}

export namespace CreateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
  });
}

export interface CreateApplicationResponse {
  /**
   * <p>Information about the application.</p>
   */
  ApplicationInfo?: ApplicationInfo;
}

export namespace CreateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is already created or in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource does not exist in the customer account.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Tags are already registered for the specified application ARN.</p>
 */
export interface TagsAlreadyExistException extends __SmithyException, $MetadataBearer {
  name: "TagsAlreadyExistException";
  $fault: "client";
  Message?: string;
}

export namespace TagsAlreadyExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagsAlreadyExistException): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface CreateComponentRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList: string[] | undefined;
}

export namespace CreateComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentRequest): any => ({
    ...obj,
  });
}

export interface CreateComponentResponse {}

export namespace CreateComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComponentResponse): any => ({
    ...obj,
  });
}

export interface CreateLogPatternRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * <p>The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.</p>
   */
  Pattern: string | undefined;

  /**
   * <p>Rank of the log pattern. Must be a value between <code>1</code> and <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be last to get matched. When you configure custom log patterns from the console, a <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a <code>High</code> severity pattern translates to a <code>250,000</code> rank.
   *          Rank values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for AWS-provided patterns.
   *       </p>
   */
  Rank: number | undefined;
}

export namespace CreateLogPatternRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLogPatternRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.</p>
 */
export interface LogPattern {
  /**
   * <p>The name of the log pattern. A log pattern name can contain as many as 30 characters, and it cannot
   *          be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.</p>
   */
  PatternSetName?: string;

  /**
   * <p>The name of the log pattern. A log pattern name can contain as many as 50 characters, and it cannot
   *          be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.</p>
   */
  PatternName?: string;

  /**
   * <p>A regular expression that defines the log pattern. A log pattern can contain as many as 50 characters, and it cannot
   *          be empty. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.</p>
   */
  Pattern?: string;

  /**
   * <p>Rank of the log pattern. Must be a value between <code>1</code> and <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be last to get matched. When you configure custom log patterns from the console, a <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a <code>High</code> severity pattern translates to a <code>250,000</code> rank.
   *          Rank values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for AWS-provided patterns.
   *       </p>
   */
  Rank?: number;
}

export namespace LogPattern {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogPattern): any => ({
    ...obj,
  });
}

export interface CreateLogPatternResponse {
  /**
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;

  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

export namespace CreateLogPatternResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLogPatternResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DeleteApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationResponse {}

export namespace DeleteApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteComponentRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;
}

export namespace DeleteComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentRequest): any => ({
    ...obj,
  });
}

export interface DeleteComponentResponse {}

export namespace DeleteComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteComponentResponse): any => ({
    ...obj,
  });
}

export interface DeleteLogPatternRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;
}

export namespace DeleteLogPatternRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLogPatternRequest): any => ({
    ...obj,
  });
}

export interface DeleteLogPatternResponse {}

export namespace DeleteLogPatternResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLogPatternResponse): any => ({
    ...obj,
  });
}

export interface DescribeApplicationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;
}

export namespace DescribeApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationRequest): any => ({
    ...obj,
  });
}

export interface DescribeApplicationResponse {
  /**
   * <p>Information about the application.</p>
   */
  ApplicationInfo?: ApplicationInfo;
}

export namespace DescribeApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationResponse): any => ({
    ...obj,
  });
}

export interface DescribeComponentRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;
}

export namespace DescribeComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComponentRequest): any => ({
    ...obj,
  });
}

export interface DescribeComponentResponse {
  /**
   * <p>Describes a standalone resource or similarly grouped resources that the application is made
   *          up of.</p>
   */
  ApplicationComponent?: ApplicationComponent;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: string[];
}

export namespace DescribeComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComponentResponse): any => ({
    ...obj,
  });
}

export interface DescribeComponentConfigurationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;
}

export namespace DescribeComponentConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComponentConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeComponentConfigurationResponse {
  /**
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component. Supported tiers include
   *          <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>,
   *          <code>SQL_SERVER</code>, and <code>DEFAULT</code>
   *          </p>
   */
  Tier?: Tier | string;

  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the configuration.</p>
   */
  ComponentConfiguration?: string;
}

export namespace DescribeComponentConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComponentConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeComponentConfigurationRecommendationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The tier of the application component. Supported tiers include
   *          <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>,
   *          and <code>DEFAULT</code>.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace DescribeComponentConfigurationRecommendationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComponentConfigurationRecommendationRequest): any => ({
    ...obj,
  });
}

export interface DescribeComponentConfigurationRecommendationResponse {
  /**
   * <p>The recommended configuration settings of the component. The value is the escaped JSON of the configuration.</p>
   */
  ComponentConfiguration?: string;
}

export namespace DescribeComponentConfigurationRecommendationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeComponentConfigurationRecommendationResponse): any => ({
    ...obj,
  });
}

export interface DescribeLogPatternRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;
}

export namespace DescribeLogPatternRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLogPatternRequest): any => ({
    ...obj,
  });
}

export interface DescribeLogPatternResponse {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;
}

export namespace DescribeLogPatternResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLogPatternResponse): any => ({
    ...obj,
  });
}

export interface DescribeObservationRequest {
  /**
   * <p>The ID of the observation.</p>
   */
  ObservationId: string | undefined;
}

export namespace DescribeObservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeObservationRequest): any => ({
    ...obj,
  });
}

export type LogFilter = "ERROR" | "INFO" | "WARN";

/**
 * <p>Describes an anomaly or error with the application.</p>
 */
export interface Observation {
  /**
   * <p>The ID of the observation type.</p>
   */
  Id?: string;

  /**
   * <p>The time when the observation was  first detected, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the observation ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * <p>The source type of the observation.</p>
   */
  SourceType?: string;

  /**
   * <p>The source resource ARN of the observation.</p>
   */
  SourceARN?: string;

  /**
   * <p>The log group name.</p>
   */
  LogGroup?: string;

  /**
   * <p>The timestamp in the CloudWatch Logs that specifies when the matched line occurred.</p>
   */
  LineTime?: Date;

  /**
   * <p>The log text of the observation.</p>
   */
  LogText?: string;

  /**
   * <p>The log filter of the observation.</p>
   */
  LogFilter?: LogFilter | string;

  /**
   * <p>The namespace of the observation metric.</p>
   */
  MetricNamespace?: string;

  /**
   * <p>The name of the observation metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The unit of the source observation metric.</p>
   */
  Unit?: string;

  /**
   * <p>The value of the source observation metric.</p>
   */
  Value?: number;

  /**
   * <p> The ID of the CloudWatch Event-based observation related to the detected problem. </p>
   */
  CloudWatchEventId?: string;

  /**
   * <p> The source of the CloudWatch Event. </p>
   */
  CloudWatchEventSource?: CloudWatchEventSource | string;

  /**
   * <p> The detail type of the CloudWatch Event-based observation, for example, <code>EC2
   *             Instance State-change Notification</code>. </p>
   */
  CloudWatchEventDetailType?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the AWS Health Event-based observation.</p>
   */
  HealthEventArn?: string;

  /**
   * <p> The service to which the AWS Health Event belongs, such as EC2. </p>
   */
  HealthService?: string;

  /**
   * <p> The type of the AWS Health event, for example,
   *             <code>AWS_EC2_POWER_CONNECTIVITY_ISSUE</code>. </p>
   */
  HealthEventTypeCode?: string;

  /**
   * <p> The category of the AWS Health event, such as <code>issue</code>. </p>
   */
  HealthEventTypeCategory?: string;

  /**
   * <p> The description of the AWS Health event provided by the service, such as Amazon EC2. </p>
   */
  HealthEventDescription?: string;

  /**
   * <p> The deployment ID of the CodeDeploy-based observation related to the detected problem. </p>
   */
  CodeDeployDeploymentId?: string;

  /**
   * <p>
   *          The deployment group to which the CodeDeploy deployment belongs.
   *       </p>
   */
  CodeDeployDeploymentGroup?: string;

  /**
   * <p>
   *          The status of the CodeDeploy deployment, for example <code>SUCCESS</code> or <code> FAILURE</code>.
   *       </p>
   */
  CodeDeployState?: string;

  /**
   * <p>
   *          The CodeDeploy application to which the deployment belongs.
   *       </p>
   */
  CodeDeployApplication?: string;

  /**
   * <p>
   *          The instance group to which the CodeDeploy instance belongs.
   *       </p>
   */
  CodeDeployInstanceGroupId?: string;

  /**
   * <p>
   *          The state of the instance, such as <code>STOPPING</code> or <code>TERMINATING</code>.
   *       </p>
   */
  Ec2State?: string;

  /**
   * <p>
   *          The category of an RDS event.
   *       </p>
   */
  RdsEventCategories?: string;

  /**
   * <p>
   *          The message of an RDS event.
   *       </p>
   */
  RdsEventMessage?: string;

  /**
   * <p>
   *          The name of the S3 CloudWatch Event-based observation.
   *       </p>
   */
  S3EventName?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the step function execution-based observation.
   *       </p>
   */
  StatesExecutionArn?: string;

  /**
   * <p>
   *          The Amazon Resource Name (ARN)  of the step function-based observation.
   *       </p>
   */
  StatesArn?: string;

  /**
   * <p>
   *          The status of the step function-related observation.
   *       </p>
   */
  StatesStatus?: string;

  /**
   * <p>
   *          The input to the step function-based observation.
   *       </p>
   */
  StatesInput?: string;

  /**
   * <p>
   *          The type of EBS CloudWatch event, such as <code>createVolume</code>, <code>deleteVolume</code> or <code>attachVolume</code>.
   *       </p>
   */
  EbsEvent?: string;

  /**
   * <p>
   *          The result of an EBS CloudWatch event, such as <code>failed</code> or <code>succeeded</code>.
   *       </p>
   */
  EbsResult?: string;

  /**
   * <p>
   *          The cause of an EBS CloudWatch event.
   *       </p>
   */
  EbsCause?: string;

  /**
   * <p>
   *             The request ID of an EBS CloudWatch event.
   *          </p>
   */
  EbsRequestId?: string;

  /**
   * <p>
   *          The X-Ray request fault percentage for this node.
   *       </p>
   */
  XRayFaultPercent?: number;

  /**
   * <p>
   *          The X-Ray request throttle percentage for this node.
   *       </p>
   */
  XRayThrottlePercent?: number;

  /**
   * <p>
   *          The X-Ray request error percentage for this node.
   *       </p>
   */
  XRayErrorPercent?: number;

  /**
   * <p>
   *          The X-Ray request count for this node.
   *       </p>
   */
  XRayRequestCount?: number;

  /**
   * <p>
   *          The X-Ray node request average latency for this node.
   *       </p>
   */
  XRayRequestAverageLatency?: number;

  /**
   * <p>
   *          The name of the X-Ray node.
   *       </p>
   */
  XRayNodeName?: string;

  /**
   * <p>
   *          The type of the  X-Ray node.      </p>
   */
  XRayNodeType?: string;
}

export namespace Observation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Observation): any => ({
    ...obj,
  });
}

export interface DescribeObservationResponse {
  /**
   * <p>Information about the observation.</p>
   */
  Observation?: Observation;
}

export namespace DescribeObservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeObservationResponse): any => ({
    ...obj,
  });
}

export interface DescribeProblemRequest {
  /**
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;
}

export namespace DescribeProblemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProblemRequest): any => ({
    ...obj,
  });
}

export type FeedbackKey = "INSIGHTS_FEEDBACK";

export type FeedbackValue = "NOT_SPECIFIED" | "NOT_USEFUL" | "USEFUL";

export type SeverityLevel = "High" | "Low" | "Medium";

export type Status = "IGNORE" | "PENDING" | "RESOLVED";

/**
 * <p>Describes a problem that is detected by correlating observations.</p>
 */
export interface Problem {
  /**
   * <p>The ID of the problem.</p>
   */
  Id?: string;

  /**
   * <p>The name of the problem.</p>
   */
  Title?: string;

  /**
   * <p>A detailed analysis of the problem using machine learning.</p>
   */
  Insights?: string;

  /**
   * <p>The status of the problem.</p>
   */
  Status?: Status | string;

  /**
   * <p>The resource affected by the problem.</p>
   */
  AffectedResource?: string;

  /**
   * <p>The time when the problem started, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the problem ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * <p>A measure of the level of impact of the problem.</p>
   */
  SeverityLevel?: SeverityLevel | string;

  /**
   * <p>The name of the resource group affected by the problem.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>Feedback provided by the user about the problem.</p>
   */
  Feedback?: { [key: string]: FeedbackValue | string };
}

export namespace Problem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Problem): any => ({
    ...obj,
  });
}

export interface DescribeProblemResponse {
  /**
   * <p>Information about the problem. </p>
   */
  Problem?: Problem;
}

export namespace DescribeProblemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProblemResponse): any => ({
    ...obj,
  });
}

export interface DescribeProblemObservationsRequest {
  /**
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;
}

export namespace DescribeProblemObservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProblemObservationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes observations related to the problem.</p>
 */
export interface RelatedObservations {
  /**
   * <p>The list of observations related to the problem.</p>
   */
  ObservationList?: Observation[];
}

export namespace RelatedObservations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedObservations): any => ({
    ...obj,
  });
}

export interface DescribeProblemObservationsResponse {
  /**
   * <p>Observations related to the problem.</p>
   */
  RelatedObservations?: RelatedObservations;
}

export namespace DescribeProblemObservationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProblemObservationsResponse): any => ({
    ...obj,
  });
}

export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj,
  });
}

export interface ListApplicationsResponse {
  /**
   * <p>The list of applications.</p>
   */
  ApplicationInfoList?: ApplicationInfo[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

export namespace ListApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj,
  });
}

export interface ListComponentsRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentsRequest): any => ({
    ...obj,
  });
}

export interface ListComponentsResponse {
  /**
   * <p>The list of application components.</p>
   */
  ApplicationComponentList?: ApplicationComponent[];

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComponentsResponse): any => ({
    ...obj,
  });
}

export interface ListConfigurationHistoryRequest {
  /**
   * <p>Resource group to which the application belongs. </p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The start time of the event. </p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the event.</p>
   */
  EndTime?: Date;

  /**
   * <p>The status of the configuration update event. Possible values include INFO, WARN, and ERROR.</p>
   */
  EventStatus?: ConfigurationEventStatus | string;

  /**
   * <p> The maximum number of results returned by <code>ListConfigurationHistory</code> in
   *          paginated output. When this parameter is used, <code>ListConfigurationHistory</code>
   *          returns only <code>MaxResults</code> in a single page along with a <code>NextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListConfigurationHistory</code> request with the returned
   *             <code>NextToken</code> value. If this parameter is not used, then
   *             <code>ListConfigurationHistory</code> returns all results. </p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated <code>ListConfigurationHistory</code> request where
   *          <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination
   *          continues from the end of the previous results that returned the <code>NextToken</code> value. This
   *          value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationHistoryRequest): any => ({
    ...obj,
  });
}

export interface ListConfigurationHistoryResponse {
  /**
   * <p> The list of configuration events and their corresponding details. </p>
   */
  EventList?: ConfigurationEvent[];

  /**
   * <p>The <code>NextToken</code> value to include in a future
   *             <code>ListConfigurationHistory</code> request. When the results of a
   *             <code>ListConfigurationHistory</code> request exceed <code>MaxResults</code>, this value
   *          can be used to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationHistoryResponse): any => ({
    ...obj,
  });
}

export interface ListLogPatternsRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListLogPatternsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLogPatternsRequest): any => ({
    ...obj,
  });
}

export interface ListLogPatternsResponse {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The list of log patterns.</p>
   */
  LogPatterns?: LogPattern[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

export namespace ListLogPatternsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLogPatternsResponse): any => ({
    ...obj,
  });
}

export interface ListLogPatternSetsRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListLogPatternSetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLogPatternSetsRequest): any => ({
    ...obj,
  });
}

export interface ListLogPatternSetsResponse {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The list of log pattern sets.</p>
   */
  LogPatternSets?: string[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

export namespace ListLogPatternSetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLogPatternSetsResponse): any => ({
    ...obj,
  });
}

export interface ListProblemsRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The time when the problem was detected, in epoch
   *          seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the problem ended, in epoch seconds. If not specified, problems within the
   *          past seven days are returned.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListProblemsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProblemsRequest): any => ({
    ...obj,
  });
}

export interface ListProblemsResponse {
  /**
   * <p>The list of problems. </p>
   */
  ProblemList?: Problem[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

export namespace ListProblemsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProblemsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to retrieve tag
   *          information for.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>An array that lists all the tags that are associated with the application. Each tag
   *          consists of a required tag key (<code>Key</code>) and an associated tag value
   *          (<code>Value</code>).</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to add one or more tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags that to add to the application. A tag consists of a required
   *          tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *          length of a tag key is 128 characters. The maximum length of a tag value is 256
   *          characters.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The number of the provided tags is beyond the limit, or
 *          the number of total tags you are trying to attach to the specified resource exceeds the limit.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource with too many tags.</p>
   */
  ResourceName?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *          key, the action removes both that key and its associated tag value.</p>
   *          <p>To remove more than one tag from the application, append the <code>TagKeys</code>
   *          parameter and argument for each additional tag to remove, separated by an ampersand.
   *       </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateApplicationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>
   *          When set to <code>true</code>, creates opsItems for any problems detected on an application.
   *       </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p>
   *          Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
   *       </p>
   */
  CWEMonitorEnabled?: boolean;

  /**
   * <p>
   *          The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to
   *          receive notifications for updates to the opsItem.</p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>
   *          Disassociates the SNS topic from the opsItem created for detected problems.</p>
   */
  RemoveSNSTopic?: boolean;
}

export namespace UpdateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj,
  });
}

export interface UpdateApplicationResponse {
  /**
   * <p>Information about the application. </p>
   */
  ApplicationInfo?: ApplicationInfo;
}

export namespace UpdateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj,
  });
}

export interface UpdateComponentRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>The new name of the component.</p>
   */
  NewComponentName?: string;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: string[];
}

export namespace UpdateComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentRequest): any => ({
    ...obj,
  });
}

export interface UpdateComponentResponse {}

export namespace UpdateComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentResponse): any => ({
    ...obj,
  });
}

export interface UpdateComponentConfigurationRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>,
   *          <code>DOT_NET_WEB</code>, <code>DOT_NET_CORE</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.</p>
   */
  Tier?: Tier | string;

  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the configuration. For
   *          more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>.
   *          You can send a request to <code>DescribeComponentConfigurationRecommendation</code> to see the recommended configuration for a component. For the complete
   *          format of the component configuration file, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.</p>
   */
  ComponentConfiguration?: string;
}

export namespace UpdateComponentConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateComponentConfigurationResponse {}

export namespace UpdateComponentConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateComponentConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateLogPatternRequest {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * <p>The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.</p>
   */
  Pattern?: string;

  /**
   * <p>Rank of the log pattern. Must be a value between <code>1</code> and <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be last to get matched. When you configure custom log patterns from the console, a <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a <code>High</code> severity pattern translates to a <code>250,000</code> rank.
   *          Rank values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for AWS-provided patterns.
   *       </p>
   */
  Rank?: number;
}

export namespace UpdateLogPatternRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLogPatternRequest): any => ({
    ...obj,
  });
}

export interface UpdateLogPatternResponse {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;
}

export namespace UpdateLogPatternResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLogPatternResponse): any => ({
    ...obj,
  });
}
