// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  ActionSummary,
  AgentAvailabilityTimer,
  AgentConfig,
  AgentContactReference,
  AgentHierarchyGroups,
  AgentStatusReference,
  AgentStatusSummary,
  AgentStatusType,
  AnalyticsDataAssociationResult,
  Application,
  Attribute,
  Channel,
  ContactFlowModuleState,
  ContactFlowState,
  ContactFlowType,
  ContactInitiationMethod,
  ContactState,
  DirectoryType,
  Distribution,
  EvaluationFormVersionStatus,
  EvaluationScore,
  EvaluationStatus,
  EventSourceName,
  FlowAssociationResourceType,
  FlowAssociationSummary,
  InstanceStatus,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  IntegrationType,
  LexBot,
  LexV2Bot,
  ListFlowAssociationResourceType,
  MediaConcurrency,
  MonitorCapability,
  OutboundCallerConfig,
  ParticipantRole,
  PhoneNumberCountryCode,
  PredefinedAttributeValues,
  QueueReference,
  QuickConnectConfig,
  QuickConnectType,
  ReferenceType,
  RoutingProfileQueueReference,
  RuleAction,
  RulePublishStatus,
  RuleTriggerEventSource,
  SourceType,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  UseCaseType,
  UserIdentityInfo,
  UserIdentityInfoFilterSensitiveLog,
  UserPhoneConfig,
  UserProficiency,
  View,
  ViewFilterSensitiveLog,
  ViewStatus,
  ViewType,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const PhoneNumberWorkflowStatus = {
  Claimed: "CLAIMED",
  Failed: "FAILED",
  InProgress: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type PhoneNumberWorkflowStatus = (typeof PhoneNumberWorkflowStatus)[keyof typeof PhoneNumberWorkflowStatus];

/**
 * @public
 * <p>The status of the phone number.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a>, <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a>, or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html">UpdatePhoneNumberMetadata</a> operation is still in progress and has not yet completed.
 *      You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at
 *      a later time to verify if the previous operation has completed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the
 *      failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you
 *      are claiming or updating a phone number to has reached its limit of total claimed numbers. If
 *      you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you
 *      have one day to retry claiming the phone number before the number is released back to the
 *      inventory for other customers to claim.</p>
 *             </li>
 *          </ul>
 */
export interface PhoneNumberStatus {
  /**
   * @public
   * <p>The status.</p>
   */
  Status?: PhoneNumberWorkflowStatus;

  /**
   * @public
   * <p>The status message.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  DID: "DID",
  SHARED: "SHARED",
  SHORT_CODE: "SHORT_CODE",
  THIRD_PARTY_DID: "THIRD_PARTY_DID",
  THIRD_PARTY_TF: "THIRD_PARTY_TF",
  TOLL_FREE: "TOLL_FREE",
  UIFN: "UIFN",
} as const;

/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * @public
 * <p>Information about a phone number that has been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 */
export interface ClaimedPhoneNumberSummary {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * @public
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * @public
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The status of the phone number.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a>, <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a>, or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html">UpdatePhoneNumberMetadata</a> operation is still in progress and has not yet completed.
   *      You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at
   *      a later time to verify if the previous operation has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the
   *      failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you
   *      are claiming or updating a phone number to has reached its limit of total claimed numbers. If
   *      you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you
   *      have one day to retry claiming the phone number before the number is released back to the
   *      inventory for other customers to claim.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You will not be billed for the phone number during the 1-day period if number claiming
   *     fails. </p>
   *          </note>
   */
  PhoneNumberStatus?: PhoneNumberStatus;

  /**
   * @public
   * <p>The claimed phone number ARN that was previously imported from the external service, such as
   *     Amazon Pinpoint. If it is from Amazon Pinpoint, it looks like the ARN of the phone number
   *    that was imported from Amazon Pinpoint.</p>
   */
  SourcePhoneNumberArn?: string;
}

/**
 * @public
 */
export interface DescribePhoneNumberResponse {
  /**
   * @public
   * <p>Information about a phone number that's been claimed to your Amazon Connect instance or
   *    traffic distribution group.</p>
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the predefined attribute.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Information about a predefined attribute.</p>
 */
export interface PredefinedAttribute {
  /**
   * @public
   * <p>The name of the predefined attribute.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The values of the predefined attribute.</p>
   */
  Values?: PredefinedAttributeValues;

  /**
   * @public
   * <p>Last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Last modified region.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeResponse {
  /**
   * @public
   * <p>Information about the predefined attribute.</p>
   */
  PredefinedAttribute?: PredefinedAttribute;
}

/**
 * @public
 */
export interface DescribePromptRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId: string | undefined;
}

/**
 * @public
 * <p>Information about a prompt.</p>
 */
export interface Prompt {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  PromptARN?: string;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId?: string;

  /**
   * @public
   * <p>The name of the prompt.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the prompt.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribePromptResponse {
  /**
   * @public
   * <p>Information about the prompt.</p>
   */
  Prompt?: Prompt;
}

/**
 * @public
 */
export interface DescribeQueueRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * @public
 * <p>Contains information about a queue.</p>
 */
export interface Queue {
  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the queue.</p>
   */
  QueueArn?: string;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;

  /**
   * @public
   * <p>The description of the queue.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig?: OutboundCallerConfig;

  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * @public
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;

  /**
   * @public
   * <p>The status of the queue.</p>
   */
  Status?: QueueStatus;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeQueueResponse {
  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Queue?: Queue;
}

/**
 * @public
 */
export interface DescribeQuickConnectRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a quick connect.</p>
 */
export interface QuickConnect {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  QuickConnectARN?: string;

  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId?: string;

  /**
   * @public
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contains information about the quick connect.</p>
   */
  QuickConnectConfig?: QuickConnectConfig;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeQuickConnectResponse {
  /**
   * @public
   * <p>Information about the quick connect.</p>
   */
  QuickConnect?: QuickConnect;
}

/**
 * @public
 */
export interface DescribeRoutingProfileRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a routing profile.</p>
 */
export interface RoutingProfile {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The name of the routing profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  RoutingProfileArn?: string;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId?: string;

  /**
   * @public
   * <p>The description of the routing profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  MediaConcurrencies?: MediaConcurrency[];

  /**
   * @public
   * <p>The identifier of the default outbound queue for this routing profile.</p>
   */
  DefaultOutboundQueueId?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The number of associated queues in routing profile.</p>
   */
  NumberOfAssociatedQueues?: number;

  /**
   * @public
   * <p>The number of associated users in routing profile.</p>
   */
  NumberOfAssociatedUsers?: number;

  /**
   * @public
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>time since their last inbound contact</i> or <i>longest idle
   *     time</i>. </p>
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;

  /**
   * @public
   * <p>Whether this a default routing profile.</p>
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface DescribeRoutingProfileResponse {
  /**
   * @public
   * <p>The routing profile.</p>
   */
  RoutingProfile?: RoutingProfile;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * @public
 * <p>Information about a rule.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * @public
   * <p>The event source to trigger the rule.</p>
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * @public
   * <p>The conditions of the rule.</p>
   */
  Function: string | undefined;

  /**
   * @public
   * <p>A list of actions to be run when the rule is triggered.</p>
   */
  Actions: RuleAction[] | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * @public
   * <p>The timestamp for when the rule was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for the when the rule was last updated.</p>
   */
  LastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the rule.</p>
   */
  LastUpdatedBy: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRuleResponse {
  /**
   * @public
   * <p>Information about the rule.</p>
   */
  Rule: Rule | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
  /**
   * @public
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfile {
  /**
   * @public
   * <p>The identifier for the security profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The organization resource identifier for the security profile.</p>
   */
  OrganizationResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the secruity profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name for the security profile.</p>
   */
  SecurityProfileName?: string;

  /**
   * @public
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * @public
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   */
  TagRestrictedResources?: string[];

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * @public
   * <p>The security profile.</p>
   */
  SecurityProfile?: SecurityProfile;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficDistributionGroupStatus = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETION_FAILED: "DELETION_FAILED",
  PENDING_DELETION: "PENDING_DELETION",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type TrafficDistributionGroupStatus =
  (typeof TrafficDistributionGroupStatus)[keyof typeof TrafficDistributionGroupStatus];

/**
 * @public
 * <p>Information about a traffic distribution group.</p>
 */
export interface TrafficDistributionGroup {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the traffic distribution group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the traffic distribution group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The status of the traffic distribution group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETION_FAILED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistribution.html">UpdateTrafficDistribution</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *          </ul>
   */
  Status?: TrafficDistributionGroupStatus;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   *          <note>
   *             <p>The <code>SignInConfig</code> distribution is available only on a
   * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
   *  data type). If you call
   *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
   *     an <code>InvalidRequestException</code> is returned.</p>
   *          </note>
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupResponse {
  /**
   * @public
   * <p>Information about the traffic distribution group.</p>
   */
  TrafficDistributionGroup?: TrafficDistributionGroup;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a user account for an Amazon Connect instance.</p>
 */
export interface User {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The user name assigned to the user account.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>Information about the user identity.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * @public
   * <p>Information about the phone configuration for the user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * @public
   * <p>The identifier of the user account in the directory used for identity management.</p>
   */
  DirectoryUserId?: string;

  /**
   * @public
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * @public
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId?: string;

  /**
   * @public
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * @public
   * <p>The
   *    tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * @public
   * <p>Information about the user account and configuration settings.</p>
   */
  User?: User;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupRequest {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains summary information about a hierarchy group.</p>
 */
export interface HierarchyGroupSummary {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 * <p>Contains information about the levels of a hierarchy group.</p>
 */
export interface HierarchyPath {
  /**
   * @public
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummary;
}

/**
 * @public
 * <p>Contains information about a hierarchy group.</p>
 */
export interface HierarchyGroup {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the level in the hierarchy group.</p>
   */
  LevelId?: string;

  /**
   * @public
   * <p>Information about the levels in the hierarchy group.</p>
   */
  HierarchyPath?: HierarchyPath;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupResponse {
  /**
   * @public
   * <p>Information about the hierarchy group.</p>
   */
  HierarchyGroup?: HierarchyGroup;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a hierarchy level.</p>
 */
export interface HierarchyLevel {
  /**
   * @public
   * <p>The identifier of the hierarchy level.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hierarchy level.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 * <p>Contains information about a hierarchy structure.</p>
 */
export interface HierarchyStructure {
  /**
   * @public
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyLevel;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureResponse {
  /**
   * @public
   * <p>Information about the hierarchy structure.</p>
   */
  HierarchyStructure?: HierarchyStructure;
}

/**
 * @public
 */
export interface DescribeViewRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The ViewId of the view. This must be an ARN for Amazon Web Services managed views.</p>
   */
  ViewId: string | undefined;
}

/**
 * @public
 */
export interface DescribeViewResponse {
  /**
   * @public
   * <p>All view data is contained within the View object.</p>
   */
  View?: View;
}

/**
 * @public
 */
export interface DescribeVocabularyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a custom vocabulary.</p>
 */
export interface Vocabulary {
  /**
   * @public
   * <p>A unique name of the custom vocabulary.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * @public
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | undefined;

  /**
   * @public
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The reason why the custom vocabulary was not created.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVocabularyResponse {
  /**
   * @public
   * <p>A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are
   *    generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper
   *    nouns.</p>
   */
  Vocabulary: Vocabulary | undefined;
}

/**
 * @public
 */
export interface DisassociateAnalyticsDataSetRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the dataset to remove.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   */
  TargetAccountId?: string;
}

/**
 * @public
 */
export interface DisassociateApprovedOriginRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The domain URL of the integrated application.</p>
   */
  Origin: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBotRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * @public
   * <p>The Amazon Lex V2 bot to disassociate from the instance.</p>
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 */
export interface DisassociateFlowRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface DisassociateFlowResponse {}

/**
 * @public
 */
export interface DisassociateInstanceStorageConfigRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | undefined;
}

/**
 * @public
 */
export interface DisassociateLambdaFunctionRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance..</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</p>
   */
  FunctionArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateLexBotRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Lex bot. Maximum character limit of 50.</p>
   */
  BotName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the Amazon Lex bot has been created.</p>
   */
  LexRegion: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberContactFlowRequest {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQueueQuickConnectsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The quick connects to disassociate from the queue.</p>
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRoutingProfileQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * @public
   * <p>The queues to disassociate from this routing profile.</p>
   */
  QueueReferences: RoutingProfileQueueReference[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityKeyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserResponse {}

/**
 * @public
 * <p>Information about proficiency to be disassociated from the user.</p>
 */
export interface UserProficiencyDisassociate {
  /**
   * @public
   * <p>The name of user's proficiency.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>The value of user's proficiency.</p>
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserProficienciesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The proficiencies to disassociate from the user.</p>
   */
  UserProficiencies: UserProficiencyDisassociate[] | undefined;
}

/**
 * @public
 */
export interface DismissUserContactRequest {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DismissUserContactResponse {}

/**
 * @public
 */
export interface GetContactAttributesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the initial contact.</p>
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface GetContactAttributesResponse {
  /**
   * @public
   * <p>Information about the attributes.</p>
   */
  Attributes?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const CurrentMetricName = {
  AGENTS_AFTER_CONTACT_WORK: "AGENTS_AFTER_CONTACT_WORK",
  AGENTS_AVAILABLE: "AGENTS_AVAILABLE",
  AGENTS_ERROR: "AGENTS_ERROR",
  AGENTS_NON_PRODUCTIVE: "AGENTS_NON_PRODUCTIVE",
  AGENTS_ONLINE: "AGENTS_ONLINE",
  AGENTS_ON_CALL: "AGENTS_ON_CALL",
  AGENTS_ON_CONTACT: "AGENTS_ON_CONTACT",
  AGENTS_STAFFED: "AGENTS_STAFFED",
  CONTACTS_IN_QUEUE: "CONTACTS_IN_QUEUE",
  CONTACTS_SCHEDULED: "CONTACTS_SCHEDULED",
  OLDEST_CONTACT_AGE: "OLDEST_CONTACT_AGE",
  SLOTS_ACTIVE: "SLOTS_ACTIVE",
  SLOTS_AVAILABLE: "SLOTS_AVAILABLE",
} as const;

/**
 * @public
 */
export type CurrentMetricName = (typeof CurrentMetricName)[keyof typeof CurrentMetricName];

/**
 * @public
 * @enum
 */
export const Unit = {
  COUNT: "COUNT",
  PERCENT: "PERCENT",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export interface CurrentMetric {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  Name?: CurrentMetricName;

  /**
   * @public
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit;
}

/**
 * @public
 * <p>Contains the filter to apply when retrieving metrics.</p>
 */
export interface Filters {
  /**
   * @public
   * <p>The queues to use to filter the metrics. You should specify at least one queue, and can
   *    specify up to 100 queues per request. The <code>GetCurrentMetricsData</code> API in particular
   *    requires a queue when you include a <code>Filter</code> in your request. </p>
   */
  Queues?: string[];

  /**
   * @public
   * <p>The channel to use to filter the metrics.</p>
   */
  Channels?: Channel[];

  /**
   * @public
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   */
  RoutingProfiles?: string[];

  /**
   * @public
   * <p>A list of expressions as a filter, in which an expression is an object of a step in a
   *    routing criteria.</p>
   */
  RoutingStepExpressions?: string[];
}

/**
 * @public
 * @enum
 */
export const Grouping = {
  CHANNEL: "CHANNEL",
  QUEUE: "QUEUE",
  ROUTING_PROFILE: "ROUTING_PROFILE",
  ROUTING_STEP_EXPRESSION: "ROUTING_STEP_EXPRESSION",
} as const;

/**
 * @public
 */
export type Grouping = (typeof Grouping)[keyof typeof Grouping];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>The way to sort the resulting response based on metrics. By default resources are sorted
 *    based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted
 *    based on the input metrics.</p>
 */
export interface CurrentMetricSortCriteria {
  /**
   * @public
   * <p>The current metric names.</p>
   */
  SortByMetric?: CurrentMetricName;

  /**
   * @public
   * <p>The way to sort.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface GetCurrentMetricDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The filters to apply to returned metrics. You can filter up to the following limits:</p>
   *          <ul>
   *             <li>
   *                <p>Queues: 100</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles: 100</p>
   *             </li>
   *             <li>
   *                <p>Channels: 3 (VOICE, CHAT, and TASK channels are supported.)</p>
   *             </li>
   *             <li>
   *                <p>RoutingStepExpressions: 50</p>
   *             </li>
   *          </ul>
   *          <p>Metric data is retrieved only for the resources associated with the queues or routing
   *    profiles, and by any channels included in the filter. (You cannot filter by both queue AND
   *    routing profile.) You can include both resource IDs and resource ARNs in the same request.</p>
   *          <p>When using the <code>RoutingStepExpression</code> filter, you need to pass exactly one
   *     <code>QueueId</code>. The filter is also case sensitive so when using the
   *     <code>RoutingStepExpression</code> filter, grouping by <code>ROUTING_STEP_EXPRESSION</code> is
   *    required.</p>
   *          <p>Currently tagging is only supported on the resources that are passed in the filter.</p>
   */
  Filters: Filters | undefined;

  /**
   * @public
   * <p>The grouping applied to the metrics returned. For example, when grouped by
   *     <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all
   *    queues. </p>
   *          <ul>
   *             <li>
   *                <p>If you group by <code>CHANNEL</code>, you should include a Channels filter.
   *      VOICE, CHAT, and TASK channels are supported.</p>
   *             </li>
   *             <li>
   *                <p>If you group by <code>ROUTING_PROFILE</code>, you must include either a queue or routing
   *      profile filter. In addition, a routing profile filter is required for metrics
   *       <code>CONTACTS_SCHEDULED</code>, <code>CONTACTS_IN_QUEUE</code>, and <code>
   *       OLDEST_CONTACT_AGE</code>.</p>
   *             </li>
   *             <li>
   *                <p>If no <code>Grouping</code> is included in the request, a summary of metrics is
   *      returned.</p>
   *             </li>
   *             <li>
   *                <p>When using the <code>RoutingStepExpression</code> filter, group by
   *       <code>ROUTING_STEP_EXPRESSION</code> is required.</p>
   *             </li>
   *          </ul>
   */
  Groupings?: Grouping[];

  /**
   * @public
   * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics
   *    are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
   *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <dl>
   *             <dt>AGENTS_AFTER_CONTACT_WORK</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#aftercallwork-real-time">ACW</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#available-real-time">Available</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ERROR</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#error-real-time">Error</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_NON_PRODUCTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#non-productive-time-real-time">NPT (Non-Productive Time)</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ON_CALL</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On
   *        contact</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ON_CONTACT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On
   *        contact</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ONLINE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#online-real-time">Online</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_STAFFED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#staffed-real-time">Staffed</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_IN_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#in-queue-real-time">In
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_SCHEDULED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#scheduled-real-time">Scheduled</a>
   *                </p>
   *             </dd>
   *             <dt>OLDEST_CONTACT_AGE</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>When you use groupings, Unit says SECONDS and the Value is returned in SECONDS. </p>
   *                <p>When you do not use groupings, Unit says SECONDS but the Value is returned in
   *       MILLISECONDS. For example, if you get a response like this:</p>
   *                <p>
   *                   <code>\{ "Metric": \{ "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" \}, "Value": 24113.0
   *       </code>\}</p>
   *                <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p>
   *                <p>When the filter <code>RoutingStepExpression</code> is used, this metric is still
   *       calculated from enqueue time. For example, if a contact that has been queued under
   *        <code><Expression 1></code> for 10 seconds has expired and <code><Expression 2></code>
   *       becomes active, then <code>OLDEST_CONTACT_AGE</code> for this queue will be counted starting
   *       from 10, not 0.</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#oldest-real-time">Oldest</a>
   *                </p>
   *             </dd>
   *             <dt>SLOTS_ACTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#active-real-time">Active</a>
   *                </p>
   *             </dd>
   *             <dt>SLOTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#availability-real-time">Availability</a>
   *                </p>
   *             </dd>
   *          </dl>
   */
  CurrentMetrics: CurrentMetric[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The way to sort the resulting response based on metrics. You can enter one sort criteria. By
   *    default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The
   *    metric collection is sorted based on the input metrics.</p>
   *          <p>Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>Sorting on <code>SLOTS_ACTIVE</code> and <code>SLOTS_AVAILABLE</code> is not
   *      supported.</p>
   *             </li>
   *          </ul>
   */
  SortCriteria?: CurrentMetricSortCriteria[];
}

/**
 * @public
 * <p>Contains the data for a real-time metric.</p>
 */
export interface CurrentMetricData {
  /**
   * @public
   * <p>Information about the metric.</p>
   */
  Metric?: CurrentMetric;

  /**
   * @public
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Information about the routing profile assigned to the user.</p>
 */
export interface RoutingProfileReference {
  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Contains information about the dimensions for a set of metrics.</p>
 */
export interface Dimensions {
  /**
   * @public
   * <p>Information about the queue for which metrics are returned.</p>
   */
  Queue?: QueueReference;

  /**
   * @public
   * <p>The channel used for grouping and filters.</p>
   */
  Channel?: Channel;

  /**
   * @public
   * <p>Information about the routing profile assigned to the user.</p>
   */
  RoutingProfile?: RoutingProfileReference;

  /**
   * @public
   * <p>The expression of a step in a routing criteria.</p>
   */
  RoutingStepExpression?: string;
}

/**
 * @public
 * <p>Contains information about a set of real-time metrics.</p>
 */
export interface CurrentMetricResult {
  /**
   * @public
   * <p>The dimensions for the metrics.</p>
   */
  Dimensions?: Dimensions;

  /**
   * @public
   * <p>The set of metrics.</p>
   */
  Collections?: CurrentMetricData[];
}

/**
 * @public
 */
export interface GetCurrentMetricDataResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the real-time metrics.</p>
   */
  MetricResults?: CurrentMetricResult[];

  /**
   * @public
   * <p>The time at which the metrics were retrieved and cached for pagination.</p>
   */
  DataSnapshotTime?: Date;

  /**
   * @public
   * <p>The total count of the result, regardless of the current page size. </p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters user data based on the contact information that is associated to the users. It
 *    contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
 */
export interface ContactFilter {
  /**
   * @public
   * <p>A list of up to 9 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
   */
  ContactStates?: ContactState[];
}

/**
 * @public
 * <p>A filter for the user data.</p>
 */
export interface UserDataFilters {
  /**
   * @public
   * <p>A list of up to 100 queues or ARNs.</p>
   */
  Queues?: string[];

  /**
   * @public
   * <p>A filter for the user data based on the contact information that is associated to the user.
   *    It contains a list of contact states. </p>
   */
  ContactFilter?: ContactFilter;

  /**
   * @public
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   */
  RoutingProfiles?: string[];

  /**
   * @public
   * <p>A list of up to 100 agent IDs or ARNs.</p>
   */
  Agents?: string[];

  /**
   * @public
   * <p>A UserHierarchyGroup ID or ARN.</p>
   */
  UserHierarchyGroups?: string[];
}

/**
 * @public
 */
export interface GetCurrentUserDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The filters to apply to returned user data. You can filter up to the following
   *    limits:</p>
   *          <ul>
   *             <li>
   *                <p>Queues: 100</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles: 100</p>
   *             </li>
   *             <li>
   *                <p>Agents: 100</p>
   *             </li>
   *             <li>
   *                <p>Contact states: 9</p>
   *             </li>
   *             <li>
   *                <p>User hierarchy groups: 1</p>
   *             </li>
   *          </ul>
   *          <p> The user data is retrieved for only the specified values/resources in the filter. A maximum
   *    of one filter can be passed from queues, routing profiles, agents, and user hierarchy groups. </p>
   *          <p>Currently tagging is only supported on the resources that are passed in the filter.</p>
   */
  Filters: UserDataFilters | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about the hierarchy group.</p>
 */
export interface HierarchyGroupSummaryReference {
  /**
   * @public
   * <p>The unique identifier for the hierarchy group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the hierarchy group. </p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Information about the levels in the hierarchy group.</p>
 */
export interface HierarchyPathReference {
  /**
   * @public
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummaryReference;
}

/**
 * @public
 * <p>Information about the user.</p>
 */
export interface UserReference {
  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Data for a user.</p>
 */
export interface UserData {
  /**
   * @public
   * <p>Information about the user for the data that is returned. It contains the
   *     <code>resourceId</code> and ARN of the user. </p>
   */
  User?: UserReference;

  /**
   * @public
   * <p>Information about the routing profile that is assigned to the user.</p>
   */
  RoutingProfile?: RoutingProfileReference;

  /**
   * @public
   * <p>Contains information about the levels of a hierarchy group assigned to a user.</p>
   */
  HierarchyPath?: HierarchyPathReference;

  /**
   * @public
   * <p>The status of the agent that they manually set in their Contact Control Panel (CCP), or that
   *    the supervisor manually changes in the real-time metrics report.</p>
   */
  Status?: AgentStatusReference;

  /**
   * @public
   * <p>A map of available slots by channel. The key is a channel name. The value is an integer: the
   *    available number of slots. </p>
   */
  AvailableSlotsByChannel?: Partial<Record<Channel, number>>;

  /**
   * @public
   * <p>A map of maximum slots by channel. The key is a channel name. The value is an integer: the
   *    maximum number of slots. This is calculated from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html">MediaConcurrency</a> of the
   *     <code>RoutingProfile</code> assigned to the agent. </p>
   */
  MaxSlotsByChannel?: Partial<Record<Channel, number>>;

  /**
   * @public
   * <p> A map of active slots by channel. The key is a channel name. The value is an integer: the
   *    number of active slots. </p>
   */
  ActiveSlotsByChannel?: Partial<Record<Channel, number>>;

  /**
   * @public
   * <p>A list of contact reference information.</p>
   */
  Contacts?: AgentContactReference[];

  /**
   * @public
   * <p>The Next status of the agent.</p>
   */
  NextStatus?: string;
}

/**
 * @public
 */
export interface GetCurrentUserDataResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of the user data that is returned.</p>
   */
  UserDataList?: UserData[];

  /**
   * @public
   * <p>The total count of the result, regardless of the current page size.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface GetFederationTokenRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains credentials to use for federation.</p>
 */
export interface Credentials {
  /**
   * @public
   * <p>An access token generated for a federated user to access Amazon Connect.</p>
   */
  AccessToken?: string;

  /**
   * @public
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect.</p>
   */
  AccessTokenExpiration?: Date;

  /**
   * @public
   * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
   */
  RefreshToken?: string;

  /**
   * @public
   * <p>Renews the expiration timer for a generated token.</p>
   */
  RefreshTokenExpiration?: Date;
}

/**
 * @public
 */
export interface GetFederationTokenResponse {
  /**
   * @public
   * <p>The credentials to use for federation.</p>
   */
  Credentials?: Credentials;

  /**
   * @public
   * <p>The URL to sign into the user's instance. </p>
   */
  SignInUrl?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  UserArn?: string;

  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId?: string;
}

/**
 * @public
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 */
export class UserNotFoundException extends __BaseException {
  readonly name: "UserNotFoundException" = "UserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundException, __BaseException>) {
    super({
      name: "UserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetFlowAssociationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface GetFlowAssociationResponse {
  /**
   * @public
   * <p>The identifier of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  FlowId?: string;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType?: FlowAssociationResourceType;
}

/**
 * @public
 * @enum
 */
export const HistoricalMetricName = {
  ABANDON_TIME: "ABANDON_TIME",
  AFTER_CONTACT_WORK_TIME: "AFTER_CONTACT_WORK_TIME",
  API_CONTACTS_HANDLED: "API_CONTACTS_HANDLED",
  CALLBACK_CONTACTS_HANDLED: "CALLBACK_CONTACTS_HANDLED",
  CONTACTS_ABANDONED: "CONTACTS_ABANDONED",
  CONTACTS_AGENT_HUNG_UP_FIRST: "CONTACTS_AGENT_HUNG_UP_FIRST",
  CONTACTS_CONSULTED: "CONTACTS_CONSULTED",
  CONTACTS_HANDLED: "CONTACTS_HANDLED",
  CONTACTS_HANDLED_INCOMING: "CONTACTS_HANDLED_INCOMING",
  CONTACTS_HANDLED_OUTBOUND: "CONTACTS_HANDLED_OUTBOUND",
  CONTACTS_HOLD_ABANDONS: "CONTACTS_HOLD_ABANDONS",
  CONTACTS_MISSED: "CONTACTS_MISSED",
  CONTACTS_QUEUED: "CONTACTS_QUEUED",
  CONTACTS_TRANSFERRED_IN: "CONTACTS_TRANSFERRED_IN",
  CONTACTS_TRANSFERRED_IN_FROM_QUEUE: "CONTACTS_TRANSFERRED_IN_FROM_QUEUE",
  CONTACTS_TRANSFERRED_OUT: "CONTACTS_TRANSFERRED_OUT",
  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE: "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE",
  HANDLE_TIME: "HANDLE_TIME",
  HOLD_TIME: "HOLD_TIME",
  INTERACTION_AND_HOLD_TIME: "INTERACTION_AND_HOLD_TIME",
  INTERACTION_TIME: "INTERACTION_TIME",
  OCCUPANCY: "OCCUPANCY",
  QUEUED_TIME: "QUEUED_TIME",
  QUEUE_ANSWER_TIME: "QUEUE_ANSWER_TIME",
  SERVICE_LEVEL: "SERVICE_LEVEL",
} as const;

/**
 * @public
 */
export type HistoricalMetricName = (typeof HistoricalMetricName)[keyof typeof HistoricalMetricName];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVG: "AVG",
  MAX: "MAX",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const Comparison = {
  LT: "LT",
} as const;

/**
 * @public
 */
export type Comparison = (typeof Comparison)[keyof typeof Comparison];

/**
 * @public
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface Threshold {
  /**
   * @public
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   */
  Comparison?: Comparison;

  /**
   * @public
   * <p>The threshold value to compare.</p>
   */
  ThresholdValue?: number;
}

/**
 * @public
 * <p>Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export interface HistoricalMetric {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  Name?: HistoricalMetricName;

  /**
   * @public
   * <p>The threshold for the metric, used with service level metrics.</p>
   */
  Threshold?: Threshold;

  /**
   * @public
   * <p>The statistic for the metric.</p>
   */
  Statistic?: Statistic;

  /**
   * @public
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit;
}

/**
 * @public
 */
export interface GetMetricDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
   *    such as 10:05, 10:10, 10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
   *    metrics are available only for 24 hours.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using an interval of 5 minutes,
   *    such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
   *    retrieved only for the resources associated with the queues or channels included in the filter.
   *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to
   *    GetMetricDataV2 for more up-to-date features.</p>
   *          <note>
   *             <p>To filter by <code>Queues</code>, enter the queue
   *     ID/ARN, not the name of the queue.</p>
   *          </note>
   */
  Filters: Filters | undefined;

  /**
   * @public
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by
   *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
   *    each queue rather than aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to
   *    GetMetricDataV2 for more up-to-date features.</p>
   */
  Groupings?: Grouping[];

  /**
   * @public
   * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   *          <note>
   *             <p>This API does not support a contacts
   *     incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list). </p>
   *          </note>
   *          <dl>
   *             <dt>ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>API_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_CONSULTED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_INCOMING</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_MISSED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: MAX</p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *             </dd>
   *          </dl>
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the data for a historical metric.</p>
 */
export interface HistoricalMetricData {
  /**
   * @public
   * <p>Information about the metric.</p>
   */
  Metric?: HistoricalMetric;

  /**
   * @public
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Contains information about the historical metrics retrieved.</p>
 */
export interface HistoricalMetricResult {
  /**
   * @public
   * <p>The dimension for the metrics.</p>
   */
  Dimensions?: Dimensions;

  /**
   * @public
   * <p>The set of metrics.</p>
   */
  Collections?: HistoricalMetricData[];
}

/**
 * @public
 */
export interface GetMetricDataResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   */
  MetricResults?: HistoricalMetricResult[];
}

/**
 * @public
 * <p>Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API.</p>
 */
export interface FilterV2 {
  /**
   * @public
   * <p>The key to use for filtering data. For example, <code>QUEUE</code>, <code>ROUTING_PROFILE,
   *     AGENT</code>, <code>CHANNEL</code>, <code>AGENT_HIERARCHY_LEVEL_ONE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code>, <code>AGENT_HIERARCHY_LEVEL_THREE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code>, <code>AGENT_HIERARCHY_LEVEL_FIVE</code>. There must be
   *    at least 1 key and a maximum 5 keys. </p>
   */
  FilterKey?: string;

  /**
   * @public
   * <p>The identifiers to use for filtering data. For example, if you have a filter key of
   *     <code>QUEUE</code>, you would add queue IDs or ARNs in <code>FilterValues</code>. </p>
   */
  FilterValues?: string[];
}

/**
 * @public
 * @enum
 */
export const IntervalPeriod = {
  DAY: "DAY",
  FIFTEEN_MIN: "FIFTEEN_MIN",
  HOUR: "HOUR",
  THIRTY_MIN: "THIRTY_MIN",
  TOTAL: "TOTAL",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type IntervalPeriod = (typeof IntervalPeriod)[keyof typeof IntervalPeriod];

/**
 * @public
 * <p>Information about the interval period to use for returning results.</p>
 */
export interface IntervalDetails {
  /**
   * @public
   * <p>The timezone applied to requested metrics.</p>
   */
  TimeZone?: string;

  /**
   * @public
   * <p>
   *             <code>IntervalPeriod</code>: An aggregated grouping applied to request metrics. Valid
   *     <code>IntervalPeriod</code> values are: <code>FIFTEEN_MIN</code> | <code>THIRTY_MIN</code> |
   *     <code>HOUR</code> | <code>DAY</code> | <code>WEEK</code> | <code>TOTAL</code>. </p>
   *          <p>For example, if <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *     <code>StartTime</code> and <code>EndTime</code> differs by 1 day, then Amazon Connect
   *    returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By
   *    default Amazon Connect aggregates results based on the <code>TOTAL</code> interval period. </p>
   *          <p>The following list describes restrictions on <code>StartTime</code> and <code>EndTime</code>
   *    based on what <code>IntervalPeriod</code> is requested. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FIFTEEN_MIN</code>: The difference between <code>StartTime</code> and
   *       <code>EndTime</code> must be less than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIRTY_MIN</code>: The difference between <code>StartTime</code> and
   *       <code>EndTime</code> must be less than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOUR</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAY</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 35 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEK</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 35 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 35 days.</p>
   *             </li>
   *          </ul>
   */
  IntervalPeriod?: IntervalPeriod;
}

/**
 * @public
 * <p>Contains information about the filter used when retrieving metrics.
 *     <code>MetricFiltersV2</code> can be used on the following metrics:
 *     <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>,
 *     <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>.</p>
 */
export interface MetricFilterV2 {
  /**
   * @public
   * <p>The key to use for filtering data. </p>
   *          <p>Valid metric filter keys: <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code>.
   *    These are the same values as the <code>InitiationMethod</code> and <code>DisconnectReason</code>
   *    in the contact record. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord">ContactTraceRecord</a> in the <i>Amazon Connect Administrator's
   *    Guide</i>. </p>
   */
  MetricFilterKey?: string;

  /**
   * @public
   * <p>The values to use for filtering data. </p>
   *          <p>Valid metric filter values for <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *     <code>OUTBOUND</code> | <code>TRANSFER</code> | <code>QUEUE_TRANSFER</code> |
   *     <code>CALLBACK</code> | <code>API</code>
   *          </p>
   *          <p>Valid metric filter values for <code>DISCONNECT_REASON</code>:
   *     <code>CUSTOMER_DISCONNECT</code> | <code>AGENT_DISCONNECT</code> |
   *     <code>THIRD_PARTY_DISCONNECT</code> | <code>TELECOM_PROBLEM</code> | <code>BARGED</code> |
   *     <code>CONTACT_FLOW_DISCONNECT</code> | <code>OTHER</code> | <code>EXPIRED</code> |
   *     <code>API</code>
   *          </p>
   */
  MetricFilterValues?: string[];

  /**
   * @public
   * <p>The flag to use to filter on requested metric filter values or to not filter on requested
   *    metric filter values. By default the negate is <code>false</code>, which indicates to filter on
   *    the requested metric filter. </p>
   */
  Negate?: boolean;
}

/**
 * @public
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface ThresholdV2 {
  /**
   * @public
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   */
  Comparison?: string;

  /**
   * @public
   * <p>The threshold value to compare.</p>
   */
  ThresholdValue?: number;
}

/**
 * @public
 * <p>Contains information about the metric.</p>
 */
export interface MetricV2 {
  /**
   * @public
   * <p>The name of the metric.</p>
   *          <important>
   *             <p>This parameter is required. The following Required = No is incorrect.</p>
   *          </important>
   */
  Name?: string;

  /**
   * @public
   * <p>Contains information about the threshold for service level metrics.</p>
   */
  Threshold?: ThresholdV2[];

  /**
   * @public
   * <p>Contains the filters to be used when returning data.</p>
   */
  MetricFilters?: MetricFilterV2[];
}

/**
 * @public
 */
export interface GetMetricDataV2Request {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect
   *    instance.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be before the end time timestamp. The start
   *    and end time depends on the <code>IntervalPeriod</code> selected. By default the time range
   *    between start and end time is 35 days. Historical metrics are available for 3 months.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be later than the start time timestamp. It
   *    cannot be later than the current timestamp.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The interval period and timezone to apply to returned metrics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IntervalPeriod</code>: An aggregated grouping applied to request metrics. Valid
   *       <code>IntervalPeriod</code> values are: <code>FIFTEEN_MIN</code> | <code>THIRTY_MIN</code> |
   *       <code>HOUR</code> | <code>DAY</code> | <code>WEEK</code> | <code>TOTAL</code>. </p>
   *                <p>For example, if <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *       <code>StartTime</code> and <code>EndTime</code> differs by 1 day, then Amazon Connect
   *      returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By
   *      default Amazon Connect aggregates results based on the <code>TOTAL</code> interval period. </p>
   *                <p>The following list describes restrictions on <code>StartTime</code> and
   *       <code>EndTime</code> based on which <code>IntervalPeriod</code> is requested. </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>FIFTEEN_MIN</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>THIRTY_MIN</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>HOUR</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DAY</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *        must be less than 35 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WEEK</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 35 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TOTAL</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 35 days.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TimeZone</code>: The timezone applied to requested metrics.</p>
   *             </li>
   *          </ul>
   */
  Interval?: IntervalDetails;

  /**
   * @public
   * <p>The filters to apply to returned metrics. You can filter on the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>Queues</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles</p>
   *             </li>
   *             <li>
   *                <p>Agents</p>
   *             </li>
   *             <li>
   *                <p>Channels</p>
   *             </li>
   *             <li>
   *                <p>User hierarchy groups</p>
   *             </li>
   *             <li>
   *                <p>Feature</p>
   *             </li>
   *             <li>
   *                <p>Routing step expression</p>
   *             </li>
   *          </ul>
   *          <p>At least one filter must be passed from queues, routing profiles, agents, or user hierarchy
   *    groups.</p>
   *          <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical
   *     metrics report</a> in the <i>Amazon Connect Administrator's
   *    Guide</i>.</p>
   *          <p>Note the following limits:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Filter keys</b>: A maximum of 5 filter keys are supported in
   *      a single request. Valid filter keys: <code>QUEUE</code> | <code>ROUTING_PROFILE</code> |
   *       <code>AGENT</code> | <code>CHANNEL</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> |
   *      <code>FEATURE</code> | <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> | <code>contact/segmentAttributes/connect:Subtype</code> |
   *       <code>ROUTING_STEP_EXPRESSION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Filter values</b>: A maximum of 100 filter values are
   *      supported in a single request. VOICE, CHAT, and TASK are valid <code>filterValue</code> for the
   *      CHANNEL filter key. They do not count towards limitation of 100 filter values. For example, a
   *      GetMetricDataV2 request can filter by 50 queues, 35 agents, and 15 routing profiles for a total
   *      of 100 filter values, along with 3 channel filters. </p>
   *                <p>
   *                   <code>contact_lens_conversational_analytics</code> is a valid filterValue for the
   *       <code>FEATURE</code> filter key. It is available only to contacts analyzed by Contact Lens
   *      conversational analytics.</p>
   *                <p>
   *                   <code>connect:Chat</code>, <code>connect:SMS</code>, <code>connect:Telephony</code>, and
   *       <code>connect:WebRTC</code> are valid <code>filterValue</code> examples (not exhaustive) for
   *      the <code>contact/segmentAttributes/connect:Subtype filter</code> key.</p>
   *                <p>
   *                   <code>ROUTING_STEP_EXPRESSION</code> is a valid filter key with a filter value up to 3000
   *      length. This filter is case and order sensitive. JSON string fields must be sorted in ascending
   *      order and JSON array order should be kept as is.</p>
   *             </li>
   *          </ul>
   */
  Filters: FilterV2[] | undefined;

  /**
   * @public
   * <p>The grouping applied to the metrics that are returned. For example, when results are grouped
   *    by queue, the metrics returned are grouped by queue. The values that are returned apply to the
   *    metrics for each queue. They are not aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of all metrics is returned.</p>
   *          <p>Valid grouping keys: <code>QUEUE</code> | <code>ROUTING_PROFILE</code> | <code>AGENT</code>
   *    | <code>CHANNEL</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *    <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> |
   *    <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> |
   *     <code>contact/segmentAttributes/connect:Subtype</code> |
   *    <code>ROUTING_STEP_EXPRESSION</code>
   *          </p>
   */
  Groupings?: string[];

  /**
   * @public
   * <p>The metrics to retrieve. Specify the name, groupings, and filters for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator's
   *     Guide</i>.</p>
   *          <dl>
   *             <dt>ABANDONMENT_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#abandonment-rate-historical">Abandonment rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#adherent-time-historical">Adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ANSWER_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-answer-rate-historical">Agent answer rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#non-adherent-time">Non-adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-non-response">Agent non-response</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE_WITHOUT_CUSTOMER_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>Data for this metric is available starting from October 1, 2023 0:00:00 GMT.</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-nonresponse-no-abandon-historical">Agent non-response without customer abandons</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#occupancy-historical">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULE_ADHERENCE</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#adherence-historical">Adherence</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULED_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#scheduled-time-historical">Scheduled time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-queue-abandon-time-historical">Average queue abandon time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ACTIVE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-active-time-historical">Average active time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-acw-time-historical">Average after contact work time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_CONNECTING_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only
   *       supports the following as <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *        <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#htm-avg-agent-api-connecting-time">Average agent API connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in Metric Level Filters is not applicable for this
   *        metric.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_PAUSE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-agent-pause-time-historical">Average agent pause time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RELATED_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-contacts-case-historical">Average contacts per case</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-case-resolution-time-historical">Average case resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONTACT_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-contact-duration-historical">Average contact duration</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_CONVERSATION_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-conversation-duration-historical">Average conversation duration</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_GREETING_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-greeting-time-agent-historical">Average greeting time agent </a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-handle-time-historical">Average handle time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-customer-hold-time-historical">Average customer hold time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME_ALL_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#avg-customer-hold-time-all-contacts-historical">Average customer hold time all contacts</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLDS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-holds-historical">Average holds</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-agent-interaction-customer-hold-time-historical">Average agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-agent-interaction-time-historical">Average agent interaction time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERRUPTIONS_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-interruptions-agent-historical">Average interruptions agent </a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERRUPTION_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-interruptions-time-agent-historical">Average interruption time agent</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html##average-non-talk-time-historical">Average non-talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-queue-answer-time-historical">Average queue answer time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-resolution-time-historical">Average resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-talk-time-historical">Average talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-talk-time-agent-historical">Average talk time agent</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-talk-time-customer-historical">Average talk time customer</a>
   *                </p>
   *             </dd>
   *             <dt>CASES_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html##cases-created-historical">Cases created</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-abandoned-historical">Contact abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-created-historical">Contacts created</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>,
   *       <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#api-contacts-handled-historical">API contacts handled</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_BY_CONNECTED_TO_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-handled-by-connected-to-agent-historical">Contacts handled by Connected to agent</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-handled-by-connected-to-agent-historical">Contacts hold disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_AGENT_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-hold-agent-disconnect-historical">Contacts hold agent disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_CUSTOMER_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-hold-customer-disconnect-historical">Contacts hold customer disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_PUT_ON_HOLD</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-hold-customer-disconnect-historical">Contacts put on hold</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_EXTERNAL</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-external-historical">Contacts transferred out external</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_INTERNAL</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-internal-historical">Contacts transferred out internal</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-queued-historical">Contacts queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED_BY_ENQUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-queued-by-enqueue-historical">Contacts queued by Enqueue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_RESOLVED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>Threshold: For <code>ThresholdValue</code> enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than").</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-resolved-historical">Contacts resolved in X</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-historical">Contacts transferred out</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-by-agent-historical">Contacts transferred out by agent</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-by-agent-historical">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>CURRENT_CASES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#current-cases-historical">Current cases</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#maximum-queued-time-historical">Maximum queued time</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CASES_FIRST_CONTACT_RESOLVED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-resolved-first-contact-historical">Cases resolved on first contact</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_EXPIRED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name:  Not available </p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_JOINED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name:  Not available </p>
   *             </dd>
   *             <dt>PERCENT_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#ntt-historical">Non-talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#tt-historical">Talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#ttagent-historical">Talk time agent percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#ttcustomer-historical">Talk time customer percent</a>
   *                </p>
   *             </dd>
   *             <dt>REOPENED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-reopened-historical">Cases reopened</a>
   *                </p>
   *             </dd>
   *             <dt>RESOLVED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-resolved-historicall">Cases resolved</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#service-level-historical">Service level X</a>
   *                </p>
   *             </dd>
   *             <dt>STEP_CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name:  Not available</p>
   *             </dd>
   *             <dt>SUM_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#acw-historical">After contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONNECTING_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. This metric only supports the
   *       following filter keys as <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *        <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#htm-agent-api-connecting-time">Agent API connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in Metric Level Filters is not applicable for this
   *        metric.</p>
   *                </note>
   *             </dd>
   *             <dt>SUM_CONTACT_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contact-flow-time-historical">Contact flow time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-on-contact-time-historical">Agent on contact time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ANSWERED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-answered-x-historical">Contacts answered in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ABANDONED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-abandoned-x-historical">Contacts abandoned in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_DISCONNECTED </dt>
   *             <dd>
   *                <p>Valid metric filter key: <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contact-disconnected-historical">Contact disconnected</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ERROR_STATUS_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#error-status-time-historical">Error status time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contact-handle-time-historical">Contact handle time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#customer-hold-time-historical">Customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_IDLE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-idle-time-historica">Agent idle time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-interaction-hold-time-historical">Agent interaction and hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-interaction-time-historical">Agent interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_NON_PRODUCTIVE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#npt-historical">Non-Productive Time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ONLINE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#online-time-historical">Online time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name:  <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#callback-attempts-historical">Callback attempts</a>
   *                </p>
   *             </dd>
   *          </dl>
   */
  Metrics: MetricV2[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the name, thresholds, and metric filters.</p>
 */
export interface MetricDataV2 {
  /**
   * @public
   * <p>The metric name, thresholds, and metric filters of the returned metric.</p>
   */
  Metric?: MetricV2;

  /**
   * @public
   * <p>The corresponding value of the metric returned in the response.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>The interval period with the start and end time for the metrics.</p>
 */
export interface MetricInterval {
  /**
   * @public
   * <p>The interval period provided in the API request. </p>
   */
  Interval?: IntervalPeriod;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format. Start time is based on the interval period
   *    selected. </p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format. End time is based on the interval period selected.
   *    For example, If <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *     <code>StartTime</code> and <code>EndTime</code> in the API request differs by 1 day, then 48
   *    results are returned in the response. Each result is aggregated by the 30 minutes period, with
   *    each <code>StartTime</code> and <code>EndTime</code> differing by 30 minutes. </p>
   */
  EndTime?: Date;
}

/**
 * @public
 * <p>Contains information about the metric results.</p>
 */
export interface MetricResultV2 {
  /**
   * @public
   * <p>The dimension for the metrics.</p>
   */
  Dimensions?: Record<string, string>;

  /**
   * @public
   * <p>The interval period with the start and end time for the metrics.</p>
   */
  MetricInterval?: MetricInterval;

  /**
   * @public
   * <p>The set of metrics.</p>
   */
  Collections?: MetricDataV2[];
}

/**
 * @public
 */
export interface GetMetricDataV2Response {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the metrics requested in the API request If no grouping is specified, a
   *    summary of metric data is returned. </p>
   */
  MetricResults?: MetricResultV2[];
}

/**
 * @public
 */
export interface GetPromptFileRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId: string | undefined;
}

/**
 * @public
 */
export interface GetPromptFileResponse {
  /**
   * @public
   * <p>A generated URL to the prompt that can be given to an unauthorized user so they can access
   *    the prompt in S3.</p>
   */
  PromptPresignedUrl?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface GetTaskTemplateRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;

  /**
   * @public
   * <p>The system generated version of a task template that is associated with a task, when the
   *    task is created.</p>
   */
  SnapshotVersion?: string;
}

/**
 * @public
 */
export interface GetTaskTemplateResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   */
  ContactFlowId?: string;

  /**
   * @public
   * <p>Constraints that are applicable to the fields listed.</p>
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * @public
   * <p>The default values for fields when a task is created by referencing this template.</p>
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * @public
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus;

  /**
   * @public
   * <p>The timestamp when the task template was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The timestamp when the task template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetTrafficDistributionRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The distribution of sign in traffic between the instance and its replica(s).</p>
 */
export interface SignInDistribution {
  /**
   * @public
   * <p>The Amazon Web Services Region of the sign in distribution.</p>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>Whether sign in distribution is enabled.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
 *    agents in to both the instance and its replica(s).</p>
 */
export interface SignInConfig {
  /**
   * @public
   * <p>Information about traffic distributions.</p>
   */
  Distributions: SignInDistribution[] | undefined;
}

/**
 * @public
 * <p>The distribution of traffic between the instance and its replicas.</p>
 */
export interface TelephonyConfig {
  /**
   * @public
   * <p>Information about traffic distributions.</p>
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionResponse {
  /**
   * @public
   * <p>The distribution of traffic between the instance and its replicas.</p>
   */
  TelephonyConfig?: TelephonyConfig;

  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
   *    agents in to both the instance and its replica(s).</p>
   */
  SignInConfig?: SignInConfig;

  /**
   * @public
   * <p>The distribution of agents between the instance and its replica(s).</p>
   */
  AgentConfig?: AgentConfig;
}

/**
 * @public
 */
export interface ImportPhoneNumberRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The claimed phone number ARN being imported from the external service, such as Amazon Pinpoint. If it is from Amazon Pinpoint, it looks like the ARN of the phone number to
   *    import from Amazon Pinpoint.</p>
   */
  SourcePhoneNumberArn: string | undefined;

  /**
   * @public
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ImportPhoneNumberResponse {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;
}

/**
 * @public
 */
export interface ListAgentStatusRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Available agent status types.</p>
   */
  AgentStatusTypes?: AgentStatusType[];
}

/**
 * @public
 */
export interface ListAgentStatusResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A summary of agent statuses.</p>
   */
  AgentStatusSummaryList?: AgentStatusSummary[];
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the dataset to get the association status.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsResponse {
  /**
   * @public
   * <p>An array of successful results: <code>DataSetId</code>, <code>TargetAccountId</code>,
   *     <code>ResourceShareId</code>, <code>ResourceShareArn</code>. This is a paginated API, so
   *     <code>nextToken</code> is given if there are more results to be returned.</p>
   */
  Results?: AnalyticsDataAssociationResult[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApprovedOriginsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListApprovedOriginsResponse {
  /**
   * @public
   * <p>The approved origins.</p>
   */
  Origins?: string[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const LexVersion = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type LexVersion = (typeof LexVersion)[keyof typeof LexVersion];

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The version of Amazon Lex or Amazon Lex V2.</p>
   */
  LexVersion: LexVersion | undefined;
}

/**
 * @public
 * <p>Configuration information of an Amazon Lex or Amazon Lex V2 bot.</p>
 */
export interface LexBotConfig {
  /**
   * @public
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * @public
   * <p>Configuration information of an Amazon Lex V2 bot.</p>
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * @public
   * <p>The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots
   *    associated with the specified instance.</p>
   */
  LexBots?: LexBotConfig[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactEvaluationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about a contact evaluation.</p>
 */
export interface EvaluationSummary {
  /**
   * @public
   * <p>A unique identifier for the contact evaluation.</p>
   */
  EvaluationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   */
  EvaluationArn: string | undefined;

  /**
   * @public
   * <p>A title of the evaluation form.</p>
   */
  EvaluationFormTitle: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The status of the contact evaluation.</p>
   */
  Status: EvaluationStatus | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   */
  EvaluatorArn: string | undefined;

  /**
   * @public
   * <p>The overall score of the contact evaluation.</p>
   */
  Score?: EvaluationScore;

  /**
   * @public
   * <p>The timestamp for when the evaluation was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation was last updated.</p>
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListContactEvaluationsResponse {
  /**
   * @public
   * <p>Provides details about a list of contact evaluations belonging to an instance.</p>
   */
  EvaluationSummaryList: EvaluationSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowModulesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The state of the flow module.</p>
   */
  ContactFlowModuleState?: ContactFlowModuleState;
}

/**
 * @public
 * <p>Contains summary information about a flow.</p>
 */
export interface ContactFlowModuleSummary {
  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of flow module.</p>
   */
  State?: ContactFlowModuleState;
}

/**
 * @public
 */
export interface ListContactFlowModulesResponse {
  /**
   * @public
   * <p>Information about the flow module.</p>
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  ContactFlowTypes?: ContactFlowType[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export interface ContactFlowSummary {
  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  ContactFlowType?: ContactFlowType;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  ContactFlowState?: ContactFlowState;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * @public
   * <p>Information about the flows.</p>
   */
  ContactFlowSummaryList?: ContactFlowSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the initial contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The type of reference.</p>
   */
  ReferenceTypes: ReferenceType[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReferenceStatus = {
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ReferenceStatus = (typeof ReferenceStatus)[keyof typeof ReferenceStatus];

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is
 *    <code>ATTACHMENT</code>. Otherwise, null.</p>
 */
export interface AttachmentReference {
  /**
   * @public
   * <p>Identifier of the attachment reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The location path of the attachment reference.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Status of the attachment reference type.</p>
   */
  Status?: ReferenceStatus;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
 *    Otherwise, null.</p>
 */
export interface DateReference {
  /**
   * @public
   * <p>Identifier of the date reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid date.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
 *    Otherwise, null.</p>
 */
export interface EmailReference {
  /**
   * @public
   * <p>Identifier of the email reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid email address.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
 *    Otherwise, null.</p>
 */
export interface NumberReference {
  /**
   * @public
   * <p>Identifier of the number reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid number.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
 *    Otherwise, null.</p>
 */
export interface StringReference {
  /**
   * @public
   * <p>Identifier of the string reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid string.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The URL reference.</p>
 */
export interface UrlReference {
  /**
   * @public
   * <p>Identifier of the URL reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid URL.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains summary information about a reference. <code>ReferenceSummary</code> contains only
 *    one non null field between the URL and attachment based on the reference type.</p>
 */
export type ReferenceSummary =
  | ReferenceSummary.AttachmentMember
  | ReferenceSummary.DateMember
  | ReferenceSummary.EmailMember
  | ReferenceSummary.NumberMember
  | ReferenceSummary.StringMember
  | ReferenceSummary.UrlMember
  | ReferenceSummary.$UnknownMember;

/**
 * @public
 */
export namespace ReferenceSummary {
  /**
   * @public
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null.</p>
   */
  export interface UrlMember {
    Url: UrlReference;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about the reference when the <code>referenceType</code> is
   *     <code>ATTACHMENT</code>. Otherwise, null.</p>
   */
  export interface AttachmentMember {
    Url?: never;
    Attachment: AttachmentReference;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
   *    Otherwise, null.</p>
   */
  export interface StringMember {
    Url?: never;
    Attachment?: never;
    String: StringReference;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
   *    Otherwise, null.</p>
   */
  export interface NumberMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number: NumberReference;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
   *    Otherwise, null.</p>
   */
  export interface DateMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date: DateReference;
    Email?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
   *    Otherwise, null.</p>
   */
  export interface EmailMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email: EmailReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Url: (value: UrlReference) => T;
    Attachment: (value: AttachmentReference) => T;
    String: (value: StringReference) => T;
    Number: (value: NumberReference) => T;
    Date: (value: DateReference) => T;
    Email: (value: EmailReference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReferenceSummary, visitor: Visitor<T>): T => {
    if (value.Url !== undefined) return visitor.Url(value.Url);
    if (value.Attachment !== undefined) return visitor.Attachment(value.Attachment);
    if (value.String !== undefined) return visitor.String(value.String);
    if (value.Number !== undefined) return visitor.Number(value.Number);
    if (value.Date !== undefined) return visitor.Date(value.Date);
    if (value.Email !== undefined) return visitor.Email(value.Email);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ListContactReferencesResponse {
  /**
   * @public
   * <p>Information about the flows.</p>
   */
  ReferenceSummaryList?: ReferenceSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode?: VocabularyLanguageCode;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about a default vocabulary.</p>
 */
export interface DefaultVocabulary {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * @public
   * <p>A unique name of the custom vocabulary.</p>
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * @public
   * <p>A list of default vocabularies.</p>
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEvaluationFormsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about an evaluation form.</p>
 */
export interface EvaluationFormSummary {
  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;

  /**
   * @public
   * <p>A title of the evaluation form.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   */
  CreatedBy: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   */
  LastModifiedBy: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was last activated.</p>
   */
  LastActivatedTime?: Date;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the user who last activated the evaluation form.</p>
   */
  LastActivatedBy?: string;

  /**
   * @public
   * <p>The version number of the latest evaluation form version.</p>
   */
  LatestVersion: number | undefined;

  /**
   * @public
   * <p>The version of the active evaluation form version.</p>
   */
  ActiveVersion?: number;
}

/**
 * @public
 */
export interface ListEvaluationFormsResponse {
  /**
   * @public
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   */
  EvaluationFormSummaryList: EvaluationFormSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about an evaluation form.</p>
 */
export interface EvaluationFormVersionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>A version of the evaluation form.</p>
   */
  EvaluationFormVersion: number | undefined;

  /**
   * @public
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   */
  Locked: boolean | undefined;

  /**
   * @public
   * <p>The status of the evaluation form.</p>
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   */
  CreatedBy: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   */
  LastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsResponse {
  /**
   * @public
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   */
  EvaluationFormVersionSummaryList: EvaluationFormVersionSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFlowAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType?: ListFlowAssociationResourceType;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFlowAssociationsResponse {
  /**
   * @public
   * <p>Summary of flow associations.</p>
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about hours of operation for a contact center.</p>
 */
export interface HoursOfOperationSummary {
  /**
   * @public
   * <p>The identifier of the hours of operation.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * @public
   * <p>Information about the hours of operation.</p>
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * @public
   * <p>The attribute types.</p>
   */
  Attributes?: Attribute[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about the instance.</p>
 */
export interface InstanceSummary {
  /**
   * @public
   * <p>The identifier of the instance.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identity management type of the instance.</p>
   */
  IdentityManagementType?: DirectoryType;

  /**
   * @public
   * <p>The alias of the instance.</p>
   */
  InstanceAlias?: string;

  /**
   * @public
   * <p>When the instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The service role of the instance.</p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>The state of the instance.</p>
   */
  InstanceStatus?: InstanceStatus;

  /**
   * @public
   * <p>Whether inbound calls are enabled.</p>
   */
  InboundCallsEnabled?: boolean;

  /**
   * @public
   * <p>Whether outbound calls are enabled.</p>
   */
  OutboundCallsEnabled?: boolean;

  /**
   * @public
   * <p>This URL allows contact center users to access the Amazon Connect admin website.</p>
   */
  InstanceAccessUrl?: string;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * @public
   * <p>Information about the instances.</p>
   */
  InstanceSummaryList?: InstanceSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * @public
   * <p>A valid storage type.</p>
   */
  StorageConfigs?: InstanceStorageConfig[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   */
  IntegrationArn?: string;
}

/**
 * @public
 * <p>Contains summary information about the associated AppIntegrations.</p>
 */
export interface IntegrationAssociationSummary {
  /**
   * @public
   * <p>The identifier for the AppIntegration association.</p>
   */
  IntegrationAssociationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   */
  IntegrationAssociationArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   */
  IntegrationArn?: string;

  /**
   * @public
   * <p>The URL for the external application.</p>
   */
  SourceApplicationUrl?: string;

  /**
   * @public
   * <p>The user-provided, friendly name for the external application.</p>
   */
  SourceApplicationName?: string;

  /**
   * @public
   * <p>The name of the source.</p>
   */
  SourceType?: SourceType;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * @public
   * <p>The associations.</p>
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * @public
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   */
  LambdaFunctions?: string[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10.
   *    </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * @public
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the
   *    specified instance.</p>
   */
  LexBots?: LexBot[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of phone number.</p>
   *          <note>
   *             <p>We recommend using <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> to
   *     return phone number types. While ListPhoneNumbers returns number types <code>UIFN</code>,
   *      <code>SHARED</code>, <code>THIRD_PARTY_TF</code>, and <code>THIRD_PARTY_DID</code>, it
   *     incorrectly lists them as <code>TOLL_FREE</code> or <code>DID</code>. </p>
   *          </note>
   */
  PhoneNumberTypes?: PhoneNumberType[];

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a phone number for a contact center.</p>
 */
export interface PhoneNumberSummary {
  /**
   * @public
   * <p>The identifier of the phone number.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * @public
   * <p>Information about the phone numbers.</p>
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. If both <code>TargetArn</code> and <code>InstanceId</code> input are not
   *    provided, this API lists numbers claimed to all the Amazon Connect instances belonging to
   *    your account in the same Amazon Web Services Region as the request.</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. If both <code>TargetArn</code> and <code>InstanceId</code> are not
   *    provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in
   *    the same AWS Region as the request.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[];

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: PhoneNumberType[];

  /**
   * @public
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;
}

/**
 * @public
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 */
export interface ListPhoneNumbersSummary {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * @public
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * @public
   * <p>The claimed phone number ARN that was previously imported from the external service, such as
   *     Amazon Pinpoint. If it is from Amazon Pinpoint, it looks like the ARN of the phone number
   *    that was imported from Amazon Pinpoint.</p>
   */
  SourcePhoneNumberArn?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances
   *    or traffic distribution groups.</p>
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[];
}

/**
 * @public
 */
export interface ListPredefinedAttributesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary of a predefined attribute.</p>
 */
export interface PredefinedAttributeSummary {
  /**
   * @public
   * <p>The name of the predefined attribute.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>Last modified region.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListPredefinedAttributesResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Summary of the predefined attributes.</p>
   */
  PredefinedAttributeSummaryList?: PredefinedAttributeSummary[];
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about the prompt.</p>
 */
export interface PromptSummary {
  /**
   * @public
   * <p>The identifier of the prompt.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the prompt.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * @public
   * <p>Information about the prompts.</p>
   */
  PromptSummaryList?: PromptSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a quick connect.</p>
 */
export interface QuickConnectSummary {
  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectType?: QuickConnectType;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 * @enum
 */
export const QueueType = {
  AGENT: "AGENT",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type QueueType = (typeof QueueType)[keyof typeof QueueType];

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of queue.</p>
   */
  QueueTypes?: QueueType[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a queue.</p>
 */
export interface QueueSummary {
  /**
   * @public
   * <p>The identifier of the queue.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of queue.</p>
   */
  QueueType?: QueueType;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * @public
   * <p>Information about the queues.</p>
   */
  QueueSummaryList?: QueueSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectTypes?: QuickConnectType[];
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * @public
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisOutputType = {
  Raw: "Raw",
  Redacted: "Redacted",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisOutputType =
  (typeof RealTimeContactAnalysisOutputType)[keyof typeof RealTimeContactAnalysisOutputType];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSegmentType = {
  Attachments: "Attachments",
  Categories: "Categories",
  Event: "Event",
  Issues: "Issues",
  Transcript: "Transcript",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisSegmentType =
  (typeof RealTimeContactAnalysisSegmentType)[keyof typeof RealTimeContactAnalysisSegmentType];

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Request {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Contact Lens output type to be returned.</p>
   */
  OutputType: RealTimeContactAnalysisOutputType | undefined;

  /**
   * @public
   * <p>Enum with segment types . Each value corresponds to a segment type returned in the segments
   *    list of the API. Each segment type has its own structure. Different channels may have different
   *    sets of supported segment types.</p>
   */
  SegmentTypes: RealTimeContactAnalysisSegmentType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSupportedChannel = {
  CHAT: "CHAT",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisSupportedChannel =
  (typeof RealTimeContactAnalysisSupportedChannel)[keyof typeof RealTimeContactAnalysisSupportedChannel];

/**
 * @public
 * @enum
 */
export const ArtifactStatus = {
  APPROVED: "APPROVED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ArtifactStatus = (typeof ArtifactStatus)[keyof typeof ArtifactStatus];

/**
 * @public
 * <p>Object that describes attached file. </p>
 */
export interface RealTimeContactAnalysisAttachment {
  /**
   * @public
   * <p>A case-sensitive name of the attachment being uploaded. Can be redacted.</p>
   */
  AttachmentName: string | undefined;

  /**
   * @public
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature
   *     specifications</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>A unique identifier for the attachment.</p>
   */
  AttachmentId: string | undefined;

  /**
   * @public
   * <p>Status of the attachment.</p>
   */
  Status?: ArtifactStatus;
}

/**
 * @public
 * <p>Object describing time with which the segment is associated. It can have different
 *    representations of time. Currently supported: absoluteTime</p>
 */
export type RealTimeContactAnalysisTimeData =
  | RealTimeContactAnalysisTimeData.AbsoluteTimeMember
  | RealTimeContactAnalysisTimeData.$UnknownMember;

/**
 * @public
 */
export namespace RealTimeContactAnalysisTimeData {
  /**
   * @public
   * <p>Time represented in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *    2019-11-08T02:41:28.172Z.</p>
   */
  export interface AbsoluteTimeMember {
    AbsoluteTime: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AbsoluteTime?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AbsoluteTime: (value: Date) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RealTimeContactAnalysisTimeData, visitor: Visitor<T>): T => {
    if (value.AbsoluteTime !== undefined) return visitor.AbsoluteTime(value.AbsoluteTime);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Segment containing list of attachments.</p>
 */
export interface RealTimeContactAnalysisSegmentAttachments {
  /**
   * @public
   * <p>The identifier of the segment.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the participant.</p>
   */
  ParticipantId: string | undefined;

  /**
   * @public
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * @public
   * <p>The display name of the participant. Can be redacted. </p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>List of objects describing an individual attachment.</p>
   */
  Attachments: RealTimeContactAnalysisAttachment[] | undefined;

  /**
   * @public
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * @public
 * <p>Begin and end offsets for a part of text.</p>
 */
export interface RealTimeContactAnalysisCharacterInterval {
  /**
   * @public
   * <p>The beginning of the character interval.</p>
   */
  BeginOffsetChar: number | undefined;

  /**
   * @public
   * <p>The end of the character interval.</p>
   */
  EndOffsetChar: number | undefined;
}

/**
 * @public
 * <p>Transcript representation containing Id and list of character intervals that are associated
 *    with analysis data. For example, this object within a
 *     <code>RealTimeContactAnalysisPointOfInterest</code> in <code>Category.MatchedDetails</code>
 *    would have character interval describing part of the text that matched category.</p>
 */
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
  /**
   * @public
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>List of character intervals within transcript content/text.</p>
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval;
}

/**
 * @public
 * <p>The section of the contact transcript segment that category rule was detected.</p>
 */
export interface RealTimeContactAnalysisPointOfInterest {
  /**
   * @public
   * <p>List of the transcript items (segments) that are associated with a given point of interest.
   *   </p>
   */
  TranscriptItems?: RealTimeContactAnalysisTranscriptItemWithCharacterOffsets[];
}

/**
 * @public
 * <p>Provides information about the category rule that was matched.</p>
 */
export interface RealTimeContactAnalysisCategoryDetails {
  /**
   * @public
   * <p>List of PointOfInterest - objects describing a single match of a rule.</p>
   */
  PointsOfInterest: RealTimeContactAnalysisPointOfInterest[] | undefined;
}

/**
 * @public
 * <p>The matched category rules.</p>
 */
export interface RealTimeContactAnalysisSegmentCategories {
  /**
   * @public
   * <p>Map between the name of the matched rule and RealTimeContactAnalysisCategoryDetails.</p>
   */
  MatchedDetails: Record<string, RealTimeContactAnalysisCategoryDetails> | undefined;
}

/**
 * @public
 * <p>Segment type describing a contact event.</p>
 */
export interface RealTimeContactAnalysisSegmentEvent {
  /**
   * @public
   * <p>The identifier of the contact event.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the participant.</p>
   */
  ParticipantId?: string;

  /**
   * @public
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole?: ParticipantRole;

  /**
   * @public
   * <p>The display name of the participant. Can be redacted.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>Type of the event. For example,
   *     <code>application/vnd.amazonaws.connect.event.participant.left</code>.</p>
   */
  EventType: string | undefined;

  /**
   * @public
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * @public
 * <p>Transcript representation containing Id, Content and list of character intervals that are
 *    associated with analysis data. For example, this object within an issue detected would describe
 *    both content that contains identified issue and intervals where that content is taken
 *    from.</p>
 */
export interface RealTimeContactAnalysisTranscriptItemWithContent {
  /**
   * @public
   * <p>Part of the transcript content that contains identified issue. Can be redacted</p>
   */
  Content?: string;

  /**
   * @public
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Begin and end offsets for a part of text.</p>
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval;
}

/**
 * @public
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each turn
 *    in the conversation.</p>
 */
export interface RealTimeContactAnalysisIssueDetected {
  /**
   * @public
   * <p>List of the transcript items (segments) that are associated with a given issue.</p>
   */
  TranscriptItems: RealTimeContactAnalysisTranscriptItemWithContent[] | undefined;
}

/**
 * @public
 * <p>Segment type containing a list of detected issues.</p>
 */
export interface RealTimeContactAnalysisSegmentIssues {
  /**
   * @public
   * <p>List of the issues detected.</p>
   */
  IssuesDetected: RealTimeContactAnalysisIssueDetected[] | undefined;
}

/**
 * @public
 * <p>Object describing redaction applied to the segment.</p>
 */
export interface RealTimeContactAnalysisTranscriptItemRedaction {
  /**
   * @public
   * <p>List of character intervals each describing a part of the text that was redacted. For
   *     <code>OutputType.Raw</code>, part of the original text that contains data that can be redacted.
   *    For <code> OutputType.Redacted</code>, part of the string with redaction tag.</p>
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval[];
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSentimentLabel = {
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisSentimentLabel =
  (typeof RealTimeContactAnalysisSentimentLabel)[keyof typeof RealTimeContactAnalysisSentimentLabel];

/**
 * @public
 * <p>The analyzed transcript segment.</p>
 */
export interface RealTimeContactAnalysisSegmentTranscript {
  /**
   * @public
   * <p>The identifier of the transcript.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the participant.</p>
   */
  ParticipantId: string | undefined;

  /**
   * @public
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * @public
   * <p>The display name of the participant.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The content of the transcript. Can be redacted.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The type of content of the item. For example, <code>text/plain</code>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   */
  Time: RealTimeContactAnalysisTimeData | undefined;

  /**
   * @public
   * <p>Object describing redaction that was applied to the transcript. If transcript has the field
   *    it means part of the transcript was redacted.</p>
   */
  Redaction?: RealTimeContactAnalysisTranscriptItemRedaction;

  /**
   * @public
   * <p>The sentiment detected for this piece of transcript.</p>
   */
  Sentiment?: RealTimeContactAnalysisSentimentLabel;
}

/**
 * @public
 * <p>An analyzed segment for a real-time analysis session.</p>
 */
export type RealtimeContactAnalysisSegment =
  | RealtimeContactAnalysisSegment.AttachmentsMember
  | RealtimeContactAnalysisSegment.CategoriesMember
  | RealtimeContactAnalysisSegment.EventMember
  | RealtimeContactAnalysisSegment.IssuesMember
  | RealtimeContactAnalysisSegment.TranscriptMember
  | RealtimeContactAnalysisSegment.$UnknownMember;

/**
 * @public
 */
export namespace RealtimeContactAnalysisSegment {
  /**
   * @public
   * <p>The analyzed transcript segment.</p>
   */
  export interface TranscriptMember {
    Transcript: RealTimeContactAnalysisSegmentTranscript;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The matched category rules.</p>
   */
  export interface CategoriesMember {
    Transcript?: never;
    Categories: RealTimeContactAnalysisSegmentCategories;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Segment type containing a list of detected issues.</p>
   */
  export interface IssuesMember {
    Transcript?: never;
    Categories?: never;
    Issues: RealTimeContactAnalysisSegmentIssues;
    Event?: never;
    Attachments?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Segment type describing a contact event.</p>
   */
  export interface EventMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event: RealTimeContactAnalysisSegmentEvent;
    Attachments?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The analyzed attachments.</p>
   */
  export interface AttachmentsMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments: RealTimeContactAnalysisSegmentAttachments;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Transcript: (value: RealTimeContactAnalysisSegmentTranscript) => T;
    Categories: (value: RealTimeContactAnalysisSegmentCategories) => T;
    Issues: (value: RealTimeContactAnalysisSegmentIssues) => T;
    Event: (value: RealTimeContactAnalysisSegmentEvent) => T;
    Attachments: (value: RealTimeContactAnalysisSegmentAttachments) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RealtimeContactAnalysisSegment, visitor: Visitor<T>): T => {
    if (value.Transcript !== undefined) return visitor.Transcript(value.Transcript);
    if (value.Categories !== undefined) return visitor.Categories(value.Categories);
    if (value.Issues !== undefined) return visitor.Issues(value.Issues);
    if (value.Event !== undefined) return visitor.Event(value.Event);
    if (value.Attachments !== undefined) return visitor.Attachments(value.Attachments);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisStatus =
  (typeof RealTimeContactAnalysisStatus)[keyof typeof RealTimeContactAnalysisStatus];

/**
 * @public
 */
export interface ListRealtimeContactAnalysisSegmentsV2Response {
  /**
   * @public
   * <p>The channel of the contact. <code>Voice</code> will not be returned. </p>
   */
  Channel: RealTimeContactAnalysisSupportedChannel | undefined;

  /**
   * @public
   * <p>Status of real-time contact analysis.</p>
   */
  Status: RealTimeContactAnalysisStatus | undefined;

  /**
   * @public
   * <p>An analyzed transcript or category.</p>
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Thrown for analyzed content when requested OutputType was not enabled for a given contact.
 *    For example, if an OutputType.Raw was requested for a contact that had `RedactedOnly` Redaction
 *    policy set in Contact flow.</p>
 */
export class OutputTypeNotFoundException extends __BaseException {
  readonly name: "OutputTypeNotFoundException" = "OutputTypeNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutputTypeNotFoundException, __BaseException>) {
    super({
      name: "OutputTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutputTypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a routing profile queue.</p>
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  QueueArn: string | undefined;

  /**
   * @public
   * <p>The name of the queue.</p>
   */
  QueueName: string | undefined;

  /**
   * @public
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  Delay: number | undefined;

  /**
   * @public
   * <p>The channels this queue supports.</p>
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a routing profile.</p>
 */
export interface RoutingProfileSummary {
  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the routing profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * @public
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus?: RulePublishStatus;

  /**
   * @public
   * <p>The name of the event source.</p>
   */
  EventSourceName?: EventSourceName;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A list of <code>ActionTypes</code> associated with a rule. </p>
 */
export interface RuleSummary {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * @public
   * <p>The name of the event source.</p>
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * @public
   * <p>A list of ActionTypes associated with a rule. </p>
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * @public
   * <p>The timestamp for when the rule was created. </p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the rule was last updated.</p>
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * @public
   * <p>Summary information about a rule.</p>
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Configuration information of the security key.</p>
 */
export interface SecurityKey {
  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The key of the security key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>When the security key was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * @public
   * <p>The security keys.</p>
   */
  SecurityKeys?: SecurityKey[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsRequest {
  /**
   * @public
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsResponse {
  /**
   * @public
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>A list of the third-party application's metadata.</p>
   */
  Applications?: Application[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
  /**
   * @public
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * @public
   * <p>The permissions granted to the security profile. For a complete list of valid permissions,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List
   *     of security profile permissions</a>.</p>
   */
  Permissions?: string[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfileSummary {
  /**
   * @public
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the security profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * @public
   * <p>Information about the security profiles.</p>
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing
   *    profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains summary information about the task template.</p>
 */
export interface TaskTemplateMetadata {
  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus;

  /**
   * @public
   * <p>The timestamp when the task template was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The timestamp when the task template was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListTaskTemplatesResponse {
  /**
   * @public
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   */
  TaskTemplates?: TaskTemplateMetadata[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Information about traffic distribution groups.</p>
 */
export interface TrafficDistributionGroupSummary {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the traffic distribution group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  InstanceArn?: string;

  /**
   * @public
   * <p>The status of the traffic distribution group. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETION_FAILED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistributionGroup.html">UpdateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *          </ul>
   */
  Status?: TrafficDistributionGroupStatus;

  /**
   * @public
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of traffic distribution groups.</p>
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[];
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about a traffic distribution group user.</p>
 */
export interface TrafficDistributionGroupUserSummary {
  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of traffic distribution group users.</p>
   */
  TrafficDistributionGroupUserSummaryList?: TrafficDistributionGroupUserSummary[];
}

/**
 * @public
 * <p>Provides summary information about the use cases for the specified integration
 *    association.</p>
 */
export interface ListUseCasesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the
 *    use
 *    case.</p>
 */
export interface UseCase {
  /**
   * @public
   * <p>The identifier for the use case.</p>
   */
  UseCaseId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   */
  UseCaseArn?: string;

  /**
   * @public
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   */
  UseCaseType?: UseCaseType;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * @public
   * <p>The use cases.</p>
   */
  UseCaseSummaryList?: UseCase[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * @public
   * <p>Information about the hierarchy groups.</p>
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserProficienciesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserProficienciesResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the user proficiencies.</p>
   */
  UserProficiencyList?: UserProficiency[];

  /**
   * @public
   * <p>The last time that the user's proficiencies are were modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The region in which a user's proficiencies were last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a user.</p>
 */
export interface UserSummary {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Connect user name of the user account.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The timestamp when this resource was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * @public
   * <p>Information about the users.</p>
   */
  UserSummaryList?: UserSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListViewsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of the view.</p>
   */
  Type?: ViewType;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of a view's metadata.</p>
 */
export interface ViewSummary {
  /**
   * @public
   * <p>The identifier of the view.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the view.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the view.</p>
   */
  Type?: ViewType;

  /**
   * @public
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
   */
  Status?: ViewStatus;

  /**
   * @public
   * <p>The description of the view.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListViewsResponse {
  /**
   * @public
   * <p>A list of view summaries.</p>
   */
  ViewsSummaryList?: ViewSummary[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListViewVersionsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   */
  ViewId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of a view version's metadata.</p>
 */
export interface ViewVersionSummary {
  /**
   * @public
   * <p>The identifier of the view version.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the view version.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The description of the view version.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the view version.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the view version.</p>
   */
  Type?: ViewType;

  /**
   * @public
   * <p>The sequentially incremented version of the view version.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The description of the view version.</p>
   */
  VersionDescription?: string;
}

/**
 * @public
 */
export interface ListViewVersionsResponse {
  /**
   * @public
   * <p>A list of view version summaries.</p>
   */
  ViewVersionSummaryList?: ViewVersionSummary[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user
   *    is allowed to escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if
   *    barge is enabled.</p>
   */
  AllowedMonitorCapabilities?: MonitorCapability[];

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface MonitorContactResponse {
  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId?: string;

  /**
   * @public
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;
}

/**
 * @public
 * <p>Operation cannot be performed at this time as there is a conflict with another operation or
 *    contact state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export interface PauseContactRequest {
  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId?: string;
}

/**
 * @public
 */
export interface PauseContactResponse {}

/**
 * @public
 */
export interface PutUserStatusRequest {
  /**
   * @public
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface PutUserStatusResponse {}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ReplicateInstanceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region where to replicate the Amazon Connect instance.</p>
   */
  ReplicaRegion: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.</p>
   */
  ReplicaAlias: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * @public
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the
   *    ARN of the instance. The replicated instance has the same identifier as the instance it was
   *    replicated from.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicated instance.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ResumeContactRequest {
  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId?: string;
}

/**
 * @public
 */
export interface ResumeContactResponse {}

/**
 * @public
 */
export interface ResumeContactRecordingRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | undefined;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType: PhoneNumberType | undefined;

  /**
   * @public
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about available phone numbers.</p>
 */
export interface AvailableNumberSummary {
  /**
   * @public
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group.</p>
   */
  AvailableNumbersList?: AvailableNumberSummary[];
}

/**
 * @public
 * @enum
 */
export const SearchContactsMatchType = {
  MATCH_ALL: "MATCH_ALL",
  MATCH_ANY: "MATCH_ANY",
} as const;

/**
 * @public
 */
export type SearchContactsMatchType = (typeof SearchContactsMatchType)[keyof typeof SearchContactsMatchType];

/**
 * @public
 * <p>A structure that defines search criteria base on words or phrases, participants in the
 *    Contact Lens conversational analytics transcript.</p>
 */
export interface TranscriptCriteria {
  /**
   * @public
   * <p>The participant role in a transcript</p>
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * @public
   * <p>The words or phrases used to search within a transcript.</p>
   */
  SearchText: string[] | undefined;

  /**
   * @public
   * <p>The match type combining search criteria using multiple search texts in a transcript
   *    criteria.</p>
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * @public
 * <p>A structure that defines search criteria and matching logic to search for contacts by
 *    matching text with transcripts analyzed by Amazon Connect Contact Lens.</p>
 */
export interface Transcript {
  /**
   * @public
   * <p>The list of search criteria based on Contact Lens conversational analytics
   *    transcript.</p>
   */
  Criteria: TranscriptCriteria[] | undefined;

  /**
   * @public
   * <p>The match type combining search criteria using multiple transcript criteria.</p>
   */
  MatchType?: SearchContactsMatchType;
}

/**
 * @public
 * <p>A structure that defines search criteria for contacts using analysis outputs from Amazon
 *    Connect Contact Lens.</p>
 */
export interface ContactAnalysis {
  /**
   * @public
   * <p>Search criteria based on transcript analyzed by Amazon Connect Contact Lens.</p>
   */
  Transcript?: Transcript;
}

/**
 * @public
 * <p>The search criteria based on user-defned contact attribute key and values to search
 *    on.</p>
 */
export interface SearchableContactAttributesCriteria {
  /**
   * @public
   * <p>The key containing a searchable user-defined contact attribute.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The list of values to search for within a user-defined contact attribute.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p>A structure that defines search criteria based on user-defined contact attributes that are
 *    configured for contact search.</p>
 */
export interface SearchableContactAttributes {
  /**
   * @public
   * <p>The list of criteria based on user-defined contact attributes that are configured for
   *    contact search.</p>
   */
  Criteria: SearchableContactAttributesCriteria[] | undefined;

  /**
   * @public
   * <p>The match type combining search criteria using multiple searchable contact
   *    attributes.</p>
   */
  MatchType?: SearchContactsMatchType;
}

/**
 * @public
 * <p>A structure of search criteria to be used to return contacts.</p>
 */
export interface SearchCriteria {
  /**
   * @public
   * <p>The identifiers of agents who handled the contacts.</p>
   */
  AgentIds?: string[];

  /**
   * @public
   * <p>The agent hierarchy groups of the agent at the time of handling the contact.</p>
   */
  AgentHierarchyGroups?: AgentHierarchyGroups;

  /**
   * @public
   * <p>The list of channels associated with contacts.</p>
   */
  Channels?: Channel[];

  /**
   * @public
   * <p>Search criteria based on analysis outputs from Amazon Connect Contact Lens.</p>
   */
  ContactAnalysis?: ContactAnalysis;

  /**
   * @public
   * <p>The list of initiation methods associated with contacts.</p>
   */
  InitiationMethods?: ContactInitiationMethod[];

  /**
   * @public
   * <p>The list of queue IDs associated with contacts.</p>
   */
  QueueIds?: string[];

  /**
   * @public
   * <p>The search criteria based on user-defined contact attributes that have been configured for
   *    contact search. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/search-custom-attributes.html">Search by customer contact
   *     attributes</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <important>
   *             <p>To use <code>SearchableContactAttributes</code> in a search request, the
   *      <code>GetContactAttributes</code> action is required to perform an API request. For more
   *     information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions">https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions</a>Actions defined by Amazon Connect.</p>
   *          </important>
   */
  SearchableContactAttributes?: SearchableContactAttributes;
}

/**
 * @public
 * @enum
 */
export const SortableFieldName = {
  CHANNEL: "CHANNEL",
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  INITIATION_METHOD: "INITIATION_METHOD",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type SortableFieldName = (typeof SortableFieldName)[keyof typeof SortableFieldName];

/**
 * @public
 * <p>A structure that defineds the field name to sort by and a sort order.</p>
 */
export interface Sort {
  /**
   * @public
   * <p>The name of the field on which to sort.</p>
   */
  FieldName: SortableFieldName | undefined;

  /**
   * @public
   * <p>An ascending or descending sort.</p>
   */
  Order: SortOrder | undefined;
}

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.IdentityInfo && { IdentityInfo: UserIdentityInfoFilterSensitiveLog(obj.IdentityInfo) }),
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const DescribeViewResponseFilterSensitiveLog = (obj: DescribeViewResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFederationTokenResponseFilterSensitiveLog = (obj: GetFederationTokenResponse): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InstanceSummaryFilterSensitiveLog = (obj: InstanceSummary): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListInstancesResponseFilterSensitiveLog = (obj: ListInstancesResponse): any => ({
  ...obj,
  ...(obj.InstanceSummaryList && {
    InstanceSummaryList: obj.InstanceSummaryList.map((item) => InstanceSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ViewSummaryFilterSensitiveLog = (obj: ViewSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListViewsResponseFilterSensitiveLog = (obj: ListViewsResponse): any => ({
  ...obj,
  ...(obj.ViewsSummaryList && {
    ViewsSummaryList: obj.ViewsSummaryList.map((item) => ViewSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ViewVersionSummaryFilterSensitiveLog = (obj: ViewVersionSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListViewVersionsResponseFilterSensitiveLog = (obj: ListViewVersionsResponse): any => ({
  ...obj,
  ...(obj.ViewVersionSummaryList && {
    ViewVersionSummaryList: obj.ViewVersionSummaryList.map((item) => ViewVersionSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ReplicateInstanceRequestFilterSensitiveLog = (obj: ReplicateInstanceRequest): any => ({
  ...obj,
  ...(obj.ReplicaAlias && { ReplicaAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TranscriptCriteriaFilterSensitiveLog = (obj: TranscriptCriteria): any => ({
  ...obj,
  ...(obj.SearchText && { SearchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TranscriptFilterSensitiveLog = (obj: Transcript): any => ({
  ...obj,
  ...(obj.Criteria && { Criteria: obj.Criteria.map((item) => TranscriptCriteriaFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ContactAnalysisFilterSensitiveLog = (obj: ContactAnalysis): any => ({
  ...obj,
  ...(obj.Transcript && { Transcript: TranscriptFilterSensitiveLog(obj.Transcript) }),
});

/**
 * @internal
 */
export const SearchableContactAttributesCriteriaFilterSensitiveLog = (
  obj: SearchableContactAttributesCriteria
): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchableContactAttributesFilterSensitiveLog = (obj: SearchableContactAttributes): any => ({
  ...obj,
  ...(obj.Criteria && {
    Criteria: obj.Criteria.map((item) => SearchableContactAttributesCriteriaFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SearchCriteriaFilterSensitiveLog = (obj: SearchCriteria): any => ({
  ...obj,
  ...(obj.ContactAnalysis && { ContactAnalysis: ContactAnalysisFilterSensitiveLog(obj.ContactAnalysis) }),
  ...(obj.SearchableContactAttributes && {
    SearchableContactAttributes: SearchableContactAttributesFilterSensitiveLog(obj.SearchableContactAttributes),
  }),
});
