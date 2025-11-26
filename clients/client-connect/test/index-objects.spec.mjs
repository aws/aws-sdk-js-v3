import {
  ActionType,
  ActivateEvaluationFormCommand,
  AgentAvailabilityTimer,
  AgentStatusState,
  AgentStatusType,
  AllowedUserAction,
  AnsweringMachineDetectionStatus,
  ArtifactStatus,
  AssociateAnalyticsDataSetCommand,
  AssociateApprovedOriginCommand,
  AssociateBotCommand,
  AssociateContactWithUserCommand,
  AssociateDefaultVocabularyCommand,
  AssociateEmailAddressAliasCommand,
  AssociateFlowCommand,
  AssociateInstanceStorageConfigCommand,
  AssociateLambdaFunctionCommand,
  AssociateLexBotCommand,
  AssociatePhoneNumberContactFlowCommand,
  AssociateQueueQuickConnectsCommand,
  AssociateRoutingProfileQueuesCommand,
  AssociateSecurityKeyCommand,
  AssociateTrafficDistributionGroupUserCommand,
  AssociateUserProficienciesCommand,
  AutoEvaluationStatus,
  BatchAssociateAnalyticsDataSetCommand,
  BatchDisassociateAnalyticsDataSetCommand,
  BatchGetAttachedFileMetadataCommand,
  BatchGetFlowAssociationCommand,
  BatchPutContactCommand,
  BehaviorType,
  BooleanComparisonType,
  Channel,
  ChatEventType,
  ClaimPhoneNumberCommand,
  Comparison,
  CompleteAttachedFileUploadCommand,
  Connect,
  ConnectClient,
  ConnectServiceException,
  ContactFlowModuleState,
  ContactFlowModuleStatus,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ContactMetricName,
  ContactRecordingType,
  ContactState,
  CreateAgentStatusCommand,
  CreateContactCommand,
  CreateContactFlowCommand,
  CreateContactFlowModuleAliasCommand,
  CreateContactFlowModuleCommand,
  CreateContactFlowModuleVersionCommand,
  CreateContactFlowVersionCommand,
  CreateEmailAddressCommand,
  CreateEvaluationFormCommand,
  CreateHoursOfOperationCommand,
  CreateHoursOfOperationOverrideCommand,
  CreateInstanceCommand,
  CreateIntegrationAssociationCommand,
  CreateParticipantCommand,
  CreatePersistentContactAssociationCommand,
  CreatePredefinedAttributeCommand,
  CreatePromptCommand,
  CreatePushNotificationRegistrationCommand,
  CreateQueueCommand,
  CreateQuickConnectCommand,
  CreateRoutingProfileCommand,
  CreateRuleCommand,
  CreateSecurityProfileCommand,
  CreateTaskTemplateCommand,
  CreateTrafficDistributionGroupCommand,
  CreateUseCaseCommand,
  CreateUserCommand,
  CreateUserHierarchyGroupCommand,
  CreateViewCommand,
  CreateViewVersionCommand,
  CreateVocabularyCommand,
  CurrentMetricName,
  DateComparisonType,
  DateTimeComparisonType,
  DeactivateEvaluationFormCommand,
  DecimalComparisonType,
  DeleteAttachedFileCommand,
  DeleteContactEvaluationCommand,
  DeleteContactFlowCommand,
  DeleteContactFlowModuleAliasCommand,
  DeleteContactFlowModuleCommand,
  DeleteContactFlowModuleVersionCommand,
  DeleteContactFlowVersionCommand,
  DeleteEmailAddressCommand,
  DeleteEvaluationFormCommand,
  DeleteHoursOfOperationCommand,
  DeleteHoursOfOperationOverrideCommand,
  DeleteInstanceCommand,
  DeleteIntegrationAssociationCommand,
  DeletePredefinedAttributeCommand,
  DeletePromptCommand,
  DeletePushNotificationRegistrationCommand,
  DeleteQueueCommand,
  DeleteQuickConnectCommand,
  DeleteRoutingProfileCommand,
  DeleteRuleCommand,
  DeleteSecurityProfileCommand,
  DeleteTaskTemplateCommand,
  DeleteTrafficDistributionGroupCommand,
  DeleteUseCaseCommand,
  DeleteUserCommand,
  DeleteUserHierarchyGroupCommand,
  DeleteViewCommand,
  DeleteViewVersionCommand,
  DeleteVocabularyCommand,
  DescribeAgentStatusCommand,
  DescribeAuthenticationProfileCommand,
  DescribeContactCommand,
  DescribeContactEvaluationCommand,
  DescribeContactFlowCommand,
  DescribeContactFlowModuleAliasCommand,
  DescribeContactFlowModuleCommand,
  DescribeEmailAddressCommand,
  DescribeEvaluationFormCommand,
  DescribeHoursOfOperationCommand,
  DescribeHoursOfOperationOverrideCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceCommand,
  DescribeInstanceStorageConfigCommand,
  DescribePhoneNumberCommand,
  DescribePredefinedAttributeCommand,
  DescribePromptCommand,
  DescribeQueueCommand,
  DescribeQuickConnectCommand,
  DescribeRoutingProfileCommand,
  DescribeRuleCommand,
  DescribeSecurityProfileCommand,
  DescribeTrafficDistributionGroupCommand,
  DescribeUserCommand,
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyStructureCommand,
  DescribeViewCommand,
  DescribeVocabularyCommand,
  DeviceType,
  DirectoryType,
  DisassociateAnalyticsDataSetCommand,
  DisassociateApprovedOriginCommand,
  DisassociateBotCommand,
  DisassociateEmailAddressAliasCommand,
  DisassociateFlowCommand,
  DisassociateInstanceStorageConfigCommand,
  DisassociateLambdaFunctionCommand,
  DisassociateLexBotCommand,
  DisassociatePhoneNumberContactFlowCommand,
  DisassociateQueueQuickConnectsCommand,
  DisassociateRoutingProfileQueuesCommand,
  DisassociateSecurityKeyCommand,
  DisassociateTrafficDistributionGroupUserCommand,
  DisassociateUserProficienciesCommand,
  DismissUserContactCommand,
  EmailHeaderType,
  EncryptionType,
  EndpointType,
  EvaluationFormItemEnablementAction,
  EvaluationFormItemEnablementOperator,
  EvaluationFormItemEnablementSourceType,
  EvaluationFormItemEnablementSourceValueType,
  EvaluationFormItemSourceValuesComparator,
  EvaluationFormQuestionAutomationAnswerSourceType,
  EvaluationFormQuestionType,
  EvaluationFormScoringMode,
  EvaluationFormScoringStatus,
  EvaluationFormSingleSelectQuestionDisplayMode,
  EvaluationFormVersionStatus,
  EvaluationQuestionAnswerAnalysisType,
  EvaluationStatus,
  EvaluationSuggestedAnswerStatus,
  EvaluationTranscriptType,
  EvaluationType,
  EventSourceName,
  FailureReasonCode,
  FileStatusType,
  FileUseCaseType,
  FlowAssociationResourceType,
  GetAttachedFileCommand,
  GetContactAttributesCommand,
  GetContactMetricsCommand,
  GetCurrentMetricDataCommand,
  GetCurrentUserDataCommand,
  GetEffectiveHoursOfOperationsCommand,
  GetFederationTokenCommand,
  GetFlowAssociationCommand,
  GetMetricDataCommand,
  GetMetricDataV2Command,
  GetPromptFileCommand,
  GetTaskTemplateCommand,
  GetTrafficDistributionCommand,
  Grouping,
  HierarchyGroupMatchType,
  HistoricalMetricName,
  HoursOfOperationDays,
  ImportPhoneNumberCommand,
  InboundMessageSourceType,
  InitiateAs,
  InstanceAttributeType,
  InstanceReplicationStatus,
  InstanceStatus,
  InstanceStorageResourceType,
  IntegrationType,
  IntervalPeriod,
  IvrRecordingTrack,
  LexVersion,
  ListAgentStatusesCommand,
  ListAnalyticsDataAssociationsCommand,
  ListAnalyticsDataLakeDataSetsCommand,
  ListApprovedOriginsCommand,
  ListAssociatedContactsCommand,
  ListAuthenticationProfilesCommand,
  ListBotsCommand,
  ListContactEvaluationsCommand,
  ListContactFlowModuleAliasesCommand,
  ListContactFlowModuleVersionsCommand,
  ListContactFlowModulesCommand,
  ListContactFlowVersionsCommand,
  ListContactFlowsCommand,
  ListContactReferencesCommand,
  ListDefaultVocabulariesCommand,
  ListEvaluationFormVersionsCommand,
  ListEvaluationFormsCommand,
  ListFlowAssociationResourceType,
  ListFlowAssociationsCommand,
  ListHoursOfOperationOverridesCommand,
  ListHoursOfOperationsCommand,
  ListInstanceAttributesCommand,
  ListInstanceStorageConfigsCommand,
  ListInstancesCommand,
  ListIntegrationAssociationsCommand,
  ListLambdaFunctionsCommand,
  ListLexBotsCommand,
  ListPhoneNumbersCommand,
  ListPhoneNumbersV2Command,
  ListPredefinedAttributesCommand,
  ListPromptsCommand,
  ListQueueQuickConnectsCommand,
  ListQueuesCommand,
  ListQuickConnectsCommand,
  ListRealtimeContactAnalysisSegmentsV2Command,
  ListRoutingProfileManualAssignmentQueuesCommand,
  ListRoutingProfileQueuesCommand,
  ListRoutingProfilesCommand,
  ListRulesCommand,
  ListSecurityKeysCommand,
  ListSecurityProfileApplicationsCommand,
  ListSecurityProfilePermissionsCommand,
  ListSecurityProfilesCommand,
  ListTagsForResourceCommand,
  ListTaskTemplatesCommand,
  ListTrafficDistributionGroupUsersCommand,
  ListTrafficDistributionGroupsCommand,
  ListUseCasesCommand,
  ListUserHierarchyGroupsCommand,
  ListUserProficienciesCommand,
  ListUsersCommand,
  ListViewVersionsCommand,
  ListViewsCommand,
  MediaStreamType,
  MeetingFeatureStatus,
  MonitorCapability,
  MonitorContactCommand,
  NotificationContentType,
  NotificationDeliveryType,
  NumberComparisonType,
  NumericQuestionPropertyAutomationLabel,
  OutboundMessageSourceType,
  OutboundStrategyType,
  OverrideDays,
  ParticipantRole,
  ParticipantState,
  ParticipantTimerAction,
  ParticipantTimerType,
  ParticipantType,
  PauseContactCommand,
  PhoneNumberCountryCode,
  PhoneNumberType,
  PhoneNumberWorkflowStatus,
  PhoneType,
  PutUserStatusCommand,
  QuestionRuleCategoryAutomationCondition,
  QueueStatus,
  QueueType,
  QuickConnectType,
  RealTimeContactAnalysisOutputType,
  RealTimeContactAnalysisPostContactSummaryFailureCode,
  RealTimeContactAnalysisPostContactSummaryStatus,
  RealTimeContactAnalysisSegmentType,
  RealTimeContactAnalysisSentimentLabel,
  RealTimeContactAnalysisStatus,
  RealTimeContactAnalysisSupportedChannel,
  RecordingStatus,
  ReferenceStatus,
  ReferenceType,
  RehydrationType,
  ReleasePhoneNumberCommand,
  ReplicateInstanceCommand,
  ResumeContactCommand,
  ResumeContactRecordingCommand,
  RoutingCriteriaStepStatus,
  RulePublishStatus,
  ScreenShareCapability,
  SearchAgentStatusesCommand,
  SearchAvailablePhoneNumbersCommand,
  SearchContactEvaluationsCommand,
  SearchContactFlowModulesCommand,
  SearchContactFlowsCommand,
  SearchContactsCommand,
  SearchContactsMatchType,
  SearchContactsTimeRangeConditionType,
  SearchContactsTimeRangeType,
  SearchEmailAddressesCommand,
  SearchEvaluationFormsCommand,
  SearchHoursOfOperationOverridesCommand,
  SearchHoursOfOperationsCommand,
  SearchPredefinedAttributesCommand,
  SearchPromptsCommand,
  SearchQueuesCommand,
  SearchQuickConnectsCommand,
  SearchResourceTagsCommand,
  SearchRoutingProfilesCommand,
  SearchSecurityProfilesCommand,
  SearchUserHierarchyGroupsCommand,
  SearchUsersCommand,
  SearchVocabulariesCommand,
  SearchableQueueType,
  SendChatIntegrationEventCommand,
  SendOutboundEmailCommand,
  SingleSelectQuestionRuleCategoryAutomationCondition,
  SlaAssignmentType,
  SlaType,
  SortOrder,
  SortableFieldName,
  SourceType,
  StartAttachedFileUploadCommand,
  StartChatContactCommand,
  StartContactEvaluationCommand,
  StartContactRecordingCommand,
  StartContactStreamingCommand,
  StartEmailContactCommand,
  StartOutboundChatContactCommand,
  StartOutboundEmailContactCommand,
  StartOutboundVoiceContactCommand,
  StartScreenSharingCommand,
  StartTaskContactCommand,
  StartWebRTCContactCommand,
  Statistic,
  Status,
  StopContactCommand,
  StopContactRecordingCommand,
  StopContactStreamingCommand,
  StorageType,
  StringComparisonType,
  SubmitContactEvaluationCommand,
  SuspendContactRecordingCommand,
  TagContactCommand,
  TagResourceCommand,
  TargetListType,
  TaskTemplateFieldType,
  TaskTemplateStatus,
  TimerEligibleParticipantRoles,
  TrafficDistributionGroupStatus,
  TrafficType,
  TransferContactCommand,
  Unit,
  UntagContactCommand,
  UntagResourceCommand,
  UpdateAgentStatusCommand,
  UpdateAuthenticationProfileCommand,
  UpdateContactAttributesCommand,
  UpdateContactCommand,
  UpdateContactEvaluationCommand,
  UpdateContactFlowContentCommand,
  UpdateContactFlowMetadataCommand,
  UpdateContactFlowModuleAliasCommand,
  UpdateContactFlowModuleContentCommand,
  UpdateContactFlowModuleMetadataCommand,
  UpdateContactFlowNameCommand,
  UpdateContactRoutingDataCommand,
  UpdateContactScheduleCommand,
  UpdateEmailAddressMetadataCommand,
  UpdateEvaluationFormCommand,
  UpdateHoursOfOperationCommand,
  UpdateHoursOfOperationOverrideCommand,
  UpdateInstanceAttributeCommand,
  UpdateInstanceStorageConfigCommand,
  UpdateParticipantAuthenticationCommand,
  UpdateParticipantRoleConfigCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberMetadataCommand,
  UpdatePredefinedAttributeCommand,
  UpdatePromptCommand,
  UpdateQueueHoursOfOperationCommand,
  UpdateQueueMaxContactsCommand,
  UpdateQueueNameCommand,
  UpdateQueueOutboundCallerConfigCommand,
  UpdateQueueOutboundEmailConfigCommand,
  UpdateQueueStatusCommand,
  UpdateQuickConnectConfigCommand,
  UpdateQuickConnectNameCommand,
  UpdateRoutingProfileAgentAvailabilityTimerCommand,
  UpdateRoutingProfileConcurrencyCommand,
  UpdateRoutingProfileDefaultOutboundQueueCommand,
  UpdateRoutingProfileNameCommand,
  UpdateRoutingProfileQueuesCommand,
  UpdateRuleCommand,
  UpdateSecurityProfileCommand,
  UpdateTaskTemplateCommand,
  UpdateTrafficDistributionCommand,
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyGroupNameCommand,
  UpdateUserHierarchyStructureCommand,
  UpdateUserIdentityInfoCommand,
  UpdateUserPhoneConfigCommand,
  UpdateUserProficienciesCommand,
  UpdateUserRoutingProfileCommand,
  UpdateUserSecurityProfilesCommand,
  UpdateViewContentCommand,
  UpdateViewMetadataCommand,
  UseCaseType,
  VideoCapability,
  ViewStatus,
  ViewType,
  VocabularyLanguageCode,
  VocabularyState,
  VoiceRecordingTrack,
  paginateGetCurrentMetricData,
  paginateGetCurrentUserData,
  paginateGetMetricData,
  paginateGetMetricDataV2,
  paginateListAgentStatuses,
  paginateListApprovedOrigins,
  paginateListAuthenticationProfiles,
  paginateListBots,
  paginateListContactEvaluations,
  paginateListContactFlowModuleAliases,
  paginateListContactFlowModuleVersions,
  paginateListContactFlowModules,
  paginateListContactFlowVersions,
  paginateListContactFlows,
  paginateListContactReferences,
  paginateListDefaultVocabularies,
  paginateListEvaluationFormVersions,
  paginateListEvaluationForms,
  paginateListFlowAssociations,
  paginateListHoursOfOperationOverrides,
  paginateListHoursOfOperations,
  paginateListInstanceAttributes,
  paginateListInstanceStorageConfigs,
  paginateListInstances,
  paginateListIntegrationAssociations,
  paginateListLambdaFunctions,
  paginateListLexBots,
  paginateListPhoneNumbers,
  paginateListPhoneNumbersV2,
  paginateListPredefinedAttributes,
  paginateListPrompts,
  paginateListQueueQuickConnects,
  paginateListQueues,
  paginateListQuickConnects,
  paginateListRealtimeContactAnalysisSegmentsV2,
  paginateListRoutingProfileManualAssignmentQueues,
  paginateListRoutingProfileQueues,
  paginateListRoutingProfiles,
  paginateListRules,
  paginateListSecurityKeys,
  paginateListSecurityProfileApplications,
  paginateListSecurityProfilePermissions,
  paginateListSecurityProfiles,
  paginateListTaskTemplates,
  paginateListTrafficDistributionGroupUsers,
  paginateListTrafficDistributionGroups,
  paginateListUseCases,
  paginateListUserHierarchyGroups,
  paginateListUserProficiencies,
  paginateListUsers,
  paginateListViewVersions,
  paginateListViews,
  paginateSearchAgentStatuses,
  paginateSearchAvailablePhoneNumbers,
  paginateSearchContactFlowModules,
  paginateSearchContactFlows,
  paginateSearchContacts,
  paginateSearchHoursOfOperationOverrides,
  paginateSearchHoursOfOperations,
  paginateSearchPredefinedAttributes,
  paginateSearchPrompts,
  paginateSearchQueues,
  paginateSearchQuickConnects,
  paginateSearchResourceTags,
  paginateSearchRoutingProfiles,
  paginateSearchSecurityProfiles,
  paginateSearchUserHierarchyGroups,
  paginateSearchUsers,
  paginateSearchVocabularies,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectClient === "function")
assert(typeof Connect === "function")
// commands
assert(typeof ActivateEvaluationFormCommand === "function")
assert(typeof AssociateAnalyticsDataSetCommand === "function")
assert(typeof AssociateApprovedOriginCommand === "function")
assert(typeof AssociateBotCommand === "function")
assert(typeof AssociateContactWithUserCommand === "function")
assert(typeof AssociateDefaultVocabularyCommand === "function")
assert(typeof AssociateEmailAddressAliasCommand === "function")
assert(typeof AssociateFlowCommand === "function")
assert(typeof AssociateInstanceStorageConfigCommand === "function")
assert(typeof AssociateLambdaFunctionCommand === "function")
assert(typeof AssociateLexBotCommand === "function")
assert(typeof AssociatePhoneNumberContactFlowCommand === "function")
assert(typeof AssociateQueueQuickConnectsCommand === "function")
assert(typeof AssociateRoutingProfileQueuesCommand === "function")
assert(typeof AssociateSecurityKeyCommand === "function")
assert(typeof AssociateTrafficDistributionGroupUserCommand === "function")
assert(typeof AssociateUserProficienciesCommand === "function")
assert(typeof BatchAssociateAnalyticsDataSetCommand === "function")
assert(typeof BatchDisassociateAnalyticsDataSetCommand === "function")
assert(typeof BatchGetAttachedFileMetadataCommand === "function")
assert(typeof BatchGetFlowAssociationCommand === "function")
assert(typeof BatchPutContactCommand === "function")
assert(typeof ClaimPhoneNumberCommand === "function")
assert(typeof CompleteAttachedFileUploadCommand === "function")
assert(typeof CreateAgentStatusCommand === "function")
assert(typeof CreateContactCommand === "function")
assert(typeof CreateContactFlowCommand === "function")
assert(typeof CreateContactFlowModuleCommand === "function")
assert(typeof CreateContactFlowModuleAliasCommand === "function")
assert(typeof CreateContactFlowModuleVersionCommand === "function")
assert(typeof CreateContactFlowVersionCommand === "function")
assert(typeof CreateEmailAddressCommand === "function")
assert(typeof CreateEvaluationFormCommand === "function")
assert(typeof CreateHoursOfOperationCommand === "function")
assert(typeof CreateHoursOfOperationOverrideCommand === "function")
assert(typeof CreateInstanceCommand === "function")
assert(typeof CreateIntegrationAssociationCommand === "function")
assert(typeof CreateParticipantCommand === "function")
assert(typeof CreatePersistentContactAssociationCommand === "function")
assert(typeof CreatePredefinedAttributeCommand === "function")
assert(typeof CreatePromptCommand === "function")
assert(typeof CreatePushNotificationRegistrationCommand === "function")
assert(typeof CreateQueueCommand === "function")
assert(typeof CreateQuickConnectCommand === "function")
assert(typeof CreateRoutingProfileCommand === "function")
assert(typeof CreateRuleCommand === "function")
assert(typeof CreateSecurityProfileCommand === "function")
assert(typeof CreateTaskTemplateCommand === "function")
assert(typeof CreateTrafficDistributionGroupCommand === "function")
assert(typeof CreateUseCaseCommand === "function")
assert(typeof CreateUserCommand === "function")
assert(typeof CreateUserHierarchyGroupCommand === "function")
assert(typeof CreateViewCommand === "function")
assert(typeof CreateViewVersionCommand === "function")
assert(typeof CreateVocabularyCommand === "function")
assert(typeof DeactivateEvaluationFormCommand === "function")
assert(typeof DeleteAttachedFileCommand === "function")
assert(typeof DeleteContactEvaluationCommand === "function")
assert(typeof DeleteContactFlowCommand === "function")
assert(typeof DeleteContactFlowModuleCommand === "function")
assert(typeof DeleteContactFlowModuleAliasCommand === "function")
assert(typeof DeleteContactFlowModuleVersionCommand === "function")
assert(typeof DeleteContactFlowVersionCommand === "function")
assert(typeof DeleteEmailAddressCommand === "function")
assert(typeof DeleteEvaluationFormCommand === "function")
assert(typeof DeleteHoursOfOperationCommand === "function")
assert(typeof DeleteHoursOfOperationOverrideCommand === "function")
assert(typeof DeleteInstanceCommand === "function")
assert(typeof DeleteIntegrationAssociationCommand === "function")
assert(typeof DeletePredefinedAttributeCommand === "function")
assert(typeof DeletePromptCommand === "function")
assert(typeof DeletePushNotificationRegistrationCommand === "function")
assert(typeof DeleteQueueCommand === "function")
assert(typeof DeleteQuickConnectCommand === "function")
assert(typeof DeleteRoutingProfileCommand === "function")
assert(typeof DeleteRuleCommand === "function")
assert(typeof DeleteSecurityProfileCommand === "function")
assert(typeof DeleteTaskTemplateCommand === "function")
assert(typeof DeleteTrafficDistributionGroupCommand === "function")
assert(typeof DeleteUseCaseCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DeleteUserHierarchyGroupCommand === "function")
assert(typeof DeleteViewCommand === "function")
assert(typeof DeleteViewVersionCommand === "function")
assert(typeof DeleteVocabularyCommand === "function")
assert(typeof DescribeAgentStatusCommand === "function")
assert(typeof DescribeAuthenticationProfileCommand === "function")
assert(typeof DescribeContactCommand === "function")
assert(typeof DescribeContactEvaluationCommand === "function")
assert(typeof DescribeContactFlowCommand === "function")
assert(typeof DescribeContactFlowModuleCommand === "function")
assert(typeof DescribeContactFlowModuleAliasCommand === "function")
assert(typeof DescribeEmailAddressCommand === "function")
assert(typeof DescribeEvaluationFormCommand === "function")
assert(typeof DescribeHoursOfOperationCommand === "function")
assert(typeof DescribeHoursOfOperationOverrideCommand === "function")
assert(typeof DescribeInstanceCommand === "function")
assert(typeof DescribeInstanceAttributeCommand === "function")
assert(typeof DescribeInstanceStorageConfigCommand === "function")
assert(typeof DescribePhoneNumberCommand === "function")
assert(typeof DescribePredefinedAttributeCommand === "function")
assert(typeof DescribePromptCommand === "function")
assert(typeof DescribeQueueCommand === "function")
assert(typeof DescribeQuickConnectCommand === "function")
assert(typeof DescribeRoutingProfileCommand === "function")
assert(typeof DescribeRuleCommand === "function")
assert(typeof DescribeSecurityProfileCommand === "function")
assert(typeof DescribeTrafficDistributionGroupCommand === "function")
assert(typeof DescribeUserCommand === "function")
assert(typeof DescribeUserHierarchyGroupCommand === "function")
assert(typeof DescribeUserHierarchyStructureCommand === "function")
assert(typeof DescribeViewCommand === "function")
assert(typeof DescribeVocabularyCommand === "function")
assert(typeof DisassociateAnalyticsDataSetCommand === "function")
assert(typeof DisassociateApprovedOriginCommand === "function")
assert(typeof DisassociateBotCommand === "function")
assert(typeof DisassociateEmailAddressAliasCommand === "function")
assert(typeof DisassociateFlowCommand === "function")
assert(typeof DisassociateInstanceStorageConfigCommand === "function")
assert(typeof DisassociateLambdaFunctionCommand === "function")
assert(typeof DisassociateLexBotCommand === "function")
assert(typeof DisassociatePhoneNumberContactFlowCommand === "function")
assert(typeof DisassociateQueueQuickConnectsCommand === "function")
assert(typeof DisassociateRoutingProfileQueuesCommand === "function")
assert(typeof DisassociateSecurityKeyCommand === "function")
assert(typeof DisassociateTrafficDistributionGroupUserCommand === "function")
assert(typeof DisassociateUserProficienciesCommand === "function")
assert(typeof DismissUserContactCommand === "function")
assert(typeof GetAttachedFileCommand === "function")
assert(typeof GetContactAttributesCommand === "function")
assert(typeof GetContactMetricsCommand === "function")
assert(typeof GetCurrentMetricDataCommand === "function")
assert(typeof GetCurrentUserDataCommand === "function")
assert(typeof GetEffectiveHoursOfOperationsCommand === "function")
assert(typeof GetFederationTokenCommand === "function")
assert(typeof GetFlowAssociationCommand === "function")
assert(typeof GetMetricDataCommand === "function")
assert(typeof GetMetricDataV2Command === "function")
assert(typeof GetPromptFileCommand === "function")
assert(typeof GetTaskTemplateCommand === "function")
assert(typeof GetTrafficDistributionCommand === "function")
assert(typeof ImportPhoneNumberCommand === "function")
assert(typeof ListAgentStatusesCommand === "function")
assert(typeof ListAnalyticsDataAssociationsCommand === "function")
assert(typeof ListAnalyticsDataLakeDataSetsCommand === "function")
assert(typeof ListApprovedOriginsCommand === "function")
assert(typeof ListAssociatedContactsCommand === "function")
assert(typeof ListAuthenticationProfilesCommand === "function")
assert(typeof ListBotsCommand === "function")
assert(typeof ListContactEvaluationsCommand === "function")
assert(typeof ListContactFlowModuleAliasesCommand === "function")
assert(typeof ListContactFlowModulesCommand === "function")
assert(typeof ListContactFlowModuleVersionsCommand === "function")
assert(typeof ListContactFlowsCommand === "function")
assert(typeof ListContactFlowVersionsCommand === "function")
assert(typeof ListContactReferencesCommand === "function")
assert(typeof ListDefaultVocabulariesCommand === "function")
assert(typeof ListEvaluationFormsCommand === "function")
assert(typeof ListEvaluationFormVersionsCommand === "function")
assert(typeof ListFlowAssociationsCommand === "function")
assert(typeof ListHoursOfOperationOverridesCommand === "function")
assert(typeof ListHoursOfOperationsCommand === "function")
assert(typeof ListInstanceAttributesCommand === "function")
assert(typeof ListInstancesCommand === "function")
assert(typeof ListInstanceStorageConfigsCommand === "function")
assert(typeof ListIntegrationAssociationsCommand === "function")
assert(typeof ListLambdaFunctionsCommand === "function")
assert(typeof ListLexBotsCommand === "function")
assert(typeof ListPhoneNumbersCommand === "function")
assert(typeof ListPhoneNumbersV2Command === "function")
assert(typeof ListPredefinedAttributesCommand === "function")
assert(typeof ListPromptsCommand === "function")
assert(typeof ListQueueQuickConnectsCommand === "function")
assert(typeof ListQueuesCommand === "function")
assert(typeof ListQuickConnectsCommand === "function")
assert(typeof ListRealtimeContactAnalysisSegmentsV2Command === "function")
assert(typeof ListRoutingProfileManualAssignmentQueuesCommand === "function")
assert(typeof ListRoutingProfileQueuesCommand === "function")
assert(typeof ListRoutingProfilesCommand === "function")
assert(typeof ListRulesCommand === "function")
assert(typeof ListSecurityKeysCommand === "function")
assert(typeof ListSecurityProfileApplicationsCommand === "function")
assert(typeof ListSecurityProfilePermissionsCommand === "function")
assert(typeof ListSecurityProfilesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTaskTemplatesCommand === "function")
assert(typeof ListTrafficDistributionGroupsCommand === "function")
assert(typeof ListTrafficDistributionGroupUsersCommand === "function")
assert(typeof ListUseCasesCommand === "function")
assert(typeof ListUserHierarchyGroupsCommand === "function")
assert(typeof ListUserProficienciesCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof ListViewsCommand === "function")
assert(typeof ListViewVersionsCommand === "function")
assert(typeof MonitorContactCommand === "function")
assert(typeof PauseContactCommand === "function")
assert(typeof PutUserStatusCommand === "function")
assert(typeof ReleasePhoneNumberCommand === "function")
assert(typeof ReplicateInstanceCommand === "function")
assert(typeof ResumeContactCommand === "function")
assert(typeof ResumeContactRecordingCommand === "function")
assert(typeof SearchAgentStatusesCommand === "function")
assert(typeof SearchAvailablePhoneNumbersCommand === "function")
assert(typeof SearchContactEvaluationsCommand === "function")
assert(typeof SearchContactFlowModulesCommand === "function")
assert(typeof SearchContactFlowsCommand === "function")
assert(typeof SearchContactsCommand === "function")
assert(typeof SearchEmailAddressesCommand === "function")
assert(typeof SearchEvaluationFormsCommand === "function")
assert(typeof SearchHoursOfOperationOverridesCommand === "function")
assert(typeof SearchHoursOfOperationsCommand === "function")
assert(typeof SearchPredefinedAttributesCommand === "function")
assert(typeof SearchPromptsCommand === "function")
assert(typeof SearchQueuesCommand === "function")
assert(typeof SearchQuickConnectsCommand === "function")
assert(typeof SearchResourceTagsCommand === "function")
assert(typeof SearchRoutingProfilesCommand === "function")
assert(typeof SearchSecurityProfilesCommand === "function")
assert(typeof SearchUserHierarchyGroupsCommand === "function")
assert(typeof SearchUsersCommand === "function")
assert(typeof SearchVocabulariesCommand === "function")
assert(typeof SendChatIntegrationEventCommand === "function")
assert(typeof SendOutboundEmailCommand === "function")
assert(typeof StartAttachedFileUploadCommand === "function")
assert(typeof StartChatContactCommand === "function")
assert(typeof StartContactEvaluationCommand === "function")
assert(typeof StartContactRecordingCommand === "function")
assert(typeof StartContactStreamingCommand === "function")
assert(typeof StartEmailContactCommand === "function")
assert(typeof StartOutboundChatContactCommand === "function")
assert(typeof StartOutboundEmailContactCommand === "function")
assert(typeof StartOutboundVoiceContactCommand === "function")
assert(typeof StartScreenSharingCommand === "function")
assert(typeof StartTaskContactCommand === "function")
assert(typeof StartWebRTCContactCommand === "function")
assert(typeof StopContactCommand === "function")
assert(typeof StopContactRecordingCommand === "function")
assert(typeof StopContactStreamingCommand === "function")
assert(typeof SubmitContactEvaluationCommand === "function")
assert(typeof SuspendContactRecordingCommand === "function")
assert(typeof TagContactCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TransferContactCommand === "function")
assert(typeof UntagContactCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAgentStatusCommand === "function")
assert(typeof UpdateAuthenticationProfileCommand === "function")
assert(typeof UpdateContactCommand === "function")
assert(typeof UpdateContactAttributesCommand === "function")
assert(typeof UpdateContactEvaluationCommand === "function")
assert(typeof UpdateContactFlowContentCommand === "function")
assert(typeof UpdateContactFlowMetadataCommand === "function")
assert(typeof UpdateContactFlowModuleAliasCommand === "function")
assert(typeof UpdateContactFlowModuleContentCommand === "function")
assert(typeof UpdateContactFlowModuleMetadataCommand === "function")
assert(typeof UpdateContactFlowNameCommand === "function")
assert(typeof UpdateContactRoutingDataCommand === "function")
assert(typeof UpdateContactScheduleCommand === "function")
assert(typeof UpdateEmailAddressMetadataCommand === "function")
assert(typeof UpdateEvaluationFormCommand === "function")
assert(typeof UpdateHoursOfOperationCommand === "function")
assert(typeof UpdateHoursOfOperationOverrideCommand === "function")
assert(typeof UpdateInstanceAttributeCommand === "function")
assert(typeof UpdateInstanceStorageConfigCommand === "function")
assert(typeof UpdateParticipantAuthenticationCommand === "function")
assert(typeof UpdateParticipantRoleConfigCommand === "function")
assert(typeof UpdatePhoneNumberCommand === "function")
assert(typeof UpdatePhoneNumberMetadataCommand === "function")
assert(typeof UpdatePredefinedAttributeCommand === "function")
assert(typeof UpdatePromptCommand === "function")
assert(typeof UpdateQueueHoursOfOperationCommand === "function")
assert(typeof UpdateQueueMaxContactsCommand === "function")
assert(typeof UpdateQueueNameCommand === "function")
assert(typeof UpdateQueueOutboundCallerConfigCommand === "function")
assert(typeof UpdateQueueOutboundEmailConfigCommand === "function")
assert(typeof UpdateQueueStatusCommand === "function")
assert(typeof UpdateQuickConnectConfigCommand === "function")
assert(typeof UpdateQuickConnectNameCommand === "function")
assert(typeof UpdateRoutingProfileAgentAvailabilityTimerCommand === "function")
assert(typeof UpdateRoutingProfileConcurrencyCommand === "function")
assert(typeof UpdateRoutingProfileDefaultOutboundQueueCommand === "function")
assert(typeof UpdateRoutingProfileNameCommand === "function")
assert(typeof UpdateRoutingProfileQueuesCommand === "function")
assert(typeof UpdateRuleCommand === "function")
assert(typeof UpdateSecurityProfileCommand === "function")
assert(typeof UpdateTaskTemplateCommand === "function")
assert(typeof UpdateTrafficDistributionCommand === "function")
assert(typeof UpdateUserHierarchyCommand === "function")
assert(typeof UpdateUserHierarchyGroupNameCommand === "function")
assert(typeof UpdateUserHierarchyStructureCommand === "function")
assert(typeof UpdateUserIdentityInfoCommand === "function")
assert(typeof UpdateUserPhoneConfigCommand === "function")
assert(typeof UpdateUserProficienciesCommand === "function")
assert(typeof UpdateUserRoutingProfileCommand === "function")
assert(typeof UpdateUserSecurityProfilesCommand === "function")
assert(typeof UpdateViewContentCommand === "function")
assert(typeof UpdateViewMetadataCommand === "function")
// enums
assert(typeof ActionType === "object");
assert(typeof AgentAvailabilityTimer === "object");
assert(typeof AgentStatusState === "object");
assert(typeof AgentStatusType === "object");
assert(typeof AllowedUserAction === "object");
assert(typeof AnsweringMachineDetectionStatus === "object");
assert(typeof ArtifactStatus === "object");
assert(typeof AutoEvaluationStatus === "object");
assert(typeof BehaviorType === "object");
assert(typeof BooleanComparisonType === "object");
assert(typeof Channel === "object");
assert(typeof ChatEventType === "object");
assert(typeof Comparison === "object");
assert(typeof ContactFlowModuleState === "object");
assert(typeof ContactFlowModuleStatus === "object");
assert(typeof ContactFlowState === "object");
assert(typeof ContactFlowStatus === "object");
assert(typeof ContactFlowType === "object");
assert(typeof ContactInitiationMethod === "object");
assert(typeof ContactMetricName === "object");
assert(typeof ContactRecordingType === "object");
assert(typeof ContactState === "object");
assert(typeof CurrentMetricName === "object");
assert(typeof DateComparisonType === "object");
assert(typeof DateTimeComparisonType === "object");
assert(typeof DecimalComparisonType === "object");
assert(typeof DeviceType === "object");
assert(typeof DirectoryType === "object");
assert(typeof EmailHeaderType === "object");
assert(typeof EncryptionType === "object");
assert(typeof EndpointType === "object");
assert(typeof EvaluationFormItemEnablementAction === "object");
assert(typeof EvaluationFormItemEnablementOperator === "object");
assert(typeof EvaluationFormItemEnablementSourceType === "object");
assert(typeof EvaluationFormItemEnablementSourceValueType === "object");
assert(typeof EvaluationFormItemSourceValuesComparator === "object");
assert(typeof EvaluationFormQuestionAutomationAnswerSourceType === "object");
assert(typeof EvaluationFormQuestionType === "object");
assert(typeof EvaluationFormScoringMode === "object");
assert(typeof EvaluationFormScoringStatus === "object");
assert(typeof EvaluationFormSingleSelectQuestionDisplayMode === "object");
assert(typeof EvaluationFormVersionStatus === "object");
assert(typeof EvaluationQuestionAnswerAnalysisType === "object");
assert(typeof EvaluationStatus === "object");
assert(typeof EvaluationSuggestedAnswerStatus === "object");
assert(typeof EvaluationTranscriptType === "object");
assert(typeof EvaluationType === "object");
assert(typeof EventSourceName === "object");
assert(typeof FailureReasonCode === "object");
assert(typeof FileStatusType === "object");
assert(typeof FileUseCaseType === "object");
assert(typeof FlowAssociationResourceType === "object");
assert(typeof Grouping === "object");
assert(typeof HierarchyGroupMatchType === "object");
assert(typeof HistoricalMetricName === "object");
assert(typeof HoursOfOperationDays === "object");
assert(typeof InboundMessageSourceType === "object");
assert(typeof InitiateAs === "object");
assert(typeof InstanceAttributeType === "object");
assert(typeof InstanceReplicationStatus === "object");
assert(typeof InstanceStatus === "object");
assert(typeof InstanceStorageResourceType === "object");
assert(typeof IntegrationType === "object");
assert(typeof IntervalPeriod === "object");
assert(typeof IvrRecordingTrack === "object");
assert(typeof LexVersion === "object");
assert(typeof ListFlowAssociationResourceType === "object");
assert(typeof MediaStreamType === "object");
assert(typeof MeetingFeatureStatus === "object");
assert(typeof MonitorCapability === "object");
assert(typeof NotificationContentType === "object");
assert(typeof NotificationDeliveryType === "object");
assert(typeof NumberComparisonType === "object");
assert(typeof NumericQuestionPropertyAutomationLabel === "object");
assert(typeof OutboundMessageSourceType === "object");
assert(typeof OutboundStrategyType === "object");
assert(typeof OverrideDays === "object");
assert(typeof ParticipantRole === "object");
assert(typeof ParticipantState === "object");
assert(typeof ParticipantTimerAction === "object");
assert(typeof ParticipantTimerType === "object");
assert(typeof ParticipantType === "object");
assert(typeof PhoneNumberCountryCode === "object");
assert(typeof PhoneNumberType === "object");
assert(typeof PhoneNumberWorkflowStatus === "object");
assert(typeof PhoneType === "object");
assert(typeof QuestionRuleCategoryAutomationCondition === "object");
assert(typeof QueueStatus === "object");
assert(typeof QueueType === "object");
assert(typeof QuickConnectType === "object");
assert(typeof RealTimeContactAnalysisOutputType === "object");
assert(typeof RealTimeContactAnalysisPostContactSummaryFailureCode === "object");
assert(typeof RealTimeContactAnalysisPostContactSummaryStatus === "object");
assert(typeof RealTimeContactAnalysisSegmentType === "object");
assert(typeof RealTimeContactAnalysisSentimentLabel === "object");
assert(typeof RealTimeContactAnalysisStatus === "object");
assert(typeof RealTimeContactAnalysisSupportedChannel === "object");
assert(typeof RecordingStatus === "object");
assert(typeof ReferenceStatus === "object");
assert(typeof ReferenceType === "object");
assert(typeof RehydrationType === "object");
assert(typeof RoutingCriteriaStepStatus === "object");
assert(typeof RulePublishStatus === "object");
assert(typeof ScreenShareCapability === "object");
assert(typeof SearchableQueueType === "object");
assert(typeof SearchContactsMatchType === "object");
assert(typeof SearchContactsTimeRangeConditionType === "object");
assert(typeof SearchContactsTimeRangeType === "object");
assert(typeof SingleSelectQuestionRuleCategoryAutomationCondition === "object");
assert(typeof SlaAssignmentType === "object");
assert(typeof SlaType === "object");
assert(typeof SortableFieldName === "object");
assert(typeof SortOrder === "object");
assert(typeof SourceType === "object");
assert(typeof Statistic === "object");
assert(typeof Status === "object");
assert(typeof StorageType === "object");
assert(typeof StringComparisonType === "object");
assert(typeof TargetListType === "object");
assert(typeof TaskTemplateFieldType === "object");
assert(typeof TaskTemplateStatus === "object");
assert(typeof TimerEligibleParticipantRoles === "object");
assert(typeof TrafficDistributionGroupStatus === "object");
assert(typeof TrafficType === "object");
assert(typeof Unit === "object");
assert(typeof UseCaseType === "object");
assert(typeof VideoCapability === "object");
assert(typeof ViewStatus === "object");
assert(typeof ViewType === "object");
assert(typeof VocabularyLanguageCode === "object");
assert(typeof VocabularyState === "object");
assert(typeof VoiceRecordingTrack === "object");
// errors
assert(ConnectServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetCurrentMetricData === "function")
assert(typeof paginateGetCurrentUserData === "function")
assert(typeof paginateGetMetricData === "function")
assert(typeof paginateGetMetricDataV2 === "function")
assert(typeof paginateListAgentStatuses === "function")
assert(typeof paginateListApprovedOrigins === "function")
assert(typeof paginateListAuthenticationProfiles === "function")
assert(typeof paginateListBots === "function")
assert(typeof paginateListContactEvaluations === "function")
assert(typeof paginateListContactFlowModuleAliases === "function")
assert(typeof paginateListContactFlowModuleVersions === "function")
assert(typeof paginateListContactFlowModules === "function")
assert(typeof paginateListContactFlowVersions === "function")
assert(typeof paginateListContactFlows === "function")
assert(typeof paginateListContactReferences === "function")
assert(typeof paginateListDefaultVocabularies === "function")
assert(typeof paginateListEvaluationFormVersions === "function")
assert(typeof paginateListEvaluationForms === "function")
assert(typeof paginateListFlowAssociations === "function")
assert(typeof paginateListHoursOfOperationOverrides === "function")
assert(typeof paginateListHoursOfOperations === "function")
assert(typeof paginateListInstanceAttributes === "function")
assert(typeof paginateListInstanceStorageConfigs === "function")
assert(typeof paginateListInstances === "function")
assert(typeof paginateListIntegrationAssociations === "function")
assert(typeof paginateListLambdaFunctions === "function")
assert(typeof paginateListLexBots === "function")
assert(typeof paginateListPhoneNumbers === "function")
assert(typeof paginateListPhoneNumbersV2 === "function")
assert(typeof paginateListPredefinedAttributes === "function")
assert(typeof paginateListPrompts === "function")
assert(typeof paginateListQueueQuickConnects === "function")
assert(typeof paginateListQueues === "function")
assert(typeof paginateListQuickConnects === "function")
assert(typeof paginateListRealtimeContactAnalysisSegmentsV2 === "function")
assert(typeof paginateListRoutingProfileManualAssignmentQueues === "function")
assert(typeof paginateListRoutingProfileQueues === "function")
assert(typeof paginateListRoutingProfiles === "function")
assert(typeof paginateListRules === "function")
assert(typeof paginateListSecurityKeys === "function")
assert(typeof paginateListSecurityProfileApplications === "function")
assert(typeof paginateListSecurityProfilePermissions === "function")
assert(typeof paginateListSecurityProfiles === "function")
assert(typeof paginateListTaskTemplates === "function")
assert(typeof paginateListTrafficDistributionGroupUsers === "function")
assert(typeof paginateListTrafficDistributionGroups === "function")
assert(typeof paginateListUseCases === "function")
assert(typeof paginateListUserHierarchyGroups === "function")
assert(typeof paginateListUserProficiencies === "function")
assert(typeof paginateListUsers === "function")
assert(typeof paginateListViewVersions === "function")
assert(typeof paginateListViews === "function")
assert(typeof paginateSearchAgentStatuses === "function")
assert(typeof paginateSearchAvailablePhoneNumbers === "function")
assert(typeof paginateSearchContactFlowModules === "function")
assert(typeof paginateSearchContactFlows === "function")
assert(typeof paginateSearchContacts === "function")
assert(typeof paginateSearchHoursOfOperationOverrides === "function")
assert(typeof paginateSearchHoursOfOperations === "function")
assert(typeof paginateSearchPredefinedAttributes === "function")
assert(typeof paginateSearchPrompts === "function")
assert(typeof paginateSearchQueues === "function")
assert(typeof paginateSearchQuickConnects === "function")
assert(typeof paginateSearchResourceTags === "function")
assert(typeof paginateSearchRoutingProfiles === "function")
assert(typeof paginateSearchSecurityProfiles === "function")
assert(typeof paginateSearchUserHierarchyGroups === "function")
assert(typeof paginateSearchUsers === "function")
assert(typeof paginateSearchVocabularies === "function")
console.log(`Connect index test passed.`);
