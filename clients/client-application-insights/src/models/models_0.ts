// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ApplicationInsightsServiceException as __BaseException } from "./ApplicationInsightsServiceException";

/**
 * <p> User does not have permissions to perform this action. </p>
 * @public
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
 * <p>The configuration of the workload.</p>
 * @public
 */
export interface WorkloadConfiguration {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The configuration of the workload tier.</p>
   * @public
   */
  Tier?: Tier;

  /**
   * <p>The configuration settings of the workload.</p>
   * @public
   */
  Configuration?: string;
}

/**
 * @public
 */
export interface AddWorkloadRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   * @public
   */
  WorkloadConfiguration: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface AddWorkloadResponse {
  /**
   * <p>The ID of the workload.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   * @public
   */
  WorkloadConfiguration?: WorkloadConfiguration;
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 * @public
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
 * <p>The resource is already created or in use.</p>
 * @public
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
 * <p>The resource does not exist in the customer account.</p>
 * @public
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
 * <p>The parameter is not valid.</p>
 * @public
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
 * <p>Describes a standalone resource or similarly grouped resources that the application is
 *          made up of.</p>
 * @public
 */
export interface ApplicationComponent {
  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName?: string;

  /**
   * <p> If logging is supported for the resource type, indicates whether the component has
   *          configured logs to be monitored. </p>
   * @public
   */
  ComponentRemarks?: string;

  /**
   * <p>The resource type. Supported resource types include EC2 instances, Auto Scaling group,
   *          Classic ELB, Application ELB, and SQS Queue.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p> The operating system of the component. </p>
   * @public
   */
  OsType?: OsType;

  /**
   * <p>The stack tier of the application component.</p>
   * @public
   */
  Tier?: Tier;

  /**
   * <p>Indicates whether the application component is monitored. </p>
   * @public
   */
  Monitor?: boolean;

  /**
   * <p> Workloads detected in the application component. </p>
   * @public
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
 * <p>Describes the status of the application.</p>
 * @public
 */
export interface ApplicationInfo {
  /**
   * <p>The AWS account ID for the owner of the application.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The name of the resource group used for the application.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The lifecycle of the application. </p>
   * @public
   */
  LifeCycle?: string;

  /**
   * <p> The SNS topic provided to Application Insights that is associated to the created
   *          opsItems to receive SNS notifications for opsItem updates. </p>
   * @public
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p> Indicates whether Application Insights will create opsItems for any problem detected by
   *          Application Insights for an application. </p>
   * @public
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p> Indicates whether Application Insights can listen to CloudWatch events for the
   *          application resources, such as <code>instance terminated</code>, <code>failed
   *             deployment</code>, and others. </p>
   * @public
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
   * @public
   */
  Remarks?: string;

  /**
   * <p> Indicates whether auto-configuration is turned on for this application. </p>
   * @public
   */
  AutoConfigEnabled?: boolean;

  /**
   * <p> The method used by Application Insights to onboard your resources. </p>
   * @public
   */
  DiscoveryType?: DiscoveryType;

  /**
   * <p>If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.</p>
   * @public
   */
  AttachMissingPermission?: boolean;
}

/**
 * <p>The request is not understood by the server.</p>
 * @public
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
 * <p> The event information. </p>
 * @public
 */
export interface ConfigurationEvent {
  /**
   * <p>The name of the resource group of the application to which the configuration event belongs.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The AWS account ID for the owner of the application to which the configuration event belongs.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p> The resource monitored by Application Insights. </p>
   * @public
   */
  MonitoredResourceARN?: string;

  /**
   * <p> The status of the configuration update event. Possible values include INFO, WARN, and
   *          ERROR. </p>
   * @public
   */
  EventStatus?: ConfigurationEventStatus;

  /**
   * <p> The resource type that Application Insights attempted to configure, for example,
   *          CLOUDWATCH_ALARM. </p>
   * @public
   */
  EventResourceType?: ConfigurationEventResourceType;

  /**
   * <p> The timestamp of the event. </p>
   * @public
   */
  EventTime?: Date;

  /**
   * <p> The details of the event in plain text. </p>
   * @public
   */
  EventDetail?: string;

  /**
   * <p> The name of the resource Application Insights attempted to configure. </p>
   * @public
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
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is 128
   *          characters. The minimum length is 1 character.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *          value is 256 characters. The minimum length is 0 characters. If you don't want an
   *          application to have a specific tag value, don't specify a value for this parameter.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p> When set to <code>true</code>, creates opsItems for any problems detected on an
   *          application. </p>
   * @public
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p> Indicates whether Application Insights can listen to CloudWatch events for the
   *          application resources, such as <code>instance terminated</code>, <code>failed
   *             deployment</code>, and others. </p>
   * @public
   */
  CWEMonitorEnabled?: boolean;

  /**
   * <p> The SNS topic provided to Application Insights that is associated to the created
   *          opsItem. Allows you to receive notifications for updates to the opsItem. </p>
   * @public
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p>List of tags to add to the application. tag key (<code>Key</code>) and an associated tag
   *          value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum
   *          length of a tag value is 256 characters.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p> Indicates whether Application Insights automatically configures unmonitored resources
   *          in the resource group. </p>
   * @public
   */
  AutoConfigEnabled?: boolean;

  /**
   * <p> Configures all of the resources in the resource group by applying the recommended
   *          configurations. </p>
   * @public
   */
  AutoCreate?: boolean;

  /**
   * <p>Application Insights can create applications based on a resource group or on an account.
   *          To create an account-based application using all of the resources in the account, set this
   *          parameter to <code>ACCOUNT_BASED</code>. </p>
   * @public
   */
  GroupingType?: GroupingType;

  /**
   * <p>If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.</p>
   * @public
   */
  AttachMissingPermission?: boolean;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>Information about the application.</p>
   * @public
   */
  ApplicationInfo?: ApplicationInfo;
}

/**
 * <p>Tags are already registered for the specified application ARN.</p>
 * @public
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   * @public
   */
  PatternName: string | undefined;

  /**
   * <p>The log pattern. The pattern must be DFA compatible. Patterns that utilize forward
   *          lookahead or backreference constructions are not supported.</p>
   * @public
   */
  Pattern: string | undefined;

  /**
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
   * @public
   */
  Rank: number | undefined;
}

/**
 * <p>An object that defines the log patterns that belongs to a
 *          <code>LogPatternSet</code>.</p>
 * @public
 */
export interface LogPattern {
  /**
   * <p>The name of the log pattern. A log pattern name can contain as many as 30 characters,
   *          and it cannot be empty. The characters can be Unicode letters, digits, or one of the
   *          following symbols: period, dash, underscore.</p>
   * @public
   */
  PatternSetName?: string;

  /**
   * <p>The name of the log pattern. A log pattern name can contain as many as 50 characters,
   *          and it cannot be empty. The characters can be Unicode letters, digits, or one of the
   *          following symbols: period, dash, underscore.</p>
   * @public
   */
  PatternName?: string;

  /**
   * <p>A regular expression that defines the log pattern. A log pattern can contain as many as
   *          50 characters, and it cannot be empty. The pattern must be DFA compatible. Patterns that
   *          utilize forward lookahead or backreference constructions are not supported.</p>
   * @public
   */
  Pattern?: string;

  /**
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
   * @public
   */
  Rank?: number;
}

/**
 * @public
 */
export interface CreateLogPatternResponse {
  /**
   * <p>The successfully created log pattern.</p>
   * @public
   */
  LogPattern?: LogPattern;

  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The name of the resource group.</p>
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * <p>Information about the application.</p>
   * @public
   */
  ApplicationInfo?: ApplicationInfo;
}

/**
 * @public
 */
export interface DescribeComponentRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeComponentResponse {
  /**
   * <p>Describes a standalone resource or similarly grouped resources that the application is
   *          made up of.</p>
   * @public
   */
  ApplicationComponent?: ApplicationComponent;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   * @public
   */
  ResourceList?: string[];
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationResponse {
  /**
   * <p>Indicates whether the application component is monitored.</p>
   * @public
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component. Supported tiers include
   *          <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>,
   *             <code>SQL_SERVER</code>, and <code>DEFAULT</code>
   *          </p>
   * @public
   */
  Tier?: Tier;

  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the
   *          configuration.</p>
   * @public
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The tier of the application component.</p>
   * @public
   */
  Tier: Tier | undefined;

  /**
   * <p>The name of the workload.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The recommended configuration type.</p>
   * @public
   */
  RecommendationType?: RecommendationType;
}

/**
 * @public
 */
export interface DescribeComponentConfigurationRecommendationResponse {
  /**
   * <p>The recommended configuration settings of the component. The value is the escaped JSON
   *          of the configuration.</p>
   * @public
   */
  ComponentConfiguration?: string;
}

/**
 * @public
 */
export interface DescribeLogPatternRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   * @public
   */
  PatternName: string | undefined;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeLogPatternResponse {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The successfully created log pattern.</p>
   * @public
   */
  LogPattern?: LogPattern;
}

/**
 * @public
 */
export interface DescribeObservationRequest {
  /**
   * <p>The ID of the observation.</p>
   * @public
   */
  ObservationId: string | undefined;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
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
 * <p>Describes an anomaly or error with the application.</p>
 * @public
 */
export interface Observation {
  /**
   * <p>The ID of the observation type.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The time when the observation was first detected, in epoch seconds.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The time when the observation ended, in epoch seconds.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The source type of the observation.</p>
   * @public
   */
  SourceType?: string;

  /**
   * <p>The source resource ARN of the observation.</p>
   * @public
   */
  SourceARN?: string;

  /**
   * <p>The log group name.</p>
   * @public
   */
  LogGroup?: string;

  /**
   * <p>The timestamp in the CloudWatch Logs that specifies when the matched line
   *          occurred.</p>
   * @public
   */
  LineTime?: Date;

  /**
   * <p>The log text of the observation.</p>
   * @public
   */
  LogText?: string;

  /**
   * <p>The log filter of the observation.</p>
   * @public
   */
  LogFilter?: LogFilter;

  /**
   * <p>The namespace of the observation metric.</p>
   * @public
   */
  MetricNamespace?: string;

  /**
   * <p>The name of the observation metric.</p>
   * @public
   */
  MetricName?: string;

  /**
   * <p>The unit of the source observation metric.</p>
   * @public
   */
  Unit?: string;

  /**
   * <p>The value of the source observation metric.</p>
   * @public
   */
  Value?: number;

  /**
   * <p> The ID of the CloudWatch Event-based observation related to the detected problem.
   *       </p>
   * @public
   */
  CloudWatchEventId?: string;

  /**
   * <p> The source of the CloudWatch Event. </p>
   * @public
   */
  CloudWatchEventSource?: CloudWatchEventSource;

  /**
   * <p> The detail type of the CloudWatch Event-based observation, for example, <code>EC2
   *             Instance State-change Notification</code>. </p>
   * @public
   */
  CloudWatchEventDetailType?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the AWS Health Event-based observation.</p>
   * @public
   */
  HealthEventArn?: string;

  /**
   * <p> The service to which the AWS Health Event belongs, such as EC2. </p>
   * @public
   */
  HealthService?: string;

  /**
   * <p> The type of the AWS Health event, for example,
   *             <code>AWS_EC2_POWER_CONNECTIVITY_ISSUE</code>. </p>
   * @public
   */
  HealthEventTypeCode?: string;

  /**
   * <p> The category of the AWS Health event, such as <code>issue</code>. </p>
   * @public
   */
  HealthEventTypeCategory?: string;

  /**
   * <p> The description of the AWS Health event provided by the service, such as Amazon EC2.
   *       </p>
   * @public
   */
  HealthEventDescription?: string;

  /**
   * <p> The deployment ID of the CodeDeploy-based observation related to the detected problem.
   *       </p>
   * @public
   */
  CodeDeployDeploymentId?: string;

  /**
   * <p> The deployment group to which the CodeDeploy deployment belongs. </p>
   * @public
   */
  CodeDeployDeploymentGroup?: string;

  /**
   * <p> The status of the CodeDeploy deployment, for example <code>SUCCESS</code> or <code>
   *             FAILURE</code>. </p>
   * @public
   */
  CodeDeployState?: string;

  /**
   * <p> The CodeDeploy application to which the deployment belongs. </p>
   * @public
   */
  CodeDeployApplication?: string;

  /**
   * <p> The instance group to which the CodeDeploy instance belongs. </p>
   * @public
   */
  CodeDeployInstanceGroupId?: string;

  /**
   * <p> The state of the instance, such as <code>STOPPING</code> or <code>TERMINATING</code>.
   *       </p>
   * @public
   */
  Ec2State?: string;

  /**
   * <p> The category of an RDS event. </p>
   * @public
   */
  RdsEventCategories?: string;

  /**
   * <p> The message of an RDS event. </p>
   * @public
   */
  RdsEventMessage?: string;

  /**
   * <p> The name of the S3 CloudWatch Event-based observation. </p>
   * @public
   */
  S3EventName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the step function execution-based observation.
   *       </p>
   * @public
   */
  StatesExecutionArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the step function-based observation. </p>
   * @public
   */
  StatesArn?: string;

  /**
   * <p> The status of the step function-related observation. </p>
   * @public
   */
  StatesStatus?: string;

  /**
   * <p> The input to the step function-based observation. </p>
   * @public
   */
  StatesInput?: string;

  /**
   * <p> The type of EBS CloudWatch event, such as <code>createVolume</code>,
   *             <code>deleteVolume</code> or <code>attachVolume</code>. </p>
   * @public
   */
  EbsEvent?: string;

  /**
   * <p> The result of an EBS CloudWatch event, such as <code>failed</code> or
   *             <code>succeeded</code>. </p>
   * @public
   */
  EbsResult?: string;

  /**
   * <p> The cause of an EBS CloudWatch event. </p>
   * @public
   */
  EbsCause?: string;

  /**
   * <p> The request ID of an EBS CloudWatch event. </p>
   * @public
   */
  EbsRequestId?: string;

  /**
   * <p> The X-Ray request fault percentage for this node. </p>
   * @public
   */
  XRayFaultPercent?: number;

  /**
   * <p> The X-Ray request throttle percentage for this node. </p>
   * @public
   */
  XRayThrottlePercent?: number;

  /**
   * <p> The X-Ray request error percentage for this node. </p>
   * @public
   */
  XRayErrorPercent?: number;

  /**
   * <p> The X-Ray request count for this node. </p>
   * @public
   */
  XRayRequestCount?: number;

  /**
   * <p> The X-Ray node request average latency for this node. </p>
   * @public
   */
  XRayRequestAverageLatency?: number;

  /**
   * <p> The name of the X-Ray node. </p>
   * @public
   */
  XRayNodeName?: string;

  /**
   * <p> The type of the X-Ray node. </p>
   * @public
   */
  XRayNodeType?: string;
}

/**
 * @public
 */
export interface DescribeObservationResponse {
  /**
   * <p>Information about the observation.</p>
   * @public
   */
  Observation?: Observation;
}

/**
 * @public
 */
export interface DescribeProblemRequest {
  /**
   * <p>The ID of the problem.</p>
   * @public
   */
  ProblemId: string | undefined;

  /**
   * <p>The AWS account ID for the owner of the resource group affected by the problem.</p>
   * @public
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
 * <p>Describes a problem that is detected by correlating observations.</p>
 * @public
 */
export interface Problem {
  /**
   * <p>The ID of the problem.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The name of the problem.</p>
   * @public
   */
  Title?: string;

  /**
   * <p>A detailed analysis of the problem using machine learning.</p>
   * @public
   */
  Insights?: string;

  /**
   * <p>The status of the problem.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>The resource affected by the problem.</p>
   * @public
   */
  AffectedResource?: string;

  /**
   * <p>The time when the problem started, in epoch seconds.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The time when the problem ended, in epoch seconds.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>A measure of the level of impact of the problem.</p>
   * @public
   */
  SeverityLevel?: SeverityLevel;

  /**
   * <p>The AWS account ID for the owner of the resource group affected by the problem.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The name of the resource group affected by the problem.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>Feedback provided by the user about the problem.</p>
   * @public
   */
  Feedback?: Partial<Record<FeedbackKey, FeedbackValue>>;

  /**
   * <p> The number of times that the same problem reoccurred after the first time it was
   *          resolved. </p>
   * @public
   */
  RecurringCount?: number;

  /**
   * <p> The last time that the problem reoccurred after its last resolution. </p>
   * @public
   */
  LastRecurrenceTime?: Date;

  /**
   * <p>Specifies whether or not you can view the problem. Updates to ignored problems do not
   *          generate notifications.</p>
   * @public
   */
  Visibility?: Visibility;

  /**
   * <p>Specifies how the problem was resolved. If the value is <code>AUTOMATIC</code>, the
   *          system resolved the problem. If the value is <code>MANUAL</code>, the user resolved the
   *          problem. If the value is <code>UNRESOLVED</code>, then the problem is not resolved.</p>
   * @public
   */
  ResolutionMethod?: ResolutionMethod;
}

/**
 * @public
 */
export interface DescribeProblemResponse {
  /**
   * <p>Information about the problem. </p>
   * @public
   */
  Problem?: Problem;
}

/**
 * @public
 */
export interface DescribeProblemObservationsRequest {
  /**
   * <p>The ID of the problem.</p>
   * @public
   */
  ProblemId: string | undefined;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * <p>Describes observations related to the problem.</p>
 * @public
 */
export interface RelatedObservations {
  /**
   * <p>The list of observations related to the problem.</p>
   * @public
   */
  ObservationList?: Observation[];
}

/**
 * @public
 */
export interface DescribeProblemObservationsResponse {
  /**
   * <p>Observations related to the problem.</p>
   * @public
   */
  RelatedObservations?: RelatedObservations;
}

/**
 * @public
 */
export interface DescribeWorkloadRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The ID of the workload.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The AWS account ID for the workload owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface DescribeWorkloadResponse {
  /**
   * <p>The ID of the workload.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>If logging is supported for the resource type, shows whether the component has configured logs to be monitored.</p>
   * @public
   */
  WorkloadRemarks?: string;

  /**
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   * @public
   */
  WorkloadConfiguration?: WorkloadConfiguration;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The list of applications.</p>
   * @public
   */
  ApplicationInfoList?: ApplicationInfo[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * <p>The list of application components.</p>
   * @public
   */
  ApplicationComponentList?: ApplicationComponent[];

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationHistoryRequest {
  /**
   * <p>Resource group to which the application belongs. </p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The start time of the event. </p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The end time of the event.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The status of the configuration update event. Possible values include INFO, WARN, and
   *          ERROR.</p>
   * @public
   */
  EventStatus?: ConfigurationEventStatus;

  /**
   * <p> The maximum number of results returned by <code>ListConfigurationHistory</code> in
   *          paginated output. When this parameter is used, <code>ListConfigurationHistory</code>
   *          returns only <code>MaxResults</code> in a single page along with a <code>NextToken</code>
   *          response element. The remaining results of the initial request can be seen by sending
   *          another <code>ListConfigurationHistory</code> request with the returned
   *             <code>NextToken</code> value. If this parameter is not used, then
   *             <code>ListConfigurationHistory</code> returns all results. </p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated
   *             <code>ListConfigurationHistory</code> request where <code>MaxResults</code> was used and
   *          the results exceeded the value of that parameter. Pagination continues from the end of the
   *          previous results that returned the <code>NextToken</code> value. This value is
   *             <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListConfigurationHistoryResponse {
  /**
   * <p> The list of configuration events and their corresponding details. </p>
   * @public
   */
  EventList?: ConfigurationEvent[];

  /**
   * <p>The <code>NextToken</code> value to include in a future
   *             <code>ListConfigurationHistory</code> request. When the results of a
   *             <code>ListConfigurationHistory</code> request exceed <code>MaxResults</code>, this value
   *          can be used to retrieve the next page of results. This value is <code>null</code> when
   *          there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLogPatternsRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   * @public
   */
  PatternSetName?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListLogPatternsResponse {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The list of log patterns.</p>
   * @public
   */
  LogPatterns?: LogPattern[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLogPatternSetsRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListLogPatternSetsResponse {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The list of log pattern sets.</p>
   * @public
   */
  LogPatternSets?: string[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProblemsRequest {
  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The time when the problem was detected, in epoch seconds. If you don't specify a time
   *          frame for the request, problems within the past seven days are returned.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The time when the problem ended, in epoch seconds. If not specified, problems within the
   *          past seven days are returned.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *          results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The name of the component. </p>
   * @public
   */
  ComponentName?: string;

  /**
   * <p>Specifies whether or not you can view the problem. If not specified, visible and
   *          ignored problems are returned.</p>
   * @public
   */
  Visibility?: Visibility;
}

/**
 * @public
 */
export interface ListProblemsResponse {
  /**
   * <p>The list of problems. </p>
   * @public
   */
  ProblemList?: Problem[];

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code>
   *          when there are no more results to return. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The name of the resource group. </p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The AWS account ID for the resource group owner.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application that you want to retrieve tag
   *          information for.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array that lists all the tags that are associated with the application. Each tag
   *          consists of a required tag key (<code>Key</code>) and an associated tag value
   *             (<code>Value</code>).</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListWorkloadsRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The AWS account ID of the owner of the workload.</p>
   * @public
   */
  AccountId?: string;
}

/**
 * <p>Describes the workloads on a component.</p>
 * @public
 */
export interface Workload {
  /**
   * <p>The ID of the workload.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName?: string;

  /**
   * <p>The name of the workload.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The tier of the workload.</p>
   * @public
   */
  Tier?: Tier;

  /**
   * <p>If logging is supported for the resource type, shows whether the component has configured logs to be monitored.</p>
   * @public
   */
  WorkloadRemarks?: string;
}

/**
 * @public
 */
export interface ListWorkloadsResponse {
  /**
   * <p>The list of workloads.</p>
   * @public
   */
  WorkloadList?: Workload[];

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RemoveWorkloadRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The ID of the workload.</p>
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
   * <p>The Amazon Resource Name (ARN) of the application that you want to add one or more tags
   *          to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags that to add to the application. A tag consists of a required tag key
   *             (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length
   *          of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The number of the provided tags is beyond the limit, or the number of total tags you are
 *          trying to attach to the specified resource exceeds the limit.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The name of the resource with too many tags.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the application that you want to remove one or more
   *          tags from.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *          key, the action removes both that key and its associated tag value.</p>
   *          <p>To remove more than one tag from the application, append the <code>TagKeys</code>
   *          parameter and argument for each additional tag to remove, separated by an ampersand.
   *       </p>
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p> When set to <code>true</code>, creates opsItems for any problems detected on an
   *          application. </p>
   * @public
   */
  OpsCenterEnabled?: boolean;

  /**
   * <p> Indicates whether Application Insights can listen to CloudWatch events for the
   *          application resources, such as <code>instance terminated</code>, <code>failed
   *             deployment</code>, and others. </p>
   * @public
   */
  CWEMonitorEnabled?: boolean;

  /**
   * <p> The SNS topic provided to Application Insights that is associated to the created
   *          opsItem. Allows you to receive notifications for updates to the opsItem.</p>
   * @public
   */
  OpsItemSNSTopicArn?: string;

  /**
   * <p> Disassociates the SNS topic from the opsItem created for detected problems.</p>
   * @public
   */
  RemoveSNSTopic?: boolean;

  /**
   * <p> Turns auto-configuration on or off. </p>
   * @public
   */
  AutoConfigEnabled?: boolean;

  /**
   * <p>If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.</p>
   * @public
   */
  AttachMissingPermission?: boolean;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>Information about the application. </p>
   * @public
   */
  ApplicationInfo?: ApplicationInfo;
}

/**
 * @public
 */
export interface UpdateComponentRequest {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The new name of the component.</p>
   * @public
   */
  NewComponentName?: string;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   * @public
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>Indicates whether the application component is monitored.</p>
   * @public
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component.</p>
   * @public
   */
  Tier?: Tier;

  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the
   *          configuration. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>. You can send a request to
   *             <code>DescribeComponentConfigurationRecommendation</code> to see the recommended
   *          configuration for a component. For the complete format of the component configuration file,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.</p>
   * @public
   */
  ComponentConfiguration?: string;

  /**
   * <p> Automatically configures the component by applying the recommended configurations.
   *       </p>
   * @public
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p>The name of the log pattern set.</p>
   * @public
   */
  PatternSetName: string | undefined;

  /**
   * <p>The name of the log pattern.</p>
   * @public
   */
  PatternName: string | undefined;

  /**
   * <p>The log pattern. The pattern must be DFA compatible. Patterns that utilize forward
   *          lookahead or backreference constructions are not supported.</p>
   * @public
   */
  Pattern?: string;

  /**
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
   * @public
   */
  Rank?: number;
}

/**
 * @public
 */
export interface UpdateLogPatternResponse {
  /**
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName?: string;

  /**
   * <p>The successfully created log pattern.</p>
   * @public
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
   * <p>The ID of the problem.</p>
   * @public
   */
  ProblemId: string | undefined;

  /**
   * <p>The status of the problem. Arguments can be passed for only problems that show a status
   *          of <code>RECOVERING</code>.</p>
   * @public
   */
  UpdateStatus?: UpdateStatus;

  /**
   * <p>The visibility of a problem. When you pass a value of <code>IGNORED</code>, the problem
   *          is removed from the default view, and all notifications for the problem are suspended. When
   *          <code>VISIBLE</code> is passed, the <code>IGNORED</code> action is reversed.</p>
   * @public
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
   * <p>The name of the resource group.</p>
   * @public
   */
  ResourceGroupName: string | undefined;

  /**
   * <p> The name of the component. </p>
   * @public
   */
  ComponentName: string | undefined;

  /**
   * <p>The ID of the workload.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   * @public
   */
  WorkloadConfiguration: WorkloadConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadResponse {
  /**
   * <p>The ID of the workload.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The configuration settings of the workload. The value is the escaped JSON of the configuration.</p>
   * @public
   */
  WorkloadConfiguration?: WorkloadConfiguration;
}
