// smithy-typescript generated code
import type {
  AnalysisScope,
  AnalyticsModality,
  AnalyticsSessionSortByName,
  AnalyticsSortOrder,
  AnalyticsUtteranceSortByName,
  BotAliasStatus,
  BotAnalyzerStatus,
  BotLocaleStatus,
  BotRecommendationStatus,
  BotStatus,
  BotType,
  ConversationEndState,
  ExportStatus,
  GenerationStatus,
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
  MergeStrategy,
  SearchOrder,
  SlotConstraint,
  SlotFilterName,
  SlotFilterOperator,
  SlotShape,
  SlotSortAttribute,
  SlotTypeCategory,
  SlotTypeFilterName,
  SlotTypeFilterOperator,
  SlotTypeSortAttribute,
  SortOrder,
  SpeechDetectionSensitivity,
  TestExecutionApiMode,
  TestExecutionModality,
  TestExecutionSortAttribute,
  TestExecutionStatus,
  TestResultMatchStatus,
  TestResultTypeFilter,
  TestSetGenerationStatus,
  TestSetModality,
  TestSetSortAttribute,
  TestSetStatus,
  TimeDimension,
  UtteranceContentType,
} from "./enums";
import type {
  ActiveContext,
  AgentTurnResult,
  AgentTurnSpecification,
  AggregatedUtterancesFilter,
  AggregatedUtterancesSortBy,
  AggregatedUtterancesSummary,
  AnalyticsBinBySpecification,
  AnalyticsIntentFilter,
  AnalyticsIntentGroupBySpecification,
  AnalyticsIntentMetric,
  AnalyticsIntentNodeSummary,
  AnalyticsIntentResult,
  AnalyticsIntentStageFilter,
  AnalyticsIntentStageGroupBySpecification,
  AnalyticsIntentStageMetric,
  AnalyticsIntentStageResult,
  AnalyticsPathFilter,
  AnalyticsSessionFilter,
  AnalyticsSessionGroupBySpecification,
  AnalyticsSessionMetric,
  AnalyticsSessionResult,
  AnalyticsUtteranceAttribute,
  AnalyticsUtteranceFilter,
  AnalyticsUtteranceGroupBySpecification,
  AnalyticsUtteranceMetric,
  AnalyticsUtteranceResult,
  AssociatedTranscript,
  AssociatedTranscriptFilter,
  AudioFillerSettings,
  BotAliasLocaleSettings,
  BotAliasReplicaSummary,
  BotAliasSummary,
  BotAnalyzerHistorySummary,
  BotFilter,
  BotLocaleFilter,
  BotLocaleSortBy,
  BotLocaleSummary,
  BotMember,
  BotRecommendationSummary,
  BotReplicaSummary,
  BotSortBy,
  BotSummary,
  BotVersionReplicaSortBy,
  BotVersionReplicaSummary,
  BotVersionSortBy,
  BotVersionSummary,
  BuiltInIntentSortBy,
  BuiltInIntentSummary,
  BuiltInSlotTypeSortBy,
  BuiltInSlotTypeSummary,
  CompositeSlotTypeSetting,
  Condition,
  ConversationLevelResultDetail,
  ConversationLevelTestResults,
  ConversationLevelTestResultsFilterBy,
  ConversationLogSettings,
  CustomVocabularyItem,
  DataPrivacy,
  DialogAction,
  DialogCodeHookSettings,
  ElicitationCodeHookInvocationSetting,
  EncryptionSetting,
  ErrorLogSettings,
  ExecutionErrorDetails,
  ExportFilter,
  ExportResourceSpecification,
  ExportSortBy,
  ExportSummary,
  ExternalSourceSetting,
  FulfillmentUpdatesSpecification,
  GenerationSortBy,
  GenerationSummary,
  GenerativeAISettings,
  ImageResponseCard,
  ImportResourceSpecification,
  InputContext,
  KendraConfiguration,
  MultipleValuesSetting,
  ObfuscationSetting,
  OutputContext,
  PromptSpecification,
  QInConnectIntentConfiguration,
  QnAIntentConfiguration,
  ResponseSpecification,
  SampleUtterance,
  SentimentAnalysisSettings,
  SlotDefaultValueSpecification,
  SlotPriority,
  SlotResolutionSetting,
  SlotTypeValue,
  SlotValue,
  SlotValueSelectionSetting,
  SpeakerDiarizationSettings,
  SpeechRecognitionSettings,
  SubSlotSetting,
  TestExecutionTarget,
  TestSetGenerationDataSource,
  TestSetStorageLocation,
  TranscriptSourceSetting,
  UnifiedSpeechSettings,
  VoiceSettings,
  WaitAndContinueSpecification,
} from "./models_0";

/**
 * Filters the response from the [ListImports](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html) operation.
 *
 * @public
 */
export interface ImportFilter {
  /**
   * The name of the field to use for filtering.
   *
   * @public
   */
  name: ImportFilterName | undefined;

  /**
   * The values to use to filter the response. The values must be `Bot`, `BotLocale`, or `CustomVocabulary`.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify EQ when the `ListImports` operation should return only resource types that equal the specified value. Specify CO when the `ListImports` operation should return resource types that contain the specified value.
   *
   * @public
   */
  operator: ImportFilterOperator | undefined;
}

/**
 * Provides information for sorting a list of imports.
 *
 * @public
 */
export interface ImportSortBy {
  /**
   * The export field to use for sorting.
   *
   * @public
   */
  attribute: ImportSortAttribute | undefined;

  /**
   * The order to sort the list.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Provides summary information about an import in an import list.
 *
 * @public
 */
export interface ImportSummary {
  /**
   * The unique identifier that Amazon Lex assigned to the import.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The unique identifier that Amazon Lex assigned to the imported resource.
   *
   * @public
   */
  importedResourceId?: string | undefined;

  /**
   * The name that you gave the imported resource.
   *
   * @public
   */
  importedResourceName?: string | undefined;

  /**
   * The status of the resource. When the status is `Completed` the resource is ready to build.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * The strategy used to merge existing bot or bot locale definitions with the imported definition.
   *
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * The date and time that the import was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time that the import was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The type of resource that was imported.
   *
   * @public
   */
  importedResourceType?: ImportResourceType | undefined;
}

/**
 * Provides the phrase that Amazon Lex should look for in the user's input to the bot.
 *
 * @public
 */
export interface RuntimeHintValue {
  /**
   * The phrase that Amazon Lex should look for in the user's input to the bot.
   *
   * @public
   */
  phrase: string | undefined;
}

/**
 * The number of items in the intent classification test.
 *
 * @public
 */
export interface IntentClassificationTestResultItemCounts {
  /**
   * The total number of results in the intent classification test.
   *
   * @public
   */
  totalResultCount: number | undefined;

  /**
   * The number of matched, mismatched, and execution error results for speech transcription for the intent.
   *
   * @public
   */
  speechTranscriptionResultCounts?: Partial<Record<TestResultMatchStatus, number>> | undefined;

  /**
   * The number of matched and mismatched results for intent recognition for the intent.
   *
   * @public
   */
  intentMatchResultCounts: Partial<Record<TestResultMatchStatus, number>> | undefined;
}

/**
 * Information for an intent that is classified by the test workbench.
 *
 * @public
 */
export interface IntentClassificationTestResultItem {
  /**
   * The name of the intent.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * Indicates whether the conversation involves multiple turns or not.
   *
   * @public
   */
  multiTurnConversation: boolean | undefined;

  /**
   * The result of the intent classification test.
   *
   * @public
   */
  resultCounts: IntentClassificationTestResultItemCounts | undefined;
}

/**
 * Information for the results of the intent classification test.
 *
 * @public
 */
export interface IntentClassificationTestResults {
  /**
   * A list of the results for the intent classification test.
   *
   * @public
   */
  items: IntentClassificationTestResultItem[] | undefined;
}

/**
 * Filters the response from the `ListIntents` operation.
 *
 * @public
 */
export interface IntentFilter {
  /**
   * The name of the field to use for the filter.
   *
   * @public
   */
  name: IntentFilterName | undefined;

  /**
   * The value to use for the filter.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify `EQ` when the `ListIntents` operation should return only aliases that equal the specified value. Specify `CO` when the `ListIntents` operation should return aliases that contain the specified value.
   *
   * @public
   */
  operator: IntentFilterOperator | undefined;
}

/**
 * Information about the counts for a slot resolution in the results of a test execution.
 *
 * @public
 */
export interface SlotResolutionTestResultItemCounts {
  /**
   * The total number of results.
   *
   * @public
   */
  totalResultCount: number | undefined;

  /**
   * The number of matched, mismatched and execution error results for speech transcription for the slot.
   *
   * @public
   */
  speechTranscriptionResultCounts?: Partial<Record<TestResultMatchStatus, number>> | undefined;

  /**
   * The number of matched and mismatched results for slot resolution for the slot.
   *
   * @public
   */
  slotMatchResultCounts: Partial<Record<TestResultMatchStatus, number>> | undefined;
}

/**
 * Information about the success and failure rate of slot resolution in the results of a test execution.
 *
 * @public
 */
export interface SlotResolutionTestResultItem {
  /**
   * The name of the slot.
   *
   * @public
   */
  slotName: string | undefined;

  /**
   * A result for slot resolution in the results of a test execution.
   *
   * @public
   */
  resultCounts: SlotResolutionTestResultItemCounts | undefined;
}

/**
 * Information about intent-level slot resolution in a test result.
 *
 * @public
 */
export interface IntentLevelSlotResolutionTestResultItem {
  /**
   * The name of the intent that was recognized.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * Indicates whether the conversation involves multiple turns or not.
   *
   * @public
   */
  multiTurnConversation: boolean | undefined;

  /**
   * The results for the slot resolution in the test execution result.
   *
   * @public
   */
  slotResolutionResults: SlotResolutionTestResultItem[] | undefined;
}

/**
 * Indicates the success or failure of slots at the intent level.
 *
 * @public
 */
export interface IntentLevelSlotResolutionTestResults {
  /**
   * Indicates the items for the slot level resolution for the intents.
   *
   * @public
   */
  items: IntentLevelSlotResolutionTestResultItem[] | undefined;
}

/**
 * Specifies attributes for sorting a list of intents.
 *
 * @public
 */
export interface IntentSortBy {
  /**
   * The attribute to use to sort the list of intents.
   *
   * @public
   */
  attribute: IntentSortAttribute | undefined;

  /**
   * The order to sort the list. You can choose ascending or descending.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Summary information about an intent returned by the `ListIntents` operation.
 *
 * @public
 */
export interface IntentSummary {
  /**
   * The unique identifier assigned to the intent. Use this ID to get detailed information about the intent with the `DescribeIntent` operation.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The name of the intent.
   *
   * @public
   */
  intentName?: string | undefined;

  /**
   * The display name of the intent.
   *
   * @public
   */
  intentDisplayName?: string | undefined;

  /**
   * The description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * If this intent is derived from a built-in intent, the name of the parent intent.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * The input contexts that must be active for this intent to be considered for recognition.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * The output contexts that are activated when this intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;

  /**
   * The timestamp of the date and time that the intent was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * An object containing the name of an intent that was invoked.
 *
 * @public
 */
export interface InvokedIntentSample {
  /**
   * The name of an intent that was invoked.
   *
   * @public
   */
  intentName?: string | undefined;
}

/**
 * Specifies the time window that utterance statistics are returned for. The time window is always relative to the last time that the that utterances were aggregated. For example, if the `ListAggregatedUtterances` operation is called at 1600, the time window is set to 1 hour, and the last refresh time was 1530, only utterances made between 1430 and 1530 are returned.
 *
 * You can choose the time window that statistics should be returned for.
 *
 * - **Hours** - You can request utterance statistics for 1, 3, 6, 12, or 24 hour time windows. Statistics are refreshed every half hour for 1 hour time windows, and hourly for the other time windows.
 * - **Days** - You can request utterance statistics for 3 days. Statistics are refreshed every 6 hours.
 * - **Weeks** - You can see statistics for one or two weeks. Statistics are refreshed every 12 hours for one week time windows, and once per day for two week time windows.
 *
 * @public
 */
export interface RelativeAggregationDuration {
  /**
   * The type of time period that the `timeValue` field represents.
   *
   * @public
   */
  timeDimension: TimeDimension | undefined;

  /**
   * The period of the time window to gather statistics for. The valid value depends on the setting of the `timeDimension` field.
   *
   * - `Hours` - 1/3/6/12/24
   * - `Days` - 3
   * - `Weeks` - 1/2
   *
   * @public
   */
  timeValue: number | undefined;
}

/**
 * Provides parameters for setting the time window and duration for aggregating utterance data.
 *
 * @public
 */
export interface UtteranceAggregationDuration {
  /**
   * The desired time window for aggregating utterances.
   *
   * @public
   */
  relativeAggregationDuration: RelativeAggregationDuration | undefined;
}

/**
 * @public
 */
export interface ListAggregatedUtterancesRequest {
  /**
   * The unique identifier of the bot associated with this request.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale where the utterances were collected. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The time window for aggregating the utterance information. You can specify a time between one hour and two weeks.
   *
   * @public
   */
  aggregationDuration: UtteranceAggregationDuration | undefined;

  /**
   * Specifies sorting parameters for the list of utterances. You can sort by the hit count, the missed count, or the number of distinct sessions the utterance appeared in.
   *
   * @public
   */
  sortBy?: AggregatedUtterancesSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the utterances in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
   *
   * @public
   */
  filters?: AggregatedUtterancesFilter[] | undefined;

  /**
   * The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the `maxResults` parameter, 1,000 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListAggregatedUtterances` operation contains more results that specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAggregatedUtterancesResponse {
  /**
   * The identifier of the bot that contains the utterances.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The identifier of the bot alias that contains the utterances. If you specified the bot version, the bot alias ID isn't returned.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The identifier of the bot version that contains the utterances. If you specified the bot alias, the bot version isn't returned.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale that the utterances are in.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The time period used to aggregate the utterance data.
   *
   * @public
   */
  aggregationDuration?: UtteranceAggregationDuration | undefined;

  /**
   * The date and time that the aggregation window begins. Only data collected after this time is returned in the results.
   *
   * @public
   */
  aggregationWindowStartTime?: Date | undefined;

  /**
   * The date and time that the aggregation window ends. Only data collected between the start time and the end time are returned in the results.
   *
   * @public
   */
  aggregationWindowEndTime?: Date | undefined;

  /**
   * The last date and time that the aggregated data was collected. The time period depends on the length of the aggregation window.
   *
   * - **Hours** - for 1 hour time window, every half hour; otherwise every hour.
   * - **Days** - every 6 hours
   * - **Weeks** - for a one week time window, every 12 hours; otherwise, every day
   *
   * @public
   */
  aggregationLastRefreshedDateTime?: Date | undefined;

  /**
   * Summaries of the aggregated utterance data. Each response contains information about the number of times that the utterance was seen during the time period, whether it was detected or missed, and when it was seen during the time period.
   *
   * @public
   */
  aggregatedUtterancesSummaries?: AggregatedUtterancesSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListAggregatedUtterances` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListAggregatedUtterances` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotAliasesRequest {
  /**
   * The identifier of the bot to list aliases for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListBotAliases` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotAliasesResponse {
  /**
   * Summary information for the bot aliases that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more aliases available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  botAliasSummaries?: BotAliasSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListBotAliases` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListBotAliases` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The identifier of the bot associated with the aliases.
   *
   * @public
   */
  botId?: string | undefined;
}

/**
 * @public
 */
export interface ListBotAliasReplicasRequest {
  /**
   * The request for the unique bot ID of the replicated bot created from the source bot alias.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The request for the secondary region of the replicated bot created from the source bot alias.
   *
   * @public
   */
  replicaRegion: string | undefined;

  /**
   * The request for maximum results to list the replicated bots created from the source bot alias.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The request for the next token for the replicated bot created from the source bot alias.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotAliasReplicasResponse {
  /**
   * The unique bot ID of the replicated bot created from the source bot alias.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The source region of the replicated bot created from the source bot alias.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * The secondary region of the replicated bot created from the source bot alias.
   *
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * The summary information of the replicated bot created from the source bot alias.
   *
   * @public
   */
  botAliasReplicaSummaries?: BotAliasReplicaSummary[] | undefined;

  /**
   * The next token for the replicated bots created from the source bot alias.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotAnalyzerHistoryRequest {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The locale identifier to filter the history. If not specified, returns history for all locales.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The bot version to filter the history. If not specified, defaults to `DRAFT`.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * If the response from a previous request was truncated, the `nextToken` value is used to retrieve the next page of history entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of history entries to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBotAnalyzerHistoryResponse {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The locale identifier used to filter the history.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The bot version used to filter the history.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * A list of historical analysis executions, ordered by creation date with the most recent first.
   *
   * @public
   */
  botAnalyzerHistoryList?: BotAnalyzerHistorySummary[] | undefined;

  /**
   * If the response is truncated, this token can be used in a subsequent request to retrieve the next page of history entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotLocalesRequest {
  /**
   * The identifier of the bot to list locales for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to list locales for.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * Specifies sorting parameters for the list of locales. You can sort by locale name in ascending or descending order.
   *
   * @public
   */
  sortBy?: BotLocaleSortBy | undefined;

  /**
   * Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.
   *
   * @public
   */
  filters?: BotLocaleFilter[] | undefined;

  /**
   * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListBotLocales` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token as the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotLocalesResponse {
  /**
   * The identifier of the bot to list locales for.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListBotLocales` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListBotLocales` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Summary information for the locales that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more locales available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  botLocaleSummaries?: BotLocaleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListBotRecommendationsRequest {
  /**
   * The unique identifier of the bot that contains the bot recommendation list.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the bot recommendation list.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation list.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListBotRecommendation operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotRecommendationsResponse {
  /**
   * The unique identifier of the bot that contains the bot recommendation list.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the bot recommendation list.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation list.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * Summary information for the bot recommendations that meet the filter specified in this request. The length of the list is specified in the maxResults parameter of the request. If there are more bot recommendations available, the nextToken field contains a token to get the next page of results.
   *
   * @public
   */
  botRecommendationSummaries?: BotRecommendationSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the ListBotRecommendations operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotRecommendations operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotReplicasRequest {
  /**
   * The request for the unique bot IDs in the list of replicated bots.
   *
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface ListBotReplicasResponse {
  /**
   * the unique bot IDs in the list of replicated bots.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The source region of the source bots in the list of replicated bots.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * The summary details for the replicated bots.
   *
   * @public
   */
  botReplicaSummaries?: BotReplicaSummary[] | undefined;
}

/**
 * @public
 */
export interface ListBotResourceGenerationsRequest {
  /**
   * The unique identifier of the bot whose generation requests you want to view.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot whose generation requests you want to view.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The locale of the bot whose generation requests you want to view.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * An object containing information about the attribute and the method by which to sort the results
   *
   * @public
   */
  sortBy?: GenerationSortBy | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the number specified in the `maxResults`, the response returns a token in the `nextToken` field. Use this token when making a request to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotResourceGenerationsResponse {
  /**
   * The unique identifier of the bot for which the generation requests were made.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot for which the generation requests were made.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale of the bot for which the generation requests were made.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A list of objects, each containing information about a generation request for the bot locale.
   *
   * @public
   */
  generationSummaries?: GenerationSummary[] | undefined;

  /**
   * If the total number of results is greater than the number specified in the `maxResults`, the response returns a token in the `nextToken` field. Use this token when making a request to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * Specifies sorting parameters for the list of bots. You can specify that the list be sorted by bot name in ascending or descending order.
   *
   * @public
   */
  sortBy?: BotSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
   *
   * @public
   */
  filters?: BotFilter[] | undefined;

  /**
   * The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListBots` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response.
   *
   * Use the returned token in the `nextToken` parameter of a `ListBots` request to return the next page of results. For a complete set of results, call the `ListBots` operation until the `nextToken` returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * Summary information for the bots that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more bots available, the `nextToken` field contains a token to the next page of results.
   *
   * @public
   */
  botSummaries?: BotSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListBots` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListBots` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotVersionReplicasRequest {
  /**
   * The request for the unique ID in the list of replicated bots.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The request for the region used in the list of replicated bots.
   *
   * @public
   */
  replicaRegion: string | undefined;

  /**
   * The maximum results given in the list of replicated bots.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The next token given in the list of replicated bots.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The requested sort category for the list of replicated bots.
   *
   * @public
   */
  sortBy?: BotVersionReplicaSortBy | undefined;
}

/**
 * @public
 */
export interface ListBotVersionReplicasResponse {
  /**
   * The unique ID of the bots in the list of replicated bots.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The source region used for the bots in the list of replicated bots.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * The region used for the replicated bots in the list of replicated bots.
   *
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * The information summary used for the replicated bots in the list of replicated bots.
   *
   * @public
   */
  botVersionReplicaSummaries?: BotVersionReplicaSummary[] | undefined;

  /**
   * The next token used for the replicated bots in the list of replicated bots.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotVersionsRequest {
  /**
   * The identifier of the bot to list versions for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * Specifies sorting parameters for the list of versions. You can specify that the list be sorted by version name in either ascending or descending order.
   *
   * @public
   */
  sortBy?: BotVersionSortBy | undefined;

  /**
   * The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response to the `ListBotVersion` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotVersionsResponse {
  /**
   * The identifier of the bot to list versions for.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * Summary information for the bot versions that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more versions available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  botVersionSummaries?: BotVersionSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListBotVersions` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListBotAliases` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuiltInIntentsRequest {
  /**
   * The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Specifies sorting parameters for the list of built-in intents. You can specify that the list be sorted by the built-in intent signature in either ascending or descending order.
   *
   * @public
   */
  sortBy?: BuiltInIntentSortBy | undefined;

  /**
   * The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListBuiltInIntents` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuiltInIntentsResponse {
  /**
   * Summary information for the built-in intents that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more intents available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  builtInIntentSummaries?: BuiltInIntentSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListBuiltInIntents` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListBotAliases` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The language and locale of the intents in the list.
   *
   * @public
   */
  localeId?: string | undefined;
}

/**
 * @public
 */
export interface ListBuiltInSlotTypesRequest {
  /**
   * The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Determines the sort order for the response from the `ListBuiltInSlotTypes` operation. You can choose to sort by the slot type signature in either ascending or descending order.
   *
   * @public
   */
  sortBy?: BuiltInSlotTypeSortBy | undefined;

  /**
   * The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListBuiltInSlotTypes` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuiltInSlotTypesResponse {
  /**
   * Summary information for the built-in slot types that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more slot types available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListBuiltInSlotTypes` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `LIstBuiltInSlotTypes` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The language and locale of the slot types in the list.
   *
   * @public
   */
  localeId?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomVocabularyItemsRequest {
  /**
   * The identifier of the version of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The bot version of the bot to the list custom vocabulary request.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The maximum number of items returned by the list operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The nextToken identifier to the list custom vocabulary request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomVocabularyItemsResponse {
  /**
   * The identifier of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The identifier of the version of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see [Supported Languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The custom vocabulary items from the list custom vocabulary response.
   *
   * @public
   */
  customVocabularyItems?: CustomVocabularyItem[] | undefined;

  /**
   * The nextToken identifier to the list custom vocabulary response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsRequest {
  /**
   * The unique identifier that Amazon Lex assigned to the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot to list exports for.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * Determines the field that the list of exports is sorted by. You can sort by the `LastUpdatedDateTime` field in ascending or descending order.
   *
   * @public
   */
  sortBy?: ExportSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the exports in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
   *
   * @public
   */
  filters?: ExportFilter[] | undefined;

  /**
   * The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListExports` operation contains more results that specified in the `maxResults` parameter, a token is returned in the response.
   *
   * Use the returned token in the `nextToken` parameter of a `ListExports` request to return the next page of results. For a complete set of results, call the `ListExports` operation until the `nextToken` returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the resources that should be exported. If you don't specify a resource type in the `filters` parameter, both bot locales and custom vocabularies are exported.
   *
   * @public
   */
  localeId?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsResponse {
  /**
   * The unique identifier assigned to the bot by Amazon Lex.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that was exported.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * Summary information for the exports that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter. If there are more exports available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  exportSummaries?: ExportSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListExports` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListExports` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The locale specified in the request.
   *
   * @public
   */
  localeId?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsRequest {
  /**
   * The unique identifier that Amazon Lex assigned to the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot to list imports for.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * Determines the field that the list of imports is sorted by. You can sort by the `LastUpdatedDateTime` field in ascending or descending order.
   *
   * @public
   */
  sortBy?: ImportSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
   *
   * @public
   */
  filters?: ImportFilter[] | undefined;

  /**
   * The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListImports` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response.
   *
   * Use the returned token in the `nextToken` parameter of a `ListImports` request to return the next page of results. For a complete set of results, call the `ListImports` operation until the `nextToken` returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the locale that should be present in the list. If you don't specify a resource type in the `filters` parameter, the list contains both bot locales and custom vocabularies.
   *
   * @public
   */
  localeId?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsResponse {
  /**
   * The unique identifier assigned by Amazon Lex to the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that was imported. It will always be `DRAFT`.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * Summary information for the imports that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter. If there are more imports available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  importSummaries?: ImportSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListImports` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListImports` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The locale specified in the request.
   *
   * @public
   */
  localeId?: string | undefined;
}

/**
 * @public
 */
export interface ListIntentMetricsRequest {
  /**
   * The identifier for the bot for which you want to retrieve intent metrics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The timestamp that marks the beginning of the range of time for which you want to see intent metrics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see intent metrics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the order by which to organize the results.
   *
   * @public
   */
  metrics: AnalyticsIntentMetric[] | undefined;

  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   *
   * @public
   */
  binBy?: AnalyticsBinBySpecification[] | undefined;

  /**
   * A list of objects, each of which specifies how to group the results. You can group by the following criteria:
   *
   * - `IntentName` – The name of the intent.
   * - `IntentEndState` – The final state of the intent. The possible end states are detailed in [Key definitions](https://docs.aws.amazon.com/analytics-key-definitions-intents) in the user guide.
   *
   * @public
   */
  groupBy?: AnalyticsIntentGroupBySpecification[] | undefined;

  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsIntentFilter[] | undefined;

  /**
   * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntentMetricsResponse {
  /**
   * The identifier for the bot for which you retrieved intent metrics.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The results for the intent metrics.
   *
   * @public
   */
  results?: AnalyticsIntentResult[] | undefined;

  /**
   * If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntentPathsRequest {
  /**
   * The identifier for the bot for which you want to retrieve intent path metrics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The date and time that marks the beginning of the range of time for which you want to see intent path metrics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see intent path metrics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For example:
   *
   * - /BookCar
   * - /BookCar/BookHotel
   * - /BookHotel/BookCar
   *
   * @public
   */
  intentPath: string | undefined;

  /**
   * A list of objects, each describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsPathFilter[] | undefined;
}

/**
 * @public
 */
export interface ListIntentPathsResponse {
  /**
   * A list of objects, each of which contains information about a node in the intent path for which you requested metrics.
   *
   * @public
   */
  nodeSummaries?: AnalyticsIntentNodeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListIntentsRequest {
  /**
   * The unique identifier of the bot that contains the intent.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the intent.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Determines the sort order for the response from the `ListIntents` operation. You can choose to sort by the intent name or last updated date in either ascending or descending order.
   *
   * @public
   */
  sortBy?: IntentSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
   *
   * @public
   */
  filters?: IntentFilter[] | undefined;

  /**
   * The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListIntents` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response.
   *
   * Use the returned token in the `nextToken` parameter of a `ListIntents` request to return the next page of results. For a complete set of results, call the `ListIntents` operation until the `nextToken` returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntentsResponse {
  /**
   * The identifier of the bot that contains the intent.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the intent.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale of the intents in the list.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more intents available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  intentSummaries?: IntentSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListIntents` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListIntents` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntentStageMetricsRequest {
  /**
   * The identifier for the bot for which you want to retrieve intent stage metrics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The date and time that marks the beginning of the range of time for which you want to see intent stage metrics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see intent stage metrics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metrics: AnalyticsIntentStageMetric[] | undefined;

  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   *
   * @public
   */
  binBy?: AnalyticsBinBySpecification[] | undefined;

  /**
   * A list of objects, each of which specifies how to group the results. You can group by the following criteria:
   *
   * - `IntentStageName` – The name of the intent stage.
   * - `SwitchedToIntent` – The intent to which the conversation was switched (if any).
   *
   * @public
   */
  groupBy?: AnalyticsIntentStageGroupBySpecification[] | undefined;

  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsIntentStageFilter[] | undefined;

  /**
   * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntentStageMetricsResponse {
  /**
   * The identifier for the bot for which you retrieved intent stage metrics.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The results for the intent stage metrics.
   *
   * @public
   */
  results?: AnalyticsIntentStageResult[] | undefined;

  /**
   * If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendedIntentsRequest {
  /**
   * The unique identifier of the bot associated with the recommended intents.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the recommended intents.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the recommended intents.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the bot recommendation that contains the recommended intents.
   *
   * @public
   */
  botRecommendationId: string | undefined;

  /**
   * If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object that contains a summary of a recommended intent.
 *
 * @public
 */
export interface RecommendedIntentSummary {
  /**
   * The unique identifier of a recommended intent associated with the bot recommendation.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The name of a recommended intent associated with the bot recommendation.
   *
   * @public
   */
  intentName?: string | undefined;

  /**
   * The count of sample utterances of a recommended intent that is associated with a bot recommendation.
   *
   * @public
   */
  sampleUtterancesCount?: number | undefined;
}

/**
 * @public
 */
export interface ListRecommendedIntentsResponse {
  /**
   * The unique identifier of the bot associated with the recommended intent.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the intent.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The identifier of the bot recommendation that contains the recommended intent.
   *
   * @public
   */
  botRecommendationId?: string | undefined;

  /**
   * Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken field contains a token to get the next page of results.
   *
   * @public
   */
  summaryList?: RecommendedIntentSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the ListRecommendedIntents operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListRecommendedIntents operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object specifying the measure and method by which to sort the session analytics data.
 *
 * @public
 */
export interface SessionDataSortBy {
  /**
   * The measure by which to sort the session analytics data.
   *
   * - `conversationStartTime` – The date and time when the conversation began. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   * - `numberOfTurns` – The number of turns that the session took.
   * - `conversationDurationSeconds` – The duration of the conversation in seconds.
   *
   * @public
   */
  name: AnalyticsSessionSortByName | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  order: AnalyticsSortOrder | undefined;
}

/**
 * @public
 */
export interface ListSessionAnalyticsDataRequest {
  /**
   * The identifier for the bot for which you want to retrieve session analytics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The date and time that marks the beginning of the range of time for which you want to see session analytics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see session analytics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * An object specifying the measure and method by which to sort the session analytics data.
   *
   * @public
   */
  sortBy?: SessionDataSortBy | undefined;

  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsSessionFilter[] | undefined;

  /**
   * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object containing information about a specific session.
 *
 * @public
 */
export interface SessionSpecification {
  /**
   * The identifier of the alias of the bot that the session was held with.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The version of the bot that the session was held with.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale of the bot that the session was held with.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The channel that is integrated with the bot that the session was held with.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The identifier of the session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The date and time when the conversation began. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   *
   * @public
   */
  conversationStartTime?: Date | undefined;

  /**
   * The date and time when the conversation ended. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   *
   * @public
   */
  conversationEndTime?: Date | undefined;

  /**
   * The duration of the conversation in seconds. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   *
   * @public
   */
  conversationDurationSeconds?: number | undefined;

  /**
   * The final state of the conversation. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   *
   * @public
   */
  conversationEndState?: ConversationEndState | undefined;

  /**
   * The mode of the session. The possible values are as follows:
   *
   * - `Speech` – The session was spoken.
   * - `Text` – The session was written.
   * - `DTMF` – The session used a touch-tone keypad (Dual Tone Multi-Frequency).
   * - `MultiMode` – The session used multiple modes.
   *
   * @public
   */
  mode?: AnalyticsModality | undefined;

  /**
   * The number of turns that the session took.
   *
   * @public
   */
  numberOfTurns?: number | undefined;

  /**
   * A list of objects containing the name of an intent that was invoked.
   *
   * @public
   */
  invokedIntentSamples?: InvokedIntentSample[] | undefined;

  /**
   * The identifier of the first request in a session.
   *
   * @public
   */
  originatingRequestId?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionAnalyticsDataResponse {
  /**
   * The unique identifier of the bot that the sessions belong to.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of objects, each of which contains information about a session with the bot.
   *
   * @public
   */
  sessions?: SessionSpecification[] | undefined;
}

/**
 * @public
 */
export interface ListSessionMetricsRequest {
  /**
   * The identifier for the bot for which you want to retrieve session metrics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The date and time that marks the beginning of the range of time for which you want to see session metrics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see session metrics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metrics: AnalyticsSessionMetric[] | undefined;

  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   *
   * @public
   */
  binBy?: AnalyticsBinBySpecification[] | undefined;

  /**
   * A list of objects, each of which specifies how to group the results. You can group by the following criteria:
   *
   * - `ConversationEndState` – The final state of the conversation. The possible end states are detailed in [Key definitions](https://docs.aws.amazon.com/analytics-key-definitions-conversations) in the user guide.
   * - `LocaleId` – The unique identifier of the bot locale.
   *
   * @public
   */
  groupBy?: AnalyticsSessionGroupBySpecification[] | undefined;

  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsSessionFilter[] | undefined;

  /**
   * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionMetricsResponse {
  /**
   * The identifier for the bot for which you retrieved session metrics.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The results for the session metrics.
   *
   * @public
   */
  results?: AnalyticsSessionResult[] | undefined;

  /**
   * If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters the response from the `ListSlots` operation.
 *
 * @public
 */
export interface SlotFilter {
  /**
   * The name of the field to use for filtering.
   *
   * @public
   */
  name: SlotFilterName | undefined;

  /**
   * The value to use to filter the response.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify `EQ` when the `ListSlots` operation should return only aliases that equal the specified value. Specify `CO` when the `ListSlots` operation should return aliases that contain the specified value.
   *
   * @public
   */
  operator: SlotFilterOperator | undefined;
}

/**
 * Specifies attributes for sorting a list of bots.
 *
 * @public
 */
export interface SlotSortBy {
  /**
   * The attribute to use to sort the list.
   *
   * @public
   */
  attribute: SlotSortAttribute | undefined;

  /**
   * The order to sort the list. You can choose ascending or descending.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListSlotsRequest {
  /**
   * The identifier of the bot that contains the slot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the slot.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the slots to list. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The unique identifier of the intent that contains the slot.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * Determines the sort order for the response from the `ListSlots` operation. You can choose to sort by the slot name or last updated date in either ascending or descending order.
   *
   * @public
   */
  sortBy?: SlotSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
   *
   * @public
   */
  filters?: SlotFilter[] | undefined;

  /**
   * The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListSlots` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a slot, a value that the bot elicits from the user.
 *
 * @public
 */
export interface SlotSummary {
  /**
   * The unique identifier of the slot.
   *
   * @public
   */
  slotId?: string | undefined;

  /**
   * The name given to the slot.
   *
   * @public
   */
  slotName?: string | undefined;

  /**
   * The description of the slot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether the slot is required or optional. An intent is complete when all required slots are filled.
   *
   * @public
   */
  slotConstraint?: SlotConstraint | undefined;

  /**
   * The unique identifier for the slot type that defines the values for the slot.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * Prompts that are sent to the user to elicit a value for the slot.
   *
   * @public
   */
  valueElicitationPromptSpecification?: PromptSpecification | undefined;

  /**
   * The timestamp of the last date and time that the slot was updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSlotsResponse {
  /**
   * The identifier of the bot that contains the slots.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the slots.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale of the slots in the list.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The identifier of the intent that contains the slots.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * Summary information for the slots that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more slots available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  slotSummaries?: SlotSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListSlots` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListSlots` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters the response from the `ListSlotTypes` operation.
 *
 * @public
 */
export interface SlotTypeFilter {
  /**
   * The name of the field to use for filtering.
   *
   * @public
   */
  name: SlotTypeFilterName | undefined;

  /**
   * The value to use to filter the response.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify `EQ` when the `ListSlotTypes` operation should return only aliases that equal the specified value. Specify `CO` when the `ListSlotTypes` operation should return aliases that contain the specified value.
   *
   * @public
   */
  operator: SlotTypeFilterOperator | undefined;
}

/**
 * Specifies attributes for sorting a list of slot types.
 *
 * @public
 */
export interface SlotTypeSortBy {
  /**
   * The attribute to use to sort the list of slot types.
   *
   * @public
   */
  attribute: SlotTypeSortAttribute | undefined;

  /**
   * The order to sort the list. You can say ascending or descending.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListSlotTypesRequest {
  /**
   * The unique identifier of the bot that contains the slot types.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the slot type.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Determines the sort order for the response from the `ListSlotTypes` operation. You can choose to sort by the slot type name or last updated date in either ascending or descending order.
   *
   * @public
   */
  sortBy?: SlotTypeSortBy | undefined;

  /**
   * Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
   *
   * @public
   */
  filters?: SlotTypeFilter[] | undefined;

  /**
   * The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListSlotTypes` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Provides summary information about a slot type.
 *
 * @public
 */
export interface SlotTypeSummary {
  /**
   * The unique identifier assigned to the slot type.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * The name of the slot type.
   *
   * @public
   */
  slotTypeName?: string | undefined;

  /**
   * The description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * If the slot type is derived from a built-on slot type, the name of the parent slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * A timestamp of the date and time that the slot type was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Indicates the type of the slot type.
   *
   * - `Custom` - A slot type that you created using custom values. For more information, see [Creating custom slot types](https://docs.aws.amazon.com/lexv2/latest/dg/custom-slot-types.html).
   * - `Extended` - A slot type created by extending the `AMAZON.AlphaNumeric` built-in slot type. For more information, see [`AMAZON.AlphaNumeric`](https://docs.aws.amazon.com/lexv2/latest/dg/built-in-slot-alphanumerice.html).
   * - `ExternalGrammar` - A slot type using a custom GRXML grammar to define values. For more information, see [Using a custom grammar slot type](https://docs.aws.amazon.com/lexv2/latest/dg/building-grxml.html).
   *
   * @public
   */
  slotTypeCategory?: SlotTypeCategory | undefined;
}

/**
 * @public
 */
export interface ListSlotTypesResponse {
  /**
   * The identifier of the bot that contains the slot types.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the slot types.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and local of the slot types in the list.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * Summary information for the slot types that meet the filter criteria specified in the request. The length of the list is specified in the `maxResults` parameter of the request. If there are more slot types available, the `nextToken` field contains a token to get the next page of results.
   *
   * @public
   */
  slotTypeSummaries?: SlotTypeSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListSlotTypes` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListSlotTypes` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to get a list of tags for.
   *
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with a resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about the method by which to filter the results of the test execution.
 *
 * @public
 */
export interface TestExecutionResultFilterBy {
  /**
   * Specifies which results to filter. See [Test result details">Test results details](https://docs.aws.amazon.com/lexv2/latest/dg/test-results-details-test-set.html) for details about different types of results.
   *
   * @public
   */
  resultTypeFilter: TestResultTypeFilter | undefined;

  /**
   * Contains information about the method for filtering Conversation level test results.
   *
   * @public
   */
  conversationLevelTestResultsFilterBy?: ConversationLevelTestResultsFilterBy | undefined;
}

/**
 * @public
 */
export interface ListTestExecutionResultItemsRequest {
  /**
   * The unique identifier of the test execution to list the result items.
   *
   * @public
   */
  testExecutionId: string | undefined;

  /**
   * The filter for the list of results from the test set execution.
   *
   * @public
   */
  resultFilterBy: TestExecutionResultFilterBy | undefined;

  /**
   * The maximum number of test execution result items to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the `ListTestExecutionResultItems` operation contains more results than specified in the `maxResults` parameter, a token is returned in the response. Use that token in the `nextToken` parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the overall results for a test execution result.
 *
 * @public
 */
export interface OverallTestResultItem {
  /**
   * Indicates whether the conversation contains multiple turns or not.
   *
   * @public
   */
  multiTurnConversation: boolean | undefined;

  /**
   * The total number of overall results in the result of the test execution.
   *
   * @public
   */
  totalResultCount: number | undefined;

  /**
   * The number of speech transcription results in the overall test.
   *
   * @public
   */
  speechTranscriptionResultCounts?: Partial<Record<TestResultMatchStatus, number>> | undefined;

  /**
   * The number of results that succeeded.
   *
   * @public
   */
  endToEndResultCounts: Partial<Record<TestResultMatchStatus, number>> | undefined;
}

/**
 * Information about the overall test results.
 *
 * @public
 */
export interface OverallTestResults {
  /**
   * A list of the overall test results.
   *
   * @public
   */
  items: OverallTestResultItem[] | undefined;
}

/**
 * Contains information about the audio for an utterance.
 *
 * @public
 */
export interface UtteranceAudioInputSpecification {
  /**
   * Amazon S3 file pointing to the audio.
   *
   * @public
   */
  audioFileS3Location: string | undefined;
}

/**
 * Contains information about input of an utterance.
 *
 * @public
 */
export interface UtteranceInputSpecification {
  /**
   * A text input transcription of the utterance. It is only applicable for test-sets containing text data.
   *
   * @public
   */
  textInput?: string | undefined;

  /**
   * Contains information about the audio input for an utterance.
   *
   * @public
   */
  audioInput?: UtteranceAudioInputSpecification | undefined;
}

/**
 * Contains information about the method by which to sort the instances of test executions you have carried out.
 *
 * @public
 */
export interface TestExecutionSortBy {
  /**
   * Specifies whether to sort the test set executions by the date and time at which the test sets were created.
   *
   * @public
   */
  attribute: TestExecutionSortAttribute | undefined;

  /**
   * Specifies whether to sort in ascending or descending order.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListTestExecutionsRequest {
  /**
   * The sort order of the test set executions.
   *
   * @public
   */
  sortBy?: TestExecutionSortBy | undefined;

  /**
   * The maximum number of test executions to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListTestExecutions operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summarizes metadata about the test execution.
 *
 * @public
 */
export interface TestExecutionSummary {
  /**
   * The unique identifier of the test execution.
   *
   * @public
   */
  testExecutionId?: string | undefined;

  /**
   * The date and time at which the test execution was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time at which the test execution was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The current status of the test execution.
   *
   * @public
   */
  testExecutionStatus?: TestExecutionStatus | undefined;

  /**
   * The unique identifier of the test set used in the test execution.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The name of the test set used in the test execution.
   *
   * @public
   */
  testSetName?: string | undefined;

  /**
   * Contains information about the bot used for the test execution..
   *
   * @public
   */
  target?: TestExecutionTarget | undefined;

  /**
   * Specifies whether the API mode for the test execution is streaming or non-streaming.
   *
   * @public
   */
  apiMode?: TestExecutionApiMode | undefined;

  /**
   * Specifies whether the data used for the test execution is written or spoken.
   *
   * @public
   */
  testExecutionModality?: TestExecutionModality | undefined;
}

/**
 * @public
 */
export interface ListTestExecutionsResponse {
  /**
   * The list of test executions.
   *
   * @public
   */
  testExecutions?: TestExecutionSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the ListTestExecutions operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestExecutions operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestSetRecordsRequest {
  /**
   * The identifier of the test set to list its test set records.
   *
   * @public
   */
  testSetId: string | undefined;

  /**
   * The maximum number of test set records to return in each page. If there are fewer records than the max page size, only the actual number of records are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListTestSetRecords operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about the methods by which to sort the test set.
 *
 * @public
 */
export interface TestSetSortBy {
  /**
   * Specifies whether to sort the test sets by name or by the time they were last updated.
   *
   * @public
   */
  attribute: TestSetSortAttribute | undefined;

  /**
   * Specifies whether to sort in ascending or descending order.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListTestSetsRequest {
  /**
   * The sort order for the list of test sets.
   *
   * @public
   */
  sortBy?: TestSetSortBy | undefined;

  /**
   * The maximum number of test sets to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListTestSets operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about the test set.
 *
 * @public
 */
export interface TestSetSummary {
  /**
   * The unique identifier of the test set.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The name of the test set.
   *
   * @public
   */
  testSetName?: string | undefined;

  /**
   * The description of the test set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the test set contains written or spoken data.
   *
   * @public
   */
  modality?: TestSetModality | undefined;

  /**
   * The status of the test set.
   *
   * @public
   */
  status?: TestSetStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The number of turns in the test set.
   *
   * @public
   */
  numTurns?: number | undefined;

  /**
   * Contains information about the location at which the test set is stored.
   *
   * @public
   */
  storageLocation?: TestSetStorageLocation | undefined;

  /**
   * The date and time at which the test set was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time at which the test set was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTestSetsResponse {
  /**
   * The selected test sets in a list of test sets.
   *
   * @public
   */
  testSets?: TestSetSummary[] | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the ListTestSets operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSets operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object specifying the measure and method by which to sort the utterance data.
 *
 * @public
 */
export interface UtteranceDataSortBy {
  /**
   * The measure by which to sort the utterance analytics data.
   *
   * - `Count` – The number of utterances.
   * - `UtteranceTimestamp` – The date and time of the utterance.
   *
   * @public
   */
  name: AnalyticsUtteranceSortByName | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  order: AnalyticsSortOrder | undefined;
}

/**
 * @public
 */
export interface ListUtteranceAnalyticsDataRequest {
  /**
   * The identifier for the bot for which you want to retrieve utterance analytics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The date and time that marks the beginning of the range of time for which you want to see utterance analytics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see utterance analytics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * An object specifying the measure and method by which to sort the utterance analytics data.
   *
   * @public
   */
  sortBy?: UtteranceDataSortBy | undefined;

  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsUtteranceFilter[] | undefined;

  /**
   * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains a response to the utterance from the bot.
 *
 * @public
 */
export interface UtteranceBotResponse {
  /**
   * The text of the response to the utterance from the bot.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The type of the response. The following values are possible:
   *
   * - `PlainText` – A plain text string.
   * - `CustomPayload` – A response string that you can customize to include data or metadata for your application.
   * - `SSML` – A string that includes Speech Synthesis Markup Language to customize the audio response.
   * - `ImageResponseCard` – An image with buttons that the customer can select. See [ImageResponseCard](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_ImageResponseCard.html) for more information.
   *
   * @public
   */
  contentType?: UtteranceContentType | undefined;

  /**
   * A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform.
   *
   * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
   *
   * @public
   */
  imageResponseCard?: ImageResponseCard | undefined;
}

/**
 * An object containing information about a specific utterance.
 *
 * @public
 */
export interface UtteranceSpecification {
  /**
   * The identifier of the alias of the bot that the utterance was made to.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The version of the bot that the utterance was made to.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale of the bot that the utterance was made to.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The identifier of the session that the utterance was made in.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The channel that is integrated with the bot that the utterance was made to.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The mode of the session. The possible values are as follows:
   *
   * - `Speech` – The session consisted of spoken dialogue.
   * - `Text` – The session consisted of written dialogue.
   * - `DTMF` – The session consisted of touch-tone keypad (Dual Tone Multi-Frequency) key presses.
   * - `MultiMode` – The session consisted of multiple modes.
   *
   * @public
   */
  mode?: AnalyticsModality | undefined;

  /**
   * The date and time when the conversation in which the utterance took place began. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   *
   * @public
   */
  conversationStartTime?: Date | undefined;

  /**
   * The date and time when the conversation in which the utterance took place ended. A conversation is defined as a unique combination of a `sessionId` and an `originatingRequestId`.
   *
   * @public
   */
  conversationEndTime?: Date | undefined;

  /**
   * The text of the utterance.
   *
   * @public
   */
  utterance?: string | undefined;

  /**
   * The date and time when the utterance took place.
   *
   * @public
   */
  utteranceTimestamp?: Date | undefined;

  /**
   * The duration in milliseconds of the audio associated with the utterance.
   *
   * @public
   */
  audioVoiceDurationMillis?: number | undefined;

  /**
   * Specifies whether the bot understood the utterance or not.
   *
   * @public
   */
  utteranceUnderstood?: boolean | undefined;

  /**
   * The input type of the utterance. The possible values are as follows:
   *
   * - PCM format: audio data must be in little-endian byte order.
   *
   *   - `audio/l16; rate=16000; channels=1`
   *   - `audio/x-l16; sample-rate=16000; channel-count=1`
   *   - `audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false`
   * - Opus format
   *
   *   - `audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4`
   * - Text format
   *
   *   - `text/plain; charset=utf-8`
   *
   * @public
   */
  inputType?: string | undefined;

  /**
   * The output type of the utterance. The possible values are as follows:
   *
   * - `audio/mpeg`
   * - `audio/ogg`
   * - `audio/pcm (16 KHz)`
   * - `audio/` (defaults to `mpeg`)
   * - `text/plain; charset=utf-8`
   *
   * @public
   */
  outputType?: string | undefined;

  /**
   * The name of the intent that the utterance is associated to.
   *
   * @public
   */
  associatedIntentName?: string | undefined;

  /**
   * The name of the slot that the utterance is associated to.
   *
   * @public
   */
  associatedSlotName?: string | undefined;

  /**
   * The state of the intent that the utterance is associated to.
   *
   * @public
   */
  intentState?: IntentState | undefined;

  /**
   * The type of dialog action that the utterance is associated to. See the `type` field in [DialogAction](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_DialogAction.html) for more information.
   *
   * @public
   */
  dialogActionType?: string | undefined;

  /**
   * The identifier for the audio of the bot response.
   *
   * @public
   */
  botResponseAudioVoiceId?: string | undefined;

  /**
   * The slots that have been filled in the session by the time of the utterance.
   *
   * @public
   */
  slotsFilledInSession?: string | undefined;

  /**
   * The identifier of the request associated with the utterance.
   *
   * @public
   */
  utteranceRequestId?: string | undefined;

  /**
   * A list of objects containing information about the bot response to the utterance.
   *
   * @public
   */
  botResponses?: UtteranceBotResponse[] | undefined;
}

/**
 * @public
 */
export interface ListUtteranceAnalyticsDataResponse {
  /**
   * The unique identifier of the bot that the utterances belong to.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of objects, each of which contains information about an utterance in a user session with your bot.
   *
   * @public
   */
  utterances?: UtteranceSpecification[] | undefined;
}

/**
 * @public
 */
export interface ListUtteranceMetricsRequest {
  /**
   * The identifier for the bot for which you want to retrieve utterance metrics.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The date and time that marks the beginning of the range of time for which you want to see utterance metrics.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * The date and time that marks the end of the range of time for which you want to see utterance metrics.
   *
   * @public
   */
  endDateTime: Date | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metrics: AnalyticsUtteranceMetric[] | undefined;

  /**
   * A list of objects, each of which contains specifications for organizing the results by time.
   *
   * @public
   */
  binBy?: AnalyticsBinBySpecification[] | undefined;

  /**
   * A list of objects, each of which specifies how to group the results. You can group by the following criteria:
   *
   * - `UtteranceText` – The transcription of the utterance.
   * - `UtteranceState` – The state of the utterance. The possible states are detailed in [Key definitions](https://docs.aws.amazon.com/analytics-key-definitions-utterances) in the user guide.
   *
   * @public
   */
  groupBy?: AnalyticsUtteranceGroupBySpecification[] | undefined;

  /**
   * A list containing attributes related to the utterance that you want the response to return. The following attributes are possible:
   *
   * - `LastUsedIntent` – The last used intent at the time of the utterance.
   *
   * @public
   */
  attributes?: AnalyticsUtteranceAttribute[] | undefined;

  /**
   * A list of objects, each of which describes a condition by which you want to filter the results.
   *
   * @public
   */
  filters?: AnalyticsUtteranceFilter[] | undefined;

  /**
   * The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUtteranceMetricsResponse {
  /**
   * The identifier for the bot for which you retrieved utterance metrics.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The results for the utterance metrics.
   *
   * @public
   */
  results?: AnalyticsUtteranceResult[] | undefined;

  /**
   * If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response.
   *
   * Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchAssociatedTranscriptsRequest {
  /**
   * The unique identifier of the bot associated with the transcripts that you are searching.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot containing the transcripts that you are searching.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The unique identifier of the bot recommendation associated with the transcripts to search.
   *
   * @public
   */
  botRecommendationId: string | undefined;

  /**
   * How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.
   *
   * @public
   */
  searchOrder?: SearchOrder | undefined;

  /**
   * A list of filter objects.
   *
   * @public
   */
  filters: AssociatedTranscriptFilter[] | undefined;

  /**
   * The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.
   *
   * @public
   */
  nextIndex?: number | undefined;
}

/**
 * @public
 */
export interface SearchAssociatedTranscriptsResponse {
  /**
   * The unique identifier of the bot associated with the transcripts that you are searching.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot containing the transcripts that you are searching.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The unique identifier of the bot recommendation associated with the transcripts to search.
   *
   * @public
   */
  botRecommendationId?: string | undefined;

  /**
   * A index that indicates whether there are more results to return in a response to the SearchAssociatedTranscripts operation. If the nextIndex field is present, you send the contents as the nextIndex parameter of a SearchAssociatedTranscriptsRequest operation to get the next page of results.
   *
   * @public
   */
  nextIndex?: number | undefined;

  /**
   * The object that contains the associated transcript that meet the criteria you specified.
   *
   * @public
   */
  associatedTranscripts?: AssociatedTranscript[] | undefined;

  /**
   * The total number of transcripts returned by the search.
   *
   * @public
   */
  totalResults?: number | undefined;
}

/**
 * @public
 */
export interface StartBotAnalyzerRequest {
  /**
   * The unique identifier of the bot to analyze.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The scope of analysis to perform. Currently only `BotLocale` scope is supported.
   *
   * Valid Values: `BotLocale`
   *
   * @public
   */
  analysisScope: AnalysisScope | undefined;

  /**
   * The locale identifier for the bot locale to analyze. Required when `analysisScope` is `BotLocale`.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The version of the bot to analyze. Defaults to `DRAFT` if not specified.
   *
   * @public
   */
  botVersion?: string | undefined;
}

/**
 * @public
 */
export interface StartBotAnalyzerResponse {
  /**
   * The unique identifier of the bot being analyzed.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot being analyzed.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale identifier of the bot locale being analyzed.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The current status of the analysis. The initial status is `Processing`.
   *
   * Valid Values: `Processing | Available | Failed | Stopping | Stopped`
   *
   * @public
   */
  botAnalyzerStatus?: BotAnalyzerStatus | undefined;

  /**
   * A unique identifier for this analysis request. Use this identifier to check the status and retrieve results.
   *
   * @public
   */
  botAnalyzerRequestId?: string | undefined;

  /**
   * The date and time when the analysis was initiated.
   *
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface StartBotRecommendationRequest {
  /**
   * The unique identifier of the bot containing the bot recommendation.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot containing the bot recommendation.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.
   *
   * @public
   */
  transcriptSourceSetting: TranscriptSourceSetting | undefined;

  /**
   * The object representing the passwords that will be used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.
   *
   * @public
   */
  encryptionSetting?: EncryptionSetting | undefined;
}

/**
 * @public
 */
export interface StartBotRecommendationResponse {
  /**
   * The unique identifier of the bot containing the bot recommendation.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot containing the bot recommendation.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of the bot recommendation.
   *
   * If the status is Failed, then the reasons for the failure are listed in the failureReasons field.
   *
   * @public
   */
  botRecommendationStatus?: BotRecommendationStatus | undefined;

  /**
   * The identifier of the bot recommendation that you have created.
   *
   * @public
   */
  botRecommendationId?: string | undefined;

  /**
   * A timestamp of the date and time that the bot recommendation was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.
   *
   * @public
   */
  transcriptSourceSetting?: TranscriptSourceSetting | undefined;

  /**
   * The object representing the passwords that were used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.
   *
   * @public
   */
  encryptionSetting?: EncryptionSetting | undefined;
}

/**
 * @public
 */
export interface StartBotResourceGenerationRequest {
  /**
   * The prompt to generate intents and slot types for the bot locale. Your description should be both *detailed* and *precise* to help generate appropriate and sufficient intents for your bot. Include a list of actions to improve the intent creation process.
   *
   * @public
   */
  generationInputPrompt: string | undefined;

  /**
   * The unique identifier of the bot for which to generate intents and slot types.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot for which to generate intents and slot types.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The locale of the bot for which to generate intents and slot types.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface StartBotResourceGenerationResponse {
  /**
   * The prompt that was used generate intents and slot types for the bot locale.
   *
   * @public
   */
  generationInputPrompt?: string | undefined;

  /**
   * The unique identifier of the generation request.
   *
   * @public
   */
  generationId?: string | undefined;

  /**
   * The unique identifier of the bot for which the generation request was made.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot for which the generation request was made.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale of the bot for which the generation request was made.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of the generation request.
   *
   * @public
   */
  generationStatus?: GenerationStatus | undefined;

  /**
   * The date and time at which the generation request was made.
   *
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface StartImportRequest {
  /**
   * The unique identifier for the import. It is included in the response from the [CreateUploadUrl](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html) operation.
   *
   * @public
   */
  importId: string | undefined;

  /**
   * Parameters for creating the bot, bot locale or custom vocabulary.
   *
   * @public
   */
  resourceSpecification: ImportResourceSpecification | undefined;

  /**
   * The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is `FailOnConflict` existing resources are not overwritten and the import fails.
   *
   * @public
   */
  mergeStrategy: MergeStrategy | undefined;

  /**
   * The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.
   *
   * @public
   */
  filePassword?: string | undefined;
}

/**
 * @public
 */
export interface StartImportResponse {
  /**
   * A unique identifier for the import.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The parameters used when importing the resource.
   *
   * @public
   */
  resourceSpecification?: ImportResourceSpecification | undefined;

  /**
   * The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is `FailOnConflict` existing resources are not overwritten and the import fails.
   *
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * The current status of the import. When the status is `Complete` the bot, bot alias, or custom vocabulary is ready to use.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * The date and time that the import request was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface StartTestExecutionRequest {
  /**
   * The test set Id for the test set execution.
   *
   * @public
   */
  testSetId: string | undefined;

  /**
   * The target bot for the test set execution.
   *
   * @public
   */
  target: TestExecutionTarget | undefined;

  /**
   * Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
   *
   * @public
   */
  apiMode: TestExecutionApiMode | undefined;

  /**
   * Indicates whether audio or text is used.
   *
   * @public
   */
  testExecutionModality?: TestExecutionModality | undefined;
}

/**
 * @public
 */
export interface StartTestExecutionResponse {
  /**
   * The unique identifier of the test set execution.
   *
   * @public
   */
  testExecutionId?: string | undefined;

  /**
   * The creation date and time for the test set execution.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The test set Id for the test set execution.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The target bot for the test set execution.
   *
   * @public
   */
  target?: TestExecutionTarget | undefined;

  /**
   * Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
   *
   * @public
   */
  apiMode?: TestExecutionApiMode | undefined;

  /**
   * Indicates whether audio or text is used.
   *
   * @public
   */
  testExecutionModality?: TestExecutionModality | undefined;
}

/**
 * @public
 */
export interface StartTestSetGenerationRequest {
  /**
   * The test set name for the test set generation request.
   *
   * @public
   */
  testSetName: string | undefined;

  /**
   * The test set description for the test set generation request.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon S3 storage location for the test set generation.
   *
   * @public
   */
  storageLocation: TestSetStorageLocation | undefined;

  /**
   * The data source for the test set generation.
   *
   * @public
   */
  generationDataSource: TestSetGenerationDataSource | undefined;

  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the `UpdateTestSet` operation to update tags. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  testSetTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartTestSetGenerationResponse {
  /**
   * The unique identifier of the test set generation to describe.
   *
   * @public
   */
  testSetGenerationId?: string | undefined;

  /**
   * The creation date and time for the test set generation.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The status for the test set generation.
   *
   * @public
   */
  testSetGenerationStatus?: TestSetGenerationStatus | undefined;

  /**
   * The test set name used for the test set generation.
   *
   * @public
   */
  testSetName?: string | undefined;

  /**
   * The description used for the test set generation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon S3 storage location for the test set generation.
   *
   * @public
   */
  storageLocation?: TestSetStorageLocation | undefined;

  /**
   * The data source for the test set generation.
   *
   * @public
   */
  generationDataSource?: TestSetGenerationDataSource | undefined;

  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A list of tags that was used for the test set that is being generated.
   *
   * @public
   */
  testSetTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StopBotAnalyzerRequest {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The unique identifier of the analysis request to stop.
   *
   * @public
   */
  botAnalyzerRequestId: string | undefined;
}

/**
 * @public
 */
export interface StopBotAnalyzerResponse {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale identifier of the bot locale.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The updated status of the analysis. The status will be `Stopping` and will eventually transition to `Stopped`.
   *
   * Valid Values: `Processing | Available | Failed | Stopping | Stopped`
   *
   * @public
   */
  botAnalyzerStatus?: BotAnalyzerStatus | undefined;

  /**
   * The unique identifier of the analysis request.
   *
   * @public
   */
  botAnalyzerRequestId?: string | undefined;
}

/**
 * @public
 */
export interface StopBotRecommendationRequest {
  /**
   * The unique identifier of the bot containing the bot recommendation to be stopped.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot containing the bot recommendation.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to stop. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The unique identifier of the bot recommendation to be stopped.
   *
   * @public
   */
  botRecommendationId: string | undefined;
}

/**
 * @public
 */
export interface StopBotRecommendationResponse {
  /**
   * The unique identifier of the bot containing the bot recommendation that is being stopped.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot containing the recommendation that is being stopped.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the bot response to stop. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the failureReasons field.
   *
   * @public
   */
  botRecommendationStatus?: BotRecommendationStatus | undefined;

  /**
   * The unique identifier of the bot recommendation that is being stopped.
   *
   * @public
   */
  botRecommendationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove the tags from.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBotRequest {
  /**
   * The unique identifier of the bot to update. This identifier is returned by the [CreateBot](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html) operation.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The new name of the bot. The name must be unique in the account that creates the bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * A description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Provides information on additional privacy protections Amazon Lex should use with the bot's data.
   *
   * @public
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.
   *
   * You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
   *
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * The type of the bot to be updated.
   *
   * @public
   */
  botType?: BotType | undefined;

  /**
   * The list of bot members in the network associated with the update action.
   *
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * Allows you to modify how Amazon Lex logs errors during bot interactions, including destinations for error logs and the types of errors to be captured.
   *
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * The unique identifier of the bot that was updated.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The name of the bot after the update.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The description of the bot after the update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the bot after the update.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The data privacy settings for the bot after the update.
   *
   * @public
   */
  dataPrivacy?: DataPrivacy | undefined;

  /**
   * The session timeout, in seconds, for the bot after the update.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * Shows the current status of the bot. The bot is first in the `Creating` status. Once the bot is read for use, it changes to the `Available` status. After the bot is created, you can use the `DRAFT` version of the bot.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * A timestamp of the date and time that the bot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the bot was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The type of the bot that was updated.
   *
   * @public
   */
  botType?: BotType | undefined;

  /**
   * The list of bot members in the network that was updated.
   *
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * Settings for managing error logs within the response of an update bot operation.
   *
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * @public
 */
export interface UpdateBotAliasRequest {
  /**
   * The unique identifier of the bot alias.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The new name to assign to the bot alias.
   *
   * @public
   */
  botAliasName: string | undefined;

  /**
   * The new description to assign to the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The new bot version to assign to the bot alias.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The new Lambda functions to use in each locale for the bot alias.
   *
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * The new settings for storing conversation logs in Amazon CloudWatch Logs and Amazon S3 buckets.
   *
   * @public
   */
  conversationLogSettings?: ConversationLogSettings | undefined;

  /**
   * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
   *
   * @public
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined;

  /**
   * The identifier of the bot with the updated alias.
   *
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface UpdateBotAliasResponse {
  /**
   * The identifier of the updated bot alias.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The updated name of the bot alias.
   *
   * @public
   */
  botAliasName?: string | undefined;

  /**
   * The updated description of the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated version of the bot that the alias points to.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The updated Lambda functions to use in each locale for the bot alias.
   *
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * The updated settings for storing conversation logs in Amazon CloudWatch Logs and Amazon S3 buckets.
   *
   * @public
   */
  conversationLogSettings?: ConversationLogSettings | undefined;

  /**
   * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
   *
   * @public
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined;

  /**
   * The current status of the bot alias. When the status is `Available` the alias is ready for use.
   *
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;

  /**
   * The identifier of the bot with the updated alias.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * A timestamp of the date and time that the bot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the bot was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBotLocaleRequest {
  /**
   * The unique identifier of the bot that contains the locale.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the locale to be updated. The version can only be the `DRAFT` version.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale to update. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The new description of the locale.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The new confidence threshold where Amazon Lex inserts the `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` intents in the list of possible intents for an utterance.
   *
   * @public
   */
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * The new Amazon Polly voice Amazon Lex should use for voice interaction with the user.
   *
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * Updated unified speech settings to apply to the bot locale.
   *
   * @public
   */
  unifiedSpeechSettings?: UnifiedSpeechSettings | undefined;

  /**
   * Updated audio filler settings to apply to the bot locale. When enabled, requires `unifiedSpeechSettings` (speech-to-speech) to be configured on the bot locale.
   *
   * @public
   */
  audioFillerSettings?: AudioFillerSettings | undefined;

  /**
   * Updated speech-to-text settings to apply to the bot locale.
   *
   * @public
   */
  speechRecognitionSettings?: SpeechRecognitionSettings | undefined;

  /**
   * Contains settings for generative AI features powered by Amazon Bedrock for your bot locale. Use this object to turn generative AI features on and off. Pricing may differ if you turn a feature on. For more information, see LINK.
   *
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;

  /**
   * The new sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize speech recognition accuracy by adjusting how the system responds to background noise during voice interactions.
   *
   * @public
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity | undefined;

  /**
   * The updated speaker diarization settings to apply to the bot locale. If you omit this field, Amazon Lex keeps the setting currently stored on the bot locale. To turn speaker diarization off, set `enabled` to `false` explicitly.
   *
   * @public
   */
  speakerDiarizationSettings?: SpeakerDiarizationSettings | undefined;
}

/**
 * @public
 */
export interface UpdateBotLocaleResponse {
  /**
   * The identifier of the bot that contains the updated locale.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the updated locale.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale of the updated bot locale.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The updated locale name for the locale.
   *
   * @public
   */
  localeName?: string | undefined;

  /**
   * The updated description of the locale.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated confidence threshold for inserting the `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` intents in the list of possible intents for an utterance.
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * The updated Amazon Polly voice to use for voice interaction with the user.
   *
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * The updated unified speech settings for the bot locale.
   *
   * @public
   */
  unifiedSpeechSettings?: UnifiedSpeechSettings | undefined;

  /**
   * The updated audio filler settings for the bot locale.
   *
   * @public
   */
  audioFillerSettings?: AudioFillerSettings | undefined;

  /**
   * The updated speech-to-text settings for the bot locale.
   *
   * @public
   */
  speechRecognitionSettings?: SpeechRecognitionSettings | undefined;

  /**
   * The current status of the locale. When the bot status is `Built` the locale is ready for use.
   *
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * If the `botLocaleStatus` is `Failed`, the `failureReasons` field lists the errors that occurred while building the bot.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * A timestamp of the date and time that the locale was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the locale was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Recommended actions to take to resolve an error in the `failureReasons` field.
   *
   * @public
   */
  recommendedActions?: string[] | undefined;

  /**
   * Contains settings for generative AI features powered by Amazon Bedrock for your bot locale.
   *
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;

  /**
   * The updated sensitivity level for voice activity detection (VAD) in the bot locale.
   *
   * @public
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity | undefined;

  /**
   * The updated speaker diarization settings for the bot locale.
   *
   * @public
   */
  speakerDiarizationSettings?: SpeakerDiarizationSettings | undefined;
}

/**
 * @public
 */
export interface UpdateBotRecommendationRequest {
  /**
   * The unique identifier of the bot containing the bot recommendation to be updated.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot containing the bot recommendation to be updated.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The unique identifier of the bot recommendation to be updated.
   *
   * @public
   */
  botRecommendationId: string | undefined;

  /**
   * The object representing the passwords that will be used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.
   *
   * @public
   */
  encryptionSetting: EncryptionSetting | undefined;
}

/**
 * @public
 */
export interface UpdateBotRecommendationResponse {
  /**
   * The unique identifier of the bot containing the bot recommendation that has been updated.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot containing the bot recommendation that has been updated.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of the bot recommendation.
   *
   * If the status is Failed, then the reasons for the failure are listed in the failureReasons field.
   *
   * @public
   */
  botRecommendationStatus?: BotRecommendationStatus | undefined;

  /**
   * The unique identifier of the bot recommendation to be updated.
   *
   * @public
   */
  botRecommendationId?: string | undefined;

  /**
   * A timestamp of the date and time that the bot recommendation was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the bot recommendation was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.
   *
   * @public
   */
  transcriptSourceSetting?: TranscriptSourceSetting | undefined;

  /**
   * The object representing the passwords that were used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.
   *
   * @public
   */
  encryptionSetting?: EncryptionSetting | undefined;
}

/**
 * @public
 */
export interface UpdateExportRequest {
  /**
   * The unique identifier Amazon Lex assigned to the export.
   *
   * @public
   */
  exportId: string | undefined;

  /**
   * The new password to use to encrypt the export zip archive.
   *
   * @public
   */
  filePassword?: string | undefined;
}

/**
 * @public
 */
export interface UpdateExportResponse {
  /**
   * The unique identifier Amazon Lex assigned to the export.
   *
   * @public
   */
  exportId?: string | undefined;

  /**
   * A description of the type of resource that was exported, either a bot or a bot locale.
   *
   * @public
   */
  resourceSpecification?: ExportResourceSpecification | undefined;

  /**
   * The file format used for the files that define the resource. The `TSV` format is required to export a custom vocabulary only; otherwise use `LexJson` format.
   *
   * @public
   */
  fileFormat?: ImportExportFileFormat | undefined;

  /**
   * The status of the export. When the status is `Completed` the export archive is available for download.
   *
   * @public
   */
  exportStatus?: ExportStatus | undefined;

  /**
   * The date and time that the export was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time that the export was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see [IAM JSON policy reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html).
   *
   * If the policy isn't valid, Amazon Lex returns a validation exception.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * The identifier of the revision of the policy to update. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.
   *
   * If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSlotTypeRequest {
  /**
   * The unique identifier of the slot type to update.
   *
   * @public
   */
  slotTypeId: string | undefined;

  /**
   * The new name of the slot type.
   *
   * @public
   */
  slotTypeName: string | undefined;

  /**
   * The new description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A new list of values and their optional synonyms that define the values that the slot type can take.
   *
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * The strategy that Amazon Lex should use when deciding on a value from the list of slot type values.
   *
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * The new built-in slot type that should be used as the parent of this slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * The identifier of the bot that contains the slot type.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the slot type. Must be `DRAFT`.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Provides information about the external source of the slot type's definition.
   *
   * @public
   */
  externalSourceSetting?: ExternalSourceSetting | undefined;

  /**
   * Specifications for a composite slot type.
   *
   * @public
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting | undefined;
}

/**
 * @public
 */
export interface UpdateSlotTypeResponse {
  /**
   * The unique identifier of the updated slot type.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * The updated name of the slot type.
   *
   * @public
   */
  slotTypeName?: string | undefined;

  /**
   * The updated description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated values that the slot type provides.
   *
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * The updated strategy that Amazon Lex uses to determine which value to select from the slot type.
   *
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * The updated signature of the built-in slot type that is the parent of this slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * The identifier of the bot that contains the slot type.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the slot type. This is always `DRAFT`.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale of the updated slot type.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The timestamp of the date and time that the slot type was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the slot type was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Provides information about the external source of the slot type's definition.
   *
   * @public
   */
  externalSourceSetting?: ExternalSourceSetting | undefined;

  /**
   * Specifications for a composite slot type.
   *
   * @public
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting | undefined;
}

/**
 * @public
 */
export interface UpdateTestSetRequest {
  /**
   * The test set Id for which update test operation to be performed.
   *
   * @public
   */
  testSetId: string | undefined;

  /**
   * The new test set name.
   *
   * @public
   */
  testSetName: string | undefined;

  /**
   * The new test set description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTestSetResponse {
  /**
   * The test set Id for which update test operation to be performed.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The test set name for the updated test set.
   *
   * @public
   */
  testSetName?: string | undefined;

  /**
   * The test set description for the updated test set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether audio or text is used for the updated test set.
   *
   * @public
   */
  modality?: TestSetModality | undefined;

  /**
   * The status for the updated test set.
   *
   * @public
   */
  status?: TestSetStatus | undefined;

  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The number of conversation turns from the updated test set.
   *
   * @public
   */
  numTurns?: number | undefined;

  /**
   * The Amazon S3 storage location for the updated test set.
   *
   * @public
   */
  storageLocation?: TestSetStorageLocation | undefined;

  /**
   * The creation date and time for the updated test set.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time of the last update for the updated test set.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * Provides an array of phrases that should be given preference when resolving values for a slot.
 *
 * @public
 */
export interface RuntimeHintDetails {
  /**
   * One or more strings that Amazon Lex should look for in the input to the bot. Each phrase is given preference when deciding on slot values.
   *
   * @public
   */
  runtimeHintValues?: RuntimeHintValue[] | undefined;

  /**
   * A map of constituent sub slot names inside a composite slot in the intent and the phrases that should be added for each sub slot. Inside each composite slot hints, this structure provides a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots. The intent name, composite slot name and the constituent sub slot names must exist.
   *
   * @public
   */
  subSlotHints?: Record<string, RuntimeHintDetails> | undefined;
}

/**
 * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
 *
 * @public
 */
export interface SlotValueOverride {
  /**
   * When the shape value is `List`, it indicates that the `values` field contains a list of slot values. When the value is `Scalar`, it indicates that the `value` field contains a single value.
   *
   * @public
   */
  shape?: SlotShape | undefined;

  /**
   * The current value of the slot.
   *
   * @public
   */
  value?: SlotValue | undefined;

  /**
   * A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
   *
   * @public
   */
  values?: SlotValueOverride[] | undefined;
}

/**
 * Override settings to configure the intent state.
 *
 * @public
 */
export interface IntentOverride {
  /**
   * The name of the intent. Only required when you're switching intents.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A map of all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden.
   *
   * @public
   */
  slots?: Record<string, SlotValueOverride> | undefined;
}

/**
 * You can provide Amazon Lex with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.
 *
 * Before you can use runtime hints with an existing bot, you must first rebuild the bot.
 *
 * For more information, see [Using runtime hints to improve recognition of slot values](https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html).
 *
 * @public
 */
export interface RuntimeHints {
  /**
   * A list of the slots in the intent that should have runtime hints added, and the phrases that should be added for each slot.
   *
   * The first level of the `slotHints` map is the name of the intent. The second level is the name of the slot within the intent. For more information, see [Using hints to improve accuracy](https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html).
   *
   * The intent name and slot name must exist.
   *
   * @public
   */
  slotHints?: Record<string, Record<string, RuntimeHintDetails>> | undefined;
}

/**
 * Contains information about a slot output by the test set execution.
 *
 * @public
 */
export interface UserTurnSlotOutput {
  /**
   * The value output by the slot recognition.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * Values that are output by the slot recognition.
   *
   * @public
   */
  values?: UserTurnSlotOutput[] | undefined;

  /**
   * A list of items mapping the name of the subslots to information about those subslots.
   *
   * @public
   */
  subSlots?: Record<string, UserTurnSlotOutput> | undefined;
}

/**
 * The current state of the conversation with the user.
 *
 * @public
 */
export interface DialogState {
  /**
   * Defines the action that the bot executes at runtime when the conversation reaches this step.
   *
   * @public
   */
  dialogAction?: DialogAction | undefined;

  /**
   * Override settings to configure the intent state.
   *
   * @public
   */
  intent?: IntentOverride | undefined;

  /**
   * Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
   *
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;
}

/**
 * Specifications for the current state of the dialog between the user and the bot in the test set.
 *
 * @public
 */
export interface InputSessionStateSpecification {
  /**
   * Session attributes for the session state.
   *
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * Active contexts for the session state.
   *
   * @public
   */
  activeContexts?: ActiveContext[] | undefined;

  /**
   * Runtime hints for the session state.
   *
   * @public
   */
  runtimeHints?: RuntimeHints | undefined;
}

/**
 * A set of actions that Amazon Lex should run if the condition is matched.
 *
 * @public
 */
export interface ConditionalBranch {
  /**
   * The name of the branch.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Contains the expression to evaluate. If the condition is true, the branch's actions are taken.
   *
   * @public
   */
  condition: Condition | undefined;

  /**
   * The next step in the conversation.
   *
   * @public
   */
  nextStep: DialogState | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  response?: ResponseSpecification | undefined;
}

/**
 * A set of actions that Amazon Lex should run if none of the other conditions are met.
 *
 * @public
 */
export interface DefaultConditionalBranch {
  /**
   * The next step in the conversation.
   *
   * @public
   */
  nextStep?: DialogState | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  response?: ResponseSpecification | undefined;
}

/**
 * Contains information about the user messages in the turn in the input.
 *
 * @public
 */
export interface UserTurnInputSpecification {
  /**
   * The utterance input in the user turn.
   *
   * @public
   */
  utteranceInput: UtteranceInputSpecification | undefined;

  /**
   * Request attributes of the user turn.
   *
   * @public
   */
  requestAttributes?: Record<string, string> | undefined;

  /**
   * Contains information about the session state in the input.
   *
   * @public
   */
  sessionState?: InputSessionStateSpecification | undefined;
}

/**
 * Contains information about the intent that is output for the turn by the test execution.
 *
 * @public
 */
export interface UserTurnIntentOutput {
  /**
   * The name of the intent.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The slots associated with the intent.
   *
   * @public
   */
  slots?: Record<string, UserTurnSlotOutput> | undefined;
}

/**
 * Contains results that are output for the user turn by the test execution.
 *
 * @public
 */
export interface UserTurnOutputSpecification {
  /**
   * Contains information about the intent.
   *
   * @public
   */
  intent: UserTurnIntentOutput | undefined;

  /**
   * The contexts that are active in the turn.
   *
   * @public
   */
  activeContexts?: ActiveContext[] | undefined;

  /**
   * The transcript that is output for the user turn by the test execution.
   *
   * @public
   */
  transcript?: string | undefined;
}

/**
 * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
 *
 * @public
 */
export interface ConditionalSpecification {
  /**
   * Determines whether a conditional branch is active. When `active` is false, the conditions are not evaluated.
   *
   * @public
   */
  active: boolean | undefined;

  /**
   * A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
   *
   * @public
   */
  conditionalBranches: ConditionalBranch[] | undefined;

  /**
   * The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.
   *
   * @public
   */
  defaultBranch: DefaultConditionalBranch | undefined;
}

/**
 * Contains information about the expected and input values for the user turn.
 *
 * @public
 */
export interface UserTurnSpecification {
  /**
   * Contains information about the user messages in the turn in the input.
   *
   * @public
   */
  input: UserTurnInputSpecification | undefined;

  /**
   * Contains results about the expected output for the user turn.
   *
   * @public
   */
  expected: UserTurnOutputSpecification | undefined;
}

/**
 * Contains information about the messages in the turn.
 *
 * @public
 */
export interface TurnSpecification {
  /**
   * Contains information about the agent messages in the turn.
   *
   * @public
   */
  agentTurn?: AgentTurnSpecification | undefined;

  /**
   * Contains information about the user messages in the turn.
   *
   * @public
   */
  userTurn?: UserTurnSpecification | undefined;
}

/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 *
 * @public
 */
export interface IntentClosingSetting {
  /**
   * The response that Amazon Lex sends to the user when the intent is complete.
   *
   * @public
   */
  closingResponse?: ResponseSpecification | undefined;

  /**
   * Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the `active` field isn't specified, the default is true.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Specifies the next step that the bot executes after playing the intent's closing response.
   *
   * @public
   */
  nextStep?: DialogState | undefined;

  /**
   * A list of conditional branches associated with the intent's closing response. These branches are executed when the `nextStep` attribute is set to `EvalutateConditional`.
   *
   * @public
   */
  conditional?: ConditionalSpecification | undefined;
}

/**
 * Contains information about a turn in a test set.
 *
 * @public
 */
export interface TestSetTurnRecord {
  /**
   * The record number associated with the turn.
   *
   * @public
   */
  recordNumber: number | undefined;

  /**
   * The unique identifier for the conversation associated with the turn.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The number of turns that has elapsed up to that turn.
   *
   * @public
   */
  turnNumber?: number | undefined;

  /**
   * Contains information about the agent or user turn depending upon type of turn.
   *
   * @public
   */
  turnSpecification: TurnSpecification | undefined;
}

/**
 * Contains the results for the user turn by the test execution.
 *
 * @public
 */
export interface UserTurnResult {
  /**
   * Contains information about the user messages in the turn in the input.
   *
   * @public
   */
  input: UserTurnInputSpecification | undefined;

  /**
   * Contains information about the expected output for the user turn.
   *
   * @public
   */
  expectedOutput: UserTurnOutputSpecification | undefined;

  /**
   * Contains information about the actual output for the user turn.
   *
   * @public
   */
  actualOutput?: UserTurnOutputSpecification | undefined;

  /**
   * Details about an error in an execution of a test set.
   *
   * @public
   */
  errorDetails?: ExecutionErrorDetails | undefined;

  /**
   * Specifies whether the expected and actual outputs match or not, or if there is an error in execution.
   *
   * @public
   */
  endToEndResult?: TestResultMatchStatus | undefined;

  /**
   * Specifies whether the expected and actual intents match or not.
   *
   * @public
   */
  intentMatchResult?: TestResultMatchStatus | undefined;

  /**
   * Specifies whether the expected and actual slots match or not.
   *
   * @public
   */
  slotMatchResult?: TestResultMatchStatus | undefined;

  /**
   * Specifies whether the expected and actual speech transcriptions match or not, or if there is an error in execution.
   *
   * @public
   */
  speechTranscriptionResult?: TestResultMatchStatus | undefined;

  /**
   * Contains information about the results related to the conversation associated with the user turn.
   *
   * @public
   */
  conversationLevelResult?: ConversationLevelResultDetail | undefined;
}

/**
 * @public
 */
export interface ListTestSetRecordsResponse {
  /**
   * The list of records from the test set.
   *
   * @public
   */
  testSetRecords?: TestSetTurnRecord[] | undefined;

  /**
   * A token that indicates whether there are more records to return in a response to the ListTestSetRecords operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSetRecords operation request to get the next page of records.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about the results of the analysis of a turn in the test set.
 *
 * @public
 */
export interface TestSetTurnResult {
  /**
   * Contains information about the agent messages in the turn.
   *
   * @public
   */
  agent?: AgentTurnResult | undefined;

  /**
   * Contains information about the user messages in the turn.
   *
   * @public
   */
  user?: UserTurnResult | undefined;
}

/**
 * Contains information about multiple utterances in the results of a test set execution.
 *
 * @public
 */
export interface UtteranceLevelTestResultItem {
  /**
   * The record number of the result.
   *
   * @public
   */
  recordNumber: number | undefined;

  /**
   * The unique identifier for the conversation associated with the result.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * Contains information about the turn associated with the result.
   *
   * @public
   */
  turnResult: TestSetTurnResult | undefined;
}

/**
 * Contains information about the utterances in the results of the test set execution.
 *
 * @public
 */
export interface UtteranceLevelTestResults {
  /**
   * Contains information about an utterance in the results of the test set execution.
   *
   * @public
   */
  items: UtteranceLevelTestResultItem[] | undefined;
}

/**
 * Contains the results of the test execution, grouped by type of results. See [Test result details">Test results details](https://docs.aws.amazon.com/lexv2/latest/dg/test-results-details-test-set.html) for details about different types of results.
 *
 * @public
 */
export interface TestExecutionResultItems {
  /**
   * Overall results for the test execution, including the breakdown of conversations and single-input utterances.
   *
   * @public
   */
  overallTestResults?: OverallTestResults | undefined;

  /**
   * Results related to conversations in the test set, including metrics about success and failure of conversations and intent and slot failures.
   *
   * @public
   */
  conversationLevelTestResults?: ConversationLevelTestResults | undefined;

  /**
   * Intent recognition results aggregated by intent name. The aggregated results contain success and failure rates of intent recognition, speech transcriptions, and end-to-end conversations.
   *
   * @public
   */
  intentClassificationTestResults?: IntentClassificationTestResults | undefined;

  /**
   * Slot resolution results aggregated by intent and slot name. The aggregated results contain success and failure rates of slot resolution, speech transcriptions, and end-to-end conversations
   *
   * @public
   */
  intentLevelSlotResolutionTestResults?: IntentLevelSlotResolutionTestResults | undefined;

  /**
   * Results related to utterances in the test set.
   *
   * @public
   */
  utteranceLevelTestResults?: UtteranceLevelTestResults | undefined;
}

/**
 * @public
 */
export interface ListTestExecutionResultItemsResponse {
  /**
   * The list of results from the test execution.
   *
   * @public
   */
  testExecutionResults?: TestExecutionResultItems | undefined;

  /**
   * A token that indicates whether there are more results to return in a response to the `ListTestExecutionResultItems` operation. If the `nextToken` field is present, you send the contents as the `nextToken` parameter of a `ListTestExecutionResultItems` operation request to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies next steps to run after the dialog code hook finishes.
 *
 * @public
 */
export interface PostDialogCodeHookInvocationSpecification {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  successResponse?: ResponseSpecification | undefined;

  /**
   * Specifics the next step the bot runs after the dialog code hook finishes successfully.
   *
   * @public
   */
  successNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the dialog code hook finishes successfully.
   *
   * @public
   */
  successConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  failureResponse?: ResponseSpecification | undefined;

  /**
   * Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * @public
   */
  failureNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * @public
   */
  failureConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  timeoutResponse?: ResponseSpecification | undefined;

  /**
   * Specifies the next step that the bot runs when the code hook times out.
   *
   * @public
   */
  timeoutNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate if the code hook times out.
   *
   * @public
   */
  timeoutConditional?: ConditionalSpecification | undefined;
}

/**
 * Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see [https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete](https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete)
 *
 * @public
 */
export interface PostFulfillmentStatusSpecification {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  successResponse?: ResponseSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  failureResponse?: ResponseSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  timeoutResponse?: ResponseSpecification | undefined;

  /**
   * Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
   *
   * @public
   */
  successNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
   *
   * @public
   */
  successConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * @public
   */
  failureNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * @public
   */
  failureConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies the next step that the bot runs when the fulfillment code hook times out.
   *
   * @public
   */
  timeoutNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate if the fulfillment code hook times out.
   *
   * @public
   */
  timeoutConditional?: ConditionalSpecification | undefined;
}

/**
 * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
 *
 * @public
 */
export interface DialogCodeHookInvocationSetting {
  /**
   * Indicates whether a Lambda function should be invoked for the dialog.
   *
   * @public
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * Determines whether a dialog code hook is used when the intent is activated.
   *
   * @public
   */
  active: boolean | undefined;

  /**
   * A label that indicates the dialog step from which the dialog code hook is happening.
   *
   * @public
   */
  invocationLabel?: string | undefined;

  /**
   * Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.
   *
   * @public
   */
  postCodeHookSpecification: PostDialogCodeHookInvocationSpecification | undefined;
}

/**
 * Determines if a Lambda function should be invoked for a specific intent.
 *
 * @public
 */
export interface FulfillmentCodeHookSettings {
  /**
   * Indicates whether a Lambda function should be invoked to fulfill a specific intent.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Provides settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations.
   *
   * @public
   */
  postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification | undefined;

  /**
   * Provides settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations.
   *
   * @public
   */
  fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification | undefined;

  /**
   * Determines whether the fulfillment code hook is used. When `active` is false, the code hook doesn't run.
   *
   * @public
   */
  active?: boolean | undefined;
}

/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 *
 * @public
 */
export interface InitialResponseSetting {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  initialResponse?: ResponseSpecification | undefined;

  /**
   * The next step in the conversation.
   *
   * @public
   */
  nextStep?: DialogState | undefined;

  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   *
   * @public
   */
  conditional?: ConditionalSpecification | undefined;

  /**
   * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
   *
   * @public
   */
  codeHook?: DialogCodeHookInvocationSetting | undefined;
}

/**
 * Settings used when Amazon Lex successfully captures a slot value from a user.
 *
 * @public
 */
export interface SlotCaptureSetting {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  captureResponse?: ResponseSpecification | undefined;

  /**
   * Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
   *
   * @public
   */
  captureNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the slot value is captured.
   *
   * @public
   */
  captureConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  failureResponse?: ResponseSpecification | undefined;

  /**
   * Specifies the next step that the bot runs when the slot value code is not recognized.
   *
   * @public
   */
  failureNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate when the slot value isn't captured.
   *
   * @public
   */
  failureConditional?: ConditionalSpecification | undefined;

  /**
   * Code hook called after Amazon Lex successfully captures a slot value.
   *
   * @public
   */
  codeHook?: DialogCodeHookInvocationSetting | undefined;

  /**
   * Code hook called when Amazon Lex doesn't capture a slot value.
   *
   * @public
   */
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting | undefined;
}

/**
 * Specifies the elicitation setting details eliciting a slot.
 *
 * @public
 */
export interface SlotValueElicitationSetting {
  /**
   * A list of default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.
   *
   * @public
   */
  defaultValueSpecification?: SlotDefaultValueSpecification | undefined;

  /**
   * Specifies whether the slot is required or optional.
   *
   * @public
   */
  slotConstraint: SlotConstraint | undefined;

  /**
   * The prompt that Amazon Lex uses to elicit the slot value from the user.
   *
   * @public
   */
  promptSpecification?: PromptSpecification | undefined;

  /**
   * If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
   *
   * @public
   */
  waitAndContinueSpecification?: WaitAndContinueSpecification | undefined;

  /**
   * Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.
   *
   * @public
   */
  slotCaptureSetting?: SlotCaptureSetting | undefined;

  /**
   * An object containing information about whether assisted slot resolution is turned on for the slot or not.
   *
   * @public
   */
  slotResolutionSetting?: SlotResolutionSetting | undefined;
}

/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 *
 * @public
 */
export interface IntentConfirmationSetting {
  /**
   * Prompts the user to confirm the intent. This question should have a yes or no answer.
   *
   * Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the `OrderPizza` intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information.
   *
   * Required unless the bot locale's `assistedNluMode` is `DialogManager`, in which case Amazon Lex generates the confirmation prompt.
   *
   * @public
   */
  promptSpecification?: PromptSpecification | undefined;

  /**
   * When the user answers "no" to the question defined in `promptSpecification`, Amazon Lex responds with this response to acknowledge that the intent was canceled.
   *
   * @public
   */
  declinationResponse?: ResponseSpecification | undefined;

  /**
   * Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the `active` field isn't specified, the default is true.
   *
   * @public
   */
  active?: boolean | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  confirmationResponse?: ResponseSpecification | undefined;

  /**
   * Specifies the next step that the bot executes when the customer confirms the intent.
   *
   * @public
   */
  confirmationNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the intent is closed.
   *
   * @public
   */
  confirmationConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies the next step that the bot executes when the customer declines the intent.
   *
   * @public
   */
  declinationNextStep?: DialogState | undefined;

  /**
   * A list of conditional branches to evaluate after the intent is declined.
   *
   * @public
   */
  declinationConditional?: ConditionalSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * @public
   */
  failureResponse?: ResponseSpecification | undefined;

  /**
   * The next step to take in the conversation if the confirmation step fails.
   *
   * @public
   */
  failureNextStep?: DialogState | undefined;

  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   *
   * @public
   */
  failureConditional?: ConditionalSpecification | undefined;

  /**
   * The `DialogCodeHookInvocationSetting` object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is `InvokeDialogCodeHook`.
   *
   * @public
   */
  codeHook?: DialogCodeHookInvocationSetting | undefined;

  /**
   * The `DialogCodeHookInvocationSetting` used when the code hook is invoked during confirmation prompt retries.
   *
   * @public
   */
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting | undefined;
}

/**
 * @public
 */
export interface CreateSlotRequest {
  /**
   * The name of the slot. Slot names must be unique within the bot that contains the slot.
   *
   * @public
   */
  slotName: string | undefined;

  /**
   * A description of the slot. Use this to help identify the slot in lists.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * Specifies prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.
   *
   * @public
   */
  valueElicitationSetting: SlotValueElicitationSetting | undefined;

  /**
   * Determines how slot values are used in Amazon CloudWatch logs. If the value of the `obfuscationSetting` parameter is `DefaultObfuscation`, slot values are obfuscated in the log output. If the value is `None`, the actual value is present in the log output.
   *
   * The default is to obfuscate values in the CloudWatch logs.
   *
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * The identifier of the bot associated with the slot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the slot.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the intent that contains the slot.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * Indicates whether the slot returns multiple values in one response. Multi-value slots are only available in the `en-US` locale. If you set this value to `true` in any other locale, Amazon Lex throws a `ValidationException`.
   *
   * If the `multipleValuesSetting` is not set, the default value is `false`.
   *
   * @public
   */
  multipleValuesSetting?: MultipleValuesSetting | undefined;

  /**
   * Specifications for the constituent sub slots and the expression for the composite slot.
   *
   * @public
   */
  subSlotSetting?: SubSlotSetting | undefined;
}

/**
 * @public
 */
export interface CreateSlotResponse {
  /**
   * The unique identifier associated with the slot. Use this to identify the slot when you update or delete it.
   *
   * @public
   */
  slotId?: string | undefined;

  /**
   * The name specified for the slot.
   *
   * @public
   */
  slotName?: string | undefined;

  /**
   * The description associated with the slot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the slot type associated with this slot.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * The value elicitation settings specified for the slot.
   *
   * @public
   */
  valueElicitationSetting?: SlotValueElicitationSetting | undefined;

  /**
   * Indicates whether the slot is configured to obfuscate values in Amazon CloudWatch logs.
   *
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * The unique identifier of the bot associated with the slot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the slot.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and local specified for the slot.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The unique identifier of the intent associated with the slot.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The timestamp of the date and time that the slot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * Indicates whether the slot returns multiple values in one response.
   *
   * @public
   */
  multipleValuesSetting?: MultipleValuesSetting | undefined;

  /**
   * Specifications for the constituent sub slots and the expression for the composite slot.
   *
   * @public
   */
  subSlotSetting?: SubSlotSetting | undefined;
}

/**
 * @public
 */
export interface DescribeSlotResponse {
  /**
   * The unique identifier generated for the slot.
   *
   * @public
   */
  slotId?: string | undefined;

  /**
   * The name specified for the slot.
   *
   * @public
   */
  slotName?: string | undefined;

  /**
   * The description specified for the slot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the slot type that determines the values entered into the slot.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * Prompts that Amazon Lex uses to elicit a value for the slot.
   *
   * @public
   */
  valueElicitationSetting?: SlotValueElicitationSetting | undefined;

  /**
   * Whether slot values are shown in Amazon CloudWatch logs. If the value is `None`, the actual value of the slot is shown in logs.
   *
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * The identifier of the bot associated with the slot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the slot.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale specified for the slot.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The identifier of the intent associated with the slot.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * A timestamp of the date and time that the slot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the slot was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Indicates whether the slot accepts multiple values in a single utterance.
   *
   * If the `multipleValuesSetting` is not set, the default value is `false`.
   *
   * @public
   */
  multipleValuesSetting?: MultipleValuesSetting | undefined;

  /**
   * Specifications for the constituent sub slots and the expression for the composite slot.
   *
   * @public
   */
  subSlotSetting?: SubSlotSetting | undefined;
}

/**
 * @public
 */
export interface UpdateSlotRequest {
  /**
   * The unique identifier for the slot to update.
   *
   * @public
   */
  slotId: string | undefined;

  /**
   * The new name for the slot.
   *
   * @public
   */
  slotName: string | undefined;

  /**
   * The new description for the slot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the new slot type to associate with this slot.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * A new set of prompts that Amazon Lex sends to the user to elicit a response the provides a value for the slot.
   *
   * @public
   */
  valueElicitationSetting: SlotValueElicitationSetting | undefined;

  /**
   * New settings that determine how slot values are formatted in Amazon CloudWatch logs.
   *
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * The unique identifier of the bot that contains the slot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the slot. Must always be `DRAFT`.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the intent that contains the slot.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * Determines whether the slot accepts multiple values in one response. Multiple value slots are only available in the en-US locale. If you set this value to `true` in any other locale, Amazon Lex throws a `ValidationException`.
   *
   * If the `multipleValuesSetting` is not set, the default value is `false`.
   *
   * @public
   */
  multipleValuesSetting?: MultipleValuesSetting | undefined;

  /**
   * Specifications for the constituent sub slots and the expression for the composite slot.
   *
   * @public
   */
  subSlotSetting?: SubSlotSetting | undefined;
}

/**
 * @public
 */
export interface UpdateSlotResponse {
  /**
   * The unique identifier of the slot that was updated.
   *
   * @public
   */
  slotId?: string | undefined;

  /**
   * The updated name of the slot.
   *
   * @public
   */
  slotName?: string | undefined;

  /**
   * The updated description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated identifier of the slot type that provides values for the slot.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * The updated prompts that Amazon Lex sends to the user to elicit a response that provides a value for the slot.
   *
   * @public
   */
  valueElicitationSetting?: SlotValueElicitationSetting | undefined;

  /**
   * The updated setting that determines whether the slot value is obfuscated in the Amazon CloudWatch logs.
   *
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * The identifier of the bot that contains the slot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the slot. Will always be `DRAFT`.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale that contains the slot.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The intent that contains the slot.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The timestamp of the date and time that the slot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The timestamp of the date and time that the slot was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Indicates whether the slot accepts multiple values in one response.
   *
   * @public
   */
  multipleValuesSetting?: MultipleValuesSetting | undefined;

  /**
   * Specifications for the constituent sub slots and the expression for the composite slot.
   *
   * @public
   */
  subSlotSetting?: SubSlotSetting | undefined;
}

/**
 * @public
 */
export interface CreateIntentRequest {
  /**
   * The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * A display name for the intent. If configured, This name will be shown to users during Intent Disambiguation instead of the intent name. Display names should be user-friendly, descriptive and match the intent's purpose to improve user experience during disambiguation.
   *
   * @public
   */
  intentDisplayName?: string | undefined;

  /**
   * A description of the intent. Use the description to help identify the intent in lists.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique identifier for the built-in intent to base this intent on.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a \{PizzaSize\} pizza".
   *
   * In an utterance, slot names are enclosed in curly braces ("\{", "\}") to indicate where they should be displayed in the utterance shown to the user..
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * Specifies that Amazon Lex invokes the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction.
   *
   * For example, suppose that your bot determines that the user's name is John. You Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, `glutenIntolerant` to `true`. You might find John's phone number and set the corresponding session attribute.
   *
   * @public
   */
  dialogCodeHook?: DialogCodeHookSettings | undefined;

  /**
   * Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user.
   *
   * For example, in a pizza ordering bot, the Lambda function can look up the closest pizza restaurant to the customer's location and then place an order on the customer's behalf.
   *
   * @public
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | undefined;

  /**
   * Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent. If the user answers "no," the settings contain a statement that is sent to the user to end the intent.
   *
   * @public
   */
  intentConfirmationSetting?: IntentConfirmationSetting | undefined;

  /**
   * Sets the response that Amazon Lex sends to the user when the intent is closed.
   *
   * @public
   */
  intentClosingSetting?: IntentClosingSetting | undefined;

  /**
   * A list of contexts that must be active for this intent to be considered by Amazon Lex.
   *
   * When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent.
   *
   * A context can be automatically activated using the `outputContexts` property or it can be set at runtime.
   *
   * For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond.
   *
   * An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * A lists of contexts that the intent activates when it is fulfilled.
   *
   * You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer.
   *
   * When you use the `outputContextsList` property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;

  /**
   * Configuration information required to use the `AMAZON.KendraSearchIntent` intent to connect to an Amazon Kendra index. The `AMAZON.KendraSearchIntent` intent is called when Amazon Lex can't determine another intent to invoke.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * The identifier of the bot associated with this intent.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with this intent.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Configuration settings for the response that is sent to the user at the beginning of a conversation, before eliciting slot values.
   *
   * @public
   */
  initialResponseSetting?: InitialResponseSetting | undefined;

  /**
   * Specifies the configuration of the built-in `Amazon.QnAIntent`. The `AMAZON.QnAIntent` intent is called when Amazon Lex V2 can't determine another intent to invoke. If you specify this field, you can't specify the `kendraConfiguration` field.
   *
   * @public
   */
  qnAIntentConfiguration?: QnAIntentConfiguration | undefined;

  /**
   * Qinconnect intent configuration details for the create intent request.
   *
   * @public
   */
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateIntentResponse {
  /**
   * A unique identifier for the intent.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The name specified for the intent.
   *
   * @public
   */
  intentName?: string | undefined;

  /**
   * The display name specified for the intent.
   *
   * @public
   */
  intentDisplayName?: string | undefined;

  /**
   * The description specified for the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The signature of the parent intent specified for the intent.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * The sample utterances specified for the intent.
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * The dialog Lambda function specified for the intent.
   *
   * @public
   */
  dialogCodeHook?: DialogCodeHookSettings | undefined;

  /**
   * The fulfillment Lambda function specified for the intent.
   *
   * @public
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | undefined;

  /**
   * The confirmation setting specified for the intent.
   *
   * @public
   */
  intentConfirmationSetting?: IntentConfirmationSetting | undefined;

  /**
   * The closing setting specified for the intent.
   *
   * @public
   */
  intentClosingSetting?: IntentClosingSetting | undefined;

  /**
   * The list of input contexts specified for the intent.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * The list of output contexts specified for the intent.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;

  /**
   * Configuration for searching a Amazon Kendra index specified for the intent.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * The identifier of the bot associated with the intent.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the intent.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale that the intent is specified to use.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A timestamp of the date and time that the intent was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * Configuration settings for the response that is sent to the user at the beginning of a conversation, before eliciting slot values.
   *
   * @public
   */
  initialResponseSetting?: InitialResponseSetting | undefined;

  /**
   * Details about the the configuration of the built-in `Amazon.QnAIntent`.
   *
   * @public
   */
  qnAIntentConfiguration?: QnAIntentConfiguration | undefined;

  /**
   * Qinconnect intent configuration details for the create intent response.
   *
   * @public
   */
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeIntentResponse {
  /**
   * The unique identifier assigned to the intent when it was created.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The name specified for the intent.
   *
   * @public
   */
  intentName?: string | undefined;

  /**
   * The display name specified for the intent.
   *
   * @public
   */
  intentDisplayName?: string | undefined;

  /**
   * The description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the built-in intent that this intent is derived from, if any.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * User utterances that trigger this intent.
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * The Lambda function called during each turn of a conversation with the intent.
   *
   * @public
   */
  dialogCodeHook?: DialogCodeHookSettings | undefined;

  /**
   * The Lambda function called when the intent is complete and ready for fulfillment.
   *
   * @public
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | undefined;

  /**
   * The list that determines the priority that slots should be elicited from the user.
   *
   * @public
   */
  slotPriorities?: SlotPriority[] | undefined;

  /**
   * Prompts that Amazon Lex sends to the user to confirm completion of an intent.
   *
   * @public
   */
  intentConfirmationSetting?: IntentConfirmationSetting | undefined;

  /**
   * The response that Amazon Lex sends to when the intent is closed.
   *
   * @public
   */
  intentClosingSetting?: IntentClosingSetting | undefined;

  /**
   * A list of contexts that must be active for the intent to be considered for sending to the user.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * A list of contexts that are activated when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;

  /**
   * Configuration information required to use the `AMAZON.KendraSearchIntent` intent.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * The identifier of the bot associated with the intent.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the intent.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale specified for the intent.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A timestamp of the date and time that the intent was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the intent was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
   *
   * @public
   */
  initialResponseSetting?: InitialResponseSetting | undefined;

  /**
   * Details about the configuration of the built-in `Amazon.QnAIntent`.
   *
   * @public
   */
  qnAIntentConfiguration?: QnAIntentConfiguration | undefined;

  /**
   * Qinconnect intent configuration details for the describe intent response.
   *
   * @public
   */
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateIntentRequest {
  /**
   * The unique identifier of the intent to update.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * The new name for the intent.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * The new display name for the intent.
   *
   * @public
   */
  intentDisplayName?: string | undefined;

  /**
   * The new description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The signature of the new built-in intent to use as the parent of this intent.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * New utterances used to invoke the intent.
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * The new Lambda function to use between each turn of the conversation with the bot.
   *
   * @public
   */
  dialogCodeHook?: DialogCodeHookSettings | undefined;

  /**
   * The new Lambda function to call when all of the intents required slots are provided and the intent is ready for fulfillment.
   *
   * @public
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | undefined;

  /**
   * A new list of slots and their priorities that are contained by the intent.
   *
   * @public
   */
  slotPriorities?: SlotPriority[] | undefined;

  /**
   * New prompts that Amazon Lex sends to the user to confirm the completion of an intent.
   *
   * @public
   */
  intentConfirmationSetting?: IntentConfirmationSetting | undefined;

  /**
   * The new response that Amazon Lex sends the user when the intent is closed.
   *
   * @public
   */
  intentClosingSetting?: IntentClosingSetting | undefined;

  /**
   * A new list of contexts that must be active in order for Amazon Lex to consider the intent.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * A new list of contexts that Amazon Lex activates when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;

  /**
   * New configuration settings for connecting to an Amazon Kendra index.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * The identifier of the bot that contains the intent.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the intent. Must be `DRAFT`.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Configuration settings for a response sent to the user before Amazon Lex starts eliciting slots.
   *
   * @public
   */
  initialResponseSetting?: InitialResponseSetting | undefined;

  /**
   * Specifies the configuration of the built-in `Amazon.QnAIntent`. The `AMAZON.QnAIntent` intent is called when Amazon Lex V2 can't determine another intent to invoke. If you specify this field, you can't specify the `kendraConfiguration` field.
   *
   * @public
   */
  qnAIntentConfiguration?: QnAIntentConfiguration | undefined;

  /**
   * Qinconnect intent configuration details for the update intent request.
   *
   * @public
   */
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateIntentResponse {
  /**
   * The identifier of the intent that was updated.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The updated name of the intent.
   *
   * @public
   */
  intentName?: string | undefined;

  /**
   * The updated display name of the intent.
   *
   * @public
   */
  intentDisplayName?: string | undefined;

  /**
   * The updated description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated built-in intent that is the parent of this intent.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * The updated list of sample utterances for the intent.
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * The updated Lambda function called during each turn of the conversation with the user.
   *
   * @public
   */
  dialogCodeHook?: DialogCodeHookSettings | undefined;

  /**
   * The updated Lambda function called when the intent is ready for fulfillment.
   *
   * @public
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings | undefined;

  /**
   * The updated list of slots and their priorities that are elicited from the user for the intent.
   *
   * @public
   */
  slotPriorities?: SlotPriority[] | undefined;

  /**
   * The updated prompts that Amazon Lex sends to the user to confirm the completion of an intent.
   *
   * @public
   */
  intentConfirmationSetting?: IntentConfirmationSetting | undefined;

  /**
   * The updated response that Amazon Lex sends the user when the intent is closed.
   *
   * @public
   */
  intentClosingSetting?: IntentClosingSetting | undefined;

  /**
   * The updated list of contexts that must be active for the intent to be considered by Amazon Lex.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * The updated list of contexts that Amazon Lex activates when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;

  /**
   * The updated configuration for connecting to an Amazon Kendra index with the `AMAZON.KendraSearchIntent` intent.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * The identifier of the bot that contains the intent.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the intent. Will always be `DRAFT`.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The updated language and locale of the intent.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A timestamp of when the intent was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the last time that the intent was modified.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * Configuration settings for a response sent to the user before Amazon Lex starts eliciting slots.
   *
   * @public
   */
  initialResponseSetting?: InitialResponseSetting | undefined;

  /**
   * Details about the configuration of the built-in `Amazon.QnAIntent`.
   *
   * @public
   */
  qnAIntentConfiguration?: QnAIntentConfiguration | undefined;

  /**
   * Qinconnect intent configuration details for the update intent response.
   *
   * @public
   */
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration | undefined;
}
