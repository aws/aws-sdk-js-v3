// smithy-typescript generated code
import type {
  AccessType,
  ActionType,
  AgentAvailabilityTimer,
  AgentStatusState,
  AgentStatusType,
  AIAgentType,
  AiUseCase,
  AllowedUserAction,
  ApplicationType,
  AttachedFileInvalidRequestExceptionReason,
  AttachedFileServiceQuotaExceededExceptionReason,
  AuthCodeEntityType,
  BehaviorType,
  Channel,
  ChannelWorkloadBehaviorType,
  ConfigurableNotificationPriority,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ContactInteractionType,
  ContactState,
  DataTableAttributeValueType,
  DataTableLockLevel,
  DataTableStatus,
  DeviceType,
  DirectoryType,
  EncryptionType,
  EndpointType,
  EntityType,
  EvaluationFormItemEnablementSourceType,
  EvaluationFormItemEnablementSourceValueType,
  EvaluationFormItemSourceValuesComparator,
  EvaluationFormLanguageCode,
  EvaluationFormMetricType,
  EvaluationFormMultiSelectQuestionDisplayMode,
  EvaluationFormQuestionAutomationAnswerSourceType,
  EvaluationFormScoringMode,
  EvaluationFormScoringStatus,
  EvaluationFormSingleSelectQuestionDisplayMode,
  EvaluationReviewNotificationRecipientType,
  EventSourceName,
  FailureReasonCode,
  FileStatusType,
  FileUseCaseType,
  FlowAssociationResourceType,
  FlowModuleType,
  HoursOfOperationDays,
  InstanceStorageResourceType,
  IntegrationType,
  ListFlowAssociationResourceType,
  LocaleCode,
  MetricFilterBooleanConditionComparison,
  MetricFilterNumberConditionComparison,
  MetricFilterStringConditionComparison,
  MetricStatus,
  MetricUnit,
  MultiSelectQuestionRuleCategoryAutomationCondition,
  NotFoundBehaviorType,
  NotificationContentType,
  NotificationDeliveryType,
  NumericQuestionPropertyAutomationLabel,
  OutboundStrategyType,
  OverrideDays,
  OverrideType,
  ParticipantRole,
  ParticipantState,
  PerformanceCategoryName,
  PreEvaluationFilterOperator,
  PreEvaluationFilterResourceType,
  PreEvaluationFilterType,
  QuickConnectType,
  RecurrenceFrequency,
  ReferenceStatus,
  ReferenceType,
  RehydrationType,
  RulePublishStatus,
  ScreenShareCapability,
  SingleSelectQuestionRuleCategoryAutomationCondition,
  SlaAssignmentType,
  SlaType,
  SourceType,
  StorageType,
  StringComparisonType,
  TrendIndicator,
  VideoCapability,
  VocabularyLanguageCode,
  VoiceEnhancementMode,
} from "./enums";

/**
 * Information about an action.
 *
 * @public
 */
export interface ActionSummary {
  /**
   * The action type.
   *
   * @public
   */
  ActionType: ActionType | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The version of the evaluation form to activate. If the version property is not provided, the latest version of the evaluation form is activated.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormResponse {
  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the evaluation form resource.
   *
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * Information about the email recipient
 *
 * @public
 */
export interface EmailRecipient {
  /**
   * Address of the email recipient.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * Display name of the email recipient.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * List of additional email addresses for an email contact.
 *
 * @public
 */
export interface AdditionalEmailRecipients {
  /**
   * List of additional TO email recipients for an email contact.
   *
   * @public
   */
  ToList?: EmailRecipient[] | undefined;

  /**
   * List of additional CC email recipients for an email contact.
   *
   * @public
   */
  CcList?: EmailRecipient[] | undefined;
}

/**
 * Configuration settings for after contact work (ACW) timeout.
 *
 * @public
 */
export interface AfterContactWorkConfig {
  /**
   * The ACW timeout duration in seconds. Minimum: 1 second. Maximum: 2,000,000 seconds (24 days). Enter 0 for indefinite ACW time.
   *
   * @public
   */
  AfterContactWorkTimeLimit?: number | undefined;
}

/**
 * Configuration settings for after contact work (ACW) timeout for a specific channel.
 *
 * @public
 */
export interface AfterContactWorkConfigPerChannel {
  /**
   * The channel for this ACW timeout configuration. Valid values: VOICE, CHAT, TASK, EMAIL.
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * The ACW timeout settings for this channel.
   *
   * @public
   */
  AfterContactWorkConfig: AfterContactWorkConfig | undefined;

  /**
   * The ACW timeout settings for agent-first callbacks. This setting only applies to the VOICE channel.
   *
   * @public
   */
  AgentFirstCallbackAfterContactWorkConfig?: AfterContactWorkConfig | undefined;
}

/**
 * Information about a traffic distribution.
 *
 * @public
 */
export interface Distribution {
  /**
   * The Amazon Web Services Region where the traffic is distributed.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The percentage of the traffic that is distributed, in increments of 10.
   *
   * @public
   */
  Percentage: number | undefined;
}

/**
 * The distribution of agents between the instance and its replica(s).
 *
 * @public
 */
export interface AgentConfig {
  /**
   * Information about traffic distributions.
   *
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * Contains information about a queue resource for which metrics are returned.
 *
 * @public
 */
export interface QueueReference {
  /**
   * The identifier of the queue.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about the [contact](https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html) associated to the user.
 *
 * @public
 */
export interface AgentContactReference {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The channel of the contact.
   *
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * How the contact was initiated.
   *
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * The [state of the contact](https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html).
   *
   * > **Note:** When `AgentContactState` is set to `CONNECTED_ONHOLD`, `StateStartTimestamp` is not changed. Instead, `StateStartTimestamp` reflects the time the contact was `CONNECTED` to the agent.
   *
   * @public
   */
  AgentContactState?: ContactState | undefined;

  /**
   * The epoch timestamp when the contact state started.
   *
   * @public
   */
  StateStartTimestamp?: Date | undefined;

  /**
   * The time at which the contact was connected to an agent.
   *
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;

  /**
   * Contains information about a queue resource for which metrics are returned.
   *
   * @public
   */
  Queue?: QueueReference | undefined;
}

/**
 * Countdown timer configuration after the agent accepted the contact.
 *
 * @public
 */
export interface PostAcceptTimeoutConfig {
  /**
   * Duration in seconds for the countdown timer after the agent accepted the contact.
   *
   * @public
   */
  DurationInSeconds: number | undefined;
}

/**
 * Information about agent-first preview mode outbound strategy configuration.
 *
 * @public
 */
export interface Preview {
  /**
   * Countdown timer configuration after the agent accepted the preview outbound contact.
   *
   * @public
   */
  PostAcceptTimeoutConfig: PostAcceptTimeoutConfig | undefined;

  /**
   * The actions the agent can perform after accepting the preview outbound contact.
   *
   * @public
   */
  AllowedUserActions: AllowedUserAction[] | undefined;
}

/**
 * Information about agent-first outbound strategy configuration.
 *
 * @public
 */
export interface AgentFirst {
  /**
   * Information about preview configuration of agent first outbound strategy
   *
   * @public
   */
  Preview?: Preview | undefined;
}

/**
 * Information about an agent hierarchy group.
 *
 * @public
 */
export interface AgentHierarchyGroup {
  /**
   * The Amazon Resource Name (ARN) of the group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A structure that defines search criteria for contacts using agent hierarchy group levels. For more information about agent hierarchies, see [Set Up Agent Hierarchies](https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html) in the *Connect Customer Administrator Guide*.
 *
 * @public
 */
export interface AgentHierarchyGroups {
  /**
   * The identifiers for level 1 hierarchy groups.
   *
   * @public
   */
  L1Ids?: string[] | undefined;

  /**
   * The identifiers for level 2 hierarchy groups.
   *
   * @public
   */
  L2Ids?: string[] | undefined;

  /**
   * The identifiers for level 3 hierarchy groups.
   *
   * @public
   */
  L3Ids?: string[] | undefined;

  /**
   * The identifiers for level 4 hierarchy groups.
   *
   * @public
   */
  L4Ids?: string[] | undefined;

  /**
   * The identifiers for level 5 hierarchy groups.
   *
   * @public
   */
  L5Ids?: string[] | undefined;
}

/**
 * The configuration for the allowed video and screen sharing capabilities for participants present over the call. For more information, see [Set up in-app, web, video calling, and screen sharing capabilities](https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html) in the *Connect Customer Administrator Guide*.
 *
 * @public
 */
export interface ParticipantCapabilities {
  /**
   * The configuration having the video and screen sharing capabilities for participants over the call.
   *
   * @public
   */
  Video?: VideoCapability | undefined;

  /**
   * The screen sharing capability that is enabled for the participant. `SEND` indicates the participant can share their screen.
   *
   * @public
   */
  ScreenShare?: ScreenShareCapability | undefined;
}

/**
 * Information regarding the device.
 *
 * @public
 */
export interface DeviceInfo {
  /**
   * Name of the platform that the participant used for the call.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * Version of the platform that the participant used for the call.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * Operating system that the participant used for the call.
   *
   * @public
   */
  OperatingSystem?: string | undefined;
}

/**
 * Information about the agent hierarchy. Hierarchies can be configured with up to five levels.
 *
 * @public
 */
export interface HierarchyGroups {
  /**
   * The group at level one of the agent hierarchy.
   *
   * @public
   */
  Level1?: AgentHierarchyGroup | undefined;

  /**
   * The group at level two of the agent hierarchy.
   *
   * @public
   */
  Level2?: AgentHierarchyGroup | undefined;

  /**
   * The group at level three of the agent hierarchy.
   *
   * @public
   */
  Level3?: AgentHierarchyGroup | undefined;

  /**
   * The group at level four of the agent hierarchy.
   *
   * @public
   */
  Level4?: AgentHierarchyGroup | undefined;

  /**
   * The group at level five of the agent hierarchy.
   *
   * @public
   */
  Level5?: AgentHierarchyGroup | undefined;
}

/**
 * Information about the state transition of a supervisor.
 *
 * @public
 */
export interface StateTransition {
  /**
   * The state of the transition.
   *
   * @public
   */
  State?: ParticipantState | undefined;

  /**
   * The date and time when the state started in UTC time.
   *
   * @public
   */
  StateStartTimestamp?: Date | undefined;

  /**
   * The date and time when the state ended in UTC time.
   *
   * @public
   */
  StateEndTimestamp?: Date | undefined;
}

/**
 * Information about the agent who accepted the contact.
 *
 * @public
 */
export interface AgentInfo {
  /**
   * The identifier of the agent who accepted the contact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The timestamp when the contact was accepted by the agent.
   *
   * @public
   */
  AcceptedByAgentTimestamp?: Date | undefined;

  /**
   * The timestamp when the agent finished previewing the contact.
   *
   * @public
   */
  PreviewEndTimestamp?: Date | undefined;

  /**
   * The timestamp when the contact was connected to the agent.
   *
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;

  /**
   * Agent pause duration for a contact in seconds.
   *
   * @public
   */
  AgentPauseDurationInSeconds?: number | undefined;

  /**
   * The agent hierarchy groups for the agent.
   *
   * @public
   */
  HierarchyGroups?: HierarchyGroups | undefined;

  /**
   * Information regarding Agent’s device.
   *
   * @public
   */
  DeviceInfo?: DeviceInfo | undefined;

  /**
   * The configuration for the allowed video and screen sharing capabilities for participants present over the call. For more information, see [Set up in-app, web, video calling, and screen sharing capabilities](https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Capabilities?: ParticipantCapabilities | undefined;

  /**
   * The difference in time, in whole seconds, between `AfterContactWorkStartTimestamp` and `AfterContactWorkEndTimestamp`.
   *
   * @public
   */
  AfterContactWorkDuration?: number | undefined;

  /**
   * The date and time when the agent started doing After Contact Work for the contact, in UTC time.
   *
   * @public
   */
  AfterContactWorkStartTimestamp?: Date | undefined;

  /**
   * The date and time when the agent ended After Contact Work for the contact, in UTC time. In cases when agent finishes doing `AfterContactWork` for chat contacts and switches their activity status to offline or equivalent without clearing the contact in CCP, discrepancies may be noticed for `AfterContactWorkEndTimestamp`.
   *
   * @public
   */
  AfterContactWorkEndTimestamp?: Date | undefined;

  /**
   * The total hold duration in seconds initiated by the agent.
   *
   * @public
   */
  AgentInitiatedHoldDuration?: number | undefined;

  /**
   * List of `StateTransition` for a supervisor.
   *
   * @public
   */
  StateTransitions?: StateTransition[] | undefined;

  /**
   * The voice enhancement mode used by the agent as the call is ending. Valid values: VOICE_ISOLATION | NOISE_SUPPRESSION | NONE. A value of null indicates this mode has not yet been set for this user.
   *
   * @public
   */
  VoiceEnhancementMode?: VoiceEnhancementMode | undefined;

  /**
   * The Region where the agent was active when they handled the contact. For Amazon Connect Global Resiliency instances enabled for global routing, this indicates the Region in which the agent's session was established at the time of the contact.
   *
   * @public
   */
  ActiveRegion?: string | undefined;
}

/**
 * Contains information for score and potential quality issues for Audio
 *
 * @public
 */
export interface AudioQualityMetricsInfo {
  /**
   * Number measuring the estimated quality of the media connection.
   *
   * @public
   */
  QualityScore?: number | undefined;

  /**
   * List of potential issues causing degradation of quality on a media connection. If the service did not detect any potential quality issues the list is empty.
   *
   * Valid values: `HighPacketLoss` | `HighRoundTripTime` | `HighJitterBuffer`
   *
   * @public
   */
  PotentialQualityIssues?: string[] | undefined;
}

/**
 * Information about the quality of the Agent's media connection
 *
 * @public
 */
export interface AgentQualityMetrics {
  /**
   * Information about the audio quality of the Agent
   *
   * @public
   */
  Audio?: AudioQualityMetricsInfo | undefined;
}

/**
 * Can be used to define a list of preferred agents to target the contact to within the queue. Note that agents must have the queue in their routing profile in order to be offered the contact.
 *
 * @public
 */
export interface AgentsCriteria {
  /**
   * An object to specify a list of agents, by user ID.
   *
   * @public
   */
  AgentIds?: string[] | undefined;
}

/**
 * Contains information about an agent status.
 *
 * @public
 */
export interface AgentStatus {
  /**
   * The Amazon Resource Name (ARN) of the agent status.
   *
   * @public
   */
  AgentStatusARN?: string | undefined;

  /**
   * The identifier of the agent status.
   *
   * @public
   */
  AgentStatusId?: string | undefined;

  /**
   * The name of the agent status.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the agent status.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of agent status.
   *
   * @public
   */
  Type?: AgentStatusType | undefined;

  /**
   * The display order of the agent status.
   *
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * The state of the agent status.
   *
   * @public
   */
  State?: AgentStatusState | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * Information about the agent status assigned to the user.
 *
 * @public
 */
export interface AgentStatusIdentifier {
  /**
   * The Amazon Resource Name (ARN) of the agent status.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the agent status.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Information about the agent's status.
 *
 * @public
 */
export interface AgentStatusReference {
  /**
   * The start timestamp of the agent's status.
   *
   * @public
   */
  StatusStartTimestamp?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent's status.
   *
   * @public
   */
  StatusArn?: string | undefined;

  /**
   * The name of the agent status.
   *
   * @public
   */
  StatusName?: string | undefined;
}

/**
 * A leaf node condition which can be used to specify a string condition.
 *
 * @public
 */
export interface StringCondition {
  /**
   * The name of the field in the string condition.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * The value of the string.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The type of comparison to be made when evaluating the string condition.
   *
   * @public
   */
  ComparisonType?: StringComparisonType | undefined;
}

/**
 * A leaf node condition which can be used to specify a tag condition, for example, `HAVE BPO = 123`.
 *
 * @public
 */
export interface TagCondition {
  /**
   * The tag key in the tag condition.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * The tag value in the tag condition.
   *
   * @public
   */
  TagValue?: string | undefined;
}

/**
 * A list of conditions which would be applied together with an `AND` condition.
 *
 * @public
 */
export interface CommonAttributeAndCondition {
  /**
   * A leaf node condition which can be used to specify a tag condition.
   *
   * @public
   */
  TagConditions?: TagCondition[] | undefined;
}

/**
 * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` or `AND` (List of List) input where:
 *
 * - The top level list specifies conditions that need to be applied with `OR` operator.
 * - The inner list specifies conditions that need to be applied with `AND` operator.
 *
 * @public
 */
export interface ControlPlaneAttributeFilter {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: CommonAttributeAndCondition[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndCondition?: CommonAttributeAndCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a tag condition, for example, `HAVE BPO = 123`.
   *
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface AgentStatusSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * Summary information for an agent status.
 *
 * @public
 */
export interface AgentStatusSummary {
  /**
   * The identifier for an agent status.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the agent status.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the agent status.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the agent status.
   *
   * @public
   */
  Type?: AgentStatusType | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * Information about an AI agent that a security profile allows access to for Agent-to-Agent authorization.
 *
 * @public
 */
export interface AIAgent {
  /**
   * The Amazon Resource Name (ARN) of the AI agent.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of the AI agent. The valid value is `THIRD_PARTY`.
   *
   * @public
   */
  Type?: AIAgentType | undefined;
}

/**
 * Information of the AI agent involved in the contact.
 *
 * @public
 */
export interface AiAgentInfo {
  /**
   * The use case or scenario for which the AI agent is involved in the contact
   *
   * @public
   */
  AiUseCase?: AiUseCase | undefined;

  /**
   * The unique identifier that specifies both the AI agent ID and its version number that was involved in the contact
   *
   * @public
   */
  AiAgentVersionId?: string | undefined;

  /**
   * A boolean flag indicating whether the contact initially handled by this AI agent was escalated to a human agent.
   *
   * @public
   */
  AiAgentEscalated?: boolean | undefined;
}

/**
 * The AI agent that participates in the contact, including its identifier.
 *
 * @public
 */
export interface AiAgentInput {
  /**
   * The identifier of the AI agent that participates in the contact.
   *
   * @public
   */
  AiAgentId: string | undefined;
}

/**
 * The search criteria based on AI Agents metadata.
 *
 * @public
 */
export interface AiAgentSearchCriteria {
  /**
   * ID of the AI Agent that was involved in the contact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Version of the AI agent that was involved in the contact. ID is required if VersionNumber is passed.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * A boolean flag indicating whether the contact initially handled by this AI agent was escalated to a human agent.
   *
   * @public
   */
  AiAgentEscalated?: boolean | undefined;

  /**
   * The use case or scenario for which the AI agent is involved in the contact.
   *
   * @public
   */
  AiUseCase?: AiUseCase | undefined;
}

/**
 * AI Agent search criteria definitions.
 *
 * @public
 */
export interface AiAgentsCriteria {
  /**
   * The list of criteria based on AI Agent metadata.
   *
   * @public
   */
  Criteria?: AiAgentSearchCriteria[] | undefined;
}

/**
 * Configuration information of an email alias.
 *
 * @public
 */
export interface AliasConfiguration {
  /**
   * The email address ID.
   *
   * @public
   */
  EmailAddressId: string | undefined;
}

/**
 * Information about the capabilities enabled for participants of the contact.
 *
 * @public
 */
export interface AllowedCapabilities {
  /**
   * Information about the customer's video sharing capabilities.
   *
   * @public
   */
  Customer?: ParticipantCapabilities | undefined;

  /**
   * Information about the agent's video sharing capabilities.
   *
   * @public
   */
  Agent?: ParticipantCapabilities | undefined;
}

/**
 * Information about an allowed file extension.
 *
 * @public
 */
export interface AllowedExtension {
  /**
   * The file extension. The extension must be between 1 and 10 characters and can contain only alphanumeric characters, hyphens, and underscores.
   *
   * @public
   */
  Extension: string | undefined;
}

/**
 * A list of Flow Modules an AI Agent can invoke as a tool
 *
 * @public
 */
export interface FlowModule {
  /**
   * Only Type we support is MCP.
   *
   * @public
   */
  Type?: FlowModuleType | undefined;

  /**
   * If of Flow Modules invocable as tool
   *
   * @public
   */
  FlowModuleId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAnalyticsDataSetRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the dataset to associate with the target account.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The identifier of the target account. Use to associate a dataset to a different account than the one containing the Connect Customer instance. If not specified, by default this value is the Amazon Web Services account that has the Connect Customer instance.
   *
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAnalyticsDataSetResponse {
  /**
   * The identifier of the dataset that was associated.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The identifier of the target account.
   *
   * @public
   */
  TargetAccountId?: string | undefined;

  /**
   * The Resource Access Manager share ID that is generated.
   *
   * @public
   */
  ResourceShareId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Resource Access Manager share.
   *
   * @public
   */
  ResourceShareArn?: string | undefined;
}

/**
 * Reason why the request was invalid.
 *
 * @public
 */
export type InvalidRequestExceptionReason =
  | InvalidRequestExceptionReason.AttachedFileInvalidRequestExceptionReasonMember
  | InvalidRequestExceptionReason.$UnknownMember;

/**
 * @public
 */
export namespace InvalidRequestExceptionReason {
  /**
   * Reason why the StartAttachedFiledUpload request was invalid.
   *
   * @public
   */
  export interface AttachedFileInvalidRequestExceptionReasonMember {
    AttachedFileInvalidRequestExceptionReason: AttachedFileInvalidRequestExceptionReason;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AttachedFileInvalidRequestExceptionReason?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AttachedFileInvalidRequestExceptionReason: (value: AttachedFileInvalidRequestExceptionReason) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AssociateApprovedOriginRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The domain to add to your allow list.
   *
   * @public
   */
  Origin: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * The reason for the exception.
 *
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  | ServiceQuotaExceededExceptionReason.AttachedFileServiceQuotaExceededExceptionReasonMember
  | ServiceQuotaExceededExceptionReason.$UnknownMember;

/**
 * @public
 */
export namespace ServiceQuotaExceededExceptionReason {
  /**
   * Total file size of all files or total number of files exceeds the service quota
   *
   * @public
   */
  export interface AttachedFileServiceQuotaExceededExceptionReasonMember {
    AttachedFileServiceQuotaExceededExceptionReason: AttachedFileServiceQuotaExceededExceptionReason;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AttachedFileServiceQuotaExceededExceptionReason?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AttachedFileServiceQuotaExceededExceptionReason: (value: AttachedFileServiceQuotaExceededExceptionReason) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information of an Amazon Lex bot.
 *
 * @public
 */
export interface LexBot {
  /**
   * The name of the Amazon Lex bot.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services Region where the Amazon Lex bot was created.
   *
   * @public
   */
  LexRegion: string | undefined;
}

/**
 * Configuration information of an Amazon Lex V2 bot.
 *
 * @public
 */
export interface LexV2Bot {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Lex V2 bot.
   *
   * @public
   */
  AliasArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateBotRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Configuration information of an Amazon Lex bot.
   *
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * The Amazon Lex V2 bot to associate with the instance.
   *
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateContactWithUserRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier for the user. This can be the ID or the ARN of the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface AssociateContactWithUserResponse {}

/**
 * @public
 */
export interface AssociateDefaultVocabularyRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html)
   *
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * The identifier of the custom vocabulary. If this is empty, the default is set to none.
   *
   * @public
   */
  VocabularyId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDefaultVocabularyResponse {}

/**
 * @public
 */
export interface AssociateEmailAddressAliasRequest {
  /**
   * The identifier of the email address.
   *
   * @public
   */
  EmailAddressId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Configuration object that specifies which email address will serve as the alias. The specified email address must already exist in the Connect Customer instance and cannot already be configured as an alias or have an alias of its own.
   *
   * @public
   */
  AliasConfiguration: AliasConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateEmailAddressAliasResponse {}

/**
 * @public
 */
export interface AssociateFlowRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the resource.
   *
   * - Amazon Web Services End User Messaging SMS phone number ARN when using `SMS_PHONE_NUMBER`
   * - Amazon Web Services End User Messaging Social phone number ARN when using `WHATSAPP_MESSAGING_PHONE_NUMBER`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  FlowId: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface AssociateFlowResponse {}

/**
 * Contains configuration for the parent hours of operation.
 *
 * @public
 */
export interface ParentHoursOfOperationConfig {
  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateHoursOfOperationsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the child hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the parent hours of operation resources to associate with the child hours of operation resource.
   *
   * @public
   */
  ParentHoursOfOperationConfigs: ParentHoursOfOperationConfig[] | undefined;
}

/**
 * Configuration information of a Kinesis Data Firehose delivery stream.
 *
 * @public
 */
export interface KinesisFirehoseConfig {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * @public
   */
  FirehoseArn: string | undefined;
}

/**
 * Configuration information of a Kinesis data stream.
 *
 * @public
 */
export interface KinesisStreamConfig {
  /**
   * The Amazon Resource Name (ARN) of the data stream.
   *
   * @public
   */
  StreamArn: string | undefined;
}

/**
 * The encryption configuration.
 *
 * @public
 */
export interface EncryptionConfig {
  /**
   * The type of encryption.
   *
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * The full ARN of the encryption key.
   *
   * > **Note:**
   * >
   * > Be sure to provide the full ARN of the encryption key, not just the ID.
   * >
   * > Connect Customer supports only KMS keys with the default key spec of [`SYMMETRIC_DEFAULT`](https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default).
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * Configuration information of a Kinesis video stream.
 *
 * @public
 */
export interface KinesisVideoStreamConfig {
  /**
   * The prefix of the video stream.
   *
   * @public
   */
  Prefix: string | undefined;

  /**
   * The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.
   *
   * The default value is 0, indicating that the stream does not persist data.
   *
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * The encryption configuration.
   *
   * @public
   */
  EncryptionConfig: EncryptionConfig | undefined;
}

/**
 * Information about the Amazon Simple Storage Service (Amazon S3) storage type.
 *
 * @public
 */
export interface S3Config {
  /**
   * The S3 bucket name.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The S3 bucket prefix.
   *
   * @public
   */
  BucketPrefix: string | undefined;

  /**
   * The Amazon S3 encryption configuration.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * The storage configuration for the instance.
 *
 * @public
 */
export interface InstanceStorageConfig {
  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * A valid storage type.
   *
   * @public
   */
  StorageType: StorageType | undefined;

  /**
   * The S3 bucket configuration.
   *
   * @public
   */
  S3Config?: S3Config | undefined;

  /**
   * The configuration of the Kinesis video stream.
   *
   * @public
   */
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig | undefined;

  /**
   * The configuration of the Kinesis data stream.
   *
   * @public
   */
  KinesisStreamConfig?: KinesisStreamConfig | undefined;

  /**
   * The configuration of the Kinesis Firehose delivery stream.
   *
   * @public
   */
  KinesisFirehoseConfig?: KinesisFirehoseConfig | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A valid resource type. To [enable streaming for real-time analysis of contacts](https://docs.aws.amazon.com/connect/latest/adminguide/enable-contact-analysis-segment-streams.html), use the following types:
   *
   * - For chat contacts, use `REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS`.
   * - For voice contacts, use `REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS`.
   *
   * > **Note:**
   * >
   * > `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS` is deprecated, but it is still supported and will apply only to VOICE channel contacts. Use `REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS` for voice contacts moving forward.
   * >
   * > If you have previously associated a stream with `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS`, no action is needed to update the stream to `REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS`.
   *
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * A valid storage type.
   *
   * @public
   */
  StorageConfig: InstanceStorageConfig | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigResponse {
  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLambdaFunctionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLexBotRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The Amazon Lex bot to associate with the instance.
   *
   * @public
   */
  LexBot: LexBot | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberContactFlowRequest {
  /**
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * Configuration object that specifies an email address to be associated with a queue. This configuration contains the identifier of the email address that should be linked to the queue for routing email contacts.
 *
 * @public
 */
export interface EmailAddressConfig {
  /**
   * The identifier of the email address that should be associated with the queue. This email address must already exist in the Connect Customer instance and will be used to route incoming email contacts to the specified queue.
   *
   * @public
   */
  EmailAddressId: string | undefined;
}

/**
 * @public
 */
export interface AssociateQueueEmailAddressesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * Configuration list containing the email addresses to associate with the queue. Each configuration specifies an email address ID that should be linked to this queue for routing purposes.
   *
   * @public
   */
  EmailAddressesConfig: EmailAddressConfig[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateQueueQuickConnectsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The quick connects to associate with this queue.
   *
   * @public
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * Contains the channel and queue identifier for a routing profile.
 *
 * @public
 */
export interface RoutingProfileQueueReference {
  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
   *
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * Contains information about the queue and channel for manual assignment behaviour can be enabled.
 *
 * @public
 */
export interface RoutingProfileManualAssignmentQueueConfig {
  /**
   * Contains the channel and queue identifier for a routing profile.
   *
   * @public
   */
  QueueReference: RoutingProfileQueueReference | undefined;
}

/**
 * Contains information about the queue and channel for which priority and delay can be set.
 *
 * @public
 */
export interface RoutingProfileQueueConfig {
  /**
   * Contains information about a queue resource.
   *
   * @public
   */
  QueueReference: RoutingProfileQueueReference | undefined;

  /**
   * The order in which contacts are to be handled for the queue. For more information, see [Queues: priority and delay](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html).
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The delay, in seconds, a contact should be in the queue before they are routed to an available agent. For more information, see [Queues: priority and delay](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Delay: number | undefined;
}

/**
 * @public
 */
export interface AssociateRoutingProfileQueuesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the routing profile.
   *
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * The queues to associate with this routing profile.
   *
   * @public
   */
  QueueConfigs?: RoutingProfileQueueConfig[] | undefined;

  /**
   * The manual assignment queues to associate with this routing profile.
   *
   * > **Note:** For voice contacts, manual assignment supports only agent-first callback contacts. Chat, email, and task contacts are fully supported.
   *
   * @public
   */
  ManualAssignmentQueueConfigs?: RoutingProfileManualAssignmentQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A valid security key in PEM format as a String.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyResponse {
  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * Security profile items.
 *
 * @public
 */
export interface SecurityProfileItem {
  /**
   * Id of a security profile item.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityProfilesRequest {
  /**
   * The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * List of Security Profile Object.
   *
   * @public
   */
  SecurityProfiles: SecurityProfileItem[] | undefined;

  /**
   * Only supported type is AI_AGENT.
   *
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * Arn of a Q in Connect AI Agent.
   *
   * @public
   */
  EntityArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group.
   *
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * The identifier of the user account. This can be the ID or the ARN of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserResponse {}

/**
 * Information about proficiency of a user.
 *
 * @public
 */
export interface UserProficiency {
  /**
   * The name of user's proficiency. You must use name of predefined attribute present in the Connect Customer instance.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value of user's proficiency. You must use value of predefined attribute present in the Connect Customer instance.
   *
   * @public
   */
  AttributeValue: string | undefined;

  /**
   * The level of the proficiency. The valid values are 1, 2, 3, 4 and 5.
   *
   * @public
   */
  Level: number | undefined;
}

/**
 * @public
 */
export interface AssociateUserProficienciesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN of the instance).
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the user account.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The proficiencies to associate with the user.
   *
   * @public
   */
  UserProficiencies: UserProficiency[] | undefined;
}

/**
 * @public
 */
export interface AssociateWorkspaceRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the workspace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources to associate with the workspace. Valid resource types are users and routing profiles.
   *
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * Contains information about a resource that failed to be associated with a workspace in a batch operation.
 *
 * @public
 */
export interface FailedBatchAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource that failed to be associated.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The error code indicating why the association failed.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * An error message describing why the association failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Contains information about a resource that was successfully associated with a workspace in a batch operation.
 *
 * @public
 */
export interface SuccessfulBatchAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource that was successfully associated.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateWorkspaceResponse {
  /**
   * A list of resources that were successfully associated with the workspace.
   *
   * @public
   */
  SuccessfulList?: SuccessfulBatchAssociationSummary[] | undefined;

  /**
   * A list of resources that failed to be associated with the workspace, including error details.
   *
   * @public
   */
  FailedList?: FailedBatchAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAnalyticsDataSetRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * An array of dataset identifiers to associate.
   *
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * The identifier of the target account. Use to associate a dataset to a different account than the one containing the Connect Customer instance. If not specified, by default this value is the Amazon Web Services account that has the Connect Customer instance.
   *
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * This API is in preview release for Connect Customer and is subject to change.
 *
 * Information about associations that are successfully created: `DataSetId`, `TargetAccountId`, `ResourceShareId`, `ResourceShareArn`.
 *
 * @public
 */
export interface AnalyticsDataAssociationResult {
  /**
   * The identifier of the dataset.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The identifier of the target account.
   *
   * @public
   */
  TargetAccountId?: string | undefined;

  /**
   * The Resource Access Manager share ID.
   *
   * @public
   */
  ResourceShareId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Resource Access Manager share.
   *
   * @public
   */
  ResourceShareArn?: string | undefined;

  /**
   * The Amazon Web Services Resource Access Manager status of association.
   *
   * @public
   */
  ResourceShareStatus?: string | undefined;
}

/**
 * This API is in preview release for Connect Customer and is subject to change.
 *
 * List of errors for dataset association failures.
 *
 * @public
 */
export interface ErrorResult {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The corresponding error message for the error code.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAnalyticsDataSetResponse {
  /**
   * Information about associations that are successfully created: `DataSetId`, `TargetAccountId`, `ResourceShareId`, `ResourceShareArn`.
   *
   * @public
   */
  Created?: AnalyticsDataAssociationResult[] | undefined;

  /**
   * A list of errors for datasets that aren't successfully associated with the target account.
   *
   * @public
   */
  Errors?: ErrorResult[] | undefined;
}

/**
 * Contains lock version information for different levels of a data table hierarchy. Used for optimistic locking to prevent concurrent modification conflicts. Each component has its own lock version that changes when that component is modified.
 *
 * @public
 */
export interface DataTableLockVersion {
  /**
   * The lock version for the data table itself. Used for optimistic locking and table versioning. Changes with each update to the table's metadata or structure.
   *
   * @public
   */
  DataTable?: string | undefined;

  /**
   * The lock version for a specific attribute. When the ValueLockLevel is ATTRIBUTE, this version changes when any value for the attribute changes. For other lock levels, it only changes when the attribute's properties are directly updated.
   *
   * @public
   */
  Attribute?: string | undefined;

  /**
   * The lock version for a specific set of primary values (record). This includes the default record even if the table does not have any primary attributes. Used for record-level locking.
   *
   * @public
   */
  PrimaryValues?: string | undefined;

  /**
   * The lock version for a specific value. Changes each time the individual value is modified. Used for the finest-grained locking control.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Represents a primary key value used to identify a specific record in a data table. Primary values are used in combination to create unique record identifiers when a table has multiple primary attributes.
 *
 * @public
 */
export interface PrimaryValue {
  /**
   * The name of the primary attribute that this value belongs to.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The actual value for the primary attribute. Must be provided as a string regardless of the attribute's value type. Primary values cannot be expressions and must be explicitly specified.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A data table value.
 *
 * @public
 */
export interface DataTableValue {
  /**
   * The value's primary values.
   *
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * The value's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value's value.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The value's lock version.
   *
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * The value's last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The value's last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateDataTableValueRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table. Must also accept the table ARN with or without a version alias. If no alias is provided, the default behavior is identical to providing the $LATEST alias.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * A list of values to create. Each value must specify the attribute name and optionally primary values if the table has primary attributes.
   *
   * @public
   */
  Values: DataTableValue[] | undefined;
}

/**
 * A batch create data table value failure result.
 *
 * @public
 */
export interface BatchCreateDataTableValueFailureResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * A batch create data table value success result.
 *
 * @public
 */
export interface BatchCreateDataTableValueSuccessResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's record ID.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * The result's lock version.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchCreateDataTableValueResponse {
  /**
   * A list of successfully created values with their identifiers and lock versions.
   *
   * @public
   */
  Successful: BatchCreateDataTableValueSuccessResult[] | undefined;

  /**
   * A list of values that failed to be created with error messages explaining the failure reason.
   *
   * @public
   */
  Failed: BatchCreateDataTableValueFailureResult[] | undefined;
}

/**
 * A data table delete value identifier.
 *
 * @public
 */
export interface DataTableDeleteValueIdentifier {
  /**
   * The identifier's primary values.
   *
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * The identifier's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The identifier's lock version.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDataTableValueRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table. Must also accept the table ARN with or without a version alias.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * A list of value identifiers to delete, each specifying primary values, attribute name, and lock version information.
   *
   * @public
   */
  Values: DataTableDeleteValueIdentifier[] | undefined;
}

/**
 * A batch delete data table value failure result.
 *
 * @public
 */
export interface BatchDeleteDataTableValueFailureResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * A batch delete data table value success result.
 *
 * @public
 */
export interface BatchDeleteDataTableValueSuccessResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's lock version.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDataTableValueResponse {
  /**
   * A list of successfully deleted values with their identifiers and updated lock versions.
   *
   * @public
   */
  Successful: BatchDeleteDataTableValueSuccessResult[] | undefined;

  /**
   * A list of values that failed to be deleted with error messages explaining the failure reason.
   *
   * @public
   */
  Failed: BatchDeleteDataTableValueFailureResult[] | undefined;
}

/**
 * A data table value identifier.
 *
 * @public
 */
export interface DataTableValueIdentifier {
  /**
   * The identifier's primary values.
   *
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * The identifier's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeDataTableValueRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table. Must also accept the table ARN with or without a version alias.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * A list of value identifiers to retrieve, each specifying primary values and attribute names.
   *
   * @public
   */
  Values: DataTableValueIdentifier[] | undefined;
}

/**
 * A batch describe data table value failure result.
 *
 * @public
 */
export interface BatchDescribeDataTableValueFailureResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * A primary value response.
 *
 * @public
 */
export interface PrimaryValueResponse {
  /**
   * The value's attribute name.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value's attribute ID.
   *
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * The value's value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A batch describe data table value success result.
 *
 * @public
 */
export interface BatchDescribeDataTableValueSuccessResult {
  /**
   * The result's record ID.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * The result's attribute ID.
   *
   * @public
   */
  AttributeId: string | undefined;

  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValueResponse[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The result's lock version.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;

  /**
   * The result's last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The result's last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeDataTableValueResponse {
  /**
   * A list of successfully retrieved values with their data, metadata, and lock version information.
   *
   * @public
   */
  Successful: BatchDescribeDataTableValueSuccessResult[] | undefined;

  /**
   * A list of values that failed to be retrieved with error messages explaining the failure reason.
   *
   * @public
   */
  Failed: BatchDescribeDataTableValueFailureResult[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAnalyticsDataSetRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * An array of associated dataset identifiers to remove.
   *
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * The identifier of the target account. Use to disassociate a dataset from a different account than the one containing the Connect Customer instance. If not specified, by default this value is the Amazon Web Services account that has the Connect Customer instance.
   *
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAnalyticsDataSetResponse {
  /**
   * An array of successfully disassociated dataset identifiers.
   *
   * @public
   */
  Deleted?: string[] | undefined;

  /**
   * A list of errors for any datasets not successfully removed.
   *
   * @public
   */
  Errors?: ErrorResult[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttachedFileMetadataRequest {
  /**
   * The unique identifiers of the attached file resource.
   *
   * @public
   */
  FileIds: string[] | undefined;

  /**
   * The unique identifier of the Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The resource to which the attached file is (being) uploaded to. The supported resources are [Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html), [Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), and [Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
   *
   * > **Note:** This value must be a valid ARN.
   *
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * Error describing a failure to retrieve attached file metadata through BatchGetAttachedFileMetadata action.
 *
 * @public
 */
export interface AttachedFileError {
  /**
   * Status code describing the failure.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Why the attached file couldn't be retrieved.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The unique identifier of the attached file resource.
   *
   * @public
   */
  FileId?: string | undefined;
}

/**
 * Information on the identity that created the file.
 *
 * @public
 */
export type CreatedByInfo =
  | CreatedByInfo.AWSIdentityArnMember
  | CreatedByInfo.ConnectUserArnMember
  | CreatedByInfo.$UnknownMember;

/**
 * @public
 */
export namespace CreatedByInfo {
  /**
   * An agent ARN representing a [connect user](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-resources-for-iam-policies).
   *
   * @public
   */
  export interface ConnectUserArnMember {
    ConnectUserArn: string;
    AWSIdentityArn?: never;
    $unknown?: never;
  }

  /**
   * STS or IAM ARN representing the identity of API Caller. SDK users cannot populate this and this value is calculated automatically if `ConnectUserArn` is not provided.
   *
   * @public
   */
  export interface AWSIdentityArnMember {
    ConnectUserArn?: never;
    AWSIdentityArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ConnectUserArn?: never;
    AWSIdentityArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ConnectUserArn: (value: string) => T;
    AWSIdentityArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the attached file.
 *
 * @public
 */
export interface AttachedFile {
  /**
   * The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601 format: `yyyy-MM-ddThh:mm:ss.SSSZ`. For example, `2024-05-03T02:41:28.172Z`.
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * The unique identifier of the attached file resource (ARN).
   *
   * @public
   */
  FileArn: string | undefined;

  /**
   * The unique identifier of the attached file resource.
   *
   * @public
   */
  FileId: string | undefined;

  /**
   * A case-sensitive name of the attached file being uploaded.
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * The size of the attached file in bytes.
   *
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * The current status of the attached file.
   *
   * @public
   */
  FileStatus: FileStatusType | undefined;

  /**
   * Represents the identity that created the file.
   *
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * The use case for the file.
   *
   * @public
   */
  FileUseCaseType?: FileUseCaseType | undefined;

  /**
   * The resource to which the attached file is (being) uploaded to. The supported resources are [Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html), [Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), and [Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
   *
   * > **Note:** This value must be a valid ARN.
   *
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, `\{ "Tags": \{"key1":"value1", "key2":"value2"\} \}`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetAttachedFileMetadataResponse {
  /**
   * List of attached files that were successfully retrieved.
   *
   * @public
   */
  Files?: AttachedFile[] | undefined;

  /**
   * List of errors of attached files that could not be retrieved.
   *
   * @public
   */
  Errors?: AttachedFileError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFlowAssociationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A list of resource identifiers to retrieve flow associations.
   *
   * - Amazon Web Services End User Messaging SMS phone number ARN when using `SMS_PHONE_NUMBER`
   * - Amazon Web Services End User Messaging Social phone number ARN when using `WHATSAPP_MESSAGING_PHONE_NUMBER`
   *
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * The type of resource association.
   *
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;
}

/**
 * Information about flow associations.
 *
 * @public
 */
export interface FlowAssociationSummary {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  FlowId?: string | undefined;

  /**
   * The type of resource association.
   *
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface BatchGetFlowAssociationResponse {
  /**
   * Information about flow associations.
   *
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[] | undefined;
}

/**
 * Information associated with a campaign.
 *
 * @public
 */
export interface Campaign {
  /**
   * A unique identifier for a campaign.
   *
   * @public
   */
  CampaignId?: string | undefined;
}

/**
 * Information about the endpoint.
 *
 * @public
 */
export interface Endpoint {
  /**
   * Type of the endpoint.
   *
   * @public
   */
  Type?: EndpointType | undefined;

  /**
   * Address of the endpoint.
   *
   * @public
   */
  Address?: string | undefined;
}

/**
 * The config of the outbound strategy.
 *
 * @public
 */
export interface OutboundStrategyConfig {
  /**
   * The config of agent first outbound strategy.
   *
   * @public
   */
  AgentFirst?: AgentFirst | undefined;
}

/**
 * Information about the outbound strategy.
 *
 * @public
 */
export interface OutboundStrategy {
  /**
   * Type of the outbound strategy.
   *
   * @public
   */
  Type: OutboundStrategyType | undefined;

  /**
   * Config of the outbound strategy.
   *
   * @public
   */
  Config?: OutboundStrategyConfig | undefined;
}

/**
 * Request object with information to create a contact.
 *
 * @public
 */
export interface ContactDataRequest {
  /**
   * Endpoint associated with the Connect Customer instance from which outbound contact will be initiated for the campaign.
   *
   * @public
   */
  SystemEndpoint?: Endpoint | undefined;

  /**
   * Endpoint of the customer for which contact will be initiated.
   *
   * @public
   */
  CustomerEndpoint?: Endpoint | undefined;

  /**
   * Identifier to uniquely identify individual requests in the batch.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * The identifier of the queue associated with the Connect Customer instance in which contacts that are created will be queued.
   *
   * @public
   */
  QueueId?: string | undefined;

  /**
   * List of attributes to be stored in a contact.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * Structure to store information associated with a campaign.
   *
   * @public
   */
  Campaign?: Campaign | undefined;

  /**
   * Information about the outbound strategy.
   *
   * @public
   */
  OutboundStrategy?: OutboundStrategy | undefined;
}

/**
 * @public
 */
export interface BatchPutContactRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * List of individual contact requests.
   *
   * @public
   */
  ContactDataRequestList: ContactDataRequest[] | undefined;
}

/**
 * Request for which contact failed to be generated.
 *
 * @public
 */
export interface FailedRequest {
  /**
   * Request identifier provided in the API call in the ContactDataRequest to create a contact.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * Reason code for the failure.
   *
   * @public
   */
  FailureReasonCode?: FailureReasonCode | undefined;

  /**
   * Why the request to create a contact failed.
   *
   * @public
   */
  FailureReasonMessage?: string | undefined;
}

/**
 * Request for which contact was successfully created.
 *
 * @public
 */
export interface SuccessfulRequest {
  /**
   * Request identifier provided in the API call in the ContactDataRequest to create a contact.
   *
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * The contactId of the contact that was created successfully.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutContactResponse {
  /**
   * List of requests for which contact was successfully created.
   *
   * @public
   */
  SuccessfulRequestList?: SuccessfulRequest[] | undefined;

  /**
   * List of requests for which contact creation failed.
   *
   * @public
   */
  FailedRequestList?: FailedRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDataTableValueRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table. Must also accept the table ARN with or without a version alias.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * A list of values to update, each including the current lock version to ensure optimistic locking.
   *
   * @public
   */
  Values: DataTableValue[] | undefined;
}

/**
 * A batch update data table value failure result.
 *
 * @public
 */
export interface BatchUpdateDataTableValueFailureResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * A batch update data table value success result.
 *
 * @public
 */
export interface BatchUpdateDataTableValueSuccessResult {
  /**
   * The result's primary values.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The result's attribute name.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The result's lock version.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDataTableValueResponse {
  /**
   * A list of successfully updated values with their new lock versions and identifiers.
   *
   * @public
   */
  Successful: BatchUpdateDataTableValueSuccessResult[] | undefined;

  /**
   * A list of values that failed to be updated with error messages explaining the failure reason.
   *
   * @public
   */
  Failed: BatchUpdateDataTableValueFailureResult[] | undefined;
}

/**
 * @public
 */
export interface ClaimPhoneNumberRequest {
  /**
   * The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter `InstanceId` or `TargetArn`.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The identifier of the Connect Customer instance that phone numbers are claimed to. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance. You must enter `InstanceId` or `TargetArn`.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The phone number you want to claim. Phone numbers are formatted `[+] [country code] [subscriber number including area code]`.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * The description of the phone number.
   *
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * Pattern: `^[a-f0-9]\{8\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{12\}$`
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ClaimPhoneNumberResponse {
  /**
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the phone number.
   *
   * @public
   */
  PhoneNumberArn?: string | undefined;
}

/**
 * Request to CompleteAttachedFileUpload API
 * @public
 */
export interface CompleteAttachedFileUploadRequest {
  /**
   * The unique identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier of the attached file resource.
   *
   * @public
   */
  FileId: string | undefined;

  /**
   * The resource to which the attached file is (being) uploaded to. The supported resources are [Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html), [Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), and [Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
   *
   * > **Note:** This value must be a valid ARN.
   *
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * Response from CompleteAttachedFileUpload API
 * @public
 */
export interface CompleteAttachedFileUploadResponse {}

/**
 * @public
 */
export interface CreateAgentStatusRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the status.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the status.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of the status.
   *
   * @public
   */
  State: AgentStatusState | undefined;

  /**
   * The display order of the status.
   *
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentStatusResponse {
  /**
   * The Amazon Resource Name (ARN) of the agent status.
   *
   * @public
   */
  AgentStatusARN?: string | undefined;

  /**
   * The identifier of the agent status.
   *
   * @public
   */
  AgentStatusId?: string | undefined;
}

/**
 * @public
 */
export interface CreateAttachedFileRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The use case for the file.
   *
   * > **Important:** Only `VOICE_RECORDING` is supported.
   *
   * @public
   */
  FileUseCaseType: FileUseCaseType | undefined;

  /**
   * The S3 URI of the file to be attached. Only S3 source URIs are supported.
   *
   * @public
   */
  FileSourceUri: string | undefined;

  /**
   * The ARN of the completed voice contact to attach the file to. Only voice contacts with Telephony subtype are supported.
   *
   * > **Note:** This value must be a valid ARN.
   *
   * @public
   */
  AssociatedResourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, `\{ "Tags": \{"key1":"value1", "key2":"value2"\} \}`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Response from CreateAttachedFile API.
 * @public
 */
export interface CreateAttachedFileResponse {
  /**
   * The unique identifier of the attached file resource (ARN).
   *
   * @public
   */
  FileArn?: string | undefined;

  /**
   * The unique identifier of the attached file resource.
   *
   * @public
   */
  FileId?: string | undefined;

  /**
   * The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601 format: `yyyy-MM-ddThh:mm:ss.SSSZ`. For example, `2024-05-03T02:41:28.172Z`.
   *
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * The current status of the attached file. Valid values: `PROCESSING` | `APPROVED` | `REJECTED` | `FAILED`.
   *
   * @public
   */
  FileStatus?: FileStatusType | undefined;
}

/**
 * Contains the scope configuration for an authorization code. Defines the permissions and access boundaries for the session.
 *
 * @public
 */
export interface AuthScope {
  /**
   * The list of security profile identifiers to scope the session to. Maximum of 10 security profiles.
   *
   * @public
   */
  SecurityProfileIds?: string[] | undefined;

  /**
   * The type of entity to scope the session to.
   *
   * @public
   */
  EntityType: AuthCodeEntityType | undefined;

  /**
   * The identifier of the entity to scope the session to.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The name of the Customer Profiles domain to scope the session to.
   *
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthCodeRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The scope for the authorization code. Defines the permissions and access boundaries for the session.
   *
   * @public
   */
  Scope: AuthScope | undefined;

  /**
   * The maximum duration of the session, in minutes. Minimum value of 1440 (24 hours). Maximum value of 43200 (30 days). If no value is provided, the session will expire after 400 days.
   *
   * @public
   */
  MaxSessionDurationMinutes?: number | undefined;

  /**
   * The duration of inactivity, in minutes, after which the session expires. Minimum value of 1440 (24 hours). Maximum value of 20160 (14 days).
   *
   * @public
   */
  SessionInactivityDurationMinutes: number | undefined;
}

/**
 * @public
 */
export interface CreateAuthCodeResponse {
  /**
   * The authorization code to use for establishing a session.
   *
   * @public
   */
  AuthCode?: string | undefined;

  /**
   * The identifier of the session created with the authorization code.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The type of entity associated with the authorization code.
   *
   * @public
   */
  EntityType?: AuthCodeEntityType | undefined;

  /**
   * The identifier of the entity associated with the authorization code.
   *
   * @public
   */
  EntityId?: string | undefined;
}

/**
 * Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8 bytes across all references for a contact.
 *
 * @public
 */
export interface Reference {
  /**
   * A valid value for the reference. For example, for a URL reference, a formatted URL that is displayed to an agent in the Contact Control Panel (CCP).
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The type of the reference. `DATE` must be of type Epoch timestamp.
   *
   * @public
   */
  Type: ReferenceType | undefined;

  /**
   * Status of the attachment reference type.
   *
   * @public
   */
  Status?: ReferenceStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the reference
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Relevant details why the reference was not successfully created.
   *
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * The user details for the contact.
 *
 * @public
 */
export interface UserInfo {
  /**
   * The user identifier for the contact.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactResponse {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created contact.
   *
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the flow. For descriptions of the available types, see [Choose a flow type](https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Type: ContactFlowType | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The JSON string that represents the content of the flow. For an example, see [Example flow in Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html).
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256000.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * Indicates the flow status as either `SAVED` or `PUBLISHED`. The `PUBLISHED` status will initiate validation on the content. the `SAVED` status does not initiate validation of the content. `SAVED` | `PUBLISHED`.
   *
   * @public
   */
  Status?: ContactFlowStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowResponse {
  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * Indicates the checksum value of the latest published flow content.
   *
   * @public
   */
  FlowContentSha256?: string | undefined;
}

/**
 * Information about a problem detail.
 *
 * @public
 */
export interface ProblemDetail {
  /**
   * The problem detail's message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowAliasRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * The version of the flow.
   *
   * @public
   */
  ContactFlowVersion: number | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowAliasResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * The identifier of the alias.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * The external invocation configuration for the flow module
 *
 * @public
 */
export interface ExternalInvocationConfiguration {
  /**
   * Enable external invocation.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the flow module.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the flow module.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The JSON string that represents the content of the flow. For an example, see [Example flow in Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html).
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration settings for the flow module.
   *
   * @public
   */
  Settings?: string | undefined;

  /**
   * The external invocation configuration for the flow module.
   *
   * @public
   */
  ExternalInvocationConfiguration?: ExternalInvocationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleResponse {
  /**
   * The identifier of the flow module.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow module.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleAliasRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * The version of the flow module.
   *
   * @public
   */
  ContactFlowModuleVersion: number | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleAliasResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow module.
   *
   * @public
   */
  ContactFlowModuleArn?: string | undefined;

  /**
   * The identifier of the alias.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleVersionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The description of the flow module version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * Indicates the checksum value of the flow module content.
   *
   * @public
   */
  FlowModuleContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleVersionResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow module.
   *
   * @public
   */
  ContactFlowModuleArn?: string | undefined;

  /**
   * The version of the flow module.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowVersionRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The description of the flow version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * Indicates the checksum value of the flow content.
   *
   * @public
   */
  FlowContentSha256?: string | undefined;

  /**
   * The identifier of the flow version.
   *
   * @public
   */
  ContactFlowVersion?: number | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowVersionResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * The identifier of the flow version.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface CreateDataTableRequest {
  /**
   * The unique identifier for the Amazon Connect instance where the data table will be created.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name for the data table. Must conform to Connect human readable string specification and have 1-127 characters. Whitespace must be trimmed first. Must not start with the reserved case insensitive values 'connect:' and 'aws:'. Must be unique for the instance using case-insensitive comparison.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description for the data table. Must conform to Connect human readable string specification and have 0-250 characters. Whitespace must be trimmed first.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IANA timezone identifier to use when resolving time based dynamic values. Required even if no time slices are specified.
   *
   * @public
   */
  TimeZone: string | undefined;

  /**
   * The data level that concurrent value edits are locked on. One of DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE, and NONE. NONE is the default if unspecified. This determines how concurrent edits are handled when multiple users attempt to modify values simultaneously.
   *
   * @public
   */
  ValueLockLevel: DataTableLockLevel | undefined;

  /**
   * The status of the data table. One of PUBLISHED or SAVED. Required parameter that determines the initial state of the table.
   *
   * @public
   */
  Status: DataTableStatus | undefined;

  /**
   * Key value pairs for attribute based access control (TBAC or ABAC). Optional tags to apply to the data table for organization and access control purposes.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataTableResponse {
  /**
   * The unique identifier for the created data table. Does not include the version alias.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the created data table. Does not include the version alias.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The lock version information for the created data table, used for optimistic locking and table versioning.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * Defines enumeration validation for attribute values. Allows specifying a list of permitted values and whether custom values beyond the enumerated list are allowed.
 *
 * @public
 */
export interface ValidationEnum {
  /**
   * Boolean that defaults to false. When true, only values specified in the enum list are allowed. When false, custom values beyond the enumerated list are permitted.
   *
   * @public
   */
  Strict?: boolean | undefined;

  /**
   * A list of predefined values that are allowed for this attribute. These values are always permitted regardless of the Strict setting.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Defines validation rules for data table attribute values. Based on JSON Schema Draft 2020-12 with additional Connect-specific validations. Validation rules ensure data integrity and consistency across the data table.
 *
 * @public
 */
export interface Validation {
  /**
   * The minimum number of characters a text value can contain. Applies to TEXT value type and values within a TEXT_LIST. Must be less than or equal to MaxLength.
   *
   * @public
   */
  MinLength?: number | undefined;

  /**
   * The maximum number of characters a text value can contain. Applies to TEXT value type and values within a TEXT_LIST. Must be greater than or equal to MinLength.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * The minimum number of values in a list. Must be an integer greater than or equal to 0 and less than or equal to MaxValues. Applies to all list types.
   *
   * @public
   */
  MinValues?: number | undefined;

  /**
   * The maximum number of values in a list. Must be an integer greater than or equal to 0 and greater than or equal to MinValues. Applies to all list types.
   *
   * @public
   */
  MaxValues?: number | undefined;

  /**
   * Boolean that defaults to false. Applies to text lists and text primary attributes. When true, enforces case-insensitive uniqueness for primary attributes and allows case-insensitive lookups.
   *
   * @public
   */
  IgnoreCase?: boolean | undefined;

  /**
   * The smallest inclusive numeric value for NUMBER value type. Cannot be provided when ExclusiveMinimum is also provided. Must be less than or equal to Maximum and less than ExclusiveMaximum. Applies to NUMBER and values within NUMBER_LIST.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * The largest inclusive numeric value for NUMBER value type. Can be provided alongside ExclusiveMaximum where both operate independently. Must be greater than or equal to Minimum and greater than ExclusiveMinimum. Applies to NUMBER and values within NUMBER_LIST.
   *
   * @public
   */
  Maximum?: number | undefined;

  /**
   * The smallest exclusive numeric value for NUMBER value type. Can be provided alongside Minimum where both operate independently. Must be less than ExclusiveMaximum and Maximum. Applies to NUMBER and values within NUMBER_LIST.
   *
   * @public
   */
  ExclusiveMinimum?: number | undefined;

  /**
   * The largest exclusive numeric value for NUMBER value type. Can be provided alongside Maximum where both operate independently. Must be greater than ExclusiveMinimum and Minimum. Applies to NUMBER and values within NUMBER_LIST.
   *
   * @public
   */
  ExclusiveMaximum?: number | undefined;

  /**
   * Specifies that numeric values must be multiples of this number. Must be greater than 0. The result of dividing a value by this multiple must result in an integer. Applies to NUMBER and values within NUMBER_LIST.
   *
   * @public
   */
  MultipleOf?: number | undefined;

  /**
   * Defines enumeration constraints for attribute values. Can specify a list of allowed values and whether custom values are permitted beyond the enumerated list.
   *
   * @public
   */
  Enum?: ValidationEnum | undefined;
}

/**
 * @public
 */
export interface CreateDataTableAttributeRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table. Must also accept the table ARN with or without a version alias. If the version is provided as part of the identifier or ARN, the version must be one of the two available system managed aliases, $SAVED or $LATEST.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * The name for the attribute. Must conform to Connect human readable string specification and have 1-127 characters. Must not start with the reserved case insensitive values 'connect:' and 'aws:'. Whitespace trimmed before persisting. Must be unique for the data table using case-insensitive comparison.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of value allowed or the resultant type after the value's expression is evaluated. Must be one of TEXT, TEXT_LIST, NUMBER, NUMBER_LIST, and BOOLEAN.
   *
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * An optional description for the attribute. Must conform to Connect human readable string specification and have 0-250 characters. Whitespace trimmed before persisting.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional boolean that defaults to false. Determines if the value is used to identify a record in the table. Values for primary attributes must not be expressions.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * Optional validation rules for the attribute. Borrows heavily from JSON Schema - Draft 2020-12. The maximum length of arrays within validations and depth of validations is 5. There are default limits that apply to all types. Customer specified limits in excess of the default limits are not permitted.
   *
   * @public
   */
  Validation?: Validation | undefined;
}

/**
 * @public
 */
export interface CreateDataTableAttributeResponse {
  /**
   * The name of the created attribute since it also serves as the identifier. This could be different than the parameter passed in since it will be trimmed for whitespace.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier assigned to the created attribute.
   *
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * The lock version information for the data table and attribute, used for optimistic locking and versioning.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface CreateEmailAddressRequest {
  /**
   * The description of the email address.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The email address, including the domain.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The display name of email address
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEmailAddressResponse {
  /**
   * The identifier of the email address.
   *
   * @public
   */
  EmailAddressId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the email address.
   *
   * @public
   */
  EmailAddressArn?: string | undefined;
}

/**
 * The automatic evaluation configuration of an evaluation form.
 *
 * @public
 */
export interface EvaluationFormAutoEvaluationConfiguration {
  /**
   * When automated evaluation is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * An enablement expression source item.
 *
 * @public
 */
export interface EvaluationFormItemEnablementSource {
  /**
   * A type of source item.
   *
   * @public
   */
  Type: EvaluationFormItemEnablementSourceType | undefined;

  /**
   * A referenceId of the source item.
   *
   * @public
   */
  RefId?: string | undefined;
}

/**
 * An enablement expression source value.
 *
 * @public
 */
export interface EvaluationFormItemEnablementSourceValue {
  /**
   * A type of source item value.
   *
   * @public
   */
  Type: EvaluationFormItemEnablementSourceValueType | undefined;

  /**
   * A referenceId of the source value.
   *
   * @public
   */
  RefId?: string | undefined;
}

/**
 * An expression that defines a basic building block of conditional enablement.
 *
 * @public
 */
export interface EvaluationFormItemEnablementExpression {
  /**
   * A source item of enablement expression.
   *
   * @public
   */
  Source: EvaluationFormItemEnablementSource | undefined;

  /**
   * A list of values from source item.
   *
   * @public
   */
  Values: EvaluationFormItemEnablementSourceValue[] | undefined;

  /**
   * A comparator to be used against list of values.
   *
   * @public
   */
  Comparator: EvaluationFormItemSourceValuesComparator | undefined;
}

/**
 * Information about the metric configuration for an evaluation form question. Use this to associate a business outcome metric with a question.
 *
 * @public
 */
export interface EvaluationFormMetricConfiguration {
  /**
   * The type of metric. Currently, only `BUSINESS_OUTCOME` is supported.
   *
   * @public
   */
  MetricType: EvaluationFormMetricType | undefined;

  /**
   * The name of the metric. Valid values are:
   *
   * - `SALE_SUCCESS` – Sale success.
   * - `CSAT` – Customer satisfaction.
   * - `CHURN_PROPENSITY` – Churn propensity.
   * - `SELF_SERVICE_SUCCESS` – Self-service success.
   * - `PARTIAL_SELF_SERVICE_SUCCESS` – Partial self-service success.
   *
   * @public
   */
  MetricName: string | undefined;
}

/**
 * A question automation answer.
 *
 * @public
 */
export interface EvaluationFormQuestionAutomationAnswerSource {
  /**
   * The automation answer source type.
   *
   * @public
   */
  SourceType: EvaluationFormQuestionAutomationAnswerSourceType | undefined;
}

/**
 * Automation rule for multi-select questions based on rule categories.
 *
 * @public
 */
export interface MultiSelectQuestionRuleCategoryAutomation {
  /**
   * The category name for this automation rule.
   *
   * @public
   */
  Category: string | undefined;

  /**
   * The condition for this automation rule.
   *
   * @public
   */
  Condition: MultiSelectQuestionRuleCategoryAutomationCondition | undefined;

  /**
   * Reference IDs of options for this automation rule.
   *
   * @public
   */
  OptionRefIds: string[] | undefined;
}

/**
 * An automation option for a multi-select question.
 *
 * @public
 */
export type EvaluationFormMultiSelectQuestionAutomationOption =
  | EvaluationFormMultiSelectQuestionAutomationOption.RuleCategoryMember
  | EvaluationFormMultiSelectQuestionAutomationOption.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormMultiSelectQuestionAutomationOption {
  /**
   * Rule category configuration for this automation option.
   *
   * @public
   */
  export interface RuleCategoryMember {
    RuleCategory: MultiSelectQuestionRuleCategoryAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RuleCategory?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RuleCategory: (value: MultiSelectQuestionRuleCategoryAutomation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Automation configuration for multi-select questions.
 *
 * @public
 */
export interface EvaluationFormMultiSelectQuestionAutomation {
  /**
   * Automation options for the multi-select question.
   *
   * @public
   */
  Options?: EvaluationFormMultiSelectQuestionAutomationOption[] | undefined;

  /**
   * Reference IDs of default options.
   *
   * @public
   */
  DefaultOptionRefIds?: string[] | undefined;

  /**
   * A question automation answer.
   *
   * @public
   */
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource | undefined;
}

/**
 * Information about automatic fail configuration for an evaluation form.
 *
 * @public
 */
export interface AutomaticFailConfiguration {
  /**
   * The referenceId of the target section for auto failure.
   *
   * @public
   */
  TargetSection?: string | undefined;
}

/**
 * Information about the points configuration for an answer option.
 *
 * @public
 */
export interface QuestionOptionPointsConfiguration {
  /**
   * The point value assigned to the answer option.
   *
   * @public
   */
  PointValue: number | undefined;

  /**
   * The flag to mark the option as a bonus option.
   *
   * @public
   */
  IsBonus?: boolean | undefined;
}

/**
 * An option for a multi-select question in an evaluation form.
 *
 * @public
 */
export interface EvaluationFormMultiSelectQuestionOption {
  /**
   * Reference identifier for this option.
   *
   * @public
   */
  RefId: string | undefined;

  /**
   * Display text for this option.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The score assigned to the answer option.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   *
   * @public
   */
  AutomaticFail?: boolean | undefined;

  /**
   * Information about automatic fail configuration for an evaluation form.
   *
   * @public
   */
  AutomaticFailConfiguration?: AutomaticFailConfiguration | undefined;

  /**
   * The points configuration for point-based scoring.
   *
   * @public
   */
  PointsConfiguration?: QuestionOptionPointsConfiguration | undefined;
}

/**
 * Properties for a multi-select question in an evaluation form.
 *
 * @public
 */
export interface EvaluationFormMultiSelectQuestionProperties {
  /**
   * Options available for this multi-select question.
   *
   * @public
   */
  Options: EvaluationFormMultiSelectQuestionOption[] | undefined;

  /**
   * Display format for the multi-select question.
   *
   * @public
   */
  DisplayAs?: EvaluationFormMultiSelectQuestionDisplayMode | undefined;

  /**
   * Automation configuration for this multi-select question.
   *
   * @public
   */
  Automation?: EvaluationFormMultiSelectQuestionAutomation | undefined;
}

/**
 * Information about the property value used in automation of a numeric questions. Label values are associated with minimum and maximum values for the numeric question.
 *
 * - Sentiment scores have a minimum value of -5 and maximum value of 5.
 * - Duration labels, such as `NON_TALK_TIME`, `CONTACT_DURATION`, `AGENT_INTERACTION_DURATION`, `CUSTOMER_HOLD_TIME` have a minimum value of 0 and maximum value of 63072000.
 * - Percentages have a minimum value of 0 and maximum value of 100.
 * - `NUMBER_OF_INTERRUPTIONS` has a minimum value of 0 and maximum value of 1000.
 *
 * @public
 */
export interface NumericQuestionPropertyValueAutomation {
  /**
   * The property label of the automation.
   *
   * @public
   */
  Label: NumericQuestionPropertyAutomationLabel | undefined;
}

/**
 * Information about the automation configuration in numeric questions.
 *
 * @public
 */
export type EvaluationFormNumericQuestionAutomation =
  | EvaluationFormNumericQuestionAutomation.AnswerSourceMember
  | EvaluationFormNumericQuestionAutomation.PropertyValueMember
  | EvaluationFormNumericQuestionAutomation.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormNumericQuestionAutomation {
  /**
   * The property value of the automation.
   *
   * @public
   */
  export interface PropertyValueMember {
    PropertyValue: NumericQuestionPropertyValueAutomation;
    AnswerSource?: never;
    $unknown?: never;
  }

  /**
   * A source of automation answer for numeric question.
   *
   * @public
   */
  export interface AnswerSourceMember {
    PropertyValue?: never;
    AnswerSource: EvaluationFormQuestionAutomationAnswerSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PropertyValue?: never;
    AnswerSource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PropertyValue: (value: NumericQuestionPropertyValueAutomation) => T;
    AnswerSource: (value: EvaluationFormQuestionAutomationAnswerSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the option range used for scoring in numeric questions.
 *
 * @public
 */
export interface EvaluationFormNumericQuestionOption {
  /**
   * The minimum answer value of the range option.
   *
   * @public
   */
  MinValue: number | undefined;

  /**
   * The maximum answer value of the range option.
   *
   * @public
   */
  MaxValue: number | undefined;

  /**
   * The score assigned to answer values within the range option.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   *
   * @public
   */
  AutomaticFail?: boolean | undefined;

  /**
   * A configuration for automatic fail.
   *
   * @public
   */
  AutomaticFailConfiguration?: AutomaticFailConfiguration | undefined;

  /**
   * The points configuration for point-based scoring.
   *
   * @public
   */
  PointsConfiguration?: QuestionOptionPointsConfiguration | undefined;
}

/**
 * Information about properties for a numeric question in an evaluation form.
 *
 * @public
 */
export interface EvaluationFormNumericQuestionProperties {
  /**
   * The minimum answer value.
   *
   * @public
   */
  MinValue: number | undefined;

  /**
   * The maximum answer value.
   *
   * @public
   */
  MaxValue: number | undefined;

  /**
   * The scoring options of the numeric question.
   *
   * @public
   */
  Options?: EvaluationFormNumericQuestionOption[] | undefined;

  /**
   * The automation properties of the numeric question.
   *
   * @public
   */
  Automation?: EvaluationFormNumericQuestionAutomation | undefined;
}

/**
 * Information about the automation option based on a rule category for a single select question.
 *
 * @public
 */
export interface SingleSelectQuestionRuleCategoryAutomation {
  /**
   * The category name, as defined in Rules. This is equivalent to a conversational analytics rule with the same name: the automation option is applied based on whether that rule matched the contact. For more information about creating rules, see [Create rules](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-rules.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Category: string | undefined;

  /**
   * The condition to apply for the automation option. If the condition is `PRESENT`, then the option is applied when the contact data includes the category. Similarly, if the condition is `NOT_PRESENT`, then the option is applied when the contact data does not include the category.
   *
   * @public
   */
  Condition: SingleSelectQuestionRuleCategoryAutomationCondition | undefined;

  /**
   * The identifier of the answer option.
   *
   * @public
   */
  OptionRefId: string | undefined;
}

/**
 * Information about the automation option of a single select question.
 *
 * @public
 */
export type EvaluationFormSingleSelectQuestionAutomationOption =
  | EvaluationFormSingleSelectQuestionAutomationOption.RuleCategoryMember
  | EvaluationFormSingleSelectQuestionAutomationOption.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormSingleSelectQuestionAutomationOption {
  /**
   * The automation option based on a rule category for the single select question.
   *
   * @public
   */
  export interface RuleCategoryMember {
    RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RuleCategory?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RuleCategory: (value: SingleSelectQuestionRuleCategoryAutomation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the automation configuration in single select questions. Automation options are evaluated in order, and the first matched option is applied. If no automation option matches, and there is a default option, then the default option is applied.
 *
 * @public
 */
export interface EvaluationFormSingleSelectQuestionAutomation {
  /**
   * The automation options of the single select question.
   *
   * @public
   */
  Options?: EvaluationFormSingleSelectQuestionAutomationOption[] | undefined;

  /**
   * The identifier of the default answer option, when none of the automation options match the criteria.
   *
   * @public
   */
  DefaultOptionRefId?: string | undefined;

  /**
   * Automation answer source.
   *
   * @public
   */
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource | undefined;
}

/**
 * Information about the automation configuration in single select questions.
 *
 * @public
 */
export interface EvaluationFormSingleSelectQuestionOption {
  /**
   * The identifier of the answer option. An identifier must be unique within the question.
   *
   * @public
   */
  RefId: string | undefined;

  /**
   * The title of the answer option.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The score assigned to the answer option.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   *
   * @public
   */
  AutomaticFail?: boolean | undefined;

  /**
   * Whether automatic fail is configured on a single select question.
   *
   * @public
   */
  AutomaticFailConfiguration?: AutomaticFailConfiguration | undefined;

  /**
   * The points configuration for point-based scoring.
   *
   * @public
   */
  PointsConfiguration?: QuestionOptionPointsConfiguration | undefined;
}

/**
 * Information about the options in single select questions.
 *
 * @public
 */
export interface EvaluationFormSingleSelectQuestionProperties {
  /**
   * The answer options of the single select question.
   *
   * @public
   */
  Options: EvaluationFormSingleSelectQuestionOption[] | undefined;

  /**
   * The display mode of the single select question.
   *
   * @public
   */
  DisplayAs?: EvaluationFormSingleSelectQuestionDisplayMode | undefined;

  /**
   * The display mode of the single select question.
   *
   * @public
   */
  Automation?: EvaluationFormSingleSelectQuestionAutomation | undefined;
}

/**
 * Information about the automation configuration in text questions.
 *
 * @public
 */
export interface EvaluationFormTextQuestionAutomation {
  /**
   * Automation answer source.
   *
   * @public
   */
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource | undefined;
}

/**
 * Information about properties for a text question in an evaluation form.
 *
 * @public
 */
export interface EvaluationFormTextQuestionProperties {
  /**
   * The automation properties of the text question.
   *
   * @public
   */
  Automation?: EvaluationFormTextQuestionAutomation | undefined;
}

/**
 * Information about properties for a question in an evaluation form. The question type properties must be either for a numeric question or a single select question.
 *
 * @public
 */
export type EvaluationFormQuestionTypeProperties =
  | EvaluationFormQuestionTypeProperties.MultiSelectMember
  | EvaluationFormQuestionTypeProperties.NumericMember
  | EvaluationFormQuestionTypeProperties.SingleSelectMember
  | EvaluationFormQuestionTypeProperties.TextMember
  | EvaluationFormQuestionTypeProperties.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormQuestionTypeProperties {
  /**
   * The properties of the numeric question.
   *
   * @public
   */
  export interface NumericMember {
    Numeric: EvaluationFormNumericQuestionProperties;
    SingleSelect?: never;
    Text?: never;
    MultiSelect?: never;
    $unknown?: never;
  }

  /**
   * The properties of the numeric question.
   *
   * @public
   */
  export interface SingleSelectMember {
    Numeric?: never;
    SingleSelect: EvaluationFormSingleSelectQuestionProperties;
    Text?: never;
    MultiSelect?: never;
    $unknown?: never;
  }

  /**
   * The properties of the text question.
   *
   * @public
   */
  export interface TextMember {
    Numeric?: never;
    SingleSelect?: never;
    Text: EvaluationFormTextQuestionProperties;
    MultiSelect?: never;
    $unknown?: never;
  }

  /**
   * Properties for multi-select question types.
   *
   * @public
   */
  export interface MultiSelectMember {
    Numeric?: never;
    SingleSelect?: never;
    Text?: never;
    MultiSelect: EvaluationFormMultiSelectQuestionProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Numeric?: never;
    SingleSelect?: never;
    Text?: never;
    MultiSelect?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Numeric: (value: EvaluationFormNumericQuestionProperties) => T;
    SingleSelect: (value: EvaluationFormSingleSelectQuestionProperties) => T;
    Text: (value: EvaluationFormTextQuestionProperties) => T;
    MultiSelect: (value: EvaluationFormMultiSelectQuestionProperties) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about the points configuration for a question.
 *
 * @public
 */
export interface QuestionPointsConfiguration {
  /**
   * The maximum point value.
   *
   * @public
   */
  MaxPointValue?: number | undefined;

  /**
   * The minimum point value.
   *
   * @public
   */
  MinPointValue?: number | undefined;

  /**
   * The flag to mark the question as a bonus question.
   *
   * @public
   */
  IsBonus?: boolean | undefined;
}

/**
 * Information about a score threshold for a performance category.
 *
 * @public
 */
export interface EvaluationFormScoreThreshold {
  /**
   * The performance category name.
   *
   * @public
   */
  PerformanceCategory: PerformanceCategoryName | undefined;

  /**
   * The minimum score percentage for the performance category.
   *
   * @public
   */
  MinScorePercentage?: number | undefined;

  /**
   * The maximum score percentage for the performance category.
   *
   * @public
   */
  MaxScorePercentage?: number | undefined;
}

/**
 * Scoring configuration for a question in an evaluation form.
 *
 * @public
 */
export interface EvaluationFormQuestionScoringConfiguration {
  /**
   * The points configuration for point-based scoring.
   *
   * @public
   */
  PointsConfiguration?: QuestionPointsConfiguration | undefined;

  /**
   * The flag to exclude the question from scoring.
   *
   * @public
   */
  IsExcludedFromScoring?: boolean | undefined;

  /**
   * The score thresholds for performance categories.
   *
   * @public
   */
  ScoreThresholds?: EvaluationFormScoreThreshold[] | undefined;
}

/**
 * Language configuration for an evaluation form.
 *
 * @public
 */
export interface EvaluationFormLanguageConfiguration {
  /**
   * The language for the evaluation form.
   *
   * @public
   */
  FormLanguage?: EvaluationFormLanguageCode | undefined;
}

/**
 * The value information for an evaluation review notification recipient.
 *
 * @public
 */
export interface EvaluationReviewNotificationRecipientValue {
  /**
   * The user identifier for the notification recipient.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Information about a recipient who should be notified when an evaluation review is requested.
 *
 * @public
 */
export interface EvaluationReviewNotificationRecipient {
  /**
   * The type of notification recipient.
   *
   * @public
   */
  Type: EvaluationReviewNotificationRecipientType | undefined;

  /**
   * The value associated with the notification recipient type.
   *
   * @public
   */
  Value: EvaluationReviewNotificationRecipientValue | undefined;
}

/**
 * Configuration settings for evaluation reviews.
 *
 * @public
 */
export interface EvaluationReviewConfiguration {
  /**
   * List of recipients who should be notified when a review is requested.
   *
   * @public
   */
  ReviewNotificationRecipients: EvaluationReviewNotificationRecipient[] | undefined;

  /**
   * Number of days during which a request for review can be submitted for evaluations created from this form.
   *
   * @public
   */
  EligibilityDays?: number | undefined;
}

/**
 * Information about scoring strategy for an evaluation form.
 *
 * @public
 */
export interface EvaluationFormScoringStrategy {
  /**
   * The scoring mode of the evaluation form.
   *
   * @public
   */
  Mode: EvaluationFormScoringMode | undefined;

  /**
   * The scoring status of the evaluation form.
   *
   * @public
   */
  Status: EvaluationFormScoringStatus | undefined;

  /**
   * The score thresholds for performance categories.
   *
   * @public
   */
  ScoreThresholds?: EvaluationFormScoreThreshold[] | undefined;
}

/**
 * Configuration that specifies the target for an evaluation form.
 *
 * @public
 */
export interface EvaluationFormTargetConfiguration {
  /**
   * The contact interaction type for this evaluation form.
   *
   * @public
   */
  ContactInteractionType: ContactInteractionType | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationFormResponse {
  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the evaluation form resource.
   *
   * @public
   */
  EvaluationFormArn: string | undefined;
}

/**
 * The display configuration for an extraction definition.
 *
 * @public
 */
export interface ExtractionDefinitionDisplay {
  /**
   * The label displayed in the agent workspace for this extraction definition.
   *
   * @public
   */
  Label?: string | undefined;
}

/**
 * The behavior configuration when an extraction definition cannot find the target value.
 *
 * @public
 */
export interface ExtractionDefinitionNotFoundBehavior {
  /**
   * The behavior type. `USE_DEFAULT_VALUE` returns the specified default value. `OMIT` excludes the field from the output.
   *
   * @public
   */
  Behavior: NotFoundBehaviorType | undefined;

  /**
   * The default value to use when the behavior is `USE_DEFAULT_VALUE`.
   *
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * The extraction configuration that defines how data is extracted from customer interactions.
 *
 * @public
 */
export interface ExtractionConfiguration {
  /**
   * The prompt hint that guides the extraction. This text tells the generative AI model what data to look for in the customer interaction.
   *
   * @public
   */
  PromptHint: string | undefined;

  /**
   * The behavior when the extraction cannot find the specified data in the interaction.
   *
   * @public
   */
  NotFoundBehavior?: ExtractionDefinitionNotFoundBehavior | undefined;
}

/**
 * @public
 */
export interface CreateExtractionDefinitionRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique name of the extraction definition.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration that defines how data is extracted, including the prompt hint and not-found behavior.
   *
   * @public
   */
  ExtractionConfiguration: ExtractionConfiguration | undefined;

  /**
   * The display settings for the extraction definition, including the label shown in the agent workspace.
   *
   * @public
   */
  Display?: ExtractionDefinitionDisplay | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateExtractionDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the extraction definition.
   *
   * @public
   */
  ExtractionDefinitionArn: string | undefined;

  /**
   * The identifier of the extraction definition.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;
}

/**
 * The start time or end time for an hours of operation.
 *
 * @public
 */
export interface HoursOfOperationTimeSlice {
  /**
   * The hours.
   *
   * @public
   */
  Hours: number | undefined;

  /**
   * The minutes.
   *
   * @public
   */
  Minutes: number | undefined;
}

/**
 * Contains information about the hours of operation.
 *
 * @public
 */
export interface HoursOfOperationConfig {
  /**
   * The day that the hours of operation applies to.
   *
   * @public
   */
  Day: HoursOfOperationDays | undefined;

  /**
   * The start time that your contact center opens.
   *
   * @public
   */
  StartTime: HoursOfOperationTimeSlice | undefined;

  /**
   * The end time that your contact center closes.
   *
   * @public
   */
  EndTime: HoursOfOperationTimeSlice | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the hours of operation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the hours of operation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time zone of the hours of operation.
   *
   * @public
   */
  TimeZone: string | undefined;

  /**
   * Configuration information for the hours of operation: day, start time, and end time.
   *
   * @public
   */
  Config: HoursOfOperationConfig[] | undefined;

  /**
   * Configuration for parent hours of operations. Eg: ResourceArn.
   *
   * For more information about parent hours of operations, see [Link overrides from different hours of operation](https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html) in the *Administrator Guide*.
   *
   * @public
   */
  ParentHoursOfOperationConfigs?: ParentHoursOfOperationConfig[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationResponse {
  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the hours of operation.
   *
   * @public
   */
  HoursOfOperationArn?: string | undefined;
}

/**
 * The start time or end time for an hours of operation override.
 *
 * @public
 */
export interface OverrideTimeSlice {
  /**
   * The hours.
   *
   * @public
   */
  Hours: number | undefined;

  /**
   * The minutes.
   *
   * @public
   */
  Minutes: number | undefined;
}

/**
 * Information about the hours of operation override config: day, start time, and end time.
 *
 * @public
 */
export interface HoursOfOperationOverrideConfig {
  /**
   * The day that the hours of operation override applies to.
   *
   * @public
   */
  Day?: OverrideDays | undefined;

  /**
   * The start time when your contact center opens if overrides are applied.
   *
   * @public
   */
  StartTime?: OverrideTimeSlice | undefined;

  /**
   * The end time that your contact center closes if overrides are applied.
   *
   * @public
   */
  EndTime?: OverrideTimeSlice | undefined;
}

/**
 * Specifies the detailed pattern for event recurrence. Use this to define complex scheduling rules such as "every 2nd Tuesday of the month" or "every 3 months on the 15th".
 *
 * @public
 */
export interface RecurrencePattern {
  /**
   * Defines how often the pattern repeats. This is the base unit for the recurrence schedule and works in conjunction with the Interval field to determine the exact repetition sequence.
   *
   * @public
   */
  Frequency: RecurrenceFrequency | undefined;

  /**
   * Specifies the number of frequency units between each occurrence. Must be a positive integer.
   *
   * Examples: To repeat every week, set Interval=1 with WEEKLY frequency. To repeat every two months, set Interval=2 with MONTHLY frequency.
   *
   * @public
   */
  Interval: number | undefined;

  /**
   * Specifies which month the event should occur in (1-12, where 1=January, 12=December). Used with YEARLY frequency to schedule events in specific month.
   *
   * Note: It does not accept multiple values in the same list
   *
   * @public
   */
  ByMonth?: number[] | undefined;

  /**
   * Specifies which day of the month the event should occur on (1-31). Used with MONTHLY or YEARLY frequency to schedule events on specific date within a month.
   *
   * Examples: [15] for events on the 15th of each month, [-1] for events on the last day of month.
   *
   * Note: It does not accept multiple values in the same list. If a specified day doesn't exist in a particular month (e.g., day 31 in February), the event will be skipped for that month. This field cannot be used simultaneously with ByWeekdayOccurrence as they represent different scheduling approaches (specific dates vs. relative weekday positions).
   *
   * @public
   */
  ByMonthDay?: number[] | undefined;

  /**
   * Specifies which occurrence of a weekday within the month the event should occur on. Must be used with MONTHLY or YEARLY frequency.
   *
   * Example: 2 corresponds to second occurrence of the weekday in the month. -1 corresponds to last occurrence of the weekday in the month
   *
   * The weekday itself is specified separately in the HoursOfOperationConfig. Example: To schedule the recurring event for the 2nd Thursday of April every year, set ByWeekdayOccurrence=[2], Day=THURSDAY, ByMonth=[4], Frequency: YEARLY and INTERVAL=1.
   *
   * @public
   */
  ByWeekdayOccurrence?: number[] | undefined;
}

/**
 * Defines the recurrence configuration for overrides. This configuration uses a recurrence pattern to specify when and how frequently an event should repeat.
 *
 * @public
 */
export interface RecurrenceConfig {
  /**
   * The recurrence pattern that defines how the event repeats. Example: Frequency, Interval, ByMonth, ByMonthDay, ByWeekdayOccurrence
   *
   * @public
   */
  RecurrencePattern: RecurrencePattern | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationOverrideRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the hours of operation
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The name of the hours of operation override.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the hours of operation override.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration information for the hours of operation override: day, start time, and end time.
   *
   * @public
   */
  Config: HoursOfOperationOverrideConfig[] | undefined;

  /**
   * The date from when the hours of operation override is effective.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The date until when the hours of operation override is effective.
   *
   * @public
   */
  EffectiveTill: string | undefined;

  /**
   * Configuration for a recurring event.
   *
   * @public
   */
  RecurrenceConfig?: RecurrenceConfig | undefined;

  /**
   * Whether the override will be defined as a *standard* or as a *recurring event*.
   *
   * For more information about how override types are applied, see [Build your list of overrides](https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html) in the *Administrator Guide*.
   *
   * @public
   */
  OverrideType?: OverrideType | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationOverrideResponse {
  /**
   * The identifier for the hours of operation override.
   *
   * @public
   */
  HoursOfOperationOverrideId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * The idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The type of identity management for your Connect Customer users.
   *
   * @public
   */
  IdentityManagementType: DirectoryType | undefined;

  /**
   * The name for your instance.
   *
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * The identifier for the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Your contact center handles incoming contacts.
   *
   * @public
   */
  InboundCallsEnabled: boolean | undefined;

  /**
   * Your contact center allows outbound calls.
   *
   * @public
   */
  OutboundCallsEnabled: boolean | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, `\{ "tags": \{"key1":"value1", "key2":"value2"\} \}`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * The identifier for the instance.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationAssociationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of information to be ingested.
   *
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the integration.
   *
   * > **Note:** When integrating with Amazon Web Services End User Messaging, the Connect Customer and Amazon Web Services End User Messaging instances must be in the same account.
   *
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * The URL for the external application. This field is only required for the EVENT integration type.
   *
   * @public
   */
  SourceApplicationUrl?: string | undefined;

  /**
   * The name of the external application. This field is only required for the EVENT integration type.
   *
   * @public
   */
  SourceApplicationName?: string | undefined;

  /**
   * The type of the data source. This field is only required for the EVENT integration type.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationAssociationResponse {
  /**
   * The identifier for the integration association.
   *
   * @public
   */
  IntegrationAssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the association.
   *
   * @public
   */
  IntegrationAssociationArn?: string | undefined;
}

/**
 * A boolean comparison condition for metric filters.
 *
 * @public
 */
export interface MetricFilterBooleanCondition {
  /**
   * The comparison operator. Valid values: `IS_TRUE` (matches when the field is true) | `IS_FALSE` (matches when the field is false).
   *
   * @public
   */
  Comparison: MetricFilterBooleanConditionComparison | undefined;
}

/**
 * A numeric comparison condition for metric filters.
 *
 * @public
 */
export interface MetricFilterNumberCondition {
  /**
   * The comparison operator. Valid values: `LESSER` (less than) | `LESSER_OR_EQUAL` (less than or equal to) | `GREATER` (greater than) | `GREATER_OR_EQUAL` (greater than or equal to).
   *
   * @public
   */
  Comparison: MetricFilterNumberConditionComparison | undefined;

  /**
   * The numeric values to compare against.
   *
   * @public
   */
  Values: number[] | undefined;
}

/**
 * A string comparison condition for metric filters.
 *
 * @public
 */
export interface MetricFilterStringCondition {
  /**
   * The comparison operator. Valid values: `MATCHES_ANY` (matches any of the specified values) | `MATCHES_NONE` (matches none of the specified values).
   *
   * @public
   */
  Comparison: MetricFilterStringConditionComparison | undefined;

  /**
   * The string values to compare against.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A filter condition applied to a metric component in a calculation. Filters restrict the data included in the metric computation.
 *
 * @public
 */
export interface MetricFilter {
  /**
   * The key identifying the field to filter on.
   *
   * @public
   */
  MetricFilterKey: string | undefined;

  /**
   * Specifies whether the filter condition is negated. When set to `true`, the filter excludes matching data instead of including it.
   *
   * @public
   */
  Negate?: boolean | undefined;

  /**
   * A numeric comparison condition.
   *
   * @public
   */
  NumberCondition?: MetricFilterNumberCondition | undefined;

  /**
   * A string comparison condition.
   *
   * @public
   */
  StringCondition?: MetricFilterStringCondition | undefined;

  /**
   * A boolean comparison condition.
   *
   * @public
   */
  BooleanCondition?: MetricFilterBooleanCondition | undefined;
}

/**
 * Represents a component metric referenced in a custom metric calculation formula.
 *
 * @public
 */
export interface CalculationComponent {
  /**
   * The alias used to reference this component in the calculation expression.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The name of an AWS-managed metric used in this calculation component (for example, `CONTACTS_HANDLED`). Mutually exclusive with `MetricId`.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The ARN of an AWS-managed metric used in this calculation component. Mutually exclusive with `MetricName`.
   *
   * @public
   */
  MetricId?: string | undefined;

  /**
   * The filters applied to the calculation component.
   *
   * @public
   */
  MetricFilters?: MetricFilter[] | undefined;
}

/**
 * Contains the formula and component metrics that define a custom metric calculation.
 *
 * @public
 */
export interface MetricCalculation {
  /**
   * The list of component metrics referenced in the calculation formula. Each component has an alias used in the formula expression.
   *
   * @public
   */
  CalculationComponents: CalculationComponent[] | undefined;

  /**
   * The formula expression that defines how the metric is calculated. Uses component aliases (for example, `100 * SUM(M1) / SUM(M2)`).
   *
   * @public
   */
  Calculation: string | undefined;
}

/**
 * @public
 */
export interface CreateMetricRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The calculation definition for the metric, including the formula expression and the component metrics it references.
   *
   * @public
   */
  MetricCalculation: MetricCalculation | undefined;

  /**
   * The display unit for the metric's data.
   *
   * @public
   */
  Unit: MetricUnit | undefined;

  /**
   * The publish status of the metric. Set to `PUBLISHED` to make the metric available for use in dashboards and reports, or `SAVED` to keep it in draft state.
   *
   * @public
   */
  Status?: MetricStatus | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The description of the metric.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * How an increase in the metric value should be interpreted. Valid values: `POSITIVE`, `NEUTRAL`, `NEGATIVE`.
   *
   * @public
   */
  PositiveTrendIndicator?: TrendIndicator | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMetricResponse {
  /**
   * The Amazon Resource Name (ARN) of the metric.
   *
   * @public
   */
  MetricArn: string | undefined;

  /**
   * The identifier of the metric.
   *
   * @public
   */
  MetricId: string | undefined;
}

/**
 * @public
 */
export interface CreateNotificationRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The timestamp when the notification should expire and no longer be displayed to users. If not specified, defaults to one week from creation.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) identifying the recipients of the notification. Can include user ARNs or instance ARNs to target all users in an instance. Maximum of 200 recipients.
   *
   * @public
   */
  Recipients: string[] | undefined;

  /**
   * The priority level of the notification. Valid values are HIGH and LOW. High priority notifications are displayed above low priority notifications.
   *
   * @public
   */
  Priority?: ConfigurableNotificationPriority | undefined;

  /**
   * The localized content of the notification. A map where keys are locale codes and values are the notification text in that locale. Content supports links. Maximum 250 characters per locale.
   *
   * @public
   */
  Content: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, `\{ "Tags": \{"key1":"value1", "key2":"value2"\} \}`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The unique identifier for a notification.
   *
   * @deprecated (since 3/13/2026) PredefinedNotificationId is deprecated. Use ClientToken for idempotency.
   * @public
   */
  PredefinedNotificationId?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotificationResponse {
  /**
   * The unique identifier assigned to the created notification.
   *
   * @public
   */
  NotificationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created notification.
   *
   * @public
   */
  NotificationArn: string | undefined;
}

/**
 * The details to add for the participant.
 *
 * @public
 */
export interface ParticipantDetailsToAdd {
  /**
   * The role of the participant being added.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * The display name of the participant.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The configuration for the allowed video and screen sharing capabilities for participants present over the call. For more information, see [Set up in-app, web, video calling, and screen sharing capabilities](https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  ParticipantCapabilities?: ParticipantCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateParticipantRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer. Supports contacts in the CHAT channel and VOICE (WebRTC) channels. For WebRTC calls, this should be the initial contact ID that was generated when the contact was first created (from the StartWebRTCContact API) in the VOICE channel
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Information identifying the participant.
   *
   * > **Important:** The only valid value for `ParticipantRole` is `CUSTOM_BOT` for chat contact and `CUSTOMER` for voice contact.
   *
   * @public
   */
  ParticipantDetails: ParticipantDetailsToAdd | undefined;
}

/**
 * The credentials used by the participant.
 *
 * @public
 */
export interface ParticipantTokenCredentials {
  /**
   * The token used by the chat participant to call [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html). The participant token is valid for the lifetime of a chat participant.
   *
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * The expiration of the token. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  Expiry?: string | undefined;
}

/**
 * @public
 */
export interface CreateParticipantResponse {
  /**
   * The token used by the chat participant to call `CreateParticipantConnection`. The participant token is valid for the lifetime of a chat participant.
   *
   * @public
   */
  ParticipantCredentials?: ParticipantTokenCredentials | undefined;

  /**
   * The identifier for a chat participant. The participantId for a chat participant is the same throughout the chat lifecycle.
   *
   * @public
   */
  ParticipantId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePersistentContactAssociationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * This is the contactId of the current contact that the `CreatePersistentContactAssociation` API is being called from.
   *
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * The contactId chosen for rehydration depends on the type chosen.
   *
   * - `ENTIRE_PAST_SESSION`: Rehydrates a chat from the most recently terminated past chat contact of the specified past ended chat session. To use this type, provide the `initialContactId` of the past ended chat session in the `sourceContactId` field. In this type, Connect Customer determines what the most recent chat contact on the past ended chat session and uses it to start a persistent chat.
   * - `FROM_SEGMENT`: Rehydrates a chat from the specified past chat contact provided in the `sourceContactId` field.
   *
   * The actual contactId used for rehydration is provided in the response of this API.
   *
   * To illustrate how to use rehydration type, consider the following example: A customer starts a chat session. Agent a1 accepts the chat and a conversation starts between the customer and Agent a1. This first contact creates a contact ID **C1**. Agent a1 then transfers the chat to Agent a2. This creates another contact ID **C2**. At this point Agent a2 ends the chat. The customer is forwarded to the disconnect flow for a post chat survey that creates another contact ID **C3**. After the chat survey, the chat session ends. Later, the customer returns and wants to resume their past chat session. At this point, the customer can have following use cases:
   *
   * - **Use Case 1**: The customer wants to continue the past chat session but they want to hide the post chat survey. For this they will use the following configuration:
   *
   *   - **Configuration**
   *
   *     - SourceContactId = "C2"
   *     - RehydrationType = "FROM_SEGMENT"
   *   - **Expected behavior**
   *
   *     - This starts a persistent chat session from the specified past ended contact (C2). Transcripts of past chat sessions C2 and C1 are accessible in the current persistent chat session. Note that chat segment C3 is dropped from the persistent chat session.
   * - **Use Case 2**: The customer wants to continue the past chat session and see the transcript of the entire past engagement, including the post chat survey. For this they will use the following configuration:
   *
   *   - **Configuration**
   *
   *     - SourceContactId = "C1"
   *     - RehydrationType = "ENTIRE_PAST_SESSION"
   *   - **Expected behavior**
   *
   *     - This starts a persistent chat session from the most recently ended chat contact (C3). Transcripts of past chat sessions C3, C2 and C1 are accessible in the current persistent chat session.
   *
   * @public
   */
  RehydrationType: RehydrationType | undefined;

  /**
   * The contactId from which a persistent chat session must be started.
   *
   * @public
   */
  SourceContactId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePersistentContactAssociationResponse {
  /**
   * The contactId from which a persistent chat session is started. This field is populated only for persistent chat.
   *
   * @public
   */
  ContinuedFromContactId?: string | undefined;
}

/**
 * Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as controlling how a predefined attribute should be displayed in the Connect Customer admin website.
 *
 * @public
 */
export interface InputPredefinedAttributeConfiguration {
  /**
   * When this parameter is set to true, Connect Customer enforces strict validation on the specific values, if the values are predefined in attributes. The contact will store only valid and predefined values for the predefined attribute key.
   *
   * @public
   */
  EnableValueValidationOnAssociation?: boolean | undefined;
}

/**
 * Information about values of a predefined attribute.
 *
 * @public
 */
export type PredefinedAttributeValues =
  | PredefinedAttributeValues.StringListMember
  | PredefinedAttributeValues.$UnknownMember;

/**
 * @public
 */
export namespace PredefinedAttributeValues {
  /**
   * Predefined attribute values of type string list.
   *
   * @public
   */
  export interface StringListMember {
    StringList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePredefinedAttributeRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the predefined attribute.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values of the predefined attribute.
   *
   * @public
   */
  Values?: PredefinedAttributeValues | undefined;

  /**
   * Values that enable you to categorize your predefined attributes. You can use them in custom UI elements across the Connect Customer admin website.
   *
   * @public
   */
  Purposes?: string[] | undefined;

  /**
   * Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as controlling how a predefined attribute should be displayed in the Connect Customer admin website.
   *
   * @public
   */
  AttributeConfiguration?: InputPredefinedAttributeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the prompt.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the prompt.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the [GetPromptFile](https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html) API instead of providing S3 URIs.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * The Amazon Resource Name (ARN) of the prompt.
   *
   * @public
   */
  PromptARN?: string | undefined;

  /**
   * A unique identifier for the prompt.
   *
   * @public
   */
  PromptId?: string | undefined;
}

/**
 * The contact configuration for push notification registration.
 *
 * @public
 */
export interface ContactConfiguration {
  /**
   * The identifier of the contact within the Amazon Connect instance.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The role of the participant in the chat conversation.
   *
   * > **Note:** Only `CUSTOMER` is currently supported. Any other values other than `CUSTOMER` will result in an exception (4xx error).
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * Whether to include raw connect message in the push notification payload. Default is `False`.
   *
   * @public
   */
  IncludeRawMessage?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePushNotificationRegistrationRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Pinpoint application.
   *
   * @public
   */
  PinpointAppArn: string | undefined;

  /**
   * The push notification token issued by the Apple or Google gateways.
   *
   * @public
   */
  DeviceToken: string | undefined;

  /**
   * The device type to use when sending the message.
   *
   * @public
   */
  DeviceType: DeviceType | undefined;

  /**
   * The contact configuration for push notification registration.
   *
   * @public
   */
  ContactConfiguration: ContactConfiguration | undefined;
}

/**
 * @public
 */
export interface CreatePushNotificationRegistrationResponse {
  /**
   * The identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * The outbound caller ID name, number, and outbound whisper flow.
 *
 * @public
 */
export interface OutboundCallerConfig {
  /**
   * The caller ID name.
   *
   * @public
   */
  OutboundCallerIdName?: string | undefined;

  /**
   * The caller ID number.
   *
   * @public
   */
  OutboundCallerIdNumberId?: string | undefined;

  /**
   * The outbound whisper flow to be used during an outbound call.
   *
   * @public
   */
  OutboundFlowId?: string | undefined;
}

/**
 * The outbound email address ID.
 *
 * @public
 */
export interface OutboundEmailConfig {
  /**
   * The identifier of the email address.
   *
   * @public
   */
  OutboundEmailAddressId?: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the queue.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the queue.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The outbound caller ID name, number, and outbound whisper flow.
   *
   * @public
   */
  OutboundCallerConfig?: OutboundCallerConfig | undefined;

  /**
   * The outbound email address ID for a specified queue.
   *
   * @public
   */
  OutboundEmailConfig?: OutboundEmailConfig | undefined;

  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The maximum number of contacts that can be in the queue before it is considered full.
   *
   * @public
   */
  MaxContacts?: number | undefined;

  /**
   * The quick connects available to agents who are working the queue.
   *
   * @public
   */
  QuickConnectIds?: string[] | undefined;

  /**
   * Configuration list containing the email addresses to associate with the queue during creation. Each configuration specifies an email address ID that agents can select when handling email contacts in this queue.
   *
   * @public
   */
  EmailAddressesConfig?: EmailAddressConfig[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * @public
   */
  QueueArn?: string | undefined;

  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId?: string | undefined;
}

/**
 * Configuration for quick connect.
 *
 * @public
 */
export interface FlowQuickConnectConfig {
  /**
   * The contact flow ID for the quick connect configuration.
   *
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * Contains information about a phone number for a quick connect.
 *
 * @public
 */
export interface PhoneNumberQuickConnectConfig {
  /**
   * The phone number in E.164 format.
   *
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * Contains information about a queue for a quick connect. The flow must be of type Transfer to Queue.
 *
 * @public
 */
export interface QueueQuickConnectConfig {
  /**
   * The identifier for the queue.
   *
   * @public
   */
  QueueId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * Contains information about the quick connect configuration settings for a user. The contact flow must be of type Transfer to Agent.
 *
 * @public
 */
export interface UserQuickConnectConfig {
  /**
   * The identifier of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * Contains configuration settings for a quick connect.
 *
 * @public
 */
export interface QuickConnectConfig {
  /**
   * The type of quick connect. In the Connect Customer admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
   *
   * @public
   */
  QuickConnectType: QuickConnectType | undefined;

  /**
   * The user configuration. This is required only if QuickConnectType is USER.
   *
   * @public
   */
  UserConfig?: UserQuickConnectConfig | undefined;

  /**
   * The queue configuration. This is required only if QuickConnectType is QUEUE.
   *
   * @public
   */
  QueueConfig?: QueueQuickConnectConfig | undefined;

  /**
   * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
   *
   * @public
   */
  PhoneConfig?: PhoneNumberQuickConnectConfig | undefined;

  /**
   * Flow configuration for quick connect setup.
   *
   * @public
   */
  FlowConfig?: FlowQuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface CreateQuickConnectRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique name of the quick connect.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the quick connect.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration settings for the quick connect.
   *
   * @public
   */
  QuickConnectConfig: QuickConnectConfig | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickConnectResponse {
  /**
   * The Amazon Resource Name (ARN) for the quick connect.
   *
   * @public
   */
  QuickConnectARN?: string | undefined;

  /**
   * The identifier for the quick connect.
   *
   * @public
   */
  QuickConnectId?: string | undefined;
}

/**
 * Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.
 *
 * @public
 */
export interface CrossChannelBehavior {
  /**
   * Specifies the other channels that can be routed to an agent handling their current channel.
   *
   * @public
   */
  BehaviorType: BehaviorType | undefined;
}

/**
 * Defines the cross-channel and workload type routing behavior that allows an agent working on a contact to be offered a contact from a different channel or workload type.
 *
 * @public
 */
export interface CrossChannelWorkloadBehavior {
  /**
   * Specifies the routing behavior for an agent handling their current channel and workload type.
   *
   * @public
   */
  ChannelWorkloadBehaviorType?: ChannelWorkloadBehaviorType | undefined;
}

/**
 * Defines the maximum number of contacts an agent can handle simultaneously for a specific channel and workload type combination.
 *
 * @public
 */
export interface WorkloadTypeConcurrency {
  /**
   * The value of the workload type.
   *
   * @public
   */
  WorkloadType: string | undefined;

  /**
   * The maximum number of contacts an agent can handle simultaneously for a specific channel and workload type combination.
   *
   * Valid Range for `VOICE`: Minimum value of 1. Maximum value of 1.
   *
   * Valid Range for `CHAT`: Minimum value of 1. Maximum value of 10.
   *
   * Valid Range for `TASK`: Minimum value of 1. Maximum value of 10.
   *
   * @public
   */
  Concurrency: number | undefined;

  /**
   * Defines the cross-channel and workload type routing behavior for each channel and workload type combination that is enabled for this Routing Profile.
   *
   * @public
   */
  CrossChannelWorkloadBehavior?: CrossChannelWorkloadBehavior | undefined;
}

/**
 * Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously.
 *
 * @public
 */
export interface MediaConcurrency {
  /**
   * The channels that agents can handle in the Contact Control Panel (CCP).
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * The number of contacts an agent can have on a channel simultaneously.
   *
   * Valid Range for `VOICE`: Minimum value of 1. Maximum value of 1.
   *
   * Valid Range for `CHAT`: Minimum value of 1. Maximum value of 10.
   *
   * Valid Range for `TASK`: Minimum value of 1. Maximum value of 10.
   *
   * @public
   */
  Concurrency?: number | undefined;

  /**
   * Defines the cross-channel routing behavior for each channel that is enabled for this Routing Profile. For example, this allows you to offer an agent a different contact from another channel when they are currently working with a contact from a Voice channel.
   *
   * @public
   */
  CrossChannelBehavior?: CrossChannelBehavior | undefined;

  /**
   * Defines the list of workload type concurrency configurations for a channel. When provided, enables granular concurrency control based on workload type values.
   *
   * @public
   */
  WorkloadTypeConcurrencies?: WorkloadTypeConcurrency[] | undefined;
}

/**
 * @public
 */
export interface CreateRoutingProfileRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the routing profile. Must not be more than 127 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Description of the routing profile. Must not be more than 250 characters.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The default outbound queue for the routing profile.
   *
   * @public
   */
  DefaultOutboundQueueId: string | undefined;

  /**
   * The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound calls.
   *
   * The limit of 10 array members applies to the maximum number of `RoutingProfileQueueConfig` objects that can be passed during a CreateRoutingProfile API request. It is different from the quota of 50 queues per routing profile per instance that is listed in [Connect Customer service quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html).
   *
   * @public
   */
  QueueConfigs?: RoutingProfileQueueConfig[] | undefined;

  /**
   * The manual assignment queues associated with the routing profile. If no queue is added, agents and supervisors can't pick or assign any contacts from this routing profile. The limit of 10 array members applies to the maximum number of RoutingProfileManualAssignmentQueueConfig objects that can be passed during a CreateRoutingProfile API request. It is different from the quota of 50 queues per routing profile per instance that is listed in Connect Customer service quotas.
   *
   * > **Note:** For voice contacts, manual assignment supports only agent-first callback contacts. Chat, email, and task contacts are fully supported.
   *
   * @public
   */
  ManualAssignmentQueueConfigs?: RoutingProfileManualAssignmentQueueConfig[] | undefined;

  /**
   * The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile.
   *
   * @public
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whether agents with this routing profile will have their routing order calculated based on *longest idle time* or *time since their last inbound contact*.
   *
   * @public
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | undefined;
}

/**
 * @public
 */
export interface CreateRoutingProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the routing profile.
   *
   * @public
   */
  RoutingProfileArn?: string | undefined;

  /**
   * The identifier of the routing profile.
   *
   * @public
   */
  RoutingProfileId?: string | undefined;
}

/**
 * This action must be set if `TriggerEventSource` is one of the following values: `OnPostCallAnalysisAvailable` | `OnRealTimeCallAnalysisAvailable` | `OnRealTimeChatAnalysisAvailable` | `OnPostChatAnalysisAvailable`. Contact is categorized using the rule name.
 *
 * `RuleName` is used as `ContactCategory`.
 *
 * @public
 */
export interface AssignContactCategoryActionDefinition {}

/**
 * An empty value.
 *
 * @public
 */
export interface EmptyFieldValue {}

/**
 * Object to store union of Field values.
 *
 * @public
 */
export interface FieldValueUnion {
  /**
   * A Boolean number value type.
   *
   * @public
   */
  BooleanValue?: boolean | undefined;

  /**
   * A Double number value type.
   *
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * An empty value.
   *
   * @public
   */
  EmptyValue?: EmptyFieldValue | undefined;

  /**
   * String value type.
   *
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * The SLA configuration for Case SlaAssignmentType.
 *
 * @public
 */
export interface CaseSlaConfiguration {
  /**
   * Name of an SLA.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Type of SLA for Case SlaAssignmentType.
   *
   * @public
   */
  Type: SlaType | undefined;

  /**
   * Unique identifier of a Case field.
   *
   * @public
   */
  FieldId?: string | undefined;

  /**
   * Represents a list of target field values for the fieldId specified in CaseSlaConfiguration. The SLA is considered met if any one of these target field values matches the actual field value.
   *
   * @public
   */
  TargetFieldValues?: FieldValueUnion[] | undefined;

  /**
   * Target duration in minutes within which an SLA should be completed.
   *
   * @public
   */
  TargetSlaMinutes: number | undefined;
}

/**
 * The AssignSla action definition.
 *
 * @public
 */
export interface AssignSlaActionDefinition {
  /**
   * Type of SLA assignment.
   *
   * @public
   */
  SlaAssignmentType: SlaAssignmentType | undefined;

  /**
   * The SLA configuration for Case SLA Assignment.
   *
   * @public
   */
  CaseSlaConfiguration?: CaseSlaConfiguration | undefined;
}

/**
 * Object for case field values.
 *
 * @public
 */
export interface FieldValue {
  /**
   * Unique identifier of a field.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Union of potential field value types.
   *
   * @public
   */
  Value: FieldValueUnion | undefined;
}

/**
 * The `CreateCase` action definition.
 *
 * @public
 */
export interface CreateCaseActionDefinition {
  /**
   * An array of objects with `Field ID` and `Value` data.
   *
   * @public
   */
  Fields: FieldValue[] | undefined;

  /**
   * A unique identifier of a template.
   *
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * End associated tasks related to a case.
 *
 * @public
 */
export interface EndAssociatedTasksActionDefinition {}

/**
 * The EventBridge action definition.
 *
 * @public
 */
export interface EventBridgeActionDefinition {
  /**
   * The name.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * An identifier that references an extraction definition resource.
 *
 * @public
 */
export interface RulesExtractionDefinitionIdentifier {
  /**
   * The identifier of the extraction definition.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Information about the extract information action, which references extraction definitions to use when extracting structured data from customer interactions.
 *
 * @public
 */
export interface ExtractInformationActionDefinition {
  /**
   * The list of extraction definition identifiers that specify what data to extract.
   *
   * @public
   */
  RulesExtractionDefinitions: RulesExtractionDefinitionIdentifier[] | undefined;
}

/**
 * The type of notification recipient.
 *
 * @public
 */
export interface NotificationRecipientType {
  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}. Connect Customer users with the specified tags will be notified.
   *
   * @public
   */
  UserTags?: Record<string, string> | undefined;

  /**
   * A list of user IDs. Supports variable injection of `$.ContactLens.ContactEvaluation.Agent.AgentId` for `OnContactEvaluationSubmit` event source.
   *
   * @public
   */
  UserIds?: string[] | undefined;
}

/**
 * Information about the send in-app notification action.
 *
 * @public
 */
export interface SendInAppNotificationActionDefinition {
  /**
   * Notification content. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Connect Customer Administrators Guide*.
   *
   * @public
   */
  Content: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * Notification recipient.
   *
   * @public
   */
  Recipient: NotificationRecipientType | undefined;

  /**
   * Recipients to exclude from notification.
   *
   * @public
   */
  Exclusion?: NotificationRecipientType | undefined;

  /**
   * Notification priority.
   *
   * @public
   */
  Priority?: ConfigurableNotificationPriority | undefined;
}

/**
 * Information about the send notification action.
 *
 * @public
 */
export interface SendNotificationActionDefinition {
  /**
   * Notification delivery method.
   *
   * @public
   */
  DeliveryMethod: NotificationDeliveryType | undefined;

  /**
   * The subject of the email if the delivery method is `EMAIL`. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Connect Customer Administrators Guide*.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * Notification content. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Connect Customer Administrators Guide*.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * Content type format.
   *
   * @public
   */
  ContentType: NotificationContentType | undefined;

  /**
   * Notification recipient.
   *
   * @public
   */
  Recipient: NotificationRecipientType | undefined;

  /**
   * Recipients to exclude from notification.
   *
   * @public
   */
  Exclusion?: NotificationRecipientType | undefined;
}

/**
 * Information about the submit automated evaluation action.
 *
 * @public
 */
export interface SubmitAutoEvaluationActionDefinition {
  /**
   * The identifier of the auto-evaluation enabled form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;
}

/**
 * Information about the task action.
 *
 * @public
 */
export interface TaskActionDefinition {
  /**
   * The name. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Connect Customer Administrators Guide*.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Connect Customer Administrators Guide*.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * Information about the reference when the `referenceType` is `URL`. Otherwise, null. (Supports variable injection in the `Value` field.)
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;
}

/**
 * The `UpdateCase` action definition.
 *
 * @public
 */
export interface UpdateCaseActionDefinition {
  /**
   * An array of objects with `Field ID` and Value data.
   *
   * @public
   */
  Fields: FieldValue[] | undefined;
}

/**
 * Information about the action to be performed when a rule is triggered.
 *
 * @public
 */
export interface RuleAction {
  /**
   * The type of action that creates a rule.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * Information about the task action. This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
   *
   * @public
   */
  TaskAction?: TaskActionDefinition | undefined;

  /**
   * Information about the EventBridge action.
   *
   * Supported only for `TriggerEventSource` values: `OnPostCallAnalysisAvailable` | `OnRealTimeCallAnalysisAvailable` | `OnRealTimeChatAnalysisAvailable` | `OnPostChatAnalysisAvailable` | `OnContactEvaluationSubmit` | `OnMetricDataUpdate`
   *
   * @public
   */
  EventBridgeAction?: EventBridgeActionDefinition | undefined;

  /**
   * Information about the contact category action.
   *
   * Supported only for `TriggerEventSource` values: `OnPostCallAnalysisAvailable` | `OnRealTimeCallAnalysisAvailable` | `OnRealTimeChatAnalysisAvailable` | `OnPostChatAnalysisAvailable` | `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
   *
   * @public
   */
  AssignContactCategoryAction?: AssignContactCategoryActionDefinition | undefined;

  /**
   * Information about the send notification action.
   *
   * Supported only for `TriggerEventSource` values: `OnPostCallAnalysisAvailable` | `OnRealTimeCallAnalysisAvailable` | `OnRealTimeChatAnalysisAvailable` | `OnPostChatAnalysisAvailable` | `OnContactEvaluationSubmit` | `OnMetricDataUpdate`
   *
   * @public
   */
  SendNotificationAction?: SendNotificationActionDefinition | undefined;

  /**
   * Information about the create case action.
   *
   * Supported only for `TriggerEventSource` values: `OnPostCallAnalysisAvailable` | `OnPostChatAnalysisAvailable`.
   *
   * @public
   */
  CreateCaseAction?: CreateCaseActionDefinition | undefined;

  /**
   * Information about the update case action.
   *
   * Supported only for `TriggerEventSource` values: `OnCaseCreate` | `OnCaseUpdate`.
   *
   * @public
   */
  UpdateCaseAction?: UpdateCaseActionDefinition | undefined;

  /**
   * Information about the assign SLA action.
   *
   * @public
   */
  AssignSlaAction?: AssignSlaActionDefinition | undefined;

  /**
   * Information about the end associated tasks action.
   *
   * Supported only for `TriggerEventSource` values: `OnCaseUpdate`.
   *
   * @public
   */
  EndAssociatedTasksAction?: EndAssociatedTasksActionDefinition | undefined;

  /**
   * Information about the submit automated evaluation action.
   *
   * @public
   */
  SubmitAutoEvaluationAction?: SubmitAutoEvaluationActionDefinition | undefined;

  /**
   * Information about the extract information action.
   *
   * @public
   */
  ExtractInformationAction?: ExtractInformationActionDefinition | undefined;

  /**
   * Information about the send in-app notification action.
   *
   * Supported only for `TriggerEventSource` values: `OnPostCallAnalysisAvailable` | `OnRealTimeCallAnalysisAvailable` | `OnRealTimeChatAnalysisAvailable` | `OnPostChatAnalysisAvailable` | `OnAfterCallWorkAvailable` | `OnAfterChatWorkAvailable` | `OnEmailAnalysisAvailable` | `OnContactEvaluationSubmit` | `OnCaseCreate` | `OnCaseUpdate` | `OnSlaBreach` | `OnSchedulePublish` | `OnScheduleUpdate` | `OnScheduleTimeOffRequestActivity`
   *
   * @public
   */
  SendInAppNotificationAction?: SendInAppNotificationActionDefinition | undefined;
}

/**
 * A single pre-evaluation filter condition. Specifies a resource type, filter type, key, value, and operator to match against a resource attribute.
 *
 * @public
 */
export interface PreEvaluationFilter {
  /**
   * The type of resource to filter on. Valid values:
   *
   * - `CONTACT` - Filter on attributes of the contact, such as tags assigned to the contact.
   * - `CONTACT_EVALUATION` - Filter on attributes of the contact evaluation, such as tags assigned to the contact evaluation, for rules triggered on the `OnContactEvaluationSubmit` event source.
   *
   * @public
   */
  ResourceType: PreEvaluationFilterResourceType | undefined;

  /**
   * The type of filter to apply. Valid values: `TAG`.
   *
   * @public
   */
  FilterType: PreEvaluationFilterType | undefined;

  /**
   * The key of the attribute to filter on. For tag filters, this is the tag key.
   *
   * @public
   */
  FilterKey: string | undefined;

  /**
   * The value to match against. For tag filters, this is the tag value.
   *
   * @public
   */
  FilterValue: string | undefined;

  /**
   * The comparison operator for the filter condition. Valid values: `EQUALS`.
   *
   * @public
   */
  Operator: PreEvaluationFilterOperator | undefined;
}

/**
 * The pre-evaluation filters for a rule, that restrict a rule to be applied to only certain resources based on the resource's attributes, such as tags assigned to a contact. The pre-evaluation filters are applied even before rule conditions are evaluated and are used to enforce tag-based-access-control while applying rules.
 *
 * @public
 */
export interface PreEvaluationFilters {
  /**
   * A list of conditions that the rule evaluates together using AND logic. All conditions must be met for the event to be evaluated by the rule.
   *
   * @public
   */
  AndConditions?: PreEvaluationFilter[] | undefined;
}

/**
 * The name of the event source. This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate` | `OnContactEvaluationSubmit` | `OnMetricDataUpdate`.
 *
 * @public
 */
export interface RuleTriggerEventSource {
  /**
   * The name of the event source.
   *
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * The identifier for the integration association.
   *
   * @public
   */
  IntegrationAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique name for the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The event source to trigger the rule.
   *
   * @public
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * The conditions of the rule.
   *
   * @public
   */
  Function: string | undefined;

  /**
   * A list of actions to be run when the rule is triggered.
   *
   * @public
   */
  Actions: RuleAction[] | undefined;

  /**
   * The publish status of the rule.
   *
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * The pre-evaluation filters for the rule, that restrict the rule to be applied to only certain resources based on the resource's attributes, such as tags assigned to a contact. The pre-evaluation filters are applied even before rule conditions are evaluated and are used to enforce tag-based-access-control while applying rules.
   *
   * @public
   */
  PreEvaluationFilters?: PreEvaluationFilters | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn: string | undefined;

  /**
   * A unique identifier for the rule.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * This API is in preview release for Connect Customer and is subject to change.
 *
 * A third-party application's metadata.
 *
 * @public
 */
export interface Application {
  /**
   * Namespace of the application that you want to give access to.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The permissions that the agent is granted on the application. For third-party applications, only the `ACCESS` permission is supported. For MCP Servers, the permissions are tool Identifiers accepted by MCP Server.
   *
   * @public
   */
  ApplicationPermissions?: string[] | undefined;

  /**
   * Type of Application.
   *
   * @public
   */
  Type?: ApplicationType | undefined;
}

/**
 * A primary attribute value.
 *
 * @public
 */
export interface PrimaryAttributeValue {
  /**
   * The value's access type.
   *
   * @public
   */
  AccessType?: AccessType | undefined;

  /**
   * The value's attribute name.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value's values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * A primary attribute access control configuration item.
 *
 * @public
 */
export interface PrimaryAttributeAccessControlConfigurationItem {
  /**
   * The item's primary attribute values.
   *
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValue[] | undefined;
}

/**
 * A data table access control configuration.
 *
 * @public
 */
export interface DataTableAccessControlConfiguration {
  /**
   * The configuration's primary attribute access control configuration.
   *
   * @public
   */
  PrimaryAttributeAccessControlConfiguration?: PrimaryAttributeAccessControlConfigurationItem | undefined;
}

/**
 * Contains granular access control configuration for security profiles, including data table access permissions.
 *
 * @public
 */
export interface GranularAccessControlConfiguration {
  /**
   * The access control configuration for data tables.
   *
   * @public
   */
  DataTableAccessControlConfiguration?: DataTableAccessControlConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileRequest {
  /**
   * The name of the security profile.
   *
   * @public
   */
  SecurityProfileName: string | undefined;

  /**
   * The description of the security profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Permissions assigned to the security profile. For a list of valid permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html).
   *
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of tags that a security profile uses to restrict access to resources in Connect Customer.
   *
   * @public
   */
  AllowedAccessControlTags?: Record<string, string> | undefined;

  /**
   * The list of resources that a security profile applies tag restrictions to in Connect Customer. For a list of Connect Customer resources that you can tag, see [Add tags to resources in Connect Customer](https://docs.aws.amazon.com/connect/latest/adminguide/tagging.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  TagRestrictedResources?: string[] | undefined;

  /**
   * A list of third-party applications or MCP Servers that the security profile will give access to.
   *
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * The list of resources that a security profile applies hierarchy restrictions to in Connect Customer. Following are acceptable ResourceNames: `User`.
   *
   * @public
   */
  HierarchyRestrictedResources?: string[] | undefined;

  /**
   * The identifier of the hierarchy group that a security profile uses to restrict access to resources in Connect Customer.
   *
   * @public
   */
  AllowedAccessControlHierarchyGroupId?: string | undefined;

  /**
   * A list of Flow Modules an AI Agent can invoke as a tool.
   *
   * @public
   */
  AllowedFlowModules?: FlowModule[] | undefined;

  /**
   * A list of AI agents that the security profile will give access to.
   *
   * @public
   */
  AllowedAIAgents?: AIAgent[] | undefined;

  /**
   * The granular access control configuration for the security profile, including data table permissions.
   *
   * @public
   */
  GranularAccessControlConfiguration?: GranularAccessControlConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileResponse {
  /**
   * The identifier for the security profle.
   *
   * @public
   */
  SecurityProfileId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the security profile.
   *
   * @public
   */
  SecurityProfileArn?: string | undefined;
}

/**
 * The identifier of the task template field.
 *
 * @public
 */
export interface TaskTemplateFieldIdentifier {
  /**
   * The name of the task template field.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A field that is invisible to an agent.
 *
 * @public
 */
export interface InvisibleFieldInfo {
  /**
   * Identifier of the invisible field.
   *
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * Indicates a field that is read-only to an agent.
 *
 * @public
 */
export interface ReadOnlyFieldInfo {
  /**
   * Identifier of the read-only field.
   *
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * Information about a required field.
 *
 * @public
 */
export interface RequiredFieldInfo {
  /**
   * The unique identifier for the field.
   *
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}
