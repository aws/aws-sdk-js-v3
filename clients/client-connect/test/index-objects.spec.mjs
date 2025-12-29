import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessType,
  ActionSummary$,
  ActionType,
  ActivateEvaluationForm$,
  ActivateEvaluationFormCommand,
  ActivateEvaluationFormRequest$,
  ActivateEvaluationFormResponse$,
  AdditionalEmailRecipients$,
  AgentAvailabilityTimer,
  AgentConfig$,
  AgentContactReference$,
  AgentFirst$,
  AgentHierarchyGroup$,
  AgentHierarchyGroups$,
  AgentInfo$,
  AgentQualityMetrics$,
  AgentsCriteria$,
  AgentStatus$,
  AgentStatusIdentifier$,
  AgentStatusReference$,
  AgentStatusSearchCriteria$,
  AgentStatusSearchFilter$,
  AgentStatusState,
  AgentStatusSummary$,
  AgentStatusType,
  AiAgentInfo$,
  AiUseCase,
  AliasConfiguration$,
  AllowedCapabilities$,
  AllowedUserAction,
  AnalyticsDataAssociationResult$,
  AnalyticsDataSetsResult$,
  AnsweringMachineDetectionStatus,
  AnswerMachineDetectionConfig$,
  Application$,
  ApplicationType,
  ArtifactStatus,
  AssignContactCategoryActionDefinition$,
  AssignSlaActionDefinition$,
  AssociateAnalyticsDataSet$,
  AssociateAnalyticsDataSetCommand,
  AssociateAnalyticsDataSetRequest$,
  AssociateAnalyticsDataSetResponse$,
  AssociateApprovedOrigin$,
  AssociateApprovedOriginCommand,
  AssociateApprovedOriginRequest$,
  AssociateBot$,
  AssociateBotCommand,
  AssociateBotRequest$,
  AssociateContactWithUser$,
  AssociateContactWithUserCommand,
  AssociateContactWithUserRequest$,
  AssociateContactWithUserResponse$,
  AssociatedContactSummary$,
  AssociateDefaultVocabulary$,
  AssociateDefaultVocabularyCommand,
  AssociateDefaultVocabularyRequest$,
  AssociateDefaultVocabularyResponse$,
  AssociateEmailAddressAlias$,
  AssociateEmailAddressAliasCommand,
  AssociateEmailAddressAliasRequest$,
  AssociateEmailAddressAliasResponse$,
  AssociateFlow$,
  AssociateFlowCommand,
  AssociateFlowRequest$,
  AssociateFlowResponse$,
  AssociateInstanceStorageConfig$,
  AssociateInstanceStorageConfigCommand,
  AssociateInstanceStorageConfigRequest$,
  AssociateInstanceStorageConfigResponse$,
  AssociateLambdaFunction$,
  AssociateLambdaFunctionCommand,
  AssociateLambdaFunctionRequest$,
  AssociateLexBot$,
  AssociateLexBotCommand,
  AssociateLexBotRequest$,
  AssociatePhoneNumberContactFlow$,
  AssociatePhoneNumberContactFlowCommand,
  AssociatePhoneNumberContactFlowRequest$,
  AssociateQueueQuickConnects$,
  AssociateQueueQuickConnectsCommand,
  AssociateQueueQuickConnectsRequest$,
  AssociateRoutingProfileQueues$,
  AssociateRoutingProfileQueuesCommand,
  AssociateRoutingProfileQueuesRequest$,
  AssociateSecurityKey$,
  AssociateSecurityKeyCommand,
  AssociateSecurityKeyRequest$,
  AssociateSecurityKeyResponse$,
  AssociateSecurityProfiles$,
  AssociateSecurityProfilesCommand,
  AssociateSecurityProfilesRequest$,
  AssociateTrafficDistributionGroupUser$,
  AssociateTrafficDistributionGroupUserCommand,
  AssociateTrafficDistributionGroupUserRequest$,
  AssociateTrafficDistributionGroupUserResponse$,
  AssociateUserProficiencies$,
  AssociateUserProficienciesCommand,
  AssociateUserProficienciesRequest$,
  AssociateWorkspace$,
  AssociateWorkspaceCommand,
  AssociateWorkspaceRequest$,
  AssociateWorkspaceResponse$,
  AttachedFile$,
  AttachedFileError$,
  AttachedFileInvalidRequestExceptionReason,
  AttachedFileServiceQuotaExceededExceptionReason,
  AttachmentReference$,
  Attendee$,
  Attribute$,
  AttributeAndCondition$,
  AttributeCondition$,
  AudioFeatures$,
  AudioQualityMetricsInfo$,
  AuthenticationProfile$,
  AuthenticationProfileSummary$,
  AutoEvaluationConfiguration$,
  AutoEvaluationDetails$,
  AutoEvaluationStatus,
  AutomaticFailConfiguration$,
  AvailableNumberSummary$,
  BatchAssociateAnalyticsDataSet$,
  BatchAssociateAnalyticsDataSetCommand,
  BatchAssociateAnalyticsDataSetRequest$,
  BatchAssociateAnalyticsDataSetResponse$,
  BatchCreateDataTableValue$,
  BatchCreateDataTableValueCommand,
  BatchCreateDataTableValueFailureResult$,
  BatchCreateDataTableValueRequest$,
  BatchCreateDataTableValueResponse$,
  BatchCreateDataTableValueSuccessResult$,
  BatchDeleteDataTableValue$,
  BatchDeleteDataTableValueCommand,
  BatchDeleteDataTableValueFailureResult$,
  BatchDeleteDataTableValueRequest$,
  BatchDeleteDataTableValueResponse$,
  BatchDeleteDataTableValueSuccessResult$,
  BatchDescribeDataTableValue$,
  BatchDescribeDataTableValueCommand,
  BatchDescribeDataTableValueFailureResult$,
  BatchDescribeDataTableValueRequest$,
  BatchDescribeDataTableValueResponse$,
  BatchDescribeDataTableValueSuccessResult$,
  BatchDisassociateAnalyticsDataSet$,
  BatchDisassociateAnalyticsDataSetCommand,
  BatchDisassociateAnalyticsDataSetRequest$,
  BatchDisassociateAnalyticsDataSetResponse$,
  BatchGetAttachedFileMetadata$,
  BatchGetAttachedFileMetadataCommand,
  BatchGetAttachedFileMetadataRequest$,
  BatchGetAttachedFileMetadataResponse$,
  BatchGetFlowAssociation$,
  BatchGetFlowAssociationCommand,
  BatchGetFlowAssociationRequest$,
  BatchGetFlowAssociationResponse$,
  BatchPutContact$,
  BatchPutContactCommand,
  BatchPutContactRequest$,
  BatchPutContactResponse$,
  BatchUpdateDataTableValue$,
  BatchUpdateDataTableValueCommand,
  BatchUpdateDataTableValueFailureResult$,
  BatchUpdateDataTableValueRequest$,
  BatchUpdateDataTableValueResponse$,
  BatchUpdateDataTableValueSuccessResult$,
  BehaviorType,
  BooleanComparisonType,
  BooleanCondition$,
  Campaign$,
  CaseSlaConfiguration$,
  Channel,
  ChatContactMetrics$,
  ChatEvent$,
  ChatEventType,
  ChatMessage$,
  ChatMetrics$,
  ChatParticipantRoleConfig$,
  ChatStreamingConfiguration$,
  ClaimedPhoneNumberSummary$,
  ClaimPhoneNumber$,
  ClaimPhoneNumberCommand,
  ClaimPhoneNumberRequest$,
  ClaimPhoneNumberResponse$,
  CommonAttributeAndCondition$,
  Comparison,
  CompleteAttachedFileUpload$,
  CompleteAttachedFileUploadCommand,
  CompleteAttachedFileUploadRequest$,
  CompleteAttachedFileUploadResponse$,
  Condition$,
  ConditionalOperationFailedException,
  ConditionalOperationFailedException$,
  ConflictException,
  ConflictException$,
  Connect,
  ConnectClient,
  ConnectionData$,
  ConnectServiceException,
  Contact$,
  ContactAnalysis$,
  ContactConfiguration$,
  ContactDataRequest$,
  ContactDetails$,
  ContactEvaluation$,
  ContactFilter$,
  ContactFlow$,
  ContactFlowAttributeAndCondition$,
  ContactFlowAttributeFilter$,
  ContactFlowModule$,
  ContactFlowModuleAliasInfo$,
  ContactFlowModuleAliasSummary$,
  ContactFlowModuleSearchCriteria$,
  ContactFlowModuleSearchFilter$,
  ContactFlowModuleState,
  ContactFlowModuleStatus,
  ContactFlowModuleSummary$,
  ContactFlowModuleVersionSummary$,
  ContactFlowNotPublishedException,
  ContactFlowNotPublishedException$,
  ContactFlowSearchCriteria$,
  ContactFlowSearchFilter$,
  ContactFlowState,
  ContactFlowStatus,
  ContactFlowSummary$,
  ContactFlowType,
  ContactFlowTypeCondition$,
  ContactFlowVersionSummary$,
  ContactInitiationMethod,
  ContactInteractionType,
  ContactMediaProcessingFailureMode,
  ContactMetricInfo$,
  ContactMetricName,
  ContactMetricResult$,
  ContactMetricValue$,
  ContactNotFoundException,
  ContactNotFoundException$,
  ContactParticipantRole,
  ContactRecordingType,
  ContactSearchSummary$,
  ContactSearchSummaryAgentInfo$,
  ContactSearchSummaryQueueInfo$,
  ContactSearchSummarySegmentAttributeValue$,
  ContactState,
  ControlPlaneAttributeFilter$,
  ControlPlaneTagFilter$,
  ControlPlaneUserAttributeFilter$,
  CreateAgentStatus$,
  CreateAgentStatusCommand,
  CreateAgentStatusRequest$,
  CreateAgentStatusResponse$,
  CreateCaseActionDefinition$,
  CreateContact$,
  CreateContactCommand,
  CreateContactFlow$,
  CreateContactFlowCommand,
  CreateContactFlowModule$,
  CreateContactFlowModuleAlias$,
  CreateContactFlowModuleAliasCommand,
  CreateContactFlowModuleAliasRequest$,
  CreateContactFlowModuleAliasResponse$,
  CreateContactFlowModuleCommand,
  CreateContactFlowModuleRequest$,
  CreateContactFlowModuleResponse$,
  CreateContactFlowModuleVersion$,
  CreateContactFlowModuleVersionCommand,
  CreateContactFlowModuleVersionRequest$,
  CreateContactFlowModuleVersionResponse$,
  CreateContactFlowRequest$,
  CreateContactFlowResponse$,
  CreateContactFlowVersion$,
  CreateContactFlowVersionCommand,
  CreateContactFlowVersionRequest$,
  CreateContactFlowVersionResponse$,
  CreateContactRequest$,
  CreateContactResponse$,
  CreateDataTable$,
  CreateDataTableAttribute$,
  CreateDataTableAttributeCommand,
  CreateDataTableAttributeRequest$,
  CreateDataTableAttributeResponse$,
  CreateDataTableCommand,
  CreateDataTableRequest$,
  CreateDataTableResponse$,
  CreatedByInfo$,
  CreateEmailAddress$,
  CreateEmailAddressCommand,
  CreateEmailAddressRequest$,
  CreateEmailAddressResponse$,
  CreateEvaluationForm$,
  CreateEvaluationFormCommand,
  CreateEvaluationFormRequest$,
  CreateEvaluationFormResponse$,
  CreateHoursOfOperation$,
  CreateHoursOfOperationCommand,
  CreateHoursOfOperationOverride$,
  CreateHoursOfOperationOverrideCommand,
  CreateHoursOfOperationOverrideRequest$,
  CreateHoursOfOperationOverrideResponse$,
  CreateHoursOfOperationRequest$,
  CreateHoursOfOperationResponse$,
  CreateInstance$,
  CreateInstanceCommand,
  CreateInstanceRequest$,
  CreateInstanceResponse$,
  CreateIntegrationAssociation$,
  CreateIntegrationAssociationCommand,
  CreateIntegrationAssociationRequest$,
  CreateIntegrationAssociationResponse$,
  CreateParticipant$,
  CreateParticipantCommand,
  CreateParticipantRequest$,
  CreateParticipantResponse$,
  CreatePersistentContactAssociation$,
  CreatePersistentContactAssociationCommand,
  CreatePersistentContactAssociationRequest$,
  CreatePersistentContactAssociationResponse$,
  CreatePredefinedAttribute$,
  CreatePredefinedAttributeCommand,
  CreatePredefinedAttributeRequest$,
  CreatePrompt$,
  CreatePromptCommand,
  CreatePromptRequest$,
  CreatePromptResponse$,
  CreatePushNotificationRegistration$,
  CreatePushNotificationRegistrationCommand,
  CreatePushNotificationRegistrationRequest$,
  CreatePushNotificationRegistrationResponse$,
  CreateQueue$,
  CreateQueueCommand,
  CreateQueueRequest$,
  CreateQueueResponse$,
  CreateQuickConnect$,
  CreateQuickConnectCommand,
  CreateQuickConnectRequest$,
  CreateQuickConnectResponse$,
  CreateRoutingProfile$,
  CreateRoutingProfileCommand,
  CreateRoutingProfileRequest$,
  CreateRoutingProfileResponse$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleRequest$,
  CreateRuleResponse$,
  CreateSecurityProfile$,
  CreateSecurityProfileCommand,
  CreateSecurityProfileRequest$,
  CreateSecurityProfileResponse$,
  CreateTaskTemplate$,
  CreateTaskTemplateCommand,
  CreateTaskTemplateRequest$,
  CreateTaskTemplateResponse$,
  CreateTrafficDistributionGroup$,
  CreateTrafficDistributionGroupCommand,
  CreateTrafficDistributionGroupRequest$,
  CreateTrafficDistributionGroupResponse$,
  CreateUseCase$,
  CreateUseCaseCommand,
  CreateUseCaseRequest$,
  CreateUseCaseResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserHierarchyGroup$,
  CreateUserHierarchyGroupCommand,
  CreateUserHierarchyGroupRequest$,
  CreateUserHierarchyGroupResponse$,
  CreateUserRequest$,
  CreateUserResponse$,
  CreateView$,
  CreateViewCommand,
  CreateViewRequest$,
  CreateViewResponse$,
  CreateViewVersion$,
  CreateViewVersionCommand,
  CreateViewVersionRequest$,
  CreateViewVersionResponse$,
  CreateVocabulary$,
  CreateVocabularyCommand,
  CreateVocabularyRequest$,
  CreateVocabularyResponse$,
  CreateWorkspace$,
  CreateWorkspaceCommand,
  CreateWorkspacePage$,
  CreateWorkspacePageCommand,
  CreateWorkspacePageRequest$,
  CreateWorkspacePageResponse$,
  CreateWorkspaceRequest$,
  CreateWorkspaceResponse$,
  Credentials$,
  CrossChannelBehavior$,
  CurrentMetric$,
  CurrentMetricData$,
  CurrentMetricName,
  CurrentMetricResult$,
  CurrentMetricSortCriteria$,
  Customer$,
  CustomerQualityMetrics$,
  CustomerVoiceActivity$,
  DataTable$,
  DataTableAccessControlConfiguration$,
  DataTableAttribute$,
  DataTableAttributeValueType,
  DataTableDeleteValueIdentifier$,
  DataTableEvaluatedValue$,
  DataTableLockLevel,
  DataTableLockVersion$,
  DataTableSearchCriteria$,
  DataTableSearchFilter$,
  DataTableStatus,
  DataTableSummary$,
  DataTableValue$,
  DataTableValueEvaluationSet$,
  DataTableValueIdentifier$,
  DataTableValueSummary$,
  DateComparisonType,
  DateCondition$,
  DateReference$,
  DateTimeComparisonType,
  DateTimeCondition$,
  DeactivateEvaluationForm$,
  DeactivateEvaluationFormCommand,
  DeactivateEvaluationFormRequest$,
  DeactivateEvaluationFormResponse$,
  DecimalComparisonType,
  DecimalCondition$,
  DefaultVocabulary$,
  DeleteAttachedFile$,
  DeleteAttachedFileCommand,
  DeleteAttachedFileRequest$,
  DeleteAttachedFileResponse$,
  DeleteContactEvaluation$,
  DeleteContactEvaluationCommand,
  DeleteContactEvaluationRequest$,
  DeleteContactFlow$,
  DeleteContactFlowCommand,
  DeleteContactFlowModule$,
  DeleteContactFlowModuleAlias$,
  DeleteContactFlowModuleAliasCommand,
  DeleteContactFlowModuleAliasRequest$,
  DeleteContactFlowModuleAliasResponse$,
  DeleteContactFlowModuleCommand,
  DeleteContactFlowModuleRequest$,
  DeleteContactFlowModuleResponse$,
  DeleteContactFlowModuleVersion$,
  DeleteContactFlowModuleVersionCommand,
  DeleteContactFlowModuleVersionRequest$,
  DeleteContactFlowModuleVersionResponse$,
  DeleteContactFlowRequest$,
  DeleteContactFlowResponse$,
  DeleteContactFlowVersion$,
  DeleteContactFlowVersionCommand,
  DeleteContactFlowVersionRequest$,
  DeleteContactFlowVersionResponse$,
  DeleteDataTable$,
  DeleteDataTableAttribute$,
  DeleteDataTableAttributeCommand,
  DeleteDataTableAttributeRequest$,
  DeleteDataTableAttributeResponse$,
  DeleteDataTableCommand,
  DeleteDataTableRequest$,
  DeleteDataTableResponse$,
  DeleteEmailAddress$,
  DeleteEmailAddressCommand,
  DeleteEmailAddressRequest$,
  DeleteEmailAddressResponse$,
  DeleteEvaluationForm$,
  DeleteEvaluationFormCommand,
  DeleteEvaluationFormRequest$,
  DeleteHoursOfOperation$,
  DeleteHoursOfOperationCommand,
  DeleteHoursOfOperationOverride$,
  DeleteHoursOfOperationOverrideCommand,
  DeleteHoursOfOperationOverrideRequest$,
  DeleteHoursOfOperationRequest$,
  DeleteInstance$,
  DeleteInstanceCommand,
  DeleteInstanceRequest$,
  DeleteIntegrationAssociation$,
  DeleteIntegrationAssociationCommand,
  DeleteIntegrationAssociationRequest$,
  DeletePredefinedAttribute$,
  DeletePredefinedAttributeCommand,
  DeletePredefinedAttributeRequest$,
  DeletePrompt$,
  DeletePromptCommand,
  DeletePromptRequest$,
  DeletePushNotificationRegistration$,
  DeletePushNotificationRegistrationCommand,
  DeletePushNotificationRegistrationRequest$,
  DeletePushNotificationRegistrationResponse$,
  DeleteQueue$,
  DeleteQueueCommand,
  DeleteQueueRequest$,
  DeleteQuickConnect$,
  DeleteQuickConnectCommand,
  DeleteQuickConnectRequest$,
  DeleteRoutingProfile$,
  DeleteRoutingProfileCommand,
  DeleteRoutingProfileRequest$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleRequest$,
  DeleteSecurityProfile$,
  DeleteSecurityProfileCommand,
  DeleteSecurityProfileRequest$,
  DeleteTaskTemplate$,
  DeleteTaskTemplateCommand,
  DeleteTaskTemplateRequest$,
  DeleteTaskTemplateResponse$,
  DeleteTrafficDistributionGroup$,
  DeleteTrafficDistributionGroupCommand,
  DeleteTrafficDistributionGroupRequest$,
  DeleteTrafficDistributionGroupResponse$,
  DeleteUseCase$,
  DeleteUseCaseCommand,
  DeleteUseCaseRequest$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserHierarchyGroup$,
  DeleteUserHierarchyGroupCommand,
  DeleteUserHierarchyGroupRequest$,
  DeleteUserRequest$,
  DeleteView$,
  DeleteViewCommand,
  DeleteViewRequest$,
  DeleteViewResponse$,
  DeleteViewVersion$,
  DeleteViewVersionCommand,
  DeleteViewVersionRequest$,
  DeleteViewVersionResponse$,
  DeleteVocabulary$,
  DeleteVocabularyCommand,
  DeleteVocabularyRequest$,
  DeleteVocabularyResponse$,
  DeleteWorkspace$,
  DeleteWorkspaceCommand,
  DeleteWorkspaceMedia$,
  DeleteWorkspaceMediaCommand,
  DeleteWorkspaceMediaRequest$,
  DeleteWorkspaceMediaResponse$,
  DeleteWorkspacePage$,
  DeleteWorkspacePageCommand,
  DeleteWorkspacePageRequest$,
  DeleteWorkspacePageResponse$,
  DeleteWorkspaceRequest$,
  DeleteWorkspaceResponse$,
  DescribeAgentStatus$,
  DescribeAgentStatusCommand,
  DescribeAgentStatusRequest$,
  DescribeAgentStatusResponse$,
  DescribeAuthenticationProfile$,
  DescribeAuthenticationProfileCommand,
  DescribeAuthenticationProfileRequest$,
  DescribeAuthenticationProfileResponse$,
  DescribeContact$,
  DescribeContactCommand,
  DescribeContactEvaluation$,
  DescribeContactEvaluationCommand,
  DescribeContactEvaluationRequest$,
  DescribeContactEvaluationResponse$,
  DescribeContactFlow$,
  DescribeContactFlowCommand,
  DescribeContactFlowModule$,
  DescribeContactFlowModuleAlias$,
  DescribeContactFlowModuleAliasCommand,
  DescribeContactFlowModuleAliasRequest$,
  DescribeContactFlowModuleAliasResponse$,
  DescribeContactFlowModuleCommand,
  DescribeContactFlowModuleRequest$,
  DescribeContactFlowModuleResponse$,
  DescribeContactFlowRequest$,
  DescribeContactFlowResponse$,
  DescribeContactRequest$,
  DescribeContactResponse$,
  DescribeDataTable$,
  DescribeDataTableAttribute$,
  DescribeDataTableAttributeCommand,
  DescribeDataTableAttributeRequest$,
  DescribeDataTableAttributeResponse$,
  DescribeDataTableCommand,
  DescribeDataTableRequest$,
  DescribeDataTableResponse$,
  DescribeEmailAddress$,
  DescribeEmailAddressCommand,
  DescribeEmailAddressRequest$,
  DescribeEmailAddressResponse$,
  DescribeEvaluationForm$,
  DescribeEvaluationFormCommand,
  DescribeEvaluationFormRequest$,
  DescribeEvaluationFormResponse$,
  DescribeHoursOfOperation$,
  DescribeHoursOfOperationCommand,
  DescribeHoursOfOperationOverride$,
  DescribeHoursOfOperationOverrideCommand,
  DescribeHoursOfOperationOverrideRequest$,
  DescribeHoursOfOperationOverrideResponse$,
  DescribeHoursOfOperationRequest$,
  DescribeHoursOfOperationResponse$,
  DescribeInstance$,
  DescribeInstanceAttribute$,
  DescribeInstanceAttributeCommand,
  DescribeInstanceAttributeRequest$,
  DescribeInstanceAttributeResponse$,
  DescribeInstanceCommand,
  DescribeInstanceRequest$,
  DescribeInstanceResponse$,
  DescribeInstanceStorageConfig$,
  DescribeInstanceStorageConfigCommand,
  DescribeInstanceStorageConfigRequest$,
  DescribeInstanceStorageConfigResponse$,
  DescribePhoneNumber$,
  DescribePhoneNumberCommand,
  DescribePhoneNumberRequest$,
  DescribePhoneNumberResponse$,
  DescribePredefinedAttribute$,
  DescribePredefinedAttributeCommand,
  DescribePredefinedAttributeRequest$,
  DescribePredefinedAttributeResponse$,
  DescribePrompt$,
  DescribePromptCommand,
  DescribePromptRequest$,
  DescribePromptResponse$,
  DescribeQueue$,
  DescribeQueueCommand,
  DescribeQueueRequest$,
  DescribeQueueResponse$,
  DescribeQuickConnect$,
  DescribeQuickConnectCommand,
  DescribeQuickConnectRequest$,
  DescribeQuickConnectResponse$,
  DescribeRoutingProfile$,
  DescribeRoutingProfileCommand,
  DescribeRoutingProfileRequest$,
  DescribeRoutingProfileResponse$,
  DescribeRule$,
  DescribeRuleCommand,
  DescribeRuleRequest$,
  DescribeRuleResponse$,
  DescribeSecurityProfile$,
  DescribeSecurityProfileCommand,
  DescribeSecurityProfileRequest$,
  DescribeSecurityProfileResponse$,
  DescribeTrafficDistributionGroup$,
  DescribeTrafficDistributionGroupCommand,
  DescribeTrafficDistributionGroupRequest$,
  DescribeTrafficDistributionGroupResponse$,
  DescribeUser$,
  DescribeUserCommand,
  DescribeUserHierarchyGroup$,
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyGroupRequest$,
  DescribeUserHierarchyGroupResponse$,
  DescribeUserHierarchyStructure$,
  DescribeUserHierarchyStructureCommand,
  DescribeUserHierarchyStructureRequest$,
  DescribeUserHierarchyStructureResponse$,
  DescribeUserRequest$,
  DescribeUserResponse$,
  DescribeView$,
  DescribeViewCommand,
  DescribeViewRequest$,
  DescribeViewResponse$,
  DescribeVocabulary$,
  DescribeVocabularyCommand,
  DescribeVocabularyRequest$,
  DescribeVocabularyResponse$,
  DescribeWorkspace$,
  DescribeWorkspaceCommand,
  DescribeWorkspaceRequest$,
  DescribeWorkspaceResponse$,
  DestinationNotAllowedException,
  DestinationNotAllowedException$,
  DeviceInfo$,
  DeviceType,
  Dimensions$,
  DirectoryType,
  DisassociateAnalyticsDataSet$,
  DisassociateAnalyticsDataSetCommand,
  DisassociateAnalyticsDataSetRequest$,
  DisassociateApprovedOrigin$,
  DisassociateApprovedOriginCommand,
  DisassociateApprovedOriginRequest$,
  DisassociateBot$,
  DisassociateBotCommand,
  DisassociateBotRequest$,
  DisassociateEmailAddressAlias$,
  DisassociateEmailAddressAliasCommand,
  DisassociateEmailAddressAliasRequest$,
  DisassociateEmailAddressAliasResponse$,
  DisassociateFlow$,
  DisassociateFlowCommand,
  DisassociateFlowRequest$,
  DisassociateFlowResponse$,
  DisassociateInstanceStorageConfig$,
  DisassociateInstanceStorageConfigCommand,
  DisassociateInstanceStorageConfigRequest$,
  DisassociateLambdaFunction$,
  DisassociateLambdaFunctionCommand,
  DisassociateLambdaFunctionRequest$,
  DisassociateLexBot$,
  DisassociateLexBotCommand,
  DisassociateLexBotRequest$,
  DisassociatePhoneNumberContactFlow$,
  DisassociatePhoneNumberContactFlowCommand,
  DisassociatePhoneNumberContactFlowRequest$,
  DisassociateQueueQuickConnects$,
  DisassociateQueueQuickConnectsCommand,
  DisassociateQueueQuickConnectsRequest$,
  DisassociateRoutingProfileQueues$,
  DisassociateRoutingProfileQueuesCommand,
  DisassociateRoutingProfileQueuesRequest$,
  DisassociateSecurityKey$,
  DisassociateSecurityKeyCommand,
  DisassociateSecurityKeyRequest$,
  DisassociateSecurityProfiles$,
  DisassociateSecurityProfilesCommand,
  DisassociateSecurityProfilesRequest$,
  DisassociateTrafficDistributionGroupUser$,
  DisassociateTrafficDistributionGroupUserCommand,
  DisassociateTrafficDistributionGroupUserRequest$,
  DisassociateTrafficDistributionGroupUserResponse$,
  DisassociateUserProficiencies$,
  DisassociateUserProficienciesCommand,
  DisassociateUserProficienciesRequest$,
  DisassociateWorkspace$,
  DisassociateWorkspaceCommand,
  DisassociateWorkspaceRequest$,
  DisassociateWorkspaceResponse$,
  DisconnectDetails$,
  DisconnectOnCustomerExitParticipantType,
  DisconnectReason$,
  DismissUserContact$,
  DismissUserContactCommand,
  DismissUserContactRequest$,
  DismissUserContactResponse$,
  Distribution$,
  DownloadUrlMetadata$,
  DuplicateResourceException,
  DuplicateResourceException$,
  EffectiveHoursOfOperations$,
  EmailAddressInfo$,
  EmailAddressMetadata$,
  EmailAddressSearchCriteria$,
  EmailAddressSearchFilter$,
  EmailAttachment$,
  EmailHeaderType,
  EmailMessageReference$,
  EmailRecipient$,
  EmailReference$,
  EmptyFieldValue$,
  EncryptionConfig$,
  EncryptionType,
  EndAssociatedTasksActionDefinition$,
  Endpoint$,
  EndpointInfo$,
  EndpointType,
  EntityType,
  ErrorResult$,
  EvaluateDataTableValues$,
  EvaluateDataTableValuesCommand,
  EvaluateDataTableValuesRequest$,
  EvaluateDataTableValuesResponse$,
  Evaluation$,
  EvaluationAcknowledgement$,
  EvaluationAcknowledgementSummary$,
  EvaluationAnswerData$,
  EvaluationAnswerInput$,
  EvaluationAnswerOutput$,
  EvaluationAutomationRuleCategory$,
  EvaluationContactLensAnswerAnalysisDetails$,
  EvaluationContactParticipant$,
  EvaluationForm$,
  EvaluationFormAutoEvaluationConfiguration$,
  EvaluationFormContent$,
  EvaluationFormItem$,
  EvaluationFormItemEnablementAction,
  EvaluationFormItemEnablementCondition$,
  EvaluationFormItemEnablementConditionOperand$,
  EvaluationFormItemEnablementConfiguration$,
  EvaluationFormItemEnablementExpression$,
  EvaluationFormItemEnablementOperator,
  EvaluationFormItemEnablementSource$,
  EvaluationFormItemEnablementSourceType,
  EvaluationFormItemEnablementSourceValue$,
  EvaluationFormItemEnablementSourceValueType,
  EvaluationFormItemSourceValuesComparator,
  EvaluationFormLanguageCode,
  EvaluationFormLanguageConfiguration$,
  EvaluationFormMultiSelectQuestionAutomation$,
  EvaluationFormMultiSelectQuestionAutomationOption$,
  EvaluationFormMultiSelectQuestionDisplayMode,
  EvaluationFormMultiSelectQuestionOption$,
  EvaluationFormMultiSelectQuestionProperties$,
  EvaluationFormNumericQuestionAutomation$,
  EvaluationFormNumericQuestionOption$,
  EvaluationFormNumericQuestionProperties$,
  EvaluationFormQuestion$,
  EvaluationFormQuestionAutomationAnswerSource$,
  EvaluationFormQuestionAutomationAnswerSourceType,
  EvaluationFormQuestionType,
  EvaluationFormQuestionTypeProperties$,
  EvaluationFormScoringMode,
  EvaluationFormScoringStatus,
  EvaluationFormScoringStrategy$,
  EvaluationFormSearchCriteria$,
  EvaluationFormSearchFilter$,
  EvaluationFormSearchSummary$,
  EvaluationFormSection$,
  EvaluationFormSingleSelectQuestionAutomation$,
  EvaluationFormSingleSelectQuestionAutomationOption$,
  EvaluationFormSingleSelectQuestionDisplayMode,
  EvaluationFormSingleSelectQuestionOption$,
  EvaluationFormSingleSelectQuestionProperties$,
  EvaluationFormSummary$,
  EvaluationFormTargetConfiguration$,
  EvaluationFormTextQuestionAutomation$,
  EvaluationFormTextQuestionProperties$,
  EvaluationFormVersionStatus,
  EvaluationFormVersionSummary$,
  EvaluationGenAIAnswerAnalysisDetails$,
  EvaluationMetadata$,
  EvaluationNote$,
  EvaluationQuestionAnswerAnalysisDetails$,
  EvaluationQuestionAnswerAnalysisType,
  EvaluationQuestionInputDetails$,
  EvaluationScore$,
  EvaluationSearchCriteria$,
  EvaluationSearchFilter$,
  EvaluationSearchMetadata$,
  EvaluationSearchSummary$,
  EvaluationStatus,
  EvaluationSuggestedAnswer$,
  EvaluationSuggestedAnswerStatus,
  EvaluationSuggestedAnswerTranscriptMillisecondOffsets$,
  EvaluationSummary$,
  EvaluationTranscriptPointOfInterest$,
  EvaluationTranscriptType,
  EvaluationType,
  EvaluatorUserUnion$,
  EventBridgeActionDefinition$,
  EventSourceName,
  Expiry$,
  Expression$,
  ExternalInvocationConfiguration$,
  FailedBatchAssociationSummary$,
  FailedRequest$,
  FailureReasonCode,
  FieldValue$,
  FieldValueUnion$,
  FileStatusType,
  FileUseCaseType,
  Filters$,
  FilterV2$,
  FilterV2StringCondition$,
  FilterV2StringConditionComparisonOperator,
  FlowAssociationResourceType,
  FlowAssociationSummary$,
  FlowModule$,
  FlowModuleType,
  FlowQuickConnectConfig$,
  FontFamily$,
  GetAttachedFile$,
  GetAttachedFileCommand,
  GetAttachedFileRequest$,
  GetAttachedFileResponse$,
  GetContactAttributes$,
  GetContactAttributesCommand,
  GetContactAttributesRequest$,
  GetContactAttributesResponse$,
  GetContactMetrics$,
  GetContactMetricsCommand,
  GetContactMetricsRequest$,
  GetContactMetricsResponse$,
  GetCurrentMetricData$,
  GetCurrentMetricDataCommand,
  GetCurrentMetricDataRequest$,
  GetCurrentMetricDataResponse$,
  GetCurrentUserData$,
  GetCurrentUserDataCommand,
  GetCurrentUserDataRequest$,
  GetCurrentUserDataResponse$,
  GetEffectiveHoursOfOperations$,
  GetEffectiveHoursOfOperationsCommand,
  GetEffectiveHoursOfOperationsRequest$,
  GetEffectiveHoursOfOperationsResponse$,
  GetFederationToken$,
  GetFederationTokenCommand,
  GetFederationTokenRequest$,
  GetFederationTokenResponse$,
  GetFlowAssociation$,
  GetFlowAssociationCommand,
  GetFlowAssociationRequest$,
  GetFlowAssociationResponse$,
  GetMetricData$,
  GetMetricDataCommand,
  GetMetricDataRequest$,
  GetMetricDataResponse$,
  GetMetricDataV2$,
  GetMetricDataV2Command,
  GetMetricDataV2Request$,
  GetMetricDataV2Response$,
  GetPromptFile$,
  GetPromptFileCommand,
  GetPromptFileRequest$,
  GetPromptFileResponse$,
  GetTaskTemplate$,
  GetTaskTemplateCommand,
  GetTaskTemplateRequest$,
  GetTaskTemplateResponse$,
  GetTrafficDistribution$,
  GetTrafficDistributionCommand,
  GetTrafficDistributionRequest$,
  GetTrafficDistributionResponse$,
  GlobalResiliencyMetadata$,
  GranularAccessControlConfiguration$,
  Grouping,
  HierarchyGroup$,
  HierarchyGroupCondition$,
  HierarchyGroupMatchType,
  HierarchyGroups$,
  HierarchyGroupSummary$,
  HierarchyGroupSummaryReference$,
  HierarchyLevel$,
  HierarchyLevelUpdate$,
  HierarchyPath$,
  HierarchyPathReference$,
  HierarchyStructure$,
  HierarchyStructureUpdate$,
  HistoricalMetric$,
  HistoricalMetricData$,
  HistoricalMetricName,
  HistoricalMetricResult$,
  HoursOfOperation$,
  HoursOfOperationConfig$,
  HoursOfOperationDays,
  HoursOfOperationOverride$,
  HoursOfOperationOverrideConfig$,
  HoursOfOperationOverrideSearchCriteria$,
  HoursOfOperationSearchCriteria$,
  HoursOfOperationSearchFilter$,
  HoursOfOperationSummary$,
  HoursOfOperationTimeSlice$,
  IdempotencyException,
  IdempotencyException$,
  ImagesLogo$,
  ImportPhoneNumber$,
  ImportPhoneNumberCommand,
  ImportPhoneNumberRequest$,
  ImportPhoneNumberResponse$,
  ImportWorkspaceMedia$,
  ImportWorkspaceMediaCommand,
  ImportWorkspaceMediaRequest$,
  ImportWorkspaceMediaResponse$,
  InboundAdditionalRecipients$,
  InboundEmailContent$,
  InboundMessageSourceType,
  InboundRawMessage$,
  InitiateAs,
  InputPredefinedAttributeConfiguration$,
  Instance$,
  InstanceAttributeType,
  InstanceReplicationStatus,
  InstanceStatus,
  InstanceStatusReason$,
  InstanceStorageConfig$,
  InstanceStorageResourceType,
  InstanceSummary$,
  IntegrationAssociationSummary$,
  IntegrationType,
  InternalServiceException,
  InternalServiceException$,
  IntervalDetails$,
  IntervalPeriod,
  InvalidActiveRegionException,
  InvalidActiveRegionException$,
  InvalidContactFlowException,
  InvalidContactFlowException$,
  InvalidContactFlowModuleException,
  InvalidContactFlowModuleException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidRequestExceptionReason$,
  InvisibleFieldInfo$,
  IvrRecordingTrack,
  KinesisFirehoseConfig$,
  KinesisStreamConfig$,
  KinesisVideoStreamConfig$,
  LexBot$,
  LexBotConfig$,
  LexV2Bot$,
  LexVersion,
  LimitExceededException,
  LimitExceededException$,
  ListAgentStatuses$,
  ListAgentStatusesCommand,
  ListAgentStatusRequest$,
  ListAgentStatusResponse$,
  ListAnalyticsDataAssociations$,
  ListAnalyticsDataAssociationsCommand,
  ListAnalyticsDataAssociationsRequest$,
  ListAnalyticsDataAssociationsResponse$,
  ListAnalyticsDataLakeDataSets$,
  ListAnalyticsDataLakeDataSetsCommand,
  ListAnalyticsDataLakeDataSetsRequest$,
  ListAnalyticsDataLakeDataSetsResponse$,
  ListApprovedOrigins$,
  ListApprovedOriginsCommand,
  ListApprovedOriginsRequest$,
  ListApprovedOriginsResponse$,
  ListAssociatedContacts$,
  ListAssociatedContactsCommand,
  ListAssociatedContactsRequest$,
  ListAssociatedContactsResponse$,
  ListAuthenticationProfiles$,
  ListAuthenticationProfilesCommand,
  ListAuthenticationProfilesRequest$,
  ListAuthenticationProfilesResponse$,
  ListBots$,
  ListBotsCommand,
  ListBotsRequest$,
  ListBotsResponse$,
  ListCondition$,
  ListContactEvaluations$,
  ListContactEvaluationsCommand,
  ListContactEvaluationsRequest$,
  ListContactEvaluationsResponse$,
  ListContactFlowModuleAliases$,
  ListContactFlowModuleAliasesCommand,
  ListContactFlowModuleAliasesRequest$,
  ListContactFlowModuleAliasesResponse$,
  ListContactFlowModules$,
  ListContactFlowModulesCommand,
  ListContactFlowModulesRequest$,
  ListContactFlowModulesResponse$,
  ListContactFlowModuleVersions$,
  ListContactFlowModuleVersionsCommand,
  ListContactFlowModuleVersionsRequest$,
  ListContactFlowModuleVersionsResponse$,
  ListContactFlows$,
  ListContactFlowsCommand,
  ListContactFlowsRequest$,
  ListContactFlowsResponse$,
  ListContactFlowVersions$,
  ListContactFlowVersionsCommand,
  ListContactFlowVersionsRequest$,
  ListContactFlowVersionsResponse$,
  ListContactReferences$,
  ListContactReferencesCommand,
  ListContactReferencesRequest$,
  ListContactReferencesResponse$,
  ListDataTableAttributes$,
  ListDataTableAttributesCommand,
  ListDataTableAttributesRequest$,
  ListDataTableAttributesResponse$,
  ListDataTablePrimaryValues$,
  ListDataTablePrimaryValuesCommand,
  ListDataTablePrimaryValuesRequest$,
  ListDataTablePrimaryValuesResponse$,
  ListDataTables$,
  ListDataTablesCommand,
  ListDataTablesRequest$,
  ListDataTablesResponse$,
  ListDataTableValues$,
  ListDataTableValuesCommand,
  ListDataTableValuesRequest$,
  ListDataTableValuesResponse$,
  ListDefaultVocabularies$,
  ListDefaultVocabulariesCommand,
  ListDefaultVocabulariesRequest$,
  ListDefaultVocabulariesResponse$,
  ListEntitySecurityProfiles$,
  ListEntitySecurityProfilesCommand,
  ListEntitySecurityProfilesRequest$,
  ListEntitySecurityProfilesResponse$,
  ListEvaluationForms$,
  ListEvaluationFormsCommand,
  ListEvaluationFormsRequest$,
  ListEvaluationFormsResponse$,
  ListEvaluationFormVersions$,
  ListEvaluationFormVersionsCommand,
  ListEvaluationFormVersionsRequest$,
  ListEvaluationFormVersionsResponse$,
  ListFlowAssociationResourceType,
  ListFlowAssociations$,
  ListFlowAssociationsCommand,
  ListFlowAssociationsRequest$,
  ListFlowAssociationsResponse$,
  ListHoursOfOperationOverrides$,
  ListHoursOfOperationOverridesCommand,
  ListHoursOfOperationOverridesRequest$,
  ListHoursOfOperationOverridesResponse$,
  ListHoursOfOperations$,
  ListHoursOfOperationsCommand,
  ListHoursOfOperationsRequest$,
  ListHoursOfOperationsResponse$,
  ListInstanceAttributes$,
  ListInstanceAttributesCommand,
  ListInstanceAttributesRequest$,
  ListInstanceAttributesResponse$,
  ListInstances$,
  ListInstancesCommand,
  ListInstancesRequest$,
  ListInstancesResponse$,
  ListInstanceStorageConfigs$,
  ListInstanceStorageConfigsCommand,
  ListInstanceStorageConfigsRequest$,
  ListInstanceStorageConfigsResponse$,
  ListIntegrationAssociations$,
  ListIntegrationAssociationsCommand,
  ListIntegrationAssociationsRequest$,
  ListIntegrationAssociationsResponse$,
  ListLambdaFunctions$,
  ListLambdaFunctionsCommand,
  ListLambdaFunctionsRequest$,
  ListLambdaFunctionsResponse$,
  ListLexBots$,
  ListLexBotsCommand,
  ListLexBotsRequest$,
  ListLexBotsResponse$,
  ListPhoneNumbers$,
  ListPhoneNumbersCommand,
  ListPhoneNumbersRequest$,
  ListPhoneNumbersResponse$,
  ListPhoneNumbersSummary$,
  ListPhoneNumbersV2$,
  ListPhoneNumbersV2Command,
  ListPhoneNumbersV2Request$,
  ListPhoneNumbersV2Response$,
  ListPredefinedAttributes$,
  ListPredefinedAttributesCommand,
  ListPredefinedAttributesRequest$,
  ListPredefinedAttributesResponse$,
  ListPrompts$,
  ListPromptsCommand,
  ListPromptsRequest$,
  ListPromptsResponse$,
  ListQueueQuickConnects$,
  ListQueueQuickConnectsCommand,
  ListQueueQuickConnectsRequest$,
  ListQueueQuickConnectsResponse$,
  ListQueues$,
  ListQueuesCommand,
  ListQueuesRequest$,
  ListQueuesResponse$,
  ListQuickConnects$,
  ListQuickConnectsCommand,
  ListQuickConnectsRequest$,
  ListQuickConnectsResponse$,
  ListRealtimeContactAnalysisSegmentsV2$,
  ListRealtimeContactAnalysisSegmentsV2Command,
  ListRealtimeContactAnalysisSegmentsV2Request$,
  ListRealtimeContactAnalysisSegmentsV2Response$,
  ListRoutingProfileManualAssignmentQueues$,
  ListRoutingProfileManualAssignmentQueuesCommand,
  ListRoutingProfileManualAssignmentQueuesRequest$,
  ListRoutingProfileManualAssignmentQueuesResponse$,
  ListRoutingProfileQueues$,
  ListRoutingProfileQueuesCommand,
  ListRoutingProfileQueuesRequest$,
  ListRoutingProfileQueuesResponse$,
  ListRoutingProfiles$,
  ListRoutingProfilesCommand,
  ListRoutingProfilesRequest$,
  ListRoutingProfilesResponse$,
  ListRules$,
  ListRulesCommand,
  ListRulesRequest$,
  ListRulesResponse$,
  ListSecurityKeys$,
  ListSecurityKeysCommand,
  ListSecurityKeysRequest$,
  ListSecurityKeysResponse$,
  ListSecurityProfileApplications$,
  ListSecurityProfileApplicationsCommand,
  ListSecurityProfileApplicationsRequest$,
  ListSecurityProfileApplicationsResponse$,
  ListSecurityProfileFlowModules$,
  ListSecurityProfileFlowModulesCommand,
  ListSecurityProfileFlowModulesRequest$,
  ListSecurityProfileFlowModulesResponse$,
  ListSecurityProfilePermissions$,
  ListSecurityProfilePermissionsCommand,
  ListSecurityProfilePermissionsRequest$,
  ListSecurityProfilePermissionsResponse$,
  ListSecurityProfiles$,
  ListSecurityProfilesCommand,
  ListSecurityProfilesRequest$,
  ListSecurityProfilesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTaskTemplates$,
  ListTaskTemplatesCommand,
  ListTaskTemplatesRequest$,
  ListTaskTemplatesResponse$,
  ListTrafficDistributionGroups$,
  ListTrafficDistributionGroupsCommand,
  ListTrafficDistributionGroupsRequest$,
  ListTrafficDistributionGroupsResponse$,
  ListTrafficDistributionGroupUsers$,
  ListTrafficDistributionGroupUsersCommand,
  ListTrafficDistributionGroupUsersRequest$,
  ListTrafficDistributionGroupUsersResponse$,
  ListUseCases$,
  ListUseCasesCommand,
  ListUseCasesRequest$,
  ListUseCasesResponse$,
  ListUserHierarchyGroups$,
  ListUserHierarchyGroupsCommand,
  ListUserHierarchyGroupsRequest$,
  ListUserHierarchyGroupsResponse$,
  ListUserProficiencies$,
  ListUserProficienciesCommand,
  ListUserProficienciesRequest$,
  ListUserProficienciesResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  ListViews$,
  ListViewsCommand,
  ListViewsRequest$,
  ListViewsResponse$,
  ListViewVersions$,
  ListViewVersionsCommand,
  ListViewVersionsRequest$,
  ListViewVersionsResponse$,
  ListWorkspaceMedia$,
  ListWorkspaceMediaCommand,
  ListWorkspaceMediaRequest$,
  ListWorkspaceMediaResponse$,
  ListWorkspacePages$,
  ListWorkspacePagesCommand,
  ListWorkspacePagesRequest$,
  ListWorkspacePagesResponse$,
  ListWorkspaces$,
  ListWorkspacesCommand,
  ListWorkspacesRequest$,
  ListWorkspacesResponse$,
  MatchCriteria$,
  MaximumResultReturnedException,
  MaximumResultReturnedException$,
  MediaConcurrency$,
  MediaItem$,
  MediaPlacement$,
  MediaStreamType,
  MediaType,
  Meeting$,
  MeetingFeaturesConfiguration$,
  MeetingFeatureStatus,
  MetricDataV2$,
  MetricFilterV2$,
  MetricInterval$,
  MetricResultV2$,
  MetricV2$,
  MonitorCapability,
  MonitorContact$,
  MonitorContactCommand,
  MonitorContactRequest$,
  MonitorContactResponse$,
  MultiSelectQuestionRuleCategoryAutomation$,
  MultiSelectQuestionRuleCategoryAutomationCondition,
  NameCriteria$,
  NewSessionDetails$,
  NextContactEntry$,
  NextContactMetadata$,
  NextContactType,
  NotificationContentType,
  NotificationDeliveryType,
  NotificationRecipientType$,
  NumberComparisonType,
  NumberCondition$,
  NumberReference$,
  NumericQuestionPropertyAutomationLabel,
  NumericQuestionPropertyValueAutomation$,
  OperationalHour$,
  OutboundAdditionalRecipients$,
  OutboundCallerConfig$,
  OutboundContactNotPermittedException,
  OutboundContactNotPermittedException$,
  OutboundEmailConfig$,
  OutboundEmailContent$,
  OutboundMessageSourceType,
  OutboundRawMessage$,
  OutboundStrategy$,
  OutboundStrategyConfig$,
  OutboundStrategyType,
  OutputTypeNotFoundException,
  OutputTypeNotFoundException$,
  OverrideDays,
  OverrideTimeSlice$,
  paginateEvaluateDataTableValues,
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
  paginateListContactFlowModules,
  paginateListContactFlowModuleVersions,
  paginateListContactFlows,
  paginateListContactFlowVersions,
  paginateListContactReferences,
  paginateListDataTableAttributes,
  paginateListDataTablePrimaryValues,
  paginateListDataTables,
  paginateListDataTableValues,
  paginateListDefaultVocabularies,
  paginateListEvaluationForms,
  paginateListEvaluationFormVersions,
  paginateListFlowAssociations,
  paginateListHoursOfOperationOverrides,
  paginateListHoursOfOperations,
  paginateListInstanceAttributes,
  paginateListInstances,
  paginateListInstanceStorageConfigs,
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
  paginateListTrafficDistributionGroups,
  paginateListTrafficDistributionGroupUsers,
  paginateListUseCases,
  paginateListUserHierarchyGroups,
  paginateListUserProficiencies,
  paginateListUsers,
  paginateListViews,
  paginateListViewVersions,
  paginateListWorkspacePages,
  paginateListWorkspaces,
  paginateSearchAgentStatuses,
  paginateSearchAvailablePhoneNumbers,
  paginateSearchContactFlowModules,
  paginateSearchContactFlows,
  paginateSearchContacts,
  paginateSearchDataTables,
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
  paginateSearchViews,
  paginateSearchVocabularies,
  paginateSearchWorkspaceAssociations,
  paginateSearchWorkspaces,
  PaletteCanvas$,
  PaletteHeader$,
  PaletteNavigation$,
  PalettePrimary$,
  ParticipantCapabilities$,
  ParticipantConfiguration$,
  ParticipantDetails$,
  ParticipantDetailsToAdd$,
  ParticipantMetrics$,
  ParticipantRole,
  ParticipantState,
  ParticipantTimerAction,
  ParticipantTimerConfiguration$,
  ParticipantTimerType,
  ParticipantTimerValue$,
  ParticipantTokenCredentials$,
  ParticipantType,
  PauseContact$,
  PauseContactCommand,
  PauseContactRequest$,
  PauseContactResponse$,
  PersistentChat$,
  PhoneNumberCountryCode,
  PhoneNumberQuickConnectConfig$,
  PhoneNumberStatus$,
  PhoneNumberSummary$,
  PhoneNumberType,
  PhoneNumberWorkflowStatus,
  PhoneType,
  PostAcceptTimeoutConfig$,
  PredefinedAttribute$,
  PredefinedAttributeConfiguration$,
  PredefinedAttributeSearchCriteria$,
  PredefinedAttributeSummary$,
  PredefinedAttributeValues$,
  Preview$,
  PrimaryAttributeAccessControlConfigurationItem$,
  PrimaryAttributeValue$,
  PrimaryAttributeValueFilter$,
  PrimaryValue$,
  PrimaryValueResponse$,
  ProblemDetail$,
  Prompt$,
  PromptSearchCriteria$,
  PromptSearchFilter$,
  PromptSummary$,
  PropertyValidationException,
  PropertyValidationException$,
  PropertyValidationExceptionProperty$,
  PropertyValidationExceptionReason,
  PutUserStatus$,
  PutUserStatusCommand,
  PutUserStatusRequest$,
  PutUserStatusResponse$,
  QualityMetrics$,
  QuestionRuleCategoryAutomationCondition,
  Queue$,
  QueueInfo$,
  QueueInfoInput$,
  QueueQuickConnectConfig$,
  QueueReference$,
  QueueSearchCriteria$,
  QueueSearchFilter$,
  QueueStatus,
  QueueSummary$,
  QueueType,
  QuickConnect$,
  QuickConnectConfig$,
  QuickConnectContactData$,
  QuickConnectSearchCriteria$,
  QuickConnectSearchFilter$,
  QuickConnectSummary$,
  QuickConnectType,
  Range$,
  ReadOnlyFieldInfo$,
  RealTimeContactAnalysisAttachment$,
  RealTimeContactAnalysisCategoryDetails$,
  RealTimeContactAnalysisCharacterInterval$,
  RealTimeContactAnalysisIssueDetected$,
  RealTimeContactAnalysisOutputType,
  RealTimeContactAnalysisPointOfInterest$,
  RealTimeContactAnalysisPostContactSummaryFailureCode,
  RealTimeContactAnalysisPostContactSummaryStatus,
  RealtimeContactAnalysisSegment$,
  RealTimeContactAnalysisSegmentAttachments$,
  RealTimeContactAnalysisSegmentCategories$,
  RealTimeContactAnalysisSegmentEvent$,
  RealTimeContactAnalysisSegmentIssues$,
  RealTimeContactAnalysisSegmentPostContactSummary$,
  RealTimeContactAnalysisSegmentTranscript$,
  RealTimeContactAnalysisSegmentType,
  RealTimeContactAnalysisSentimentLabel,
  RealTimeContactAnalysisStatus,
  RealTimeContactAnalysisSupportedChannel,
  RealTimeContactAnalysisTimeData$,
  RealTimeContactAnalysisTranscriptItemRedaction$,
  RealTimeContactAnalysisTranscriptItemWithCharacterOffsets$,
  RealTimeContactAnalysisTranscriptItemWithContent$,
  RecordingInfo$,
  RecordingStatus,
  RecordPrimaryValue$,
  Reference$,
  ReferenceStatus,
  ReferenceSummary$,
  ReferenceType,
  RehydrationType,
  ReleasePhoneNumber$,
  ReleasePhoneNumberCommand,
  ReleasePhoneNumberRequest$,
  ReplicateInstance$,
  ReplicateInstanceCommand,
  ReplicateInstanceRequest$,
  ReplicateInstanceResponse$,
  ReplicationConfiguration$,
  ReplicationStatusSummary$,
  RequiredFieldInfo$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotReadyException,
  ResourceNotReadyException$,
  ResourceTagsSearchCriteria$,
  ResourceType,
  ResponseMode,
  ResumeContact$,
  ResumeContactCommand,
  ResumeContactRecording$,
  ResumeContactRecordingCommand,
  ResumeContactRecordingRequest$,
  ResumeContactRecordingResponse$,
  ResumeContactRequest$,
  ResumeContactResponse$,
  RoutingCriteria$,
  RoutingCriteriaInput$,
  RoutingCriteriaInputStep$,
  RoutingCriteriaInputStepExpiry$,
  RoutingCriteriaStepStatus,
  RoutingProfile$,
  RoutingProfileManualAssignmentQueueConfig$,
  RoutingProfileManualAssignmentQueueConfigSummary$,
  RoutingProfileQueueConfig$,
  RoutingProfileQueueConfigSummary$,
  RoutingProfileQueueReference$,
  RoutingProfileReference$,
  RoutingProfileSearchCriteria$,
  RoutingProfileSearchFilter$,
  RoutingProfileSummary$,
  Rule$,
  RuleAction$,
  RulePublishStatus,
  RuleSummary$,
  RuleTriggerEventSource$,
  S3Config$,
  ScreenShareCapability,
  SearchableAgentCriteriaStep$,
  SearchableContactAttributes$,
  SearchableContactAttributesCriteria$,
  SearchableQueueType,
  SearchableRoutingCriteria$,
  SearchableRoutingCriteriaStep$,
  SearchableSegmentAttributes$,
  SearchableSegmentAttributesCriteria$,
  SearchAgentStatuses$,
  SearchAgentStatusesCommand,
  SearchAgentStatusesRequest$,
  SearchAgentStatusesResponse$,
  SearchAvailablePhoneNumbers$,
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersRequest$,
  SearchAvailablePhoneNumbersResponse$,
  SearchContactEvaluations$,
  SearchContactEvaluationsCommand,
  SearchContactEvaluationsRequest$,
  SearchContactEvaluationsResponse$,
  SearchContactFlowModules$,
  SearchContactFlowModulesCommand,
  SearchContactFlowModulesRequest$,
  SearchContactFlowModulesResponse$,
  SearchContactFlows$,
  SearchContactFlowsCommand,
  SearchContactFlowsRequest$,
  SearchContactFlowsResponse$,
  SearchContacts$,
  SearchContactsAdditionalTimeRange$,
  SearchContactsAdditionalTimeRangeCriteria$,
  SearchContactsCommand,
  SearchContactsMatchType,
  SearchContactsRequest$,
  SearchContactsResponse$,
  SearchContactsTimeRange$,
  SearchContactsTimeRangeConditionType,
  SearchContactsTimeRangeType,
  SearchContactsTimestampCondition$,
  SearchCriteria$,
  SearchDataTables$,
  SearchDataTablesCommand,
  SearchDataTablesRequest$,
  SearchDataTablesResponse$,
  SearchEmailAddresses$,
  SearchEmailAddressesCommand,
  SearchEmailAddressesRequest$,
  SearchEmailAddressesResponse$,
  SearchEvaluationForms$,
  SearchEvaluationFormsCommand,
  SearchEvaluationFormsRequest$,
  SearchEvaluationFormsResponse$,
  SearchHoursOfOperationOverrides$,
  SearchHoursOfOperationOverridesCommand,
  SearchHoursOfOperationOverridesRequest$,
  SearchHoursOfOperationOverridesResponse$,
  SearchHoursOfOperations$,
  SearchHoursOfOperationsCommand,
  SearchHoursOfOperationsRequest$,
  SearchHoursOfOperationsResponse$,
  SearchPredefinedAttributes$,
  SearchPredefinedAttributesCommand,
  SearchPredefinedAttributesRequest$,
  SearchPredefinedAttributesResponse$,
  SearchPrompts$,
  SearchPromptsCommand,
  SearchPromptsRequest$,
  SearchPromptsResponse$,
  SearchQueues$,
  SearchQueuesCommand,
  SearchQueuesRequest$,
  SearchQueuesResponse$,
  SearchQuickConnects$,
  SearchQuickConnectsCommand,
  SearchQuickConnectsRequest$,
  SearchQuickConnectsResponse$,
  SearchResourceTags$,
  SearchResourceTagsCommand,
  SearchResourceTagsRequest$,
  SearchResourceTagsResponse$,
  SearchRoutingProfiles$,
  SearchRoutingProfilesCommand,
  SearchRoutingProfilesRequest$,
  SearchRoutingProfilesResponse$,
  SearchSecurityProfiles$,
  SearchSecurityProfilesCommand,
  SearchSecurityProfilesRequest$,
  SearchSecurityProfilesResponse$,
  SearchUserHierarchyGroups$,
  SearchUserHierarchyGroupsCommand,
  SearchUserHierarchyGroupsRequest$,
  SearchUserHierarchyGroupsResponse$,
  SearchUsers$,
  SearchUsersCommand,
  SearchUsersRequest$,
  SearchUsersResponse$,
  SearchViews$,
  SearchViewsCommand,
  SearchViewsRequest$,
  SearchViewsResponse$,
  SearchVocabularies$,
  SearchVocabulariesCommand,
  SearchVocabulariesRequest$,
  SearchVocabulariesResponse$,
  SearchWorkspaceAssociations$,
  SearchWorkspaceAssociationsCommand,
  SearchWorkspaceAssociationsRequest$,
  SearchWorkspaceAssociationsResponse$,
  SearchWorkspaces$,
  SearchWorkspacesCommand,
  SearchWorkspacesRequest$,
  SearchWorkspacesResponse$,
  SecurityKey$,
  SecurityProfile$,
  SecurityProfileItem$,
  SecurityProfileSearchCriteria$,
  SecurityProfileSearchSummary$,
  SecurityProfilesSearchFilter$,
  SecurityProfileSummary$,
  SegmentAttributeValue$,
  SendChatIntegrationEvent$,
  SendChatIntegrationEventCommand,
  SendChatIntegrationEventRequest$,
  SendChatIntegrationEventResponse$,
  SendNotificationActionDefinition$,
  SendOutboundEmail$,
  SendOutboundEmailCommand,
  SendOutboundEmailRequest$,
  SendOutboundEmailResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason$,
  SignInConfig$,
  SignInDistribution$,
  SingleSelectQuestionRuleCategoryAutomation$,
  SingleSelectQuestionRuleCategoryAutomationCondition,
  SlaAssignmentType,
  SlaType,
  Sort$,
  SortableFieldName,
  SortOrder,
  SourceCampaign$,
  SourceType,
  StartAttachedFileUpload$,
  StartAttachedFileUploadCommand,
  StartAttachedFileUploadRequest$,
  StartAttachedFileUploadResponse$,
  StartChatContact$,
  StartChatContactCommand,
  StartChatContactRequest$,
  StartChatContactResponse$,
  StartContactEvaluation$,
  StartContactEvaluationCommand,
  StartContactEvaluationRequest$,
  StartContactEvaluationResponse$,
  StartContactMediaProcessing$,
  StartContactMediaProcessingCommand,
  StartContactMediaProcessingRequest$,
  StartContactMediaProcessingResponse$,
  StartContactRecording$,
  StartContactRecordingCommand,
  StartContactRecordingRequest$,
  StartContactRecordingResponse$,
  StartContactStreaming$,
  StartContactStreamingCommand,
  StartContactStreamingRequest$,
  StartContactStreamingResponse$,
  StartEmailContact$,
  StartEmailContactCommand,
  StartEmailContactRequest$,
  StartEmailContactResponse$,
  StartOutboundChatContact$,
  StartOutboundChatContactCommand,
  StartOutboundChatContactRequest$,
  StartOutboundChatContactResponse$,
  StartOutboundEmailContact$,
  StartOutboundEmailContactCommand,
  StartOutboundEmailContactRequest$,
  StartOutboundEmailContactResponse$,
  StartOutboundVoiceContact$,
  StartOutboundVoiceContactCommand,
  StartOutboundVoiceContactRequest$,
  StartOutboundVoiceContactResponse$,
  StartScreenSharing$,
  StartScreenSharingCommand,
  StartScreenSharingRequest$,
  StartScreenSharingResponse$,
  StartTaskContact$,
  StartTaskContactCommand,
  StartTaskContactRequest$,
  StartTaskContactResponse$,
  StartWebRTCContact$,
  StartWebRTCContactCommand,
  StartWebRTCContactRequest$,
  StartWebRTCContactResponse$,
  StateTransition$,
  Statistic,
  Status,
  Step$,
  StopContact$,
  StopContactCommand,
  StopContactMediaProcessing$,
  StopContactMediaProcessingCommand,
  StopContactMediaProcessingRequest$,
  StopContactMediaProcessingResponse$,
  StopContactRecording$,
  StopContactRecordingCommand,
  StopContactRecordingRequest$,
  StopContactRecordingResponse$,
  StopContactRequest$,
  StopContactResponse$,
  StopContactStreaming$,
  StopContactStreamingCommand,
  StopContactStreamingRequest$,
  StopContactStreamingResponse$,
  StorageType,
  StringComparisonType,
  StringCondition$,
  StringReference$,
  SubmitAutoEvaluationActionDefinition$,
  SubmitContactEvaluation$,
  SubmitContactEvaluationCommand,
  SubmitContactEvaluationRequest$,
  SubmitContactEvaluationResponse$,
  SuccessfulBatchAssociationSummary$,
  SuccessfulRequest$,
  SuspendContactRecording$,
  SuspendContactRecordingCommand,
  SuspendContactRecordingRequest$,
  SuspendContactRecordingResponse$,
  TagCondition$,
  TagContact$,
  TagContactCommand,
  TagContactRequest$,
  TagContactResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagSearchCondition$,
  TagSet$,
  TargetListType,
  TaskActionDefinition$,
  TaskTemplateConstraints$,
  TaskTemplateDefaultFieldValue$,
  TaskTemplateDefaults$,
  TaskTemplateField$,
  TaskTemplateFieldIdentifier$,
  TaskTemplateFieldType,
  TaskTemplateInfoV2$,
  TaskTemplateMetadata$,
  TaskTemplateStatus,
  TelephonyConfig$,
  TemplateAttributes$,
  TemplatedMessageConfig$,
  Threshold$,
  ThresholdV2$,
  ThrottlingException,
  ThrottlingException$,
  TimerEligibleParticipantRoles,
  TooManyRequestsException,
  TooManyRequestsException$,
  TrafficDistributionGroup$,
  TrafficDistributionGroupStatus,
  TrafficDistributionGroupSummary$,
  TrafficDistributionGroupUserSummary$,
  TrafficType,
  Transcript$,
  TranscriptCriteria$,
  TransferContact$,
  TransferContactCommand,
  TransferContactRequest$,
  TransferContactResponse$,
  Unit,
  UntagContact$,
  UntagContactCommand,
  UntagContactRequest$,
  UntagContactResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAgentStatus$,
  UpdateAgentStatusCommand,
  UpdateAgentStatusRequest$,
  UpdateAuthenticationProfile$,
  UpdateAuthenticationProfileCommand,
  UpdateAuthenticationProfileRequest$,
  UpdateCaseActionDefinition$,
  UpdateContact$,
  UpdateContactAttributes$,
  UpdateContactAttributesCommand,
  UpdateContactAttributesRequest$,
  UpdateContactAttributesResponse$,
  UpdateContactCommand,
  UpdateContactEvaluation$,
  UpdateContactEvaluationCommand,
  UpdateContactEvaluationRequest$,
  UpdateContactEvaluationResponse$,
  UpdateContactFlowContent$,
  UpdateContactFlowContentCommand,
  UpdateContactFlowContentRequest$,
  UpdateContactFlowContentResponse$,
  UpdateContactFlowMetadata$,
  UpdateContactFlowMetadataCommand,
  UpdateContactFlowMetadataRequest$,
  UpdateContactFlowMetadataResponse$,
  UpdateContactFlowModuleAlias$,
  UpdateContactFlowModuleAliasCommand,
  UpdateContactFlowModuleAliasRequest$,
  UpdateContactFlowModuleAliasResponse$,
  UpdateContactFlowModuleContent$,
  UpdateContactFlowModuleContentCommand,
  UpdateContactFlowModuleContentRequest$,
  UpdateContactFlowModuleContentResponse$,
  UpdateContactFlowModuleMetadata$,
  UpdateContactFlowModuleMetadataCommand,
  UpdateContactFlowModuleMetadataRequest$,
  UpdateContactFlowModuleMetadataResponse$,
  UpdateContactFlowName$,
  UpdateContactFlowNameCommand,
  UpdateContactFlowNameRequest$,
  UpdateContactFlowNameResponse$,
  UpdateContactRequest$,
  UpdateContactResponse$,
  UpdateContactRoutingData$,
  UpdateContactRoutingDataCommand,
  UpdateContactRoutingDataRequest$,
  UpdateContactRoutingDataResponse$,
  UpdateContactSchedule$,
  UpdateContactScheduleCommand,
  UpdateContactScheduleRequest$,
  UpdateContactScheduleResponse$,
  UpdateDataTableAttribute$,
  UpdateDataTableAttributeCommand,
  UpdateDataTableAttributeRequest$,
  UpdateDataTableAttributeResponse$,
  UpdateDataTableMetadata$,
  UpdateDataTableMetadataCommand,
  UpdateDataTableMetadataRequest$,
  UpdateDataTableMetadataResponse$,
  UpdateDataTablePrimaryValues$,
  UpdateDataTablePrimaryValuesCommand,
  UpdateDataTablePrimaryValuesRequest$,
  UpdateDataTablePrimaryValuesResponse$,
  UpdateEmailAddressMetadata$,
  UpdateEmailAddressMetadataCommand,
  UpdateEmailAddressMetadataRequest$,
  UpdateEmailAddressMetadataResponse$,
  UpdateEvaluationForm$,
  UpdateEvaluationFormCommand,
  UpdateEvaluationFormRequest$,
  UpdateEvaluationFormResponse$,
  UpdateHoursOfOperation$,
  UpdateHoursOfOperationCommand,
  UpdateHoursOfOperationOverride$,
  UpdateHoursOfOperationOverrideCommand,
  UpdateHoursOfOperationOverrideRequest$,
  UpdateHoursOfOperationRequest$,
  UpdateInstanceAttribute$,
  UpdateInstanceAttributeCommand,
  UpdateInstanceAttributeRequest$,
  UpdateInstanceStorageConfig$,
  UpdateInstanceStorageConfigCommand,
  UpdateInstanceStorageConfigRequest$,
  UpdateParticipantAuthentication$,
  UpdateParticipantAuthenticationCommand,
  UpdateParticipantAuthenticationRequest$,
  UpdateParticipantAuthenticationResponse$,
  UpdateParticipantRoleConfig$,
  UpdateParticipantRoleConfigChannelInfo$,
  UpdateParticipantRoleConfigCommand,
  UpdateParticipantRoleConfigRequest$,
  UpdateParticipantRoleConfigResponse$,
  UpdatePhoneNumber$,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberMetadata$,
  UpdatePhoneNumberMetadataCommand,
  UpdatePhoneNumberMetadataRequest$,
  UpdatePhoneNumberRequest$,
  UpdatePhoneNumberResponse$,
  UpdatePredefinedAttribute$,
  UpdatePredefinedAttributeCommand,
  UpdatePredefinedAttributeRequest$,
  UpdatePrompt$,
  UpdatePromptCommand,
  UpdatePromptRequest$,
  UpdatePromptResponse$,
  UpdateQueueHoursOfOperation$,
  UpdateQueueHoursOfOperationCommand,
  UpdateQueueHoursOfOperationRequest$,
  UpdateQueueMaxContacts$,
  UpdateQueueMaxContactsCommand,
  UpdateQueueMaxContactsRequest$,
  UpdateQueueName$,
  UpdateQueueNameCommand,
  UpdateQueueNameRequest$,
  UpdateQueueOutboundCallerConfig$,
  UpdateQueueOutboundCallerConfigCommand,
  UpdateQueueOutboundCallerConfigRequest$,
  UpdateQueueOutboundEmailConfig$,
  UpdateQueueOutboundEmailConfigCommand,
  UpdateQueueOutboundEmailConfigRequest$,
  UpdateQueueStatus$,
  UpdateQueueStatusCommand,
  UpdateQueueStatusRequest$,
  UpdateQuickConnectConfig$,
  UpdateQuickConnectConfigCommand,
  UpdateQuickConnectConfigRequest$,
  UpdateQuickConnectName$,
  UpdateQuickConnectNameCommand,
  UpdateQuickConnectNameRequest$,
  UpdateRoutingProfileAgentAvailabilityTimer$,
  UpdateRoutingProfileAgentAvailabilityTimerCommand,
  UpdateRoutingProfileAgentAvailabilityTimerRequest$,
  UpdateRoutingProfileConcurrency$,
  UpdateRoutingProfileConcurrencyCommand,
  UpdateRoutingProfileConcurrencyRequest$,
  UpdateRoutingProfileDefaultOutboundQueue$,
  UpdateRoutingProfileDefaultOutboundQueueCommand,
  UpdateRoutingProfileDefaultOutboundQueueRequest$,
  UpdateRoutingProfileName$,
  UpdateRoutingProfileNameCommand,
  UpdateRoutingProfileNameRequest$,
  UpdateRoutingProfileQueues$,
  UpdateRoutingProfileQueuesCommand,
  UpdateRoutingProfileQueuesRequest$,
  UpdateRule$,
  UpdateRuleCommand,
  UpdateRuleRequest$,
  UpdateSecurityProfile$,
  UpdateSecurityProfileCommand,
  UpdateSecurityProfileRequest$,
  UpdateTaskTemplate$,
  UpdateTaskTemplateCommand,
  UpdateTaskTemplateRequest$,
  UpdateTaskTemplateResponse$,
  UpdateTrafficDistribution$,
  UpdateTrafficDistributionCommand,
  UpdateTrafficDistributionRequest$,
  UpdateTrafficDistributionResponse$,
  UpdateUserHierarchy$,
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyGroupName$,
  UpdateUserHierarchyGroupNameCommand,
  UpdateUserHierarchyGroupNameRequest$,
  UpdateUserHierarchyRequest$,
  UpdateUserHierarchyStructure$,
  UpdateUserHierarchyStructureCommand,
  UpdateUserHierarchyStructureRequest$,
  UpdateUserIdentityInfo$,
  UpdateUserIdentityInfoCommand,
  UpdateUserIdentityInfoRequest$,
  UpdateUserPhoneConfig$,
  UpdateUserPhoneConfigCommand,
  UpdateUserPhoneConfigRequest$,
  UpdateUserProficiencies$,
  UpdateUserProficienciesCommand,
  UpdateUserProficienciesRequest$,
  UpdateUserRoutingProfile$,
  UpdateUserRoutingProfileCommand,
  UpdateUserRoutingProfileRequest$,
  UpdateUserSecurityProfiles$,
  UpdateUserSecurityProfilesCommand,
  UpdateUserSecurityProfilesRequest$,
  UpdateViewContent$,
  UpdateViewContentCommand,
  UpdateViewContentRequest$,
  UpdateViewContentResponse$,
  UpdateViewMetadata$,
  UpdateViewMetadataCommand,
  UpdateViewMetadataRequest$,
  UpdateViewMetadataResponse$,
  UpdateWorkspaceMetadata$,
  UpdateWorkspaceMetadataCommand,
  UpdateWorkspaceMetadataRequest$,
  UpdateWorkspaceMetadataResponse$,
  UpdateWorkspacePage$,
  UpdateWorkspacePageCommand,
  UpdateWorkspacePageRequest$,
  UpdateWorkspacePageResponse$,
  UpdateWorkspaceTheme$,
  UpdateWorkspaceThemeCommand,
  UpdateWorkspaceThemeRequest$,
  UpdateWorkspaceThemeResponse$,
  UpdateWorkspaceVisibility$,
  UpdateWorkspaceVisibilityCommand,
  UpdateWorkspaceVisibilityRequest$,
  UpdateWorkspaceVisibilityResponse$,
  UploadUrlMetadata$,
  UrlReference$,
  UseCase$,
  UseCaseType,
  User$,
  UserData$,
  UserDataFilters$,
  UserHierarchyGroupSearchCriteria$,
  UserHierarchyGroupSearchFilter$,
  UserIdentityInfo$,
  UserIdentityInfoLite$,
  UserInfo$,
  UserNotFoundException,
  UserNotFoundException$,
  UserPhoneConfig$,
  UserProficiency$,
  UserProficiencyDisassociate$,
  UserQuickConnectConfig$,
  UserReference$,
  UserSearchCriteria$,
  UserSearchFilter$,
  UserSearchSummary$,
  UserSummary$,
  Validation$,
  ValidationEnum$,
  VideoCapability,
  View$,
  ViewContent$,
  ViewInputContent$,
  ViewSearchCriteria$,
  ViewSearchFilter$,
  ViewStatus,
  ViewSummary$,
  ViewType,
  ViewVersionSummary$,
  Visibility,
  Vocabulary$,
  VocabularyLanguageCode,
  VocabularyState,
  VocabularySummary$,
  VoiceRecordingConfiguration$,
  VoiceRecordingTrack,
  WisdomInfo$,
  Workspace$,
  WorkspaceAssociationSearchCriteria$,
  WorkspaceAssociationSearchFilter$,
  WorkspaceAssociationSearchSummary$,
  WorkspaceFontFamily,
  WorkspacePage$,
  WorkspaceSearchCriteria$,
  WorkspaceSearchFilter$,
  WorkspaceSearchSummary$,
  WorkspaceSummary$,
  WorkspaceTheme$,
  WorkspaceThemeConfig$,
  WorkspaceThemeImages$,
  WorkspaceThemePalette$,
  WorkspaceThemeTypography$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectClient === "function");
assert(typeof Connect === "function");
// commands
assert(typeof ActivateEvaluationFormCommand === "function");
assert(typeof ActivateEvaluationForm$ === "object");
assert(typeof AssociateAnalyticsDataSetCommand === "function");
assert(typeof AssociateAnalyticsDataSet$ === "object");
assert(typeof AssociateApprovedOriginCommand === "function");
assert(typeof AssociateApprovedOrigin$ === "object");
assert(typeof AssociateBotCommand === "function");
assert(typeof AssociateBot$ === "object");
assert(typeof AssociateContactWithUserCommand === "function");
assert(typeof AssociateContactWithUser$ === "object");
assert(typeof AssociateDefaultVocabularyCommand === "function");
assert(typeof AssociateDefaultVocabulary$ === "object");
assert(typeof AssociateEmailAddressAliasCommand === "function");
assert(typeof AssociateEmailAddressAlias$ === "object");
assert(typeof AssociateFlowCommand === "function");
assert(typeof AssociateFlow$ === "object");
assert(typeof AssociateInstanceStorageConfigCommand === "function");
assert(typeof AssociateInstanceStorageConfig$ === "object");
assert(typeof AssociateLambdaFunctionCommand === "function");
assert(typeof AssociateLambdaFunction$ === "object");
assert(typeof AssociateLexBotCommand === "function");
assert(typeof AssociateLexBot$ === "object");
assert(typeof AssociatePhoneNumberContactFlowCommand === "function");
assert(typeof AssociatePhoneNumberContactFlow$ === "object");
assert(typeof AssociateQueueQuickConnectsCommand === "function");
assert(typeof AssociateQueueQuickConnects$ === "object");
assert(typeof AssociateRoutingProfileQueuesCommand === "function");
assert(typeof AssociateRoutingProfileQueues$ === "object");
assert(typeof AssociateSecurityKeyCommand === "function");
assert(typeof AssociateSecurityKey$ === "object");
assert(typeof AssociateSecurityProfilesCommand === "function");
assert(typeof AssociateSecurityProfiles$ === "object");
assert(typeof AssociateTrafficDistributionGroupUserCommand === "function");
assert(typeof AssociateTrafficDistributionGroupUser$ === "object");
assert(typeof AssociateUserProficienciesCommand === "function");
assert(typeof AssociateUserProficiencies$ === "object");
assert(typeof AssociateWorkspaceCommand === "function");
assert(typeof AssociateWorkspace$ === "object");
assert(typeof BatchAssociateAnalyticsDataSetCommand === "function");
assert(typeof BatchAssociateAnalyticsDataSet$ === "object");
assert(typeof BatchCreateDataTableValueCommand === "function");
assert(typeof BatchCreateDataTableValue$ === "object");
assert(typeof BatchDeleteDataTableValueCommand === "function");
assert(typeof BatchDeleteDataTableValue$ === "object");
assert(typeof BatchDescribeDataTableValueCommand === "function");
assert(typeof BatchDescribeDataTableValue$ === "object");
assert(typeof BatchDisassociateAnalyticsDataSetCommand === "function");
assert(typeof BatchDisassociateAnalyticsDataSet$ === "object");
assert(typeof BatchGetAttachedFileMetadataCommand === "function");
assert(typeof BatchGetAttachedFileMetadata$ === "object");
assert(typeof BatchGetFlowAssociationCommand === "function");
assert(typeof BatchGetFlowAssociation$ === "object");
assert(typeof BatchPutContactCommand === "function");
assert(typeof BatchPutContact$ === "object");
assert(typeof BatchUpdateDataTableValueCommand === "function");
assert(typeof BatchUpdateDataTableValue$ === "object");
assert(typeof ClaimPhoneNumberCommand === "function");
assert(typeof ClaimPhoneNumber$ === "object");
assert(typeof CompleteAttachedFileUploadCommand === "function");
assert(typeof CompleteAttachedFileUpload$ === "object");
assert(typeof CreateAgentStatusCommand === "function");
assert(typeof CreateAgentStatus$ === "object");
assert(typeof CreateContactCommand === "function");
assert(typeof CreateContact$ === "object");
assert(typeof CreateContactFlowCommand === "function");
assert(typeof CreateContactFlow$ === "object");
assert(typeof CreateContactFlowModuleCommand === "function");
assert(typeof CreateContactFlowModule$ === "object");
assert(typeof CreateContactFlowModuleAliasCommand === "function");
assert(typeof CreateContactFlowModuleAlias$ === "object");
assert(typeof CreateContactFlowModuleVersionCommand === "function");
assert(typeof CreateContactFlowModuleVersion$ === "object");
assert(typeof CreateContactFlowVersionCommand === "function");
assert(typeof CreateContactFlowVersion$ === "object");
assert(typeof CreateDataTableCommand === "function");
assert(typeof CreateDataTable$ === "object");
assert(typeof CreateDataTableAttributeCommand === "function");
assert(typeof CreateDataTableAttribute$ === "object");
assert(typeof CreateEmailAddressCommand === "function");
assert(typeof CreateEmailAddress$ === "object");
assert(typeof CreateEvaluationFormCommand === "function");
assert(typeof CreateEvaluationForm$ === "object");
assert(typeof CreateHoursOfOperationCommand === "function");
assert(typeof CreateHoursOfOperation$ === "object");
assert(typeof CreateHoursOfOperationOverrideCommand === "function");
assert(typeof CreateHoursOfOperationOverride$ === "object");
assert(typeof CreateInstanceCommand === "function");
assert(typeof CreateInstance$ === "object");
assert(typeof CreateIntegrationAssociationCommand === "function");
assert(typeof CreateIntegrationAssociation$ === "object");
assert(typeof CreateParticipantCommand === "function");
assert(typeof CreateParticipant$ === "object");
assert(typeof CreatePersistentContactAssociationCommand === "function");
assert(typeof CreatePersistentContactAssociation$ === "object");
assert(typeof CreatePredefinedAttributeCommand === "function");
assert(typeof CreatePredefinedAttribute$ === "object");
assert(typeof CreatePromptCommand === "function");
assert(typeof CreatePrompt$ === "object");
assert(typeof CreatePushNotificationRegistrationCommand === "function");
assert(typeof CreatePushNotificationRegistration$ === "object");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateQueue$ === "object");
assert(typeof CreateQuickConnectCommand === "function");
assert(typeof CreateQuickConnect$ === "object");
assert(typeof CreateRoutingProfileCommand === "function");
assert(typeof CreateRoutingProfile$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateSecurityProfileCommand === "function");
assert(typeof CreateSecurityProfile$ === "object");
assert(typeof CreateTaskTemplateCommand === "function");
assert(typeof CreateTaskTemplate$ === "object");
assert(typeof CreateTrafficDistributionGroupCommand === "function");
assert(typeof CreateTrafficDistributionGroup$ === "object");
assert(typeof CreateUseCaseCommand === "function");
assert(typeof CreateUseCase$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof CreateUserHierarchyGroupCommand === "function");
assert(typeof CreateUserHierarchyGroup$ === "object");
assert(typeof CreateViewCommand === "function");
assert(typeof CreateView$ === "object");
assert(typeof CreateViewVersionCommand === "function");
assert(typeof CreateViewVersion$ === "object");
assert(typeof CreateVocabularyCommand === "function");
assert(typeof CreateVocabulary$ === "object");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof CreateWorkspace$ === "object");
assert(typeof CreateWorkspacePageCommand === "function");
assert(typeof CreateWorkspacePage$ === "object");
assert(typeof DeactivateEvaluationFormCommand === "function");
assert(typeof DeactivateEvaluationForm$ === "object");
assert(typeof DeleteAttachedFileCommand === "function");
assert(typeof DeleteAttachedFile$ === "object");
assert(typeof DeleteContactEvaluationCommand === "function");
assert(typeof DeleteContactEvaluation$ === "object");
assert(typeof DeleteContactFlowCommand === "function");
assert(typeof DeleteContactFlow$ === "object");
assert(typeof DeleteContactFlowModuleCommand === "function");
assert(typeof DeleteContactFlowModule$ === "object");
assert(typeof DeleteContactFlowModuleAliasCommand === "function");
assert(typeof DeleteContactFlowModuleAlias$ === "object");
assert(typeof DeleteContactFlowModuleVersionCommand === "function");
assert(typeof DeleteContactFlowModuleVersion$ === "object");
assert(typeof DeleteContactFlowVersionCommand === "function");
assert(typeof DeleteContactFlowVersion$ === "object");
assert(typeof DeleteDataTableCommand === "function");
assert(typeof DeleteDataTable$ === "object");
assert(typeof DeleteDataTableAttributeCommand === "function");
assert(typeof DeleteDataTableAttribute$ === "object");
assert(typeof DeleteEmailAddressCommand === "function");
assert(typeof DeleteEmailAddress$ === "object");
assert(typeof DeleteEvaluationFormCommand === "function");
assert(typeof DeleteEvaluationForm$ === "object");
assert(typeof DeleteHoursOfOperationCommand === "function");
assert(typeof DeleteHoursOfOperation$ === "object");
assert(typeof DeleteHoursOfOperationOverrideCommand === "function");
assert(typeof DeleteHoursOfOperationOverride$ === "object");
assert(typeof DeleteInstanceCommand === "function");
assert(typeof DeleteInstance$ === "object");
assert(typeof DeleteIntegrationAssociationCommand === "function");
assert(typeof DeleteIntegrationAssociation$ === "object");
assert(typeof DeletePredefinedAttributeCommand === "function");
assert(typeof DeletePredefinedAttribute$ === "object");
assert(typeof DeletePromptCommand === "function");
assert(typeof DeletePrompt$ === "object");
assert(typeof DeletePushNotificationRegistrationCommand === "function");
assert(typeof DeletePushNotificationRegistration$ === "object");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DeleteQueue$ === "object");
assert(typeof DeleteQuickConnectCommand === "function");
assert(typeof DeleteQuickConnect$ === "object");
assert(typeof DeleteRoutingProfileCommand === "function");
assert(typeof DeleteRoutingProfile$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteSecurityProfileCommand === "function");
assert(typeof DeleteSecurityProfile$ === "object");
assert(typeof DeleteTaskTemplateCommand === "function");
assert(typeof DeleteTaskTemplate$ === "object");
assert(typeof DeleteTrafficDistributionGroupCommand === "function");
assert(typeof DeleteTrafficDistributionGroup$ === "object");
assert(typeof DeleteUseCaseCommand === "function");
assert(typeof DeleteUseCase$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeleteUserHierarchyGroupCommand === "function");
assert(typeof DeleteUserHierarchyGroup$ === "object");
assert(typeof DeleteViewCommand === "function");
assert(typeof DeleteView$ === "object");
assert(typeof DeleteViewVersionCommand === "function");
assert(typeof DeleteViewVersion$ === "object");
assert(typeof DeleteVocabularyCommand === "function");
assert(typeof DeleteVocabulary$ === "object");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DeleteWorkspace$ === "object");
assert(typeof DeleteWorkspaceMediaCommand === "function");
assert(typeof DeleteWorkspaceMedia$ === "object");
assert(typeof DeleteWorkspacePageCommand === "function");
assert(typeof DeleteWorkspacePage$ === "object");
assert(typeof DescribeAgentStatusCommand === "function");
assert(typeof DescribeAgentStatus$ === "object");
assert(typeof DescribeAuthenticationProfileCommand === "function");
assert(typeof DescribeAuthenticationProfile$ === "object");
assert(typeof DescribeContactCommand === "function");
assert(typeof DescribeContact$ === "object");
assert(typeof DescribeContactEvaluationCommand === "function");
assert(typeof DescribeContactEvaluation$ === "object");
assert(typeof DescribeContactFlowCommand === "function");
assert(typeof DescribeContactFlow$ === "object");
assert(typeof DescribeContactFlowModuleCommand === "function");
assert(typeof DescribeContactFlowModule$ === "object");
assert(typeof DescribeContactFlowModuleAliasCommand === "function");
assert(typeof DescribeContactFlowModuleAlias$ === "object");
assert(typeof DescribeDataTableCommand === "function");
assert(typeof DescribeDataTable$ === "object");
assert(typeof DescribeDataTableAttributeCommand === "function");
assert(typeof DescribeDataTableAttribute$ === "object");
assert(typeof DescribeEmailAddressCommand === "function");
assert(typeof DescribeEmailAddress$ === "object");
assert(typeof DescribeEvaluationFormCommand === "function");
assert(typeof DescribeEvaluationForm$ === "object");
assert(typeof DescribeHoursOfOperationCommand === "function");
assert(typeof DescribeHoursOfOperation$ === "object");
assert(typeof DescribeHoursOfOperationOverrideCommand === "function");
assert(typeof DescribeHoursOfOperationOverride$ === "object");
assert(typeof DescribeInstanceCommand === "function");
assert(typeof DescribeInstance$ === "object");
assert(typeof DescribeInstanceAttributeCommand === "function");
assert(typeof DescribeInstanceAttribute$ === "object");
assert(typeof DescribeInstanceStorageConfigCommand === "function");
assert(typeof DescribeInstanceStorageConfig$ === "object");
assert(typeof DescribePhoneNumberCommand === "function");
assert(typeof DescribePhoneNumber$ === "object");
assert(typeof DescribePredefinedAttributeCommand === "function");
assert(typeof DescribePredefinedAttribute$ === "object");
assert(typeof DescribePromptCommand === "function");
assert(typeof DescribePrompt$ === "object");
assert(typeof DescribeQueueCommand === "function");
assert(typeof DescribeQueue$ === "object");
assert(typeof DescribeQuickConnectCommand === "function");
assert(typeof DescribeQuickConnect$ === "object");
assert(typeof DescribeRoutingProfileCommand === "function");
assert(typeof DescribeRoutingProfile$ === "object");
assert(typeof DescribeRuleCommand === "function");
assert(typeof DescribeRule$ === "object");
assert(typeof DescribeSecurityProfileCommand === "function");
assert(typeof DescribeSecurityProfile$ === "object");
assert(typeof DescribeTrafficDistributionGroupCommand === "function");
assert(typeof DescribeTrafficDistributionGroup$ === "object");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeUser$ === "object");
assert(typeof DescribeUserHierarchyGroupCommand === "function");
assert(typeof DescribeUserHierarchyGroup$ === "object");
assert(typeof DescribeUserHierarchyStructureCommand === "function");
assert(typeof DescribeUserHierarchyStructure$ === "object");
assert(typeof DescribeViewCommand === "function");
assert(typeof DescribeView$ === "object");
assert(typeof DescribeVocabularyCommand === "function");
assert(typeof DescribeVocabulary$ === "object");
assert(typeof DescribeWorkspaceCommand === "function");
assert(typeof DescribeWorkspace$ === "object");
assert(typeof DisassociateAnalyticsDataSetCommand === "function");
assert(typeof DisassociateAnalyticsDataSet$ === "object");
assert(typeof DisassociateApprovedOriginCommand === "function");
assert(typeof DisassociateApprovedOrigin$ === "object");
assert(typeof DisassociateBotCommand === "function");
assert(typeof DisassociateBot$ === "object");
assert(typeof DisassociateEmailAddressAliasCommand === "function");
assert(typeof DisassociateEmailAddressAlias$ === "object");
assert(typeof DisassociateFlowCommand === "function");
assert(typeof DisassociateFlow$ === "object");
assert(typeof DisassociateInstanceStorageConfigCommand === "function");
assert(typeof DisassociateInstanceStorageConfig$ === "object");
assert(typeof DisassociateLambdaFunctionCommand === "function");
assert(typeof DisassociateLambdaFunction$ === "object");
assert(typeof DisassociateLexBotCommand === "function");
assert(typeof DisassociateLexBot$ === "object");
assert(typeof DisassociatePhoneNumberContactFlowCommand === "function");
assert(typeof DisassociatePhoneNumberContactFlow$ === "object");
assert(typeof DisassociateQueueQuickConnectsCommand === "function");
assert(typeof DisassociateQueueQuickConnects$ === "object");
assert(typeof DisassociateRoutingProfileQueuesCommand === "function");
assert(typeof DisassociateRoutingProfileQueues$ === "object");
assert(typeof DisassociateSecurityKeyCommand === "function");
assert(typeof DisassociateSecurityKey$ === "object");
assert(typeof DisassociateSecurityProfilesCommand === "function");
assert(typeof DisassociateSecurityProfiles$ === "object");
assert(typeof DisassociateTrafficDistributionGroupUserCommand === "function");
assert(typeof DisassociateTrafficDistributionGroupUser$ === "object");
assert(typeof DisassociateUserProficienciesCommand === "function");
assert(typeof DisassociateUserProficiencies$ === "object");
assert(typeof DisassociateWorkspaceCommand === "function");
assert(typeof DisassociateWorkspace$ === "object");
assert(typeof DismissUserContactCommand === "function");
assert(typeof DismissUserContact$ === "object");
assert(typeof EvaluateDataTableValuesCommand === "function");
assert(typeof EvaluateDataTableValues$ === "object");
assert(typeof GetAttachedFileCommand === "function");
assert(typeof GetAttachedFile$ === "object");
assert(typeof GetContactAttributesCommand === "function");
assert(typeof GetContactAttributes$ === "object");
assert(typeof GetContactMetricsCommand === "function");
assert(typeof GetContactMetrics$ === "object");
assert(typeof GetCurrentMetricDataCommand === "function");
assert(typeof GetCurrentMetricData$ === "object");
assert(typeof GetCurrentUserDataCommand === "function");
assert(typeof GetCurrentUserData$ === "object");
assert(typeof GetEffectiveHoursOfOperationsCommand === "function");
assert(typeof GetEffectiveHoursOfOperations$ === "object");
assert(typeof GetFederationTokenCommand === "function");
assert(typeof GetFederationToken$ === "object");
assert(typeof GetFlowAssociationCommand === "function");
assert(typeof GetFlowAssociation$ === "object");
assert(typeof GetMetricDataCommand === "function");
assert(typeof GetMetricData$ === "object");
assert(typeof GetMetricDataV2Command === "function");
assert(typeof GetMetricDataV2$ === "object");
assert(typeof GetPromptFileCommand === "function");
assert(typeof GetPromptFile$ === "object");
assert(typeof GetTaskTemplateCommand === "function");
assert(typeof GetTaskTemplate$ === "object");
assert(typeof GetTrafficDistributionCommand === "function");
assert(typeof GetTrafficDistribution$ === "object");
assert(typeof ImportPhoneNumberCommand === "function");
assert(typeof ImportPhoneNumber$ === "object");
assert(typeof ImportWorkspaceMediaCommand === "function");
assert(typeof ImportWorkspaceMedia$ === "object");
assert(typeof ListAgentStatusesCommand === "function");
assert(typeof ListAgentStatuses$ === "object");
assert(typeof ListAnalyticsDataAssociationsCommand === "function");
assert(typeof ListAnalyticsDataAssociations$ === "object");
assert(typeof ListAnalyticsDataLakeDataSetsCommand === "function");
assert(typeof ListAnalyticsDataLakeDataSets$ === "object");
assert(typeof ListApprovedOriginsCommand === "function");
assert(typeof ListApprovedOrigins$ === "object");
assert(typeof ListAssociatedContactsCommand === "function");
assert(typeof ListAssociatedContacts$ === "object");
assert(typeof ListAuthenticationProfilesCommand === "function");
assert(typeof ListAuthenticationProfiles$ === "object");
assert(typeof ListBotsCommand === "function");
assert(typeof ListBots$ === "object");
assert(typeof ListContactEvaluationsCommand === "function");
assert(typeof ListContactEvaluations$ === "object");
assert(typeof ListContactFlowModuleAliasesCommand === "function");
assert(typeof ListContactFlowModuleAliases$ === "object");
assert(typeof ListContactFlowModulesCommand === "function");
assert(typeof ListContactFlowModules$ === "object");
assert(typeof ListContactFlowModuleVersionsCommand === "function");
assert(typeof ListContactFlowModuleVersions$ === "object");
assert(typeof ListContactFlowsCommand === "function");
assert(typeof ListContactFlows$ === "object");
assert(typeof ListContactFlowVersionsCommand === "function");
assert(typeof ListContactFlowVersions$ === "object");
assert(typeof ListContactReferencesCommand === "function");
assert(typeof ListContactReferences$ === "object");
assert(typeof ListDataTableAttributesCommand === "function");
assert(typeof ListDataTableAttributes$ === "object");
assert(typeof ListDataTablePrimaryValuesCommand === "function");
assert(typeof ListDataTablePrimaryValues$ === "object");
assert(typeof ListDataTablesCommand === "function");
assert(typeof ListDataTables$ === "object");
assert(typeof ListDataTableValuesCommand === "function");
assert(typeof ListDataTableValues$ === "object");
assert(typeof ListDefaultVocabulariesCommand === "function");
assert(typeof ListDefaultVocabularies$ === "object");
assert(typeof ListEntitySecurityProfilesCommand === "function");
assert(typeof ListEntitySecurityProfiles$ === "object");
assert(typeof ListEvaluationFormsCommand === "function");
assert(typeof ListEvaluationForms$ === "object");
assert(typeof ListEvaluationFormVersionsCommand === "function");
assert(typeof ListEvaluationFormVersions$ === "object");
assert(typeof ListFlowAssociationsCommand === "function");
assert(typeof ListFlowAssociations$ === "object");
assert(typeof ListHoursOfOperationOverridesCommand === "function");
assert(typeof ListHoursOfOperationOverrides$ === "object");
assert(typeof ListHoursOfOperationsCommand === "function");
assert(typeof ListHoursOfOperations$ === "object");
assert(typeof ListInstanceAttributesCommand === "function");
assert(typeof ListInstanceAttributes$ === "object");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListInstances$ === "object");
assert(typeof ListInstanceStorageConfigsCommand === "function");
assert(typeof ListInstanceStorageConfigs$ === "object");
assert(typeof ListIntegrationAssociationsCommand === "function");
assert(typeof ListIntegrationAssociations$ === "object");
assert(typeof ListLambdaFunctionsCommand === "function");
assert(typeof ListLambdaFunctions$ === "object");
assert(typeof ListLexBotsCommand === "function");
assert(typeof ListLexBots$ === "object");
assert(typeof ListPhoneNumbersCommand === "function");
assert(typeof ListPhoneNumbers$ === "object");
assert(typeof ListPhoneNumbersV2Command === "function");
assert(typeof ListPhoneNumbersV2$ === "object");
assert(typeof ListPredefinedAttributesCommand === "function");
assert(typeof ListPredefinedAttributes$ === "object");
assert(typeof ListPromptsCommand === "function");
assert(typeof ListPrompts$ === "object");
assert(typeof ListQueueQuickConnectsCommand === "function");
assert(typeof ListQueueQuickConnects$ === "object");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListQueues$ === "object");
assert(typeof ListQuickConnectsCommand === "function");
assert(typeof ListQuickConnects$ === "object");
assert(typeof ListRealtimeContactAnalysisSegmentsV2Command === "function");
assert(typeof ListRealtimeContactAnalysisSegmentsV2$ === "object");
assert(typeof ListRoutingProfileManualAssignmentQueuesCommand === "function");
assert(typeof ListRoutingProfileManualAssignmentQueues$ === "object");
assert(typeof ListRoutingProfileQueuesCommand === "function");
assert(typeof ListRoutingProfileQueues$ === "object");
assert(typeof ListRoutingProfilesCommand === "function");
assert(typeof ListRoutingProfiles$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListSecurityKeysCommand === "function");
assert(typeof ListSecurityKeys$ === "object");
assert(typeof ListSecurityProfileApplicationsCommand === "function");
assert(typeof ListSecurityProfileApplications$ === "object");
assert(typeof ListSecurityProfileFlowModulesCommand === "function");
assert(typeof ListSecurityProfileFlowModules$ === "object");
assert(typeof ListSecurityProfilePermissionsCommand === "function");
assert(typeof ListSecurityProfilePermissions$ === "object");
assert(typeof ListSecurityProfilesCommand === "function");
assert(typeof ListSecurityProfiles$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTaskTemplatesCommand === "function");
assert(typeof ListTaskTemplates$ === "object");
assert(typeof ListTrafficDistributionGroupsCommand === "function");
assert(typeof ListTrafficDistributionGroups$ === "object");
assert(typeof ListTrafficDistributionGroupUsersCommand === "function");
assert(typeof ListTrafficDistributionGroupUsers$ === "object");
assert(typeof ListUseCasesCommand === "function");
assert(typeof ListUseCases$ === "object");
assert(typeof ListUserHierarchyGroupsCommand === "function");
assert(typeof ListUserHierarchyGroups$ === "object");
assert(typeof ListUserProficienciesCommand === "function");
assert(typeof ListUserProficiencies$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof ListViewsCommand === "function");
assert(typeof ListViews$ === "object");
assert(typeof ListViewVersionsCommand === "function");
assert(typeof ListViewVersions$ === "object");
assert(typeof ListWorkspaceMediaCommand === "function");
assert(typeof ListWorkspaceMedia$ === "object");
assert(typeof ListWorkspacePagesCommand === "function");
assert(typeof ListWorkspacePages$ === "object");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof ListWorkspaces$ === "object");
assert(typeof MonitorContactCommand === "function");
assert(typeof MonitorContact$ === "object");
assert(typeof PauseContactCommand === "function");
assert(typeof PauseContact$ === "object");
assert(typeof PutUserStatusCommand === "function");
assert(typeof PutUserStatus$ === "object");
assert(typeof ReleasePhoneNumberCommand === "function");
assert(typeof ReleasePhoneNumber$ === "object");
assert(typeof ReplicateInstanceCommand === "function");
assert(typeof ReplicateInstance$ === "object");
assert(typeof ResumeContactCommand === "function");
assert(typeof ResumeContact$ === "object");
assert(typeof ResumeContactRecordingCommand === "function");
assert(typeof ResumeContactRecording$ === "object");
assert(typeof SearchAgentStatusesCommand === "function");
assert(typeof SearchAgentStatuses$ === "object");
assert(typeof SearchAvailablePhoneNumbersCommand === "function");
assert(typeof SearchAvailablePhoneNumbers$ === "object");
assert(typeof SearchContactEvaluationsCommand === "function");
assert(typeof SearchContactEvaluations$ === "object");
assert(typeof SearchContactFlowModulesCommand === "function");
assert(typeof SearchContactFlowModules$ === "object");
assert(typeof SearchContactFlowsCommand === "function");
assert(typeof SearchContactFlows$ === "object");
assert(typeof SearchContactsCommand === "function");
assert(typeof SearchContacts$ === "object");
assert(typeof SearchDataTablesCommand === "function");
assert(typeof SearchDataTables$ === "object");
assert(typeof SearchEmailAddressesCommand === "function");
assert(typeof SearchEmailAddresses$ === "object");
assert(typeof SearchEvaluationFormsCommand === "function");
assert(typeof SearchEvaluationForms$ === "object");
assert(typeof SearchHoursOfOperationOverridesCommand === "function");
assert(typeof SearchHoursOfOperationOverrides$ === "object");
assert(typeof SearchHoursOfOperationsCommand === "function");
assert(typeof SearchHoursOfOperations$ === "object");
assert(typeof SearchPredefinedAttributesCommand === "function");
assert(typeof SearchPredefinedAttributes$ === "object");
assert(typeof SearchPromptsCommand === "function");
assert(typeof SearchPrompts$ === "object");
assert(typeof SearchQueuesCommand === "function");
assert(typeof SearchQueues$ === "object");
assert(typeof SearchQuickConnectsCommand === "function");
assert(typeof SearchQuickConnects$ === "object");
assert(typeof SearchResourceTagsCommand === "function");
assert(typeof SearchResourceTags$ === "object");
assert(typeof SearchRoutingProfilesCommand === "function");
assert(typeof SearchRoutingProfiles$ === "object");
assert(typeof SearchSecurityProfilesCommand === "function");
assert(typeof SearchSecurityProfiles$ === "object");
assert(typeof SearchUserHierarchyGroupsCommand === "function");
assert(typeof SearchUserHierarchyGroups$ === "object");
assert(typeof SearchUsersCommand === "function");
assert(typeof SearchUsers$ === "object");
assert(typeof SearchViewsCommand === "function");
assert(typeof SearchViews$ === "object");
assert(typeof SearchVocabulariesCommand === "function");
assert(typeof SearchVocabularies$ === "object");
assert(typeof SearchWorkspaceAssociationsCommand === "function");
assert(typeof SearchWorkspaceAssociations$ === "object");
assert(typeof SearchWorkspacesCommand === "function");
assert(typeof SearchWorkspaces$ === "object");
assert(typeof SendChatIntegrationEventCommand === "function");
assert(typeof SendChatIntegrationEvent$ === "object");
assert(typeof SendOutboundEmailCommand === "function");
assert(typeof SendOutboundEmail$ === "object");
assert(typeof StartAttachedFileUploadCommand === "function");
assert(typeof StartAttachedFileUpload$ === "object");
assert(typeof StartChatContactCommand === "function");
assert(typeof StartChatContact$ === "object");
assert(typeof StartContactEvaluationCommand === "function");
assert(typeof StartContactEvaluation$ === "object");
assert(typeof StartContactMediaProcessingCommand === "function");
assert(typeof StartContactMediaProcessing$ === "object");
assert(typeof StartContactRecordingCommand === "function");
assert(typeof StartContactRecording$ === "object");
assert(typeof StartContactStreamingCommand === "function");
assert(typeof StartContactStreaming$ === "object");
assert(typeof StartEmailContactCommand === "function");
assert(typeof StartEmailContact$ === "object");
assert(typeof StartOutboundChatContactCommand === "function");
assert(typeof StartOutboundChatContact$ === "object");
assert(typeof StartOutboundEmailContactCommand === "function");
assert(typeof StartOutboundEmailContact$ === "object");
assert(typeof StartOutboundVoiceContactCommand === "function");
assert(typeof StartOutboundVoiceContact$ === "object");
assert(typeof StartScreenSharingCommand === "function");
assert(typeof StartScreenSharing$ === "object");
assert(typeof StartTaskContactCommand === "function");
assert(typeof StartTaskContact$ === "object");
assert(typeof StartWebRTCContactCommand === "function");
assert(typeof StartWebRTCContact$ === "object");
assert(typeof StopContactCommand === "function");
assert(typeof StopContact$ === "object");
assert(typeof StopContactMediaProcessingCommand === "function");
assert(typeof StopContactMediaProcessing$ === "object");
assert(typeof StopContactRecordingCommand === "function");
assert(typeof StopContactRecording$ === "object");
assert(typeof StopContactStreamingCommand === "function");
assert(typeof StopContactStreaming$ === "object");
assert(typeof SubmitContactEvaluationCommand === "function");
assert(typeof SubmitContactEvaluation$ === "object");
assert(typeof SuspendContactRecordingCommand === "function");
assert(typeof SuspendContactRecording$ === "object");
assert(typeof TagContactCommand === "function");
assert(typeof TagContact$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TransferContactCommand === "function");
assert(typeof TransferContact$ === "object");
assert(typeof UntagContactCommand === "function");
assert(typeof UntagContact$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentStatusCommand === "function");
assert(typeof UpdateAgentStatus$ === "object");
assert(typeof UpdateAuthenticationProfileCommand === "function");
assert(typeof UpdateAuthenticationProfile$ === "object");
assert(typeof UpdateContactCommand === "function");
assert(typeof UpdateContact$ === "object");
assert(typeof UpdateContactAttributesCommand === "function");
assert(typeof UpdateContactAttributes$ === "object");
assert(typeof UpdateContactEvaluationCommand === "function");
assert(typeof UpdateContactEvaluation$ === "object");
assert(typeof UpdateContactFlowContentCommand === "function");
assert(typeof UpdateContactFlowContent$ === "object");
assert(typeof UpdateContactFlowMetadataCommand === "function");
assert(typeof UpdateContactFlowMetadata$ === "object");
assert(typeof UpdateContactFlowModuleAliasCommand === "function");
assert(typeof UpdateContactFlowModuleAlias$ === "object");
assert(typeof UpdateContactFlowModuleContentCommand === "function");
assert(typeof UpdateContactFlowModuleContent$ === "object");
assert(typeof UpdateContactFlowModuleMetadataCommand === "function");
assert(typeof UpdateContactFlowModuleMetadata$ === "object");
assert(typeof UpdateContactFlowNameCommand === "function");
assert(typeof UpdateContactFlowName$ === "object");
assert(typeof UpdateContactRoutingDataCommand === "function");
assert(typeof UpdateContactRoutingData$ === "object");
assert(typeof UpdateContactScheduleCommand === "function");
assert(typeof UpdateContactSchedule$ === "object");
assert(typeof UpdateDataTableAttributeCommand === "function");
assert(typeof UpdateDataTableAttribute$ === "object");
assert(typeof UpdateDataTableMetadataCommand === "function");
assert(typeof UpdateDataTableMetadata$ === "object");
assert(typeof UpdateDataTablePrimaryValuesCommand === "function");
assert(typeof UpdateDataTablePrimaryValues$ === "object");
assert(typeof UpdateEmailAddressMetadataCommand === "function");
assert(typeof UpdateEmailAddressMetadata$ === "object");
assert(typeof UpdateEvaluationFormCommand === "function");
assert(typeof UpdateEvaluationForm$ === "object");
assert(typeof UpdateHoursOfOperationCommand === "function");
assert(typeof UpdateHoursOfOperation$ === "object");
assert(typeof UpdateHoursOfOperationOverrideCommand === "function");
assert(typeof UpdateHoursOfOperationOverride$ === "object");
assert(typeof UpdateInstanceAttributeCommand === "function");
assert(typeof UpdateInstanceAttribute$ === "object");
assert(typeof UpdateInstanceStorageConfigCommand === "function");
assert(typeof UpdateInstanceStorageConfig$ === "object");
assert(typeof UpdateParticipantAuthenticationCommand === "function");
assert(typeof UpdateParticipantAuthentication$ === "object");
assert(typeof UpdateParticipantRoleConfigCommand === "function");
assert(typeof UpdateParticipantRoleConfig$ === "object");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePhoneNumber$ === "object");
assert(typeof UpdatePhoneNumberMetadataCommand === "function");
assert(typeof UpdatePhoneNumberMetadata$ === "object");
assert(typeof UpdatePredefinedAttributeCommand === "function");
assert(typeof UpdatePredefinedAttribute$ === "object");
assert(typeof UpdatePromptCommand === "function");
assert(typeof UpdatePrompt$ === "object");
assert(typeof UpdateQueueHoursOfOperationCommand === "function");
assert(typeof UpdateQueueHoursOfOperation$ === "object");
assert(typeof UpdateQueueMaxContactsCommand === "function");
assert(typeof UpdateQueueMaxContacts$ === "object");
assert(typeof UpdateQueueNameCommand === "function");
assert(typeof UpdateQueueName$ === "object");
assert(typeof UpdateQueueOutboundCallerConfigCommand === "function");
assert(typeof UpdateQueueOutboundCallerConfig$ === "object");
assert(typeof UpdateQueueOutboundEmailConfigCommand === "function");
assert(typeof UpdateQueueOutboundEmailConfig$ === "object");
assert(typeof UpdateQueueStatusCommand === "function");
assert(typeof UpdateQueueStatus$ === "object");
assert(typeof UpdateQuickConnectConfigCommand === "function");
assert(typeof UpdateQuickConnectConfig$ === "object");
assert(typeof UpdateQuickConnectNameCommand === "function");
assert(typeof UpdateQuickConnectName$ === "object");
assert(typeof UpdateRoutingProfileAgentAvailabilityTimerCommand === "function");
assert(typeof UpdateRoutingProfileAgentAvailabilityTimer$ === "object");
assert(typeof UpdateRoutingProfileConcurrencyCommand === "function");
assert(typeof UpdateRoutingProfileConcurrency$ === "object");
assert(typeof UpdateRoutingProfileDefaultOutboundQueueCommand === "function");
assert(typeof UpdateRoutingProfileDefaultOutboundQueue$ === "object");
assert(typeof UpdateRoutingProfileNameCommand === "function");
assert(typeof UpdateRoutingProfileName$ === "object");
assert(typeof UpdateRoutingProfileQueuesCommand === "function");
assert(typeof UpdateRoutingProfileQueues$ === "object");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRule$ === "object");
assert(typeof UpdateSecurityProfileCommand === "function");
assert(typeof UpdateSecurityProfile$ === "object");
assert(typeof UpdateTaskTemplateCommand === "function");
assert(typeof UpdateTaskTemplate$ === "object");
assert(typeof UpdateTrafficDistributionCommand === "function");
assert(typeof UpdateTrafficDistribution$ === "object");
assert(typeof UpdateUserHierarchyCommand === "function");
assert(typeof UpdateUserHierarchy$ === "object");
assert(typeof UpdateUserHierarchyGroupNameCommand === "function");
assert(typeof UpdateUserHierarchyGroupName$ === "object");
assert(typeof UpdateUserHierarchyStructureCommand === "function");
assert(typeof UpdateUserHierarchyStructure$ === "object");
assert(typeof UpdateUserIdentityInfoCommand === "function");
assert(typeof UpdateUserIdentityInfo$ === "object");
assert(typeof UpdateUserPhoneConfigCommand === "function");
assert(typeof UpdateUserPhoneConfig$ === "object");
assert(typeof UpdateUserProficienciesCommand === "function");
assert(typeof UpdateUserProficiencies$ === "object");
assert(typeof UpdateUserRoutingProfileCommand === "function");
assert(typeof UpdateUserRoutingProfile$ === "object");
assert(typeof UpdateUserSecurityProfilesCommand === "function");
assert(typeof UpdateUserSecurityProfiles$ === "object");
assert(typeof UpdateViewContentCommand === "function");
assert(typeof UpdateViewContent$ === "object");
assert(typeof UpdateViewMetadataCommand === "function");
assert(typeof UpdateViewMetadata$ === "object");
assert(typeof UpdateWorkspaceMetadataCommand === "function");
assert(typeof UpdateWorkspaceMetadata$ === "object");
assert(typeof UpdateWorkspacePageCommand === "function");
assert(typeof UpdateWorkspacePage$ === "object");
assert(typeof UpdateWorkspaceThemeCommand === "function");
assert(typeof UpdateWorkspaceTheme$ === "object");
assert(typeof UpdateWorkspaceVisibilityCommand === "function");
assert(typeof UpdateWorkspaceVisibility$ === "object");
// structural schemas
assert(typeof ActionSummary$ === "object");
assert(typeof ActivateEvaluationFormRequest$ === "object");
assert(typeof ActivateEvaluationFormResponse$ === "object");
assert(typeof AdditionalEmailRecipients$ === "object");
assert(typeof AgentConfig$ === "object");
assert(typeof AgentContactReference$ === "object");
assert(typeof AgentFirst$ === "object");
assert(typeof AgentHierarchyGroup$ === "object");
assert(typeof AgentHierarchyGroups$ === "object");
assert(typeof AgentInfo$ === "object");
assert(typeof AgentQualityMetrics$ === "object");
assert(typeof AgentsCriteria$ === "object");
assert(typeof AgentStatus$ === "object");
assert(typeof AgentStatusIdentifier$ === "object");
assert(typeof AgentStatusReference$ === "object");
assert(typeof AgentStatusSearchCriteria$ === "object");
assert(typeof AgentStatusSearchFilter$ === "object");
assert(typeof AgentStatusSummary$ === "object");
assert(typeof AiAgentInfo$ === "object");
assert(typeof AliasConfiguration$ === "object");
assert(typeof AllowedCapabilities$ === "object");
assert(typeof AnalyticsDataAssociationResult$ === "object");
assert(typeof AnalyticsDataSetsResult$ === "object");
assert(typeof AnswerMachineDetectionConfig$ === "object");
assert(typeof Application$ === "object");
assert(typeof AssignContactCategoryActionDefinition$ === "object");
assert(typeof AssignSlaActionDefinition$ === "object");
assert(typeof AssociateAnalyticsDataSetRequest$ === "object");
assert(typeof AssociateAnalyticsDataSetResponse$ === "object");
assert(typeof AssociateApprovedOriginRequest$ === "object");
assert(typeof AssociateBotRequest$ === "object");
assert(typeof AssociateContactWithUserRequest$ === "object");
assert(typeof AssociateContactWithUserResponse$ === "object");
assert(typeof AssociatedContactSummary$ === "object");
assert(typeof AssociateDefaultVocabularyRequest$ === "object");
assert(typeof AssociateDefaultVocabularyResponse$ === "object");
assert(typeof AssociateEmailAddressAliasRequest$ === "object");
assert(typeof AssociateEmailAddressAliasResponse$ === "object");
assert(typeof AssociateFlowRequest$ === "object");
assert(typeof AssociateFlowResponse$ === "object");
assert(typeof AssociateInstanceStorageConfigRequest$ === "object");
assert(typeof AssociateInstanceStorageConfigResponse$ === "object");
assert(typeof AssociateLambdaFunctionRequest$ === "object");
assert(typeof AssociateLexBotRequest$ === "object");
assert(typeof AssociatePhoneNumberContactFlowRequest$ === "object");
assert(typeof AssociateQueueQuickConnectsRequest$ === "object");
assert(typeof AssociateRoutingProfileQueuesRequest$ === "object");
assert(typeof AssociateSecurityKeyRequest$ === "object");
assert(typeof AssociateSecurityKeyResponse$ === "object");
assert(typeof AssociateSecurityProfilesRequest$ === "object");
assert(typeof AssociateTrafficDistributionGroupUserRequest$ === "object");
assert(typeof AssociateTrafficDistributionGroupUserResponse$ === "object");
assert(typeof AssociateUserProficienciesRequest$ === "object");
assert(typeof AssociateWorkspaceRequest$ === "object");
assert(typeof AssociateWorkspaceResponse$ === "object");
assert(typeof AttachedFile$ === "object");
assert(typeof AttachedFileError$ === "object");
assert(typeof AttachmentReference$ === "object");
assert(typeof Attendee$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof AttributeAndCondition$ === "object");
assert(typeof AttributeCondition$ === "object");
assert(typeof AudioFeatures$ === "object");
assert(typeof AudioQualityMetricsInfo$ === "object");
assert(typeof AuthenticationProfile$ === "object");
assert(typeof AuthenticationProfileSummary$ === "object");
assert(typeof AutoEvaluationConfiguration$ === "object");
assert(typeof AutoEvaluationDetails$ === "object");
assert(typeof AutomaticFailConfiguration$ === "object");
assert(typeof AvailableNumberSummary$ === "object");
assert(typeof BatchAssociateAnalyticsDataSetRequest$ === "object");
assert(typeof BatchAssociateAnalyticsDataSetResponse$ === "object");
assert(typeof BatchCreateDataTableValueFailureResult$ === "object");
assert(typeof BatchCreateDataTableValueRequest$ === "object");
assert(typeof BatchCreateDataTableValueResponse$ === "object");
assert(typeof BatchCreateDataTableValueSuccessResult$ === "object");
assert(typeof BatchDeleteDataTableValueFailureResult$ === "object");
assert(typeof BatchDeleteDataTableValueRequest$ === "object");
assert(typeof BatchDeleteDataTableValueResponse$ === "object");
assert(typeof BatchDeleteDataTableValueSuccessResult$ === "object");
assert(typeof BatchDescribeDataTableValueFailureResult$ === "object");
assert(typeof BatchDescribeDataTableValueRequest$ === "object");
assert(typeof BatchDescribeDataTableValueResponse$ === "object");
assert(typeof BatchDescribeDataTableValueSuccessResult$ === "object");
assert(typeof BatchDisassociateAnalyticsDataSetRequest$ === "object");
assert(typeof BatchDisassociateAnalyticsDataSetResponse$ === "object");
assert(typeof BatchGetAttachedFileMetadataRequest$ === "object");
assert(typeof BatchGetAttachedFileMetadataResponse$ === "object");
assert(typeof BatchGetFlowAssociationRequest$ === "object");
assert(typeof BatchGetFlowAssociationResponse$ === "object");
assert(typeof BatchPutContactRequest$ === "object");
assert(typeof BatchPutContactResponse$ === "object");
assert(typeof BatchUpdateDataTableValueFailureResult$ === "object");
assert(typeof BatchUpdateDataTableValueRequest$ === "object");
assert(typeof BatchUpdateDataTableValueResponse$ === "object");
assert(typeof BatchUpdateDataTableValueSuccessResult$ === "object");
assert(typeof BooleanCondition$ === "object");
assert(typeof Campaign$ === "object");
assert(typeof CaseSlaConfiguration$ === "object");
assert(typeof ChatContactMetrics$ === "object");
assert(typeof ChatEvent$ === "object");
assert(typeof ChatMessage$ === "object");
assert(typeof ChatMetrics$ === "object");
assert(typeof ChatParticipantRoleConfig$ === "object");
assert(typeof ChatStreamingConfiguration$ === "object");
assert(typeof ClaimedPhoneNumberSummary$ === "object");
assert(typeof ClaimPhoneNumberRequest$ === "object");
assert(typeof ClaimPhoneNumberResponse$ === "object");
assert(typeof CommonAttributeAndCondition$ === "object");
assert(typeof CompleteAttachedFileUploadRequest$ === "object");
assert(typeof CompleteAttachedFileUploadResponse$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConnectionData$ === "object");
assert(typeof Contact$ === "object");
assert(typeof ContactAnalysis$ === "object");
assert(typeof ContactConfiguration$ === "object");
assert(typeof ContactDataRequest$ === "object");
assert(typeof ContactDetails$ === "object");
assert(typeof ContactEvaluation$ === "object");
assert(typeof ContactFilter$ === "object");
assert(typeof ContactFlow$ === "object");
assert(typeof ContactFlowAttributeAndCondition$ === "object");
assert(typeof ContactFlowAttributeFilter$ === "object");
assert(typeof ContactFlowModule$ === "object");
assert(typeof ContactFlowModuleAliasInfo$ === "object");
assert(typeof ContactFlowModuleAliasSummary$ === "object");
assert(typeof ContactFlowModuleSearchCriteria$ === "object");
assert(typeof ContactFlowModuleSearchFilter$ === "object");
assert(typeof ContactFlowModuleSummary$ === "object");
assert(typeof ContactFlowModuleVersionSummary$ === "object");
assert(typeof ContactFlowSearchCriteria$ === "object");
assert(typeof ContactFlowSearchFilter$ === "object");
assert(typeof ContactFlowSummary$ === "object");
assert(typeof ContactFlowTypeCondition$ === "object");
assert(typeof ContactFlowVersionSummary$ === "object");
assert(typeof ContactMetricInfo$ === "object");
assert(typeof ContactMetricResult$ === "object");
assert(typeof ContactMetricValue$ === "object");
assert(typeof ContactSearchSummary$ === "object");
assert(typeof ContactSearchSummaryAgentInfo$ === "object");
assert(typeof ContactSearchSummaryQueueInfo$ === "object");
assert(typeof ContactSearchSummarySegmentAttributeValue$ === "object");
assert(typeof ControlPlaneAttributeFilter$ === "object");
assert(typeof ControlPlaneTagFilter$ === "object");
assert(typeof ControlPlaneUserAttributeFilter$ === "object");
assert(typeof CreateAgentStatusRequest$ === "object");
assert(typeof CreateAgentStatusResponse$ === "object");
assert(typeof CreateCaseActionDefinition$ === "object");
assert(typeof CreateContactFlowModuleAliasRequest$ === "object");
assert(typeof CreateContactFlowModuleAliasResponse$ === "object");
assert(typeof CreateContactFlowModuleRequest$ === "object");
assert(typeof CreateContactFlowModuleResponse$ === "object");
assert(typeof CreateContactFlowModuleVersionRequest$ === "object");
assert(typeof CreateContactFlowModuleVersionResponse$ === "object");
assert(typeof CreateContactFlowRequest$ === "object");
assert(typeof CreateContactFlowResponse$ === "object");
assert(typeof CreateContactFlowVersionRequest$ === "object");
assert(typeof CreateContactFlowVersionResponse$ === "object");
assert(typeof CreateContactRequest$ === "object");
assert(typeof CreateContactResponse$ === "object");
assert(typeof CreateDataTableAttributeRequest$ === "object");
assert(typeof CreateDataTableAttributeResponse$ === "object");
assert(typeof CreateDataTableRequest$ === "object");
assert(typeof CreateDataTableResponse$ === "object");
assert(typeof CreatedByInfo$ === "object");
assert(typeof CreateEmailAddressRequest$ === "object");
assert(typeof CreateEmailAddressResponse$ === "object");
assert(typeof CreateEvaluationFormRequest$ === "object");
assert(typeof CreateEvaluationFormResponse$ === "object");
assert(typeof CreateHoursOfOperationOverrideRequest$ === "object");
assert(typeof CreateHoursOfOperationOverrideResponse$ === "object");
assert(typeof CreateHoursOfOperationRequest$ === "object");
assert(typeof CreateHoursOfOperationResponse$ === "object");
assert(typeof CreateInstanceRequest$ === "object");
assert(typeof CreateInstanceResponse$ === "object");
assert(typeof CreateIntegrationAssociationRequest$ === "object");
assert(typeof CreateIntegrationAssociationResponse$ === "object");
assert(typeof CreateParticipantRequest$ === "object");
assert(typeof CreateParticipantResponse$ === "object");
assert(typeof CreatePersistentContactAssociationRequest$ === "object");
assert(typeof CreatePersistentContactAssociationResponse$ === "object");
assert(typeof CreatePredefinedAttributeRequest$ === "object");
assert(typeof CreatePromptRequest$ === "object");
assert(typeof CreatePromptResponse$ === "object");
assert(typeof CreatePushNotificationRegistrationRequest$ === "object");
assert(typeof CreatePushNotificationRegistrationResponse$ === "object");
assert(typeof CreateQueueRequest$ === "object");
assert(typeof CreateQueueResponse$ === "object");
assert(typeof CreateQuickConnectRequest$ === "object");
assert(typeof CreateQuickConnectResponse$ === "object");
assert(typeof CreateRoutingProfileRequest$ === "object");
assert(typeof CreateRoutingProfileResponse$ === "object");
assert(typeof CreateRuleRequest$ === "object");
assert(typeof CreateRuleResponse$ === "object");
assert(typeof CreateSecurityProfileRequest$ === "object");
assert(typeof CreateSecurityProfileResponse$ === "object");
assert(typeof CreateTaskTemplateRequest$ === "object");
assert(typeof CreateTaskTemplateResponse$ === "object");
assert(typeof CreateTrafficDistributionGroupRequest$ === "object");
assert(typeof CreateTrafficDistributionGroupResponse$ === "object");
assert(typeof CreateUseCaseRequest$ === "object");
assert(typeof CreateUseCaseResponse$ === "object");
assert(typeof CreateUserHierarchyGroupRequest$ === "object");
assert(typeof CreateUserHierarchyGroupResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof CreateViewRequest$ === "object");
assert(typeof CreateViewResponse$ === "object");
assert(typeof CreateViewVersionRequest$ === "object");
assert(typeof CreateViewVersionResponse$ === "object");
assert(typeof CreateVocabularyRequest$ === "object");
assert(typeof CreateVocabularyResponse$ === "object");
assert(typeof CreateWorkspacePageRequest$ === "object");
assert(typeof CreateWorkspacePageResponse$ === "object");
assert(typeof CreateWorkspaceRequest$ === "object");
assert(typeof CreateWorkspaceResponse$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof CrossChannelBehavior$ === "object");
assert(typeof CurrentMetric$ === "object");
assert(typeof CurrentMetricData$ === "object");
assert(typeof CurrentMetricResult$ === "object");
assert(typeof CurrentMetricSortCriteria$ === "object");
assert(typeof Customer$ === "object");
assert(typeof CustomerQualityMetrics$ === "object");
assert(typeof CustomerVoiceActivity$ === "object");
assert(typeof DataTable$ === "object");
assert(typeof DataTableAccessControlConfiguration$ === "object");
assert(typeof DataTableAttribute$ === "object");
assert(typeof DataTableDeleteValueIdentifier$ === "object");
assert(typeof DataTableEvaluatedValue$ === "object");
assert(typeof DataTableLockVersion$ === "object");
assert(typeof DataTableSearchCriteria$ === "object");
assert(typeof DataTableSearchFilter$ === "object");
assert(typeof DataTableSummary$ === "object");
assert(typeof DataTableValue$ === "object");
assert(typeof DataTableValueEvaluationSet$ === "object");
assert(typeof DataTableValueIdentifier$ === "object");
assert(typeof DataTableValueSummary$ === "object");
assert(typeof DateCondition$ === "object");
assert(typeof DateReference$ === "object");
assert(typeof DateTimeCondition$ === "object");
assert(typeof DeactivateEvaluationFormRequest$ === "object");
assert(typeof DeactivateEvaluationFormResponse$ === "object");
assert(typeof DecimalCondition$ === "object");
assert(typeof DefaultVocabulary$ === "object");
assert(typeof DeleteAttachedFileRequest$ === "object");
assert(typeof DeleteAttachedFileResponse$ === "object");
assert(typeof DeleteContactEvaluationRequest$ === "object");
assert(typeof DeleteContactFlowModuleAliasRequest$ === "object");
assert(typeof DeleteContactFlowModuleAliasResponse$ === "object");
assert(typeof DeleteContactFlowModuleRequest$ === "object");
assert(typeof DeleteContactFlowModuleResponse$ === "object");
assert(typeof DeleteContactFlowModuleVersionRequest$ === "object");
assert(typeof DeleteContactFlowModuleVersionResponse$ === "object");
assert(typeof DeleteContactFlowRequest$ === "object");
assert(typeof DeleteContactFlowResponse$ === "object");
assert(typeof DeleteContactFlowVersionRequest$ === "object");
assert(typeof DeleteContactFlowVersionResponse$ === "object");
assert(typeof DeleteDataTableAttributeRequest$ === "object");
assert(typeof DeleteDataTableAttributeResponse$ === "object");
assert(typeof DeleteDataTableRequest$ === "object");
assert(typeof DeleteDataTableResponse$ === "object");
assert(typeof DeleteEmailAddressRequest$ === "object");
assert(typeof DeleteEmailAddressResponse$ === "object");
assert(typeof DeleteEvaluationFormRequest$ === "object");
assert(typeof DeleteHoursOfOperationOverrideRequest$ === "object");
assert(typeof DeleteHoursOfOperationRequest$ === "object");
assert(typeof DeleteInstanceRequest$ === "object");
assert(typeof DeleteIntegrationAssociationRequest$ === "object");
assert(typeof DeletePredefinedAttributeRequest$ === "object");
assert(typeof DeletePromptRequest$ === "object");
assert(typeof DeletePushNotificationRegistrationRequest$ === "object");
assert(typeof DeletePushNotificationRegistrationResponse$ === "object");
assert(typeof DeleteQueueRequest$ === "object");
assert(typeof DeleteQuickConnectRequest$ === "object");
assert(typeof DeleteRoutingProfileRequest$ === "object");
assert(typeof DeleteRuleRequest$ === "object");
assert(typeof DeleteSecurityProfileRequest$ === "object");
assert(typeof DeleteTaskTemplateRequest$ === "object");
assert(typeof DeleteTaskTemplateResponse$ === "object");
assert(typeof DeleteTrafficDistributionGroupRequest$ === "object");
assert(typeof DeleteTrafficDistributionGroupResponse$ === "object");
assert(typeof DeleteUseCaseRequest$ === "object");
assert(typeof DeleteUserHierarchyGroupRequest$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteViewRequest$ === "object");
assert(typeof DeleteViewResponse$ === "object");
assert(typeof DeleteViewVersionRequest$ === "object");
assert(typeof DeleteViewVersionResponse$ === "object");
assert(typeof DeleteVocabularyRequest$ === "object");
assert(typeof DeleteVocabularyResponse$ === "object");
assert(typeof DeleteWorkspaceMediaRequest$ === "object");
assert(typeof DeleteWorkspaceMediaResponse$ === "object");
assert(typeof DeleteWorkspacePageRequest$ === "object");
assert(typeof DeleteWorkspacePageResponse$ === "object");
assert(typeof DeleteWorkspaceRequest$ === "object");
assert(typeof DeleteWorkspaceResponse$ === "object");
assert(typeof DescribeAgentStatusRequest$ === "object");
assert(typeof DescribeAgentStatusResponse$ === "object");
assert(typeof DescribeAuthenticationProfileRequest$ === "object");
assert(typeof DescribeAuthenticationProfileResponse$ === "object");
assert(typeof DescribeContactEvaluationRequest$ === "object");
assert(typeof DescribeContactEvaluationResponse$ === "object");
assert(typeof DescribeContactFlowModuleAliasRequest$ === "object");
assert(typeof DescribeContactFlowModuleAliasResponse$ === "object");
assert(typeof DescribeContactFlowModuleRequest$ === "object");
assert(typeof DescribeContactFlowModuleResponse$ === "object");
assert(typeof DescribeContactFlowRequest$ === "object");
assert(typeof DescribeContactFlowResponse$ === "object");
assert(typeof DescribeContactRequest$ === "object");
assert(typeof DescribeContactResponse$ === "object");
assert(typeof DescribeDataTableAttributeRequest$ === "object");
assert(typeof DescribeDataTableAttributeResponse$ === "object");
assert(typeof DescribeDataTableRequest$ === "object");
assert(typeof DescribeDataTableResponse$ === "object");
assert(typeof DescribeEmailAddressRequest$ === "object");
assert(typeof DescribeEmailAddressResponse$ === "object");
assert(typeof DescribeEvaluationFormRequest$ === "object");
assert(typeof DescribeEvaluationFormResponse$ === "object");
assert(typeof DescribeHoursOfOperationOverrideRequest$ === "object");
assert(typeof DescribeHoursOfOperationOverrideResponse$ === "object");
assert(typeof DescribeHoursOfOperationRequest$ === "object");
assert(typeof DescribeHoursOfOperationResponse$ === "object");
assert(typeof DescribeInstanceAttributeRequest$ === "object");
assert(typeof DescribeInstanceAttributeResponse$ === "object");
assert(typeof DescribeInstanceRequest$ === "object");
assert(typeof DescribeInstanceResponse$ === "object");
assert(typeof DescribeInstanceStorageConfigRequest$ === "object");
assert(typeof DescribeInstanceStorageConfigResponse$ === "object");
assert(typeof DescribePhoneNumberRequest$ === "object");
assert(typeof DescribePhoneNumberResponse$ === "object");
assert(typeof DescribePredefinedAttributeRequest$ === "object");
assert(typeof DescribePredefinedAttributeResponse$ === "object");
assert(typeof DescribePromptRequest$ === "object");
assert(typeof DescribePromptResponse$ === "object");
assert(typeof DescribeQueueRequest$ === "object");
assert(typeof DescribeQueueResponse$ === "object");
assert(typeof DescribeQuickConnectRequest$ === "object");
assert(typeof DescribeQuickConnectResponse$ === "object");
assert(typeof DescribeRoutingProfileRequest$ === "object");
assert(typeof DescribeRoutingProfileResponse$ === "object");
assert(typeof DescribeRuleRequest$ === "object");
assert(typeof DescribeRuleResponse$ === "object");
assert(typeof DescribeSecurityProfileRequest$ === "object");
assert(typeof DescribeSecurityProfileResponse$ === "object");
assert(typeof DescribeTrafficDistributionGroupRequest$ === "object");
assert(typeof DescribeTrafficDistributionGroupResponse$ === "object");
assert(typeof DescribeUserHierarchyGroupRequest$ === "object");
assert(typeof DescribeUserHierarchyGroupResponse$ === "object");
assert(typeof DescribeUserHierarchyStructureRequest$ === "object");
assert(typeof DescribeUserHierarchyStructureResponse$ === "object");
assert(typeof DescribeUserRequest$ === "object");
assert(typeof DescribeUserResponse$ === "object");
assert(typeof DescribeViewRequest$ === "object");
assert(typeof DescribeViewResponse$ === "object");
assert(typeof DescribeVocabularyRequest$ === "object");
assert(typeof DescribeVocabularyResponse$ === "object");
assert(typeof DescribeWorkspaceRequest$ === "object");
assert(typeof DescribeWorkspaceResponse$ === "object");
assert(typeof DeviceInfo$ === "object");
assert(typeof Dimensions$ === "object");
assert(typeof DisassociateAnalyticsDataSetRequest$ === "object");
assert(typeof DisassociateApprovedOriginRequest$ === "object");
assert(typeof DisassociateBotRequest$ === "object");
assert(typeof DisassociateEmailAddressAliasRequest$ === "object");
assert(typeof DisassociateEmailAddressAliasResponse$ === "object");
assert(typeof DisassociateFlowRequest$ === "object");
assert(typeof DisassociateFlowResponse$ === "object");
assert(typeof DisassociateInstanceStorageConfigRequest$ === "object");
assert(typeof DisassociateLambdaFunctionRequest$ === "object");
assert(typeof DisassociateLexBotRequest$ === "object");
assert(typeof DisassociatePhoneNumberContactFlowRequest$ === "object");
assert(typeof DisassociateQueueQuickConnectsRequest$ === "object");
assert(typeof DisassociateRoutingProfileQueuesRequest$ === "object");
assert(typeof DisassociateSecurityKeyRequest$ === "object");
assert(typeof DisassociateSecurityProfilesRequest$ === "object");
assert(typeof DisassociateTrafficDistributionGroupUserRequest$ === "object");
assert(typeof DisassociateTrafficDistributionGroupUserResponse$ === "object");
assert(typeof DisassociateUserProficienciesRequest$ === "object");
assert(typeof DisassociateWorkspaceRequest$ === "object");
assert(typeof DisassociateWorkspaceResponse$ === "object");
assert(typeof DisconnectDetails$ === "object");
assert(typeof DisconnectReason$ === "object");
assert(typeof DismissUserContactRequest$ === "object");
assert(typeof DismissUserContactResponse$ === "object");
assert(typeof Distribution$ === "object");
assert(typeof DownloadUrlMetadata$ === "object");
assert(typeof EffectiveHoursOfOperations$ === "object");
assert(typeof EmailAddressInfo$ === "object");
assert(typeof EmailAddressMetadata$ === "object");
assert(typeof EmailAddressSearchCriteria$ === "object");
assert(typeof EmailAddressSearchFilter$ === "object");
assert(typeof EmailAttachment$ === "object");
assert(typeof EmailMessageReference$ === "object");
assert(typeof EmailRecipient$ === "object");
assert(typeof EmailReference$ === "object");
assert(typeof EmptyFieldValue$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof EndAssociatedTasksActionDefinition$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EndpointInfo$ === "object");
assert(typeof ErrorResult$ === "object");
assert(typeof EvaluateDataTableValuesRequest$ === "object");
assert(typeof EvaluateDataTableValuesResponse$ === "object");
assert(typeof Evaluation$ === "object");
assert(typeof EvaluationAcknowledgement$ === "object");
assert(typeof EvaluationAcknowledgementSummary$ === "object");
assert(typeof EvaluationAnswerData$ === "object");
assert(typeof EvaluationAnswerInput$ === "object");
assert(typeof EvaluationAnswerOutput$ === "object");
assert(typeof EvaluationAutomationRuleCategory$ === "object");
assert(typeof EvaluationContactLensAnswerAnalysisDetails$ === "object");
assert(typeof EvaluationContactParticipant$ === "object");
assert(typeof EvaluationForm$ === "object");
assert(typeof EvaluationFormAutoEvaluationConfiguration$ === "object");
assert(typeof EvaluationFormContent$ === "object");
assert(typeof EvaluationFormItem$ === "object");
assert(typeof EvaluationFormItemEnablementCondition$ === "object");
assert(typeof EvaluationFormItemEnablementConditionOperand$ === "object");
assert(typeof EvaluationFormItemEnablementConfiguration$ === "object");
assert(typeof EvaluationFormItemEnablementExpression$ === "object");
assert(typeof EvaluationFormItemEnablementSource$ === "object");
assert(typeof EvaluationFormItemEnablementSourceValue$ === "object");
assert(typeof EvaluationFormLanguageConfiguration$ === "object");
assert(typeof EvaluationFormMultiSelectQuestionAutomation$ === "object");
assert(typeof EvaluationFormMultiSelectQuestionAutomationOption$ === "object");
assert(typeof EvaluationFormMultiSelectQuestionOption$ === "object");
assert(typeof EvaluationFormMultiSelectQuestionProperties$ === "object");
assert(typeof EvaluationFormNumericQuestionAutomation$ === "object");
assert(typeof EvaluationFormNumericQuestionOption$ === "object");
assert(typeof EvaluationFormNumericQuestionProperties$ === "object");
assert(typeof EvaluationFormQuestion$ === "object");
assert(typeof EvaluationFormQuestionAutomationAnswerSource$ === "object");
assert(typeof EvaluationFormQuestionTypeProperties$ === "object");
assert(typeof EvaluationFormScoringStrategy$ === "object");
assert(typeof EvaluationFormSearchCriteria$ === "object");
assert(typeof EvaluationFormSearchFilter$ === "object");
assert(typeof EvaluationFormSearchSummary$ === "object");
assert(typeof EvaluationFormSection$ === "object");
assert(typeof EvaluationFormSingleSelectQuestionAutomation$ === "object");
assert(typeof EvaluationFormSingleSelectQuestionAutomationOption$ === "object");
assert(typeof EvaluationFormSingleSelectQuestionOption$ === "object");
assert(typeof EvaluationFormSingleSelectQuestionProperties$ === "object");
assert(typeof EvaluationFormSummary$ === "object");
assert(typeof EvaluationFormTargetConfiguration$ === "object");
assert(typeof EvaluationFormTextQuestionAutomation$ === "object");
assert(typeof EvaluationFormTextQuestionProperties$ === "object");
assert(typeof EvaluationFormVersionSummary$ === "object");
assert(typeof EvaluationGenAIAnswerAnalysisDetails$ === "object");
assert(typeof EvaluationMetadata$ === "object");
assert(typeof EvaluationNote$ === "object");
assert(typeof EvaluationQuestionAnswerAnalysisDetails$ === "object");
assert(typeof EvaluationQuestionInputDetails$ === "object");
assert(typeof EvaluationScore$ === "object");
assert(typeof EvaluationSearchCriteria$ === "object");
assert(typeof EvaluationSearchFilter$ === "object");
assert(typeof EvaluationSearchMetadata$ === "object");
assert(typeof EvaluationSearchSummary$ === "object");
assert(typeof EvaluationSuggestedAnswer$ === "object");
assert(typeof EvaluationSuggestedAnswerTranscriptMillisecondOffsets$ === "object");
assert(typeof EvaluationSummary$ === "object");
assert(typeof EvaluationTranscriptPointOfInterest$ === "object");
assert(typeof EvaluatorUserUnion$ === "object");
assert(typeof EventBridgeActionDefinition$ === "object");
assert(typeof Expiry$ === "object");
assert(typeof Expression$ === "object");
assert(typeof ExternalInvocationConfiguration$ === "object");
assert(typeof FailedBatchAssociationSummary$ === "object");
assert(typeof FailedRequest$ === "object");
assert(typeof FieldValue$ === "object");
assert(typeof FieldValueUnion$ === "object");
assert(typeof Filters$ === "object");
assert(typeof FilterV2$ === "object");
assert(typeof FilterV2StringCondition$ === "object");
assert(typeof FlowAssociationSummary$ === "object");
assert(typeof FlowModule$ === "object");
assert(typeof FlowQuickConnectConfig$ === "object");
assert(typeof FontFamily$ === "object");
assert(typeof GetAttachedFileRequest$ === "object");
assert(typeof GetAttachedFileResponse$ === "object");
assert(typeof GetContactAttributesRequest$ === "object");
assert(typeof GetContactAttributesResponse$ === "object");
assert(typeof GetContactMetricsRequest$ === "object");
assert(typeof GetContactMetricsResponse$ === "object");
assert(typeof GetCurrentMetricDataRequest$ === "object");
assert(typeof GetCurrentMetricDataResponse$ === "object");
assert(typeof GetCurrentUserDataRequest$ === "object");
assert(typeof GetCurrentUserDataResponse$ === "object");
assert(typeof GetEffectiveHoursOfOperationsRequest$ === "object");
assert(typeof GetEffectiveHoursOfOperationsResponse$ === "object");
assert(typeof GetFederationTokenRequest$ === "object");
assert(typeof GetFederationTokenResponse$ === "object");
assert(typeof GetFlowAssociationRequest$ === "object");
assert(typeof GetFlowAssociationResponse$ === "object");
assert(typeof GetMetricDataRequest$ === "object");
assert(typeof GetMetricDataResponse$ === "object");
assert(typeof GetMetricDataV2Request$ === "object");
assert(typeof GetMetricDataV2Response$ === "object");
assert(typeof GetPromptFileRequest$ === "object");
assert(typeof GetPromptFileResponse$ === "object");
assert(typeof GetTaskTemplateRequest$ === "object");
assert(typeof GetTaskTemplateResponse$ === "object");
assert(typeof GetTrafficDistributionRequest$ === "object");
assert(typeof GetTrafficDistributionResponse$ === "object");
assert(typeof GlobalResiliencyMetadata$ === "object");
assert(typeof GranularAccessControlConfiguration$ === "object");
assert(typeof HierarchyGroup$ === "object");
assert(typeof HierarchyGroupCondition$ === "object");
assert(typeof HierarchyGroups$ === "object");
assert(typeof HierarchyGroupSummary$ === "object");
assert(typeof HierarchyGroupSummaryReference$ === "object");
assert(typeof HierarchyLevel$ === "object");
assert(typeof HierarchyLevelUpdate$ === "object");
assert(typeof HierarchyPath$ === "object");
assert(typeof HierarchyPathReference$ === "object");
assert(typeof HierarchyStructure$ === "object");
assert(typeof HierarchyStructureUpdate$ === "object");
assert(typeof HistoricalMetric$ === "object");
assert(typeof HistoricalMetricData$ === "object");
assert(typeof HistoricalMetricResult$ === "object");
assert(typeof HoursOfOperation$ === "object");
assert(typeof HoursOfOperationConfig$ === "object");
assert(typeof HoursOfOperationOverride$ === "object");
assert(typeof HoursOfOperationOverrideConfig$ === "object");
assert(typeof HoursOfOperationOverrideSearchCriteria$ === "object");
assert(typeof HoursOfOperationSearchCriteria$ === "object");
assert(typeof HoursOfOperationSearchFilter$ === "object");
assert(typeof HoursOfOperationSummary$ === "object");
assert(typeof HoursOfOperationTimeSlice$ === "object");
assert(typeof ImagesLogo$ === "object");
assert(typeof ImportPhoneNumberRequest$ === "object");
assert(typeof ImportPhoneNumberResponse$ === "object");
assert(typeof ImportWorkspaceMediaRequest$ === "object");
assert(typeof ImportWorkspaceMediaResponse$ === "object");
assert(typeof InboundAdditionalRecipients$ === "object");
assert(typeof InboundEmailContent$ === "object");
assert(typeof InboundRawMessage$ === "object");
assert(typeof InputPredefinedAttributeConfiguration$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceStatusReason$ === "object");
assert(typeof InstanceStorageConfig$ === "object");
assert(typeof InstanceSummary$ === "object");
assert(typeof IntegrationAssociationSummary$ === "object");
assert(typeof IntervalDetails$ === "object");
assert(typeof InvalidRequestExceptionReason$ === "object");
assert(typeof InvisibleFieldInfo$ === "object");
assert(typeof KinesisFirehoseConfig$ === "object");
assert(typeof KinesisStreamConfig$ === "object");
assert(typeof KinesisVideoStreamConfig$ === "object");
assert(typeof LexBot$ === "object");
assert(typeof LexBotConfig$ === "object");
assert(typeof LexV2Bot$ === "object");
assert(typeof ListAgentStatusRequest$ === "object");
assert(typeof ListAgentStatusResponse$ === "object");
assert(typeof ListAnalyticsDataAssociationsRequest$ === "object");
assert(typeof ListAnalyticsDataAssociationsResponse$ === "object");
assert(typeof ListAnalyticsDataLakeDataSetsRequest$ === "object");
assert(typeof ListAnalyticsDataLakeDataSetsResponse$ === "object");
assert(typeof ListApprovedOriginsRequest$ === "object");
assert(typeof ListApprovedOriginsResponse$ === "object");
assert(typeof ListAssociatedContactsRequest$ === "object");
assert(typeof ListAssociatedContactsResponse$ === "object");
assert(typeof ListAuthenticationProfilesRequest$ === "object");
assert(typeof ListAuthenticationProfilesResponse$ === "object");
assert(typeof ListBotsRequest$ === "object");
assert(typeof ListBotsResponse$ === "object");
assert(typeof ListCondition$ === "object");
assert(typeof ListContactEvaluationsRequest$ === "object");
assert(typeof ListContactEvaluationsResponse$ === "object");
assert(typeof ListContactFlowModuleAliasesRequest$ === "object");
assert(typeof ListContactFlowModuleAliasesResponse$ === "object");
assert(typeof ListContactFlowModulesRequest$ === "object");
assert(typeof ListContactFlowModulesResponse$ === "object");
assert(typeof ListContactFlowModuleVersionsRequest$ === "object");
assert(typeof ListContactFlowModuleVersionsResponse$ === "object");
assert(typeof ListContactFlowsRequest$ === "object");
assert(typeof ListContactFlowsResponse$ === "object");
assert(typeof ListContactFlowVersionsRequest$ === "object");
assert(typeof ListContactFlowVersionsResponse$ === "object");
assert(typeof ListContactReferencesRequest$ === "object");
assert(typeof ListContactReferencesResponse$ === "object");
assert(typeof ListDataTableAttributesRequest$ === "object");
assert(typeof ListDataTableAttributesResponse$ === "object");
assert(typeof ListDataTablePrimaryValuesRequest$ === "object");
assert(typeof ListDataTablePrimaryValuesResponse$ === "object");
assert(typeof ListDataTablesRequest$ === "object");
assert(typeof ListDataTablesResponse$ === "object");
assert(typeof ListDataTableValuesRequest$ === "object");
assert(typeof ListDataTableValuesResponse$ === "object");
assert(typeof ListDefaultVocabulariesRequest$ === "object");
assert(typeof ListDefaultVocabulariesResponse$ === "object");
assert(typeof ListEntitySecurityProfilesRequest$ === "object");
assert(typeof ListEntitySecurityProfilesResponse$ === "object");
assert(typeof ListEvaluationFormsRequest$ === "object");
assert(typeof ListEvaluationFormsResponse$ === "object");
assert(typeof ListEvaluationFormVersionsRequest$ === "object");
assert(typeof ListEvaluationFormVersionsResponse$ === "object");
assert(typeof ListFlowAssociationsRequest$ === "object");
assert(typeof ListFlowAssociationsResponse$ === "object");
assert(typeof ListHoursOfOperationOverridesRequest$ === "object");
assert(typeof ListHoursOfOperationOverridesResponse$ === "object");
assert(typeof ListHoursOfOperationsRequest$ === "object");
assert(typeof ListHoursOfOperationsResponse$ === "object");
assert(typeof ListInstanceAttributesRequest$ === "object");
assert(typeof ListInstanceAttributesResponse$ === "object");
assert(typeof ListInstancesRequest$ === "object");
assert(typeof ListInstancesResponse$ === "object");
assert(typeof ListInstanceStorageConfigsRequest$ === "object");
assert(typeof ListInstanceStorageConfigsResponse$ === "object");
assert(typeof ListIntegrationAssociationsRequest$ === "object");
assert(typeof ListIntegrationAssociationsResponse$ === "object");
assert(typeof ListLambdaFunctionsRequest$ === "object");
assert(typeof ListLambdaFunctionsResponse$ === "object");
assert(typeof ListLexBotsRequest$ === "object");
assert(typeof ListLexBotsResponse$ === "object");
assert(typeof ListPhoneNumbersRequest$ === "object");
assert(typeof ListPhoneNumbersResponse$ === "object");
assert(typeof ListPhoneNumbersSummary$ === "object");
assert(typeof ListPhoneNumbersV2Request$ === "object");
assert(typeof ListPhoneNumbersV2Response$ === "object");
assert(typeof ListPredefinedAttributesRequest$ === "object");
assert(typeof ListPredefinedAttributesResponse$ === "object");
assert(typeof ListPromptsRequest$ === "object");
assert(typeof ListPromptsResponse$ === "object");
assert(typeof ListQueueQuickConnectsRequest$ === "object");
assert(typeof ListQueueQuickConnectsResponse$ === "object");
assert(typeof ListQueuesRequest$ === "object");
assert(typeof ListQueuesResponse$ === "object");
assert(typeof ListQuickConnectsRequest$ === "object");
assert(typeof ListQuickConnectsResponse$ === "object");
assert(typeof ListRealtimeContactAnalysisSegmentsV2Request$ === "object");
assert(typeof ListRealtimeContactAnalysisSegmentsV2Response$ === "object");
assert(typeof ListRoutingProfileManualAssignmentQueuesRequest$ === "object");
assert(typeof ListRoutingProfileManualAssignmentQueuesResponse$ === "object");
assert(typeof ListRoutingProfileQueuesRequest$ === "object");
assert(typeof ListRoutingProfileQueuesResponse$ === "object");
assert(typeof ListRoutingProfilesRequest$ === "object");
assert(typeof ListRoutingProfilesResponse$ === "object");
assert(typeof ListRulesRequest$ === "object");
assert(typeof ListRulesResponse$ === "object");
assert(typeof ListSecurityKeysRequest$ === "object");
assert(typeof ListSecurityKeysResponse$ === "object");
assert(typeof ListSecurityProfileApplicationsRequest$ === "object");
assert(typeof ListSecurityProfileApplicationsResponse$ === "object");
assert(typeof ListSecurityProfileFlowModulesRequest$ === "object");
assert(typeof ListSecurityProfileFlowModulesResponse$ === "object");
assert(typeof ListSecurityProfilePermissionsRequest$ === "object");
assert(typeof ListSecurityProfilePermissionsResponse$ === "object");
assert(typeof ListSecurityProfilesRequest$ === "object");
assert(typeof ListSecurityProfilesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTaskTemplatesRequest$ === "object");
assert(typeof ListTaskTemplatesResponse$ === "object");
assert(typeof ListTrafficDistributionGroupsRequest$ === "object");
assert(typeof ListTrafficDistributionGroupsResponse$ === "object");
assert(typeof ListTrafficDistributionGroupUsersRequest$ === "object");
assert(typeof ListTrafficDistributionGroupUsersResponse$ === "object");
assert(typeof ListUseCasesRequest$ === "object");
assert(typeof ListUseCasesResponse$ === "object");
assert(typeof ListUserHierarchyGroupsRequest$ === "object");
assert(typeof ListUserHierarchyGroupsResponse$ === "object");
assert(typeof ListUserProficienciesRequest$ === "object");
assert(typeof ListUserProficienciesResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof ListViewsRequest$ === "object");
assert(typeof ListViewsResponse$ === "object");
assert(typeof ListViewVersionsRequest$ === "object");
assert(typeof ListViewVersionsResponse$ === "object");
assert(typeof ListWorkspaceMediaRequest$ === "object");
assert(typeof ListWorkspaceMediaResponse$ === "object");
assert(typeof ListWorkspacePagesRequest$ === "object");
assert(typeof ListWorkspacePagesResponse$ === "object");
assert(typeof ListWorkspacesRequest$ === "object");
assert(typeof ListWorkspacesResponse$ === "object");
assert(typeof MatchCriteria$ === "object");
assert(typeof MediaConcurrency$ === "object");
assert(typeof MediaItem$ === "object");
assert(typeof MediaPlacement$ === "object");
assert(typeof Meeting$ === "object");
assert(typeof MeetingFeaturesConfiguration$ === "object");
assert(typeof MetricDataV2$ === "object");
assert(typeof MetricFilterV2$ === "object");
assert(typeof MetricInterval$ === "object");
assert(typeof MetricResultV2$ === "object");
assert(typeof MetricV2$ === "object");
assert(typeof MonitorContactRequest$ === "object");
assert(typeof MonitorContactResponse$ === "object");
assert(typeof MultiSelectQuestionRuleCategoryAutomation$ === "object");
assert(typeof NameCriteria$ === "object");
assert(typeof NewSessionDetails$ === "object");
assert(typeof NextContactEntry$ === "object");
assert(typeof NextContactMetadata$ === "object");
assert(typeof NotificationRecipientType$ === "object");
assert(typeof NumberCondition$ === "object");
assert(typeof NumberReference$ === "object");
assert(typeof NumericQuestionPropertyValueAutomation$ === "object");
assert(typeof OperationalHour$ === "object");
assert(typeof OutboundAdditionalRecipients$ === "object");
assert(typeof OutboundCallerConfig$ === "object");
assert(typeof OutboundEmailConfig$ === "object");
assert(typeof OutboundEmailContent$ === "object");
assert(typeof OutboundRawMessage$ === "object");
assert(typeof OutboundStrategy$ === "object");
assert(typeof OutboundStrategyConfig$ === "object");
assert(typeof OverrideTimeSlice$ === "object");
assert(typeof PaletteCanvas$ === "object");
assert(typeof PaletteHeader$ === "object");
assert(typeof PaletteNavigation$ === "object");
assert(typeof PalettePrimary$ === "object");
assert(typeof ParticipantCapabilities$ === "object");
assert(typeof ParticipantConfiguration$ === "object");
assert(typeof ParticipantDetails$ === "object");
assert(typeof ParticipantDetailsToAdd$ === "object");
assert(typeof ParticipantMetrics$ === "object");
assert(typeof ParticipantTimerConfiguration$ === "object");
assert(typeof ParticipantTimerValue$ === "object");
assert(typeof ParticipantTokenCredentials$ === "object");
assert(typeof PauseContactRequest$ === "object");
assert(typeof PauseContactResponse$ === "object");
assert(typeof PersistentChat$ === "object");
assert(typeof PhoneNumberQuickConnectConfig$ === "object");
assert(typeof PhoneNumberStatus$ === "object");
assert(typeof PhoneNumberSummary$ === "object");
assert(typeof PostAcceptTimeoutConfig$ === "object");
assert(typeof PredefinedAttribute$ === "object");
assert(typeof PredefinedAttributeConfiguration$ === "object");
assert(typeof PredefinedAttributeSearchCriteria$ === "object");
assert(typeof PredefinedAttributeSummary$ === "object");
assert(typeof PredefinedAttributeValues$ === "object");
assert(typeof Preview$ === "object");
assert(typeof PrimaryAttributeAccessControlConfigurationItem$ === "object");
assert(typeof PrimaryAttributeValue$ === "object");
assert(typeof PrimaryAttributeValueFilter$ === "object");
assert(typeof PrimaryValue$ === "object");
assert(typeof PrimaryValueResponse$ === "object");
assert(typeof ProblemDetail$ === "object");
assert(typeof Prompt$ === "object");
assert(typeof PromptSearchCriteria$ === "object");
assert(typeof PromptSearchFilter$ === "object");
assert(typeof PromptSummary$ === "object");
assert(typeof PropertyValidationExceptionProperty$ === "object");
assert(typeof PutUserStatusRequest$ === "object");
assert(typeof PutUserStatusResponse$ === "object");
assert(typeof QualityMetrics$ === "object");
assert(typeof Queue$ === "object");
assert(typeof QueueInfo$ === "object");
assert(typeof QueueInfoInput$ === "object");
assert(typeof QueueQuickConnectConfig$ === "object");
assert(typeof QueueReference$ === "object");
assert(typeof QueueSearchCriteria$ === "object");
assert(typeof QueueSearchFilter$ === "object");
assert(typeof QueueSummary$ === "object");
assert(typeof QuickConnect$ === "object");
assert(typeof QuickConnectConfig$ === "object");
assert(typeof QuickConnectContactData$ === "object");
assert(typeof QuickConnectSearchCriteria$ === "object");
assert(typeof QuickConnectSearchFilter$ === "object");
assert(typeof QuickConnectSummary$ === "object");
assert(typeof Range$ === "object");
assert(typeof ReadOnlyFieldInfo$ === "object");
assert(typeof RealTimeContactAnalysisAttachment$ === "object");
assert(typeof RealTimeContactAnalysisCategoryDetails$ === "object");
assert(typeof RealTimeContactAnalysisCharacterInterval$ === "object");
assert(typeof RealTimeContactAnalysisIssueDetected$ === "object");
assert(typeof RealTimeContactAnalysisPointOfInterest$ === "object");
assert(typeof RealtimeContactAnalysisSegment$ === "object");
assert(typeof RealTimeContactAnalysisSegmentAttachments$ === "object");
assert(typeof RealTimeContactAnalysisSegmentCategories$ === "object");
assert(typeof RealTimeContactAnalysisSegmentEvent$ === "object");
assert(typeof RealTimeContactAnalysisSegmentIssues$ === "object");
assert(typeof RealTimeContactAnalysisSegmentPostContactSummary$ === "object");
assert(typeof RealTimeContactAnalysisSegmentTranscript$ === "object");
assert(typeof RealTimeContactAnalysisTimeData$ === "object");
assert(typeof RealTimeContactAnalysisTranscriptItemRedaction$ === "object");
assert(typeof RealTimeContactAnalysisTranscriptItemWithCharacterOffsets$ === "object");
assert(typeof RealTimeContactAnalysisTranscriptItemWithContent$ === "object");
assert(typeof RecordingInfo$ === "object");
assert(typeof RecordPrimaryValue$ === "object");
assert(typeof Reference$ === "object");
assert(typeof ReferenceSummary$ === "object");
assert(typeof ReleasePhoneNumberRequest$ === "object");
assert(typeof ReplicateInstanceRequest$ === "object");
assert(typeof ReplicateInstanceResponse$ === "object");
assert(typeof ReplicationConfiguration$ === "object");
assert(typeof ReplicationStatusSummary$ === "object");
assert(typeof RequiredFieldInfo$ === "object");
assert(typeof ResourceTagsSearchCriteria$ === "object");
assert(typeof ResumeContactRecordingRequest$ === "object");
assert(typeof ResumeContactRecordingResponse$ === "object");
assert(typeof ResumeContactRequest$ === "object");
assert(typeof ResumeContactResponse$ === "object");
assert(typeof RoutingCriteria$ === "object");
assert(typeof RoutingCriteriaInput$ === "object");
assert(typeof RoutingCriteriaInputStep$ === "object");
assert(typeof RoutingCriteriaInputStepExpiry$ === "object");
assert(typeof RoutingProfile$ === "object");
assert(typeof RoutingProfileManualAssignmentQueueConfig$ === "object");
assert(typeof RoutingProfileManualAssignmentQueueConfigSummary$ === "object");
assert(typeof RoutingProfileQueueConfig$ === "object");
assert(typeof RoutingProfileQueueConfigSummary$ === "object");
assert(typeof RoutingProfileQueueReference$ === "object");
assert(typeof RoutingProfileReference$ === "object");
assert(typeof RoutingProfileSearchCriteria$ === "object");
assert(typeof RoutingProfileSearchFilter$ === "object");
assert(typeof RoutingProfileSummary$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleAction$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof RuleTriggerEventSource$ === "object");
assert(typeof S3Config$ === "object");
assert(typeof SearchableAgentCriteriaStep$ === "object");
assert(typeof SearchableContactAttributes$ === "object");
assert(typeof SearchableContactAttributesCriteria$ === "object");
assert(typeof SearchableRoutingCriteria$ === "object");
assert(typeof SearchableRoutingCriteriaStep$ === "object");
assert(typeof SearchableSegmentAttributes$ === "object");
assert(typeof SearchableSegmentAttributesCriteria$ === "object");
assert(typeof SearchAgentStatusesRequest$ === "object");
assert(typeof SearchAgentStatusesResponse$ === "object");
assert(typeof SearchAvailablePhoneNumbersRequest$ === "object");
assert(typeof SearchAvailablePhoneNumbersResponse$ === "object");
assert(typeof SearchContactEvaluationsRequest$ === "object");
assert(typeof SearchContactEvaluationsResponse$ === "object");
assert(typeof SearchContactFlowModulesRequest$ === "object");
assert(typeof SearchContactFlowModulesResponse$ === "object");
assert(typeof SearchContactFlowsRequest$ === "object");
assert(typeof SearchContactFlowsResponse$ === "object");
assert(typeof SearchContactsAdditionalTimeRange$ === "object");
assert(typeof SearchContactsAdditionalTimeRangeCriteria$ === "object");
assert(typeof SearchContactsRequest$ === "object");
assert(typeof SearchContactsResponse$ === "object");
assert(typeof SearchContactsTimeRange$ === "object");
assert(typeof SearchContactsTimestampCondition$ === "object");
assert(typeof SearchCriteria$ === "object");
assert(typeof SearchDataTablesRequest$ === "object");
assert(typeof SearchDataTablesResponse$ === "object");
assert(typeof SearchEmailAddressesRequest$ === "object");
assert(typeof SearchEmailAddressesResponse$ === "object");
assert(typeof SearchEvaluationFormsRequest$ === "object");
assert(typeof SearchEvaluationFormsResponse$ === "object");
assert(typeof SearchHoursOfOperationOverridesRequest$ === "object");
assert(typeof SearchHoursOfOperationOverridesResponse$ === "object");
assert(typeof SearchHoursOfOperationsRequest$ === "object");
assert(typeof SearchHoursOfOperationsResponse$ === "object");
assert(typeof SearchPredefinedAttributesRequest$ === "object");
assert(typeof SearchPredefinedAttributesResponse$ === "object");
assert(typeof SearchPromptsRequest$ === "object");
assert(typeof SearchPromptsResponse$ === "object");
assert(typeof SearchQueuesRequest$ === "object");
assert(typeof SearchQueuesResponse$ === "object");
assert(typeof SearchQuickConnectsRequest$ === "object");
assert(typeof SearchQuickConnectsResponse$ === "object");
assert(typeof SearchResourceTagsRequest$ === "object");
assert(typeof SearchResourceTagsResponse$ === "object");
assert(typeof SearchRoutingProfilesRequest$ === "object");
assert(typeof SearchRoutingProfilesResponse$ === "object");
assert(typeof SearchSecurityProfilesRequest$ === "object");
assert(typeof SearchSecurityProfilesResponse$ === "object");
assert(typeof SearchUserHierarchyGroupsRequest$ === "object");
assert(typeof SearchUserHierarchyGroupsResponse$ === "object");
assert(typeof SearchUsersRequest$ === "object");
assert(typeof SearchUsersResponse$ === "object");
assert(typeof SearchViewsRequest$ === "object");
assert(typeof SearchViewsResponse$ === "object");
assert(typeof SearchVocabulariesRequest$ === "object");
assert(typeof SearchVocabulariesResponse$ === "object");
assert(typeof SearchWorkspaceAssociationsRequest$ === "object");
assert(typeof SearchWorkspaceAssociationsResponse$ === "object");
assert(typeof SearchWorkspacesRequest$ === "object");
assert(typeof SearchWorkspacesResponse$ === "object");
assert(typeof SecurityKey$ === "object");
assert(typeof SecurityProfile$ === "object");
assert(typeof SecurityProfileItem$ === "object");
assert(typeof SecurityProfileSearchCriteria$ === "object");
assert(typeof SecurityProfileSearchSummary$ === "object");
assert(typeof SecurityProfilesSearchFilter$ === "object");
assert(typeof SecurityProfileSummary$ === "object");
assert(typeof SegmentAttributeValue$ === "object");
assert(typeof SendChatIntegrationEventRequest$ === "object");
assert(typeof SendChatIntegrationEventResponse$ === "object");
assert(typeof SendNotificationActionDefinition$ === "object");
assert(typeof SendOutboundEmailRequest$ === "object");
assert(typeof SendOutboundEmailResponse$ === "object");
assert(typeof ServiceQuotaExceededExceptionReason$ === "object");
assert(typeof SignInConfig$ === "object");
assert(typeof SignInDistribution$ === "object");
assert(typeof SingleSelectQuestionRuleCategoryAutomation$ === "object");
assert(typeof Sort$ === "object");
assert(typeof SourceCampaign$ === "object");
assert(typeof StartAttachedFileUploadRequest$ === "object");
assert(typeof StartAttachedFileUploadResponse$ === "object");
assert(typeof StartChatContactRequest$ === "object");
assert(typeof StartChatContactResponse$ === "object");
assert(typeof StartContactEvaluationRequest$ === "object");
assert(typeof StartContactEvaluationResponse$ === "object");
assert(typeof StartContactMediaProcessingRequest$ === "object");
assert(typeof StartContactMediaProcessingResponse$ === "object");
assert(typeof StartContactRecordingRequest$ === "object");
assert(typeof StartContactRecordingResponse$ === "object");
assert(typeof StartContactStreamingRequest$ === "object");
assert(typeof StartContactStreamingResponse$ === "object");
assert(typeof StartEmailContactRequest$ === "object");
assert(typeof StartEmailContactResponse$ === "object");
assert(typeof StartOutboundChatContactRequest$ === "object");
assert(typeof StartOutboundChatContactResponse$ === "object");
assert(typeof StartOutboundEmailContactRequest$ === "object");
assert(typeof StartOutboundEmailContactResponse$ === "object");
assert(typeof StartOutboundVoiceContactRequest$ === "object");
assert(typeof StartOutboundVoiceContactResponse$ === "object");
assert(typeof StartScreenSharingRequest$ === "object");
assert(typeof StartScreenSharingResponse$ === "object");
assert(typeof StartTaskContactRequest$ === "object");
assert(typeof StartTaskContactResponse$ === "object");
assert(typeof StartWebRTCContactRequest$ === "object");
assert(typeof StartWebRTCContactResponse$ === "object");
assert(typeof StateTransition$ === "object");
assert(typeof Step$ === "object");
assert(typeof StopContactMediaProcessingRequest$ === "object");
assert(typeof StopContactMediaProcessingResponse$ === "object");
assert(typeof StopContactRecordingRequest$ === "object");
assert(typeof StopContactRecordingResponse$ === "object");
assert(typeof StopContactRequest$ === "object");
assert(typeof StopContactResponse$ === "object");
assert(typeof StopContactStreamingRequest$ === "object");
assert(typeof StopContactStreamingResponse$ === "object");
assert(typeof StringCondition$ === "object");
assert(typeof StringReference$ === "object");
assert(typeof SubmitAutoEvaluationActionDefinition$ === "object");
assert(typeof SubmitContactEvaluationRequest$ === "object");
assert(typeof SubmitContactEvaluationResponse$ === "object");
assert(typeof SuccessfulBatchAssociationSummary$ === "object");
assert(typeof SuccessfulRequest$ === "object");
assert(typeof SuspendContactRecordingRequest$ === "object");
assert(typeof SuspendContactRecordingResponse$ === "object");
assert(typeof TagCondition$ === "object");
assert(typeof TagContactRequest$ === "object");
assert(typeof TagContactResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagSearchCondition$ === "object");
assert(typeof TagSet$ === "object");
assert(typeof TaskActionDefinition$ === "object");
assert(typeof TaskTemplateConstraints$ === "object");
assert(typeof TaskTemplateDefaultFieldValue$ === "object");
assert(typeof TaskTemplateDefaults$ === "object");
assert(typeof TaskTemplateField$ === "object");
assert(typeof TaskTemplateFieldIdentifier$ === "object");
assert(typeof TaskTemplateInfoV2$ === "object");
assert(typeof TaskTemplateMetadata$ === "object");
assert(typeof TelephonyConfig$ === "object");
assert(typeof TemplateAttributes$ === "object");
assert(typeof TemplatedMessageConfig$ === "object");
assert(typeof Threshold$ === "object");
assert(typeof ThresholdV2$ === "object");
assert(typeof TrafficDistributionGroup$ === "object");
assert(typeof TrafficDistributionGroupSummary$ === "object");
assert(typeof TrafficDistributionGroupUserSummary$ === "object");
assert(typeof Transcript$ === "object");
assert(typeof TranscriptCriteria$ === "object");
assert(typeof TransferContactRequest$ === "object");
assert(typeof TransferContactResponse$ === "object");
assert(typeof UntagContactRequest$ === "object");
assert(typeof UntagContactResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAgentStatusRequest$ === "object");
assert(typeof UpdateAuthenticationProfileRequest$ === "object");
assert(typeof UpdateCaseActionDefinition$ === "object");
assert(typeof UpdateContactAttributesRequest$ === "object");
assert(typeof UpdateContactAttributesResponse$ === "object");
assert(typeof UpdateContactEvaluationRequest$ === "object");
assert(typeof UpdateContactEvaluationResponse$ === "object");
assert(typeof UpdateContactFlowContentRequest$ === "object");
assert(typeof UpdateContactFlowContentResponse$ === "object");
assert(typeof UpdateContactFlowMetadataRequest$ === "object");
assert(typeof UpdateContactFlowMetadataResponse$ === "object");
assert(typeof UpdateContactFlowModuleAliasRequest$ === "object");
assert(typeof UpdateContactFlowModuleAliasResponse$ === "object");
assert(typeof UpdateContactFlowModuleContentRequest$ === "object");
assert(typeof UpdateContactFlowModuleContentResponse$ === "object");
assert(typeof UpdateContactFlowModuleMetadataRequest$ === "object");
assert(typeof UpdateContactFlowModuleMetadataResponse$ === "object");
assert(typeof UpdateContactFlowNameRequest$ === "object");
assert(typeof UpdateContactFlowNameResponse$ === "object");
assert(typeof UpdateContactRequest$ === "object");
assert(typeof UpdateContactResponse$ === "object");
assert(typeof UpdateContactRoutingDataRequest$ === "object");
assert(typeof UpdateContactRoutingDataResponse$ === "object");
assert(typeof UpdateContactScheduleRequest$ === "object");
assert(typeof UpdateContactScheduleResponse$ === "object");
assert(typeof UpdateDataTableAttributeRequest$ === "object");
assert(typeof UpdateDataTableAttributeResponse$ === "object");
assert(typeof UpdateDataTableMetadataRequest$ === "object");
assert(typeof UpdateDataTableMetadataResponse$ === "object");
assert(typeof UpdateDataTablePrimaryValuesRequest$ === "object");
assert(typeof UpdateDataTablePrimaryValuesResponse$ === "object");
assert(typeof UpdateEmailAddressMetadataRequest$ === "object");
assert(typeof UpdateEmailAddressMetadataResponse$ === "object");
assert(typeof UpdateEvaluationFormRequest$ === "object");
assert(typeof UpdateEvaluationFormResponse$ === "object");
assert(typeof UpdateHoursOfOperationOverrideRequest$ === "object");
assert(typeof UpdateHoursOfOperationRequest$ === "object");
assert(typeof UpdateInstanceAttributeRequest$ === "object");
assert(typeof UpdateInstanceStorageConfigRequest$ === "object");
assert(typeof UpdateParticipantAuthenticationRequest$ === "object");
assert(typeof UpdateParticipantAuthenticationResponse$ === "object");
assert(typeof UpdateParticipantRoleConfigChannelInfo$ === "object");
assert(typeof UpdateParticipantRoleConfigRequest$ === "object");
assert(typeof UpdateParticipantRoleConfigResponse$ === "object");
assert(typeof UpdatePhoneNumberMetadataRequest$ === "object");
assert(typeof UpdatePhoneNumberRequest$ === "object");
assert(typeof UpdatePhoneNumberResponse$ === "object");
assert(typeof UpdatePredefinedAttributeRequest$ === "object");
assert(typeof UpdatePromptRequest$ === "object");
assert(typeof UpdatePromptResponse$ === "object");
assert(typeof UpdateQueueHoursOfOperationRequest$ === "object");
assert(typeof UpdateQueueMaxContactsRequest$ === "object");
assert(typeof UpdateQueueNameRequest$ === "object");
assert(typeof UpdateQueueOutboundCallerConfigRequest$ === "object");
assert(typeof UpdateQueueOutboundEmailConfigRequest$ === "object");
assert(typeof UpdateQueueStatusRequest$ === "object");
assert(typeof UpdateQuickConnectConfigRequest$ === "object");
assert(typeof UpdateQuickConnectNameRequest$ === "object");
assert(typeof UpdateRoutingProfileAgentAvailabilityTimerRequest$ === "object");
assert(typeof UpdateRoutingProfileConcurrencyRequest$ === "object");
assert(typeof UpdateRoutingProfileDefaultOutboundQueueRequest$ === "object");
assert(typeof UpdateRoutingProfileNameRequest$ === "object");
assert(typeof UpdateRoutingProfileQueuesRequest$ === "object");
assert(typeof UpdateRuleRequest$ === "object");
assert(typeof UpdateSecurityProfileRequest$ === "object");
assert(typeof UpdateTaskTemplateRequest$ === "object");
assert(typeof UpdateTaskTemplateResponse$ === "object");
assert(typeof UpdateTrafficDistributionRequest$ === "object");
assert(typeof UpdateTrafficDistributionResponse$ === "object");
assert(typeof UpdateUserHierarchyGroupNameRequest$ === "object");
assert(typeof UpdateUserHierarchyRequest$ === "object");
assert(typeof UpdateUserHierarchyStructureRequest$ === "object");
assert(typeof UpdateUserIdentityInfoRequest$ === "object");
assert(typeof UpdateUserPhoneConfigRequest$ === "object");
assert(typeof UpdateUserProficienciesRequest$ === "object");
assert(typeof UpdateUserRoutingProfileRequest$ === "object");
assert(typeof UpdateUserSecurityProfilesRequest$ === "object");
assert(typeof UpdateViewContentRequest$ === "object");
assert(typeof UpdateViewContentResponse$ === "object");
assert(typeof UpdateViewMetadataRequest$ === "object");
assert(typeof UpdateViewMetadataResponse$ === "object");
assert(typeof UpdateWorkspaceMetadataRequest$ === "object");
assert(typeof UpdateWorkspaceMetadataResponse$ === "object");
assert(typeof UpdateWorkspacePageRequest$ === "object");
assert(typeof UpdateWorkspacePageResponse$ === "object");
assert(typeof UpdateWorkspaceThemeRequest$ === "object");
assert(typeof UpdateWorkspaceThemeResponse$ === "object");
assert(typeof UpdateWorkspaceVisibilityRequest$ === "object");
assert(typeof UpdateWorkspaceVisibilityResponse$ === "object");
assert(typeof UploadUrlMetadata$ === "object");
assert(typeof UrlReference$ === "object");
assert(typeof UseCase$ === "object");
assert(typeof User$ === "object");
assert(typeof UserData$ === "object");
assert(typeof UserDataFilters$ === "object");
assert(typeof UserHierarchyGroupSearchCriteria$ === "object");
assert(typeof UserHierarchyGroupSearchFilter$ === "object");
assert(typeof UserIdentityInfo$ === "object");
assert(typeof UserIdentityInfoLite$ === "object");
assert(typeof UserInfo$ === "object");
assert(typeof UserPhoneConfig$ === "object");
assert(typeof UserProficiency$ === "object");
assert(typeof UserProficiencyDisassociate$ === "object");
assert(typeof UserQuickConnectConfig$ === "object");
assert(typeof UserReference$ === "object");
assert(typeof UserSearchCriteria$ === "object");
assert(typeof UserSearchFilter$ === "object");
assert(typeof UserSearchSummary$ === "object");
assert(typeof UserSummary$ === "object");
assert(typeof Validation$ === "object");
assert(typeof ValidationEnum$ === "object");
assert(typeof View$ === "object");
assert(typeof ViewContent$ === "object");
assert(typeof ViewInputContent$ === "object");
assert(typeof ViewSearchCriteria$ === "object");
assert(typeof ViewSearchFilter$ === "object");
assert(typeof ViewSummary$ === "object");
assert(typeof ViewVersionSummary$ === "object");
assert(typeof Vocabulary$ === "object");
assert(typeof VocabularySummary$ === "object");
assert(typeof VoiceRecordingConfiguration$ === "object");
assert(typeof WisdomInfo$ === "object");
assert(typeof Workspace$ === "object");
assert(typeof WorkspaceAssociationSearchCriteria$ === "object");
assert(typeof WorkspaceAssociationSearchFilter$ === "object");
assert(typeof WorkspaceAssociationSearchSummary$ === "object");
assert(typeof WorkspacePage$ === "object");
assert(typeof WorkspaceSearchCriteria$ === "object");
assert(typeof WorkspaceSearchFilter$ === "object");
assert(typeof WorkspaceSearchSummary$ === "object");
assert(typeof WorkspaceSummary$ === "object");
assert(typeof WorkspaceTheme$ === "object");
assert(typeof WorkspaceThemeConfig$ === "object");
assert(typeof WorkspaceThemeImages$ === "object");
assert(typeof WorkspaceThemePalette$ === "object");
assert(typeof WorkspaceThemeTypography$ === "object");
// enums
assert(typeof AccessType === "object");
assert(typeof ActionType === "object");
assert(typeof AgentAvailabilityTimer === "object");
assert(typeof AgentStatusState === "object");
assert(typeof AgentStatusType === "object");
assert(typeof AiUseCase === "object");
assert(typeof AllowedUserAction === "object");
assert(typeof AnsweringMachineDetectionStatus === "object");
assert(typeof ApplicationType === "object");
assert(typeof ArtifactStatus === "object");
assert(typeof AttachedFileInvalidRequestExceptionReason === "object");
assert(typeof AttachedFileServiceQuotaExceededExceptionReason === "object");
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
assert(typeof ContactInteractionType === "object");
assert(typeof ContactMediaProcessingFailureMode === "object");
assert(typeof ContactMetricName === "object");
assert(typeof ContactParticipantRole === "object");
assert(typeof ContactRecordingType === "object");
assert(typeof ContactState === "object");
assert(typeof CurrentMetricName === "object");
assert(typeof DataTableAttributeValueType === "object");
assert(typeof DataTableLockLevel === "object");
assert(typeof DataTableStatus === "object");
assert(typeof DateComparisonType === "object");
assert(typeof DateTimeComparisonType === "object");
assert(typeof DecimalComparisonType === "object");
assert(typeof DeviceType === "object");
assert(typeof DirectoryType === "object");
assert(typeof DisconnectOnCustomerExitParticipantType === "object");
assert(typeof EmailHeaderType === "object");
assert(typeof EncryptionType === "object");
assert(typeof EndpointType === "object");
assert(typeof EntityType === "object");
assert(typeof EvaluationFormItemEnablementAction === "object");
assert(typeof EvaluationFormItemEnablementOperator === "object");
assert(typeof EvaluationFormItemEnablementSourceType === "object");
assert(typeof EvaluationFormItemEnablementSourceValueType === "object");
assert(typeof EvaluationFormItemSourceValuesComparator === "object");
assert(typeof EvaluationFormLanguageCode === "object");
assert(typeof EvaluationFormMultiSelectQuestionDisplayMode === "object");
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
assert(typeof FilterV2StringConditionComparisonOperator === "object");
assert(typeof FlowAssociationResourceType === "object");
assert(typeof FlowModuleType === "object");
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
assert(typeof MediaType === "object");
assert(typeof MeetingFeatureStatus === "object");
assert(typeof MonitorCapability === "object");
assert(typeof MultiSelectQuestionRuleCategoryAutomationCondition === "object");
assert(typeof NextContactType === "object");
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
assert(typeof PropertyValidationExceptionReason === "object");
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
assert(typeof ResourceType === "object");
assert(typeof ResponseMode === "object");
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
assert(typeof Visibility === "object");
assert(typeof VocabularyLanguageCode === "object");
assert(typeof VocabularyState === "object");
assert(typeof VoiceRecordingTrack === "object");
assert(typeof WorkspaceFontFamily === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConditionalOperationFailedException.prototype instanceof ConnectServiceException);
assert(typeof ConditionalOperationFailedException$ === "object");
assert(ConflictException.prototype instanceof ConnectServiceException);
assert(typeof ConflictException$ === "object");
assert(ContactFlowNotPublishedException.prototype instanceof ConnectServiceException);
assert(typeof ContactFlowNotPublishedException$ === "object");
assert(ContactNotFoundException.prototype instanceof ConnectServiceException);
assert(typeof ContactNotFoundException$ === "object");
assert(DestinationNotAllowedException.prototype instanceof ConnectServiceException);
assert(typeof DestinationNotAllowedException$ === "object");
assert(DuplicateResourceException.prototype instanceof ConnectServiceException);
assert(typeof DuplicateResourceException$ === "object");
assert(IdempotencyException.prototype instanceof ConnectServiceException);
assert(typeof IdempotencyException$ === "object");
assert(InternalServiceException.prototype instanceof ConnectServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidActiveRegionException.prototype instanceof ConnectServiceException);
assert(typeof InvalidActiveRegionException$ === "object");
assert(InvalidContactFlowException.prototype instanceof ConnectServiceException);
assert(typeof InvalidContactFlowException$ === "object");
assert(InvalidContactFlowModuleException.prototype instanceof ConnectServiceException);
assert(typeof InvalidContactFlowModuleException$ === "object");
assert(InvalidParameterException.prototype instanceof ConnectServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidRequestException.prototype instanceof ConnectServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof ConnectServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MaximumResultReturnedException.prototype instanceof ConnectServiceException);
assert(typeof MaximumResultReturnedException$ === "object");
assert(OutboundContactNotPermittedException.prototype instanceof ConnectServiceException);
assert(typeof OutboundContactNotPermittedException$ === "object");
assert(OutputTypeNotFoundException.prototype instanceof ConnectServiceException);
assert(typeof OutputTypeNotFoundException$ === "object");
assert(PropertyValidationException.prototype instanceof ConnectServiceException);
assert(typeof PropertyValidationException$ === "object");
assert(ResourceConflictException.prototype instanceof ConnectServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceInUseException.prototype instanceof ConnectServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceNotReadyException.prototype instanceof ConnectServiceException);
assert(typeof ResourceNotReadyException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyRequestsException.prototype instanceof ConnectServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UserNotFoundException.prototype instanceof ConnectServiceException);
assert(typeof UserNotFoundException$ === "object");
assert(ConnectServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateEvaluateDataTableValues === "function");
assert(typeof paginateGetCurrentMetricData === "function");
assert(typeof paginateGetCurrentUserData === "function");
assert(typeof paginateGetMetricData === "function");
assert(typeof paginateGetMetricDataV2 === "function");
assert(typeof paginateListAgentStatuses === "function");
assert(typeof paginateListApprovedOrigins === "function");
assert(typeof paginateListAuthenticationProfiles === "function");
assert(typeof paginateListBots === "function");
assert(typeof paginateListContactEvaluations === "function");
assert(typeof paginateListContactFlowModuleAliases === "function");
assert(typeof paginateListContactFlowModuleVersions === "function");
assert(typeof paginateListContactFlowModules === "function");
assert(typeof paginateListContactFlowVersions === "function");
assert(typeof paginateListContactFlows === "function");
assert(typeof paginateListContactReferences === "function");
assert(typeof paginateListDataTableAttributes === "function");
assert(typeof paginateListDataTablePrimaryValues === "function");
assert(typeof paginateListDataTableValues === "function");
assert(typeof paginateListDataTables === "function");
assert(typeof paginateListDefaultVocabularies === "function");
assert(typeof paginateListEvaluationFormVersions === "function");
assert(typeof paginateListEvaluationForms === "function");
assert(typeof paginateListFlowAssociations === "function");
assert(typeof paginateListHoursOfOperationOverrides === "function");
assert(typeof paginateListHoursOfOperations === "function");
assert(typeof paginateListInstanceAttributes === "function");
assert(typeof paginateListInstanceStorageConfigs === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListIntegrationAssociations === "function");
assert(typeof paginateListLambdaFunctions === "function");
assert(typeof paginateListLexBots === "function");
assert(typeof paginateListPhoneNumbers === "function");
assert(typeof paginateListPhoneNumbersV2 === "function");
assert(typeof paginateListPredefinedAttributes === "function");
assert(typeof paginateListPrompts === "function");
assert(typeof paginateListQueueQuickConnects === "function");
assert(typeof paginateListQueues === "function");
assert(typeof paginateListQuickConnects === "function");
assert(typeof paginateListRealtimeContactAnalysisSegmentsV2 === "function");
assert(typeof paginateListRoutingProfileManualAssignmentQueues === "function");
assert(typeof paginateListRoutingProfileQueues === "function");
assert(typeof paginateListRoutingProfiles === "function");
assert(typeof paginateListRules === "function");
assert(typeof paginateListSecurityKeys === "function");
assert(typeof paginateListSecurityProfileApplications === "function");
assert(typeof paginateListSecurityProfilePermissions === "function");
assert(typeof paginateListSecurityProfiles === "function");
assert(typeof paginateListTaskTemplates === "function");
assert(typeof paginateListTrafficDistributionGroupUsers === "function");
assert(typeof paginateListTrafficDistributionGroups === "function");
assert(typeof paginateListUseCases === "function");
assert(typeof paginateListUserHierarchyGroups === "function");
assert(typeof paginateListUserProficiencies === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateListViewVersions === "function");
assert(typeof paginateListViews === "function");
assert(typeof paginateListWorkspacePages === "function");
assert(typeof paginateListWorkspaces === "function");
assert(typeof paginateSearchAgentStatuses === "function");
assert(typeof paginateSearchAvailablePhoneNumbers === "function");
assert(typeof paginateSearchContactFlowModules === "function");
assert(typeof paginateSearchContactFlows === "function");
assert(typeof paginateSearchContacts === "function");
assert(typeof paginateSearchDataTables === "function");
assert(typeof paginateSearchHoursOfOperationOverrides === "function");
assert(typeof paginateSearchHoursOfOperations === "function");
assert(typeof paginateSearchPredefinedAttributes === "function");
assert(typeof paginateSearchPrompts === "function");
assert(typeof paginateSearchQueues === "function");
assert(typeof paginateSearchQuickConnects === "function");
assert(typeof paginateSearchResourceTags === "function");
assert(typeof paginateSearchRoutingProfiles === "function");
assert(typeof paginateSearchSecurityProfiles === "function");
assert(typeof paginateSearchUserHierarchyGroups === "function");
assert(typeof paginateSearchUsers === "function");
assert(typeof paginateSearchViews === "function");
assert(typeof paginateSearchVocabularies === "function");
assert(typeof paginateSearchWorkspaceAssociations === "function");
assert(typeof paginateSearchWorkspaces === "function");
console.log(`Connect index test passed.`);
