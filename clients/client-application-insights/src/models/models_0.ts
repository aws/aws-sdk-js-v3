// smithy-typescript generated code
import type {
  CloudWatchEventSource,
  ConfigurationEventResourceType,
  ConfigurationEventStatus,
  DiscoveryType,
  FeedbackKey,
  FeedbackValue,
  GroupingType,
  LogFilter,
  OsType,
  RecommendationType,
  ResolutionMethod,
  SeverityLevel,
  Status,
  Tier,
  UpdateStatus,
  Visibility,
} from "./enums";

/**
 * The configuration of the workload.
 *
 * @public
 */
export interface WorkloadConfiguration {
  /**
   * The name of the workload.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The configuration of the workload tier.
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * The configuration settings of the workload.
   *
   * @public
   */
  Configuration?: string | undefined;
}

/**
 * @public
 */
export interface AddWorkloadRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The configuration settings of the workload. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  WorkloadConfiguration: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface AddWorkloadResponse {
  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The configuration settings of the workload. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  WorkloadConfiguration?: WorkloadConfiguration | undefined;
}

/**
 * Describes a standalone resource or similarly grouped resources that the application is made up of.
 *
 * @public
 */
export interface ApplicationComponent {
  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName?: string | undefined;

  /**
   * If logging is supported for the resource type, indicates whether the component has configured logs to be monitored.
   *
   * @public
   */
  ComponentRemarks?: string | undefined;

  /**
   * The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The operating system of the component.
   *
   * @public
   */
  OsType?: OsType | undefined;

  /**
   * The stack tier of the application component.
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * Indicates whether the application component is monitored.
   *
   * @public
   */
  Monitor?: boolean | undefined;

  /**
   * Workloads detected in the application component.
   *
   * @public
   */
  DetectedWorkload?: Partial<Record<Tier, Record<string, string>>> | undefined;
}

/**
 * Describes the status of the application.
 *
 * @public
 */
export interface ApplicationInfo {
  /**
   * The Amazon Web Services account ID for the owner of the application.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the resource group used for the application.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The lifecycle of the application.
   *
   * @public
   */
  LifeCycle?: string | undefined;

  /**
   * The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications for opsItem updates.
   *
   * @public
   */
  OpsItemSNSTopicArn?: string | undefined;

  /**
   * The SNS topic ARN that is associated with SNS notifications for updates or issues.
   *
   * @public
   */
  SNSNotificationArn?: string | undefined;

  /**
   * Indicates whether Application Insights will create opsItems for any problem detected by Application Insights for an application.
   *
   * @public
   */
  OpsCenterEnabled?: boolean | undefined;

  /**
   * Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as `instance terminated`, `failed deployment`, and others.
   *
   * @public
   */
  CWEMonitorEnabled?: boolean | undefined;

  /**
   * The issues on the user side that block Application Insights from successfully monitoring an application. Example remarks include:
   *
   * - “Configuring application, detected 1 Errors, 3 Warnings”
   * - “Configuring application, detected 1 Unconfigured Components”
   *
   * @public
   */
  Remarks?: string | undefined;

  /**
   * Indicates whether auto-configuration is turned on for this application.
   *
   * @public
   */
  AutoConfigEnabled?: boolean | undefined;

  /**
   * The method used by Application Insights to onboard your resources.
   *
   * @public
   */
  DiscoveryType?: DiscoveryType | undefined;

  /**
   * If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.
   *
   * @public
   */
  AttachMissingPermission?: boolean | undefined;
}

/**
 * The event information.
 *
 * @public
 */
export interface ConfigurationEvent {
  /**
   * The name of the resource group of the application to which the configuration event belongs.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID for the owner of the application to which the configuration event belongs.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource monitored by Application Insights.
   *
   * @public
   */
  MonitoredResourceARN?: string | undefined;

  /**
   * The status of the configuration update event. Possible values include INFO, WARN, and ERROR.
   *
   * @public
   */
  EventStatus?: ConfigurationEventStatus | undefined;

  /**
   * The resource type that Application Insights attempted to configure, for example, CLOUDWATCH_ALARM.
   *
   * @public
   */
  EventResourceType?: ConfigurationEventResourceType | undefined;

  /**
   * The timestamp of the event.
   *
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * The details of the event in plain text.
   *
   * @public
   */
  EventDetail?: string | undefined;

  /**
   * The name of the resource Application Insights attempted to configure.
   *
   * @public
   */
  EventResourceName?: string | undefined;
}

/**
 * An object that defines the tags associated with an application. A *tag* is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.
 *
 * Each tag consists of a required *tag key* and an associated *tag value*, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:
 *
 * - Tag keys and values are case sensitive.
 * - For each associated resource, each tag key must be unique and it can have only one value.
 * - The `aws:` prefix is reserved for use by Amazon Web Services; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don't want an application to have a specific tag value, don't specify a value for this parameter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * When set to `true`, creates opsItems for any problems detected on an application.
   *
   * @public
   */
  OpsCenterEnabled?: boolean | undefined;

  /**
   * Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as `instance terminated`, `failed deployment`, and others.
   *
   * @public
   */
  CWEMonitorEnabled?: boolean | undefined;

  /**
   * The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
   *
   * @public
   */
  OpsItemSNSTopicArn?: string | undefined;

  /**
   * The SNS notification topic ARN.
   *
   * @public
   */
  SNSNotificationArn?: string | undefined;

  /**
   * List of tags to add to the application. tag key (`Key`) and an associated tag value (`Value`). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether Application Insights automatically configures unmonitored resources in the resource group.
   *
   * @public
   */
  AutoConfigEnabled?: boolean | undefined;

  /**
   * Configures all of the resources in the resource group by applying the recommended configurations.
   *
   * @public
   */
  AutoCreate?: boolean | undefined;

  /**
   * Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`.
   *
   * @public
   */
  GroupingType?: GroupingType | undefined;

  /**
   * If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.
   *
   * @public
   */
  AttachMissingPermission?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * Information about the application.
   *
   * @public
   */
  ApplicationInfo?: ApplicationInfo | undefined;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The list of resource ARNs that belong to the component.
   *
   * @public
   */
  ResourceList: string[] | undefined;
}

/**
 * @public
 */
export interface CreateComponentResponse {}

/**
 * @public
 */
export interface CreateLogPatternRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the log pattern set.
   *
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * The name of the log pattern.
   *
   * @public
   */
  PatternName: string | undefined;

  /**
   * The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.
   *
   * @public
   */
  Pattern: string | undefined;

  /**
   * Rank of the log pattern. Must be a value between `1` and `1,000,000`. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank `1` will be the first to get matched to a log line. A pattern of rank `1,000,000` will be last to get matched. When you configure custom log patterns from the console, a `Low` severity pattern translates to a `750,000` rank. A `Medium` severity pattern translates to a `500,000` rank. And a `High` severity pattern translates to a `250,000` rank. Rank values less than `1` or greater than `1,000,000` are reserved for Amazon Web Services provided patterns.
   *
   * @public
   */
  Rank: number | undefined;
}

/**
 * An object that defines the log patterns that belongs to a `LogPatternSet`.
 *
 * @public
 */
export interface LogPattern {
  /**
   * The name of the log pattern. A log pattern name can contain as many as 30 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.
   *
   * @public
   */
  PatternSetName?: string | undefined;

  /**
   * The name of the log pattern. A log pattern name can contain as many as 50 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.
   *
   * @public
   */
  PatternName?: string | undefined;

  /**
   * A regular expression that defines the log pattern. A log pattern can contain as many as 50 characters, and it cannot be empty. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.
   *
   * @public
   */
  Pattern?: string | undefined;

  /**
   * Rank of the log pattern. Must be a value between `1` and `1,000,000`. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank `1` will be the first to get matched to a log line. A pattern of rank `1,000,000` will be last to get matched. When you configure custom log patterns from the console, a `Low` severity pattern translates to a `750,000` rank. A `Medium` severity pattern translates to a `500,000` rank. And a `High` severity pattern translates to a `250,000` rank. Rank values less than `1` or greater than `1,000,000` are reserved for Amazon Web Services provided patterns.
   *
   * @public
   */
  Rank?: number | undefined;
}

/**
 * @public
 */
export interface CreateLogPatternResponse {
  /**
   * The successfully created log pattern.
   *
   * @public
   */
  LogPattern?: LogPattern | undefined;

  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentResponse {}

/**
 * @public
 */
export interface DeleteLogPatternRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the log pattern set.
   *
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * The name of the log pattern.
   *
   * @public
   */
  PatternName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogPatternResponse {}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * Information about the application.
   *
   * @public
   */
  ApplicationInfo?: ApplicationInfo | undefined;
}

/**
 * @public
 */
export interface DescribeComponentRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComponentResponse {
  /**
   * Describes a standalone resource or similarly grouped resources that the application is made up of.
   *
   * @public
   */
  ApplicationComponent?: ApplicationComponent | undefined;

  /**
   * The list of resource ARNs that belong to the component.
   *
   * @public
   */
  ResourceList?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationResponse {
  /**
   * Indicates whether the application component is monitored.
   *
   * @public
   */
  Monitor?: boolean | undefined;

  /**
   * The tier of the application component. Supported tiers include `DOT_NET_CORE`, `DOT_NET_WORKER`, `DOT_NET_WEB`, `SQL_SERVER`, and `DEFAULT`
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * The configuration settings of the component. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  ComponentConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRecommendationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The tier of the application component.
   *
   * @public
   */
  Tier: Tier | undefined;

  /**
   * The name of the workload. The name of the workload is required when the tier of the application component is `SAP_ASE_SINGLE_NODE` or `SAP_ASE_HIGH_AVAILABILITY`.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The recommended configuration type.
   *
   * @public
   */
  RecommendationType?: RecommendationType | undefined;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRecommendationResponse {
  /**
   * The recommended configuration settings of the component. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  ComponentConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogPatternRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the log pattern set.
   *
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * The name of the log pattern.
   *
   * @public
   */
  PatternName: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogPatternResponse {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The successfully created log pattern.
   *
   * @public
   */
  LogPattern?: LogPattern | undefined;
}

/**
 * @public
 */
export interface DescribeObservationRequest {
  /**
   * The ID of the observation.
   *
   * @public
   */
  ObservationId: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Describes an anomaly or error with the application.
 *
 * @public
 */
export interface Observation {
  /**
   * The ID of the observation type.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The time when the observation was first detected, in epoch seconds.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the observation ended, in epoch seconds.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The source type of the observation.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The source resource ARN of the observation.
   *
   * @public
   */
  SourceARN?: string | undefined;

  /**
   * The log group name.
   *
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * The timestamp in the CloudWatch Logs that specifies when the matched line occurred.
   *
   * @public
   */
  LineTime?: Date | undefined;

  /**
   * The log text of the observation.
   *
   * @public
   */
  LogText?: string | undefined;

  /**
   * The log filter of the observation.
   *
   * @public
   */
  LogFilter?: LogFilter | undefined;

  /**
   * The namespace of the observation metric.
   *
   * @public
   */
  MetricNamespace?: string | undefined;

  /**
   * The name of the observation metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The unit of the source observation metric.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * The value of the source observation metric.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The ID of the CloudWatch Event-based observation related to the detected problem.
   *
   * @public
   */
  CloudWatchEventId?: string | undefined;

  /**
   * The source of the CloudWatch Event.
   *
   * @public
   */
  CloudWatchEventSource?: CloudWatchEventSource | undefined;

  /**
   * The detail type of the CloudWatch Event-based observation, for example, `EC2 Instance State-change Notification`.
   *
   * @public
   */
  CloudWatchEventDetailType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Health Event-based observation.
   *
   * @public
   */
  HealthEventArn?: string | undefined;

  /**
   * The service to which the Health Event belongs, such as EC2.
   *
   * @public
   */
  HealthService?: string | undefined;

  /**
   * The type of the Health event, for example, `AWS_EC2_POWER_CONNECTIVITY_ISSUE`.
   *
   * @public
   */
  HealthEventTypeCode?: string | undefined;

  /**
   * The category of the Health event, such as `issue`.
   *
   * @public
   */
  HealthEventTypeCategory?: string | undefined;

  /**
   * The description of the Health event provided by the service, such as Amazon EC2.
   *
   * @public
   */
  HealthEventDescription?: string | undefined;

  /**
   * The deployment ID of the CodeDeploy-based observation related to the detected problem.
   *
   * @public
   */
  CodeDeployDeploymentId?: string | undefined;

  /**
   * The deployment group to which the CodeDeploy deployment belongs.
   *
   * @public
   */
  CodeDeployDeploymentGroup?: string | undefined;

  /**
   * The status of the CodeDeploy deployment, for example `SUCCESS` or `FAILURE`.
   *
   * @public
   */
  CodeDeployState?: string | undefined;

  /**
   * The CodeDeploy application to which the deployment belongs.
   *
   * @public
   */
  CodeDeployApplication?: string | undefined;

  /**
   * The instance group to which the CodeDeploy instance belongs.
   *
   * @public
   */
  CodeDeployInstanceGroupId?: string | undefined;

  /**
   * The state of the instance, such as `STOPPING` or `TERMINATING`.
   *
   * @public
   */
  Ec2State?: string | undefined;

  /**
   * The category of an RDS event.
   *
   * @public
   */
  RdsEventCategories?: string | undefined;

  /**
   * The message of an RDS event.
   *
   * @public
   */
  RdsEventMessage?: string | undefined;

  /**
   * The name of the S3 CloudWatch Event-based observation.
   *
   * @public
   */
  S3EventName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the step function execution-based observation.
   *
   * @public
   */
  StatesExecutionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the step function-based observation.
   *
   * @public
   */
  StatesArn?: string | undefined;

  /**
   * The status of the step function-related observation.
   *
   * @public
   */
  StatesStatus?: string | undefined;

  /**
   * The input to the step function-based observation.
   *
   * @public
   */
  StatesInput?: string | undefined;

  /**
   * The type of EBS CloudWatch event, such as `createVolume`, `deleteVolume` or `attachVolume`.
   *
   * @public
   */
  EbsEvent?: string | undefined;

  /**
   * The result of an EBS CloudWatch event, such as `failed` or `succeeded`.
   *
   * @public
   */
  EbsResult?: string | undefined;

  /**
   * The cause of an EBS CloudWatch event.
   *
   * @public
   */
  EbsCause?: string | undefined;

  /**
   * The request ID of an EBS CloudWatch event.
   *
   * @public
   */
  EbsRequestId?: string | undefined;

  /**
   * The X-Ray request fault percentage for this node.
   *
   * @public
   */
  XRayFaultPercent?: number | undefined;

  /**
   * The X-Ray request throttle percentage for this node.
   *
   * @public
   */
  XRayThrottlePercent?: number | undefined;

  /**
   * The X-Ray request error percentage for this node.
   *
   * @public
   */
  XRayErrorPercent?: number | undefined;

  /**
   * The X-Ray request count for this node.
   *
   * @public
   */
  XRayRequestCount?: number | undefined;

  /**
   * The X-Ray node request average latency for this node.
   *
   * @public
   */
  XRayRequestAverageLatency?: number | undefined;

  /**
   * The name of the X-Ray node.
   *
   * @public
   */
  XRayNodeName?: string | undefined;

  /**
   * The type of the X-Ray node.
   *
   * @public
   */
  XRayNodeType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeObservationResponse {
  /**
   * Information about the observation.
   *
   * @public
   */
  Observation?: Observation | undefined;
}

/**
 * @public
 */
export interface DescribeProblemRequest {
  /**
   * The ID of the problem.
   *
   * @public
   */
  ProblemId: string | undefined;

  /**
   * The Amazon Web Services account ID for the owner of the resource group affected by the problem.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Describes a problem that is detected by correlating observations.
 *
 * @public
 */
export interface Problem {
  /**
   * The ID of the problem.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the problem.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The short name of the problem associated with the SNS notification.
   *
   * @public
   */
  ShortName?: string | undefined;

  /**
   * A detailed analysis of the problem using machine learning.
   *
   * @public
   */
  Insights?: string | undefined;

  /**
   * The status of the problem.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The resource affected by the problem.
   *
   * @public
   */
  AffectedResource?: string | undefined;

  /**
   * The time when the problem started, in epoch seconds.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the problem ended, in epoch seconds.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A measure of the level of impact of the problem.
   *
   * @public
   */
  SeverityLevel?: SeverityLevel | undefined;

  /**
   * The Amazon Web Services account ID for the owner of the resource group affected by the problem.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the resource group affected by the problem.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * Feedback provided by the user about the problem.
   *
   * @public
   */
  Feedback?: Partial<Record<FeedbackKey, FeedbackValue>> | undefined;

  /**
   * The number of times that the same problem reoccurred after the first time it was resolved.
   *
   * @public
   */
  RecurringCount?: number | undefined;

  /**
   * The last time that the problem reoccurred after its last resolution.
   *
   * @public
   */
  LastRecurrenceTime?: Date | undefined;

  /**
   * Specifies whether or not you can view the problem. Updates to ignored problems do not generate notifications.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * Specifies how the problem was resolved. If the value is `AUTOMATIC`, the system resolved the problem. If the value is `MANUAL`, the user resolved the problem. If the value is `UNRESOLVED`, then the problem is not resolved.
   *
   * @public
   */
  ResolutionMethod?: ResolutionMethod | undefined;
}

/**
 * @public
 */
export interface DescribeProblemResponse {
  /**
   * Information about the problem.
   *
   * @public
   */
  Problem?: Problem | undefined;

  /**
   * The SNS notification topic ARN of the problem.
   *
   * @public
   */
  SNSNotificationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProblemObservationsRequest {
  /**
   * The ID of the problem.
   *
   * @public
   */
  ProblemId: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Describes observations related to the problem.
 *
 * @public
 */
export interface RelatedObservations {
  /**
   * The list of observations related to the problem.
   *
   * @public
   */
  ObservationList?: Observation[] | undefined;
}

/**
 * @public
 */
export interface DescribeProblemObservationsResponse {
  /**
   * Observations related to the problem.
   *
   * @public
   */
  RelatedObservations?: RelatedObservations | undefined;
}

/**
 * @public
 */
export interface DescribeWorkloadRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The Amazon Web Services account ID for the workload owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkloadResponse {
  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * If logging is supported for the resource type, shows whether the component has configured logs to be monitored.
   *
   * @public
   */
  WorkloadRemarks?: string | undefined;

  /**
   * The configuration settings of the workload. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  WorkloadConfiguration?: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * The list of applications.
   *
   * @public
   */
  ApplicationInfoList?: ApplicationInfo[] | undefined;

  /**
   * The token used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * The list of application components.
   *
   * @public
   */
  ApplicationComponentList?: ApplicationComponent[] | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationHistoryRequest {
  /**
   * Resource group to which the application belongs.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The start time of the event.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the event.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the configuration update event. Possible values include INFO, WARN, and ERROR.
   *
   * @public
   */
  EventStatus?: ConfigurationEventStatus | undefined;

  /**
   * The maximum number of results returned by `ListConfigurationHistory` in paginated output. When this parameter is used, `ListConfigurationHistory` returns only `MaxResults` in a single page along with a `NextToken` response element. The remaining results of the initial request can be seen by sending another `ListConfigurationHistory` request with the returned `NextToken` value. If this parameter is not used, then `ListConfigurationHistory` returns all results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The `NextToken` value returned from a previous paginated `ListConfigurationHistory` request where `MaxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `NextToken` value. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationHistoryResponse {
  /**
   * The list of configuration events and their corresponding details.
   *
   * @public
   */
  EventList?: ConfigurationEvent[] | undefined;

  /**
   * The `NextToken` value to include in a future `ListConfigurationHistory` request. When the results of a `ListConfigurationHistory` request exceed `MaxResults`, this value can be used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogPatternsRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the log pattern set.
   *
   * @public
   */
  PatternSetName?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListLogPatternsResponse {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The list of log patterns.
   *
   * @public
   */
  LogPatterns?: LogPattern[] | undefined;

  /**
   * The token used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogPatternSetsRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListLogPatternSetsResponse {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The list of log pattern sets.
   *
   * @public
   */
  LogPatternSets?: string[] | undefined;

  /**
   * The token used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProblemsRequest {
  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName?: string | undefined;

  /**
   * Specifies whether or not you can view the problem. If not specified, visible and ignored problems are returned.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * @public
 */
export interface ListProblemsResponse {
  /**
   * The list of problems.
   *
   * @public
   */
  ProblemList?: Problem[] | undefined;

  /**
   * The token used to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID for the resource group owner.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the application that you want to retrieve tag information for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array that lists all the tags that are associated with the application. Each tag consists of a required tag key (`Key`) and an associated tag value (`Value`).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWorkloadsRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the workload.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Describes the workloads on a component.
 *
 * @public
 */
export interface Workload {
  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName?: string | undefined;

  /**
   * The name of the workload.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The tier of the workload.
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * If logging is supported for the resource type, shows whether the component has configured logs to be monitored.
   *
   * @public
   */
  WorkloadRemarks?: string | undefined;

  /**
   * Indicates whether all of the component configurations required to monitor a workload were provided.
   *
   * @public
   */
  MissingWorkloadConfig?: boolean | undefined;
}

/**
 * @public
 */
export interface ListWorkloadsResponse {
  /**
   * The list of workloads.
   *
   * @public
   */
  WorkloadList?: Workload[] | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveWorkloadRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId: string | undefined;
}

/**
 * @public
 */
export interface RemoveWorkloadResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the application that you want to add one or more tags to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags that to add to the application. A tag consists of a required tag key (`Key`) and an associated tag value (`Value`). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
   * The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.
   *
   * To remove more than one tag from the application, append the `TagKeys` parameter and argument for each additional tag to remove, separated by an ampersand.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * When set to `true`, creates opsItems for any problems detected on an application.
   *
   * @public
   */
  OpsCenterEnabled?: boolean | undefined;

  /**
   * Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as `instance terminated`, `failed deployment`, and others.
   *
   * @public
   */
  CWEMonitorEnabled?: boolean | undefined;

  /**
   * The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
   *
   * @public
   */
  OpsItemSNSTopicArn?: string | undefined;

  /**
   * The SNS topic ARN. Allows you to receive SNS notifications for updates and issues with an application.
   *
   * @public
   */
  SNSNotificationArn?: string | undefined;

  /**
   * Disassociates the SNS topic from the opsItem created for detected problems.
   *
   * @public
   */
  RemoveSNSTopic?: boolean | undefined;

  /**
   * Turns auto-configuration on or off.
   *
   * @public
   */
  AutoConfigEnabled?: boolean | undefined;

  /**
   * If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.
   *
   * @public
   */
  AttachMissingPermission?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * Information about the application.
   *
   * @public
   */
  ApplicationInfo?: ApplicationInfo | undefined;
}

/**
 * @public
 */
export interface UpdateComponentRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The new name of the component.
   *
   * @public
   */
  NewComponentName?: string | undefined;

  /**
   * The list of resource ARNs that belong to the component.
   *
   * @public
   */
  ResourceList?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateComponentResponse {}

/**
 * @public
 */
export interface UpdateComponentConfigurationRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * Indicates whether the application component is monitored.
   *
   * @public
   */
  Monitor?: boolean | undefined;

  /**
   * The tier of the application component.
   *
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * The configuration settings of the component. The value is the escaped JSON of the configuration. For more information about the JSON format, see [Working with JSON](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html). You can send a request to `DescribeComponentConfigurationRecommendation` to see the recommended configuration for a component. For the complete format of the component configuration file, see [Component Configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html).
   *
   * @public
   */
  ComponentConfiguration?: string | undefined;

  /**
   * Automatically configures the component by applying the recommended configurations.
   *
   * @public
   */
  AutoConfigEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateComponentConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLogPatternRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the log pattern set.
   *
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * The name of the log pattern.
   *
   * @public
   */
  PatternName: string | undefined;

  /**
   * The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.
   *
   * @public
   */
  Pattern?: string | undefined;

  /**
   * Rank of the log pattern. Must be a value between `1` and `1,000,000`. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank `1` will be the first to get matched to a log line. A pattern of rank `1,000,000` will be last to get matched. When you configure custom log patterns from the console, a `Low` severity pattern translates to a `750,000` rank. A `Medium` severity pattern translates to a `500,000` rank. And a `High` severity pattern translates to a `250,000` rank. Rank values less than `1` or greater than `1,000,000` are reserved for Amazon Web Services provided patterns.
   *
   * @public
   */
  Rank?: number | undefined;
}

/**
 * @public
 */
export interface UpdateLogPatternResponse {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName?: string | undefined;

  /**
   * The successfully created log pattern.
   *
   * @public
   */
  LogPattern?: LogPattern | undefined;
}

/**
 * @public
 */
export interface UpdateProblemRequest {
  /**
   * The ID of the problem.
   *
   * @public
   */
  ProblemId: string | undefined;

  /**
   * The status of the problem. Arguments can be passed for only problems that show a status of `RECOVERING`.
   *
   * @public
   */
  UpdateStatus?: UpdateStatus | undefined;

  /**
   * The visibility of a problem. When you pass a value of `IGNORED`, the problem is removed from the default view, and all notifications for the problem are suspended. When `VISIBLE` is passed, the `IGNORED` action is reversed.
   *
   * @public
   */
  Visibility?: Visibility | undefined;
}

/**
 * @public
 */
export interface UpdateProblemResponse {}

/**
 * @public
 */
export interface UpdateWorkloadRequest {
  /**
   * The name of the resource group.
   *
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  ComponentName: string | undefined;

  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The configuration settings of the workload. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  WorkloadConfiguration: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadResponse {
  /**
   * The ID of the workload.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The configuration settings of the workload. The value is the escaped JSON of the configuration.
   *
   * @public
   */
  WorkloadConfiguration?: WorkloadConfiguration | undefined;
}
