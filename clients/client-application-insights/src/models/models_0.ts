// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ApplicationInsightsServiceException as __BaseException } from "./ApplicationInsightsServiceException";

/**
 * @public
 * <p> User does not have permissions to perform this action. </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const Tier = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  DOT_NET_CORE: "DOT_NET_CORE",
  DOT_NET_WEB: "DOT_NET_WEB",
  DOT_NET_WEB_TIER: "DOT_NET_WEB_TIER",
  DOT_NET_WORKER: "DOT_NET_WORKER",
  JAVA_JMX: "JAVA_JMX",
  MYSQL: "MYSQL",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  SAP_HANA_HIGH_AVAILABILITY: "SAP_HANA_HIGH_AVAILABILITY",
  SAP_HANA_MULTI_NODE: "SAP_HANA_MULTI_NODE",
  SAP_HANA_SINGLE_NODE: "SAP_HANA_SINGLE_NODE",
  SAP_NETWEAVER_DISTRIBUTED: "SAP_NETWEAVER_DISTRIBUTED",
  SAP_NETWEAVER_HIGH_AVAILABILITY: "SAP_NETWEAVER_HIGH_AVAILABILITY",
  SAP_NETWEAVER_STANDARD: "SAP_NETWEAVER_STANDARD",
  SHAREPOINT: "SHAREPOINT",
  SQL_SERVER: "SQL_SERVER",
  SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP: "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP",
  SQL_SERVER_FAILOVER_CLUSTER_INSTANCE: "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE",
} as const;

/**
 * @public
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

/**
 * @public
 * <p>The configuration of the workload.</p>
 */
export interface WorkloadConfiguration {
  /**
   * @public
   * <p>The name of the workload.</p>
   */
  WorkloadName?: string;

  /**
   * @public
   * <p>The configuration of the workload tier.</p>
   */
  Tier?: Tier;

  /**
   * @public
   * <p>The configuration settings of the workload.</p>
   */
  Configuration?: string;
}

/**
 * @public
 */
export interface AddWorkloadRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   */
  WorkloadConfiguration: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface AddWorkloadResponse {
  /**
   * @public
   * <p>The ID of the workload.</p>
   */
  WorkloadId?: string;

  /**
   * @public
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   */
  WorkloadConfiguration?: WorkloadConfiguration;
}

/**
 * @public
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>The resource is already created or in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource does not exist in the customer account.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The parameter is not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @enum
 */
export const OsType = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

/**
 * @public
 * <p>Describes a standalone resource or similarly grouped resources that the application is
 *          made up of.</p>
 */
export interface ApplicationComponent {
  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName?: string;

  /**
   * @public
   * <p> If logging is supported for the resource type, indicates whether the component has
   *          configured logs to be monitored. </p>
   */
  ComponentRemarks?: string;

  /**
   * @public
   * <p>The resource type. Supported resource types include EC2 instances, Auto Scaling group,
   *          Classic ELB, Application ELB, and SQS Queue.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p> The operating system of the component. </p>
   */
  OsType?: OsType;

  /**
   * @public
   * <p>The stack tier of the application component.</p>
   */
  Tier?: Tier;

  /**
   * @public
   * <p>Indicates whether the application component is monitored. </p>
   */
  Monitor?: boolean;

  /**
   * @public
   * <p> Workloads detected in the application component. </p>
   */
  DetectedWorkload?: Partial<Record<Tier, Record<string, string>>>;
}

/**
 * @public
 * @enum
 */
export const DiscoveryType = {
  ACCOUNT_BASED: "ACCOUNT_BASED",
  RESOURCE_GROUP_BASED: "RESOURCE_GROUP_BASED",
} as const;

/**
 * @public
 */
export type DiscoveryType = (typeof DiscoveryType)[keyof typeof DiscoveryType];

/**
 * @public
 * <p>Describes the status of the application.</p>
 */
export interface ApplicationInfo {
  /**
   * @public
   * <p>The AWS account ID for the owner of the application.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the resource group used for the application.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The lifecycle of the application. </p>
   */
  LifeCycle?: string;

  /**
   * @public
   * <p> The SNS topic provided to Application Insights that is associated to the created
   *          opsItems to receive SNS notifications for opsItem updates. </p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * @public
   * <p> Indicates whether Application Insights will create opsItems for any problem detected by
   *          Application Insights for an application. </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * @public
   * <p> Indicates whether Application Insights can listen to CloudWatch events for the
   *          application resources, such as <code>instance terminated</code>, <code>failed
   *             deployment</code>, and others. </p>
   */
  CWEMonitorEnabled?: boolean;

  /**
   * @public
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

  /**
   * @public
   * <p> Indicates whether auto-configuration is turned on for this application. </p>
   */
  AutoConfigEnabled?: boolean;

  /**
   * @public
   * <p> The method used by Application Insights to onboard your resources. </p>
   */
  DiscoveryType?: DiscoveryType;
}

/**
 * @public
 * <p>The request is not understood by the server.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const CloudWatchEventSource = {
  CODE_DEPLOY: "CODE_DEPLOY",
  EC2: "EC2",
  HEALTH: "HEALTH",
  RDS: "RDS",
} as const;

/**
 * @public
 */
export type CloudWatchEventSource = (typeof CloudWatchEventSource)[keyof typeof CloudWatchEventSource];

/**
 * @public
 * @enum
 */
export const ConfigurationEventResourceType = {
  CLOUDFORMATION: "CLOUDFORMATION",
  CLOUDWATCH_ALARM: "CLOUDWATCH_ALARM",
  CLOUDWATCH_LOG: "CLOUDWATCH_LOG",
  SSM_ASSOCIATION: "SSM_ASSOCIATION",
} as const;

/**
 * @public
 */
export type ConfigurationEventResourceType =
  (typeof ConfigurationEventResourceType)[keyof typeof ConfigurationEventResourceType];

/**
 * @public
 * @enum
 */
export const ConfigurationEventStatus = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type ConfigurationEventStatus = (typeof ConfigurationEventStatus)[keyof typeof ConfigurationEventStatus];

/**
 * @public
 * <p> The event information. </p>
 */
export interface ConfigurationEvent {
  /**
   * @public
   * <p>The name of the resource group of the application to which the configuration event belongs.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The AWS account ID for the owner of the application to which the configuration event belongs.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p> The resource monitored by Application Insights. </p>
   */
  MonitoredResourceARN?: string;

  /**
   * @public
   * <p> The status of the configuration update event. Possible values include INFO, WARN, and
   *          ERROR. </p>
   */
  EventStatus?: ConfigurationEventStatus;

  /**
   * @public
   * <p> The resource type that Application Insights attempted to configure, for example,
   *          CLOUDWATCH_ALARM. </p>
   */
  EventResourceType?: ConfigurationEventResourceType;

  /**
   * @public
   * <p> The timestamp of the event. </p>
   */
  EventTime?: Date;

  /**
   * @public
   * <p> The details of the event in plain text. </p>
   */
  EventDetail?: string;

  /**
   * @public
   * <p> The name of the resource Application Insights attempted to configure. </p>
   */
  EventResourceName?: string;
}

/**
 * @public
 * @enum
 */
export const GroupingType = {
  ACCOUNT_BASED: "ACCOUNT_BASED",
} as const;

/**
 * @public
 */
export type GroupingType = (typeof GroupingType)[keyof typeof GroupingType];

/**
 * @public
 * <p>An object that defines the tags associated with an application. A
 *             <i>tag</i> is a label that you optionally define and associate with an
 *          application. Tags can help you categorize and manage resources in different ways, such as
 *          by purpose, owner, environment, or other criteria.</p>
 *          <p>Each tag consists of a required <i>tag key</i> and an associated
 *             <i>tag value</i>, both of which you define. A tag key is a general label
 *          that acts as a category for a more specific tag value. A tag value acts as a descriptor
 *          within a tag key. A tag key can contain as many as 128 characters. A tag value can contain
 *          as many as 256 characters. The characters can be Unicode letters, digits, white space, or
 *          one of the following symbols: _ . : / = + -. The following additional restrictions apply to
 *          tags:</p>
 *          <ul>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>For each associated resource, each tag key must be unique and it can have only one
 *                value.</p>
 *             </li>
 *             <li>
 *                <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any
 *                tag keys or values that you define. In addition, you can't edit or remove tag keys or
 *                values that use this prefix. </p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * @public
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is 128
   *          characters. The minimum length is 1 character.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *          value is 256 characters. The minimum length is 0 characters. If you don't want an
   *          application to have a specific tag value, don't specify a value for this parameter.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p> When set to <code>true</code>, creates opsItems for any problems detected on an
   *          application. </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * @public
   * <p> Indicates whether Application Insights can listen to CloudWatch events for the
   *          application resources, such as <code>instance terminated</code>, <code>failed
   *             deployment</code>, and others. </p>
   */
  CWEMonitorEnabled?: boolean;

  /**
   * @public
   * <p> The SNS topic provided to Application Insights that is associated to the created
   *          opsItem. Allows you to receive notifications for updates to the opsItem. </p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * @public
   * <p>List of tags to add to the application. tag key (<code>Key</code>) and an associated tag
   *          value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum
   *          length of a tag value is 256 characters.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p> Indicates whether Application Insights automatically configures unmonitored resources
   *          in the resource group. </p>
   */
  AutoConfigEnabled?: boolean;

  /**
   * @public
   * <p> Configures all of the resources in the resource group by applying the recommended
   *          configurations. </p>
   */
  AutoCreate?: boolean;

  /**
   * @public
   * <p>Application Insights can create applications based on a resource group or on an account.
   *          To create an account-based application using all of the resources in the account, set this
   *          parameter to <code>ACCOUNT_BASED</code>. </p>
   */
  GroupingType?: GroupingType;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>Information about the application.</p>
   */
  ApplicationInfo?: ApplicationInfo;
}

/**
 * @public
 * <p>Tags are already registered for the specified application ARN.</p>
 */
export class TagsAlreadyExistException extends __BaseException {
  readonly name: "TagsAlreadyExistException" = "TagsAlreadyExistException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagsAlreadyExistException, __BaseException>) {
    super({
      name: "TagsAlreadyExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagsAlreadyExistException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The list of resource ARNs that belong to the component.</p>
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * @public
   * <p>The log pattern. The pattern must be DFA compatible. Patterns that utilize forward
   *          lookahead or backreference constructions are not supported.</p>
   */
  Pattern: string | undefined;

  /**
   * @public
   * <p>Rank of the log pattern. Must be a value between <code>1</code> and
   *             <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set
   *          your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will
   *          be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be
   *          last to get matched. When you configure custom log patterns from the console, a
   *             <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A
   *             <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a
   *             <code>High</code> severity pattern translates to a <code>250,000</code> rank. Rank
   *          values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for
   *          AWS-provided patterns. </p>
   */
  Rank: number | undefined;
}

/**
 * @public
 * <p>An object that defines the log patterns that belongs to a
 *          <code>LogPatternSet</code>.</p>
 */
export interface LogPattern {
  /**
   * @public
   * <p>The name of the log pattern. A log pattern name can contain as many as 30 characters,
   *          and it cannot be empty. The characters can be Unicode letters, digits, or one of the
   *          following symbols: period, dash, underscore.</p>
   */
  PatternSetName?: string;

  /**
   * @public
   * <p>The name of the log pattern. A log pattern name can contain as many as 50 characters,
   *          and it cannot be empty. The characters can be Unicode letters, digits, or one of the
   *          following symbols: period, dash, underscore.</p>
   */
  PatternName?: string;

  /**
   * @public
   * <p>A regular expression that defines the log pattern. A log pattern can contain as many as
   *          50 characters, and it cannot be empty. The pattern must be DFA compatible. Patterns that
   *          utilize forward lookahead or backreference constructions are not supported.</p>
   */
  Pattern?: string;

  /**
   * @public
   * <p>Rank of the log pattern. Must be a value between <code>1</code> and
   *             <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set
   *          your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will
   *          be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be
   *          last to get matched. When you configure custom log patterns from the console, a
   *             <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A
   *             <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a
   *             <code>High</code> severity pattern translates to a <code>250,000</code> rank. Rank
   *          values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for
   *          AWS-provided patterns. </p>
   */
  Rank?: number;
}

/**
 * @public
 */
export interface CreateLogPatternResponse {
  /**
   * @public
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;

  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern.</p>
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * @public
   * <p>Information about the application.</p>
   */
  ApplicationInfo?: ApplicationInfo;
}

/**
 * @public
 */
export interface DescribeComponentRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeComponentResponse {
  /**
   * @public
   * <p>Describes a standalone resource or similarly grouped resources that the application is
   *          made up of.</p>
   */
  ApplicationComponent?: ApplicationComponent;

  /**
   * @public
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: string[];
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationResponse {
  /**
   * @public
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * @public
   * <p>The tier of the application component. Supported tiers include
   *          <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>,
   *             <code>SQL_SERVER</code>, and <code>DEFAULT</code>
   *          </p>
   */
  Tier?: Tier;

  /**
   * @public
   * <p>The configuration settings of the component. The value is the escaped JSON of the
   *          configuration.</p>
   */
  ComponentConfiguration?: string;
}

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  ALL: "ALL",
  INFRA_ONLY: "INFRA_ONLY",
  WORKLOAD_ONLY: "WORKLOAD_ONLY",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 */
export interface DescribeComponentConfigurationRecommendationRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The tier of the application component.</p>
   */
  Tier: Tier | undefined;

  /**
   * @public
   * <p>The recommended configuration type.</p>
   */
  RecommendationType?: RecommendationType;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRecommendationResponse {
  /**
   * @public
   * <p>The recommended configuration settings of the component. The value is the escaped JSON
   *          of the configuration.</p>
   */
  ComponentConfiguration?: string;
}

/**
 * @public
 */
export interface DescribeLogPatternRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeLogPatternResponse {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;
}

/**
 * @public
 */
export interface DescribeObservationRequest {
  /**
   * @public
   * <p>The ID of the observation.</p>
   */
  ObservationId: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * @enum
 */
export const LogFilter = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type LogFilter = (typeof LogFilter)[keyof typeof LogFilter];

/**
 * @public
 * <p>Describes an anomaly or error with the application.</p>
 */
export interface Observation {
  /**
   * @public
   * <p>The ID of the observation type.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The time when the observation was first detected, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time when the observation ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The source type of the observation.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>The source resource ARN of the observation.</p>
   */
  SourceARN?: string;

  /**
   * @public
   * <p>The log group name.</p>
   */
  LogGroup?: string;

  /**
   * @public
   * <p>The timestamp in the CloudWatch Logs that specifies when the matched line
   *          occurred.</p>
   */
  LineTime?: Date;

  /**
   * @public
   * <p>The log text of the observation.</p>
   */
  LogText?: string;

  /**
   * @public
   * <p>The log filter of the observation.</p>
   */
  LogFilter?: LogFilter;

  /**
   * @public
   * <p>The namespace of the observation metric.</p>
   */
  MetricNamespace?: string;

  /**
   * @public
   * <p>The name of the observation metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The unit of the source observation metric.</p>
   */
  Unit?: string;

  /**
   * @public
   * <p>The value of the source observation metric.</p>
   */
  Value?: number;

  /**
   * @public
   * <p> The ID of the CloudWatch Event-based observation related to the detected problem.
   *       </p>
   */
  CloudWatchEventId?: string;

  /**
   * @public
   * <p> The source of the CloudWatch Event. </p>
   */
  CloudWatchEventSource?: CloudWatchEventSource;

  /**
   * @public
   * <p> The detail type of the CloudWatch Event-based observation, for example, <code>EC2
   *             Instance State-change Notification</code>. </p>
   */
  CloudWatchEventDetailType?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the AWS Health Event-based observation.</p>
   */
  HealthEventArn?: string;

  /**
   * @public
   * <p> The service to which the AWS Health Event belongs, such as EC2. </p>
   */
  HealthService?: string;

  /**
   * @public
   * <p> The type of the AWS Health event, for example,
   *             <code>AWS_EC2_POWER_CONNECTIVITY_ISSUE</code>. </p>
   */
  HealthEventTypeCode?: string;

  /**
   * @public
   * <p> The category of the AWS Health event, such as <code>issue</code>. </p>
   */
  HealthEventTypeCategory?: string;

  /**
   * @public
   * <p> The description of the AWS Health event provided by the service, such as Amazon EC2.
   *       </p>
   */
  HealthEventDescription?: string;

  /**
   * @public
   * <p> The deployment ID of the CodeDeploy-based observation related to the detected problem.
   *       </p>
   */
  CodeDeployDeploymentId?: string;

  /**
   * @public
   * <p> The deployment group to which the CodeDeploy deployment belongs. </p>
   */
  CodeDeployDeploymentGroup?: string;

  /**
   * @public
   * <p> The status of the CodeDeploy deployment, for example <code>SUCCESS</code> or <code>
   *             FAILURE</code>. </p>
   */
  CodeDeployState?: string;

  /**
   * @public
   * <p> The CodeDeploy application to which the deployment belongs. </p>
   */
  CodeDeployApplication?: string;

  /**
   * @public
   * <p> The instance group to which the CodeDeploy instance belongs. </p>
   */
  CodeDeployInstanceGroupId?: string;

  /**
   * @public
   * <p> The state of the instance, such as <code>STOPPING</code> or <code>TERMINATING</code>.
   *       </p>
   */
  Ec2State?: string;

  /**
   * @public
   * <p> The category of an RDS event. </p>
   */
  RdsEventCategories?: string;

  /**
   * @public
   * <p> The message of an RDS event. </p>
   */
  RdsEventMessage?: string;

  /**
   * @public
   * <p> The name of the S3 CloudWatch Event-based observation. </p>
   */
  S3EventName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the step function execution-based observation.
   *       </p>
   */
  StatesExecutionArn?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the step function-based observation. </p>
   */
  StatesArn?: string;

  /**
   * @public
   * <p> The status of the step function-related observation. </p>
   */
  StatesStatus?: string;

  /**
   * @public
   * <p> The input to the step function-based observation. </p>
   */
  StatesInput?: string;

  /**
   * @public
   * <p> The type of EBS CloudWatch event, such as <code>createVolume</code>,
   *             <code>deleteVolume</code> or <code>attachVolume</code>. </p>
   */
  EbsEvent?: string;

  /**
   * @public
   * <p> The result of an EBS CloudWatch event, such as <code>failed</code> or
   *             <code>succeeded</code>. </p>
   */
  EbsResult?: string;

  /**
   * @public
   * <p> The cause of an EBS CloudWatch event. </p>
   */
  EbsCause?: string;

  /**
   * @public
   * <p> The request ID of an EBS CloudWatch event. </p>
   */
  EbsRequestId?: string;

  /**
   * @public
   * <p> The X-Ray request fault percentage for this node. </p>
   */
  XRayFaultPercent?: number;

  /**
   * @public
   * <p> The X-Ray request throttle percentage for this node. </p>
   */
  XRayThrottlePercent?: number;

  /**
   * @public
   * <p> The X-Ray request error percentage for this node. </p>
   */
  XRayErrorPercent?: number;

  /**
   * @public
   * <p> The X-Ray request count for this node. </p>
   */
  XRayRequestCount?: number;

  /**
   * @public
   * <p> The X-Ray node request average latency for this node. </p>
   */
  XRayRequestAverageLatency?: number;

  /**
   * @public
   * <p> The name of the X-Ray node. </p>
   */
  XRayNodeName?: string;

  /**
   * @public
   * <p> The type of the X-Ray node. </p>
   */
  XRayNodeType?: string;
}

/**
 * @public
 */
export interface DescribeObservationResponse {
  /**
   * @public
   * <p>Information about the observation.</p>
   */
  Observation?: Observation;
}

/**
 * @public
 */
export interface DescribeProblemRequest {
  /**
   * @public
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the owner of the resource group affected by the problem.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * @enum
 */
export const FeedbackKey = {
  INSIGHTS_FEEDBACK: "INSIGHTS_FEEDBACK",
} as const;

/**
 * @public
 */
export type FeedbackKey = (typeof FeedbackKey)[keyof typeof FeedbackKey];

/**
 * @public
 * @enum
 */
export const FeedbackValue = {
  NOT_SPECIFIED: "NOT_SPECIFIED",
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;

/**
 * @public
 */
export type FeedbackValue = (typeof FeedbackValue)[keyof typeof FeedbackValue];

/**
 * @public
 * @enum
 */
export const ResolutionMethod = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
  UNRESOLVED: "UNRESOLVED",
} as const;

/**
 * @public
 */
export type ResolutionMethod = (typeof ResolutionMethod)[keyof typeof ResolutionMethod];

/**
 * @public
 * @enum
 */
export const SeverityLevel = {
  High: "High",
  Informative: "Informative",
  Low: "Low",
  Medium: "Medium",
} as const;

/**
 * @public
 */
export type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel];

/**
 * @public
 * @enum
 */
export const Status = {
  IGNORE: "IGNORE",
  PENDING: "PENDING",
  RECOVERING: "RECOVERING",
  RECURRING: "RECURRING",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const Visibility = {
  IGNORED: "IGNORED",
  VISIBLE: "VISIBLE",
} as const;

/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 * <p>Describes a problem that is detected by correlating observations.</p>
 */
export interface Problem {
  /**
   * @public
   * <p>The ID of the problem.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the problem.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>A detailed analysis of the problem using machine learning.</p>
   */
  Insights?: string;

  /**
   * @public
   * <p>The status of the problem.</p>
   */
  Status?: Status;

  /**
   * @public
   * <p>The resource affected by the problem.</p>
   */
  AffectedResource?: string;

  /**
   * @public
   * <p>The time when the problem started, in epoch seconds.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time when the problem ended, in epoch seconds.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>A measure of the level of impact of the problem.</p>
   */
  SeverityLevel?: SeverityLevel;

  /**
   * @public
   * <p>The AWS account ID for the owner of the resource group affected by the problem.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the resource group affected by the problem.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>Feedback provided by the user about the problem.</p>
   */
  Feedback?: Partial<Record<FeedbackKey, FeedbackValue>>;

  /**
   * @public
   * <p> The number of times that the same problem reoccurred after the first time it was
   *          resolved. </p>
   */
  RecurringCount?: number;

  /**
   * @public
   * <p> The last time that the problem reoccurred after its last resolution. </p>
   */
  LastRecurrenceTime?: Date;

  /**
   * @public
   * <p>Specifies whether or not you can view the problem. Updates to ignored problems do not
   *          generate notifications.</p>
   */
  Visibility?: Visibility;

  /**
   * @public
   * <p>Specifies how the problem was resolved. If the value is <code>AUTOMATIC</code>, the
   *          system resolved the problem. If the value is <code>MANUAL</code>, the user resolved the
   *          problem. If the value is <code>UNRESOLVED</code>, then the problem is not resolved.</p>
   */
  ResolutionMethod?: ResolutionMethod;
}

/**
 * @public
 */
export interface DescribeProblemResponse {
  /**
   * @public
   * <p>Information about the problem. </p>
   */
  Problem?: Problem;
}

/**
 * @public
 */
export interface DescribeProblemObservationsRequest {
  /**
   * @public
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>Describes observations related to the problem.</p>
 */
export interface RelatedObservations {
  /**
   * @public
   * <p>The list of observations related to the problem.</p>
   */
  ObservationList?: Observation[];
}

/**
 * @public
 */
export interface DescribeProblemObservationsResponse {
  /**
   * @public
   * <p>Observations related to the problem.</p>
   */
  RelatedObservations?: RelatedObservations;
}

/**
 * @public
 */
export interface DescribeWorkloadRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The ID of the workload.</p>
   */
  WorkloadId: string | undefined;

  /**
   * @public
   * <p>The AWS account ID for the workload owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeWorkloadResponse {
  /**
   * @public
   * <p>The ID of the workload.</p>
   */
  WorkloadId?: string;

  /**
   * @public
   * <p>If logging is supported for the resource type, shows whether the component has configured logs to be monitored.</p>
   */
  WorkloadRemarks?: string;

  /**
   * @public
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   */
  WorkloadConfiguration?: WorkloadConfiguration;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>The list of applications.</p>
   */
  ApplicationInfoList?: ApplicationInfo[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * @public
   * <p>The list of application components.</p>
   */
  ApplicationComponentList?: ApplicationComponent[];

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationHistoryRequest {
  /**
   * @public
   * <p>Resource group to which the application belongs. </p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The start time of the event. </p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time of the event.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The status of the configuration update event. Possible values include INFO, WARN, and
   *          ERROR.</p>
   */
  EventStatus?: ConfigurationEventStatus;

  /**
   * @public
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
   * @public
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *             <code>ListConfigurationHistory</code> request where <code>MaxResults</code> was used and
   *          the results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>NextToken</code> value. This value is
   *             <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListConfigurationHistoryResponse {
  /**
   * @public
   * <p> The list of configuration events and their corresponding details. </p>
   */
  EventList?: ConfigurationEvent[];

  /**
   * @public
   * <p>The <code>NextToken</code> value to include in a future
   *             <code>ListConfigurationHistory</code> request. When the results of a
   *             <code>ListConfigurationHistory</code> request exceed <code>MaxResults</code>, this value
   *          can be used to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLogPatternsRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListLogPatternsResponse {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The list of log patterns.</p>
   */
  LogPatterns?: LogPattern[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLogPatternSetsRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListLogPatternSetsResponse {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The list of log pattern sets.</p>
   */
  LogPatternSets?: string[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProblemsRequest {
  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The time when the problem was detected, in epoch seconds. If you don't specify a time
   *          frame for the request, problems within the past seven days are returned.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time when the problem ended, in epoch seconds. If not specified, problems within the
   *          past seven days are returned.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The name of the component. </p>
   */
  ComponentName?: string;

  /**
   * @public
   * <p>Specifies whether or not you can view the problem. If not specified, visible and
   *          ignored problems are returned.</p>
   */
  Visibility?: Visibility;
}

/**
 * @public
 */
export interface ListProblemsResponse {
  /**
   * @public
   * <p>The list of problems. </p>
   */
  ProblemList?: Problem[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The name of the resource group. </p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The AWS account ID for the resource group owner.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application that you want to retrieve tag
   *          information for.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An array that lists all the tags that are associated with the application. Each tag
   *          consists of a required tag key (<code>Key</code>) and an associated tag value
   *             (<code>Value</code>).</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListWorkloadsRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The AWS account ID of the owner of the workload.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>Describes the workloads on a component.</p>
 */
export interface Workload {
  /**
   * @public
   * <p>The ID of the workload.</p>
   */
  WorkloadId?: string;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName?: string;

  /**
   * @public
   * <p>The name of the workload.</p>
   */
  WorkloadName?: string;

  /**
   * @public
   * <p>The tier of the workload.</p>
   */
  Tier?: Tier;

  /**
   * @public
   * <p>If logging is supported for the resource type, shows whether the component has configured logs to be monitored.</p>
   */
  WorkloadRemarks?: string;
}

/**
 * @public
 */
export interface ListWorkloadsResponse {
  /**
   * @public
   * <p>The list of workloads.</p>
   */
  WorkloadList?: Workload[];

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RemoveWorkloadRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The ID of the workload.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the application that you want to add one or more tags
   *          to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tags that to add to the application. A tag consists of a required tag key
   *             (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length
   *          of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>The number of the provided tags is beyond the limit, or the number of total tags you are
 *          trying to attach to the specified resource exceeds the limit.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The name of the resource with too many tags.</p>
   */
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application that you want to remove one or more
   *          tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *          key, the action removes both that key and its associated tag value.</p>
   *          <p>To remove more than one tag from the application, append the <code>TagKeys</code>
   *          parameter and argument for each additional tag to remove, separated by an ampersand.
   *       </p>
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p> When set to <code>true</code>, creates opsItems for any problems detected on an
   *          application. </p>
   */
  OpsCenterEnabled?: boolean;

  /**
   * @public
   * <p> Indicates whether Application Insights can listen to CloudWatch events for the
   *          application resources, such as <code>instance terminated</code>, <code>failed
   *             deployment</code>, and others. </p>
   */
  CWEMonitorEnabled?: boolean;

  /**
   * @public
   * <p> The SNS topic provided to Application Insights that is associated to the created
   *          opsItem. Allows you to receive notifications for updates to the opsItem.</p>
   */
  OpsItemSNSTopicArn?: string;

  /**
   * @public
   * <p> Disassociates the SNS topic from the opsItem created for detected problems.</p>
   */
  RemoveSNSTopic?: boolean;

  /**
   * @public
   * <p> Turns auto-configuration on or off. </p>
   */
  AutoConfigEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * @public
   * <p>Information about the application. </p>
   */
  ApplicationInfo?: ApplicationInfo;
}

/**
 * @public
 */
export interface UpdateComponentRequest {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The new name of the component.</p>
   */
  NewComponentName?: string;

  /**
   * @public
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: string[];
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the component.</p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * @public
   * <p>The tier of the application component.</p>
   */
  Tier?: Tier;

  /**
   * @public
   * <p>The configuration settings of the component. The value is the escaped JSON of the
   *          configuration. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>. You can send a request to
   *             <code>DescribeComponentConfigurationRecommendation</code> to see the recommended
   *          configuration for a component. For the complete format of the component configuration file,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.</p>
   */
  ComponentConfiguration?: string;

  /**
   * @public
   * <p> Automatically configures the component by applying the recommended configurations.
   *       </p>
   */
  AutoConfigEnabled?: boolean;
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern set.</p>
   */
  PatternSetName: string | undefined;

  /**
   * @public
   * <p>The name of the log pattern.</p>
   */
  PatternName: string | undefined;

  /**
   * @public
   * <p>The log pattern. The pattern must be DFA compatible. Patterns that utilize forward
   *          lookahead or backreference constructions are not supported.</p>
   */
  Pattern?: string;

  /**
   * @public
   * <p>Rank of the log pattern. Must be a value between <code>1</code> and
   *             <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set
   *          your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will
   *          be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be
   *          last to get matched. When you configure custom log patterns from the console, a
   *             <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A
   *             <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a
   *             <code>High</code> severity pattern translates to a <code>250,000</code> rank. Rank
   *          values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for
   *          AWS-provided patterns. </p>
   */
  Rank?: number;
}

/**
 * @public
 */
export interface UpdateLogPatternResponse {
  /**
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName?: string;

  /**
   * @public
   * <p>The successfully created log pattern.</p>
   */
  LogPattern?: LogPattern;
}

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 */
export interface UpdateProblemRequest {
  /**
   * @public
   * <p>The ID of the problem.</p>
   */
  ProblemId: string | undefined;

  /**
   * @public
   * <p>The status of the problem. Arguments can be passed for only problems that show a status
   *          of <code>RECOVERING</code>.</p>
   */
  UpdateStatus?: UpdateStatus;

  /**
   * @public
   * <p>The visibility of a problem. When you pass a value of <code>IGNORED</code>, the problem
   *          is removed from the default view, and all notifications for the problem are suspended. When
   *          <code>VISIBLE</code> is passed, the <code>IGNORED</code> action is reversed.</p>
   */
  Visibility?: Visibility;
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
   * @public
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string | undefined;

  /**
   * @public
   * <p> The name of the component. </p>
   */
  ComponentName: string | undefined;

  /**
   * @public
   * <p>The ID of the workload.</p>
   */
  WorkloadId?: string;

  /**
   * @public
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   */
  WorkloadConfiguration: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadResponse {
  /**
   * @public
   * <p>The ID of the workload.</p>
   */
  WorkloadId?: string;

  /**
   * @public
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   */
  WorkloadConfiguration?: WorkloadConfiguration;
}
