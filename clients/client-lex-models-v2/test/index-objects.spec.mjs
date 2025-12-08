import {
  AggregatedUtterancesFilterName,
  AggregatedUtterancesFilterOperator,
  AggregatedUtterancesSortAttribute,
  AnalyticsBinByName,
  AnalyticsCommonFilterName,
  AnalyticsFilterOperator,
  AnalyticsIntentField,
  AnalyticsIntentFilterName,
  AnalyticsIntentMetricName,
  AnalyticsIntentStageField,
  AnalyticsIntentStageFilterName,
  AnalyticsIntentStageMetricName,
  AnalyticsInterval,
  AnalyticsMetricStatistic,
  AnalyticsModality,
  AnalyticsNodeType,
  AnalyticsSessionField,
  AnalyticsSessionFilterName,
  AnalyticsSessionMetricName,
  AnalyticsSessionSortByName,
  AnalyticsSortOrder,
  AnalyticsUtteranceAttributeName,
  AnalyticsUtteranceField,
  AnalyticsUtteranceFilterName,
  AnalyticsUtteranceMetricName,
  AnalyticsUtteranceSortByName,
  AssistedNluMode,
  AssociatedTranscriptFilterName,
  AudioRecognitionStrategy,
  BatchCreateCustomVocabularyItemCommand,
  BatchDeleteCustomVocabularyItemCommand,
  BatchUpdateCustomVocabularyItemCommand,
  BedrockTraceStatus,
  BotAliasReplicationStatus,
  BotAliasStatus,
  BotFilterName,
  BotFilterOperator,
  BotLocaleFilterName,
  BotLocaleFilterOperator,
  BotLocaleSortAttribute,
  BotLocaleStatus,
  BotRecommendationStatus,
  BotReplicaStatus,
  BotSortAttribute,
  BotStatus,
  BotType,
  BotVersionReplicaSortAttribute,
  BotVersionReplicationStatus,
  BotVersionSortAttribute,
  BuildBotLocaleCommand,
  BuiltInIntentSortAttribute,
  BuiltInSlotTypeSortAttribute,
  ConflictException,
  ConversationEndState,
  ConversationLogsInputModeFilter,
  CreateBotAliasCommand,
  CreateBotCommand,
  CreateBotLocaleCommand,
  CreateBotReplicaCommand,
  CreateBotVersionCommand,
  CreateExportCommand,
  CreateIntentCommand,
  CreateResourcePolicyCommand,
  CreateResourcePolicyStatementCommand,
  CreateSlotCommand,
  CreateSlotTypeCommand,
  CreateTestSetDiscrepancyReportCommand,
  CreateUploadUrlCommand,
  CustomVocabularyStatus,
  DeleteBotAliasCommand,
  DeleteBotCommand,
  DeleteBotLocaleCommand,
  DeleteBotReplicaCommand,
  DeleteBotVersionCommand,
  DeleteCustomVocabularyCommand,
  DeleteExportCommand,
  DeleteImportCommand,
  DeleteIntentCommand,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyStatementCommand,
  DeleteSlotCommand,
  DeleteSlotTypeCommand,
  DeleteTestSetCommand,
  DeleteUtterancesCommand,
  DescribeBotAliasCommand,
  DescribeBotCommand,
  DescribeBotLocaleCommand,
  DescribeBotRecommendationCommand,
  DescribeBotReplicaCommand,
  DescribeBotResourceGenerationCommand,
  DescribeBotVersionCommand,
  DescribeCustomVocabularyMetadataCommand,
  DescribeExportCommand,
  DescribeImportCommand,
  DescribeIntentCommand,
  DescribeResourcePolicyCommand,
  DescribeSlotCommand,
  DescribeSlotTypeCommand,
  DescribeTestExecutionCommand,
  DescribeTestSetCommand,
  DescribeTestSetDiscrepancyReportCommand,
  DescribeTestSetGenerationCommand,
  DialogActionType,
  Effect,
  ErrorCode,
  ExportFilterName,
  ExportFilterOperator,
  ExportSortAttribute,
  ExportStatus,
  GenerateBotElementCommand,
  GenerationSortByAttribute,
  GenerationStatus,
  GetTestExecutionArtifactsUrlCommand,
  ImportExportFileFormat,
  ImportFilterName,
  ImportFilterOperator,
  ImportResourceType,
  ImportSortAttribute,
  ImportStatus,
  IntentFilterName,
  IntentFilterOperator,
  IntentSortAttribute,
  IntentState,
  InternalServerException,
  LexModelsV2,
  LexModelsV2Client,
  LexModelsV2ServiceException,
  ListAggregatedUtterancesCommand,
  ListBotAliasReplicasCommand,
  ListBotAliasesCommand,
  ListBotLocalesCommand,
  ListBotRecommendationsCommand,
  ListBotReplicasCommand,
  ListBotResourceGenerationsCommand,
  ListBotVersionReplicasCommand,
  ListBotVersionsCommand,
  ListBotsCommand,
  ListBuiltInIntentsCommand,
  ListBuiltInSlotTypesCommand,
  ListCustomVocabularyItemsCommand,
  ListExportsCommand,
  ListImportsCommand,
  ListIntentMetricsCommand,
  ListIntentPathsCommand,
  ListIntentStageMetricsCommand,
  ListIntentsCommand,
  ListRecommendedIntentsCommand,
  ListSessionAnalyticsDataCommand,
  ListSessionMetricsCommand,
  ListSlotTypesCommand,
  ListSlotsCommand,
  ListTagsForResourceCommand,
  ListTestExecutionResultItemsCommand,
  ListTestExecutionsCommand,
  ListTestSetRecordsCommand,
  ListTestSetsCommand,
  ListUtteranceAnalyticsDataCommand,
  ListUtteranceMetricsCommand,
  MergeStrategy,
  MessageSelectionStrategy,
  ObfuscationSettingType,
  PreconditionFailedException,
  PromptAttempt,
  ResourceNotFoundException,
  SearchAssociatedTranscriptsCommand,
  SearchOrder,
  ServiceQuotaExceededException,
  SlotConstraint,
  SlotFilterName,
  SlotFilterOperator,
  SlotResolutionStrategy,
  SlotShape,
  SlotSortAttribute,
  SlotTypeCategory,
  SlotTypeFilterName,
  SlotTypeFilterOperator,
  SlotTypeSortAttribute,
  SlotValueResolutionStrategy,
  SortOrder,
  SpeechDetectionSensitivity,
  SpeechModelPreference,
  StartBotRecommendationCommand,
  StartBotResourceGenerationCommand,
  StartImportCommand,
  StartTestExecutionCommand,
  StartTestSetGenerationCommand,
  StopBotRecommendationCommand,
  TagResourceCommand,
  TestExecutionApiMode,
  TestExecutionModality,
  TestExecutionSortAttribute,
  TestExecutionStatus,
  TestResultMatchStatus,
  TestResultTypeFilter,
  TestSetDiscrepancyReportStatus,
  TestSetGenerationStatus,
  TestSetModality,
  TestSetSortAttribute,
  TestSetStatus,
  ThrottlingException,
  TimeDimension,
  TranscriptFormat,
  UntagResourceCommand,
  UpdateBotAliasCommand,
  UpdateBotCommand,
  UpdateBotLocaleCommand,
  UpdateBotRecommendationCommand,
  UpdateExportCommand,
  UpdateIntentCommand,
  UpdateResourcePolicyCommand,
  UpdateSlotCommand,
  UpdateSlotTypeCommand,
  UpdateTestSetCommand,
  UtteranceContentType,
  ValidationException,
  VoiceEngine,
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
assert(typeof BatchDeleteCustomVocabularyItemCommand === "function");
assert(typeof BatchUpdateCustomVocabularyItemCommand === "function");
assert(typeof BuildBotLocaleCommand === "function");
assert(typeof CreateBotCommand === "function");
assert(typeof CreateBotAliasCommand === "function");
assert(typeof CreateBotLocaleCommand === "function");
assert(typeof CreateBotReplicaCommand === "function");
assert(typeof CreateBotVersionCommand === "function");
assert(typeof CreateExportCommand === "function");
assert(typeof CreateIntentCommand === "function");
assert(typeof CreateResourcePolicyCommand === "function");
assert(typeof CreateResourcePolicyStatementCommand === "function");
assert(typeof CreateSlotCommand === "function");
assert(typeof CreateSlotTypeCommand === "function");
assert(typeof CreateTestSetDiscrepancyReportCommand === "function");
assert(typeof CreateUploadUrlCommand === "function");
assert(typeof DeleteBotCommand === "function");
assert(typeof DeleteBotAliasCommand === "function");
assert(typeof DeleteBotLocaleCommand === "function");
assert(typeof DeleteBotReplicaCommand === "function");
assert(typeof DeleteBotVersionCommand === "function");
assert(typeof DeleteCustomVocabularyCommand === "function");
assert(typeof DeleteExportCommand === "function");
assert(typeof DeleteImportCommand === "function");
assert(typeof DeleteIntentCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicyStatementCommand === "function");
assert(typeof DeleteSlotCommand === "function");
assert(typeof DeleteSlotTypeCommand === "function");
assert(typeof DeleteTestSetCommand === "function");
assert(typeof DeleteUtterancesCommand === "function");
assert(typeof DescribeBotCommand === "function");
assert(typeof DescribeBotAliasCommand === "function");
assert(typeof DescribeBotLocaleCommand === "function");
assert(typeof DescribeBotRecommendationCommand === "function");
assert(typeof DescribeBotReplicaCommand === "function");
assert(typeof DescribeBotResourceGenerationCommand === "function");
assert(typeof DescribeBotVersionCommand === "function");
assert(typeof DescribeCustomVocabularyMetadataCommand === "function");
assert(typeof DescribeExportCommand === "function");
assert(typeof DescribeImportCommand === "function");
assert(typeof DescribeIntentCommand === "function");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeSlotCommand === "function");
assert(typeof DescribeSlotTypeCommand === "function");
assert(typeof DescribeTestExecutionCommand === "function");
assert(typeof DescribeTestSetCommand === "function");
assert(typeof DescribeTestSetDiscrepancyReportCommand === "function");
assert(typeof DescribeTestSetGenerationCommand === "function");
assert(typeof GenerateBotElementCommand === "function");
assert(typeof GetTestExecutionArtifactsUrlCommand === "function");
assert(typeof ListAggregatedUtterancesCommand === "function");
assert(typeof ListBotAliasesCommand === "function");
assert(typeof ListBotAliasReplicasCommand === "function");
assert(typeof ListBotLocalesCommand === "function");
assert(typeof ListBotRecommendationsCommand === "function");
assert(typeof ListBotReplicasCommand === "function");
assert(typeof ListBotResourceGenerationsCommand === "function");
assert(typeof ListBotsCommand === "function");
assert(typeof ListBotVersionReplicasCommand === "function");
assert(typeof ListBotVersionsCommand === "function");
assert(typeof ListBuiltInIntentsCommand === "function");
assert(typeof ListBuiltInSlotTypesCommand === "function");
assert(typeof ListCustomVocabularyItemsCommand === "function");
assert(typeof ListExportsCommand === "function");
assert(typeof ListImportsCommand === "function");
assert(typeof ListIntentMetricsCommand === "function");
assert(typeof ListIntentPathsCommand === "function");
assert(typeof ListIntentsCommand === "function");
assert(typeof ListIntentStageMetricsCommand === "function");
assert(typeof ListRecommendedIntentsCommand === "function");
assert(typeof ListSessionAnalyticsDataCommand === "function");
assert(typeof ListSessionMetricsCommand === "function");
assert(typeof ListSlotsCommand === "function");
assert(typeof ListSlotTypesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTestExecutionResultItemsCommand === "function");
assert(typeof ListTestExecutionsCommand === "function");
assert(typeof ListTestSetRecordsCommand === "function");
assert(typeof ListTestSetsCommand === "function");
assert(typeof ListUtteranceAnalyticsDataCommand === "function");
assert(typeof ListUtteranceMetricsCommand === "function");
assert(typeof SearchAssociatedTranscriptsCommand === "function");
assert(typeof StartBotRecommendationCommand === "function");
assert(typeof StartBotResourceGenerationCommand === "function");
assert(typeof StartImportCommand === "function");
assert(typeof StartTestExecutionCommand === "function");
assert(typeof StartTestSetGenerationCommand === "function");
assert(typeof StopBotRecommendationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBotCommand === "function");
assert(typeof UpdateBotAliasCommand === "function");
assert(typeof UpdateBotLocaleCommand === "function");
assert(typeof UpdateBotRecommendationCommand === "function");
assert(typeof UpdateExportCommand === "function");
assert(typeof UpdateIntentCommand === "function");
assert(typeof UpdateResourcePolicyCommand === "function");
assert(typeof UpdateSlotCommand === "function");
assert(typeof UpdateSlotTypeCommand === "function");
assert(typeof UpdateTestSetCommand === "function");
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
assert(InternalServerException.prototype instanceof LexModelsV2ServiceException);
assert(PreconditionFailedException.prototype instanceof LexModelsV2ServiceException);
assert(ResourceNotFoundException.prototype instanceof LexModelsV2ServiceException);
assert(ServiceQuotaExceededException.prototype instanceof LexModelsV2ServiceException);
assert(ThrottlingException.prototype instanceof LexModelsV2ServiceException);
assert(ValidationException.prototype instanceof LexModelsV2ServiceException);
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
