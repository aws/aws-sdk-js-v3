// smithy-typescript generated code
import type {
  AgentAvailabilityTimer,
  AttachmentScope,
  AutoEvaluationStatus,
  AvailableFilterType,
  Channel,
  ContactField,
  ContactFlowModuleState,
  ContactFlowModuleStatus,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowType,
  ContactParticipantRole,
  DataTableAttributeValueType,
  DataTableLockLevel,
  DataTableStatus,
  DirectoryType,
  EndpointType,
  EntityType,
  EvaluationQuestionAnswerAnalysisType,
  EvaluationStatus,
  EvaluationSuggestedAnswerStatus,
  EvaluationTranscriptType,
  EvaluationType,
  FlowAssociationResourceType,
  InstanceAttributeType,
  InstanceReplicationStatus,
  InstanceStatus,
  InstanceStorageResourceType,
  LocaleCode,
  MediaStreamType,
  MediaType,
  MetricCreationMethod,
  MetricStatus,
  MetricType,
  MetricUnit,
  NextContactType,
  NotificationPriority,
  OverrideType,
  ParticipantType,
  PerformanceCategoryName,
  PhoneNumberCountryCode,
  PhoneNumberType,
  PhoneNumberWorkflowStatus,
  PhoneType,
  PropertyValidationExceptionReason,
  QuestionRuleCategoryAutomationCondition,
  QueueStatus,
  QuickConnectType,
  RecordingStatus,
  RuleCapabilityTier,
  RulePublishStatus,
  SecurityProfileType,
  Status,
  StorageType,
  TaskTemplateFieldType,
  TaskTemplateStatus,
  TestCaseEntryPointType,
  TestCaseStatus,
  TrafficDistributionGroupStatus,
  TrendIndicator,
  UseCaseType,
  ViewStatus,
  ViewType,
  Visibility,
  VocabularyLanguageCode,
  VocabularyState,
  VoiceEnhancementMode,
  WorkspaceFontFamily,
} from "./enums";
import type {
  AfterContactWorkConfigPerChannel,
  AgentQualityMetrics,
  AgentsCriteria,
  AgentStatus,
  AiAgentInfo,
  AliasConfiguration,
  AllowedExtension,
  AudioQualityMetricsInfo,
  CreatedByInfo,
  DataTableLockVersion,
  DeviceInfo,
  ExternalInvocationConfiguration,
  ExtractionConfiguration,
  ExtractionDefinitionDisplay,
  FailedBatchAssociationSummary,
  GranularAccessControlConfiguration,
  HoursOfOperationConfig,
  HoursOfOperationOverrideConfig,
  InstanceStorageConfig,
  InvisibleFieldInfo,
  LexBot,
  LexV2Bot,
  MediaConcurrency,
  MetricCalculation,
  OutboundCallerConfig,
  OutboundEmailConfig,
  ParticipantCapabilities,
  PredefinedAttributeValues,
  PreEvaluationFilters,
  PrimaryValue,
  QuickConnectConfig,
  ReadOnlyFieldInfo,
  RecurrenceConfig,
  RequiredFieldInfo,
  RoutingProfileQueueReference,
  RuleAction,
  RuleTriggerEventSource,
  SecurityProfileItem,
  SuccessfulBatchAssociationSummary,
  TaskTemplateFieldIdentifier,
  Validation,
} from "./models_0";

/**
 * Describes constraints that apply to the template fields.
 *
 * @public
 */
export interface TaskTemplateConstraints {
  /**
   * Lists the fields that are required to be filled by agents.
   *
   * @public
   */
  RequiredFields?: RequiredFieldInfo[] | undefined;

  /**
   * Lists the fields that are read-only to agents, and cannot be edited.
   *
   * @public
   */
  ReadOnlyFields?: ReadOnlyFieldInfo[] | undefined;

  /**
   * Lists the fields that are invisible to agents.
   *
   * @public
   */
  InvisibleFields?: InvisibleFieldInfo[] | undefined;
}

/**
 * The event hooks that are set on tasks created by using this template.
 *
 * @public
 */
export interface TaskTemplateContactHooks {
  /**
   * The identifier of the flow module that runs when an agent attempts to disconnect from a task created by referencing this template. If no agent ever connects to the task, the flow module runs when the task is terminated.
   *
   * @public
   */
  WrapUpFlowId?: string | undefined;
}

/**
 * Describes a default field and its corresponding value.
 *
 * @public
 */
export interface TaskTemplateDefaultFieldValue {
  /**
   * Identifier of a field.
   *
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;

  /**
   * Default value for the field.
   *
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * Describes default values for fields on a template.
 *
 * @public
 */
export interface TaskTemplateDefaults {
  /**
   * Default value for the field.
   *
   * @public
   */
  DefaultFieldValues?: TaskTemplateDefaultFieldValue[] | undefined;
}

/**
 * Describes a single task template field.
 *
 * @public
 */
export interface TaskTemplateField {
  /**
   * The unique identifier for the field.
   *
   * @public
   */
  Id: TaskTemplateFieldIdentifier | undefined;

  /**
   * The description of the field.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates the type of field.
   *
   * @public
   */
  Type?: TaskTemplateFieldType | undefined;

  /**
   * A list of options for a single select field.
   *
   * @public
   */
  SingleSelectOptions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTaskTemplateRequest {
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
  Name: string | undefined;

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
  Fields: TaskTemplateField[] | undefined;

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
export interface CreateTaskTemplateResponse {
  /**
   * The identifier of the task template resource.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the task template resource.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * Contains information about why a property is not valid.
 *
 * @public
 */
export interface PropertyValidationExceptionProperty {
  /**
   * The full property path.
   *
   * @public
   */
  PropertyPath: string | undefined;

  /**
   * Why the property is not valid.
   *
   * @public
   */
  Reason: PropertyValidationExceptionReason | undefined;

  /**
   * A message describing why the property is not valid.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Parameters for initiating a chat test.
 *
 * @public
 */
export interface ChatEntryPointParameters {
  /**
   * The flow identifier for the test.
   *
   * @public
   */
  FlowId?: string | undefined;
}

/**
 * Parameters for initiating a voice call test.
 *
 * @public
 */
export interface VoiceCallEntryPointParameters {
  /**
   * The source phone number for the test.
   *
   * @public
   */
  SourcePhoneNumber?: string | undefined;

  /**
   * The destination phone number for the test.
   *
   * @public
   */
  DestinationPhoneNumber?: string | undefined;

  /**
   * The flow identifier for the test.
   *
   * @public
   */
  FlowId?: string | undefined;
}

/**
 * Defines the starting point for a test case.
 *
 * @public
 */
export interface TestCaseEntryPoint {
  /**
   * The type of entry point.
   *
   * @public
   */
  Type?: TestCaseEntryPointType | undefined;

  /**
   * Parameters for voice call entry point.
   *
   * @public
   */
  VoiceCallEntryPointParameters?: VoiceCallEntryPointParameters | undefined;

  /**
   * Parameters for chat entry point.
   *
   * @public
   */
  ChatEntryPointParameters?: ChatEntryPointParameters | undefined;
}

/**
 * @public
 */
export interface CreateTestCaseRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the test.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the test.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The JSON string that represents the content of the test.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * Defines the starting point for your test.
   *
   * @public
   */
  EntryPoint?: TestCaseEntryPoint | undefined;

  /**
   * Defines the initial custom attributes for your test.
   *
   * @public
   */
  InitializationData?: string | undefined;

  /**
   * Indicates the test status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. The SAVED status does not initiate validation of the content.
   *
   * @public
   */
  Status?: TestCaseStatus | undefined;

  /**
   * Id of the test case if you want to create it in a replica region using Amazon Connect Global Resiliency
   *
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
export interface CreateTestCaseResponse {
  /**
   * The identifier of the test.
   *
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the test.
   *
   * @public
   */
  TestCaseArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupRequest {
  /**
   * The name for the traffic distribution group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the traffic distribution group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the Connect Customer instance that has been replicated. You can find the `instanceId` in the ARN of the instance.
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
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupResponse {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the traffic distribution group.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUseCaseRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the integration association.
   *
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * The type of use case to associate to the integration association. Each integration association can have only one of each use case type.
   *
   * @public
   */
  UseCaseType: UseCaseType | undefined;

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
export interface CreateUseCaseResponse {
  /**
   * The identifier of the use case.
   *
   * @public
   */
  UseCaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the use case.
   *
   * @public
   */
  UseCaseArn?: string | undefined;
}

/**
 * Configuration settings for auto-accept for a specific channel.
 *
 * @public
 */
export interface AutoAcceptConfig {
  /**
   * The channel for this auto-accept configuration. Valid values: VOICE, CHAT, TASK, EMAIL.
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * Indicates whether auto-accept is enabled for this channel. When enabled, available agents are automatically connected to contacts from this channel.
   *
   * @public
   */
  AutoAccept: boolean | undefined;

  /**
   * Indicates whether auto-accept is enabled for agent-first callbacks. This setting only applies to the VOICE channel.
   *
   * @public
   */
  AgentFirstCallbackAutoAccept?: boolean | undefined;
}

/**
 * Contains information about the identity of a user.
 *
 * > **Note:** For Connect Customer instances that are created with the `EXISTING_DIRECTORY` identity management type, `FirstName`, `LastName`, and `Email` cannot be updated from within Connect Customer because they are managed by the directory.
 *
 * > **Important:** The `FirstName` and `LastName` length constraints below apply only to instances using SAML for identity management. If you are using Connect Customer for identity management, the length constraints are 1-255 for `FirstName`, and 1-256 for `LastName`.
 *
 * @public
 */
export interface UserIdentityInfo {
  /**
   * The first name. This is required if you are using Connect Customer or SAML for identity management. Inputs must be in Unicode Normalization Form C (NFC). Text containing characters in a non-NFC form (for example, decomposed characters or combining marks) are not accepted.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The last name. This is required if you are using Connect Customer or SAML for identity management. Inputs must be in Unicode Normalization Form C (NFC). Text containing characters in a non-NFC form (for example, decomposed characters or combining marks) are not accepted.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The email address. If you are using SAML for identity management and include this parameter, an error is returned.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The user's secondary email address. If you provide a secondary email, the user receives email notifications - other than password reset notifications - to this email address instead of to their primary email address.
   *
   * Pattern: `(?=^.\{0,265\}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]\{2,63\}`
   *
   * @public
   */
  SecondaryEmail?: string | undefined;

  /**
   * The user's mobile number.
   *
   * @public
   */
  Mobile?: string | undefined;
}

/**
 * Configuration settings for persistent connection for a specific channel.
 *
 * @public
 */
export interface PersistentConnectionConfig {
  /**
   * Configuration settings for persistent connection. **Only `VOICE` is supported for this data type.**
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * Indicates whether persistent connection is enabled. When enabled, the agent's connection is maintained after a call ends, enabling subsequent calls to connect faster.
   *
   * @public
   */
  PersistentConnection: boolean | undefined;
}

/**
 * Contains information about the phone configuration settings for a user.
 *
 * @public
 */
export interface UserPhoneConfig {
  /**
   * The phone type.
   *
   * @public
   */
  PhoneType?: PhoneType | undefined;

  /**
   * The Auto accept setting.
   *
   * @public
   */
  AutoAccept?: boolean | undefined;

  /**
   * The After Call Work (ACW) timeout setting, in seconds. This parameter has a minimum value of 0 and a maximum value of 2,000,000 seconds (24 days). Enter 0 if you don't want to allocate a specific amount of ACW time. It essentially means an indefinite amount of time. When the conversation ends, ACW starts; the agent must choose Close contact to end ACW.
   *
   * > **Note:** When returned by a `SearchUsers` call, `AfterContactWorkTimeLimit` is returned in milliseconds.
   *
   * @public
   */
  AfterContactWorkTimeLimit?: number | undefined;

  /**
   * The phone number for the user's desk phone.
   *
   * @public
   */
  DeskPhoneNumber?: string | undefined;

  /**
   * The persistent connection setting for the user.
   *
   * @public
   */
  PersistentConnection?: boolean | undefined;
}

/**
 * Configuration settings for phone type and phone number.
 *
 * @public
 */
export interface PhoneNumberConfig {
  /**
   * The channel for this phone number configuration. **Only `VOICE` is supported for this data type.**
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * The phone type. Valid values: SOFT_PHONE, DESK_PHONE.
   *
   * @public
   */
  PhoneType: PhoneType | undefined;

  /**
   * The phone number for the user's desk phone.
   *
   * @public
   */
  PhoneNumber?: string | undefined;
}

/**
 * Configuration settings for voice enhancement.
 *
 * @public
 */
export interface VoiceEnhancementConfig {
  /**
   * The channel for this voice enhancement configuration. **Only `VOICE` is supported for this data type.**
   *
   * @public
   */
  Channel: Channel | undefined;

  /**
   * The voice enhancement mode.
   *
   * @public
   */
  VoiceEnhancementMode: VoiceEnhancementMode | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.
   *
   * Username can include @ only if used in an email format. For example:
   *
   * - Correct: testuser
   * - Correct: testuser@example.com
   * - Incorrect: testuser@example
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The password for the user account. A password is required if you are using Connect Customer for identity management. Otherwise, it is an error to include a password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The information about the identity of the user.
   *
   * @public
   */
  IdentityInfo?: UserIdentityInfo | undefined;

  /**
   * The phone settings for the user. This parameter is optional. If not provided, the user can be configured using channel-specific parameters such as `AutoAcceptConfigs`, `AfterContactWorkConfigs`, `PhoneNumberConfigs`, `PersistentConnectionConfigs`, and `VoiceEnhancementConfigs`.
   *
   * @public
   */
  PhoneConfig?: UserPhoneConfig | undefined;

  /**
   * The identifier of the user account in the directory used for identity management. If Connect Customer cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Connect Customer cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory.
   *
   * This parameter is required if you are using an existing directory for identity management in Connect Customer when Connect Customer cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.
   *
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * The identifier of the security profile for the user.
   *
   * @public
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * The identifier of the routing profile for the user.
   *
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * The identifier of the hierarchy group for the user.
   *
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The list of auto-accept configuration settings for each channel.
   *
   * @public
   */
  AutoAcceptConfigs?: AutoAcceptConfig[] | undefined;

  /**
   * The list of after contact work (ACW) timeout configuration settings for each channel.
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
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The identifier of the user account.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user account.
   *
   * @public
   */
  UserArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupRequest {
  /**
   * The name of the user hierarchy group. Must not be more than 100 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.
   *
   * @public
   */
  ParentGroupId?: string | undefined;

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
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupResponse {
  /**
   * The identifier of the hierarchy group.
   *
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hierarchy group.
   *
   * @public
   */
  HierarchyGroupArn?: string | undefined;
}

/**
 * View content containing all content necessary to render a view except for runtime input data and the runtime input schema, which is auto-generated by this operation.
 *
 * @public
 */
export interface ViewInputContent {
  /**
   * The view template representing the structure of the view.
   *
   * @public
   */
  Template?: string | undefined;

  /**
   * A list of possible actions from the view.
   *
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateViewRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique Id for each create view request to avoid duplicate view creation. For example, the view is idempotent ClientToken is provided.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates the view status as either `SAVED` or `PUBLISHED`. The `PUBLISHED` status will initiate validation on the content.
   *
   * @public
   */
  Status: ViewStatus | undefined;

  /**
   * View content containing all content necessary to render a view except for runtime input data.
   *
   * The total uncompressed content has a maximum file size of 400kB.
   *
   * @public
   */
  Content: ViewInputContent | undefined;

  /**
   * The description of the view.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the view.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The tags associated with the view resource (not specific to view version).These tags can be used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * View content containing all content necessary to render a view except for runtime input data.
 *
 * @public
 */
export interface ViewContent {
  /**
   * The data schema matching data that the view template must be provided to render.
   *
   * @public
   */
  InputSchema?: string | undefined;

  /**
   * The view template representing the structure of the view.
   *
   * @public
   */
  Template?: string | undefined;

  /**
   * A list of possible actions from the view.
   *
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * A view resource object. Contains metadata and content necessary to render the view.
 *
 * @public
 */
export interface View {
  /**
   * The identifier of the view.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the view.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the view.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates the view status as either `SAVED` or `PUBLISHED`. The `PUBLISHED` status will initiate validation on the content.
   *
   * @public
   */
  Status?: ViewStatus | undefined;

  /**
   * The type of the view - `CUSTOMER_MANAGED`.
   *
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * The description of the view.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Current version of the view.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * View content containing all content necessary to render a view except for runtime input data.
   *
   * @public
   */
  Content?: ViewContent | undefined;

  /**
   * The tags associated with the view resource (not specific to view version).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The timestamp of when the view was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Latest timestamp of the `UpdateViewContent` or `CreateViewVersion` operations.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Indicates the checksum value of the latest published view content.
   *
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewResponse {
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
export interface CreateViewVersionRequest {
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
   * The description for the version being published.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * Indicates the checksum value of the latest published view content.
   *
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewVersionResponse {
  /**
   * All view data is contained within the View object.
   *
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/). If a create request is received more than once with same client token, subsequent requests return the previous response without creating a vocabulary again.
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
   * A unique name of the custom vocabulary.
   *
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html)
   *
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with `Phrase`, `IPA`, `SoundsLike`, and `DisplayAs` fields. Separate the fields with TAB characters. The size limit is 50KB. For more information, see [Create a custom vocabulary using a table](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table).
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
}

/**
 * @public
 */
export interface CreateVocabularyResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom vocabulary.
   *
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * The identifier of the custom vocabulary.
   *
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * The current state of the custom vocabulary.
   *
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * Contains logo image configuration for workspace themes.
 *
 * @public
 */
export interface ImagesLogo {
  /**
   * The default logo image displayed in the workspace.
   *
   * @public
   */
  Default?: string | undefined;

  /**
   * The favicon image displayed in the browser tab.
   *
   * @public
   */
  Favicon?: string | undefined;
}

/**
 * Contains image configuration for a workspace theme.
 *
 * @public
 */
export interface WorkspaceThemeImages {
  /**
   * The logo images used in the workspace.
   *
   * @public
   */
  Logo?: ImagesLogo | undefined;
}

/**
 * Contains color configuration for canvas elements in a workspace theme.
 *
 * @public
 */
export interface PaletteCanvas {
  /**
   * The background color for container elements.
   *
   * @public
   */
  ContainerBackground?: string | undefined;

  /**
   * The background color for page elements.
   *
   * @public
   */
  PageBackground?: string | undefined;

  /**
   * The background color for active elements.
   *
   * @public
   */
  ActiveBackground?: string | undefined;
}

/**
 * Contains color configuration for header elements in a workspace theme.
 *
 * @public
 */
export interface PaletteHeader {
  /**
   * The background color of the header.
   *
   * @public
   */
  Background?: string | undefined;

  /**
   * The text color in the header.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The text color when hovering over header elements.
   *
   * @public
   */
  TextHover?: string | undefined;

  /**
   * Whether to invert the colors of action buttons in the header.
   *
   * @public
   */
  InvertActionsColors?: boolean | undefined;
}

/**
 * Contains color configuration for navigation elements in a workspace theme.
 *
 * @public
 */
export interface PaletteNavigation {
  /**
   * The background color of the navigation area.
   *
   * @public
   */
  Background?: string | undefined;

  /**
   * The background color when hovering over navigation text.
   *
   * @public
   */
  TextBackgroundHover?: string | undefined;

  /**
   * The background color for active navigation items.
   *
   * @public
   */
  TextBackgroundActive?: string | undefined;

  /**
   * The text color in the navigation area.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The text color when hovering over navigation items.
   *
   * @public
   */
  TextHover?: string | undefined;

  /**
   * The text color for active navigation items.
   *
   * @public
   */
  TextActive?: string | undefined;

  /**
   * Whether to invert the colors of action buttons in the navigation area.
   *
   * @public
   */
  InvertActionsColors?: boolean | undefined;
}

/**
 * Contains primary color configuration for a workspace theme.
 *
 * @public
 */
export interface PalettePrimary {
  /**
   * The default primary color used throughout the workspace.
   *
   * @public
   */
  Default?: string | undefined;

  /**
   * The primary color used for active states.
   *
   * @public
   */
  Active?: string | undefined;

  /**
   * The text color that contrasts with the primary color for readability.
   *
   * @public
   */
  ContrastText?: string | undefined;
}

/**
 * Contains color palette configuration for different areas of a workspace.
 *
 * @public
 */
export interface WorkspaceThemePalette {
  /**
   * The color configuration for the header area.
   *
   * @public
   */
  Header?: PaletteHeader | undefined;

  /**
   * The color configuration for the navigation area.
   *
   * @public
   */
  Navigation?: PaletteNavigation | undefined;

  /**
   * The color configuration for the canvas area.
   *
   * @public
   */
  Canvas?: PaletteCanvas | undefined;

  /**
   * The primary color configuration used throughout the workspace.
   *
   * @public
   */
  Primary?: PalettePrimary | undefined;
}

/**
 * Contains font family configuration for workspace themes.
 *
 * @public
 */
export interface FontFamily {
  /**
   * The default font family to use in the workspace theme.
   *
   * @public
   */
  Default?: WorkspaceFontFamily | undefined;
}

/**
 * Contains typography configuration for a workspace theme.
 *
 * @public
 */
export interface WorkspaceThemeTypography {
  /**
   * The font family configuration for text in the workspace.
   *
   * @public
   */
  FontFamily?: FontFamily | undefined;
}

/**
 * Contains detailed theme configuration for a workspace, including colors, images, and typography.
 *
 * @public
 */
export interface WorkspaceThemeConfig {
  /**
   * The color palette configuration for the workspace theme.
   *
   * @public
   */
  Palette?: WorkspaceThemePalette | undefined;

  /**
   * The image assets used in the workspace theme.
   *
   * @public
   */
  Images?: WorkspaceThemeImages | undefined;

  /**
   * The typography configuration for the workspace theme.
   *
   * @public
   */
  Typography?: WorkspaceThemeTypography | undefined;
}

/**
 * Contains theme configuration for a workspace, supporting both light and dark modes.
 *
 * @public
 */
export interface WorkspaceTheme {
  /**
   * The theme configuration for light mode.
   *
   * @public
   */
  Light?: WorkspaceThemeConfig | undefined;

  /**
   * The theme configuration for dark mode.
   *
   * @public
   */
  Dark?: WorkspaceThemeConfig | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the workspace. Must be unique within the instance and can contain 1-127 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the workspace. Maximum length is 250 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The theme configuration for the workspace, including colors and styling.
   *
   * @public
   */
  Theme?: WorkspaceTheme | undefined;

  /**
   * The title displayed for the workspace.
   *
   * @public
   */
  Title?: string | undefined;

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
export interface CreateWorkspaceResponse {
  /**
   * The identifier of the workspace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workspace.
   *
   * @public
   */
  WorkspaceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacePageRequest {
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
   * The Amazon Resource Name (ARN) of the view to associate with the page.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The page identifier. Valid system pages include `HOME` and `AGENT_EXPERIENCE`. Custom pages cannot use the `aws:` or `connect:` prefixes.
   *
   * @public
   */
  Page: string | undefined;

  /**
   * The URL-friendly identifier for the page.
   *
   * @public
   */
  Slug?: string | undefined;

  /**
   * A JSON string containing input parameters for the view, validated against the view's input schema.
   *
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
   * A version of the evaluation form. If the version property is not provided, the latest version of the evaluation form is deactivated.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormResponse {
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
   * The version of the deactivated evaluation form resource.
   *
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
   * The unique identifier of the Connect instance.
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
 * Response from DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileResponse {}

/**
 * @public
 */
export interface DeleteContactDataRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact. You can delete PII only from a contact that has been disconnected (is in a terminated state).
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The categories of PII to redact from the contact. Specify one or more of the following values:
   *
   * - `CUSTOMER_ENDPOINT` – The customer's contact endpoint.
   * - `ADDITIONAL_EMAIL_RECIPIENTS` – Additional recipients on an email contact (email channel only).
   * - `EMAIL_SUBJECT` – The subject line of an email contact (email channel only).
   *
   * @public
   */
  ContactFields: ContactField[] | undefined;
}

/**
 * @public
 */
export interface DeleteContactDataResponse {}

/**
 * @public
 */
export interface DeleteContactEvaluationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the contact evaluation.
   *
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowRequest {
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
 * @public
 */
export interface DeleteContactFlowResponse {}

/**
 * @public
 */
export interface DeleteContactFlowAliasRequest {
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

  /**
   * The identifier of the alias.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowAliasResponse {}

/**
 * @public
 */
export interface DeleteContactFlowModuleRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowModuleResponse {}

/**
 * @public
 */
export interface DeleteContactFlowModuleAliasRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * The identifier of the alias.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowModuleAliasResponse {}

/**
 * @public
 */
export interface DeleteContactFlowModuleVersionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * The version of the flow module to delete.
   *
   * @public
   */
  ContactFlowModuleVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowModuleVersionResponse {}

/**
 * @public
 */
export interface DeleteContactFlowVersionRequest {
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

  /**
   * The identifier of the flow version.
   *
   * @public
   */
  ContactFlowVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowVersionResponse {}

/**
 * @public
 */
export interface DeleteDataTableRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table to delete. Must also accept the table ARN. Fails with an error if the version is provided and is not $LATEST.
   *
   * @public
   */
  DataTableId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataTableResponse {}

/**
 * @public
 */
export interface DeleteDataTableAttributeRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * The name of the attribute to delete.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataTableAttributeResponse {
  /**
   * The updated lock version of the data table.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface DeleteEmailAddressRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the email address.
   *
   * @public
   */
  EmailAddressId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEmailAddressResponse {}

/**
 * @public
 */
export interface DeleteEvaluationFormRequest {
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
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteExtractionDefinitionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the extraction definition to delete.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExtractionDefinitionResponse {}

/**
 * @public
 */
export interface DeleteHoursOfOperationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

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
export interface DeleteHoursOfOperationOverrideRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The identifier for the hours of operation override.
   *
   * @public
   */
  HoursOfOperationOverrideId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
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
}

/**
 * @public
 */
export interface DeleteIntegrationAssociationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the integration association.
   *
   * @public
   */
  IntegrationAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the metric to delete.
   *
   * @public
   */
  MetricId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricResponse {}

/**
 * @public
 */
export interface DeleteNotificationRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the notification to delete.
   *
   * @public
   */
  NotificationId: string | undefined;
}

/**
 * The response from deleting a notification.
 *
 * @public
 */
export interface DeleteNotificationResponse {}

/**
 * @public
 */
export interface DeletePredefinedAttributeRequest {
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
}

/**
 * @public
 */
export interface DeletePromptRequest {
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
}

/**
 * @public
 */
export interface DeletePushNotificationRegistrationRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the registration.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The identifier of the contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DeletePushNotificationRegistrationResponse {}

/**
 * @public
 */
export interface DeleteQueueRequest {
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
}

/**
 * @public
 */
export interface DeleteQuickConnectRequest {
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
}

/**
 * @public
 */
export interface DeleteRoutingProfileRequest {
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
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the rule.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the security profle.
   *
   * @public
   */
  SecurityProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the session to delete.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {}

/**
 * @public
 */
export interface DeleteTaskTemplateRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the task template.
   *
   * @public
   */
  TaskTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskTemplateResponse {}

/**
 * @public
 */
export interface DeleteTestCaseRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case to delete.
   *
   * @public
   */
  TestCaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestCaseResponse {}

/**
 * @public
 */
export interface DeleteTrafficDistributionGroupRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group.
   *
   * @public
   */
  TrafficDistributionGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficDistributionGroupResponse {}

/**
 * @public
 */
export interface DeleteUseCaseRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the integration association.
   *
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * The identifier for the use case.
   *
   * @public
   */
  UseCaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserHierarchyGroupRequest {
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
 * @public
 */
export interface DeleteViewRequest {
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
}

/**
 * @public
 */
export interface DeleteViewResponse {}

/**
 * @public
 */
export interface DeleteViewVersionRequest {
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
   * The version number of the view.
   *
   * @public
   */
  ViewVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteViewVersionResponse {}

/**
 * @public
 */
export interface DeleteVocabularyRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the custom vocabulary.
   *
   * @public
   */
  VocabularyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom vocabulary.
   *
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * The identifier of the custom vocabulary.
   *
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * The current state of the custom vocabulary.
   *
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
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
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {}

/**
 * @public
 */
export interface DeleteWorkspaceMediaRequest {
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
   * The type of media to delete. Valid values are: `IMAGE_LOGO_FAVICON` and `IMAGE_LOGO_HORIZONTAL`.
   *
   * @public
   */
  MediaType: MediaType | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceMediaResponse {}

/**
 * @public
 */
export interface DeleteWorkspacePageRequest {
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
   * The page identifier.
   *
   * @public
   */
  Page: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspacePageResponse {}

/**
 * @public
 */
export interface DescribeAgentStatusRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the agent status.
   *
   * @public
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusResponse {
  /**
   * The agent status.
   *
   * @public
   */
  AgentStatus?: AgentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAttachedFilesConfigurationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The scope of the attachment. Valid values are `EMAIL`, `CHAT`, `CASE`, and `TASK`.
   *
   * @public
   */
  AttachmentScope: AttachmentScope | undefined;
}

/**
 * The configuration for allowed file extensions.
 *
 * @public
 */
export interface ExtensionConfiguration {
  /**
   * The list of allowed file extensions.
   *
   * @public
   */
  AllowedExtensions: AllowedExtension[] | undefined;
}

/**
 * The configuration for attached files for a specific attachment scope.
 *
 * @public
 */
export interface AttachedFilesConfiguration {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The scope of the attachment. Valid values are `EMAIL`, `CHAT`, `CASE`, and `TASK`.
   *
   * @public
   */
  AttachmentScope: AttachmentScope | undefined;

  /**
   * The maximum size limit for attached files in bytes.
   *
   * @public
   */
  MaximumSizeLimitInBytes?: number | undefined;

  /**
   * The configuration for allowed file extensions.
   *
   * @public
   */
  ExtensionConfiguration?: ExtensionConfiguration | undefined;

  /**
   * The timestamp when the configuration was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAttachedFilesConfigurationResponse {
  /**
   * Information about the attached files configuration.
   *
   * @public
   */
  AttachedFilesConfiguration: AttachedFilesConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfileRequest {
  /**
   * A unique identifier for the authentication profile.
   *
   * @public
   */
  AuthenticationProfileId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * This API is in preview release for Connect Customer and is subject to change. To request access to this API, contact Amazon Web Services Support.
 *
 * Information about an authentication profile. An authentication profile is a resource that stores the authentication settings for users in your contact center. You use authentication profiles to set up IP address range restrictions and session timeouts. For more information, see [Set IP address restrictions or session timeouts](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html).
 *
 * @public
 */
export interface AuthenticationProfile {
  /**
   * A unique identifier for the authentication profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the authentication profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name for the authentication profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description for the authentication profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of IP address range strings that are allowed to access the Connect Customer instance. For more information about how to configure IP addresses, see [Configure IP address based access control](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  AllowedIps?: string[] | undefined;

  /**
   * A list of IP address range strings that are blocked from accessing the Connect Customer instance. For more information about how to configure IP addresses, see [Configure IP address based access control](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  BlockedIps?: string[] | undefined;

  /**
   * Shows whether the authentication profile is the default authentication profile for the Connect Customer instance. The default authentication profile applies to all agents in an Connect Customer instance, unless overridden by another authentication profile.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The timestamp when the authentication profile was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The timestamp when the authentication profile was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where the authentication profile was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The short lived session duration configuration for users logged in to Connect Customer, in minutes. This value determines the maximum possible time before an agent is authenticated. For more information, see [Configure the session duration](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts) in the *Connect Customer Administrator Guide*.
   *
   * @deprecated (since 10/31/2025) PeriodicSessionDuration is deprecated. Use SessionInactivityDuration instead.
   * @public
   */
  PeriodicSessionDuration?: number | undefined;

  /**
   * The long lived session duration for users logged in to Connect Customer, in minutes. After this time period, users must log in again. For more information, see [Configure the session duration](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * The period, in minutes, before an agent is automatically signed out of the contact center when they go inactive.
   *
   * @public
   */
  SessionInactivityDuration?: number | undefined;

  /**
   * Determines if automatic logout on user inactivity is enabled.
   *
   * @public
   */
  SessionInactivityHandlingEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfileResponse {
  /**
   * The authentication profile object being described.
   *
   * @public
   */
  AuthenticationProfile?: AuthenticationProfile | undefined;
}

/**
 * @public
 */
export interface DescribeContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * Information about a participant's interactions in a contact.
 *
 * @public
 */
export interface ParticipantMetrics {
  /**
   * The Participant's ID.
   *
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * Information about the conversation participant. Following are the participant types: [Agent, Customer, Supervisor].
   *
   * @public
   */
  ParticipantType?: ParticipantType | undefined;

  /**
   * A boolean flag indicating whether the chat conversation was abandoned by a Participant.
   *
   * @public
   */
  ConversationAbandon?: boolean | undefined;

  /**
   * Number of chat messages sent by Participant.
   *
   * @public
   */
  MessagesSent?: number | undefined;

  /**
   * Number of chat messages sent by Participant.
   *
   * @public
   */
  NumResponses?: number | undefined;

  /**
   * Number of chat characters sent by Participant.
   *
   * @public
   */
  MessageLengthInChars?: number | undefined;

  /**
   * Total chat response time by Participant.
   *
   * @public
   */
  TotalResponseTimeInMillis?: number | undefined;

  /**
   * Maximum chat response time by Participant.
   *
   * @public
   */
  MaxResponseTimeInMillis?: number | undefined;

  /**
   * Timestamp of last chat message by Participant.
   *
   * @public
   */
  LastMessageTimestamp?: Date | undefined;
}

/**
 * Information about the overall participant interactions at the contact level.
 *
 * @public
 */
export interface ChatContactMetrics {
  /**
   * A boolean flag indicating whether multiparty chat or supervisor barge were enabled on this contact.
   *
   * @public
   */
  MultiParty?: boolean | undefined;

  /**
   * The number of chat messages on the contact.
   *
   * @public
   */
  TotalMessages?: number | undefined;

  /**
   * The total number of bot and automated messages on a chat contact.
   *
   * @public
   */
  TotalBotMessages?: number | undefined;

  /**
   * The total number of characters from bot and automated messages on a chat contact.
   *
   * @public
   */
  TotalBotMessageLengthInChars?: number | undefined;

  /**
   * The time it took for a contact to end after the last customer message.
   *
   * @public
   */
  ConversationCloseTimeInMillis?: number | undefined;

  /**
   * The number of conversation turns in a chat contact, which represents the back-and-forth exchanges between customer and other participants.
   *
   * @public
   */
  ConversationTurnCount?: number | undefined;

  /**
   * The agent first response timestamp for a chat contact.
   *
   * @public
   */
  AgentFirstResponseTimestamp?: Date | undefined;

  /**
   * The time for an agent to respond after obtaining a chat contact.
   *
   * @public
   */
  AgentFirstResponseTimeInMillis?: number | undefined;
}

/**
 * Information about how agent, bot, and customer interact in a chat contact.
 *
 * @public
 */
export interface ChatMetrics {
  /**
   * Information about the overall participant interactions at the contact level.
   *
   * @public
   */
  ChatContactMetrics?: ChatContactMetrics | undefined;

  /**
   * Information about agent interactions in a contact.
   *
   * @public
   */
  AgentMetrics?: ParticipantMetrics | undefined;

  /**
   * Information about customer interactions in a contact.
   *
   * @public
   */
  CustomerMetrics?: ParticipantMetrics | undefined;
}

/**
 * A map of string key/value pairs that contain user-defined attributes which are lightly typed within the contact. This object is used only for task contacts.
 *
 * @public
 */
export interface ContactDetails {
  /**
   * The name of the contact details.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Teh description of the contact details.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Information about the contact evaluations where the key is the FormId, which is a unique identifier for the form.
 *
 * @public
 */
export interface ContactEvaluation {
  /**
   * The `FormId` of the contact evaluation.
   *
   * @public
   */
  FormId?: string | undefined;

  /**
   * The Amazon Resource Name for the evaluation form. It is always present.
   *
   * @public
   */
  EvaluationArn?: string | undefined;

  /**
   * The status of the evaluation.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The date and time when the evaluation was started, in UTC time.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The date and time when the evaluation was submitted, in UTC time.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The date and time when the evaluation was deleted, in UTC time.
   *
   * @public
   */
  DeleteTimestamp?: Date | undefined;

  /**
   * The path where evaluation was exported.
   *
   * @public
   */
  ExportLocation?: string | undefined;
}

/**
 * Information about the Customer on the contact.
 *
 * @public
 */
export interface Customer {
  /**
   * Information regarding Customer’s device.
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
}

/**
 * Information about the endpoint.
 *
 * @public
 */
export interface EndpointInfo {
  /**
   * Type of endpoint.
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

  /**
   * Display name of the endpoint.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * Information about customer’s voice activity.
 *
 * @public
 */
export interface CustomerVoiceActivity {
  /**
   * Timestamp that measures the beginning of the customer greeting from an outbound voice call.
   *
   * @public
   */
  GreetingStartTimestamp?: Date | undefined;

  /**
   * Timestamp that measures the end of the customer greeting from an outbound voice call.
   *
   * @public
   */
  GreetingEndTimestamp?: Date | undefined;
}

/**
 * Information about the call disconnect experience.
 *
 * @public
 */
export interface DisconnectDetails {
  /**
   * Indicates the potential disconnection issues for a call. This field is not populated if the service does not detect potential issues.
   *
   * @public
   */
  PotentialDisconnectIssue?: string | undefined;
}

/**
 * Information about the global resiliency configuration for the contact, including traffic distribution details.
 *
 * @public
 */
export interface GlobalResiliencyMetadata {
  /**
   * The current AWS region in which the contact is active. This indicates where the contact is being processed in real-time.
   *
   * @public
   */
  ActiveRegion?: string | undefined;

  /**
   * The AWS region where the contact was originally created and initiated. This may differ from the ActiveRegion if the contact has been transferred across regions.
   *
   * @public
   */
  OriginRegion?: string | undefined;

  /**
   * The identifier of the traffic distribution group.
   *
   * @public
   */
  TrafficDistributionGroupId?: string | undefined;
}

/**
 * Contact data associated with quick connect operations.
 *
 * @public
 */
export interface QuickConnectContactData {
  /**
   * The contact ID for quick connect contact data.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * Timestamp when the quick connect contact was initiated.
   *
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * The quick connect ID.
   *
   * @public
   */
  QuickConnectId?: string | undefined;

  /**
   * The name of the quick connect.
   *
   * @public
   */
  QuickConnectName?: string | undefined;

  /**
   * The type of the quick connect.
   *
   * @public
   */
  QuickConnectType?: QuickConnectType | undefined;
}

/**
 * Metadata information for next contact.
 *
 * @public
 */
export type NextContactMetadata =
  | NextContactMetadata.QuickConnectContactDataMember
  | NextContactMetadata.$UnknownMember;

/**
 * @public
 */
export namespace NextContactMetadata {
  /**
   * Quick connect contact data for the next contact metadata.
   *
   * @public
   */
  export interface QuickConnectContactDataMember {
    QuickConnectContactData: QuickConnectContactData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    QuickConnectContactData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    QuickConnectContactData: (value: QuickConnectContactData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Entry representing the next contact in a sequence.
 *
 * @public
 */
export interface NextContactEntry {
  /**
   * The type of the next contact entry.
   *
   * @public
   */
  Type?: NextContactType | undefined;

  /**
   * Metadata for the next contact entry.
   *
   * @public
   */
  NextContactMetadata?: NextContactMetadata | undefined;
}

/**
 * Information about the quality of the Customer's media connection
 *
 * @public
 */
export interface CustomerQualityMetrics {
  /**
   * Information about the audio quality of the Customer
   *
   * @public
   */
  Audio?: AudioQualityMetricsInfo | undefined;
}

/**
 * Information about the quality of the participant's media connection.
 *
 * @public
 */
export interface QualityMetrics {
  /**
   * Information about the quality of Agent media connection.
   *
   * @public
   */
  Agent?: AgentQualityMetrics | undefined;

  /**
   * Information about the quality of Customer media connection.
   *
   * @public
   */
  Customer?: CustomerQualityMetrics | undefined;
}

/**
 * If this contact was queued, this contains information about the queue.
 *
 * @public
 */
export interface QueueInfo {
  /**
   * The unique identifier for the queue.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The timestamp when the contact was added to the queue.
   *
   * @public
   */
  EnqueueTimestamp?: Date | undefined;
}

/**
 * Information about a voice recording, chat transcript, or screen recording.
 *
 * @public
 */
export interface RecordingInfo {
  /**
   * Where the recording/transcript is stored.
   *
   * @public
   */
  StorageType?: StorageType | undefined;

  /**
   * The location, in Amazon S3, for the recording/transcript.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * Information about the media stream used during the conversation.
   *
   * @public
   */
  MediaStreamType?: MediaStreamType | undefined;

  /**
   * Information about the conversation participant, whether they are an agent or contact. The participant types are as follows:
   *
   * - All
   * - Manager
   * - Agent
   * - Customer
   * - Thirdparty
   * - Supervisor
   *
   * @public
   */
  ParticipantType?: ParticipantType | undefined;

  /**
   * The number that identifies the Kinesis Video Streams fragment where the customer audio stream started.
   *
   * @public
   */
  FragmentStartNumber?: string | undefined;

  /**
   * The number that identifies the Kinesis Video Streams fragment where the customer audio stream stopped.
   *
   * @public
   */
  FragmentStopNumber?: string | undefined;

  /**
   * When the conversation of the last leg of the recording started in UTC time.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * When the conversation of the last leg of recording stopped in UTC time.
   *
   * @public
   */
  StopTimestamp?: Date | undefined;

  /**
   * The status of the recording/transcript.
   *
   * @public
   */
  Status?: RecordingStatus | undefined;

  /**
   * If the recording/transcript was deleted, this is the reason entered for the deletion.
   *
   * @public
   */
  DeletionReason?: string | undefined;

  /**
   * The location, in Amazon S3, for the unprocessed transcript if any media processing was performed.
   *
   * @public
   */
  UnprocessedTranscriptLocation?: string | undefined;
}

/**
 * An object to specify the expiration of a routing step.
 *
 * @public
 */
export interface Expiry {
  /**
   * The number of seconds to wait before expiring the routing step.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * The timestamp indicating when the routing step expires.
   *
   * @public
   */
  ExpiryTimestamp?: Date | undefined;
}

/**
 * An object to define AgentsCriteria.
 *
 * @public
 */
export interface MatchCriteria {
  /**
   * An object to define agentIds.
   *
   * @public
   */
  AgentsCriteria?: AgentsCriteria | undefined;
}

/**
 * An Object to define the minimum and maximum proficiency levels.
 *
 * @public
 */
export interface Range {
  /**
   * The minimum proficiency level of the range.
   *
   * @public
   */
  MinProficiencyLevel?: number | undefined;

  /**
   * The maximum proficiency level of the range.
   *
   * @public
   */
  MaxProficiencyLevel?: number | undefined;
}

/**
 * An object to specify the predefined attribute condition.
 *
 * @public
 */
export interface AttributeCondition {
  /**
   * The name of predefined attribute.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of predefined attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The proficiency level of the condition.
   *
   * @public
   */
  ProficiencyLevel?: number | undefined;

  /**
   * An Object to define the minimum and maximum proficiency levels.
   *
   * @public
   */
  Range?: Range | undefined;

  /**
   * An object to define `AgentsCriteria`.
   *
   * @public
   */
  MatchCriteria?: MatchCriteria | undefined;

  /**
   * The operator of the condition.
   *
   * @public
   */
  ComparisonOperator?: string | undefined;
}

/**
 * Information about the task template used to create this contact.
 *
 * @public
 */
export interface TaskTemplateInfoV2 {
  /**
   * The Amazon Resource Name (ARN) of the task template used to create this contact.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the task template used to create this contact.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information about Connect Customer Wisdom.
 *
 * @public
 */
export interface WisdomInfo {
  /**
   * The Amazon Resource Name (ARN) of the Wisdom session.
   *
   * @public
   */
  SessionArn?: string | undefined;

  /**
   * The array of AI agents involved in the contact.
   *
   * @public
   */
  AiAgents?: AiAgentInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeContactEvaluationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the contact evaluation.
   *
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * The milliseconds offset for transcript reference in suggested answer.
 *
 * @public
 */
export interface EvaluationSuggestedAnswerTranscriptMillisecondOffsets {
  /**
   * Offset in milliseconds from the beginning of the transcript.
   *
   * @public
   */
  BeginOffsetMillis: number | undefined;
}

/**
 * Information about the point of interest in transcript provided to evaluation.
 *
 * @public
 */
export interface EvaluationTranscriptPointOfInterest {
  /**
   * Offset in milliseconds from the beginning of transcript.
   *
   * @public
   */
  MillisecondOffsets?: EvaluationSuggestedAnswerTranscriptMillisecondOffsets | undefined;

  /**
   * Segment of transcript.
   *
   * @public
   */
  TranscriptSegment?: string | undefined;
}

/**
 * The Contact Lens category used by evaluation automation.
 *
 * @public
 */
export interface EvaluationAutomationRuleCategory {
  /**
   * A category label.
   *
   * @public
   */
  Category: string | undefined;

  /**
   * An automation condition for a Contact Lens category.
   *
   * @public
   */
  Condition: QuestionRuleCategoryAutomationCondition | undefined;

  /**
   * A point of interest in a contact transcript that indicates match of condition.
   *
   * @public
   */
  PointsOfInterest?: EvaluationTranscriptPointOfInterest[] | undefined;
}

/**
 * Analysis details providing explanation for Contact Lens automation decision.
 *
 * @public
 */
export interface EvaluationContactLensAnswerAnalysisDetails {
  /**
   * A list of match rule categories.
   *
   * @public
   */
  MatchedRuleCategories?: EvaluationAutomationRuleCategory[] | undefined;
}

/**
 * An analysis for a generative AI answer to the question.
 *
 * @public
 */
export interface EvaluationGenAIAnswerAnalysisDetails {
  /**
   * Generative AI automation answer justification.
   *
   * @public
   */
  Justification?: string | undefined;

  /**
   * Generative AI automation answer analysis points of interest.
   *
   * @public
   */
  PointsOfInterest?: EvaluationTranscriptPointOfInterest[] | undefined;
}

/**
 * Detailed analysis results of the automated answer to the evaluation question.
 *
 * @public
 */
export type EvaluationQuestionAnswerAnalysisDetails =
  | EvaluationQuestionAnswerAnalysisDetails.ContactLensMember
  | EvaluationQuestionAnswerAnalysisDetails.GenAIMember
  | EvaluationQuestionAnswerAnalysisDetails.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationQuestionAnswerAnalysisDetails {
  /**
   * Analysis results from the generative AI automation for the question.
   *
   * @public
   */
  export interface GenAIMember {
    GenAI: EvaluationGenAIAnswerAnalysisDetails;
    ContactLens?: never;
    $unknown?: never;
  }

  /**
   * Analysis results from the Contact Lens automation for the question.
   *
   * @public
   */
  export interface ContactLensMember {
    GenAI?: never;
    ContactLens: EvaluationContactLensAnswerAnalysisDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    GenAI?: never;
    ContactLens?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    GenAI: (value: EvaluationGenAIAnswerAnalysisDetails) => T;
    ContactLens: (value: EvaluationContactLensAnswerAnalysisDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details of the input data used for automated question processing.
 *
 * @public
 */
export interface EvaluationQuestionInputDetails {
  /**
   * Transcript type.
   *
   * @public
   */
  TranscriptType?: EvaluationTranscriptType | undefined;
}

/**
 * Information about answer data for a contact evaluation. Answer data must be either string, numeric, or not applicable.
 *
 * @public
 */
export type EvaluationAnswerData =
  | EvaluationAnswerData.DateTimeValueMember
  | EvaluationAnswerData.NotApplicableMember
  | EvaluationAnswerData.NumericValueMember
  | EvaluationAnswerData.StringValueMember
  | EvaluationAnswerData.StringValuesMember
  | EvaluationAnswerData.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationAnswerData {
  /**
   * The string value for an answer in a contact evaluation.
   *
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    NumericValue?: never;
    StringValues?: never;
    DateTimeValue?: never;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * The numeric value for an answer in a contact evaluation.
   *
   * @public
   */
  export interface NumericValueMember {
    StringValue?: never;
    NumericValue: number;
    StringValues?: never;
    DateTimeValue?: never;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * String values provided as answers to evaluation questions.
   *
   * @public
   */
  export interface StringValuesMember {
    StringValue?: never;
    NumericValue?: never;
    StringValues: string[];
    DateTimeValue?: never;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * Date and time value provided as an answer to an evaluation question.
   *
   * @public
   */
  export interface DateTimeValueMember {
    StringValue?: never;
    NumericValue?: never;
    StringValues?: never;
    DateTimeValue: string;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * The flag to mark the question as not applicable.
   *
   * @public
   */
  export interface NotApplicableMember {
    StringValue?: never;
    NumericValue?: never;
    StringValues?: never;
    DateTimeValue?: never;
    NotApplicable: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    NumericValue?: never;
    StringValues?: never;
    DateTimeValue?: never;
    NotApplicable?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumericValue: (value: number) => T;
    StringValues: (value: string[]) => T;
    DateTimeValue: (value: string) => T;
    NotApplicable: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The information about the suggested answer for the question.
 *
 * @public
 */
export interface EvaluationSuggestedAnswer {
  /**
   * Information about answer data for a contact evaluation. Answer data must be either string, numeric, or not applicable.
   *
   * @public
   */
  Value?: EvaluationAnswerData | undefined;

  /**
   * The status of the suggested answer. D
   *
   * @public
   */
  Status: EvaluationSuggestedAnswerStatus | undefined;

  /**
   * Details about the input used to question automation.
   *
   * @public
   */
  Input?: EvaluationQuestionInputDetails | undefined;

  /**
   * Type of analysis used to provide suggested answer.
   *
   * @public
   */
  AnalysisType: EvaluationQuestionAnswerAnalysisType | undefined;

  /**
   * Detailed analysis results.
   *
   * @public
   */
  AnalysisDetails?: EvaluationQuestionAnswerAnalysisDetails | undefined;
}

/**
 * Information about output answers for a contact evaluation.
 *
 * @public
 */
export interface EvaluationAnswerOutput {
  /**
   * The value for an answer in a contact evaluation.
   *
   * @public
   */
  Value?: EvaluationAnswerData | undefined;

  /**
   * The system suggested value for an answer in a contact evaluation.
   *
   * @public
   */
  SystemSuggestedValue?: EvaluationAnswerData | undefined;

  /**
   * Automation suggested answers for the questions.
   *
   * @public
   */
  SuggestedAnswers?: EvaluationSuggestedAnswer[] | undefined;
}

/**
 * Information about the evaluation acknowledgement.
 *
 * @public
 */
export interface EvaluationAcknowledgement {
  /**
   * When the agent acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgedTime: Date | undefined;

  /**
   * The agent who acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgedBy: string | undefined;

  /**
   * A comment from the agent when they confirmed they acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgerComment?: string | undefined;
}

/**
 * Details about automated evaluations.
 *
 * @public
 */
export interface AutoEvaluationDetails {
  /**
   * Whether automated evaluation is enabled.
   *
   * @public
   */
  AutoEvaluationEnabled: boolean | undefined;

  /**
   * The status of the contact auto-evaluation.
   *
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;
}

/**
 * Information about a contact participant in the evaluation.
 *
 * @public
 */
export interface EvaluationContactParticipant {
  /**
   * The role of the contact participant.
   *
   * @public
   */
  ContactParticipantRole?: ContactParticipantRole | undefined;

  /**
   * The identifier for the contact participant.
   *
   * @public
   */
  ContactParticipantId?: string | undefined;
}

/**
 * A comment provided when requesting an evaluation review.
 *
 * @public
 */
export interface EvaluationReviewRequestComment {
  /**
   * The text content of the review request comment.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The timestamp when the evaluation review request comment was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The user who created the evaluation review request comment.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * Metadata information about an evaluation review.
 *
 * @public
 */
export interface EvaluationReviewMetadata {
  /**
   * The unique identifier for the evaluation review.
   *
   * @public
   */
  ReviewId?: string | undefined;

  /**
   * The timestamp when the evaluation review was requested.
   *
   * @public
   */
  RequestedTime?: Date | undefined;

  /**
   * The user who requested the evaluation review.
   *
   * @public
   */
  RequestedBy?: string | undefined;

  /**
   * The timestamp when the evaluation review was created.
   *
   * @deprecated (since 02/17/2026) CreatedTime is deprecated.
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The user who created the evaluation review.
   *
   * @deprecated (since 02/17/2026) CreatedBy is deprecated.
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * Comments provided when requesting the evaluation review.
   *
   * @public
   */
  ReviewRequestComments: EvaluationReviewRequestComment[] | undefined;
}

/**
 * Information about scores of a contact evaluation item (section or question).
 *
 * @public
 */
export interface EvaluationScore {
  /**
   * The score percentage for an item in a contact evaluation.
   *
   * @public
   */
  Percentage?: number | undefined;

  /**
   * The flag to mark the item as not applicable for scoring.
   *
   * @public
   */
  NotApplicable?: boolean | undefined;

  /**
   * The flag that marks the item as automatic fail. If the item or a child item gets an automatic fail answer, this flag will be true.
   *
   * @public
   */
  AutomaticFail?: boolean | undefined;

  /**
   * Weight applied to this evaluation score.
   *
   * @public
   */
  AppliedWeight?: number | undefined;

  /**
   * The points earned for the item.
   *
   * @public
   */
  EarnedPoints?: number | undefined;

  /**
   * The maximum base points possible for the item.
   *
   * @public
   */
  MaxBasePoint?: number | undefined;

  /**
   * The performance category for the score.
   *
   * @public
   */
  PerformanceCategory?: PerformanceCategoryName | undefined;
}

/**
 * Metadata information about a contact evaluation.
 *
 * @public
 */
export interface EvaluationMetadata {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the evaluation.
   *
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * The identifier of the agent who performed the contact.
   *
   * @public
   */
  ContactAgentId?: string | undefined;

  /**
   * The calibration session ID that this evaluation belongs to.
   *
   * @public
   */
  CalibrationSessionId?: string | undefined;

  /**
   * The overall score of the contact evaluation.
   *
   * @public
   */
  Score?: EvaluationScore | undefined;

  /**
   * Information related to automated evaluation.
   *
   * @public
   */
  AutoEvaluation?: AutoEvaluationDetails | undefined;

  /**
   * Information related to evaluation acknowledgement.
   *
   * @public
   */
  Acknowledgement?: EvaluationAcknowledgement | undefined;

  /**
   * Information about reviews of this evaluation.
   *
   * @public
   */
  Review?: EvaluationReviewMetadata | undefined;

  /**
   * Information about a contact participant in this evaluation.
   *
   * @public
   */
  ContactParticipant?: EvaluationContactParticipant | undefined;

  /**
   * Identifier of the sampling job.
   *
   * @public
   */
  SamplingJobId?: string | undefined;
}

/**
 * Information about notes for a contact evaluation.
 *
 * @public
 */
export interface EvaluationNote {
  /**
   * The note for an item (section or question) in a contact evaluation.
   *
   * > **Note:** Even though a note in an evaluation can have up to 3072 chars, there is also a limit on the total number of chars for all the notes in the evaluation combined. Assuming there are N questions in the evaluation being submitted, then the max char limit for all notes combined is N x 1024.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about a contact evaluation.
 *
 * @public
 */
export interface Evaluation {
  /**
   * A unique identifier for the contact evaluation.
   *
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the contact evaluation resource.
   *
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * Metadata about the contact evaluation.
   *
   * @public
   */
  Metadata: EvaluationMetadata | undefined;

  /**
   * A map of question identifiers to answer value.
   *
   * @public
   */
  Answers: Record<string, EvaluationAnswerOutput> | undefined;

  /**
   * A map of question identifiers to note value.
   *
   * @public
   */
  Notes: Record<string, EvaluationNote> | undefined;

  /**
   * The status of the contact evaluation.
   *
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * A map of item (section or question) identifiers to score value.
   *
   * @public
   */
  Scores?: Record<string, EvaluationScore> | undefined;

  /**
   * The timestamp for when the evaluation was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The timestamp for when the evaluation was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Type of the evaluation.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

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
export interface DescribeContactFlowRequest {
  /**
   * The identifier of the Connect Customer instance.
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
 * Contains information about a flow.
 *
 * @public
 */
export interface ContactFlow {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the flow. For descriptions of the available types, see [Choose a flow type](https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Type?: ContactFlowType | undefined;

  /**
   * The type of flow.
   *
   * @public
   */
  State?: ContactFlowState | undefined;

  /**
   * The status of the flow.
   *
   * @public
   */
  Status?: ContactFlowStatus | undefined;

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
  Content?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
  Version?: number | undefined;

  /**
   * The description of the flow version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The time at which the flow was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The region in which the flow was last modified
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowResponse {
  /**
   * Information about the flow.
   *
   * @public
   */
  ContactFlow?: ContactFlow | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowAliasRequest {
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

  /**
   * The identifier of the alias.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * Contains information about a flow alias.
 *
 * @public
 */
export interface ContactFlowAliasInfo {
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
   * The identifier of the alias.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * The version of the flow.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowAliasResponse {
  /**
   * Information about the flow alias.
   *
   * @public
   */
  ContactFlowAlias?: ContactFlowAliasInfo | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;
}

/**
 * Contains information about a flow module.
 *
 * @public
 */
export interface ContactFlowModule {
  /**
   * The Amazon Resource Name (ARN).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the flow module.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The JSON string that represents the content of the flow. For an example, see [Example flow in Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html).
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The description of the flow module.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of flow module.
   *
   * @public
   */
  State?: ContactFlowModuleState | undefined;

  /**
   * The status of the flow module.
   *
   * @public
   */
  Status?: ContactFlowModuleStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Hash of the module content for integrity verification.
   *
   * @public
   */
  FlowModuleContentSha256?: string | undefined;

  /**
   * The version of the flow module.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * Description of the version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The configuration settings for the flow module.
   *
   * @public
   */
  Settings?: string | undefined;

  /**
   * The external invocation configuration for the flow module
   *
   * @public
   */
  ExternalInvocationConfiguration?: ExternalInvocationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleResponse {
  /**
   * Information about the flow module.
   *
   * @public
   */
  ContactFlowModule?: ContactFlowModule | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleAliasRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId: string | undefined;

  /**
   * The identifier of the alias.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * Contains information about an alias.
 *
 * @public
 */
export interface ContactFlowModuleAliasInfo {
  /**
   * The identifier of the flow module.
   *
   * @public
   */
  ContactFlowModuleId?: string | undefined;

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
  AliasId?: string | undefined;

  /**
   * The version of the flow module.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Web Services Region where this resource was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The timestamp when this resource was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleAliasResponse {
  /**
   * Information about the flow module alias.
   *
   * @public
   */
  ContactFlowModuleAlias?: ContactFlowModuleAliasInfo | undefined;
}

/**
 * @public
 */
export interface DescribeDataTableRequest {
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
}

/**
 * Represents a data table in Amazon Connect. A data table is a JSON-like data structure where attributes and values are dynamically set by customers. Customers can reference table values within call flows, applications, views, and workspaces to pinpoint dynamic configuration that changes their contact center's behavior in a predetermined and safe way.
 *
 * @public
 */
export interface DataTable {
  /**
   * The human-readable name of the data table. Must be unique within the instance and conform to Connect naming standards.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier for the data table. Does not include version aliases.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the data table. Does not include version aliases.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The IANA timezone identifier used when resolving time based dynamic values. Required even if no time slices are specified.
   *
   * @public
   */
  TimeZone: string | undefined;

  /**
   * An optional description of the data table's purpose and contents.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data level that concurrent value edits are locked on. One of DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE, and NONE. Determines how concurrent edits are handled when multiple users attempt to modify values simultaneously.
   *
   * @public
   */
  ValueLockLevel?: DataTableLockLevel | undefined;

  /**
   * The lock version information used for optimistic locking and table versioning. Changes with each update to prevent concurrent modification conflicts.
   *
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * A unique identifier and alias for customer managed versions (not $LATEST or $SAVED).
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * A description of the customer managed version.
   *
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * The current status of the data table. One of PUBLISHED or SAVED.
   *
   * @public
   */
  Status?: DataTableStatus | undefined;

  /**
   * The timestamp when the data table was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The timestamp when the data table or any of its properties were last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Web Services Region where the data table was last modified, used for region replication.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * Key-value pairs for attribute based access control (TBAC or ABAC) and organization.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeDataTableResponse {
  /**
   * The complete data table information including metadata, configuration, and versioning details.
   *
   * @public
   */
  DataTable: DataTable | undefined;
}

/**
 * @public
 */
export interface DescribeDataTableAttributeRequest {
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
   * The name of the attribute to retrieve detailed information for.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * Represents an attribute (column) in a data table. Attributes define the schema and validation rules for values that can be stored in the table. They specify the data type, constraints, and whether the attribute is used as a primary key for record identification.
 *
 * @public
 */
export interface DataTableAttribute {
  /**
   * The unique identifier for the attribute within the data table.
   *
   * @public
   */
  AttributeId?: string | undefined;

  /**
   * The human-readable name of the attribute. Must be unique within the data table and conform to Connect naming standards.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of value allowed for this attribute. Must be one of TEXT, TEXT_LIST, NUMBER, NUMBER_LIST, or BOOLEAN. Determines how values are validated and processed.
   *
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * An optional description explaining the purpose and usage of this attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the data table that contains this attribute.
   *
   * @public
   */
  DataTableId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data table that contains this attribute.
   *
   * @public
   */
  DataTableArn?: string | undefined;

  /**
   * Boolean indicating whether this attribute is used as a primary key for record identification. Primary attributes must have unique value combinations and cannot contain expressions.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The version identifier for this attribute, used for versioning and change tracking.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The lock version for this attribute, used for optimistic locking to prevent concurrent modification conflicts.
   *
   * @public
   */
  LockVersion?: DataTableLockVersion | undefined;

  /**
   * The timestamp when this attribute was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where this attribute was last modified, used for region replication.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The validation rules applied to values of this attribute. Based on JSON Schema Draft 2020-12 with additional Connect-specific validations for data integrity.
   *
   * @public
   */
  Validation?: Validation | undefined;
}

/**
 * @public
 */
export interface DescribeDataTableAttributeResponse {
  /**
   * The complete attribute information including configuration, validation rules, lock version, and metadata.
   *
   * @public
   */
  Attribute: DataTableAttribute | undefined;
}

/**
 * @public
 */
export interface DescribeEmailAddressRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the email address.
   *
   * @public
   */
  EmailAddressId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEmailAddressResponse {
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

  /**
   * The email address, including the domain.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The display name of email address
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the email address.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The email address creation timestamp in ISO 8601 Datetime.
   *
   * @public
   */
  CreateTimestamp?: string | undefined;

  /**
   * The email address last modification timestamp in ISO 8601 Datetime.
   *
   * @public
   */
  ModifiedTimestamp?: string | undefined;

  /**
   * A list of alias configurations associated with this email address. Contains details about email addresses that forward to this primary email address. The list can contain at most one alias configuration per email address.
   *
   * @public
   */
  AliasConfigurations?: AliasConfiguration[] | undefined;

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
export interface DescribeEvaluationFormRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the contact evaluation.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeExtractionDefinitionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the extraction definition to describe.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;
}

/**
 * Information about an extraction definition.
 *
 * @public
 */
export interface ExtractionDefinition {
  /**
   * The name of the extraction definition.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier of the extraction definition.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extraction definition.
   *
   * @public
   */
  ExtractionDefinitionArn: string | undefined;

  /**
   * The configuration that defines how data is extracted.
   *
   * @public
   */
  ExtractionConfiguration: ExtractionConfiguration | undefined;

  /**
   * The display settings for the extraction definition.
   *
   * @public
   */
  Display?: ExtractionDefinitionDisplay | undefined;

  /**
   * The timestamp when the extraction definition was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The timestamp when the extraction definition was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the extraction definition.
   *
   * @public
   */
  LastUpdatedBy: string | undefined;

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
export interface DescribeExtractionDefinitionResponse {
  /**
   * The extraction definition.
   *
   * @public
   */
  ExtractionDefinition: ExtractionDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * Identifier for a hours of operations resource: ARN, ID, Name
 *
 * @public
 */
export interface HoursOfOperationsIdentifier {
  /**
   * Name of the hours of operation
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Unique identifier of the hours of operation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the hours of operations.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about of the hours of operation.
 *
 * @public
 */
export interface HoursOfOperation {
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

  /**
   * The name for the hours of operation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description for the hours of operation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time zone for the hours of operation.
   *
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * Configuration information for the hours of operation.
   *
   * @public
   */
  Config?: HoursOfOperationConfig[] | undefined;

  /**
   * Information about parent hours of operations.
   *
   * @public
   */
  ParentHoursOfOperations?: HoursOfOperationsIdentifier[] | undefined;

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
 * @public
 */
export interface DescribeHoursOfOperationResponse {
  /**
   * The hours of operation.
   *
   * @public
   */
  HoursOfOperation?: HoursOfOperation | undefined;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationOverrideRequest {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier for the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The identifier for the hours of operation override.
   *
   * @public
   */
  HoursOfOperationOverrideId: string | undefined;
}

/**
 * Information about the hours of operations override.
 *
 * @public
 */
export interface HoursOfOperationOverride {
  /**
   * The identifier for the hours of operation override.
   *
   * @public
   */
  HoursOfOperationOverrideId?: string | undefined;

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

  /**
   * The name of the hours of operation override.
   *
   * @public
   */
  Name?: string | undefined;

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
  Config?: HoursOfOperationOverrideConfig[] | undefined;

  /**
   * The date from which the hours of operation override would be effective.
   *
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * The date until the hours of operation override is effective.
   *
   * @public
   */
  EffectiveTill?: string | undefined;

  /**
   * Configuration for a recurring event.
   *
   * @public
   */
  RecurrenceConfig?: RecurrenceConfig | undefined;

  /**
   * Whether the override will be defined as a *standard* or as a *recurring event*.
   *
   * @public
   */
  OverrideType?: OverrideType | undefined;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationOverrideResponse {
  /**
   * Information about the hours of operations override.
   *
   * @public
   */
  HoursOfOperationOverride?: HoursOfOperationOverride | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * Relevant details why the instance was not successfully created.
 *
 * @public
 */
export interface InstanceStatusReason {
  /**
   * The message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The Connect Customer instance.
 *
 * @public
 */
export interface Instance {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
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

  /**
   * The identity management type.
   *
   * @public
   */
  IdentityManagementType?: DirectoryType | undefined;

  /**
   * The alias of instance.
   *
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * When the instance was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The service role of the instance.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * The state of the instance.
   *
   * @public
   */
  InstanceStatus?: InstanceStatus | undefined;

  /**
   * Relevant details why the instance was not successfully created.
   *
   * @public
   */
  StatusReason?: InstanceStatusReason | undefined;

  /**
   * Whether inbound calls are enabled.
   *
   * @public
   */
  InboundCallsEnabled?: boolean | undefined;

  /**
   * Whether outbound calls are enabled.
   *
   * @public
   */
  OutboundCallsEnabled?: boolean | undefined;

  /**
   * This URL allows contact center users to access the Connect Customer admin website.
   *
   * @public
   */
  InstanceAccessUrl?: string | undefined;

  /**
   * The tags of an instance.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Status information about the replication process, where you use the [ReplicateInstance](https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html) API to create a replica of your Connect Customer instance in another Amazon Web Services Region. For more information, see [Set up Connect Customer Global Resiliency](https://docs.aws.amazon.com/connect/latest/adminguide/setup-connect-global-resiliency.html) in the *Connect Customer Administrator Guide*.
 *
 * @public
 */
export interface ReplicationStatusSummary {
  /**
   * The Amazon Web Services Region. This can be either the source or the replica Region, depending where it appears in the summary list.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The state of the replication.
   *
   * @public
   */
  ReplicationStatus?: InstanceReplicationStatus | undefined;

  /**
   * A description of the replication status. Use this information to resolve any issues that are preventing the successful replication of your Connect Customer instance to another Region.
   *
   * @public
   */
  ReplicationStatusReason?: string | undefined;
}

/**
 * Details about the status of the replication of a source Connect Customer instance across Amazon Web Services Regions. Use these details to understand the general status of a given replication. For information about why a replication process may fail, see [Why a ReplicateInstance call fails](https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html#why-replicateinstance-fails) in the *Create a replica of your existing Connect Customer instance* topic in the *Connect Customer Administrator Guide*.
 *
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * A list of replication status summaries. The summaries contain details about the replication of configuration information for Connect Customer resources, for each Amazon Web Services Region.
   *
   * @public
   */
  ReplicationStatusSummaryList?: ReplicationStatusSummary[] | undefined;

  /**
   * The Amazon Web Services Region where the source Connect Customer instance was created. This is the Region where the [ReplicateInstance](https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html) API was called to start the replication process.
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * The URL that is used to sign-in to your Connect Customer instance according to your traffic distribution group configuration. For more information about sign-in and traffic distribution groups, see [Important things to know](https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html) in the *Create traffic distribution groups* topic in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  GlobalSignInEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceResponse {
  /**
   * The name of the instance.
   *
   * @public
   */
  Instance?: Instance | undefined;

  /**
   * Status information about the replication process. This field is included only when you are using the [ReplicateInstance](https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html) API to replicate an Connect Customer instance across Amazon Web Services Regions. For information about replicating Connect Customer instances, see [Create a replica of your existing Connect Customer instance](https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  ReplicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of attribute.
   *
   * @public
   */
  AttributeType: InstanceAttributeType | undefined;
}

/**
 * A toggle for an individual feature at the instance level.
 *
 * @public
 */
export interface Attribute {
  /**
   * The type of attribute.
   *
   * @public
   */
  AttributeType?: InstanceAttributeType | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeResponse {
  /**
   * The type of attribute.
   *
   * @public
   */
  Attribute?: Attribute | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigResponse {
  /**
   * A valid storage type.
   *
   * @public
   */
  StorageConfig?: InstanceStorageConfig | undefined;
}

/**
 * @public
 */
export interface DescribeMetricRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the metric to describe. Adding the `$SAVED` qualifier will describe the saved version of the metric. Adding `$LATEST` or omitting a qualifier will describe the published version.
   *
   * @public
   */
  MetricId: string | undefined;
}

/**
 * A filter that is available for use with the metric. Part of an AvailableFilterList that describes the filters that are available for use with the metric.
 *
 * @public
 */
export interface AvailableFilter {
  /**
   * The identifier of the filter.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the filter. Valid values: `METRIC_LEVEL` | `RESOURCE_LEVEL`.
   *
   * @public
   */
  Type?: AvailableFilterType | undefined;
}

/**
 * Contains the full definition of a metric, including its calculation, unit, status, and trend indicator.
 *
 * @public
 */
export interface MetricDefinition {
  /**
   * The Amazon Resource Name (ARN) of the metric. May be qualified with `$SAVED` or `$LATEST`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the metric.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the metric.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The calculation definition for the metric.
   *
   * @public
   */
  MetricCalculation?: MetricCalculation | undefined;

  /**
   * The method used to create the metric. Valid values: `SERVICE_LEVEL_BUILDER` (created with the guided service-level experience) | `METRIC_BUILDER` (created with the free-form metric builder).
   *
   * @public
   */
  CreationMethod?: MetricCreationMethod | undefined;

  /**
   * The publish status of the metric. Valid values: `PUBLISHED` | `SAVED`.
   *
   * @public
   */
  Status?: MetricStatus | undefined;

  /**
   * The type of the metric. Valid values: `AWS_MANAGED` | `CUSTOMER_MANAGED`.
   *
   * @public
   */
  Type: MetricType | undefined;

  /**
   * The display unit for the metric's data.
   *
   * @public
   */
  Unit: MetricUnit | undefined;

  /**
   * How an increase in the metric value should be interpreted. Valid values: `POSITIVE`, `NEUTRAL`, `NEGATIVE`.
   *
   * @public
   */
  PositiveTrendIndicator?: TrendIndicator | undefined;

  /**
   * The groupings available for this metric.
   *
   * @public
   */
  Groupings: string[] | undefined;

  /**
   * The filters applied to the metric.
   *
   * @public
   */
  Filters: AvailableFilter[] | undefined;

  /**
   * The earliest time that can be queried for this metric.
   *
   * @public
   */
  EffectiveTime?: Date | undefined;

  /**
   * The minimum interval, in seconds, between data refreshes for this metric.
   *
   * @public
   */
  RefreshRate?: number | undefined;

  /**
   * The category of the metric.
   *
   * @public
   */
  Category: string | undefined;

  /**
   * The stat aggregations available for this metric.
   *
   * @public
   */
  SupportedStats?: string[] | undefined;

  /**
   * The default stat aggregation for the metric.
   *
   * @public
   */
  DefaultStat?: string | undefined;

  /**
   * Specifies whether the metric can be used inside aggregating statistical functions (SUM, AVG, etc.) in custom metric calculations.
   *
   * @public
   */
  SupportsPreaggregateCalculation: boolean | undefined;

  /**
   * Specifies whether the metric can be used as a component of custom metrics.
   *
   * @public
   */
  SupportsCustomCalculation: boolean | undefined;

  /**
   * The primary event source for the metric data.
   *
   * @public
   */
  PrimaryEventSource?: string | undefined;

  /**
   * The timestamp type that determines where the metric appears on a time series.
   *
   * @public
   */
  PrimaryEventSourceEffectiveTimestampType?: string | undefined;

  /**
   * The timestamp of when the metric was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The user that created the metric. The creator for metrics created through the CreateMetric API will be `Amazon Connect API`.
   *
   * @public
   */
  CreatedUser?: CreatedByInfo | undefined;

  /**
   * The region where the metric was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The timestamp of when the metric was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The user that last modified the metric. For modifications made through the API, this will be `Amazon Connect API`.
   *
   * @public
   */
  LastModifiedUser?: CreatedByInfo | undefined;

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
export interface DescribeMetricResponse {
  /**
   * The metric definition.
   *
   * @public
   */
  Metric: MetricDefinition | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationRequest {
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
}

/**
 * Contains information about a notification, including its content, priority, recipients, and metadata.
 *
 * @public
 */
export interface Notification {
  /**
   * The localized content of the notification. A map where keys are locale codes and values are the notification text in that locale.
   *
   * @public
   */
  Content?: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * The unique identifier for the notification.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The priority level of the notification. Valid values are URGENT, HIGH, and LOW.
   *
   * @public
   */
  Priority?: NotificationPriority | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) identifying the recipients of the notification. Maximum of 200 recipients.
   *
   * @public
   */
  Recipients?: string[] | undefined;

  /**
   * The timestamp when the notification was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The timestamp when the notification was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the notification expires and is no longer displayed to users.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The AWS Region where the notification was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

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
export interface DescribeNotificationResponse {
  /**
   * The complete notification information including content, priority, recipients, and metadata.
   *
   * @public
   */
  Notification: Notification | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumberRequest {
  /**
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * The status of the phone number.
 *
 * - `CLAIMED` means the previous [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html) or [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html) operation succeeded.
 * - `IN_PROGRESS` means a [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html), [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html), or [UpdatePhoneNumberMetadata](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html) operation is still in progress and has not yet completed. You can call [DescribePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html) at a later time to verify if the previous operation has completed.
 * - `FAILED` indicates that the previous [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html) or [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html) operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the `TargetArn` value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a `FAILED` status from a `ClaimPhoneNumber` API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim.
 *
 * @public
 */
export interface PhoneNumberStatus {
  /**
   * The status.
   *
   * @public
   */
  Status?: PhoneNumberWorkflowStatus | undefined;

  /**
   * The status message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Information about a phone number that has been claimed to your Connect Customer instance or traffic distribution group.
 *
 * @public
 */
export interface ClaimedPhoneNumberSummary {
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

  /**
   * The phone number. Phone numbers are formatted `[+] [country code] [subscriber number including area code]`.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The ISO country code.
   *
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * The type of phone number.
   *
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * The description of the phone number.
   *
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for Connect Customer instances or traffic distribution groups that phone number inbound traffic is routed through.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The identifier of the Connect Customer instance that phone numbers are claimed to. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The status of the phone number.
   *
   * - `CLAIMED` means the previous [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html) or [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html) operation succeeded.
   * - `IN_PROGRESS` means a [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html), [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html), or [UpdatePhoneNumberMetadata](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html) operation is still in progress and has not yet completed. You can call [DescribePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html) at a later time to verify if the previous operation has completed.
   * - `FAILED` indicates that the previous [ClaimPhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html) or [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html) operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the `TargetArn` value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a `FAILED` status from a `ClaimPhoneNumber` API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim.
   *
   * > **Note:** You will not be billed for the phone number during the 1-day period if number claiming fails.
   *
   * @public
   */
  PhoneNumberStatus?: PhoneNumberStatus | undefined;

  /**
   * The claimed phone number ARN that was previously imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number that was imported from Amazon Web Services End User Messaging.
   *
   * @public
   */
  SourcePhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumberResponse {
  /**
   * Information about a phone number that's been claimed to your Connect Customer instance or traffic distribution group.
   *
   * @public
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary | undefined;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeRequest {
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
}

/**
 * Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as controlling how a predefined attribute should be displayed in the Connect Customer admin website.
 *
 * @public
 */
export interface PredefinedAttributeConfiguration {
  /**
   * When this parameter is set to true, Connect Customer enforces strict validation on the specific values, if the values are predefined in attributes. The contact will store only valid and predefined values for teh predefined attribute key.
   *
   * @public
   */
  EnableValueValidationOnAssociation?: boolean | undefined;

  /**
   * A boolean flag used to indicate whether a predefined attribute should be displayed in the Connect Customer admin website.
   *
   * @public
   */
  IsReadOnly?: boolean | undefined;
}

/**
 * Information about a predefined attribute.
 *
 * @public
 */
export interface PredefinedAttribute {
  /**
   * The name of the predefined attribute.
   *
   * @public
   */
  Name?: string | undefined;

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
  AttributeConfiguration?: PredefinedAttributeConfiguration | undefined;

  /**
   * Last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Last modified region.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeResponse {
  /**
   * Information about the predefined attribute.
   *
   * @public
   */
  PredefinedAttribute?: PredefinedAttribute | undefined;
}

/**
 * @public
 */
export interface DescribePromptRequest {
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
}

/**
 * Information about a prompt.
 *
 * @public
 */
export interface Prompt {
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

  /**
   * The name of the prompt.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the prompt.
   *
   * @public
   */
  Description?: string | undefined;

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
 * @public
 */
export interface DescribePromptResponse {
  /**
   * Information about the prompt.
   *
   * @public
   */
  Prompt?: Prompt | undefined;
}

/**
 * @public
 */
export interface DescribeQueueRequest {
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
}

/**
 * Contains information about a queue.
 *
 * @public
 */
export interface Queue {
  /**
   * The name of the queue.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the queue.
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
  HoursOfOperationId?: string | undefined;

  /**
   * The maximum number of contacts that can be in the queue before it is considered full.
   *
   * @public
   */
  MaxContacts?: number | undefined;

  /**
   * The status of the queue.
   *
   * @public
   */
  Status?: QueueStatus | undefined;

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
 * @public
 */
export interface DescribeQueueResponse {
  /**
   * The name of the queue.
   *
   * @public
   */
  Queue?: Queue | undefined;
}

/**
 * @public
 */
export interface DescribeQuickConnectRequest {
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
}

/**
 * Contains information about a quick connect.
 *
 * @public
 */
export interface QuickConnect {
  /**
   * The Amazon Resource Name (ARN) of the quick connect.
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

  /**
   * The name of the quick connect.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contains information about the quick connect.
   *
   * @public
   */
  QuickConnectConfig?: QuickConnectConfig | undefined;

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
 * @public
 */
export interface DescribeQuickConnectResponse {
  /**
   * Information about the quick connect.
   *
   * @public
   */
  QuickConnect?: QuickConnect | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingProfileRequest {
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
}

/**
 * Contains information about a routing profile.
 *
 * @public
 */
export interface RoutingProfile {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The name of the routing profile.
   *
   * @public
   */
  Name?: string | undefined;

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

  /**
   * The description of the routing profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
   *
   * @public
   */
  MediaConcurrencies?: MediaConcurrency[] | undefined;

  /**
   * The identifier of the default outbound queue for this routing profile.
   *
   * @public
   */
  DefaultOutboundQueueId?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The number of associated queues in routing profile.
   *
   * @public
   */
  NumberOfAssociatedQueues?: number | undefined;

  /**
   * The number of associated manual assignment queues in routing profile.
   *
   * @public
   */
  NumberOfAssociatedManualAssignmentQueues?: number | undefined;

  /**
   * The number of associated users in routing profile.
   *
   * @public
   */
  NumberOfAssociatedUsers?: number | undefined;

  /**
   * Whether agents with this routing profile will have their routing order calculated based on *time since their last inbound contact* or *longest idle time*.
   *
   * @public
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | undefined;

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

  /**
   * Whether this a default routing profile.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The IDs of the associated queue.
   *
   * @public
   */
  AssociatedQueueIds?: string[] | undefined;

  /**
   * The IDs of the associated manual assignment queues.
   *
   * @public
   */
  AssociatedManualAssignmentQueueIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingProfileResponse {
  /**
   * The routing profile.
   *
   * @public
   */
  RoutingProfile?: RoutingProfile | undefined;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the rule.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * Information about a rule.
 *
 * @public
 */
export interface Rule {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn: string | undefined;

  /**
   * The event source to trigger the rule.
   *
   * @public
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * The list of capability tiers associated with the rule. Used for categorizing rules by capability (for example, `GenerativeAI`).
   *
   * @public
   */
  RuleCapabilityTiers?: RuleCapabilityTier[] | undefined;

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
   * The timestamp for when the rule was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The timestamp for the when the rule was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the rule.
   *
   * @public
   */
  LastUpdatedBy: string | undefined;

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
export interface DescribeRuleResponse {
  /**
   * Information about the rule.
   *
   * @public
   */
  Rule: Rule | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
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
}

/**
 * Contains information about a security profile.
 *
 * @public
 */
export interface SecurityProfile {
  /**
   * The identifier for the security profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The organization resource identifier for the security profile.
   *
   * @public
   */
  OrganizationResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the security profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name for the security profile.
   *
   * @public
   */
  SecurityProfileName?: string | undefined;

  /**
   * The description of the security profile.
   *
   * @public
   */
  Description?: string | undefined;

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
   * The list of resources that a security profile applies tag restrictions to in Connect Customer.
   *
   * @public
   */
  TagRestrictedResources?: string[] | undefined;

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
   * The granular access control configuration for the security profile, including data table permissions.
   *
   * @public
   */
  GranularAccessControlConfiguration?: GranularAccessControlConfiguration | undefined;

  /**
   * The type of the security profile: `AWS_MANAGED` or `CUSTOMER_MANAGED`.
   *
   * @public
   */
  Type?: SecurityProfileType | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * The security profile.
   *
   * @public
   */
  SecurityProfile?: SecurityProfile | undefined;
}

/**
 * @public
 */
export interface DescribeTestCaseRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case.
   *
   * @public
   */
  TestCaseId: string | undefined;

  /**
   * The status of the test case version to retrieve. If not specified, returns the published version if available, otherwise returns the saved version.
   *
   * @public
   */
  Status?: TestCaseStatus | undefined;
}

/**
 * Contains information about a test case.
 *
 * @public
 */
export interface TestCase {
  /**
   * The Amazon Resource Name (ARN) of the test case.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the test case.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the test case.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The JSON string that represents the content of the test.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Defines the starting point for the test, including channel type and parameters.
   *
   * @public
   */
  EntryPoint?: TestCaseEntryPoint | undefined;

  /**
   * Defines the test attributes for precise data representation. The value must be a valid JSON string.
   *
   * @public
   */
  InitializationData?: string | undefined;

  /**
   * The description of the test case.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates the test status as either SAVED or PUBLISHED.
   *
   * @public
   */
  Status?: TestCaseStatus | undefined;

  /**
   * The time at which the test case was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The region in which the test case was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The SHA256 hash of the test case content.
   *
   * @public
   */
  TestCaseSha256?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTestCaseResponse {
  /**
   * The test case object containing all test case information.
   *
   * @public
   */
  TestCase?: TestCase | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  TrafficDistributionGroupId: string | undefined;
}

/**
 * Information about a traffic distribution group.
 *
 * @public
 */
export interface TrafficDistributionGroup {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the traffic distribution group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the traffic distribution group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the traffic distribution group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN).
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The status of the traffic distribution group.
   *
   * - `CREATION_IN_PROGRESS` means the previous [CreateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html) operation is still in progress and has not yet completed.
   * - `ACTIVE` means the previous [CreateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html) operation has succeeded.
   * - `CREATION_FAILED` indicates that the previous [CreateTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html) operation has failed.
   * - `PENDING_DELETION` means the previous [DeleteTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html) operation is still in progress and has not yet completed.
   * - `DELETION_FAILED` means the previous [DeleteTrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html) operation has failed.
   * - `UPDATE_IN_PROGRESS` means the previous [UpdateTrafficDistribution](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistribution.html) operation is still in progress and has not yet completed.
   *
   * @public
   */
  Status?: TrafficDistributionGroupStatus | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whether this is the default traffic distribution group created during instance replication. The default traffic distribution group cannot be deleted by the `DeleteTrafficDistributionGroup` API. The default traffic distribution group is deleted as part of the process for deleting a replica.
   *
   * > **Note:** The `SignInConfig` distribution is available only on a default `TrafficDistributionGroup` (see the `IsDefault` parameter in the [TrafficDistributionGroup](https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html) data type). If you call `UpdateTrafficDistribution` with a modified `SignInConfig` and a non-default `TrafficDistributionGroup`, an `InvalidRequestException` is returned.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupResponse {
  /**
   * Information about the traffic distribution group.
   *
   * @public
   */
  TrafficDistributionGroup?: TrafficDistributionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
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
 * Contains information about a user account for an Connect Customer instance.
 *
 * @public
 */
export interface User {
  /**
   * The identifier of the user account.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The user name assigned to the user account.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Information about the user identity.
   *
   * @public
   */
  IdentityInfo?: UserIdentityInfo | undefined;

  /**
   * Information about the phone configuration for the user.
   *
   * @public
   */
  PhoneConfig?: UserPhoneConfig | undefined;

  /**
   * The identifier of the user account in the directory used for identity management.
   *
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * The identifiers of the security profiles for the user.
   *
   * @public
   */
  SecurityProfileIds?: string[] | undefined;

  /**
   * The identifier of the routing profile for the user.
   *
   * @public
   */
  RoutingProfileId?: string | undefined;

  /**
   * The identifier of the hierarchy group for the user.
   *
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of auto-accept configuration settings for each channel.
   *
   * @public
   */
  AutoAcceptConfigs?: AutoAcceptConfig[] | undefined;

  /**
   * The list of after contact work (ACW) timeout configuration settings for each channel.
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
 * @public
 */
export interface DescribeUserResponse {
  /**
   * Information about the user account and configuration settings.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupRequest {
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
 * Contains summary information about a hierarchy group.
 *
 * @public
 */
export interface HierarchyGroupSummary {
  /**
   * The identifier of the hierarchy group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hierarchy group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the hierarchy group.
   *
   * @public
   */
  Name?: string | undefined;

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
 * Contains information about the levels of a hierarchy group.
 *
 * @public
 */
export interface HierarchyPath {
  /**
   * Information about level one.
   *
   * @public
   */
  LevelOne?: HierarchyGroupSummary | undefined;

  /**
   * Information about level two.
   *
   * @public
   */
  LevelTwo?: HierarchyGroupSummary | undefined;

  /**
   * Information about level three.
   *
   * @public
   */
  LevelThree?: HierarchyGroupSummary | undefined;

  /**
   * Information about level four.
   *
   * @public
   */
  LevelFour?: HierarchyGroupSummary | undefined;

  /**
   * Information about level five.
   *
   * @public
   */
  LevelFive?: HierarchyGroupSummary | undefined;
}

/**
 * Contains information about a hierarchy group.
 *
 * @public
 */
export interface HierarchyGroup {
  /**
   * The identifier of the hierarchy group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hierarchy group.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the hierarchy group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The identifier of the level in the hierarchy group.
   *
   * @public
   */
  LevelId?: string | undefined;

  /**
   * Information about the levels in the hierarchy group.
   *
   * @public
   */
  HierarchyPath?: HierarchyPath | undefined;

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
 * @public
 */
export interface DescribeUserHierarchyGroupResponse {
  /**
   * Information about the hierarchy group.
   *
   * @public
   */
  HierarchyGroup?: HierarchyGroup | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * Contains information about a hierarchy level.
 *
 * @public
 */
export interface HierarchyLevel {
  /**
   * The identifier of the hierarchy level.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hierarchy level.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the hierarchy level.
   *
   * @public
   */
  Name?: string | undefined;

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
 * Contains information about a hierarchy structure.
 *
 * @public
 */
export interface HierarchyStructure {
  /**
   * Information about level one.
   *
   * @public
   */
  LevelOne?: HierarchyLevel | undefined;

  /**
   * Information about level two.
   *
   * @public
   */
  LevelTwo?: HierarchyLevel | undefined;

  /**
   * Information about level three.
   *
   * @public
   */
  LevelThree?: HierarchyLevel | undefined;

  /**
   * Information about level four.
   *
   * @public
   */
  LevelFour?: HierarchyLevel | undefined;

  /**
   * Information about level five.
   *
   * @public
   */
  LevelFive?: HierarchyLevel | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureResponse {
  /**
   * Information about the hierarchy structure.
   *
   * @public
   */
  HierarchyStructure?: HierarchyStructure | undefined;
}

/**
 * @public
 */
export interface DescribeViewRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The ViewId of the view. This must be an ARN for Amazon Web Services managed views.
   *
   * @public
   */
  ViewId: string | undefined;
}

/**
 * @public
 */
export interface DescribeViewResponse {
  /**
   * All view data is contained within the View object.
   *
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface DescribeVocabularyRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the custom vocabulary.
   *
   * @public
   */
  VocabularyId: string | undefined;
}

/**
 * Contains information about a custom vocabulary.
 *
 * @public
 */
export interface Vocabulary {
  /**
   * A unique name of the custom vocabulary.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier of the custom vocabulary.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom vocabulary.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html)
   *
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * The current state of the custom vocabulary.
   *
   * @public
   */
  State: VocabularyState | undefined;

  /**
   * The timestamp when the custom vocabulary was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The reason why the custom vocabulary was not created.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with `Phrase`, `IPA`, `SoundsLike`, and `DisplayAs` fields. Separate the fields with TAB characters. For more information, see [Create a custom vocabulary using a table](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table).
   *
   * @public
   */
  Content?: string | undefined;

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
export interface DescribeVocabularyResponse {
  /**
   * A list of specific words that you want Contact Lens for Connect Customer to recognize in your audio input. They are generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper nouns.
   *
   * @public
   */
  Vocabulary: Vocabulary | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceRequest {
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
}

/**
 * Contains information about a workspace, which defines the user experience by mapping views to pages.
 *
 * @public
 */
export interface Workspace {
  /**
   * Controls who can access the workspace. Valid values are: `ALL` (all users), `ASSIGNED` (only assigned users and routing profiles), and `NONE` (not visible).
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The unique identifier of the workspace.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workspace.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The theme configuration for the workspace, including colors and styling.
   *
   * @public
   */
  Theme?: WorkspaceTheme | undefined;

  /**
   * The title displayed for the workspace.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The timestamp when the workspace was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Web Services Region where the workspace was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * The tags used to organize, track, or control access for the workspace.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * Information about the workspace.
   *
   * @public
   */
  Workspace: Workspace | undefined;
}

/**
 * @public
 */
export interface DisassociateAnalyticsDataSetRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the dataset to remove.
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
export interface DisassociateApprovedOriginRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The domain URL of the integrated application.
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
 * @public
 */
export interface DisassociateBotRequest {
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
   * The Amazon Lex V2 bot to disassociate from the instance.
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
export interface DisassociateEmailAddressAliasRequest {
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
   * Configuration object that specifies which alias relationship to remove. The alias association must currently exist between the primary email address and the specified alias email address.
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
export interface DisassociateEmailAddressAliasResponse {}

/**
 * @public
 */
export interface DisassociateFlowRequest {
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
   * A valid resource type.
   *
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
export interface DisassociateHoursOfOperationsRequest {
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
   * The Amazon Resource Names (ARNs) of the parent hours of operation resources to disassociate with the child hours of operation resource.
   *
   * @public
   */
  ParentHoursOfOperationIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateInstanceStorageConfigRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * A valid resource type.
   *
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

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
export interface DisassociateLambdaFunctionRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance..
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function being disassociated.
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
export interface DisassociateLexBotRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the Amazon Lex bot. Maximum character limit of 50.
   *
   * @public
   */
  BotName: string | undefined;

  /**
   * The Amazon Web Services Region in which the Amazon Lex bot has been created.
   *
   * @public
   */
  LexRegion: string | undefined;

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
export interface DisassociatePhoneNumberContactFlowRequest {
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
}

/**
 * @public
 */
export interface DisassociateQueueEmailAddressesRequest {
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
   * List of email address identifiers to disassociate from the queue. These are the unique identifiers of email addresses that should no longer be routed to this queue.
   *
   * @public
   */
  EmailAddressesId: string[] | undefined;

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
export interface DisassociateQueueQuickConnectsRequest {
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
   * The quick connects to disassociate from the queue.
   *
   * @public
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRoutingProfileQueuesRequest {
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
   * The queues to disassociate from this routing profile.
   *
   * @public
   */
  QueueReferences?: RoutingProfileQueueReference[] | undefined;

  /**
   * The manual assignment queues to disassociate with this routing profile.
   *
   * @public
   */
  ManualAssignmentQueueReferences?: RoutingProfileQueueReference[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityKeyRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
   *
   * @public
   */
  AssociationId: string | undefined;

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
export interface DisassociateSecurityProfilesRequest {
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
   * ARN of a Q in Connect AI Agent.
   *
   * @public
   */
  EntityArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserRequest {
  /**
   * The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group.
   *
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * The identifier for the user. This can be the ID or the ARN of the user.
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
export interface DisassociateTrafficDistributionGroupUserResponse {}

/**
 * Information about proficiency to be disassociated from the user.
 *
 * @public
 */
export interface UserProficiencyDisassociate {
  /**
   * The name of user's proficiency.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value of user's proficiency.
   *
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserProficienciesRequest {
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
   * The proficiencies to disassociate from the user.
   *
   * @public
   */
  UserProficiencies: UserProficiencyDisassociate[] | undefined;
}

/**
 * @public
 */
export interface DisassociateWorkspaceRequest {
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
   * The Amazon Resource Names (ARNs) of the resources to disassociate from the workspace.
   *
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateWorkspaceResponse {
  /**
   * A list of resources that were successfully disassociated from the workspace.
   *
   * @public
   */
  SuccessfulList?: SuccessfulBatchAssociationSummary[] | undefined;

  /**
   * A list of resources that failed to be disassociated from the workspace, including error details.
   *
   * @public
   */
  FailedList?: FailedBatchAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface DismissUserContactRequest {
  /**
   * The identifier of the user account.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DismissUserContactResponse {}

/**
 * A data table value evaluation set.
 *
 * @public
 */
export interface DataTableValueEvaluationSet {
  /**
   * The set's primary values.
   *
   * @public
   */
  PrimaryValues?: PrimaryValue[] | undefined;

  /**
   * The set's attribute names.
   *
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * @public
 */
export interface EvaluateDataTableValuesRequest {
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
   * A list of value evaluation sets specifying which primary values and attributes to evaluate.
   *
   * @public
   */
  Values: DataTableValueEvaluationSet[] | undefined;

  /**
   * Optional IANA timezone identifier to use when resolving time based dynamic values. Defaults to the data table time zone if not provided.
   *
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data table values to return in one page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}
