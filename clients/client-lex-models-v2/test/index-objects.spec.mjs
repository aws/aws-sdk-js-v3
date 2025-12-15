import {
  ActiveContext$,
  AdvancedRecognitionSetting$,
  AgentTurnResult$,
  AgentTurnSpecification$,
  AggregatedUtterancesFilter$,
  AggregatedUtterancesFilterName,
  AggregatedUtterancesFilterOperator,
  AggregatedUtterancesSortAttribute,
  AggregatedUtterancesSortBy$,
  AggregatedUtterancesSummary$,
  AllowedInputTypes$,
  AnalyticsBinByName,
  AnalyticsBinBySpecification$,
  AnalyticsBinKey$,
  AnalyticsCommonFilterName,
  AnalyticsFilterOperator,
  AnalyticsIntentField,
  AnalyticsIntentFilter$,
  AnalyticsIntentFilterName,
  AnalyticsIntentGroupByKey$,
  AnalyticsIntentGroupBySpecification$,
  AnalyticsIntentMetric$,
  AnalyticsIntentMetricName,
  AnalyticsIntentMetricResult$,
  AnalyticsIntentNodeSummary$,
  AnalyticsIntentResult$,
  AnalyticsIntentStageField,
  AnalyticsIntentStageFilter$,
  AnalyticsIntentStageFilterName,
  AnalyticsIntentStageGroupByKey$,
  AnalyticsIntentStageGroupBySpecification$,
  AnalyticsIntentStageMetric$,
  AnalyticsIntentStageMetricName,
  AnalyticsIntentStageMetricResult$,
  AnalyticsIntentStageResult$,
  AnalyticsInterval,
  AnalyticsMetricStatistic,
  AnalyticsModality,
  AnalyticsNodeType,
  AnalyticsPathFilter$,
  AnalyticsSessionField,
  AnalyticsSessionFilter$,
  AnalyticsSessionFilterName,
  AnalyticsSessionGroupByKey$,
  AnalyticsSessionGroupBySpecification$,
  AnalyticsSessionMetric$,
  AnalyticsSessionMetricName,
  AnalyticsSessionMetricResult$,
  AnalyticsSessionResult$,
  AnalyticsSessionSortByName,
  AnalyticsSortOrder,
  AnalyticsUtteranceAttribute$,
  AnalyticsUtteranceAttributeName,
  AnalyticsUtteranceAttributeResult$,
  AnalyticsUtteranceField,
  AnalyticsUtteranceFilter$,
  AnalyticsUtteranceFilterName,
  AnalyticsUtteranceGroupByKey$,
  AnalyticsUtteranceGroupBySpecification$,
  AnalyticsUtteranceMetric$,
  AnalyticsUtteranceMetricName,
  AnalyticsUtteranceMetricResult$,
  AnalyticsUtteranceResult$,
  AnalyticsUtteranceSortByName,
  AssistedNluMode,
  AssociatedTranscript$,
  AssociatedTranscriptFilter$,
  AssociatedTranscriptFilterName,
  AudioAndDTMFInputSpecification$,
  AudioLogDestination$,
  AudioLogSetting$,
  AudioRecognitionStrategy,
  AudioSpecification$,
  BatchCreateCustomVocabularyItem$,
  BatchCreateCustomVocabularyItemCommand,
  BatchCreateCustomVocabularyItemRequest$,
  BatchCreateCustomVocabularyItemResponse$,
  BatchDeleteCustomVocabularyItem$,
  BatchDeleteCustomVocabularyItemCommand,
  BatchDeleteCustomVocabularyItemRequest$,
  BatchDeleteCustomVocabularyItemResponse$,
  BatchUpdateCustomVocabularyItem$,
  BatchUpdateCustomVocabularyItemCommand,
  BatchUpdateCustomVocabularyItemRequest$,
  BatchUpdateCustomVocabularyItemResponse$,
  BedrockGuardrailConfiguration$,
  BedrockKnowledgeStoreConfiguration$,
  BedrockKnowledgeStoreExactResponseFields$,
  BedrockModelSpecification$,
  BedrockTraceStatus,
  BotAliasHistoryEvent$,
  BotAliasLocaleSettings$,
  BotAliasReplicaSummary$,
  BotAliasReplicationStatus,
  BotAliasStatus,
  BotAliasSummary$,
  BotAliasTestExecutionTarget$,
  BotExportSpecification$,
  BotFilter$,
  BotFilterName,
  BotFilterOperator,
  BotImportSpecification$,
  BotLocaleExportSpecification$,
  BotLocaleFilter$,
  BotLocaleFilterName,
  BotLocaleFilterOperator,
  BotLocaleHistoryEvent$,
  BotLocaleImportSpecification$,
  BotLocaleSortAttribute,
  BotLocaleSortBy$,
  BotLocaleStatus,
  BotLocaleSummary$,
  BotMember$,
  BotRecommendationResultStatistics$,
  BotRecommendationResults$,
  BotRecommendationStatus,
  BotRecommendationSummary$,
  BotReplicaStatus,
  BotReplicaSummary$,
  BotSortAttribute,
  BotSortBy$,
  BotStatus,
  BotSummary$,
  BotType,
  BotVersionLocaleDetails$,
  BotVersionReplicaSortAttribute,
  BotVersionReplicaSortBy$,
  BotVersionReplicaSummary$,
  BotVersionReplicationStatus,
  BotVersionSortAttribute,
  BotVersionSortBy$,
  BotVersionSummary$,
  BuildBotLocale$,
  BuildBotLocaleCommand,
  BuildBotLocaleRequest$,
  BuildBotLocaleResponse$,
  BuildtimeSettings$,
  BuiltInIntentSortAttribute,
  BuiltInIntentSortBy$,
  BuiltInIntentSummary$,
  BuiltInSlotTypeSortAttribute,
  BuiltInSlotTypeSortBy$,
  BuiltInSlotTypeSummary$,
  Button$,
  CloudWatchLogGroupLogDestination$,
  CodeHookSpecification$,
  CompositeSlotTypeSetting$,
  Condition$,
  ConditionalBranch$,
  ConditionalSpecification$,
  ConflictException,
  ConflictException$,
  ConversationEndState,
  ConversationLevelIntentClassificationResultItem$,
  ConversationLevelResultDetail$,
  ConversationLevelSlotResolutionResultItem$,
  ConversationLevelTestResultItem$,
  ConversationLevelTestResults$,
  ConversationLevelTestResultsFilterBy$,
  ConversationLogSettings$,
  ConversationLogsDataSource$,
  ConversationLogsDataSourceFilterBy$,
  ConversationLogsInputModeFilter,
  CreateBot$,
  CreateBotAlias$,
  CreateBotAliasCommand,
  CreateBotAliasRequest$,
  CreateBotAliasResponse$,
  CreateBotCommand,
  CreateBotLocale$,
  CreateBotLocaleCommand,
  CreateBotLocaleRequest$,
  CreateBotLocaleResponse$,
  CreateBotReplica$,
  CreateBotReplicaCommand,
  CreateBotReplicaRequest$,
  CreateBotReplicaResponse$,
  CreateBotRequest$,
  CreateBotResponse$,
  CreateBotVersion$,
  CreateBotVersionCommand,
  CreateBotVersionRequest$,
  CreateBotVersionResponse$,
  CreateExport$,
  CreateExportCommand,
  CreateExportRequest$,
  CreateExportResponse$,
  CreateIntent$,
  CreateIntentCommand,
  CreateIntentRequest$,
  CreateIntentResponse$,
  CreateResourcePolicy$,
  CreateResourcePolicyCommand,
  CreateResourcePolicyRequest$,
  CreateResourcePolicyResponse$,
  CreateResourcePolicyStatement$,
  CreateResourcePolicyStatementCommand,
  CreateResourcePolicyStatementRequest$,
  CreateResourcePolicyStatementResponse$,
  CreateSlot$,
  CreateSlotCommand,
  CreateSlotRequest$,
  CreateSlotResponse$,
  CreateSlotType$,
  CreateSlotTypeCommand,
  CreateSlotTypeRequest$,
  CreateSlotTypeResponse$,
  CreateTestSetDiscrepancyReport$,
  CreateTestSetDiscrepancyReportCommand,
  CreateTestSetDiscrepancyReportRequest$,
  CreateTestSetDiscrepancyReportResponse$,
  CreateUploadUrl$,
  CreateUploadUrlCommand,
  CreateUploadUrlRequest$,
  CreateUploadUrlResponse$,
  CustomPayload$,
  CustomVocabularyEntryId$,
  CustomVocabularyExportSpecification$,
  CustomVocabularyImportSpecification$,
  CustomVocabularyItem$,
  CustomVocabularyStatus,
  DTMFSpecification$,
  DataPrivacy$,
  DataSourceConfiguration$,
  DateRangeFilter$,
  DeepgramSpeechModelConfig$,
  DefaultConditionalBranch$,
  DeleteBot$,
  DeleteBotAlias$,
  DeleteBotAliasCommand,
  DeleteBotAliasRequest$,
  DeleteBotAliasResponse$,
  DeleteBotCommand,
  DeleteBotLocale$,
  DeleteBotLocaleCommand,
  DeleteBotLocaleRequest$,
  DeleteBotLocaleResponse$,
  DeleteBotReplica$,
  DeleteBotReplicaCommand,
  DeleteBotReplicaRequest$,
  DeleteBotReplicaResponse$,
  DeleteBotRequest$,
  DeleteBotResponse$,
  DeleteBotVersion$,
  DeleteBotVersionCommand,
  DeleteBotVersionRequest$,
  DeleteBotVersionResponse$,
  DeleteCustomVocabulary$,
  DeleteCustomVocabularyCommand,
  DeleteCustomVocabularyRequest$,
  DeleteCustomVocabularyResponse$,
  DeleteExport$,
  DeleteExportCommand,
  DeleteExportRequest$,
  DeleteExportResponse$,
  DeleteImport$,
  DeleteImportCommand,
  DeleteImportRequest$,
  DeleteImportResponse$,
  DeleteIntent$,
  DeleteIntentCommand,
  DeleteIntentRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteResourcePolicyStatement$,
  DeleteResourcePolicyStatementCommand,
  DeleteResourcePolicyStatementRequest$,
  DeleteResourcePolicyStatementResponse$,
  DeleteSlot$,
  DeleteSlotCommand,
  DeleteSlotRequest$,
  DeleteSlotType$,
  DeleteSlotTypeCommand,
  DeleteSlotTypeRequest$,
  DeleteTestSet$,
  DeleteTestSetCommand,
  DeleteTestSetRequest$,
  DeleteUtterances$,
  DeleteUtterancesCommand,
  DeleteUtterancesRequest$,
  DeleteUtterancesResponse$,
  DescribeBot$,
  DescribeBotAlias$,
  DescribeBotAliasCommand,
  DescribeBotAliasRequest$,
  DescribeBotAliasResponse$,
  DescribeBotCommand,
  DescribeBotLocale$,
  DescribeBotLocaleCommand,
  DescribeBotLocaleRequest$,
  DescribeBotLocaleResponse$,
  DescribeBotRecommendation$,
  DescribeBotRecommendationCommand,
  DescribeBotRecommendationRequest$,
  DescribeBotRecommendationResponse$,
  DescribeBotReplica$,
  DescribeBotReplicaCommand,
  DescribeBotReplicaRequest$,
  DescribeBotReplicaResponse$,
  DescribeBotRequest$,
  DescribeBotResourceGeneration$,
  DescribeBotResourceGenerationCommand,
  DescribeBotResourceGenerationRequest$,
  DescribeBotResourceGenerationResponse$,
  DescribeBotResponse$,
  DescribeBotVersion$,
  DescribeBotVersionCommand,
  DescribeBotVersionRequest$,
  DescribeBotVersionResponse$,
  DescribeCustomVocabularyMetadata$,
  DescribeCustomVocabularyMetadataCommand,
  DescribeCustomVocabularyMetadataRequest$,
  DescribeCustomVocabularyMetadataResponse$,
  DescribeExport$,
  DescribeExportCommand,
  DescribeExportRequest$,
  DescribeExportResponse$,
  DescribeImport$,
  DescribeImportCommand,
  DescribeImportRequest$,
  DescribeImportResponse$,
  DescribeIntent$,
  DescribeIntentCommand,
  DescribeIntentRequest$,
  DescribeIntentResponse$,
  DescribeResourcePolicy$,
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyRequest$,
  DescribeResourcePolicyResponse$,
  DescribeSlot$,
  DescribeSlotCommand,
  DescribeSlotRequest$,
  DescribeSlotResponse$,
  DescribeSlotType$,
  DescribeSlotTypeCommand,
  DescribeSlotTypeRequest$,
  DescribeSlotTypeResponse$,
  DescribeTestExecution$,
  DescribeTestExecutionCommand,
  DescribeTestExecutionRequest$,
  DescribeTestExecutionResponse$,
  DescribeTestSet$,
  DescribeTestSetCommand,
  DescribeTestSetDiscrepancyReport$,
  DescribeTestSetDiscrepancyReportCommand,
  DescribeTestSetDiscrepancyReportRequest$,
  DescribeTestSetDiscrepancyReportResponse$,
  DescribeTestSetGeneration$,
  DescribeTestSetGenerationCommand,
  DescribeTestSetGenerationRequest$,
  DescribeTestSetGenerationResponse$,
  DescribeTestSetRequest$,
  DescribeTestSetResponse$,
  DescriptiveBotBuilderSpecification$,
  DialogAction$,
  DialogActionType,
  DialogCodeHookInvocationSetting$,
  DialogCodeHookSettings$,
  DialogState$,
  Effect,
  ElicitationCodeHookInvocationSetting$,
  EncryptionSetting$,
  ErrorCode,
  ErrorLogSettings$,
  ExactResponseFields$,
  ExecutionErrorDetails$,
  ExportFilter$,
  ExportFilterName,
  ExportFilterOperator,
  ExportResourceSpecification$,
  ExportSortAttribute,
  ExportSortBy$,
  ExportStatus,
  ExportSummary$,
  ExternalSourceSetting$,
  FailedCustomVocabularyItem$,
  FulfillmentCodeHookSettings$,
  FulfillmentStartResponseSpecification$,
  FulfillmentUpdateResponseSpecification$,
  FulfillmentUpdatesSpecification$,
  GenerateBotElement$,
  GenerateBotElementCommand,
  GenerateBotElementRequest$,
  GenerateBotElementResponse$,
  GenerationSortBy$,
  GenerationSortByAttribute,
  GenerationStatus,
  GenerationSummary$,
  GenerativeAISettings$,
  GetTestExecutionArtifactsUrl$,
  GetTestExecutionArtifactsUrlCommand,
  GetTestExecutionArtifactsUrlRequest$,
  GetTestExecutionArtifactsUrlResponse$,
  GrammarSlotTypeSetting$,
  GrammarSlotTypeSource$,
  ImageResponseCard$,
  ImportExportFileFormat,
  ImportFilter$,
  ImportFilterName,
  ImportFilterOperator,
  ImportResourceSpecification$,
  ImportResourceType,
  ImportSortAttribute,
  ImportSortBy$,
  ImportStatus,
  ImportSummary$,
  InitialResponseSetting$,
  InputContext$,
  InputSessionStateSpecification$,
  IntentClassificationTestResultItem$,
  IntentClassificationTestResultItemCounts$,
  IntentClassificationTestResults$,
  IntentClosingSetting$,
  IntentConfirmationSetting$,
  IntentDisambiguationSettings$,
  IntentFilter$,
  IntentFilterName,
  IntentFilterOperator,
  IntentLevelSlotResolutionTestResultItem$,
  IntentLevelSlotResolutionTestResults$,
  IntentOverride$,
  IntentSortAttribute,
  IntentSortBy$,
  IntentState,
  IntentStatistics$,
  IntentSummary$,
  InternalServerException,
  InternalServerException$,
  InvokedIntentSample$,
  KendraConfiguration$,
  LambdaCodeHook$,
  LexModelsV2,
  LexModelsV2Client,
  LexModelsV2ServiceException,
  LexTranscriptFilter$,
  ListAggregatedUtterances$,
  ListAggregatedUtterancesCommand,
  ListAggregatedUtterancesRequest$,
  ListAggregatedUtterancesResponse$,
  ListBotAliasReplicas$,
  ListBotAliasReplicasCommand,
  ListBotAliasReplicasRequest$,
  ListBotAliasReplicasResponse$,
  ListBotAliases$,
  ListBotAliasesCommand,
  ListBotAliasesRequest$,
  ListBotAliasesResponse$,
  ListBotLocales$,
  ListBotLocalesCommand,
  ListBotLocalesRequest$,
  ListBotLocalesResponse$,
  ListBotRecommendations$,
  ListBotRecommendationsCommand,
  ListBotRecommendationsRequest$,
  ListBotRecommendationsResponse$,
  ListBotReplicas$,
  ListBotReplicasCommand,
  ListBotReplicasRequest$,
  ListBotReplicasResponse$,
  ListBotResourceGenerations$,
  ListBotResourceGenerationsCommand,
  ListBotResourceGenerationsRequest$,
  ListBotResourceGenerationsResponse$,
  ListBotVersionReplicas$,
  ListBotVersionReplicasCommand,
  ListBotVersionReplicasRequest$,
  ListBotVersionReplicasResponse$,
  ListBotVersions$,
  ListBotVersionsCommand,
  ListBotVersionsRequest$,
  ListBotVersionsResponse$,
  ListBots$,
  ListBotsCommand,
  ListBotsRequest$,
  ListBotsResponse$,
  ListBuiltInIntents$,
  ListBuiltInIntentsCommand,
  ListBuiltInIntentsRequest$,
  ListBuiltInIntentsResponse$,
  ListBuiltInSlotTypes$,
  ListBuiltInSlotTypesCommand,
  ListBuiltInSlotTypesRequest$,
  ListBuiltInSlotTypesResponse$,
  ListCustomVocabularyItems$,
  ListCustomVocabularyItemsCommand,
  ListCustomVocabularyItemsRequest$,
  ListCustomVocabularyItemsResponse$,
  ListExports$,
  ListExportsCommand,
  ListExportsRequest$,
  ListExportsResponse$,
  ListImports$,
  ListImportsCommand,
  ListImportsRequest$,
  ListImportsResponse$,
  ListIntentMetrics$,
  ListIntentMetricsCommand,
  ListIntentMetricsRequest$,
  ListIntentMetricsResponse$,
  ListIntentPaths$,
  ListIntentPathsCommand,
  ListIntentPathsRequest$,
  ListIntentPathsResponse$,
  ListIntentStageMetrics$,
  ListIntentStageMetricsCommand,
  ListIntentStageMetricsRequest$,
  ListIntentStageMetricsResponse$,
  ListIntents$,
  ListIntentsCommand,
  ListIntentsRequest$,
  ListIntentsResponse$,
  ListRecommendedIntents$,
  ListRecommendedIntentsCommand,
  ListRecommendedIntentsRequest$,
  ListRecommendedIntentsResponse$,
  ListSessionAnalyticsData$,
  ListSessionAnalyticsDataCommand,
  ListSessionAnalyticsDataRequest$,
  ListSessionAnalyticsDataResponse$,
  ListSessionMetrics$,
  ListSessionMetricsCommand,
  ListSessionMetricsRequest$,
  ListSessionMetricsResponse$,
  ListSlotTypes$,
  ListSlotTypesCommand,
  ListSlotTypesRequest$,
  ListSlotTypesResponse$,
  ListSlots$,
  ListSlotsCommand,
  ListSlotsRequest$,
  ListSlotsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTestExecutionResultItems$,
  ListTestExecutionResultItemsCommand,
  ListTestExecutionResultItemsRequest$,
  ListTestExecutionResultItemsResponse$,
  ListTestExecutions$,
  ListTestExecutionsCommand,
  ListTestExecutionsRequest$,
  ListTestExecutionsResponse$,
  ListTestSetRecords$,
  ListTestSetRecordsCommand,
  ListTestSetRecordsRequest$,
  ListTestSetRecordsResponse$,
  ListTestSets$,
  ListTestSetsCommand,
  ListTestSetsRequest$,
  ListTestSetsResponse$,
  ListUtteranceAnalyticsData$,
  ListUtteranceAnalyticsDataCommand,
  ListUtteranceAnalyticsDataRequest$,
  ListUtteranceAnalyticsDataResponse$,
  ListUtteranceMetrics$,
  ListUtteranceMetricsCommand,
  ListUtteranceMetricsRequest$,
  ListUtteranceMetricsResponse$,
  MergeStrategy,
  Message$,
  MessageGroup$,
  MessageSelectionStrategy,
  MultipleValuesSetting$,
  NewCustomVocabularyItem$,
  NluImprovementSpecification$,
  ObfuscationSetting$,
  ObfuscationSettingType,
  OpensearchConfiguration$,
  OutputContext$,
  OverallTestResultItem$,
  OverallTestResults$,
  ParentBotNetwork$,
  PathFormat$,
  PlainTextMessage$,
  PostDialogCodeHookInvocationSpecification$,
  PostFulfillmentStatusSpecification$,
  PreconditionFailedException,
  PreconditionFailedException$,
  Principal$,
  PromptAttempt,
  PromptAttemptSpecification$,
  PromptSpecification$,
  QInConnectAssistantConfiguration$,
  QInConnectIntentConfiguration$,
  QnAIntentConfiguration$,
  QnAKendraConfiguration$,
  RecommendedIntentSummary$,
  RelativeAggregationDuration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseSpecification$,
  RuntimeHintDetails$,
  RuntimeHintValue$,
  RuntimeHints$,
  RuntimeSettings$,
  S3BucketLogDestination$,
  S3BucketTranscriptSource$,
  SSMLMessage$,
  SampleUtterance$,
  SampleUtteranceGenerationSpecification$,
  SampleValue$,
  SearchAssociatedTranscripts$,
  SearchAssociatedTranscriptsCommand,
  SearchAssociatedTranscriptsRequest$,
  SearchAssociatedTranscriptsResponse$,
  SearchOrder,
  SentimentAnalysisSettings$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionDataSortBy$,
  SessionSpecification$,
  SlotCaptureSetting$,
  SlotConstraint,
  SlotDefaultValue$,
  SlotDefaultValueSpecification$,
  SlotFilter$,
  SlotFilterName,
  SlotFilterOperator,
  SlotPriority$,
  SlotResolutionImprovementSpecification$,
  SlotResolutionSetting$,
  SlotResolutionStrategy,
  SlotResolutionTestResultItem$,
  SlotResolutionTestResultItemCounts$,
  SlotShape,
  SlotSortAttribute,
  SlotSortBy$,
  SlotSummary$,
  SlotTypeCategory,
  SlotTypeFilter$,
  SlotTypeFilterName,
  SlotTypeFilterOperator,
  SlotTypeSortAttribute,
  SlotTypeSortBy$,
  SlotTypeStatistics$,
  SlotTypeSummary$,
  SlotTypeValue$,
  SlotValue$,
  SlotValueElicitationSetting$,
  SlotValueOverride$,
  SlotValueRegexFilter$,
  SlotValueResolutionStrategy,
  SlotValueSelectionSetting$,
  SortOrder,
  Specifications$,
  SpeechDetectionSensitivity,
  SpeechFoundationModel$,
  SpeechModelConfig$,
  SpeechModelPreference,
  SpeechRecognitionSettings$,
  StartBotRecommendation$,
  StartBotRecommendationCommand,
  StartBotRecommendationRequest$,
  StartBotRecommendationResponse$,
  StartBotResourceGeneration$,
  StartBotResourceGenerationCommand,
  StartBotResourceGenerationRequest$,
  StartBotResourceGenerationResponse$,
  StartImport$,
  StartImportCommand,
  StartImportRequest$,
  StartImportResponse$,
  StartTestExecution$,
  StartTestExecutionCommand,
  StartTestExecutionRequest$,
  StartTestExecutionResponse$,
  StartTestSetGeneration$,
  StartTestSetGenerationCommand,
  StartTestSetGenerationRequest$,
  StartTestSetGenerationResponse$,
  StillWaitingResponseSpecification$,
  StopBotRecommendation$,
  StopBotRecommendationCommand,
  StopBotRecommendationRequest$,
  StopBotRecommendationResponse$,
  SubSlotSetting$,
  SubSlotTypeComposition$,
  SubSlotValueElicitationSetting$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TestExecutionApiMode,
  TestExecutionModality,
  TestExecutionResultFilterBy$,
  TestExecutionResultItems$,
  TestExecutionSortAttribute,
  TestExecutionSortBy$,
  TestExecutionStatus,
  TestExecutionSummary$,
  TestExecutionTarget$,
  TestResultMatchStatus,
  TestResultTypeFilter,
  TestSetDiscrepancyErrors$,
  TestSetDiscrepancyReportBotAliasTarget$,
  TestSetDiscrepancyReportResourceTarget$,
  TestSetDiscrepancyReportStatus,
  TestSetExportSpecification$,
  TestSetGenerationDataSource$,
  TestSetGenerationStatus,
  TestSetImportInputLocation$,
  TestSetImportResourceSpecification$,
  TestSetIntentDiscrepancyItem$,
  TestSetModality,
  TestSetSlotDiscrepancyItem$,
  TestSetSortAttribute,
  TestSetSortBy$,
  TestSetStatus,
  TestSetStorageLocation$,
  TestSetSummary$,
  TestSetTurnRecord$,
  TestSetTurnResult$,
  TextInputSpecification$,
  TextLogDestination$,
  TextLogSetting$,
  ThrottlingException,
  ThrottlingException$,
  TimeDimension,
  TranscriptFilter$,
  TranscriptFormat,
  TranscriptSourceSetting$,
  TurnSpecification$,
  UnifiedSpeechSettings$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBot$,
  UpdateBotAlias$,
  UpdateBotAliasCommand,
  UpdateBotAliasRequest$,
  UpdateBotAliasResponse$,
  UpdateBotCommand,
  UpdateBotLocale$,
  UpdateBotLocaleCommand,
  UpdateBotLocaleRequest$,
  UpdateBotLocaleResponse$,
  UpdateBotRecommendation$,
  UpdateBotRecommendationCommand,
  UpdateBotRecommendationRequest$,
  UpdateBotRecommendationResponse$,
  UpdateBotRequest$,
  UpdateBotResponse$,
  UpdateExport$,
  UpdateExportCommand,
  UpdateExportRequest$,
  UpdateExportResponse$,
  UpdateIntent$,
  UpdateIntentCommand,
  UpdateIntentRequest$,
  UpdateIntentResponse$,
  UpdateResourcePolicy$,
  UpdateResourcePolicyCommand,
  UpdateResourcePolicyRequest$,
  UpdateResourcePolicyResponse$,
  UpdateSlot$,
  UpdateSlotCommand,
  UpdateSlotRequest$,
  UpdateSlotResponse$,
  UpdateSlotType$,
  UpdateSlotTypeCommand,
  UpdateSlotTypeRequest$,
  UpdateSlotTypeResponse$,
  UpdateTestSet$,
  UpdateTestSetCommand,
  UpdateTestSetRequest$,
  UpdateTestSetResponse$,
  UserTurnInputSpecification$,
  UserTurnIntentOutput$,
  UserTurnOutputSpecification$,
  UserTurnResult$,
  UserTurnSlotOutput$,
  UserTurnSpecification$,
  UtteranceAggregationDuration$,
  UtteranceAudioInputSpecification$,
  UtteranceBotResponse$,
  UtteranceContentType,
  UtteranceDataSortBy$,
  UtteranceInputSpecification$,
  UtteranceLevelTestResultItem$,
  UtteranceLevelTestResults$,
  UtteranceSpecification$,
  ValidationException,
  ValidationException$,
  VoiceEngine,
  VoiceSettings$,
  WaitAndContinueSpecification$,
  paginateListAggregatedUtterances,
  paginateListBotAliasReplicas,
  paginateListBotAliases,
  paginateListBotLocales,
  paginateListBotRecommendations,
  paginateListBotResourceGenerations,
  paginateListBotVersionReplicas,
  paginateListBotVersions,
  paginateListBots,
  paginateListBuiltInIntents,
  paginateListBuiltInSlotTypes,
  paginateListCustomVocabularyItems,
  paginateListExports,
  paginateListImports,
  paginateListIntentMetrics,
  paginateListIntentStageMetrics,
  paginateListIntents,
  paginateListRecommendedIntents,
  paginateListSessionAnalyticsData,
  paginateListSessionMetrics,
  paginateListSlotTypes,
  paginateListSlots,
  paginateListTestExecutionResultItems,
  paginateListTestExecutions,
  paginateListTestSetRecords,
  paginateListTestSets,
  paginateListUtteranceAnalyticsData,
  paginateListUtteranceMetrics,
  waitForBotAliasAvailable,
  waitForBotAvailable,
  waitForBotExportCompleted,
  waitForBotImportCompleted,
  waitForBotLocaleBuilt,
  waitForBotLocaleCreated,
  waitForBotLocaleExpressTestingAvailable,
  waitForBotVersionAvailable,
  waitUntilBotAliasAvailable,
  waitUntilBotAvailable,
  waitUntilBotExportCompleted,
  waitUntilBotImportCompleted,
  waitUntilBotLocaleBuilt,
  waitUntilBotLocaleCreated,
  waitUntilBotLocaleExpressTestingAvailable,
  waitUntilBotVersionAvailable,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexModelsV2Client === "function");
assert(typeof LexModelsV2 === "function");
// commands
assert(typeof BatchCreateCustomVocabularyItemCommand === "function");
assert(typeof BatchCreateCustomVocabularyItem$ === "object");
assert(typeof BatchDeleteCustomVocabularyItemCommand === "function");
assert(typeof BatchDeleteCustomVocabularyItem$ === "object");
assert(typeof BatchUpdateCustomVocabularyItemCommand === "function");
assert(typeof BatchUpdateCustomVocabularyItem$ === "object");
assert(typeof BuildBotLocaleCommand === "function");
assert(typeof BuildBotLocale$ === "object");
assert(typeof CreateBotCommand === "function");
assert(typeof CreateBot$ === "object");
assert(typeof CreateBotAliasCommand === "function");
assert(typeof CreateBotAlias$ === "object");
assert(typeof CreateBotLocaleCommand === "function");
assert(typeof CreateBotLocale$ === "object");
assert(typeof CreateBotReplicaCommand === "function");
assert(typeof CreateBotReplica$ === "object");
assert(typeof CreateBotVersionCommand === "function");
assert(typeof CreateBotVersion$ === "object");
assert(typeof CreateExportCommand === "function");
assert(typeof CreateExport$ === "object");
assert(typeof CreateIntentCommand === "function");
assert(typeof CreateIntent$ === "object");
assert(typeof CreateResourcePolicyCommand === "function");
assert(typeof CreateResourcePolicy$ === "object");
assert(typeof CreateResourcePolicyStatementCommand === "function");
assert(typeof CreateResourcePolicyStatement$ === "object");
assert(typeof CreateSlotCommand === "function");
assert(typeof CreateSlot$ === "object");
assert(typeof CreateSlotTypeCommand === "function");
assert(typeof CreateSlotType$ === "object");
assert(typeof CreateTestSetDiscrepancyReportCommand === "function");
assert(typeof CreateTestSetDiscrepancyReport$ === "object");
assert(typeof CreateUploadUrlCommand === "function");
assert(typeof CreateUploadUrl$ === "object");
assert(typeof DeleteBotCommand === "function");
assert(typeof DeleteBot$ === "object");
assert(typeof DeleteBotAliasCommand === "function");
assert(typeof DeleteBotAlias$ === "object");
assert(typeof DeleteBotLocaleCommand === "function");
assert(typeof DeleteBotLocale$ === "object");
assert(typeof DeleteBotReplicaCommand === "function");
assert(typeof DeleteBotReplica$ === "object");
assert(typeof DeleteBotVersionCommand === "function");
assert(typeof DeleteBotVersion$ === "object");
assert(typeof DeleteCustomVocabularyCommand === "function");
assert(typeof DeleteCustomVocabulary$ === "object");
assert(typeof DeleteExportCommand === "function");
assert(typeof DeleteExport$ === "object");
assert(typeof DeleteImportCommand === "function");
assert(typeof DeleteImport$ === "object");
assert(typeof DeleteIntentCommand === "function");
assert(typeof DeleteIntent$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteResourcePolicyStatementCommand === "function");
assert(typeof DeleteResourcePolicyStatement$ === "object");
assert(typeof DeleteSlotCommand === "function");
assert(typeof DeleteSlot$ === "object");
assert(typeof DeleteSlotTypeCommand === "function");
assert(typeof DeleteSlotType$ === "object");
assert(typeof DeleteTestSetCommand === "function");
assert(typeof DeleteTestSet$ === "object");
assert(typeof DeleteUtterancesCommand === "function");
assert(typeof DeleteUtterances$ === "object");
assert(typeof DescribeBotCommand === "function");
assert(typeof DescribeBot$ === "object");
assert(typeof DescribeBotAliasCommand === "function");
assert(typeof DescribeBotAlias$ === "object");
assert(typeof DescribeBotLocaleCommand === "function");
assert(typeof DescribeBotLocale$ === "object");
assert(typeof DescribeBotRecommendationCommand === "function");
assert(typeof DescribeBotRecommendation$ === "object");
assert(typeof DescribeBotReplicaCommand === "function");
assert(typeof DescribeBotReplica$ === "object");
assert(typeof DescribeBotResourceGenerationCommand === "function");
assert(typeof DescribeBotResourceGeneration$ === "object");
assert(typeof DescribeBotVersionCommand === "function");
assert(typeof DescribeBotVersion$ === "object");
assert(typeof DescribeCustomVocabularyMetadataCommand === "function");
assert(typeof DescribeCustomVocabularyMetadata$ === "object");
assert(typeof DescribeExportCommand === "function");
assert(typeof DescribeExport$ === "object");
assert(typeof DescribeImportCommand === "function");
assert(typeof DescribeImport$ === "object");
assert(typeof DescribeIntentCommand === "function");
assert(typeof DescribeIntent$ === "object");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResourcePolicy$ === "object");
assert(typeof DescribeSlotCommand === "function");
assert(typeof DescribeSlot$ === "object");
assert(typeof DescribeSlotTypeCommand === "function");
assert(typeof DescribeSlotType$ === "object");
assert(typeof DescribeTestExecutionCommand === "function");
assert(typeof DescribeTestExecution$ === "object");
assert(typeof DescribeTestSetCommand === "function");
assert(typeof DescribeTestSet$ === "object");
assert(typeof DescribeTestSetDiscrepancyReportCommand === "function");
assert(typeof DescribeTestSetDiscrepancyReport$ === "object");
assert(typeof DescribeTestSetGenerationCommand === "function");
assert(typeof DescribeTestSetGeneration$ === "object");
assert(typeof GenerateBotElementCommand === "function");
assert(typeof GenerateBotElement$ === "object");
assert(typeof GetTestExecutionArtifactsUrlCommand === "function");
assert(typeof GetTestExecutionArtifactsUrl$ === "object");
assert(typeof ListAggregatedUtterancesCommand === "function");
assert(typeof ListAggregatedUtterances$ === "object");
assert(typeof ListBotAliasesCommand === "function");
assert(typeof ListBotAliases$ === "object");
assert(typeof ListBotAliasReplicasCommand === "function");
assert(typeof ListBotAliasReplicas$ === "object");
assert(typeof ListBotLocalesCommand === "function");
assert(typeof ListBotLocales$ === "object");
assert(typeof ListBotRecommendationsCommand === "function");
assert(typeof ListBotRecommendations$ === "object");
assert(typeof ListBotReplicasCommand === "function");
assert(typeof ListBotReplicas$ === "object");
assert(typeof ListBotResourceGenerationsCommand === "function");
assert(typeof ListBotResourceGenerations$ === "object");
assert(typeof ListBotsCommand === "function");
assert(typeof ListBots$ === "object");
assert(typeof ListBotVersionReplicasCommand === "function");
assert(typeof ListBotVersionReplicas$ === "object");
assert(typeof ListBotVersionsCommand === "function");
assert(typeof ListBotVersions$ === "object");
assert(typeof ListBuiltInIntentsCommand === "function");
assert(typeof ListBuiltInIntents$ === "object");
assert(typeof ListBuiltInSlotTypesCommand === "function");
assert(typeof ListBuiltInSlotTypes$ === "object");
assert(typeof ListCustomVocabularyItemsCommand === "function");
assert(typeof ListCustomVocabularyItems$ === "object");
assert(typeof ListExportsCommand === "function");
assert(typeof ListExports$ === "object");
assert(typeof ListImportsCommand === "function");
assert(typeof ListImports$ === "object");
assert(typeof ListIntentMetricsCommand === "function");
assert(typeof ListIntentMetrics$ === "object");
assert(typeof ListIntentPathsCommand === "function");
assert(typeof ListIntentPaths$ === "object");
assert(typeof ListIntentsCommand === "function");
assert(typeof ListIntents$ === "object");
assert(typeof ListIntentStageMetricsCommand === "function");
assert(typeof ListIntentStageMetrics$ === "object");
assert(typeof ListRecommendedIntentsCommand === "function");
assert(typeof ListRecommendedIntents$ === "object");
assert(typeof ListSessionAnalyticsDataCommand === "function");
assert(typeof ListSessionAnalyticsData$ === "object");
assert(typeof ListSessionMetricsCommand === "function");
assert(typeof ListSessionMetrics$ === "object");
assert(typeof ListSlotsCommand === "function");
assert(typeof ListSlots$ === "object");
assert(typeof ListSlotTypesCommand === "function");
assert(typeof ListSlotTypes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTestExecutionResultItemsCommand === "function");
assert(typeof ListTestExecutionResultItems$ === "object");
assert(typeof ListTestExecutionsCommand === "function");
assert(typeof ListTestExecutions$ === "object");
assert(typeof ListTestSetRecordsCommand === "function");
assert(typeof ListTestSetRecords$ === "object");
assert(typeof ListTestSetsCommand === "function");
assert(typeof ListTestSets$ === "object");
assert(typeof ListUtteranceAnalyticsDataCommand === "function");
assert(typeof ListUtteranceAnalyticsData$ === "object");
assert(typeof ListUtteranceMetricsCommand === "function");
assert(typeof ListUtteranceMetrics$ === "object");
assert(typeof SearchAssociatedTranscriptsCommand === "function");
assert(typeof SearchAssociatedTranscripts$ === "object");
assert(typeof StartBotRecommendationCommand === "function");
assert(typeof StartBotRecommendation$ === "object");
assert(typeof StartBotResourceGenerationCommand === "function");
assert(typeof StartBotResourceGeneration$ === "object");
assert(typeof StartImportCommand === "function");
assert(typeof StartImport$ === "object");
assert(typeof StartTestExecutionCommand === "function");
assert(typeof StartTestExecution$ === "object");
assert(typeof StartTestSetGenerationCommand === "function");
assert(typeof StartTestSetGeneration$ === "object");
assert(typeof StopBotRecommendationCommand === "function");
assert(typeof StopBotRecommendation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBotCommand === "function");
assert(typeof UpdateBot$ === "object");
assert(typeof UpdateBotAliasCommand === "function");
assert(typeof UpdateBotAlias$ === "object");
assert(typeof UpdateBotLocaleCommand === "function");
assert(typeof UpdateBotLocale$ === "object");
assert(typeof UpdateBotRecommendationCommand === "function");
assert(typeof UpdateBotRecommendation$ === "object");
assert(typeof UpdateExportCommand === "function");
assert(typeof UpdateExport$ === "object");
assert(typeof UpdateIntentCommand === "function");
assert(typeof UpdateIntent$ === "object");
assert(typeof UpdateResourcePolicyCommand === "function");
assert(typeof UpdateResourcePolicy$ === "object");
assert(typeof UpdateSlotCommand === "function");
assert(typeof UpdateSlot$ === "object");
assert(typeof UpdateSlotTypeCommand === "function");
assert(typeof UpdateSlotType$ === "object");
assert(typeof UpdateTestSetCommand === "function");
assert(typeof UpdateTestSet$ === "object");
// structural schemas
assert(typeof ActiveContext$ === "object");
assert(typeof AdvancedRecognitionSetting$ === "object");
assert(typeof AgentTurnResult$ === "object");
assert(typeof AgentTurnSpecification$ === "object");
assert(typeof AggregatedUtterancesFilter$ === "object");
assert(typeof AggregatedUtterancesSortBy$ === "object");
assert(typeof AggregatedUtterancesSummary$ === "object");
assert(typeof AllowedInputTypes$ === "object");
assert(typeof AnalyticsBinBySpecification$ === "object");
assert(typeof AnalyticsBinKey$ === "object");
assert(typeof AnalyticsIntentFilter$ === "object");
assert(typeof AnalyticsIntentGroupByKey$ === "object");
assert(typeof AnalyticsIntentGroupBySpecification$ === "object");
assert(typeof AnalyticsIntentMetric$ === "object");
assert(typeof AnalyticsIntentMetricResult$ === "object");
assert(typeof AnalyticsIntentNodeSummary$ === "object");
assert(typeof AnalyticsIntentResult$ === "object");
assert(typeof AnalyticsIntentStageFilter$ === "object");
assert(typeof AnalyticsIntentStageGroupByKey$ === "object");
assert(typeof AnalyticsIntentStageGroupBySpecification$ === "object");
assert(typeof AnalyticsIntentStageMetric$ === "object");
assert(typeof AnalyticsIntentStageMetricResult$ === "object");
assert(typeof AnalyticsIntentStageResult$ === "object");
assert(typeof AnalyticsPathFilter$ === "object");
assert(typeof AnalyticsSessionFilter$ === "object");
assert(typeof AnalyticsSessionGroupByKey$ === "object");
assert(typeof AnalyticsSessionGroupBySpecification$ === "object");
assert(typeof AnalyticsSessionMetric$ === "object");
assert(typeof AnalyticsSessionMetricResult$ === "object");
assert(typeof AnalyticsSessionResult$ === "object");
assert(typeof AnalyticsUtteranceAttribute$ === "object");
assert(typeof AnalyticsUtteranceAttributeResult$ === "object");
assert(typeof AnalyticsUtteranceFilter$ === "object");
assert(typeof AnalyticsUtteranceGroupByKey$ === "object");
assert(typeof AnalyticsUtteranceGroupBySpecification$ === "object");
assert(typeof AnalyticsUtteranceMetric$ === "object");
assert(typeof AnalyticsUtteranceMetricResult$ === "object");
assert(typeof AnalyticsUtteranceResult$ === "object");
assert(typeof AssociatedTranscript$ === "object");
assert(typeof AssociatedTranscriptFilter$ === "object");
assert(typeof AudioAndDTMFInputSpecification$ === "object");
assert(typeof AudioLogDestination$ === "object");
assert(typeof AudioLogSetting$ === "object");
assert(typeof AudioSpecification$ === "object");
assert(typeof BatchCreateCustomVocabularyItemRequest$ === "object");
assert(typeof BatchCreateCustomVocabularyItemResponse$ === "object");
assert(typeof BatchDeleteCustomVocabularyItemRequest$ === "object");
assert(typeof BatchDeleteCustomVocabularyItemResponse$ === "object");
assert(typeof BatchUpdateCustomVocabularyItemRequest$ === "object");
assert(typeof BatchUpdateCustomVocabularyItemResponse$ === "object");
assert(typeof BedrockGuardrailConfiguration$ === "object");
assert(typeof BedrockKnowledgeStoreConfiguration$ === "object");
assert(typeof BedrockKnowledgeStoreExactResponseFields$ === "object");
assert(typeof BedrockModelSpecification$ === "object");
assert(typeof BotAliasHistoryEvent$ === "object");
assert(typeof BotAliasLocaleSettings$ === "object");
assert(typeof BotAliasReplicaSummary$ === "object");
assert(typeof BotAliasSummary$ === "object");
assert(typeof BotAliasTestExecutionTarget$ === "object");
assert(typeof BotExportSpecification$ === "object");
assert(typeof BotFilter$ === "object");
assert(typeof BotImportSpecification$ === "object");
assert(typeof BotLocaleExportSpecification$ === "object");
assert(typeof BotLocaleFilter$ === "object");
assert(typeof BotLocaleHistoryEvent$ === "object");
assert(typeof BotLocaleImportSpecification$ === "object");
assert(typeof BotLocaleSortBy$ === "object");
assert(typeof BotLocaleSummary$ === "object");
assert(typeof BotMember$ === "object");
assert(typeof BotRecommendationResults$ === "object");
assert(typeof BotRecommendationResultStatistics$ === "object");
assert(typeof BotRecommendationSummary$ === "object");
assert(typeof BotReplicaSummary$ === "object");
assert(typeof BotSortBy$ === "object");
assert(typeof BotSummary$ === "object");
assert(typeof BotVersionLocaleDetails$ === "object");
assert(typeof BotVersionReplicaSortBy$ === "object");
assert(typeof BotVersionReplicaSummary$ === "object");
assert(typeof BotVersionSortBy$ === "object");
assert(typeof BotVersionSummary$ === "object");
assert(typeof BuildBotLocaleRequest$ === "object");
assert(typeof BuildBotLocaleResponse$ === "object");
assert(typeof BuildtimeSettings$ === "object");
assert(typeof BuiltInIntentSortBy$ === "object");
assert(typeof BuiltInIntentSummary$ === "object");
assert(typeof BuiltInSlotTypeSortBy$ === "object");
assert(typeof BuiltInSlotTypeSummary$ === "object");
assert(typeof Button$ === "object");
assert(typeof CloudWatchLogGroupLogDestination$ === "object");
assert(typeof CodeHookSpecification$ === "object");
assert(typeof CompositeSlotTypeSetting$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConditionalBranch$ === "object");
assert(typeof ConditionalSpecification$ === "object");
assert(typeof ConversationLevelIntentClassificationResultItem$ === "object");
assert(typeof ConversationLevelResultDetail$ === "object");
assert(typeof ConversationLevelSlotResolutionResultItem$ === "object");
assert(typeof ConversationLevelTestResultItem$ === "object");
assert(typeof ConversationLevelTestResults$ === "object");
assert(typeof ConversationLevelTestResultsFilterBy$ === "object");
assert(typeof ConversationLogsDataSource$ === "object");
assert(typeof ConversationLogsDataSourceFilterBy$ === "object");
assert(typeof ConversationLogSettings$ === "object");
assert(typeof CreateBotAliasRequest$ === "object");
assert(typeof CreateBotAliasResponse$ === "object");
assert(typeof CreateBotLocaleRequest$ === "object");
assert(typeof CreateBotLocaleResponse$ === "object");
assert(typeof CreateBotReplicaRequest$ === "object");
assert(typeof CreateBotReplicaResponse$ === "object");
assert(typeof CreateBotRequest$ === "object");
assert(typeof CreateBotResponse$ === "object");
assert(typeof CreateBotVersionRequest$ === "object");
assert(typeof CreateBotVersionResponse$ === "object");
assert(typeof CreateExportRequest$ === "object");
assert(typeof CreateExportResponse$ === "object");
assert(typeof CreateIntentRequest$ === "object");
assert(typeof CreateIntentResponse$ === "object");
assert(typeof CreateResourcePolicyRequest$ === "object");
assert(typeof CreateResourcePolicyResponse$ === "object");
assert(typeof CreateResourcePolicyStatementRequest$ === "object");
assert(typeof CreateResourcePolicyStatementResponse$ === "object");
assert(typeof CreateSlotRequest$ === "object");
assert(typeof CreateSlotResponse$ === "object");
assert(typeof CreateSlotTypeRequest$ === "object");
assert(typeof CreateSlotTypeResponse$ === "object");
assert(typeof CreateTestSetDiscrepancyReportRequest$ === "object");
assert(typeof CreateTestSetDiscrepancyReportResponse$ === "object");
assert(typeof CreateUploadUrlRequest$ === "object");
assert(typeof CreateUploadUrlResponse$ === "object");
assert(typeof CustomPayload$ === "object");
assert(typeof CustomVocabularyEntryId$ === "object");
assert(typeof CustomVocabularyExportSpecification$ === "object");
assert(typeof CustomVocabularyImportSpecification$ === "object");
assert(typeof CustomVocabularyItem$ === "object");
assert(typeof DataPrivacy$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DateRangeFilter$ === "object");
assert(typeof DeepgramSpeechModelConfig$ === "object");
assert(typeof DefaultConditionalBranch$ === "object");
assert(typeof DeleteBotAliasRequest$ === "object");
assert(typeof DeleteBotAliasResponse$ === "object");
assert(typeof DeleteBotLocaleRequest$ === "object");
assert(typeof DeleteBotLocaleResponse$ === "object");
assert(typeof DeleteBotReplicaRequest$ === "object");
assert(typeof DeleteBotReplicaResponse$ === "object");
assert(typeof DeleteBotRequest$ === "object");
assert(typeof DeleteBotResponse$ === "object");
assert(typeof DeleteBotVersionRequest$ === "object");
assert(typeof DeleteBotVersionResponse$ === "object");
assert(typeof DeleteCustomVocabularyRequest$ === "object");
assert(typeof DeleteCustomVocabularyResponse$ === "object");
assert(typeof DeleteExportRequest$ === "object");
assert(typeof DeleteExportResponse$ === "object");
assert(typeof DeleteImportRequest$ === "object");
assert(typeof DeleteImportResponse$ === "object");
assert(typeof DeleteIntentRequest$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteResourcePolicyStatementRequest$ === "object");
assert(typeof DeleteResourcePolicyStatementResponse$ === "object");
assert(typeof DeleteSlotRequest$ === "object");
assert(typeof DeleteSlotTypeRequest$ === "object");
assert(typeof DeleteTestSetRequest$ === "object");
assert(typeof DeleteUtterancesRequest$ === "object");
assert(typeof DeleteUtterancesResponse$ === "object");
assert(typeof DescribeBotAliasRequest$ === "object");
assert(typeof DescribeBotAliasResponse$ === "object");
assert(typeof DescribeBotLocaleRequest$ === "object");
assert(typeof DescribeBotLocaleResponse$ === "object");
assert(typeof DescribeBotRecommendationRequest$ === "object");
assert(typeof DescribeBotRecommendationResponse$ === "object");
assert(typeof DescribeBotReplicaRequest$ === "object");
assert(typeof DescribeBotReplicaResponse$ === "object");
assert(typeof DescribeBotRequest$ === "object");
assert(typeof DescribeBotResourceGenerationRequest$ === "object");
assert(typeof DescribeBotResourceGenerationResponse$ === "object");
assert(typeof DescribeBotResponse$ === "object");
assert(typeof DescribeBotVersionRequest$ === "object");
assert(typeof DescribeBotVersionResponse$ === "object");
assert(typeof DescribeCustomVocabularyMetadataRequest$ === "object");
assert(typeof DescribeCustomVocabularyMetadataResponse$ === "object");
assert(typeof DescribeExportRequest$ === "object");
assert(typeof DescribeExportResponse$ === "object");
assert(typeof DescribeImportRequest$ === "object");
assert(typeof DescribeImportResponse$ === "object");
assert(typeof DescribeIntentRequest$ === "object");
assert(typeof DescribeIntentResponse$ === "object");
assert(typeof DescribeResourcePolicyRequest$ === "object");
assert(typeof DescribeResourcePolicyResponse$ === "object");
assert(typeof DescribeSlotRequest$ === "object");
assert(typeof DescribeSlotResponse$ === "object");
assert(typeof DescribeSlotTypeRequest$ === "object");
assert(typeof DescribeSlotTypeResponse$ === "object");
assert(typeof DescribeTestExecutionRequest$ === "object");
assert(typeof DescribeTestExecutionResponse$ === "object");
assert(typeof DescribeTestSetDiscrepancyReportRequest$ === "object");
assert(typeof DescribeTestSetDiscrepancyReportResponse$ === "object");
assert(typeof DescribeTestSetGenerationRequest$ === "object");
assert(typeof DescribeTestSetGenerationResponse$ === "object");
assert(typeof DescribeTestSetRequest$ === "object");
assert(typeof DescribeTestSetResponse$ === "object");
assert(typeof DescriptiveBotBuilderSpecification$ === "object");
assert(typeof DialogAction$ === "object");
assert(typeof DialogCodeHookInvocationSetting$ === "object");
assert(typeof DialogCodeHookSettings$ === "object");
assert(typeof DialogState$ === "object");
assert(typeof DTMFSpecification$ === "object");
assert(typeof ElicitationCodeHookInvocationSetting$ === "object");
assert(typeof EncryptionSetting$ === "object");
assert(typeof ErrorLogSettings$ === "object");
assert(typeof ExactResponseFields$ === "object");
assert(typeof ExecutionErrorDetails$ === "object");
assert(typeof ExportFilter$ === "object");
assert(typeof ExportResourceSpecification$ === "object");
assert(typeof ExportSortBy$ === "object");
assert(typeof ExportSummary$ === "object");
assert(typeof ExternalSourceSetting$ === "object");
assert(typeof FailedCustomVocabularyItem$ === "object");
assert(typeof FulfillmentCodeHookSettings$ === "object");
assert(typeof FulfillmentStartResponseSpecification$ === "object");
assert(typeof FulfillmentUpdateResponseSpecification$ === "object");
assert(typeof FulfillmentUpdatesSpecification$ === "object");
assert(typeof GenerateBotElementRequest$ === "object");
assert(typeof GenerateBotElementResponse$ === "object");
assert(typeof GenerationSortBy$ === "object");
assert(typeof GenerationSummary$ === "object");
assert(typeof GenerativeAISettings$ === "object");
assert(typeof GetTestExecutionArtifactsUrlRequest$ === "object");
assert(typeof GetTestExecutionArtifactsUrlResponse$ === "object");
assert(typeof GrammarSlotTypeSetting$ === "object");
assert(typeof GrammarSlotTypeSource$ === "object");
assert(typeof ImageResponseCard$ === "object");
assert(typeof ImportFilter$ === "object");
assert(typeof ImportResourceSpecification$ === "object");
assert(typeof ImportSortBy$ === "object");
assert(typeof ImportSummary$ === "object");
assert(typeof InitialResponseSetting$ === "object");
assert(typeof InputContext$ === "object");
assert(typeof InputSessionStateSpecification$ === "object");
assert(typeof IntentClassificationTestResultItem$ === "object");
assert(typeof IntentClassificationTestResultItemCounts$ === "object");
assert(typeof IntentClassificationTestResults$ === "object");
assert(typeof IntentClosingSetting$ === "object");
assert(typeof IntentConfirmationSetting$ === "object");
assert(typeof IntentDisambiguationSettings$ === "object");
assert(typeof IntentFilter$ === "object");
assert(typeof IntentLevelSlotResolutionTestResultItem$ === "object");
assert(typeof IntentLevelSlotResolutionTestResults$ === "object");
assert(typeof IntentOverride$ === "object");
assert(typeof IntentSortBy$ === "object");
assert(typeof IntentStatistics$ === "object");
assert(typeof IntentSummary$ === "object");
assert(typeof InvokedIntentSample$ === "object");
assert(typeof KendraConfiguration$ === "object");
assert(typeof LambdaCodeHook$ === "object");
assert(typeof LexTranscriptFilter$ === "object");
assert(typeof ListAggregatedUtterancesRequest$ === "object");
assert(typeof ListAggregatedUtterancesResponse$ === "object");
assert(typeof ListBotAliasesRequest$ === "object");
assert(typeof ListBotAliasesResponse$ === "object");
assert(typeof ListBotAliasReplicasRequest$ === "object");
assert(typeof ListBotAliasReplicasResponse$ === "object");
assert(typeof ListBotLocalesRequest$ === "object");
assert(typeof ListBotLocalesResponse$ === "object");
assert(typeof ListBotRecommendationsRequest$ === "object");
assert(typeof ListBotRecommendationsResponse$ === "object");
assert(typeof ListBotReplicasRequest$ === "object");
assert(typeof ListBotReplicasResponse$ === "object");
assert(typeof ListBotResourceGenerationsRequest$ === "object");
assert(typeof ListBotResourceGenerationsResponse$ === "object");
assert(typeof ListBotsRequest$ === "object");
assert(typeof ListBotsResponse$ === "object");
assert(typeof ListBotVersionReplicasRequest$ === "object");
assert(typeof ListBotVersionReplicasResponse$ === "object");
assert(typeof ListBotVersionsRequest$ === "object");
assert(typeof ListBotVersionsResponse$ === "object");
assert(typeof ListBuiltInIntentsRequest$ === "object");
assert(typeof ListBuiltInIntentsResponse$ === "object");
assert(typeof ListBuiltInSlotTypesRequest$ === "object");
assert(typeof ListBuiltInSlotTypesResponse$ === "object");
assert(typeof ListCustomVocabularyItemsRequest$ === "object");
assert(typeof ListCustomVocabularyItemsResponse$ === "object");
assert(typeof ListExportsRequest$ === "object");
assert(typeof ListExportsResponse$ === "object");
assert(typeof ListImportsRequest$ === "object");
assert(typeof ListImportsResponse$ === "object");
assert(typeof ListIntentMetricsRequest$ === "object");
assert(typeof ListIntentMetricsResponse$ === "object");
assert(typeof ListIntentPathsRequest$ === "object");
assert(typeof ListIntentPathsResponse$ === "object");
assert(typeof ListIntentsRequest$ === "object");
assert(typeof ListIntentsResponse$ === "object");
assert(typeof ListIntentStageMetricsRequest$ === "object");
assert(typeof ListIntentStageMetricsResponse$ === "object");
assert(typeof ListRecommendedIntentsRequest$ === "object");
assert(typeof ListRecommendedIntentsResponse$ === "object");
assert(typeof ListSessionAnalyticsDataRequest$ === "object");
assert(typeof ListSessionAnalyticsDataResponse$ === "object");
assert(typeof ListSessionMetricsRequest$ === "object");
assert(typeof ListSessionMetricsResponse$ === "object");
assert(typeof ListSlotsRequest$ === "object");
assert(typeof ListSlotsResponse$ === "object");
assert(typeof ListSlotTypesRequest$ === "object");
assert(typeof ListSlotTypesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTestExecutionResultItemsRequest$ === "object");
assert(typeof ListTestExecutionResultItemsResponse$ === "object");
assert(typeof ListTestExecutionsRequest$ === "object");
assert(typeof ListTestExecutionsResponse$ === "object");
assert(typeof ListTestSetRecordsRequest$ === "object");
assert(typeof ListTestSetRecordsResponse$ === "object");
assert(typeof ListTestSetsRequest$ === "object");
assert(typeof ListTestSetsResponse$ === "object");
assert(typeof ListUtteranceAnalyticsDataRequest$ === "object");
assert(typeof ListUtteranceAnalyticsDataResponse$ === "object");
assert(typeof ListUtteranceMetricsRequest$ === "object");
assert(typeof ListUtteranceMetricsResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageGroup$ === "object");
assert(typeof MultipleValuesSetting$ === "object");
assert(typeof NewCustomVocabularyItem$ === "object");
assert(typeof NluImprovementSpecification$ === "object");
assert(typeof ObfuscationSetting$ === "object");
assert(typeof OpensearchConfiguration$ === "object");
assert(typeof OutputContext$ === "object");
assert(typeof OverallTestResultItem$ === "object");
assert(typeof OverallTestResults$ === "object");
assert(typeof ParentBotNetwork$ === "object");
assert(typeof PathFormat$ === "object");
assert(typeof PlainTextMessage$ === "object");
assert(typeof PostDialogCodeHookInvocationSpecification$ === "object");
assert(typeof PostFulfillmentStatusSpecification$ === "object");
assert(typeof Principal$ === "object");
assert(typeof PromptAttemptSpecification$ === "object");
assert(typeof PromptSpecification$ === "object");
assert(typeof QInConnectAssistantConfiguration$ === "object");
assert(typeof QInConnectIntentConfiguration$ === "object");
assert(typeof QnAIntentConfiguration$ === "object");
assert(typeof QnAKendraConfiguration$ === "object");
assert(typeof RecommendedIntentSummary$ === "object");
assert(typeof RelativeAggregationDuration$ === "object");
assert(typeof ResponseSpecification$ === "object");
assert(typeof RuntimeHintDetails$ === "object");
assert(typeof RuntimeHints$ === "object");
assert(typeof RuntimeHintValue$ === "object");
assert(typeof RuntimeSettings$ === "object");
assert(typeof S3BucketLogDestination$ === "object");
assert(typeof S3BucketTranscriptSource$ === "object");
assert(typeof SampleUtterance$ === "object");
assert(typeof SampleUtteranceGenerationSpecification$ === "object");
assert(typeof SampleValue$ === "object");
assert(typeof SearchAssociatedTranscriptsRequest$ === "object");
assert(typeof SearchAssociatedTranscriptsResponse$ === "object");
assert(typeof SentimentAnalysisSettings$ === "object");
assert(typeof SessionDataSortBy$ === "object");
assert(typeof SessionSpecification$ === "object");
assert(typeof SlotCaptureSetting$ === "object");
assert(typeof SlotDefaultValue$ === "object");
assert(typeof SlotDefaultValueSpecification$ === "object");
assert(typeof SlotFilter$ === "object");
assert(typeof SlotPriority$ === "object");
assert(typeof SlotResolutionImprovementSpecification$ === "object");
assert(typeof SlotResolutionSetting$ === "object");
assert(typeof SlotResolutionTestResultItem$ === "object");
assert(typeof SlotResolutionTestResultItemCounts$ === "object");
assert(typeof SlotSortBy$ === "object");
assert(typeof SlotSummary$ === "object");
assert(typeof SlotTypeFilter$ === "object");
assert(typeof SlotTypeSortBy$ === "object");
assert(typeof SlotTypeStatistics$ === "object");
assert(typeof SlotTypeSummary$ === "object");
assert(typeof SlotTypeValue$ === "object");
assert(typeof SlotValue$ === "object");
assert(typeof SlotValueElicitationSetting$ === "object");
assert(typeof SlotValueOverride$ === "object");
assert(typeof SlotValueRegexFilter$ === "object");
assert(typeof SlotValueSelectionSetting$ === "object");
assert(typeof Specifications$ === "object");
assert(typeof SpeechFoundationModel$ === "object");
assert(typeof SpeechModelConfig$ === "object");
assert(typeof SpeechRecognitionSettings$ === "object");
assert(typeof SSMLMessage$ === "object");
assert(typeof StartBotRecommendationRequest$ === "object");
assert(typeof StartBotRecommendationResponse$ === "object");
assert(typeof StartBotResourceGenerationRequest$ === "object");
assert(typeof StartBotResourceGenerationResponse$ === "object");
assert(typeof StartImportRequest$ === "object");
assert(typeof StartImportResponse$ === "object");
assert(typeof StartTestExecutionRequest$ === "object");
assert(typeof StartTestExecutionResponse$ === "object");
assert(typeof StartTestSetGenerationRequest$ === "object");
assert(typeof StartTestSetGenerationResponse$ === "object");
assert(typeof StillWaitingResponseSpecification$ === "object");
assert(typeof StopBotRecommendationRequest$ === "object");
assert(typeof StopBotRecommendationResponse$ === "object");
assert(typeof SubSlotSetting$ === "object");
assert(typeof SubSlotTypeComposition$ === "object");
assert(typeof SubSlotValueElicitationSetting$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TestExecutionResultFilterBy$ === "object");
assert(typeof TestExecutionResultItems$ === "object");
assert(typeof TestExecutionSortBy$ === "object");
assert(typeof TestExecutionSummary$ === "object");
assert(typeof TestExecutionTarget$ === "object");
assert(typeof TestSetDiscrepancyErrors$ === "object");
assert(typeof TestSetDiscrepancyReportBotAliasTarget$ === "object");
assert(typeof TestSetDiscrepancyReportResourceTarget$ === "object");
assert(typeof TestSetExportSpecification$ === "object");
assert(typeof TestSetGenerationDataSource$ === "object");
assert(typeof TestSetImportInputLocation$ === "object");
assert(typeof TestSetImportResourceSpecification$ === "object");
assert(typeof TestSetIntentDiscrepancyItem$ === "object");
assert(typeof TestSetSlotDiscrepancyItem$ === "object");
assert(typeof TestSetSortBy$ === "object");
assert(typeof TestSetStorageLocation$ === "object");
assert(typeof TestSetSummary$ === "object");
assert(typeof TestSetTurnRecord$ === "object");
assert(typeof TestSetTurnResult$ === "object");
assert(typeof TextInputSpecification$ === "object");
assert(typeof TextLogDestination$ === "object");
assert(typeof TextLogSetting$ === "object");
assert(typeof TranscriptFilter$ === "object");
assert(typeof TranscriptSourceSetting$ === "object");
assert(typeof TurnSpecification$ === "object");
assert(typeof UnifiedSpeechSettings$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBotAliasRequest$ === "object");
assert(typeof UpdateBotAliasResponse$ === "object");
assert(typeof UpdateBotLocaleRequest$ === "object");
assert(typeof UpdateBotLocaleResponse$ === "object");
assert(typeof UpdateBotRecommendationRequest$ === "object");
assert(typeof UpdateBotRecommendationResponse$ === "object");
assert(typeof UpdateBotRequest$ === "object");
assert(typeof UpdateBotResponse$ === "object");
assert(typeof UpdateExportRequest$ === "object");
assert(typeof UpdateExportResponse$ === "object");
assert(typeof UpdateIntentRequest$ === "object");
assert(typeof UpdateIntentResponse$ === "object");
assert(typeof UpdateResourcePolicyRequest$ === "object");
assert(typeof UpdateResourcePolicyResponse$ === "object");
assert(typeof UpdateSlotRequest$ === "object");
assert(typeof UpdateSlotResponse$ === "object");
assert(typeof UpdateSlotTypeRequest$ === "object");
assert(typeof UpdateSlotTypeResponse$ === "object");
assert(typeof UpdateTestSetRequest$ === "object");
assert(typeof UpdateTestSetResponse$ === "object");
assert(typeof UserTurnInputSpecification$ === "object");
assert(typeof UserTurnIntentOutput$ === "object");
assert(typeof UserTurnOutputSpecification$ === "object");
assert(typeof UserTurnResult$ === "object");
assert(typeof UserTurnSlotOutput$ === "object");
assert(typeof UserTurnSpecification$ === "object");
assert(typeof UtteranceAggregationDuration$ === "object");
assert(typeof UtteranceAudioInputSpecification$ === "object");
assert(typeof UtteranceBotResponse$ === "object");
assert(typeof UtteranceDataSortBy$ === "object");
assert(typeof UtteranceInputSpecification$ === "object");
assert(typeof UtteranceLevelTestResultItem$ === "object");
assert(typeof UtteranceLevelTestResults$ === "object");
assert(typeof UtteranceSpecification$ === "object");
assert(typeof VoiceSettings$ === "object");
assert(typeof WaitAndContinueSpecification$ === "object");
// enums
assert(typeof AggregatedUtterancesFilterName === "object");
assert(typeof AggregatedUtterancesFilterOperator === "object");
assert(typeof AggregatedUtterancesSortAttribute === "object");
assert(typeof AnalyticsBinByName === "object");
assert(typeof AnalyticsCommonFilterName === "object");
assert(typeof AnalyticsFilterOperator === "object");
assert(typeof AnalyticsIntentField === "object");
assert(typeof AnalyticsIntentFilterName === "object");
assert(typeof AnalyticsIntentMetricName === "object");
assert(typeof AnalyticsIntentStageField === "object");
assert(typeof AnalyticsIntentStageFilterName === "object");
assert(typeof AnalyticsIntentStageMetricName === "object");
assert(typeof AnalyticsInterval === "object");
assert(typeof AnalyticsMetricStatistic === "object");
assert(typeof AnalyticsModality === "object");
assert(typeof AnalyticsNodeType === "object");
assert(typeof AnalyticsSessionField === "object");
assert(typeof AnalyticsSessionFilterName === "object");
assert(typeof AnalyticsSessionMetricName === "object");
assert(typeof AnalyticsSessionSortByName === "object");
assert(typeof AnalyticsSortOrder === "object");
assert(typeof AnalyticsUtteranceAttributeName === "object");
assert(typeof AnalyticsUtteranceField === "object");
assert(typeof AnalyticsUtteranceFilterName === "object");
assert(typeof AnalyticsUtteranceMetricName === "object");
assert(typeof AnalyticsUtteranceSortByName === "object");
assert(typeof AssistedNluMode === "object");
assert(typeof AssociatedTranscriptFilterName === "object");
assert(typeof AudioRecognitionStrategy === "object");
assert(typeof BedrockTraceStatus === "object");
assert(typeof BotAliasReplicationStatus === "object");
assert(typeof BotAliasStatus === "object");
assert(typeof BotFilterName === "object");
assert(typeof BotFilterOperator === "object");
assert(typeof BotLocaleFilterName === "object");
assert(typeof BotLocaleFilterOperator === "object");
assert(typeof BotLocaleSortAttribute === "object");
assert(typeof BotLocaleStatus === "object");
assert(typeof BotRecommendationStatus === "object");
assert(typeof BotReplicaStatus === "object");
assert(typeof BotSortAttribute === "object");
assert(typeof BotStatus === "object");
assert(typeof BotType === "object");
assert(typeof BotVersionReplicaSortAttribute === "object");
assert(typeof BotVersionReplicationStatus === "object");
assert(typeof BotVersionSortAttribute === "object");
assert(typeof BuiltInIntentSortAttribute === "object");
assert(typeof BuiltInSlotTypeSortAttribute === "object");
assert(typeof ConversationEndState === "object");
assert(typeof ConversationLogsInputModeFilter === "object");
assert(typeof CustomVocabularyStatus === "object");
assert(typeof DialogActionType === "object");
assert(typeof Effect === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExportFilterName === "object");
assert(typeof ExportFilterOperator === "object");
assert(typeof ExportSortAttribute === "object");
assert(typeof ExportStatus === "object");
assert(typeof GenerationSortByAttribute === "object");
assert(typeof GenerationStatus === "object");
assert(typeof ImportExportFileFormat === "object");
assert(typeof ImportFilterName === "object");
assert(typeof ImportFilterOperator === "object");
assert(typeof ImportResourceType === "object");
assert(typeof ImportSortAttribute === "object");
assert(typeof ImportStatus === "object");
assert(typeof IntentFilterName === "object");
assert(typeof IntentFilterOperator === "object");
assert(typeof IntentSortAttribute === "object");
assert(typeof IntentState === "object");
assert(typeof MergeStrategy === "object");
assert(typeof MessageSelectionStrategy === "object");
assert(typeof ObfuscationSettingType === "object");
assert(typeof PromptAttempt === "object");
assert(typeof SearchOrder === "object");
assert(typeof SlotConstraint === "object");
assert(typeof SlotFilterName === "object");
assert(typeof SlotFilterOperator === "object");
assert(typeof SlotResolutionStrategy === "object");
assert(typeof SlotShape === "object");
assert(typeof SlotSortAttribute === "object");
assert(typeof SlotTypeCategory === "object");
assert(typeof SlotTypeFilterName === "object");
assert(typeof SlotTypeFilterOperator === "object");
assert(typeof SlotTypeSortAttribute === "object");
assert(typeof SlotValueResolutionStrategy === "object");
assert(typeof SortOrder === "object");
assert(typeof SpeechDetectionSensitivity === "object");
assert(typeof SpeechModelPreference === "object");
assert(typeof TestExecutionApiMode === "object");
assert(typeof TestExecutionModality === "object");
assert(typeof TestExecutionSortAttribute === "object");
assert(typeof TestExecutionStatus === "object");
assert(typeof TestResultMatchStatus === "object");
assert(typeof TestResultTypeFilter === "object");
assert(typeof TestSetDiscrepancyReportStatus === "object");
assert(typeof TestSetGenerationStatus === "object");
assert(typeof TestSetModality === "object");
assert(typeof TestSetSortAttribute === "object");
assert(typeof TestSetStatus === "object");
assert(typeof TimeDimension === "object");
assert(typeof TranscriptFormat === "object");
assert(typeof UtteranceContentType === "object");
assert(typeof VoiceEngine === "object");
// errors
assert(ConflictException.prototype instanceof LexModelsV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof LexModelsV2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(PreconditionFailedException.prototype instanceof LexModelsV2ServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LexModelsV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LexModelsV2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof LexModelsV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LexModelsV2ServiceException);
assert(typeof ValidationException$ === "object");
assert(LexModelsV2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForBotAliasAvailable === "function");
assert(typeof waitForBotAvailable === "function");
assert(typeof waitForBotExportCompleted === "function");
assert(typeof waitForBotImportCompleted === "function");
assert(typeof waitForBotLocaleBuilt === "function");
assert(typeof waitForBotLocaleCreated === "function");
assert(typeof waitForBotLocaleExpressTestingAvailable === "function");
assert(typeof waitForBotVersionAvailable === "function");
assert(typeof waitUntilBotAliasAvailable === "function");
assert(typeof waitUntilBotAvailable === "function");
assert(typeof waitUntilBotExportCompleted === "function");
assert(typeof waitUntilBotImportCompleted === "function");
assert(typeof waitUntilBotLocaleBuilt === "function");
assert(typeof waitUntilBotLocaleCreated === "function");
assert(typeof waitUntilBotLocaleExpressTestingAvailable === "function");
assert(typeof waitUntilBotVersionAvailable === "function");
// paginators
assert(typeof paginateListAggregatedUtterances === "function");
assert(typeof paginateListBotAliasReplicas === "function");
assert(typeof paginateListBotAliases === "function");
assert(typeof paginateListBotLocales === "function");
assert(typeof paginateListBotRecommendations === "function");
assert(typeof paginateListBotResourceGenerations === "function");
assert(typeof paginateListBotVersionReplicas === "function");
assert(typeof paginateListBotVersions === "function");
assert(typeof paginateListBots === "function");
assert(typeof paginateListBuiltInIntents === "function");
assert(typeof paginateListBuiltInSlotTypes === "function");
assert(typeof paginateListCustomVocabularyItems === "function");
assert(typeof paginateListExports === "function");
assert(typeof paginateListImports === "function");
assert(typeof paginateListIntentMetrics === "function");
assert(typeof paginateListIntentStageMetrics === "function");
assert(typeof paginateListIntents === "function");
assert(typeof paginateListRecommendedIntents === "function");
assert(typeof paginateListSessionAnalyticsData === "function");
assert(typeof paginateListSessionMetrics === "function");
assert(typeof paginateListSlotTypes === "function");
assert(typeof paginateListSlots === "function");
assert(typeof paginateListTestExecutionResultItems === "function");
assert(typeof paginateListTestExecutions === "function");
assert(typeof paginateListTestSetRecords === "function");
assert(typeof paginateListTestSets === "function");
assert(typeof paginateListUtteranceAnalyticsData === "function");
assert(typeof paginateListUtteranceMetrics === "function");
console.log(`LexModelsV2 index test passed.`);
