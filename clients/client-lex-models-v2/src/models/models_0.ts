// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LexModelsV2ServiceException as __BaseException } from "./LexModelsV2ServiceException";

/**
 * <p>The active context used in the test execution.</p>
 * @public
 */
export interface ActiveContext {
  /**
   * <p>The name of active context.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AudioRecognitionStrategy = {
  UseSlotValuesAsCustomVocabulary: "UseSlotValuesAsCustomVocabulary",
} as const;

/**
 * @public
 */
export type AudioRecognitionStrategy = (typeof AudioRecognitionStrategy)[keyof typeof AudioRecognitionStrategy];

/**
 * <p>Provides settings that enable advanced recognition settings for slot values.</p>
 * @public
 */
export interface AdvancedRecognitionSetting {
  /**
   * <p>Enables using the slot values as a custom vocabulary for recognizing user utterances.</p>
   * @public
   */
  audioRecognitionStrategy?: AudioRecognitionStrategy | undefined;
}

/**
 * <p>Details about an error in an execution of a test set.</p>
 * @public
 */
export interface ExecutionErrorDetails {
  /**
   * <p>The error code for the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The message describing the error.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * <p>The information about the agent turn in a test set execution.</p>
 * @public
 */
export interface AgentTurnResult {
  /**
   * <p>The expected agent prompt for the agent turn in a test set execution.</p>
   * @public
   */
  expectedAgentPrompt: string | undefined;

  /**
   * <p>The actual agent prompt for the agent turn in a test set execution.</p>
   * @public
   */
  actualAgentPrompt?: string | undefined;

  /**
   * <p>Details about an error in an execution of a test set.</p>
   * @public
   */
  errorDetails?: ExecutionErrorDetails | undefined;

  /**
   * <p>The actual elicited slot for the agent turn in a test set execution.</p>
   * @public
   */
  actualElicitedSlot?: string | undefined;

  /**
   * <p>The actual intent for the agent turn in a test set execution.</p>
   * @public
   */
  actualIntent?: string | undefined;
}

/**
 * <p>The specification of an agent turn.</p>
 * @public
 */
export interface AgentTurnSpecification {
  /**
   * <p>The agent prompt for the agent turn in a test set.</p>
   * @public
   */
  agentPrompt: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregatedUtterancesFilterName = {
  Utterance: "Utterance",
} as const;

/**
 * @public
 */
export type AggregatedUtterancesFilterName =
  (typeof AggregatedUtterancesFilterName)[keyof typeof AggregatedUtterancesFilterName];

/**
 * @public
 * @enum
 */
export const AggregatedUtterancesFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type AggregatedUtterancesFilterOperator =
  (typeof AggregatedUtterancesFilterOperator)[keyof typeof AggregatedUtterancesFilterOperator];

/**
 * <p>Filters responses returned by the
 *             <code>ListAggregatedUtterances</code> operation.</p>
 * @public
 */
export interface AggregatedUtterancesFilter {
  /**
   * <p>The name of the field to filter the utterance list.</p>
   * @public
   */
  name: AggregatedUtterancesFilterName | undefined;

  /**
   * <p>The value to use for filtering the list of bots.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListAggregatedUtterances</code> operation should return only
   *          utterances that equal the specified value. Specify <code>CO</code> when
   *          the <code>ListAggregatedUtterances</code> operation should return
   *          utterances that contain the specified value.</p>
   * @public
   */
  operator: AggregatedUtterancesFilterOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregatedUtterancesSortAttribute = {
  HitCount: "HitCount",
  MissedCount: "MissedCount",
} as const;

/**
 * @public
 */
export type AggregatedUtterancesSortAttribute =
  (typeof AggregatedUtterancesSortAttribute)[keyof typeof AggregatedUtterancesSortAttribute];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * <p>Specifies attributes for sorting a list of utterances.</p>
 * @public
 */
export interface AggregatedUtterancesSortBy {
  /**
   * <p>The utterance attribute to sort by.</p>
   * @public
   */
  attribute: AggregatedUtterancesSortAttribute | undefined;

  /**
   * <p>Specifies whether to sort the aggregated utterances in ascending or
   *          descending order.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * <p>Provides summary information for aggregated utterances. The
 *             <code>ListAggregatedUtterances</code> operations combines all
 *          instances of the same utterance into a single aggregated
 *          summary.</p>
 * @public
 */
export interface AggregatedUtterancesSummary {
  /**
   * <p>The text of the utterance. If the utterance was used with the
   *             <code>RecognizeUtterance</code> operation, the text is the
   *          transcription of the audio utterance.</p>
   * @public
   */
  utterance?: string | undefined;

  /**
   * <p>The number of times that the utterance was detected by Amazon Lex during
   *          the time period. When an utterance is detected, it activates an intent
   *          or a slot.</p>
   * @public
   */
  hitCount?: number | undefined;

  /**
   * <p>The number of times that the utterance was missed by Amazon Lex An
   *          utterance is missed when it doesn't activate an intent or slot.</p>
   * @public
   */
  missedCount?: number | undefined;

  /**
   * <p>The date and time that the utterance was first recorded in the time
   *          window for aggregation. An utterance may have been sent to Amazon Lex before
   *          that time, but only utterances within the time window are
   *          counted.</p>
   * @public
   */
  utteranceFirstRecordedInAggregationDuration?: Date | undefined;

  /**
   * <p>The last date and time that an utterance was recorded in the time
   *          window for aggregation. An utterance may be sent to Amazon Lex after that
   *          time, but only utterances within the time window are counted.</p>
   * @public
   */
  utteranceLastRecordedInAggregationDuration?: Date | undefined;

  /**
   * <p>Aggregated utterance data may contain utterances from versions of
   *          your bot that have since been deleted. When the aggregated contains
   *          this kind of data, this field is set to true.</p>
   * @public
   */
  containsDataFromDeletedResources?: boolean | undefined;
}

/**
 * <p>Specifies the allowed input types.</p>
 * @public
 */
export interface AllowedInputTypes {
  /**
   * <p>Indicates whether audio input is allowed.</p>
   * @public
   */
  allowAudioInput: boolean | undefined;

  /**
   * <p>Indicates whether DTMF input is allowed.</p>
   * @public
   */
  allowDTMFInput: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsInterval = {
  OneDay: "OneDay",
  OneHour: "OneHour",
} as const;

/**
 * @public
 */
export type AnalyticsInterval = (typeof AnalyticsInterval)[keyof typeof AnalyticsInterval];

/**
 * @public
 * @enum
 */
export const AnalyticsBinByName = {
  ConversationStartTime: "ConversationStartTime",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;

/**
 * @public
 */
export type AnalyticsBinByName = (typeof AnalyticsBinByName)[keyof typeof AnalyticsBinByName];

/**
 * @public
 * @enum
 */
export const AnalyticsSortOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

/**
 * @public
 */
export type AnalyticsSortOrder = (typeof AnalyticsSortOrder)[keyof typeof AnalyticsSortOrder];

/**
 * <p>Contains the time metric, interval, and method by which to bin the analytics data.</p>
 * @public
 */
export interface AnalyticsBinBySpecification {
  /**
   * <p>Specifies the time metric by which to bin the analytics data.</p>
   * @public
   */
  name: AnalyticsBinByName | undefined;

  /**
   * <p>Specifies the interval of time by which to bin the analytics data.</p>
   * @public
   */
  interval: AnalyticsInterval | undefined;

  /**
   * <p>Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the default order is by the key of the bin in descending order.</p>
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * <p>An object containing the criterion by which to bin the results and the value that defines that bin.</p>
 * @public
 */
export interface AnalyticsBinKey {
  /**
   * <p>The criterion by which to bin the results.</p>
   * @public
   */
  name?: AnalyticsBinByName | undefined;

  /**
   * <p>The value of the criterion that defines the bin.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsCommonFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  LocaleId: "LocaleId",
  Modality: "Modality",
} as const;

/**
 * @public
 */
export type AnalyticsCommonFilterName = (typeof AnalyticsCommonFilterName)[keyof typeof AnalyticsCommonFilterName];

/**
 * @public
 * @enum
 */
export const AnalyticsFilterOperator = {
  Equals: "EQ",
  GreaterThan: "GT",
  LessThan: "LT",
} as const;

/**
 * @public
 */
export type AnalyticsFilterOperator = (typeof AnalyticsFilterOperator)[keyof typeof AnalyticsFilterOperator];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentField = {
  IntentEndState: "IntentEndState",
  IntentLevel: "IntentLevel",
  IntentName: "IntentName",
} as const;

/**
 * @public
 */
export type AnalyticsIntentField = (typeof AnalyticsIntentField)[keyof typeof AnalyticsIntentField];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  IntentEndState: "IntentEndState",
  IntentName: "IntentName",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
} as const;

/**
 * @public
 */
export type AnalyticsIntentFilterName = (typeof AnalyticsIntentFilterName)[keyof typeof AnalyticsIntentFilterName];

/**
 * <p>Contains fields describing a condition by which to filter the intents. The expression may be understood as <code>name</code>
 *             <code>operator</code>
 *             <code>values</code>. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>IntentName CO Book</code> – The intent name contains the string "Book."</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion EQ 2</code> – The bot version is equal to two.</p>
 *             </li>
 *          </ul>
 *          <p>The operators that each filter supports are listed below:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BotAlias</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LocaleId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Modality</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Channel</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SessionId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IntentEndState</code> – <code>EQ</code>, <code>CO</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AnalyticsIntentFilter {
  /**
   * <p>The category by which to filter the intents. The descriptions for each option are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – The name of the bot alias.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – The version of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – The locale of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – The modality of the session with the bot (audio, DTMF, or text).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – The channel that the bot is integrated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – The identifier of the session with the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – The identifier of the first request in a session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentName</code> – The name of the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentEndState</code> – The final state of the intent.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsIntentFilterName | undefined;

  /**
   * <p>The operation by which to filter the category. The following operations are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CO</code> – Contains</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code> – Equals</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> – Greater than</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> – Less than</p>
   *             </li>
   *          </ul>
   *          <p>The operators that each filter supports are listed below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentEndState</code> – <code>EQ</code>, <code>CO</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Contains the category by which the intent analytics were grouped and a member of that category.</p>
 * @public
 */
export interface AnalyticsIntentGroupByKey {
  /**
   * <p>A category by which the intent analytics were grouped.</p>
   * @public
   */
  name?: AnalyticsIntentField | undefined;

  /**
   * <p>A member of the category by which the intent analytics were grouped.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the category by which to group the intents.</p>
 * @public
 */
export interface AnalyticsIntentGroupBySpecification {
  /**
   * <p>Specifies whether to group the intent stages by their name or their end state.</p>
   * @public
   */
  name: AnalyticsIntentField | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsIntentMetricName = {
  Count: "Count",
  Dropped: "Dropped",
  Failure: "Failure",
  Success: "Success",
  Switched: "Switched",
} as const;

/**
 * @public
 */
export type AnalyticsIntentMetricName = (typeof AnalyticsIntentMetricName)[keyof typeof AnalyticsIntentMetricName];

/**
 * @public
 * @enum
 */
export const AnalyticsMetricStatistic = {
  Avg: "Avg",
  Max: "Max",
  Sum: "Sum",
} as const;

/**
 * @public
 */
export type AnalyticsMetricStatistic = (typeof AnalyticsMetricStatistic)[keyof typeof AnalyticsMetricStatistic];

/**
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intents in the bot.</p>
 * @public
 */
export interface AnalyticsIntentMetric {
  /**
   * <p>The metric for which you want to get intent summary statistics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of times the intent was invoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Success</code> – The number of times the intent succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failure</code> – The number of times the intent failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Switched</code> – The number of times there was a switch to a different intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dropped</code> – The number of times the user dropped the intent.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsIntentMetricName | undefined;

  /**
   * <p>The summary statistic to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of intents in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * <p>An object containing the results for the intent metric you requested.</p>
 * @public
 */
export interface AnalyticsIntentMetricResult {
  /**
   * <p>The metric that you requested. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/analytics-key-definitions.html">Key definitions</a> for more details about these metrics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of times the intent was invoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Success</code> – The number of times the intent succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failure</code> – The number of times the intent failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Switched</code> – The number of times there was a switch to a different intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dropped</code> – The number of times the user dropped the intent.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: AnalyticsIntentMetricName | undefined;

  /**
   * <p>The statistic that you requested to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of intents in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * <p>The value of the summary statistic for the metric that you requested.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsNodeType = {
  Exit: "Exit",
  Inner: "Inner",
} as const;

/**
 * @public
 */
export type AnalyticsNodeType = (typeof AnalyticsNodeType)[keyof typeof AnalyticsNodeType];

/**
 * <p>An object containing information about the requested path.</p>
 * @public
 */
export interface AnalyticsIntentNodeSummary {
  /**
   * <p>The name of the intent at the end of the requested path.</p>
   * @public
   */
  intentName?: string | undefined;

  /**
   * <p>The path.</p>
   * @public
   */
  intentPath?: string | undefined;

  /**
   * <p>The total number of sessions that follow the given path to the given intent.</p>
   * @public
   */
  intentCount?: number | undefined;

  /**
   * <p>The number of intents up to and including the requested path.</p>
   * @public
   */
  intentLevel?: number | undefined;

  /**
   * <p>Specifies whether the node is the end of a path (<code>Exit</code>) or not (<code>Inner</code>).</p>
   * @public
   */
  nodeType?: AnalyticsNodeType | undefined;
}

/**
 * <p>An object containing the results for the intent metrics you requested and the bin and/or group(s) they refer to, if applicable.</p>
 * @public
 */
export interface AnalyticsIntentResult {
  /**
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the groups.</p>
   * @public
   */
  groupByKeys?: AnalyticsIntentGroupByKey[] | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   * @public
   */
  metricsResults?: AnalyticsIntentMetricResult[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsIntentStageField = {
  IntentStageName: "IntentStageName",
  SwitchedToIntent: "SwitchedToIntent",
} as const;

/**
 * @public
 */
export type AnalyticsIntentStageField = (typeof AnalyticsIntentStageField)[keyof typeof AnalyticsIntentStageField];

/**
 * @public
 * @enum
 */
export const AnalyticsIntentStageFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  IntentName: "IntentName",
  IntentStageName: "IntentStageName",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
} as const;

/**
 * @public
 */
export type AnalyticsIntentStageFilterName =
  (typeof AnalyticsIntentStageFilterName)[keyof typeof AnalyticsIntentStageFilterName];

/**
 * <p>Contains fields describing a condition by which to filter the intent stages. The expression may be understood as <code>name</code>
 *             <code>operator</code>
 *             <code>values</code>. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>IntentName CO Book</code> – The intent name contains the string "Book."</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion EQ 2</code> – The bot version is equal to two.</p>
 *             </li>
 *          </ul>
 *          <p>The operators that each filter supports are listed below:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BotAlias</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LocaleId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Modality</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Channel</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SessionId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IntentStageName</code> – <code>EQ</code>, <code>CO</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AnalyticsIntentStageFilter {
  /**
   * <p>The category by which to filter the intent stages. The descriptions for each option are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – The name of the bot alias.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – The version of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – The locale of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – The modality of the session with the bot (audio, DTMF, or text).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – The channel that the bot is integrated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – The identifier of the session with the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – The identifier of the first request in a session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentName</code> – The name of the intent.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentStageName</code> – The stage in the intent.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsIntentStageFilterName | undefined;

  /**
   * <p>The operation by which to filter the category. The following operations are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CO</code> – Contains</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code> – Equals</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> – Greater than</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> – Less than</p>
   *             </li>
   *          </ul>
   *          <p>The operators that each filter supports are listed below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentName</code> – <code>EQ</code>, <code>CO</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentStageName</code> – <code>EQ</code>, <code>CO</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Contains the category by which the intent stage analytics and the values for that category were grouped.</p>
 * @public
 */
export interface AnalyticsIntentStageGroupByKey {
  /**
   * <p>A category by which the intent stage analytics were grouped.</p>
   * @public
   */
  name?: AnalyticsIntentStageField | undefined;

  /**
   * <p>A member of the category by which the intent stage analytics were grouped.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the category by which to group the intent stages.</p>
 * @public
 */
export interface AnalyticsIntentStageGroupBySpecification {
  /**
   * <p>Specifies whether to group the intent stages by their name or the intent to which the session was switched.</p>
   * @public
   */
  name: AnalyticsIntentStageField | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsIntentStageMetricName = {
  Count: "Count",
  Dropped: "Dropped",
  Failed: "Failed",
  Retry: "Retry",
  Success: "Success",
} as const;

/**
 * @public
 */
export type AnalyticsIntentStageMetricName =
  (typeof AnalyticsIntentStageMetricName)[keyof typeof AnalyticsIntentStageMetricName];

/**
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the intent stages across the user sessions with the bot.</p>
 * @public
 */
export interface AnalyticsIntentStageMetric {
  /**
   * <p>The metric for which you want to get intent stage summary statistics. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/analytics-key-definitions.html">Key definitions</a> for more details about these metrics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of times the intent stage occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Success</code> – The number of times the intent stage succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failure</code> – The number of times the intent stage failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dropped</code> – The number of times the user dropped the intent stage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retry</code> – The number of times the bot tried to elicit a response from the user at this stage.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsIntentStageMetricName | undefined;

  /**
   * <p>The summary statistic to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of intent stages in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order of the summary statistic (<code>value</code> in the response).</p>
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * <p>An object containing the results for an intent stage metric you requested.</p>
 * @public
 */
export interface AnalyticsIntentStageMetricResult {
  /**
   * <p>The metric that you requested.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of times the intent stage occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Success</code> – The number of times the intent stage succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failure</code> – The number of times the intent stage failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dropped</code> – The number of times the user dropped the intent stage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retry</code> – The number of times the bot tried to elicit a response from the user at this stage.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: AnalyticsIntentStageMetricName | undefined;

  /**
   * <p>The summary statistic that you requested to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of intent stages in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * <p>The value of the summary statistic for the metric that you requested.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>An object containing the results for the intent stage metrics you requested and the bin and/or group they refer to, if applicable.</p>
 * @public
 */
export interface AnalyticsIntentStageResult {
  /**
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the bins.</p>
   * @public
   */
  groupByKeys?: AnalyticsIntentStageGroupByKey[] | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   * @public
   */
  metricsResults?: AnalyticsIntentStageMetricResult[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsModality = {
  DTMF: "DTMF",
  MultiMode: "MultiMode",
  Speech: "Speech",
  Text: "Text",
} as const;

/**
 * @public
 */
export type AnalyticsModality = (typeof AnalyticsModality)[keyof typeof AnalyticsModality];

/**
 * <p>Contains fields describing a condition by which to filter the paths. The expression may be understood as <code>name</code>
 *             <code>operator</code>
 *             <code>values</code>. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LocaleId EQ en</code> – The locale is "en".</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion EQ 2</code> – The bot version is equal to two.</p>
 *             </li>
 *          </ul>
 *          <p>The operators that each filter supports are listed below:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BotAlias</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LocaleId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Modality</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Channel</code> – <code>EQ</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AnalyticsPathFilter {
  /**
   * <p>The category by which to filter the intent paths. The descriptions for each option are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – The name of the bot alias.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – The version of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – The locale of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – The modality of the session with the bot (audio, DTMF, or text).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – The channel that the bot is integrated with.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsCommonFilterName | undefined;

  /**
   * <p>The operation by which to filter the category. The following operations are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CO</code> – Contains</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code> – Equals</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> – Greater than</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> – Less than</p>
   *             </li>
   *          </ul>
   *          <p>The operators that each filter supports are listed below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – <code>EQ</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsSessionField = {
  ConversationEndState: "ConversationEndState",
  LocaleId: "LocaleId",
} as const;

/**
 * @public
 */
export type AnalyticsSessionField = (typeof AnalyticsSessionField)[keyof typeof AnalyticsSessionField];

/**
 * @public
 * @enum
 */
export const AnalyticsSessionFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  ConversationEndState: "ConversationEndState",
  Duration: "Duration",
  IntentPath: "IntentPath",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
} as const;

/**
 * @public
 */
export type AnalyticsSessionFilterName = (typeof AnalyticsSessionFilterName)[keyof typeof AnalyticsSessionFilterName];

/**
 * <p>Contains fields describing a condition by which to filter the sessions. The expression may be understood as <code>name</code>
 *             <code>operator</code>
 *             <code>values</code>. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LocaleId EQ en</code> – The locale is "en".</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Duration GT 200</code> – The duration is greater than 200 seconds.</p>
 *             </li>
 *          </ul>
 *          <p>The operators that each filter supports are listed below:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BotAlias</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LocaleId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Modality</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Channel</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Duration</code> – <code>EQ</code>, <code>GT</code>, <code>LT</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>conversationEndState</code> – <code>EQ</code>, <code>CO</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SessionId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IntentPath</code> – <code>EQ</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AnalyticsSessionFilter {
  /**
   * <p>The category by which to filter the sessions. The descriptions for each option are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – The name of the bot alias.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – The version of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – The locale of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – The modality of the session with the bot (audio, DTMF, or text).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – The channel that the bot is integrated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Duration</code> – The duration of the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>conversationEndState</code> – The final state of the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – The identifier of the session with the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – The identifier of the first request in a session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentPath</code> – The order of intents taken in a session.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsSessionFilterName | undefined;

  /**
   * <p>The operation by which to filter the category. The following operations are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CO</code> – Contains</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code> – Equals</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> – Greater than</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> – Less than</p>
   *             </li>
   *          </ul>
   *          <p>The operators that each filter supports are listed below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Duration</code> – <code>EQ</code>, <code>GT</code>, <code>LT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>conversationEndState</code> – <code>EQ</code>, <code>CO</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentPath</code> – <code>EQ</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Contains the category by which the session analytics were grouped and a member of that category.</p>
 * @public
 */
export interface AnalyticsSessionGroupByKey {
  /**
   * <p>The category by which the session analytics were grouped.</p>
   * @public
   */
  name?: AnalyticsSessionField | undefined;

  /**
   * <p>A member of the category by which the session analytics were grouped.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the category by which to group the sessions.</p>
 * @public
 */
export interface AnalyticsSessionGroupBySpecification {
  /**
   * <p>Specifies whether to group the session by their end state or their locale.</p>
   * @public
   */
  name: AnalyticsSessionField | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsSessionMetricName = {
  Concurrency: "Concurrency",
  Count: "Count",
  Dropped: "Dropped",
  Duration: "Duration",
  Failure: "Failure",
  Success: "Success",
  TurnsPerConversation: "TurnsPerConversation",
} as const;

/**
 * @public
 */
export type AnalyticsSessionMetricName = (typeof AnalyticsSessionMetricName)[keyof typeof AnalyticsSessionMetricName];

/**
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the user sessions with the bot.</p>
 * @public
 */
export interface AnalyticsSessionMetric {
  /**
   * <p>The metric for which you want to get session summary statistics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Success</code> – The number of sessions that succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failure</code> – The number of sessions that failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dropped</code> – The number of sessions that the user dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Duration</code> – The duration of sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TurnsPerSession</code> – The number of turns in the sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Concurrency</code> – The number of sessions occurring in the same period of time.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsSessionMetricName | undefined;

  /**
   * <p>The summary statistic to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of sessions in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * <p>An object containing the results for a session metric you requested.</p>
 * @public
 */
export interface AnalyticsSessionMetricResult {
  /**
   * <p>The metric that you requested.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Success</code> – The number of sessions that succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failure</code> – The number of sessions that failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Dropped</code> – The number of sessions that the user dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Duration</code> – The duration of sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TurnPersession</code> – The number of turns in the sessions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Concurrency</code> – The number of sessions occurring in the same period of time.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: AnalyticsSessionMetricName | undefined;

  /**
   * <p>The summary statistic that you requested to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of sessions in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * <p>The value of the summary statistic for the metric that you requested.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>An object containing the results for the session metrics you requested and the bin and/or group(s) they refer to, if applicable.</p>
 * @public
 */
export interface AnalyticsSessionResult {
  /**
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the bins.</p>
   * @public
   */
  groupByKeys?: AnalyticsSessionGroupByKey[] | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   * @public
   */
  metricsResults?: AnalyticsSessionMetricResult[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsSessionSortByName = {
  ConversationStartTime: "ConversationStartTime",
  Duration: "Duration",
  NumberOfTurns: "NumberOfTurns",
} as const;

/**
 * @public
 */
export type AnalyticsSessionSortByName = (typeof AnalyticsSessionSortByName)[keyof typeof AnalyticsSessionSortByName];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceAttributeName = {
  LastUsedIntent: "LastUsedIntent",
} as const;

/**
 * @public
 */
export type AnalyticsUtteranceAttributeName =
  (typeof AnalyticsUtteranceAttributeName)[keyof typeof AnalyticsUtteranceAttributeName];

/**
 * <p>An object that specifies the last used intent at the time of the utterance as an attribute to return.</p>
 * @public
 */
export interface AnalyticsUtteranceAttribute {
  /**
   * <p>An attribute to return. The only available attribute is the intent that the bot mapped the utterance to.</p>
   * @public
   */
  name: AnalyticsUtteranceAttributeName | undefined;
}

/**
 * <p>An object containing the intent that the bot mapped the utterance to.</p>
 * @public
 */
export interface AnalyticsUtteranceAttributeResult {
  /**
   * <p>The intent that the bot mapped the utterance to.</p>
   * @public
   */
  lastUsedIntent?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceField = {
  UtteranceState: "UtteranceState",
  UtteranceText: "UtteranceText",
} as const;

/**
 * @public
 */
export type AnalyticsUtteranceField = (typeof AnalyticsUtteranceField)[keyof typeof AnalyticsUtteranceField];

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceFilterName = {
  BotAliasId: "BotAliasId",
  BotVersion: "BotVersion",
  Channel: "Channel",
  LocaleId: "LocaleId",
  Modality: "Modality",
  OriginatingRequestId: "OriginatingRequestId",
  SessionId: "SessionId",
  UtteranceState: "UtteranceState",
  UtteranceText: "UtteranceText",
} as const;

/**
 * @public
 */
export type AnalyticsUtteranceFilterName =
  (typeof AnalyticsUtteranceFilterName)[keyof typeof AnalyticsUtteranceFilterName];

/**
 * <p>Contains fields describing a condition by which to filter the utterances. The expression may be understood as <code>name</code>
 *             <code>operator</code>
 *             <code>values</code>. For example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LocaleId EQ Book</code> – The locale is the string "en".</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UtteranceText CO help</code> – The text of the utterance contains the string "help".</p>
 *             </li>
 *          </ul>
 *          <p>The operators that each filter supports are listed below:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BotAlias</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BotVersion</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LocaleId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Modality</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Channel</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SessionId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UtteranceState</code> – <code>EQ</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UtteranceText</code> – <code>EQ</code>, <code>CO</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface AnalyticsUtteranceFilter {
  /**
   * <p>The category by which to filter the utterances. The descriptions for each option are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – The name of the bot alias.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – The version of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – The locale of the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – The modality of the session with the bot (audio, DTMF, or text).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – The channel that the bot is integrated with.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – The identifier of the session with the bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – The identifier of the first request in a session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceState</code> – The state of the utterance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceText</code> – The text in the utterance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsUtteranceFilterName | undefined;

  /**
   * <p>The operation by which to filter the category. The following operations are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CO</code> – Contains</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code> – Equals</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> – Greater than</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> – Less than</p>
   *             </li>
   *          </ul>
   *          <p>The operators that each filter supports are listed below:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BotAlias</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BotVersion</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LocaleId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modality</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Channel</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SessionId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OriginatingRequestId</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceState</code> – <code>EQ</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceText</code> – <code>EQ</code>, <code>CO</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operator: AnalyticsFilterOperator | undefined;

  /**
   * <p>An array containing the values of the category by which to apply the operator to filter the results. You can provide multiple values if the operator is <code>EQ</code> or <code>CO</code>. If you provide multiple values, you filter for results that equal/contain any of the values. For example, if the <code>name</code>, <code>operator</code>, and <code>values</code> fields are <code>Modality</code>, <code>EQ</code>, and <code>[Speech, Text]</code>, the operation filters for results where the modality was either <code>Speech</code> or <code>Text</code>.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Contains the category by which the utterance analytics were grouped and the values for that category.</p>
 * @public
 */
export interface AnalyticsUtteranceGroupByKey {
  /**
   * <p>The category by which the utterance analytics were grouped.</p>
   * @public
   */
  name?: AnalyticsUtteranceField | undefined;

  /**
   * <p>A member of the category by which the utterance analytics were grouped.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains the category by which to group the utterances.</p>
 * @public
 */
export interface AnalyticsUtteranceGroupBySpecification {
  /**
   * <p>Specifies whether to group the utterances by their text or their state.</p>
   * @public
   */
  name: AnalyticsUtteranceField | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceMetricName = {
  Count: "Count",
  Detected: "Detected",
  Missed: "Missed",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;

/**
 * @public
 */
export type AnalyticsUtteranceMetricName =
  (typeof AnalyticsUtteranceMetricName)[keyof typeof AnalyticsUtteranceMetricName];

/**
 * <p>Contains the metric and the summary statistic you want to calculate, and the order in which to sort the results, for the utterances across the user sessions with the bot.</p>
 * @public
 */
export interface AnalyticsUtteranceMetric {
  /**
   * <p>The metric for which you want to get utterance summary statistics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of utterances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Missed</code> – The number of utterances that Amazon Lex failed to recognize.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Detected</code> – The number of utterances that Amazon Lex managed to detect.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceTimestamp</code> – The date and time of the utterance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: AnalyticsUtteranceMetricName | undefined;

  /**
   * <p>The summary statistic to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of utterances in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic: AnalyticsMetricStatistic | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   * @public
   */
  order?: AnalyticsSortOrder | undefined;
}

/**
 * <p>An object containing the results for the utterance metric you requested.</p>
 * @public
 */
export interface AnalyticsUtteranceMetricResult {
  /**
   * <p>The metric that you requested.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Count</code> – The number of utterances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Missed</code> – The number of utterances that Amazon Lex failed to recognize.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Detected</code> – The number of utterances that Amazon Lex managed to detect.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtteranceTimestamp</code> – The date and time of the utterance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: AnalyticsUtteranceMetricName | undefined;

  /**
   * <p>The summary statistic that you requested to calculate.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Sum</code> – The total count for the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> – The total count divided by the number of utterances in the category you provide in <code>name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Max</code> – The highest count in the category you provide in <code>name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statistic?: AnalyticsMetricStatistic | undefined;

  /**
   * <p>The value of the summary statistic for the metric that you requested.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>An object containing the results for the utterance metrics you requested and the bin and/or group(s) they refer to, if applicable.</p>
 * @public
 */
export interface AnalyticsUtteranceResult {
  /**
   * <p>A list of objects containing the criteria you requested for binning results and the values of the bins.</p>
   * @public
   */
  binKeys?: AnalyticsBinKey[] | undefined;

  /**
   * <p>A list of objects containing the criteria you requested for grouping results and the values of the bins.</p>
   * @public
   */
  groupByKeys?: AnalyticsUtteranceGroupByKey[] | undefined;

  /**
   * <p>A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.</p>
   * @public
   */
  metricsResults?: AnalyticsUtteranceMetricResult[] | undefined;

  /**
   * <p>A list of objects containing information about the last used intent at the time of an utterance.</p>
   * @public
   */
  attributeResults?: AnalyticsUtteranceAttributeResult[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsUtteranceSortByName = {
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;

/**
 * @public
 */
export type AnalyticsUtteranceSortByName =
  (typeof AnalyticsUtteranceSortByName)[keyof typeof AnalyticsUtteranceSortByName];

/**
 * <p>The object containing information that associates the recommended
 *          intent/slot type with a conversation.</p>
 * @public
 */
export interface AssociatedTranscript {
  /**
   * <p>The content of the transcript that meets the search filter criteria.
   *          For the JSON format of the transcript, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/designing-output-format.html">Output transcript
   *             format</a>.</p>
   * @public
   */
  transcript?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AssociatedTranscriptFilterName = {
  IntentId: "IntentId",
  SlotTypeId: "SlotTypeId",
} as const;

/**
 * @public
 */
export type AssociatedTranscriptFilterName =
  (typeof AssociatedTranscriptFilterName)[keyof typeof AssociatedTranscriptFilterName];

/**
 * <p>Filters to search for the associated transcript.</p>
 * @public
 */
export interface AssociatedTranscriptFilter {
  /**
   * <p>The name of the field to use for filtering. The allowed names are
   *          IntentId and SlotTypeId.</p>
   * @public
   */
  name: AssociatedTranscriptFilterName | undefined;

  /**
   * <p>The values to use to filter the transcript.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies the audio input specifications.</p>
 * @public
 */
export interface AudioSpecification {
  /**
   * <p>Time for how long Amazon Lex waits before speech input is truncated and the speech
   *          is returned to application.</p>
   * @public
   */
  maxLengthMs: number | undefined;

  /**
   * <p>Time for which a bot waits after the customer stops speaking to assume the
   *          utterance is finished.</p>
   * @public
   */
  endTimeoutMs: number | undefined;
}

/**
 * <p>Specifies the DTMF input specifications.</p>
 * @public
 */
export interface DTMFSpecification {
  /**
   * <p>The maximum number of DTMF digits allowed in an utterance.</p>
   * @public
   */
  maxLength: number | undefined;

  /**
   * <p>How long the bot should wait after the last DTMF character input before assuming
   *          that the input has concluded.</p>
   * @public
   */
  endTimeoutMs: number | undefined;

  /**
   * <p>The DTMF character that clears the accumulated DTMF digits and immediately ends
   *          the input.</p>
   * @public
   */
  deletionCharacter: string | undefined;

  /**
   * <p>The DTMF character that immediately ends input. If the user does not press this
   *          character, the input ends after the end timeout.</p>
   * @public
   */
  endCharacter: string | undefined;
}

/**
 * <p>Specifies the audio and DTMF input specification.</p>
 * @public
 */
export interface AudioAndDTMFInputSpecification {
  /**
   * <p>Time for which a bot waits before assuming that the customer isn't going to speak or press
   *          a key. This timeout is shared between Audio and DTMF inputs.</p>
   * @public
   */
  startTimeoutMs: number | undefined;

  /**
   * <p>Specifies the settings on audio input.</p>
   * @public
   */
  audioSpecification?: AudioSpecification | undefined;

  /**
   * <p>Specifies the settings on DTMF input.</p>
   * @public
   */
  dtmfSpecification?: DTMFSpecification | undefined;
}

/**
 * <p>Specifies an Amazon S3 bucket for logging audio conversations</p>
 * @public
 */
export interface S3BucketLogDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services Key Management Service
   *          (KMS) key for encrypting audio log files stored in an S3 bucket.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio
   *          log files are stored.</p>
   * @public
   */
  s3BucketArn: string | undefined;

  /**
   * <p>The S3 prefix to assign to audio log files.</p>
   * @public
   */
  logPrefix: string | undefined;
}

/**
 * <p>The location of audio log files collected when conversation logging
 *          is enabled for a bot.</p>
 * @public
 */
export interface AudioLogDestination {
  /**
   * <p>The Amazon S3 bucket where the audio log files are stored. The IAM
   *          role specified in the <code>roleArn</code> parameter of the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation must have permission to write to this
   *          bucket.</p>
   * @public
   */
  s3Bucket: S3BucketLogDestination | undefined;
}

/**
 * <p>Settings for logging audio of conversations between Amazon Lex and a
 *          user. You specify whether to log audio and the Amazon S3 bucket where
 *          the audio file is stored.</p>
 * @public
 */
export interface AudioLogSetting {
  /**
   * <p>Determines whether audio logging in enabled for the bot.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The location of audio log files collected when conversation logging
   *          is enabled for a bot.</p>
   * @public
   */
  destination: AudioLogDestination | undefined;

  /**
   * <p>The option to enable selective conversation log capture for audio.</p>
   * @public
   */
  selectiveLoggingEnabled?: boolean | undefined;
}

/**
 * <p>The new custom vocabulary item from the custom
 *          vocabulary list.</p>
 * @public
 */
export interface NewCustomVocabularyItem {
  /**
   * <p>The unique phrase for the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   * @public
   */
  phrase: string | undefined;

  /**
   * <p>The weight assigned to the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   * @public
   */
  weight?: number | undefined;

  /**
   * <p>The display as value assigned to the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   * @public
   */
  displayAs?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateCustomVocabularyItemRequest {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this
   *          custom vocabulary.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>A list of new custom vocabulary items. Each entry must contain a phrase and
   *          can optionally contain a displayAs and/or a weight.</p>
   * @public
   */
  customVocabularyItemList: NewCustomVocabularyItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  DUPLICATE_INPUT: "DUPLICATE_INPUT",
  INTERNAL_SERVER_FAILURE: "INTERNAL_SERVER_FAILURE",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  RESOURCE_DOES_NOT_EXIST: "RESOURCE_DOES_NOT_EXIST",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>The unique failed custom vocabulary item from the custom
 *          vocabulary list.</p>
 * @public
 */
export interface FailedCustomVocabularyItem {
  /**
   * <p>The unique item identifer for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  itemId?: string | undefined;

  /**
   * <p>The error message for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The unique error code for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  errorCode?: ErrorCode | undefined;
}

/**
 * <p>The unique custom vocabulary item from the custom
 *          vocabulary list.</p>
 * @public
 */
export interface CustomVocabularyItem {
  /**
   * <p>The unique item identifer for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  itemId: string | undefined;

  /**
   * <p>The unique phrase for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  phrase: string | undefined;

  /**
   * <p>The weight assigned for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  weight?: number | undefined;

  /**
   * <p>The DisplayAs value for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   * @public
   */
  displayAs?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateCustomVocabularyItemResponse {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this
   *          custom vocabulary.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary is used.
   *          The string must match one of the supported locales.
   *          For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>A list of custom vocabulary items that failed to create during the operation.
   *          The reason for the error is contained within each error object.</p>
   * @public
   */
  errors?: FailedCustomVocabularyItem[] | undefined;

  /**
   * <p>A list of custom vocabulary items that were
   *          successfully created during the operation.</p>
   * @public
   */
  resources?: CustomVocabularyItem[] | undefined;
}

/**
 * <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>You have reached a quota for your bot. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The number of seconds after which the user can invoke the API again.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>The unique entry identifier for the custom vocabulary
 *          items.</p>
 * @public
 */
export interface CustomVocabularyEntryId {
  /**
   * <p>The unique item identifier for the custom vocabulary
   *          items.</p>
   * @public
   */
  itemId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCustomVocabularyItemRequest {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary is
   *          used. The string must match one of the supported locales.
   *          For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>A list of custom vocabulary items requested to be deleted.
   *          Each entry must contain the unique custom vocabulary entry identifier.</p>
   * @public
   */
  customVocabularyItemList: CustomVocabularyEntryId[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCustomVocabularyItemResponse {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary is
   *          used. The string must match one of the supported locales.
   *          For more information, see Supported
   *          languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>A list of custom vocabulary items that failed to delete during the operation.
   *          The reason for the error is contained within each error object.</p>
   * @public
   */
  errors?: FailedCustomVocabularyItem[] | undefined;

  /**
   * <p>A list of custom vocabulary items that were
   *          successfully deleted during the operation.</p>
   * @public
   */
  resources?: CustomVocabularyItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCustomVocabularyItemRequest {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>A list of custom vocabulary items with updated fields. Each entry must contain a phrase
   *          and can optionally contain a displayAs and/or a weight.</p>
   * @public
   */
  customVocabularyItemList: CustomVocabularyItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCustomVocabularyItemResponse {
  /**
   * <p>The identifier of the bot associated with this custom vocabulary.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this custom
   *          vocabulary.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The identifier of the language and locale where this custom vocabulary
   *          is used. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>A list of custom vocabulary items that failed to update during the operation.
   *          The reason for the error is contained within each error object.</p>
   * @public
   */
  errors?: FailedCustomVocabularyItem[] | undefined;

  /**
   * <p>A list of custom vocabulary items that were
   *          successfully updated during the operation.</p>
   * @public
   */
  resources?: CustomVocabularyItem[] | undefined;
}

/**
 * <p>The details on the Bedrock guardrail configuration.</p>
 * @public
 */
export interface BedrockGuardrailConfiguration {
  /**
   * <p>The unique guardrail id for the Bedrock guardrail configuration.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The guardrail version for the Bedrock guardrail configuration.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>The exact response fields given by the Bedrock knowledge store.</p>
 * @public
 */
export interface BedrockKnowledgeStoreExactResponseFields {
  /**
   * <p>The answer field used for an exact response from Bedrock Knowledge Store.</p>
   * @public
   */
  answerField?: string | undefined;
}

/**
 * <p>Contains details about the configuration of a Amazon Bedrock knowledge base.</p>
 * @public
 */
export interface BedrockKnowledgeStoreConfiguration {
  /**
   * <p>The base ARN of the knowledge base used.</p>
   * @public
   */
  bedrockKnowledgeBaseArn: string | undefined;

  /**
   * <p>Specifies whether to return an exact response, or to return an answer generated by the model, using the fields you specify from the database.</p>
   * @public
   */
  exactResponse?: boolean | undefined;

  /**
   * <p>Contains the names of the fields used for an exact response to the user.</p>
   * @public
   */
  exactResponseFields?: BedrockKnowledgeStoreExactResponseFields | undefined;
}

/**
 * @public
 * @enum
 */
export const BedrockTraceStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type BedrockTraceStatus = (typeof BedrockTraceStatus)[keyof typeof BedrockTraceStatus];

/**
 * <p>Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.</p>
 * @public
 */
export interface BedrockModelSpecification {
  /**
   * <p>The ARN of the foundation model used in descriptive bot building.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The guardrail configuration in the Bedrock model specification details.</p>
   * @public
   */
  guardrail?: BedrockGuardrailConfiguration | undefined;

  /**
   * <p>The Bedrock trace status in the Bedrock model specification details.</p>
   * @public
   */
  traceStatus?: BedrockTraceStatus | undefined;

  /**
   * <p>The custom prompt used in the Bedrock model specification details.</p>
   * @public
   */
  customPrompt?: string | undefined;
}

/**
 * <p>Provides a record of an event that affects a bot alias. For example,
 *          when the version of a bot that the alias points to changes.</p>
 * @public
 */
export interface BotAliasHistoryEvent {
  /**
   * <p>The version of the bot that was used in the event. </p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The date and time that the event started.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The date and time that the event ended.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>Specifies a Lambda function that verifies requests to a bot or
 *          fulfills the user's request to a bot.</p>
 * @public
 */
export interface LambdaCodeHook {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   * @public
   */
  lambdaARN: string | undefined;

  /**
   * <p>The version of the request-response that you want Amazon Lex to use to
   *          invoke your Lambda function.</p>
   * @public
   */
  codeHookInterfaceVersion: string | undefined;
}

/**
 * <p>Contains information about code hooks that Amazon Lex calls during a
 *          conversation.</p>
 * @public
 */
export interface CodeHookSpecification {
  /**
   * <p>Specifies a Lambda function that verifies requests to a bot or
   *          fulfills the user's request to a bot.</p>
   * @public
   */
  lambdaCodeHook: LambdaCodeHook | undefined;
}

/**
 * <p>Specifies settings that are unique to a locale. For example, you can
 *          use different Lambda function depending on the bot's locale.</p>
 * @public
 */
export interface BotAliasLocaleSettings {
  /**
   * <p>Determines whether the locale is enabled for the bot. If the value
   *          is <code>false</code>, the locale isn't available for use.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Specifies the Lambda function that should be used in the
   *          locale.</p>
   * @public
   */
  codeHookSpecification?: CodeHookSpecification | undefined;
}

/**
 * @public
 * @enum
 */
export const BotAliasReplicationStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Updating: "Updating",
} as const;

/**
 * @public
 */
export type BotAliasReplicationStatus = (typeof BotAliasReplicationStatus)[keyof typeof BotAliasReplicationStatus];

/**
 * <p>Contains information about all the aliases replication statuses applicable for global resiliency.</p>
 * @public
 */
export interface BotAliasReplicaSummary {
  /**
   * <p>The bot alias ID for all the alias bot replications.</p>
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * <p>The replication statuses for all the alias bot replications.</p>
   * @public
   */
  botAliasReplicationStatus?: BotAliasReplicationStatus | undefined;

  /**
   * <p>The bot version for all the alias bot replications.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The creation time and date for all the alias bot replications.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The last time and date updated for all the alias bot replications.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The reasons for failure for the aliases bot replications.</p>
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BotAliasStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;

/**
 * @public
 */
export type BotAliasStatus = (typeof BotAliasStatus)[keyof typeof BotAliasStatus];

/**
 * <p>Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html">ListBotAliases</a> operation.</p>
 * @public
 */
export interface BotAliasSummary {
  /**
   * <p>The unique identifier assigned to the bot alias. You can use this ID
   *          to get detailed information about the alias using the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotAlias.html">DescribeBotAlias</a> operation.</p>
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * <p>The name of the bot alias.</p>
   * @public
   */
  botAliasName?: string | undefined;

  /**
   * <p>The description of the bot alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the bot that the bot alias references.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The current state of the bot alias. If the status is
   *          <code>Available</code>, the alias is ready for use.</p>
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;

  /**
   * <p>A timestamp of the date and time that the bot alias was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>A timestamp of the date and time that the bot alias was last
   *          updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * <p>The target Amazon S3 location for the test set execution using a bot alias.</p>
 * @public
 */
export interface BotAliasTestExecutionTarget {
  /**
   * <p>The bot Id of the bot alias used in the test set execution.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The bot alias Id of the bot alias used in the test set execution.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale Id of the bot alias used in the test set execution.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * <p>Provides the identity of a the bot that was exported.</p>
 * @public
 */
export interface BotExportSpecification {
  /**
   * <p>The identifier of the bot assigned by Amazon Lex.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that was exported. This will be either
   *             <code>DRAFT</code> or the version number.</p>
   * @public
   */
  botVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BotFilterName = {
  BotName: "BotName",
  BotType: "BotType",
} as const;

/**
 * @public
 */
export type BotFilterName = (typeof BotFilterName)[keyof typeof BotFilterName];

/**
 * @public
 * @enum
 */
export const BotFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
  NotEquals: "NE",
} as const;

/**
 * @public
 */
export type BotFilterOperator = (typeof BotFilterOperator)[keyof typeof BotFilterOperator];

/**
 * <p>Filters the responses returned by the <code>ListBots</code>
 *          operation.</p>
 * @public
 */
export interface BotFilter {
  /**
   * <p>The name of the field to filter the list of bots.</p>
   * @public
   */
  name: BotFilterName | undefined;

  /**
   * <p>The value to use for filtering the list of bots.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListBots</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *          <code>ListBots</code> operation should return aliases that contain
   *          the specified value.</p>
   * @public
   */
  operator: BotFilterOperator | undefined;
}

/**
 * <p>By default, data stored by Amazon Lex is encrypted. The
 *             <code>DataPrivacy</code> structure provides settings that determine
 *          how Amazon Lex handles special cases of securing the data for your bot.
 *       </p>
 * @public
 */
export interface DataPrivacy {
  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service,
   *          you must specify whether your use of Amazon Lex is related to a website,
   *          program, or other application that is directed or targeted, in whole or
   *          in part, to children under age 13 and subject to the Children's Online
   *          Privacy Protection Act (COPPA) by specifying <code>true</code> or
   *             <code>false</code> in the <code>childDirected</code> field. By
   *          specifying <code>true</code> in the <code>childDirected</code> field,
   *          you confirm that your use of Amazon Lex <b>is</b>
   *          related to a website, program, or other application that is directed or
   *          targeted, in whole or in part, to children under age 13 and subject to
   *          COPPA. By specifying <code>false</code> in the
   *             <code>childDirected</code> field, you confirm that your use of Amazon Lex
   *             <b>is not</b> related to a website,
   *          program, or other application that is directed or targeted, in whole or
   *          in part, to children under age 13 and subject to COPPA. You may not
   *          specify a default value for the <code>childDirected</code> field that
   *          does not accurately reflect whether your use of Amazon Lex is related to a
   *          website, program, or other application that is directed or targeted, in
   *          whole or in part, to children under age 13 and subject to COPPA. If
   *          your use of Amazon Lex relates to a website, program, or other application
   *          that is directed in whole or in part, to children under age 13, you
   *          must obtain any required verifiable parental consent under COPPA. For
   *          information regarding the use of Amazon Lex in connection with websites,
   *          programs, or other applications that are directed or targeted, in whole
   *          or in part, to children under age 13, see the <a href="http://aws.amazon.com/lex/faqs#data-security">Amazon Lex
   *             FAQ</a>.</p>
   * @public
   */
  childDirected: boolean | undefined;
}

/**
 * <p>Settings parameters for the error logs, whether it is enabled or disabled.</p>
 * @public
 */
export interface ErrorLogSettings {
  /**
   * <p>Settings parameters for the error logs, when it is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>Provides the bot parameters required for importing a bot.</p>
 * @public
 */
export interface BotImportSpecification {
  /**
   * <p>The name that Amazon Lex should use for the bot.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to build and run
   *          the bot.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>By default, data stored by Amazon Lex is encrypted. The
   *             <code>DataPrivacy</code> structure provides settings that determine
   *          how Amazon Lex handles special cases of securing the data for your bot.
   *       </p>
   * @public
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * <p>Allows you to configure destinations where error logs will be published during the bot import process.</p>
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;

  /**
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot. </p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>A list of tags to add to the bot. You can only add tags when you
   *          import a bot. You can't use the <code>UpdateBot</code> operation to
   *          update tags. To update tags, use the <code>TagResource</code>
   *          operation.</p>
   * @public
   */
  botTags?: Record<string, string> | undefined;

  /**
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you import a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   * @public
   */
  testBotAliasTags?: Record<string, string> | undefined;
}

/**
 * <p>Provides the bot locale parameters required for exporting a bot
 *          locale.</p>
 * @public
 */
export interface BotLocaleExportSpecification {
  /**
   * <p>The identifier of the bot to create the locale for.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to export.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale to export. The string must
   *          match one of the locales in the bot.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BotLocaleFilterName = {
  BotLocaleName: "BotLocaleName",
} as const;

/**
 * @public
 */
export type BotLocaleFilterName = (typeof BotLocaleFilterName)[keyof typeof BotLocaleFilterName];

/**
 * @public
 * @enum
 */
export const BotLocaleFilterOperator = {
  Contains: "CO",
  Equals: "EQ",
} as const;

/**
 * @public
 */
export type BotLocaleFilterOperator = (typeof BotLocaleFilterOperator)[keyof typeof BotLocaleFilterOperator];

/**
 * <p>Filters responses returned by the <code>ListBotLocales</code>
 *          operation.</p>
 * @public
 */
export interface BotLocaleFilter {
  /**
   * <p>The name of the field to filter the list of bots.</p>
   * @public
   */
  name: BotLocaleFilterName | undefined;

  /**
   * <p>The value to use for filtering the list of bots.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *          <code>ListBotLocales</code> operation should return only aliases
   *          that equal the specified value. Specify <code>CO</code> when the
   *          <code>ListBotLocales</code> operation should return aliases that
   *          contain the specified value.</p>
   * @public
   */
  operator: BotLocaleFilterOperator | undefined;
}

/**
 * <p>Provides information about an event that occurred affecting the bot
 *             locale.</p>
 * @public
 */
export interface BotLocaleHistoryEvent {
  /**
   * <p>A description of the event that occurred.</p>
   * @public
   */
  event: string | undefined;

  /**
   * <p>A timestamp of the date and time that the event occurred.</p>
   * @public
   */
  eventDate: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const VoiceEngine = {
  Generative: "generative",
  LongForm: "long-form",
  Neural: "neural",
  Standard: "standard",
} as const;

/**
 * @public
 */
export type VoiceEngine = (typeof VoiceEngine)[keyof typeof VoiceEngine];

/**
 * <p>Defines settings for using an Amazon Polly voice to communicate with a
 *          user.</p>
 *          <p>Valid values include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>standard</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>neural</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>long-form</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>generative</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface VoiceSettings {
  /**
   * <p>The identifier of the Amazon Polly voice to use.</p>
   * @public
   */
  voiceId: string | undefined;

  /**
   * <p>Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine">
   *                <code>engine</code> parameter of the <code>SynthesizeSpeech</code> operation</a> in the <i>Amazon Polly developer guide</i>.</p>
   *          <p>If you do not specify a value, the default is <code>standard</code>.</p>
   * @public
   */
  engine?: VoiceEngine | undefined;
}

/**
 * <p>Provides the bot locale parameters required for importing a bot
 *          locale.</p>
 * @public
 */
export interface BotLocaleImportSpecification {
  /**
   * <p>The identifier of the bot to import the locale to.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to import the locale to. This can only be the
   *             <code>DRAFT</code> version of the bot.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>Determines the threshold where Amazon Lex will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents. <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> are only inserted if they are
   *          configured for the bot. </p>
   *          <p>For example, suppose a bot is configured with the confidence
   *          threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon
   *          Lex returns three alternative intents with the following confidence
   *          scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response
   *          from the <code>PostText</code> operation would be:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AMAZON.FallbackIntent</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentB</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentC</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * <p>Defines settings for using an Amazon Polly voice to communicate with a
   *          user.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neural</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long-form</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>generative</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const BotLocaleSortAttribute = {
  BotLocaleName: "BotLocaleName",
} as const;

/**
 * @public
 */
export type BotLocaleSortAttribute = (typeof BotLocaleSortAttribute)[keyof typeof BotLocaleSortAttribute];

/**
 * <p>Specifies attributes for sorting a list of bot locales.</p>
 * @public
 */
export interface BotLocaleSortBy {
  /**
   * <p>The bot locale attribute to sort by.</p>
   * @public
   */
  attribute: BotLocaleSortAttribute | undefined;

  /**
   * <p>Specifies whether to sort the bot locales in ascending or descending
   *          order.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 * @enum
 */
export const BotLocaleStatus = {
  Building: "Building",
  Built: "Built",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Importing: "Importing",
  NotBuilt: "NotBuilt",
  Processing: "Processing",
  ReadyExpressTesting: "ReadyExpressTesting",
} as const;

/**
 * @public
 */
export type BotLocaleStatus = (typeof BotLocaleStatus)[keyof typeof BotLocaleStatus];

/**
 * <p>Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html">ListBotLocales</a> operation.</p>
 * @public
 */
export interface BotLocaleSummary {
  /**
   * <p>The language and locale of the bot locale.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The name of the bot locale.</p>
   * @public
   */
  localeName?: string | undefined;

  /**
   * <p>The description of the bot locale.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the bot locale. When the status is
   *          <code>Built</code> the locale is ready for use.</p>
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * <p>A timestamp of the date and time that the bot locale was last
   *          updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>A timestamp of the date and time that the bot locale was last
   *          built.</p>
   * @public
   */
  lastBuildSubmittedDateTime?: Date | undefined;
}

/**
 * <p>A bot that is a member of a network of bots.</p>
 * @public
 */
export interface BotMember {
  /**
   * <p>The unique ID of a bot that is a member of this network of bots.</p>
   * @public
   */
  botMemberId: string | undefined;

  /**
   * <p>The unique name of a bot that is a member of this network of bots.</p>
   * @public
   */
  botMemberName: string | undefined;

  /**
   * <p>The alias ID of a bot that is a member of this network of bots.</p>
   * @public
   */
  botMemberAliasId: string | undefined;

  /**
   * <p>The alias name of a bot that is a member of this network of bots.</p>
   * @public
   */
  botMemberAliasName: string | undefined;

  /**
   * <p>The version of a bot that is a member of this network of bots.</p>
   * @public
   */
  botMemberVersion: string | undefined;
}

/**
 * <p>The object that contains the statistical summary of recommended
 *             intents associated with the bot recommendation.</p>
 * @public
 */
export interface IntentStatistics {
  /**
   * <p>The number of recommended intents associated with the bot
   *             recommendation.</p>
   * @public
   */
  discoveredIntentCount?: number | undefined;
}

/**
 * <p>The object that contains the statistical summary of the recommended
 *             slot type associated with the bot recommendation.</p>
 * @public
 */
export interface SlotTypeStatistics {
  /**
   * <p>The number of recommended slot types associated with the bot
   *             recommendation.</p>
   * @public
   */
  discoveredSlotTypeCount?: number | undefined;
}

/**
 * <p>A statistical summary of the bot recommendation results.</p>
 * @public
 */
export interface BotRecommendationResultStatistics {
  /**
   * <p>Statistical information about about the intents associated with the
   *             bot recommendation results.</p>
   * @public
   */
  intents?: IntentStatistics | undefined;

  /**
   * <p>Statistical information about the slot types associated with the bot
   *             recommendation results.</p>
   * @public
   */
  slotTypes?: SlotTypeStatistics | undefined;
}

/**
 * <p>The object representing the URL of the bot definition, the URL of
 *             the associated transcript, and a statistical summary of the bot
 *             recommendation results.</p>
 * @public
 */
export interface BotRecommendationResults {
  /**
   * <p>The presigned URL link of the recommended bot definition.</p>
   * @public
   */
  botLocaleExportUrl?: string | undefined;

  /**
   * <p>The presigned url link of the associated transcript.</p>
   * @public
   */
  associatedTranscriptsUrl?: string | undefined;

  /**
   * <p>The statistical summary of the bot recommendation results.</p>
   * @public
   */
  statistics?: BotRecommendationResultStatistics | undefined;
}

/**
 * @public
 * @enum
 */
export const BotRecommendationStatus = {
  Available: "Available",
  Deleted: "Deleted",
  Deleting: "Deleting",
  Downloading: "Downloading",
  Failed: "Failed",
  Processing: "Processing",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Updating: "Updating",
} as const;

/**
 * @public
 */
export type BotRecommendationStatus = (typeof BotRecommendationStatus)[keyof typeof BotRecommendationStatus];

/**
 * <p>A summary of the bot recommendation.</p>
 * @public
 */
export interface BotRecommendationSummary {
  /**
   * <p>The status of the bot recommendation.</p>
   *          <p>If the status is Failed, then the reasons for the failure are listed
   *          in the failureReasons field. </p>
   * @public
   */
  botRecommendationStatus: BotRecommendationStatus | undefined;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   * @public
   */
  botRecommendationId: string | undefined;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const BotReplicaStatus = {
  Deleting: "Deleting",
  Enabled: "Enabled",
  Enabling: "Enabling",
  Failed: "Failed",
} as const;

/**
 * @public
 */
export type BotReplicaStatus = (typeof BotReplicaStatus)[keyof typeof BotReplicaStatus];

/**
 * <p>Contains summary information about all the replication statuses applicable for global resiliency.</p>
 * @public
 */
export interface BotReplicaSummary {
  /**
   * <p>The replica region used in the replication statuses summary.</p>
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * <p>The creation time and date for the replicated bots.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The operation status for the replicated bot applicable.</p>
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;

  /**
   * <p>The reasons for the failure for the replicated bot.</p>
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BotSortAttribute = {
  BotName: "BotName",
} as const;

/**
 * @public
 */
export type BotSortAttribute = (typeof BotSortAttribute)[keyof typeof BotSortAttribute];

/**
 * <p>Specifies attributes for sorting a list of bots.</p>
 * @public
 */
export interface BotSortBy {
  /**
   * <p>The attribute to use to sort the list of bots.</p>
   * @public
   */
  attribute: BotSortAttribute | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 * @enum
 */
export const BotStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
  Importing: "Importing",
  Inactive: "Inactive",
  Updating: "Updating",
  Versioning: "Versioning",
} as const;

/**
 * @public
 */
export type BotStatus = (typeof BotStatus)[keyof typeof BotStatus];

/**
 * @public
 * @enum
 */
export const BotType = {
  Bot: "Bot",
  BotNetwork: "BotNetwork",
} as const;

/**
 * @public
 */
export type BotType = (typeof BotType)[keyof typeof BotType];

/**
 * <p>Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html">ListBots</a> operation.</p>
 * @public
 */
export interface BotSummary {
  /**
   * <p>The unique identifier assigned to the bot. Use this ID to get
   *          detailed information about the bot with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBot.html">DescribeBot</a> operation.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The name of the bot.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The description of the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the bot. When the status is
   *          <code>Available</code> the bot is ready for use.</p>
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * <p>The latest numerical version in use for the bot.</p>
   * @public
   */
  latestBotVersion?: string | undefined;

  /**
   * <p>The date and time that the bot was last updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The type of the bot.</p>
   * @public
   */
  botType?: BotType | undefined;
}

/**
 * <p>The version of a bot used for a bot locale.</p>
 * @public
 */
export interface BotVersionLocaleDetails {
  /**
   * <p>The version of a bot used for a bot locale.</p>
   * @public
   */
  sourceBotVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BotVersionReplicaSortAttribute = {
  BotVersion: "BotVersion",
} as const;

/**
 * @public
 */
export type BotVersionReplicaSortAttribute =
  (typeof BotVersionReplicaSortAttribute)[keyof typeof BotVersionReplicaSortAttribute];

/**
 * <p>The sort category for the version replicated bots.</p>
 * @public
 */
export interface BotVersionReplicaSortBy {
  /**
   * <p>The attribute of the sort category for the version replicated bots.</p>
   * @public
   */
  attribute: BotVersionReplicaSortAttribute | undefined;

  /**
   * <p>The order of the sort category for the version replicated bots.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * @public
 * @enum
 */
export const BotVersionReplicationStatus = {
  Available: "Available",
  Creating: "Creating",
  Deleting: "Deleting",
  Failed: "Failed",
} as const;

/**
 * @public
 */
export type BotVersionReplicationStatus =
  (typeof BotVersionReplicationStatus)[keyof typeof BotVersionReplicationStatus];

/**
 * <p>Contains summary information for all the version replication statuses applicable for Global resiliency.</p>
 * @public
 */
export interface BotVersionReplicaSummary {
  /**
   * <p>The bot version for the summary information for all the version replication statuses.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The version replication status for all the replicated bots.</p>
   * @public
   */
  botVersionReplicationStatus?: BotVersionReplicationStatus | undefined;

  /**
   * <p>The creation date and time of the replication status for all the replicated bots.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The reasons for replication failure for all the replicated bots.</p>
   * @public
   */
  failureReasons?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BotVersionSortAttribute = {
  BotVersion: "BotVersion",
} as const;

/**
 * @public
 */
export type BotVersionSortAttribute = (typeof BotVersionSortAttribute)[keyof typeof BotVersionSortAttribute];

/**
 * <p>Specifies attributes for sorting a list of bot versions.</p>
 * @public
 */
export interface BotVersionSortBy {
  /**
   * <p>The attribute to use to sort the list of versions.</p>
   * @public
   */
  attribute: BotVersionSortAttribute | undefined;

  /**
   * <p>The order to sort the list. You can specify ascending or descending
   *          order.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * <p>Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html">ListBotVersions</a> operation.</p>
 * @public
 */
export interface BotVersionSummary {
  /**
   * <p>The name of the bot associated with the version.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The numeric version of the bot, or <code>DRAFT</code> to indicate
   *          that this is the version of the bot that can be updated..</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the bot. When the status is available, the version of
   *          the bot is ready for use.</p>
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * <p>A timestamp of the date and time that the version was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface BuildBotLocaleRequest {
  /**
   * <p>The identifier of the bot to build. The identifier is returned in
   *          the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to build. This can only be the draft version
   *          of the bot.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface BuildBotLocaleResponse {
  /**
   * <p>The identifier of the specified bot.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The version of the bot that was built. This is only the draft
   *          version of the bot.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The language and locale specified of where the bot can be
   *          used.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The bot's build status. When the status is
   *             <code>ReadyExpressTesting</code> you can test the bot using the
   *          utterances defined for the intents and slot types. When the status is
   *             <code>Built</code>, the bot is ready for use and can be tested using
   *          any utterance.</p>
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * <p>A timestamp indicating the date and time that the bot was last built
   *          for this locale.</p>
   * @public
   */
  lastBuildSubmittedDateTime?: Date | undefined;
}

/**
 * <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
  }
}

/**
 * <p>Contains specifications for the descriptive bot building feature.</p>
 * @public
 */
export interface DescriptiveBotBuilderSpecification {
  /**
   * <p>Specifies whether the descriptive bot building feature is activated or not.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>An object containing information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.</p>
   * @public
   */
  bedrockModelSpecification?: BedrockModelSpecification | undefined;
}

/**
 * <p>Contains specifications for the sample utterance generation feature.</p>
 * @public
 */
export interface SampleUtteranceGenerationSpecification {
  /**
   * <p>Specifies whether to enable sample utterance generation or not.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.</p>
   * @public
   */
  bedrockModelSpecification?: BedrockModelSpecification | undefined;
}

/**
 * <p>Contains specifications about the Amazon Lex build time generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
 * @public
 */
export interface BuildtimeSettings {
  /**
   * <p>An object containing specifications for the descriptive bot building feature.</p>
   * @public
   */
  descriptiveBotBuilder?: DescriptiveBotBuilderSpecification | undefined;

  /**
   * <p>Contains specifications for the sample utterance generation feature.</p>
   * @public
   */
  sampleUtteranceGeneration?: SampleUtteranceGenerationSpecification | undefined;
}

/**
 * @public
 * @enum
 */
export const BuiltInIntentSortAttribute = {
  IntentSignature: "IntentSignature",
} as const;

/**
 * @public
 */
export type BuiltInIntentSortAttribute = (typeof BuiltInIntentSortAttribute)[keyof typeof BuiltInIntentSortAttribute];

/**
 * <p>Specifies attributes for sorting a list of built-in intents.</p>
 * @public
 */
export interface BuiltInIntentSortBy {
  /**
   * <p>The attribute to use to sort the list of built-in intents.</p>
   * @public
   */
  attribute: BuiltInIntentSortAttribute | undefined;

  /**
   * <p>The order to sort the list. You can specify ascending or descending
   *          order.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * <p>Provides summary information about a built-in intent for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html"> ListBuiltInIntents </a> operation.</p>
 * @public
 */
export interface BuiltInIntentSummary {
  /**
   * <p>The signature of the built-in intent. Use this to specify the parent
   *          intent of a derived intent.</p>
   * @public
   */
  intentSignature?: string | undefined;

  /**
   * <p>The description of the intent.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BuiltInSlotTypeSortAttribute = {
  SlotTypeSignature: "SlotTypeSignature",
} as const;

/**
 * @public
 */
export type BuiltInSlotTypeSortAttribute =
  (typeof BuiltInSlotTypeSortAttribute)[keyof typeof BuiltInSlotTypeSortAttribute];

/**
 * <p>Specifies attributes for sorting a list of built-in slot
 *          types.</p>
 * @public
 */
export interface BuiltInSlotTypeSortBy {
  /**
   * <p>The attribute to use to sort the list of built-in intents.</p>
   * @public
   */
  attribute: BuiltInSlotTypeSortAttribute | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   * @public
   */
  order: SortOrder | undefined;
}

/**
 * <p>Provides summary information about a built-in slot type for the
 *          <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html"> ListBuiltInSlotTypes </a>
 *          operation.</p>
 * @public
 */
export interface BuiltInSlotTypeSummary {
  /**
   * <p>The signature of the built-in slot type. Use this to specify the
   *          parent slot type of a derived slot type.</p>
   * @public
   */
  slotTypeSignature?: string | undefined;

  /**
   * <p>The description of the built-in slot type.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Describes a button to use on a response card used to gather slot
 *          values from a user.</p>
 * @public
 */
export interface Button {
  /**
   * <p>The text that appears on the button. Use this to tell the user what
   *          value is returned when they choose this button.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The value returned to Amazon Lex when the user chooses this button. This
   *          must be one of the slot values configured for the slot.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The Amazon CloudWatch Logs log group where the text and metadata logs are
 *          delivered. The log group must exist before you enable logging.</p>
 * @public
 */
export interface CloudWatchLogGroupLogDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the log group where text and
   *          metadata logs are delivered.</p>
   * @public
   */
  cloudWatchLogGroupArn: string | undefined;

  /**
   * <p>The prefix of the log stream name within the log group that you
   *          specified </p>
   * @public
   */
  logPrefix: string | undefined;
}

/**
 * <p>Subslot type composition.</p>
 * @public
 */
export interface SubSlotTypeComposition {
  /**
   * <p>Name of a constituent sub slot inside a composite slot.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique identifier assigned to a slot type.
   *         This refers to either a built-in slot type or the unique slotTypeId of a custom slot type.</p>
   * @public
   */
  slotTypeId: string | undefined;
}

/**
 * <p>A composite slot is a combination of two or more slots
 *        that capture multiple pieces of information in a single user input.</p>
 * @public
 */
export interface CompositeSlotTypeSetting {
  /**
   * <p>Subslots in the composite slot.</p>
   * @public
   */
  subSlots?: SubSlotTypeComposition[] | undefined;
}

/**
 * <p>Provides an expression that evaluates to true or false. </p>
 * @public
 */
export interface Condition {
  /**
   * <p>The expression string that is evaluated. </p>
   * @public
   */
  expressionString: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DialogActionType = {
  CloseIntent: "CloseIntent",
  ConfirmIntent: "ConfirmIntent",
  ElicitIntent: "ElicitIntent",
  ElicitSlot: "ElicitSlot",
  EndConversation: "EndConversation",
  EvaluateConditional: "EvaluateConditional",
  FulfillIntent: "FulfillIntent",
  InvokeDialogCodeHook: "InvokeDialogCodeHook",
  StartIntent: "StartIntent",
} as const;

/**
 * @public
 */
export type DialogActionType = (typeof DialogActionType)[keyof typeof DialogActionType];

/**
 * <p>Defines the action that the bot executes at runtime when the
 *          conversation reaches this step.</p>
 * @public
 */
export interface DialogAction {
  /**
   * <p>The action that the bot should execute. </p>
   * @public
   */
  type: DialogActionType | undefined;

  /**
   * <p>If the dialog action is <code>ElicitSlot</code>, defines the slot to
   *          elicit from the user.</p>
   * @public
   */
  slotToElicit?: string | undefined;

  /**
   * <p>When true the next message for the intent is not used.</p>
   * @public
   */
  suppressNextMessage?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SlotShape = {
  List: "List",
  Scalar: "Scalar",
} as const;

/**
 * @public
 */
export type SlotShape = (typeof SlotShape)[keyof typeof SlotShape];

/**
 * <p>The value to set in a slot.</p>
 * @public
 */
export interface SlotValue {
  /**
   * <p>The value that Amazon Lex determines for the slot. The
   *          actual value depends on the setting of the value selection strategy for
   *          the bot. You can choose to use the value entered by the user, or you
   *          can have Amazon Lex choose the first value in the
   *             <code>resolvedValues</code> list.</p>
   * @public
   */
  interpretedValue?: string | undefined;
}

/**
 * <p>A custom response string that Amazon Lex sends to your application. You
 *          define the content and structure the string.</p>
 * @public
 */
export interface CustomPayload {
  /**
   * <p>The string that is sent to your application.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>A card that is shown to the user by a messaging platform. You define
 *          the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *          constrained to the text associated with a button on the card.</p>
 * @public
 */
export interface ImageResponseCard {
  /**
   * <p>The title to display on the response card. The format of the title
   *          is determined by the platform displaying the response card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The subtitle to display on the response card. The format of the
   *          subtitle is determined by the platform displaying the response
   *          card.</p>
   * @public
   */
  subtitle?: string | undefined;

  /**
   * <p>The URL of an image to display on the response card. The image URL
   *          must be publicly available so that the platform displaying the response
   *          card has access to the image.</p>
   * @public
   */
  imageUrl?: string | undefined;

  /**
   * <p>A list of buttons that should be displayed on the response card. The
   *          arrangement of the buttons is determined by the platform that displays
   *          the button.</p>
   * @public
   */
  buttons?: Button[] | undefined;
}

/**
 * <p>Defines an ASCII text message to send to the user.</p>
 * @public
 */
export interface PlainTextMessage {
  /**
   * <p>The message to send to the user.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Defines a Speech Synthesis Markup Language (SSML) prompt.</p>
 * @public
 */
export interface SSMLMessage {
  /**
   * <p>The SSML text that defines the prompt.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The object that provides message text and its type.</p>
 * @public
 */
export interface Message {
  /**
   * <p>A message in plain text format.</p>
   * @public
   */
  plainTextMessage?: PlainTextMessage | undefined;

  /**
   * <p>A message in a custom format defined by the client
   *          application.</p>
   * @public
   */
  customPayload?: CustomPayload | undefined;

  /**
   * <p>A message in Speech Synthesis Markup Language (SSML).</p>
   * @public
   */
  ssmlMessage?: SSMLMessage | undefined;

  /**
   * <p>A message that defines a response card that the client application
   *          can show to the user.</p>
   * @public
   */
  imageResponseCard?: ImageResponseCard | undefined;
}

/**
 * <p>Provides one or more messages that Amazon Lex should send to the
 *          user.</p>
 * @public
 */
export interface MessageGroup {
  /**
   * <p>The primary message that Amazon Lex should send to the user.</p>
   * @public
   */
  message: Message | undefined;

  /**
   * <p>Message variations to send to the user. When variations are defined,
   *          Amazon Lex chooses the primary message or one of the variations to send to
   *          the user.</p>
   * @public
   */
  variations?: Message[] | undefined;
}

/**
 * <p>Specifies a list of message groups that Amazon Lex uses to respond the
 *          user input.</p>
 * @public
 */
export interface ResponseSpecification {
  /**
   * <p>A collection of responses that Amazon Lex can send to the user. Amazon Lex
   *          chooses the actual response to send at runtime.</p>
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>Indicates whether the user can interrupt a speech response from
   *          Amazon Lex.</p>
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ConversationEndState = {
  Dropped: "Dropped",
  Failure: "Failure",
  Success: "Success",
} as const;

/**
 * @public
 */
export type ConversationEndState = (typeof ConversationEndState)[keyof typeof ConversationEndState];

/**
 * @public
 * @enum
 */
export const TestResultMatchStatus = {
  ExecutionError: "ExecutionError",
  Matched: "Matched",
  Mismatched: "Mismatched",
} as const;

/**
 * @public
 */
export type TestResultMatchStatus = (typeof TestResultMatchStatus)[keyof typeof TestResultMatchStatus];

/**
 * <p>The item listing the evaluation of intent level success or failure.</p>
 * @public
 */
export interface ConversationLevelIntentClassificationResultItem {
  /**
   * <p>The intent name used in the evaluation of intent level success or failure.</p>
   * @public
   */
  intentName: string | undefined;

  /**
   * <p>The number of times the specific intent is used in the evaluation of intent level
   *       success or failure.</p>
   * @public
   */
  matchResult: TestResultMatchStatus | undefined;
}

/**
 * <p>The conversation level details of the conversation used in the test set.</p>
 * @public
 */
export interface ConversationLevelResultDetail {
  /**
   * <p>The success or failure of the streaming of the conversation.</p>
   * @public
   */
  endToEndResult: TestResultMatchStatus | undefined;

  /**
   * <p>The speech transcription success or failure details of the conversation.</p>
   * @public
   */
  speechTranscriptionResult?: TestResultMatchStatus | undefined;
}

/**
 * <p>The slots used for the slot resolution in the conversation.</p>
 * @public
 */
export interface ConversationLevelSlotResolutionResultItem {
  /**
   * <p>The intents used in the slots list for the slot resolution details.</p>
   * @public
   */
  intentName: string | undefined;

  /**
   * <p>The slot name in the slots list for the slot resolution details.</p>
   * @public
   */
  slotName: string | undefined;

  /**
   * <p>The number of matching slots used in the slots listings for the slot resolution evaluation.</p>
   * @public
   */
  matchResult: TestResultMatchStatus | undefined;
}

/**
 * <p>The test result evaluation item at the conversation level.</p>
 * @public
 */
export interface ConversationLevelTestResultItem {
  /**
   * <p>The conversation Id of the test result evaluation item.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The end-to-end success or failure of the test result evaluation item.</p>
   * @public
   */
  endToEndResult: TestResultMatchStatus | undefined;

  /**
   * <p>The speech transcription success or failure of the test result evaluation item.</p>
   * @public
   */
  speechTranscriptionResult?: TestResultMatchStatus | undefined;

  /**
   * <p>The intent classification of the test result evaluation item.</p>
   * @public
   */
  intentClassificationResults: ConversationLevelIntentClassificationResultItem[] | undefined;

  /**
   * <p>The slot success or failure of the test result evaluation item.</p>
   * @public
   */
  slotResolutionResults: ConversationLevelSlotResolutionResultItem[] | undefined;
}

/**
 * <p>The test set results data at the conversation level.</p>
 * @public
 */
export interface ConversationLevelTestResults {
  /**
   * <p>The item list in the test set results data at the conversation level.</p>
   * @public
   */
  items: ConversationLevelTestResultItem[] | undefined;
}

/**
 * <p>The selection to filter the test set results data at the conversation level.</p>
 * @public
 */
export interface ConversationLevelTestResultsFilterBy {
  /**
   * <p>The selection of matched or mismatched end-to-end status to filter test set results data
   *       at the conversation level.</p>
   * @public
   */
  endToEndResult?: TestResultMatchStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const ConversationLogsInputModeFilter = {
  Speech: "Speech",
  Text: "Text",
} as const;

/**
 * @public
 */
export type ConversationLogsInputModeFilter =
  (typeof ConversationLogsInputModeFilter)[keyof typeof ConversationLogsInputModeFilter];

/**
 * <p>The selected data source to filter the conversation log.</p>
 * @public
 */
export interface ConversationLogsDataSourceFilterBy {
  /**
   * <p>The start time for the conversation log.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time for the conversation log.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The selection to filter by input mode for the conversation logs. </p>
   * @public
   */
  inputMode: ConversationLogsInputModeFilter | undefined;
}

/**
 * <p>The data source that uses conversation logs.</p>
 * @public
 */
export interface ConversationLogsDataSource {
  /**
   * <p>The bot Id from the conversation logs.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The bot alias Id from the conversation logs.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The locale Id of the conversation log.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The filter for the data source of the conversation log.</p>
   * @public
   */
  filter: ConversationLogsDataSourceFilterBy | undefined;
}

/**
 * <p>Defines the Amazon CloudWatch Logs destination log group for
 *          conversation text logs.</p>
 * @public
 */
export interface TextLogDestination {
  /**
   * <p>Defines the Amazon CloudWatch Logs log group where text and metadata logs are
   *          delivered.</p>
   * @public
   */
  cloudWatch: CloudWatchLogGroupLogDestination | undefined;
}

/**
 * <p>Defines settings to enable text conversation logs.</p>
 * @public
 */
export interface TextLogSetting {
  /**
   * <p>Determines whether conversation logs should be stored for an
   *          alias.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Defines the Amazon CloudWatch Logs destination log group for
   *          conversation text logs.</p>
   * @public
   */
  destination: TextLogDestination | undefined;

  /**
   * <p>The option to enable selective conversation log capture for text.</p>
   * @public
   */
  selectiveLoggingEnabled?: boolean | undefined;
}

/**
 * <p>Configures conversation logging that saves audio, text, and metadata
 *          for the conversations with your users.</p>
 * @public
 */
export interface ConversationLogSettings {
  /**
   * <p>The Amazon CloudWatch Logs settings for logging text and metadata.</p>
   * @public
   */
  textLogSettings?: TextLogSetting[] | undefined;

  /**
   * <p>The Amazon S3 settings for logging audio to an S3 bucket.</p>
   * @public
   */
  audioLogSettings?: AudioLogSetting[] | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * <p>The name of the bot. The bot name must be unique in the account that
   *          creates the bot.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>A description of the bot. It appears in lists to help you identify a
   *          particular bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Provides information on additional privacy protections Amazon Lex should
   *          use with the bot's data.</p>
   * @public
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot. </p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   * @public
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * <p>A list of tags to add to the bot. You can only add tags when you
   *          create a bot. You can't use the <code>UpdateBot</code> operation to
   *          update tags. To update tags, use the <code>TagResource</code>
   *          operation.</p>
   * @public
   */
  botTags?: Record<string, string> | undefined;

  /**
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you create a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   * @public
   */
  testBotAliasTags?: Record<string, string> | undefined;

  /**
   * <p>The type of a bot to create.</p>
   * @public
   */
  botType?: BotType | undefined;

  /**
   * <p>The list of bot members in a network to be created.</p>
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * <p>Specifies the configuration for error logging during bot creation.</p>
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * <p>A unique identifier for a particular bot. You use this to identify
   *          the bot when you call other Amazon Lex API operations.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The name specified for the bot.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The description specified for the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The IAM role specified for the bot.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The data privacy settings specified for the bot.</p>
   * @public
   */
  dataPrivacy?: DataPrivacy | undefined;

  /**
   * <p>The session idle time specified for the bot.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>Shows the current status of the bot. The bot is first in the
   *             <code>Creating</code> status. Once the bot is read for use, it
   *          changes to the <code>Available</code> status. After the bot is created,
   *          you can use the <code>DRAFT</code> version of the bot.</p>
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * <p>A timestamp indicating the date and time that the bot was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>A list of tags associated with the bot.</p>
   * @public
   */
  botTags?: Record<string, string> | undefined;

  /**
   * <p>A list of tags associated with the test alias for the bot.</p>
   * @public
   */
  testBotAliasTags?: Record<string, string> | undefined;

  /**
   * <p>The type of a bot that was created.</p>
   * @public
   */
  botType?: BotType | undefined;

  /**
   * <p>The list of bots in a network that was created.</p>
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * <p>Specifies configuration settings for delivering error logs to Cloudwatch Logs in an Amazon Lex bot response.</p>
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}

/**
 * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
 *          user utterances.</p>
 * @public
 */
export interface SentimentAnalysisSettings {
  /**
   * <p>Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user
   *          utterances.</p>
   * @public
   */
  detectSentiment: boolean | undefined;
}

/**
 * @public
 */
export interface CreateBotAliasRequest {
  /**
   * <p>The alias to create. The name must be unique for the bot.</p>
   * @public
   */
  botAliasName: string | undefined;

  /**
   * <p>A description of the alias. Use this description to help identify
   *          the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the bot that this alias points to. You can use the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the
   *          bot version associated with the alias.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>Maps configuration information to a specific locale. You can use
   *          this parameter to specify a specific Lambda function to run different
   *          functions in different locales.</p>
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * <p>Specifies whether Amazon Lex logs text and audio for a conversation with
   *          the bot. When you enable conversation logs, text logs store text input,
   *          transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio
   *          logs store audio input in Amazon S3.</p>
   * @public
   */
  conversationLogSettings?: ConversationLogSettings | undefined;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   * @public
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined;

  /**
   * <p>The unique identifier of the bot that the alias applies to.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>A list of tags to add to the bot alias. You can only add tags when
   *          you create an alias, you can't use the <code>UpdateBotAlias</code>
   *          operation to update the tags on a bot alias. To update tags, use the
   *             <code>TagResource</code> operation.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBotAliasResponse {
  /**
   * <p>The unique identifier of the bot alias.</p>
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * <p>The name specified for the bot alias.</p>
   * @public
   */
  botAliasName?: string | undefined;

  /**
   * <p>The description specified for the bot alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the bot associated with this alias.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>Configuration information for a specific locale.</p>
   * @public
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings> | undefined;

  /**
   * <p>The conversation log settings specified for the alias.</p>
   * @public
   */
  conversationLogSettings?: ConversationLogSettings | undefined;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   * @public
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings | undefined;

  /**
   * <p>The current status of the alias. The alias is first put into the
   *             <code>Creating</code> state. When the alias is ready to be used, it
   *          is put into the <code>Available</code> state. You can use the
   *             <code>DescribeBotAlias</code> operation to get the current state of
   *          an alias.</p>
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;

  /**
   * <p>The unique identifier of the bot that this alias applies to.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>A Unix timestamp indicating the date and time that the bot alias was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>A list of tags associated with the bot alias.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Specifies whether the assisted nlu feature is turned on or off.</p>
 * @public
 */
export interface NluImprovementSpecification {
  /**
   * <p>Specifies whether the assisted nlu feature is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>Contains specifications for the assisted slot resolution feature.</p>
 * @public
 */
export interface SlotResolutionImprovementSpecification {
  /**
   * <p>Specifies whether assisted slot resolution is turned on or off.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>An object containing information about the Amazon Bedrock model used to assist slot resolution.</p>
   * @public
   */
  bedrockModelSpecification?: BedrockModelSpecification | undefined;
}

/**
 * <p>Contains specifications about the Amazon Lex runtime generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
 * @public
 */
export interface RuntimeSettings {
  /**
   * <p>An object containing specifications for the assisted slot resolution feature.</p>
   * @public
   */
  slotResolutionImprovement?: SlotResolutionImprovementSpecification | undefined;

  /**
   * <p>An object containing specifications for the assisted nlu feature.</p>
   * @public
   */
  nluImprovement?: NluImprovementSpecification | undefined;
}

/**
 * <p>Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
 * @public
 */
export interface GenerativeAISettings {
  /**
   * <p>Contains specifications about the Amazon Lex runtime generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
   * @public
   */
  runtimeSettings?: RuntimeSettings | undefined;

  /**
   * <p>Contains specifications about the Amazon Lex build time generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
   * @public
   */
  buildtimeSettings?: BuildtimeSettings | undefined;
}

/**
 * @public
 */
export interface CreateBotLocaleRequest {
  /**
   * <p>The identifier of the bot to create the locale for.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to create the locale for. This can only be
   *          the draft version of the bot.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>A description of the bot locale. Use this to help identify the bot
   *          locale in lists.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Determines the threshold where Amazon Lex will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents. <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> are only inserted if they are
   *          configured for the bot.</p>
   *          <p>For example, suppose a bot is configured with the confidence
   *          threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex
   *          returns three alternative intents with the following confidence scores:
   *          IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the
   *             <code>RecognizeText</code> operation would be:</p>
   *          <ul>
   *             <li>
   *                <p>AMAZON.FallbackIntent</p>
   *             </li>
   *             <li>
   *                <p>IntentA</p>
   *             </li>
   *             <li>
   *                <p>IntentB</p>
   *             </li>
   *             <li>
   *                <p>IntentC</p>
   *             </li>
   *          </ul>
   * @public
   */
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the
   *          user.</p>
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * <p>Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;
}

/**
 * @public
 */
export interface CreateBotLocaleResponse {
  /**
   * <p>The specified bot identifier.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The specified bot version.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The specified locale name.</p>
   * @public
   */
  localeName?: string | undefined;

  /**
   * <p>The specified locale identifier.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The specified description of the bot locale.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The specified confidence threshold for inserting the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents.</p>
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the
   *          user.</p>
   * @public
   */
  voiceSettings?: VoiceSettings | undefined;

  /**
   * <p>The status of the bot.</p>
   *          <p>When the status is <code>Creating</code> the bot locale is being
   *          configured. When the status is <code>Building</code> Amazon Lex is building
   *          the bot for testing and use.</p>
   *          <p>If the status of the bot is <code>ReadyExpressTesting</code>, you
   *          can test the bot using the exact utterances specified in the bots'
   *          intents. When the bot is ready for full testing or to run, the status
   *          is <code>Built</code>.</p>
   *          <p>If there was a problem with building the bot, the status is
   *             <code>Failed</code>. If the bot was saved but not built, the status
   *          is <code>NotBuilt</code>.</p>
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;

  /**
   * <p>A timestamp specifying the date and time that the bot locale was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.</p>
   * @public
   */
  generativeAISettings?: GenerativeAISettings | undefined;
}

/**
 * @public
 */
export interface CreateBotReplicaRequest {
  /**
   * <p>The request for the unique bot ID of the source bot to be replicated in the secondary region.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The request for the secondary region that will be used in the replication of the source bot.</p>
   * @public
   */
  replicaRegion: string | undefined;
}

/**
 * @public
 */
export interface CreateBotReplicaResponse {
  /**
   * <p>The unique bot ID of the replicated bot generated.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The region of the replicated bot generated.</p>
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * <p>The source region for the source bot used for the replicated bot generated.</p>
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * <p>The creation date and time of the replicated bot generated.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The operational status of the replicated bot generated.</p>
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;
}

/**
 * @public
 */
export interface CreateBotVersionRequest {
  /**
   * <p>The identifier of the bot to create the version for.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>A description of the version. Use the description to help identify
   *          the version in lists.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies the locales that Amazon Lex adds to this version. You can
   *          choose the <code>Draft</code> version or any other previously published
   *          version for each locale. When you specify a source version, the locale
   *          data is copied from the source version to the new version.</p>
   * @public
   */
  botVersionLocaleSpecification: Record<string, BotVersionLocaleDetails> | undefined;
}

/**
 * @public
 */
export interface CreateBotVersionResponse {
  /**
   * <p>The bot identifier specified in the request.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The description of the version specified in the request.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version number assigned to the version.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The source versions used for each locale in the new version.</p>
   * @public
   */
  botVersionLocaleSpecification?: Record<string, BotVersionLocaleDetails> | undefined;

  /**
   * <p>When you send a request to create or update a bot, Amazon Lex sets the
   *          status response element to <code>Creating</code>. After Amazon Lex builds
   *          the bot, it sets status to <code>Available</code>. If Amazon Lex can't build
   *          the bot, it sets status to <code>Failed</code>.</p>
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * <p>A timestamp of the date and time that the version was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportExportFileFormat = {
  CSV: "CSV",
  LexJson: "LexJson",
  TSV: "TSV",
} as const;

/**
 * @public
 */
export type ImportExportFileFormat = (typeof ImportExportFileFormat)[keyof typeof ImportExportFileFormat];

/**
 * <p>Provides the parameters required for exporting a custom vocabulary.</p>
 * @public
 */
export interface CustomVocabularyExportSpecification {
  /**
   * <p>The identifier of the bot that contains the custom vocabulary to export.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the custom vocabulary to export.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The locale of the bot that contains the custom vocabulary to export.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * <p>Contains information about the test set that is exported.</p>
 * @public
 */
export interface TestSetExportSpecification {
  /**
   * <p>The unique identifier of the test set.</p>
   * @public
   */
  testSetId: string | undefined;
}

/**
 * <p>Provides information about the bot or bot locale that you want to
 *          export. You can specify the <code>botExportSpecification</code> or the
 *             <code>botLocaleExportSpecification</code>, but not both.</p>
 * @public
 */
export interface ExportResourceSpecification {
  /**
   * <p>Parameters for exporting a bot.</p>
   * @public
   */
  botExportSpecification?: BotExportSpecification | undefined;

  /**
   * <p>Parameters for exporting a bot locale.</p>
   * @public
   */
  botLocaleExportSpecification?: BotLocaleExportSpecification | undefined;

  /**
   * <p>The parameters required to export a custom vocabulary.</p>
   * @public
   */
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification | undefined;

  /**
   * <p>Specifications for the test set that is exported as a resource.</p>
   * @public
   */
  testSetExportSpecification?: TestSetExportSpecification | undefined;
}

/**
 * @public
 */
export interface CreateExportRequest {
  /**
   * <p>Specifies the type of resource to export, either a bot or a bot
   *          locale. You can only specify one type of resource to export.</p>
   * @public
   */
  resourceSpecification: ExportResourceSpecification | undefined;

  /**
   * <p>The file format of the bot or bot locale definition files.</p>
   * @public
   */
  fileFormat: ImportExportFileFormat | undefined;

  /**
   * <p>An password to use to encrypt the exported archive. Using a password
   *          is optional, but you should encrypt the archive to protect the data in
   *          transit between Amazon Lex and your local computer.</p>
   * @public
   */
  filePassword?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  Completed: "Completed",
  Deleting: "Deleting",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;

/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 */
export interface CreateExportResponse {
  /**
   * <p>An identifier for a specific request to create an export.</p>
   * @public
   */
  exportId?: string | undefined;

  /**
   * <p>A description of the type of resource that was exported, either a
   *          bot or a bot locale.</p>
   * @public
   */
  resourceSpecification?: ExportResourceSpecification | undefined;

  /**
   * <p>The file format used for the bot or bot locale definition
   *          files.</p>
   * @public
   */
  fileFormat?: ImportExportFileFormat | undefined;

  /**
   * <p>The status of the export. When the status is <code>Completed</code>,
   *          you can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation to get the
   *          pre-signed S3 URL link to your exported bot or bot locale.</p>
   * @public
   */
  exportStatus?: ExportStatus | undefined;

  /**
   * <p>The date and time that the request to export a bot was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;
}

/**
 * <p>Settings that determine the Lambda function that Amazon Lex uses for
 *          processing user responses.</p>
 * @public
 */
export interface DialogCodeHookSettings {
  /**
   * <p>Enables the dialog code hook so that it processes user
   *          requests.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>Provides settings for a message that is sent to the user when a
 *          fulfillment Lambda function starts running.</p>
 * @public
 */
export interface FulfillmentStartResponseSpecification {
  /**
   * <p>The delay between when the Lambda fulfillment function starts running
   *          and the start message is played. If the Lambda function returns before
   *          the delay is over, the start message isn't played.</p>
   * @public
   */
  delayInSeconds: number | undefined;

  /**
   * <p>1 - 5 message groups that contain start messages. Amazon Lex chooses
   *          one of the messages to play to the user.</p>
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>Determines whether the user can interrupt the start message while it
   *          is playing.</p>
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * <p>Provides settings for a message that is sent periodically to the
 *          user while a fulfillment Lambda function is running.</p>
 * @public
 */
export interface FulfillmentUpdateResponseSpecification {
  /**
   * <p>The frequency that a message is sent to the user. When the period
   *          ends, Amazon Lex chooses a message from the message groups and plays it to
   *          the user. If the fulfillment Lambda returns before the first period
   *          ends, an update message is not played to the user.</p>
   * @public
   */
  frequencyInSeconds: number | undefined;

  /**
   * <p>1 - 5 message groups that contain update messages. Amazon Lex chooses
   *          one of the messages to play to the user.</p>
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>Determines whether the user can interrupt an update message while it
   *          is playing.</p>
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * <p>Provides information for updating the user on the progress of
 *          fulfilling an intent.</p>
 * @public
 */
export interface FulfillmentUpdatesSpecification {
  /**
   * <p>Determines whether fulfillment updates are sent to the user. When
   *          this field is true, updates are sent.</p>
   *          <p>If the <code>active</code> field is set to true, the
   *             <code>startResponse</code>, <code>updateResponse</code>, and
   *             <code>timeoutInSeconds</code> fields are required.</p>
   * @public
   */
  active: boolean | undefined;

  /**
   * <p>Provides configuration information for the message sent to users
   *          when the fulfillment Lambda functions starts running.</p>
   * @public
   */
  startResponse?: FulfillmentStartResponseSpecification | undefined;

  /**
   * <p>Provides configuration information for messages sent periodically to
   *          the user while the fulfillment Lambda function is running.</p>
   * @public
   */
  updateResponse?: FulfillmentUpdateResponseSpecification | undefined;

  /**
   * <p>The length of time that the fulfillment Lambda function should run
   *          before it times out.</p>
   * @public
   */
  timeoutInSeconds?: number | undefined;
}

/**
 * <p>A context that must be active for an intent to be
 *          selected by Amazon Lex.</p>
 * @public
 */
export interface InputContext {
  /**
   * <p>The name of the context.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.</p>
 * @public
 */
export interface ElicitationCodeHookInvocationSetting {
  /**
   * <p>Indicates whether a Lambda function should be invoked
   *          for the dialog.</p>
   * @public
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * <p>A label that indicates the dialog step from which the dialog code
   *          hook is happening.</p>
   * @public
   */
  invocationLabel?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageSelectionStrategy = {
  Ordered: "Ordered",
  Random: "Random",
} as const;

/**
 * @public
 */
export type MessageSelectionStrategy = (typeof MessageSelectionStrategy)[keyof typeof MessageSelectionStrategy];

/**
 * @public
 * @enum
 */
export const PromptAttempt = {
  Initial: "Initial",
  Retry1: "Retry1",
  Retry2: "Retry2",
  Retry3: "Retry3",
  Retry4: "Retry4",
  Retry5: "Retry5",
} as const;

/**
 * @public
 */
export type PromptAttempt = (typeof PromptAttempt)[keyof typeof PromptAttempt];

/**
 * <p>Specifies the text input specifications.</p>
 * @public
 */
export interface TextInputSpecification {
  /**
   * <p>Time for which a bot waits before re-prompting a customer for text input.</p>
   * @public
   */
  startTimeoutMs: number | undefined;
}

/**
 * <p>Specifies the settings on a prompt attempt.</p>
 * @public
 */
export interface PromptAttemptSpecification {
  /**
   * <p>Indicates whether the user can interrupt a speech prompt attempt from the bot.</p>
   * @public
   */
  allowInterrupt?: boolean | undefined;

  /**
   * <p>Indicates the allowed input types of the prompt attempt.</p>
   * @public
   */
  allowedInputTypes: AllowedInputTypes | undefined;

  /**
   * <p>Specifies the settings on audio and DTMF input.</p>
   * @public
   */
  audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification | undefined;

  /**
   * <p>Specifies the settings on text input.</p>
   * @public
   */
  textInputSpecification?: TextInputSpecification | undefined;
}

/**
 * <p>Specifies a list of message groups that Amazon Lex sends to a user to
 *          elicit a response.</p>
 * @public
 */
export interface PromptSpecification {
  /**
   * <p>A collection of messages that Amazon Lex can send to the user. Amazon Lex
   *          chooses the actual message to send at runtime.</p>
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>The maximum number of times the bot tries to elicit a response from
   *          the user using this prompt.</p>
   * @public
   */
  maxRetries: number | undefined;

  /**
   * <p>Indicates whether the user can interrupt a speech prompt from the
   *          bot.</p>
   * @public
   */
  allowInterrupt?: boolean | undefined;

  /**
   * <p>Indicates how a message is selected from a message group among retries.</p>
   * @public
   */
  messageSelectionStrategy?: MessageSelectionStrategy | undefined;

  /**
   * <p>Specifies the advanced settings on each attempt of the prompt.</p>
   * @public
   */
  promptAttemptsSpecification?: Partial<Record<PromptAttempt, PromptAttemptSpecification>> | undefined;
}

/**
 * <p>Provides configuration information for the <code>AMAZON.KendraSearchIntent</code>
 *          intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra
 *          index and returns documents from the index that match the user's
 *          utterance.</p>
 * @public
 */
export interface KendraConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the
   *          <code>AMAZON.KendraSearchIntent</code> intent to search. The index must be in the
   *          same account and Region as the Amazon Lex bot.</p>
   * @public
   */
  kendraIndex: string | undefined;

  /**
   * <p>Determines whether the <code>AMAZON.KendraSearchIntent</code> intent uses a
   *          custom query string to query the Amazon Kendra index.</p>
   * @public
   */
  queryFilterStringEnabled?: boolean | undefined;

  /**
   * <p>A query filter that Amazon Lex sends to Amazon Kendra to filter the response from
   *          a query. The filter is in the format defined by Amazon Kendra. For more
   *          information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering
   *          queries</a>.</p>
   * @public
   */
  queryFilterString?: string | undefined;
}

/**
 * <p>Describes a session context that is activated when an intent is
 *          fulfilled.</p>
 * @public
 */
export interface OutputContext {
  /**
   * <p>The name of the output context.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The amount of time, in seconds, that the output context should
   *          remain active. The time is figured from the first time the context is
   *          sent to the user.</p>
   * @public
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * <p>The number of conversation turns that the output context should
   *          remain active. The number of turns is counted from the first time that
   *          the context is sent to the user.</p>
   * @public
   */
  turnsToLive: number | undefined;
}

/**
 * <p>The configuration details of the Qinconnect assistant.</p>
 * @public
 */
export interface QInConnectAssistantConfiguration {
  /**
   * <p>The assistant Arn details of the Qinconnect assistant configuration.</p>
   * @public
   */
  assistantArn: string | undefined;
}

/**
 * <p>The configuration details of the Qinconnect intent.</p>
 * @public
 */
export interface QInConnectIntentConfiguration {
  /**
   * <p>The Qinconnect assistant configuration details of the Qinconnect intent.</p>
   * @public
   */
  qInConnectAssistantConfiguration?: QInConnectAssistantConfiguration | undefined;
}

/**
 * <p>Contains details about the configuration of the Amazon Kendra index used for the <code>AMAZON.QnAIntent</code>.</p>
 * @public
 */
export interface QnAKendraConfiguration {
  /**
   * <p>The ARN of the Amazon Kendra index to use.</p>
   * @public
   */
  kendraIndex: string | undefined;

  /**
   * <p>Specifies whether to enable an Amazon Kendra filter string or not.</p>
   * @public
   */
  queryFilterStringEnabled?: boolean | undefined;

  /**
   * <p>Contains the Amazon Kendra filter string to use if enabled. For more information on the Amazon Kendra search filter JSON format, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html#search-filtering">Using document attributes to filter search results</a>.</p>
   * @public
   */
  queryFilterString?: string | undefined;

  /**
   * <p>Specifies whether to return an exact response from the Amazon Kendra index or to let the Amazon Bedrock model you select generate a response based on the results. To use this feature, you must first add FAQ questions to your index by following the steps at <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html">Adding frequently asked questions (FAQs) to an index</a>.</p>
   * @public
   */
  exactResponse?: boolean | undefined;
}

/**
 * <p>Contains the names of the fields used for an exact response to the user.</p>
 * @public
 */
export interface ExactResponseFields {
  /**
   * <p>The name of the field that contains the query made to the OpenSearch Service database.</p>
   * @public
   */
  questionField: string | undefined;

  /**
   * <p>The name of the field that contains the answer to the query made to the OpenSearch Service database.</p>
   * @public
   */
  answerField: string | undefined;
}

/**
 * <p>Contains details about the configuration of the Amazon OpenSearch Service database used for the <code>AMAZON.QnAIntent</code>.</p>
 * @public
 */
export interface OpensearchConfiguration {
  /**
   * <p>The endpoint of the Amazon OpenSearch Service domain.</p>
   * @public
   */
  domainEndpoint: string | undefined;

  /**
   * <p>The name of the Amazon OpenSearch Service index.</p>
   * @public
   */
  indexName: string | undefined;

  /**
   * <p>Specifies whether to return an exact response or to return an answer generated by the model using the fields you specify from the database.</p>
   * @public
   */
  exactResponse?: boolean | undefined;

  /**
   * <p>Contains the names of the fields used for an exact response to the user.</p>
   * @public
   */
  exactResponseFields?: ExactResponseFields | undefined;

  /**
   * <p>Contains a list of fields from the Amazon OpenSearch Service that the model can use to generate the answer to the query.</p>
   * @public
   */
  includeFields?: string[] | undefined;
}

/**
 * <p>Contains details about the configuration of the knowledge store used for the <code>AMAZON.QnAIntent</code>. You must have already created the knowledge store and indexed the documents within it.</p>
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * <p>Contains details about the configuration of the Amazon OpenSearch Service database used for the <code>AMAZON.QnAIntent</code>. To create a domain, follow the steps at <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>.</p>
   * @public
   */
  opensearchConfiguration?: OpensearchConfiguration | undefined;

  /**
   * <p>Contains details about the configuration of the Amazon Kendra index used for the <code>AMAZON.QnAIntent</code>. To create a Amazon Kendra index, follow the steps at <a href="https://docs.aws.amazon.com/kendra/latest/dg/create-index.html">Creating an index</a>.</p>
   * @public
   */
  kendraConfiguration?: QnAKendraConfiguration | undefined;

  /**
   * <p>Contains details about the configuration of the Amazon Bedrock knowledge base used for the <code>AMAZON.QnAIntent</code>. To set up a knowledge base, follow the steps at <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html">Building a knowledge base</a>.</p>
   * @public
   */
  bedrockKnowledgeStoreConfiguration?: BedrockKnowledgeStoreConfiguration | undefined;
}

/**
 * <p>Details about the the configuration of the built-in <code>Amazon.QnAIntent</code>.</p>
 * @public
 */
export interface QnAIntentConfiguration {
  /**
   * <p>Contains details about the configuration of the data source used for the <code>AMAZON.QnAIntent</code>.</p>
   * @public
   */
  dataSourceConfiguration?: DataSourceConfiguration | undefined;

  /**
   * <p>Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.</p>
   * @public
   */
  bedrockModelConfiguration?: BedrockModelSpecification | undefined;
}

/**
 * <p>A sample utterance that invokes an intent or respond to a slot
 *          elicitation prompt.</p>
 * @public
 */
export interface SampleUtterance {
  /**
   * <p>The sample utterance that Amazon Lex uses to build its machine-learning
   *          model to recognize intents.</p>
   * @public
   */
  utterance: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A resource policy to add to the resource. The policy is a JSON
   *          structure that contains one or more statements that define the policy.
   *          The policy must follow the IAM syntax. For more information about the
   *          contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy
   *             reference </a>. </p>
   *          <p>If the policy isn't valid, Amazon Lex returns a validation
   *          exception.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy was attached to.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Effect = {
  Allow: "Allow",
  Deny: "Deny",
} as const;

/**
 * @public
 */
export type Effect = (typeof Effect)[keyof typeof Effect];

/**
 * <p>The IAM principal that you allowing or denying access to an Amazon Lex
 *          action. You must provide a <code>service</code> or an <code>arn</code>,
 *          but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>.</p>
 * @public
 */
export interface Principal {
  /**
   * <p>The name of the Amazon Web Services service that should allowed or denied access to
   *          an Amazon Lex action.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyStatementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the statement. The ID is the same as the
   *             <code>Sid</code> IAM property. The statement name must be unique
   *          within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM
   *             JSON policy elements: Sid</a>. </p>
   * @public
   */
  statementId: string | undefined;

  /**
   * <p>Determines whether the statement allows or denies access to the
   *          resource.</p>
   * @public
   */
  effect: Effect | undefined;

  /**
   * <p>An IAM principal, such as an IAM user, IAM role,
   *          or Amazon Web Services services
   *          that is allowed or denied access to a resource. For more information,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">Amazon Web Services JSON policy elements: Principal</a>.</p>
   * @public
   */
  principal: Principal[] | undefined;

  /**
   * <p>The Amazon Lex action that this policy either allows or denies. The
   *          action must apply to the resource type of the specified ARN. For more
   *          information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html">
   *             Actions, resources, and condition keys for Amazon Lex V2</a>.</p>
   * @public
   */
  action: string[] | undefined;

  /**
   * <p>Specifies a condition when the policy is in effect. If the principal
   *          of the policy is a service principal, you must provide two condition
   *          blocks, one with a SourceAccount global condition key and one with a
   *          SourceArn global condition key.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p>
   * @public
   */
  condition?: Record<string, Record<string, string>> | undefined;

  /**
   * <p>The identifier of the revision of the policy to edit. If this
   *          revision ID doesn't match the current revision ID, Amazon Lex throws an
   *          exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex overwrites the contents of
   *          the policy with the new values.</p>
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourcePolicyStatementResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * <p>Indicates whether a slot can return multiple values.</p>
 * @public
 */
export interface MultipleValuesSetting {
  /**
   * <p>Indicates whether a slot can return multiple values. When
   *             <code>true</code>, the slot may return more than one value in a
   *          response. When <code>false</code>, the slot returns only a single
   *          value.</p>
   *          <p>Multi-value slots are only available in the en-US locale. If you set
   *          this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>.</p>
   *          <p>If the <code>allowMutlipleValues</code> is not set, the default
   *          value is <code>false</code>.</p>
   * @public
   */
  allowMultipleValues?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ObfuscationSettingType = {
  DefaultObfuscation: "DefaultObfuscation",
  None: "None",
} as const;

/**
 * @public
 */
export type ObfuscationSettingType = (typeof ObfuscationSettingType)[keyof typeof ObfuscationSettingType];

/**
 * <p>Determines whether Amazon Lex obscures slot values in conversation logs.
 *       </p>
 * @public
 */
export interface ObfuscationSetting {
  /**
   * <p>Value that determines whether Amazon Lex obscures slot values in
   *          conversation logs. The default is to obscure the values.</p>
   * @public
   */
  obfuscationSettingType: ObfuscationSettingType | undefined;
}

/**
 * <p>Specifies the default value to use when a user doesn't provide a
 *          value for a slot.</p>
 * @public
 */
export interface SlotDefaultValue {
  /**
   * <p>The default value to use when a user doesn't provide a value for a
   *          slot.</p>
   * @public
   */
  defaultValue: string | undefined;
}

/**
 * <p>Defines a list of values that Amazon Lex should use as the default value
 *          for a slot.</p>
 * @public
 */
export interface SlotDefaultValueSpecification {
  /**
   * <p>A list of default values. Amazon Lex chooses the default value to use in
   *          the order that they are presented in the list.</p>
   * @public
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

/**
 * <p>Defines the messages that Amazon Lex sends to a user to remind them that
 *          the bot is waiting for a response.</p>
 * @public
 */
export interface StillWaitingResponseSpecification {
  /**
   * <p>One or more message groups, each containing one or more messages,
   *          that define the prompts that Amazon Lex sends to the user.</p>
   * @public
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>How often a message should be sent to the user. Minimum of 1 second,
   *          maximum of 5 minutes.</p>
   * @public
   */
  frequencyInSeconds: number | undefined;

  /**
   * <p>If Amazon Lex waits longer than this length of time for a response, it
   *          will stop sending messages.</p>
   * @public
   */
  timeoutInSeconds: number | undefined;

  /**
   * <p>Indicates that the user can interrupt the response by speaking while
   *          the message is being played.</p>
   * @public
   */
  allowInterrupt?: boolean | undefined;
}

/**
 * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
 *          customer input. </p>
 * @public
 */
export interface WaitAndContinueSpecification {
  /**
   * <p>The response that Amazon Lex sends to indicate that the bot is waiting
   *          for the conversation to continue.</p>
   * @public
   */
  waitingResponse: ResponseSpecification | undefined;

  /**
   * <p>The response that Amazon Lex sends to indicate that the bot is ready to
   *          continue the conversation.</p>
   * @public
   */
  continueResponse: ResponseSpecification | undefined;

  /**
   * <p>A response that Amazon Lex sends periodically to the user to indicate
   *          that the bot is still waiting for input from the user.</p>
   * @public
   */
  stillWaitingResponse?: StillWaitingResponseSpecification | undefined;

  /**
   * <p>Specifies whether the bot will wait for a user to respond. When this
   *          field is false, wait and continue responses for a slot aren't used. If
   *          the <code>active</code> field isn't specified, the default is
   *          true.</p>
   * @public
   */
  active?: boolean | undefined;
}

/**
 * <p>Subslot elicitation settings.</p>
 *          <p>
 *             <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when
 *         Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables,
 *         session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p>
 *          <p>
 *             <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user.
 *         This is similar to <code>PromptSpecification</code> for slots.</p>
 * @public
 */
export interface SubSlotValueElicitationSetting {
  /**
   * <p>Defines a list of values that Amazon Lex should use as the default value
   *          for a slot.</p>
   * @public
   */
  defaultValueSpecification?: SlotDefaultValueSpecification | undefined;

  /**
   * <p>Specifies a list of message groups that Amazon Lex sends to a user to
   *          elicit a response.</p>
   * @public
   */
  promptSpecification: PromptSpecification | undefined;

  /**
   * <p>If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value,
   *       you can provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable
   *       of understanding user utterances. This is similar to <code>SampleUtterances</code> for slots.</p>
   * @public
   */
  sampleUtterances?: SampleUtterance[] | undefined;

  /**
   * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
   *          customer input. </p>
   * @public
   */
  waitAndContinueSpecification?: WaitAndContinueSpecification | undefined;
}

/**
 * <p>Subslot specifications.</p>
 * @public
 */
export interface Specifications {
  /**
   * <p>The unique identifier assigned to the slot type.</p>
   * @public
   */
  slotTypeId: string | undefined;

  /**
   * <p>Specifies the elicitation setting details for constituent sub slots of a composite slot.</p>
   * @public
   */
  valueElicitationSetting: SubSlotValueElicitationSetting | undefined;
}

/**
 * <p>Specifications for the constituent sub slots and the
 *         expression for the composite slot.</p>
 * @public
 */
export interface SubSlotSetting {
  /**
   * <p>The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.</p>
   * @public
   */
  expression?: string | undefined;

  /**
   * <p>Specifications for the constituent sub slots of a composite slot.</p>
   * @public
   */
  slotSpecifications?: Record<string, Specifications> | undefined;
}

/**
 * @public
 * @enum
 */
export const SlotConstraint = {
  Optional: "Optional",
  Required: "Required",
} as const;

/**
 * @public
 */
export type SlotConstraint = (typeof SlotConstraint)[keyof typeof SlotConstraint];

/**
 * @public
 * @enum
 */
export const SlotResolutionStrategy = {
  Default: "Default",
  EnhancedFallback: "EnhancedFallback",
} as const;

/**
 * @public
 */
export type SlotResolutionStrategy = (typeof SlotResolutionStrategy)[keyof typeof SlotResolutionStrategy];

/**
 * <p>Contains information about whether assisted slot resolution is turned on for the slot or not.</p>
 * @public
 */
export interface SlotResolutionSetting {
  /**
   * <p>Specifies whether assisted slot resolution is turned on for the slot or not. If the value is <code>EnhancedFallback</code>, assisted slot resolution is activated when Amazon Lex defaults to the <code>AMAZON.FallbackIntent</code>. If the value is <code>Default</code>, assisted slot resolution is turned off.</p>
   * @public
   */
  slotResolutionStrategy: SlotResolutionStrategy | undefined;
}

/**
 * <p>Describes the Amazon S3 bucket name and location for the grammar
 *             that is the source for the slot type.</p>
 * @public
 */
export interface GrammarSlotTypeSource {
  /**
   * <p>The name of the Amazon S3 bucket that contains the grammar source.</p>
   * @public
   */
  s3BucketName: string | undefined;

  /**
   * <p>The path to the grammar in the Amazon S3 bucket.</p>
   * @public
   */
  s3ObjectKey: string | undefined;

  /**
   * <p>The KMS key required to decrypt the contents of the grammar, if any.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Settings requried for a slot type based on a grammar that you provide.</p>
 * @public
 */
export interface GrammarSlotTypeSetting {
  /**
   * <p>The source of the grammar used to create the slot type.</p>
   * @public
   */
  source?: GrammarSlotTypeSource | undefined;
}

/**
 * <p>Provides information about the external source of the slot type's definition.</p>
 * @public
 */
export interface ExternalSourceSetting {
  /**
   * <p>Settings required for a slot type based on a grammar that you provide.</p>
   * @public
   */
  grammarSlotTypeSetting?: GrammarSlotTypeSetting | undefined;
}

/**
 * <p>Defines one of the values for a slot type.</p>
 * @public
 */
export interface SampleValue {
  /**
   * <p>The value that can be used for a slot type.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Each slot type can have a set of values. Each
 *             <code>SlotTypeValue</code> represents a value that the slot type can
 *          take.</p>
 * @public
 */
export interface SlotTypeValue {
  /**
   * <p>The value of the slot type entry.</p>
   * @public
   */
  sampleValue?: SampleValue | undefined;

  /**
   * <p>Additional values related to the slot type entry.</p>
   * @public
   */
  synonyms?: SampleValue[] | undefined;
}

/**
 * <p>Provides a regular expression used to validate the value of a
 *          slot.</p>
 * @public
 */
export interface SlotValueRegexFilter {
  /**
   * <p>A regular expression used to validate the value of a slot.</p>
   *          <p> Use a standard regular expression. Amazon Lex supports the following
   *          characters in the regular expression: </p>
   *          <ul>
   *             <li>
   *                <p>A-Z, a-z</p>
   *             </li>
   *             <li>
   *                <p>0-9</p>
   *             </li>
   *             <li>
   *                <p>Unicode characters ("\⁠u<Unicode>")</p>
   *             </li>
   *          </ul>
   *          <p> Represent Unicode characters with four digits, for example "\⁠u0041"
   *          or "\⁠u005A". </p>
   *          <p> The following regular expression operators are not supported: </p>
   *          <ul>
   *             <li>
   *                <p>Infinite repeaters: *, +, or \{x,\} with no upper bound.</p>
   *             </li>
   *             <li>
   *                <p>Wild card (.)</p>
   *             </li>
   *          </ul>
   * @public
   */
  pattern: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SlotValueResolutionStrategy = {
  Concatenation: "Concatenation",
  OriginalValue: "OriginalValue",
  TopResolution: "TopResolution",
} as const;

/**
 * @public
 */
export type SlotValueResolutionStrategy =
  (typeof SlotValueResolutionStrategy)[keyof typeof SlotValueResolutionStrategy];

/**
 * <p>Contains settings used by Amazon Lex to select a slot value.</p>
 * @public
 */
export interface SlotValueSelectionSetting {
  /**
   * <p>Determines the slot resolution strategy that Amazon Lex uses to
   *          return slot type values. The field can be set to one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the
   *                user value is similar to the slot value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot,
   *                return the first value in the resolution list as the slot type
   *                value. If there is no resolution list, null is returned.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify the <code>valueSelectionStrategy</code>, the
   *          default is <code>ORIGINAL_VALUE</code>.</p>
   * @public
   */
  resolutionStrategy: SlotValueResolutionStrategy | undefined;

  /**
   * <p>A regular expression used to validate the value of a slot.</p>
   * @public
   */
  regexFilter?: SlotValueRegexFilter | undefined;

  /**
   * <p>Provides settings that enable advanced recognition settings for slot
   *          values. You can use this to enable using slot values as a custom
   *          vocabulary for recognizing user utterances.</p>
   * @public
   */
  advancedRecognitionSetting?: AdvancedRecognitionSetting | undefined;
}

/**
 * @public
 */
export interface CreateSlotTypeRequest {
  /**
   * <p>The name for the slot. A slot type name must be unique within the
   *          intent.</p>
   * @public
   */
  slotTypeName: string | undefined;

  /**
   * <p>A description of the slot type. Use the description to help identify
   *          the slot type in lists.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>SlotTypeValue</code> objects that defines the values
   *          that the slot type can take. Each value can have a list of synonyms,
   *          additional values that help train the machine learning model about the
   *          values that it resolves for a slot.</p>
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * <p>Determines the strategy that Amazon Lex uses to select a value from the
   *          list of possible values. The field can be set to one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ORIGINAL_VALUE</code> - Returns the value entered by the
   *                user, if the user value is similar to the slot value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_RESOLUTION</code> - If there is a resolution list for
   *                the slot, return the first value in the resolution list. If there
   *                is no resolution list, return null.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify the <code>valueSelectionSetting</code>
   *          parameter, the default is <code>ORIGINAL_VALUE</code>.</p>
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * <p>The built-in slot type used as a parent of this slot type. When you
   *          define a parent slot type, the new slot type has the configuration of
   *          the parent slot type.</p>
   *          <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * <p>The identifier of the bot associated with this slot type.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the bot version associated with this slot
   *          type.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot type will be
   *          used in. The string must match one of the supported locales. All of the
   *          bots, intents, and slots used by the slot type must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>Sets the type of external information used to create the slot
   *          type.</p>
   * @public
   */
  externalSourceSetting?: ExternalSourceSetting | undefined;

  /**
   * <p>Specifications for a composite slot type.</p>
   * @public
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting | undefined;
}

/**
 * @public
 */
export interface CreateSlotTypeResponse {
  /**
   * <p>The unique identifier assigned to the slot type. Use this to
   *          identify the slot type in the <code>UpdateSlotType</code> and
   *             <code>DeleteSlotType</code> operations.</p>
   * @public
   */
  slotTypeId?: string | undefined;

  /**
   * <p>The name specified for the slot type.</p>
   * @public
   */
  slotTypeName?: string | undefined;

  /**
   * <p>The description specified for the slot type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The list of values that the slot type can assume.</p>
   * @public
   */
  slotTypeValues?: SlotTypeValue[] | undefined;

  /**
   * <p>The strategy that Amazon Lex uses to select a value from the list of
   *          possible values.</p>
   * @public
   */
  valueSelectionSetting?: SlotValueSelectionSetting | undefined;

  /**
   * <p>The signature of the base slot type specified for the slot
   *          type.</p>
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * <p>The identifier for the bot associated with the slot type.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The specified language and local specified for the slot type.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>A timestamp of the date and time that the slot type was
   *          created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The type of external information used to create the slot
   *          type.</p>
   * @public
   */
  externalSourceSetting?: ExternalSourceSetting | undefined;

  /**
   * <p>Specifications for a composite slot type.</p>
   * @public
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting | undefined;
}

/**
 * <p>Contains information about the bot alias used for the
 *  test set discrepancy report.</p>
 * @public
 */
export interface TestSetDiscrepancyReportBotAliasTarget {
  /**
   * <p>The unique identifier for the bot alias.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The unique identifier for the bot associated with the bot alias.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The unique identifier of the locale associated with the bot alias.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * <p>Contains information about the resource used for the
 *  test set discrepancy report.</p>
 * @public
 */
export interface TestSetDiscrepancyReportResourceTarget {
  /**
   * <p>Contains information about the bot alias used as the resource for the
   *  test set discrepancy report.</p>
   * @public
   */
  botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget | undefined;
}

/**
 * @public
 */
export interface CreateTestSetDiscrepancyReportRequest {
  /**
   * <p>The test set Id for the test set discrepancy report.</p>
   * @public
   */
  testSetId: string | undefined;

  /**
   * <p>The target bot for the test set discrepancy report.</p>
   * @public
   */
  target: TestSetDiscrepancyReportResourceTarget | undefined;
}

/**
 * @public
 */
export interface CreateTestSetDiscrepancyReportResponse {
  /**
   * <p>The unique identifier of the test set discrepancy report to describe.</p>
   * @public
   */
  testSetDiscrepancyReportId?: string | undefined;

  /**
   * <p>The creation date and time for the test set discrepancy report.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>The test set Id for the test set discrepancy report.</p>
   * @public
   */
  testSetId?: string | undefined;

  /**
   * <p>The target bot for the test set discrepancy report.</p>
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
   * <p>An identifier for a unique import job. Use it when you call the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartImport.html">StartImport</a> operation.</p>
   * @public
   */
  importId?: string | undefined;

  /**
   * <p>A pre-signed S3 write URL. Upload the zip archive file that contains
   *          the definition of your bot or bot locale.</p>
   * @public
   */
  uploadUrl?: string | undefined;
}

/**
 * <p>Provides the parameters required for importing a custom vocabulary.</p>
 * @public
 */
export interface CustomVocabularyImportSpecification {
  /**
   * <p>The identifier of the bot to import the custom vocabulary to.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to import the custom vocabulary to.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the local to import the custom vocabulary to. The value must
   *             be <code>en_GB</code>.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomVocabularyStatus = {
  Creating: "Creating",
  Deleting: "Deleting",
  Exporting: "Exporting",
  Importing: "Importing",
  Ready: "Ready",
} as const;

/**
 * @public
 */
export type CustomVocabularyStatus = (typeof CustomVocabularyStatus)[keyof typeof CustomVocabularyStatus];

/**
 * <p>The object used for specifying the data range that the customer
 *             wants Amazon Lex to read through in the input transcripts.</p>
 * @public
 */
export interface DateRangeFilter {
  /**
   * <p>A timestamp indicating the start date for the date range
   *             filter.</p>
   * @public
   */
  startDateTime: Date | undefined;

  /**
   * <p>A timestamp indicating the end date for the date range
   *             filter.</p>
   * @public
   */
  endDateTime: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBotRequest {
  /**
   * <p>The identifier of the bot to delete. </p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>By default, Amazon Lex checks if any other resource, such as an alias or
   *          bot network, is using the bot version before it is deleted and throws a
   *          <code>ResourceInUseException</code> exception if the bot is
   *          being used by another resource. Set this parameter to <code>true</code>
   *          to skip this check and remove the bot even if it is being used by
   *          another resource.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBotResponse {
  /**
   * <p>The unique identifier of the bot that Amazon Lex is deleting.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The current status of the bot. The status is <code>Deleting</code>
   *          while the bot and its associated resources are being deleted.</p>
   * @public
   */
  botStatus?: BotStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotAliasRequest {
  /**
   * <p>The unique identifier of the bot alias to delete.</p>
   * @public
   */
  botAliasId: string | undefined;

  /**
   * <p>The unique identifier of the bot associated with the alias to
   *          delete.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>By default, Amazon Lex checks if any other resource, such as a bot network,
   *          is using the bot alias before it is deleted and throws a
   *          <code>ResourceInUseException</code> exception if the alias is
   *          being used by another resource. Set this parameter to <code>true</code>
   *          to skip this check and remove the alias even if it is being used by
   *          another resource.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBotAliasResponse {
  /**
   * <p>The unique identifier of the bot alias to delete.</p>
   * @public
   */
  botAliasId?: string | undefined;

  /**
   * <p>The unique identifier of the bot that contains the alias to
   *          delete.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The current status of the alias. The status is <code>Deleting</code>
   *          while the alias is in the process of being deleted. Once the alias is
   *          deleted, it will no longer appear in the list of aliases returned by
   *          the <code>ListBotAliases</code> operation.</p>
   * @public
   */
  botAliasStatus?: BotAliasStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotLocaleRequest {
  /**
   * <p>The unique identifier of the bot that contains the locale.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the locale. </p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that will be deleted. The
   *          string must match one of the supported locales. For more information,
   *          see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotLocaleResponse {
  /**
   * <p>The identifier of the bot that contained the deleted locale.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The version of the bot that contained the deleted locale.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The language and locale of the deleted locale.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The status of deleting the bot locale. The locale first enters the
   *             <code>Deleting</code> status. Once the locale is deleted it no
   *          longer appears in the list of locales for the bot.</p>
   * @public
   */
  botLocaleStatus?: BotLocaleStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotReplicaRequest {
  /**
   * <p>The unique ID of the replicated bot to be deleted from the secondary region</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The secondary region of the replicated bot that will be deleted.</p>
   * @public
   */
  replicaRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotReplicaResponse {
  /**
   * <p>The unique bot ID of the replicated bot generated.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The region of the replicated bot generated.</p>
   * @public
   */
  replicaRegion?: string | undefined;

  /**
   * <p>The operational status of the replicated bot generated.</p>
   * @public
   */
  botReplicaStatus?: BotReplicaStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBotVersionRequest {
  /**
   * <p>The identifier of the bot that contains the version.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to delete.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>By default, Amazon Lex checks if any other resource, such as an alias or bot network,
   *          is using the bot version before it is deleted and throws a
   *          <code>ResourceInUseException</code> exception if the version is
   *          being used by another resource. Set this parameter to <code>true</code>
   *          to skip this check and remove the version even if it is being used by
   *          another resource.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBotVersionResponse {
  /**
   * <p>The identifier of the bot that is being deleted.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The version of the bot that is being deleted.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The current status of the bot. </p>
   * @public
   */
  botStatus?: BotStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCustomVocabularyRequest {
  /**
   * <p>The unique identifier of the bot to remove the custom
   *       vocabulary from.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to remove the custom vocabulary
   *       from.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The locale identifier for the locale that contains the
   *       custom vocabulary to remove.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomVocabularyResponse {
  /**
   * <p>The identifier of the bot that the custom vocabulary
   *       was removed from.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The version of the bot that the custom vocabulary
   *          was removed from.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The locale identifier for the locale that the
   *          custom vocabulary was removed from.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The status of removing the custom vocabulary.</p>
   * @public
   */
  customVocabularyStatus?: CustomVocabularyStatus | undefined;
}

/**
 * @public
 */
export interface DeleteExportRequest {
  /**
   * <p>The unique identifier of the export to delete.</p>
   * @public
   */
  exportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportResponse {
  /**
   * <p>The unique identifier of the deleted export.</p>
   * @public
   */
  exportId?: string | undefined;

  /**
   * <p>The current status of the deletion. When the deletion is complete,
   *          the export will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">
   *             DescribeExport</a> operation with the export identifier will
   *          fail.</p>
   * @public
   */
  exportStatus?: ExportStatus | undefined;
}

/**
 * @public
 */
export interface DeleteImportRequest {
  /**
   * <p>The unique identifier of the import to delete.</p>
   * @public
   */
  importId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  Completed: "Completed",
  Deleting: "Deleting",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;

/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 */
export interface DeleteImportResponse {
  /**
   * <p>The unique identifier of the deleted import.</p>
   * @public
   */
  importId?: string | undefined;

  /**
   * <p>The current status of the deletion. When the deletion is complete,
   *          the import will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeImport.html">DescribeImport</a> operation with the import identifier will
   *          fail.</p>
   * @public
   */
  importStatus?: ImportStatus | undefined;
}

/**
 * @public
 */
export interface DeleteIntentRequest {
  /**
   * <p>The unique identifier of the intent to delete.</p>
   * @public
   */
  intentId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the intent.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where the bot will be
   *          deleted. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that has the
   *          resource policy attached.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The identifier of the revision to edit. If this ID doesn't match the
   *          current revision number, Amazon Lex returns an exception</p>
   *          <p>If you don't specify a revision ID, Amazon Lex will delete the current
   *          policy.</p>
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy was deleted from.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyStatementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the statement (SID) to delete from the policy.</p>
   * @public
   */
  statementId: string | undefined;

  /**
   * <p>The identifier of the revision of the policy to delete the statement
   *          from. If this revision ID doesn't match the current revision ID, Amazon Lex
   *          throws an exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex removes the current contents
   *          of the statement. </p>
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyStatementResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy statement was removed from.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlotRequest {
  /**
   * <p>The identifier of the slot to delete. </p>
   * @public
   */
  slotId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the slot to delete.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot to delete.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot will be
   *          deleted from. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent associated with the slot.</p>
   * @public
   */
  intentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlotTypeRequest {
  /**
   * <p>The identifier of the slot type to delete.</p>
   * @public
   */
  slotTypeId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the slot type.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot type will be
   *          deleted from. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   * @public
   */
  localeId: string | undefined;

  /**
   * <p>By default, the <code>DeleteSlotType</code> operations throws a
   *             <code>ResourceInUseException</code> exception if you try to delete a
   *          slot type used by a slot. Set the <code>skipResourceInUseCheck</code>
   *          parameter to <code>true</code> to skip this check and remove the slot
   *          type even if a slot uses it.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTestSetRequest {
  /**
   * <p>The test set Id of the test set to be deleted.</p>
   * @public
   */
  testSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUtterancesRequest {
  /**
   * <p>The unique identifier of the bot that contains the
   *          utterances.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the language and locale where the utterances were
   *          collected. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   * @public
   */
  localeId?: string | undefined;

  /**
   * <p>The unique identifier of the session with the user. The ID is
   *          returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html">RecognizeText</a> and <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html">RecognizeUtterance</a> operations.</p>
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
   * <p>The unique identifier of the bot to describe.</p>
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBotResponse {
  /**
   * <p>The unique identifier of the bot.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The name of the bot.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The description of the bot. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Settings for managing data privacy of the bot and its conversations
   *          with users.</p>
   * @public
   */
  dataPrivacy?: DataPrivacy | undefined;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *          a conversation.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The current status of the bot. When the status is
   *             <code>Available</code> the bot is ready to be used in conversations
   *          with users.</p>
   * @public
   */
  botStatus?: BotStatus | undefined;

  /**
   * <p>A timestamp of the date and time that the bot was created.</p>
   * @public
   */
  creationDateTime?: Date | undefined;

  /**
   * <p>A timestamp of the date and time that the bot was last
   *          updated.</p>
   * @public
   */
  lastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The type of the bot that was described.</p>
   * @public
   */
  botType?: BotType | undefined;

  /**
   * <p>The list of bots in the network that was described.</p>
   * @public
   */
  botMembers?: BotMember[] | undefined;

  /**
   * <p>If the <code>botStatus</code> is <code>Failed</code>, this contains
   *          a list of reasons that the bot couldn't be built.</p>
   * @public
   */
  failureReasons?: string[] | undefined;

  /**
   * <p>Contains the configuration for error logging that specifies where and how bot errors are recorded, including destinations like CloudWatch Logs.</p>
   * @public
   */
  errorLogSettings?: ErrorLogSettings | undefined;
}
