// smithy-typescript generated code
import { FieldInfo, OrganizationConfigRuleTriggerTypeNoSN, ResourceType } from "./models_0";

export enum ConformancePackComplianceType {
  COMPLIANT = "COMPLIANT",
  INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
  NON_COMPLIANT = "NON_COMPLIANT",
}

export enum AggregateConformancePackComplianceSummaryGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
}

export enum AggregatedSourceType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATION = "ORGANIZATION",
}

export enum ConfigurationItemStatus {
  OK = "OK",
  ResourceDeleted = "ResourceDeleted",
  ResourceDeletedNotRecorded = "ResourceDeletedNotRecorded",
  ResourceDiscovered = "ResourceDiscovered",
  ResourceNotRecorded = "ResourceNotRecorded",
}

export enum ChronologicalOrder {
  Forward = "Forward",
  Reverse = "Reverse",
}

export enum DeliveryStatus {
  Failure = "Failure",
  Not_Applicable = "Not_Applicable",
  Success = "Success",
}

export enum ConfigRuleState {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
  DELETING_RESULTS = "DELETING_RESULTS",
  EVALUATING = "EVALUATING",
}

export enum MaximumExecutionFrequency {
  One_Hour = "One_Hour",
  Six_Hours = "Six_Hours",
  Three_Hours = "Three_Hours",
  Twelve_Hours = "Twelve_Hours",
  TwentyFour_Hours = "TwentyFour_Hours",
}

export enum Owner {
  Aws = "AWS",
  Custom_Lambda = "CUSTOM_LAMBDA",
  Custom_Policy = "CUSTOM_POLICY",
}

export enum EventSource {
  Aws_Config = "aws.config",
}

export enum MessageType {
  ConfigurationItemChangeNotification = "ConfigurationItemChangeNotification",
  ConfigurationSnapshotDeliveryCompleted = "ConfigurationSnapshotDeliveryCompleted",
  OversizedConfigurationItemChangeNotification = "OversizedConfigurationItemChangeNotification",
  ScheduledNotification = "ScheduledNotification",
}

export enum ConfigRuleComplianceSummaryGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
}

export enum RecorderStatus {
  Failure = "Failure",
  Pending = "Pending",
  Success = "Success",
}

export enum ConformancePackState {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

/**
 * <p>An object that specifies metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and
 * 			other custom rule metadata such as resource type, resource ID of Amazon Web Services
 * 			resource, and organization trigger types that trigger Config to evaluate
 * 				Amazon Web Services resources against a rule.</p>
 */
export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
  /**
   * <p>The description that you provide for your organization Config Custom Policy rule.</p>
   */
  Description?: string;

  /**
   * <p>The type of notification that triggers Config to run an evaluation for a rule.
   * 			For Config Custom Policy rules, Config supports change
   * 			triggered notification types:</p>
   *
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers an oversized configuration item.
   * 				Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p>
   *             </li>
   *          </ul>
   */
  OrganizationConfigRuleTriggerTypes?: (OrganizationConfigRuleTriggerTypeNoSN | string)[];

  /**
   * <p>A string, in JSON format, that is passed to your organization Config Custom Policy rule.</p>
   */
  InputParameters?: string;

  /**
   * <p>The maximum frequency with which Config runs evaluations for a rule. Your
   * 			Config Custom Policy rule is triggered when Config delivers
   * 			the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p>
   */
  MaximumExecutionFrequency?: MaximumExecutionFrequency | string;

  /**
   * <p>The type of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceTypesScope?: string[];

  /**
   * <p>The ID of the Amazon Web Services resource that was evaluated.</p>
   */
  ResourceIdScope?: string;

  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  TagKeyScope?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  TagValueScope?: string;

  /**
   * <p>The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
   * 			Repository</a>.</p>
   */
  PolicyRuntime?: string;

  /**
   * <p>A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.</p>
   */
  DebugLogDeliveryAccounts?: string[];
}

export namespace OrganizationCustomPolicyRuleMetadataNoPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationCustomPolicyRuleMetadataNoPolicy): any => ({
    ...obj,
  });
}

export enum OrganizationRuleStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

export enum OrganizationResourceStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

export enum ResourceValueType {
  RESOURCE_ID = "RESOURCE_ID",
}

export enum RemediationTargetType {
  SSM_DOCUMENT = "SSM_DOCUMENT",
}

export enum RemediationExecutionState {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  SUCCEEDED = "SUCCEEDED",
}

export enum RemediationExecutionStepState {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Name of the step from the SSM document.</p>
 */
export interface RemediationExecutionStep {
  /**
   * <p>The details of the step.</p>
   */
  Name?: string;

  /**
   * <p>The valid status of the step.</p>
   */
  State?: RemediationExecutionStepState | string;

  /**
   * <p>An error message if the step was interrupted during execution.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The time when the step started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the step stopped.</p>
   */
  StopTime?: Date;
}

export namespace RemediationExecutionStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationExecutionStep): any => ({
    ...obj,
  });
}

export enum ResourceCountGroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  AWS_REGION = "AWS_REGION",
  RESOURCE_TYPE = "RESOURCE_TYPE",
}

export enum MemberAccountRuleStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

export enum OrganizationResourceDetailedStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESSFUL = "CREATE_SUCCESSFUL",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SUCCESSFUL = "DELETE_SUCCESSFUL",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
}

/**
 * <p>The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the
 * 			custom resource name.</p>
 */
export interface ResourceIdentifier {
  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the resource (for example,
   * 			<code>sg-xxxxxx</code>).</p>
   */
  resourceId?: string;

  /**
   * <p>The custom name of the resource (if available).</p>
   */
  resourceName?: string;

  /**
   * <p>The time that the resource was deleted.</p>
   */
  resourceDeletionTime?: Date;
}

export namespace ResourceIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Returns details of a specific query. </p>
 */
export interface StoredQueryMetadata {
  /**
   * <p>The ID of the query. </p>
   */
  QueryId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.</p>
   */
  QueryArn: string | undefined;

  /**
   * <p>The name of the query.</p>
   */
  QueryName: string | undefined;

  /**
   * <p>A unique description for the query.</p>
   */
  Description?: string;
}

export namespace StoredQueryMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StoredQueryMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the query.</p>
 */
export interface QueryInfo {
  /**
   * <p>Returns a <code>FieldInfo</code> object.</p>
   */
  SelectFields?: FieldInfo[];
}

export namespace QueryInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryInfo): any => ({
    ...obj,
  });
}
