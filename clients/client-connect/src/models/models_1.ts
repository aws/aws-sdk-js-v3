// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  ActionSummary,
  AgentAvailabilityTimer,
  AgentConfig,
  AgentContactReference,
  AgentStatusReference,
  AgentStatusSummary,
  AgentStatusType,
  AnalyticsDataAssociationResult,
  Application,
  Channel,
  ContactFlowStatus,
  ContactFlowType,
  ContactState,
  CreatedByInfo,
  DirectoryType,
  Distribution,
  EventSourceName,
  FileStatusType,
  FileUseCaseType,
  FlowAssociationResourceType,
  FlowAssociationSummary,
  HoursOfOperationConfig,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  IntegrationType,
  LexBot,
  LexV2Bot,
  ListFlowAssociationResourceType,
  MediaConcurrency,
  OutboundCallerConfig,
  ParticipantRole,
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
  UserIdentityInfo,
  UserIdentityInfoFilterSensitiveLog,
  UserPhoneConfig,
  View,
  ViewFilterSensitiveLog,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const RoutingCriteriaStepStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  INACTIVE: "INACTIVE",
  JOINED: "JOINED",
} as const;

/**
 * @public
 */
export type RoutingCriteriaStepStatus = (typeof RoutingCriteriaStepStatus)[keyof typeof RoutingCriteriaStepStatus];

/**
 * <p>A value for a segment attribute. This is structured as a map where the key is
 *     <code>valueString</code> and the value is a string.</p>
 * @public
 */
export interface SegmentAttributeValue {
  /**
   * <p>The value of a segment attribute.</p>
   * @public
   */
  ValueString?: string;
}

/**
 * <p>Information about Amazon Connect Wisdom.</p>
 * @public
 */
export interface WisdomInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom session.</p>
   * @public
   */
  SessionArn?: string;
}

/**
 * @public
 */
export interface DescribeContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * <p>Information about answer data for a contact evaluation. Answer data must be either string,
 *    numeric, or not applicable.</p>
 * @public
 */
export type EvaluationAnswerData =
  | EvaluationAnswerData.NotApplicableMember
  | EvaluationAnswerData.NumericValueMember
  | EvaluationAnswerData.StringValueMember
  | EvaluationAnswerData.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationAnswerData {
  /**
   * <p>The string value for an answer in a contact evaluation.</p>
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    NumericValue?: never;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * <p>The numeric value for an answer in a contact evaluation.</p>
   * @public
   */
  export interface NumericValueMember {
    StringValue?: never;
    NumericValue: number;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * <p>The flag to mark the question as not applicable.</p>
   * @public
   */
  export interface NotApplicableMember {
    StringValue?: never;
    NumericValue?: never;
    NotApplicable: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    NumericValue?: never;
    NotApplicable?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumericValue: (value: number) => T;
    NotApplicable: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationAnswerData, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumericValue !== undefined) return visitor.NumericValue(value.NumericValue);
    if (value.NotApplicable !== undefined) return visitor.NotApplicable(value.NotApplicable);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about output answers for a contact evaluation.</p>
 * @public
 */
export interface EvaluationAnswerOutput {
  /**
   * <p>The value for an answer in a contact evaluation.</p>
   * @public
   */
  Value?: EvaluationAnswerData;

  /**
   * <p>The system suggested value for an answer in a contact evaluation.</p>
   * @public
   */
  SystemSuggestedValue?: EvaluationAnswerData;
}

/**
 * <p>Information about scores of a contact evaluation item (section or question).</p>
 * @public
 */
export interface EvaluationScore {
  /**
   * <p>The score percentage for an item in a contact evaluation.</p>
   * @public
   */
  Percentage?: number;

  /**
   * <p>The flag to mark the item as not applicable for scoring.</p>
   * @public
   */
  NotApplicable?: boolean;

  /**
   * <p>The flag that marks the item as automatic fail. If the item or a child item gets an
   *    automatic fail answer, this flag will be true.</p>
   * @public
   */
  AutomaticFail?: boolean;
}

/**
 * <p>Metadata information about a contact evaluation.</p>
 * @public
 */
export interface EvaluationMetadata {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * <p>The identifier of the agent who performed the contact.</p>
   * @public
   */
  ContactAgentId?: string;

  /**
   * <p>The overall score of the contact evaluation.</p>
   * @public
   */
  Score?: EvaluationScore;
}

/**
 * <p>Information about notes for a contact evaluation.</p>
 * @public
 */
export interface EvaluationNote {
  /**
   * <p>The note for an item (section or question) in a contact evaluation.</p>
   *          <note>
   *             <p>Even though a note in an evaluation can have up to 3072 chars, there is also a limit on the
   *     total number of chars for all the notes in the evaluation combined. Assuming there are N
   *     questions in the evaluation being submitted, then the max char limit for all notes combined is N
   *     x 1024.</p>
   *          </note>
   * @public
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const EvaluationStatus = {
  DRAFT: "DRAFT",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus];

/**
 * <p>Information about a contact evaluation.</p>
 * @public
 */
export interface Evaluation {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * <p>Metadata about the contact evaluation.</p>
   * @public
   */
  Metadata: EvaluationMetadata | undefined;

  /**
   * <p>A map of question identifiers to answer value.</p>
   * @public
   */
  Answers: Record<string, EvaluationAnswerOutput> | undefined;

  /**
   * <p>A map of question identifiers to note value.</p>
   * @public
   */
  Notes: Record<string, EvaluationNote> | undefined;

  /**
   * <p>The status of the contact evaluation.</p>
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * <p>A map of item (section or question) identifiers to score value.</p>
   * @public
   */
  Scores?: Record<string, EvaluationScore>;

  /**
   * <p>The timestamp for when the evaluation was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the evaluation was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>The flow has not been published.</p>
 * @public
 */
export class ContactFlowNotPublishedException extends __BaseException {
  readonly name: "ContactFlowNotPublishedException" = "ContactFlowNotPublishedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContactFlowNotPublishedException, __BaseException>) {
    super({
      name: "ContactFlowNotPublishedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContactFlowNotPublishedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactFlowState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type ContactFlowState = (typeof ContactFlowState)[keyof typeof ContactFlowState];

/**
 * <p>Contains information about a flow.</p>
 * @public
 */
export interface ContactFlow {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   * @public
   */
  Type?: ContactFlowType;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  State?: ContactFlowState;

  /**
   * <p>The status of the contact flow.</p>
   * @public
   */
  Status?: ContactFlowStatus;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
   * @public
   */
  Content?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeContactFlowResponse {
  /**
   * <p>Information about the flow.</p>
   * @public
   */
  ContactFlow?: ContactFlow;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactFlowModuleState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type ContactFlowModuleState = (typeof ContactFlowModuleState)[keyof typeof ContactFlowModuleState];

/**
 * @public
 * @enum
 */
export const ContactFlowModuleStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;

/**
 * @public
 */
export type ContactFlowModuleStatus = (typeof ContactFlowModuleStatus)[keyof typeof ContactFlowModuleStatus];

/**
 * <p>Contains information about a flow module.</p>
 * @public
 */
export interface ContactFlowModule {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   * @public
   */
  Content?: string;

  /**
   * <p>The description of the flow module.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The type of flow module.</p>
   * @public
   */
  State?: ContactFlowModuleState;

  /**
   * <p>The status of the flow module.</p>
   * @public
   */
  Status?: ContactFlowModuleStatus;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleResponse {
  /**
   * <p>Information about the flow module.</p>
   * @public
   */
  ContactFlowModule?: ContactFlowModule;
}

/**
 * @public
 */
export interface DescribeEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion?: number;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormVersionStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
} as const;

/**
 * @public
 */
export type EvaluationFormVersionStatus =
  (typeof EvaluationFormVersionStatus)[keyof typeof EvaluationFormVersionStatus];

/**
 * @public
 */
export interface DescribeHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * <p>Information about of the hours of operation.</p>
 * @public
 */
export interface HoursOfOperation {
  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   * @public
   */
  HoursOfOperationArn?: string;

  /**
   * <p>The name for the hours of operation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description for the hours of operation.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The time zone for the hours of operation.</p>
   * @public
   */
  TimeZone?: string;

  /**
   * <p>Configuration information for the hours of operation.</p>
   * @public
   */
  Config?: HoursOfOperationConfig[];

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationResponse {
  /**
   * <p>The hours of operation.</p>
   * @public
   */
  HoursOfOperation?: HoursOfOperation;
}

/**
 * @public
 */
export interface DescribeInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * <p>Relevant
 *    details why the instance was not successfully created.</p>
 * @public
 */
export interface InstanceStatusReason {
  /**
   * <p>The message.</p>
   * @public
   */
  Message?: string;
}

/**
 * <p>The Amazon Connect instance.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The identity management type.</p>
   * @public
   */
  IdentityManagementType?: DirectoryType;

  /**
   * <p>The alias of instance.</p>
   * @public
   */
  InstanceAlias?: string;

  /**
   * <p>When the instance was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The service role of the instance.</p>
   * @public
   */
  ServiceRole?: string;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  InstanceStatus?: InstanceStatus;

  /**
   * <p>Relevant
   *    details why the instance was not successfully created. </p>
   * @public
   */
  StatusReason?: InstanceStatusReason;

  /**
   * <p>Whether inbound calls are enabled.</p>
   * @public
   */
  InboundCallsEnabled?: boolean;

  /**
   * <p>Whether outbound calls are enabled.</p>
   * @public
   */
  OutboundCallsEnabled?: boolean;

  /**
   * <p>This URL allows contact center users to access the Amazon Connect admin website.</p>
   * @public
   */
  InstanceAccessUrl?: string;

  /**
   * <p>The tags of an instance.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const InstanceReplicationStatus = {
  INSTANCE_REPLICATION_COMPLETE: "INSTANCE_REPLICATION_COMPLETE",
  INSTANCE_REPLICATION_DELETION_FAILED: "INSTANCE_REPLICATION_DELETION_FAILED",
  INSTANCE_REPLICATION_FAILED: "INSTANCE_REPLICATION_FAILED",
  INSTANCE_REPLICATION_IN_PROGRESS: "INSTANCE_REPLICATION_IN_PROGRESS",
  INSTANCE_REPLICA_DELETING: "INSTANCE_REPLICA_DELETING",
  RESOURCE_REPLICATION_NOT_STARTED: "RESOURCE_REPLICATION_NOT_STARTED",
} as const;

/**
 * @public
 */
export type InstanceReplicationStatus = (typeof InstanceReplicationStatus)[keyof typeof InstanceReplicationStatus];

/**
 * <p>Status information about the replication process, where you use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html">ReplicateInstance</a> API to create a replica of your Amazon Connect instance in
 *    another Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-connect-global-resiliency.html">Set up Amazon Connect
 *     Global Resiliency</a> in the <i>Amazon Connect Administrator Guide</i>.
 *   </p>
 * @public
 */
export interface ReplicationStatusSummary {
  /**
   * <p>The Amazon Web Services Region. This can be either the source or the replica Region,
   *    depending where it appears in the summary list.</p>
   * @public
   */
  Region?: string;

  /**
   * <p>The state of the replication.</p>
   * @public
   */
  ReplicationStatus?: InstanceReplicationStatus;

  /**
   * <p>A description of the replication status. Use this information to resolve any issues that are
   *    preventing the successful replication of your Amazon Connect instance to another
   *    Region.</p>
   * @public
   */
  ReplicationStatusReason?: string;
}

/**
 * <p>Details about the status of the replication of a source Amazon Connect instance across
 *     Amazon Web Services Regions. Use these details to understand the general status of a given
 *    replication. For information about why a replication process may fail, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html#why-replicateinstance-fails">Why a ReplicateInstance call fails</a> in the <i>Create a replica of your existing
 *      Amazon Connect instance</i> topic in the <i>Amazon Connect Administrator
 *     Guide</i>. </p>
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>A list of replication status summaries. The summaries contain details about the replication
   *    of configuration information for Amazon Connect resources, for each Amazon Web Services
   *    Region.</p>
   * @public
   */
  ReplicationStatusSummaryList?: ReplicationStatusSummary[];

  /**
   * <p>The Amazon Web Services Region where the source Amazon Connect instance was created. This
   *    is the Region where the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html">ReplicateInstance</a> API was
   *    called to start the replication process.</p>
   * @public
   */
  SourceRegion?: string;

  /**
   * <p>The URL that is used to sign-in to your Amazon Connect instance according to your
   *    traffic distribution group configuration. For more information about sign-in and traffic
   *    distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html">Important things to
   *     know</a> in the <i>Create traffic distribution groups</i> topic in the
   *      <i>Amazon Connect Administrator Guide</i>. </p>
   * @public
   */
  GlobalSignInEndpoint?: string;
}

/**
 * @public
 */
export interface DescribeInstanceResponse {
  /**
   * <p>The name of the instance.</p>
   * @public
   */
  Instance?: Instance;

  /**
   * <p>Status information about the replication process. This field is included only when you are
   *    using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html">ReplicateInstance</a> API to
   *    replicate an Amazon Connect instance across Amazon Web Services Regions. For information about
   *    replicating Amazon Connect instances, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html">Create a replica of your
   *     existing Amazon Connect instance</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  ReplicationConfiguration?: ReplicationConfiguration;
}

/**
 * @public
 * @enum
 */
export const InstanceAttributeType = {
  AUTO_RESOLVE_BEST_VOICES: "AUTO_RESOLVE_BEST_VOICES",
  CONTACTFLOW_LOGS: "CONTACTFLOW_LOGS",
  CONTACT_LENS: "CONTACT_LENS",
  EARLY_MEDIA: "EARLY_MEDIA",
  ENHANCED_CHAT_MONITORING: "ENHANCED_CHAT_MONITORING",
  ENHANCED_CONTACT_MONITORING: "ENHANCED_CONTACT_MONITORING",
  HIGH_VOLUME_OUTBOUND: "HIGH_VOLUME_OUTBOUND",
  INBOUND_CALLS: "INBOUND_CALLS",
  MULTI_PARTY_CONFERENCE: "MULTI_PARTY_CONFERENCE",
  OUTBOUND_CALLS: "OUTBOUND_CALLS",
  USE_CUSTOM_TTS_VOICES: "USE_CUSTOM_TTS_VOICES",
} as const;

/**
 * @public
 */
export type InstanceAttributeType = (typeof InstanceAttributeType)[keyof typeof InstanceAttributeType];

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   * @public
   */
  AttributeType: InstanceAttributeType | undefined;
}

/**
 * <p>A toggle for an individual feature at the instance level.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The type of attribute.</p>
   * @public
   */
  AttributeType?: InstanceAttributeType;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeResponse {
  /**
   * <p>The
   *    type
   *    of attribute.</p>
   * @public
   */
  Attribute?: Attribute;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigResponse {
  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfig?: InstanceStorageConfig;
}

/**
 * @public
 */
export interface DescribePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberCountryCode = {
  AD: "AD",
  AE: "AE",
  AF: "AF",
  AG: "AG",
  AI: "AI",
  AL: "AL",
  AM: "AM",
  AN: "AN",
  AO: "AO",
  AQ: "AQ",
  AR: "AR",
  AS: "AS",
  AT: "AT",
  AU: "AU",
  AW: "AW",
  AZ: "AZ",
  BA: "BA",
  BB: "BB",
  BD: "BD",
  BE: "BE",
  BF: "BF",
  BG: "BG",
  BH: "BH",
  BI: "BI",
  BJ: "BJ",
  BL: "BL",
  BM: "BM",
  BN: "BN",
  BO: "BO",
  BR: "BR",
  BS: "BS",
  BT: "BT",
  BW: "BW",
  BY: "BY",
  BZ: "BZ",
  CA: "CA",
  CC: "CC",
  CD: "CD",
  CF: "CF",
  CG: "CG",
  CH: "CH",
  CI: "CI",
  CK: "CK",
  CL: "CL",
  CM: "CM",
  CN: "CN",
  CO: "CO",
  CR: "CR",
  CU: "CU",
  CV: "CV",
  CW: "CW",
  CX: "CX",
  CY: "CY",
  CZ: "CZ",
  DE: "DE",
  DJ: "DJ",
  DK: "DK",
  DM: "DM",
  DO: "DO",
  DZ: "DZ",
  EC: "EC",
  EE: "EE",
  EG: "EG",
  EH: "EH",
  ER: "ER",
  ES: "ES",
  ET: "ET",
  FI: "FI",
  FJ: "FJ",
  FK: "FK",
  FM: "FM",
  FO: "FO",
  FR: "FR",
  GA: "GA",
  GB: "GB",
  GD: "GD",
  GE: "GE",
  GG: "GG",
  GH: "GH",
  GI: "GI",
  GL: "GL",
  GM: "GM",
  GN: "GN",
  GQ: "GQ",
  GR: "GR",
  GT: "GT",
  GU: "GU",
  GW: "GW",
  GY: "GY",
  HK: "HK",
  HN: "HN",
  HR: "HR",
  HT: "HT",
  HU: "HU",
  ID: "ID",
  IE: "IE",
  IL: "IL",
  IM: "IM",
  IN: "IN",
  IO: "IO",
  IQ: "IQ",
  IR: "IR",
  IS: "IS",
  IT: "IT",
  JE: "JE",
  JM: "JM",
  JO: "JO",
  JP: "JP",
  KE: "KE",
  KG: "KG",
  KH: "KH",
  KI: "KI",
  KM: "KM",
  KN: "KN",
  KP: "KP",
  KR: "KR",
  KW: "KW",
  KY: "KY",
  KZ: "KZ",
  LA: "LA",
  LB: "LB",
  LC: "LC",
  LI: "LI",
  LK: "LK",
  LR: "LR",
  LS: "LS",
  LT: "LT",
  LU: "LU",
  LV: "LV",
  LY: "LY",
  MA: "MA",
  MC: "MC",
  MD: "MD",
  ME: "ME",
  MF: "MF",
  MG: "MG",
  MH: "MH",
  MK: "MK",
  ML: "ML",
  MM: "MM",
  MN: "MN",
  MO: "MO",
  MP: "MP",
  MR: "MR",
  MS: "MS",
  MT: "MT",
  MU: "MU",
  MV: "MV",
  MW: "MW",
  MX: "MX",
  MY: "MY",
  MZ: "MZ",
  NA: "NA",
  NC: "NC",
  NE: "NE",
  NG: "NG",
  NI: "NI",
  NL: "NL",
  NO: "NO",
  NP: "NP",
  NR: "NR",
  NU: "NU",
  NZ: "NZ",
  OM: "OM",
  PA: "PA",
  PE: "PE",
  PF: "PF",
  PG: "PG",
  PH: "PH",
  PK: "PK",
  PL: "PL",
  PM: "PM",
  PN: "PN",
  PR: "PR",
  PT: "PT",
  PW: "PW",
  PY: "PY",
  QA: "QA",
  RE: "RE",
  RO: "RO",
  RS: "RS",
  RU: "RU",
  RW: "RW",
  SA: "SA",
  SB: "SB",
  SC: "SC",
  SD: "SD",
  SE: "SE",
  SG: "SG",
  SH: "SH",
  SI: "SI",
  SJ: "SJ",
  SK: "SK",
  SL: "SL",
  SM: "SM",
  SN: "SN",
  SO: "SO",
  SR: "SR",
  ST: "ST",
  SV: "SV",
  SX: "SX",
  SY: "SY",
  SZ: "SZ",
  TC: "TC",
  TD: "TD",
  TG: "TG",
  TH: "TH",
  TJ: "TJ",
  TK: "TK",
  TL: "TL",
  TM: "TM",
  TN: "TN",
  TO: "TO",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
  US: "US",
  UY: "UY",
  UZ: "UZ",
  VA: "VA",
  VC: "VC",
  VE: "VE",
  VG: "VG",
  VI: "VI",
  VN: "VN",
  VU: "VU",
  WF: "WF",
  WS: "WS",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;

/**
 * @public
 */
export type PhoneNumberCountryCode = (typeof PhoneNumberCountryCode)[keyof typeof PhoneNumberCountryCode];

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
 * @public
 */
export interface PhoneNumberStatus {
  /**
   * <p>The status.</p>
   * @public
   */
  Status?: PhoneNumberWorkflowStatus;

  /**
   * <p>The status message.</p>
   * @public
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
 * <p>Information about a phone number that has been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 * @public
 */
export interface ClaimedPhoneNumberSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   * @public
   */
  TargetArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
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
   * @public
   */
  PhoneNumberStatus?: PhoneNumberStatus;

  /**
   * <p>The claimed phone number ARN that was previously imported from the external service, such as
   *     Amazon Pinpoint. If it is from Amazon Pinpoint, it looks like the ARN of the phone number
   *    that was imported from Amazon Pinpoint.</p>
   * @public
   */
  SourcePhoneNumberArn?: string;
}

/**
 * @public
 */
export interface DescribePhoneNumberResponse {
  /**
   * <p>Information about a phone number that's been claimed to your Amazon Connect instance or
   *    traffic distribution group.</p>
   * @public
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Information about a predefined attribute.</p>
 * @public
 */
export interface PredefinedAttribute {
  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The values of the predefined attribute.</p>
   * @public
   */
  Values?: PredefinedAttributeValues;

  /**
   * <p>Last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeResponse {
  /**
   * <p>Information about the predefined attribute.</p>
   * @public
   */
  PredefinedAttribute?: PredefinedAttribute;
}

/**
 * @public
 */
export interface DescribePromptRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId: string | undefined;
}

/**
 * <p>Information about a prompt.</p>
 * @public
 */
export interface Prompt {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  PromptARN?: string;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId?: string;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribePromptResponse {
  /**
   * <p>Information about the prompt.</p>
   * @public
   */
  Prompt?: Prompt;
}

/**
 * @public
 */
export interface DescribeQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
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
 * <p>Contains information about a queue.</p>
 * @public
 */
export interface Queue {
  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the queue.</p>
   * @public
   */
  QueueArn?: string;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId?: string;

  /**
   * <p>The description of the queue.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   * @public
   */
  OutboundCallerConfig?: OutboundCallerConfig;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   * @public
   */
  MaxContacts?: number;

  /**
   * <p>The status of the queue.</p>
   * @public
   */
  Status?: QueueStatus;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeQueueResponse {
  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Queue?: Queue;
}

/**
 * @public
 */
export interface DescribeQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  QuickConnectId: string | undefined;
}

/**
 * <p>Contains information about a quick connect.</p>
 * @public
 */
export interface QuickConnect {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   * @public
   */
  QuickConnectARN?: string;

  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  QuickConnectId?: string;

  /**
   * <p>The name of the quick connect.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Contains information about the quick connect.</p>
   * @public
   */
  QuickConnectConfig?: QuickConnectConfig;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeQuickConnectResponse {
  /**
   * <p>Information about the quick connect.</p>
   * @public
   */
  QuickConnect?: QuickConnect;
}

/**
 * @public
 */
export interface DescribeRoutingProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;
}

/**
 * <p>Contains information about a routing profile.</p>
 * @public
 */
export interface RoutingProfile {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The name of the routing profile.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  RoutingProfileArn?: string;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId?: string;

  /**
   * <p>The description of the routing profile.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   * @public
   */
  MediaConcurrencies?: MediaConcurrency[];

  /**
   * <p>The identifier of the default outbound queue for this routing profile.</p>
   * @public
   */
  DefaultOutboundQueueId?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The number of associated queues in routing profile.</p>
   * @public
   */
  NumberOfAssociatedQueues?: number;

  /**
   * <p>The number of associated users in routing profile.</p>
   * @public
   */
  NumberOfAssociatedUsers?: number;

  /**
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>time since their last inbound contact</i> or <i>longest idle
   *     time</i>. </p>
   * @public
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;

  /**
   * <p>Whether this a default routing profile.</p>
   * @public
   */
  IsDefault?: boolean;

  /**
   * <p>The IDs of the associated queue.</p>
   * @public
   */
  AssociatedQueueIds?: string[];
}

/**
 * @public
 */
export interface DescribeRoutingProfileResponse {
  /**
   * <p>The routing profile.</p>
   * @public
   */
  RoutingProfile?: RoutingProfile;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * <p>Information about a rule.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>The event source to trigger the rule.</p>
   * @public
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * <p>The conditions of the rule.</p>
   * @public
   */
  Function: string | undefined;

  /**
   * <p>A list of actions to be run when the rule is triggered.</p>
   * @public
   */
  Actions: RuleAction[] | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * <p>The timestamp for when the rule was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for the when the rule was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the rule.</p>
   * @public
   */
  LastUpdatedBy: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRuleResponse {
  /**
   * <p>Information about the rule.</p>
   * @public
   */
  Rule: Rule | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains information about a security profile.</p>
 * @public
 */
export interface SecurityProfile {
  /**
   * <p>The identifier for the security profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The organization resource identifier for the security profile.</p>
   * @public
   */
  OrganizationResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the secruity profile.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name for the security profile.</p>
   * @public
   */
  SecurityProfileName?: string;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   * @public
   */
  TagRestrictedResources?: string[];

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;

  /**
   * <p>The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code>.</p>
   * @public
   */
  HierarchyRestrictedResources?: string[];

  /**
   * <p>The identifier of the hierarchy group that a security profile uses to restrict access to
   *    resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlHierarchyGroupId?: string;
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * <p>The security profile.</p>
   * @public
   */
  SecurityProfile?: SecurityProfile;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
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
 * <p>Information about a traffic distribution group.</p>
 * @public
 */
export interface TrafficDistributionGroup {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the traffic distribution group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the traffic distribution group.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  InstanceArn?: string;

  /**
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
   * @public
   */
  Status?: TrafficDistributionGroupStatus;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
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
   * @public
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupResponse {
  /**
   * <p>Information about the traffic distribution group.</p>
   * @public
   */
  TrafficDistributionGroup?: TrafficDistributionGroup;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains information about a user account for an Amazon Connect instance.</p>
 * @public
 */
export interface User {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The user name assigned to the user account.</p>
   * @public
   */
  Username?: string;

  /**
   * <p>Information about the user identity.</p>
   * @public
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * <p>Information about the phone configuration for the user.</p>
   * @public
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * <p>The identifier of the user account in the directory used for identity management.</p>
   * @public
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifiers of the security profiles for the user.</p>
   * @public
   */
  SecurityProfileIds?: string[];

  /**
   * <p>The identifier of the routing profile for the user.</p>
   * @public
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   * @public
   */
  HierarchyGroupId?: string;

  /**
   * <p>The
   *    tags.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>Information about the user account and configuration settings.</p>
   * @public
   */
  User?: User;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains summary information about a hierarchy group.</p>
 * @public
 */
export interface HierarchyGroupSummary {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * <p>Contains information about the levels of a hierarchy group.</p>
 * @public
 */
export interface HierarchyPath {
  /**
   * <p>Information about level one.</p>
   * @public
   */
  LevelOne?: HierarchyGroupSummary;

  /**
   * <p>Information about level two.</p>
   * @public
   */
  LevelTwo?: HierarchyGroupSummary;

  /**
   * <p>Information about level three.</p>
   * @public
   */
  LevelThree?: HierarchyGroupSummary;

  /**
   * <p>Information about level four.</p>
   * @public
   */
  LevelFour?: HierarchyGroupSummary;

  /**
   * <p>Information about level five.</p>
   * @public
   */
  LevelFive?: HierarchyGroupSummary;
}

/**
 * <p>Contains information about a hierarchy group.</p>
 * @public
 */
export interface HierarchyGroup {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The identifier of the level in the hierarchy group.</p>
   * @public
   */
  LevelId?: string;

  /**
   * <p>Information about the levels in the hierarchy group.</p>
   * @public
   */
  HierarchyPath?: HierarchyPath;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupResponse {
  /**
   * <p>Information about the hierarchy group.</p>
   * @public
   */
  HierarchyGroup?: HierarchyGroup;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains information about a hierarchy level.</p>
 * @public
 */
export interface HierarchyLevel {
  /**
   * <p>The identifier of the hierarchy level.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy level.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * <p>Contains information about a hierarchy structure.</p>
 * @public
 */
export interface HierarchyStructure {
  /**
   * <p>Information about level one.</p>
   * @public
   */
  LevelOne?: HierarchyLevel;

  /**
   * <p>Information about level two.</p>
   * @public
   */
  LevelTwo?: HierarchyLevel;

  /**
   * <p>Information about level three.</p>
   * @public
   */
  LevelThree?: HierarchyLevel;

  /**
   * <p>Information about level four.</p>
   * @public
   */
  LevelFour?: HierarchyLevel;

  /**
   * <p>Information about level five.</p>
   * @public
   */
  LevelFive?: HierarchyLevel;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureResponse {
  /**
   * <p>Information about the hierarchy structure.</p>
   * @public
   */
  HierarchyStructure?: HierarchyStructure;
}

/**
 * @public
 */
export interface DescribeViewRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ViewId of the view. This must be an ARN for Amazon Web Services managed views.</p>
   * @public
   */
  ViewId: string | undefined;
}

/**
 * @public
 */
export interface DescribeViewResponse {
  /**
   * <p>All view data is contained within the View object.</p>
   * @public
   */
  View?: View;
}

/**
 * @public
 */
export interface DescribeVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;
}

/**
 * <p>Contains information about a custom vocabulary.</p>
 * @public
 */
export interface Vocabulary {
  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;

  /**
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The reason why the custom vocabulary was not created.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   * @public
   */
  Content?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVocabularyResponse {
  /**
   * <p>A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are
   *    generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper
   *    nouns.</p>
   * @public
   */
  Vocabulary: Vocabulary | undefined;
}

/**
 * @public
 */
export interface DisassociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to remove.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string;
}

/**
 * @public
 */
export interface DisassociateApprovedOriginRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The domain URL of the integrated application.</p>
   * @public
   */
  Origin: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot;

  /**
   * <p>The Amazon Lex V2 bot to disassociate from the instance.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 */
export interface DisassociateFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;
}

/**
 * @public
 */
export interface DisassociateLambdaFunctionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance..</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</p>
   * @public
   */
  FunctionArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateLexBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot. Maximum character limit of 50.</p>
   * @public
   */
  BotName: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the Amazon Lex bot has been created.</p>
   * @public
   */
  LexRegion: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberContactFlowRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The quick connects to disassociate from the queue.</p>
   * @public
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to disassociate from this routing profile.</p>
   * @public
   */
  QueueReferences: RoutingProfileQueueReference[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityKeyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserResponse {}

/**
 * <p>Information about proficiency to be disassociated from the user.</p>
 * @public
 */
export interface UserProficiencyDisassociate {
  /**
   * <p>The name of user's proficiency.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value of user's proficiency.</p>
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserProficienciesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The proficiencies to disassociate from the user.</p>
   * @public
   */
  UserProficiencies: UserProficiencyDisassociate[] | undefined;
}

/**
 * @public
 */
export interface DismissUserContactRequest {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DismissUserContactResponse {}

/**
 * Request to GetAttachedFile API.
 * @public
 */
export interface GetAttachedFileRequest {
  /**
   * <p>The unique identifier of the Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is
   *    300.</p>
   * @public
   */
  UrlExpiryInSeconds?: number;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * <p>Metadata used to download the attached file.</p>
 * @public
 */
export interface DownloadUrlMetadata {
  /**
   * <p>A pre-signed URL that should be used to download the attached file. </p>
   * @public
   */
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format:
   *    yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiry?: string;
}

/**
 * Response from GetAttachedFile API.
 * @public
 */
export interface GetAttachedFileResponse {
  /**
   * <p>The unique identifier of the attached file resource (ARN).</p>
   * @public
   */
  FileArn?: string;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId?: string;

  /**
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601
   *    format: <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2024-05-03T02:41:28.172Z</code>.</p>
   * @public
   */
  CreationTime?: string;

  /**
   * <p>The current status of the attached file.</p>
   * @public
   */
  FileStatus?: FileStatusType;

  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName?: string;

  /**
   * <p>The size of the attached file in bytes.</p>
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   * @public
   */
  AssociatedResourceArn?: string;

  /**
   * <p>The use case for the file.</p>
   * @public
   */
  FileUseCaseType?: FileUseCaseType;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo;

  /**
   * <p>URL and expiry to be used when downloading the attached file. </p>
   * @public
   */
  DownloadUrlMetadata?: DownloadUrlMetadata;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{
   *     "Tags": \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetContactAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   * @public
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface GetContactAttributesResponse {
  /**
   * <p>Information about the attributes.</p>
   * @public
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
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 * @public
 */
export interface CurrentMetric {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  Name?: CurrentMetricName;

  /**
   * <p>The unit for the metric.</p>
   * @public
   */
  Unit?: Unit;
}

/**
 * <p>Contains the filter to apply when retrieving metrics.</p>
 * @public
 */
export interface Filters {
  /**
   * <p>The queues to use to filter the metrics. You should specify at least one queue, and can
   *    specify up to 100 queues per request. The <code>GetCurrentMetricsData</code> API in particular
   *    requires a queue when you include a <code>Filter</code> in your request. </p>
   * @public
   */
  Queues?: string[];

  /**
   * <p>The channel to use to filter the metrics.</p>
   * @public
   */
  Channels?: Channel[];

  /**
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   * @public
   */
  RoutingProfiles?: string[];

  /**
   * <p>A list of expressions as a filter, in which an expression is an object of a step in a
   *    routing criteria.</p>
   * @public
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
 * <p>The way to sort the resulting response based on metrics. By default resources are sorted
 *    based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted
 *    based on the input metrics.</p>
 * @public
 */
export interface CurrentMetricSortCriteria {
  /**
   * <p>The current metric names.</p>
   * @public
   */
  SortByMetric?: CurrentMetricName;

  /**
   * <p>The way to sort.</p>
   * @public
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface GetCurrentMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
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
   * @public
   */
  Filters: Filters | undefined;

  /**
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
   * @public
   */
  Groupings?: Grouping[];

  /**
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
   * @public
   */
  CurrentMetrics: CurrentMetric[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
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
   * @public
   */
  SortCriteria?: CurrentMetricSortCriteria[];
}

/**
 * <p>Contains the data for a real-time metric.</p>
 * @public
 */
export interface CurrentMetricData {
  /**
   * <p>Information about the metric.</p>
   * @public
   */
  Metric?: CurrentMetric;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number;
}

/**
 * <p>Information about the routing profile assigned to the user.</p>
 * @public
 */
export interface RoutingProfileReference {
  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Contains information about the dimensions for a set of metrics.</p>
 * @public
 */
export interface Dimensions {
  /**
   * <p>Information about the queue for which metrics are returned.</p>
   * @public
   */
  Queue?: QueueReference;

  /**
   * <p>The channel used for grouping and filters.</p>
   * @public
   */
  Channel?: Channel;

  /**
   * <p>Information about the routing profile assigned to the user.</p>
   * @public
   */
  RoutingProfile?: RoutingProfileReference;

  /**
   * <p>The expression of a step in a routing criteria.</p>
   * @public
   */
  RoutingStepExpression?: string;
}

/**
 * <p>Contains information about a set of real-time metrics.</p>
 * @public
 */
export interface CurrentMetricResult {
  /**
   * <p>The dimensions for the metrics.</p>
   * @public
   */
  Dimensions?: Dimensions;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: CurrentMetricData[];
}

/**
 * @public
 */
export interface GetCurrentMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the real-time metrics.</p>
   * @public
   */
  MetricResults?: CurrentMetricResult[];

  /**
   * <p>The time at which the metrics were retrieved and cached for pagination.</p>
   * @public
   */
  DataSnapshotTime?: Date;

  /**
   * <p>The total count of the result, regardless of the current page size. </p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters user data based on the contact information that is associated to the users. It
 *    contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
 * @public
 */
export interface ContactFilter {
  /**
   * <p>A list of up to 9 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
   * @public
   */
  ContactStates?: ContactState[];
}

/**
 * <p>A filter for the user data.</p>
 * @public
 */
export interface UserDataFilters {
  /**
   * <p>A list of up to 100 queues or ARNs.</p>
   * @public
   */
  Queues?: string[];

  /**
   * <p>A filter for the user data based on the contact information that is associated to the user.
   *    It contains a list of contact states. </p>
   * @public
   */
  ContactFilter?: ContactFilter;

  /**
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   * @public
   */
  RoutingProfiles?: string[];

  /**
   * <p>A list of up to 100 agent IDs or ARNs.</p>
   * @public
   */
  Agents?: string[];

  /**
   * <p>A UserHierarchyGroup ID or ARN.</p>
   * @public
   */
  UserHierarchyGroups?: string[];
}

/**
 * @public
 */
export interface GetCurrentUserDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
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
   * @public
   */
  Filters: UserDataFilters | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Information about the hierarchy group.</p>
 * @public
 */
export interface HierarchyGroupSummaryReference {
  /**
   * <p>The unique identifier for the hierarchy group.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the hierarchy group. </p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Information about the levels in the hierarchy group.</p>
 * @public
 */
export interface HierarchyPathReference {
  /**
   * <p>Information about level one.</p>
   * @public
   */
  LevelOne?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level two.</p>
   * @public
   */
  LevelTwo?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level three.</p>
   * @public
   */
  LevelThree?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level four.</p>
   * @public
   */
  LevelFour?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level five.</p>
   * @public
   */
  LevelFive?: HierarchyGroupSummaryReference;
}

/**
 * <p>Information about the user.</p>
 * @public
 */
export interface UserReference {
  /**
   * <p>The unique identifier for the user.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>Data for a user.</p>
 * @public
 */
export interface UserData {
  /**
   * <p>Information about the user for the data that is returned. It contains the
   *     <code>resourceId</code> and ARN of the user. </p>
   * @public
   */
  User?: UserReference;

  /**
   * <p>Information about the routing profile that is assigned to the user.</p>
   * @public
   */
  RoutingProfile?: RoutingProfileReference;

  /**
   * <p>Contains information about the levels of a hierarchy group assigned to a user.</p>
   * @public
   */
  HierarchyPath?: HierarchyPathReference;

  /**
   * <p>The status of the agent that they manually set in their Contact Control Panel (CCP), or that
   *    the supervisor manually changes in the real-time metrics report.</p>
   * @public
   */
  Status?: AgentStatusReference;

  /**
   * <p>A map of available slots by channel. The key is a channel name. The value is an integer: the
   *    available number of slots. </p>
   * @public
   */
  AvailableSlotsByChannel?: Partial<Record<Channel, number>>;

  /**
   * <p>A map of maximum slots by channel. The key is a channel name. The value is an integer: the
   *    maximum number of slots. This is calculated from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html">MediaConcurrency</a> of the
   *     <code>RoutingProfile</code> assigned to the agent. </p>
   * @public
   */
  MaxSlotsByChannel?: Partial<Record<Channel, number>>;

  /**
   * <p> A map of active slots by channel. The key is a channel name. The value is an integer: the
   *    number of active slots. </p>
   * @public
   */
  ActiveSlotsByChannel?: Partial<Record<Channel, number>>;

  /**
   * <p>A list of contact reference information.</p>
   * @public
   */
  Contacts?: AgentContactReference[];

  /**
   * <p>The Next status of the agent.</p>
   * @public
   */
  NextStatus?: string;
}

/**
 * @public
 */
export interface GetCurrentUserDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of the user data that is returned.</p>
   * @public
   */
  UserDataList?: UserData[];

  /**
   * <p>The total count of the result, regardless of the current page size.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface GetFederationTokenRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains credentials to use for federation.</p>
 * @public
 */
export interface Credentials {
  /**
   * <p>An access token generated for a federated user to access Amazon Connect.</p>
   * @public
   */
  AccessToken?: string;

  /**
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect.</p>
   * @public
   */
  AccessTokenExpiration?: Date;

  /**
   * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
   * @public
   */
  RefreshToken?: string;

  /**
   * <p>Renews the expiration timer for a generated token.</p>
   * @public
   */
  RefreshTokenExpiration?: Date;
}

/**
 * @public
 */
export interface GetFederationTokenResponse {
  /**
   * <p>The credentials to use for federation.</p>
   * @public
   */
  Credentials?: Credentials;

  /**
   * <p>The URL to sign into the user's instance. </p>
   * @public
   */
  SignInUrl?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  UserArn?: string;

  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string;
}

/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface GetFlowAssociationResponse {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId?: string;

  /**
   * <p>A valid resource type.</p>
   * @public
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
 * <p>Contains information about the threshold for service level metrics.</p>
 * @public
 */
export interface Threshold {
  /**
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   * @public
   */
  Comparison?: Comparison;

  /**
   * <p>The threshold value to compare.</p>
   * @public
   */
  ThresholdValue?: number;
}

/**
 * <p>Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 * @public
 */
export interface HistoricalMetric {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  Name?: HistoricalMetricName;

  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   * @public
   */
  Threshold?: Threshold;

  /**
   * <p>The statistic for the metric.</p>
   * @public
   */
  Statistic?: Statistic;

  /**
   * <p>The unit for the metric.</p>
   * @public
   */
  Unit?: Unit;
}

/**
 * @public
 */
export interface GetMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
   *    such as 10:05, 10:10, 10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
   *    metrics are available only for 24 hours.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using an interval of 5 minutes,
   *    such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
   *    retrieved only for the resources associated with the queues or channels included in the filter.
   *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to
   *    GetMetricDataV2 for more up-to-date features.</p>
   *          <note>
   *             <p>To filter by <code>Queues</code>, enter the queue
   *     ID/ARN, not the name of the queue.</p>
   *          </note>
   * @public
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by
   *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
   *    each queue rather than aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to
   *    GetMetricDataV2 for more up-to-date features.</p>
   * @public
   */
  Groupings?: Grouping[];

  /**
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
   * @public
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains the data for a historical metric.</p>
 * @public
 */
export interface HistoricalMetricData {
  /**
   * <p>Information about the metric.</p>
   * @public
   */
  Metric?: HistoricalMetric;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number;
}

/**
 * <p>Contains information about the historical metrics retrieved.</p>
 * @public
 */
export interface HistoricalMetricResult {
  /**
   * <p>The dimension for the metrics.</p>
   * @public
   */
  Dimensions?: Dimensions;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: HistoricalMetricData[];
}

/**
 * @public
 */
export interface GetMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   * @public
   */
  MetricResults?: HistoricalMetricResult[];
}

/**
 * <p>Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API.</p>
 * @public
 */
export interface FilterV2 {
  /**
   * <p>The key to use for filtering data. For example, <code>QUEUE</code>, <code>ROUTING_PROFILE,
   *     AGENT</code>, <code>CHANNEL</code>, <code>AGENT_HIERARCHY_LEVEL_ONE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code>, <code>AGENT_HIERARCHY_LEVEL_THREE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code>, <code>AGENT_HIERARCHY_LEVEL_FIVE</code>. There must be
   *    at least 1 key and a maximum 5 keys. </p>
   * @public
   */
  FilterKey?: string;

  /**
   * <p>The identifiers to use for filtering data. For example, if you have a filter key of
   *     <code>QUEUE</code>, you would add queue IDs or ARNs in <code>FilterValues</code>. </p>
   * @public
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
 * <p>Information about the interval period to use for returning results.</p>
 * @public
 */
export interface IntervalDetails {
  /**
   * <p>The timezone applied to requested metrics.</p>
   * @public
   */
  TimeZone?: string;

  /**
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
   * @public
   */
  IntervalPeriod?: IntervalPeriod;
}

/**
 * <p>Contains information about the filter used when retrieving metrics.
 *     <code>MetricFiltersV2</code> can be used on the following metrics:
 *     <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>,
 *     <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>.</p>
 * @public
 */
export interface MetricFilterV2 {
  /**
   * <p>The key to use for filtering data. </p>
   *          <p>Valid metric filter keys: <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code>.
   *    These are the same values as the <code>InitiationMethod</code> and <code>DisconnectReason</code>
   *    in the contact record. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord">ContactTraceRecord</a> in the <i>Amazon Connect Administrator Guide</i>.
   *   </p>
   * @public
   */
  MetricFilterKey?: string;

  /**
   * <p>The values to use for filtering data. </p>
   *          <p>Valid metric filter values for <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *     <code>OUTBOUND</code> | <code>TRANSFER</code> | <code>QUEUE_TRANSFER</code> |
   *     <code>CALLBACK</code> | <code>API</code> | <code>WEBRTC_API</code> | <code>MONITOR</code> |
   *     <code>DISCONNECT</code> | <code>EXTERNAL_OUTBOUND</code>
   *          </p>
   *          <p>Valid metric filter values for <code>DISCONNECT_REASON</code>:
   *     <code>CUSTOMER_DISCONNECT</code> | <code>AGENT_DISCONNECT</code> |
   *     <code>THIRD_PARTY_DISCONNECT</code> | <code>TELECOM_PROBLEM</code> | <code>BARGED</code> |
   *     <code>CONTACT_FLOW_DISCONNECT</code> | <code>OTHER</code> | <code>EXPIRED</code> |
   *     <code>API</code>
   *          </p>
   * @public
   */
  MetricFilterValues?: string[];

  /**
   * <p>The flag to use to filter on requested metric filter values or to not filter on requested
   *    metric filter values. By default the negate is <code>false</code>, which indicates to filter on
   *    the requested metric filter. </p>
   * @public
   */
  Negate?: boolean;
}

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 * @public
 */
export interface ThresholdV2 {
  /**
   * <p>The type of comparison. Currently, "less than" (LT), "less than equal" (LTE), and "greater
   *    than" (GT) comparisons are supported.</p>
   * @public
   */
  Comparison?: string;

  /**
   * <p>The threshold value to compare.</p>
   * @public
   */
  ThresholdValue?: number;
}

/**
 * <p>Contains information about the metric.</p>
 * @public
 */
export interface MetricV2 {
  /**
   * <p>The name of the metric.</p>
   *          <important>
   *             <p>This parameter is required. The following Required = No is incorrect.</p>
   *          </important>
   * @public
   */
  Name?: string;

  /**
   * <p>Contains information about the threshold for service level metrics.</p>
   * @public
   */
  Threshold?: ThresholdV2[];

  /**
   * <p>Contains the filters to be used when returning data.</p>
   * @public
   */
  MetricFilters?: MetricFilterV2[];
}

/**
 * @public
 */
export interface GetMetricDataV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect
   *    instance.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be before the end time timestamp. The start
   *    and end time depends on the <code>IntervalPeriod</code> selected. By default the time range
   *    between start and end time is 35 days. Historical metrics are available for 3 months.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be later than the start time timestamp. It
   *    cannot be later than the current timestamp.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
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
   * @public
   */
  Interval?: IntervalDetails;

  /**
   * <p>The filters to apply to returned metrics. You can filter on the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>Agents</p>
   *             </li>
   *             <li>
   *                <p>Campaigns</p>
   *             </li>
   *             <li>
   *                <p>Channels</p>
   *             </li>
   *             <li>
   *                <p>Feature</p>
   *             </li>
   *             <li>
   *                <p>Queues</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles</p>
   *             </li>
   *             <li>
   *                <p>Routing step expression</p>
   *             </li>
   *             <li>
   *                <p>User hierarchy groups</p>
   *             </li>
   *          </ul>
   *          <p>At least one filter must be passed from queues, routing profiles, agents, or user hierarchy
   *    groups.</p>
   *          <p>For metrics for outbound campaigns analytics, you can also use campaigns to satisfy at least
   *    one filter requirement.</p>
   *          <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical
   *     metrics report</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   *          <p>Note the following limits:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Filter keys</b>: A maximum of 5 filter keys are supported in
   *      a single request. Valid filter keys: <code>AGENT</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_ONE</code> | <code>AGENT_HIERARCHY_LEVEL_TWO</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_THREE</code> | <code>AGENT_HIERARCHY_LEVEL_FOUR</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_FIVE</code> | <code>ANSWERING_MACHINE_DETECTION_STATUS</code> |
   *       <code>CAMPAIGN</code> | <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> |
   *       <code>CHANNEL</code> | <code>contact/segmentAttributes/connect:Subtype</code> |
   *       <code>DISCONNECT_REASON</code> | <code>FEATURE</code> | <code>FLOW_TYPE</code> |
   *       <code>FLOWS_NEXT_RESOURCE_ID</code> | <code>FLOWS_NEXT_RESOURCE_QUEUE_ID</code> |
   *       <code>FLOWS_OUTCOME_TYPE</code> | <code>FLOWS_RESOURCE_ID</code> |
   *       <code>INITIATION_METHOD</code> | <code>RESOURCE_PUBLISHED_TIMESTAMP</code> |
   *       <code>ROUTING_PROFILE</code> | <code>ROUTING_STEP_EXPRESSION</code> | <code>QUEUE</code> |
   *       <code>Q_CONNECT_ENABLED</code> | </p>
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
   *                <p>
   *                   <code>Q_CONNECT_ENABLED</code>. TRUE and FALSE are the only valid filterValues for the
   *       <code>Q_CONNECT_ENABLED</code> filter key. </p>
   *                <ul>
   *                   <li>
   *                      <p>TRUE includes all contacts that had Amazon Q in Connect enabled as part of the flow.</p>
   *                   </li>
   *                   <li>
   *                      <p>FALSE includes all contacts that did not have Amazon Q in Connect enabled as part of the flow</p>
   *                   </li>
   *                </ul>
   *                <p>This filter is available only for contact record-driven metrics. </p>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-outbound-campaigns_Campaign.html">Campaign</a> ARNs are valid <code>filterValues</code> for the <code>CAMPAIGN</code>
   *      filter key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters: FilterV2[] | undefined;

  /**
   * <p>The grouping applied to the metrics that are returned. For example, when results are grouped
   *    by queue, the metrics returned are grouped by queue. The values that are returned apply to the
   *    metrics for each queue. They are not aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of all metrics is returned.</p>
   *          <p>Valid grouping keys: <code>AGENT</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> |
   *     <code>ANSWERING_MACHINE_DETECTION_STATUS</code> | <code>CAMPAIGN</code> |
   *     <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> | <code>CHANNEL</code> |
   *     <code>contact/segmentAttributes/connect:Subtype</code> | <code>DISCONNECT_REASON</code> |
   *     <code>FLOWS_RESOURCE_ID</code> | <code>FLOWS_MODULE_RESOURCE_ID</code> | <code>FLOW_TYPE</code>
   *    | <code>FLOWS_OUTCOME_TYPE</code> | <code>INITIATION_METHOD</code> |
   *     <code>Q_CONNECT_ENABLED</code> | <code>QUEUE</code> | <code>RESOURCE_PUBLISHED_TIMESTAMP</code>
   *    | <code>ROUTING_PROFILE</code> | <code>ROUTING_STEP_EXPRESSION</code>
   *          </p>
   * @public
   */
  Groupings?: string[];

  /**
   * <p>The metrics to retrieve. Specify the name, groupings, and filters for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   *          <dl>
   *             <dt>ABANDONMENT_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#abandonment-rate-historical">Abandonment rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#adherent-time-historical">Adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ANSWER_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-answer-rate-historical">Agent answer rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#non-adherent-time">Non-adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-non-response">Agent
   *        non-response</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE_WITHOUT_CUSTOMER_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>Data for this metric is available starting from October 1, 2023 0:00:00 GMT.</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-nonresponse-no-abandon-historical">Agent non-response without customer abandons</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#occupancy-historical">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULE_ADHERENCE</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#adherence-historical">Adherence</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULED_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#scheduled-time-historical">Scheduled time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-queue-abandon-time-historical">Average queue abandon time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ACTIVE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-active-time-historical">Average active time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-acw-time-historical">Average after contact work time</a>
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
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#htm-avg-agent-api-connecting-time">Average agent API connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in Metric Level Filters is not applicable for this
   *        metric.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_PAUSE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-agent-pause-time-historical">Average agent pause time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RELATED_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-contacts-case-historical">Average contacts per case</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-case-resolution-time-historical">Average case resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONTACT_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-contact-duration-historical">Average contact duration</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_CONVERSATION_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-conversation-duration-historical">Average conversation duration</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_DIALS_PER_MINUTE</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns
   *       analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Agent, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-dials-historical">Average dials per minute</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-flow-time-historical">Average flow time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_GREETING_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-greeting-time-agent-historical">Average agent greeting time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-handle-time-historical">Average handle time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-customer-hold-time-historical">Average customer hold time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME_ALL_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#avg-customer-hold-time-all-contacts-historical">Average customer hold time all contacts</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLDS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-holds-historical">Average holds</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-agent-interaction-customer-hold-time-historical">Average agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-agent-interaction-time-historical">Average agent interaction time</a>
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
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-interruptions-agent-historical">Average agent interruptions</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERRUPTION_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-interruptions-time-agent-historical">Average agent interruption time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html##average-non-talk-time-historical">Average non-talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-queue-answer-time-historical">Average queue answer time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-resolution-time-historical">Average resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-talk-time-historical">Average talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-talk-time-agent-historical">Average agent talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-talk-time-customer-historical">Average customer talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WAIT_TIME_AFTER_CUSTOMER_CONNECTION</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Campaign</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#average-wait-time-historical">Average wait time after customer connection</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_CONTACTS_ABANDONED_AFTER_X</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns
   *       analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Agent </p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>GT</code> (for
   *        <i>Greater than</i>).</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#campaign-contacts-abandoned-historical">Campaign contacts abandoned after X</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_CONTACTS_ABANDONED_AFTER_X_RATE</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns
   *       analytics.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Campaign, Agent </p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>GT</code> (for
   *        <i>Greater than</i>).</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#campaign-contacts-abandoned-rate-historical">Campaign contacts abandoned after X rate</a>
   *                </p>
   *             </dd>
   *             <dt>CASES_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-created-historical">Cases created</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-created-historical">Contacts created</a>
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
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#api-contacts-handled-historical">API contacts handled</a>
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
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-handled-by-connected-to-agent-historical">Contacts handled (connected to agent timestamp)</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-handled-by-connected-to-agent-historical">Contacts hold disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_AGENT_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-hold-agent-disconnect-historical">Contacts hold agent disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_CUSTOMER_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-hold-customer-disconnect-historical">Contacts hold customer disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_PUT_ON_HOLD</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-hold-customer-disconnect-historical">Contacts put on hold</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_EXTERNAL</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-external-historical">Contacts transferred out external</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_INTERNAL</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-internal-historical">Contacts transferred out internal</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-queued-historical">Contacts queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED_BY_ENQUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-queued-by-enqueue-historical">Contacts queued (enqueue timestamp)</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_REMOVED_FROM_QUEUE_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-removed-historical">Contacts removed from queue in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_RESOLVED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code> enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-resolved-historical">Contacts resolved in X</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-historical">Contacts transferred out</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-by-agent-historical">Contacts transferred out by agent</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-transferred-out-by-agent-historical">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>CURRENT_CASES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#current-cases-historical">Current cases</a>
   *                </p>
   *             </dd>
   *             <dt>DELIVERY_ATTEMPTS</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns
   *       analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>ANSWERING_MACHINE_DETECTION_STATUS</code>,
   *        <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Campaign, Agent, Queue, Routing Profile, Answering Machine Detection Status,
   *       Disconnect Reason</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#delivery-attempts-historical">Delivery attempts</a>
   *                </p>
   *             </dd>
   *             <dt>DELIVERY_ATTEMPT_DISPOSITION_RATE</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns analytics, and
   *       with the answering machine detection enabled.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid metric filter key: <code>ANSWERING_MACHINE_DETECTION_STATUS</code>,
   *        <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Campaign, Agent, Answering Machine Detection Status, Disconnect Reason</p>
   *                <note>
   *                   <p>Answering Machine Detection Status and Disconnect Reason are valid filters but not valid
   *        groupings.</p>
   *                </note>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#delivery-attempt-disposition-rate-historical">Delivery attempt disposition rate</a>
   *                </p>
   *             </dd>
   *             <dt>FLOWS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#flows-outcome-historical">Flows outcome</a>
   *                </p>
   *             </dd>
   *             <dt>FLOWS_STARTED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#flows-started-historical">Flows started</a>
   *                </p>
   *             </dd>
   *             <dt>HUMAN_ANSWERED_CALLS</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by outbound campaigns analytics, and
   *       with the answering machine detection enabled.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Agent</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#human-answered-historical">Human answered</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#maximum-flow-time-historical">Maximum flow time</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#maximum-queued-time-historical">Maximum queued time</a>
   *                </p>
   *             </dd>
   *             <dt>MIN_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#minimum-flow-time-historical">Minimum flow time</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CASES_FIRST_CONTACT_RESOLVED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-resolved-first-contact-historical">Cases resolved on first contact</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_EXPIRED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical
   *       Metrics UI.</p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_JOINED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical
   *       Metrics UI.</p>
   *             </dd>
   *             <dt>PERCENT_FLOWS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid metric filter key: <code>FLOWS_OUTCOME_TYPE</code>
   *                </p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#flows-outcome-percentage-historical">Flows outcome percentage</a>.</p>
   *                <note>
   *                   <p>The <code>FLOWS_OUTCOME_TYPE</code> is not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>PERCENT_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#ntt-historical">Non-talk
   *        time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#tt-historical">Talk time
   *        percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#ttagent-historical">Agent
   *        talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#ttcustomer-historical">Customer talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>REOPENED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-reopened-historical">Cases reopened</a>
   *                </p>
   *             </dd>
   *             <dt>RESOLVED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#cases-resolved-historical">Cases resolved</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#service-level-historical">Service level X</a>
   *                </p>
   *             </dd>
   *             <dt>STEP_CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical
   *       Metrics UI.</p>
   *             </dd>
   *             <dt>SUM_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#acw-historical">After
   *        contact work time</a>
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
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#htm-agent-api-connecting-time">Agent API connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in Metric Level Filters is not applicable for this
   *        metric.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Metric filter: </p>
   *                <ul>
   *                   <li>
   *                      <p>Valid values: <code>API</code>| <code>Incoming</code> | <code>Outbound</code> |
   *          <code>Transfer</code> | <code>Callback</code> | <code>Queue_Transfer</code>|
   *          <code>Disconnect</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-abandoned-historical">Contact abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ABANDONED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-abandoned-x-historical">Contacts abandoned in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ANSWERED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contacts-answered-x-historical">Contacts answered in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contact-flow-time-historical">Contact flow time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-on-contact-time-historical">Agent on contact time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_DISCONNECTED </dt>
   *             <dd>
   *                <p>Valid metric filter key: <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contact-disconnected-historical">Contact disconnected</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ERROR_STATUS_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#error-status-time-historical">Error status time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#contact-handle-time-historical">Contact handle time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#customer-hold-time-historical">Customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_IDLE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-idle-time-historica">Agent idle time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-interaction-hold-time-historical">Agent interaction and hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#agent-interaction-time-historical">Agent interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_NON_PRODUCTIVE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#npt-historical">Non-Productive Time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ONLINE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#online-time-historical">Online time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html#callback-attempts-historical">Callback attempts</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  Metrics: MetricV2[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains the name, thresholds, and metric filters.</p>
 * @public
 */
export interface MetricDataV2 {
  /**
   * <p>The metric name, thresholds, and metric filters of the returned metric.</p>
   * @public
   */
  Metric?: MetricV2;

  /**
   * <p>The corresponding value of the metric returned in the response.</p>
   * @public
   */
  Value?: number;
}

/**
 * <p>The interval period with the start and end time for the metrics.</p>
 * @public
 */
export interface MetricInterval {
  /**
   * <p>The interval period provided in the API request. </p>
   * @public
   */
  Interval?: IntervalPeriod;

  /**
   * <p>The timestamp, in UNIX Epoch time format. Start time is based on the interval period
   *    selected. </p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The timestamp, in UNIX Epoch time format. End time is based on the interval period selected.
   *    For example, If <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *     <code>StartTime</code> and <code>EndTime</code> in the API request differs by 1 day, then 48
   *    results are returned in the response. Each result is aggregated by the 30 minutes period, with
   *    each <code>StartTime</code> and <code>EndTime</code> differing by 30 minutes. </p>
   * @public
   */
  EndTime?: Date;
}

/**
 * <p>Contains information about the metric results.</p>
 * @public
 */
export interface MetricResultV2 {
  /**
   * <p>The dimension for the metrics.</p>
   * @public
   */
  Dimensions?: Record<string, string>;

  /**
   * <p>The interval period with the start and end time for the metrics.</p>
   * @public
   */
  MetricInterval?: MetricInterval;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: MetricDataV2[];
}

/**
 * @public
 */
export interface GetMetricDataV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the metrics requested in the API request If no grouping is specified, a
   *    summary of metric data is returned. </p>
   * @public
   */
  MetricResults?: MetricResultV2[];
}

/**
 * @public
 */
export interface GetPromptFileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId: string | undefined;
}

/**
 * @public
 */
export interface GetPromptFileResponse {
  /**
   * <p>A generated URL to the prompt that can be given to an unauthorized user so they can access
   *    the prompt in S3.</p>
   * @public
   */
  PromptPresignedUrl?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface GetTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The system generated version of a task template that is associated with a task, when the
   *    task is created.</p>
   * @public
   */
  SnapshotVersion?: string;
}

/**
 * @public
 */
export interface GetTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields?: TaskTemplateField[];

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetTrafficDistributionRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The distribution of sign in traffic between the instance and its replica(s).</p>
 * @public
 */
export interface SignInDistribution {
  /**
   * <p>The Amazon Web Services Region of the sign in distribution.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>Whether sign in distribution is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
 *    agents in to both the instance and its replica(s).</p>
 * @public
 */
export interface SignInConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: SignInDistribution[] | undefined;
}

/**
 * <p>The distribution of traffic between the instance and its replicas.</p>
 * @public
 */
export interface TelephonyConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionResponse {
  /**
   * <p>The distribution of traffic between the instance and its replicas.</p>
   * @public
   */
  TelephonyConfig?: TelephonyConfig;

  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
   *    agents in to both the instance and its replica(s).</p>
   * @public
   */
  SignInConfig?: SignInConfig;

  /**
   * <p>The distribution of agents between the instance and its replica(s).</p>
   * @public
   */
  AgentConfig?: AgentConfig;
}

/**
 * @public
 */
export interface ImportPhoneNumberRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The claimed phone number ARN being imported from the external service, such as Amazon Pinpoint. If it is from Amazon Pinpoint, it looks like the ARN of the phone number to
   *    import from Amazon Pinpoint.</p>
   * @public
   */
  SourcePhoneNumberArn: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ImportPhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string;
}

/**
 * @public
 */
export interface ListAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Available agent status types.</p>
   * @public
   */
  AgentStatusTypes?: AgentStatusType[];
}

/**
 * @public
 */
export interface ListAgentStatusResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A summary of agent statuses.</p>
   * @public
   */
  AgentStatusSummaryList?: AgentStatusSummary[];
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to get the association status.</p>
   * @public
   */
  DataSetId?: string;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsResponse {
  /**
   * <p>An array of successful results: <code>DataSetId</code>, <code>TargetAccountId</code>,
   *     <code>ResourceShareId</code>, <code>ResourceShareArn</code>. This is a paginated API, so
   *     <code>nextToken</code> is given if there are more results to be returned.</p>
   * @public
   */
  Results?: AnalyticsDataAssociationResult[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApprovedOriginsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListApprovedOriginsResponse {
  /**
   * <p>The approved origins.</p>
   * @public
   */
  Origins?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>A summary of a given authentication profile.</p>
 * @public
 */
export interface AuthenticationProfileSummary {
  /**
   * <p>The unique identifier of the authentication profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the authentication profile summary.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the authentication profile summary.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Shows whether the authentication profile is the default authentication profile for the
   *     Amazon Connect instance. The default authentication profile applies to all agents in an
   *     Amazon Connect instance, unless overridden by another authentication profile.</p>
   * @public
   */
  IsDefault?: boolean;

  /**
   * <p>The timestamp when the authentication profile summary was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region when the authentication profile summary was last
   *    modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesResponse {
  /**
   * <p>A summary of a given authentication profile.</p>
   * @public
   */
  AuthenticationProfileSummaryList?: AuthenticationProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The version of Amazon Lex or Amazon Lex V2.</p>
   * @public
   */
  LexVersion: LexVersion | undefined;
}

/**
 * <p>Configuration information of an Amazon Lex or Amazon Lex V2 bot.</p>
 * @public
 */
export interface LexBotConfig {
  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot;

  /**
   * <p>Configuration information of an Amazon Lex V2 bot.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots
   *    associated with the specified instance.</p>
   * @public
   */
  LexBots?: LexBotConfig[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactEvaluationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Summary information about a contact evaluation.</p>
 * @public
 */
export interface EvaluationSummary {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  EvaluationFormTitle: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The status of the contact evaluation.</p>
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * <p>The overall score of the contact evaluation.</p>
   * @public
   */
  Score?: EvaluationScore;

  /**
   * <p>The timestamp for when the evaluation was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the evaluation was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListContactEvaluationsResponse {
  /**
   * <p>Provides details about a list of contact evaluations belonging to an instance.</p>
   * @public
   */
  EvaluationSummaryList: EvaluationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowModulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The state of the flow module.</p>
   * @public
   */
  ContactFlowModuleState?: ContactFlowModuleState;
}

/**
 * <p>Contains summary information about a flow.</p>
 * @public
 */
export interface ContactFlowModuleSummary {
  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of flow module.</p>
   * @public
   */
  State?: ContactFlowModuleState;
}

/**
 * @public
 */
export interface ListContactFlowModulesResponse {
  /**
   * <p>Information about the flow module.</p>
   * @public
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowTypes?: ContactFlowType[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @public
 */
export interface ContactFlowSummary {
  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowType?: ContactFlowType;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  ContactFlowState?: ContactFlowState;

  /**
   * <p>The status of the contact flow.</p>
   * @public
   */
  ContactFlowStatus?: ContactFlowStatus;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ContactFlowSummaryList?: ContactFlowSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The type of reference.</p>
   * @public
   */
  ReferenceTypes: ReferenceType[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   * @public
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
 * <p>Information about a reference when the <code>referenceType</code> is
 *    <code>ATTACHMENT</code>. Otherwise, null.</p>
 * @public
 */
export interface AttachmentReference {
  /**
   * <p>Identifier of the attachment reference.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The location path of the attachment reference.</p>
   * @public
   */
  Value?: string;

  /**
   * <p>Status of the attachment reference type.</p>
   * @public
   */
  Status?: ReferenceStatus;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
 *    Otherwise, null.</p>
 * @public
 */
export interface DateReference {
  /**
   * <p>Identifier of the date reference.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A valid date.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
 *    Otherwise, null.</p>
 * @public
 */
export interface EmailReference {
  /**
   * <p>Identifier of the email reference.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A valid email address.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
 *    Otherwise, null.</p>
 * @public
 */
export interface NumberReference {
  /**
   * <p>Identifier of the number reference.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A valid number.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
 *    Otherwise, null.</p>
 * @public
 */
export interface StringReference {
  /**
   * <p>Identifier of the string reference.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A valid string.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>The URL reference.</p>
 * @public
 */
export interface UrlReference {
  /**
   * <p>Identifier of the URL reference.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A valid URL.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Contains summary information about a reference. <code>ReferenceSummary</code> contains only
 *    one non null field between the URL and attachment based on the reference type.</p>
 * @public
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
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null.</p>
   * @public
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
   * <p>Information about the reference when the <code>referenceType</code> is
   *     <code>ATTACHMENT</code>. Otherwise, null.</p>
   * @public
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
   * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
   *    Otherwise, null.</p>
   * @public
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
   * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
   *    Otherwise, null.</p>
   * @public
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
   * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
   *    Otherwise, null.</p>
   * @public
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
   * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
   *    Otherwise, null.</p>
   * @public
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
   * <p>Information about the flows.</p>
   * @public
   */
  ReferenceSummaryList?: ReferenceSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode?: VocabularyLanguageCode;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Contains information about a default vocabulary.</p>
 * @public
 */
export interface DefaultVocabulary {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * <p>A list of default vocabularies.</p>
   * @public
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEvaluationFormsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Summary information about an evaluation form.</p>
 * @public
 */
export interface EvaluationFormSummary {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last activated.</p>
   * @public
   */
  LastActivatedTime?: Date;

  /**
   * <p> The Amazon Resource Name (ARN) of the user who last activated the evaluation form.</p>
   * @public
   */
  LastActivatedBy?: string;

  /**
   * <p>The version number of the latest evaluation form version.</p>
   * @public
   */
  LatestVersion: number | undefined;

  /**
   * <p>The version of the active evaluation form version.</p>
   * @public
   */
  ActiveVersion?: number;
}

/**
 * @public
 */
export interface ListEvaluationFormsResponse {
  /**
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   * @public
   */
  EvaluationFormSummaryList: EvaluationFormSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Summary information about an evaluation form.</p>
 * @public
 */
export interface EvaluationFormVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   * @public
   */
  Locked: boolean | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsResponse {
  /**
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   * @public
   */
  EvaluationFormVersionSummaryList: EvaluationFormVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFlowAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFlowAssociationsResponse {
  /**
   * <p>Summary of flow associations.</p>
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about hours of operation for a contact center.</p>
 * @public
 */
export interface HoursOfOperationSummary {
  /**
   * <p>The identifier of the hours of operation.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operation.</p>
   * @public
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * <p>The attribute types.</p>
   * @public
   */
  Attributes?: Attribute[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Information about the instance.</p>
 * @public
 */
export interface InstanceSummary {
  /**
   * <p>The identifier of the instance.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The identity management type of the instance.</p>
   * @public
   */
  IdentityManagementType?: DirectoryType;

  /**
   * <p>The alias of the instance.</p>
   * @public
   */
  InstanceAlias?: string;

  /**
   * <p>When the instance was created.</p>
   * @public
   */
  CreatedTime?: Date;

  /**
   * <p>The service role of the instance.</p>
   * @public
   */
  ServiceRole?: string;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  InstanceStatus?: InstanceStatus;

  /**
   * <p>Whether inbound calls are enabled.</p>
   * @public
   */
  InboundCallsEnabled?: boolean;

  /**
   * <p>Whether outbound calls are enabled.</p>
   * @public
   */
  OutboundCallsEnabled?: boolean;

  /**
   * <p>This URL allows contact center users to access the Amazon Connect admin website.</p>
   * @public
   */
  InstanceAccessUrl?: string;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>Information about the instances.</p>
   * @public
   */
  InstanceSummaryList?: InstanceSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfigs?: InstanceStorageConfig[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The integration type.</p>
   * @public
   */
  IntegrationType?: IntegrationType;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   * @public
   */
  IntegrationArn?: string;
}

/**
 * <p>Contains summary information about the associated AppIntegrations.</p>
 * @public
 */
export interface IntegrationAssociationSummary {
  /**
   * <p>The identifier for the AppIntegration association.</p>
   * @public
   */
  IntegrationAssociationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   * @public
   */
  IntegrationAssociationArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The integration type.</p>
   * @public
   */
  IntegrationType?: IntegrationType;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   * @public
   */
  IntegrationArn?: string;

  /**
   * <p>The URL for the external application.</p>
   * @public
   */
  SourceApplicationUrl?: string;

  /**
   * <p>The user-provided, friendly name for the external application.</p>
   * @public
   */
  SourceApplicationName?: string;

  /**
   * <p>The name of the source.</p>
   * @public
   */
  SourceType?: SourceType;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * <p>The associations.</p>
   * @public
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   * @public
   */
  LambdaFunctions?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10.
   *    </p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the
   *    specified instance.</p>
   * @public
   */
  LexBots?: LexBot[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of phone number.</p>
   *          <note>
   *             <p>We recommend using <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a> to
   *     return phone number types. While ListPhoneNumbers returns number types <code>UIFN</code>,
   *      <code>SHARED</code>, <code>THIRD_PARTY_TF</code>, and <code>THIRD_PARTY_DID</code>, it
   *     incorrectly lists them as <code>TOLL_FREE</code> or <code>DID</code>. </p>
   *          </note>
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[];

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a phone number for a contact center.</p>
 * @public
 */
export interface PhoneNumberSummary {
  /**
   * <p>The identifier of the phone number.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The phone number.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * <p>Information about the phone numbers.</p>
   * @public
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. If both <code>TargetArn</code> and <code>InstanceId</code> input are not
   *    provided, this API lists numbers claimed to all the Amazon Connect instances belonging to
   *    your account in the same Amazon Web Services Region as the request.</p>
   * @public
   */
  TargetArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. If both <code>TargetArn</code> and <code>InstanceId</code> are not
   *    provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in
   *    the same AWS Region as the request.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCodes?: PhoneNumberCountryCode[];

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberTypes?: PhoneNumberType[];

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   * @public
   */
  PhoneNumberPrefix?: string;
}

/**
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 * @public
 */
export interface ListPhoneNumbersSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   * @public
   */
  TargetArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string;

  /**
   * <p>The claimed phone number ARN that was previously imported from the external service, such as
   *     Amazon Pinpoint. If it is from Amazon Pinpoint, it looks like the ARN of the phone number
   *    that was imported from Amazon Pinpoint.</p>
   * @public
   */
  SourcePhoneNumberArn?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances
   *    or traffic distribution groups.</p>
   * @public
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[];
}

/**
 * @public
 */
export interface ListPredefinedAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. </p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Summary of a predefined attribute.</p>
 * @public
 */
export interface PredefinedAttributeSummary {
  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListPredefinedAttributesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Summary of the predefined attributes.</p>
   * @public
   */
  PredefinedAttributeSummaryList?: PredefinedAttributeSummary[];
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains information about the prompt.</p>
 * @public
 */
export interface PromptSummary {
  /**
   * <p>The identifier of the prompt.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   * @public
   */
  PromptSummaryList?: PromptSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a quick connect.</p>
 * @public
 */
export interface QuickConnectSummary {
  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the quick connect.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   * @public
   */
  QuickConnectType?: QuickConnectType;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueTypes?: QueueType[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a queue.</p>
 * @public
 */
export interface QueueSummary {
  /**
   * <p>The identifier of the queue.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueType?: QueueType;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   * @public
   */
  QueueSummaryList?: QueueSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   * @public
   */
  QuickConnectTypes?: QuickConnectType[];
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
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
  PostContactSummary: "PostContactSummary",
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The Contact Lens output type to be returned.</p>
   * @public
   */
  OutputType: RealTimeContactAnalysisOutputType | undefined;

  /**
   * <p>Enum with segment types . Each value corresponds to a segment type returned in the segments
   *    list of the API. Each segment type has its own structure. Different channels may have different
   *    sets of supported segment types.</p>
   * @public
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
 * <p>Object that describes attached file. </p>
 * @public
 */
export interface RealTimeContactAnalysisAttachment {
  /**
   * <p>A case-sensitive name of the attachment being uploaded. Can be redacted.</p>
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * <p>Describes the MIME file type of the attachment. For a list of supported file types, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature
   *     specifications</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>A unique identifier for the attachment.</p>
   * @public
   */
  AttachmentId: string | undefined;

  /**
   * <p>Status of the attachment.</p>
   * @public
   */
  Status?: ArtifactStatus;
}

/**
 * <p>Object describing time with which the segment is associated. It can have different
 *    representations of time. Currently supported: absoluteTime</p>
 * @public
 */
export type RealTimeContactAnalysisTimeData =
  | RealTimeContactAnalysisTimeData.AbsoluteTimeMember
  | RealTimeContactAnalysisTimeData.$UnknownMember;

/**
 * @public
 */
export namespace RealTimeContactAnalysisTimeData {
  /**
   * <p>Time represented in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *    2019-11-08T02:41:28.172Z.</p>
   * @public
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
 * <p>Segment containing list of attachments.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentAttachments {
  /**
   * <p>The identifier of the segment.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant. Can be redacted. </p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>List of objects describing an individual attachment.</p>
   * @public
   */
  Attachments: RealTimeContactAnalysisAttachment[] | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * <p>Begin and end offsets for a part of text.</p>
 * @public
 */
export interface RealTimeContactAnalysisCharacterInterval {
  /**
   * <p>The beginning of the character interval.</p>
   * @public
   */
  BeginOffsetChar: number | undefined;

  /**
   * <p>The end of the character interval.</p>
   * @public
   */
  EndOffsetChar: number | undefined;
}

/**
 * <p>Transcript representation containing Id and list of character intervals that are associated
 *    with analysis data. For example, this object within a
 *     <code>RealTimeContactAnalysisPointOfInterest</code> in <code>Category.MatchedDetails</code>
 *    would have character interval describing part of the text that matched category.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
  /**
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>List of character intervals within transcript content/text.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval;
}

/**
 * <p>The section of the contact transcript segment that category rule was detected.</p>
 * @public
 */
export interface RealTimeContactAnalysisPointOfInterest {
  /**
   * <p>List of the transcript items (segments) that are associated with a given point of interest.
   *   </p>
   * @public
   */
  TranscriptItems?: RealTimeContactAnalysisTranscriptItemWithCharacterOffsets[];
}

/**
 * <p>Provides information about the category rule that was matched.</p>
 * @public
 */
export interface RealTimeContactAnalysisCategoryDetails {
  /**
   * <p>List of PointOfInterest - objects describing a single match of a rule.</p>
   * @public
   */
  PointsOfInterest: RealTimeContactAnalysisPointOfInterest[] | undefined;
}

/**
 * <p>The matched category rules.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentCategories {
  /**
   * <p>Map between the name of the matched rule and RealTimeContactAnalysisCategoryDetails.</p>
   * @public
   */
  MatchedDetails: Record<string, RealTimeContactAnalysisCategoryDetails> | undefined;
}

/**
 * <p>Segment type describing a contact event.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentEvent {
  /**
   * <p>The identifier of the contact event.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId?: string;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole;

  /**
   * <p>The display name of the participant. Can be redacted.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>Type of the event. For example,
   *     <code>application/vnd.amazonaws.connect.event.participant.left</code>.</p>
   * @public
   */
  EventType: string | undefined;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;
}

/**
 * <p>Transcript representation containing Id, Content and list of character intervals that are
 *    associated with analysis data. For example, this object within an issue detected would describe
 *    both content that contains identified issue and intervals where that content is taken
 *    from.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemWithContent {
  /**
   * <p>Part of the transcript content that contains identified issue. Can be redacted</p>
   * @public
   */
  Content?: string;

  /**
   * <p>Transcript identifier. Matches the identifier from one of the TranscriptSegments.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Begin and end offsets for a part of text.</p>
   * @public
   */
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval;
}

/**
 * <p>Potential issues that are detected based on an artificial intelligence analysis of each turn
 *    in the conversation.</p>
 * @public
 */
export interface RealTimeContactAnalysisIssueDetected {
  /**
   * <p>List of the transcript items (segments) that are associated with a given issue.</p>
   * @public
   */
  TranscriptItems: RealTimeContactAnalysisTranscriptItemWithContent[] | undefined;
}

/**
 * <p>Segment type containing a list of detected issues.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentIssues {
  /**
   * <p>List of the issues detected.</p>
   * @public
   */
  IssuesDetected: RealTimeContactAnalysisIssueDetected[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisPostContactSummaryFailureCode = {
  FAILED_SAFETY_GUIDELINES: "FAILED_SAFETY_GUIDELINES",
  INSUFFICIENT_CONVERSATION_CONTENT: "INSUFFICIENT_CONVERSATION_CONTENT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ANALYSIS_CONFIGURATION: "INVALID_ANALYSIS_CONFIGURATION",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisPostContactSummaryFailureCode =
  (typeof RealTimeContactAnalysisPostContactSummaryFailureCode)[keyof typeof RealTimeContactAnalysisPostContactSummaryFailureCode];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisPostContactSummaryStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type RealTimeContactAnalysisPostContactSummaryStatus =
  (typeof RealTimeContactAnalysisPostContactSummaryStatus)[keyof typeof RealTimeContactAnalysisPostContactSummaryStatus];

/**
 * <p>Information about the post-contact summary for a real-time contact segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentPostContactSummary {
  /**
   * <p>The content of the summary.</p>
   * @public
   */
  Content?: string;

  /**
   * <p>Whether the summary was successfully COMPLETED or FAILED to be generated.</p>
   * @public
   */
  Status: RealTimeContactAnalysisPostContactSummaryStatus | undefined;

  /**
   * <p>If the summary failed to be generated, one of the following failure codes occurs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>QUOTA_EXCEEDED</code>: The number of concurrent analytics jobs reached your service
   *      quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CONVERSATION_CONTENT</code>: The conversation needs to have at least
   *      one turn from both the participants in order to generate the summary.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_SAFETY_GUIDELINES</code>: The generated summary cannot be provided because it
   *      failed to meet system safety guidelines.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_ANALYSIS_CONFIGURATION</code>: This code occurs when, for example, you're
   *      using a <a href="https://docs.aws.amazon.com/connect/latest/adminguide/supported-languages.html#supported-languages-contact-lens">language</a> that isn't supported by generative AI-powered post-contact summaries.
   *     </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code>: Internal system error.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureCode?: RealTimeContactAnalysisPostContactSummaryFailureCode;
}

/**
 * <p>Object describing redaction applied to the segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisTranscriptItemRedaction {
  /**
   * <p>List of character intervals each describing a part of the text that was redacted. For
   *     <code>OutputType.Raw</code>, part of the original text that contains data that can be redacted.
   *    For <code> OutputType.Redacted</code>, part of the string with redaction tag.</p>
   * @public
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
 * <p>The analyzed transcript segment.</p>
 * @public
 */
export interface RealTimeContactAnalysisSegmentTranscript {
  /**
   * <p>The identifier of the transcript.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the participant.</p>
   * @public
   */
  ParticipantId: string | undefined;

  /**
   * <p>The role of the participant. For example, is it a customer, agent, or system.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The content of the transcript. Can be redacted.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The type of content of the item. For example, <code>text/plain</code>.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>Field describing the time of the event. It can have different representations of time.</p>
   * @public
   */
  Time: RealTimeContactAnalysisTimeData | undefined;

  /**
   * <p>Object describing redaction that was applied to the transcript. If transcript has the field
   *    it means part of the transcript was redacted.</p>
   * @public
   */
  Redaction?: RealTimeContactAnalysisTranscriptItemRedaction;

  /**
   * <p>The sentiment detected for this piece of transcript.</p>
   * @public
   */
  Sentiment?: RealTimeContactAnalysisSentimentLabel;
}

/**
 * <p>An analyzed segment for a real-time analysis session.</p>
 * @public
 */
export type RealtimeContactAnalysisSegment =
  | RealtimeContactAnalysisSegment.AttachmentsMember
  | RealtimeContactAnalysisSegment.CategoriesMember
  | RealtimeContactAnalysisSegment.EventMember
  | RealtimeContactAnalysisSegment.IssuesMember
  | RealtimeContactAnalysisSegment.PostContactSummaryMember
  | RealtimeContactAnalysisSegment.TranscriptMember
  | RealtimeContactAnalysisSegment.$UnknownMember;

/**
 * @public
 */
export namespace RealtimeContactAnalysisSegment {
  /**
   * <p>The analyzed transcript segment.</p>
   * @public
   */
  export interface TranscriptMember {
    Transcript: RealTimeContactAnalysisSegmentTranscript;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>The matched category rules.</p>
   * @public
   */
  export interface CategoriesMember {
    Transcript?: never;
    Categories: RealTimeContactAnalysisSegmentCategories;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Segment type containing a list of detected issues.</p>
   * @public
   */
  export interface IssuesMember {
    Transcript?: never;
    Categories?: never;
    Issues: RealTimeContactAnalysisSegmentIssues;
    Event?: never;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Segment type describing a contact event.</p>
   * @public
   */
  export interface EventMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event: RealTimeContactAnalysisSegmentEvent;
    Attachments?: never;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>The analyzed attachments.</p>
   * @public
   */
  export interface AttachmentsMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments: RealTimeContactAnalysisSegmentAttachments;
    PostContactSummary?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the post-contact summary.</p>
   * @public
   */
  export interface PostContactSummaryMember {
    Transcript?: never;
    Categories?: never;
    Issues?: never;
    Event?: never;
    Attachments?: never;
    PostContactSummary: RealTimeContactAnalysisSegmentPostContactSummary;
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
    PostContactSummary?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Transcript: (value: RealTimeContactAnalysisSegmentTranscript) => T;
    Categories: (value: RealTimeContactAnalysisSegmentCategories) => T;
    Issues: (value: RealTimeContactAnalysisSegmentIssues) => T;
    Event: (value: RealTimeContactAnalysisSegmentEvent) => T;
    Attachments: (value: RealTimeContactAnalysisSegmentAttachments) => T;
    PostContactSummary: (value: RealTimeContactAnalysisSegmentPostContactSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RealtimeContactAnalysisSegment, visitor: Visitor<T>): T => {
    if (value.Transcript !== undefined) return visitor.Transcript(value.Transcript);
    if (value.Categories !== undefined) return visitor.Categories(value.Categories);
    if (value.Issues !== undefined) return visitor.Issues(value.Issues);
    if (value.Event !== undefined) return visitor.Event(value.Event);
    if (value.Attachments !== undefined) return visitor.Attachments(value.Attachments);
    if (value.PostContactSummary !== undefined) return visitor.PostContactSummary(value.PostContactSummary);
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
   * <p>The channel of the contact. <code>Voice</code> will not be returned. </p>
   * @public
   */
  Channel: RealTimeContactAnalysisSupportedChannel | undefined;

  /**
   * <p>Status of real-time contact analysis.</p>
   * @public
   */
  Status: RealTimeContactAnalysisStatus | undefined;

  /**
   * <p>An analyzed transcript or category.</p>
   * @public
   */
  Segments: RealtimeContactAnalysisSegment[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Thrown for analyzed content when requested OutputType was not enabled for a given contact.
 *    For example, if an OutputType.Raw was requested for a contact that had `RedactedOnly` Redaction
 *    policy set in Contact flow.</p>
 * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a routing profile queue.</p>
 * @public
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Delay: number | undefined;

  /**
   * <p>The channels this queue supports.</p>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a routing profile.</p>
 * @public
 */
export interface RoutingProfileSummary {
  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the routing profile.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus?: RulePublishStatus;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName?: EventSourceName;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A list of <code>ActionTypes</code> associated with a rule. </p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * <p>A list of ActionTypes associated with a rule. </p>
   * @public
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The timestamp for when the rule was created. </p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the rule was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>Summary information about a rule.</p>
   * @public
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Configuration information of the security key.</p>
 * @public
 */
export interface SecurityKey {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string;

  /**
   * <p>The key of the security key.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>When the security key was created.</p>
   * @public
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * <p>The security keys.</p>
   * @public
   */
  SecurityKeys?: SecurityKey[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSecurityProfileApplicationsResponse {
  /**
   * <p>A list of the third-party application's metadata.</p>
   * @public
   */
  Applications?: Application[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * <p>The permissions granted to the security profile. For a complete list of valid permissions,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List
   *     of security profile permissions</a>.</p>
   * @public
   */
  Permissions?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains information about a security profile.</p>
 * @public
 */
export interface SecurityProfileSummary {
  /**
   * <p>The identifier of the security profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   * @public
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing
   *    profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeInstanceResponseFilterSensitiveLog = (obj: DescribeInstanceResponse): any => ({
  ...obj,
  ...(obj.Instance && { Instance: InstanceFilterSensitiveLog(obj.Instance) }),
});

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
