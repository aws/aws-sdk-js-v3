// smithy-typescript generated code
import type {
  AgentAvailabilityTimer,
  AnsweringMachineDetectionStatus,
  Channel,
  ConnectionType,
  ContactFlowModuleState,
  ContactFlowModuleStatus,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  DisconnectOnCustomerExitParticipantType,
  EvaluationFormItemEnablementAction,
  EvaluationFormItemEnablementOperator,
  EvaluationFormQuestionType,
  EvaluationFormValidationStatus,
  EvaluationFormVersionStatus,
  InitiateAs,
  NotificationStatus,
  ParticipantTimerType,
  QueueStatus,
  RoutingCriteriaStepStatus,
  RulePublishStatus,
  SearchableQueueType,
  TaskTemplateStatus,
  TestCaseStatus,
  TimerEligibleParticipantRoles,
  ViewStatus,
  ViewType,
  Visibility,
} from "./enums";
import type {
  AdditionalEmailRecipients,
  AfterContactWorkConfigPerChannel,
  AgentConfig,
  AgentInfo,
  AgentStatusSearchFilter,
  AIAgent,
  AllowedCapabilities,
  Application,
  Campaign,
  Endpoint,
  EvaluationFormAutoEvaluationConfiguration,
  EvaluationFormItemEnablementExpression,
  EvaluationFormLanguageConfiguration,
  EvaluationFormMetricConfiguration,
  EvaluationFormQuestionScoringConfiguration,
  EvaluationFormQuestionTypeProperties,
  EvaluationFormScoreThreshold,
  EvaluationFormScoringStrategy,
  EvaluationFormTargetConfiguration,
  EvaluationReviewConfiguration,
  FlowModule,
  GranularAccessControlConfiguration,
  InputPredefinedAttributeConfiguration,
  MediaConcurrency,
  OutboundCallerConfig,
  OutboundEmailConfig,
  OutboundStrategy,
  PredefinedAttributeValues,
  PreEvaluationFilters,
  QuickConnectConfig,
  Reference,
  RoutingProfileQueueConfig,
  RuleAction,
  StringCondition,
  UserInfo,
  UserProficiency,
} from "./models_0";
import type {
  AttributeCondition,
  AutoAcceptConfig,
  ChatMetrics,
  ContactDetails,
  ContactEvaluation,
  Customer,
  CustomerVoiceActivity,
  DisconnectDetails,
  EndpointInfo,
  Evaluation,
  Expiry,
  GlobalResiliencyMetadata,
  NextContactEntry,
  PersistentConnectionConfig,
  PhoneNumberConfig,
  QualityMetrics,
  QueueInfo,
  RecordingInfo,
  TaskTemplateConstraints,
  TaskTemplateContactHooks,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateInfoV2,
  TestCaseEntryPoint,
  UserIdentityInfo,
  UserPhoneConfig,
  View,
  ViewInputContent,
  VoiceEnhancementConfig,
  WisdomInfo,
  WorkspaceTheme,
} from "./models_1";
import type { SignInConfig, TelephonyConfig } from "./models_2";
import type {
  BooleanCondition,
  ChatMessage,
  ChatStreamingConfiguration,
  ContactFlowModuleSearchFilter,
  ContactFlowSearchFilter,
  ContactSearchSummaryAgentInfo,
  ContactSearchSummaryAiAgentInfo,
  ContactSearchSummaryQueueInfo,
  DataTableSearchFilter,
  DateCondition,
  DateTimeCondition,
  DecimalCondition,
  EmailAddressInfo,
  EmailAddressSearchFilter,
  EmailAttachment,
  EvaluationFormSearchFilter,
  EvaluationSearchFilter,
  HierarchyGroupCondition,
  HoursOfOperationSearchFilter,
  InboundAdditionalRecipients,
  InboundEmailContent,
  ListCondition,
  MetricSearchFilter,
  NotificationSearchFilter,
  NullableAdditionalRecipients,
  NumberCondition,
  ParticipantConfiguration,
  ParticipantDetails,
  ParticipantTimerValue,
  PersistentChat,
  PromptSearchFilter,
  QueueInfoInput,
  QueueSearchFilter,
  QuickConnectSearchFilter,
  RoutingCriteriaInputStepExpiry,
  RoutingProfileSearchFilter,
  RulesSearchFilter,
  SecurityProfilesSearchFilter,
  TaskAttachment,
  TemplatedMessageConfig,
  TestCaseSearchFilter,
  UserHierarchyGroupSearchFilter,
  UserSearchFilter,
  ViewSearchFilter,
  WorkspaceAssociationSearchFilter,
  WorkspaceSearchFilter,
} from "./models_3";

/**
 * Configuration information for the timer. After the timer configuration is set, it persists for the duration of the chat. It persists across new contacts in the chain, for example, transfer contacts.
 *
 * For more information about how chat timeouts work, see [Set up chat timeouts for human participants](https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html).
 *
 * @public
 */
export interface ParticipantTimerConfiguration {
  /**
   * The role of the participant in the chat conversation.
   *
   * @public
   */
  ParticipantRole: TimerEligibleParticipantRoles | undefined;

  /**
   * The type of timer. `IDLE` indicates the timer applies for considering a human chat participant as idle. `DISCONNECT_NONCUSTOMER` indicates the timer applies to automatically disconnecting a chat participant due to idleness.
   *
   * @public
   */
  TimerType: ParticipantTimerType | undefined;

  /**
   * The value of the timer. Either the timer action (Unset to delete the timer), or the duration of the timer in minutes. Only one value can be set.
   *
   * @public
   */
  TimerValue: ParticipantTimerValue | undefined;
}

/**
 * Configuration information for the chat participant role.
 *
 * @public
 */
export interface ChatParticipantRoleConfig {
  /**
   * A list of participant timers. You can specify any unique combination of role and timer type. Duplicate entries error out the request with a 400.
   *
   * @public
   */
  ParticipantTimerConfigList: ParticipantTimerConfiguration[] | undefined;
}

/**
 * Configuration information for the chat participant role.
 *
 * @public
 */
export type UpdateParticipantRoleConfigChannelInfo =
  | UpdateParticipantRoleConfigChannelInfo.ChatMember
  | UpdateParticipantRoleConfigChannelInfo.$UnknownMember;

/**
 * @public
 */
export namespace UpdateParticipantRoleConfigChannelInfo {
  /**
   * Configuration information for the chat participant role.
   *
   * @public
   */
  export interface ChatMember {
    Chat: ChatParticipantRoleConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Chat?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Chat: (value: ChatParticipantRoleConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateParticipantRoleConfigRequest {
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
   * The Connect Customer channel you want to configure.
   *
   * @public
   */
  ChannelConfiguration: UpdateParticipantRoleConfigChannelInfo | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantRoleConfigResponse {}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

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
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
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
 * @public
 */
export interface UpdatePhoneNumberMetadataRequest {
  /**
   * The Amazon Resource Name (ARN) or resource ID of the phone number.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * The description of the phone number.
   *
   * @public
   */
  PhoneNumberDescription?: string | undefined;

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
export interface UpdatePredefinedAttributeRequest {
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
export interface UpdatePromptRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the prompt.
   *
   * @public
   */
  PromptId: string | undefined;

  /**
   * The name of the prompt.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the prompt.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the [GetPromptFile](https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html) API instead of providing S3 URIs.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
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
 * @public
 */
export interface UpdateQueueHoursOfOperationRequest {
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
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueMaxContactsRequest {
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
   * The maximum number of contacts that can be in the queue before it is considered full.
   *
   * @public
   */
  MaxContacts?: number | undefined;
}

/**
 * @public
 */
export interface UpdateQueueNameRequest {
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
   * The name of the queue.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the queue.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueOutboundCallerConfigRequest {
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
   * The outbound caller ID name, number, and outbound whisper flow.
   *
   * @public
   */
  OutboundCallerConfig: OutboundCallerConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQueueOutboundEmailConfigRequest {
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
   * The outbound email address ID for a specified queue.
   *
   * @public
   */
  OutboundEmailConfig: OutboundEmailConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQueueStatusRequest {
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
   * The status of the queue.
   *
   * @public
   */
  Status: QueueStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectConfigRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the quick connect.
   *
   * @public
   */
  QuickConnectId: string | undefined;

  /**
   * Information about the configuration settings for the quick connect.
   *
   * @public
   */
  QuickConnectConfig: QuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectNameRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the quick connect.
   *
   * @public
   */
  QuickConnectId: string | undefined;

  /**
   * The name of the quick connect.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the quick connect.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerRequest {
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
   * Whether agents with this routing profile will have their routing order calculated based on *time since their last inbound contact* or *longest idle time*.
   *
   * @public
   */
  AgentAvailabilityTimer: AgentAvailabilityTimer | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileConcurrencyRequest {
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
   * The channels that agents can handle in the Contact Control Panel (CCP).
   *
   * @public
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
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
   * The identifier for the default outbound queue.
   *
   * @public
   */
  DefaultOutboundQueueId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileNameRequest {
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
   * The name of the routing profile. Must not be more than 127 characters.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the routing profile. Must not be more than 250 characters.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileQueuesRequest {
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
   * The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.
   *
   * @public
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * A unique identifier for the rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the rule. You can change the name only if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
   *
   * @public
   */
  Name: string | undefined;

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
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * The description of the security profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The permissions granted to a security profile. For a list of valid permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html).
   *
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * The identifier for the security profle.
   *
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The list of tags that a security profile uses to restrict access to resources in Connect Customer.
   *
   * @public
   */
  AllowedAccessControlTags?: Record<string, string> | undefined;

  /**
   * The list of resources that a security profile applies tag restrictions to in Connect Customer.
   *
   * @public
   */
  TagRestrictedResources?: string[] | undefined;

  /**
   * A list of the third-party application's metadata.
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
   * A list of Flow Modules an AI Agent can invoke as a tool
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
export interface UpdateTaskTemplateRequest {
  /**
   * A unique identifier for the task template.
   *
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the task template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the task template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow that runs by default when a task is created by referencing this template.
   *
   * Although this parameter is marked as optional, the request must contain either a `ContactFlowId` or a field of type `QUICK_CONNECT`.
   *
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task.
   *
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * The event hooks that are set on tasks created by using this template.
   *
   * @public
   */
  ContactHooks?: TaskTemplateContactHooks | undefined;

  /**
   * Constraints that are applicable to the fields listed. Although this parameter is marked as optional in the API model, the service requires it when calling `CreateTaskTemplate` or `UpdateTaskTemplate`. The `RequiredFields` array must contain at least one element, and the field of type `NAME` must be included in `RequiredFields`.
   *
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * The default values for fields when a task is created by referencing this template.
   *
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * Marks a template as `ACTIVE` or `INACTIVE` for a task to refer to it. Tasks can only be created from `ACTIVE` templates. If a template is marked as `INACTIVE`, then a task that refers to this template cannot be created.
   *
   * Although this parameter is marked as optional, the service requires it when calling `UpdateTaskTemplate`.
   *
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * Fields that are part of the template.
   *
   * The request must contain exactly one field of type `NAME`. This field must also be listed in the `RequiredFields` array within the `Constraints` parameter.
   *
   * @public
   */
  Fields?: TaskTemplateField[] | undefined;
}

/**
 * @public
 */
export interface UpdateTaskTemplateResponse {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The identifier of the task template resource.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the task template resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the task template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the task template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the flow that runs by default when a task is created by referencing this template.
   *
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task.
   *
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * The event hooks that are set on tasks created by using this template.
   *
   * @public
   */
  ContactHooks?: TaskTemplateContactHooks | undefined;

  /**
   * Constraints that are applicable to the fields listed. Although this parameter is marked as optional in the API model, the service requires it when calling `CreateTaskTemplate` or `UpdateTaskTemplate`. The `RequiredFields` array must contain at least one element, and the field of type `NAME` must be included in `RequiredFields`.
   *
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * The default values for fields when a task is created by referencing this template.
   *
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * Fields that are part of the template.
   *
   * @public
   */
  Fields?: TaskTemplateField[] | undefined;

  /**
   * Marks a template as `ACTIVE` or `INACTIVE` for a task to refer to it. Tasks can only be created from `ACTIVE` templates. If a template is marked as `INACTIVE`, then a task that refers to this template cannot be created.
   *
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * The timestamp when the task template was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The timestamp when the task template was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateTestCaseRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case to update.
   *
   * @public
   */
  TestCaseId: string | undefined;

  /**
   * The JSON string that represents the content of the test.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Defines the starting point for your test.
   *
   * @public
   */
  EntryPoint?: TestCaseEntryPoint | undefined;

  /**
   * Defines the test attributes for precise data representation.
   *
   * @public
   */
  InitializationData?: string | undefined;

  /**
   * The name of the test case.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the test case.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates the test status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. The SAVED status does not initiate validation of the content.
   *
   * @public
   */
  Status?: TestCaseStatus | undefined;

  /**
   * The time at which the resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The region in which the resource was last modified
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTestCaseResponse {}

/**
 * @public
 */
export interface UpdateTrafficDistributionRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The distribution of traffic between the instance and its replica(s).
   *
   * @public
   */
  TelephonyConfig?: TelephonyConfig | undefined;

  /**
   * The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both the instance and its replica(s).
   *
   * @public
   */
  SignInConfig?: SignInConfig | undefined;

  /**
   * The distribution of agents between the instance and its replica(s).
   *
   * @public
   */
  AgentConfig?: AgentConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTrafficDistributionResponse {}

/**
 * @public
 */
export interface UpdateUserConfigRequest {
  /**
   * The list of auto-accept configuration settings for each channel. When auto-accept is enabled for a channel, available agents are automatically connected to contacts from that channel without needing to manually accept. Auto-accept connects agents to contacts in less than one second.
   *
   * @public
   */
  AutoAcceptConfigs?: AutoAcceptConfig[] | undefined;

  /**
   * The list of after contact work (ACW) timeout configuration settings for each channel. ACW timeout specifies how many seconds agents have for after contact work, such as entering notes about the contact. The minimum setting is 1 second, and the maximum is 2,000,000 seconds (24 days). Enter 0 for an indefinite amount of time, meaning agents must manually choose to end ACW.
   *
   * @public
   */
  AfterContactWorkConfigs?: AfterContactWorkConfigPerChannel[] | undefined;

  /**
   * The list of phone number configuration settings for each channel.
   *
   * @public
   */
  PhoneNumberConfigs?: PhoneNumberConfig[] | undefined;

  /**
   * The list of persistent connection configuration settings for each channel.
   *
   * @public
   */
  PersistentConnectionConfigs?: PersistentConnectionConfig[] | undefined;

  /**
   * The list of voice enhancement configuration settings for each channel.
   *
   * @public
   */
  VoiceEnhancementConfigs?: VoiceEnhancementConfig[] | undefined;

  /**
   * The identifier of the user account.
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
export interface UpdateUserHierarchyRequest {
  /**
   * The identifier of the hierarchy group.
   *
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * The identifier of the user account.
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
export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * The name of the hierarchy group. Must not be more than 100 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier of the hierarchy group.
   *
   * @public
   */
  HierarchyGroupId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * Contains information about the hierarchy level to update.
 *
 * @public
 */
export interface HierarchyLevelUpdate {
  /**
   * The name of the user hierarchy level. Must not be more than 50 characters.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Contains information about the level hierarchy to update.
 *
 * @public
 */
export interface HierarchyStructureUpdate {
  /**
   * The update for level one.
   *
   * @public
   */
  LevelOne?: HierarchyLevelUpdate | undefined;

  /**
   * The update for level two.
   *
   * @public
   */
  LevelTwo?: HierarchyLevelUpdate | undefined;

  /**
   * The update for level three.
   *
   * @public
   */
  LevelThree?: HierarchyLevelUpdate | undefined;

  /**
   * The update for level four.
   *
   * @public
   */
  LevelFour?: HierarchyLevelUpdate | undefined;

  /**
   * The update for level five.
   *
   * @public
   */
  LevelFive?: HierarchyLevelUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateUserHierarchyStructureRequest {
  /**
   * The hierarchy levels to update.
   *
   * @public
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

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
export interface UpdateUserIdentityInfoRequest {
  /**
   * The identity information for the user.
   *
   * @public
   */
  IdentityInfo: UserIdentityInfo | undefined;

  /**
   * The identifier of the user account.
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
export interface UpdateUserNotificationStatusRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the notification.
   *
   * @public
   */
  NotificationId: string | undefined;

  /**
   * The identifier of the user whose notification status is being updated.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The new status for the notification. Valid values are READ, UNREAD, and HIDDEN.
   *
   * @public
   */
  Status: NotificationStatus | undefined;

  /**
   * The timestamp when the notification status was last modified. Used for cross-region replication and optimistic locking.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The AWS Region where the notification status was last modified. Used for cross-region replication.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * The response from updating a user's notification status.
 *
 * @public
 */
export interface UpdateUserNotificationStatusResponse {}

/**
 * @public
 */
export interface UpdateUserPhoneConfigRequest {
  /**
   * Information about phone configuration settings for the user.
   *
   * @public
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * The identifier of the user account.
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
export interface UpdateUserProficienciesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
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
   * The proficiencies to be updated for the user. Proficiencies must first be associated to the user. You can do this using AssociateUserProficiencies API.
   *
   * @public
   */
  UserProficiencies: UserProficiency[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserRoutingProfileRequest {
  /**
   * The identifier of the routing profile for the user.
   *
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * The identifier of the user account.
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
export interface UpdateUserSecurityProfilesRequest {
  /**
   * The identifiers of the security profiles for the user.
   *
   * @public
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * The identifier of the user account.
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
export interface UpdateViewContentRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the view. Both `ViewArn` and `ViewId` can be used.
   *
   * @public
   */
  ViewId: string | undefined;

  /**
   * Indicates the view status as either `SAVED` or `PUBLISHED`. The `PUBLISHED` status will initiate validation on the content.
   *
   * @public
   */
  Status: ViewStatus | undefined;

  /**
   * View content containing all content necessary to render a view except for runtime input data and the runtime input schema, which is auto-generated by this operation.
   *
   * The total uncompressed content has a maximum file size of 400kB.
   *
   * @public
   */
  Content: ViewInputContent | undefined;
}

/**
 * @public
 */
export interface UpdateViewContentResponse {
  /**
   * A view resource object. Contains metadata and content necessary to render the view.
   *
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface UpdateViewMetadataRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the view. Both `ViewArn` and `ViewId` can be used.
   *
   * @public
   */
  ViewId: string | undefined;

  /**
   * The name of the view.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the view.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateViewMetadataResponse {}

/**
 * @public
 */
export interface UpdateWorkspaceMetadataRequest {
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
   * The name of the workspace.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The title displayed for the workspace.
   *
   * @public
   */
  Title?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceMetadataResponse {}

/**
 * @public
 */
export interface UpdateWorkspacePageRequest {
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
   * The current page identifier.
   *
   * @public
   */
  Page: string | undefined;

  /**
   * The new page identifier, if changing the page name.
   *
   * @public
   */
  NewPage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the view to associate with the page.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The URL-friendly identifier for the page.
   *
   * @public
   */
  Slug?: string | undefined;

  /**
   * A JSON string containing input parameters for the view.
   *
   * @public
   */
  InputData?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspacePageResponse {}

/**
 * @public
 */
export interface UpdateWorkspaceThemeRequest {
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
   * The theme configuration, including color schemes and visual styles.
   *
   * @public
   */
  Theme?: WorkspaceTheme | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceThemeResponse {}

/**
 * @public
 */
export interface UpdateWorkspaceVisibilityRequest {
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
   * The visibility setting for the workspace. Valid values are: `ALL` (available to all users), `ASSIGNED` (available only to assigned users and routing profiles), and `NONE` (not visible to any users).
   *
   * @public
   */
  Visibility: Visibility | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceVisibilityResponse {}

/**
 * A condition for item enablement.
 *
 * @public
 */
export interface EvaluationFormItemEnablementCondition {
  /**
   * Operands of the enablement condition.
   *
   * @public
   */
  Operands: EvaluationFormItemEnablementConditionOperand[] | undefined;

  /**
   * The operator to be used to be applied to operands if more than one provided.
   *
   * @public
   */
  Operator?: EvaluationFormItemEnablementOperator | undefined;
}

/**
 * An operand of the enablement condition.
 *
 * @public
 */
export type EvaluationFormItemEnablementConditionOperand =
  | EvaluationFormItemEnablementConditionOperand.ConditionMember
  | EvaluationFormItemEnablementConditionOperand.ExpressionMember
  | EvaluationFormItemEnablementConditionOperand.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormItemEnablementConditionOperand {
  /**
   * An expression of the enablement condition.
   *
   * @public
   */
  export interface ExpressionMember {
    Expression: EvaluationFormItemEnablementExpression;
    Condition?: never;
    $unknown?: never;
  }

  /**
   * A condition for item enablement.
   *
   * @public
   */
  export interface ConditionMember {
    Expression?: never;
    Condition: EvaluationFormItemEnablementCondition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Expression?: never;
    Condition?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Expression: (value: EvaluationFormItemEnablementExpression) => T;
    Condition: (value: EvaluationFormItemEnablementCondition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The search criteria to be used to return agent statuses.
 *
 * @public
 */
export interface AgentStatusSearchCriteria {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: AgentStatusSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `description`, `state`, `type`, `displayOrder`, and `resourceID`.
   *
   * @public
   */
  AndConditions?: AgentStatusSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `description`, `state`, `type`, `displayOrder`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return flow modules.
 *
 * @public
 */
export interface ContactFlowModuleSearchCriteria {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: ContactFlowModuleSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndConditions?: ContactFlowModuleSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * The state of the flow.
   *
   * @public
   */
  StateCondition?: ContactFlowModuleState | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  StatusCondition?: ContactFlowModuleStatus | undefined;
}

/**
 * The search criteria to be used to return flows.
 *
 * @public
 */
export interface ContactFlowSearchCriteria {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: ContactFlowSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndConditions?: ContactFlowSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * The type of flow.
   *
   * @public
   */
  TypeCondition?: ContactFlowType | undefined;

  /**
   * The state of the flow.
   *
   * @public
   */
  StateCondition?: ContactFlowState | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  StatusCondition?: ContactFlowStatus | undefined;
}

/**
 * A data table search criteria.
 *
 * @public
 */
export interface DataTableSearchCriteria {
  /**
   * The criteria's or conditions.
   *
   * @public
   */
  OrConditions?: DataTableSearchCriteria[] | undefined;

  /**
   * The criteria's and conditions.
   *
   * @public
   */
  AndConditions?: DataTableSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return email addresses.
 *
 * @public
 */
export interface EmailAddressSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: EmailAddressSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: EmailAddressSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * An item enablement configuration.
 *
 * @public
 */
export interface EvaluationFormItemEnablementConfiguration {
  /**
   * A condition for item enablement configuration.
   *
   * @public
   */
  Condition: EvaluationFormItemEnablementCondition | undefined;

  /**
   * An enablement action that if condition is satisfied.
   *
   * @public
   */
  Action: EvaluationFormItemEnablementAction | undefined;

  /**
   * An enablement action that if condition is not satisfied.
   *
   * @public
   */
  DefaultAction?: EvaluationFormItemEnablementAction | undefined;
}

/**
 * The search criteria to be used to return evaluation forms.
 *
 * @public
 */
export interface EvaluationFormSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: EvaluationFormSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: EvaluationFormSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a numeric condition.
   *
   * > **Note:** The currently supported value for `FieldName` is `limit`.
   *
   * @public
   */
  NumberCondition?: NumberCondition | undefined;

  /**
   * Boolean search condition.
   *
   * @public
   */
  BooleanCondition?: BooleanCondition | undefined;

  /**
   * Datetime search condition.
   *
   * @public
   */
  DateTimeCondition?: DateTimeCondition | undefined;
}

/**
 * The search criteria to be used to return evaluations.
 *
 * @public
 */
export interface EvaluationSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: EvaluationSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: EvaluationSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a numeric condition.
   *
   * > **Note:** The currently supported value for `FieldName` is `limit`.
   *
   * @public
   */
  NumberCondition?: NumberCondition | undefined;

  /**
   * The boolean condition search criteria for searching evaluations.
   *
   * @public
   */
  BooleanCondition?: BooleanCondition | undefined;

  /**
   * The datetime condition search criteria for searching evaluations.
   *
   * @public
   */
  DateTimeCondition?: DateTimeCondition | undefined;

  /**
   * The decimal condition search criteria for searching evaluations.
   *
   * @public
   */
  DecimalCondition?: DecimalCondition | undefined;
}

/**
 * A tagged union to specify expression for a routing step.
 *
 * @public
 */
export interface Expression {
  /**
   * An object to specify the predefined attribute condition.
   *
   * @public
   */
  AttributeCondition?: AttributeCondition | undefined;

  /**
   * List of routing expressions which will be AND-ed together.
   *
   * @public
   */
  AndExpression?: Expression[] | undefined;

  /**
   * List of routing expressions which will be OR-ed together.
   *
   * @public
   */
  OrExpression?: Expression[] | undefined;

  /**
   * An object to specify the predefined attribute condition.
   *
   * @public
   */
  NotAttributeCondition?: AttributeCondition | undefined;
}

/**
 * The search criteria to be used to return hours of operations overrides.
 *
 * @public
 */
export interface HoursOfOperationOverrideSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: HoursOfOperationOverrideSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: HoursOfOperationOverrideSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a date condition.
   *
   * @public
   */
  DateCondition?: DateCondition | undefined;
}

/**
 * The search criteria to be used to return hours of operations.
 *
 * @public
 */
export interface HoursOfOperationSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: HoursOfOperationSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: HoursOfOperationSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `description`, `timezone`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * Defines the search criteria for filtering metrics.
 *
 * @public
 */
export interface MetricSearchCriteria {
  /**
   * A list of conditions to be met, where at least one condition must be satisfied.
   *
   * @public
   */
  OrConditions?: MetricSearchCriteria[] | undefined;

  /**
   * A list of conditions that must all be satisfied.
   *
   * @public
   */
  AndConditions?: MetricSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A boolean search condition for Search APIs.
   *
   * @public
   */
  BooleanCondition?: BooleanCondition | undefined;
}

/**
 * The search criteria to be used to return notifications.
 *
 * @public
 */
export interface NotificationSearchCriteria {
  /**
   * A list of conditions to be met, where at least one condition must be satisfied.
   *
   * @public
   */
  OrConditions?: NotificationSearchCriteria[] | undefined;

  /**
   * A list of conditions that must all be satisfied.
   *
   * @public
   */
  AndConditions?: NotificationSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return predefined attributes.
 *
 * @public
 */
export interface PredefinedAttributeSearchCriteria {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: PredefinedAttributeSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndConditions?: PredefinedAttributeSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return prompts.
 *
 * @public
 */
export interface PromptSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: PromptSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: PromptSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `description`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return queues.
 *
 * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
 *
 * @public
 */
export interface QueueSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: QueueSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: QueueSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `description`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * The type of queue.
   *
   * @public
   */
  QueueTypeCondition?: SearchableQueueType | undefined;
}

/**
 * The search criteria to be used to return quick connects.
 *
 * @public
 */
export interface QuickConnectSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: QuickConnectSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: QuickConnectSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `description`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return routing profiles.
 *
 * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
 *
 * @public
 */
export interface RoutingProfileSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: RoutingProfileSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: RoutingProfileSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `associatedQueueIds`, `name`, `description`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return rules.
 *
 * @public
 */
export interface RulesSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: RulesSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: RulesSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `Name`, `PublishStatus`, `EventSourceName`, `RuleId`, `IntegrationAssociationId`, `ActionSummaries`, and `RuleCapabilityTiers`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return security profiles.
 *
 * > **Note:** The `name` field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
 *
 * @public
 */
export interface SecurityProfileSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: SecurityProfileSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: SecurityProfileSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * A value for a segment attribute. This is structured as a map where the key is `valueString` and the value is a string.
 *
 * @public
 */
export interface SegmentAttributeValue {
  /**
   * The value of a segment attribute.
   *
   * @public
   */
  ValueString?: string | undefined;

  /**
   * The value of a segment attribute.
   *
   * @public
   */
  ValueMap?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * The value of a segment attribute.
   *
   * @public
   */
  ValueInteger?: number | undefined;

  /**
   * The value of a segment attribute. This is only supported for system-defined attributes, not for user-defined attributes.
   *
   * @public
   */
  ValueList?: SegmentAttributeValue[] | undefined;

  /**
   * The value of a segment attribute that has to be a valid ARN. This is only supported for system-defined attributes, not for user-defined attributes.
   *
   * @public
   */
  ValueArn?: string | undefined;
}

/**
 * The search criteria to be used to return test cases.
 *
 * @public
 */
export interface TestCaseSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: TestCaseSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: TestCaseSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * The status of the test case.
   *
   * @public
   */
  StatusCondition?: TestCaseStatus | undefined;
}

/**
 * The search criteria to be used to return userHierarchyGroup.
 *
 * @public
 */
export interface UserHierarchyGroupSearchCriteria {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: UserHierarchyGroupSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an AND condition.
   *
   * @public
   */
  AndConditions?: UserHierarchyGroupSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name`, `parentId`, `levelId`, and `resourceID`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * The search criteria to be used to return users.
 *
 * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
 *
 * @public
 */
export interface UserSearchCriteria {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: UserSearchCriteria[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndConditions?: UserSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * The currently supported values for `FieldName` are `Username`, `FirstName`, `LastName`, `RoutingProfileId`, `SecurityProfileId`, `resourceId`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a List condition to search users with attributes included in Lists like Proficiencies.
   *
   * @public
   */
  ListCondition?: ListCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a hierarchy group condition.
   *
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * Defines the search criteria for filtering views.
 *
 * @public
 */
export interface ViewSearchCriteria {
  /**
   * A list of conditions to be met, where at least one condition must be satisfied.
   *
   * @public
   */
  OrConditions?: ViewSearchCriteria[] | undefined;

  /**
   * A list of conditions that must all be satisfied.
   *
   * @public
   */
  AndConditions?: ViewSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A condition that filters views by their type.
   *
   * @public
   */
  ViewTypeCondition?: ViewType | undefined;

  /**
   * A condition that filters views by their status.
   *
   * @public
   */
  ViewStatusCondition?: ViewStatus | undefined;
}

/**
 * Defines the search criteria for filtering workspace associations.
 *
 * @public
 */
export interface WorkspaceAssociationSearchCriteria {
  /**
   * A list of conditions to be met, where at least one condition must be satisfied.
   *
   * @public
   */
  OrConditions?: WorkspaceAssociationSearchCriteria[] | undefined;

  /**
   * A list of conditions that must all be satisfied.
   *
   * @public
   */
  AndConditions?: WorkspaceAssociationSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * Defines the search criteria for filtering workspaces.
 *
 * @public
 */
export interface WorkspaceSearchCriteria {
  /**
   * A list of conditions to be met, where at least one condition must be satisfied.
   *
   * @public
   */
  OrConditions?: WorkspaceSearchCriteria[] | undefined;

  /**
   * A list of conditions that must all be satisfied.
   *
   * @public
   */
  AndConditions?: WorkspaceSearchCriteria[] | undefined;

  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * Information about a question from an evaluation form.
 *
 * @public
 */
export interface EvaluationFormQuestion {
  /**
   * The title of the question.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The instructions of the section.
   *
   * @public
   */
  Instructions?: string | undefined;

  /**
   * The identifier of the question. An identifier must be unique within the evaluation form.
   *
   * @public
   */
  RefId: string | undefined;

  /**
   * The flag to enable not applicable answers to the question.
   *
   * @public
   */
  NotApplicableEnabled?: boolean | undefined;

  /**
   * The type of the question.
   *
   * @public
   */
  QuestionType: EvaluationFormQuestionType | undefined;

  /**
   * The properties of the type of question. Text questions do not have to define question type properties.
   *
   * @public
   */
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties | undefined;

  /**
   * A question conditional enablement.
   *
   * @public
   */
  Enablement?: EvaluationFormItemEnablementConfiguration | undefined;

  /**
   * The scoring weight of the section.
   *
   * @public
   */
  Weight?: number | undefined;

  /**
   * The scoring configuration of the question.
   *
   * @public
   */
  ScoringConfiguration?: EvaluationFormQuestionScoringConfiguration | undefined;

  /**
   * The metric configuration for the question. Use this to associate a business outcome metric with the question.
   *
   * @public
   */
  MetricConfiguration?: EvaluationFormMetricConfiguration | undefined;
}

/**
 * Step defines the list of agents to be routed or route based on the agent requirements such as ProficiencyLevel, Name, or Value.
 *
 * @public
 */
export interface RoutingCriteriaInputStep {
  /**
   * An object to specify the expiration of a routing step.
   *
   * @public
   */
  Expiry?: RoutingCriteriaInputStepExpiry | undefined;

  /**
   * A tagged union to specify expression for a routing step.
   *
   * @public
   */
  Expression?: Expression | undefined;
}

/**
 * @public
 */
export interface SearchAgentStatusesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: AgentStatusSearchFilter | undefined;

  /**
   * The search criteria to be used to return agent statuses.
   *
   * @public
   */
  SearchCriteria?: AgentStatusSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchContactEvaluationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The search criteria to be used to return contact evaluations.
   *
   * @public
   */
  SearchCriteria?: EvaluationSearchCriteria | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: EvaluationSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowModulesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: ContactFlowModuleSearchFilter | undefined;

  /**
   * The search criteria to be used to return flow modules.
   *
   * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will result in invalid results.
   *
   * @public
   */
  SearchCriteria?: ContactFlowModuleSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowsRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: ContactFlowSearchFilter | undefined;

  /**
   * The search criteria to be used to return flows.
   *
   * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will result in invalid results.
   *
   * @public
   */
  SearchCriteria?: ContactFlowSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchDataTablesRequest {
  /**
   * The unique identifier for the Amazon Connect instance to search within.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data tables to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional filters to apply to the search results, such as tag-based filtering for attribute-based access control.
   *
   * @public
   */
  SearchFilter?: DataTableSearchFilter | undefined;

  /**
   * Search criteria including string conditions for matching table names, descriptions, or resource IDs. Supports STARTS_WITH, CONTAINS, and EXACT comparison types.
   *
   * @public
   */
  SearchCriteria?: DataTableSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchEmailAddressesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The search criteria to be used to return email addresses.
   *
   * @public
   */
  SearchCriteria?: EmailAddressSearchCriteria | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: EmailAddressSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchEvaluationFormsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The search criteria to be used to return evaluation forms.
   *
   * @public
   */
  SearchCriteria?: EvaluationFormSearchCriteria | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: EvaluationFormSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationOverridesRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: HoursOfOperationSearchFilter | undefined;

  /**
   * The search criteria to be used to return hours of operations overrides.
   *
   * @public
   */
  SearchCriteria?: HoursOfOperationOverrideSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: HoursOfOperationSearchFilter | undefined;

  /**
   * The search criteria to be used to return hours of operations.
   *
   * @public
   */
  SearchCriteria?: HoursOfOperationSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchMetricsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: MetricSearchFilter | undefined;

  /**
   * The search criteria to filter the metrics.
   *
   * @public
   */
  SearchCriteria?: MetricSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchNotificationsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. Valid range is 1-100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to apply to the search results, such as tag-based filters.
   *
   * @public
   */
  SearchFilter?: NotificationSearchFilter | undefined;

  /**
   * The search criteria to apply when searching for notifications. Supports filtering by notification ID and message content using comparison types such as STARTS_WITH, CONTAINS, and EXACT.
   *
   * @public
   */
  SearchCriteria?: NotificationSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The search criteria to be used to return predefined attributes.
   *
   * @public
   */
  SearchCriteria?: PredefinedAttributeSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchPromptsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: PromptSearchFilter | undefined;

  /**
   * The search criteria to be used to return prompts.
   *
   * @public
   */
  SearchCriteria?: PromptSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchQueuesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: QueueSearchFilter | undefined;

  /**
   * The search criteria to be used to return queues.
   *
   * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
   *
   * @public
   */
  SearchCriteria?: QueueSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchQuickConnectsRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: QuickConnectSearchFilter | undefined;

  /**
   * The search criteria to be used to return quick connects.
   *
   * @public
   */
  SearchCriteria?: QuickConnectSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchRoutingProfilesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: RoutingProfileSearchFilter | undefined;

  /**
   * The search criteria to be used to return routing profiles.
   *
   * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
   *
   * @public
   */
  SearchCriteria?: RoutingProfileSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchRulesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The search criteria to be used to return rules.
   *
   * @public
   */
  SearchCriteria?: RulesSearchCriteria | undefined;

  /**
   * Filters to be applied to search results, such as tag-based filters.
   *
   * @public
   */
  SearchFilter?: RulesSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchSecurityProfilesRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The search criteria to be used to return security profiles.
   *
   * > **Note:** The `name` field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
   *
   * > **Note:** The currently supported value for `FieldName`: `name`
   *
   * @public
   */
  SearchCriteria?: SecurityProfileSearchCriteria | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: SecurityProfilesSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchTestCasesRequest {
  /**
   * The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: TestCaseSearchFilter | undefined;

  /**
   * The search criteria to be used to return test cases.
   *
   * @public
   */
  SearchCriteria?: TestCaseSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchUserHierarchyGroupsRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: UserHierarchyGroupSearchFilter | undefined;

  /**
   * The search criteria to be used to return UserHierarchyGroups.
   *
   * @public
   */
  SearchCriteria?: UserHierarchyGroupSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to be applied to search results.
   *
   * @public
   */
  SearchFilter?: UserSearchFilter | undefined;

  /**
   * The search criteria to be used to return users.
   *
   * > **Note:** The `name` and `description` fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.
   *
   * @public
   */
  SearchCriteria?: UserSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchViewsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to apply to the search, such as tag-based filters.
   *
   * @public
   */
  SearchFilter?: ViewSearchFilter | undefined;

  /**
   * The search criteria, including field names and comparison types.
   *
   * @public
   */
  SearchCriteria?: ViewSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchWorkspaceAssociationsRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to apply to the search, such as tag-based filters.
   *
   * @public
   */
  SearchFilter?: WorkspaceAssociationSearchFilter | undefined;

  /**
   * The search criteria, including workspace ID, resource ID, or resource type.
   *
   * @public
   */
  SearchCriteria?: WorkspaceAssociationSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchWorkspacesRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters to apply to the search, such as tag-based filters.
   *
   * @public
   */
  SearchFilter?: WorkspaceSearchFilter | undefined;

  /**
   * The search criteria, including field names and comparison types.
   *
   * @public
   */
  SearchCriteria?: WorkspaceSearchCriteria | undefined;
}

/**
 * Step signifies the criteria to be used for routing to an agent
 *
 * @public
 */
export interface Step {
  /**
   * An object to specify the expiration of a routing step.
   *
   * @public
   */
  Expiry?: Expiry | undefined;

  /**
   * A tagged union to specify expression for a routing step.
   *
   * @public
   */
  Expression?: Expression | undefined;

  /**
   * Represents status of the Routing step.
   *
   * @public
   */
  Status?: RoutingCriteriaStepStatus | undefined;
}

/**
 * The value of a segment attribute. This is structured as a map with a single key-value pair. The key 'valueString' indicates that the attribute type is a string, and its corresponding value is the actual string value of the segment attribute.
 *
 * @public
 */
export interface ContactSearchSummarySegmentAttributeValue {
  /**
   * The value of a segment attribute represented as a string.
   *
   * @public
   */
  ValueString?: string | undefined;

  /**
   * The key and value of a segment attribute.
   *
   * @public
   */
  ValueMap?: Record<string, SegmentAttributeValue> | undefined;
}

/**
 * @public
 */
export interface CreateContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
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
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes, and can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have the following reference types at the time of creation: `URL` | `NUMBER` | `STRING` | `DATE` | `EMAIL` | `ATTACHMENT`.
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * The channel for the contact.
   *
   * > **Important:** The CHAT channel is not supported. The following information is incorrect. We're working to correct it.
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * Indicates how the contact was initiated.
   *
   * > **Important:**
   * >
   * > CreateContact only supports the following initiation methods. Valid values by channel are:
   * >
   * > - For VOICE: `TRANSFER` and the subtype `connect:ExternalAudio`
   * > - For EMAIL: `OUTBOUND` | `AGENT_REPLY` | `FLOW`
   * > - For TASK: `API`
   * >
   * > The other channels listed below are incorrect. We're working to correct this information.
   *
   * @public
   */
  InitiationMethod: ContactInitiationMethod | undefined;

  /**
   * Number of minutes the contact will be active for before expiring
   *
   * @public
   */
  ExpiryDurationInMinutes?: number | undefined;

  /**
   * User details for the contact
   *
   * > **Important:** UserInfo is required when creating an EMAIL contact with `OUTBOUND` and `AGENT_REPLY` contact initiation methods.
   *
   * @public
   */
  UserInfo?: UserInfo | undefined;

  /**
   * Initial state of the contact when it's created. Only TASK channel contacts can be initiated with `COMPLETED` state.
   *
   * @public
   */
  InitiateAs?: InitiateAs | undefined;

  /**
   * The name of a the contact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the contact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments (unique contact ID) using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows.
   *
   * Attribute keys can include only alphanumeric, -, and _.
   *
   * This field can be used to set Segment Contact Expiry as a duration in minutes.
   *
   * > **Note:** To set contact expiry, a ValueMap must be specified containing the integer number of minutes the contact will be active for before expiring, with `SegmentAttributes` like \{ `"connect:ContactExpiry": \{"ValueMap" : \{ "ExpiryDuration": \{ "ValueInteger": 135\}\}\}\}`.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * The ID of the previous contact when creating a transfer contact. This value can be provided only for external audio contacts. For more information, see [Integrate Connect Customer Contact Lens with external voice systems](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  PreviousContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartChatContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow for initiating the chat. To see the ContactFlowId in the Connect Customer admin website, on the navigation menu go to **Routing**, **Flows**. Choose the flow. On the flow page, under the name of the flow, choose **Show additional flow information**. The ContactFlowId is the last part of the ARN, shown here in bold:
   *
   * arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/**846ec553-a005-41c0-8341-xxxxxxxxxxxx**
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * Information identifying the participant.
   *
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * The configuration of the participant.
   *
   * @public
   */
  ParticipantConfiguration?: ParticipantConfiguration | undefined;

  /**
   * The initial message to be sent to the newly created chat.
   *
   * @public
   */
  InitialMessage?: ChatMessage | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days).
   *
   * @public
   */
  ChatDurationInMinutes?: number | undefined;

  /**
   * The supported chat message content types. Supported types are `text/plain`, `text/markdown`, `application/json`, `application/vnd.amazonaws.connect.message.interactive`, and `application/vnd.amazonaws.connect.message.interactive.response`.
   *
   * Content types must always contain `text/plain`. You can then put any other supported type in the list. For example, all the following lists are valid because they contain `text/plain`: `[text/plain, text/markdown, application/json]`, `[text/markdown, text/plain]`, `[text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response]`.
   *
   * > **Note:** The type `application/vnd.amazonaws.connect.message.interactive` is required to use the [Show view](https://docs.aws.amazon.com/connect/latest/adminguide/show-view-block.html) flow block.
   *
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see [Enable persistent chat](https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html).
   *
   * @public
   */
  PersistentChat?: PersistentChat | undefined;

  /**
   * The unique identifier for an Connect Customer contact. This identifier is related to the chat starting.
   *
   * > **Note:** You cannot provide data for both RelatedContactId and PersistentChat.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows.
   *
   * Attribute keys can include only alphanumeric, -, and _.
   *
   * This field can be used to show channel subtype, such as `connect:Guide`.
   *
   * > **Note:** The types `application/vnd.amazonaws.connect.message.interactive` and `application/vnd.amazonaws.connect.message.interactive.response` must be present in the SupportedMessagingContentTypes field of this API in order to set `SegmentAttributes` as \{`"connect:Subtype": \{"valueString" : "connect:Guide" \}\}`.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * The customer's identification number. For example, the `CustomerId` may be a customer number from your CRM.
   *
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * A list of participant types to automatically disconnect when the end customer ends the chat session, allowing them to continue through disconnect flows such as surveys or feedback forms.
   *
   * @public
   */
  DisconnectOnCustomerExit?: DisconnectOnCustomerExitParticipantType[] | undefined;

  /**
   * The types of connection information to return in the response. This parameter is optional.
   *
   * To receive connection information, specify one or both of the following values:
   *
   * - `CONNECTION_CREDENTIALS`: Returns a connection token.
   * - `WEBSOCKET`: Returns a websocket URL.
   *
   * `WEBSOCKET` and `CONNECTION_CREDENTIALS` are the values this operation acts on. No other value returns connection information.
   *
   * Request `WEBSOCKET` to get a URL the participant connects to directly. You do not need to call [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) for it. Request `CONNECTION_CREDENTIALS` on its own and the response returns a connection token but no websocket URL.
   *
   * If you omit this parameter, the response has no connection information.
   *
   * > **Note:** When you start a new chat contact and the information you request cannot be returned, StartChatContact returns an error rather than a response that omits it. When you retry a request with the same `ClientToken`, the response repeats the original contact and can omit a websocket URL if the chat has already ended.
   *
   * @public
   */
  ConnectionTypes?: ConnectionType[] | undefined;

  /**
   * The streaming configuration, such as the Amazon SNS streaming endpoint. Use it to initiate real-time message streaming when the chat is created. This parameter is optional.
   *
   * Setting this parameter returns a `StreamingId` in the response, and you do not need to call [StartContactStreaming](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html).
   *
   * > **Note:** This parameter starts message streaming only. The response does not include connection information, and setting this parameter does not remove the need to call [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html).
   *
   * @public
   */
  ChatStreamingConfiguration?: ChatStreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface StartEmailContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The email address of the customer.
   *
   * @public
   */
  FromEmailAddress: EmailAddressInfo | undefined;

  /**
   * The email address associated with the Connect Customer instance.
   *
   * @public
   */
  DestinationEmailAddress: string | undefined;

  /**
   * A description of the email contact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Emails can have the following reference types at the time of creation: `URL` | `NUMBER` | `STRING` | `DATE`. `EMAIL` | `EMAIL_MESSAGE` |`ATTACHMENT` are not a supported reference type during email creation.
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * The name of a email that is shown to an agent in the Contact Control Panel (CCP).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The email message body to be sent to the newly created email.
   *
   * @public
   */
  EmailMessage: InboundEmailContent | undefined;

  /**
   * The additional recipients address of the email.
   *
   * @public
   */
  AdditionalRecipients?: InboundAdditionalRecipients | undefined;

  /**
   * List of S3 presigned URLs of email attachments and their file name.
   *
   * @public
   */
  Attachments?: EmailAttachment[] | undefined;

  /**
   * The identifier of the flow for initiating the emails. To see the ContactFlowId in the Connect Customer admin website, on the navigation menu go to **Routing**, **Flows**. Choose the flow. On the flow page, under the name of the flow, choose **Show additional flow information**. The ContactFlowId is the last part of the ARN, shown here in bold:
   *
   * arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/**846ec553-a005-41c0-8341-xxxxxxxxxxxx**
   *
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * The contactId that is related to this contact. Linking emails together by using `RelatedContactID` copies over contact attributes from the related email contact to the new email contact. All updates to user-defined attributes in the new email contact are limited to the individual contact ID. There are no limits to the number of contacts that can be linked by using `RelatedContactId`.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes, and can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows.
   *
   * Attribute keys can include only alphanumeric, -, and _.
   *
   * This field can be used to show channel subtype, such as `connect:Guide`.
   *
   * > **Note:** To set contact expiry, a `ValueMap` must be specified containing the integer number of minutes the contact will be active for before expiring, with `SegmentAttributes` like \{ `"connect:ContactExpiry": \{"ValueMap" : \{ "ExpiryDuration": \{ "ValueInteger":135\}\}\}\}`.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

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
export interface StartOutboundChatContactRequest {
  /**
   * Information about the endpoint.
   *
   * @public
   */
  SourceEndpoint: Endpoint | undefined;

  /**
   * Information about the endpoint.
   *
   * @public
   */
  DestinationEndpoint: Endpoint | undefined;

  /**
   * The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows.
   *
   * - Attribute keys can include only alphanumeric, `-`, and `_`.
   * - This field can be used to show channel subtype, such as `connect:SMS` and `connect:WhatsApp`.
   *
   * @public
   */
  SegmentAttributes: Record<string, SegmentAttributeValue> | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes, and can be accessed in flows just like any other contact attributes.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The identifier of the flow for the call. To see the ContactFlowId in the Connect Customer console user interface, on the navigation menu go to **Routing, Contact Flows**. Choose the flow. On the flow page, under the name of the flow, choose **Show additional flow information**. The ContactFlowId is the last part of the ARN, shown here in bold:
   *
   * - arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/**123ec456-a007-89c0-1234-xxxxxxxxxxxx**
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days).
   *
   * @public
   */
  ChatDurationInMinutes?: number | undefined;

  /**
   * The details of the participant, including their display name.
   *
   * @public
   */
  ParticipantDetails?: ParticipantDetails | undefined;

  /**
   * A chat message.
   *
   * @public
   */
  InitialSystemMessage?: ChatMessage | undefined;

  /**
   * Information about template message configuration.
   *
   * @public
   */
  InitialTemplatedSystemMessage?: TemplatedMessageConfig | undefined;

  /**
   * The unique identifier for an Connect Customer contact. This identifier is related to the contact starting.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * The supported chat message content types. Supported types are:
   *
   * - `text/plain`
   * - `text/markdown`
   * - `application/json, application/vnd.amazonaws.connect.message.interactive`
   * - `application/vnd.amazonaws.connect.message.interactive.response`
   *
   * Content types must always contain `text/plain`. You can then put any other supported type in the list. For example, all the following lists are valid because they contain `text/plain`:
   *
   * - `[text/plain, text/markdown, application/json]`
   * - `[text/markdown, text/plain]`
   * - `[text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response]`
   *
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/). The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTaskContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the previous chat, voice, or task contact. Any updates to user-defined attributes to task contacts linked using the same `PreviousContactID` will affect every contact in the chain. There can be a maximum of 12 linked task contacts in a chain.
   *
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Connect Customer admin website, on the navigation menu go to **Routing**, **Flows**. Choose the flow. On the flow page, under the name of the flow, choose **Show additional flow information**. The ContactFlowId is the last part of the ARN, shown here in bold:
   *
   * arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/**846ec553-a005-41c0-8341-xxxxxxxxxxxx**
   *
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes, and can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The name of a task that is shown to an agent in the Contact Control Panel (CCP).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have the following reference types at the time of creation: `URL` | `NUMBER` | `STRING` | `DATE` | `EMAIL`. `ATTACHMENT` is not a supported reference type during task creation.
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * A description of the task that is shown to an agent in the Contact Control Panel (CCP).
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future.
   *
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * A unique identifier for the task template. For more information about task templates, see [Create task templates](https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  TaskTemplateId?: string | undefined;

  /**
   * The identifier for the quick connect. Tasks that are created by using `QuickConnectId` will use the flow that is defined on agent or queue quick connect. For more information about quick connects, see [Create quick connects](https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html).
   *
   * @public
   */
  QuickConnectId?: string | undefined;

  /**
   * The contactId that is [related](https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks) to this contact. Linking tasks together by using `RelatedContactID` copies over contact attributes from the related task contact to the new task contact. All updates to user-defined attributes in the new task contact are limited to the individual contact ID, unlike what happens when tasks are linked by using `PreviousContactID`. There are no limits to the number of contacts that can be linked by using `RelatedContactId`.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments (unique contact ID) using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows.
   *
   * Attribute keys can include only alphanumeric, -, and _.
   *
   * This field can be used to set Contact Expiry as a duration in minutes and set a UserId for the User who created a task.
   *
   * > **Note:**
   * >
   * > To set contact expiry, a ValueMap must be specified containing the integer number of minutes the contact will be active for before expiring, with `SegmentAttributes` like \{ `"connect:ContactExpiry": \{"ValueMap" : \{ "ExpiryDuration": \{ "ValueInteger": 135\}\}\}\}`.
   * >
   * > To set the created by user, a valid AgentResourceId must be supplied, with `SegmentAttributes` like \{ `"connect:CreatedByUser" \{ "ValueString": "arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/agent/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\}\}\}`.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * List of S3 presigned URLs of task attachments and their file name. You can have a maximum of 5 attachments per task.
   *
   * @public
   */
  Attachments?: TaskAttachment[] | undefined;
}

/**
 * @public
 */
export interface StartWebRTCContactRequest {
  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes, and can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, -, and _ characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier of the flow for the call. To see the ContactFlowId in the Connect Customer admin website, on the navigation menu go to **Routing**, **Flows**. Choose the flow. On the flow page, under the name of the flow, choose **Show additional flow information**. The ContactFlowId is the last part of the ARN, shown here in bold:
   *
   * arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/**846ec553-a005-41c0-8341-xxxxxxxxxxxx**
   *
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Information about the video sharing capabilities of the participants (customer, agent).
   *
   * @public
   */
  AllowedCapabilities?: AllowedCapabilities | undefined;

  /**
   * The details of the participant, including their display name.
   *
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * The unique identifier for an Connect Customer contact. This identifier is related to the contact starting.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have the following reference types at the time of creation: `URL` | `NUMBER` | `STRING` | `DATE` | `EMAIL`. `ATTACHMENT` is not a supported reference type during task creation.
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * A description of the task that is shown to an agent in the Contact Control Panel (CCP).
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A map of system-defined attributes for the WebRTC contact segment. Use the `connect:Subtype` attribute to specify the channel subtype, such as `connect:WebRTC`.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;
}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with your contact center.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The name of the contact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the contact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Well-formed data on contact, shown to agents on Contact Control Panel (CCP).
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments (unique contact ID) using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows.
   *
   * Attribute keys can include only alphanumeric, -, and _.
   *
   * This field can be used to show channel subtype, such as `connect:Guide`.
   *
   * Contact Expiry, and user-defined attributes (String - String) that are defined in predefined attributes, can be updated by using the UpdateContact API.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * Information about the queue associated with a contact. This parameter can only be updated for external audio contacts. It is used when you integrate third-party systems with Contact Lens for analytics. For more information, see [Connect Customer Contact Lens integration](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  QueueInfo?: QueueInfoInput | undefined;

  /**
   * Information about the agent associated with a contact. This parameter can only be updated for external audio contacts. It is used when you integrate third-party systems with Contact Lens for analytics. For more information, see [Connect Customer Contact Lens integration](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  UserInfo?: UserInfo | undefined;

  /**
   * The endpoint of the customer for which the contact was initiated. For external audio contacts, this is usually the end customer's phone number. This value can only be updated for external audio contacts. For more information, see [Connect Customer Contact Lens integration](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html) in the *Connect Customer Administrator Guide*. For email contacts with an `OUTBOUND` or `AGENT_REPLY` initiation method, this value can be updated while the outbound email is still a draft, before you send it.
   *
   * @public
   */
  CustomerEndpoint?: Endpoint | undefined;

  /**
   * External system endpoint for the contact was initiated. For external audio contacts, this is the phone number of the external system such as the contact center. This value can only be updated for external audio contacts. For more information, see [Connect Customer Contact Lens integration](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html) in the *Connect Customer Administrator Guide*. For email contacts with an `OUTBOUND` or `AGENT_REPLY` initiation method, this value can be updated while the outbound email is still a draft, before you send it.
   *
   * @public
   */
  SystemEndpoint?: Endpoint | undefined;

  /**
   * The additional recipients of an outbound email. Use this field to update the CC email address recipients of a contact. An empty list clears the existing CC recipients.
   *
   * @public
   */
  AdditionalRecipients?: NullableAdditionalRecipients | undefined;
}

/**
 * Information about an item from an evaluation form. The item must be either a section or a question.
 *
 * @public
 */
export type EvaluationFormItem =
  | EvaluationFormItem.QuestionMember
  | EvaluationFormItem.SectionMember
  | EvaluationFormItem.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormItem {
  /**
   * The information of the section.
   *
   * @public
   */
  export interface SectionMember {
    Section: EvaluationFormSection;
    Question?: never;
    $unknown?: never;
  }

  /**
   * The information of the question.
   *
   * @public
   */
  export interface QuestionMember {
    Section?: never;
    Question: EvaluationFormQuestion;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Section?: never;
    Question?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Section: (value: EvaluationFormSection) => T;
    Question: (value: EvaluationFormQuestion) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Latest routing criteria on the contact.
 *
 * @public
 */
export interface RoutingCriteria {
  /**
   * List of routing steps. When Connect Customer does not find an available agent meeting the requirements in a step for a given step duration, the routing criteria will move on to the next step sequentially until a join is completed with an agent. When all steps are exhausted, the contact will be offered to any agent in the queue.
   *
   * @public
   */
  Steps?: Step[] | undefined;

  /**
   * The timestamp indicating when the routing criteria is set to active. A routing criteria is activated when contact is transferred to a queue. ActivationTimestamp will be set on routing criteria for contacts in agent queue even though Routing criteria is never activated for contacts in agent queue.
   *
   * @public
   */
  ActivationTimestamp?: Date | undefined;

  /**
   * Information about the index of the routing criteria.
   *
   * @public
   */
  Index?: number | undefined;
}

/**
 * An object to define the RoutingCriteria.
 *
 * @public
 */
export interface RoutingCriteriaInput {
  /**
   * When Connect Customer does not find an available agent meeting the requirements in a step for a given step duration, the routing criteria will move on to the next step sequentially until a join is completed with an agent. When all steps are exhausted, the contact will be offered to any agent in the queue.
   *
   * @public
   */
  Steps?: RoutingCriteriaInputStep[] | undefined;
}

/**
 * Information about a section from an evaluation form. A section can contain sections and/or questions. Evaluation forms can only contain sections and subsections (two level nesting).
 *
 * @public
 */
export interface EvaluationFormSection {
  /**
   * The title of the section.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The identifier of the section. An identifier must be unique within the evaluation form.
   *
   * @public
   */
  RefId: string | undefined;

  /**
   * The instructions of the section.
   *
   * @public
   */
  Instructions?: string | undefined;

  /**
   * The items of the section.
   *
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * The scoring weight of the section.
   *
   * @public
   */
  Weight?: number | undefined;

  /**
   * The flag to exclude the section from scoring.
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
 * @public
 */
export interface CreateEvaluationFormRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A title of the evaluation form.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of the evaluation form.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
   *
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * A scoring strategy of the evaluation form.
   *
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * Configuration information about automated evaluations.
   *
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A boolean flag indicating whether to create evaluation form in draft state.
   *
   * @public
   */
  AsDraft?: boolean | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Configuration information about evaluation reviews.
   *
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;

  /**
   * Configuration that specifies the target for the evaluation form.
   *
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * Configuration for language settings of the evaluation form.
   *
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;

  /**
   * The AI version to use for the evaluation form. This specifies which AI model version is used for automated evaluations.
   *
   * @public
   */
  AIVersion?: string | undefined;
}

/**
 * Information about the evaluation form.
 *
 * @public
 */
export interface EvaluationForm {
  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * The flag indicating whether the evaluation form is locked for changes.
   *
   * @public
   */
  Locked: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) for the evaluation form resource.
   *
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * A title of the evaluation form.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of the evaluation form.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the evaluation form.
   *
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
   *
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * A scoring strategy of the evaluation form.
   *
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * The timestamp for when the evaluation form was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the evaluation form.
   *
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * The timestamp for when the evaluation form was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the evaluation form.
   *
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * The automatic evaluation configuration of an evaluation form.
   *
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * Configuration for evaluation review settings of this evaluation form.
   *
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Configuration that specifies the target for this evaluation form.
   *
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * Configuration for language settings of this evaluation form.
   *
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;

  /**
   * The status of the most recent validation run for this evaluation form. Valid values: `IN_PROGRESS`, `COMPLETED`, `FAILED`.
   *
   * @public
   */
  LatestValidationStatus?: EvaluationFormValidationStatus | undefined;

  /**
   * The timestamp when the most recent validation was started for this evaluation form.
   *
   * @public
   */
  LastValidationTime?: Date | undefined;

  /**
   * The AI version to use for the evaluation form. This specifies which AI model version is used for automated evaluations.
   *
   * @public
   */
  AIVersion?: string | undefined;
}

/**
 * Information about an evaluation form used in a contact evaluation.
 *
 * @public
 */
export interface EvaluationFormContent {
  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;

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
   * A title of the evaluation form.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of the evaluation form.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
   *
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * A scoring strategy of the evaluation form.
   *
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * The configuration of the automated evaluation.
   *
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * Configuration that specifies the target for this evaluation form content.
   *
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * Configuration for language settings of this evaluation form content.
   *
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;

  /**
   * Configuration for evaluation review settings of this evaluation form content.
   *
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;

  /**
   * The AI version to use for the evaluation form. This specifies which AI model version is used for automated evaluations.
   *
   * @public
   */
  AIVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactRoutingDataRequest {
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
   * The number of seconds to add or subtract from the contact's routing age. Contacts are routed to agents on a first-come, first-serve basis. This means that changing their amount of time in queue compared to others also changes their position in queue.
   *
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * Priority of the contact in the queue. The default priority for new contacts is 5. You can raise the priority of a contact compared to other contacts in the queue by assigning them a higher priority, such as 1 or 2.
   *
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * Updates the routing criteria on the contact. These properties can be used to change how a contact is routed within the queue.
   *
   * @public
   */
  RoutingCriteria?: RoutingCriteriaInput | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluationFormRequest {
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
   * A version of the evaluation form to update.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * A flag indicating whether the operation must create a new version.
   *
   * @public
   */
  CreateNewVersion?: boolean | undefined;

  /**
   * A title of the evaluation form.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The description of the evaluation form.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
   *
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * A scoring strategy of the evaluation form.
   *
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * Whether automated evaluations are enabled.
   *
   * @public
   */
  AutoEvaluationConfiguration?: EvaluationFormAutoEvaluationConfiguration | undefined;

  /**
   * Configuration for evaluation review settings of the evaluation form.
   *
   * @public
   */
  ReviewConfiguration?: EvaluationReviewConfiguration | undefined;

  /**
   * A boolean flag indicating whether to update evaluation form to draft state.
   *
   * @public
   */
  AsDraft?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Configuration that specifies the target for the evaluation form.
   *
   * @public
   */
  TargetConfiguration?: EvaluationFormTargetConfiguration | undefined;

  /**
   * Configuration for language settings of the evaluation form.
   *
   * @public
   */
  LanguageConfiguration?: EvaluationFormLanguageConfiguration | undefined;

  /**
   * The AI version to use for the evaluation form. This specifies which AI model version is used for automated evaluations.
   *
   * @public
   */
  AIVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContactEvaluationResponse {
  /**
   * Information about the evaluation form completed for a specific contact.
   *
   * @public
   */
  Evaluation: Evaluation | undefined;

  /**
   * Information about the evaluation form.
   *
   * @public
   */
  EvaluationForm: EvaluationFormContent | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormResponse {
  /**
   * Information about the evaluation form.
   *
   * @public
   */
  EvaluationForm: EvaluationForm | undefined;
}

/**
 * Contains information about a contact.
 *
 * @public
 */
export interface Contact {
  /**
   * The Amazon Resource Name (ARN) for the contact.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier for the contact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * If this contact is related to other contacts, this is the ID of the initial contact.
   *
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * If this contact is not the first contact, this is the ID of the previous contact.
   *
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * This is the root contactId which is used as a unique identifier for all subsequent contacts in a contact tree.
   *
   * @public
   */
  ContactAssociationId?: string | undefined;

  /**
   * Indicates how the contact was initiated.
   *
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * The name of the contact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the contact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * How the contact reached your contact center.
   *
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * If this contact was queued, this contains information about the queue.
   *
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * Information about the agent who accepted the contact.
   *
   * @public
   */
  AgentInfo?: AgentInfo | undefined;

  /**
   * The date and time this contact was initiated, in UTC time. For `INBOUND`, this is when the contact arrived. For `OUTBOUND`, this is when the agent began dialing. For `CALLBACK`, this is when the callback contact was created. For `TRANSFER` and `QUEUE_TRANSFER`, this is when the transfer was initiated. For `API`, this is when the request arrived. For `EXTERNAL_OUTBOUND`, this is when the agent started dialing the external participant. For `MONITOR`, this is when the supervisor started listening to a contact.
   *
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * The date and time that the customer endpoint disconnected from the current contact, in UTC time. In transfer scenarios, the DisconnectTimestamp of the previous contact indicates the date and time when that contact ended.
   *
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * The timestamp when contact was last updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * The timestamp when the contact was last paused.
   *
   * @public
   */
  LastPausedTimestamp?: Date | undefined;

  /**
   * The timestamp when the contact was last resumed.
   *
   * @public
   */
  LastResumedTimestamp?: Date | undefined;

  /**
   * The timestamp when ringing started for a campaign call.
   *
   * @public
   */
  RingStartTimestamp?: Date | undefined;

  /**
   * Total pause count for a contact.
   *
   * @public
   */
  TotalPauseCount?: number | undefined;

  /**
   * Total pause duration for a contact in seconds.
   *
   * @public
   */
  TotalPauseDurationInSeconds?: number | undefined;

  /**
   * The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * The contactId that is [related](https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid) to this contact.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * Information about Connect Customer Wisdom.
   *
   * @public
   */
  WisdomInfo?: WisdomInfo | undefined;

  /**
   * The customer's identification number. For example, the `CustomerId` may be a customer number from your CRM. You can create a Lambda function to pull the unique customer ID of the caller from your CRM system. If you enable Connect Customer Voice ID capability, this attribute is populated with the `CustomerSpeakerId` of the caller.
   *
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * The customer or external third party participant endpoint.
   *
   * @public
   */
  CustomerEndpoint?: EndpointInfo | undefined;

  /**
   * The system endpoint. For `INBOUND`, this is the phone number or email address that the customer dialed. For `OUTBOUND` and `EXTERNAL_OUTBOUND`, this is the outbound caller ID number assigned to the outbound queue that is used to dial the customer. For callback, this shows up as Softphone for calls handled by agents with softphone.
   *
   * @public
   */
  SystemEndpoint?: EndpointInfo | undefined;

  /**
   * An integer that represents the queue time adjust to be applied to the contact, in seconds (longer / larger queue time are routed preferentially). Cannot be specified if the QueuePriority is specified. Must be statically defined and a valid integer value.
   *
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * An integer that represents the queue priority to be applied to the contact (lower priorities are routed preferentially). Cannot be specified if the QueueTimeAdjustmentSeconds is specified. Must be statically defined, must be larger than zero, and a valid integer value. Default Value is 5.
   *
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * Tags associated with the contact. This contains both Amazon Web Services generated and user-defined tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp when customer endpoint connected to Connect Customer.
   *
   * @public
   */
  ConnectedToSystemTimestamp?: Date | undefined;

  /**
   * Latest routing criteria on the contact.
   *
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;

  /**
   * Information about the Customer on the contact.
   *
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * Information associated with a campaign.
   *
   * @public
   */
  Campaign?: Campaign | undefined;

  /**
   * Indicates how an [outbound campaign](https://docs.aws.amazon.com/connect/latest/adminguide/how-to-create-campaigns.html) call is actually disposed if the contact is connected to Connect Customer.
   *
   * @public
   */
  AnsweringMachineDetectionStatus?: AnsweringMachineDetectionStatus | undefined;

  /**
   * Information about customer’s voice activity.
   *
   * @public
   */
  CustomerVoiceActivity?: CustomerVoiceActivity | undefined;

  /**
   * Information about the quality of the participant's media connection.
   *
   * @public
   */
  QualityMetrics?: QualityMetrics | undefined;

  /**
   * Information about how agent, bot, and customer interact in a chat contact.
   *
   * @public
   */
  ChatMetrics?: ChatMetrics | undefined;

  /**
   * Information about the call disconnect experience.
   *
   * @public
   */
  DisconnectDetails?: DisconnectDetails | undefined;

  /**
   * List of additional email addresses for an email contact.
   *
   * @public
   */
  AdditionalEmailRecipients?: AdditionalEmailRecipients | undefined;

  /**
   * A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Connect Customer attributes and can be accessed in flows. Attribute keys can include only alphanumeric, -, and _ characters. This field can be used to show channel subtype. For example, `connect:Guide` or `connect:SMS`.
   *
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * If recording was enabled, this is information about the recordings.
   *
   * @public
   */
  Recordings?: RecordingInfo[] | undefined;

  /**
   * The disconnect reason for the contact. For a list and description of all the possible disconnect reasons by channel, see DisconnectReason under [ContactTraceRecord](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  DisconnectReason?: string | undefined;

  /**
   * Information about the contact evaluations where the key is the FormId, which is a unique identifier for the form.
   *
   * @public
   */
  ContactEvaluations?: Record<string, ContactEvaluation> | undefined;

  /**
   * If this contact was created using a task template, this contains information about the task template.
   *
   * @public
   */
  TaskTemplateInfo?: TaskTemplateInfoV2 | undefined;

  /**
   * A map of string key/value pairs that contain user-defined attributes which are lightly typed within the contact. This object is used only for task contacts.
   *
   * @public
   */
  ContactDetails?: ContactDetails | undefined;

  /**
   * Information about the outbound strategy.
   *
   * @public
   */
  OutboundStrategy?: OutboundStrategy | undefined;

  /**
   * The attributes of the contact.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * List of next contact entries for the contact.
   *
   * @public
   */
  NextContacts?: NextContactEntry[] | undefined;

  /**
   * Information about the global resiliency configuration for the contact, including traffic distribution details.
   *
   * @public
   */
  GlobalResiliencyMetadata?: GlobalResiliencyMetadata | undefined;
}

/**
 * Information of returned contact.
 *
 * @public
 */
export interface ContactSearchSummary {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the contact summary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * If this contact is related to other contacts, this is the ID of the initial contact.
   *
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * If this contact is not the first contact, this is the ID of the previous contact.
   *
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * Indicates how the contact was initiated.
   *
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * How the contact reached your contact center.
   *
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * If this contact was queued, this contains information about the queue.
   *
   * @public
   */
  QueueInfo?: ContactSearchSummaryQueueInfo | undefined;

  /**
   * Information about the agent who accepted the contact.
   *
   * @public
   */
  AgentInfo?: ContactSearchSummaryAgentInfo | undefined;

  /**
   * The date and time this contact was initiated, in UTC time. For `INBOUND`, this is when the contact arrived. For `OUTBOUND`, this is when the agent began dialing. For `CALLBACK`, this is when the callback contact was created. For `TRANSFER` and `QUEUE_TRANSFER`, this is when the transfer was initiated. For API, this is when the request arrived. For `EXTERNAL_OUTBOUND`, this is when the agent started dialing the external participant. For `MONITOR`, this is when the supervisor started listening to a contact.
   *
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * The timestamp when the customer endpoint disconnected from Connect Customer.
   *
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * Set of segment attributes for a contact.
   *
   * @public
   */
  SegmentAttributes?: Record<string, ContactSearchSummarySegmentAttributeValue> | undefined;

  /**
   * Indicates name of the contact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Latest routing criteria on the contact.
   *
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;

  /**
   * Tags associated with the contact. This contains both Amazon Web Services generated and user-defined tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Additional routing information for contacts created in ACGR instances.
   *
   * @public
   */
  GlobalResiliencyMetadata?: GlobalResiliencyMetadata | undefined;

  /**
   * Information about the AI agents involved in the contact.
   *
   * @public
   */
  AiAgentInfo?: ContactSearchSummaryAiAgentInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeContactResponse {
  /**
   * Information about the contact.
   *
   * @public
   */
  Contact?: Contact | undefined;
}

/**
 * @public
 */
export interface SearchContactsResponse {
  /**
   * Information about the contacts.
   *
   * @public
   */
  Contacts: ContactSearchSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of contacts which matched your search query.
   *
   * @public
   */
  TotalCount?: number | undefined;
}
