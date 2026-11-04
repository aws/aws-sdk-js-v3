// smithy-typescript generated code
import type {
  AgentStatusState,
  AiUseCase,
  AnalyticsMode,
  AttachmentScope,
  AutoEvaluationStatus,
  Behavior,
  BooleanComparisonType,
  Channel,
  ChatEventType,
  ContactEvaluationAttributeComparisonType,
  ContactEvaluationAttributeKey,
  ContactFlowModuleState,
  ContactFlowState,
  ContactFlowType,
  ContactInitiationMethod,
  ContactInteractionType,
  ContactMediaProcessingFailureMode,
  ContactParticipantRole,
  ContactRecordingType,
  DataTableAttributeValueType,
  DataTableLockLevel,
  DateComparisonType,
  DateTimeComparisonType,
  DecimalComparisonType,
  EmailHeaderType,
  EvaluationFormLanguageCode,
  EvaluationFormVersionStatus,
  EvaluationStatus,
  EvaluationType,
  FileStatusType,
  FileUseCaseType,
  HierarchyGroupMatchType,
  InboundMessageSourceType,
  InstanceAttributeType,
  InstanceStorageResourceType,
  IvrRecordingTrack,
  LocaleCode,
  MaskMode,
  MediaType,
  MeetingFeatureStatus,
  MetricUnit,
  MonitorCapability,
  NotificationPriority,
  NotificationType,
  NumberComparisonType,
  OutboundMessageSourceType,
  OverrideType,
  ParticipantRole,
  ParticipantTimerAction,
  PerformanceCategoryName,
  PhoneNumberCountryCode,
  PhoneNumberType,
  Policy,
  RehydrationType,
  ResponseMode,
  RuleCapabilityTier,
  RulePublishStatus,
  SearchContactsMatchType,
  SearchContactsTimeRangeConditionType,
  SearchContactsTimeRangeType,
  SecurityProfileType,
  SortableFieldName,
  SortOrder,
  StringComparisonType,
  SummaryMode,
  TargetListType,
  TestCaseExecutionStatus,
  TrafficType,
  TrendIndicator,
  UpdateOutboundEmailMessageSourceType,
  ViewStatus,
  ViewType,
  Visibility,
  VocabularyLanguageCode,
  VocabularyState,
  VoiceRecordingTrack,
} from "./enums";
import type {
  ActionSummary,
  AfterContactWorkConfigPerChannel,
  AgentHierarchyGroups,
  AgentStatus,
  AiAgentInput,
  AiAgentsCriteria,
  AliasConfiguration,
  ControlPlaneAttributeFilter,
  CreatedByInfo,
  DataTableLockVersion,
  ExtractionConfiguration,
  ExtractionDefinitionDisplay,
  HoursOfOperationConfig,
  HoursOfOperationOverrideConfig,
  InstanceStorageConfig,
  MetricCalculation,
  OutboundStrategy,
  PreEvaluationFilters,
  PrimaryValue,
  RecurrenceConfig,
  Reference,
  RuleTriggerEventSource,
  StringCondition,
  TagCondition,
  Validation,
} from "./models_0";
import type {
  AutoAcceptConfig,
  ContactFlow,
  ContactFlowModule,
  DataTable,
  EvaluationAnswerData,
  EvaluationNote,
  ExtensionConfiguration,
  HierarchyGroup,
  HoursOfOperation,
  HoursOfOperationOverride,
  MetricDefinition,
  PersistentConnectionConfig,
  PhoneNumberConfig,
  PredefinedAttribute,
  Prompt,
  Queue,
  QuickConnect,
  RoutingProfile,
  TestCase,
  UserPhoneConfig,
  View,
  VoiceEnhancementConfig,
} from "./models_1";
import type { UserSummary } from "./models_2";

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * Information about the users.
   *
   * @public
   */
  UserSummaryList?: UserSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewsRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of the view.
   *
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of a view's metadata.
 *
 * @public
 */
export interface ViewSummary {
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
   * The type of the view.
   *
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * Indicates the view status as either `SAVED` or `PUBLISHED`. The `PUBLISHED` status will initiate validation on the content.
   *
   * @public
   */
  Status?: ViewStatus | undefined;

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
export interface ListViewsResponse {
  /**
   * A list of view summaries.
   *
   * @public
   */
  ViewsSummaryList?: ViewSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsRequest {
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
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default MaxResult size is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of a view version's metadata.
 *
 * @public
 */
export interface ViewVersionSummary {
  /**
   * The identifier of the view version.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the view version.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the view version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the view version.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the view version.
   *
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * The sequentially incremented version of the view version.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The description of the view version.
   *
   * @public
   */
  VersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListViewVersionsResponse {
  /**
   * A list of view version summaries.
   *
   * @public
   */
  ViewVersionSummaryList?: ViewVersionSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceMediaRequest {
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
 * Contains information about a media asset used in a workspace.
 *
 * @public
 */
export interface MediaItem {
  /**
   * The type of media. Valid values are: `IMAGE_LOGO_FAVICON` and `IMAGE_LOGO_HORIZONTAL`.
   *
   * @public
   */
  Type?: MediaType | undefined;

  /**
   * The source URL or data for the media asset.
   *
   * @public
   */
  Source?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceMediaResponse {
  /**
   * A list of media assets for the workspace.
   *
   * @public
   */
  Media?: MediaItem[] | undefined;
}

/**
 * @public
 */
export interface ListWorkspacePagesRequest {
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
}

/**
 * Contains information about a page configuration in a workspace, including the view assigned to the page.
 *
 * @public
 */
export interface WorkspacePage {
  /**
   * The Amazon Resource Name (ARN) of the view associated with this page.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The page identifier. System pages include `HOME` and `AGENT_EXPERIENCE`.
   *
   * @public
   */
  Page?: string | undefined;

  /**
   * The URL-friendly identifier for the page.
   *
   * @public
   */
  Slug?: string | undefined;

  /**
   * A JSON string containing input parameters passed to the view when the page is rendered.
   *
   * @public
   */
  InputData?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacePagesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of page configurations in the workspace.
   *
   * @public
   */
  WorkspacePageList: WorkspacePage[] | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
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
}

/**
 * Contains summary information about a workspace.
 *
 * @public
 */
export interface WorkspaceSummary {
  /**
   * The unique identifier of the workspace.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workspace.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp when the workspace was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Region where the workspace was last modified.
   *
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A summary list of workspaces.
   *
   * @public
   */
  WorkspaceSummaryList: WorkspaceSummary[] | undefined;
}

/**
 * @public
 */
export interface MonitorContactRequest {
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

  /**
   * The identifier of the user account.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if barge is enabled.
   *
   * @public
   */
  AllowedMonitorCapabilities?: MonitorCapability[] | undefined;

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
export interface MonitorContactResponse {
  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The ARN of the contact.
   *
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface PauseContactRequest {
  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can find the `instanceId` in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId?: string | undefined;
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
   * The identifier of the user.
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

  /**
   * The identifier of the agent status.
   *
   * @public
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
   * A unique identifier for the phone number.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

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
export interface ReplicateInstanceRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance. You can provide the `InstanceId`, or the entire ARN.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The Amazon Web Services Region where to replicate the Connect Customer instance.
   *
   * @public
   */
  ReplicaRegion: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The alias for the replicated instance. The `ReplicaAlias` must be unique.
   *
   * @public
   */
  ReplicaAlias?: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * The identifier of the replicated instance. You can find the `instanceId` in the ARN of the instance. The replicated instance has the same identifier as the instance it was replicated from.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicated instance.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactRequest {
  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can find the `instanceId` in the ARN of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId?: string | undefined;
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

  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
   *
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * The type of recording being operated on.
   *
   * @public
   */
  ContactRecordingType?: ContactRecordingType | undefined;
}

/**
 * @public
 */
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAgentStatusesResponse {
  /**
   * The search criteria to be used to return agent statuses.
   *
   * @public
   */
  AgentStatuses?: AgentStatus[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of agent statuses which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
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
   * The ISO country code.
   *
   * @public
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | undefined;

  /**
   * The type of phone number.
   *
   * @public
   */
  PhoneNumberType: PhoneNumberType | undefined;

  /**
   * The prefix of the phone number. If provided, it must contain `+` as part of the country code.
   *
   * @public
   */
  PhoneNumberPrefix?: string | undefined;

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
}

/**
 * Information about available phone numbers.
 *
 * @public
 */
export interface AvailableNumberSummary {
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
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of available phone numbers that you can claim to your Connect Customer instance or traffic distribution group.
   *
   * @public
   */
  AvailableNumbersList?: AvailableNumberSummary[] | undefined;
}

/**
 * A boolean search condition for Search APIs.
 *
 * @public
 */
export interface BooleanCondition {
  /**
   * A name of the property to be searched.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * Boolean property comparison type.
   *
   * @public
   */
  ComparisonType?: BooleanComparisonType | undefined;
}

/**
 * A datetime search condition for Search APIs.
 *
 * @public
 */
export interface DateTimeCondition {
  /**
   * A name of the datetime property to be searched
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * A minimum value of the property.
   *
   * @public
   */
  MinValue?: string | undefined;

  /**
   * A maximum value of the property.
   *
   * @public
   */
  MaxValue?: string | undefined;

  /**
   * Datetime property comparison type.
   *
   * @public
   */
  ComparisonType?: DateTimeComparisonType | undefined;
}

/**
 * A decimal search condition for Search APIs.
 *
 * @public
 */
export interface DecimalCondition {
  /**
   * A name of the decimal property to be searched.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * A minimum value of the decimal property.
   *
   * @public
   */
  MinValue?: number | undefined;

  /**
   * A maximum value of the decimal property.
   *
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * The type of comparison to be made when evaluating the decimal condition.
   *
   * @public
   */
  ComparisonType?: DecimalComparisonType | undefined;
}

/**
 * A leaf node condition which can be used to specify a numeric condition.
 *
 * > **Note:** The currently supported value for `FieldName` is `limit`.
 *
 * @public
 */
export interface NumberCondition {
  /**
   * The name of the field in the number condition.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * The minValue to be used while evaluating the number condition.
   *
   * @public
   */
  MinValue?: number | undefined;

  /**
   * The maxValue to be used while evaluating the number condition.
   *
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * The type of comparison to be made when evaluating the number condition.
   *
   * @public
   */
  ComparisonType?: NumberComparisonType | undefined;
}

/**
 * The value of a contact evaluation attribute condition.
 *
 * @public
 */
export interface ContactEvaluationAttributeValue {
  /**
   * A string value for the attribute.
   *
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * An attribute condition for contact evaluation filtering.
 *
 * @public
 */
export interface ContactEvaluationAttributeCondition {
  /**
   * The key of the attribute.
   *
   * @public
   */
  AttributeKey?: ContactEvaluationAttributeKey | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  AttributeValue?: ContactEvaluationAttributeValue | undefined;

  /**
   * The comparison type for the condition.
   *
   * @public
   */
  ComparisonType?: ContactEvaluationAttributeComparisonType | undefined;
}

/**
 * A list of conditions which would be applied together with an `AND` condition.
 *
 * @public
 */
export interface ContactEvaluationAttributeAndCondition {
  /**
   * A list of tag conditions to apply.
   *
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * A list of attribute conditions to apply.
   *
   * @public
   */
  AttributeConditions?: ContactEvaluationAttributeCondition[] | undefined;
}

/**
 * An object that can be used to specify tag conditions and attribute conditions inside the `SearchFilter` for contact evaluations. This accepts an `OR` or `AND` (List of List) input where:
 *
 * - The top level list specifies conditions that need to be applied with `OR` operator.
 * - The inner list specifies conditions that need to be applied with `AND` operator.
 *
 * @public
 */
export interface ContactEvaluationAttributeFilter {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: ContactEvaluationAttributeAndCondition[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndCondition?: ContactEvaluationAttributeAndCondition | undefined;

  /**
   * A tag condition to apply.
   *
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * An attribute condition to apply.
   *
   * @public
   */
  ContactEvaluationAttributeCondition?: ContactEvaluationAttributeCondition | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface EvaluationSearchFilter {
  /**
   * An object that can be used to specify tag conditions.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;

  /**
   * An object that can be used to specify tag conditions and attribute conditions for contact evaluations.
   *
   * @public
   */
  ContactEvaluationAttributeFilter?: ContactEvaluationAttributeFilter | undefined;
}

/**
 * Metadata information about an evaluation search.
 *
 * @public
 */
export interface EvaluationSearchMetadata {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the person who evaluated the contact.
   *
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * The unique ID of the agent who handled the contact.
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
   * The total evaluation score expressed as a percentage.
   *
   * @public
   */
  ScorePercentage?: number | undefined;

  /**
   * The flag that marks the item as automatic fail. If the item or a child item gets an automatic fail answer, this flag is true.
   *
   * @public
   */
  ScoreAutomaticFail?: boolean | undefined;

  /**
   * The flag to mark the item as not applicable for scoring.
   *
   * @public
   */
  ScoreNotApplicable?: boolean | undefined;

  /**
   * Whether auto-evaluation is enabled.
   *
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * The status of the contact auto evaluation.
   *
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;

  /**
   * When the evaluation was acknowledged by the agent.
   *
   * @public
   */
  AcknowledgedTime?: Date | undefined;

  /**
   * The agent who acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgedBy?: string | undefined;

  /**
   * The comment from the agent when they acknowledged the evaluation.
   *
   * @public
   */
  AcknowledgerComment?: string | undefined;

  /**
   * Identifier of the sampling job.
   *
   * @public
   */
  SamplingJobId?: string | undefined;

  /**
   * Identifier for the review.
   *
   * @public
   */
  ReviewId?: string | undefined;

  /**
   * Role of a contact participant in the evaluation.
   *
   * @public
   */
  ContactParticipantRole?: ContactParticipantRole | undefined;

  /**
   * Identifier for a contact participant in the evaluation.
   *
   * @public
   */
  ContactParticipantId?: string | undefined;

  /**
   * The points earned for the evaluation.
   *
   * @public
   */
  EarnedPoints?: number | undefined;

  /**
   * The maximum base points possible for the evaluation.
   *
   * @public
   */
  MaxBasePoint?: number | undefined;

  /**
   * The performance category for the evaluation score.
   *
   * @public
   */
  PerformanceCategory?: PerformanceCategoryName | undefined;
}

/**
 * Summary of evaluation obtained from the search operation.
 *
 * @public
 */
export interface EvaluationSearchSummary {
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
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId?: string | undefined;

  /**
   * A version of the evaluation form.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * Title of the evaluation form.
   *
   * @public
   */
  EvaluationFormTitle?: string | undefined;

  /**
   * Summary information about the evaluation search.
   *
   * @public
   */
  Metadata: EvaluationSearchMetadata | undefined;

  /**
   * The status of the evaluation.
   *
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * Type of the evaluation.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * The date and time when the evaluation was created, in UTC time.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The date and time when the evaluation was modified last time, in UTC time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

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
export interface SearchContactEvaluationsResponse {
  /**
   * Contains information about contact evaluations.
   *
   * @public
   */
  EvaluationSearchSummaryList?: EvaluationSearchSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of contact evaluations that matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
 *
 * - Top level list specifies conditions that need to be applied with `OR` operator
 * - Inner list specifies conditions that need to be applied with `AND` operator.
 *
 * @public
 */
export interface ControlPlaneTagFilter {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: TagCondition[][] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndConditions?: TagCondition[] | undefined;

  /**
   * A leaf node condition which can be used to specify a tag condition.
   *
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * The search criteria to be used to return flow modules.
 *
 * @public
 */
export interface ContactFlowModuleSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowModulesResponse {
  /**
   * The search criteria to be used to return flow modules.
   *
   * @public
   */
  ContactFlowModules?: ContactFlowModule[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of flows which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * The contact flow type condition.
 *
 * @public
 */
export interface ContactFlowTypeCondition {
  /**
   * Contact flow type of the contact flow type condition.
   *
   * @public
   */
  ContactFlowType?: ContactFlowType | undefined;
}

/**
 * A list of conditions which would be applied together with an AND condition.
 *
 * @public
 */
export interface ContactFlowAttributeAndCondition {
  /**
   * Tag-based conditions for contact flow filtering.
   *
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * Contact flow type condition.
   *
   * @public
   */
  ContactFlowTypeCondition?: ContactFlowTypeCondition | undefined;
}

/**
 * Filter for contact flow attributes with multiple condition types.
 *
 * @public
 */
export interface ContactFlowAttributeFilter {
  /**
   * A list of conditions which would be applied together with an OR condition.
   *
   * @public
   */
  OrConditions?: ContactFlowAttributeAndCondition[] | undefined;

  /**
   * A list of conditions which would be applied together with a AND condition.
   *
   * @public
   */
  AndCondition?: ContactFlowAttributeAndCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a tag condition, for example, `HAVE BPO = 123`.
   *
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * Contact flow type condition within attribute filter.
   *
   * @public
   */
  ContactFlowTypeCondition?: ContactFlowTypeCondition | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface ContactFlowSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;

  /**
   * Flow attribute filter for contact flow search operations.
   *
   * @public
   */
  FlowAttributeFilter?: ContactFlowAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowsResponse {
  /**
   * Information about the flows.
   *
   * @public
   */
  ContactFlows?: ContactFlow[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of flows which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * A structure of time range that you want to search results.
 *
 * @public
 */
export interface SearchContactsTimeRange {
  /**
   * The type of timestamp to search.
   *
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * The start time of the time range.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the time range.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * The timestamp condition indicating which contact timestamp should be used and how it should be filtered. It is not an actual timestamp value.
 *
 * @public
 */
export interface SearchContactsTimestampCondition {
  /**
   * Type of the timestamps to use for the filter.
   *
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * Condition of the timestamp on the contact.
   *
   * @public
   */
  ConditionType: SearchContactsTimeRangeConditionType | undefined;
}

/**
 * The criteria of the time range to additionally filter on.
 *
 * @public
 */
export interface SearchContactsAdditionalTimeRangeCriteria {
  /**
   * A structure of time range that you want to search results.
   *
   * @public
   */
  TimeRange?: SearchContactsTimeRange | undefined;

  /**
   * List of the timestamp conditions.
   *
   * @public
   */
  TimestampCondition?: SearchContactsTimestampCondition | undefined;
}

/**
 * Time range that you **additionally** want to filter on.
 *
 * > **Note:** This is different from the [SearchContactsTimeRange](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchContactsTimeRange.html) data type.
 *
 * @public
 */
export interface SearchContactsAdditionalTimeRange {
  /**
   * List of criteria of the time range to additionally filter on.
   *
   * @public
   */
  Criteria: SearchContactsAdditionalTimeRangeCriteria[] | undefined;

  /**
   * The match type combining multiple time range filters.
   *
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * A structure that defines search criteria base on words or phrases, participants in the Contact Lens conversational analytics transcript.
 *
 * @public
 */
export interface TranscriptCriteria {
  /**
   * The participant role in a transcript
   *
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * The words or phrases used to search within a transcript.
   *
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * The match type combining search criteria using multiple search texts in a transcript criteria.
   *
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * A structure that defines search criteria and matching logic to search for contacts by matching text with transcripts analyzed by Connect Customer Contact Lens.
 *
 * @public
 */
export interface Transcript {
  /**
   * The list of search criteria based on Contact Lens conversational analytics transcript.
   *
   * @public
   */
  Criteria: TranscriptCriteria[] | undefined;

  /**
   * The match type combining search criteria using multiple transcript criteria.
   *
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * A structure that defines search criteria for contacts using analysis outputs from Connect Customer Contact Lens.
 *
 * @public
 */
export interface ContactAnalysis {
  /**
   * Search criteria based on transcript analyzed by Connect Customer Contact Lens.
   *
   * @public
   */
  Transcript?: Transcript | undefined;
}

/**
 * The search criteria based on the contact name
 *
 * @public
 */
export interface NameCriteria {
  /**
   * The words or phrases used to match the contact name.
   *
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * The match type combining name search criteria using multiple search texts in a name criteria.
   *
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * The agent criteria to search for preferred agents on the routing criteria.
 *
 * @public
 */
export interface SearchableAgentCriteriaStep {
  /**
   * The identifiers of agents used in preferred agents matching.
   *
   * @public
   */
  AgentIds?: string[] | undefined;

  /**
   * The match type combining multiple agent criteria steps.
   *
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * Routing criteria of the contact to match on.
 *
 * @public
 */
export interface SearchableRoutingCriteriaStep {
  /**
   * Agent matching the routing step of the routing criteria
   *
   * @public
   */
  AgentCriteria?: SearchableAgentCriteriaStep | undefined;
}

/**
 * Routing criteria of the contact to match on.
 *
 * @public
 */
export interface SearchableRoutingCriteria {
  /**
   * The list of Routing criteria steps of the contact routing.
   *
   * @public
   */
  Steps?: SearchableRoutingCriteriaStep[] | undefined;
}

/**
 * The search criteria based on user-defined contact attribute key and values to search on.
 *
 * @public
 */
export interface SearchableContactAttributesCriteria {
  /**
   * The key containing a searchable user-defined contact attribute.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The list of values to search for within a user-defined contact attribute.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A structure that defines search criteria based on user-defined contact attributes that are configured for contact search.
 *
 * @public
 */
export interface SearchableContactAttributes {
  /**
   * The list of criteria based on user-defined contact attributes that are configured for contact search.
   *
   * @public
   */
  Criteria: SearchableContactAttributesCriteria[] | undefined;

  /**
   * The match type combining search criteria using multiple searchable contact attributes.
   *
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * The search criteria based on searchable segment attribute key and values to search on.
 *
 * @public
 */
export interface SearchableSegmentAttributesCriteria {
  /**
   * The key containing a searchable segment attribute.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The list of values to search for within a searchable segment attribute.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The search criteria based on searchable segment attributes of a contact
 *
 * @public
 */
export interface SearchableSegmentAttributes {
  /**
   * The list of criteria based on searchable segment attributes.
   *
   * @public
   */
  Criteria: SearchableSegmentAttributesCriteria[] | undefined;

  /**
   * The match type combining search criteria using multiple searchable segment attributes.
   *
   * @public
   */
  MatchType?: SearchContactsMatchType | undefined;
}

/**
 * A structure of search criteria to be used to return contacts.
 *
 * @public
 */
export interface SearchCriteria {
  /**
   * Name of the contact.
   *
   * @public
   */
  Name?: NameCriteria | undefined;

  /**
   * The identifiers of agents who handled the contacts.
   *
   * @public
   */
  AgentIds?: string[] | undefined;

  /**
   * The agent hierarchy groups of the agent at the time of handling the contact.
   *
   * @public
   */
  AgentHierarchyGroups?: AgentHierarchyGroups | undefined;

  /**
   * The list of channels associated with contacts.
   *
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * Search criteria based on analysis outputs from Connect Customer Contact Lens.
   *
   * @public
   */
  ContactAnalysis?: ContactAnalysis | undefined;

  /**
   * The list of initiation methods associated with contacts.
   *
   * @public
   */
  InitiationMethods?: ContactInitiationMethod[] | undefined;

  /**
   * The list of queue IDs associated with contacts.
   *
   * @public
   */
  QueueIds?: string[] | undefined;

  /**
   * Routing criteria for the contact.
   *
   * @public
   */
  RoutingCriteria?: SearchableRoutingCriteria | undefined;

  /**
   * Additional TimeRange used to filter contacts.
   *
   * @public
   */
  AdditionalTimeRange?: SearchContactsAdditionalTimeRange | undefined;

  /**
   * The search criteria based on user-defined contact attributes that have been configured for contact search. For more information, see [Search by custom contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/search-custom-attributes.html) in the *Connect Customer Administrator Guide*.
   *
   * > **Important:** To use `SearchableContactAttributes` in a search request, the `GetContactAttributes` action is required to perform an API request. For more information, see [https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions)Actions defined by Connect Customer.
   *
   * @public
   */
  SearchableContactAttributes?: SearchableContactAttributes | undefined;

  /**
   * The search criteria based on searchable segment attributes of a contact.
   *
   * @public
   */
  SearchableSegmentAttributes?: SearchableSegmentAttributes | undefined;

  /**
   * The list of active regions for contacts in ACGR instances.
   *
   * @public
   */
  ActiveRegions?: string[] | undefined;

  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  ContactTags?: ControlPlaneTagFilter | undefined;

  /**
   * AI Agent search criteria definitions.
   *
   * @public
   */
  AiAgents?: AiAgentsCriteria | undefined;
}

/**
 * A structure that defines the field name to sort by and a sort order.
 *
 * @public
 */
export interface Sort {
  /**
   * The name of the field on which to sort.
   *
   * @public
   */
  FieldName: SortableFieldName | undefined;

  /**
   * An ascending or descending sort.
   *
   * @public
   */
  Order: SortOrder | undefined;
}

/**
 * @public
 */
export interface SearchContactsRequest {
  /**
   * The identifier of Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Time range that you want to search results.
   *
   * @public
   */
  TimeRange: SearchContactsTimeRange | undefined;

  /**
   * The search criteria to be used to return contacts.
   *
   * @public
   */
  SearchCriteria?: SearchCriteria | undefined;

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
   * Specifies a field to sort by and a sort order.
   *
   * @public
   */
  Sort?: Sort | undefined;
}

/**
 * Information about the agent who accepted the contact.
 *
 * @public
 */
export interface ContactSearchSummaryAgentInfo {
  /**
   * The identifier of the agent who accepted the contact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The timestamp when the contact was connected to the agent.
   *
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;
}

/**
 * Information of the AI agent involved in the contact.
 *
 * @public
 */
export interface ContactSearchSummaryAiAgentInfo {
  /**
   * The unique identifier that specifies both the AI agent ID and its version number that was involved in the contact.
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

  /**
   * The use case or scenario for which the AI agent is involved in the contact. Valid values are `AgentAssistance` and `SelfService`.
   *
   * @public
   */
  AiUseCase?: AiUseCase | undefined;
}

/**
 * If this contact was queued, this contains information about the queue.
 *
 * @public
 */
export interface ContactSearchSummaryQueueInfo {
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
 * A data table search filter.
 *
 * @public
 */
export interface DataTableSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` or `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchDataTablesResponse {
  /**
   * An array of data tables matching the search criteria with the same structure as DescribeTable except Version, VersionDescription, and LockVersion are omitted.
   *
   * @public
   */
  DataTables?: DataTable[] | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The approximate number of data tables that matched the search criteria.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface EmailAddressSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * Contains information about an email address for a contact center.
 *
 * @public
 */
export interface EmailAddressMetadata {
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
   * The description of the email address.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of email address.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A list of alias configurations for this email address, showing which email addresses forward to this primary address. Each configuration contains the email address ID of an alias that forwards emails to this address.
   *
   * @public
   */
  AliasConfigurations?: AliasConfiguration[] | undefined;
}

/**
 * @public
 */
export interface SearchEmailAddressesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of email addresses matching SearchFilter and SearchCriteria
   *
   * @public
   */
  EmailAddresses?: EmailAddressMetadata[] | undefined;

  /**
   * The total number of email addresses which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface EvaluationFormSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` or `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * Information about the returned evaluation forms.
 *
 * @public
 */
export interface EvaluationFormSearchSummary {
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
   * The title of the evaluation form.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The status of the evaluation form.
   *
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * The description of the evaluation form.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * When the evaluation form was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * Who created the evaluation form.
   *
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * When the evaluation form was last changed.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Who changed the evaluation form.
   *
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * When the evaluation format was last activated.
   *
   * @public
   */
  LastActivatedTime?: Date | undefined;

  /**
   * The ID of user who last activated evaluation form.
   *
   * @public
   */
  LastActivatedBy?: string | undefined;

  /**
   * Latest version of the evaluation form.
   *
   * @public
   */
  LatestVersion: number | undefined;

  /**
   * Active version of the evaluation form.
   *
   * @public
   */
  ActiveVersion?: number | undefined;

  /**
   * Whether automated evaluation is enabled.
   *
   * @public
   */
  AutoEvaluationEnabled?: boolean | undefined;

  /**
   * The language of the evaluation form.
   *
   * @public
   */
  EvaluationFormLanguage?: EvaluationFormLanguageCode | undefined;

  /**
   * The contact interaction type for this evaluation form.
   *
   * @public
   */
  ContactInteractionType?: ContactInteractionType | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
export interface SearchEvaluationFormsResponse {
  /**
   * Information about the returned evaluation forms.
   *
   * @public
   */
  EvaluationFormSearchSummaryList?: EvaluationFormSearchSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of evaluation forms that matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * An object to specify the hours of operation override date condition.
 *
 * @public
 */
export interface DateCondition {
  /**
   * An object to specify the hours of operation override date field.
   *
   * @public
   */
  FieldName?: string | undefined;

  /**
   * An object to specify the hours of operation override date value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * An object to specify the hours of operation override date condition `comparisonType`.
   *
   * @public
   */
  ComparisonType?: DateComparisonType | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface HoursOfOperationSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationOverridesResponse {
  /**
   * Information about the hours of operations overrides.
   *
   * @public
   */
  HoursOfOperationOverrides?: HoursOfOperationOverride[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of hours of operations which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsResponse {
  /**
   * Information about the hours of operations.
   *
   * @public
   */
  HoursOfOperations?: HoursOfOperation[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of hours of operations which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to apply when searching for metrics.
 *
 * @public
 */
export interface MetricSearchFilter {
  /**
   * An object that can be used to specify tag conditions inside the `SearchFilter`. This accepts an OR of AND (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with OR operator.
   * - The inner list specifies conditions that need to be applied with AND operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchMetricsResponse {
  /**
   * The metrics that matched the search criteria.
   *
   * @public
   */
  Metrics?: MetricDefinition[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The approximate total number of metrics that matched your search criteria.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to apply when searching for notifications.
 *
 * @public
 */
export interface NotificationSearchFilter {
  /**
   * Attribute-based filters to apply to the search results.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * Summary information about a notification returned from a search operation.
 *
 * @public
 */
export interface NotificationSearchSummary {
  /**
   * The unique identifier for the notification.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The localized content of the notification.
   *
   * @public
   */
  Content?: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * The priority level of the notification.
   *
   * @public
   */
  Priority?: NotificationPriority | undefined;

  /**
   * A list of recipient Amazon Resource Names (ARNs).
   *
   * @public
   */
  Recipients?: string[] | undefined;

  /**
   * The timestamp when the notification was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the notification expires.
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
   * The timestamp when the notification was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The tags associated with the notification.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchNotificationsResponse {
  /**
   * A list of notifications matching the search criteria.
   *
   * @public
   */
  Notifications?: NotificationSearchSummary[] | undefined;

  /**
   * The token for the next set of results. If present, there are more results available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The approximate total number of notifications matching the search criteria.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesResponse {
  /**
   * Predefined attributes matched by the search criteria.
   *
   * @public
   */
  PredefinedAttributes?: PredefinedAttribute[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The approximate number of predefined attributes which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface PromptSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchPromptsResponse {
  /**
   * Information about the prompts.
   *
   * @public
   */
  Prompts?: Prompt[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of quick connects which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface QueueSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchQueuesResponse {
  /**
   * Information about the queues.
   *
   * @public
   */
  Queues?: Queue[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of queues which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface QuickConnectSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchQuickConnectsResponse {
  /**
   * Information about the quick connects.
   *
   * @public
   */
  QuickConnects?: QuickConnect[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of quick connects which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * The search criteria to be used to return tags.
 *
 * @public
 */
export interface TagSearchCondition {
  /**
   * The tag key used in the tag search condition.
   *
   * @public
   */
  tagKey?: string | undefined;

  /**
   * The tag value used in the tag search condition.
   *
   * @public
   */
  tagValue?: string | undefined;

  /**
   * The type of comparison to be made when evaluating the tag key in tag search condition.
   *
   * @public
   */
  tagKeyComparisonType?: StringComparisonType | undefined;

  /**
   * The type of comparison to be made when evaluating the tag value in tag search condition.
   *
   * @public
   */
  tagValueComparisonType?: StringComparisonType | undefined;
}

/**
 * The search criteria to be used to search tags.
 *
 * @public
 */
export interface ResourceTagsSearchCriteria {
  /**
   * The search criteria to be used to return tags.
   *
   * @public
   */
  TagSearchCondition?: TagSearchCondition | undefined;
}

/**
 * @public
 */
export interface SearchResourceTagsRequest {
  /**
   * The identifier of the Connect Customer instance. You can find the instanceId in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The list of resource types to be used to search tags from. If not provided or if any empty list is provided, this API will search from all supported resource types. Note that lowercase and - are required.
   *
   * **Supported resource types**
   *
   * - agent
   * - agent-state
   * - routing-profile
   * - standard-queue
   * - security-profile
   * - operating-hours
   * - prompt
   * - contact-flow
   * - flow- module
   * - transfer-destination (also known as quick connect)
   * - metric
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

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
   * The search criteria to be used to return tags.
   *
   * @public
   */
  SearchCriteria?: ResourceTagsSearchCriteria | undefined;
}

/**
 * A tag set contains tag key and tag value.
 *
 * @public
 */
export interface TagSet {
  /**
   * The tag key in the TagSet.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag value in the tagSet.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface SearchResourceTagsResponse {
  /**
   * A list of tags used in the Connect Customer instance.
   *
   * @public
   */
  Tags?: TagSet[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface RoutingProfileSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchRoutingProfilesResponse {
  /**
   * Information about the routing profiles.
   *
   * @public
   */
  RoutingProfiles?: RoutingProfile[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of routing profiles which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * A list of conditions which would be applied together with an `AND` condition.
 *
 * @public
 */
export interface RuleAttributeAndCondition {
  /**
   * A list of tag conditions that need to be applied with `AND` condition.
   *
   * @public
   */
  TagConditions?: TagCondition[] | undefined;
}

/**
 * An object that can be used to specify tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
 *
 * - The top level list specifies conditions that need to be applied with `OR` operator.
 * - The inner list specifies conditions that need to be applied with `AND` operator.
 *
 * @public
 */
export interface RuleAttributeFilter {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: RuleAttributeAndCondition[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndCondition?: RuleAttributeAndCondition | undefined;

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
export interface RulesSearchFilter {
  /**
   * An object that can be used to specify tag conditions inside the `SearchFilter`.
   *
   * @public
   */
  AttributeFilter?: RuleAttributeFilter | undefined;
}

/**
 * A summary of information about a rule, returned as part of the response to a `SearchRules` operation.
 *
 * @public
 */
export interface RuleSearchSummary {
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
   * A list of `ActionTypes` associated with a rule.
   *
   * @public
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * The list of capability tiers associated with the rule. Used for categorizing rules by capability (for example, `GenerativeAI`).
   *
   * @public
   */
  RuleCapabilityTiers?: RuleCapabilityTier[] | undefined;

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
   * The timestamp for when the rule was last updated.
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
export interface SearchRulesResponse {
  /**
   * Information about the rules.
   *
   * @public
   */
  Rules: RuleSearchSummary[] | undefined;

  /**
   * The total number of rules which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface SecurityProfilesSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * Information about the returned security profiles.
 *
 * @public
 */
export interface SecurityProfileSearchSummary {
  /**
   * The identifier of the security profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The organization resource identifier.
   *
   * @public
   */
  OrganizationResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the security profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the security profile.
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
   * The type of the security profile: `AWS_MANAGED` or `CUSTOMER_MANAGED`.
   *
   * @public
   */
  Type?: SecurityProfileType | undefined;
}

/**
 * @public
 */
export interface SearchSecurityProfilesResponse {
  /**
   * Information about the security profiles.
   *
   * @public
   */
  SecurityProfiles?: SecurityProfileSearchSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of security profiles which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface TestCaseSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the SearchFilter. This accepts an OR of AND (List of List) input where: Top level list specifies conditions that need to be applied with OR operator. Inner list specifies conditions that need to be applied with AND operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;
}

/**
 * @public
 */
export interface SearchTestCasesResponse {
  /**
   * Information about the test cases.
   *
   * @public
   */
  TestCases?: TestCase[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of test cases which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface UserHierarchyGroupSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the SearchFilter. This accepts an OR or AND (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchUserHierarchyGroupsResponse {
  /**
   * Information about the userHierarchyGroups.
   *
   * @public
   */
  UserHierarchyGroups?: HierarchyGroup[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of userHierarchyGroups which matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * A leaf node condition which can be used to specify a hierarchy group condition.
 *
 * @public
 */
export interface HierarchyGroupCondition {
  /**
   * The value in the hierarchy group condition.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The type of hierarchy group match.
   *
   * @public
   */
  HierarchyGroupMatchType?: HierarchyGroupMatchType | undefined;
}

/**
 * A leaf node condition which can be used to specify a ProficiencyName, ProficiencyValue and ProficiencyLimit.
 *
 * @public
 */
export interface Condition {
  /**
   * A leaf node condition which can be used to specify a string condition.
   *
   * > **Note:** The currently supported values for `FieldName` are `name` and `value`.
   *
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a numeric condition.
   *
   * @public
   */
  NumberCondition?: NumberCondition | undefined;
}

/**
 * A leaf node condition which can be used to specify a List condition to search users with attributes included in Lists like Proficiencies.
 *
 * @public
 */
export interface ListCondition {
  /**
   * The type of target list that will be used to filter the users.
   *
   * @public
   */
  TargetListType?: TargetListType | undefined;

  /**
   * A list of Condition objects which would be applied together with an AND condition.
   *
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * A list of conditions which would be applied together with an `AND` condition.
 *
 * @public
 */
export interface AttributeAndCondition {
  /**
   * A leaf node condition which can be used to specify a tag condition.
   *
   * @public
   */
  TagConditions?: TagCondition[] | undefined;

  /**
   * A leaf node condition which can be used to specify a hierarchy group condition.
   *
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * An object that can be used to specify Tag conditions or Hierarchy Group conditions inside the `SearchFilter`.
 *
 * This accepts an `OR` of `AND` (List of List) input where:
 *
 * - The top level list specifies conditions that need to be applied with `OR` operator
 * - The inner list specifies conditions that need to be applied with `AND` operator.
 *
 * > **Note:** Only one field can be populated. Maximum number of allowed Tag conditions is 25. Maximum number of allowed Hierarchy Group conditions is 20.
 *
 * @public
 */
export interface ControlPlaneUserAttributeFilter {
  /**
   * A list of conditions which would be applied together with an `OR` condition.
   *
   * @public
   */
  OrConditions?: AttributeAndCondition[] | undefined;

  /**
   * A list of conditions which would be applied together with an `AND` condition.
   *
   * @public
   */
  AndCondition?: AttributeAndCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a tag condition, for example, `HAVE BPO = 123`.
   *
   * @public
   */
  TagCondition?: TagCondition | undefined;

  /**
   * A leaf node condition which can be used to specify a hierarchy group condition.
   *
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * Filters to be applied to search results.
 *
 * @public
 */
export interface UserSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` of `AND` (List of List) input where:
   *
   * - Top level list specifies conditions that need to be applied with `OR` operator
   * - Inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  TagFilter?: ControlPlaneTagFilter | undefined;

  /**
   * An object that can be used to specify Tag conditions or Hierarchy Group conditions inside the SearchFilter.
   *
   * This accepts an `OR` of `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * > **Note:** Only one field can be populated. This object can’t be used along with TagFilter. Request can either contain TagFilter or UserAttributeFilter if SearchFilter is specified, combination of both is not supported and such request will throw AccessDeniedException.
   *
   * @public
   */
  UserAttributeFilter?: ControlPlaneUserAttributeFilter | undefined;
}

/**
 * The user's first name and last name.
 *
 * @public
 */
export interface UserIdentityInfoLite {
  /**
   * The user's first name.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The user's last name.
   *
   * @public
   */
  LastName?: string | undefined;
}

/**
 * Information about the returned users.
 *
 * @public
 */
export interface UserSearchSummary {
  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The directory identifier of the user.
   *
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * The identifier of the user's hierarchy group.
   *
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * The identifier of the user's summary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The user's first name and last name.
   *
   * @public
   */
  IdentityInfo?: UserIdentityInfoLite | undefined;

  /**
   * Contains information about the phone configuration settings for a user.
   *
   * @public
   */
  PhoneConfig?: UserPhoneConfig | undefined;

  /**
   * The identifier of the user's routing profile.
   *
   * @public
   */
  RoutingProfileId?: string | undefined;

  /**
   * The identifiers of the user's security profiles.
   *
   * @public
   */
  SecurityProfileIds?: string[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Username?: string | undefined;

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
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * Information about the users.
   *
   * @public
   */
  Users?: UserSearchSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of users who matched your search query.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Defines filters to apply when searching for views, such as tag-based filters.
 *
 * @public
 */
export interface ViewSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` or `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchViewsResponse {
  /**
   * A list of views that match the search criteria.
   *
   * @public
   */
  Views?: View[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The approximate total number of views that match the search criteria.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchVocabulariesRequest {
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
   * The current state of the custom vocabulary.
   *
   * @public
   */
  State?: VocabularyState | undefined;

  /**
   * The starting pattern of the name of the vocabulary.
   *
   * @public
   */
  NameStartsWith?: string | undefined;

  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html)
   *
   * @public
   */
  LanguageCode?: VocabularyLanguageCode | undefined;
}

/**
 * Contains summary information about the custom vocabulary.
 *
 * @public
 */
export interface VocabularySummary {
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
}

/**
 * @public
 */
export interface SearchVocabulariesResponse {
  /**
   * The list of the available custom vocabularies.
   *
   * @public
   */
  VocabularySummaryList?: VocabularySummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines filters to apply when searching for workspace associations, such as tag-based filters.
 *
 * @public
 */
export interface WorkspaceAssociationSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` or `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * Contains summary information about a workspace association with a user or routing profile.
 *
 * @public
 */
export interface WorkspaceAssociationSearchSummary {
  /**
   * The identifier of the workspace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workspace.
   *
   * @public
   */
  WorkspaceArn?: string | undefined;

  /**
   * The identifier of the associated resource (user or routing profile).
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The type of resource associated with the workspace. Valid values are: `USER` and `ROUTING_PROFILE`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The name of the associated resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface SearchWorkspaceAssociationsResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of workspace associations that match the search criteria.
   *
   * @public
   */
  WorkspaceAssociations?: WorkspaceAssociationSearchSummary[] | undefined;

  /**
   * The approximate total number of workspace associations that match the search criteria.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Defines filters to apply when searching for workspaces, such as tag-based filters.
 *
 * @public
 */
export interface WorkspaceSearchFilter {
  /**
   * An object that can be used to specify Tag conditions inside the `SearchFilter`. This accepts an `OR` or `AND` (List of List) input where:
   *
   * - The top level list specifies conditions that need to be applied with `OR` operator.
   * - The inner list specifies conditions that need to be applied with `AND` operator.
   *
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * Contains summary information about a workspace returned from a search operation.
 *
 * @public
 */
export interface WorkspaceSearchSummary {
  /**
   * The unique identifier of the workspace.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The visibility setting of the workspace.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

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

  /**
   * The Amazon Resource Name (ARN) of the workspace.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp when the workspace was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The tags associated with the workspace.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchWorkspacesResponse {
  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of workspaces that match the search criteria.
   *
   * @public
   */
  Workspaces?: WorkspaceSearchSummary[] | undefined;

  /**
   * The approximate total number of workspaces that match the search criteria.
   *
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * Chat integration event containing payload to perform different chat actions such as:
 *
 * - Sending a chat message
 * - Sending a chat event, such as typing
 * - Disconnecting from a chat
 *
 * @public
 */
export interface ChatEvent {
  /**
   * Type of chat integration event.
   *
   * @public
   */
  Type: ChatEventType | undefined;

  /**
   * Type of content. This is required when `Type` is `MESSAGE` or `EVENT`.
   *
   * - For allowed message content types, see the `ContentType` parameter in the [SendMessage](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html) topic in the *Connect Customer Participant Service API Reference*.
   * - For allowed event content types, see the `ContentType` parameter in the [SendEvent](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html) topic in the *Connect Customer Participant Service API Reference*.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Content of the message or event. This is required when `Type` is `MESSAGE` and for certain `ContentTypes` when `Type` is `EVENT`.
   *
   * - For allowed message content, see the `Content` parameter in the [SendMessage](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html) topic in the *Connect Customer Participant Service API Reference*.
   * - For allowed event content, see the `Content` parameter in the [SendEvent](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html) topic in the *Connect Customer Participant Service API Reference*.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * The details of the participant, including their display name.
 *
 * @public
 */
export interface ParticipantDetails {
  /**
   * Display name of the participant.
   *
   * @public
   */
  DisplayName: string | undefined;
}

/**
 * The streaming configuration, such as the Amazon SNS streaming endpoint.
 *
 * @public
 */
export interface ChatStreamingConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used to publish real-time message streaming for chat conversations.
   *
   * @public
   */
  StreamingEndpointArn: string | undefined;
}

/**
 * Payload of chat properties to apply when starting a new contact.
 *
 * @public
 */
export interface NewSessionDetails {
  /**
   * The supported chat message content types. Supported types are `text/plain`, `text/markdown`, `application/json`, `application/vnd.amazonaws.connect.message.interactive`, and `application/vnd.amazonaws.connect.message.interactive.response`.
   *
   * Content types must always contain `text/plain`. You can then put any other supported type in the list. For example, all the following lists are valid because they contain `text/plain`: `[text/plain, text/markdown, application/json]`, `[text/markdown, text/plain]`, `[text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response]`.
   *
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * The details of the participant, including their display name.
   *
   * @public
   */
  ParticipantDetails?: ParticipantDetails | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes. They can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The streaming configuration, such as the Amazon SNS streaming endpoint.
   *
   * @public
   */
  StreamingConfiguration?: ChatStreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface SendChatIntegrationEventRequest {
  /**
   * External identifier of chat customer participant, used in part to uniquely identify a chat. For SMS, this is the E164 phone number of the chat customer participant.
   *
   * @public
   */
  SourceId: string | undefined;

  /**
   * Chat system identifier, used in part to uniquely identify chat. This is associated with the Connect Customer instance and flow to be used to start chats. For Server Migration Service, this is the phone number destination of inbound Server Migration Service messages represented by an Amazon Web Services End User Messaging phone number ARN.
   *
   * @public
   */
  DestinationId: string | undefined;

  /**
   * Classification of a channel. This is used in part to uniquely identify chat.
   *
   * Valid value: `["connect:sms", connect:"WhatsApp"]`
   *
   * @public
   */
  Subtype?: string | undefined;

  /**
   * Chat integration event payload
   *
   * @public
   */
  Event: ChatEvent | undefined;

  /**
   * Contact properties to apply when starting a new chat. If the integration event is handled with an existing chat, this is ignored.
   *
   * @public
   */
  NewSessionDetails?: NewSessionDetails | undefined;
}

/**
 * @public
 */
export interface SendChatIntegrationEventResponse {
  /**
   * Identifier of chat contact used to handle integration event. This may be null if the integration event is not valid without an already existing chat contact.
   *
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * Whether handling the integration event resulted in creating a new chat or acting on existing chat.
   *
   * @public
   */
  NewChatCreated?: boolean | undefined;
}

/**
 * Contains information about a source or destination email address.
 *
 * @public
 */
export interface EmailAddressInfo {
  /**
   * The email address, including the domain.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The display name of email address.
   *
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * Information about the additional recipients of outbound email.
 *
 * @public
 */
export interface OutboundAdditionalRecipients {
  /**
   * Information about the **additional** CC email address recipients. Email recipients are limited to 50 total addresses: 1 required recipient in the [DestinationEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_SendOutboundEmail.html#API_SendOutboundEmail_RequestBody) field and up to 49 recipients in the 'CcEmailAddresses' field.
   *
   * @public
   */
  CcEmailAddresses?: EmailAddressInfo[] | undefined;
}

/**
 * Information about the raw email body content.
 *
 * @public
 */
export interface OutboundRawMessage {
  /**
   * The email subject.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The email message body.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * Type of content, that is, `text/plain` or `text/html`.
   *
   * @public
   */
  ContentType: string | undefined;
}

/**
 * Information about the template attributes.
 *
 * @public
 */
export interface TemplateAttributes {
  /**
   * An object that specifies the custom attributes values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template.
   *
   * @public
   */
  CustomAttributes?: Record<string, string> | undefined;

  /**
   * An object that specifies the customer profile attributes values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template.
   *
   * @public
   */
  CustomerProfileAttributes?: string | undefined;
}

/**
 * Information about template message configuration.
 *
 * @public
 */
export interface TemplatedMessageConfig {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  KnowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template Id.
   *
   * @public
   */
  MessageTemplateId: string | undefined;

  /**
   * Information about template attributes, that is, CustomAttributes or CustomerProfileAttributes.
   *
   * @public
   */
  TemplateAttributes: TemplateAttributes | undefined;
}

/**
 * Information about email body content.
 *
 * @public
 */
export interface OutboundEmailContent {
  /**
   * The message source type, that is, `RAW` or `TEMPLATE`.
   *
   * @public
   */
  MessageSourceType: OutboundMessageSourceType | undefined;

  /**
   * Information about template message configuration.
   *
   * @public
   */
  TemplatedMessageConfig?: TemplatedMessageConfig | undefined;

  /**
   * The raw email body content.
   *
   * @public
   */
  RawMessage?: OutboundRawMessage | undefined;
}

/**
 * Information about the campaign.
 *
 * @public
 */
export interface SourceCampaign {
  /**
   * A unique identifier for a campaign.
   *
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * A unique identifier for a each request part of same campaign.
   *
   * @public
   */
  OutboundRequestId?: string | undefined;
}

/**
 * @public
 */
export interface SendOutboundEmailRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The email address to be used for sending email.
   *
   * @public
   */
  FromEmailAddress: EmailAddressInfo | undefined;

  /**
   * The email address to send the email to.
   *
   * @public
   */
  DestinationEmailAddress: EmailAddressInfo | undefined;

  /**
   * The additional recipients address of the email in CC.
   *
   * @public
   */
  AdditionalRecipients?: OutboundAdditionalRecipients | undefined;

  /**
   * The email message body to be sent to the newly created email.
   *
   * @public
   */
  EmailMessage: OutboundEmailContent | undefined;

  /**
   * Denotes the class of traffic.
   *
   * > **Note:** Only the CAMPAIGN traffic type is supported.
   *
   * @public
   */
  TrafficType: TrafficType | undefined;

  /**
   * A Campaign object need for Campaign traffic type.
   *
   * @public
   */
  SourceCampaign?: SourceCampaign | undefined;

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
export interface SendOutboundEmailResponse {}

/**
 * Configuration for the recommender used to generate personalized recommendations included in an outbound web notification.
 *
 * @public
 */
export interface RecommenderConfig {
  /**
   * The name of the Amazon Personalize domain that hosts the recommender.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender used to generate the recommendations.
   *
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * A map of contextual key-value pairs supplied to the recommender to influence the recommendations returned.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * Optional attributes used to populate the content of an outbound web notification, such as recommender configuration for personalized content.
 *
 * @public
 */
export interface ContentAttributes {
  /**
   * Configuration for the recommender used to generate personalized recommendations for the notification content.
   *
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;
}

/**
 * The content of an outbound web notification, including the notification type, the view to render, and any optional attributes used to populate the view.
 *
 * @public
 */
export interface WebNotificationContent {
  /**
   * The type of web notification to send.
   *
   * @public
   */
  Type: NotificationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the view to render for the notification.
   *
   * @public
   */
  ViewArn?: string | undefined;

  /**
   * Optional attributes used to populate the notification content, such as recommender configuration for personalized content.
   *
   * @public
   */
  Attributes?: ContentAttributes | undefined;
}

/**
 * The destination for an outbound web notification, specifying the communication widget that delivers the notification and the customer profile of the recipient.
 *
 * @public
 */
export interface WidgetDestination {
  /**
   * The identifier of the communication widget that delivers the notification to the customer's browser.
   *
   * @public
   */
  WidgetId: string | undefined;

  /**
   * The identifier of the customer profile associated with the browser session that should receive the notification.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * The source of an outbound web notification. Identifies the campaign and outbound request that triggered the notification.
 *
 * @public
 */
export interface WebNotificationSource {
  /**
   * Information about the campaign that triggered the web notification, including the campaign identifier and outbound request identifier.
   *
   * @public
   */
  SourceCampaign: SourceCampaign | undefined;
}

/**
 * @public
 */
export interface SendOutboundWebNotificationRequest {
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
   * A unique identifier for the customer's web browser instance to which the notification is being sent.
   *
   * @public
   */
  BrowserId: string | undefined;

  /**
   * A unique identifier for the customer's web session to which the notification is being sent.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The timestamp, in Unix epoch time format, at which the web notification expires. After this time, the notification is no longer delivered to the customer's browser.
   *
   * @public
   */
  ExpiresAt: Date | undefined;

  /**
   * The source of the web notification. A `SourceCampaign` object identifies the campaign and outbound request that triggered this notification.
   *
   * @public
   */
  Source: WebNotificationSource | undefined;

  /**
   * The destination for the web notification, specifying the communication widget that delivers the notification and the customer profile of the recipient.
   *
   * @public
   */
  Destination: WidgetDestination | undefined;

  /**
   * The content of the web notification, including the notification type, the view to render, and any optional attributes used to populate it.
   *
   * @public
   */
  Content: WebNotificationContent | undefined;
}

/**
 * @public
 */
export interface SendOutboundWebNotificationResponse {}

/**
 * A chat message.
 *
 * @public
 */
export interface ChatMessage {
  /**
   * The type of the content. Supported types are `text/plain`, `text/markdown`, `application/json`, and `application/vnd.amazonaws.connect.message.interactive.response`.
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * The content of the chat message. Maximum of 16,384 bytes for all content types (`text/plain`, `text/markdown`, `application/json`, and `application/vnd.amazonaws.connect.message.interactive.response`).
   *
   * Some messaging channels enforce lower limits. For channel-specific message size limits, see [Chat message size limits by channel](https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html#chat-message-size-limits) in the *Amazon Connect Customer Administrator Guide*.
   *
   * @public
   */
  Content: string | undefined;
}

/**
 * Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see [Enable persistent chat](https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html).
 *
 * @public
 */
export interface PersistentChat {
  /**
   * The contactId that is used for rehydration depends on the rehydration type. RehydrationType is required for persistent chat.
   *
   * - `ENTIRE_PAST_SESSION`: Rehydrates a chat from the most recently terminated past chat contact of the specified past ended chat session. To use this type, provide the `initialContactId` of the past ended chat session in the `sourceContactId` field. In this type, Connect Customer determines the most recent chat contact on the specified chat session that has ended, and uses it to start a persistent chat.
   * - `FROM_SEGMENT`: Rehydrates a chat from the past chat contact that is specified in the `sourceContactId` field.
   *
   * The actual contactId used for rehydration is provided in the response of this API.
   *
   * @public
   */
  RehydrationType?: RehydrationType | undefined;

  /**
   * The contactId from which a persistent chat session must be started.
   *
   * @public
   */
  SourceContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartAssistantContactRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The AI agent configuration for this contact.
   *
   * @public
   */
  AiAgent: AiAgentInput | undefined;

  /**
   * The display name and other details that identify the chat participant.
   *
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * The initial message to send to the newly created chat.
   *
   * @public
   */
  InitialMessage?: ChatMessage | undefined;

  /**
   * A map of key-value pairs to associate with the contact. We make these attributes available to flows as standard contact attributes.
   *
   * You can provide up to 32,768 UTF-8 bytes across all key-value pairs for each contact.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration that enables persistent chat. For more information about persistent chat and its use cases, see [Enable persistent chat](https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html).
   *
   * @public
   */
  PersistentChat?: PersistentChat | undefined;

  /**
   * The identifier of an Connect Customer contact related to the new assistant contact.
   *
   * > **Note:** You cannot provide both `RelatedContactId` and `PersistentChat`.
   *
   * @public
   */
  RelatedContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartAssistantContactResponse {
  /**
   * The identifier of the contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The identifier of the chat participant. The participant identifier remains the same throughout the chat lifecycle.
   *
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * The token that the chat participant uses with the [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) operation. The token remains valid for the lifetime of the chat participant.
   *
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * The identifier of the contact from which the chat continues, returned only for persistent chats.
   *
   * @public
   */
  ContinuedFromContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartAttachedFileUploadRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

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
   * Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is 300.
   *
   * @public
   */
  UrlExpiryInSeconds?: number | undefined;

  /**
   * The use case for the file.
   *
   * > **Important:** Only `ATTACHMENTS` are supported.
   *
   * @public
   */
  FileUseCaseType: FileUseCaseType | undefined;

  /**
   * The resource to which the attached file is (being) uploaded to. The supported resources are [Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html), [Email](https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html), and [Task](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-getting-started-tasks.html).
   *
   * > **Note:** This value must be a valid ARN.
   *
   * @public
   */
  AssociatedResourceArn: string | undefined;

  /**
   * Represents the identity that created the file.
   *
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, `\{ "Tags": \{"key1":"value1", "key2":"value2"\} \}`.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Fields required when uploading an attached file.
 *
 * @public
 */
export interface UploadUrlMetadata {
  /**
   * A pre-signed S3 URL that should be used for uploading the attached file.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format: `yyyy-MM-ddThh:mm:ss.SSSZ`. For example, `2019-11-08T02:41:28.172Z`.
   *
   * @public
   */
  UrlExpiry?: string | undefined;

  /**
   * A map of headers that should be provided when uploading the attached file.
   *
   * @public
   */
  HeadersToInclude?: Record<string, string> | undefined;
}

/**
 * Response from StartAttachedFileUpload API.
 * @public
 */
export interface StartAttachedFileUploadResponse {
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
   * The current status of the attached file.
   *
   * @public
   */
  FileStatus?: FileStatusType | undefined;

  /**
   * Represents the identity that created the file.
   *
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * The headers to be provided while uploading the file to the URL.
   *
   * @public
   */
  UploadUrlMetadata?: UploadUrlMetadata | undefined;
}

/**
 * The configuration of the participant.
 *
 * @public
 */
export interface ParticipantConfiguration {
  /**
   * The mode in which responses should be sent to the participant.
   *
   * @public
   */
  ResponseMode?: ResponseMode | undefined;
}

/**
 * The credentials that a chat participant uses to connect to the Connect Customer Participant Service.
 *
 * @public
 */
export interface ConnectionCredentials {
  /**
   * The connection token used by the chat participant to call the Connect Customer Participant Service.
   *
   * @public
   */
  ConnectionToken?: string | undefined;

  /**
   * The expiration of the token. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  Expiry?: string | undefined;
}

/**
 * The websocket that a chat participant uses to receive messages and events for the chat.
 *
 * @public
 */
export interface Websocket {
  /**
   * The URL of the websocket.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The expiration of the websocket URL. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.
   *
   * @public
   */
  ConnectionExpiry?: string | undefined;
}

/**
 * @public
 */
export interface StartChatContactResponse {
  /**
   * The identifier of this contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The identifier for a chat participant. The participantId for a chat participant is the same throughout the chat lifecycle.
   *
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * The token used by the chat participant to call [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html). The participant token is valid for the lifetime of a chat participant.
   *
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * The contactId from which a persistent chat session is started. This field is populated only for persistent chats.
   *
   * @public
   */
  ContinuedFromContactId?: string | undefined;

  /**
   * The connection credentials for the chat participant. Returned only when the request includes `CONNECTION_CREDENTIALS` in `ConnectionTypes`.
   *
   * @public
   */
  ConnectionCredentials?: ConnectionCredentials | undefined;

  /**
   * The websocket for the chat participant. Returned only when the request includes `WEBSOCKET` in `ConnectionTypes`.
   *
   * @public
   */
  Websocket?: Websocket | undefined;

  /**
   * The identifier of the streaming configuration enabled with the chat. Returned only when the request sets `ChatStreamingConfiguration`. Use this value to call [StopContactStreaming](https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactStreaming.html).
   *
   * @public
   */
  StreamingId?: string | undefined;
}

/**
 * The language configuration for conversational analytics.
 *
 * @public
 */
export interface LanguageConfiguration {
  /**
   * The language locale setting for conversational analytics.
   *
   * @public
   */
  LanguageLocale?: string | undefined;
}

/**
 * The redaction configuration for conversational analytics.
 *
 * @public
 */
export interface RedactionConfiguration {
  /**
   * Controls whether redaction is applied to the analytics output. Valid values: `Enable` | `Disable`.
   *
   * @public
   */
  Behavior: Behavior | undefined;

  /**
   * The redaction output policy that determines which versions of the transcript are stored. Valid values: `None` | `RedactedOnly` | `RedactedAndOriginal`.
   *
   * @public
   */
  Policy: Policy | undefined;

  /**
   * The list of PII entity types to redact from the transcript (for example, `NAME`, `ADDRESS`, `CREDIT_DEBIT_NUMBER`).
   *
   * @public
   */
  Entities?: string[] | undefined;

  /**
   * The masking mode that determines how redacted content is replaced in the output. Valid values: `PII` (replaces with the literal string [PII]) | `EntityType` (replaces with the entity type name, for example [NAME]).
   *
   * @public
   */
  MaskMode?: MaskMode | undefined;
}

/**
 * The rules configuration for conversational analytics. Controls whether Contact Lens rules are evaluated against the analytics output.
 *
 * @public
 */
export interface RulesConfiguration {
  /**
   * Controls whether Contact Lens rules are evaluated for the contact. Valid values: `Enable` | `Disable`.
   *
   * @public
   */
  Behavior?: Behavior | undefined;
}

/**
 * The sentiment configuration for conversational analytics.
 *
 * @public
 */
export interface SentimentConfiguration {
  /**
   * Controls whether sentiment analysis is applied to the analytics output. Valid values: `Enable` | `Disable`.
   *
   * @public
   */
  Behavior: Behavior | undefined;
}

/**
 * The summary configuration for conversational analytics.
 *
 * @public
 */
export interface SummaryConfiguration {
  /**
   * The summary modes that determine what type of summarization is generated. Valid values: `PostContact` | `AutomatedInteraction` | `ContactChain`.
   *
   * @public
   */
  SummaryModes: SummaryMode[] | undefined;
}

/**
 * The configuration for conversational analytics.
 *
 * @public
 */
export interface AnalyticsConfiguration {
  /**
   * The language configuration for conversational analytics.
   *
   * @public
   */
  LanguageConfiguration: LanguageConfiguration | undefined;

  /**
   * The redaction configuration for conversational analytics.
   *
   * @public
   */
  RedactionConfiguration: RedactionConfiguration | undefined;

  /**
   * The sentiment configuration for conversational analytics.
   *
   * @public
   */
  SentimentConfiguration: SentimentConfiguration | undefined;

  /**
   * The summary configuration for conversational analytics.
   *
   * @public
   */
  SummaryConfiguration: SummaryConfiguration | undefined;

  /**
   * The rules configuration for conversational analytics.
   *
   * @public
   */
  RulesConfiguration: RulesConfiguration | undefined;
}

/**
 * @public
 */
export interface StartContactConversationalAnalyticsJobRequest {
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
   * The analytics modes to run for the contact. Valid values: `PostContact`.
   *
   * @public
   */
  AnalyticsModes: AnalyticsMode[] | undefined;

  /**
   * The configuration for the conversational analytics job.
   *
   * @public
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

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
export interface StartContactConversationalAnalyticsJobResponse {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * Configuration information about automated evaluations.
 *
 * @public
 */
export interface AutoEvaluationConfiguration {
  /**
   * Whether automated evaluations are enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface StartContactEvaluationRequest {
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
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * Whether automated evaluations are enabled.
   *
   * @public
   */
  AutoEvaluationConfiguration?: AutoEvaluationConfiguration | undefined;

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
export interface StartContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface StartContactMediaProcessingRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda processor. You can find the Amazon Resource Name of the lambda in the lambda console.
   *
   * @public
   */
  ProcessorArn?: string | undefined;

  /**
   * The desired behavior for failed message processing.
   *
   * @public
   */
  FailureMode?: ContactMediaProcessingFailureMode | undefined;
}

/**
 * @public
 */
export interface StartContactMediaProcessingResponse {}

/**
 * Contains information about the recording configuration settings.
 *
 * @public
 */
export interface VoiceRecordingConfiguration {
  /**
   * Identifies which track is being recorded.
   *
   * @public
   */
  VoiceRecordingTrack?: VoiceRecordingTrack | undefined;

  /**
   * Identifies which IVR track is being recorded.
   *
   * One and only one of the track configurations should be presented in the request.
   *
   * @public
   */
  IvrRecordingTrack?: IvrRecordingTrack | undefined;
}

/**
 * @public
 */
export interface StartContactRecordingRequest {
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

  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
   *
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * The person being recorded.
   *
   * @public
   */
  VoiceRecordingConfiguration: VoiceRecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface StartContactRecordingResponse {}

/**
 * @public
 */
export interface StartContactStreamingRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The streaming configuration, such as the Amazon SNS streaming endpoint.
   *
   * @public
   */
  ChatStreamingConfiguration: ChatStreamingConfiguration | undefined;

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
export interface StartContactStreamingResponse {
  /**
   * The identifier of the streaming configuration enabled.
   *
   * @public
   */
  StreamingId: string | undefined;
}

/**
 * Information about the additional TO and CC recipients of an inbound email contact.
 *
 * > **Note:** You can include up to 50 email addresses in total, distributed across [DestinationEmailAddress](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartEmailContact.html#API_StartEmailContact_RequestBody), `ToAddresses`, and `CcAddresses`. This total must include one required `DestinationEmailAddress`. You can then specify up to 49 addresses allocated across `ToAddresses` and `CcAddresses` as needed.
 *
 * @public
 */
export interface InboundAdditionalRecipients {
  /**
   * The **additional** recipients information present in to list. You must have 1 required recipient (`DestinationEmailAddress`). You can then specify up to 49 additional recipients (across `ToAddresses` and `CcAddresses`), for a total of 50 recipients.
   *
   * @public
   */
  ToAddresses?: EmailAddressInfo[] | undefined;

  /**
   * The **additional** recipients information present in cc list. You must have 1 required recipient (`DestinationEmailAddress`). You can then specify up to 49 additional recipients (across `ToAddresses` and `CcAddresses`), for a total of 50 recipients.
   *
   * @public
   */
  CcAddresses?: EmailAddressInfo[] | undefined;
}

/**
 * Information about the email attachment files.
 *
 * @public
 */
export interface EmailAttachment {
  /**
   * A case-sensitive name of the attached file being uploaded.
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * The pre-signed URLs for the S3 bucket where the email attachment is stored.
   *
   * @public
   */
  S3Url: string | undefined;
}

/**
 * Information about the raw email body content.
 *
 * @public
 */
export interface InboundRawMessage {
  /**
   * The email subject.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The email message body.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * Type of content, that is, `text/plain` or `text/html`.
   *
   * @public
   */
  ContentType: string | undefined;

  /**
   * Headers present in inbound email.
   *
   * @public
   */
  Headers?: Partial<Record<EmailHeaderType, string>> | undefined;
}

/**
 * Information about email body content.
 *
 * @public
 */
export interface InboundEmailContent {
  /**
   * The message source type, that is, `RAW`.
   *
   * @public
   */
  MessageSourceType: InboundMessageSourceType | undefined;

  /**
   * The raw email body content.
   *
   * @public
   */
  RawMessage?: InboundRawMessage | undefined;
}

/**
 * @public
 */
export interface StartEmailContactResponse {
  /**
   * The identifier of this contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartEvaluationFormValidationRequest {
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
   * The version of the evaluation form to validate.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface StartEvaluationFormValidationResponse {
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
 * @public
 */
export interface StartOutboundChatContactResponse {
  /**
   * The identifier of this contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartOutboundEmailContactRequest {
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
   * The email address associated with the Connect Customer instance.
   *
   * @public
   */
  FromEmailAddress?: EmailAddressInfo | undefined;

  /**
   * The email address of the customer.
   *
   * @public
   */
  DestinationEmailAddress: EmailAddressInfo | undefined;

  /**
   * The additional recipients address of email in CC.
   *
   * @public
   */
  AdditionalRecipients?: OutboundAdditionalRecipients | undefined;

  /**
   * The email message body to be sent to the newly created email.
   *
   * @public
   */
  EmailMessage: OutboundEmailContent | undefined;

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
export interface StartOutboundEmailContactResponse {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * Configuration of the answering machine detection.
 *
 * @public
 */
export interface AnswerMachineDetectionConfig {
  /**
   * The flag to indicate if answer machine detection analysis needs to be performed for a voice call. If set to `true`, `TrafficType` must be set as `CAMPAIGN`.
   *
   * @public
   */
  EnableAnswerMachineDetection?: boolean | undefined;

  /**
   * Wait for the answering machine prompt.
   *
   * @public
   */
  AwaitAnswerMachinePrompt?: boolean | undefined;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactRequest {
  /**
   * The name of a voice contact that is shown to an agent in the Contact Control Panel (CCP).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the voice contact that appears in the agent's snapshot in the CCP logs. For more information about CCP logs, see [Download and review CCP logs](https://docs.aws.amazon.com/connect/latest/adminguide/download-ccp-logs.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Contacts can have the following reference types at the time of creation: `URL` | `NUMBER` | `STRING` | `DATE` | `EMAIL`. `ATTACHMENT` is not a supported reference type during voice contact creation.
   *
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * The `contactId` that is related to this contact. Linking voice, task, or chat by using `RelatedContactID` copies over contact attributes from the related contact to the new contact. All updates to user-defined attributes in the new contact are limited to the individual contact ID. There are no limits to the number of contacts that can be linked by using `RelatedContactId`.
   *
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * The phone number of the customer, in E.164 format.
   *
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * The identifier of the flow for the outbound call. To see the ContactFlowId in the Connect Customer admin website, on the navigation menu go to **Routing**, **Contact Flows**. Choose the flow. On the flow page, under the name of the flow, choose **Show additional flow information**. The ContactFlowId is the last part of the ARN, shown here in bold:
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
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/). The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The phone number associated with the Connect Customer instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   *
   * @public
   */
  SourcePhoneNumber?: string | undefined;

  /**
   * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the flow is used. If you do not specify a queue, you must specify a source phone number.
   *
   * @public
   */
  QueueId?: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Connect Customer attributes, and can be accessed in flows just like any other contact attributes.
   *
   * There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * Configuration of the answering machine detection for this outbound call.
   *
   * @public
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig | undefined;

  /**
   * The campaign identifier of the outbound communication.
   *
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * Denotes the class of traffic. Calls with different traffic types are handled differently by Connect Customer. The default value is `GENERAL`. Use `CAMPAIGN` if `EnableAnswerMachineDetection` is set to `true`. For all other cases, use `GENERAL`.
   *
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * Information about the outbound strategy.
   *
   * @public
   */
  OutboundStrategy?: OutboundStrategy | undefined;

  /**
   * The maximum time the outbound call will wait for the destination to answer the call, in seconds
   *
   * @public
   */
  RingTimeoutInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactResponse {
  /**
   * The identifier of this contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartScreenSharingRequest {
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
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface StartScreenSharingResponse {}

/**
 * Information about the task attachment files.
 *
 * @public
 */
export interface TaskAttachment {
  /**
   * A case-sensitive name of the attached file being uploaded.
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * The pre-signed URLs for the S3 bucket where the task attachment is stored.
   *
   * @public
   */
  S3Url: string | undefined;
}

/**
 * @public
 */
export interface StartTaskContactResponse {
  /**
   * The identifier of this contact within the Connect Customer instance.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartTestCaseExecutionRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case to execute.
   *
   * @public
   */
  TestCaseId: string | undefined;

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
export interface StartTestCaseExecutionResponse {
  /**
   * The identifier of the test case execution.
   *
   * @public
   */
  TestCaseExecutionId?: string | undefined;

  /**
   * The identifier of the test case resource that was executed.
   *
   * @public
   */
  TestCaseId?: string | undefined;

  /**
   * The status of a test case execution.
   *
   * @public
   */
  Status?: TestCaseExecutionStatus | undefined;
}

/**
 * The attendee information, including attendee ID and join token.
 *
 * @public
 */
export interface Attendee {
  /**
   * The Amazon Chime SDK attendee ID.
   *
   * @public
   */
  AttendeeId?: string | undefined;

  /**
   * The join token used by the Amazon Chime SDK attendee.
   *
   * @public
   */
  JoinToken?: string | undefined;
}

/**
 * A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.
 *
 * @public
 */
export interface MediaPlacement {
  /**
   * The audio host URL.
   *
   * @public
   */
  AudioHostUrl?: string | undefined;

  /**
   * The audio fallback URL.
   *
   * @public
   */
  AudioFallbackUrl?: string | undefined;

  /**
   * The signaling URL.
   *
   * @public
   */
  SignalingUrl?: string | undefined;

  /**
   * The turn control URL.
   *
   * @public
   */
  TurnControlUrl?: string | undefined;

  /**
   * The event ingestion URL to which you send client meeting events.
   *
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * Has audio-specific configurations as the operating parameter for Echo Reduction.
 *
 * @public
 */
export interface AudioFeatures {
  /**
   * Makes echo reduction available to clients who connect to the meeting.
   *
   * @public
   */
  EchoReduction?: MeetingFeatureStatus | undefined;
}

/**
 * The configuration settings of the features available to a meeting.
 *
 * @public
 */
export interface MeetingFeaturesConfiguration {
  /**
   * The configuration settings for the audio features available to a meeting.
   *
   * @public
   */
  Audio?: AudioFeatures | undefined;
}

/**
 * A meeting created using the Amazon Chime SDK.
 *
 * @public
 */
export interface Meeting {
  /**
   * The Amazon Web Services Region in which you create the meeting.
   *
   * @public
   */
  MediaRegion?: string | undefined;

  /**
   * The media placement for the meeting.
   *
   * @public
   */
  MediaPlacement?: MediaPlacement | undefined;

  /**
   * The configuration settings of the features available to a meeting.
   *
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration | undefined;

  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId?: string | undefined;
}

/**
 * Information required to join the call.
 *
 * @public
 */
export interface ConnectionData {
  /**
   * The attendee information, including attendee ID and join token.
   *
   * @public
   */
  Attendee?: Attendee | undefined;

  /**
   * A meeting created using the Amazon Chime SDK.
   *
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface StartWebRTCContactResponse {
  /**
   * Information required for the client application (mobile application or website) to connect to the call.
   *
   * @public
   */
  ConnectionData?: ConnectionData | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The identifier for a contact participant. The `ParticipantId` for a contact participant is the same throughout the contact lifecycle.
   *
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * The token used by the contact participant to call the [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) API. The participant token is valid for the lifetime of a contact participant.
   *
   * @public
   */
  ParticipantToken?: string | undefined;
}

/**
 * Contains details about why a contact was disconnected. Only Connect Customer outbound campaigns can provide this field.
 *
 * @public
 */
export interface DisconnectReason {
  /**
   * A code that indicates how the contact was terminated.
   *
   * @public
   */
  Code?: string | undefined;
}

/**
 * @public
 */
export interface StopContactRequest {
  /**
   * The ID of the contact.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The reason a contact can be disconnected. Only Connect Customer outbound campaigns can provide this field. For a list and description of all the possible disconnect reasons by channel (including outbound campaign voice contacts) see DisconnectReason under [ContactTraceRecord](https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  DisconnectReason?: DisconnectReason | undefined;
}

/**
 * @public
 */
export interface StopContactResponse {}

/**
 * @public
 */
export interface StopContactMediaProcessingRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The identifier of the contact.
   *
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface StopContactMediaProcessingResponse {}

/**
 * @public
 */
export interface StopContactRecordingRequest {
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

  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
   *
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * The type of recording being operated on.
   *
   * @public
   */
  ContactRecordingType?: ContactRecordingType | undefined;
}

/**
 * @public
 */
export interface StopContactRecordingResponse {}

/**
 * @public
 */
export interface StopContactStreamingRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the contact. This is the identifier of the contact that is associated with the first interaction with the contact center.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier of the streaming configuration enabled.
   *
   * @public
   */
  StreamingId: string | undefined;
}

/**
 * @public
 */
export interface StopContactStreamingResponse {}

/**
 * @public
 */
export interface StopTestCaseExecutionRequest {
  /**
   * The identifier of the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the test case execution to stop.
   *
   * @public
   */
  TestCaseExecutionId: string | undefined;

  /**
   * The identifier of the test case.
   *
   * @public
   */
  TestCaseId: string | undefined;

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
export interface StopTestCaseExecutionResponse {}

/**
 * Information about input answers for a contact evaluation.
 *
 * @public
 */
export interface EvaluationAnswerInput {
  /**
   * The value for an answer in a contact evaluation.
   *
   * @public
   */
  Value?: EvaluationAnswerData | undefined;
}

/**
 * Represents the entity that performed the action on the evaluation.
 *
 * @public
 */
export type EvaluatorUserUnion =
  | EvaluatorUserUnion.ConnectUserArnMember
  | EvaluatorUserUnion.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorUserUnion {
  /**
   * Represents the Connect Customer ARN of the user.
   *
   * @public
   */
  export interface ConnectUserArnMember {
    ConnectUserArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ConnectUserArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ConnectUserArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SubmitContactEvaluationRequest {
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

  /**
   * A map of question identifiers to answer value.
   *
   * @public
   */
  Answers?: Record<string, EvaluationAnswerInput> | undefined;

  /**
   * A map of question identifiers to note value.
   *
   * @public
   */
  Notes?: Record<string, EvaluationNote> | undefined;

  /**
   * The ID of the user who submitted the contact evaluation.
   *
   * @public
   */
  SubmittedBy?: EvaluatorUserUnion | undefined;
}

/**
 * @public
 */
export interface SubmitContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface SuspendContactRecordingRequest {
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

  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
   *
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * The type of recording being operated on.
   *
   * @public
   */
  ContactRecordingType?: ContactRecordingType | undefined;
}

/**
 * @public
 */
export interface SuspendContactRecordingResponse {}

/**
 * @public
 */
export interface TagContactRequest {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The tags to be assigned to the contact resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * > **Note:** Authorization is not supported by this tag.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagContactResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TransferContactRequest {
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
   * The identifier for the queue.
   *
   * @public
   */
  QueueId?: string | undefined;

  /**
   * The identifier for the user. This can be the ID or the ARN of the user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The identifier of the flow.
   *
   * @public
   */
  ContactFlowId: string | undefined;

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
export interface TransferContactResponse {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the contact.
   *
   * @public
   */
  ContactArn?: string | undefined;
}

/**
 * @public
 */
export interface UntagContactRequest {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A list of tag keys. Existing tags on the contact whose keys are members of this list will be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagContactResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the agent status.
   *
   * @public
   */
  AgentStatusId: string | undefined;

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
   * The state of the agent status.
   *
   * @public
   */
  State?: AgentStatusState | undefined;

  /**
   * The display order of the agent status.
   *
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * A number indicating the reset order of the agent status.
   *
   * @public
   */
  ResetOrderNumber?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAttachedFilesConfigurationRequest {
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

  /**
   * The maximum size limit for attached files in bytes. The minimum value is 1 and the maximum value is 104857600 (100 MB).
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
}

/**
 * @public
 */
export interface UpdateAttachedFilesConfigurationResponse {
  /**
   * The identifier of the Connect Customer instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The scope of the attachment.
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
export interface UpdateAuthenticationProfileRequest {
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
   * A list of IP address range strings that are allowed to access the instance. For more information on how to configure IP addresses, see[Configure session timeouts](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  AllowedIps?: string[] | undefined;

  /**
   * A list of IP address range strings that are blocked from accessing the instance. For more information on how to configure IP addresses, For more information on how to configure IP addresses, see [Configure IP-based access control](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  BlockedIps?: string[] | undefined;

  /**
   * The short lived session duration configuration for users logged in to Connect Customer, in minutes. This value determines the maximum possible time before an agent is authenticated. For more information, For more information on how to configure IP addresses, see [Configure session timeouts](https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts) in the *Connect Customer Administrator Guide*.
   *
   * @deprecated (since 10/31/2025) PeriodicSessionDuration is deprecated. Use SessionInactivityDuration instead.
   * @public
   */
  PeriodicSessionDuration?: number | undefined;

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
 * Additional recipients for UpdateContact, allowing an empty list to clear CC recipients.
 * @public
 */
export interface NullableAdditionalRecipients {
  /**
   * The additional CC email address recipients. You can specify up to 50 addresses. Provide an empty list to clear the existing CC recipients.
   *
   * @public
   */
  CcEmailAddresses?: EmailAddressInfo[] | undefined;
}

/**
 * Information about a queue.
 *
 * @public
 */
export interface QueueInfoInput {
  /**
   * The identifier of the queue.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactResponse {}

/**
 * @public
 */
export interface UpdateContactAttributesRequest {
  /**
   * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
   *
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The Connect Customer attributes. These attributes can be accessed in flows just like any other contact attributes.
   *
   * You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
   *
   * In the [Set contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/set-contact-attributes.html) block, when the attributes for a contact exceed 32 KB, the contact is routed down the Error branch of the flow. As a mitigation, consider the following options:
   *
   * - Remove unnecessary attributes by setting their values to empty.
   * - If the attributes are only used in one flow and don't need to be referred to outside of that flow (for example, by a Lambda or another flow), then use flow attributes. This way you aren't needlessly persisting the 32 KB of information from one flow to another. For more information, see [Flow block: Set contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/set-contact-attributes.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateContactAttributesResponse {}

/**
 * @public
 */
export interface UpdateContactEvaluationRequest {
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

  /**
   * A map of question identifiers to answer value.
   *
   * @public
   */
  Answers?: Record<string, EvaluationAnswerInput> | undefined;

  /**
   * A map of question identifiers to note value.
   *
   * @public
   */
  Notes?: Record<string, EvaluationNote> | undefined;

  /**
   * The ID of the user who updated the contact evaluation.
   *
   * @public
   */
  UpdatedBy?: EvaluatorUserUnion | undefined;
}

/**
 * @public
 */
export interface UpdateContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface UpdateContactFlowAliasRequest {
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
   * The version of the flow.
   *
   * @public
   */
  ContactFlowVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowAliasResponse {}

/**
 * @public
 */
export interface UpdateContactFlowContentRequest {
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

  /**
   * The JSON string that represents the content of the flow. For an example, see [Example flow in Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html).
   *
   * Length Constraints: Minimum length of 1. Maximum length of 256000.
   *
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowContentResponse {}

/**
 * @public
 */
export interface UpdateContactFlowMetadataRequest {
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
   * The name of the flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of flow.
   *
   * @public
   */
  ContactFlowState?: ContactFlowState | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowMetadataResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleAliasRequest {
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
   * The version of the flow module.
   *
   * @public
   */
  ContactFlowModuleVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleAliasResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleContentRequest {
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
   * The JSON string that represents the content of the flow. For an example, see [Example flow in Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html).
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Serialized JSON string of the flow module Settings schema.
   *
   * @public
   */
  Settings?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleContentResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleMetadataRequest {
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
   * The name of the flow module.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the flow module.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of flow module.
   *
   * @public
   */
  State?: ContactFlowModuleState | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleMetadataResponse {}

/**
 * @public
 */
export interface UpdateContactFlowNameRequest {
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

  /**
   * The name of the flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the flow.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowNameResponse {}

/**
 * Specify whether this routing criteria step should apply for only a limited amount of time, or if it should never expire.
 *
 * @public
 */
export interface RoutingCriteriaInputStepExpiry {
  /**
   * The number of seconds that the contact will be routed only to agents matching this routing step, if expiry was configured for this routing step.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateContactRoutingDataResponse {}

/**
 * @public
 */
export interface UpdateContactScheduleRequest {
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

  /**
   * The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future.
   *
   * @public
   */
  ScheduledTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateContactScheduleResponse {}

/**
 * @public
 */
export interface UpdateContactTaskTemplateRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * A unique identifier for the task template. For more information about task templates, see [Task templates](https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html) in the *Connect Customer Administrator Guide*.
   *
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactTaskTemplateResponse {}

/**
 * @public
 */
export interface UpdateCrossRegionRoutingRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Set to `true` to disable cross-region routing for all Regions associated with this instance. Set to `false` to re-enable cross-region routing.
   *
   * @public
   */
  IsolatedAll: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateCrossRegionRoutingResponse {}

/**
 * @public
 */
export interface UpdateDataTableAttributeRequest {
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
   * The current name of the attribute to update. Used as an identifier since attribute names can be changed.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The new name for the attribute. Must conform to Connect human readable string specification and be unique within the data table.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The updated value type for the attribute. When changing value types, existing values are not deleted but may return default values if incompatible.
   *
   * @public
   */
  ValueType: DataTableAttributeValueType | undefined;

  /**
   * The updated description for the attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the attribute should be treated as a primary key. Converting to primary attribute requires existing values to maintain uniqueness.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The updated validation rules for the attribute. Changes do not affect existing values until they are modified.
   *
   * @public
   */
  Validation?: Validation | undefined;
}

/**
 * @public
 */
export interface UpdateDataTableAttributeResponse {
  /**
   * The trimmed name and identifier for the updated attribute.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The new lock version for the attribute after the update.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface UpdateDataTableMetadataRequest {
  /**
   * The unique identifier for the Amazon Connect instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the data table. Must also accept the table ARN with or without a version alias. If the version is provided as part of the identifier or ARN, the version must be $LATEST. Providing any other alias fails with an error.
   *
   * @public
   */
  DataTableId: string | undefined;

  /**
   * The updated name for the data table. Must conform to Connect human readable string specification and have 1-127 characters. Must be unique for the instance using case-insensitive comparison.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The updated description for the data table. Must conform to Connect human readable string specification and have 0-250 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated value lock level for the data table. One of DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE, and NONE.
   *
   * @public
   */
  ValueLockLevel: DataTableLockLevel | undefined;

  /**
   * The updated IANA timezone identifier to use when resolving time based dynamic values.
   *
   * @public
   */
  TimeZone: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataTableMetadataResponse {
  /**
   * The new lock version for the data table after the update.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface UpdateDataTablePrimaryValuesRequest {
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
   * The current primary values for the record. Required and must include values for all primary attributes. Fails if the table has primary attributes and some primary values are omitted.
   *
   * @public
   */
  PrimaryValues: PrimaryValue[] | undefined;

  /**
   * The new primary values for the record. Required and must include values for all primary attributes. The combination must be unique within the table.
   *
   * @public
   */
  NewPrimaryValues: PrimaryValue[] | undefined;

  /**
   * The lock version information required for optimistic locking to prevent concurrent modifications.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface UpdateDataTablePrimaryValuesResponse {
  /**
   * The updated lock version information for the data table and affected components after the primary values change.
   *
   * @public
   */
  LockVersion: DataTableLockVersion | undefined;
}

/**
 * @public
 */
export interface UpdateEmailAddressMetadataRequest {
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

  /**
   * The description of the email address.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of email address.
   *
   * @public
   */
  DisplayName?: string | undefined;

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
export interface UpdateEmailAddressMetadataResponse {
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
 * @public
 */
export interface UpdateEvaluationFormResponse {
  /**
   * The unique identifier for the evaluation form.
   *
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the contact evaluation resource.
   *
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * The version of the updated evaluation form resource.
   *
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateExtractionDefinitionRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier of the extraction definition to update.
   *
   * @public
   */
  ExtractionDefinitionId: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The name of the extraction definition.
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
   * The display settings for the extraction definition.
   *
   * @public
   */
  Display?: ExtractionDefinitionDisplay | undefined;
}

/**
 * @public
 */
export interface UpdateExtractionDefinitionResponse {}

/**
 * @public
 */
export interface UpdateHoursOfOperationRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the hours of operation.
   *
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * The name of the hours of operation.
   *
   * @public
   */
  Name?: string | undefined;

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
  TimeZone?: string | undefined;

  /**
   * Configuration information of the hours of operation.
   *
   * @public
   */
  Config?: HoursOfOperationConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateHoursOfOperationOverrideRequest {
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
   * The date from when the hours of operation override would be effective.
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
   * For more information about how override types are applied, see [Build your list of overrides](https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html) in the *Administrator Guide*.
   *
   * @public
   */
  OverrideType?: OverrideType | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceAttributeRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The type of attribute.
   *
   * > **Note:** Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature, contact Amazon Web Services Support for allowlisting.
   *
   * > **Note:** If you set the attribute type as `MESSAGE_STREAMING`, you need to update the Lex bot alias resource based policy to include the `lex:RecognizeMessageAsync` action for the connect instance ARN resource.
   *
   * > **Note:** If you set the attribute type `AUTO_MUTE_AGENT_ON_HOLD` to `true`, the system automatically mutes agents while they're on hold and unmutes them when they resume the contact. Agents can't change their mute state while on hold.
   *
   * @public
   */
  AttributeType: InstanceAttributeType | undefined;

  /**
   * The value for the attribute. Maximum character limit is 100.
   *
   * @public
   */
  Value: string | undefined;

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
export interface UpdateInstanceStorageConfigRequest {
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
   * The storage configuration for the instance.
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
export interface UpdateMetricContentRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the metric to update. Adding the `$SAVED` qualifier will update the saved version of the metric. Adding `$LATEST` or omitting a qualifier will update the published version.
   *
   * @public
   */
  MetricId: string | undefined;

  /**
   * The updated calculation definition for the metric.
   *
   * @public
   */
  MetricCalculation?: MetricCalculation | undefined;

  /**
   * The updated display unit for the metric.
   *
   * @public
   */
  Unit?: MetricUnit | undefined;

  /**
   * How an increase in the metric value should be interpreted. Valid values: `POSITIVE`, `NEUTRAL`, `NEGATIVE`.
   *
   * @public
   */
  PositiveTrendIndicator?: TrendIndicator | undefined;
}

/**
 * @public
 */
export interface UpdateMetricContentResponse {}

/**
 * @public
 */
export interface UpdateMetricMetadataRequest {
  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identifier of the metric to update. Adding the `$SAVED` qualifier will update the saved version of the metric. Adding `$LATEST` or omitting a qualifier will update the published version.
   *
   * @public
   */
  MetricId: string | undefined;

  /**
   * The updated name of the metric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated description of the metric.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMetricMetadataResponse {}

/**
 * @public
 */
export interface UpdateNotificationContentRequest {
  /**
   * The identifier of the Amazon Connect instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The unique identifier for the notification to update.
   *
   * @public
   */
  NotificationId: string | undefined;

  /**
   * The updated localized content of the notification. A map of locale codes and values. Maximum 500 visible characters per locale.
   *
   * @public
   */
  Content: Partial<Record<LocaleCode, string>> | undefined;
}

/**
 * The response from updating notification content.
 *
 * @public
 */
export interface UpdateNotificationContentResponse {}

/**
 * Contains the raw body content of an outbound email draft.
 *
 * @public
 */
export interface UpdateOutboundRawMessage {
  /**
   * The email message body.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * The content type of the email body. Valid values:
   *
   * - `text/plain` – Plain text content.
   * - `text/html` – HTML-formatted content.
   *
   * @public
   */
  ContentType: string | undefined;
}

/**
 * Contains the updated body content for an outbound email draft.
 *
 * @public
 */
export interface UpdateOutboundEmailContent {
  /**
   * The message source type. The only supported value is `RAW`.
   *
   * @public
   */
  MessageSourceType: UpdateOutboundEmailMessageSourceType | undefined;

  /**
   * The raw email body content.
   *
   * @public
   */
  RawMessage: UpdateOutboundRawMessage | undefined;
}

/**
 * @public
 */
export interface UpdateOutboundEmailContactMessageRequest {
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
   * The email message body to update on the outbound email draft.
   *
   * @public
   */
  EmailMessage: UpdateOutboundEmailContent | undefined;
}

/**
 * @public
 */
export interface UpdateOutboundEmailContactMessageResponse {
  /**
   * The identifier of the contact in this instance of Connect Customer.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantAuthenticationRequest {
  /**
   * The `state` query parameter that was provided by Cognito in the `redirectUri`. This will also match the `state` parameter provided in the `AuthenticationUrl` from the [GetAuthenticationUrl](https://docs.aws.amazon.com/connect/latest/APIReference/API_GetAuthenticationUrl.html) response.
   *
   * @public
   */
  State: string | undefined;

  /**
   * The identifier of the Connect Customer instance. You can [find the instance ID](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html) in the Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The `code` query parameter provided by Cognito in the `redirectUri`.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The `error` query parameter provided by Cognito in the `redirectUri`.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The `error_description` parameter provided by Cognito in the `redirectUri`.
   *
   * @public
   */
  ErrorDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantAuthenticationResponse {}

/**
 * The value of the timer. Either the timer action (`Unset` to delete the timer), or the duration of the timer in minutes. Only one value can be set.
 *
 * For more information about how chat timeouts work, see [Set up chat timeouts for human participants](https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html).
 *
 * @public
 */
export type ParticipantTimerValue =
  | ParticipantTimerValue.ParticipantTimerActionMember
  | ParticipantTimerValue.ParticipantTimerDurationInMinutesMember
  | ParticipantTimerValue.$UnknownMember;

/**
 * @public
 */
export namespace ParticipantTimerValue {
  /**
   * The timer action. Currently only one value is allowed: `Unset`. It deletes a timer.
   *
   * @public
   */
  export interface ParticipantTimerActionMember {
    ParticipantTimerAction: ParticipantTimerAction;
    ParticipantTimerDurationInMinutes?: never;
    $unknown?: never;
  }

  /**
   * The duration of a timer, in minutes.
   *
   * @public
   */
  export interface ParticipantTimerDurationInMinutesMember {
    ParticipantTimerAction?: never;
    ParticipantTimerDurationInMinutes: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ParticipantTimerAction?: never;
    ParticipantTimerDurationInMinutes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ParticipantTimerAction: (value: ParticipantTimerAction) => T;
    ParticipantTimerDurationInMinutes: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}
