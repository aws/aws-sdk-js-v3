// smithy-typescript generated code
import type {
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
  AnalyticsNodeType,
  AnalyticsSessionField,
  AnalyticsSessionFilterName,
  AnalyticsSessionMetricName,
  AnalyticsSortOrder,
  AnalyticsUtteranceAttributeName,
  AnalyticsUtteranceField,
  AnalyticsUtteranceFilterName,
  AnalyticsUtteranceMetricName,
  AssistedNluMode,
  AssociatedTranscriptFilterName,
  AudioFillerType,
  AudioRecognitionStrategy,
  BedrockTraceStatus,
  BotAliasReplicationStatus,
  BotAliasStatus,
  BotAnalyzerStatus,
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
  BuiltInIntentSortAttribute,
  BuiltInSlotTypeSortAttribute,
  ConversationLogsInputModeFilter,
  CustomVocabularyStatus,
  DialogActionType,
  Effect,
  ErrorCode,
  ExportFilterName,
  ExportFilterOperator,
  ExportSortAttribute,
  ExportStatus,
  GenerationSortByAttribute,
  GenerationStatus,
  ImportExportFileFormat,
  ImportStatus,
  MergeStrategy,
  MessageSelectionStrategy,
  ObfuscationSettingType,
  Priority,
  PromptAttempt,
  SlotResolutionStrategy,
  SlotValueResolutionStrategy,
  SortOrder,
  SpeechDetectionSensitivity,
  SpeechModelPreference,
  TestExecutionApiMode,
  TestExecutionModality,
  TestExecutionStatus,
  TestResultMatchStatus,
  TestSetDiscrepancyReportStatus,
  TestSetGenerationStatus,
  TestSetModality,
  TestSetStatus,
  TranscriptFormat,
  VoiceEngine,
} from "./enums";

/**
 * The active context used in the test execution.
 *
 * @public
 */
export interface ActiveContext {
  /**
   * The name of active context.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Provides settings that enable advanced recognition settings for slot values.
 *
 * @public
 */
export interface AdvancedRecognitionSetting {
  /**
   * Enables using the slot values as a custom vocabulary for recognizing user utterances.
   *
   * @public
   */
  audioRecognitionStrategy?: AudioRecognitionStrategy | undefined;
}

/**
 * Details about an error in an execution of a test set.
 *
 * @public
 */
export interface ExecutionErrorDetails {
  /**
   * The error code for the error.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The message describing the error.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * The information about the agent turn in a test set execution.
 *
 * @public
 */
export interface AgentTurnResult {
  /**
   * The expected agent prompt for the agent turn in a test set execution.
   *
   * @public
   */
  expectedAgentPrompt: string | undefined;

  /**
   * The actual agent prompt for the agent turn in a test set execution.
   *
   * @public
   */
  actualAgentPrompt?: string | undefined;

  /**
   * Details about an error in an execution of a test set.
   *
   * @public
   */
  errorDetails?: ExecutionErrorDetails | undefined;

  /**
   * The actual elicited slot for the agent turn in a test set execution.
   *
   * @public
   */
  actualElicitedSlot?: string | undefined;

  /**
   * The actual intent for the agent turn in a test set execution.
   *
   * @public
   */
  actualIntent?: string | undefined;
}

/**
 * The specification of an agent turn.
 *
 * @public
 */
export interface AgentTurnSpecification {
  /**
   * The agent prompt for the agent turn in a test set.
   *
   * @public
   */
  agentPrompt: string | undefined;
}

/**
 * Filters responses returned by the `ListAggregatedUtterances` operation.
 *
 * @public
 */
export interface AggregatedUtterancesFilter {
  /**
   * The name of the field to filter the utterance list.
   *
   * @public
   */
  name: AggregatedUtterancesFilterName | undefined;

  /**
   * The value to use for filtering the list of bots.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify `EQ` when the `ListAggregatedUtterances` operation should return only utterances that equal the specified value. Specify `CO` when the `ListAggregatedUtterances` operation should return utterances that contain the specified value.
   *
   * @public
   */
  operator: AggregatedUtterancesFilterOperator | undefined;
}

/**
 * Specifies attributes for sorting a list of utterances.
 *
 * @public
 */
export interface AggregatedUtterancesSortBy {
  /**
   * The utterance attribute to sort by.
   *
   * @public
   */
  attribute: AggregatedUtterancesSortAttribute | undefined;

  /**
   * Specifies whether to sort the aggregated utterances in ascending or descending order.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Provides summary information for aggregated utterances. The `ListAggregatedUtterances` operations combines all instances of the same utterance into a single aggregated summary.
 *
 * @public
 */
export interface AggregatedUtterancesSummary {
  /**
   * The text of the utterance. If the utterance was used with the `RecognizeUtterance` operation, the text is the transcription of the audio utterance.
   *
   * @public
   */
  utterance?: string | undefined;

  /**
   * The number of times that the utterance was detected by Amazon Lex during the time period. When an utterance is detected, it activates an intent or a slot.
   *
   * @public
   */
  hitCount?: number | undefined;

  /**
   * The number of times that the utterance was missed by Amazon Lex An utterance is missed when it doesn't activate an intent or slot.
   *
   * @public
   */
  missedCount?: number | undefined;

  /**
   * The date and time that the utterance was first recorded in the time window for aggregation. An utterance may have been sent to Amazon Lex before that time, but only utterances within the time window are counted.
   *
   * @public
   */
  utteranceFirstRecordedInAggregationDuration?: Date | undefined;

  /**
   * The last date and time that an utterance was recorded in the time window for aggregation. An utterance may be sent to Amazon Lex after that time, but only utterances within the time window are counted.
   *
   * @public
   */
  utteranceLastRecordedInAggregationDuration?: Date | undefined;

  /**
   * Aggregated utterance data may contain utterances from versions of your bot that have since been deleted. When the aggregated contains this kind of data, this field is set to true.
   *
   * @public
   */
  containsDataFromDeletedResources?: boolean | undefined;
}

/**
 * Specifies the allowed input types.
 *
 * @public
 */
export interface AllowedInputTypes {
  /**
   * Indicates whether audio input is allowed.
   *
   * @public
   */
  allowAudioInput: boolean | undefined;

  /**
   * Indicates whether DTMF input is allowed.
   *
   * @public
   */
  allowDTMFInput: boolean | undefined;
}

/**
 * Contains the time metric, interval, and method by which to bin the analytics data.
 *
 * @public
 */
export interface AnalyticsBinBySpecification {
  /**
   * Specifies the time metric by which to bin the analytics data.
   *
   * @public
   */
  name: AnalyticsBinByName | undefined;

  /**
   * Specifies the interval of time by which to bin the analytics data.
   *
   * @public
   */
  interval: AnalyticsInterval | undefined;

  /**
   * Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the default order is by the key of the bin in descending order.
   *
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * An object containing the criterion by which to bin the results and the value that defines that bin.
 *
 * @public
 */
export interface AnalyticsBinKey {
  /**
   * The criterion by which to bin the results.
   *
   * @public
   */
  name?: AnalyticsBinByName | undefined;

  /**
   * The value of the criterion that defines the bin.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Contains fields describing a condition by which to filter the intents. The expression may be understood as `name` `operator` `values`. For example:
 *
 * - `IntentName CO Book` – The intent name contains the string "Book."
 * - `BotVersion EQ 2` – The bot version is equal to two.
 *
 * The operators that each filter supports are listed below:
 *
 * - `BotAlias` – `EQ`.
 * - `BotVersion` – `EQ`.
 * - `LocaleId` – `EQ`.
 * - `Modality` – `EQ`.
 * - `Channel` – `EQ`.
 * - `SessionId` – `EQ`.
 * - `OriginatingRequestId` – `EQ`.
 * - `IntentName` – `EQ`, `CO`.
 * - `IntentEndState` – `EQ`, `CO`.
 *
 * @public
 */
export interface AnalyticsIntentFilter {
  /**
   * The category by which to filter the intents. The descriptions for each option are as follows:
   *
   * - `BotAlias` – The name of the bot alias.
   * - `BotVersion` – The version of the bot.
   * - `LocaleId` – The locale of the bot.
   * - `Modality` – The modality of the session with the bot (audio, DTMF, or text).
   * - `Channel` – The channel that the bot is integrated with.
   * - `SessionId` – The identifier of the session with the bot.
   * - `OriginatingRequestId` – The identifier of the first request in a session.
   * - `IntentName` – The name of the intent.
   * - `IntentEndState` – The final state of the intent.
   *
   * @public
   */
  name: AnalyticsIntentFilterName | undefined;

  /**
   * The operation by which to filter the category. The following operations are possible:
   *
   * - `CO` – Contains
   * - `EQ` – Equals
   * - `GT` – Greater than
   * - `LT` – Less than
   *
   * The operators that each filter supports are listed below:
   *
   * - `BotAlias` – `EQ`.
   * - `BotVersion` – `EQ`.
   * - `LocaleId` – `EQ`.
   * - `Modality` – `EQ`.
   * - `Channel` – `EQ`.
   * - `SessionId` – `EQ`.
   * - `OriginatingRequestId` – `EQ`.
   * - `IntentName` – `EQ`, `CO`.
   * - `IntentEndState` – `EQ`, `CO`.
   *
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is `EQ` or `CO`. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the `name`, `operator`, and `values` fields are `Modality`, `EQ`, and `[Speech, Text]`, the operation filters for results where the modality was either `Speech` or `Text`.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Contains the category by which the intent analytics were grouped and a member of that category.
 *
 * @public
 */
export interface AnalyticsIntentGroupByKey {
  /**
   * A category by which the intent analytics were grouped.
   *
   * @public
   */
  name?: AnalyticsIntentField | undefined;

  /**
   * A member of the category by which the intent analytics were grouped.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains the category by which to group the intents.
 *
 * @public
 */
export interface AnalyticsIntentGroupBySpecification {
  /**
   * Specifies whether to group the intent stages by their name or their end state.
   *
   * @public
   */
  name: AnalyticsIntentField | undefined;
}

/**
 * Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intents in the bot.
 *
 * @public
 */
export interface AnalyticsIntentMetric {
  /**
   * The metric for which you want to get intent summary statistics.
   *
   * - `Count` – The number of times the intent was invoked.
   * - `Success` – The number of times the intent succeeded.
   * - `Failure` – The number of times the intent failed.
   * - `Switched` – The number of times there was a switch to a different intent.
   * - `Dropped` – The number of times the user dropped the intent.
   *
   * @public
   */
  name: AnalyticsIntentMetricName | undefined;

  /**
   * The summary statistic to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of intents in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * An object containing the results for the intent metric you requested.
 *
 * @public
 */
export interface AnalyticsIntentMetricResult {
  /**
   * The metric that you requested. See [Key definitions](https://docs.aws.amazon.com/lexv2/latest/dg/analytics-key-definitions.html) for more details about these metrics.
   *
   * - `Count` – The number of times the intent was invoked.
   * - `Success` – The number of times the intent succeeded.
   * - `Failure` – The number of times the intent failed.
   * - `Switched` – The number of times there was a switch to a different intent.
   * - `Dropped` – The number of times the user dropped the intent.
   *
   * @public
   */
  name?: AnalyticsIntentMetricName | undefined;

  /**
   * The statistic that you requested to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of intents in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * The value of the summary statistic for the metric that you requested.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * An object containing information about the requested path.
 *
 * @public
 */
export interface AnalyticsIntentNodeSummary {
  /**
   * The name of the intent at the end of the requested path.
   *
   * @public
   */
  intentName?: string | undefined;

  /**
   * The path.
   *
   * @public
   */
  intentPath?: string | undefined;

  /**
   * The total number of sessions that follow the given path to the given intent.
   *
   * @public
   */
  intentCount?: number | undefined;

  /**
   * The number of intents up to and including the requested path.
   *
   * @public
   */
  intentLevel?: number | undefined;

  /**
   * Specifies whether the node is the end of a path (`Exit`) or not (`Inner`).
   *
   * @public
   */
  nodeType?: AnalyticsNodeType | undefined;
}

/**
 * An object containing the results for the intent metrics you requested and the bin and/or group(s) they refer to, if applicable.
 *
 * @public
 */
export interface AnalyticsIntentResult {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of the bins.
   *
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * A list of objects containing the criteria you requested for grouping results and the values of the groups.
   *
   * @public
   */
  groupByKeys?: AnalyticsIntentGroupByKey[] | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metricsResults?: AnalyticsIntentMetricResult[] | undefined;
}

/**
 * Contains fields describing a condition by which to filter the intent stages. The expression may be understood as `name` `operator` `values`. For example:
 *
 * - `IntentName CO Book` – The intent name contains the string "Book."
 * - `BotVersion EQ 2` – The bot version is equal to two.
 *
 * The operators that each filter supports are listed below:
 *
 * - `BotAlias` – `EQ`.
 * - `BotVersion` – `EQ`.
 * - `LocaleId` – `EQ`.
 * - `Modality` – `EQ`.
 * - `Channel` – `EQ`.
 * - `SessionId` – `EQ`.
 * - `OriginatingRequestId` – `EQ`.
 * - `IntentName` – `EQ`, `CO`.
 * - `IntentStageName` – `EQ`, `CO`.
 *
 * @public
 */
export interface AnalyticsIntentStageFilter {
  /**
   * The category by which to filter the intent stages. The descriptions for each option are as follows:
   *
   * - `BotAlias` – The name of the bot alias.
   * - `BotVersion` – The version of the bot.
   * - `LocaleId` – The locale of the bot.
   * - `Modality` – The modality of the session with the bot (audio, DTMF, or text).
   * - `Channel` – The channel that the bot is integrated with.
   * - `SessionId` – The identifier of the session with the bot.
   * - `OriginatingRequestId` – The identifier of the first request in a session.
   * - `IntentName` – The name of the intent.
   * - `IntentStageName` – The stage in the intent.
   *
   * @public
   */
  name: AnalyticsIntentStageFilterName | undefined;

  /**
   * The operation by which to filter the category. The following operations are possible:
   *
   * - `CO` – Contains
   * - `EQ` – Equals
   * - `GT` – Greater than
   * - `LT` – Less than
   *
   * The operators that each filter supports are listed below:
   *
   * - `BotAlias` – `EQ`.
   * - `BotVersion` – `EQ`.
   * - `LocaleId` – `EQ`.
   * - `Modality` – `EQ`.
   * - `Channel` – `EQ`.
   * - `SessionId` – `EQ`.
   * - `OriginatingRequestId` – `EQ`.
   * - `IntentName` – `EQ`, `CO`.
   * - `IntentStageName` – `EQ`, `CO`.
   *
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is `EQ` or `CO`. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the `name`, `operator`, and `values` fields are `Modality`, `EQ`, and `[Speech, Text]`, the operation filters for results where the modality was either `Speech` or `Text`.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Contains the category by which the intent stage analytics and the values for that category were grouped.
 *
 * @public
 */
export interface AnalyticsIntentStageGroupByKey {
  /**
   * A category by which the intent stage analytics were grouped.
   *
   * @public
   */
  name?: AnalyticsIntentStageField | undefined;

  /**
   * A member of the category by which the intent stage analytics were grouped.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains the category by which to group the intent stages.
 *
 * @public
 */
export interface AnalyticsIntentStageGroupBySpecification {
  /**
   * Specifies whether to group the intent stages by their name or the intent to which the session was switched.
   *
   * @public
   */
  name: AnalyticsIntentStageField | undefined;
}

/**
 * Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intent stages across the user sessions with the bot.
 *
 * @public
 */
export interface AnalyticsIntentStageMetric {
  /**
   * The metric for which you want to get intent stage summary statistics. See [Key definitions](https://docs.aws.amazon.com/lexv2/latest/dg/analytics-key-definitions.html) for more details about these metrics.
   *
   * - `Count` – The number of times the intent stage occurred.
   * - `Success` – The number of times the intent stage succeeded.
   * - `Failure` – The number of times the intent stage failed.
   * - `Dropped` – The number of times the user dropped the intent stage.
   * - `Retry` – The number of times the bot tried to elicit a response from the user at this stage.
   *
   * @public
   */
  name: AnalyticsIntentStageMetricName | undefined;

  /**
   * The summary statistic to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of intent stages in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order of the summary statistic (`value` in the response).
   *
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * An object containing the results for an intent stage metric you requested.
 *
 * @public
 */
export interface AnalyticsIntentStageMetricResult {
  /**
   * The metric that you requested.
   *
   * - `Count` – The number of times the intent stage occurred.
   * - `Success` – The number of times the intent stage succeeded.
   * - `Failure` – The number of times the intent stage failed.
   * - `Dropped` – The number of times the user dropped the intent stage.
   * - `Retry` – The number of times the bot tried to elicit a response from the user at this stage.
   *
   * @public
   */
  name?: AnalyticsIntentStageMetricName | undefined;

  /**
   * The summary statistic that you requested to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of intent stages in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * The value of the summary statistic for the metric that you requested.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * An object containing the results for the intent stage metrics you requested and the bin and/or group they refer to, if applicable.
 *
 * @public
 */
export interface AnalyticsIntentStageResult {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of the bins.
   *
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * A list of objects containing the criteria you requested for grouping results and the values of the bins.
   *
   * @public
   */
  groupByKeys?: AnalyticsIntentStageGroupByKey[] | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metricsResults?: AnalyticsIntentStageMetricResult[] | undefined;
}

/**
 * Contains fields describing a condition by which to filter the paths. The expression may be understood as `name` `operator` `values`. For example:
 *
 * - `LocaleId EQ en` – The locale is "en".
 * - `BotVersion EQ 2` – The bot version is equal to two.
 *
 * The operators that each filter supports are listed below:
 *
 * - `BotAlias` – `EQ`.
 * - `BotVersion` – `EQ`.
 * - `LocaleId` – `EQ`.
 * - `Modality` – `EQ`.
 * - `Channel` – `EQ`.
 *
 * @public
 */
export interface AnalyticsPathFilter {
  /**
   * The category by which to filter the intent paths. The descriptions for each option are as follows:
   *
   * - `BotAlias` – The name of the bot alias.
   * - `BotVersion` – The version of the bot.
   * - `LocaleId` – The locale of the bot.
   * - `Modality` – The modality of the session with the bot (audio, DTMF, or text).
   * - `Channel` – The channel that the bot is integrated with.
   *
   * @public
   */
  name: AnalyticsCommonFilterName | undefined;

  /**
   * The operation by which to filter the category. The following operations are possible:
   *
   * - `CO` – Contains
   * - `EQ` – Equals
   * - `GT` – Greater than
   * - `LT` – Less than
   *
   * The operators that each filter supports are listed below:
   *
   * - `BotAlias` – `EQ`.
   * - `BotVersion` – `EQ`.
   * - `LocaleId` – `EQ`.
   * - `Modality` – `EQ`.
   * - `Channel` – `EQ`.
   *
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is `EQ` or `CO`. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the `name`, `operator`, and `values` fields are `Modality`, `EQ`, and `[Speech, Text]`, the operation filters for results where the modality was either `Speech` or `Text`.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Contains fields describing a condition by which to filter the sessions. The expression may be understood as `name` `operator` `values`. For example:
 *
 * - `LocaleId EQ en` – The locale is "en".
 * - `Duration GT 200` – The duration is greater than 200 seconds.
 *
 * The operators that each filter supports are listed below:
 *
 * - `BotAlias` – `EQ`.
 * - `BotVersion` – `EQ`.
 * - `LocaleId` – `EQ`.
 * - `Modality` – `EQ`.
 * - `Channel` – `EQ`.
 * - `Duration` – `EQ`, `GT`, `LT`.
 * - `conversationEndState` – `EQ`, `CO`.
 * - `SessionId` – `EQ`.
 * - `OriginatingRequestId` – `EQ`.
 * - `IntentPath` – `EQ`.
 *
 * @public
 */
export interface AnalyticsSessionFilter {
  /**
   * The category by which to filter the sessions. The descriptions for each option are as follows:
   *
   * - `BotAlias` – The name of the bot alias.
   * - `BotVersion` – The version of the bot.
   * - `LocaleId` – The locale of the bot.
   * - `Modality` – The modality of the session with the bot (audio, DTMF, or text).
   * - `Channel` – The channel that the bot is integrated with.
   * - `Duration` – The duration of the session.
   * - `conversationEndState` – The final state of the session.
   * - `SessionId` – The identifier of the session with the bot.
   * - `OriginatingRequestId` – The identifier of the first request in a session.
   * - `IntentPath` – The order of intents taken in a session.
   *
   * @public
   */
  name: AnalyticsSessionFilterName | undefined;

  /**
   * The operation by which to filter the category. The following operations are possible:
   *
   * - `CO` – Contains
   * - `EQ` – Equals
   * - `GT` – Greater than
   * - `LT` – Less than
   *
   * The operators that each filter supports are listed below:
   *
   * - `BotAlias` – `EQ`.
   * - `BotVersion` – `EQ`.
   * - `LocaleId` – `EQ`.
   * - `Modality` – `EQ`.
   * - `Channel` – `EQ`.
   * - `Duration` – `EQ`, `GT`, `LT`.
   * - `conversationEndState` – `EQ`, `CO`.
   * - `SessionId` – `EQ`.
   * - `OriginatingRequestId` – `EQ`.
   * - `IntentPath` – `EQ`.
   *
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is `EQ` or `CO`. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the `name`, `operator`, and `values` fields are `Modality`, `EQ`, and `[Speech, Text]`, the operation filters for results where the modality was either `Speech` or `Text`.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Contains the category by which the session analytics were grouped and a member of that category.
 *
 * @public
 */
export interface AnalyticsSessionGroupByKey {
  /**
   * The category by which the session analytics were grouped.
   *
   * @public
   */
  name?: AnalyticsSessionField | undefined;

  /**
   * A member of the category by which the session analytics were grouped.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains the category by which to group the sessions.
 *
 * @public
 */
export interface AnalyticsSessionGroupBySpecification {
  /**
   * Specifies whether to group the session by their end state or their locale.
   *
   * @public
   */
  name: AnalyticsSessionField | undefined;
}

/**
 * Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the user sessions with the bot.
 *
 * @public
 */
export interface AnalyticsSessionMetric {
  /**
   * The metric for which you want to get session summary statistics.
   *
   * - `Count` – The number of sessions.
   * - `Success` – The number of sessions that succeeded.
   * - `Failure` – The number of sessions that failed.
   * - `Dropped` – The number of sessions that the user dropped.
   * - `Duration` – The duration of sessions.
   * - `TurnsPerSession` – The number of turns in the sessions.
   * - `Concurrency` – The number of sessions occurring in the same period of time.
   *
   * @public
   */
  name: AnalyticsSessionMetricName | undefined;

  /**
   * The summary statistic to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of sessions in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * An object containing the results for a session metric you requested.
 *
 * @public
 */
export interface AnalyticsSessionMetricResult {
  /**
   * The metric that you requested.
   *
   * - `Count` – The number of sessions.
   * - `Success` – The number of sessions that succeeded.
   * - `Failure` – The number of sessions that failed.
   * - `Dropped` – The number of sessions that the user dropped.
   * - `Duration` – The duration of sessions.
   * - `TurnPersession` – The number of turns in the sessions.
   * - `Concurrency` – The number of sessions occurring in the same period of time.
   *
   * @public
   */
  name?: AnalyticsSessionMetricName | undefined;

  /**
   * The summary statistic that you requested to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of sessions in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * The value of the summary statistic for the metric that you requested.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * An object containing the results for the session metrics you requested and the bin and/or group(s) they refer to, if applicable.
 *
 * @public
 */
export interface AnalyticsSessionResult {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of the bins.
   *
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * A list of objects containing the criteria you requested for grouping results and the values of the bins.
   *
   * @public
   */
  groupByKeys?: AnalyticsSessionGroupByKey[] | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metricsResults?: AnalyticsSessionMetricResult[] | undefined;
}

/**
 * An object that specifies the last used intent at the time of the utterance as an attribute to return.
 *
 * @public
 */
export interface AnalyticsUtteranceAttribute {
  /**
   * An attribute to return. The only available attribute is the intent that the bot mapped the utterance to.
   *
   * @public
   */
  name: AnalyticsUtteranceAttributeName | undefined;
}

/**
 * An object containing the intent that the bot mapped the utterance to.
 *
 * @public
 */
export interface AnalyticsUtteranceAttributeResult {
  /**
   * The intent that the bot mapped the utterance to.
   *
   * @public
   */
  lastUsedIntent?: string | undefined;
}

/**
 * Contains fields describing a condition by which to filter the utterances. The expression may be understood as `name` `operator` `values`. For example:
 *
 * - `LocaleId EQ Book` – The locale is the string "en".
 * - `UtteranceText CO help` – The text of the utterance contains the string "help".
 *
 * The operators that each filter supports are listed below:
 *
 * - `BotAlias` – `EQ`.
 * - `BotVersion` – `EQ`.
 * - `LocaleId` – `EQ`.
 * - `Modality` – `EQ`.
 * - `Channel` – `EQ`.
 * - `SessionId` – `EQ`.
 * - `OriginatingRequestId` – `EQ`.
 * - `UtteranceState` – `EQ`.
 * - `UtteranceText` – `EQ`, `CO`.
 *
 * @public
 */
export interface AnalyticsUtteranceFilter {
  /**
   * The category by which to filter the utterances. The descriptions for each option are as follows:
   *
   * - `BotAlias` – The name of the bot alias.
   * - `BotVersion` – The version of the bot.
   * - `LocaleId` – The locale of the bot.
   * - `Modality` – The modality of the session with the bot (audio, DTMF, or text).
   * - `Channel` – The channel that the bot is integrated with.
   * - `SessionId` – The identifier of the session with the bot.
   * - `OriginatingRequestId` – The identifier of the first request in a session.
   * - `UtteranceState` – The state of the utterance.
   * - `UtteranceText` – The text in the utterance.
   *
   * @public
   */
  name: AnalyticsUtteranceFilterName | undefined;

  /**
   * The operation by which to filter the category. The following operations are possible:
   *
   * - `CO` – Contains
   * - `EQ` – Equals
   * - `GT` – Greater than
   * - `LT` – Less than
   *
   * The operators that each filter supports are listed below:
   *
   * - `BotAlias` – `EQ`.
   * - `BotVersion` – `EQ`.
   * - `LocaleId` – `EQ`.
   * - `Modality` – `EQ`.
   * - `Channel` – `EQ`.
   * - `SessionId` – `EQ`.
   * - `OriginatingRequestId` – `EQ`.
   * - `UtteranceState` – `EQ`.
   * - `UtteranceText` – `EQ`, `CO`.
   *
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is `EQ` or `CO`. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the `name`, `operator`, and `values` fields are `Modality`, `EQ`, and `[Speech, Text]`, the operation filters for results where the modality was either `Speech` or `Text`.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Contains the category by which the utterance analytics were grouped and the values for that category.
 *
 * @public
 */
export interface AnalyticsUtteranceGroupByKey {
  /**
   * The category by which the utterance analytics were grouped.
   *
   * @public
   */
  name?: AnalyticsUtteranceField | undefined;

  /**
   * A member of the category by which the utterance analytics were grouped.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains the category by which to group the utterances.
 *
 * @public
 */
export interface AnalyticsUtteranceGroupBySpecification {
  /**
   * Specifies whether to group the utterances by their text or their state.
   *
   * @public
   */
  name: AnalyticsUtteranceField | undefined;
}

/**
 * Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the utterances across the user sessions with the bot.
 *
 * @public
 */
export interface AnalyticsUtteranceMetric {
  /**
   * The metric for which you want to get utterance summary statistics.
   *
   * - `Count` – The number of utterances.
   * - `Missed` – The number of utterances that Amazon Lex failed to recognize.
   * - `Detected` – The number of utterances that Amazon Lex managed to detect.
   * - `UtteranceTimestamp` – The date and time of the utterance.
   *
   * @public
   */
  name: AnalyticsUtteranceMetricName | undefined;

  /**
   * The summary statistic to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of utterances in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * Specifies whether to sort the results in ascending or descending order.
   *
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * An object containing the results for the utterance metric you requested.
 *
 * @public
 */
export interface AnalyticsUtteranceMetricResult {
  /**
   * The metric that you requested.
   *
   * - `Count` – The number of utterances.
   * - `Missed` – The number of utterances that Amazon Lex failed to recognize.
   * - `Detected` – The number of utterances that Amazon Lex managed to detect.
   * - `UtteranceTimestamp` – The date and time of the utterance.
   *
   * @public
   */
  name?: AnalyticsUtteranceMetricName | undefined;

  /**
   * The summary statistic that you requested to calculate.
   *
   * - `Sum` – The total count for the category you provide in `name`.
   * - `Average` – The total count divided by the number of utterances in the category you provide in `name`.
   * - `Max` – The highest count in the category you provide in `name`.
   *
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * The value of the summary statistic for the metric that you requested.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * An object containing the results for the utterance metrics you requested and the bin and/or group(s) they refer to, if applicable.
 *
 * @public
 */
export interface AnalyticsUtteranceResult {
  /**
   * A list of objects containing the criteria you requested for binning results and the values of the bins.
   *
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * A list of objects containing the criteria you requested for grouping results and the values of the bins.
   *
   * @public
   */
  groupByKeys?: AnalyticsUtteranceGroupByKey[] | undefined;

  /**
   * A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
   *
   * @public
   */
  metricsResults?: AnalyticsUtteranceMetricResult[] | undefined;

  /**
   * A list of objects containing information about the last used intent at the time of an utterance.
   *
   * @public
   */
  attributeResults?: AnalyticsUtteranceAttributeResult[] | undefined;
}

/**
 * The object containing information that associates the recommended intent/slot type with a conversation.
 *
 * @public
 */
export interface AssociatedTranscript {
  /**
   * The content of the transcript that meets the search filter criteria. For the JSON format of the transcript, see [Output transcript format](https://docs.aws.amazon.com/lexv2/latest/dg/designing-output-format.html).
   *
   * @public
   */
  transcript?: string | undefined;
}

/**
 * Filters to search for the associated transcript.
 *
 * @public
 */
export interface AssociatedTranscriptFilter {
  /**
   * The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId.
   *
   * @public
   */
  name: AssociatedTranscriptFilterName | undefined;

  /**
   * The values to use to filter the transcript.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Specifies the audio input specifications.
 *
 * @public
 */
export interface AudioSpecification {
  /**
   * Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
   *
   * @public
   */
  maxLengthMs: number | undefined;

  /**
   * Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
   *
   * @public
   */
  endTimeoutMs: number | undefined;
}

/**
 * Specifies the DTMF input specifications.
 *
 * @public
 */
export interface DTMFSpecification {
  /**
   * The maximum number of DTMF digits allowed in an utterance.
   *
   * @public
   */
  maxLength: number | undefined;

  /**
   * How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
   *
   * @public
   */
  endTimeoutMs: number | undefined;

  /**
   * The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
   *
   * @public
   */
  deletionCharacter: string | undefined;

  /**
   * The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
   *
   * @public
   */
  endCharacter: string | undefined;
}

/**
 * Specifies the audio and DTMF input specification.
 *
 * @public
 */
export interface AudioAndDTMFInputSpecification {
  /**
   * Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.
   *
   * @public
   */
  startTimeoutMs: number | undefined;

  /**
   * Specifies the settings on audio input.
   *
   * @public
   */
  audioSpecification?: AudioSpecification | undefined;

  /**
   * Specifies the settings on DTMF input.
   *
   * @public
   */
  dtmfSpecification?: DTMFSpecification | undefined;
}

/**
 * Configuration that plays background filler audio during speech-to-speech interactions to mask processing delays and improve the perceived responsiveness of the bot.
 *
 * Audio filler requires `unifiedSpeechSettings` (speech-to-speech) to be enabled on the bot locale when `enabled` is `true`.
 *
 * @public
 */
export interface AudioFillerSettings {
  /**
   * Specifies whether audio filler playback is enabled for the bot locale. Set to `true` to play filler audio while Amazon Lex processes a user utterance. Set to `false` to disable filler audio.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The identifier of the audio filler to play while Amazon Lex processes the user's input. This field is required when `enabled` is `true`.
   *
   * @public
   */
  audioType?: AudioFillerType | undefined;

  /**
   * The time, in milliseconds, to wait after the end of the user's utterance before starting audio filler playback. Valid range is `500` to `5000` milliseconds. If not specified, Amazon Lex uses a default of `2500` milliseconds.
   *
   * @public
   */
  startDelayInMilliseconds?: number | undefined;

  /**
   * The minimum time, in milliseconds, that audio filler plays once it has started, even if the bot response becomes ready sooner. Valid range is `1000` to `5000` milliseconds. If not specified, Amazon Lex uses a default of `3000` milliseconds.
   *
   * @public
   */
  minimumPlayDurationInMilliseconds?: number | undefined;

  /**
   * The silent delay, in milliseconds, inserted between the end of audio filler playback and the start of the bot's response. Valid range is `200` to `1000` milliseconds. If not specified, Amazon Lex uses a default of `500` milliseconds.
   *
   * @public
   */
  responseDeliveryDelayInMilliseconds?: number | undefined;
}

/**
 * Specifies an Amazon S3 bucket for logging audio conversations
 *
 * @public
 */
export interface S3BucketLogDestination {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
   *
   * @public
   */
  s3BucketArn: string | undefined;

  /**
   * The S3 prefix to assign to audio log files.
   *
   * @public
   */
  logPrefix: string | undefined;
}

/**
 * The location of audio log files collected when conversation logging is enabled for a bot.
 *
 * @public
 */
export interface AudioLogDestination {
  /**
   * The Amazon S3 bucket where the audio log files are stored. The IAM role specified in the `roleArn` parameter of the [CreateBot](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html) operation must have permission to write to this bucket.
   *
   * @public
   */
  s3Bucket: S3BucketLogDestination | undefined;
}

/**
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 *
 * @public
 */
export interface AudioLogSetting {
  /**
   * Determines whether audio logging in enabled for the bot.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The location of audio log files collected when conversation logging is enabled for a bot.
   *
   * @public
   */
  destination: AudioLogDestination | undefined;

  /**
   * The option to enable selective conversation log capture for audio.
   *
   * @public
   */
  selectiveLoggingEnabled?: boolean | undefined;
}

/**
 * The new custom vocabulary item from the custom vocabulary list.
 *
 * @public
 */
export interface NewCustomVocabularyItem {
  /**
   * The unique phrase for the new custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  phrase: string | undefined;

  /**
   * The weight assigned to the new custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  weight?: number | undefined;

  /**
   * The display as value assigned to the new custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  displayAs?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateCustomVocabularyItemRequest {
  /**
   * The identifier of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The identifier of the version of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see [Supported Languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * A list of new custom vocabulary items. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.
   *
   * @public
   */
  customVocabularyItemList: NewCustomVocabularyItem[] | undefined;
}

/**
 * The unique failed custom vocabulary item from the custom vocabulary list.
 *
 * @public
 */
export interface FailedCustomVocabularyItem {
  /**
   * The unique item identifer for the failed custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  itemId?: string | undefined;

  /**
   * The error message for the failed custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The unique error code for the failed custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  errorCode?: ErrorCode | undefined;
}

/**
 * The unique custom vocabulary item from the custom vocabulary list.
 *
 * @public
 */
export interface CustomVocabularyItem {
  /**
   * The unique item identifer for the custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  itemId: string | undefined;

  /**
   * The unique phrase for the custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  phrase: string | undefined;

  /**
   * The weight assigned for the custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  weight?: number | undefined;

  /**
   * The DisplayAs value for the custom vocabulary item from the custom vocabulary list.
   *
   * @public
   */
  displayAs?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateCustomVocabularyItemResponse {
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
   * A list of custom vocabulary items that failed to create during the operation. The reason for the error is contained within each error object.
   *
   * @public
   */
  errors?: FailedCustomVocabularyItem[] | undefined;

  /**
   * A list of custom vocabulary items that were successfully created during the operation.
   *
   * @public
   */
  resources?: CustomVocabularyItem[] | undefined;
}

/**
 * The unique entry identifier for the custom vocabulary items.
 *
 * @public
 */
export interface CustomVocabularyEntryId {
  /**
   * The unique item identifier for the custom vocabulary items.
   *
   * @public
   */
  itemId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCustomVocabularyItemRequest {
  /**
   * The identifier of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The identifier of the version of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see [Supported Languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier.
   *
   * @public
   */
  customVocabularyItemList: CustomVocabularyEntryId[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCustomVocabularyItemResponse {
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
   * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A list of custom vocabulary items that failed to delete during the operation. The reason for the error is contained within each error object.
   *
   * @public
   */
  errors?: FailedCustomVocabularyItem[] | undefined;

  /**
   * A list of custom vocabulary items that were successfully deleted during the operation.
   *
   * @public
   */
  resources?: CustomVocabularyItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCustomVocabularyItemRequest {
  /**
   * The identifier of the bot associated with this custom vocabulary
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The identifier of the version of the bot associated with this custom vocabulary.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see [Supported Languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * A list of custom vocabulary items with updated fields. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.
   *
   * @public
   */
  customVocabularyItemList: CustomVocabularyItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCustomVocabularyItemResponse {
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
   * A list of custom vocabulary items that failed to update during the operation. The reason for the error is contained within each error object.
   *
   * @public
   */
  errors?: FailedCustomVocabularyItem[] | undefined;

  /**
   * A list of custom vocabulary items that were successfully updated during the operation.
   *
   * @public
   */
  resources?: CustomVocabularyItem[] | undefined;
}

/**
 * The details on the Bedrock guardrail configuration.
 *
 * @public
 */
export interface BedrockGuardrailConfiguration {
  /**
   * The unique guardrail id for the Bedrock guardrail configuration.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The guardrail version for the Bedrock guardrail configuration.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * The exact response fields given by the Bedrock knowledge store.
 *
 * @public
 */
export interface BedrockKnowledgeStoreExactResponseFields {
  /**
   * The answer field used for an exact response from Bedrock Knowledge Store.
   *
   * @public
   */
  answerField?: string | undefined;
}

/**
 * Contains details about the configuration of a Amazon Bedrock knowledge base.
 *
 * @public
 */
export interface BedrockKnowledgeStoreConfiguration {
  /**
   * The base ARN of the knowledge base used.
   *
   * @public
   */
  bedrockKnowledgeBaseArn: string | undefined;

  /**
   * Specifies whether to return an exact response, or to return an answer generated by the model, using the fields you specify from the database.
   *
   * @public
   */
  exactResponse?: boolean | undefined;

  /**
   * Contains the names of the fields used for an exact response to the user.
   *
   * @public
   */
  exactResponseFields?: BedrockKnowledgeStoreExactResponseFields | undefined;
}

/**
 * Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.
 *
 * @public
 */
export interface BedrockModelSpecification {
  /**
   * The ARN of the foundation model used in descriptive bot building.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The guardrail configuration in the Bedrock model specification details.
   *
   * @public
   */
  guardrail?: BedrockGuardrailConfiguration | undefined;

  /**
   * The Bedrock trace status in the Bedrock model specification details.
   *
   * @public
   */
  traceStatus?: BedrockTraceStatus | undefined;

  /**
   * The custom prompt used in the Bedrock model specification details.
   *
   * @public
   */
  customPrompt?: string | undefined;
}

/**
 * Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes.
 *
 * @public
 */
export interface BotAliasHistoryEvent {
  /**
   * The version of the bot that was used in the event.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The date and time that the event started.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The date and time that the event ended.
   *
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
 *
 * @public
 */
export interface LambdaCodeHook {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * @public
   */
  lambdaARN: string | undefined;

  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
   *
   * @public
   */
  codeHookInterfaceVersion: string | undefined;
}

/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 *
 * @public
 */
export interface CodeHookSpecification {
  /**
   * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
   *
   * @public
   */
  lambdaCodeHook: LambdaCodeHook | undefined;
}

/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
 *
 * @public
 */
export interface BotAliasLocaleSettings {
  /**
   * Determines whether the locale is enabled for the bot. If the value is `false`, the locale isn't available for use.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Specifies the Lambda function that should be used in the locale.
   *
   * @public
   */
  codeHookSpecification?: CodeHookSpecification | undefined;
}

/**
 * Contains information about all the aliases replication statuses applicable for global resiliency.
 *
 * @public
 */
export interface BotAliasReplicaSummary {
  /**
   * The bot alias ID for all the alias bot replications.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The replication statuses for all the alias bot replications.
   *
   * @public
   */
  botAliasReplicationStatus?: BotAliasReplicationStatus | undefined;

  /**
   * The bot version for all the alias bot replications.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The creation time and date for all the alias bot replications.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The last time and date updated for all the alias bot replications.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The reasons for failure for the aliases bot replications.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * Summary information about bot aliases returned from the [ListBotAliases](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html) operation.
 *
 * @public
 */
export interface BotAliasSummary {
  /**
   * The unique identifier assigned to the bot alias. You can use this ID to get detailed information about the alias using the [DescribeBotAlias](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotAlias.html) operation.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The name of the bot alias.
   *
   * @public
   */
  botAliasName?: string | undefined;

  /**
   * The description of the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot that the bot alias references.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The current state of the bot alias. If the status is `Available`, the alias is ready for use.
   *
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;

  /**
   * A timestamp of the date and time that the bot alias was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the bot alias was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * The target Amazon S3 location for the test set execution using a bot alias.
 *
 * @public
 */
export interface BotAliasTestExecutionTarget {
  /**
   * The bot Id of the bot alias used in the test set execution.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The bot alias Id of the bot alias used in the test set execution.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale Id of the bot alias used in the test set execution.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * Contains summary information about a historical bot analysis execution.
 *
 * @public
 */
export interface BotAnalyzerHistorySummary {
  /**
   * The status of the historical analysis execution.
   *
   * Valid Values: `Processing | Available | Failed | Stopping | Stopped`
   *
   * @public
   */
  botAnalyzerStatus: BotAnalyzerStatus | undefined;

  /**
   * The date and time when the analysis was initiated.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The unique identifier for the analysis request.
   *
   * @public
   */
  botAnalyzerRequestId: string | undefined;
}

/**
 * Specifies the location of an identified issue within the bot configuration.
 *
 * @public
 */
export interface IssueLocation {
  /**
   * The locale identifier where the issue was found.
   *
   * @public
   */
  botLocale?: string | undefined;

  /**
   * The intent identifier where the issue was found, if applicable.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The slot identifier where the issue was found, if applicable.
   *
   * @public
   */
  slotId?: string | undefined;
}

/**
 * Contains a recommendation for bot optimization identified by the Bot Analyzer.
 *
 * @public
 */
export interface BotAnalyzerRecommendation {
  /**
   * The location information for the identified issue within the bot configuration.
   *
   * @public
   */
  issueLocation: IssueLocation | undefined;

  /**
   * The priority level of the recommendation.
   *
   * Valid Values: `High | Medium | Low`
   *
   * @public
   */
  priority: Priority | undefined;

  /**
   * A detailed description of the identified configuration issue.
   *
   * @public
   */
  issueDescription: string | undefined;

  /**
   * The recommended solution to address the identified issue.
   *
   * @public
   */
  proposedFix: string | undefined;
}

/**
 * Provides the identity of a the bot that was exported.
 *
 * @public
 */
export interface BotExportSpecification {
  /**
   * The identifier of the bot assigned by Amazon Lex.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that was exported. This will be either `DRAFT` or the version number.
   *
   * @public
   */
  botVersion: string | undefined;
}

/**
 * Filters the responses returned by the `ListBots` operation.
 *
 * @public
 */
export interface BotFilter {
  /**
   * The name of the field to filter the list of bots.
   *
   * @public
   */
  name: BotFilterName | undefined;

  /**
   * The value to use for filtering the list of bots.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify `EQ` when the `ListBots` operation should return only aliases that equal the specified value. Specify `CO` when the `ListBots` operation should return aliases that contain the specified value.
   *
   * @public
   */
  operator: BotFilterOperator | undefined;
}

/**
 * By default, data stored by Amazon Lex is encrypted. The `DataPrivacy` structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
 *
 * @public
 */
export interface DataPrivacy {
  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ](http://aws.amazon.com/lex/faqs#data-security).
   *
   * @public
   */
  childDirected: boolean | undefined;
}

/**
 * Settings parameters for the error logs, whether it is enabled or disabled.
 *
 * @public
 */
export interface ErrorLogSettings {
  /**
   * Settings parameters for the error logs, when it is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Provides the bot parameters required for importing a bot.
 *
 * @public
 */
export interface BotImportSpecification {
  /**
   * The name that Amazon Lex should use for the bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * By default, data stored by Amazon Lex is encrypted. The `DataPrivacy` structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
   *
   * @public
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * Allows you to configure destinations where error logs will be published during the bot import process.
   *
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;

  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.
   *
   * You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * A list of tags to add to the bot. You can only add tags when you import a bot. You can't use the `UpdateBot` operation to update tags. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  botTags?: Record<string, string> | undefined;

  /**
   * A list of tags to add to the test alias for a bot. You can only add tags when you import a bot. You can't use the `UpdateAlias` operation to update tags. To update tags on the test alias, use the `TagResource` operation.
   *
   * @public
   */
  testBotAliasTags?: Record<string, string> | undefined;
}

/**
 * Provides the bot locale parameters required for exporting a bot locale.
 *
 * @public
 */
export interface BotLocaleExportSpecification {
  /**
   * The identifier of the bot to create the locale for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to export.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale to export. The string must match one of the locales in the bot.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * Filters responses returned by the `ListBotLocales` operation.
 *
 * @public
 */
export interface BotLocaleFilter {
  /**
   * The name of the field to filter the list of bots.
   *
   * @public
   */
  name: BotLocaleFilterName | undefined;

  /**
   * The value to use for filtering the list of bots.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify `EQ` when the `ListBotLocales` operation should return only aliases that equal the specified value. Specify `CO` when the `ListBotLocales` operation should return aliases that contain the specified value.
   *
   * @public
   */
  operator: BotLocaleFilterOperator | undefined;
}

/**
 * Provides information about an event that occurred affecting the bot locale.
 *
 * @public
 */
export interface BotLocaleHistoryEvent {
  /**
   * A description of the event that occurred.
   *
   * @public
   */
  event: string | undefined;

  /**
   * A timestamp of the date and time that the event occurred.
   *
   * @public
   */
  eventDate: Date | undefined;
}

/**
 * Specifies configuration that restricts speech detection to the primary (loudest) speaker during streaming audio conversations, so that speech from background speakers does not start a turn, interrupt the bot, or reach speech recognition.
 *
 * @public
 */
export interface SpeakerDiarizationSettings {
  /**
   * Specifies whether speaker diarization is enabled for the bot locale. Set to `true` to have Amazon Lex treat speech from speakers other than the primary speaker as non-speech. Set to `false` to disable speaker diarization and rely on voice activity detection alone.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Configuration settings for integrating Deepgram speech-to-text models with Amazon Lex.
 *
 * @public
 */
export interface DeepgramSpeechModelConfig {
  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the Deepgram API token.
   *
   * @public
   */
  apiTokenSecretArn: string | undefined;

  /**
   * The identifier of the Deepgram speech-to-text model to use for processing speech input.
   *
   * @public
   */
  modelId?: string | undefined;
}

/**
 * Configuration settings that define which speech-to-text model to use for processing speech input.
 *
 * @public
 */
export interface SpeechModelConfig {
  /**
   * Configuration settings for using Deepgram as the speech-to-text provider.
   *
   * @public
   */
  deepgramConfig?: DeepgramSpeechModelConfig | undefined;
}

/**
 * Settings that control how Amazon Lex processes and recognizes speech input from users.
 *
 * @public
 */
export interface SpeechRecognitionSettings {
  /**
   * The speech-to-text model to use.
   *
   * @public
   */
  speechModelPreference?: SpeechModelPreference | undefined;

  /**
   * Configuration settings for the selected speech-to-text model.
   *
   * @public
   */
  speechModelConfig?: SpeechModelConfig | undefined;
}

/**
 * Configuration for a foundation model used for speech synthesis and recognition capabilities.
 *
 * @public
 */
export interface SpeechFoundationModel {
  /**
   * The Amazon Resource Name (ARN) of the foundation model used for speech processing.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The identifier of the voice to use for speech synthesis with the foundation model.
   *
   * @public
   */
  voiceId?: string | undefined;
}

/**
 * Unified configuration settings that combine speech recognition and synthesis capabilities.
 *
 * @public
 */
export interface UnifiedSpeechSettings {
  /**
   * The foundation model configuration to use for unified speech processing capabilities.
   *
   * @public
   */
  speechFoundationModel: SpeechFoundationModel | undefined;
}

/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
 *
 * Valid values include:
 *
 * - `standard`
 * - `neural`
 * - `long-form`
 * - `generative`
 *
 * @public
 */
export interface VoiceSettings {
  /**
   * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the [`engine` parameter of the `SynthesizeSpeech` operation](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine) in the *Amazon Polly developer guide*.
   *
   * If you do not specify a value, the default is `standard`.
   *
   * @public
   */
  engine?: VoiceEngine | undefined;

  /**
   * The identifier of the Amazon Polly voice to use.
   *
   * @public
   */
  voiceId: string | undefined;
}

/**
 * Provides the bot locale parameters required for importing a bot locale.
 *
 * @public
 */
export interface BotLocaleImportSpecification {
  /**
   * The identifier of the bot to import the locale to.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to import the locale to. This can only be the `DRAFT` version of the bot.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents. `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` are only inserted if they are configured for the bot.
   *
   * For example, suppose a bot is configured with the confidence threshold of 0.80 and the `AMAZON.FallbackIntent`. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the `PostText` operation would be:
   *
   * - `AMAZON.FallbackIntent`
   * - `IntentA`
   * - `IntentB`
   * - `IntentC`
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * Defines settings for using an Amazon Polly voice to communicate with a user.
   *
   * Valid values include:
   *
   * - `standard`
   * - `neural`
   * - `long-form`
   * - `generative`
   *
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * Speech-to-text settings to apply when importing the bot locale configuration.
   *
   * @public
   */
  speechRecognitionSettings?: SpeechRecognitionSettings | undefined;

  /**
   * The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize speech recognition accuracy by adjusting how the system responds to background noise during voice interactions.
   *
   * @public
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity | undefined;

  /**
   * Unified speech settings to apply when importing the bot locale configuration.
   *
   * @public
   */
  unifiedSpeechSettings?: UnifiedSpeechSettings | undefined;

  /**
   * Audio filler settings to apply when importing the bot locale configuration. Audio filler requires `unifiedSpeechSettings` (speech-to-speech) to be enabled when `enabled` is `true`.
   *
   * @public
   */
  audioFillerSettings?: AudioFillerSettings | undefined;

  /**
   * The speaker diarization settings to apply when importing the bot locale configuration.
   *
   * @public
   */
  speakerDiarizationSettings?: SpeakerDiarizationSettings | undefined;
}

/**
 * Specifies attributes for sorting a list of bot locales.
 *
 * @public
 */
export interface BotLocaleSortBy {
  /**
   * The bot locale attribute to sort by.
   *
   * @public
   */
  attribute: BotLocaleSortAttribute | undefined;

  /**
   * Specifies whether to sort the bot locales in ascending or descending order.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Summary information about bot locales returned by the [ListBotLocales](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html) operation.
 *
 * @public
 */
export interface BotLocaleSummary {
  /**
   * The language and locale of the bot locale.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The name of the bot locale.
   *
   * @public
   */
  localeName?: string | undefined;

  /**
   * The description of the bot locale.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the bot locale. When the status is `Built` the locale is ready for use.
   *
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * A timestamp of the date and time that the bot locale was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the bot locale was last built.
   *
   * @public
   */
  lastBuildSubmittedDateTime?: Date | undefined;
}

/**
 * A bot that is a member of a network of bots.
 *
 * @public
 */
export interface BotMember {
  /**
   * The unique ID of a bot that is a member of this network of bots.
   *
   * @public
   */
  botMemberId: string | undefined;

  /**
   * The unique name of a bot that is a member of this network of bots.
   *
   * @public
   */
  botMemberName: string | undefined;

  /**
   * The alias ID of a bot that is a member of this network of bots.
   *
   * @public
   */
  botMemberAliasId: string | undefined;

  /**
   * The alias name of a bot that is a member of this network of bots.
   *
   * @public
   */
  botMemberAliasName: string | undefined;

  /**
   * The version of a bot that is a member of this network of bots.
   *
   * @public
   */
  botMemberVersion: string | undefined;
}

/**
 * The object that contains the statistical summary of recommended intents associated with the bot recommendation.
 *
 * @public
 */
export interface IntentStatistics {
  /**
   * The number of recommended intents associated with the bot recommendation.
   *
   * @public
   */
  discoveredIntentCount?: number | undefined;
}

/**
 * The object that contains the statistical summary of the recommended slot type associated with the bot recommendation.
 *
 * @public
 */
export interface SlotTypeStatistics {
  /**
   * The number of recommended slot types associated with the bot recommendation.
   *
   * @public
   */
  discoveredSlotTypeCount?: number | undefined;
}

/**
 * A statistical summary of the bot recommendation results.
 *
 * @public
 */
export interface BotRecommendationResultStatistics {
  /**
   * Statistical information about about the intents associated with the bot recommendation results.
   *
   * @public
   */
  intents?: IntentStatistics | undefined;

  /**
   * Statistical information about the slot types associated with the bot recommendation results.
   *
   * @public
   */
  slotTypes?: SlotTypeStatistics | undefined;
}

/**
 * The object representing the URL of the bot definition, the URL of the associated transcript, and a statistical summary of the bot recommendation results.
 *
 * @public
 */
export interface BotRecommendationResults {
  /**
   * The presigned URL link of the recommended bot definition.
   *
   * @public
   */
  botLocaleExportUrl?: string | undefined;

  /**
   * The presigned url link of the associated transcript.
   *
   * @public
   */
  associatedTranscriptsUrl?: string | undefined;

  /**
   * The statistical summary of the bot recommendation results.
   *
   * @public
   */
  statistics?: BotRecommendationResultStatistics | undefined;
}

/**
 * A summary of the bot recommendation.
 *
 * @public
 */
export interface BotRecommendationSummary {
  /**
   * The status of the bot recommendation.
   *
   * If the status is Failed, then the reasons for the failure are listed in the failureReasons field.
   *
   * @public
   */
  botRecommendationStatus: BotRecommendationStatus | undefined;

  /**
   * The unique identifier of the bot recommendation to be updated.
   *
   * @public
   */
  botRecommendationId: string | undefined;

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
}

/**
 * Contains summary information about all the replication statuses applicable for global resiliency.
 *
 * @public
 */
export interface BotReplicaSummary {
  /**
   * The replica region used in the replication statuses summary.
   *
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * The creation time and date for the replicated bots.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The operation status for the replicated bot applicable.
   *
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;

  /**
   * The reasons for the failure for the replicated bot.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * Specifies attributes for sorting a list of bots.
 *
 * @public
 */
export interface BotSortBy {
  /**
   * The attribute to use to sort the list of bots.
   *
   * @public
   */
  attribute: BotSortAttribute | undefined;

  /**
   * The order to sort the list. You can choose ascending or descending.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Summary information about a bot returned by the [ListBots](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html) operation.
 *
 * @public
 */
export interface BotSummary {
  /**
   * The unique identifier assigned to the bot. Use this ID to get detailed information about the bot with the [DescribeBot](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBot.html) operation.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The name of the bot.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the bot. When the status is `Available` the bot is ready for use.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * The latest numerical version in use for the bot.
   *
   * @public
   */
  latestBotVersion?: string | undefined;

  /**
   * The date and time that the bot was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The type of the bot.
   *
   * @public
   */
  botType?: BotType | undefined;
}

/**
 * The version of a bot used for a bot locale.
 *
 * @public
 */
export interface BotVersionLocaleDetails {
  /**
   * The version of a bot used for a bot locale.
   *
   * @public
   */
  sourceBotVersion: string | undefined;
}

/**
 * The sort category for the version replicated bots.
 *
 * @public
 */
export interface BotVersionReplicaSortBy {
  /**
   * The attribute of the sort category for the version replicated bots.
   *
   * @public
   */
  attribute: BotVersionReplicaSortAttribute | undefined;

  /**
   * The order of the sort category for the version replicated bots.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Contains summary information for all the version replication statuses applicable for Global resiliency.
 *
 * @public
 */
export interface BotVersionReplicaSummary {
  /**
   * The bot version for the summary information for all the version replication statuses.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The version replication status for all the replicated bots.
   *
   * @public
   */
  botVersionReplicationStatus?: BotVersionReplicationStatus | undefined;

  /**
   * The creation date and time of the replication status for all the replicated bots.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The reasons for replication failure for all the replicated bots.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * Specifies attributes for sorting a list of bot versions.
 *
 * @public
 */
export interface BotVersionSortBy {
  /**
   * The attribute to use to sort the list of versions.
   *
   * @public
   */
  attribute: BotVersionSortAttribute | undefined;

  /**
   * The order to sort the list. You can specify ascending or descending order.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Summary information about a bot version returned by the [ListBotVersions](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html) operation.
 *
 * @public
 */
export interface BotVersionSummary {
  /**
   * The name of the bot associated with the version.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The numeric version of the bot, or `DRAFT` to indicate that this is the version of the bot that can be updated..
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the bot. When the status is available, the version of the bot is ready for use.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * A timestamp of the date and time that the version was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface BuildBotLocaleRequest {
  /**
   * The identifier of the bot to build. The identifier is returned in the response from the [CreateBot](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html) operation.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to build. This can only be the draft version of the bot.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface BuildBotLocaleResponse {
  /**
   * The identifier of the specified bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that was built. This is only the draft version of the bot.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale specified of where the bot can be used.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The bot's build status. When the status is `ReadyExpressTesting` you can test the bot using the utterances defined for the intents and slot types. When the status is `Built`, the bot is ready for use and can be tested using any utterance.
   *
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * A timestamp indicating the date and time that the bot was last built for this locale.
   *
   * @public
   */
  lastBuildSubmittedDateTime?: Date | undefined;
}

/**
 * Contains specifications for the descriptive bot building feature.
 *
 * @public
 */
export interface DescriptiveBotBuilderSpecification {
  /**
   * Specifies whether the descriptive bot building feature is activated or not.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * An object containing information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.
   *
   * @public
   */
  bedrockModelSpecification?: BedrockModelSpecification | undefined;
}

/**
 * Contains specifications for the sample utterance generation feature.
 *
 * @public
 */
export interface SampleUtteranceGenerationSpecification {
  /**
   * Specifies whether to enable sample utterance generation or not.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.
   *
   * @public
   */
  bedrockModelSpecification?: BedrockModelSpecification | undefined;
}

/**
 * Contains specifications about the Amazon Lex build time generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
 *
 * @public
 */
export interface BuildtimeSettings {
  /**
   * An object containing specifications for the descriptive bot building feature.
   *
   * @public
   */
  descriptiveBotBuilder?: DescriptiveBotBuilderSpecification | undefined;

  /**
   * Contains specifications for the sample utterance generation feature.
   *
   * @public
   */
  sampleUtteranceGeneration?: SampleUtteranceGenerationSpecification | undefined;
}

/**
 * Specifies attributes for sorting a list of built-in intents.
 *
 * @public
 */
export interface BuiltInIntentSortBy {
  /**
   * The attribute to use to sort the list of built-in intents.
   *
   * @public
   */
  attribute: BuiltInIntentSortAttribute | undefined;

  /**
   * The order to sort the list. You can specify ascending or descending order.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Provides summary information about a built-in intent for the [ListBuiltInIntents](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html) operation.
 *
 * @public
 */
export interface BuiltInIntentSummary {
  /**
   * The signature of the built-in intent. Use this to specify the parent intent of a derived intent.
   *
   * @public
   */
  intentSignature?: string | undefined;

  /**
   * The description of the intent.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Specifies attributes for sorting a list of built-in slot types.
 *
 * @public
 */
export interface BuiltInSlotTypeSortBy {
  /**
   * The attribute to use to sort the list of built-in intents.
   *
   * @public
   */
  attribute: BuiltInSlotTypeSortAttribute | undefined;

  /**
   * The order to sort the list. You can choose ascending or descending.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Provides summary information about a built-in slot type for the [ListBuiltInSlotTypes](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html) operation.
 *
 * @public
 */
export interface BuiltInSlotTypeSummary {
  /**
   * The signature of the built-in slot type. Use this to specify the parent slot type of a derived slot type.
   *
   * @public
   */
  slotTypeSignature?: string | undefined;

  /**
   * The description of the built-in slot type.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Describes a button to use on a response card used to gather slot values from a user.
 *
 * @public
 */
export interface Button {
  /**
   * The text that appears on the button. Use this to tell the user what value is returned when they choose this button.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
 *
 * @public
 */
export interface CloudWatchLogGroupLogDestination {
  /**
   * The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
   *
   * @public
   */
  cloudWatchLogGroupArn: string | undefined;

  /**
   * The prefix of the log stream name within the log group that you specified
   *
   * @public
   */
  logPrefix: string | undefined;
}

/**
 * Subslot type composition.
 *
 * @public
 */
export interface SubSlotTypeComposition {
  /**
   * Name of a constituent sub slot inside a composite slot.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier assigned to a slot type. This refers to either a built-in slot type or the unique slotTypeId of a custom slot type.
   *
   * @public
   */
  slotTypeId: string | undefined;
}

/**
 * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
 *
 * @public
 */
export interface CompositeSlotTypeSetting {
  /**
   * Subslots in the composite slot.
   *
   * @public
   */
  subSlots?: SubSlotTypeComposition[] | undefined;
}

/**
 * Provides an expression that evaluates to true or false.
 *
 * @public
 */
export interface Condition {
  /**
   * The expression string that is evaluated.
   *
   * @public
   */
  expressionString: string | undefined;
}

/**
 * Defines the action that the bot executes at runtime when the conversation reaches this step.
 *
 * @public
 */
export interface DialogAction {
  /**
   * The action that the bot should execute.
   *
   * @public
   */
  type: DialogActionType | undefined;

  /**
   * If the dialog action is `ElicitSlot`, defines the slot to elicit from the user.
   *
   * @public
   */
  slotToElicit?: string | undefined;

  /**
   * When true the next message for the intent is not used.
   *
   * @public
   */
  suppressNextMessage?: boolean | undefined;
}

/**
 * The value to set in a slot.
 *
 * @public
 */
export interface SlotValue {
  /**
   * The value that Amazon Lex determines for the slot. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex choose the first value in the `resolvedValues` list.
   *
   * @public
   */
  interpretedValue?: string | undefined;
}

/**
 * A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
 *
 * @public
 */
export interface CustomPayload {
  /**
   * The string that is sent to your application.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform.
 *
 * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
 *
 * @public
 */
export interface ImageResponseCard {
  /**
   * The title to display on the response card. The format of the title is determined by the platform displaying the response card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.
   *
   * @public
   */
  subtitle?: string | undefined;

  /**
   * The URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.
   *
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * A list of buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button.
   *
   * @public
   */
  buttons?: Button[] | undefined;
}

/**
 * Defines an ASCII text message to send to the user.
 *
 * @public
 */
export interface PlainTextMessage {
  /**
   * The message to send to the user.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Defines a Speech Synthesis Markup Language (SSML) prompt.
 *
 * @public
 */
export interface SSMLMessage {
  /**
   * The SSML text that defines the prompt.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The object that provides message text and its type.
 *
 * @public
 */
export interface Message {
  /**
   * A message in plain text format.
   *
   * @public
   */
  plainTextMessage?: PlainTextMessage | undefined;

  /**
   * A message in a custom format defined by the client application.
   *
   * @public
   */
  customPayload?: CustomPayload | undefined;

  /**
   * A message in Speech Synthesis Markup Language (SSML).
   *
   * @public
   */
  ssmlMessage?: SSMLMessage | undefined;

  /**
   * A message that defines a response card that the client application can show to the user.
   *
   * @public
   */
  imageResponseCard?: ImageResponseCard | undefined;
}

/**
 * Provides one or more messages that Amazon Lex should send to the user.
 *
 * @public
 */
export interface MessageGroup {
  /**
   * The primary message that Amazon Lex should send to the user.
   *
   * @public
   */
  message: Message | undefined;

  /**
   * Message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user.
   *
   * @public
   */
  variations?: Message[] | undefined;
}

/**
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
 *
 * @public
 */
export interface ResponseSpecification {
  /**
   * A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime.
   *
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * Indicates whether the user can interrupt a speech response from Amazon Lex.
   *
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * The item listing the evaluation of intent level success or failure.
 *
 * @public
 */
export interface ConversationLevelIntentClassificationResultItem {
  /**
   * The intent name used in the evaluation of intent level success or failure.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * The number of times the specific intent is used in the evaluation of intent level success or failure.
   *
   * @public
   */
  matchResult: TestResultMatchStatus | undefined;
}

/**
 * The conversation level details of the conversation used in the test set.
 *
 * @public
 */
export interface ConversationLevelResultDetail {
  /**
   * The success or failure of the streaming of the conversation.
   *
   * @public
   */
  endToEndResult: TestResultMatchStatus | undefined;

  /**
   * The speech transcription success or failure details of the conversation.
   *
   * @public
   */
  speechTranscriptionResult?: TestResultMatchStatus | undefined;
}

/**
 * The slots used for the slot resolution in the conversation.
 *
 * @public
 */
export interface ConversationLevelSlotResolutionResultItem {
  /**
   * The intents used in the slots list for the slot resolution details.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * The slot name in the slots list for the slot resolution details.
   *
   * @public
   */
  slotName: string | undefined;

  /**
   * The number of matching slots used in the slots listings for the slot resolution evaluation.
   *
   * @public
   */
  matchResult: TestResultMatchStatus | undefined;
}

/**
 * The test result evaluation item at the conversation level.
 *
 * @public
 */
export interface ConversationLevelTestResultItem {
  /**
   * The conversation Id of the test result evaluation item.
   *
   * @public
   */
  conversationId: string | undefined;

  /**
   * The end-to-end success or failure of the test result evaluation item.
   *
   * @public
   */
  endToEndResult: TestResultMatchStatus | undefined;

  /**
   * The speech transcription success or failure of the test result evaluation item.
   *
   * @public
   */
  speechTranscriptionResult?: TestResultMatchStatus | undefined;

  /**
   * The intent classification of the test result evaluation item.
   *
   * @public
   */
  intentClassificationResults: ConversationLevelIntentClassificationResultItem[] | undefined;

  /**
   * The slot success or failure of the test result evaluation item.
   *
   * @public
   */
  slotResolutionResults: ConversationLevelSlotResolutionResultItem[] | undefined;
}

/**
 * The test set results data at the conversation level.
 *
 * @public
 */
export interface ConversationLevelTestResults {
  /**
   * The item list in the test set results data at the conversation level.
   *
   * @public
   */
  items: ConversationLevelTestResultItem[] | undefined;
}

/**
 * The selection to filter the test set results data at the conversation level.
 *
 * @public
 */
export interface ConversationLevelTestResultsFilterBy {
  /**
   * The selection of matched or mismatched end-to-end status to filter test set results data at the conversation level.
   *
   * @public
   */
  endToEndResult?: TestResultMatchStatus | undefined;
}

/**
 * The selected data source to filter the conversation log.
 *
 * @public
 */
export interface ConversationLogsDataSourceFilterBy {
  /**
   * The start time for the conversation log.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time for the conversation log.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The selection to filter by input mode for the conversation logs.
   *
   * @public
   */
  inputMode: ConversationLogsInputModeFilter | undefined;
}

/**
 * The data source that uses conversation logs.
 *
 * @public
 */
export interface ConversationLogsDataSource {
  /**
   * The bot Id from the conversation logs.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The bot alias Id from the conversation logs.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The locale Id of the conversation log.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The filter for the data source of the conversation log.
   *
   * @public
   */
  filter: ConversationLogsDataSourceFilterBy | undefined;
}

/**
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 *
 * @public
 */
export interface TextLogDestination {
  /**
   * Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
   *
   * @public
   */
  cloudWatch: CloudWatchLogGroupLogDestination | undefined;
}

/**
 * Defines settings to enable text conversation logs.
 *
 * @public
 */
export interface TextLogSetting {
  /**
   * Determines whether conversation logs should be stored for an alias.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
   *
   * @public
   */
  destination: TextLogDestination | undefined;

  /**
   * The option to enable selective conversation log capture for text.
   *
   * @public
   */
  selectiveLoggingEnabled?: boolean | undefined;
}

/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 *
 * @public
 */
export interface ConversationLogSettings {
  /**
   * The Amazon CloudWatch Logs settings for logging text and metadata.
   *
   * @public
   */
  textLogSettings?: TextLogSetting[] | undefined;

  /**
   * The Amazon S3 settings for logging audio to an S3 bucket.
   *
   * @public
   */
  audioLogSettings?: AudioLogSetting[] | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * The name of the bot. The bot name must be unique in the account that creates the bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * A description of the bot. It appears in lists to help you identify a particular bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
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
   * A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the `UpdateBot` operation to update tags. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  botTags?: Record<string, string> | undefined;

  /**
   * A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the `UpdateAlias` operation to update tags. To update tags on the test alias, use the `TagResource` operation.
   *
   * @public
   */
  testBotAliasTags?: Record<string, string> | undefined;

  /**
   * The type of a bot to create.
   *
   * @public
   */
  botType?: BotType | undefined;

  /**
   * The list of bot members in a network to be created.
   *
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * Specifies the configuration for error logging during bot creation.
   *
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * A unique identifier for a particular bot. You use this to identify the bot when you call other Amazon Lex API operations.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The name specified for the bot.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The description specified for the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The IAM role specified for the bot.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The data privacy settings specified for the bot.
   *
   * @public
   */
  dataPrivacy?: DataPrivacy | undefined;

  /**
   * The session idle time specified for the bot.
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
   * A timestamp indicating the date and time that the bot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A list of tags associated with the bot.
   *
   * @public
   */
  botTags?: Record<string, string> | undefined;

  /**
   * A list of tags associated with the test alias for the bot.
   *
   * @public
   */
  testBotAliasTags?: Record<string, string> | undefined;

  /**
   * The type of a bot that was created.
   *
   * @public
   */
  botType?: BotType | undefined;

  /**
   * The list of bots in a network that was created.
   *
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * Specifies configuration settings for delivering error logs to Cloudwatch Logs in an Amazon Lex bot response.
   *
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 *
 * @public
 */
export interface SentimentAnalysisSettings {
  /**
   * Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
   *
   * @public
   */
  detectSentiment: boolean | undefined;
}

/**
 * @public
 */
export interface CreateBotAliasRequest {
  /**
   * The alias to create. The name must be unique for the bot.
   *
   * @public
   */
  botAliasName: string | undefined;

  /**
   * A description of the alias. Use this description to help identify the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot that this alias points to. You can use the [UpdateBotAlias](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html) operation to change the bot version associated with the alias.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales.
   *
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * Specifies whether Amazon Lex logs text and audio for a conversation with the bot. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio logs store audio input in Amazon S3.
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
   * The unique identifier of the bot that the alias applies to.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the `UpdateBotAlias` operation to update the tags on a bot alias. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBotAliasResponse {
  /**
   * The unique identifier of the bot alias.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The name specified for the bot alias.
   *
   * @public
   */
  botAliasName?: string | undefined;

  /**
   * The description specified for the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot associated with this alias.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * Configuration information for a specific locale.
   *
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * The conversation log settings specified for the alias.
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
   * The current status of the alias. The alias is first put into the `Creating` state. When the alias is ready to be used, it is put into the `Available` state. You can use the `DescribeBotAlias` operation to get the current state of an alias.
   *
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;

  /**
   * The unique identifier of the bot that this alias applies to.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * A Unix timestamp indicating the date and time that the bot alias was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A list of tags associated with the bot alias.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Configures the Intent Disambiguation feature that helps resolve ambiguous user inputs when multiple intents could match. When enabled, the system presents clarifying questions to users, helping them specify their exact intent for improved conversation accuracy.
 *
 * @public
 */
export interface IntentDisambiguationSettings {
  /**
   * Determines whether the Intent Disambiguation feature is enabled. When set to `true`, Amazon Lex will present disambiguation options to users when multiple intents could match their input, with the default being `false`.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Specifies the maximum number of intent options (2-5) to present to users when disambiguation is needed. This setting determines how many intent options will be shown to users when the system detects ambiguous input. The default value is 3.
   *
   * @public
   */
  maxDisambiguationIntents?: number | undefined;

  /**
   * Provides a custom message that will be displayed before presenting the disambiguation options to users. This message helps set the context for users and can be customized to match your bot's tone and brand. If not specified, a default message will be used.
   *
   * @public
   */
  customDisambiguationMessage?: string | undefined;
}

/**
 * Configures the Assisted Natural Language Understanding (NLU) feature for your bot. This specification determines whether enhanced intent recognition and utterance understanding capabilities are active.
 *
 * @public
 */
export interface NluImprovementSpecification {
  /**
   * Determines whether the Assisted NLU feature is enabled for the bot. When set to `true`, Amazon Lex uses advanced models to improve intent recognition and slot resolution, with the default being `false`.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Specifies the mode for Assisted NLU operation. Use `Primary` to make Assisted NLU the primary intent recognition method, `Fallback` to use it only when standard NLU confidence is low, or `DialogManager` to use a large language model to manage the conversation, including intent recognition, slot elicitation, and confirmation.
   *
   * @public
   */
  assistedNluMode?: AssistedNluMode | undefined;

  /**
   * An object containing specifications for the Intent Disambiguation feature within the Assisted NLU settings. These settings determine how the bot handles ambiguous user inputs that could match multiple intents.
   *
   * @public
   */
  intentDisambiguationSettings?: IntentDisambiguationSettings | undefined;
}

/**
 * Contains specifications for the assisted slot resolution feature.
 *
 * @public
 */
export interface SlotResolutionImprovementSpecification {
  /**
   * Specifies whether assisted slot resolution is turned on or off.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * An object containing information about the Amazon Bedrock model used to assist slot resolution.
   *
   * @public
   */
  bedrockModelSpecification?: BedrockModelSpecification | undefined;
}

/**
 * Contains specifications about the Amazon Lex runtime generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
 *
 * @public
 */
export interface RuntimeSettings {
  /**
   * An object containing specifications for the assisted slot resolution feature.
   *
   * @public
   */
  slotResolutionImprovement?: SlotResolutionImprovementSpecification | undefined;

  /**
   * An object containing specifications for the Assisted NLU feature within the bot's runtime settings. These settings determine how the bot processes and interprets user utterances during conversations.
   *
   * @public
   */
  nluImprovement?: NluImprovementSpecification | undefined;
}

/**
 * Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
 *
 * @public
 */
export interface GenerativeAISettings {
  /**
   * Contains specifications about the Amazon Lex runtime generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
   *
   * @public
   */
  runtimeSettings?: RuntimeSettings | undefined;

  /**
   * Contains specifications about the Amazon Lex build time generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
   *
   * @public
   */
  buildtimeSettings?: BuildtimeSettings | undefined;
}

/**
 * @public
 */
export interface CreateBotLocaleRequest {
  /**
   * The identifier of the bot to create the locale for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to create the locale for. This can only be the draft version of the bot.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * A description of the bot locale. Use this to help identify the bot locale in lists.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents. `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` are only inserted if they are configured for the bot.
   *
   * For example, suppose a bot is configured with the confidence threshold of 0.80 and the `AMAZON.FallbackIntent`. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the `RecognizeText` operation would be:
   *
   * - AMAZON.FallbackIntent
   * - IntentA
   * - IntentB
   * - IntentC
   *
   * @public
   */
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.
   *
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * Unified speech settings to configure for the new bot locale.
   *
   * @public
   */
  unifiedSpeechSettings?: UnifiedSpeechSettings | undefined;

  /**
   * Audio filler settings to configure for the new bot locale. When enabled, Amazon Lex plays a brief background audio filler during speech-to-speech interactions to mask processing delays. Requires `unifiedSpeechSettings` (speech-to-speech) to be configured on the bot locale.
   *
   * @public
   */
  audioFillerSettings?: AudioFillerSettings | undefined;

  /**
   * Speech-to-text settings to configure for the new bot locale.
   *
   * @public
   */
  speechRecognitionSettings?: SpeechRecognitionSettings | undefined;

  /**
   * Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
   *
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;

  /**
   * The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize speech recognition accuracy by adjusting how the system responds to background noise during voice interactions.
   *
   * @public
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity | undefined;

  /**
   * The speaker diarization settings to configure for the new bot locale. When enabled, Amazon Lex restricts speech detection to the primary (loudest) speaker during streaming audio conversations.
   *
   * @public
   */
  speakerDiarizationSettings?: SpeakerDiarizationSettings | undefined;
}

/**
 * @public
 */
export interface CreateBotLocaleResponse {
  /**
   * The specified bot identifier.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The specified bot version.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The specified locale name.
   *
   * @public
   */
  localeName?: string | undefined;

  /**
   * The specified locale identifier.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The specified description of the bot locale.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The specified confidence threshold for inserting the `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` intents.
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.
   *
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * The unified speech settings configured for the created bot locale.
   *
   * @public
   */
  unifiedSpeechSettings?: UnifiedSpeechSettings | undefined;

  /**
   * The audio filler settings configured for the created bot locale.
   *
   * @public
   */
  audioFillerSettings?: AudioFillerSettings | undefined;

  /**
   * The speech-to-text settings configured for the created bot locale.
   *
   * @public
   */
  speechRecognitionSettings?: SpeechRecognitionSettings | undefined;

  /**
   * The status of the bot.
   *
   * When the status is `Creating` the bot locale is being configured. When the status is `Building` Amazon Lex is building the bot for testing and use.
   *
   * If the status of the bot is `ReadyExpressTesting`, you can test the bot using the exact utterances specified in the bots' intents. When the bot is ready for full testing or to run, the status is `Built`.
   *
   * If there was a problem with building the bot, the status is `Failed`. If the bot was saved but not built, the status is `NotBuilt`.
   *
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * A timestamp specifying the date and time that the bot locale was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
   *
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;

  /**
   * The sensitivity level for voice activity detection (VAD) that was specified for the bot locale.
   *
   * @public
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity | undefined;

  /**
   * The speaker diarization settings configured for the created bot locale.
   *
   * @public
   */
  speakerDiarizationSettings?: SpeakerDiarizationSettings | undefined;
}

/**
 * @public
 */
export interface CreateBotReplicaRequest {
  /**
   * The request for the unique bot ID of the source bot to be replicated in the secondary region.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The request for the secondary region that will be used in the replication of the source bot.
   *
   * @public
   */
  replicaRegion: string | undefined;
}

/**
 * @public
 */
export interface CreateBotReplicaResponse {
  /**
   * The unique bot ID of the replicated bot generated.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The region of the replicated bot generated.
   *
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * The source region for the source bot used for the replicated bot generated.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * The creation date and time of the replicated bot generated.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The operational status of the replicated bot generated.
   *
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;
}

/**
 * @public
 */
export interface CreateBotVersionRequest {
  /**
   * The identifier of the bot to create the version for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * A description of the version. Use the description to help identify the version in lists.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the locales that Amazon Lex adds to this version. You can choose the `Draft` version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
   *
   * @public
   */
  botVersionLocaleSpecification: Record<string, BotVersionLocaleDetails> | undefined;
}

/**
 * @public
 */
export interface CreateBotVersionResponse {
  /**
   * The bot identifier specified in the request.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The description of the version specified in the request.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version number assigned to the version.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The source versions used for each locale in the new version.
   *
   * @public
   */
  botVersionLocaleSpecification?: Record<string, BotVersionLocaleDetails> | undefined;

  /**
   * When you send a request to create or update a bot, Amazon Lex sets the status response element to `Creating`. After Amazon Lex builds the bot, it sets status to `Available`. If Amazon Lex can't build the bot, it sets status to `Failed`.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * A timestamp of the date and time that the version was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * Provides the parameters required for exporting a custom vocabulary.
 *
 * @public
 */
export interface CustomVocabularyExportSpecification {
  /**
   * The identifier of the bot that contains the custom vocabulary to export.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the custom vocabulary to export.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The locale of the bot that contains the custom vocabulary to export.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * Contains information about the test set that is exported.
 *
 * @public
 */
export interface TestSetExportSpecification {
  /**
   * The unique identifier of the test set.
   *
   * @public
   */
  testSetId: string | undefined;
}

/**
 * Provides information about the bot or bot locale that you want to export. You can specify the `botExportSpecification` or the `botLocaleExportSpecification`, but not both.
 *
 * @public
 */
export interface ExportResourceSpecification {
  /**
   * Parameters for exporting a bot.
   *
   * @public
   */
  botExportSpecification?: BotExportSpecification | undefined;

  /**
   * Parameters for exporting a bot locale.
   *
   * @public
   */
  botLocaleExportSpecification?: BotLocaleExportSpecification | undefined;

  /**
   * The parameters required to export a custom vocabulary.
   *
   * @public
   */
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification | undefined;

  /**
   * Specifications for the test set that is exported as a resource.
   *
   * @public
   */
  testSetExportSpecification?: TestSetExportSpecification | undefined;
}

/**
 * @public
 */
export interface CreateExportRequest {
  /**
   * Specifies the type of resource to export, either a bot or a bot locale. You can only specify one type of resource to export.
   *
   * @public
   */
  resourceSpecification: ExportResourceSpecification | undefined;

  /**
   * The file format of the bot or bot locale definition files.
   *
   * @public
   */
  fileFormat: ImportExportFileFormat | undefined;

  /**
   * An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.
   *
   * @public
   */
  filePassword?: string | undefined;
}

/**
 * @public
 */
export interface CreateExportResponse {
  /**
   * An identifier for a specific request to create an export.
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
   * The file format used for the bot or bot locale definition files.
   *
   * @public
   */
  fileFormat?: ImportExportFileFormat | undefined;

  /**
   * The status of the export. When the status is `Completed`, you can use the [DescribeExport](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html) operation to get the pre-signed S3 URL link to your exported bot or bot locale.
   *
   * @public
   */
  exportStatus?: ExportStatus | undefined;

  /**
   * The date and time that the request to export a bot was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 *
 * @public
 */
export interface DialogCodeHookSettings {
  /**
   * Enables the dialog code hook so that it processes user requests.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
 *
 * @public
 */
export interface FulfillmentStartResponseSpecification {
  /**
   * The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
   *
   * @public
   */
  delayInSeconds: number | undefined;

  /**
   * 1 - 5 message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user.
   *
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * Determines whether the user can interrupt the start message while it is playing.
   *
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
 *
 * @public
 */
export interface FulfillmentUpdateResponseSpecification {
  /**
   * The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
   *
   * @public
   */
  frequencyInSeconds: number | undefined;

  /**
   * 1 - 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   *
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * Determines whether the user can interrupt an update message while it is playing.
   *
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * Provides information for updating the user on the progress of fulfilling an intent.
 *
 * @public
 */
export interface FulfillmentUpdatesSpecification {
  /**
   * Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
   *
   * If the `active` field is set to true, the `startResponse`, `updateResponse`, and `timeoutInSeconds` fields are required.
   *
   * @public
   */
  active: boolean | undefined;

  /**
   * Provides configuration information for the message sent to users when the fulfillment Lambda functions starts running.
   *
   * @public
   */
  startResponse?: FulfillmentStartResponseSpecification | undefined;

  /**
   * Provides configuration information for messages sent periodically to the user while the fulfillment Lambda function is running.
   *
   * @public
   */
  updateResponse?: FulfillmentUpdateResponseSpecification | undefined;

  /**
   * The length of time that the fulfillment Lambda function should run before it times out.
   *
   * @public
   */
  timeoutInSeconds?: number | undefined;
}

/**
 * A context that must be active for an intent to be selected by Amazon Lex.
 *
 * @public
 */
export interface InputContext {
  /**
   * The name of the context.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
 *
 * @public
 */
export interface ElicitationCodeHookInvocationSetting {
  /**
   * Indicates whether a Lambda function should be invoked for the dialog.
   *
   * @public
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * A label that indicates the dialog step from which the dialog code hook is happening.
   *
   * @public
   */
  invocationLabel?: string | undefined;
}

/**
 * Specifies the text input specifications.
 *
 * @public
 */
export interface TextInputSpecification {
  /**
   * Time for which a bot waits before re-prompting a customer for text input.
   *
   * @public
   */
  startTimeoutMs: number | undefined;
}

/**
 * Specifies the settings on a prompt attempt.
 *
 * @public
 */
export interface PromptAttemptSpecification {
  /**
   * Indicates whether the user can interrupt a speech prompt attempt from the bot.
   *
   * @public
   */
  allowInterrupt?: boolean | undefined;

  /**
   * Indicates the allowed input types of the prompt attempt.
   *
   * @public
   */
  allowedInputTypes: AllowedInputTypes | undefined;

  /**
   * Specifies the settings on audio and DTMF input.
   *
   * @public
   */
  audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification | undefined;

  /**
   * Specifies the settings on text input.
   *
   * @public
   */
  textInputSpecification?: TextInputSpecification | undefined;
}

/**
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
 *
 * @public
 */
export interface PromptSpecification {
  /**
   * A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime.
   *
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * The maximum number of times the bot tries to elicit a response from the user using this prompt.
   *
   * @public
   */
  maxRetries: number | undefined;

  /**
   * Indicates whether the user can interrupt a speech prompt from the bot.
   *
   * @public
   */
  allowInterrupt?: boolean | undefined;

  /**
   * Indicates how a message is selected from a message group among retries.
   *
   * @public
   */
  messageSelectionStrategy?: MessageSelectionStrategy | undefined;

  /**
   * Specifies the advanced settings on each attempt of the prompt.
   *
   * @public
   */
  promptAttemptsSpecification?: Partial<Record<PromptAttempt, PromptAttemptSpecification>> | undefined;
}

/**
 * Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
 *
 * @public
 */
export interface KendraConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the `AMAZON.KendraSearchIntent` intent to search. The index must be in the same account and Region as the Amazon Lex bot.
   *
   * @public
   */
  kendraIndex: string | undefined;

  /**
   * Determines whether the `AMAZON.KendraSearchIntent` intent uses a custom query string to query the Amazon Kendra index.
   *
   * @public
   */
  queryFilterStringEnabled?: boolean | undefined;

  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html).
   *
   * @public
   */
  queryFilterString?: string | undefined;
}

/**
 * Describes a session context that is activated when an intent is fulfilled.
 *
 * @public
 */
export interface OutputContext {
  /**
   * The name of the output context.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.
   *
   * @public
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * The number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.
   *
   * @public
   */
  turnsToLive: number | undefined;
}

/**
 * The configuration details of the Qinconnect assistant.
 *
 * @public
 */
export interface QInConnectAssistantConfiguration {
  /**
   * The assistant Arn details of the Qinconnect assistant configuration.
   *
   * @public
   */
  assistantArn: string | undefined;
}

/**
 * The configuration details of the Qinconnect intent.
 *
 * @public
 */
export interface QInConnectIntentConfiguration {
  /**
   * The Qinconnect assistant configuration details of the Qinconnect intent.
   *
   * @public
   */
  qInConnectAssistantConfiguration?: QInConnectAssistantConfiguration | undefined;
}

/**
 * Contains details about the configuration of the Amazon Kendra index used for the `AMAZON.QnAIntent`.
 *
 * @public
 */
export interface QnAKendraConfiguration {
  /**
   * The ARN of the Amazon Kendra index to use.
   *
   * @public
   */
  kendraIndex: string | undefined;

  /**
   * Specifies whether to enable an Amazon Kendra filter string or not.
   *
   * @public
   */
  queryFilterStringEnabled?: boolean | undefined;

  /**
   * Contains the Amazon Kendra filter string to use if enabled. For more information on the Amazon Kendra search filter JSON format, see [Using document attributes to filter search results](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html#search-filtering).
   *
   * @public
   */
  queryFilterString?: string | undefined;

  /**
   * Specifies whether to return an exact response from the Amazon Kendra index or to let the Amazon Bedrock model you select generate a response based on the results. To use this feature, you must first add FAQ questions to your index by following the steps at [Adding frequently asked questions (FAQs) to an index](https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html).
   *
   * @public
   */
  exactResponse?: boolean | undefined;
}

/**
 * Contains the names of the fields used for an exact response to the user.
 *
 * @public
 */
export interface ExactResponseFields {
  /**
   * The name of the field that contains the query made to the OpenSearch Service database.
   *
   * @public
   */
  questionField: string | undefined;

  /**
   * The name of the field that contains the answer to the query made to the OpenSearch Service database.
   *
   * @public
   */
  answerField: string | undefined;
}

/**
 * Contains details about the configuration of the Amazon OpenSearch Service database used for the `AMAZON.QnAIntent`.
 *
 * @public
 */
export interface OpensearchConfiguration {
  /**
   * The endpoint of the Amazon OpenSearch Service domain.
   *
   * @public
   */
  domainEndpoint: string | undefined;

  /**
   * The name of the Amazon OpenSearch Service index.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * Specifies whether to return an exact response or to return an answer generated by the model using the fields you specify from the database.
   *
   * @public
   */
  exactResponse?: boolean | undefined;

  /**
   * Contains the names of the fields used for an exact response to the user.
   *
   * @public
   */
  exactResponseFields?: ExactResponseFields | undefined;

  /**
   * Contains a list of fields from the Amazon OpenSearch Service that the model can use to generate the answer to the query.
   *
   * @public
   */
  includeFields?: string[] | undefined;
}

/**
 * Contains details about the configuration of the knowledge store used for the `AMAZON.QnAIntent`. You must have already created the knowledge store and indexed the documents within it.
 *
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * Contains details about the configuration of the Amazon OpenSearch Service database used for the `AMAZON.QnAIntent`. To create a domain, follow the steps at [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html).
   *
   * @public
   */
  opensearchConfiguration?: OpensearchConfiguration | undefined;

  /**
   * Contains details about the configuration of the Amazon Kendra index used for the `AMAZON.QnAIntent`. To create a Amazon Kendra index, follow the steps at [Creating an index](https://docs.aws.amazon.com/kendra/latest/dg/create-index.html).
   *
   * @public
   */
  kendraConfiguration?: QnAKendraConfiguration | undefined;

  /**
   * Contains details about the configuration of the Amazon Bedrock knowledge base used for the `AMAZON.QnAIntent`. To set up a knowledge base, follow the steps at [Building a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).
   *
   * @public
   */
  bedrockKnowledgeStoreConfiguration?: BedrockKnowledgeStoreConfiguration | undefined;
}

/**
 * Details about the the configuration of the built-in `Amazon.QnAIntent`.
 *
 * @public
 */
export interface QnAIntentConfiguration {
  /**
   * Contains details about the configuration of the data source used for the `AMAZON.QnAIntent`.
   *
   * @public
   */
  dataSourceConfiguration?: DataSourceConfiguration | undefined;

  /**
   * Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.
   *
   * @public
   */
  bedrockModelConfiguration?: BedrockModelSpecification | undefined;
}

/**
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
 *
 * @public
 */
export interface SampleUtterance {
  /**
   * The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents.
   *
   * @public
   */
  utterance: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyRequest {
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
}

/**
 * @public
 */
export interface CreateResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy was attached to.
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
 * The IAM principal that you allowing or denying access to an Amazon Lex action. You must provide a `service` or an `arn`, but not both in the same statement. For more information, see [AWS JSON policy elements: Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html).
 *
 * @public
 */
export interface Principal {
  /**
   * The name of the Amazon Web Services service that should allowed or denied access to an Amazon Lex action.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the principal.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyStatementRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name of the statement. The ID is the same as the `Sid` IAM property. The statement name must be unique within the policy. For more information, see [IAM JSON policy elements: Sid](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html).
   *
   * @public
   */
  statementId: string | undefined;

  /**
   * Determines whether the statement allows or denies access to the resource.
   *
   * @public
   */
  effect: Effect | undefined;

  /**
   * An IAM principal, such as an IAM user, IAM role, or Amazon Web Services services that is allowed or denied access to a resource. For more information, see [Amazon Web Services JSON policy elements: Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html).
   *
   * @public
   */
  principal: Principal[] | undefined;

  /**
   * The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see [Actions, resources, and condition keys for Amazon Lex V2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html).
   *
   * @public
   */
  action: string[] | undefined;

  /**
   * Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.
   *
   * For more information, see [IAM JSON policy elements: Condition](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html).
   *
   * @public
   */
  condition?: Record<string, Record<string, string>> | undefined;

  /**
   * The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.
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
export interface CreateResourcePolicyStatementResponse {
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
 * Indicates whether a slot can return multiple values.
 *
 * @public
 */
export interface MultipleValuesSetting {
  /**
   * Indicates whether a slot can return multiple values. When `true`, the slot may return more than one value in a response. When `false`, the slot returns only a single value.
   *
   * Multi-value slots are only available in the en-US locale. If you set this value to `true` in any other locale, Amazon Lex throws a `ValidationException`.
   *
   * If the `allowMutlipleValues` is not set, the default value is `false`.
   *
   * @public
   */
  allowMultipleValues?: boolean | undefined;
}

/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
 *
 * @public
 */
export interface ObfuscationSetting {
  /**
   * Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.
   *
   * @public
   */
  obfuscationSettingType: ObfuscationSettingType | undefined;
}

/**
 * Specifies the default value to use when a user doesn't provide a value for a slot.
 *
 * @public
 */
export interface SlotDefaultValue {
  /**
   * The default value to use when a user doesn't provide a value for a slot.
   *
   * @public
   */
  defaultValue: string | undefined;
}

/**
 * Defines a list of values that Amazon Lex should use as the default value for a slot.
 *
 * @public
 */
export interface SlotDefaultValueSpecification {
  /**
   * A list of default values. Amazon Lex chooses the default value to use in the order that they are presented in the list.
   *
   * @public
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

/**
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
 *
 * @public
 */
export interface StillWaitingResponseSpecification {
  /**
   * One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends to the user.
   *
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes.
   *
   * @public
   */
  frequencyInSeconds: number | undefined;

  /**
   * If Amazon Lex waits longer than this length of time for a response, it will stop sending messages.
   *
   * @public
   */
  timeoutInSeconds: number | undefined;

  /**
   * Indicates that the user can interrupt the response by speaking while the message is being played.
   *
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
 *
 * @public
 */
export interface WaitAndContinueSpecification {
  /**
   * The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue. Required unless the bot locale's `assistedNluMode` is `DialogManager`.
   *
   * @public
   */
  waitingResponse?: ResponseSpecification | undefined;

  /**
   * The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation. Required unless the bot locale's `assistedNluMode` is `DialogManager`.
   *
   * @public
   */
  continueResponse?: ResponseSpecification | undefined;

  /**
   * A response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
   *
   * @public
   */
  stillWaitingResponse?: StillWaitingResponseSpecification | undefined;

  /**
   * Specifies whether the bot will wait for a user to respond. When this field is false, wait and continue responses for a slot aren't used. If the `active` field isn't specified, the default is true.
   *
   * @public
   */
  active?: boolean | undefined;
}

/**
 * Subslot elicitation settings.
 *
 * `DefaultValueSpecification` is a list of default values for a constituent sub slot in a composite slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values. This is similar to `DefaultValueSpecification` for slots.
 *
 * `PromptSpecification` is the prompt that Amazon Lex uses to elicit the sub slot value from the user. This is similar to `PromptSpecification` for slots.
 *
 * @public
 */
export interface SubSlotValueElicitationSetting {
  /**
   * Defines a list of values that Amazon Lex should use as the default value for a slot.
   *
   * @public
   */
  defaultValueSpecification?: SlotDefaultValueSpecification | undefined;

  /**
   * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
   *
   * @public
   */
  promptSpecification: PromptSpecification | undefined;

  /**
   * If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value, you can provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable of understanding user utterances. This is similar to `SampleUtterances` for slots.
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
}

/**
 * Subslot specifications.
 *
 * @public
 */
export interface Specifications {
  /**
   * The unique identifier assigned to the slot type.
   *
   * @public
   */
  slotTypeId: string | undefined;

  /**
   * Specifies the elicitation setting details for constituent sub slots of a composite slot.
   *
   * @public
   */
  valueElicitationSetting: SubSlotValueElicitationSetting | undefined;
}

/**
 * Specifications for the constituent sub slots and the expression for the composite slot.
 *
 * @public
 */
export interface SubSlotSetting {
  /**
   * The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.
   *
   * @public
   */
  expression?: string | undefined;

  /**
   * Specifications for the constituent sub slots of a composite slot.
   *
   * @public
   */
  slotSpecifications?: Record<string, Specifications> | undefined;
}

/**
 * Contains information about whether assisted slot resolution is turned on for the slot or not.
 *
 * @public
 */
export interface SlotResolutionSetting {
  /**
   * Specifies whether assisted slot resolution is turned on for the slot or not. If the value is `EnhancedFallback`, assisted slot resolution is activated when Amazon Lex V2 defaults to the `AMAZON.FallbackIntent`. If the value is `Default`, assisted slot resolution is turned off.
   *
   * @public
   */
  slotResolutionStrategy: SlotResolutionStrategy | undefined;
}

/**
 * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
 *
 * @public
 */
export interface GrammarSlotTypeSource {
  /**
   * The name of the Amazon S3 bucket that contains the grammar source.
   *
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * The path to the grammar in the Amazon S3 bucket.
   *
   * @public
   */
  s3ObjectKey: string | undefined;

  /**
   * The KMS key required to decrypt the contents of the grammar, if any.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Settings requried for a slot type based on a grammar that you provide.
 *
 * @public
 */
export interface GrammarSlotTypeSetting {
  /**
   * The source of the grammar used to create the slot type.
   *
   * @public
   */
  source?: GrammarSlotTypeSource | undefined;
}

/**
 * Provides information about the external source of the slot type's definition.
 *
 * @public
 */
export interface ExternalSourceSetting {
  /**
   * Settings required for a slot type based on a grammar that you provide.
   *
   * @public
   */
  grammarSlotTypeSetting?: GrammarSlotTypeSetting | undefined;
}

/**
 * Defines one of the values for a slot type.
 *
 * @public
 */
export interface SampleValue {
  /**
   * The value that can be used for a slot type.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Each slot type can have a set of values. Each `SlotTypeValue` represents a value that the slot type can take.
 *
 * @public
 */
export interface SlotTypeValue {
  /**
   * The value of the slot type entry.
   *
   * @public
   */
  sampleValue?: SampleValue | undefined;

  /**
   * Additional values related to the slot type entry.
   *
   * @public
   */
  synonyms?: SampleValue[] | undefined;
}

/**
 * Provides a regular expression used to validate the value of a slot.
 *
 * @public
 */
export interface SlotValueRegexFilter {
  /**
   * A regular expression used to validate the value of a slot.
   *
   * Use a standard regular expression. Amazon Lex supports the following characters in the regular expression:
   *
   * - A-Z, a-z
   * - 0-9
   * - Unicode characters ("\⁠u<Unicode>")
   *
   * Represent Unicode characters with four digits, for example "\⁠u0041" or "\⁠u005A".
   *
   * The following regular expression operators are not supported:
   *
   * - Infinite repeaters: *, +, or \{x,\} with no upper bound.
   * - Wild card (.)
   *
   * @public
   */
  pattern: string | undefined;
}

/**
 * Contains settings used by Amazon Lex to select a slot value.
 *
 * @public
 */
export interface SlotValueSelectionSetting {
  /**
   * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
   *
   * - `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value.
   * - `TOP_RESOLUTION` - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.
   *
   * If you don't specify the `valueSelectionStrategy`, the default is `ORIGINAL_VALUE`.
   *
   * @public
   */
  resolutionStrategy: SlotValueResolutionStrategy | undefined;

  /**
   * A regular expression used to validate the value of a slot.
   *
   * @public
   */
  regexFilter?: SlotValueRegexFilter | undefined;

  /**
   * Provides settings that enable advanced recognition settings for slot values. You can use this to enable using slot values as a custom vocabulary for recognizing user utterances.
   *
   * @public
   */
  advancedRecognitionSetting?: AdvancedRecognitionSetting | undefined;
}

/**
 * @public
 */
export interface CreateSlotTypeRequest {
  /**
   * The name for the slot. A slot type name must be unique within the intent.
   *
   * @public
   */
  slotTypeName: string | undefined;

  /**
   * A description of the slot type. Use the description to help identify the slot type in lists.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `SlotTypeValue` objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.
   *
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values:
   *
   * - `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value.
   * - `TOP_RESOLUTION` - If there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null.
   *
   * If you don't specify the `valueSelectionSetting` parameter, the default is `ORIGINAL_VALUE`.
   *
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.
   *
   * Only `AMAZON.AlphaNumeric` is supported.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * The identifier of the bot associated with this slot type.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The identifier of the bot version associated with this slot type.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * Sets the type of external information used to create the slot type.
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
export interface CreateSlotTypeResponse {
  /**
   * The unique identifier assigned to the slot type. Use this to identify the slot type in the `UpdateSlotType` and `DeleteSlotType` operations.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * The name specified for the slot type.
   *
   * @public
   */
  slotTypeName?: string | undefined;

  /**
   * The description specified for the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of values that the slot type can assume.
   *
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * The strategy that Amazon Lex uses to select a value from the list of possible values.
   *
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * The signature of the base slot type specified for the slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * The identifier for the bot associated with the slot type.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the slot type.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The specified language and local specified for the slot type.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A timestamp of the date and time that the slot type was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The type of external information used to create the slot type.
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
 * Contains information about the bot alias used for the test set discrepancy report.
 *
 * @public
 */
export interface TestSetDiscrepancyReportBotAliasTarget {
  /**
   * The unique identifier for the bot alias.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The unique identifier for the bot associated with the bot alias.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The unique identifier of the locale associated with the bot alias.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * Contains information about the resource used for the test set discrepancy report.
 *
 * @public
 */
export interface TestSetDiscrepancyReportResourceTarget {
  /**
   * Contains information about the bot alias used as the resource for the test set discrepancy report.
   *
   * @public
   */
  botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget | undefined;
}

/**
 * @public
 */
export interface CreateTestSetDiscrepancyReportRequest {
  /**
   * The test set Id for the test set discrepancy report.
   *
   * @public
   */
  testSetId: string | undefined;

  /**
   * The target bot for the test set discrepancy report.
   *
   * @public
   */
  target: TestSetDiscrepancyReportResourceTarget | undefined;
}

/**
 * @public
 */
export interface CreateTestSetDiscrepancyReportResponse {
  /**
   * The unique identifier of the test set discrepancy report to describe.
   *
   * @public
   */
  testSetDiscrepancyReportId?: string | undefined;

  /**
   * The creation date and time for the test set discrepancy report.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The test set Id for the test set discrepancy report.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The target bot for the test set discrepancy report.
   *
   * @public
   */
  target?: TestSetDiscrepancyReportResourceTarget | undefined;
}

/**
 * @public
 */
export interface CreateUploadUrlRequest {}

/**
 * @public
 */
export interface CreateUploadUrlResponse {
  /**
   * An identifier for a unique import job. Use it when you call the [StartImport](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartImport.html) operation.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * A pre-signed S3 write URL. Upload the zip archive file that contains the definition of your bot or bot locale.
   *
   * @public
   */
  uploadUrl?: string | undefined;
}

/**
 * Provides the parameters required for importing a custom vocabulary.
 *
 * @public
 */
export interface CustomVocabularyImportSpecification {
  /**
   * The identifier of the bot to import the custom vocabulary to.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to import the custom vocabulary to.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the local to import the custom vocabulary to. The value must be `en_GB`.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * The object used for specifying the data range that the customer wants Amazon Lex to read through in the input transcripts.
 *
 * @public
 */
export interface DateRangeFilter {
  /**
   * A timestamp indicating the start date for the date range filter.
   *
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * A timestamp indicating the end date for the date range filter.
   *
   * @public
   */
  endDateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBotRequest {
  /**
   * The identifier of the bot to delete.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a `ResourceInUseException` exception if the bot is being used by another resource. Set this parameter to `true` to skip this check and remove the bot even if it is being used by another resource.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBotResponse {
  /**
   * The unique identifier of the bot that Amazon Lex is deleting.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The current status of the bot. The status is `Deleting` while the bot and its associated resources are being deleted.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotAliasRequest {
  /**
   * The unique identifier of the bot alias to delete.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The unique identifier of the bot associated with the alias to delete.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is deleted and throws a `ResourceInUseException` exception if the alias is being used by another resource. Set this parameter to `true` to skip this check and remove the alias even if it is being used by another resource.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBotAliasResponse {
  /**
   * The unique identifier of the bot alias to delete.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The unique identifier of the bot that contains the alias to delete.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The current status of the alias. The status is `Deleting` while the alias is in the process of being deleted. Once the alias is deleted, it will no longer appear in the list of aliases returned by the `ListBotAliases` operation.
   *
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotAnalyzerRecommendationRequest {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The unique identifier of the analysis request whose recommendations should be deleted.
   *
   * @public
   */
  botAnalyzerRequestId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotAnalyzerRecommendationResponse {}

/**
 * @public
 */
export interface DeleteBotLocaleRequest {
  /**
   * The unique identifier of the bot that contains the locale.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot that contains the locale.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotLocaleResponse {
  /**
   * The identifier of the bot that contained the deleted locale.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contained the deleted locale.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale of the deleted locale.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of deleting the bot locale. The locale first enters the `Deleting` status. Once the locale is deleted it no longer appears in the list of locales for the bot.
   *
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotReplicaRequest {
  /**
   * The unique ID of the replicated bot to be deleted from the secondary region
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The secondary region of the replicated bot that will be deleted.
   *
   * @public
   */
  replicaRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotReplicaResponse {
  /**
   * The unique bot ID of the replicated bot generated.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The region of the replicated bot generated.
   *
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * The operational status of the replicated bot generated.
   *
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotVersionRequest {
  /**
   * The identifier of the bot that contains the version.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to delete.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a `ResourceInUseException` exception if the version is being used by another resource. Set this parameter to `true` to skip this check and remove the version even if it is being used by another resource.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBotVersionResponse {
  /**
   * The identifier of the bot that is being deleted.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that is being deleted.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The current status of the bot.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCustomVocabularyRequest {
  /**
   * The unique identifier of the bot to remove the custom vocabulary from.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to remove the custom vocabulary from.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The locale identifier for the locale that contains the custom vocabulary to remove.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomVocabularyResponse {
  /**
   * The identifier of the bot that the custom vocabulary was removed from.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that the custom vocabulary was removed from.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale identifier for the locale that the custom vocabulary was removed from.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of removing the custom vocabulary.
   *
   * @public
   */
  customVocabularyStatus?: CustomVocabularyStatus | undefined;
}

/**
 * @public
 */
export interface DeleteExportRequest {
  /**
   * The unique identifier of the export to delete.
   *
   * @public
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportResponse {
  /**
   * The unique identifier of the deleted export.
   *
   * @public
   */
  exportId?: string | undefined;

  /**
   * The current status of the deletion. When the deletion is complete, the export will no longer be returned by the [ListExports](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html) operation and calls to the [DescribeExport](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html) operation with the export identifier will fail.
   *
   * @public
   */
  exportStatus?: ExportStatus | undefined;
}

/**
 * @public
 */
export interface DeleteImportRequest {
  /**
   * The unique identifier of the import to delete.
   *
   * @public
   */
  importId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportResponse {
  /**
   * The unique identifier of the deleted import.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The current status of the deletion. When the deletion is complete, the import will no longer be returned by the [ListImports](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html) operation and calls to the [DescribeImport](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeImport.html) operation with the import identifier will fail.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;
}

/**
 * @public
 */
export interface DeleteIntentRequest {
  /**
   * The unique identifier of the intent to delete.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * The identifier of the bot associated with the intent.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the intent.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns an exception
   *
   * If you don't specify a revision ID, Amazon Lex will delete the current policy.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy was deleted from.
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
export interface DeleteResourcePolicyStatementRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name of the statement (SID) to delete from the policy.
   *
   * @public
   */
  statementId: string | undefined;

  /**
   * The identifier of the revision of the policy to delete the statement from. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.
   *
   * If you don't specify a revision, Amazon Lex removes the current contents of the statement.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyStatementResponse {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy statement was removed from.
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
export interface DeleteSlotRequest {
  /**
   * The identifier of the slot to delete.
   *
   * @public
   */
  slotId: string | undefined;

  /**
   * The identifier of the bot associated with the slot to delete.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the slot to delete.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the intent associated with the slot.
   *
   * @public
   */
  intentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlotTypeRequest {
  /**
   * The identifier of the slot type to delete.
   *
   * @public
   */
  slotTypeId: string | undefined;

  /**
   * The identifier of the bot associated with the slot type.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the slot type.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale that the slot type will be deleted from. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * By default, the `DeleteSlotType` operations throws a `ResourceInUseException` exception if you try to delete a slot type used by a slot. Set the `skipResourceInUseCheck` parameter to `true` to skip this check and remove the slot type even if a slot uses it.
   *
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTestSetRequest {
  /**
   * The test set Id of the test set to be deleted.
   *
   * @public
   */
  testSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUtterancesRequest {
  /**
   * The unique identifier of the bot that contains the utterances.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The identifier of the language and locale where the utterances were collected. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The unique identifier of the session with the user. The ID is returned in the response from the [RecognizeText](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html) and [RecognizeUtterance](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html) operations.
   *
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUtterancesResponse {}

/**
 * @public
 */
export interface DescribeBotRequest {
  /**
   * The unique identifier of the bot to describe.
   *
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotResponse {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The name of the bot.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Settings for managing data privacy of the bot and its conversations with users.
   *
   * @public
   */
  dataPrivacy?: DataPrivacy | undefined;

  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The current status of the bot. When the status is `Available` the bot is ready to be used in conversations with users.
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
   * The type of the bot that was described.
   *
   * @public
   */
  botType?: BotType | undefined;

  /**
   * The list of bots in the network that was described.
   *
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * If the `botStatus` is `Failed`, this contains a list of reasons that the bot couldn't be built.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * Contains the configuration for error logging that specifies where and how bot errors are recorded, including destinations like CloudWatch Logs.
   *
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * @public
 */
export interface DescribeBotAliasRequest {
  /**
   * The identifier of the bot alias to describe.
   *
   * @public
   */
  botAliasId: string | undefined;

  /**
   * The identifier of the bot associated with the bot alias to describe.
   *
   * @public
   */
  botId: string | undefined;
}

/**
 * A network of bots.
 *
 * @public
 */
export interface ParentBotNetwork {
  /**
   * The identifier of the network of bots assigned by Amazon Lex.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the network of bots.
   *
   * @public
   */
  botVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotAliasResponse {
  /**
   * The identifier of the bot alias.
   *
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * The name of the bot alias.
   *
   * @public
   */
  botAliasName?: string | undefined;

  /**
   * The description of the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot associated with the bot alias.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale settings that are unique to the alias.
   *
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * Specifics of how Amazon Lex logs text and audio conversations with the bot associated with the alias.
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
   * A list of events that affect a bot alias. For example, an event is recorded when the version that the alias points to changes.
   *
   * @public
   */
  botAliasHistoryEvents?: BotAliasHistoryEvent[] | undefined;

  /**
   * The current status of the alias. When the alias is `Available`, the alias is ready for use with your bot.
   *
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;

  /**
   * The identifier of the bot associated with the bot alias.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * A timestamp of the date and time that the alias was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A timestamp of the date and time that the alias was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * A list of the networks to which the bot alias you described belongs.
   *
   * @public
   */
  parentBotNetworks?: ParentBotNetwork[] | undefined;
}

/**
 * @public
 */
export interface DescribeBotAnalyzerRecommendationRequest {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The unique identifier of the analysis request.
   *
   * @public
   */
  botAnalyzerRequestId: string | undefined;

  /**
   * If the response from a previous request was truncated, the `nextToken` value is used to retrieve the next page of recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of recommendations to return in the response. The default is 5.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeBotAnalyzerRecommendationResponse {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that was analyzed.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale identifier of the bot locale that was analyzed.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The current status of the analysis.
   *
   * Valid Values: `Processing | Available | Failed | Stopping | Stopped`
   *
   * @public
   */
  botAnalyzerStatus?: BotAnalyzerStatus | undefined;

  /**
   * The date and time when the analysis was initiated.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A list of recommendations for optimizing your bot configuration. Each recommendation includes the issue location, priority, description, and proposed fix.
   *
   * @public
   */
  botAnalyzerRecommendationList?: BotAnalyzerRecommendation[] | undefined;

  /**
   * If the response is truncated, this token can be used in a subsequent request to retrieve the next page of recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotLocaleRequest {
  /**
   * The identifier of the bot associated with the locale.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the locale.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotLocaleResponse {
  /**
   * The identifier of the bot associated with the locale.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the locale.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The unique identifier of the described locale.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The name of the locale.
   *
   * @public
   */
  localeName?: string | undefined;

  /**
   * The description of the locale.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The confidence threshold where Amazon Lex inserts the `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` intents in the list of possible intents for an utterance.
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * The Amazon Polly voice Amazon Lex uses for voice interaction with the user.
   *
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * The unified speech settings configured for the bot locale.
   *
   * @public
   */
  unifiedSpeechSettings?: UnifiedSpeechSettings | undefined;

  /**
   * The audio filler settings configured for the bot locale.
   *
   * @public
   */
  audioFillerSettings?: AudioFillerSettings | undefined;

  /**
   * The speech-to-text settings configured for the bot locale.
   *
   * @public
   */
  speechRecognitionSettings?: SpeechRecognitionSettings | undefined;

  /**
   * The number of intents defined for the locale.
   *
   * @public
   */
  intentsCount?: number | undefined;

  /**
   * The number of slot types defined for the locale.
   *
   * @public
   */
  slotTypesCount?: number | undefined;

  /**
   * The status of the bot. If the status is `Failed`, the reasons for the failure are listed in the `failureReasons` field.
   *
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * if `botLocaleStatus` is `Failed`, Amazon Lex explains why it failed to build the bot.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * The date and time that the locale was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time that the locale was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The date and time that the locale was last submitted for building.
   *
   * @public
   */
  lastBuildSubmittedDateTime?: Date | undefined;

  /**
   * History of changes, such as when a locale is used in an alias, that have taken place for the locale.
   *
   * @public
   */
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[] | undefined;

  /**
   * Recommended actions to take to resolve an error in the `failureReasons` field.
   *
   * @public
   */
  recommendedActions?: string[] | undefined;

  /**
   * Contains settings for Amazon Bedrock's generative AI features for your bot locale.
   *
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;

  /**
   * The sensitivity level for voice activity detection (VAD) configured for the bot locale.
   *
   * @public
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity | undefined;

  /**
   * The speaker diarization settings configured for the bot locale.
   *
   * @public
   */
  speakerDiarizationSettings?: SpeakerDiarizationSettings | undefined;
}

/**
 * @public
 */
export interface DescribeBotRecommendationRequest {
  /**
   * The unique identifier of the bot associated with the bot recommendation.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the bot recommendation.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to describe. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The identifier of the bot recommendation to describe.
   *
   * @public
   */
  botRecommendationId: string | undefined;
}

/**
 * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
 *
 * @public
 */
export interface EncryptionSetting {
  /**
   * The KMS key ARN used to encrypt the metadata associated with the bot recommendation.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The password used to encrypt the recommended bot recommendation file.
   *
   * @public
   */
  botLocaleExportPassword?: string | undefined;

  /**
   * The password used to encrypt the associated transcript file.
   *
   * @public
   */
  associatedTranscriptsPassword?: string | undefined;
}

/**
 * The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket.
 *
 * @public
 */
export interface PathFormat {
  /**
   * A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3 bucket. Specify this list if you only want Lex to read the files under this set of sub-folders.
   *
   * @public
   */
  objectPrefixes?: string[] | undefined;
}

/**
 * The object that contains transcript filter details that are associated with a bot recommendation.
 *
 * @public
 */
export interface LexTranscriptFilter {
  /**
   * The object that contains a date range filter that will be applied to the transcript. Specify this object if you want Amazon Lex to only read the files that are within the date range.
   *
   * @public
   */
  dateRangeFilter?: DateRangeFilter | undefined;
}

/**
 * The object representing the filter that Amazon Lex will use to select the appropriate transcript.
 *
 * @public
 */
export interface TranscriptFilter {
  /**
   * The object representing the filter that Amazon Lex will use to select the appropriate transcript when the transcript format is the Amazon Lex format.
   *
   * @public
   */
  lexTranscriptFilter?: LexTranscriptFilter | undefined;
}

/**
 * The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.
 *
 * @public
 */
export interface S3BucketTranscriptSource {
  /**
   * The name of the bucket containing the transcript and the associated metadata.
   *
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket.
   *
   * @public
   */
  pathFormat?: PathFormat | undefined;

  /**
   * The format of the transcript content. Currently, Genie only supports the Amazon Lex transcript format.
   *
   * @public
   */
  transcriptFormat: TranscriptFormat | undefined;

  /**
   * The object that contains the filter which will be applied when Amazon Lex reads through the Amazon S3 bucket. Specify this object if you want Amazon Lex to read only a subset of the Amazon S3 bucket based on the filter you provide.
   *
   * @public
   */
  transcriptFilter?: TranscriptFilter | undefined;

  /**
   * The ARN of the KMS key that customer use to encrypt their Amazon S3 bucket. Only use this field if your bucket is encrypted using a customer managed KMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Indicates the setting of the location where the transcript is stored.
 *
 * @public
 */
export interface TranscriptSourceSetting {
  /**
   * Indicates the setting of the Amazon S3 bucket where the transcript is stored.
   *
   * @public
   */
  s3BucketTranscriptSource?: S3BucketTranscriptSource | undefined;
}

/**
 * @public
 */
export interface DescribeBotRecommendationResponse {
  /**
   * The identifier of the bot associated with the bot recommendation.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the bot recommendation.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The identifier of the language and locale of the bot recommendation to describe.
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
   * The identifier of the bot recommendation being described.
   *
   * @public
   */
  botRecommendationId?: string | undefined;

  /**
   * If botRecommendationStatus is Failed, Amazon Lex explains why.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * The date and time that the bot recommendation was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time that the bot recommendation was last updated.
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

  /**
   * The object representing the URL of the bot definition, the URL of the associated transcript and a statistical summary of the bot recommendation results.
   *
   * @public
   */
  botRecommendationResults?: BotRecommendationResults | undefined;
}

/**
 * @public
 */
export interface DescribeBotReplicaRequest {
  /**
   * The request for the unique bot ID of the replicated bot being monitored.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The request for the region of the replicated bot being monitored.
   *
   * @public
   */
  replicaRegion: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotReplicaResponse {
  /**
   * The unique bot ID of the replicated bot being monitored.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The region of the replicated bot being monitored.
   *
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * The source region of the replicated bot being monitored.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * The creation date and time of the replicated bot being monitored.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The operational status of the replicated bot being monitored.
   *
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;

  /**
   * The failure reasons the bot being monitored failed to replicate.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeBotResourceGenerationRequest {
  /**
   * The unique identifier of the bot for which to return the generation details.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot for which to return the generation details.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The locale of the bot for which to return the generation details.
   *
   * @public
   */
  localeId: string | undefined;

  /**
   * The unique identifier of the generation request for which to return the generation details.
   *
   * @public
   */
  generationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotResourceGenerationResponse {
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
   * The generation ID for which to return the generation details.
   *
   * @public
   */
  generationId?: string | undefined;

  /**
   * A list of reasons why the generation of bot resources through natural language description failed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * The status of the generation request.
   *
   * @public
   */
  generationStatus?: GenerationStatus | undefined;

  /**
   * The prompt used in the generation request.
   *
   * @public
   */
  generationInputPrompt?: string | undefined;

  /**
   * The Amazon S3 location of the generated bot locale configuration.
   *
   * @public
   */
  generatedBotLocaleUrl?: string | undefined;

  /**
   * The date and time at which the item was generated.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The ARN of the model used to generate the bot resources.
   *
   * @public
   */
  modelArn?: string | undefined;

  /**
   * The date and time at which the generated item was updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBotVersionRequest {
  /**
   * The identifier of the bot containing the version to return metadata for.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot to return metadata for.
   *
   * @public
   */
  botVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotVersionResponse {
  /**
   * The identifier of the bot that contains the version.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The name of the bot that contains the version.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The version of the bot that was described.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The description specified for the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot version.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Data privacy settings for the bot version.
   *
   * @public
   */
  dataPrivacy?: DataPrivacy | undefined;

  /**
   * The number of seconds that a session with the bot remains active before it is discarded by Amazon Lex.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The current status of the bot. When the status is `Available`, the bot version is ready for use.
   *
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * If the `botStatus` is `Failed`, this contains a list of reasons that the version couldn't be built.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * A timestamp of the date and time that the bot version was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * A list of the networks to which the bot version you described belongs.
   *
   * @public
   */
  parentBotNetworks?: ParentBotNetwork[] | undefined;

  /**
   * The type of the bot in the version that was described.
   *
   * @public
   */
  botType?: BotType | undefined;

  /**
   * The members of bot network in the version that was described.
   *
   * @public
   */
  botMembers?: BotMember[] | undefined;
}

/**
 * @public
 */
export interface DescribeCustomVocabularyMetadataRequest {
  /**
   * The unique identifier of the bot that contains the custom vocabulary.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The bot version of the bot to return metadata for.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The locale to return the custom vocabulary information for. The locale must be `en_GB`.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomVocabularyMetadataResponse {
  /**
   * The identifier of the bot that contains the custom vocabulary.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot that contains the custom vocabulary to describe.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The locale that contains the custom vocabulary to describe.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The status of the custom vocabulary. If the status is `Ready` the custom vocabulary is ready to use.
   *
   * @public
   */
  customVocabularyStatus?: CustomVocabularyStatus | undefined;

  /**
   * The date and time that the custom vocabulary was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time that the custom vocabulary was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExportRequest {
  /**
   * The unique identifier of the export to describe.
   *
   * @public
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportResponse {
  /**
   * The unique identifier of the described export.
   *
   * @public
   */
  exportId?: string | undefined;

  /**
   * The bot, bot ID, and optional locale ID of the exported bot or bot locale.
   *
   * @public
   */
  resourceSpecification?: ExportResourceSpecification | undefined;

  /**
   * The file format used in the files that describe the resource.
   *
   * @public
   */
  fileFormat?: ImportExportFileFormat | undefined;

  /**
   * The status of the export. When the status is `Complete` the export archive file is available for download.
   *
   * @public
   */
  exportStatus?: ExportStatus | undefined;

  /**
   * If the `exportStatus` is failed, contains one or more reasons why the export could not be completed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * A pre-signed S3 URL that points to the bot or bot locale archive. The URL is only available for 5 minutes after calling the `DescribeExport` operation.
   *
   * @public
   */
  downloadUrl?: string | undefined;

  /**
   * The date and time that the export was created.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The last date and time that the export was updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeImportRequest {
  /**
   * The unique identifier of the import to describe.
   *
   * @public
   */
  importId: string | undefined;
}

/**
 * Contains information about the Amazon S3 location from which the test set is imported.
 *
 * @public
 */
export interface TestSetImportInputLocation {
  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * The path inside the Amazon S3 bucket pointing to the test-set CSV file.
   *
   * @public
   */
  s3Path: string | undefined;
}

/**
 * Contains information about the location in which the test set is stored.
 *
 * @public
 */
export interface TestSetStorageLocation {
  /**
   * The name of the Amazon S3 bucket in which the test set is stored.
   *
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * The path inside the Amazon S3 bucket where the test set is stored.
   *
   * @public
   */
  s3Path: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service (KMS) key for encrypting the test set.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Contains information about the test set that is imported.
 *
 * @public
 */
export interface TestSetImportResourceSpecification {
  /**
   * The name of the test set.
   *
   * @public
   */
  testSetName: string | undefined;

  /**
   * The description of the test set.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Contains information about the location that Amazon Lex uses to store the test-set.
   *
   * @public
   */
  storageLocation: TestSetStorageLocation | undefined;

  /**
   * Contains information about the input location from where test-set should be imported.
   *
   * @public
   */
  importInputLocation: TestSetImportInputLocation | undefined;

  /**
   * Specifies whether the test-set being imported contains written or spoken data.
   *
   * @public
   */
  modality: TestSetModality | undefined;

  /**
   * A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the `UpdateTestSet` operation to update tags. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  testSetTags?: Record<string, string> | undefined;
}

/**
 * Provides information about the bot or bot locale that you want to import. You can specify the `botImportSpecification` or the `botLocaleImportSpecification`, but not both.
 *
 * @public
 */
export interface ImportResourceSpecification {
  /**
   * Parameters for importing a bot.
   *
   * @public
   */
  botImportSpecification?: BotImportSpecification | undefined;

  /**
   * Parameters for importing a bot locale.
   *
   * @public
   */
  botLocaleImportSpecification?: BotLocaleImportSpecification | undefined;

  /**
   * Provides the parameters required for importing a custom vocabulary.
   *
   * @public
   */
  customVocabularyImportSpecification?: CustomVocabularyImportSpecification | undefined;

  /**
   * Specifications for the test set that is imported.
   *
   * @public
   */
  testSetImportResourceSpecification?: TestSetImportResourceSpecification | undefined;
}

/**
 * @public
 */
export interface DescribeImportResponse {
  /**
   * The unique identifier of the described import.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The specifications of the imported bot, bot locale, or custom vocabulary.
   *
   * @public
   */
  resourceSpecification?: ImportResourceSpecification | undefined;

  /**
   * The unique identifier that Amazon Lex assigned to the resource created by the import.
   *
   * @public
   */
  importedResourceId?: string | undefined;

  /**
   * The name of the imported resource.
   *
   * @public
   */
  importedResourceName?: string | undefined;

  /**
   * The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is `FailOnConflict` existing resources are not overwritten and the import fails.
   *
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * The status of the import process. When the status is `Completed` the resource is imported and ready for use.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * If the `importStatus` field is `Failed`, this provides one or more reasons for the failure.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

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
}

/**
 * @public
 */
export interface DescribeIntentRequest {
  /**
   * The identifier of the intent to describe.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * The identifier of the bot associated with the intent.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the intent.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the intent to describe. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * Sets the priority that Amazon Lex should use when eliciting slot values from a user.
 *
 * @public
 */
export interface SlotPriority {
  /**
   * The priority that Amazon Lex should apply to the slot.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The unique identifier of the slot.
   *
   * @public
   */
  slotId: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The JSON structure that contains the resource policy. For more information about the contents of a JSON policy document, see [IAM JSON policy reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html).
   *
   * @public
   */
  policy?: string | undefined;

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
export interface DescribeSlotRequest {
  /**
   * The unique identifier for the slot.
   *
   * @public
   */
  slotId: string | undefined;

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
   * The identifier of the language and locale of the slot to describe. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
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
}

/**
 * @public
 */
export interface DescribeSlotTypeRequest {
  /**
   * The identifier of the slot type.
   *
   * @public
   */
  slotTypeId: string | undefined;

  /**
   * The identifier of the bot associated with the slot type.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The version of the bot associated with the slot type.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The identifier of the language and locale of the slot type to describe. The string must match one of the supported locales. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlotTypeResponse {
  /**
   * The unique identifier for the slot type.
   *
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * The name specified for the slot type.
   *
   * @public
   */
  slotTypeName?: string | undefined;

  /**
   * The description specified for the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The values that the slot type can take. Includes any synonyms for the slot type values.
   *
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * The strategy that Amazon Lex uses to choose a value from a list of possible values.
   *
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * The built in slot type used as a parent to this slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * The identifier of the bot associated with the slot type.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The version of the bot associated with the slot type.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The language and locale specified for the slot type.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * A timestamp of the date and time that the slot type was created.
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
export interface DescribeTestExecutionRequest {
  /**
   * The execution Id of the test set execution.
   *
   * @public
   */
  testExecutionId: string | undefined;
}

/**
 * Contains information about the bot used for the test execution.
 *
 * @public
 */
export interface TestExecutionTarget {
  /**
   * Contains information about the bot alias used for the test execution.
   *
   * @public
   */
  botAliasTarget?: BotAliasTestExecutionTarget | undefined;
}

/**
 * @public
 */
export interface DescribeTestExecutionResponse {
  /**
   * The execution Id for the test set execution.
   *
   * @public
   */
  testExecutionId?: string | undefined;

  /**
   * The execution creation date and time for the test set execution.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time of the last update for the execution.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * The test execution status for the test execution.
   *
   * @public
   */
  testExecutionStatus?: TestExecutionStatus | undefined;

  /**
   * The test set Id for the test set execution.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The test set name of the test set execution.
   *
   * @public
   */
  testSetName?: string | undefined;

  /**
   * The target bot for the test set execution details.
   *
   * @public
   */
  target?: TestExecutionTarget | undefined;

  /**
   * Indicates whether we use streaming or non-streaming APIs are used for the test set execution. For streaming, `StartConversation` Amazon Lex Runtime API is used. Whereas for non-streaming, `RecognizeUtterance` and `RecognizeText` Amazon Lex Runtime API is used.
   *
   * @public
   */
  apiMode?: TestExecutionApiMode | undefined;

  /**
   * Indicates whether test set is audio or text.
   *
   * @public
   */
  testExecutionModality?: TestExecutionModality | undefined;

  /**
   * Reasons for the failure of the test set execution.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetRequest {
  /**
   * The test set Id for the test set request.
   *
   * @public
   */
  testSetId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetResponse {
  /**
   * The test set Id for the test set response.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The test set name of the test set.
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
   * Indicates whether the test set is audio or text data.
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
   * The roleARN used for any operation in the test set to access resources in the Amazon Web Services account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The total number of agent and user turn in the test set.
   *
   * @public
   */
  numTurns?: number | undefined;

  /**
   * The Amazon S3 storage location for the test set data.
   *
   * @public
   */
  storageLocation?: TestSetStorageLocation | undefined;

  /**
   * The creation date and time for the test set data.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time for the last update of the test set data.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetDiscrepancyReportRequest {
  /**
   * The unique identifier of the test set discrepancy report.
   *
   * @public
   */
  testSetDiscrepancyReportId: string | undefined;
}

/**
 * Contains information about discrepancy in an intent information between the test set and the bot.
 *
 * @public
 */
export interface TestSetIntentDiscrepancyItem {
  /**
   * The name of the intent in the discrepancy report.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * The error message for a discrepancy for an intent between the test set and the bot.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Contains information about discrepancy in a slot information between the test set and the bot.
 *
 * @public
 */
export interface TestSetSlotDiscrepancyItem {
  /**
   * The name of the intent associated with the slot in the discrepancy report.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * The name of the slot in the discrepancy report.
   *
   * @public
   */
  slotName: string | undefined;

  /**
   * The error message for a discrepancy for an intent between the test set and the bot.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Contains details about the errors in the test set discrepancy report
 *
 * @public
 */
export interface TestSetDiscrepancyErrors {
  /**
   * Contains information about discrepancies found for intents between the test set and the bot.
   *
   * @public
   */
  intentDiscrepancies: TestSetIntentDiscrepancyItem[] | undefined;

  /**
   * Contains information about discrepancies found for slots between the test set and the bot.
   *
   * @public
   */
  slotDiscrepancies: TestSetSlotDiscrepancyItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetDiscrepancyReportResponse {
  /**
   * The unique identifier of the test set discrepancy report to describe.
   *
   * @public
   */
  testSetDiscrepancyReportId?: string | undefined;

  /**
   * The test set Id for the test set discrepancy report.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The time and date of creation for the test set discrepancy report.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The target bot location for the test set discrepancy report.
   *
   * @public
   */
  target?: TestSetDiscrepancyReportResourceTarget | undefined;

  /**
   * The status for the test set discrepancy report.
   *
   * @public
   */
  testSetDiscrepancyReportStatus?: TestSetDiscrepancyReportStatus | undefined;

  /**
   * The date and time of the last update for the test set discrepancy report.
   *
   * @public
   */
  lastUpdatedDataTime?: Date | undefined;

  /**
   * The top 200 error results from the test set discrepancy report.
   *
   * @public
   */
  testSetDiscrepancyTopErrors?: TestSetDiscrepancyErrors | undefined;

  /**
   * Pre-signed Amazon S3 URL to download the test set discrepancy report.
   *
   * @public
   */
  testSetDiscrepancyRawOutputUrl?: string | undefined;

  /**
   * The failure report for the test set discrepancy report generation action.
   *
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetGenerationRequest {
  /**
   * The unique identifier of the test set generation.
   *
   * @public
   */
  testSetGenerationId: string | undefined;
}

/**
 * Contains information about the data source from which the test set is generated.
 *
 * @public
 */
export interface TestSetGenerationDataSource {
  /**
   * Contains information about the bot from which the conversation logs are sourced.
   *
   * @public
   */
  conversationLogsDataSource?: ConversationLogsDataSource | undefined;
}

/**
 * @public
 */
export interface DescribeTestSetGenerationResponse {
  /**
   * The unique identifier of the test set generation.
   *
   * @public
   */
  testSetGenerationId?: string | undefined;

  /**
   * The status for the test set generation.
   *
   * @public
   */
  testSetGenerationStatus?: TestSetGenerationStatus | undefined;

  /**
   * The reasons the test set generation failed.
   *
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * The unique identifier for the test set created for the generated test set.
   *
   * @public
   */
  testSetId?: string | undefined;

  /**
   * The test set name for the generated test set.
   *
   * @public
   */
  testSetName?: string | undefined;

  /**
   * The test set description for the test set generation.
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
   * The data source of the test set used for the test set generation.
   *
   * @public
   */
  generationDataSource?: TestSetGenerationDataSource | undefined;

  /**
   * The roleARN of the test set used for the test set generation.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The creation date and time for the test set generation.
   *
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * The date and time of the last update for the test set generation.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * Filters the response form the [ListExports](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html) operation
 *
 * @public
 */
export interface ExportFilter {
  /**
   * The name of the field to use for filtering.
   *
   * @public
   */
  name: ExportFilterName | undefined;

  /**
   * The values to use to filter the response. The values must be `Bot`, `BotLocale`, or `CustomVocabulary`.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for the filter. Specify EQ when the `ListExports` operation should return only resource types that equal the specified value. Specify CO when the `ListExports` operation should return resource types that contain the specified value.
   *
   * @public
   */
  operator: ExportFilterOperator | undefined;
}

/**
 * Provides information about sorting a list of exports.
 *
 * @public
 */
export interface ExportSortBy {
  /**
   * The export field to use for sorting.
   *
   * @public
   */
  attribute: ExportSortAttribute | undefined;

  /**
   * The order to sort the list.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Provides summary information about an export in an export list.
 *
 * @public
 */
export interface ExportSummary {
  /**
   * The unique identifier that Amazon Lex assigned to the export.
   *
   * @public
   */
  exportId?: string | undefined;

  /**
   * Information about the bot or bot locale that was exported.
   *
   * @public
   */
  resourceSpecification?: ExportResourceSpecification | undefined;

  /**
   * The file format used in the export files.
   *
   * @public
   */
  fileFormat?: ImportExportFileFormat | undefined;

  /**
   * The status of the export. When the status is `Completed` the export is ready to download.
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
export interface GenerateBotElementRequest {
  /**
   * The intent unique Id for the bot request to generate utterances.
   *
   * @public
   */
  intentId: string | undefined;

  /**
   * The bot unique Id for the bot request to generate utterances.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The bot version for the bot request to generate utterances.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The unique locale Id for the bot request to generate utterances.
   *
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface GenerateBotElementResponse {
  /**
   * The unique bot Id for the bot which received the response.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The unique bot version for the bot which received the response.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The unique locale Id for the bot which received the response.
   *
   * @public
   */
  localeId?: string | undefined;

  /**
   * The unique intent Id for the bot which received the response.
   *
   * @public
   */
  intentId?: string | undefined;

  /**
   * The sample utterances for the bot which received the response.
   *
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;
}

/**
 * Specifies the attribute and method by which to sort the generation request information.
 *
 * @public
 */
export interface GenerationSortBy {
  /**
   * The attribute by which to sort the generation request information. You can sort by the following attributes.
   *
   * - `creationStartTime` – The time at which the generation request was created.
   * - `lastUpdatedTime` – The time at which the generation request was last updated.
   *
   * @public
   */
  attribute: GenerationSortByAttribute | undefined;

  /**
   * The order by which to sort the generation request information.
   *
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * Contains information about a generation request made for the bot locale.
 *
 * @public
 */
export interface GenerationSummary {
  /**
   * The unique identifier of the generation request.
   *
   * @public
   */
  generationId?: string | undefined;

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

  /**
   * The date and time at which the generation request was last updated.
   *
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetTestExecutionArtifactsUrlRequest {
  /**
   * The unique identifier of the completed test execution.
   *
   * @public
   */
  testExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetTestExecutionArtifactsUrlResponse {
  /**
   * The unique identifier of the completed test execution.
   *
   * @public
   */
  testExecutionId?: string | undefined;

  /**
   * The pre-signed Amazon S3 URL to download completed test execution.
   *
   * @public
   */
  downloadArtifactsUrl?: string | undefined;
}
