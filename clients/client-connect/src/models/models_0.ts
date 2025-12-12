// smithy-typescript generated code
import {
  AccessType,
  ActionType,
  AgentAvailabilityTimer,
  AgentStatusState,
  AgentStatusType,
  AiUseCase,
  AllowedUserAction,
  ApplicationType,
  AttachedFileInvalidRequestExceptionReason,
  AttachedFileServiceQuotaExceededExceptionReason,
  BehaviorType,
  Channel,
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
  EvaluationFormMultiSelectQuestionDisplayMode,
  EvaluationFormQuestionAutomationAnswerSourceType,
  EvaluationFormScoringMode,
  EvaluationFormScoringStatus,
  EvaluationFormSingleSelectQuestionDisplayMode,
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
  MultiSelectQuestionRuleCategoryAutomationCondition,
  NotificationContentType,
  NotificationDeliveryType,
  NumericQuestionPropertyAutomationLabel,
  OutboundStrategyType,
  OverrideDays,
  ParticipantRole,
  ParticipantState,
  PhoneType,
  PropertyValidationExceptionReason,
  QuickConnectType,
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
  TaskTemplateFieldType,
  TaskTemplateStatus,
  UseCaseType,
  VideoCapability,
  ViewStatus,
  ViewType,
  VocabularyLanguageCode,
  VocabularyState,
  WorkspaceFontFamily,
} from "./enums";

/**
 * <p>Information about an action.</p>
 * @public
 */
export interface ActionSummary {
  /**
   * <p>The action type.</p>
   * @public
   */
  ActionType: ActionType | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormRequest {
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
   * <p>The version of the evaluation form to activate. If the version property is not provided, the latest version of
   *    the evaluation form is activated.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormResponse {
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
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * <p>Information about the email recipient</p>
 * @public
 */
export interface EmailRecipient {
  /**
   * <p>Address of the email recipient.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>Display name of the email recipient.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * <p>List of additional email addresses for an email contact.</p>
 * @public
 */
export interface AdditionalEmailRecipients {
  /**
   * <p>List of additional TO email recipients for an email contact.</p>
   * @public
   */
  ToList?: EmailRecipient[] | undefined;

  /**
   * <p>List of additional CC email recipients for an email contact.</p>
   * @public
   */
  CcList?: EmailRecipient[] | undefined;
}

/**
 * <p>Information about a traffic distribution.</p>
 * @public
 */
export interface Distribution {
  /**
   * <p>The Amazon Web Services Region where the traffic is distributed.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The percentage of the traffic that is distributed, in increments of 10.</p>
   * @public
   */
  Percentage: number | undefined;
}

/**
 * <p>The distribution of agents between the instance and its replica(s).</p>
 * @public
 */
export interface AgentConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * <p>Contains information about a queue resource for which metrics are returned.</p>
 * @public
 */
export interface QueueReference {
  /**
   * <p>The identifier of the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the user.</p>
 * @public
 */
export interface AgentContactReference {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The channel of the contact.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>How the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">state of the
   *     contact</a>.</p>
   *          <note>
   *             <p>When <code>AgentContactState</code> is set to <code>CONNECTED_ONHOLD</code>, <code>StateStartTimestamp</code>
   *     is not changed. Instead, <code>StateStartTimestamp</code> reflects the time the contact was <code>CONNECTED</code>
   *     to the agent.</p>
   *          </note>
   * @public
   */
  AgentContactState?: ContactState | undefined;

  /**
   * <p>The epoch timestamp when the contact state started.</p>
   * @public
   */
  StateStartTimestamp?: Date | undefined;

  /**
   * <p>The time at which the contact was connected to an agent.</p>
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;

  /**
   * <p>Contains information about a queue resource for which metrics are returned.</p>
   * @public
   */
  Queue?: QueueReference | undefined;
}

/**
 * <p>Countdown timer configuration after the agent accepted the contact.</p>
 * @public
 */
export interface PostAcceptTimeoutConfig {
  /**
   * <p>Duration in seconds for the countdown timer after the agent accepted the contact.</p>
   * @public
   */
  DurationInSeconds: number | undefined;
}

/**
 * <p>Information about agent-first preview mode outbound strategy configuration.</p>
 * @public
 */
export interface Preview {
  /**
   * <p>Countdown timer configuration after the agent accepted the preview outbound contact.</p>
   * @public
   */
  PostAcceptTimeoutConfig: PostAcceptTimeoutConfig | undefined;

  /**
   * <p>The actions the agent can perform after accepting the preview outbound contact.</p>
   * @public
   */
  AllowedUserActions: AllowedUserAction[] | undefined;
}

/**
 * <p>Information about agent-first outbound strategy configuration.</p>
 * @public
 */
export interface AgentFirst {
  /**
   * <p>Information about preview configuration of agent first outbound strategy</p>
   * @public
   */
  Preview?: Preview | undefined;
}

/**
 * <p>Information about an agent hierarchy group.</p>
 * @public
 */
export interface AgentHierarchyGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A structure that defines search criteria for contacts using agent hierarchy group levels. For more information
 *    about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up
 *     Agent Hierarchies</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export interface AgentHierarchyGroups {
  /**
   * <p>The identifiers for level 1 hierarchy groups.</p>
   * @public
   */
  L1Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 2 hierarchy groups.</p>
   * @public
   */
  L2Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 3 hierarchy groups.</p>
   * @public
   */
  L3Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 4 hierarchy groups.</p>
   * @public
   */
  L4Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 5 hierarchy groups.</p>
   * @public
   */
  L5Ids?: string[] | undefined;
}

/**
 * <p>The configuration for the allowed video and screen sharing capabilities for participants present over the call.
 *    For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up
 *     in-app, web, video calling, and screen sharing capabilities</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 * @public
 */
export interface ParticipantCapabilities {
  /**
   * <p>The configuration having the video and screen sharing capabilities for participants over the call.</p>
   * @public
   */
  Video?: VideoCapability | undefined;

  /**
   * <p>The screen sharing capability that is enabled for the participant. <code>SEND</code> indicates the participant
   *    can share their screen.</p>
   * @public
   */
  ScreenShare?: ScreenShareCapability | undefined;
}

/**
 * <p>Information regarding the device.</p>
 * @public
 */
export interface DeviceInfo {
  /**
   * <p>Name of the platform that the participant used for the call.</p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>Version of the platform that the participant used for the call.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>Operating system that the participant used for the call.</p>
   * @public
   */
  OperatingSystem?: string | undefined;
}

/**
 * <p>Information about the agent hierarchy. Hierarchies can be configured with up to five levels.</p>
 * @public
 */
export interface HierarchyGroups {
  /**
   * <p>The group at level one of the agent hierarchy.</p>
   * @public
   */
  Level1?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level two of the agent hierarchy.</p>
   * @public
   */
  Level2?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level three of the agent hierarchy.</p>
   * @public
   */
  Level3?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level four of the agent hierarchy.</p>
   * @public
   */
  Level4?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level five of the agent hierarchy.</p>
   * @public
   */
  Level5?: AgentHierarchyGroup | undefined;
}

/**
 * <p>Information about the state transition of a supervisor.</p>
 * @public
 */
export interface StateTransition {
  /**
   * <p>The state of the transition.</p>
   * @public
   */
  State?: ParticipantState | undefined;

  /**
   * <p>The date and time when the state started in UTC time.</p>
   * @public
   */
  StateStartTimestamp?: Date | undefined;

  /**
   * <p>The date and time when the state ended in UTC time.</p>
   * @public
   */
  StateEndTimestamp?: Date | undefined;
}

/**
 * <p>Information about the agent who accepted the contact.</p>
 * @public
 */
export interface AgentInfo {
  /**
   * <p>The identifier of the agent who accepted the contact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp when the contact was accepted by the agent.</p>
   * @public
   */
  AcceptedByAgentTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the agent finished previewing the contact.</p>
   * @public
   */
  PreviewEndTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was connected to the agent.</p>
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;

  /**
   * <p>Agent pause duration for a contact in seconds.</p>
   * @public
   */
  AgentPauseDurationInSeconds?: number | undefined;

  /**
   * <p>The agent hierarchy groups for the agent.</p>
   * @public
   */
  HierarchyGroups?: HierarchyGroups | undefined;

  /**
   * <p>Information regarding Agent’s device.</p>
   * @public
   */
  DeviceInfo?: DeviceInfo | undefined;

  /**
   * <p>The configuration for the allowed video and screen sharing capabilities for participants present over the call.
   *    For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up
   *     in-app, web, video calling, and screen sharing capabilities</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  Capabilities?: ParticipantCapabilities | undefined;

  /**
   * <p>The difference in time, in whole seconds, between <code>AfterContactWorkStartTimestamp</code> and
   *     <code>AfterContactWorkEndTimestamp</code>.</p>
   * @public
   */
  AfterContactWorkDuration?: number | undefined;

  /**
   * <p>The date and time when the agent started doing After Contact Work for the contact, in UTC time.</p>
   * @public
   */
  AfterContactWorkStartTimestamp?: Date | undefined;

  /**
   * <p>The date and time when the agent ended After Contact Work for the contact, in UTC time. In cases when agent
   *    finishes doing <code>AfterContactWork</code> for chat contacts and switches their activity status to offline or
   *    equivalent without clearing the contact in CCP, discrepancies may be noticed for
   *     <code>AfterContactWorkEndTimestamp</code>.</p>
   * @public
   */
  AfterContactWorkEndTimestamp?: Date | undefined;

  /**
   * <p>The total hold duration in seconds initiated by the agent.</p>
   * @public
   */
  AgentInitiatedHoldDuration?: number | undefined;

  /**
   * <p>List of <code>StateTransition</code> for a supervisor.</p>
   * @public
   */
  StateTransitions?: StateTransition[] | undefined;
}

/**
 * <p>Contains information for score and potential quality issues for Audio</p>
 * @public
 */
export interface AudioQualityMetricsInfo {
  /**
   * <p>Number measuring the estimated quality of the media connection.</p>
   * @public
   */
  QualityScore?: number | undefined;

  /**
   * <p>List of potential issues causing degradation of quality on a media connection. If the service did not detect any
   *    potential quality issues the list is empty.</p>
   *          <p>Valid values: <code>HighPacketLoss</code> | <code>HighRoundTripTime</code> |
   *    <code>HighJitterBuffer</code>
   *          </p>
   * @public
   */
  PotentialQualityIssues?: string[] | undefined;
}

/**
 * <p>Information about the quality of the Agent's media connection</p>
 * @public
 */
export interface AgentQualityMetrics {
  /**
   * <p>Information about the audio quality of the Agent</p>
   * @public
   */
  Audio?: AudioQualityMetricsInfo | undefined;
}

/**
 * <p>Can be used to define a list of preferred agents to target the contact to within the queue. Note that agents
 *    must have the queue in their routing profile in order to be offered the contact.</p>
 * @public
 */
export interface AgentsCriteria {
  /**
   * <p>An object to specify a list of agents, by user ID.</p>
   * @public
   */
  AgentIds?: string[] | undefined;
}

/**
 * <p>Contains information about an agent status.</p>
 * @public
 */
export interface AgentStatus {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   * @public
   */
  AgentStatusARN?: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId?: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the agent status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of agent status.</p>
   * @public
   */
  Type?: AgentStatusType | undefined;

  /**
   * <p>The display order of the agent status.</p>
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * <p>The state of the agent status.</p>
   * @public
   */
  State?: AgentStatusState | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * <p>Information about the agent status assigned to the user.</p>
 * @public
 */
export interface AgentStatusIdentifier {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Information about the agent's status.</p>
 * @public
 */
export interface AgentStatusReference {
  /**
   * <p>The start timestamp of the agent's status.</p>
   * @public
   */
  StatusStartTimestamp?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent's status.</p>
   * @public
   */
  StatusArn?: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  StatusName?: string | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a string condition.</p>
 * @public
 */
export interface StringCondition {
  /**
   * <p>The name of the field in the string condition.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The value of the string.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the string condition.</p>
   * @public
   */
  ComparisonType?: StringComparisonType | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.
 *   </p>
 * @public
 */
export interface TagCondition {
  /**
   * <p>The tag key in the tag condition.</p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>The tag value in the tag condition.</p>
   * @public
   */
  TagValue?: string | undefined;
}

/**
 * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
 * @public
 */
export interface CommonAttributeAndCondition {
  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  TagConditions?: TagCondition[] | undefined;
}

/**
 * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
 *     <code>OR</code> or <code>AND</code> (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
 *             </li>
 *             <li>
 *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ControlPlaneAttributeFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.</p>
   * @public
   */
  OrConditions?: CommonAttributeAndCondition[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.</p>
   * @public
   */
  AndCondition?: CommonAttributeAndCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE BPO = 123</code>.
   *   </p>
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface AgentStatusSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>. This accepts an
   *     <code>OR</code> of <code>AND</code> (List of List) input where: </p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code> operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code> operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * <p>Summary information for an agent status.</p>
 * @public
 */
export interface AgentStatusSummary {
  /**
   * <p>The identifier for an agent status.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the agent status.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the agent status.</p>
   * @public
   */
  Type?: AgentStatusType | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * <p> Information of the AI agent involved in the contact.</p>
 * @public
 */
export interface AiAgentInfo {
  /**
   * <p> The use case or scenario for which the AI agent is involved in the contact </p>
   * @public
   */
  AiUseCase?: AiUseCase | undefined;

  /**
   * <p> The unique identifier that specifies both the AI agent ID and its version number that was involved in the
   *    contact </p>
   * @public
   */
  AiAgentVersionId?: string | undefined;

  /**
   * <p> A boolean flag indicating whether the contact initially handled by this AI agent was escalated to a human
   *    agent. </p>
   * @public
   */
  AiAgentEscalated?: boolean | undefined;
}

/**
 * <p>Configuration information of an email alias.</p>
 * @public
 */
export interface AliasConfiguration {
  /**
   * <p>The email address ID.</p>
   * @public
   */
  EmailAddressId: string | undefined;
}

/**
 * <p>Information about the capabilities enabled for participants of the contact.</p>
 * @public
 */
export interface AllowedCapabilities {
  /**
   * <p>Information about the customer's video sharing capabilities.</p>
   * @public
   */
  Customer?: ParticipantCapabilities | undefined;

  /**
   * <p>Information about the agent's video sharing capabilities.</p>
   * @public
   */
  Agent?: ParticipantCapabilities | undefined;
}

/**
 * <p> A list of Flow Modules an AI Agent can invoke as a tool </p>
 * @public
 */
export interface FlowModule {
  /**
   * <p> Only Type we support is MCP. </p>
   * @public
   */
  Type?: FlowModuleType | undefined;

  /**
   * <p> If of Flow Modules invocable as tool </p>
   * @public
   */
  FlowModuleId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to associate with the target account.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAnalyticsDataSetResponse {
  /**
   * <p>The identifier of the dataset that was associated.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The identifier of the target account. </p>
   * @public
   */
  TargetAccountId?: string | undefined;

  /**
   * <p>The Resource Access Manager share ID that is generated.</p>
   * @public
   */
  ResourceShareId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Resource Access Manager share. </p>
   * @public
   */
  ResourceShareArn?: string | undefined;
}

/**
 * <p>Reason why the request was invalid.</p>
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
   * <p>Reason why the StartAttachedFiledUpload request was invalid.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The domain to add to your allow list.</p>
   * @public
   */
  Origin: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The reason for the exception.</p>
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
   * <p>Total file size of all files or total number of files exceeds the service quota</p>
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
 * <p>Configuration information of an Amazon Lex bot.</p>
 * @public
 */
export interface LexBot {
  /**
   * <p>The name of the Amazon Lex bot.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the Amazon Lex bot was created.</p>
   * @public
   */
  LexRegion: string | undefined;
}

/**
 * <p>Configuration information of an Amazon Lex V2 bot.</p>
 * @public
 */
export interface LexV2Bot {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Lex V2 bot.</p>
   * @public
   */
  AliasArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * <p>The Amazon Lex V2 bot to associate with the instance.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateContactWithUserRequest {
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
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
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
   * <p>The identifier of the custom vocabulary. If this is empty, the default is set to none.</p>
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
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration object that specifies which email address will serve as the alias. The specified email address
   *    must already exist in the Amazon Connect instance and cannot already be configured as an alias or have an alias
   *    of its own.</p>
   * @public
   */
  AliasConfiguration: AliasConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services End User Messaging SMS phone number ARN when using <code>SMS_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services End User Messaging Social phone number ARN when using
   *       <code>WHATSAPP_MESSAGING_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface AssociateFlowResponse {}

/**
 * <p>Configuration information of a Kinesis Data Firehose delivery stream.</p>
 * @public
 */
export interface KinesisFirehoseConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   * @public
   */
  FirehoseArn: string | undefined;
}

/**
 * <p>Configuration information of a Kinesis data stream.</p>
 * @public
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream.</p>
   * @public
   */
  StreamArn: string | undefined;
}

/**
 * <p>The encryption configuration.</p>
 * @public
 */
export interface EncryptionConfig {
  /**
   * <p>The type of encryption.</p>
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * <p>The full ARN of the encryption key. </p>
   *          <note>
   *             <p>Be sure to provide the full ARN of the encryption key, not just the ID.</p>
   *             <p>Amazon Connect supports only KMS keys with the default key spec of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default">
   *                   <code>SYMMETRIC_DEFAULT</code>
   *                </a>. </p>
   *          </note>
   * @public
   */
  KeyId: string | undefined;
}

/**
 * <p>Configuration information of a Kinesis video stream.</p>
 * @public
 */
export interface KinesisVideoStreamConfig {
  /**
   * <p>The prefix of the video stream.</p>
   * @public
   */
  Prefix: string | undefined;

  /**
   * <p>The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that
   *    is associated with the stream.</p>
   *          <p>The default value is 0, indicating that the stream does not persist data.</p>
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The encryption configuration.</p>
   * @public
   */
  EncryptionConfig: EncryptionConfig | undefined;
}

/**
 * <p>Information about the Amazon Simple Storage Service (Amazon S3) storage type.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>The S3 bucket name.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The S3 bucket prefix.</p>
   * @public
   */
  BucketPrefix: string | undefined;

  /**
   * <p>The Amazon S3 encryption configuration.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * <p>The storage configuration for the instance.</p>
 * @public
 */
export interface InstanceStorageConfig {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageType: StorageType | undefined;

  /**
   * <p>The S3 bucket
   *    configuration.</p>
   * @public
   */
  S3Config?: S3Config | undefined;

  /**
   * <p>The configuration of the Kinesis video stream.</p>
   * @public
   */
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig | undefined;

  /**
   * <p>The configuration of the Kinesis data stream.</p>
   * @public
   */
  KinesisStreamConfig?: KinesisStreamConfig | undefined;

  /**
   * <p>The configuration of the Kinesis Firehose delivery stream.</p>
   * @public
   */
  KinesisFirehoseConfig?: KinesisFirehoseConfig | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type. To <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-contact-analysis-segment-streams.html">enable streaming for real-time analysis
   *     of contacts</a>, use the following types:</p>
   *          <ul>
   *             <li>
   *                <p>For chat contacts, use <code>REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For voice contacts, use <code>REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <code>REAL_TIME_CONTACT_ANALYSIS_SEGMENTS</code> is deprecated, but it is still supported and will apply only
   *     to VOICE channel contacts. Use <code>REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</code> for voice contacts moving
   *     forward.</p>
   *             <p>If you have previously associated a stream with <code>REAL_TIME_CONTACT_ANALYSIS_SEGMENTS</code>, no action is
   *     needed to update the stream to <code>REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</code>.</p>
   *          </note>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfig: InstanceStorageConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLambdaFunctionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLexBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Lex bot to associate with the instance.</p>
   * @public
   */
  LexBot: LexBot | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberContactFlowRequest {
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

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 */
export interface AssociateQueueQuickConnectsRequest {
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
   * <p>The quick connects to associate with this queue.</p>
   * @public
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * <p>Contains the channel and queue identifier for a routing profile.</p>
 * @public
 */
export interface RoutingProfileQueueReference {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.</p>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * <p>Contains information about the queue and channel for manual assignment behaviour can be enabled.</p>
 * @public
 */
export interface RoutingProfileManualAssignmentQueueConfig {
  /**
   * <p>Contains the channel and queue identifier for a routing profile.</p>
   * @public
   */
  QueueReference: RoutingProfileQueueReference | undefined;
}

/**
 * <p>Contains information about the queue and channel for which priority and delay can be set.</p>
 * @public
 */
export interface RoutingProfileQueueConfig {
  /**
   * <p>Contains information about a queue resource.</p>
   * @public
   */
  QueueReference: RoutingProfileQueueReference | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, a contact should be in the queue before they are routed to an available agent. For more
   *    information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Delay: number | undefined;
}

/**
 * @public
 */
export interface AssociateRoutingProfileQueuesRequest {
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
   * <p>The queues to associate with this routing profile.</p>
   * @public
   */
  QueueConfigs?: RoutingProfileQueueConfig[] | undefined;

  /**
   * <p>The manual assignment queues to associate with this routing profile.</p>
   * @public
   */
  ManualAssignmentQueueConfigs?: RoutingProfileManualAssignmentQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid security key in PEM format as a String.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * <p> Security profile items. </p>
 * @public
 */
export interface SecurityProfileItem {
  /**
   * <p> Id of a security profile item. </p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityProfilesRequest {
  /**
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN)
   *    of the instance. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> List of Security Profile Object. </p>
   * @public
   */
  SecurityProfiles: SecurityProfileItem[] | undefined;

  /**
   * <p> Only supported type is AI_AGENT. </p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p> Arn of a Q in Connect AI Agent. </p>
   * @public
   */
  EntityArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The identifier of the user account. This can be the ID or the ARN of the user. </p>
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
export interface AssociateTrafficDistributionGroupUserResponse {}

/**
 * <p>Information about proficiency of a user.</p>
 * @public
 */
export interface UserProficiency {
  /**
   * <p>The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect
   *    instance.</p>
   * @public
   */
  AttributeValue: string | undefined;

  /**
   * <p>The level of the proficiency. The valid values are 1, 2, 3, 4 and 5.</p>
   * @public
   */
  Level: number | undefined;
}

/**
 * @public
 */
export interface AssociateUserProficienciesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN of the
   *    instance).</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The proficiencies to associate with the user.</p>
   * @public
   */
  UserProficiencies: UserProficiency[] | undefined;
}

/**
 * @public
 */
export interface AssociateWorkspaceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources to associate with the workspace. Valid resource types are
   *    users and routing profiles.</p>
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * <p>Contains information about a resource that failed to be associated with a workspace in a batch operation.</p>
 * @public
 */
export interface FailedBatchAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that failed to be associated.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The error code indicating why the association failed.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>An error message describing why the association failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Contains information about a resource that was successfully associated with a workspace in a batch
 *    operation.</p>
 * @public
 */
export interface SuccessfulBatchAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that was successfully associated.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateWorkspaceResponse {
  /**
   * <p>A list of resources that were successfully associated with the workspace.</p>
   * @public
   */
  SuccessfulList?: SuccessfulBatchAssociationSummary[] | undefined;

  /**
   * <p>A list of resources that failed to be associated with the workspace, including error details.</p>
   * @public
   */
  FailedList?: FailedBatchAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>An array of dataset identifiers to associate.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Information about associations that are successfully created: <code>DataSetId</code>,
 *     <code>TargetAccountId</code>, <code>ResourceShareId</code>,
 *    <code>ResourceShareArn</code>. </p>
 * @public
 */
export interface AnalyticsDataAssociationResult {
  /**
   * <p>The identifier of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The identifier of the target account. </p>
   * @public
   */
  TargetAccountId?: string | undefined;

  /**
   * <p>The Resource Access Manager share ID.</p>
   * @public
   */
  ResourceShareId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Resource Access Manager share. </p>
   * @public
   */
  ResourceShareArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Resource Access Manager status of association.</p>
   * @public
   */
  ResourceShareStatus?: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>List of errors for dataset association failures. </p>
 * @public
 */
export interface ErrorResult {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The corresponding error message for the error code.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAnalyticsDataSetResponse {
  /**
   * <p>Information about associations that are successfully created: <code>DataSetId</code>,
   *     <code>TargetAccountId</code>, <code>ResourceShareId</code>,
   *    <code>ResourceShareArn</code>. </p>
   * @public
   */
  Created?: AnalyticsDataAssociationResult[] | undefined;

  /**
   * <p>A list of errors for datasets that aren't successfully associated with the target account.</p>
   * @public
   */
  Errors?: ErrorResult[] | undefined;
}

/**
 * <p>Contains lock version information for different levels of a data table hierarchy. Used for optimistic locking to
 *    prevent concurrent modification conflicts. Each component has its own lock version that changes when that component
 *    is modified.</p>
 * @public
 */
export interface DataTableLockVersion {
  /**
   * <p>The lock version for the data table itself. Used for optimistic locking and table versioning. Changes with each
   *    update to the table's metadata or structure.</p>
   * @public
   */
  DataTable?: string | undefined;

  /**
   * <p>The lock version for a specific attribute. When the ValueLockLevel is ATTRIBUTE, this version changes when any
   *    value for the attribute changes. For other lock levels, it only changes when the attribute's properties are directly
   *    updated.</p>
   * @public
   */
  Attribute?: string | undefined;

  /**
   * <p>The lock version for a specific set of primary values (record). This includes the default record even if the
   *    table does not have any primary attributes. Used for record-level locking.</p>
   * @public
   */
  PrimaryValues?: string | undefined;

  /**
   * <p>The lock version for a specific value. Changes each time the individual value is modified. Used for the
   *    finest-grained locking control.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Represents a primary key value used to identify a specific record in a data table. Primary values are used in
 *    combination to create unique record identifiers when a table has multiple primary attributes.</p>
 * @public
 */
export interface PrimaryValue {
  /**
   * <p>The name of the primary attribute that this value belongs to.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The actual value for the primary attribute. Must be provided as a string regardless of the attribute's value
   *    type. Primary values cannot be expressions and must be explicitly specified.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>A data table value.</p>
 * @public
 */
export interface DataTableValue {
  /**
   * <p>The value's primary values.</p>
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * <p>The value's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value's value.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The value's lock version.</p>
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * <p>The value's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The value's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateDataTableValueRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table. Must also accept the table ARN with or without a version alias. If no
   *    alias is provided, the default behavior is identical to providing the $LATEST alias.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>A list of values to create. Each value must specify the attribute name and optionally primary values if the
   *    table has primary attributes.</p>
   * @public
   */
  Values: DataTableValue[] | undefined;
}

/**
 * <p>A batch create data table value failure result.</p>
 * @public
 */
export interface BatchCreateDataTableValueFailureResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>A batch create data table value success result.</p>
 * @public
 */
export interface BatchCreateDataTableValueSuccessResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's record ID.</p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>The result's lock version.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchCreateDataTableValueResponse {
  /**
   * <p>A list of successfully created values with their identifiers and lock versions.</p>
   * @public
   */
  Successful: BatchCreateDataTableValueSuccessResult[] | undefined;

  /**
   * <p>A list of values that failed to be created with error messages explaining the failure reason.</p>
   * @public
   */
  Failed: BatchCreateDataTableValueFailureResult[] | undefined;
}

/**
 * <p>A data table delete value identifier.</p>
 * @public
 */
export interface DataTableDeleteValueIdentifier {
  /**
   * <p>The identifier's primary values.</p>
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * <p>The identifier's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier's lock version.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDataTableValueRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table. Must also accept the table ARN with or without a version alias.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>A list of value identifiers to delete, each specifying primary values, attribute name, and lock version
   *    information.</p>
   * @public
   */
  Values: DataTableDeleteValueIdentifier[] | undefined;
}

/**
 * <p>A batch delete data table value failure result.</p>
 * @public
 */
export interface BatchDeleteDataTableValueFailureResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>A batch delete data table value success result.</p>
 * @public
 */
export interface BatchDeleteDataTableValueSuccessResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's lock version.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDataTableValueResponse {
  /**
   * <p>A list of successfully deleted values with their identifiers and updated lock versions.</p>
   * @public
   */
  Successful: BatchDeleteDataTableValueSuccessResult[] | undefined;

  /**
   * <p>A list of values that failed to be deleted with error messages explaining the failure reason.</p>
   * @public
   */
  Failed: BatchDeleteDataTableValueFailureResult[] | undefined;
}

/**
 * <p>A data table value identifier.</p>
 * @public
 */
export interface DataTableValueIdentifier {
  /**
   * <p>The identifier's primary values.</p>
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * <p>The identifier's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeDataTableValueRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table. Must also accept the table ARN with or without a version alias.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>A list of value identifiers to retrieve, each specifying primary values and attribute names.</p>
   * @public
   */
  Values: DataTableValueIdentifier[] | undefined;
}

/**
 * <p>A batch describe data table value failure result.</p>
 * @public
 */
export interface BatchDescribeDataTableValueFailureResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>A primary value response.</p>
 * @public
 */
export interface PrimaryValueResponse {
  /**
   * <p>The value's attribute name.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The value's attribute ID.</p>
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * <p>The value's value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>A batch describe data table value success result.</p>
 * @public
 */
export interface BatchDescribeDataTableValueSuccessResult {
  /**
   * <p>The result's record ID.</p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>The result's attribute ID.</p>
   * @public
   */
  AttributeId: string | undefined;

  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValueResponse[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The result's lock version.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;

  /**
   * <p>The result's last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The result's last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeDataTableValueResponse {
  /**
   * <p>A list of successfully retrieved values with their data, metadata, and lock version information.</p>
   * @public
   */
  Successful: BatchDescribeDataTableValueSuccessResult[] | undefined;

  /**
   * <p>A list of values that failed to be retrieved with error messages explaining the failure reason.</p>
   * @public
   */
  Failed: BatchDescribeDataTableValueFailureResult[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>An array of associated dataset identifiers to remove.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>The identifier of the target account.  Use to disassociate a dataset from a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAnalyticsDataSetResponse {
  /**
   * <p>An array of successfully disassociated dataset identifiers.</p>
   * @public
   */
  Deleted?: string[] | undefined;

  /**
   * <p>A list of errors for any datasets not successfully removed.</p>
   * @public
   */
  Errors?: ErrorResult[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttachedFileMetadataRequest {
  /**
   * <p>The unique identifiers of the attached file resource.</p>
   * @public
   */
  FileIds: string[] | undefined;

  /**
   * <p>The unique identifier of the Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. The supported resources are <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Cases</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html">Email</a>.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * <p>Error describing a failure to retrieve attached file metadata through BatchGetAttachedFileMetadata
 *    action.</p>
 * @public
 */
export interface AttachedFileError {
  /**
   * <p> Status code describing the failure. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Why the attached file couldn't be retrieved. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId?: string | undefined;
}

/**
 * <p>Information on the identity that created the file.</p>
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
   * <p>An agent ARN representing a <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-resources-for-iam-policies">connect user</a>.</p>
   * @public
   */
  export interface ConnectUserArnMember {
    ConnectUserArn: string;
    AWSIdentityArn?: never;
    $unknown?: never;
  }

  /**
   * <p>STS or IAM ARN representing the identity of API Caller. SDK users cannot populate this and this value is
   *    calculated automatically if <code>ConnectUserArn</code> is not provided.</p>
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
 * <p>Information about the attached file.</p>
 * @public
 */
export interface AttachedFile {
  /**
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601 format:
   *     <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example, <code>2024-05-03T02:41:28.172Z</code>.</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource (ARN).</p>
   * @public
   */
  FileArn: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>The size of the attached file in bytes.</p>
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * <p>The current status of the attached file.</p>
   * @public
   */
  FileStatus: FileStatusType | undefined;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * <p>The use case for the file.</p>
   * @public
   */
  FileUseCaseType?: FileUseCaseType | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only current supported
   *    resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{ "Tags":
   *     \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetAttachedFileMetadataResponse {
  /**
   * <p>List of attached files that were successfully retrieved. </p>
   * @public
   */
  Files?: AttachedFile[] | undefined;

  /**
   * <p>List of errors of attached files that could not be retrieved. </p>
   * @public
   */
  Errors?: AttachedFileError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFlowAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A list of resource identifiers to retrieve flow associations.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services End User Messaging SMS phone number ARN when using <code>SMS_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services End User Messaging Social phone number ARN when using
   *       <code>WHATSAPP_MESSAGING_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource association.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;
}

/**
 * <p>Information about flow associations.</p>
 * @public
 */
export interface FlowAssociationSummary {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId?: string | undefined;

  /**
   * <p>The type of resource association.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface BatchGetFlowAssociationResponse {
  /**
   * <p>Information about flow associations.</p>
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[] | undefined;
}

/**
 * <p>Information associated with a campaign.</p>
 * @public
 */
export interface Campaign {
  /**
   * <p>A unique identifier for a campaign.</p>
   * @public
   */
  CampaignId?: string | undefined;
}

/**
 * <p>Information about the endpoint.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>Type of the endpoint.</p>
   * @public
   */
  Type?: EndpointType | undefined;

  /**
   * <p>Address of the endpoint.</p>
   * @public
   */
  Address?: string | undefined;
}

/**
 * <p>The config of the outbound strategy.</p>
 * @public
 */
export interface OutboundStrategyConfig {
  /**
   * <p>The config of agent first outbound strategy.</p>
   * @public
   */
  AgentFirst?: AgentFirst | undefined;
}

/**
 * <p>Information about the outbound strategy.</p>
 * @public
 */
export interface OutboundStrategy {
  /**
   * <p>Type of the outbound strategy.</p>
   * @public
   */
  Type: OutboundStrategyType | undefined;

  /**
   * <p>Config of the outbound strategy.</p>
   * @public
   */
  Config?: OutboundStrategyConfig | undefined;
}

/**
 * <p>Request object with information to create a contact.</p>
 * @public
 */
export interface ContactDataRequest {
  /**
   * <p>Endpoint associated with the Amazon Connect instance from which outbound contact will be initiated for the
   *    campaign.</p>
   * @public
   */
  SystemEndpoint?: Endpoint | undefined;

  /**
   * <p>Endpoint of the customer for which contact will be initiated.</p>
   * @public
   */
  CustomerEndpoint?: Endpoint | undefined;

  /**
   * <p>Identifier to uniquely identify individual requests in the batch.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>The identifier of the queue associated with the Amazon Connect instance in which contacts that are created
   *    will be queued.</p>
   * @public
   */
  QueueId?: string | undefined;

  /**
   * <p>List of attributes to be stored in a contact.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>Structure to store information associated with a campaign.</p>
   * @public
   */
  Campaign?: Campaign | undefined;

  /**
   * <p>Information about the outbound strategy.</p>
   * @public
   */
  OutboundStrategy?: OutboundStrategy | undefined;
}

/**
 * @public
 */
export interface BatchPutContactRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>List of individual contact requests.</p>
   * @public
   */
  ContactDataRequestList: ContactDataRequest[] | undefined;
}

/**
 * <p>Request for which contact failed to be generated.</p>
 * @public
 */
export interface FailedRequest {
  /**
   * <p>Request identifier provided in the API call in the ContactDataRequest to create a contact.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>Reason code for the failure.</p>
   * @public
   */
  FailureReasonCode?: FailureReasonCode | undefined;

  /**
   * <p>Why the request to create a contact failed.</p>
   * @public
   */
  FailureReasonMessage?: string | undefined;
}

/**
 * <p>Request for which contact was successfully created.</p>
 * @public
 */
export interface SuccessfulRequest {
  /**
   * <p>Request identifier provided in the API call in the ContactDataRequest to create a contact.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>The contactId of the contact that was created successfully.</p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutContactResponse {
  /**
   * <p>List of requests for which contact was successfully created.</p>
   * @public
   */
  SuccessfulRequestList?: SuccessfulRequest[] | undefined;

  /**
   * <p>List of requests for which contact creation failed.</p>
   * @public
   */
  FailedRequestList?: FailedRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDataTableValueRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table. Must also accept the table ARN with or without a version alias.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>A list of values to update, each including the current lock version to ensure optimistic locking.</p>
   * @public
   */
  Values: DataTableValue[] | undefined;
}

/**
 * <p>A batch update data table value failure result.</p>
 * @public
 */
export interface BatchUpdateDataTableValueFailureResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>A batch update data table value success result.</p>
 * @public
 */
export interface BatchUpdateDataTableValueSuccessResult {
  /**
   * <p>The result's primary values.</p>
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * <p>The result's attribute name.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The result's lock version.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface BatchUpdateDataTableValueResponse {
  /**
   * <p>A list of successfully updated values with their new lock versions and identifiers.</p>
   * @public
   */
  Successful: BatchUpdateDataTableValueSuccessResult[] | undefined;

  /**
   * <p>A list of values that failed to be updated with error messages explaining the failure reason.</p>
   * @public
   */
  Failed: BatchUpdateDataTableValueFailureResult[] | undefined;
}

/**
 * @public
 */
export interface ClaimPhoneNumberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The phone number you want to claim. Phone numbers are formatted <code>[+] [country code] [subscriber number
   *     including area code]</code>.</p>
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>Pattern: <code>^[a-f0-9]\{8\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{12\}$</code>
   *          </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ClaimPhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
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
   * <p>The unique identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. The supported resources are <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Cases</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html">Email</a>.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the status.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of the status.</p>
   * @public
   */
  State: AgentStatusState | undefined;

  /**
   * <p>The display order of the status.</p>
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   * @public
   */
  AgentStatusARN?: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId?: string | undefined;
}

/**
 * <p>Well-formed data on a contact, used by agents to complete a contact request. You can have up to 4,096 UTF-8
 *    bytes across all references for a contact.</p>
 * @public
 */
export interface Reference {
  /**
   * <p>A valid value for the reference. For example, for a URL reference, a formatted URL that is displayed to an agent
   *    in the Contact Control Panel (CCP).</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of the reference. <code>DATE</code> must be of type Epoch timestamp.
   *    </p>
   * @public
   */
  Type: ReferenceType | undefined;

  /**
   * <p>Status of the attachment reference type.</p>
   * @public
   */
  Status?: ReferenceStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the reference</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Relevant details why the reference was not successfully created.</p>
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * <p>The user details for the contact.</p>
 * @public
 */
export interface UserInfo {
  /**
   * <p>The user identifier for the contact.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactResponse {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created contact.</p>
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the
   *      <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Type: ContactFlowType | undefined;

  /**
   * <p>The description of the flow. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>Indicates the flow status as either <code>SAVED</code> or <code>PUBLISHED</code>. The <code>PUBLISHED</code>
   *    status will initiate validation on the content. the <code>SAVED</code> status does not initiate validation of the
   *    content. <code>SAVED</code> | <code>PUBLISHED</code>.</p>
   * @public
   */
  Status?: ContactFlowStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowResponse {
  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * <p>Indicates the checksum value of the latest published flow content.</p>
   * @public
   */
  FlowContentSha256?: string | undefined;
}

/**
 * <p>Information about a problem detail.</p>
 * @public
 */
export interface ProblemDetail {
  /**
   * <p>The problem detail's message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The external invocation configuration for the flow module</p>
 * @public
 */
export interface ExternalInvocationConfiguration {
  /**
   * <p>Enable external invocation.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the flow module. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration settings for the flow module.</p>
   * @public
   */
  Settings?: string | undefined;

  /**
   * <p>The external invocation configuration for the flow module.</p>
   * @public
   */
  ExternalInvocationConfiguration?: ExternalInvocationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleResponse {
  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleAliasRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The description of the alias.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The version of the flow module.</p>
   * @public
   */
  ContactFlowModuleVersion: number | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleAliasResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   * @public
   */
  ContactFlowModuleArn?: string | undefined;

  /**
   * <p>The identifier of the alias.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The description of the flow module version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>Indicates the checksum value of the flow module content.</p>
   * @public
   */
  FlowModuleContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   * @public
   */
  ContactFlowModuleArn?: string | undefined;

  /**
   * <p>The version of the flow module.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The description of the flow version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>Indicates the checksum value of the flow content.</p>
   * @public
   */
  FlowContentSha256?: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  ContactFlowVersion?: number | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface CreateDataTableRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance where the data table will be created.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name for the data table. Must conform to Connect human readable string specification and have 1-127
   *    characters. Whitespace must be trimmed first. Must not start with the reserved case insensitive values 'connect:' and
   *    'aws:'. Must be unique for the instance using case-insensitive comparison.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description for the data table. Must conform to Connect human readable string specification and have
   *    0-250 characters. Whitespace must be trimmed first.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IANA timezone identifier to use when resolving time based dynamic values. Required even if no time slices
   *    are specified.</p>
   * @public
   */
  TimeZone: string | undefined;

  /**
   * <p>The data level that concurrent value edits are locked on. One of DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE,
   *    and NONE. NONE is the default if unspecified. This determines how concurrent edits are handled when multiple users
   *    attempt to modify values simultaneously.</p>
   * @public
   */
  ValueLockLevel: DataTableLockLevel | undefined;

  /**
   * <p>The status of the data table. One of PUBLISHED or SAVED. Required parameter that determines the initial state of
   *    the table.</p>
   * @public
   */
  Status: DataTableStatus | undefined;

  /**
   * <p>Key value pairs for attribute based access control (TBAC or ABAC). Optional tags to apply to the data table for
   *    organization and access control purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataTableResponse {
  /**
   * <p>The unique identifier for the created data table. Does not include the version alias.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the created data table. Does not include the version alias.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The lock version information for the created data table, used for optimistic locking and table
   *    versioning.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * <p>Defines enumeration validation for attribute values. Allows specifying a list of permitted values and whether
 *    custom values beyond the enumerated list are allowed.</p>
 * @public
 */
export interface ValidationEnum {
  /**
   * <p>Boolean that defaults to false. When true, only values specified in the enum list are allowed. When false,
   *    custom values beyond the enumerated list are permitted.</p>
   * @public
   */
  Strict?: boolean | undefined;

  /**
   * <p>A list of predefined values that are allowed for this attribute. These values are always permitted regardless of
   *    the Strict setting.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Defines validation rules for data table attribute values. Based on JSON Schema Draft 2020-12 with additional
 *    Connect-specific validations. Validation rules ensure data integrity and consistency across the data table.</p>
 * @public
 */
export interface Validation {
  /**
   * <p>The minimum number of characters a text value can contain. Applies to TEXT value type and values within a
   *    TEXT_LIST. Must be less than or equal to MaxLength.</p>
   * @public
   */
  MinLength?: number | undefined;

  /**
   * <p>The maximum number of characters a text value can contain. Applies to TEXT value type and values within a
   *    TEXT_LIST. Must be greater than or equal to MinLength.</p>
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * <p>The minimum number of values in a list. Must be an integer greater than or equal to 0 and less than or equal to
   *    MaxValues. Applies to all list types.</p>
   * @public
   */
  MinValues?: number | undefined;

  /**
   * <p>The maximum number of values in a list. Must be an integer greater than or equal to 0 and greater than or equal
   *    to MinValues. Applies to all list types.</p>
   * @public
   */
  MaxValues?: number | undefined;

  /**
   * <p>Boolean that defaults to false. Applies to text lists and text primary attributes. When true, enforces
   *    case-insensitive uniqueness for primary attributes and allows case-insensitive lookups.</p>
   * @public
   */
  IgnoreCase?: boolean | undefined;

  /**
   * <p>The smallest inclusive numeric value for NUMBER value type. Cannot be provided when ExclusiveMinimum is also
   *    provided. Must be less than or equal to Maximum and less than ExclusiveMaximum. Applies to NUMBER and values within
   *    NUMBER_LIST.</p>
   * @public
   */
  Minimum?: number | undefined;

  /**
   * <p>The largest inclusive numeric value for NUMBER value type. Can be provided alongside ExclusiveMaximum where both
   *    operate independently. Must be greater than or equal to Minimum and greater than ExclusiveMinimum. Applies to NUMBER
   *    and values within NUMBER_LIST.</p>
   * @public
   */
  Maximum?: number | undefined;

  /**
   * <p>The smallest exclusive numeric value for NUMBER value type. Can be provided alongside Minimum where both operate
   *    independently. Must be less than ExclusiveMaximum and Maximum. Applies to NUMBER and values within
   *    NUMBER_LIST.</p>
   * @public
   */
  ExclusiveMinimum?: number | undefined;

  /**
   * <p>The largest exclusive numeric value for NUMBER value type. Can be provided alongside Maximum where both operate
   *    independently. Must be greater than ExclusiveMinimum and Minimum. Applies to NUMBER and values within
   *    NUMBER_LIST.</p>
   * @public
   */
  ExclusiveMaximum?: number | undefined;

  /**
   * <p>Specifies that numeric values must be multiples of this number. Must be greater than 0. The result of dividing a
   *    value by this multiple must result in an integer. Applies to NUMBER and values within NUMBER_LIST.</p>
   * @public
   */
  MultipleOf?: number | undefined;

  /**
   * <p>Defines enumeration constraints for attribute values. Can specify a list of allowed values and whether custom
   *    values are permitted beyond the enumerated list.</p>
   * @public
   */
  Enum?: ValidationEnum | undefined;
}

/**
 * @public
 */
export interface CreateDataTableAttributeRequest {
  /**
   * <p>The unique identifier for the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the data table. Must also accept the table ARN with or without a version alias. If the
   *    version is provided as part of the identifier or ARN, the version must be one of the two available system managed
   *    aliases, $SAVED or $LATEST.</p>
   * @public
   */
  DataTableId: string | undefined;

  /**
   * <p>The name for the attribute. Must conform to Connect human readable string specification and have 1-127
   *    characters. Must not start with the reserved case insensitive values 'connect:' and 'aws:'. Whitespace trimmed before
   *    persisting. Must be unique for the data table using case-insensitive comparison.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of value allowed or the resultant type after the value's expression is evaluated. Must be one of TEXT,
   *    TEXT_LIST, NUMBER, NUMBER_LIST, and BOOLEAN.</p>
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * <p>An optional description for the attribute. Must conform to Connect human readable string specification and have
   *    0-250 characters. Whitespace trimmed before persisting.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Optional boolean that defaults to false. Determines if the value is used to identify a record in the table.
   *    Values for primary attributes must not be expressions.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>Optional validation rules for the attribute. Borrows heavily from JSON Schema - Draft 2020-12. The maximum
   *    length of arrays within validations and depth of validations is 5. There are default limits that apply to all types.
   *    Customer specified limits in excess of the default limits are not permitted.</p>
   * @public
   */
  Validation?: Validation | undefined;
}

/**
 * @public
 */
export interface CreateDataTableAttributeResponse {
  /**
   * <p>The name of the created attribute since it also serves as the identifier. This could be different than the
   *    parameter passed in since it will be trimmed for whitespace.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier assigned to the created attribute.</p>
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * <p>The lock version information for the data table and attribute, used for optimistic locking and
   *    versioning.</p>
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface CreateEmailAddressRequest {
  /**
   * <p>The description of the email address.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The email address, including the domain.</p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>The display name of email address</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEmailAddressResponse {
  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email address.</p>
   * @public
   */
  EmailAddressArn?: string | undefined;
}

/**
 * <p>The automatic evaluation configuration of an evaluation form.</p>
 * @public
 */
export interface EvaluationFormAutoEvaluationConfiguration {
  /**
   * <p>When automated evaluation is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>An enablement expression source item.</p>
 * @public
 */
export interface EvaluationFormItemEnablementSource {
  /**
   * <p>A type of source item. </p>
   * @public
   */
  Type: EvaluationFormItemEnablementSourceType | undefined;

  /**
   * <p>A referenceId of the source item.</p>
   * @public
   */
  RefId?: string | undefined;
}

/**
 * <p>An enablement expression source value.</p>
 * @public
 */
export interface EvaluationFormItemEnablementSourceValue {
  /**
   * <p>A type of source item value. </p>
   * @public
   */
  Type: EvaluationFormItemEnablementSourceValueType | undefined;

  /**
   * <p>A referenceId of the source value.</p>
   * @public
   */
  RefId?: string | undefined;
}

/**
 * <p>An expression that defines a basic building block of conditional enablement.</p>
 * @public
 */
export interface EvaluationFormItemEnablementExpression {
  /**
   * <p>A source item of enablement expression.</p>
   * @public
   */
  Source: EvaluationFormItemEnablementSource | undefined;

  /**
   * <p>A list of values from source item.</p>
   * @public
   */
  Values: EvaluationFormItemEnablementSourceValue[] | undefined;

  /**
   * <p>A comparator to be used against list of values. </p>
   * @public
   */
  Comparator: EvaluationFormItemSourceValuesComparator | undefined;
}

/**
 * <p>A question automation answer.</p>
 * @public
 */
export interface EvaluationFormQuestionAutomationAnswerSource {
  /**
   * <p>The automation answer source type.</p>
   * @public
   */
  SourceType: EvaluationFormQuestionAutomationAnswerSourceType | undefined;
}

/**
 * <p>Automation rule for multi-select questions based on rule categories.</p>
 * @public
 */
export interface MultiSelectQuestionRuleCategoryAutomation {
  /**
   * <p>The category name for this automation rule.</p>
   * @public
   */
  Category: string | undefined;

  /**
   * <p>The condition for this automation rule.</p>
   * @public
   */
  Condition: MultiSelectQuestionRuleCategoryAutomationCondition | undefined;

  /**
   * <p>Reference IDs of options for this automation rule.</p>
   * @public
   */
  OptionRefIds: string[] | undefined;
}

/**
 * <p>An automation option for a multi-select question.</p>
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
   * <p>Rule category configuration for this automation option.</p>
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
 * <p>Automation configuration for multi-select questions.</p>
 * @public
 */
export interface EvaluationFormMultiSelectQuestionAutomation {
  /**
   * <p>Automation options for the multi-select question.</p>
   * @public
   */
  Options?: EvaluationFormMultiSelectQuestionAutomationOption[] | undefined;

  /**
   * <p>Reference IDs of default options.</p>
   * @public
   */
  DefaultOptionRefIds?: string[] | undefined;

  /**
   * <p>A question automation answer.</p>
   * @public
   */
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource | undefined;
}

/**
 * <p>An option for a multi-select question in an evaluation form.</p>
 * @public
 */
export interface EvaluationFormMultiSelectQuestionOption {
  /**
   * <p>Reference identifier for this option.</p>
   * @public
   */
  RefId: string | undefined;

  /**
   * <p>Display text for this option.</p>
   * @public
   */
  Text: string | undefined;
}

/**
 * <p>Properties for a multi-select question in an evaluation form.</p>
 * @public
 */
export interface EvaluationFormMultiSelectQuestionProperties {
  /**
   * <p>Options available for this multi-select question.</p>
   * @public
   */
  Options: EvaluationFormMultiSelectQuestionOption[] | undefined;

  /**
   * <p>Display format for the multi-select question.</p>
   * @public
   */
  DisplayAs?: EvaluationFormMultiSelectQuestionDisplayMode | undefined;

  /**
   * <p>Automation configuration for this multi-select question.</p>
   * @public
   */
  Automation?: EvaluationFormMultiSelectQuestionAutomation | undefined;
}

/**
 * <p>Information about the property value used in automation of a numeric questions. Label values are associated with
 *    minimum and maximum values for the numeric question.</p>
 *          <ul>
 *             <li>
 *                <p>Sentiment scores have a minimum value of -5 and maximum value of 5.</p>
 *             </li>
 *             <li>
 *                <p> Duration labels, such as <code>NON_TALK_TIME</code>, <code>CONTACT_DURATION</code>,
 *       <code>AGENT_INTERACTION_DURATION</code>, <code>CUSTOMER_HOLD_TIME</code> have a minimum value of 0 and maximum
 *      value of 63072000.</p>
 *             </li>
 *             <li>
 *                <p>Percentages have a minimum value of 0 and maximum value of 100. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NUMBER_OF_INTERRUPTIONS</code> has a minimum value of 0 and maximum value of 1000.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface NumericQuestionPropertyValueAutomation {
  /**
   * <p>The property label of the automation.</p>
   * @public
   */
  Label: NumericQuestionPropertyAutomationLabel | undefined;
}

/**
 * <p>Information about the automation configuration in numeric questions.</p>
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
   * <p>The property value of the automation.</p>
   * @public
   */
  export interface PropertyValueMember {
    PropertyValue: NumericQuestionPropertyValueAutomation;
    AnswerSource?: never;
    $unknown?: never;
  }

  /**
   * <p>A source of automation answer for numeric question.</p>
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
 * <p>Information about automatic fail configuration for an evaluation form.</p>
 * @public
 */
export interface AutomaticFailConfiguration {
  /**
   * <p>The referenceId of the target section for auto failure.</p>
   * @public
   */
  TargetSection?: string | undefined;
}

/**
 * <p>Information about the option range used for scoring in numeric questions.</p>
 * @public
 */
export interface EvaluationFormNumericQuestionOption {
  /**
   * <p>The minimum answer value of the range option.</p>
   * @public
   */
  MinValue: number | undefined;

  /**
   * <p>The maximum answer value of the range option.</p>
   * @public
   */
  MaxValue: number | undefined;

  /**
   * <p>The score assigned to answer values within the range option.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation
   *    gets a score of 0.</p>
   * @public
   */
  AutomaticFail?: boolean | undefined;

  /**
   * <p>A configuration for automatic fail.</p>
   * @public
   */
  AutomaticFailConfiguration?: AutomaticFailConfiguration | undefined;
}

/**
 * <p>Information about properties for a numeric question in an evaluation form.</p>
 * @public
 */
export interface EvaluationFormNumericQuestionProperties {
  /**
   * <p>The minimum answer value.</p>
   * @public
   */
  MinValue: number | undefined;

  /**
   * <p>The maximum answer value.</p>
   * @public
   */
  MaxValue: number | undefined;

  /**
   * <p>The scoring options of the numeric question.</p>
   * @public
   */
  Options?: EvaluationFormNumericQuestionOption[] | undefined;

  /**
   * <p>The automation properties of the numeric question.</p>
   * @public
   */
  Automation?: EvaluationFormNumericQuestionAutomation | undefined;
}

/**
 * <p>Information about the automation option based on a rule category for a single select question.</p>
 * @public
 */
export interface SingleSelectQuestionRuleCategoryAutomation {
  /**
   * <p> The category name, as defined in Rules.</p>
   * @public
   */
  Category: string | undefined;

  /**
   * <p>The condition to apply for the automation option. If the condition is <code>PRESENT</code>, then the option is
   *    applied when the contact data includes the category. Similarly, if the condition is <code>NOT_PRESENT</code>, then
   *    the option is applied when the contact data does not include the category.</p>
   * @public
   */
  Condition: SingleSelectQuestionRuleCategoryAutomationCondition | undefined;

  /**
   * <p>The identifier of the answer option.</p>
   * @public
   */
  OptionRefId: string | undefined;
}

/**
 * <p>Information about the automation option of a single select question.</p>
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
   * <p>The automation option based on a rule category for the single select question.</p>
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
 * <p>Information about the automation configuration in single select questions. Automation options are evaluated in
 *    order, and the first matched option is applied. If no automation option matches, and there is a default option, then
 *    the default option is applied.</p>
 * @public
 */
export interface EvaluationFormSingleSelectQuestionAutomation {
  /**
   * <p>The automation options of the single select question.</p>
   * @public
   */
  Options?: EvaluationFormSingleSelectQuestionAutomationOption[] | undefined;

  /**
   * <p>The identifier of the default answer option, when none of the automation options match the criteria.</p>
   * @public
   */
  DefaultOptionRefId?: string | undefined;

  /**
   * <p>Automation answer source.</p>
   * @public
   */
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource | undefined;
}

/**
 * <p>Information about the automation configuration in single select questions.</p>
 * @public
 */
export interface EvaluationFormSingleSelectQuestionOption {
  /**
   * <p>The identifier of the answer option. An identifier must be unique within the question.</p>
   * @public
   */
  RefId: string | undefined;

  /**
   * <p>The title of the answer option.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The score assigned to the answer option.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation
   *    gets a score of 0.</p>
   * @public
   */
  AutomaticFail?: boolean | undefined;

  /**
   * <p>Whether automatic fail is configured on a single select question. </p>
   * @public
   */
  AutomaticFailConfiguration?: AutomaticFailConfiguration | undefined;
}

/**
 * <p>Information about the options in single select questions.</p>
 * @public
 */
export interface EvaluationFormSingleSelectQuestionProperties {
  /**
   * <p>The answer options of the single select question.</p>
   * @public
   */
  Options: EvaluationFormSingleSelectQuestionOption[] | undefined;

  /**
   * <p>The display mode of the single select question.</p>
   * @public
   */
  DisplayAs?: EvaluationFormSingleSelectQuestionDisplayMode | undefined;

  /**
   * <p>The display mode of the single select question.</p>
   * @public
   */
  Automation?: EvaluationFormSingleSelectQuestionAutomation | undefined;
}

/**
 * <p>Information about the automation configuration in text questions.</p>
 * @public
 */
export interface EvaluationFormTextQuestionAutomation {
  /**
   * <p>Automation answer source.</p>
   * @public
   */
  AnswerSource?: EvaluationFormQuestionAutomationAnswerSource | undefined;
}

/**
 * <p>Information about properties for a text question in an evaluation form.</p>
 * @public
 */
export interface EvaluationFormTextQuestionProperties {
  /**
   * <p>The automation properties of the text question.</p>
   * @public
   */
  Automation?: EvaluationFormTextQuestionAutomation | undefined;
}

/**
 * <p>Information about properties for a question in an evaluation form. The question type properties must be either
 *    for a numeric question or a single select question.</p>
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
   * <p>The properties of the numeric question.</p>
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
   * <p>The properties of the numeric question.</p>
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
   * <p>The properties of the text question.</p>
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
   * <p>Properties for multi-select question types.</p>
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
 * <p>Language configuration for an evaluation form.</p>
 * @public
 */
export interface EvaluationFormLanguageConfiguration {
  /**
   * <p>The language for the evaluation form.</p>
   * @public
   */
  FormLanguage?: EvaluationFormLanguageCode | undefined;
}

/**
 * <p>Information about scoring strategy for an evaluation form.</p>
 * @public
 */
export interface EvaluationFormScoringStrategy {
  /**
   * <p>The scoring mode of the evaluation form.</p>
   * @public
   */
  Mode: EvaluationFormScoringMode | undefined;

  /**
   * <p>The scoring status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormScoringStatus | undefined;
}

/**
 * <p>Configuration that specifies the target for an evaluation form.</p>
 * @public
 */
export interface EvaluationFormTargetConfiguration {
  /**
   * <p>The contact interaction type for this evaluation form.</p>
   * @public
   */
  ContactInteractionType: ContactInteractionType | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationFormResponse {
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
}

/**
 * <p>The start time or end time for an hours of operation.</p>
 * @public
 */
export interface HoursOfOperationTimeSlice {
  /**
   * <p>The hours.</p>
   * @public
   */
  Hours: number | undefined;

  /**
   * <p>The minutes.</p>
   * @public
   */
  Minutes: number | undefined;
}

/**
 * <p>Contains information about the hours of operation.</p>
 * @public
 */
export interface HoursOfOperationConfig {
  /**
   * <p>The day that the hours of operation applies to.</p>
   * @public
   */
  Day: HoursOfOperationDays | undefined;

  /**
   * <p>The start time that your contact center opens.</p>
   * @public
   */
  StartTime: HoursOfOperationTimeSlice | undefined;

  /**
   * <p>The end time that your contact center closes.</p>
   * @public
   */
  EndTime: HoursOfOperationTimeSlice | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the hours of operation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time zone of the hours of operation.</p>
   * @public
   */
  TimeZone: string | undefined;

  /**
   * <p>Configuration information for the hours of operation: day, start time, and end time.</p>
   * @public
   */
  Config: HoursOfOperationConfig[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationResponse {
  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   * @public
   */
  HoursOfOperationArn?: string | undefined;
}

/**
 * <p>The start time or end time for an hours of operation override.</p>
 * @public
 */
export interface OverrideTimeSlice {
  /**
   * <p>The hours.</p>
   * @public
   */
  Hours: number | undefined;

  /**
   * <p>The minutes.</p>
   * @public
   */
  Minutes: number | undefined;
}

/**
 * <p>Information about the hours of operation override config: day, start time, and end time.</p>
 * @public
 */
export interface HoursOfOperationOverrideConfig {
  /**
   * <p>The day that the hours of operation override applies to.</p>
   * @public
   */
  Day?: OverrideDays | undefined;

  /**
   * <p>The start time when your contact center opens if overrides are applied.</p>
   * @public
   */
  StartTime?: OverrideTimeSlice | undefined;

  /**
   * <p>The end time that your contact center closes if overrides are applied.</p>
   * @public
   */
  EndTime?: OverrideTimeSlice | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationOverrideRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The name of the hours of operation override.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the hours of operation override.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration information for the hours of operation override: day, start time, and end time.</p>
   * @public
   */
  Config: HoursOfOperationOverrideConfig[] | undefined;

  /**
   * <p>The date from when the hours of operation override is effective.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The date until when the hours of operation override is effective.</p>
   * @public
   */
  EffectiveTill: string | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationOverrideResponse {
  /**
   * <p>The identifier for the hours of operation override.</p>
   * @public
   */
  HoursOfOperationOverrideId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * <p>The idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The type of identity management for your Amazon Connect users.</p>
   * @public
   */
  IdentityManagementType: DirectoryType | undefined;

  /**
   * <p>The name for your instance.</p>
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * <p>The identifier for the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Your contact center handles incoming contacts.</p>
   * @public
   */
  InboundCallsEnabled: boolean | undefined;

  /**
   * <p>Your contact center allows outbound calls.</p>
   * @public
   */
  OutboundCallsEnabled: boolean | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{ "tags":
   *     \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * <p>The identifier for the instance.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of information to be ingested.</p>
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   *          <note>
   *             <p>When integrating with Amazon Web Services End User Messaging, the Amazon Connect and Amazon Web Services End
   *     User Messaging instances must be in the same account.</p>
   *          </note>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>The URL for the external application. This field is only required for the EVENT integration type.</p>
   * @public
   */
  SourceApplicationUrl?: string | undefined;

  /**
   * <p>The name of the external application. This field is only required for the EVENT integration type.</p>
   * @public
   */
  SourceApplicationName?: string | undefined;

  /**
   * <p>The type of the data source. This field is only required for the EVENT integration type.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationAssociationResponse {
  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the association.</p>
   * @public
   */
  IntegrationAssociationArn?: string | undefined;
}

/**
 * <p>The details to add for the participant.</p>
 * @public
 */
export interface ParticipantDetailsToAdd {
  /**
   * <p>The role of the participant being added.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The configuration for the allowed video and screen sharing capabilities for participants present over the call.
   *    For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up
   *     in-app, web, video calling, and screen sharing capabilities</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  ParticipantCapabilities?: ParticipantCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateParticipantRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect.  Supports contacts in the CHAT channel and VOICE (WebRTC) channels. For WebRTC calls, this should be
   *    the initial contact ID that was generated when the contact was first created (from the StartWebRTCContact API) in the
   *    VOICE channel</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information identifying the participant.</p>
   *          <important>
   *             <p>The only valid value for <code>ParticipantRole</code> is <code>CUSTOM_BOT</code> for chat contact and
   *      <code>CUSTOMER</code> for voice contact.</p>
   *          </important>
   * @public
   */
  ParticipantDetails: ParticipantDetailsToAdd | undefined;
}

/**
 * <p>The credentials used by the participant.</p>
 * @public
 */
export interface ParticipantTokenCredentials {
  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat participant. </p>
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * <p>The expiration of the token. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *    2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  Expiry?: string | undefined;
}

/**
 * @public
 */
export interface CreateParticipantResponse {
  /**
   * <p>The token used by the chat participant to call <code>CreateParticipantConnection</code>. The participant token
   *    is valid for the lifetime of a chat participant.</p>
   * @public
   */
  ParticipantCredentials?: ParticipantTokenCredentials | undefined;

  /**
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same throughout the chat
   *    lifecycle.</p>
   * @public
   */
  ParticipantId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePersistentContactAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>This is the contactId of the current contact that the <code>CreatePersistentContactAssociation</code> API is
   *    being called from.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The contactId chosen for rehydration depends on the type chosen.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENTIRE_PAST_SESSION</code>: Rehydrates a chat from the most recently terminated past chat contact of the
   *      specified past ended chat session. To use this type, provide the <code>initialContactId</code> of the past ended
   *      chat session in the <code>sourceContactId</code> field. In this type, Amazon Connect determines what the most
   *      recent chat contact on the past ended chat session and uses it to start a persistent chat. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_SEGMENT</code>: Rehydrates a chat from the specified past chat contact provided in the
   *       <code>sourceContactId</code> field. </p>
   *             </li>
   *          </ul>
   *          <p>The actual contactId used for rehydration is provided in the response of this API.</p>
   *          <p>To illustrate how to use rehydration type, consider the following example: A customer starts a chat session.
   *    Agent a1 accepts the chat and a conversation starts between the customer and Agent a1. This first contact creates a
   *    contact ID <b>C1</b>. Agent a1 then transfers the chat to Agent a2. This creates another
   *    contact ID <b>C2</b>. At this point Agent a2 ends the chat. The customer is forwarded to
   *    the disconnect flow for a post chat survey that creates another contact ID <b>C3</b>. After
   *    the chat survey, the chat session ends. Later, the customer returns and wants to resume their past chat session. At
   *    this point, the customer can have following use cases: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Use Case 1</b>: The customer wants to continue the past chat session but they
   *      want to hide the post chat survey. For this they will use the following configuration:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Configuration</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>SourceContactId = "C2"</p>
   *                         </li>
   *                         <li>
   *                            <p>RehydrationType = "FROM_SEGMENT"</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Expected behavior</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>This starts a persistent chat session from the specified past ended contact (C2). Transcripts of past chat
   *          sessions C2 and C1 are accessible in the current persistent chat session. Note that chat segment C3 is dropped
   *          from the persistent chat session.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Use Case 2</b>: The customer wants to continue the past chat session and see the
   *      transcript of the entire past engagement, including the post chat survey. For this they will use the following
   *      configuration:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Configuration</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>SourceContactId = "C1"</p>
   *                         </li>
   *                         <li>
   *                            <p>RehydrationType = "ENTIRE_PAST_SESSION"</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Expected behavior</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>This starts a persistent chat session from the most recently ended chat contact (C3). Transcripts of past
   *          chat sessions C3, C2 and C1 are accessible in the current persistent chat session.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  RehydrationType: RehydrationType | undefined;

  /**
   * <p>The contactId from which a persistent chat session must be started.</p>
   * @public
   */
  SourceContactId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePersistentContactAssociationResponse {
  /**
   * <p>The contactId from which a persistent chat session is started. This field is populated only for persistent
   *    chat.</p>
   * @public
   */
  ContinuedFromContactId?: string | undefined;
}

/**
 * <p>Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as
 *    controlling how a predefined attribute should be displayed in the Amazon Connect admin website.</p>
 * @public
 */
export interface InputPredefinedAttributeConfiguration {
  /**
   * <p>When this parameter is set to true, Amazon Connect enforces strict validation on the specific values, if the
   *    values are predefined in attributes. The contact will store only valid and predefined values for the predefined
   *    attribute key.</p>
   * @public
   */
  EnableValueValidationOnAssociation?: boolean | undefined;
}

/**
 * <p>Information about values of a predefined attribute.</p>
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
   * <p>Predefined attribute values of type string list.</p>
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
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The name of the predefined attribute. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The values of the predefined attribute. </p>
   * @public
   */
  Values?: PredefinedAttributeValues | undefined;

  /**
   * <p>Values that enable you to categorize your predefined attributes. You can use them in custom UI elements across the Amazon Connect admin website.</p>
   * @public
   */
  Purposes?: string[] | undefined;

  /**
   * <p>Custom metadata that is associated to predefined attributes to control behavior
   * in upstream services, such as controlling
   * how a predefined attribute should be displayed in the Amazon Connect admin website.</p>
   * @public
   */
  AttributeConfiguration?: InputPredefinedAttributeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html">GetPromptFile</a>
   *  API instead of providing S3 URIs.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  PromptARN?: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId?: string | undefined;
}

/**
 * <p>The contact configuration for push notification registration.</p>
 * @public
 */
export interface ContactConfiguration {
  /**
   * <p>The identifier of the contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The role of the participant in the chat conversation.</p>
   *          <note>
   *             <p>Only <code>CUSTOMER</code> is currently supported. Any other values other than <code>CUSTOMER</code> will
   *     result in an exception (4xx error).</p>
   *          </note>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>Whether to include raw connect message in the push notification payload. Default is <code>False</code>.</p>
   * @public
   */
  IncludeRawMessage?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePushNotificationRegistrationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name
   *    (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Pinpoint application.</p>
   * @public
   */
  PinpointAppArn: string | undefined;

  /**
   * <p>The push notification token issued by the Apple or Google gateways.</p>
   * @public
   */
  DeviceToken: string | undefined;

  /**
   * <p>The device type to use when sending the message.</p>
   * @public
   */
  DeviceType: DeviceType | undefined;

  /**
   * <p>The contact configuration for push notification registration.</p>
   * @public
   */
  ContactConfiguration: ContactConfiguration | undefined;
}

/**
 * @public
 */
export interface CreatePushNotificationRegistrationResponse {
  /**
   * <p>The identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;
}

/**
 * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
 * @public
 */
export interface OutboundCallerConfig {
  /**
   * <p>The caller ID name.</p>
   * @public
   */
  OutboundCallerIdName?: string | undefined;

  /**
   * <p>The caller ID number.</p>
   * @public
   */
  OutboundCallerIdNumberId?: string | undefined;

  /**
   * <p>The outbound whisper flow to be used during an outbound call.</p>
   * @public
   */
  OutboundFlowId?: string | undefined;
}

/**
 * <p>The outbound email address ID.</p>
 * @public
 */
export interface OutboundEmailConfig {
  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  OutboundEmailAddressId?: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the queue.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   * @public
   */
  OutboundCallerConfig?: OutboundCallerConfig | undefined;

  /**
   * <p>The outbound email address ID for a specified queue.</p>
   * @public
   */
  OutboundEmailConfig?: OutboundEmailConfig | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   * @public
   */
  MaxContacts?: number | undefined;

  /**
   * <p>The quick connects available to agents who are working the queue.</p>
   * @public
   */
  QuickConnectIds?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn?: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId?: string | undefined;
}

/**
 * <p> Configuration for quick connect. </p>
 * @public
 */
export interface FlowQuickConnectConfig {
  /**
   * <p> The contact flow ID for the quick connect configuration. </p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * <p>Contains information about a phone number for a quick connect.</p>
 * @public
 */
export interface PhoneNumberQuickConnectConfig {
  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * <p>Contains information about a queue for a quick connect. The flow must be of type Transfer to Queue.</p>
 * @public
 */
export interface QueueQuickConnectConfig {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * <p>Contains information about the quick connect configuration settings for a user. The contact flow must be of type
 *    Transfer to Agent.</p>
 * @public
 */
export interface UserQuickConnectConfig {
  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * <p>Contains configuration settings for a quick connect.</p>
 * @public
 */
export interface QuickConnectConfig {
  /**
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). </p>
   * @public
   */
  QuickConnectType: QuickConnectType | undefined;

  /**
   * <p>The user configuration. This is required only if QuickConnectType is USER.</p>
   * @public
   */
  UserConfig?: UserQuickConnectConfig | undefined;

  /**
   * <p>The queue configuration. This is required only if QuickConnectType is QUEUE.</p>
   * @public
   */
  QueueConfig?: QueueQuickConnectConfig | undefined;

  /**
   * <p>The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.</p>
   * @public
   */
  PhoneConfig?: PhoneNumberQuickConnectConfig | undefined;

  /**
   * <p> Flow configuration for quick connect setup. </p>
   * @public
   */
  FlowConfig?: FlowQuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface CreateQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name of the quick connect.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the quick connect.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration settings for the quick connect.</p>
   * @public
   */
  QuickConnectConfig: QuickConnectConfig | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickConnectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the quick connect. </p>
   * @public
   */
  QuickConnectARN?: string | undefined;

  /**
   * <p>The identifier for the quick connect. </p>
   * @public
   */
  QuickConnectId?: string | undefined;
}

/**
 * <p>Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be
 *    offered a contact from a different channel.</p>
 * @public
 */
export interface CrossChannelBehavior {
  /**
   * <p>Specifies the other channels that can be routed to an agent handling their current channel.</p>
   * @public
   */
  BehaviorType: BehaviorType | undefined;
}

/**
 * <p>Contains information about which channels are supported, and how many contacts an agent can have on a channel
 *    simultaneously.</p>
 * @public
 */
export interface MediaConcurrency {
  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   * @public
   */
  Channel: Channel | undefined;

  /**
   * <p>The number of contacts an agent can have on a channel simultaneously.</p>
   *          <p>Valid Range for <code>VOICE</code>: Minimum value of 1. Maximum value of 1.</p>
   *          <p>Valid Range for <code>CHAT</code>: Minimum value of 1. Maximum value of 10.</p>
   *          <p>Valid Range for <code>TASK</code>: Minimum value of 1. Maximum value of 10.</p>
   * @public
   */
  Concurrency: number | undefined;

  /**
   * <p>Defines the cross-channel routing behavior for each channel that is enabled for this Routing Profile. For
   *    example, this allows you to offer an agent a different contact from another channel when they are currently working
   *    with a contact from a Voice channel.</p>
   * @public
   */
  CrossChannelBehavior?: CrossChannelBehavior | undefined;
}

/**
 * @public
 */
export interface CreateRoutingProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Description of the routing profile. Must not be more than 250 characters.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The default outbound queue for the routing profile.</p>
   * @public
   */
  DefaultOutboundQueueId: string | undefined;

  /**
   * <p>The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound
   *    calls.</p>
   *          <p>The limit of 10 array members applies to the maximum number of <code>RoutingProfileQueueConfig</code> objects
   *    that can be passed during a CreateRoutingProfile API request. It is different from the quota of 50 queues per routing
   *    profile per instance that is listed in <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect service quotas</a>.
   *    </p>
   * @public
   */
  QueueConfigs?: RoutingProfileQueueConfig[] | undefined;

  /**
   * <p>The manual assignment queues associated with the routing profile. If no queue is added, agents and supervisors
   *    can't pick or assign any contacts from this routing profile. The limit of 10 array members applies to the maximum
   *    number of RoutingProfileManualAssignmentQueueConfig objects that can be passed during a CreateRoutingProfile API
   *    request. It is different from the quota of 50 queues per routing profile per instance that is listed in Amazon Connect service quotas.</p>
   * @public
   */
  ManualAssignmentQueueConfigs?: RoutingProfileManualAssignmentQueueConfig[] | undefined;

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile.</p>
   * @public
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Whether agents with this routing profile will have their routing order calculated based on <i>longest
   *     idle time</i> or <i>time since their last inbound contact</i>. </p>
   * @public
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | undefined;
}

/**
 * @public
 */
export interface CreateRoutingProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  RoutingProfileArn?: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId?: string | undefined;
}

/**
 * <p>This action must be set if <code>TriggerEventSource</code> is one of the following values:
 *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
 *     <code>OnRealTimeChatAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code>. Contact is categorized
 *    using the rule name.</p>
 *          <p>
 *             <code>RuleName</code> is used as <code>ContactCategory</code>.</p>
 * @public
 */
export interface AssignContactCategoryActionDefinition {}

/**
 * <p>An empty value.</p>
 * @public
 */
export interface EmptyFieldValue {}

/**
 * <p>Object to store union of Field values.</p>
 * @public
 */
export interface FieldValueUnion {
  /**
   * <p>A Boolean number value type.</p>
   * @public
   */
  BooleanValue?: boolean | undefined;

  /**
   * <p>A Double number value type.</p>
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * <p>An empty value.</p>
   * @public
   */
  EmptyValue?: EmptyFieldValue | undefined;

  /**
   * <p>String value type.</p>
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * <p>The SLA configuration for Case SlaAssignmentType.</p>
 * @public
 */
export interface CaseSlaConfiguration {
  /**
   * <p>Name of an SLA.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Type of SLA for Case SlaAssignmentType.</p>
   * @public
   */
  Type: SlaType | undefined;

  /**
   * <p>Unique identifier of a Case field.</p>
   * @public
   */
  FieldId?: string | undefined;

  /**
   * <p>Represents a list of target field values for the fieldId specified in CaseSlaConfiguration. The SLA is
   *    considered met if any one of these target field values matches the actual field value.</p>
   * @public
   */
  TargetFieldValues?: FieldValueUnion[] | undefined;

  /**
   * <p>Target duration in minutes within which an SLA should be completed.</p>
   * @public
   */
  TargetSlaMinutes: number | undefined;
}

/**
 * <p>The AssignSla action definition.</p>
 * @public
 */
export interface AssignSlaActionDefinition {
  /**
   * <p>Type of SLA assignment.</p>
   * @public
   */
  SlaAssignmentType: SlaAssignmentType | undefined;

  /**
   * <p>The SLA configuration for Case SLA Assignment.</p>
   * @public
   */
  CaseSlaConfiguration?: CaseSlaConfiguration | undefined;
}

/**
 * <p>Object for case field values.</p>
 * @public
 */
export interface FieldValue {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Union of potential field value types.</p>
   * @public
   */
  Value: FieldValueUnion | undefined;
}

/**
 * <p>The <code>CreateCase</code> action definition.</p>
 * @public
 */
export interface CreateCaseActionDefinition {
  /**
   * <p>An array of objects with <code>Field ID</code> and <code>Value</code> data.</p>
   * @public
   */
  Fields: FieldValue[] | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * <p>End associated tasks related to a case.</p>
 * @public
 */
export interface EndAssociatedTasksActionDefinition {}

/**
 * <p>The EventBridge action definition.</p>
 * @public
 */
export interface EventBridgeActionDefinition {
  /**
   * <p>The name.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The type of notification recipient.</p>
 * @public
 */
export interface NotificationRecipientType {
  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}. Amazon Connect users with the specified tags will be notified.</p>
   * @public
   */
  UserTags?: Record<string, string> | undefined;

  /**
   * <p>A list of user IDs. Supports variable injection of <code>$.ContactLens.ContactEvaluation.Agent.AgentId</code>
   *    for <code>OnContactEvaluationSubmit</code> event source. </p>
   * @public
   */
  UserIds?: string[] | undefined;
}

/**
 * <p>Information about the send notification action.</p>
 * @public
 */
export interface SendNotificationActionDefinition {
  /**
   * <p>Notification delivery method.</p>
   * @public
   */
  DeliveryMethod: NotificationDeliveryType | undefined;

  /**
   * <p>The subject of the email if the delivery method is <code>EMAIL</code>. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>Notification content. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>Content type format.</p>
   * @public
   */
  ContentType: NotificationContentType | undefined;

  /**
   * <p>Notification recipient.</p>
   * @public
   */
  Recipient: NotificationRecipientType | undefined;

  /**
   * <p>Recipients to exclude from notification.</p>
   * @public
   */
  Exclusion?: NotificationRecipientType | undefined;
}

/**
 * <p>Information about the submit automated evaluation action.</p>
 * @public
 */
export interface SubmitAutoEvaluationActionDefinition {
  /**
   * <p>The identifier of the auto-evaluation enabled form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;
}

/**
 * <p>Information about the task action.</p>
 * @public
 */
export interface TaskActionDefinition {
  /**
   * <p>The name. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>. Otherwise, null.
   *    (Supports variable injection in the <code>Value</code> field.)</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;
}

/**
 * <p>The <code>UpdateCase</code> action definition.</p>
 * @public
 */
export interface UpdateCaseActionDefinition {
  /**
   * <p>An array of objects with <code>Field ID</code> and Value data.</p>
   * @public
   */
  Fields: FieldValue[] | undefined;
}

/**
 * <p>Information about the action to be performed when a rule is triggered.</p>
 * @public
 */
export interface RuleAction {
  /**
   * <p>The type of action that creates a rule.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>Information about the task action. This field is required if <code>TriggerEventSource</code> is one of the
   *    following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> |
   *     <code>OnSalesforceCaseCreate</code>
   *          </p>
   * @public
   */
  TaskAction?: TaskActionDefinition | undefined;

  /**
   * <p>Information about the EventBridge action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnPostCallAnalysisAvailable</code> |
   *     <code>OnRealTimeCallAnalysisAvailable</code> | <code>OnRealTimeChatAnalysisAvailable</code> |
   *     <code>OnPostChatAnalysisAvailable</code> | <code>OnContactEvaluationSubmit</code> |
   *    <code>OnMetricDataUpdate</code>
   *          </p>
   * @public
   */
  EventBridgeAction?: EventBridgeActionDefinition | undefined;

  /**
   * <p>Information about the contact category action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnPostCallAnalysisAvailable</code> |
   *     <code>OnRealTimeCallAnalysisAvailable</code> | <code>OnRealTimeChatAnalysisAvailable</code> |
   *     <code>OnPostChatAnalysisAvailable</code> | <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   * @public
   */
  AssignContactCategoryAction?: AssignContactCategoryActionDefinition | undefined;

  /**
   * <p>Information about the send notification action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnPostCallAnalysisAvailable</code> |
   *     <code>OnRealTimeCallAnalysisAvailable</code> | <code>OnRealTimeChatAnalysisAvailable</code> |
   *     <code>OnPostChatAnalysisAvailable</code> | <code>OnContactEvaluationSubmit</code> |
   *    <code>OnMetricDataUpdate</code>
   *          </p>
   * @public
   */
  SendNotificationAction?: SendNotificationActionDefinition | undefined;

  /**
   * <p>Information about the create case action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnPostCallAnalysisAvailable</code> |
   *     <code>OnPostChatAnalysisAvailable</code>.</p>
   * @public
   */
  CreateCaseAction?: CreateCaseActionDefinition | undefined;

  /**
   * <p>Information about the update case action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnCaseCreate</code> |
   *    <code>OnCaseUpdate</code>.</p>
   * @public
   */
  UpdateCaseAction?: UpdateCaseActionDefinition | undefined;

  /**
   * <p>Information about the assign SLA action.</p>
   * @public
   */
  AssignSlaAction?: AssignSlaActionDefinition | undefined;

  /**
   * <p>Information about the end associated tasks action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnCaseUpdate</code>.</p>
   * @public
   */
  EndAssociatedTasksAction?: EndAssociatedTasksActionDefinition | undefined;

  /**
   * <p>Information about the submit automated evaluation action.</p>
   * @public
   */
  SubmitAutoEvaluationAction?: SubmitAutoEvaluationActionDefinition | undefined;
}

/**
 * <p>The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the following values:
 *     <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
 *    | <code>OnContactEvaluationSubmit</code> | <code>OnMetricDataUpdate</code>.</p>
 * @public
 */
export interface RuleTriggerEventSource {
  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name for the rule.</p>
   * @public
   */
  Name: string | undefined;

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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>A third-party application's metadata.</p>
 * @public
 */
export interface Application {
  /**
   * <p>Namespace of the application that you want to give access to.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The permissions that the agent is granted on the application. For third-party applications, only the
   *     <code>ACCESS</code> permission is supported. For MCP Servers, the permissions are tool Identifiers accepted by MCP
   *    Server. </p>
   * @public
   */
  ApplicationPermissions?: string[] | undefined;

  /**
   * <p> Type of Application. </p>
   * @public
   */
  Type?: ApplicationType | undefined;
}

/**
 * <p>A primary attribute value.</p>
 * @public
 */
export interface PrimaryAttributeValue {
  /**
   * <p>The value's access type.</p>
   * @public
   */
  AccessType?: AccessType | undefined;

  /**
   * <p>The value's attribute name.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The value's values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>A primary attribute access control configuration item.</p>
 * @public
 */
export interface PrimaryAttributeAccessControlConfigurationItem {
  /**
   * <p>The item's primary attribute values.</p>
   * @public
   */
  PrimaryAttributeValues?: PrimaryAttributeValue[] | undefined;
}

/**
 * <p>A data table access control configuration.</p>
 * @public
 */
export interface DataTableAccessControlConfiguration {
  /**
   * <p>The configuration's primary attribute access control configuration.</p>
   * @public
   */
  PrimaryAttributeAccessControlConfiguration?: PrimaryAttributeAccessControlConfigurationItem | undefined;
}

/**
 * <p>Contains granular access control configuration for security profiles, including data table access
 *    permissions.</p>
 * @public
 */
export interface GranularAccessControlConfiguration {
  /**
   * <p>The access control configuration for data tables.</p>
   * @public
   */
  DataTableAccessControlConfiguration?: DataTableAccessControlConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileRequest {
  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  SecurityProfileName: string | undefined;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Permissions assigned to the security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile permissions</a>. </p>
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlTags?: Record<string, string> | undefined;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect. For a list of Amazon Connect resources that you can tag, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tagging.html">Add tags to resources in Amazon Connect</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
   * @public
   */
  TagRestrictedResources?: string[] | undefined;

  /**
   * <p>A list of third-party applications or MCP Servers that the security profile will give access to.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following
   *    are acceptable ResourceNames: <code>User</code>.</p>
   * @public
   */
  HierarchyRestrictedResources?: string[] | undefined;

  /**
   * <p>The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlHierarchyGroupId?: string | undefined;

  /**
   * <p> A list of Flow Modules an AI Agent can invoke as a tool. </p>
   * @public
   */
  AllowedFlowModules?: FlowModule[] | undefined;

  /**
   * <p>The granular access control configuration for the security profile, including data table permissions.</p>
   * @public
   */
  GranularAccessControlConfiguration?: GranularAccessControlConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileResponse {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the security profile.</p>
   * @public
   */
  SecurityProfileArn?: string | undefined;
}

/**
 * <p>The identifier of the task template field.</p>
 * @public
 */
export interface TaskTemplateFieldIdentifier {
  /**
   * <p>The name of the task template field.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A field that is invisible to an agent.</p>
 * @public
 */
export interface InvisibleFieldInfo {
  /**
   * <p>Identifier of the invisible field.</p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * <p>Indicates a field that is read-only to an agent.</p>
 * @public
 */
export interface ReadOnlyFieldInfo {
  /**
   * <p>Identifier of the read-only field.</p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * <p>Information about a required field.</p>
 * @public
 */
export interface RequiredFieldInfo {
  /**
   * <p>The unique identifier for the field.</p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * <p>Describes constraints that apply to the template fields.</p>
 * @public
 */
export interface TaskTemplateConstraints {
  /**
   * <p>Lists the fields that are required to be filled by agents.</p>
   * @public
   */
  RequiredFields?: RequiredFieldInfo[] | undefined;

  /**
   * <p>Lists the fields that are read-only to agents, and cannot be edited.</p>
   * @public
   */
  ReadOnlyFields?: ReadOnlyFieldInfo[] | undefined;

  /**
   * <p>Lists the fields that are invisible to agents.</p>
   * @public
   */
  InvisibleFields?: InvisibleFieldInfo[] | undefined;
}

/**
 * <p>Describes a default field and its corresponding value.</p>
 * @public
 */
export interface TaskTemplateDefaultFieldValue {
  /**
   * <p>Identifier of a field. </p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;

  /**
   * <p>Default value for the field.</p>
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * <p>Describes default values for fields on a template.</p>
 * @public
 */
export interface TaskTemplateDefaults {
  /**
   * <p>Default value for the field.</p>
   * @public
   */
  DefaultFieldValues?: TaskTemplateDefaultFieldValue[] | undefined;
}

/**
 * <p>Describes a single task template field.</p>
 * @public
 */
export interface TaskTemplateField {
  /**
   * <p>The unique identifier for the field.</p>
   * @public
   */
  Id: TaskTemplateFieldIdentifier | undefined;

  /**
   * <p>The description of the field.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates the type of field.</p>
   * @public
   */
  Type?: TaskTemplateFieldType | undefined;

  /**
   * <p>A list of options for a single select field.</p>
   * @public
   */
  SingleSelectOptions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task.</p>
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. </p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields: TaskTemplateField[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTaskTemplateResponse {
  /**
   * <p>The identifier of the task template resource.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>Contains information about why a property is not valid.</p>
 * @public
 */
export interface PropertyValidationExceptionProperty {
  /**
   * <p>The full property path.</p>
   * @public
   */
  PropertyPath: string | undefined;

  /**
   * <p>Why the property is not valid.</p>
   * @public
   */
  Reason: PropertyValidationExceptionReason | undefined;

  /**
   * <p>A message describing why the property is not valid.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupRequest {
  /**
   * <p>The name for the traffic distribution group. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the traffic distribution group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that has been replicated. You can find the
   *     <code>instanceId</code> in the ARN of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupResponse {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUseCaseRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The type of use case to associate to the integration association. Each integration association can have only one
   *    of each use case type.</p>
   * @public
   */
  UseCaseType: UseCaseType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUseCaseResponse {
  /**
   * <p>The identifier of the use case.</p>
   * @public
   */
  UseCaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   * @public
   */
  UseCaseArn?: string | undefined;
}

/**
 * <p>Contains information about the identity of a user.</p>
 *          <note>
 *             <p>For Amazon Connect instances that are created with the <code>EXISTING_DIRECTORY</code> identity management
 *     type, <code>FirstName</code>, <code>LastName</code>, and <code>Email</code> cannot be updated from within Amazon Connect because they are managed by the directory.</p>
 *          </note>
 *          <important>
 *             <p>The <code>FirstName</code> and <code>LastName</code> length constraints below apply only to instances using
 *     SAML for identity management. If you are using Amazon Connect for identity management, the length constraints
 *     are 1-255 for <code>FirstName</code>, and 1-256 for <code>LastName</code>. </p>
 *          </important>
 * @public
 */
export interface UserIdentityInfo {
  /**
   * <p>The first name. This is required if you are using Amazon Connect or SAML for identity management. Inputs
   *    must be in Unicode Normalization Form C (NFC). Text containing characters in a non-NFC form (for example, decomposed
   *    characters or combining marks) are not accepted.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name. This is required if you are using Amazon Connect or SAML for identity management. Inputs must
   *    be in Unicode Normalization Form C (NFC). Text containing characters in a non-NFC form (for example, decomposed
   *    characters or combining marks) are not accepted.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The email address. If you are using SAML for identity management and include this parameter, an error is
   *    returned.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The user's secondary email address. If you provide a secondary email, the user receives email notifications -
   *    other than password reset notifications - to this email address instead of to their primary email address.</p>
   *          <p>Pattern: <code>(?=^.\{0,265\}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]\{2,63\}</code>
   *          </p>
   * @public
   */
  SecondaryEmail?: string | undefined;

  /**
   * <p>The user's mobile number.</p>
   * @public
   */
  Mobile?: string | undefined;
}

/**
 * <p>Contains information about the phone configuration settings for a user.</p>
 * @public
 */
export interface UserPhoneConfig {
  /**
   * <p>The phone type.</p>
   * @public
   */
  PhoneType: PhoneType | undefined;

  /**
   * <p>The Auto accept setting.</p>
   * @public
   */
  AutoAccept?: boolean | undefined;

  /**
   * <p>The After Call Work (ACW) timeout setting, in seconds. This parameter has a minimum value of 0 and a maximum
   *    value of 2,000,000 seconds (24 days). Enter 0 if you don't want to allocate a specific amount of ACW time. It
   *    essentially means an indefinite amount of time. When the conversation ends, ACW starts; the agent must choose Close
   *    contact to end ACW. </p>
   *          <note>
   *             <p>When returned by a <code>SearchUsers</code> call, <code>AfterContactWorkTimeLimit</code> is returned in
   *     milliseconds. </p>
   *          </note>
   * @public
   */
  AfterContactWorkTimeLimit?: number | undefined;

  /**
   * <p>The phone number for the user's desk phone.</p>
   * @public
   */
  DeskPhoneNumber?: string | undefined;

  /**
   * <p>The persistent connection setting for the user.</p>
   * @public
   */
  PersistentConnection?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The user name for the account. For instances not using SAML for identity management, the user name can include
   *    up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters
   *    from [a-zA-Z0-9_-.\@]+.</p>
   *          <p>Username can include @ only if used in an email format. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Correct: testuser</p>
   *             </li>
   *             <li>
   *                <p>Correct: testuser@example.com</p>
   *             </li>
   *             <li>
   *                <p>Incorrect: testuser@example</p>
   *             </li>
   *          </ul>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for the user account. A password is required if you are using Amazon Connect for identity
   *    management. Otherwise, it is an error to include a password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The information about the identity of the user.</p>
   * @public
   */
  IdentityInfo?: UserIdentityInfo | undefined;

  /**
   * <p>The phone settings for the user.</p>
   * @public
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot
   *    access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume
   *    that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate
   *    users from your directory.</p>
   *          <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect
   *    when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity
   *    management and include this parameter, an error is returned.</p>
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * <p>The identifier of the security profile for the user.</p>
   * @public
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  UserArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupRequest {
  /**
   * <p>The name of the user hierarchy group. Must not be more than 100 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID
   *    is null.</p>
   * @public
   */
  ParentGroupId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupResponse {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group. </p>
   * @public
   */
  HierarchyGroupArn?: string | undefined;
}

/**
 * <p>View content containing all content necessary to render a view except for runtime input data and the runtime
 *    input schema, which is auto-generated by this operation.</p>
 * @public
 */
export interface ViewInputContent {
  /**
   * <p>The view template representing the structure of the view.</p>
   * @public
   */
  Template?: string | undefined;

  /**
   * <p>A list of possible actions from the view.</p>
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateViewRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique Id for each create view request to avoid duplicate view creation. For example, the view is idempotent
   *    ClientToken is provided.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The <code>PUBLISHED</code>
   *    status will initiate validation on the content.</p>
   * @public
   */
  Status: ViewStatus | undefined;

  /**
   * <p>View content containing all content necessary to render a view except for runtime input data.</p>
   *          <p>The total uncompressed content has a maximum file size of 400kB.</p>
   * @public
   */
  Content: ViewInputContent | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The tags associated with the view resource (not specific to view version).These tags can be used to organize,
   *    track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>View content containing all content necessary to render a view except for runtime input data.</p>
 * @public
 */
export interface ViewContent {
  /**
   * <p>The data schema matching data that the view template must be provided to render.</p>
   * @public
   */
  InputSchema?: string | undefined;

  /**
   * <p>The view template representing the structure of the view.</p>
   * @public
   */
  Template?: string | undefined;

  /**
   * <p>A list of possible actions from the view.</p>
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
 * @public
 */
export interface View {
  /**
   * <p>The identifier of the view.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The <code>PUBLISHED</code>
   *    status will initiate validation on the content.</p>
   * @public
   */
  Status?: ViewStatus | undefined;

  /**
   * <p>The type of the view - <code>CUSTOMER_MANAGED</code>.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Current version of the view.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>View content containing all content necessary to render a view except for runtime input data.</p>
   * @public
   */
  Content?: ViewContent | undefined;

  /**
   * <p>The tags associated with the view resource (not specific to view version).</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp of when the view was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Latest timestamp of the <code>UpdateViewContent</code> or <code>CreateViewVersion</code> operations.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Indicates the checksum value of the latest published view content.</p>
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewResponse {
  /**
   * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateViewVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The description for the version being published.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>Indicates the checksum value of the latest published view content.</p>
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewVersionResponse {
  /**
   * <p>All view data is contained within the View object.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token, subsequent requests return
   *    the previous response without creating a vocabulary again.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row in the table
   *    represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>, <code>SoundsLike</code>, and
   *     <code>DisplayAs</code> fields. Separate the fields with TAB characters. The size limit is 50KB. For more
   *    information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom vocabulary using a
   *     table</a>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * <p>Contains logo image configuration for workspace themes.</p>
 * @public
 */
export interface ImagesLogo {
  /**
   * <p>The default logo image displayed in the workspace.</p>
   * @public
   */
  Default?: string | undefined;

  /**
   * <p>The favicon image displayed in the browser tab.</p>
   * @public
   */
  Favicon?: string | undefined;
}

/**
 * <p>Contains image configuration for a workspace theme.</p>
 * @public
 */
export interface WorkspaceThemeImages {
  /**
   * <p>The logo images used in the workspace.</p>
   * @public
   */
  Logo?: ImagesLogo | undefined;
}

/**
 * <p>Contains color configuration for canvas elements in a workspace theme.</p>
 * @public
 */
export interface PaletteCanvas {
  /**
   * <p>The background color for container elements.</p>
   * @public
   */
  ContainerBackground?: string | undefined;

  /**
   * <p>The background color for page elements.</p>
   * @public
   */
  PageBackground?: string | undefined;

  /**
   * <p>The background color for active elements.</p>
   * @public
   */
  ActiveBackground?: string | undefined;
}

/**
 * <p>Contains color configuration for header elements in a workspace theme.</p>
 * @public
 */
export interface PaletteHeader {
  /**
   * <p>The background color of the header.</p>
   * @public
   */
  Background?: string | undefined;

  /**
   * <p>The text color in the header.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The text color when hovering over header elements.</p>
   * @public
   */
  TextHover?: string | undefined;

  /**
   * <p>Whether to invert the colors of action buttons in the header.</p>
   * @public
   */
  InvertActionsColors?: boolean | undefined;
}

/**
 * <p>Contains color configuration for navigation elements in a workspace theme.</p>
 * @public
 */
export interface PaletteNavigation {
  /**
   * <p>The background color of the navigation area.</p>
   * @public
   */
  Background?: string | undefined;

  /**
   * <p>The background color when hovering over navigation text.</p>
   * @public
   */
  TextBackgroundHover?: string | undefined;

  /**
   * <p>The background color for active navigation items.</p>
   * @public
   */
  TextBackgroundActive?: string | undefined;

  /**
   * <p>The text color in the navigation area.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The text color when hovering over navigation items.</p>
   * @public
   */
  TextHover?: string | undefined;

  /**
   * <p>The text color for active navigation items.</p>
   * @public
   */
  TextActive?: string | undefined;

  /**
   * <p>Whether to invert the colors of action buttons in the navigation area.</p>
   * @public
   */
  InvertActionsColors?: boolean | undefined;
}

/**
 * <p>Contains primary color configuration for a workspace theme.</p>
 * @public
 */
export interface PalettePrimary {
  /**
   * <p>The default primary color used throughout the workspace.</p>
   * @public
   */
  Default?: string | undefined;

  /**
   * <p>The primary color used for active states.</p>
   * @public
   */
  Active?: string | undefined;

  /**
   * <p>The text color that contrasts with the primary color for readability.</p>
   * @public
   */
  ContrastText?: string | undefined;
}

/**
 * <p>Contains color palette configuration for different areas of a workspace.</p>
 * @public
 */
export interface WorkspaceThemePalette {
  /**
   * <p>The color configuration for the header area.</p>
   * @public
   */
  Header?: PaletteHeader | undefined;

  /**
   * <p>The color configuration for the navigation area.</p>
   * @public
   */
  Navigation?: PaletteNavigation | undefined;

  /**
   * <p>The color configuration for the canvas area.</p>
   * @public
   */
  Canvas?: PaletteCanvas | undefined;

  /**
   * <p>The primary color configuration used throughout the workspace.</p>
   * @public
   */
  Primary?: PalettePrimary | undefined;
}

/**
 * <p>Contains font family configuration for workspace themes.</p>
 * @public
 */
export interface FontFamily {
  /**
   * <p>The default font family to use in the workspace theme.</p>
   * @public
   */
  Default?: WorkspaceFontFamily | undefined;
}

/**
 * <p>Contains typography configuration for a workspace theme.</p>
 * @public
 */
export interface WorkspaceThemeTypography {
  /**
   * <p>The font family configuration for text in the workspace.</p>
   * @public
   */
  FontFamily?: FontFamily | undefined;
}

/**
 * <p>Contains detailed theme configuration for a workspace, including colors, images, and typography.</p>
 * @public
 */
export interface WorkspaceThemeConfig {
  /**
   * <p>The color palette configuration for the workspace theme.</p>
   * @public
   */
  Palette?: WorkspaceThemePalette | undefined;

  /**
   * <p>The image assets used in the workspace theme.</p>
   * @public
   */
  Images?: WorkspaceThemeImages | undefined;

  /**
   * <p>The typography configuration for the workspace theme.</p>
   * @public
   */
  Typography?: WorkspaceThemeTypography | undefined;
}

/**
 * <p>Contains theme configuration for a workspace, supporting both light and dark modes.</p>
 * @public
 */
export interface WorkspaceTheme {
  /**
   * <p>The theme configuration for light mode.</p>
   * @public
   */
  Light?: WorkspaceThemeConfig | undefined;

  /**
   * <p>The theme configuration for dark mode.</p>
   * @public
   */
  Dark?: WorkspaceThemeConfig | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the workspace. Must be unique within the instance and can contain 1-127 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the workspace. Maximum length is 250 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The theme configuration for the workspace, including colors and styling.</p>
   * @public
   */
  Theme?: WorkspaceTheme | undefined;

  /**
   * <p>The title displayed for the workspace.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{ "Tags":
   *     \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workspace.</p>
   * @public
   */
  WorkspaceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacePageRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in
   *    the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the workspace.</p>
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view to associate with the page.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The page identifier. Valid system pages include <code>HOME</code> and <code>AGENT_EXPERIENCE</code>. Custom
   *    pages cannot use the <code>aws:</code> or <code>connect:</code> prefixes.</p>
   * @public
   */
  Page: string | undefined;

  /**
   * <p>The URL-friendly identifier for the page.</p>
   * @public
   */
  Slug?: string | undefined;

  /**
   * <p>A JSON string containing input parameters for the view, validated against the view's input schema.</p>
   * @public
   */
  InputData?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacePageResponse {}

/**
 * @public
 */
export interface DeactivateEvaluationFormRequest {
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
   * <p>A version of the evaluation form. If the version property is not provided, the latest version of the evaluation form is
   *    deactivated.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormResponse {
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
   * <p>The version of the deactivated evaluation form resource.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * Request to DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileRequest {
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
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only current supported
   *    resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * Response from DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileResponse {}

/**
 * @public
 */
export interface DeleteContactEvaluationRequest {
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
 * @public
 */
export interface DeleteContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
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
 */
export interface DeleteContactFlowResponse {}

/**
 * @public
 */
export interface DeleteContactFlowModuleRequest {
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
 */
export interface DeleteContactFlowModuleResponse {}
